import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const pagePath = 'app/page.jsx';
const stylePath = 'app/globals.css';
const originalPage = await fs.readFile(pagePath, 'utf8');
const originalCSS = await fs.readFile(stylePath, 'utf8');
const heading = 'Unlock your full potential and achieve success';
const browser = await chromium.launch({ executablePath, headless: true });
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => { window.__lifeonRefreshCheck = 'preserved'; });
  assert.ok(originalPage.includes(heading));
  await fs.writeFile(pagePath, originalPage.replace(heading, 'Lifeon live editing verified'));
  await page.getByRole('heading', { name: 'Lifeon live editing verified' }).waitFor({ timeout: 30000 });
  assert.equal(await page.evaluate(() => window.__lifeonRefreshCheck), 'preserved');
  await fs.writeFile(stylePath, originalCSS + '\n.hero .container { top: -42px; }\n');
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.hero .container')).top === '-42px', { timeout: 30000 });
  assert.equal(await page.evaluate(() => window.__lifeonRefreshCheck), 'preserved');
  assert.deepEqual(failures, []);
  console.log('Passed: JSX and CSS edits appear automatically without a build or browser reload.');
} finally {
  await fs.writeFile(pagePath, originalPage);
  await fs.writeFile(stylePath, originalCSS);
  await browser.close();
}
