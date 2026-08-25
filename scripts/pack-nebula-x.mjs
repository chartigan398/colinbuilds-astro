import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public', 'nebula-x');
const kit = join(root, 'scripts', 'nebula-x-kit');
const stagingRoot = join(root, '.tmp', 'nebula-x-download');
const staging = join(stagingRoot, 'nebula-x');
const outDir = join(root, 'public', 'downloads');
const outZip = join(outDir, 'nebula-x.zip');
const threeUrl = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

rmSync(stagingRoot, { recursive: true, force: true });
mkdirSync(staging, { recursive: true });
mkdirSync(outDir, { recursive: true });

cpSync(src, staging, { recursive: true });
cpSync(join(kit, 'START-HERE.txt'), join(staging, 'START-HERE.txt'));
cpSync(join(kit, 'start-windows.bat'), join(staging, 'start-windows.bat'));
cpSync(join(kit, 'start-mac-linux.sh'), join(staging, 'start-mac-linux.sh'));

try {
  const three = await fetch(threeUrl);
  if (!three.ok) throw new Error(`HTTP ${three.status}`);
  writeFileSync(join(staging, 'js', 'three.min.js'), Buffer.from(await three.arrayBuffer()));
  const indexPath = join(staging, 'index.html');
  const html = readFileSync(indexPath, 'utf8').replace(
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'js/three.min.js',
  );
  writeFileSync(indexPath, html);
  console.log('Packed Nebula X with a local Three.js copy for offline use.');
} catch (error) {
  console.warn('Could not vendor Three.js; download will use the CDN.', error);
}

if (existsSync(outZip)) rmSync(outZip);

if (process.platform === 'win32') {
  execFileSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-Command',
      `Compress-Archive -LiteralPath '${staging.replaceAll("'", "''")}' -DestinationPath '${outZip.replaceAll("'", "''")}' -Force`,
    ],
    { stdio: 'inherit' },
  );
} else {
  execFileSync('zip', ['-r', outZip, 'nebula-x'], { cwd: stagingRoot, stdio: 'inherit' });
}

rmSync(stagingRoot, { recursive: true, force: true });
console.log(`Wrote ${outZip}`);
