# TLHdig – Thesaurus Linguarum Hethaeorum digitalis, Beta 0.3 (Hittite)

- **What:** transliterations of essentially every published Hittite tablet and fragment (23,937 XML files, by CTH
  number), with morphological analyses and German glosses for many words (Mainz / Würzburg, HPM).
- **URL:** Zenodo 10.5281/zenodo.20328284 (`TLHbasisONLINE25_1_ZENODO_Beta_03.zip`, 74 MB, md5
  `f9acbc8db3111cc7dd88d82f7819a912`; published 2026-05-21), `https://zenodo.org/api/records/20328284/files/TLHbasisONLINE25_1_ZENODO_Beta_03.zip/content`.
  Zenodo answered 403 ("unusual traffic") once on 2026-10-23 and 200 a minute later; on 2026-10-24 it answered at once.
- **Licence:** **CC BY 4.0** – the zip is git-ignored (size; recipe in `fetch-recipes.tsv`); the folders below are committed.
- **Retrieved:** 2026-10-23 (Round 4 run 1, the fifth-day dossier: `CTH-321/`), 2026-10-24 (Round 4 run 6: the rest).
- **What is here** (extracted with `unzip -j`, one folder per CTH; `CTH 9xx_XML_*` sub-folders merged):
  - `CTH-321/` – the Illuyanka myth (KBo 3.7 etc.), for the dossier;
  - `CTH-292/` – the Laws, second tablet "If a vine" (37 manuscripts: KBo 6.10+, 6.11, 6.12, 6.13+, 6.26, KBo 25.85+,
    KUB 29.23+, 29.33+ …), the base of our composite of HL 101–200 (CHiL has not edited it yet);
  - `CTH-264/` – the Instructions for Temple Personnel (19 manuscripts; KUB 13.4 = 307 lines), the base of our composite;
  - `CTH-391/`, `CTH-394/`, `CTH-407/`, `CTH-410/`, `CTH-757/` (KUB 9.31, the collective tablet with Uḫḫamuwa, Zarpiya and
    Ašḫella) – the elimination rituals' manuscripts, for the word glosses (the composites are HPM's, `../HPM/`).
- **Format notes:** `<lb lnr="Vs. I 9"/>` lines (`{€n}` = which joined fragment); `<w trans=… mrp0sel=… mrp1=…>`: the
  selected analysis is the number in `mrp0sel` (`lemma@gloss@form@…`; often blank = unselected); `<del_in/> … <del_fin/>`
  = `[ ]`, `<laes_in/> … <laes_fin/>` = `⸢ ⸣`, `<d>` = determinative (`{D}`), `<parsep/>` = a paragraph divider (a § end in
  the Laws). Read with `python3 -I tools/tlh2md.py summary|lines|words|md`.
- **Caveat (TLHdig's own words):** "neither a dictionary, nor a critical text edition"; per manuscript, so a project
  builds its own composite; "epigraphical and philological quality … is uneven". HT 1 (Ašḫella B / Uḫḫamuwa A) is present
  only for its col. I–II 16 (CTH 757).
