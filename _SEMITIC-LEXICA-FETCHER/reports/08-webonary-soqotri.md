# 08 · Soqotri Dictionary on Webonary (SIL International)

## Identity

- `https://www.webonary.org/soqotra/en/` — "Soqotri Dictionary". © 2022 SIL International; SIL archive record 99431. Compiled from a FieldWorks (FLEx) database and published through SIL's Webonary platform (WordPress + `sil-dictionary-webonary` plugin). Last published 5 Oct 2022.
- Entry count is reported inconsistently by search engines (836 entries; 3,672 entries) — the crawler counts.
- Languages: Soqotri headwords (Arabic-script and/or transliteration), English and Standard Arabic glosses.

## Where / how

| URL pattern | What |
|---|---|
| `/soqotra/en/` | home, search box |
| `/soqotra/en/browse/` (+ `?letter=…`, `?key=…`, paging) | alphabetical index |
| `/soqotra/en/g<uuid>/` | one entry (FLEx GUID) |
| `/soqotra/overview/copyright/` | copyright/licence page (many Webonary dictionaries use CC BY-NC-ND or CC BY-NC-SA) |
| `https://www.webonary.org/sil-international-terms-of-service-for-webonary-org/` | platform terms |

## Licence / terms

Copyright SIL; the specific Creative Commons licence is on the dictionary's Copyright page (not readable from the sandbox). Webonary's Terms of Service govern automated access. Read both, then decide.

## Access class and what the tool does

`webonary-soqotri` → **terms-check**. `cli crawl webonary-soqotri --accept-terms [--max=N]`: walks the browse index, collects `/g<uuid>/` links, saves each entry page, and extracts `mainheadword`, `partofspeech`, `definitionorgloss`/`gloss`/`definition` spans (FLEx export class names) into `data/webonary-soqotri/webonary/entries.json`. Rate-limited, robots-aware.

## Value for the perush project

A quick lookup dictionary with Arabic glosses; less philological depth than SLOnline or Leslau, but far more entries than SLOnline's public set.

## Open questions / not verified

- Compiler names (snippets mention SIL staff; the site's copyright page has the definitive credit).
- Exact browse-pagination parameters (`letter`, `key`, `pagenr`); the crawler follows whatever it finds.
- Whether SIL offers the underlying LIFT/XHTML export on request (SIL Language & Culture Archives often do — ask).

## Sources consulted

webonary.org/soqotra pages (search snippets: entry pages, browse page); sil.org/resources/archives/99431; webonary.org overview and terms pages; GitHub sillsdevarchive/sil-dictionary-webonary (plugin structure, XHTML import).
