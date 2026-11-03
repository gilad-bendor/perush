# The program's runs (the lead, 2026-11-02). Each run: one coordinator, one track (a corpus or tool that two parallel
# runs must not share). prio = the best candidate score in the run (+10 when the run completes a partly translated text).
# Fields: rid, prio, track, title, items (candidate ids), corpus, base, size, newlang, completes, after (rids that must be
# in an earlier round), large (the lead's decision on a LARGE text, for the user's approval).
R = []
def run(rid, prio, track, title, items, corpus, base, size, newlang="", completes="", after=(), large="", last=False):
    R.append(dict(rid=rid, prio=prio, track=track, title=title, items=items, corpus=corpus, base=base, size=size,
                  newlang=newlang, completes=completes, after=list(after), large=large, last=last))

# ---------------- Sumerian (ETCSL; the local zip; the Sumerian tools) ----------------
run("SU1", 87, "sumer", "The Old Babylonian school canon: the Decad's eight texts not yet translated (Šulgi A, Lipit-Eštar A, Inana B, Enlil A, the Keš hymn, Enki's Journey, Inana and Ebiḫ, Nungal A) and the Tetrad (Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A)",
    "sumer-01, sumer-16", "a new corpus of the school canon (the coordinator names it); the Song of the Hoe and Bilgameš and Ḫuwawa A are embedded or pointed to", "ETCSL (local zip)", "1,523 lines", completes="the Decad (the Song of the Hoe done; Bilgameš and Ḫuwawa A in Round 6)")
run("SU2", 79, "sumer", "Ur III kingship: the five long Šulgi hymns (B, C, D, E, X), the Death of Ur-Namma, the Sumerian King List whole (with the Rulers of Lagaš)",
    "sumer-09, sumer-12, sumer-15", "`אגדות-מלכים/` (new projects); the flood references' King List excerpt kept identical by script", "ETCSL", "≈ 2,260 lines", completes="the Sumerian King List (an excerpt in the flood references)")
run("SU3", 77, "sumer", "Sumerian myths of the gods: Lugal-e and Angim (Ninurta's two epics), Inana and Enki, Enlil and Ninlil, Enlil and Sud",
    "sumer-02, sumer-08, sumer-04", "a new corpus of Sumerian myths (the coordinator names it)", "ETCSL", "1,859 lines")
run("SU4", 77, "sumer", "Inana: Enheduana's Inana C and the Temple Hymns, Iddin-Dagan A, the Dumuzid–Inana songs (27 songs)",
    "sumer-03, sumer-10, sumer-05", "a new corpus of Inana's hymns and songs, or `קולות-היום-יום/` (the coordinator decides)", "ETCSL", "2,258 lines")
run("SU5", 77, "sumer", "Sumerian companions II: the laments for Nibru and Eridug, the Dumuzid cycle completed (Dumuzid and Ĝeštin-ana, Inana and Bilulu), Lu-diĝira's two elegies, A Man and his God, proverb collections 4, 5, 8, 13",
    "sumer-11, sumer-13, sumer-17, sumer-18, sumer-22", "`קינות-על-ערים/`, `העולם-התחתון/`, `קולות-היום-יום/`, `ספרות-החכמה-והצדיק-הסובל/` (one coordinator, one text at a time)", "ETCSL", "1,577 lines", completes="the Dumuzid cycle")
run("SU6", 71, "sumer", "Lagaš: the hymns of divine justice (Nanše A, Ḫendursaĝa A), Gudea's statue inscriptions, the Pre-Sargonic Lagaš inscriptions (Enmetena's cone, Uru-inimgina's reforms and lament)",
    "sumer-06, sumer-19, sumer-07", "`בניין-המקדש/` (its scope widens to Lagaš: retitle)", "ETCSL; CDLI composites (RIME 1, 3/1)", "464 lines + 2,277 short case lines")
run("SU7", 66, "sumer", "Sumerian myths II: Inana and Šu-kale-tuda, Nanna-Suen's Journey to Nibru, the Marriage of Martu, the Heron and the Turtle and the Home of the Fish",
    "sumer-20, sumer-21, sumer-24, sumer-23", "the Sumerian myths corpus of SU3", "ETCSL", "1,087 lines", after=["SU3"])

# ---------------- Akkadian (eBL, SEAL, CDLI) ----------------
run("AK1", 84, "akkad-kings", "Epics of gods and kings: Anzû (all versions), the OB legends of the kings of Akkade (Sargon the Conquering Hero, Sargon in Foreign Lands …), the OB royal epics (Zimrī-Lîm, Bazi, Gulkišar), the statue of Idrimi",
    "akkad-01, akkad-12, akkad-27, akkad-23", "`אגדות-מלכים/` (the Akkade cycle completed); Anzû a new project (the coordinator decides its corpus)", "eBL; SEAL; CDLI", "1,629 lines", completes="the Akkade cycle (the Sargon Birth Legend and the Cuthaean Legend done)")
