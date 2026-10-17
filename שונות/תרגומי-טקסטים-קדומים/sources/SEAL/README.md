# SEAL — Sources of Early Akkadian Literature (Atra-ḫasīs and Flood texts)

- **Site:** https://seal.huji.ac.il — "A Text Corpus of Babylonian and Assyrian Literary Texts from the 3rd and 2nd Millennia BCE"
- **Editors:** Michael P. Streck (Leipzig) & Nathan Wasserman (Hebrew University of Jerusalem); Atra-ḫasīs Flood pages catalogued/edited by N. Wasserman (2018–2021), indexing Y. Tulaikova.
- **Retrieved:** 2026-10-16 (all pages below).
- **License:** unknown. Free online access; the site footer links only to the Hebrew University's generic copyright page. Treat as © SEAL / HUJI; cite as "SEAL no. NNNN". Tablet photos are © the owners (British Museum / Simmonds collection for the Ark Tablet; Penn Museum for CBS 13532).

## Folder layout
Each text = raw page `node-NNNN--<name>.html` + clean extraction `node-NNNN--<name>.md` (UTF-8; diacritics and ⌈ ⌉ [ ] exactly as on the site; `<sup>` kept for determinatives; manuscript subscripts as Unicode C₀/C₁; under every line a `lemmas:` line with SEAL's lemma + English gloss). Italics (Akkadian vs. logogram) are only in the HTML.

| Sub-folder | SEAL no. | Text | Content |
|---|---|---|---|
| `Atrahasis-OB/` | 1515 | Atraḫasis I (all periods) | composite score of Tablet I, all manuscripts, with translation (large) |
| | 39732 | Atraḫasis II (all periods) | composite score of Tablet II |
| | 1516 | Atraḫasis OB II (Sippar) | catalogue entry only (no text) |
| | **1517** | **Atraḫasis OB III (Sippar)** | **Flood section, Ms. C1 + C2 (Ipiq-Aya), ~300 lines, transliteration + translation** |
| | 1518 | Atraḫasis OB II–III (Larsa) | Ms. C0 = Schøyen MS 5108, flood section (iv 1'–20') |
| | 1519 | Atraḫasis OB II excerpt | catalogue entry only |
| `Atrahasis-MB/` | 1520 | MB Flood (The Ark Tablet) | Ms. Ark, 60 lines, full translit. + translation (begins "Wall, wall! Reed fence, reed fence!") |
| | 1562 | MB Flood (Nippur) | Ms. J, CBS 13532 |
| | 1561 / 27122 / 27124 | MB Flood (Ugarit 1/2/3) | Mss. I (RS 22.421), I1, I2 |
| | 1559 | MB Flood (Ḫattuša) | Ms. J1, KBo 36, 26 |
| | 1560, 27123, 27126 | MB I / I–II / II (Babylon) | catalogue entries only (text in the "all periods" composites) |
| | `images/` | | Ark Tablet photos (obv., rev., edges; from SEAL, originally BM) and CBS 13532 photo |
| `Atrahasis-Later-SB-NA-LB/` | 27127 | SB Flood (Nineveh) | Ms. W (DT 42) |
| | 27128 | NA Flood (Nineveh) | Ms. U (BM 98977+99231) |
| | 27129 | LB Flood | Ms. z (MMA 86.11.378A) |
| `Gilgamesh-XI-Flood/` | 27120 | Gilg. XI Flood | Gilgameš XI flood section (lines numbered "Gilg. XI n"), translit. + translation |

## Line numbering
Manuscript siglum + column + line exactly as on the tablet (`C₁ i 2`, `C₂ i 11'`, `Ark 12`, `Gilg. XI 1`); identical to Wasserman 2020 (OBO 290). Translations are given per line-group (e.g. `C₀ iv 3'–4'`). The "all periods" composites interleave manuscripts per line (`B i 1`, `D i 1`, `Q-NA obv. 9`, …) using Lambert & Millard sigla.

## Assessment
Excellent for translation work: authoritative (= Wasserman 2020 edition), every word lemmatised with gloss, fully searchable text. Best machine-readable base for OB Atra-ḫasīs III (node 1517) and all MB/NA/LB flood fragments, and for Tablets I–II via the composites. Caveats: sign-level conventions slightly idiosyncratic (e.g. erasures as `{AT{`); some catalogue nodes are empty; no Tablet III "all periods" composite (the Flood is split by manuscript).

## Added 2026-10-16 (creation corpus, project 2)
| Sub-folder | SEAL no. | Text | Content |
|---|---|---|---|
| `KAR-4/` | **1600** | **KAR 4** ("When heaven had been separated from earth"), bilingual Sumerian–Akkadian, MA/NA | mss. A = VAT 9307 (Assur), B = K 4175+ (Nineveh), C = A 17643 (Chicago); 191 SEAL lines = about 75 composite lines with Sumerian line + Akkadian line (empty label `↳` = the Akkadian line), lemmatised Akkadian, line-by-line English translation (with "Akk." / "B" variants) |
| `Adapa-MB-EA-356/` | 1557 | EA 356, Adapa and the South Wind (MB, Amarna) | transliteration only (no translation), 71 lines; second opinion on eBL `L/1/7` MB |
Downloaded with a browser User-Agent (SEAL returns an error page to curl's default UA) and converted with the new `../../tools/seal2md.py`.

## Added 2026-10-17: `CH-Prologue-Epilogue--node-7520/`
- **SEAL 7520**, "CH Prologue and Epilogue (Hammurāpi)" (M. P. Streck): the prologue (col. i–v) and epilogue (col. xlvii–li) of the Laws of Hammurabi on the Louvre stele, 800 lines, transliteration, **per-word lemmas**, and Streck's English translation (one paragraph, numbered by line). Raw `node-7520.html` (930 KB) + `node-7520.md` (`tools/seal2md.py`). Gitignored (SEAL/*).
- **Numbering:** SEAL's columns use the continuous stele numbering (I–XXIII obverse, XXIV–LI reverse): col. i–v = CDLI stele obv. 1–5 = composite lines 1–303; col. xlvii–li = stele rev. 24–28 = composite 3144′–3641′. Lines match the stele lines one to one.
- **Readings differ from CDLI in places** (e.g. epilogue xlvii 1 *ki-na-a-at* where CDLI reads *di-na-a-at*): compare both.
- Used as the second opinion and the lemmatisation for the prologue and epilogue of `חוקים-ובריתות/2-חוקי-חמורבי/`.
