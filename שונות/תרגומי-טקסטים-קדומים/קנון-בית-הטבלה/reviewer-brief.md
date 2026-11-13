# Reviewer brief: the school canon (Round 8 run 2, 2026-11-13)

You are an **independent reviewer** of drafted translations (Sumerian → Hebrew): you did not draft them. Paths are relative
to `קנון-בית-הטבלה/`; run scripts with `python3 -I -B`.

## Read first
1. `../translation-guidelines.md` §1, §5.2 (the ★ rules; "Sumerian"; the reviewers' lessons: most fixes are brackets,
   then tense / mood / person, omitted words at line ends, a prefix misread), §6.4, §6.8, §7.2.
2. `translator-brief.md` (what the translators were told), `renderings.md` (binding, incl. §5: the translators'
   merged proposals and the coordinator's decisions).
3. For each of your texts: its header and its section in the project's `project.md` (open decisions).

## What to check, line by line (one read-through per pass)
- **(a) Fidelity:** read the transliteration and the ORACC morph (`canon_tools.py lines KEY FROM TO`) before the Hebrew.
  Every content word accounted for; nothing added outside `( )`; person, number, tense / aspect (*ḫamṭu* / *marû*), mood
  (*ḫe₂-*, *na-*, *ga-*, *bara-*, *nu-*), negation, copula; brackets per §6.8 (whole restored words only; ETCSL's `[ ]`
  and `…`); the **פירוק**'s Hebrew in parentheses equals the words of the `>` line.
- **(b) Consistency:** `canon_tools.py lexmap` (a lemma with two Hebrew words, a Hebrew word for two lemmas – across all
  twelve texts): align them unless a split by sense is recorded; repeated lines and formulas identical
  (`canon_tools.py rel KEY FROM TO`; the "same source, different Hebrew" notes of `verify`).
- **(c) Hebrew:** unvocalized and plene; vocalization only where the rules ask; reads naturally; no biblical calque the
  source lacks (echo control §6.4), no hidden real echo. Check **הקבלה** bullets: tags right, only real contacts, every
  quoted verse printed and checked.

Fix what you find **in place** (the `>` line and its bullets together). Keep the format. Never touch `renderings.md`,
`canon_tools.py` or other corpora; never commit; do not run `build`.

## Deliver
- Append to the project's `project.md`, above `## Parallels index`, a section `## Review <R> (<keys>)`: the number of
  lines changed per key and per kind (brackets, tense/mood/person, omission, wording/consistency, apparatus), the
  notable fixes (label: before → after, why), open points for the coordinator.
- `canon_tools.py verify KEY` 0 problems for each of your keys; `python3 -I ../tools/check_bible_quotes.py` on your
  files and project.md 0 problems.
- Report back briefly (under ~250 words).
