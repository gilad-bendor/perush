# Corpus: the Sumerian city laments → Hebrew

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md` (binding), then `translator-brief--laments.md`, then the project's `project.md`.

## Goal (round 2, run 3 of `../curated-translation-candidates.md`, 2026-10-19)
Translate, complete, the two great Sumerian poems about the destruction of a city by the decision of the gods:
1. **The Lament for Ur** (*The lament for Urim*, ETCSL 2.2.2), eleven *kirugu*, 442 composite lines: the gods leave their sanctuaries, the goddess Ningal pleads in vain with An and Enlil, Enlil's storm destroys Ur (the fall of the Ur III state to the Elamites and Šimaški, c. 2004 BCE), Ningal mourns her house, the poet urges her to return, and the last song prays to Nanna for the restored city. Composed in the early Isin period (twentieth century BCE), copied in the OB schools.
2. **The Curse of Agade** (*The cursing of Agade*, ETCSL 2.1.5), 284 lines of the OB version and 37 lines of an earlier Ur III version: the rise of Akkad under Sargon and Inana, "the word from the Ekur", Naram-Suen's ominous dream and his demolition of Enlil's temple, the Gutians and the famine, the lament of the survivors, the gods' curse on Agade and its fulfilment. A historiographic poem (written under Ur III, c. 2100 BCE) about a real king (Naram-Suen, c. 2254–2218 BCE) who was not in fact destroyed this way.

### Two purposes (guidelines §1)
- **Bible comparison.** **Lamentations** above all: the weeping city-goddess and Daughter Zion, the deity "like an enemy", the abandoned sanctuary and the silent cult, the dead in the streets, the children at the breast, the enemy as the god's instrument, "how long?", "return!". Also Psalms 74, 79, 137 (the foreign land, the ruins); Jeremiah (the city-mother, Rachel weeping, Jer 12:7 "I have forsaken my house", 9:16–21 the keening women); Ezekiel 8–11 (the presence leaving the temple) and 7 (the Day); the Day of the Lord (Zeph 1, Joel 2, Amos 5); the irrevocable divine word (Num 23:19–20, Isa 45:23, 55:11). For the Curse of Agade: royal hubris punished (Isa 14, Ezek 28, Dan 4–5), Babel and Gen 11 (a king against a god's house), the dream and the omen (Gen 41, Dan 2, 4), the enemy from the mountains as the god's rod (Isa 10:5), the curses (Deut 28, Lev 26) and their fulfilment ("so it was"), the city returned to the wild (Isa 13:19–22, 34:11–15; Zeph 2:13–15; Jer 50:39–40).
- **The soul of the ancients**, equal in standing. The notes explain the texts on their own terms: a city and its god belong together (the god's "house" *is* the city's life; the god's departure is the city's death); the goddess as wife and mother who pleads for her city; the assembly of the gods and a decision that cannot be reversed; the storm of Enlil as the form a divine decision takes; the liturgical form (*kirugu* and *ĝišgiĝal*; Emesal, the dialect of goddesses and lament priests; the *gala*); the historical background (the fall of Ur III; Akkad and the Gutians); the daily life visible in the destruction (the herds and dairy, the canals and barges, the festivals and dances, the granaries, the nursemaids, the debt-prison); what a lament was for (to soothe the god's heart so that he would let the city be rebuilt – the laments were sung at the demolition and rebuilding of temples).

## The projects
| # | Project folder | Text | Base text | Lines | Files |
|---|---|---|---|---|---|
| 1 | `1-הקינה-על-אור/` | The Lament for Ur | ETCSL 2.2.2 (`../sources/ETCSL/2.2.2--Lament-for-Ur/`); ORACC Q000379 for lemma + morph | 442 (1–438 + 18A, 100A, 209A, 432A) | `annotated-1.rtl.md` (1–170, *kirugu* 1–4), `annotated-2.rtl.md` (171–329, 5–7), `annotated-3.rtl.md` (330–438, 8–11) |
| 2 | `2-קללת-אכד/` | The Curse of Agade | ETCSL 2.1.5 (`../sources/ETCSL/2.1.5--Curse-of-Agade/`); ORACC Q000375 | 284 OB + 37 Ur III (labels `A1`…`F7`) | `annotated-1.rtl.md` (1–148), `annotated-2.rtl.md` (149–281 + A1–F7) |

Rank 3: ETCSL's English (both). Rank 5: Kramer 1940 (`../sources/Kramer-1940--AS-12--Lamentation-over-Ur/`, local only). Not available: Samet 2014, Cooper 1983 (lending only), Jacobsen 1987, Michalowski 1989, Dobbs-Allsopp 1993 (`../sources/_records-only--City-laments/`).

**Reading order for the commentary:** LU 1–74 (the abandonment, the refrain) → LU 75–170 (Ningal's plea, the irrevocable decision) → LU 171–252 (the storm, the dead) → LU 253–388 (Ningal's lament, "how do you exist?", "return") → LU 389–438 (the storm without mother, the prayer) → CA 1–99 (Akkad's glory, the word from the Ekur, the dream) → CA 100–148 (the sacrilege) → CA 149–209 (the Gutians, the famine, the lament) → CA 210–281 (the curses and "so it was").

## Shared conventions
- **`renderings.md` binds both projects**; it inherits the creation corpus's Sumerian renderings and the law corpus's rule "Sumerian = the Hebrew of its Akkadian equivalent" (§0 there). The refrains of the Lament for Ur are fixed in §3 there.
- **Repeated lines get identical Hebrew**; `lament_tools.py verify` lists identical transliterations with different Hebrew and checks the fixed refrains.
- Translators work **one at a time** (sequential sub-agents; the user's quota rule), one file each, in the order of the table above. They do not edit the corpus files; they write proposals in their section of `project.md`, and the coordinator merges them into `renderings.md` §9 between runs.
- **The annotated file is the only source of the Hebrew**: `lament_tools.py build KEY` generates `translation.rtl.md` from `translation--intro.rtl.md` + the annotated `## ` headings, `>` lines and `הערת שוליים` bullets.
- **Parallels index:** per file in `project.md` (`### Parallels index (<KEY>)`, KEY = LU1, LU2, LU3, CA1, CA2; columns exactly `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |`), merged into `parallels-index.md` by `build_parallels_index.py` (Lamentations first).

