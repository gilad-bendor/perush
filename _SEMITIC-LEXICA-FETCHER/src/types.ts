/**
 * Shared types for the Semitic-lexica fetcher.
 *
 * The registry (registry.ts) describes every source we know about, how it can be
 * obtained, and which fetcher (if any) can pull it automatically.
 */

/** How a source can be obtained. This drives what the CLI is allowed to do. */
export type AccessClass =
  /** Free, openly licensed or public-domain; a fetcher may download it in full. */
  | 'open'
  /** Sold by the publisher as a DRM-free file; buy it, then run `pdf-split` locally. */
  | 'purchase'
  /** Readable in a browser (lending, preview, search-only) but not crawlable; never automated. */
  | 'browse-only'
  /** Print only: used copies, inter-library loan, library scan-on-demand. */
  | 'offline'
  /** Small web database with no explicit licence; crawl only after you checked the site's terms. */
  | 'terms-check';

export type Language =
  | 'Ugaritic' | 'Mehri' | 'Jibbali' | 'Harsusi' | 'Soqotri' | 'Hobyot' | 'Bathari'
  | 'Proto-Semitic' | 'Comparative';

export type FetcherKind =
  | 'archive.org' | 'dspace' | 'google-books' | 'hathitrust' | 'wiktionary'
  | 'starling' | 'slonline' | 'webonary' | 'none';

export interface SourceSpec {
  /** Stable id used on the command line and as the data/<id> folder name. */
  id: string;
  title: string;
  authors: string;
  year: string;
  languages: Language[];
  /** 'primary' = one of the three requested works; 'derivative' = supplements/indices to them; 'alternative' = other open data. */
  role: 'primary' | 'derivative' | 'alternative' | 'corpus';
  access: AccessClass;
  /** Which automated fetcher applies (or 'none'). */
  fetcher: FetcherKind;
  /** Fetcher-specific identifiers. */
  ids?: {
    archiveOrgItems?: string[];
    archiveOrgQueries?: string[];
    oapenHandle?: string;
    dspace?: { base: string; handle: string };
    googleBooksIds?: string[];
    googleBooksQuery?: string;
    hathiOclc?: string[];
    hathiRecord?: string[];
    isbn?: string[];
    doi?: string;
    wiktionaryCategories?: string[];
    urls?: string[];
  };
  licence?: string;
  /** Free-form notes shown by `list`/`status`. */
  notes: string[];
}

export interface StatusReport {
  id: string;
  checkedAt: string;
  access: AccessClass;
  live: Array<{ probe: string; result: string; ok: boolean }>;
}

export interface ManifestEntry {
  sourceId: string;
  url: string;
  savedAs: string;
  bytes: number;
  sha256: string;
  fetchedAt: string;
  licence?: string;
  note?: string;
}
