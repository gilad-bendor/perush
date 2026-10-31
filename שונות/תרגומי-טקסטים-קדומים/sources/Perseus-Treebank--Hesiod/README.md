# The Perseus Ancient Greek Dependency Treebank – Hesiod

- **What:** the AGDT 2.1 (release editor G. Celano; annotators listed in each file's header) for Hesiod's *Theogony*
  (`tlg0020.tlg001.perseus-grc1.tb.xml`, 8,234 tokens, 7,052 words without punctuation and elliptic nodes) and *Works
  and Days* (`tlg0020.tlg002.perseus-grc1.tb.xml`, 5,935 words): every word with its lemma, a 9-position morphological
  tag (`postag`) and its syntactic head and relation.
- **URL:** https://raw.githubusercontent.com/PerseusDL/treebank_data/master/v2.1/Greek/texts/<file>
- **Licence:** CC BY-SA 3.0 US (the repository's README: "Copyright 2014 The Perseus Digital Library, Tufts University")
  – committed, with attribution.
- **Retrieved:** 2026-10-24 (Round 4 run 4).
- **Line numbering:** the treebank is in sentences, not lines. The Theogony's words carry a `cite` ("…:1.<line>"); the
  WD's carry none. `../../tools/perseus2md.py align <TEI> <treebank>` attaches every word to its line of the Perseus
  TEI by its letters (diacritics, elision and case ignored; a text word split in the treebank, οὐδέ = οὐ + δέ, is
  handled): **0 unaligned words** in either poem (`… check`). The Theogony's `cite` disagrees with the alignment at Th.
  386, 578 and 613 (the treebank's numbering, not the words); Th. 576–577 (bracketed lines) have no treebank words.
- **Known slips** (check every parse that carries a decision): Th. 116 γένετʼ lemmatized γενέτης (= γίγνομαι); some
  lemmas are lower-case where the text has a god's name (γαῖα, θέμις, χάος) and some names have a stray mark (ʽἑλικών);
  Ἑλικωνιάδες as a plural lemma.
- **Usefulness:** high: lemma and morphology for every word, so the translators parse from data, not from memory; the
  corpus tool's gates and checks license by the lemmas.
