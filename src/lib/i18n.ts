export type Locale = "en" | "es" | "zh" | "pt" | "fr";

export interface LocaleConfig {
  code: Locale;
  name: string;
  lang: string;
  prefix: string;
  implemented: boolean;
}

export const locales: LocaleConfig[] = [
  { code: "en", name: "English", lang: "en-US", prefix: "", implemented: true },
  { code: "es", name: "Español", lang: "es-MX", prefix: "/es", implemented: true },
  { code: "zh", name: "中文", lang: "zh-CN", prefix: "/zh", implemented: false },
  { code: "pt", name: "Português", lang: "pt-BR", prefix: "/pt", implemented: false },
  { code: "fr", name: "Français", lang: "fr-FR", prefix: "/fr", implemented: false },
];

export const implementedLocales = locales.filter((l) => l.implemented);

export function localizedHref(locale: Locale, basePath: string): string {
  return locale === "en" ? basePath : `/${locale}${basePath}`;
}

export interface Translation {
  meta: {
    indexTitle: string;
    indexDescription: string;
    blogTitle: string;
    blogDescription: string;
    materialTitle: string;
    materialDescription: string;
  };
  nav: {
    blog: string;
    material: string;
    contact: string;
    menuLabel: string;
    languageLabel: string;
  };
  hero: {
    title: string;
    tagline: string;
    whatsapp: string;
  };
  sections: {
    projectsLabel: string;
    projectsTitle: string;
    stackLabel: string;
    stackTitle: string;
    eventsLabel: string;
    eventsTitle: string;
    aboutLabel: string;
    aboutTitle: string;
  };
  tools: Record<string, string>;
  events: {
    empty: string;
    collab: string;
  };
  about: {
    mission: string;
    body: string;
    currently: string;
    location: string;
    languages: string;
    currentlyValue: string;
    locationValue: string;
    languagesValue: string;
  };
  footer: {
    title: string;
    builtWith: string;
  };
  blog: {
    label: string;
    title: string;
    sub: string;
    newest: string;
    oldest: string;
    tagLabels: Record<string, string>;
  };
  material: {
    label: string;
    title: string;
    sub: string;
    visit: string;
    groups: { papers: string; books: string; other: string };
  };
}

const en: Translation = {
  meta: {
    indexTitle: "Gilberto Esp | AI Consultant & Builder",
    indexDescription:
      "Helping Spanish-speaking developers navigate AI. Building real solutions.",
    blogTitle: "Blog — Gilberto Esp",
    blogDescription: "Writing and ideas from Gilberto Esp on data, AI, and technology.",
    materialTitle: "Material — Gilberto Esp",
    materialDescription:
      "A curated library of papers, books, and other sources Gilberto Esp finds genuinely useful.",
  },
  nav: {
    blog: "Blog",
    material: "Material",
    contact: "Contact",
    menuLabel: "Toggle menu",
    languageLabel: "Change language",
  },
  hero: {
    title: "AI Consultant & Builder",
    tagline: "Building AI solutions for Spanish-speaking developers.",
    whatsapp: "WhatsApp for collabs",
  },
  sections: {
    projectsLabel: "01 — Projects",
    projectsTitle: "Latest projects.",
    stackLabel: "02 — Stack",
    stackTitle: "Current stack.",
    eventsLabel: "03 — Events",
    eventsTitle: "Events & speaking.",
    aboutLabel: "04 — About",
    aboutTitle: "About.",
  },
  tools: {
    Languages: "Languages",
    Backend: "Backend",
    Databases: "Databases",
    Infrastructure: "Infrastructure",
    "ML Tools": "ML Tools",
  },
  events: {
    empty: "Open to conferences, workshops, and community talks. Coming events will appear here.",
    collab: "For collaboration inquiries →",
  },
  about: {
    mission: "AI Without Overwhelm.",
    body: "I help Spanish-speaking developers navigate AI and machine learning without the hype. Ten years building in public. No formal degree. Real projects, real learning.",
    currently: "Currently:",
    location: "Location:",
    languages: "Languages:",
    currentlyValue: "AI Consultant & Developer",
    locationValue: "Sonora, México",
    languagesValue: "Español & English",
  },
  footer: {
    title: "Let's build together",
    builtWith: "Built with TypeScript & deployed on Vercel",
  },
  blog: {
    label: "Blog",
    title: "Writing & ideas.",
    sub: "Notes on data, technology, and building things that matter.",
    newest: "Newest first",
    oldest: "Oldest first",
    tagLabels: {
      "critical-thinking": "Critical thinking",
      security: "Security",
      "machine-learning": "Machine Learning",
    },
  },
  material: {
    label: "Material",
    title: "A curated library.",
    sub: "Papers, books, and other sources I find genuinely useful — curated, not algorithmic.",
    visit: "Visit ↗",
    groups: { papers: "Papers", books: "Books", other: "Other sources" },
  },
};

