/**
 * DSpace 6 REST API (used by OAPEN — library.oapen.org — and by ULB
 * Sachsen-Anhalt's Share_it — opendata.uni-halle.de). Both expose
 *   GET /rest/handle/<prefix>/<id>          -> item (uuid, name)
 *   GET /rest/items/<uuid>/bitstreams       -> [{ uuid, name, mimeType, retrieveLink }]
 *   GET /rest/bitstreams/<uuid>/retrieve    -> the file
 *   GET /rest/search?query=<text>&expand=bitstreams (OAPEN)
 */
import { http } from '../util/http.js';
import { saveFile, safeName } from '../util/manifest.js';

export interface DspaceItem { uuid: string; name: string; handle: string }
export interface DspaceBitstream { uuid: string; name: string; mimeType?: string; retrieveLink?: string; sizeBytes?: number }

export async function itemByHandle(base: string, handle: string): Promise<DspaceItem | undefined> {
  const res = await http().get(`${base}/rest/handle/${handle}`, { accept: 'application/json' });
  if (res.status !== 200) return undefined;
  const j = res.json<{ uuid?: string; name?: string; handle?: string }>();
  return j.uuid ? { uuid: j.uuid, name: j.name ?? '', handle: j.handle ?? handle } : undefined;
}

export async function searchItems(base: string, query: string): Promise<DspaceItem[]> {
  const res = await http().get(`${base}/rest/search?query=${encodeURIComponent(query)}`, { accept: 'application/json' });
  if (res.status !== 200) return [];
  const j = res.json<Array<{ uuid: string; name: string; handle: string }>>();
  return Array.isArray(j) ? j : [];
}

export async function bitstreams(base: string, itemUuid: string): Promise<DspaceBitstream[]> {
  const res = await http().get(`${base}/rest/items/${itemUuid}/bitstreams`, { accept: 'application/json' });
  if (res.status !== 200) return [];
  return res.json<DspaceBitstream[]>();
}

/** Download every PDF bitstream of an item. */
export async function downloadPdfs(sourceId: string, base: string, item: DspaceItem, licence?: string): Promise<string[]> {
  const bs = await bitstreams(base, item.uuid);
  const saved: string[] = [];
  for (const b of bs) {
    const isPdf = (b.mimeType ?? '').includes('pdf') || /\.pdf$/i.test(b.name);
    if (!isPdf) continue;
    const url = `${base}${b.retrieveLink ?? `/rest/bitstreams/${b.uuid}/retrieve`}`;
    const res = await http().get(url, { accept: 'application/pdf' });
    if (res.status !== 200) { console.warn(`[dspace] ${url} -> ${res.status}`); continue; }
    const entry = await saveFile(sourceId, `dspace/${safeName(item.handle)}/${safeName(b.name)}`, res.body, { url, licence });
    saved.push(entry.savedAs);
    console.log(`[dspace] saved ${entry.savedAs} (${entry.bytes} bytes)`);
  }
  return saved;
}
