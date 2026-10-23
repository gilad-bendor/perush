# AED-TEI – the Egyptian texts of the TLA (snapshot 2018) in TEI

- **What:** S. D. Schweitzer, *AED-TEI: Corpus of Egyptian Texts for the AED – Ancient Egyptian Dictionary* (2019), a TEI
  conversion of the Thesaurus Linguae Aegyptiae database snapshot of January 2018 ("Teilauszug der Datenbank des Vorhabens
  Strukturen und Transformationen des Wortschatzes der ägyptischen Sprache", urn:nbn:de:kobv:b4-opus4-29190): about 11,400
  Egyptian texts, each in four files – the lemmatized transliteration (`<ID>.xml`), the German sentence translations
  (`<ID>_st.xml`), the German word translations in context (`<ID>_wt.xml`) and the hieroglyphs (`<ID>_hiero.xml`; not
  downloaded).
- **URL:** https://github.com/simondschweitzer/aed-tei (files through
  `https://raw.githubusercontent.com/simondschweitzer/aed-tei/master/files/<ID>.xml`, `<ID>_st.xml`, `<ID>_wt.xml`; the
  concordance of names and IDs: `concordance_name_text_id.csv`); the whole corpus: Zenodo 10.5281/zenodo.3580939 (177 MB
  zip; **zenodo.org was unreachable from the cloud on 2026-10-23**, and raw GitHub was enough). `dictionary.xml` (the
  lemma list) is **not** in the GitHub repository (only in the Zenodo zip): the corpus tools use the TLA lemma ids and
  the `_wt` glosses instead (`egypt_tools.py lemma`).
- **Licence:** **CC BY-SA 4.0** (stated in every file header) – committed, with attribution. **Never scrape the live TLA
  website** (`thesaurus-linguae-aegyptiae.de`): it sits behind a JavaScript wall and shows crawlers a decoy page of fake
  records (the Egypt survey, 2026-10-21).
- **Retrieved:** 2026-10-23 (Round 4 run 1 for Merikare; Round 4 run 3 for the rest).
- **What is here** (one folder per text; the TLA ID in the file names):

| Folder | Text (TLA title) | TLA ID | Lines (`<lb>`) | Used in |
|---|---|---|---|---|
| `Amenemope--pBM-EA-10474/` | Rto: Die Lehre des Amenemope (ed. P. Dils) | 5JO44VJZERAB3HQUHMFSMNXH6I | 551 (`1.1`–`28.1`) | `חכמה-ובריאה-במצרים/1-…` (AM) |
| `Amenemope--tLouvre-E-17173/` | Die Lehre des Amenemope 2.15–18 | J54RCGRIM5CYLB5T27RUS5G7D4 | 8 | witness |
| `Amenemope--oKairo-SR-1840/` | … 3.11–4.10 | WWBWAINUHFAXBCPM4JT7CR4EZA | 11 | witness |
| `Amenemope--tMoskau-I.1.d.324/` | … 6.10–7.1 | IC4YJ45UHFF53NCIOCBKQZ4UXE | 8 | witness |
| `Amenemope--pStockholm-MM-18416/` | … 10.18–14.5 | HRK4O53VK5GX7AKGVDXUWXIQEU | 34 | witness |
| `Amenemope--tTurin-CGT-58005/` | … 24.1–25.9 | BG2HK57AOVAXPLDFLPF2LEN3ZE | 33 | witness |
| `Merikare--pPetersburg-1116A/` | Verso: Die Lehre für Merikare | YZSISQLOINELTMJDPXQ45O5IUU | 149 (Helck's E 1–144 = the n-th `<lb>`) | dossier MK; project 2 (MK) |
| `Merikare--pMoskau-4658/`, `Merikare--pCarlsberg-VI/` | Die Lehre für Merikare (other witnesses) | Z3IP3NIFJVGTNIV47MWEMXKQJQ, FTVMO4SFGBHHBA4RTMZITSRNAM | 100, 55 | witnesses |
| `Heavenly-Cow--KV17-Seti-I/` | Das Buch von der Himmelskuh (KV 17) | WHEOIX5P5ZAVVFU4BGO6OWASV4 | 95 columns | project 3 (HC) |
| `Heavenly-Cow--Tutankhamun-shrine/`, `Heavenly-Cow--KV9-Ramses-VI/` | the same (the oldest copy; KV 9) | 62AD3D3IY5EMTHDDJZ5UV42RWM, ENW4HOGRDVHFFB4UNYYQZQ4ZKY | 21, 23 | witnesses |
| `PT-571--West-wall/`, `PT-571--West-wall-south/` | PT 571 (Pepi I; a damaged second copy) | RKYIL56JTJFP3JAJI2FTEWARKA, PFW6EIFCGRBQ5KWI44CEVLMVAI | 4, 4 | project 2 (PT571) |
| `PT-486--West-wall/`, `PT-486--East-wall/` | PT 486 (Pepi I; Pepi II) | ZAV2GQBVWBDSBOQIX4JNXP3DYI, 43NPRIN3UJGCJN7UOHQKGNYJLA | 3, 9 | project 2 (PT486) |
| `PT-527--West-wall/` | PT 527 (Merenre) | UY2LJNHE4JEFLMATP2CN3YLXH4 | 4 | project 2 (PT527) |
| `PT-600--East-wall/` | PT 600 (Pepi II) | NHY7Q7ERPNEWTK5BWG7KELURNU | 7 | project 2 (PT600) |
| `Westcar--pBerlin-P-3033/` | Die Erzählungen des pWestcar | J4EXGHLCL5DR7JHSPDWTVEKMDY | 305 | (the wax crocodile, 2.x–4.x: for the fifth-day dossier) |
| `Bremner-Rhind--4-Overthrowing-Apophis/`, `Bremner-Rhind--5-Names-of-Apophis/` | pBM 10188: the Book of Overthrowing Apophis; the Names of Apophis | A2PTGDCYB5E4XK6OORW6V4QHOE, 2Z3OHH5EKZEUTAFMAIWR2PXTGE | 264, 60 | (the Apophis spells: for the fifth-day dossier) |

- **Line numbering:** the `<lb n="[…]"/>` of each manuscript (page.line for papyri; columns for the Cow; the wall,
  register and line for the Pyramid Texts, e.g. `[P/V/W 34 = 663]`, which the corpus tool shortens to `P/V/W.34`).
- **Markup:** see `../../tools/aed2md.py` (`[ ]` lost, `( )` defective writing, `⟨ ⟩` omitted, `{ }` superfluous,
  `⸢ ⸣` damaged). In Amenemope, the TLA's `<gap/>` between two analyses of one written word is not a loss.
- **Usefulness:** high: a lemmatized, morphologically tagged transliteration with damage marks. The German translations
  are the TLA's (rank 3) – read them only after drafting (`egypt_tools.py tr`).
