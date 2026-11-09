import type { ReactionFrame, ReactionMap, SectionMarker } from '../packs/types';

const HOP = 1024;
const FRAME_DT = 1 / 30;

function rms(samples: Float32Array, start: number, len: number): number {
  let sum = 0;
  const end = Math.min(start + len, samples.length);
  for (let i = start; i < end; i++) {
    const v = samples[i]!;
    sum += v * v;
  }
  return Math.sqrt(sum / Math.max(1, end - start));
}

/** Simple DFT band energy for a window (low/mid/high). */
function bandEnergies(
  samples: Float32Array,
  start: number,
  len: number,
  sampleRate: number,
): { low: number; mid: number; high: number } {
  const n = Math.min(len, samples.length - start);
  if (n < 64) return { low: 0, mid: 0, high: 0 };

  // Downsample-ish: use a short window and a few bins via Goertzel-style sums
  const window = Math.min(n, 2048);
  let low = 0;
  let mid = 0;
  let high = 0;

  // Approximate spectral energy with filtered absolute differences
  let prev = samples[start]!;
  let bassAcc = 0;
  let midAcc = 0;
  let highAcc = 0;
  let bassState = 0;
  let midState = 0;

  const bassAlpha = Math.exp((-2 * Math.PI * 150) / sampleRate);
  const midAlpha = Math.exp((-2 * Math.PI * 2000) / sampleRate);

  for (let i = 0; i < window; i++) {
    const x = samples[start + i]!;
    bassState = bassAlpha * bassState + (1 - bassAlpha) * x;
    const midBand = x - bassState;
    midState = midAlpha * midState + (1 - midAlpha) * midBand;
    const highBand = midBand - midState;

    bassAcc += bassState * bassState;
    midAcc += midState * midState;
    highAcc += highBand * highBand;

    const diff = Math.abs(x - prev);
    highAcc += diff * diff * 0.15;
    prev = x;
  }

  low = Math.sqrt(bassAcc / window);
  mid = Math.sqrt(midAcc / window);
  high = Math.sqrt(highAcc / window);
  return { low, mid, high };
}

function normalizeSeries(values: number[]): number[] {
  let max = 1e-9;
  for (const v of values) if (v > max) max = v;
  return values.map((v) => Math.min(1, v / max));
}

function detectOnsets(
  energy: number[],
  times: number[],
  minGapSec = 0.12,
): number[] {
  const onsets: number[] = [];
  let last = -Infinity;

  // Rolling mean / std for adaptive peak picking
  const win = 16;
  for (let i = 2; i < energy.length - 1; i++) {
    const prev = energy[i - 1]!;
    const cur = energy[i]!;
    const next = energy[i + 1]!;
    const flux = Math.max(0, cur - prev);

    let mean = 0;
    let start = Math.max(0, i - win);
    let end = Math.min(energy.length, i + 1);
    for (let j = start; j < end; j++) mean += energy[j]!;
    mean /= Math.max(1, end - start);

    let vsum = 0;
    for (let j = start; j < end; j++) {
      const d = energy[j]! - mean;
      vsum += d * d;
    }
    const std = Math.sqrt(vsum / Math.max(1, end - start));
    const threshold = mean * 0.55 + std * 0.9 + 0.035;

    const isPeak = cur >= prev && cur >= next;
    if (isPeak && (flux > threshold * 0.35 || cur > threshold)) {
      const t = times[i]!;
      if (t - last >= minGapSec) {
        onsets.push(t);
        last = t;
      }
    }
  }
  return onsets;
}

/** Fill sparse onset lists with a tempo grid so visuals stay dense. */
function densifyOnsets(
  onsets: number[],
  duration: number,
  bpm: number,
): number[] {
  const step = 60 / Math.max(70, bpm);
  const grid: number[] = [];
  // Align grid to first onset when possible
  const origin = onsets[0] ?? 0;
  for (let t = origin; t < duration; t += step) grid.push(Number(t.toFixed(4)));
  for (let t = origin - step; t >= 0; t -= step) grid.push(Number(t.toFixed(4)));

  const merged = [...onsets, ...grid].sort((a, b) => a - b);
  const out: number[] = [];
  let last = -Infinity;
  const minGap = step * 0.45;
  for (const t of merged) {
    if (t < 0 || t > duration) continue;
    if (t - last >= minGap) {
      out.push(t);
      last = t;
    }
  }
  return out;
}

function estimateBpm(onsets: number[], _duration: number): number {
  if (onsets.length < 4) return 120;
  const intervals: number[] = [];
  for (let i = 1; i < onsets.length; i++) {
    const dt = onsets[i]! - onsets[i - 1]!;
    // Prefer beat-length gaps; ignore very tight sub-divisions (hats)
    if (dt >= 0.28 && dt <= 0.75) intervals.push(dt);
  }
  if (!intervals.length) {
    for (let i = 1; i < onsets.length; i++) {
      const dt = onsets[i]! - onsets[i - 1]!;
      if (dt > 0.2 && dt < 1.2) intervals.push(dt);
    }
  }
  if (!intervals.length) return 120;

  // Soft-histogram in 70–160 BPM, collapsing near-neighbors
  const buckets = new Map<number, number>();
  for (const dt of intervals) {
    let bpm = Math.round(60 / dt);
    // Fold common double-time detections down
    if (bpm > 160) bpm = Math.round(bpm / 2);
    if (bpm < 70) bpm = Math.round(bpm * 2);
    const key = Math.round(bpm / 2) * 2; // 2-BPM bins
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }
  let best = 120;
  let bestCount = 0;
  for (const [bpm, count] of buckets) {
    if (count > bestCount) {
      best = bpm;
      bestCount = count;
    }
  }
  return Math.min(160, Math.max(70, best));
}

