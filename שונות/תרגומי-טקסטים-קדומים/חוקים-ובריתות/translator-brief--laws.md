# Common brief for the translators of the law corpus, projects 3–6 (LE, MAL A, Lipit-Ištar, Ur-Namma)

You are one of several **sequential** translators (never parallel). The user is offline: never ask questions; decide, record the decision (and the alternatives) in your Part section of `project.md` under "Open decisions for the user", and keep going to the end of your assignment. Keep every shell command short-running (no long loops over the network; `curl --max-time 20` for a single dictionary lookup at most). Do **not** commit, do not edit files outside your project folder except where your run prompt says so. Do **not** edit the corpus files `../renderings.md`, `../corpus.md`, `../parallels-index.md` (write proposals in your Part section instead). Do not use sub-agents.

Working directory: `/Users/giladben-dor/dev/perush/שונות/תרגומי-טקסטים-קדומים/` (the "root"). Corpus folder: `חוקים-ובריתות/`. Python: always `python3 -I`.

## 1. Read first (in this order)
1. `translation-guidelines.md` §5 (workflow and **all** "working rules learned"), §6 (principles; §6.4 echo control; §6.7 cross-project decisions; §6.8 notation), §7 (formats). Skim §1–§4.
2. `חוקים-ובריתות/corpus.md`; `חוקים-ובריתות/renderings.md` – **§0, §2, §3, §5 and §6 are binding**.
3. The Laws of Hammurabi: `חוקים-ובריתות/2-חוקי-חמורבי/renderings.md` **§1 (fixed formulas F1–F43), §2, §4 (reserved)** – binding for every Akkadian formula you meet; the format section of `2-חוקי-חמורבי/project.md` ("Working rules for the translators", "Annotated file format", "Parallels index format") and one Part section there (e.g. "Part T6") as a model; and, as a model of the apparatus, `2-חוקי-חמורבי/annotated-10--laws-241-282.rtl.md` §250–§252.
4. Your project's `project.md` and the Part sections of earlier translators of this round (projects 3–6), and their `renderings.md`.

