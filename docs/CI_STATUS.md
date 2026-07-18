# CI Diagnostic Report

Generated from commit: 5bb7d055203d65bcb210c9de0f70fd3bebb838c3

| Check | Exit code | Result |
|---|---:|---|
| npm ci | 0 | PASS |
| lint | 0 | PASS |
| build | 0 | PASS |
| Playwright install | 0 | PASS |
| route tests | 1 | FAIL |

## install log
```text

added 139 packages in 4s
```

## lint log
```text

> koffera-coffee-website@1.0.0 lint
> eslint .

```

## build log
```text

> koffera-coffee-website@1.0.0 build
> vite build

[36mvite v8.1.5 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 64 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                                    1.25 kB │ gzip:  0.54 kB
dist/assets/index-3AJX09qp.css                    26.50 kB │ gzip:  6.33 kB
dist/assets/DemoNotice-CRTlRzJP.js                 0.27 kB │ gzip:  0.20 kB
dist/assets/SectionHeading-BN6Q_9Zo.js             0.36 kB │ gzip:  0.24 kB
dist/assets/useDocumentMeta-DLrzsVMj.js            0.49 kB │ gzip:  0.31 kB
dist/assets/PageHero-DcBixG7v.js                   0.57 kB │ gzip:  0.29 kB
dist/assets/MediaPlaceholder-CmDDrI4E.js           0.59 kB │ gzip:  0.32 kB
dist/assets/ScrollReveal-Ci1kBnyd.js               0.61 kB │ gzip:  0.41 kB
dist/assets/CTASection-BUebOBm9.js                 0.68 kB │ gzip:  0.39 kB
dist/assets/NotFoundPage-BPNGJz1y.js               0.87 kB │ gzip:  0.41 kB
dist/assets/markets-CYbI-uuW.js                    0.87 kB │ gzip:  0.45 kB
dist/assets/origins-6b9YysOt.js                    1.26 kB │ gzip:  0.64 kB
dist/assets/services-D2psxdnk.js                   1.64 kB │ gzip:  0.72 kB
dist/assets/PrivacyPage-Ba23xkDK.js                2.06 kB │ gzip:  0.87 kB
dist/assets/TermsPage-ZBJoLfxO.js                  2.11 kB │ gzip:  0.89 kB
dist/assets/CoffeeCataloguePage-B-o7OQRP.js        2.61 kB │ gzip:  1.18 kB
dist/assets/ResourcesPage-HI3Tyga_.js              2.61 kB │ gzip:  1.11 kB
dist/assets/MarketsPage-oJ1qrXho.js                2.70 kB │ gzip:  1.17 kB
dist/assets/FAQPage-CXSzJZoM.js                    2.80 kB │ gzip:  1.32 kB
dist/assets/OriginsPage-v4TJ7xYz.js                3.03 kB │ gzip:  1.25 kB
dist/assets/ContactPage-CAoOBo6m.js                3.26 kB │ gzip:  1.16 kB
dist/assets/QualityTraceabilityPage-Dq0KZcMO.js    3.41 kB │ gzip:  1.28 kB
dist/assets/ExportServicesPage-CQLCsWW3.js         3.46 kB │ gzip:  1.36 kB
dist/assets/coffees-BUoiObPB.js                    3.76 kB │ gzip:  1.28 kB
dist/assets/CoffeeDetailPage-B09IlJfL.js           4.36 kB │ gzip:  1.51 kB
dist/assets/AboutPage-XlgqKJua.js                  4.61 kB │ gzip:  1.59 kB
dist/assets/RequestOfferPage-CQmuTGLu.js           5.18 kB │ gzip:  1.63 kB
dist/assets/HomePage-BLyni5Wr.js                   8.72 kB │ gzip:  2.61 kB
dist/assets/index-DckmM26y.js                    242.76 kB │ gzip: 77.83 kB

[32m✓ built in 163ms[39m
```

