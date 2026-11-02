import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const assets = [
  'layer-01-outline.webp',
  'layer-02-depth.webp',
  'layer-03-hospital-photo.webp',
];

await mkdir(resolve(root, 'public/images/hero'), { recursive: true });
for (const name of assets) {
  const encoded = await readFile(resolve(root, 'assets-source/hero', `${name}.b64`), 'utf8');
  await writeFile(resolve(root, 'public/images/hero', name), Buffer.from(encoded.trim(), 'base64'));
}
console.log(`Decoded ${assets.length} hero images.`);
