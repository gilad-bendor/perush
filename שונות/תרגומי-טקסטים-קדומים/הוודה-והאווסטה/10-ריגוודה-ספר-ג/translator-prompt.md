# The translators' and reviewers' shared prompt – the Rigveda, Book 3 (Round 9 run 1)

The coordinator's message names your role (translator N or reviewer N), your hymns and your part's key cases; this
file holds everything else. Corpus folder (cd there; run every tool from it):
`/home/user/perush/שונות/תרגומי-טקסטים-קדומים/הוודה-והאווסטה/` – project `10-ריגוודה-ספר-ג/`.
The user is offline: **never ask questions, never wait.** Decide, record, finish. **Do not start sub-agents. Do not
commit or run git.** Run Python as `python3 -I -B`; keep every command short-running.

## A translator
1. **Read (binding):** `../translation-guidelines.md` – the whole file, in parts (§1, §5 with every ★ rule of §5.2 and
   its "Sanskrit and Avestan" and "The Rigveda, Book 7" blocks, §6, §7); `translator-brief--vedic.md` (your workflow,
   formats and limits – follow it exactly); `renderings.md` (all of it: §3.1 names – the "(RV 7)", "(RV 2)" and "(RV 3)"
   rows apply to this book –, §5.5 Book 7's terms, §5.6 Book 2's terms, **§5.7 Book 3's pre-set terms**, §7 the reserved and gated words –
   **§7.4: never the root חטא, `פשע`, `סליחה`, `וידוי`, `חרון` in a Rigveda line** –, §8 the formulas F6–F14, §11.10–§11.28
   the merged decisions of Books 7 and 2); `10-ריגוודה-ספר-ג/project.md` (the coordinator's notes and the sections of the translators
   before you).
2. **Books 7 and 2 are your models and your dictionary of fixed Hebrew.** One Hebrew per lemma across Books 7, 2 and 3 (★). Before
   your first line run `python3 -I -B vedic_tools.py freq RV3.<a>-<b>` (your range: the commonest lemmas with the
   Hebrew already fixed for them) and, for every new lemma, `lexmap '<folded lemma regex>'` (folded: no diacritics,
   e.g. `'^daksin'`) and `grep '<Hebrew>' --all` before you fix a Hebrew word. Model files for format and register:
   `9-ריגוודה-ספר-ב/annotated-RV2.12.rtl.md`, `annotated-RV2.3.rtl.md` (an Āprī hymn), `7-ריגוודה-ספר-ז/annotated-RV7.86.rtl.md`,
   and their `translation--intro-RV<b>.<n>.rtl.md`.
3. **Per hymn:** `vedic_tools.py data RV3.<n>` → draft `10-ריגוודה-ספר-ג/annotated-RV3.<n>.rtl.md` (a `# ` title line, then
   `## ` section headings and one `### <label>` entry per pāda, as the Book 7 files) with `` `@` `` source lines → `fill` →
   `verify RV3.<n>` → `tr RV3.<n>` and Jamison (`grep -n 'III\.<n>\.' ../sources/Jamison--Rigveda-commentary/III-9-25-26.txt`)
   after drafting, for the **תרגומים** bullets (quote rank-3 wordings only from `tr` / the Jamison text, never from
   memory) → fix → `translation--intro-RV3.<n>.rtl.md` → `build RV3.<n>`. **Save each hymn as soon as it is drafted.**
4. **Repeated lines:** `data` lists the identical and similar lines with the Hebrew already given – copy it exactly,
   change only what the source changes; the formulas F12–F14 character for character (they are pre-set: translator 1 may revise F14, translator 4 F13, translator 7 F12 – with a reason, in the Proposals; then every copy follows).
5. **Bible quotations:** print every verse first (`python3 -I ../tools/check_bible_quotes.py --show <book> "<ch> <v>"`),
   write `` `…` (ספר פרק:פסוק) ``; say in words that the parallel is a shared motif of cultures that never met.
6. **At the end of your part:** the three passes (brief §6), `python3 -I -B vedic_tools.py verify RV3.<a>-<b> --strict`
   → no problems, `build RV3.<a>-<b>`, `python3 -I ../tools/check_bible_quotes.py 10-ריגוודה-ספר-ג/*RV3.<n>*` for your
   hymns → 0, then your section in `project.md` (brief §7; above `## Parallels index`), with **Proposals** for the
   coordinator (new recurring words with their Hebrew, new names, any pre-set row you revise and why).
7. **Final message** (short, ≤ 25 lines): hymns done, `verify` result, main decisions, the strongest parallels and
   "ancient mind" findings, open questions, problems.

## A reviewer (an independent fidelity review of one finished part)
You did not draft this part. Read the guidelines' §5.2 ★ rules, §6.4, §6.8, the brief, renderings §5.5–§5.7, §7–§8, and
the part's translator section in `project.md`. Then for **every** pāda of your hymns: compare the `>` line with the
source and its Zurich morphology (`data RV3.<n>`): every content word rendered; nothing added outside `( )`; person,
number, tense / mood (injunctive, subjunctive, optative, imperative), voice, negation, case relations; the פירוק matches
the Hebrew; one Hebrew per lemma (`lexmap` over the part: `python3 -I -B vedic_tools.py lexmap` and look for "more than
one Hebrew" among this part's lemmas – a split against Books 7 / 2 is a fix unless the source's sense differs); repeated
lines identical; names vocalized at their first occurrence; the intros say nothing the lines do not (no biblical idiom –
"confess", "forgive", "sin" – in notes and intros either). **Fix in place** (the annotated file, the intro), then
`build RV3.<a>-<b>`, `verify RV3.<a>-<b> --strict` → no problems, `check_bible_quotes.py` → 0. Add a short subsection
`### Review (reviewer N)` at the end of the part's section in `project.md`: the number of lines fixed, a table or list
(label – before – after – why), and rulings you leave for the coordinator. Final message: ≤ 15 lines.

## Notes for Book 3 (the coordinator)
- **Save as you go:** each hymn's annotated file is written to disk as soon as it is drafted (a VM restart or a quota
  stop then loses at most one hymn). Never write vocalized drafts (★): plene, unvocalized; vocalize names at their first
  occurrence in the book, traps (`אֵל`/`אֵלִים`, `סוֹמָה`, `מִיטְרָה`, `יָמָה` …), ambiguous and archaic words.
- **Brackets:** the Rigveda's text is whole – no `[ ]`; `( )` only for words you add for sense.
- **Section header of your part in `project.md`:** `## RV3.<a>–3.<b> (part N: …; translator N, Round 9 run 1)` with the
  sub-sections of Book 2's sections (Scope, Sources consulted, Decisions, Open decisions for the user, Progress log, The
  text on its own terms, Key parallels, Proposals for the shared renderings, Lessons for the guidelines), inserted above
  `## Parallels index`.
- `data` and `freq` read every unit of the corpus; if a source is missing (a fresh VM), say so in your message.
