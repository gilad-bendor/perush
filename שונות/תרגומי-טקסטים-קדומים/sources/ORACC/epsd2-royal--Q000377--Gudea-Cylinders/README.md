# ORACC epsd2/royal Q000377 — Gudea Cylinders A and B (lemmatised, with ePSD2 morph)

- **What:** the ePSD2 "royal" corpus's text of the Gudea Cylinders (RIME 3/1.1.7 CylA, CylB, Edzard 1997; the ETCSRI transliteration), 1,300 lines labelled `A i 1` … `B xxiv 17`, every word lemmatised (citation form, guide word, POS) with the **morph** field (`{mu.i.b:~;il₂}`) that decides the prefix chain and aspect.
- **Source:** `../_bulk/epsd2-royal.zip` (downloaded 2026-10-18 from `https://oracc.museum.upenn.edu/json/epsd2-royal.zip`, gitignored), member `epsd2/royal/corpusjson/Q000377.json` (extracted 2026-10-20); web https://oracc.museum.upenn.edu/epsd2/royal/Q000377 (HTML view saved as `Q000377--epsd2-royal.html`; it has no translation).
- **Licence:** CC0 (ORACC JSON data). The `.md` is committed; the raw JSON (9.9 MB) and HTML (2 MB) are gitignored.
- **File:** `Q000377--lemmatised-morph.md` (`tools/cdl2md.py --morph`).
- **Numbering:** identical to ETCSL's `*A1.1*` labels (checked line by line, `בניין-המקדש/temple_tools.py conc GU`).
- **Usefulness:** lemma + morph for every line (rank 2) of `בניין-המקדש/1-גליליות-גודאה/`; `temple_tools.py data` merges it into the translators' data files.
