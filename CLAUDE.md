# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Gilberto Espinoza (gilbertoesp.com). A vanilla HTML/CSS/JS static site with no build system or package manager.

## Development

**`index.html` at the site root** is the default entry point (`/` on static hosts). Use a local static server so language files load (`fetch` does not work reliably from `file://`):

```bash
python3 -m http.server 8080
# or
npx serve .
```

No linting, testing, or CI configuration exists.

## Architecture

**Shared assets (repo root):** `styles.css`, `script.js`, and `locale/en.json` + `locale/es.json`.

**HTML pages (flat, same directory as assets):**

- **`index.html`** — Home: Hero, ticker, About, Services, Process, bilingual banner, Contact, Footer
- **`blog.html`** — Blog listing with category filter (`[data-filter]` / `.post-card`)
- **`portfolio.html`** — Project grid
- **`material.html`** — Curated reading / tools / talks

Global nav shows Blog, Portfolio, Material, and Contact (Contact targets `index.html#contact`; the `@gilbertoesp` logo goes to `index.html`). Keep new top-level pages beside these files so relative links to CSS, JS, and `locale/` stay valid.

**`script.js`** — theme toggle, async locale loading, hamburger nav, scroll reveal, contact stub, blog filter. Optional DOM nodes are guarded so pages without every control still load.

## i18n Pattern

Strings live in **`locale/en.json`** and **`locale/es.json`**. Each translatable element uses `data-i18n="key"` (and `data-i18n-placeholder` where needed). To add text: add the key to both JSON files, then add the attribute in HTML. The home page ticker uses the `ticker` array in those files.

## Theming

CSS custom properties on `:root` and `[data-theme="dark"]` control the color scheme. The amber accent color is `#f0a500`. Theme is toggled by setting `data-theme` on `<html>` and persisted in `localStorage`.
