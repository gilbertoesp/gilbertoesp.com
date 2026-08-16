export interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  link: string;
}

export const tagLabels: Record<string, string> = {
  "critical-thinking": "Pensamiento crítico",
  "security": "Seguridad",
  "machine-learning": "Machine Learning",
};

export function formatDate(iso: string, locale = "es-MX"): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export const posts: Post[] = [
  {
    id: "vectores-tiktok",
    title: "Vectores y Matrices trabajando en \"For You\" en TikTok",
    date: "2026-04-23",
    tags: ["machine-learning"],
    description:
      "El álgebra lineal son los fundamentos con los que representamos la realidad, los modelos, los textos, las identidades de los usuarios. Simplificándolo a un producto punto, el algoritmo de recomendación de TikTok.",
    link: "https://www.linkedin.com/pulse/vectores-y-matrices-trabajando-en-you-tiktok-gilberto-espinoza-r49tf/?trackingId=KzR9vfupQvqV5XNbho3Hqw%3D%3D",
  },
  {
    id: "ethics-ai",
    title: "Ética en el uso de la Inteligencia Artificial",
    date: "2025-03-05",
    tags: ["machine-learning"],
    description:
      "Privacidad, transparencia y responsabilidad son fundamentales en el uso de la IA. Hablo sobre los principios de la ética en el uso de la IA. Acciones que podemos tomar para hacer que la IA sea más democrática.",
    link: "https://www.linkedin.com/pulse/%25C3%25A9tica-en-el-uso-de-la-inteligencia-artificial-espinoza-maciel/?trackingId=sxWILp1bQF%2BDXa5WVqNouQ%3D%3D",
  },
  {
    id: "data-privacy",
    title: "Protección de Datos Personales: Guía para la Seguridad en la Era Digital",
    date: "2025-02-14",
    tags: ["security"],
    description:
      "Los datos personales son responsabilidad de cada individuo, pero no hay la capacitación necesaria sobre qué implica ejercer tus derechos ARCO.",
    link: "https://www.linkedin.com/pulse/protecci%25C3%25B3n-de-datos-personales-gu%25C3%25ADa-para-la-seguridad-gilberto-vaosc/?trackingId=KzR9vfupQvqV5XNbho3Hqw%3D%3D",
  },
  {
    id: "star-method",
    title: "Domina el Método STAR: Tu Clave para el Éxito en Entrevistas Laborales",
    date: "2023-09-18",
    tags: ["critical-thinking"],
    description:
      "Tener una narrativa clara con la cual puedes hablar de las situaciones de mi desarrollo que me han dejado aprendizajes clave. Esta habilidad es práctica para comunicar de forma asertiva el impacto de mi trabajo.",
    link: "https://www.linkedin.com/pulse/domina-el-m%25C3%25A9todo-star-tu-clave-para-%25C3%25A9xito-en-gilberto-espinoza-maciel/?trackingId=KzR9vfupQvqV5XNbho3Hqw%3D%3D",
  },
  {
    id: "open-source-ai",
    title: "GPTs: Ética, Código Abierto y el Futuro de la Inteligencia Artificial",
    date: "2023-09-16",
    tags: ["machine-learning"],
    description:
      "El código abierto es una herramienta poderosa para el desarrollo de la IA. Hablo sobre los principios del código abierto y cómo podemos usarlos para protegernos de actores malintencionados, asegurando que la IA sea un bien público.",
    link: "https://www.linkedin.com/pulse/transformers-generativos-preentrenados-%25C3%25A9tica-c%25C3%25B3digo-y-gilberto/?trackingId=sMpHIPTLRwOnVcupTaT2DA%3D%3D",
  },
  {
    id: "prompt-engineering",
    title: "Impulsando la Inteligencia Artificial: Un Vistazo al Prompt Engineering",
    date: "2023-09-13",
    tags: ["machine-learning"],
    description:
      "La organización, estructura y contexto de los prompts son fundamentales para el éxito de la IA. Hablo sobre los principios del prompt engineering y cómo podemos usarlos para mejorar el rendimiento de nuestros modelos.",
    link: "https://www.linkedin.com/pulse/impulsando-la-inteligencia-artificial-un-vistazo-al-espinoza-maciel/?trackingId=sMpHIPTLRwOnVcupTaT2DA%3D%3D",
  },
  {
    id: "importance-math",
    title: "La importancia de las matemáticas en Inteligencia Artificial",
    date: "2023-09-10",
    tags: ["machine-learning"],
    description:
      "Las matemáticas son la base de la IA. Sin ellas, no podemos tener los servicios de los que hoy nos aprovechamos. Hablo sobre los 4 pilares de las matemáticas que son fundamentales para entender la IA. Álgebra lineal, cálculo, probabilidad y estadística.",
    link: "https://www.linkedin.com/pulse/la-importancia-de-las-matem%25C3%25A1ticas-en-inteligencia-espinoza-maciel/?trackingId=sxWILp1bQF%2BDXa5WVqNouQ%3D%3D",
  },
  {
    id: "hugging-face",
    title: "Hugging Face. transformando la IA",
    date: "2023-09-08",
    tags: ["machine-learning"],
    description:
      "¿Conoces Hugging Face? Es una plataforma de IA que te permite entrenar modelos de machine learning de forma sencilla y eficiente. Te comparto mi experiencia explorando su plataforma y los proyectos que han realizado.",
    link: "https://www.linkedin.com/pulse/hugging-face-transformando-la-ia-gilberto-espinoza-maciel/?trackingId=aM8vNK0VQJ%2BkkZYcxhcx8g%3D%3D",
  },
  {
    id: "functional-security",
    title: "Importancia de la seguridad funcional",
    date: "2023-09-07",
    tags: ["security"],
    description:
      "La seguridad funcional es una práctica esencial para proteger nuestras aplicaciones y sistemas. Es la base de la seguridad de la información y la privacidad de los usuarios y clientes.",
    link: "https://www.linkedin.com/pulse/importancia-de-la-seguridad-funcional-gilberto-espinoza-maciel/?trackingId=aM8vNK0VQJ%2BkkZYcxhcx8g%3D%3D",
  },
  {
    id: "how-to-think",
    title: "¿Cómo cultivamos la sabiduría en un mundo donde el conocimiento está al alcance de todos?",
    date: "2023-08-14",
    tags: ["critical-thinking"],
    description:
      "En tiempos donde la inferencia completa las tareas por nosotros, desarrollar el pensamiento crítico es esencial para tomar decisiones informadas y eficientes.",
    link: "https://www.linkedin.com/pulse/c%C3%B3mo-cultivamos-la-sabidur%C3%ADa-en-un-mundo-donde-el-al-espinoza-maciel/?trackingId=x4O%2F1ARiQUCp4xjbmCrypg%3D%3D",
  },
];
