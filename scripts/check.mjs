import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
async function list(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? list(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const appFiles = await list('app');
const components = await list('components');
const assets = await list('public');
const routes = new Set(appFiles.filter(file => path.basename(file) === 'page.jsx').map(file => '/' + path.relative('app', path.dirname(file)).replaceAll(path.sep, '/')).map(route => route === '/.' ? '/' : route));
const missing = [];
let references = 0;
for (const file of [...appFiles, ...components, ...assets]) {
  if (!/\.(jsx|css)$/.test(file)) continue;
  const content = await fs.readFile(file, 'utf8');
  const matches = file.endsWith('.jsx')
    ? [...content.matchAll(/(?:href|src|poster)="([^"]+)"/g)]
    : [...content.matchAll(/url\(\s*["']?([^\s)"']+)["']?\s*\)/gi)];
  for (const [, reference] of matches) {
    if (/^(?:#|[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;
    const clean = reference.split(/[?#]/)[0];
    references++;
    if (file.endsWith('.jsx') && clean.startsWith('/') && !path.extname(clean)) {
      if (!routes.has(clean)) missing.push(`${file} → ${reference}`);
      continue;
    }
    const target = clean.startsWith('/') ? path.join(root, 'public', clean) : path.resolve(path.dirname(file), clean);
    try { await fs.access(target); }
    catch { missing.push(`${path.relative(root, file)} → ${reference}`); }
  }
}
if (missing.length) throw new Error(`Missing local assets or routes:\n${missing.join('\n')}`);
console.log(`Checked ${routes.size} Next.js pages and ${references} asset and route references.`);
