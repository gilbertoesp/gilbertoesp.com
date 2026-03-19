/* ============================================================
   GILBERTOESP — script.js
   Modules: i18n · hamburger nav · scroll reveal · contact form
   ============================================================ */

/* ════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════ */
const TRANSLATIONS = {
  en: {
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.process':  'Process',
    'nav.contact':  'Contact',

    'hero.eyebrow': '// Gilberto Espinoza &nbsp;&middot;&nbsp; Tech Consultant &amp; Data Analyst',
    'hero.tagline': '&ldquo;Understanding with you.&rdquo;',
    'hero.sub':     'The tech landscape is overwhelming and uncertain. I bring orientation, clarity, and data-driven insight &mdash; so you make smarter decisions and actually understand what&rsquo;s happening in your business.',
    'hero.cta1':    'See my services',
    'hero.cta2':    'Let&rsquo;s talk',

    'about.label': '// 01 &mdash; About',
    'about.title': 'Tech insight<br/>made human.',
    'about.body':  'I&rsquo;m Gilberto Espinoza &mdash; a computer scientist, analyst, and entrepreneur. I help businesses and founders navigate the uncertainty of modern technology with grounded data, honest advice, and real solutions.',
    'about.stat1': 'Years of experience',
    'about.stat2': 'Languages',
    'about.stat3': 'Curiosity',
    'about.stat4': 'Honest insight',

    'services.label':    '// 02 &mdash; Services',
    'services.title':    'What I do<br/>for you.',
    'services.sub':      'Every service is delivered with transparency and context. You don&rsquo;t just get a deliverable &mdash; you get the understanding behind it.',
    'services.s1.title': 'Data &amp; Statistics',
    'services.s1.desc':  'I transform raw numbers into clear narratives. From descriptive stats to predictive models &mdash; I make data tell you what your business needs.',
    'services.s2.title': 'Web Development',
    'services.s2.desc':  'Custom websites and web applications built with real code. Clean architecture, fast performance, and designed to convert visitors into clients.',
    'services.s3.title': 'Market Research',
    'services.s3.desc':  'I study what your customers actually need. Surveys, data collection, competitor analysis, and structured insights to guide your strategy.',
    'services.s4.title': 'Content Strategy',
    'services.s4.desc':  'Bilingual content that leads to customers. Posts, campaigns, and digital presence managed with a clear audience strategy &mdash; not guesswork.',

    'data.label':  '// 03 &mdash; The Data Advantage',
    'data.title':  'Numbers don&rsquo;t lie.<br/>But they need context.',
    'data.body':   'Most businesses have data they don&rsquo;t use. I turn that into structured insight &mdash; so decisions are based on evidence, not guesses.',
    'data.chart1': '// Business clarity score &mdash; before vs. after',
    'data.chart2': '// Revenue trend &mdash; typical client trajectory',
    'data.bar1':   'Before',
    'data.bar2':   'After',
    'data.bar3':   'Avg. market',

    'process.label':    '// 04 &mdash; How I Work',
    'process.title':    'From question<br/>to clarity.',
    'process.s1.title': 'Listen',
    'process.s1.body':  'I start by understanding your business, your goals, and what&rsquo;s actually confusing or broken right now.',
    'process.s2.title': 'Analyze',
    'process.s2.body':  'I dig into your data, your market, and your tech stack. I find patterns and problems most people miss.',
    'process.s3.title': 'Build',
    'process.s3.body':  'Whether it&rsquo;s a dashboard, a website, or a content plan &mdash; I deliver real, working solutions. No fluff.',
    'process.s4.title': 'Explain',
    'process.s4.body':  'I make sure you understand everything. The insight is yours to keep &mdash; not locked in a black box.',

    'banner.title': 'Ready to make sense of your data?',
    'banner.body':  'Whether you&rsquo;re a startup, a growing SME, or just someone who&rsquo;s tired of guessing &mdash; I can help you go from confusion to clarity.',
    'banner.cta':   'Start a conversation &rarr;',

    'contact.label':      '// 05 &mdash; Contact',
    'contact.title':      'Let&rsquo;s work<br/>together.',
    'contact.sub':        'I&rsquo;m open to freelance projects, consulting, and long-term partnerships. Reach out in whatever feels natural.',
    'contact.loc.label':  'Location',
    'contact.soc.label':  'Socials',
    'contact.lang.label': 'Languages',

    'form.name':        'Your name',
    'form.service':     'Service of interest',
    'form.select':      'Select one...',
    'form.opt1':        'Data &amp; Statistics',
    'form.opt2':        'Web Development',
    'form.opt3':        'Market Research',
    'form.opt4':        'Content Strategy',
    'form.opt5':        'Other',
    'form.message':     'Message',
    'form.placeholder': 'Tell me about your project...',
    'form.submit':      'Send message &rarr;',

    'footer.copy': '&copy; 2025 Gilberto Espinoza. Understanding with you.',

    ticker: ['Data Analysis', 'Web Development', 'Market Research', 'Content Strategy', 'Tech Clarity', 'Statistics'],
  },

  es: {
    'nav.about':    'Sobre m&iacute;',
    'nav.services': 'Servicios',
    'nav.process':  'Proceso',
    'nav.contact':  'Contacto',

    'hero.eyebrow': '// Gilberto Espinoza &nbsp;&middot;&nbsp; Consultor Tecnol&oacute;gico &amp; Analista de Datos',
    'hero.tagline': '&ldquo;Entendiendo contigo.&rdquo;',
    'hero.sub':     'El panorama tecnol&oacute;gico es abrumador e incierto. Yo traigo orientaci&oacute;n, claridad y an&aacute;lisis basado en datos &mdash; para que tomes decisiones m&aacute;s inteligentes y entiendas lo que pasa en tu negocio.',
    'hero.cta1':    'Ver mis servicios',
    'hero.cta2':    'Hablemos',

    'about.label': '// 01 &mdash; Sobre m&iacute;',
    'about.title': 'Tecnolog&iacute;a<br/>con perspectiva humana.',
    'about.body':  'Soy Gilberto Espinoza &mdash; cient&iacute;fico en computaci&oacute;n, analista y emprendedor. Ayudo a empresas y fundadores a navegar la incertidumbre tecnol&oacute;gica con datos concretos, asesor&iacute;a honesta y soluciones reales.',
    'about.stat1': 'A&ntilde;os de experiencia',
    'about.stat2': 'Idiomas',
    'about.stat3': 'Curiosidad',
    'about.stat4': 'Asesor&iacute;a honesta',

    'services.label':    '// 02 &mdash; Servicios',
    'services.title':    'Lo que hago<br/>por ti.',
    'services.sub':      'Cada servicio se entrega con transparencia y contexto. No solo recibes un resultado &mdash; entiendes el porqu&eacute; detr&aacute;s de &eacute;l.',
    'services.s1.title': 'Datos y Estad&iacute;stica',
    'services.s1.desc':  'Transformo n&uacute;meros crudos en narrativas claras. Desde estad&iacute;stica descriptiva hasta modelos predictivos &mdash; hago que los datos te digan lo que tu negocio necesita saber.',
    'services.s2.title': 'Desarrollo Web',
    'services.s2.desc':  'Sitios web y aplicaciones construidas con c&oacute;digo real. Arquitectura limpia, rendimiento r&aacute;pido y dise&ntilde;ado para convertir visitantes en clientes.',
    'services.s3.title': 'Investigaci&oacute;n de Mercado',
    'services.s3.desc':  'Estudio lo que tus clientes realmente necesitan. Encuestas, recolecci&oacute;n de datos, an&aacute;lisis de competencia e insights estructurados para guiar tu estrategia.',
    'services.s4.title': 'Estrategia de Contenido',
    'services.s4.desc':  'Contenido biling&uuml;e que lleva a clientes. Posts, campa&ntilde;as y presencia digital gestionada con una estrategia de audiencia clara &mdash; sin adivinar.',

    'data.label':  '// 03 &mdash; La Ventaja de los Datos',
    'data.title':  'Los n&uacute;meros no mienten.<br/>Pero necesitan contexto.',
    'data.body':   'La mayor&iacute;a de los negocios tienen datos que no usan. Los convierto en claridad &mdash; para que las decisiones se tomen con evidencia, no suposiciones.',
    'data.chart1': '// Puntuaci&oacute;n de claridad &mdash; antes vs. despu&eacute;s',
    'data.chart2': '// Tendencia de ingresos &mdash; trayectoria t&iacute;pica del cliente',
    'data.bar1':   'Antes',
    'data.bar2':   'Despu&eacute;s',
    'data.bar3':   'Promedio mercado',

    'process.label':    '// 04 &mdash; C&oacute;mo trabajo',
    'process.title':    'De la pregunta<br/>a la claridad.',
    'process.s1.title': 'Escuchar',
    'process.s1.body':  'Comienzo entendiendo tu negocio, tus metas y qu&eacute; es lo que realmente est&aacute; confuso o roto en este momento.',
    'process.s2.title': 'Analizar',
    'process.s2.body':  'Me adentro en tus datos, tu mercado y tu stack tecnol&oacute;gico. Encuentro patrones y problemas que la mayor&iacute;a pasa por alto.',
    'process.s3.title': 'Construir',
    'process.s3.body':  'Ya sea un dashboard, un sitio web o un plan de contenido &mdash; entrego soluciones reales que funcionan. Sin relleno.',
    'process.s4.title': 'Explicar',
    'process.s4.body':  'Me aseguro de que entiendas todo. El conocimiento es tuyo &mdash; no queda bloqueado en una caja negra.',

    'banner.title': '&iquest;Listo para entender tu negocio con datos?',
    'banner.body':  'Ya sea que tengas una startup, un negocio en crecimiento, o simplemente est&eacute;s cansado de adivinar &mdash; puedo llevarte de la confusi&oacute;n a la claridad.',
    'banner.cta':   'Conversemos &rarr;',

    'contact.label':      '// 05 &mdash; Contacto',
    'contact.title':      'Trabajemos<br/>juntos.',
    'contact.sub':        'Estoy abierto a proyectos freelance, consultor&iacute;a y asociaciones a largo plazo. Escrí­beme como te sea m&aacute;s natural.',
    'contact.loc.label':  'Ubicaci&oacute;n',
    'contact.soc.label':  'Redes sociales',
    'contact.lang.label': 'Idiomas',

    'form.name':        'Tu nombre',
    'form.service':     'Servicio de inter&eacute;s',
    'form.select':      'Selecciona uno...',
    'form.opt1':        'Datos y Estad&iacute;stica',
    'form.opt2':        'Desarrollo Web',
    'form.opt3':        'Investigaci&oacute;n de Mercado',
    'form.opt4':        'Estrategia de Contenido',
    'form.opt5':        'Otro',
    'form.message':     'Mensaje',
    'form.placeholder': 'Cu&eacute;ntame sobre tu proyecto...',
    'form.submit':      'Enviar mensaje &rarr;',

    'footer.copy': '&copy; 2026 Gilberto Espinoza. Reserved rights.',

    ticker: ['An&aacute;lisis de Datos', 'Desarrollo Web', 'Investigaci&oacute;n de Mercado', 'Estrategia de Contenido', 'Claridad Tecnol&oacute;gica', 'Estad&iacute;stica'],
  },
};


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

