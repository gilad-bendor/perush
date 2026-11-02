# GRETIL – Göttingen Register of Electronic Texts in Indian Languages

- **What:** the **Mahābhārata, book 3** (the BORI critical text, e-text `mbh_03_u.htm`), the **Śatapatha Brāhmaṇa 1**
  (`sb_01_u.htm`, unaccented, input by Ananthanarayana and Lehman; not our base: TITUS has the accents), and the
  **Kaṭha Upaniṣad** (TEI `sa_kathopaniSad.xml`, the Vienna University Student Team, 2016).
- **URLs:** https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/2_epic/mbh/mbh_03_u.htm ;
  https://gretil.sub.uni-goettingen.de/gretil/1_sanskr/1_veda/2_bra/satapath/sb_01_u.htm ;
  https://gretil.sub.uni-goettingen.de/gretil/corpustei/sa_kathopaniSad.xml . The Aitareya Brāhmaṇa is **not** on GRETIL
  ("restricted download from TITUS": see `../TITUS/`).
- **Retrieved:** 2026-10-30 (Round 5 run 1).
- **Licence:** the HTML e-texts say "for reference purposes only; copyright as for source file" → **git-ignored**; the
  Kaṭha TEI is **CC BY-NC-SA 4.0** → committed (`sa_kathopaniSad.xml`, `katha_1-3.tsv`).
- **What is here:** the three files; `mbh_3.185.tsv` (local) and `katha_1-3.tsv` (committed) made by
  `../../הוודה-והאווסטה/vedic_tools.py convert`.
- **Line numbering:** MBh: śloka + half (`17e`; a bare number = the speaker line "X uvāca"), the BORI numbering.
  Kaṭha: vallī.verse + half (`1.1a`); the TEI's `KaU_1.1` = vallī 1, verse 1 (adhyāya 1 = vallīs 1–3).
- **Usefulness:** high (the critical MBh text; a clean Kaṭha).
