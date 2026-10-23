# VedaWeb – the Rigveda (TEI)

- **What:** the VedaWeb platform's Rigveda data (University of Cologne): per stanza, several text versions (the Zurich
  text with its morphology, Aufrecht, the padapāṭha, Lubotsky, Van Nooten & Holland …) and translations (Geldner,
  Griffith, Grassmann, Renou, Elizarenkova …).
- **URL:** https://raw.githubusercontent.com/VedaWebProject/vedaweb-data/main/rigveda/TEI/rv_book_01.tei (44 MB);
  licences per layer in `…/rigveda/TEI/vedaweb_corpus.tei` (the header).
- **Licence:** per layer: the **Zurich text and morphology CC BY 4.0** (committed here, as a TSV); Aufrecht and other
  layers CC BY-NC-SA; some translation layers are copyrighted editions (Geldner 1951, Renou, Elizarenkova) – so the TEI
  extract is **git-ignored**.
- **Retrieved:** 2026-10-23 (Round 4 run 1, the fifth-day dossier).
- **What is here:** `rv_1.032--zurich.tsv` (committed): hymn 1.32, one row per pāda – label, the Zurich text, each
  token's lemma and morphology; made by `../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py rvtsv` from
  `rv_1.032--extract.tei` (git-ignored; hymn 1.32 cut out of `rv_book_01.tei`).
- **Line numbering:** stanza + pāda (`1a`–`15d`).
- **Usefulness:** high: the morphology is human-made (Zurich); a "Vedic Genesis" project would restore the whole TEI.
