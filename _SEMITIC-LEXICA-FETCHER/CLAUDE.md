# CLAUDE.md — semitic-lexica-fetcher (maintainer notes)

This file is for Claude (or any maintainer) working on this project. It is self-contained: read it before touching the code. The parent repository (`perush`) is a Hebrew commentary on Genesis; this tool feeds its comparative-Semitic word studies in `ניתוחים-לשוניים/`. Repository-level instructions (`../CLAUDE.md`) apply to the commentary, not to this tool; here, code, comments and commit messages may be English.

## 1. Purpose and non-goals

Purpose: locate, classify and — where allowed — download five reference works and their open substitutes:
DULAT (Ugaritic), Johnstone's Mehri / Jibbāli / Ḥarsūsi lexica, Leslau's *Lexique soqoṭri*; plus StarLing/SED, SLOnline, Webonary, Rubin's OA grammars, Wiktionary, and the public-domain Vienna corpus. Then turn purchased PDFs into per-entry JSON.

Non-goals (hard rules, do not "improve" them away):
- Never bypass DRM, Controlled-Digital-Lending readers, paywalls or login walls.
- Never download an archive.org item whose metadata has `access-restricted-item: true` (see `classify()` in `src/fetchers/archiveOrg.ts`).
- Never scrape Google Books previews or HathiTrust page images.
- Never crawl a `terms-check` source unless the user passes `--accept-terms`.
- Never fetch from Scribd/Academia/ResearchGate/dokumen.pub mirrors of in-copyright books.

## 2. Layout

```
package.json / tsconfig.json     ESM, TypeScript 5, target ES2022, NodeNext resolution, strict
README.md                        research report (summary tables) + usage
CLAUDE.md                        this file
reports/00-…12-*.md              one full report per data source (bibliography, copyright, URLs, how to obtain, parsing notes)
src/types.ts                     SourceSpec, AccessClass, ManifestEntry, StatusReport
src/registry.ts                  SOURCES[] — the catalogue; findSource(id)
src/util/http.ts                 PoliteHttpClient: per-host serialisation, min delay, robots.txt, retries, disk cache; http() singleton
src/util/robots.ts               parseRobots / isAllowed / crawlDelayFor
src/util/html.ts                 htmlToText, extractLinks, decodeEntities, firstMatch (no HTML library)
src/util/manifest.ts             DATA_ROOT, saveFile() → data/<sourceId>/<relPath> + manifest.json (sha256, url, licence)
src/fetchers/archiveOrg.ts       searchItems, getMetadata, classify, downloadItem, probe
src/fetchers/dspace.ts           DSpace 6 REST (OAPEN, ULB Halle): itemByHandle, searchItems, bitstreams, downloadPdfs
src/fetchers/googleBooks.ts      Volumes API: volume, search, summarize (metadata only)
src/fetchers/hathitrust.ts       Bib API: byOclc, byRecord, describe; fullTextSearchUrl
src/fetchers/wiktionary.ts       categoryMembers, wikitext, languageSection, dumpCategory
src/fetchers/starling.ts         probeDownloads, parseRecords, nextOffset, queryUrl, crawlSemitic
src/fetchers/slonline.ts         discover, isListing, isEntry, crawl
src/fetchers/webonary.ts         isEntryUrl, parseEntry, collectEntryUrls, crawl
src/pdf/profiles.ts              SplitProfile per work (dulat, johnstone-mehri, johnstone-jibbali, leslau, generic)
src/pdf/entrySplitter.ts         pdfToPages (pdfjs-dist, optional, dynamic import), splitEntries (pure), entriesToJsonl
src/cli.ts                       commands: list | status | fetch | crawl | wiktionary | fetch-url | pdf-split
tests/*.test.ts                  node:test unit tests on synthetic fixtures (no network)
data/ cache/ dist/ node_modules/ git-ignored
```

## 3. Build, run, test

```bash
npm install                 # typescript + @types/node only; pdfjs-dist is optional (npm i pdfjs-dist) for pdf-split
npm run typecheck           # tsc --noEmit
npm test                    # tsc build + node --test dist/tests/*.test.js  (11 tests, all offline)
node dist/src/cli.js list
```
Environment variables: `SLF_CONTACT` (e-mail in User-Agent; WMF and IA policy), `SLF_DATA_DIR`, `SLF_CACHE_DIR`, `GOOGLE_BOOKS_API_KEY` (keyless quota is per-network and often exhausted → HTTP 429), `NODE_USE_ENV_PROXY=1` (Node ≥ 22.21) when behind an HTTPS proxy.

## 4. Data flow

