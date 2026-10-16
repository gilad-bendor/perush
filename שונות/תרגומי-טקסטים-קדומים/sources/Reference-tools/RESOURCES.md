# Reference tools for translating Akkadian (and later Sumerian) texts into Hebrew: catalogue

Compiled 2026-10-16. The audience is future translation sessions; this will be merged into the translation guidelines.

**Legend.** **Access**: FREE-API, FREE-BULK (downloadable data), FREE-PDF, FREE-WEB (HTML only), PAID, LIB (library/print only).
**✔** = URL or API call tested with `curl` on 2026-10-16 (HTTP 200 + expected content). **(unverified)** = from catalogues or search results only.
Sub-folders of `Reference-tools/` hold saved docs, sample responses, and a README per resource. Comparative flood studies are catalogued separately in `../Comparative-studies/INDEX.md`.

---

## 0. TL;DR: the default workflow for one line of Gilgameš XI / Atraḫasīs

1. **Text + normalisation + lemmas + English:** eBL corpus API ✔
   `GET https://www.ebl.lmu.de/api/texts/L/1/4/chapters/Standard%20Babylonian/XI/display` (Gilg. = `L/1/4`, Atraḫasīs = `L/1/1`). Every word has a `uniqueLemma` id such as `abūbu I`.
2. **Meaning:** `GET https://www.ebl.lmu.de/api/words/<id>` ✔ returns the **full CDA entry**, plus the CDA addenda, AfO-Register references, SAD and logograms.
3. **Usage across the literary corpus:** `GET https://www.ebl.lmu.de/api/corpus/query?lemmas=<id>` ✔ lists every occurrence. Use it to keep the translation consistent.
4. **Hard words:** CAD volume PDF (free, ✔) + eSAD (Leipzig corrections, free PDF ✔).
5. **Hebrew side:** Sefaria `/api/words/<Hebrew>` ✔ (Klein etymology notes give Akkadian cognates; BDB root preambles) → then Tawil / HALOT (paid) for the Akkadian↔Hebrew semantics.
6. **Reading the transliteration notation:** `ORACC-ATF-and-lemmatization-docs/atf-inline-tutorial.md` + `eBL-ATF-spec/ebl-atf.md`.

---

## 1. Akkadian lexica

