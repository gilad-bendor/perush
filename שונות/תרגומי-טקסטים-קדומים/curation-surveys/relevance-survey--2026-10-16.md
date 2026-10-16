# Mesopotamian texts for Hebrew translation: a relevance survey for the Torah commentary

Prepared 2026-10-16 for `שונות/תרגומי-טקסטים-קדומים/`. English working document; no repo files were changed.

## 0. Where the commentary stands (what is "soon")

- `פירוש/` has files for **all five books**: Genesis 61 files (~776 KB, by far the densest), Exodus 88 (~286 KB), Leviticus 64 (~202 KB), Numbers 88 (~290 KB), Deuteronomy 75 (~247 KB). About 80 of the files are short stubs (<1.5 KB). Examples: Gen 25:1–11, 25:29–34, 35:27–29; many Tabernacle units in Ex 25–40; parts of Lev 4–7.
- **Gen 8:20–11:26** is explicitly a block of "segments without commentary" (`1110-…-מקטעים_חסרי_פרוש`). That covers the post-flood covenant and rainbow, the Table of Nations, Babel, and the Shem genealogy.
- **Active work right now is Gen 1:1–2:3.** The last commits (Oct 2026) are "שיפורים ליום החמישי", the fifth day: birds, fish, *ha-tanninim ha-gedolim*. There is a "1010" file plus variant drafts .1/.2.
- Practical priority: **(1) Gen 1–3** (in progress); **(2) Gen 8:20–11:26** (empty, so ANE texts could shape it from the start); **(3) the rest of Genesis**; **(4) the legal and ritual blocks** (Ex 21–23, Lev 1–16, Lev 25–26, Deut 12–28). These are drafted but thinner, and the parallels there are lexical and very concrete.

## 1. Method and caveats

- Scope: Sumerian and Akkadian texts. Non-Mesopotamian items are listed in §4 and marked **OUT OF SCOPE**.
- "Benefit" means: how much a *word-by-word* Torah reader gains from a *careful, apparatus-rich* Hebrew translation. That is high when the text gives lexical or phrasal contact (a word, an image, an order of elements) and when the Torah's deviation from it is meaningful. It is lower for broad thematic similarity, and lower when only a few lines are relevant (then an excerpt in the parallels-index is enough).
- "Consensus" uses a three-way scale: **accepted** (mainstream, in standard commentaries); **debated**; **largely rejected / historical interest** (worth translating only to show *why* it fails).
- Web searches in Oct 2026 confirmed the bibliographic anchors marked ✓. Everything else comes from standard scholarship I know well. A few items are flagged "verify" where I am not certain of the details.
- **Existing Hebrew translations** (see `sources/Hebrew-translations--records-only/README.md`):
  - Shifra & Klein, *בימים הרחוקים ההם* (Am Oved 1996). It contains Enūma eliš, Gilgameš, Atraḫasis, Adapa, Etana, laments, wisdom and hymns.
  - Gabbay & Weiss, *המיתולוגיה הבבלית* (Mapa 2003), in prose.
  - Wasserman & Cohen, Gilgameš (Carmel 2026).

  These are copyrighted, poetic and pre-2003 (except Wasserman–Cohen), so a new apparatus-rich comparison translation still adds value. They should be consulted for renderings, though (§6.6 harmonization).

## 2. Ranked shortlist (top 25)

