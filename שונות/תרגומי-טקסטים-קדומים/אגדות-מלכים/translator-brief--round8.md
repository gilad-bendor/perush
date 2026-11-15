# Translator brief: Anzû, the Akkade legends, the OB royal epics, Idrimi (projects 8–11 of the legends-of-kings corpus), 2026-11-14

A brief for the translators of Round 8 run 4. **It is the Etana brief (`translator-brief--etana.md`) and the Cuthaean
brief (`translator-brief--cuthaean.md`) with the changes below: read both in full and apply them, replacing ET / CL by
your key (AN, AK, RE, ID), their files by your project's, and renderings §10 / §11 by §13 (§10's grammar and gated
words and §11 still bind).** The coordinator's prompt names your part (renderings §13.6) and its labels. You may be
resumed part by part: keep your own reading and strings across the parts.

## Changes against those briefs
1. **Pace and saving** (guidelines §5.1): one agent at a time; write each section to its file as soon as it is drafted
   (a quota stop or a VM restart may cut you off: what is on disk survives); before starting a part, look at the files:
   if some of your lines are drafted, check them and continue from the first missing label.
2. **Read first:** the guidelines in full (§1, §5.2 ★, §6, §6.7, §6.8, §7.2); `corpus.md`; `renderings.md` §0, §2,
   §10.2–§10.4, §11 and **§13 in full**; your project's `project.md`; as models `4-אגדת-כותה/annotated-SB.rtl.md` (an
   eBL chapter of this corpus, the same dynasty) and `2-אגדת-הולדת-סרגון/annotated.rtl.md`.
3. **Your data:** `python3 -I -B kings_tools.py data <KEY> <first> <last> <scratch>/data-<part>.md` – labels
   `<text>.<label>` (`I.1`, `OBII.a+3`, `CH.12`, `FL.ii1`, `RA.r1'`, `ZL.iii20`, `ID.45`). For AN: eBL's block of each
   line (N, Foster's T, lemmas, notes, parallels, the manuscripts' ATF) and the related lines in all six versions with
   the Hebrew already given. For AK, RE, ID: the transliteration, SEAL's lemmas (a draft: check the form and stem), SEAL's
   English line (rank 3), and the near-identical lines in all these texts; SEAL's whole translation and notes are in the
   base folder's `node-*.md` (CDLI's ST and ID have no lemmas and no English: read the ATF yourself – `sz` = š, `s,` = ṣ,
   `t,` = ṭ, `_…_` = logograms). `pars <KEY> <first> <last>` lists the repeats.
4. **Never retype the transliteration (★):** write each entry's source line as `` `@` `` and run
   `python3 -I -B kings_tools.py fill <KEY>` – it writes the base line exactly (eBL's N, or the SEAL / CDLI
   transliteration); `verify <KEY>` checks it. Run `fill` after each section.
5. **The annotated files** exist with their title and `<!-- כותרת־נוסח: … -->` line. The first translator of a file
   writes the Hebrew header paragraphs (**נוסח הבסיס** – for AN: eBL L/1/10, Heinrich (ed.), Mitto, Jiménez, Hätinen
   (rev.), Foster (tr.), the manuscripts from `../sources/eBL/Anzu-<…>/manuscripts.md`; for SEAL texts: SEAL node N,
   the tablet, its edition (SEAL's catalogue and `## Notes`), "SEAL, ed. Streck & Wasserman"; for ST / ID: CDLI P-number,
   the editions named there; **מספור** (our labels = SEAL's / CDLI's / eBL's, with the column or side prefix the tool
   adds); **סימנים**; **תרגומים להשוואה** (Foster in eBL; SEAL's English; for ST Knudtzon's German only if you read it
   from a page you fetched); **תגי הקבלה**; a paragraph **on the text itself**; **מלים שמורות**; **שמות**), then `---` and
   the sections `## <from>–<to>: <Hebrew heading>` (no section heading starts with bold text).
6. **Gates:** `verify <KEY>` checks RESERVED_R8 (§13.4), the TRAPS (names) and later the FORMULAS of §13.3. Grep before
   fixing any new Hebrew word (★): `python3 -I -B kings_tools.py grep all '<regex>'`, and for the whole folder
   `python3 -I ../tools/harmonize_survey.py heb '<regex>' --show 3` / `… src '\*<lemma>\*' --show 3`. A gate that blocks
   a correct rendering is a tool bug: say so in your proposals instead of writing around it.
7. **Bible quotations (★):** print every verse first (`python3 -I ../tools/check_bible_quotes.py --show "ישעיהו" "יד יג"`),
   quote it as `` `…` (ספר פרק:פסוק) `` – never "ספר פרק:פסוק `…`" (the checker skips that form) – and run the checker on
   your files before you finish.
8. **Brackets:** the partial-restoration rule: a word whose root letters are preserved (in at least one manuscript for
   AN) is not bracketed even if an ending is restored; a word entirely restored is `[ ]`; `…` for what is lost. A SEAL
   line that is only `[...]` or `x x [...]` is still an entry: `> […]` (or the few readable words).
9. **Versions (AN):** SB first (AN1–AN2), then OB II, OB III, NA (AN3). Identical Akkadian = identical Hebrew; a
   different word = a different Hebrew word; the apparatus says what each version keeps, changes, lacks. **Sargon the
   Lion (LI)** is a score: an entry `A: … ‖ B: …` is one composite line from two witnesses: translate the fuller
   witness, and note the other's differences in the apparatus.
10. **Write `<project>/project--<part>.md`** at the end of each part (progress and passes; `### Parallels index
    (<part>)` with exactly `| Line | Source | Hebrew rendering | Bible | Tag | Comment |`; key findings – what the text
    shows of the ancient mind first; open decisions; **Proposals for the corpus renderings** with the strings exactly as
    written).
11. Do **not** edit `renderings.md`, `corpus.md`, `parallels-index.md`, the tools, the guidelines, `project.md`, other
    projects. Do not commit. No background jobs left running. Your final reply (short: the coordinator's context is
    small): what you translated, the checks' results, the key findings, open decisions, anything skipped or uncertain.
