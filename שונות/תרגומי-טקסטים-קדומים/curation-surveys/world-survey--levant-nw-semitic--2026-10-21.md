# World survey – the Levant and Syria (Northwest Semitic: Ugaritic, Phoenician/Punic, Aramaic, Moabite/Ammonite/Edomite, epigraphic Hebrew; plus Eblaite): ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Legend: **verified** = fetched today (2026-10-21) from this session and the expected content seen; **reported** = from search results or my own knowledge, not fetched. Bible benefit and Soul benefit each rated HIGH / MED-HIGH / MEDIUM / LOW.
Downloads used for checking are under the session scratchpad `world/levant-nw-semitic/` (not in the repo). No repo file other than this one was touched.
Note: the shared web-search budget ran out near the end of this session; a few details below are therefore marked "verify" rather than checked.

---

## 0. Key findings

1. **Ugaritic is now translatable from an open, word-glossed base text.** The **Copenhagen Ugaritic Corpus (CUC)**, a Text-Fabric dataset built on KTU³ (Dietrich–Loretz–Sanmartín 2013), is on Zenodo. Its v0.2.8 (2026-07-15, **CC BY-NC 4.0**) holds **278 tablets: 7,616 tablet lines, 27,461 words**. It includes all the mythological and epic tablets except KTU 1.8–1.13, most rituals and incantations, 99 letters (KTU 2) and 35 legal texts (KTU 3). Every word comes with a machine morphological parse, a DULAT lemma and a short English gloss; a few tablets are human-reviewed (**verified**: downloaded and parsed today). It works like ORACC's lemmatisation for Akkadian, though the parse needs checking. It mislabels some words, e.g. the particle *l* as "no" in KTU 1.3 III 38, and *aqht* as "Most Obedient".
2. **The Baal Cycle (KTU 1.1–1.6; 1,372 tablet lines in CUC) is the best non-Mesopotamian candidate for the commentary's current unit, Gen 1:21.** The key passages are all in CUC and checked today:
   - *tnn* ("Tunnanu", the dragon) muzzled by Anat, beside "the twisting serpent, the tyrant with seven heads" (KTU 1.3 III 38–42);
   - "when you smote Lotan (*ltn*) the fleeing serpent (*bṯn brḥ*), finished off the twisting serpent (*bṯn ʿqltn*)" (KTU 1.5 I 1–3), which is almost word for word Isa 27:1;
   - *tnn* in the sea in the Šapšu hymn (KTU 1.6 VI);
   - *tnn* in the incantations KTU 1.82 and 1.83.

   Genesis 1:21 makes the same creature a thing God *created* (*va-yivra*), the only *bara* between 1:1 and 1:27. That is exactly the kind of "deviation from a known source" that the commentary looks for. More of the Baal Cycle bears on later blocks of Genesis:
   - **Gen 8:20–11:26**, the uncommented block: Baal's palace window (*ḥln* / *urbt*, "a rift in the clouds", KTU 1.4 VII 17–19, 25–27) ↔ *arubbot ha-shamayim* (Gen 7:11, 8:2); and the "seventy sons of Athirat" (KTU 1.4 VI 46) ↔ the 70 nations of Gen 10 and Deut 32:8.
   - **Gen 2:10**: El's abode "at the sources of the two rivers, the channels of the two deeps".
   - **Lev 19:27–28, 21:5 and Deut 14:1**: El's mourning rites for Baal – dust, sackcloth, gashed cheeks and arms (KTU 1.5 VI 14–22).
3. **A ready Hebrew translation of part of the Baal Cycle is public domain.** U. Cassuto, *האלה ענת: שירי עלילה כנעניים מתקופת האבות* (Bialik 1951; 3rd ed. 1958), is on **Project Ben-Yehuda as "נחלת הכלל"** (benyehuda.org/read/31020, **verified**, about 243,000 characters). It has the Hebrew translation, a commentary and a long chapter on biblical parallels. His essays *ספרות מקראית וספרות כנענית* are there too (/read/30817, **verified**). The readings are 1950s ones, so it is rank 5–6 material: for history and register, not as a base text. Other Hebrew translations are copyrighted:
   - Ginsberg, *כתבי אוגרית* (1936);
   - Z. & Sh. Rin, *עלילות האלים: כל שירות אוגרית* (Inbal 1996);
   - Sh. Natan-Yulzary, *עלילת אקהת* (Resling 2015).

   No modern Hebrew translation of the whole Baal Cycle with an apparatus exists. That is the gap this project would fill.
