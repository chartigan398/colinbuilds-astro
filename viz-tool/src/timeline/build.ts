import { sampleFrameAt, sectionAt } from '../audio/analyze';
import type {
  AssetPack,
  FieldEvent,
  GlobalKnobs,
  ReactionMap,
  Timeline,
} from '../packs/types';

/**
 * Build discrete field events. Continuous warp is driven every frame from the
 * reaction map — these only mark shockwaves and apparition phasing moments.
 */
export function buildTimeline(
  reaction: ReactionMap,
  pack: AssetPack,
  knobs: GlobalKnobs,
  faceAssetCount: number,
): Timeline {
  const events: FieldEvent[] = [];
  const minShockGap = 0.08 + knobs.coherence * 0.1;
  let lastShock = -Infinity;
  let faceCursor = 0;

  for (const t of reaction.onsets) {
    if (t - lastShock < minShockGap) continue;
    const frame = sampleFrameAt(reaction, t);
    const intensity = Math.min(
      1,
      (0.55 + frame.low * 0.45) * knobs.intensity * pack.shockwaveAmp,
    );

    // Stable-ish origin from time so shockwaves come from different points
    const ox = 0.35 + 0.3 * Math.sin(t * 2.7 + frame.mid * 4.0);
    const oy = 0.4 + 0.25 * Math.cos(t * 1.9 + frame.high * 3.0);

    events.push({
      id: `shock-${t.toFixed(3)}`,
      kind: 'shockwave',
      t,
      intensity,
      origin: { x: ox, y: oy },
    });
    lastShock = t;

    // Apparition phase-ins on stronger hits
    if (pack.apparitions && faceAssetCount > 0) {
      const want =
        frame.rms > 0.45 - knobs.apparitionMix * 0.2 ||
        frame.mid > 0.5 ||
        sectionAt(reaction, t)?.label === 'chorus' ||
        sectionAt(reaction, t)?.label === 'drop';
      if (want && knobs.apparitionMix > 0.12) {
        events.push({
          id: `app-${t.toFixed(3)}`,
          kind: 'apparition',
          t,
          intensity:
            knobs.apparitionMix *
            pack.apparitionStrength *
            (0.6 + frame.rms * 0.4),
          assetIndex: faceCursor % faceAssetCount,
        });
        faceCursor++;
      }
    }

    // Rifts on very heavy low energy (tear the field open)
    if (frame.low > 0.72 && knobs.intensity > 0.4) {
      events.push({
        id: `rift-${t.toFixed(3)}`,
        kind: 'rift',
        t,
        intensity: frame.low * knobs.intensity * (1.1 - knobs.coherence * 0.4),
        origin: { x: ox, y: oy },
      });
    }
  }

  events.sort((a, b) => a.t - b.t);
  return { duration: reaction.duration, events, reaction, pack };
}

export function recentEvents(
  timeline: Timeline,
  t: number,
  kind: FieldEvent['kind'],
  windowSec: number,
): FieldEvent[] {
  return timeline.events.filter(
    (e) => e.kind === kind && t >= e.t && t - e.t <= windowSec,
  );
}
