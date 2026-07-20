import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';

const baseUrl = process.env.PREVIEW_URL || 'http://127.0.0.1:4173/koffera-coffee/#/';
const outputDir = 'artifacts/desktop-preview';
const sceneLabels = ['origin', 'harvest', 'processing', 'quality', 'export', 'buyers'];

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });

const consoleErrors = [];
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});
page.on('pageerror', (error) => consoleErrors.push(error.message));

await page.goto(baseUrl, { waitUntil: 'networkidle' });
await page.waitForSelector('.koffera-scroll-world');
await page.waitForFunction(() => [...document.images].every((image) => image.complete));

const section = await page.locator('.koffera-scroll-world').evaluate((element) => ({
  top: element.offsetTop,
  height: element.offsetHeight,
  viewport: window.innerHeight,
}));

const scrollable = Math.max(section.height - section.viewport, 1);

for (let index = 0; index < sceneLabels.length; index += 1) {
  const ratio = index / Math.max(sceneLabels.length - 1, 1);
  const y = section.top + ratio * scrollable;
  await page.evaluate((target) => window.scrollTo(0, target), y);
  await page.waitForTimeout(700);
  await page.screenshot({
    path: `${outputDir}/${String(index + 1).padStart(2, '0')}-${sceneLabels[index]}.png`,
    fullPage: false,
  });
}

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
await page.screenshot({ path: `${outputDir}/00-homepage-top.png`, fullPage: false });

await fs.writeFile(
  `${outputDir}/console-errors.json`,
  JSON.stringify(consoleErrors, null, 2),
  'utf8',
);

if (consoleErrors.length) {
  console.error('Browser errors found:', consoleErrors);
  process.exitCode = 1;
}

await browser.close();