run("AK2", 72, "akkad-prayer", "Old Babylonian hymns and prayers: the hymns to Ištar (Agušaya A + B, the Louvre hymn …), Papulegara, the hymns to Hammurabi, the Akkadian 'Man and his God', the OB laments",
    "akkad-02, akkad-15", "a new corpus of Akkadian hymns and prayers (the coordinator names it)", "SEAL", "1,928 lines")
run("AK3", 69, "akkad-prayer", "Standard Babylonian hymns and prayers: the šuʾila prayers (the whole eBL corpus), the Great Hymns to Gula, the Great Prayers to Nabû and Ištar, the theological hymns, the Elevation of Babylon",
    "akkad-03, akkad-08, akkad-10, akkad-11, akkad-28", "the hymns-and-prayers corpus of AK2", "eBL; Rozzi 2024 (CC BY 4.0)", "2,768 lines", after=["AK2"])
run("AK4", 69, "akkad-magic", "The pre-canonical incantations (Old Akkadian, Old Assyrian, OB: dogs, scorpions, snakes, birth, the evil eye …)",
    "akkad-04", "`כשפים-ולחשים/` (a new project); the love incantations of `קולות-היום-יום/1-…` pointed to", "SEAL", "2,608 lines")
run("AK5", 69, "akkad-wisdom", "Wisdom, humour and divine love: the OB and MB wisdom and humour texts (A Father and his Son, the Scholars of Uruk, At the Cleaner's …), the Divine Love Lyrics of Babylon",
    "akkad-16, akkad-21", "`ספרות-החכמה-והצדיק-הסובל/` and `קולות-היום-יום/` (the coordinator decides)", "SEAL; eBL", "≈ 2,520 lines")
run("AK6", 68, "akkad-kings", "The royal inscriptions of the kings of Akkade (Sargon, Rimuš, Maništušu, Narām-Sîn: the Old Akkadian originals and the OB copies)",
    "akkad-13", "`אגדות-מלכים/` (beside the legends of AK1)", "CDLI (with English line by line)", "4,546 short case lines, 6,065 words", after=["AK1"])
run("AK7", 66, "akkad-magic", "Ritual and exorcism: Bīt mēseri (with the seven sages), Marduk's Address to the Demons, the akītu (New Year) ritual of Babylon",
    "akkad-05, akkad-09, akkad-07", "`כשפים-ולחשים/`", "eBL; SEAL", "1,423 lines", after=["AK4"])
run("AK8", 66, "akkad-omen", "Omens: Šumma ālu, the tablets on human behaviour (T. 80–120, as edited on eBL), and the Venus section of Enūma Anu Enlil (EAE 55–57)",
    "akkad-06, akkad-26", "a new corpus of omens (the coordinator names it)", "eBL (Project Ālu Geneva)", "2,125 lines", large="Šumma ālu (≈ 120 tablets) and Enūma Anu Enlil are LARGE and only partly edited: the lead chose their self-contained parts on eBL (T. 80–120; EAE 55–57), not the wholes")
run("AK9", 63, "akkad-letters", "The Amarna letters, the great kings' correspondence (EA 1–44: Egypt with Babylon, Mittani, Assyria, Ḫatti, Alašiya)",
    "akkad-14", "a new corpus of letters (the coordinator names it)", "CDLI (transliteration); Knudtzon 1915 (PD)", "2,695 lines", large="the Amarna archive (EA 1–382, 13,232 lines) is LARGE: the lead chose its self-contained first part, the great kings' letters (EA 1–44), not the whole")

# ---------------- Egypt (AED-TEI) ----------------
run("EG1", 91, "egypt", "The Pyramid Texts of Unas, the whole pyramid (≈ 225 spells: burial chamber, antechamber, corridor)",
    "egypt-01", "`חכמה-ובריאה-במצרים/` (a new project; project 2's PT spells embedded or pointed to)", "AED-TEI (144 Unas records + later copies of the rest); Allen 2013 as the check", "≈ 1,630 lines", completes="the Pyramid Text spells of project 2")
run("EG2", 76, "egypt", "The Instructions, each whole papyrus: papyrus Prisse (Kagemni's end, Ptahhotep), papyrus Sallier II (Amenemhat, the Satire of the Trades, the Hymn to the Nile), Any, Neferti, Khakheperreseneb",
    "egypt-02, egypt-07, egypt-08, egypt-06", "`חכמה-ובריאה-במצרים/`", "AED-TEI", "618 papyrus lines (≈ 10,500 words)")
run("EG3", 75, "egypt", "The great discourses and a real archive: the Eloquent Peasant, the Dialogue of a Man and his Ba, the Admonitions of Ipuwer; the Late Ramesside Letters",
    "egypt-03, egypt-04, egypt-05, egypt-17", "`חכמה-ובריאה-במצרים/`", "AED-TEI", "≈ 2,000 papyrus lines (≈ 27,000 words)")
run("EG4", 74, "egypt", "Papyrus Bremner-Rhind whole (the Songs of Isis and Nephthys, Bringing out Sokar, the Overthrowing of Apophis); the Victory Stela of Piye; the Heqanakht papers",
    "egypt-16, egypt-20, egypt-18", "`חכמה-ובריאה-במצרים/`; the fifth-day dossier's Apophis excerpts kept identical by script", "AED-TEI", "1,215 lines (≈ 18,600 words)", completes="the Apophis excerpts of the fifth-day dossier")