## Tools (in this folder)
| Script | What |
|---|---|
| `lament_tools.py verify KEY [--strict]` | Entries against ETCSL's line list (segment labels `A1`…), transliteration = ETCSL, one `>` per entry, reserved and gated strings (§5 of the renderings), name traps, fixed refrains, translation = `>` lines, identical lines with different Hebrew. |
| `lament_tools.py build KEY` | The clean translation, verified. |
| `lament_tools.py grep KEY\|all '<regex>'`; `lines KEY FROM-TO` | How a Hebrew string was rendered so far (all = this corpus + the creation corpus's Sumerian texts); ETCSL's lines for a range. |
| `build_parallels_index.py` | `parallels-index.md` from the per-file tables. |
| `../tools/sumerian_workbench.py` | ETCSL lemmas, ORACC morph, ETCSL-wide concordance, ePSD2 glossary. |

## Status
| # | Project | Status |
|---|---|---|
| 1 | The Lament for Ur | **complete (first draft), 2026-10-19**: 442 entries in three files (runs 1–3); `1-הקינה-על-אור/translation.rtl.md` (generated); print stub `../הדפסה/קינות-על-ערים/1-הקינה-על-אור.rtl.md`. Open decisions: its `project.md` (runs 1–3). |
| 2 | The Curse of Agade | **complete (first draft), 2026-10-20**: 284 OB lines + 37 Ur III lines in two files (runs 4–5); `2-קללת-אכד/translation.rtl.md` (generated); print stub `../הדפסה/קינות-על-ערים/2-קללת-אכד.rtl.md`. Open decisions: its `project.md` (runs 4–5). |

`parallels-index.md`: 475 rows from five file indexes (Lamentations first), with the coordinator's key findings at the top. Five sequential translators (LU 1–170; 171–329; 330–438; CA 1–148; 149–281 + A1–F7), the renderings merged after each run (`renderings.md` §9).
