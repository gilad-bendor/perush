# Curated translation candidates: the rest of the ancient world

Compiled 2026-10-21, in a Claude Cloud session, at the user's request: "Up until now, we focused solely on translating
ancient *Mesopotamian* texts. But what about the rest of the world? … I am primarily focused on really ancient texts, or
at least texts that wrote ancient oral traditions."

It is the companion of [`curated-translation-candidates.md`](curated-translation-candidates.md), the Mesopotamian list.
It rests on ten regional surveys, made by ten parallel research agents and kept in `curation-surveys/`. Each survey has a
full entry per text: dates, size, condition, Bible parallels, the "soul" window, base text, tools, existing translations,
risks. It also has access notes and sources. **Read the survey before scoping a project.** This file only ranks and
connects.

| Region | Survey | Texts surveyed (ranked) |
|---|---|---|
| The Levant and Syria (Ugaritic, Phoenician/Punic, Aramaic, Moabite, epigraphic Hebrew, Eblaite) | [`world-survey--levant-nw-semitic--2026-10-21.md`](curation-surveys/world-survey--levant-nw-semitic--2026-10-21.md) | 19 (+ ~40 families) |
| Egypt (Old–Late Egyptian, Demotic) | [`world-survey--egypt--2026-10-21.md`](curation-surveys/world-survey--egypt--2026-10-21.md) | 22 |
| Anatolia (Hittite, Hurrian, Luwian, Urartian) | [`world-survey--anatolia--2026-10-21.md`](curation-surveys/world-survey--anatolia--2026-10-21.md) | 20 |
| Iran and India (Avestan, Old Persian, Elamite, Vedic, Sanskrit, Pali, Old Tamil) | [`world-survey--iran-india--2026-10-21.md`](curation-surveys/world-survey--iran-india--2026-10-21.md) | 19 |
| The Aegean and Italy (Linear B, Archaic Greek, Etruscan, Old Latin, Umbrian) | [`world-survey--greek-aegean-italic--2026-10-21.md`](curation-surveys/world-survey--greek-aegean-italic--2026-10-21.md) | 14 |
| East and Central Asia (China, Japan, Korea, Tibet, Mongolia, Old Turkic, Sogdian) | [`world-survey--east-central-asia--2026-10-21.md`](curation-surveys/world-survey--east-central-asia--2026-10-21.md) | 20 (+ 27 entries) |
| Northern Europe and the Caucasus (Celtic, Germanic, Norse, Baltic, Slavic, Finnic, Ossetian, Georgian, Armenian) | [`world-survey--europe-north-caucasus--2026-10-21.md`](curation-surveys/world-survey--europe-north-caucasus--2026-10-21.md) | 20 |
| The Americas (Maya, Nahuatl, K'iche', Quechua, Guarani, North America) | [`world-survey--americas--2026-10-21.md`](curation-surveys/world-survey--americas--2026-10-21.md) | 20 |
| Arabia, Ethiopia and Africa beyond Egypt (Sabaic, Safaitic, Dadanitic, Nabataean, pre-Islamic Arabic, Ge'ez, sub-Saharan oral texts) | [`world-survey--arabia-africa--2026-10-21.md`](curation-surveys/world-survey--arabia-africa--2026-10-21.md) | 22 |
| The Pacific, Island SE Asia, Australia, Siberia and the Arctic (+ classical SE Asia) | [`world-survey--pacific-australia-siberia--2026-10-21.md`](curation-surveys/world-survey--pacific-australia-siberia--2026-10-21.md) | 19 |

**Caveat on the searches.** The session's web-search budget (about 200 searches, shared by the ten agents) ran out part-way
through. Access, sizes and licences were then checked by fetching the hosts directly (marked **verified** in the surveys).
Bibliographic details from the agents' own knowledge are marked **reported** or **verify**. The weakest point is the list of
**existing Hebrew translations**: the National Library of Israel catalogue answered 403 to scripts. Check it in a browser
before a project starts.

---

## 1. How this list is ordered

The two purposes of guidelines §1, equal in standing:
1. **The Bible**: the commentary's priorities. (1) Gen 1–3, now Gen 1:20–23, the fifth day and the *tanninim*;
   (2) Gen 8:20–11:26, which has no commentary yet; (3) the rest of Genesis and the Exodus narrative; (4) law and ritual.
2. **The soul of the ancients**: a window onto how people saw the world, prayed, mourned, loved, judged and joked.

Within both, the user's preferences:
- **Antiquity.** The older the better, or a later text that records an old oral tradition. Each entry gives both dates.
- **Condition, and size.** Texts in good condition; medium or large texts, or a corpus of short ones.
- **No purchases** (the standing rule). Paid sources are recorded, not used.

What this list adds to the Mesopotamian one is **feasibility from the original language**: an open base text in the
original (with transliteration where the script needs it), open dictionaries, and an honest rating of how well Claude
reads the language. A text that cannot be translated from its own language with control is ranked down, however
interesting it is.

**One distinction runs through the whole list.** Some of these cultures were in contact with Israel: the Levant, Egypt,
Anatolia, and through Persia, Iran. There a parallel can be a *source*, as in Mesopotamia. The others (India, China, Greece
before the Hellenistic age, the Americas, the Pacific) give **typological** parallels: the same motif, reached
independently. A typological parallel cannot show what the Torah's authors kept or changed. It shows what is universal in
a motif, and so what is *particular* in the Torah's version. That is a real use, but a different one. The apparatus should
tag it differently (§7, decision 3).

---

## 2. The main findings

1. **The best non-Mesopotamian text for the commentary right now is Ugaritic.** The Baal Cycle has *tnn* (the Hebrew
   *tannin*) muzzled by Anat, beside "the twisting serpent, the tyrant with seven heads" (KTU 1.3 III 38–42). It has Lotan,
   "the fleeing serpent … the twisting serpent" (KTU 1.5 I 1–3), almost word for word Isa 27:1. And it has *tnn* in the sea
   (1.6 VI). Gen 1:21 makes the same creature something God *created* (*va-yivra*), the only *bara* between 1:1 and 1:27.
   KTU 1.23 has "the birds of heaven and the fish in the sea", the fifth day's own pair. **And Ugaritic can now be
   translated from an open, word-glossed base text:** the Copenhagen Ugaritic Corpus (Zenodo, CC BY-NC 4.0; 278 tablets,
   7,616 lines; every word parsed and glossed; verified).
2. **Egypt is the second great source, and it is open.** AED-TEI, a CC BY-SA 4.0 conversion of the official TLA snapshot of
   2018, gives about 11,400 Egyptian texts. Each comes with lemmatized transliteration, damage markup, line numbers and German
   translations (verified). It has nearly the whole classical literature, the Pyramid Texts, the Book of the Dead and
   Amenemope. The live TLA website blocks scripts and shows a decoy page to crawlers: never use it as data.
3. **Hittite, too, has a new open corpus.** TLHdig 0.3 (Zenodo, May 2026, CC BY 4.0) has transliterations of essentially
   every published Hittite tablet, with German word glosses (verified). It is per manuscript, so a project must build its own
   composite, and it has no translations. The Mainz portal with its edited texts was offline on 2026-10-21. Its new address,
   `hethport.net`, answered 200 later that day: re-test it.
4. **Several of the world's oldest and best-preserved texts come with full digital philology.** The Rigveda (VedaWeb: every
   word parsed, five texts and five translations, CC BY / BY-NC-SA). Hesiod and Homer (the Perseus treebank: lemma and
   morphology for every word). The Finnic runes (SKVR: 89,247 oral poems, CC BY 4.0). Old Japanese (ONCOJ, CC BY 4.0, glossed).
   The Florentine Codex's Nahuatl (Zenodo, CC BY 4.0). Safaitic (OCIANA, CC BY 4.0 PDFs). For these, Claude would have more
   linguistic control than it had for many Sumerian texts.