run("EG5", 70, "egypt", "Songs and hymns: the New Kingdom love songs (all collections), the Harpers' Songs, papyrus Chester Beatty IV (hymns to Amun-Re; the praise of the ancient writers), the Great Hymn to the Aten with the Amarna hymns",
    "egypt-11, egypt-12, egypt-14, egypt-13", "`חכמה-ובריאה-במצרים/`", "AED-TEI", "≈ 1,000 lines (≈ 12,000 words)")
run("EG6", 68, "egypt", "Tales and letters of the New Kingdom: the Contendings of Horus and Seth, the Report of Wenamun, the Doomed Prince and the other Late Egyptian tales, the Kadesh Poem, the Satirical Letter of Hori",
    "egypt-09, egypt-10, egypt-21, egypt-15, egypt-19", "`חכמה-ובריאה-במצרים/`", "AED-TEI", "≈ 900 lines (≈ 19,000 words)")
run("EG7", 68, "egypt", "Papyrus Ebers whole (the remedies, the incantations, the treatise on the heart and its vessels)",
    "egypt-22", "`חכמה-ובריאה-במצרים/` (or a new corpus of medicine)", "AED-TEI", "2,340 lines (25,733 words)")

# ---------------- Anatolia (HPM, TLHdig; hittite_tools.py) ----------------
run("HI1", 80, "hittite", "The Hittite myths completed: the vanishing-god myths beside Telipinu (the Sun-god, the Storm-god's *mugawar* …), the rest of the Kumarbi cycle (LAMMA, Silver), the Hittite Gilgameš",
    "anatolia-21, anatolia-20, anatolia-23", "`מיתוסים-חתיים-וחוריים/`; the Hittite Gilgameš pointed to from `אפוס-גילגמש/`", "HPM; TLHdig", "1,704 clauses", completes="the vanishing-god myths, the Kumarbi cycle, the Gilgameš tradition")
run("HI2", 73, "hittite", "The Hittite prayers: Muršili II's (the Plague Prayers …), the Middle Hittite prayers to the Sun-deities (Kantuzili, Arnuwanda and Ašmunikal), the later royal prayers (Muwatalli II, Puduḫepa)",
    "anatolia-01, anatolia-02, anatolia-03", "a new corpus of Hittite prayers (the coordinator names it)", "HPM", "2,639 clauses")
run("HI3", 72, "hittite", "Rites of kingship and the dead: the Old Hittite rituals for the royal couple, the royal funerary ritual *šalliš waštaiš* (with the journey of the soul), the rites of the deep gods and the new temple, the oracle inquiry into the deity of Arušna",
    "anatolia-19, anatolia-14, anatolia-17, anatolia-24", "`טקסי-שילוח-וטיהור/` (its scope widens: retitle)", "HPM; TLHdig", "≈ 2,460 clauses")
run("HI4", 71, "hittite", "The Hittite kings speak (I): Anitta, the Testament of Ḫattušili I, his Annals and the Palace Chronicle, the Proclamation of Telipinu, the Apology of Ḫattušili III",
    "anatolia-06, anatolia-05, anatolia-04", "a new corpus of Hittite historical texts (our TLHdig composites)", "TLHdig composites (HPM has no historical editions)", "≈ 1,080 lines")
run("HI5", 67, "hittite", "Oaths and duties: the Military Oaths, the royal instructions (the border governor, the bodyguard, the mayor of Ḫattuša …)",
    "anatolia-12, anatolia-13", "`חוקים-ובריתות/`", "HPM; TLHdig", "≈ 1,190 lines")
run("HI6", 64, "hittite", "Healing and purification: the 'Old Women's' rituals (Maštigga …), the Kizzuwatna purification and birth rites (Papanikri, Ammiḫatna …), more sending-away rituals (Zarpiya, Ambazzi against slander …)",
    "anatolia-15, anatolia-16, anatolia-18", "`טקסי-שילוח-וטיהור/`", "HPM", "≈ 2,540 clauses", after=["HI3"])
run("HI7", 66, "luwian", "The Neo-Hittite kings speak: the Hieroglyphic Luwian inscriptions of Karatepe (Azatiwada, with Çineköy) and Karkamiš (Katuwa, Yariri, Kamani …)",
    "anatolia-26, anatolia-27", "a new corpus (Hieroglyphic Luwian)", "eDiAna remake (morpheme-glossed)", "≈ 1,160 §§ (≈ 4,350 words)", newlang="Hieroglyphic Luwian")
run("HI8", 62, "hittite", "The Hittite kings speak (II): Muršili II's own dossier (the Tawananna), the Ten-Year Annals, the Deeds of Šuppiluliuma I",
    "anatolia-08, anatolia-07, anatolia-09", "the historical corpus of HI4", "TLHdig composites", "≈ 1,530 lines", after=["HI4"])
run("HI9", 62, "hittite", "The treaties of Ḫattuša: the Akkadian treaties (Šattiwaza, Šunaššura …) and the Hittite vassal treaties (Ḫuqqana, Tuppi-Teššub …)",
    "anatolia-10, anatolia-11", "`חוקים-ובריתות/`", "HPM", "≈ 2,620 clauses", after=["HI5"])

