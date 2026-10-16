import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const browser = await chromium.launch({ executablePath, headless: true });
const failures = [];
const checks = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'no-preference' });
  await context.route('**/*', route => ['localhost', '127.0.0.1'].includes(new URL(route.request().url()).hostname) ? route.continue() : route.abort());
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.stack || error.message));
  page.on('console', message => { if (message.type() === 'error' && /hydration|cannot be a descendant|did not match/i.test(message.text())) failures.push(message.text()); });
  await page.goto(base, { waitUntil: 'domcontentloaded' });
  assert.ok(await page.locator('.hero h1 .animation-char').count() >= 40);
  await page.waitForFunction(() => {
    const characters = [...document.querySelectorAll('.hero h1 .animation-char')];
    return +getComputedStyle(characters[0]).opacity > +getComputedStyle(characters.at(-1)).opacity;
  });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.waitForFunction(() => [...document.querySelectorAll('.hero h1 .animation-char')].every(element => getComputedStyle(element).opacity === '1' && element.style.transform === ''));
  checks.push('Heading letters stagger, move, and finish visible');
  assert.equal(await page.locator('.hero-info-box').getAttribute('data-wow-delay'), '0.2s');
  await page.waitForFunction(() => document.querySelector('.hero-info-box').style.transform === '');
  checks.push('Original entrance delays restored and finished transforms cleared');
  await page.mouse.move(100, 100);
  await page.waitForTimeout(800);
  await page.mouse.move(600, 400);
  await page.waitForFunction(() => {
    const matrix = new DOMMatrix(getComputedStyle(document.querySelector('.cb-cursor')).transform);
    return matrix.e > 100 && matrix.e < 599;
  });
  await page.waitForFunction(() => Math.abs(new DOMMatrix(getComputedStyle(document.querySelector('.cb-cursor')).transform).e - 600) < 1);
  await page.mouse.down();
  assert.ok(await page.locator('.cb-cursor').evaluate(element => element.classList.contains('-active')));
  await page.mouse.up();
  checks.push('Cursor follows smoothly and reacts to a press');
  const initialPosition = await page.locator('.hero').evaluate(element => getComputedStyle(element).backgroundPosition);
  await page.evaluate(() => window.scrollTo(0, 250));
  await page.waitForFunction(initial => getComputedStyle(document.querySelector('.hero')).backgroundPosition !== initial, initialPosition);
  assert.equal(await page.locator('.hero').evaluate(element => getComputedStyle(element).backgroundAttachment), 'fixed');
  checks.push('Desktop background moves with parallax');

  const reveal = page.locator('.reveal').first();
  await reveal.evaluate(element => element.parentElement.scrollIntoView({ block: 'center' }));
  await page.waitForFunction(() => {
    const image = document.querySelector('.reveal img');
    return image.style.transform && getComputedStyle(image).transform !== 'none';
  });
  await page.waitForFunction(() => getComputedStyle(document.querySelector('.reveal img')).transform === 'none');
  checks.push('Image reveal slides in and finishes at its original position');

  await page.goto(`${base}/team-single`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  const skill = page.locator('.skillbar').first();
  await skill.evaluate(element => element.scrollIntoView({ block: 'center' }));
  await page.waitForFunction(() => {
    const bar = document.querySelector('.skillbar .count-bar');
    const ratio = bar.getBoundingClientRect().width / bar.parentElement.getBoundingClientRect().width;
    return ratio > 0.01 && ratio < 0.9;
  });
  await page.waitForFunction(() => document.querySelector('.skillbar .count-bar').style.width === '95%');
  checks.push('Skill bars grow from zero to the configured percentage');

  await page.goto(base, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  const counter = page.locator('.counter').first();
  const total = Number(await counter.textContent());
  await counter.evaluate(element => element.parentElement.scrollIntoView({ block: 'center' }));
  await page.waitForFunction(target => { const number = Number(document.querySelector('.counter').textContent); return number > 0 && number < target; }, total);
  await page.waitForFunction(target => Number(document.querySelector('.counter').textContent) === target, total);
  checks.push('Counters count up to their original totals');

  await page.goto(base, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.evaluate(() => {
    window.__routeAnimationObserved = false;
    const observer = new MutationObserver(() => {
      if (location.pathname === '/about' && [...document.querySelectorAll('h1 .animation-char')].some(element => element.style.opacity !== '' && +element.style.opacity < 1)) window.__routeAnimationObserved = true;
    });
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['style'] });
    window.__stopAnimationObserver = () => observer.disconnect();
  });
  await page.locator('#menu a[href="/about"]').click();
  await page.waitForURL('**/about');
  await page.waitForFunction(() => window.__routeAnimationObserved);
  await page.evaluate(() => window.__stopAnimationObserver());
  await page.locator('#menu a[href="/"]').click();
  await page.waitForURL(base + '/');
  await page.waitForFunction(() => document.querySelectorAll('.hero h1 .animation-char').length >= 40);
  await page.waitForFunction(() => [...document.querySelectorAll('.hero h1 .animation-char')].every(element => getComputedStyle(element).opacity === '1' && element.style.transform === ''));
  checks.push('Animations restart after client navigation without errors during teardown');

  await page.locator('.main-footer').evaluate(element => element.scrollIntoView({ block: 'center' }));
  await page.waitForFunction(() => [...document.querySelectorAll('.main-footer .animation-char')].every(element => getComputedStyle(element).opacity === '1'));
  assert.ok(await page.locator('.main-footer .animation-char').count() > 10);
  checks.push('Shared footer headings animate too');

  const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce', isMobile: true, hasTouch: true });
  const mobile = await reduced.newPage();
  mobile.on('pageerror', error => failures.push(error.message));
  await mobile.goto(base, { waitUntil: 'load' });
  await mobile.locator('.preloader').waitFor({ state: 'hidden' });
  assert.equal(await mobile.locator('.hero h1 .animation-char').first().evaluate(element => getComputedStyle(element).opacity), '1');
  assert.equal(await mobile.locator('.hero').evaluate(element => getComputedStyle(element).backgroundAttachment), 'scroll');
  assert.equal(await mobile.locator('.skillbar .count-bar').first().evaluate(element => element.style.width), '95%');
  assert.equal(await mobile.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  checks.push('Reduced motion shows content and completed bars; mobile has no desktop parallax');
  assert.deepEqual(failures, []);
  await fs.mkdir('.qa', { recursive: true });
  await fs.writeFile('.qa/animation-report.json', JSON.stringify({ checks, failures }, null, 2));
  console.log(`Passed ${checks.length} animation checks:\n${checks.join('\n')}`);
} finally {
  await browser.close();
}
