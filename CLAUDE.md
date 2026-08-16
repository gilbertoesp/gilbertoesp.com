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

**`src/pages/index.astro`** — the English landing page at `/`. Composed of components in `src/components/` (Nav, Hero, Projects, Tools, Events, About, Footer) using the layout in `src/layouts/BaseLayout.astro`. Every landing component takes a typed `t` (Translation) prop.

**`src/pages/blog.astro`** — the blog at `/blog.html`, in the same design system. Renders a curated list of LinkedIn articles from `src/lib/blog.ts` (typed `Post[]`, newest-first). Copy lives in the i18n dict; the article content itself is Spanish.

**`src/pages/material.astro`** — a curated library at `/material.html` (papers/books/other sources) from `src/lib/material.ts`. Renders only non-empty categories; group labels come from the i18n dict.

**`src/pages/es/`** — the Spanish locale: `index.astro` → `/es.html` (clean URL `/es/` served by the `public/es/index.html` redirect stub), `blog.astro` → `/es/blog.html`, `material.astro` → `/es/material.html`. Mirrors the root pages with `translations.es`.

**`src/lib/i18n.ts`** — the i18n core. `locales` defines en/es (implemented) and zh/pt/fr (reserved, not built). `Translation` is the typed dictionary shape; `translations` holds per-locale dicts. `localizedHref(locale, basePath)` builds locale-prefixed links. `implementedLocales` drives the nav flag switcher and hreflang — to add a language, build `src/pages/<code>/`, then flip its `implemented` flag and add its dict.

**`src/lib/`**
- `constants.ts` — socials (WhatsApp/LinkedIn/GitHub/Instagram/X), tools/stack, fallback projects, events
- `github.ts` — fetches latest GitHub repos at build time; falls back to `projectsFallback` on failure
- `blog.ts` — typed curated LinkedIn article list; update this file to add/remove posts. `formatDate(iso, locale)` helper
- `material.ts` — typed curated library resources; groups carry a `key` (papers/books/other) used for label translation
- `toolLogos.ts` — build-time fetch of brand logos (Simple Icons SVG; AWS/Chroma → favicon data URI; monogram fallback). Hovering a tool name in the stack section shows a grayscale watermark

**`src/components/Nav.astro`** — takes `t`, `locale`, and `basePath`; renders locale-aware links plus the flag switcher (`Flag.astro` inline SVG flags; only implemented locales shown). `BaseLayout` takes `lang` (default `en`) and `basePath` and emits canonical + hreflang alternates.

**`src/styles/global.css`** — all styling. Design tokens as CSS custom properties on `:root` (light theme default; `[data-theme="dark"]` variable block prepared but unused). Accent: `#FFBF00`. System font stack, no external fonts.

**`public/`** — only `robots.txt` and static noindex redirect stubs (`portfolio.html` → `/`; `es/index.html` → `/es.html`; the portfolio page was removed as redundant with the landing's projects).

## Conventions

- New landing sections = new components in `src/components/`, composed in `index.astro` (and `es/index.astro`).
- All chrome copy lives in `src/lib/i18n.ts` translation dicts; blog posts and material resources are shared across languages.
- Keep it minimal: system fonts, no UI frameworks, no heavy deps. Prefer CSS over JS.
- Build-time data only (e.g., `github.ts`, `toolLogos.ts`); no runtime data fetching.
- Update `src/lib/constants.ts` for contact links and the stack list.
