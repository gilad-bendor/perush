# Corpus: Babylonian wisdom and the righteous sufferer → Hebrew

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md` (binding), then the project's `project.md` and `translator-brief.md`.

## Goal (round 2, run 2 of `../curated-translation-candidates.md`, 2026-10-19)
Translate the two great Babylonian poems about undeserved suffering, complete as the current edition allows:
1. **Ludlul bēl nēmeqi** ("I will praise the lord of wisdom"), Tablets I–V, the first-person account of Šubši-mešrê-Šakkan: Marduk's anger, the loss of his gods and protective spirits, the fall from the king's favour, social death, the body destroyed by demons and disease, the failure of diviner and exorcist, three dreams of deliverance, healing, and the procession through the gates of Esagil in thanksgiving.
2. **The Babylonian Theodicy** ("O sagacious [brother], come, let me tell you"), 27 stanzas of 11 lines, a dialogue between a sufferer and his friend about whether the gods are just, whose stanzas spell an acrostic: "I am Saggil-kīnam-ubbib, the exorcist, who blesses god and king".

### Two purposes (guidelines §1)
- **Bible comparison.** Job above all: the friend(s)' dialogue and their arguments (the wicked prosper only for a moment; the gods' ways are unknowable; piety pays); the sufferer's body and social death (Job 7, 16, 19, 30); the restoration (Job 42). Psalms of lament and thanksgiving (Ps 22, 30, 31, 38, 41, 88, 102), Qohelet (the reversals of fortune, the unknowable), Proverbs (the fear of the god), Isaiah 53 (the despised sufferer, "known to sickness"), Lamentations 3. For the Torah: Deut 28's diseases, Deut 18:10–11's diviners, Deut 32:39 ("I kill and I make alive"), Gen 4:7 (*rābiṣu*), Gen 3 (the Theodicy's gods who "gave lies to mankind").
- **The soul of the ancients**, equal in standing. The notes explain the texts on their own terms: Babylonian personal religion (the personal god and goddess, the protective spirits that "leave" a man), demons and disease, the diviner (*bārû*), the dream interpreter (*šāʾilu*) and the exorcist (*āšipu* / *mašmaššu*) and why they fail, the courtier's fall at a Kassite court, the poem as a thanksgiving and as a defence of the exorcist's craft (Lenzi 2023 ch. 7), the incantation-prayer language (ch. 8), the ancient commentaries (CCP 1.3, 1.4; eBL's `BabaLBCom1`), the Theodicy's acrostic, its deliberately rare vocabulary, and its idea of justice and of the gods' inscrutability.

## The projects
| # | Project folder | Text | Base text | Lines | Files |
|---|---|---|---|---|---|
| 1 | `1-לודלול/` | *Ludlul bēl nēmeqi* I–V | eBL `L/2/2` (ed. A. Hätinen, rev. Földi, Heinrich, Jiménez, Mitto; translation Foster): `../sources/eBL/Ludlul-SB-<I…V>/` | I 120, II 120, III 121, IV 53 (fragmentary), V 120 = 534 | `annotated-<I…V>.rtl.md` |
| 2 | `2-התאודיציה-הבבלית/` | *The Babylonian Theodicy*, 27 stanzas | eBL `L/2/1` (ed. A. C. Heinrich, T. D. N. Mitto, rev. Jiménez; translation Foster, Khatabe, Zerkly): `../sources/eBL/Theodicy-SB/` | 288 labels (1–297) | `annotated-Th1.rtl.md` (1–143, stanzas I–XIII), `annotated-Th2.rtl.md` (144–297, XIV–XXVII) |

Rank 3–4 for Ludlul: **Lenzi 2023** (OBO 300, open access; `../sources/Lenzi-2023--…/`: chapter 2 text and translation, chapter 3 notes, chapters 5–11 on the poem's world; Oshima's numbering, align by content). For both: the ancient commentaries (`../sources/CCP/`). Not available: Lambert 1960, Oshima 2013/2014, Annus & Lenzi 2010 (`../sources/_records-only--Wisdom-and-righteous-sufferer/`).

**Reading order for the commentary:** Ludlul I (praise, the god's anger, social death) → II (the question "who knows the will of the gods?", the body litany) → III (the dreams and the healing) → V (thanksgiving at Esagil) → IV (fragments) → the Theodicy (the argument).

## Shared conventions
- **`renderings.md` binds both projects**; it inherits the Gilgameš corpus's renderings (the closest model), then the flood, creation and law corpora (§0 there), with five recorded deviations (§9).
- **Repeated lines get identical Hebrew** (guidelines §6.1): Ludlul's refrains (I 1–4, 9–12, 29–32), the reversal II 51–57 ↔ III 69–75, the Theodicy's repeated maxims (82 ≈ 256). `wisdom_tools.py pars KEY` lists them before drafting (eBL's `Parallels:` field and identical normalizations, with the Hebrew already given, including Gilgameš lines); `verify` reports differences.
- **The acrostic** is shown, not imitated (`renderings.md` §7).
- Translators work **one at a time** (sequential sub-agents; the user's quota rule), one file each, in the order of the status table below. They do not edit `renderings.md`; they write proposals in their section of `project.md`, and the coordinator merges them between runs (§10 there).
- **The annotated file is the only source of the Hebrew**: `wisdom_tools.py build` generates `translation-<KEY>.rtl.md` from `translation--intro-<KEY>.rtl.md` + the annotated `## ` headings, `>` lines and `הערת שוליים` bullets, and each project's `translation.rtl.md` from `translation--head.rtl.md` + its files.
- **Parallels index:** per file in `project.md` (`### Parallels index (<KEY>)`, columns exactly `| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |`), merged into `parallels-index.md` by `build_parallels_index.py` (Job first, then Psalms, the other Writings, the Prophets, the Torah).

## Tools (in this folder)
| Script | What |
|---|---|
| `wisdom_config.py` | The files (key, project, eBL folder, line range), the eBL and annotated readers. |
| `wisdom_tools.py pars KEY` | Before drafting: repeated and parallel lines with the Hebrew already given (this corpus and Gilgameš). |
| `wisdom_tools.py verify [KEY…] [--strict]` | Entries against eBL's line list, one `>` per entry, translation = `>` lines, reserved strings (lemma-gated), unvocalized traps (`אלי`, `אלה`, `בל`, `שכן`, `אלו`, `רע`), repeated lines with different Hebrew. |
| `wisdom_tools.py build` | The clean translations (per file and per project), verified. |
| `wisdom_tools.py grep '<regex>' [--gilg]`, `lemma '<regex>'` | How a Hebrew string or an Akkadian lemma was rendered so far. |
| `build_parallels_index.py` | `parallels-index.md` from the per-file tables. |

## Status
| # | Project | Status |
|---|---|---|
| 1 | Ludlul I–V | **complete (first draft), 2026-10-19**: 534 labels in five files; `1-לודלול/translation.rtl.md`; print stub `../הדפסה/ספרות-החכמה-והצדיק-הסובל/1-לודלול.rtl.md`. Open decisions: its `project.md`. |
| 2 | The Theodicy | **complete (first draft), 2026-10-19**: 288 labels in two files; `2-התאודיציה-הבבלית/translation.rtl.md`; print stub `../הדפסה/ספרות-החכמה-והצדיק-הסובל/2-התאודיציה-הבבלית.rtl.md`. |

`parallels-index.md`: 1,012 rows from seven file indexes (Job 1st), with the coordinator's key findings at the top. Six sequential translators (I; II; III; IV+V; Th 1–143; Th 144–297), the renderings merged after each run (`renderings.md` §10).
