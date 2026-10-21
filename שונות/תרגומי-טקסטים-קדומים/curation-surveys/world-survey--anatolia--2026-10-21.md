# World survey – Ancient Anatolia and its neighbours: ancient texts for Hebrew translation

Prepared 2026-10-21 for `שונות/תרגומי-טקסטים-קדומים/`. Part of the world survey (one file per region).
Region: Hittite (Old, Middle and New Hittite), Hurrian (in Ḫattuša and Mittani), Hattic, Palaic, Luwian (cuneiform and hieroglyphic, Bronze and Iron Age), the first-millennium "minor" Anatolian languages (Lydian, Lycian, Carian, Sidetic, Pisidian), Phrygian, and Urartian.
Legend: **verified** = fetched today (2026-10-21) and the expected content seen; **reported** = from search results or my own knowledge, not fetched. Bible benefit and Soul benefit are each rated HIGH / MED-HIGH / MEDIUM / LOW.
CTH = *Catalogue des Textes Hittites* (Laroche, continued online by the Hethitologie-Portal Mainz). OH / MH / NH = Old (c. 1650–1500 BCE), Middle (c. 1500–1350) and New (c. 1350–1180) Hittite; OS / MS / NS = the same periods for the **script** of a manuscript. A text can be an OH composition that survives only in NS copies; I give both dates.
Downloads and working files for this survey are in the session scratchpad: `/tmp/claude-0/-home-user-perush/009325a3-391a-55eb-9c0e-32e1e254e6c6/scratchpad/world/anatolia/` (TLHdig zip in `tlhdig_dl/`, extracted XML in `tlhdig_x/`, per-CTH counts in `cthcounts.tsv`, scripts in `scripts/`).
**Limitation:** the shared web-search budget ran out part-way through the session. Everything after that point comes from direct fetches of known hosts plus my own knowledge, marked "reported" (and "verify" where I am unsure of a detail).

---

## 0. Key findings

