# Project 1: the Assyrian prophecies (SAA 9 1–11)

## Scope
All eleven texts of SAA 9 (Parpola 1997), 652 tablet lines, as eleven units of `../prophecy_tools.py` (`S01`–`S11`):

| Unit | SAA 9 | Lines | Annotated file | Translator |
|---|---|---|---|---|
| S01 | 1, Oracles of encouragement to Esarhaddon (ten oracles) | 214 | `annotated-01.rtl.md` | T1 |
| S02 | 2, Oracles concerning Babylon and the stabilization of the king's rule | 144 | `annotated-02.rtl.md` | T2 |
| S03 | 3, The covenant of Aššur | 145 | `annotated-03.rtl.md` | T3 |
| S04–S11 | 4–11, the fragments, the oracles to Assurbanipal (7, 9), the words on Elam (8), the vision (11) | 149 | `annotated-04-11.rtl.md` (one `<!-- unit: SNN -->` marker per text) | T4 |

## Base text
ORACC SAAo `saao/saa09` (Parpola 1997, lemmatised by M. Luukko 2012), CC BY-SA 3.0: `../../sources/ORACC/saao-saa09--Assyrian-Prophecies/` (README there). The backticked line of each entry is the ORACC transliteration (filled by `prophecy_tools.py fill`); the parse follows the SAAo normalization (`norm:` in `prophecy_tools.py data`). Rank 3: Parpola's translation (the `--translation.md` files). No other translation is available in this session (Nissinen's WAW 12, Weippert's studies, Hecker's TUAT translation: not obtained).

## Line numbering
ORACC labels (`o.i.4'` = obverse, column i, line 4′; `r.7` = reverse 7; `b.e.` bottom edge; `t.e.` top edge; `l.e.` left edge). Parpola's **oracle numbers** (1.1–1.10, 2.1–2.6, 3.1–3.5) are not in the data: each annotated file marks its oracles by `## ` section headings, derived from the colophons (*ša pî* / *issu pî* PN) and the rulings (shown by `prophecy_tools.py data`), and numbered in order; where a boundary is uncertain (a break), the heading says so.

## The parallels that matter
"Fear not" + "I am DN" (Gen 15:1; 26:24; Isa 41:10, 13, 14; 43:1, 5; 44:2; Deut 31:6, 8); the shield (`מָגֵן`, Gen 15:1); the heir (Gen 15:3–4); the prophet (Deut 13:2–6; 18:9–22; Jer 28:9); the word written and kept; the divine nurse and mother (Num 11:12; Isa 46:3–4; 49:23; 66:12); the wings (Deut 32:11; Exod 19:4); the throne (2 Sam 7:13); long days (Deut 17:20); the king's mother (`גְּבִירָה`, 1 Kgs 15:13); the covenant meal and the treaty tablet (Exod 24:7–11; Deut 31:9–13, 26); the Rabshakeh's "make you trust" (2 Kgs 18:30); east and west (Ps 113:3; Isa 45:6); "the former things" (Isa 41:22; 43:18).

## Open decisions
(the translators add theirs, numbered)

## Progress
- 2026-10-21: sources secured, renderings fixed (`../renderings.md`), tool written. Drafting: T1–T4 in parallel.
