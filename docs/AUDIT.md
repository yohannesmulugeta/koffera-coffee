# Koffera Website Audit

## Critical defects found

1. The repository contained two competing website implementations: React/Vite source and a separate static `site/index.html` fallback.
2. The deployment workflow published the `site` folder while the root application expected Vite to compile `/src/main.jsx`.
3. The live site could therefore serve an uncompiled Vite entry and request `/src/main.jsx`, creating a blank page.
4. The source contained earlier combined page files, repeated stylesheets and emergency fallback code.
5. Product, company and legal content included many development-facing placeholders.
6. There was no package lock, route-level browser testing or reliable check for console and asset failures.

## Architecture decision

React + Vite is the only supported website implementation.

- Source: `src/`
- Public assets: `public/`
- Build output: `dist/`
- Router: `HashRouter`
- Deployment source: GitHub Actions
- Published artifact: `dist`

The legacy `site/` fallback is deprecated and must not be deployed.

## Keep / Refactor / Replace / Remove

| Area | Decision | Reason |
|---|---|---|
| React + Vite foundation | Keep | Appropriate for a modular, responsive marketing website |
| Coffee-brown design direction | Keep and refine | Matches the Koffera identity better than the earlier green concept |
| HashRouter | Keep for GitHub Pages demo | Reliable refresh and direct navigation without server rewrites |
| Structured coffee/origin content | Refactor | Separate data from page components |
| Large combined components | Replace | Improve maintainability and route isolation |
| Separate `site/` implementation | Remove | Competing deployment source caused blank-page failures |
| Raw source deployment | Remove | JSX must be compiled before publication |
| Unsupported company claims | Remove or verify | Buyer trust requires evidence |
| One-sentence legal pages | Replace | Provide structured drafts for legal review |
| Generic black placeholders | Replace | Use branded intentional media placeholders |

## Acceptance criteria

- `npm ci`, lint and build succeed.
- Playwright visits every route on desktop and mobile.
- No console errors or local 404 responses.
- GitHub Pages publishes `dist` only.
- The production page does not request `/src/main.jsx`.
- A runtime error renders a visible fallback instead of a white screen.