# ---------------- The Levant and Arabia ----------------
run("LE1", 76, "ugarit", "The Ugaritic corpus completed: the remaining myths, hymns and charms, the divination and horse-medicine texts, the remaining well-preserved rituals, the letters (51)",
    "levant-arabia-04, levant-arabia-12, levant-arabia-11, levant-arabia-03", "`מיתוסים-אוגריתיים/`", "CUC (Zenodo); EUPT", "2,120 lines", completes="the Ugaritic corpus")
run("LE2", 75, "aramaic", "Aramaic: the Words of Ahiqar (the Elephantine papyrus whole) and the Elephantine family and community archives",
    "levant-arabia-01, levant-arabia-07", "a new corpus of Aramaic (the coordinator names it)", "Cowley 1923 (PD; read from the page images); DEAPS consulted; CAL", "943 lines", newlang="Imperial Aramaic")
run("LE3", 61, "stone", "Words in stone II: the Phoenician royal and funerary inscriptions (Byblos, Sidon: Eshmunazar, Tabnit …) and the Old Aramaic royal inscriptions (Zakkur, Hadad, Panamuwa, Bar-Rakib, Nerab, Taymāʾ; Tell Fekheriye and Sefire are run LE6, the last round)",
    "levant-arabia-06, levant-arabia-05", "`מילים-באבן/`", "Lidzbarski, Cooke (PD); KAI", "≈ 380 lines", after=["LE2"])
run("LE6", 0, "stone", "Tell Fekheriye (the Aramaic side) and the Sefire treaties I–III, added to LE3's Old Aramaic corpus",
    "levant-arabia-05", "`מילים-באבן/` (the Old Aramaic corpus of LE3)", "the Persée PDFs a person saves (reports/program-2026-11--for-approval.md §3.1)",
    "≈ 213 lines (Fekheriye 23, Sefire ≈ 190)", after=["LE3"], last=True)
run("LE4", 61, "south-arabia", "South Arabia and Aksum: the Haramic confession texts, Karibʾil Watar's annals, the royal inscriptions of ʿEzana",
    "levant-arabia-09, levant-arabia-13, africa-pacific-09", "a new corpus (the coordinator names it)", "CIH, RES (PD; Sabaweb per word; no DASI); Littmann 1913 (PD; keyed from the page images)", "≈ 550 lines", newlang="Sabaic; Ge'ez")
run("LE5", 58, "arabia", "Arabia before Islam: the Muʿallaqāt (the seven odes) and the Cairn of Hāniʾ (Safaitic laments of one kin group)",
    "levant-arabia-02, levant-arabia-08", "a new corpus (the coordinator names it)", "Lyall 1894 (PD); OCIANA (Zenodo, CC BY 4.0)", "829 verses + 197 inscriptions", newlang="Classical Arabic; Safaitic")

# ---------------- India and Iran ----------------
rvb = [("2", 1694, "the Gṛtsamada book"), ("3", 2357, "Viśvāmitra's book"), ("4", 2247, "Vāmadeva's book"), ("5", 2860, "the Atri book"), ("6", 2919, "Bharadvāja's book")]
for i, (b, n, who) in enumerate(rvb):
    run(f"RV{b}", 86 - i * 0.1, "rigveda", f"The Rigveda, Book {b} whole ({who})", f"iran-india-0{i+1}", "`הוודה-והאווסטה/`, a new project per book",
        "VedaWeb (CC BY 4.0)", f"{n:,} pādas", completes="the Rigveda", after=[f"RV{int(b)-1}"] if i else [])
for k, (b, n, parts, ids) in enumerate([("9", 3760, 2, "iran-india-17"), ("10", 6416, 3, "iran-india-08"), ("1", 7745, 3, "iran-india-09"), ("8", 6064, 3, "iran-india-16")]):
    for p in range(1, parts + 1):
        prev = [f"RV{b}.{p-1}"] if p > 1 else ["RV6"]
        run(f"RV{b}.{p}", 85.4 - k * 0.1 - p * 0.01, "rigveda", f"The Rigveda, Book {b} whole – part {p} of {parts}", ids, "`הוודה-והאווסטה/`, a new project per book",
            "VedaWeb (CC BY 4.0)", f"≈ {n // parts:,} pādas (Book {b}: {n:,})", completes="the Rigveda", after=prev,
            large=(f"the Rigveda's Book {b} is LARGE ({n:,} pādas): the lead decided to translate it whole, in {parts} runs (the whole Rigveda over the program)" if p == 1 else ""))
for p in range(1, 5):
    run(f"AV{p}", 73 - p * 0.01, "atharva", f"The Atharvaveda (Śaunaka) whole – part {p} of 4 (books {['1–6', '7–12', '13–18', '19–20'][p-1]})", "iran-india-15",
        "a new corpus of the Atharvaveda (it follows the renderings of `הוודה-והאווסטה/`)", "VedaWeb / GRETIL", "≈ 2,850 half-verses (whole: 11,387)",
        after=[f"AV{p-1}"] if p > 1 else [], large="the Atharvaveda is LARGE (5,838 stanzas): the lead decided to translate it whole, in 4 runs" if p == 1 else "")
