# Project 3: the Shield of Heracles (Ἀσπὶς Ἡρακλέους), whole – `3-מגן-הרקלס/`

Round 6, run 5 (2026-11-07; plan: `../../curated-translation-candidates.md`, "Round 6 plan", run 5). It completes the
Hesiodic corpus (the Catalogue of Women is fragmentary: not a candidate, guidelines §1).

## Scope
The whole poem: **479 lines** (1–480 in the standard numbering; the base has 479 `<l>`, every label 1–479 present –
see "Line numbering"). KEY `SH` in `../hesiod_tools.py`.

## The text
An Archaic hexameter poem transmitted under Hesiod's name; ancient critics already doubted it (Aristophanes of
Byzantium, the hypothesis), and modern scholarship dates it to the early 6th century BCE (Janko 1986: c. 580–570; the
shield's ekphrasis, 139–320, is modelled on the shield of Achilles, Iliad 18.478–608). Lines 1–56 (Alcmene, Amphitryon,
Zeus' night with her, the twins' birth) are the opening of a Catalogue-of-Women *ehoie* ("or like her who…", fr. 195
M-W), which the poem took over; 57–480 tell Heracles' fight with Cycnus, son of Ares, at Pagasae / the precinct of
Apollo, with the long description of the shield in the middle. Sections:
1–56 Alcmene and the conception; 57–138 Cycnus, Iolaus, the arming; 139–320 the shield; 321–479 the fight, Ares
wounded, Cycnus' burial washed away by the Anauros.

## Base
- Greek: Evelyn-White 1914 (Loeb, PD), Perseus `tlg0020.tlg003.perseus-grc2` (`../../sources/Perseus--Hesiod/`, CC BY-SA
  markup; retrieved 2026-11-07 from raw GitHub).
- Lemma and morphology: the Perseus treebank AGDT 2.1 `tlg0020.tlg003.perseus-grc1.tb.xml`
  (`../../sources/Perseus-Treebank--Hesiod/`; retrieved 2026-11-07). `../../tools/perseus2md.py check`: 479 lines, 3,315
  treebank words, 0 unmatched words either way; 45 `cite` mismatches (the treebank's line cites run one ahead in 139 and
  304–309): the letter alignment is complete, so our labels are the TEI's.
- **The base's marks:** whole lines in `<del>` (Evelyn-White's square brackets: suspected): **204, 210** – the `>` line
  opens with `{חשודה}`; `<del>` inside a line (the bracketed half-lines 203, 205, 209, 211, also suspected – not a
  papyrus, unlike WD 169a–d): the `>` line opens with `{חשודה בחלקה}` and the suspected words stand in `⟦ ⟧`
  (renderings §14; the tool's `MARK_TAG_KEY`).

## Line numbering
The base's labels 1–479 in order. (The vulgate numbering runs to 480: Evelyn-White's text has no line where some
editions count one more – recorded here if a translator finds where.)

## Sources consulted
Rank 3: Evelyn-White's English (PD); the translators' knowledge of Most 2006/2018 (Loeb), Athanassakis, Lattimore,
described, never quoted from memory. Commentary (rank 4): Russo 1965, Solmsen, Janko 1986 – described only.
Iliad 18 (the shield of Achilles) and Iliad 5 (Ares wounded by Diomedes) as the poem's models: Perseus `tlg0012.tlg001`
if a translator needs a line (fetch per need).

