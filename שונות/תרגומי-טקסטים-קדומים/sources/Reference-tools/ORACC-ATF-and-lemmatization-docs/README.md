# ORACC documentation: ATF format, lemmatisation, Akkadian conventions, open-data JSON

- **What:** ORACC (Open Richly Annotated Cuneiform Corpus, Univ. of Pennsylvania and partners) documents the **ATF** transliteration format, which ORACC, CDLI and (in a dialect) eBL all use, plus its lemmatisation and glossary conventions. You need these docs to read raw transliterations correctly: `{d}` determinatives, `[…]` breaks, `#` damage, `?` `!` `*`, `@obverse`, `$` state lines, `#tr.en:` translations, `%n` normalised Akkadian, etc.
- **Source:** https://oracc.museum.upenn.edu/doc/help/ (each `.md` file starts with its exact URL)
- **Retrieved:** 2026-10-16
- **Licence:** documentation is *"Released under a Creative Commons Attribution Share-Alike license 3.0"* (page footer). ORACC **data** (glossary/corpus JSON) carries **CC0** (stated inside each JSON file).
- **Format here:** `raw/<name>.html` = original page. `<name>.md` = clean Markdown made with a stdlib converter (site navigation trimmed). Tables come out as `| a | b |` rows without header separators, so if a table looks odd, check the raw HTML.

## Files (read in this order)
| File | Use it for |
|---|---|
| `atf-primer.md` | 5-minute overview of an ATF text: `&P…` header, `#project`, `#atf: lang`, `@obverse`, numbered lines |
| `atf-inline-tutorial.md` | **the key one for reading transliterations**: sign values vs. sign names (logograms in CAPS), subscripts, `{determinatives}`, `[ ]` breaks, `⸢ ⸣` / `#` damage, `?` `!` `*` `<…>` `<<…>>`, `x` and `...`, ASCII↔Unicode (`sz`=š, `s,`=ṣ, `t,`=ṭ, `h,`=ḫ, `j`=ŋ) |
| `atf-structure-tutorial.md` | `@tablet @obverse @column`, `$` state/ruling lines, `#` comments |
| `atf-quick-reference.md` | cheat sheet of all line types and inline markers |
| `atf-labels.md` | how line references (`o i 12'`) are formed |
| `atf-translations.md` | `#tr.en:` interlinear and `@translation` block translations |
| `atf-composites.md`, `atf-scores.md` | composite texts and scores (the way eBL/George present Gilgameš: composite line + manuscript witnesses) |
| `atf-advanced-conventions.md` | rarer markers |
| `atf-cdli-vs-oracc.md` | differences between CDLI-ATF and ORACC-ATF |
| `atf-overview.md` | index of the ATF docs |
| `lemmatisation-primer.md`, `lemmatisation-overview.md` | the `CF[GW]POS` lemma notation (e.g. `abūbu[flood]N`) used in ORACC glossaries and in eBL's `oraccWords` |
| `akkadian-language-conventions.md` | **Akkadian normalisation conventions**: citation forms, NORM0, POS tags, roots, dialect codes (`akk-x-stdbab`, `akk-x-oldbab`, `akk-x-neoass` …) |
| `languages-overview.md` | language codes and shift markers (`%sux`, `%akk`, `%es` Emesal …) |
| `glossaries-overview.md` | how ORACC glossaries are built |
| `opendata-overview.md`, `opendata-json-format.md` | **the JSON export format** (projects.json, catalogue.json, corpus.json, `gloss-<lang>.json`, `corpusjson/P….json`) |

The **eBL dialect** of ATF (normalised Akkadian lines, `%n`, metrical `|` and caesura `||`, manuscript sigla) is specified in `../eBL-ATF-spec/ebl-atf.md`.

## Machine access to ORACC data (tested 2026-10-16)
- `https://oracc.museum.upenn.edu/projects.json`: list of public projects (works)
- `https://oracc.museum.upenn.edu/json/`: **the only working bulk route**: one zip per project, e.g. `…/json/cams-gkab.zip` (29 MB), `…/json/epsd2.zip` (213 MB), `…/json/epsd2-literary.zip` (40 MB), `…/json/ogsl.zip` (0.25 MB), `…/json/osl.zip`, `…/json/etcsri.zip` (13 MB), `…/json/saao-saa03.zip` (4.3 MB, SAA 3 = Assyrian literary texts)
- Per-file URLs that the docs describe (`/<project>/manifest.json`, `/corpus.json`, `/gloss-akk.json`, `/json.zip`) currently return **HTTP 200 with an empty body** (0 bytes). Use the zips.
- Glossary JSON structure (checked in `cams/gkab/gloss-akk-x-stdbab.json`, 4,019 entries, CC0): `{type:"glossary", lang, entries:[{headword:"abūbu[flood]N", cf, gw, pos, forms:[{n:"a-bu-ba",…}], norms[], senses:[{mng, pos, …}], periods[]}], instances{}, summaries{}}`
