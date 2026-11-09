import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--autoplay-policy=no-user-gesture-required'],
});
const page = await browser.newPage();
await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
await page.click('#demo');
await page.waitForFunction(
  () => document.querySelector('#status')?.textContent?.includes('Ready'),
  null,
  { timeout: 20000 },
);
await page.click('[data-pack="face-pack"]');
await page.waitForTimeout(200);

const info = await page.evaluate(() => {
  // Access nothing private; just read meta text
  return document.querySelector('#meta')?.textContent;
});
console.log('meta', info?.replace(/\s+/g, ' ').trim());

await page.click('#play');

const samples = [];
for (let i = 0; i < 40; i++) {
  await page.waitForTimeout(100);
  const sample = await page.evaluate(() => {
    const canvas = document.querySelector('#stage');
    const ctx = canvas.getContext('2d');
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let sum = 0;
    let max = 0;
    let whites = 0;
    const step = 16;
    for (let i = 0; i < data.length; i += 4 * step) {
      const v = (data[i] + data[i + 1] + data[i + 2]) / 3;
      sum += v;
      if (v > max) max = v;
      if (v > 220) whites++;
    }
    const n = Math.floor(data.length / (4 * step));
    return {
      time: document.querySelector('#time')?.textContent,
      avg: Math.round(sum / n),
      max: Math.round(max),
      whites,
    };
  });
  samples.push(sample);
}

await browser.close();
const flashy = samples.filter((s) => s.whites > 80 || s.avg > 160);
console.log(samples.map((s) => `${s.time} avg=${s.avg} max=${s.max} w=${s.whites}`).join('\n'));
console.log('flashy frames', flashy.length);
if (flashy.length < 2) process.exit(1);
console.log('ok');
