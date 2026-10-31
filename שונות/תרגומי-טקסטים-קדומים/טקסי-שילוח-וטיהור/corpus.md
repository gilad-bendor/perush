# Corpus: rituals of sending away and of purification → Hebrew (`טקסי-שילוח-וטיהור/`)

Read `../translation-guidelines.md` first, then this file, then `renderings.md` here and the Hittite tables of
`../חוקים-ובריתות/renderings.md` (§7, §H2–§H9), the translator brief `../חוקים-ובריתות/translator-brief--hittite.md`,
and the project's `project.md`.

## Goal
The rites that remove evil from a person, a camp, a house or a land by loading it on a carrier and sending it away, or
by purifying with blood, water and substitutes: the ancient world's answers to the question of Lev 14 and 16 (the goat
for Azazel, the released bird) and Lev 4, 8, 12, 15 (purification). Founded 2026-10-24 (Round 4 run 6) with the Hittite
elimination rituals; the place for the later dossier of world list §5E (`../curated-translation-candidates--world.md`:
Ebla ARET 11, KTU 1.40, the Kizzuwatna blood rites, the Norito Ōharae, the Iguvine Tables …) and for Muršili's Plague
Prayers if a later round wants them beside the rites.

## The texts
| # | Project folder | Text | Language, date | Relation to the Torah |
|---|---|---|---|---|
| 1 | `1-טקסי-השילוח-החתיים/` | The elimination rituals of **Ašḫella** (CTH 394), **Uḫḫamuwa** (CTH 410), **Puliša** (CTH 407), **Ambazzi** (CTH 391.1–2) | Hittite with Luwian words; Arzawa / Kizzuwatna traditions, NS copies (14th–13th c. BCE) | Lev 16:8–10, 20–22 (Azazel); Lev 14:4–7; 1 Sam 6; Zech 5:5–11 |

## Shared conventions
- The Hittite language tables (names, gates, formulas, traps) are shared with the law corpus and read by
  `../tools/hittite_tools.py` from both renderings files; this folder's `renderings.md` adds the ritual terms (§R1) and
  the ritual names (§H2).
- The danger and the method: `renderings.md` (intro). The Lev 14 / 16 words are gated to their real Hittite counterparts
  or reserved; the comparison lives in the apparatus.
- Parallels index: each project's in its `project.md`, merged here in `parallels-index.md` by Bible verse.

## Status
| # | Project | Status |
|---|---|---|
| 1 | `1-טקסי-השילוח-החתיים/` (AS 109, UH 33, PU 56, AM 260, AM2 23 clauses) | **Complete** 2026-10-30 (Round 4 run 6 sub 4): drafted by one Opus translator in four parts, three review passes, intros, built (`translation.rtl.md`), 102 parallels rows, print stub `../הדפסה/טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים.rtl.md`. |

The corpus tool is `../tools/hittite_tools.py` (keys AS, UH, PU, AM, AM2); the parallels index is built by
`build_parallels_index.py` here (it also writes each text's "Part <KEY>: parallels index" into the project's `project.md`).
