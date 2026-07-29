# riegulate portfolio

Astro static portfolio using Three.js and p5.js.

## Edit content

- Projects, links, descriptions and timeline: `src/data/projects.mjs`
- Page structure: `src/pages/index.astro`
- Visual design: `src/styles/global.css`
- Filters, modal, Three.js and p5.js: `src/scripts/site.js`
- Images: `public/assets/`

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds Astro and publishes `dist/` to GitHub Pages. Vercel also detects and builds Astro automatically.
