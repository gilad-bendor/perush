# 7-ריגוודה-ספר-ז – the Rigveda, Book 7, whole (RV 7.1–7.104)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 7's pre-set terms:
§5.5, its names: the §3.1 rows marked "(RV 7)", its formulas: §8 F6–F8); brief `../translator-brief--vedic.md`.

## Scope
The whole of Book 7 (the *maṇḍala* of the Vasiṣṭha family): **104 hymns, 841 stanzas, 3,190 pādas** (VedaWeb's Zurich
text; `python3 -I -B ../vedic_tools.py units` lists each hymn's count). Approved whole by the user on 2026-11-02 (the
rule for texts of 3,000 lines and more, guidelines §1). Round 7 run 1 (2026-11-09 →).
- One KEY per hymn, `RV7.1` … `RV7.104`; one annotated file per hymn, `annotated-RV7.<n>.rtl.md`, with its
  `translation--intro-RV7.<n>.rtl.md`; the builder makes `translation-RV7.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order). `RV7` = all of Book 7 and `RV7.1-17` = a range, in `verify`, `build`
  and `freq`.
- **RV 7.103 (the frogs)** was translated in Round 5 run 1 in project 6 (`../6-המהמר-והצפרדעים/`); it now lives here
  (moved 2026-11-09), and project 6 keeps its title and **embeds** it (`vedic_tools.py` `PROJECT_EMBEDS`): its clean
  translation is generated from this file. It is revised in the last part to the book's renderings.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_7.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert` from `rv_book_07.tei`). Line unit: the pāda (`1a`); the base has a few 5- and
  7-pāda stanzas (`e`, `f`, `g`).
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova), **Jamison's commentary on Book 7**, `../../sources/Jamison--Rigveda-commentary/VII.1–55-9-25-26.txt` and
  `VII.56–104-9-25-26.txt` (grep `VII.18` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV7.<a>-<b>`: the commonest lemmas of a range with the Hebrew already fixed for them.

## Coordinator's notes (Round 7 run 1)
- Fixed before drafting (2026-11-09): the renderings §5.5 (Book 7's key terms), the §3.1 "(RV 7)" names, the formulas
  F6 (the Vasiṣṭha refrain *yūyám pāta svastíbhiḥ sádā naḥ*, which closes 76 hymns: `אתם, שמרו עלינו בשלום תמיד`),
  F7 (7.89), F8 (7.49); the traps `מַרוּטִים` and `אָרְיָה`; the tool's Book 7 keys, `freq`, the 7.103 embedding.
- **The book's own repetitions:** 69 pādas recur (227 occurrences; the refrain F6 aside, e.g. 7.28–30.5 = one closing
  stanza, 7.39.7 = 7.40.7, 7.99.7 = 7.100.7, 7.60.12 = 7.61.7, 7.62.6 = 7.63.6, 7.84.5 = 7.85.5, 7.20.10 = 7.21.10,
  7.1.20 = 7.1.25, 7.3.10 = 7.4.10, 7.67.10 = 7.69.8). `data` shows every identical and similar line with the Hebrew
  already given: **the later copy copies the first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another; an independent fidelity reviewer reads each finished part
  beside the next translator):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 7.1–7.9 | 350 | Agni (7.2 the Āprī hymn; 7.5–6 Vaiśvānara) |
| 2 | 7.10–7.19 | 327 | Agni; Indra – **7.18 the battle of the ten kings** |
| 3 | 7.20–7.31 | 316 | Indra (7.21.5 the *śiśnadeva*) |
| 4 | 7.32–7.37 | 348 | Indra; **7.33 Vasiṣṭha's birth and the Vasiṣṭhas**; the All-Gods (7.35 the *śám* litany) |
| 5 | 7.38–7.55 | 391 | Savitṛ, Bhaga, Dadhikrā, Rudra, the Waters, the Ṛbhus, the Ādityas, Heaven and Earth, Vāstoṣpati, 7.55 the sleep charm |
| 6 | 7.56–7.63 | 299 | the Maruts; Mitra–Varuṇa, Sūrya |
| 7 | 7.64–7.74 | 344 | Mitra–Varuṇa; the Aśvins |
| 8 | 7.75–7.88 | 332 | Uṣas; Indra–Varuṇa; **Varuṇa 7.86–88** (Vasiṣṭha's sin and the god's friendship) |
| 9 | 7.89–7.97 | 246 | 7.89 (the house of clay); Vāyu, Indra–Agni, Sarasvatī, Bṛhaspati |
| 10 | 7.98–7.104 | 241 | Indra, Viṣṇu, Parjanya, the frogs (7.103: revise to the book's renderings), **7.104 against the demons** |

<!-- The translators insert their sections here, above "## Parallels index". -->

## Parallels index
(Generated from the הקבלה bullets by `../build_parallels_index.py`.)
