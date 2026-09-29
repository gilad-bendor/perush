/**
 * Webonary (SIL) "Soqotri Dictionary" — https://www.webonary.org/soqotra/en/
 * WordPress site; entries at /soqotra/en/g<uuid>/ ; letter index under /browse/.
 * The FLEx-exported XHTML uses stable class names (mainheadword, definitionorgloss,
 * partofspeech, senses …) which we pull out loosely; raw HTML is kept.
 * Check the dictionary's Copyright page and Webonary's Terms of Service first;
 * run only with --accept-terms.
 */
import { decodeEntities, extractLinks, htmlToText } from '../util/html.js';
import { http } from '../util/http.js';
import { saveFile, safeName } from '../util/manifest.js';

const ROOT = 'https://www.webonary.org/soqotra/en/';

export interface WebonaryEntry {
  url: string;
  headword?: string;
  partOfSpeech?: string[];
  glosses: string[];
  text: string;
}

export function isEntryUrl(href: string): boolean {
  return /webonary\.org\/soqotra\/en\/g[0-9a-f-]{20,}\/?$/i.test(href);
}

function classTexts(html: string, cls: string): string[] {
  const re = new RegExp(`<span[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>([\\s\\S]*?)<\\/span>`, 'gi');
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const t = decodeEntities(htmlToText(m[1])).trim();
    if (t) out.push(t);
  }
  return out;
}

export function parseEntry(url: string, html: string): WebonaryEntry {
  return {
    url,
    headword: classTexts(html, 'mainheadword')[0] ?? classTexts(html, 'headword')[0],
    partOfSpeech: classTexts(html, 'partofspeech'),
    glosses: [...classTexts(html, 'definitionorgloss'), ...classTexts(html, 'gloss'), ...classTexts(html, 'definition')],
    text: htmlToText(html),
  };
}

/** Collect entry URLs from the browse pages (letter index + pagination). */
export async function collectEntryUrls(sourceId: string): Promise<string[]> {
  const start = ROOT + 'browse/';
  const queue = [start];
  const seen = new Set<string>();
  const entries = new Set<string>();
  while (queue.length) {
    const url = queue.shift()!;
    if (seen.has(url)) continue;
    seen.add(url);
    const res = await http().get(url);
    if (res.status !== 200) { console.warn(`[webonary] ${url} -> ${res.status}`); continue; }
    const html = res.text();
    await saveFile(sourceId, `webonary/browse/${safeName(url.replace(ROOT, ''))}.html`, html, { url });
    for (const l of extractLinks(html, url)) {
      if (isEntryUrl(l.href)) entries.add(l.href);
      else if (l.href.startsWith(start) && /[?&](letter|key|pagenr|paged)=|\/page\/\d+/.test(l.href) && !seen.has(l.href)) queue.push(l.href);
    }
  }
  return [...entries];
}

export async function crawl(sourceId: string, opts: { maxEntries?: number } = {}): Promise<number> {
  const urls = await collectEntryUrls(sourceId);
  console.log(`[webonary] ${urls.length} entry URLs discovered`);
  const entries: WebonaryEntry[] = [];
  for (const url of urls.slice(0, opts.maxEntries ?? Infinity)) {
    const res = await http().get(url);
    if (res.status !== 200) continue;
    const html = res.text();
    await saveFile(sourceId, `webonary/entries/${safeName(url.replace(ROOT, ''))}.html`, html, { url });
    entries.push(parseEntry(url, html));
  }
  await saveFile(sourceId, 'webonary/entries.json', JSON.stringify(entries, null, 2), { url: ROOT, licence: 'see /soqotra/overview/copyright/' });
  return entries.length;
}
