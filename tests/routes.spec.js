import { expect, test } from '@playwright/test';

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

for (const route of routes) {
  test(`${route} renders without console or asset failures`, async ({ page }) => {
    const consoleErrors = [];
    const failedAssets = [];

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('response', (response) => {
      const url = response.url();
      if (response.status() >= 400 && url.includes('/koffera-coffee/')) failedAssets.push(`${response.status()} ${url}`);
    });

    await page.goto(route, { waitUntil: 'networkidle' });
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('main')).not.toBeEmpty();
    expect(consoleErrors).toEqual([]);
    expect(failedAssets).toEqual([]);
  });
}

test('mobile navigation opens and reaches the catalogue', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile navigation test');
  await page.goto('#/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toHaveClass(/is-open/);
  await page.getByRole('link', { name: 'Coffee catalogue' }).click();
  await expect(page).toHaveURL(/#\/coffees$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Ethiopian coffees');
});

test('request form reports demo status instead of fake success', async ({ page }) => {
  await page.goto('#/request-offer');
  await page.getByLabel('Full name', { exact: true }).fill('Demo Buyer');
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Demo Coffee Company');
  await page.getByLabel('Business email', { exact: true }).fill('buyer@example.com');
  await page.getByLabel('Country', { exact: true }).fill('Ethiopia');
  await page.getByLabel('Buyer type', { exact: true }).selectOption({ label: 'Specialty roaster' });
  await page.getByLabel('Estimated quantity', { exact: true }).fill('100 bags');
  await page.getByLabel('Message', { exact: true }).fill('Demo coffee request');
  await page.getByLabel(/I agree/).check();
  await page.getByRole('button', { name: /Submit request/ }).click();
  await expect(page.getByRole('status')).toContainText('not connected');
});
