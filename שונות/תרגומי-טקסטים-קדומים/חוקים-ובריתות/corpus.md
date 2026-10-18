# Corpus: cuneiform law and treaty → Hebrew (`חוקים-ובריתות/`)

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md`, then the project's own `project.md`.

## Goal
Translate the cuneiform treaties and law collections that matter most for the **legal and covenantal Torah**: Deuteronomy 12–30 (the treaty frame, Deut 13, the curses of Deut 28, the oath of Deut 29), the Covenant Code (Exod 21–23), Leviticus 26, and the laws of Deut 19–25.
The corpus comes from items 3, 4 and 6 of `../curated-translation-candidates.md` and the relevance survey (`../curation-surveys/relevance-survey--2026-10-16.md`, items 42–43 and the law collections).
The Deuteronomy units of the commentary (`../../../פירוש/5-דברים/`) contain, as of 2026-10-17, the verse text and the unit titles but no commentary yet: these translations are meant to shape that commentary from the start, as the flood corpus did for Gen 6–9. Their parallels indexes therefore key to **exact verses and words**.

The user's standing decisions (from the flood and creation corpora) apply:
- partial niqqud (guidelines §6.2): names at first occurrence and ambiguous words;
- deities are never assimilated to biblical names; biblical place names are used for places the Bible names (Babylon = `בָּבֶל`, Nineveh = `נִינְוֵה`, Ḫarrān = `חָרָן`, Kalḫu = `כֶּלַח`).

## The texts and how they relate

| # | Project folder | Text | Language, date | Relation to the Torah |
|---|---|---|---|---|
| 1 | `1-אמנת-הירושה-של-אסרחדון/` | **Esarhaddon's Succession Treaty** (SAA 2 6, "Vassal Treaties of Esarhaddon", 691 composite lines), with the **Tell Tayinat copy** (SAA 2 15, 443 lines) | Akkadian (Neo-Assyrian; the curse list partly Standard Babylonian), 672 BCE | Deut 13 (the duty to report the prophet, the ecstatic, the brother, the son, the daughter; to seize and kill the inciter); Deut 13:1 and 4:2 (do not alter the words); Deut 6:5 (love "as yourselves"); Deut 28:20–44 (the curse sequence Sîn → Šamaš → Ninurta → Venus ↔ 28:27–30; bronze sky and iron earth ↔ 28:23; cannibalism ↔ 28:53–57); Deut 29:9–14 (the oath of the absent generations); Deut 31:9–13, 24–26 (the written tablet kept and read); Lev 26:19, 29. |
| 2 | `2-חוקי-חמורבי/` | **The Laws of Hammurabi**: prologue, laws §1–§282 (the gap §66–§99 not in the base text), epilogue – 3,641 composite lines | Akkadian (OB), c. 1750 BCE | The Covenant Code (Exod 21–23) and Deut 19–25; the prologue and epilogue (justice, the stele, blessings and curses) ↔ the covenant frame. Base: CDLI P464358 (composite with normalization and English), checked against the Louvre stele and SEAL 7520 (`../curated-translation-candidates.md`, item 4). |
| 3 | `3-…` (planned) | **The Laws of Eshnunna**, **Middle Assyrian Laws A**, **Lipit-Ištar**, **Ur-Namma** | Akkadian (OB, MA); Sumerian (Ur III, OB) | Eshnunna §53 ↔ Exod 21:35 (nearly verbatim); §54–57 goring ox and dog; §12–13 ↔ Exod 22:1–2. MAL A: Deut 22:23–29, 25:3, 25:5–12, Exod 22:17. Lipit-Ištar and Ur-Namma: bodily injury ↔ Exod 21:18–27; prologues and epilogues. Bases: CDLI P480696, ORACC `tcma` P281779, CDLI P464355, P432130 (item 6). |

**Reading order for the commentary:** project 2 first for the Covenant Code (Exod 21–23: §250–252, §196–214, §117–126, §244–267; then Lev 18–20, 24, 25, Num 5, Deut 19–25 and the epilogue for Deut 27–28, Lev 26); project 1 first for Deuteronomy (§10, §12, §18, §29 for Deut 13; §4, §57 and §35–36 for 13:1 and 4:2; §24 for 6:5; §25, §34 for 29:13–14; §35 for 31:9–13; §37–§56 and §63–§65 for 28:20–44 and 28:23; §47, §69, §75 for 28:53–57). Project 3 last.

## Shared conventions for this corpus
- **`renderings.md` in this folder is shared by all projects of the corpus.** It inherits the flood corpus's and the creation corpus's shared renderings (`../סיפורי-המבול-המסופוטמיים/renderings.md`, `../סיפורי-הבריאה-המסופוטמיים/renderings.md`) as its default: divine names, formulas and key terms are the same in all three corpora. It adds the legal and treaty terms (oath, curse, "if", the apodosis formulas) and records where it deviates from the earlier corpora, with the reason.
- **The legal "if".** Law collections (*šumma awīlum* …, "if a man …") and treaty stipulations (*šumma attunu* …, "if you …") both begin with *šumma* = `אִם`. In the treaties the *šumma* clause is an **oath**: "if you do X (may the gods punish you)" = "you shall not do X"; "if you do not do X" = "you shall do X". The Hebrew keeps the oath form (`אִם … לֹא תִּנְצְרוּ`), which is also the native Hebrew oath syntax (`אִם` = "I swear not", `אִם לֹא` = "I swear that"): see `renderings.md` §3.
- **Repeated formulas get identical Hebrew**, verified by script. Esarhaddon's treaty repeats the crown-prince formula about 60 times, the "if you …" clauses and the curse formulas hundreds of times.
- A project translator does not edit the shared file during drafting; proposals go into the project's `project.md`, and the corpus coordinator merges them.
- **Parallels index:** each project keeps its index (guidelines §7.3); `parallels-index.md` here merges them into one table ordered by Bible verse.
- **Law terms:** `renderings.md` §5 (fixed for LH, binding for project 3): *šumma* = `אִם` always, *awīlum* = `אִישׁ` (`בֶּן אִישׁ`), *muškēnum* = `מִסְכֵּן`, *iddâk* = `יֵהָרֵג`, *maḫar ilim* = `לִפְנֵי הָאֵל`, *dīnum* = `דִּין`, *kīma* = `כְּ` (never `תַּחַת`), *nakāpu* = `נָגַף`.
- **Recension tags** (guidelines §6.8): in project 1 a line, or words, translated from the Tell Tayinat copy because the composite (Nimrud) tablets are broken there are tagged `{תיינת}` / `{תיינת: …}`.

## Status

| # | Project | Status |
|---|---|---|
| 1 | Esarhaddon's Succession Treaty + Tell Tayinat | **complete (first draft)**, 2026-10-17: 691 composite entries + 15 Tayinat-only entries (703 Hebrew lines in all, with the A-lines), seven parts (§1–9, 10–21, 22–29, 30–36, 37–56, 57–89, 90–107) by sequential sub-agents, three review passes each, harmonized by the coordinator, verified by `verify.py` (0 problems); `translation.rtl.md` generated (`build_translation.py`, 56 footnotes); 771 parallels rows merged into `parallels-index.md`; print stub `../הדפסה/חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון.rtl.md`. Open decisions: `1-אמנת-הירושה-של-אסרחדון/project.md`. |
| 2 | Laws of Hammurabi | **complete (first draft)**, 2026-10-17: all 3,641 composite lines (CDLI P464358, checked against the Louvre stele P249253 and SEAL 7520): prologue 1–303, §1–§65, end of §100, §101–§282, epilogue 3144′–3641′; the gap laws §66–§99 not translated (no open base text: open decision). Twelve annotated files by twelve sequential sub-agents in priority order, three review passes each, coordinator harmonization, `verify.py --strict` 0 problems; `translation.rtl.md` (topic and § headings, 130 footnotes); 1,263 parallels rows merged; print stub `../הדפסה/חוקים-ובריתות/2-חוקי-חמורבי.rtl.md`. Open decisions: `2-חוקי-חמורבי/project.md`. |
| 3 | Laws of Eshnunna (`3-חוקי-אשנונה/`) | **complete (first draft)**, 2026-10-18: all 195 composite lines (CDLI P480696; date formula 1–7, §1–§60 with §9a, §18a, §47a), checked against exemplars A (IM 51059), B (IM 52614), C; one sequential sub-agent (T1), three review passes, `../laws_verify.py LE` 0 problems; `translation.rtl.md` (22 footnotes); 100 parallels rows; print stub. Open decisions: `3-חוקי-אשנונה/project.md`. |
| 4 | Middle Assyrian Laws A (`4-החוקים-האשוריים-התיכונים-A/`) | **complete (first draft)**, 2026-10-18: all 828 tablet lines (ORACC tcma P281779, de Ridder 2021; §1–§59 and the colophon) in three annotated files by three sequential sub-agents (T2–T4), three review passes each, `../laws_verify.py MAL --strict` 0 problems; `translation.rtl.md` (25 footnotes); 262 parallels rows; print stub. Open decisions: `4-…/project.md`. |
| 5 | Laws of Lipit-Ištar (`5-חוקי-ליפית-אישתר/`) | **complete (first draft)**, 2026-10-18: all 503 lines of CDLI P464355 (prologue 1–107′, §4–§38 108′–429′, epilogue and colophon 430′–503′), Sumerian, checked against 13 exemplars; two sequential sub-agents (T5 laws, T6 frame), `../laws_verify.py LI --strict` 0 problems; `translation.rtl.md` (17 footnotes); parallels merged; print stub. Open decisions: `5-…/project.md`. |
| 6 | Laws of Ur-Namma (`6-חוקי-אור-נמה/`) | **complete (first draft)**, 2026-10-18: all 628 labelled lines of CDLI P432130 (prologue 1–181, laws 181.a–474 and Civil's b001–f008, epilogue g009–g028′), Sumerian; § concordance with Roth 1997 by content (Part T7; uncertain numbers marked); two sequential sub-agents (T7 laws, T8 frame), `../laws_verify.py UN --strict` 0 problems; `translation.rtl.md` (22 footnotes); parallels merged; print stub. Open decisions: `6-…/project.md`. |

### Corpus-level files
| File | What |
|---|---|
| `renderings.md` | Shared renderings, binding for all projects. |
| `parallels-index.md` | The projects' parallels indexes merged, ordered by Bible verse (Exodus and Deuteronomy by chapter), with "Key findings for the commentary" (EST, LH) at the top. Regenerate with `python3 -I build_parallels_index.py` (this folder; it reads every project; the older `1-…/build_parallels_index.py` knows only project 1 – do not use it). |
