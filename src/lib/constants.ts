export const socials = {
  whatsapp: "https://wa.me/526371308180?text=Hi%20Gilberto%2C%20let%27s%20build%20something.",
  linkedin: "https://linkedin.com/in/gilbertoesp",
  github: "https://github.com/gilbertoesp",
  instagram: "https://instagram.com/gilbertoesp.dev",
};

export const githubUser = "gilbertoesp";
export const githubExclude = ["gilbertoesp.com"];

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

export const projectsFallback: Project[] = [
  {
    name: "Sales Performance Dashboard",
    description: "Automated monthly sales reporting for a retail SME — cleaned raw POS data, segmented by category, produced an executive-ready PDF with trend charts.",
    tags: ["Python", "Pandas", "Matplotlib"],
    link: "https://github.com/gilbertoesp",
  },
  {
    name: "Churn Prediction Model",
    description: "Logistic regression model to identify at-risk subscribers from behavioral data, surfacing early warning signals to reduce churn.",
    tags: ["Python", "Scikit-learn", "Jupyter"],
    link: "https://github.com/gilbertoesp",
  },
  {
    name: "Consumer Sentiment Study",
    description: "Designed and executed a 200-respondent survey for a food brand entering a new regional market, with an actionable positioning report.",
    tags: ["Survey Design", "R", "SPSS"],
    link: "https://github.com/gilbertoesp",
  },
  {
    name: "Bilingual Content Program",
    description: "Six-month content calendar for a SaaS startup targeting US and LATAM markets — audience segmentation, topic research, and tracking baked in.",
    tags: ["Content Strategy", "SEO", "Analytics"],
    link: "https://github.com/gilbertoesp",
  },
];

export const tools: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "Python", "Bash"] },
  { label: "Backend", items: ["Bun", "Hono", "FastAPI"] },
  { label: "Databases", items: ["Supabase", "PostgreSQL", "Chroma"] },
  { label: "Infrastructure", items: ["Docker", "Vercel", "AWS"] },
  { label: "ML Tools", items: ["LangChain", "LangGraph", "OpenRouter"] },
];

export interface Event {
  name: string;
  date: string;
  location: string;
  link: string;
}

export const events: Event[] = [];
