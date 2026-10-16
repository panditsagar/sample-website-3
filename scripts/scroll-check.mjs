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
  const page = await context.newPage();
  page.on('pageerror', error => failures.push(error.stack || error.message));
  await page.goto(base, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  async function wheelTrace() {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
      window.__wheelTrace = [];
      const until = performance.now() + 900;
      const sample = () => { window.__wheelTrace.push(scrollY); if (performance.now() < until) requestAnimationFrame(sample); };
      requestAnimationFrame(sample);
      window.addEventListener('wheel', event => { window.__wheelPrevented = event.defaultPrevented; }, { once: true, passive: true });
    });
    await page.mouse.move(700, 400);
    await page.mouse.wheel(0, 120);
    await page.waitForTimeout(1000);
    const result = await page.evaluate(() => ({ positions: window.__wheelTrace, prevented: window.__wheelPrevented, final: scrollY }));
    assert.equal(result.prevented, true, 'Custom wheel smoothing active');
    assert.ok(new Set(result.positions).size > 8, 'Wheel moves gradually over multiple animation frames');
    assert.ok(result.final > 50, 'Wheel moves down the page');
    assert.ok(result.positions.some(position => position > 0 && position < result.final), 'Intermediate scroll positions visible');
    return result.final;
  }
  const initialDistance = await wheelTrace();
  checks.push('Mouse wheel eases through intermediate positions');
  await page.keyboard.press('ArrowDown');
  await page.waitForTimeout(750);
  assert.ok(await page.evaluate(() => scrollY) > initialDistance);
  checks.push('Keyboard arrows scroll smoothly');

  await page.mouse.wheel(0, 120);
  await page.evaluate(() => document.querySelector('#menu a[href="/about"]').click());
  await page.waitForURL('**/about');
  await page.waitForTimeout(800);
  assert.ok(await page.evaluate(() => scrollY) < 2, 'Old scroll animation stops when changing pages');
  const nextDistance = await wheelTrace();
  assert.ok(Math.abs(initialDistance - nextDistance) <= 2, 'Scrolling speed stays consistent after navigation');
  checks.push('Navigation cancels old momentum and restores one scroller');

  await page.evaluate(() => {
    window.scrollTo(0, 0);
    const box = document.createElement('div');
    box.id = 'scroll-check-box';
    box.style.cssText = 'position:fixed;z-index:10000;left:20px;top:200px;height:120px;width:250px;overflow:auto;background:white;';
    box.innerHTML = '<input aria-label="Scroll check input" style="width:200px"><div style="height:700px">Nested scroll content</div>';
    document.body.appendChild(box);
  });
  await page.mouse.move(100, 270);
  await page.mouse.wheel(0, 120);
  await page.waitForTimeout(750);
  assert.ok(await page.locator('#scroll-check-box').evaluate(element => element.scrollTop) > 0);
  assert.ok(await page.evaluate(() => scrollY) < 2);
  checks.push('Nested content scrolls without moving the whole page');
  await page.locator('#scroll-check-box').evaluate(element => { element.scrollTop = 0; });
  await page.locator('#scroll-check-box input').focus();
  const inputKeyPrevented = await page.locator('#scroll-check-box input').evaluate(element => {
    const event = new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true, cancelable: true });
    element.dispatchEvent(event);
    return event.defaultPrevented;
  });
  assert.equal(inputKeyPrevented, false);
  assert.equal(await page.evaluate(() => {
    const event = new WheelEvent('wheel', { deltaY: 120, ctrlKey: true, bubbles: true, cancelable: true });
    document.body.dispatchEvent(event);
    return event.defaultPrevented;
  }), false);
  await page.locator('#scroll-check-box').evaluate(element => element.remove());
  checks.push('Text inputs and Ctrl+wheel keep their native controls');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(100);
  assert.equal(await page.evaluate(() => {
    const event = new WheelEvent('wheel', { deltaY: 120, bubbles: true, cancelable: true });
    document.body.dispatchEvent(event);
    return event.defaultPrevented;
  }), false);
  checks.push('Reduced motion disables custom scroll easing');

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'no-preference' });
  mobile.on('pageerror', error => failures.push(error.message));
  await mobile.goto(base, { waitUntil: 'load' });
  await mobile.locator('.preloader').waitFor({ state: 'hidden' });
  assert.equal(await mobile.evaluate(() => {
    const event = new WheelEvent('wheel', { deltaY: 120, bubbles: true, cancelable: true });
    document.body.dispatchEvent(event);
    return event.defaultPrevented;
  }), false);
  checks.push('Touch devices retain native scrolling');
  assert.deepEqual(failures, []);
  await fs.mkdir('.qa', { recursive: true });
  await fs.writeFile('.qa/scroll-report.json', JSON.stringify({ checks, failures }, null, 2));
  console.log(`Passed ${checks.length} scrolling checks:\n${checks.join('\n')}`);
} finally { await browser.close(); }
