# ORACC AkkLove — Akkadian Love Literature (Wasserman 2016, online)

- **Project:** ORACC **AkkLove**, "Akkadian Love Literature" (N. Wasserman et al.): "all early Akkadian literary texts related to love and sex known to date", based on N. Wasserman, *Akkadian Love Literature of the Third and Second Millennium BCE* (LAOS 4, Harrassowitz 2016), where the commentary and the introduction are. The texts also appear on SEAL (`https://seal.huji.ac.il`, "Love Literature" and "Incantations: Love"; same editions).
- **URLs:** project `https://oracc.museum.upenn.edu/akklove/`; data `https://oracc.museum.upenn.edu/json/akklove.zip` (JSON export 2024-11-11); per text `https://oracc.museum.upenn.edu/akklove/<id>/html` (transliteration + translation).
- **Retrieved:** 2026-10-21 (with `curl --cacert ../../../tools/certs/.combined-ca-bundle.crt`).
- **Licence:** **CC0** ("This data is released under the CC0 license", `metadata.json`). The `.md` conversions are committed; the raw zip and HTML are gitignored (`.gitignore` here) and re-obtainable from the URLs above. LAOS 4 itself (the book) is © Harrassowitz and not owned.

## Files
- `texts.tsv` — the catalogue: id, LAOS 4 number, period, provenience, museum number, primary publication (all 32 texts of the project).
- `LAOS4-NN--<id>--lemmatised.md` — transliteration with a `norm:` line (Wasserman's normalization) and a `lem:` line (citation form[guide word=sense]POS) per line (`../../../tools/cdl2md.py … --norm`).
- `LAOS4-NN--<id>--translation.md` — the project's English translation, line by line (`../../../tools/oracc_html2tr.py`): Wasserman 2016's translation (rank 3).
- `LAOS4-NN--<id>.html`, `akklove.zip` — raw downloads (gitignored).
Converted: the 25 Old Babylonian and Old Akkadian texts (LAOS 4 01–07, 10, 13, 14a–f, 15–18, 20, 22–26). Not converted: the Middle Babylonian / Middle Assyrian texts (08, 09, 11, 12, 19, 21) and the Isin incantation tablet IB 1554 (27–34; empty in the export).

## Line numbering
ORACC labels = the tablet's surface, column and line (`o i 12`, `r 3'`), as in LAOS 4. Our annotated files write them without spaces (`o.i.12`, `r.3'`).

## Usefulness
**Base text** (rank 1) of `קולות-היום-יום/1-שירי-אהבה/` (the OB love lyrics, dialogues and love incantations). The normalization and lemmas are rank 2; the translation is rank 3 (read after our own reading). Second opinion: SEAL's pages of the same texts (gitignored, not downloaded in this run).
