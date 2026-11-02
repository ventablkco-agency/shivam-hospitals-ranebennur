import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const name = 'layer-03-hospital-photo.webp';
await mkdir(resolve(root, 'public/images/hero'), { recursive: true });
const encoded = await readFile(resolve(root, 'assets-source/hero', `${name}.b64`), 'utf8');
await writeFile(resolve(root, 'public/images/hero', name), Buffer.from(encoded.trim(), 'base64'));
console.log('Decoded the original hospital photograph.');
