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

## Translator SH, part 2 (139–480)

### Scope
SH 139–480 (341 entries; the base has no 298): the shield (139–320), the encounter and Athena's counsel (321–349),
Heracles' speech and the clash (350–412), Cycnus' death (413–423), Heracles against Ares (424–466), the spoils, the
burial and the Anauros (467–480). Thirteen `## ` headings. The poem is now drafted whole (479 entries); the placeholder
is gone.

### Sources consulted
As in part 1 (`data`, `lexmap`, LSJ by knowledge, the LXX tool, every verse printed with `--show`). The Iliad parallels
are named by book and line only, never quoted.

### Decisions
- **ἐν δέ "ועליה"** – the ekphrasis's formula (on the `צִנָּה`, feminine), kept throughout.
- **The personified figures** (translated names, no article, the Greek gender, renderings §3.2):
  Φόβος `בֶּהָלָה` (m.), Δεῖμος `אֵימָה` (TH 934), Ἔρις `מָדוֹן`, Κήρ `קֵר` / Κῆρες `הַקֵּרוֹת` (table), and new:
  Προΐωξις `מִרְדָּף`, Παλίωξις `מִרְדַּף־נֶגֶד` (154), Ὅμαδος `הֲמֻלָּה` (155; the common noun at 257 also `הֲמֻלָּה`),
  Ἀνδροκτασίη `הֶרֶג־אֲנָשִׁים` (155), Κυδοιμός `מְבוּכָה` (156; Isa 22:5's triad in the note), Ἀχλύς `עֲרָפֶל` (264, f.).
  The common noun κλόνος (148) `מְבוּסָה`.
- **Metals and materials:** ἤλεκτρον `חַשְׁמַל` ★ (142) – the LXX's word for `חַשְׁמַל` (Ezek 1:4, kind a); κύανος `כְּחֹל`;
  τίτανος `סִיד`; ἐλέφας `שֶׁנְהָב`; κασσίτερος `בְּדִיל` (TH); χρυσός `זָהָב`.
- **Arms (with part 1):** κόρυς `כּוֹבַע` (417), κυνέη `קוֹבַע`, τρυφάλεια `קַסְדָּה` (199) – three helmet words; αἰχμή
  `כִּידוֹן` (193; "blade, point" `חוֹד` at 289, a sense split); δόρυ `חֲנִית`, ἔγχος `רֹמַח`, μελίη `חֲנִית־הַמֵּילָה`
  (renderings' `מֵילָה`); ἄορ `חֶרֶב`; τελαμών `רְצוּעָה`; **ἀσπίς `מָגֵן` at 417** (its only occurrence), beside σάκος `צִנָּה`.
- Others: κέγχρος `דֹּחַן` (398; LXX Ezek 4:9, kind a); ἀλαλητός `תְּרוּעָה` (382; LXX ἀλαλαγμός, a sister word);
  λίς `לַיִשׁ` ★ (172; λέων `אַרְיֵה`); αἰγυπιός `נֶשֶׁר`; τέττιξ `צִיקָדָה` (WD); φόρμιγξ `כִּנּוֹר` (κιθαρίζω `נִגֵּן`;
  Gen 4:21 LXX κιθάρα in the note); αὐλός `חָלִיל`, σῦριγξ `חֲלִיל־קָנֶה`; ὑμέναιος `שִׁיר־נִשּׂוּאִים` (`כַּלָּה` gated);
  ἑκατόμβη `זֶבַח־מֵאָה`; σῆμα `אוֹת` (385) / `צִיּוּן` (477, the grave marker; sense split); τάφος `קֶבֶר`; ἀκτή Δημήτερος
  `גַּרְעִינֵי דֶּמֶטֶר` (290, F25 without ἱερήν); ἀγλαΐη `הָדָר`; ἔναρα `שָׁלָל` (ἐναρίζω `שָׁלַל`; σκυλεύω `בָּזַז`);
  μένος `זַעַף` (TH); ἀκόρητος `שֶׁאֵינוֹ יוֹדֵעַ שֹׂבַע` (≠ ἄατος `שֶׁאֵינוֹ שָׂבֵעַ`); μεγαλήτωρ `רַם־הַלֵּב`; κλειτός `נוֹדָע`
  (κλυτός `מְהֻלָּל`); κελαινός / ἐρεμνός `אָפֵל` (synonyms); ἰός / ὀιστός `חֵץ` (synonyms, recorded); λοιγός `שׁוֹאָה`;
  πέρθω `בָּזַז`; βροτολοιγός `מַשְׁמִיד־הָאֱנוֹשׁ` (`מכלה` hits the `כלה` gate).
- **Gate-driven choices:** γυμνόω `חָשׂוּף` (334, 418, 460; `עָרֹם` stays γυμνός's); πλευρά `צַד` (`צֵלָע` never); πόλις
  "their city" `העיר שלהם` (`עירם` = the `ערם` gate); ἀρέσκω `רָווּ` (not `השביעו`); "never" `אַף פַּעַם` (310);
  `על המרכבה` for ἐς δίφρον in a θεά-line (the `אל` trap).
- **Sense splits recorded:** αἰδώς "respect" `יִרְאַת־כָּבוֹד` (354; renderings' `בּוּשָׁה` does not fit); νόημα "thought"
  `מַחֲשָׁבָה` (222; 88 `הבנה`); ὄζος "branch" `עָנָף` (394; 181 `נֵצֶר`); ἀμέρδω "deprive" `קִפַּח` (331; TH 698 `סנוור`);
  τεύχω passive "become" `נַעֲשָׂה` (366); κτυπέω of Zeus' thunder `הִרְעִים` (383; 61 `הלמו`); ἐπέχω `כִּוֵּן` / `עָצַר`
  (350 / 446); χαλεπός "hard" `קָשֶׁה` (386; 44 `אָנוּשׁ`); σχέτλιος `אַכְזָר` (149; 92 `אֻמְלָל`); ἀμαιμάκετος `שֶׁאֵין לוֹ
  מַעֲצוֹר` (207; TH 319 `בלתי נכבשת`); φράζω middle `הִתְבּוֹנֵן` (218); παῖς of a married daughter `בַּת` (356).
- Infinitives for imperatives: `הַשְׁאֵר`, `פָּצוֹעַ`, `וְסוֹג` (332, 335–336).
- The suspected lines: 204, 210 `{חשודה}`; 203, 205, 209, 211 `{חשודה בחלקה}` with the bracketed words' Hebrew in `⟦ ⟧`.

### New names (for §14.1 and the table)
| Greek | Hebrew | Note |
|---|---|---|
| Λαπίθαι | הַלַּפִּיתִים | |
| Καινεύς, Δρύας, Πειρίθοος, Ὅπλευς, Ἐξάδιος, Φάληρος, Πρόλοχος | קַיְנֵאוּס, דְּרִיָּאס, פֵּירִיתוֹאוֹס, הוֹפְּלֵאוּס, אֶקְסָדִיּוֹס, פָלֵרוֹס, פְּרוֹלוֹכוֹס | the Lapiths (179–180) |
| Μόψος, Ἀμπυκίδης, Τιταρήσιος | מוֹפְּסוֹס, בֶּן־אַמְפִּיקְס, הַטִּיטָרֵסִי | 181 |
| Θησεύς, Αἰγείδης | תֵּזֵאוּס, בֶּן־אַיְגֵאוּס | the familiar form |
| Κένταυρος | הַקֶּנְטָאוּרִים | |
| Πετραῖος, Ἄσβολος, Ἄρκτος, Οὔρειος, Μίμας, Πευκεΐδαι, Περιμήδης, Δρύαλος | פֶּטְרָאיוֹס, אַסְבּוֹלוֹס, אַרְקְטוֹס, אוּרֵיאוֹס, מִימָס, בְּנֵי־פֶּאוּקֵאוּס, פֶּרִימֵדֵס, דְּרִיָּאלוֹס | the Centaurs (treebank: ἄρκτος, Πευκεί) |
| Περσεύς, Δανάη, Δαναΐδης | פֶּרְסֵאוּס, דָּנָאָה, בֶּן־דָּנָאָה | |
| Ἀμφιτρυωνιάδης | בֶּן־אַמְפִיטְרִיּוֹן | |
| Λυγκεύς | לִינְקֵאוּס | |
| Τραχίς, Κῆυξ, Θεμιστονόη | טְרָכִיס, קֵאִיקְס, תֶּמִיסְטוֹנוֹאָה | |
| Πύλος | פִּילוֹס | |
| Ἐνυάλιος | אֶנִיָּאלִיּוֹס | Ares' name |
| Μυρμιδόνες, Ἰαωλκός, Ἄρνη, Ἑλίκη, Ἄνθεια, Ἄνθη | הַמִּירְמִידוֹנִים, יָאוֹלְקוֹס, אַרְנָה, הֶלִיקָה, אַנְתֵיאָה, אַנְתָה | |
| Ἄναυρος | אַנָאוּרוֹס | the river |
| Λητοΐδης | בֶּן־לֵטוֹ | |
| Πυθώ | פִּיתוֹ | Delphi |
| Σείριος (lower case in the treebank) | סִירִיּוּס | WD's form |
| Προΐωξις, Παλίωξις, Ὅμαδος, Ἀνδροκτασίη, Κυδοιμός, Ἀχλύς | מִרְדָּף, מִרְדַּף־נֶגֶד, הֲמֻלָּה, הֶרֶג־אֲנָשִׁים, מְבוּכָה, עֲרָפֶל | (T) translated names; lower case in the treebank |

### Open decisions / problems for the coordinator
1. **Tool:** `verify SH --strict` reports one problem, SH 166 `REQUIRED δράκων = דְּרָקוֹן`: the plural `הדרקונים` fails
   because the REQUIRED regex is `דרקון` (final nun), while the gate regex already allows `דרקונים`. Suggested fix in
   `hesiod_tools.py` line 319: `r"דרקו[ןנ]"`. Not edited (the brief forbids editing the tool's lists). At 233 the dual is
   `דרקון ודרקון`, which passes.
2. αἰδώς at 354 rendered `יראת־כבוד` (not `בּוּשָׁה`) – confirm the split.
3. The three helmet words and the two arrow words (above) – confirm.
4. 258–260 (the Moirai) and 282–283, 293/296 (doublets) are suspected by many editors though not bracketed by
   Evelyn-White: noted in the entries.

### Progress log
- 2026-11-07, 09:30–09:52 UTC: 139–480 drafted in eight saved chunks (each followed by `fill`, `verify`,
  `check_bible_quotes`).
- Review (a) fidelity, on the `>` lines: 334–336 (doubled "see"; infinitives as imperatives), 413 (an added
  "(seeking)" removed), 429 (passive), 425, 349, 451. (b) consistency: lexmap on every recurring lemma; formulas F3/F5,
  F24, F28, F32, F34 in place; near-repeats copied (150=163, 297≈313, 333≈425, 334≈460, 279≈348, 380≈474, 414≈453).
  (c) Hebrew: gate homographs fixed (`עירם`, `מכלה`, `אל`), vocalization of `אַתֵנָה` / `הָאֵל(ִים)` / `אֵלוֹת`.
- `verify SH --strict`: 1 problem (the tool issue above). `check_bible_quotes.py` on the annotated file and project.md:
  0 problems (one remembered quotation, Josh 7:6, corrected after the check).
- The clean translation (`translation--intro-SH.rtl.md`, `build`) not made.

### The text on its own terms
- The shield as a world of terror first (144–177: Phobos, Eris, Ker, snakes, boars and lions), then of peace (270–313).
- The images move and sound: "as if alive" (189, 194, 244); clattering teeth (164), the ringing shield (232), the
  shrieking hubs (309).
- Perseus hovering, touching nothing (216–222): the marvel of a god's craftsmanship.
- The Keres drinking blood (249–257) and Achlys (264–270): the most physical images of death in Archaic Greek.
- The city at peace: wedding, dances, ploughing, harvest, vintage, games (270–313) – the farmer's year of WD.
- Zeus himself marvels (318): the shield is his gift to his son.
- The cicada and Sirius date the battle (393–401), as in WD 582–588.
- Ares wounded twice by a mortal with Athena's help (359–367, 455–466), as Diomedes in Iliad 5.
- The ending: Cycnus' grave washed away by the Anauros at Apollo's command (477–480): the robber of the pilgrims to
  Pytho loses even his memorial.

### Key parallels
- 142 ἤλεκτρον = the LXX's word for `חַשְׁמַל` (Ezek 1:4) – kind (a).
- 398 κέγχρος = the LXX's `דֹחַן` (Ezek 4:9) – kind (a).
- 382 ἀλαλητός ~ the LXX's ἀλαλαγμός for `תְרוּעָה` (Ps 89:16).
- 243 laceration of the cheeks in mourning (Lev 19:28, Jer 16:6); 269 dust on the head (Josh 7:6).
- 202 Apollo's lyre and Jubal's `כִּנּוֹר` (Gen 4:21; LXX κιθάρα).
- 281 lyre and pipe at the feast (Isa 5:12).

### Lines shared with other texts
Internal near-repeats listed in the log; with the Iliad (named, not quoted): 156–159 ≈ Il. 18.535–538; 314 ≈ Il.
18.607; 384 ≈ Il. 11.53–55, 16.459; 421–423 ≈ Il. 13.389–391, 16.482–484; 466 ≈ Il. 5.855–867.

### Proposals for the shared renderings
ἤλεκτρον `חַשְׁמַל` ★; κέγχρος `דֹּחַן`; λίς `לַיִשׁ` ★; κόρυς `כּוֹבַע`; τρυφάλεια `קַסְדָּה`; αἰχμή `כִּידוֹן`; δόρυ `חֲנִית`;
φόρμιγξ `כִּנּוֹר`; ἀλαλητός `תְּרוּעָה`; τέττιξ `צִיקָדָה`; ὑμέναιος `שִׁיר־נִשּׂוּאִים`; ἑκατόμβη `זֶבַח־מֵאָה`; the names
and translated names above; the REQUIRED regex fix for δράκων.

### Lessons for the guidelines
- The REQUIRED checks should accept the Hebrew plural with medial letters (`דרקונ`): a plural is not a departure.
- In an ekphrasis, fix the anaphora (`ועליה`) and the gender of the object (here `צִנָּה`, f.) before the first line.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (SH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 13 | ἐς Θήβας ἱκέτευσε φερεσσακέας Καδμείους. | אל תבאי בא כמבקש־מקלט, אל בני קַדְמוֹס נושאי־הַצִּנָּה. | `וְנֹשֵׂא הַצִּנָּה הֹלֵךְ לְפָנָיו` (שמואל א יז:ז); `מָאתַיִם צִנָּה זָהָב שָׁחוּט` (מלכים א י:טז); `וּשְׁלֹשׁ מֵאוֹת מָגִנִּים זָהָב שָׁחוּט` (מלכים א י:יז) | equivalent | σάκος, המגן הגדול המכסה את הגוף, הוא ה־`צִנָּה` המקראית, המגן הגדול של גָּלְיָת (וכנגדו ה`מָּגֵן` הקטן:  ו־). מלה יוונית σάκος אינה בשבעים; הקשר הוא בעברית לבדה, והוא קשר של חפץ: אותו כלי־נשק עצמו. |
| 20 | τὼς γάρ οἱ διέκειτο, θεοὶ δʼ ἐπὶ μάρτυροι ἦσαν· | כי כך הוסכם לו, והָאֵלִים היו עדים (לכך); | `רְאֵה אֱלֹהִים עֵד בֵּינִי וּבֵינֶךָ` (בראשית לא:נ) | equivalent | האל כעד להסכם בין בני אדם: מוטיב משותף לעולם הקדום כולו (בשבועות החיתיות והאשוריות "האלים עדים"); אין קשר בין הטקסטים. |
| 41 | τοῖος γὰρ κραδίην πόθος αἴνυτο ποιμένα λαῶν. | כי געגועים כאלה אחזו בקרבו של רועה העם. | `אַתָּה תִרְעֶה אֶת עַמִּי אֶת יִשְׂרָאֵל` (שמואל ב ה:ב) | equivalent | המלך כרועה העם: דימוי משותף למזרח הקדום (חמורבי "הרועה", מלכי שומר) ולשירה ההומרית (ποιμὴν λαῶν, תואר קבוע של מלכים); מוטיב משותף, בלי קשר בין הטקסטים. |
| 66 | ἐλπόμενος Διὸς υἱὸν ἀρήιον ἡνίοχόν τε | בקוותו את בן זאוס הלוחם ואת רַכָּבוֹ | `וַיֹּאמֶר לְרַכָּבוֹ הֲפֹךְ יָדְךָ` (מלכים א כב:לד) | equivalent | ה`רַכָּב` המקראי הוא הנהג של רכב המלחמה, כמו ἡνίοχος; אותו כלי מלחמה, באותה תקופה בערך, משני צדי הים. אין קשר בין הטקסטים. |
| 70 | πᾶν δʼ ἄλσος καὶ βωμὸς Ἀπόλλωνος Παγασαίου | וכל החורשה ומזבח אפולון הַפָּגָסָאִי | — | equivalent | βωμός `מִזְבֵּחַ` (חובה, `../renderings.md` §5–6) – השבעים שומרים את βωμός למזבחות הנכר ונמנעים ממנו למזבח האל (θυσιαστήριον): הימנעות מכוונת (הסוג ג). |
| 122 | ὣς εἰπὼν κνημῖδας ὀρειχάλκοιο φαεινοῦ, | באמרו כך, את המצחות, מנחושת־ההרים הבוהקת, | `וּמִצְחַת נְחֹשֶׁת עַל רַגְלָיו` (שמואל א יז:ו); `וְכוֹבַע נְחֹשֶׁת עַל רֹאשׁוֹ וְשִׁרְיוֹן קַשְׂקַשִּׂים הוּא לָבוּשׁ` (שמואל א יז:ה) | equivalent | אותו חלק של כלי הנשק, ה`מִצְחָה` על השוק; וכך  – הקובע והשריון של 124 ו־136. חימושו של גָּלְיָת, הלוחם הפלשתי, דומה לחימוש היווני הארכאי (המצחות, השריון, הקובע, נושא הצינה): הפלשתים, מעמי הים, באו מן העולם האגאי. זו נקודת מגע ממשית של חומר (לא של טקסט); כאן היא מוצגת כהקבלה של כלי נשק בלבד. |
| 142 | ἠλέκτρῳ θʼ ὑπολαμπὲς ἔην χρυσῷ τε φαεινῷ | ובחַשְׁמַל הייתה נוגהת מבפנים, ובזהב בוהק | `וּמִתּוֹכָהּ כְּעֵין הַחַשְׁמַל מִתּוֹךְ הָאֵשׁ` (יחזקאל א:ד) | equivalent | ἤλεκτρον – מלת השבעים ל`חַשְׁמַל` של חזון המרכבה: `καὶ ἐν τῷ μέσῳ αὐτοῦ ὡς ὅρασις ἠλέκτρου` (השבעים, יחזקאל א:ד), בעברית . זהות לשונית עם השבעים (הסוג א): לכן `חַשְׁמַל`, ולא "אלקטרון" (שהמובן העברי החדש של "חשמל" נגזר ממנו). יוון לא הכירה את יחזקאל: המשותף הוא המלה היוונית שבחרו המתרגמים למתכת המבהיקה. |
| 159 | εἷμα δʼ ἔχʼ ἄμφʼ ὤμοισι δαφοινεὸν αἵματι φωτῶν, | ושמלה הייתה לה על כתפיה, אדומה מדם הגברים, | `מַדּוּעַ אָדֹם לִלְבוּשֶׁךָ וּבְגָדֶיךָ כְּדֹרֵךְ בְּגַת` (ישעיהו סג:ב) | divergence | הבגד האדום מדם האויבים, כאן בגדה של רוח המוות, שם בגדו של האל הלוחם: תמונה משותפת של מלחמה, בלי קשר. |
| 202 | ἱμερόεν κιθάριζε Διὸς καὶ Λητοῦς υἱὸς | ניגן, מעורר־כיסוף, בן זאוס ולֵטוֹ | `הוּא הָיָה אֲבִי כָּל תֹּפֵשׂ כִּנּוֹר וְעוּגָב` (בראשית ד:כא) | equivalent | בשבעים `ψαλτήριον καὶ κιθάραν` (השבעים, בראשית ד:כא): κιθάρα, הכלי של κιθαρίζω כאן, היא מלת השבעים ל`כִּנּוֹר`. אפולון, אל הכינור, וְיוּבָל, אבי מנגני הכינור: כלי אחד בשני העולמות, בלי קשר בין הסיפורים. |
| 243 | χαλκέων ὀξὺ βόων, κατὰ δʼ ἐδρύπτοντο παρειάς, | של נחושת, זעקו בקול חד, ושרטו את לחייהן, | `וְשֶׂרֶט לָנֶפֶשׁ לֹא תִתְּנוּ בִּבְשַׂרְכֶם` (ויקרא יט:כח); `וְלֹא יִתְגֹּדַד` (ירמיהו טז:ו) | equivalent | שריטת הפנים באבל, מנהג אבל של הים התיכון כולו, שהתורה אוסרת (וכך ). כאן הנשים מתאבלות עוד לפני המוות: מנהג משותף, לא קשר. |
| 247 | χεῖρας ἔχον μακάρεσσι, περὶ σφετέροισι τέκεσσι | המאושרים הרימו ידיים, על צאצאיהם | `וּבְפָרִשְׂכֶם כַּפֵּיכֶם` (ישעיהו א:טו) | equivalent | הרמת הידיים בתפילה – מחווה משותפת ליוונים ולמקרא (); מוטיב משותף. |
| 269 | εἱστήκει, πολλὴ δὲ κόνις κατενήνοθεν ὤμους, | עמדה, ועפר רב היה מונח על כתפיה, | — | equivalent | `וַיַּעֲלוּ עָפָר עַל רֹאשָׁם` (יהושוע ז:ו) – העפר על הראש והכתפיים כאות אבל, משותף ליוון ולמקרא (אכילאוס על מות פטרוקלוס, אִילְיָס 18.23–24): מוטיב משותף. κόνις `עָפָר` (`../renderings.md` §7.2). |
| 281 | ἔνθεν δʼ αὖθʼ ἑτέρωθε νέοι κώμαζον ὑπʼ αὐλοῦ, | ומשם, שוב, מן העבר השני, צעירים חגגו בהילולה לקול חליל, | `וְהָיָה כִנּוֹר וָנֶבֶל תֹּף וְחָלִיל וָיַיִן מִשְׁתֵּיהֶם` (ישעיהו ה:יב) | equivalent | כלי הנגינה של המשתה, הכינור והחליל, משותפים לעולם הים התיכון; במקרא – בתוכחה על ההוללים, כאן – בשבח העיר בשלום. |
| 382 | φωνῇ ὕπʼ ἀμφοτέρων μεγάλʼ ἴαχον· οἳ δʼ ἀλαλητῷ | צרחו גדולות מקול שניהם; והם, בתרועה | `אַשְׁרֵי הָעָם יֹדְעֵי תְרוּעָה` (תהלים פט:טז) | equivalent | בשבעים `ἀλαλαγμόν`, מאותה משפחה של ἀλαλητός (צעקת "אַלַלַי" של הלוחמים): קרוב לזהות לשונית (הסוג א, במלה אחות). תרועת הקרב, משותפת לעמי הים התיכון. |
| 398 | τῆμος δὴ κέγχροισι πέρι γλῶχες τελέθουσι | אז, סביב הדוחן, צומחים המלענים, | `וְדֹחַן וְכֻסְּמִים` (יחזקאל ד:ט) | equivalent | κέγχρος – מלת השבעים ל`דֹחַן`: `καὶ κέγχρον` (השבעים, יחזקאל ד:ט), : זהות לשונית עם השבעים (הסוג א), ומכאן `דֹּחַן`. |
