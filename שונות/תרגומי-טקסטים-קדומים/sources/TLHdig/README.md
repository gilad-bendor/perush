# TLHdig – Thesaurus Linguarum Hethaeorum digitalis, Beta 0.3 (Hittite)

- **What:** transliterations of essentially every published Hittite tablet and fragment (23,937 XML files, by CTH
  number), with morphological analyses and German glosses for many words (Mainz / Würzburg, HPM).
- **URL:** Zenodo 10.5281/zenodo.20328284 (`TLHbasisONLINE25_1_ZENODO_Beta_03.zip`, 74 MB; published 2026-05-21).
  Zenodo answered 403 ("unusual traffic") once on 2026-10-23 and 200 a minute later: retry.
- **Licence:** **CC BY 4.0** – the zip is git-ignored (size); the CTH 321 files are committed.
- **Retrieved:** 2026-10-23 (Round 4 run 1, the fifth-day dossier).
- **What is here:** `TLHbasisONLINE25_1_ZENODO_Beta_03.zip` (git-ignored; fetch recipe); `CTH-321/` – the Illuyanka
  myth's eight manuscripts (KBo 3.7, KBo 12.83, KBo 12.84, KBo 22.99, KBo 34.33+, KUB 17.5, KUB 17.6, KUB 36.54),
  extracted with `unzip -j`. Used for KBo 3.7 i 9–20 (`dossier_tools.py data IL`).
- **Format notes:** `<lb lnr="Vs. I 9"/>` lines; `<w trans=… mrp0sel=… mrp1=…>`: the selected analysis is the number in
  `mrp0sel` (`lemma@gloss@form@…`); `<del_in/> … <del_fin/>` = `[ ]`, `<laes_in/> … <laes_fin/>` = `⸢ ⸣`, `<d>` =
  determinative (`{D}`), «» erased.
- **Caveat (TLHdig's own words):** "neither a dictionary, nor a critical text edition"; per manuscript, so a project
  builds its own composite. The Hittite run (Round 4 run 6) should restore the whole zip.
