/**
 * Minimal robots.txt parser (RFC 9309 subset): user-agent groups, Allow/Disallow
 * with longest-match precedence, `*` and `$` wildcards, Crawl-delay.
 */
export interface RobotsGroup {
  agents: string[];
  allow: string[];
  disallow: string[];
  crawlDelay?: number;
}

export interface RobotsRules {
  groups: RobotsGroup[];
}

export function parseRobots(text: string): RobotsRules {
  const groups: RobotsGroup[] = [];
  let current: RobotsGroup | null = null;
  let lastWasAgent = false;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, '').trim();
    if (!line) continue;
    const m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === 'user-agent') {
      if (!current || !lastWasAgent) {
        current = { agents: [], allow: [], disallow: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue;
    if (key === 'allow') current.allow.push(value);
    else if (key === 'disallow') current.disallow.push(value);
    else if (key === 'crawl-delay') {
      const n = Number(value);
      if (Number.isFinite(n)) current.crawlDelay = n;
    }
  }
  return { groups };
}

function patternToRegex(pattern: string): RegExp {
  let re = '';
  for (const ch of pattern) {
    if (ch === '*') re += '.*';
    else if (ch === '$') re += '$';
    else re += ch.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  }
  return new RegExp('^' + re);
}

export function selectGroup(rules: RobotsRules, userAgent: string): RobotsGroup | undefined {
  const ua = userAgent.toLowerCase();
  let best: RobotsGroup | undefined;
  let bestLen = -1;
  for (const g of rules.groups) {
    for (const a of g.agents) {
      if (a === '*') {
        if (bestLen < 0) best = g;
      } else if (ua.includes(a) && a.length > bestLen) {
        best = g;
        bestLen = a.length;
      }
    }
  }
  return best;
}

/** True when the path may be fetched by the given user-agent token. */
export function isAllowed(rules: RobotsRules, userAgent: string, path: string): boolean {
  const g = selectGroup(rules, userAgent);
  if (!g) return true;
  let verdict = true;
  let matchLen = -1;
  for (const p of g.disallow) {
    if (!p) continue;
    if (patternToRegex(p).test(path) && p.length > matchLen) { verdict = false; matchLen = p.length; }
  }
  for (const p of g.allow) {
    if (!p) continue;
    if (patternToRegex(p).test(path) && p.length >= matchLen) { verdict = true; matchLen = p.length; }
  }
  return verdict;
}

export function crawlDelayFor(rules: RobotsRules, userAgent: string): number | undefined {
  return selectGroup(rules, userAgent)?.crawlDelay;
}
