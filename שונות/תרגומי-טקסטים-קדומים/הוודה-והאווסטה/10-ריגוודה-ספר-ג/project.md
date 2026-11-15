# 10-ריגוודה-ספר-ג – the Rigveda, Book 3, whole (RV 3.1–3.62)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 3's pre-set terms:
§5.7, its names: the §3.1 rows marked "(RV 3)" – the "(RV 7)" and "(RV 2)" rows apply here too –, its formulas: §8
F12–F14); brief `../translator-brief--vedic.md`. **Books 7 and 2 (`../7-ריגוודה-ספר-ז/`, `../9-ריגוודה-ספר-ב/`) are the
models**: their Hebrew for every lemma they fixed binds this book (`freq`, `lexmap`), and the harmonizations of
2026-11-13 and 2026-11-15 bind it (the Vedic–Avestan cognate pairs; the Rigveda's reserved root חטא, `פשע`, `סליחה`,
`וידוי`, `חרון`: renderings §7.4).

## Scope
The whole of Book 3 (the *maṇḍala* of Viśvāmitra and the Kuśikas): **62 hymns, 617 stanzas, 2,357 pādas** (VedaWeb's
Zurich text; `python3 -I -B ../vedic_tools.py units`). Round 9 run 1 (2026-11-15 →), candidate `iran-india-02` of
`../../translation-program.md` (approved with the program; under the 3,000-line rule of guidelines §1).
- One KEY per hymn, `RV3.1` … `RV3.62`; one annotated file per hymn, `annotated-RV3.<n>.rtl.md`, with its
  `translation--intro-RV3.<n>.rtl.md`; the builder makes `translation-RV3.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order; head: `translation--head.rtl.md`). `RV3` = all of Book 3 and
  `RV3.1-7` = a range, in `verify`, `build`, `freq` and `convert`.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_3.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert RV3` from `rv_book_03.tei`, downloaded 2026-11-15). Line unit: the pāda (`1a`).
  **Counted before the first line:** 2,357 converted rows = the TEI's 2,357 `_zur_` lines; 62 hymns, 617 stanzas.
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova, Renou), **Jamison's commentary on Book III**, `../../sources/Jamison--Rigveda-commentary/III-9-25-26.txt`
  (downloaded and extracted this run; grep `III.33.` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV3.<a>-<b>`; `lexmap '<folded lemma regex>'`; `grep '<Hebrew>' --all`. Lemmas written with `~`
  by Zurich (*dyú* ~ *div*, *rayí* ~ *rāy*, *gó* ~ *gáv*, *gír*, *sá* ~ *tá*) show "—" in `freq`: their Hebrew is fixed
  (`שמים`, `עושר`, `פרה` / `שור`, `שיר`).

## Coordinator's notes (Round 9 run 1)
- Fixed before drafting (2026-11-15): renderings §5.7 (Book 3's key terms), the §3.1 "(RV 3)" names, the formulas F12
  (3.55's refrain), F13–F13d (the Indra refrain), F14–F14d (the Agni refrain), three selftest lines; the tool's Book 3
  keys and project (`P10`), `convert KEY…` (a fresh VM need not hold every TEI), the name rows' "(RV n)" scope by regex.
- **The book's own repetitions:** F12 (22 copies, 3.55.1–22d); the Indra closing stanza F13 (12 copies: 3.30.22,
  31.22, 32.17, 34.11, 35.11, 36.11, 38.10, 39.9, 43.8, 48.5, 49.5, 50.5); the Agni closing stanza F14 (7 copies:
  3.1.23, 5.11, 6.11, 7.11, 15.7, 22.5, 23.5); *índrasya kárma súkr̥tā purū́ṇi* (3.30.13d, 3.32.8a, 3.34.6b). `data`
  shows every identical and similar line in the whole corpus with the Hebrew already given: **the later copy copies the
  first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another – this run's share is one agent at a time; an independent
  fidelity reviewer reads each finished part before the next translator starts):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 3.1–3.7 | 372 | Agni: 3.1 (the birth of the fire in the waters and the plants, 23 stanzas, with the first copy of F14); Vaiśvānara 3.2–3; **the Viśvāmitra Āprī hymn 3.4**; 3.5–7 |
| 2 | 3.8–3.17 | 297 | **the sacrificial post 3.8** (*yū́pa*, *vánaspati*); Agni 3.9–11; Indra and Agni 3.12; Agni 3.13–17 |
| 3 | 3.18–3.29 | 316 | Agni 3.18–25; Vaiśvānara 3.26 (the Kuśikas); 3.27; 3.28 (the cakes of the three pressings); **3.23 and 3.29: the fire churned from the sticks** (Devaśravas and Devavāta; the track of Iḷā) |
| 4 | 3.30–3.33 | 296 | Indra 3.30–32 (the first copies of F13); **Viśvāmitra and the rivers 3.33** |
| 5 | 3.34–3.43 | 355 | Indra 3.34–43 (the Vala myth 3.31 / 3.39; the soma) |
| 6 | 3.44–3.53 | 308 | Indra 3.44–52 (3.48 the newborn Indra drinks the soma; 3.52 the cakes); **3.53: Viśvāmitra, the Bharatas and Sudās, the curses on the Kīkaṭas, Sasarparī** |
| 7 | 3.54–3.62 | 413 | **the All-Gods 3.54–55 ("the one great lordship")**, 3.56–57; the Aśvins 3.58; **Mitra 3.59**; the Ṛbhus 3.60; Dawn 3.61; **3.62 with the Gāyatrī (3.62.10)** |

<!-- The translators insert their sections here, above "## Parallels index". -->

## Parallels index
(Generated at the end from the translators' sections and the הקבלה bullets; see `../parallels-index.md`.)
