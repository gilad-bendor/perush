# The translators' and reviewers' shared prompt – the Rigveda, Book 2 (Round 8 run 3)

The coordinator's message names your role (translator N or reviewer N), your hymns and your part's key cases; this
file holds everything else. Corpus folder (cd there; run every tool from it):
`/home/user/perush/שונות/תרגומי-טקסטים-קדומים/הוודה-והאווסטה/` – project `9-ריגוודה-ספר-ב/`.
The user is offline: **never ask questions, never wait.** Decide, record, finish. **Do not start sub-agents. Do not
commit or run git.** Run Python as `python3 -I -B`; keep every command short-running.

## A translator
1. **Read (binding):** `../translation-guidelines.md` – the whole file, in parts (§1, §5 with every ★ rule of §5.2 and
   its "Sanskrit and Avestan" and "The Rigveda, Book 7" blocks, §6, §7); `translator-brief--vedic.md` (your workflow,
   formats and limits – follow it exactly); `renderings.md` (all of it: §3.1 names – the "(RV 7)" and "(RV 2)" rows
   apply to this book –, §5.5 Book 7's terms, **§5.6 Book 2's pre-set terms**, §7 the reserved and gated words –
   **§7.4: never the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` in a Rigveda line** –, §8 the formulas F6–F11, §11.10–§11.22
   Book 7's merged decisions); `9-ריגוודה-ספר-ב/project.md` (the coordinator's notes and the sections of the translators
   before you).
2. **Book 7 is your model and your dictionary of fixed Hebrew.** One Hebrew per lemma across Books 7 and 2 (★). Before
   your first line run `python3 -I -B vedic_tools.py freq RV2.<a>-<b>` (your range: the commonest lemmas with the
   Hebrew already fixed for them) and, for every new lemma, `lexmap '<folded lemma regex>'` (folded: no diacritics,
   e.g. `'^daksin'`) and `grep '<Hebrew>' --all` before you fix a Hebrew word. Model files for format and register:
   `7-ריגוודה-ספר-ז/annotated-RV7.86.rtl.md`, `annotated-RV7.2.rtl.md` (an Āprī hymn), and their
   `translation--intro-RV7.<n>.rtl.md`.
3. **Per hymn:** `vedic_tools.py data RV2.<n>` → draft `9-ריגוודה-ספר-ב/annotated-RV2.<n>.rtl.md` (a `# ` title line, then
   `## ` section headings and one `### <label>` entry per pāda, as the Book 7 files) with `` `@` `` source lines → `fill` →
   `verify RV2.<n>` → `tr RV2.<n>` and Jamison (`grep -n 'II\.<n>\.' ../sources/Jamison--Rigveda-commentary/II-9-25-26.txt`)
   after drafting, for the **תרגומים** bullets (quote rank-3 wordings only from `tr` / the Jamison text, never from
   memory) → fix → `translation--intro-RV2.<n>.rtl.md` → `build RV2.<n>`. **Save each hymn as soon as it is drafted.**
4. **Repeated lines:** `data` lists the identical and similar lines with the Hebrew already given – copy it exactly,
   change only what the source changes; the formulas F9–F11 character for character.
5. **Bible quotations:** print every verse first (`python3 -I ../tools/check_bible_quotes.py --show <book> "<ch> <v>"`),
   write `` `…` (ספר פרק:פסוק) ``; say in words that the parallel is a shared motif of cultures that never met.
6. **At the end of your part:** the three passes (brief §6), `python3 -I -B vedic_tools.py verify RV2.<a>-<b> --strict`
   → no problems, `build RV2.<a>-<b>`, `python3 -I ../tools/check_bible_quotes.py 9-ריגוודה-ספר-ב/*RV2.<n>*` for your
   hymns → 0, then your section in `project.md` (brief §7; above `## Parallels index`), with **Proposals** for the
   coordinator (new recurring words with their Hebrew, new names, any pre-set row you revise and why).
7. **Final message** (short, ≤ 25 lines): hymns done, `verify` result, main decisions, the strongest parallels and
   "ancient mind" findings, open questions, problems.

## A reviewer (an independent fidelity review of one finished part)
You did not draft this part. Read the guidelines' §5.2 ★ rules, §6.4, §6.8, the brief, renderings §5.5–§5.6, §7–§8, and
the part's translator section in `project.md`. Then for **every** pāda of your hymns: compare the `>` line with the
source and its Zurich morphology (`data RV2.<n>`): every content word rendered; nothing added outside `( )`; person,
number, tense / mood (injunctive, subjunctive, optative, imperative), voice, negation, case relations; the פירוק matches
the Hebrew; one Hebrew per lemma (`lexmap` over the part: `python3 -I -B vedic_tools.py lexmap` and look for "more than
one Hebrew" among this part's lemmas – a split against Book 7 is a fix unless the source's sense differs); repeated
lines identical; names vocalized at their first occurrence; the intros say nothing the lines do not (no biblical idiom –
"confess", "forgive", "sin" – in notes and intros either). **Fix in place** (the annotated file, the intro), then
`build RV2.<a>-<b>`, `verify RV2.<a>-<b> --strict` → no problems, `check_bible_quotes.py` → 0. Add a short subsection
`### Review (reviewer N)` at the end of the part's section in `project.md`: the number of lines fixed, a table or list
(label – before – after – why), and rulings you leave for the coordinator. Final message: ≤ 15 lines.
