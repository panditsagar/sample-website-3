import fs from 'node:fs/promises';
import './check.mjs';
await fs.mkdir('dist', { recursive: true });
await fs.cp('public', 'dist', { recursive: true });
console.log('Production website built in dist/.');