run("UP1", 77, "upanisad", "The principal Upaniṣads, each whole (Aitareya, Taittirīya, Kauṣītaki, Kena, Īśa, Muṇḍaka, Praśna, Māṇḍūkya, Śvetāśvatara) and the Aitareya Brāhmaṇa 7–8 whole (the royal consecration, around Śunaḥśepa)",
    "iran-india-14, iran-india-10", "a new corpus of the Upaniṣads (it follows the Vedic renderings); AB 7.13–18 of `4-העקדה/` kept identical by script", "GRETIL; TITUS (local use: Kena, Muṇḍaka, Kauṣītaki)", "≈ 19,000 words", completes="the Aitareya Brāhmaṇa's Śunaḥśepa (7.13–18)")
run("UP2", 71, "upanisad", "The Bṛhadāraṇyaka Upaniṣad whole (Kāṇva)", "iran-india-12", "the Upaniṣads corpus of UP1", "GRETIL", "3,109 clauses (19,536 words)", after=["UP1"],
    large="the Bṛhadāraṇyaka (3,109 clauses) is LARGE: the lead decided to translate it whole")
run("UP3", 71, "upanisad", "The Chāndogya Upaniṣad whole", "iran-india-13", "the Upaniṣads corpus of UP1", "GRETIL", "3,235 clauses (17,907 words)", after=["UP2"],
    large="the Chāndogya (3,235 clauses) is LARGE: the lead decided to translate it whole")
run("UP4", 58, "upanisad", "From the Mahābhārata, three whole episodes: the Bhagavad Gītā, Nala and Damayantī, Sāvitrī", "iran-india-28, iran-india-29",
    "the Upaniṣads corpus, or a new corpus of the epic (the coordinator decides)", "GRETIL (BORI)", "1,898 verses", after=["UP3"],
    large="the Mahābhārata (73,438 ślokas) and the Rāmāyaṇa (18,761 verses) whole are declined; three whole episodes instead")
run("AVS1", 78, "avesta", "The Yasna as recited: its Young Avestan chapters around the Gāthās (Y 0–27, 52, 55–72)", "iran-india-06",
    "`האווסטה/` (the Avestan corpus begun in Round 7)", "CAB", "≈ 12,300 words", completes="the Yasna (Round 7's Old Avestan corpus)",
    large="the Yasna's Young Avestan chapters are LARGE by repetition: the lead decided to translate them whole, completing the Yasna")
run("AVS2", 74, "avesta", "The Vīdēvdād whole – part 1 of 2 (fargards 1–11)", "iran-india-07", "`האווסטה/`; Vd 2 of `הוודה-והאווסטה/3-המבול/` kept identical by script", "CAB", "≈ 13,000 words",
    completes="Vīdēvdād 2", after=["AVS1"], large="the Vīdēvdād (913 §§, 26,264 words) is LARGE: the lead decided to translate it whole, in 2 runs (completing Vd 2)")
run("AVS3", 73.9, "avesta", "The Vīdēvdād whole – part 2 of 2 (fargards 12–22)", "iran-india-07", "`האווסטה/`", "CAB", "≈ 13,000 words", completes="Vīdēvdād 2", after=["AVS2"])
run("AVS4", 64, "avesta", "The Yašts, all 21 (Mithra, Anāhitā, Tištrya, the Glory and Yima's fall …)", "iran-india-18", "`האווסטה/`", "CAB; Geldner", "≈ 1,007 stanzas", after=["AVS3"],
    large="the Yašts (≈ 1,007 stanzas) are LARGE: the lead decided to translate all 21")
run("OP1", 63, "old-persian", "The Old Persian royal inscriptions, with Behistun whole (Darius, Xerxes …)", "iran-india-26", "a new corpus (Old Persian)", "TITUS (local use); Kent 1953 checked by a person", "≈ 1,000 lines (DB 414)", newlang="Old Persian")
run("PA1", 69, "pali", "The Dhammapada whole", "iran-india-20", "a new corpus of early Buddhism (the coordinator names it)", "SuttaCentral (CC0; GitHub); GRETIL", "423 verses (≈ 1,700 pādas)", newlang="Pali")
run("PA2", 66, "pali", "The Sutta Nipāta whole – part 1 of 2", "iran-india-19", "the early-Buddhism corpus", "SuttaCentral (CC0)", "≈ 2,300 pādas", after=["PA1"],
    large="the Sutta Nipāta (≈ 4,600 pādas) is LARGE: the lead decided to translate it whole, in 2 runs")
