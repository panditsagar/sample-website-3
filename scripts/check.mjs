import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve('public');
async function list(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? list(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const files = await list(root);
const missing = [];
let references = 0;
for (const file of files) {
  if (!/\.(html|css|js)$/.test(file)) continue;
  const content = (await fs.readFile(file, 'utf8')).replace(/<!--[\s\S]*?-->/g, '');
  if (file.endsWith('.js')) new vm.Script(content, { filename: file });
  const matches = file.endsWith('.html')
    ? [...content.matchAll(/(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi)]
    : file.endsWith('.css') ? [...content.matchAll(/url\(\s*["']?([^\s)"']+)["']?\s*\)/gi)] : [];
  for (const [, reference] of matches) {
    if (/^(?:#|[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;
    const clean = reference.split(/[?#]/)[0];
    const target = path.resolve(path.dirname(file), clean || '.');
    references++;
    try { await fs.access(target); }
    catch { missing.push(`${path.relative(root, file)} → ${reference}`); }
  }
}
if (missing.length) throw new Error(`Missing local assets:\n${missing.join('\n')}`);
console.log(`Checked ${files.filter(file => file.endsWith('.html')).length} pages, ${references} local references, and all JavaScript syntax.`);