## Open decisions
(see the translators' sections below)

## Progress log
- 2026-11-07: project set up; KEY SH added to `../hesiod_tools.py` and `../build_parallels_index.py`; the skeleton made.

## Translator SH, part 1 (1–138)

### Scope
SH 1–138: the Catalogue *ehoie* of Alcmene (1–56), Cycnus and Ares at Pagasae (57–77), the speeches of Heracles and
Iolaus (78–121), the arming (122–138). Four `## ` headings. The placeholder is now `<!-- טרם תורגם: 139–480 -->` (the
base's labels run to **480**: `data SH 478 480` prints 478, 479, 480; the skeleton's "1–479" undercounts by one label –
for the coordinator to check which label is missing or doubled).

### Sources consulted
The base and treebank through `hesiod_tools.py data`; `lexmap` / `lemma` for every recurring lemma (TH, WD); the LXX
tool for ἀσπίς / σάκος / θώραξ / κνημίς (σάκος is not in the LXX; θώραξ = `שִׁרְיוֹן` in the LXX's prophets and Job,
e.g. Isa 59:17); the Bible verses printed with `check_bible_quotes.py --show` (1 Sam 17:5–7, 1 Kgs 10:16–17, 22:34,
2 Sam 5:2, Gen 31:50, Ezek 39:9). Evelyn-White's English described, not quoted, except the *ehoie* "Or like her who"
and "such a charm" (8). No modern translation quoted.

### Decisions
- **ἢ οἵη** (the Catalogue's formula, renderings §14.3) = `או כמו זו אשר` (1). Fixed for any later occurrence.
- **σάκος = `צִנָּה`**, always vocalized (plene `צינה` = "cold"); **ἀσπίς = `מָגֵן`** (renderings §14.2, title). Reason:
  the biblical pair is exactly the poem's pair – `צִנָּה` the great body-shield (Goliath's `נֹשֵׂא הַצִּנָּה`, 1 Sam 17:7;
  Solomon's `צִנָּה` vs `מָגֵן`, 1 Kgs 10:16–17). φερεσσακής `נוֹשְׂאֵי־הַצִּנָּה` (13). Rejected: `שֶׁלֶט` (meaning
  disputed), `מָגֵן גָּדוֹל` (two words for one lemma).
- **τεῦχος (τεύχεα) = `נֶשֶׁק`** (60, 67, 71, 108); **θώραξ = `שִׁרְיוֹן`** (124). TH 186, 929t and WD 150 rendered τεῦχος
  `שריון`; in SH the arming lists the parts of the armour and θώραξ needs `שִׁרְיוֹן` (LXX θώραξ = `שִׁרְיוֹן`). **Proposal:**
  τεῦχος = `נֶשֶׁק` corpus-wide (revise TH 186, 929t, WD 150), or record the split.
- **ἀλκτήρ = `הוֹדֵף`** (ἀρῆς ἀλκτῆρα `הודף פורענות`, 29, 128). TH 657 has `מגן מפני פורענות`; in SH `מָגֵן` is ἀσπίς, and
  at 128 the phrase names the sword. **Proposal:** revise TH 657 to `הודף פורענות` (or record).
- ἀρήιος = `לוֹחֵם` (2, 66; τεύχεα ἀρήια `נשק הלוחם`, 108). Overlaps in root with μάχομαι `נִלְחַם` (TH) and with
  ἀγχέμαχος `הנלחמים מקרוב` (25) – a recorded near-collision; alternatives (`אִישׁ מִלְחָמָה` = Exod 15:3 echo; `אֲרֵסִי` =
  "poisonous" unvocalized; `קְרָבִי` = ὑσμίνη's root) were worse.
- ἡνίοχος = `רַכָּב` (66, 77; vocalized at first occurrence) [equivalent] 1 Kgs 22:34. δίφρος `מֶרְכָּבָה`, ἅρμα `רֶכֶב`,
  ἡνία `מוֹשְׁכוֹת`, ἄντυξ `מַעֲקֶה`.
- The arming: κνημίς `מִצְחָה` (1 Sam 17:6 `מִצְחַת נְחֹשֶׁת`), κυνέη `קוֹבַע`, ἔγχος `רֹמַח` (TH 186), σίδηρος `בַּרְזֶל`,
  φαρέτρα `אַשְׁפָּה` (always vocalized: plene = "garbage"), ὀιστός `חֵץ`, ὀρείχαλκος `נְחֹשֶׁת־הֶהָרִים`, ἀδάμας `שָׁמִיר` (TH).
- ἆθλος (Heracles' Labours) = `מְשִׂימוֹת` (94, 127): `עֲבוֹדוֹת` is gated (root עבד).
- τέμενος = `תְּחוּם` (58; no קדש root: gated to ἱερός); ἄλσος `חֹרְשָׁה`; βωμός `מִזְבֵּחַ` (required).
- ἀκοίτης (m. of ἄκοιτις `רַעְיָה`) = `רֵעַ`, vocalized (`רֵעָהּ`, 9).
- Patronymics as `בֶּן־X` / `בַּת־X`: Ἠλεκτρυώνη `בַּת־אֵלֶקְטְרִיּוֹן` (16, 35, 86), Ἀρητιάδης `בֶּן־אָרֵס` (57),
  Ἰφικλεΐδης `בֶּן־אִיפִיקְלֵס` (111), Ἀλκεΐδης `בֶּן־אַלְקָאיוֹס` (112).
- Smaller fixings: ἀποκτείνω / κτείνω `הָרַג`, πέφνον (θείνω) `הֵמִית`, δηιόω `קָטַל` (with δηιοτής `קֶטֶל`); ἶφι `בְּחָזְקָה`
  (βίη keeps `כֹּחַ`); μῆνις `קֶצֶף`; μάρτυρος `עֵד`; λαοσσόος `מְעוֹרֵר־הָעָם`, δορυσσόος `מְנִיף־הַחֲנִית`; κελαινεφής
  `שְׁחוֹר־הָעֲנָנִים`; σημάντωρ `מְצַוֶּה`; ἑκατηβόλος = ἑκηβόλος `פּוֹגֵעַ־מֵרָחוֹק`, ἑκατηβελέτης `יוֹרֶה־לְמֵרָחוֹק`;
  ἀμώμητος `שֶׁאֵין בּוֹ דֹּפִי` (≠ ἀμύμων `מֻשְׁלָם`); κυδάλιμος `מְפֹאָר`, κυδιάω `הִתְפָּאֵר`; φίλως `בְּחִבָּה`;
  ἀσπαστός / ἀσπάσιος `לִרְוָחָתוֹ` / `בִּרְוָחָה`; ἀσπάζομαι `קִדֵּם אֶת פָּנָיו` (ברך gated); ἔπεα πτερόεντα
  `מִלִּים מְכֻנָּפוֹת` (117; fix for the later copies); ὠκύς `קַל` (θοός `מָהִיר`, ὠκύπους `קַל־הָרַגְלַיִם`); κρήδεμνον
  `רְדִיד`; ἔρυμαι / ῥύομαι `גּוֹנֵן` (φυλάσσω keeps `שָׁמַר`); καθέζομαι `יָשַׁב` (`ביושבו`, not `בשבתו`: שבת gate).
- Sense splits recorded: ἄρχω "lead" `הוֹבִיל` (26; "begin" `הִתְחִיל` TH); δύω "put on" `לָבַשׁ` (108, 124; "set" `שָׁקַע`
  WD); ἵημι middle "be eager / rush" `לָהוּט` / `נֶחְפַּז` (23, 65; active `שִׁלַּח`); λείπω and προλείπω both `עָזַב`.
- Infinitive for imperative: ἔχειν `הַחְזֵק` (97), ἀναστρωφᾶν … ἀρηγέμεν `הַפְנֵה … וַעֲזוֹר` (121).
- Gate permit: 101 `יִשְׂבַּע` (ἄαται "will be sated", the root שׂבע, not נשבע) – `[היתר שער]` in the entry; vocalized.
- Treebank slips noted in the פירוק: ἔτισε (10) under τίνω (it is τίω); ἔλεκτο (46) under λέγω (λέχομαι); καταφλέξαι (18)
  parsed optative (infinitive); Ἰφικλεΐδην, Ἀλκεΐδαο (111–112) broken lemmas; οὐδ' (111) under δέ; νύ (116) under νῦν;
  ἐπέφυκον (76) as aorist (pluperfect); ἔτλη (73) as imperfect.

### New names (for §14.1 and the names table)
| Greek (lemma) | Hebrew | Note |
|---|---|---|
| Ἀμφιτρύων | אַמְפִיטְרִיּוֹן | Alcmene's husband |
| Ἠλεκτρύων (treebank also Ἠλεκτρύον) | אֵלֶקְטְרִיּוֹן | her father, king of Mycenae |
| Ἠλεκτρυώνη (treebank: Ηλεκτρύωνος / Ἠλεκτρυῶνος / Ἠλεκτρυώνης) | בַּת־אֵלֶקְטְרִיּוֹן | patronymic of Alcmene |
| Θῆβαι | תֵּבַּאי | the plural lemma of Θήβη: please add it to the Θήβη row |
| Τάφιοι (τάφιος) / Τηλεβόαι (τηλεβόας) | הַטַּפִיִּים / הַטֵּלֶבוֹאִים | the treebank's lemmas are lower case |
| Βοιωτός | בּוֹאוֹטִים | familiar form (the WD notes' `בּוֹאוֹטִים`) |
| Λοκροί | לוֹקְרִים |  |
| Φωκεύς | פוֹקִים |  |
| Ἀλκαῖος | אַלְקָאיוֹס | Amphitryon's father |
| Ἀλκεΐδης | בֶּן־אַלְקָאיוֹס | treebank lemma broken (Ἀλκεί) |
| Τυφαόνιον | טִיפָאוֹנִיּוֹן | mountain in Boeotia (named from Typhoeus) |
| Φίκιον | פִיקִיּוֹן | the Sphinx's mountain (Φίξ `פִיקְס`) |
| Ἰφικλέης | אִיפִיקְלֵס | Heracles' twin |
| Ἰφικλεΐδης | בֶּן־אִיפִיקְלֵס | Iolaus; treebank lemma broken (Ἰφιλεί) |
| Κύκνος | קִיקְנוֹס | "Swan", son of Ares |
| Ἀρητιάδης | בֶּן־אָרֵס | patronymic |
| Ἰόλαος | יוֹלָאוֹס |  |
| Παγασαῖος | הַפָּגָסָאִי | Apollo "of Pagasae" (Παγασαί `פָּגָסַי` in the note) |
| Τίρυνς | טִירִינְס | TH 292's `טירינס`, vocalized |
| Κρείων | קְרֵאוֹן | the familiar form (Creon) |
| Ἠνιόχη | אֵנִיּוֹכָה |  |
| Εὐρυσθεύς | אֶוּרִיסְתֵאוּס |  |
| Ἀρίων | אַרִיּוֹן | the horse |
Καδμεῖος (13): `בְּנֵי קַדְמוֹס` (the people), within the table's `קַדְמוֹס`.

### Open decisions for the user / coordinator
1. τεῦχος `נֶשֶׁק` vs TH/WD `שריון` (above) – unify.
2. ἀλκτήρ `הוֹדֵף` vs TH 657 `מגן` – unify.
3. σάκος `צִנָּה` / ἀσπίς `מָגֵן`: confirm (renderings §14.2 asked the first translator to fix it).
4. The base's line count: labels 1–480 (see Scope).

### Progress log
- 2026-11-07, 09:10–09:30 UTC: drafted 1–56 and 57–138 (138 entries), saved after each section; `fill` 138 lines.
- Review (a) fidelity: 24 `(הלכו)` dropped (the verb is 26's ἕσποντ'); 51 ἀμείνων `טוב יותר`; 112 `מפני` out of
  parentheses (φεύγω + acc.). (b) consistency: lexmap for every recurring lemma (decisions above); the repeated line 76 =
  TH 152 copied character for character; F1 / F17 / F26 in place. (c) Hebrew: read through the `>` lines; 34 `ביושבו`
  (gate homograph `בשבתו`); vocalized `הָאֵל(ִים)` (20, 27, 28, 48, 56, 71), first `זֵאוּס` (22, 33), `תֵּבַּאי` (2, 49).
- `verify SH`: 0 problems (the rest is the placeholder note); `--strict` lists only the undrafted labels.
  `check_bible_quotes.py`: 0 problems (one mismatch fixed: 136 `וְכוֹבַע נְחֹשֶׁת`).
- The clean translation (`translation--intro-SH.rtl.md`, `build`) not made in this part.

### The text on its own terms
- **The *ehoie* (1–56)** – a Catalogue entry ("or like her who") sewn onto a heroic poem with "who also slew Cycnus"
  (57): the seam of oral-traditional composition is visible.
- **Alcmene's beauty "breathes"** like a scent from Aphrodite (7–8); her loyalty is praised just before Zeus deceives her.
- **Blood-guilt and supplication** (11–13, 80–85): the killer, even by accident, goes into exile as a suppliant, and
  the host's "δίκη" (custom) is to receive him.
- **The oath with the gods as witnesses** (15–22): the unconsummated marriage, the vengeance as a duty "from Zeus".
- **Zeus' "other plan"** (27–29): to "plant" a "warder-off of ruin" for gods and men – begetting as planting.
- **Twins from two fathers in one night** (35–56) – the mortal and the divine son, "a distinct lineage".
- **The homecoming simile** (42–45), with ἐκτολυπεύω: war as wool wound off to the end.
- **Divine light** (60, 70–72): Ares and his arms blaze; fire from his eyes.
- **Atē and the daimon** (89–94): Zeus "took away" Iphicles' wits; Heracles' labours imposed by a daimon.
- **The wordplay ἄατος / ἄαται** (59, 101): Ares "never sated" "will be sated of war".
- **The arming scene** (122–138): gifts of Hephaistos and Athena; iron as an anachronism; the weeping arrows.

### Key parallels
- 13, 122, 136: the Archaic Greek panoply and Goliath's (`צִנָּה`, `מִצְחַת נְחֹשֶׁת`, `כּוֹבַע`, `שִׁרְיוֹן`, 1 Sam 17:5–7) –
  an equivalence of objects (the Philistines came from the Aegean world), not of texts.
- 41: ποιμὴν λαῶν and `אַתָּה תִרְעֶה אֶת עַמִּי` (2 Sam 5:2) – the king as shepherd, a shared Near Eastern image.
- 20: the gods as witnesses (Gen 31:50) – a shared motif.
- 66: ἡνίοχος = `רַכָּב` (1 Kgs 22:34).
- 70: βωμός `מִזְבֵּחַ` – the LXX's avoidance (kind c).

### Lines shared with other texts
76 = TH 152 = TH 673 = WD 149 (copied). 88 ≈ WD 129 (the half-line followed). 26 ἐὺς πάις Ἀλκαίοιο ≈ TH 565 / WD 50
`בנו הטוב של`. 117 = the Homeric ἔπεα πτερόεντα line (Il. 1.201 …). 76's and 75's χεῖρες ἄαπτοι ≈ TH 649, WD 148.

### Proposals for the shared renderings
τεῦχος `נֶשֶׁק`; θώραξ `שִׁרְיוֹן`; ἀλκτήρ `הוֹדֵף`; σάκος `צִנָּה` ★ (always vocalized); φαρέτρα `אַשְׁפָּה` ★; ἀκοίτης `רֵעַ`;
ἡνίοχος `רַכָּב`; ἆθλος `מְשִׂימָה`; ἢ οἵη `או כמו זו אשר`; ἔπεα πτερόεντα `מלים מכונפות`; the names above.

### Lessons for the guidelines
- A compound or a formula fixed in one poem (TH 657 `מגן מפני פורענות`) can collide with a title word fixed later
  (ἀσπίς `מָגֵן`): fix the shared words of a new text against the whole corpus before its first line.

## Parallels index
Generated into `../parallels-index.md` by `../build_parallels_index.py`.