run("PA3", 65.9, "pali", "The Sutta Nipāta whole – part 2 of 2", "iran-india-19", "the early-Buddhism corpus", "SuttaCentral (CC0)", "≈ 2,300 pādas", after=["PA2"])
run("PA4", 63, "pali", "The Therīgāthā whole (the first Buddhist nuns)", "iran-india-21", "the early-Buddhism corpus", "SuttaCentral (CC0)", "524 verses (≈ 2,100 pādas)", after=["PA3"])
run("PR1", 68, "prakrit", "The Ācārāṅga, Book I whole (the Jain 'Bambhacera')", "iran-india-23", "a new corpus (Jain Ardhamāgadhī; the coordinator names it)", "GRETIL / TITUS", "≈ 9,600 words", newlang="Ardhamāgadhī Prakrit")
run("PR2", 61, "prakrit", "Aśoka's edicts (the Major Rock Edicts, the Kalinga edicts, the Pillar Edicts, the minor edicts)", "iran-india-27", "a new corpus (or with PR1's)", "Hultzsch 1925 (PD; keyed from the scans)", "≈ 35 inscriptions", after=["PR1"])
run("PR3", 59, "prakrit", "Hāla's Sattasaī, the 700 (village love lyrics)", "iran-india-32", "the Prakrit corpus of PR1", "Weber (PD)", "1,400 lines", after=["PR2"])

# ---------------- East Asia ----------------
run("ZH1", 76, "shijing", "The Shijing whole – part 1 of 3: the Daya and the Song (the court and temple hymns)", "east-asia-01", "a new corpus of the Shijing", "Kanripo (CC BY-SA 4.0); zh.wikisource",
    "2,431 lines", after=["ZH4"], large="the Shijing (305 poems, 7,805 lines) is LARGE: the lead decided to translate it whole, in 3 runs")
run("ZH2", 75.9, "shijing", "The Shijing whole – part 2 of 3: the Xiaoya", "east-asia-01", "the Shijing corpus", "Kanripo", "≈ 2,700 lines", after=["ZH1"])
run("ZH3", 75.8, "shijing", "The Shijing whole – part 3 of 3: the Guofeng (the airs of the states)", "east-asia-01", "the Shijing corpus", "Kanripo", "≈ 2,700 lines", after=["ZH2"])
run("ZH4", 71, "zhou", "The Zhouyi core text (64 hexagram and 386 line statements) and the great Western Zhou bronze inscriptions (Da Yu ding, Mao Gong ding, Shi Qiang pan …)",
    "east-asia-05, east-asia-14", "a new corpus of Western Zhou texts (the coordinator names it)", "Kanripo; the bronze texts' open transcriptions", "≈ 1,780 clause-lines + ≈ 3,000 characters", newlang="Classical Chinese")
run("ZH5", 67, "zhou", "The Shangshu, the authentic (New Text) chapters – part 1 of 2", "east-asia-06", "the Western Zhou corpus of ZH4", "Kanripo", "≈ 1,900 lines", after=["ZH4"],
    large="the Shangshu's authentic chapters (3,810 lines) are LARGE: the lead decided to translate them whole, in 2 runs")
run("ZH6", 66.9, "zhou", "The Shangshu, the authentic chapters – part 2 of 2", "east-asia-06", "the Western Zhou corpus", "Kanripo", "≈ 1,900 lines", after=["ZH5"])
run("ZH7", 65, "chuci", "The Chuci core: the Li Sao, the Nine Songs, the Tianwen, the two Summons of the Soul", "east-asia-07, east-asia-04, east-asia-08, east-asia-15",
    "a new corpus of the Chuci", "Kanripo; zh.wikisource", "1,320 lines", after=["ZH4"])
run("ZH8", 65, "masters", "The Zhuangzi, the seven Inner Chapters", "east-asia-10", "a new corpus of the Masters (the coordinator names it)", "Kanripo (the SBCK branch)", "13,681 characters (≈ 2,970 lines)",
    after=["ZH4"], large="the Zhuangzi's Inner Chapters (≈ 3,000 lines) are borderline LARGE: the lead decided to translate them whole")
run("ZH9", 62, "masters", "The Daodejing, 81 chapters, and the Liji's Tan gong I–II (mourning and ritual)", "east-asia-09, east-asia-17", "the Masters corpus of ZH8", "Kanripo", "1,179 + 2,242 lines", after=["ZH8"])
run("ZH10", 62, "masters", "The Analects whole – part 1 of 2 (books 1–10)", "east-asia-13", "the Masters corpus", "Kanripo", "≈ 1,960 lines", after=["ZH9"],
    large="the Analects (3,920 lines) are LARGE: the lead decided to translate them whole, in 2 runs")
run("ZH11", 61.9, "masters", "The Analects whole – part 2 of 2 (books 11–20)", "east-asia-13", "the Masters corpus", "Kanripo", "≈ 1,960 lines", after=["ZH10"])
run("JA1", 59, "japan", "The Norito: Engishiki book 8, all 27 prayers", "east-asia-03", "a new corpus of ancient Japan (the coordinator names it)", "zh.wikisource (PD text); ONCOJ (CC BY 4.0) for the Old Japanese",
    "11,065 characters", newlang="Old Japanese (kanbun and senmyō)")
