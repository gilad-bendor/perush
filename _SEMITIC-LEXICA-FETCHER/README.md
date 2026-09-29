# Semitic lexica fetcher — DULAT · Johnstone (Mehri / Jibbāli / Ḥarsūsi) · Leslau (Soqoṭri)

Research report (2026-09-29) and a TypeScript tool that locates, classifies and — where the law and the site allow — fetches these works and their open substitutes.

> **סיכום בעברית.** שלושת המקורות אינם "לא נגישים": DULAT נמכר על-ידי Brill כ-PDF ללא DRM; ה-Mehri Lexicon של ג'ונסטון נמכר כספר אלקטרוני של Routledge (וכולל אינדקס אנגלי ל-Jibbāli Lexicon); ה-Ḥarsūsi Lexicon ניתן לקריאה בהשאלה דיגיטלית ב-archive.org; ה-Jibbāli Lexicon ו-Lexique soqotri של לסלאו קיימים רק בדפוס (עותק משומש, השאלה בין-ספרייתית, או סריקה לפי הזמנה מספרייה). לצד זה קיימים מאגרים פתוחים שמצטטים את שלושתם עם מספרי עמודים (StarLing/SED, SLOnline), וקורפוס וינה (1902–1918) שהוא נחלת הכלל. הקוד בתיקייה זו מוריד אוטומטית רק מה שמותר, ומפרק PDF שנרכש לערכים.

## 1. Bottom line per source

| Source | Digital edition? | How to obtain | Automated by this tool |
|---|---|---|---|
| **DULAT** 3rd ed. 2015 (del Olmo Lete & Sanmartín, HdO 112) | **Yes** — Brill e-book, ISBN 978-90-04-28865-2, DOI 10.1163/9789004288652 | Buy on brill.com (Brill e-books are DRM-free PDF, whole-book download; hardback list ≈ US$330 / €245). Also sold on Google Play Books (DRM, in-app only — avoid). | `status` (checks Google Books/Brill), then **`pdf-split dulat <file.pdf>`** on the purchased PDF |
| DULAT 2nd ed. 2003 | Lending scan on archive.org (`dictionaryofugar0000olmo`) | Free account → "Borrow" → read in browser. **Browse-only; no download; do not crawl.** | `status` confirms restriction only |
| **Johnstone, Mehri Lexicon** 1987 | **Yes** — Routledge e-book (2000), e-ISBN 978-0-203-04594-7, DOI 10.4324/9780203045947 | Buy on taylorfrancis.com (most T&F e-books: DRM-free PDF/EPUB). Includes the *Index of the English definitions in the Jibbāli Lexicon* (G. Rex Smith). Print copies ≈ US$200–700. | `status`; `fetch` gets the open Rosetta-Project excerpt pages; **`pdf-split johnstone-mehri`** on the purchased PDF |
| **Johnstone, Jibbāli Lexicon** 1981 | **No** | Second-hand (ISBN 0-19-713602-8; ≈ US$150–400) or inter-library loan / library scan of a research portion. HathiTrust record 000571379 is expected to be search-only. | `status` searches archive.org/HathiTrust in case a lending copy appears |
| **Johnstone, Ḥarsūsi Lexicon** 1977 | Lending scan on archive.org (`harsusilexiconen00john`, access-restricted) | Free account → "Borrow". **Browse-only.** Second-hand copies are cheap relative to the other two. | `status` confirms restriction only |
| **Leslau, Lexique soqoṭri** 1938 | **No lawful copy online** (not on archive.org / Gallica / HathiTrust full view / Google Books; Persée has only the 1938–39 reviews). In copyright until 2077 (EU/Israel), 2033 (US). | (1) Rare-book alerts: viaLibri, AbeBooks, ZVAB for "Lexique soqotri"; (2) scan-on-demand / document delivery from a holding library (National Library of Israel, BnF reproduction service, Subito) — legal for a research portion; (3) ILL of the volume. HathiTrust full-text search reports *which pages* contain a word even for search-only volumes — use it to decide what to order. | `status` (archive.org / Google Books / HathiTrust probes); `pdf-split leslau` on your own OCR |

**Unofficial copies.** Scans of DULAT (3rd ed.) circulate on Scribd, Academia.edu and ResearchGate; the tool never fetches from them. Whether to use them is your decision, not the tool's.

## 2. Sites you can browse but must not crawl

