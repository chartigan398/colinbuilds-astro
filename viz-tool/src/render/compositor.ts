import { sampleFrameAt } from '../audio/analyze';
import { activeEvents } from '../timeline/build';
import type {
  ColorGrade,
  GlobalKnobs,
  LayerEvent,
  Timeline,
} from '../packs/types';

export interface CompositorAssets {
  baseArt: HTMLImageElement | null;
  faces: HTMLImageElement[];
}

export class Compositor {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  width: number;
  height: number;

  constructor(canvas: HTMLCanvasElement, width = 1280, height = 720) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('Canvas 2D not available');
    this.ctx = ctx;
  }

  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  drawFrame(
    timeline: Timeline,
    t: number,
    assets: CompositorAssets,
    knobs: GlobalKnobs,
  ) {
    const { ctx, width, height } = this;
    const frame = sampleFrameAt(timeline.reaction, t);
    const events = activeEvents(timeline, t);

    let zoom = 1 + frame.rms * 0.04 * knobs.intensity;
    let shakeX = 0;
    let shakeY = 0;
    let invert = false;
    let hardCutFlash = 0;

    for (const e of events) {
      const life = eventLife(e, t);
      if (e.kind === 'zoom-pulse') {
        zoom += e.intensity * 0.12 * life;
      }
      if (e.kind === 'shake') {
        const amp = e.intensity * 14 * life;
        shakeX += (Math.random() - 0.5) * amp;
        shakeY += (Math.random() - 0.5) * amp;
      }
      if (e.kind === 'invert') invert = true;
      if (e.kind === 'hard-cut') hardCutFlash = Math.max(hardCutFlash, e.intensity * life);
    }

    ctx.save();
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, width, height);

    ctx.translate(width / 2 + shakeX, height / 2 + shakeY);
    ctx.scale(zoom, zoom);
    ctx.translate(-width / 2, -height / 2);

    // Base art
    if (assets.baseArt) {
      drawCover(ctx, assets.baseArt, width, height, frame.rms * knobs.intensity);
    } else {
      drawFallbackBackdrop(ctx, width, height, frame, t);
    }

    if (invert) {
      ctx.save();
      ctx.globalCompositeOperation = 'difference';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    // Soft washes under the grade
    for (const e of events) {
      if (e.kind !== 'color-wash') continue;
      drawWash(ctx, width, height, e, eventLife(e, t));
    }

    ctx.restore();

    applyColorGrade(ctx, width, height, knobs.colorGrade, frame.rms);

    // Subtle vignette (before punch effects so strobes/faces stay bright)
    const grad = ctx.createRadialGradient(
      width / 2,
      height / 2,
      height * 0.25,
      width / 2,
      height / 2,
      height * 0.85,
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Punchy effects drawn last so grade/vignette cannot crush them
    for (const e of events) {
      const life = eventLife(e, t);
      if (e.kind === 'strobe') drawStrobe(ctx, width, height, e, life);
      if (e.kind === 'flash-image') {
        drawFaceFlash(ctx, width, height, e, life, assets.faces, knobs.packMix);
      }
    }

    if (hardCutFlash > 0.05) {
      ctx.save();
      ctx.globalAlpha = hardCutFlash * 0.95;
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }
  }
}

function eventLife(e: LayerEvent, t: number): number {
  const dur = Math.max(0.001, e.end - e.start);
  const u = Math.min(1, Math.max(0, (t - e.start) / dur));
  // Hold the attack a bit longer so flashes are visible, then decay
  if (u < 0.18) return 1;
  const decayU = (u - 0.18) / 0.82;
  return Math.exp(-2.4 * decayU) * (1 - decayU * 0.1);
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
  pulse: number,
) {
  const scale = coverScale(img.width, img.height, width, height) * (1 + pulse * 0.03);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (width - w) / 2;
  const y = (height - h) / 2;
  ctx.drawImage(img, x, y, w, h);

  // Slight darken for readability of flashes
  ctx.fillStyle = `rgba(0,0,0,${0.12 + pulse * 0.08})`;
  ctx.fillRect(0, 0, width, height);
}

function coverScale(
  iw: number,
  ih: number,
  cw: number,
  ch: number,
): number {
  return Math.max(cw / iw, ch / ih);
}

function drawFallbackBackdrop(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  frame: { rms: number; low: number; high: number },
  t: number,
) {
  const g = ctx.createLinearGradient(0, 0, width, height);
  g.addColorStop(0, `hsl(${210 + frame.low * 40}, 40%, ${8 + frame.rms * 10}%)`);
  g.addColorStop(1, `hsl(${320 + frame.high * 30}, 45%, ${6 + frame.rms * 8}%)`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = `rgba(255,255,255,${0.04 + frame.rms * 0.08})`;
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    const y = ((t * 40 + i * 90) % (height + 40)) - 20;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y + Math.sin(t + i) * 20);
    ctx.stroke();
  }
}

function drawStrobe(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  e: LayerEvent,
  life: number,
) {
  ctx.save();
  ctx.globalAlpha = Math.min(1, e.intensity * life);
  ctx.globalCompositeOperation = e.blend ?? 'lighter';
  ctx.fillStyle = e.color ?? '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function drawWash(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  e: LayerEvent,
  life: number,
) {
  ctx.save();
  ctx.globalAlpha = Math.min(0.85, e.intensity * life * 0.7);
  ctx.globalCompositeOperation = e.blend ?? 'overlay';
  const g = ctx.createRadialGradient(
    width * 0.5,
    height * 0.4,
    20,
    width * 0.5,
    height * 0.5,
    height * 0.7,
  );
  g.addColorStop(0, e.color ?? '#7dd3fc');
  g.addColorStop(1, 'transparent');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function drawFaceFlash(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  e: LayerEvent,
  life: number,
  faces: HTMLImageElement[],
  packMix: number,
) {
  if (!faces.length) return;
  const img = faces[e.assetIndex ?? 0] ?? faces[0]!;
  ctx.save();

  // Hard white hit held long enough to read on beat (life decays exponentially)
  if (life > 0.2) {
    ctx.globalAlpha = Math.min(1, 0.55 + e.intensity * life * 0.45);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#f7f7f7';
    ctx.fillRect(0, 0, width, height);
  }

  ctx.globalAlpha = Math.min(1, e.intensity * Math.min(1, life * 1.4) * (0.8 + packMix * 0.2));
  ctx.globalCompositeOperation = e.blend ?? 'source-over';

  const scale =
    coverScale(img.width, img.height, width, height) * (1.0 + (1 - life) * 0.08);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (width - w) / 2;
  const y = (height - h) / 2;
  ctx.drawImage(img, x, y, w, h);
  ctx.restore();
}

function applyColorGrade(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  grade: ColorGrade,
  rms: number,
) {
  if (grade === 'none') return;
  ctx.save();
  if (grade === 'cold') {
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = 0.25 + rms * 0.1;
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = '#0c4a6e';
    ctx.fillRect(0, 0, width, height);
  } else if (grade === 'crushed') {
    ctx.globalCompositeOperation = 'soft-light';
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = '#fecdd3';
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'multiply';
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, width, height);
  }
  ctx.restore();
}

export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const finish = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      if (typeof img.decode === 'function') {
        img.decode().then(finish).catch(finish);
      } else {
        finish();
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Failed to load image: ${file.name}`));
    };
    img.src = url;
  });
}
