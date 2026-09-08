import { useEffect, useState } from "react";
import { social } from "../data/social";

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GithubUser {
  public_repos: number;
  followers: number;
  html_url: string;
}

interface GithubStatsState {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: boolean;
}

// Uses GitHub's public, unauthenticated REST API — no token required and
// none should ever be added here, since this runs entirely in the browser.
export function useGithubStats(): GithubStatsState {
  const [state, setState] = useState<GithubStatsState>({
    user: null,
    repos: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${social.githubHandle}`),
          fetch(
            `https://api.github.com/users/${social.githubHandle}/repos?sort=updated&per_page=6`,
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const user = (await userRes.json()) as GithubUser;
        const repos = (await reposRes.json()) as GithubRepo[];

        if (!cancelled) {
          setState({ user, repos: Array.isArray(repos) ? repos : [], loading: false, error: false });
        }
      } catch {
        if (!cancelled) {
          setState({ user: null, repos: [], loading: false, error: true });
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
