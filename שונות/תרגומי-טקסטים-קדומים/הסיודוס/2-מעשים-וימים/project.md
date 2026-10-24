# Hesiod – The Works and Days (Ἔργα καὶ Ἡμέραι) (KEY WD)

## Scope
The Works and Days (Ἔργα καὶ Ἡμέραι), lines 1–828 and 169a–d (831 lines in the base; 310 is not in it): `annotated-WD.rtl.md` (working file), `translation--intro-WD.rtl.md` (intro), the generated
`translation-WD.rtl.md` and `translation.rtl.md`. Base: Evelyn-White 1914 through Perseus, with the Perseus treebank
(`../corpus.md`, `../renderings.md` §1).

## Coordinator's notes (2026-10-24)
- Renderings fixed before the first line: `../renderings.md` (names §3, the speaking names translated §3.2, grammar §4,
  key terms §5, the LXX layer §6, the gates §7, formulas §8, repeated lines §9).
- The translators' sections follow, each above the line `## Parallels index`.

## WD 1–105

### Scope
WD 1–105 (translator 1, part 1, 2026-10-24): the proem to Zeus (1–10), the two Strifes (11–26), Perses, the lawsuit and
the gift-devouring kings (27–41), the hidden livelihood and the theft of fire (42–58), the making of Pandora (59–82),
Epimetheus and the gift (83–89), the jar (90–105). 105 entries, six `## ` sections; suspected lines 76, 79, 93, 99 open
with `{חשודה}`. The rest of the poem is a placeholder (`<!-- טרם תורגם: 106–828 -->`).

### Sources consulted
- The base (Evelyn-White 1914 through Perseus) and the AGDT treebank, through `hesiod_tools.py data WD 1 105`; every parse
  that carries a tense, a gate or a parallel checked by hand. Treebank slips found: 31 κατάκειται lemmatized κατακείω
  (κατάκειμαι); 46 βοῶν lemmatized βοή "shout" (βοῦς); 22 ἀρώμεναι, 54 Ἰαπετιονίδη, 69 Κρονίωνι, 105 ἐξαλέασθαι with an
  empty lemma; 56 and 92 τ̓ lemmatized σύ (τε); 58 ἀμφαγαπῶντες parsed future (present); 66 lemma γυιοβόρος where the base
  reads γυιοκόρους (a variant: noted); 30 ὤρη lemmatized ὤρα without distinguishing ὤρα "care" from ὥρα "season".
- The Septuagint through `../tools/lxx_verses.py` (15 books; Psalms only 73, 88, 103, 148 LXX): every Greek verse quoted
  was printed first. 1 Samuel, Psalms 2/12/45/91/113/139, Qohelet, Jeremiah are not in the tool: their LXX is not quoted.
- The Hebrew Bible through `check_bible_quotes.py --show` for every verse quoted (0 problems at the end).
- Rank 3: Evelyn-White's English (quoted only where I am sure of its wording: lines 10, 11, 21, 82), West 1978/1988 and Most
  as readings described in a few words; the other corpora's lines (Atra-ḫasīs I 207–230, Gilgameš I 100) through
  `grep --all`. The Hebrew translations were not consulted.

### Decisions
- **The shared lines:** WD 54 = TH 559 and WD 71 = TH 572 copied character for character. **WD 72 = TH 573** in every
  word; the only difference is the Greek punctuation (TH 573 ends with a comma, the sentence running on to 574; WD 72 with
  a raised point, the sentence ending), so the Hebrew ends `;` instead of `,` – recorded in the entry.
