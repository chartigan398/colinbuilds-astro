/** Smoke: field event builder shape (Node, no WebGL). */

function buildTimeline(reaction, pack, knobs, faceAssetCount) {
  const events = [];
  let lastShock = -Infinity;
  let faceCursor = 0;
  const minShockGap = 0.08 + knobs.coherence * 0.1;

  for (const t of reaction.onsets) {
    if (t - lastShock < minShockGap) continue;
    const frame = reaction.frames[Math.round(t * 30)] ?? { rms: 0.5, low: 0.5, mid: 0.4 };
    events.push({ kind: 'shockwave', t, intensity: frame.low });
    lastShock = t;
    if (pack.apparitions && faceAssetCount > 0 && frame.rms > 0.4) {
      events.push({
        kind: 'apparition',
        t,
        assetIndex: faceCursor++ % faceAssetCount,
      });
    }
  }
  return events;
}

const reaction = {
  duration: 4,
  onsets: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
  frames: Array.from({ length: 120 }, (_, i) => ({
    t: i / 30,
    rms: i > 60 ? 0.9 : 0.5,
    low: 0.6,
    mid: 0.4,
  })),
};

const events = buildTimeline(
  reaction,
  { apparitions: true },
  { intensity: 0.8, coherence: 0.4, apparitionMix: 0.7 },
  2,
);
const shocks = events.filter((e) => e.kind === 'shockwave');
const apps = events.filter((e) => e.kind === 'apparition');
if (shocks.length < 4) {
  console.error('expected shockwaves', shocks.length);
  process.exit(1);
}
if (apps.length < 2) {
  console.error('expected apparitions', apps.length);
  process.exit(1);
}
console.log(`smoke-timeline ok — ${events.length} events (${shocks.length} shocks, ${apps.length} apparitions)`);
