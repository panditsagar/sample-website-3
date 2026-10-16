import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs/promises';
import path from 'node:path';

const execute = promisify(execFile);
const origin = 'https://html.awaikenthemes.com/lifeon/';
const output = path.resolve('public');
const queued = new Set();
const queue = [];
const failures = [];
const files = [];
const fontURL = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

function localPath(url) {
  if (url.href === 'https://demo.awaikenthemes.com/assets/videos/Lifeon-hero-video-gold.mp4') return 'images/hero-video-gold.mp4';
  if (url.hostname === 'fonts.googleapis.com') return 'css/google-fonts.css';
  if (url.hostname === 'fonts.gstatic.com') return `fonts/${path.posix.basename(url.pathname)}`;
  if (!url.href.startsWith(origin)) return null;
  const relative = decodeURIComponent(url.pathname.slice(new URL(origin).pathname.length));
  if (relative.split('/').includes('..')) return null;
  return relative || 'index.html';
}

function enqueue(raw, parent = origin) {
  if (!raw || /^(?:#|mailto:|tel:|data:|javascript:)/i.test(raw)) return;
  let url;
  try { url = new URL(raw.replaceAll('&amp;', '&'), parent); } catch { return; }
  url.hash = '';
  const destination = localPath(url);
  if (!destination || queued.has(destination)) return;
  if (!/\.(?:html?|css|js|svg|png|jpe?g|webp|gif|ico|woff2?|ttf|eot|mp4|webm|avif)$/i.test(destination)) return;
  queued.add(destination);
  queue.push({ url: url.href, destination });
}

async function download({ url, destination }) {
  const target = path.join(output, destination);
  await fs.mkdir(path.dirname(target), { recursive: true });
  try {
    const agent = new URL(url).hostname.endsWith('googleapis.com') ? userAgent : 'curl/8.13.0';
    await execute('curl.exe', ['-L', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '90', '--user-agent', agent, url, '-o', target], { maxBuffer: 1024 * 1024 });
    if (/\.(?:html|css|svg|js)$/i.test(destination)) {
      let content = await fs.readFile(target, 'utf8');
      if (destination.endsWith('.html')) {
        const markup = content.replace(/<!--[\s\S]*?-->/g, '');
        for (const match of markup.matchAll(/(?:src|href|poster|data-src)\s*=\s*["']([^"']+)["']/gi)) enqueue(match[1], url);
        content = content.replace(/<link[^>]+rel=["']preconnect["'][^>]*>/gi, '')
          .replace(/https:\/\/fonts\.googleapis\.com\/css2[^"']+/g, 'css/google-fonts.css')
          .replaceAll('https://demo.awaikenthemes.com/assets/videos/Lifeon-hero-video-gold.mp4', 'images/hero-video-gold.mp4')
          .replace(/\s*<script[^>]*src=["']https:\/\/demo\.awaikenthemes\.com\/assets\/js\/theme-panel-dynamic\.js["'][^>]*><\/script>/gi, '')
          .replace('<html lang="zxx">', '<html lang="en">')
          .replace('</body>', '    <script src="js/local-forms.js"></script>\n</body>');
      }
      if (destination.endsWith('.css') || destination.endsWith('.html') || destination.endsWith('.svg')) {
        for (const match of content.matchAll(/url\(\s*["']?([^\s)"']+)["']?\s*\)/gi)) enqueue(match[1], url);
      }
      if (destination === 'css/google-fonts.css') {
        content = content.replace(/https:\/\/fonts\.gstatic\.com\/[^\s)"']+/g, value => `../${localPath(new URL(value))}`);
      }
      await fs.writeFile(target, content);
    }
    const info = await fs.stat(target);
    files.push({ path: destination, bytes: info.size });
    console.log(`Saved ${destination} (${Math.round(info.size / 1024)} KB)`);
  } catch (error) {
    failures.push({ path: destination, url, error: error.stderr || error.message });
    console.error(`FAILED ${destination}: ${error.stderr || error.message}`);
  }
}

await fs.mkdir(output, { recursive: true });
enqueue(origin);
enqueue(fontURL);
while (queue.length) {
  const batch = queue.splice(0, 8);
  await Promise.all(batch.map(download));
}
await fs.writeFile('mirror-report.json', JSON.stringify({ source: origin, files, failures }, null, 2) + '\n');
console.log(`Finished: ${files.length} files, ${failures.length} failures.`);
if (failures.length) process.exitCode = 1;
