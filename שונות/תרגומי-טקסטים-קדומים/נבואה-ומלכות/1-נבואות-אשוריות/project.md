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
Each translator's numbered list is in its notes file (`notes-S01.md` 11, `notes-S02.md` 14, `notes-S03.md` 14, `notes-S04-S11.md` 16): mostly minor (a crux, a section boundary in a break, a word's sense), for the next session on this corpus to decide (the user's rule). The cross-unit collisions were settled by the coordinator on 2026-10-22 (`../renderings.md` §7, "In-corpus harmonization"); the cross-corpus ones that remain (*dalālu*, *giššu*, *naglabu*, *ḫangāru*, *ḫabūnu*) are listed there for the lead's next harmonization. Nothing here needs the user.

## Progress
- 2026-10-21: sources secured, renderings fixed (`../renderings.md`), tool written. The four translators, started in parallel, all stopped at their start on the session limit (HTTP 429); nothing was lost.
- 2026-10-22: resumed one at a time, after aligning the renderings with Etana (*agappu* `אֲגַף`, *ṣerru* `נָחָשׁ`): T1 S01 (214 lines), T2 S02 (144), T3 S03 (145), T4 S04–S11 (149) – each with three review passes (in its notes file), `verify` and `check_bible_quotes.py` clean; each later translator followed the earlier files' Hebrew. The coordinator merged the Proposals after each translator (`../renderings.md` §7), fixed `tools/cdl2md.py` (compound logograms printed twice; the sources regenerated and the drafts refilled), harmonized the in-corpus collisions (*aggu*, *etku*, *izīru*, *tabāku*), re-checked every pre-set formula against the drafts, and built `translation.rtl.md` (652 lines, 31 footnotes; `../prophecy_tools.py build PROPH`, `verify --strict` clean). **First draft complete**, not yet reviewed by the user.
