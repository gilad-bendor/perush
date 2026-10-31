# Brief for translators and reviewers – מילים באבן

Read first: `../translation-guidelines.md` (in full; the ★ rules of §5.2), `corpus.md`, `renderings.md`, and the
project's annotated file. Then:
- **Read the base, not the literature.** The base line is the first backticked line of each entry; it comes from
  `../sources/<source>/<file>.tsv` (filled by `stone_tools.py fill`). Do not change it; if the base is wrong, say so in
  a note.
- **Hebrew / Moabite (reading):** never add, drop or move a letter; vowels are a proposal; uncertain words unvocalized;
  the Name unvocalized; glosses only in **פירוק**. `stone_tools.py verify KEY` must say 0 problems.
- **Punic / Aramaic (translation):** one line = one line; brackets follow the base; unknown terms transliterated in
  italics; the reserved words and traps of `renderings.md` §4 (checked by `verify`).
- **Bible quotations:** print every verse first (`python3 -I ../tools/check_bible_quotes.py --show <book> "<ch> <v>"`),
  quote it exactly, write `` `…` (ספר פרק:פסוק) ``, and run `check_bible_quotes.py` on the file.
- **Tags** (guidelines §6.4): [cognate] / [equivalent] / [divergence] / [absent]; the **הערות** explain the text on its
  own terms too (the ancient mind).
