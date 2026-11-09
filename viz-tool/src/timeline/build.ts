import { sampleFrameAt, sectionAt } from '../audio/analyze';
import type {
  AssetPack,
  GlobalKnobs,
  LayerEvent,
  PackRule,
  ReactionMap,
  Timeline,
  TriggerKind,
} from '../packs/types';

function signalAt(
  reaction: ReactionMap,
  t: number,
  trigger: TriggerKind,
): number {
  const frame = sampleFrameAt(reaction, t);
  switch (trigger) {
    case 'onset':
      return 0;
    case 'energy':
      return frame.rms;
    case 'band-low':
      return frame.low;
    case 'band-high':
      return frame.high;
    case 'section': {
      const sec = sectionAt(reaction, t);
      if (!sec) return 0;
      if (sec.label === 'chorus' || sec.label === 'drop') return sec.energy;
      if (sec.label === 'build') return sec.energy * 0.7;
      return sec.energy * 0.35;
    }
    default:
      return 0;
  }
}

/** Stable 0–1 hash so rebuilds don't reshuffle which hits fire. */
function mixGate(ruleId: string, t: number, packMix: number): boolean {
  // Face flashes / strobes should remain dense at mid mix
  const keep = packMix * 0.9 + 0.1;
  let h = 0;
  const key = `${ruleId}:${t.toFixed(3)}`;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h / 0xffffffff < keep;
}

function pushEvent(
  events: LayerEvent[],
  lastFire: Map<string, number>,
  rule: PackRule,
  t: number,
  strength: number,
  knobs: GlobalKnobs,
  faceAssetCount: number,
  faceCursor: { n: number },
  minGap: number,
) {
  const threshold = rule.threshold * (1.15 - knobs.intensity * 0.4);
  if (strength < threshold) return;

  const isFace = rule.effect === 'flash-image';
  if (isFace) {
    if (faceAssetCount <= 0) return;
    // Keep faces unless pack mix is very low
    if (knobs.packMix < 0.15) return;
  } else {
    const isPackForward =
      rule.effect === 'strobe' ||
      rule.effect === 'invert' ||
      rule.effect === 'hard-cut';
    if (isPackForward && !mixGate(rule.id, t, knobs.packMix)) return;
  }

  const last = lastFire.get(rule.id) ?? -Infinity;
  const gap =
    rule.effect === 'hard-cut' || rule.effect === 'strobe' || isFace
      ? minGap
      : minGap * 1.4;
  if (t - last < gap) return;

  const intensity = Math.min(
    1,
    strength * (rule.intensity ?? 1) * knobs.intensity,
  );

  let assetIndex: number | undefined;
  if (isFace) {
    assetIndex = faceCursor.n % faceAssetCount;
    faceCursor.n++;
  }

  const durationSec =
    (rule.durationMs / 1000) * (0.85 + knobs.intensity * 0.45);

  events.push({
    id: `${rule.id}-${t.toFixed(3)}`,
    kind: rule.effect,
    start: t,
    end: t + durationSec,
    intensity,
    color: rule.color,
    blend: rule.blend,
    assetIndex,
    ruleId: rule.id,
  });
  lastFire.set(rule.id, t);
}

/**
 * Build a timed layer event list from reaction map + pack rules + knobs.
 */
export function buildTimeline(
  reaction: ReactionMap,
  pack: AssetPack,
  knobs: GlobalKnobs,
  faceAssetCount: number,
): Timeline {
  const events: LayerEvent[] = [];
  const minGap = Math.max(0.04, knobs.cutRate);
  const lastFire = new Map<string, number>();
  const faceCursor = { n: 0 };

  const onsetRules = pack.rules.filter((r) => r.trigger === 'onset');
  const continuousRules = pack.rules.filter((r) => r.trigger !== 'onset');

  // Fire onset-driven rules at exact onset timestamps (avoids 30fps miss)
  for (const t of reaction.onsets) {
    for (const rule of onsetRules) {
      pushEvent(
        events,
        lastFire,
        rule,
        t,
        1,
        knobs,
        faceAssetCount,
        faceCursor,
        minGap,
      );
    }
  }

  // Continuous / energy / band / section rules sampled at ~30fps
  const step = 1 / 30;
  for (let t = 0; t < reaction.duration; t += step) {
    for (const rule of continuousRules) {
      if (rule.trigger === 'section') {
        const sec = sectionAt(reaction, t);
        if (!sec || (sec.label !== 'chorus' && sec.label !== 'drop')) continue;
      }
      const strength = signalAt(reaction, t, rule.trigger);
      pushEvent(
        events,
        lastFire,
        rule,
        t,
        strength,
        knobs,
        faceAssetCount,
        faceCursor,
        minGap,
      );
    }
  }

  events.sort((a, b) => a.start - b.start);

  return { duration: reaction.duration, events, reaction };
}

export function activeEvents(timeline: Timeline, t: number): LayerEvent[] {
  return timeline.events.filter((e) => t >= e.start && t < e.end);
}
