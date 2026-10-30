# CAB – Corpus Avesticum Berolinense (Freie Universität Berlin)

- **What:** CAB's **linguistic corpus** of the Avestan texts (its basis edition: the Yasna, the Vīdēvdād 1–22 except 11,
  the Visperad, the Yašts), as plain text, XML and JSON; and the online **CAB Avestan Dictionary** (the CAB glossary +
  word analyses, with Bartholomae's *Altiranisches Wörterbuch* lemmas), queried per word by
  `../../הוודה-והאווסטה/vedic_tools.py ave / avelemma`.
- **URLs:** https://cab.geschkult.fu-berlin.de/exist/apps/cab/modules/get_corpus_plain.xql (also `get_corpus_xml.xql`,
  `get_corpus_json.xql`); the dictionary API https://cab.geschkult.fu-berlin.de/exist/apps/cab/dictionary/dictionary-data.xql
  (`op=search|word|glossary|lemma-words`).
- **Retrieved:** 2026-10-30 (Round 5 run 1).
- **Licence:** "® Corpus Avesticum Berolinense", the site's footer "CC" without a version → **git-ignored** (local use;
  the annotated file quotes the base line by line).
- **What is here:** `cab_corpus_plain.txt`, `cab_corpus.xml`, `cab_corpus.json`; `vd_2.tsv` (Vīdēvdād 2 = the
  corpus's `VS2.1`–`VS2.43`, "Vīdēvdād Sāde" numbering = Geldner's) made by `convert`.
- **Note:** the corpus calls itself "without repetitions", but Vd 2 is complete there (its repeated blocks are written out).
- **Line numbering:** the stanza (`1`…`43`) = Geldner 1896 = Darmesteter's paragraphs.
- **Usefulness:** high: the current edition's text, with an online per-form analysis.