function detectSections(frames: ReactionFrame[]): SectionMarker[] {
  if (!frames.length) return [];
  const window = 45; // ~1.5s at 30fps
  const smoothed: number[] = frames.map((_, i) => {
    let sum = 0;
    let n = 0;
    for (let j = Math.max(0, i - window); j <= Math.min(frames.length - 1, i + window); j++) {
      sum += frames[j]!.rms;
      n++;
    }
    return sum / n;
  });

  const mean =
    smoothed.reduce((a, b) => a + b, 0) / Math.max(1, smoothed.length);
  const sections: SectionMarker[] = [];
  let lastLabel: SectionMarker['label'] | null = null;
  let lastT = -Infinity;

  for (let i = 0; i < frames.length; i += 15) {
    const e = smoothed[i]!;
    const t = frames[i]!.t;
    let label: SectionMarker['label'] = 'calm';
    if (e > mean * 1.35) label = 'chorus';
    else if (e > mean * 1.15) label = 'drop';
    else if (e > mean * 0.95) label = 'build';
    else label = 'calm';

    if (label !== lastLabel && t - lastT > 2.5) {
      sections.push({ t, label, energy: e });
      lastLabel = label;
      lastT = t;
    }
  }

  if (!sections.length) {
    sections.push({ t: 0, label: 'build', energy: mean });
  }
  return sections;
}

export async function decodeAudioFile(file: File): Promise<AudioBuffer> {
  const ctx = new AudioContext();
  try {
    const ab = await file.arrayBuffer();
    return await ctx.decodeAudioData(ab.slice(0));
  } finally {
    await ctx.close();
  }
}

export async function analyzeAudioBuffer(
  buffer: AudioBuffer,
): Promise<ReactionMap> {
  const sampleRate = buffer.sampleRate;
  const channel = buffer.getChannelData(0);
  // Mixdown if stereo
  let samples = channel;
  if (buffer.numberOfChannels > 1) {
    const mixed = new Float32Array(channel.length);
    const ch1 = buffer.getChannelData(1);
    for (let i = 0; i < mixed.length; i++) {
      mixed[i] = (channel[i]! + ch1[i]!) * 0.5;
    }
    samples = mixed;
  }

  const duration = buffer.duration;
  const hop = HOP;
  const energies: number[] = [];
  const lows: number[] = [];
  const mids: number[] = [];
  const highs: number[] = [];
  const times: number[] = [];

  for (let start = 0; start + hop < samples.length; start += hop) {
    const t = start / sampleRate;
    times.push(t);
    energies.push(rms(samples, start, hop));
    const bands = bandEnergies(samples, start, hop, sampleRate);
    lows.push(bands.low);
    mids.push(bands.mid);
    highs.push(bands.high);
  }

  const nEnergy = normalizeSeries(energies);
  const nLow = normalizeSeries(lows);
  const nMid = normalizeSeries(mids);
  const nHigh = normalizeSeries(highs);

  const rawOnsets = detectOnsets(nEnergy, times, 0.08);
  const bpmEstimate = estimateBpm(rawOnsets, duration);
  const onsets = densifyOnsets(rawOnsets, duration, bpmEstimate);

  // Resample to ~30fps frames for the compositor
  const frames: ReactionFrame[] = [];
  for (let t = 0; t < duration; t += FRAME_DT) {
    const idx = Math.min(
      nEnergy.length - 1,
      Math.max(0, Math.floor((t * sampleRate) / hop)),
    );
    frames.push({
      t,
      rms: nEnergy[idx] ?? 0,
      low: nLow[idx] ?? 0,
      mid: nMid[idx] ?? 0,
      high: nHigh[idx] ?? 0,
    });
  }

  const sections = detectSections(frames);

  return {
    duration,
    sampleRate,
    onsets,
    frames,
    sections,
    bpmEstimate,
  };
}

export function sampleFrameAt(reaction: ReactionMap, t: number): ReactionFrame {
  if (!reaction.frames.length) {
    return { t, rms: 0, low: 0, mid: 0, high: 0 };
  }
  const f = t * 30;
  const i0 = Math.min(reaction.frames.length - 1, Math.max(0, Math.floor(f)));
  const i1 = Math.min(reaction.frames.length - 1, i0 + 1);
  const a = reaction.frames[i0]!;
  const b = reaction.frames[i1]!;
  const u = f - i0;
  return {
    t,
    rms: a.rms + (b.rms - a.rms) * u,
    low: a.low + (b.low - a.low) * u,
    mid: a.mid + (b.mid - a.mid) * u,
    high: a.high + (b.high - a.high) * u,
  };
}

export function sectionAt(
  reaction: ReactionMap,
  t: number,
): SectionMarker | null {
  let current: SectionMarker | null = null;
  for (const s of reaction.sections) {
    if (s.t <= t) current = s;
    else break;
  }
  return current;
}
