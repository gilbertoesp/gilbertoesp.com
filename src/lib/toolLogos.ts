import { tools } from "./constants";

const SIMPLE_ICON_SLUGS: Record<string, string> = {
  TypeScript: "typescript",
  Python: "python",
  Bash: "gnubash",
  Bun: "bun",
  Hono: "hono",
  FastAPI: "fastapi",
  Supabase: "supabase",
  PostgreSQL: "postgresql",
  Docker: "docker",
  Vercel: "vercel",
  LangChain: "langchain",
  LangGraph: "langgraph",
  OpenRouter: "openrouter",
};

const FAVICON_URLS: Record<string, string> = {
  AWS: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
  Chroma: "https://www.google.com/s2/favicons?domain=trychroma.com&sz=128",
};

const toolNames = tools.flatMap((group) => group.items);

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function monogram(name: string): string {
  const initials = name
    .split(/\s+/)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();
  return `<span class="tool-logo-mono">${initials}</span>`;
}

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "gilbertoesp-site" } });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

async function fetchImageDataUri(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "gilbertoesp-site" } });
    if (!res.ok) return null;
    const type = res.headers.get("content-type") ?? "image/png";
    return `data:${type};base64,${bytesToBase64(new Uint8Array(await res.arrayBuffer()))}`;
  } catch {
    return null;
  }
}

export async function getToolLogos(): Promise<Record<string, string>> {
  const entries = await Promise.all(
    toolNames.map(async (name): Promise<[string, string]> => {
      const slug = SIMPLE_ICON_SLUGS[name];
      if (slug) {
        const svg = await fetchText(`https://cdn.simpleicons.org/${slug}`);
        if (svg) return [name, svg];
      }
      const faviconUrl = FAVICON_URLS[name];
      if (faviconUrl) {
        const dataUri = await fetchImageDataUri(faviconUrl);
        if (dataUri) return [name, `<img src="${dataUri}" alt="" />`];
      }
      return [name, monogram(name)];
    }),
  );
  return Object.fromEntries(entries);
}