- **archive.org Controlled Digital Lending** items (Ḥarsūsi Lexicon; DULAT 2nd ed.; possibly others found by `status`): readable one hour at a time after "Borrow"; the reader is DRM-protected. The tool classifies any item with `access-restricted-item: true` as *borrow-only* and refuses to download it.
- **Google Books previews** of in-copyright titles (DULAT `bh6oBgAAQBAJ`, Mehri Lexicon `79JK4_t5F9sC`): partial/no preview; the tool only reads the public Volumes API metadata.
- **HathiTrust search-only volumes** (Jibbāli Lexicon; likely Leslau): no page view at all; full-text search gives page hit counts only.
- **Living Dictionaries — Mehri** (`livingdictionaries.app/mehri`): single-page app, ~18 entries; export is for managers. Not worth crawling.
- **Academia.edu / ResearchGate** author uploads (Huehnergard's 2008 *Additions and Corrections*; Rubin's *Supplement to Johnstone's Jibbāli Lexicon*): login wall; download by hand.

## 3. Open substitutes that quote the three works (with page references)

| Id | What it is | Licence | Fetcher |
|---|---|---|---|
| `starling-semitic` | StarLing "Semitic etymology" DB (Militarev & Kogan): each Proto-Semitic record lists Ugaritic, Mehri, Jibbāli, Ḥarsūsi, Soqoṭri reflexes with references such as *JM 3*, *JJ 1*, *JH 2*, *LS 49*, *DUL 5* | none stated (© Starostin) → `--accept-terms` | `crawl` (tries the downloads page first, then pages the CGI) |
| `slonline-soqotri` | Soqotri Lexicon Online (Naumkin, Kogan, Bulakh…): ≈220 finished entries citing Leslau by page; Words / Roots / References | none stated → `--accept-terms` | `crawl` |
| `webonary-soqotri` | SIL "Soqotri Dictionary" (2022) on Webonary; entries `/soqotra/en/g<uuid>/` | © SIL; CC licence on its Copyright page; Webonary ToS | `crawl --accept-terms` |
| `rubin-omani-mehri-2018` | Rubin, *Omani Mehri* (Brill OA) — Appendix C *Supplement to Johnstone's Mehri Lexicon* (pp. 822–834) | CC BY-NC-ND | `fetch` (OAPEN handle 20.500.12657/76320; archive.org mirror) |
| `rubin-jibbali-2014` | Rubin, *The Jibbali (Shaḥri) Language of Oman* (Brill OA) — *Supplement to Johnstone's Jibbāli Lexicon* | Brill OA | `fetch` (OAPEN search; else the Brill page) |
| `wiktionary-semitic` | Ugaritic (≈761 lemmas, usually citing DUL), Mehri, Soqotri, Harsusi, Shehri | CC BY-SA 4.0 | `fetch` / `wiktionary` |
| `vienna-expedition-pd` | Müller, *Die Mehri- und Soqoṭri-Sprache* I–III (1902–07); Jahn, *Die Mehri-Sprache in Südarabien: Texte und Wörterbuch* (1902, with Mehri–German dictionary); Bittner's *Studien* — the corpus Leslau lexicalised | public domain | `fetch` (archive.org `bub_gb_lhYUAAAAYAAJ`, `bub_gb_pxM7AQAAMAAJ` + searches; Jahn via ULB Halle DSpace 1981185920/39161) |
| `halayqa-supplement-tropper` | Halayqa, supplementary Ugaritic word list to Tropper's KWU (UF 41) | repository PDF | `fetch` |

Paid but useful: Watson–Morris–Eades, *A Comparative Cultural Glossary across the Modern South Arabian Language Family* (OUP 2019; 345 head terms × 6 languages); Naumkin & Kogan, *Corpus of Soqotri Oral Literature* I–II (Brill 2014/2018, each with a full glossary); Militarev & Kogan, *SED* I–II (AOAT 278); Tropper, *Kleines Wörterbuch des Ugaritischen* (2008). Physical archives: T.M. Johnstone Papers, Durham University Library (GB 33 JOH) — field notebooks and tapes behind all three lexica.

## 4. The algorithm

1. **Registry first.** `src/registry.ts` lists every known copy with an *access class*: `open`, `purchase`, `browse-only`, `offline`, `terms-check`. The class, not a URL, decides what the tool may do.
2. **Probe, don't guess.** `status` asks the public APIs (archive.org metadata, DSpace REST, Google Books Volumes, HathiTrust Bib API, MediaWiki) and records the answer in `data/status.json`. A lending item (`access-restricted-item: true`) is reported and skipped.
3. **Fetch what is open, in full.** Public-domain scans (djvu text + PDF), OA monographs (PDF bitstreams), Wiktionary sections (wikitext) — each file gets a `manifest.json` line with URL, SHA-256, time and licence.
4. **Crawl the small databases politely, and only after you accepted their terms.** One request at a time per host, ≥2 s apart (or the robots.txt `Crawl-delay`), robots.txt honoured, descriptive User-Agent with your e-mail (`SLF_CONTACT`), raw HTML archived beside the parsed JSON so parsers can be fixed without re-crawling.
5. **Buy the two e-books, then parse locally.** `pdf-split <profile> <pdf>` extracts text page by page (pdfjs) and splits entries with per-work heuristics (`src/pdf/profiles.ts`: DULAT headword + POS; Johnstone root headers + lemma lines; Leslau headword + French gloss). Run with `--sample` first and tune the regexes to the real layout.
6. **Never** bypass DRM, lending readers, paywalls or login walls; never crawl Google Books previews or HathiTrust page images.

## 5. Running it

```bash
cd _SEMITIC-LEXICA-FETCHER
npm install                      # typescript + @types/node (pdfjs-dist is optional: npm i pdfjs-dist)
npm run build
export SLF_CONTACT="you@example.com"      # goes into the User-Agent, as WMF/IA ask
node dist/src/cli.js list
node dist/src/cli.js status                        # all sources, or: status dulat3 leslau-soqotri-1938
node dist/src/cli.js fetch --all-open              # PD corpus, OA supplements, Wiktionary
node dist/src/cli.js fetch johnstone-mehri-1987    # only the open Rosetta excerpt pages
node dist/src/cli.js crawl starling-semitic --accept-terms --max=50
node dist/src/cli.js crawl slonline-soqotri --accept-terms
node dist/src/cli.js crawl webonary-soqotri --accept-terms
node dist/src/cli.js pdf-split dulat ~/Downloads/DULAT-2015.pdf --sample   # look, then tune profiles.ts
node dist/src/cli.js pdf-split dulat ~/Downloads/DULAT-2015.pdf            # -> data/pdf-split/*.jsonl
```

Behind an HTTPS proxy: `NODE_USE_ENV_PROXY=1` (Node ≥ 22.21). Output goes to `data/<source-id>/` (override with `SLF_DATA_DIR`); HTTP cache in `cache/`.

Google Books: create a free API key (Google Cloud console → Books API) and export `GOOGLE_BOOKS_API_KEY`; keyless calls share a per-network quota and often answer `429`.

## 6. What was and was not verified

- Verified from search engines, catalogues and publisher pages: ISBNs, DOIs, Google Books ids, archive.org identifiers and their *access-restricted* flags, the OAPEN handle for Rubin 2018, the ULB Halle handle for Jahn 1902, Wiktionary category sizes, SLOnline and Webonary entry counts (Webonary reports both 836 and 3,672 — `status` counts).
- **Not** reachable from the sandbox where this was written (egress policy): archive.org, hathitrust.org, brill.com, taylorfrancis.com, starlingdb.org, soqotri-lexicon.ru, webonary.org, oapen.org, uni-halle.de, wiktionary.org. The fetchers were therefore tested only against synthetic fixtures (`npm test`), not live. Expect to adjust `parseRecords` (StarLing) and the listing/entry URL patterns (SLOnline) after the first `--max=…` run; raw HTML is kept for that purpose.
- Prices quoted are list/marketplace prices seen on 2026-09-29; check the product page before buying.

## 7. Files

```
src/registry.ts          the source catalogue (edit here when you learn something new)
src/util/http.ts         polite client: per-host serialisation, delay, robots.txt, retries, cache
src/util/robots.ts       robots.txt parser
src/fetchers/*.ts        archive.org, dspace (OAPEN, Halle), googleBooks, hathitrust, wiktionary, starling, slonline, webonary
src/pdf/*.ts             PDF → pages → entries (profiles per work)
src/cli.ts               commands
tests/*.test.ts          unit tests on synthetic fixtures (node --test)
```
