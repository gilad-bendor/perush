# EUPT – Edition des ugaritischen poetischen Textkorpus (Göttingen)

- **What:** the new critical digital edition of the Ugaritic poetic texts (DFG long-term project, start 2023; ed.
  Clemens Steinberger, with Noah Kröll, Christiane Meinhold, Reinhard Müller, Marion Possiel, Frilla Smilgies). Each
  tablet is collated (Louvre, British Museum; casts at the Collège de France; photos), transliterated, vocalized,
  translated (German and English), analysed morphologically and commented, with a new hand copy.
- **URL:** https://eupt.uni-goettingen.de/ ; TextAPI: https://eupt.uni-goettingen.de/api/eupt/collection.json →
  `KTU__<t>/manifest.json` → `html/KTU_<t>_facsimile.html`, `html/KTU_<t>_philology.html`.
- **Retrieved:** 2026-10-31 (Round 5 run 3). On that date the collection held **KTU 1.14 (Draft 3.2, 2025-07-18), 1.15,
  1.16 (latest version 2025-12-18)** – the Kirta epic. Aqhat (1.17–1.19) and the Rephaim (1.20–1.22) are in phase 1 of
  the work plan but not online yet (the 2026 Louvre / Collège de France collations covered them).
- **Licence:** **CC BY-SA 4.0** (stated in each manifest and on the hand copies). Cite as the manifest's
  "Zitationshinweis" (e.g. "KTU 1.14. *Edition des ugaritischen poetischen Textkorpus (EUPT)*. Version Draft 3.2 …").
- **In this folder:** `raw/` (the HTML views and manifests as downloaded; git-ignored, re-fetch with `python3 -I
  tools/eupt2md.py fetch 1.14 1.15 1.16`); `text/KTU-<t>.json` and `.md` (per line: the transliteration and epigraphic
  notes; per unit: vocalization, morphology, German and English translation, philological notes; made by `python3 -I
  tools/eupt2md.py convert …`; committed – CC BY-SA, attribution above).
- **Line numbering:** KTU³'s (= CUC's), "i 30" → our "I:30"; EUPT adds parenthesized labels for reconstructed lines not
  on the tablet ("(i 1)" in 1.15) and lacks CUC's 1.16 II:59–60 (illegible traces).
- **Use:** rank 1 for the readings of Kirta (the translation follows EUPT where it differs from KTU³/CUC, and says so);
  its translations and commentary are rank 3–4, read after drafting (`מיתוסים-אוגריתיים/ugarit_tools.py eupt KEY LABEL
  [--tr]`). The most current edition of these tablets; a model for the Aqhat and Rephaim tablets when they appear.
