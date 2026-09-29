/**
 * Turn the plain text of a purchased/scanned dictionary PDF into per-entry JSON.
 * Text extraction uses pdfjs-dist (optional dependency, dynamically imported)
 * so that the rest of the tool works without it.
 */
import { promises as fs } from 'node:fs';
import type { SplitProfile } from './profiles.js';

export interface Entry {
  headword: string;
  section?: string;
  page?: number;
  lines: string[];
}

export interface PageText { page: number; lines: string[] }

/** Extract text page by page, preserving line breaks by y-coordinate. */
export async function pdfToPages(file: string): Promise<PageText[]> {
  // Resolved at runtime only, so the tool builds and runs without pdfjs-dist installed.
  const specifier = 'pdfjs-dist/legacy/build/pdf.mjs';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let pdfjs: any;
  try {
    pdfjs = await import(specifier);
  } catch {
    throw new Error('pdfjs-dist is not installed: run `npm install pdfjs-dist` (optional dependency)');
  }
  const data = new Uint8Array(await fs.readFile(file));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
  const pages: PageText[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const rows = new Map<number, Array<{ x: number; s: string }>>();
    for (const item of content.items as Array<{ str: string; transform: number[] }>) {
      if (!('str' in item)) continue;
      const y = Math.round(item.transform[5]);
      const x = item.transform[4];
      const key = [...rows.keys()].find((k) => Math.abs(k - y) <= 2) ?? y;
      if (!rows.has(key)) rows.set(key, []);
      rows.get(key)!.push({ x, s: item.str });
    }
    const lines = [...rows.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([, parts]) => parts.sort((a, b) => a.x - b.x).map((q) => q.s).join(' ').replace(/\s+/g, ' ').trim())
      .filter(Boolean);
    pages.push({ page: p, lines });
  }
  return pages;
}

/** Split page texts into entries according to a profile. Pure function — unit-tested. */
export function splitEntries(pages: PageText[], profile: SplitProfile): Entry[] {
  const entries: Entry[] = [];
  let cur: Entry | null = null;
  let section: string | undefined;
  for (const pg of pages) {
    if (profile.firstPage !== undefined && pg.page - 1 < profile.firstPage) continue;
    for (const raw of pg.lines) {
      const line = raw.trim();
      if (!line || profile.noise.some((n) => n.test(line))) continue;
      const sec = profile.section?.exec(line);
      if (sec) { section = sec[1]; continue; }
      const hw = profile.headword.exec(line);
      if (hw) {
        cur = { headword: hw[1], section, page: pg.page, lines: [line] };
        entries.push(cur);
      } else if (cur) {
        cur.lines.push(line);
      }
    }
  }
  return entries;
}

export function entriesToJsonl(entries: Entry[]): string {
  return entries.map((e) => JSON.stringify({ ...e, text: e.lines.join(' ') })).join('\n') + '\n';
}
