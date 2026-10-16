# eBL – electronic Babylonian Library (LMU Munich)

- **Site:** https://www.ebl.lmu.de  (corpus: https://www.ebl.lmu.de/corpus , dictionary: https://www.ebl.lmu.de/dictionary , fragmentarium: https://www.ebl.lmu.de/fragmentarium)
- **API (public, no key):** `https://www.ebl.lmu.de/api/...` – verified 2026-10-16:
  - `GET /api/texts` – all corpus texts with their chapters (~84 texts: Gilgameš, Atraḫasīs, Enūma eliš, Erra, Ludlul, Theodicy, Anzû, Etana, Adapa, Descent of Ištar, hymns, prayers, omen series…).
  - `GET /api/texts/{genre}/{category}/{index}` – text metadata + scholarly introduction. Gilgameš = `L/1/4`; Atraḫasīs = `L/1/1`; Enūma eliš = `L/1/2`.
  - `GET /api/texts/{g}/{c}/{i}/chapters/{stage}/{chapter}/display` – the full chapter: per line the normalized reconstruction (lemmatized), translation, notes, parallels, and every manuscript's transliteration; plus the whole edition as ATF in the `atf` field.
  - `GET /api/words/{lemma}` – dictionary entry (e.g. `zak%C4%81ru%20I`); meanings largely from CDA (Black–George–Postgate), with stems, logograms, forms.
  - `GET /api/bibliography/{id}` – bibliography item (CSL-JSON).
  - (`/api/corpus/...` paths return 404 – the working prefix is `/api/texts/...`.)
- **Retrieved:** 2026-10-16
- **License:** not stated on the API; the corpus editions are scholarly publications with DOIs (`hasDoi: true`). **Treat as copyrighted scholarly work** (edition and translation by A. R. George et al.) – fine for study and quotation with attribution; ask before republishing wholesale. TODO: verify the license on the eBL site / Zenodo.

## Tool

`../../tools/ebl_fetch.py` downloads any eBL corpus chapter and generates a working edition from it (see the script's docstring). It caches everything under `_raw/`.

## Contents

### `Gilgamesh-SB-XI/` – Poem of Gilgameš, Standard Babylonian Tablet XI (the Flood story = ll. 1–206 approx.; ll. 207–328 = the sleep test, the plant of rejuvenation, return to Uruk)

The critical edition by **Andrew R. George** (editor and translator), revised by Geraldina Rozzi and Enrique Jiménez – an updated, digital successor of George, *The Babylonian Gilgamesh Epic* (OUP 2003; cited in the notes as RN117), including joins and NABU notes up to 2026. 328 lines, 18 manuscripts (Nineveh, Aššur, Kalḫu, Babylon), 112 philological notes, 518 lemmas.

| File | What |
|---|---|
| `reading-edition.md` | **Start here.** Per line: normalized Akkadian, George's English translation, lemma glosses, notes, parallel lines, all manuscript transliterations. |
| `chapter.atf` | The same edition in ATF (the standard cuneiform transliteration format). |
| `glossary.md` | All 518 lemmas with eBL dictionary meanings (incl. stem-specific meanings) and the lines where they occur. Note: the short gloss in the reading edition is the lemma's main (usually G-stem) meaning – check the glossary for D/Š/N stems (e.g. *umaššar* is D of *wašāru* = "to release"). |
| `manuscripts.md` | Sigla ↔ museum numbers ↔ George 2003 sigla (e.g. NinNA2a = K 3375 = George's J₁ – the famous "Flood Tablet"). |
| `bibliography.md` | Resolves the `[RN117: 889]`-style keys in the notes (RN117 = George 2003, with page). |
| `_raw/` | Raw API responses (chapter JSON 9 MB, text metadata, 518 dictionary entries, bibliography items). |

**Usefulness:** this is the best available base text for Tablet XI – better than any printed edition, as it is George's own edition updated through 2026. What it lacks: George's full line commentary (in the 2003 book, vol. 2, pp. 878–897 for Tablet XI) – the notes here quote it only selectively.

### Added 2026-10-16 (second fetch, for the flood corpus)
| Folder | Text | Lines | Editors / translator |
|---|---|---|---|
| `Atrahasis-OB-I/` | Atra-ḫasīs OB Tablet I, "When Gods Were Man" | 333 | E. Jiménez, G. Rozzi (ed.); translation B. R. Foster |
| `Atrahasis-SB-I/`, `-SB-II/`, `-SB-III/` | Atra-ḫasīs, SB/Assyrian recension tablets | 120 / 116 / 60 | (see each file's header) |
| `Atrahasis-MB-Bab2/`, `-MB-Priv/`, `-MB-Ug2/` | MB Atra-ḫasīs fragments (Babylon, private collection, Ugarit) | 25 / 9 / 13 | |
| `Erra-SB-I/` | Erra and Išum, Tablet I (Marduk: "in my anger … I caused a flood", I 132ff) | 191 | |
| `Gilgamesh-SB-I/` | Gilgameš SB I (prologue: "he brought back a report from before the flood") | | George |

The other eBL Atra-ḫasīs chapters (OB II, OB III, OB Schøyen, SB IV–X, NA, other MB) had **no lines** on 2026-10-16: the edition is in progress. Re-check with `ebl_fetch.py`.
