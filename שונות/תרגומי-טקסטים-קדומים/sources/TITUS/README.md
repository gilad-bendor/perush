# TITUS – Thesaurus Indogermanischer Text- und Sprachmaterialien (Frankfurt), the mirror host

- **What:** TITUS's e-texts of the **Śatapatha Brāhmaṇa (Mādhyandina)** (Weber 1855, accented) and the **Aitareya
  Brāhmaṇa** (Aufrecht 1879), one HTML page per adhyāya (ŚB: `sbmNNN.htm`) or per khaṇḍa (AB: `abNNN.htm`).
- **URLs:** https://titus.fkidg1.uni-frankfurt.de/texte/etcs/ind/aind/ved/yvw/sbm/sbm002.htm, `…/sbm008.htm` (ŚB 1.2, 1.8);
  https://titus.fkidg1.uni-frankfurt.de/texte/etcs/ind/aind/ved/rv/ab/ab236.htm … `ab241.htm` (AB 7.13–18 = adhyāya 33.1–6;
  the AB pages run 1–285 through the eight pañcikās: 30, 41, 50, 32, 34, 36, 34, 28 khaṇḍas). The main host
  titus.uni-frankfurt.de was down; the mirror works (a bogus path also answers 200).
- **Retrieved:** 2026-10-30 (Round 5 run 1).
- **Licence:** "No parts of this document may be republished in any form without prior permission by the copyright
  holder" (TITUS, 2013). The editions themselves (Weber 1855, Aufrecht 1879) are public domain. So the pages and our TSVs
  are **git-ignored** (local use); the annotated files quote the base line by line, as for eBL.
- **What is here:** the raw pages; `sb_1.8.1.tsv`, `sb_1.2.3.tsv`, `ab_7.13-18.tsv` made by
  `../../הוודה-והאווסטה/vedic_tools.py convert` (one row per TITUS sentence (ŚB) or per line inside a sentence (AB);
  TITUS's superscript aspiration ʰ written h; the page footer dropped). Re-fetch with the URLs above, then `convert`.
- **Line numbering:** ŚB kaṇḍikā + TITUS sentence (`1a`, `1b`); AB khaṇḍa.sentence + line letter (`13.1a`).
- **Usefulness:** the only accessible e-text of the AB (GRETIL has none); the ŚB with Weber's accents. The text is written
  without word division (Devanāgarī-style sandhi) in the ŚB; the AB is word-divided, with its gāthās marked (verse lines).
