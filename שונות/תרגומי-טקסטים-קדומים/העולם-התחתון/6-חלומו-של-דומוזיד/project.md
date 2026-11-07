# Project 6: Dumuzid's Dream (ETCSL 1.4.3)

## Scope
The whole composition: **264 entries** (ETCSL 1–261 with the pluses 144A, 181A, 251A). Round 6 run 4 (2026-11-07): the sequel of Inana's Descent (project 2), whose last part (the *galla* demons seize Dumuzid in Inana's stead) this poem tells from Dumuzid's side – his ominous dream, his sister Ĝeštinana's interpretation, the flight, the betrayal by his friend, the three escapes with Utu's help (gazelle / snake transformations), and his death in the sheepfold.

## Base text
- ETCSL 1.4.3 (`../../sources/ETCSL/1.4.3--Dumuzids-Dream/`, CC BY-NC-SA), converted from the **live ETCSL page** with `tools/etcslhtml2md.py`; ETCSL's lemma per word in `lemmas.tsv`.
- ORACC epsd2/literary Q000347 (`../../sources/ORACC/epsd2-literary--Q000347--Dumuzids-Dream/`, CC0): lemma + morph, aligned with ETCSL **by content** (`netherworld_tools.py` key DD, `align='content'`; line 59 has no ORACC match). `python3 -I ../netherworld_tools.py lines DD FROM TO` prints both.
- Rank 3: ETCSL's English (`translation.md`); Alster 1972 (*Dumuzi's Dream*) is © and not owned (record only).

## Line numbering
ETCSL's composite numbers. Files: `annotated-1.rtl.md` (1–130), `annotated-2.rtl.md` (131–261).

## Tools
`python3 -I ../netherworld_tools.py verify DD [--strict]`, `build DD`, `lines DD FROM TO`, `grep all '<regex>'`; `python3 -I ../../tools/sumerian_rel.py <annotated file>` (the near-identical lines of every corpus with their Hebrew: Inana's Descent shares the *galla* passages).

## Open decisions
(none yet)

## Progress
- 2026-11-07: base texts secured; skeletons generated.
