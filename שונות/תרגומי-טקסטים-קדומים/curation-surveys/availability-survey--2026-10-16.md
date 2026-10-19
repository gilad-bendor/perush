# Availability survey: Mesopotamian texts (beyond the flood stories) for Hebrew translation

Compiled 2026-10-16 for the תרגומי-טקסטים-קדומים project. Nothing was translated and nothing was written into `sources/`. Raw API responses, zips and scripts are cached under
`/private/tmp/claude-501/-Users-giladben-dor-dev-perush---------------------------/2c8a8da9-f235-4164-8149-4d1791735ef2/scratchpad/availability/` (subfolders `ebl/`, `oracc/`, `etcsl/`, `seal/`, `laws/`, `pd/`, `scripts/`).

**Legend**
- **verified** = I fetched it on 2026-10-16 and checked the content: HTTP 200 plus the expected data, with line counts computed from the data. **reported** = from catalogues, search results or my own knowledge, not checked by fetching.
- **Lines** = the edition's line count: a composite (eBL, ETCSL, ORACC Q-texts) counts verses; a single tablet (CDLI P-texts, SEAL) counts tablet lines.
- **Preservation.** How each corpus was measured:
  - *eBL*: computed from the reconstruction tokens of every line. A line is "intact" if no word has any broken sign, "partial" if some word is broken or there is a `[...]` gap, and "lost" if every word is broken. "Words in [ ]" is the share of words entirely inside brackets, **restored or lost**.
  - *ORACC*: the share of words whose graphemes are all marked `break: missing`, again restored or lost.
  - *ETCSL*: lines containing a `<damage>` milestone or an illegible `&X;` sign; "heavily broken" means ≥ half the words are illegible or there are no words. Gaps are summed from the `<gap extent>` notes.
  - *SEAL*: the count of `[` in the transliteration.
- **Lic.** = licence. **PD** = public domain.

---

## 0. Key findings

1. **The eBL corpus is the best source for SB Akkadian literature** (verified): it has a normalised composite, an English translation of nearly every line, lemmas, all manuscripts and notes. 222 of its 300 chapters actually have lines (53 of those are divination/medical), and 166 are literary, magical or šuʾila chapters. It has complete or near-complete editions of Enūma eliš (1,098 lines, very well preserved), all of Gilgameš SB I–XII (2,683 lines) plus 26 OB/MB/NA chapters, Ludlul I–V (534), Theodicy (288), Anzû (OB + SB, 694), Etana (OB/MA/SB, 585), Descent of Ištar (159), Nergal and Ereškigal (MB 87 + SB 333), Adapa (175), Poor Man of Nippur (161), Cuthaean Legend (345), Counsels of Wisdom (159), Dialogue of Pessimism (93), Advice to a Prince (55), the fables, 11 Great Hymns and Prayers (Šamaš Hymn = "Great Prayer to Šamaš", 200), Maqlû I–VIII + RT (1,595, Abusch) and about 45 šuʾilas.
   - **Empty chapters (verified):** Erra II–V (only Tablet I, 191 lines, has text), *Šimâ milka*, Aluzinnu, the Series of the Fox, Prayers to Marduk 1–2, OB/MB Angim, Bīt mēseri RT.
   - **Not in the corpus at all:** Šurpu, the Marduk Prophecy, the Sargon Birth Legend.
   - **Licence:** none is stated. The site footer says "© electronic Babylonian Library" (verified in the ebl-frontend source), and the code is MIT. Treat the editions as copyrighted.