for p in range(1, 4):
    run(f"JA{p+1}", 67 - p * 0.01, "japan", f"The Kojiki whole – part {p} of 3 ({['the preface and Book 1 (the age of the gods)', 'Book 2', 'Book 3'][p-1]}, with its songs)", "east-asia-02",
        "the ancient-Japan corpus; the fifth-day dossier's KJ excerpt kept identical by script", "zh.wikisource; ONCOJ for the songs", "≈ 14,000 characters", completes="the fifth-day dossier's KJ excerpt",
        after=[f"JA{p}"], large="the Kojiki (41,521 characters + 112 songs) is LARGE: the lead decided to translate it whole, in 3 runs (it completes the KJ excerpt)" if p == 1 else "")

# ---------------- Greece ----------------
for p in range(1, 7):
    run(f"IL{p}", 74 - p * 0.01, "homer", f"Homer, the Iliad whole – part {p} of 6 (books {4*p-3}–{4*p})", "greece-italy-01", "a new corpus of Homer (it follows the renderings of `הסיודוס/`)",
        "Perseus + the treebank; GLAUx", "≈ 2,600 lines (whole: 15,687)", after=[f"IL{p-1}"] if p > 1 else [],
        large="the Iliad (15,687 lines) is LARGE: the lead decided to translate it whole, in 6 runs" if p == 1 else "")
for p in range(1, 5):
    run(f"OD{p}", 73.9 - p * 0.01, "homer", f"Homer, the Odyssey whole – part {p} of 4 (books {6*p-5}–{6*p})", "greece-italy-02", "the Homer corpus", "Perseus + the treebank; GLAUx",
        "≈ 3,030 lines (whole: 12,107)", after=[f"OD{p-1}"] if p > 1 else ["IL6"], large="the Odyssey (12,107 lines) is LARGE: the lead decided to translate it whole, in 4 runs" if p == 1 else "")
run("HH1", 64, "hesiod", "The Homeric Hymns, the whole collection (33 hymns: Demeter, Apollo, Hermes, Aphrodite …)", "greece-italy-03", "`הסיודוס/` (it shares Hesiod's base and tool)", "Perseus + treebank", "2,342 lines")
run("GR1", 65, "greek-law", "Greek sacred law and the afterlife: the Bacchic-Orphic gold tablets (all), the Cyrene cathartic law, the Law Code of Gortyn",
    "greece-italy-04, greece-italy-19, greece-italy-18", "a new corpus (the coordinator names it); or `טקסי-שילוח-וטיהור/` and `חוקים-ובריתות/`", "Diels / Bernabé (PD parts); SEG; Comparetti 1893 (PD; keyed from the scans)", "≈ 1,090 lines")
run("GR2", 64, "linearb", "The Linear B religious tablets (Pylos Tn, Un, Fr, Es, Ep; Knossos Fp, Gg, Fs …)", "greece-italy-20", "a new corpus (Mycenaean Greek)", "DAMOS (CC BY-NC-SA)", "≈ 60–100 tablets", newlang="Mycenaean Greek (Linear B)")
run("TR1", 63, "tragedy", "Aeschylus, the Oresteia whole – part 1 of 2 (Agamemnon)", "greece-italy-08", "a new corpus of Greek tragedy", "Perseus; GLAUx", "1,673 lines",
    large="the Oresteia (3,796 lines) is LARGE: the lead decided to translate the trilogy whole, in 2 runs")
run("TR2", 62.9, "tragedy", "Aeschylus, the Oresteia whole – part 2 of 2 (the Libation Bearers, the Eumenides)", "greece-italy-08", "the tragedy corpus", "Perseus; GLAUx", "≈ 2,120 lines", after=["TR1"])
run("TR3", 61, "tragedy", "Sophocles: Antigone and Oedipus Tyrannus", "greece-italy-11, greece-italy-12", "the tragedy corpus", "Perseus; GLAUx", "2,883 lines", after=["TR2"])
run("TR4", 60, "tragedy", "Euripides' Bacchae and [Aeschylus'] Prometheus Bound", "greece-italy-13, greece-italy-10", "the tragedy corpus", "Perseus; GLAUx", "2,485 lines", after=["TR3"])
run("PL1", 63, "plato", "Plato, the death of Socrates – part 1 of 2: Euthyphro, Apology, Crito", "greece-italy-15", "a new corpus of Plato", "Perseus (Burnet, PD); GLAUx", "≈ 18,000 words",
    large="the first tetralogy (40,910 words) is LARGE: the lead decided to translate it whole, in 2 runs")
run("PL2", 62.9, "plato", "Plato, the death of Socrates – part 2 of 2: the Phaedo", "greece-italy-15", "the Plato corpus", "Perseus; GLAUx", "≈ 23,000 words", after=["PL1"])
run("PL3", 61, "plato", "Plato, the Symposium", "greece-italy-16", "the Plato corpus", "Perseus; GLAUx", "17,414 words", after=["PL2"])

# ---------------- The North, the Pacific, the Americas (the exception: a culture in its own ancient stage) ----------------
run("NO1", 68, "norse", "The Poetic Edda, the mythological poems whole (Völuspá, Hávamál, Vafþrúðnismál, Grímnismál, Hymiskviða, Þrymskviða, Lokasenna, Skírnismál …)", "europe-north-01",
    "a new corpus of the Edda; the fifth-day dossier's HY excerpt kept identical by script", "Bugge 1867 (PD)", "744 stanzas (≈ 2,530 long lines)", newlang="Old Norse", completes="the fifth-day dossier's HY excerpt",
    large="the mythological poems (5,054 printed half-lines, ≈ 2,530 long lines) are LARGE only by half-lines: the lead decided one run, whole")
