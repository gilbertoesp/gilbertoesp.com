# gilbertoesp.com

Minimalist personal site for Gilberto Esp (AI Consultant & Builder). Built with Astro (static output), TypeScript, and a system-font CSS design system. No UI framework, no external fonts.

## Stack

- **Astro 5** — compiles to pure static HTML (`build.format: "file"` emits `.html` routes)
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
  pages/
    index.astro        # landing page → / (English, default locale)
    blog.astro         # blog → /blog.html
    material.astro     # curated library → /material.html
    es/                # Spanish locale (→ /es.html, /es/blog.html, /es/material.html)
  components/          # Nav, Flag, Hero, Projects, Tools, Events, About, Footer
  layouts/BaseLayout.astro
  lib/
    i18n.ts            # locales (en/es active; zh/pt/fr reserved), translation dicts
    constants.ts       # socials, stack, fallback projects, events
    github.ts          # build-time GitHub API fetch (falls back to constants)
    blog.ts            # curated LinkedIn article list (typed)
    material.ts        # curated library resources (papers/books/sources)
    toolLogos.ts       # build-time brand logo fetch for stack hover watermarks
  styles/global.css    # design tokens + styles
public/                # robots.txt, portfolio.html → "/" stub, es/index.html → /es.html stub
```

- **`/`** — landing page (English)
- **`/blog.html`** — curated list of LinkedIn articles from `src/lib/blog.ts` (LinkedIn has no public API for personal-profile articles, so the list is updated manually)
- **`/material.html`** — curated papers/books/sources from `src/lib/material.ts`
- **`/es/`** (served by `/es.html`) — the whole site in Spanish; toggle in the nav switches each page between languages
- **`/portfolio.html`** — static noindex redirect to `/` (page removed; projects live on the landing)

## Languages

The nav has a flag switcher. English is the default locale at `/`; Spanish lives under `/es/`. `src/lib/i18n.ts` defines the locales (Chinese, Portuguese, French are declared but not built yet — implement `src/pages/zh/`, `pt/`, `fr/` and flip their `implemented` flag when ready). All page chrome copy comes from typed translation dicts; blog posts and material resources are shared across languages (their notes stay in their own language).

## Deploy

Vercel (recommended): connect repo, framework preset **Astro**, build command `npm run build`, output `dist`. Netlify also works with the same build settings.

## Build-time integrations

- `src/lib/github.ts` fetches the 5 most recently pushed repos for `gilbertoesp`; falls back to `projectsFallback` on failure.
- `src/lib/toolLogos.ts` fetches each stack tool's brand logo (Simple Icons SVG; AWS/Chroma via inlined favicon data URI; monogram as last resort). Hovering a tool name shows its grayscale watermark.
- Both run at build only — zero runtime external requests.

## Content

Edit page chrome copy in `src/lib/i18n.ts` (per-language `Translation` dicts). Update contact links and the stack list in `src/lib/constants.ts`. The `events` array there is empty by design; `material.ts` Papers section is empty by design.
