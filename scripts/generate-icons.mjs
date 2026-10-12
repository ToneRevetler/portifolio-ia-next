import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// The SVG is the source of truth; regenerate raster variants with this script.
const appDirectory = new URL('../src/app/', import.meta.url);
const svg = await readFile(new URL('icon.svg', appDirectory));
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => sharp(svg).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;

images.forEach((png, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});

await writeFile(new URL('favicon.ico', appDirectory), Buffer.concat([header, ...images]));
await sharp(svg).resize(180, 180).flatten({ background: '#F8FAFC' }).png().toFile(fileURLToPath(new URL('apple-icon.png', appDirectory)));
console.log('Generated favicon.ico (16/32/48 px) and apple-icon.png (180 px).');