// Load saved preference, fall back to 'light'
applyTheme(localStorage.getItem(THEME_KEY) || 'light');

document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.hasAttribute('data-theme');
  applyTheme(isDark ? 'light' : 'dark');
});


/* ════════════════════════════════════
   LANGUAGE ENGINE
════════════════════════════════════ */
let currentLang = localStorage.getItem('gilbertoesp_lang') || 'en';

function applyLang(lang) {
  const t = TRANSLATIONS[lang];

  // 1 — swap all [data-i18n] innerHTML
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // 2 — swap textarea / input placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // 3 — rebuild ticker
  const sep   = '<span class="ticker-sep">&#9670;</span>';
  const words = [...t.ticker, ...t.ticker]; // duplicate for seamless loop
  document.getElementById('ticker-inner').innerHTML =
    words.map(w => `<span>${w}</span>`).join(sep);

  // 4 — update <html lang> for accessibility & SEO
  document.documentElement.lang = lang;

  // 5 — show the flag of the OTHER language (the one you'd switch TO)
  document.getElementById('flag-to-es').style.display = lang === 'en' ? 'inline' : 'none';
  document.getElementById('flag-to-en').style.display = lang === 'es' ? 'inline' : 'none';

  // 6 — persist preference
  localStorage.setItem('gilbertoesp_lang', lang);
  currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

// Run on first load
applyLang(currentLang);


/* ════════════════════════════════════
   HAMBURGER MENU
════════════════════════════════════ */
const hamburger = document.querySelector('.nav-toggle');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

function closeNav() {
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
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ════════════════════════════════════
   CONTACT FORM
════════════════════════════════════ */
document.getElementById('submit-btn').addEventListener('click', () => {
  alert(currentLang === 'en'
    ? "Thanks! I'll be in touch soon."
    : '¡Gracias! Estaré en contacto pronto.');
});