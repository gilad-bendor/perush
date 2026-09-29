/**
 * Google Books Volumes API (public; optional key via GOOGLE_BOOKS_API_KEY).
 * We only use it to REPORT viewability and — for FULL_PUBLIC_DOMAIN volumes —
 * to record the PDF download link Google itself publishes in accessInfo.
 * Preview pages of in-copyright books are never scraped.
 */
import { http } from '../util/http.js';

export interface GbVolume {
  id: string;
  volumeInfo: { title?: string; authors?: string[]; publishedDate?: string; publisher?: string; pageCount?: number };
  accessInfo?: {
    viewability?: 'FULL_PUBLIC_DOMAIN' | 'PARTIAL' | 'NO_PAGES' | 'ALL_PAGES' | 'UNKNOWN';
    publicDomain?: boolean;
    pdf?: { isAvailable?: boolean; downloadLink?: string; acsTokenLink?: string };
    epub?: { isAvailable?: boolean; downloadLink?: string };
  };
  saleInfo?: { saleability?: string; listPrice?: { amount: number; currencyCode: string }; buyLink?: string };
}

const API = 'https://www.googleapis.com/books/v1/volumes';
const key = () => (process.env.GOOGLE_BOOKS_API_KEY ? `&key=${process.env.GOOGLE_BOOKS_API_KEY}` : '');

export async function volume(id: string): Promise<GbVolume | undefined> {
  const res = await http().get(`${API}/${encodeURIComponent(id)}?${key().slice(1)}`, { accept: 'application/json' });
  return res.status === 200 ? res.json<GbVolume>() : undefined;
}

export async function search(q: string, maxResults = 10): Promise<GbVolume[]> {
  const res = await http().get(`${API}?q=${encodeURIComponent(q)}&maxResults=${maxResults}${key()}`, { accept: 'application/json' });
  if (res.status !== 200) return [];
  return res.json<{ items?: GbVolume[] }>().items ?? [];
}

export function summarize(v: GbVolume): string {
  const a = v.accessInfo ?? {};
  const price = v.saleInfo?.listPrice ? ` ${v.saleInfo.listPrice.amount} ${v.saleInfo.listPrice.currencyCode}` : '';
  return `${v.id} | ${v.volumeInfo.title ?? ''} (${v.volumeInfo.publishedDate ?? '?'}) | view=${a.viewability ?? '?'} pd=${a.publicDomain ?? '?'} pdf=${a.pdf?.isAvailable ?? '?'} sale=${v.saleInfo?.saleability ?? '?'}${price}`;
}
