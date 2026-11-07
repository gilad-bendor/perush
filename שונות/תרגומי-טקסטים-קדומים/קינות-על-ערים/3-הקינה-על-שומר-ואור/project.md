# Project 3: the Lament for Sumer and Urim (ETCSL 2.2.3)

## Scope
The whole composition: **524 entries** (ETCSL 1–519 with the pluses 80A, 80B, 219A, 361A, 362A, 386A, 407A–C, 412A, 425A, 477A; ETCSL has no lines 120–121, 283, 285–288). Five *kirugu* sections with their *ĝišgiĝal* rubrics (112–114, 284, 357–359, 478–482, 519). Round 6 run 4 (2026-11-07), beside project 1, the Lament for Ur.

The poem: the gods' decree to end the Ur III state ("to overturn the appointed times", 1–57), the storm and the fall of the cities of Sumer one by one (Nibru, Kiš, Uruk, Eridug … Urim), Ibbi-Suen led to Elam, the plea of Nanna-Suen to his father Enlil and Enlil's answer that kingship is given for a term (*bala*), never for ever (364–370), the god's restoration and the closing prayer for the land.

## Base text
- ETCSL 2.2.3 (`../../sources/ETCSL/2.2.3--Lament-for-Sumer-and-Urim/`, CC BY-NC-SA), converted from the **live ETCSL page** with `tools/etcslhtml2md.py` (the OTA bulk zip is unreachable; the converter reproduced 1.8.2.3's XML conversion, Round 6 run 3). ETCSL's own lemma per word: `lemmas.tsv` there.
- ORACC epsd2/literary Q000380 (`../../sources/ORACC/epsd2-literary--Q000380--Lament-for-Sumer-and-Urim/`, CC0): lemma + morph per word (`lines` of this tool prints ETCSL only: read the ORACC file by label).
- Rank 3: ETCSL's English (`translation.md`); Michalowski 1989 (*The Lamentation over the Destruction of Sumer and Ur*) is © and not owned (record only).

## Line numbering
ETCSL's composite numbers, straight through its segments (A–I; the segment letters are not part of the labels). Files: `annotated-1.rtl.md` (1–284: *kirugu* 1–2), `annotated-2.rtl.md` (289–519: *kirugu* 3–5).

## Tools
`python3 -I ../lament_tools.py verify LSU [--strict]`, `build LSU`, `grep all '<regex>'`, `lines LSU FROM-TO`; `python3 -I ../../tools/sumerian_rel.py <annotated file>` (the near-identical lines of every corpus, with their Hebrew: the Lament for Ur shares formulas).

## Open decisions
(none yet)

## Progress
- 2026-11-07: base texts secured; skeletons generated (every entry with its ETCSL line and `> טרם תורגם`).
