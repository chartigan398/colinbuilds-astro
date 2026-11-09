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
  () => document.querySelector('#status')?.textContent?.includes('Ready'),
  null,
  { timeout: 20000 },
);

const meta = await page.textContent('#meta');
console.log('meta:', meta?.replace(/\s+/g, ' ').trim());

// Force Face Pack and rebuild
await page.click('[data-pack="face-pack"]');
await page.waitForTimeout(300);

const stats = await page.evaluate(async () => {
  // Peek into canvas pixels across several seek positions via UI seek
  const canvas = document.querySelector('#stage');
  const seek = document.querySelector('#seek');
  const samples = [];
  for (const pct of [0, 125, 250, 375, 500, 625, 750, 875]) {
    seek.value = String(pct);
    seek.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise((r) => requestAnimationFrame(() => r()));
    await new Promise((r) => requestAnimationFrame(() => r()));
    const ctx = canvas.getContext('2d');
    const { data } = ctx.getImageData(canvas.width / 2 - 40, canvas.height / 2 - 40, 80, 80);
    let sum = 0;
    let max = 0;
    for (let i = 0; i < data.length; i += 4) {
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      sum += v;
      if (v > max) max = v;
    }
    samples.push({
      pct,
      avg: Math.round(sum / (data.length / 4)),
      max: Math.round(max),
    });
  }
  return samples;
});

console.log('center brightness samples:', JSON.stringify(stats));
const bright = stats.filter((s) => s.max > 200 || s.avg > 140);
console.log('bright frames:', bright.length);

await page.click('#play');
await page.waitForTimeout(4200);
const status = await page.textContent('#status');
console.log('status:', status);

await browser.close();
if (bright.length < 1) {
  console.error('FAIL: expected at least one bright face/strobe sample');
  process.exit(1);
}
console.log('playwright-smoke ok');
