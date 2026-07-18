# Koffera Coffee Website

A responsive React + Vite website for an Ethiopian coffee exporter, deployed to GitHub Pages.

## Architecture

- React 19
- Vite 8
- React Router with `HashRouter` for GitHub Pages compatibility
- CSS design system with no blocking external fonts
- IntersectionObserver-based scroll animation
- Playwright route, console and asset smoke tests
- GitHub Actions deployment from the generated `dist` directory

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

## Deployment

GitHub Pages must use **GitHub Actions** as the source. The workflow builds the Vite application and publishes only `dist`.

Live demo: https://yohannesmulugeta.github.io/koffera-coffee/

## Content status

Coffee profiles, company claims, certificates, buyer references, images, videos and commercial policies are illustrative or incomplete until Koffera provides approved information.
