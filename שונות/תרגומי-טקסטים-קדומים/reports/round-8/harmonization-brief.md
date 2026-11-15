# Round 8 harmonization – the brief for the three batch agents (the lead, 2026-11-15)

You are one of three agents applying the cross-corpus harmonization after Round 8, by the lead's delegation (the user's
standing rule: the lead settles minor rendering splits). Work from the folder `שונות/תרגומי-טקסטים-קדומים/`.

**Read first:** `translation-guidelines.md` §5.2 ("A harmonization pass", "Organizing a run" lines on harmonization;
"The Round 5/6/7 finalization" blocks) and §6.7 in full (every cross-corpus decision so far, and the cross-language
principles of 2026-10-30 and 2026-11-02, and the rule of 2026-11-09); `harmonization--2026-11-13.md` (the format and
the reasoning of the last pass); the Round 8 run reports named for your batch (`reports/round-8/run-<n>.md`, section
"Cross-corpus splits left for the lead"); and the `renderings.md` of every corpus you touch.

**Your items:** your batch's paragraph in `reports/round-8/finalization-plan.md` §2.

**For each item:**
1. Survey both ways with `python3 -I tools/harmonize_survey.py` (`parse` / `src` on the source word – the whole lemma
   family, not only the form; `heb` on each candidate Hebrew, with `--src`, to find collisions with other source words
   in every corpus). Corpora that write the lemma plain in the פירוק bullet (Vedic, Avestan, Egyptian) are surveyed by
   their own segment shape (§5.2, the Round 7 finalization).
2. Decide by the established principles: one Hebrew per source word across the corpora; the majority / earliest corpus
   wins unless the cognate rule, a fixed formula, a reservation or a recorded reason decides; across languages, §6.7's
   principles (a cognate reservation protects a Semitic text's own cognate; a loanword's Hebrew belongs to its source
   language; inside one language the cognate keeps the Hebrew and the other word moves; a cognate's Hebrew is not lent
   to a non-cognate equivalent). A split by real sense may be **kept** – then say why. Never bend a line to pass a
   gate: fix or license the gate in the corpus tool instead.
3. Apply a change to **every** line that carries the word (not only the listed ones): the `>` line, the פירוק bullet's
   Hebrew, and the notes / intros / section headings / renderings rows that quote it; keep niqqud and plene spelling as
   the file has them; then rebuild the generated `translation*.rtl.md` with the corpus tool's `build` (never edit a
   generated file by hand), and run the corpus verifier `--strict` and `python3 -I tools/check_bible_quotes.py` on the
   files you changed.
4. Add a line to each touched corpus's `renderings.md`: "2026-11-15 harmonization (after Round 8): …" listing its
   changed lines.

**Rules:** touch only the corpora of your batch (if an item reaches into another batch's corpus, do not edit it:
report it, and the lead applies it). **Never run git** (no add, commit, push, checkout, stash). Use your own scratch
directory for helper scripts: `/tmp/claude-0/-home-user-perush/783c6ad0-e604-5d49-b1ab-3f8415edeaab/scratchpad/batch-<X>/`.
Never quote a Bible verse from memory (print it from `../../תנך-מנוקד/` first). Do not edit the shared files
(guidelines, STATUS, history, tools.md): the lead does.

**Your output:** write `reports/round-8/harmonization-batch-<X>.md`: a table in the format of
`harmonization--2026-11-13.md` section A (changes: # | source word | Hebrew (binding) | survey before | lines changed |
reason) and section B (kept, with reasons), then "Verification" (every command you ran and its result), then "For the
lead" (items outside your corpora, gate bugs, anything you could not settle). Your final message: a short summary
(rows changed / kept, lines changed, verifier results, items for the lead).
