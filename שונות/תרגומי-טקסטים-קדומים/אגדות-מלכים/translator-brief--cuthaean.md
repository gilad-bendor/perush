# Translator brief: the Cuthaean Legend of Narām-Sîn (project 4 of the legends-of-kings corpus; eBL L/1/12), 2026-10-31

A brief for the translator of `4-אגדת-כותה/` (Round 5, run 5). **It is the Etana brief (`translator-brief--etana.md`)
with the changes below: read that file in full and apply it, replacing ET by CL, Etana's files by this project's, and
renderings §10 by §11 (§10's grammar and gated words still bind).** The coordinator's prompt names your part (CL1–CL4)
and its lines. You are one translator resumed part by part: keep your own reading and strings across the parts.

## Changes against the Etana brief
1. **Pace and saving** (guidelines §5.1): one agent at a time; write each section to its file as soon as it is drafted;
   before starting a part, look at the files: if some of your lines are drafted, check them and continue from the first
   missing label.
2. **Read first:** the guidelines in full (§1, §5.2 ★, §6, §6.7, §6.8, §7.2); `corpus.md`; `renderings.md` §0, §2,
   §10.2–§10.4 and **§11 in full**; `4-אגדת-כותה/project.md`; as models `3-אגדת-אתנה/annotated-II.rtl.md` (an eBL
   chapter of this corpus) and `2-אגדת-הולדת-סרגון/annotated.rtl.md` (Sargon: the same dynasty and genre).
3. **Your data:** `python3 -I kings_tools.py data CL <first> <last> <scratch>/data-<part>.md` (labels `SB.1`,
   `MBA.a+3`, `OBI.b+12` …) – per line eBL's block (N, Foster's T, lemmas, notes, parallels, the manuscripts' ATF) and
   the related lines in all five versions with the Hebrew already given. `pars CL <first> <last>` lists the repeats.
4. **Never retype the transliteration (★):** write each entry's source line as `` `@` `` and run
   `python3 -I kings_tools.py fill CL` – it writes eBL's N exactly; `verify CL` checks it.
5. **The annotated files** exist with their title and `<!-- כותרת־נוסח: … -->` line. The first translator of a file
   writes the Hebrew header paragraphs (as the Etana brief §2 says: **נוסח הבסיס** – eBL L/1/12, Mitto (ed.), Földi,
   Hätinen, Heinrich, Jiménez (rev.), the manuscripts from `../sources/eBL/Cuthaean-<…>/manuscripts.md`; **מספור**;
   **סימנים**; **תרגומים להשוואה** – Foster in eBL; Westenholz 1997 only from eBL's notes; **תגי הקבלה**; a paragraph
   **on the version itself**; **מלים שמורות**; **שמות**), then `---` and the sections `## <from>–<to>: <Hebrew heading>`.
6. **Gates:** `verify CL` checks RESERVED_CL (renderings §11.4) by the eBL lemma, the TRAPS (names), and later the
   FORMULAS of §11.3. Grep before fixing any new Hebrew word (★): `python3 -I kings_tools.py grep all '<regex>'`, and for
   the whole folder `python3 -I ../tools/harmonize_survey.py heb '<regex>' --show 3` / `… src '\*<lemma>\*' --show 3`.
7. **Bible quotations (★):** print every verse first (`python3 -I ../tools/check_bible_quotes.py --show "מלכים ב" "יז ל"`),
   quote it as `` `…` (ספר פרק:פסוק) `` – never "ספר פרק:פסוק `…`" (the checker skips that form) – and run the checker on
   your files before you finish.
8. **Brackets:** the partial-restoration rule: a word whose root letters are preserved in at least one manuscript of
   this chapter is not bracketed even if an ending is restored; a word entirely restored is `[ ]`. Most of the
   independent reviewers' fixes in Round 5 were brackets: get them right the first time.
9. **Versions:** SB first (CL1–CL2), then MB A/B (CL3), then OB I/II (CL4). Identical Akkadian = identical Hebrew;
   a different word = a different Hebrew word; the apparatus says what each version keeps, changes, lacks.
10. **Write `4-אגדת-כותה/project--CL<n>.md`** at the end of each part (Etana brief §5.3: progress and passes;
    `### Parallels index (CL<n>)` with exactly `| Line | Source | Hebrew rendering | Bible | Tag | Comment |`; key
    findings; open decisions; **Proposals for the corpus renderings** with the strings exactly as written).
11. Do **not** edit `renderings.md`, `corpus.md`, `parallels-index.md`, the tools, the guidelines, `project.md`, other
    projects. Do not commit. No background jobs left running. Your final reply: what you translated, the checks'
    results, the key findings, open decisions, anything skipped or uncertain.