## 2. Tools (in `חוקים-ובריתות/`)
- `python3 -I laws_build_data.py <KEY> <scratch-dir>` – your data file(s): per line the transliteration (`A:`), normalization (`N:`), lemmas (MAL), each exemplar's own line (`W …`), notes, and the rank-3 English (`EN:`; read it only **after** you have formed your reading of the line).
- `python3 -I laws_lookup.py '<regex>'` (normalization) / `'<regex>' --heb` (Hebrew) – how LH and the earlier projects rendered a word or formula. **Before fixing the Hebrew of any recurring word, look it up**; an identical Akkadian formula must get identical Hebrew to LH's.
- `python3 -I laws_verify.py <KEY> [file-number] [--strict]` – entries, sections, one `>` per entry, reserved and lemma-gated words, the fixed formulas (with LH's Hebrew), identical normalizations inside the project and against LH/LE/MAL ("REVIEW" lines: resolve each one, or justify it in your Part section), translation = `>` lines. **Run it until it reports 0 problems.**
- `python3 -I tools/check_bible_quotes.py <files…>` (from the root) – every backticked, vocalized Bible quotation followed by its reference must match `../../תנך-מנוקד/`. Run on your annotated file(s) and on `project.md`; fix every mismatch.
- `python3 -I laws_build_translation.py <KEY>` – builds `translation.rtl.md` from `build_translation--head.rtl.md` (which you write: a Hebrew title and introduction modelled on `2-חוקי-חמורבי/build_translation--head.rtl.md`) and the annotated files. Then re-run `laws_verify.py <KEY>`.
- Lexicon: eBL dictionary API per word (`curl -s --max-time 20 'https://www.ebl.lmu.de/api/words?word=<lemma>'`; guidelines §4.6), Sefaria `/api/words/<Hebrew>` (Klein) for cognates; for Sumerian, ePSD2 via the local zip `sources/ORACC/_bulk/epsd2-literary.zip` (glossary `epsd2/literary/gloss-sux.json`, and the corpusjson of literary texts for forms with `morph`) and the ETCSL TEI under `sources/ETCSL/_bulk/` (lemmatized; search formulas). Never bulk-extract CAD.

## 3. The annotated file (format as in LH; one file per `laws_config.files(KEY)` entry: `annotated-<n>--<slug>.rtl.md`)
```markdown
# <Hebrew title> – תרגום מוער (<range>)

<short Hebrew paragraph: what the file holds, base text, notation; the shared conventions>

## §53 (168–170): שור שנגף שור
### 168
`szum-ma _gu4 gu4_ ik-ki-im-ma usz-ta-mi-it`
`N: šumma alpum alpam ikkimma uštamīt`
> אם שור את שור נגף והמית,
- **פירוק:** every word: lemma, stem (G/D/Š/N/Gt/Gtn…), tense (preterite/perfect/present/stative), person, ventive, subjunctive, *-ma* …
- **כתבי יד:** (when the exemplars differ or are damaged where the composite restores)
- **תרגומים:** CDLI: "…" (and de Ridder for MAL), with your disagreements
- **הקבלה:** [cognate]/[equivalent]/[divergence]/[absent] `<vocalized verse>` (שמות כא:לה) – comment; "מן הזיכרון" for parallels from the literature, "הצעה שלנו" for ours
- **הערות:** decisions, cruxes, alternatives
- **הערת שוליים:** (optional; becomes a footnote of the clean translation – only for the few points a reader must know)
```
- `## §N (first–last): <Hebrew heading>` for each law, with the base text's law marks (LE, LI, MAL: `laws_verify.py` checks that the § covers exactly its lines). Non-law sections: `## הפתיחה (1–7): …`, `## הפרולוג (1–49): …`, `## האפילוג (…)`, `## הקולופון (…)`.
- `### <label>` exactly as in the data (`### 168`, `### o ii 14`, `### 108'`, `### 181.a`, `### b002`). One `>` line per entry. The transliteration and the `N:` line in backticks (for Sumerian there is no `N:` line; write the ePSD2 lemmas in the **פירוק** field).
- **One source line = one Hebrew line**, even when the line is a single word; never move a word across lines (Hebrew word order inside a line may change for grammar). A broken line is `[…]`; restorations in `[ ]` follow the composite's brackets (a word is in `[ ]` when its root is broken in all exemplars); additions for sense in `( )`; `?` for uncertain readings; `*…*` for uncertain translation (guidelines §6.8).
- **Draft unvocalized, plene (כתיב מלא), from the first line.** Vocalize only names at their first occurrence in the file, ambiguous words (`מֹהַר`, `נַגָּף`, `מִסְכֵּן` …), and what the renderings tables mark as vocalized; the vocalized form must strip to the plain string.
- Numbers in Hebrew words; fractions `שליש`, `חצי`, `שני שלישים` (`שני שלישי מנה כסף`).

## 4. Echo control (guidelines §6.4; the heart of this corpus)
- **Choose by meaning first**, as if the Bible did not exist; among equally good words prefer the **cognate** if the Bible uses the cognate, otherwise a word that does **not** pre-empt the comparison. Then tag every overlap.
- The Covenant Code (Exod 21–23) and Deuteronomy 22–25 are the natural Hebrew for these laws. **Do not import their phrasing**: no `מוֹת יוּמָת`, `X תַּחַת X`, `נַגָּח`, `וְהוּעַד`, `אֶל הָאֱלֹהִים`, `לִשְׁמֹר`, `נָקִי`, `וְחָצוּ`, `יִבֵּם`, `מְאֹרָשָׂה`, `צָעֲקָה` (unless *šasû*), `וְהִכָּה`, `עִנָּהּ`, `נְבָלָה`. **But keep the real cognates visible** (`נגף`, `המית`, `שקל`, `נתן`, `בעל השור`, `נצר`, `ישר`, `נשך`, `סף`, `קבר`, `בתולה` for *batultu*, `שדה` for *ṣēru*/*eqlu* as in LH, `אמה`, `כשפים`, `לחי`, `מחץ` …), and say in the apparatus where the Torah uses another word for the same thing.
- Mark **divergences sharply** (class tiers; money for limbs vs talion; vicarious punishment; who is put to death; who decides); a divergence is as valuable as a parallel.
- **Read the rank-3 English as an echo check too**: it may import Torah vocabulary or restore a parallel out of a lacuna. A parallel that rests on a restoration must say so in the parallels table.
- Reserve the Hebrew word of a key Torah comparison for its real counterpart only, and grep your `>` lines (and LH's, via `laws_lookup.py --heb`) for the roots of the key verses before you finish.
- Quote every verse **vocalized** in backticks with its reference, in the repository's format `(שמות כא:לה)`; check with `tools/check_bible_quotes.py`.

## 5. Process
1. Build your data file(s). Read your whole range once (structure, the laws' boundaries, repeated formulas).
2. Look up in LH (`laws_lookup.py`) every formula and recurring word **before** drafting; list the ones you fix in your Part section (Decisions).
3. Draft line by line (parse → own rendering → then CDLI/de Ridder English → echo check).
4. **Three review passes**, each a separate read of the whole file(s): (a) fidelity (every content word accounted for; nothing added outside `( )`; brackets as in the edition, checked against the exemplars); (b) consistency (formulas; repeated lines identical; renderings tables; `laws_verify.py`); (c) Hebrew (read each law aloud as a sentence; register even; no unintended biblical calques; vocalize ambiguous words).
5. `laws_verify.py` → 0 problems; `check_bible_quotes.py` → 0 mismatches; write `build_translation--head.rtl.md` if it does not exist (your run prompt says) and run `laws_build_translation.py`; re-run `laws_verify.py`.
6. Write your **Part section** at the end of `project.md`: `## Part <run>: <content>` with `### Scope`, `### Decisions (translator)`, `### Open decisions for the user`, `### Progress log` (the three passes, the verify and check results), `### Parallels index` (table below), `### Proposals for the renderings` (new shared terms for later projects), `### Lessons`.
7. Also write/extend the project's `renderings.md` (project-level glossary: Akkadian/Sumerian | Hebrew | rejected | echo | lines), as in `2-חוקי-חמורבי/renderings.md`.

### Parallels index format (in your Part section; merged by `../build_parallels_index.py` into the corpus index)
`| Line | Original | Hebrew rendering | Bible | Tag | Comment |` with the header row and `|---|---|---|---|---|---|`. Line = `§N, <label>` (e.g. `§53, 168–170`; `§12, o ii 14–24`; `prol. 3`). The Bible column **starts** with a backticked vocalized quotation followed by its reference `(שמות כא:לה)` (the builder files the row by the first reference). One row per (line, verse) pair. Where useful add **cross-collection** rows (e.g. `§53, 168–170` … Comment: "LH has no ox-gores-ox law; cf. LH §250 (2883'–2890')"). Say "restored" in the Comment when the basis is in `[ ]`.

## 6. Final report (your last message; the coordinator reads only this)
Concise: lines drafted (per file), verify/check results, the 5–10 most important findings for the Torah (verse ↔ line, with the Hebrew), the decisions that later translators must follow (proposals), open decisions, anything skipped. No full file dumps.
- **Deuteronomy 22 writes the ketiv `נַעֲרָ` (no ה) in `תנך-מנוקד/`**: quote it so (`אֵין לַנַּעֲרָ חֵטְא מָוֶת`, דברים כב:כו).
