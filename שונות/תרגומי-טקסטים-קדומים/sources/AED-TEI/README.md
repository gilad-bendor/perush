# AED-TEI – the Egyptian texts of the TLA (snapshot 2018) in TEI

- **What:** S. D. Schweitzer, *AED-TEI: Corpus of Egyptian Texts for the AED – Ancient Egyptian Dictionary* (2019), a TEI
  conversion of the Thesaurus Linguae Aegyptiae database snapshot of January 2018: about 11,400 Egyptian texts, each in
  four files – the lemmatized transliteration (`<ID>.xml`), the German sentence translations (`<ID>_st.xml`), the
  German word translations in context (`<ID>_wt.xml`) and the hieroglyphs (`<ID>_hiero.xml`).
- **URL:** https://github.com/simondschweitzer/aed-tei (files through `raw.githubusercontent.com/simondschweitzer/aed-tei/master/files/<ID>…`;
  the concordance of names and IDs: `concordance_name_text_id.csv`); the whole corpus: Zenodo 10.5281/zenodo.3580939
  (177 MB zip). `dictionary.xml` is a git-LFS pointer on raw GitHub (use the Zenodo zip for it).
- **Licence:** **CC BY-SA 4.0** – committed, with attribution.
- **Retrieved:** 2026-10-23 (Round 4 run 1, the fifth-day dossier).
- **What is here:** `Merikare--pPetersburg-1116A/` – *Die Lehre für Merikare*, pPetersburg 1116A verso (TLA ID
  `YZSISQLOINELTMJDPXQ45O5IUU`; the three text files). Used for Merikare E 130–136 in
  `../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/` (`dossier_tools.py data MK`).
- **Line numbering:** the `<lb n="[page,line]"/>` of the papyrus; Helck's E numbering (E 1–144) = the n-th `<lb>` of
  the verso (E 130 = `[12,1]`), checked against the passage's content.
- **Usefulness:** high: a lemmatized, morphologically tagged transliteration with damage marks; the German translations
  are the TLA's (rank 3) – read them only after drafting (`data MK --tr`). The Egyptian run (Round 4 run 3) should
  restore the whole corpus from Zenodo.