## playwright-install log
```text
  fonts-ipafont-mincho fonts-tlwg-loma alsa-ucm-conf alsa-topology-conf
The following NEW packages will be installed:
  fonts-freefont-ttf fonts-ipafont-gothic fonts-tlwg-loma-otf fonts-unifont
  fonts-wqy-zenhei xfonts-cyrillic xfonts-encodings xfonts-scalable
  xfonts-utils
The following packages will be upgraded:
  libasound2-data libasound2t64
2 upgraded, 9 newly installed, 0 to remove and 22 not upgraded.
Need to get 21.5 MB of archives.
After this operation, 79.5 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Get:2 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 fonts-ipafont-gothic all 00303-21ubuntu1 [3513 kB]
Get:3 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 fonts-freefont-ttf all 20211204+svn4273-2 [5641 kB]
Get:4 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 fonts-tlwg-loma-otf all 1:0.7.3-1 [107 kB]
Get:5 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 fonts-unifont all 1:15.1.01-1build1 [2993 kB]
Get:6 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 fonts-wqy-zenhei all 0.9.45-8 [7472 kB]
Get:7 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libasound2t64 amd64 1.2.11-1ubuntu0.3 [398 kB]
Get:8 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libasound2-data all 1.2.11-1ubuntu0.3 [21.4 kB]
Get:9 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 xfonts-encodings all 1:1.0.5-0ubuntu2 [578 kB]
Get:10 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 xfonts-utils amd64 1:7.7+6build3 [94.4 kB]
Get:11 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 xfonts-cyrillic all 1:1.0.5+nmu1 [384 kB]
Get:12 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 xfonts-scalable all 1:1.0.3-1.3 [304 kB]
Fetched 21.5 MB in 1s (34.1 MB/s)
Selecting previously unselected package fonts-ipafont-gothic.
(Reading database ... (Reading database ... 5%(Reading database ... 10%(Reading database ... 15%(Reading database ... 20%(Reading database ... 25%(Reading database ... 30%(Reading database ... 35%(Reading database ... 40%(Reading database ... 45%(Reading database ... 50%(Reading database ... 55%(Reading database ... 60%(Reading database ... 65%(Reading database ... 70%(Reading database ... 75%(Reading database ... 80%(Reading database ... 85%(Reading database ... 90%(Reading database ... 95%(Reading database ... 100%(Reading database ... 202507 files and directories currently installed.)
Preparing to unpack .../00-fonts-ipafont-gothic_00303-21ubuntu1_all.deb ...
Unpacking fonts-ipafont-gothic (00303-21ubuntu1) ...
Selecting previously unselected package fonts-freefont-ttf.
Preparing to unpack .../01-fonts-freefont-ttf_20211204+svn4273-2_all.deb ...
Unpacking fonts-freefont-ttf (20211204+svn4273-2) ...
Selecting previously unselected package fonts-tlwg-loma-otf.
Preparing to unpack .../02-fonts-tlwg-loma-otf_1%3a0.7.3-1_all.deb ...
Unpacking fonts-tlwg-loma-otf (1:0.7.3-1) ...
Selecting previously unselected package fonts-unifont.
Preparing to unpack .../03-fonts-unifont_1%3a15.1.01-1build1_all.deb ...
Unpacking fonts-unifont (1:15.1.01-1build1) ...
Selecting previously unselected package fonts-wqy-zenhei.
Preparing to unpack .../04-fonts-wqy-zenhei_0.9.45-8_all.deb ...
Unpacking fonts-wqy-zenhei (0.9.45-8) ...
Preparing to unpack .../05-libasound2t64_1.2.11-1ubuntu0.3_amd64.deb ...
Unpacking libasound2t64:amd64 (1.2.11-1ubuntu0.3) over (1.2.11-1ubuntu0.2) ...
Preparing to unpack .../06-libasound2-data_1.2.11-1ubuntu0.3_all.deb ...
Unpacking libasound2-data (1.2.11-1ubuntu0.3) over (1.2.11-1ubuntu0.2) ...
Selecting previously unselected package xfonts-encodings.
Preparing to unpack .../07-xfonts-encodings_1%3a1.0.5-0ubuntu2_all.deb ...
Unpacking xfonts-encodings (1:1.0.5-0ubuntu2) ...
Selecting previously unselected package xfonts-utils.
Preparing to unpack .../08-xfonts-utils_1%3a7.7+6build3_amd64.deb ...
Unpacking xfonts-utils (1:7.7+6build3) ...
Selecting previously unselected package xfonts-cyrillic.
Preparing to unpack .../09-xfonts-cyrillic_1%3a1.0.5+nmu1_all.deb ...
Unpacking xfonts-cyrillic (1:1.0.5+nmu1) ...
Selecting previously unselected package xfonts-scalable.
Preparing to unpack .../10-xfonts-scalable_1%3a1.0.3-1.3_all.deb ...
Unpacking xfonts-scalable (1:1.0.3-1.3) ...
Setting up fonts-wqy-zenhei (0.9.45-8) ...
Setting up fonts-freefont-ttf (20211204+svn4273-2) ...
Setting up libasound2-data (1.2.11-1ubuntu0.3) ...
Setting up libasound2t64:amd64 (1.2.11-1ubuntu0.3) ...
Setting up fonts-tlwg-loma-otf (1:0.7.3-1) ...
Setting up xfonts-encodings (1:1.0.5-0ubuntu2) ...
Setting up fonts-ipafont-gothic (00303-21ubuntu1) ...
update-alternatives: using /usr/share/fonts/opentype/ipafont-gothic/ipag.ttf to provide /usr/share/fonts/truetype/fonts-japanese-gothic.ttf (fonts-japanese-gothic.ttf) in auto mode
Setting up fonts-unifont (1:15.1.01-1build1) ...
Setting up xfonts-utils (1:7.7+6build3) ...
Setting up xfonts-cyrillic (1:1.0.5+nmu1) ...
Setting up xfonts-scalable (1:1.0.3-1.3) ...
Processing triggers for libc-bin (2.39-0ubuntu8.7) ...
Processing triggers for man-db (2.12.0-4build2) ...
Not building database; man-db/auto-update is not 'true'.
Processing triggers for fontconfig (2.15.0-1.1ubuntu2) ...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
Downloading Chrome for Testing 149.0.7827.55 (playwright chromium v1228) from https://cdn.playwright.dev/builds/cft/149.0.7827.55/linux64/chrome-linux64.zip
|                                                                                |   0% of 177 MiB
|■■■■■■■■                                                                        |  10% of 177 MiB
|■■■■■■■■■■■■■■■■                                                                |  20% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■                                                        |  30% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                                |  40% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                        |  50% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 177 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 177 MiB
Chrome for Testing 149.0.7827.55 (playwright chromium v1228) downloaded to /home/runner/.cache/ms-playwright/chromium-1228
Downloading FFmpeg (playwright ffmpeg v1011) from https://cdn.playwright.dev/dbazure/download/playwright/builds/ffmpeg/1011/ffmpeg-linux.zip
|                                                                                |   0% of 2.3 MiB
|■■■■■■■■                                                                        |  10% of 2.3 MiB
|■■■■■■■■■■■■■■■■                                                                |  20% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■                                                        |  30% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                                |  40% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                        |  50% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 2.3 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 2.3 MiB
FFmpeg (playwright ffmpeg v1011) downloaded to /home/runner/.cache/ms-playwright/ffmpeg-1011
Downloading Chrome Headless Shell 149.0.7827.55 (playwright chromium-headless-shell v1228) from https://cdn.playwright.dev/builds/cft/149.0.7827.55/linux64/chrome-headless-shell-linux64.zip
|                                                                                |   0% of 114.2 MiB
|■■■■■■■■                                                                        |  10% of 114.2 MiB
|■■■■■■■■■■■■■■■■                                                                |  20% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■                                                        |  30% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                                |  40% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                        |  50% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                                |  60% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                        |  70% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■                |  80% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■        |  90% of 114.2 MiB
|■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■| 100% of 114.2 MiB
Chrome Headless Shell 149.0.7827.55 (playwright chromium-headless-shell v1228) downloaded to /home/runner/.cache/ms-playwright/chromium_headless_shell-1228
```

