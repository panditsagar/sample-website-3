import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';

const directory = process.argv.find(arg => arg.startsWith('--dir='))?.slice(6) || 'public';
const root = path.resolve(directory);
const portArg = process.argv.find(arg => arg.startsWith('--port='))?.slice(7);
const port = Number(portArg || process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.gif': 'image/gif'
};

const server = http.createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let target = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!target.startsWith(root + path.sep)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }
    let status = 200;
    let content;
    try { content = await fs.readFile(target); }
    catch (error) {
      if (error.code !== 'ENOENT' && error.code !== 'EISDIR') throw error;
      target = path.join(root, '404.html');
      content = await fs.readFile(target);
      status = 404;
    }
    response.writeHead(status, {
      'Content-Type': types[path.extname(target)] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch {
    response.writeHead(400);
    response.end('Unable to serve this request');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Lifeon is ready at http://localhost:${port} (serving ${directory})`));
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE' ? `Port ${port} is in use. Set PORT or pass --port=3001.` : error.message);
  process.exitCode = 1;
});
