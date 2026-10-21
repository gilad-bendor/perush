# eBL fragmentarium — the manuscripts of the Sargon Birth Legend (K 3401 + Sm 2118, K 4470, BM 47449, K 7249)

- **Source:** electronic Babylonian Library (LMU Munich), fragmentarium API `https://www.ebl.lmu.de/api/fragments/<museum-number>`
  (`K.3401`, `Sm.2118`, `K.4470`, `BM.47449`, `K.7249`).
- **Retrieved:** 2026-10-21.
- **Licence:** eBL data (transliterations, catalogue records) — treated like every eBL download in this repository
  (guidelines §8): **git-ignored** (this folder's `.gitignore`; only this README is committed). Re-obtain with
  `python3 -I tools/sources_sync.py fetch` (its built-in eBL fragment rule) or `curl -sS https://www.ebl.lmu.de/api/fragments/K.3401`.

## What eBL has (2026-10-21)
| Museum no. | eBL record | Transliteration |
|---|---|---|
| K 3401 + Sm 2118 (CDLI P365306) | "legend concerning Sargon I, 17 lines"; CT 13 42; 3 R 4/7; Westenholz 1997 pp. 36–49 (edition), photo p. 380 | **none** |
| K 4470 (P365307) | "Sargon of Agade, 12 lines"; CT 13 43; Westenholz pp. 36–49 | **none** |
| BM 47449 = 81-11-3,154 (P365303) | NB school tablet from Babylon: obv. sign exercise, rev. lexical/syllabic practice, "literary, partial duplicate to the Sargon birth legend"; CT 13 43; Pinches, PSBA 18 (1896) 257; Westenholz pp. 36–49; Jiménez 2018 (Orientalia, *New Fragments and Extracts of Akkadian Disputation and Fables*) pp. 155–156 (copy, edition) | rev. col. 3′ is labelled "(Sargon Legend)" **without lines**; **col. 4′ has 17 lines** (below) |
| K 7249 (CT 46 46) | 16 lines, NA; Westenholz pp. 13, 15, 36–49 | **none** |

A transliteration search of the fragmentarium (`/api/fragments/query?transliteration=…`) for `a-zu-pi-ra-ni`
and `en-e-tu` found nothing (2026-10-21): eBL has not transliterated the legend.

## Files (git-ignored)
- `K.3401.json`, `Sm.2118.json`, `K.4470.json`, `BM.47449.json`, `K.7249.json` — the API records (catalogue, references).
- `BM.47449.atf` — eBL's ATF of BM 47449, rev. col. 4′ (the only transliterated lines): `11. (x) gu₂-gal-li-ia`,
  `12. ana# mar-ri-ia`, `13. A-MEŠ ul a-ṣa-pi`, ruling, `14.–17.` traces (`[(x) b]u-u₂`, `[(x)] a#?-bi# ib?-ri` …).
  eBL cites the tablet's edition in Jiménez 2018, a study of **disputation and fable extracts** from Babylonian
  schools: col. 4′ is most likely one of those extracts, not the Sargon legend.

## Usefulness
Catalogue and bibliography for the manuscripts; BM 47449 col. 4′ is *not* translated as part of the legend (see above);
`אגדות-מלכים/2-אגדת-הולדת-סרגון/project.md` records it. The base text is King 1907 (`../King-1907--…/`).
