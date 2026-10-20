# Corpus: temple building → Hebrew

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md` (binding), then `translator-brief--temple.md`, then the project's `project.md`.

## Goal (round 2, run 4 of `../curated-translation-candidates.md`, 2026-10-20)
Translate, complete, the longest and finest Sumerian account of building a temple: **the Gudea Cylinders A and B** (*The building of Ninĝirsu's temple*, ETCSL 2.1.7; RIME 3/1 E3/1.1.7.CylA, CylB, Edzard 1997), two clay cylinders inscribed for Gudea, ruler (*ensi₂*) of Lagaš, c. 2125 BCE, found at Tello (Ĝirsu) in 1877, now in the Louvre (MNB 1511, MNB 1512; the catalogues differ on which is A; hand copy Thureau-Dangin, TCL 8, 1925). Cylinder A (30 columns): the gods' decision, Gudea's dream and its interpretation by the goddess Nanše, the second dream in which Ninĝirsu describes his house, the omens, the purification of the city, the labour levy, the materials brought from the mountains and the sea lands, the brick-mould rite and the first brick, the building and its decoration, the stelae; "the middle hymn". Cylinder B (24 columns): the dedication, the god's entry into his finished house with his wife Bau, the installation of the divine household (each god with his office), the gifts, the seven days of feasting in which the slave is equal to her mistress, the banquet of the gods, the blessing of the house and of Gudea; "the last hymn". A first cylinder before A is lost.

### Two purposes (guidelines §1)
- **Bible comparison.** The Tabernacle (Exod 25–31, 35–40): the plan revealed (`תַּבְנִית`, Exod 25:9, 40), the people's contribution and the craftsmen (Bezalel's wisdom), the materials, the completion "as the Lord commanded", the glory filling the tent (40:34–35). Solomon's temple (1 Kgs 5–8): the cedars and the rafts, the levy, the dedication feast of seven days, the god's entry, the king's prayer and blessing. Ezekiel 40–48 (the visionary plan of the house, `צוּרַת הַבַּיִת`, 43:11; the glory's entry from the east, 43:1–5). David's plan (1 Chr 28:11–19, "in writing from the hand of the Lord"). Gen 28 (a dream at a sacred place, the stone set up and named). The temple builder of Haggai / Zechariah (Zerubbabel's foundation, Zech 4:9; the temple-building king as the god's shepherd, Isa 44:28). The dream and its interpretation (Gen 40–41, Dan 2). The purification of the city (Neh 12:30), the festival in which master and slave rejoice together (Deut 16:11, 14; 5:13), the orphan and the widow, the daughter as heir (Num 27:8). Hurowitz 1985 and 1992 is the standard comparison (not available: `../sources/_records-only--Gudea-and-temple-building/`).
- **The soul of the ancients**, equal in standing. The notes explain the text on its own terms: a god asks for a house and a ruler must find out what he wants (dreams, an interpreter, omens, extispicy); the temple is a living being and a cosmic mountain; the god is the king and the owner, the ruler his steward and shepherd; a temple is an estate with a household of gods (counsellor, gatekeeper, chamberlain, musicians, herdsmen, fishermen, farm manager), as a palace has; the economy of Lagaš and its long-distance trade; the ruler's piety and anxiety; the social peace that building requires (no quarrel, no punishment, no mourning, the impure sent out); the theology of Lagaš (Ninĝirsu and Bau, Nanše and Ĝatumdug, Ninĝišzida the personal god, Nisaba and Nindub, Enki); and the hymn as literature (the parallelism, the similes, the three-part structure).

## The projects
| # | Project folder | Text | Base text | Lines | Files |
|---|---|---|---|---|---|
| 1 | `1-גליליות-גודאה/` | The Gudea Cylinders A and B | ETCSL 2.1.7 (`../sources/ETCSL/2.1.7--Gudea-Cylinders/`); ORACC epsd2/royal Q000377 (ETCSRI) for lemma + morph | 1,300 (A 812, B 488; RIME labels `A.i.1` … `B.xxiv.17`) | `annotated-A1.rtl.md` (A i–vii), `-A2` (A viii–xiv), `-A3` (A xv–xxii), `-A4` (A xxiii–xxx), `-B1` (B i–ix), `-B2` (B x–xvi), `-B3` (B xvii–xxiv) |

Rank 3: ETCSL's English (complete); ETCSRI's English (after Edzard 1997; partial: `../sources/ORACC/etcsri--Q000377--Gudea-Cylinders/`). Rank 5: Thureau-Dangin 1905, 1907 (`../sources/Thureau-Dangin-1905-1907--Gudea-Cylinders/`). Not available: Edzard 1997, Jacobsen 1987, Averbeck 1987/2000, Suter 2000, Wilson 1996, Hurowitz 1985/1992.

**Reading order for the commentary:** A i–vii (the decision, the dream, Nanše's interpretation: ↔ Gen 28, 40–41, Dan 2; Exod 25:9) → A viii–xii (the second dream: the god describes his house and promises the materials and the abundance: ↔ 1 Chr 28, Ezek 43, Hag 2) → A xii–xiv (the omen, the purification, the social peace, the levy: ↔ Neh 12, 1 Kgs 5:27–32) → A xv–xx (the materials and the craftsmen, the brick: ↔ Exod 31, 35–36, 1 Kgs 5–7) → A xx–xxx (the building, the stelae, the house described: ↔ Gen 28:18–22, Ezek 40–42, 1 Kgs 6–7) → B i–vi (the dedication, the god's entry: ↔ Exod 40:34–35, 1 Kgs 8, Ezek 43:1–5) → B vi–xvi (the household of the gods) → B xvii–xviii (the seven days, the justice: ↔ Deut 16, Num 27) → B xix–xxiv (the banquet, the blessing of the house and of the builder: ↔ 1 Kgs 8:14, 55–66, 2 Sam 7).

## Shared conventions
- **`renderings.md` binds the project**; it inherits the lament and creation corpora's Sumerian renderings and the law corpus's rule "Sumerian = the Hebrew of its Akkadian equivalent" (§0 there).
- **Repeated lines get identical Hebrew**; `temple_tools.py verify` lists identical transliterations with different Hebrew.
- Translators work **one at a time** (sequential sub-agents; the user's quota rule), one file each, in the order of the table above. They do not edit the corpus files; they write proposals in their section of `project.md`, and the coordinator merges them into `renderings.md` §9 between runs.
- **The annotated files are the only source of the Hebrew**: `temple_tools.py build GU` generates `translation.rtl.md` from `translation--intro.rtl.md` + the annotated `## ` headings, `>` lines and `הערת שוליים` bullets.
- **Parallels index:** per file in `project.md` (`### Parallels index (<KEY>)`, KEY = A1 … B3; columns exactly `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |`), merged into `parallels-index.md` by `build_parallels_index.py` (Exodus first, then Kings, Chronicles, Ezekiel, Genesis, the other books).

