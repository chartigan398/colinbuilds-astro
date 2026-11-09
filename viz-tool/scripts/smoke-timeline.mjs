/**
 * Smoke test for timeline builder logic (duplicated lightly so we can run in Node
 * without DOM / Web Audio). Validates event generation shape against a mock map.
 */

function buildTimeline(reaction, pack, knobs, faceAssetCount) {
  const events = [];
  const minGap = Math.max(0.04, knobs.cutRate);
  const lastFire = new Map();
  let faceCursor = 0;
  const step = 1 / 30;

  for (let t = 0; t < reaction.duration; t += step) {
    for (const rule of pack.rules) {
      let strength = 0;
      if (rule.trigger === 'onset') {
        strength = reaction.onsets.some((o) => Math.abs(o - t) < 0.03) ? 1 : 0;
      } else if (rule.trigger === 'energy') {
        const f = reaction.frames[Math.round(t * 30)] ?? { rms: 0 };
        strength = f.rms;
      } else {
        strength = 0.6;
      }
      if (strength < rule.threshold * (1.15 - knobs.intensity * 0.4)) continue;
      const last = lastFire.get(rule.id) ?? -Infinity;
      if (t - last < minGap) continue;
      if (rule.effect === 'flash-image' && faceAssetCount <= 0) continue;
      const assetIndex =
        rule.effect === 'flash-image' ? faceCursor++ % faceAssetCount : undefined;
      events.push({
        kind: rule.effect,
        start: t,
        end: t + rule.durationMs / 1000,
        assetIndex,
      });
      lastFire.set(rule.id, t);
    }
  }
  return events;
}

const reaction = {
  duration: 4,
  onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
  frames: Array.from({ length: 120 }, (_, i) => ({
    t: i / 30,
    rms: i > 60 ? 0.9 : 0.4,
  })),
};

const pack = {
  rules: [
    { id: 'a', trigger: 'onset', threshold: 0.3, durationMs: 70, effect: 'strobe', intensity: 1 },
    {
      id: 'b',
      trigger: 'onset',
      threshold: 0.3,
      durationMs: 160,
      effect: 'flash-image',
      intensity: 1,
    },
  ],
};

const knobs = { intensity: 0.8, cutRate: 0.12, packMix: 1, colorGrade: 'none' };
const events = buildTimeline(reaction, pack, knobs, 2);
const strobes = events.filter((e) => e.kind === 'strobe');
const faces = events.filter((e) => e.kind === 'flash-image');

if (strobes.length < 4) {
  console.error('Expected several strobe events, got', strobes.length);
  process.exit(1);
}
if (faces.length < 4) {
  console.error('Expected face flashes, got', faces.length);
  process.exit(1);
}
if (faces.some((e) => e.assetIndex === undefined)) {
  console.error('Face events missing assetIndex');
  process.exit(1);
}

console.log(
  `smoke-timeline ok — ${events.length} events (${strobes.length} strobes, ${faces.length} faces)`,
);