| # | Text | Torah focus | Benefit |
|---|------|-------------|---------|
| 1 | **Enūma eliš** (esp. I, IV–VII) | Gen 1:1–2:3 (now!), Gen 1:21 tanninim, Gen 1:14–18 luminaries, 2:1–3, 9:13 bow, 11 Babel/Esagil, Ex 15 | HIGH |
| 2 | **Gilgameš SB I–X (+XII)** (XI done) | Gen 2–3, 3:7, 3:22, 6:1–4, 41 (seven-year famine, VI), Deut 34 | HIGH |
| 3 | **Laws of Hammurabi** (prologue, laws, epilogue) | Ex 21–23 (whole Covenant Code), Lev 24:17–22, Num 5, Deut 19–25, Lev 26/Deut 28 | HIGH |
| 4 | **Esarhaddon Succession Treaty (EST/VTE)** | Deut 6:5, 13, 28:20–44, 28:23, Deut 4, 29–30 | HIGH |
| 5 | **Adapa** | Gen 2:17, 3:4–5, 3:22–24 | HIGH |
| 6 | **Babylonian Akītu ritual / kuppuru texts** | Lev 16, Lev 23:26–32, Lev 8–9, Num 29 | HIGH |
| 7 | **Bilingual "Creation of the World by Marduk"** (CT 13 35–38) | Gen 1:2, 2:4b–7 ("no shrub yet…"), 11 | HIGH (short) |
| 8 | **Enki and Ninmaḫ** | Gen 2:7, 1:26–27, Ex 4:10–11 | HIGH |
| 9 | **Sargon Birth Legend** | Ex 2:1–10 | HIGH (short) |
| 10 | **Enki and Ninḫursaĝ** | Gen 2:8–17, 2:21–22 (rib), 3:16–19 | MED-HIGH |
| 11 | **Laws of Eshnunna** | Ex 21:28–36 (ox), 21:18–19, 22:6–14 | MED-HIGH |
| 12 | **Middle Assyrian Laws A** | Deut 22:13–29, 25:5–12, Ex 22:15–16, Lev 18, Gen 38 | MED-HIGH |
| 13 | **Edict of Ammiṣaduqa** (+ mīšarum/andurārum texts) | Lev 25 (deror, jubilee), Deut 15 | MED-HIGH |
| 14 | **Gudea Cylinders A–B** | Ex 25–40 (tabnit, materials, inauguration), Lev 8–9 | MED-HIGH |
| 15 | **Mīs pî / pīt pî** (mouth-washing of the cult image) | Deut 4:15–28, Ex 32, Ex 20:4, 25; Ex 4:10–12 & 6:12 "ʿaral sefatayim" | MED-HIGH |
| 16 | **Šurpu** (esp. II) & **Maqlû** | Lev 5:1–4, Lev 19, Ex 22:17, Deut 18:10–11 | MED-HIGH |
| 17 | **Diagnostic Handbook (Sakikkū) + saḫaršubbû curses; Šumma ālu on house fungus (katarru)** | Lev 13–14 (incl. 14:33–53 house), Num 12, Deut 28:27 | MED-HIGH |
| 18 | **Divination corpora**: lecanomancy (oil), extispicy, necromancy texts, Assyrian Dream Book | Gen 44:5,15 (cup); Gen 37, 40–41 (dreams); Deut 18:9–14; Lev 19:26,31; Num 22–24 | MED-HIGH |
| 19 | **Mari letters** (prophecy; ḫayārum qaṭālum; tēbibtum census; Binū-yamina; river ordeal) | Gen 15, 49:27, Ex 30:11–16, Num 1/26, Num 5, Num 22–24, Deut 13, 18 | MED-HIGH |
| 20 | **Atraḫasis-adjacent creation-of-man texts: KAR 4, Song of the Hoe** | Gen 1:26–28, 2:5–7,15 | MEDIUM |
| 21 | **Sumerian "primeval humanity" and culture texts**: Ewe and Grain (prologue), How Grain Came to Sumer, Enki and Inana (the mes), Enki and the World Order | Gen 2–4 (naked grass-eating proto-humans, agriculture, culture inventions 4:17–22), Deut 32:8 | MEDIUM (high for this commentary's culture-history thesis) |
| 22 | **Etana** | Gen 11:30, 15–18, 25:21, 30 (barrenness, plant of birth); 11:4 ascent | MEDIUM |
| 23 | **Nergal and Ereškigal** (the heavenly stairway) & **bāb-ilī ideology** | Gen 28:12–17, Gen 11:9 | MEDIUM (excerpt) |
| 24 | **Apkallu tradition** (Uruk Sages List, Bīt mēseri, Erra I) + **Enmeduranki** | Gen 5:21–24, 6:1–4, 4:17–22 | MEDIUM |
| 25 | **Enmerkar and the Lord of Aratta** (spell of Nudimmud) | Gen 11:1–9 | MEDIUM |

Runners-up: Šamaš Hymn (Lev 19:35–36, Deut 25:13–16); OB herding contract YBC 5944 + LH §261–267 (Gen 31:38–40, Ex 22:9–12); Emar ritual texts (Lev 8–9, Num 27); Dunnu Theogony (Gen 4); kudurru curses (Deut 27–28); Nabonidus Harran texts (Gen 11:31); Chedorlaomer texts (Gen 14); the Ballad of Early Rulers / "120 years" (Gen 6:3, Deut 34:7); hemerologies and šapattu (Gen 2:2–3, Ex 20:8–11); Neo-Babylonian dialogue documents (Gen 23); Lamentation over Ur (Deut 28–32, Lev 26:31).

## 3. The survey (Mesopotamian; 50 entries)

Format: **Language · date · size · preservation**, then *Torah parallels*, *rest of HB*, *Key studies*, *Consensus*, *Benefit*.

### A. Cosmogony, primeval history (Gen 1–11)

**1. Enūma eliš ("When on high")**
Akkadian (SB), composed c. 12th c. BCE (Nebuchadnezzar I; some argue OB/Kassite), copies 1st mill.; 7 tablets, ~1,100 lines; GOOD (nearly complete since Lambert 2013).
- *Torah:* Gen 1:2 *tehom* ↔ Tiāmat (cognate, not loan: the Hebrew has no -at and keeps the laryngeal). There are primordial mingled waters (Apsû/Tiāmat) and creation by separation: Marduk splits Tiāmat "like a dried fish" and makes half a sky, with a bolt and guards so "her waters should not escape" (IV 137–140). This parallels the *raqiaʿ* dividing waters (Gen 1:6–8).
- Tablet V: Marduk sets the stations of the great gods (stars) and fixes the year, months, and moon phases (V 1–46). This parallels Gen 1:14–18, *le-ʾotot u-le-moʿadim u-le-yamim ve-shanim*. Genesis demotes "the great lights" to unnamed lamps.
- I 133–146: Tiāmat spawns eleven monsters (bašmu, mušḫuššu, ušumgallu…). Gen 1:21 has God *create* "the great tanninim", the only use of *barāʾ* between v.1 and v.27. **Directly relevant to the fifth-day unit being edited now.**
- VI 1–38: man created from the blood of the rebel god Qingu, to bear the gods' toil. This contrasts with Gen 1:26–28 (image, dominion, no labor for the gods).
- VI–VII: Babylon/Esagil built with bricks by the Anunnaki, a year of brick-making (VI 59–62), and its "head raised" (*ullû rēšīšu*). Compare Gen 11:3–4, "ונלבנה לבנים… וראשו בשמים".
- VI 82–91: Marduk's bow is set in heaven as a constellation. Compare Gen 9:13 "קשתי נתתי בענן" (in the uncommented block).
- Seven tablets, the gods' rest (*nuḫḫu*, *pašāḫu*) after man's creation, and the 50 names. Compare Gen 2:1–3, and naming as an act of rule (Gen 1:5, 8, 10; 2:19–20).
- Exodus 15: the divine warrior at the sea, with storm and wind weapons (IV 42–48, the seven winds; compare Ex 14:21, 15:8–10).
- *Rest of HB:* Ps 74:13–14; 89:10–11; 104; Job 26; Isa 51:9–10; Deutero-Isaiah's polemic against Marduk/Bel (Isa 46).
- *Key studies:* Heidel 1951 *The Babylonian Genesis*; Lambert 1965 (JTS, "A New Look…", which denies direct dependence); Day 1985; Tsumura 1989/2005 *Creation and Destruction*; Batto 1992; Talon 2005 (SAACT 4); Kämmerer & Metzler 2012; **Lambert 2013 *Babylonian Creation Myths*** (standard edition); M.S. Smith 2010 *The Priestly Vision of Genesis 1*; Gnuse 2023 (IntechOpen) ✓; the 2009 ZThK article "Antibabylonische Polemik im priesterlichen Schöpfungsbericht?" (sceptical) ✓; Walton 2008 (CTJ, on "Chaoskampf") ✓.
- *Consensus:* broad thematic and contrastive relationship **accepted**. Direct literary dependence and a "Chaoskampf in Gen 1" are **debated** (Lambert, Tsumura, Walton against; Gunkel and Day for a demythologized combat background). Exilic polemic dating is debated.
- *Benefit:* **HIGH, top priority.** Nearly every word of Gen 1 has a counterpart against which the Torah's choice is visible: unnamed lights, tanninim created rather than fought, *raqiaʿ* as an artifact rather than a corpse, rest without a labor-substitute humanity. Translate I and IV–VI first (≈600 lines), then VII.

**2. Bilingual "Creation of the World by Marduk" ("Founding of Eridu", CT 13 35–38)**
Sumerian–Akkadian bilingual incantation-prologue, NB copy (composition older); ~40 lines; GOOD.
- *Torah:* "No holy house… a reed had not come forth, a tree had not been created, a brick had not been laid…" This chain of negations matches Gen 2:4b–5, "וכל שיח השדה טרם יהיה… ואדם אין". "All the lands were sea." Marduk builds a reed raft on the face of the waters and pours earth on it (compare Gen 1:2, 1:9). He creates mankind with Aruru, then cattle, the Tigris and Euphrates, grass and reeds (compare Gen 2:7–14). Eridu and Babylon are founded (compare Gen 4:17, 10:10, 11).
- *Key studies:* Heidel 1951; Lambert 2013; Clifford 1994 *Creation Accounts in the ANE and the Bible*.
- *Consensus:* **accepted** as a typological parallel (the *ʿad-lo* "when not yet" opening is classic).
- *Benefit:* **HIGH relative to its size.** It is short, and Gen 2:5–7 lines up with it word by word.

**3. Enki and Ninmaḫ**
Sumerian, OB copies (Ur III composition?); ~140 lines; MEDIUM (end damaged).
- *Torah:* Ninmaḫ and Enki shape man from the clay of the Abzu so the gods can be freed from toil (compare Gen 2:7, 2:15). In a drunken contest Ninmaḫ fashions defective humans: one whose hands tremble, one blind, one with paralysed feet, an "idiot", a barren woman, a sexless one. Enki "decrees a fate" and a social role for each; the blind man becomes a musician. Compare **Ex 4:11, "מי שם פה לאדם או מי ישום אלם או חרש או פקח או עור"**, in Moses' "כבד פה" dialogue (Ex 4:10–16, 6:12, 6:30, units in the commentary). Compare also the priestly blemish lists (Lev 21:17–23, a unit in the commentary) and the barren woman (Gen 11:30 and onward).
- *Key studies:* Benito 1969 (edition); Klein 1997 (COS 1.159); Ceccarelli 2016 *Enki und Ninmaḫ* (new edition); Black et al. ETCSL 1.1.2. My web search found no published study linking it specifically to Ex 4:11 ✓ (gap); this is my own proposal, so label it as such.
- *Consensus:* the creation-from-clay parallel is **accepted**. The Ex 4:11 and Lev 21 links are **new / unexplored** (a good opportunity for the commentary).
- *Benefit:* **HIGH.** It is short, it is the clearest ANE text on divinely made disability and assigned social function, and it touches three commentary units.

**4. KAR 4 ("When heaven was separated from earth", the creation of man from the Alla/Lamga gods)**
Sumerian–Akkadian bilingual, MA/NA copies; ~70 lines; GOOD.
- *Torah:* the gods slay Lamga gods and humans grow from their blood; they are named Ullegarra and Annegarra, given the hoe and basket, and set to tend fields, irrigation and festivals. Compare Gen 1:26–28 (purpose), 2:5, 2:15 *le-ʿovdah u-le-shomrah*, and named first humans.
- *Key studies:* Pettinato 1971 *Das altorientalische Menschenbild*; Lambert 2013.
- *Consensus:* accepted (typological).
- *Benefit:* **MEDIUM.** It is short and pairs naturally with Enki & Ninmaḫ and the Song of the Hoe.

**5. Song of the Hoe (UR5-ŠA4 / "Praise of the Pickaxe")**
Sumerian, OB; ~110 lines; GOOD.
- *Torah:* Enlil separates heaven from earth. Humans "break through the earth like plants" at Uzumua, where Enlil's hoe struck. Compare Gen 2:7 (*adam/adamah*), 3:19, 3:23.
- *Key studies:* Farber 1997 (COS 1.157); ETCSL 5.5.4; Clifford 1994.
- *Benefit:* **MEDIUM** (excerpt-level).

**6. Enki and Ninḫursaĝ (the Dilmun myth)**
Sumerian, OB copies (Ur and Nippur versions); ~280 lines; MEDIUM.
- *Torah:* Dilmun is pure, with no illness or old age, "the raven did not croak, the lion did not kill" (compare Gen 2:8–17 and the Isa 11 "peaceable kingdom"). Fresh water is brought up from the earth (compare Gen 2:6, *ʾed ya'aleh min ha-aretz*). Enki eats the eight forbidden plants Ninḫursaĝ has grown and is cursed by her, and his eight organs sicken (compare Gen 2:17, 3:6). Ninḫursaĝ creates a healing goddess for each organ. For the **rib** (*ti*) she makes **Nin-ti, "lady of the rib" = "lady who makes live"** (Sumerian pun on *ti* "rib/life"). Compare Gen 2:21–22, and 3:20 Ḥavvah "mother of all living".
- Birth in "nine days like nine months" is related to the pain of childbirth, Gen 3:16 (weak).
- *Key studies:* Kramer 1945 (BASOR Suppl.) and 1956 *History Begins at Sumer*; Attinger 1984 (ZA, edition); Alster 1983; Katz 2007 (JNES? "Enki and Ninhursaga Part One/Two": the Dilmun prologue and the "Ur version"; verify details); Jacobsen 1987.
- *Consensus:* paradise-land motif **accepted**. The rib pun is **debated**: famous since Kramer, but the Hebrew *tselaʿ* has no life-pun, so many call it coincidental.
- *Benefit:* **MED-HIGH.** Gen 2–3 is a core commentary block, and the text is a test case for "kept / changed / omitted" (forbidden plants, curse, healing).

**7. Adapa (and the South Wind)**
Akkadian, MB (Amarna fragment, 14th c.) + NA fragments; ~6 fragments, ~150 lines total; MEDIUM.
- *Torah:* Adapa, a sage of Eridu "given wisdom but not eternal life", breaks the wing of the South Wind and is summoned to heaven. Ea warns him not to eat the "bread of death" or drink the "water of death", which are in fact the bread and water of life. He refuses, and Anu laughs, "why did you not eat and drink? You shall not live!"
- This parallels Gen 2:17, 3:4–5 (a deceptive or ambiguous divine warning), 3:22 ("פן ישלח ידו ולקח גם מעץ החיים"), clothing (Gen 3:21: Adapa is given a garment and oil), and the human who has wisdom but not immortality.
- *Key studies:* Izre'el 2001 *Adapa and the South Wind* ✓ (Israeli scholar, Hebrew-friendly; standard edition); Mettinger 2007 *The Eden Narrative* (ch. 6, Adapa & Gilgameš) ✓; Milstein 2015 (on the Adapa myth and revision); Sanders 2017 *From Adapa to Enoch*; Barr 1992 *The Garden of Eden and the Hope of Immortality*.
- *Consensus:* **accepted** as the closest ANE analogue to Gen 3's food-of-life motif. Direct dependence is not claimed.
- *Benefit:* **HIGH.** It is short and the lexical texture (food, "eat/not eat", garment, laughter, deception) maps exactly onto Gen 3. Hebrew note: Izre'el's work on its language helps.

**8. Gilgameš, Standard Babylonian I–X and XII (XI done) + OB versions**
Akkadian (OB c. 1800 BCE; SB redaction attributed to Sîn-lēqi-unninni, late 2nd mill.); ~3,000 lines; MEDIUM-GOOD (many gaps, though new pieces keep appearing, e.g. Tablet V from Sulaimaniyah, Al-Rawi & George 2014).
- *Torah:*
  - I: Enkidu is created from clay by Aruru (Gen 2:7). He lives with animals and eats grass, then is "humanized" by the harlot Šamḫat after six days and seven nights. "You are wise, Enkidu, you have become like a god" (compare Gen 3:5, 3:7 *va-yedʿu*; 2:20 no "helper" among animals). He receives clothing, bread and beer, and the animals flee him (compare Gen 3:21, 3:23, 9:2).
  - VI: Ištar's proposal and the Bull of Heaven. Anu: "if the bull comes there will be seven years of chaff", and Ištar has stored grain for seven years. Compare **Gen 41 (seven years of famine, storing grain)**.
  - VII–VIII: Enkidu's curse of the harlot, then his blessing (compare Gen 3:14–19 curse speech); death and the dream of the netherworld.
  - IX–X: the quest for life; Siduri's carpe diem (compare Qoh 9:7–9).
  - XI end (done): the snake and the plant of rejuvenation (Gen 3).
  - Cedar Forest (IV–V): the forest's guardian (compare Gen 3:24 cherubim guarding the way).
  - II/OB: Gilgameš two-thirds divine, oppressing Uruk's young men and brides, *ius primae noctis*. Compare Gen 6:1–4 (*benei ha-ʾelohim*, *gibborim*, *anshei ha-shem*; Gilgameš "I will make a name").
  - XII (Bilgames and the Netherworld): necromantic raising of Enkidu's ghost (compare Deut 18:11).
- *Key studies:* **George 2003** (edition) and 2007 (SOAS score); Tigay 1982 *The Evolution of the Gilgamesh Epic*; Abusch 2001 (JAOS, the "tablets of the epic"); Mettinger 2007 ✓; Wasserman & Cohen 2026 (Hebrew; already in sources).
- *Consensus:* Enkidu ↔ Adam and the snake/plant ↔ Gen 3 are **widely accepted** as thematic. Gen 6:1–4 ↔ Gilgameš is **accepted**. The Gen 41 seven-year link is **noted, less discussed** (moderate).
- *Benefit:* **HIGH.** The commentary reads the Eden and Cain stories as the cultural transition from "animal-like" life to culture, and Enkidu's humanization (sex, bread, beer, clothing, shepherding) is the ANE template for that. The XI work and the Wasserman–Cohen book give infrastructure. Priority: I, VI, VII, X.

**9. Atraḫasis: DONE.** (Note: I 1–351, the gods' labor strike, the creation of man from Wê-ila's flesh and blood mixed with clay, and the 14 birth-goddesses, is the strongest Gen 1–2 parallel inside it. Make sure the creation section, not only the flood, is surfaced in `parallels-index.md`.)

**10. Sumerian King List: DONE.** (Antediluvian longevity ↔ Gen 5; "kingship descended from heaven".)

**11. Eridu Genesis / Sumerian Flood (Ziusudra): DONE.** (Its creation and city-founding opening ↔ Gen 4:17, 10.)

**12. Theogony of Dunnu ("Harab myth")**
Akkadian, NB copy; ~45 lines; MEDIUM.
- *Torah:* generations of gods marked by patricide, matricide and incest, the plough-god Ḫarab and Earth, and the founding of the city Dunnu. Compare Gen 4:1–17 (first plowman Cain, fratricide, city founding), and the generational form of Gen 4:17–22 and 5.
- *Key studies:* Lambert & Walcot 1965; Jacobsen 1984 *The Harab Myth*; Lambert 2013
- *Consensus:* debated / thin.
- *Benefit:* **MEDIUM-LOW** (short, interesting for Gen 4).

**13. Sumerian "primeval humanity" texts: Ewe and Grain (Lahar and Ašnan) prologue; How Grain Came to Sumer; the "Ninurta's Instructions" / Georgica (Farmer's Instructions)**
Sumerian, OB; prologues ~30–60 lines each (Farmer's Instructions ~110); GOOD.
- *Torah:* "Mankind of those days did not know bread… nor garments; they ate grass with their mouths like sheep, drank water from ditches." Then grain and the ewe are given and agriculture and herding begin. Compare Gen 1:29–30 / 2:16 diet, 3:18–19 *ʿesev ha-sadeh… be-zeʿat appekha tokhal lechem*, 3:21, 4:2 (Abel the herdsman, Cain the tiller), 9:3. Farmer's Instructions ↔ Gen 3:17–19, 9:20 *ish ha-adamah*; Isa 28:23–29.
- *Key studies:* Alster & Vanstiphout 1987 (ASJ 9, Lahar and Ashnan); Civil 1994 *The Farmer's Instructions*; Vanstiphout 1990/2003 on disputations; Clifford 1994.
- *Consensus:* typological parallel accepted. No dependence claimed.
- *Benefit:* **MEDIUM, but HIGH for this commentary specifically.** Its thesis is the evolution of human culture from hunter-gatherers to agriculture. These are the ANE's own "culture-history" myths, and they show how Mesopotamians allegorized the same transition.

**14. Dumuzi and Enkimdu ("Inana prefers the farmer"); Disputations (Summer and Winter, Hoe and Plough, Tree and Reed, Bird and Fish)**
Sumerian, OB; 90–300 lines each; GOOD-MEDIUM.
- *Torah:* shepherd vs farmer competing for divine favor, where the shepherd is chosen (Dumuzi). Compare Gen 4:2–5. Summer and Winter, a contest before Enlil with offerings, is the closer structural match: two brothers, gifts, a decision. **Bird and Fish**: a contest between the creatures of air and sea. Compare Gen 1:20–23, **the fifth day, now being edited** (*ʿof* and *sheretz ha-mayim*, blessed alike).
- *Key studies:* Kramer 1963/1969; Vanstiphout 1990 (ASJ 12), 1992; Mittermayer 2019 *"Was sprach der eine zum anderen?"* (disputation edition) "Cain and Abel" BYU RSC overview ✓.
- *Consensus:* Cain/Abel ↔ Dumuzi/Enkimdu is **debated, often called flimsy** ✓ (no fratricide). Disputation as genre background is moderately accepted.
- *Benefit:* **MEDIUM.** Bird and Fish (~190 lines) is a timely, cheap win for the fifth day: it shows how a Sumerian text characterizes birds vs fish, which the commentary's dictionary can test.

**15. Enki and the World Order; Enki and Inana (the transfer of the *mes*)**
Sumerian, OB; ~470 / ~400 lines; MEDIUM.
- *Torah:* Enki organizes the world, assigning domains, waters, fish, birds, fields, cattle and crafts to deities (compare Gen 1 ordering by category, and **Deut 32:8–9**, the allotment of nations to divine beings). The *mes* are a catalogue of ~100 "arts of civilization" (kingship, priesthood, crafts, music, sex, scribal art, truth, falsehood). Compare Gen 4:17–22 (city, tents and cattle, lyre and pipe, bronze and iron smiths), the Babel ambitions, and the commentary's cultural dictionary.
- *Key studies:* Benito 1969; Farber-Flügge 1973 *Der Mythos Inanna und Enki*; Vanstiphout 1997; ETCSL 1.1.3, 1.3.1.
- *Consensus:* typological.
- *Benefit:* **MEDIUM (MED-HIGH for this commentary).** The *me*-list is the closest ANE analogue to an explicit "dictionary of cultural concepts".

**16. Apkallu tradition: Uruk List of Kings and Sages (W 20030,7), Bīt mēseri, Erra I 147–162; Enmeduranki texts**
Akkadian (Seleucid list; NA ritual; Erra 8th c.); short (20–50 lines each); GOOD.
- *Torah:* seven antediluvian sages (apkallū) teach the arts to kings; Uanna/Oannes (Berossus). Enmeduranki of Sippar, seventh king, is taken into the assembly of Šamaš and Adad and given divination. Compare **Gen 5:21–24 Enoch** (seventh from Adam, "walked with God… for God took him"; 365 years ↔ the sun god). Erra I: the sages are sent down to the Apsû after the flood and they angered the gods. Compare Gen 6:1–4 Nephilim, and 1 Enoch's Watchers.
- *Key studies:* van Dijk 1962 (UVB 18); Lambert 1967 ("Enmeduranki and Related Matters", JCS 21); VanderKam 1984 *Enoch and the Growth of an Apocalyptic Tradition*; Kvanvig 1988, 2011 *Primeval History: Babylonian, Biblical and Enochic*; Annus 2010 (JSP 19, "On the Origin of Watchers"); Lenzi 2008 (JANER, "The Uruk List of Kings and Sages and Late Mesopotamian Scholarship"); Sanders 2017.
- *Consensus:* Enoch ↔ Enmeduranki is **widely accepted** (at least for the Enochic tradition). Gen 6:1–4 ↔ apkallū is **debated**.
- *Benefit:* **MEDIUM.** Gen 5–6 is in the commentary, and the texts are short.

**17. Enmerkar and the Lord of Aratta**
Sumerian, OB; ~640 lines; GOOD.
- *Torah:* the "spell of Nudimmud" (ll. 134–155): once all lands "spoke to Enlil in one tongue" (*eme aš*), then Enki "changed the speech in their mouths". Compare **Gen 11:1, 6–9 (*safah aḥat… navlah sham sefatam*)**. Also temple-building (Eridu, Uruk), bricks, and the invention of writing on clay because the messenger's "mouth was heavy" (compare Ex 4:10 *khevad peh*; weak but intriguing).
- *Key studies:* Kramer 1968 (JAOS 88, "The 'Babel of Tongues': A Sumerian Version"); Jacobsen 1991 (dissents: he reads the passage as a future hope); Vanstiphout 2003 *Epics of Sumerian Kings*; Mittermayer 2009 (edition); McLaughlin 2012 (cited by intertextual.bible) ✓; Wikipedia summary ✓.
- *Consensus:* **debated.** Tense and aspect (past vs future) is contested, and so is the direction (unification vs confusion).
- *Benefit:* **MEDIUM.** Gen 11 is in the uncommented block. Only ~30 lines are crucial, but the context (temple, bricks, heavy mouth) repays a fuller version.

**18. Nergal and Ereškigal (SB/Amarna) + bāb-ilī ideology (EE V–VI; Babylon's names)**
Akkadian; Amarna ~90 lines, SB ~400; MEDIUM.
- *Torah:* the messenger Namtar/Kakka goes up and down "the long stairway of heaven" (*simmiltu ša šamê*) to the gate of Anu. Compare **Gen 28:12, *sullam* with angels ascending and descending**, and 28:17 "*shaʿar ha-shamayim*". Babylon is *Bāb-ilī*, "gate of god", and its ziggurat Etemenanki is "house of the foundation of heaven and earth" (compare Gen 11:9 folk etymology, 28:17).
- *Key studies:* Millard 1966 (ExpTim 78, "The Celestial Ladder and the Gate of Heaven"); Houtman 1977 (VT); Hurowitz on ziggurats.
- *Consensus:* *sullam* ↔ ziggurat stairway is **accepted** in most commentaries. The *simmiltu* lexeme is a good match.
- *Benefit:* **MEDIUM** (an excerpt suffices; Gen 28 has a full commentary unit).

**19. Etana**
Akkadian (OB, MA, SB), ~3–4 tablets, ~400 lines; MEDIUM (fragmentary in places).
- *Torah:* first king; childless, he seeks the "plant of birth" (*šammu ša alādi*). Compare the barren matriarchs Gen 11:30, 25:21, 29:31, **30:14–16 (Reuben's *dudaʾim*, mandrakes as fertility plant)**. The eagle and serpent's oath before Šamaš is broken and cursed. He ascends to heaven on the eagle, with the earth shrinking from view (compare Gen 11:4; Deut 32:11 eagle).
- *Key studies:* Kinnier Wilson 1985 *The Legend of Etana*; Haul 2000 (edition); **Novotny 2001 (SAACT 2)**; Horowitz 1998 *Mesopotamian Cosmic Geography*.
- *Consensus:* typological; not claimed as a source.
- *Benefit:* **MEDIUM.** The patriarchal-barrenness theme runs through all of Genesis.

**20. Nabonidus' Harran stelae, Ehulhul texts, Adad-guppi autobiography; Verse Account**
Akkadian, NB (6th c.); ~100–200 lines each; GOOD.
- *Torah:* Ur and Harran are the two moon-god (Sîn) centers. Terah leaves Ur for Harran (Gen 11:31; Josh 24:2 "your fathers served other gods"). Adad-guppi, Nabonidus' mother, a 104-year-old devotee of Sîn at Harran, is a structural match for long-lived matriarchs. The names Terah, Laban ("white" = moon), Sarah = *šarratu* (Sîn's consort), Milcah = *malkatu* (Ningal's epithet) are a classic onomastic argument.
- *Key studies:* Gadd 1958 (AnSt 8); Schaudig 2001 (edition); Beaulieu 1989; Lewy 1945; Thompson 1974 (against historicism); Van Seters 1975
- *Consensus:* the moon-cult onomastics are **debated but widespread** in commentaries.
- *Benefit:* **MEDIUM** (Gen 11:27–32 and 12 units exist; the moon names play directly into a "why this word" reading).

**21. "Chedorlaomer Texts" (Spartoli tablets, BM 34062 etc.)**
Late Babylonian (Hellenistic copies); 3–4 fragmentary tablets; FRAGMENTARY.
- *Torah:* Elamite kings who attack Babylon, with names once read as Kudur-Laḫmal, Tudḫula, Eri-Aku. Compare Gen 14:1, Chedorlaomer, Tidʿal, Aryokh.
- *Key studies:* Pinches 1897; Jeremias 1917; Astour 1966; Foster 1993 (*Before the Muses*) Wikipedia ✓ (the readings are doubted). Recent work links them to Kutir-Naḫḫunte.
- *Consensus:* **largely rejected as a source.** Late, literary, with doubtful readings.
- *Benefit:* **LOW-MEDIUM.** Translate only as a curiosity for Gen 14, to show the late Babylonian literary afterlife of such names.

**22. "Ballad of Early Rulers" (Sumerian/Akkadian, OB + Emar/Ugarit bilinguals) and the Emar "120 years" text**
~30–50 lines; GOOD.
- *Torah:* "Where is Alulu, where Etana, where Gilgameš, where Ziusudra?" is the vanity of life. A Sumerian and Akkadian proverbial theme fixes **120 years as the maximum human lifespan**. Compare **Gen 6:3** and **Deut 34:7** (Moses at 120).
- *Key studies:* Alster 2005 *Wisdom of Ancient Sumer*; Klein 1990 (ASJ 12, "The 'Bane' of Humanity: A Lifespan of One Hundred Twenty Years"), by Jacob Klein, the Israeli Assyriologist; Arnaud 1985–87 (Emar VI); Cohen 2013 *Wisdom from the Late Bronze Age*.
- *Consensus:* accepted.
- *Benefit:* **MEDIUM** (very short; two commentary units).

**23. Hemerologies, the šapattu, and "evil days"**
Akkadian, NA/NB (Babylonian Almanac; Hemerologies for Nisan/Elul), various; GOOD.
- *Torah:* *šapattu* = the 15th, the full moon, "day of the heart's rest" (*ūm nūḫ libbi*). The 7th, 14th, 19th, 21st and 28th of the month are "evil days" on which the king must not eat cooked meat, change clothes or ride a chariot. Compare **Gen 2:2–3, Ex 16, 20:8–11, 31:12–17, 35:1–3, Lev 23:3, Num 15:32–36** (the wood-gatherer). Compare also the prohibition on kindling fire (Ex 35:3). The Torah's weekly, non-lunar, blessed seventh day is a radical change.
- *Key studies:* Livingstone 2013 *Hemerologies of Assyrian and Babylonian Scholars* (CUSAS 25); Hallo 1977 (HUCA 48, "New Moons and Sabbaths"); Hasel; Tsumura.
- *Consensus:* the *šapattu* link to *shabbat* is **accepted** lexically (debated functionally).
- *Benefit:* **MED-HIGH for Gen 2:1–3 (active!)** plus several Sabbath units. Extracts would suffice.

### B. Patriarchs and Joseph (Gen 12–50)

**24. Mari archives (letters; ritual; administrative)**
Akkadian, OB (18th c.); ~20,000 tablets. Relevant dossiers are hundreds of letters; GOOD.
- *Torah:*
  - Gen 15:9–18 ("cut a covenant", animals split): Mari *ḫayāram qaṭālum*, "to kill a donkey foal", is the treaty act ("I will not let a puppy and a goat be used, I killed the foal of a donkey"). Also cutting animals in two in an Old Babylonian Mari letter (Held, Malamat).
  - Gen 49:27 "Binyamin": the Binū-yamina ("sons of the right/south") and Binū-simʾal (compare Gen 35:18, Ben-oni/Binyamin).
  - The tribal terms *gāyum* (↔ *goy*), *ummatum* (↔ *ʾummah*), *ḫibrum*, and *nawûm* (↔ *naveh*).
  - The census *tēbibtum* ("purification") ↔ **Ex 30:11–16** (half-shekel *kofer nafsho… ve-lo yihyeh vahem negef*) and **Num 1, 26**.
  - Prophecy (*āpilum*, *muḫḫûm*, dreams, "Do not fear") ↔ **Deut 13:2–6, 18:15–22, Num 22–24, Gen 15:1 *ʾal tiraʾ***.
  - The river ordeal (Ḫīt) ↔ Num 5. Also *ḫerem*-like booty taboo (*asakkum*) ↔ Num 31, Deut 20.
- *Key studies:* Speiser 1958 (BASOR 149, "Census and Ritual Expiation in Mari and Israel") ✓; Liver 1963 (HTR, sceptical) ✓; Malamat 1989 *Mari and the Early Israelite Experience*, 1998; Fleming 2004 *Democracy's Ancient Ancestors*; Durand 1997–2000 *Documents épistolaires*; **Nissinen 2003/2019 *Prophets and Prophecy in the ANE*** (SBL WAW 12/41); Sasson 2015 *From the Mari Archives*.
- *Consensus:* the prophecy parallels are **accepted**. *tēbibtum* is **debated** ✓. *ḫayārum qaṭālum* ↔ *karat berit* is **accepted** as analogous.
- *Benefit:* **MED-HIGH.** Not one text but a curated anthology of ~40–60 letters, with high lexical yield across all five books. Sasson 2015 and Nissinen give ready selections.

**25. Nuzi archives (family law: adoption, sister-ship, teraphim, birthright sale, surrogacy)**
Akkadian (Hurrian milieu), 15th–14th c.; thousands of contracts; GOOD.
- *Torah:*
  - Gen 15:2–3 (adopted slave-heir Eliezer).
  - 16:1–3, 30:3–9 (a barren wife gives a slave-woman; the HSS V 67 marriage contract of Kelim-ninu).
  - 25:29–34 (sale of the birthright: the Nuzi sale of inheritance shares for three sheep).
  - 31:19–35 (Rachel's teraphim as title to inheritance).
  - 12:10–20, 20, 26 (wife-sister; Speiser's *aḫātūtu*).
  - 27 (deathbed blessing as legally binding).
- *Key studies:* Speiser 1963/1964 (*Genesis*, AB); Gordon 1940; **Thompson 1974 *The Historicity of the Patriarchal Narratives*** and **Van Seters 1975 *Abraham in History and Tradition*** (devastating critiques); Greenberg 1962 (JBL, on teraphim); Selman 1980; van der Toorn 1990 (CBQ, teraphim).
- *Consensus:* the wife-sister thesis is **rejected**. Teraphim-as-title is **largely rejected**. Surrogacy is **accepted** but not Nuzi-specific (also LH §144–147 and Old Assyrian contracts).
- *Benefit:* **MEDIUM-LOW.** It is a good methodological lesson, how a "parallel" can mislead, which fits the commentary's demand for logical rigor. Translate 6–8 short contracts with an apparatus showing what holds and what doesn't.

**26. Old Babylonian herding contracts (YBC 5944 = YBT 12 7) + LH §261–267**
Akkadian, OB; contract ~30 lines; GOOD.
- *Torah:* **Gen 31:38–40** ("טרפה לא הבאתי אליך אנכי אחטנה… גנבתי יום וגנבתי לילה"). The shepherd's liability: losses by lion or god (*lipit ilim*) are cleared by an oath before the god and showing the carcass. Compare **Ex 22:9–12** (*ʾim taroph yitaref yeviʾehu ʿed*) and Amos 3:12.
- *Key studies:* **Finkelstein 1968** (JAOS 88) ✓; Morrison 1983 (BA); Landman 2019 (ZAR, "Herding in Haran") ✓; Postgate 1975; Demsky.
- *Consensus:* **accepted**, a classic case.
- *Benefit:* **MED-HIGH** (short, word-level, two units).

**27. Neo-Babylonian "dialogue documents" (land sale, Zwiegesprächsurkunden)**
Akkadian, NB; short contracts; GOOD.
- *Torah:* Gen 23 (Abraham buys Machpelah): the verbal negotiation, "I will give the full price" (*kesef maleʾ*), listing the field and trees, and "before the eyes of" witnesses at the gate. Tucker argues the form is NB, not Hittite (against Lehmann 1953).
- *Key studies:* Lehmann 1953 (BASOR 129, Hittite); **Tucker 1966** (JBL 85); Petschow 1965 (JCS 19); Westbrook 1991.
- *Consensus:* NB parallel **moderately accepted**; Hittite **rejected**.
- *Benefit:* **MEDIUM** (two or three documents).

**28. Assyrian Dream Book (Ziqīqu) + dream reports (Gudea, Mari, Assurbanipal) + the Sumerian Dumuzi's Dream**
Akkadian, NA (Assurbanipal's library), ~11 tablets; MEDIUM.
- *Torah:* the omen form "If a man in his dream…" and the interpreter's art. Compare **Gen 37:5–11, 40:5–22, 41:1–36** (*ptr*, cognate of Akkadian *pašāru* "to solve/interpret"; *pitrōn* ↔ *pišru*). The paired dreams ("the doubling of the dream", Gen 41:32), and the interpreter by divine inspiration vs by manual. **Dumuzi's Dream**: Dumuzi dreams and his sister Geštinana interprets it, with motifs of reeds, a shepherd's staff, and a flock destroyed (compare Gen 37's sheaves and stars).
- *Key studies:* **Oppenheim 1956** (*The Interpretation of Dreams in the ANE*, TAPS 46) ✓; Butler 1998 *Mesopotamian Conceptions of Dreams*; **Noegel 2007 *Nocturnal Ciphers*** ✓ (wordplay in dream interpretation); Zgoll 2006 *Traum und Welterleben*; Husser 1999 *Dreams and Dream Narratives in the Biblical World*; Alster 1972 *Dumuzi's Dream*.
- *Consensus:* *ptr/pšr* and the genre are **accepted**. Note that Gen 40–41 is set in Egypt, so Egyptian dream books (Chester Beatty III) are also relevant (OUT OF SCOPE).
- *Benefit:* **MED-HIGH.** Joseph has three units and the lexical texture is strong. Recommend an anthology of ~60 dream omens + Dumuzi's Dream.

**29. Lecanomancy (oil-divination) texts; extispicy (bārûtu) reports; necromancy rituals**
Akkadian, OB (lecanomancy CT 3), NA; GOOD.
- *Torah:* **Gen 44:5, 15**, Joseph's silver cup *ve-hu naḥesh yenaḥesh bo* (oil on water in a cup: "If the oil divides in two…"). **Deut 18:10–11**: *qosem qesamim*, *meʿonen*, *menaḥesh*, *mekhashef*, *ḥover ḥever*, *shoʾel ʾov ve-yiddeʿoni*, *doresh ʾel ha-metim*. Lev 19:26, 31, 20:6, 27; Num 23:23 (*ki lo naḥash be-Yaʿakov ve-lo qesem*); Num 22–24 (Balaam's seven altars and sacrifices before the oracle ↔ the bārû's sacrifice and inspection; Daiches 1909). Necromancy rituals (*eṭemmu*, raising a ghost through a skull) ↔ *ʾov*.
- *Key studies:* Pettinato 1966 *Die Ölwahrsagung bei den Babyloniern*; Starr 1983 *The Rituals of the Diviner*; Koch 2015 *Mesopotamian Divination Texts*; **Finkel 1983–84** (AfO 29/30, necromancy); Scurlock 1988; **Cryer 1994 *Divination in Ancient Israel***; Jeffers 1996; Daiches 1909 ("Balaam—A Babylonian bārû"); Moore 1990 *The Balaam Traditions*; Nissinen; Hamori 2015.
- *Consensus:* accepted (the Deut 18 lexicon); Balaam-as-bārû is **debated** ✓ (no specialist study surfaced in search).
- *Benefit:* **MED-HIGH.** A small anthology (lecanomancy ~40 lines; diviner's prayer *ikribu*; one necromancy ritual) annotates the whole forbidden-divination vocabulary of the Torah.

**30. Idrimi of Alalakh (statue inscription)**
Akkadian (peripheral), 15th c.; ~100 lines; GOOD.
- *Torah:* a younger son flees to his mother's kin (Emar). Seven years among the Ḫabiru in Canaan, then a return to rule, taking omens, and the deathbed. Compare Gen 27–31 (Jacob with mother's kin), Joseph's rise, Moses' flight (Ex 2:15–22), the *ʿivri*/ḫabiru.
- *Key studies:* Smith 1949; Greenstein & Marcus 1976 (JANES 8); Longman 1991 *Fictional Akkadian Autobiography*; Lauinger 2019 (new edition).
- *Benefit:* **MEDIUM-LOW.**

### C. Exodus narrative (Ex 1–19)

**31. Sargon Birth Legend ("Sargon, the mighty king")**
Akkadian, NA copies (7th c.; composition possibly Sargon II's reign); ~30 preserved lines of the birth episode, plus a fragmentary continuation; GOOD (the opening).
- *Torah:* **Ex 2:1–10.** The *ēnetu*-priestess mother, who is not allowed children, bears him in secret. She puts him in a basket of rushes (*quppu ša šuri*), seals its lid with **bitumen** (*ina kupri*, ↔ *va-tachmerah va-ḥemar u-va-zafet*), and casts him on the river, which does not submerge him. Akki the water-drawer draws him out (*ina dalîšu*, ↔ *ki min ha-mayim meshitihu*), raises him as his own and makes him a gardener. Ištar loves him and he becomes king.
- Differences: Moses' parents and lineage are known (Ex 2:1), the sister watches, his own mother nurses him, it is a *tevah* (Noah's word!), and he is drawn out by royalty.
- *Key studies:* **Lewis 1980 *The Sargon Legend*** (standard); Westenholz 1997 *Legends of the Kings of Akkade*; Redford 1967 (Numen, the exposed-child motif); Childs 1965 (JBL); Otto 2000 ("Mose und das Gesetz"; the Sargon legend as anti-Assyrian Moses); Gerhards 2006 *Die Aussetzungsgeschichte des Mose*; Vestigia 2025 ✓; Alhatorah table ✓.
- *Consensus:* the parallel is **universally acknowledged**. Dependence or polemic (Otto, Gerhards: 7th-century anti-Assyrian) is **debated**.
- *Benefit:* **HIGH.** Short and lexically dense (bitumen, basket, river, draw), and the *tevah* link to the flood corpus already translated.

**32. Erra and Išum**
Akkadian (SB), 8th c.; 5 tablets, ~750 lines; GOOD.
- *Torah:* Erra, the plague and war god, the "destroyer" with seven Sebetti weapons, is restrained only by Išum. Compare **Ex 12:13, 23 *ha-mashḥit*** and the plague narrative. A god leaves his dwelling and chaos follows (Marduk abandons his statue). Compare Deut 31:17–18 *hester panim*, 32:22–25 (arrows, plague, *qetev meriri*). The amulet use of the text (hung on houses to ward off plague) ↔ Ex 12:7, 13 blood on doorposts, and the mezuzah (Deut 6:9). The apkallū passage, I 147–162: see #16.
- *Key studies:* Cagni 1969/1977; Bodi 1991 *The Book of Ezekiel and the Poem of Erra*; Foster *Before the Muses*; Taylor 2017 (Erra as apotropaic text? verify); George 2013 ("The Poem of Erra and Ishum: A Babylonian Poet's View of War").
- *Consensus:* Ezekiel–Erra is **accepted** (Bodi). The Torah links are **thematic only**.
- *Benefit:* **MEDIUM** (Ex 12, Deut 32; primarily Ezekiel).

**33. Apotropaic door rites (Bīt mēseri, ūmu lemnu rituals, Lamaštu incantations, figurines buried at doors)**
Akkadian, NA; GOOD.
- *Torah:* smearing door-jambs and lintels with blood, gypsum and substances, and placing guardian figures at the gate "so the evil one cannot enter". Compare **Ex 12:7, 13, 22–23** (*ʾezov*, *mashqof*, *mezuzot*, *lo yiten ha-mashḥit lavo*); Deut 6:9, 11:20.
- *Key studies:* Wiggermann 1992 *Mesopotamian Protective Spirits*; Farber 2014 *Lamaštu*; Propp 1999 (AB Exodus); Wright 1987.
- *Consensus:* typologically accepted.
- *Benefit:* **MEDIUM** (excerpts).

### D. Law (Ex 21–23; Lev 17–27; Deut 12–26)

**34. Laws of Hammurabi (LH / CH)**
Akkadian (OB), c. 1755 BCE; prologue + ~282 laws + epilogue, ~3,500 lines on the Louvre stele. It was copied for 1,500 years (NA, NB copies), so it was known in the 1st millennium. GOOD.
- *Torah:*
  - **Goring ox LH §250–252** ↔ **Ex 21:28–32**: a habitual gorer whose owner was warned (*šumma… ušedišumma* ↔ *ve-hu'ad bi-veʿalav*), the death of a free man or a slave, 30 shekels.
  - **Talion §196–201** ↔ Ex 21:23–25, Lev 24:17–22, Deut 19:21.
  - Kidnapping §14 ↔ Ex 21:16, Deut 24:7.
  - Striking a parent §195 ↔ Ex 21:15.
  - Injury to a pregnant woman §209–214 ↔ Ex 21:22–25.
  - Fights and healing costs §206 ↔ Ex 21:18–19.
  - Debt-slavery with release in the 4th year §117 ↔ Ex 21:2, Deut 15:12 (7th year).
  - Burglary §21 ↔ Ex 22:1–2.
  - Deposit and oath before god §120–126 ↔ Ex 22:6–12 (*el ha-ʾelohim* ↔ *maḫar ilim*).
  - Herding §261–267 ↔ Ex 22:9–12, Gen 31.
  - Grazing damage §57–58 ↔ Ex 22:4.
  - False witness §1–4 ↔ Deut 19:16–21.
  - The river ordeal for a suspected wife §131–132 ↔ **Num 5:11–31**.
  - City responsibility for an unsolved murder §23–24 ↔ **Deut 21:1–9**.
  - Incest §154–158 ↔ Lev 18, 20.
  - Surrogate slave-wife §144–147 ↔ Gen 16, 21:9–10.
  - Inheritance and the firstborn ↔ Deut 21:15–17.
  - **Prologue and epilogue**: the king called by the gods "to make justice appear, to destroy the wicked, that the strong not oppress the weak"; the stele set up for the wronged man to read; the **blessings and curses** on future kings. Compare **Ex 23:20–33, Lev 26, Deut 27–28**. The structure "narrative → laws → blessing/curse" ↔ the covenant framing.
- *Key studies:* Roth 1997 *Law Collections from Mesopotamia and Asia Minor*; Driver & Miles 1952–55; Finkelstein 1981 *The Ox that Gored*; Paul 1970 *Studies in the Book of the Covenant*; Westbrook 1988, 2003 (*History of ANE Law*); Jackson 2006; Otto 1988 ff.; **Wright 2009 *Inventing God's Law*** ✓ (direct literary dependence in the Neo-Assyrian period); responses by Westbrook & Wells 2009, Levinson, Jackson; Wright's own later reply ✓; Richardson 2004 (translation).
- *Consensus:* close parallels **universally accepted**. Their mechanism (direct textual use vs shared legal-scholarly tradition) is **intensely debated** (Wright vs Westbrook).
- *Benefit:* **HIGH.** There are hundreds of exact contact points. The deviations (no class tiers in the talion; the ox stoned; no vicarious punishment, as in LH §230 "the builder's son is killed" vs Deut 24:16) are exactly "the strange word". Translate the prologue, the epilogue, and §1–5, 14–25, 117–126, 129–132, 144–158, 195–214, 229–231, 244–252, 261–267 first (~1,200 lines).

**35. Laws of Eshnunna (LE)**
Akkadian (OB), c. 1800 BCE; ~60 laws, 2 tablets; GOOD-MEDIUM.
- *Torah:* **LE §53**: "If an ox gores an ox and causes its death, both ox owners shall divide the price of the live ox and the carcass of the dead ox". This is **nearly verbatim Ex 21:35** (*u-makhru et ha-shor ha-ḥai ve-ḥatsu et kaspo ve-gam et ha-met yeḥetsun*), the closest verbal parallel between biblical and cuneiform law. §54–55: a goring ox with warning ↔ Ex 21:29. §56–57: a vicious dog. §12–13: a thief in a field or house by day or by night ↔ Ex 22:1–2. §42–47: bodily injury.
- *Key studies:* Goetze 1956; **Yaron 1988 *The Laws of Eshnunna*** (2nd ed.; Israeli scholar); Roth 1997; Finkelstein 1981; Westbrook.
- *Consensus:* **accepted.** Both Wright and Westbrook use it.
- *Benefit:* **MED-HIGH** (short, with one decisive verse).

**36. Laws of Ur-Namma; Laws of Lipit-Ištar; Sumerian Laws Exercise Tablet; Laws about Rented Oxen**
Sumerian, Ur III / Isin (21st–19th c.); ~40 laws each; MEDIUM (fragmentary).
- *Torah:* monetary compensation for injury (Ur-Namma §18–22; compare Ex 21:18–19, 26–27). Prologue and epilogue form (Lipit-Ištar). A pregnant woman struck (SLEx) ↔ Ex 21:22. Rented oxen ↔ Ex 22:13–14.
- *Key studies:* Roth 1997; Civil 2011 (CUSAS 17, new Ur-Namma); Finkelstein 1969.
- *Benefit:* **MEDIUM-LOW** (useful as a background block with LH).

**37. Middle Assyrian Laws (MAL A, B, C+G…)**
Akkadian (MA), tablets c. 1076 BCE (composition 14th c.); MAL A ~60 laws; MEDIUM-GOOD.
- *Torah:*
  - **MAL A §8**: a woman who crushes a man's testicle in a fight has a finger cut off. Compare **Deut 25:11–12**, *ve-qatsotah et kappah* (one of only two biblical mutilation penalties).
  - §12–16, 23: rape in the city vs the field. Compare **Deut 22:23–27** ("if she did not cry out" / "in the field").
  - §55–56: rape of an unbetrothed virgin, where the rapist must marry her and her father may take a triple bride-price. Compare **Deut 22:28–29, Ex 22:15–16** ✓ (TheTorah article).
  - §30, 33, 43: levirate-type marriages. Compare **Deut 25:5–10, Gen 38** ✓ (Hirata 2015; Karolinum article, which says there is no strict levirate).
  - §40: veiling (compare Gen 24:65, 38:14–15).
  - §47: witchcraft punished by death. Compare Ex 22:17.
  - §59: a husband's discipline; corporal punishment counted in blows (compare Deut 25:1–3, forty lashes).
  - Bestiality and homosexuality (§20) ↔ Lev 18:22–23, 20:13.
- *Key studies:* Driver & Miles 1935; Cardascia 1969; Roth 1997; Lafont 1999 *Femmes, droit et justice*; **Otto 1993 / 2011 (Deuteronomium commentary, HThKAT)**; Stol 2016 *Women in the Ancient Near East*; Hirata 2015 ✓; TheTorah.com article on the unbetrothed virgin ✓; Pressler 1993 *The View of Women Found in the Deuteronomic Family Laws*.
- *Consensus:* **accepted** (Deut 22 and 25 especially). Dependence is debated.
- *Benefit:* **MED-HIGH.** Deut 22–25 is a long and still thin commentary unit ("רשימת דינים"). The Torah's exact wording ("cried out", "in the field", "her hand") is the commentary's kind of evidence.

**38. Neo-Babylonian Laws; Hittite Laws (OUT OF SCOPE, see §4)**
NB Laws: Akkadian, 7th–6th c.; ~15 laws; MEDIUM.
- *Torah:* dowry, inheritance, and the false seller of a slave. Compare Num 27, 36 (daughters' inheritance).
- *Benefit:* **LOW.**

**39. Edict of Ammiṣaduqa (+ Samsu-iluna fragments, mīšarum references, Neo-Assyrian andurāru)**
Akkadian (OB), c. 1646 BCE; ~22 sections, ~200 lines; GOOD-MEDIUM.
- *Torah:* "the king has established *mīšarum* for the land". Cancellation of consumer (non-commercial) debts, release of debt-slaves of Akkadian or Amorite status (*andurāršu iššakin*), with exceptions for foreigners and commercial loans. Compare **Lev 25:10 *u-qeratem deror ba-aretz*** (*deror* ↔ *andurāru*, cognate), **Deut 15:1–3** (*shemiṭah*; "the foreigner you may press" ↔ the edict's exceptions), Lev 25:39–55 (Hebrew vs foreign slaves), Ex 21:2. The Torah turns the king's ad-hoc edict into a fixed cosmic calendar (7 / 49 / 50).
- *Key studies:* Kraus 1958/1984 *Königliche Verfügungen*; Finkelstein 1961/1965 (JCS 15; "Some New Misharum Material"); Lemche 1979 ✓; **Weinfeld 1995 *Social Justice in Ancient Israel and in the ANE*** (Hebrew edition 1985 *משפט וצדקה בישראל ובעמים*); Westbrook 1991; Chirichigno 1993 *Debt-Slavery in Israel and the ANE*; Bergsma 2007 *The Jubilee from Leviticus to Qumran*; Miner 2013 (Stellenbosch MPhil) ✓; Rogers 2020 (PhD) ✓; Carmichael 1999 ✓.
- *Consensus:* the *deror/andurāru* link and the institutional analogy are **accepted**. Direct dependence is **rejected**.
- *Benefit:* **MED-HIGH.** Lev 25 and Deut 15 have full commentary units, and the text is short.

**40. Šamaš Hymn (the "Great Hymn to Šamaš")**
Akkadian (SB), ~200 lines; GOOD.
- *Torah:* the sun-god as judge who sees all. It condemns the merchant who uses **two sets of weights** ("he who holds the scales in falsehood… who uses two weights"). Compare **Lev 19:35–36, Deut 25:13–16 (*ʾeven va-ʾeven*, *ʾeifah ve-ʾeifah*)**. The judge who takes bribes ↔ Ex 23:8, Deut 16:19. Lending at interest ↔ Ex 22:24, Lev 25:36–37, Deut 23:20–21. Care for the traveller and the weak ↔ Deut 10:18.
- *Key studies:* Lambert 1960 *Babylonian Wisdom Literature*; Foster; Sarna (on Ps 19); Weinfeld 1995.
- *Consensus:* accepted.
- *Benefit:* **MEDIUM** (excerpt of ~50 lines; Lev 19, Deut 25).

**41. Instructions of Šuruppak (and Counsels of Wisdom; Advice to a Prince)**
- Šuruppak: Sumerian (Early Dynastic 2500 BCE → OB); ~280 lines; GOOD.
- Counsels of Wisdom: Akkadian, ~160 lines.
- **Advice to a Prince** ("If a king does not heed justice…"): Akkadian, NA/NB, ~60 lines; GOOD.
- *Torah:*
  - Šuruppak advises his son Ziusudra (the flood hero, linking to the done corpus): "Do not place a field by a road… do not move a boundary marker" (↔ **Deut 19:14, 27:17**); "do not steal… do not commit adultery with your neighbor's wife" (↔ Ex 20:13–14); "do not curse"; agricultural advice.
  - Advice to a Prince is an omen-style warning to the king about justice, forced labor, and conscripting the citizens of Sippar, Nippur and Babylon. Compare **Deut 17:14–20, *mishpaṭ ha-melekh*** and 1 Sam 8. My search found no study directly comparing it with Deut 17 ✓ (gap). Note Diakonoff 1965 and Lambert 1960 (verify). The Deut 17 ANE-context literature (HUJI 2016 chapter "The law of the king…") ✓.
- *Rest of HB:* Proverbs (esp. 22–24), Qohelet.
- *Key studies:* Alster 1974, 2005 *Wisdom of Ancient Sumer*; Lambert 1960; Cohen 2013; Weinfeld (on Deut and wisdom), 1972 *Deuteronomy and the Deuteronomic School*.
- *Consensus:* the wisdom ↔ Proverbs parallels are accepted. Advice to a Prince ↔ Deut 17 is **plausible but under-studied**.
- *Benefit:* **MEDIUM.** Advice to a Prince is short and a fresh angle on Deut 17. Šuruppak links the boundary-stone law and the done flood corpus.

### E. Treaty and covenant (Deut, Lev 26, Ex 19–24)

**42. Esarhaddon Succession Treaty (EST; Vassal Treaties of Esarhaddon, VTE; Tell Tayinat copy)**
Akkadian (NA), 672 BCE; ~670 lines, many copies (Nimrud; Tayinat 2009, published Lauinger 2012); GOOD.
- *Torah:*
  - **Deut 13**: the duty to denounce anyone (prophet, ecstatic, dream-interpreter, brother, son, daughter) who incites disloyalty (VTE §10, §12). Compare Deut 13:2–12 (*navi ʾo ḥolem ḥalom*, *ʾaḥikha ven ʾimmekha…*), and the rebel city (13:13–19).
  - **Deut 13:1 canon formula** (*lo tosef ʿalav ve-lo tigraʿ mimmenu*) ↔ VTE §4/§57 "not alter, not change" (Levinson 2010) ✓.
  - **Deut 6:5** "love the LORD with all your heart…" ↔ VTE §24 "love Assurbanipal as yourselves". Compare also Moran 1963 (CBQ, "love" as treaty loyalty).
  - **Deut 28:23**, sky of bronze and earth of iron ↔ VTE §63–64 (in reverse order!).
  - **Deut 28:26–35** ↔ VTE §39–42: the sequence Sîn / leprosy (*saḫaršubbû*) → Šamaš / blindness ("grope in darkness") → Ištar / wife taken by enemy → Ninurta / corpse for vultures. Compare 28:26 (corpse food for birds), 27 (*shḥin*, scabs), 28–29 (blindness, groping at noon), 30 (betrothed taken). This is the famous ordered sequence (Weinfeld; Steymans 1995).
  - **Deut 28:53–57** cannibalism ↔ VTE §47, §75.
  - Oath on behalf of future generations ↔ Deut 29:13–14 (*ʾet ʾasher yeshno po… ve-ʾet ʾasher ʾenennu po*); the writing and keeping of the tablet ↔ Deut 31:9–13, 24–26.
  - Lev 26:19 (bronze/iron reversed), 26:29.
- *Key studies:* Wiseman 1958; **Parpola & Watanabe 1988 (SAA 2)**; Frankena 1965 (OTS 14); **Weinfeld 1972 *Deuteronomy and the Deuteronomic School*** (Hebrew-background); **Steymans 1995 *Deuteronomium 28 und die adê zur Thronfolgeregelung Asarhaddons***; Otto 1999 *Das Deuteronomium*; Koch 2008 *Vertrag, Treueid und Bund*; **Levinson 2010** ✓; **Levinson & Stackert 2012/2013** (JAJ 3, "Between the Covenant Code and Esarhaddon's Succession Treaty") ✓; Lauinger 2012 (JCS 64, Tayinat edition); **Crouch 2014 *Israel and the Assyrians*** ✓ (subversion; sceptical of direct dependence); Zehnder 2009; Fales 2012; Quick 2017 *Deuteronomy 28 and the Aramaic Curse Tradition* ✓ (Aramaic channel); Bibleinterp "Curses in Deuteronomy and Old Aramaic" ✓.
- *Consensus:* the Deut 13 and Deut 28:20–44 parallels are **widely accepted**. Direct dependence vs an Aramaic or Assyrian treaty genre is **debated** (Crouch, Koch, Quick). The Tayinat copy strengthens the case for local display in the West ✓.
- *Benefit:* **HIGH.** Deuteronomy is fully drafted. The order of curses, the reversed bronze/iron, and "love" all give the commentary a hard external control on word order and choice.

**43. Other Neo-Assyrian treaties and loyalty oaths (Aššur-nērārī V–Matiʾilu; Esarhaddon–Baal of Tyre; Zakūtu Treaty; Sefire is Aramaic, see §4)**
Akkadian, 8th–7th c.; 50–200 lines each; MEDIUM.
- *Torah:* Aššur-nērārī V–Matiʾilu: the head of a spring lamb is cut off ("this head is not the head of a lamb, it is the head of Matiʾilu"). Compare the self-curse animal rites of **Gen 15:9–17**, Jer 34:18–20. Prostitute curses ↔ Deut 28:30. The Baal of Tyre treaty curses with storm gods ↔ Deut 28.
- *Key studies:* SAA 2; McCarthy 1978 *Treaty and Covenant*; Hasel 1981 (JSOT, Gen 15); Weinfeld 1970 (JAOS 90, "The Covenant of Grant…").
- *Benefit:* **MEDIUM** (excerpts).

**44. Kudurrus (boundary-stone grants) and their curse formulas; Weinfeld's "royal grant" texts**
Akkadian (Kassite–NB), ~30–100 lines each; GOOD.
- *Torah:* land grants to loyal servants, with curses on whoever "moves the boundary" or alters the stone ("may Sîn clothe his body with *saḫaršubbû* like a garment; may he wander the steppe like a wild ass"). Compare **Deut 19:14, 27:17**, Deut 28:27, 35, Lev 13:45–46 (the outcast leper), Num 12. "Covenant of grant" (Weinfeld) ↔ the Abrahamic promises in Gen 15 and 17, and the Davidic covenant.
- *Key studies:* King 1912 *BBSt*; **Slanski 2003 *The Babylonian Entitlement narûs (kudurrus)***; Weinfeld 1970 ✓; Paulus 2014 (edition of Kassite and post-Kassite kudurrus).
- *Benefit:* **MEDIUM** (curse anthology; Lev 13/Deut 27–28).

### F. Cult: sanctuary, priesthood, sacrifice, purity (Ex 25–40; Leviticus; Numbers)

**45. Gudea Cylinders A and B (Building of Ningirsu's temple Eninnu)**
Sumerian, c. 2125 BCE; ~1,370 lines; GOOD ✓ (Wikipedia, CDLI).
- *Torah:*
  - **Ex 25:8–9, 40** (*tavnit*, "see and make according to the pattern shown you on the mountain") ↔ Gudea's dream: the god shows him a tablet with the temple plan and a brick mold ✓.
  - The divine call and a confirmatory sign ↔ Ex 3.
  - The people's purity and the cessation of quarrels during building ↔ Ex 19:10–15, 35:4–29 (voluntary gifts).
  - Materials brought from distant lands (cedar, gold, lapis) ↔ Ex 25:3–7, 35.
  - The skilled craftsmen ↔ Bezalel (Ex 31:1–11, 35:30–36:7).
  - Furnishing, then the god's entry ("Ningirsu enters his house like a storm") ↔ **Ex 40:34–35** (*ve-ha-ʿanan kissah… u-khevod YHWH maleʾ et ha-mishkan*).
  - A **seven-day** inauguration feast with the abolition of debts and inequality ("the slave-girl made equal to her mistress") ↔ Lev 8:33–35, 9; Lev 25; 1 Kgs 8.
- *Key studies:* Edzard 1997 (RIME 3/1); Jacobsen 1987 *The Harps that Once…*; **Suter 2000 *Gudea's Temple Building***; **Hurowitz 1985** (JAOS 105, "The Priestly Account of Building the Tabernacle") and **1992 *I Have Built You an Exalted House*** ✓ (Hurowitz is an Israeli scholar who wrote in Hebrew too); Hurowitz 2012 ("YHWH's Exalted House Revisited") ✓; Averbeck 1987 (diss.) Hundley 2013 *Gods in Dwellings*.
- *Consensus:* the temple-building pattern (decision → plan → materials → building → dedication → blessing) is **accepted** (Hurowitz).
- *Benefit:* **MED-HIGH.** Ex 25–40 has ~40 commentary units, many of them stubs, so Gudea could fuel their expansion. It is long, though, so start with Cylinder A i–xii (dream) and B (entry, dedication).

**46. Mīs pî / pīt pî (the induction ritual for divine statues)**
Akkadian–Sumerian, NA (Nineveh) and NB (Babylon) ritual tablets + incantation series; ~300 lines of ritual + incantations; MEDIUM.
- *Torah:*
  - The cult image, made by craftsmen in a workshop (*bīt mummi*), is "born" and has its mouth washed and opened. The craftsmen's hands are symbolically cut off with a tamarisk sword, and they swear "I did not make it, Ea/Ninagal made it".
  - Compare **Ex 32:4, 24 (Aaron: "I threw it in the fire and this calf came out")** and **Deut 4:15–28** ("you saw no form… gods, the work of human hands, wood and stone, that neither see nor hear nor eat nor smell", a precise inversion of the image's mouth, eyes, ears and nose being opened in the ritual). Also Ex 20:4, 23; Ex 20:25 (no iron tool on the altar); Isa 40:18–20, 44:9–20; Jer 10; Ps 115:4–8.
  - "Opening the mouth" and purification ↔ **Ex 4:10–12** ("I will be with your mouth"), **6:12, 30 *ʿaral sefatayim*** (units in the commentary), Isa 6:7.
- *Key studies:* **Walker & Dick 2001 *The Induction of the Cult Image in Ancient Mesopotamia*** (SAALT 1); Dick 1999 (ed., *Born in Heaven, Made on Earth*); **Hurowitz 2003** (JAOS 123, "The Mesopotamian God Image, from Womb to Tomb"); Hurowitz 2006 ("What goes in is what comes out", on Ex 32:24; verify); Levtow 2008 *Images of Others*; Berlejung 1998 *Die Theologie der Bilder*.
- *Consensus:* the Deutero-Isaiah and Jeremiah polemic ↔ mīs pî is **accepted**. The Ex 32:24 reading (Aaron disclaiming craftsmanship) is a **known, plausible proposal** (Hurowitz). Ex 4/6 is my own suggestion.
- *Benefit:* **MED-HIGH.** Deut 4 "ה ללא דמות" and Ex 32 are full units. The ritual's word list (eyes, ears, mouth, nose) maps exactly onto Deut 4:28.

**47. Babylonian Akītu ritual (Esagil Nisannu ritual, BM 32485 etc.) and other *kuppuru* texts**
Akkadian, Seleucid copies of NB texts; ~470 lines preserved (days 2–5); MEDIUM.
- *Torah:*
  - Day 5: the *mašmaššu* "purges" (***kuppuru***, cognate of ***kipper***) the Ezida chapel of Nabû. He wipes it with the carcass of a beheaded ram, then the ram's carcass and head are thrown into the river, and the slaughterer and exorcist must leave the city until the festival ends because they are impure. Compare **Lev 16** (*ve-khipper ʿal ha-qodesh*, the purging of sanctum and altar), **16:21–22** (the goat sent away), **16:26–28** (the man who led away the goat and the man who burned the remains wash and only then re-enter the camp).
  - The king is stripped of his insignia, struck on the cheek by the high priest, and **confesses** ("I did not sin… I did not neglect your rites"). Compare the high priest's confession, Lev 16:21 (*ve-hitvaddah*).
  - The reading of Enūma eliš on day 4 ↔ the link between cosmogony and festival.
  - Twelve days, the new year in Nisan (spring, and an autumn akītu too). Compare **Ex 12:2** ("this month shall be the first of months"), Lev 23:23–44 (the 1st, 10th and 15th of the 7th month), Num 29.
- *Key studies:* Thureau-Dangin 1921 *Rituels accadiens*; Sachs (ANET); **Linssen 2004 *The Cults of Uruk and Babylon***; Bidmead 2002 *The Akītu Festival*; Zgoll 2006 (AOAT); Pongratz-Leisten 1994 *Ina šulmi īrub*; **Milgrom 1991 *Leviticus 1–16*** (AB; on *kipper* = purge, with the akītu as comparison); Levine 1974 *In the Presence of the Lord*; Janowski 1982/2000 *Sühne als Heilsgeschehen*; Gane 2005 *Cult and Character*; Gane in Zondervan Backgrounds ✓; Wright 1987 *The Disposal of Impurity*; Feder 2011 *Blood Expiation in Hittite and Biblical Ritual* ✓ (Hittite side); Howe (Vienna, Mesopotamian "goat that expels evil" in Bīt rimki, Bīt mēseri, Udug-ḫul) ✓.
- *Consensus:* **kipper/kuppuru** is accepted lexically. The akītu ↔ Lev 16 structural parallel is **widely cited**. The scapegoat proper is closer to Hittite and Eblaite rites ✓ (search found no single study pairing akītu and kuppuru with Feder or Milgrom).
- *Benefit:* **HIGH.** Lev 16 ("טכס יום הכיפורים") is a major unit, and the purification of the sanctum, the ram's carcass, and the impurity of the ritual agents are word-level controls.

**48. Mesopotamian elimination and substitution rites: the Bīt rimki, Bīt mēseri, Udug-ḫul animal rites ("goat that expels evil"), namburbi (Maul 1994), the "substitute king" (*šar pūḫi*), and the *maškadu* scapegoat**
Akkadian–Sumerian, NA/NB; various (25–150 lines); GOOD-MEDIUM.
- *Torah:*
  - The goat or kid tied to the patient, then released to the steppe carrying the evil ↔ **Lev 16:10, 21–22** (*ʾel ʾerets gezerah*, *ha-midbarah*).
  - A **bird released to the open field** after a purification (Utukkū lemnūtu; namburbi) ↔ **Lev 14:4–7, 49–53** (*ve-shillaḥ ʾet ha-tsippor ha-ḥayyah ʿal penei ha-sadeh*).
  - Red wool, cedar and hyssop-like plants in purification ↔ **Lev 14:4, 6; Num 19:6** (*ʿets ʾerez u-shni tolaʿat ve-ʾezov*).
  - Substitution of an animal for a person (*pūḫu*, *dinānu*) ↔ **Gen 22:13** (*taḥat beno*), Ex 13:13, Lev 17:11.
  - Namburbi for evil omens ↔ "the averting of evil".
  - A ram as human substitute "its head for his head" ↔ the Aqedah.
- *Key studies:* **Maul 1994 *Zukunftsbewältigung*** (namburbi); Geller 2007/2016 (*Udug-ḫul*, *Healing Magic and Evil Demons*); Ambos 2013 (bīt rimki); Wright 1987; Janowski & Wilhelm 1993 ("Der Bock, der die Sünden hinausträgt"); **Zatelli 1998** (VT 48, Ebla scapegoat; see §4); Kümmel 1968 (*Ersatzkönig*); Feder 2011.
- *Consensus:* typological **accepted**. The bird release and the cedar/scarlet/hyssop triad are strong.
- *Benefit:* **MED-HIGH.** Lev 14 and Lev 16, Num 19, Gen 22: four major units. An anthology of ~6 short rites is ideal.

**49. Diagnostic and Prognostic Series (Sakikkū, SA.GIG) + *saḫaršubbû* texts + Šumma ālu fungus (katarru) omens**
Akkadian, MB → NA/NB (Esagil-kīn-apli's redaction, 11th c.); 40 tablets (~3,000 entries); house-fungus omens in Šumma ālu tablets ~10–12; MEDIUM.
- *Torah:*
  - **Lev 13** (*negaʿ tsaraʿat*, *seʾet*, *sappaḥat*, *baheret*, white hair, a spreading lesion, a 7-day isolation, the priest's "sight" of it). This parallels the Diagnostic Handbook's colour, spread and hair criteria and its diagnosis-with-prognosis form ("If his skin is white and… he is unclean / 'hand of Sîn'").
  - *Saḫaršubbû* (a "leprosy" sent by Sîn) leads to expulsion from the city: "may he roam outside the walls like a wild ass" (kudurru, treaties). Compare **Lev 13:45–46** (*badad yeshev miḥuts la-maḥaneh moshavo*), **Num 5:1–4, 12:10–15 (Miriam)**, Deut 24:8, 28:27.
  - **Šumma ālu, katarru**: "If red / green fungus appears on the wall of a man's house…", with a namburbi to remove it. Compare **Lev 14:33–53** (*negaʿ tsaraʿat be-veit*, *sheqaʿruroth yeraqraqot ʾo ʾadamdamot*: greenish or reddish streaks!).
- *Key studies:* Labat 1951; **Heeßel 2000 *Babylonisch-assyrische Diagnostik***; **Scurlock & Andersen 2005 *Diagnoses in Assyrian and Babylonian Medicine***; Scurlock 2014 (WAW 36, *Sourcebook*); Freedman 1998–2017 (*If a City Is Set on a Height*, Šumma ālu edition); **Meier 1989** ("House fungus: Mesopotamia and Israel (Lev 14:33–53)", RB 96; verify title); Milgrom 1991 (Lev 13–14); Stol 1993 *Epilepsy*; Kinnier Wilson.
- *Consensus:* the house-fungus parallel is **accepted and striking**. The diagnostic-form parallel to Lev 13 is accepted. The identification of *saḫaršubbû* with *tsaraʿat* is debated.
- *Benefit:* **MED-HIGH.** Lev 13–14 has ~12 commentary units; the colour terms and isolation logic give word-level controls. Translate an anthology (~150 entries + the saḫaršubbû curses).

**50. Šurpu and Maqlû**
- Šurpu: Akkadian (SB), MB composition; 9 tablets, ~1,000 lines; GOOD.
- Maqlû: Akkadian (SB), 1st mill.; 8 incantation tablets + ritual tablet, ~1,500 lines; GOOD.
- *Torah:*
  - **Šurpu II**: a long list of possible sins confessed or examined. Family ("he set son against father…"), sexual ("entered his neighbor's house, approached his neighbor's wife"), social ("used false scales… moved boundary… did not release a captive… refused water to the thirsty"), cultic (oaths, eating taboo, contact with an accursed person or an unclean woman; II 98–103). The *māmītu* (curse/oath) may be unknown to the sufferer. Compare **Lev 5:1–4** (*ve-neʿlam mimmenu*: an unwitting oath, touching uncleanness; Geller 1980 VT 30) ✓, **Lev 19** (false scales, robbery, deceit), the Decalogue (Ex 20, Deut 5), Ezek 18, Job 31.
  - **Maqlû**: burning figurines of the witch (*kaššāptu*, cognate of ***mekhashshefah***). Compare **Ex 22:17** (*mekhashshefah lo teḥayyeh*), Deut 18:10. It is also a night-long ritual (the "night of judgment").
- *Key studies:* **Reiner 1958 (Šurpu)**; **Abusch 2015/2016 (Maqlû edition and translation)**; Abusch 2002 *Mesopotamian Witchcraft*; Schwemer 2007 *Abwehrzauber und Behexung*; Geller 1980 ✓; van der Toorn 1985 *Sin and Sanction in Israel and Mesopotamia*; Haifa article on Šurpu IV ✓.
- *Consensus:* the Lev 5 link is **accepted**. The Decalogue / Lev 19 parallels are **thematic and accepted**.
- *Benefit:* **MED-HIGH** for Šurpu II–III (~300 lines), with Lev 4–5 (eight commentary units on *ḥaṭṭaʾt* and *ʾasham* for unwitting sin!) and Lev 19. For Maqlû, an excerpt (I, ritual tablet) is enough.

**51. Emar ritual texts (Installation of the NIN.DINGIR priestess; zukru festival; kissu; the "Emar calendar"; Emar wills)**
Akkadian (Syrian, LB, 14th–12th c.); NIN.DINGIR ~95 lines; zukru ~70; GOOD.
- *Torah:*
  - NIN.DINGIR installation: a **seven-day** installation with **anointing of her head with oil** ("they pour oil on her head"), sacrifices, a feast, and new garments. Compare **Ex 29 and Lev 8–9** (*millūʾim*, seven days at the tent door, anointing; *ve-yatsaq min shemen ha-mishḥah ʿal roʾsh ʾAharon*).
  - Zukru: a seven-yearly (!) festival of the whole town, with standing stones (*sikkānu*) anointed outside the city and a seven-day festival starting at the full moon. Compare **Deut 31:10–13** (*haqhel* "at the end of every seven years"), Lev 23:34–43 (Sukkot), Gen 28:18, 35:14 (the anointed *matsevah*), Ex 24:4.
  - Wills: a daughter appointed as "male and female" to carry the family gods and the inheritance. Compare **Num 27:1–11, 36** (the daughters of Zelophehad); Gen 31 (teraphim, as household gods and inheritance).
- *Key studies:* Arnaud 1985–87 (*Emar VI*); **Fleming 1992 *The Installation of Baal's High Priestess at Emar***; **Fleming 2000 *Time at Emar***; van der Toorn 1996 *Family Religion*; Cohen 2009 *The Scribes and Scholars of the City of Emar*; Ben-Barak 1988 (inheritance by daughters); Pentiuc 2001.
- *Consensus:* Lev 8 ↔ NIN.DINGIR is **accepted** (Fleming). Zukru ↔ Deut 31 is suggestive.
- *Benefit:* **MED-HIGH** for Lev 8 / Ex 29 (major units), the *matsevah*, and Num 27.

**52. Mesopotamian sacrifice and offering texts (the "Uruk ritual for the daily offerings"; *naptanu*; *taklīmu*; *nīqu*)**
Akkadian, Seleucid Uruk (TU 38, 39, 41; Linssen 2004); ~100–200 lines each; GOOD.
- *Torah:* the daily meals of the gods, morning and evening (*naptan šēri u lilāti*). Compare **Num 28:1–8 (*ʿolat tamid*, *ha-keves ʾeḥad taʿaseh va-boqer… ben ha-ʿarbayim*)** and **Ex 29:38–42**, Lev 6:1–6. The list of animals, the *ḫarû* bread, oil, honey and incense. Compare Lev 2 (*minḥah*; no honey! Lev 2:11), Ex 25:30 / Lev 24:5–9 (bread of presence), Ex 30:34–38 (incense). Note that whole burnt offerings (*šurpu* of animals) are rare in Mesopotamia, where the god "eats". The Torah's *ʿolah* contrasts with this, whereas Ugarit, Hittite and Aegean practice are closer.
- *Key studies:* Thureau-Dangin 1921; **Linssen 2004**; McEwan 1983; Lambert 1993 ("Donations of Food and Drink to the Gods"); Milgrom; Anderson 1987 *Sacrifices and Offerings in Ancient Israel*; Eberhart 2011; Hundley 2013.
- *Consensus:* the contrast (feeding vs burning) is accepted.
- *Benefit:* **MEDIUM** (Lev 1–7, Num 28–29: many units; the "food of God" *leḥem ʾelohav* language makes the contrast lexical).

### G. Other texts bearing mainly on the rest of the Hebrew Bible (secondary for the Torah)

**53. Ludlul bēl nēmeqi ("I will praise the lord of wisdom")**
Akkadian (SB), Kassite; 4–5 tablets, ~600 lines; GOOD (Oshima 2014; Annus & Lenzi 2010, SAACT 7).
- *HB:* Job; Ps 22, 38, 88; Lam 3. *Torah:* Deut 28:22, 27–29, 35 (diseases); Lev 26:16; dreams and divination failing.
- *Key studies:* Lambert 1960; Annus & Lenzi 2010; **Oshima 2014 *Babylonian Poems of Pious Sufferers***; Weinfeld 1988 ("Job and its Mesopotamian Parallels"); Mattingly 1990.
- *Benefit:* **LOW for the Torah**; HIGH for Job.

**54. Babylonian Theodicy; Sumerian "Man and his God"; "Dialogue between a Man and his God" (OB)**
Akkadian (acrostic, 27 stanzas, ~300 lines) and Sumerian (~140 lines); GOOD.
- *HB:* Job; Qohelet; Ps 73. *Torah:* Gen 18:23–25 (Abraham's challenge, *ha-shofet kol ha-aretz*); Deut 32:4.
- *Key studies:* Lambert 1960; Oshima 2014; Kramer 1955 (VTS 3).
- *Benefit:* **LOW for the Torah.**

**55. Dialogue of Pessimism**
Akkadian, ~86 lines; GOOD. *HB:* Qohelet. *Benefit:* **LOW.**

**56. City laments: Lamentation over Ur; Lament over Sumer and Ur; Uruk, Nippur, Eridu laments; balag/eršemma; Curse of Agade**
Sumerian, Ur III–OB (+ 1st-mill. bilingual balags); 400–500 lines each; GOOD.
- *HB:* Lamentations (the city as a weeping woman, the gods abandoning the city, the destroyed temple, "how?"), Ezek 9–11 (the divine abandonment of the temple), Jer.
- *Torah:* **Lev 26:31–33** (*ve-nattati ʾet ʿareikhem ḥorbah… ve-lo ʾariaḥ be-reiaḥ niḥoḥakhem*), **Deut 28:49–68, 29:21–27** ("why has the LORD done thus to this land?"), and Deut 32. Curse of Agade: Naram-Sîn's sacrilege, Enlil's anger, the Gutians "who know no restraint", famine, the curse on the city. Compare Deut 28:49–51 (*goy ʿaz panim… ʾasher lo tishmaʿ leshono*).
- *Key studies:* **Samet 2014 *The Lamentation over the Destruction of Ur*** (Israeli scholar); Michalowski 1989 *The Lamentation over the Destruction of Sumer and Ur*; **Cooper 1983 *The Curse of Agade***; Dobbs-Allsopp 1993 *Weep, O Daughter of Zion*; Gwaltney 1983; Berlin 2002 (Lamentations OTL); Cohen 1988 *The Canonical Lamentations*; Gabbay 2014 (*Pacifying the Hearts of the Gods*, eršemma/balag); Skweres 1970 (the "why has the LORD done thus" pattern in Assyrian annals: Assurbanipal's Rassam Cylinder IX 68–72, a text that is itself worth an excerpt).
- *Consensus:* Lamentations ↔ Sumerian laments is accepted as genre (with a mediation gap of 1,500 years).
- *Benefit:* **LOW-MEDIUM for the Torah** (Deut 28–29, Lev 26), HIGH for Lamentations. Curse of Agade (~280 lines) is the most Torah-relevant.

**57. Sumerian and Akkadian love poetry (Dumuzi–Inana songs; Nabû–Tašmētu)**
*HB:* Song of Songs. *Torah:* almost none (Gen 2:23–24, 29). *Benefit:* **LOW.**

**58. Marduk Prophecy; Šulgi Prophecy; Uruk Prophecy; Dynastic Prophecy (Akkadian "prophecies" / ex eventu)**
Akkadian, 12th c. (Marduk) – Hellenistic; 50–150 lines each; MEDIUM-FRAGMENTARY.
- *Torah:* the god's statue goes into exile (to Ḫatti, Assyria, Elam) and returns, bringing blessing to the land. Compare **Deut 30:1–10** (*ve-shav YHWH ʾeloheikha ʾet shevutkha*), Deut 4:25–31 (exile and return), the ark narrative (1 Sam 4–6). The "a king will arise" ex-eventu style ↔ Num 24:17–24 (Balaam's "end of days", *ʾaḥarit ha-yamim*), Gen 49.
- *Key studies:* Longman 1991; **Neujahr 2012 *Predicting the Past in the Ancient Near East***; Grayson & Lambert 1964; Borger 1971; Hallo 1966.
- *Consensus:* Daniel parallels accepted. The Torah links are suggestive.
- *Benefit:* **MEDIUM-LOW** (Num 24:14–25, "חזון אחרית הימים", is a unit; Deut 30).

**59. Neo-Assyrian prophecies (SAA 9) and Assyrian royal inscriptions (Tiglath-pileser III, Sargon II's 8th Campaign, Sennacherib's Annals, Esarhaddon's Apology & Babylon inscriptions, Assurbanipal's Rassam Cylinder)**
Akkadian, 8th–7th c.; large corpus; GOOD.
- *HB:* Kings, Isaiah (Sennacherib & Hezekiah), Nahum, Isa 10, 36–37.
- *Torah:*
  - Conquest accounts and *ḫerem*-like annihilation ↔ Num 21:21–35, 31; Deut 2–3, 7, 20 (the tree-cutting prohibition, **Deut 20:19–20**, against Assyrian orchard-cutting in sieges (Wright 2008, JBL 127, "Warfare and Wanton Destruction"); Og's iron bed (Deut 3:11) ↔ royal display of giants' artifacts?).
  - The "why has the god done this" question (Rassam IX) ↔ Deut 29:23–27.
  - Sargon's 8th Campaign letter to Aššur ↔ the Deut 1–3 itinerary-narrative form.
  - Esarhaddon's "Babylon" inscriptions: Marduk wrote 70 years, then turned the tablet to 11 ↔ Jer 25.
  - Prophecy "Fear not, Esarhaddon!" ↔ **Gen 15:1, 26:24, Deut 1:21, 31:6–8**.
- *Key studies:* Younger 1990 *Ancient Conquest Accounts*; **Parpola 1997 (SAA 9)**; Nissinen 1998/2003; **Wright 2008** (JBL); Grayson & Novotny RINAP; Machinist 1983 (JAOS 103, "Assyria and its Image in First Isaiah"); Aster 2017 *Reflections of Empire in Isaiah 1–39*; Weinfeld 1972; Crouch 2009 *War and Ethics in the ANE*.
- *Benefit:* **MEDIUM** (selected excerpts for Deut 1–3, 20, and Num 21–24).

**60. Cyrus Cylinder; Nabonidus Chronicle; Babylonian Chronicles; Weidner Chronicle**
Akkadian, 6th c. (Cyrus 45 lines; chronicles various); GOOD.
- *HB:* Isa 44:28–45:7, Ezra 1, Kings, Daniel. *Torah:* ~none (the Weidner Chronicle's theology of cult neglect bringing the fall of dynasties ↔ the Deuteronomistic scheme, Deut 28).
- *Benefit:* **LOW for the Torah.**

**61. Tukulti-Ninurta Epic**
Akkadian (MA), 13th c.; ~700 lines; FRAGMENTARY. *Torah:* the Kassite king breaks his oath and his gods abandon him, the treaty tablet opened before Šamaš as evidence ↔ Deut 31:26–28 (*le-ʿed*), 32 (the covenant lawsuit). *Key study:* Machinist 1976 (CBQ 38, "Literature as Politics"). *Benefit:* **LOW-MEDIUM.**

**62. Anzû; Lugal-e; Angim (Ninurta myths)**
Akkadian / Sumerian; 400–700 lines; GOOD. *Torah:* the Tablet of Destinies stolen and recovered ↔ the tablets of the covenant (Ex 24:12, 31:18, 32:15–19, 34) (weak); Lugal-e's assignment of fates to stones ↔ the breastpiece stones (Ex 28:17–21) (weak; low); the divine warrior ↔ Ex 15. *Benefit:* **LOW.**

**63. Descent of Ištar / Inana's Descent**
Sumerian/Akkadian; ~400 / ~140 lines; GOOD. *Torah:* the seven gates and stripping of garments, then the netherworld "land of no return" ↔ *sheʾol* (Gen 37:35, Num 16:30–33). Fertility ceases when Ištar is below ↔ ? *HB:* Ezek 8:14 (Tammuz). *Benefit:* **LOW** (Num 16 is weak).

**64. Mesopotamian astral/astronomical compendia: MUL.APIN; Enūma Anu Enlil (excerpts)**
Akkadian, MUL.APIN c. 1000 BCE; 2 tablets, ~800 lines; GOOD.
- *Torah:* **Gen 1:14–18** (lights "for signs and for seasons, days and years", "to rule the day and the night"); stars "named" (Isa 40:26); Deut 4:19 (the sun, moon and stars "allotted to all the peoples", against astral worship); Deut 17:3. EAE omens (eclipse = sign) ↔ *le-ʾotot*; Jer 10:2 ("do not be dismayed at the signs of heaven").
- *Key studies:* **Hunger & Pingree 1989 / Hunger & Steele 2019 (*The Babylonian Astronomical Compendium MUL.APIN*)**; Rochberg 2004 *The Heavenly Writing*; Horowitz 1998; Koch-Westenholz 1995.
- *Consensus:* the cultural background is accepted (the ZThK 2009 article places Gen 1:14–19 within the 7th-century Mesopotamian science milieu) ✓.
- *Benefit:* **MEDIUM.** The fourth day is in the active unit. An excerpt (the star lists, the month schemes, the intercalation rules) suffices.

## 4. OUT OF SCOPE (non-Mesopotamian), noted for completeness

| Text | Language | Torah relevance | Note |
|---|---|---|---|
| **Baal Cycle** (KTU 1.1–1.6), **Kirta**, **Aqhat**, **"Birth of the Gracious Gods" (KTU 1.23)** | Ugaritic | Gen 1:2, 21 (*tnn*, *Ltn* = Leviathan, Yam); Ex 15; Deut 32:8–9 (sons of El, "Elyon"); patriarchal type-scenes (childless king, divine visit with a meal ↔ Gen 18); Ex 23:19 "kid in milk" (KTU 1.23, **now rejected**: the reading is wrong) | Probably the single most important comparanda for Gen 1:21 "tanninim" and Deut 32. Smith 1994/2009; Day 2000. **Very high** if the scope ever widens. |
| **Deir ʿAllā "Balaam" plaster text** | Aramaic/"Gileadite" | Num 22–24: "Balaam son of Beor, a seer of the gods" (*ḥzh ʾlhn*); a night vision; the divine assembly (*šdyn*) | Hoftijzer & van der Kooij 1976; Levine 2000 (AB). **Very high** for Num 22–24. Short. |
| **Sefire treaties; Tell Fekheriye bilingual** | Aramaic (Fekheriye Akkadian–Aramaic) | Deut 28:38–40 futility curses ("sow and not reap"); Lev 26:26 ("ten women bake in one oven" ↔ Fekheriye "a hundred women bake in one oven and not fill it") | Quick 2017 ✓. Fekheriye is half Akkadian: arguably IN scope. **High** for Lev 26/Deut 28. |
| **Hittite treaties** (Muršili–Kupanta-Kurunta, Šuppiluliuma–Šattiwaza, etc.) | Hittite/Akkadian | Ex 19–24, Deut 1–30 covenant form (preamble, historical prologue, stipulations, deposition and reading, witnesses, blessings/curses) | Mendenhall 1955; McCarthy 1963/1978; **Kitchen & Lawrence 2012 *Treaty, Law and Covenant***; Weinfeld 1972. Debated (NA vs Hittite model). Note: several are in **Akkadian** (the diplomatic lingua franca), so translatable within the folder's competence. |
| **Hittite rituals: Ašḫella, Uḫḫamuwa, Pulisa, Ambazzi; Instructions for Temple Officials; Plague Prayers of Muršili** | Hittite | Lev 16 (scapegoat), Lev 14; Num 18 (Levitical guard duty; Milgrom 1970); 2 Sam 24 / Ex 30 (plague for a sin) | Wright 1987; Feder 2011 ✓; Milgrom 1970. **High** for Lev 16. |
| **Hittite Laws** | Hittite | Lev 18, 20 (bestiality distinctions); Deut 22:23–27 (mountain vs house, HL §197); Gen 38 levirate (HL §193) | Hoffner 1997. Medium-high. |
| **Ebla scapegoat texts** (ARET 11) | Eblaite (Semitic, cuneiform; 24th c.) | Lev 16:21–22 (a goat with a silver bracelet driven to the steppe of Alini before the royal couple enters a new mausoleum) | Zatelli 1998 (VT); Fronzaroli 1993/1997. Cuneiform Semitic, so borderline in-scope. **High** for Lev 16. |
| **Egyptian: Tale of Two Brothers** | Egyptian (NK) | Gen 39 (Potiphar's wife) | Redford 1970. High for Gen 39. |
| **Egyptian: Instruction of Amenemope; Sinuhe; Wenamun; Memphite Theology; Book of the Dead 125; Hymn to Aten; Famine Stela; Merneptah Stela; Admonitions of Ipuwer; Chester Beatty III dream book; magicians' tales (Westcar)** | Egyptian | Prov 22–24; Ex 2:15–22 (flight of Moses ↔ Sinuhe); Gen 1 creation by word (Memphite); the Decalogue / Deut 26:13–14 confession ↔ BD 125 "negative confession"; Ps 104; Gen 41 (seven years of famine); Ex 7–12 (magicians, plague motifs; Ipuwer is debated); Gen 40–41 dreams | Hoffmeier 1997; Redford 1992; Currid 1997; Noegel 2007. Several are **high** for Gen 37–50 and Ex 1–14, the books' Egyptian setting. |
| **Mesha Stele** | Moabite | Num 21:29 (Kemosh), Num 32 (Ataroth, Nebo, Dibon), Deut 2–3; *ḥrm* | High for Num 21, 32. Short. |
| **Ketef Hinnom amulets** | Hebrew | Num 6:24–26 | Hebrew already, so no translation is needed. |
| **Kuntillet ʿAjrud, Khirbet el-Qom** | Hebrew | Deut 6:4, 33:2 ("YHWH of Teman"), Ashera | Hebrew already. |

## 5. Recommendations

1. **Translate Enūma eliš I and IV–VI now.** The commentary is on Gen 1's fifth day: tanninim, the creatures of the waters, the luminaries, and rest. Pair it with three short Gen 1–2 companion texts as one "creation corpus", parallel to the flood corpus: the bilingual Marduk creation (CT 13 35–38), Enki & Ninmaḫ, and KAR 4. Add the Song of the Hoe and the Ewe and Grain prologue. Optionally add Bird and Fish (for the fifth day) and hemerology/šapattu excerpts (for Gen 2:1–3). Surface Atraḫasis I (creation of man) in the parallels index.
2. **The Eden corpus:** Adapa, Gilgameš I (+VI–VII, X), and Enki & Ninḫursaĝ. With the Wasserman–Cohen book and the George edition already in `sources/`, Gilgameš I is cheap.
3. **Genesis 8:20–11:26 (uncommented):** Enūma eliš VI (Esagil bricks), the EE VI 82–91 bow, the Enmerkar "spell of Nudimmud", bāb-ilī and Etemenanki texts, and the Nabonidus Harran texts. These would shape the block from scratch.
4. **Law and ritual corpus (longer horizon, high yield):** LH (selection) + LE §53–58 + MAL A (selection) + the herding contract; the Ammiṣaduqa Edict; EST (§4, 10, 12, 24, 39–42, 47, 56, 63–64); the akītu day-5 kuppuru; elimination rites; Šurpu II; the Diagnostic Handbook / katarru anthology; mīs pî; Gudea (selections); the Emar NIN.DINGIR.
5. **Single-text quick wins:** the Sargon Birth Legend (Ex 2), the Ballad of Early Rulers / 120 years (Gen 6:3, Deut 34:7), and the Lecanomancy excerpt (Gen 44:5).
6. **Methodological "negative" set** (to show what doesn't hold, in line with the commentary's demand for rigor): Nuzi wife-sister/teraphim, the Chedorlaomer texts, Dumuzi & Enkimdu ↔ Cain/Abel, and the Enki & Ninḫursaĝ rib pun.

## 6. Sources consulted online (Oct 2026)

- Walton / Johnston / Day on Chaoskampf: tyndalebulletin.org, galaxie.com (Johnston 2008), b-hebrew archive.
- Gnuse 2023: https://www.intechopen.com/chapters/86371 ; ZThK 2009 "Antibabylonische Polemik…": https://www.mohrsiebeck.com/en/article/antibabylonische-polemik-im-priesterlichen-schoepfungsbericht-101628zthk-2009-0001
- EST/Deut: Crouch 2014 (SBL), Levinson 2010, Levinson & Stackert: https://verbumetecclesia.org.za/index.php/ve/article/view/870/1867 ; https://keibi.uni-tuebingen.de/Record/KEI00124626 ; https://bibleinterp.arizona.edu/node/3822
- Wright 2009: https://search.worldcat.org/title/297149232 ; https://equinoxpub.com/home/view-chapter/?id=26705
- Sargon/Moses: https://alhatorah.org/Moshe%27s_Birth_and_the_Legend_of_Sargon/Table ; https://philarchive.org/rec/GALFAT-7
- Mesopotamian "goat that expels evil" (Howe): https://orientalistik.univie.ac.at/fileadmin/user_upload/i_orientalistik/Artikel/Adam_Howe_Abstract.pdf ; Feder: https://scriptura.journals.ac.za/pub/article/view/61/66 ; Gane: https://zondervanacademic.com/blog/azazel-and-the-scapegoat
- Jubilee / Ammiṣaduqa: https://scholar.sun.ac.za/items/00c076fc-eaea-44b5-9040-0aa700e46c5d ; Lemche: Cambridge chapter; Carmichael 1999: https://www.bsw.org/biblica/vol-80-1999/the-sabbatical-jubilee-cycle-and-the-seven-year-famine-in-egypt/321/article-p239.html ; Rogers 2020 review: https://journals.qucosa.de/arbeitstitel/article/download/207/218
- Gudea / Hurowitz: https://en.wikipedia.org/wiki/Gudea_cylinders ; https://keibi.uni-tuebingen.de/Record/KEI00040906 ; https://keibi.uni-tuebingen.de/Record/KEI00122027
- Enmerkar: https://en.wikipedia.org/wiki/Enmerkar_and_the_Lord_of_Aratta ; https://intertextual.bible/book/enmerkar-and-the-lord-of-aratta
- Adapa: https://www.worldhistory.org/article/216/the-myth-of-adapa ; Izre'el 2001 record https://oeaw.ac.at/resources/Record/9781575065243
- Mettinger 2007: https://www.eisenbrauns.org/books/titles/978-1-57506-141-2.html
- Herding contract: https://keibi.uni-tuebingen.de/Record/KEI00088716 ; Landman 2019: https://zar.harrassowitz-library.com/article/ZAR/2019/1/8
- Chedorlaomer: https://en.wikipedia.org/wiki/Chedorlaomer
- MAL & Deut: https://www.thetorah.com/article/the-rape-of-the-unbetrothed-virgin-in-torah-and-assyrian-law ; https://revistas.usp.br/rfdusp/article/view/115485 ; https://karolinum.cz/data/clanek/15223/PHS_55_2_0023.pdf
- Census/Mari: https://keibi.uni-tuebingen.de/Record/KEI00099493 ; Liver 1963 (HTR)
- Šurpu: https://en.wikipedia.org/wiki/%C5%A0urpu ; https://intertextual.bible/p/5195 ; Haifa (Šurpu IV)
- Dreams: https://faculty.washington.edu/snoegel/PDFs/reviews/bilbija-review-nocturnal-ciphers-ZA-2008.pdf ; https://keibi.uni-tuebingen.de/Record/KEI00110616
- Cain/Abel: https://rsc.byu.edu/creation-sinai/cain-abel-genesis-4-moses-5
- Deut 17: https://cris.huji.ac.il/en/publications/the-law-of-the-king-deuteronomy-1714-20-in-the-light-of-empire-an/

Items marked "verify" in the text are from memory and should be checked before they are cited in the commentary.