5. **Almost every region has a text for the fifth day.** Sea monsters, the waters, and the order of living things appear
   everywhere. Gathered together they make a world dossier for Gen 1:20–23, the unit being written now (§5A).
6. **The block with no commentary, Gen 8:20–11:26, is well served.** The rainbow "set in the cloud, a sign for mortal men"
   (Il. 11.27–28 ↔ Gen 9:13). Giants piling mountains "so that heaven might be scaled" (Od. 11.305–320 ↔ Gen 6:4, 11:4).
   Seventy sons of Athirat (↔ Gen 10, Deut 32:8). The post-flood sacrifice whose smoke *angers* the gods (Leyenda de los
   Soles, the reverse of Gen 8:21). The Table of Nations' names in Hittite, Luwian, Urartian, Sabaic and Dadanitic texts. And
   a whole reception literature: Irish, Russian, Armenian and Georgian origin stories built on Gen 10–11 (§5D).
7. **Law and ritual gain a great deal**, mostly where no Hebrew translation exists:
   - the Hittite Laws, the Instructions for Temple Personnel (↔ Num 18) and the elimination rituals (↔ the goat for Azazel);
   - the Sabaean confession inscriptions: public penance for intercourse during menstruation (↔ Lev 15:19–24, 18:19);
   - the Vīdēvdād (corpse impurity ↔ Num 19);
   - the Norito Ōharae (incest and bestiality as "sins" carried off by rivers ↔ Lev 18, 20, 16:21–22);
   - the Gortyn Code and the Cyrene purity law;
   - the Punic sacrificial tariffs (↔ Lev 1–7);
   - Ugaritic ritual (*ʿrb špš w ḥl* ↔ Lev 22:7).
8. **"The soul of the ancients" is richest where the texts are best preserved.** Egypt (Sinuhe, the Shipwrecked Sailor, about
   55 love songs, the Man and his Ba: all near-complete); the Shijing; the Hittite plague prayers; the Rigveda's funeral hymns
   and its gambler; the Gāthās; Sangam Tamil and the Therīgāthā; the Muʿallaqāt; Safaitic laments; the Nahuatl
   *huehuetlatolli*; Māori laments; the Kumulipo.
9. **A mirror for the commentary's own method.** The Derveni papyrus (text c. 420–400 BCE, roll c. 340–320) is the oldest
   surviving word-by-word allegorical commentary on a sacred poem. The commentator quotes an Orphic theogony lemma by lemma
   and asks why the poet used each word, as `פירוש/` does with the Torah. Its Greek is © (Olschki 2006): consult it, don't commit it.
10. **Hebrew translations are few, old, or selections without an apparatus.** The only public-domain ones found are Cassuto's
    *האלה ענת* (1951; on Ben-Yehuda) and Tchernichovsky's Homer and Edda pieces. **No existing Hebrew translation of any
    candidate has a line-by-line apparatus of biblical parallels.** That apparatus, not a new literary version, is what this
    project adds. (Details per text in the surveys.)

---

## 3. Tier 1: the next projects (high on both purposes, open base text, feasible)

### 1. The Ugaritic myths: the Baal Cycle (KTU 1.1–1.6) and the short myths and charms
- **Language and date:** Ugaritic. The tablets are late 13th c. BCE (the scribe Ilimilku). The tradition is older: a storm
  god's fight with the Sea is attested at Mari, c. 1770 BCE.
