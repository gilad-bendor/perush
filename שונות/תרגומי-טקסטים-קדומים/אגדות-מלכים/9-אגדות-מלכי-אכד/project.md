# Project 9: The Old Babylonian legends of the kings of Akkade – Round 8 run 4 (2026-11-14)

## Scope
Completes the corpus's Akkade cycle (the Sargon Birth Legend, project 2; the Cuthaean Legend, project 4) with the
Old Babylonian legends of Sargon and Narām-Sîn and the Amarna *šar tamḫāri*. One annotated file per text:
| Key | Text | Base | Entries |
|---|---|---|---|
| CH | Sargon the Conquering Hero (RA 45, 182f.) | SEAL node 1548 | 123 |
| FL | Sargon in Foreign Lands (TIM 9, 48) | SEAL node 1547 | 83 (cols i–iv: labels `i1'` …) |
| LI | Sargon the Lion (MC 7, 94–101) | SEAL node 7525 | 40 (obv. 1'–18'; rev. a score of two witnesses, one entry per composite line) |
| ST | The King of Battle, *šar tamḫāri* (EA 359) | CDLI P270858 (ATF; no lemmas, no English) | 64 |
| RA | The Great Revolt against Narām-Sîn A (MC 7, 16A) | SEAL node 1540 | 41 (labels `o…`, `r…`) |
| RB | The Great Revolt against Narām-Sîn B (MC 7, 16B) | SEAL node 1542 | 38 |
| AP | Narām-Sîn and the Lord of Apišal (AfO 13, 49ff.) | SEAL node 7255 | 71 (cols i–vi) |
| EN | Erra and Narām-Sîn (BiOr 30, 359f.) | SEAL node 1539 | 72 |
Bases converted by `../../tools/seal_base.py` into `../../sources/SEAL/<text>--node-<N>/base.tsv` and
`../../sources/CDLI/<P>--<text>/base.tsv`. SEAL is © HUJI (git-ignored); CDLI ATF is CC0.

## Tools
`../kings_tools.py` key AK (`data`, `pars`, `fill`, `verify`, `build`); gates RESERVED_R8, licensed by SEAL's lemmas or
the folded ATF.

## Progress
| Part | Texts | Status |
|---|---|---|
| AK1 | CH, FL, LI, ST | drafted, three passes; independently reviewed (2026-11-14) |
| AK2 | RA, RB, AP, EN | drafted, three passes; independently reviewed (2026-11-14) |

## Independent review (2026-11-14)
Every entry of the eight files read against the SEAL / CDLI transliteration (fidelity, brackets, lemma slips, line
ends), the repeats checked with `pars AK`, and a lemma → Hebrew map built from the פירוק bullets of AK, RE, ID and
Anzû. **14 `>` lines changed** (apparatus changed with each):
| File | Lines | Kind |
|---|---|---|
| CH | 9 | consistency: *ṭeḫû* `נִגַּשׁ` (§13.7.5: `קָרַב` is *qerēbu*'s), *ṣabātu* `תָּפַס` (§10.4; `אָחַז` is *aḫāzu*'s, ZL i9) |
| FL | i5′; i7′; i13′ | *ṣabātu* `תָּפַס`; the coordinator's `[נצחונו]?` (*ernittu* `נִצָּחוֹן`); fidelity: *appašu* was dropped at the line end (`ליטף את` → `ליטף את אפו;`) |
| LI | 8″, 10″; 15″ | *ṭeḫû* `ייגש`; *gaṣṣu* `הרצחני` (= GU 29′; was `חורק־השן`) |
| ST | 10′ | *ṭeḫû* Gt `ניגש (אל) כיסאו` |
| RB | 25 | fidelity: `בחלקת?` added a word the line lacks (RB has no A.ŠÀ, unlike RA o13) → `באוּגָר־סִין` |
| AP | ii3; ii5; vi5; vi13 | `אֵל הארץ` vocalized (read "to the land"); *e-da-{ta}-am qarnīn* = BZ 37 `חד־הקרניים` (was `…`); *ṭeḫû* `ייגש`; Narām-Sîn ★ vocalized |
| EN | 30 | fidelity: *šarrašu* `את מלכו` (was "her king") |
Notes and headers: `ברית` removed from the EN intro and three notes (not licensed: no *riksu* in AK); LI's intro
and `project--AK1.md` / `--AK2.md` rows follow the changed lines. `translation--intro.rtl.md` written; `build AK`,
`verify AK --strict` OK (532); `check_bible_quotes.py` 0 problems.
**Open:** EN 59's transliteration is corrupt in the base (`d}_La-az_ " ts="šar-ra-tu-um" me="queen">…`: SEAL HTML
attributes leaked through `seal_base.py`) – fix the converter and re-`fill`; ST 21 / 24′ *inne(p)pušā* N preterite
or present (left as drafted); the print stub (`הדפסה/אגדות-מלכים/9-…`) and a layout module do not exist yet.
