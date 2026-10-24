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

## Parallels index
(generated by `../build_parallels_index.py` from the הקבלה bullets)
