/**
 * Soqotri Lexicon Online — http://soqotri-lexicon.ru
 * Small academic site (≈220 public entries). We discover the listing pages
 * (Words / Roots / References), follow pagination, and archive every entry
 * page as raw HTML + extracted text + a minimal JSON (headword, body).
 * Site structure was not visible from the sandbox: the crawler is
 * discovery-based and reports what it found. Run only with --accept-terms.
 */
import { extractLinks, firstMatch, htmlToText } from '../util/html.js';
import { http } from '../util/http.js';
import { saveFile, safeName } from '../util/manifest.js';

const HOST = 'http://soqotri-lexicon.ru';

export interface SlEntry { url: string; headword?: string; text: string }

export function isListing(href: string): boolean {
  return /soqotri-lexicon\.ru\/(words|roots|sources|references|entries|lexemes)(\/|\?|$)/i.test(href);
}
export function isEntry(href: string): boolean {
  return /soqotri-lexicon\.ru\/(words|roots|entries|lexemes)\/[^/?#]+/i.test(href) && !/[?&]page=/.test(href);
}

export async function discover(): Promise<{ listings: string[]; sample: string[] }> {
  const res = await http().get(HOST + '/');
  if (res.status !== 200) throw new Error(`slonline ${res.status}`);
  const links = extractLinks(res.text(), HOST + '/');
  const listings = [...new Set(links.map((l) => l.href).filter(isListing))];
  return { listings, sample: links.slice(0, 40).map((l) => `${l.text} -> ${l.href}`) };
}

export async function crawl(sourceId: string, opts: { maxEntries?: number } = {}): Promise<number> {
  const { listings } = await discover();
  const queue = [...listings];
  const seenListing = new Set<string>();
  const entryUrls = new Set<string>();
  while (queue.length) {
    const url = queue.shift()!;
    if (seenListing.has(url)) continue;
    seenListing.add(url);
    const res = await http().get(url);
    if (res.status !== 200) continue;
    const html = res.text();
    await saveFile(sourceId, `slonline/listings/${safeName(url.replace(HOST, ''))}.html`, html, { url });
    for (const l of extractLinks(html, url)) {
      if (isEntry(l.href)) entryUrls.add(l.href.split('#')[0]);
      else if (/[?&]page=\d+/.test(l.href) && l.href.startsWith(HOST) && !seenListing.has(l.href)) queue.push(l.href);
    }
  }
  const entries: SlEntry[] = [];
  for (const url of [...entryUrls].slice(0, opts.maxEntries ?? Infinity)) {
    const res = await http().get(url);
    if (res.status !== 200) continue;
    const html = res.text();
    await saveFile(sourceId, `slonline/entries/${safeName(url.replace(HOST, ''))}.html`, html, { url });
    entries.push({ url, headword: firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i), text: htmlToText(html) });
  }
  await saveFile(sourceId, 'slonline/entries.json', JSON.stringify(entries, null, 2), { url: HOST, note: 'headword = first <h1>; refine after inspecting raw HTML' });
  console.log(`[slonline] ${entries.length} entries from ${seenListing.size} listing pages`);
  return entries.length;
}