1. **The big access fact: TLHdig Beta 0.3 is an open, complete digital corpus of Hittite cuneiform** (verified). Zenodo DOI 10.5281/zenodo.20328284, published 2026-05-21, licensed **CC BY 4.0**, a 74 MB zip of **23,937 XML files**. It holds transliterations of essentially every published tablet and fragment from the Hittite archives (Ḫattuša and other sites), up to May 2026. The files are organised by CTH number and carry:
   - line numbers, language tags per line (Hit / Akk / Hur / Luw / Hat / Pal / Sum),
   - Unicode cuneiform,
   - per-word morphological candidate analyses with **German glosses**.

   **Every key manuscript I checked is in it** (verified, see §4): the Laws (KBo 6.2, 6.3), the Anitta text, the Apology, the Instructions for Temple Personnel (KUB 13.4), the Plague Prayers, Illuyanka, Telipinu, the Kumarbi tablet, Ullikummi, Ašḫella, Pulisa, Papanikri, the Song of Release (KBo 32), Appu, Elkunirša, Kantuzili and the Šattiwaza treaty.

   **Caveat (TLHdig's own words):** it is "neither a dictionary, nor a critical text edition". It is per manuscript, so a project must build its own composite from duplicates, and its "epigraphical and philological quality … is uneven". It has **no translations**.
2. **The Hethitologie-Portal Mainz (HPM) was offline today** (verified). Its critical editions with German translations, its CTH catalogue, the Konkordanz and the CHiL Laws edition are all affected. The maintenance page says HPM and all its sub-sites are offline because of the PHP vulnerability in CERT-EU advisory 2026-018. The **new main address is `hethport.net`**; `hethiter.net` redirects there. The old `hethport.uni-wuerzburg.de` and the DARIAH mirror `smaw.de.dariah.eu` also fail. **eDiAna** (LMU Munich, the dictionary of the minor Anatolian languages) is down for the same reason. The outage is temporary; a future session should re-test.
3. **Open dictionaries:**
   - **Chicago Hittite Dictionary:** the volumes L–N, P and Š (with fascicles) are free PDFs on `isac-assets.s3.amazonaws.com` (verified: Š 8 MB, P 3.8 MB). As with CAD, consult it per word and never bulk-extract it.
   - TLHdig's German glosses are the second open lexical tool.
   - HW² and Kloekhorst's EDHIL are paid.
   - Hittite is the **best-resourced ancient Anatolian language by far**. An LLM can translate it with care: risk MEDIUM, higher in rituals.
   - **Hurrian, Hattic and Palaic are poorly understood.** Translate them only through a bilingual or a published translation.
4. **The single best Bible-plus-soul candidates** are, in this order:
   - **Muršili II's Plague Prayers** (+ Kantuzili and Arnuwanda): 2 Sam 21 (Malamat 1955), 2 Sam 24, Ex 20:5, Lam 5:7, Ps 22 / 90, Job 31.
   - **The Hittite Laws**: Ex 21–23, Lev 18 and 20, Deut 21:1–9, 22:23–27, 25:5–10, Gen 38. They fit the existing `חוקים-ובריתות/` corpus directly.
   - **The Instructions for Temple Personnel**: Num 18 and the Levites' guard duty (Milgrom), Lev 22.
   - **The elimination rituals of Ašḫella, Uḫḫamuwa, Pulisa and Ambazzi**: Lev 16 (Azazel), Lev 14:4–7, 1 Sam 6, Zech 5.
   - **The Kumarbi cycle** (Kingship in Heaven, Ullikummi, Ḫedammu).
   - **The Old Anatolian myths** (Illuyanka, Telipinu).
   - **The Song of Release** (Lev 25 *deror* ↔ Jer 34; its parables).
5. **For the current commentary work (Gen 1:21, the *tanninim*):**
   - **Ḫedammu** (CTH 348) is a voracious sea serpent, son of Kumarbi and the Sea's daughter: a *begotten* sea monster inside a divine plot. **Illuyanka** (CTH 321) is the serpent the storm-god kills (in version 2, at sea).
   - Both are direct, if typological, comparanda. The Ugaritic Litan/Tunnan remain closer in wording (that is the Levant agent's region).
   - For **Gen 8:20–11:26**, Anatolia gives the Table of Nations names: Meshech = Mušku (Phrygians), Tubal = Tabal, Togarmah = Tegarama, Elishah = Alašiya, Lud = Lydia, Heth. It gives Ararat = Urartu (Gen 8:4). And Ullikummi, growing up to heaven, is a typological Babel.
6. **Several Hittite-archive texts are in Akkadian**, the folder's existing competence:
   - the treaties with Šattiwaza (CTH 51–52), Šunaššura (CTH 41) and Ramesses II (CTH 91);
   - the bilingual Testament (CTH 6) and Annals (CTH 4) of Ḫattušili I.

   They sit naturally next to the Esarhaddon Succession Treaty already translated, which matters for the Deuteronomy–covenant debate (Hittite vs Neo-Assyrian model). Weidner 1923 (*Boghazköi-Studien* 8, the Akkadian treaties) is public domain and on archive.org (verified).
7. **Public-domain older editions are on archive.org** (verified, full view; useful as rank-5 checks only):
   - Hrozný 1922, *Code hittite* (the Laws).
   - Zimmern & Friedrich 1922, *Hethitische Gesetze* (AO 23/2).
   - Friedrich 1925, *Aus dem hethitischen Schrifttum*.
   - Hrozný 1919, BoSt 3.
   - KBo 1–6, the cuneiform hand copies (1916–1923).
   - The 1930 *Kleinasiatische Forschungen* 1, which contains **Götze's "Die Pestgebete des Muršiliš"** (OCR verified).
8. **Existing Hebrew translations are few:**
   - **Itamar Singer, *החתים ותרבותם* (Mossad Bialik, Biblical Encyclopaedia Library, 2009; 2nd ed. 2011)** (reported, NLI record). It is the first Hebrew anthology, with a selection of historical texts, treaties, instructions, laws, rituals, festivals, prayers and myths.
   - **E. Neufeld, *The Hittite Laws, translated into English and Hebrew with commentary* (London 1951)** (reported).

   No full Hebrew translation of any major Hittite text with an apparatus was found, so a new translation adds a great deal.
9. **Hieroglyphic Luwian:** ACLT (the Annotated Corpus of Luwian Texts, Yakubovich et al.) is live **over plain HTTP only** (`http://web-corpora.net/LuwianCorpus/search/`, verified; HTTPS is reset by the proxy). It covers the Iron Age HLuw corpus (CHLI) and the cuneiform Luwian of StBoT 30, with glossaries. Its licence is not stated, and it asks not to be cited directly.
10. **Urartian:** eCUT (ORACC, CC BY-SA 3.0) gives the whole Urartian corpus with English translations (reported). ORACC was unreachable today (time-outs, then a TLS error).
11. **Hoaxes and pitfalls:**
    - **"Beyköy 2"**, the "Luwian" inscription published in 2017 from James Mellaart's papers, is widely judged a Mellaart forgery.
    - Zangger's "Luwian civilisation" thesis is not mainstream.
    - "Luwian" decipherments of the Phaistos disc are fringe.
    - Mellaart's Dorak treasure is a known fabrication.
12. **Surprises:**
    - A new Anatolian language, "**Kalašmaic**", was identified in 2023 in a cult text from Boğazköy (reported).
    - The **Türkmen-Karahöyük** HLuw inscription (published 2020) records Great King Hartapu's conquest of Phrygia (= Mušku/Meshech).
    - The Arsuz and Aleppo inscriptions of the kings of **Palistin/Walastin** (Taita) bear on the Philistine question.
    - **SBL now hosts several WAW volumes as full PDFs on its own server** (verified for Hoffner's *Letters from the Hittite Kingdom*, 468 pp.). They seem to belong to SBL's International Cooperation Initiative repository, which is meant for readers in lower-income countries. Treat them as reference only, and the lead should decide whether to use them at all.

---

## 1. Ranked shortlist

Line counts marked "TLHdig" are **manuscript lines summed over all duplicates**, computed today from the TLHdig 0.3 XML. They overstate the composite length, often by a factor of 2–3. "Composite" figures are my estimates (reported).

| # | Text | Language · date (composition / oral) · earliest ms | Size · condition | Bible focus (verses) | Soul focus | Bible / Soul benefit | Base text (open?) | Feasibility |
|---|---|---|---|---|---|---|---|---|
| 1 | **Prayers of Muršili II** (Plague Prayers CTH 378.I–IV, 379; hymn-prayers CTH 376–377; prayer for Gaššuliyawiya CTH 380) + **Kantuzili** (CTH 373) + **Arnuwanda & Ašmunikal** (CTH 375) | Hittite · NH (c. 1320–1300; Kantuzili and Arnuwanda MH c. 1400) · **contemporary** NS/MS tablets | TLHdig: 378 = 776 ms lines (15 mss), 375 = 512, 376 = 462, 373 = 68; composite ≈ 600–700 lines · GOOD for 378.II and 373 | 2 Sam 21:1–14; 2 Sam 24; Ex 20:5 / Deut 5:9; Lam 5:7; Ezek 18:2; Ps 22:10–11; Ps 90; Job 31; Ps 74 / 79 (Kaška destruction); 1 Kgs 8 | Confession, theodicy, "life is bound up with death", the king as advocate before the gods (prayer as a legal plea) | **MED-HIGH / HIGH** | TLHdig CC BY 4.0 (verified); HPM ed. + German (offline); Götze 1930 PD (verified) | HIGH |
| 2 | **Hittite Laws** (CTH 291–292) | Hittite · OH (c. 1650–1500) · OS ms KBo 6.2 (16th c.), copies to NH incl. the "late version" | ≈200 §§; TLHdig 2,245 ms lines (66 mss) · GOOD | Ex 21:18–19 (HL §10), 21:22 (§17–18), 22:1–5 (§57–70, 106–107), 22:15–16 (§28), 22:17 (§44b, 111); Lev 18 and 20 (§187–200); Deut 21:1–9 (§IV/§6 measuring the distance); Deut 22:23–27 (§197); Deut 25:5–10 / Gen 38 (§193); Lev 19:19 (§166–167, weak) | Wergild ethics, the price of a limb, a slave, a vine; sexual taboos and their ranking; a law code that *revises itself* ("formerly they paid …, now …") | **HIGH / MED-HIGH** | TLHdig (verified); CHiL ed. of CTH 291 (Florence, on HPM, offline); Hrozný 1922 PD (verified) | HIGH (fits `חוקים-ובריתות/`) |
| 3 | **Instructions for Temple Personnel** (CTH 264) + **Border governor (BĒL MADGALTI)** (CTH 261) (+ palace servants CTH 265, bodyguard CTH 262) | Hittite · MH composition (c. 1400) · NS copies (KUB 13.4), MS fragments | 264: TLHdig 806 (KUB 13.4 = 307 ms lines), composite ≈ 330; 261: 978 · GOOD | Num 18:1–7, 1:51–53, 3:38 (Levites guarding, the encroacher dies; Milgrom 1970); Lev 22:1–16 (eating holy food); Lev 15:18; Lev 27 / Mal 3:8 (defrauding the god); Deut 16:18–20, 17:8–13 | "Are the minds of men and gods different? No!"; the god as master and the priest as servant; fear of sacrilege; night watches | **HIGH / MED-HIGH** | TLHdig (verified); Taggar-Cohen 2006, Miller 2013 © | HIGH |
| 4 | **Elimination rituals**: Ašḫella (CTH 394), Uḫḫamuwa (410), Pulisa (407), Ambazzi (391), + Zarpiya (757) | Hittite with Luwian elements · Arzawa / Kizzuwatna tradition, MH (?) · NS copies | TLHdig 394 = 360, 410 = 134, 407 = 130, 391 = 384, 757 = 547; each composite ≈ 40–150 lines · MED-GOOD | **Lev 16:8–10, 20–22** (the goat to Azazel); Lev 14:4–7, 49–53 (the released bird); 1 Sam 6:4–5 (golden mice); Zech 5:5–11 (the woman in the ephah carried off); m. Yoma 4:2 (the scarlet thread ↔ Uḫḫamuwa's coloured-wool crown) | Plague as an angry foreign god who must be "fed" and sent home; a decorated ram or woman as the carrier | **HIGH / HIGH** | TLHdig (verified); Wright 1987; Janowski & Wilhelm 1993; Christiansen 2006 © | HIGH (short), ritual vocabulary risky |
| 5 | **Kizzuwatna blood and purification rites**: Papanikri birth ritual (CTH 476); the Goddess of the Night (CTH 481, "dividing" a deity for a new temple); Ammiḫatna / Tulbi / Mati (CTH 471–472); **Ritual for the primeval / infernal deities** (CTH 446) | Hittite with Hurrian terms · MH (Kizzuwatna, 15th–14th c.) · NS copies | 476 = KBo 5.1, 213 lines; 481 = 524; 446 = 747 (KUB 7.41 = 57) · MED-GOOD | Lev 12:6–8; Lev 4, 8:15, 16:14–19 (purging the sanctuary with blood, *ḥaṭṭat* ↔ *zurki*; Feder 2011); Ex 29:36–37; Ezek 43:18–27; Lev 14:33–53 (house purification); **ʾôv**: Lev 19:31, 20:6, 27; Deut 18:11; 1 Sam 28; Isa 29:4 (Hoffner 1967) | Pits dug to the netherworld; the old gods below; birth as danger; a new temple as a birth of the god | **HIGH / MED-HIGH** | TLHdig (verified); Feder 2011, Miller 2004, Strauß 2006 © | MEDIUM (technical, Hurrian words) |
| 6 | **Kumarbi cycle** (Hurro-Hittite "Songs"): Song of Emergence / Kingship in Heaven (CTH 344), **Ullikummi** (345), **Ḫedammu** (348), Silver (364), LAMMA (343), the Sea (346) | Hittite renderings of Hurrian songs · Hurrian tradition 15th–14th c. or older (debated) · NS copies; Hurrian fragments | TLHdig: 345 = 1,530 ms lines (36 mss), 348 = 748 (48 mss, small), 344 = 239 (one damaged tablet), 343 = 405, 346 = 526, 364 = 222 · Ullikummi MED-GOOD, the others POOR-MED | Gen 1:21 (Ḫedammu, the sea serpent); Gen 1:6–8 (the copper tool that cut heaven from earth); Gen 6:1–4 (succession of divine generations, giants: Hendel 1987); Gen 9:20–27 (rabbinic "Ham castrated Noah" ↔ Kumarbi biting off Anu's genitals: speculative); Gen 11:4 (a being growing to heaven); Isa 14:12–15 | Theogony, the violence of succession, seduction (Šaušga), the deaf and blind stone child, Ea's cunning | **MEDIUM / HIGH** | TLHdig (verified); HPM ed. (offline); Hoffner 1998 © | MEDIUM (fragmentary) |
| 7 | **Old Anatolian myths**: **Illuyanka** (CTH 321), **Telipinu** and the vanishing-god myths (CTH 323–335), the Moon that Fell from Heaven (Hattic–Hittite, CTH 727), Ḫaḫḫima / Frost (334–335) | Hittite (Hattic substrate) · OH compositions · copies MS / NS (KBo 3.7; KUB 17.10 + KBo 55.8) | 321 = 279; 324 = 644 (KUB 17.10+ = 177); 727 = 190 · GOOD (Illuyanka, Telipinu I) | Isa 27:1; Ps 74:13–14; Job 26:12–13; Gen 1:21; Gen 19:26 (Inara's window taboo ↔ Lot's wife); Deut 31:17–18 (*hester panim*); Lev 26:26 / Hag 1:6 ("they ate but were not sated"); Jer 14:5 (the beast abandons its young); Gen 8:7–12 (the eagle's search ↔ the raven and dove, typological); Isa 14:12 (the fallen moon) | A god's anger as mist on the windows; the bee that finds the god; anger buried in bronze jars in the Dark Earth | **MED-HIGH / HIGH** | TLHdig (verified); HPM ed. (offline); EIEOL lesson (verified) | HIGH |
| 8 | **Song of Release** (Hurrian–Hittite bilingual, CTH 789) | Hurrian with Hittite translation · composed 15th c.? (the fall of Ebla c. 1600 in the background) · **MS tablets c. 1400** (KBo 32, found 1983–85) | TLHdig 1,720 ms lines (909 Hit / 811 Hur), KBo 32.14 = 220 · MED | **Lev 25:10** (*deror* ↔ Hurrian *kirenzi* = Hittite *parā tarnumar* = Akk. *andurāru*); **Jer 34:8–22** (release proclaimed and revoked, the city threatened); Neh 5; parables ↔ Judg 9:8–15, Ezek 17, 2 Kgs 14:9 | Wisdom parables (the mountain and the deer, the cup that cursed its smith); a netherworld banquet | **HIGH / HIGH** | TLHdig (verified); Neu 1996 ©; von Dassow 2013 | MEDIUM (translate the Hittite column) |
| 9 | **Hittite tales**: **Tale of Zalpa** (CTH 3), **Appu** (360), **Elkunirša and Ašertu** (342), Sun-god, Cow and Fisherman (363), Kešši (361), Gurparanzaḫu (362) | Hittite · Zalpa OH (OS ms KBo 22.2!); the others NS copies of Hurrian / West-Semitic tales | Zalpa 329; Appu 334 (KUB 24.8 = 130); Elkunirša 274 (KUB 36.35 = 47); Kešši 639 · MED (the main tablet of 363, KUB 24.7, is present under CTH 717) | **Ex 2:3** (sons in caulked baskets on the river); **Judg 12:9** (30 sons, 30 daughters); Lev 18:9 / Gen 19 (unwitting incest); **Gen 18 / Judg 13** (childless rich man, divine visitor, promised son); Gen 4, 25 (the brothers "Evil" and "Just"); **Gen 14:19, 22** (*El qoneh ʾereṣ* = Elkunirša); **Gen 39** (Ašertu ↔ Potiphar's wife); Ex 2:5–10 (the foundling raised by a fisherman's wife) | Folktale: childlessness, sibling rivalry, a mother who wants to eat her child | **HIGH / HIGH** | TLHdig (verified) | MEDIUM (broken) |
| 10 | **Old Kingdom historiography**: **Anitta** (CTH 1), **Testament of Ḫattušili I** (CTH 6, Akk.–Hit.), Annals of Ḫattušili I (CTH 4, Akk.–Hit.), Palace Chronicle (CTH 8), **Proclamation of Telipinu** (CTH 19) | Hittite (+ Akkadian) · 17th–16th c. · Anitta in **OS** (KBo 3.22); the others NS copies | Anitta 177 (KBo 3.22 = 79); CTH 6 = 228; CTH 4 = 338; CTH 8 = 284; CTH 19 = 653 · GOOD | **Josh 6:26** / 1 Kgs 16:34 (a curse on rebuilding a destroyed city) and Judg 9:45 (sowing a city); **Deut 17:18–19** (the king reads the tablet regularly); 1 Kgs 2:1–9 (a dying king's testament); **Deut 24:16** / 2 Kgs 14:6 (punish the killer, spare his house); Josh 3 (crossing the Euphrates "on foot", CTH 4) | The oldest Indo-European voice; a king's grief over a faithless heir; court anecdotes | **MED-HIGH / HIGH** | TLHdig (verified); EIEOL lessons (Anitta, Telipinu) | HIGH (short) |
| 11 | **Apology of Ḫattušili III** (CTH 81) + Deeds of Šuppiluliuma (40), Annals of Muršili II (61), Muršili's aphasia (486) | Hittite · NH (c. 1260) · contemporary NS copies (KUB 1.1+) | 81: KUB 1.1+ = 328 ms lines, composite ≈ 330 · GOOD; 40 / 61 large but fragmentary | 1 Sam 16 – 2 Sam 5 (the "History of David's Rise": Wolf 1967, McCarter 1980); 1 Sam 1:11, 28 (a child given to the deity); Josh 10:11 (the storm-god's meteor in Muršili's annals; Weinfeld 1983); 1 Kgs 11:19–20 (the Egyptian queen's letter) | Personal piety (Ištar of Šamuḫa), dreams, self-justification; a king who loses his speech in a storm | **MED-HIGH / HIGH** | TLHdig (verified); EIEOL lessons | HIGH |
| 12 | **Hittite treaties** – Akkadian: Šattiwaza (CTH 51–52), Šunaššura (41), Ramesses II (91); Hittite: **Bronze Tablet** (106), **Ḫukkana of Ḫayaša** (42), Kupanta-Kurunta (68), Alakšandu of Wilusa (76), Tuppi-Teššub (62), Šaušgamuwa (105), **Išmeriga** (133) | Akkadian / Hittite · 15th–13th c. · contemporary tablets; the Bronze Tablet is the original (1235 BCE) | Bronze Tablet ≈ 350 lines, PERFECT; 42 = 604; 68 = 1,030; 51 = 438 (Akk.) · GOOD | Deut 1–3 (historical prologue: Berman 2013); **Deut 13:13–19** (CTH 133: Berman 2011); Deut 31:9–13, 26 (deposit and public reading); Ex 25:16; Deut 23:16–17 (fugitive extradition, contrast); **Lev 18:8–18** (CTH 42 sexual taboos); 2 Sam 11:2 (Mariya executed for looking); Num 34 / Josh 15 (border descriptions); Deut 28 (curses) | Diplomacy as kinship and oath; the 1,000 gods as witnesses | **HIGH / MEDIUM** | TLHdig (verified, incl. Akk. lines); Weidner 1923 PD (verified) | HIGH (the Akkadian ones are in-domain) |
| 13 | **Military Oaths** (CTH 427–428) + ritual after a defeat (passing between halves) | Hittite · MH (MS mss) | 427 = 328 (KBo 53.33 + KBo 6.34+), 428 = 310 · GOOD | **Deut 27:15–26** ("Amen" ↔ the soldiers' "so be it"); Num 5:21–22; Ps 68:3 / Mic 1:4 (melting wax); Deut 28:28–29; Isa 19:16 / Jer 50:37 ("become women"); **Gen 15:9–17 / Jer 34:18–20** (walking between halves, verify CTH) | Enacted curses, the fear of perjury | **MED-HIGH / MED-HIGH** | TLHdig (verified); Oettinger 1976 © | HIGH |
| 14 | **Household and personal magic**: Maštigga against family quarrel (CTH 404), Paškuwatti against impotence (406), Tunnawiya (409), Anniwiyani and others | Hittite (Luwian milieu) · MH · MS / NS | 404 = 1,487 (41 mss); 406 = 178 (1 ms); 409 = 1,442 · MED-GOOD | Deut 22:5 (cross-dressing ↔ the spindle and the bow: Hoffner 1966); 2 Sam 3:29; Gen 4 (quarrelling kin); Num 19 (purification by water and ash, typological) | Marriage, potency, family rifts, the "Old Woman" healer | **MEDIUM / HIGH** | TLHdig (verified); Miller 2004 © | MEDIUM |
| 15 | **Royal funerary ritual** *šalliš waštaiš* (CTH 450) | Hittite · NH (OH roots) · NS | 2,273 ms lines (79 mss) · MED (14 days, gaps) | 1 Sam 31:12–13 (Saul burned, bones buried); Jer 34:5; 2 Chr 16:14; Amos 6:10; Gen 50:2–3 (typological) | Death of a king, the soul's meadow, weighing, women gathering bones from the pyre | **MEDIUM / HIGH** | TLHdig (verified); Kassian et al. 2002 © | MEDIUM (large; do a selection) |
| 16 | **Dreams and vows of the royal couple** (CTH 584, 585 Puduḫepa's vow, 590); oracles (CTH 561–582) | Hittite · NH · contemporary NS | 585 = 715; 590 = 2,554; oracles enormous · fragmentary / technical | Num 30:4–17 (women's vows); Gen 28:20–22; 1 Sam 1:11; 1 Kgs 3:5; Num 27:21 / 1 Sam 14:41 (binary lot oracles ↔ Urim and Thummim) | Dreams, anxiety about a god's anger, a queen's bargaining | **MEDIUM / HIGH** (dreams) | TLHdig (verified); Mouton 2007 © | MEDIUM-LOW |
| 17 | **Hieroglyphic Luwian (Iron Age, "the Hittites of the Bible")**: Karatepe (HLuw side of the bilingual), Çineköy, Karkamiš (Katuwa, Yariri), Tell Ahmar, Hama, Aleppo and Arsuz (Palistin), Tabal (Topada, Kululu lead strips), the Assur lead letters, Türkmen-Karahöyük | Luwian (Anatolian hieroglyphs) · 12th–7th c. · originals in stone / lead | ≈ 300 inscriptions; Karatepe ≈ 70 sentences · GOOD (Karatepe), varied | Gen 10:2–4 (Meshech, Tubal, Togarmah, Elishah), 10:15 (Ḥet); 1 Kgs 10:28–29 (Que, "kings of the Hittites"); 2 Kgs 7:6; Judg 5:6 (deserted roads ↔ Karatepe's "women walk with spindles"); 1 Kgs 5:5; 2 Sam 8:9–10 (Hamath) | Royal boasting, peace and prosperity ideals, everyday lead letters | **MED-HIGH / MEDIUM** | ACLT (verified, HTTP only; licence unstated); CHLI © | MEDIUM |
| 18 | **Urartian royal inscriptions** (Argišti I's Ḫorḫor annals, Sarduri II's annals, Meher Kapısı offering list, Kelišin and Topzawa bilinguals, Rusa's Keşiş Göl) | Urartian (cuneiform) · 9th–7th c. · originals | ≈ 600 objects; the annals hundreds of lines · GOOD | **Gen 8:4** (Ararat = Urartu); 2 Kgs 19:37 / Isa 37:38; Jer 51:27; Num 28–29 (an offering list keyed to gods, typological); Eccl 2:4–6 (Rusa's lake and orchards) | Royal ideology at the edge of Assyria | **MEDIUM / MEDIUM** | eCUT (ORACC, CC BY-SA 3.0, with English; unreachable today) | MEDIUM-LOW |
| 19 | **Festivals** (KI.LAM CTH 627, AN.TAḪ.ŠUM, *nuntarriyašḫa* 626, *ḫišuwa* 628, *purulli*) | Hittite (+ Hattic and Hurrian chants) · OH–NH · NS | Huge (627 = 6,339 ms lines; 628 = 9,148) · repetitive | Lev 23; Num 28–29; Ex 23:14–17 (structure only) | Processions, singers, the "drinking of the god", leopard-men | **LOW / MEDIUM** | TLHdig (verified) | LOW (sample only) |
| 20 | **Hittite Gilgameš** (CTH 341) | Hittite paraphrase + Hurrian + Akkadian (Ḫattuša) · MH / NH | 1,246 ms lines (59 mss) · MED | (extends the existing Gilgameš corpus) | How a foreign epic was retold | **MEDIUM / MED-HIGH** | TLHdig (verified); Beckman 2019 © | MEDIUM |

---

## 2. The survey

### 2.1 Prayers (rank 1)

**2.1.1 Muršili II's Plague Prayers (CTH 378.I–IV, 379) and hymn-prayers (CTH 376–377, 380)**
**Hittite (NH) · composed c. 1320–1300 BCE by or for Muršili II · contemporary 14th-century manuscripts (KUB 14.8, the "Second" prayer; KUB 14.14+; KUB 23.3; KUB 14.10+ …) · TLHdig 776 ms lines in 15 mss for CTH 378, plus 462 (376), 144 (377), 91 (380) · the Second prayer is nearly complete.**
- *What it is:* a plague has ravaged Ḫatti for twenty years. The king asks the gods (the Storm-god of Ḫatti, the Sun-goddess of Arinna, the assembly of gods) why. Oracles and two "old tablets" give the answer:
  - an offering to the Mala (Euphrates) river had been neglected;
  - his father Šuppiluliuma broke the oath with Egypt (the attack on Amka), and the Egyptian prisoners brought the plague.

  Muršili confesses his father's sin, offers restitution "twentyfold", and argues that if all die, no one will be left to bring the gods bread and libations. Among the most famous lines: "It is so: the father's sin comes upon his son. On me too my father's sin has come." Also a proverb of refuge: "the bird takes refuge in the cage, and the cage keeps it alive."
- *Bible parallels:*
  - **2 Sam 21:1–14**: a famine caused by a broken oath (Saul and the Gibeonites), the cause found by inquiring of God, expiation by the next generation. Malamat 1955, *VT* 5: "Doctrines of causality in Hittite and biblical historiography: a parallel". **Widely accepted as a typological parallel.**
  - **2 Sam 24**: a plague for the king's sin; "I have sinned … these sheep, what have they done?"
  - Inherited guilt: **Ex 20:5 / Deut 5:9**, Lam 5:7, Jer 31:29 / Ezek 18:2.
  - Confession: Ps 32:5.
  - The legal plea to God: Gen 18:23–25 and the prophets' *riv*. Singer stressed that the Hittite word for prayer, *arkuwar*, is a plea or defence speech.
  - "Who will feed the gods if we all die?" ↔ Ps 6:6, 88:11–13, 115:17 ("the dead do not praise").
- *Soul:* one of the deepest windows in the ancient Near East onto guilt, theodicy and a ruler's responsibility.
- *Base text and tools:*
  - **TLHdig** (CC BY 4.0, verified: KUB 14.8 = 94 lines in `CTH 378_XML_GEBET/`).
  - HPM editions by the Marburg project "Hymnen und Gebete" (Rieken et al., hethiter.net/: CTH 376–389, German translations; HPM offline today; licence verify).
  - **Götze 1930, "Die Pestgebete des Muršiliš"**, *Kleinasiatische Forschungen* 1: 161–251. US public domain; archive.org `kleinasiatischef0000unse`, full PDF and OCR, verified.
  - Translations: Singer 2002, *Hittite Prayers* (SBL WAW 11; ©; on Fulcrum but "you don't have access", verified); Lebrun 1980, *Hymnes et prières hittites*; Daues & Rieken 2018 (StBoT 63); Rieken in TUAT NF.
  - EIEOL "Hittite Online", lesson 80: a glossed excerpt of the Plague Prayer (UT Austin, ©, verified).
  - CHD L–N, P, Š free (verified).
  - **Hebrew:** possibly in Singer 2009 (verify which prayers).
- *Feasibility:* NH prose, formulaic, well understood; multiple duplicates. The best first Hittite project. A composite must be built from the mss (or taken from the HPM edition when it is back).
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* **translate first**, all five plague prayers + 376–377 + 380.

**2.1.2 Kantuzili's prayer (CTH 373) and the "Prayers of a Mortal" to the Sun-god (CTH 372, 374)**
**Hittite (MH) · c. 1400 · MS manuscripts (KUB 30.10, 57 lines) · CTH 372 = 324 ms lines, 374 = 210.**
- *What it is:* a sick man pleads with his personal god:
  - "Since my mother bore me, you, my god, have raised me";
  - he never swore falsely, never ate the sacred bread;
  - "Life is bound up with death for me, death with life. Mankind does not live forever; the days of his life are counted."

  It uses Mesopotamian Šamaš hymn models (CTH 372).
- *Bible:* Ps 22:10–11, 71:6 (from the womb); **Ps 90:10–12**; **Job 31** (the oath of clearance); Ps 6 and 38 (sickness and sin). Typological, but very close in feeling.
- *Base:* TLHdig (verified); HPM; Singer 2002 ©.
- *Benefit:* Bible MEDIUM / Soul HIGH. *Recommendation:* bundle with 2.1.1.

**2.1.3 Arnuwanda I and Ašmunikal's prayer about the Kaška (CTH 375)**
**Hittite (MH) · c. 1400 · MS (KUB 17.21+ = 123 lines) · TLHdig 512 ms lines in 27 mss.**
- *What it is:* the Kaška people have sacked the northern temples. The royal couple reminds the gods that "only in Ḫatti" were they properly served, and lists the cult losses.
- *Bible:* Ps 74:3–8, 79:1–4; Lam 1–2 (the enemy in the sanctuary). Typological.
- *Benefit:* Bible MEDIUM / Soul HIGH. *Recommendation:* bundle.

**2.1.4 Others:**
- Muwatalli II's prayer to the assembly of gods through the Storm-god of Lightning (CTH 381, KUB 6.46, 591 ms lines): a well-preserved model prayer with a ritual itinerary. ↔ 1 Kgs 8 formulae. MEDIUM / MED-HIGH.
- Ḫattušili III's and Puduḫepa's prayers (CTH 383–384, 235 lines each): Puduḫepa's vow for her husband's life ↔ 1 Sam 1:11, Num 30. MEDIUM / HIGH.

### 2.2 Laws and administration (ranks 2–3)

**2.2.1 The Hittite Laws (CTH 291 "If a man …", CTH 292 "If a vine …")**
**Hittite (OH) · composed c. 1650–1500 (the code itself mentions earlier tariffs: "formerly they paid X, now Y") · OS manuscript KBo 6.2 (16th c.); MH and NH copies; a NH "late parallel version" (KBo 6.4) · ≈ 200 §§; TLHdig 1,208 + 1,037 ms lines in 66 mss (verified; KBo 6.2 sits in the join file `KBo 22.62+`, KBo 6.3 in `KBo 22.63+`) · well preserved overall.**
- *What it is:* casuistic law, "If a man … then …". It covers homicide and injury (compensation, not execution, for most killings), slaves, marriage and betrothal, land tenure and feudal service (*šaḫḫan* and *luzzi*), theft of animals by species and age, agriculture (vines, orchards, irrigation), prices, sorcery, and sexual offences (§187–200), ranked as capital, royal-pardonable or permitted.
- *Bible parallels* (Hoffner 1997, and his articles):
  - Ex 21:18–19 (HL §10: the injurer pays the physician and supplies a worker);
  - Ex 21:22 (§17–18: miscarriage by a blow, fines by month of pregnancy);
  - Ex 22:1–4 (graded restitution for stolen animals, §57–70);
  - Ex 22:5–6 (§106–107: burning or grazing another's field);
  - Ex 22:15–16 (§28–35 betrothal and abduction);
  - Ex 22:17 (§44b, 111 sorcery);
  - **Deut 21:1–9** (the late version of §6: if a body is found in open country, "they measure three *danna*" and the nearest town is liable: the closest ancient parallel to the measuring to the cities);
  - **Deut 22:23–27** (§197: seized "in the mountains", the man dies; "in the house", the woman dies);
  - **Gen 38 / Deut 25:5–10** (§193 levirate, including the father-in-law, exactly as in Gen 38);
  - **Lev 18:6–23; 20:10–21** (§187–200: bestiality with a cow, sheep, pig or dog is capital; with a horse or mule no offence, but the man may not approach the king or become a priest; incest rules);
  - Lev 19:19 (§166–167, sowing seed upon seed, weak).

  Consensus: specific contacts unproven. The parallels are of legal form and problem-solving. Biblical scholars cite them constantly (Hoffner; Westbrook; Wells; Roth's *Law Collections* 1997 includes them).
- *Soul:* a society that monetises injury, worries about ploughs, bees and vines, and ranks sexual taboos. The revision clauses show legal reform happening.
- *Base text and tools:*
  - **TLHdig** (CC BY 4.0, verified).
  - **CHiL** (Corpus of Hittite Laws; Torri, Warbinek, Carnevale, Florence): a new digital critical edition of CTH 291 on HPM, with CTH 292 announced (reported; offline today).
  - Hoffner 1997, *The Laws of the Hittites: A Critical Edition* (Brill DMOA 23, ©; the standard).
  - **Public domain:** Hrozný 1922, *Code hittite provenant de l'Asie Mineure* (archive.org `codehittiteprove01hroz`, verified; the first edition, readings outdated); Zimmern & Friedrich 1922, *Hethitische Gesetze aus dem Staatsarchiv von Boghazköi* (AO 23/2; archive.org `hethitischegeset0023hitt`, verified).
  - Friedrich 1959, *Die hethitischen Gesetze* (©).
  - EIEOL lesson 40, "The Law Code" (verified).
  - **Hebrew: Neufeld 1951** (reported); probably excerpts in Singer 2009.
- *Feasibility:* high. Formulaic legal Hittite is the best-understood genre. The existing law corpus has a rendering glossary (`חוקים-ובריתות/renderings.md` §5) that maps "If a man … " casuistic formulae, and it transfers well.
- *Benefit:* Bible HIGH / Soul MED-HIGH. *Recommendation:* **translate early** as `חוקים-ובריתות/8-…`, with OS readings and the late version in the apparatus.

**2.2.2 Instructions for Temple Personnel (CTH 264)**
**Hittite · MH composition (c. 1400) · NS main copy KUB 13.4 (4 columns, 307 ms lines; TLHdig total 806 in 19 mss) · composite ≈ 330 lines, well preserved.**
- *What it is:* the king's rules for priests and temple staff:
  - purity (bathing after sex before entering, clean clothes, cut hair and nails for the cooks, no pigs or dogs at the door);
  - honesty with offerings (do not take the god's bread or beer home to your wife and children, do not substitute lean animals, do not hold back the firstlings and harvest dues);
  - **night watch**: the priests patrol the temple all night in shifts; sleeping or failing to guard is a capital offence, and the trespasser is killed.

  It opens with the famous comparison: "Are the minds of men and of gods somehow different? No! … The mind of the servant who stands before his master is like the gods' mind."
- *Bible:*
  - **Num 18:1–7, 22–23; 1:51–53; 3:5–10, 38**: the Levites "keep the charge (*mishmeret*) of the sanctuary"; "the stranger who approaches shall die". Milgrom 1970, *Studies in Levitical Terminology I*, used CTH 264 as the key comparison for guard duty and the encroacher. **Accepted as one of the most cited Hittite–Torah comparisons.**
  - Lev 22:1–16 (who may eat holy food); Lev 15:18 / 1 Sam 21:5–6; Lev 27:30–33; Mal 3:8 ("will a man rob God?").
  - Taggar-Cohen 2006, *Hittite Priesthood* (THeth 26), and her articles comparing the priests' "fear of the god".
- *Soul:* a religious ethic of service: the god as master who sees what servants steal.
- *Base:* TLHdig (verified: `CTH 264_XML_TLH/KUB 13.4.xml`); HPM edition (offline); Taggar-Cohen 2006 and Miller 2013, *Royal Hittite Instructions* (WAW 31, ©); Süel 1985.
- *Benefit:* Bible HIGH / Soul MED-HIGH. *Recommendation:* **translate**; ideally together with 2.2.3.

**2.2.3 Instructions for the BĒL MADGALTI (border governor; CTH 261) and others (CTH 262 bodyguard, 265 palace servants, 255, 257–260)**
**Hittite · MH (Arnuwanda I, c. 1400) · MS and NS · CTH 261 = 978 ms lines (25 mss).**
- *What it is:* duties of a frontier governor:
  - fortifications, guard posts, the scouting of enemy roads;
  - the upkeep of temples and the cult of local gods;
  - **local justice**: he must judge cases "rightly", not favour a brother, wife or friend, and not take bribes.

  CTH 265: the purity of the king's water and bread ("if a hair is found …").
- *Bible:* Deut 16:18–20, 17:8–13; Ex 23:6–8 (bribes); Deut 20 (fortified towns). Typological.
- *Benefit:* Bible MED-HIGH / Soul MEDIUM. *Recommendation:* translate with 2.2.2 as one "instructions" project.

### 2.3 Rituals (ranks 4, 5, 13, 14, 15)

**2.3.1 Elimination ("scapegoat") rituals from Arzawa and Kizzuwatna: Ašḫella (CTH 394), Uḫḫamuwa (CTH 410), Pulisa (CTH 407), Ambazzi (CTH 391), Zarpiya (CTH 757)**
**Hittite with Luwian words (Zarpiya has Luwian incantations) · MH traditions from western and southern Anatolia · NS copies · each 40–150 composite lines; TLHdig 394 = 360 ms lines (KUB 9.32+ = 85), 410 = 134 (KUB 9.31 in `CTH 999_XML_TLH/BESRIT/`), 407 = 130 (KBo 15.1 = 123), 391 = 384, 757 = 547.**
- *What they are:*
  - **Ašḫella**: plague in the army. At night rams are tethered before the officers' tents; in the morning a woman is adorned and sent with the rams toward the enemy: "Whatever god of the enemy caused this plague, here is an adorned woman for you."
  - **Uḫḫamuwa**: a ram is crowned with coloured wool and driven to the enemy land.
  - **Pulisa**: after a campaign, a prisoner and a woman (or a bull and a ewe, by the god's sex) are sent back to the enemy god.
  - **Ambazzi**: a mouse carries evil "to the high mountains and deep valleys".
  - **Zarpiya**: a meal for the plague god Šanta, with Luwian incantations.
- *Bible:*
  - **Lev 16:8–10, 20–22** (the live goat bears the iniquities "to a land cut off", to Azazel). Wright 1987, *The Disposal of Impurity* (SBLDS 101); Janowski & Wilhelm 1993, "Der Bock, der die Sünden hinausträgt" (OBO 129); Zatelli 1998 (*VT* 48, Ebla). **Accepted as the closest ancient analogues, with Ebla's goat rite.** The differences are crucial: in the Torah the goat goes to the wilderness, not to an enemy god, and carries sin, not plague.
  - Uḫḫamuwa's coloured wool ↔ the scarlet thread of m. Yoma 4:2, 6:6.
  - Lev 14:4–7, 49–53 (the bird released over the field).
  - **1 Sam 6:4–5** (golden mice and tumours sent back with the ark: Ambazzi, and the plague rites generally).
  - Zech 5:5–11 (wickedness personified as a woman, carried off to Shinar).
  - 2 Sam 24 (plague).
- *Soul:* how plague was explained (a foreign god's anger) and handled (feeding him, decorating the carrier, sending him home).
- *Base:* TLHdig (verified); HPM "Beschwörungsrituale" editions (BESRIT; offline); Christiansen 2006 (StBoT 48, Ambazzi), Mouton 2016 (LAPO, French), Bawanypeck 2005 (THeth 25, augur rituals) ©.
- *Feasibility:* short and formulaic, but ritual nouns (implements, breads, materials) are often untranslatable; mark them as such.
- *Benefit:* Bible HIGH / Soul HIGH. *Recommendation:* **translate as one project** ("Rituals of sending away").

**2.3.2 Kizzuwatna blood and purification rites (CTH 471–500): Papanikri (476), the Goddess of the Night (481), Ammiḫatna / Tulbi / Mati (471–472), and others (477–495)**
**Hittite with Hurrian terms · Kizzuwatna (Cilicia) priestly traditions of the 15th–14th c. · NS copies · Papanikri = KBo 5.1, 213 lines (1 ms); 481 = 524; 471 = 354.**
- *What they are:*
  - Papanikri: when the birth stool breaks, the woman and the house are impure. The priest makes offerings including *zurki* (blood) and *uzi* (fat).
  - CTH 481: the cult of the Goddess of the Night is "divided" and moved to a new temple. The new temple and its gods are purified with blood and the deity is drawn in.
  - CTH 471–472: rites for a defiled temple.
- *Bible:*
  - Lev 12:6–8 (birds after childbirth);
  - **Lev 4; 8:15; 16:14–19** (purging the sanctuary with blood);
  - **Ex 29:36–37; Ezek 43:18–27** (the altar consecrated with blood);
  - 1 Kgs 8 / 2 Sam 6 (bringing a god into a new house).
  - **Feder 2011, *Blood Expiation in Hittite and Biblical Ritual*** (SBL WAWSup 2) argues for a historical link via Kizzuwatna and North Syria. **Debated but serious.**
- *Base:* TLHdig (verified: KBo 5.1, 213 lines); Sommer & Ehelolf 1924, *Das hethitische Ritual des Pāpanikri von Komana* (BoSt 10; US PD; **not found** in the archive.org scans of BoSt, of which only vols. 1 and 3–8 are present, verified); Strauß 2006, *Reinigungsrituale aus Kizzuwatna*; Miller 2004 (StBoT 46); Beckman 1983, *Hittite Birth Rituals* (StBoT 29) ©.
- *Benefit:* Bible HIGH / Soul MED-HIGH. *Recommendation:* translate Papanikri + CTH 481 as a second ritual project.

**2.3.3 Ritual for the primeval / infernal deities (CTH 446; purification of a house)**
**Hittite · MH composition · NS (KUB 7.41 = 57 lines; TLHdig 747 ms lines in 22 mss).**
- *What it is:* to purify a house of bloodshed, perjury and impurity, the practitioner digs pits (*āpi*) to the netherworld. He summons the "primeval gods" (*karuileš šiuneš*: Aduntarri the diviner, Zulki the dream-interpreter, Irpitiga, Narā, Namšara, Minki, Ammunki …), offers to them below, and binds the impurity in the earth.
- *Bible:* **Hoffner 1967, "Second Millennium Antecedents to the Hebrew ʾÔḆ"** (*JBL* 86): *ʾôv* as a ritual pit for calling up the dead. Lev 19:31, 20:6, 27; Deut 18:11; 1 Sam 28:7–19; Isa 8:19, 29:4. The etymology is debated, the parallel widely cited. Also Lev 14:33–53 (purifying a house).
- *Benefit:* Bible HIGH / Soul MED-HIGH. *Recommendation:* translate (short) with 2.3.2.

**2.3.4 The Military Oaths (CTH 427 "First", 428 "Second") and the army rituals**
**Hittite · MH · MS (KBo 53.33 + KBo 6.34 + KUB 48.76 + …) · 328 + 310 ms lines.**
- *What it is:* recruits swear allegiance through enacted curses:
  - wax and fat melt on the fire: "so may the oath-breaker melt";
  - a woman's garment, distaff and spindle are shown, arrows broken: "make him a woman";
  - a blind woman and a deaf man are led past;
  - after each curse the soldiers answer "so be it".

  A related rite after a military defeat (KUB 17.28 iv; CTH number verify) cuts a man, goat, puppy and piglet in half; the troops pass between the halves.
- *Bible:* **Deut 27:15–26** (the people answer "Amen"); Num 5:21–22; Ps 68:3, Mic 1:4; Deut 28:28–29; Isa 19:16, Jer 50:37, 51:30, Nah 3:13; **Gen 15:9–17 and Jer 34:18–20** (passing between the parts). Oettinger 1976 (StBoT 22).
- *Benefit:* Bible MED-HIGH / Soul MED-HIGH. *Recommendation:* translate (compact, well preserved).

**2.3.5 Household and personal magic: Maštigga (CTH 404), Paškuwatti (CTH 406), Tunnawiya (CTH 409), Anniwiyani (393), Ḫuwarlu (398) and others**
**Hittite (Luwian milieu) · MH · MS/NS · 404 = 1,487 ms lines; 406 = 178; 409 = 1,442.**
- *What it is:*
  - Maštigga of Kizzuwatna reconciles a quarrelling father and son, husband and wife, brothers: tongues of clay are cut, a sheep "takes" the curses.
  - Paškuwatti cures impotence: "I have taken femininity from you and given you masculinity" (the spindle and distaff are replaced by a bow and arrows).
  - Tunnawiya's "ritual of the river" purifies an impure person.
- *Bible:* **Deut 22:5** and 2 Sam 3:29 (Hoffner 1966, *JBL* 85, "Symbols for masculinity and femininity"); Num 19 (water of purification, typological); Gen 4.
- *Base:* TLHdig (verified); Miller 2004 (StBoT 46) ©; **Goetze & Sturtevant 1938, *The Hittite Ritual of Tunnawi*** (AOS 14). An archive.org copy exists but was uploaded by an individual, not the rights holder. 1938 → US status depends on renewal (verify), so do not use it unless confirmed PD.
- *Benefit:* Bible MEDIUM / Soul HIGH. *Recommendation:* a "rituals of the Old Woman" sampler.

**2.3.6 Royal funerary ritual *šalliš waštaiš* (CTH 450)**
**Hittite · NH copies of an older ritual · 2,273 ms lines (79 mss) · 14 days, many gaps.**
- *What it is:* "When a great sin occurs in Ḫattuša (the king or queen 'becomes a god')":
  - the body is burned;
  - women quench the pyre and gather the bones with silver tongs into oil and fine cloth;
  - a "stone house" is furnished;
  - the dead receives a meadow;
  - an effigy is honoured;
  - life and death are weighed.
- *Bible:* 1 Sam 31:12–13 (Saul's body burned, bones buried); Jer 34:5, 2 Chr 16:14, 21:19 ("burnings" for kings); Amos 6:10. Typological.
- *Base:* TLHdig (verified); Kassian, Korolëv & Sidel'tsev 2002, *Hittite Funerary Ritual* (AOAT 288, with English) ©.
- *Benefit:* Bible MEDIUM / Soul HIGH. *Recommendation:* translate days 1–2 and the bone-gathering as a selection.

**2.3.7 Other ritual families (lower priority):**
- substitute-king rites (CTH 419; ↔ none);
- evocation (*mugawar*) rituals to draw back an absent god (CTH 483 and others; ↔ the vanishing-god myths);
- Hurrian *itkalzi* ("mouth-washing") series (CTH 777, 2,464 ms lines, mostly Hurrian: too hard);
- the Ritual of Ḫantitaššu; birth rituals (Beckman 1983).

### 2.4 Myths (ranks 6, 7, 8, 9)

**2.4.1 The Kumarbi cycle ("Songs", *SÌR*): Kingship in Heaven / Song of Emergence (CTH 344), Ullikummi (345), Ḫedammu (348), Silver (364), LAMMA (343), the Sea (346)**
**Hittite versions of Hurrian poems · the Hurrian songs are probably 15th–14th c. (performance tradition via Kizzuwatna / North Syria: Bachvarova 2016; older roots are debated) · NS copies of the 14th–13th c., plus Hurrian fragments · Ullikummi ≈ 3 tablets (TLHdig 1,530 ms lines in 36 mss; the main tablet set KUB 33.92–98 is in the join file `KBo 26.58+`); Kingship in Heaven = one 4-column tablet (KUB 33.120 in `KBo 52.10+`, 239 ms lines, columns ii–iii badly damaged); Ḫedammu ≈ 40 small fragments (748 ms lines).**
- *What it is:*
  - **Kingship in Heaven:** Alalu, then Anu, then Kumarbi rule in heaven, nine years each. Kumarbi bites off Anu's genitals, swallows them and becomes pregnant with the Storm-god Teššub, the Tigris and Tašmišu. Teššub is born and dethrones him.
  - **Ullikummi:** Kumarbi impregnates a great rock. The basalt child Ullikummi grows on the shoulder of Upelluri (an Atlas figure) in the sea until he reaches heaven and threatens the gods' city. Šaušga's song fails: he is deaf and blind. Ea fetches "the ancient copper cutting tool with which they cut apart heaven and earth" and severs Ullikummi from Upelluri's shoulder.
  - **Ḫedammu:** a sea serpent of enormous appetite, son of Kumarbi and Šertapšuruḫi, daughter of the Sea. Šaušga seduces him with her nakedness and drugged beer.
  - **Silver:** an orphan, mocked by other boys, learns that Kumarbi is his father and drags the Sun and Moon down.
  - **LAMMA:** a protective god who, as king, neglects the gods.
  - **The Sea:** the Sea's demands on the gods (Rutherford 2001).
- *Bible parallels:*
  - **Gen 1:21**: Ḫedammu is a begotten sea monster within the divine order. Contrast "God created the great *tanninim*": the Torah's sea monster is a created creature with no plot or appetite.
  - **Gen 1:6–8** (the separation of heaven and earth by a tool ↔ the *raqiaʿ* dividing the waters).
  - **Gen 6:1–4** (divine generations, giants; Hendel 1987, *JBL* 106) and Isa 14:12–15 / Ezek 28 (an upstart reaching heaven).
  - **Gen 11:4** (a tower "whose top is in heaven" ↔ Ullikummi growing to heaven): typological.
  - **Gen 9:20–27**: b. Sanh. 70a ("one said he castrated him") with the castration theogony. Speculative; I could not trace a standard study (verify).
  - The main scholarly line is **Hesiod's *Theogony*** (Güterbock 1948, *AJA* 52; López-Ruiz 2010; Bachvarova 2016) and **Philo of Byblos's Phoenician History** (El / Kronos castrates Ouranos): the West Semitic channel through which Israel could have known such a story.
  - Consensus: the Hesiod link is accepted; the Bible links are typological.
- *Soul:* violence, cunning, seduction and music among the gods: an epic world.
- *Base and tools:* TLHdig (verified); HPM editions by Rieken et al. (offline); Güterbock 1951–52, *JCS* 5–6 (Ullikummi); Siegelová 1971 (StBoT 14, Ḫedammu); Hoffner 1998, *Hittite Myths* (WAW 2, ©); Haas 2006; Corti 2007 (on the title "Song of Emergence"). Hebrew: probably excerpts in Singer 2009.
- *Feasibility:* Ullikummi is moderate. Kingship in Heaven is short and damaged. Ḫedammu is very fragmentary (present it as a dossier of fragments). Avoid the Hurrian fragments, or give them only as quoted readings.
- *Benefit:* Bible MEDIUM (Ḫedammu MED-HIGH for Gen 1:21) / Soul HIGH. *Recommendation:* **translate Kingship in Heaven + Ullikummi + Ḫedammu as one project**; Silver, LAMMA and the Sea as an appendix.

**2.4.2 Illuyanka (CTH 321)**
**Hittite · OH composition (language and setting), told "according to Kella, priest of the Storm-god of Nerik" for the *purulli* spring festival · NS copy KBo 3.7 (123 ms lines) + duplicates (TLHdig 279) · composite ≈ 150 lines, well preserved.**
- *What it is:* two versions.
  - In the first, the serpent defeats the Storm-god. The goddess Inara prepares a feast and enlists a mortal, Ḫupašiya, who demands to sleep with her. The serpent and his brood gorge themselves and cannot get back into their hole; Ḫupašiya binds them and the Storm-god kills them. Inara settles Ḫupašiya in a house on a rock and forbids him to look out of the window. He looks, sees his wife and children, begs to go home, and (probably) dies.
  - In the second, the serpent has taken the Storm-god's heart and eyes. The Storm-god's son marries the serpent's daughter and asks for them as dowry. The Storm-god kills the serpent at sea, and the son, siding with his in-laws, is killed with him.
- *Bible:* Isa 27:1 (Leviathan the twisting serpent), Ps 74:13–14, Job 26:12–13, **Gen 1:21**, Gen 3 (a serpent "craftier" than all); the window taboo ↔ **Gen 19:26** (Lot's wife looking back). Beckman 1982, *JANES* 14; Watkins 1995 *How to Kill a Dragon* (Indo-European comparison). The Chaoskampf link is typological; the West Semitic versions are closer.
- *Soul:* the festival story of a land of springs and serpents; a mortal's loss of home.
- *Base:* TLHdig (verified); HPM (offline); Hoffner 1998 ©; Beckman 1982. *Feasibility:* high.
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* **translate** (with Ḫedammu, for the Gen 1:21 dossier).

**2.4.3 Telipinu and the vanishing-god myths (CTH 323–335)**
**Hittite · OH compositions · MS/NS copies (main KUB 17.10 + KBo 55.8, 177 ms lines; CTH 324 total 644 in 18 mss); versions of the storm-god (325–326), the Sun-god (323), Ḫannaḫanna (334), the gods of various towns (327–335) · Telipinu version 1 GOOD.**
- *What it is:*
  - Telipinu leaves in a rage ("he put his right shoe on his left foot"). Mist seizes the windows, smoke the house; logs are stifled on the hearth; sheep reject their lambs and cows their calves; grain and trees dry up; the gods eat but are not sated, drink but are not quenched.
  - The eagle searches mountains and seas in vain. A bee sent by Ḫannaḫanna finds the sleeping god in a meadow and stings him awake, which makes him angrier.
  - The magician-goddess Kamrušepa's ritual buries his anger in bronze cauldrons in the Dark Earth, "from which nothing comes back". A fleece is hung on the evergreen *eya* tree.
- *Bible:*
  - **Deut 31:17–18, 32:20** (*hester panim*: God's withdrawal and its effects); Hos 5:15.
  - **Lev 26:26**, Hos 4:10, Mic 6:14, **Hag 1:6** ("you eat but are not satisfied …"): a close formula.
  - Jer 14:5 and Joel 1:18–20 (animals abandoning their young; the land drying).
  - Gen 8:7–12 (the searching birds, typological).
- *Soul:* the classic Anatolian picture of divine anger as a withdrawal that stops life, and of ritual as "calming" the god.
- *Base:* TLHdig (verified); HPM (offline); EIEOL lesson 20 (verified); Hoffner 1998; Mazoyer 2003 ©.
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* **translate** Telipinu I + the storm-god and Sun-god versions.

**2.4.4 The Moon that Fell from Heaven (CTH 727; Hattic–Hittite bilingual)**
**Hattic + Hittite · OH (Hattic myth) · NS · 190 ms lines (110 Hit / 80 Hat).**
The Moon-god falls from heaven onto the gate (*kilamar*); the Storm-god sends rain after him; Kamrušepa and Ḫapantali act. ↔ Isa 14:12 (typological). Translate from the Hittite only. Bible MEDIUM / Soul MEDIUM. *Recommendation:* appendix to 2.4.2–2.4.3.

**2.4.5 The Song of Release (Hurrian–Hittite bilingual; CTH 789)**
**Hurrian with an interlinear-style Hittite translation (alternating sections on the same tablet) · the Hurrian poem is probably 15th c. (it remembers Ebla, destroyed c. 1600) · MS tablets c. 1400, found 1983–85 in Temple 16 of the Upper City (KBo 32) · TLHdig 1,720 ms lines (909 Hit / 811 Hur) in 123 mss (verified: KBo 32.14 = the parables, 220 lines).**
- *What it is:*
  - A proem to Teššub and Allani.
  - Teššub's banquet in the netherworld with Allani and the primeval gods.
  - A **series of parables with morals**. "A mountain drove a deer from its body; the deer went to another mountain, grew fat, and cursed the first one … the mountain cursed the deer … — It is not a deer; it is a man who …"; a smith casts a cup that then curses him; a dog steals bread from the oven.
  - The **plot of release**: Megi of Ebla wants to release the captives from Ikinkalis. The orator Zazalla and the assembly refuse ("If you want release, release your own slaves"). Teššub threatens to destroy Ebla. The destruction ending is fragmentary.
- *Bible:*
  - **Lev 25:10** (*u-qeratem deror* ↔ Hurrian *kirenzi*, Hittite *parā tarnumar*, Akk. *andurāru*);
  - **Jer 34:8–22** (release proclaimed by covenant, then revoked, and the city given to destruction): a structural parallel noted by von Dassow 2013 (*JCS* 65, "Piecing Together the Song of Release") and others;
  - Neh 5; Deut 15:12–18;
  - the parables ↔ **Judg 9:8–15** (Jotham), Ezek 17, 2 Kgs 14:9; and the wisdom of Proverbs.
- *Soul:* the earliest known collection of animal and object fables with morals in the Near East outside Sumer. Also politics in an assembly, and a god demanding justice for slaves.
- *Base:* TLHdig (verified); Neu 1996, *Das hurritische Epos der Freilassung I* (StBoT 32) ©; Wilhelm, de Martino, Hoffner (Hoffner 1998 has a translation, verify), Bachvarova 2016 ch. 3.
- *Feasibility:* translate **from the Hittite column**, which itself has obscurities. The Hurrian is to be printed, if at all, only with published glosses (Neu, Wegner, Wilhelm; Richter 2012 *Bibliographisches Glossar des Hurritischen*, ©).
- *Benefit:* Bible HIGH / Soul HIGH. *Recommendation:* **translate** (a strong round-2 candidate for the Lev 25 block).

**2.4.6 Tales: Zalpa (CTH 3), Appu (360), the Sun-god, the Cow and the Fisherman (363), Elkunirša (342), Kešši (361), Gurparanzaḫu (362)**
- **Tale of Zalpa** (Hittite, OH; **OS ms KBo 22.2**, 36 lines + duplicates; TLHdig 329 ms lines):
  - "The queen of Kaneš bore thirty sons in one year … She caulked baskets with dung (or fat), put her sons in them and set them on the river." The river carries them to the sea at Zalpa, and the gods raise them. Later she bears thirty daughters. The grown sons return and, unrecognised, are to marry their sisters; the youngest warns "Shall we take our own sisters?" The rest is lost; a historical narrative of Zalpa's wars follows.
  - Bible: **Ex 2:3** (the *tevah* daubed with bitumen and pitch, laid by the river; cf. the Sargon birth legend); **Judg 12:9** (Ibzan's thirty sons and thirty daughters); Lev 18:9 and Gen 19:30–38 (incest averted or committed).
  - Base: Otten 1973 (StBoT 17); Holland & Zorman 2007 (*The Tale of Zalpa*) ©.
  - **Benefit:** Bible HIGH (Ex 2) / Soul HIGH.
- **Appu** (KUB 24.8 + duplicates, 334 ms lines; NS copy of a Hurrian-milieu tale):
  - Appu of Šudul is the richest man in Lulluwa but has no son: "he goes to bed with his shoes on". He brings a white lamb to the Sun-god, who comes down "as a young man", asks his trouble and tells him to go home and lie with his wife. Two sons are born, named "Evil" and "Just". When they divide the estate, Evil takes the good ox and leaves Just a cow, and the case goes to the gods.
  - Bible: **Gen 15:2–3, 18:1–15** and **Judg 13:2–20** (a childless man, an offering of a kid / lamb, a divine visitor in human form, a son promised); **Gen 4, 25:29–34, 27** (two brothers, one good, one evil, and the inheritance). Typological, much cited.
  - Base: Siegelová 1971 (StBoT 14); Hoffner 1998 ©.
  - **Benefit:** Bible HIGH / Soul HIGH.
- **The Sun-god, the Cow and the Fisherman** (CTH 363; the main tablet KUB 24.7, 210 ms lines, is filed in TLHdig under CTH 717 with the hymn to Ištar):
  - The Sun-god impregnates a cow, which bears a human child and wants to eat it. The Sun-god saves the child to the mountains, where a childless fisherman finds it. The fisherman's wife fakes the birth.
  - Bible: Ex 2:5–10 (foundling adoption); Gen 30:3 (birth on another's knees).
  - **Benefit:** MEDIUM / HIGH.
- **Elkunirša and Ašertu** (KUB 36.35 + fragments, 274 ms lines; NS):
  - A **Canaanite myth preserved only in Hittite**. Ašertu (Asherah) tries to seduce the Storm-god (Baal). He refuses and tells her husband Elkunirša (West Semitic *ʾIl qônê ʾarṣi*, "El, creator / owner of the earth"). Elkunirša lets him "humiliate" her. The Storm-god boasts of killing her 77 / 88 sons, and she mourns seven years.
  - Bible: **Gen 14:19, 22** (*ʾel ʿelyon qoneh shamayim va-ʾareṣ*; the same epithet is in the Karatepe Phoenician KAI 26 and a Jerusalem ostracon); **Gen 39:7–20** (the master's wife and the loyal servant). Hoffner 1965, *RHA* 23.
  - **Benefit:** Bible HIGH / Soul MEDIUM.
- **Kešši** (Hittite and Hurrian versions, 639 ms lines): a hunter so in love with his wife that he neglects the gods and his mother; seven dreams interpreted by his mother. ↔ Deut 24:5 (newlywed exemption, typological); Gen 37, 40–41 (dream series). Fragmentary. MEDIUM / MED-HIGH.
- *Recommendation:* **translate Zalpa + Appu + Elkunirša + the Sun-god and the Cow** as one "tales" project. They are short, Bible-rich and loved by the "soul" purpose.

**2.4.7 Hittite Gilgameš (CTH 341) and other Mesopotamian literature in Hittite**
**Hittite paraphrase (3 tablets) + Hurrian and Akkadian fragments from Ḫattuša · MH/NH · 1,246 ms lines in 59 mss.**
The Hittite version opens with the gods creating Gilgameš (eleven cubits tall) and expands the Ḫuwawa episode. It is an adaptation, not a translation. It extends `אפוס-גילגמש/`. Beckman 2019, *The Hittite Gilgamesh* (Lockwood, ©). Also: the Hittite Atraḫasis fragment (CTH 347), Šarru-kīn "King of Battle" (CTH 310), and Akkadian and Sumerian literary texts copied at Ḫattuša (CTH 792–819; TLHdig carries their Akkadian lines). Bible MEDIUM / Soul MED-HIGH. *Recommendation:* later round, as a Gilgameš appendix.

### 2.5 History and royal self-presentation (ranks 10–11)

**2.5.1 Anitta text (CTH 1)**
**Hittite (OH) · Anitta of Kuššara reigned c. 1750 (contemporary with the Old Assyrian *kārum* of Kaneš, where his name is attested) · the text is OH, earliest copy KBo 3.22 in OS (16th c.; 79 lines; TLHdig 177 in 6 mss) · ≈ 80 composite lines, GOOD.**
- *What it is:* "Anitta, son of Pitḫana, king of Kuššara, speak!" He conquers Neša and Ḫattuša. "In its place I sowed weeds. Whoever becomes king after me and resettles Ḫattuša, may the Storm-god of Heaven strike him!" (Ḫattuša then became the Hittite capital.)
- *Bible:* **Josh 6:26 / 1 Kgs 16:34** (a curse on rebuilding a destroyed city); Judg 9:45 (sowing a destroyed city). Gevirtz 1963 (*VT* 13) on city-destruction rites (verify that he cites Anitta).
- *Soul:* the oldest connected Indo-European text; a king's voice c. 1700.
- *Base:* TLHdig (verified; first lines rendered cleanly, see §4); EIEOL lesson 10 (verified); Neu 1974 (StBoT 18) ©.
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* translate (a perfect first short text).

**2.5.2 Testament of Ḫattušili I (CTH 6, Akkadian–Hittite bilingual) and Annals of Ḫattušili I (CTH 4, bilingual)**
**c. 1630–1600 · NS copies (the Testament in the KUB 1.16 join, `KUB 40.65+`, 228 ms lines with 73 Akk.) · GOOD.**
- *What it is:* the dying Great King tells the assembly why he disinherited the young Labarna ("he did not weep, he did not show pity … his mother is a snake") and names Muršili. His advice to Muršili: "keep my words"; "you shall eat bread and drink water"; the tablet is to be read before him regularly. He asks Ḫaštayar: "wash me well, hold me to your breast, and from your breast bury me in the earth." The Annals (CTH 4) boast that he crossed the Euphrates "on foot", like Sargon.
- *Bible:* **1 Kgs 2:1–9** (a royal testament); **Deut 17:18–19 and 31:10–13** (the king reads the law "all the days of his life"; periodic reading); Gen 49 / Deut 33 (deathbed words); Josh 3:14–17 (river crossing, typological).
- *Base:* TLHdig (verified, with the Akkadian lines); Sommer & Falkenstein 1938 ©; de Martino 2003 (Annals) ©.
- *Benefit:* Bible MED-HIGH / Soul HIGH. *Recommendation:* translate; the Akkadian column suits the folder's existing grammar mapping.

**2.5.3 Proclamation (Edict) of Telipinu (CTH 19)**
**Hittite (+ Akkadian version fragments) · c. 1500 · NS copies (KBo 3.1 in the `KBo 12.7+` join) · TLHdig 653 ms lines (500 Hit / 153 Akk) · composite ≈ 250 lines, GOOD.**
- *What it is:* a moralised history of the Old Kingdom: unity brings conquest, royal murders bring ruin ("the blood became great"). Then the succession law (first-rank son, second-rank son, the husband of a first-rank daughter) and rules on bloodshed: "whoever does evil … shall pay with his own head, but they shall not harm his house, his wife or his children."
- *Bible:* **Deut 24:16 / 2 Kgs 14:6** (sons not put to death for fathers); Judg 9 (fratricide); 2 Sam 13 – 1 Kgs 2 (a succession narrative); the "historical prologue" as an argument from history. Hoffmann 1984 (THeth 11) ©; EIEOL lesson 30 (verified).
- *Benefit:* Bible MED-HIGH / Soul MED-HIGH. *Recommendation:* translate.

**2.5.4 Palace Chronicle (CTH 8–9)** (Hittite, OH, NS copies; 284 ms lines): anecdotes of how the king's father punished dishonest officials. A unique, almost comic window on court discipline. Bible LOW / Soul MED-HIGH. Translate as an appendix to 2.5.1–2.5.3.

**2.5.5 Apology of Ḫattušili III (CTH 81)**
**Hittite (NH) · c. 1260 · contemporary NS copies (KUB 1.1+ = 328 lines; TLHdig 1,106 in 19 mss) · ≈ 330 composite lines, GOOD.**
- *What it is:*
  - The usurper's account of his life under the protection of Ištar of Šamuḫa. As a sickly child he was given to the goddess as a priest after a dream: "For Ḫattušili the years are short … give him to me as a priest and he will live."
  - His loyalty to his brother Muwatalli; his patience under his nephew Urḫi-Teššub's injustice; and the "lawsuit" before the gods that justified his seizing the throne.
  - Dreams to Puduḫepa. The house of Ištar is endowed for his descendants.
- *Bible:* the **"History of David's Rise"** (1 Sam 16 – 2 Sam 5): Wolf 1967 (diss., Brandeis, *The Apology of Ḫattušiliš compared with other political self-justifications*; an archive.org record exists); Hoffner 1975 ("Propaganda and political justification in Hittite historiography"); **McCarter 1980, "The Apology of David" (*JBL* 99)**; Knapp 2015, *Royal Apologetic in the ANE* (SBL). **Accepted as a genre parallel.** Also 1 Sam 1:11, 28 (a child given to the deity).
- *Soul:* personal piety, illness, dreams, self-justification: one of the most personal royal voices of antiquity.
- *Base:* TLHdig (verified); EIEOL lesson 60 (verified); Otten 1981 (StBoT 24), van den Hout in COS 1.77 ©.
- *Benefit:* Bible MED-HIGH (Samuel, not Torah) / Soul HIGH. *Recommendation:* translate (round 2–3).

**2.5.6 Deeds of Šuppiluliuma (CTH 40), Annals of Muršili II (CTH 61, 214), Muršili's aphasia (CTH 486)**
**NH · 40 = 1,829 ms lines (77 mss, fragmentary); 61 = 2,945 · MED.**
- Deeds of Šuppiluliuma: the Egyptian queen's letter ("My husband is dead and I have no son … give me one of your sons") and the murder of prince Zannanza (↔ 1 Kgs 11:19–20).
- Muršili's Annals: the Storm-god's meteor (*kalmišana*) striking Arzawa (↔ **Josh 10:11**; Weinfeld 1983, "Divine intervention in war").
- CTH 486: the king loses his speech in a storm and seeks the cause by oracle (soul).

Bible MEDIUM / Soul MED-HIGH. *Recommendation:* excerpts.

**2.5.7 Also:**
- the **Indictment of Madduwatta** (CTH 147, 182 lines: a treacherous vassal in the west; Alašiya = Elishah);
- Muršili's charges against his stepmother, the Tawananna (CTH 70: sorcery, the death of his wife);
- the Tawagalawa letter and the Ahhiyawa texts (Beckman, Bryce & Cline 2011, WAW 28);
- Maşat and Ortaköy letters (Hoffner 2009, WAW 15).

All soul-rich, Bible-weak (except Gen 10 names).

### 2.6 Treaties (rank 12)

**2.6.1 Akkadian treaties from Ḫattuša: Šattiwaza (CTH 51–52), Šunaššura of Kizzuwatna (CTH 41, also Hittite), Ramesses II–Ḫattušili III (CTH 91), Niqmaddu / Ugarit (CTH 46), Aziru (CTH 49)**
**Akkadian (Hittite chancery) · 15th–13th c. · contemporary tablets (KBo 1.1+ = 156 lines; TLHdig CTH 51 = 374 Akk. lines, 41 = 393, 91 = 162) · GOOD.**
- *What it is:* treaties with a historical prologue, stipulations, deposition clauses ("a duplicate is deposited before the Sun-goddess of Arinna … it shall be read repeatedly"), lists of divine witnesses, and curses and blessings. Šunaššura is a near-parity treaty with mutual extradition. The Ramesses treaty has an amnesty for extradited fugitives.
- *Bible:* the **covenant-form debate**:
  - Mendenhall 1954 (*BA* 17); McCarthy 1963/1978; Kitchen & Lawrence 2012 (*Treaty, Law and Covenant*): for a Late Bronze Hittite model of Ex 19–24 and Deuteronomy;
  - Weinfeld 1972 and Levinson & Stackert 2012: for the Neo-Assyrian model, the Esarhaddon treaty already translated here;
  - Berman 2011, 2013 (*JBL* 130, 132) and Taggar-Cohen 2011 (*VT* 61): renewed Hittite arguments.
  - Specific: Deut 31:9–13, 24–26; Ex 25:16 (*ʿedut* in the ark ↔ deposit before the god); Deut 23:16–17 (a fugitive slave not handed back: the inverse of treaty extradition); Deut 28.
  - Translating a Hittite-chancery Akkadian treaty next to the Esarhaddon treaty lets the reader test the debate.
- *Base:* TLHdig (verified, Akkadian lines); **Weidner 1923, *Politische Dokumente aus Kleinasien: die Staatsverträge in akkadischer Sprache aus dem Archiv von Boghazköi*** (BoSt 8; archive.org `boghazkistudie08leipuoft`, NOT_IN_COPYRIGHT, PDF + OCR, verified); Beckman 1999 (WAW 7) ©; Devecchi 2015 (*Trattati internazionali ittiti*) ©.
- *Benefit:* Bible HIGH / Soul MEDIUM. *Recommendation:* **translate Šattiwaza (51–52) + Šunaššura (41)** in `חוקים-ובריתות/`.

**2.6.2 Hittite-language treaties: the Bronze Tablet (CTH 106; Tudḫaliya IV – Kurunta of Tarḫuntašša), Ḫukkana of Ḫayaša (CTH 42), Kupanta-Kurunta (68), Alakšandu of Wilusa (76), Tuppi-Teššub of Amurru (62), Šaušgamuwa (105), the men of Išmeriga (133), the Kaška (137–139)**
- *Sizes:* Bronze Tablet: the original bronze of 1235 BCE, found in 1986, ≈ 350 lines, **perfectly preserved** (TLHdig `StBoTB 1.xml`, verified). CTH 42 = 604 ms lines; 68 = 1,030; 76 = 995; 133 (check counts; present).
- *Bible:*
  - Bronze Tablet: the border description ↔ **Num 34:1–12, Josh 15–19**; witnesses and curses ↔ Deut 28–30.
  - **CTH 42**: Ḫukkana must not approach his wife's sisters, his brother's wife or his cousins ("in Ḫatti it is a capital matter"); the cautionary tale of Mariya, executed for *looking* at a palace woman ↔ **Lev 18:8–18**, 2 Sam 11:2, Job 31:1.
  - **CTH 133** (Išmeriga): a rebellious town is to be destroyed with its people and cattle ↔ **Deut 13:13–19** (Berman 2011, "CTH 133 and the Hittite provenance of Deuteronomy 13"; debated against Levinson & Stackert).
  - CTH 62 / 68: the historical prologue ↔ Deut 1–3 (Berman 2013).
- *Base:* TLHdig (verified); Otten 1988 (StBoT Bh. 1) ©; Beckman 1999 ©; EIEOL lesson 70 (the Bronze Tablet, verified).
- *Benefit:* Bible HIGH / Soul MEDIUM. *Recommendation:* translate CTH 42 + 133 + the Bronze Tablet's prologue and borders.

### 2.7 Festivals, oracles, dreams (ranks 16, 19)

**Festivals** (KI.LAM CTH 627, 6,339 ms lines; AN.TAḪ.ŠUM CTH 604–625; *nuntarriyašḫa* 626; *ḫišuwa* 628, 9,148 ms lines; the *purulli* of Nerik; Zippalanda 635; Hattic songs in 733–746)
- These are enormous, repetitive protocols of royal cult: processions, breaking of breads, "the king drinks the god", singers of Kaneš singing in Hattic or Luwian, leopard-men, wrestling and racing.
- Bible: Lev 23, Num 28–29 (calendar logic); 2 Sam 6:5, 14 (dance and music before the god), typological.
- Bible LOW / Soul MEDIUM. *Recommendation:* at most a sampler (e.g. KI.LAM's procession, the *purulli* frame of Illuyanka).

**Oracles** (CTH 561–582: KIN lot oracles, bird oracles, extispicy, "Snake" oracles; tens of thousands of lines)
- Technical, abbreviated question-and-answer protocols. The investigations of a god's anger (e.g. the cause of the plague; the *ḫurkel* or perjury behind an illness) are a soul window.
- Bible: Num 27:21, 1 Sam 14:41 LXX, 28:6 (Urim and Thummim as binary lots), typological.
- MEDIUM / MEDIUM. *Recommendation:* low priority.

**Dreams and vows** (CTH 584, 585 Puduḫepa's great vow tablet, 590 dreams of the royal couple)
- Puduḫepa's dreams and promises to the gods for Ḫattušili's health.
- Bible: Num 30 (a husband and his wife's vows), Gen 28:20–22, 1 Sam 1:11, 1 Kgs 3:5.
- Mouton 2007, *Rêves hittites* ©. MEDIUM / HIGH. *Recommendation:* a selection.

### 2.8 Hurrian (other than the bilinguals above)
**Hurrian · Ur III (Tiš-atal of Urkiš, c. 2100) to the 13th c. · LLM risk VERY HIGH.**
- **The Mittani Letter** (EA 24; Tušratta to Amenḫotep III, c. 1360; ≈ 490 lines; the longest Hurrian text; in Berlin).
  - Marriage diplomacy (Tadu-Ḫeba). The Hurrian is understood mainly from context, with Wilhelm, Giorgieri and Dietrich & Mayer.
  - Bible: none direct; the Horites (Gen 14:6, 36:20–30, Deut 2:12, 22) are a debated identification.
  - LOW / MEDIUM.
- **Hurrian hymns from Ugarit** (h.6 to Nikkal, c. 1200, with musical notation): the oldest substantially preserved notated music. The text is barely understood. LOW / MEDIUM (soul: music), not translatable responsibly.
- **Tiš-atal foundation inscription** (Urkiš, c. 2100; ≈ 25 lines): the oldest Hurrian text, with a curse formula. Short; LOW / LOW-MED.
- **The Hurrian ritual corpus of Ḫattuša** (*itkalzi*, Kizzuwatna rites; CTH 774–791; > 10,000 ms lines). Not translatable beyond the Hittite rubrics.
- Tools: Wegner 2007 (*Hurritisch*), Richter 2012 (*BGH*), Wilhelm's grammar sketches; no open dictionary (reported).

### 2.9 Luwian
**2.9.1 Cuneiform Luwian (Bronze Age):**
- the Kizzuwatna rituals of Puriyanni (CTH 758), **Kuwattalla** (CTH 759–763, the largest), Zarpiya (757), Tunnawiya (Luwian spells);
- the **Ištanuwa songs** (CTH 771–772): Luwian festival songs, one famous line "when they came from steep Wilusa" (Watkins 1986; Wilusa = Ilios?).

TLHdig carries them (CTH 758–772, verified) and ACLT glosses them (Starke 1985, StBoT 30). Bible LOW / Soul MEDIUM. Meaning is often uncertain. *Recommendation:* skip, or a short Ištanuwa sampler.

**2.9.2 Hieroglyphic Luwian (Empire and Iron Age):**
- *Empire period:* Yalburt (Tudḫaliya IV's campaign against Lukka), the Südburg chamber (Šuppiluliuma II), Emirgazi.
- *Iron Age* (12th–7th c.):
  - **Karkamiš** (Katuwa; Yariri: "I was known for twelve languages …" and "the writing of the city, Phoenician, Assyrian, Aramaic");
  - **Tell Ahmar** (Hamiyata);
  - **Hama** (Urhilina, Uratami: Hamath; ↔ 2 Sam 8:9–10, 2 Kgs 18:34);
  - **Aleppo temple and Arsuz** (Taita and Suppiluliuma, kings of **Palistin / Walastin**; Hawkins 2009, 2011; Dinçol et al. 2015; the Philistine question);
  - **Karatepe** (Azatiwada, c. 700; HLuw–Phoenician bilingual, KAI 26). "Baal made me father and mother to the Danunians … where formerly a man feared to walk on the road, in my days a woman walks alone with her spindles." ↔ **Judg 5:6–7** (inverse), 1 Kgs 5:5, Mic 4:4; the Danunians ↔ Dan (Yadin 1965, debated);
  - **Çineköy** (Warika of Hiyawa, HLuw–Phoenician: "the king of Assur and all the house of Assur became father and mother to me"; Hiyawa = Que ↔ 1 Kgs 10:28–29);
  - **İvriz** (Warpalawa = Urballa of Tabal; the king before the grain-and-grape god);
  - **Tabal** (Topada, Sultanhan, Kululu; the **Kululu lead strips**: economic lists);
  - the **Assur lead letters** (seven private letters, 8th c.: daily life);
  - **Türkmen-Karahöyük 1** (Hartapu conquers "Muska" = Phrygia; Goedegebuure et al. 2020, *Anatolian Studies* 70).
- *Bible:* the Table of Nations, priority (2): **Gen 10:2–4** (Meshech = Mušku, Tubal = Tabal, Togarmah = Tegarama, Elishah = Alašiya) and 10:15 (Ḥet); the biblical "Hittites" = mostly these Syro-Anatolian states (Singer 2006, "The Hittites and the Bible revisited"; Collins 2007).
- *Base:* **ACLT** (verified via HTTP: "a pilot version … the Iron Age Luwian texts, most of which are included in … CHLI by J. D. Hawkins, as well as the cuneiform texts … StBoT 30"; glossaries; "direct citation is not recommended"; no licence stated); Hawkins 2000, *CHLI* I; Çambel 1999, *CHLI* II (Karatepe); **Hawkins & Weeden 2024, *CHLI* III** (De Gruyter, reported, paid); Payne 2012, *Iron Age Hieroglyphic Luwian Inscriptions* (WAW 29) ©; Yakubovich 2010 ©.
- *Feasibility:* the formulaic royal inscriptions are moderately understood; the Karatepe bilingual is the best control. The Phoenician side belongs to the Levant survey. LLM risk MED-HIGH.
- *Benefit:* Bible MED-HIGH (Gen 10 names) / Soul MEDIUM. *Recommendation:* **a selection**: Karatepe (with Çineköy) plus Karkamiš / Yariri, Tell Ahmar, Hama, Aleppo / Arsuz, Topada, Türkmen-Karahöyük and the Assur letters, as "the Hittites of the Bible".

### 2.10 Urartian
**Urartian (Hurro-Urartian family) · 9th–7th c. BCE (Išpuini c. 830 – Rusa II c. 640) · originals on rock, stelae, bronze and clay · ≈ 600 inscribed objects (Salvini, *CTU* I–V, 2008–2018).**
- *What it is:*
  - Royal building and campaign inscriptions in formulaic language: Argišti I's **Ḫorḫor annals** on the Van rock (the longest) and Sarduri II's annals;
  - the **Meher Kapısı** niche: Išpuini and Minua's list of sacrifices to the pantheon, so many bulls and sheep per god;
  - the Kelišin and Topzawa Urartian–Assyrian bilinguals (Musaṣir and Ḫaldi);
  - Rusa's **Keşiş Göl** ("I created a lake … vineyards, orchards");
  - clay tablets and bullae from Toprakkale, Karmir Blur and Bastam (letters, administration).
- *Bible:* **Gen 8:4** (the mountains of Ararat = Urartu); 2 Kgs 19:37 / Isa 37:38 (Sennacherib's sons flee to Ararat); Jer 51:27 (Ararat, Minni, Ashkenaz); Num 28–29 (an offering list keyed to deities, typological); Eccl 2:4–6.
- *Soul:* royal ideology of a mountain kingdom; water works.
- *Base:* **eCUT** (Electronic Corpus of Urartian Texts, `oracc.museum.upenn.edu/ecut/`; Christiansen and MOCCI, LMU; based on Salvini's *CTU*; lemmatised, with English translations and a glossary; **CC BY-SA 3.0** per the project page, reported). The LMU project page is live (verified). ORACC itself timed out and then failed TLS verification today; never disable verification, retry later.
- *Feasibility:* the language is only partly understood, but the formulae are clear and the Assyrian bilinguals help. Translate with eCUT's English as control; LLM risk HIGH outside formulae.
- *Benefit:* Bible MEDIUM / Soul MEDIUM. *Recommendation:* a short Ararat selection (Meher Kapısı, Kelišin, an annals excerpt, Keşiş Göl).

### 2.11 The first-millennium "minor" Anatolian languages and Phrygian
| Language | Corpus | Bible hook | Assessment |
|---|---|---|---|
| **Lydian** (Sardis, 8th–3rd c.) | ≈ 120 inscriptions, incl. a Lydian–Aramaic bilingual (funerary curse) and a few **poems** (assonance metre) | Lud (Gen 10:22; Isa 66:19; Ezek 27:10); **Gog** ↔ Gyges (Gugu of Luddi in Assurbanipal's annals; Ezek 38–39, debated) | Poorly understood; eDiAna (offline today); Gusmani 1964 ©. LOW / LOW-MED |
| **Lycian A / B** (5th–4th c.) | ≈ 200 inscriptions: tombs, the **Xanthos stele** (≈ 250 lines, Lycian A + a Lycian B poem), the **Letoon trilingual** (Lycian–Greek–Aramaic, 337 BCE: founding a cult, priest, annual sacrifice, curse) | none direct (the Letoon's Aramaic belongs to the Aramaic survey) | Moderately understood thanks to bilinguals; Melchert 2004 *Dictionary* ©; Melchert's online corpus PDF (UCLA page behind a CrowdSec bot wall today). LOW / LOW-MED |
| **Carian** (7th–4th c.) | ≈ 200 short texts (Egypt and Caria); deciphered 1980s–2000s | **2 Kgs 11:4, 19** (*ha-kari*, the royal guard = Carian mercenaries?, debated) | Very poorly understood; Adiego 2007 ©. LOW |
| **Sidetic, Pisidian** | a few dozen short texts | – | LOW |
| **Phrygian** (Old 8th–4th c.; New 1st–3rd c. CE) | ≈ 400 Old Phrygian (Midas City, Gordion graffiti), ≈ 120 New Phrygian curse formulas | **Meshech** = Mušku (Gen 10:2; Ezek 27:13); Midas = Mita of Mušku | Poor apart from formulae; Brixhe & Lejeune 1984; Obrador-Cursach 2020 (*The Phrygian Language*, Brill; OA status not checked, verify). LOW / LOW |
| **Palaic** (Bronze Age) | ≈ 600 ms lines in rituals for Zaparwa (CTH 750–754, TLHdig verified) | – | Very poor. LOW |
| **Hattic** (Bronze Age substrate) | several thousand ms lines in festivals and bilinguals (CTH 725–746, TLHdig verified) | (the Moon that Fell, §2.4.4) | Isolate, very poor; only bilinguals usable. LOW |

---

## 3. Also considered

- **Hittite letters** (Maşat, Ortaköy, the royal correspondence; Hoffner 2009 WAW 15): soul-rich (frontline worries, the queen's letters), Bible-weak. A later sampler.
- **Royal correspondence with Egypt in Akkadian** (Ramesses II and Puduḫepa, "my sister"; Edel 1994): soul MED-HIGH; the Akkadian is in-domain. Hand over to the Mesopotamian list.
- **Old Assyrian letters from Kaneš / Kültepe** (Akkadian, 20th–18th c., c. 23,000 tablets; merchants' wives such as Lamassī): located in Anatolia but Akkadian. They belong with `קולות-היום-יום/` (Michel 2020, *Women of Assur and Kanesh*, WAW 42).
- **Cult inventories** (CTH 501–530) and **land grants**: administrative, LOW.
- **Madduwatta, the Tawagalawa letter, the Milawata letter, the Ahhiyawa texts:** history (Greeks, Troy). Bible LOW; Gen 10 Javan / Elishah only.
- **The Hittite "Song of Gilgameš" and Atraḫasis fragments:** see §2.4.7.
- **Šapinuwa (Ortaköy) archive, Kayalıpınar (Šamuḫa), Oymaağaç (Nerik), Büklükale:** mostly unpublished or partly published; check in a future round.
- **"Kalašmaic"** (2023, a new Anatolian language in a Boğazköy cult text; reported): too small, not yet edited.
- **Hurrian hymns of Ugarit, the Mittani letter, Tiš-atal:** see §2.8 (understanding too weak).
- **Luwian Kuwattalla rituals, the Ištanuwa songs:** see §2.9.1.
- **Hittite festival corpus as a whole:** too large and repetitive (§2.7).
- **Hoaxes, forgeries and fringe readings to avoid:**
  - **"Beyköy 2"** (published 2017 by Zangger and Woudhuizen from Mellaart's papers; judged a Mellaart forgery);
  - **Mellaart's Dorak treasure** and his "Çatalhöyük murals" drawings (forgeries);
  - "Luwian" readings of the **Phaistos disc** (fringe);
  - the **"Luwian civilisation"** of Zangger (popular theory, not mainstream);
  - apologetic claims that the Hittite treaty form "proves" a 13th-century Moses (Kitchen's position is scholarly, but popular versions overstate it; present the debate);
  - any "Hittite" texts on Noah's Ark / Ararat circulated by ark-hunter sites (none genuine).
- **Late literary constructions:** none comparable to Ossian in this region.

---

## 4. Access notes (all tested 2026-10-21 from this cloud session)

| Host | Result | Notes |
|---|---|---|
| `zenodo.org` | **200, works** | API `https://zenodo.org/api/records?q=TLHdig` (verified); file `https://zenodo.org/records/20328284/files/TLHbasisONLINE25_1_ZENODO_Beta_03.zip?download=1` (74,449,198 bytes). The transfer was cut once at 25 MB; `curl -C -` resumed it. Rate limit 30 requests/min. **The essential host for Hittite.** |
| `hethport.net` (new HPM address), `www.hethiter.net` → 301 to it | **503 maintenance** (verified page text) | "temporarily offline for urgent security updates … CERT-EU Security Advisory 2026-018". Retry later. |
| `www.hethport.uni-wuerzburg.de`, `hethport.uni-wuerzburg.de` | HTTPS: connection reset by the proxy; HTTP: 503 | The old HPM address, plus the same outage. |
| `smaw.de.dariah.eu` (HPM/CHiL/TLHdig mirror) | HTTPS reset (000); WebFetch 503 | – |
| `wres-hatti.adwudlit.uni-mainz.de` (CHiL, TLHdig) | 401 | Needs a login. |
| `ediana.gwi.uni-muenchen.de` | 302 → LMU emergency maintenance page | LMU took PHP sites offline (CVE-2026-109618/9); reachable only inside the Munich network. |
| `titus.uni-frankfurt.de` | 503 over HTTP; HTTPS tunnel closed | (TITUS has old Hittite and Luwian e-texts.) |
| `oracc.museum.upenn.edu` (eCUT) | time-outs, then "SSL certificate problem: unable to get local issuer certificate" | Do not disable TLS verification; retry. (ORACC is already in `domains.txt`.) |
| `cdli.earth` | 503 | (relevant for Akkadian treaty copies) |
| `web-corpora.net` (ACLT) | **HTTP 200** (`http://web-corpora.net/LuwianCorpus/search/`, verified); HTTPS reset by the proxy | Plain HTTP goes out directly in this environment. |
| `isac.uchicago.edu` | 200 | The new site; old `/sites/default/files/...chd*.pdf` links 301 to unrelated pages. |
| `isac-assets.s3.amazonaws.com` | root 403; **files 200** | CHD Š `isac-publications/chd_s.pdf` (8.05 MB), P `chd_p.pdf` (3.78 MB), fascicles `chds1–6.pdf` (verified by range request). Linked from `https://isac.uchicago.edu/publications/hittite-dictionary-volume-s` (and `-p`, `-l-n`). |
| `archive.org` | 200 | Verified items, full view: `codehittiteprove01hroz` (Hrozný 1922); `hethitischegeset0023hitt` (Zimmern & Friedrich 1922); `ausdemhethitisch0024frie` (Friedrich 1925); `hethitischekeils00hroz` and `boghazkistudie03leipuoft` (Hrozný 1919); `boghazkistudie08leipuoft` (Weidner 1923, Akkadian treaties; "NOT_IN_COPYRIGHT"); `boghazkistudie01/04–07leipuoft`; KBo 1–6 hand copies (`keilschrifttexte-aus-boghazkoi-...`); `kleinasiatischef0000unse` (KlF 1, 1930, with Götze's Pestgebete; open PDF + OCR). Avoid the DLI (`in.ernet.dli...`) and individual "Bomhard" uploads of post-1930 books. |
| `web.archive.org` | HTTPS reset; HTTP 403 | Not usable today. |
| `lrc.la.utexas.edu` (EIEOL "Hittite Online") | 200 | 10 lessons, glossed excerpts: 10 Anitta, 20 Telipinu myth, 30 Telipinu Proclamation, 40 Laws, 50 Annals of Muršili, 60 Apology, 70 Bronze Tablet treaty, 80 Plague Prayer, 90 Tunnawi, 100 KI.LAM (verified titles). © UT Austin. |
| `www.sbl-site.org` | root 403 (Cloudflare); some PDFs 200 | `wp-content/uploads/2024/11/Hoffner_printerfile_SBL.pdf` = full WAW 15 (verified, 468 pp., "© 2009 SBL, all rights reserved"); `Beckman_Ahhiyawa.pdf` reported. Probably SBL's ICI repository (meant for lower-GDP countries): **reference only, lead to decide**. |
| `www.fulcrum.org` | 200 | Singer, *Hittite Prayers*: "You don't have access to this book" (paid). |
| `www.en.ag.geschichte.uni-muenchen.de` | 200 | eCUT project page (verified text). |
| `riviste.fupress.net` | 200 | Firenze UP, CC BY articles (e.g. a new edition of the Hittite hymn to Adad, CTH 313, *Asia Anteriore Antica* 6, 2024; reported). |
| `linguistics.ucla.edu/people/Melchert/` | 200 but a CrowdSec bot wall | Melchert's free PDFs (Lycian corpus, *Cuneiform Luvian Lexicon*) not reachable by script. |
| `brill.com` title pages | 403 | – |
| `library.oapen.org` REST API | "Your address is not allowed to access this API" | – |
| `www.academia.edu` | 403 | – |

**TLHdig details** (verified):
- **Structure:** `TLHbasisONLINE25_1_ZENODO_Beta_03/CTH <n>_XML_<project>/<tablet>.xml`. The project tags match HPM's editing projects: MYTH, GEBET (prayers), BESRIT (incantation rituals), SVH (treaties), HAnn (annals), HDivT (divination), HFR (festivals), LUWGR, luw, KULTINV, ARINNA, PTAC and TLH (general).
- **Size:** 663 CTH numbers; ≥ 369,000 manuscript lines in the top-level CTH folders.
- **Markup:** each `<lb>` has `lnr` (e.g. "obv. 1", "Vs. 2a"), `lg` and `cu` (Unicode cuneiform). Each `<w>` has `trans` plus `mrp1…n` candidate analyses with German glosses. Damage is marked by `<del_in/>/<del_fin/>` (brackets) and `<laes_in/>/<laes_fin/>` (half brackets).
- **Rendering test:** a 30-line extractor (`scripts/tlh2txt.py` in the scratchpad) printed clean transliterations. For example KBo 3.22 obv. 1–2: "⸢{M}⸣a-ni-it-ta DUMU {M}pí-it-ḫa-a+na LUGAL {URU}ku-uš-ša-ra QÍ-B[Í-M]A / ne-pí-iš-za-aš-ta {D}IŠKUR-un-ni a-aš-šu-uš e-eš-ta".
- **Main manuscripts confirmed present:** KUB 13.4 (temple personnel), KUB 14.8 (2nd Plague Prayer), KBo 3.7 (Illuyanka), KUB 17.10 + KBo 55.8 (Telipinu), KUB 1.1+ (Apology), KUB 33.120 in `KBo 52.10+` (Kumarbi), KUB 33.92–98 in `KBo 26.58+` (Ullikummi), KUB 9.32+ (Ašḫella), KUB 9.31 (Uḫḫamuwa / Zarpiya, nested under CTH 999), KBo 15.1 (Pulisa), KBo 5.1 (Papanikri), KUB 7.41 (infernal deities), KBo 6.34 in `KBo 53.33+` (Military Oath), KBo 22.2 (Zalpa), KUB 24.8 (Appu), KUB 24.7 (Sun-god and Cow, under CTH 717), KUB 36.35 (Elkunirša), KUB 30.10 (Kantuzili), KUB 17.21+ (Arnuwanda), KBo 3.22 (Anitta), KUB 1.16 in `KUB 40.65+` (Testament), KBo 3.1 in `KBo 12.7+` (Telipinu Proclamation), KBo 6.2 / 6.3 in `KBo 22.62+ / 22.63+` (Laws), KBo 32.14 (Song of Release), KBo 1.1+ (Šattiwaza), KBo 1.7 in `KBo 28.115+` (Ramesses treaty), KUB 21.1 in `KUB 19.6+` (Alakšandu), StBoTB 1 (Bronze Tablet).
- **Licence:** CC BY 4.0 (Zenodo metadata). It can be committed with attribution; record it in `sources-registry.md` and `fetch-recipes.tsv` (the zip itself should stay git-ignored for size).
- A related open item: Yüce 2026, "HitBench" (Zenodo 23363469, CC BY 4.0), a Hittite sign-recognition benchmark built on TLHdig (verified record).

**Hosts a future Anatolian session needs in its allowlist** (beyond the current `domains.txt`): `zenodo.org`, `hethport.net` (and `www.hethiter.net`, `www.hethport.uni-wuerzburg.de`, `smaw.de.dariah.eu`), `ediana.gwi.uni-muenchen.de`, `web-corpora.net`, `isac.uchicago.edu`, `lrc.la.utexas.edu`, `www.sbl-site.org`, `titus.uni-frankfurt.de`, `www.en.ag.geschichte.uni-muenchen.de`, `riviste.fupress.net`. `isac-assets.s3.amazonaws.com`, `archive.org` and `oracc.museum.upenn.edu` are already listed.

**What a Hittite project would need in the guidelines:**
- a new grammar-mapping section (like §6.3), covering:
  - the quotative particle *-wa(r)-* for direct speech;
  - the sentence-initial connectives *nu / ta / šu*;
  - the local particles *-kan / -šan / -apa*;
  - the reflexive *-za*;
  - Sumerograms and Akkadograms with Hittite phonetic complements;
  - the imperfective *-ške-*;
  - the casuistic *takku* "if" of the Laws (↔ Hebrew *ki / im*).
- a procedure for building a composite from the TLHdig manuscripts (choose the oldest or best manuscript as the base and record duplicates' variants), until the HPM editions are reachable again.

**LLM reliability, honestly:**
| Language | Rating | Why |
|---|---|---|
| **Hittite** | **MEDIUM** (narrative, prayers, laws, treaties: MED-GOOD; rituals and festivals: MED-LOW) | IE grammar well described; CHD covers L–Š with English; TLHdig gives German glosses; the famous texts have several modern translations to check. The risks: local particles and aspect; rare and technical ritual words (many are untranslated in all editions); anchoring on remembered English translations (form your reading before consulting them, guidelines §3); restoring broken lines from duplicates. |
| Akkadian of Ḫattuša | GOOD | The folder's existing competence; peripheral Akkadian with Hittite interference (watch the logograms and Hittite word order). |
| **Hurrian** | **VERY POOR** | Ergative-agglutinative isolate (with Urartian); large parts of the lexicon unknown; specialists disagree. Never translate independently: only through the Hittite column of the bilinguals or a published translation, with every word marked as dependent. |
| Hattic, Palaic, Kalašmaic | VERY POOR | Hattic is an isolate; bilinguals only. |
| Cuneiform Luwian | POOR-MEDIUM | Small corpus, many incantation words obscure; ACLT glosses. |
| Hieroglyphic Luwian | MEDIUM-POOR | The royal formulae are understood; sign readings follow CHLI conventions; Karatepe is a bilingual control. |
| Urartian | POOR-MEDIUM | Formulaic royal inscriptions with eCUT English; letters and administration hard. |
| Lydian, Lycian, Carian, Phrygian, Sidetic | POOR / VERY POOR | Small corpora; uncertain lexica. |

---

## 5. Sources consulted

**Primary data and access (fetched today):**
- TLHdig Beta 0.3 on Zenodo: https://zenodo.org/records/20328284 (API `https://zenodo.org/api/records?q=TLHdig`); HitBench https://zenodo.org/records/23363469
- TLHdig Text-Fabric conversion (unofficial): https://github.com/alexsosn/TLHdig-TF (from search)
- HPM maintenance pages: https://hethport.net/ ; old address https://www.hethport.uni-wuerzburg.de/ ; the Würzburg project page https://www.phil.uni-wuerzburg.de/altorientalistik/forschung/laufende-forschungsprojekte/hethitologie-portal-mainz/ (from search)
- CHiL: https://smaw.de.dariah.eu/CHiL (from search; down today); CTH catalogue https://www.hethport.uni-wuerzburg.de/CTH/
- LMU maintenance page (eDiAna): https://www.emergency.gwi.uni-muenchen.de/php-wartungsseite.html
- CHD: https://isac.uchicago.edu/publications/hittite-dictionary-volume-s , https://isac.uchicago.edu/publications/hittite-dictionary-volume-p , https://isac.uchicago.edu/publications/hittite-dictionary-volume-l-n ; PDFs on https://isac-assets.s3.amazonaws.com/isac-publications/
- ACLT: http://web-corpora.net/LuwianCorpus/search/ (start page `common-search-start-en.html`)
- eCUT: https://www.en.ag.geschichte.uni-muenchen.de/research/ecut/index.html ; https://oracc.museum.upenn.edu/ecut/ (down today)
- EIEOL Hittite Online: https://lrc.la.utexas.edu/eieol/hitol (lessons /10 … /100)
- SBL: https://www.sbl-site.org/wp-content/uploads/2024/11/Hoffner_printerfile_SBL.pdf ; https://www.sbl-site.org/wp-content/uploads/2024/11/Beckman_Ahhiyawa.pdf (from search); ICI repository https://www.sbl-site.org/community/international-cooperation-initiative/online-book-repository/ (403 to scripts)
- Fulcrum (Singer 2002): https://www.fulcrum.org/concern/monographs/5h73pw54g
- archive.org items listed in §4 (via `https://archive.org/advancedsearch.php` and `https://archive.org/metadata/<id>`)
- Firenze UP: https://riviste.fupress.net/index.php/asiana/article/view/2827

**Hebrew translations (from search):**
- NLI record of Singer 2009: https://www.nli.org.il/en/books/NNL_ALEPH990026467910205171/NLI ; Bialik catalogue https://bialik-publishing.co.il/index.php?cs=1395&dir=site&op=item&page=catalog ; Haaretz review PDF https://www.bialik-publishing.co.il/files//catalog/pdf/Hittities_Review.pdf
- Hebrew Wikipedia, Itamar Singer: https://he.wikipedia.org/wiki/איתמר_זינגר
- Neufeld 1951 (from a search result; verify the bibliographic details)

**Other search results relied on:**
- AWOL on TLHdig: http://ancientworldonline.blogspot.com/2023/10/tlhdig-thesaurus-linguarum-hethaeorum.html
- Marburg TLHdig and "Hymnen und Gebete" projects: https://www.uni-marburg.de/de/fb10/iksl/faecher/vergleichende-sprachwissenschaft/forschung/tlhdig , …/abgeschlossene-projekte/hymnen-und-gebete (reset today)
- CHLI III (De Gruyter, 2024): https://www.vitalsource.com/products/corpus-of-hieroglyphic-luwian-inscriptions-john-david-hawkins-v9783110778991
- Mnamon (HLuw resources): https://mnamon.sns.it/index.php?page=Risorse&id=46&lang=en
- eCUT on STARS / ORACC: https://stars.library.ucf.edu/ancientneareast/25 ; https://oracc.museum.upenn.edu/ecut/Q008271

**Scholarly literature named above (from my knowledge; standard references):**
- Malamat 1955 (*VT* 5); Milgrom 1970, 1991; Wright 1987 (SBLDS 101); Janowski & Wilhelm 1993 (OBO 129); Zatelli 1998 (*VT* 48); Feder 2011 (WAWSup 2).
- Hoffner 1965 (*RHA* 23), 1966 (*JBL* 85), 1967 (*JBL* 86), 1975, 1997 (DMOA 23), 1998 (WAW 2), 2009 (WAW 15).
- Beckman 1982 (*JANES* 14), 1983 (StBoT 29), 1999 (WAW 7), 2019; Singer 2002 (WAW 11), 2006, 2009 (Hebrew); Miller 2004 (StBoT 46), 2013 (WAW 31); Taggar-Cohen 2006 (THeth 26), 2011 (*VT* 61).
- Mendenhall 1954 (*BA* 17); McCarthy 1963/1978; Weinfeld 1972, 1983; Kitchen & Lawrence 2012; Berman 2011 (*JBL* 130), 2013 (*JBL* 132); Levinson & Stackert 2012 (*JAJ* 3).
- Wolf 1967; McCarter 1980 (*JBL* 99); Knapp 2015.
- von Dassow 2013 (*JCS* 65); Neu 1974 (StBoT 18), 1996 (StBoT 32); Otten 1973 (StBoT 17), 1981 (StBoT 24), 1988 (StBoT Bh. 1); Holland & Zorman 2007; Hoffmann 1984 (THeth 11); Oettinger 1976 (StBoT 22); Siegelová 1971 (StBoT 14); Christiansen 2006 (StBoT 48); Strauß 2006; Kassian et al. 2002 (AOAT 288); Mouton 2007.
- Güterbock 1948 (*AJA* 52), 1951–52 (*JCS* 5–6); Hendel 1987 (*JBL* 106); López-Ruiz 2010; Bachvarova 2016; Rutherford 2001; Corti 2007; Watkins 1986, 1995.
- Collins 2007; Haas 1994, 2006; Hawkins 2000, 2009, 2011; Çambel 1999; Payne 2012 (WAW 29); Yakubovich 2010; Dinçol et al. 2015; Goedegebuure et al. 2020; Yadin 1965.
- Salvini 2008–2018; Wegner 2007; Richter 2012; Melchert 1993, 2004; Adiego 2007; Gusmani 1964; Obrador-Cursach 2020; Hoffner & Melchert 2008; Kloekhorst 2008.
