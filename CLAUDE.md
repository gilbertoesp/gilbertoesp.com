# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Personal portfolio website for Gilberto Espinoza (gilbertoesp.com). Built with Astro (static output) + TypeScript. No UI framework.

## Development

```bash
npm install
npm run dev       # dev server (http://localhost:4321)
npm run build     # static build → dist/
npm run preview   # serve built output
npm run check     # astro typecheck (strict TS)
```

## Architecture

All pages ship from the Astro build (`build.format: "file"` emits `.html` routes).

**`src/pages/index.astro`** — the landing page at `/`. Composed of components in `src/components/` (Nav, Hero, Projects, Tools, Events, About, Footer) using the layout in `src/layouts/BaseLayout.astro`.

**`src/pages/blog.astro`** — the blog at `/blog.html`, in the same design system. Renders a curated list of LinkedIn articles from `src/lib/blog.ts` (typed `Post[]`, newest-first). Spanish copy; no i18n toggle.

**`src/pages/material.astro`** — a curated library at `/material.html` (papers/books/other sources) from `src/lib/material.ts`. English copy. Renders only non-empty categories.

**`src/lib/`**
- `constants.ts` — socials (WhatsApp/LinkedIn/GitHub/Instagram), tools/stack, fallback projects, events
- `github.ts` — fetches latest GitHub repos at build time; falls back to `projectsFallback` on failure
- `blog.ts` — typed curated LinkedIn article list; update this file to add/remove posts. `formatDate` and `tagLabels` helpers included
- `material.ts` — typed curated library resources; add entries to the Papers/Books/Other sources groups
- `toolLogos.ts` — build-time fetch of brand logos (Simple Icons SVG; AWS/Chroma → favicon data URI; monogram fallback). Hovering a tool name in the stack section shows a grayscale watermark

**`src/styles/global.css`** — all styling. Design tokens as CSS custom properties on `:root` (light theme default; `[data-theme="dark"]` variable block prepared but unused). Accent: `#FFBF00`. System font stack, no external fonts.

**`public/`** — only `robots.txt` and a static noindex redirect stub (`portfolio.html` → `/`; the page was removed as redundant with the landing's projects).

## Conventions

- New landing sections = new components in `src/components/`, composed in `index.astro`.
- Landing + material copy is English; blog copy is Spanish. No i18n toggle on any page.
- Keep it minimal: system fonts, no UI frameworks, no heavy deps. Prefer CSS over JS.
- Build-time data only (e.g., `github.ts`, `toolLogos.ts`); no runtime data fetching.
- Update `src/lib/constants.ts` for contact links and the stack list.
