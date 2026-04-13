/* ============================================================
   GILBERTOESP — script.js
   Modules: i18n · theme · hamburger nav · scroll reveal · contact form · blog filter
   ============================================================ */


/* ════════════════════════════════════
   THEME ENGINE
   Default: light — no flash on load
════════════════════════════════════ */
const THEME_KEY = 'gilbertoesp_theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem(THEME_KEY, theme);
}

applyTheme(localStorage.getItem(THEME_KEY) || 'light');

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.hasAttribute('data-theme');
    applyTheme(isDark ? 'light' : 'dark');
  });
}


/* ════════════════════════════════════
   LANGUAGE ENGINE — async JSON locale
════════════════════════════════════ */
let currentLang = localStorage.getItem('gilbertoesp_lang') || 'en';
const translationCache = {};

async function loadTranslations(lang) {
  if (translationCache[lang]) return translationCache[lang];
  const res = await fetch(`locale/${lang}.json`);
  if (!res.ok) return translationCache[currentLang] || {};
  const data = await res.json();
  translationCache[lang] = data;
  return data;
}

function applyTranslations(t, lang) {
  // Swap all [data-i18n] innerHTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Swap textarea / input placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Rebuild ticker (only on pages that have one)
  const tickerInner = document.getElementById('ticker-inner');
  if (tickerInner && Array.isArray(t.ticker)) {
    const sep   = '<span class="ticker-sep">&#9670;</span>';
    const words = [...t.ticker, ...t.ticker];
    tickerInner.innerHTML = words.map(w => `<span>${w}</span>`).join(sep);
  }

  // Update <html lang> for accessibility & SEO
  document.documentElement.lang = lang;

  // Show the flag of the OTHER language (the one you'd switch TO)
  const flagToEs = document.getElementById('flag-to-es');
  const flagToEn = document.getElementById('flag-to-en');
  if (flagToEs) flagToEs.style.display = lang === 'en' ? 'inline' : 'none';
  if (flagToEn) flagToEn.style.display = lang === 'es' ? 'inline' : 'none';

  // Update aria-label on lang toggle to describe the action
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.setAttribute('aria-label',
      lang === 'en' ? 'Cambiar a español' : 'Switch to English');
  }

  // Refresh blog filter labels if they were already rendered
  const filterRow = document.getElementById('filter-row');
  if (filterRow) {
    filterRow.querySelectorAll('[data-filter]').forEach(btn => {
      const tag = btn.dataset.filter;
      const label = tag === 'all'
        ? (t['blog.filter.all'] || 'All')
        : t[`blog.filter.${tag}`] || (tag.charAt(0).toUpperCase() + tag.slice(1));
      btn.textContent = label;
    });
  }

  // Persist
  localStorage.setItem('gilbertoesp_lang', lang);
  currentLang = lang;
}

async function applyLang(lang) {
  const t = await loadTranslations(lang);
  applyTranslations(t, lang);
}

const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'es' : 'en');
  });
}

// Initial load
applyLang(currentLang);


/* ════════════════════════════════════
   HAMBURGER MENU
════════════════════════════════════ */
const hamburger = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

function closeNav() {
  if (!navLinks || !hamburger) return;
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}


/* ════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ════════════════════════════════════
   CONTACT FORM
════════════════════════════════════ */
const submitBtn = document.getElementById('submit-btn');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const t = translationCache[currentLang] || {};
    alert(t['form.success'] || "Thanks! I'll be in touch soon.");
  });
}


/* ════════════════════════════════════
   DATA LOADERS — blog · portfolio · material
════════════════════════════════════ */
async function fetchData(path) {
  const res = await fetch(path);
  if (!res.ok) return null;
  return res.json();
}

function attachBlogFilter(filterRow, postsGrid) {
  const btns = filterRow.querySelectorAll('[data-filter]');
  const cards = postsGrid.querySelectorAll('.post-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

function renderBlog(posts) {
  const filterRow = document.getElementById('filter-row');
  const postsGrid = document.getElementById('posts-grid');
  if (!filterRow || !postsGrid) return;

  const t = translationCache[currentLang] || {};

  const tags = ['all', ...new Set(posts.flatMap(p => p.tags))];
  filterRow.innerHTML = tags.map((tag, i) => {
    const label = tag === 'all'
      ? (t['blog.filter.all'] || 'All')
      : t[`blog.filter.${tag}`] || (tag.charAt(0).toUpperCase() + tag.slice(1));
    return `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${tag}">${label}</button>`;
  }).join('');

  postsGrid.innerHTML = posts.map(post => `
    <article class="post-card reveal" data-category="${post.tags[0]}">
      <div class="post-meta">
        <span class="post-date">${post.date}</span>
        <span class="post-tag">${post.tags[0].charAt(0).toUpperCase() + post.tags[0].slice(1)}</span>
      </div>
      <h2 class="post-title">${post.title}</h2>
      <p class="post-excerpt">${post.description}</p>
      <a href="${post.link}" class="post-read">Read →</a>
    </article>
  `).join('');

  postsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  attachBlogFilter(filterRow, postsGrid);
}

function renderPortfolio(projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => `
    <div class="project-card reveal">
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <h2 class="project-title">${project.title}</h2>
      <p class="project-desc">${project.description}</p>
      <a href="${project.link}" class="project-link">View case study →</a>
    </div>
  `).join('');

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function renderMaterialSection(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const list = container.querySelector('.material-list');
  if (!list) return;

  list.innerHTML = items.map(item => `
    <a href="${item.link}" class="material-item" rel="noopener noreferrer">
      <div class="material-item-body">
        <div class="material-item-title">${item.title}</div>
        <div class="material-item-source">${item.source}</div>
        <div class="material-item-note">${item.note}</div>
      </div>
      <span class="material-item-arrow">↗</span>
    </a>
  `).join('');
}

function renderMaterial(data) {
  renderMaterialSection('material-reading', data.reading || []);
  renderMaterialSection('material-tools',   data.tools   || []);
  renderMaterialSection('material-talks',   data.talks   || []);
}

// Page detection and data loading
if (document.getElementById('posts-grid')) {
  fetchData('data/blog.json').then(data => { if (data) renderBlog(data); });
}
if (document.getElementById('projects-grid')) {
  fetchData('data/portfolio.json').then(data => { if (data) renderPortfolio(data); });
}
if (document.getElementById('material-reading')) {
  fetchData('data/material.json').then(data => { if (data) renderMaterial(data); });
}