## test log
```text

    Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
        1) <input required="" name="company" autocomplete="organization"/> aka getByRole('textbox', { name: 'Company' })
        2) <select required="" name="buyerType">…</select> aka getByLabel('Buyer typeSelect buyer')

    Call log:
      - waiting for getByLabel('Company')


      55 |   await page.goto('#/request-offer');
      56 |   await page.getByLabel('Full name').fill('Demo Buyer');
    > 57 |   await page.getByLabel('Company').fill('Demo Coffee Company');
         |                                    ^
      58 |   await page.getByLabel('Business email').fill('buyer@example.com');
      59 |   await page.getByLabel('Country').fill('Ethiopia');
      60 |   await page.getByLabel('Buyer type').selectOption({ label: 'Specialty roaster' });
        at /home/runner/work/koffera-coffee/koffera-coffee/tests/routes.spec.js:57:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
        1) <input required="" name="company" autocomplete="organization"/> aka getByRole('textbox', { name: 'Company' })
        2) <select required="" name="buyerType">…</select> aka getByLabel('Buyer typeSelect buyer')

    Call log:
      - waiting for getByLabel('Company')


      55 |   await page.goto('#/request-offer');
      56 |   await page.getByLabel('Full name').fill('Demo Buyer');
    > 57 |   await page.getByLabel('Company').fill('Demo Coffee Company');
         |                                    ^
      58 |   await page.getByLabel('Business email').fill('buyer@example.com');
      59 |   await page.getByLabel('Country').fill('Ethiopia');
      60 |   await page.getByLabel('Buyer type').selectOption({ label: 'Specialty roaster' });
        at /home/runner/work/koffera-coffee/koffera-coffee/tests/routes.spec.js:57:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium-retry1/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-desktop-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  2) [mobile-chromium] › tests/routes.spec.js:54:1 › request form reports demo status instead of fake success 

    Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
        1) <input required="" name="company" autocomplete="organization"/> aka getByRole('textbox', { name: 'Company' })
        2) <select required="" name="buyerType">…</select> aka getByLabel('Buyer typeSelect buyer')

    Call log:
      - waiting for getByLabel('Company')


      55 |   await page.goto('#/request-offer');
      56 |   await page.getByLabel('Full name').fill('Demo Buyer');
    > 57 |   await page.getByLabel('Company').fill('Demo Coffee Company');
         |                                    ^
      58 |   await page.getByLabel('Business email').fill('buyer@example.com');
      59 |   await page.getByLabel('Country').fill('Ethiopia');
      60 |   await page.getByLabel('Buyer type').selectOption({ label: 'Specialty roaster' });
        at /home/runner/work/koffera-coffee/koffera-coffee/tests/routes.spec.js:57:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium/error-context.md

    Retry #1 ───────────────────────────────────────────────────────────────────────────────────────

    Error: locator.fill: Error: strict mode violation: getByLabel('Company') resolved to 2 elements:
        1) <input required="" name="company" autocomplete="organization"/> aka getByRole('textbox', { name: 'Company' })
        2) <select required="" name="buyerType">…</select> aka getByLabel('Buyer typeSelect buyer')

    Call log:
      - waiting for getByLabel('Company')


      55 |   await page.goto('#/request-offer');
      56 |   await page.getByLabel('Full name').fill('Demo Buyer');
    > 57 |   await page.getByLabel('Company').fill('Demo Coffee Company');
         |                                    ^
      58 |   await page.getByLabel('Business email').fill('buyer@example.com');
      59 |   await page.getByLabel('Country').fill('Ethiopia');
      60 |   await page.getByLabel('Buyer type').selectOption({ label: 'Specialty roaster' });
        at /home/runner/work/koffera-coffee/koffera-coffee/tests/routes.spec.js:57:36

    attachment #1: screenshot (image/png) ──────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium-retry1/test-failed-1.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

    Error Context: test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium-retry1/error-context.md

    attachment #3: trace (application/zip) ─────────────────────────────────────────────────────────
    test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium-retry1/trace.zip
    Usage:

        npx playwright show-trace test-results/routes-request-form-report-fc3dd-tus-instead-of-fake-success-mobile-chromium-retry1/trace.zip

    ────────────────────────────────────────────────────────────────────────────────────────────────

  2 failed
    [desktop-chromium] › tests/routes.spec.js:54:1 › request form reports demo status instead of fake success 
    [mobile-chromium] › tests/routes.spec.js:54:1 › request form reports demo status instead of fake success 
  1 skipped
  31 passed (19.9s)
```

