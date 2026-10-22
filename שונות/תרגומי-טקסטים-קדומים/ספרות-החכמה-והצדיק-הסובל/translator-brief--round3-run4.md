# Brief for the translators of Round 3, run 4 (the Šamaš Hymn, Counsels of Wisdom, the Dialogue of Pessimism, Šuruppag)

This adds to `translator-brief.md` (read it in full: it is binding). Where the two differ, this file wins.

## 1. The run
Four texts of the wisdom corpus are translated by six translators **one after the other** (guidelines §5.1, since 2026-10-22: quotas apply in the cloud too; order SH-a, SH-b, CW, DP, SU-a, SU-b – `renderings.md` §11.9). Two texts are long and are drafted by two translators (the second continues the first's file):

| Key | Text | Base | Translator(s) |
|---|---|---|---|
| SH | the Great Prayer to Šamaš (200 lines) | eBL `../sources/eBL/Shamash-Hymn-SB/` | SH-a: 1–100; SH-b: 101–200 |
| CW | Counsels of Wisdom (159 labels) | eBL `../sources/eBL/Counsels-of-Wisdom-SB/` | one translator |
| DP | the Dialogue of Pessimism (93 labels) | eBL `../sources/eBL/Dialogue-of-Pessimism-SB/` | one translator |
| SU | the Instructions of Šuruppag (288 labels, Sumerian) | ETCSL `../sources/ETCSL/5.6.1--Instructions-of-Shuruppag/` | SU-a: 1–142; SU-b: 143–280 |

**Safeguards (binding):** write each drafted section to disk at once (a quota stop must lose at most the section in progress); edit only your own files (your `annotated-<KEY>.rtl.md`, your `translation--intro-<KEY>.rtl.md`, your section of your project's `project.md`, and the generated files through `build`). Never edit `renderings.md`, another translator's files, the tools, other corpora or `sources/`. Read the earlier translators' files through `wisdom_tools.py grep` / `lemma`; copy their Hebrew for the shared lines (§5). Never commit, never start sub-agents. Run every command with a short runtime (`python3 -I`).

## 2. Read first
1. `../translation-guidelines.md` – the whole file. The ★ rules of §5.2 bind every line (below, §4).
2. `corpus.md`; `renderings.md` – all of it, and **§11 (this run) closely**; `translator-brief.md`; your project's `project.md`.
3. Models: the first 120 lines of `2-התאודיציה-הבבלית/annotated-Th1.rtl.md` (format, apparatus density); for SU also the flood corpus's Šuruppag 1–13 (`../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md` §2) and 80 lines of `../קולות-היום-יום/2-משלים-שומריים/annotated-c1-1.rtl.md` (the Sumerian proverbs, the closest Sumerian model) with `../קולות-היום-יום/renderings.md`.

## 3. Tools (in this folder; run with `python3 -I`)
- `wisdom_tools.py pars <KEY>` – before drafting: eBL's parallel lines and identical normalizations, with the Hebrew already given.
- `wisdom_tools.py sux SU` – (Šuruppag) every line identical or similar to a Sumerian line already translated (the flood corpus, the proverbs), and the repeated lines inside the text.
- `wisdom_tools.py lemma '<regex>'` / `grep '<Hebrew regex>' [--gilg]` – how a lemma was rendered so far; where a Hebrew string is used. **Grep before fixing any new Hebrew word for a recurring lemma** (★).
- Other corpora: `python3 -I ../קולות-היום-יום/kol_tools.py lookup '<regex>'` (how the earlier corpora rendered a word), `python3 -I ../העולם-התחתון/netherworld_tools.py grep all '<regex>'` (the `>` lines of every corpus).
- `../tools/sumerian_workbench.py line ../sources/ETCSL/5.6.1--Instructions-of-Shuruppag/c.5.6.1.xml FROM-TO` – (SU) ETCSL lemmas + the ORACC morphology of each verb; `… morph '<form>'`, `… conc '<regex>'`, `… gloss '<regex>'`.
- **`wisdom_tools.py fill <KEY>`** – write every source line as `` `@` `` and let `fill` copy the base text (eBL's first N, or ETCSL's line). `verify` checks that each source line equals the base exactly.
- `wisdom_tools.py verify <KEY> [--strict]`, `wisdom_tools.py build` (builds every file of the corpus; harmless to the others).
- `../tools/check_bible_quotes.py <files…>`; `--show <book> "<ch> <v>"` prints a verse. **The repository numbers the Decalogue Ex 20:1–13 and Deut 5:6–18** (`כַּבֵּד אֶת אָבִיךָ` is שמות כ:יא; `לֹא תִרְצָח … לֹא תִגְנֹב` is כ:יב; `לֹא תַחְמֹד` is כ:יג): print every verse before quoting it.
- Web: you should not need it. If you do, at most 10 `WebSearch` calls (the session shares a budget); verify by fetching.

## 4. The ★ rules, again
- Draft **unvocalized and plene** from the first line; vocalize only names at their first occurrence, ambiguous words, archaic forms and the always-vocalized words (`renderings.md` §1–§3, §10, **§11.6**).
- Source lines as `` `@` `` + `fill`.
- Print every Bible verse before quoting it (notes too); write quotations as `` `…` (ספר פרק:פסוק) ``; run `check_bible_quotes.py`.
- Reserved words (§8 and **§11.6**): checked by `verify`. If a gate fires on a legitimate lemma variant, report it in your final message; do not bend the Hebrew.
- Fix the Hebrew of every formula and refrain before drafting it (§11 gives them), and check the pre-set formula against the transliteration of its first occurrence (★: it may be wrong – then say why, and keep it consistent).
- Grep earlier files before fixing a new Hebrew word.
- **The rank-3 translation is the main source of false echoes**: Foster's and ETCSL's English is consulted after your own reading; every place where it manufactures or hides a Bible parallel is a finding for the parallels index.
- Read the transliteration before believing any brief, this one included: "look for", never "translate as".
- Before you finish, diff the renderings you fixed at your first occurrences against your drafted lines (★).

## 5. Lines shared between the four texts (fixed now, identical Hebrew; see also `renderings.md` §11.8 – the nets, pits and other words shared with Etana)
| Source | Hebrew | Where |
|---|---|---|
| *ṭāb eli šamaš balāṭa uttar* | `טוֹב עַל שַׁמַשׁ, חַיִּים יוֹסִיף.` (SH: `שַׁמַשׁ` always vocalized) | SH 100, 106, 119 |
| *niqû balāṭa uttar* | `הזבח חיים יוסיף,` | CW A+87 |
| *ul ṭāb eli šamaš irâbšu lumna* / *ṭāb eli šamaš irâbšu dumqa* | `לא טוב על שַׁמַשׁ, יגמלנו רֹעַ.` / `טוב על שמש, יגמלנו חסד.` | CW A+11, A+15 |
| *našû īnī (ana)* | `נשא עיניים (אל)` | SH 88, CW A+37 |
| *usātu*, *ēpiš usāti*, *bēl usāti* | `עזרה`, `עושה עזרה`, `בעל עזרה` | DP 71–78, SH 122, CW A+16 |
| *ikkibu* + god | `תועבת` + god | CW 49–50, A+59, A+103 |
| *suppû (u) sullû (u) labān appi* | `תחינה, תחנונים ושפשוף האף` (fix the order to the Akkadian) | SH 130–131 (with more words), CW A+82 |
| *kitmusu* (*kamāsu* Gt) | `כרע` (Gt: `כורעים`) | SH 15, 51, 55, 56, 131, 163 |
| *ina iḫzīkā-ma amur ina ṭuppi* | `בלימודך – ראה בלוח:` | CW A+63, A+85, A+98 |
The SH-a translator fixes 100 and 106 (SH-b copies them at 119); the CW translator fixes A+11 and A+15 with the table's Hebrew. If the Akkadian of a line differs from the table, change exactly what differs and say so.

## 6. Your final message (short)
Lines done (and the placeholder if you stopped), the main decisions, the strongest parallels, the strongest "ancient mind" findings, open decisions, and any problem with a tool or a gate.
