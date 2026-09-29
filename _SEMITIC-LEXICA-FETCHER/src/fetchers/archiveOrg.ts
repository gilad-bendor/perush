/**
 * Internet Archive: search API, metadata API, file download.
 *
 * Rule: an item whose metadata says `access-restricted-item: true` (or that sits
 * in the `inlibrary` / `printdisabled` lending collections) is reported as
 * browse-only and never downloaded. Everything else with a text/PDF derivative
 * is downloaded (public-domain scans, open-access mirrors, Rosetta excerpts).
 */
import { http } from '../util/http.js';
import { saveFile } from '../util/manifest.js';

const BASE = 'https://archive.org';

export interface IaSearchHit {
  identifier: string;
  title?: string;
  creator?: string | string[];
  year?: string;
  collection?: string | string[];
  mediatype?: string;
}

export interface IaMetadata {
  metadata: Record<string, string | string[] | undefined>;
  files: Array<{ name: string; format?: string; size?: string }>;
}

export type IaAccess = 'downloadable' | 'borrow-only' | 'metadata-only' | 'missing';

export async function searchItems(query: string, rows = 50): Promise<IaSearchHit[]> {
  const url = `${BASE}/advancedsearch.php?q=${encodeURIComponent(query + ' AND mediatype:texts')}` +
    '&fl[]=identifier&fl[]=title&fl[]=creator&fl[]=year&fl[]=collection&fl[]=mediatype' +
    `&rows=${rows}&output=json`;
  const res = await http().get(url, { accept: 'application/json' });
  if (res.status !== 200) throw new Error(`archive.org search ${res.status}`);
  return res.json<{ response: { docs: IaSearchHit[] } }>().response.docs;
}

export async function getMetadata(identifier: string): Promise<IaMetadata | undefined> {
  const res = await http().get(`${BASE}/metadata/${encodeURIComponent(identifier)}`, { accept: 'application/json' });
  if (res.status !== 200) return undefined;
  const j = res.json<Partial<IaMetadata>>();
  if (!j.metadata) return undefined;
  return { metadata: j.metadata, files: j.files ?? [] };
}

const TEXT_FORMATS = ['DjVuTXT', 'Text PDF', 'Additional Text PDF', 'Djvu XML', 'Abbyy GZ', 'hOCR', 'Text'];

export function classify(meta: IaMetadata | undefined): IaAccess {
  if (!meta) return 'missing';
  const m = meta.metadata;
  const asList = (v: string | string[] | undefined) => (Array.isArray(v) ? v : v ? [v] : []);
  const restricted = String(m['access-restricted-item'] ?? '').toLowerCase() === 'true';
  const lending = asList(m.collection).some((c) => /^(inlibrary|printdisabled|internetarchivebooks)$/i.test(c)) && restricted;
  if (restricted || lending) return 'borrow-only';
  const hasText = meta.files.some((f) => TEXT_FORMATS.includes(f.format ?? '') || /\.(pdf|txt)$/i.test(f.name));
  return hasText ? 'downloadable' : 'metadata-only';
}

/** Download the plain-text (djvu.txt) and PDF derivatives of an open item. */
export async function downloadItem(sourceId: string, identifier: string, opts: { pdf?: boolean; text?: boolean } = {}): Promise<string[]> {
  const meta = await getMetadata(identifier);
  const access = classify(meta);
  if (access !== 'downloadable' || !meta) {
    console.warn(`[archive.org] ${identifier}: ${access} — skipped`);
    return [];
  }
  const wanted = meta.files.filter((f) => {
    if (opts.text !== false && (f.format === 'DjVuTXT' || /_djvu\.txt$/.test(f.name))) return true;
    if (opts.pdf !== false && (f.format === 'Text PDF' || (/\.pdf$/i.test(f.name) && !/_bw\.pdf$/i.test(f.name)))) return true;
    return false;
  });
  const saved: string[] = [];
  for (const f of wanted) {
    const url = `${BASE}/download/${encodeURIComponent(identifier)}/${encodeURIComponent(f.name)}`;
    const res = await http().get(url);
    if (res.status !== 200) { console.warn(`[archive.org] ${url} -> ${res.status}`); continue; }
    const entry = await saveFile(sourceId, `archive.org/${identifier}/${f.name}`, res.body, {
      url,
      licence: String(meta.metadata.licenseurl ?? meta.metadata.rights ?? 'see item page'),
    });
    saved.push(entry.savedAs);
    console.log(`[archive.org] saved ${entry.savedAs} (${entry.bytes} bytes)`);
  }
  return saved;
}

export async function probe(identifier: string): Promise<{ identifier: string; access: IaAccess; title?: string; collections: string[] }> {
  const meta = await getMetadata(identifier);
  const c = meta?.metadata.collection;
  return {
    identifier,
    access: classify(meta),
    title: meta ? String(meta.metadata.title ?? '') : undefined,
    collections: Array.isArray(c) ? c : c ? [c] : [],
  };
}
