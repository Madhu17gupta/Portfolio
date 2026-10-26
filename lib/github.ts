export type Contribution = { date: string; level: number };

/** GitHub's public contributions fragment. No token or third-party graph service needed. */
export async function getGitHubContributions(username: string): Promise<Contribution[]> {
  try {
    const response = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: { "User-Agent": "MadhuPortfolio/1.0" },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return [];
    const html = await response.text();
    const cells = [...html.matchAll(/<td\b[^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*\bdata-level="([0-4])"[^>]*>/g)];
    return cells.map((cell) => ({ date: cell[1], level: Number(cell[2]) }));
  } catch {
    return [];
  }
}
