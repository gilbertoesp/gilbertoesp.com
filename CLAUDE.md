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

**`src/pages/index.astro`** — the landing page at `/`. Composed of components in `src/components/` (Nav, Hero, Projects, Tools, Events, About, Footer) using the layout in `src/layouts/BaseLayout.astro`.

**`src/lib/`**
- `constants.ts` — socials (WhatsApp/LinkedIn/GitHub/Instagram), tools/stack, fallback projects, events
- `github.ts` — fetches latest GitHub repos at build time; falls back to `projectsFallback` on failure

**`src/styles/global.css`** — all styling. Design tokens as CSS custom properties on `:root` (light theme default; `[data-theme="dark"]` variable block prepared but unused). Accent: `#FFBF00`. System font stack, no external fonts.

**`public/`** — legacy pages served as-is: `blog.html`, `portfolio.html`, `material.html` plus their assets (`styles.css`, `script.js`, `locale/`, `data/`). These are untouched vanilla HTML pages with runtime i18n; they are not part of the Astro build.

## Conventions

- New landing sections = new components in `src/components/`, composed in `index.astro`.
- Landing copy is English-only; the legacy pages keep their own EN/ES toggle.
- Keep it minimal: system fonts, no UI frameworks, no heavy deps. Prefer CSS over JS.
- Build-time data only (e.g., `github.ts`); no runtime data fetching on the landing page.
- Update `src/lib/constants.ts` for contact links and the stack list.
