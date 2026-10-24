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

## Parallels index
(generated by `../build_parallels_index.py` from the הקבלה bullets)
