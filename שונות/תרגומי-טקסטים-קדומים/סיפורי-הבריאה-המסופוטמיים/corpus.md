# Corpus: the Mesopotamian Creation Stories → Hebrew

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md`, then the project's own `project.md`.

## Goal (the user's plan, 2026-10-16)
Translate the Mesopotamian creation texts that matter most for **Genesis 1–3**, the block the commentary is working on now (Gen 1, the fifth day: the *tanninim*).
The corpus is the counterpart of the flood corpus (`../סיפורי-המבול-המסופוטמיים/`), and it inherits that corpus's conventions and shared renderings.
It comes from items 1–2 of `../curated-translation-candidates.md` and the relevance survey (`../curation-surveys/relevance-survey--2026-10-16.md`, §A 1–7).

The user's standing decisions (from the flood corpus) apply here too:
- partial niqqud (guidelines §6.2): names at first occurrence and ambiguous words;
- deities are never assimilated to biblical names; biblical place names are used for places the Bible names (Babylon = `בָּבֶל`).

## The texts and how they relate

| # | Project folder | Text | Language, date | Relation to Genesis |
|---|---|---|---|---|
| 1 | `1-אנומה-אליש/` | **Enūma eliš**, Tablets I–VII (1,098 lines), the Babylonian Epic of Creation | Akkadian, SB; composed probably under Nebuchadnezzar I (late 12th cent. BCE); mss 9th–2nd cent. BCE | The main external control for Gen 1:1–2:3: Tiāmat / `תְּהוֹם`, the mingled waters, the sky made from half of Tiāmat, the eleven monsters ↔ the *tanninim*, the stars and the calendar ↔ the luminaries, man made from a god's blood ↔ Gen 1:26–28, the gods' rest ↔ 2:1–3, naming as rule, Babylon's bricks ↔ Gen 11, Marduk's bow ↔ Gen 9:13. |
| 2 | `2-טקסטי-בריאה-ועדן/` | **Creation and Eden companions**: Adapa (eBL `L/1/7`, MB + SB); Enki and Ninmaḫ (ETCSL 1.1.2); the Song of the Hoe (ETCSL 5.5.4); Enki and Ninḫursaĝ (ETCSL 1.1.1); the bilingual "Creation of the World by Marduk" (CT 13 35–38; King 1902, check eBL/CDLI); KAR 4 (the creation of man from the Lamga gods' blood; check SEAL); the cosmogonic prologue of Grain and Sheep (ETCSL 5.3.2) | Sumerian, Akkadian, bilingual; OB–NB | Gen 2–3: man from clay / from the ground (2:7, 3:19), the "not yet" chain (2:4b–5), the work of the garden (2:15), the bread and water of life refused (3:22), Dilmun ↔ Eden, the forbidden plants and the curse, Nin-ti and the rib (debated), primeval humans without bread or clothing (Gen 2–4). About 1,000 lines in all. |

**Reading order for the commentary:** 1 (Tablets I, IV, V, VI first), then 2 (for Gen 2–3: Adapa, Enki and Ninḫursaĝa, Grain and Sheep, the Founding of Eridu; for Gen 1:26 and man's work: KAR 4, Enki and Ninmaḫ, the Song of the Hoe; for Ex 4:11 and Lev 21: Enki and Ninmaḫ 51–101).

Atra-ḫasīs I (the creation of man from clay and a slain god's flesh and blood) is already translated in the flood corpus (`../סיפורי-המבול-המסופוטמיים/1-אתרחסיס/`). Its creation rows are cross-referenced in this corpus's `parallels-index.md`, so that the Gen 1–2 evidence is in one place.

## Shared conventions for this corpus
- **`renderings.md` in this folder is shared by all projects of the corpus.** It inherits the flood corpus's shared renderings (`../סיפורי-המבול-המסופוטמיים/renderings.md`) as its default: divine names, formulas and key terms are the same in both corpora, so that a reader can compare, for example, the creation of man in Enūma eliš VI with Atra-ḫasīs I. It adds the creation-specific names and terms.
- **Shared lines get identical Hebrew.** Enūma eliš repeats long passages (Tiāmat's army four times in I–III; Marduk's conditions three times; Anšar's messages). Identical Akkadian gets identical Hebrew, verified by script (guidelines §6.1).
- A project translator does not edit the shared file during drafting; proposals go into the project's `project.md`, and the corpus coordinator merges them.
- **Parallels index:** each project keeps its index (guidelines §7.3). `parallels-index.md` here merges them into one table ordered by Bible verse. This is the main product for the commentary.

## Status

| # | Project | Status |
|---|---|---|
| 1 | Enūma eliš I–VII | **complete (first draft)**, 2026-10-16: 1,098 lines (I 162, II 162, III 138, IV 146, V 158, VI 166, VII 166), each tablet with three review passes; repeated lines verified by script (`verify.py`); `translation.rtl.md` generated (`build_translation.py`); print stub `../הדפסה/סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש.rtl.md`. Open decisions for the user: `1-אנומה-אליש/project.md`. |
| 2 | Creation and Eden companions | **complete (first draft)**, 2026-10-17: seven texts, 1,076 lines – Adapa (MB 78 + SB 97), Enki and Ninḫursaĝa 305, Enki and Ninmaḫ 142, Song of the Hoe 110, Grain and Sheep 193, Founding of Eridu (BM 93014) 67, KAR 4 84 – drafted text by text by sequential sub-agents, three review passes each, verified by `verify.py`; `translation.rtl.md` generated (`build_translation.py`); parallels merged into `parallels-index.md`; renderings merged into `renderings.md` §5; print stub `../הדפסה/סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן.rtl.md`. Open decisions: end of `2-טקסטי-בריאה-ועדן/project.md`. |

### Corpus-level files
| File | What |
|---|---|
| `renderings.md` | Shared renderings, binding for all projects. |
| `parallels-index.md` | The projects' parallels indexes merged, ordered by Bible verse, with "Key findings for the commentary" for each project at the top. Regenerate with `python3 -I 1-אנומה-אליש/build_parallels_index.py` (reads both projects). |

## Notes from the planning of project 2 (done; kept for reference)
- Use the shared renderings: *banû* = `בָּנָה`, *ṭiṭṭu* = `טִיט`, *lullû* = `קַדְמוֹן`, *awīlu* = `אָדָם`, *dullu* = `עָמָל`, *šīmtu* = `גּוֹרָל`, *Apsû* = `(הָ)אַפְּסוּ`, *nabû* (to name) = `קָרָא (בְּשֵׁם)`, Sumerian *edin* = `עֲרָבָה` (never `עֵדֶן`).
- Enki = `אֶנְקִי` / Ea = `אֵאָה`; Ninmaḫ = `נִינְמַח`; Ninḫursaĝ = `נִין־חֻרְסַגָּה` (flood corpus); Nintu = `נִינְתּוּ`; Adapa = `אֲדָפָּה`.
- Enūma eliš VI 1–38 (man from Qingu's blood) and the Atra-ḫasīs creation scene are the comparison points for KAR 4 and Enki and Ninmaḫ.