const es: Translation = {
  meta: {
    indexTitle: "Gilberto Esp | Consultor y Creador de IA",
    indexDescription:
      "Ayudando a desarrolladores hispanohablantes a navegar la IA. Construyendo soluciones reales.",
    blogTitle: "Blog — Gilberto Esp",
    blogDescription: "Escritura e ideas de Gilberto Esp sobre datos, IA y tecnología.",
    materialTitle: "Material — Gilberto Esp",
    materialDescription:
      "Una biblioteca curada de papers, libros y otras fuentes que Gilberto Esp encuentra genuinamente útiles.",
  },
  nav: {
    blog: "Blog",
    material: "Material",
    contact: "Contacto",
    menuLabel: "Alternar menú",
    languageLabel: "Cambiar idioma",
  },
  hero: {
    title: "Consultor y Creador de IA",
    tagline: "Construyendo soluciones de IA para desarrolladores hispanohablantes.",
    whatsapp: "WhatsApp para colaboraciones",
  },
  sections: {
    projectsLabel: "01 — Proyectos",
    projectsTitle: "Proyectos recientes.",
    stackLabel: "02 — Stack",
    stackTitle: "Stack actual.",
    eventsLabel: "03 — Eventos",
    eventsTitle: "Eventos y charlas.",
    aboutLabel: "04 — Sobre mí",
    aboutTitle: "Sobre mí.",
  },
  tools: {
    Languages: "Lenguajes",
    Backend: "Backend",
    Databases: "Bases de datos",
    Infrastructure: "Infraestructura",
    "ML Tools": "Herramientas ML",
  },
  events: {
    empty: "Abierto a conferencias, talleres y charlas comunitarias. Los próximos eventos aparecerán aquí.",
    collab: "Para colaboraciones →",
  },
  about: {
    mission: "IA sin agobio.",
    body: "Ayudo a desarrolladores hispanohablantes a navegar la IA y el machine learning sin el hype. Diez años construyendo en público. Sin título formal. Proyectos reales, aprendizaje real.",
    currently: "Actualmente:",
    location: "Ubicación:",
    languages: "Idiomas:",
    currentlyValue: "Consultor y Desarrollador de IA",
    locationValue: "Sonora, México",
    languagesValue: "Español e inglés",
  },
  footer: {
    title: "Construyamos juntos",
    builtWith: "Hecho con TypeScript y desplegado en Vercel",
  },
  blog: {
    label: "Blog",
    title: "Escritura & ideas.",
    sub: "Notas sobre datos, tecnología y construir cosas que tengan sentido.",
    newest: "Más recientes primero",
    oldest: "Más antiguos primero",
    tagLabels: {
      "critical-thinking": "Pensamiento crítico",
      security: "Seguridad",
      "machine-learning": "Machine Learning",
    },
  },
  material: {
    label: "Material",
    title: "Una biblioteca curada.",
    sub: "Papers, libros y otras fuentes que encuentro genuinamente útiles — curada, no algorítmica.",
    visit: "Visitar ↗",
    groups: { papers: "Papers", books: "Libros", other: "Otras fuentes" },
  },
};

export const translations: Record<Locale, Translation> = { en, es, zh: en, pt: en, fr: en };
