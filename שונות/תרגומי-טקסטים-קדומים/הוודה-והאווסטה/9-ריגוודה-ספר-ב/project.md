# 9-ריגוודה-ספר-ב – the Rigveda, Book 2, whole (RV 2.1–2.43)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (binding; Book 2's pre-set terms:
§5.6, its names: the §3.1 rows marked "(RV 2)" – the "(RV 7)" rows apply here too –, its formulas: §8 F9–F11); brief
`../translator-brief--vedic.md`. **Book 7 (`../7-ריגוודה-ספר-ז/`) is the model**: its Hebrew for every lemma it
fixed binds this book (`freq`, `lexmap`), and the Round 7 harmonization (`../../harmonization--2026-11-13.md`) binds it:
the Vedic–Avestan cognate pairs (*mántra* `מנתרה`, *ukthá* `אמירה`, *vīrá* `גיבור`, *gír* `שיר`) and the Rigveda's
reserved root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` (renderings §7.4).

## Scope
The whole of Book 2 (the *maṇḍala* of the Gṛtsamada family, the smallest of the family books): **43 hymns, 429
stanzas, 1,694 pādas** (VedaWeb's Zurich text; `python3 -I -B ../vedic_tools.py units`). Round 8 run 3 (2026-11-14 →),
candidate `iran-india-01` of `../../translation-program.md` (approved with the program; under the 3,000-line rule of
guidelines §1).
- One KEY per hymn, `RV2.1` … `RV2.43`; one annotated file per hymn, `annotated-RV2.<n>.rtl.md`, with its
  `translation--intro-RV2.<n>.rtl.md`; the builder makes `translation-RV2.<n>.rtl.md` and this project's
  `translation.rtl.md` (the whole book, in order; head: `translation--head.rtl.md`). `RV2` = all of Book 2 and
  `RV2.1-10` = a range, in `verify`, `build` and `freq`.

## Base and tools
- Base: VedaWeb, the Zurich text with its human-made morphology (CC BY 4.0), `../../sources/VedaWeb/rv_2.<nnn>--zurich.tsv`
  (made by `vedic_tools.py convert` from `rv_book_02.tei`, downloaded 2026-11-14). Line unit: the pāda (`1a`); RV 2.22
  has 7- and 8-pāda stanzas (`e`–`h`): **the converter read only `a`–`g` until this run** and dropped 2.22.1h and 2.22.4h
  (1,692 rows against the TEI's 1,694 `_zur_` lines); fixed (`a`–`j`) before the first line. No other converted book
  has an `h` pāda in a unit we translate (RV 1.127.6h exists in Book 1, not a unit).
- Dictionaries: Grassmann (`gra`), Monier-Williams (`mw`). Rank 3 (after drafting): `tr` (Griffith, Grassmann, Geldner,
  Elizarenkova), **Jamison's commentary on Book II**, `../../sources/Jamison--Rigveda-commentary/II-9-25-26.txt`
  (downloaded and extracted this run; grep `II.12` etc.; © – quote briefly, with attribution).
- `vedic_tools.py freq RV2.<a>-<b>`: the commonest lemmas of a range with the Hebrew already fixed for them (Book 7's
  and the corpus's); `lexmap '<folded lemma regex>'` (e.g. `'^daksin'`) for a lemma's Hebrew so far. Lemmas written
  with `~` by Zurich (*dyú* ~ *div*, *rayí* ~ *rāy*, *gó* ~ *gáv*, *gír*, *pánthā* ~ *path*) show "—" in `freq`: their
  Hebrew is fixed (`שמים`, `עושר`, `פרה` / `שור`, `שיר`, `דרך`).

## Coordinator's notes (Round 8 run 3)
- Fixed before drafting (2026-11-14): the renderings §5.6 (Book 2's own key terms), the §3.1 "(RV 2)" names, the
  formulas F9 (the Gṛtsamada refrain *bṛhád vadema vidáthe suvī́rāḥ*, which closes 22 hymns: `נדבר נא (בקול) רם במועצה,
  רבי־גיבורים`), F10 (2.15), F11 (2.12); the tool's Book 2 keys and project; the converter's `h` fix.
- **The book's own repetitions:** 28 repeated pādas (102 occurrences): the refrain F9 (22 copies); the Indra closing
  stanza 2.11.21abc = 2.15.10 = 2.16.9 = 2.17.9 = 2.18.9 = 2.19.9 = 2.20.9 (*nūnáṃ sā́ te práti váraṃ jaritré / duhīyád
  indra dákṣiṇā maghónī / śíkṣā stotŕ̥bhyo mā́ti dhag bhágo naḥ*); 2.15.2–9d (F10); 2.25.1–5d (*yáṃ-yaṃ yújaṃ kr̥ṇuté
  bráhmaṇas pátiḥ*); 2.13.2–4d; 2.22.1–3 (the last two pādas); 2.23.19c = 2.24.16c = 2.35.15c; 2.27.17abc = 2.28.11abc
  = 2.29.7abc; 2.1.16abc = 2.2.13abc; 2.13.13abc = 2.14.12abc; 2.23.19ab = 2.24.16ab; 2.12.14b = 2.20.3c; 2.32.6d =
  2.41.17d. **With Book 7 and RV 1.32:** 2.11.2b = 7.21.3b, 2.15.1c = 1.32.3b, 2.18.7d = 7.23.5d, 2.21.2b = 7.46.1c,
  2.38.11c = 7.8.6c. `data` shows every identical and similar line with the Hebrew already given: **the later copy
  copies the first copy's Hebrew exactly** (guidelines §5.2; `verify` lists differences).
- **The parts** (translators strictly one after another – range A: one agent at a time; an independent fidelity
  reviewer reads each finished part before the next translator starts):

| Part | Hymns | Pādas | Content |
|---|---|---|---|
| 1 | 2.1–2.10 | 337 | Agni (2.1 the litany of identifications "you are Indra … you are Varuṇa"; 2.3 the Gṛtsamada Āprī hymn) |
| 2 | 2.11–2.16 | 320 | Indra – **2.12 "he, o people, is Indra"** (the creed against the doubters); 2.15 the refrain of deeds |
| 3 | 2.17–2.24 | 338 | Indra; 2.22 the soma-drinker; **Brahmaṇaspati 2.23–24** (the god of the formulation opens the Vala cave) |
| 4 | 2.25–2.33 | 340 | Brahmaṇaspati 2.25–26; the Ādityas 2.27; **Varuṇa 2.28** (the fetter, the debt, the bad dream); the All-Gods 2.29, 2.31; 2.30; 2.32 (Rākā, Sinīvālī); **Rudra 2.33** (the healer) |
| 5 | 2.34–2.43 | 359 | the Maruts 2.34; **Apāṃ Napāt 2.35**; the season-cups 2.36–37; Savitṛ 2.38 (evening); the Aśvins 2.39; Soma and Pūṣan 2.40; 2.41 (Sarasvatī "best of mothers"); **the omen bird 2.42–43** |

<!-- The translators insert their sections here, above "## Parallels index". -->

## Parallels index