run("PC1", 61, "hawaii", "The Kumulipo whole (16 wā)", "africa-pacific-01", "a new corpus of the Pacific (the coordinator names it)", "the 1889 Hawaiian text (PD); Liliʻuokalani 1897 (PD)", "2,102 lines", newlang="Hawaiian")
run("PC2", 57, "maori", "Te Rangikāheke's 'Ko nga tama a Rangi' and the Māui cycle (Grey 1854)", "africa-pacific-02", "the Pacific corpus of PC1 (its own project)", "Grey 1854 (PD)", "11,053 words", newlang="Māori", after=["PC1"])
for p in range(1, 4):
    run(f"AM{p}", 53 - p * 0.01, "americas", f"The Popol Vuh whole – part {p} of 3", "americas-01", "a new corpus of the Americas", "Brasseur 1861 (PD); Christenson's © text as a local control only",
        "≈ 2,900 lines (whole: 8,717)", newlang="Colonial K'iche'" if p == 1 else "", after=[f"AM{p-1}"] if p > 1 else [],
        large="the Popol Vuh (8,717 lines) is LARGE, and after 500 CE: the lead decided to translate it whole, in 3 runs, as the Americas' one central text (the exception)" if p == 1 else "")

# ---------------- The last round: the texts that wait for access (the user, 2026-11-03) ----------------
# Each runs only if its access has come; otherwise it is skipped. LE6 (Persée) is above, in the Levant section.
run("OR1", 0, "akkad-prayer", "The court poetry of Nineveh (SAA 3), its well-preserved core: Assurbanipal and Nabû, the Coronation Hymn, the elegy of a woman dead in childbirth, the righteous sufferer's prayer to Nabû, the Psalm to Uruk, the Underworld Vision of an Assyrian Prince",
    "akkad-22", "the hymns-and-prayers corpus of AK2 (the Underworld Vision pointed to from `העולם-התחתון/`)", "ORACC saao/saa03 (CC BY-SA) – needs ORACC access", "≈ 620 lines", after=["AK3"], last=True)
run("OR2", 0, "akkad-letters", "The letters of the scholars to Esarhaddon and Assurbanipal (SAA 10) whole – part 1 of 2: the astrologers and the haruspices (the eclipses, the substitute king)",
    "akkad-20", "the letters corpus of AK9", "ORACC saao/saa10 (CC BY-SA) – needs ORACC access", "≈ 195 letters (whole: c. 390; to be measured when ORACC answers)", after=["AK9"], last=True,
    large="SAA 10 (c. 390 letters) is LARGE: the lead decided to translate it whole, in 2 runs by the scholars' professions, in the last round (it needs ORACC)")
run("OR3", 0, "akkad-letters", "The letters of the scholars (SAA 10) whole – part 2 of 2: the exorcists, the physicians and the lamentation priests (the royal family's health, the king's grief)",
    "akkad-20", "the letters corpus of AK9", "ORACC saao/saa10 – needs ORACC access", "≈ 195 letters", after=["OR2"], last=True)

# Candidates the lead keeps out of the program, with the reason (beyond the generic ones the script applies)
DECLINED = {
    "egypt-25": "a duplicate: the Pyramid Texts as a whole corpus is LARGE and repetitive; the Unas pyramid (EG1) is the whole object chosen",
    "anatolia-28": "LARGE (6,339 lines, 27% broken) and repetitive; the surveyor advised against it",
    "anatolia-25": "LARGE (≈ 7,000 lines), mostly administrative (C3 1)",
    "akkad-17": "highly damaged (45% broken): the rule of 2026-11-02",
    "akkad-18": "the base is not open (Geller 2016 ©, bot wall; Thompson 1903 superseded)",
    "sumer-25": "the base is not open (Geller 2016 ©, bot wall)",
    "akkad-19": "the base is not verified (Archibab's TLS fails; CDLI's ARM 26/1 entries mostly empty)",
    "iran-india-11": "LARGE: the Śatapatha Brāhmaṇa is not taken whole; its two excerpts stay excerpts",
    "iran-india-22": "LARGE (141,565 words): the Dīgha Nikāya whole is declined",
    "iran-india-30": "LARGE: declined (three whole episodes in UP4)", "iran-india-31": "LARGE: declined",
    "greece-italy-23": "LARGE, and late by the absolute date (C1 2): declined", "greece-italy-17": "LARGE (185,048 words): declined",
    "greece-italy-07": "LARGE (3,459 lines): kept in reserve", "greece-italy-25": "LARGE, late: declined",
    "east-asia-11": "LARGE (4,516 poems), after 500 CE: declined", "east-asia-19": "LARGE (198,226 characters): declined",
    "east-asia-21": "LARGE (7,401 lines): kept in reserve", "east-asia-20": "LARGE: kept in reserve",
}
