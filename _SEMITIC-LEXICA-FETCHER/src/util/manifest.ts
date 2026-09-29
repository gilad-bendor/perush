import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { ManifestEntry } from '../types.js';

export const DATA_ROOT = process.env.SLF_DATA_DIR ?? path.resolve('data');

export function sourceDir(sourceId: string): string {
  return path.join(DATA_ROOT, sourceId);
}

export async function saveFile(
  sourceId: string,
  relPath: string,
  body: Buffer | string,
  meta: { url: string; licence?: string; note?: string },
): Promise<ManifestEntry> {
  const dir = sourceDir(sourceId);
  const full = path.join(dir, relPath);
  await fs.mkdir(path.dirname(full), { recursive: true });
  const buf = typeof body === 'string' ? Buffer.from(body, 'utf8') : body;
  await fs.writeFile(full, buf);
  const entry: ManifestEntry = {
    sourceId,
    url: meta.url,
    savedAs: relPath,
    bytes: buf.length,
    sha256: createHash('sha256').update(buf).digest('hex'),
    fetchedAt: new Date().toISOString(),
    licence: meta.licence,
    note: meta.note,
  };
  await appendManifest(sourceId, entry);
  return entry;
}

export async function appendManifest(sourceId: string, entry: ManifestEntry): Promise<void> {
  const file = path.join(sourceDir(sourceId), 'manifest.json');
  let list: ManifestEntry[] = [];
  try { list = JSON.parse(await fs.readFile(file, 'utf8')) as ManifestEntry[]; } catch { /* new */ }
  list = list.filter((e) => e.savedAs !== entry.savedAs);
  list.push(entry);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(list, null, 2));
}

export function safeName(s: string): string {
  return s.replace(/[^A-Za-z0-9._\-֐-׿؀-ۿ]+/g, '_').slice(0, 150);
}
