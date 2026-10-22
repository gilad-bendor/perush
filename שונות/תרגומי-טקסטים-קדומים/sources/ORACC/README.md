# ORACC — Open Richly Annotated Cuneiform Corpus (ePSD2 / epsd2-literary)

- **Projects used:** `epsd2/literary` (Sumerian literary corpus of the electronic Pennsylvania Sumerian Dictionary 2, S. Tinney et al., Univ. of Pennsylvania). Composites are mostly ETCSL-derived and lemmatised to ePSD2; exemplars (P-numbers) come from CDLI.
- **URLs:** https://oracc.museum.upenn.edu/epsd2/literary/ ; composite of the Flood Story https://oracc.museum.upenn.edu/epsd2/literary/Q000357 ; Ur manuscript https://oracc.museum.upenn.edu/epsd2/literary/P346146
- **Retrieved:** 2026-10-16
- **Licence:** the JSON data state **"This data is released under the CC0 license"** (https://creativecommons.org/publicdomain/zero/1.0/; see http://oracc.org/doc/opendata/). ORACC web pages generally CC BY-SA 3.0.

## Folders
| Folder | Contents |
|---|---|
| `_bulk/epsd2-literary.zip` | Full JSON export of epsd2/literary (39.5 MB; 1,041 files: `catalogue.json` with 1,254 entries, `corpusjson/<Q|P>.json` CDL texts, glossaries `gloss-sux.json`, indices). Kept zipped. |
| `_api-info/` | `oracc-json-index.html` (list of all 208 downloadable project zips), `projects.json`, `epsd2-literary-home.html`. |
| `epsd2-literary--Q000357--Flood-Story/` | Flood Story composite (Q000357) and the Ur manuscript (P346146): raw CDL JSON, ORACC HTML view, Markdown conversions. |
| `epsd2-royal--Q000947--Laws-of-Ur-Namma/`, `epsd2-royal--Q000613--Laws-of-Lipit-Ishtar/` | ePSD2 royal (CC0): lemmatised Ur-Namma (prologue, §1–§11 with § labels) and Lipit-Ištar prologue fragments, with morph; lexical help for projects 5–6 (added 2026-10-18; `_bulk/epsd2-royal.zip`). |
| `tcma-laws--P281779--Middle-Assyrian-Laws-A/` | MAL A (TCMA, de Ridder 2021; CC BY-SA 3.0 / CC0 data): lemmatised + normalized text and the English; base text of `חוקים-ובריתות/4-החוקים-האשוריים-התיכונים-A/` (added 2026-10-18; own README). |
| `epsd2-literary--Q000379--Lament-for-Ur/`, `epsd2-literary--Q000375--Curse-of-Agade/` | ePSD2 lemma + morph of the Lament for Urim and the Cursing of Agade (CC0; added 2026-10-19 for `קינות-על-ערים/`; own READMEs). epsd2-literary also has the other city laments: Q000380 (Sumer and Urim), Q000381 (Nibru), Q000382 (Unug), Q000383 (Eridug). |
| `epsd2-literary--Q000343--Inanas-Descent/` | ePSD2 lemma + morph for every line of Inana's Descent (`cdl2md.py --morph`; added 2026-10-21); 13Š = ETCSL 13C, 305Š = 305C, 248/277/278 unlabelled. Committed (CC0). |
| `epsd2-literary--Q000364--Gilgamesh-Enkidu-and-the-Netherworld/` | ePSD2 lemma + morph for every line of the five recensions (463; `cdl2md.py --morph`; added 2026-10-21); labels `Ver.N, …`, a few unlabelled: aligned with ETCSL by position (checked). |

## Bulk/API mechanism (for future Sumerian work)
- **Project zips:** `https://oracc.museum.upenn.edu/json/<project>.zip` with `/` → `-` (e.g. `epsd2-literary.zip`, `epsd2-royal.zip`, `etcsri.zip`, `dcclt.zip`, `obmc.zip`, `epsd2-earlylit.zip`). Index page: https://oracc.museum.upenn.edu/json/ . The build server `https://build-oracc.museum.upenn.edu/json/<project>.zip` also works (slightly newer/larger build; its index page returned HTTP 500).
- **Inside each zip:** `<project>/catalogue.json` (`members` dict keyed by P/Q/X id), `<project>/corpusjson/<id>.json` (CDL tree: `node` c = chunk, d = discontinuity incl. `line-start` with `label`, l = lemma with `f.form`, `f.gdl` sign-level grapheme data incl. breakage `[ ]`/`⸢ ⸣`, `f.cf`/`gw`/`sense`/`pos`), `gloss-*.json` glossaries, `index-*.json`.
- Single-text web views: `https://oracc.museum.upenn.edu/<project>/<id>` and `…/<id>/html`. (Per-text JSON URLs such as `/epsd2/literary/catalogue.json` returned empty responses on 2026-10-16 — use the zips.)
- Converter used here: `../../tools/cdl2md.py` (`python3 -I cdl2md.py <zip> <member> <out.md> <title> <url>`).

## Is there a newer edition of the Sumerian Flood Story?
- **Q000357** (epsd2/literary) = ETCSL 1.7.4 re-lemmatised (ePSD2 citation forms; ŋ for ĝ). Same 89 lines; no new text. Catalogue lists 3 sources: **P265876** CBS 10673+CBS 10867 (Nippur; Poebel PBS 5 1), **P265765** CBS 10562 (Nippur; TMH NF 1/2 360 / TMH NF 3 55 per ORACC), **P252032** MS 3026 (Schøyen; Volk, forthcoming).
- **P346146** — **Ur version**: UET 6/1 61 + 503 + 691 + 701 (BM), joins by **J. Peterson, "The Divine Appointment of the First Antediluvian King: Newly Recovered Content from the Ur Version of the Sumerian Flood Story", JCS 70 (2018) 37–51**. ORACC has an unlemmatised transliteration (32 lines; obv. 1′–18′, rev. 1′–14′). This is the only substantive textual advance since Civil 1969 that is online.
- No dcclt / obmc / other ORACC project contains the Flood Story (searched the epsd2-literary catalogue; obmc = Old Babylonian Model Contracts, irrelevant).

## Assessment
Best machine-readable, lemmatised (CC0) form of the Sumerian literary corpus; ideal for glossing words while translating (cf + gw + sense per word). For the Flood Story it adds the Ur manuscript; for everything else it mirrors ETCSL with updated lemmatisation.