## Tools (in this folder)
| Script | What |
|---|---|
| `temple_tools.py verify GU [--strict]` | Entries against ETCSL's line list (RIME labels), transliteration = ETCSL, one `>` per entry, reserved and gated strings (renderings §4–§5), name traps, formulas, translation = `>` lines, identical lines with different Hebrew. |
| `temple_tools.py build GU` | The clean translation, verified. |
| `temple_tools.py data GU FROM TO <out>` | Translator data: ETCSL line, ORACC lemma + morph, ETCSL and ETCSRI translations. |
| `temple_tools.py grep GU\|all '<regex>'`; `lines GU FROM TO`; `conc GU [<out>]` | How a Hebrew string was rendered so far (all = this corpus + the lament corpus + the creation corpus's Sumerian texts); ETCSL's lines; the label concordance. |
| `build_parallels_index.py` | `parallels-index.md` from the per-file tables. |
| `../tools/sumerian_workbench.py` | ETCSL lemmas, ORACC morph, ETCSL-wide concordance, ePSD2 glossary. |

## Status
| # | Project | Status |
|---|---|---|
| 1 | The Gudea Cylinders A and B | **complete (first draft), 2026-10-20**: all 1,300 lines in seven files (runs 1–7), verified by `temple_tools.py verify GU --strict`; `1-גליליות-גודאה/translation.rtl.md` (generated, 120 footnotes); print stub `../הדפסה/בניין-המקדש/1-גליליות-גודאה.rtl.md`. Open decisions: `1-גליליות-גודאה/project.md`. |

`parallels-index.md`: 561 rows from seven file indexes (Exodus first), with the coordinator's key findings at the top. Seven sequential translators (A i–vii; viii–xiv; xv–xxii; xxiii–xxx; B i–ix; x–xvi; xvii–xxiv), the renderings merged after each run (`renderings.md` §9).
