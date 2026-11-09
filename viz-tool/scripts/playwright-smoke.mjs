import { chromium } from 'playwright';

const url = process.env.PULSE_URL || 'http://127.0.0.1:5173/';
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.click('#demo');
await page.waitForFunction(
  () => document.querySelector('#status')?.textContent?.includes('Field ready'),
  null,
  { timeout: 25000 },
);

const meta = await page.textContent('#meta');
console.log('meta:', meta?.replace(/\s+/g, ' ').trim());

// Sample pixel variance across seeks — warp should change the frame
const samples = await page.evaluate(async () => {
  const canvas = document.querySelector('#stage');
  const seek = document.querySelector('#seek');
  const out = [];
  for (const pct of [0, 200, 400, 600, 800]) {
    seek.value = String(pct);
    seek.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise((r) => requestAnimationFrame(() => r()));
    await new Promise((r) => requestAnimationFrame(() => r()));
    const ctx = canvas.getContext('webgl2') || canvas.getContext('2d');
    // Read via 2d drawImage fallback from webgl canvas
    const tmp = document.createElement('canvas');
    tmp.width = 64;
    tmp.height = 36;
    const tctx = tmp.getContext('2d');
    tctx.drawImage(canvas, 0, 0, 64, 36);
    const { data } = tctx.getImageData(0, 0, 64, 36);
    let sum = 0;
    let sumSq = 0;
    for (let i = 0; i < data.length; i += 4) {
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      sum += v;
      sumSq += v * v;
    }
    const n = data.length / 4;
    const mean = sum / n;
    const variance = sumSq / n - mean * mean;
    out.push({ pct, mean: Math.round(mean), variance: Math.round(variance) });
  }
  return out;
});

console.log('samples', samples);
const means = samples.map((s) => s.mean);
const spread = Math.max(...means) - Math.min(...means);
const avgVar = samples.reduce((a, s) => a + s.variance, 0) / samples.length;
console.log({ spread, avgVar });

await page.click('#play');
await page.waitForTimeout(2500);
await browser.close();

if (avgVar < 50) {
  console.error('FAIL: frames look flat — warp field may not be rendering');
  process.exit(1);
}
if (spread < 5 && avgVar < 200) {
  console.error('FAIL: little change across timeline');
  process.exit(1);
}
console.log('playwright-smoke ok');
