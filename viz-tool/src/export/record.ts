import type { GlobalKnobs, Timeline } from '../packs/types';
import type { Compositor, CompositorAssets } from '../render/compositor';

export interface ExportOptions {
  fps?: number;
  /** Max duration to export; defaults to full timeline */
  duration?: number;
  mimeType?: string;
}

export interface PlaybackController {
  play: () => void;
  pause: () => void;
  seek: (t: number) => void;
  destroy: () => void;
  getCurrentTime: () => number;
  isPlaying: () => boolean;
}

/**
 * Sync canvas compositor to an AudioBufferSource / HTMLAudioElement clock.
 */
export function createPlayback(
  compositor: Compositor,
  timeline: Timeline,
  assets: CompositorAssets,
  knobs: () => GlobalKnobs,
  audioBuffer: AudioBuffer,
  onTime?: (t: number) => void,
): PlaybackController {
  const audioCtx = new AudioContext();
  let source: AudioBufferSourceNode | null = null;
  let startedAt = 0;
  let offset = 0;
  let playing = false;
  let raf = 0;

  const tick = () => {
    if (!playing) return;
    const t = Math.min(
      timeline.duration,
      offset + (audioCtx.currentTime - startedAt),
    );
    compositor.drawFrame(timeline, t, assets, knobs());
    onTime?.(t);
    if (t >= timeline.duration - 0.01) {
      playing = false;
      onTime?.(timeline.duration);
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  const stopSource = () => {
    if (source) {
      try {
        source.stop();
      } catch {
        /* already stopped */
      }
      source.disconnect();
      source = null;
    }
  };

  return {
    play() {
      if (playing) return;
      stopSource();
      source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      startedAt = audioCtx.currentTime;
      source.start(0, offset);
      playing = true;
      if (audioCtx.state === 'suspended') void audioCtx.resume();
      raf = requestAnimationFrame(tick);
    },
    pause() {
      if (!playing) return;
      offset = Math.min(
        timeline.duration,
        offset + (audioCtx.currentTime - startedAt),
      );
      playing = false;
      stopSource();
      cancelAnimationFrame(raf);
      compositor.drawFrame(timeline, offset, assets, knobs());
      onTime?.(offset);
    },
    seek(t: number) {
      offset = Math.max(0, Math.min(timeline.duration, t));
      if (playing) {
        playing = false;
        stopSource();
        this.play();
      } else {
        compositor.drawFrame(timeline, offset, assets, knobs());
        onTime?.(offset);
      }
    },
    destroy() {
      playing = false;
      stopSource();
      cancelAnimationFrame(raf);
      void audioCtx.close();
    },
    getCurrentTime() {
      if (playing) {
        return Math.min(
          timeline.duration,
          offset + (audioCtx.currentTime - startedAt),
        );
      }
      return offset;
    },
    isPlaying() {
      return playing;
    },
  };
}

/**
 * Offline-ish export: play through the timeline while capturing canvas + audio
 * via MediaRecorder. Returns a WebM Blob.
 */
export async function exportVideo(
  compositor: Compositor,
  timeline: Timeline,
  assets: CompositorAssets,
  knobs: GlobalKnobs,
  audioBuffer: AudioBuffer,
  options: ExportOptions = {},
  onProgress?: (ratio: number) => void,
): Promise<Blob> {
  const fps = options.fps ?? 30;
  const duration = Math.min(options.duration ?? timeline.duration, timeline.duration);
  const mimeType =
    options.mimeType ??
    pickMimeType([
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
    ]);

  const audioCtx = new AudioContext();
  const dest = audioCtx.createMediaStreamDestination();
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(dest);
  source.connect(audioCtx.destination);

  const canvasStream = compositor.canvas.captureStream(fps);
  const mixed = new MediaStream([
    ...canvasStream.getVideoTracks(),
    ...dest.stream.getAudioTracks(),
  ]);

  const chunks: BlobPart[] = [];
  const recorder = new MediaRecorder(mixed, {
    mimeType,
    videoBitsPerSecond: 8_000_000,
  });

  const done = new Promise<Blob>((resolve, reject) => {
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    recorder.onerror = () => reject(new Error('MediaRecorder failed'));
    recorder.onstop = () => {
      resolve(new Blob(chunks, { type: mimeType.split(';')[0] }));
    };
  });

  if (audioCtx.state === 'suspended') await audioCtx.resume();

  let raf = 0;
  const wallStart = performance.now();
  const startAudioAt = audioCtx.currentTime + 0.05;

  const drawLoop = () => {
    const elapsed = (performance.now() - wallStart) / 1000;
    const t = Math.min(duration, elapsed);
    compositor.drawFrame(timeline, t, assets, knobs);
    onProgress?.(t / duration);
    if (t < duration) {
      raf = requestAnimationFrame(drawLoop);
    } else {
      recorder.stop();
      try {
        source.stop();
      } catch {
        /* ignore */
      }
      cancelAnimationFrame(raf);
      void audioCtx.close();
    }
  };

  recorder.start(100);
  source.start(startAudioAt, 0, duration);
  raf = requestAnimationFrame(drawLoop);

  try {
    return await done;
  } finally {
    cancelAnimationFrame(raf);
    canvasStream.getTracks().forEach((tr) => tr.stop());
  }
}

function pickMimeType(candidates: string[]): string {
  for (const m of candidates) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(m)) {
      return m;
    }
  }
  return 'video/webm';
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