- **Size and condition:** the Baal Cycle has 1,372 tablet lines (1.3–1.4 good, 1.1–1.2 poor, 1.5–1.6 medium). The short myths
  and charms add about 560 lines: KTU 1.23 (Šaḥar and Šalim), 1.24 (Nikkal and Yarikh), 1.114 (El's banquet), 1.100 + 1.107
  (serpent charms), 1.108 (Rapiʾu), 1.82–1.83 (*tnn*).
- **Bible:**
  - **Gen 1:21** (*tnn*, *ltn*, *bṯn*); Gen 1:2, 1:9; **Gen 1:20–22** (KTU 1.23:62–63, the birds of heaven and the fish of the sea);
  - Gen 2:10 (El at the sources of the two rivers);
  - **Gen 7:11, 8:2** (Baal's window ↔ *arubbot ha-shamayim*); **Gen 10 / Deut 32:8** (the seventy sons of Athirat);
  - **Gen 9:20–27** (El drunk, carried home by his sons, KTU 1.114);
  - Ex 15; Lev 19:27–28, Deut 14:1 (El's mourning rites); Deut 1:4, 3:11 (Rapiʾu in Ashtaroth and Edrei).
  - The "kid in its mother's milk" reading of KTU 1.23 (↔ Ex 23:19) is now rejected: say so.
- **Soul:** the death and return of the rain; divine kingship; mourning; feasting; a drunken father god.
- **Base text:** the Copenhagen Ugaritic Corpus (Zenodo, CC BY-NC 4.0, verified). Keep it git-ignored with a fetch recipe
  (guidelines §8); commit only our translation. KTU³ is paid. The future critical edition is Göttingen's EUPT: check it first.
  DULAT is the dictionary. Cassuto 1951 is the public-domain Hebrew register check (rank 5–6).
- **Feasibility:** good. The script is consonantal, so the vocalization is ours, and there are hapaxes. But there are many
  modern translations to check against, and Hebrew is the closest cognate of all.
- **Benefit:** Bible HIGH / Soul HIGH. **Recommendation: the first non-Mesopotamian corpus.** It speaks to the unit being
  written now.
- **Then (Tier 2, same corpus):** Aqhat and the Rephaim texts (*rḥp* "hover" ↔ Gen 1:2 *meraḥefet*; the son who holds his
  drunk father's hand ↔ Gen 9:23); Kirta (the newly-wed sent to war, the case Deut 20:7 exempts); the ritual texts (↔ Lev 1–7,
  22:7); the letters ("seven and seven times" ↔ Gen 33:3).

### 2. Egyptian wisdom and creation: Amenemope, Merikare, the Memphite Theology, the Heavenly Cow, the Pyramid Text "not yet" spells
- **Language and date:**
  - Amenemope: Late Egyptian, composed c. 1300–1075 BCE, complete (551 lines, essentially no damage).
  - Merikare's creation passage (E 130–138): Middle Egyptian.
  - The Memphite Theology: the Shabaka Stone, c. 710 BCE; the composition is debated.
  - The Book of the Heavenly Cow: on Tutankhamun's shrine, c. 1325 BCE.
  - The Pyramid Texts: c. 2350 BCE, the oldest religious corpus on earth.
- **Bible:**
  - **Amenemope** ↔ Prov 22:17–24:22 (dependence broadly accepted). In the Torah: the boundary stone (Deut 19:14, 27:17); the
    balance and weights (Lev 19:35–36, Deut 25:13–16); the blind and the lame (Lev 19:14); the widow's field (Deut 24:19–21).
  - **Merikare** in one passage: mankind "the cattle of god … for their sake he made heaven and earth, having driven off the
    greed of the water … made breath for their noses … they are his images … he made fowl and fish to feed them" ↔ Gen 1:2,
    1:21, 1:26–30, 2:7 (verified in AED's German).
  - **The Memphite Theology**: creation by heart and tongue, then Ptah "rested" ↔ Gen 1, 2:2.
  - **The Heavenly Cow**: the decision to destroy mankind, the god's relenting, his withdrawal to the sky ↔ Gen 6:5–8,
    8:21–22, 11.
  - **The Pyramid Texts**: "when heaven had not yet come into being" ↔ Gen 2:4b–5.
- **Soul:** the ethics of *maat*; the "silent man"; how Egyptians imagined the first moment; the goddess drunk on red beer.
- **Base text:** AED-TEI (CC BY-SA 4.0, committable; verified) for Amenemope, Merikare, the Heavenly Cow, the Pyramid Texts,
  BD 17 and Bremner-Rhind. For the Memphite Theology: Sethe 1928 (PD) and El Hawary 2010 (OBO 243, open access).
  Hornung's *Himmelskuh* (OBO 46) is open access. Lange 1925 (Amenemope) is PD.
- **Feasibility:** medium risk for Middle and Late Egyptian from AED's lemmatized transliteration, *if* the German
  translation is hidden on the first pass (guidelines §3: form your own reading first). The Pyramid Texts carry high risk:
  keep them a small selection.
- **Benefit:** Bible HIGH / Soul HIGH. Shupak 2016 (Bialik) has Amenemope in Hebrew, without an apparatus.

### 3. Hesiod: the Theogony and Works and Days
- **Language and date:** epic Greek, c. 730–680 BCE, oral-traditional; 1,022 + 828 lines, complete.
- **Bible:**
  - **Gen 1:1–5**: Chaos first; Night, then Day born from it (↔ "evening and morning").
  - **Gen 1:21**: Keto and her monster brood. The LXX renders the *tanninim* as κήτη, the same word. Typhoeus has a
    hundred snake heads, a δράκων (↔ Leviathan; the LXX's δράκων in Isa 27:1).
  - **Gen 2–3**: Pandora shaped from earth; "before, the tribes of men lived apart from evils, without hard toil" (WD 90–92);
    "before excellence the gods have set sweat" (WD 289 ↔ *be-zeʿat appekha*, 3:19).
  - **Gen 6:1–4**: the *hēmitheoi*, the demigods (WD 159–160).
  - **Gen 8:20–21**: the sacrifice at Mekone, which divides gods from men.
  - **Lev 26 / Deut 28**: the just and the unjust city (WD 225–247). Gen 2:3: "the seventh, a holy day" (WD 770).
  - And through the Hurro-Hittite Kumarbi cycle, the bridge between the Near East and Greece.
- **Soul:** theodicy, labour, justice, the farmer's year, the first poet's "I".
- **Base text:** Perseus (Evelyn-White 1914, PD; CC BY-SA markup) and the Perseus treebank, verified. Fetch through
  `raw.githubusercontent.com` or a treeless `git clone`; the GitHub web pages and API are blocked. LSJ per word through Logeion.
- **Feasibility:** excellent.
- **Benefit:** Bible HIGH / Soul HIGH. Hebrew: Spann 1956 (all three poems), Shabtai 2004 (WD), Bouzaglo 2017 (Theogony):
  none with a Near Eastern apparatus.

### 4. Hittite law and ritual: the Laws, the Instructions for Temple Personnel, the elimination rituals
- **Language and date:** Hittite.
  - The Laws: about 200 §§, Old Hittite (c. 1650–1500 BCE), with an Old Script manuscript of the 16th c.
  - The Instructions: Middle Hittite, c. 1400; composite about 330 lines.
  - The rituals of Ašḫella, Uḫḫamuwa, Pulisa and Ambazzi: each about 40–150 lines.
- **Bible:**
  - **The Laws:** Ex 21:18–19, 22; 22:1–5, 15–17; Lev 18 and 20 (the ranked sexual taboos); Deut 21:1–9 (measuring the
    distance to the nearest town); Deut 22:23–27; Deut 25:5–10 and Gen 38 (levirate). A code that *revises itself*
    ("formerly they paid …, now …").
  - **The Instructions:** Num 18:1–7, 1:51–53, 3:38 (the Levites guard the sanctuary; the encroacher dies: Milgrom); Lev 22:1–16.
  - **The rituals:** Lev 16:8–10, 20–22 (the goat for Azazel); Lev 14:4–7 (the released bird); 1 Sam 6.
- **Soul:** "Are the minds of men and gods different? No!"; plague as an angry foreign god to be fed and sent home.
- **Base text:** TLHdig 0.3 (CC BY 4.0, verified): build the composite from the duplicates. Check the Mainz portal's
  editions (`hethport.net`), Hrozný 1922 and Götze 1930 (PD). Use the Chicago Hittite Dictionary's free volumes per word only.
- **Feasibility:** Hittite carries medium risk, higher in the rituals' technical vocabulary.
- **Fit:** it joins `חוקים-ובריתות/` directly. The Hittite treaties in Akkadian (Šattiwaza, Šunaššura; Weidner 1923, PD)
  are in the folder's existing competence and set the Deuteronomy debate (a Hittite against a Neo-Assyrian model) beside the
  Esarhaddon treaty already translated.
- **Benefit:** Bible HIGH / Soul MED-HIGH. **Add later:** Muršili II's Plague Prayers (2 Sam 21, 24; Ex 20:5; Soul HIGH); the
  Kizzuwatna blood rites (↔ *ḥaṭṭat*, Lev 4, 16; the pit ↔ *ʾôv*).

### 5. Vedic Genesis: a Rigveda selection, the Indo-Iranian flood, and the "binding" texts
- **Language and date:** Vedic Sanskrit. The Rigveda: c. 1500–1000 BCE, oral, kept with extreme fidelity. The Brāhmaṇas:
  c. 800–500 BCE.
- **Texts:**
  - **The Rigveda** (about 25 hymns, about 300 stanzas):
    - the creation hymns: 10.129 ("darkness hidden by darkness, undistinguished water … perhaps he does not know"), 10.90
      (Puruṣa), 10.121, 10.72, 10.190;
    - 1.32, Indra and the serpent of the waters (↔ Gen 1:21);
    - 10.10, Yama and Yamī: the first humans and sibling incest (↔ Gen 4–5);
    - the funeral hymns 10.14–18 (↔ 3:19);
    - for the soul: the gambler (10.34) and the frogs (7.103).
  - **The flood:** Śatapatha Brāhmaṇa 1.8.1 (Manu and the fish), Mahābhārata 3.185 (54 ślokas: the ship with "all the seeds"),
    Vīdēvdād 2 (Yima's enclosure against a deadly winter, keeping the seed of every creature; 43 §§). Together they mirror
    the finished Mesopotamian flood corpus and give a far-away three-way control.
  - **The binding:** Aitareya Brāhmaṇa 7.13–18 (Śunaḥśepa: a father hired to bind his son and raise the knife); Śatapatha
    1.2.3.6–9 (the sacrificial essence passes from a man to the animals and then to grain ↔ Gen 22:13, Ex 13:13); Kaṭha
    Upaniṣad 1 (Naciketas given to Death).
- **Base text:** VedaWeb TEI (every word parsed; Geldner, Grassmann, Griffith; CC BY / BY-NC-SA, verified); GRETIL;
  the Corpus Avesticum Berolinense for Vd 2; Grassmann's and Monier-Williams' dictionaries on GitHub. Jamison's commentary is
  free online.
- **Feasibility:** high for the Brāhmaṇa and epic prose; medium for Rigvedic hapaxes; Young Avestan medium-high.
- **Benefit:** Bible MED-HIGH to HIGH / Soul HIGH. Hebrew: Peter 2006 (61 hymns, Carmel), Fridman 2014 (Upaniṣads and
  Brāhmaṇas, Carmel): selections without an apparatus.
- **A second Indian project (Tier 2):** Bṛhadāraṇyaka Upaniṣad 1.4, where the Self "desired a second" and split into husband
  and wife (↔ Gen 2:18–24; cf. Gen. Rabbah 8:1). With it, the Vīdēvdād and Dharmasūtra law and purity selections (↔ Lev 11,
  12, 15, Num 19, Deut 25:5–10).

### 6. "Words in stone": Northwest Semitic inscriptions with Torah contact
- **Texts:**
  - Tell Fekheriye, Aramaic side, c. 850–825 BCE, 23 lines, complete: *ṣlm* and *dmwt* for one statue ↔ **Gen 1:26, 5:3**; the
    futility curse "a hundred women shall bake in one oven" ↔ Lev 26:26.
  - The Sefire treaties: Deut 28 curses; the fugitive handed back, the case Deut 23:16–17 decides the other way.
  - The Deir ʿAllā Balaam text (c. 800 BCE): Num 22–24, the *šdyn* gods, and a list of birds ↔ Lev 11:13–19.
  - Mesha: *ḥerem*; the towns of Num 32.
  - The blessing inscriptions: Kuntillet ʿAjrud ("may he bless you and keep you"; YHWH of Teman ↔ Deut 33:2; asherah ↔
    Deut 16:21); Ketef Hinnom (Num 6:24–26); Khirbet el-Qom.
  - Mesad Hashavyahu (Ex 22:25–26); the Gezer calendar; the Punic sacrificial tariffs (↔ Lev 1–7).
- **Format: a different product.** For Hebrew and Moabite a "translation" means a square-script transcription, a cautious
  vocalized reading and the apparatus. Phoenician and Old Aramaic need a real translation (Levant survey §2.0). This is a
  decision (§7).
- **Base text:** public-domain editions (Cooke 1903, Lidzbarski, CIS, Cowley 1923); DEAPS (Ohio State) per object, no licence
  stated, so consult it, don't commit it; CAL per word.
- **Feasibility:** good, except Deir ʿAllā (very damaged; a disputed language).
- **Benefit:** Bible HIGH / Soul HIGH (popular religion, a reaper's complaint, a seer's vision).

---

## 4. Tier 2: strong candidates for later rounds

| # | Text (region) | Dates | Why | Base text | Feasibility |
|---|---|---|---|---|---|
| 7 | **Egyptian tales**: the Two Brothers (Gen 39), Westcar (the wax crocodile ↔ Aaron's staff becoming a *tannin*, Ex 7; the waters folded back ↔ Ex 14), Sinuhe, the Shipwrecked Sailor, BD 125 (the negative confession ↔ Ps 15, Deut 26:13–14) | 1875–1200 BCE; near-complete | Joseph and Exodus; Soul HIGH | AED (CC BY-SA) | high |
| 8 | **Ugaritic epics and ritual**: Aqhat, the Rephaim texts, Kirta; KTU 1.39–1.148 | 13th c. BCE | Gen 1:2 (*rḥp*), 9:23, Deut 20:7; Lev 1–7, 22:7 | CUC | good |
| 9 | **Hurro-Hittite and Old Anatolian myths**: Kumarbi and Ullikummi, Ḫedammu (the sea serpent ↔ Gen 1:21), Illuyanka, Telipinu, the Song of Release (↔ Lev 25 *deror*), the tales of Zalpa (↔ Ex 2:3), Appu (↔ Gen 18) and Elkunirša (↔ Gen 14:19, 39) | 17th–13th c. BCE | Gen 1:21, 6:1–4, 11:4; Lev 25 | TLHdig | medium (fragmentary; Hurrian only through the Hittite) |
| 10 | **Hittite prayers**: Muršili II's Plague Prayers, Kantuzili, Arnuwanda | c. 1400–1300 BCE, contemporary tablets | 2 Sam 21, 24; Ex 20:5; Lam 5:7; Soul HIGH | TLHdig; Götze 1930 PD | high |
| 11 | **Shijing** (the Zhou hymns, then a Guofeng selection), with a **Chinese flood and world-ordering corpus** (Shangshu Yao dian, Yu gong, Lü xing; the Bin Gong xu bronze) | c. 1000–600 BCE, oral | "Sheng min": the exposed child (Ex 2) and the fragrance God enjoys (Gen 8:21); Yu gong's nine regions after the flood (Gen 10); heaven cut off from earth (Gen 11); Soul HIGH | Kanripo / TLS on GitHub (CC BY-SA reported; verified clone); Legge PD | high (Classical Chinese well resourced) |
| 12 | **Kojiki Book 1 with its songs + the Norito (Ōharae)** | 712 CE from oral recitation; Norito formulas 7th–8th c. | Orochi (Gen 1:21), the forbidden look (Gen 19:26), the origin of death; the Ōharae's "heavenly and earthly sins" ↔ Lev 18, 20, 13, 16:21–22 | zh/ja.wikisource; ONCOJ (CC BY 4.0) | high / medium-high |
| 13 | **Popol Vuh** | written 1554–58 from older tradition (Hero Twins in Classic art; San Bartolo c. 100 BCE) | "only sky … only sea" (Gen 1:2); failed creations and the flood of the wooden people (Gen 6–9); people of maize (2:7); languages changed at Tulan (11:1–9); Christian-influence debate to present | Christenson's free K'iche' + literal English (©, local use); Brasseur 1861 PD | good |
| 14 | **Leyenda de los Soles + Florentine Codex Books 3, 6, 7** (Nahuatl) | 1547–1577 from oral tradition | the flood whose smoke *angers* the gods (the reverse of Gen 8:20–21); humans made from bones and divine blood (2:7); the sun and moon made from self-sacrificing gods (1:16); Book 6's *huehuetlatolli* (a father's advice, confession, prayer: Soul HIGH) | Zenodo CC BY 4.0 (Florentine, verified); Leyenda from the facsimile | very good (Nahuatl well resourced) |
| 15 | **Archaic Greek law and sacred law + the Roman archaic corpus**: Gortyn, Draco, Selinous, Cyrene, Teos; the Twelve Tables, Cato's prayers, the fetial oath | 650–300 BCE | Num 27/36 (the heiress), Num 35 (homicide), Lev 12, 15, Num 19, Deut 27; *talio esto* ↔ Ex 21:23–25; the pig struck with flint ↔ Gen 15 | IGCyr (CC BY-NC); Latin Library, LacusCurtius; Gortyn: no open Greek found | medium (keying from editions) |
| 16 | **Homer, a selection** (Il. 1, 6, 11.1–46, 14, 15.184–199, 23, 24; Od. 11) | c. 750–650 BCE, oral | Gen 9:13; Gen 6:4 + 11:4; Deut 32:8; Lev 19:27–28; Job 2:10 | Perseus + treebank | excellent; the gain over Tchernichovsky and Shabtai is the apparatus |
| 17 | **Sabaic confession inscriptions** + **a Safaitic anthology** | c. 2nd c. BCE–2nd c. CE (Sabaic); 1st c. BCE–4th c. CE (Safaitic) | Lev 15:19–24, 18:19, Lev 5:5, Num 5:6–7; the cairn and the grave-pillar (Gen 31:45–52, 35:20); laments | CIH, RES (PD); Sabaweb; OCIANA (CC BY 4.0 PDFs) | medium / good. **DASI asks for an agreement before AI use**: respect it |
| 18 | **Philo of Byblos's "Phoenician History"** (Eusebius PE I.9–10) | Greek, c. 100 CE, claiming an old Phoenician source | *Baau* = *bohu* (Gen 1:2), the inventors (Gen 4:17–22), *Elioun* (Gen 14:19) | First1KGreek (CC BY-SA, verified) | easy language, hard source criticism |
| 19 | **Elephantine** (the Passover letter, the temple petitions, marriage contracts) **+ Ahiqar** | 495–399 BCE, the original papyri | Ex 12 and Lev 23 (Passover), Ex 21:10–11 and Deut 24:1, Num 27 and 36; Soul HIGH | Cowley 1923, Sachau 1911 (PD); DEAPS; CAL | good |
| 20 | **The Kumulipo** (Hawaiian) | c. 1700 on older chant; printed 1889 | 2,102 lines; the births run sea creatures (each paired with a land plant) → fish → birds → creeping things → land animals → humans: the order of Gen 1:20–27, but everything is *born*, never made | 1889 text PD; Liliʻuokalani 1897 PD; Beckwith 1951 (US copyright reportedly not renewed: verify) | good |
| 21 | **The Poetic Edda's mythological poems** + **the "when there was not" dossier** (Wessobrunn Prayer, Völuspá 3, Cædmon's Hymn) | c. 800–1000 CE, mss c. 814 and c. 1270 | Askr and Embla given breath (Gen 2:7), the World Serpent (1:21), the earth rising again from the sea (Gen 8); Hávamál ↔ Proverbs; "neither earth nor heaven above" ↔ Gen 1:1–2, 2:4b–5 | PD editions, verified | high |
| 22 | **The Finnic runes (SKVR)**: creation from a bird's egg on the primeval sea, the Great Oak, the Sampo | recorded 1564–1939; the meter likely 1st millennium CE | Gen 1:2 (*meraḥefet*: the bird on the waters), 1:6–16; Deut 32:11 | SKVR, CC BY 4.0 (verified) | high (not Lönnrot's composed Kalevala) |
| 23 | **Egyptian creation, harder part**: Coffin Texts 75–80, 714, 1130 (god's "four good deeds"; men from his tears) | c. 2100–1700 BCE | Gen 1:26–27, 6:5–7 | de Buck (ISAC, hieroglyphs only): no open transliteration | low-medium |

---

## 5. Thematic dossiers: small cross-cultural sets keyed to commentary units

Short excerpts, each translated from its own language, set side by side. They serve a commentary unit directly, and they
are the quickest way to use the world material. Each needs its excerpts' base texts secured as for a project.

### 5A. The fifth day (Gen 1:20–23): sea monsters, birds and fish, the order of living things. **The unit being written now.**
- **Contact cultures:**
  - Ugarit: *tnn* muzzled (KTU 1.3 III 38–42), Lotan (1.5 I 1–3), *tnn* in the sea (1.6 VI), the *tnn* charms (1.82, 1.83),
    birds of heaven and fish of the sea (1.23:62–63).
  - Egypt: Merikare's "greed of the water", fowl and fish made as food (E 130–138); the Apophis spells; the Westcar crocodile.
  - Anatolia: Illuyanka; Ḫedammu, the voracious sea serpent begotten in a divine plot.
  - The Deir ʿAllā bird list.
- **Greek, with the LXX layer** (guidelines §6.4.5): Keto and her brood (Th. 238, 270–336) ↔ κήτη; Typhoeus the δράκων;
  Anaximander's first humans born inside fish.
- **Typological:**
  - Rigveda 1.32 (Vṛtra, the serpent who holds back the waters); the Avestan Aži Dahāka and the sea-monster Gandarəβa;
  - the Edda's World Serpent hooked by Thor (Hymiskviða);
  - the Kojiki's eight-headed Orochi;
  - the Shanhaijing's birds and fish;
  - the Kumulipo's births; the Māori Ika-tere (to the sea) and Tu-te-wehiwehi (to the land);
  - the Inuit Sea Woman, whose severed fingers become the sea mammals;
  - the Ngaju Dayak hornbill of the upper world and water-snake of the underworld, a paired cosmos;
  - the beheaded cosmic caiman of Palenque Temple XIX;
  - the Russian Dove Book's earth resting on a whale.
- **What it can show:** that Gen 1:21's *created* *tanninim* stand alone against a world where the sea monster is a rival, a
  parent or a slain body.

### 5B. "When there was not yet" (Gen 1:1–2, 2:4b–5)
- RV 10.129; Pyramid Texts 571/486; the Memphite Theology; Hesiod's Chaos; Philo's *Baau*.
- The Gāthās, Y 44.3–5 ("who fashioned light and darkness, sleep and waking?").
- Taiyi sheng shui and Hengxian (Guodian and Shanghai Museum, c. 300 BCE).
- The Orkhon inscriptions ("when the blue sky above and the brown earth below were made").
- The Wessobrunn Prayer, Völuspá 3; the Popol Vuh's opening; the Kumulipo's night; the Ayvu Rapyta (the word before the world).

### 5C. The flood outside Mesopotamia (Gen 6–9; the Mesopotamian flood corpus is done)
- India and Iran: ŚB 1.8.1, MBh 3.185, Vd 2.
- Egypt: the Heavenly Cow (a destruction without water).
- China: Yao dian and Yu gong, Mencius, Huainanzi.
- The Americas: the Leyenda de los Soles (the post-flood smoke angers the gods); the Popol Vuh; the Huarochirí manuscript
  (a llama warns of the flood; no open base); Chilam Balam.
- Siberia: the Mansi fire-flood.
- Greece: Deucalion in the Catalogue of Women (fragmentary; the full story is late).

### 5D. Gen 8:20–11:26, the block with no commentary
- **The covenant and the bow:** Il. 11.27–28 and 17.547–549 (Gen 9:13); Shijing "Sheng min" (the sacrifice's fragrance
  pleases Shangdi ↔ Gen 8:21); the Leyenda de los Soles (the reverse).
- **The Table of Nations:**
  - Anatolia: Meshech = Mušku, Tubal = Tabal, Togarmah = Tegarama, Elishah = Alašiya, Lud = Lydia, Ararat = Urartu.
  - Arabia: Sheba, Ḥaḍramawt, Dedan, Tema and Dumah in Sabaic and Dadanitic inscriptions.
  - Ugarit: the seventy sons of Athirat.
  - China: Yu gong's nine regions.
- **Babel:** Ullikummi growing to heaven; Od. 11.305–320; the Heavenly Cow (the god withdraws); the Lü xing (heaven and earth
  cut apart); the Akan tower of mortars; the Popol Vuh at Tulan.
- **Reception, flagged as such:** the Lebor Gabála, the Auraicept na nÉces (Irish built from the 72 languages after Babel),
  the Primary Chronicle, Movses Khorenatsi, Leonti Mroveli, Snorri's Prologue.

### 5E. The goat for Azazel, elimination and purity (Lev 11–16)
- The Hittite elimination rituals; Ebla ARET 11 (a goat with a silver bracelet driven to the steppe of Alini); Ugaritic KTU 1.40.
- The Norito Ōharae; the Sabaic confessions; the Vīdēvdād; the Cyrene cathartic law; the Umbrian Iguvine Tables.

### 5F. The binding (Gen 22)
- Śunaḥśepa (Aitareya Brāhmaṇa 7.13–18); the substitution myth of ŚB 1.2.3.6–9; Naciketas; the Irish Aided Óenfir Aífe (a
  father kills his son).

### 5G. Man from the earth and the breath (Gen 2:7)
- Merikare ("breath for their noses"); the Popol Vuh (maize); the Leyenda de los Soles (bones); Nüwa moulding humans of
  yellow earth (Fengsu tongyi); Askr and Embla; Hine-hau-one (Māori; debated); Pandora; the Tantu Panggĕlaran (Old Javanese).

### 5H. How death came (Gen 3)
- African messenger myths: the Zulu chameleon and lizard (Callaway, PD), the /Xam Moon and Hare, the Maasai Le-eyo, the Akan
  God who withdrew to the sky. Each must be checked for missionary influence (Platvoet 2012 on the Akan).
- Hine-nui-te-pō (Māori); the Kojiki (Izanami in Yomi); the Aggañña Sutta (a Buddhist counter-Genesis: beings grow coarse
  by eating).

---

## 6. Tier 3: windows on the ancient soul (low or no Bible relevance, high human value)

The user counts these as full candidates (guidelines §1), not as a low tier. Ordered roughly by antiquity.

- **Shang oracle-bone inscriptions** (c. 1250–1050 BCE): a king's fears – rain, childbirth, toothache, dreams, the ancestors'
  anger. Base: Schwartz 2019, *Huayuanzhuang East*, open access (CC BY-NC-ND). The paired yes/no charges also bear on the Urim
  (1 Sam 23:9–12).
- **The Gāthās of Zarathustra** (c. 1200–900 BCE?): the earliest named prophet's laments and questions to God. Only as a
  variorum translation (the readings diverge line by line).
- **The Atharvaveda** (c. 1200–900 BCE): love charms, fever, worms, childbirth, the Earth hymn (GRETIL, open).
- **The Egyptian love songs** (about 55; c. 1300–1150 BCE) and **the pessimistic literature** (the Man and his Ba, Neferti,
  the Harper's Songs; Ipuwer, whose link to the plagues is rejected – say why). All in AED.
- **The Homeric Hymns** (Demeter: a mother's grief); **archaic lyric** (Sappho, Archilochus, Solon's ten hebdomads ↔
  Ps 90:10, Theognis "best never to be born" ↔ Qoh 4:2–3).
- **Sangam Tamil** (Kuṟuntokai, Puṟanāṉūṟu) and **the Therīgāthā** (the oldest women's anthology of India; SuttaCentral, CC0).
- **The Chuci** (the Nine Songs; the Tianwen's 172 questions ↔ Job 38) and **the Man'yōshū** (ONCOJ).
- **The Muʿallaqāt and the Mufaḍḍaliyyāt** (6th c. CE oral; Lyall's PD editions with Arabic): the deserted camp, the
  she-camel, the beloved; **al-Khansāʾ's laments**; **Ibn al-Kalbī's Book of Idols** (standing stones and sacred trees ↔
  Deut 12, 16:21–22, Gen 28).
- **The Cantares mexicanos** and **the Teocuicatl hymns**; **Ruiz de Alarcón's Nahuatl incantations**.
- **Māori laments** (Grey 1853, PD), **Hawaiian hula chants** (Emerson 1909, PD), **the Fornander collection** (PD).
- **The Secret History of the Mongols** (a mother's rebuke of fratricide ↔ Gen 4) and **the Orkhon inscriptions** (a
  Deuteronomy-like sermon to a people).
- **Callaway's Zulu texts** (ancestors, diviners, dreams; PD, Zulu with facing English); **the /Xam texts** (Bleek and Lloyd, PD).
- **The Mabinogi**, **the Irish Mythological and Ulster cycles**, **the Latvian dainas**, **the Russian byliny and laments**,
  **the Ossetian Narts**.

---

## 7. Decisions for the user

The standing rule is to decide minor things and bring only major choices (STATUS §6). These are the major ones:

1. ~~Widen the folder beyond Mesopotamia, and in what order.~~ **Settled by the user, 2026-10-22:** yes, in the order of §8
   (Round 4). The folder's name, `תרגומי-טקסטים-קדומים`, already fits.
2. **Hebrew and Moabite inscriptions** (Tier 1 #6): a square-script transcription + a vocalized reading + the apparatus,
   rather than a "translation"?
3. **A new apparatus tag for typological parallels.** The four tags of guidelines §6.4 ([cognate], [equivalent],
   [divergence], [absent]) assume possible contact. A parallel from a culture that never met Israel (the Rigveda, the
   Kumulipo, the Popol Vuh) needs its own tag, e.g. **[typological]**. Otherwise the reader may take it for a source. Proposed;
   it would go into §6.4.
4. **Texts that need a paid or lending-only base**, recorded only under the no-purchase rule: the Huarochirí manuscript (Taylor
   1987/2008; Salomon & Urioste 1991); KTU³ (but CUC covers it); Gardiner 1935 (the dream book); Hoftijzer & van der Kooij 1976
   (Deir ʿAllā); the Ifá, Sunjata and Mwindo editions. Nothing to decide unless the rule changes.

Decided here (minor; recorded in the guidelines and in STATUS):
- **Non-commercial licences** (CUC CC BY-NC; IGCyr CC BY-NC; Schärer CC BY-NC): the base text stays git-ignored with a fetch
  recipe, as for eBL, and our translations are committed (guidelines §8).
- **SBL's free *Writings from the Ancient World* PDFs** (Pardee, Lindenberger, Nissinen, Hoffner …) belong to SBL's
  International Cooperation Initiative, which serves readers in low-income countries. Israel is not eligible: **do not use or
  store them** (added to guidelines §2.3).
- **Aboriginal Australian secret-sacred material** (the Strehlows' Aranda songs; Berndt's Djanggawul and Wawilak cycles) is
  **not translated**, whatever its copyright status. This follows the AIATSIS Code of Ethics (2020) and Protocol 6 of the
  ATSILIRN Protocols (added to guidelines §2.3). The same care applies to other living traditions with restricted knowledge.
- **DASI** (the Pisa Old South Arabian database) asks for an agreement before its data is used in AI-generated work: ask its
  editors before building a corpus from it; use the PD corpora (CIH, RES) meanwhile.

---

## 8. Round 4: the order (approved by the user, 2026-10-22)

The world texts and the Mesopotamian texts left after Round 3 are ranked together in one plan: **`curated-translation-candidates.md`, "Round 4 plan (2026-10-22)"**. It starts when Round 3 is finished, and its runs go **one at a time** (guidelines §5.1: quotas apply in every session). The order:
1. the Ugaritic myths (the Baal Cycle + the short myths and charms), with the fifth-day dossier (§5A);
2. the Edict of Ammiṣaduqa, only if an open base text is found;
3. Egyptian wisdom and creation (Amenemope, Merikare, the Heavenly Cow, the Memphite Theology);
4. Hesiod (Theogony + Works and Days);
5. Erra and Išum;
6. Hittite law and ritual (the Laws, the Instructions for Temple Personnel, the elimination rituals).

Why the world texts come before most of the Mesopotamian ones: only the Edict of Ammiṣaduqa (MED-HIGH) and Erra (MEDIUM) among those reach the Torah value of the world's Tier 1 (HIGH), and the Baal Cycle serves the unit being written now. The Mesopotamian quick wins (Šūpê-amēlu and the fables, the Poor Man of Nippur) fit between the runs.

**Each new language needs, before its first line:**
- a **name table** and a **renderings file**, with the reserved-word gates (guidelines §5.2, ★). The flood corpus's shared
  renderings bind any Semitic text; Ugaritic also needs the Hebrew cognate traps (vocalization is ours);
- a **translator brief** for the language (as `translator-brief--sumerian.md`);
- a **converter** from the base text's format (CUC's Text-Fabric, AED's TEI, Perseus treebank XML) into the folder's line data,
  with a `verify` tool (guidelines §5.2, "Scripts");
- for Egyptian and Ugaritic, a **transliteration convention** in the Hebrew apparatus;
- the base text's hosts in `domains.txt`.

---

## 9. Not recommended, or excluded

- **Undeciphered or too poorly understood for a controlled translation:** Meroitic, Etruscan beyond the Pyrgi tablets and the
  Piacenza liver, Iberian, Libyco-Berber, rongorongo, the khipus, Hurrian, Hattic and Palaic except through a bilingual,
  Gaulish beyond a hedged dossier, Elamite, Old Avestan except as a variorum.
- **Too late, or a learned reconstruction rather than a record of tradition:** the Bundahišn as a primary control (9th c. CE,
  in contact with Judaism, Christianity and Islam); the Purāṇic floods; Snorri's Prose Edda (flag it as a 1220s
  systematization); Lönnrot's Kalevala, the Kalevipoeg and Lāčplēsis (compositions); Oyunsky's *Nyurgun Bootur* (a synthesis);
  the Kebra Nagast.
- **Methodologically compromised:** Griaule's Dogon cosmology (van Beek 1991); Merker's "biblical" Maasai; the Io supreme-god
  texts of the Māori (probably post-contact); the Título de Totonicapán's Israelite opening (copied from Vico).
- **Forgeries and hoaxes – never use:**
  - Ossian; the Oera Linda Book; the Book of Veles; the Czech forged manuscripts; Iolo Morganwg's *Barddas*; the Basque
    Altabiskar song; Iruña-Veleia; the Kensington Runestone;
  - the Walam Olum; the "Nezahualcoyotl" attributions;
  - the Moussaieff ostraca; the Jehoash tablet; the ivory pomegranate; Wagenfeld's "Sanchuniathon"; Paraíba, Bat Creek and
    Los Lunas;
  - "Beyköy 2" (Mellaart); the Dorak treasure.
- **Contested; use only with a warning:** the Mt Ebal "curse tablet" (2022); the Arslan Tash amulets; the Shapira
  Deuteronomy; Papyrus Amherst 63's reconstructed text; the Bin Gong xu bronze (unprovenanced); Ollantay (a colonial drama).
- **Ethically excluded:** Aboriginal Australian secret-sacred material (§7).
- **Out of scope here, but noted:** 1 Enoch and Jubilees survive complete only in Ge'ez and matter for Gen 5–6. They belong to
  Second Temple literature, which a separate survey could cover. The same holds for the Dead Sea Scrolls and the Greek and
  Aramaic Jewish pseudepigrapha.

---

## 10. Access: what works from a Claude session (2026-10-21)

Details and the full host lists are in each survey's §4.
- **Works:**
  - `raw.githubusercontent.com` and treeless `git clone` of public repos. The github.com web pages and API answer 403/400.
    Through git come Perseus, First1KGreek, VedaWeb, Kanripo, ONCOJ, DHARMA, AED-TEI and SKVR.
  - `zenodo.org`: CUC, TLHdig, AED-TEI, the Florentine Codex, OCIANA's PDFs.
  - archive.org metadata and full-view items (but its Greek OCR is unusable).
  - GRETIL, VedaWeb, the Corpus Avesticum Berolinense, SuttaCentral; Logeion (LSJ); Mesoweb; benyehuda.org; DEAPS (per
    object); CAL (per word, through WebFetch); `hethport.net` (answered 200 at the end of the day: re-test).
- **Blocked or bot-walled:** ctext.org (terms forbid scraping; the API is paid); the live TLA (JavaScript wall and a decoy
  page for crawlers); DASI; OAPEN; HathiTrust; the National Library of Israel; academia.edu; sacred-texts; PHI Greek
  Inscriptions; CGRN; DAMOS; the Ulukau and NZETC sites; Papers Past; dainuskapis.lv; the main TITUS host (its mirror
  `titus.fkidg1.uni-frankfurt.de` works but forbids republication).
- **Down on 2026-10-21:** eDIL (503), eDiAna, ORACC (time-outs, then a certificate error; the folder's `tools/certs/`
  workaround applies). The Wikimedia API returns 429 to scripts, while WebFetch of the same pages works.
- **Certificates:** `historicas.unam.mx` sends an incomplete chain; it works once the missing GlobalSign intermediate is added
  to the bundle (verification stays on), as for ORACC.

When a run starts, add its hosts to `domains.txt` (guidelines §4.6). The hosts Tier 1 needs were added on 2026-10-21.
