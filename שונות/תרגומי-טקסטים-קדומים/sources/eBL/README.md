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

### Added 2026-10-16 (third fetch: Enūma eliš, for the creation corpus)
| Folder | Text | Lines | Editors / translator |
|---|---|---|---|
| `Enuma-elish-SB-I/` … `Enuma-elish-SB-VII/` | *Enūma eliš* ("Poem of Creation", eBL `L/1/2`), Standard Babylonian, Tablets I–VII | 162 / 162 / 138 / 146 / 158 / 166 / 166 = 1,098 | A. C. Heinrich (ed.), with Z. J. Földi and E. Jiménez (revision); translation B. R. Foster (with A. A. Fadhil; Arabic for I and VII) |

- 23–75 manuscripts per tablet (Nineveh, Aššur, Kiš, Sippar, Babylon, Uruk, school tablets and commentaries). Each folder has the usual files (`reading-edition.md`, `glossary.md`, `manuscripts.md`, `bibliography.md`, `chapter.atf`, `_raw/`).
- **Variant reconstructions:** eBL gives some lines two reconstructions (e.g. I 40: *qūlu liššakin-ma i niṣlal nīnu* and, in other manuscripts, *[…] mūšiš lū nēḫet*). `ebl_fetch.py` was fixed on 2026-10-16 to print them (`**N (variant, other manuscripts):**`) with their manuscripts; before, the second variant and its manuscripts were silently dropped. Count per tablet: I 8, II 2, III 2, IV 3, V 3, VI 11, VII 7.
- **Parallel lines:** eBL lists, per line, the other lines of the poem that repeat it (Tiāmat's army I 129–162 = II 15–48 = III 19–52 = III 77–110, Marduk's conditions II 156–162 = III 58–64 = III 116–122, etc.). The project uses them to verify that repeated lines are translated identically.
- **Usefulness:** the base text of the creation corpus project `סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`. It supersedes King 1902, Langdon 1923 and Talon 2005, and incorporates many fragments that Lambert 2013 and Kämmerer & Metzler 2012 did not have. The eBL translation (Foster) is a rank-3 check; Lambert 2013 (*Babylonian Creation Myths*) is not available (paid).
- **License:** as for the other eBL editions (treated as copyrighted; gitignored by `eBL/*/`).

### Added 2026-10-16 (creation corpus, project 2)
| Folder | Text | Lines | Editors / translator |
|---|---|---|---|
| `Adapa-MB/` | *Adapa*, Middle Babylonian (Amarna, VAT 348 = EA 356), eBL `L/1/7` | 78 (primed numbering 1′–78′; obv. 1′–37′, rev. 38′–78′ approx.) | T. D. N. Mitto (ed.), rev. Z. J. Földi, A. C. Heinrich, E. Jiménez; translation B. R. Foster |
| `Adapa-SB/` | *Adapa*, Standard Babylonian / NA fragments (MLC 1296, K 15072, K 8743, K 8214, K 9994; Rm 618 quotation) | 97 | same |
Fetched with `tools/ebl_fetch.py L 1 7 "Middle Babylonian" -` and `… "Standard Babylonian" -`. Gitignored (§8). The eBL introduction mentions the Sumerian Adapa (Meturan and Nippur) and parallels to it in the notes; that version is not in eBL's corpus and was not fetched.

### Added 2026-10-17 (the Gilgameš corpus, `אפוס-גילגמש/`)
| Folder | Text | Lines (eBL labels) | Editors / translator |
|---|---|---|---|
| `Gilgamesh-SB-II/` … `Gilgamesh-SB-X/`, `Gilgamesh-SB-XII/` | *Poem of Gilgameš* (eBL `L/1/4`), Standard Babylonian Tablets II–X, XII (I and XI were fetched on 2026-10-16) | II 187, III 209, IV 175, V 274, VI 183, VII 219, VIII 206, IX 137, X 325, XII 139 | A. R. George (ed.), rev. G. Rozzi, E. Jiménez; translation George |
| `Gilgamesh-OB-VA-BM/`, `-OB-II/`, `-OB-III/`, `-OB-Schoeyen2/`, `-OB-Nippur/`, `-OB-Harmal1/`, `-OB-Ishchali/`, `-OB-Harmal2/`, `-OB-IM/` | the Old Babylonian chapters (`"Old Babylonian" "VA+BM"`, `"II"`, `"III"`, `"Schøyen₂"`, `"Nippur"`, `"Harmal₁"`, `"Ishchali"`, `"Harmal₂"`, `"IM"`) | 87, 145, 219, 94, 26, 21, 47, 59, 45 | George (with A. C. Heinrich, M. Schlegelmilch and others, per file header) |
Fetched with `tools/ebl_fetch.py L 1 4 "Standard Babylonian" <T> …` and `… "Old Babylonian" "<name>" …` (folder names ASCII: ₁ → 1, ø → oe, + → -). eBL also has OB UM, Schøyen₁, Schøyen₃, CUNES, SM and thirteen MB/NA chapters (`curation-surveys/availability-survey--2026-10-16.md`), not fetched. Gitignored (§8). **Usefulness:** the base texts of the Gilgameš corpus; the `Parallels:` field links every repeated line across SB tablets and to the OB/MB versions, which `אפוס-גילגמש/verify.py` uses. Note: lemma slips occur (I 100 *ṣēri* lemmatized "back").