- **Near-repeats:** 53 ≈ TH 558 (only χολωσάμενος `ובזעמו` for μέγʼ ὀχθήσας `ובכעס גדול`); 70 ≈ TH 571 (`ומיד` for γάρ
  `כי`; κλυτός `המהולל` for περικλυτός `המהולל מאוד`; πλάσσεν = `יצר` as σύμπλασσε); 50 ≈ TH 565 (`בנו הטוב של
  יאפטוס`); 52 ≈ TH 567 (`בגבעול כַּלְכָּל נבוב`); 57 ≈ TH 570 (`תחת האש` … `רעה`); 83 ≈ TH 589 (`הערמה התלולה, שאין כנגדה
  תושייה`); 105 ≈ TH 613 (`כך אין … שכל זאוס`); 18 ≈ TH 929j (`בן־קרונוס, רם־הכס, הגר באֶתֶר`); 99 ≈ TH 730; 49 ≈ 95
  (the first copy fixes the Hebrew: `זמם` / `זממה … צערים מרים`).
- **Formulas:** F1 (59), F5 + F6 (99), F6 (53), F16 (81, masculine `שוכני`), F20 + F27 (54), F26 (18, 69, 71), F28 (72),
  F30 (48). F25 is not in my range; 32 has Δημήτερος ἀκτήν without ἱερόν: `גרעיני דֶּמֶטֶר` (F25's first half).
- **Grammar (first occurrences, renderings §4, §13.5):** the gnomic forms – the timeless present of the maxims (23, 25–26)
  and the augmentless imperfect ἔγειρεν (20) read as gnomic – are rendered by the **Hebrew present (participle)**:
  `מעוררת`, `מקנא`, `כועס`, `צרה עינו`; the פירוק says "גנומי". No true gnomic aorist and no infinitive-for-imperative occur
  in 1–105: both stay as fixed in renderings §4 (present; infinitive absolute) for part 2. The potential optative with
  κε / ἄν → `הָיָה` + participle (10 `הייתי משמיע`, 12 `היה מוקיר`, 33 `הייתָ מרבה`, 43 `היית עובד`, 45 `היית מניח`, 46
  `הייתה נספית`); the optative of wish with μή → `אַל` + future (28); the hortative subjunctive → `הָבָה` + future (35);
  the iterative -σκ- → `היו` + participle (90 `היו חיים`).
- **Ἔρις = `מָדוֹן`** for both Strifes (feminine, no article: `מָדוֹן הכבדה`, `טובה מדון זו`); the plural Ἐρίδων (11) =
  `מְדָנִים`, the plural of `מָדוֹן` in Proverbs (6:14, 6:19), with `[היתר שם]`.
- **The envy words, one Hebrew each:** ζηλόω `קִנֵּא` (from ζῆλος `קִנְאָה`, TH 384; LXX Gen 30:1, 26:14, 37:11 ἐζήλωσεν =
  `קִנֵּא`, Prov 27:4 ζῆλος = `קִנְאָה`); κοτέω `כָּעַס` (TH 315); φθονέω `צָרָה עֵינוֹ בְּ־` (the grudging "narrow eye";
  Prov 23:6, 28:22 `רַע עָיִן`). Rejected for φθονέω: `חָמַד` (Exod 20:17, Gen 2:9 `נֶחְמָד`: a false echo), `קִנֵּא`
  (taken).
- **νεῖκος `רִיב`** (TH 87), **δῆρις `קְטָטָה`** (not `מְרִיבָה`, to keep the root ריב for νεῖκος; not `מַצָּה`, which reads
  "matzah"), **πόλεμος `מִלְחָמָה`**, ὀφέλλω `הִרְבָּה`.
- **δωροφάγος `אוֹכְלֵי־מַתָּנוֹת`** (39, with the article as an attribute of "the kings"); `שֹׁחַד` never in the line; the
  LXX's δῶρα = `שֹׁחַד` (Deut 16:19, Exod 23:8, Mic 3:11, Isa 1:23, 5:23) in the note. δίκην δικάσσαι = `לשפוט את
  המשפט` (the figura etymologica kept; δικάζω `שָׁפַט`, new).
- **βίος / βίοτος `מִחְיָה`** (31, 42; the self-test line 42 copied in substance: `כי הָאֵלִים הסתירו ומחזיקים את המחיה מבני
  אדם:`); `לֶחֶם` never for it.
- **The jar:** πίθος `כַּד` (a storage jar, not Erasmus' pyxis – the note at 94); πῶμα `מִכְסֶה`; ἐλπίς / Ἐλπίς `תִּקְוָה`
  (capitalized in the base at 96: a translated name, no article, vocalized so that it strips to the table string); νοῦσος
  `מַחֲלָה` (LXX Exod 15:26 νόσον = `מַחֲלָה`, Deut 7:15).
- **πλάσσω `יָצַר`** (70, REQUIRED); so the potter κεραμεύς is `קַדָּר`, not `יוֹצֵר` (the root יצר is gated to πλάσσω),
  though κεραμεύς is the LXX's word for `יוֹצֵר` (Isa 29:16, which joins it to πλάσσω) – the note at 25. τέκτων `חָרָשׁ`
  (LXX Isa 41:7 τέκτων = `חָרָשׁ`), vocalized against the homograph `חָרַשׁ` "plough" (ἀρόω, 22).
- **ἀπόλλυμι / ὄλλυμι `נִסְפָּה` / `סָפָה`** (46; renderings §13.5 asked for a word of its own): LXX Gen 18:23
  συναπολέσῃς = `תִּסְפֶּה`. Rejected: `אָבַד` / `אִבֵּד` (φθείρω), `כָּלָה` (gated, and `מְכַלֶּה` would trip the `כלה` gate),
  `נִשְׁמַד` (the stem of φθισήνωρ, TH 431).
- **Words chosen to keep the lemmas apart (grep / lexmap first):** ἐπαινέω `הוֹקִיר` (κλείω keeps `שִׁבַּח`; `הִלֵּל` is
  *alālu*'s); κλῆρος `אֲחֻזָּה` (`נַחֲלָה` would share μείρομαι's root נחל, TH 414; `גּוֹרָל` is Μόρος); κακόχαρτος
  `שְׂמֵחַת־הָרָעָה` (`אֵיד` is Ἄτη); μελεδώνη `טְרָדָה` (`דְּאָגָה` is μέρμηρα, TH 55); γυιοκόρος `מְיַגְּעוֹת־אֵבָרִים` (`מכלות`
  trips the `כלה` gate); σθένος `חוֹסֶן` (`אוֹן` is ἴς, TH 332, `כֹּחַ` βίη); ἠπεροπεύω `הוֹלִיךְ שׁוֹלָל` (`פִּתָּה` shares the
  root of νήπιος `פֶּתִי`); μυθέομαι `הִשְׁמִיעַ` (`הִגִּיד` is πιφαύσκω, TH 655); ἐπιλαμβάνω `בָּלַם` (`עָצַר` is ἴσχω, TH
  687); ἐξαιρέω `שָׁלַל` (`נָטַל` is ἀφαιρέω, TH 443); ἐξαλέομαι `חָמַק` (`נִמְלַט` is ὑπεξαλύσκω, TH 615); ἐκπέτομαι `פָּרַח`
  (`עָף` is ποτάομαι, TH 691); χατίζω `הִתְאַוָּה` (`כָּמַהּ` is λιλαίομαι, TH 665); ἄγγελος `שָׁלִיחַ` (`מַלְאָךְ` reserved;
  διάκτορος therefore `הַמּוֹבִיל`); φύρω `גִּבֵּל` (not `בָּלַל`, which would bring Babel, Gen 11:9); ἀλφηστής
  `אוֹכְלֵי־הַשְּׂעוֹרִים` (`לֶחֶם` is ἄρτος's); κακότης `רֹעַ` (`רָעָה` is κακόν's); πτωχός `קַבְּצָן` (`עֹנִי` is πενίη's).
- **Splits recorded (one lemma, two Hebrew words, by sense):** σχέτλιος `אַכְזָרִי` (15, of Strife) / `אֻמְלָל` (TH 488, of
  Kronos); φράζω mid. `שָׂם לֵב` (86) / act. `הוֹדִיעַ` (TH); ἀφαιρέω `הֵסִיר` (94, a lid) / `נָטַל` (TH 443); μίμνω `נִשְׁאַר`
  (97) / `חִכָּה` (TH 754; the pun "Hope waits" in the note); ἐπαινέω `הוֹקִיר` (12, praise) / `הִסְכִּים` (TH 664, approve);
  ταχύς adverb `מַהֵר` (60, as TH 103) / adjective `זָרִיז` (85). **Pairs sharing a Hebrew word:** κελεύω / ἄνωγα `צִוָּה`;
  κάρφω / ἄζω `יִבֵּשׁ`; πλούσιος / ἀφνειός `עָשִׁיר`; πέμπω / ἀποπέμπω `שָׁלַח` / `שִׁלַּח` (one root, a compound).
- **Hebrew-only assonance noted, not exploited:** 16 `מכבדים … הכבדה` (τιμῶσι / βαρεῖαν).

### Open decisions for the user
- **WD 1–10, the proem athetized in antiquity** (Pausanias 9.31.4: the Boeotians' lead tablet began at 11): translated in
  full without `{חשודה}` (Evelyn-White does not bracket it); the note says it.
- **Πέρση (10)** read as a vocative with the base; many editors read Πέρσῃ "to Perses" (the note).
- **The good Strife "elder" (17, προτέρην `קודם`)**: kept as an adverb-like predicate ("bore her earlier"), which leaves the
  Hebrew as open as the Greek; `הבכירה` would be more explicit.
- **Pandora's name (81–82)** left open between "All-Gift" (given gifts) and "gift of all" (herself the gift): `נתנו מתנה`.

### Progress log
- 2026-10-24: drafted 1–105 in six sections, each saved to disk, then `fill` and `verify WD` (0 problems after each;
  the placeholder note for 106–828). One verify catch fixed on the way: 81 the first `אוֹלִימְפִּי` unvocalized.
- A consistency check by `lexmap` over the whole draft: six new words moved off another lemma's Hebrew (μυθέομαι, σθένος,
  ἐπιλαμβάνω, πρόσθεν `לפני כן` with TH 899, ταχύς adverb `מהר` with TH 103, αἶψα `מיד` with TH 87, 102); the rest recorded
  above.
- `check_bible_quotes.py` on the annotated file: 0 problems. `verify WD`: 0 problems, 0 repeated-line differences.
- Not done in this part (as briefed): the intro file, `build`, the three review passes, `build_parallels_index.py` (it
  rewrites `../parallels-index.md`, the coordinator's file).

### The text on its own terms
- **The first Greek "I" speaking to a brother** (10, 27): after a ten-line hymn, the poet turns to Perses; the poem is a
  brother's admonition after a quarrel over the inheritance (37–39), set in a Boeotian village with its assembly (29–30).
- **The poet corrects his own Theogony** (11 ἄρα "so, after all"): there is not one Strife (TH 225) but two, and the good one
  is the elder (17) – competition, set "in the roots of the earth" (19).
- **The village economy of envy** (20–26): a man looks at his rich neighbour and wants to work; potter against potter,
  carpenter against carpenter, beggar against beggar, singer against singer – Hesiod, a competing singer himself (654–657).
- **Courts and kings** (27–41): the agora as a spectacle for the idle; justice as a matter of the full granary (31–33); the
  "kings" are local nobles who judge for gifts; "the half is more than the whole", and the poor man's mallow and asphodel.
- **Why men must work** (42–46): the gods hid livelihood, as seed is hidden in the earth; one day's work would have fed a
  year, the steering oar would hang over the hearth smoke, the oxen and mules would be idle.
- **The sequel to the Theogony's Prometheus** (48): Mekone is presupposed, not retold; new here are the hiding of βίος,
  Zeus's speech (54–58), the four gods and three groups of goddesses who make the woman, her name, Epimetheus, and the jar;
  missing are the woman as "the beautiful evil" itself, the drones, and Prometheus' chains.
- **Gift against gift**: the kings "eat gifts" (39), Zeus "gives" an evil in exchange for fire (57), all the gods "gave a
  gift" – Pandora "All-Gift" (81–82), Prometheus warned his brother never to accept a gift (86).
- **The woman as artefact**: earth and water, a human voice, a goddess's face, a maiden's form (61–63); weaving from Athena,
  grace and wearying desire from Aphrodite, a "dog's mind" and a thief's ways from Hermes (64–68); the execution differs
  from the orders (70–80).
- **Fore-thought and After-thought** (84–89): the two brothers of the myth mirror the two of the poem; Epimetheus understands
  only when he holds the evil – "the fool learns by suffering" (218).
- **The jar** (94–98): a farmhouse storage jar; Hope alone stays under its lip – the crux, good or evil, kept for us or
  from us; elsewhere in the poem ἐλπίς is "empty hope" (498).
- **Diseases as roaming, silent beings** (100–104): by day and night, of their own accord, voiceless because Zeus took
  their voice – while the woman was given one (79); the mind of Zeus cannot be escaped (105 ≈ TH 613).

### Key parallels
- **WD 20–41 ↔ Qoh 4:4–6**: all toil and skill is "a man's envy of his neighbour" (4:4 – the good Strife), the fool folds his
  hands (4:5 – the ἀπάλαμος, the ἀεργός), "better a handful with quiet than two handfuls with toil" (4:6 – "the half is
  more than the whole"): the same sequence of ideas; Qohelet calls it vanity, Hesiod good.
- **WD 23 ↔ Gen 26:14, 30:1 (LXX ζηλόω = `קִנֵּא`)**: the neighbours' envy of a rich farmer (Isaac) – in Genesis it breeds a
  quarrel over wells, in Hesiod effort.
- **WD 39 ↔ Deut 16:19, Exod 23:8, Mic 3:11 (LXX δῶρα = `שֹׁחַד`)**: the "gift-eaters" are, in the LXX's Greek, bribe-takers;
  Micah's rulers "judge for a bribe" (μετὰ δώρων ἔκρινον) in the same century.
- **WD 42 ↔ Gen 3:17–19**: livelihood withheld and toil imposed because of one act at the beginning; the LXX of Gen 3:17
  reads "cursed is the earth in your *works*" (ἔργοις) – the title word of this poem.
- **WD 61, 70 ↔ Gen 2:7 (LXX ἔπλασεν = `וַיִּיצֶר`, ἀπὸ τῆς γῆς)**: πλάσσω ἐκ γαίης; the inversion: in Genesis the man is moulded
  from earth and the woman built from him, in Hesiod the woman is moulded from earth and the men's origin is untold.
- **WD 62 ↔ Gen 1:26**: the woman "like the goddesses in face" (ἐίσκω, the root of the LXX's εἰκών) – a beauty that deceives,
  against an image that confers rank.
- **WD 80–82 ↔ Gen 2:23, 3:20**: the first woman named with an explanation (ὅτι = the LXX's ὅτι of 3:20): "All-Gift" and a
  bane, against "mother of all living".
- **WD 90–92 ↔ Gen 2:25–3:19; Exod 15:26 (LXX νόσος = `מַחֲלָה`)**: a first state without evils, toil and disease, lost through
  an act involving the woman – but in Hesiod men did not sin; they are victims of a quarrel between gods.
- **WD 94 ↔ Prov 23:27 LXX**: the only πίθος in the folder's LXX is the Greek translator's image of the strange woman, "a
  pierced jar" – a Greek image entering the LXX, not a Hebrew one.
- **WD 101 ↔ Gen 6:13, Isa 11:9**: "the earth is full" – of violence (and the flood follows), of knowledge "as the waters cover
  the sea"; here earth and sea are full of evils that came upon men. **WD 102–104 ↔ Ps 91:5–6**: plague and pestilence that
  "walk" by night and noon.

### Lines shared with other texts
- Identical: **WD 54 = TH 559**, **WD 71 = TH 572**, **WD 72 = TH 573** (punctuation only: `;` for `,`).
- Near: 18 ≈ TH 929j; 50 ≈ TH 565; 52 ≈ TH 567; 53 ≈ TH 558; 57 ≈ TH 570; 70 ≈ TH 571; 78 ≈ TH 890 (αἱμυλίοισι λόγοισι);
  83 ≈ TH 589; 99 ≈ TH 730; 105 ≈ TH 613; inside the WD: 49 ≈ 95; 67 = 78 in ἐπίκλοπον ἦθος.
- 93 is almost Odyssey 19.360 (the note).

### Proposals for the shared renderings
Every recurring word fixed here, with its first line (names first):
- **Names:** Ἐρίδων pl. `מְדָנִים` (11, the plural of the translated name `מָדוֹן`; the tool needs a `[היתר שם]` or a plural in
  the table); Ἐλπίς `תִּקְוָה` capitalized in the base at 96 (the table's string is defective: vocalize at every occurrence,
  or a plene table string `תִּקְוָה`→`תקווה`); Πιερίηθεν `מִפִּיֶּרִיָּה` (1); the vocative Μοῦσαι `מוּזוֹת` (1, as TH 114);
  διάκτορος (Hermes) `הַמּוֹבִיל` (68, 77); Παλλὰς Ἀθήνη `פַּלַּס אַתֵנָה` (76).
- **Grammar (§4):** gnomic present / augmentless gnomic imperfect → Hebrew participle (20, 23, 25–26); potential optative →
  `הָיָה` + participle (10, 12, 33, 43, 45, 46); wish optative with μή → `אַל` + future (28); hortative → `הָבָה` (35). The
  gnomic aorist proper and the infinitive-for-imperative did not occur in 1–105.
- **Strife and envy:** Ἔρις `מָדוֹן` (both, 11–28); ζηλόω `קִנֵּא` (23); κοτέω `כָּעַס` (25); φθονέω `צָרָה עֵינוֹ בְּ־` (26);
  νεῖκος `רִיב` (29); δῆρις `קְטָטָה` (14); ὀφέλλω `הִרְבָּה` (14); πόλεμος `מִלְחָמָה` (14); σχέτλιος `אַכְזָרִי` (15, a sense
  split from TH 488 `אֻמְלָל`); ἐπιμωμητός `רְאוּיָה לִגְנַאי` (13); κακόχαρτος `שְׂמֵחַת־הָרָעָה` (28).
- **Work and the household:** βίος `מִחְיָה` (31); ἐπηετανός `לְכָל הַשָּׁנָה` (31); ἐργάζομαι `עָבַד` (43); ἀεργός `בַּטְלָן`
  (44; LXX Prov 13:4 ἀεργός = `עָצֵל`); ἔργον `מְלָאכָה` (20, 21, 28, 46, 64); ἀπάλαμος `רְפֵה־הַיָּדַיִם` (20); χατίζω
  `הִתְאַוָּה` (21); πλούσιος `עָשִׁיר` (22, with ἀφνειός TH 974: a pair); ἄφενος `עֹשֶׁר` (24, TH 112); ἀρόω `חָרַשׁ` (22);
  φυτεύω `נָטַע` (22; LXX Gen 2:8 ἐφύτευσεν = `וַיִּטַּע`); οἶκος `בַּיִת` (23); γείτων `שָׁכֵן` (23); κεραμεύς `קַדָּר` (25);
  τέκτων `חָרָשׁ` ★ vocalized (25); πτωχός `קַבְּצָן` (26); ἀοιδός `מְשׁוֹרֵר` (26); πηδάλιον `מָשׁוֹט־הַהֶגֶה` (45; again 629);
  καπνός `עָשָׁן` (45); ἡμίονος `פֶּרֶד` (46); ταλαεργός `סַבְלָנִי־הַמְּלָאכָה` (46); βοῦς pl. `בָּקָר` (46); ἀλφηστής
  `אוֹכְלֵי־הַשְּׂעוֹרִים` (82); ὄνειαρ `תּוֹעֶלֶת` (41); μαλάχη `חַלְמִית`, ἀσφόδελος `עִירִית` (41).
- **The lawsuit:** κλῆρος `אֲחֻזָּה` (37); κτῆμα `נֶכֶס` (34); ἀλλότριος `שֶׁל זָרִים` (34); ἀγορά `אֲסֵפָה` (29); ὤρα "care"
  `עֵסֶק` (30; ≠ ὥρα `עוֹנָה`); δίκη `מִשְׁפָּט` (9, 36, 39); θέμιστες `דִּינִים` (9); ἰθύς `יָשָׁר`, ἰθύνω `יִשֵּׁר` (7, 9, 36 –
  for the "straight" and "crooked" judgements of 219–264); σκολιός `עָקֹם` (7; LXX Isa 40:4 σκολιά = `הֶעָקֹב`); δικάζω
  `שָׁפַט` (39); δωροφάγος `אוֹכְלֵי־מַתָּנוֹת` (39); κυδαίνω `פֵּאֵר` (38); ἁρπάζω `חָטַף` (38); νήπιος `פֶּתִי`, pl.
  `פְּתָאִים` (40); ἥμισυς `חֲצִי` (40); διακρίνω `הִכְרִיעַ` (35); ἔρδω `פָּעַל` (35).
- **Prometheus and Pandora (beyond renderings §13.3):** κρύπτω `הִסְתִּיר` (42, 47, 50); χολόω mid. `בְּזַעְמוֹ` (47, 53);
  μήδομαι `זָמַם` (49); κῆδος `צַעַר`, pl. `צְעָרִים` (49, 95); τερπικέραυνος `הַמִּתְעַנֵּג־בַּחֲזִיז` (52); ἠπεροπεύω
  `הוֹלִיךְ שׁוֹלָל` (55); ἐσσόμενοι `הָעֲתִידִים לָבוֹא` (56); ἀμφαγαπάζω `חִבֵּק בְּאַהֲבָה` (58); ἐκγελάω `פָּרַץ בִּצְחוֹק`
  (59); ταχύς adv. `מַהֵר` / adj. `זָרִיז` (60, 85); φύρω `גִּבֵּל` (61); σθένος `חוֹסֶן` (62); ἐίσκω `דִּמָּה` (62); ὤψ "face"
  `פָּנִים` (62; ≠ ὄψ `נְעִימָה`); παρθενική `בְּתוּלָה` (63); ἱστός `מַסֶּכֶת` ★ vocalized (64); ὑφαίνω `אָרַג` (64);
  πολυδαίδαλος `רַב־מַעֲשֵׂי־אָמָּן` (64); ἀμφιχέω `יָצַק סָבִיב` (65); μελεδώνη `טְרָדָה` (66); γυιοκόρος
  `מְיַגֵּעַ־אֵבָרִים` (66); κύνεος `כַּלְבִּי`, ἐπίκλοπος `גַּנְבָנִי` (67, 78); ὅρμος `עֲנָק` (74); στέφω `עִטֵּר` (75); ἐαρινός
  `שֶׁל אָבִיב` (75); ἐφαρμόζω `הִתְאִים` (76); ὀνομαίνω `קָרָא (לְ־)` (80); κῆρυξ `כָּרוֹז` (80); δωρέω `נָתַן מַתָּנָה` (82);
  ἄγγελος `שָׁלִיחַ` (85); φράζω mid. `שָׂם לֵב` (86); ἀποπέμπω `שִׁלַּח` (87); ἐκτελέω `הִשְׁלִים` (83).
- **The jar and the evils:** πίθος `כַּד` (94); πῶμα `מִכְסֶה` (94); ἀφαιρέω (a lid) `הֵסִיר` (94); σκεδάννυμι `פִּזֵּר` (95);
  ἐλπίς `תִּקְוָה` (96); ἄρρηκτος `שֶׁאֵין לְשָׁבְרוֹ` (96); μίμνω `נִשְׁאַר` (97); χεῖλος (of a vessel) `שָׂפָה` (97); ἐκπέτομαι
  `פָּרַח` (98); ἐπιλαμβάνω `בָּלַם` (98); πρόσθεν `לִפְנֵי כֵן` / πρίν `קֹדֶם לָכֵן` (98, 90); νοῦσος `מַחֲלָה` (92); κακότης
  `רֹעַ` (93); καταγηράσκω `הִזְדַּקֵּן` (93); μυρίος `רְבָבוֹת` (100); λυγρά (n. pl.) `מְרוֹרִים` (100); ἀλάλημαι `נָדַד`
  (100); πλέως `מָלֵא` (101); αὐτόματος `מֵעַצְמוֹ` (103; again 118); φοιτάω `הִתְהַלֵּךְ` (103); σιγή `דְּמָמָה` (104); ἐξαιρέω
  `שָׁלַל` (104); ἐξαλέομαι `חָמַק` (105).
- **ἀπόλλυμι / ὄλλυμι `נִסְפָּה` / `סָפָה`** (46) – for the whole poem (LXX Gen 18:23).
- **Proem:** ἐννέπω `סִפֵּר`, ὑμνέω `רִנֵּן`, κλείω `שִׁבַּח`, ἀοιδή `שִׁירָה` (pl. `שִׁירוֹת` vocalized) as §11.1; βριάω
  `הִגְבִּיר` / `הַגּוֹבֵר` (5); χαλέπτω `הִקְשָׁה עַל` (5); μινύθω `הִמְעִיט`, ἀρίζηλος `הַנִּרְאֶה לַכֹּל`, ἄδηλος `עָלוּם`
  (6); κάρφω `יִבֵּשׁ` (7); ὑπέρτατος `עֶלְיוֹן` (8); κλύω `הִקְשִׁיב`, ἀΐω `שָׁמַע` (9); ἐτήτυμος `נָכוֹן` (10); μυθέομαι
  `הִשְׁמִיעַ` (10); φατός / ἄφατος `נִזְכָּר` / `בִּלְתִּי־נִזְכָּר`, ῥητός / ἄρρητος `מְפֻרְסָם` / `אַלְמוֹנִי` (3–4); ἕκητι
  `בִּרְצוֹן` (4); ἐπαινέω `הוֹקִיר` (12).

### For the next part (WD 106–285)
- The good and the bad Strife return at 195 (ζῆλος … κακόχαρτος: `קנאה`, `שמחת־הרעה`) and the "straight" / "crooked"
  judgements at 219–264 (`ישר`, `עקום`, `יישר`); the gift-eating kings at 221, 264 (`אוכלי־המתנות`, the δῶρα note).
- αὐτόματος `מֵעַצְמָהּ` at 118 (the earth's fruit "of itself" against the diseases' 103); ὄλλυμι `סָפָה` / `נִסְפָּה` in the
  races; νήπιος `פֶּתִי` (218, 286, 397); ἐλπίς at 498 ("empty hope", with μίμνω `נשאר / חיכה`).
- ποιέω `עָשָׂה` for the races (110, 128, 144, 158); F16 at 110, 128 (`שוכני הארמונות האולימפיים`).

### Lessons for the guidelines
- **Write the section in a scratch file and insert it before the placeholder by script** (one `<!-- טרם תורגם -->` line
  moved forward each time): `fill` and `verify` then run on a file that is always whole.
- **A `lexmap` pass at the end of a part catches "new" words that another poem already uses** for another lemma (six here:
  `מגיד`, `און`, `עצר`, `עשיר` …) – the Hebrew side of the map, not only the Greek side, must be grepped before a word is fixed.
- **The LXX tool's books decide which parallels can carry Greek**: Qohelet, 1 Samuel and most Psalms are not in it, so the
  strongest parallel of this part (Qoh 4:4–6) stands on the Hebrew alone; worth adding Qohelet, 1–2 Kingdoms and the Psalms
  to the restored LXX before part 2.

## Parallels index
(generated by `../build_parallels_index.py` from the הקבלה bullets)
