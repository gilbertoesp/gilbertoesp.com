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
   BLOG FILTER (blog.html only)
════════════════════════════════════ */
const filterBtns = document.querySelectorAll('[data-filter]');
if (filterBtns.length) {
  const postCards = document.querySelectorAll('.post-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      postCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}
