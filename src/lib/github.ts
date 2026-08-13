import { githubUser, githubExclude, projectsFallback } from "./constants";
import type { Project } from "./constants";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  language: string | null;
  topics: string[];
}

export async function getLatestProjects(): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=100`,
      { headers: { Accept: "application/vnd.github+json", "User-Agent": "gilbertoesp-site" } },
    );
    if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);

    const repos: GitHubRepo[] = await res.json();
    const projects = repos
      .filter((r) => !r.fork && !githubExclude.includes(r.name) && r.description)
      .slice(0, 5)
      .map((r) => ({
        name: r.name,
        description: r.description as string,
        tags: [...r.topics, r.language].filter((t): t is string => Boolean(t)).slice(0, 4),
        link: r.html_url,
      }));

    return projects.length ? projects : projectsFallback;
  } catch (err) {
    console.error("[github] fetch failed, using fallback projects:", err);
    return projectsFallback;
  }
}