| Resource | URL | Access | Machine access | Use it for… |
|---|---|---|---|---|
| **eBL Dictionary** (= the full **CDA**, Black/George/Postgate 2000, reproduced with Harrassowitz's permission, + CDA addenda, AfO-Register/AGI, SAD, Schramm logograms, ORACC lemma links, Arabic glosses) | https://www.ebl.lmu.de/dictionary · API `https://www.ebl.lmu.de/api/words` | FREE-API ✔. Content © (the "About" page says reproduction needs permission), so query it, don't mirror it. | `GET /api/words/<id>` ✔; search `?word=` (lemma prefix) ✔, `?meaning=` (English substring) ✔, `?root=kpr` ✔, `?vowelClass=a/u` ✔, `&origin=CDA` ✔; batch `?lemmas=id1,id2` ✔ (100 ids per call OK); **all ids:** `/api/words/all` ✔ (22,256). Details and JSON structure: `eBL-API/README.md` | **First stop for every word.** Concise meaning per stem (G/D/Š/N…), forms, logograms, derived words. Its ids are the lemma ids of the eBL Gilgameš/Atraḫasīs editions. |
| **CAD**: *Assyrian Dictionary of the Oriental Institute*, 21 vols / 26 PDFs, 1956–2010 | https://isac.uchicago.edu/publications/search?text=&sort_by=year_desc&publication_series%5B62%5D=62 | FREE-PDF ✔ (all 26 return 200; ≈ 788 MB). © ISAC, whose terms forbid redistribution and **AI training or dataset compilation** without permission. | Direct S3 URLs `https://isac-assets.s3.amazonaws.com/isac-publications/cad_<x>.pdf`. Full table with sizes: `CAD-Chicago-Assyrian-Dictionary/README.md` + `cad-volumes.csv`. The text layer has garbled diacritics (š→ß), so search unaccented. | Deep semantics, with quoted contexts sorted by period and genre. Essential for literary and rare words (e.g. *kupru*, *abūbu*, *ṣurārû*, *zumbu*). Don't commit the PDFs; keep them in a local cache. |
| **eSAD**: electronic *Supplement to the Akkadian Dictionaries* (Streck, Leipzig) | https://www.gkr.uni-leipzig.de/en/draft/altorientalisches-institut/forschung/supplement-to-the-akkadian-dictionaries | FREE-PDF ✔ (open access) | Complete PDF `…/Supplement_Dateien/eSAD_complete-min.pdf` ✔ (4.85 MB), plus per-letter PDFs (A.pdf, B.pdf …) | Corrections and new words post-CAD/AHw. Check it whenever CAD is older than ~1990. Print: LAOS 7/1–4 (Harrassowitz 2018–2025: B,P; D,T,Ṭ; G,K,Q; L,M,N,R). |
| **AHw**: von Soden, *Akkadisches Handwörterbuch* (1959–81) | — | PAID / LIB. No legal free digital copy found. | — | German. Its content reaches you indirectly through CDA (which is based on AHw) and eSAD. Not needed for this project. |
| **CDA** print (Harrassowitz, 2nd corr. printing 2000) | https://www.harrassowitz-verlag.de/title_443.ahtml | PAID, about €29 (publisher list price per search; unverified) | — | Identical content is in eBL. Buy it only if you want an offline copy. |
| **ORACC glossaries** (per-project, lemmatised, with attested forms and frequencies) | https://oracc.museum.upenn.edu/json/ | FREE-BULK ✔, **CC0** | Zip per project, e.g. `json/cams-gkab.zip` ✔ (29 MB; `gloss-akk-x-stdbab.json`, 4,019 SB entries), `json/saao-saa03.zip` (SAA 3 Court Poetry & Literary Miscellanea), `json/rinap.zip`. **The per-file URLs (`/<proj>/gloss-akk.json`, `manifest.json`) return empty bodies**, so use the zips. Format: `ORACC-ATF-and-lemmatization-docs/opendata-json-format.md` | Attested spellings ↔ normalised lemma `cf[gw]POS`. Frequency and period data. A machine-readable SB glossary. |
| **AAF Akkadian Dictionary** (Association Assyrophile de France, O. Lauffenburger) | https://www.assyrianlanguages.org/akkadian/ | FREE-WEB ✔ (© AAF) | Entry by numeric id: `dosearch.php?searchkey=<N>&language=id` ✔ (~11,000 ids). English search: POST `dosearch.php` with `latinkey=flood&language=english` ✔. | A quick look-up that **lists Semitic cognates (Proto-Semitic, Arabic, Hebrew, Ugaritic)** per entry, e.g. *erēšu* ↔ Heb. חָרַשׁ. Amateur compilation: confirm in CDA/CAD. |
| **AGI**: Sommerfeld, *Akkadische Glossare und Indizes* (AfO-Register digitised) | https://open.uni-marburg.de/handle/10.17192/es.2015.0015 | FREE (repository page ✔; file download link not verified by curl) | Also merged into eBL (`akkadischeGlossareUndIndices`) | References to post-CAD text editions per word. |
| **Schramm, *Akkadische Logogramme*** (²2010) | https://univerlag.uni-goettingen.de/handle/3/isbn-978-3-941875-65-4 | FREE-PDF ✔, CC BY-ND; **saved** in `Schramm-2010--Akkadische-Logogramme/` | Also in eBL (`logograms`, `/api/signs/<NAME>`) | Logogram → Akkadian reading (A.MA.RU = *abūbu*). |
| **Kaufman, *The Akkadian Influences on Aramaic*** (AS 19, 1974) | https://isac-assets.s3.amazonaws.com/isac-publications/as19.pdf | FREE-PDF ✔ (7.7 MB; errata `as19_errata.pdf` ✔). © ISAC terms. | PDF | Akkadian loanwords in Aramaic, with the sound-correspondence methodology. Many items are relevant to Hebrew too. |
| **Leipzig Akkadian Dictionary** (new SAW project) | https://www.saw-leipzig.de/en/research/projects/leipzig-akkadian-dictionary | project page ✔; no data yet (unverified) | — | Watch for future releases. |

## 2. Sumerian (for later phases)

| Resource | URL | Access | Machine access | Use it for… |
|---|---|---|---|---|
| **ePSD2**: *electronic Pennsylvania Sumerian Dictionary* 2 | https://oracc.museum.upenn.edu/epsd2/sux ✔ (15,944 entries) | FREE-WEB + FREE-BULK ✔ (CC0 data) | `https://oracc.museum.upenn.edu/json/epsd2.zip` ✔ (213 MB; contains `gloss-sux.json`). Sub-corpora: `epsd2-literary.zip` (40 MB), `epsd2-emesal.zip`, `epsd2-signlist.zip`. | The standard Sumerian lexicon: citation form, guide word, attested writings, periods, Akkadian equivalents. |
| **ETCSL**: Electronic Text Corpus of Sumerian Literature (Oxford) | https://etcsl.orinst.ox.ac.uk/ | FREE-WEB: **timed out from this machine (unverified)**. Wayback snapshot of 2024-12-29 ✔: https://web.archive.org/web/2024/https://etcsl.orinst.ox.ac.uk/. TEI XML was historically on the Oxford Text Archive (ota.bodleian.ox.ac.uk, also timed out). | Its literary data also lives in ORACC `epsd2-literary` and `etcsri` (`json/etcsri.zip` ✔, 13 MB) | Sumerian literary texts with translations (Flood story = ETCSL 1.7.4) and their glossary. See also the sibling `../ETCSL/` folder. |
| **Halloran, *Sumerian Lexicon*** v3.0 | http://www.sumerian.org/sumerlex.htm ✔ · PDF http://www.sumerian.org/sumerian.pdf ✔ (0.5 MB) | FREE-WEB (v3); v4 is a paid book (Logogram Publishing 2006) | HTML/PDF | A quick beginner's gloss list only. Amateur and dated, so **always confirm in ePSD2**. |
| **ORACC OSL/OGSL sign lists** | https://oracc.museum.upenn.edu/osl/ ✔ | FREE-BULK ✔ (`json/osl.zip`, `json/ogsl.zip`, `json/ogsl-signlist.zip`) | JSON | Sign names ↔ values (Sumerian and Akkadian). |

## 3. Grammar, signs, notation

| Resource | URL | Access | Use it for… |
|---|---|---|---|
| **ORACC ATF documentation** (primer, inline tutorial, structure, quick reference, translations, composites/scores, lemmatisation, *Akkadian conventions*, JSON format) | https://oracc.museum.upenn.edu/doc/help/ | FREE ✔ (CC BY-SA 3.0); **saved** in `ORACC-ATF-and-lemmatization-docs/` (18 pages, raw HTML + clean MD) | **Mandatory reading** before interpreting any ORACC, CDLI or eBL transliteration (`{d}`, `[ ]`, `#`, `!`, `?`, CAPS logograms, `%n`). Also covers the Akkadian normalisation and citation-form conventions (`akkadian-language-conventions.md`). |
| **eBL-ATF specification** | https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md | FREE ✔ (MIT); **saved** in `eBL-ATF-spec/` | The eBL dialect: normalised lines, `|` and `||` metre markers, manuscript lines in chapter ATF. |
| **eBL signs API** | `https://www.ebl.lmu.de/api/signs/<NAME>` ✔, `/api/signs?value=kur&subIndex=1` ✔, `/api/signs?listsName=MZL&listsNumber=578` ✔, `/api/signs/all` ✔ (2,497) | FREE-API | Sign → values, logograms, numbers in MZL/HZL/LAK/OBZL/SLLHA. Works as a machine substitute for Borger's MZL. |
| **Huehnergard, *A Grammar of Akkadian*** (3rd ed., Eisenbrauns 2011; HSS 45) + *Key* | (publisher pages returned 404/403; unverified) | PAID: about $50–65 (grammar) and about $30–55 (key), per retailer snippets (unverified). No open edition; the 3rd edition per its description adds an appendix of Semitic/Hebrew cognates. **Do not use** the PDFs that circulate on university servers and shadow sites. | The standard English reference grammar. Paradigms, normalisation rules, SB vs OB. |
| Other grammars | Caplice, *Introduction to Akkadian* (Biblical Institute Press, paid); Ungnad/Matouš, *Grammatik des Akkadischen* (paid); Worthington, *Complete Babylonian* (Teach Yourself, paid, about £25, unverified); Streck, *Altbabylonisches Lehrbuch* (German, paid); Hugenberger & Erickson, *Basics of Akkadian* (Zondervan, paid) | PAID | **No openly licensed Akkadian grammar was found.** Use the eBL normalisations plus the ORACC conventions doc as the working reference. |
| **Borger, *Mesopotamisches Zeichenlexikon*** (AOAT 305, ²2010, Ugarit-Verlag) | (price not found; unverified) | PAID | The standard sign list. eBL signs API + ORACC OSL cover our needs. |

## 4. Akkadian ↔ Hebrew comparative tools

| Resource | URL | Access | Machine access | Use it for… |
|---|---|---|---|---|
| **Sefaria lexicons: Klein, BDB, Jastrow, Ben-Yehuda** | `https://www.sefaria.org/api/words/<Hebrew>` ✔ | FREE-API. **Klein = CC BY-NC** (Carta 1987); BDB, Jastrow = PD | Per word ✔; autocomplete `/api/words/completion/<prefix>/Klein%20Dictionary` ✔; bulk only via the 2.6 GB MongoDB dump. Details: `Sefaria-lexicon-API/README.md` | **Klein's `notes` give the Akkadian cognate or loan source** (כֹּפֶר "pitch" ↔ Akk. *kupru*; מַבּוּל ↔ *nabulu*/*bubbulu*). BDB root preambles cite "Assyrian" comparanda. Jastrow for Aramaic. Ben-Yehuda for Hebrew vocabulary and register. |
| **BDB (PD) as data** | https://github.com/openscriptures/HebrewLexicon ✔ (`BrownDriverBriggs.xml` 2.9 MB) | FREE-BULK (PD content; the readme calls it "a work in progress") | XML keyed to Strong's | Offline BDB look-up. |
| **STEPBible TBESH** | https://github.com/STEPBible/STEPBible-Data/tree/master/Lexicons ✔ | FREE-BULK, CC BY | TSV | Brief glosses keyed to extended Strong's; cross-check only. |
| **StarLing *Semitic etymology*** database (Militarev & Kogan; the data behind the *Semitic Etymological Dictionary*) | https://starlingdb.org/cgi-bin/response.cgi?root=config&morpho=0&basename=%5Cdata%5Csemham%5Csemet&first=1 ✔ (2,923 records) | FREE-WEB | Paged HTML (`first=N`), with a query form | Proto-Semitic reconstructions with **Akkadian + Hebrew + Ugaritic + Aramaic + Arabic** reflexes and CAD/AHw/HALOT page references, e.g. *ʔab-* "father". Very good for "is this a real cognate?" questions. |
| **Tawil, *An Akkadian Lexical Companion for Biblical Hebrew*** (Ktav 2009, 456/503 pp., ISBN 978-1-60280-114-1) | https://ktav.com/products/an-akkadian-lexical-companion-for-biblical-hebrew (curl got 404; search shows softcover list price **$79.50**) | PAID; no e-book found | — | Arranged by Hebrew root, giving Akkadian cognates and **semantic and idiomatic equivalents with Akkadian quotations**. Exactly our use case. |
| **HALOT**: Koehler–Baumgartner, *Hebrew and Aramaic Lexicon of the OT* | Brill. Logos (≈ $160) and Accordance (≈ $149–299) digital editions (search snippets; unverified) | PAID | (Logos/Accordance app) | Per Hebrew word: comparative Semitic data incl. Akkadian (with AHw/CAD refs) and loanword status. The best general cognate source. |
| **Mankowski, *Akkadian Loanwords in Biblical Hebrew*** (HSS 47, Eisenbrauns 2000, 232 pp.) | https://hmane.harvard.edu/publications/akkadian-loanwords-biblical-hebrew (403 to curl) | PAID / LIB. No open-access copy found. | — | A strict, critical list of the Hebrew words that really are Akkadian loans (with the phonological criteria). Use it to avoid over-claiming. |
| **Kaufman, *Akkadian Influences on Aramaic*** | see §1 | FREE-PDF ✔ | — | Method and the Aramaic data. |
| **Cohen, *Biblical Hapax Legomena in the Light of Akkadian and Ugaritic*** (SBLDS 37, Scholars Press 1978) | — | LIB / used copies (no OA found) | — | Hapax legomena (e.g. Gen 6:14 כֹּפֶר is one) explained through Akkadian. |
| **Militarev & Kogan, *Semitic Etymological Dictionary*** I (body parts, AOAT 278/1, 2000), II (animal names, AOAT 278/2, 2005) | Ugarit-Verlag (vol. II listed at €17, sold out) | PAID / LIB | (StarLing for the data) | The detailed comparative entries. |
| **Kogan, *Genealogical Classification of Semitic*** (De Gruyter 2015) | (unverified) | PAID; possibly OA on De Gruyter (unverified) | — | The phonological correspondences Akkadian ↔ Hebrew. |
| **Gesenius**: Hebrew grammar (Kautzsch–Cowley 1910) and lexicon (Tregelles) | archive.org / Wikisource scans (PD; unverified individually) | FREE (PD) | — | Hebrew grammar reference. Etymologies pre-date the decipherment of Akkadian, so they are of little use for cognates. |
| **Hebrew-language Assyriology** | HUJI course catalogue ("The Akkadian Flood story", course 42556, shnaton.huji.ac.il, found by search; unverified); Klein & Shifra, *בימים הרחוקים ההם: אנתולוגיה משירת המזרח הקדום* (Am Oved 1996; PAID or out of print); Shifra & Klein, *עלילות גלגמש*; *אנציקלופדיה מקראית* entries (Bialik, PAID); *שנתון לחקר המקרא והמזרח הקדום* (articles, partly on JSTOR) | mostly PAID / LIB | — | **No Akkadian–Hebrew dictionary (מילון אכדי–עברי) exists in print or online** (searched in Hebrew and English). Hebrew Assyriological vocabulary must come from these translations and from Hebrew-written commentaries such as Cassuto's *מנח ועד אברהם* (Magnes, PAID). See the sibling `../Hebrew-translations--records-only/`. |

## 5. Text corpora with API (for reference)
| Resource | URL | Access | Notes |
|---|---|---|---|
| eBL corpus (Gilgameš all versions, Atraḫasīs OB/MB/SB/NA, Enūma eliš, Erra, Ludlul …) | `https://www.ebl.lmu.de/api/texts` ✔ | FREE-API | 84 texts. Composite normalised text + English translation + lemmatisation + manuscripts. See `eBL-API/README.md`. |
| eBL Fragmentarium | `https://www.ebl.lmu.de/api/fragments/<museum no.>` ✔, `/api/fragments/query?lemmas=<id>` ✔ | FREE-API | Individual tablets (e.g. K.252). |
| ORACC projects | https://oracc.museum.upenn.edu/json/ ✔ | FREE-BULK (CC0) | Lemmatised corpora (SAA, RINAP, CAMS/GKAB …). |
| CDLI | https://cdli.earth/ ✔ (site); data mirror https://github.com/cdli-gh/data ✔ (last push 2023-10-11) | FREE | Catalogue + ATF of almost every tablet. The per-artifact export URLs I tried returned empty bodies or redirects (unverified). |
| SEAL: Sources of Early Akkadian Literature (HUJI) | https://seal.huji.ac.il/ ✔ | FREE-WEB | OB/OAkk literary texts with translations. Coverage of OB Atraḫasīs/Gilgameš is expected but not checked here. See the sibling `../SEAL/`. |

## 6. Comparative flood literature
→ `../Comparative-studies/INDEX.md` (49 items: 8 open-access PDFs downloaded, plus free-web, paid and library items).

---

## 7. Paid resources worth buying, ranked for *this* project
| # | Title | Publisher | Approx. price | E-book? | Why |
|---|---|---|---|---|---|
| 1 | Tawil, *An Akkadian Lexical Companion for Biblical Hebrew* (2009) | Ktav | ≈ $80 softcover ($125 hardcover earlier) | none found | The only book organised **Hebrew root → Akkadian cognates and idioms**, which is this project's core comparison. |
| 2 | HALOT (Koehler–Baumgartner) | Brill | ≈ $150–160 in Logos/Accordance (unverified) | yes (Logos, Accordance) | Systematic Akkadian comparanda for every Hebrew word. Covers what Klein/BDB lack. |
| 3 | Huehnergard, *A Grammar of Akkadian* 3rd ed. + *Key* | Eisenbrauns (now Penn State UP) | ≈ $50–65 + $30–55 (unverified) | (unverified) | The reference grammar for checking normalisation and verbal forms. It has a Semitic cognates appendix. |
| 4 | Lambert & Millard, *Atra-ḫasīs: The Babylonian Story of the Flood* (1969; Eisenbrauns reprint 1999) | Eisenbrauns | ≈ $40 (from the Comparative-studies survey) | (unverified) | The standard edition and philological commentary for Atraḫasīs. Complements Wasserman 2020 and eBL. |
| 5 | Mankowski, *Akkadian Loanwords in Biblical Hebrew* (HSS 47, 2000) | Eisenbrauns | (unverified; about $30–40) | (unverified) | A rigorous loanword list. Keeps the Hebrew comparisons honest. |
| 6 | Cohen, *Biblical Hapax Legomena in the Light of Akkadian and Ugaritic* (1978) | Scholars Press / SBL | used copies | no | Hapax explanations via Akkadian. |
| 7 | Borger, *Mesopotamisches Zeichenlexikon* (²2010) | Ugarit-Verlag | (unverified) | no | Only if sign-level palaeography becomes necessary. eBL/ORACC cover routine needs. |
| — | **Not worth buying:** CDA (€29; its full text is free in eBL); AHw (German, superseded for us); George, *The Babylonian Gilgamesh Epic* (OUP 2003, very expensive; George's revised edition and translation are free in the eBL corpus); Halloran v4 (amateur). |
