# Corpus: the Epic of Gilgameš → Hebrew

Read `../translation-guidelines.md` first, then this file, then the shared `renderings.md` (binding), then the project's `project.md`.

## Goal (the user's plan, 2026-10-17)
Translate the rest of the Epic of Gilgameš: the Standard Babylonian Tablets **I–X and XII**, the end of **Tablet XI (ll. 209–328)**, and the Old Babylonian tablets that matter most for the Torah (OB II = Penn, OB III = Yale, OB VA+BM = the Sippar tablet with Šiduri's speech), then, as quota allows, the other well-preserved OB tablets.
It is item 5 of `../curated-translation-candidates.md` (run 5 of its plan) and entry 8 of the relevance survey (`../curation-surveys/relevance-survey--2026-10-16.md`).

The user's standing decisions apply: partial niqqud (guidelines §6.2); Uruk = `אוּרוּךְ` with a note on `אֶרֶךְ`; deities never assimilated to biblical names; biblical place names used where the Bible names the place.

## Relation to the flood corpus (Tablet XI 1–208)
**Gilgameš XI 1–208** (Gilgameš's question, Ūta-napišti's flood story, "who will assemble the gods for you?") is already translated, annotated and harmonized as project 2 of the flood corpus: `../סיפורי-המבול-המסופוטמיים/2-גילגמש-XI--סיפור-המבול/`. It is **not duplicated** here:
- `1-הנוסח-הבבלי-התקני/annotated-XI.rtl.md` and `translation-XI.rtl.md` hold **XI 209–328** only (the sleep test, the washing and the new garment, the plant of rejuvenation and the snake, the return to Uruk), and begin with a pointer to the flood corpus for 1–208.
- The combined reading translation of the whole epic (`1-הנוסח-הבבלי-התקני/translation.rtl.md`) **embeds** the flood corpus's translation of XI 1–208 with a `<כלול-בהדפסה>` directive at its place between Tablet X and XI 209 (guidelines §7.4), so a reader reads I → XII in sequence and the Hebrew of 1–208 has one source.
- The flood corpus's Hebrew is binding (`renderings.md` §0): every line here that repeats a line of XI 1–208 (e.g. XI 281–282 = XI 9–10; XI 323–328 = I 18–23) is identical, checked by `verify.py`.
- **Gilgameš I 1–28** was also translated in the flood corpus (`6-אזכורי-המבול/`, §6, as a flood reference). Those 28 lines are copied verbatim into `annotated-I.rtl.md` and checked by `verify.py` against the flood copy; two words were harmonized in both places (`renderings.md` §8).

## The projects

| # | Project folder | Text | Base text | Lines |
|---|---|---|---|---|
| 1 | `1-הנוסח-הבבלי-התקני/` | **The Standard Babylonian epic** ("He who saw the Deep", attributed to Sîn-lēqi-unninni): Tablets I–X, XI 209–328, XII | eBL `L/1/4`, *Poem of Gilgameš*, ed. A. R. George (rev. G. Rozzi, E. Jiménez, 2026), George's translation: `../sources/eBL/Gilgamesh-SB-<T>/` | I 300, II 187, III 209, IV 175, V 274, VI 183, VII 219, VIII 206, IX 137, X 325, XI 209–328 (120), XII 139 |
| 2 | `2-הנוסח-הבבלי-הקדום/` | **The Old Babylonian tablets** (*šūtur eli šarrī*, c. 1800–1700 BCE): OB II (Penn), OB III (Yale), OB VA+BM (Sippar: Šiduri's speech), then Schøyen₂, Nippur, Harmal₁, Ishchali, Harmal₂, IM | eBL `L/1/4` "Old Babylonian" chapters: `../sources/eBL/Gilgamesh-OB-<name>/`; SEAL (Streck's translation) as second opinion | II 145, III 219, VA+BM 87; Schøyen₂ 94, Nippur 26, Harmal₁ 21, Ishchali 47, Harmal₂ 59, IM 45 |

**Reading order for the commentary:** SB I (Enkidu's creation and humanization; Gen 2–3, 6:1–4) → OB II (the same, older and fuller: bread, beer, clothing) → SB VII (the curse and blessing of the harlot; the house of dust; Gen 3:14–19) → SB VI (Ištar, the Bull of Heaven, seven years of chaff; Gen 41) → SB X + OB VA+BM (the quest for life, Šiduri's carpe diem; Gen 3:22, Qoh 9:7–9) → SB XI 209–328 (the plant and the snake; Gen 3) → II–V (the forest and its guardian; Gen 3:24) → VIII, IX, XII (lament, the jewel garden, the ghost; Deut 18:11).

## Shared conventions
- **`renderings.md` in this folder binds both projects**, and it inherits (in this order) Gilg. XI 1–208 as translated, the flood corpus, the creation corpus and the law corpus (§0 there).
- **Repeated lines get identical Hebrew** (guidelines §6.1). The epic repeats whole passages: the hunter's report (I), the dreams and their interpretation (I, IV), Ḫumbaba's description (II, III, V), the journey formula (IV, XI), the lament and the threefold question in X, the twelve double-hours of darkness (IX). eBL's `Parallels:` field and identical normalizations are listed by `parallels_for.py` and checked by `verify.py`, including against XI 1–208 and against the OB tablets.
- Translators work **one at a time** (sequential sub-agents, one tablet or tablet group each, in the priority order of `1-הנוסח-הבבלי-התקני/project.md`). They do not edit `renderings.md`; they write proposals in their tablet's section of `project.md`, and the coordinator merges them between runs.
- **Parallels index:** per tablet in `project.md` (`### Parallels index (Tablet N)`, columns `Line | Akkadian | Hebrew rendering | Bible | Tag | Comment`); merged into `parallels-index.md` here by `build_parallels_index.py`.

## Tools (in this folder)
| Script | What |
|---|---|
| `gilg_config.py` | The list of texts (key, project, eBL folder, first line), the readers of eBL editions and annotated files. |
| `parallels_for.py KEY [--all]` | Before drafting a tablet: every line that repeats a line elsewhere (eBL parallels, identical normalizations), with the Hebrew already given to the other copy (XI 1–208 from the flood corpus). |
| `verify.py [KEY …] [--strict]` | Entries against eBL's line list, translation = annotated `>` lines, reserved strings, unvocalized name traps, I 1–28 against the flood copy, every eBL exact parallel (identical Hebrew). |
| `build_translation.py` | The combined reading translations of both projects (XI 1–208 embedded from the flood corpus). |
| `build_parallels_index.py` | `parallels-index.md` from the per-tablet tables. |

## Status
See the project files; summary kept here by the coordinator.

| # | Project | Status |
|---|---|---|
| 1 | SB I–X, XI 209–328, XII | in progress (2026-10-17) |
| 2 | OB tablets | not started |
