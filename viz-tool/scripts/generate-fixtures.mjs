import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/fixtures');
mkdirSync(outDir, { recursive: true });

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function writePng(path, width, height, paint) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a = 255] = paint(x, y, width, height);
      const i = row + 1 + x * 4;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
      raw[i + 3] = a;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  writeFileSync(
    path,
    Buffer.concat([
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      chunk('IHDR', ihdr),
      chunk('IDAT', deflateSync(raw)),
      chunk('IEND', Buffer.alloc(0)),
    ]),
  );
}

function writeWav() {
  const sampleRate = 44100;
  const duration = 6;
  const bpm = 100;
  const beatSec = 60 / bpm;
  const n = sampleRate * duration;
  const data = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / sampleRate;
    const beatPhase = t % beatSec;
    let sample = 0;
    // Deep kick
    if (beatPhase < 0.1) {
      const env = Math.exp(-beatPhase * 28);
      sample += Math.sin(2 * Math.PI * (48 + beatPhase * 40) * t) * env * 0.95;
    }
    // Soft pad swell in second half
    if (t > 2.5) {
      sample += Math.sin(2 * Math.PI * 110 * t) * 0.08 * ((t - 2.5) / 3.5);
      sample += Math.sin(2 * Math.PI * 165 * t) * 0.05 * ((t - 2.5) / 3.5);
    }
    // Quiet texture
    sample += (Math.random() * 2 - 1) * 0.02;
    data[i] = Math.max(-1, Math.min(1, sample));
  }
  const buffer = Buffer.alloc(44 + n * 2);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + n * 2, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) buffer.writeInt16LE((data[i] * 32767) | 0, 44 + i * 2);
  writeFileSync(join(outDir, 'demo-beat.wav'), buffer);
}

writeWav();

// Atmospheric cover — nebula / oil-paint feel, not logo toy
writePng(join(outDir, 'cover.png'), 960, 960, (x, y, w, h) => {
  const u = x / w - 0.5;
  const v = y / h - 0.5;
  const r = Math.hypot(u * 1.2, v);
  const angle = Math.atan2(v, u);
  const swirl = Math.sin(angle * 3.0 + r * 10.0) * 0.5 + 0.5;
  const vein = Math.sin((u * 8.0 + v * 3.0) * Math.PI + swirl * 4.0) * 0.5 + 0.5;
  const glow = Math.exp(-r * 3.2);
  const cr = Math.floor(18 + glow * 90 + vein * 40 + swirl * 30);
  const cg = Math.floor(22 + glow * 40 + (1 - vein) * 55);
  const cb = Math.floor(40 + glow * 120 + swirl * 80);
  return [
    Math.min(255, cr),
    Math.min(255, cg),
    Math.min(255, cb),
    255,
  ];
});

// Soft portrait-like apparition A (pale face silhouette)
writePng(join(outDir, 'face-a.png'), 640, 640, (x, y, w, h) => {
  const cx = w * 0.5;
  const cy = h * 0.46;
  const nx = (x - cx) / (w * 0.28);
  const ny = (y - cy) / (h * 0.34);
  const face = nx * nx + ny * ny * 1.15;
  if (face > 1) return [0, 0, 0, 0];
  const shade = Math.floor(220 - face * 80);
  const eyeL = Math.hypot(x - cx + 55, y - cy + 20) < 14;
  const eyeR = Math.hypot(x - cx - 55, y - cy + 20) < 14;
  const mouth =
    y > cy + 55 &&
    y < cy + 72 &&
    Math.abs(x - cx) < 48 - (y - cy - 55) * 0.8;
  if (eyeL || eyeR || mouth) return [24, 20, 28, 230];
  const edge = smoothEdge(face);
  return [shade, shade - 4, shade + 6, Math.floor(edge * 255)];
});

function smoothEdge(face) {
  if (face < 0.75) return 1;
  if (face > 1) return 0;
  return 1 - (face - 0.75) / 0.25;
}

// Second apparition — colder mask
writePng(join(outDir, 'face-b.png'), 640, 640, (x, y, w, h) => {
  const cx = w * 0.5;
  const cy = h * 0.5;
  const nx = (x - cx) / (w * 0.3);
  const ny = (y - cy) / (h * 0.36);
  const face = Math.abs(nx) * 0.9 + Math.abs(ny) * 0.85;
  if (face > 1) return [0, 0, 0, 0];
  const eyeL = x > cx - 80 && x < cx - 35 && y > cy - 40 && y < cy - 8;
  const eyeR = x > cx + 35 && x < cx + 80 && y > cy - 40 && y < cy - 8;
  const mouth = x > cx - 40 && x < cx + 40 && y > cy + 50 && y < cy + 62;
  if (eyeL || eyeR || mouth) return [8, 12, 20, 240];
  const edge = face < 0.8 ? 1 : Math.max(0, 1 - (face - 0.8) / 0.2);
  return [170, 210, 230, Math.floor(edge * 230)];
});

console.log('Fixtures written to public/fixtures');