2. **ORACC** (verified):
   - SAA 2 (Esarhaddon's Succession Treaty, 691 lines, 4% bracketed), SAA 3 (52 literary texts), SAA 9 (11 prophecy texts), RINAP 3 (Sennacherib, 261 texts), TCMA/laws (Middle Assyrian Laws, 48 tablets), CAMS/Ludlul, CMAwRo/Maqlû (9 composites), AkkLove (32 SEAL love texts) and ETCSRI (Gudea cylinders, 1,298 lines) are all downloadable as zips.
   - **The zips hold no translations.** The per-text HTML view (`/<project>/<id>/html`) does include the English translation (verified for SAA 2, SAA 9, RINAP 3, Ludlul, Maqlû, MAL and AkkLove).
   - **Licence:**
     - The zip `metadata.json` says "CC0".
     - Every SAAo/RINAP/TCMA catalogue record and project page says "The annotated edition is released under **CC BY-SA 3.0**".
     - The AkkLove page says "© SEAL project".
     - So treat the translations and editions as CC BY-SA 3.0 (AkkLove as ©), and the raw lemmatised data as CC0.
3. **CDLI has full composites, with English translations, of the four OB/Ur III law collections** (verified, a major find):
   - Laws of Hammurabi P464358: 3,641 lines, with transliteration, normalisation (`#tr.ts`) and English for every line.
   - Lipit-Ištar P464355: 503 lines.
   - Ur-Namma P432130: 456 lines.
   - Eshnunna P480696: 195 lines, with normalisation and English.
   - There is also the full ATF of the Louvre stele, P249253 (3,642 lines).
   - CDLI Terms of Use: transliterations and translations "may be freely copied, aggregated and re-used according to common and fair academic practice", with attribution. Images are restricted.
   - The translator of the CDLI English is not named in the ATF.
4. **ETCSL** (the local bulk copy, CC BY-NC-SA 3.0, verified): it has all 394 Sumerian compositions with English prose translations, 381 translation files in all. It has **no law collections**; those are in CDLI and ETCSRI (the ETCSRI copies of Ur-Namma and Lipit-Ištar are only short prologue fragments).
5. **SEAL** (verified): about 200 OB/MB texts with transliteration and English translation. The highlights:
   - the **prologue and epilogue of the Code of Hammurabi** (node 7520, 800 lines);
   - **Agušaya A + B** (311 + 137 lines);
   - the OB Ištar hymn "Ištar Louvre" (248);
   - **OB Gilgameš** II and III (216 and 247), plus 12 smaller OB Gilgameš tablets;
   - OB **Etana** (102), OB **Anzû** II–III (82 + 34);
   - the Sargon and Narām-Sîn legends;
   - the OB "**Man and his God**" (69);
   - "A Father and his Son" (549);
   - the **love lyrics** (LAOS 4: 1, 143 lines; ZA 49, 108; YOS 11 24, 43 …);
   - the new LB "Divine Love Lyrics" (46 manuscripts) and the LB chronicles (ABC 7 Nabonidus Chronicle, ABC 17, 22, 23).

   Many MB entries (Gilgameš MB except Boğazköy 1 and Ugarit 1; Etana MA; the Tukultī-Ninurta Epic; the Cuthaean Legend MC 7 21A/B; Lugal-e; Šūpê-amēli; the Instructions of Šuruppak MB; Anzû MB) are **catalogue entries without text**. The licence is not stated (© HUJI per the footer).
6. **Public domain**, verified on archive.org:
   - King 1902, *Seven Tablets of Creation* I–II;
   - Harper 1904, *Code of Hammurabi*, with transliteration and translation;
   - Zimmern 1901, *Beiträge* (contains **Šurpu**, the only legal full edition found for it);
   - Thompson 1903–4, *Devils and Evil Spirits* (Udug-ḫul);
   - King 1907, *Chronicles*;
   - Langdon 1923, *Babylonian Epic of Creation*;
   - Luckenbill 1924, OIP 2, *Annals of Sennacherib* (free ISAC PDF).

   **Open access:** Lenzi (ed.), *Reading Akkadian Prayers and Hymns* (SBL ANEM 3, 2011; PDF verified 200, 6.2 MB) and Rozzi, *The Akkadian Great Hymns and Prayers* (Ca' Foscari 2024; page verified, CC BY reported).

---

## 1. Master table: one row per text

Columns: Text · Lang. · Period · Best edition/source + exact URL/API path · Lines · Preservation · Translation in source? · Licence · Notes. eBL rows sum their chapters; Appendix A has the figures per chapter.

### 1a. Akkadian literature: eBL corpus (all **verified**)
API base: `https://www.ebl.lmu.de/api/texts/<genre>/<cat>/<idx>/chapters/<stage>/<chapter>/display`; web: `https://www.ebl.lmu.de/corpus/<genre>/<cat>/<idx>`. Lic.: no licence; © eBL.

| Text | Lang. | Period | Edition / source | Lines | Preservation | Transl. | Lic. | Notes |
|---|---|---|---|---|---|---|---|---|
| **Enūma eliš** I–VII | Akk. (SB) | 1st mill. | eBL `L/1/2` (A. C. Heinrich) | 1,098 | Excellent. I, IV, VI, VII ≥ 90% of lines intact; III has 7% of words in [ ]; V is the weakest (44/158 intact) | EN all lines (+AR for I, VII) | © | 23–75 mss per tablet. Top candidate. |
| **Gilgameš** SB I–XII | Akk. | SB | eBL `L/1/4` (A. R. George) | 2,683 | Good overall. IV poor (59% of words in [ ], 72 lost lines); X 34%; XII 30%; I, VI, XI good | EN (George), ≥ 99% of lines | © | XI is already done. |
| Gilgameš OB (II Penn, III Yale, Schøyen₁₋₃, Nippur, Harmal₁₋₂, Ishchali, IM, VA+BM, UM, CUNES, SM) | Akk. (OB) | OB | eBL `L/1/4` `Old Babylonian/<name>` | 882 (14 ch.) | OB II very good (94/145 intact); III fair; the small tablets vary | EN | © | Also in SEAL (with Streck's translation). |
| Gilgameš MB/NA (Nippur, Ur, Boğ₁₋₃, Emar₁₋₂, Megiddo, Priv₁, Ug₁₋₂, NA x, y) | Akk. | MB/NA | eBL `L/1/4` | 656 (13 ch.) | Mostly fragmentary; Ug₁ is good | EN | © | |
| **Erra and Išum** | Akk. | SB | eBL `L/1/5` (E. Jiménez) | **I only: 191**; II–V have 0 lines | I is very good (122 intact, 1% in [ ]) | EN | © | II–V must come from Cagni 1969 / Taylor (paid). |
| **Ludlul bēl nēmeqi** I–V | Akk. | SB | eBL `L/2/2` (A. Hätinen) | 534 | I–II excellent; III–IV damaged (IV: 12/53 lines lost); V fair | EN (~95%) | © | Also ORACC cams/ludlul (I–IV, CC BY-SA). |
| **Babylonian Theodicy** | Akk. | SB | eBL `L/2/1` (Heinrich, Mitto) | 288 | Fair. 195 partial, 20 lost, but only 4% of words in [ ] | EN 265/288 (+AR) | © | Acrostic. |
| **Anzû** (OB II–III; SB I–III; NA) | Akk. | OB/SB | eBL `L/1/10` (Heinrich) | 694 | SB II good, SB I/III fair, OB III poor | EN | © | |
| **Etana** (OB Morgan, Susa; MA; SB I–III) | Akk. | OB–SB | eBL `L/1/9` (Z. Földi) | 585 | SB II fair (64/152 intact); MA 32 lost lines | EN | © | |
| **Descent of Ištar** (SB + NA) | Akk. | SB/NA | eBL `L/1/8` (A. Setälä) | 148 + 11 | Very good (91/148 intact, 3% in [ ]) | EN | © | |
| **Nergal and Ereškigal** (MB Amarna; SB Sultantepe/Uruk) | Akk. | MB/SB | eBL `L/1/6` (T. Mitto) | 87 + 333 | MB fair; SB 233 partial / 33 lost | SB: EN + DE; MB: **DE only** | © | |
| **Adapa** (MB Amarna + SB) | Akk. | MB/SB | eBL `L/1/7` (Mitto) | 78 + 97 | MB good; SB fair | EN | © | |
| **Poor Man of Nippur** | Akk. | SB | eBL `L/1/11` (Heinrich) | 161 | Good (72 intact, 3 lost) | EN | © | |
| **Cuthaean Legend of Narām-Sîn** (OB I–II; MB A–B; SB) | Akk. | OB–SB | eBL `L/1/12` (Mitto) | 345 (SB 180) | SB good (94/180 intact); OB/MB fair | EN | © | |
| **Counsels of Wisdom** | Akk. | SB | eBL `L/2/3` (Földi) | 159 | Good (88 intact, 5% in [ ]) | EN | © | Proverbs-like; close to Proverbs and Ben Sira. |
| **Dialogue of Pessimism** | Akk. | SB | eBL `L/2/4` (A. Fadhil) | 93 | Good | EN (Foster) + LA + AR | © | Qohelet parallel. |
| **Advice to a Prince** | Akk. | SB | eBL `L/2/5` (Mitto) | 55 | Excellent (50 intact) | EN | © | Fürstenspiegel; prophetic parallels. |
| Series of the Poplar / Ox and Horse / Spider; Palm and Vine; Poor Forlorn Wren | Akk. | SB | eBL `L/2/8`, `/9`, `/11`, `/12`, `/13` (Jiménez) | 82 / 217 / 59 / 54 / 42 | Palm and Vine excellent; Ox and Horse poor (60 lost lines) | EN | © | Fables (cf. Jotham's fable, Judg 9). |
| **Great Prayer (Hymn) to Šamaš** | Akk. | SB | eBL `L/3/4` (G. Rozzi) | 200 | Very good (111 intact, 3% in [ ]) | EN | © | Justice of the sun god; Ps 19. |
| Great Prayer to Nabû | Akk. | SB | eBL `L/3/5` (Rozzi) | 185 | Poor (only 11 intact; 17% in [ ]) | EN | © | Rozzi 2024 OA has a fuller edition. |
| Marduk's Address to the Demons | Akk. | SB | eBL `L/3/3` (J. Peterson) | 253 | Excellent (228 intact) | EN | © | 71 mss. |
| Hymn to the Queen of Nippur; Bullussa-rabi's Gula Hymn; Syncretistic Hymns to Ištar, Marduk (*Eriš šummi*), Gula; Ištar 2; Ninurta as Savior; Macranthropic Ninurta | Akk. | SB | eBL `L/3/6` … `/13` | 257; 200; 36; 88; 226; 224; 55; 73 | Gula (B.-r.) and Ninurta Savior excellent; Ištar 2 poor | EN | © | |
| **Maqlû** I–VIII + Ritual Tablet | Akk. | SB | eBL `Mag/1/1` (T. Abusch) | 1,595 | Very good (I–III ≥ 79% intact; VIII weakest) | EN (~98%) | © | Also ORACC cmawro/maqlu (CC BY-SA). |
| šuʾilas to Adad, Anu, Bēlet-ilī, Damkina, Dilbat, Ea, Enlil, Gula, **Ištar** (16), Šamaš (6), Ninlil … | Akk. | SB | eBL `Mag/2/*`, `Šui/1/*` (Adad: A. Lenzi) | 1–123 each; Ištar 2 = 123 | Ištar 1–3 and Šamaš 1 excellent; many short | EN | © | `Šui` must be URL-encoded (`%C5%A0ui`). |
| Saĝba I; Bīt mēseri FI, RTA | Akk./Sum. | SB | eBL `Mag/3/10`, `Mag/4/1` | 25; 39 + 24 | Good | EN | © | Bīt mēseri IT gives HTTP 500; RT is empty. |
| Catalogue of Texts and Authors | Akk. | NA/NB | eBL `L/0/0` (Mitto) | 81 + 17 | Fragmentary (32% in [ ]) | EN | © | |
| Lipit-Eštar A (Sumerian royal hymn) | Sum. | OB | eBL `Sum/4/3` | 65 | Composite fully preserved; 79 mss | EN | © | Also ETCSL 2.5.5.1. |
| *Šimâ milka*, Aluzinnu, Series of the Fox, Prayers to Marduk 1–2, Elevation of Babylon, Angim, Tintir | Akk. | — | eBL `L/2/6`, `L/2/7`, `L/2/10`, `L/3/1–2`, `L/1/3`, `L/4/1`, `Lex/1/1` | **0** (Elevation, Angim SB, Tintir I: 1 line each) | — | — | — | Placeholders only. Šūpê-amēli: SEAL has only a catalogue entry; Cohen 2013 (paid). |

### 1b. Akkadian: ORACC projects (zips **verified**, HTML translations **verified**)
Zip: `https://oracc.museum.upenn.edu/json/<project-with-dashes>.zip`. Text with translation: `https://oracc.museum.upenn.edu/<project>/<id>/html`. Lic.: data CC0 (zip metadata) but edition and translation **CC BY-SA 3.0** (the credits field and project pages).

| Text | Lang. | Period | Edition / source | Lines | Preservation | Transl. | Lic. | Notes |
|---|---|---|---|---|---|---|---|---|
| **Esarhaddon's Succession Treaty** (SAA 2 6) | Akk. (NA) | 672 BCE | saao/saa02 Q009186 · `json/saao-saa02.zip` (2.6 MB) · `/saao/saa02/Q009186/html` | 691 | Excellent composite (4% of words in [ ], 3% damaged) | EN (Parpola-Watanabe), HTML only | CC BY-SA | **Deuteronomy 13 and 28 parallels.** Top candidate. |
| Tell Tayinat version of EST (SAA 2 15) | Akk. | 672 | saao/saa02 P500551 | 443 | Good (9%) | EN | CC BY-SA | |
| Other SAA 2 treaties (Aššur-nērārī V with Matiʾ-ilu 149 lines; Esarhaddon with Baal of Tyre 70; Zakūtu 54; Šamšī-Adad V 35; Qedar 27; Sennacherib's succession 20; and others, 15 texts in all) | Akk. | NA | saao/saa02 | 7–149 | Mostly poor (44–73% in [ ]); Zakūtu 18% | EN | CC BY-SA | Curse lists; Ezek 17. |
| **SAA 3 Court Poetry and Literary Miscellanea** (52 texts; 51 have JSON) | Akk. | NA | `json/saao-saa03.zip` (4.3 MB) | 7–76 each (Appendix C) | Best preserved: Dialogue Assurbanipal–Nabû (3%), Psalm in Praise of Uruk (3%), Coronation Hymn (5%), Righteous Sufferer's Prayer to Nabû (9%), Mystical Miscellanea (10%), Marduk Ordeal Assur (19%); the epics are poor | EN | CC BY-SA | Underworld Vision of an Assyrian Prince (75 lines, 40%); Love Lyrics of Nabû and Tašmetu (53, 25%); Elegy for a Woman (23, 25%). |
| **SAA 9 Assyrian Prophecies** (11 texts) | Akk. | NA | `json/saao-saa09.zip` (0.8 MB) | 9–214 | SAA 9 1 (214 lines, 16%), 7 (8%), 3 Covenant of Aššur (145, 33%) | EN | CC BY-SA | Core comparative material for biblical prophecy. |
| **Sennacherib's annals**: RINAP 3 no. 22 (prism; 3rd campaign, Hezekiah) | Akk. | 691 BCE | rinap/rinap3 Q003496 · `json/rinap-rinap3.zip` (12 MB) · `/rinap/Q003496/html` (verified, contains "Hezekiah of the land Judah") | 502 | Excellent (0% in [ ]) | EN (Grayson-Novotny) | CC BY-SA | 2 Kgs 18–19. Also no. 23 (450 lines), no. 4 Rassam cylinder (95, intact), no. 1 (95), no. 223 Bavian (60). |
| RINAP 1, 2, 4, 5 (Tiglath-pileser III and Shalmaneser V; Sargon II; Esarhaddon; Assurbanipal) | Akk. | NA | `json/rinap-rinap1/2/4/5.zip` (3.3 / 10.7 / 7.9 MB, sizes verified) | — | not analysed | EN in HTML | CC BY-SA | Contents not opened (reported). |
| RIBo (Babylonian royal inscriptions: Nebuchadnezzar II, Nabonidus …) | Akk. | NB | `json/ribo-babylon7.zip` (10 MB), `ribo.zip` (6.9 MB) (sizes verified) | — | not analysed | EN in HTML | CC BY-SA | Cyrus/Nabonidus context (reported). |
| **Ludlul** I–IV (composites) | Akk. | SB | cams/ludlul Q002701–Q002704 · `json/cams-ludlul.zip` (0.9 MB) | 120 / 120 / 114 / 112 | I–II intact; III 29%, IV 38% in [ ] | EN (HTML) | CC BY-SA | No Tablet V; 59 witness transliterations. |
| **Maqlû** I–VIII + RT (composites) | Akk. | SB | cmawro/maqlu Q002705–Q002713 · `json/cmawro-maqlu.zip` (3.1 MB) | 322 / 472 / 432 / 324 / 370 / 330 / 412 / 292 / 384 | ≈ 0% (normalised composite with no break marks) | EN (Abusch) | CC BY-SA | ORACC line counts ≠ eBL counts (different line division). Only 9 of 816 catalogue members have JSON. |
| **Middle Assyrian Laws** A, B, C+G, D–O | Akk. (MA) | 11th c. (copies) | tcma/laws P281779 (MAL A) etc. · `json/tcma-laws.zip` (3 MB) · HTML at `/tcma/P281779/html` (**not** `/tcma/laws/…`, which errors) | A: 828 tablet lines; B: 245; C+G: 80 | A good (6% in [ ]); B fair (16%); the others 25–44% | EN (de Ridder 2021) | CC BY-SA | Also Middle Assyrian Palace Decrees (MAPD Q009324, 140 lines) and the Coronation Ritual (124). Exod 21–22, Deut 22, 25. |
| **AkkLove**: Akkadian love literature (LAOS 4, Wasserman 2016; 32 texts) | Akk. | OAkk–MB | `json/akklove.zip` (2.2 MB) · `/akklove/<id>/html` | 5–324 (KAR 158 MA catalogue 324; LAOS 4 1: 142; ZA 49 168: 110) | Mostly good (0–9% in [ ]) | EN | page "© SEAL project"; zip says CC0 (conflict) | Song of Songs. P355910 is an empty JSON. |
| **Idrimi** statue | Akk. (peripheral) | 15th c. | aemw/alalakh/idrimi P500443 · `json/aemw-alalakh-idrimi.zip` | 100 | Fully legible | EN in HTML (reported) | CC BY-SA | Exile and return of a king. |
| Seleucid building inscriptions (Antiochus I cylinder) | Akk. | Hell. | cams/selbi Q004179 | 59 | Intact | EN (reported) | CC BY-SA | |
| W. G. Lambert's notebooks (handwritten transliterations) | — | — | `https://oracc.museum.upenn.edu/contrib/lambert/` (12 PDFs + xlsx index; the zip holds only metadata) | >5,000 transliterations | — | no | CC BY-SA | Research aid, not an edition. |

### 1c. Sumerian (ETCSL bulk, **verified** from `sources/ETCSL/_bulk/etcsl.zip`; ORACC ETCSRI zip **verified**)
ETCSL licence **CC BY-NC-SA 3.0** (OTA landing page, saved in the repo). The live site at `https://etcsl.orinst.ox.ac.uk/` was reported to time out. ePSD2-literary (CC0, local zip) mirrors the same composites with newer lemmatisation. Appendix B lists all line counts.

| Text | Lang. | Period | Edition / source | Lines | Preservation | Transl. | Lic. | Notes |
|---|---|---|---|---|---|---|---|---|
| **Enki and Ninḫursaĝa** | Sum. | OB | ETCSL 1.1.1 | 305 | 66 damaged lines (21%), 30 heavy | EN | BY-NC-SA | Dilmun "paradise"; rib/Nin-ti (Gen 2). |
| Enki and Ninmaḫ | Sum. | OB | 1.1.2 | 142 | 31% damaged | EN | BY-NC-SA | Creation of humans from clay. |
| **Enki and the World Order** | Sum. | OB | 1.1.3 | 465 | 32% damaged, 70 heavy | EN | BY-NC-SA | |
| **Enlil and Ninlil** | Sum. | OB | 1.2.1 | 154 | Good (13%, 0 heavy) | EN | BY-NC-SA | |
| **Inana's Descent to the Netherworld** | Sum. | OB | 1.4.1 | 440 | Good (14%; 39 tablets) | EN | BY-NC-SA | |
| Dumuzid's Dream | Sum. | OB | 1.4.3 | 270 | Good (16%) | EN | BY-NC-SA | |
| Inana and Šukaletuda | Sum. | OB | 1.3.3 | 298 | Poor (67% damaged) | EN | BY-NC-SA | |
| Inana and Enki | Sum. | OB | 1.3.1 | 592 | Poor (≈228 lines missing in gaps) | EN | BY-NC-SA | |
| Ninurta's Exploits (Lugal-e) | Sum. | OB | 1.6.2 | 712 | Fair (17%) | EN | BY-NC-SA | |
| **Bilgameš and Ḫuwawa A** | Sum. | OB | 1.8.1.5 | 324 | Fair (28%; 92 tablets) | EN | BY-NC-SA | |
| Bilgameš and the Bull of Heaven | Sum. | OB | 1.8.1.2 | 307 | Poor (74%, 168 heavy) | EN | BY-NC-SA | |
| **Bilgameš and Aga** | Sum. | OB | 1.8.1.1 | 117 | Very good (9%) | EN | BY-NC-SA | |
| **Bilgameš, Enkidu and the Netherworld** | Sum. | OB | 1.8.1.4 | 463 | Fair (37%) | EN | BY-NC-SA | Source of Gilg. XII. |
| Death of Bilgameš | Sum. | OB | 1.8.1.3 | 495 | Poor (79%) | EN | BY-NC-SA | Already in `sources/ETCSL/`. |
| **Lugalbanda I / II** | Sum. | OB | 1.8.2.1 / 1.8.2.2 | 509 / 422 | I fair (29%); **II very good (5%)** | EN | BY-NC-SA | |
| **Enmerkar and the Lord of Aratta** | Sum. | OB | 1.8.2.3 | 641 | Fair (21%) | EN | BY-NC-SA | "Spell of Nudimmud": the unified language (Gen 11). |
| Enmerkar and En-suḫgir-ana | Sum. | OB | 1.8.2.4 | 295 | 21% | EN | BY-NC-SA | |
| **Lament for Urim (Ur)** | Sum. | OB | 2.2.2 | 442 | **Excellent** (3 damaged lines; 94 tablets) | EN | BY-NC-SA | Lamentations. Also Kramer 1940 AS 12 (ISAC PDF). |
| **Lament for Sumer and Urim** | Sum. | OB | 2.2.3 | 524 | Good (10%) | EN | BY-NC-SA | Lamentations. |
| Laments for Nibru / Unug / Eridug | Sum. | OB | 2.2.4 / 2.2.5 / 2.2.6 | 326 / 259 / 191 | Nibru good; Unug and Eridug poor | EN | BY-NC-SA | |
| **Cursing of Agade** | Sum. | OB | 2.1.5 | 321 | Very good (10%; 102 tablets) | EN | BY-NC-SA | Divine abandonment; 1 Sam 4, Ezek 10. |
| **Sumerian King List** | Sum. | OB | 2.1.1 | 435 | Good (8 heavy) | EN | BY-NC-SA | Already used (flood). |
| **Gudea Cylinders A and B** | Sum. | Lagaš II | ETCSL 2.1.7; ORACC etcsri Q000377 (`/etcsri/Q000377/html`) | 1,300 (1,298 in ORACC) | Very good (7%; ORACC 1% damaged) | EN | BY-NC-SA / CC BY-SA | Temple building by divine dream and plan (Exod 25, 1 Kgs 6–8). |
| Gudea Statue B | Sum. | Lagaš II | etcsri Q001541 | 366 | Intact | EN | CC BY-SA | |
| Victory of Utu-ḫeĝal | Sum. | Ur III | ETCSL 2.1.6 / etcsri Q000376 | 62 / 128 | Good | EN | | |
| **Šulgi A, B** (royal hymns) | Sum. | Ur III | 2.4.2.01 / 2.4.2.02 | 108 / 385 | Very good (8% / 4%) | EN | BY-NC-SA | Royal ideology; Ps 2, 72. |
| Enlil in the E-kur (Enlil A) | Sum. | OB | 4.05.1 | 171 | Excellent (1 line) | EN | BY-NC-SA | Temple hymn; Ps 48. |
| Exaltation of Inana (Enheduana) | Sum. | OB | 4.07.2 | 154 | Excellent | EN | BY-NC-SA | |
| **Nanše Hymn** (Nanše A) | Sum. | OB | 4.14.1 | 256 | Good (12%) | EN | BY-NC-SA | Social justice: orphan, widow (Deut 10:18). |
| **Keš Temple Hymn** | Sum. | OB | 4.80.2 | 165 | Excellent (4%; 90 tablets) | EN | BY-NC-SA | |
| Temple Hymns (Enheduana) | Sum. | OB | 4.80.1 | 537 | Good (9%) | EN | BY-NC-SA | |
| **Man and his God** ("Sumerian Job") | Sum. | OB | 5.2.4 | 141 | Fair (45% damaged, 35 heavy) | EN | BY-NC-SA | Job. Akkadian OB counterpart: SEAL 1808. |
| **Debate poems**: Hoe and Plough / Grain and Sheep / Winter and Summer / Bird and Fish / Copper and Silver / Date Palm and Tamarisk | Sum. | OB | 5.3.1 / 5.3.2 / 5.3.3 / 5.3.5 / 5.3.6 / 5.3.7 | 201 / 193 / 295 / 191 / 320 / 19 | Hoe/Plough and Grain/Sheep very good; Copper/Silver poor | EN | BY-NC-SA | Grain and Sheep opens with a cosmogony. |
| **Song of the Hoe** | Sum. | OB | 5.5.4 | 110 | Excellent (1 line; 88 tablets) | EN | BY-NC-SA | Creation of humans sprouting from earth. |
| **Instructions of Šuruppag** (full) | Sum. | OB | 5.6.1 | 288 | Fair (29%, 27 heavy) | EN | BY-NC-SA | Already in `sources/ETCSL/`. Proverbs. |
| Farmer's Instructions | Sum. | OB | 5.6.3 | 111 | Excellent | EN | BY-NC-SA | Isa 28:23–29. |
| Message of Lu-diĝira to his Mother | Sum. | OB | 5.5.1 | 63 | Good | EN | BY-NC-SA | Prov 31. |
| Sumerian Proverbs collections 1–3 | Sum. | OB | 6.1.01–03 | 350 / 314 / 351 | Fair (29–43% damaged) | EN | BY-NC-SA | |
| Nanna-Suen's Journey to Nibru; Ninurta's Return | Sum. | OB | 1.5.1; 1.6.1 | 328; 208 | Fair/poor | EN | BY-NC-SA | |

### 1d. Law collections

| Text | Lang. | Period | Edition / source | Lines | Preservation | Transl. | Lic. | Notes |
|---|---|---|---|---|---|---|---|---|
| **Laws of Hammurabi** (composite: prologue, laws, epilogue) | Akk. (OB) | c. 1750 BCE | **CDLI P464358** "RIME 4.03.06.add21 (Laws of Hammurapi) composite": `https://cdli.earth/artifacts/464358` (JSON; `inscription.atf`), **verified** | 3,641 lines (11,176 ATF lines) | Excellent (10 lines with [ ]) | **EN on every line + normalisation `#tr.ts`** | CDLI ToU: free re-use with attribution; translator uncredited | **Best base text.** Exod 21–23, Deut. |
| Laws of Hammurabi: Louvre stele Sb 8 | Akk. | OB | CDLI P249253 `https://cdli.earth/artifacts/249253` (verified) | 3,642 | 77 lines with [ ] (the erased columns are not filled) | no | CDLI ToU | For checking readings. ARMEP link given. |
| Laws of Hammurabi: prologue and epilogue | Akk. | OB | SEAL node 7520 `https://seal.huji.ac.il/node/7520` (verified) | 800 | 9 [ ] | EN (Streck), with commentary | © HUJI (unclear) | |
| Laws of Hammurabi, PD editions | Akk./EN | — | Harper 1904 (transliteration + translation + autographed text): `https://archive.org/details/codeofhammurabi00harp` (verified; PDF + djvu.txt). Wikisource: "Codex Hammurabi (King translation)", "The Code of Hammurabi (Harper translation)" (search hits, verified via API) | — | — | EN | **PD** | Roth 1997 (SBL WAW 6) is ©, as is Richardson 2000. |
| **Laws of Ur-Namma** (composite) | Sum. | Ur III | CDLI **P432130** `https://cdli.earth/artifacts/432130` (verified) | 456 text lines | Fair (53 lines with [ ]) | EN (628 `#tr.en` lines) with variant notes | CDLI ToU | Exemplar Ni 3191 = P226580 (500 ATF lines). ETCSRI Q000947 has only 62 lines. ETCSL: none. |
| **Laws of Lipit-Ištar** (composite) | Sum. | early OB | CDLI **P464355** `https://cdli.earth/artifacts/464355` (verified) | 503 | Good (35 [ ]; `$ n lines broken` gaps) | EN 503/503 | CDLI ToU | Based on Wilcke, Fs Krecher 2015. Exemplars P256663, P345378 … |
| **Laws of Eshnunna** (composite) | Akk. | OB | CDLI **P480696** `https://cdli.earth/artifacts/480696` (verified) | 195 | Good (7 lines with [ ]) | EN + normalisation | CDLI ToU | Exemplars IM 51059 = P480693 (441 ATF lines), IM 52614 = P480694. The goring ox (Exod 21:35 ≈ LE §53). |
| **Middle Assyrian Laws** | Akk. | MA | ORACC tcma/laws (see 1b) | A: 828 | A good | EN | CC BY-SA | |
| **Neo-Babylonian Laws** (BM 58550) | Akk. | NB | CDLI P579641: catalogue only, **no ATF** (verified) | — | — | — | — | Only Roth 1997 (©). Not available. |
| Hittite Laws (CTH 291–292) | Hittite | OH/NH | CHiL project, Hethitologie-Portal Mainz `https://wres-hatti.adwudlit.uni-mainz.de/CHiL` (reported) | ~200 §§ | — | (reported) | unclear | Not Mesopotamian; Hoffner 1997 is ©. |

### 1e. SEAL (OB/MB literature; **verified** listing + per-node fields)
URL `https://seal.huji.ac.il/node/<n>`. Genre listings: `https://seal.huji.ac.il/taxonomy/term/<tid>?page=<k>`. Lic.: not stated (© HUJI per the footer). Each node has transliteration, translation, bibliography and "lines-in-text". Appendix D has the full list.

| Text | Lang. | Period | Node | Lines | Preservation ([ count) | Transl. | Notes |
|---|---|---|---|---|---|---|---|
| **Agušaya A** (VS 10 214) / **B** (RA 15 159) | Akk. | OB | 7493 / 7494 | 311 / 137 | 138 / 59 brackets | EN | Ištar's wildness; Ṣaltu. Pohl 2022. |
| Hymn to Ištar "Louvre" (CM 8 / ZA 110) | Akk. | OB | 7498 | 248 | 48 | EN | |
| Ištar hymn of Ammi-ditāna (RA 22 170) | Akk. | OB | 7495 | 60 | 3 | EN | Very well preserved. |
| Hymns to Hammurāpi (CT 21 40; UET 1 146) | Akk. | OB | 7521; 7523 | 124; 62 | 64; 37 | EN | |
| Gods of the Night (prayer) | Akk. | OB | 7491 | 119 | 5 | EN | |
| Papulegara hymn | Akk. | OB | 7511 | 180 | 74 | EN | |
| **Gilgameš OB II (Penn) / III (Yale)** | Akk. | OB | 1830 / 1831 | 216 / 247 | 80 / 215 | EN | Also in eBL. |
| Gilgameš OB Schøyen 2; VA+BM (Sippar, Siduri); RA 101; Harmal 2; Išchali; IM; Nippur | Akk. | OB | 1532; 1534; 1536; 1527; 1529; 1528; 1530 | 84; 88; 92; 59; 48; 39; 26 | — | EN | VA+BM: Siduri's carpe diem (Qoh 9:7–9). |
| Gilgameš MB Boğazköy 1; Ugarit 1 | Akk. | MB | 1567; 1577 | 96; 39 | 137; 9 | EN | The other 14 MB Gilg. nodes are empty. |
| **Etana OB I–II** | Akk. | OB | 1524 | 102 | 76 | EN | 1525 is the same text without translation. |
| **Anzû OB II / III** | Akk. | OB | 1512 / 1514 | 82 / 34 | 95 / 54 | EN | Anzû MB 1558 is empty. |
| Sargon legends: Conquering Hero (RA 45); Sargon in Foreign Lands (TIM 9 48); Sargon the Lion; BRM 4 4 | Akk. | OB | 1548; 1547; 7525; 1546 | 123; 82; 77; 9 | 144; 119; 57; 9 | EN | The **Sargon Birth Legend** (NA) is not here; not in eBL. |
| Narām-Sîn texts: Great Revolt A/B; Enemy Hordes (OB Cuthaean); Lord of Apišal; Erra and Narām-Sîn | Akk. | OB | 1540/1542; 1543; 7255; 1539 | 40/38; 73; 71; 72 | — | EN | |
| Song of Bazi; Zimrī-līm Epic; Gulkišar epic | Akk. | OB/MB | 1551; 1552; 1597 | 65; 162; 97 | — | EN | |
| **OB "Man and his God"** (RB 59) | Akk. | OB | 1808 | 69 | 90 | EN | Job; edited Oshima/Anthonioz 2023. |
| Lament / prayer to Marduk (CT 44 21) | Akk. | OB | 1814 | 234 | 244 | EN | |
| Personal complaint BM 120015 | Akk. | OB | 1670 | 22 | 10 | EN | Psalms of lament. |
| **A Father and his Son** (JCS 66 // ZA 110) | Akk. | OB | 1738 | 549 | 276 | EN | Instruction; Prov 1–9. |
| Scholars of Uruk (CUSAS 10 14) | Akk. | OB | 1751 | 127 | 86 | EN | Satire. |
| Life of Mankind is Only a Glance (Emar); Enlil and Namzitara | Akk./Sum. | MB | 1801; 1563 | 183; 127 | — | EN | Qohelet. "Ballad of Early Rulers" tradition. |
| **Love lyrics**: LAOS 4 1 (A 7478); ZA 49 168; YOS 11 24; MIO 12 52; CUSAS 10 8–13; PRAK; LKA 15; Moussaieff Love Song; KAL 3 75 | Akk. | OAkk–MB | 1622; 1615; 1616; 1617; 1614–1620; 1623–30; 1633; 1638; 1637 | 143; 108; 43; 43; 12–50; 7–39; 20; 31; 32 | moderate | EN | = ORACC AkkLove. Song of Songs. |
| Divine Love Lyrics (LB; Da Riva/Wasserman 2025), 46 mss | Akk. | NB/LB | term 11654, e.g. 33621 (K 4247+) | — | — | EN (reported per node) | New 2025 edition. |
| LB Chronicles: ABC 7 (Nabonidus Chronicle), ABC 17, 22, 23, and others (42 nodes) | Akk. | LB | 34840; 34399; 34571; 34808 (term 11655) | not given | 87–103 | EN | Fall of Babylon (539); Isa 45. |
| Prologue and epilogue of CH | Akk. | OB | 7520 | 800 | 9 | EN | See 1d. |
| Tukultī-Ninurta Epic; Cuthaean Legend MC 7 21A/B; Lugal-e; Angim; Šūpê-amēli; Instr. Šuruppak (MB); Series of the Fox; Etana MA | — | MB | 1592; 1587/1588; 1585; 1584; 1773; 1771; 1776; 1564–6 | **0 (catalogue only)** | — | — | Verified empty. |
| Adapa (EA 356) / Nergal and Ereškigal (EA 357) | Akk. | MB | 1557 / 1582 | 71 / 81 | — | **no** | Transliteration only. |

### 1f. Public-domain and open-access books (archive.org **verified** via the metadata API; PDFs **verified** HEAD 200)

| Work | Content | URL | Lic. | Notes |
|---|---|---|---|---|
| L. W. King, *The Seven Tablets of Creation* I–II (1902) | Enūma eliš transliteration + translation; vol. II plates | `https://archive.org/details/the-seven-tablets-of-creation.-vol.-1`; `https://archive.org/details/seventabletsofcr02kinguoft` (NOT_IN_COPYRIGHT) | PD | Superseded (no Tablet V in full). Useful historically and for committing. |
| S. Langdon, *The Babylonian Epic of Creation* (1923) | Enūma eliš transliteration + translation | `https://archive.org/details/babylonianepicof00languoft` | PD (US: pub. 1923; Langdon d. 1937 → PD in Israel) | |
| R. F. Harper, *The Code of Hammurabi* (1904) | Transliteration + translation + autograph | `https://archive.org/details/codeofhammurabi00harp` | PD | |
| H. Zimmern, *Beiträge zur Kenntnis der babylonischen Religion* (1896–1901) | **Šurpu** + rituals, German | `https://archive.org/details/beitrgezurkenn00zimmuoft` (NOT_IN_COPYRIGHT) | PD | The only legal full Šurpu edition found (Reiner 1958 AfO Beih. 11 is ©). |
| R. C. Thompson, *Devils and Evil Spirits of Babylonia* I–II (1903–4) | Utukkū lemnūtu and other incantations | `https://archive.org/details/devilsevilspirit01thomuoft` | PD | Superseded by Geller 2016 (©). |
| L. W. King, *Chronicles concerning Early Babylonian Kings* (1907) | Chronicles incl. the Sargon chronicle | `https://archive.org/details/chroniclesconcer01king` (+ vol. 2) | PD | |
| S. Langdon, *Sumerian Epic of Paradise, the Flood and the Fall of Man* (1915) | Enki and Ninḫursaĝ (obsolete) | `https://archive.org/details/sumerianepicofpa00lang` | PD | Historical interest only. |
| D. D. Luckenbill, *The Annals of Sennacherib* (OIP 2, 1924) | Transliteration + translation | `https://isac-assets.s3.amazonaws.com/isac-publications/oip2.pdf` (6.3 MB) | PD in US; ISAC terms forbid dataset/AI use | RINAP 3 is better. |
| S. N. Kramer, *Lamentation over the Destruction of Ur* (AS 12, 1940) | | `https://isac-assets.s3.amazonaws.com/isac-publications/as12.pdf` | © ISAC (free PDF) | ETCSL 2.2.2 is better. |
| **A. Lenzi (ed.), *Reading Akkadian Prayers and Hymns*** (SBL ANEM 3, 2011/2015) | ~20 prayers/hymns: transliteration, normalisation, translation, cuneiform | `https://www.sbl-site.org/assets/pdfs/pubs/9781589835962_OA.pdf` (6.2 MB, verified) | OA (CC BY-NC-SA 4.0 reported) | Šuʾilas, Šamaš and Marduk prayers. |
| **G. Rozzi, *The Akkadian Great Hymns and Prayers*** (Antichistica 42, Ca' Foscari 2024) | Great Prayers to Nabû and Ištar | `https://edizionicafoscari.unive.it/en/edizioni4/libri/978-88-6969-753-1/` (verified); PDF via `https://phaidra.cab.unipd.it/o:544532` (verified) | CC BY (reported) | Complements eBL `L/3/5` and `L/3/9`. |
| *Paid or © (reported):* | Lambert, *Babylonian Creation Myths* (Eisenbrauns 2013); Kämmerer & Metzler, *Enūma elîš* (AOAT 375, 2012); Talon, SAACT 4 (2005); Lambert, BWL (1960); Cagni, Erra (1969); Reiner, Šurpu (1958); Foster, *Before the Muses*; Roth, *Law Collections* (1997); Westenholz, *Legends of the Kings of Akkade* (1997); Abusch, *Maqlû* (Brill 2015/16) | — | © | No OA copies found. The OAPEN/DOAB APIs were blocked (403), so this is not exhaustive. |

---

## 2. Access mechanisms: what worked and what failed

| Mechanism | Result |
|---|---|
| `python3 -I tools/ebl_fetch.py --list` | **Not run successfully.** I wrapped it in `timeout`, which does not exist on macOS ("command not found"). I used `GET https://www.ebl.lmu.de/api/texts` directly (84 texts, 0.5 MB) instead. |
| eBL `GET /api/texts/<g>/<c>/<i>/chapters/<stage>/<ch>/display` | **Works**, ≈ 1 s per chapter (the plain `/chapters/...` endpoint is ≈ 6 s). Returns `lines[].variants[].reconstruction` tokens with `enclosureType`, `translation[]` (en/de/ar/la), `manuscripts`, `record.authors`/`translators`, plus `atf`. **Genre `Šui` and chapter names such as `Boğ₁` must be percent-encoded**; unencoded, `urllib` fails. `Mag/4/1/Standard Babylonian/IT` → HTTP 500. 78 of 300 chapters have 0 lines (after the Šui retry). |
| eBL licence | No licence in the API, the about pages (ebl-frontend `src/about/ui/*.tsx`) or Zenodo. The footer says "© eBL". The dictionary page says reproduction needs the publisher's permission. |
| ORACC zips `https://oracc.museum.upenn.edu/json/<proj>.zip` | **Work.** HEAD gives size and date. They contain `catalogue.json`, `corpusjson/<id>.json` (CDL with `f.gdl` grapheme `break: missing\|damaged`), glossaries and indexes. **No translations.** Some JSON files are empty (akklove P355910). cmawro-maqlu: 816 catalogue entries, only 9 texts. |
| ORACC HTML `https://oracc.museum.upenn.edu/<proj>/<id>/html` | **Works, with translations** (SAA 2, SAA 9, RINAP 3, Ludlul, Maqlû, AkkLove, ETCSRI). **Exception:** `/tcma/laws/<id>/html` gives "px: error: unable to open dbi"; use `/tcma/<id>/html`. |
| ORACC licence pages | `/saao/`, `/rinap/`, `/ribo/`, `/tcma/`, `/etcsri/`, `/cams/gkab/`: "Content released under CC BY-SA 3.0". Zip metadata: "CC0". Per-text `credits`: "annotated edition … CC BY-SA 3.0". `/akklove/`: "© SEAL project". `/rinap/license/`: 404. |
| CDLI `GET https://cdli.earth/artifacts/<n>` with `Accept: application/json` | **Works.** Full record including `inscription.atf` (with `#tr.en`/`#tr.ts` for composites). `/artifacts/<n>.atf` → 500; `/P<n>` → 302. |
| CDLI search `https://cdli.earth/search?simple-value[]=<q>&simple-field[]=keyword` + `Accept: application/json` | **Works.** Returns full records with ATF (≤ 25 per page). Found all the law composites. |
| CDLI Terms of Use `https://cdli.earth/terms-of-use` | Transliterations and translations are freely reusable with attribution. Images are non-commercial and © the owners. |
| SEAL | No API. Listings at `/taxonomy/term/<tid>?page=N` (rows link `/index.php/node/<n>?tid=`). Node pages have Drupal fields `field--name-field-text`, `-translation`, `-lines-in-text`, `-words-in-text`. 295 nodes fetched; 197 have text. |
| ETCSL | Local OTA bulk (`sources/ETCSL/_bulk/etcsl-unzipped/etcsl/`) parsed fine (latin-1; entities pre-substituted). Live site not retried. |
| archive.org `advancedsearch.php` + `/metadata/<id>` | **Works** (identifiers, PDF/djvu.txt names, `possible-copyright-status`). |
| en.wikisource API | **Works** (`action=query&list=search`). |
| OAPEN `library.oapen.org/rest` and DOAB `directory.doabooks.org/rest` | **Fail**: HTTP 403 "Your address is not allowed to access this API." |
| ISAC S3 PDFs, SBL OA PDF, PHAIDRA | Work (HEAD 200). |

---

## Appendix A: eBL chapters with lines (generated from the API; preservation as defined in the legend)

| Text | Stage / chapter | API path | Lines | Preservation | Translation | Mss | Editor(s) |
|---|---|---|---|---|---|---|---|
| Catalogue of Texts and Authors  | NA - | `/api/texts/L/0/0/chapters/Neo-Assyrian/-/display` | 81 | intact 2 · partial 61 · lost 18 lines; words in [ ] 32%, damaged 8% | EN 80/81 | 6 | Tonio D. N. Mitto |
| Catalogue of Texts and Authors  | NB - | `/api/texts/L/0/0/chapters/Neo-Babylonian/-/display` | 17 | intact 0 · partial 15 · lost 2 lines; words in [ ] 33%, damaged 33% | EN 17/17 | 1 | Tonio D. N. Mitto |
| Story of the Flood (*Atraḫasīs*)  | OB I | `/api/texts/L/1/1/chapters/Old%20Babylonian/I/display` | 321 | intact 85 · partial 171 · lost 65 lines; words in [ ] 24%, damaged 13% | EN 321/321 | 5 | Enrique Jiménez; Geraldina Rozzi |
| Story of the Flood (*Atraḫasīs*)  | SB I | `/api/texts/L/1/1/chapters/Standard%20Babylonian/I/display` | 123 | intact 45 · partial 65 · lost 13 lines; words in [ ] 12%, damaged 14% | EN 123/123 | 6 | — |
| Story of the Flood (*Atraḫasīs*)  | SB II | `/api/texts/L/1/1/chapters/Standard%20Babylonian/II/display` | 116 | intact 36 · partial 80 · lost 0 lines; words in [ ] 5%, damaged 23% | EN 116/116 | 9 | — |
| Story of the Flood (*Atraḫasīs*)  | SB III | `/api/texts/L/1/1/chapters/Standard%20Babylonian/III/display` | 60 | intact 1 · partial 44 · lost 15 lines; words in [ ] 40%, damaged 18% | EN 60/60 | 3 | — |
| Story of the Flood (*Atraḫasīs*)  | MB Bab₂ | `/api/texts/L/1/1/chapters/Middle%20Babylonian/Bab₂/display` | 25 | intact 4 · partial 18 · lost 3 lines; words in [ ] 11%, damaged 17% | EN 25/25 | 1 | — |
| Story of the Flood (*Atraḫasīs*)  | MB Priv | `/api/texts/L/1/1/chapters/Middle%20Babylonian/Priv/display` | 9 | intact 1 · partial 8 · lost 0 lines; words in [ ] 4%, damaged 28% | EN 9/9 | 1 | — |
| Story of the Flood (*Atraḫasīs*)  | MB Ug₂ | `/api/texts/L/1/1/chapters/Middle%20Babylonian/Ug₂/display` | 13 | intact 13 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 13/13 | 1 | — |
| Poem of Creation (*Enūma eliš*)  | SB I | `/api/texts/L/1/2/chapters/Standard%20Babylonian/I/display` | 162 | intact 154 · partial 8 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 162/162 + ar | 75 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB II | `/api/texts/L/1/2/chapters/Standard%20Babylonian/II/display` | 162 | intact 136 · partial 26 · lost 0 lines; words in [ ] 0%, damaged 3% | EN 162/162 | 37 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB III | `/api/texts/L/1/2/chapters/Standard%20Babylonian/III/display` | 138 | intact 70 · partial 67 · lost 1 lines; words in [ ] 7%, damaged 8% | EN 138/138 | 23 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB IV | `/api/texts/L/1/2/chapters/Standard%20Babylonian/IV/display` | 146 | intact 141 · partial 5 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 146/146 | 40 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB V | `/api/texts/L/1/2/chapters/Standard%20Babylonian/V/display` | 158 | intact 44 · partial 107 · lost 7 lines; words in [ ] 5%, damaged 13% | EN 158/158 | 35 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB VI | `/api/texts/L/1/2/chapters/Standard%20Babylonian/VI/display` | 166 | intact 161 · partial 5 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 166/166 | 37 | Adrian C. Heinrich |
| Poem of Creation (*Enūma eliš*)  | SB VII | `/api/texts/L/1/2/chapters/Standard%20Babylonian/VII/display` | 166 | intact 150 · partial 16 · lost 0 lines; words in [ ] 0%, damaged 1% | EN 164/166 + ar | 54 | Adrian C. Heinrich |
| The Elevation of Babylon  | SB - | `/api/texts/L/1/3/chapters/Standard%20Babylonian/-/display` | 1 | intact 0 · partial 1 · lost 0 lines; words in [ ] 28%, damaged 14% | EN 1/1 + ar | 21 | — |
| Poem of Gilgameš  | SB I | `/api/texts/L/1/4/chapters/Standard%20Babylonian/I/display` | 300 | intact 151 · partial 147 · lost 2 lines; words in [ ] 12%, damaged 8% | EN 300/300 + ar | 17 | Andrew R. George |
| Poem of Gilgameš  | SB II | `/api/texts/L/1/4/chapters/Standard%20Babylonian/II/display` | 187 | intact 43 · partial 117 · lost 27 lines; words in [ ] 23%, damaged 11% | EN 184/187 + ar | 13 | Andrew R. George |
| Poem of Gilgameš  | SB III | `/api/texts/L/1/4/chapters/Standard%20Babylonian/III/display` | 209 | intact 55 · partial 130 · lost 24 lines; words in [ ] 14%, damaged 10% | EN 208/209 + ar | 12 | Andrew R. George |
| Poem of Gilgameš  | SB IV | `/api/texts/L/1/4/chapters/Standard%20Babylonian/IV/display` | 175 | intact 1 · partial 102 · lost 72 lines; words in [ ] 59%, damaged 11% | EN 175/175 | 11 | Andrew R. George |
| Poem of Gilgameš  | SB V | `/api/texts/L/1/4/chapters/Standard%20Babylonian/V/display` | 274 | intact 46 · partial 202 · lost 26 lines; words in [ ] 15%, damaged 12% | EN 274/274 | 10 | Andrew R. George |
| Poem of Gilgameš  | SB VI | `/api/texts/L/1/4/chapters/Standard%20Babylonian/VI/display` | 183 | intact 85 · partial 96 · lost 2 lines; words in [ ] 8%, damaged 11% | EN 183/183 | 15 | Andrew R. George |
| Poem of Gilgameš  | SB VII | `/api/texts/L/1/4/chapters/Standard%20Babylonian/VII/display` | 219 | intact 27 · partial 165 · lost 27 lines; words in [ ] 17%, damaged 12% | EN 217/219 | 20 | Andrew R. George |
| Poem of Gilgameš  | SB VIII | `/api/texts/L/1/4/chapters/Standard%20Babylonian/VIII/display` | 206 | intact 27 · partial 158 · lost 21 lines; words in [ ] 21%, damaged 10% | EN 201/206 | 10 | Andrew R. George |
| Poem of Gilgameš  | SB IX | `/api/texts/L/1/4/chapters/Standard%20Babylonian/IX/display` | 137 | intact 25 · partial 103 · lost 9 lines; words in [ ] 25%, damaged 14% | EN 137/137 | 3 | Andrew R. George |
| Poem of Gilgameš  | SB X | `/api/texts/L/1/4/chapters/Standard%20Babylonian/X/display` | 325 | intact 63 · partial 220 · lost 42 lines; words in [ ] 34%, damaged 10% | EN 322/325 | 7 | Andrew R. George |
| Poem of Gilgameš  | SB XI | `/api/texts/L/1/4/chapters/Standard%20Babylonian/XI/display` | 329 | intact 237 · partial 91 · lost 1 lines; words in [ ] 3%, damaged 4% | EN 328/329 | 17 | Andrew R. George |
| Poem of Gilgameš  | SB XII | `/api/texts/L/1/4/chapters/Standard%20Babylonian/XII/display` | 139 | intact 35 · partial 94 · lost 10 lines; words in [ ] 30%, damaged 10% | EN 139/139 | 11 | Andrew R. George |
| Poem of Gilgameš  | OB II | `/api/texts/L/1/4/chapters/Old%20Babylonian/II/display` | 145 | intact 94 · partial 47 · lost 4 lines; words in [ ] 4%, damaged 9% | EN 145/145 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB III | `/api/texts/L/1/4/chapters/Old%20Babylonian/III/display` | 219 | intact 57 · partial 139 · lost 23 lines; words in [ ] 17%, damaged 14% | EN 219/219 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB UM | `/api/texts/L/1/4/chapters/Old%20Babylonian/UM/display` | 16 | intact 0 · partial 12 · lost 4 lines; words in [ ] 41%, damaged 32% | EN 16/16 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Schøyen₁ | `/api/texts/L/1/4/chapters/Old%20Babylonian/Schøyen₁/display` | 13 | intact 1 · partial 10 · lost 2 lines; words in [ ] 13%, damaged 20% | EN 13/13 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Schøyen₂ | `/api/texts/L/1/4/chapters/Old%20Babylonian/Schøyen₂/display` | 94 | intact 40 · partial 54 · lost 0 lines; words in [ ] 4%, damaged 18% | EN 94/94 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Schøyen₃ | `/api/texts/L/1/4/chapters/Old%20Babylonian/Schøyen₃/display` | 47 | intact 0 · partial 33 · lost 14 lines; words in [ ] 40%, damaged 22% | EN 47/47 | 8 | Andrew R. George |
| Poem of Gilgameš  | OB Nippur | `/api/texts/L/1/4/chapters/Old%20Babylonian/Nippur/display` | 26 | intact 14 · partial 11 · lost 1 lines; words in [ ] 3%, damaged 7% | EN 26/26 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Harmal₁ | `/api/texts/L/1/4/chapters/Old%20Babylonian/Harmal₁/display` | 21 | intact 14 · partial 7 · lost 0 lines; words in [ ] 0%, damaged 5% | EN 21/21 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Harmal₂ | `/api/texts/L/1/4/chapters/Old%20Babylonian/Harmal₂/display` | 59 | intact 1 · partial 28 · lost 30 lines; words in [ ] 4%, damaged 13% | EN 59/59 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB Ishchali | `/api/texts/L/1/4/chapters/Old%20Babylonian/Ishchali/display` | 47 | intact 20 · partial 25 · lost 2 lines; words in [ ] 4%, damaged 7% | EN 47/47 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB IM | `/api/texts/L/1/4/chapters/Old%20Babylonian/IM/display` | 45 | intact 10 · partial 17 · lost 18 lines; words in [ ] 4%, damaged 10% | EN 45/45 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB VA+BM | `/api/texts/L/1/4/chapters/Old%20Babylonian/VA+BM/display` | 87 | intact 54 · partial 31 · lost 2 lines; words in [ ] 3%, damaged 5% | EN 87/87 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB CUNES | `/api/texts/L/1/4/chapters/Old%20Babylonian/CUNES/display` | 27 | intact 1 · partial 21 · lost 5 lines; words in [ ] 34%, damaged 13% | EN 27/27 | 1 | Andrew R. George |
| Poem of Gilgameš  | OB SM | `/api/texts/L/1/4/chapters/Old%20Babylonian/SM/display` | 36 | intact 0 · partial 36 · lost 0 lines; words in [ ] 42%, damaged 15% | EN 36/36 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Nippur | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Nippur/display` | 19 | intact 1 · partial 16 · lost 2 lines; words in [ ] 36%, damaged 18% | EN 19/19 | 5 | Andrew R. George |
| Poem of Gilgameš  | MB Ur | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Ur/display` | 69 | intact 19 · partial 47 · lost 3 lines; words in [ ] 12%, damaged 14% | EN 69/69 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Boğ₁ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Boğ₁/display` | 92 | intact 1 · partial 62 · lost 29 lines; words in [ ] 53%, damaged 7% | EN 92/92 | 6 | Andrew R. George |
| Poem of Gilgameš  | MB Boğ₂ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Boğ₂/display` | 65 | intact 2 · partial 61 · lost 2 lines; words in [ ] 17%, damaged 13% | EN 65/65 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Boğ₃ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Boğ₃/display` | 8 | intact 0 · partial 4 · lost 4 lines; words in [ ] 28%, damaged 14% | EN 8/8 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Emar₁ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Emar₁/display` | 10 | intact 0 · partial 8 · lost 2 lines; words in [ ] 15%, damaged 23% | EN 10/10 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Emar₂ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Emar₂/display` | 55 | intact 0 · partial 44 · lost 11 lines; words in [ ] 58%, damaged 14% | EN 55/55 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Megiddo | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Megiddo/display` | 40 | intact 0 · partial 36 · lost 4 lines; words in [ ] 23%, damaged 23% | EN 40/40 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Priv₁ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Priv₁/display` | 94 | intact 17 · partial 65 · lost 12 lines; words in [ ] 23%, damaged 13% | EN 94/94 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Ug₁ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Ug₁/display` | 39 | intact 30 · partial 9 · lost 0 lines; words in [ ] 0%, damaged 4% | EN 39/39 | 1 | Andrew R. George |
| Poem of Gilgameš  | MB Ug₂ | `/api/texts/L/1/4/chapters/Middle%20Babylonian/Ug₂/display` | 78 | intact 2 · partial 67 · lost 9 lines; words in [ ] 32%, damaged 6% | EN 77/78 | 3 | Andrew R. George |
| Poem of Gilgameš  | NA x | `/api/texts/L/1/4/chapters/Neo-Assyrian/x/display` | 20 | intact 0 · partial 11 · lost 9 lines; words in [ ] 32%, damaged 19% | EN 20/20 | 1 | Andrew R. George |
| Poem of Gilgameš  | NA y | `/api/texts/L/1/4/chapters/Neo-Assyrian/y/display` | 67 | intact 1 · partial 43 · lost 23 lines; words in [ ] 35%, damaged 16% | EN 67/67 | 2 | Andrew R. George |
| Erra and Išum  | SB I | `/api/texts/L/1/5/chapters/Standard%20Babylonian/I/display` | 191 | intact 122 · partial 69 · lost 0 lines; words in [ ] 1%, damaged 6% | EN 191/191 | 22 | Enrique Jiménez |
| Nergal and Ereškigal  | MB - | `/api/texts/L/1/6/chapters/Middle%20Babylonian/-/display` | 87 | intact 32 · partial 48 · lost 7 lines; words in [ ] 11%, damaged 12% | EN 0/87 + de | 2 | Tonio D. N. Mitto |
| Nergal and Ereškigal  | SB - | `/api/texts/L/1/6/chapters/Standard%20Babylonian/-/display` | 333 | intact 67 · partial 233 · lost 33 lines; words in [ ] 22%, damaged 13% | EN 332/333 + de | 5 | Tonio D. N. Mitto |
| Adapa  | MB - | `/api/texts/L/1/7/chapters/Middle%20Babylonian/-/display` | 78 | intact 44 · partial 32 · lost 2 lines; words in [ ] 6%, damaged 8% | EN 78/78 | 1 | Tonio D. N. Mitto |
| Adapa  | SB - | `/api/texts/L/1/7/chapters/Standard%20Babylonian/-/display` | 97 | intact 15 · partial 71 · lost 11 lines; words in [ ] 18%, damaged 9% | EN 96/97 | 6 | Tonio D. N. Mitto |
| Descent of Ištar  | NA - | `/api/texts/L/1/8/chapters/Neo-Assyrian/-/display` | 11 | intact 7 · partial 4 · lost 0 lines; words in [ ] 0%, damaged 9% | EN 11/11 | 1 | Albert Setälä |
| Descent of Ištar  | SB - | `/api/texts/L/1/8/chapters/Standard%20Babylonian/-/display` | 148 | intact 91 · partial 57 · lost 0 lines; words in [ ] 3%, damaged 5% | EN 148/148 | 4 | Albert Setälä |
| Etana  | OB Morgan | `/api/texts/L/1/9/chapters/Old%20Babylonian/Morgan/display` | 54 | intact 21 · partial 29 · lost 4 lines; words in [ ] 4%, damaged 14% | EN 54/54 | 1 | Zsombor J. Földi |
| Etana  | OB Susa | `/api/texts/L/1/9/chapters/Old%20Babylonian/Susa/display` | 48 | intact 16 · partial 32 · lost 0 lines; words in [ ] 10%, damaged 12% | EN 48/48 | 1 | Zsombor J. Földi |
| Etana  | Middle Assyrian Aššur | `/api/texts/L/1/9/chapters/Middle%20Assyrian/Aššur/display` | 160 | intact 18 · partial 110 · lost 32 lines; words in [ ] 23%, damaged 17% | EN 160/160 | 4 | Zsombor J. Földi |
| Etana  | SB I | `/api/texts/L/1/9/chapters/Standard%20Babylonian/I/display` | 40 | intact 0 · partial 35 · lost 5 lines; words in [ ] 15%, damaged 19% | EN 40/40 | 3 | Zsombor J. Földi |
| Etana  | SB II | `/api/texts/L/1/9/chapters/Standard%20Babylonian/II/display` | 152 | intact 64 · partial 86 · lost 2 lines; words in [ ] 10%, damaged 9% | EN 152/152 | 4 | Zsombor J. Földi |
| Etana  | SB III | `/api/texts/L/1/9/chapters/Standard%20Babylonian/III/display` | 131 | intact 17 · partial 96 · lost 18 lines; words in [ ] 13%, damaged 14% | EN 131/131 | 10 | Zsombor J. Földi |
| Anzû  | OB II | `/api/texts/L/1/10/chapters/Old%20Babylonian/II/display` | 82 | intact 21 · partial 58 · lost 3 lines; words in [ ] 20%, damaged 12% | EN 80/82 | 2 | Adrian C. Heinrich |
| Anzû  | OB III | `/api/texts/L/1/10/chapters/Old%20Babylonian/III/display` | 35 | intact 1 · partial 31 · lost 3 lines; words in [ ] 38%, damaged 11% | EN 35/35 | 2 | Adrian C. Heinrich |
| Anzû  | SB I | `/api/texts/L/1/10/chapters/Standard%20Babylonian/I/display` | 201 | intact 68 · partial 115 · lost 18 lines; words in [ ] 20%, damaged 9% | EN 201/201 | 10 | Adrian C. Heinrich |
| Anzû  | SB II | `/api/texts/L/1/10/chapters/Standard%20Babylonian/II/display` | 154 | intact 99 · partial 52 · lost 3 lines; words in [ ] 8%, damaged 7% | EN 154/154 | 12 | Adrian C. Heinrich |
| Anzû  | SB III | `/api/texts/L/1/10/chapters/Standard%20Babylonian/III/display` | 155 | intact 53 · partial 86 · lost 16 lines; words in [ ] 6%, damaged 7% | EN 147/155 | 6 | Adrian C. Heinrich |
| Anzû  | NA - | `/api/texts/L/1/10/chapters/Neo-Assyrian/-/display` | 67 | intact 14 · partial 53 · lost 0 lines; words in [ ] 15%, damaged 16% | EN 67/67 | 2 | Adrian C. Heinrich |
| The Poor Man of Nippur  | SB - | `/api/texts/L/1/11/chapters/Standard%20Babylonian/-/display` | 161 | intact 72 · partial 86 · lost 3 lines; words in [ ] 7%, damaged 8% | EN 161/161 | 6 | Adrian C. Heinrich |
| Cuthaean Legend of Narām-Sîn  | OB I | `/api/texts/L/1/12/chapters/Old%20Babylonian/I/display` | 74 | intact 15 · partial 42 · lost 17 lines; words in [ ] 8%, damaged 8% | EN 73/74 | 1 | Tonio D. N. Mitto |
| Cuthaean Legend of Narām-Sîn  | OB II | `/api/texts/L/1/12/chapters/Old%20Babylonian/II/display` | 13 | intact 2 · partial 10 · lost 1 lines; words in [ ] 43%, damaged 3% | EN 4/13 | 1 | Tonio D. N. Mitto |
| Cuthaean Legend of Narām-Sîn  | MB A | `/api/texts/L/1/12/chapters/Middle%20Babylonian/A/display` | 63 | intact 9 · partial 41 · lost 13 lines; words in [ ] 13%, damaged 17% | EN 46/63 | 1 | Tonio D. N. Mitto |
| Cuthaean Legend of Narām-Sîn  | MB B | `/api/texts/L/1/12/chapters/Middle%20Babylonian/B/display` | 15 | intact 0 · partial 7 · lost 8 lines; words in [ ] 23%, damaged 38% | EN 14/15 | 1 | Tonio D. N. Mitto |
| Cuthaean Legend of Narām-Sîn  | SB - | `/api/texts/L/1/12/chapters/Standard%20Babylonian/-/display` | 180 | intact 94 · partial 82 · lost 4 lines; words in [ ] 5%, damaged 7% | EN 175/180 | 21 | Tonio D. N. Mitto |
| Theodicy  | SB - | `/api/texts/L/2/1/chapters/Standard%20Babylonian/-/display` | 288 | intact 73 · partial 195 · lost 20 lines; words in [ ] 4%, damaged 15% | EN 265/288 + ar | 24 | Adrian C. Heinrich; Tonio Mitto |
| Righteous Sufferer (*Ludlul bēl nēmeqi*)  | SB I | `/api/texts/L/2/2/chapters/Standard%20Babylonian/I/display` | 120 | intact 114 · partial 6 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 120/120 | 40 | Aino Hätinen |
| Righteous Sufferer (*Ludlul bēl nēmeqi*)  | SB II | `/api/texts/L/2/2/chapters/Standard%20Babylonian/II/display` | 120 | intact 105 · partial 15 · lost 0 lines; words in [ ] 0%, damaged 2% | EN 120/120 | 26 | Aino Hätinen |
| Righteous Sufferer (*Ludlul bēl nēmeqi*)  | SB III | `/api/texts/L/2/2/chapters/Standard%20Babylonian/III/display` | 121 | intact 41 · partial 67 · lost 13 lines; words in [ ] 1%, damaged 14% | EN 109/121 | 25 | Aino Hätinen |
| Righteous Sufferer (*Ludlul bēl nēmeqi*)  | SB IV | `/api/texts/L/2/2/chapters/Standard%20Babylonian/IV/display` | 53 | intact 4 · partial 37 · lost 12 lines; words in [ ] 8%, damaged 26% | EN 43/53 | 7 | Aino Hätinen |
| Righteous Sufferer (*Ludlul bēl nēmeqi*)  | SB V | `/api/texts/L/2/2/chapters/Standard%20Babylonian/V/display` | 120 | intact 38 · partial 78 · lost 4 lines; words in [ ] 8%, damaged 9% | EN 118/120 | 14 | Aino Hätinen |
| Counsels of Wisdom  | SB - | `/api/texts/L/2/3/chapters/Standard%20Babylonian/-/display` | 159 | intact 88 · partial 65 · lost 6 lines; words in [ ] 5%, damaged 6% | EN 158/159 | 42 | Zsombor J. Földi |
| Dialogue of Pessimism  | SB - | `/api/texts/L/2/4/chapters/Standard%20Babylonian/-/display` | 93 | intact 44 · partial 48 · lost 1 lines; words in [ ] 10%, damaged 6% | EN 93/93 + ar,la | 6 | Anmar A. Fadhil |
| Advice to a Prince  | SB - | `/api/texts/L/2/5/chapters/Standard%20Babylonian/-/display` | 55 | intact 50 · partial 5 · lost 0 lines; words in [ ] 0%, damaged 1% | EN 53/55 | 4 | Tonio D. N. Mitto |
| Series of the Poplar  | SB - | `/api/texts/L/2/8/chapters/Standard%20Babylonian/-/display` | 82 | intact 15 · partial 56 · lost 11 lines; words in [ ] 13%, damaged 8% | EN 82/82 | 6 | Enrique Jiménez |
| Series of Ox and Horse  | SB - | `/api/texts/L/2/9/chapters/Standard%20Babylonian/-/display` | 217 | intact 11 · partial 146 · lost 60 lines; words in [ ] 25%, damaged 13% | EN 217/217 | 7 | Enrique Jiménez |
| Series of the Spider  | SB - | `/api/texts/L/2/11/chapters/Standard%20Babylonian/-/display` | 59 | intact 7 · partial 41 · lost 11 lines; words in [ ] 10%, damaged 10% | EN 59/59 | 2 | Enrique Jiménez |
| Palm and Vine  | SB - | `/api/texts/L/2/12/chapters/Standard%20Babylonian/-/display` | 54 | intact 45 · partial 9 · lost 0 lines; words in [ ] 0%, damaged 1% | EN 54/54 | 4 | Enrique Jiménez |
| Story of the Poor, Forlorn Wren  | SB - | `/api/texts/L/2/13/chapters/Standard%20Babylonian/-/display` | 42 | intact 4 · partial 37 · lost 1 lines; words in [ ] 5%, damaged 14% | EN 42/42 + ar | 5 | Enrique Jiménez |
| Marduk’s Address to the Demons  | SB - | `/api/texts/L/3/3/chapters/Standard%20Babylonian/-/display` | 253 | intact 228 · partial 20 · lost 5 lines; words in [ ] 0%, damaged 0% | EN 246/253 | 71 | Jeremiah L. Peterson |
| Great Prayer to Šamaš  | SB - | `/api/texts/L/3/4/chapters/Standard%20Babylonian/-/display` | 200 | intact 111 · partial 89 · lost 0 lines; words in [ ] 3%, damaged 5% | EN 200/200 | 45 | Geraldina Rozzi |
| Great Prayer to Nabû  | SB - | `/api/texts/L/3/5/chapters/Standard%20Babylonian/-/display` | 185 | intact 11 · partial 167 · lost 7 lines; words in [ ] 17%, damaged 12% | EN 184/185 | 3 | Geraldina Rozzi |
| Hymn to the Queen of Nippur  | SB - | `/api/texts/L/3/6/chapters/Standard%20Babylonian/-/display` | 257 | intact 45 · partial 179 · lost 33 lines; words in [ ] 5%, damaged 16% | EN 251/257 | 17 | Zsombor J. Földi |
| Bullussa-rabi’s Hymn to Gula  | SB - | `/api/texts/L/3/7/chapters/Standard%20Babylonian/-/display` | 200 | intact 170 · partial 30 · lost 0 lines; words in [ ] 0%, damaged 1% | EN 200/200 | 26 | Zsombor J. Földi |
| A Syncretistic Hymn to Ištar  | SB - | `/api/texts/L/3/8/chapters/Standard%20Babylonian/-/display` | 36 | intact 22 · partial 14 · lost 0 lines; words in [ ] 2%, damaged 3% | EN 36/36 | 2 | Zsombor J. Földi |
| Hymn to Ištar (“Ištar 2”)  | SB - | `/api/texts/L/3/9/chapters/Standard%20Babylonian/-/display` | 224 | intact 2 · partial 189 · lost 33 lines; words in [ ] 14%, damaged 15% | EN 222/224 | 2 | Geraldina Rozzi |
| Hymn to Ninurta as Savior  | SB - | `/api/texts/L/3/10/chapters/Standard%20Babylonian/-/display` | 55 | intact 53 · partial 2 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 55/55 + de | 9 | Tonio Mitto |
| Syncretistic Hymn to Marduk (*Eriš šummi*)  | SB - | `/api/texts/L/3/11/chapters/Standard%20Babylonian/-/display` | 88 | intact 56 · partial 32 · lost 0 lines; words in [ ] 1%, damaged 3% | EN 87/88 + ar | 10 | Anmar A. Fadhil; Enrique Jiménez |
| Syncretistic Hymn to Gula  | SB - | `/api/texts/L/3/12/chapters/Standard%20Babylonian/-/display` | 226 | intact 79 · partial 135 · lost 12 lines; words in [ ] 2%, damaged 8% | EN 226/226 | 11 | Elizabeth Bennett |
| Macranthropic Hymn to Ninurta  | SB - | `/api/texts/L/3/13/chapters/Standard%20Babylonian/-/display` | 73 | intact 39 · partial 33 · lost 1 lines; words in [ ] 4%, damaged 3% | EN 73/73 + ar | 6 | Anmar A. Fadhil; Enrique Jiménez |
| Angim  | SB - | `/api/texts/L/4/1/chapters/Standard%20Babylonian/-/display` | 1 | intact 1 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 0/1 | 3 | — |
| Maqlû  | SB I | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/I/display` | 152 | intact 139 · partial 11 · lost 2 lines; words in [ ] 1%, damaged 1% | EN 145/152 | 27 | Tzvi Abusch |
| Maqlû  | SB II | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/II/display` | 231 | intact 184 · partial 47 · lost 0 lines; words in [ ] 2%, damaged 4% | EN 228/231 | 34 | Tzvi Abusch |
| Maqlû  | SB III | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/III/display` | 202 | intact 184 · partial 18 · lost 0 lines; words in [ ] 1%, damaged 2% | EN 189/202 | 38 | Tzvi Abusch |
| Maqlû  | SB IV | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/IV/display` | 155 | intact 95 · partial 60 · lost 0 lines; words in [ ] 6%, damaged 6% | EN 153/155 | 31 | Tzvi Abusch |
| Maqlû  | SB V | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/V/display` | 181 | intact 121 · partial 59 · lost 1 lines; words in [ ] 8%, damaged 5% | EN 178/181 | 24 | Tzvi Abusch |
| Maqlû  | SB VI | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/VI/display` | 161 | intact 83 · partial 76 · lost 2 lines; words in [ ] 7%, damaged 8% | EN 161/161 | 28 | Tzvi Abusch |
| Maqlû  | SB VII | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/VII/display` | 198 | intact 155 · partial 40 · lost 3 lines; words in [ ] 7%, damaged 2% | EN 189/198 | 34 | Tzvi Abusch |
| Maqlû  | SB VIII | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/VIII/display` | 133 | intact 26 · partial 101 · lost 6 lines; words in [ ] 12%, damaged 17% | EN 132/133 | 15 | Tzvi Abusch |
| Maqlû  | SB RT | `/api/texts/Mag/1/1/chapters/Standard%20Babylonian/RT/display` | 182 | intact 100 · partial 76 · lost 6 lines; words in [ ] 7%, damaged 6% | EN 180/182 | 9 | Tzvi Abusch |
| *šuʾila*s to Adad  | SB 1a | `/api/texts/Mag/2/1/chapters/Standard%20Babylonian/1a/display` | 40 | intact 24 · partial 13 · lost 3 lines; words in [ ] 2%, damaged 5% | EN 40/40 | 5 | Alan C. Lenzi |
| *šuʾila*s to Adad  | SB 1b | `/api/texts/Mag/2/1/chapters/Standard%20Babylonian/1b/display` | 42 | intact 0 · partial 41 · lost 1 lines; words in [ ] 14%, damaged 24% | EN 42/42 | 1 | Alan C. Lenzi |
| *šuʾila*s to Adad  | SB 2 | `/api/texts/Mag/2/1/chapters/Standard%20Babylonian/2/display` | 17 | intact 2 · partial 15 · lost 0 lines; words in [ ] 6%, damaged 22% | EN 17/17 | 1 | Alan C. Lenzi |
| *šuʾila*s to Adad  | SB 3 | `/api/texts/Mag/2/1/chapters/Standard%20Babylonian/3/display` | 1 | intact 1 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 1/1 | 1 | Alan C. Lenzi |
| *šuʾila*s to Adad  | SB 4 | `/api/texts/Mag/2/1/chapters/Standard%20Babylonian/4/display` | 43 | intact 2 · partial 38 · lost 3 lines; words in [ ] 28%, damaged 26% | EN 43/43 | 2 | Alan C. Lenzi |
| *šuʾila* to Damkina  | SB 1 | `/api/texts/Mag/2/4/chapters/Standard%20Babylonian/1/display` | 29 | intact 2 · partial 24 · lost 3 lines; words in [ ] 18%, damaged 16% | EN 29/29 | 3 | — |
| *šuʾila* to Dilbat  | SB 1 | `/api/texts/Mag/2/5/chapters/Standard%20Babylonian/1/display` | 22 | intact 0 · partial 18 · lost 4 lines; words in [ ] 44%, damaged 7% | EN 22/22 | 1 | — |
| *šuʾila*s to Ea  | SB 1a | `/api/texts/Mag/2/6/chapters/Standard%20Babylonian/1a/display` | 44 | intact 29 · partial 12 · lost 3 lines; words in [ ] 9%, damaged 3% | EN 44/44 | 10 | — |
| *šuʾila*s to Ea  | SB 1b | `/api/texts/Mag/2/6/chapters/Standard%20Babylonian/1b/display` | 8 | intact 0 · partial 7 · lost 1 lines; words in [ ] 3%, damaged 40% | EN 8/8 | 1 | — |
| *šuʾila*s to Ea  | SB 2 | `/api/texts/Mag/2/6/chapters/Standard%20Babylonian/2/display` | 17 | intact 4 · partial 13 · lost 0 lines; words in [ ] 8%, damaged 26% | EN 17/17 | 2 | — |
| *šuʾila*s to Enlil  | SB 1a | `/api/texts/Mag/2/7/chapters/Standard%20Babylonian/1a/display` | 34 | intact 23 · partial 11 · lost 0 lines; words in [ ] 1%, damaged 4% | EN 34/34 | 4 | — |
| *šuʾila*s to Enlil  | SB 1b | `/api/texts/Mag/2/7/chapters/Standard%20Babylonian/1b/display` | 41 | intact 15 · partial 25 · lost 1 lines; words in [ ] 3%, damaged 15% | EN 40/41 | 2 | — |
| *šuʾila*s to Enlil  | SB 2 | `/api/texts/Mag/2/7/chapters/Standard%20Babylonian/2/display` | 6 | intact 0 · partial 5 · lost 1 lines; words in [ ] 7%, damaged 50% | EN 6/6 | 1 | — |
| *šuʾila*s to Ištar  | SB 1 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/1/display` | 50 | intact 44 · partial 6 · lost 0 lines; words in [ ] 2%, damaged 2% | EN 50/50 | 11 | — |
| *šuʾila*s to Ištar  | SB 2 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/2/display` | 123 | intact 109 · partial 12 · lost 2 lines; words in [ ] 0%, damaged 0% | EN 121/123 | 13 | — |
| *šuʾila*s to Ištar  | SB 3 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/3/display` | 29 | intact 20 · partial 8 · lost 1 lines; words in [ ] 0%, damaged 5% | EN 26/29 | 2 | — |
| *šuʾila*s to Ištar  | SB 4 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/4/display` | 32 | intact 5 · partial 27 · lost 0 lines; words in [ ] 6%, damaged 11% | EN 32/32 | 4 | — |
| *šuʾila*s to Ištar  | SB 5 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/5/display` | 10 | intact 2 · partial 7 · lost 1 lines; words in [ ] 19%, damaged 8% | EN 10/10 | 1 | — |
| *šuʾila*s to Ištar  | SB 6 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/6/display` | 1 | intact 1 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 1/1 | 3 | — |
| *šuʾila*s to Ištar  | SB 7 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/7/display` | 5 | intact 0 · partial 5 · lost 0 lines; words in [ ] 48%, damaged 12% | EN 5/5 | 1 | — |
| *šuʾila*s to Ištar  | SB 8 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/8/display` | 10 | intact 0 · partial 10 · lost 0 lines; words in [ ] 20%, damaged 25% | EN 10/10 | 1 | — |
| *šuʾila*s to Ištar  | SB 9 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/9/display` | 5 | intact 0 · partial 4 · lost 1 lines; words in [ ] 26%, damaged 20% | EN 5/5 | 1 | — |
| *šuʾila*s to Ištar  | SB 10 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/10/display` | 67 | intact 30 · partial 30 · lost 7 lines; words in [ ] 6%, damaged 6% | EN 67/67 | 6 | — |
| *šuʾila*s to Ištar  | SB 11 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/11/display` | 27 | intact 10 · partial 17 · lost 0 lines; words in [ ] 10%, damaged 6% | EN 27/27 | 1 | — |
| *šuʾila*s to Ištar  | SB 12 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/12/display` | 61 | intact 4 · partial 50 · lost 7 lines; words in [ ] 22%, damaged 26% | EN 61/61 | 4 | — |
| *šuʾila*s to Ištar  | SB 13 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/13/display` | 67 | intact 23 · partial 40 · lost 4 lines; words in [ ] 5%, damaged 8% | EN 67/67 | 2 | — |
| *šuʾila*s to Ištar  | SB 23 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/23/display` | 15 | intact 11 · partial 4 · lost 0 lines; words in [ ] 6%, damaged 3% | EN 15/15 | 3 | — |
| *šuʾila*s to Ištar  | SB 30 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/30/display` | 7 | intact 0 · partial 5 · lost 2 lines; words in [ ] 50%, damaged 18% | EN 7/7 | 1 | — |
| *šuʾila*s to Ištar  | SB 31 | `/api/texts/Mag/2/13/chapters/Standard%20Babylonian/31/display` | 55 | intact 38 · partial 17 · lost 0 lines; words in [ ] 1%, damaged 2% | EN 34/55 | 1 | — |
| *šuʾila*s to Ninlil  | SB 1 | `/api/texts/Mag/2/22/chapters/Standard%20Babylonian/1/display` | 1 | intact 0 · partial 1 · lost 0 lines; words in [ ] 0%, damaged 20% | EN 1/1 | 2 | — |
| *šuʾila*s to Ninlil  | SB 2 | `/api/texts/Mag/2/22/chapters/Standard%20Babylonian/2/display` | 1 | intact 1 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 1/1 | 1 | — |
| *šuʾila*s to Ninlil  | SB 5 | `/api/texts/Mag/2/22/chapters/Standard%20Babylonian/5/display` | 1 | intact 0 · partial 1 · lost 0 lines; words in [ ] 0%, damaged 20% | EN 1/1 | 2 | — |
| *šuʾila*s to Šamaš  | SB 1 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/1/display` | 58 | intact 44 · partial 14 · lost 0 lines; words in [ ] 4%, damaged 5% | EN 58/58 | 17 | — |
| *šuʾila*s to Šamaš  | SB 2 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/2/display` | 21 | intact 10 · partial 11 · lost 0 lines; words in [ ] 9%, damaged 9% | EN 21/21 | 1 | — |
| *šuʾila*s to Šamaš  | SB 3 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/3/display` | 42 | intact 6 · partial 33 · lost 3 lines; words in [ ] 9%, damaged 18% | EN 42/42 | 2 | — |
| *šuʾila*s to Šamaš  | SB 4 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/4/display` | 14 | intact 0 · partial 7 · lost 7 lines; words in [ ] 6%, damaged 73% | EN 14/14 | 1 | — |
| *šuʾila*s to Šamaš  | SB 5 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/5/display` | 25 | intact 14 · partial 11 · lost 0 lines; words in [ ] 7%, damaged 5% | EN 25/25 | 4 | — |
| *šuʾila*s to Šamaš  | SB 6 | `/api/texts/Mag/2/31/chapters/Standard%20Babylonian/6/display` | 51 | intact 21 · partial 29 · lost 1 lines; words in [ ] 8%, damaged 5% | EN 48/51 | 3 | — |
| Saĝba  | SB I | `/api/texts/Mag/3/10/chapters/Standard%20Babylonian/I/display` | 25 | intact 20 · partial 5 · lost 0 lines; words in [ ] 0%, damaged 3% | EN 25/25 + de | 49 | — |
| Bīt mēseri  | SB FI | `/api/texts/Mag/4/1/chapters/Standard%20Babylonian/FI/display` | 39 | intact 2 · partial 37 · lost 0 lines; words in [ ] 7%, damaged 4% | EN 39/39 | 1 | — |
| Bīt mēseri  | SB RTA | `/api/texts/Mag/4/1/chapters/Standard%20Babylonian/RTA/display` | 24 | intact 4 · partial 20 · lost 0 lines; words in [ ] 9%, damaged 10% | EN 24/24 | 1 | — |
| Isin Dynasty  | OB 2.5.5.1 Lipit-Eštar A | `/api/texts/Sum/4/3/chapters/Old%20Babylonian/2.5.5.1 Lipit-Eštar A/display` | 65 | intact 65 · partial 0 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 65/65 | 79 | — |
| *šuʾila*s to Anu  | SB 1 | `/api/texts/Šui/1/4/chapters/Standard%20Babylonian/1/display` | 26 | intact 3 · partial 23 · lost 0 lines; words in [ ] 11%, damaged 17% | EN 26/26 | 5 | — |
| *šuʾila*s to Bēlet-ilī  | SB 1 | `/api/texts/Šui/1/5/chapters/Standard%20Babylonian/1/display` | 41 | intact 18 · partial 21 · lost 2 lines; words in [ ] 22%, damaged 6% | EN 41/41 | 3 | — |
| *šuʾila*s to Bēlet-ilī  | SB 2 | `/api/texts/Šui/1/5/chapters/Standard%20Babylonian/2/display` | 22 | intact 0 · partial 21 · lost 1 lines; words in [ ] 9%, damaged 26% | EN 22/22 | 1 | — |
| *šuʾila* to Guanna  | SB 1 | `/api/texts/Šui/1/9/chapters/Standard%20Babylonian/1/display` | 1 | intact 0 · partial 1 · lost 0 lines; words in [ ] 0%, damaged 0% | EN 1/1 | 1 | — |
| *šuʾila* to Gud  | SB 1 | `/api/texts/Šui/1/10/chapters/Standard%20Babylonian/1/display` | 1 | intact 0 · partial 1 · lost 0 lines; words in [ ] 0%, damaged 25% | EN 1/1 | 1 | — |
| *šuʾila*s to Gula  | SB 1a | `/api/texts/Šui/1/11/chapters/Standard%20Babylonian/1a/display` | 28 | intact 21 · partial 7 · lost 0 lines; words in [ ] 4%, damaged 4% | EN 28/28 | 6 | — |
| *šuʾila*s to Gula  | SB 1b | `/api/texts/Šui/1/11/chapters/Standard%20Babylonian/1b/display` | 43 | intact 9 · partial 34 · lost 0 lines; words in [ ] 10%, damaged 17% | EN 43/43 | 10 | — |
| *šuʾila*s to Gula  | SB 2 | `/api/texts/Šui/1/11/chapters/Standard%20Babylonian/2/display` | 6 | intact 0 · partial 5 · lost 1 lines; words in [ ] 52%, damaged 0% | EN 6/6 | 1 | — |

## Appendix B: ETCSL selected compositions (from the local OTA bulk; the web URL pattern is reported, since the site timed out)

| ETCSL no. | Title | File · web | Lines | Preservation | Translation | Tablets cited |
|---|---|---|---|---|---|---|
| 1.1.1 | Enki and Ninḫursaĝa | `transliterations/c.1.1.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr111.htm | 305 | damaged lines 66 (21%); heavily broken 30; gaps noted ≈7 lines missing + 18 fragmentary | EN prose | 3 |
| 1.1.2 | Enki and Ninmaḫ | `transliterations/c.1.1.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr112.htm | 142 | damaged lines 45 (31%); heavily broken 27; gaps noted ≈0 lines missing | EN prose | 6 |
| 1.1.3 | Enki and the world order | `transliterations/c.1.1.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr113.htm | 465 | damaged lines 147 (31%); heavily broken 70; gaps noted ≈7 lines missing | EN prose | 29 |
| 1.1.4 | Enki's journey to Nibru | `transliterations/c.1.1.4.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr114.htm | 133 | damaged lines 2 (1%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 64 |
| 1.2.1 | Enlil and Ninlil | `transliterations/c.1.2.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr121.htm | 154 | damaged lines 20 (12%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 19 |
| 1.2.2 | Enlil and Sud | `transliterations/c.1.2.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr122.htm | 193 | damaged lines 143 (74%); heavily broken 62; gaps noted ≈9 lines missing | EN prose | 20 |
| 1.3.1 | Inana and Enki | `transliterations/c.1.3.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr131.htm | 592 | damaged lines 219 (36%); heavily broken 139; gaps noted ≈228 lines missing | EN prose | 7 |
| 1.3.2 | Inana and Ebiḫ | `transliterations/c.1.3.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr132.htm | 184 | damaged lines 5 (2%); heavily broken 1; gaps noted ≈0 lines missing | EN prose | 75 |
| 1.3.3 | Inana and Šu-kale-tuda | `transliterations/c.1.3.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr133.htm | 298 | damaged lines 200 (67%); heavily broken 35; gaps noted ≈12 lines missing | EN prose | 15 |
| 1.3.5 | Inana and An | `transliterations/c.1.3.5.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr135.htm | 108 | damaged lines 78 (72%); heavily broken 50; gaps noted ≈40 lines missing | EN prose | 3 |
| 1.4.1 | Inana's descent to the nether world | `transliterations/c.1.4.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr141.htm | 440 | damaged lines 63 (14%); heavily broken 16; gaps noted ≈0 lines missing | EN prose | 39 |
| 1.4.1.3 | Dumuzid and his sisters | `transliterations/c.1.4.1.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1413.htm | 97 | damaged lines 85 (87%); heavily broken 74; gaps noted ≈133 lines missing | EN prose | 1 |
| 1.4.3 | Dumuzid's dream | `transliterations/c.1.4.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr143.htm | 270 | damaged lines 44 (16%); heavily broken 6; gaps noted ≈0 lines missing | EN prose | 66 |
| 1.4.4 | Inana and Bilulu: an ulila to Inana | `transliterations/c.1.4.4.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr144.htm | 137 | damaged lines 78 (56%); heavily broken 48; gaps noted ≈40 lines missing | EN prose | 2 |
| 1.5.1 | Nanna-Suen's journey to Nibru | `transliterations/c.1.5.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr151.htm | 328 | damaged lines 92 (28%); heavily broken 57; gaps noted ≈34 lines missing | EN prose | 29 |
| 1.6.1 | Ninurta's return to Nibru: a šir-gida to Ninurta | `transliterations/c.1.6.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr161.htm | 208 | damaged lines 123 (59%); heavily broken 43; gaps noted ≈0 lines missing | EN prose | 46 |
| 1.6.2 | Ninurta's exploits: a šir-sud (?) to Ninurta | `transliterations/c.1.6.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr162.htm | 712 | damaged lines 121 (16%); heavily broken 63; gaps noted ≈17 lines missing | EN prose | 82 |
| 1.7.1 | The marriage of Martu | `transliterations/c.1.7.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr171.htm | 135 | damaged lines 90 (66%); heavily broken 22; gaps noted ≈8 lines missing | EN prose | 2 |
| 1.7.3 | Ninĝišzida's journey to the nether world | `transliterations/c.1.7.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr173.htm | 96 | damaged lines 45 (46%); heavily broken 23; gaps noted ≈1 lines missing | EN prose | 6 |
| 1.7.4 | The Flood story | `transliterations/c.1.7.4.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr174.htm | 89 | damaged lines 40 (44%); heavily broken 30; gaps noted ≈211 lines missing | EN prose | 1 |
| 1.7.6 | How grain came to Sumer | `transliterations/c.1.7.6.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr176.htm | 32 | damaged lines 23 (71%); heavily broken 10; gaps noted ≈0 lines missing | EN prose | 2 |
| 1.8.1.1 | Gilgameš and Aga | `transliterations/c.1.8.1.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1811.htm | 117 | damaged lines 11 (9%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 16 |
| 1.8.1.2 | Gilgameš and the bull of heaven | `transliterations/c.1.8.1.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1812.htm | 307 | damaged lines 227 (73%); heavily broken 168; gaps noted ≈10 lines missing | EN prose | 21 |
| 1.8.1.3 | The death of Gilgameš | `transliterations/c.1.8.1.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1813.htm | 495 | damaged lines 393 (79%); heavily broken 247; gaps noted ≈34 lines missing | EN prose | 17 |
| 1.8.1.4 | Gilgameš, Enkidu and the nether world | `transliterations/c.1.8.1.4.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1814.htm | 463 | damaged lines 171 (36%); heavily broken 36; gaps noted ≈9 lines missing | EN prose | 59 |
| 1.8.1.5 | Gilgameš and Ḫuwawa (Version A) | `transliterations/c.1.8.1.5.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1815.htm | 324 | damaged lines 92 (28%); heavily broken 47; gaps noted ≈0 lines missing | EN prose | 92 |
| 1.8.1.5.1 | Gilgameš and Ḫuwawa (Version B) | `transliterations/c.1.8.1.5.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr18151.htm | 138 | damaged lines 87 (63%); heavily broken 32; gaps noted ≈36 lines missing | EN prose | 4 |
| 1.8.2.1 | Lugalbanda in the mountain cave | `transliterations/c.1.8.2.1.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1821.htm | 509 | damaged lines 149 (29%); heavily broken 40; gaps noted ≈0 lines missing + 1 fragmentary | EN prose | 56 |
| 1.8.2.2 | Lugalbanda and the Anzud bird | `transliterations/c.1.8.2.2.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1822.htm | 422 | damaged lines 21 (4%); heavily broken 5; gaps noted ≈0 lines missing | EN prose | 55 |
| 1.8.2.3 | Enmerkar and the lord of Aratta | `transliterations/c.1.8.2.3.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1823.htm | 641 | damaged lines 134 (20%); heavily broken 62; gaps noted ≈9 lines missing | EN prose | 27 |
| 1.8.2.4 | Enmerkar and En-suḫgir-ana | `transliterations/c.1.8.2.4.xml` · https://etcsl.orinst.ox.ac.uk/section1/tr1824.htm | 295 | damaged lines 61 (20%); heavily broken 24; gaps noted ≈0 lines missing | EN prose | 36 |
| 2.1.1 | The Sumerian king list | `transliterations/c.2.1.1.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr211.htm | 435 | damaged lines 86 (19%); heavily broken 8; gaps noted ≈17 lines missing | EN prose | 23 |
| 2.1.3 | The history of the Tummal | `transliterations/c.2.1.3.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr213.htm | 34 | damaged lines 0 (0%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 20 |
| 2.1.4 | Sargon and Ur-Zababa | `transliterations/c.2.1.4.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr214.htm | 82 | damaged lines 40 (48%); heavily broken 17; gaps noted ≈0 lines missing | EN prose | 2 |
| 2.1.5 | The cursing of Agade | `transliterations/c.2.1.5.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr215.htm | 321 | damaged lines 31 (9%); heavily broken 9; gaps noted ≈0 lines missing | EN prose | 102 |
| 2.1.6 | The victory of Utu-ḫeĝal | `transliterations/c.2.1.6.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr216.htm | 62 | damaged lines 19 (30%); heavily broken 3; gaps noted ≈0 lines missing | EN prose | 3 |
| 2.1.7 | The building of Ninĝirsu's temple (Gudea, cylinders A and B) | `transliterations/c.2.1.7.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr217.htm | 1300 | damaged lines 92 (7%); heavily broken 20; gaps noted ≈63 lines missing | EN prose | 2 |
| 2.2.2 | The lament for Urim | `transliterations/c.2.2.2.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr222.htm | 442 | damaged lines 3 (0%); heavily broken 1; gaps noted ≈0 lines missing | EN prose | 94 |
| 2.2.3 | The lament for Sumer and Urim | `transliterations/c.2.2.3.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr223.htm | 524 | damaged lines 52 (9%); heavily broken 33; gaps noted ≈7 lines missing | EN prose | 59 |
| 2.2.4 | The lament for Nibru | `transliterations/c.2.2.4.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr224.htm | 326 | damaged lines 25 (7%); heavily broken 3; gaps noted ≈0 lines missing | EN prose | 67 |
| 2.2.5 | The lament for Unug | `transliterations/c.2.2.5.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr225.htm | 259 | damaged lines 174 (67%); heavily broken 126; gaps noted ≈201 lines missing | EN prose | 23 |
| 2.2.6 | The lament for Eridug | `transliterations/c.2.2.6.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr226.htm | 191 | damaged lines 109 (57%); heavily broken 78; gaps noted ≈5 lines missing | EN prose | 11 |
| 2.4.1.1 | The death of Ur-Namma (Ur-Namma A) | `transliterations/c.2.4.1.1.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr2411.htm | 396 | damaged lines 315 (79%); heavily broken 118; gaps noted ≈26 lines missing | EN prose | 10 |
| 2.4.2.01 | A praise poem of Šulgi (Šulgi A) | `transliterations/c.2.4.2.01.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr24201.htm | 108 | damaged lines 9 (8%); heavily broken 3; gaps noted ≈0 lines missing | EN prose | 72 |
| 2.4.2.02 | A praise poem of Šulgi (Šulgi B) | `transliterations/c.2.4.2.02.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr24202.htm | 385 | damaged lines 17 (4%); heavily broken 7; gaps noted ≈0 lines missing | EN prose | 71 |
| 2.5.5.1 | A praise poem of Lipit-Eštar (Lipit-Eštar A) | `transliterations/c.2.5.5.1.xml` · https://etcsl.orinst.ox.ac.uk/section2/tr2551.htm | 108 | damaged lines 0 (0%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 70 |
| 4.05.1 | Enlil in the E-kur (Enlil A) | `transliterations/c.4.05.1.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4051.htm | 171 | damaged lines 1 (0%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 73 |
| 4.07.2 | The exaltation of Inana (Inana B) | `transliterations/c.4.07.2.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4072.htm | 154 | damaged lines 2 (1%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 96 |
| 4.07.3 | A hymn to Inana (Inana C) | `transliterations/c.4.07.3.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4073.htm | 233 | damaged lines 80 (34%); heavily broken 37; gaps noted ≈41 lines missing | EN prose | 35 |
| 4.14.1 | A hymn to Nanše (Nanše A) | `transliterations/c.4.14.1.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4141.htm | 256 | damaged lines 30 (11%); heavily broken 21; gaps noted ≈0 lines missing | EN prose | 38 |
| 4.80.1 | The temple hymns | `transliterations/c.4.80.1.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4801.htm | 537 | damaged lines 49 (9%); heavily broken 29; gaps noted ≈8 lines missing | EN prose | 48 |
| 4.80.2 | The Keš temple hymn | `transliterations/c.4.80.2.xml` · https://etcsl.orinst.ox.ac.uk/section4/tr4802.htm | 165 | damaged lines 7 (4%); heavily broken 3; gaps noted ≈0 lines missing | EN prose | 90 |
| 5.1.3 | The advice of a supervisor to a younger scribe (E-dub-ba-a C) | `transliterations/c.5.1.3.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr513.htm | 77 | damaged lines 3 (3%); heavily broken 1; gaps noted ≈0 lines missing | EN prose | 39 |
| 5.2.4 | A man and his god | `transliterations/c.5.2.4.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr524.htm | 141 | damaged lines 63 (44%); heavily broken 35; gaps noted ≈5 lines missing | EN prose | 9 |
| 5.3.1 | The debate between Hoe and Plough | `transliterations/c.5.3.1.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr531.htm | 201 | damaged lines 6 (2%); heavily broken 1; gaps noted ≈0 lines missing | EN prose | 59 |
| 5.3.2 | The debate between Grain and Sheep | `transliterations/c.5.3.2.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr532.htm | 193 | damaged lines 17 (8%); heavily broken 8; gaps noted ≈0 lines missing | EN prose | 66 |
| 5.3.3 | The debate between Winter and Summer | `transliterations/c.5.3.3.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr533.htm | 295 | damaged lines 75 (25%); heavily broken 44; gaps noted ≈23 lines missing | EN prose | 27 |
| 5.3.5 | The debate between Bird and Fish | `transliterations/c.5.3.5.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr535.htm | 191 | damaged lines 74 (38%); heavily broken 38; gaps noted ≈2 lines missing | EN prose | 23 |
| 5.3.6 | The debate between Copper and Silver | `transliterations/c.5.3.6.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr536.htm | 320 | damaged lines 212 (66%); heavily broken 160; gaps noted ≈47 lines missing | EN prose | 9 |
| 5.5.1 | The message of Lu-diĝira to his mother | `transliterations/c.5.5.1.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr551.htm | 63 | damaged lines 13 (20%); heavily broken 6; gaps noted ≈0 lines missing | EN prose | 5 |
| 5.5.4 | The song of the hoe | `transliterations/c.5.5.4.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr554.htm | 110 | damaged lines 1 (0%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 88 |
| 5.6.1 | The instructions of Šuruppag | `transliterations/c.5.6.1.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr561.htm | 288 | damaged lines 84 (29%); heavily broken 27; gaps noted ≈0 lines missing | EN prose | 71 |
| 5.6.3 | The farmer's instructions | `transliterations/c.5.6.3.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr563.htm | 111 | damaged lines 3 (2%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 44 |
| 5.7.1 | Enlil and Nam-zid-tara | `transliterations/c.5.7.1.xml` · https://etcsl.orinst.ox.ac.uk/section5/tr571.htm | 27 | damaged lines 1 (3%); heavily broken 0; gaps noted ≈0 lines missing | EN prose | 7 |
| 6.1.01 | Proverbs: collection 1 | `transliterations/c.6.1.01.xml` · https://etcsl.orinst.ox.ac.uk/section6/tr6101.htm | 350 | damaged lines 151 (43%); heavily broken 94; gaps noted ≈2 lines missing | EN prose | 74 |
| 6.1.02 | Proverbs: collection 2 + 6 | `transliterations/c.6.1.02.xml` · https://etcsl.orinst.ox.ac.uk/section6/tr6102.htm | 314 | damaged lines 92 (29%); heavily broken 40; gaps noted ≈0 lines missing | EN prose | 158 |
| 6.1.03 | Proverbs: collection 3 | `transliterations/c.6.1.03.xml` · https://etcsl.orinst.ox.ac.uk/section6/tr6103.htm | 351 | damaged lines 101 (28%); heavily broken 48; gaps noted ≈0 lines missing | EN prose | 41 |

The full statistics for all 394 compositions are in `/private/tmp/claude-501/-Users-giladben-dor-dev-perush---------------------------/2c8a8da9-f235-4164-8149-4d1791735ef2/scratchpad/availability/etcsl/table.txt`.

## Appendix C: SAA 3 (ORACC saao/saa03), per text

| No. | Title | Lines · share of words in [ ] |
|---|---|---|
| SAA 03 014 | Love Lyrics of Nabû and Tašmetu | 53 · words lost 25% |
| SAA 03 020 | Epical Narrative Relating to Assurbanipal’s Elamite War | 48 · words lost 63% |
| SAA 03 029 | Warning to Bel-eṭir | 28 · words lost 39% |
| SAA 03 025 | Letters to Assurbanipal from his Son | 111 · words lost 61% |
| SAA 03 026 | A Petition to Assurbanipal | 25 · words lost 57% |
| SAA 03 013 | Dialogue Between Assurbanipal and Nabû | 37 · words lost 3% |
| SAA 03 024 | Fragment of a Royal Epic(?) | 16 · words lost 82% |
| SAA 03 021 | Assurbanipal’s Wars in Elam | 26 · words lost 77% |
| SAA 03 007 | Assurbanipal’s Hymn to Ištar of Nineveh | 28 · words lost 21% |
| SAA 03 005 | Nanaya Hymn of Assurbanipal | 27 · words lost 52% |
| SAA 03 002 | Assurbanipal’s Acrostic Hymn to Marduk and Zarpanitu | 69 · words lost 40% |
| SAA 03 001 | Assurbanipal’s Hymn to Aššur | 59 · words lost 49% |
| SAA 03 004 | Nanaya Hymn of Sargon II | 66 · words lost 37% |
| SAA 03 048 | Childbirth Incantation and Ritual | 24 · words lost 44% |
| SAA 03 015 | Elegy in Memory of a Woman | 23 · words lost 25% |
| SAA 03 047 | Letter from Ninurta to an Assyrian King | 28 · words lost 55% |
| SAA 03 037 | A Cultic Commentary | 51 · words lost 39% |
| SAA 03 044 | Aššur’s Response to Assurbanipal’s Report on the Šamaš- | 54 · words lost 36% |
| SAA 03 045 | Aššur’s Response to Assurbanipal’s Report on the Elamit | 21 · words lost 70% |
| SAA 03 046 | Fragment of a Divine Letter | 13 · words lost 76% |
| SAA 03 023 | Epical Text Mourning the Death of a King | 19 · words lost 43% |
| SAA 03 027 | Fragment of a Letter Praising Assurbanipal | 13 · words lost 56% |
| SAA 03 031 | Defeat of Teumman and the Annexation of Elam | 36 · words lost 54% |
| SAA 03 041 | Letter from Aššur to Šamši-Adad V | 33 · words lost 59% |
| SAA 03 006 | Assurbanipal’s Hymn to Tašmetu and Nabû | 41 · words lost 59% |
| SAA 03 039 | Mystical Miscellanea | 69 · words lost 10% |
| SAA 03 011 | Assurbanipal’s Coronation Hymn | 40 · words lost 5% |
| SAA 03 008 | Hymn to the city of Arbela | 58 · words lost 36% |
| SAA 03 040 | Commentary to the Assyrian Cultic Calendar | 41 · words lost 41% |
| SAA 03 035 | Marduk Ordeal (Nineveh Version) | 72 · words lost 69% |
| SAA 03 049 | Fragment Mentioning Gilgameš Epic | 18 · words lost 68% |
| SAA 03 003 | Assurbanipal’s Hymn to the Ištars of Nineveh and Arbela | 44 · words lost 16% |
| SAA 03 018 | Epic of Sargon II | 25 · words lost 58% |
| SAA 03 019 | Assurbanipal Epic | 13 · words lost 75% |
| SAA 03 022 | Paean to Assurbanipal after the Conquest of Elam | 46 · words lost 75% |
| SAA 03 028 | Fragment of an Adulatory Letter to a King | 33 · words lost 48% |
| SAA 03 030 | Magic against Bel-eṭir | 10 · words lost 0% |
| SAA 03 033 | The Sin of Sargon | 69 · words lost 62% |
| SAA 03 036 | Myth Embedded in a Royal Ritual | 34 · words lost 72% |
| SAA 03 042 | Fragment of Aššur’s Response to a Royal Letter | 10 · words lost 75% |
| SAA 03 043 | Fragment of the Same Text as No. 42 | 11 · words lost 63% |
| SAA 03 051 | Your Slanderous Lips | 11 · words lost 64% |
| SAA 03 052 | Unidentified Literary Fragment | 7 · words lost 63% |
| SAA 03 009 | Psalm in Praise of Uruk | 39 · words lost 3% |
| SAA 03 032 | The Underworld Vision of an Assyrian Prince | 75 · words lost 40% |
| SAA 03 017 | Shalmaneser III’s Campaign to Urarṭu | 65 · words lost 33% |
| SAA 03 012 | Righteous Sufferer’s Prayer to Nabû | 42 · words lost 9% |
| SAA 03 010 | Blessing for the City of Assur | 52 · words lost 43% |
| SAA 03 016 | Elegies Mourning the Death of Tammuz | 61 · words lost 28% |
| SAA 03 050 | Na’id-Šihu Epic | 9 · words lost 1% |
| SAA 03 034 | Marduk Ordeal (Assur Version) | 76 · words lost 19% |


## Appendix D: SEAL nodes with text (197). Columns: genre-term, node, title, lines, words, translation Y/N, count of [

```
10692 27129 | Atraḫasis LB Flood | lines 27 | words 252 | per  | tr Y | [ 48
10692 27128 | Atraḫasis NA Flood (Nineveh) | lines 45 | words 379 | per  | tr Y | [ 78
10692 27127 | Atraḫasis SB Flood (Nineveh) | lines 17 | words 132 | per  | tr Y | [ 35
10692 27120 | Gilg. XI Flood | lines 207 | words 1689 | per  | tr Y | [ 96
114 7502 | AfO 50, 11ff. (Mama) | lines 77 | words 207 | per  | tr Y | [ 50
114 7516 | ASJ 19, 265f. (Utu/Šamaš) | lines 24 | words 108 | per  | tr Y | [ 41
114 7488 | AUWE 23, 106 (Amurru) | lines 14 | words 65 | per  | tr Y | [ 19
114 7513 | AUWE 23, 113 (Sîn) | lines 28 | words 160 | per  | tr Y | [ 13
114 7520 | CH Prologue and Epilogue (Hammurāpi) | lines 800 | words 1475 | per  | tr Y | [ 9
114 7498 | CM 8 pl. 1ff. // ZA 110, 63 (Ištar Louvre) | lines 248 | words 1959 | per  | tr Y | [ 48
114 7490 | CT 15, 1f. (Bēlet-ilī) | lines 47 | words 189 | per  | tr Y | [ 36
114 7514 | CT 15, 5f. (Sîn and Išum) | lines 42 | words 157 | per  | tr Y | [ 24
114 7521 | CT 21, 40ff. (Hammurāpi) | lines 124 | words 268 | per  | tr Y | [ 64
114 7527 | CT 44, 49 | lines 30 | words 121 | per  | tr Y | [ 32
114 7517 | CT 58, 28 (Utu/Šamaš) | lines 28 | words 128 | per  | tr Y | [ 20
114 7508 | CUSAS 10, 7 (Ningišizida) | lines 24 | words 98 | per  | tr Y | [ 5
114 7528 | CUSAS 32, 77 | lines 16 | words 69 | per  | tr Y | [ 13
114 7492 | Fs. Reiner 387 (Gods of the Night) | lines 14 | words 77 | per  | tr N | [ 19
114 26699 | Fs. Sjöberg 15 | lines 11 | words 52 | per  | tr Y | [ 1
114 26698 | Fs. Sjöberg 18 | lines 19 | words 98 | per  | tr Y | [ 24
114 7500 | Guichard 2020, 151f. (Itūrmēr) | lines 26 | words 207 | per  | tr Y | [ 39
114 7501 | JCS 26, 174f. (Lamasaga/Baba) | lines 31 | words 209 | per  | tr Y | [ 46
114 7511 | JRAS Cent. Suppl. Pl. 6ff. // AO 6161 (Papulegara) | lines 180 | words 718 | per  | tr Y | [ 74
114 7525 | MC 7, 94–101 (Sargon, the Lion) | lines 77 | words 224 | per  | tr Y | [ 57
114 29315 | N 5963+ | lines 17 | words 108 | per  | tr Y | [ 29
114 7529 | Nouvelles Fouilles de Telloh 212a | lines 22 | words 79 | per  | tr Y | [ 26
114 7530 | OBO 278, 357–365 (personal deity) | lines 41 | words 207 | per  | tr N | [ 13
114 7489 | OECT 11, 1 (Amurru Rīm-Sîn) | lines 48 | words 328 | per  | tr Y | [ 66
114 7522 | OrS 23, 178 (Hammurāpi) | lines 9 | words 50 | per  | tr Y | [ 14
114 7494 | RA 15, 159ff. (Agušaya B) | lines 137 | words 357 | per  | tr Y | [ 59
114 7495 | RA 22, 170f. (Ištar Ammī-ditāna) | lines 60 | words 232 | per  | tr Y | [ 3
114 7503 | RA 86, 81 (Marduk) | lines 16 | words 108 | per  | tr Y | [ 6
114 7491 | Šilejko 1924 pl. VIII // Dossin 1935, 182f. (Gods of the Night) | lines 119 | words 256 | per  | tr Y | [ 5
114 7496 | TIM 9, 20ff. // CT 58, 53 (Ištar) | lines 90 | words 590 | per  | tr Y | [ 46
114 7526 | TIM 9, 41 (Nanna Gungunum) | lines 36 | words 257 | per  | tr Y | [ 61
114 7523 | UET 1, 146 // VS 24, 41 (Hammurāpi) | lines 62 | words 125 | per  | tr Y | [ 37
114 7519 | UET 6/1, 117 (Temple) | lines 18 | words 49 | per  | tr Y | [ 10
114 7524 | UET 6/1, 84 (Iddin-Dagan) | lines 35 | words 80 | per  | tr Y | [ 27
114 7504 | UET 6/2, 404 (Nanāya) | lines 13 | words 72 | per  | tr Y | [ 13
114 7507 | UET 6/3, 579-584 (Nidaba and Enki) | lines 36 | words 343 | per  | tr Y | [ 109
114 7505 | UET 6/3, 889 (Nanāya) | lines 26 | words 74 | per  | tr Y | [ 32
114 7533 | UM 29-15-567 | lines 25 | words 82 | per  | tr Y | [ 20
114 7499 | VS 10, 213 (Ištar) | lines 24 | words 80 | per  | tr Y | [ 21
114 7493 | VS 10, 214 (Agušaya A) | lines 311 | words 731 | per  | tr Y | [ 138
114 7506 | VS 10, 215 (Nanāya) | lines 60 | words 235 | per  | tr Y | [ 61
114 7510 | VS 2, 89 (Nunnamnir) | lines 19 | words 83 | per  | tr Y | [ 24
114 26600 | YOS 11, 22 | lines 67 | words 335 | per  | tr Y | [ 18
114 26977 | YOS 11, 23 // RA 38, 87 // RA 38, 85–86 | lines 180 | words 2076 | per  | tr N | [ 212
11655 34399 | ABC 17 | lines ? | words ? | per  | tr Y | [ 87
11655 34571 | ABC 22 | lines ? | words ? | per  | tr Y | [ 96
11655 34808 | ABC 23 | lines ? | words ? | per  | tr Y | [ 35
11655 34840 | ABC 7 | lines ? | words ? | per  | tr Y | [ 103
11655 35110 | ABC Bab. Fragment 2 | lines ? | words ? | per  | tr Y | [ 21
11655 36163 | AfO 33 35–36 | lines ? | words ? | per  | tr Y | [ 58
11655 37063 | BCT A | lines ? | words ? | per  | tr Y | [ 61
11655 37180 | BCT B | lines ? | words ? | per  | tr Y | [ 190
11655 37453 | BCT C | lines ? | words ? | per  | tr Y | [ 156
11655 35151 | BHLT 10a | lines ? | words ? | per  | tr Y | [ 59
11655 35209 | BHLT 10c | lines ? | words ? | per  | tr Y | [ 37
11655 35238 | BHLT 10d | lines ? | words ? | per  | tr Y | [ 24
11655 36918 | BHLT 3 | lines ? | words ? | per  | tr Y | [ 96
11655 35259 | BHLT 5 | lines ? | words ? | per  | tr Y | [ 52
11655 35344 | BHLT 7 | lines ? | words ? | per  | tr Y | [ 76
11655 35447 | BHLT 8 | lines ? | words ? | per  | tr Y | [ 48
11655 35514 | BHLT 9 | lines ? | words ? | per  | tr Y | [ 67
11655 37730 | BM 32374 | lines ? | words ? | per  | tr Y | [ 13
11655 37757 | BM 32485 + BM 92707 (DT 109) | lines ? | words ? | per  | tr Y | [ 78
11655 35576 | CT 46 45 | lines ? | words ? | per  | tr Y | [ 125
11655 37047 | CT 51 122 | lines ? | words ? | per  | tr Y | [ 25
11655 36280 | CTMMA 2 44 | lines ? | words ? | per  | tr Y | [ 103
11655 37964 | DT 114 | lines ? | words ? | per  | tr Y | [ 34
11655 38079 | DT 15 | lines ? | words ? | per  | tr Y | [ 141
11655 38285 | Festivals a | lines ? | words ? | per  | tr Y | [ 13
11655 38313 | Fs. Lambert 264–265 | lines ? | words ? | per  | tr Y | [ 58
11655 38426 | Fs. Lambert 275-277 | lines ? | words ? | per  | tr Y | [ 45
11655 38576 | Fs. Lambert 294 // BTT 57 | lines ? | words ? | per  | tr Y | [ 41
11655 36414 | Iraq 67/1 268 | lines ? | words ? | per  | tr Y | [ 44
11655 36548 | Iraq 67/1 273 | lines ? | words ? | per  | tr Y | [ 107
11655 38658 | Iraq 81 88–89 | lines ? | words ? | per  | tr Y | [ 92
11655 38804 | JCS 43/45 102–106 | lines ? | words ? | per  | tr Y | [ 255
11655 39031 | JCS 70 194–195 | lines ? | words ? | per  | tr Y | [ 179
11655 39225 | JCS 70 214–215 | lines ? | words ? | per  | tr Y | [ 131
11655 36710 | JTVI 29 82–83 | lines ? | words ? | per  | tr N | [ 100
11655 36808 | JTVI 29 84–85 | lines ? | words ? | per  | tr Y | [ 87
11655 35952 | JTVI 29 86–89 | lines ? | words ? | per  | tr Y | [ 62
11655 39359 | MNB 1848 | lines ? | words ? | per  | tr Y | [ 98
11655 39654 | WZKM 107 95 | lines ? | words ? | per  | tr Y | [ 5
161 1815 | AfO 54, 270ff. (BM 29624 // BM 109164) (Mama) | lines 83 | words 448 | per  | tr Y | [ 111
161 1812 | ASJ 18, 21 (Enki) | lines 11 | words 38 | per  | tr Y | [ 10
161 1670 | BM 120015 (Personal complaint) | lines 22 | words 226 | per  | tr Y | [ 10
161 1824 | BM 67111 (Destruction of Ur) | lines 30 | words 243 | per  | tr Y | [ 40
161 1813 | CM 8 Pl. 27ff. (Ištar Baghdad) | lines 92 | words 524 | per  | tr Y | [ 76
161 1814 | CT 44, 21 (Marduk) | lines 234 | words 1538 | per  | tr Y | [ 244
161 29818 | Gabbay/Samet 2022 | lines 110 | words 352 | per  | tr Y | [ 60
161 1820 | MIO 12, Pl. 3f. (Ištar and Dumuzi) | lines 46 | words 195 | per  | tr Y | [ 48
161 1829 | PBS 1/1, 2 (Anuna) | lines 157 | words 721 | per  | tr Y | [ 159
161 28234 | RA 116, 61–64 | lines ? | words ? | per  | tr Y | [ 60
161 1808 | RB 59 Pl. 7f. (Man and his god) | lines 69 | words 606 | per  | tr Y | [ 90
161 1816 | UET 6/2, 403 | lines 18 | words 73 | per  | tr Y | [ 11
161 1810 | VS 10, 179 (Personal complaint) | lines 17 | words 88 | per  | tr Y | [ 21
161 1811 | VS 17, 35 (Personal complaint) | lines 7 | words 37 | per  | tr N | [ 0
167 1620 | CUSAS 10, 10 | lines 50 | words 155 | per  | tr Y | [ 35
167 1614 | CUSAS 10, 13 | lines 12 | words 70 | per  | tr Y | [ 11
167 1618 | CUSAS 10, 8 | lines 23 | words 72 | per  | tr Y | [ 11
167 1619 | CUSAS 10, 9 | lines 36 | words 149 | per  | tr Y | [ 30
167 1621 | Fs. Renger 192–193/ | lines 61 | words 287 | per  | tr Y | [ 37
167 1622 | LAOS 4 No. 1 (A 7478) | lines 143 | words 958 | per  | tr Y | [ 110
167 1617 | MIO 12, 52–53 | lines 43 | words 297 | per  | tr Y | [ 70
167 1623 | PRAK 1 B 472 | lines 39 | words 178 | per  | tr Y | [ 35
167 1627 | PRAK 2 C 125 | lines 7 | words 36 | per  | tr Y | [ 10
167 1629 | PRAK 2 C 134 | lines 14 | words 66 | per  | tr Y | [ 15
167 1630 | PRAK 2 C 135 | lines 7 | words 31 | per  | tr Y | [ 7
167 1624 | PRAK 2 C 3 | lines 32 | words 92 | per  | tr Y | [ 34
167 1625 | PRAK 2 C 30 | lines 10 | words 25 | per  | tr Y | [ 10
167 1626 | PRAK 2 C 41 | lines 10 | words 25 | per  | tr Y | [ 13
167 1616 | YOS 11, 24 | lines 43 | words 291 | per  | tr Y | [ 14
167 1615 | ZA 49, 168–169 | lines 108 | words 576 | per  | tr Y | [ 66
168 28231 | DAAM 2, 8 | lines 37 | words 168 | per  | tr N | [ 46
168 1631 | JAOS 103, 26–27 | lines 43 | words 174 | per  | tr Y | [ 20
168 1637 | KAL 3, 75 | lines 32 | words 232 | per  | tr Y | [ 52
168 1638 | LAOS 4 No. 11 (Moussaieff Love Song) | lines 31 | words 248 | per  | tr Y | [ 23
168 1633 | LKA 15 | lines 20 | words 168 | per  | tr Y | [ 23
168 1635 | Or. 60, 340 | lines 24 | words 151 | per  | tr Y | [ 11
248 1780 | BWL pl. 71 | lines 29 | words 172 | per  | tr Y | [ 36
248 1563 | Enlil and Namzitara | lines 127 | words 504 | per  | tr Y | [ 85
248 29763 | HS 1919+ HS 1936 | lines 60 | words 389 | per  | tr Y | [ 72
248 1801 | Life of Mankind is Only a Glance (Emar 6/4, 767+) | lines 183 | words 399 | per  | tr Y | [ 126
248 1784 | VS 24, 113 | lines 19 | words 76 | per  | tr Y | [ 18
249 1655 | At the cleaners (UET 6/2, 414) | lines 44 | words 208 | per  | tr Y | [ 22
249 1759 | BWL pl. 68 | lines 11 | words 50 | per  | tr Y | [ 2
249 1760 | BWL pl. 70 | lines 32 | words 84 | per  | tr Y | [ 13
249 1736 | CT 46, 44 | lines 33 | words 75 | per  | tr Y | [ 30
249 1755 | CUSAS 2, 30 | lines 3 | words 24 | per  | tr Y | [ 3
249 1744 | Fs. Reiner 383ff. | lines 33 | words 160 | per  | tr Y | [ 57
249 1754 | Iraq 78, 245–246 (On Wolves and Kings) | lines 40 | words 167 | per  | tr Y | [ 18
249 1669 | Iraq 81, 241–243 (I Was Not Warm in the Cold) | lines 16 | words 67 | per  | tr Y | [ 8
249 1738 | JCS 66, 42-44 // ZA 110, 53–59 (A Father and His Son) | lines 549 | words 2831 | per  | tr Y | [ 276
249 1758 | Proverbs of Ancient Sumer 2 pl. 117 | lines 15 | words 50 | per  | tr Y | [ 0
249 1751 | Scholars of Uruk (CUSAS 10, 14) | lines 127 | words 809 | per  | tr Y | [ 86
249 1765 | TIM 9, 27 | lines 8 | words 31 | per  | tr Y | [ 7
249 1766 | TIM 9, 53 | lines 22 | words 59 | per  | tr Y | [ 2
249 1764 | UET 6/2, 386 | lines 10 | words 14 | per  | tr Y | [ 0
249 31663 | UET 6/3, 899 + UET 7, 74 | lines ? | words ? | per  | tr Y | [ 63
249 1768 | UVB 18 pl. 28 | lines ? | words ? | per  | tr Y | [ 8
80 7255 | AfO 13, 49ff. (Narām-Sîn and the Lord of Apišal) | lines 71 | words 445 | per  | tr Y | [ 54
80 1537 | AnSt 33, 147ff. (Girra and Elamatum) | lines 53 | words 222 | per  | tr N | [ 32
80 1512 | Anzu OB II | lines 82 | words 418 | per  | tr Y | [ 95
80 1514 | Anzu OB III | lines 34 | words 181 | per  | tr Y | [ 54
80 1515 | Atraḫasis I (all periods) | lines 448 | words 2358 | per  | tr Y | [ 1171
80 39732 | Atraḫasis II (all periods) | lines ? | words ? | per  | tr Y | [ 711
80 1518 | Atraḫasis OB II-III (Larsa) | lines 20 | words 118 | per  | tr Y | [ 3
80 1517 | Atraḫasis OB III (Sippar) | lines 315 | words 2076 | per  | tr Y | [ 257
80 1539 | BiOr 30, 359f. (Erra and Narām-Sîn) | lines 72 | words 360 | per  | tr Y | [ 74
80 1546 | BRM 4, 4 (Sargon autobiography) | lines 9 | words 30 | per  | tr Y | [ 9
80 6 | CT 15, 3f. (Adad) | lines 46 | words 158 | per  | tr Y | [ 19
80 1551 | CUSAS 10, 1 (Bazi) | lines 65 | words 359 | per  | tr Y | [ 30
80 1524 | Etana OB I-II | lines 102 | words 366 | per  | tr Y | [ 76
80 1525 | Etana OB II | lines 102 | words 369 | per  | tr N | [ 76
80 1526 | Gilg. OB Harmal 1 | lines 17 | words 105 | per  | tr Y | [ 11
80 1527 | Gilg. OB Harmal 2 | lines 59 | words 582 | per  | tr Y | [ 114
80 1830 | Gilg. OB II | lines 216 | words 649 | per  | tr Y | [ 80
80 1831 | Gilg. OB III | lines 247 | words 911 | per  | tr Y | [ 215
80 1528 | Gilg. OB IM | lines 39 | words 214 | per  | tr Y | [ 45
80 1529 | Gilg. OB Išchali | lines 48 | words 262 | per  | tr Y | [ 38
80 1530 | Gilg. OB Nippur | lines 26 | words 123 | per  | tr Y | [ 14
80 1536 | Gilg. OB RA 101 | lines 92 | words 414 | per  | tr Y | [ 90
80 31252 | Gilg. OB RA 113 | lines ? | words ? | per  | tr Y | [ 27
80 1531 | Gilg. OB Schoyen 1 | lines 14 | words 104 | per  | tr Y | [ 18
80 1532 | Gilg. OB Schoyen 2 | lines 84 | words 492 | per  | tr Y | [ 101
80 1533 | Gilg. OB UM | lines 23 | words 61 | per  | tr Y | [ 26
80 1534 | Gilg. OB VA+BM | lines 88 | words 434 | per  | tr Y | [ 40
80 1552 | Guichard 2014, 12ff. (Zimrī-līm Epic) | lines 162 | words 720 | per  | tr Y | [ 101
80 1543 | JCS 11, 84f. (Narām-Sîn and the Enemy Hordes) | lines 73 | words 288 | per  | tr Y | [ 60
80 1544 | JCS 33, 195 (Narām-Sîn and the Enemy Hordes) | lines 11 | words 41 | per  | tr Y | [ 7
80 1540 | MC 7, 16A (The Great Revolt against Narām-Sîn A) | lines 40 | words 187 | per  | tr Y | [ 82
80 1542 | MC 7, 16B (The Great Revolt against Narām-Sîn B) | lines 38 | words 159 | per  | tr Y | [ 10
80 1548 | RA 45, 182f. (Sargon the Conquering Hero) | lines 123 | words 422 | per  | tr Y | [ 144
80 1547 | TIM 9, 48 (Sargon in Foreign Lands) | lines 82 | words 433 | per  | tr Y | [ 119
80 1555 | TIM 9, 49 | lines 7 | words 43 | per  | tr Y | [ 13
80 1522 | UET 6/2, 395 (Ningišzida) | lines 51 | words 265 | per  | tr Y | [ 52
80 1553 | UET 6/2, 396 (Anum, Ea, Ištar) | lines 32 | words 432 | per  | tr Y | [ 50
80 1538 | VS 1, 32 (Ipiq-Ištar of Malgium) | lines 41 | words 128 | per  | tr Y | [ 4
80 1549 | VS 24, 75 (Sargon) | lines 7 | words 24 | per  | tr Y | [ 1
82 1559 | Atraḫasis MB Flood (Hattuša) | lines 13 | words 140 | per  | tr Y | [ 27
82 1562 | Atraḫasis MB Flood (Nippur) | lines 23 | words 183 | per  | tr Y | [ 25
82 1520 | Atraḫasis MB Flood (The Ark Tablet) | lines 60 | words 472 | per  | tr Y | [ 72
82 1561 | Atraḫasis MB Flood (Ugarit 1) | lines 22 | words 150 | per  | tr Y | [ 22
82 27122 | Atraḫasis MB Flood (Ugarit 2) | lines 13 | words 98 | per  | tr Y | [ 22
82 27124 | Atraḫasis MB Flood (Ugarit 3) | lines 14 | words 83 | per  | tr Y | [ 0
82 1557 | EA 356 (Adapa and the Southwind) | lines 71 | words 504 | per  | tr N | [ 87
82 1582 | EA 357 (Nergal and Ereškigal) | lines 81 | words 702 | per  | tr N | [ 98
82 1567 | Gilg. MB Boghazkoy 1 | lines 96 | words 384 | per  | tr Y | [ 137
82 1577 | Gilg. MB Ugarit 1 | lines 39 | words 203 | per  | tr Y | [ 9
82 1597 | HS 1885 + N 4026 (+) N 1338 (Gulkišar-epic) | lines 97 | words 508 | per  | tr Y | [ 151
82 1598 | HS 1886 (Papnigara) | lines 37 | words 193 | per  | tr Y | [ 24
82 1600 | KAR 4 | lines 191 | words 768 | per  | tr Y | [ 75
82 1606 | KBo 1, 11 (Siege of Uršu) | lines ? | words ? | per  | tr N | [ 65
```
