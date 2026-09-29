/** Tiny dependency-free HTML helpers. Good enough for link discovery and text dumps. */

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

/** Strip tags, keep block boundaries as newlines. */
export function htmlToText(html: string): string {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|li|tr|h[1-6]|table|dl|dd|dt|section|article|hr)>/gi, '\n')
      .replace(/<hr\s*\/?>/gi, '\n----\n')
      .replace(/<[^>]+>/g, ''),
  )
    .split('\n')
    .map((l) => l.replace(/[ \t]+/g, ' ').trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export interface Link { href: string; text: string }

/** All <a href> links, resolved against `base`. */
export function extractLinks(html: string, base: string): Link[] {
  const out: Link[] = [];
  const re = /<a\b[^>]*?href\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))[^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const raw = decodeEntities(m[2] ?? m[3] ?? m[4] ?? '');
    if (!raw || raw.startsWith('javascript:') || raw.startsWith('#')) continue;
    try {
      out.push({ href: new URL(raw, base).toString(), text: htmlToText(m[5]).slice(0, 200) });
    } catch { /* ignore malformed */ }
  }
  return out;
}

export function firstMatch(html: string, re: RegExp): string | undefined {
  const m = re.exec(html);
  return m ? decodeEntities(htmlToText(m[1] ?? m[0])) : undefined;
}
