# Hesiod – The Theogony (Θεογονία) (KEY TH)

## Scope
The Theogony (Θεογονία), lines 1–1022 and 929a–t (1,042 lines in the base): `annotated-TH.rtl.md` (working file), `translation--intro-TH.rtl.md` (intro), the generated
`translation-TH.rtl.md` and `translation.rtl.md`. Base: Evelyn-White 1914 through Perseus, with the Perseus treebank
(`../corpus.md`, `../renderings.md` §1).

## Coordinator's notes (2026-10-24)
- Renderings fixed before the first line: `../renderings.md` (names §3, the speaking names translated §3.2, grammar §4,
  key terms §5, the LXX layer §6, the gates §7, formulas §8, repeated lines §9).
- The translators' sections follow, each above the line `## Parallels index`.

## TH 1–115

### Scope
The proem (Th. 1–115), translator 1, Round 4 run 4 (2026-10-24): the hymn to the Muses of Helicon (1–21), Hesiod's
call (22–35), the Muses' song in Zeus' house (36–52), their birth and ascent to Olympus (53–74), their nine names
(75–79), the kings and the singers (80–103), the invocation (104–115). 115 entries in `annotated-TH.rtl.md`, under the
title and the head (base text, treebank, LXX layer, signs, comparison translations, the speaking names); line 111 is
`{חשודה}`. The clean translation (`translation--intro-TH.rtl.md`, `build`) was not made in this part.

### Sources consulted
The base line data (`hesiod_tools.py data TH 1 117`: Evelyn-White through Perseus, the AGDT parse checked by hand: e.g.
114 ἔσπετε is ἐννέπω, not εἶπον; 34 ὕστατον is ὕστατος; 99 ἀκαχήμενος is ἀκαχίζω); the Septuagint through
`../tools/lxx_verses.py` (Gen 1:1, 1:3, 2:4, 2:7, 4:21, 6:4, 16:15, 32:21; Exod 3:1, 4:17, 14:31; Isa 23:16, 41:22,
48:22 – printed before quoting); the Hebrew Bible through `check_bible_quotes.py --show` (every quoted verse printed
first); Evelyn-White's English quoted only where its wording is certain (1, 22, 26–28, 31, 35, 45, 84, 98–103); West
1966/1988 and Most described, not quoted; the Odyssey and Iliad parallels named by book and line (Od. 8.170–173,
19.163, 19.203; Il. 1.70, 22.126). Enūma eliš VI 39, 46 from this folder's
`../../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/annotated-VI.rtl.md`; Baal's voice (KTU 1.4 V 8) from the Ugaritic corpus.
The Hebrew translations were not consulted.

### Decisions
- **The voice words split** (renderings §5 allowed it): φωνή `קוֹל` (the LXX's word for `קוֹל`), αὐδή `נִיב`
  (the articulate singing voice: 31, 39, 97; WD 61), ὄσσα `צְלִיל` (10, 43, 65, 67: `משלחות צליל` for ὄσσαν ἱεῖσαι),
  ὄψ `נְעִימָה` (41, 68; Kalliope "יפת־הנעימה"). Reason: φωνή and αὐδή meet in one line (39), and φωνή, ὄψ and ὄσσα
  in three neighbouring lines of Typhoeus (829–832). Rejected: all `קוֹל` (hides the Greek variety; 39 would repeat a
  word the Greek does not); `דִּבּוּר` for αὐδή (prose). The renderings' sample `וְהִשְׁרוּ בִּי קוֹל` (31) becomes
  `והשרו בי נִיב`. `נִיב` is vocalized (unvocalized: "fang", "dialect").
- **τιμή / τιμαί**: the distributed prerogatives (74, 112: plural, divided by Zeus or among the gods) `זְכֻיּוֹת`;
  the singular τιμή (an honour one has) stays `כָּבוֹד`; τιμάω `כִּבֵּד` (81). For this the root כב"ד is kept for the
  τιμ- family, and αἰδοῖος becomes `נַעֲרָץ` (16, 44, 80), not the self-test's `הַמְּכֻבֶּדֶת` (renderings §10, TH 16).
- **ἀεί = `תָּמִיד`** everywhere (34, and so WD 413, 503 "not always will it be summer"), and therefore F18 revised
  (below).
- **The singing words** (renderings §5 kept): ἀείδω `שָׁר`, ὑμνέω `רִנֵּן`, ἀοιδή `שִׁירָה`, ἀοιδός `מְשׁוֹרֵר`; new:
  μέλπομαι `זִמֵּר`, μολπή `זִמְרָה`, κλείω `שִׁבַּח` (`הִלֵּל` is reserved for *alālu*), τέρπω `עִנֵּג`, χορός
  `מָחוֹל`, ὀρχέομαι `רָקַד`, ἄρχω (begin) `הִתְחִיל`, ἐκλήγω `פָּסַק מִן`. The nine names' notes tie each name to
  these Hebrew verbs (77–79), so the reader sees what Hesiod's hearer heard: the names sum up the proem.
- **Saying**: εἶπον `אָמַר` (24, 108, 115) and φημί `אָמַר` (29) – one Hebrew for the two complementary Greek verbs of
  saying (a recorded pair; never in one line); ἐννέπω `סִפֵּר` (114, the epic invocation verb); λέγω `דִּבֵּר` (27,
  `לדבר שקרים`); ἀγορεύω `נָאַם`; μῦθος `דָּבָר`; ἔπος `מִלָּה`.
- **Truth**: ψεῦδος `שֶׁקֶר`, ἔτυμος `נָכוֹן`, ἀληθής `אֱמֶת` (27–28 keep the two Greek words of truth apart).
- **Forgetting**: the whole λαθ- family takes שכ"ח: λησμοσύνη (55) `שִׁכְחָה` (= the name Λήθη, 227, renderings
  §3.2), ἐπιλήθομαι (102) `שָׁכַח`; μιμνήσκω `זָכַר`. (The prompt's "λήθη at 55, 102": the Greek has λησμοσύνη and
  ἐπιλήθεται.) κῆδος `צַעַר`, μέρμηρα `דְּאָגָה`, πένθος `אֵבֶל` (vocalized at 98: ἀλλά is `אֲבָל`).
- **The kings** (80–93): θέμιστες `דִּינִים`, δίκαι `מִשְׁפָּטִים` (renderings §5), ἰθύς `יָשָׁר`, διακρίνω `הִכְרִיעַ`,
  νεῖκος `רִיב` (ἔρις stays `מָדוֹן`), καταπαύω `הִשְׁקִיט` (the root שבת is never), ἱλάσκομαι `רִצָּה` (not `כִּפֵּר`:
  the LXX's ἐξιλάσκομαι renders `כִּפֵּר`, the simplex mostly `סָלַח`), μείλιχος / μειλίχιος `מְפַיֵּס`, μαλακός
  `רַךְ` (Prov 15:1, 25:15), ἐχέφρων `שְׁקוּל־דַּעַת`, διοτρεφής `חֲנִיכֵי־זֵאוּס`, ἀγορή `אֲסֵפָה`, ἀγών `קָהָל`.
- **θεράπων `מְשָׁרֵת`** (100): the LXX's θεράπων renders `עַבְדּוֹ` of Moses (Exod 14:31), but `עֶבֶד` is gated to
  δμώς; the link is in the note.
- **χαίρετε `שָׁלוֹם לָכֶן`** (104), by sense: the LXX renders `שָׁלוֹם` with χαίρειν (Isa 48:22); the verb χαίρω
  "rejoice" elsewhere `שָׂמַח`.
- **κιθαριστής `נַגַּן־כִּנּוֹר`** (95): the LXX's κιθάρα = `כִּנּוֹר` (Gen 4:21).
- **ἔχω by sense** (a verb with no single Hebrew): "hold a place, dwell" `שָׁכַן` (2, 64, 75, 101, 114), "hold"
  `אָחַז` (72, 113), "have" `לְ־` (61, 98).
- **Softness**: ἁπαλός `עָדִין` (3), τέρην `רַעֲנָן` (5), μαλακός `רַךְ` (90); sweetness: ἡδύς `נָעִים` (40),
  γλυκερός `מָתוֹק` (83, 97).
- **θέσπις** (32) `שֶׁל אֵלִים`: "divine(ly sounding)"; the Hebrew adjective `אֱלוֹהִי` is blocked by the `אלוהים`
  gate (its word list includes `אלוהי`), rightly for the noun – the phrase keeps the root of θεός.
- **Rejected**: `אשרי` for ὄλβιος (96: that is the LXX's μακάριος); `שושנה` was free (no Greek corpus reservation):
  λειριόεις `דְּמוּי־שׁוֹשָׁן`; Hippocrene translated as a phrase `מַעְיַן הַסּוּס` (the base has Ἵππου κρήνης, two
  words), not transcribed.

### Open decisions for the user
- **αἰδώς = `בּוּשָׁה`** (renderings §5) reads "shame" in Modern Hebrew; at 92 (αἰδοῖ μειλιχίῃ, the people's reverence
  for the king) the sense is "reverence, deference". Kept, with a note; an alternative for the whole corpus would be
  `יִרְאַת־כָּבוֹד` (but WD 200 personifies Αἰδώς with Νέμεσις).
- **τιμαί = `זְכֻיּוֹת`** (renderings' proposal) has the Modern sense "rights"; the alternatives `חֲלָקִים` (taken by
  μοῖρα) and `כְּבוֹדוֹת` (artificial) are weaker. Kept.
- **The method of the voice words** (four Hebrew words where most translations have "voice") – reversible by script.

### Progress log
- 2026-10-24: drafted 1–115 in seven sections, each saved and checked at once (`fill`, `verify TH`); unvocalized and
  plene from the first line (names vocalized at first occurrence; `אֵל`/`אֵלִים`/`אֵלוֹת` vocalized in every line
  with θεός; `נִיב`, `הֶלֶם`, `שֶׁאֵבֶל`, `וְתֵנָּה` vocalized as ambiguous).
- Review (one pass over the 115 `>` lines, fidelity and consistency): the repeated lines 46 = 111 identical; the
  near-repeats 21 / 105, 32 / 38, 37 / 51, 75 / 114 copy each other's strings; 98 `אבל` vocalized; `lexmap` shows only
  inflectional variants and the recorded pairs (εἶπον / φημί `אמרו`; θέμις name / noun; κράτος / κάρτος `עוז`).
- `verify TH`: 0 problems (927 later lines noted as not yet drafted). `check_bible_quotes.py` on the annotated file:
  0 problems (Jer 2:27 quoted with its ketiv/qere).

### The text on its own terms
- **The hymnic proem** (1–115): the poem opens as a Homeric hymn to the Muses ("from the Muses let us begin", 1, and
  again 36), ends the hymn with its farewell "χαίρετε" (104), and turns it into the invocation (104–115).
- **Two mountains**: the Muses of Helicon (1–21, Hesiod's own Boeotian mountain, with its springs and Zeus' altar)
  and of Olympus (25, 36–74), whose daughters they are; the poem binds the local cult to the Panhellenic gods.
- **The first poet who names himself** (22): a shepherd under Helicon, insulted ("mere bellies", 26) and chosen;
  third person at 22, "me" from 24 – the birth of the Greek poetic "I".
- **Lies like the truth** (27–28): a half-line of the Odyssey (19.203, Odysseus' lies) in the Muses' mouth; the
  poet depends on their will ("when we will"); the readings in the note.
- **The seer's formula** (32, 38): "what will be and what was before" (and, for the Muses, "what is"), as Calchas in
  Il. 1.70: the poet as a kind of seer of time.
- **The proverb of oak and rock** (35): four readings (idle talk, men born from trees and stones, oracles, the
  meeting place).
- **Ring composition**: 37 / 51 and 25 / 52 frame the Muses' song (38–50); "from the beginning" (45 / 115) frames the
  invocation; the Muses are sung "first and last" (34, 48) – and the poem ends with them (1022).
- **The Muses' song is the Theogony itself in miniature** (44–50): the first generations, Zeus, men and Giants.
- **Memory bears Forgetting** (54–55, 98–103): Mnemosyne's daughters are "a forgetting of ills"; the singer, who
  remembers the "fame of men before", makes the mourner forget.
- **The speaking names of the nine** (77–79) gather the words of the proem (κλείω, τέρπω, θαλία, μέλπομαι, χορός,
  ἐρατός, ὕμνος, οὐρανός, ὄψ).
- **The ideal king** (80–93): dew on his tongue at birth, straight judgements, persuasion, reverence "as a god" – the
  other face of the "gift-eating kings" of the Works and Days.
- **The end announced at the start** (71–74, 112–113): Zeus' victory over Kronos and the distribution of the τιμαί
  (881–885).

### Key parallels
- **Th. 23 ↔ Exod 3:1**: Hesiod "shepherding" (ποιμαίνοντα) under the holy mountain, called by the goddesses; Moses
  `הָיָה רֹעֶה` at the mountain of God – the LXX's `ἦν ποιμαίνων`, the same Greek verb (plus Amos 7:15, Ps 78:70).
- **Th. 31 ↔ Gen 2:7**: the Muses "breathe into" the poet a voice (ἐμπνέω, `הִשְׁרָה`); God breathes life into Adam –
  the LXX's ἐνεφύσησεν, another verb; `נָפַח` kept out.
- **Th. 32 ↔ Isa 41:22**: "what will be and what was before" – Isaiah's test of the gods, in the LXX with the same
  imperative εἴπατε as Th. 108, 115.
- **Th. 45, 115 ↔ Gen 1:1** (ἐξ ἀρχῆς / Ἐν ἀρχῇ), **Th. 108 ↔ Gen 2:4** (ἐγένετο, γένεσις – the root of Θεογονία).
- **Th. 53 ↔ Gen 16:15**: τίκτω + the dative of the father, `וַתֵּלֶד … לְ־`, the LXX's ἔτεκεν … τῷ.
- **Th. 74 ↔ Deut 32:8–9, Enūma eliš VI 39–46**: the king of the gods distributing portions after his victory.
- **Th. 83–86 ↔ Prov 16:10, Ps 45:3, Ps 72:1–2, 1 Kgs 3:28**: the king whose lips carry a divine gift and judge
  straight.
- **Th. 91 ↔ Gen 32:21, 33:10**: men "propitiate" a man as a god (LXX ἐξιλάσομαι; Jacob and Esau).
- **Th. 95 ↔ Gen 4:21**: the origin of musicians (Muses and Apollo / Jubal; κιθάρα = `כִּנּוֹר`).
- **Th. 100 ↔ Exod 14:31**: θεράπων, the LXX's word for Moses `עַבְדּוֹ`; **Th. 102 ↔ Prov 31:7** ("forget … not
  remember"), Ps 137:5, 1 Sam 16:23, Isa 23:16.

### Lines shared with other texts
- TH 25 = 52 (= 966, 1022): F3, fixed here. TH 46 = 111 (identical Hebrew). TH 21 ≈ 105 ≈ 33 (F18). TH 37 ≈ 51.
  TH 75 ≈ 114 (and F16: 963; WD 81, 110, 128). TH 32 ≈ 38. TH 47 (F2: 457, 468). TH 13 (F28: 573, 888; WD 72).
  TH 18 (F22: 168, 473, 495). TH 106 (F8: 127, 463 …). TH 72 ≈ 504 (`ברעם ובחזיז הלוהט`).

### Proposals for the shared renderings
Formulas (renderings §8):
- **F18 revised**: `גזע הקיימים לעד` → **`הקיימים תמיד`** (regex `הקיימים תמיד`). Reasons: (1) ἐόντων agrees with the
  genitive before γένος (ἀθανάτων, μακάρων, θεῶν), so in Hebrew the epithet follows that noun and `גֶּזַע` stands
  before it (`הגזע הקדוש של בני־האלמוות, הקיימים תמיד`; `גזע המאושרים, הקיימים תמיד`) – γένος is enforced by its
  REQUIRED row; (2) ἀεί = `תָּמִיד` everywhere (WD 413, 503 need "always"). Entries 21, 33, 105 carry a `[סטייה מן
  הנוסחה: …]` marker until the regex is changed (the marker also silences REQUIRED there: checked by hand).
- **F16 revised**: `שוכני ארמנות האולימפוס` → **`שוכני הארמונות האולימפיים`** (fem. `שוכנות הארמונות האולימפיים`,
  75, 114; regex `שוכנ(?:י|ות) הארמונות האולימפיים`). Reasons: Ὀλύμπια is an adjective agreeing with δώματα
  ("Olympian houses"), and the names check (Ὀλύμπιος → `אולימפי`) fails on `האולימפוס`.
- **F2, F3, F4, F5, F8, F22, F28** used as fixed (47; 25, 52; 46, 111; 11, 13, 25, 52; 106; 18; 13). F5 vocalized
  at its first occurrence `נוֹשֵׂא־הָאֶגִיס`.
- **Tool/table bug**: the Greek regexes of F8, F10, F14, F26 and F27 contain `|`, which splits the Markdown table:
  `formulas()` reads the second alternative as the Hebrew (verify flagged TH 53 "F26 κρονιδη → κρονιων", and TH 106
  would fail F8). Entries 53 and 106 carry a marker explaining this. Fix: escape the pipes (`\|`) or parse the row
  from the right.
- **Gate conflict**: renderings §5 fixes ὄλβιος `שְׂבַע־טוֹבָה`, but the `טוב` gate does not license ὄλβιος; entry 96
  carries `[היתר שער: טובה – …]`. Add ολβι to the gate's licence.
Epithets (new, with first line):
- πότνια `גְּבִירָה` (11); Ἀργεῖος `אַרְגִּי` (12); χρύσεος `זָהוֹב` (12; as F11); ἐμβαίνω (perf., of shoes) `נָעוּל`
  (12); ἰοχέαιρα `יוֹרַת־הַחִצִּים` (14); ἑκηβόλος `פּוֹגֵעַ־מֵרָחוֹק` (94); γαιήοχος `אוֹחֵז־הָאֲדָמָה` (15, beside
  Ἐννοσίγαιος `מַרְעִישׁ־הָאֲדָמָה`: both have γαια); αἰδοῖος `נַעֲרָץ` (16, 44, 80); ἑλικοβλέφαρος
  `מְעֻגֶּלֶת־הָעַפְעַפַּיִם` (16, the self-test's); χρυσοστέφανος `עֲטוּרַת־הַזָּהָב` (17); ἐρίγδουπος `הַמַּרְעִים`
  (41; for βαρύκτυπος, 388, I suggest `כְּבַד־הָרַעַם`); μητίετα `רַב־הַתְּבוּנָה` (56); διοτρεφής
  `חֲנִיכֵי־זֵאוּס` (82); ἐχέφρων `שְׁקוּל־דַּעַת` (88); ἀρτιεπής `מְדֻיֶּקֶת־הַמִּלִּים` (29); ὁμόφρων
  `תְּמִימוֹת־דֵּעִים` (60); ἄγραυλος `לָן־בַּשָּׂדֶה` (26); ζάθεος `מְקֻדָּשׁ` (2, 6, 23); ἱερός `קָדוֹשׁ` (21, 57,
  93, 105); ἐρισθενής `רַב־הָעָצְמָה` (4); λαμπρός `זוֹהֵר` (19); μέλας `שָׁחֹר` (20, 69: `הארץ השחורה`); δνοφερός
  `קוֹדֵר` (107); νιφόεις `מֻשְׁלָג` (42, 62); λιπαρός `מַבְהִיק` (63); πολύπτυχος `רַב־הַנְּקִיקִים` (113);
  ἀπείριτος `אֵינְסוֹפִי` (109); ἁλμυρός `מָלוּחַ` (107); ἰοειδής `סְגֹל־הַמַּרְאֶה` (3); περικαλλής `יְפֵהפֶה` (10);
  ἐπήρατος `מַקְסִים` (67); ἄμβροτος `אַלְמוֹתִי` (43); ἀμβρόσιος `אַמְבְּרוֹסִי` (69); λειριόεις `דְּמוּי־שׁוֹשָׁן`
  (41); αἰθαλόεις `לוֹהֵט` (72); ἀκάματος `בְּלִי לֵאוּת` (39); θέσπις `שֶׁל אֵלִים` (32); εὐρύς `רָחָב`, with Sky as
  a name in the singular (`ושמים הרחב`, 45 – the self-test's TH 45 `הָרְחָבִים` should follow §3.2); φέρτατος
  `נַעֲלֶה` (49); προφερής `מֻבְחָר` (79); κρατερός `עַז` (50); κράτος / κάρτος `עֹז` (49, 73).
The gods and the Muses: "the givers of good things" F4; "who are for ever" F18 (revised); the Olympian houses F16
(revised); μάκαρες θεοί `הָאֵלִים הַמְּאֻשָּׁרִים` (101); ὄλβιος `שְׂבַע־טוֹבָה` (96).
Recurring words (beyond the Decisions above): τιμή `כָּבוֹד` / τιμαί `זְכֻיּוֹת` / τιμάω `כִּבֵּד`; διατάσσω `סִדֵּר`
(74; WD 276); δατέομαι `חָלַק`, διαιρέω `הִקְצָה` (112); ἄφενος `עֹשֶׁר`; νόμος `חֹק`, ἦθος `מִנְהָג`, κεδνός
`הָגוּן` (66); δόσις `מַתַּת` (93; WD 718), δῶρον `מַתָּנָה` (103); θεράπων `מְשָׁרֵת`; κλέος `שֵׁם` (κλέεα 100
`שמם`); ἀήρ `עֲרָפֶל` (9); ὥρα (season) `עוֹנָה` (58; the Horai stay `הַהוֹרוֹת`); ἐνιαυτός `שָׁנָה`; μείς `חֹדֶשׁ`;
φθίνω `דָּעַךְ` (59; `כלה` is gated); τελέω `הִשְׁלִים` / `נִשְׁלַם`; θαλία `חֲגִיגָה`; λέχος `מִשְׁכָּב`; οἰκίον
`בַּיִת`; κορυφή `פִּסְגָּה`; ἄκρος (superl.) `עֶלְיוֹן`; στῆθος `חָזֶה`; σκῆπτρον `שַׁרְבִיט`; δάφνη `דַּפְנָה`;
ποιμαίνω `רָעָה`, ποιμήν `רוֹעֶה`, ἀρήν `טָלֶה`; γαστήρ `בֶּטֶן`; κρήνη `מַעְיָן`; δοῦπος `הֶלֶם`; ἠχέω `הִדְהֵד`;
ἰάχω `הֵרִיעַ`; γηρύω `הִכְרִיז`; ἵημι (ὄσσαν ἱεῖσαι) `שִׁלַּח`; ῥέω `זָרַם`; χέω `יָצַק`; ἔρση `טַל`; γελάω
`צָחַק`; νίκη/νικάω `נִצֵּחַ`; ἐμβασιλεύω `מָלַךְ` (as ἀνάσσω: a recorded pair); εἶμι `הָלַךְ`, ἔρχομαι `בָּא`,
νίσσομαι `עָשָׂה דַּרְכּוֹ`; ὁράω / εἶδον `הִבִּיט`; κέλομαι `צִוָּה`; ἐθέλω `רָצָה`; φιλέω `אָהַב`; τρέφω `גִּדֵּל`.
Names (new, by §2.3): Περμησσός `פֶּרְמֵסוֹס` (5), Ὀλμειός `אוֹלְמֵיאוֹס` (6), Ἐλευθήρ `אֶלֶאוּתֵר` (54); Ἵππου
κρήνη `מַעְיַן הַסּוּס` (6, a phrase); Ἵμερος (personified) `כִּסּוּף` (T, 64); the vocative Μοῦσαι `מוּזוֹת` (114,
without the article). The title `תּוֹלְדוֹת הָאֵלִים` echoes Gen 2:4 `תוֹלְדוֹת` on purpose (noted at 108).

### Lessons for the guidelines
- A Markdown table cell must not hold a regex with `|`: five formula rows of renderings §8 are silently broken (the
  tool reads the second alternative as the Hebrew). Test every formula row against its first line before drafting.
- A formula's Hebrew must be fixed on the Greek *syntax* of every copy, not on the Greek string: γένος αἰὲν ἐόντων
  is not a unit (ἐόντων agrees with the noun before γένος).
- Run the gates on the pre-set renderings themselves: ὄλβιος `שְׂבַע־טוֹבָה` (§5) trips the `טוב` gate.
- `lxx_verses.py` has only Genesis, Exodus, Isaiah and 4 Kingdoms: a Psalms, Numbers or Proverbs LXX verse cannot be
  printed, so it is not quoted (Ps 45:3 [LXX 44:3] χέω could not be checked).
- The brief's "λήθη at 55, 102" was not the Greek (λησμοσύνη, ἐπιλήθεται): read the line data before believing any
  brief.

## TH 116–336

### Scope
Part 2 (translator 1, resumed; 2026-10-24): the cosmogony (116–125), Earth's children and the Titans (126–138), the
Cyclopes and the Hundred-Handers (139–153), Sky's crime and Kronos' sickle (154–187), the birth of Aphrodite and the
name of the Titans (188–210), the children of Night and of Strife (211–232), Nereus and the Nereids (233–264),
Thaumas, Phorkys and Keto's monsters (265–336). 221 entries in eight sections, in the base's order (212, 214, 213);
`{חשודה}` at 118, 196, 323, 324. The placeholder now reads `<!-- טרם תורגם: 337–1022 -->`.

### Sources consulted
The line data (`data TH 116 336`; the AGDT parse checked: 116 γένετʼ is γίγνομαι, not γενέτης; 114/290 lemma slips
(Ἐπυθεία for Ἐρύθεια); 266 ἥ unparsed; 192 πρῶτον lemmatized πρότερος); LSJ / DGE for ἄπλαστος (151) through
`hesiod_tools.py lsj`; the LXX (printed): Gen 1:2, 1:3, 1:5, 1:10, 1:11, 1:21, 2:7, 2:9, 3:1, 3:24, 4:7, 6:4, 6:9, 9:13,
25:27; Exod 29:1; Isa 2:12, 27:1, 40:22; the Hebrew verses printed before quoting; the fifth-day dossier's apparatus
(237–239, 270, 295–300, 333–336) as material; Enūma eliš I 37–40, 69 and VI 39, 46 and Gudea A.xxv.28 from this
folder's corpora (grep `--all`). Kumarbi (the Hittite–Hurrian "Song of Going Forth / Kingship in Heaven") is named
from general knowledge, not quoted (not in the folder).

### Decisions
- **The first lines** (116–125): Χάος `פַּעַר`, γίγνομαι `נִהְיָה` (self-test line kept), Tartaros `טַרְטָרוֹס`
  with ἠερόεις `עַרְפִלִּי`, Eros `אֶרוֹס`, λυσιμελής `מְרַפֵּה־הָאֵבָרִים`, δάμνημι `הִכְנִיעַ`, Erebos `אֶרֶבוֹס`,
  Αἰθήρ `אֶתֶר`, Ἡμέρη `יוֹם`; κύω / ὑποκύομαι `הָרְתָה` ("משהרתה", 125, 308).
- **Sky and Earth** (126–138): ἶσον ἑαυτῇ `השווה לה עצמה`; ἕδος ἀσφαλὲς αἰεί `מושב יציב תמיד` (117 = 128); Οὔρεα
  (name) `הָרִים`; ἔναυλος `נְאוֹת` (`מִשְׁכָּן` gated); ναίω `גָּר` (130, 274, 285, 303, 329: `דָּר` was blocked as
  `לדור` by the `דור` gate); πέλαγος `מֶרְחָב`; ἐφίμερος `נִכְסָף`; εὐνάω `שָׁכַב`; βαθυδίνης `עֲמֹק־הַמְּעַרְבֹּלוֹת`;
  ἐρατεινός `עָרֵב` (as ἐρατός; vocalized); θαλερός `פּוֹרֶה` (as in F15); τοκεύς `מוֹלִיד`; ἐχθαίρω `שָׂנֵא`.
- **οἶδμα `נַחְשׁוֹל`** (109, 131 changed from `גל`), so that κῦμα is `גַּל` (252).
- **The monsters' bodies** (139–153): ὑπέρβιος `פְּרָאִי`; ὀβριμόθυμος `עַז־הַלֵּב`; ὄβριμος `כַּבִּיר`; ὑπερήφανος
  `גֵּאֶה`; ἐναλίγκιος `דּוֹמֶה` (as ὅμοιος, ἔοικα: synonyms, never in one line); μηχανή `תּוּשִׁיָּה` (and ἀμήχανος
  `שֶׁאֵין כְּנֶגְדּוֹ תּוּשִׁיָּה`, 295, 310); ἰσχύς `חֹזֶק`; ἐπώνυμος `שֵׁם הוֹלֵם`; ἀίσσω `זִנֵּק`; ἄπλαστος
  `בִּלְתִּי־יְצוּרוֹת` (from πλάσσω: the `יצר` gate licenses it; LXX Gen 25:27 ἄπλαστος = `תָּם`); φύω `צָמַח`;
  στιβαρός `אֵיתָן`; μέλος `אֵבֶר`; ἄπλητος `עָצוּם`; εἶδος `מַרְאֶה`.
- **The castration** (154–210): κευθμών / κεῦθος `מַחֲבוֹא`; στεναχίζομαι `נֶאֱנַק`; πέλωρος `מִפְלַצְתִּי`; τέχνη
  `אֻמָּנוּת`; φράζομαι (mid.) `הָגָה`; ἀδάμας `שָׁמִיר`; γένος ἀδάμαντος `גזע השמיר` (γένος kept as `גֶּזַע` – the
  earth "breeds" the metal); δρέπανον `מַגָּל`, ἅρπη `חֶרְמֵשׁ`; ἀτάσθαλος `פָּרוּעַ`, ἀτασθαλία `פְּרִיעוּת`; τίνω /
  τίσις `נָקַם` / `נְקָמָה` (the Titans' pun, 209–210, in the notes); λώβη `עֶלְבּוֹן`; μήδομαι `זָמַם`; ἀεικής
  `מַחְפִּיר`; μῆδος "genitals" `מְבוּשִׁים` (Deut 25:11; the homonym "counsels" stays `תַּחְבּוּלוֹת`); ἀμάω `קָצַר`
  (Gen 8:22 gate, licensed); ῥίπτω `הִשְׁלִיךְ`, καταβάλλω `הֵטִיל`; ἀφρός `קֶצֶף`; πολύκλυστος `רַב־הַמִּשְׁבָּרִים`;
  περίρρυτος `מֻקַּף־מַיִם`; ποίη `עֵשֶׂב` (noted against Gen 1:11); ἀφρογενής `יְלִידַת־הַקֶּצֶף`; εὐστέφανος
  `יְפַת־הָעֲטָרָה`; φιλομμηδής `אוֹהֶבֶת־הַמְּבוּשִׁים`, φιλομμειδής `אוֹהֶבֶת־הַצְּחוֹק` (256); ὁμαρτέω `הִתְלַוָּה`
  (ὀπαδέω is `לִוָּה`); λαγχάνω `עָלָה בְּגוֹרָלוֹ`; ἐξαπάτη `תַּרְמִית`; τέρψις `עֹנֶג`; μειλιχία `פִּיּוּס`; νεικέω
  `רָב`; ῥέζω (= ἔρδω) `עָשָׂה` by sense (the פירוק names ῥέζω).
- **Night's and Strife's children, translated as names** (renderings §3.2; new ones marked *): *Μόρος `גּוֹרָל`,
  Κήρ `קֵר` (sg. of `הַקֵּרוֹת`; a `[היתר שם]` at 211), Θάνατος `מָוֶת`, Ὕπνος `שֵׁנָה` (both vocalized: the tool's
  strings are `מות` / `שנה`, and `שנה` is also "year"), Ὄνειροι `חֲלוֹמוֹת`, *Μῶμος `גְּנַאי`, *Ὀιζύς `מְצוּקָה`,
  Νέμεσις `חֵמָה`, Ἀπάτη `מִרְמָה`, Φιλότης `אַהֲבָה`, Γῆρας `זִקְנָה`, Ἔρις `מָדוֹן`, Πόνος `עָמָל`, Λήθη `שִׁכְחָה`,
  Λιμός `רָעָב`, Ἄλγεα `מַכְאוֹבִים`, *Ὑσμῖναι `קְרָבוֹת`, *Μάχαι `מִלְחָמוֹת`, *Φόνοι `רְצִיחוֹת`, *Ἀνδροκτασίαι
  `הֲרִיגוֹת`, *Νείκεα `רִיבִים`, *Ψευδεῖς Λόγοι `אֲמָרִים כּוֹזְבִים`, *Ἀμφιλλογίαι `מַחְלוֹקוֹת`, *Δυσνομίη
  `סֵדֶר־רַע` (the opposite of Εὐνομίη `סֵדֶר־טוֹב`), *Ἄτη `אֵיד` (vocalized; Deut 32:35), Ὅρκος `שְׁבוּעָה`.
  Epithets: στυγερός `מְתֹעָב`; ἐρεβεννός `אָפֵל`; ἀλγινόεις `מַכְאִיב`; ὀλοός `מַשְׁחִית`; οὐλόμενος `מְבַלֶּה`
  (the root ארר is gated); καρτερόθυμος `חֲזַק־הַלֵּב`; δακρυόεις `רַב־דְּמָעוֹת`; νηλεόποινος `נוֹקֵם בְּלִי רַחֲמִים`;
  κοιμάω `נָם עִם`; παράβασις `עֲבֵרָה`; ἐφέπω `רָדַף`; χόλος `זַעַם`; ὄπις `גְּמוּל`; λήγω `פָּסַק`; ἁμαρτάνω
  `חָטָא` (the LXX's word, Gen 4:7); πημαίνω `הִזִּיק`; ἑκών `בְּמֵזִיד`; ἐπίορκον ὀμνύναι `נִשְׁבַּע לַשֶּׁקֶר`
  (Lev 19:12, Zech 5:4).
- **Nereus and the Nereids**: ἀψευδής `שֶׁאֵינוֹ מְשַׁקֵּר`; νημερτής `אֵינוֹ טוֹעֶה`; ἤπιος `נוֹחַ`; δῆνος
  `מַחֲשָׁבָה`; δίκαιος `צֶדֶק` (REQUIRED; "מחשבות צדק"); πρέσβυς `בְּכוֹר`; γέρων `זָקֵן`; μεγήρατος `אָהוּב מְאֹד`;
  ἠΰκομος `יְפַת־הַשֵּׂעָר`; τελήεις `שָׁלֵם`; ἐρόεις `מְעוֹרֵר־הַחֵשֶׁק`; ῥοδόπηχυς `וְרֻדַּת־הַזְּרוֹעוֹת`; χαρίεις
  `רַב־חֵן`; εὐειδής `יְפַת־מַרְאֶה`; ἠεροειδής `עַרְפִלִּי־הַמַּרְאֶה`; ζαής `סוֹעֵר`; πραΰνω `הִרְגִּיעַ`; εὔσφυρος
  `יְפַת־הַקַּרְסֻלַּיִם`; φυή `קוֹמָה`; **ἄμωμος `תָּמִים`** (LXX Exod 29:1 ἀμώμους = `תְּמִימִם`), ἀμύμων `מֻשְׁלָם`;
  δέμας `גּוּף`; δῖος `נֶהְדָּר` (a "divine" adjective without the gated `אֱלֹהִי`). The fifty names transcribed by
  §2.3 (vocalized at their first occurrence), each meaning in the notes.
- **Keto's brood**: ἄγομαι (a wife) `לָקַח לוֹ`; ὠκύς `מָהִיר`; οἰωνός `עוֹף`; μεταχρόνιος `בְּרוּם`; ἐκ γενετῆς
  `מִלֵּדָה`; χαμαί `עַל הַקַּרְקַע`; εὔπεπλος `יְפַת־הַגְּלִימָה`; κροκόπεπλος `עֲטוּיַת־הַכַּרְכֹּם`; λιγύφωνος
  `צְלוּלַת־הַקּוֹל`; ἐσχατιή `קָצֶה`; λυγρός `מַר` (λυγρά `מְרוֹרִים`); ἀγήραος `שֶׁאֵינוֹ מַזְקִין`; παραλέγομαι
  `שָׁכַב לְצַד`; κυανοχαίτης `כְּחוֹל־הָרַעְמָה`; λειμών `כַּר` (`אָחוּ` is the Egyptian loanword's); πηγή `מָקוֹר`
  (κρήνη `מַעְיָן`); ἄορ `חֶרֶב`; φίλος in its Homeric possessive sense `שֶׁלּוֹ` (283; elsewhere `אָהוּב`: a sense
  split); μητιόεις `מְלֵא־הַתְּבוּנָה` (μητίετα `רַב־הַתְּבוּנָה`); τρικέφαλος `תְּלַת־הָרָאשִׁים`; ἐξεναρίζω
  `הִפְשִׁיט`, κτείνω `הָרַג`, ἐναίρω `הֵמִית`; εὐρυμέτωπος `רְחַב־הַמֵּצַח`; πόρος `מַעֲבָר`; σταθμός `דִּיר`;
  θεῖος (fem.) `אֱלוֹהִית` (the self-test's 297; see Problems); κρατερόφρων `קְשֵׁה־הַלֵּב`; ἑλικῶπις
  `מְעֻגֶּלֶת־הָעֵינַיִם`; αἰόλος `מְנֻמָּר`; ὠμηστής `אוֹכֵל־נָא`; γλαφυρός `חָלוּל`, κοῖλος `נָבוּב`; ῥύομαι
  `נֶעֱצַר` (304, uncertain; the root שמר stays φυλάσσω's); ὑβριστής `זֵד`; ἄνομος `פּוֹרֵעַ־חֹק`; κύων `כֶּלֶב`;
  χαλκεόφωνος `נְחוּשׁ־הַקּוֹל`; ἀναιδής `חֲסַר־בּוּשָׁה`; λευκώλενος `צְחוֹרַת־הַזְּרוֹעוֹת`; κοτέω `כָּעַס`; νηλής
  `חֲסַר־רַחֲמִים`; χαλκός `נְחֹשֶׁת`; ἀρηΐφιλος `אֲהוּב־אָרֵס`; ἀγελείη `נוֹהֶגֶת־הַשָּׁלָל`; ἀμαιμάκετος `בִּלְתִּי
  נִכְבָּשׁ`; ποδώκης `קַל־רַגְלַיִם`; χαροπός `עַז־הַמַּבָּט`; χίμαιρα (noun) `עֵז`, κρατερός `עַז` (vocalized at 322–323);
  μένος `זַעַף`; ὄλεθρος `הֶרֶס`; ὑποδάμνημι `נִכְנַע`; κυδρός `מְפֹאָר`; καταναίω `הוֹשִׁיב לָגוּר`; οἰκέω `חָנָה`
  (`בשבתו` tripped the `שבת` gate); ἐλεφαίρομαι `הִתְעַלֵּל`; κοιρανέω `שָׁלַט`; ἴς `אוֹן`; δαμάζω `הִכְנִיעַ`; ἐρεμνός
  `כֵּהֶה`; πεῖραρ `גְּבוּל`; παγχρύσεος `כֻּלּוֹ־זָהָב`; φυλάσσω `שָׁמַר` (335, REQUIRED).
- **The dossier's lines re-rendered** to the corpus Hebrew (for the coordinator's alignment): 237 ἀγήνωρ `האמיץ` (the
  dossier's `עז־הרוח` would trip the `רוח` gate); 238 the self-test line; 239 `בלבבה` (φρένες), `שלב של שמיר`; 270
  `יפות־הלחיים`; 295 `שאין כנגדה תושייה` (ἀμήχανος tied to μηχανή); 296 `לבני האדם בני־התמותה ולא לאלים
  בני־האלמוות`; 297 the self-test line without its `?`; 298 `מעוגלת־העיניים`; 299 the self-test line; 300 `במחבואי
  הארץ המקודשת` (ζάθεος); 333 F14 `בהתייחדה באהבה`; 334 `הולידה`, `הארץ הכהה` (ἐρεμνός); 335 `שומר`; 336 `זה הוא
  הגזע`.

### Open decisions for the user
- **The Meliai** (187): renderings §3 has `נִימְפוֹת הָאֵלָה`, but `אֵלָה` is the terebinth (Pistacia), and vocalized it
  also reads "the goddess"; μελία is the ash (Fraxinus), Modern Hebrew `מֵילָה`. I wrote `נִימְפוֹת הַמֵּילָה` (the
  name check does not fire: the treebank's lemma is μελία, the table's μελιαι). Proposed for the table.
- **κλέος `שֵׁם` and ὄνομα** (144, 148, 171, 282): ὄνομα "name" is unavoidably `שֵׁם`, so the two Greek words share it
  (`lexmap` shows the collision). Either accept the split (`lemma` lists every κλέος) or revise κλέος
  to `תְּהִלָּה` before the Works and Days.

### Progress log
- Drafted 116–336 in eight sections, each saved, filled and verified at once; unvocalized and plene (names at their
  first occurrence; `אֵל`/`אֵלִים`/`אֵלָה`/`אֵלוֹת` and `אֶל` vocalized wherever θεός or a θε- word stands in the line or
  its neighbour's edge; `שֶׁאֵבֶל`, `מָוֶת`, `שֵׁנָה`, `אֵיד`, `עֵז`/`עַז`, `הָעֲרֵבָה` vocalized as ambiguous).
- Gate hits fixed without bending the sense: 157 `משלחם` (read as לחם) → `משלח אותם`; 303, 329 `לדור` (the `דור`
  gate) → ναίω `גָּר` everywhere; 330 `בשבתו` (the `שבת` gate) → οἰκέω `חָנָה`; 129, 192, 193, 202 the preposition
  `אל` vocalized `אֶל`.
- Review pass over the 221 `>` lines (fidelity, consistency): the repeated-line first copies 118 (= 794), 150 (= 671),
  152 (= 673 = WD 149), 154 (= 421) drafted with their later contexts in mind; near-repeats 166 / 172, 117 / 128, 109 /
  131, 263 / 264; `lexmap` collisions resolved (ζαής `סוער`, not `עז`) or recorded (synonym pairs: εἶπον / φημί;
  καλέω / κικλήσκω; μακρός / δολιχός `ארוך`; ἐναλίγκιος / ὅμοιος / ἔοικα `דומה`; κλέος / ὄνομα `שם`).
- A note at 149 corrected in review: the LXX of Isa 2:12 renders the pair `גֵּאֶה וָרָם` with ὑβριστήν καὶ
  ὑπερήφανον (not ὑπερήφανος alone = `גאה`).
- `verify TH`: 0 problems (706 later lines noted). `check_bible_quotes.py`: 0 problems (one quotation, Gen 10:2, was
  first written from memory with a wrong `וּ`, caught by the checker and corrected – the ★ rule held). `selftest`: 0
  failures.

### The text on its own terms
- **The beginning without a maker** (116–125): the Gap "came to be", then Earth, Tartaros, Eros; from the Gap the
  darkness, from the darkness the light – a world that grows by birth, not by command.
- **Earth as mother and planner** (126–187): she bears her own cover, the sky, then plots against him with a sickle she
  "breeds" from adamant; the mother conceives the plan, the youngest son executes it – the pattern repeats with Rhea and
  Zeus (468–491).
- **Etymologies in the verse** (144 Cyclopes, 195–200 Aphrodite's four names, 207–210 the Titans, 271 the Graiai, 282
  Pegasus): the poet explains names as the Bible does (`כִּי מִן הַמַּיִם מְשִׁיתִהוּ`); the Hebrew keeps the names and
  the notes show the puns.
- **The obscene pun** (200): φιλομμηδής "genital-loving" for Homer's φιλομμειδής "laughter-loving" (256).
- **Night's children as a moral map** (211–232): death, sleep, blame, misery, retribution, deceit, love, old age,
  strife – and from strife every social evil, ending with the oath that destroys the perjurer: the world of the Works
  and Days in genealogical form.
- **Nereus the truthful** (233–236) against Strife's "lying words": the sea's old man as the just elder; his fifty
  daughters' names map the sea and a good rule (257: "gatherer", "good speaker", "people's ruler").
- **Monsters as one family** (270–336), all from Keto and Phorkys, sister and brother; most are killed by Heracles,
  son of Zeus: the new order clears the old world.
- **Edges of the world** (215, 274–275, 290–294, 334–335): the West beyond Ocean, Night's home, the Hesperides'
  garden, Erytheia – a mythical geography of margins.

### Key parallels
- **Th. 116 ↔ Gen 1:2–3**: χάος is not the LXX's word for `תֹּהוּ` (ἀόρατος καὶ ἀκατασκεύαστος); γίγνομαι is its
  word for `וַיְהִי`.
- **Th. 124 ↔ Gen 1:5**: Night bears Day; the LXX names night and day with Hesiod's νύξ and ἡμέρα – darkness before
  light in both, by birth here and by naming there.
- **Th. 148 ↔ Gen 6:4**: the Hundred-Handers are οὐκ ὀνομαστοί, the LXX's ὀνομαστοί is `אַנְשֵׁי הַשֵּׁם` – the same
  word, negated; **Th. 185 ↔ Gen 6:4**: Γίγαντες = the LXX's `נְפִלִים`.
- **Th. 154–210 ↔ the Kumarbi cycle, Enūma eliš I**: the succession myth (a father who suppresses his children, a son
  who mutilates or kills him) – an inherited Near Eastern tradition, with no Israelite branch.
- **Th. 219 ↔ Job 2:10** (good and evil given by the divine at birth) and Gen 2:9 (through the Hebrew only: the LXX's
  καλοῦ καὶ πονηροῦ).
- **Th. 222 ↔ Gen 4:7**: ἁμαρτάνω, the LXX's verb for `חָטָא`.
- **Th. 232 ↔ Lev 19:12, Zech 5:4**: the false oath that destroys the swearer.
- **Th. 238 ↔ Gen 1:21** (Keto / κήτη), **Th. 299, 334 ↔ Gen 3:1** (ὄφις), **Th. 322 ↔ Isa 27:1** (δράκων with ὄφις,
  as in the LXX of Leviathan), **Th. 313 ↔ Ps 74:14** (the many-headed serpent; Gudea's seven-headed serpent).
- **Th. 335 ↔ Gen 3:24**: φυλάσσω, the LXX's verb for the cherubim who guard the tree – here a serpent guards the golden
  apples.
- **Th. 259 ↔ Exod 29:1**: ἄμωμος = `תָּמִים`; **Th. 236 ↔ Gen 6:9**: δίκαιος = `צַדִּיק`.

### Lines shared with other texts
- First copies fixed here: 118 (= 794), 150 (= 671), 152 (= 673 = WD 149), 154 (= 421); near-repeats: 147 ≈ 154; 151 ≈
  672; 166 ≈ 172; 218 ≈ 905; 242 ≈ 959; 204 ≈ 407; 72 ≈ 504 (from part 1). Formulas used: F7 (147, 154), F8 (127), F12
  (140 names, 286), F14 (125, 333; also 306), F17 (220), F21 (219), F22 (137, 168).

### Proposals for the shared renderings
- **F12** (`../renderings.md` §8): its Hebrew cell reads `(רעם וברק|ברונטס.*סטרופס)` followed by the text "` (the
  names at Th. 140)`", which becomes part of the regex; and `nopunct()` turns the `.` of `.*` into a space. Both 140 and
  286 carry a `[סטייה מן הנוסחה: …]` marker explaining that the line has the formula. Suggest `(רעם וברק|ברונטס)` (the
  names line: ברונטס is enough) and the note moved to the Lines column.
- **Names (new, §2.3)**: Περμησσός … (part 1); here: Ἐλευθήρ (part 1); Κοῖος `קוֹיוֹס`, Κρῖος `קְרִיּוֹס`, Ὑπερίων
  `הִיפֶּרִיּוֹן`, Θεία `תֵּאָה`, Φοίβη `פוֹיבָּה`, Τηθύς `טֵתִיס` (table forms, confirmed); Πλωτώ `פְּלוֹטוֹ`, Εὐκράντη
  `אֶוּקְרַנְטָה`, Σαώ `סָאוֹ`, Εὐδώρη `אֶוּדוֹרָה`, Γαλήνη `גָּלֵנָה`, Γλαύκη `גְּלַאוּקָה`, Κυμοθόη `קִימוֹתוֹאָה`, Σπειώ
  `סְפֵּיאוֹ`, Θόη `תוֹאָה`, Ἁλίη `הַלִיָּה`, Πασιθέη `פָּסִיתֵאָה`, Ἐρατώ `אֶרָטוֹ`, Εὐνίκη `אֶוּנִיקָה`, Μελίτη
  `מֶלִיטָה`, Εὐλιμένη `אֶוּלִימֵנָה`, Ἀγαυή `אַגַאוּאָה`, Δωτώ `דּוֹטוֹ`, Πρωτώ `פְּרוֹטוֹ`, Φέρουσα `פֶרוּסָה`,
  Δυναμένη `דִּינָמֵנָה`, Νησαίη `נֵסַאיָה`, Ἀκταίη `אַקְטַאיָה`, Πρωτομέδεια `פְּרוֹטוֹמֶדֵיאָה`, Πανόπεια
  `פָּנוֹפֵּיאָה`, Γαλάτεια `גָּלַטֵיאָה`, Ἱπποθόη `הִיפּוֹתוֹאָה`, Ἱππονόη `הִיפּוֹנוֹאָה`, Κυμοδόκη `קִימוֹדוֹקָה`,
  Κυματολήγη `קִימָטוֹלֵגָה`, Κυμώ `קִימוֹ`, Ἠιόνη `אֵיּוֹנָה`, Ἁλιμήδη `הַלִימֵדָה`, Γλαυκονόμη `גְּלַאוּקוֹנוֹמָה`,
  Ποντοπόρεια `פּוֹנְטוֹפּוֹרֵיאָה`, Ληαγόρη `לֵאַגוֹרָה`, Εὐαγόρη `אֶוּאַגוֹרָה`, Λαομέδεια `לָאוֹמֶדֵיאָה`, Πουλυνόη
  `פּוּלִינוֹאָה`, Αὐτονόη `אַאוּטוֹנוֹאָה`, Λυσιάνασσα `לִיסִיָאנָסָה`, Εὐάρνη `אֶוּאַרְנָה`, Ψαμάθη `פְּסָמָתָה`,
  Μενίππη `מֶנִיפָּה`, Νησώ `נֵסוֹ`, Εὐπόμπη `אֶוּפּוֹמְפָּה`, Θεμιστώ `תֶּמִיסְטוֹ`, Προνόη `פְּרוֹנוֹאָה`, Νημερτής
  `נֵמֶרְטֵס`; Ἀελλώ `אַאֶלוֹ`, Ὠκυπέτης `אוֹקִיפֶּטֵס`, Πεμφρηδώ `פֶּמְפְרֵדוֹ`, Ἐνυώ `אֶנִיוֹ`, Σθεννώ `סְתֶנוֹ`,
  Εὐρυάλη `אֶוּרִיאַלָה`, Περσεύς `פֶּרְסֵאוּס`, Ἐρύθεια `אֶרִיתֵיאָה`, Τίρυνς `טִירִינְס`, Εὐρυτίων `אֶוּרִיטִיּוֹן`,
  Ἀμφιτρυωνιάδης `בֶּן־אַמְפִיטְרִיּוֹן`, Ἰόλαος `יוֹלָאוֹס`, Βελλεροφόντης `בֶּלֶרוֹפוֹנְטֵס`, Νεμέα `נֶמֵאָה`
  (Νέμειος `נְמֵאִי`), Λερναῖος `לֶרְנָאִי`, Τρητός `טְרֵטוֹס`, Ἀπέσας `אַפֶּסָס`.
- **Translated names (§3.2), new**: Μόρος `גּוֹרָל`, Μῶμος `גְּנַאי`, Ὀιζύς `מְצוּקָה`, Ὑσμῖναι `קְרָבוֹת`, Μάχαι
  `מִלְחָמוֹת`, Φόνοι `רְצִיחוֹת`, Ἀνδροκτασίαι `הֲרִיגוֹת`, Νείκεα `רִיבִים`, Ψευδεῖς Λόγοι `אֲמָרִים כּוֹזְבִים`,
  Ἀμφιλλογίαι `מַחְלוֹקוֹת`, Δυσνομίη `סֵדֶר־רַע`, Ἄτη `אֵיד` (★ vocalized); Κήρ sg. `קֵר` (add to the table as the
  singular form, or let the tool accept it); Ὄρος `הָרִים` used at 129.
- **The Meliai**: `נִימְפוֹת הַמֵּילָה` for `נִימְפוֹת הָאֵלָה` (see Open decisions).
- **Required rows**: ἄμωμος `תָּמִים` (LXX Exod 29:1) and ἁμαρτάνω `חָטָא` (LXX Gen 4:7) are LXX identities worth a
  REQUIRED row; δίκαιος already has one.
- **Every recurring word above** (Decisions) is proposed as binding; the most likely to recur: πέλωρος / πέλωρον,
  ἀμήχανος `שֶׁאֵין כְּנֶגְדּוֹ תּוּשִׁיָּה`, μηχανή `תּוּשִׁיָּה`, ἀδάμας `שָׁמִיר`, ἅρπη `חֶרְמֵשׁ`, δρέπανον `מַגָּל`,
  κευθμών / κεῦθος `מַחֲבוֹא`, ναίω `גָּר`, ὁπλότατος `הַצָּעִיר`, τοκεύς `מוֹלִיד`, ὑπερήφανος `גֵּאֶה`, ὑβριστής
  `זֵד`, λυγρός `מַר`, ἀγήραος `שֶׁאֵינוֹ מַזְקִין`, κλυτός `מְהֻלָּל`, χρώς `עוֹר`, οἶδμα `נַחְשׁוֹל`, κῦμα `גַּל`,
  πνοιαὶ ἀνέμων `מַשְׁבֵי הָרוּחוֹת`, κρατερόφρων `קְשֵׁה־הַלֵּב`, ἑλικῶπις `מְעֻגֶּלֶת־הָעֵינַיִם`, λευκώλενος
  `צְחוֹרַת־הַזְּרוֹעוֹת` (Hera's epithet), βίη Ἡρακληείη `כֹּחַ הֵרַקְלֵס`, δῖος `נֶהְדָּר`.

### Lessons for the guidelines
- A table cell that holds a regex must hold only the regex: F12's explanatory text became part of its pattern, and the
  tool's `nopunct()` destroys a `.` in any Hebrew regex – formulas must be written without `.`.
- The gates catch hidden roots in ordinary inflection (`משלחם` = מ + לחם, `לדור`, `בשבתו`): a translator should run
  `verify` after every section, as the brief says, and choose another word rather than bend the gate.
- The `אלוהים` gate blocks the masculine adjective `אֱלוֹהִי` but not the feminine `אֱלוֹהִית`: θεῖος needs one decided
  word for both genders (I suggest `שֶׁל אֵלִים` for the masculine, as θέσπις at 32, and keeping `אֱלוֹהִית` only where the
  self-test fixed it – or one rule for both).
- Even a well-known verse must be printed first: Gen 10:2 was mis-remembered (`וּבְנֵי`).

## TH 337–616

### Scope
Part 3 (translator 2, Round 4 run 4, 2026-10-24): the children of Tethys and Ocean – the Rivers and the Oceanids
(337–370); the children of Theia and Hyperion (Sun, Moon, Dawn), of Krios and Eurybia, Dawn's winds and stars
(371–382); Styx and her children Rivalry, Victory, Power and Force (383–403); Phoibe and Koios, Leto, Asterie and the
"Hymn to Hekate" (404–452); Kronos swallowing his children, the stone, Zeus' birth in Crete (453–506); the Iapetids
(507–534); Mekone and the theft of fire (535–569); the first woman (570–616). 280 entries in eight sections, in the
base's order (425, 427, 426; 429, 434, 430–433); `{חשודה}` at 496, 576, 577, 591 (576–577 have no treebank words: the
פירוק there is ours). The placeholder now reads `<!-- טרם תורגם: 617–1022 -->`. The clean translation was not built
in this part.

### Sources consulted
The line data (`data TH 337 616`; the AGDT parse checked: 342 Σιμοῦντα tagged adj.; 351 lemma Καλλιπόη for Καλλιρόη;
346 ἱερόν tagged noun (it is the adjective of γένος); 527 ἔκτεινε tagged imperfect (aorist); 530 εἴη lemmatized ἐάω (it
is εἰμί opt.); 559 lemma garbled (Ἀαπετιον́ιδης); 571/579 Ἀμφιγυήεις lemmatized ἀμφιγύεις, so the name check does not
fire; 576–577 have no words); LSJ for κρίνω (535) through `hesiod_tools.py lsj`; the LXX printed before quoting:
Gen 1:14, 1:16, 1:27, 2:5, 2:7, 2:10, 2:13, 2:18, 2:22, 3:6, 3:22, 4:3–5, 4:22, 4:25, 6:4, 8:20–21, 9:27, 10:2, 15:2,
22:2, 22:13, 24:65, 25:23, 28:18, 28:20, 28:22, 30:3, 31:20, 31:26, 35:14, 41:1, 43:34, 50:23; Exod 1:22, 2:2, 7:12,
15:12, 19:4, 29:13, 29:22; Isa 14:12–13, 25:8, 61:10. Every Hebrew verse printed with `check_bible_quotes.py --show`
before quoting. The LXX of Judges (11:34 μονογενής), Ezekiel (16:4 σπαργανόω), Zephaniah (2:5) and Job is not in the
tool: described, not quoted. Kumarbi ("Kingship in Heaven"), Pausanias 10.24.6 (the stone at Delphi), Hesychius s.v.
βαίτυλος, Iliad 12.20–22 (the Troad rivers), 21.195–197 (Ocean the source of all waters), 23.141–142 (hair vowed to a
river) are named from general knowledge, not quoted. Evelyn-White quoted only at 337; West / Most described.

### Decisions
- **The rivers and the Oceanids** (337–361): names transcribed by §2.3 and vocalized at their first occurrence, the
  meaning of each in the note; ποταμός `נָהָר`, the Rivers as a name `נהרות` (337, 348; lower case 367: the noun);
  Νεῖλος `נִילוּס` (never `יְאֹר`, noted at 338 with Gen 41:1 and its LXX ποταμός); Πειθώ translated `שִׁכְנוּעַ`
  (table); Μῆτις, Τύχη, Εὐρώπη, Ἀσίη kept as names (Oceanids). Ὠκεανίνη pl. `בְּנוֹת־אוֹקֵאָנוֹס` (364, with a
  `[היתר שם]`: the tool wants the singular string). New epithets: δινήεις `רַב־הַמְּעַרְבֹּלוֹת`, καλλιρέεθρος
  `יְפֵה־הַזֶּרֶם`, ἀργυροδίνης `כְּסוּף־הַמְּעַרְבֹּלוֹת`, ἐυρρείτης `מְלֵא־הַזֶּרֶם` (the `טוב` gate is for ἐύς
  alone), θεοειδής `דְּמוּיַת־הָאֵלָה`, βοῶπις `בַּעֲלַת־עֵינֵי־הַפָּרָה`, τανύσφυρος `דַּקַּת־הַקַּרְסֻלַּיִם`,
  πολυσπερής `פְּזוּרוֹת לְמֵרָחוֹק`; κουρίζω `טִפֵּחַ` (… `לִנְעוּרִים`); ἐφέπω here "haunt" `פָּקַד` (a sense split
  from 220 `רודפות`); ἀγλαός `מַזְהִיר`; ἀργαλέος `קָשֶׁה`; ἐνέπω `סִפֵּר` (as part 1).
- **Sun, Moon, Dawn** as translated names (`שֶׁמֶשׁ`, `יָרֵחַ` with feminine agreement, `שַׁחַר`), Ἑωσφόρος
  `מֵבִיא־הַשַּׁחַר` (T), Ἠριγένεια `בַּת־הַבֹּקֶר`; ἀστήρ and ἄστρον both `כּוֹכָב` (a recorded synonym pair);
  ἐστεφάνωται `עֲטוּרִים`; ἀργεστής `הַמַּבְהִיר`; αἰψηροκέλευθος `מְהִיר־הַדֶּרֶךְ`; the imperfect τίκτεν (381) `הייתה
  יולדת` (Dawn bears the morning star every morning).
- **Styx** (383–403): Ζῆλος / Νίκη / Κράτος / Βίη `קִנְאָה` / `נִצָּחוֹן` / `עֹז` / `כֹּחַ` (the table's translated names;
  the Greek gender of the epithet kept: `נִצָּחוֹן נְאוַת־הַקַּרְסֻלַּיִם`); Κράτος written plene `עוז` in the line (a
  `[היתר שם]`: the table's string is the defective `עז`). **γέρας `מַשְׂאֵת`** (pl. `מַשְׂאוֹת`, always vocalized: unvocalized
  it reads `מַשָּׂאוֹת` "loads", used in other corpora) – the "portion of honour" (Gen 43:34), kept apart from τιμή
  `כָּבוֹד`; ἄτιμος / ἀγέραστος `חֲסַר־כָּבוֹד` / `חֲסַר־מַשְׂאֵת`; ὅρκος `שְׁבוּעָה` (REQUIRED); ἄφθιτος `נִצְחִי` (F19's
  `נצח`); βουλεύω `יָעַץ`; ἀστεροπητής `שׁוֹלֵחַ־הַבְּרָקִים`; ἡγεμονεύω `הוֹלִיךְ`; κρατέω `מָשַׁל` (ἀνάσσω `מָלַךְ`);
  ὑφίστημι `הִתְחַיֵּב`; ἐκτελέω `הִשְׁלִים`; μέγαρον `אוּלָם` (vocalized: Modern "hall"); δόμος `מָעוֹן`;
  καλλίσφυρος `נְאוַת־הַקַּרְסֻלַּיִם` (εὔσφυρος has `יְפַת־הַקַּרְסֻלַּיִם` from part 2: three ankle-epithets, three
  Hebrew phrases).
- **Hekate** (404–452): εὐνή `יָצוּעַ` (λέχος stays `מִשְׁכָּב`); πολυήρατος `עָרֵב מְאֹד`; κυανόπεπλος
  `כְּחֻלַּת־הַגְּלִימָה`; ἀγανός `מָתוּן`; εὐώνυμος `נְאוַת־הַשֵּׁם`; πόρω `הֶעֱנִיק` (and πέπρωται "it is fated" `נִגְזַר`:
  a recorded sense split – the fate as "what was granted"); μείρομαι `נָחַל`; τίω `כִּבֵּד` (with τιμάω); ἔρδειν ἱερά
  `לְהַקְרִיב קָרְבָּנוֹת`, κατὰ νόμον `כַּחֹק`; ἱλάσκομαι `רִצָּה` (as part 1); κικλήσκω `קָרָא אֶל`; εὐχή / εὔχομαι
  `תְּפִלָּה` / `הִתְפַּלֵּל` (the LXX's εὐχή is mostly `נֶדֶר`: noted at 419); πρόφρων `בְּחֵפֶץ לֵב`; ὄλβος `שֶׁפַע`;
  **ὀπάζω `זִכָּה בְּ־`** (420, 433, 438, 442); δύναμις `יְכֹלֶת`; αἶσα `מָנָה`; βιάομαι `עָשָׂה בְּכֹחַ` (the root of βία);
  ἀπαυράω `גָּזַל`; δασμός `חֲלֻקָּה`; μονογενής `יְחִידָה`; παραγίγνομαι `עָמַד לְצַד`; ὀνίνημι `הוֹעִיל`; ἀγορή
  `אֲסֵפָה`, λαός `עָם`, ἀγών `קָהָל` (as part 1); φθισήνωρ `מַשְׁמִידַת־הָאֲנָשִׁים`; θωρήσσομαι `הִתְחַמֵּשׁ`; ἆθλον
  `פְּרָס`; ἱππεύς `פָּרָשׁ`; γλαυκός `בָּהִיר`; δυσπέμφελος `קְשֵׁה־הַסְּעָרוֹת`; ἐρίκτυπος `רַב־הָרַעַם`; ἄγρη `צַיִד`;
  ἀφαιρέομαι `נָטַל`; ληίς `מִקְנֶה`; ἀέξω (trans.) `הִרְבָּה`; the herd words ἀγέλη `עֵדֶר`, αἰπόλιον `צֹאן`, ποίμνη
  `מַרְעִית`; εἰροπόκος `עֲטוּי־הַצֶּמֶר`; βριάω `הִגְבִּיר`; **κουροτρόφος `מְגַדֶּלֶת־הַנְּעָרִים`** (τρέφω `גִּדֵּל`);
  πολυδερκής `הָרוֹאֶה־לְמֵרָחוֹק`.
- **Kronos and the stone** (453–506): **καταπίνω `בָּלַע`** (the LXX's κατέπιεν for `וַיִּבְלַע`, Exod 7:12, 15:12; Isa
  25:8), ἐξεμέω `הֵקִיא`; **νηδύς `מֵעַיִם`** for both the mother's womb (460) and Kronos' belly (487) – the Hebrew word
  that is both (Gen 25:23, Jonah 2:1); γόνυ `בֶּרֶךְ`; φαίδιμος `הָדוּר`; χρυσοπέδιλος
  `נְעוּלַת־סַנְדְּלֵי־הַזָּהָב`; ἴφθιμος `אַדִּיר`; πελεμίζομαι `רָעַד`; φρονέω `חָשַׁב`; ἀγαυός `אָצִיל`;
  βασιληίς τιμή `כְּבוֹד הַמַּלְכוּת`; πεύθομαι `לָמַד` (κλύω `הִקְשִׁיב`, πείθομαι `שָׁמַע בְּקוֹל`); σκοπιά `מִצְפֶּה`;
  ἀλαός `עִוֵּר`; δοκεύω `אָרַב` (the root שמר avoided: φυλάσσω's); ἄλαστος `שֶׁאֵין לְשָׁכְחוֹ`; λιτανεύω `הִפְצִיר`;
  συμφράζομαι `הָגָה עִם` + μῆτις `תְּבוּנָה`; λανθάνω "unnoticed" `בַּסֵּתֶר` (a sense split from `שָׁכַח`, 547);
  **Κρήτη `כְּרֵתִים`** (table), Λύκτος `לִיקְטוֹס`, Αἰγαῖον ὄρος `הַר אַיְגַאיוֹן`, Πυθώ `פִּיתוֹ`, Παρνασός `פַּרְנָסוֹס`;
  δῆμος `מָחוֹז`; πίων `שָׁמֵן`; ἀτιτάλλω `אָמַן` (Esth 2:7); θοός `חוֹלֵף` (ὠκύς keeps `מָהִיר`); ἄντρον `מְעָרָה` (as
  σπέος: a recorded pair); ἠλίβατος `נִשְׂגָּב`; πυκάζω `מְכֻסֶּה סְבַךְ`, ὑλήεις `מְיֹעָר`; **σπαργανόω `חִתֵּל`**
  (Ezek 16:4); λίθος `אֶבֶן`; ἐγγυαλίζω `מָסַר לְיָדָיו`; σχέτλιος `אֻמְלָל`; νοέω `הֵבִין`; **ἀντί `תַּחַת`** (489, 570,
  585, 602: the LXX's ἀντί for `תַּחַת`, Gen 22:13, 4:25); ἀνίκητος `בִּלְתִּי מְנֻצָּח`; ἐξελαύνω `גֵּרֵשׁ`; μένος (of a
  body) `עָצְמָה` (324 `זַעַף` of fire, and 563: a recorded sense split); γυῖον `אֵבֶר` (as μέλος: a recorded pair);
  δολόω `הֶעֱרִים` / `מוּעֲרָם` (a `[היתר שער]`, see Problems); ἐννεσίη `הַדְרָכָה`; πολυφραδής
  `רַב־הַמַּחְשָׁבָה`; γόνος `וָלָד`; στηρίζω `קָבַע` (not `הִצִּיב`: `מַצֵּבָה` would be manufactured); ἠγάθεος `קָדוֹשׁ`
  (a `[היתר שער]`); γύαλον `בִּקְעָה`; **σῆμα `אוֹת`** (the LXX's σημεῖον = `אוֹת`); θαῦμα `פֶּלֶא` / `פְּלִיאָה`;
  πατροκασίγνητος `אֲחִי אָבִיו`; **δεσμός `כֶּבֶל`, δέω `אָסַר`, λύω `הִתִּיר`**; ἀεσιφροσύνη `סִכְלוּת`;
  ἀπομιμνήσκομαι `זָכַר`; χάρις "gratitude" `חֵן` (the LXX's χάρις for `חֵן`, Gen 6:8); εὐεργεσία `חֶסֶד`; κεύθω
  `הֶחְבִּיא` (κευθμών `מַחֲבוֹא`); πίσυνος `בּוֹטֵחַ`.
- **The Iapetids** (507–534): Ἰαπετός `יָאפֶּטוֹס`, never `יֶפֶת` (Gen 10:2 in the note); ὁμὸν λέχος `מִשְׁכָּב מְשֻׁתָּף`;
  ὑπερκύδας `רַב־הַתִּפְאֶרֶת`; ποικίλος `רַב־הַגְּוָנִים`; αἰολόμητις `מְנֻמַּר־הַתְּבוּנָה`; ἁμαρτίνοος
  `חוֹטֵא־הַשֵּׂכֶל` (the root of ἁμαρτάνω `חָטָא`); ἀλφηστής `אוֹכֵל־הַקֶּמַח` (`לֶחֶם` is ἄρτος's); **πλαστός
  `יְצוּרָה`** (licensed by the `יצר` gate); παρθένος `בְּתוּלָה`; εὐρύοπα `רְחַב־הַמַּבָּט`; ψολόεις `מְעַשֵּׁן`;
  ἠνορέη `גַּבְרוּת`, ὑπέροπλος `יָהִיר`; ἀνάγκη `הֶכְרֵחַ`; ἵστημι perf. `עוֹמֵד`; ἀλυκτοπέδαι `כְּבָלִים שֶׁאֵין מֵהֶם
  מָנוֹס`; ποικιλόβουλος `מְגֻוַּן־הָעֵצוֹת`; κίων `עַמּוּד`; ἐλαύνω "drive in" `תָּקַע` (a sense split from 291 `נהג`);
  **ἀετός `נֶשֶׁר`** (the LXX's ἀετός = `נֶשֶׁר`, Exod 19:4); τανύπτερος / τανυσίπτερος `פְּרוּשׂ־כְּנָפַיִם`; ἧπαρ `כָּבֵד`;
  ἐσθίω / ἔδω `אָכַל`; ὄρνις `עוֹף` (as οἰωνός: a recorded pair); ὄρνυμι (trans.) `הֵעִיר`; ἄλκιμος `בַּעַל־הַחַיִל`
  (`גִּבּוֹר` is gated); νόσος `מַחֲלָה`; ἀπαλέξω `הָדַף`; ἀέκητι `בְּעַל כָּרְחוֹ`; ὑψιμέδων `הַשַּׁלִּיט מִמָּרוֹם`;
  Θηβαγενής `יְלִיד תֵּבַּאי`; ἅζομαι `יָרֵא`; χώομαι `חָרָה` (κοτέω keeps `כָּעַס`); παύομαι `חָדַל`; ἐρίζω `הִתְגָּרָה`;
  ὑπερμενής `עֲצוּם־הַכֹּחַ` (ἐρισθενής keeps `רַב־הָעָצְמָה`).
- **Mekone** (535–569): κρίνομαι `נִפְרְדוּ` (the alternative "came to a settlement" in the note); Μηκώνη `מֵקוֹנָה`;
  **βοῦς sg. `שׁוֹר`** (pl. stays `בָּקָר`: a number split); **δημός `חֵלֶב`** (REQUIRED by the renderings), **ἄλειφαρ
  `שֻׁמָּן`**, **ὀστέα `עֲצָמוֹת`**, σάρξ `בָּשָׂר`, ἔγκατα `קְרָבַיִם`, ῥινόν `עוֹר` (as χρώς: a recorded pair), γαστήρ
  `בֶּטֶן`, βόειος `שֶׁל שׁוֹר`; καλύπτω `כִּסָּה` (the LXX's κατακαλύπτω for `הַמְכַסֶּה`, Exod 29:22); εὐθετίζω `עָרַךְ`
  (Lev 1:8); ἀργής `צַח`; προτίθημι `הִצִּיב לִפְנֵי`; ἐξαπαφίσκω / ἐξαπατάω `רִמָּה` (the root of Ἀπάτη `מִרְמָה`);
  πέπων `יַקִּירִי`; ἑτεροζήλως `בְּמַשּׂוֹא פָּנִים`; κερτομέω `לָעַג`; ἐπιμειδάω `חִיֵּךְ`, ἦκα `קַלּוֹת`; κύδιστος
  `הַמְפֹאָר`; ἀειγενέτης `הַקַּיָּמִים לָעַד`; αἱρέομαι "choose" `בָּחַר` (a voice split from `תָּפַס`); ἄνωγα `צִוָּה`;
  δολοφρονέων `לְבָבוֹ מָלֵא עָרְמָה`; γιγνώσκω `הִכִּיר`; ἀγνοέω `טָעָה`; ὄσσομαι `צָפָה`; ἀναιρέομαι `הֵרִים`; καίω
  `שָׂרַף`; **βωμός `מִזְבֵּחַ`** (REQUIRED), θυήεις `רֵיחָנִי` (`נִיחוֹחַ` never); ὀχθέω `בְּכַעַס`; πρόσφημι / προσεῖπον
  `אָמַר אֶל`; μιμνήσκω `זָכַר`; **πῦρ `אֵשׁ`**; Μελίαι (563) `עֲצֵי הַמֵּילָה`; ἀκάματος `בְּלִי לֵאוּת` / `שֶׁאֵין לָהּ
  לֵאוּת`; **κλέπτω `גָּנַב`**; τηλέσκοπος `הַנִּרְאֶה לְמֵרָחוֹק`; αὐγή `נֹגַהּ`; **νάρθηξ `גִּבְעוֹל כַּלְכָּל`** (Ferula;
  not `שׁוּמָר`); κοῖλος `נָבוּב`; δάκνω `נָשַׁךְ`; ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם`; χολόω `הִזְעִים`.
- **The first woman** (570–616): κακόν `רָעָה` (n.); τεύχω `הִתְקִין`; **συμπλάσσω `יָצַר` + γαῖα (material)
  `אֲדָמָה`** (REQUIRED; the table's sense split); περικλυτός `מְהֻלָּל מְאֹד`; Ἀμφιγυήεις `צוֹלֵעַ־הָרַגְלַיִם`
  (table); ἴκελος `דְּמוּי` (neuter: "a likeness of a maiden"); αἰδοῖος `נַעֲרָץ`; ζώννυμι `חָגַר`, κοσμέω `קִשֵּׁט`,
  κόσμος `קִשּׁוּט` (the LXX's word for the bride's adornment, Isa 61:10); ἀργύφεος `לְבַן־כֶּסֶף`; ἐσθής `בֶּגֶד`;
  καλύπτρα `צָעִיף` (Gen 24:65); **δαιδάλεος / δαίδαλα `מַעֲשֵׂה־אָמָּן`** (Song 7:2; not the Tabernacle's `מַעֲשֵׂה
  חֹשֵׁב`); κατέχω `הוֹרִיד`; στέφανος `זֵר`, **στεφάνη `עֲטָרָה`**; νεοθηλής `מְלַבְלֵב`; ἱμερτός `מְעוֹרֵר־כִּסּוּף` (as
  ἱμερόεις: a recorded pair); ἀσκέω `לִטֵּשׁ`; παλάμη `כַּף יָד`; χαρίζομαι `נָשָׂא חֵן`; κνώδαλον `חַיָּה`; ἤπειρος
  `יַבָּשָׁה`; ἀπολάμπω `קָרַן`; θαυμάσιος `מֻפְלָא`; ζῷον `בַּעַל חַיִּים`; φωνήεις `בַּעַל קוֹל`; **καλὸν κακόν `הָרָעָה
  הַיָּפָה`**; ἐξάγω `הוֹצִיא`; ὀβριμοπάτρη `בַּת־הָאָב־הַכַּבִּיר`; αἰπύς `תָּלוּל`; **θῆλυς `נְקֵבָה`** (the LXX's θῆλυ for
  `נְקֵבָה`, Gen 1:27); φῦλα γυναικῶν `שִׁבְטֵי הַנָּשִׁים`; πενίη `עֹנִי`; κόρος `שֹׂבַע`; σύμφορος `חָבֵר`; μέλισσα
  `דְּבוֹרָה`; **κηφήν `רַחְפָן`**; σμῆνος / σίμβλος `כַּוֶּרֶת` (a recorded pair); κατηρεφής `מְקֹרֶה`, ἐπηρεφής `מְסֻכָּךְ`;
  βόσκω `הֶאֱכִיל`; ξυνήων `שֻׁתָּף`; καταδύω `שָׁקַע`; ἠμάτιος `בַּיּוֹם`; σπεύδω `מִהֵר`; κηρίον `חַלַּת־דְּבַשׁ`;
  ἀλλότριος `שֶׁל זָרִים`; **κάματος `יְגִיעַ`** (πόνος keeps `עָמָל`); ἀμάω mid. `קָצַר` (licensed, Gen 8:22's word);
  **γάμος `נִשּׂוּאִים`, γαμέω `נָשָׂא אִשָּׁה`**; φεύγω `בָּרַח`; μέρμερος `מַדְאִיג`; γῆρας `זִקְנָה`; χῆτος `חֹסֶר`;
  **γηροκόμος `מְכַלְכֵּל שֵׂיבָה`** (Ruth 4:15); ἐπιδευής `חָסֵר`; ζώω `חַי`; ἀποφθίνω `דָּעַךְ`; κτῆσις `קִנְיָן`;
  **χηρωσταί `יוֹרְשִׁים רְחוֹקִים`**; πραπίδες `בִּינָה`; ἀραρίσκω perf. `הוֹלֵם`; ἀπʼ αἰῶνος `כָּל יְמֵי חַיָּיו`
  (`עוֹלָם` not used: renderings §6); ἀντιφερίζω `הִתְמוֹדֵד`; ἐμμενές `בְּלִי הֶרֶף`; τέτμον `נִקְרָה`; ἀταρτηρός
  `מַזִּיק`; **γενέθλη `תּוֹלָדָה`**; ἀλίαστος `שֶׁאֵין לוֹ הֲפוּגָה`; ἀνία `דַּאֲבוֹן`; κραδίη `קֶרֶב`; ἀνήκεστος `שֶׁאֵין לוֹ
  מַרְפֵּא`; παρέρχομαι `עָקַף`; ἀκάκητα `הַנָּדִיב`; ὑπεξαλύσκω `נִמְלַט`; βαρύς `כָּבֵד`; πολύιδρις `רַב־הַדַּעַת`,
  ἰδμοσύνη `יְדִיעָה` (377; the οἶδα root); ἐρύκω `רִסֵּן`.
- **Rejected**: `יְאֹר`, `יֶפֶת`, `נִיחוֹחַ`, `מִין`, `לֶחֶם` (ἀλφηστής), `גִּבּוֹר` (ἄλκιμος), `הִצִּיב` / `מַצֵּבָה`
  (στηρίζω), `מְלֶאכֶת מַחְשֶׁבֶת` (δαιδάλεος), `שׁוּמָר` (νάρθηξ), `עוֹלָם` (609), `טוֹב` for καλός (585), `בּוּשָׁה` for
  αἰδοῖος (572: the line keeps the precedent `נַעֲרָץ`), `עֶצֶב` (gated).

### Open decisions for the user
- **καλὸν κακόν (585) = `הָרָעָה הַיָּפָה`**: the oxymoron with καλόν as attribute of the noun κακόν. The renderings
  forbid `טוֹב` for καλός; the LXX's καλόν for `טוֹב` (Gen 2:18, 3:6) is in the note.
- **535 ἐκρίνοντο = `נִפְרְדוּ`** (separation) rather than "came to a settlement" (West): both readings in the note.
- **Μελίῃσι (563) = `לַעֲצֵי הַמֵּילָה`** (the ash trees) rather than "to the ash-born men" (WD 145).
- **The misogyny of 590–612** is translated as it stands; the notes place it in the oikos economy (the house as a
  field, the wife as an extra mouth, the heir and the old-age care) and say plainly where it goes beyond every biblical
  text (Gen 3:16, Prov 21:9, Qoh 7:26 complain about women or a bad wife; none makes women a separate "race" of evil).

### Progress log
- 2026-10-24: drafted 337–616 in eight sections, each saved, filled and verified at once; unvocalized and plene from
  the first line (checked on the first saved section: names at their first occurrence; `אֵל`, `אֵלִים`, `אֵלָה`,
  `אֵלוֹת`, `אֶל` vocalized wherever θεός stands in the line; `אֵלֶּה` (362, 422, 532, 538, 549), `הָעֲרֵבָה`, `אֵבֶל`,
  `מַשְׂאֵת` / `מַשְׂאוֹת`, `בָּאוּלָמוֹת`, `בְּיִרְאָתוֹ`, `מוּעֲרָם` vocalized as ambiguous).
- Verify findings fixed while drafting: the first occurrences of `בַּת־אוֹקֵאָנוֹס` (389), `מַרְעִישׁ־הָאֲדָמָה` (441),
  `בְּנֵי־שָׁמַיִם` (461), `בֶּן־שָׁמַיִם` (486), `בֶּן־יָאפֶּטוֹס` (528) vocalized; `האלים` at 586 vocalized (the trap
  allows a prefix); three `[היתר שם]` (364 the plural Oceanids, 385 plene `עוז`, 502 the plural `בני־שמים`) and two
  `[היתר שער]` (494 `מוערם`, 499 `הקדושה`).
- Review (fidelity and consistency, one pass over the 280 `>` lines): 489–490 (a doubled verb removed: λείπεθʼ stays in
  490), 526–527 (a doubled `הרג` removed), 534 (ὑπερμενής moved off ἐρισθενής's `רַב־הָעָצְמָה`), 567 (the unexpressed
  subject marked `(הדבר)`), 604 (the general relative: `ולא ירצה`); formula groups in the פירוק split into words, so
  that `lexmap` reads each lemma; `lexmap` checked for the range (the collisions left are inflection, the recorded pairs
  above, and the homographs δῆμος / δημός and Πειθώ / πείθω, which the map merges).
- 21 Bible references written `` `…` – Book ch:v `` (unchecked by the tool) rewritten as `` `…` (Book ch:v) ``; ketiv /
  qere avoided by quoting around them (Prov 31:27, Ps 105:18, Jer 51:34). `check_bible_quotes.py`: 0 problems (one
  quotation, Prov 31:27, first quoted across its ketiv, caught and fixed). `verify TH`: 0 problems (426 later lines noted
  as not yet drafted). `selftest`: 0 failures.

### The text on its own terms
- **A world full of gods of water** (337–370): every river a son of Ocean, every spring a daughter – 3,000 of each; the
  local rivers rear the boys (347: hair vowed to the river), and only the people who live by a river know its name
  (369–370): religion is local.
- **The catalogue prepares the story** (358): Metis and Eurynome stand among the springs, to become Zeus' wives
  (886, 907); Styx (361) and Klymene (351) open the next episodes.
- **Dawn bears the morning star every morning** (381, imperfect): a genealogy that is also a daily event.
- **Zeus' kingdom as a charter** (389–403): privileges kept from the old regime, new ones for the ally, the first ally
  made the gods' oath, and her children – Rivalry, Victory, Power, Force – seated by the throne for ever.
- **Hekate, a goddess in every sacrifice** (411–452): honoured "above all", a share in earth, sea and sky, invoked in
  every offering; she helps kings judging, the assembly, warriors, athletes, horsemen, fishermen, herdsmen –
  "whomever she wills", giving and taking back (443, 447): the free favour of a Greek god, not a covenant. The nurse of
  every child born after her (450–452). Nothing yet of the later witch-goddess.
- **The father who swallows** (453–506): the womb and the belly are one word (νηδύς); the youngest is hidden in a Cretan
  cave; a swaddled stone; the stone vomited first and set up at Delphi, where Pausanias saw it anointed – a myth that
  explains a cult object.
- **Power rests on gratitude** (501–506): the freed Cyclopes give the thunderbolt; Zeus' rule is gift and return.
- **The Iapetids, the human condition in four brothers** (507–534): a sky-bearer, a hubristic brother struck down,
  "Forethought" bound with his liver eaten daily, "Afterthought" who receives the woman; and Zeus who lets Heracles end
  the punishment for his son's glory.
- **Mekone, the founding of sacrifice** (535–557): the meat to men and the smoke to the gods – which means that men eat
  and die and the gods do not; the myth explains why the gods' portion is the bones, by a trick that Zeus sees and
  chooses to suffer.
- **Fire and the woman** (562–589): fire withheld, stolen in a fennel stalk, and paid for by "a beautiful evil" made of
  earth, dressed as a bride – a δόλος answering Prometheus' δόλος.
- **The oikos economy** (590–612): the drones and the bees (with the sexes reversed), the man without a wife whose
  property goes to distant kin, the man with a good wife whose life is still half evil, the man with a bad wife whose
  pain has no cure: the peasant's calculation of food, heirs and old-age care, told without apology.

### Key parallels
- **Th. 381 ↔ Isa 14:12**: `הֵילֵל בֶּן שָׁחַר` is the LXX's ὁ ἑωσφόρος – Hesiod's Eosphoros, son of Dawn: the same
  genealogy.
- **Th. 459, 497 ↔ Exod 7:12, Isa 25:8 (LXX καταπίνω = `בָּלַע`); Jer 51:34, 44; Job 20:15**: swallowing and vomiting up
  as a figure of judgement; the Hurrian-Hittite Kumarbi as the real antecedent.
- **Th. 460 ↔ Gen 30:3** (LXX ἐπὶ τῶν γονάτων): the newborn "upon the knees".
- **Th. 489 ↔ Gen 22:13** (LXX ἀντὶ Ισαακ): a substitute in place of the son; **Th. 570, 602 ↔ Gen 4:25** (LXX ἕτερον …
  ἀντί).
- **Th. 498–500 ↔ Gen 28:18, 22; 35:14; Josh 4:6–7**: a stone set up as a sign for later generations, anointed with oil
  at Delphi as Jacob's pillar; βαίτυλος probably from `בֵּית אֵל`.
- **Th. 538–557 ↔ Gen 4:4 (LXX στεάτων), Lev 3:3, 3:16, 7:23, Exod 29:22 (LXX κατακαλύπτον), 1 Sam 2:15, Ps 50:13**: the
  same division of the animal (fat to the god, meat to men) with the opposite valuation; βωμός, the LXX's deliberate
  avoidance (Gen 8:20).
- **Th. 571 ↔ Gen 2:7 (LXX ἔπλασεν … ἀπὸ τῆς γῆς) and 2:22**: the first woman moulded from earth – where Genesis moulds
  the man and builds the woman from him.
- **Th. 585 ↔ Gen 3:6, 2:18** (the LXX's καλόν for `טוֹב`): the woman is the καλὸν κακόν; Prov 11:22.
- **Th. 590 ↔ Gen 1:27** (LXX θῆλυ = `נְקֵבָה`): the "race of women" against male and female created together.
- **Th. 599, 605–607 ↔ Ps 128:2–3, Prov 5:10, Ruth 4:15, Gen 15:2–3, Qoh 4:8**: the household wisdom of eating one's own
  toil, the old-age carer, the heirless estate.

### Lines shared with other texts
- First copies fixed here: **519 (= 747)**; **559 (= WD 54)**, **572 (= WD 71)**, **573 (= WD 72)** – drafted to stand
  alone in the Works and Days.
- Copied: **421 = 154** (with F7). Near-repeats: 371 ≈ 19; 361 ≈ 79; 362 ≈ 263; 540 ≈ 555; 545 ≈ 561; 558 ≈ WD 53; 566
  ≈ 569; 571 ≈ WD 70; 402 ≈ 600 (`וכך, כמו כן`); 407 ≈ 204, 296.
- Formulas used: F1 (542), F2 (457, 468), F6 (558), F7 (421, 463), F8 (463, 470), F14 (375), F19 (545, 550, 561), F20
  (559), F22 (473, 495; also 546 for Prometheus), F23 (531, in the accusative), F26 (412, 423, 450, 534, 572), F27 (528,
  543, 559, 614), F28 (573). None revised. Note: the coordinator's list gives 413 an F7, but 413 is γαίης τε καὶ
  ἀτρυγέτοιο θαλάσσης (earth and sea), so the F7 regex does not fire there; it has `בארץ ובים העקר`.

### Proposals for the shared renderings
- **Names (new, by §2.3)**: rivers – Ἀλφειός `אַלְפֵיאוֹס`, Ἠριδανός `אֵרִידָנוֹס`, Στρυμών `סְטְרִימוֹן`, Μαίανδρος
  `מַיאַנְדְּרוֹס`, Ἴστρος `אִיסְטְרוֹס`, Φᾶσις `פָסִיס`, Ῥῆσος `רֵסוֹס`, Ἀχελῷος `אַכֶלוֹאוֹס`, Νέσσος `נֶסוֹס`, Ῥοδίος
  `רוֹדִיּוֹס`, Ἁλιάκμων `הַלִיאַקְמוֹן`, Ἑπτάπορος `הֶפְּטָפּוֹרוֹס`, Γρήνικος `גְּרֵנִיקוֹס`, Αἴσηπος `אַיְסֵפּוֹס`,
  Σιμόεις `סִימוֹאֵיס`, Πηνειός `פֵּנֵיאוֹס`, Ἕρμος `הֶרְמוֹס`, Κάικος `קַאִיקוֹס`, Σαγγάριος `סַנְגָּרִיּוֹס`, Παρθένιος
  `פַּרְתֶּנִיּוֹס`, Εὔηνος `אֶוּאֵנוֹס`, Ἄρδησκος `אַרְדֵּסְקוֹס`, Σκάμανδρος `סְקָמַנְדְּרוֹס` (Λάδων, Νεῖλος: table);
  Oceanids – Ἀδμήτη `אַדְמֵטָה`, Ἰάνθη `יָאנְתָה`, Πρυμνώ `פְּרִימְנוֹ`, Ἱππώ `הִיפּוֹ`, Ῥόδεια `רוֹדֵיאָה`, Ζευξώ `זֶאוּקְסוֹ`,
  Κλυτίη `קְלִיטִיָּה`, Ἰδυῖα `אִידִיָּה`, Πασιθόη `פָּסִיתוֹאָה`, Πληξαύρη `פְּלֵקְסַאוּרָה`, Γαλαξαύρη `גָּלַקְסַאוּרָה`,
  Μηλόβοσις `מֵלוֹבּוֹסִיס`, Φόη `פוֹאָה`, Πολυδώρη `פּוֹלִידוֹרָה`, Κερκηίς `קֶרְקֵאִיס`, Πλουτώ `פְּלוּטוֹ`, Ἰάνειρα
  `יָאנֵירָה`, Ἀκάστη `אַקַסְטָה`, Ξάνθη `קְסַנְתָה`, Πετραίη `פֶּטְרַאיָה`, Μενεσθώ `מֶנֶסְתוֹ`, Εὐρώπη `אֶוּרוֹפָּה`, Τελεστώ
  `טֶלֶסְטוֹ`, Χρυσηίς `כְרִיסֵאִיס`, Ἀσίη `אַסִיָּה`, Καλυψώ `קַלִּיפְּסוֹ`, Τύχη `טִיכָה`, Ἀμφιρώ `אַמְפִירוֹ`, Ὠκυρόη
  `אוֹקִירוֹאָה` (Πειθώ `שִׁכְנוּעַ` T, Ἠλέκτρη, Δωρίς, Οὐρανίη, Κλυμένη, Καλλιρόη, Διώνη, Περσηίς, Μῆτις, Εὐρυνόμη,
  Εὐδώρη, Στύξ: table or earlier); Ἀστραῖος `אַסְטְרַאיוֹס`, Πάλλας (Titan) `פַּלַּס` (table, = Athena's Παλλάς), Ἀστερίη
  `אַסְטֶרִיָּה`, Λύκτος `לִיקְטוֹס`, Αἰγαῖον (ὄρος) `אַיְגַאיוֹן`, Πυθώ `פִּיתוֹ`, Παρνασός `פַּרְנָסוֹס`, Μηκώνη `מֵקוֹנָה`,
  Θηβαγενής `יְלִיד תֵּבַּאי`.
- **Translated name**: Ἠριγένεια `בַּת־הַבֹּקֶר` (Dawn's epithet, 381). **Table forms to fix in the tool**: Κράτος's
  string `עֹז` (defective) should accept the plene `עוז`; Ὠκεανίνη pl. `בְּנוֹת־אוֹקֵאָנוֹס` and Οὐρανίδης pl.
  `בְּנֵי־שָׁמַיִם` should pass (the check wants the singular string); Ἀμφιγυήεις is lemmatized ἀμφιγύεις in the treebank,
  so its row never fires (add the variant).
- **Formulas**: none revised. F22's Hebrew also serves Prometheus' ἀγκυλομήτης (546: `פרומתאוס עקום־התחבולות`) – suggest
  a general F `αγκυλομητ` → `עקום־התחבולות`. F23 occurs in the accusative at 531 (ἐπὶ χθόνα πουλυβότειραν): its regex
  could cover it. F6 (`מקבץ־העננים`) first appears in the Theogony at 558 (the table lists WD only).
- **Gates**: the `ערם` string is gated for γυμνός only, but the verb `הֶעֱרִים` / `מוּעֲרָם` belongs to δόλος (494
  δολόω): add `δολ` to the licence of `ערם` (now a `[היתר שער]`). The `קדש` gate licenses ἱερός, ζάθεος, ἁγνός, but not
  ἠγάθεος (499, "most holy", the same formation as ζάθεος): add `ηγαθε` (now a `[היתר שער]`).
- **Recurring words** (first line in brackets; all in Decisions above): γέρας `מַשְׂאֵת` (393), ὀπάζω `זִכָּה` (420),
  πόρω `הֶעֱנִיק` / πέπρωται `נִגְזַר` (412, 464), μείρομαι `נָחַל` (414), εὐχή / εὔχομαι `תְּפִלָּה` / `הִתְפַּלֵּל` (419,
  441), καταπίνω `בָּלַע` (459), νηδύς `מֵעַיִם` (460), ἀντί `תַּחַת` (489), σῆμα `אוֹת` (500), δεσμός `כֶּבֶל` (501), δέω
  `אָסַר` (502), λύω `הִתִּיר` (501), ἀετός `נֶשֶׁר` (523), ἄλκιμος `בַּעַל־הַחַיִל` (526), χώομαι `חָרָה` (533), ἐρίζω
  `הִתְגָּרָה` (534), βοῦς sg. `שׁוֹר` (536), ὀστέα `עֲצָמוֹת` (540), ἄλειφαρ `שֻׁמָּן` (553), καίω `שָׂרַף` (557), πῦρ
  `אֵשׁ` (563), κλέπτω `גָּנַב` (566), τεύχω `הִתְקִין` (570), στεφάνη `עֲטָרָה` (578), θαῦμα `פֶּלֶא` (500), δαιδάλεος
  `מַעֲשֵׂה־אָמָּן` (575), θῆλυς `נְקֵבָה` (590), κάματος `יְגִיעַ` (599), γάμος `נִשּׂוּאִים` (603), γῆρας `זִקְנָה` (604),
  ἀνάγκη `הֶכְרֵחַ` (517), ἀργαλέος `קָשֶׁה` (369), ἀγλαός `מַזְהִיר` (366), φαίδιμος `הָדוּר` (453), καλλίσφυρος
  `נְאוַת־הַקַּרְסֻלַּיִם` (384), κουροτρόφος `מְגַדֶּלֶת־הַנְּעָרִים` (450), ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם` (568), ἐρίκτυπος
  `רַב־הָרַעַם` (441).
- **Recorded splits and pairs** (for `lexmap`): ἐφέπω `רָדַף` / `פָּקַד` (220 / 366); μένος `זַעַף` / `עָצְמָה` (324, 563 /
  492); ἐλαύνω `נָהַג` / `תָּקַע` (291 / 522); αἱρέω `תָּפַס` / mid. `בָּחַר` (167 / 549); λανθάνω `שָׁכַח` / `בַּסֵּתֶר`
  (547 / 471); φαίνω `הֵאִיר` / mid. `נִרְאָה` (372 / 443); πόρω `הֶעֱנִיק` / `נִגְזַר`; βοῦς `בָּקָר` / `שׁוֹר` (number);
  pairs sharing a Hebrew word (never in one line): ἀστήρ / ἄστρον `כּוֹכָב`, ἄντρον / σπέος `מְעָרָה`, γυῖον / μέλος
  `אֵבֶר`, ὄρνις / οἰωνός `עוֹף`, ῥινόν / χρώς `עוֹר`, σμῆνος / σίμβλος `כַּוֶּרֶת`, ἱμερτός / ἱμερόεις `מְעוֹרֵר־כִּסּוּף`,
  ῥεῖα / ῥᾳδίως `בְּקַלּוּת`, ἐσθίω / ἔδω `אָכַל`.

### For the Works and Days (WD 42–105: the Prometheus and Pandora vocabulary fixed here)
- **The three shared lines** (copy character for character): WD 54 = TH 559 `בן־יאפטוס, היודע תחבולות יותר מכולם,`;
  WD 71 = TH 572 `דמוי בתולה נערצת, בעצות בן־קרונוס.`; WD 72 = TH 573 `וחגרה אותה וקישטה הָאֵלָה, אַתֵנָה
  בהירת־העיניים,`. Near: WD 53 ≈ TH 558 (`אמר אליו זאוס מקבץ־העננים`; WD's χολωσάμενος `בזעמו` – χολόω `הִזְעִים`, TH
  568); WD 70 ≈ TH 571 (`מן האדמה יצר צולע־הרגליים המהולל` – WD has κλυτός `המהולל`, TH περικλυτός `המהולל מאוד`).
- **Prometheus and fire**: Προμηθεύς `פְּרוֹמֵתֵאוּס`, ἀγκυλομήτης `עֲקוֹם־הַתַּחְבּוּלוֹת` (TH 546, WD 48); Ἰαπετιονίδης
  `בֶּן־יָאפֶּטוֹס` (F27); ἐὺς πάις Ἰαπετοῖο `בנו הטוב של יאפטוס` (TH 565 = WD 50); ἐξαπατάω `רִמָּה` (WD 48); κλέπτω
  `גָּנַב` (WD 51, 55); πῦρ `אֵשׁ`; **ἐν κοΐλῳ νάρθηκι `בגבעול כַּלְכָּל נבוב`** (TH 567 = WD 52); κρύπτω `הִסְתִּיר` (WD
  47, 50); χόλος `זַעַם`, χολόω `הִזְעִים`, χώομαι `חָרָה`; μῆδος `תַּחְבּוּלָה` (F19, F20); δόλος `עָרְמָה`, δόλιος `עַרְמוּמִי`,
  τέχνη `אֻמָּנוּת`; ἀντὶ πυρός `תַּחַת הָאֵשׁ` (TH 570; WD 57); κακόν `רָעָה`; πῆμα `פֶּגַע` (WD 56, 82); ἀκάματος `בְּלִי
  לֵאוּת`.
- **The sacrifice** (for WD 136, 336–338): βωμός `מִזְבֵּחַ`; ἔρδειν ἱερά `לְהַקְרִיב קָרְבָּנוֹת`; κατὰ νόμον `כַּחֹק`; καίω
  `שָׂרַף`; ὀστέα `עֲצָמוֹת`; δημός `חֵלֶב`; ἄλειφαρ `שֻׁמָּן`; βοῦς sg. `שׁוֹר`, pl. `בָּקָר`; ἱλάσκομαι `רִצָּה`; θυήεις
  `רֵיחָנִי`; (κνίση `רֵיחַ־חֵלֶב`, renderings §5: not in my range).
- **The woman**: γυνή `אִשָּׁה`; παρθένος `בְּתוּלָה`; αἰδοῖος `נַעֲרָץ`; ἴκελος `דְּמוּי`; πλάσσω / συμπλάσσω `יָצַר`, πλαστός
  `יְצוּרָה`; γαῖα (material) `אֲדָמָה` (ἐκ γαίης `מִן הָאֲדָמָה`); Ἀμφιγυήεις `צוֹלֵעַ־הָרַגְלַיִם`; κλυτός `מְהֻלָּל`;
  ζώννυμι `חָגַר`; κοσμέω `קִשֵּׁט`, κόσμος `קִשּׁוּט` (WD 72, 76); γλαυκῶπις Ἀθήνη F28; Παλλὰς Ἀθήνη `פַּלַּס אַתֵנָה` (WD
  76); ἐσθής `בֶּגֶד`; καλύπτρα `צָעִיף`; στέφανος `זֵר`, στεφάνη `עֲטָרָה`, στέφω (WD 75: suggest `עִטֵּר`); ἄνθος `פֶּרַח`;
  χρύσεος `זָהוֹב`; χάρις `חֵן`, χαρίζομαι `נָשָׂא חֵן`; δαιδάλεος / δαίδαλα `מַעֲשֵׂה־אָמָּן` (WD 64 πολυδαίδαλος: suggest
  `רַב־מַעֲשֵׂי־אָמָּן`); θαῦμα `פֶּלֶא`; **καλὸν κακόν `הָרָעָה הַיָּפָה`**; καλός `יָפֶה`, ἀγαθόν `הַטּוֹב`; φωνή `קוֹל`,
  αὐδή `נִיב`; δῶρον `מַתָּנָה` (Pandora's name, WD 81–82: the note); **the race of women**: γένος γυναικῶν θηλυτεράων `גזע
  הנשים הנקבות` (θῆλυς `נְקֵבָה`), φῦλα γυναικῶν `שבטי הנשים`; δόλος αἰπὺς ἀμήχανος `ערמה תלולה, שאין כנגדה תושייה`
  (WD 83).
- **The drones and the household** (for WD 302–306, 373–375, 405–406, 695–705): μέλισσα `דְּבוֹרָה`; κηφήν `רַחְפָן`; σμῆνος
  / σίμβλος `כַּוֶּרֶת`; κηρίον `חַלַּת־דְּבַשׁ`; κάματος `יְגִיעַ` (πόνος `עָמָל`); ἀμάω `קָצַר`; γαστήρ `בֶּטֶן`; ἀεργός
  `בַּטְלָן` (renderings); ξυνήων `שֻׁתָּף`; πενίη `עֹנִי`; κόρος `שֹׂבַע`; βίοτος `מִחְיָה`; κτῆσις `קִנְיָן`; γάμος `נִשּׂוּאִים`,
  γαμέω `נָשָׂא אִשָּׁה`; ἄκοιτις `רַעְיָה`; κεδνός `הָגוּן`; γῆρας `זִקְנָה`; γηροκόμος `מְכַלְכֵּל שֵׂיבָה`; χηρωσταί
  `יוֹרְשִׁים רְחוֹקִים`; πραπίδες `בִּינָה`; ἀνία `דַּאֲבוֹן`; ἀνήκεστος `שֶׁאֵין לוֹ מַרְפֵּא`.

### Lessons for the guidelines
- **A `– Book ch:v` reference after a quotation is invisible to `check_bible_quotes.py`**: I wrote 21 of them in notes
  before noticing; a regex pass turned them into `(Book ch:v)` and the checker then caught one ketiv. Write the
  parenthesis from the first note.
- **Ambiguous unvocalized words multiply in a sacrifice and household vocabulary**: `משאות` (portions / loads), `אלה`
  (these / goddess) in lines without θεός, `מוערם`, `ביראתו`: vocalize at the draft.
- **The `lexmap` reads the first token after the dash as the lemma**: a formula group written `` `μέγας Κρόνος
  ἀγκυλομήτης` – הנוסחה F22 `` makes "הנוסחה" a lemma; split formulas into words in the פירוק. The map also merges
  homographs that differ only in accents (δῆμος / δημός; Πειθώ / πείθω).
- **A gate on a root catches its homograph roots too** (`ערם` "naked" and `ערם` "be crafty"; `קדש` for a third
  ζα-/ἀγα-θεος compound): license by the whole Greek family, not by one word.

## TH 617–885

### Scope
Part 4 (translator 2, Round 4 run 4, 2026-10-24): the Hundred-Handers freed, Zeus' speech and Kottos' answer
(617–663); the Titanomachy, Zeus' aristeia, the Titans bound in Tartarus (664–735); the sources and limits of the world,
the house of Night and Day, Sleep and Death (736–766); the house of Hades and his dog, Styx and the gods' oath, the
gates of Tartarus (767–819); Typhoeus, his birth, his hundred heads and voices (820–835); his battle with Zeus, the earth
melting like tin, his fall into Tartarus (836–868); the bad winds born of him, Zeus made king and the τιμαί distributed
(869–885). 269 entries in seven sections, in the base's order; `{חשודה}` only at 774 (= 768). The placeholder now reads
`<!-- טרם תורגם: 886–1022 -->`. The clean translation was not built in this part. Also changed in the earlier lines:
662 `בקטל המחריד` (αἰνός, kept apart from ἐπαινή `נוֹרָאָה`, 768), and three formula groups in the פירוק (630 / 668, 724,
790) split into words, so that `lexmap` reads each lemma (they had made "F29", "F13", "F9" into lemmas).

### Sources consulted
The line data (`data TH 617 885`); the fifth-day dossier's 820–828 (`../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-TH.rtl.md`),
its apparatus used as material (Isa 27:1 and its LXX δράκων / ὄφις, Ps 74:13, Job 41:11–12, the seven heads of
Litan), the Hebrew written afresh for the corpus; `grep --all` for the Ugaritic lines quoted (KTU 1.2 IV 32; 1.3 III
29–30, 38–42; 1.5 I 1–3, in `../../מיתוסים-אוגריתיים/1-מחזור-בעל/`), Enuma Elish IV 14, VI 99
(`../../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/`), Gudea Cyl. A xxv 28 (the seven-headed serpent). Every Hebrew verse printed
with `check_bible_quotes.py --show` before quoting (Gen 1:5, 1:27, 2:6–7, 3:6, 3:22, 3:24, 35:14; Exod 7:3, 14:2, 15:18;
Lev 19:12; Num 5:19, 5:22, 30:3; Judg 5:4; 1 Sam 10:24; 1 Kgs 19:11; Isa 14:9, 14:13, 14:15, 27:1, 38:10, 45:23, 51:9,
55:9; Ezek 22:20–22; Joel 2:8, 2:10; Amos 1:1, 9:5; Jonah 1:4, 2:7; Mic 1:4; Nah 1:3, 1:5; Hab 2:5, 3:11; Ps 18:8, 14–15;
19:3, 7; 29:3, 10; 46:4; 48:3; 74:13–14; 78:25; 93:1; 97:5; 103:11; 104:4, 20, 22, 32; 107:25; 144:6; Job 11:8, 26:11–13,
37:18, 38:6, 17, 19–20, 41:11–13, 23; Prov 17:3, 27:20; Qoh 1:7). The LXX printed before quoting: Gen 1:5, 1:27, 3:6,
3:24; Exod 7:3; Isa 14:15, 27:1, 38:10, 45:23, 55:9. The LXX of Job, Psalms, Ezekiel and Micah is not in the tool
(`lxx` knows no Job: τάρταρος at Job 40:20, 41:24 and 2 Pet 2:4 are described in the note to 721, not quoted).
Apollodorus 1.6.3 (Mount Kasios), Iliad 2.781–783 (Zeus lashing the earth round Typhoeus), 20.61–65 (Aidoneus afraid),
Pindar Pyth. 1.15–28 and [Aesch.] PV 351–372 (Typhon under Etna) are named from general knowledge, not quoted.

### Decisions
- **Tartarus**: `טַרְטָרוֹס` everywhere (682, 721, 725, 736, 807, 822 the father, 841 Τάρταρα, 851 ὑποταρτάριοι, 868),
  never `שְׁאוֹל` or `תְּהוֹם` (the gates); the LXX's τάρταρος and 2 Pet 2:4 in the note to 721; Hab 2:5, Isa 14:15 and
  Jonah 2:7 as [divergence] / [equivalent] for the underworld's gates and bars. The bronze anvil (722–725) with Job 37:18
  (`כִּרְאִי מוּצָק`) in a note only; `רָקִיעַ` not used.
- **The Hundred-Handers' war** (617–735): ὀδύσσομαι `קָצַף`; ἄγαμαι `הִשְׁתָּאָה`; μέγεθος `גֹּדֶל`; ἄχνυμαι `דָּאַב`;
  μάρναμαι `נֶאֱבַק`; μάχη / πόλεμος `מִלְחָמָה` (a recorded pair); ἔτος / ἐνιαυτός `שָׁנָה` (a recorded pair); νέκταρ /
  ἀμβροσίη `נֶקְטָר` / `אַמְבְּרוֹסְיָה`; ῥύομαι "defend" `הֵגֵן` (a sense split from 304; `שָׁמַר` kept for φυλάσσω);
  **αἰνός `מַחְרִיד`**, **ἐπαινή `נוֹרָאָה`**, δεινός `אָיֹם`; δηιοτής `קֶטֶל`; ἀλαλητός `קְרִיאַת קְרָב`, ἰαχή `תְּרוּעָה`,
  ἰωή `הֲמֻלָּה`, ὄτοβος `שָׁאוֹן`, ἐνοπή `צְעָקָה`, ἔνοσις `רַעַשׁ`, κέλαδος `הָמוֹן`, κολοσυρτός `מְהוּמָה`, ἰωχμός `מְהוּמָה`
  (683; the same noun, the two never together); σμαραγέω `הָמָה`, ἐρισμάραγος `רַב־הַהֶמְיָה`; βέλος `חֵץ`, **κῆλα
  `שְׁלָחִים`** (708; Joel 2:8); ῥιπή `תְּנוּפָה`; στεροπή `בָּרָק`, κεραυνός `חָזִיז`, βροντή `רַעַם` (F12); αἰθαλόεις
  `לוֹהֵט`, φλόξ `לֶהָבָה`, φλεγέθω `הִתְלַקֵּחַ`; **καῦμα θεσπέσιον `חוֹם אֱלוֹהִי`** (700; θεσπέσιος `אֱלוֹהִי`
  vocalized); ζέω `רָתַח`; αὐγή `נֹגַהּ`, μαρμαίρω `מַבְזִיק`; ἀμέρδω `סִנְוֵר`; κονίη `אָבָק` (`עָפָר` kept for κόνις,
  880); κλίνω (of battle) `נָטָה`; ἕρκος `גָּדֵר`, χάλκεος / χάλκειος `שֶׁל נְחֹשֶׁת`, ἄκμων `סַדָּן`, τεῖχος `חוֹמָה`, θύρα
  `דֶּלֶת`; εὐρώεις `טָחוּב`; ζόφος `אֹפֶל`, **ζοφερός `רַב־הָאֹפֶל`** (ἐρεβεννός keeps `אָפֵל`); φύλαξ `שׁוֹמֵר` (the gate's
  word, 735); πιστός `נֶאֱמָן`.
- **The map of the world** (736–819): πηγαί καὶ πείρατα `הַמְּקוֹרוֹת וְהַגְּבוּלוֹת`; χάσμα `בֶּקַע`; θύελλα `סְעָרָה`
  (ἄελλα `סוּפָה`, 874); τέρας `מוֹפֵת` (744; Exod 7:3's LXX τέρατα); οὐδός `סַף`, πύλη `שַׁעַר`; ἀμείβω `עָבַר`; ἀκτίς
  `זֹהַר` (κέρας keeps `קֶרֶן`), φαέθω `בּוֹהֵק`, σέλας `זִיו` (867); Ὕπνος / Θάνατος `שֵׁנָה` / `מָוֶת` (translated
  names); κραδίη / ἦτορ `קֶרֶב` (a recorded pair, both in 764: "קרב … קרב"); σιδήρεος `שֶׁל בַּרְזֶל`; ἐχθρός `שָׂנוּא`;
  δόμος `מָעוֹן`, δῶμα `אַרְמוֹן` (767, 816); ἠχήεις `מְהַדְהֵד`; ναίω / ναιετάω `גָּר` (renderings §11.3); Περσεφόνεια
  `פֶּרְסֶפוֹנָה`; σαίνω `קִבֵּל בְּכִשְׁכּוּשׁ`; ἀψόρροος `הַזּוֹרֵם אֶל עַצְמוֹ`; **πρόχοος `קִיתוֹן`** (πίθος keeps `כַּד`);
  ὅρκος `שְׁבוּעָה` (REQUIRED), ἐπόμνυμι `נִשְׁבַּע`; ἀπολείβω `נָסַךְ`; νήυτμος / ἀνάπνευστος `בְּלִי נְשִׁימָה` / `אֵינוֹ
  נוֹשֵׁם` (`נְשָׁמָה` is gated); ἄναυδος `בְּלִי נִיב` (αὐδή `נִיב`); **κῶμα `עִלָּפוֹן`** (not `תַּרְדֵּמָה`: Gen 2:21);
  ἆθλος `מִבְחָן`; βουλή "council" `מוֹעָצָה` (a sense split); ἀπαμείρω `נִתַּק`; δαίς `מִשְׁתֶּה` (802; "the battle feast"
  `מַעֲרָכָה` at 650: a sense split); αὐτοφυής `צוֹמֵחַ מֵעַצְמוֹ`; ὀπυίω `לָקַח לְאִשָּׁה` (γαμέω keeps `נָשָׂא אִשָּׁה`);
  Κυμοπόλεια `קִימוֹפּוֹלֵיאָה`.
- **Typhoeus** (820–880): Τυφωεύς `טִיפוֹאֶוּס` (the dossier's form, table); **ὄφις `נָחָשׁ`, δράκων `דְּרָקוֹן`** (825;
  `תַּנִּין`, `לִוְיָתָן` only in the הקבלה); θεσπέσιος `אֱלוֹהִי` of the monster's heads (827, 856: "uncanny", not
  "holy"); ὄψ `נְעִימָה` kept for the monster's voice (830: the binding word, and the contrast with the Muses is the
  point); φωνή `קוֹל`, ὄσσα `צְלִיל`; ἐργμα `פֹּעַל` (ἔργον `מַעֲשֶׂה`); λιχμάζω `לִחֵךְ`; ἀμαρύσσω `הִבְהֵב`; ταῦρος `פַּר`
  (βοῦς `שׁוֹר`); σκύλαξ `גּוּר כְּלָבִים`; ῥοιζέω `שָׁרַק`; σκληρός `קָשׁוּחַ` (ἀργαλέος `קָשֶׁה`); κοναβέω `צִלְצֵל`
  (ἠχέω `הִדְהֵד`); ῥοή `פֶּלֶג` (ῥέεθρον `זֶרֶם`); ἐπιστοναχίζω / στεναχίζω `נֶאֱנַק`; πρηστήρ `מְעַרְבֹּלֶת־אֵשׁ`; τρέω
  `חָרַד` (πελεμίζω `רָעַד`); ἔνεροι `שׁוֹכְנֵי־מַטָּה`; πίμπρημι `הִצִּית` (καίω `בָּעַר` here: in 557 `שָׂרַף`, a sense
  split; αἴθω `בּוֹעֵר` – a recorded pair); κήλεος `יוֹקֵד`; ἱμάσσω `הִצְלִיף`; γυιόω `נְכֵה־אֵבָרִים`; παιπαλόεις `מְסֻלָּע`
  (καταστυφελός `טְרָשִׁי`, 806); ἀιδνός `נִסְתָּר`; **ἀτμή `אֵד`** (vocalized), **τήκω `נָמֵס`**, **κασσίτερος `בְּדִיל`**,
  σίδηρος `בַּרְזֶל`, **χόανος `מַצְרֵף`** (Prov 17:3), αἰζηός `בָּחוּר`, θάλπω `הִתְחַמֵּם`; Ἥφαιστος `הֵפַיְסְטוֹס` (866, his
  first naming); ὀξύς `חַד` (ταχύς `מַהֵר`); μαψαῦραι `רוּחוֹת־הֶבֶל`; ὄνειαρ `תּוֹעֶלֶת`; γενεή `דּוֹר` (REQUIRED, 871);
  πῆμα μέγα θνητοῖσι `פֶּגַע גָּדוֹל לִבְנֵי־הַתְּמוּתָה`; φθείρω `הִשְׁחִית`; ἀλκή `הֲגַנָּה`; χαμαιγενής `יְלוּדֵי־הָאֲדָמָה`;
  νόσφι "except" `מִלְבַד` (a sense split from `הַרְחֵק מִן`).
- **Zeus made king** (881–885): τιμαί `זְכֻיּוֹת` (882, 885 `זְכֻיּוֹתֵיהֶם`; the ring with 74 and 112, which have the same
  word); κρίνομαι `הִכְרִיעַ`; ὀτρύνω `דָּחַק בְּ־`; **βασιλεύω `הָיָה לְמֶלֶךְ`, ἀνάσσω `מָלַךְ`** (both in 883); Γαίης
  φραδμοσύνῃσιν `בהגיגי ארץ` as 626; διαδατέομαι `חִלֵּק` (544).
- **Rejected**: `שְׁאוֹל`, `תְּהוֹם`, `רָקִיעַ` (722–725, 736–819), `תַּרְדֵּמָה` (798), `נְשָׁמָה` (797), `תַּנִּין`,
  `לִוְיָתָן`, `רַהַב` (825–868: only in quotations), `עוֹלָם` (751, 759, 796, 802: οὐδέ ποτε is `וְאַף פַּעַם`), `מִין`
  (830: `מכל סוג`), `רְפָאִים` for ἔνεροι (850).

### Open decisions for the user
- **823 (a corrupt line)**: `אשר ידיו – בחוזק הן, ופעלים להן` keeps the transmitted structure (ἐπʼ ἰσχύι, ἔργματʼ
  ἔχουσαι) without smoothing; the editors' emendations are in the note.
- **830 ὄψ `נְעִימָה` for a monster's voice**: the binding word (§11.1) sounds sweet in Hebrew; I kept it on purpose (the
  Muses' word turned upside down), but a context split (`קוֹל`, which φωνή holds) is possible.
- **860 ἀιδνός** (`נִסְתָּר`) against the conjecture Αἴτνης ("of Etna"): the base's reading kept, Etna in the note.
- **The Typhonomachy (820–880)** is not marked `{חשודה}` in the base; many editors suspect it. Translated in full; the
  note to 820 gives both sides.

### Progress log
- 2026-10-24: drafted 617–885 in seven sections, each saved, filled and verified at once (unvocalized and plene; `אֵל`,
  `אֵלִים`, `אֱלוֹהִי` forms vocalized wherever θεός / θεσπέσιος stands; `גִּיֵּס` vocalized at 618, 714, 734, 817 – the
  name string strips to `גיס`; `אֵד` vocalized).
- Verify findings fixed while drafting: `ולעולם` (οὐδέ ποτε) at 751, 759, 796, 802 → `ואף פעם` (the `עולם` gate); `אלים`
  at 759 vocalized; `מין` at 830 → `סוג`. 662 changed to `המחריד`.
- `lexmap` reverse check over 820–885 (Hebrew → several lemmas): ὀξύς / ταχύς, ταῦρος / βοῦς, παιπαλόεις / καταστυφελός,
  ἄελλα / θύελλα, σέλας / φαέθω resolved by new words (above); left as recorded pairs: πόντος / θάλασσα `יָם`, μάχη /
  πόλεμος, ἔτος / ἐνιαυτός, κραδίη / ἦτορ, καίω / αἴθω `בָּעַר`, ἔοικα / ἐναλίγκιος / ὅμοιος `דּוֹמֶה`, ἀνάσσω / ἐμβασιλεύω
  `מוֹלֵךְ` (71, translator 1), ἰωχμός / κολοσυρτός `מְהוּמָה`.
- Bible references written `` `…` – Book ch:v `` turned into `(Book ch:v)` by a regex pass (4 in 617–885, one of them in
  the 776 note). `check_bible_quotes.py`: 0 problems (annotated file). `verify TH`: 0 problems (137 later lines noted as
  not yet drafted). `selftest`: 0 failures.

### The text on its own terms
- **The war is won by the freed** (617–663): Zeus frees the Hundred-Handers on Earth's advice, feeds them nectar and
  ambrosia, and asks for their help in return – the same economy of gratitude as the Cyclopes' thunderbolt (501–506).
  Kottos answers as a vassal: "by your forethought we came back from the gloom" (658).
- **A cosmic battle** (664–735): sea, earth and sky shake, the heat reaches the Chasm (700), and the poet compares it to
  earth and sky crashing together (702–704) – the battle undoes the creation of 116–133 for a moment. Zeus' entry (687)
  is the climax: thunder, lightning, the "holy flame".
- **A geography of the underworld** (720–819): as far below the earth as the sky is above it (720–725); a bronze wall,
  Poseidon's gates, the Hundred-Handers as wardens; then the "sources and limits of all" (736–739, twice), the house of
  Night where Night and Day greet each other on the threshold and are never inside together (748–757), Sleep the gentle
  and Death with the iron heart (758–766), Hades' hall and the dog who fawns on those who enter and eats those who try to
  leave (767–774), Styx's silver-pillared house and the water of the gods' oath (775–806). A god who perjures lies a year
  breathless, then is cut off from the council and feasts for nine years (793–804): an oath with a sanction, but no
  judge – the water itself is the witness.
- **Typhoeus** (820–880): the last son of Earth, by Tartarus: a hundred snake heads, fire from the eyes, voices of gods,
  bulls, lions and puppies (829–835). He would have ruled gods and men (837) "had not the father noticed sharply". The
  battle repeats the Titanomachy in miniature; the earth melts like tin in a crucible – a workshop simile in the middle of
  the battle (861–867). The monster's legacy is the bad winds, which wreck ships and fields (869–880), while the good
  winds are "from the gods".
- **The kingship** (881–885): the gods ask Zeus to be king on Earth's advice, and he distributes their τιμαί – the end
  the proem promised (74, 112). Earth advises every generation, also against her own children.

### Key parallels
- **Th. 678–712 ↔ Ps 18:8–16, Judg 5:4, Hab 3:11, Joel 2:10, Nah 1:3, 1 Kgs 19:11, Ps 144:6**: the storm god's battle as a
  theophany – earth and mountains shaking, arrows and lightning, sun and moon standing still.
- **Th. 720 ↔ Isa 55:9 (LXX ἀπέχει ὁ οὐρανὸς ἀπὸ τῆς γῆς), Ps 103:11, Job 11:8**: the measure of the distance of sky from
  earth.
- **Th. 726–733, 811 ↔ Jonah 2:7, Isa 38:10 (LXX πύλαι ᾅδου), Job 38:17**: the gates and bars of the underworld.
- **Th. 748–757 ↔ Gen 1:5 (LXX), Ps 19:3, 7, Ps 104:20–22, Job 38:19–20**: Night and Day as two persons who meet on the
  threshold; in Genesis, two names given by God to light and darkness.
- **Th. 775–806 ↔ Num 5:19–22 (the water of the oath), Lev 19:12, Num 30:3, Isa 45:23 (LXX ὀμνύω)**: the oath and its
  sanction; the gods' oath by Styx, the water drawn in a ewer.
- **Th. 825 ↔ Isa 27:1 (LXX δράκοντα ὄφιν), Ps 74:13–14, KTU 1.5 I 1–3, 1.3 III 40–42**: the many-headed sea serpent; the
  LXX's δράκων / ὄφις is Hesiod's pair, and the Ugaritic "fleeing serpent, twisting serpent, the ruler with seven heads"
  is Isaiah word for word.
- **Th. 821 ↔ Exod 14:2, Ps 48:3, Isa 14:13**: Mount Ṣapānu / Kasios – where Apollodorus (1.6.3), not Hesiod, sets Zeus'
  fight; the Baal-Yam battle and Baal's "mountain of my inheritance" (KTU 1.3 III 29–30).
- **Th. 827–828, 847 ↔ Job 41:11–13, 23**: the fire-breathing monster that makes the deep boil.
- **Th. 839–843 ↔ Ps 18:8, 14; Ps 29:3, 10; Ps 104:32; Nah 1:5**: the thunderer, the earth that trembles.
- **Th. 850 ↔ Isa 14:9**: the underworld astir.
- **Th. 857 ↔ Job 26:12–13, Isa 51:9**: the god who smites the monster by strength and understanding.
- **Th. 862–867 ↔ Ps 97:5, Mic 1:4, Amos 9:5, Ezek 22:20–22**: the earth melting before the god; Ezekiel's furnace with tin
  and iron is the same workshop.
- **Th. 874–876 ↔ Jonah 1:4, Ps 107:25**: the storm at sea.
- **Th. 881–885 ↔ Exod 15:18, Ps 29:10, Ps 93:1, 1 Sam 10:24, Enuma Elish IV 14 and VI 99, KTU 1.2 IV 32**: kingship after
  victory over the waters / the monster; in Enuma Elish the kingship is given before the battle, in Hesiod and at Ugarit
  after it.

### Lines shared with other texts
- First copies fixed here: **630 (= 668)**, **707 (= 854)**, **736–739 (= 807–810)**, **768 (= 774, `{חשודה}`)**.
  Copied: **671 = 150**, **673 = 152**, **794 = 118** (translator 1), **747 = 519** (mine). Near-repeats: 847 ≈ 695
  (`ורתחה כל האדמה`), 844 ≈ 700 (`וחום … מילא`), 865 ≈ 860 (`בערוצי ההר`), 884 ≈ 626 (`בהגיגי ארץ`).
- **The fifth-day dossier's 820–828** (my Hebrew, for the dossier to adopt or compare):
  - 820 `ואחרי אשר גירש זאוס את הטיטנים מן השמים,`
  - 821 `ילדה ארץ המפלצתית את בנה הצעיר מכולם, טִיפוֹאֶוּס,`
  - 822 `באהבת טַרְטָרוֹס, בזכות אפרודיטה הזהובה;`
  - 823 `אשר ידיו – בחוזק הן, ופעלים להן,`
  - 824 `ורגליו בלי לאות – של הָאֵל העז; ומכתפיו`
  - 825 `היו מאה ראשים של נחש, של דְּרָקוֹן איום,`
  - 826 `מלחכים בלשונות קודרות; ומעיניו`
  - 827 `בראשים הָאֱלוֹהִיִּים, תחת הגבות, הבהבה אש;`
  - 828 `ומכל ראשיו בערה אש בהביטו;`
  Differences from the dossier: `ארץ` for its `גַּאיָה` (the corpus translates the name), `הָאֱלוֹהִיִּים` for `הנפלאים`
  (θεσπέσιος), `בחוזק` (ἰσχύς `חֹזֶק`), `פעלים` (ἔργμα, kept apart from ἔργον), `קודרות` (δνοφερός `קוֹדֵר`).
- Formulas used: F1 (643, 838), F4 (633, 664), F7 (644), F8 (685, 737, 808), F9 (762, 781, 790), F10 (696, 728, 737, 808),
  F11 (822), F12 (707, 854), F13 (722, 724), F16 (783), F24 (620, 717, 787), F26 (throughout), F29 (630, 668). None
  revised.

### Proposals for the shared renderings
- **Names**: Τυφωεύς `טִיפוֹאֶוּס` (table); Ἥφαιστος `הֵפַיְסְטוֹס` (table; first named at 866); Κυμοπόλεια
  `קִימוֹפּוֹלֵיאָה` (new, 819); Ὄθρυς `הָאוֹתְרִיס` (632, with the article); Περσεφόνεια `פֶּרְסֶפוֹנָה`. **Table forms to fix in the tool**:
  Γύης's string `גיס` rejects the plene `גייס` (I vocalized `גִּיֵּס` at 618, 714, 734, 817).
- **Formulas**: none revised. Suggest **F31 `αινη δηιοτητ` → `הקטל המחריד`** (662, 852; also Iliad diction), and **F32
  `ουρεοσ εν βησσησ` → `בערוצי ההר`** (860, 865). A note for F12: the genitive βροντῆς τε στεροπῆς τε (845) is not matched
  (I wrote `מן הרעם ומן הברק`).
- **Gates**: no `[היתר שער]` and no `[היתר שם]` in 617–885. The `עולם` gate caught οὐδέ ποτε `ולעולם` four times: worth a
  line in §6 ("never" is `אַף פַּעַם`, not `לְעוֹלָם`).
- **Recurring words** (first line in brackets): αἰνός `מַחְרִיד` (662), ἐπαινή `נוֹרָאָה` (768), κῆλα `שְׁלָחִים` (708),
  ἰωή `הֲמֻלָּה` (682), ὄτοβος `שָׁאוֹן` (709), ἀλαλητός `קְרִיאַת קְרָב` (686), ἰαχή `תְּרוּעָה` (708), κέλαδος `הָמוֹן`
  (852), ἔνοσις `רַעַשׁ` (681), κονίη `אָבָק` (706), ζοφερός `רַב־הָאֹפֶל` (814), δόμος `מָעוֹן` / δῶμα `אַרְמוֹן` (767),
  πρόχοος `קִיתוֹן` (785), ὅρκος `שְׁבוּעָה` (784), κῶμα `עִלָּפוֹן` (798), ὀπυίω `לָקַח לְאִשָּׁה` (819), ἀκτίς `זֹהַר`
  (760), σέλας `זִיו` (867), δράκων `דְּרָקוֹן` (825), τήκω `נָמֵס` (862), σίδηρος `בַּרְזֶל` (864), ἄελλα `סוּפָה` (874),
  θύελλα `סְעָרָה` (742), φθείρω `הִשְׁחִית` (876), τιμαί `זְכֻיּוֹת` (882), βασιλεύω `הָיָה לְמֶלֶךְ` (883).
- **Recorded splits and pairs** (for `lexmap`): ῥύομαι `נעצר` / `הֵגֵן` (304 / 662); κέλομαι, ὥρα, βουλή (council),
  ἀραρίσκω, ἐλαύνω, φαίνω, δαίς (`מַעֲרָכָה` 650 / `מִשְׁתֶּה` 802), νόσφι (`הַרְחֵק מִן` / `מִלְבַד` 870), καίω (`שָׂרַף`
  557 / `בָּעַר` 828, 861) – sense splits; pairs sharing a Hebrew word: μάχη / πόλεμος `מִלְחָמָה`, ἔτος / ἐνιαυτός `שָׁנָה`,
  κραδίη / ἦτορ `קֶרֶב` (both in 764), καίω / αἴθω `בָּעַר`, ἰωχμός / κολοσυρτός `מְהוּמָה`, πόντος / θάλασσα `יָם`.

### For the Works and Days
- **The winds and the sea** (WD 504–563 Lenaion and Boreas, 618–694 sailing): ἄνεμος `רוּחַ` (the gate), Βορέας / Νότος /
  Ζέφυρος `בּוֹרֵאָס` / `נוֹטוֹס` / `זֶפִירוֹס`, ἀργεστής `הַמַּבְהִיר`; ἄελλα `סוּפָה`, θύελλα `סְעָרָה`; ἄημι `נָשַׁב`,
  ἐπιπνέω `נָשַׁב עַל`; θυίω `גָּעַשׁ`; κῦμα `גַּל`; ναῦς `אֳנִיָּה`, ναύτης `מַלָּח`; φθείρω `הִשְׁחִית`; πῆμα `פֶּגַע`;
  πόντος `יָם` (F10 `ים עקר`), ἠεροειδής `עֲרַפִלִּי־הַמַּרְאֶה`, ἰοειδής `סָגֹל־הַמַּרְאֶה`.
- **The works of men** (WD passim): ἔργα of the fields `מַעֲשִׂים` (879: "the lovely works of earth-born men");
  χαμαιγενής `יְלוּדֵי־הָאֲדָמָה`; ἐρατός `עָרֵב`; κόνις `עָפָר`.
- **Oath and perjury** (WD 190–194, 219, 282–285, 803–804: Horkos, the perjurer's race, the fifth day when the Erinyes
  attend Horkos' birth): ὅρκος `שְׁבוּעָה`, ἐπίορκος `לַשֶּׁקֶר` (TH 232, 793: `נשבע עליה לשקר`), ἐπόμνυμι `נִשְׁבַּע`; Ἔρις, Ὅρκος as in the table.
- **Iron and work** (WD 151, 176, 387 iron, 423 the sickle): σίδηρος `בַּרְזֶל`, σιδήρεος `שֶׁל בַּרְזֶל`; χάλκεος `שֶׁל
  נְחֹשֶׁת`; τήκω `נָמֵס`; Ἥφαιστος `הֵפַיְסְטוֹס` (WD 60).
- **Night, Day, Sleep, Death** (WD 102–104, 116 "they died as if overcome by sleep", 176–178): Ὕπνος `שֵׁנָה`, Θάνατος
  `מָוֶת`, ὕπνος (common noun) `שֵׁנָה`; δαμάζω `הִכְנִיעַ`; ἦμαρ / νύξ `יוֹם` / `לַיְלָה`, F13 `לילות וימים`.
- **Zeus' epithets met in the WD proem**: ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם`, εὐρύοπα `רְחַב־הַמַּבָּט`, F1 `אבי האנשים
  והאלים` (WD 59), F26 `בן־קרונוס`; βασιλεύς `מֶלֶךְ` (WD's "gift-devouring kings" `מְלָכִים`), ἀνάσσω `מָלַךְ`, βασιλεύω
  `הָיָה לְמֶלֶךְ`.

### Lessons for the guidelines
- **"Never" is not `לְעוֹלָם`**: four οὐδέ ποτε came out as `ולעולם` in one section before `verify` stopped them; write
  `אף פעם` (or `מעולם לא`, if a gate allows) from the start.
- **A name whose table string is defective** (`גיס`) fails against a plene draft (`גייס`): vocalize it at every
  occurrence, not only the first, or ask for the plene string in the table.
- **Formula tags in the פירוק** (`` `νύκτας τε καὶ ἤματα` – F13 ``) poison `lexmap` (lemma "F13" → "f"): write the lemma
  first, the formula after it, or split the words.
- **A reverse `lexmap` check** (Hebrew → several lemmas) catches collisions a forward check misses (ταῦρος `שׁוֹר` against
  βοῦς `שׁוֹר`): run it on each part's range before handing back.

## TH 886–1022

### Scope
Part 5 (translator 2, Round 4 run 4, 2026-10-24): Zeus swallows Metis, Themis and the Horai and Moirai (886–906); the
other wives – Eurynome and the Charites, Demeter and Persephone, Mnemosyne and the Muses, Leto, Hera last – and Athena from
his head, Hephaistos from Hera alone (907–929); Galen's twenty lines 929a–929t (Hephaistos first, then Metis swallowed and
Athena born "by the crown" on the Triton), translated in full as their own witness; the other children – Triton, Phobos
and Deimos, Harmonia, Hermes, Dionysos, Ariadne, Heracles and Hebe, Helios' children, Medea (930–962); the farewell to the
gods and the catalogue of goddesses who lay with mortal men (963–1002); Nereus' daughters, Aphrodite, Circe, Calypso, and
the transition to the Catalogue of Women (1003–1022). 157 entries in six sections, in the base's order (929, 929a–t, 930);
`{גלנוס}` at 929a–929t, `{גלנוס} {חשודה}` at 929s, `{חשודה}` at 1014. The placeholder is removed: the Theogony is
drafted in full (1042 entries). The clean translation was not built in this part.

### Sources consulted
The line data (`data TH 886 1022`; the AGDT parse checked: 902 lemma Εὐνουμίη (the base's epic spelling), 929i τέξῃ
without lemma, 929s/1014 bracketed, 975 Ἀφροδ́ιτη garbled, 976 Ἀγαυή tagged ἀγαυός, 987 Φαέθων tagged φαέθω, 993
Αἰονίδης, 909 the Charites' names as common nouns). Every Hebrew verse printed with `check_bible_quotes.py --show` before
quoting: Gen 2:9, 3:5, 3:22, 5:24, 6:1–4, 21:13; Judg 21:21; 1 Sam 3:3, 16:12, 18:25; 2 Sam 5:2; 1 Kgs 3:9, 3:12, 20:11;
2 Kgs 2:11; Isa 11:2, 32:17, 41:7, 42:10, 45:7; Jer 4:3, 10:12, 11:20; Hos 10:12; Ps 55:22, 82:6–7, 85:11, 89:15, 96:11,
98:7–8; Prov 3:19, 6:25, 7:21, 8:12, 8:14–15, 8:22–25, 8:30, 10:22; Job 1:6, 2:10, 38:7; Song 4:9; Lam 3:38; Dan 3:4;
Deut 32:17. The LXX printed before quoting: Gen 2:9, 2:17, 3:5, 3:22, 5:24, 6:2, 6:4; Isa 41:7 (τέκτων). The LXX of Kings,
Psalms, Proverbs and Deuteronomy is not in the tool (described, not quoted). Galen (On the Doctrines of Hippocrates and
Plato, book 3) quoting Chrysippus; Pindar Isthm. 8 and Ol. 7.35–38; Iliad 18.432–434; Odyssey 5.125–128, 8, 11.601–604;
the Homeric Hymns to Demeter and Aphrodite (218–238); Apollodorus 1.6.1 – named from general knowledge, not quoted.

### Decisions
- **Metis** (886–900): Μῆτις the goddess `מֵטִיס`, μῆτις the noun `תְּבוּנָה` (the pun in the note); ἄλοχος `בַּת־זוּג`,
  παρακοίτης `בֶּן־זוּג` (ἄκοιτις keeps `רַעְיָה`, γυνή `אִשָּׁה`); εἰσκατατίθημι / ἐγκατατίθεμαι `הִנִּיחַ בְּתוֹךְ` +
  νηδύς `מֵעַיִם` (as 487); αἱμύλος `חֲלַקְלַק`; δόλος / ἐξαπατάω `עָרְמָה` / `רִמָּה`; φράζω `הוֹדִיעַ`; βασιληὶς τιμή
  `כְּבוֹד הַמַּלְכוּת` (as 462); εἵμαρτο `נִגְזַר` (μείρομαι: a sense split from `נָחַל`); περίφρων `פִּקֵּחַ`, ἐπίφρων
  `נָבוֹן`; μένος (of a body) `עָצְמָה`; ὑπέρβιον ἦτορ `קֶרֶב פִּרְאִי` (139); F21 `טוב ורע` at 900 and 906.
- **Themis' daughters** (901–906): Ὧραι `הַהוֹרוֹת` (always vocalized); Εὐνομίη / Δίκη / Εἰρήνη `סֵדֶר־טוֹב` / `מִשְׁפָּט` /
  `שָׁלוֹם` (§3.2, no article); θάλλω `שִׂגְשֵׂג` (ἀνθεμόεις keeps `פּוֹרֵחַ`); ὠρεύω `הִשְׁגִּיחַ` (`שָׁמַר` is φυλάσσω's);
  Μοῖραι `הַמּוֹירוֹת`, their three names as 218; πόρω `הֶעֱנִיק`; μητίετα `רַב־הַתְּבוּנָה`.
- **The wives** (907–929): Charites `הֶחָרִיטוֹת`, their names kept as names (`אַגְלָאִיָּה`, `אֶוּפְרוֹסִינָה`, `תָּלִיָּה`;
  meanings in the note; Θαλίη ≠ the Muse Θάλεια `תָּלֵיאָה`); ἔρος (noun) `חֵשֶׁק`, ἔραμαι `חָשַׁק`; βλέφαρον `עַפְעַף`;
  εἴβω `נָטַף`; πολύφορβος `מְזִינַת־רַבִּים` (πουλυβότειρα keeps `רַבַּת־הַמָּזוֹן`); ἁρπάζω `חָטַף`; καλλίκομος
  `נְאַת־הַשֵּׂעָר` (ἠΰκομος keeps `יְפַת־הַשֵּׂעָר`); χρυσάμπυξ `בַּעֲלַת־נֵזֶר־הַזָּהָב`; ἁνδάνω `נָעַם`; λοῖσθος
  `אַחֲרוֹן`; ἐγρεκύδοιμος `מְעוֹרֶרֶת־הַקְּרָב`, ἀγέστρατος `מוֹלִיכַת־הַצָּבָא`; πόλεμος / μάχη in one line (926):
  `מִלְחָמָה` / `מַאֲבָק` (`קְרָבוֹת` is ὑσμίνη's); ζαμενέω `הִשְׁתּוֹלֵל בְּזַעַף`; καίνυμαι `עָלָה עַל` (μεταπρέπω keeps
  `הִצְטַיֵּן`).
- **Galen's lines** (929a–t): the same vocabulary as 886–929, so the two versions compare line by line; συμμάρπτω `לָפַת`;
  δείδω `פָּחַד`; ὑψίζυγος `רַם־הַכֵּס`; αἰθήρ `אֶתֶר` (vocalized); καταπίνω `בָּלַע`; κορυφή (of a head) `קָדְקֹד` (a
  sense split from `פִּסְגָּה`); σπλάγχνα `כְּלָיוֹת` (ἔγκατα keeps `קְרָבַיִם`); τέκταινα `אָמָּנִית` (the LXX's τέκτων =
  `חָרָשׁ`, Isa 41:7, in the note: the feminine `חָרֶשֶׁת` reads "deaf"); δίκαιος `צֶדֶק` (REQUIRED); πολυδήνης
  `רַבַּת־הַמְּזִמּוֹת`; αἰγίς `אֶגִיס`; ἔντεα `חֲגוֹר` (ὅπλον keeps `כְּלִי־נֶשֶׁק`, τεῦχος `שִׁרְיוֹן`).
- **The other children** (930–962): Φόβος / Δεῖμος translated names `בֶּהָלָה` / `אֵימָה` (δέος keeps `פַּחַד`, 167);
  Ἁρμονίη kept as a name `הַרְמוֹנִיָּה` (a heroine, Kadmos' wife); Τρίτων `טְרִיטוֹן`; εὐρυβίας `רְחַב־הַכֹּחַ`; πυθμήν
  `קַרְקָעִית`; ῥινοτόρος `פּוֹלֵחַ־הַמָּגִנִּים`; κρυόεις `מְצַמְרֵר` (κρυερός keeps `מַקְפִּיא`); πτολίπορθος
  `מַחְרִיב־הֶעָרִים`; κῆρυξ `כָּרוֹז` (not `מַלְאָךְ`); κύδιμος `מְפֹאָר`; πολυγηθής `רַב־הַשִּׂמְחָה`; ἀγακλυτός /
  ἀγακλειτός `נוֹדַע לִתְהִלָּה`; ξανθός `אַדְמוֹנִי` (1 Sam 16:12); τίθημι "make into" `שָׂם לְ־` (Gen 21:13); ἴς `אוֹן`;
  ἀνύω `בִּצַּע` (τελέω keeps `הִשְׁלִים`); ἀπήμαντος `בְּלִי פֶּגַע`; ἀκάμας `שֶׁאֵין לוֹ לֵאוּת`; φαεσίμβροτος
  `הַמֵּאִיר לִבְנֵי־הַתְּמוּתָה`; Ἠέλιος `שֶׁמֶשׁ` as a name; ὑποδαμνάω `נִכְנַע`.
- **The goddesses and mortal men** (963–1022): χαίρετε `שִׂמְחוּ` (`שָׁלוֹם` stays Εἰρήνη's); νῆσος `אִי`; ἡδυεπής
  `מְתוּקַת־הַלָּשׁוֹן`; φῦλον `שֵׁבֶט`; εὐνάω `שָׁכַב` (παραλέχομαι 929f also `שָׁכַב`: a recorded pair);
  **ἀνὴρ θνητός `אִישׁ בֶּן־תְּמוּתָה`**, **ἥρως `הֵרוֹאִי`** (never `גִּבּוֹר`, `נְפִלִים`, `בְּנֵי הָאֱלֹהִים` in a line);
  **ἐπιείκελος `דְּמוּי־`** (θεοῖς ἐπιείκελα τέκνα `צאצאים דְּמוּיֵי־אֵלִים`, the ἴκελος family); Πλοῦτος translated
  `עֹשֶׁר` (ἄφενος 112 `הָעֹשֶׁר`: a recorded pair), ἀφνειός `עָשִׁיר`; νειός `נִיר`, τρίπολος `חָרוּשׁ שָׁלוֹשׁ
  פְּעָמִים`; τυγχάνω `פָּגַשׁ`; gnomic aorist (974) in the present; φιτύω `הִצְמִיחַ`; ἀνερείπομαι `נָשָׂא` (ἁρπάζω
  `חָטַף`); ναός `מִקְדָּשׁ` (only with ζάθεος in the line); νηοπόλος `מְשָׁרֵת` (991: `קדש` not licensed there);
  **δαίμων `דַּיְמוֹן`** (vocalized; `שֵׁד` is the LXX's δαιμόνιον, Deut 32:17, a note); ἀταλὰ φρονέων `תַּם־הַמַּחְשָׁבוֹת`;
  ὑπερήνωρ `שַׁחֲצָן` (ὑπέροπλος keeps `יָהִיר`); ὀβριμοεργός `כַּבִּיר־הַמַּעֲשִׂים`; μογέω `סָבַל`; ποιμὴν λαῶν `רוֹעֵה
  הָעָם`; ῥηξήνωρ `שׁוֹבֵר־הָאֲנָשִׁים`, θυμολέων `לֵב־הָאֲרִי`; ταλασίφρων `סְבַל־הַלֵּב`; Αἰθίοπες `כּוּשִׁים`.
- **Rejected**: `גִּבּוֹר`, `נְפִלִים`, `בְּנֵי הָאֱלֹהִים`, `בְּנֵי הָאָדָם` (967, 1019: ἀνδράσι θνητοῖσι is `אנשים בני־תמותה`),
  `מַלְאָךְ` (939), `הֵיכָל`, `מִקְדָּשׁ` without a licence (991), `רוּחַ` (995 `גס־הרוח`, caught by `verify`), `שָׁלוֹם` for
  χαίρετε, `לְעוֹלָם`, `מִין`.

### Open decisions for the user
- **The Charites' names** (909, 945) kept as names (`אַגְלָאִיָּה` "Splendour", `אֶוּפְרוֹסִינָה` "Good Cheer", `תָּלִיָּה`
  "Festivity"), as the Muses' and the nymphs'; Εὐνομίη / Δίκη / Εἰρήνη and Φόβος / Δεῖμος / Πλοῦτος translated (§3.2). The
  line is drawn between "nymph-like goddesses" (names) and "personified abstractions" (translated): Charites could go
  either way.
- **δαίμων `דַּיְמוֹן`** (991): a transcription, because every Hebrew word is taken or misleading (`שֵׁד`, `רוּחַ`, `אֱלוֹהַּ`).
  The Works and Days needs a rendering for its δαίμονες (WD 122–126, 141): the same is proposed.
- **904 ᾗ** read as plural ("to them"), with the editors' αἷς.
- **929q–929t**: the subjects shift (Athena or Metis; Zeus or Metis); translated close, without filling in.

### Progress log
- 2026-10-24: drafted 886–1022 in six sections, each saved, filled and verified at once.
- Verify findings fixed while drafting: `הדור` (φαίδιμος, 929b, 940, 986) vocalized `הָדוּר` with `[היתר שער]` (the `דור`
  gate); 966 `הָאוֹלִימְפִּיּוֹת` and 999 `בֶּן־אַיְסוֹן` vocalized (the first-occurrence check counted these copies as
  first: 993's lemma is the treebank's Αἰονίδης); 991 `משרת־מקדש` → `שם משרת` (the `קדש` gate); 995 `גס־הרוח` → `השחצן`
  (the `רוח` gate).
- `lexmap` reverse check over 886–1022: καλλίκομος / ἠΰκομος, μάχη / ὑσμίνη, Φόβος / δέος, καίνυμαι / μεταπρέπω resolved
  by new words (above); left as recorded pairs: νέος / ὁπλότατος `צָעִיר`, εὐνάω / παραλέχομαι `שָׁכַב`, πλοῦτος / ἄφενος
  `עֹשֶׁר`, παῖς / θυγάτηρ `בַּת` (952), φρονέω / δῆνος `מַחְשָׁבוֹת`.
- `verify TH --strict`: 0 problems, 0 repeated-line differences (1042 entries). `selftest`: 0 failures.
  `check_bible_quotes.py`: 0 problems on the annotated file and on project.md.

### The text on its own terms
- **The end of succession** (886–900): Zeus does what Kronos did – swallows – but before the birth and the mother, not the
  children; the "counsel" that would have borne a stronger son now sits inside the king and advises him "good and evil".
  Kumarbi's and Kronos' swallowing turned into wisdom made part of the ruler.
- **A kingdom of marriages** (901–929): each wife brings an order into the world – Order, Justice and Peace; the Fates;
  Grace; the grain and its daughter; Memory and the Muses; and last the queen, whose children are youth, war and
  childbirth. Kingship as a family tree.
- **Two births without a partner** (924–929): Athena from Zeus' head, Hephaistos from Hera "in anger": the rivalry of the
  royal couple produces the two craft gods.
- **Galen's witness** (929a–t): the same story in another order, quoted by Chrysippus to prove that thought lives in the
  chest: the Theogony as philosophical evidence a thousand years later.
- **Heroes and their gods** (940–1018): mortal mothers of gods (Semele, Alkmene), mortals made immortal (Ariadne,
  Heracles), goddesses who bore mortal sons (Demeter, Eos, Aphrodite, Thetis, Circe, Calypso): the border between gods and
  men crossed in both directions, always by the gods' will.
- **The closing transition** (1019–1022): "now sing the tribe of women" – the hearer was led from the gods to the heroes'
  mothers, the next song; the Muses close the ring opened at line 1.

### Key parallels
- **Th. 886–900 ↔ Prov 8:14–15, 8:22–31, 3:19; 1 Kgs 3:9, 12**: wisdom beside or inside the divine king, "by me kings
  reign"; Solomon asks "to discern between good and evil" – a motif, no contact. **Gen 3:5, 3:22** (LXX καλὸν καὶ
  πονηρόν): the knowledge of good and evil kept by God / acquired by Zeus.
- **Th. 902 ↔ Ps 85:11, 89:15, Isa 32:17**: justice and peace as a pair beside the throne.
- **Th. 904–906 ↔ Job 2:10, Lam 3:38, Isa 45:7**: good and evil as the portion given to men.
- **Th. 910 ↔ Prov 6:25, Song 4:9**: desire from the eyelids.
- **Th. 914 ↔ Judg 21:21**: the seized bride.
- **Th. 942, 949–955, 990 ↔ Ps 82:6–7, Gen 3:22, Gen 5:24 (LXX μετέθηκεν), 2 Kgs 2:11**: mortals taken up and made
  immortal.
- **Th. 965–968, 1019–1021 ↔ Gen 6:1–4** (LXX οἱ υἱοὶ τοῦ θεοῦ, γίγαντες, ὀνομαστοί): unions of divine and human, the
  reverse direction (goddesses with men); the Catalogue of Women is the Greek counterpart of Gen 6:2.
- **Th. 971 ↔ Jer 4:3, Hos 10:12**: the ploughed fallow.
- **Th. 991 ↔ 1 Sam 3:3**: the boy who sleeps in the temple.
- **Th. 994–995 ↔ 1 Sam 18:25**: the king who sets the hero deadly tasks for a bride.
- **Th. 1000 ↔ 2 Sam 5:2**: the king as shepherd of the people.

### Lines shared with other texts
- Copied: **966 = 1022 = 25 = 52** (F3; 966 vocalized as 25). First copy fixed here: **968 (= 1020)**. Near-repeats:
  887 ≈ 929p, 890 ≈ 899 ≈ 929h, 905–906 ≈ 218–219, 918 ≈ 14, 928 ≈ 929a, 929 ≈ 929d, 950 ≈ 526, 951 ≈ 994 (second half),
  959 ≈ 242, 965 ≈ 1021, 967 ≈ 1019, 970 ≈ 1009, 983 ≈ 290, 1005 ≈ 822.
- Formulas used: F1 (929l), F3 (966, 1022), F5 (920, 929c, 966, 1022), F6 (944), F8 (891), F9 (972), F11 (962, 1005,
  1014), F14 (920, 923, 927 negated, 941, 944, 970, 980, 1009, 1018), F15 (921 = the self-test line, 946, 948, 999), F16
  (929r, 963), F21 (900, 906), F26 (929j, 949), F28 (888). None revised. 921 follows the self-test line exactly.

### Proposals for the shared renderings
- **Names (new, by §2.3)**: Τρίτων `טְרִיטוֹן`; Ἁρμονίη `הַרְמוֹנִיָּה`; Ἀγλαΐη / Εὐφροσύνη / Θαλίη `אַגְלָאִיָּה` /
  `אֶוּפְרוֹסִינָה` / `תָּלִיָּה`; Ἀριάδνη `אֲרִיאַדְנָה`, Μίνως `מִינוֹס`; Ἰασίων `יָאסִיּוֹן`; Ἰνώ `אִינוֹ`, Ἀγαυή
  `אַגָאוּאָה`, Ἀρισταῖος `אַרִיסְטַאיוֹס`, Πολύδωρος `פּוֹלִידוֹרוֹס`; Τιθωνός `טִיתוֹנוֹס`, Μέμνων `מֶמְנוֹן`, Ἠμαθίων
  `אֵמָתִיּוֹן`, Κέφαλος `קֶפָלוֹס`, Φαέθων `פַאֵתוֹן`; Πελίης `פֶּלִיאָס`, Ἰαωλκός `יָאוֹלְקוֹס`, Μήδειος `מֵדֵיאוֹס`, Χείρων
  `כֵירוֹן`, Φιλυρίδης `בֶּן פִילִירָה`; Φῶκος `פוֹקוֹס`, Αἰακός `אַיָאקוֹס`, Πηλεύς `פֵּלֵאוּס`, Αἰνείας `אַיְנֵיאָס`, Ἀγχίσης
  `אַנְכִיסֵס`, Ἴδη `אִידָה`, Ὑπεριονίδης `בֶּן־הִיפֶּרִיּוֹן`, Ἄγριος `אַגְרִיּוֹס`, Λατῖνος `לָטִינוֹס`, Τηλέγονος
  `טֵלֵגוֹנוֹס`, Τυρσηνοί `הַטִּירְסֵנִים`, Ναυσίθοος `נַאוּסִיתוֹאוֹס`, Ναυσίνοος `נַאוּסִינוֹאוֹס`, Μαῖα Ἀτλαντίς `מָאיָה בת
  אטלס`. **Translated names (§3.2)**: Φόβος `בֶּהָלָה`, Δεῖμος `אֵימָה`, Πλοῦτος `עֹשֶׁר`.
- **Table forms to fix in the tool**: Αἰσονίδης (993: the treebank's lemma Αἰονίδης) misses the name check, so the
  first-occurrence rule fired at 999; Εὐνομίη is lemmatized Εὐνουμίη (902), so its name row never fires.
- **Gates**: the `דור` gate catches `הָדוּר` (φαίδιμος, "splendid", sg. with the article): three `[היתר שער]` (929b, 940,
  986) – add `φαιδιμ` to the licence, or match the vocalized `הַדּוֹר` only. The `קדש` gate is right to refuse `מקדש` for
  ναός/νηοπόλος without ζάθεος/ἱερός (991); if the WD needs `מִקְדָּשׁ` for ναός, add `ναο|νηο` to the licence.
- **Formulas**: none revised. Suggest **F33 `θεοισ επιεικελ`** → `דמוי(י)?־אלים` (968, 987, 1020) and **F34 `δια θεαων`** →
  `הנהדרת באלות` (969, 1004, 1017); F14's variant μιγεῖσʼ ἐρατῇ φιλότητι has `בהתייחדה באהבה ערבה` (970, 1009, 1018).
- **Recurring words** (first line in brackets): ἄλοχος `בַּת־זוּג` (886), παρακοίτης `בֶּן־זוּג` (928), αἱμύλος `חֲלַקְלַק`
  (890), περίφρων `פִּקֵּחַ` (894), ὠρεύω `הִשְׁגִּיחַ` (903), θάλλω `שִׂגְשֵׂג` (902), ἔρος (noun) `חֵשֶׁק` (910), ἔραμαι
  `חָשַׁק` (915), ἁρπάζω `חָטַף` (914), ἁνδάνω `נָעַם` (917), καλλίκομος `נְאַת־הַשֵּׂעָר` (915), καίνυμαι `עָלָה עַל`
  (929), κῆρυξ `כָּרוֹז` (939), ἥρως `הֵרוֹאִי` (970), ἐπιείκελος `דְּמוּי־` (968), νειός `נִיר` (971), ἀφνειός `עָשִׁיר`
  (974), δαίμων `דַּיְמוֹן` (991), ναός `מִקְדָּשׁ` (990), μογέω `סָבַל` (997), ἆθλος `מִבְחָן` (951), ὑπερήνωρ `שַׁחֲצָן`
  (995), μάχη (with πόλεμος) `מַאֲבָק` (926).
- **Recorded splits and pairs** (for `lexmap`): μείρομαι `נָחַל` / εἵμαρτο `נִגְזַר`; μένος `זַעַף` / `עָצְמָה`; κορυφή
  `פִּסְגָּה` / `קָדְקֹד`; ἄγω `לָקַח לוֹ` (mid.) / `הוֹלִיךְ`; νόσφι `הַרְחֵק מִן` / `מִלְבַד`; pairs: νέος / ὁπλότατος
  `צָעִיר`, εὐνάω / παραλέχομαι `שָׁכַב`, πλοῦτος / ἄφενος `עֹשֶׁר`, παῖς (f.) / θυγάτηρ `בַּת`.

### For the Works and Days
- **Pandora's dressers** (WD 73–76): Χάριτες `הֶחָרִיטוֹת`, Πειθώ `שִׁכְנוּעַ`, Ὧραι `הַהוֹרוֹת` (vocalized), καλλίκομος
  `נְאַת־הַשֵּׂעָר` (WD 75 Ὧραι καλλίκομοι), ἠΰκομος `יְפַת־הַשֵּׂעָר`; αἱμύλος `חֲלַקְלַק` (WD 78 αἱμυλίους λόγους, 374).
- **Justice and peace** (WD 213–285): Δίκη `מִשְׁפָּט` (name), δίκη `מִשְׁפָּט`, δίκαιος `צַדִּיק` / `צֶדֶק`; Εἰρήνη / εἰρήνη
  κουροτρόφος (WD 228) `שָׁלוֹם` (with `מְגַדֶּלֶת־הַנְּעָרִים`, TH 450); Εὐνομίη `סֵדֶר־טוֹב`; the Moirai as here.
- **Wealth and work** (WD 22–24, 313, 637): πλοῦτος `עֹשֶׁר`, ἀφνειός `עָשִׁיר`, ὄλβος `שֶׁפַע`, ὀπάζω `זִכָּה`; νειός `נִיר`
  (WD 463–464: the fallow ploughed again), τρίπολος; ἐσθλός `טוֹב`.
- **Spirits and heroes** (WD 121–126, 141, 156–173): δαίμων `דַּיְמוֹן` (proposed); ἥρως `הֵרוֹאִי` / ἡμίθεος
  `חֲצִי־אֵלִים` (renderings §5: Gen 6:4 in the note only); θεοῖς ἐπιείκελος `דְּמוּי־אֵלִים`; ἀνὴρ θνητός `אִישׁ
  בֶּן־תְּמוּתָה`; ἀπήμαντος `בְּלִי פֶּגַע`, ἀγήραος `שֶׁאֵינוֹ מַזְקִין`; the Isles of the Blessed (WD 171) – νῆσος `אִי`.
- **Craft and ships** (WD 25, 618–694): τέκτων – I used `אָמָּנִית` for the feminine (929o); for WD 25 (τέκτονι τέκτων)
  suggest `חָרָשׁ` (the LXX's τέκτων, Isa 41:7); ναῦς `אֳנִיָּה`, ὠκύς `מָהִיר`; ἁλμυρός `מָלוּחַ`; ἤπειρος `יַבָּשָׁה`.
- **Marriage** (WD 405–406, 695–705): ἄλοχος `בַּת־זוּג`, ἄκοιτις `רַעְיָה`, γαμέω `נָשָׂא אִשָּׁה`, ἄγομαι `לָקַח לוֹ`;
  φῦλον γυναικῶν `שֵׁבֶט הַנָּשִׁים`.
- **Zeus' epithets**: ὑψίζυγος `רַם־הַכֵּס` (WD 18), ὑψιβρεμέτης `הָרוֹעֵם מִמָּרוֹם`, μητίετα `רַב־הַתְּבוּנָה` (WD 104,
  273, 769), αἰθήρ `אֶתֶר` (vocalized; WD 18 αἰθέρι ναίων `הגר באֶתֶר`).

### Lessons for the guidelines
- **A gate on a short root catches vocalization-only homographs** (`הדור` "the generation" / `הָדוּר` "splendid"): the gate
  reads unvocalized letters; a translator should know the list of such homographs before drafting (`הדור`, `מקדש`).
- **The first-occurrence vocalization rule depends on the treebank's lemma**: a garbled lemma (993 Αἰονίδης) makes a later
  copy the "first". Vocalize every name in a new section's first appearance anyway.
- **Two near-synonyms in one line** (πόλεμοι … μάχαι, 926) break a recorded pair: plan the second word with `lexmap`'s
  reverse view, since the obvious one (`קְרָב`) is usually taken (ὑσμίνη).
- **Galen's lines as a parallel version**: translating them with the main text's exact vocabulary makes the comparison
  visible in Hebrew; worth stating as a rule for any second witness (papyri, quotations).

## Review pass (a): fidelity

**Date:** 2026-10-24. **Reviewer:** fidelity reviewer (pass a), one sub-session, the whole poem (1–1022 + 929a–t).

### What was checked
- Every line read against its Greek (label | Greek | `>` line, in chunks of ~100): each content word accounted for,
  nothing added outside `( )`, case relations, person and number, the speaking names and the fixed epithets, the
  enjambment (words kept in their own line), the base's marks (`{חשודה}` at 111, 118, 196, 323–324, 496, 576–577, 591,
  774, 929s, 1014; `{גלנוס}` at 929a–t: all in place).
- Scripted cross-checks against the treebank and the Greek: every negation (Greek οὐ/μή/οὐδέ/ἄτερ/νόσφι… ↔ Hebrew; all
  present, the alpha-privatives rendered as `שאין`/`בלי`/`בלתי`); every optative and subjunctive (57 forms: all moods
  right – purpose, general relative, potential, oblique); every imperfect (≈150 forms: all past or `הָיָה` + participle,
  except 910, fixed); every present and perfect indicative (≈190: all present, or a resultative past where the Hebrew
  perfect carries the result, e.g. 728 `צמחו`); every iterative in -σκ- (157, 207, 209, 533, 835: 835 fixed); every
  `("…")` segment of every פירוק against its `>` line (all consistent; the remaining mismatches are only plene vs.
  vocalized spellings, e.g. `גִּיֵּס` / "גייס").
- `hesiod_tools.py verify TH --strict`: 0 problems after each change; `check_bible_quotes.py` on the annotated file: 0
  problems.

### Result: 5 lines changed (the translation is very faithful; no omission, no unmarked addition of substance)
**Tense and aspect (renderings §4)**
- **835** `ופעם שוב שרק` → `ופעם שוב היה שורק`: ῥοίζεσχʼ is an iterative in -σκ-, which §4 renders `הָיָה` + participle
  "always" (the only -σκ- form in TH that had been missed). פירוק updated.
- **910** `נוטף חשק` → `היה נוטף חשק`: εἴβετο is an imperfect of habit (the only imperfect in TH rendered as a present);
  911 switches to the present (δερκιόωνται `מביטות`), as the Greek does. פירוק updated.

**A participle turned into a main verb**
- **1006** `ולפֵּלֵאוּס נכנעה הָאֵלָה תֶּטִיס …,` → `ולפֵּלֵאוּס, משנכנעה, הָאֵלָה תֶּטִיס …` (no final comma): δμηθεῖσα is an
  aorist passive participle; the draft made it a finite verb standing asyndetically beside 1007's `הולידה` (two main
  clauses). Now as 453 and 1000 (`משנכנעה`). פירוק updated.

**An addition**
- **997** `שב אל יָאוֹלְקוֹס` → `הגיע אל יָאוֹלְקוֹס`: ἀφίκετο is "arrived"; there is no ἄψ, so "returned" added a sense
  not in the Greek. The note had justified `שָׁב` by 652, but there `ושבתם` renders ἂψ ἀφίκεσθε together. Now as
  ἱκνέομαι `הגיע` (193, 285). פירוק and note updated.

**A crux mark missing**
- **304** `נעצרה` → `נעצרה?`: the note already called ἔρυτο disputed ("keeps guard" / "is confined") and said the mark was
  in the line, but it was not (guidelines §6.8: a crux is marked `?`, the alternatives in the apparatus). פירוק and note
  updated.

### Recurring patterns
- Very few: the translators checked moods and negations carefully. The slips were all of one kind – a **single form
  that departs from a rule applied correctly everywhere else** (one iterative, one imperfect, one participle), and
  **a note that justifies a choice by a parallel that is not parallel** (997 ← 652) or **announces a mark that the line
  lacks** (304). A scripted check per grammatical class (the treebank's postag) finds these in minutes; worth adding as
  a `verify` report (imperfects without `היה`/past, -σκ- forms without `היה`).

### Choices left as they are (defensible; noted for the user)
- 289 ἐξενάριξε `הפשיט` and 325 εἷλε `תפסו`: literal ("stripped", "took"), where the usual translations say "slew"; both
  notes explain. 728 πεφύασι `צמחו` (perfect as a resultative past). 927–928 `כי השתוללה` (Greek καί … καί; the causal
  reading is Evelyn-White's too).

### Open points for the coordinator / the user
- **963** χαίρετʼ = `שִׂמְחוּ` against renderings §11.1 χαίρετε `שָׁלוֹם לָכֶן` (104). The note's reason ("`שלום` is
  reserved for Εἰρήνη, 902") contradicts 104's `שלום לכן`. Not changed (a consistency question for pass b): either
  963 follows §11.1 (`שלום לכם`, masculine), or §11.1 records the split (greeting 104 / farewell 963).
- **renderings §3.1, the Τυφωεύς row**: "Τυφῶν (Th. 306, 869) `טִיפוֹן` where the line has that form" – 306 has
  Τυφάονα and 869 Τυφωέος, so no TH line has Τυφῶν; the lines rightly use `טיפואוס`. The row's note should be corrected.

## Review pass (b): consistency

**Date:** 2026-10-24. **Reviewer:** consistency reviewer (pass b), one sub-session, the whole poem (1–1022 + 929a–t).

### What was checked
- **One lemma = one Hebrew word:** `hesiod_tools.py lexmap` over the whole file (567 lemmas with more than one Hebrew
  string, most of them inflection and prefixes): filtered by a script that compares the Hebrew skeletons, leaving 144
  lemmas, each read against renderings §5, §11.1–§11.5 and the project.md "Decisions" / "Recorded splits" lists; the
  reverse list (one Hebrew word for several lemmas), and a second reverse scan on prefix- and suffix-stripped Hebrew
  (275 groups, mostly homographs and one-root families). The bindings of §5 and §11 were compared by script with the
  words actually used (no deviation besides those below).
- **Formulas and epithets:** `verify` (F1–F34) and, by hand, the phrases the regexes do not cover: "the immortal gods"
  (`הָאֵלִים בני־האלמוות`, 17 lines), "the blessed gods" (`הָאֵלִים המאושרים`), the counsels and mind of Zeus, the speech
  introductions (`כך אמר`, `אז אמר אליו`), "father of gods and men" (F1/F2), Kronos' son (`בן־קרונוס` / `בן קרונוס` 660,
  recorded), the night and dawn epithets (`לילה המשחיתה` 224 = 757, `השחורה`, `האפלה`, `שחר`, `בת־הבוקר`), the
  daughters of Zeus, the broad sky (`שמים הרחב` only where the base capitalizes Οὐρανός: 45, 702), and every compound
  epithet with and without the article inside (`X־Y` / `X־הY`).
- **Repeated and near-repeated lines:** §9 (verify: 0 differences); every pair of lines sharing a 4-word Greek sequence
  (54 groups) and every pair with difflib ≥ 0.6 (47 pairs), across the two translators' halves.
- **Names:** every capitalized word's Hebrew in the פירוק, grouped by lemma: one form each; the §7.3 traps and Γύης
  vocalized everywhere (verify).
- **963 χαίρετʼ** (the open point of pass a) – decided below.
- **Apparatus:** the Gen 6:4, Gen 1:21 / κήτη, δράκων / ὄφις notes (50, 148, 185, 238, 299, 322, 336, 609, 825, 968);
  section references to `renderings.md`; `[מקבילה: TH n]` at every §9 repeated line.
- After each batch `verify TH --strict`: 0 problems; at the end `check_bible_quotes.py` on the annotated file: 0
  problems.

### Result: 28 lines changed (each with its פירוק and notes)
**One lemma, two Hebrew words (slips to the binding or first-fixed word)**
- **μάχη = `מַאֲבָק`** (§11.5): **228** `ואת מלחמות` → `ואת מאבקים` (the translated name follows the noun, §3.2);
  **666** `ומלחמה שאין לקנא בה` → `ומאבק שאין לקנא בו`; **711** `ונטתה המלחמה` → `ונטה המאבק`; **713** `מלחמה חריפה`
  → `מאבק חריף`. Before, μάχη shared `מִלְחָמָה` with πόλεμος (431, 638, 665, 714, 926, 936) everywhere but 926; the 926
  note updated.
- **χρύσεος = `זָהוֹב`** (§11.1; 12, 216, 822 …): **283** `חרב זהב` → `חרב זהובה`; **578** `עטרת זהב` → `עטרה זהובה`;
  **785** `בקיתון של זהב` → `בקיתון זהוב`; **933** `בארמונות זהב` → `בארמונות זהובים`.
- **δεινός = `אָיֹם`** (§5): **678**, **743** δεινόν `ונורא` → `ואיום` (`נוֹרָאָה` is ἐπαινή's, 768 = 774, §11.4).
- **ἱκνέομαι = `הִגִּיעַ`** (193, 285, 554 …): **481** ἷκτο `באה` → `הגיעה`; **754** ἵκηται `תבוא` → `תגיע` (`בא` is
  ἔρχομαι's).
- **διὰ βουλάς = `בעצות`** (572, the first copy of WD 71, binding; = βουλῇσι 730, 960, 993): **465** `בשל עצות` →
  `בעצות`; **653** `בזכות עצותינו` → `בעצותינו`.
- **ἀέξω:** **444** `להרבות` → `להגדיל` (the root of `גדל`, 195, 524, 641; the causative is the hiphil).
- **963 χαίρετʼ** `שִׂמְחוּ` → `שלום לכם` – **decided: aligned with 104** (`שלום לכן`, §11.1). Both are the hymnic
  χαίρετε, greeting (104) and farewell (963), the formula that closes the Homeric Hymns; the LXX renders `שָׁלוֹם` by
  χαίρειν (Isa 48:22, the 104 note). The gender changes as the Greek does (ἔχοντες: the gods). χαίρω "rejoice" keeps
  `שָׂמַח` (438): a recorded sense split. The phrase `שָׁלוֹם לְ־` beside the name Εἰρήνη `שָׁלוֹם` (902) is a greeting
  and a name, as in Hebrew itself (the 963 note's reason for `שִׂמְחוּ` withdrawn). Cross-references 104 ↔ 963 added.

**One Hebrew word, two lemmas (collisions resolved; the earlier / binding word kept)**
- **φθείρω / ὀλοός:** **876** `ומשחיתות מלחים` → `ומאבדות מלחים`, **879** `משחיתות את המעשים` → `מאבדות את המעשים`:
  the participle was ὀλοός's `מַשְׁחִית` (224, 326, 501, 591, 604, 757, translator 1, first). φθείρω = `אִבֵּד` (grepped
  `--all`: unused); `כִּלָּה` was tried first and is rightly blocked by the `כלה` gate (`כַּלָּה`).
- **"full year" and `תָּמִים`** (REQUIRED for ἄμωμος, 259): **636** πλείους `שנים תמימות` → `שנים מלאות` (πλέως "full");
  **740** τελεσφόρον, **795** τετελεσμένον `שנה תמימה` → `שנה שלמה` (the τελ- family: τελέω `הִשְׁלִים`, τελήεις
  `שָׁלֵם` 242); **803** ἐννέα πάντα ἔτεα `תשע שנים תמימות` → `כל תשע השנים` (πᾶς `כל`).
- **εὐρύς / πλατύς:** **445** πλατέʼ `הרחב` → `המשתרע`.
- **ὠκύς / καρπάλιμος:** **492** `ובמהירות` → `וחיש` (`מָהִיר` is ὠκύς's, 266, 269, 998).
- **ἔρχομαι / γίγνομαι:** **741** γένοιτο `בא` → `נמצא` (`בפנים השערים`), a recorded sense of γίγνομαι ("come to be in a
  place"; not `נהיה`, not ἔρχομαι's `בא`).
- **652** `ושבתם` → `והגעתם שוב`: ἀφίκεσθε `הגיע` (997, as pass a fixed it) + ἄψ `שוב` (169); `ושבתם` also carried the
  reserved string `שבת`, which the gate's word list does not catch (open point).

**Near-repeats**
- **483** `תחת מחבואי` → `במחבואי` (= 300, ζαθέης ὑπὸ κεύθεσι γαίης); **681** `והרעש הכבד הגיע` → `ורעש כבד הגיע` (the
  same half-line as 849 `ורעש שאין לו כיבוי קם`, which has no article). Cross-references added.

**Apparatus only (no `>` line changed)**
- `renderings §1` cited for the gates (no such section) → `§7` in 822, 825, 850, 869, 880, 991; 825 now refers to 322
  (δράκων with ὄφις first); 185 `השבעים:` → `ובשבעים:` as 50 (Gen 6:4); 968 refers to 148 (ὀνομαστοί) and 609 (ἀπʼ αἰῶνος);
  forward `[מקבילה: TH n]` added at the first copies 46, 118, 150, 152, 154, 519, 737, 738, 739 (every later copy already
  pointed back).

### Splits and pairs recorded (checked and left; for `lexmap`)
- **Sense splits:** παῖς – a child / children `יֶלֶד` (138, 155, 162 …), a son named with his parent `בֵּן` (178, 464, 472,
  509, 565, 746, 821, 897, 981: both translators, consistently), a boy `נַעַר` (989), a daughter `בַּת` (952); γείνομαι
  mid.-pass. "be born" `נוֹלַד` (82, 202, 219); αἱρέομαι "choose" `בָּחַר` (549); λανθάνω "escape notice" `נִסְתַּר` (471,
  929n) / λανθάνομαι "forget" `שָׁכַח` (547, the λαθ- family §11.1); φράζομαι "devise" `הָגָה` (160); ὄρνυμι of a sound
  `עָלָה` (70), transitive `הֵעִיר` (523); χαίρω `שָׂמַח` / χαίρετε `שָׁלוֹם לְ־`; and the splits translator 2 recorded
  (μένος, κορυφή, ἄγω, νόσφι, δαίς, καίω, κέλομαι 686, ῥύομαι, μείρομαι / πόρω `נִגְזַר`).
- **Pairs sharing a Hebrew word (Hebrew has one natural word):** πόντος / θάλασσα `יָם`; ἔτος / ἐνιαυτός `שָׁנָה`;
  κραδίη / ἦτορ `קֶרֶב`; ἄντρον / σπέος `מְעָרָה`; καίω / αἴθω `בָּעַר`; ἀνάσσω / ἐμβασιλεύω `מָלַךְ`; ἰωχμός /
  κολοσυρτός `מְהוּמָה`; βάλλω (515, "hit with a missile") / πλήσσω (855) `הִכָּה`; ἄγω / λαμβάνω `לָקַח`; the families
  ἱκνέομαι / ἱκάνω / ἀφικνέομαι `הִגִּיעַ`, δέχομαι and compounds `קִבֵּל`, ὅμοιος / ἔοικα / ἴκελος / ἐναλίγκιος `דּוֹמֶה`.
- **Root-sharing pairs (different words):** μάχη `מַאֲבָק` / μάρναμαι `נֶאֱבַק`; ταχέως `מַהֵר` (103) / ὠκύς `מָהִיר`;
  μῦθος `דָּבָר` / λέγω `דִּבֵּר`; φθισήνωρ `מַשְׁמִידַת־` (431).
- **Homographs (no conflict):** `קְרָב` ὑσμίνη / `קֶרֶב` ἦτορ; `קֶצֶף` ἀφρός / `קָצַף` ὀδύσσομαι; `עֵז` χίμαιρα / `עַז`
  κρατερός (322 vocalized); δαΐ / δαίς (650, 674 / 802); `מְקוֹרוֹת` κατηρεφής / πηγή; `שָׁם` / `שֵׁם` / `שָׂם`.
- **Compound epithets:** the article inside follows the noun's definiteness (`חיצים מעוררי־אנחה` 684 / `המבחנים
  מעוררי־האנחה` 951; `צאצאים קשי־לב` 308 / `אַטְלָס, בן קשה־הלב` 509): consistent in both halves, Hebrew grammar, left
  (a first normalization of 308, 456, 719, 765, 770 was reverted). ἀκάματος `בלי לאות` / `האש שאין לה לאות` (563, 566:
  the same noun in a relative clause, the fixed phrase of fire) left.
- **648** `ואנו, כל אשר נולדנו` against 630 = 668: the pronoun of the Greek 1st person, recorded in its note; left.

### Recurring patterns
- The two halves agree remarkably: the formulas, the fixed epithets, the names and the §9 lines are identical across the
  translators. The slips are of two kinds: **a word fixed late and not carried back** (μάχη `מַאֲבָק` decided at 926, after
  228, 666, 711, 713; φθείρω `הִשְׁחִית` chosen in part 4 without checking ὀλοός's `מַשְׁחִית` of part 1), and **an
  idiomatic Hebrew phrase that silently reuses a fixed word** (`שנה תמימה` taking ἄμωμος's `תָּמִים`; `חרב זהב`
  beside the epithet `זָהוֹב`; `בא` for three verbs of arrival). `lexmap` shows both only after its inflection noise is
  filtered: a skeleton filter (prefixes, suffixes, matres) cuts 567 entries to 144 and would be worth building into the
  tool.

### Open points for the coordinator / the user
- **The `שבת` gate** lists `שבת|השבת|שבתו|שביתה|שבתה|שבתון|וישבות|שבות` + prefixes: `ושבתם` (652) passed it. Either the
  list grows (`שבתם`, `שבתי` …: then `שַׁבְתֶּם` "you returned" needs vocalization or another word, as here), or the reviewer
  greps it by hand. Not edited (reported).
- **renderings §6** asks for a note at TH 238 on the range of κῆτος in the LXX (`לִוְיָתָן` Job 3:8, `רַהַב` Job 9:13,
  26:12, `דָּג גָּדוֹל` Jonah 2:1); 238 has only Gen 1:21. Not added: `lxx_verses.py show job …` / `jonah …` fails in this
  checkout (the Rahlfs files for those books seem missing), so the Greek could not be quoted.
- **For pass (c):** 485 `משחיתלה` (= מִשֶּׁחִתְּלָה) reads unvocalized as `משחית לה`; part 5 vocalizes some non-trap names
  again after their first occurrence (קִיתֵרֵיאָה 196, 934, 1008), harmless. 966 must keep `הָאוֹלִימְפִּיּוֹת` vocalized:
  the treebank lemmatizes Ὀλυμπιάδες differently at 25 and 52, so `verify` counts 966 as the first occurrence.
- **For the Works and Days:** φθείρω is now `אִבֵּד` (the WD proposal `הִשְׁחִית` in "TH 617–885" is withdrawn); WD's
  ὄλλυμι (8 lines) then needs its own word (`הִשְׁמִיד` is the stem of φθισήνωρ `מַשְׁמִידַת־הָאֲנָשִׁים`, 431: check).

### Proposed renderings updates
- **§5 / §11.5:** μάχη `מַאֲבָק` everywhere (not only beside πόλεμος); **§11.2:** the translated name Μάχαι `מַאֲבָקִים`
  (228), replacing `מִלְחָמוֹת`. πόλεμος `מִלְחָמָה`; μάρναμαι `נֶאֱבַק` (root shared with μάχη: recorded).
- **§11.1:** χαίρετε (greeting and farewell) `שָׁלוֹם לָכֶן` / `שָׁלוֹם לָכֶם` (104, 963); χαίρω "rejoice" `שָׂמַח` (438).
- **§11.1:** χρύσεος `זָהוֹב` of objects too (`חרב זהובה`, `עטרה זהובה`, `ארמונות זהובים`), never the construct `זהב`.
- **§11.4 / §13 (WD):** φθείρω `אִבֵּד` (876, 879), replacing `הִשְׁחִית`; ὀλοός `מַשְׁחִית` (224).
- **§5:** `תָּמִים` only for ἄμωμος (REQUIRED); "a full year": τελεσφόρος / τετελεσμένος ἐνιαυτός `שָׁנָה שְׁלֵמָה`,
  πλέως `מָלֵא` (636).
- **New words:** πλατύς `מִשְׂתָּרֵעַ` (445); καρπάλιμος `חִישׁ` (492); ἀέξω transitive `הִגְדִּיל` (444, intransitive
  `גָּדַל`); γίγνομαι of a place `נִמְצָא` (741, a sense split); διὰ βουλάς `בַּעֲצוֹת` (465, 572, 653).
- **§5:** δεινός `אָיֹם` also as the adverb δεινόν (678, 743); ἱκνέομαι `הִגִּיעַ` in every form (481, 754); **παῖς**: the
  row should record the split `יֶלֶד` (child) / `בֵּן` (a son named with his parent) / `נַעַר` (989) / `בַּת` (952).
- **§3.1, the Τυφωεύς row:** already corrected after pass (a).

## Review pass (c): Hebrew

**Date:** 2026-10-24. **Reviewer:** Hebrew reviewer (pass c), one sub-session, the whole poem (1–1022 + 929a–t) and the
intro.

### What was read
- The generated `translation-TH.rtl.md` from start to end, section by section, as a Hebrew reader (aloud in the head),
  with the Greek and the פירוק opened for every line in doubt; the intro `translation--intro-TH.rtl.md`.
- Looked for: syntax broken across enjambed lines, agreement (Sky masculine, the moon feminine, the translated names),
  missing or doubled `את`, dangling clauses, unvocalized homographs, Modern senses that mislead, register slips,
  unintended biblical calques; the spelling (plene, unvocalized; partial vocalizations checked).
- The list of all 2,368 distinct unvocalized words of the translation, read once for defective spellings.
- After the batch: `build TH`, `verify TH --strict` (0 problems); at the end `check_bible_quotes.py` on the annotated
  file, the intro and the translation (0 problems).

### Result: 52 lines changed (the `>` line and its פירוק parentheses), one heading, the intro
The binding words, the formulas (F9 at 762, F34 at 376 kept) and the repeated lines (526 = 950 changed together) are
untouched; no meaning changed.

**Unvocalized homographs: the one ambiguous word vocalized (28 lines)**
- **91** `מרצים` → `מְרַצִּים` (Modern "lecturers"); **126** `הרי` → `הֲרֵי` (`הָרֵי` "mountains of": the next lines are
  the mountains); **129** `נאות־החן` → `נְאוֹת־החן` ("graceful haunts", not `נָאוֹת` "pretty"); **209** `שבמתחם` →
  `שבְּמָתְחָם` (Modern `מִתְחָם` "compound"); **279** `בכר` → `בְּכַר` (not `בֶּכֶר` "young camel"); **300** `אוכל־נא` →
  `אוכל־נָא`, **311** `אוכל־הנא` → `אוכל־הַנָּא` (`נא` "please"); **330** `בחנותו` → `בַּחֲנוֹתוֹ` (not "in his shop");
  **480** `ולאמנו` → `וּלְאָמְנוֹ` (not "to our mother"); **485** `משחיתלה` → `מִשֶּׁחִתְּלָה` (read `משחית לה`: the point of
  pass b); **523** `והעיר` → `וְהֵעִיר` (not "and the city"); **551** `ורעות` → `וְרָעוֹת` (not `רְעוּת` "friendship");
  **594** `מקורות` → `מְקֹרוֹת` ("roofed", not "sources"); **597** `ושמות` → `וְשָׂמוֹת` (not "names"); **637**
  `האנוש`, **800** `אנוש` → `אָנוּשׁ` (not `אֱנוֹשׁ`, the binding word for βροτός); **679**, **693** `המתה` → `הָמְתָה`
  (`והארץ המתה` read "and the dead earth"); **748** `בקרבן` → `בְּקָרְבָן` (not `קָרְבָּן` "sacrifice"); **764** (×2),
  **898** κραδίη / ἦτορ `קרב` → `קֶרֶב` (`קרב של ברזל`, `בעל קרב פראי` read "battle"); **839** `ורעם רעם` → `וְרָעַם
  רעם`; **951** `און` → `אוֹן` (as 332 already had it; not `אָוֶן` "iniquity").
- **The epithets with `נאות`:** **384**, **507**, **526**, **950** καλλίσφυρος, **409** εὐώνυμος `נאות־` → `נְאוַת־`
  (the construct of `נָאוָה`; unvocalized it reads the plural `נָאוֹת`). The binding `נְאוַת־הַקַּרְסֻלַּיִם` strips to
  `נאות`, so the plene `נאוות` is not open; vocalizing passes the gate and reads right.

**Vocalization corrected:** **708** `שְׁלָחֵי` → `שִׁלְחֵי` (the construct plural of the segolate `שֶׁלַח`).

**Spelling (plene):** **100** `תהלות` → `תהילות`; **475** `ייהיה` → `יהיה`; **894** `שייהיו` → `שיהיו`; **433**,
**628**, **647** νίκη `נצחון` → `ניצחון`, and the heading of 383–403. The name Νίκη (384, its only capitalized
occurrence and so its first) is written vocalized `נִצָּחוֹן`: the names table's string strips to the defective `נצחון`
(see the open points).

**Grammar and syntax**
- **216** `שתפוחים … / הזהובים והיפים` → `זהובים ויפים` (the noun is indefinite).
- **278** `ועם האחת שכב לצדה` → `ולצד האחת שכב` (παρελέξατο: the preposition was doubled).
- **524** `והוא את הכבד … היה אוכל, והוא היה גדל` → `וזה היה גדל` (τὸ δέ: the second `והוא` read as the eagle).
- **568** `והזעימה אותו` → `והזעים` (the subject is 567's `(הדבר)`).
- **700** `ונראה היה, מול` → `ונראה היה, (לעומד) מולו,` (ἄντα: the preposition dangled at the line end).
- **720** `כה עמוק … כמה שהשמים רחוקים` → `כמו שהשמים` (`כמה ש־` is colloquial here).
- **741** `בפנים השערים` → `בתוך השערים` (ἔντοσθε + genitive; `בפנים` takes no complement).
- **762** `האחד את הארץ ואת גבי הים הרחבים / מתהלך` → `האחד על פני הארץ ועל גבי הים הרחבים` (`התהלך` is not
  transitive; F9 kept).
- **830** `וקולות … / משלחות נעימה` → `משלחים` (the Hebrew noun is masculine; φωναί is not a name).
- **855–856** `ומסביב את כל / הצית את הראשים האלוהיים של המפלצת האיומה` → 856 `ראשיה האלוהיים של המפלצת האיומה הצית`
  (two `את` for one object; the verb moves to the end, for the grammar only).
- **883–884** `דחקו בו להיות למלך … / … את זאוס` → `דחקו להיות למלך … / … בזאוס` (two objects for one verb).

**Clarity**
- **156** `מיד כשנהיה,` → `מיד כשנהיה –` (the anacoluthon of 156–157 marked).
- **213** κοιμηθεῖσα `בלי לנום עם איש` → `בלי לשכב עם איש` (`נם` is "doze"; κοιμάω's only line).
- **376** `ואת פלס, הנהדרת באלות` → `ואת פלס, (היא) הנהדרת באלות` (δῖα θεάων is Eurybia's, the subject of 375; it read as
  Pallas's epithet).
- **767** πρόσθεν `לפנים` → `מלפנים` (Modern `לְפָנִים` "formerly"; as 323).

**An unintended biblical calque:** **836** `והיה ביום ההוא מעשה` → `וביום ההוא היה נעשה מעשה` (`וְהָיָה בַּיּוֹם
הַהוּא` is the prophetic formula, Isa 7:18 and often, and read as a future; the Greek is a past unreal condition, ἔπλετο
κεν, answered by 837–838 `היה מולך … לולא`).

**The intro** (content kept): plene `מילה` (×4, and the sign `*מילה*`); `שזורים רשימות` → `שזורות`; Kronos "castrates"
Sky (`נעקר` read "uprooted"); "Prometheus at Mekone" (not "the story of Prometheus and Mekone"); "the succession myth"
explained in words; `את אֶתֶר ואת יום` (the names without the article, as in 124); the two reasons numbered; the
Greek of Hesiod "an early stage" of the LXX's language; one sentence added: the translated names keep the gender of the
Greek name (`לילה השחורה`, `מדון המתועבת`), which a Hebrew reader would otherwise take for a slip.

### Recurring patterns
- The Hebrew reads well; the faults were local. The commonest was the unvocalized homograph (28 lines), above all
  where a Modern word shadows the literary one (`מרצים`, `מתחם`, `בחנותו`, `לפנים`, `קרב`).
- Agreement slips came from the Greek gender carried into a Hebrew common noun (830) or from an anaphor whose subject
  was in a parenthesis (568).
- Doubled objects or prepositions where the Greek has a pronoun and a noun (278, 855–856, 883–884).

### Left as they are (defensible; noted)
- **89** `משלימים הם מעשי השבה`, **466** `לא החזיק במצפה כעיוור`, **728** `שורשי הארץ ושל הים העקר`, **147 = 154 = 421**
  `מן ארץ ושמים`: stiff but literal and grammatical.
- **503** `זכרו לו חן` (the idiom is `זכרו לו טובה`; χάρις `חן` kept); **580** `לשאת חן בעיני זאוס` (Esth 2:15, but a
  common Modern idiom); **667** `נקבות וזכרים` (θῆλυς `נְקֵבָה` binding).
- **794 = 118** `מי … / בני־האלמוות` lacks the partitive `מבין` at 794; it is the copy of a repeated line.
- **129** `את הרים הארוכים`: the name without the article, by §3.2.
- Unvocalized `אל` before a name (198, 477, 482, 515) reads as the preposition in context.

### Open points for the coordinator / the user
- **οὐλόμενος `המבלה`** (225 `זקנה המבלה`, 593 `לעוני המבלה`): the Modern reader hears `מְבַלֶּה` "having a good
  time"; vocalization does not help. The natural word, "accursed" (`הָאֲרוּרָה`), is closed by the root ארר gate
  (§7.1). Not changed; a word for the user (e.g. `הַמְּכַלָּה`, "consuming").
- **Αἰθίοπες `כּוּשִׁים`** (985; names table §3.1): in Modern Hebrew `כושים` is a slur for Black people. Not changed (the
  table is binding); possible: `מלך כּוּשׁ` (the land, as the 985 note already says) or `אֶתְיוֹפִּים`.
- **The names gate and plene spelling:** the table's `נִצָּחוֹן` strips to the defective `נצחון`, so the name needs
  niqqud wherever it occurs, and `lexmap` now shows νίκη as `נצחון` (384) / `ניצחון` (433, 628, 647) – a spelling
  difference only. A plene table string (as was done for `צוֹלֵעַ־הָרַגְלַיִים`) would remove it.
- **`אשה` vs `אישה`:** the Academy's plene spelling is `אישה`, but the corpora of this folder write `אשה` (161 lines
  against 24); kept for consistency (513, 604, 610, 819, 960, 977, the heading of 570–616). A folder-wide decision.
- **The gender of the translated names** follows the Greek (`לילה השחורה`, `מדון המתועבת`, 231–232 `שבועה … מזיק`, 748–749
  `לילה ויום … פונות`); now stated in the intro. If the user prefers Hebrew gender, it is a mechanical change.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (TH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4 | ὀρχεῦνται καὶ βωμὸν ἐρισθενέος Κρονίωνος. | רוקדות, וסביב מזבח בֶּן־קְרוֹנוֹס רב־העוצמה. | — | divergence | `βωμός` – המלה הרגילה למזבח ביוונית, והשבעים נמנעים ממנה בכוונה כשמדובר במזבח לאלוהי ישראל: במזבח של נח הם כותבים θυσιαστήριον (בראשית ח:כ), ו־βωμός שמור אצלם למזבחות נוכריים (`../renderings.md` §6, הסוג ג). כאן `מזבח` הוא המלה הטבעית, ו"ההימנעות" של השבעים היא הממצא. |
| 21 | ἄλλων τʼ ἀθανάτων ἱερὸν γένος αἰὲν ἐόντων. | ואת הגזע הקדוש של שאר בני־האלמוות, הקיימים תמיד. | `אֱלָהָא חַיָּא וְקַיָּם לְעָלְמִין` (דניאל ו:כז) | equivalent | "הקיים לעולמים" כתואר של האל; מוטיב משותף (הנצחיות כהגדרת האלוהות), בלי קשר בין הטקסטים. |
| 23 | ἄρνας ποιμαίνονθʼ Ἑλικῶνος ὕπο ζαθέοιο. | כשהוא רועה טלאים למרגלות ההליקון המקודש. | `וּמֹשֶׁה הָיָה רֹעֶה אֶת צֹאן יִתְרוֹ חֹתְנוֹ` (שמות ג:א) | equivalent | השבעים: `Καὶ Μωϋσῆς ἦν ποιμαίνων τὰ πρόβατα` (השבעים, שמות ג:א): אותו פועל יווני, ποιμαίνω, ואותו רגע – רועה צאן ליד הר האל, והאלוהות פונה אליו ומשנה את ייעודו. |
| 23 | ἄρνας ποιμαίνονθʼ Ἑλικῶνος ὕπο ζαθέοιο. | כשהוא רועה טלאים למרגלות ההליקון המקודש. | `וַיִּקָּחֵנִי יְהוָה מֵאַחֲרֵי הַצֹּאן` (עמוס ז:טו); `וַיִּבְחַר בְּדָוִד עַבְדּוֹ וַיִּקָּחֵהוּ מִמִּכְלְאֹת צֹאן` (תהלים עח:ע) | equivalent | מוטיב משותף של "הקריאה": הרועה הנבחר. אין קשר בין הטקסטים; הדמיון מעיד על דפוס של סיפור הקדשה בעולם של רועים. |
| 27 | ἴδμεν ψεύδεα πολλὰ λέγειν ἐτύμοισιν ὁμοῖα, | יודעות אנו לדבר שקרים רבים הדומים ל(דברים) נכונים, | `וַיֹּאמֶר אֵצֵא וְהָיִיתִי רוּחַ שֶׁקֶר בְּפִי כָּל נְבִיאָיו` (מלכים א כב:כב); `וְהַנָּבִיא כִי יְפֻתֶּה וְדִבֶּר דָּבָר אֲנִי יְהוָה פִּתֵּיתִי אֵת הַנָּבִיא הַהוּא` (יחזקאל יד:ט) | divergence | גם במקרא מקור ההשראה יכול להטעות את הדובר בשמו; אבל שם ההטעיה היא עונש שהאל גוזר, וכאן היא יכולת שהמוזות מתפארות בה. מוטיב משותף, בלי קשר. |
| 30 | καί μοι σκῆπτρον ἔδον δάφνης ἐριθηλέος ὄζον | ונתנו לי שרביט, ענף של דפנה מלבלבת, | `וְאֶת הַמַּטֶּה הַזֶּה תִּקַּח בְּיָדֶךָ אֲשֶׁר תַּעֲשֶׂה בּוֹ אֶת הָאֹתֹת` (שמות ד:יז) | divergence | גם משה מקבל בהקדשתו מטה; אבל מטה משה עושה אותות, ושרביט הסיודוס הוא סימן של מי שזכאי לדבר. המלים היווניות שונות (השבעים: ῥάβδος), והמוטיב משותף. |
| 31 | δρέψασαι, θηητόν· ἐνέπνευσαν δέ μοι αὐδὴν | שקטפו, מרהיב־עין; והשרו בי נִיב | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | השבעים כותבים שם `καὶ ἐνεφύσησεν εἰς τὸ πρόσωπον αὐτοῦ πνοὴν ζωῆς` (השבעים, בראשית ב:ז): ἐμφυσάω, פועל אחר מ־ἐμπνέω של הסיודוס. האל מפיח באדם חיים; המוזות משרות במשורר קול. לכן `נָפַח` אינו בא בתרגום (`../renderings.md` §5, §7). |
| 31 | δρέψασαι, θηητόν· ἐνέπνευσαν δέ μοι αὐδὴν | שקטפו, מרהיב־עין; והשרו בי נִיב | `הִנֵּה נָתַתִּי דְבָרַי בְּפִיךָ` (ירמיהו א:ט); `וְאָנֹכִי אֶהְיֶה עִם פִּיךָ וְהוֹרֵיתִיךָ אֲשֶׁר תְּדַבֵּר` (שמות ד:יב) | equivalent | הנביא מקבל את הדיבור מן האל. מוטיב משותף של הקדשת דובר; בלי קשר. |
| 32 | θέσπιν, ἵνα κλείοιμι τά τʼ ἐσσόμενα πρό τʼ ἐόντα. | שֶׁל אֵלִים, למען אשבח את אשר יהיה ואת אשר היה מקודם. | `הָרִאשֹׁנוֹת מָה הֵנָּה הַגִּידוּ וְנָשִׂימָה לִבֵּנוּ וְנֵדְעָה אַחֲרִיתָן אוֹ הַבָּאוֹת הַשְׁמִיעֻנוּ` (ישעיהו מא:כב); `וְאֹתִיּוֹת וַאֲשֶׁר תָּבֹאנָה יַגִּידוּ לָמוֹ` (ישעיהו מד:ז) | equivalent | ובשבעים: `ἢ τὰ πρότερα τίνα ἦν εἴπατε … καὶ τὰ ἐπερχόμενα εἴπατε ἡμῖν` (השבעים, ישעיהו מא:כב); וכן . אצל ישעיהו היכולת לומר את "הראשונות" ואת "הבאות" היא מבחן האלוהות; אצל הסיודוס היא המתנה שהמוזות נותנות למשורר. |
| 32 | θέσπιν, ἵνα κλείοιμι τά τʼ ἐσσόμενα πρό τʼ ἐόντα. | שֶׁל אֵלִים, למען אשבח את אשר יהיה ואת אשר היה מקודם. | `מַה שֶּׁהָיָה הוּא שֶׁיִּהְיֶה` (קהלת א:ט); `מַה שֶּׁהָיָה כְּבָר הוּא וַאֲשֶׁר לִהְיוֹת כְּבָר הָיָה` (קהלת ג:טו) | equivalent | אותו זוג, עבר ועתיד, אבל כקביעה על מחזוריות העולם. מוטיב משותף; אין קשר. |
| 35 | ἀλλὰ τί ἦ μοι ταῦτα περὶ δρῦν ἢ περὶ πέτρην; | אבל מה לי כל אלה, סביב אלון או סביב סלע? | `אֹמְרִים לָעֵץ אָבִי אַתָּה וְלָאֶבֶן אַתְּ יְלִדְתָּניּ (יְלִדְתָּנוּ)` (ירמיהו ב:כז) | divergence | אם הפתגם היווני מדבר על בני אדם שנולדו מעץ ומאבן (הקריאה ב להלן), ירמיהו מכיר את אותה אמונה ולועג לה. מוטיב משותף של "עץ ואבן" כמוצא האדם; אין קשר. |
| 41 | Ζηνὸς ἐριγδούποιο θεᾶν ὀπὶ λειριοέσσῃ | של זאוס המרעים, מנעימת הָאֵלוֹת דמוית־השושן | `קוֹל יְהוָה עַל-הַמָּיִם אֵל-הַכָּבוֹד הִרְעִים` (תהלים כט:ג) | equivalent | האל הרועם: מוטיב משותף של אל הסערה בעולם הים־תיכוני (בעל האוגריתי "נותן קולו בעננים", מחזור בעל KTU 1.4 V 8; בתיק זה `../../מיתוסים-אוגריתיים/1-מחזור-בעל/`). זאוס הוא אל סערה מאותה משפחה של אלים; אין קשר ישיר בין הטקסטים. |
| 45 | ἐξ ἀρχῆς, οὓς Γαῖα καὶ Οὐρανὸς εὐρὺς ἔτικτεν, | מראשית, אשר ארץ ושמים הרחב ילדו, | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | equivalent | ובשבעים: `Ἐν ἀρχῇ ἐποίησεν ὁ θεὸς τὸν οὐρανὸν καὶ τὴν γῆν` (השבעים, בראשית א:א): אותה מלה, ἀρχή, ואותו זוג, שמים וארץ (οὐρανός, γῆ / γαῖα). מגע לשוני דרך השבעים (`../renderings.md` §6, הסוג א). |
| 45 | ἐξ ἀρχῆς, οὓς Γαῖα καὶ Οὐρανὸς εὐρὺς ἔτικτεν, | מראשית, אשר ארץ ושמים הרחב ילדו, | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | divergence | בבראשית השמים והארץ הם מה שנברא בראשית; כאן ארץ ושמים הם הורים, ו"מראשית" מציין את תחילת השושלת. ובסדר: אצל הסיודוס הארץ קודמת (116–127: הארץ יולדת את השמים). |
| 46 | οἵ τʼ ἐκ τῶν ἐγένοντο θεοί, δωτῆρες ἐάων. | וְאֵלֶּה שנהיו מהם, הָאֵלִים, נותני הטובות. | — | equivalent | `καὶ ἐγένετο φῶς` (השבעים, בראשית א:ג) – γίγνομαι, הפועל של הסיודוס להיווצרות האלים, הוא הפועל של השבעים ל"ויהי"; לכן `נִהְיָה` שמור ל־γίγνομαι (`../renderings.md` §5, §7). |
| 47 | δεύτερον αὖτε Ζῆνα, θεῶν πατέρʼ ἠδὲ καὶ ἀνδρῶν, | ושנית, שוב, את זאוס, אבי הָאֵלִים וגם האנשים, | `הֲלוֹא אָב אֶחָד לְכֻלָּנוּ הֲלוֹא אֵל אֶחָד בְּרָאָנוּ` (מלאכי ב:י) | divergence | האל כאב בני אדם; אבל זאוס אינו בוראם ואינו אביהם בפועל: "אב" הוא תואר של ראש המשפחה והשליט. מוטיב משותף. |
| 50 | αὖτις δʼ ἀνθρώπων τε γένος κρατερῶν τε Γιγάντων | ושוב את גזע בני האדם והַגִּיגַנְטִים העזים | `הַנְּפִלִים הָיוּ בָאָרֶץ בַּיָּמִים הָהֵם` (בראשית ו:ד) | equivalent | ובשבעים: `οἱ δὲ γίγαντες ἦσαν ἐπὶ τῆς γῆς` (השבעים, בראשית ו:ד): השבעים תרגמו את `הַנְּפִלִים` ואת `הַגִּבֹּרִים` במלה Γίγαντες – שמם של הגיגנטים של הסיודוס. מגע דרך השבעים בלבד; בשורה העברית `הַגִּיגַנְטִים`, ולעולם לא `נְפִלִים` (`../renderings.md` §6, §7). |
| 53 | τὰς ἐν Πιερίῃ Κρονίδῃ τέκε πατρὶ μιγεῖσα | אותן ילדה בפִּיֶּרִיָּה לבן־קרונוס, האב, בהתייחדה (עמו), | `וַתֵּלֶד הָגָר לְאַבְרָם בֵּן` (בראשית טז:טו) | equivalent | ובשבעים: `Καὶ ἔτεκεν Αγαρ τῷ Αβραμ υἱόν` (השבעים, בראשית טז:טו): אותו מבנה בדיוק – τίκτω ויחסת הלמ"ד של האב – בלשון השושלות של שתי התרבויות. העברית `ילדה ל־` שומרת עליו. |
| 71 | νισσομένων πατέρʼ εἰς ὅν· ὃ δʼ οὐρανῷ ἐμβασιλεύει, | בעשותן דרכן אל אביהן; והוא מולך בשמים, | `וַיֵּשֶׁב יְהוָה מֶלֶךְ לְעוֹלָם` (תהלים כט:י) | equivalent | המלוכה בשמים של אל הסערה אחרי ניצחונו; מוטיב משותף למזרח הקדום (בעל באוגרית מולך אחרי ניצחונו על ים; מרדוך באנומה אליש אחרי ניצחונו על תיאמת). אין קשר ישיר. |
| 72 | αὐτὸς ἔχων βροντὴν ἠδʼ αἰθαλόεντα κεραυνόν, | הוא עצמו אוחז ברעם ובחזיז הלוהט, | `וַיַּרְעֵם בַּשָּׁמַיִם יְהוָה וְעֶלְיוֹן יִתֵּן קֹלוֹ` (תהלים יח:יד); `וּבְרָקִים רָב וַיְהֻמֵּם` (תהלים יח:טו) | equivalent | הרעם והברק כנשקו של האל; מוטיב משותף של אלי הסערה. |
| 74 | ἀθανάτοις διέταξεν ὁμῶς καὶ ἐπέφραδε τιμάς. | לבני־האלמוות סידר, כאחד, והודיע את הזכויות. | `בְּהַנְחֵל עֶלְיוֹן גּוֹיִם בְּהַפְרִידוֹ בְּנֵי אָדָם` (דברים לב:ח); `כִּי חֵלֶק יְהוָה עַמּוֹ` (דברים לב:ט) | equivalent | חלוקת העולם בידי האל העליון; ובאנומה אליש (VI 39, 46) מרדוך, המלך, "חילק את האלים" ו"חילק את חלקם" אחרי ניצחונו (`../../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/annotated-VI.rtl.md`). מסורת מזרחית משותפת של מלך האלים המחלק תפקידים לאחר הניצחון; בדברים לב החלוקה היא של עמים ונחלות, כאן של זכויות האלים. |
| 83 | τῷ μὲν ἐπὶ γλώσσῃ γλυκερὴν χείουσιν ἐέρσην, | על לשונו הן יוצקות טל מתוק, | `תִּזַּל כַּטַּל אִמְרָתִי` (דברים לב:ב) | equivalent | הדיבור הנאה כטל. |
| 83 | τῷ μὲν ἐπὶ γλώσσῃ γλυκερὴν χείουσιν ἐέρσην, | על לשונו הן יוצקות טל מתוק, | `הוּצַק חֵן בְּשִׂפְתוֹתֶיךָ` (תהלים מה:ג) | equivalent | מזמור למלך: חן "נוצק" על שפתיו, כמו הטל ש"יוצקות" המוזות על לשון המלך (את נוסח השבעים למזמור לא ניתן לבדוק כאן). מוטיב משותף של המלך שדיבורו מתנה אלוהית; אין קשר בין הטקסטים. |
| 85 | πάντες ἐς αὐτὸν ὁρῶσι διακρίνοντα θέμιστας | כולו מביט אליו כשהוא מכריע את הדינים | `וַיִּשְׁמְעוּ כָל יִשְׂרָאֵל אֶת הַמִּשְׁפָּט אֲשֶׁר שָׁפַט הַמֶּלֶךְ וַיִּרְאוּ מִפְּנֵי הַמֶּלֶךְ כִּי רָאוּ כִּי חָכְמַת אֱלֹהִים בְּקִרְבּוֹ לַעֲשׂוֹת מִשְׁפָּט` (מלכים א ג:כח) | equivalent | העם כולו רואה את המלך השופט, וחכמת המשפט שבו היא מן האל. מוטיב משותף של המלך השופט בחכמה אלוהית; בלי קשר. |
| 86 | ἰθείῃσι δίκῃσιν· ὃ δʼ ἀσφαλέως ἀγορεύων | במשפטים ישרים; והוא, בנואמו ביציבות, | `אֱלֹהִים מִשְׁפָּטֶיךָ לְמֶלֶךְ תֵּן` (תהלים עב:א); `יָדִין עַמְּךָ בְצֶדֶק וַעֲנִיֶּיךָ בְמִשְׁפָּט` (תהלים עב:ב) | equivalent | המשפט הוא מתנת האל למלך |
| 86 | ἰθείῃσι δίκῃσιν· ὃ δʼ ἀσφαλέως ἀγορεύων | במשפטים ישרים; והוא, בנואמו ביציבות, | `קֶסֶם עַל-שִׂפְתֵי-מֶלֶךְ בְּמִשְׁפָּט לֹא יִמְעַל-פִּיו` (משלי טז:י) | equivalent | כוח אלוהי על שפתי המלך, ופיו אינו טועה במשפט – קרוב מאוד למלך של הסיודוס, שמתנת המוזות על לשונו (83) והוא נואם "ביציבות". מוטיב משותף; אין קשר. |
| 90 | ῥηιδίως, μαλακοῖσι παραιφάμενοι ἐπέεσσιν. | בקלות, בשדלם במילים רכות. | `מַעֲנֶה-רַּךְ יָשִׁיב חֵמָה` (משלי טו:א); `וְלָשׁוֹן רַכָּה תִּשְׁבָּר-גָּרֶם` (משלי כה:טו) | equivalent | כוחו של הדיבור הרך; חכמה משותפת, בלי קשר. |
| 91 | ἐρχόμενον δʼ ἀνʼ ἀγῶνα θεὸν ὣς ἱλάσκονται | ובבואו בתוך הקהל, כְּאֵל מְרַצִּים אותו | `כִּי אָמַר אֲכַפְּרָה פָנָיו בַּמִּנְחָה` (בראשית לב:כא); `כִּרְאֹת פְּנֵי אֱלֹהִים וַתִּרְצֵנִי` (בראשית לג:י) | equivalent | ובשבעים: `Ἐξιλάσομαι τὸ πρόσωπον αὐτοῦ ἐν τοῖς δώροις` (השבעים, בראשית לב:כא): יעקב "מרצה" את עשו בפועל הפולחני (ἐξιλάσκομαι, מורכב של ἱλάσκομαι שבשורתנו), ואחר כך אומר לו  – אדם שמרצים אותו כמו אל. קשר דרך השבעים (מלה קרובה, לא זהה), ומוטיב משותף. |
| 93 | τοίη Μουσάων ἱερὴ δόσις ἀνθρώποισιν. | כזאת היא מתת המוזות הקדושה לבני האדם. | `זֹה מַתַּת אֱלֹהִים הִיא` (קהלת ה:יח) | equivalent | מה שאדם זוכה בו, מתנה מן האל; מוטיב משותף. |
| 95 | ἄνδρες ἀοιδοὶ ἔασιν ἐπὶ χθόνα καὶ κιθαρισταί, | יש על פני האדמה אנשים משוררים ונגני־כינור; | `הוּא הָיָה אֲבִי כָּל תֹּפֵשׂ כִּנּוֹר וְעוּגָב` (בראשית ד:כא) | divergence | ובשבעים: `οὗτος ἦν ὁ καταδείξας ψαλτήριον καὶ κιθάραν` (השבעים, בראשית ד:כא): κιθάρα, הכלי שעל שמו נקרא ה־κιθαριστής, היא מלתם של השבעים ל־`כִּנּוֹר`. מגע לשוני דרך השבעים; ובתוכן – שני מיתוסים על מקור המוזיקאים: אצל הסיודוס הם באים מן המוזות ומאפולון, בבראשית מיובל, אדם מבני קין. |
| 96 | ἐκ δὲ Διὸς βασιλῆες· ὃ δʼ ὄλβιος, ὅν τινα Μοῦσαι | ומזאוס – המלכים; ושבע־טובה הוא מי שהמוזות | `אַשְׁרֵי הָאִישׁ אֲשֶׁר לֹא הָלַךְ בַּעֲצַת רְשָׁעִים` (תהלים א:א) | equivalent | תבנית ה"אשרי" (ביוונית makarismos): "מאושר מי ש־". תבנית שירית משותפת, בלי קשר; המלה היוונית כאן ὄλβιος, לא μακάριος של השבעים, ולכן לא `אַשְׁרֵי` בתרגום. |
| 99 | ἄζηται κραδίην ἀκαχήμενος, αὐτὰρ ἀοιδὸς | ייבש קרבו, דואב – אך המשורר, | `הוּכָּה-כָעֵשֶׂב וַיִּבַשׁ לִבִּי` (תהלים קב:ה) | equivalent | הלב ה"יבש" מצער; מוטיב משותף של הגוף בצער. |
| 100 | Μουσάων θεράπων κλέεα προτέρων ἀνθρώπων | משרת המוזות, את תהילות בני האדם הקודמים | `וַיַּאֲמִינוּ בַּיהוָה וּבְמֹשֶׁה עַבְדּוֹ` (שמות יד:לא) | equivalent | ובשבעים: `καὶ Μωυσῇ τῷ θεράποντι αὐτοῦ` (השבעים, שמות יד:לא): θεράπων, "משרת" המוזות של הסיודוס, הוא מלתם של השבעים ל"עבד ה'" משה. מגע לשוני דרך השבעים; בתרגום `מְשָׁרֵת`, כי `עֶבֶד` שמור ל־δμώς (`../renderings.md` §7.2). |
| 100 | Μουσάων θεράπων κλέεα προτέρων ἀνθρώπων | משרת המוזות, את תהילות בני האדם הקודמים | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | equivalent | "השם" של אנשי קדם, נושא השירה האפית; ב־κλέα ἀνδρῶν ("תהלות אנשים") מוגדרת השירה ההרואית. מוטיב משותף (השבעים: ὀνομαστοί, מן ὄνομα "שם" – מלה אחרת; לכן κλέος מתורגם `תְּהִלָּה` ו־`שֵׁם` נשמר ל־ὄνομα). |
| 102 | αἶψʼ ὅ γε δυσφροσυνέων ἐπιλήθεται οὐδέ τι κηδέων | מיד הוא שוכח את מרירותו, ודבר מצעריו | `יִשְׁתֶּה וְיִשְׁכַּח רִישׁוֹ וַעֲמָלוֹ לֹא יִזְכָּר-עוֹד` (משלי לא:ז) | equivalent | אותו זוג בדיוק, "ישכח" ו"לא יזכור", והיין במקום השיר. |
| 102 | αἶψʼ ὅ γε δυσφροσυνέων ἐπιλήθεται οὐδέ τι κηδέων | מיד הוא שוכח את מרירותו, ודבר מצעריו | `אִם-אֶשְׁכָּחֵךְ יְרוּשָׁלִָם תִּשְׁכַּח יְמִינִי` (תהלים קלז:ה) | divergence | הגולים מסרבים לשיר, כי השיר בארץ נכר הוא שכחה. |
| 102 | αἶψʼ ὅ γε δυσφροσυνέων ἐπιλήθεται οὐδέ τι κηδέων | מיד הוא שוכח את מרירותו, ודבר מצעריו | `וְלָקַח דָּוִד אֶת הַכִּנּוֹר וְנִגֵּן בְּיָדוֹ וְרָוַח לְשָׁאוּל וְטוֹב לוֹ` (שמואל א טז:כג); `קְחִי כִנּוֹר סֹבִּי עִיר זוֹנָה נִשְׁכָּחָה הֵיטִיבִי נַגֵּן הַרְבִּי שִׁיר לְמַעַן תִּזָּכֵרִי` (ישעיהו כג:טז) | equivalent | המוזיקה מרפאת נפש מדוכאת. ו־ – ובשבעים `πόρνη ἐπιλελησμένη … ἵνα σου μνεία γένηται` (השבעים, ישעיהו כג:טז): השיר כנגד השכחה, באותו שורש יווני (ἐπιλανθάνομαι / ἐπιλήθομαι). מוטיבים משותפים על השיר, השכחה והזיכרון; אין קשר. |
| 104 | χαίρετε, τέκνα Διός, δότε δʼ ἱμερόεσσαν ἀοιδήν. | שלום לכן, צאצאי זאוס, וְתֵנָּה שירה מעוררת־כיסוף. | `אֵין שָׁלוֹם אָמַר יְהוָה לָרְשָׁעִים` (ישעיהו מח:כב) | equivalent | ובשבעים: `οὐκ ἔστιν χαίρειν τοῖς ἀσεβέσιν, λέγει κύριος` (השבעים, ישעיהו מח:כב): השבעים מתרגמים את `שָׁלוֹם` בפועל χαίρειν – אותו פועל של ברכת "χαίρετε". מכאן התרגום `שָׁלוֹם לָכֶן` (לפי המובן; χαίρω כפועל "לשמוח" יקבל `שָׂמַח`, ראו project.md). ברכת הפרידה של 963 – `שָׁלוֹם לָכֶם` [מקבילה: TH 963]. |
| 108 | εἴπατε δʼ, ὡς τὰ πρῶτα θεοὶ καὶ γαῖα γένοντο | ואמרנה, איך בראשונה נהיו אֵלִים והארץ | `אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ בְּהִבָּרְאָם` (בראשית ב:ד) | equivalent | ובשבעים: `Αὕτη ἡ βίβλος γενέσεως οὐρανοῦ καὶ γῆς, ὅτε ἐγένετο` (השבעים, בראשית ב:ד): γίγνομαι ("ὅτε ἐγένετο") ו־γένεσις, משורש γεν־ – אותו שורש של Θεογονία, שם השיר. מגע לשוני דרך השבעים. |
| 108 | εἴπατε δʼ, ὡς τὰ πρῶτα θεοὶ καὶ γαῖα γένοντο | ואמרנה, איך בראשונה נהיו אֵלִים והארץ | `אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ בְּהִבָּרְאָם` (בראשית ב:ד) | divergence | השמים והארץ, הימים והכוכבים של בראשית א נבראים בדיבור, ביום ידוע; כאן הם "נהיו" – נולדו – והאלים נמנים איתם, בראש. |
| 115 | ἐξ ἀρχῆς, καὶ εἴπαθʼ, ὅ τι πρῶτον γένετʼ αὐτῶν. | מראשית, ואמרנה מה מהם נהיה ראשון. | `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | equivalent | ἐξ ἀρχῆς של הסיודוס ו־Ἐν ἀρχῇ של השבעים: אותה מלה (ראו 45). |
| 115 | ἐξ ἀρχῆς, καὶ εἴπαθʼ, ὅ τι πρῶτον γένετʼ αὐτῶν. | מראשית, ואמרנה מה מהם נהיה ראשון. | `הָרִאשֹׁנוֹת מָה הֵנָּה הַגִּידוּ` (ישעיהו מא:כב) | divergence | ובשבעים `τὰ πρότερα τίνα ἦν εἴπατε` (השבעים, ישעיהו מא:כב): אותו ציווי, εἴπατε, ואותה בקשה – לומר את הדברים הראשונים; אצל ישעיהו זהו אתגר לאלים שאינם יכולים לענות, אצל הסיודוס זו תפילה לאלות שיודעות. מגע לשוני דרך השבעים בלבד. |
| 116 | ἦ τοι μὲν πρώτιστα Χάος γένετʼ, αὐτὰρ ἔπειτα | אכן ראשונה נהיה פער, ואחריו | `וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב); `וְהִגַּרְתִּי לַגַּי אֲבָנֶיהָ` (מיכה א:ו) | divergence | ובשבעים: `ἡ δὲ γῆ ἦν ἀόρατος καὶ ἀκατασκεύαστος` (השבעים, בראשית א:ב): השבעים לא תרגמו את `תֹהוּ` ב־χάος; χάος משמש אצלם ל־`גַּיְא` (`../renderings.md` §6; מיכה א:ו, ). רק התרגומים המאוחרים, היווניים והלטיניים, שמו "כאוס" בבראשית א:ב. |
| 116 | ἦ τοι μὲν πρώτιστα Χάος γένετʼ, αὐτὰρ ἔπειτα | אכן ראשונה נהיה פער, ואחריו | `וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם` (בראשית א:ב); `וְהִגַּרְתִּי לַגַּי אֲבָנֶיהָ` (מיכה א:ו) | equivalent | `καὶ ἐγένετο φῶς` (השבעים, בראשית א:ג) – γίγνομαι, "נהיה", הוא הפועל של הסיודוס ושל השבעים ל"ויהי"; לכן `נִהְיָה` שמור לו. מגע לשוני דרך השבעים, ומוטיב מזרחי משותף של "תחילה" ריקה; אין קשר בין הטקסטים. |
| 117 | Γαῖʼ εὐρύστερνος, πάντων ἕδος ἀσφαλὲς αἰεὶ | ארץ רחבת־החזה, מושב יציב תמיד לכל | `יָסַד-אֶרֶץ עַל-מְכוֹנֶיהָ בַּל-תִּמּוֹט עוֹלָם וָעֶד` (תהלים קד:ה) | equivalent | יציבות הארץ לעד; מוטיב משותף. |
| 124 | Νυκτὸς δʼ αὖτʼ Αἰθήρ τε καὶ Ἡμέρη ἐξεγένοντο, | ומלילה, שוב, נולדו אֶתֶר ויום, | `וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד` (בראשית א:ה) | equivalent | ובשבעים: `καὶ ἐκάλεσεν ὁ θεὸς τὸ φῶς ἡμέραν καὶ τὸ σκότος ἐκάλεσεν νύκτα` (השבעים, בראשית א:ה): אותן מלים יווניות, νύξ ו־ἡμέρα. |
| 124 | Νυκτὸς δʼ αὖτʼ Αἰθήρ τε καὶ Ἡμέρη ἐξεγένοντο, | ומלילה, שוב, נולדו אֶתֶר ויום, | `וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד` (בראשית א:ה) | divergence | בבראשית החושך קודם לאור (א:ב–ג) והערב לבוקר; אצל הסיודוס הלילה **יולד** את היום – אותו סדר, אבל כלידה ולא כקריאת שם. מוטיב משותף (הלילה קודם ליום), ומגע לשוני דרך השבעים. |
| 127 | Οὐρανὸν ἀστερόενθʼ, ἵνα μιν περὶ πάντα καλύπτοι, | את שמים זרועי־הכוכבים, כדי שיכסה אותה מכל עבר, | `נוֹטֶה שָׁמַיִם כַּיְרִיעָה` (תהלים קד:ב); `הַנּוֹטֶה כַדֹּק שָׁמַיִם וַיִּמְתָּחֵם כָּאֹהֶל לָשָׁבֶת` (ישעיהו מ:כב) | equivalent | השמים ככיסוי פרוש מעל הארץ |
| 127 | Οὐρανὸν ἀστερόενθʼ, ἵνα μιν περὶ πάντα καλύπτοι, | את שמים זרועי־הכוכבים, כדי שיכסה אותה מכל עבר, | `נוֹטֶה שָׁמַיִם כַּיְרִיעָה` (תהלים קד:ב); `הַנּוֹטֶה כַדֹּק שָׁמַיִם וַיִּמְתָּחֵם כָּאֹהֶל לָשָׁבֶת` (ישעיהו מ:כב) | divergence | במקרא האל פורש אותם, כאן הארץ יולדת אותם ככיסוי לעצמה. מוטיב משותף של הקוסמולוגיה הקדומה; אין קשר. |
| 132 | Πόντον, ἄτερ φιλότητος ἐφιμέρου· αὐτὰρ ἔπειτα | את ים, בלי אהבה נכספת; ואחר כך | `וַיִּקְרָא אֱלֹהִים לַיַּבָּשָׁה אֶרֶץ וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים` (בראשית א:י) | equivalent | ובשבעים: `ἐκάλεσεν θαλάσσας` (השבעים, בראשית א:י) – הים כחלק מן העולם, אחרי השמים והארץ |
| 132 | Πόντον, ἄτερ φιλότητος ἐφιμέρου· αὐτὰρ ἔπειτα | את ים, בלי אהבה נכספת; ואחר כך | `וַיִּקְרָא אֱלֹהִים לַיַּבָּשָׁה אֶרֶץ וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים` (בראשית א:י) | divergence | בבראשית הים נאסף ממים קיימים, כאן הארץ יולדת אותו. |
| 134 | Κοῖόν τε Κρῖόν θʼ Ὑπερίονά τʼ Ἰαπετόν τε | ואת קוֹיוֹס ואת קְרִיּוֹס ואת הִיפֶּרִיּוֹן ואת יאפטוס | `בְּנֵי יֶפֶת גֹּמֶר וּמָגוֹג וּמָדַי וְיָוָן וְתֻבָל` (בראשית י:ב) | divergence | ההשוואה הישנה בין יאפטוס הטיטן ליפת בן נח, שבניו כוללים את "יוון": השמות דומים, וסופרים מאוחרים ראו בהם אחד. זהות לא מוכחת; לכן `יָאפֶּטוֹס` ולא `יֶפֶת` (`../renderings.md` §2.3). |
| 148 | τρεῖς παῖδες μεγάλοι τε καὶ ὄβριμοι, οὐκ ὀνομαστοί, | שלושה בנים, גדולים וכבירים, שאין לנקוב בשמם: | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | divergence | ובשבעים: `οἱ γίγαντες οἱ ἀπ’ αἰῶνος, οἱ ἄνθρωποι οἱ ὀνομαστοί` (השבעים, בראשית ו:ד): אותה מלה, ὀνομαστός – אצל השבעים "אנשי השם", המפורסמים; אצל הסיודוס בשלילה: בני הענק של ארץ ושמים הם יצורים "שאין לנקוב בשמם", מאיימים מכדי לדבר בהם. מגע לשוני דרך השבעים, ובמשמעות הפוכה; אין קשר. |
| 149 | Κόττος τε Βριάρεώς τε Γύης θʼ, ὑπερήφανα τέκνα. | קוֹטוֹס ובְּרִיאָרֵאוֹס וגִּיֵּס, צאצאים גאים. | `כִּי יוֹם לַיהוָה צְבָאוֹת עַל כָּל גֵּאֶה וָרָם` (ישעיהו ב:יב) | equivalent | ובשבעים: `ἐπὶ πάντα ὑβριστὴν καὶ ὑπερήφανον` (השבעים, ישעיהו ב:יב): ὑπερήφανος (יחד עם ὑβριστής, 307) הוא תרגום השבעים לצמד `גֵּאֶה וָרָם` – משפחת היוהרה – ולכן `גֵּאֶה` כאן. מגע לשוני דרך השבעים בלבד. |
| 151 | ἄπλαστοι, κεφαλαὶ δὲ ἑκάστῳ πεντήκοντα | בלתי־יצורות, וחמישים ראשים לכל אחד | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז); `וְיַעֲקֹב אִישׁ תָּם יֹשֵׁב אֹהָלִים` (בראשית כה:כז) | divergence | השבעים: ἔπλασεν (πλάσσω); ἄπλαστος הוא "מה שלא נוצר בדפוס", ולכן `בִּלְתִּי־יְצוּרוֹת` (`../renderings.md` §7.2: השורש יצ"ר רק ל־πλάσσω וקרוביו). ובאירוניה של התרגום: אצל השבעים ἄπλαστος הוא `תָּם` – , `Ιακωβ δὲ ἦν ἄνθρωπος ἄπλαστος` (השבעים, בראשית כה:כז): "לא מעושה", פשוט. מגע לשוני דרך השבעים. |
| 180 | μακρὴν καρχαρόδοντα, φίλου δʼ ἀπὸ μήδεα πατρὸς | הארוך, משונן־השיניים, ואת מבושי אביו האהוב | `וְשָׁלְחָה יָדָהּ וְהֶחֱזִיקָה בִּמְבֻשָׁיו` (דברים כה:יא) | equivalent | `מְבֻשִׁים`, המלה המקראית לאיברי הזכר; כאן לפי המשמעות. |
| 185 | γείνατʼ Ἐρινῦς τε κρατερὰς μεγάλους τε Γίγαντας, | הולידה את הָאֶרִינִיּוֹת העזות ואת הגיגנטים הגדולים, | `הַנְּפִלִים הָיוּ בָאָרֶץ בַּיָּמִים הָהֵם` (בראשית ו:ד) | equivalent | ובשבעים: `οἱ δὲ γίγαντες ἦσαν ἐπὶ τῆς γῆς` (השבעים, בראשית ו:ד): Γίγαντες של הסיודוס הם המלה של השבעים ל`נְּפִלִים` ול`גִּבֹּרִים`. בשורה `הַגִּיגַנְטִים`, ולעולם לא `נְפִלִים` (`../renderings.md` §7; ראו 50). |
| 194 | ἐκ δʼ ἔβη αἰδοίη καλὴ θεός, ἀμφὶ δὲ ποίη | ויצאה הָאֵלָה, הנערצת והיפה, וסביב עשב | `תַּדְשֵׁא הָאָרֶץ דֶּשֶׁא עֵשֶׂב מַזְרִיעַ זֶרַע` (בראשית א:יא) | divergence | בשבעים `βοτάνην χόρτου` (השבעים, בראשית א:יא), מלים אחרות מ־ποίη: הצמחייה צומחת בדבר האל; כאן היא צומחת תחת רגלי האלה. מוטיב הפריון הצומח, בלי קשר. |
| 215 | Ἑσπερίδας θʼ, ᾗς μῆλα πέρην κλυτοῦ Ὠκεανοῖο | ואת הַהֶסְפֶּרִידוֹת, שתפוחים מעבר לאוקאנוס המהולל | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים` (בראשית ג:כד) | divergence | גן בקצה העולם, ועץ שפירותיו לאלים; ראו 334–335, שם הנחש שומר על התפוחים. |
| 219 | γεινομένοισι διδοῦσιν ἔχειν ἀγαθόν τε κακόν τε, | כשהם נולדים, נותנות שיהיו להם טוב ורע, | `גַּם אֶת הַטּוֹב נְקַבֵּל מֵאֵת הָאֱלֹהִים וְאֶת הָרָע לֹא נְקַבֵּל` (איוב ב:י) | equivalent | הטוב והרע ניתנים לאדם מידי האלוהות: אותו מבט על גורל האדם. |
| 219 | γεινομένοισι διδοῦσιν ἔχειν ἀγαθόν τε κακόν τε, | כשהם נולדים, נותנות שיהיו להם טוב ורע, | `וְעֵץ הַדַּעַת טוֹב וָרָע` (בראשית ב:ט) | divergence | בשבעים `γνωστὸν καλοῦ καὶ πονηροῦ` (השבעים, בראשית ב:ט): מלים יווניות אחרות מ־ἀγαθόν τε κακόν τε של הסיודוס – הקשר הוא דרך העברית בלבד (`../renderings.md` §6, הסוג ב), וכאן הטוב והרע הם מנה בחיים ולא ידיעה. אין קשר בין הטקסטים. |
| 222 | πρίν γʼ ἀπὸ τῷ δώωσι κακὴν ὄπιν, ὅς τις ἁμάρτῃ. | עד שתשלמנה גמול רע לכל אשר יחטא. | `הֲלוֹא אִם תֵּיטִיב שְׂאֵת וְאִם לֹא תֵיטִיב לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | equivalent | ובשבעים: `ὀρθῶς δὲ μὴ διέλῃς, ἥμαρτες` (השבעים, בראשית ד:ז): ἁμαρτάνω הוא הפועל של השבעים ל"חטא", ולכן `חָטָא` כאן. מגע לשוני דרך השבעים; ובמובן – ביוונית הארכאית ἁμαρτάνω הוא עדיין "להחטיא את המטרה, לטעות" (כמו `חָטָא` המקראי: "קֹלֵעַ … וְלֹא יַחֲטִא", שופטים כ:טז). |
| 226 | αὐτὰρ Ἔρις στυγερὴ τέκε μὲν Πόνον ἀλγινόεντα | ומדון המתועבת ילדה את עמל המכאיב | `יָפִיחַ כְּזָבִים עֵד שָׁקֶר וּמְשַׁלֵּחַ מְדָנִים בֵּין אַחִים` (משלי ו:יט) | equivalent | גם במשלי רשימה של רעות (ו:טז–יט) שבראשה גאווה ושקר ובסופה `מְדָנִים`; אצל הסיודוס מדון היא האם, והשקר, הריב והרצח בניה. רשימות של רעות הן מוטיב חכמה משותף; אין קשר. |
| 232 | πημαίνει, ὅτε κέν τις ἑκὼν ἐπίορκον ὀμόσσῃ. | מזיק, כאשר מישהו במזיד נשבע לשקר. | `וְלֹא תִשָּׁבְעוּ בִשְׁמִי לַשָּׁקֶר` (ויקרא יט:יב); `וּבָאָה אֶל בֵּית הַגַּנָּב וְאֶל בֵּית הַנִּשְׁבָּע בִּשְׁמִי לַשָּׁקֶר` (זכריה ה:ד) | equivalent | אצל זכריה הקללה עצמה נכנסת לבית הנשבע לשקר ומכלה אותו – כמו שבועה המזיקה לנשבע. מוטיב משותף של השבועה ככוח פועל; אין קשר. |
| 236 | λήθεται, ἀλλὰ δίκαια καὶ ἤπια δήνεα οἶδεν· | אינו שוכח, אלא מחשבות צדק ונוחות הוא יודע. | `נֹחַ אִישׁ צַדִּיק תָּמִים הָיָה בְּדֹרֹתָיו` (בראשית ו:ט) | equivalent | ובשבעים: `Νωε ἄνθρωπος δίκαιος` (השבעים, בראשית ו:ט): δίκαιος, המלה של הסיודוס כאן, היא המלה של השבעים ל`צַדִּיק` – ולכן השורש צד"ק (`../renderings.md` §5, §7.2). מגע לשוני דרך השבעים; אין קשר בין נח לנראוס. |
| 238 | Γαίῃ μισγόμενος καὶ Κητὼ καλλιπάρῃον | בהתייחדו עם ארץ, ואת קֵטוֹ יפת־הלחיים | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | equivalent | שמה של קֵטוֹ גזור מ־κῆτος "מפלצת ים": בדיוק המלה של השבעים ל`הַתַּנִּינִם` – `τὰ κήτη τὰ μεγάλα` (השבעים, בראשית א:כא). מגע לשוני דרך השבעים בלבד (`../renderings.md` §6; תיק היום החמישי 238); `תַּנִּין` אינו בא בשורה. |
| 238 | Γαίῃ μισγόμενος καὶ Κητὼ καλλιπάρῃον | בהתייחדו עם ארץ, ואת קֵטוֹ יפת־הלחיים | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | divergence | בבראשית התנינים נבראים; כאן אמן של המפלצות היא אלה, בת הים והארץ. |
| 239 | Εὐρυβίην τʼ ἀδάμαντος ἐνὶ φρεσὶ θυμὸν ἔχουσαν. | ואת אֶוּרִיבִיָּה, שלב של שמיר לה בלבבה. | `וְלִבָּם שָׂמוּ שָׁמִיר` (זכריה ז:יב) | equivalent | הלב העשוי שמיר. |
| 253 | πνοιάς τε ζαέων ἀνέμων σὺν Κυματολήγῃ | ואת משבי הרוחות הסוערות, עם קִימָטוֹלֵגָה, | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | divergence | השבעים: `πνοὴν ζωῆς` (השבעים, בראשית ב:ז); אצל הסיודוס πνοιαί הן משבי רוח, לא נשמה (`../renderings.md` §5–6: `מַשָּׁבִים`). קשר בצורה, לא במובן. |
| 259 | Εὐάρνη τε φυήν τʼ ἐρατὴ καὶ εἶδος ἄμωμος | ואֶוּאַרְנָה, ערבה בקומתה ותמימה במראה, | `וְאֵילִם שְׁנַיִם תְּמִימִם` (שמות כט:א) | equivalent | ובשבעים: `κριοὺς δύο ἀμώμους` (השבעים, שמות כט:א): ἄμωμος היא המלה של השבעים ל`תָּמִים` (קורבן בלי מום) – ולכן `תְּמִימָה` כאן. מגע לשוני דרך השבעים. |
| 266 | ἠγάγετʼ Ἠλέκτρην· ἣ δʼ ὠκεῖαν τέκεν Ἶριν | לקח לו, את אֵלֶקְטְרָה; והיא ילדה את אִירִיס המהירה | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן וְהָיְתָה לְאוֹת בְּרִית בֵּינִי וּבֵין הָאָרֶץ` (בראשית ט:יג) | divergence | ἶρις היא גם המלה היוונית הרגילה לקשת בענן, אבל השבעים כתבו `τὸ τόξον μου τίθημι ἐν τῇ νεφέλῃ` (השבעים, בראשית ט:יג): τόξον, "קשת" של חץ – בדיוק כמו העברית `קֶשֶׁת`, ולא ἶρις. בשני העולמות הקשת בענן מחברת שמים וארץ: אצל היוונים היא שליחת האלים (780), בבראשית אות ברית. מוטיב משותף; מלים שונות. |
| 297 | σπῆι ἔνι γλαφυρῷ θείην κρατερόφρονʼ Ἔχιδναν, | במערה חלולה – את אֶכִידְנָה הָאֱלוֹהִית, קשת־הלב, | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | ἔχιδνα הוא שם עצם יווני ל"אפעה" (`../renderings.md` §5: `אֶפְעֶה`); אכידנה היא אשה־נחש, ובשורה 299 חציה התחתון ὄφις – המלה של השבעים לנחש של גן עדן (ראו שם). |
| 299 | ἥμισυ δʼ αὖτε πέλωρον ὄφιν δεινόν τε μέγαν τε | וחציה שוב – מפלצת, נחש איום וגדול, | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | ובשבעים: `Ὁ δὲ ὄφις ἦν φρονιμώτατος πάντων τῶν θηρίων` (השבעים, בראשית ג:א): ὄφις = `נָחָשׁ` (`../renderings.md` §5–6). |
| 299 | ἥμισυ δʼ αὖτε πέλωρον ὄφιν δεινόν τε μέγαν τε | וחציה שוב – מפלצת, נחש איום וגדול, | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | equivalent | "גדול" כתואר של המפלצת; השבעים: `τὰ κήτη τὰ μεγάλα` (השבעים, בראשית א:כא). מגע לשוני דרך השבעים; אין קשר בין הטקסטים. |
| 304 | ἣ δʼ ἔρυτʼ εἰν Ἀρίμοισιν ὑπὸ χθονὶ λυγρὴ Ἔχιδνα, | והיא נעצרה? באֲרִימִים מתחת לאדמה, אכידנה המרה, | `בְּנֵי שֵׁם עֵילָם וְאַשּׁוּר וְאַרְפַּכְשַׁד וְלוּד וַאֲרָם` (בראשית י:כב) | divergence | סופרים יוונים מאוחרים (פוסידוניוס, לפי סטראבון) זיהו את ה"ארימים" עם הארמים (Ἀραμαῖοι). זיהוי מאוחר ושנוי במחלוקת; המקום באיליאדה (ב 783) הוא מקום משכבו של טיפואוס, אולי בקיליקיה או בסוריה – אזור המיתוסים על אל הסערה ומפלצת הים (הר צפון, Kasios). |
| 307 | δεινόν θʼ ὑβριστήν τʼ ἄνομόν θʼ ἑλικώπιδι κούρῃ· | האיום והזד והפורע־חוק, עם העלמה מעוגלת־העיניים; | `כִּי יוֹם לַיהוָה צְבָאוֹת עַל כָּל גֵּאֶה וָרָם` (ישעיהו ב:יב) | equivalent | בשבעים `ἐπὶ πάντα ὑβριστὴν καὶ ὑπερήφανον` (השבעים, ישעיהו ב:יב): ὑβριστής ו־ὑπερήφανος (149) – שתי מלות היוהרה של הסיודוס – באות כאן יחד בתרגום "גאה ורם". מגע לשוני דרך השבעים. |
| 313 | τὸ τρίτον Ὕδρην αὖτις ἐγείνατο λυγρὰ ἰδυῖαν | שלישית שוב הולידה את הַהִידְרָה, היודעת מרורים, | `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | equivalent | הנחש רב־הראשים שהאל או הגיבור מנצח: מוטיב מזרחי עתיק (ב"אוגרית ליתן "בעל שבעת הראשים"; בגליליות גודאה "הנחש בעל שבעת הראשים", `../../בניין-המקדש/1-גליליות-גודאה/annotated-A4.rtl.md` A.xxv.28). כאן הגיבור הוא אדם־למחצה, הרקלס; אין קשר ישיר. |
| 319 | ἣ δὲ Χίμαιραν ἔτικτε πνέουσαν ἀμαιμάκετον πῦρ, | והיא ילדה את כִימַיְרָה, הנושפת אש בלתי נכבשת, | `מִפִּיו לַפִּידִים יַהֲלֹכוּ כִּידוֹדֵי אֵשׁ יִתְמַלָּטוּ` (איוב מא:יא) | equivalent | המפלצת הנושפת אש (וכך טיפואוס, 827–828); מוטיב משותף. |
| 322 | ἣ δὲ χιμαίρης, ἣ δʼ ὄφιος, κρατεροῖο δράκοντος, | השני של עֵז, השלישי של נחש, דְּרָקוֹן עַז; | `עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) | equivalent | ובשבעים: `ἐπὶ τὸν δράκοντα ὄφιν φεύγοντα, ἐπὶ τὸν δράκοντα ὄφιν σκολιὸν` (השבעים, ישעיהו כז:א): δράκων ו־ὄφις יחד, כמו כאן – ושם הם `לִוְיָתָן` ו`נָחָשׁ`. מגע לשוני דרך השבעים; `לִוְיָתָן` ו`תַּנִּין` אינם באים בשורה (`../renderings.md` §6–7). |
| 334 | γείνατο δεινὸν ὄφιν, ὃς ἐρεμνῆς κεύθεσι γαίης | הולידה – נחש איום, אשר במחבואי הארץ הכהה, | `וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה` (בראשית ג:א) | equivalent | השבעים: `Ὁ δὲ ὄφις` (השבעים, בראשית ג:א): ὄφις = `נָחָשׁ`. |
| 335 | πείρασιν ἐν μεγάλοις παγχρύσεα μῆλα φυλάσσει. | בגבולותיה הגדולים, שומר תפוחים כולם־זהב. | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | divergence | ובשבעים: `ἔταξεν τὰ χερουβιμ καὶ τὴν φλογίνην ῥομφαίαν τὴν στρεφομένην φυλάσσειν τὴν ὁδὸν τοῦ ξύλου τῆς ζωῆς` (השבעים, בראשית ג:כד): אותו פועל, φυλάσσω, ולכן `שָׁמַר` (`../renderings.md` §5–7). עץ של פרי מופלא בקצה העולם, ושומר שאינו נותן לגשת אליו – אצל הסיודוס הנחש הוא השומר, בבראשית הכרובים, והנחש (ג:א) הוא המפתה שמביא אל העץ. מגע לשוני דרך השבעים, ומוטיב משותף של עץ שמור; אין קשר. |
| 336 | τοῦτο μὲν ἐκ Κητοῦς καὶ Φόρκυνος γένος ἐστίν. | זה הוא הגזע מקטו ומפורקיס. | `וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים וְאֵת כָּל נֶפֶשׁ הַחַיָּה הָרֹמֶשֶׂת אֲשֶׁר שָׁרְצוּ הַמַּיִם לְמִינֵהֶם` (בראשית א:כא) | divergence | ובשבעים: `κατὰ γένη αὐτῶν` (השבעים, בראשית א:כא): γένος הוא מלת השבעים ל`מִין`; אצל הסיודוס "הגזע" של המפלצות הוא משפחה – צאצאי זוג; בבראשית "מין" הוא סוג של ברואים. לכן `גֶּזַע` ולעולם לא `מִין` (`../renderings.md` §5, §7.2). |
| 337 | Τηθὺς δʼ Ὠκεανῷ Ποταμοὺς τέκε δινήεντας, | וטתיס ילדה לאוקאנוס את נהרות רבי־המערבולות, | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן וּמִשָּׁם יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים` (בראשית ב:י) | divergence | ובשבעים: `ποταμὸς δὲ ἐκπορεύεται ἐξ Εδεμ` (השבעים, בראשית ב:י): ποταμός הוא מלת השבעים ל`נָהָר`, ולכן `נָהָר` כאן. בשני המקומות הנהרות של העולם יוצאים ממקור אחד – אצל הסיודוס הם צאצאיו של אוקאנוס, הנהר המקיף את הארץ (באיליאדה כא 195–197 כל הנהרות, הים, המעיינות והבארות "זורמים מאוקאנוס"); בבראשית נהר אחד מעדן מתחלק לארבעה. מוטיב משותף של "נהר־אם", לא קשר. |
| 337 | Τηθὺς δʼ Ὠκεανῷ Ποταμοὺς τέκε δινήεντας, | וטתיס ילדה לאוקאנוס את נהרות רבי־המערבולות, | `כָּל הַנְּחָלִים הֹלְכִים אֶל הַיָּם וְהַיָּם אֵינֶנּוּ מָלֵא` (קהלת א:ז) | divergence | תמונה של מחזור מים שאינו נגמר; אצל הסיודוס הכיוון הפוך: מן המקור החיצון אל הארץ. |
| 338 | Νεῖλόν τʼ Ἀλφειόν τε καὶ Ἠριδανὸν βαθυδίνην | ואת נִילוּס ואת אַלְפֵיאוֹס ואת אֵרִידָנוֹס עמוק־המערבולות, | `וּפַרְעֹה חֹלֵם וְהִנֵּה עֹמֵד עַל הַיְאֹר` (בראשית מא:א) | absent | ובשבעים: `ἑστάναι ἐπὶ τοῦ ποταμοῦ` (השבעים, בראשית מא:א): המקרא קורא לנילוס `יְאֹר` (מלה מצרית, *jtrw* "הנהר"), והשבעים מתרגמים "הנהר" – בלי השם. השם Νεῖλος אינו בתרגום השבעים לתורה כלל; לכן `נִילוּס` ולעולם לא `יְאֹר` (`../renderings.md` §2.3). |
| 371 | θεία δʼ Ἠέλιόν τε μέγαν λαμπράν τε Σελήνην | ותאה – את שמש הגדול ואת ירח הזוהרת | `וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים אֶת הַמָּאוֹר הַגָּדֹל לְמֶמְשֶׁלֶת הַיּוֹם וְאֶת הַמָּאוֹר הַקָּטֹן לְמֶמְשֶׁלֶת הַלַּיְלָה וְאֵת הַכּוֹכָבִים` (בראשית א:טז) | divergence | ובשבעים: `τοὺς δύο φωστῆρας τοὺς μεγάλους … καὶ τοὺς ἀστέρας` (השבעים, בראשית א:טז). אצל הסיודוס השמש והירח **נולדים** מזוג טיטנים, בעלי שמות ותארים, כאלים; בבראשית הם **נעשים**, ואינם נקראים בשמם כלל: "המאור הגדול" ו"המאור הקטן" – הימנעות מכוונת מן המלים `שֶׁמֶשׁ` ו`יָרֵחַ`, שהיו שמות אלים אצל השכנים. השבעים מתרגמים `מְאֹרֹת` ב־φωστῆρες, מלה שאינה אצל הסיודוס. מוטיב משותף – גרמי השמים הגדולים באים יחד, אחרי הארץ והשמים – וההבדל הוא העיקר: כאן אלים, שם כלים. |
| 381 | τοὺς δὲ μέτʼ ἀστέρα τίκτεν Ἑωσφόρον Ἠριγένεια | ואחריהם הייתה יולדת בת־הבוקר את הכוכב מביא־השחר | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר נִגְדַּעְתָּ לָאָרֶץ חוֹלֵשׁ עַל גּוֹיִם` (ישעיהו יד:יב) | equivalent | ובשבעים: `πῶς ἐξέπεσεν ἐκ τοῦ οὐρανοῦ ὁ ἑωσφόρος ὁ πρωῒ ἀνατέλλων` (השבעים, ישעיהו יד:יב): השבעים מתרגמים את `הֵילֵל בֶּן שָׁחַר` במלה של הסיודוס, ὁ ἑωσφόρος – זהות לשונית (`../renderings.md` §6). ובתוכן: אצל ישעיהו כוכב הבוקר הוא "בן השחר", ואצל הסיודוס הוא בנו של השחר (Ἠώς) – אותה גנאלוגיה עצמה. המקור המשותף אינו יווני: השחר כאל (`שַׁחַר`) ידוע מאוגרית, והמיתוס על "הילל" שעלה לשמים ונפל נשמע כמיתוס כנעני. ליוון אין קשר עם ישראל; הקשר הוא ההתבוננות בכוכב הבוקר, שנולד בשחר ונעלם בו – ושני עולמות שעשו ממנו בן לשחר. התרגום `מֵבִיא־הַשַּׁחַר` נשמר מלהביא את `הֵילֵל` לשורה. |
| 382 | ἄστρα τε λαμπετόωντα, τά τʼ οὐρανὸς ἐστεφάνωται. | ואת הכוכבים הנוצצים, אשר השמים עטורים בהם. | `וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים וּלְיָמִים וְשָׁנִים` (בראשית א:יד) | divergence | בבראשית לכוכבים ולמאורות יש תפקיד: לסמן זמנים; אצל הסיודוס הכוכבים הם ילדים ועטרה – והתפקיד הלוחי שלהם יבוא במעשים וימים (כימה, כסיל, הכוכב סיריוס: מעשים וימים 383–387, 609–617). ובשבעים: `εἰς σημεῖα καὶ εἰς καιροὺς` (השבעים, בראשית א:יד); ἀστήρ (381) הוא מלת השבעים ל`כּוֹכָבִים` בבראשית א:טז. |
| 388 | ἀλλʼ αἰεὶ πὰρ Ζηνὶ βαρυκτύπῳ ἑδριόωνται. | אלא תמיד לצד זאוס כבד־הרעם הם יושבים. | `צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאֶךָ חֶסֶד וֶאֱמֶת יְקַדְּמוּ פָנֶיךָ` (תהלים פט:טו) | equivalent | תכונות האל המלך מוגשמות כדמויות העומדות לפני כיסאו או נושאות אותו. אצל הסיודוס אלה כוחות השלטון (נצחון, עוז, כוח), בתהלים – הצדק והחסד; המבנה – חצר של תכונות מואנשות סביב המלך – משותף לדמיון המלכותי של המזרח הקדום וליוון, בלי קשר בין הטקסטים. |
| 400 | αὐτὴν μὲν γὰρ ἔθηκε θεῶν μέγαν ἔμμεναι ὅρκον, | כי אותה עצמה שם להיות השבועה הגדולה של הָאֵלִים, | `בִּי נִשְׁבַּעְתִּי נְאֻם יְהוָה` (בראשית כב:טז) | divergence | במקרא האל נשבע בעצמו, ואין כוח גדול ממנו שבו יוכל להישבע; אצל הסיודוס האלים נשבעים בנהר־אלה, כוח מחוץ להם, ומי ששובר את השבועה שוכב בלי נשימה שנה תמימה (793–806): בעולם שבו גם האלים כפופים לחוק, שבועתם צריכה ערב. |
| 400 | αὐτὴν μὲν γὰρ ἔθηκε θεῶν μέγαν ἔμμεναι ὅρκον, | כי אותה עצמה שם להיות השבועה הגדולה של הָאֵלִים, | `הָאִישׁ לְבוּשׁ הַבַּדִּים אֲשֶׁר מִמַּעַל לְמֵימֵי הַיְאֹר וַיָּרֶם יְמִינוֹ וּשְׂמֹאלוֹ אֶל הַשָּׁמַיִם וַיִּשָּׁבַע בְּחֵי הָעוֹלָם` (דניאל יב:ז) | divergence | שבועה מעל מי הנהר: שם הנהר הוא רק המקום, והשבועה היא בחי העולם; כאן המים עצמם הם השבועה. מוטיב משותף של מים ושבועה, בלי קשר. |
| 417 | ἔρδων ἱερὰ καλὰ κατὰ νόμον ἱλάσκηται, | בהקריבו קרבנות יפים כַּחֹק, מבקש לרצות, | `וְאִישׁ כִּי יַקְרִיב זֶבַח שְׁלָמִים לַיהוָה … תָּמִים יִהְיֶה לְרָצוֹן` (ויקרא כב:כא) | equivalent | הקורבן "היפה", התקין, כתנאי לריצוי: ἱλάσκομαι `רִצָּה` (`../renderings.md` §11.1), והעברית מראה את הקשר אל `לְרָצוֹן`. השבעים מתרגמים את `לְרָצוֹן` במלה אחרת (δεκτός), כך שהקשר הוא דרך העברית בלבד (`../renderings.md` §6, הסוג ב). מוטיב משותף לכל עולם הקורבנות הקדום: הקורבן חייב להיות כראוי, כדי שיתקבל. |
| 426 | οὐδʼ, ὅτι μουνογενής, ἧσσον θεὰ ἔμμορε τιμῆς, | ולא, משום שהיא יחידה, נחלה הָאֵלָה פחות כבוד, | `וְרַק הִיא יְחִידָה אֵין לוֹ מִמֶּנּוּ בֵּן אוֹ בַת` (שופטים יא:לד) | equivalent | בתו של יפתח, הבת היחידה; השבעים (בכתבי היד העיקריים) מתרגמים שם `יְחִידָה` ב־μονογενής, מלת הסיודוס – ספר שופטים אינו בתוכנה שבידינו, ולכן לא צוטט. ובבראשית כב:ב (`אֶת בִּנְךָ אֶת יְחִידְךָ`) בחרו השבעים ב־ἀγαπητόν "האהוב". בשני המקומות היחידות היא פגיעות: בת יחידה שאין לה מגן – הקטה, שזאוס מגן עליה דווקא בשל כך, ובת יפתח, שאיש אינו מגן עליה. |
| 434 | ἔν τε δίκῃ βασιλεῦσι παρʼ αἰδοίοισι καθίζει, | ובמשפט היא יושבת לצד מלכים נערצים, | `בִּי מְלָכִים יִמְלֹכוּ וְרֹזְנִים יְחֹקְקוּ צֶדֶק` (משלי ח:טו); `מֶלֶךְ יוֹשֵׁב עַל כִּסֵּא דִין` (משלי כ:ח) | equivalent | החכמה המואנשת, שבזכותה המלכים שופטים צדק; כאן אלה היושבת לצד המלך בשעת המשפט. דמות אלוהית העומדת לצד השופט – מוטיב של חכמת המלוכה במזרח הקדום וביוון (והשווה המוזות הנותנות למלך דיבור רך במשפט, 80–90). אין קשר בין הטקסטים. וגם . |
| 440 | καὶ τοῖς, οἳ γλαυκὴν δυσπέμφελον ἐργάζονται, | ולאלה העובדים את (הים) הבהיר וקשה־הסערות, | `וְאָדָם אַיִן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה) | equivalent | ובשבעים: `καὶ ἄνθρωπος οὐκ ἦν ἐργάζεσθαι τὴν γῆν` (השבעים, בראשית ב:ה): ἐργάζομαι הוא פועל השבעים ל`עָבַד` את האדמה, ולכן `עָבַד` כאן (חובה, `../renderings.md` §5). אצל הסיודוס הדייגים "עובדים את הים" – אותו פועל, שדה אחר: הים הוא אדמת עבודה של מי שאין לו אדמה. |
| 447 | ἐξ ὀλίγων βριάει κἀκ πολλῶν μείονα θῆκεν. | מן המעטים היא מגבירה, ומן הרבים שמה (אותם) מעטים. | `יְהוָה מוֹרִישׁ וּמַעֲשִׁיר מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | equivalent | האל ההופך את גורל בני האדם, מעשיר ומרושש. אצל חנה זה שבח לצדק האל, המרים דלים; אצל הסיודוס זה חופש בחירתה של האלה ("כרצון לבה"), בלי מוסר. מוטיב משותף של הכוח האלוהי על השפע, בלי קשר בין הטקסטים. והשווה מעשים וימים 5–7. |
| 450 | θῆκε δέ μιν Κρονίδης κουροτρόφον, οἳ μετʼ ἐκείνην | ובן־קרונוס שם אותה למגדלת־הנערים, (לכל) אשר אחריה | `כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | equivalent | דמות המגדל־המיניק כדימוי לאחריות על עם. אצל הסיודוס אלה ממש היא האומנת של כל הילדים שנולדו אחריה. מוטיב, לא קשר. |
| 459 | καὶ τοὺς μὲν κατέπινε μέγας Κρόνος, ὥς τις ἕκαστος | ואותם היה בולע קרונוס הגדול, כל אחד | `וַיִּבְלַע מַטֵּה אַהֲרֹן אֶת מַטֹּתָם` (שמות ז:יב); `בִּלַּע הַמָּוֶת לָנֶצַח` (ישעיהו כה:ח) | equivalent | ובשבעים: `καὶ κατέπιεν ἡ ῥάβδος ἡ Ααρων τὰς ἐκείνων ῥάβδους` (השבעים, שמות ז:יב): καταπίνω הוא פועל השבעים ל`בָּלַע`, ולכן `בָּלַע` כאן. ובמקום שבו הבולע הוא כוח קוסמי: , ובשבעים `κατέπιεν ὁ θάνατος` (השבעים, ישעיהו כה:ח). |
| 460 | νηδύος ἐξ ἱερῆς μητρὸς πρὸς γούναθʼ ἵκοιτο, | כפי שהגיע מתוך מעי אמו הקדושים אל הברכיים, | `וְתֵלֵד עַל בִּרְכַּי` (בראשית ל:ג); `יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (בראשית נ:כג) | equivalent | ובשבעים: `καὶ τέξεται ἐπὶ τῶν γονάτων μου` (השבעים, בראשית ל:ג): γόνυ, מלת הסיודוס. התינוק הנולד מונח על הברכיים – מנהג ההכרה בוולד (וכן ). מנהג משותף לעולם הקדום. ואצל הסיודוס – הברכיים הן התחנה שבה האב חוטף את הילד במקום להכיר בו. |
| 467 | παῖδας ἑοὺς κατέπινε· Ῥέην δʼ ἔχε πένθος ἄλαστον. | את ילדיו היה בולע; ואת רֵאָה אחז אֵבֶל שאין לשכחו. | `רָחֵל מְבַכָּה עַל בָּנֶיהָ מֵאֲנָה לְהִנָּחֵם עַל בָּנֶיהָ כִּי אֵינֶנּוּ` (ירמיהו לא:יד) | equivalent | אם המבכה על בניה שאבדו, אבל שאין לו נחמה: המוטיב של אבל האם הוא כלל־אנושי; כאן האבל מוביל למעשה – רֵאָה מתכננת הצלה (469–471). אין קשר. |
| 477 | πέμψαν δʼ ἐς Λύκτον, Κρήτης ἐς πίονα δῆμον, | ושלחו אותה אל לִיקְטוֹס, אל מחוז כְּרֵתִים השמן, | `הוֹי יֹשְׁבֵי חֶבֶל הַיָּם גּוֹי כְּרֵתִים` (צפניה ב:ה); `וּפְלִשְׁתִּיִּים מִכַּפְתּוֹר` (עמוס ט:ז) | equivalent | `כְּרֵתִים` הוא השם המקראי לעם הים, ובשבעים שם (לפי `../renderings.md` §2.3) Κρητῶν: השם היווני של האי. לכן Κρήτη `כְּרֵתִים` (`../renderings.md` §2.3); ואת כרתים מזהים בדרך כלל עם `כַּפְתּוֹר`, מוצא הפלשתים (). זו הנקודה היחידה בשיר שבה ארץ שהמקרא מכיר היא חלק מן העלילה. |
| 482 | πρώτην ἐς Λύκτον· κρύψεν δέ ἑ χερσὶ λαβοῦσα | ראשונה אל ליקטוס; והסתירה אותו, משלקחה אותו בידיה, | `וַתַּהַר הָאִשָּׁה וַתֵּלֶד בֵּן וַתֵּרֶא אֹתוֹ כִּי טוֹב הוּא וַתִּצְפְּנֵהוּ שְׁלֹשָׁה יְרָחִים` (שמות ב:ב); `כָּל הַבֵּן הַיִּלּוֹד הַיְאֹרָה תַּשְׁלִיכֻהוּ` (שמות א:כב) | divergence | האם המסתירה את התינוק מפני שליט ההורג את הבנים שנולדים (). אותו מוטיב של "הילד המוסתר" – מושה, סרגון מאכד, זאוס – שגדל והופך את הסדר. ההבדל: כאן השליט הוא האב עצמו. |
| 485 | τῷ δὲ σπαργανίσασα μέγαν λίθον ἐγγυάλιξεν | ולו – מִשֶּׁחִתְּלָה אבן גדולה – מסרה לידיו, | `וְהָחְתֵּל לֹא חֻתָּלְתְּ` (יחזקאל טז:ד); `וַעֲרָפֶל חֲתֻלָּתוֹ` (איוב לח:ט) | equivalent | החיתול כמעשה הראשון בתינוק שנולד; בשבעים שם, לפי מה שידוע לי, σπαργανόω – הפועל של הסיודוס (ספר יחזקאל אינו בתוכנה שבידינו, ולכן לא צוטט). ובאיוב, על הים בלידתו: . |
| 489 | ἀντὶ λίθου ἑὸς υἱὸς ἀνίκητος καὶ ἀκηδὴς | תחת האבן – בנו, בלתי מנוצח ונקי־צער, | `וַיִּקַּח אֶת הָאַיִל וַיַּעֲלֵהוּ לְעֹלָה תַּחַת בְּנוֹ` (בראשית כב:יג) | equivalent | ובשבעים: `ἀνήνεγκεν αὐτὸν εἰς ὁλοκάρπωσιν ἀντὶ Ισαακ τοῦ υἱοῦ αὐτοῦ` (השבעים, בראשית כב:יג): ἀντί, מלת הסיודוס, היא מלת השבעים ל`תַּחַת`, ולכן `תַּחַת` כאן. בשני הסיפורים אב "מכלה" את בנו, ודבר אחר בא תחתיו – אבן, איל – והבן נשאר חי. בבראשית האב נכון למסור את בנו בצו האל, והאל עצמו מספק את התחליף; כאן האב בולע מרצונו, והאם מרמה אותו. מוטיב התחליף לבן, בלי קשר בין הטקסטים. |
| 497 | πρῶτον δʼ ἐξέμεσεν λίθον, ὃν πύματον κατέπινεν· | ראשונה הקיא את האבן, אשר אחרונה בלע; | `חַיִל בָּלַע וַיְקִאֶנּוּ מִבִּטְנוֹ יֹרִשֶׁנּוּ אֵל` (איוב כ:טו); `וְהֹצֵאתִי אֶת בִּלְעוֹ מִפִּיו` (ירמיהו נא:מד); `כַּתַּנִּין מִלָּא כְרֵשׂוֹ` (ירמיהו נא:לד); `וַיָּקֵא אֶת יוֹנָה אֶל הַיַּבָּשָׁה` (יונה ב:יא) | equivalent | הרשע הבולע עושר, והאל מוציא אותו מבטנו בכוח; ו – אחרי שבבל "בלעה" את ירושלים : הבולע הגדול שנאלץ להקיא את מה שבלע. ו. הדימוי של בליעה והקאה כשיפוט על חמסן משותף לכל המזרח הקדום, ובמקרא הוא מטפורה של צדק; אצל הסיודוס הוא סיפור ממש, בגוף. אין קשר. |
| 498 | τὸν μὲν Ζεὺς στήριξε κατὰ χθονὸς εὐρυοδείης | אותה קבע זאוס באדמה רחבת־הדרכים | `וַיִּקַּח אֶת הָאֶבֶן אֲשֶׁר שָׂם מְרַאֲשֹׁתָיו וַיָּשֶׂם אֹתָהּ מַצֵּבָה וַיִּצֹק שֶׁמֶן עַל רֹאשָׁהּ` (בראשית כח:יח); `וְהָאֶבֶן הַזֹּאת אֲשֶׁר שַׂמְתִּי מַצֵּבָה יִהְיֶה בֵּית אֱלֹהִים` (בראשית כח:כב); `וַיִּצֹק עָלֶיהָ שָׁמֶן` (בראשית לה:יד) | divergence | ובשבעים: `καὶ ἔστησεν αὐτὸν στήλην καὶ ἐπέχεεν ἔλαιον ἐπὶ τὸ ἄκρον αὐτῆς` (השבעים, בראשית כח:יח): אבן מוצבת במקום קדוש, אחרי התגלות, לאות לדורות (). המלים היווניות שונות (στηρίζω אצל הסיודוס, ἵστημι στήλην בשבעים), אך המוטיב – אבן קדושה העומדת לעולם – משותף. ופאוסניאס (המאה השנייה לספירה, י 24 6) ראה בדלפי אבן קטנה, שאמרו עליה שהיא האבן שניתנה לקרונוס, ו"מושחים אותה בשמן בכל יום" ועוטפים אותה בצמר בחגים – כמו מצבת יעקב (). ויותר מזה: המלה היוונית למצבה כזאת, βαίτυλος, נגזרת כנראה מן השמית `בֵּית אֵל`, וההסיכיוס (מילונאי מאוחר) מבאר אותה: "האבן שניתנה לקרונוס במקום זאוס". זו ככל הנראה נקודת מגע ממשית בין יוון לעולם השמי, אם כי לא עם המקרא דווקא: פולחן האבנים המוצבות היה משותף לכנען ולסוריה. |
| 500 | σῆμʼ ἔμεν ἐξοπίσω, θαῦμα θνητοῖσι βροτοῖσιν. | להיות אות לימים יבואו, פלא לבני אנוש בני־התמותה. | `לְמַעַן תִּהְיֶה זֹאת אוֹת בְּקִרְבְּכֶם כִּי יִשְׁאָלוּן בְּנֵיכֶם מָחָר לֵאמֹר מָה הָאֲבָנִים הָאֵלֶּה לָכֶם` (יהושע ד:ו); `וְהָיוּ הָאֲבָנִים הָאֵלֶּה לְזִכָּרוֹן לִבְנֵי יִשְׂרָאֵל עַד עוֹלָם` (יהושע ד:ז) | equivalent | אבנים מוצבות "לאות" לדורות הבאים, לזכר מעשה האל (). אותו מנגנון של זיכרון קדוש: אבן שהיא סיפור. σῆμα – מאותה משפחה של σημεῖον, מלת השבעים הרגילה ל`אוֹת` (`καὶ ἔστωσαν εἰς σημεῖα` (השבעים, בראשית א:יד)); ולכן `אוֹת`. מוטיב משותף, בלי קשר. |
| 507 | κούρην δʼ Ἰαπετὸς καλλίσφυρον Ὠκεανίνην | ויאפטוס את העלמה, בת־אוקאנוס נְאוַת־הקרסוליים, | `בְּנֵי יֶפֶת גֹּמֶר וּמָגוֹג וּמָדַי וְיָוָן וְתֻבָל וּמֶשֶׁךְ וְתִירָס` (בראשית י:ב) | divergence | ובשבעים: `Υἱοὶ Ιαφεθ` (השבעים, בראשית י:ב). מאז העת העתיקה השוו את Ἰαπετός ל`יֶפֶת`, אבי `יָוָן` (בני יון: היוונים) – דמיון צלילים, ואולי זיכרון של שם קדום במזרח הים התיכון; אבל השבעים כותבים Ιαφεθ, לא Ἰαπετός, כלומר המתרגמים לא זיהו את השניים. אצל הסיודוס יאפטוס הוא טיטן, אבי פרומתאוס ואבי־אבי האדם (לפי מסורות מאוחרות, דאוקליון בן פרומתאוס הוא אבי היוונים); בבראשית יפת הוא בן נח ואבי עמי הים. הזיהוי נשאר השערה; לכן `יָאפֶּטוֹס` ולעולם לא `יֶפֶת` (`../renderings.md` §2.3). |
| 513 | πρῶτος γάρ ῥα Διὸς πλαστὴν ὑπέδεκτο γυναῖκα | כי הוא ראשון קיבל את האשה היצורה מאת זאוס, | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | equivalent | ובשבעים: `καὶ ἔπλασεν ὁ θεὸς τὸν ἄνθρωπον` (השבעים, בראשית ב:ז): πλαστός מן πλάσσω, הפועל של השבעים ל`יָצַר`, ולכן `יְצוּרָה`. ההקדמה הראשונה לאשה "היצורה" (570–589): ראו שם. |
| 517 | Ἄτλας δʼ οὐρανὸν εὐρὺν ἔχει κρατερῆς ὑπʼ ἀνάγκης | ואטלס אוחז בשמים הרחבים מכוח הכרח עז, | `נֹטֶה שָׁמַיִם לְבַדּוֹ` (איוב ט:ח); `עַמּוּדֵי שָׁמַיִם יְרוֹפָפוּ` (איוב כו:יא) | divergence | במקרא האל לבדו נוטה את השמים, ואין מי שנושא אותם מתחת; ו – לשמים יש "עמודים", כמו לבית. אצל הסיודוס השמים נשענים על כתפי טיטן נענש. אותה בעיה קוסמולוגית – מה מחזיק את השמים מעל הארץ? – ושתי תשובות: עמודים בצו האל, או ענק בעונש. אין קשר. |
| 523 | καί οἱ ἐπʼ αἰετὸν ὦρσε τανύπτερον· αὐτὰρ ὅ γʼ ἧπαρ | וְהֵעִיר עליו נשר פרוש־כנפיים; והוא את הכבד | `וָאֶשָּׂא אֶתְכֶם עַל כַּנְפֵי נְשָׁרִים` (שמות יט:ד) | equivalent | ובשבעים: `ὡσεὶ ἐπὶ πτερύγων ἀετῶν` (השבעים, שמות יט:ד): ἀετός היא מלת השבעים ל`נֶשֶׁר`, ולכן `נֶשֶׁר` (והעברית המקראית אינה מבחינה בין נשר לעיט). |
| 523 | καί οἱ ἐπʼ αἰετὸν ὦρσε τανύπτερον· αὐτὰρ ὅ γʼ ἧπαρ | וְהֵעִיר עליו נשר פרוש־כנפיים; והוא את הכבד | `עַיִן תִּלְעַג לְאָב … יִקְּרוּהָ עֹרְבֵי נַחַל וְיֹאכְלוּהָ בְנֵי נָשֶׁר` (משלי ל:יז) | divergence | עונש של עוף טורף האוכל איבר מגופו של חוטא: במשלי זה עונש לעין שבזה להורים, כאן לכבד של מי שמרד באל־האב. מוטיב משותף, בלי קשר. |
| 538 | τοῖς μὲν γὰρ σάρκας τε καὶ ἔγκατα πίονα δημῷ | לָאֵלֶּה – את הבשר ואת הקרביים השמנים בחלב | `וְהִקְרִיב מִזֶּבַח הַשְּׁלָמִים אִשֶּׁה לַיהוָה אֶת הַחֵלֶב הַמְכַסֶּה אֶת הַקֶּרֶב וְאֵת כָּל הַחֵלֶב אֲשֶׁר עַל הַקֶּרֶב` (ויקרא ג:ג); `כָּל חֵלֶב לַיהוָה` (ויקרא ג:טז); `כָּל חֵלֶב שׁוֹר וְכֶשֶׂב וָעֵז לֹא תֹאכֵלוּ` (ויקרא ז:כג) | equivalent | אותם חלקים של הבהמה – החלב, הקרביים – ובמקרא החלב הוא חלקו של האל, , ואסור באכילה (). המלה היוונית לחלב כאן, δημός, אינה המלה של השבעים (στέαρ), ולכן הקשר הוא דרך העברית בלבד (`../renderings.md` §6, הסוג ב). |
| 541 | εὐθετίσας κατέθηκε καλύψας ἀργέτι δημῷ. | בערכו אותן היטב, הניח, משכיסה אותן בחלב צח. | `וְאֶת הַחֵלֶב הַמְכַסֶּה אֶת הַקֶּרֶב` (שמות כט:כב) | equivalent | ובשבעים: `καὶ τὸ στέαρ τὸ κατακαλύπτον τὴν κοιλίαν` (השבעים, שמות כט:כב): הפועל καλύπτω, אותו פועל של הסיודוס – החלב המכסה. במקרא החלב מכסה את הקרביים מטבעו, והוא עצמו הקורבן; כאן החלב "מכסה" בתחבולה, כדי להסתיר. |
| 541 | εὐθετίσας κατέθηκε καλύψας ἀργέτι δημῷ. | בערכו אותן היטב, הניח, משכיסה אותן בחלב צח. | `וְעָרְכוּ בְּנֵי אַהֲרֹן הַכֹּהֲנִים אֵת הַנְּתָחִים אֶת הָרֹאשׁ וְאֶת הַפָּדֶר עַל הָעֵצִים` (ויקרא א:ח) | equivalent | עריכת חלקי הקורבן; εὐθετίζω `עָרַךְ`. |
| 557 | καίουσʼ ὀστέα λευκὰ θυηέντων ἐπὶ βωμῶν. | שורפים עצמות לבנות על מזבחות ריחניים. | `וְהֶבֶל הֵבִיא גַם הוּא מִבְּכֹרוֹת צֹאנוֹ וּמֵחֶלְבֵהֶן` (בראשית ד:ד); `וְהִקְטִירָם הַכֹּהֵן הַמִּזְבֵּחָה לֶחֶם אִשֶּׁה לְרֵיחַ נִיחֹחַ כָּל חֵלֶב לַיהוָה` (ויקרא ג:טז) | divergence | ובשבעים: `καὶ ἀπὸ τῶν στεάτων αὐτῶν` (השבעים, בראשית ד:ד): בקורבן הראשון במקרא, החלב הוא המנחה הרצויה; וכך בתורה: . אצל הסיודוס החלב הוא העטיפה המרמה, והקורבן "לאלים" הוא העצמות – והמשורר מספר על כך בלי בושה: כך מקריבים בפועל ביוון, והמיתוס מסביר זאת. |
| 557 | καίουσʼ ὀστέα λευκὰ θυηέντων ἐπὶ βωμῶν. | שורפים עצמות לבנות על מזבחות ריחניים. | `וַיִּבֶן נֹחַ מִזְבֵּחַ לַיהוָה` (בראשית ח:כ); `וַיָּרַח יְהוָה אֶת רֵיחַ הַנִּיחֹחַ` (בראשית ח:כא) | divergence | הקורבן כרגע מכונן אחרי אסון, שבו האל מריח וקובע את סדר העולם מחדש. ובשבעים: `καὶ ᾠκοδόμησεν Νωε θυσιαστήριον τῷ θεῷ` (השבעים, בראשית ח:כ): השבעים אינם משתמשים ב־βωμός (מלת הסיודוס) למזבח לאל ישראל, אלא ב־θυσιαστήριον – הימנעות מכוונת (`../renderings.md` §6, הסוג ג); לכן `מִזְבֵּחַ` כאן הוא תרגום של βωμός, המזבח היווני. ו`רֵיחַ הַנִּיחֹחַ` – אין כאן מלה כזאת: θυήεις הוא תואר של המזבח, `רֵיחָנִי`. |
| 557 | καίουσʼ ὀστέα λευκὰ θυηέντων ἐπὶ βωμῶν. | שורפים עצמות לבנות על מזבחות ריחניים. | `הַאוֹכַל בְּשַׂר אַבִּירִים וְדַם עַתּוּדִים אֶשְׁתֶּה` (תהלים נ:יג) | divergence | האל אינו אוכל בשר: אותו רעיון שמונח ביסוד מקונה – האלים אינם זקוקים לבשר – אבל בתהלים זו ביקורת על הקורבן, ואצל הסיודוס זה ההסבר שלו. |
| 570 | αὐτίκα δʼ ἀντὶ πυρὸς τεῦξεν κακὸν ἀνθρώποισιν· | ומיד, תחת האש, התקין רעה לבני האדם: | `כִּי שָׁת לִי אֱלֹהִים זֶרַע אַחֵר תַּחַת הֶבֶל` (בראשית ד:כה) | equivalent | ובשבעים: `σπέρμα ἕτερον ἀντὶ Αβελ` (השבעים, בראשית ד:כה): ἀντί, מלת הסיודוס כאן ובשורה 602 (`ἕτερον … κακὸν ἀντʼ ἀγαθοῖο`) – אותו צירוף, ἕτερον … ἀντί; ולכן `תַּחַת` (ראו 489). המגע הוא לשוני בלבד: שם בן חליף, כאן רעה חליפית. |
| 571 | γαίης γὰρ σύμπλασσε περικλυτὸς Ἀμφιγυήεις | כי מן האדמה יצר צוֹלֵעַ־הָרַגְלַיִים המהולל מאוד | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) | equivalent | ובשבעים: `καὶ ἔπλασεν ὁ θεὸς τὸν ἄνθρωπον χοῦν ἀπὸ τῆς γῆς` (השבעים, בראשית ב:ז): πλάσσω (כאן συμπλάσσω) הוא הפועל של השבעים ל`וַיִּיצֶר`, וγῆ/γαῖα – לחומר; לכן `יָצַר` ו`אֲדָמָה` במובן החומרי (`../renderings.md` §5–§6, חובה). שני סיפורים של יצירת אדם ראשון מן האדמה, ביד אל אומן. |
| 571 | γαίης γὰρ σύμπλασσε περικλυτὸς Ἀμφιγυήεις | כי מן האדמה יצר צוֹלֵעַ־הָרַגְלַיִים המהולל מאוד | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה` (בראשית ב:כב) | divergence | ובשבעים: `καὶ ᾠκοδόμησεν κύριος ὁ θεὸς τὴν πλευράν` (השבעים, בראשית ב:כב): בבראשית האשה **נבנית** מן האיש – מאותו חומר, "עצם מעצמי" (ב:כג); אצל הסיודוס היא נוצרת **בנפרד**, מן האדמה, בידי אל אחר, כשהגברים כבר קיימים: היא אינה חלק מן האיש, היא תוספת זרה. ובבראשית האדם (הזכר) נוצר מן האדמה, ואצל הסיודוס דווקא האשה – הגברים כבר חיים, ומוצאם אינו מסופר. כאן ההבדל העמוק ביותר: מוטיב משותף (יצירה מן האדמה), ותפקיד הפוך. |
| 573 | ζῶσε δὲ καὶ κόσμησε θεὰ γλαυκῶπις Ἀθήνη | וחגרה אותה וקישטה הָאֵלָה, אַתֵנָה בהירת־העיניים, | `כֶּחָתָן יְכַהֵן פְּאֵר וְכַכַּלָּה תַּעְדֶּה כֵלֶיהָ` (ישעיהו סא:י) | equivalent | ובשבעים: `καὶ ὡς νύμφην κατεκόσμησέν με κόσμῳ` (השבעים, ישעיהו סא:י): κοσμέω ו־κόσμος (573, 587) הם מלות השבעים לקישוט הכלה – האשה הראשונה מקושטת ככלה בדרך אל בעלה. מוטיב של טקס הנישואין, לא קשר. |
| 574 | ἀργυφέη ἐσθῆτι· κατὰ κρῆθεν δὲ καλύπτρην | בבגד לבן־כסוף; ומראשה צעיף | `וַתִּקַּח הַצָּעִיף וַתִּתְכָּס` (בראשית כד:סה) | equivalent | רבקה מתכסה בצעיף כשהיא רואה את יצחק: צעיף הכלה ברגע הפגישה עם החתן. ובשבעים שם θέριστρον, מלה אחרת מ־καλύπτρα. מנהג משותף לכל המזרח וליוון (ביוון: ה"אנקליפטריה", הסרת הצעיף ביום החתונה). |
| 578 | ἀμφὶ δέ οἱ στεφάνην χρυσέην κεφαλῆφιν ἔθηκε, | וסביב ראשה שמה עטרה זהובה, | `וָאֶתֵּן נֶזֶם עַל אַפֵּךְ וַעֲגִילִים עַל אָזְנָיִךְ וַעֲטֶרֶת תִּפְאֶרֶת בְּרֹאשֵׁךְ` (יחזקאל טז:יב) | equivalent | האל מקשט את הנערה שגידל, ככלה, ובסוף העטרה בראשה; וגם שם היופי המקושט הופך לבגידה (טז:טו: `וַתִּבְטְחִי בְיָפְיֵךְ`). מוטיב משותף של קישוט הכלה בידי האל – וקריאה כפולה של היופי. אין קשר. |
| 580 | ἀσκήσας παλάμῃσι, χαριζόμενος Διὶ πατρί. | בלטשו אותה בכפות ידיו, לשאת חן בעיני זאוס האב. | `וְצִלָּה גַם הִוא יָלְדָה אֶת תּוּבַל קַיִן לֹטֵשׁ כָּל חֹרֵשׁ נְחֹשֶׁת וּבַרְזֶל` (בראשית ד:כב) | equivalent | הנפח הראשון במקרא, תובל קין, "לוטש" – כאן הנפח האלוהי. בשבעים שם `σφυροκόπος χαλκεὺς` (השבעים, בראשית ד:כב), מלים אחרות מ־ἀσκέω: הקשר הוא דרך העברית בלבד (הסוג ב). שתי דמויות של "אבי הנפחות", מוטיב מוכר בעולם הקדום (גם כותר־וחסיס באוגרית). |
| 585 | αὐτὰρ ἐπεὶ δὴ τεῦξε καλὸν κακὸν ἀντʼ ἀγαθοῖο. | אך משהתקין, אכן, את הרעה היפה תחת הטוב, | `וַתֵּרֶא הָאִשָּׁה כִּי טוֹב הָעֵץ לְמַאֲכָל` (בראשית ג:ו); `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח) | divergence | ובשבעים: `ὅτι καλὸν τὸ ξύλον εἰς βρῶσιν` (השבעים, בראשית ג:ו): השבעים מתרגמים `טוֹב` ב־καλός, המלה של הסיודוס. בבראשית האשה רואה שהעץ "טוב" (= καλόν), ומן הטוב הזה באה הרעה; אצל הסיודוס האשה עצמה היא ה־καλόν: "רעה יפה". ובבראשית , ובשבעים `Οὐ καλὸν εἶναι τὸν ἄνθρωπον μόνον` (השבעים, בראשית ב:יח) – האשה נבראת כי לא "καλόν" שיהיה האדם לבדו; אצל הסיודוס היא "καλὸν κακόν", ובכל זאת גם הרווק אומלל (603–607). מגע לשוני דרך השבעים; ואת התרגום אין להחליק: καλός `יָפֶה`, `טוֹב` שמור ל־ἀγαθός (`../renderings.md` §5, §6). |
| 585 | αὐτὰρ ἐπεὶ δὴ τεῦξε καλὸν κακὸν ἀντʼ ἀγαθοῖο. | אך משהתקין, אכן, את הרעה היפה תחת הטוב, | `נֶזֶם זָהָב בְּאַף חֲזִיר אִשָּׁה יָפָה וְסָרַת טָעַם` (משלי יא:כב) | equivalent | היופי החיצוני שאינו מעיד על הפנים: אותה תבנית מחשבה, במשל. |
| 590 | ἐκ τῆς γὰρ γένος ἐστὶ γυναικῶν θηλυτεράων, | כי ממנה הוא גזע הנשים הנקבות, | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | divergence | ובשבעים: `ἄρσεν καὶ θῆλυ ἐποίησεν αὐτούς` (השבעים, בראשית א:כז): θῆλυς היא מלת השבעים ל`נְקֵבָה`, ולכן `נְקֵבָה` כאן (זהות לשונית). בבראשית א הזכר והנקבה נבראים יחד, בצלם אחד; אצל הסיודוס הנקבה היא "גזע" נפרד, שבא מאשה אחת שנוספה מאוחר. |
| 590 | ἐκ τῆς γὰρ γένος ἐστὶ γυναικῶν θηλυτεράων, | כי ממנה הוא גזע הנשים הנקבות, | `וַיִּקְרָא הָאָדָם שֵׁם אִשְׁתּוֹ חַוָּה כִּי הִוא הָיְתָה אֵם כָּל חָי` (בראשית ג:כ) | divergence | חוה היא אם כל חי, הגברים והנשים כאחד; כאן האשה הראשונה היא אם הנשים בלבד. |
| 593 | οὐλομένης πενίης οὐ σύμφοροι, ἀλλὰ κόροιο. | לא חברות לעוני הַמַּמְאִיר, אלא לשובע. | `וְלֶחֶם עַצְלוּת לֹא תֹאכֵל` (משלי לא:כז) | divergence | "אשת החיל" במשלי היא היפוכה הגמור של האשה כאן: שם האשה היא המנהלת את משק הבית ומפרנסת אותו (משלי לא:י–לא), ואינה אוכלת "לחם עצלות"; כאן הנשים הן הצרכניות שאינן עובדות (594–599). שני דימויים של האשה בבית החקלאי הקדום – אותה כלכלה, שתי הערכות הפוכות. אין קשר. |
| 594 | ὡς δʼ ὁπότʼ ἐν σμήνεσσι κατηρεφέεσσι μέλισσαι | וכמו כאשר בכוורות מְקֹרוֹת הדבורים | `לֵךְ אֶל נְמָלָה עָצֵל רְאֵה דְרָכֶיהָ וַחֲכָם` (משלי ו:ו); `תָּכִין בַּקַּיִץ לַחְמָהּ אָגְרָה בַקָּצִיר מַאֲכָלָהּ` (משלי ו:ח) | divergence | משל החרקים החרוצים ללימוד מוסר על עבודה: גם כאן וגם שם, ובמעשים וימים 303–306 הסיודוס עצמו ישתמש ברחפנים כמשל לבטלן. ההבדל: במשלי העצל הוא כל אדם, ואילו כאן הרחפנים – כלומר הבטלנים – הם הנשים. |
| 599 | ἀλλότριον κάματον σφετέρην ἐς γαστέρʼ ἀμῶνται— | קוצרים את יגיע הזרים אל בטנם – | `יְגִיעַ כַּפֶּיךָ כִּי תֹאכֵל אַשְׁרֶיךָ וְטוֹב לָךְ` (תהלים קכח:ב); `אֶשְׁתְּךָ כְּגֶפֶן פֹּרִיָּה בְּיַרְכְּתֵי בֵיתֶךָ` (תהלים קכח:ג) | equivalent | אכילת היגיע של עצמו כאשר, והיפוכו – אכילת יגיע אחרים; ובאותו מזמור:  – האשה כברכת הבית, היפוך הדימוי של הסיודוס. |
| 599 | ἀλλότριον κάματον σφετέρην ἐς γαστέρʼ ἀμῶνται— | קוצרים את יגיע הזרים אל בטנם – | `פֶּן יִשְׂבְּעוּ זָרִים כֹּחֶךָ וַעֲצָבֶיךָ בְּבֵית נָכְרִי` (משלי ה:י) | equivalent | זרים "שבעים" מעמלו של אדם, ודווקא בהקשר של האשה הזרה (משלי ה:ג–ח): אותו פחד – שאשה תביא לכך שאחרים יאכלו את עמלך. מוטיב משותף של חכמת הבית, בלי קשר. |
| 604 | μὴ γῆμαι ἐθέλῃ, ὀλοὸν δʼ ἐπὶ γῆρας ἵκοιτο | ולא ירצה לשאת אשה, יגיע אל זקנה משחיתה | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח) | equivalent | אותו לקח, ממקום אחר: בבראשית לפני שהאשה נוצרת, כעובדה של בריאה; אצל הסיודוס אחרי, כהכרח מר. אין קשר. |
| 605 | χήτεϊ γηροκόμοιο· ὅ γʼ οὐ βιότου ἐπιδευὴς | בחוסר מכלכל לשיבתו; הוא אינו חסר מחיה | `וְהָיָה לָךְ לְמֵשִׁיב נֶפֶשׁ וּלְכַלְכֵּל אֶת שֵׂיבָתֵךְ` (רות ד:טו) | equivalent | הנכד שנולד לנעמי הוא "מכלכל שיבתה": בדיוק γηροκόμος. אותו מבנה של חברה: הדור הבא מפרנס את הזקנים. מוטיב משותף לכל העולם הקדום. |
| 606 | ζώει, ἀποφθιμένου δὲ διὰ κτῆσιν δατέονται | בחייו, אך משדעך, את קניינו מחלקים ביניהם | `יֵשׁ אֶחָד וְאֵין שֵׁנִי גַּם בֵּן וָאָח אֵין לוֹ וְאֵין קֵץ לְכָל עֲמָלוֹ` (קהלת ד:ח); `וּלְמִי אֲנִי עָמֵל` (קהלת ד:ח); `שֶׁאַנִּיחֶנּוּ לָאָדָם שֶׁיִּהְיֶה אַחֲרָי` (קהלת ב:יח) | equivalent | האיש בלי בן שעמלו הולך לאחרים; ו. אותו פחד של אדם קדום: הרכוש שנצבר בעמל – אל מי ילך? מוטיב משותף של חכמה מעשית, בלי קשר. |
| 607 | χηρωσταί· ᾧ δʼ αὖτε γάμου μετὰ μοῖρα γένηται, | יורשים רחוקים; ומי שחלק של נישואים נהיה לו, | `וְאָנֹכִי הוֹלֵךְ עֲרִירִי וּבֶן מֶשֶׁק בֵּיתִי הוּא דַּמֶּשֶׂק אֱלִיעֶזֶר` (בראשית טו:ב); `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג) | equivalent | ובשבעים: `ἐγὼ δὲ ἀπολύομαι ἄτεκνος` (השבעים, בראשית טו:ב): אברם חושש שנחלתו תעבור לבן־בית במקום לבן; הסיודוס – ש"יורשים רחוקים" יחלקו את הנחלה. אותו חשש של חברה שבה הנחלה צריכה בן. אין קשר. |
| 608 | κεδνὴν δʼ ἔσχεν ἄκοιτιν ἀρηρυῖαν πραπίδεσσι, | וזכה ברעיה הגונה, הולמת בבינתה, | `בַּיִת וָהוֹן נַחֲלַת אָבוֹת וּמֵיְהוָה אִשָּׁה מַשְׂכָּלֶת` (משלי יט:יד); `מָצָא אִשָּׁה מָצָא טוֹב` (משלי יח:כב) | equivalent | האשה הנבונה כמתנה; ו. שני הספרים מכירים באשה טובה, וחוששים מאשה רעה (610). |
| 609 | τῷ δέ τʼ ἀπʼ αἰῶνος κακὸν ἐσθλῷ ἀντιφερίζει | לו כל ימי חייו הרע מתמודד עם הטוב | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | divergence | ובשבעים `οἱ γίγαντες οἱ ἀπ’ αἰῶνος` (השבעים, בראשית ו:ד) – אותו צירוף יווני שבשורה הזאת, אך במובן אחר: אצל הסיודוס αἰών הוא אורך חייו של אדם, ולכן `כל ימי חייו`, ולא `מֵעוֹלָם` (`../renderings.md` §6). זהות צורנית בלבד. |
| 610 | ἐμμενές· ὃς δέ κε τέτμῃ ἀταρτηροῖο γενέθλης, | בלי הרף; ומי שנקרית לו (אשה) מתולדה מזיקה, | `טוֹב לָשֶׁבֶת עַל פִּנַּת גָּג מֵאֵשֶׁת מִדְיָנִים וּבֵית חָבֶר` (משלי כא:ט); `וּמוֹצֶא אֲנִי מַר מִמָּוֶת אֶת הָאִשָּׁה` (קהלת ז:כו) | equivalent | האשה הרעה כצרה בבית; ו. חכמת המשפחה של המזרח מכירה את הנושא; אבל אף אחד מן הפסוקים אינו אומר שכל הנשים הן רעה מיסודן, כפי שאומר כאן הסיודוס (590–602). ההבדל העקרוני, ולא רק בטון. |
| 612 | θυμῷ καὶ κραδίῃ, καὶ ἀνήκεστον κακόν ἐστιν. | בלבו ובקרבו, והרעה אין לה מרפא. | `וּכְרָקָב בְּעַצְמוֹתָיו מְבִישָׁה` (משלי יב:ד); `עַד לְאֵין מַרְפֵּא` (דברי הימים ב לו:טז) | equivalent | האשה הרעה כמחלה בגוף בעלה, ממש כאן: "דאבון בחזה", "רעה שאין לה מרפא"; ו. |
| 613 | ὣς οὐκ ἔστι Διὸς κλέψαι νόον οὐδὲ παρελθεῖν. | כך אין לגנוב את שכל זאוס ואף לא לעקוף אותו. | `וַיִּגְנֹב יַעֲקֹב אֶת לֵב לָבָן הָאֲרַמִּי` (בראשית לא:כ) | equivalent | "לגנוב לב" בעברית = להונות; וכך ביוונית κλέπτειν νόον "לגנוב את השכל". ובשבעים שם `ἔκρυψεν δὲ Ιακωβ Λαβαν` (השבעים, בראשית לא:כ): המתרגמים לא השתמשו ב־κλέπτω, אף שהביטוי היווני היה מצוי – ולכן הקשר הוא דרך העברית (וההבעה). מטפורה משותפת לשתי השפות. |
| 640 | νέκταρ τʼ ἀμβροσίην τε, τά περ θεοὶ αὐτοὶ ἔδουσι, | נֶקְטָר ואַמְבְּרוֹסְיָה, אשר הָאֵלִים עצמם אוכלים, | `פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב); `לֶחֶם אַבִּירִים אָכַל אִישׁ` (תהלים עח:כה) | divergence | מזון האלמוות כמה שמבדיל בין אלים לבני אדם: אצל הסיודוס האלים נותנים אותו לבעלי מאה הידיים, ומחזירים להם את כוחם; בבראשית האל מונע את פרי עץ החיים מן האדם. ו – המן, "לחם אבירים" שנתן האל לבני אדם – בשבעים, לפי מה שידוע, "לחם מלאכים" (ספר תהלים אינו בתוכנה שבידינו). מוטיב משותף של מזון אלוהי, בלי קשר. |
| 667 | πάντες, θήλειαι τε καὶ ἄρσενες, ἤματι κείνῳ, | כולם, נקבות וזכרים, ביום ההוא, | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | equivalent | ובשבעים: `ἄρσεν καὶ θῆλυ ἐποίησεν αὐτούς` (השבעים, בראשית א:כז): שתי המלים של הסיודוס (θῆλυς, ἄρσην) הן מלות השבעים ל`זָכָר וּנְקֵבָה`; ולכן `נְקֵבָה` ו`זָכָר` (`../renderings.md` §11.3: θῆλυς). זהות לשונית בלבד: כאן אלים ואלות לוחמים יחד, שם – בריאת האדם. |
| 678 | ἀμφότεροι· δεινὸν δὲ περίαχε πόντος ἀπείρων, | שני הצדדים; ואיום הריע סביב הים שאין לו גבול, | `וַתִּגְעַשׁ וַתִּרְעַשׁ הָאָרֶץ וּמוֹסְדֵי הָרִים יִרְגָּזוּ וַיִּתְגָּעֲשׁוּ כִּי חָרָה לוֹ` (תהלים יח:ח); `אֶרֶץ רָעָשָׁה גַּם שָׁמַיִם נָטָפוּ` (שופטים ה:ד); `לְפָנָיו רָגְזָה אֶרֶץ רָעֲשׁוּ שָׁמָיִם` (יואל ב:י) | equivalent | כל העולם רועד לפני האל הלוחם: ים, ארץ, שמים, הרים (678–683). זהו מוטיב ההתגלות בסערה (תאופניה) המשותף למזרח הקדום: אל הסערה יוצא לקרב והטבע כולו מגיב – בעל באוגרית, אדד במסופוטמיה, יהוה במקרא (; ). מוטיב משותף, בלי קשר בין הטקסטים. |
| 681 | ῥιπῇ ὕπʼ ἀθανάτων, ἔνοσις δʼ ἵκανε βαρεῖα | מתנופת בני־האלמוות, ורעש כבד הגיע | `וְאַחַר הָרוּחַ רַעַשׁ לֹא בָרַעַשׁ יְהוָה` (מלכים א יט:יא); `שְׁנָתַיִם לִפְנֵי הָרָעַשׁ` (עמוס א:א) | equivalent | `רַעַשׁ` המקראי הוא רעידת האדמה (): המלה העברית הטבעית ל־ἔνοσις. ובמלכים, באופן מכוון, האל אינו ברעש – היפוכה של ההתגלות בסערה; אצל הסיודוס הרעש הוא בדיוק סימן הנוכחות האלוהית. |
| 690 | ἀστράπτων ἔστειχε συνωχαδόν· οἱ δὲ κεραυνοὶ | בהבריקו צעד בלי הפוגה; והחזיזים | `בְּרוֹק בָּרָק וּתְפִיצֵם שְׁלַח חִצֶּיךָ וּתְהֻמֵּם` (תהלים קמד:ו); `וַיִּשְׁלַח חִצָּיו וַיְפִיצֵם וּבְרָקִים רָב וַיְהֻמֵּם` (תהלים יח:טו) | equivalent | האל המבריק ושולח את חציו, הברקים: כמו זאוס, שהחזיזים הם "חציו" (708 κῆλα). ו. מוטיב אל הסערה, בלי קשר. |
| 702 | αὔτως, ὡς εἰ Γαῖα καὶ Οὐρανὸς εὐρὺς ὕπερθε | כאילו ארץ ושמים הרחב ממעל | `שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה לְאוֹר חִצֶּיךָ יְהַלֵּכוּ לְנֹגַהּ בְּרַק חֲנִיתֶךָ` (חבקוק ג:יא) | divergence | בהתגלות הקרב העולם כולו "נעצר" או מזדעזע; אצל הסיודוס הוא כמעט נסגר: השמים קורסים על הארץ. |
| 706 | σὺν δʼ ἄνεμοι ἔνοσίν τε κονίην τʼ ἐσφαράγιζον | ועמם הרוחות הסעירו רעש ואבק | `יְהוָה בְּסוּפָה וּבִשְׂעָרָה דַּרְכּוֹ וְעָנָן אֲבַק רַגְלָיו` (נחום א:ג) | equivalent | הסערה והאבק כליווי האל בקרב. מוטיב, בלי קשר. |
| 720 | τόσσον ἔνερθʼ ὑπὸ γῆς, ὅσον οὐρανός ἐστʼ ἀπὸ γαίης· | כה עמוק מתחת לארץ, כמו שהשמים רחוקים מן הארץ; | `כִּי גָבְהוּ שָׁמַיִם מֵאָרֶץ` (ישעיהו נה:ט); `כִּי כִגְבֹהַּ שָׁמַיִם עַל הָאָרֶץ` (תהלים קג:יא) | equivalent | ובשבעים: `ἀλλʼ ὡς ἀπέχει ὁ οὐρανὸς ἀπὸ τῆς γῆς` (השבעים, ישעיהו נה:ט): מרחק השמים מן הארץ כמידה של הגדול שאין לשערו – כאן במלים כמעט זהות (οὐρανός … ἀπὸ γαίης / ἀπὸ τῆς γῆς). ו. |
| 720 | τόσσον ἔνερθʼ ὑπὸ γῆς, ὅσον οὐρανός ἐστʼ ἀπὸ γαίης· | כה עמוק מתחת לארץ, כמו שהשמים רחוקים מן הארץ; | `גָּבְהֵי שָׁמַיִם מַה תִּפְעָל עֲמֻקָּה מִשְּׁאוֹל מַה תֵּדָע` (איוב יא:ח) | equivalent | השמים למעלה והתהום למטה כשני קצות העולם, המידה הסימטרית של הסיודוס. |
| 721 | τόσσον γάρ τʼ ἀπὸ γῆς ἐς Τάρταρον ἠερόεντα. | כי כה רחוק מן הארץ עד טרטרוס הערפילי. | `אַךְ אֶל שְׁאוֹל תּוּרָד אֶל יַרְכְּתֵי בוֹר` (ישעיהו יד:טו) | divergence | ובשבעים: `νῦν δὲ εἰς ᾅδου καταβήσῃ καὶ εἰς τὰ θεμέλια τῆς γῆς` (השבעים, ישעיהו יד:טו): המורד שעלה לשמים מושלך אל עמקי הארץ – כמו הטיטנים. השבעים מתרגמים `שְׁאוֹל` ב־ᾅδης, לא ב־τάρταρος; τάρταρος בשבעים רק בתוספות לאיוב (מ:כ, מא:כד), וממנו הפועל ταρταρόω באיגרת פטרוס השנייה (ב:ד), על המלאכים החוטאים – קבלה מאוחרת של המיתוס היווני. לכן `טַרְטָרוֹס`, ולעולם לא `שְׁאוֹל` (`../renderings.md` §6–§7). |
| 728 | γῆς ῥίζαι πεφύασι καὶ ἀτρυγέτοιο θαλάσσης. | צמחו שורשי הארץ ושל הים העקר. | `עַל מָה אֲדָנֶיהָ הָטְבָּעוּ אוֹ מִי יָרָה אֶבֶן פִּנָּתָהּ` (איוב לח:ו) | equivalent | יסודות הארץ, הנעוצים בתהום: אותה שאלה – על מה עומדת הארץ? – אצל הסיודוס התשובה: שורשיה צומחים מעל טרטרוס, כשל צמח. בלי קשר. |
| 732 | τοῖς οὐκ ἐξιτόν ἐστι. θύρας δʼ ἐπέθηκε Ποσειδέων | ואין להם מוצא. ודלתות שם עליו פּוֹסֵידוֹן, | `הָאָרֶץ בְּרִחֶיהָ בַעֲדִי לְעוֹלָם` (יונה ב:ז) | equivalent | לעולם התחתון יש בריחים, שערים ודלתות; מוטיב משותף לכל המזרח (שבעת שערי ארץ אין שוב בירידת אישתר). אין קשר. |
| 735 | ναίουσιν, φύλακες πιστοὶ Διὸς αἰγιόχοιο. | גרים, שומרים נאמנים של זאוס נושא־האגיס. | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | equivalent | ובשבעים `φυλάσσειν` (השבעים, בראשית ג:כד): φύλαξ, שם העצם של אותו פועל, ולכן `שׁוֹמֵר` (`../renderings.md` §7.2). כאן השומרים שומרים על כלא, לא על גן – אבל בשני המקומות יצורים אלוהיים מוצבים בפתח, כדי שאיש לא יעבור. |
| 738 | ἑξείης πάντων πηγαὶ καὶ πείρατʼ ἔασιν | לכולם, זה אחר זה, המקורות והגבולות, | `אֵי זֶה הַדֶּרֶךְ יִשְׁכָּן אוֹר וְחֹשֶׁךְ אֵי זֶה מְקֹמוֹ` (איוב לח:יט); `כִּי תִקָּחֶנּוּ אֶל גְּבוּלוֹ וְכִי תָבִין נְתִיבוֹת בֵּיתוֹ` (איוב לח:כ) | equivalent | לאור ולחושך יש "מקום", "גבול" ו"בית", בקצה העולם; ונאום האל באיוב סוקר אותם כמו המשורר כאן (בית לילה, 744; לילה ויום על הסף, 748–757). שם זו שאלה ששום אדם אינו יכול לענות עליה; כאן המשורר, בעזרת המוזות, יודע. מוטיב משותף של קוסמולוגיה, בלי קשר. |
| 741 | οὖδας ἵκοιτʼ, εἰ πρῶτα πυλέων ἔντοσθε γένοιτο, | מגיע אל הקרקע, אילו נמצא בראשונה בתוך השערים, | `בִּדְמִי יָמַי אֵלֵכָה בְּשַׁעֲרֵי שְׁאוֹל` (ישעיהו לח:י) | equivalent | ובשבעים: `ἐν πύλαις ᾅδου` (השבעים, ישעיהו לח:י): השבעים מתרגמים `שַׁעֲרֵי שְׁאוֹל` ב"שערי האדס" – πύλη, מלת הסיודוס, והאדס (767). אצל הסיודוס השערים הם של טרטרוס, הבקע; והעברית שומרת `שַׁעַר`, ולעולם לא `שְׁאוֹל`. |
| 744 | τοῦτο τέρας. Νυκτὸς δʼ ἐρεβεννῆς οἰκία δεινὰ | המופת הזה. ובתי לילה האפלה, האיומים, | `וְהִרְבֵּיתִי אֶת אֹתֹתַי וְאֶת מוֹפְתַי בְּאֶרֶץ מִצְרָיִם` (שמות ז:ג) | equivalent | ובשבעים: `καὶ πληθυνῶ τὰ σημεῖά μου καὶ τὰ τέρατα` (השבעים, שמות ז:ג): τέρας, מלת הסיודוס, היא מלת השבעים ל`מוֹפֵת`, ולכן `מוֹפֵת` כאן. הזהות לשונית בלבד: אצל הסיודוס τέρας הוא דבר מפלצתי, מבעית; במקרא – אות לכוח האל. |
| 748 | ἀστεμφέως, ὅθι Νύξ τε καὶ Ἡμέρη ἆσσον ἰοῦσαι | ללא נוע, במקום שבו לילה ויום, בְּקָרְבָן זו אל זו, | `וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה` (בראשית א:ה) | divergence | ובשבעים: `καὶ ἐκάλεσεν ὁ θεὸς τὸ φῶς ἡμέραν καὶ τὸ σκότος ἐκάλεσεν νύκτα` (השבעים, בראשית א:ה): ἡμέρα ו־νύξ, המלים של הסיודוס. בבראשית האל נותן להם שם והם תפקידים בזמן; אצל הסיודוס הם שתי אלות, אם ובת (124), החיות בבית אחד ואינן נפגשות בו לעולם. |
| 748 | ἀστεμφέως, ὅθι Νύξ τε καὶ Ἡμέρη ἆσσον ἰοῦσαι | ללא נוע, במקום שבו לילה ויום, בְּקָרְבָן זו אל זו, | `יוֹם לְיוֹם יַבִּיעַ אֹמֶר וְלַיְלָה לְּלַיְלָה יְחַוֶּה דָּעַת` (תהלים יט:ג) | equivalent | יום ולילה "מדברים" זה אל זה בהתחלפותם: כמו הברכה על הסף (749). מוטיב משותף, בלי קשר. |
| 756 | ἣ δʼ Ὕπνον μετὰ χερσί, κασίγνητον Θανάτοιο. | והשנייה – את שֵׁנָה בידיה, אחי מָוֶת: | `תָּשֶׁת חֹשֶׁךְ וִיהִי לָיְלָה בּוֹ תִרְמֹשׂ כָּל חַיְתוֹ יָעַר` (תהלים קד:כ); `תִּזְרַח הַשֶּׁמֶשׁ יֵאָסֵפוּן וְאֶל מְעוֹנֹתָם יִרְבָּצוּן` (תהלים קד:כב) | equivalent | הלילה כזמן אחר, שבו העולם משתנה, ו. במקרא הלילה והיום הם סדר שהאל קבע; כאן הלילה נושאת בידיה את שינה, אחיו של מוות. מוטיב, בלי קשר. |
| 760 | Ἠέλιος φαέθων ἐπιδέρκεται ἀκτίνεσσιν | אין שמש הבוהק צופה בזוהרו, | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ וּתְקוּפָתוֹ עַל קְצוֹתָם וְאֵין נִסְתָּר מֵחַמָּתוֹ` (תהלים יט:ז) | divergence | במזמור אין דבר נסתר מן השמש; אצל הסיודוס יש: שינה ומוות שוכנים במקום שהשמש אינו רואה לעולם. אותה תנועה של השמש בין קצות השמים (761), ומסקנה הפוכה. אין קשר. |
| 765 | νηλεὲς ἐν στήθεσσιν· ἔχει δʼ ὃν πρῶτα λάβῃσιν | חסר־רחמים בחזהו; והוא אוחז במי שלקח פעם | `וְהוּא כַמָּוֶת וְלֹא יִשְׂבָּע` (חבקוק ב:ה); `שְׁאוֹל וַאֲבַדֹּה לֹא תִשְׂבַּעְנָה` (משלי כז:כ) | equivalent | מוות שאינו משחרר את מי שלקח ואינו שבע; ו. המוות הבולע הוא מוטיב משותף למזרח (מות האוגריתי, בעל פה פעור). אין קשר. |
| 769 | ἑστᾶσιν, δεινὸς δὲ κύων προπάροιθε φυλάσσει | עומדים, וכלב איום לפניהם שומר, | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | equivalent | ובשבעים `φυλάσσειν` (השבעים, בראשית ג:כד): φυλάσσω, ולכן `שָׁמַר` (חובה). שומר בפתח, שאיש אינו עובר על פניו – כאן אל המוות, שם אל החיים. |
| 779 | κίοσιν ἀργυρέοισι πρὸς οὐρανὸν ἐστήρικται. | בעמודי כסף אל השמים הם קבועים. | `עַמּוּדֵי שָׁמַיִם יְרוֹפָפוּ` (איוב כו:יא) | equivalent | עמודים המחברים בין הארץ לשמים: אצל הסיודוס עמודי הכסף של בית סטיקס. מוטיב קוסמולוגי, בלי קשר. |
| 785 | τηλόθεν ἐν χρυσέῃ προχόῳ πολυώνυμον ὕδωρ | מרחוק, בקיתון זהוב, את המים רבי־השמות, | `וְהִשְׁבִּיעַ אֹתָהּ הַכֹּהֵן … הִנָּקִי מִמֵּי הַמָּרִים הַמְאָרְרִים הָאֵלֶּה` (במדבר ה:יט); `וּבָאוּ הַמַּיִם הַמְאָרְרִים הָאֵלֶּה בְּמֵעַיִךְ` (במדבר ה:כב) | equivalent | שבועה במים: האשה הנחשדת שותה "מים מאררים", ואם נשבעה לשקר – . אצל הסיודוס האל הנשבע יוצק מן המים, ואם שיקר – הוא שוכב בלי נשימה (795–798). שני טקסים של "שבועת מים" שבה המים עצמם מענישים את השקרן: מבחן־אל (אורדליה) עתיק, משותף לכל המזרח (בחוקי חמורבי: הקפיצה לנהר). מוטיב משותף, בלי קשר. |
| 793 | ὅς κεν τὴν ἐπίορκον ἀπολλείψας ἐπομόσσῃ | מי שבנסכו ממנה נשבע עליה לשקר | `וְלֹא תִשָּׁבְעוּ בִשְׁמִי לַשָּׁקֶר וְחִלַּלְתָּ אֶת שֵׁם אֱלֹהֶיךָ` (ויקרא יט:יב); `אִישׁ כִּי יִדֹּר נֶדֶר לַיהוָה אוֹ הִשָּׁבַע שְׁבֻעָה … לֹא יַחֵל דְּבָרוֹ` (במדבר ל:ג) | equivalent | שבועת השקר כחטא כנגד הקדוש שבו נשבעים; ו. |
| 793 | ὅς κεν τὴν ἐπίορκον ἀπολλείψας ἐπομόσσῃ | מי שבנסכו ממנה נשבע עליה לשקר | `בִּי נִשְׁבַּעְתִּי יָצָא מִפִּי צְדָקָה דָּבָר וְלֹא יָשׁוּב` (ישעיהו מה:כג) | divergence | ובשבעים: `κατʼ ἐμαυτοῦ ὀμνύω` (השבעים, ישעיהו מה:כג): אל ישראל נשבע בעצמו, ושבועתו אינה צריכה עונש; אלי הסיודוס נשבעים במשהו מחוצה להם, ונענשים אם שיקרו. מוטיב השבועה משותף, ותפיסת האלוהות הפוכה. |
| 797 | βρώσιος, ἀλλά τε κεῖται ἀνάπνευστος καὶ ἄναυδος | למאכל, אלא שוכב, אינו נושם ובלי נִיב, | `כִּי טוֹב הָעֵץ לְמַאֲכָל` (בראשית ג:ו) | equivalent | ובשבעים: `εἰς βρῶσιν` (השבעים, בראשית ג:ו): βρῶσις, מלת הסיודוס, היא מלת השבעים ל`מַאֲכָל`, ולכן `מַאֲכָל`. זהות לשונית בלבד. |
| 811 | ἔνθα δὲ μαρμάρεαί τε πύλαι καὶ χάλκεος οὐδὸς | ושם שערים מבזיקים וסף של נחושת, | `הֲנִגְלוּ לְךָ שַׁעֲרֵי מָוֶת וְשַׁעֲרֵי צַלְמָוֶת תִּרְאֶה` (איוב לח:יז) | equivalent | שערי העולם התחתון, שאדם אינו רואה. מוטיב משותף, בלי קשר. |
| 821 | ὁπλότατον τέκε παῖδα Τυφωέα Γαῖα πελώρη | ילדה ארץ המפלצתית את בנה הצעיר מכולם, טִיפוֹאֶוּס, | `לִפְנֵי בַּעַל צְפֹן נִכְחוֹ תַחֲנוּ עַל הַיָּם` (שמות יד:ב) | cognate | "בעל צפון", האל של ההר הזה, שמו של מקום ליד ים סוף |
| 821 | ὁπλότατον τέκε παῖδα Τυφωέα Γαῖα πελώρη | ילדה ארץ המפלצתית את בנה הצעיר מכולם, טִיפוֹאֶוּס, | `הַר צִיּוֹן יַרְכְּתֵי צָפוֹן` (תהלים מח:ג); `וְאֵשֵׁב בְּהַר מוֹעֵד בְּיַרְכְּתֵי צָפוֹן` (ישעיהו יד:יג) | equivalent | הר האל יורש את תואר "ירכתי צפון", ההר הקדוש של בעל; וכך  – המורד המבקש לעלות למושב האלים. אלה הקבלות להר, לא לטקסט של הסיודוס. |
| 825 | ἣν ἑκατὸν κεφαλαὶ ὄφιος, δεινοῖο δράκοντος, | היו מאה ראשים של נחש, של דְּרָקוֹן איום, | `יִפְקֹד יְהוָה בְּחַרְבּוֹ הַקָּשָׁה וְהַגְּדוֹלָה וְהַחֲזָקָה עַל לִוְיָתָן נָחָשׁ בָּרִחַ וְעַל לִוְיָתָן נָחָשׁ עֲקַלָּתוֹן` (ישעיהו כז:א) | equivalent | ובשבעים: `ἐπὶ τὸν δράκοντα ὄφιν φεύγοντα, ἐπὶ τὸν δράκοντα ὄφιν σκολιὸν καὶ ἀνελεῖ τὸν δράκοντα` (השבעים, ישעיהו כז:א): השבעים תרגמו `לִוְיָתָן` = δράκων ו`נָחָשׁ` = ὄφις, ולכן ביוונית שלהם הצירוף הוא "דרקון נחש" – אותו זוג שבשורה הזאת ("נחש, דרקון איום"). |
| 825 | ἣν ἑκατὸν κεφαλαὶ ὄφιος, δεινοῖο δράκοντος, | היו מאה ראשים של נחש, של דְּרָקוֹן איום, | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג); `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | equivalent | הראשים הרבים של מפלצת המים, שהאל מנפץ אותם. |
| 827 | θεσπεσίῃς κεφαλῇσιν ὑπʼ ὀφρύσι πῦρ ἀμάρυσσεν· | בראשים הָאֱלוֹהִיִּים, תחת הגבות, הבהבה אש; | `מִפִּיו לַפִּידִים יַהֲלֹכוּ; כִּידוֹדֵי אֵשׁ יִתְמַלָּטוּ` (איוב מא:יא) | equivalent | לויתן, שאש יוצאת ממנו |
| 827 | θεσπεσίῃς κεφαλῇσιν ὑπʼ ὀφρύσι πῦρ ἀμάρυσσεν· | בראשים הָאֱלוֹהִיִּים, תחת הגבות, הבהבה אש; | `נַפְשׁוֹ גֶּחָלִים תְּלַהֵט; וְלַהַב מִפִּיו יֵצֵא` (איוב מא:יג) | equivalent |  |
| 828 | πασέων δʼ ἐκ κεφαλέων πῦρ καίετο δερκομένοιο· | ומכל ראשיו בערה אש בהביטו; | `מִנְּחִירָיו יֵצֵא עָשָׁן כְּדוּד נָפוּחַ וְאַגְמֹן` (איוב מא:יב) | equivalent | המפלצת מעלה עשן ואש. |
| 839 | σκληρὸν δʼ ἐβρόντησε καὶ ὄβριμον, ἀμφὶ δὲ γαῖα | וְרָעַם רעם קשוח וכביר, ומסביב הארץ | `וַיַּרְעֵם בַּשָּׁמַיִם יְהוָה וְעֶלְיוֹן יִתֵּן קֹלוֹ` (תהלים יח:יד); `וַתִּגְעַשׁ וַתִּרְעַשׁ הָאָרֶץ` (תהלים יח:ח) | equivalent | האל הרועם יוצא למלחמה, והארץ מגיבה: |
| 839 | σκληρὸν δʼ ἐβρόντησε καὶ ὄβριμον, ἀμφὶ δὲ γαῖα | וְרָעַם רעם קשוח וכביר, ומסביב הארץ | `אֵל-הַכָּבוֹד הִרְעִים` (תהלים כט:ג); `וַיֵּשֶׁב יְהוָה מֶלֶךְ לְעוֹלָם` (תהלים כט:י) | equivalent | מזמור אל הסערה, שבסופו , כמו 881–885 כאן. |
| 842 | ποσσὶ δʼ ὕπʼ ἀθανάτοισι μέγας πελεμίζετʼ Ὄλυμπος | ותחת רגליו, בנות־האלמוות, רעד האולימפוס הגדול | `הַמַּבִּיט לָאָרֶץ וַתִּרְעָד; יִגַּע בֶּהָרִים וְיֶעֱשָׁנוּ` (תהלים קד:לב) | equivalent | ההר רועד תחת האל |
| 842 | ποσσὶ δʼ ὕπʼ ἀθανάτοισι μέγας πελεμίζετʼ Ὄλυμπος | ותחת רגליו, בנות־האלמוות, רעד האולימפוס הגדול | `הָרִים רָעֲשׁוּ מִמֶּנּוּ וְהַגְּבָעוֹת הִתְמֹגָגוּ` (נחום א:ה) | equivalent |  |
| 847 | ἔζεε δὲ χθὼν πᾶσα καὶ οὐρανὸς ἠδὲ θάλασσα· | ורתחה כל האדמה, והשמים והים; | `יַרְתִּיחַ כַּסִּיר מְצוּלָה; יָם יָשִׂים כַּמֶּרְקָחָה` (איוב מא:כג) | equivalent | המפלצת מרתיחה את הים; אצל הסיודוס הים רותח מן הקרב בה. |
| 848 | θυῖε δʼ ἄρʼ ἀμφʼ ἀκτὰς περί τʼ ἀμφί τε κύματα μακρὰ | וגעשו גלים ארוכים סביב החופים, מסביב ומסביב, | `וַיֹּאמֶר וַיַּעֲמֵד רוּחַ סְעָרָה; וַתְּרוֹמֵם גַּלָּיו` (תהלים קז:כה) | equivalent |  |
| 850 | τρέε δʼ Ἀίδης, ἐνέροισι καταφθιμένοισιν ἀνάσσων, | וחרד הָאדֵס, המולך על שוכני־מטה אשר כלו, | `שְׁאוֹל מִתַּחַת רָגְזָה לְךָ לִקְרַאת בּוֹאֶךָ; עוֹרֵר לְךָ רְפָאִים` (ישעיהו יד:ט) | equivalent | העולם התחתון רוגז ומתעורר: בישעיהו לקראת המלך שנפל, אצל הסיודוס מקול הקרב. |
| 856 | ἔπρεσε θεσπεσίας κεφαλὰς δεινοῖο πελώρου. | ראשיה הָאֱלוֹהִיִּים של המפלצת האיומה הצית. | `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) | equivalent | האל פוגע בראשי המפלצת עצמם. |
| 857 | αὐτὰρ ἐπεὶ δή μιν δάμασεν πληγῇσιν ἱμάσσας, | ואחרי אשר הכניעו, בהצליפו בו מכות, | `מָחַץ רָהַב` (איוב כו:יב); `חֹלְלָה יָדוֹ נָחָשׁ בָּרִחַ` (איוב כו:יג) | equivalent | `בְּכֹחוֹ רָגַע הַיָּם` … ,  – האל מכה את מפלצת הים, בכוחו ובתבונתו (ὀξὺ νόησε, 838) |
| 857 | αὐτὰρ ἐπεὶ δή μιν δάμασεν πληγῇσιν ἱμάσσας, | ואחרי אשר הכניעו, בהצליפו בו מכות, | `הֲלוֹא אַתְּ הִיא הַמַּחְצֶבֶת רַהַב מְחוֹלֶלֶת תַּנִּין` (ישעיהו נא:ט) | equivalent |  |
| 862 | ἀτμῇ θεσπεσίῃ καὶ ἐτήκετο κασσίτερος ὣς | בְּאֵד אֱלוֹהִי, ונמסה כמו בדיל | `הָרִים כַּדּוֹנַג נָמַסּוּ מִלִּפְנֵי יְהוָה` (תהלים צז:ה); `וְנָמַסּוּ הֶהָרִים תַּחְתָּיו וְהָעֲמָקִים יִתְבַּקָּעוּ כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | equivalent | הארץ וההרים נמסים מפני האל המופיע |
| 862 | ἀτμῇ θεσπεσίῃ καὶ ἐτήκετο κασσίτερος ὣς | בְּאֵד אֱלוֹהִי, ונמסה כמו בדיל | `הַנּוֹגֵעַ בָּאָרֶץ וַתָּמוֹג` (עמוס ט:ה) | equivalent |  |
| 863 | τέχνῃ ὕπʼ αἰζηῶν ἐν ἐυτρήτοις χοάνοισι | באומנות בחורים, במצרפים נקובים היטב, | `קְבֻצַת כֶּסֶף וּנְחֹשֶׁת וּבַרְזֶל וְעוֹפֶרֶת וּבְדִיל אֶל תּוֹךְ כּוּר לָפַחַת עָלָיו אֵשׁ לְהַנְתִּיךְ` (יחזקאל כב:כ); `כְּהִתּוּךְ כֶּסֶף בְּתוֹךְ כּוּר כֵּן תֻּתְּכוּ בְתוֹכָהּ` (יחזקאל כב:כב) | equivalent | אותן מתכות (ברזל, בדיל), אותו כור, אותה אש מלמטה; ושם . אצל יחזקאל זהו דימוי של משפט על העם, וכאן דימוי של הארץ הנמסה. |
| 868 | ῥῖψε δέ μιν θυμῷ ἀκαχὼν ἐς Τάρταρον εὐρύν. | והשליכו, דווה בלבו, אל טרטרוס הרחב. | `תִּתְּנֶנּוּ מַאֲכָל לְעָם לְצִיִּים` (תהלים עד:יד) | divergence | בתהלים גורל המפלצת המנוצחת הוא להיות מאכל; כאן היא מושלכת אל מתחת לארץ, ויש לה עוד המשך (869–880). |
| 874 | πῆμα μέγα θνητοῖσι, κακῇ θυίουσιν ἀέλλῃ· | פגע גדול לבני־התמותה, גועשות בסופה רעה; | `וַיהוָה הֵטִיל רוּחַ גְּדוֹלָה אֶל הַיָּם וַיְהִי סַעַר גָּדוֹל בַּיָּם; וְהָאֳנִיָּה חִשְּׁבָה לְהִשָּׁבֵר` (יונה א:ד) | equivalent | הסערה בים והאונייה (875). |
| 883 | δή ῥα τότʼ ὤτρυνον βασιλευέμεν ἠδὲ ἀνάσσειν | אז דחקו להיות למלך ולמלוך – | `וַיָּרִעוּ כָל הָעָם וַיֹּאמְרוּ יְחִי הַמֶּלֶךְ` (שמואל א י:כד) | equivalent | המלך שנבחר מוכרז על ידי הקהל |
| 883 | δή ῥα τότʼ ὤτρυνον βασιλευέμεν ἠδὲ ἀνάσσειν | אז דחקו להיות למלך ולמלוך – | `יְהוָה יִמְלֹךְ לְעֹלָם וָעֶד` (שמות טו:יח) | equivalent | סוף שירת הים: אחרי הניצחון על הים, המלוכה. |
| 885 | ἀθανάτων· ὃ δὲ τοῖσιν ἑὰς διεδάσσατο τιμάς. | על בני־האלמוות; והוא חילק להם את זְכֻיּוֹתֵיהֶם. | `יְהוָה לַמַּבּוּל יָשָׁב; וַיֵּשֶׁב יְהוָה מֶלֶךְ לְעוֹלָם` (תהלים כט:י) | equivalent | אל הסערה יושב מלך אחרי הסערה והמים |
| 885 | ἀθανάτων· ὃ δὲ τοῖσιν ἑὰς διεδάσσατο τιμάς. | על בני־האלמוות; והוא חילק להם את זְכֻיּוֹתֵיהֶם. | `יְהוָה מָלָךְ גֵּאוּת לָבֵשׁ` (תהלים צג:א) | equivalent | ובפסוקים שאחריו, הנהרות והמים הרבים. |
| 890 | αἱμυλίοισι λόγοισιν ἑὴν ἐσκάτθετο νηδὺν | באמרים חלקלקים, הניח אותה בתוך מעיו, | `חָלְקוּ מַחְמָאֹת פִּיו וּקְרָב-לִבּוֹ` (תהלים נה:כב); `בְּחֵלֶק שְׂפָתֶיהָ תַּדִּיחֶנּוּ` (משלי ז:כא) | equivalent | הדיבור החלק כנשק של מרמה. |
| 900 | ὡς δή οἱ φράσσαιτο θεὰ ἀγαθόν τε κακόν τε. | כדי שתודיע לו הָאֵלָה טוב ורע. | `לְהָבִין בֵּין טוֹב לְרָע` (מלכים א ג:ט); `לֵב חָכָם וְנָבוֹן` (מלכים א ג:יב) | equivalent | שלמה מבקש מלב שומע "לשפוט את עמך, להבין בין טוב לרע", ומקבל : החכמה שבתוך המלך היא תנאי המלוכה |
| 900 | ὡς δή οἱ φράσσαιτο θεὰ ἀγαθόν τε κακόν τε. | כדי שתודיע לו הָאֵלָה טוב ורע. | `לִי-עֵצָה וְתוּשִׁיָּה … בִּי מְלָכִים יִמְלֹכוּ` (משלי ח:יד–טו) | equivalent | החכמה המדברת: בה מלכים מולכים |
| 900 | ὡς δή οἱ φράσσαιτο θεὰ ἀγαθόν τε κακόν τε. | כדי שתודיע לו הָאֵלָה טוב ורע. | `וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | divergence | ובשבעים: `καὶ ἔσεσθε ὡς θεοὶ γινώσκοντες καλὸν καὶ πονηρόν` (השבעים, בראשית ג:ה): בגן עדן ידיעת טוב ורע היא מה שהאל שומר לעצמו; אצל הסיודוס האל עצמו רוכש אותה, בבליעת אֵלָה. השבעים אומרים καλὸν καὶ πονηρόν, לא ἀγαθόν τε κακόν τε: הקשר עובר רק דרך העברית. |
| 902 | Εὐνομίην τε Δίκην τε καὶ Εἰρήνην τεθαλυῖαν, | את סֵדֶר־טוֹב ואת מִשְׁפָּט ואת שָׁלוֹם המשגשגת, | `צֶדֶק וְשָׁלוֹם נָשָׁקוּ` (תהלים פה:יא); `וְהָיָה מַעֲשֵׂה הַצְּדָקָה שָׁלוֹם` (ישעיהו לב:יז) | equivalent | משפט ושלום כצמד, כמעט כאחיות |
| 902 | Εὐνομίην τε Δίκην τε καὶ Εἰρήνην τεθαλυῖαν, | את סֵדֶר־טוֹב ואת מִשְׁפָּט ואת שָׁלוֹם המשגשגת, | `צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאֶךָ` (תהלים פט:טו) | equivalent | הן יושבות ליד כס המלך, כמו בנות זאוס. |
| 906 | θνητοῖς ἀνθρώποισιν ἔχειν ἀγαθόν τε κακόν τε. | לבני האדם בני־התמותה שיהיו להם טוב ורע. | `גַּם אֶת הַטּוֹב נְקַבֵּל מֵאֵת הָאֱלֹהִים וְאֶת הָרָע לֹא נְקַבֵּל` (איוב ב:י); `מִפִּי עֶלְיוֹן לֹא תֵצֵא הָרָעוֹת וְהַטּוֹב` (איכה ג:לח) | equivalent | הטוב והרע כמנה הניתנת לאדם מן השמים |
| 906 | θνητοῖς ἀνθρώποισιν ἔχειν ἀγαθόν τε κακόν τε. | לבני האדם בני־התמותה שיהיו להם טוב ורע. | `עֹשֶׂה שָׁלוֹם וּבוֹרֵא רָע` (ישעיהו מה:ז) | divergence | בישעיהו האל האחד עושה את שניהם, אצל הסיודוס המוירות מחלקות אותם בשמו. |
| 910 | τῶν καὶ ἀπὸ βλεφάρων ἔρος εἴβετο δερκομενάων | ומעפעפיהן, בהביטן, היה נוטף חשק | `אַל-תַּחְמֹד יָפְיָהּ בִּלְבָבֶךָ; וְאַל-תִּקָּחֲךָ בְּעַפְעַפֶּיהָ` (משלי ו:כה) | equivalent | העפעפיים כמקום שממנו יוצא הפיתוי |
| 910 | τῶν καὶ ἀπὸ βλεφάρων ἔρος εἴβετο δερκομενάων | ומעפעפיהן, בהביטן, היה נוטף חשק | `לִבַּבְתִּנִי אֲחֹתִי כַלָּה` (שיר השירים ד:ט) | equivalent | המבט האחד שלוקח את הלב. |
| 914 | ἥρπασε ἧς παρὰ μητρός· ἔδωκε δὲ μητίετα Ζεύς. | חטף מאצל אמה; ונתן אותה זאוס רב־התבונה. | `וַחֲטַפְתֶּם לָכֶם אִישׁ אִשְׁתּוֹ מִבְּנוֹת שִׁילוֹ` (שופטים כא:כא) | divergence | חטיפת כלות כדרך להשיג נשים, באישור הזקנים; אצל הסיודוס האב הוא שנותן את הבת לחוטף, והאם אינה נשאלת. |
| 929n | Μῆτις δʼ αὖτε Ζηνὸς ὑπὸ σπλάγχνοις λελαθυῖα | {גלנוס} ומֵטִיס, שוב, נסתרת בכליות זאוס, | `בֹּחֵן כְּלָיוֹת וָלֵב` (ירמיהו יא:כ) | equivalent | הכליות כמקום הסתר שבתוך האדם, מקום המחשבה והרגש. |
| 929s | αἰγίδα ποιήσασα φοβέστρατον ἔντος Ἀθήνης· | {גלנוס} {חשודה} בעשותה את האגיס, מבריחת־הצבאות, חגור אַתֵנָה; | `אַל יִתְהַלֵּל חֹגֵר כִּמְפַתֵּחַ` (מלכים א כ:יא) | equivalent | `חָגַר` כלבישת כלי המלחמה. |
| 939 | κήρυκʼ ἀθανάτων, ἱερὸν λέχος εἰσαναβᾶσα. | כרוז בני־האלמוות, בעלותה על משכב קדוש. | `וְכָרוֹזָא קָרֵא בְחָיִל` (דניאל ג:ד) | equivalent | הכרוז של המלך; בארמית `כָּרוֹזָא` היא כנראה מלה שאולה מן היוונית κῆρυξ. |
| 942 | ἀθάνατον θνητή· νῦν δʼ ἀμφότεροι θεοί εἰσιν. | בן־אלמוות – והיא בת־תמותה; ועתה שניהם אֵלִים. | `אֲנִי-אָמַרְתִּי אֱלֹהִים אַתֶּם` (תהלים פב:ו); `אָכֵן כְּאָדָם תְּמוּתוּן` (תהלים פב:ז) | divergence | במזמור "האלים" מושפלים לגורל בני האדם; אצל הסיודוס בת־תמותה עולה אל האלים. |
| 947 | χρυσοκόμης δὲ Διώνυσος ξανθὴν Ἀριάδνην, | ודִּיּוֹנִיסוֹס זהוב־השיער – את אֲרִיאַדְנָה האדמונית, | `וְהוּא אַדְמוֹנִי עִם יְפֵה עֵינַיִם וְטוֹב רֹאִי` (שמואל א טז:יב) | equivalent | צבע השיער כסימן של יופי. |
| 949 | τὴν δέ οἱ ἀθάνατον καὶ ἀγήρω θῆκε Κρονίων. | ואותה שָׂם לו בן־קרונוס לבת־אלמוות ושאינה מזקינה. | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | divergence | בגן עדן האל מונע מן האדם חיי נצח; אצל הסיודוס האל נותן אותם לאשת בנו. |
| 955 | ναίει ἀπήμαντος καὶ ἀγήραος ἤματα πάντα. | גר בלי פגע ושאינו מזקין כל הימים. | `וַיַּעַל אֵלִיָּהוּ בַּסְעָרָה הַשָּׁמָיִם` (מלכים ב ב:יא); `וְאֵינֶנּוּ כִּי לָקַח אֹתוֹ אֱלֹהִים` (בראשית ה:כד) | equivalent | בן־אדם שנלקח אל האל ולא מת. ובשבעים: `καὶ οὐχ ηὑρίσκετο, ὅτι μετέθηκεν αὐτὸν ὁ θεός` (השבעים, בראשית ה:כד). |
| 963 | ὑμεῖς μὲν νῦν χαίρετʼ, Ὀλύμπια δώματʼ ἔχοντες, | ואתם עתה שלום לכם, שוכני הארמונות האולימפיים, | `יִשְׂמְחוּ הַשָּׁמַיִם וְתָגֵל הָאָרֶץ; יִרְעַם הַיָּם וּמְלֹאוֹ` (תהלים צו:יא) | equivalent | פנייה אל השמים, הארץ והים, כמו 963–964. |
| 964 | νῆσοί τʼ ἤπειροί τε καὶ ἁλμυρὸς ἔνδοθι πόντος. | ואתם האיים והיבשות, והים המלוח שביניהם. | `יוֹרְדֵי הַיָּם וּמְלֹאוֹ אִיִּים וְיֹשְׁבֵיהֶם` (ישעיהו מב:י) | equivalent | הים והאיים כקהל השומע. |
| 967 | ὅσσαι δὴ θνητοῖσι παρʼ ἀνδράσιν εὐνηθεῖσαι | כל אשר, בשוכבן לצד אנשים בני־תמותה, | `וַיִּרְאוּ בְנֵי הָאֱלֹהִים אֶת בְּנוֹת הָאָדָם כִּי טֹבֹת הֵנָּה; וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) | divergence | ובשבעים: `ἰδόντες δὲ οἱ υἱοὶ τοῦ θεοῦ τὰς θυγατέρας τῶν ἀνθρώπων ὅτι καλαί εἰσιν` (השבעים, בראשית ו:ב). בבראשית בני האלוהים לוקחים בנות אדם; כאן ההפך – אלות שוכבות עם אנשים בני־תמותה. (בחלק מכתבי היד של השבעים: οἱ ἄγγελοι τοῦ θεοῦ.) |
| 968 | ἀθάναται γείναντο θεοῖς ἐπιείκελα τέκνα. | בנות־האלמוות, הולידו צאצאים דְּמוּיֵי־אֵלִים. | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | divergence | ובשבעים: `ἐκεῖνοι ἦσαν οἱ γίγαντες οἱ ἀπ’ αἰῶνος, οἱ ἄνθρωποι οἱ ὀνομαστοί` (השבעים, בראשית ו:ד): גם בבראשית צאצאי הזיווג בין אלוהי לאנושי הם "אנשי השם"; אצל הסיודוס הם "דמויי אלים", מלכים ומייסדי עמים, בלי שיפוט (על ὀνομαστοί ראו 148, על ἀπʼ αἰῶνος ראו 609). |
| 971 | νειῷ ἔνι τριπόλῳ, Κρήτης ἐν πίονι δήμῳ, | בניר החרוש שלוש פעמים, במחוז השמן של כְּרֵתִים, | `נִירוּ לָכֶם נִיר; וְאַל תִּזְרְעוּ אֶל קֹצִים` (ירמיהו ד:ג); `זִרְעוּ לָכֶם לִצְדָקָה … נִירוּ לָכֶם נִיר` (הושע י:יב) | equivalent | הניר החרוש כמקום של פריון וברכה. |
| 974 | τὸν δʼ ἀφνειὸν ἔθηκε, πολὺν δέ οἱ ὤπασεν ὄλβον. | אותו הוא שם לעשיר, ומזכה אותו בשפע רב. | `בִּרְכַּת יְהוָה הִיא תַעֲשִׁיר; וְלֹא-יוֹסִף עֶצֶב עִמָּהּ` (משלי י:כב) | equivalent | העושר כמתנה מן השמים. |
| 990 | ὦρτʼ ἀναρεψαμένη, καί μιν ζαθέοις ἐνὶ νηοῖς | קמה ונשאה אותו, ובמקדשיה המקודשים | `וְאֵינֶנּוּ כִּי לָקַח אֹתוֹ אֱלֹהִים` (בראשית ה:כד) | equivalent | הנער הנלקח אל האלוהות. |
| 991 | νηοπόλον νύχιον ποιήσατο, δαίμονα δῖον. | עשתה אותו שם משרת לילי, דַּיְמוֹן נהדר. | `וּשְׁמוּאֵל שֹׁכֵב בְּהֵיכַל יְהוָה אֲשֶׁר שָׁם אֲרוֹן אֱלֹהִים` (שמואל א ג:ג) | equivalent | הנער המשרת במקדש בלילה. |
| 995 | τοὺς πολλοὺς ἐπέτελλε μέγας βασιλεὺς ὑπερήνωρ, | אשר רבים מהם הטיל עליו המלך הגדול, השחצן, | `אֵין חֵפֶץ לַמֶּלֶךְ בְּמֹהַר כִּי בְּמֵאָה עָרְלוֹת פְּלִשְׁתִּים` (שמואל א יח:כה) | equivalent | המלך מטיל על הגיבור משימה מסוכנת כדי שימות, והגיבור משלים אותה וזוכה באשה. |
| 1000 | καί ῥʼ ἥ γε δμηθεῖσʼ ὑπʼ Ἰήσονι, ποιμένι λαῶν, | והיא, משנכנעה ליָאסוֹן, רועה העם, | `אַתָּה תִרְעֶה אֶת עַמִּי אֶת יִשְׂרָאֵל` (שמואל ב ה:ב) | equivalent | המלך כרועה העם. |
| 1021 | νῦν δὲ γυναικῶν φῦλον ἀείσατε, ἡδυέπειαι | ועתה את שבט הנשים שירו, מתוקות־הלשון, | `וַיִּרְאוּ בְנֵי הָאֱלֹהִים אֶת בְּנוֹת הָאָדָם` (בראשית ו:ב) | divergence | כאן מתחיל מה שבראשית מספר בפסוק אחד: נשים בנות־תמותה שהאלים בחרו בהן, ובניהן הגיבורים. |
