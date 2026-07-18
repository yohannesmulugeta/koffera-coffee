# Responsive Diagnostic Report

- Source commit: c10ba99283d019b2560aaa484e85eb658dbb6f23
- Exit code: 0
- Result: PASS

```text

> koffera-coffee-website@1.0.0 test:e2e
> playwright test


Running 50 tests using 2 workers

  ✓   1 [desktop-chromium] › tests/routes.spec.js:32:3 › #/coffees renders without console or asset failures (1.1s)
  ✓   2 [desktop-chromium] › tests/routes.spec.js:32:3 › #/ renders without console or asset failures (1.1s)
  ✓   4 [desktop-chromium] › tests/routes.spec.js:32:3 › #/origins renders without console or asset failures (1.0s)
  ✓   3 [desktop-chromium] › tests/routes.spec.js:32:3 › #/coffees/yirgacheffe-washed renders without console or asset failures (1.0s)
  ✓   6 [desktop-chromium] › tests/routes.spec.js:32:3 › #/export-services renders without console or asset failures (940ms)
  ✓   5 [desktop-chromium] › tests/routes.spec.js:32:3 › #/quality-traceability renders without console or asset failures (1.0s)
  ✓   7 [desktop-chromium] › tests/routes.spec.js:32:3 › #/markets renders without console or asset failures (990ms)
  ✓   8 [desktop-chromium] › tests/routes.spec.js:32:3 › #/resources renders without console or asset failures (986ms)
  ✓  10 [desktop-chromium] › tests/routes.spec.js:32:3 › #/request-offer renders without console or asset failures (900ms)
  ✓   9 [desktop-chromium] › tests/routes.spec.js:32:3 › #/faq renders without console or asset failures (968ms)
  ✓  11 [desktop-chromium] › tests/routes.spec.js:32:3 › #/about renders without console or asset failures (971ms)
  ✓  12 [desktop-chromium] › tests/routes.spec.js:32:3 › #/contact renders without console or asset failures (967ms)
  ✓  13 [desktop-chromium] › tests/routes.spec.js:32:3 › #/privacy renders without console or asset failures (893ms)
  ✓  14 [desktop-chromium] › tests/routes.spec.js:32:3 › #/terms renders without console or asset failures (936ms)
  ✓  15 [desktop-chromium] › tests/routes.spec.js:32:3 › #/missing-page renders without console or asset failures (917ms)
  ✓  16 [desktop-chromium] › tests/routes.spec.js:55:3 › desktop-1920 has no horizontal overflow on key pages (900ms)
  ✓  17 [desktop-chromium] › tests/routes.spec.js:55:3 › desktop-1440 has no horizontal overflow on key pages (907ms)
  ✓  18 [desktop-chromium] › tests/routes.spec.js:55:3 › laptop-1024 has no horizontal overflow on key pages (890ms)
  ✓  20 [desktop-chromium] › tests/routes.spec.js:55:3 › mobile-430 has no horizontal overflow on key pages (842ms)
  ✓  19 [desktop-chromium] › tests/routes.spec.js:55:3 › tablet-768 has no horizontal overflow on key pages (893ms)
  ✓  21 [desktop-chromium] › tests/routes.spec.js:55:3 › mobile-390 has no horizontal overflow on key pages (818ms)
  ✓  22 [desktop-chromium] › tests/routes.spec.js:55:3 › mobile-360 has no horizontal overflow on key pages (830ms)
  -  24 [desktop-chromium] › tests/routes.spec.js:76:1 › mobile navigation opens and reaches the catalogue
  ✓  23 [desktop-chromium] › tests/routes.spec.js:66:1 › desktop coffee dropdown exposes origin navigation (826ms)
  ✓  25 [desktop-chromium] › tests/routes.spec.js:86:1 › request form reports demo status instead of fake success (2.5s)
  ✓  26 [mobile-chromium] › tests/routes.spec.js:32:3 › #/ renders without console or asset failures (1.3s)
  ✓  27 [mobile-chromium] › tests/routes.spec.js:32:3 › #/coffees/yirgacheffe-washed renders without console or asset failures (1.3s)
  ✓  28 [mobile-chromium] › tests/routes.spec.js:32:3 › #/coffees renders without console or asset failures (1.3s)
  ✓  29 [mobile-chromium] › tests/routes.spec.js:32:3 › #/origins renders without console or asset failures (1.2s)
  ✓  30 [mobile-chromium] › tests/routes.spec.js:32:3 › #/quality-traceability renders without console or asset failures (1.2s)
  ✓  31 [mobile-chromium] › tests/routes.spec.js:32:3 › #/export-services renders without console or asset failures (1.2s)
  ✓  32 [mobile-chromium] › tests/routes.spec.js:32:3 › #/markets renders without console or asset failures (1.2s)
  ✓  33 [mobile-chromium] › tests/routes.spec.js:32:3 › #/resources renders without console or asset failures (1.1s)
  ✓  34 [mobile-chromium] › tests/routes.spec.js:32:3 › #/faq renders without console or asset failures (1.1s)
  ✓  35 [mobile-chromium] › tests/routes.spec.js:32:3 › #/request-offer renders without console or asset failures (1.2s)
  ✓  36 [mobile-chromium] › tests/routes.spec.js:32:3 › #/about renders without console or asset failures (1.2s)
  ✓  37 [mobile-chromium] › tests/routes.spec.js:32:3 › #/contact renders without console or asset failures (1.2s)
  ✓  38 [mobile-chromium] › tests/routes.spec.js:32:3 › #/privacy renders without console or asset failures (1.1s)
  ✓  39 [mobile-chromium] › tests/routes.spec.js:32:3 › #/terms renders without console or asset failures (1.1s)
  ✓  40 [mobile-chromium] › tests/routes.spec.js:32:3 › #/missing-page renders without console or asset failures (1.2s)
  ✓  41 [mobile-chromium] › tests/routes.spec.js:55:3 › desktop-1920 has no horizontal overflow on key pages (1.3s)
  ✓  42 [mobile-chromium] › tests/routes.spec.js:55:3 › desktop-1440 has no horizontal overflow on key pages (1.1s)
  ✓  43 [mobile-chromium] › tests/routes.spec.js:55:3 › laptop-1024 has no horizontal overflow on key pages (962ms)
  ✓  44 [mobile-chromium] › tests/routes.spec.js:55:3 › tablet-768 has no horizontal overflow on key pages (907ms)
  ✓  45 [mobile-chromium] › tests/routes.spec.js:55:3 › mobile-430 has no horizontal overflow on key pages (850ms)
  ✓  46 [mobile-chromium] › tests/routes.spec.js:55:3 › mobile-390 has no horizontal overflow on key pages (834ms)
  -  48 [mobile-chromium] › tests/routes.spec.js:66:1 › desktop coffee dropdown exposes origin navigation
  ✓  47 [mobile-chromium] › tests/routes.spec.js:55:3 › mobile-360 has no horizontal overflow on key pages (879ms)
  ✓  49 [mobile-chromium] › tests/routes.spec.js:76:1 › mobile navigation opens and reaches the catalogue (1.8s)
  ✓  50 [mobile-chromium] › tests/routes.spec.js:86:1 › request form reports demo status instead of fake success (2.5s)

  2 skipped
  48 passed (31.3s)
```
