# gilbertoesp.com

Minimalist personal site for Gilberto Esp (AI Consultant & Builder). Built with Astro (static output), TypeScript, and a system-font CSS design system. No UI framework, no external fonts.

## Stack

- **Astro 5** — compiles to pure static HTML
- **TypeScript** — strict mode
- **CSS** — custom properties in `src/styles/global.css` (light theme; `[data-theme="dark"]` variables ready)

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # static build → dist/
npm run preview   # serve the built site
npm run check     # astro typecheck
```

## Structure

```
src/
  pages/index.astro      # landing page (hero, projects, stack, events, about, footer)
  pages/blog.html.astro  # blog page → /blog.html
  components/            # Nav, Hero, Projects, Tools, Events, About, Footer
  layouts/BaseLayout.astro
  lib/
    constants.ts         # socials, stack, fallback projects, events
    github.ts            # build-time GitHub API fetch (falls back to constants)
    blog.ts              # curated LinkedIn article list (typed)
  styles/global.css      # design tokens + styles
public/                  # legacy pages served as-is (portfolio/material + assets)
```

- **`/`** — landing page (`src/pages/index.astro`)
- **`/blog.html`** — built from `src/pages/blog.html.astro`; articles are a curated list of LinkedIn posts in `src/lib/blog.ts` (LinkedIn has no public API for personal-profile articles, so this list is updated manually)
- **`/portfolio.html` `/material.html`** — legacy pages preserved in `public/`

## Deploy

Vercel (recommended): connect repo, framework preset **Astro**, build command `npm run build`, output `dist`. Netlify also works with the same build settings.

## GitHub integration

`src/lib/github.ts` fetches the 5 most recently pushed repos for `gilbertoesp` at build time. On failure or empty results it falls back to `projectsFallback` in `src/lib/constants.ts`. Update contact links in the same file.

## Content

Edit copy directly in the `.astro` components. The `events` array in `src/lib/constants.ts` is empty by design — add confirmed talks there.