1. `registry.ts` gives every source an `access` class and `ids` (archive.org identifiers/queries, DSpace base+handle, Google Books ids, HathiTrust OCLC/record numbers, Wiktionary categories, plain URLs).
2. `cli status` → `probeOne()` runs only read-only API probes per id and writes `data/status.json` (`StatusReport[]`). A probe failure is recorded, not thrown.
3. `cli fetch` → `fetchSource()`: refuses non-`open` sources (prints notes), except that archive.org items listed on a non-open source are still passed to `downloadItem()`, which itself refuses restricted items (this is how the open Rosetta excerpts of the Mehri Lexicon get fetched).
4. `cli crawl` → site-specific crawler; raw HTML always saved next to parsed JSON so parsers can be fixed without re-crawling.
5. Every saved file goes through `saveFile()` → manifest line with URL, bytes, sha256, time, licence.
6. `cli pdf-split` is local-only: PDF → `PageText[]` (lines reconstructed by y-coordinate) → `splitEntries(pages, profile)` → JSONL.

## 5. HTTP policy (util/http.ts)

- One in-flight request per host (`hostQueue`), minimum 2 s between requests to the same host, or robots `Crawl-delay` if larger.
- robots.txt fetched once per host and honoured (`RobotsDisallowed` error). Google/HathiTrust APIs and DSpace REST are normally allowed.
- Retries: 429/5xx and network errors, exponential back-off, `Retry-After` respected; 4 attempts max.
- Cache: `cache/<sha1(url)>.body/.json`; `noCache: true` bypasses (used for HEAD-like probes).
- Uses Node's global `fetch`; it ignores `HTTPS_PROXY` unless `NODE_USE_ENV_PROXY=1`.

## 6. Adding things

**A new source**: append a `SourceSpec` to `SOURCES` in `src/registry.ts`. Choose `access` honestly (see §1). Fill `ids` with whatever lets an existing fetcher act; add `notes` (they are printed by `status`/`fetch`). Add a report `reports/NN-<id>.md` following the section template in `reports/00-index.md`, and a row in its table.

**A new fetcher**: `src/fetchers/<name>.ts` exporting pure parsing functions (unit-testable) and one I/O function; wire it in `cli.ts` (`probeOne`, `fetchSource` or `crawl`), add the kind to `FetcherKind` in `types.ts`, and a fixture test in `tests/parsers.test.ts`.

**A new PDF profile**: `src/pdf/profiles.ts`; keep the `TR` alphabet (Latin + Latin-1/Ext-A/B + IPA + combining marks + Latin Extended Additional, which covers ả ủ ỉ ḥ ḫ ṣ ṭ ś š ə ɛ ɔ ʔ ʕ ʾ ʿ). Beware `\b` after a `.` (word boundary does not exist between `.` and a space) — use `(?=\s|$)`. Add a test in `tests/entrySplitter.test.ts`.

## 7. Known unknowns (verify on first live run)

The sandbox that produced this code could not reach archive.org, hathitrust.org, brill.com, taylorfrancis.com, starlingdb.org, soqotri-lexicon.ru, webonary.org, oapen.org, opendata.uni-halle.de, en.wiktionary.org. Consequently:
- `starling.parseRecords()` assumes "Field: value" lines after tag stripping; check `data/starling-semitic/starling/raw/page-000001.html` and adapt `RECORD_START`/the field regex.
- `slonline.isListing/isEntry` URL patterns are guesses (`/words`, `/roots`, `?page=N`). Run `crawl slonline-soqotri --accept-terms --max=5`, inspect `data/…/slonline/listings/`, fix patterns.
- `webonary.collectEntryUrls` follows browse links containing `letter|key|pagenr|paged`; confirm against the real browse page.
- OAPEN handle for Rubin 2014 (Jibbali) is unknown; `dspace.searchItems` by title is the fallback.
- archive.org search field names (`fl[]`) and `access-restricted-item` are per IA docs; if `metadata.collection` shape changes, `classify()` still relies primarily on the restricted flag.
- Google Books: expect 429 without an API key.

## 8. Conventions

- ESM everywhere; relative imports end in `.js` even from `.ts` (NodeNext).
- No runtime dependencies (HTML parsing is regex-based on purpose); `pdfjs-dist` only via dynamic import with a variable specifier so `tsc` does not need it.
- Keep functions that parse text pure and tested; keep I/O thin.
- Prices, counts and URLs in `registry.ts` and `reports/` carry the date 2026-09-29; update the date when you refresh them.
- Commit messages in the parent repo are in Hebrew; the attribution trailer required by the session must be kept.

## 9. Roadmap / TODO

- Second-stage parsers: split DULAT entries into {headword, pos, gloss, cognates[], attestations[]}; split Johnstone entries into {root, lemma, forms, gloss}.
- A `merge` command producing one comparative table (Hebrew root → Ugaritic / Mehri / Jibbāli / Ḥarsūsi / Soqoṭri) from StarLing + Wiktionary + purchased PDFs, for direct citation in `ניתוחים-לשוניים/`.
- Optional HathiTrust full-text search helper (respecting their rate limits) to locate pages in Leslau before ordering a library scan.
- Probe sed-online.ru and mcsr.mhru.edu.ye structure; add fetchers if their terms allow.
