/**
 * HathiTrust Bibliographic API (public, no key). Reports whether each copy is
 * "Full view" (public domain — readable/downloadable in the browser) or
 * "Limited (search-only)". We never fetch page images; for full-view volumes we
 * hand back the babel URL, for search-only volumes a full-text search URL.
 */
import { http } from '../util/http.js';

export interface HtItem { htid: string; rightsCode: string; usRightsString: string; itemURL: string; orig?: string }

interface BriefResponse {
  items: HtItem[];
  records: Record<string, { titles?: string[]; publishDates?: string[]; recordURL?: string }>;
}

async function brief(kind: 'oclc' | 'recordnumber', value: string): Promise<BriefResponse | undefined> {
  const res = await http().get(`https://catalog.hathitrust.org/api/volumes/brief/${kind}/${encodeURIComponent(value)}.json`, { accept: 'application/json' });
  if (res.status !== 200) return undefined;
  return res.json<BriefResponse>();
}

export async function byOclc(oclc: string) { return brief('oclc', oclc); }
export async function byRecord(record: string) { return brief('recordnumber', record); }

export function describe(r: BriefResponse | undefined): string[] {
  if (!r) return ['(no record)'];
  const lines: string[] = [];
  for (const [id, rec] of Object.entries(r.records)) lines.push(`record ${id}: ${(rec.titles ?? []).join(' / ')} ${(rec.publishDates ?? []).join(',')}`);
  for (const it of r.items) lines.push(`  ${it.htid}: ${it.usRightsString} (${it.rightsCode}) ${it.itemURL}`);
  return lines;
}

/** URL of HathiTrust full-text search restricted to a given volume (works for search-only items). */
export function fullTextSearchUrl(term: string, htid?: string): string {
  const q = encodeURIComponent(term);
  return htid
    ? `https://babel.hathitrust.org/cgi/pt/search?q1=${q};id=${encodeURIComponent(htid)}`
    : `https://babel.hathitrust.org/cgi/ls?q1=${q};anyall1=phrase;lmt=all`;
}
