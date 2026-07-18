import { chromium } from '@playwright/test';

const pageUrl = process.argv[2];
if (!pageUrl) {
  throw new Error('A deployed page URL is required.');
}

const routes = [
  '#/',
  '#/coffees',
  '#/coffees/yirgacheffe-washed',
  '#/origins',
  '#/quality-traceability',
  '#/export-services',
  '#/markets',
  '#/resources',
  '#/faq',
  '#/request-offer',
  '#/about',
  '#/contact',
  '#/privacy',
  '#/terms',
  '#/missing-page',
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

try {
  for (const route of routes) {
    const page = await context.newPage();
    const consoleErrors = [];
    const failedAssets = [];

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400 && response.url().startsWith(pageUrl)) {
        failedAssets.push(`${response.status()} ${response.url()}`);
      }
    });

    const target = new URL(route, pageUrl).href;
    await page.goto(target, { waitUntil: 'networkidle', timeout: 60000 });
    await page.locator('header').waitFor({ state: 'visible' });
    await page.locator('main').waitFor({ state: 'visible' });
    await page.locator('footer').waitFor({ state: 'visible' });

    const mainText = (await page.locator('main').innerText()).trim();
    if (!mainText) throw new Error(`${route} rendered an empty main element.`);
    if (consoleErrors.length) throw new Error(`${route} console errors: ${consoleErrors.join(' | ')}`);
    if (failedAssets.length) throw new Error(`${route} failed assets: ${failedAssets.join(' | ')}`);

    console.log(`PASS ${route}`);
    await page.close();
  }
} finally {
  await browser.close();
}