4. **A new open digital edition covers most of the Phoenician, Aramaic and Hebrew inscriptions.** **DEAPS** (Digital Editions of Aramaic and Phoenician Sources, Ohio State) has object records for **KAI 1–320 (317 numbers found)**, more than 500 TAD (Elephantine) objects, 109 Arad Hebrew ostraca and the Elephantine Ahiqar (TAD C1.1) (**verified**). Some records already carry a line-by-line edition in Hebrew script with a word-level lexicon, e.g. the Marseille Tariff (KAI 69) and Tell Fekheriye (KAI 309, 23 lines). Others, such as Mesha (KAI 181) and Sefire (KAI 222), are metadata only for now. Records are still being updated (2026-10-18). **No licence is stated**, so treat it as ©: consult it, cite it, don't commit it.
5. **Aramaic is well served.** For Elephantine there are the public-domain editions Cowley 1923, Sachau 1911 and Ungnad 1911. Cooke 1903 and Lidzbarski 1898 cover the North-Semitic inscriptions (all on archive.org in full view, **verified** via the search API). For the lexicon, CAL is the tool: curl gets only a "please do not scrape" page, but single entries opened through WebFetch work (**verified**), so look words up one at a time.
6. **New Aramaic-Hebrew lexical evidence for Gen 1:26.** The **Tell Fekheriye** bilingual statue (Aramaic half, 23 lines, c. 850–825 BCE) uses both ***dmwt*** (line 1) and ***ṣlm*** (line 12) for the same statue: the very pair of Gen 1:26 and 5:3. Its futility curses ("a hundred women shall bake in one oven and not fill it") are the closest wording to Lev 26:26 (accepted). The **Deir ʿAllā** Balaam text (c. 800 BCE) has a **list of birds** – swift, crane, eagle, stork, falcon, owl, heron, sparrow, pigeons – set in a cosmic reversal decreed by the *šdyn* gods. It bears on Num 22–24 and also on the bird names of Lev 11:13–19 and the fifth day (Levine's translation, checked on Livius, **verified**).
7. **Philo of Byblos's "Phoenician History" (in Eusebius, Praep. Ev. I.9–10)** is available as Greek in First1KGreek (Dindorf 1867, **CC BY-SA 4.0**, **verified**: I.10 = 2,847 words, I.9 = 1,783). Its cosmogony bears on Gen 1:2 – "dark windy air (*pneuma*) and murky chaos", *Baau* = *bohu*, *Mōt*. Its line of culture-inventors bears on Gen 4:17–22, and its *Elioun* "the Most High" on Gen 14:19. It is late (c. 100 CE) and euhemerised. No Hebrew translation was found.
8. **Warning: SBL's free WAW PDFs are not for us.** Some *Writings from the Ancient World* PDFs can be fetched from sbl-site.org: Pardee 2002 *Ritual and Cult at Ugarit*, Lindenberger 2003 *Ancient Aramaic and Hebrew Letters*, Nissinen 2003 *Prophets and Prophecy*. They belong to SBL's **International Cooperation Initiative**, which is restricted to readers in low-income countries (reported, from SBL's own pages). Israel is not eligible. Record them only; **do not use or store them.**
9. **The Ugaritic poetic corpus is getting a new critical edition.** **EUPT** (Göttingen, DFG long-term project since 2023) will be the future rank-1 edition: transliteration, vocalisation, German translation, commentary, collation in the Louvre (March 2026). Phase 1 is Kirta, Aqhat and the Rephaim texts. The portal is live (news to 2026-09-23, **verified**), but by its own 2024 account only one tablet had been fully published. Check it before starting any Ugaritic project. **RSTI** (Chicago, CC BY-NC-ND) is a tablet inventory, not a text corpus (**verified**).
10. **Ebla is open but hard.** The **EbDA** database (http only) gives harmonised transliterations of ARET, including ARET 5 (hymns and incantations, 26 texts), ARET 11 (royal rituals, 3 texts: the goat sent to Alini ↔ Lev 16) and ARET 13 (chancery texts with the Abarsal treaty) (**verified**). It has no translations and its licence is unclear. Eblaite is the riskiest language in this region for an LLM.
11. **Hebrew, Moabite and Phoenician inscriptions need a different product, not a "translation".** For Hebrew and Moabite the useful product is a diplomatic transcription in square script, plus a cautious vocalised reading and an apparatus. A plain Hebrew rendering is worthwhile only where the language really differs (Phoenician, Old Aramaic). See §2.0. The best of these texts for the Torah form a short "blessing and law in stone" corpus:
    - Kuntillet ʿAjrud, whose pithos already has *ybrk wyšmrk*, "may he bless you and keep you";
    - Ketef Hinnom (Num 6:24–26);
    - Khirbet el-Qom;
    - the Ekron dedication;
    - Mesad Hashavyahu (Ex 22:25–26);
    - the Gezer calendar.
12. **Forgeries and contested finds to keep out:**
    - Moussaieff ostraca, Jehoash tablet, ivory pomegranate: forgeries or not genuine;
    - Wagenfeld's 1836 "Sanchuniathon": a forgery;
    - Paraíba, Bat Creek, Los Lunas: hoaxes;
    - the Mt Ebal "curse tablet" (2022): rejected by most epigraphers;
    - the Arslan Tash amulets: authenticity doubted;
    - the Shapira Deuteronomy: lost, and a 2021 claim of authenticity is contested;
    - the Khirbet Qeiyafa ostracon: readings vary.

---

## 1. Ranked shortlist

| # | Text | Language · date (composition / oral) · earliest ms | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Baal Cycle** (KTU 1.1–1.6) | Ugaritic · tradition at least MB (storm god vs Sea at Mari c. 1770 BCE) · tablets late 13th c. BCE (scribe Ilimilku) | 1,372 tablet lines / ~6,000 words; 1.3–1.4 good, 1.1–1.2 poor, 1.5–1.6 medium | **Gen 1:2, 1:9, 1:21 (*tnn*, *ltn*)**; Gen 2:10; **7:11, 8:2** (window); **Gen 10 / Deut 32:8** (70 sons); Ex 15; Ex 25–40 (palace); Lev 19:27–28, Deut 14:1 | divine kingship, death and return of the rain, mourning, feasting | **HIGH / HIGH** | CUC (CC BY-NC 4.0, verified); KTU³ (paid); EUPT later | Good: medium LLM risk (consonantal; hapaxes), many translations to check against |
| 2 | **Short Ugaritic myths and charms**: KTU 1.23 (Šaḥar and Šalim), 1.24 (Nikkal and Yarikh), 1.114 (El's banquet), 1.100 + 1.107 (serpent charms), 1.108 (Rapiʾu), 1.82 / 1.83 (*tnn*), 1.96, 1.169, 1.161, 1.119, 1.124 | Ugaritic · LB · 13th c. tablets | ~560 lines in CUC; mostly good | **Gen 1:20–22** (birds of heaven, fish of the sea entering the gods' mouths, 1.23:62–63); **Gen 1:21** (1.83); **Gen 9:20–27** (1.114); **Deut 1:4, 3:11** (Rapiʾu in Ashtaroth and Edrei); Deut 18:11; Lev 19:31; Ex 23:19 (now rejected) | birth, marriage-price, drunkenness, snakebite, the dead kings | **HIGH / HIGH** | CUC (1.12, 1.13 missing) | Good; short pieces, a corpus |
| 3 | **Aqhat** (KTU 1.17–1.19) + **Rephaim texts** (1.20–1.22) | Ugaritic · LB · 13th c. | 489 + 97 lines; 1.19 and 1.20–22 damaged | **Gen 1:2** (*rḥp*, eagles hovering); **Gen 9:23** (the son who holds his drunk father's hand); Gen 15, 18 (childless father, divine guests); Ex 22:21; Ezek 14:14 (Danel beside Noah) | grief, revenge by a sister, the dutiful son | **MED-HIGH / HIGH** | CUC; EUPT phase 1 | Good |
| 4 | **Kirta** (KTU 1.14–1.16) | Ugaritic · LB · 13th c. | 703 lines; 1.14 good, 1.16 damaged | Gen 12:2, 15, 24, 29 (family, bride-price); **Deut 20:5–7 inverted** (the newly-wed marches); Deut 21:15–17; Gen 49 | a king who lost his family; a sick king and a rebellious son | **MED-HIGH / HIGH** | CUC; EUPT phase 1 | Good |
| 5 | **Deir ʿAllā plaster texts** (Balaam son of Beor) | "Gileadite" / Aramaic-Canaanite · c. 800 BCE (plaster) | 2 "combinations", c. 17 + 37 lines; very fragmentary | **Num 22–24**; the divine council (*šdyn*, Gen 17:1 *El Shaddai*); **Lev 11:13–19**, Gen 1:20 (bird list) | a seer weeping over a vision of cosmic disorder | **HIGH / HIGH** | no open edition: Hoftijzer & van der Kooij 1976 (©) | Hard: damage, disputed language; translate with a heavy apparatus |
| 6 | **Tell Fekheriye (Aramaic)** + **Sefire I–III** (+ Bukān, Assur ostracon) | Old Aramaic · c. 850–825 and c. 750 BCE · originals | 23 lines (complete) + about 200 lines (damaged) | **Gen 1:26, 5:3** (*ṣlm*, *dmwt*); **Gen 2:8** (*mʿdn*, "who makes lush"); **Lev 26:26**, **Deut 28:38–40**; **Deut 4:45** (*ʿdy* ↔ *ʿedot*); **Deut 23:16–17** (the fugitive returned, inverted) | treaty fear, the curse as reality | **HIGH / MEDIUM** | DEAPS (Fekheriye edition verified; Sefire metadata only); CAL; Cooke PD has no Sefire (found 1930) | Good: Old Aramaic is well resourced |
| 7 | **"Blessing in stone"**: Kuntillet ʿAjrud, Khirbet el-Qom, Ketef Hinnom I–II, Khirbet Beit Lei, Ekron dedication | Hebrew (and Philistine-Phoenician) · c. 800–600 BCE · originals | ~60 lines in all; KH and ʿAjrud partly damaged | **Num 6:24–26**; **Deut 33:2** (YHWH of Teman); **Deut 16:21** (asherah beside the altar); Deut 6:4; **Deut 7:9** (KH "keeps covenant and *ḥesed*") | popular religion, protection of the dead | **HIGH / HIGH** | Meshel 2012 (©); Barkay et al. 2004 (©); Ahituv (©) | A vocalised transcription + apparatus (§2.0) |
| 8 | **Ugaritic ritual and sacrificial texts + god-lists** (KTU 1.39, 1.40, 1.41/1.87, 1.109, 1.119, 1.148; 1.47/1.118) | Ugaritic · 13th c. | ~300 lines in CUC (1.148 missing); good | **Lev 1–7** (*šrp* / *šlmm* / *dbḥ* / *šnpt* ↔ *tenufah*); **Lev 22:7** (*ʿrb špš w ḥl mlk* ↔ "the sun sets and he is clean"); **Lev 16, 4–5** (KTU 1.40); Lev 27 / Ex 13 (vow and firstborn, 1.119); Gen 49:25 (*ilib*) | the king's calendar of offerings; collective atonement | **HIGH / MEDIUM** | CUC; Pardee 2000 RSO XII (©, paid) | Good, but technical vocabulary |
| 9 | **Punic sacrificial tariffs** (Marseille KAI 69, Carthage KAI 74–76) + ***mlk* stelae** | Punic · 4th–3rd c. BCE | 21 + ~30 lines; Marseille good | **Lev 1–7** (*kll* ↔ *kalil*; *šlm kll*; the priest's portion; skins ↔ Lev 7:8; the poor man's clause ↔ Lev 5:7, 12:8); **Lev 18:21, 20:2–5** (Molek, debated) | a temple's price list; vows of children | **HIGH / MEDIUM** | DEAPS (KAI 69 edition verified); Cooke 1903, CIS (PD) | Good; short |
| 10 | **Philo of Byblos, "Phoenician History"** (Eusebius PE I.9.20–I.10) | Greek, claiming a Phoenician source (Sanchuniathon) · c. 100 CE · medieval mss | ~3,500 words (verified count of PE I.9–10); good | **Gen 1:2** (*pneuma*, *Baau* = *bohu*, the cosmic egg / *Mōt*); **Gen 4:17–22** (inventors); Gen 6:1–4; **Gen 10:6, 15** (Chnaʿ = Canaan); Gen 14:19 (*Elioun*) | how Phoenicians told their own origins (through Greek eyes) | **HIGH / MED** | First1KGreek CC BY-SA (verified) | Easy language (Greek); hard source criticism |
| 11 | **Mesha stele** (+ Kerak fragment; Ammonite and Edomite inscriptions) | Moabite · c. 840 BCE · original (broken 1869; squeeze) | 34 lines; ~⅔ original stone | **Num 21:27–30** (Kemosh, Heshbon); **Num 32:3, 34–38** (Ataroth, Nebo, Dibon, Jahaz, Aroer); **Deut 2–3**; ***ḥerem*** (Deut 7:2, 20:16–17); 2 Kgs 3:27 | a king's piety and slaughter | **HIGH / MED-HIGH** | Cooke 1903 (PD); he.wikisource (verified); Langlois 2019 PDF (reported) | A vocalised transcription + apparatus (§2.0) |
| 12 | **Elephantine archives** (Passover letter, Temple petitions, marriage contracts, family archives) | Imperial Aramaic · 495–399 BCE · original papyri | several hundred documents; core of about 80 texts in good condition | **Ex 12, Lev 23:5–8** (Passover / Matzot, TAD A4.1); **Ex 21:10–11, Deut 24:1** (marriage, "hatred" divorce); Num 27, 36 (daughters inherit); Ex 21:2 (slaves); Deut 12 (a temple outside Jerusalem) | Judean family life abroad, quarrels, piety | **HIGH / HIGH** | Cowley 1923, Sachau 1911 (PD, verified); DEAPS (≥500 TAD objects, verified); CAL | Good; Imperial Aramaic is well resourced |
| 13 | **Ahiqar** (Elephantine, TAD C1.1) | Aramaic · composition 7th–6th c. BCE (proverbs maybe older, Syrian) · papyrus c. 475 BCE (palimpsest) | narrative + c. 100 sayings in 14 columns; damaged | Prov 23:13–14; Gen 40–41 (court tale); Tobit 1:22 (low for the Torah) | the betrayed sage, proverbs of an Aramean world | **MEDIUM / HIGH** | Cowley 1923 (PD); DEAPS record (verified); TAD (©) | Good |
| 14 | **Phoenician royal and funerary inscriptions** (Ahiram, Yehimilk, Kilamuwa, Karatepe, Tabnit, Eshmunazar II, Yehawmilk, Pyrgi) | Phoenician · c. 1000–300 BCE · originals | ~200 lines; mostly good | Gen 14:19, 22 (*ʾl qn ʾrṣ*, Karatepe); **Gen 49:10** (Ahiram: "may the sceptre of his rule be torn away"); Rephaim (Tabnit, Eshmunazar ↔ Gen 14:5, Deut 2:11); Deut 28 curses; Amos 2:9 ("root below, fruit above") | death, the sanctity of the grave, a king as "father and mother" | **MEDIUM / HIGH** | DEAPS (KAI 1–320, verified); Cooke, Lidzbarski (PD) | Good: Phoenician differs from Hebrew enough to need a real translation |
| 15 | **Hebrew letters and ostraca** (Lachish, Arad, Mesad Hashavyahu, Samaria, Siloam, Gezer, Silwan, Horvat ʿUza) | Hebrew · 10th–6th c. BCE · originals | ~250 short texts; varying | **Ex 22:25–26, Deut 24:12–15** (Mesad Hashavyahu); **Ex 23:16, 34:22** (Gezer); Num 18 (Arad "house of YHWH", tithes); Deut 18:18–22 (Lachish 3, "the prophet") | daily voices: soldiers, a reaper, a tunnel-digger | **MED-HIGH / HIGH** | DEAPS (Arad 109, verified); Cooke (PD; Siloam); Ahituv (©) | A transcription + apparatus |
| 16 | **Old Aramaic royal and funerary inscriptions** (Zakkur, Tel Dan, Hadad/Panamuwa I, Panamuwa II, Bar-Rakib, **Katumuwa**, Nerab) | Old Aramaic and Samʾalian · c. 840–650 BCE · originals | ~200 lines | **Gen 1:20–21, 2:7** (*nbš* lexical only); Deut 26:14 (feeding the dead); Num 22–24 (seers, Zakkur); Ex 20:12 (Nerab: "prolonged my days") | a soul living in a stele; a priest's good death | **MEDIUM / HIGH** | DEAPS (KAI 202, 214–226 found; editions vary); Katumuwa: Pardee 2009 (©) | Good |
| 17 | **Papyrus Amherst 63** | Aramaic in Demotic script · compositions 7th–4th c. BCE · papyrus c. 300 BCE | about 23 columns; good | Ps 20 (a near-version); Ps 75; the *marzeaḥ*; the Bethel cult (indirect for the Torah) | the liturgy of an exiled Aramean community | **MEDIUM / HIGH** | Steiner & Nims 2017 (online at Academia, blocked here); van der Toorn 2018 (paid) | Risky: the Aramaic text is itself reconstructed |
| 18 | **Ebla ritual and incantation texts** (ARET 11; ARET 5; Abarsal treaty ARET 13) | Eblaite / Sumerian · 24th c. BCE · originals | ARET 11 = 3 texts (several hundred lines); ARET 5 = 26 short texts | **Lev 16:21–22** (a goat with a silver bracelet driven to the steppe of Alini); Gen 31:44–54 / Deut (the oldest treaty form) | the oldest Semitic ritual and magic | **MED-HIGH / MEDIUM** | EbDA (verified; translit. only; licence unclear); ARET (paid) | **High risk**: logographic, poorly understood |
| 19 | **Ugaritic letters** (KTU 2) | Ugaritic · 13th–12th c. BCE | 99 letters / 1,788 lines in CUC | **Gen 33:3** (bowing "seven and seven times"); Gen 50; Deut 20:10 (*šlm*) | "to the queen my mother": family, the last days of Ugarit | **MEDIUM / MED-HIGH** | CUC | Good |

Runners-up (§2 has short entries): the Ammonite, Edomite and Philistine small corpus; the earliest alphabetic sentences (Lachish comb, Proto-Sinaitic); the Canaano-Akkadian Amarna letters from Canaan and the Hazor law fragments (both cuneiform, so they belong with the Mesopotamian folder).

---

## 2. The survey

### 2.0 Method note: what "translating" a Hebrew, Moabite or Phoenician inscription means

- **Hebrew and Moabite** inscriptions are written in a language a Hebrew reader half-understands. Writing them in square script already gives most of the "translation", and that is the trap: the reader sees biblical words and supplies biblical meanings. So the product should be:
  1. a diplomatic transcription in square script, keeping word-dividers, line breaks and restorations marked;
  2. a vocalised reconstruction in the inscription's own phonology, not Tiberian pointing passed off as ancient. For example, Moabite has no final *-m* plural (it uses *-n*) and has *ʾš* for "who", and in the north *yn* = *yayin*. The rule should be "pointed as a proposal", with alternatives listed;
  3. a short modern-Hebrew rendering only where the meaning differs from what a reader would assume (false friends: Moabite *ḥrm* for Kemosh, *ʾrʾl dwdh*, *qr* "city", *ʾšḥt* "cistern"…);
  4. the apparatus, which carries almost all the value: epigraphic doubts (the RTI images of Mesha, the Ketef Hinnom readings), and the exact Torah words.

  **Worth it?** Yes, as **one corpus** ("כתובות מימי הבית הראשון ושכנותיה"), because the Torah links are lexical and very concrete. Each text is short, so the cost per item is low. The risk lies in the readings, not the language. Ahituv's *הכתב והמכתב* (Bialik 2005, 2nd ed. 2012, verify) already does steps 1 and 4 in Hebrew, though with less of the Torah. What we add is the Torah-keyed apparatus and the echo control.
- **Phoenician and Punic** are further from Hebrew than they look:
  - grammar and vocabulary: *kn* "to be", *pʿl* "to make", *ʾš* "who", the relative *z*, the feminine *-t*, *ʾlm* as a singular "god";
  - spelling: no vowel letters at all;
  - Punic idiom.

  A real Hebrew translation is needed, with the transcription on facing lines.
- **Ugaritic** is a separate language in a cuneiform alphabet, close enough to Hebrew that *echo control* (guidelines §6.4) is the main danger. *bṯn brḥ* must be rendered `נחש בריח`, because the Ugaritic really has Isaiah's words. But *ym* is "Yam" the god, not just "sea", and *mt* is "Mot", not the common noun "death". A per-corpus `renderings.md` should fix these decisions first.

### 2.1 The Baal Cycle (KTU 1.1–1.6) — top candidate

**Ugaritic · composition: oral/poetic tradition older than the tablets.** The storm god's fight with the Sea is attested at Mari c. 1770 BCE, in a letter that names the weapons with which Adad of Aleppo smote *Têmtum*, the Sea (Durand 1993; reported). The tablets' language and formulae are LB. **Earliest witness:** six tablets copied by the scribe **Ilimilku** (colophon KTU 1.6 VI 54–58). They date to the late 13th c. BCE according to most recent work; an older view dates them to the mid-14th c. **Size:** 1,372 tablet lines and about 6,000 words in CUC (counted today: 1.1 = 118 lines, 1.2 = 132, 1.3 = 258, 1.4 = 447, 1.5 = 172, 1.6 = 245). **Preservation:** 1.3 and 1.4 are good, 1.5 and 1.6 medium, 1.1 and 1.2 poor. Perhaps half of the original cycle survives, and the order of 1.1–1.2 is debated.

- *What it is:* how Baal, the storm god and "Rider of the Clouds", becomes king:
  - Baal defeats Yam (Sea), also called Nahar (River), with two named clubs made by the craftsman god Kothar (1.2 IV);
  - his sister Anat boasts of slaying Sea's monsters (1.3 III);
  - Baal wins El's permission for a palace, built of silver and gold that is smelted by fire for seven days, with the window as a point of dispute (1.4);
  - he goes down into the throat of Mot (Death) and dies; El and Anat mourn; Anat cleaves Mot like grain and winnows him; Baal returns, and the rains with him (1.5–1.6).

  An ancient hearer heard the cycle of the rains and the kingship of the city's god, and also a hierarchy: the old father El, the young king Baal, the fierce maiden Anat, and Death who can be fed but not beaten for good.
- *Bible parallels:*
  - **Gen 1:21** (the commentary's current unit): *tnn* = `תנין`.
    - KTU 1.3 III 40: "I muzzled (*ištbm*) Tunnanu". In the same breath (III 41–42) come "I smote the twisting serpent (*bṯn ʿqltn*), the tyrant (*šlyṭ*) with seven heads". Just before (III 38–39) Anat claims to have destroyed Yam, "El's beloved", and "Nahar, the great god (*il rbm*)". Whether *rbm* echoes Gen 1:21 *gedolim* is a suggestion of mine, not established; it is a pointer for the apparatus.
    - KTU 1.6 VI 50–52: "in the sea are Arshu and Tunnanu", in a hymn to the sun-goddess.
    - KTU 1.82 and 1.83: *tnn* in incantations (see §2.2).
    - Consensus: *tnn* = *tannin* is accepted. The Bible's mythic dragon passages (Isa 27:1; 51:9; Ps 74:13–14; Job 7:12) depend on this tradition (accepted; Day 1985, *God's Conflict with the Dragon and the Sea*; Smith 1994/2009).
    - Gen 1:21 makes the *tanninim* creatures God created, and blesses them (1:22). The demythologising reading is widely accepted; the polemical intention is debated.
  - **Isa 27:1** ↔ KTU 1.5 I 1–3 (*ltn bṯn brḥ … bṯn ʿqltn … šlyṭ d šbʿt rašm*): word for word (accepted). For the Torah this shows that "Leviathan" is a living name behind *tannin*.
  - **Gen 1:2, 1:6–10**: Yam/Nahar as a person; the "deep" (*thm*, *thmtm*, "the two deeps", at El's abode, 1.4 IV 21–22) ↔ *tehom* (a cognate, accepted). The Sea is a rival defeated by a god, whereas Gen 1:9 has the waters simply "gathered".
  - **Gen 2:10**: El dwells "at the source of the two rivers, amid the channels of the two deeps" (debated as a link to Eden's rivers; Clifford 1972).
  - **Gen 7:11, 8:2**: Baal at last agrees: "let a window (*ḥln*) be opened in the house, a casement (*urbt*) inside the palace … a rift (*bdqt*) in the clouds" (1.4 VII 17–19, 25–27; verified in CUC). He then thunders. *urbt* = *arubbah* (accepted lexically). In Genesis the "windows of heaven" open to destroy, and are shut (8:2).
  - **Gen 10; Deut 32:8–9**: "the seventy sons of Athirat" (1.4 VI 46; verified) ↔ the 70 nations, and the LXX/4QDeut reading "according to the number of the sons of God" (accepted as background: Smith 2001; Day 2000).
  - **Ex 15**: the divine warrior at the sea, the mountain of inheritance (*ġr nḥlty*, 1.3 III 30 ↔ Ex 15:17 *har naḥalatkha*), and the building of a sanctuary (accepted; Cross 1973).
  - **Ex 25–40**: the palace built after the victory (debated as to form; accepted as a type-scene).
  - **Lev 19:27–28, 21:5; Deut 14:1**: El's mourning: he pours dust on his head, puts on sackcloth, cuts his skin with a stone, gashes his cheeks and chin, "ploughs his chest like a garden" (1.5 VI 14–22; verified). These are exactly the rites the Torah forbids (accepted).
  - **Deut 33:26; Ps 68:5**: "Rider of the Clouds" (*rkb ʿrpt*) (accepted).
- *Soul of the ancients:* grief and appetite, both very physical. Death's "throat" swallows "the appetite of the lion in the wasteland". The goddess's violence is a joy to her (1.3 II, wading in blood to the knees). The old god weeps on the ground. The divine family quarrels. The poem is a theology of rain as life.
- *Base text and tools:*
  - **CUC** (Zenodo concept DOI 10.5281/zenodo.10695308; v0.2.8 record 21380577, **CC BY-NC 4.0**, verified): KTU³ readings with certainty and emendation features, plus a per-word parse with DULAT lemma and gloss (`auto_parsing/0.2.7/KTU 1.x.tsv`). The project calls it "work in progress". It is built by Højgaard, Naaijer and Notarius within CACCHT (Copenhagen–Amsterdam–Polis).
  - **KTU³** (Ugarit-Verlag 2013, paid; KTU² 1995 has a scan on archive.org, whose rights are unclear, so don't use it).
  - **EUPT** (eupt.uni-goettingen.de, verified): future rank 1; the Baal Cycle is phase 2.
  - Dictionary: **DULAT³** (del Olmo Lete & Sanmartín 2015, Brill, paid; CUC's glosses come from it). Grammar: Tropper, *Ugaritische Grammatik* (2nd ed. 2012, paid); Huehnergard, *An Introduction to Ugaritic* (2012, paid).
  - Translations (rank 3, all ©): Smith & Pitard, *The Ugaritic Baal Cycle* I–II (VTSup 55, 114; 1994, 2009; vol. III on 1.5–1.6 — verify); Pardee in *COS* I (1997); Wyatt, *Religious Texts from Ugarit* (2nd ed. 2002); Smith in Parker (ed.), *Ugaritic Narrative Poetry* (WAW 9, 1997); Coogan & Smith, *Stories from Ancient Canaan* (2nd ed. 2012).
  - **Hebrew:** Cassuto 1951 (PD on Ben-Yehuda, verified; it contains V AB = KTU 1.3, VI AB and the parallel passages, with commentary and a chapter "המסורות המקבילות בישראל"); Ginsberg 1936 (©); Rin & Rin 1996 (©).
- *Feasibility and risks:*
  - The script is consonantal, so every vocalisation is a reconstruction.
  - There are many hapaxes, and Hebrew cognates often mislead.
  - Parallelism helps a great deal.
  - Damage is heavy in 1.1–1.2 and 1.5–1.6.
  - LLM risk is **medium**: the translations are many and good, so every line can be checked, as the guidelines require.
  - Licence: CUC is NC, which a non-commercial public repository may redistribute with attribution. Ask the user before committing it. KTU³ itself is ©.
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* the first non-Mesopotamian corpus. Start with 1.3 III–IV, 1.5 I and 1.6 VI for the fifth day; then 1.4 (palace and window) for Gen 8; then the rest.

### 2.2 Short Ugaritic myths, hymns and charms (a corpus)

**Ugaritic · 13th c. BCE tablets · about 560 lines (CUC counts):**

| Text | Lines | What it is |
|---|---|---|
| KTU 1.23 | 76 | Šaḥar and Šalim, the "gracious gods" |
| KTU 1.24 | 50 | the wedding of Nikkal and Yarikh |
| KTU 1.114 | 31 | El's *marzeaḥ* banquet |
| KTU 1.100 | 79 | serpent charm |
| KTU 1.107 | 54 | serpent charm |
| KTU 1.108 | 27 | Rapiʾu, king of eternity |
| KTU 1.82 | 43 | incantation (*tnn*) |
| KTU 1.83 | 17 | incantation (*tnn*) |
| KTU 1.96 | 14 | Anat's eye, an evil-eye charm (debated) |
| KTU 1.169 | 22 | against the sorcerers who torment a youth |
| KTU 1.161 | 34 | the royal funerary liturgy |
| KTU 1.119 | 36 | prayer to Baal under siege |
| KTU 1.124 | 16 | Ditanu consulted for a sick child |

Most of these are well preserved. **KTU 1.12** ("Baal and the devourers") and **1.13** are not in CUC.

- *What they are:* liturgies and charms in mythic language:
  - El begets the dawn and dusk gods on two women by the sea (1.23);
  - a moon-god's bride-price (1.24);
  - El gets drunk, wallows in his excrement and is carried home by two sons (1.114);
  - the sun-goddess goes from god to god to find a cure for snakebite, until Horon cuts the tamarisk (1.100);
  - the dead kings are summoned (1.161).
- *Bible parallels:*
  - **Gen 1:20–22**: the newborn gods have such appetite that "a lip to earth, a lip to heaven, and there enter their mouths the **birds of heaven and the fish in the sea**" (*ʿṣr šmm w dg b ym*, 1.23:61–63; verified). This is the fifth-day pair in the same order and wording, here as *food* for gods. In Genesis they are *blessed*. This is my observation, not a standard parallel: typological and lexical.
  - **Gen 1:21**: *tnn* in 1.83 (bound by a god) and 1.82.
  - **Gen 9:20–27**: the drunken father helped home by his sons (1.114:17–19), with Aqhat's list of a son's duties (§2.3) (accepted as a motif; Hendel and others).
  - **Deut 1:4; 3:1, 10–11; Josh 12:4**: "Rapiʾu, king of eternity … the god who dwells in **Ashtaroth**, the god who judges in **Edrei**" (1.108:1–3; verified). This is the residence of Og, "of the remnant of the Rephaim" (accepted, and striking).
  - Gen 14:5, 15:20 and Deut 2:11, 20: the Rephaim (1.161; 1.20–22).
  - **Deut 18:11, Lev 19:31, 20:27**: consulting the dead (1.124, debated).
  - Lev 27 / Ex 13: KTU 1.119 promises Baal "a firstborn (*bkr*)" and a vow (*ndr*) when the enemy is at the gates (accepted; compare 2 Kgs 3:27).
  - **Ex 23:19 / 34:26** ("kid in its mother's milk") from 1.23:14: **rejected**. The supposed *gd* "kid" is "coriander" (Ratner & Zuckerman, *HUCA* 57, 1986). Include the line to show why; CUC already glosses it so (verified).
  - Num 21:4–9 (the bronze serpent) ↔ the snake charms: typological.
- *Soul of the ancients:* the most intimate of the Ugaritic texts:
  - the joke and shame of the drunk god;
  - a mother horse's plea for her bitten foal;
  - the bridal haggling;
  - what was said when kings died: "go down into the earth … Šapšu, shine!"
- *Base text and tools:* as for §2.1. Pardee, *Les textes paramythologiques* (RSO IV, 1988) and *Les textes rituels* (RSO XII, 2000) are the editions (©, paid). For KTU 1.82, 1.96, 1.169 and the incantations generally: Pardee in *COS* I; del Olmo Lete, *Incantations and Anti-Witchcraft Texts from Ugarit* (2014, ©).
- *Feasibility:* good; the pieces are short and mostly well preserved. 1.82, 1.96 and 1.169 are lexically hard.
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* translate with the Baal Cycle as one "Ugarit I" project; 1.23 and 1.83 go into the fifth-day apparatus right away.

### 2.3 Aqhat (KTU 1.17–1.19) and the Rephaim texts (KTU 1.20–1.22)

**Ugaritic · Ilimilku's tablets, 13th c. · 489 lines (1.17 = 189, 1.18 = 76, 1.19 = 224) + 97 lines (1.20–22).** 1.17 is fair; 1.18 is broken; 1.19 is long and fairly good; the Rephaim fragments are poor.

- *What it is:* the righteous chief Danel has no son. He fasts and sleeps in the temple, and El grants him Aqhat. Kothar the craftsman visits and is fed, and gives the boy a divine bow. Anat covets the bow and has Aqhat killed by her henchman, who is sent among the eagles. The land withers. Danel finds his son's remains in an eagle's belly, buries him and curses the places. His daughter Pughat sets out, disguised, to avenge him. In the Rephaim texts the dead heroes come to a feast.
- *Bible parallels:*
  - **Gen 1:2** (*merachefet*): Anat "hovers (*trḫp*) among the eagles" (1.18 IV 20–21, 31–32; verified), the same verb as Gen 1:2 and Deut 32:11 (accepted lexically).
  - **Gen 9:23**: the ideal son's duties (1.17 I 26–34, repeated four times): to set up the stela of his father's god, to "take his hand when he is drunk, carry him when he is sated with wine", and to plaster his roof (accepted as a parallel to Noah's sons).
  - **Gen 15:2–4, 18:1–15, 25:21, 30:1**: the childless patriarch, the divine guests fed by the hero's wife (debated; strong as a type-scene).
  - **Ex 22:21–23, Deut 24:17**: Danel "judges the case of the widow, tries the cause of the orphan" at the gate (accepted motif).
  - **Ezek 14:14, 20**: "Noah, Danel and Job": Danel the righteous man beside Noah, so it touches the flood unit (accepted that the Ugaritic Danel is the figure meant; debated how directly).
  - Gen 4:10–12 (blood and a cursed ground) ↔ Danel's curses of the land and the drought after the murder (typological).
- *Soul of the ancients:* a father's grief and a daughter's courage. The goddess who cannot understand a mortal's refusal of immortality: "what does a man receive at his end?" is Aqhat's answer (1.17 VI). This is the Ugaritic counterpart of Gilgameš's question.
- *Base text and tools:* CUC; **EUPT phase 1** (Kirta, Aqhat, Rephaim; the Louvre collation of 1.17 and 1.19 was done in March 2026, verified from the EUPT news page). Translations: Parker in WAW 9 (1997), Wyatt 2002, Pardee in *COS* I. Margalit, *The Ugaritic Poem of AQHT* (BZAW 182, 1989, ©). **Hebrew:** Natan-Yulzary, *עלילת אקהת* (Resling 2015, ©; transcription, Hebrew translation, commentary and index of biblical passages; reported via NLI).
- *Feasibility:* good. *Benefit:* Bible **MED-HIGH** / Soul **HIGH**. *Recommendation:* "Ugarit II", ideally after EUPT publishes its phase-1 edition (check first).

### 2.4 Kirta (KTU 1.14–1.16)

**Ugaritic · 13th c. · 703 lines (1.14 = 300, 1.15 = 136, 1.16 = 267).** 1.14 is good; 1.15 and 1.16 have gaps.

- *What it is:* King Kirta loses wife and children one after another and weeps himself to sleep. El appears in a dream and tells him to march on Udum to win the princess Ḥurriya as his bride. He vows silver and gold to Athirat on the way, and then forgets the vow. He has eight children. He falls deathly ill; "shall a son of El die?" asks his son. El himself fashions a healer. Then the eldest son demands the throne and is cursed.
- *Bible parallels:*
  - Gen 12:2, 15, 17, 24 (a line promised by God; the bride from far away; bride-price and its refusal: Kirta refuses Pabil's gifts ↔ Gen 14:22–23, debated);
  - **Deut 20:5–7 and 24:5**: the muster in which "the newly-wed goes, he leads his wife to another" (1.14 II 47–50, IV 26–28). This is the very case Deuteronomy exempts from war (accepted lexical-motif parallel; the Torah's reversal is the point);
  - Deut 23:22–24 (a vow not kept);
  - Gen 49 / Deut 21:15–17 (the firstborn and the curse);
  - Job (the righteous sufferer; debated).
- *Soul:* the king as mourner and patient. The sacred kingship whose sickness withers the fields. The ugly scene of succession.
- *Base text, tools, translations:* as for §2.3 (EUPT phase 1; Greenstein in WAW 9; Pardee in *COS* I). No separate Hebrew book was found; Rin 1996 contains it (©).
- *Benefit:* Bible **MED-HIGH** / Soul **HIGH**. *Recommendation:* with Aqhat ("Ugarit II").

### 2.5 The Deir ʿAllā plaster texts ("the Book of Balaam son of Beor")

**Language disputed (Old Aramaic, Canaanite, or a local "Gileadite"; Hackett 1984; Huehnergard 1991) · c. 800 BCE (stratum IX; ink on plaster) · two "combinations" of fragments: I c. 17 lines; II c. 37 lines, many unintelligible.** The fragments were joined in 1976 and later re-joined (Hoftijzer & van der Kooij 1976; Caquot & Lemaire 1977; Hackett 1980/84). Preservation is poor.

- *What it is:* the rubric reads "the warnings of the book of Balaam son of Beor, a seer of the gods". The gods come to him at night, and he rises weeping. He tells his people what the *šdyn* gods decided in council: "sew up, close the heavens with thick cloud", darkness and not light. Then comes the world turned upside down: the swift and crane insult the eagle; the stork, the falcon's young and the owl; the heron's chicks, the sparrow; pigeons and birds; the rod drives cattle where there is none; the deaf hear from afar (Levine's translation, checked on Livius, verified). Combination II speaks of a dead child, of Sheol and of a king.
- *Bible parallels:*
  - **Num 22–24**: the same seer, with the same patronym, the same title (*ḥzh ʾlhn* ↔ Num 24:4, 16 *maḥazeh Shaddai*), night revelations (Num 22:8–20) and the "rising in the morning" (accepted).
  - The *šdyn* ↔ *Shaddai* (Gen 17:1, Num 24:4, 16) and the divine council (Gen 1:26 "let us", Deut 32:8; accepted).
  - **Lev 11:13–19 / Deut 14:12–18 and Gen 1:20–22**: a bird list in which "stork" and "heron" are the words of Lev 11:19 (*ḥasidah*, *anafah*). The Aramaic word-forms are per the editions (verify against Hoftijzer–van der Kooij). This is a new angle for the fifth day: an ancient bird taxonomy outside the Bible.
  - Isa 13 and 34 (the desolation catalogue).
- *Soul:* the earliest prophetic book outside the Bible, by a local hero. A seer who weeps at what he sees.
- *Base text and tools:* no open critical edition.
  - Hoftijzer & van der Kooij, *Aramaic Texts from Deir ʿAlla* (Brill 1976), and *The Balaam Text from Deir ʿAlla Re-evaluated* (1991; archive.org has a borrow-only scan, so it may not be used).
  - Translations: Levine (*COS* II; AB *Numbers 21–36*, 2000); Seow in Nissinen, WAW 12 (an SBL ICI PDF, restricted, do not use); Blum's re-arrangement (2008, verify).
  - DEAPS search found no "Deir" record (verified); its coverage may come later. The CAL corpus includes Deir ʿAllā (reported).
  - **Hebrew:** Ahituv, *הכתב והמכתב*, includes it (©, reported).
- *Feasibility and risks:* high. The fragments are tiny, the joins are uncertain and the language is debated. An honest edition must show its doubt line by line, which is exactly what the guidelines want. The text is short.
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* translate as a small project with a maximal apparatus; extract the bird list for the fifth day now.

### 2.6 Tell Fekheriye (Aramaic half) and Sefire I–III (with the other Old Aramaic treaty texts)

**Fekheriye:** Old Aramaic and Akkadian on one statue of Hadad-yithʿi, king of Guzan · c. 850–825 BCE · Aramaic 23 lines, complete. **Sefire:** three stelae, a treaty between Bar-Gaʾyah of KTK and Matiʿel of Arpad · c. 750 BCE · about 200 lines in all, damaged (KAI 222–224).

- *What they are:*
  - **Fekheriye**: a votive statue to Hadad. Hadad is "the canal-master (*gwgl*) of heaven and earth, who rains abundance and gives pasture and watering to all the lands", and "who makes all the lands lush" (*mʿdn*). The king asks for long life, and then curses whoever erases his name: "may he sow and not reap; may a hundred ewes suckle a lamb and it not be sated; may a hundred women bake bread in an oven and not fill it".
  - **Sefire**: a treaty (*ʿdy*) sworn before the gods, with simile curses ("as this wax is burned by fire…"; "as this calf is cut…"), futility curses ("seven mares suckle a foal and it is not sated"), clauses on fugitives, and a demand to report any plotter.
- *Bible parallels:*
  - **Gen 1:26 and 5:3**: Fekheriye calls the same statue *dmwt* (Aram. 1, 15) and *ṣlm* (12, 16). Genesis uses both words for humanity "in the image" (accepted; Millard & Bordreuil 1982; Garr 2003).
  - **Gen 2:8, 10** (*ʿeden*): *mʿdn* "who makes lush" (Millard, "The etymology of Eden", *VT* 34, 1984: accepted as possible).
  - **Lev 26:26** ("ten women shall bake your bread in one oven… you shall eat and not be satisfied"); **Deut 28:38–40**; Hos 4:10; Mic 6:14–15 (accepted; Hillers 1964; Quick 2017).
  - **Deut 4:45, 6:17, 6:20** (*ha-ʿedot*) ↔ *ʿdy(ʾ)* (accepted lexically; Tadmor; Weinfeld).
  - **Deut 13:7–12** (the obligation to inform) ↔ Sefire III 1–7, 9–14 (accepted).
  - **Deut 23:16–17**: Sefire III 4–7 requires fugitives to be **handed back**. The Torah forbids handing back an escaped slave, the same case decided the other way (accepted; Hebrew commentators on Deut 23 note it).
  - Deut 29:19 ("the oath in this book") ↔ "the words of this inscription".
- *Soul:* how a people feared oath-breaking; the curse as a physical force; a king's prayer for "long days".
- *Base text and tools:*
  - **DEAPS** KAI 309 (Fekheriye; Aramaic edition by Moore, 23 lines, verified) and KAI 222–224 (records exist; no edition displayed today, verified).
  - **CAL** for every word (verified per entry).
  - Editions: Abou-Assaf, Bordreuil & Millard, *La statue de Tell Fekherye* (1982, ©); Fitzmyer, *The Aramaic Inscriptions of Sefire* (rev. 1995, ©).
  - Cooke 1903 predates both finds.
  - The Akkadian half is within the folder's existing competence (ORACC/CDLI, reported).
- *Feasibility:* good; Old Aramaic is close to Biblical Aramaic and well documented.
- *Benefit:* Bible **HIGH** / Soul **MEDIUM**. *Recommendation:* translate together as "Aramaic treaties and curses", parallel to the EST project in `חוקים-ובריתות/`. Put Fekheriye's *ṣlm/dmwt* lines into the Gen 1:26 apparatus.

### 2.7 "Blessing in stone": Kuntillet ʿAjrud, Khirbet el-Qom, Ketef Hinnom, Khirbet Beit Lei, the Ekron dedication

**Hebrew (Ekron: Philistine-Phoenician) · c. 800 BCE (ʿAjrud), 8th c. (el-Qom), c. 600 BCE (Ketef Hinnom; a minority dates it Hellenistic), c. 700 or 6th c. (Beit Lei), early 7th c. (Ekron) · originals · about 60 lines in all.**

- *What they are:*
  - **ʿAjrud** (a way-station in northern Sinai): pithoi with blessings "I have blessed you by YHWH of Samaria / of Teman and his asherah; may he bless you and keep you and be with my lord"; wall-plaster poetry of a theophany ("when El shines forth… the mountains melt… Baal on the day of war… the name of El"); drawings; abecedaries.
  - **el-Qom**: a tomb blessing for Uriyahu, "from his enemies, by his asherah, he saved him", with an engraved hand.
  - **Ketef Hinnom**: two silver amulets from a burial cave. They carry a version of Num 6:24–26 and "the great one who keeps the covenant and the *ḥesed*", and they ward off "the evil".
  - **Beit Lei**: graffiti in a cave: "YHWH is the god of all the earth".
  - **Ekron**: the temple built by Achish (*ʾkyš*) son of Padi for his lady, with a blessing to "bless him, keep him, lengthen his days and bless his land".
- *Bible parallels:*
  - **Num 6:24–26** (Ketef Hinnom; ʿAjrud's *ybrk wyšmrk*; Ekron's formula);
  - **Deut 33:2**, Judg 5:4–5, Hab 3:3 ("YHWH from Teman");
  - **Deut 16:21** (the asherah beside the altar), Deut 7:5, 12:3;
  - **Deut 6:4** (the plural YHWHs of Samaria and Teman as background to "YHWH is one", debated);
  - **Deut 7:9**;
  - Ex 34:6–7 (debated restoration on the amulets).

  All accepted except as marked. Key studies: Meshel (ed.), *Kuntillet ʿAjrud (Horvat Teman)* (IES 2012, ©); Barkay, Vaughn, Lundberg & Zuckerman, *BASOR* 334 (2004); Smoak, *The Priestly Blessing in Inscription and Scripture* (2016).
- *Soul:* popular religion in the words of travellers and the dead: protection, blessing, and a goddess or cult-object at YHWH's side.
- *Base text and tools:*
  - No open edition found. The 2012 IES report is ©; a Harvard page lists it, but it answered 403 to curl today.
  - DEAPS may have records (not checked by name).
  - Hebrew: Ahituv, *הכתב והמכתב* (©); the IES report has Hebrew chapters (reported).
- *Feasibility:* a transcription with apparatus (§2.0); the readings are the risk (especially Ketef Hinnom).
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* part of the Hebrew-inscriptions corpus (§2.15), placed first in it.

### 2.8 Ugaritic ritual and sacrificial texts and god-lists

**Ugaritic · 13th c. · about 100 tablets (Pardee 2000 edits about 80).** In CUC: KTU 1.39 (22 lines), 1.40 (43), 1.41 (55), 1.109 (37), 1.119 (36), the pantheon list 1.47 (34) and others. **KTU 1.148 is missing.**

- *What they are:*
  - the king's monthly ritual calendar: which god gets a ram, a cow, a bird;
  - "burnt offering" (*šrp*) and "peace offering" (*šlmm*);
  - "the sun sets and the king is clean" (*ʿrb špš w ḥl mlk*);
  - a national atonement ritual for men and women, with a donkey and a refrain listing the possible sins: anger, impatience… (1.40);
  - god-lists in a fixed order, starting "El of the father (*ilib*), El, Dagan, Baal of Ṣapon…" (1.47; verified).
- *Bible parallels:*
  - **Lev 1–7** terms: *šrp w šlmm* ↔ *ʿolah u-shelamim*; *dbḥ* ↔ *zevaḥ*; *šnpt* ↔ *tenufah* (Lev 7:30, 34; accepted); *ndr* (vows; Lev 7:16, 27).
  - **Lev 22:7**, 11:24–28, 15 (accepted; Levine 1963, Pardee).
  - **Lev 4–5, 16:21** (confession of all the people's sins; debated as to form).
  - **Gen 49:25, Ex 3:6, 15:2** (*ʾel ʾavikha*) ↔ *ilib* "god of the father" (debated: "god of the father" or "ancestral spirit").
  - Lev 23 (calendar; typological).
- *Soul:* what a temple day looked like; that sin could be named and carried away in a list. Medium as a window: the texts are lists.
- *Base text and tools:* CUC. Pardee, *Les textes rituels* (RSO XII, 2000, ©) is the standard edition. Pardee, *Ritual and Cult at Ugarit* (WAW 10, 2002) is an SBL ICI PDF, restricted: do not use; buy or borrow.
- *Feasibility:* good, but the vocabulary is technical; it needs the DULAT glosses, which CUC supplies.
- *Benefit:* Bible **HIGH** (for Lev 1–16) / Soul **MEDIUM**. *Recommendation:* a selection of about 10 texts (1.40, 1.41/1.87, 1.39, 1.109, 1.119, 1.47, 1.161, 1.124) as "Ugarit III: temple and atonement", keyed to Leviticus.

### 2.9 Punic sacrificial tariffs and the *mlk* stelae

**Punic · 4th–3rd c. BCE (paleography) · originals.** The Marseille Tariff (KAI 69) has 21 lines and is good (DEAPS notes, verified). The Carthage tariffs KAI 74–76 are fragmentary. There are thousands of formulaic tophet stelae (KAI 61, 79, 98–99, 103–110…).

- *What they are:* the price list posted in the temple of Baal-Ṣaphon. For each animal (ox, calf, ram, goat, lamb, kid, bird) and for each kind of offering (*kll* "whole", *ṣwʿt*, *šlm kll*) it gives the priests' silver fee, their share of the meat, and who gets the skin. "Every offering that a man poor in cattle or in birds brings – the priests shall have nothing of it". Fines are set for priests who overcharge. The tophet stelae record "what X vowed to Baal Hammon (and Tinnit): a *mlk* of a man / of a lamb… because he heard his voice; may he bless him".
- *Bible parallels:*
  - **Lev 1–7** (the closest administrative parallel to the priestly portions: *kalil* Lev 6:15–16, Deut 33:10; the priest's hide Lev 7:8; breast and thigh Lev 7:31–34; birds Lev 1:14–17);
  - **Lev 5:7–13, 12:8, 14:21–22** (the poor man's offering) (accepted; Levine 1974, Milgrom AB *Leviticus*);
  - **Lev 18:21, 20:2–5, Deut 12:31, 18:10**: *mlk* as a sacrifice term (Eissfeldt 1935). Whether it names a god "Molek" or a kind of offering is **debated**, as is the reality of child sacrifice (now widely accepted from the osteology, but contested).
- *Soul:* the economy of piety; parents' vows; how a child's death was given a sacred meaning (handle with care).
- *Base text and tools:*
  - DEAPS KAI 69 (verified: edition after Donner–Röllig, revised by Rogers 2026; word lexicon).
  - CIS I 165 and Cooke 1903 nos. 42–43 (PD; archive.org verified).
  - Dictionary: Krahmalkov, *Phoenician-Punic Dictionary* (2000, ©); Lidzbarski's glossary (PD).
- *Feasibility:* good; short.
- *Benefit:* Bible **HIGH** / Soul **MEDIUM**. *Recommendation:* add to the Leviticus-keyed ritual corpus with §2.8 ("sacrificial law outside Israel").

### 2.10 Philo of Byblos, "Phoenician History" (Eusebius, *Praeparatio Evangelica* I.9.20–I.10.55; IV.16.11)

**Greek · Philo c. 70–160 CE, claiming to translate Sanchuniathon of Berytus, "before the Trojan war" · preserved only in Eusebius (4th c.), medieval manuscripts (earliest 10th c., verify) · about 3,500 words (PE I.10 = 2,847 Greek words, counted today from First1KGreek).** Good.

- *What it is:* a Phoenician theogony and culture-history as Philo tells it:
  - in the beginning were dark windy air and murky chaos; the wind (*pneuma*) "loved its own principles", and from the mixture came *Mōt*, "mud or watery putrefaction", like an egg;
  - from the wind *Kolpia* and his wife *Baau* (= Night) came Aiōn and Prōtogonos;
  - a line of inventors follows: of fire, huts, hunting and fishing, iron (*Chousōr* = Ugaritic Kothar), salt, ships;
  - then *Elioun* "the Most High"; Ouranos and Gē; El-Kronos's wars, his circumcision, his sacrifice of his only son;
  - and *Chnaʿ*, "who was later called Phoinix" (= Canaan).
- *Bible parallels:*
  - **Gen 1:2** (*ruaḥ* over the deep; ***Baau*** ↔ ***bohu***, accepted as a borrowing; *Mōt* and the cosmic egg);
  - **Gen 4:17–22** (Cain's line of inventors: the closest outside list, accepted as a type; Baumgarten 1981);
  - **Gen 6:1–4** (giants named after mountains);
  - **Gen 10:6, 15** (Canaan as an eponym);
  - **Gen 14:18–22** (*Elioun* ↔ *ʿElyon*, accepted);
  - **Gen 17** (El's circumcision);
  - **Gen 22** (Kronos sacrifices his only son, "Ieoud", debated).

  Studies: Attridge & Oden, *Philo of Byblos: The Phoenician History* (CBQMS 9, 1981; reissued 2024, ©); Baumgarten, *The Phoenician History of Philo of Byblos* (1981, ©); Ugarit has confirmed many of the names (El, Baal, Mot, Dagon, Kothar), so some old tradition is real (accepted). There is heavy Hellenistic, euhemerist reworking, and Eusebius quotes it to attack paganism. Flag this in the apparatus.
- *Soul:* how the Phoenicians (or their Greek-writing heir) explained the gods as deified benefactors. A window, but a distorted one.
- *Base text and tools:* **First1KGreek** `tlg2018.tlg001.1st1K-grc1` (Dindorf, Teubner 1867), **CC BY-SA 4.0** (verified, via raw.githubusercontent.com). Mras (GCS 43, 1954/1982) is the critical edition (©). Jacoby *FGrH* 790 (©). Gifford 1903 (Greek + English, PD; on archive.org, not checked today). Greek is well resourced (LSJ in Perseus/Logeion).
- *Existing Hebrew translation:* none found (search, verified negative).
- *Feasibility:* easy language. The difficulty is the source criticism: which names are Phoenician, which Greek.
- *Benefit:* Bible **HIGH** (Gen 1:2, 4, 10) / Soul **MEDIUM**. *Recommendation:* translate (short, open, no Hebrew version exists); pair it with Berossus (already in `sources/Berossus`) as "native histories in Greek".

### 2.11 The Mesha stele (with the Kerak fragment and the Ammonite, Edomite and Philistine inscriptions)

**Moabite · c. 840 BCE · the original (Louvre), broken in 1869 and reassembled with the help of a squeeze · 34 lines.** About ⅔ of the surface is original; the rest is from the squeeze and restoration.

- *What it is:* Mesha's first-person memorial for his "high place" to Kemosh. Omri oppressed Moab "because Kemosh was angry with his land". Mesha took Ataroth, which "the men of Gad had dwelt in from of old", and Nebo, killing all "7,000 men, boys, women, girls and maidens, for I had devoted them (*hḥrmth*) to Ashtar-Kemosh". He dragged "the vessels of YHWH" before Kemosh, and built cities and cisterns. Line 31 has a contested reading: "house of David" (Lemaire 1994; Langlois 2019, with RTI: "the most probable") or "Balak" (Finkelstein, Naʾaman & Römer 2019).
- *Bible parallels:*
  - **Num 21:27–30** (Kemosh, Heshbon, Dibon), **Num 32:3, 34–38** (Ataroth, Atroth, Nebo, Dibon, Aroer, Baal-meon, Kiriathaim), **Deut 2–3**, Josh 13: accepted;
  - ***ḥerem*** (Deut 2:34, 3:6, 7:2, 20:16–17; Num 21:2–3): the closest outside use (accepted; Stern 1991);
  - the theology of the angry god of the land (Deut 28; Judg 2:14) (accepted);
  - 2 Kgs 3 (the same war, told from the other side).
- *Soul:* royal piety that is also slaughter; a god who is angry and then relents; pride in cisterns.
- *Base text and tools:*
  - Cooke 1903 no. 1 (PD, archive.org verified); Compston 1919 (PD, archive.org verified);
  - **he.wikisource "מצבת מישע"** (verified: square-script transcription with line numbers, a vocalised version and short Hebrew glosses; source not stated, probably Compston 1919);
  - DEAPS KAI 181 (record, no edition yet; verified);
  - Langlois, *Semitica* 61 (2019), PDF on michaellanglois.fr (host reachable; PDF not fetched; reported).
- **Small companions:**
  - Ammonite: the Amman Citadel inscription (8 lines, 9th c.); the Tell Siran bottle (8 lines, complete, c. 600: Amminadab's vineyard and garden; "may he rejoice for many days").
  - Edomite: the Horvat ʿUza ostracon ("I bless you by Qos"); Qitmit.
  - Philistine: Ekron (§2.7); the Gath "ʾlwt / wlt" sherd.

  These bear on Gen 36 and Deut 2 (low to medium).
- *Feasibility:* §2.0 product. *Benefit:* Bible **HIGH** / Soul **MED-HIGH**. *Recommendation:* the opening item of the inscriptions corpus.

### 2.12 The Elephantine archives (Judean colony on the Nile)

**Imperial Aramaic · 495–399 BCE · original papyri and ostraca · several hundred documents.** The core, about 80, is well preserved: the Mibtahiah, Ananiah (Anani) and Jedaniah archives (TAD A4, B2, B3).

- *What they are:*
  - the **Passover letter** (TAD A4.1, 419 BCE: keep the days 14–21 Nisan, no leaven, be pure, no work);
  - the **Temple petitions** (A4.7–4.9, 407 BCE: the YHW temple destroyed by Egyptian priests; a plea to Bagohi of Judah and the sons of Sanballat; the memo permitting meal offering and incense but not burnt offering);
  - **marriage contracts** (B2.6, B3.3, B3.8) with a wife's right to divorce ("I hate my husband") and the bride's dowry list;
  - adoption and manumission; property disputes; lists of contributors to YHW, Anat-Bethel and Eshem-Bethel;
  - ostraca ("send me word when you will do the Passover").
- *Bible parallels:*
  - **Ex 12:15–20, Lev 23:5–8, Num 28:16–25, Deut 16:1–8** (the date and the laws of Passover/Matzot as practised in 419: accepted);
  - **Ex 21:10–11, Deut 21:14, 22:13, 24:1–4** (*śnʾ* "hate" as the divorce formula; the wife's rights);
  - **Num 27:1–11, 36** (daughters inheriting);
  - **Deut 12** (sacrifice at a temple outside Jerusalem; why burnt offerings were refused in 407);
  - Ex 21:2–6 (slaves, the mark on the slave);
  - Ezra–Nehemiah (Sanballat, Johanan).
- *Soul:* the best "everyday" window in the region: a woman married three times, a dowry list down to the mirror and sandals, a family feud, a community praying for its burnt temple.
- *Base text and tools:*
  - **Cowley, *Aramaic Papyri of the Fifth Century B.C.* (1923)**, **Sachau 1911** and **Ungnad 1911** (all PD, archive.org full view, verified); Sayce & Cowley 1906 (PD, on archive.org).
  - **DEAPS**: more than 500 TAD objects; Moore's *New Aramaic Papyri from Elephantine in Berlin* (Brill 2022, OA CC BY-NC-ND on OAPEN, reported) feeds it.
  - **CAL** (lexicon, per entry).
  - Porten & Yardeni, *TAD* A–D (1986–1999, ©): Hebrew and English translations (verify that all volumes are bilingual). Porten (ed.), *The Elephantine Papyri in English* (1996/2011, ©).
  - Grammar: Muraoka & Porten, *A Grammar of Egyptian Aramaic* (©).
- *Existing Hebrew:* TAD (©). Popular translations of the Passover letter exist online (reported).
- *Feasibility:* good (Imperial Aramaic; formulaic legal language). The papyri are partly damaged.
- *Benefit:* Bible **HIGH** / Soul **HIGH**. *Recommendation:* a selection of about 30 key documents as "Judeans of Elephantine", keyed to Exodus–Deuteronomy law.

### 2.13 The Words of Ahiqar (Elephantine version, TAD C1.1)

**Aramaic · composition probably 7th–6th c. BCE (the narrative set at the courts of Sennacherib and Esarhaddon; the sayings possibly older and Syrian) · palimpsest papyrus c. 475 BCE (over an Egyptian customs account) · 14 columns: narrative (c. 5 cols.) + about 100 sayings.** Damaged, with the order of the columns debated. Later versions (Syriac, Arabic, Armenian, Slavonic) are rewritten.

- *What it is:* the wise scribe Ahiqar adopts his nephew Nadin, is betrayed and condemned, and is saved by the executioner he once spared. Then the sayings: "do not spare your son the rod…"; "a king's word is like a flame"; fables of the bramble and the pomegranate, the leopard and the goat; "who will stand up before the lion?"
- *Bible parallels:*
  - **Prov 23:13–14** (almost verbatim), Prov 25:15, 27:3;
  - Gen 40–41 and Dan (the court-tale type);
  - Tob 1:21–22, 14:10 (Ahiqar as Tobit's nephew).

  Accepted for Proverbs; low for the Torah.
- *Soul:* **high**: the ethic of speech and silence, of family betrayal, of the powerful.
- *Base text and tools:*
  - Cowley 1923 (PD; contains the Ahiqar sayings);
  - Sachau 1911 (PD; first edition, with plates);
  - DEAPS (verified: "TAD C.1.01… [ספר] מלי אחיקר", plus the Syriac Sachau 336);
  - CAL;
  - Lindenberger, *The Aramaic Proverbs of Ahiqar* (1983, ©); Weigl, *Die aramäischen Achikar-Sprüche aus Elephantine* (BZAW 399, 2010, ©); Porten & Yardeni TAD C1.1 (©).
- *Feasibility:* good. *Benefit:* Bible **MEDIUM** / Soul **HIGH**. *Recommendation:* translate (the Aramaic wisdom counterpart of the folder's Mesopotamian wisdom series).

### 2.14 Phoenician royal and funerary inscriptions

**Phoenician · c. 1000 BCE (Ahiram) to c. 300 BCE (Eshmunazar II, Yehawmilk), plus Pyrgi (Etruria, c. 500 BCE) · originals.** About 200 lines in all:

| Text | KAI | Size | Content |
|---|---|---|---|
| Ahiram | 1 | 2 lines | |
| Yehimilk | 4 | 7 lines | |
| Kilamuwa | 24 | 16 lines | "I was a father to some, a mother to others" |
| Karatepe | 26 | about 60 lines, three copies | Azatiwada; Phoenician–Luwian bilingual |
| Yehawmilk | 10 | 15 lines | |
| Tabnit | 13 | 8 lines | |
| Eshmunazar II | 14 | 22 lines, complete | |
| Pyrgi gold tablets | 277 | 11 lines | Phoenician–Etruscan |

- *What they are:*
  - Kilamuwa: "before me the Muškabim lived like dogs… I was father to one, mother to another".
  - Karatepe: "I made peace with every king… in my days a woman could walk alone with her spindle".
  - Eshmunazar II (died young, "an orphan, son of a widow"): "whoever opens this resting-place… may they have no resting place with the Rephaim, no burial, no son or seed after them… no root below or fruit above".
  - Ahiram: "may the sceptre of his rule be torn away, the throne of his kingship overturned".
- *Bible parallels:*
  - **Gen 14:19, 22**: *ʾl qn ʾrṣ* "El, creator of the earth" (Karatepe A III 18; accepted);
  - **Gen 49:10** (*shevet* … *meḥoqeq*) ↔ Ahiram's *ḥṭr mšpṭh* (accepted lexical);
  - Rephaim (Gen 14:5, 15:20; Deut 2:11, 20; 3:11, 13) ↔ Tabnit and Eshmunazar *rpʾm* (accepted);
  - Deut 28 and 29 curse forms; Amos 2:9 (accepted);
  - Gen 10:15–19 (Sidon; the Phoenician self-view);
  - Num 6:24–26 (blessing formulas).
- *Soul:* **high**: kingship as care, the fear of a disturbed grave, an orphan king's anxiety, the "peace" of the spindle.
- *Base text and tools:*
  - DEAPS (all KAI numbers 1–320 found as records, verified; editions displayed for some);
  - Cooke 1903 and Lidzbarski, *Handbuch* 1898 (PD, verified on archive.org; they lack Karatepe 1946, Kilamuwa 1902 is in Lidzbarski's *Ephemeris*, Pyrgi 1964);
  - KAI⁵ (2002, ©);
  - Gibson, *Textbook of Syrian Semitic Inscriptions* III (1982, ©);
  - grammar: Friedrich–Röllig–Amadasi Guzzo (1999, ©); dictionary: Krahmalkov 2000 (©).
- *Feasibility:* good; Phoenician needs care (§2.0). *Benefit:* Bible **MEDIUM** / Soul **HIGH**. *Recommendation:* a Phoenician corpus, second tier after the Torah-heavy items.

### 2.15 Hebrew letters and ostraca

**Hebrew · 10th–6th c. BCE · originals:**

| Text | Date | Size |
|---|---|---|
| Gezer calendar | 10th c. | 7 lines |
| Samaria ostraca | c. 780s | ~100 short dockets |
| Siloam tunnel inscription | c. 700 | 6 lines |
| Silwan tomb | c. 700 | 3 lines |
| Mesad Hashavyahu | c. 630 | 14 lines |
| Arad ostraca | 9th–6th c. | about 107 Hebrew ostraca; Eliashib archive c. 600 |
| Horvat ʿUza | | |
| Lachish letters | 589/588 | 21 ostraca, about 12 legible |

- *What they are:*
  - the agricultural months (Gezer);
  - the tunnellers meeting "pick against pick" (Siloam);
  - a reaper's plea to the governor to get back his confiscated garment (Mesad Hashavyahu);
  - the quartermaster's orders to give wine and bread to the Kittim (Arad); "the house of YHWH" (Arad 18);
  - an officer under Babylonian attack: "we are watching for the signals of Lachish… for we cannot see Azekah"; "the prophet"; "the words of the officials weaken the hands" (Lachish).
- *Bible parallels:*
  - **Ex 22:25–26, Deut 24:12–15, Amos 2:8** (Mesad Hashavyahu; accepted);
  - **Ex 23:16, 34:22, Lev 23** (Gezer's agricultural year; accepted);
  - Num 18, Deut 14 (Arad and temple supplies; debated);
  - **Deut 18:18–22** (Lachish 3 and 16; accepted as background);
  - Jer 34:7 (Lachish 4).
- *Soul:* very high: the common voice of a kingdom.
- *Base text and tools:*
  - **DEAPS** (Arad: 109 objects, verified; others not checked by name);
  - Cooke 1903 (PD) for Siloam and the Gezer-era materials (it predates Lachish, Arad and Mesad);
  - Dobbs-Allsopp et al., *Hebrew Inscriptions* (2005, ©); Renz & Röllig, *HAE* (©);
  - **Hebrew**: Ahituv, *הכתב והמכתב* (©) and his 1992 *אסופת כתובות עבריות* (©); Tur-Sinai, *תעודות לכיש* (1940, ©). Lindenberger's WAW 14 is ICI-restricted.
- *Feasibility:* §2.0; easy language, hard readings. *Benefit:* Bible **MED-HIGH** / Soul **HIGH**. *Recommendation:* one "Hebrew inscriptions" corpus with §2.7 and §2.11 (about 400 lines in all).

### 2.16 Old Aramaic royal and funerary inscriptions (Zakkur, Tel Dan, Hadad, Panamuwa, Bar-Rakib, Katumuwa, Nerab)

**Old Aramaic and Samʾalian · c. 840–650 BCE · originals.** About 200 lines in all:

| Text | KAI | Date | Size |
|---|---|---|---|
| Zakkur of Hamath | 202 | c. 785 BCE | about 45 lines |
| Tel Dan | | c. 840–800 BCE | 13 broken lines |
| Hadad (Panamuwa I) | 214 | | 34 lines |
| Panamuwa II | 215 | | 23 lines |
| Bar-Rakib | 216 | | 20 lines |
| Katumuwa | | 735 BCE | 13 lines, complete |
| Nerab | 225–226 | 7th c. | 14 + 10 lines |

- *What they are:*
  - Zakkur besieged: "I lifted my hands to Baalshamayn and he answered me through seers (*ḥzyn*) and diviners: do not fear";
  - Tel Dan: "I killed … king of Israel … of the house of David";
  - Panamuwa I: whoever succeeds him should say "may the soul (*nbš*) of Panamuwa eat with you and drink with you, O Hadad";
  - Katumuwa: "a ram for my soul (*nbš*) that is in this stele";
  - Si-gabbar the priest of Nerab: "because of my righteousness before him, he gave me a good name and lengthened my days; on the day I died my mouth was not closed from words".
- *Bible parallels:*
  - Num 22–24 and Deut 18 (Zakkur's seers);
  - **Deut 26:14** ("I have not given of it to the dead");
  - Ex 20:12 (length of days);
  - **Gen 1:20–21, 2:7** (*nefesh ḥayyah*): Katumuwa's *nbš* is a dead person's self living in a stone. It is a lexical comparandum only, and it shows what *nefesh* could not mean in Genesis (Suriano, *JAOS* 134, 2014: accepted for the meaning in Samʾal; the link to Genesis is mine and typological);
  - 2 Kgs 8–10 (Tel Dan; low for the Torah).
- *Soul:* **high**: the clearest Iron Age statements on the soul after death and on a good name.
- *Base text and tools:* DEAPS (KAI 202, 214, 225, 226 records found; editions vary); CAL; Cooke (PD for Hadad, Panamuwa, Bar-Rakib, Nerab); Pardee, *BASOR* 356 (2009) for Katumuwa (©); Tropper, *Die Inschriften von Zincirli* (1993, ©).
- *Benefit:* Bible **MEDIUM** / Soul **HIGH**. *Recommendation:* an "Aramaic kings and souls" set, after §2.6.

### 2.17 Papyrus Amherst 63

**Aramaic written in Demotic script · compositions 7th–4th c. BCE (some arguably from Arameans moved from the Assyrian west, via Rash/Bethel) · papyrus c. 300 BCE (Egypt) · about 23 columns.** Well preserved, but the script hides the Aramaic.

- *What it is:* a liturgical anthology of an Aramean community in Egypt. It has the New Year festival, hymns to Horus, Nanay and El, and a near-version of **Psalm 20** ("may Horus answer us in our troubles…"; YHW-like divine names). It also has a love dialogue and the tale of two brothers, Ashurbanipal and Šamaš-šum-ukin.
- *Bible parallels:* Ps 20 (accepted: Nims & Steiner, *JAOS* 103, 1983); Ps 75; the *marzeaḥ*. For the Torah the link is indirect (Bethel cult; Deut 33:2 debated).
- *Soul:* a diaspora's prayers and love poetry.
- *Base text and tools:* Steiner & Nims, "The Aramaic Text in Demotic Script: Text, Translation, and Notes" (2017, online on Academia.edu, which is blocked from here; reported); van der Toorn, *Papyrus Amherst 63* (AOAT 448, 2018, paid; with a translation appendix in *Becoming Diaspora Jews*, Yale 2019); a critical edition by T. Holm (announced; verify). Steiner's 1990s lecture paper on the YU repository (6 pp., fetched, verified) is only an overview.
- *Feasibility and risks:* **high**. The Aramaic is reconstructed from Demotic signs, and the editors differ widely.
- *Benefit:* Bible **MEDIUM** / Soul **HIGH**. *Recommendation:* defer until Holm's edition; translate only Ps 20 and the New Year texts, for the apparatus.

### 2.18 Ebla: royal rituals, incantations, the Abarsal treaty (ARET 5, 11, 13)

**Eblaite (the oldest written Semitic language after Old Akkadian) with Sumerian logograms · c. 2400–2300 BCE · original tablets from Palace G.**

| Volume | Content | Size |
|---|---|---|
| ARET 11 | Fronzaroli, *Testi rituali della regalità* (1993; EbDA lists it as 1998, verify) | 3 texts, each a few hundred lines |
| ARET 5 | Edzard 1984, *Hymnen, Beschwörungen* | 26 texts |
| ARET 13 | Fronzaroli 2003: chancery texts, the Abarsal treaty | 21 texts |
| ARET 16 | the king and his officials | 30 texts |

- *What they are:* the ritual of the royal couple's marriage and enthronement. A journey to the mausoleum of the ancestors at Binash. Before the king and queen enter their new house, "a goat with a silver bracelet on its neck" is driven out to the steppe of Alini. Incantations against snakes and scorpions. A treaty with its oaths.
- *Bible parallels:*
  - **Lev 16:10, 21–22** (Azazel's goat: accepted as the oldest known elimination-goat; Zatelli, *VT* 48, 1998);
  - Gen 31:44–54 and the treaty tradition (typological);
  - the deities Kamiš (= Kemosh), Rašap and Dagan (background to Num 21:29).
- *Soul:* the oldest Semitic court ritual: kingship as marriage, the ancestors, the fear of impurity.
- *Base text and tools:*
  - **EbDA** (http://ebda.cnr.it, verified: ARET volumes with harmonised transliterations, word and sign indexes; no translations; licence not stated);
  - ARET printed volumes (Italian; paid, Harrassowitz from 2018);
  - **ELISIR** Eblaite lexicon (Zenodo 17051644, CC BY 4.0, 2025: a small linked-data lexicon of about 15 KB, so limited);
  - Krebernik, *Die Beschwörungen aus Fara und Ebla* (1984, ©);
  - Catagnoti, *La grammatica della lingua di Ebla* (2012, ©).
- *Feasibility and risks:* **high**. The texts are heavily logographic, with disputed readings and almost no translations to check against. An LLM translation would be guesswork beyond the passages Fronzaroli and Zatelli translated.
- *Benefit:* Bible **MED-HIGH** (Lev 16 only) / Soul **MEDIUM**. *Recommendation:* translate only the ARET 11 goat passages, from Fronzaroli's edition, as an excerpt in the Lev 16 apparatus; not a full project.

### 2.19 Ugaritic letters (KTU 2) and legal texts (KTU 3)

**Ugaritic · 13th–early 12th c. BCE · CUC: 99 letters (1,788 lines) and 35 legal texts (584 lines).** Varying preservation.

- *What they are:* "To the queen, my mother, say: thus says the king, your son: at the feet of my mother I fall seven times and seven times… may the gods guard you". News of grain and ships, enemies on the sea; the last letters of the kingdom; family quarrels; sales and adoptions.
- *Bible parallels:* **Gen 33:3** ("bowed to the ground seven times"; the formula is well known from Ugarit and Amarna: accepted); Gen 43:27–28 (greeting formulas); Gen 23 (sale formulas; typological).
- *Soul:* **MED-HIGH**: family tenderness at court, the fear of the end.
- *Base text:* CUC (some letters human-reviewed: KTU 2.10–2.16, 2.38); Pardee in *COS* III (2002, ©); Hawley & Pardee's letters volume (verify). *Benefit:* Bible **MEDIUM** / Soul **MED-HIGH**. *Recommendation:* a selection of about 20 letters, after the myths.

### 2.20 Shorter entries (runners-up)

- **Earliest alphabetic sentences:**
  - the Lachish ivory comb (c. 1700 BCE: "may this tusk root out the lice of the hair and the beard"; Vainstub et al., *JJAR* 2, 2022, reported);
  - Proto-Sinaitic (Serabit el-Khadim, "to the Lady", *lbʿlt*);
  - Wadi el-Ḥol;
  - the ʿIzbet Ṣarṭah abecedary.

  Soul MEDIUM (charming, the birth of the alphabet); Bible LOW. Too short alone; a page in an introduction.
- **Canaano-Akkadian Amarna letters from Canaan** (EA 147: Abimilki's hymn to Pharaoh ↔ Ps 104; EA 252: Labʾayu's ant proverb ↔ Prov 6:6, 30:25; EA 285–290: Abdi-Ḫeba of Jerusalem) and **cuneiform from Canaan** (the Hazor law fragments ↔ Ex 21; Horowitz, Oshima & Sanders, *Cuneiform in Canaan*, 2006/2018, ©). These are Akkadian, so they belong to the Mesopotamian folder's competence. Soul HIGH; Bible MEDIUM. **Cross-reference to the Mesopotamian list.**

---

## 3. Also considered

- **Tel Dan stele**: famous ("house of David"), but 13 broken lines and nothing for the Torah. Fold it into §2.16.
- **Gezer calendar, Siloam, Silwan, Samaria ostraca**: fold them into §2.15; none is big enough alone.
- **Khirbet Qeiyafa ostracon** (10th c.): readings range from a social-justice text (Galil) to a list of names. Too uncertain to translate; one note.
- **Mt Ebal "curse tablet"** (announced 2022; *Heritage Science* 2023, verify): letters not visible to most epigraphers. **Exclude**; mention as a cautionary case.
- **Arslan Tash amulets** (incantations against night demons, ↔ Ps 91): authenticity doubted since Teixidor & Amiet 1983. Pardee 1998 leaves it open; a 2024 Salamanca thesis (Corral Varela) defends them (reported). Exclude until settled.
- **Forgeries:** the Moussaieff "widow's plea" and "three shekels" ostraca; the Jehoash tablet; the ivory pomegranate "belonging to the house of YHWH"; the James ossuary (late anyway). **Hoaxes:** the Paraíba "Phoenician" inscription (1872); the Bat Creek stone; the Los Lunas "Decalogue"; **Wagenfeld's 1836 "Sanchuniathon"** (a forged Greek text). Do not use.
- **Shapira's Deuteronomy strips** (1883): lost. Dershowitz's 2021 claim of authenticity is contested. Record only.
- **Hurrian texts from Ugarit** (incl. the Hurrian hymn h.6 to Nikkal with musical notation): Hurrian is poorly understood; too risky. Belongs with an Anatolian or Hurrian survey.
- **Luwian half of Karatepe and the Syro-Hittite hieroglyphic inscriptions** (Carchemish, Hama): Anatolian agent's region; the Phoenician half is in §2.14.
- **Ugarit's Akkadian texts** (the flood fragment RS 22.421, the Ballad of Early Rulers, Šimâ milka, juridical texts), **Emar**, **Alalakh (Idrimi)**: cuneiform, so within the Mesopotamian folder. The Ugarit and Emar versions are already partly covered there.
- **Ugaritic administrative texts (KTU 4)** and **abecedaries**; **Cypro-Minoan** at Ugarit (undeciphered); **Byblos pseudo-hieroglyphic** (undeciphered).
- **Ebla administrative texts** (thousands) and the **bilingual lexical lists**: tools, not literature.
- **Late Aramaic** (Palmyrene, Nabataean, Hatran: 1st c. BCE–3rd c. CE): too late for this user, with little oral tradition. **Qumran Aramaic** (Genesis Apocryphon, Enoch, Levi), **Targums**, **incantation bowls**: belong to a Second Temple or late antiquity survey. The Genesis Apocryphon is very relevant to Gen 6–15 but outside this region's date range.
- **Achaemenid Aramaic beyond Elephantine** (Arshama letters, Bisitun Aramaic, Samaria papyri from Wadi Daliyeh, about 2,000 Idumean ostraca): administrative; low for both purposes except the Bisitun version (Persian survey).
- **The Uruk incantation in Aramaic written in cuneiform**: cuneiform; for the Mesopotamian folder.
- **Neo-Punic and Latin-script Punic** (the Punic speeches in Plautus's *Poenulus*, 2nd c. BCE): a vocalised Punic is fun, but too short and late.
- **Ugaritic medical (hippiatric) texts** (KTU 1.71, 1.72, 1.85: about 100 lines in CUC) and **omen texts** (1.103: 59 lines; 1.78 eclipse): soul MEDIUM; maybe a small appendix to §2.2. A 2026 open article on the earliest veterinary texts is on Zenodo (23219468, reported).

---

## 4. Access notes (tested 2026-10-21 from this session)

**Note:** curl must be called with `--cacert /root/.ccr/ca-bundle.crt`, or most hosts fail with error 000 (unable to get local issuer certificate).

| Host | Result | Notes |
|---|---|---|
| `zenodo.org` | 200, API works | CUC zip downloaded (v0.2.8, 5 MB); API `size` max 25 unauthenticated |
| `eupt.uni-goettingen.de` | 200 | SPA; content in `/assets/*.js` chunks; corpus list and news (to 2026-09-23) read |
| `gitlab.gwdg.de` | 200 | EUPT TextAPI repo: only XSLT/CSS assets so far |
| `ochre.lib.uchicago.edu/RSTI/` | 200 | inventory tables; CC BY-NC-ND 4.0 |
| `deaps.osu.edu` | 200 | search `/text_objects?search[name]=…&per_page=48&page=n`; records `/text_objects/<id>`; no licence shown |
| `cal.huc.edu` | 200 | **curl gets a "do not scrape" page** for every URL; **WebFetch of single entries works** (`oneentry.php?lemma=…`); dumps on request to the editor |
| `ebda.cnr.it` | **http 200**, https 000 | tablet catalogue by ARET volume; word, sign and value indexes |
| `benyehuda.org` | 200 | Cassuto texts (PD) |
| `he.wikisource.org` | 200 | the API needs a User-Agent header and throttles quickly; WebFetch works |
| `raw.githubusercontent.com` | 200 | First1KGreek file fetched; **api.github.com and github.com for non-attached repos: 403 by session policy** |
| `archive.org` | 200 | advancedsearch API; PD Cooke, Lidzbarski, Cowley, Sachau, Ungnad, CIS, Compston verified as non-restricted; Cassuto Eng., Ginsberg 1946, Hoftijzer 1991, the Ras Shamra books 1935–1950 are **lending-only** (don't use) |
| `www.persee.fr` | 200 | *Syria* (Virolleaud's editions, free to read; © not expired) |
| `michaellanglois.fr`, `www.livius.org`, `www.attalus.org`, `www.bsw.org`, `www.jstor.org`, `edoc.hu-berlin.de`, `library.oapen.org`, `zincirli.uchicago.edu`, `www.lockwoodonlinejournals.com`, `www.daat.ac.il`, `www.otzar.org`, `intertextual.bible`, `brill.com`, `www.mohrsiebeck.com` | 200 | |
| `www.sbl-site.org` | 403 to curl; WebFetch gets PDFs | **ICI PDFs: restricted to eligible countries; do not use** |
| `oracc.museum.upenn.edu` | timed out today (25 s) | the Mesopotamian sessions use it; may be transient |
| `www.inscriptionsofisrael.com`, `dulat.uv.es` | 502 at CONNECT (policy or upstream) | |
| `www.academia.edu`, `babel.hathitrust.org`, `www.cambridge.org`, `www.tandfonline.com`, `www.journals.uchicago.edu`, `gallica.bnf.fr`, `hebrewbooks.org`, `www.nli.org.il`, `www.hamichlol.org.il`, `www.biblicalstudies.org.uk` | 403 | |
| `elephantine.smb.museum` | 503 (http) / 000 (https) | |
| `scholarlypublications.universiteitleiden.nl`, `www.israelantiquities.org`, `www.imj.org.il`, `www.ugaritic.net`, `semitica.org`, `www.wsrp.usc.edu` | 000 | not reached; some may not exist |

**Hosts a future session needs on its allowlist:** `zenodo.org`, `eupt.uni-goettingen.de`, `deaps.osu.edu`, `cal.huc.edu`, `ebda.cnr.it`, `benyehuda.org`, `he.wikisource.org`, `raw.githubusercontent.com`, `archive.org`, `ochre.lib.uchicago.edu`, `michaellanglois.fr`, `www.livius.org`, `www.persee.fr`, `library.oapen.org`. `domains.txt` already has `archive.org`, `library.oapen.org`, `www.sefaria.org` and `oracc.museum.upenn.edu`.

**Licence summary:**

| Source | Licence | Use |
|---|---|---|
| CUC | CC BY-NC 4.0 (v0.1.7 was CC BY 4.0) | may be committed with attribution if the user accepts NC |
| First1KGreek | CC BY-SA 4.0 | |
| Cassuto, Cooke, Lidzbarski, Cowley, Sachau, Ungnad, CIS, Compston | PD | |
| RSTI | CC BY-NC-ND | do not commit |
| DEAPS, EbDA, CAL, EUPT | not stated | consult only |
| KTU³, DULAT, KAI⁵, TAD, ARET | © | |

---

## 5. Sources consulted

- CUC (Copenhagen Ugaritic Corpus): https://zenodo.org/records/21380577 (v0.2.8); concept DOI https://doi.org/10.5281/zenodo.10695308; first release https://zenodo.org/records/10695309
- EUPT: https://eupt.uni-goettingen.de/ ; Dönicke, Steinberger, Zeterberg & Kröll, "A First Look at the Ugaritic Poetic Text Corpus", TLT 2024: https://aclanthology.org/2024.tlt-1.3.pdf ; https://gitlab.gwdg.de/subugoe/eupt/eupt-textapi
- RSTI: https://ochre.lib.uchicago.edu/RSTI/ ; https://voices.uchicago.edu/rsti/
- Ugarit Texts Database (CSV, CC BY 4.0): https://zenodo.org/records/12820382
- DEAPS: https://deaps.osu.edu/about ; https://deaps.osu.edu/text_objects/11509 (KAI 69); /11749 (KAI 309); /11621 (KAI 181); /11662 (KAI 222)
- CAL: https://cal.huc.edu/ (entry via WebFetch)
- EbDA: http://ebda.cnr.it/ ; http://ebda.cnr.it/tablet/list ; ELISIR https://zenodo.org/records/17051644
- Cassuto on Project Ben-Yehuda: https://benyehuda.org/read/31020 ; https://benyehuda.org/read/30817
- Hebrew Ugaritic translations: https://he.wikipedia.org/wiki/שירה_אוגריתית ; Natan-Yulzary, NLI: https://www.nli.org.il/en/books/NNL_ALEPH990038279970205171/NLI
- Mesha: https://he.wikisource.org/wiki/מצבת_מישע ; Langlois 2019: https://michaellanglois.fr/medias/langlois-2019-the-kings-the-city-and-the-house-of-david-on-the-mesha-stele-semitica-61-p--23-47.pdf ; https://www.college-de-france.fr/en/news/new-reading-of-the-mesha-stele-could-have-far-reaching-consequences-for-biblical-history
- Deir ʿAllā: https://www.livius.org/sources/content/deir-alla-inscription/ ; https://en.wikipedia.org/wiki/Deir_Alla_inscription
- Philo of Byblos: https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/master/data/tlg2018/tlg001/tlg2018.tlg001.1st1K-grc1.xml ; https://en.wikipedia.org/wiki/Philo_of_Byblos
- Amherst 63: https://repository.yu.edu/handle/20.500.12202/7126 ; https://en.wikipedia.org/wiki/Papyrus_Amherst_63 ; https://paleojudaica.blogspot.com/2017/03/steiner-edition-of-papyrus-amherst-63.html
- Kuntillet ʿAjrud: https://whitelevy.fas.harvard.edu/publications/kuntillet-ajrud-horvat-teman-iron-age-ii-religious-site-judah-sinai-border
- Ketef Hinnom: https://cojs.org/strata-a-good-look/ ; Biblica 88 (2007) https://www.bsw.org/biblica/vol-88-2007/the-jehoiachin-code-in-scripture-s-priestly-benediction/72/article-p237.html
- Katumuwa: https://en.wikipedia.org/wiki/Kuttamuwa_stele ; https://www.lockwoodonlinejournals.com/index.php/jaos/article/view/1734
- Punic tariffs: https://en.wikipedia.org/wiki/Marseille_Tariff ; https://www.attalus.org/docs/other/inscr_254.html
- Fekheriye: https://sefarad.revistas.csic.es/index.php/sefarad/article/download/968/1142/1641 ; https://library.biblicalarchaeology.org/article/eden/
- Elephantine: https://library.oapen.org/handle/20.500.12657/75559 (Moore, OA) ; archive.org items `aramaicpapyrioff00ahikuoft`, `aramischepapyr02sachuoft`, `aramischepapyr00ungnuoft`
- PD North-Semitic: archive.org `textbookofnorths00cookuoft`, `handbuchdernords00lidzuoft`, `CorpusInscriptionumSemiticarumI1`, `inscriptiononste00compuoft`
- Lachish comb: https://campaign.huji.ac.il/node/3136083
- Arslan Tash: https://en.wikipedia.org/wiki/Arslan_Tash_amulets ; https://gredos.usal.es/handle/10366/160333
- SBL ICI terms: https://www.sbl-site.org/community/international-cooperation-initiative/online-book-repository/ (search snippets; the page returned 403)
- openDANES resource list: https://opendanes.org/nav/DANES-resources.html
