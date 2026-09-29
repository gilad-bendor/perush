/**
 * StarLing (Tower of Babel) "Semitic etymology" database, starlingdb.org.
 *
 * Strategy:
 *  1. Look at the downloads page for a ready-made DBF/ZIP of the Semitic
 *     database — one file beats a crawl.
 *  2. Otherwise page through the query CGI (`first=` offset) slowly and turn
 *     each record into {field: value} JSON. StarLing renders a record as a
 *     sequence of "Field name: value" lines; the parser below is tolerant to
 *     the exact markup, and raw HTML is kept next to the JSON for re-parsing.
 *
 * The site has no explicit licence: run only with --accept-terms and cite it.
 */
import { extractLinks, htmlToText } from '../util/html.js';
import { http } from '../util/http.js';
import { saveFile } from '../util/manifest.js';

const HOST = 'https://starlingdb.org';
export const SEMITIC_BASENAME = '/data/semham/semet';

export type StarlingRecord = Record<string, string>;

/** Field labels StarLing uses in the Semitic DB (order matters for splitting records). */
const RECORD_START = /^(Proto-Semitic|Number|Semitic)\s*:/i;

/** Parse the plain-text rendering of a StarLing result page into records. */
export function parseRecords(html: string): StarlingRecord[] {
  const text = htmlToText(html);
  const records: StarlingRecord[] = [];
  let cur: StarlingRecord | null = null;
  let lastKey: string | null = null;
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line || line === '----') { lastKey = null; continue; }
    const m = /^([A-Z][A-Za-z .\-\/()]{1,40}?)\s*:\s*(.*)$/.exec(line);
    if (m && (RECORD_START.test(line) || cur)) {
      if (RECORD_START.test(line) && (!cur || m[1] in cur)) { cur = {}; records.push(cur); }
      if (!cur) continue;
      cur[m[1].trim()] = m[2].trim();
      lastKey = m[1].trim();
    } else if (cur && lastKey) {
      cur[lastKey] = (cur[lastKey] + ' ' + line).trim(); // continuation line
    }
  }
  return records.filter((r) => Object.keys(r).length > 1);
}

/** Find "next page" link or compute the next offset from record count. */
export function nextOffset(html: string, current: number, pageSize: number): number | undefined {
  const links = extractLinks(html, HOST);
  const nums = links
    .map((l) => /[?&]first=(\d+)/.exec(l.href)?.[1])
    .filter((x): x is string => !!x)
    .map(Number)
    .filter((n) => n > current);
  if (nums.length) return Math.min(...nums);
  return undefined;
}

export function queryUrl(first: number, basename = SEMITIC_BASENAME): string {
  return `${HOST}/cgi-bin/response.cgi?root=config&basename=${encodeURIComponent(basename)}&first=${first}`;
}

export async function probeDownloads(): Promise<Array<{ href: string; text: string }>> {
  const res = await http().get(`${HOST}/downl.php?lan=en`);
  if (res.status !== 200) return [];
  return extractLinks(res.text(), HOST).filter((l) => /sem|afras|dbf|zip|rar/i.test(l.href + ' ' + l.text));
}

export async function crawlSemitic(sourceId: string, opts: { maxPages?: number; pageSize?: number } = {}): Promise<number> {
  const dl = await probeDownloads();
  const direct = dl.filter((l) => /semet|semham|semit/i.test(l.href + ' ' + l.text));
  for (const l of direct) {
    const res = await http().get(l.href);
    if (res.status === 200) {
      await saveFile(sourceId, `starling/download/${l.href.split('/').pop()}`, res.body, { url: l.href, note: 'StarLing database download page' });
      console.log(`[starling] downloaded ${l.href}`);
    }
  }
  let first = 1;
  let pages = 0;
  const all: StarlingRecord[] = [];
  const pageSize = opts.pageSize ?? 20;
  while (pages < (opts.maxPages ?? 10_000)) {
    const url = queryUrl(first);
    const res = await http().get(url);
    if (res.status !== 200) { console.warn(`[starling] ${url} -> ${res.status}`); break; }
    const html = res.text();
    await saveFile(sourceId, `starling/raw/page-${String(first).padStart(6, '0')}.html`, html, { url });
    const recs = parseRecords(html);
    all.push(...recs);
    pages++;
    const next = nextOffset(html, first, pageSize);
    if (recs.length === 0 || next === undefined) break;
    first = next;
  }
  await saveFile(sourceId, 'starling/semitic-records.json', JSON.stringify(all, null, 2), {
    url: queryUrl(1),
    note: 'Parsed with parseRecords(); re-parse from starling/raw/*.html if the field layout changed.',
  });
  console.log(`[starling] ${all.length} records over ${pages} pages`);
  return all.length;
}
