# Reviewer brief: Ur III kingship (projects 12–14; Round 9 run 2, 2026-11-15)

You are an **independent reviewer** of drafted translations (Sumerian → Hebrew): you did not draft them. Paths are relative
to `אגדות-מלכים/`; run scripts with `python3 -I -B`.

## Read first
1. `../translation-guidelines.md` §1, §5.2 (the ★ rules; "Sumerian"; the reviewers' lessons: most fixes are brackets,
   then tense / mood / person, omitted words at line ends, a prefix misread; a reviewer scans notes and intros for the
   reserved words too), §6.4, §6.8, §7.2.
2. `translator-brief--ur3.md` (what the translators were told), `renderings.md` §14 (binding, incl. §14.7: the merged
   proposals and the coordinator's decisions) and what §14.0 says binds your text.
3. For each of your texts: its header and its `project--<PART>.md` (open decisions).

## What to check, line by line (one read-through per pass)
- **(a) Fidelity:** read the transliteration and the ORACC morph (`ur3_tools.py lines KEY FROM TO`) before the Hebrew.
  Every content word accounted for; nothing added outside `( )`; person, number, tense / aspect (*ḫamṭu* / *marû*), mood
  (*ḫe₂-*, *na-*, *ga-*, *bara-*, *nu-*), negation, copula; brackets per §6.8 (whole restored words only; ETCSL's `[ ]`
  and `…`); the **פירוק**'s Hebrew in parentheses equals the words of the `>` line; numbers (KL) equal ETCSL's.
- **(b) Consistency:** `ur3_tools.py lexmap KEY…` (a lemma with two Hebrew words, a Hebrew word for two lemmas):
  align them unless a split by sense is recorded; repeated lines and formulas identical (`ur3_tools.py rel KEY FROM TO`;
  the "same source, different Hebrew" notes of `verify`); the Šulgi hymns with Šulgi A (`../קנון-בית-הטבלה/1-העשירייה/annotated-SA.rtl.md`).
- **(c) Hebrew:** unvocalized and plene; vocalization only where the rules ask; reads naturally; no biblical calque the
  source lacks (echo control §6.4), no hidden real echo – in the `>` lines, the notes and the intros. Check **הקבלה**
  bullets and the parallels tables: tags right, only real contacts, every quoted verse printed and checked.

Fix what you find **in place** (the `>` line and its bullets together; a row of the parts' parallels table if its
Hebrew changed). Keep the format. Never touch `renderings.md`, the tools or other corpora; never commit; do not run `build`.
In KL / RL, the lines copied from the flood references (KL 1–47, RL 1–31, 99–108, 117–124) are checked for identity
with them: if you change one, list it under **Revisions of the copied flood-reference lines** (the coordinator applies it there).

## Deliver
- Append to the part's `project--<PART>.md` a section `## Review (<reviewer letter>)`: the number of lines changed per
  kind (brackets, tense/mood/person, omission, wording/consistency, apparatus), the notable fixes (label: before →
  after, why), open points for the coordinator.
- `ur3_tools.py verify KEY` 0 problems for each of your keys; `python3 -I ../tools/check_bible_quotes.py` on your files
  and the part files: 0 problems.
- Report back briefly (under ~200 words).
