import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const executablePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const output = path.resolve('.qa');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath, headless: true });
const failures = [];
const checks = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  // External YouTube and Maps embeds are deliberately excluded from offline QA.
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    return ['127.0.0.1', 'localhost'].includes(url.hostname) ? route.continue() : route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => {
    const detail = `JavaScript on ${page.url()}: ${error.stack || error.message}`;
    failures.push(detail);
    console.error(detail);
  });
  page.on('response', response => {
    if (response.url().startsWith(base) && response.status() >= 400) failures.push(`HTTP ${response.status()}: ${response.url()}`);
  });
  const pages = (await fs.readdir('public')).filter(file => file.endsWith('.html'));
  for (const file of pages) {
    const response = await page.goto(`${base}/${file}`, { waitUntil: 'load' });
    assert.equal(response.status(), 200, file);
    await page.locator('.preloader').waitFor({ state: 'hidden' });
    await page.evaluate(() => document.fonts.ready);
    const broken = await page.locator('img').evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute('src')));
    assert.deepEqual(broken, [], `Broken images on ${file}`);
    assert.ok(await page.locator('h1').count(), `Missing heading on ${file}`);
    checks.push(`Page: ${file}`);
    console.log(`Passed page: ${file}`);
  }
  await page.goto(base, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.waitForTimeout(2200);
  await page.screenshot({ path: path.join(output, 'desktop-home.png') });
  assert.equal(await page.locator('body').evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Desktop horizontal overflow');
  assert.equal(await page.evaluate(() => document.fonts.check('400 16px "DM Sans"') && document.fonts.check('600 16px "Mona Sans"')), true, 'Local fonts');
  const slider = await page.locator('.testimonial-slider .swiper').evaluate(element => Boolean(element.swiper?.initialized));
  assert.equal(slider, true, 'Testimonial slider initialized');
  checks.push('Local fonts, desktop layout, testimonial slider');

  await page.goto(`${base}/faqs.html`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.locator('[data-bs-target="#collapse2"]').click();
  await page.locator('#collapse2.show').waitFor();
  assert.equal(await page.locator('[data-bs-target="#collapse2"]').getAttribute('aria-expanded'), 'true');
  checks.push('FAQ accordion opens');

  await page.goto(`${base}/image-gallery.html`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.locator('.gallery-items a').first().click();
  await page.locator('.mfp-img').waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await page.locator('.mfp-wrap').waitFor({ state: 'hidden' });
  checks.push('Image lightbox opens and closes');

  await page.goto(`${base}/contact.html`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.locator('#contactForm #fname').fill('Demo');
  await page.locator('#contactForm #lname').fill('Visitor');
  await page.locator('#contactForm #phone').fill('5550123456');
  await page.locator('#contactForm #email').fill('visitor@example.com');
  await page.locator('#contactForm #message').fill('Local browser check');
  await page.locator('#contactForm button[type=submit]').click();
  await page.getByText('Demo: your details have been saved in this browser. No email has been sent.').waitFor();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('lifeon-demo-contactForm')).length), 1);
  checks.push('Contact form validates and saves locally');

  await page.goto(`${base}/book-appointment.html`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.locator('#appointmentForm #fname').fill('Demo');
  await page.locator('#appointmentForm #lname').fill('Visitor');
  await page.locator('#appointmentForm #phone').fill('5550123456');
  await page.locator('#appointmentForm #treatment').selectOption({ index: 1 });
  await page.locator('#appointmentForm button[type=submit]').click();
  await page.getByText('Demo: your details have been saved in this browser. No email has been sent.').waitFor();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('lifeon-demo-appointmentForm')).length), 1);
  checks.push('Appointment form validates and saves locally');
  await page.locator('#newslettersForm input').fill('visitor@example.com');
  await page.locator('#newslettersForm button').click();
  assert.equal(await page.evaluate(() => JSON.parse(localStorage.getItem('lifeon-demo-newslettersForm')).length), 1);
  checks.push('Newsletter demo saves locally');

  await page.goto(`${base}/index-2.html`, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.locator('.our-pricing-box-gold').scrollIntoViewIfNeeded();
  await page.locator('#planToggle').check();
  await page.locator('#annually').waitFor({ state: 'visible' });
  assert.equal(await page.locator('#monthly').isVisible(), false);
  await page.waitForFunction(() => document.querySelector('#myvideo').readyState >= 2);
  checks.push('Alternate homepage video and annual pricing switch');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: 'load' });
  await page.locator('.preloader').waitFor({ state: 'hidden' });
  await page.waitForTimeout(2000);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'Mobile horizontal overflow');
  await page.screenshot({ path: path.join(output, 'mobile-home.png') });
  await page.locator('.slicknav_btn').click();
  await page.locator('.slicknav_nav').waitFor({ state: 'visible' });
  await page.locator('.slicknav_nav a[href="about.html"]').click();
  await page.waitForURL('**/about.html');
  checks.push('Mobile layout, menu, and navigation');
  await fs.writeFile(path.join(output, 'browser-report.json'), JSON.stringify({ checks, failures }, null, 2));
  assert.deepEqual([...new Set(failures)], [], 'Browser errors');
  console.log(`Passed ${checks.length} browser checks, including all ${pages.length} pages. Screenshots: .qa/`);
} finally {
  await browser.close();
}
