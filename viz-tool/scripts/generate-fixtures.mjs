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
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
    }
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

/** Solid / simple RGBA PNG writer */
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
  ihdr[9] = 6; // RGBA
  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  writeFileSync(path, png);
}

function writeWav() {
  const sampleRate = 44100;
  const duration = 4;
  const bpm = 120;
  const beatSec = 60 / bpm;
  const n = sampleRate * duration;
  const data = new Float32Array(n);

  for (let i = 0; i < n; i++) {
    const t = i / sampleRate;
    const beatPhase = t % beatSec;
    let sample = 0;
    if (beatPhase < 0.08) {
      const env = 1 - beatPhase / 0.08;
      sample += Math.sin(2 * Math.PI * 55 * t) * env * 0.95;
      sample += Math.sin(2 * Math.PI * 90 * t) * env * 0.35;
    }
    // Soft hat quieter so onsets prefer kicks
    if (beatPhase > beatSec * 0.48 && beatPhase < beatSec * 0.48 + 0.02) {
      sample += (Math.random() * 2 - 1) * 0.12;
    }
    if (t > 2) sample *= 1.35;
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
  for (let i = 0; i < n; i++) {
    buffer.writeInt16LE((data[i] * 32767) | 0, 44 + i * 2);
  }
  writeFileSync(join(outDir, 'demo-beat.wav'), buffer);
}

writeWav();

function inGlyph(x, y, cells, ox, oy, scale) {
  const gx = Math.floor((x - ox) / scale);
  const gy = Math.floor((y - oy) / scale);
  if (gy < 0 || gy >= cells.length || gx < 0 || gx >= cells[0].length) return false;
  return cells[gy][gx] === '#';
}

// Block letters P F for obvious album-art identity
const glyphP = [
  '######',
  '#    #',
  '#    #',
  '######',
  '#     ',
  '#     ',
  '#     ',
];
const glyphF = [
  '######',
  '#     ',
  '#     ',
  '####  ',
  '#     ',
  '#     ',
  '#     ',
];

writePng(join(outDir, 'cover.png'), 720, 720, (x, y, w, h) => {
  const u = x / w;
  const v = y / h;
  const ring = Math.abs(Math.hypot(x - w / 2, y - h / 2) - w * 0.28) < 10;
  const dia = Math.abs(x - y) < 8 || Math.abs(x + y - w) < 8;
  const letter =
    inGlyph(x, y, glyphP, 150, 250, 18) || inGlyph(x, y, glyphF, 320, 250, 18);
  if (letter) return [242, 239, 232, 255];
  if (ring) return [232, 255, 71, 255];
  if (dia) return [255, 92, 51, 220];
  return [
    Math.floor(12 + u * 50),
    Math.floor(10 + v * 18),
    Math.floor(18 + (1 - u) * 40),
    255,
  ];
});

writePng(join(outDir, 'face-a.png'), 512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h * 0.48;
  const face = Math.hypot(x - cx, y - cy) < w * 0.34;
  const eyeL = Math.hypot(x - cx + 60, y - cy + 25) < 22;
  const eyeR = Math.hypot(x - cx - 60, y - cy + 25) < 22;
  const mouth =
    y > cy + 45 &&
    y < cy + 85 &&
    Math.abs(x - cx) < 85 - (y - cy - 45) * 0.45;
  if (eyeL || eyeR || mouth) return [10, 10, 10, 255];
  if (face) return [255, 250, 240, 255];
  return [0, 0, 0, 0];
});

writePng(join(outDir, 'face-b.png'), 512, 512, (x, y, w, h) => {
  const cx = w / 2;
  const cy = h * 0.5;
  const face = Math.hypot((x - cx) / 0.9, (y - cy) / 1.05) < w * 0.36;
  const eyeL = x > cx - 95 && x < cx - 35 && y > cy - 55 && y < cy - 5;
  const eyeR = x > cx + 35 && x < cx + 95 && y > cy - 55 && y < cy - 5;
  const mouth = x > cx - 70 && x < cx + 70 && y > cy + 45 && y < cy + 75;
  if (eyeL || eyeR || mouth) return [17, 17, 17, 255];
  if (face) return [232, 255, 71, 255];
  return [0, 0, 0, 0];
});

console.log('Fixtures written to public/fixtures');
