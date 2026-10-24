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

## WD 106–285

### Scope
WD 106–285 (translator 1, part 2, 2026-10-24): the myth of the five races (106–201) – golden (106–126), silver (127–142),
bronze (143–155), the heroes and the Islands of the Blessed (156–169d), iron (174–201); the fable of the hawk and the
nightingale (202–212); Justice and Hubris (213–224); the just and the unjust city (225–247); the address to the kings,
Zeus' thirty thousand watchers and Dike beside her father (248–273); Zeus' law for beasts and for men (274–285). 184
entries (180 lines and 169a–d) in ten `## ` sections. Suspected lines 124–125 open with `{חשודה}` (the base brackets them;
they are kept unbracketed at 254–255). 169a–d open with `{פפירוס}`, with `[ ]` round the restorations, in the base's order
168, 170–173, 169, 169a–d, 174. The rest of the poem is the placeholder `<!-- טרם תורגם: 286–828 -->`.

### Sources consulted
- The base (Evelyn-White 1914 through Perseus) and the AGDT treebank, through `hesiod_tools.py data WD 106 285`; every parse
  that carries a tense, a gate or a parallel was checked by hand. Treebank slips found (and noted in the פירוק): empty lemmas
  at 119 πολέεσσιν, 153 Ἀΐδαο, 219 ἅμα, 259 καθεζομένη; 149 ἐπέφυκον parsed aorist (an augmentless pluperfect); 174
  ὤφελλον lemmatized ὀφέλλω "increase" (ὀφείλω, the unfulfilled wish); 207 and 268 enclitic νυ lemmatized νῦν.
- The Septuagint through `../tools/lxx_verses.py`: every Greek verse quoted was printed first. 1 Samuel (8:3, the sons of
  Samuel "taking bribes"), Daniel, Qohelet, Jeremiah, Numbers, Joshua, Habakkuk and most Psalms are not in the tool: their
  LXX is described in words or left out, never quoted.
- The Hebrew Bible through `check_bible_quotes.py --show` for every verse quoted (0 problems at the end).
- Rank 3: West 1978 and Most as readings described in a few words (169a–d, 124–125, 263 †); the other corpora's
  lines through `grep`. The Hebrew translations were not consulted.

### Decisions
- **The races' verb:** ποιέω `עָשָׂה` at every making (110, 128, 144, 158; τίθημι at 169c `שם`); never `בָּרָא`. The
  LXX's ἐποίησεν of Gen 1:27 (`וַיִּבְרָא`) is quoted in the note at 110 only: Hesiod's gods "make" like a craftsman, and
  the Hebrew keeps the craftsman.
- **γένος `גֶּזַע`** for every race; **γενεή `דּוֹר`** (160 `הַדּוֹר הַקּוֹדֵם`; 284–285 `דורו`). The metals as adjectives:
  χρύσεος **`גזע זהוב`** (109), ἀργύρεος `של כסף` (128), χάλκειος / χάλκεος `של נחושת` (144), σιδήρεος `של ברזל` (176).
  **A departure:** `גזע זהוב`, not `גֶּזַע הַזָּהָב` as in renderings §5 and the coordinator's list – following §11.6.3
  ("never the construct זהב" for χρύσεος); the other metals have no adjective in Hebrew, so `של`. For the user to confirm.
- **ἥρως `הֵרוֹאִי`** (159 `אנשים הֵרוֹאִים`), **ἡμίθεος `חֲצִי־אֵלִים`** (160); Gen 6:4 in the note only; `נְפִלִים` and
  `גִּבֹּרִים` nowhere. **θεῖος `אֱלוֹהִי`** (159).
- **δαίμων `דַּיְמוֹן`** (122, pl. `דיימונים`), ἐπιχθόνιος `שעל פני האדמה`, ὑποχθόνιος `שמתחת לאדמה`; **ὕβρις `זָדוֹן`** (134,
  146 pl. `זדונות` with `[סטייה מן הנוסחה]`, 213, 217, 238); **δίκη / Δίκη `מִשְׁפָּט`** (the goddess feminine: `ומִשְׁפָּט
  גוברת`, 256 `והבתולה היא מִשְׁפָּט`); δίκαιος `צַדִּיק` (158, 190, 225, 270); **Αἰδώς / Νέμεσις `בּוּשָׁה` / `חֵמָה`** (200,
  vocalized as names); **Ὅρκος `שְׁבוּעָה`** (219, masculine, `רץ`); εὔορκος `נאמן־השבועה` (190, 285), ἐπίορκος `לשקר`
  (194, 282).
- **Fixed items done:** F16 at 110 and 128; F23 `על פני האדמה רבת־המזון` at 157, 169d, 252; F1 at 169a (`א[בי האנשים
  והָאֵלִים]`). **WD 124–125 = 254–255:** the first copy fixed the Hebrew, the second copies it (without `{חשודה}`; 255 ends
  `.` for the Greek point). **WD 149 = TH 152** `צמחו מן הכתפיים על איברים איתנים;`.
- **Grammar (first true occurrences, renderings §4):** the **gnomic aorist** → Hebrew present participle, first at **218**
  ἔγνω `מכיר` ("the fool learns by suffering"), then 224 ἔνειμαν `אינם פוסקים`, 242 ἐπήγαγε `מביא`, 246 ἀπώλεσεν
  `סוֹפֶה`; the gnomic imperfect 240 ἀπηύρα `לוקה`. **No infinitive-for-imperative occurs in 106–285** (278 ἐσθέμεν
  depends on νόμον): it stays open for part 3. The iterative -σκ- → `היו` + participle (as 90); the wish ὤφελλον (174) and
  the wish optative → `מי יתן`; the future of the iron race's prophecy (180–201) as Hebrew future.
- **Sense splits (recorded in the entries):** νέμω mid. `נהנה` / act. `פסק` (119, 224); ἦθος `מנהג` / `נָוֶה` (167, 222);
  μίγνυμι `נמזג` (179; TH `התייחד`); ἴσχω `גבר` (TH `עצר`); παρέρχομαι `עבר` / `עקף`; λείπω act. `עזב` / mid. `נשאר`;
  γίγνομαι of a person `להיוולד` (175); ἄγω `הוליך` / `הביא`; νοέω `חשב` (261) / `הבין`; γιγνώσκω `ביודעין` / `הכיר`; εἶδον
  `רואה` (267) / `הביט`; ξένος `אורח` (183) / `זר` (225).
- **Pairs on one Hebrew word (deliberate):** ὀπαδέω / ὁμαρτέω `ליווה`; βαρύθω / καταβρίθω `כבד`; ὅμοιος / ἐναλίγκιος
  `דומה`; ἄφθονος `בעין יפה` against φθονέω `צרה עינו` (part 1) – the same image, inverted.
- **Gates:** 259 καθεζομένη `בשבתה` with `[היתר שער]` (`שבתה` is gated for "Sabbath"; here the infinitive of ישב). ἀρείων
  `מעולה` (`טוב` is not licensed for it); κρείσσων `עדיף`; θεραπεύω `שירת` (not `עבד`); φύλαξ `שומר` (the φυλα- family).
  λοιμός `דֶּבֶר` vocalized (the TH's `דבר` "something").
- **Consistency (`lexmap`, Hebrew side):** θάλλω at 173 moved from `פורח` to `משגשג` (227 `משגשגת`), to leave `פורח` to
  ἀνθέω; 183 ἑταῖρος `הרֵעַ` vocalized against κακός `הרע`. Recorded, not changed (the TH's words): θεῖος `אלוהי` / TH
  θεσπέσιος; ἐμβασιλεύω `מולך` / TH 403 ἀνάσσω; ἔκπαγλος `מבהילים` / TH 935 κλονέω; φύλοπις `מהומה` / TH 880 κολόσυρτος;
  ἔτος `שנים` / TH 636 ἐνιαυτός; τρέφω mid. `גדל` / TH 641 ἀέξω; ποιέω `עשו` / TH 209 ῥέζω (fixed by the coordinator);
  γενεή `הַדּוֹר` / TH φαίδιμος `הדור` (homographs).

### Open decisions for the user
- **`גזע זהוב` or `גֶּזַע הַזָּהָב`** (109; above).
- **169a–d** kept in the base's place and order (after 173 and 169), as the brief asks; West and Most move or bracket them.
  The restorations are translated as the base prints them, in `[ ]`.
- **124–125** kept with `{חשודה}` at their first place and translated in full: they are needed at 254–255.
- **263 †δίκας** (the base's crux; μύθους is a variant): translated `†המשפטים` with the dagger.
- **270–273** (the poet's wish not to be just, 270–272, taken back at 273): translated in full, as the base prints them.
- **μέροψ `*בעלי־הדיבור*`** (109, 180): uncertain in meaning; marked with `*…*` as uncertain.

### Progress log
- 2026-10-24: drafted 106–285 in ten sections, each saved to disk and inserted before the placeholder, then `fill` and
  `verify WD` (0 problems after each, the placeholder moved forward each time; now 286–828).
- Verify catches fixed on the way: 139 `בָּאוֹלִימְפּוֹס` unvocalized; 146 REQUIRED ὕβρις (plural `זדונות`) –
  `[סטייה מן הנוסחה]`. A quote-checker false positive (a backticked `הִקְלָה` beside a reference) rephrased. Unprinted
  half-quotes in a few הקבלה bullets removed before the insert.
- `lexmap` pass over the whole draft (above). `verify WD`: 0 problems, 289 entries, 0 repeated-line differences.
  `check_bible_quotes.py`: 0 problems.
- Not done (as briefed): the intro, `build`, the review passes, `build_parallels_index.py`.

### The text on its own terms
- **A second story told for the same lesson** (106 `אֹמֶר אחר`): after Prometheus and Pandora, the races explain again why
  life is toil – by decline, not by a single fall. The decline is not straight: the heroes (156–173), "more just and better"
  than bronze, break the metal line; Hesiod has inherited a metal scheme and inserted his own epic past into it.
- **The iron race is Hesiod's present** (174–176 `מי יתן ולא הייתי אני …`): the only first person in the myth, a wish to
  have died earlier or been born later – "later" implying a sixth race, a cycle. The prophecy (180–201) is of the family's
  collapse: children born grey-templed, sons who dishonour aged parents, no thanks for the rearing (θρεπτήρια), the
  oath-keeper unrewarded, Aidos and Nemesis leaving the earth (197–200).
- **The dead become guardians:** the golden race become δαίμονες "upon the earth" (122–126), the silver "under the earth"
  (141), the bronze go nameless to Hades (154); the heroes alone are removed alive to the Islands of the Blessed, where the
  earth bears three times a year (167–173) – and Kronos, released (169a), rules them.
- **The fable addressed to kings who "understand"** (202): the hawk's law is the strong man's; the poet does not draw the
  moral in the fable, but at 276–280: beasts eat one another "since there is no Dike among them", to men Zeus gave Dike.
- **Dike as a goddess with a body:** dragged where bribe-eating men take her (220–221), weeping and wrapped in mist through
  the cities (222–223), a virgin daughter of Zeus who sits by her father and denounces men's unjust mind (256–262) – the
  divine side of a human lawsuit. Horkos runs beside crooked judgments (219).
- **The city's fate tied to its judges:** the just city's peace, harvest, oaks with acorns and bees, sheep heavy with fleece,
  women bearing children like their fathers (225–237); for the unjust, famine and plague, barren women, a destroyed army,
  wall and ships – "often a whole city pays for one bad man" (240).
- **Zeus' eye and watchers** (252–255, 267–269): thirty thousand immortal guardians wrapped in mist; the eye that "sees all
  and understands all" – and the poet's bitter doubt (270–273) whether being just is worth it while the unjust have the
  greater right.

### Key parallels
- **The metals:** Dan 2:31–45 (gold, silver, bronze, iron and clay – the decline of kingdoms; Daniel not in the LXX tool,
  described); Lev 26:19 LXX (the heavens as iron, the earth as bronze, for ὕβρις).
- **The long childhood and the grey-templed newborn:** Isa 65:20 LXX ("the youth a hundred years old", the inverse); Gen 5:3
  ("in his likeness, after his image") against 182 (father not like children).
- **The heroes:** Gen 6:4 (the "men of name" born of gods) and Gen 6:9 LXX (Noah δίκαιος in his γενεά) against 158–160.
- **The iron race's family:** Mic 7:5–6 LXX (υἱὸς ἀτιμάζει πατέρα, a man's enemies those of his house) – the closest to
  182–188; Exod 20:12 and Deut 27:16 LXX (τιμάω / ἀτιμάζω the parents); Lev 19:12 LXX (false oath, 194, 282).
- **The fable:** Judg 9:8–15 (Jotham), 2 Kgs 14:9 (Kgdms LXX: the thistle and the cedar), Ezek 17:2 (the eagle as a riddle and
  a parable, מָשָׁל) – fables addressed to kings; ἱέραξ `נץ` from LXX Job 39:26.
- **Hubris:** Prov 11:2 and 13:10 LXX (ὕβρις brings shame and strife).
- **The just and the unjust city:** Lev 26:3–26 LXX (peace in the land, no sword, the earth's yield; ἐπάξω … δίκην, pestilence)
  and Deut 28:4, 18 (the fruit of the womb, the cattle and the flock blessed or cursed); Ezek 14:21 (famine, beast, sword,
  pestilence); Num 16:22, Josh 22:20 (one man sins and the whole congregation suffers) against Gen 18:26 (the city spared for
  the righteous) – 240 is the first half without the second.
- **The watchers and the eye:** Zech 1:10–11 (the riders sent "to walk through the earth"), 4:10 (the eyes of the LORD running
  through all the earth), Job 1:7, 2 Chr 16:9, Prov 15:3 LXX (in every place the eyes of the Lord watch the evil and the good).
- **Dike beside Zeus:** Prov 8:30 (Wisdom beside the Creator), Ps 89:15 / LXX 88:15 (justice and judgment the foundation of
  the throne); bribes and the bent judgment: Deut 16:19 LXX (ἐκκλίνω κρίσιν, 262), Exod 23:6, Isa 1:23, the sons of Samuel
  (1 Sam 8:3, described).
- **265–266:** Prov 26:27 LXX (he who digs a pit falls into it), Ps 7:16–17 (his mischief returns on his own head).
- **Zeus' law (276–280):** Gen 9:2 and 1:26 LXX (fish, beast, bird – πετεινός – given to man), Hab 1:14 (men made like fish
  that eat one another, described), Gen 9:6.
- **The oath-keeper's descendants (284–285):** Exod 20:5–6 LXX (γενεά: to the third and fourth generation), Prov 20:7 LXX (the
  righteous man's children blessed after him), Ps 109:13.

### Lines shared with other texts
- Identical: **WD 124–125 = 254–255** (inside the WD; 255 `.` for the Greek point); **WD 149 = TH 152**.
- Near: 121 ≈ 140 ≈ 156 (`… כיסתה הארץ … גם את הגזע הזה`); 117 ≈ 237 (`… נושא השדה נותן־הדגן`, and 173); 113 ≈ 91
  (`הרחק מ…`); 139 ≈ 257 ≈ TH 101; 123 ≈ 253; 125 ≈ 223 (`עטויי ערפל`); 274 ≈ 107 (`ואתה – השלך … אל לבבך`); 252 = F23.

### Proposals for the shared renderings
Every recurring word fixed here, with its first line:
- **Names:** Οἰδιπόδης `אֶדִיפּוּס` (163) and Ἑλένη `הֶלֶנָה` (165) in the familiar forms (proposed for the table); Ὕβρις as
  a translated name `זָדוֹן` (proposed for the table, as Ἔρις `מָדוֹן`); Δίκη `מִשְׁפָּט` (f.); Ὅρκος `שְׁבוּעָה` (m.);
  Αἰδώς / Νέμεσις `בּוּשָׁה` / `חֵמָה` (200, vocalized); Καδμηίς `קַדְמוֹס` (162, "the land of Kadmos").
- **Grammar (§4):** gnomic aorist → participle, first 218 ἔγνω `מכיר` (224, 242, 246; the gnomic imperfect 240); the
  unfulfilled wish ὤφελλον → `מי יתן ו־` (174); the infinitive-for-imperative still not met (part 3).
- **The races:** ποιέω `עָשָׂה`; γένος `גֶּזַע`; γενεή `דּוֹר`; χρύσεος `זָהֹב` (`גזע זהוב`); ἀργύρεος `שֶׁל כֶּסֶף`;
  χάλκειος / χάλκεος `שֶׁל נְחֹשֶׁת`; σιδήρεος `שֶׁל בַּרְזֶל`; μέροψ `*בַּעֲלֵי־הַדִּבּוּר*` (uncertain); ἥρως `הֵרוֹאִי`;
  ἡμίθεος `חֲצִי־אֵלִים`; θεῖος `אֱלוֹהִי`; δαίμων `דַּיְמוֹן`; ἐπιχθόνιος `שֶׁעַל פְּנֵי הָאֲדָמָה`; ὑποχθόνιος `שֶׁמִּתַּחַת
  לָאֲדָמָה`; ἀλεξίκακος `מַרְחִיק־הָרָעָה`; φύλαξ `שׁוֹמֵר`; πλουτοδότης `נוֹתֵן־עֹשֶׁר`; βασίλειος `מַלְכוּתִי`; ἀήρ `עֲרָפֶל`;
  ἕννυμι `עָטָה`; ἄπλαστος (or ἄπλατος) `בִּלְתִּי־יְצוּרִים`; ἄαπτος `שֶׁאֵין לָגַעַת בּוֹ`; φυή `קוֹמָה`; νόημα `הֲבָנָה`;
  ἀτάλλω `הִשְׁתַּעֲשֵׁעַ`; ἥβη `נְעוּרִים`; μέτρον `מִדָּה`; ἀφραδία `חֹסֶר דַּעַת`; ἄφρων `חֲסַר דַּעַת`; ἀτάσθαλος `פָּרוּעַ`
  (TH); ἀτασθαλία `פְּרִיעוּת`; θεραπεύω `שֵׁרֵת`; χερείων `גָּרוּעַ`; ἀρείων `מְעֻלֶּה`; κρείσσων `עָדִיף`.
- **War and death:** φύλοπις `מְהוּמָה`; λαῖτμα `מְצוּלָה`; ἑπτάπυλος `שִׁבְעַת־הַשְּׁעָרִים`; εὐρώεις `טָחוּב`; κρυερός `קַר`;
  νώνυμνος `בְּלִי שֵׁם`; ἔκπαγλος `מַבְהִיל`; φᾶρος `גְּלִימָה`; καταναίω `הוֹשִׁיב`; ἐξαλαπάζω `הֶחֱרִיב`; στρατός `צָבָא`;
  ἀπαίνυμαι `לָקַח`; ἀκηδής `בְּלִי צַעַר`; μελιηδής `מָתוֹק־כִּדְבַשׁ`; θάλλω `שִׂגְשֵׂג`; ἀνθέω `פָּרַח` (≠ ἐκπέτομαι
  `פָּרַח` 98: a homograph).
- **The iron race:** πολιοκρόταφος `שְׂבֵי־רְקּוֹת`; ξένος `אוֹרֵחַ` / `זָר`; ξεινοδόκος `מְאָרֵחַ`; ἑταῖρος `רֵעַ`; γονεύς
  `הוֹרֶה`; θρεπτήρια `גְּמוּל עַל גִּדּוּלָם`; ἀτιμάω `בִּזָּה`; μέμφομαι `גִּנָּה`; βάζω `הֵטִיחַ`; στέρομαι `מְקֻפָּח`; αἶσχος
  `חֶרְפָּה`; ὀπαδέω / ὁμαρτέω `לִוָּה`; δειλός `עָלוּב`; ὀιζυρός `נָתוּן בִּמְצוּקָה`; αἰνέω `רוֹמֵם`; χειροδίκης `שֶׁמִּשְׁפָּטָם
  בְּיָדָם`; εὔορκος `נֶאֱמַן־הַשְּׁבוּעָה`; ἐπίορκος `לַשֶּׁקֶר`; ὅμοιος / ἐναλίγκιος `דּוֹמֶה`.
- **The fable and justice:** αἶνος `מָשָׁל`; ἱέραξ `נֵץ`; ἀηδών `זָמִיר` (m.); μάρπτω `לָפַת`; γναμπτός `כָּפוּף`; μύρομαι
  `קוֹנֵן`; δαιμόνιος (voc.) `הוֹ מְשֻׁנֶּה`; μεθίημι `שִׁחְרֵר`; φρονέω `הִשְׂכִּיל`; λόγος sg. `אֹמֶר`; ἐκκορυφόω `סִכֵּם`;
  ἀλιταίνω `פָּשַׁע`; μηχανάομαι `תִּכְנֵן`; ἐξελαύνω `גֵּרֵשׁ`; ῥόθος `הֲמֻלָּה`; ἀπαυράω `לָקָה בִּגְלַל`; ἀκούω `שָׁמַע`;
  ἐπακούω `הֶאֱזִין`; ἰθυδίκης `יִשְׁרֵי־הַמִּשְׁפָּט`; ἄδικος `עַוָּל`; παρακλίνω `הִטָּה`; ἀποτίνω `שִׁלֵּם`; ὄπις `הַשְׁגָּחָה`;
  ἀλέγω `חָשַׁשׁ`; τρίβω `שָׁחַק`; ὀνοτάζω `גִּדֵּף`; ἐπιδέρκομαι `הִשְׁקִיף`; ἔργω `סָגַר`; βουλεύω `יָעַץ`; ἀγορεύω `אָמַר
  בְּפֻמְבֵּי`; ψεύδω `שִׁקֵּר`; μαρτυρία `עֵדוּת`; ἀάω `יֻכֶּה בְּאֵיד`; ἄτη pl. `אֵידִים`; ἀμαυρός `עָמוּם`; γηρύω `הִכְרִיז`
  (TH); βάλλω `הִשְׁלִיךְ`; μέριμνα `דְּאָגָה` (with μέρμηρα).
- **The just city:** εἰρήνη `שָׁלוֹם` (m., `מגדל־הנערים` κουροτρόφος); ἄρουρα `שָׂדֶה`; ζείδωρος ἄρουρα `הַשָּׂדֶה
  נוֹתֵן־הַדָּגָן`; τεκμαίρομαι `יִעֵד`; βάλανος `בַּלּוּט`; ὄις `כִּבְשָׂה`; μαλλός `גִּיזָה`; βαρύθω / καταβρίθω `כָּבֵד`;
  διαμπερές `תָּמִיד`; ἄφθονος `בְּעַיִן יָפָה`; ἐθελημός `בִּרְצוֹנָם`; ἥσυχος `שָׁקֵט`; ἔνδημος `בֶּן הַמָּקוֹם`; ἐπάγω
  `הֵבִיא עַל`; λοιμός `דֶּבֶר`; ἀποφθινύθω `דּוֹעֵךְ`; φραδμοσύνη `מַחְשָׁבוֹת`; σύμπας `שְׁלֵמָה`.
- **Zeus' law:** ἰχθύς `דָּג`; θήρ `חַיָּה`; πετεινός `מְעוֹפֵף`; νόμος `חֹק` (276); ἐσθίω `אָכַל` (278, the infinitive after νόμον).

### For the next part (WD 286–828)
- **The infinitive-for-imperative** has not yet occurred: its first true occurrence (likely in the precepts from 298 on)
  fixes it (renderings §4: infinitive absolute) and is to be recorded.
- νήπιος `פֶּתִי` again (286, 397); κακότης `רֹעַ` (287) and ἀρετή at 289 (the two roads – not `טוב` unless licensed);
  ἐργάζομαι `עָבַד` (299 ff.); ἐλπίς at 498; αἰδώς as a common noun `בּוּשָׁה` (317–319, unvocalized as a name); ὄλβος / ὄλβιος
  (licensed for `טוב`); the gift-eating kings closed at 264.

### Lessons for the guidelines
- **Never write a "not quoted" half-quote in a הקבלה bullet**: a backticked Hebrew phrase beside a book name is read as a
  quotation by the checker (and as one by the reader). Either print the verse and quote it with its reference, or describe it
  in words without backticks.
- **Chain the steps of a scripted insert with `&&`**: a replace that asserts must stop the insert, or the unfixed text lands.
- **A `lexmap` pass over the Hebrew side within the same part** catches collisions between two new words of one's own (θάλλω /
  ἀνθέω `פורח` here), not only with the TH.
- **The plural of a fixed term** (ὕβρις pl. `זדונות`) fails REQUIRED: the tool could accept the plural of the fixed noun.

## WD 286–413

### Scope
WD 286–413 (translator 2, part 3, 2026-10-24): the road to ἀρετή and the sweat before it (286–297); "work, Perses",
hunger, the drones, work no disgrace (298–319); wealth not seized, the five crimes Zeus requites, sacrifice "according
to your means" (320–341); the neighbour, measure for measure, giving and not giving, "a little on a little", the jar
(342–369); the wage and the witness, the wheedling woman, the only son (370–382); the Pleiades – the opening of the
farmer's calendar – "strip to sow", Perses begging again, debts (383–404); house, woman and ox, borrowing, "do not put
off till tomorrow" (405–413). 127 entries in seven `## ` sections, in the base's order (… 360, 363, 361, 362, 364 …);
**310 is not in the base** (noted at 309 and 311). The placeholder is now `<!-- טרם תורגם: 414–828 -->`.

### Sources consulted
- The base and the AGDT treebank through `hesiod_tools.py data WD 286 413`; every parse carrying a tense, a mood, a gate
  or a parallel checked by hand. Treebank slips found (noted in the פירוק): 306 σοί lemmatized σός (σύ); 364 κατακείμενον
  lemmatized κατακείω (κατάκειμαι, as at 31); 383 πληιάδων lemmatized "πλψιάς" (a typo: so the names check for Πληιάδες
  never fires – `כִּימָה` was written by hand); 402 ἀγορεύσεις parsed "futpf" (future); 348 βοῦς lemmatized "βου~σ" and
  392, 407 πάντα "πα~ς" (beta-code residue).
- The Septuagint through `../tools/lxx_verses.py` (15 books): every Greek verse quoted was printed first (Gen 2:5, 2:15,
  2:25, 3:16–17, 3:19, 7:2, 7:4, 8:22, 26:14, 30:23, 31:44, 32:25, 49:4; Exod 3:22, 20:17, 22:13, 22:20–23; Lev 5:7, 12:8,
  18:16, 25:23, 25:44; Deut 6:7, 15:2, 15:10, 16:17, 24:15, 25:14; Judg 11:34; 4 Kgdms 6:5; Isa 40:4, 42:8; Ezek 36:30;
  Amos 5:8; Job 9:9, 24:10, 38:31, 38:33; Prov 3:10, 3:28, 5:3, 6:8–9, 8:17, 10:4, 12:11, 13:11, 15:19, 19:14, 19:15,
  20:4, 22:9, 27:1, 27:10, 28:27). Jeremiah, Ruth, Psalms 37/49/109/127, Qohelet, Nehemiah, 1 Kings and Sirach are not
  in the tool: Hebrew only, or (Sirach 4:21, not in the Hebrew Bible) in words only.
- The Hebrew Bible through `check_bible_quotes.py --show` for every verse quoted (0 problems at the end).
- Rank 3: Evelyn-White's English quoted only where I am sure of its wording (287, 289, 311, 383, 391, 405 and a phrase at
  336, 378, 404); West 1978 and Most as readings in a few words. Ancient quotations named from memory only where well
  known (Aristotle EN 1.4 for 293–297, Politics 1.2 for 405; Livy 22.29; Seneca Ep. 1.5 for 369; Virgil G. 1.299 for 391;
  Iliad 20.249 for 403). The Hebrew translations were not consulted.

### Decisions
- **The infinitive used as an imperative – first fixed here, at 336** (renderings §4; §11.8–§11.9 had left it open):
  the Hebrew **infinitive absolute, vocalized**, and "שם הפועל כציווי" in the פירוק. 336 ἔρδειν ἱερά `הַקְרֵב קָרְבָּנוֹת`
  (the fixed phrase `לְהַקְרִיב קָרְבָּנוֹת` in the infinitive absolute), 337 καίειν `שָׂרוֹף`, 338 ἱλάσκεσθαι `רַצֵּה`, 342
  καλεῖν `קָרוֹא` / ἐᾶσαι `הַנֵּחַ`, 343 `קָרוֹא`, 349 μετρεῖσθαι `מָדוֹד לְךָ` / ἀποδοῦναι `שַׁלֵּם`, 353 φιλεῖν `אָהוֹב` /
  προσεῖναι `בּוֹא`, 354 δόμεν `נָתוֹן` (= Deut 15:10 `נָתוֹן תִּתֵּן`), 368 κορέσασθαι `שָׂבֹעַ`, 369 φείδεσθαι `חָסוֹךְ`,
  371 θέσθαι `שׂוֹם`, 382 ἔρδειν `פָּעוֹל` / ἐργάζεσθαι `עָבוֹד`, 384 ἄρχεσθαι `הַתְחֵל`, 391–392 `עָרֹם זָרוֹעַ`, `נַהֵג
  בַּבָּקָר`, `קָצוֹר`, 407 ποιήσασθαι `עָשׂוֹ לְךָ` (Jer 7:5 `עָשׂוֹ`). **With μή** (352, 410): `אַל` + infinitive absolute
  (`אַל בָּצוֹעַ`, `וְאַל דָּחֹה`). Not imperatival (and so a plain infinitive): 306 κοσμεῖν (subject of ἔστω), 365 εἶναι,
  366–367 ἑλέσθαι / χρηίζειν (subjects), 377 φερβέμεν (purpose), 393 κομίζεσθαι (object of ἐθέλῃσθα), 404 φράζεσθαι
  (after ἄνωγα).
- **The gnomic aorist → participle** (§11.9), applied: 334 ἐπέθηκεν `שָׂם`, 345 ζώσαντο `חוֹגְרִים` (with the imperfect
  ἔκιον `בָּאִים`), 355 ἔδωκεν ×2 `נוֹתֵן`, 360 ἐπάχνωσεν `מַקְפִּיא`, 372 ὤλεσαν `סוֹפִים`. Optatives: the potential
  with κε / ἄν → `הָיָה` + participle (348 `לא היה נספה`, 362 `היה … נהיה`, 379 `היה … מעניק`); the wish → jussive
  (376 `וִיהִי`, 378 `וְזָקֵן תָּמוּת`); the optative in a condition → future (357, 361–362).
- **Required and self-test lines:** 289 = the self-test's words (`אך לפני הַמַּעֲלָה שמו הָאֵלִים זֵעָה`) without its
  final `;`, because the Greek clause ends with ἀθάνατοι in 290 (`בני־האלמוות;`); 397 = the self-test line exactly
  (`ולא אוסיף לך מידה; עֲבֹד, פרסס הפתי,`); 299 `עֲבֹד, פרסס, גזע נהדר` in the same form; ἐργάζομαι `עָבַד` at 299,
  309, 312, 314, 382, 397; ἱδρώς `זֵעָה` (289); γυμνός `עָרֹם` (391–392, vocalized: `ערם` = "heap", `ערום` = "cunning");
  ἱερός `קָדוֹשׁ` (339, the "holy light" of dawn); F13 `לילות וימים` (385).
- **ἀρετή `מַעֲלָה`** (289, 313), vocalized; κακότης `רֹעַ` (287, as 93). Both keep Hesiod's double sense
  (excellence / prosperity; badness / misery). The LXX's ἀρεταί = `תְּהִלָּה` (Isa 42:8) noted.
- **The drones (304–305):** κηφήν `רַחְפָן`, μέλισσα `דְּבוֹרָה`, κάματος `יְגִיעַ` as TH 594–599 (no Greek line is the
  same, so only the words are copied); ἀεργός `בַּטְלָן`, ἀεργία `בַּטָּלָה`; τρύχω `כִּרְסֵם` (`כִּלָּה` reserved, §11.7).
- **ὄνειδος `חֶרְפָּה`** (311, LXX Gen 30:23 τὸ ὄνειδος = `חֶרְפָּתִי`), and therefore **WD 211 αἶσχος moved from `חֶרְפָּה`
  to `כְּלִמָּה`** (`ועל הכלימות`; the entry's note says why) – one lemma, one word. `קָלוֹן` rejected: it is the Ugaritic
  corpus's cognate of *qlt* (Baal cycle 1.4 III 15, 1.6 V 12).
- **αἰδώς** as a common noun `בּוּשָׁה` (317–319, 324), its opposite ἀναίδεια `חֻצְפָּה` (324, 359); 317 is fixed for its
  near-repeat 500 (ἐλπὶς … κεχρημένον ἄνδρα κομίζει): `ובושה לא טובה סועדת איש נצרך,`.
- **The sacrifice (336–341):** βωμός does not occur, so no `מִזְבֵּחַ` in a line (337 `עָלָיו` for ἐπι-καίω; a first
  draft `(המזבח)` was stopped by the gate); κατὰ δύναμιν `לְפִי יְכָלְתְּךָ` (= LXX Deut 16:17 κατὰ δύναμιν); ἁγνός
  `טָהוֹר` / καθαρός `נָקִי` (LXX καθαρός = `טָהוֹר`, Gen 7:2: kind b, noted); μηρία `יְרֵכַיִם`; σπονδή `נֶסֶךְ`; θύος
  `קְטֹרֶת`; ἵλαος `נוֹחַ` (not `רָצוּי`); ἱλάσκομαι `רִצָּה` (not `כִּפֵּר`, though the LXX's ἐξιλάσκομαι is `כִּפֵּר`: noted).
- **WD 328 ἀνὰ … βαίνῃ `יעלה`** (= LXX Gen 49:4 ἀνέβης … ἐπὶ τὴν κοίτην, `כִּי עָלִיתָ מִשְׁכְּבֵי אָבִיךָ`): ἀναβαίνω `עָלָה`;
  δέμνιον `מִטָּה` (λέχος keeps `מִשְׁכָּב`, εὐνή `יָצוּעַ`).
- **WD 413 παλαίω `נֶאֱבַק`** (= LXX Gen 32:25 ἐπάλαιεν, `וַיֵּאָבֵק`) – a collision with μάρναμαι `נֶאֱבַק` (TH 629, 647,
  663; WD 163): see Proposals.
- **WD 401 λυπέω `הֶעֱצִיב`**: the root עצב is gated to the λυπ- family (renderings §7.1), and λύπη is the LXX's word for
  `עִצָּבוֹן` (Gen 3:16–17); so the licensed word was used, not a neutral `הִטְרִיד` that would hide the bridge.
- **The κτα- family = the root קנה:** κτητός `קְנוּיָה` (406; LXX Lev 25:44 κτήσεσθε = `תִּקְנוּ`), κτέανον `קִנְיָן` (315,
  with κτῆσις TH 606: a pair); so ὠνέομαι "buy" `רָכַשׁ` (341). κτῆμα keeps `נֶכֶס`.
- **Wealth and debt:** χρῆμα split by sense – pl. "wealth" `הוֹן` (320), sg. "a thing, a matter" `דָּבָר` (344, 402), pl.
  "gear" `כֵּלִים` (407); κέρδος `בֶּצַע`, κερδαίνω `בָּצַע` (323, 352: Proverbs' word); χρέος (χρειῶν) `חוֹב` (404; LXX
  Deut 15:2 χρέος = `מַשֶּׁה`); λύσις `הַתָּרָה`; μέτρον `מִדָּה` (350; LXX Deut 25:14, Lev 19:35), μετρέω `מָדַד`, ἐπιμετρέω
  `הוֹסִיף מִדָּה` (397, the self-test); μισθός `שָׂכָר` (370; LXX Deut 24:15); μάρτυς `עֵד` (371, vocalized; LXX Gen
  31:44); αἰτέω `שָׁאַל` (408; LXX Exod 3:22, 22:13) / ζητεύω `בִּקֵּשׁ` (400).
- **The neighbour:** γείτων `שָׁכֵן` throughout; πηός `מְחֻתָּן`; ἄζωστος `בְּלִי חֲגוֹרָה`; ἐγγύθι `קָרוֹב` (288, 343, 389;
  homograph of τάχα `בְּקָרוֹב` "soon", TH 490 – noted, not changed); 343 is fixed for its near-repeat 700 (`מי שגר קרוב
  אליך`).
- **Splits recorded (one lemma, two Hebrew words, by sense):** χαλεπός `קָשֶׁה` (292, 332, 334: road, words, requital) /
  `אָנוּשׁ` (91, 178, 186: diseases, pains); κοσμέω `עָרַךְ` (306, "order") / `קִשֵּׁט` (72, 76, "adorn"); κομίζω act.
  `סָעַד` (317) / mid. `אָסַף לוֹ` (393); πείθω mid. `שָׁמַע בְּקוֹל` (295, 359) / perf. `בָּטַח` (375); φίλος adj. `אָהוּב`
  (306) / possessive `־וֹ` (360) / noun "friend" `יָדִיד` (370); νοέω `חָשַׁב` (286, as 261) / `הֵבִין` (293, 296);
  ἐπιτέλλω `זָרַח` (383, a star) / `הֵטִיל עַל` (TH 995); ἀνύω `הִשִּׂיג` (395) / `בִּצֵּעַ` (TH 954; `בצע` here would meet
  κέρδος); τυγχάνω `קִבֵּל` (401) / `פָּגַשׁ` (TH 973); ῥέζω `פָּעַל` (329, as ἔρδω, the same verb) / `עָשָׂה` (TH 209); ἔρδω
  `פָּעַל` / in ἔρδειν ἱερά `הִקְרִיב` (renderings §5).
- **Pairs on one Hebrew word (synonyms, deliberate):** ἀμείνων / λωίων / βέλτερος `טוֹב יוֹתֵר` (the `טוב` gate licenses
  all three); χράω (perf.) / χρῄζω `נִצְרָךְ`; γέρων / γηραιός `זָקֵן`; ὡραῖος / ὥριος `בְּעוֹנָתוֹ`; δώς / δόσις `מַתַּת`;
  κτέανον / κτῆσις `קִנְיָן`; πείθω (perf.) / πίσυνος `בּוֹטֵחַ`; ἀργαλέος / χαλεπός `קָשֶׁה`.
- **Words chosen to keep lemmas apart (grep / lexmap first):** ὄρθιος `זָקוּף` (`תָּלוּל` is αἰπύς, 83); οἶμος `שְׁבִיל`
  (ὁδός `דֶּרֶךְ`); ἄκρον `שִׂיא` (κορυφή `פִּסְגָּה`, κάρα `רֹאשׁ`); τραχύς `מְחֻסְפָּס`; λεῖος `חָלָק` (vocalized); ἐφετμή
  `פְּקֻדָּה` (`מִצְוָה` would be the Torah's ἐντολή); νεμεσάω `מִתְמַלֵּא חֵמָה` (the root of Νέμεσις `חֵמָה`); ὀργή `מֶזֶג`;
  κόθουρος `חֲסַר־עֹקֶץ`; πλήθω `גָּדוּשׁ` (πλέως `מָלֵא`, πίμπλημι `מִלֵּא`); καλιά `אָסָם` (LXX Prov 3:10 ταμίεια ←
  `אֲסָמֶיךָ` with πίμπλημι); πολύμηλος `עֲתִיר־צֹאן`; πλουτέω `הִתְעַשֵּׁר`; ἀεσίφρων `קַל־דַּעַת`; μελετάω / μελέτη `שָׁקַד` /
  `שְׁקִידָה`; σίνομαι `חָבַל בְּ־` (βλάπτω `הִזִּיק`); θάρσος `תְּעוּזָה` (κράτος `עֹז`); ἁρπακτός `חָטוּף`, ἅρπαξ `חֲטִיפָה`
  (ἁρπάζω `חָטַף`); θεόσδοτος `נְתוּן־אֵלִים`; ληίζομαι `בָּזַז` (ἐξαιρέω `שָׁלַל`); κατοπάζω `דָּחַק`; μαυρόω `עִמְעֵם` (from
  ἀμαυρός `עָמוּם`); ἱκέτης `מְבַקֵּשׁ־מִקְלָט`; κρυπτάδιος `חֲשָׁאִי`; παρακαίριος `שֶׁלֹּא בְּעִתָּם`; ὀρφανός `יָתוֹם`;
  καθάπτω `תָּקַף`; ἀγαίομαι `קָצַף` (χώομαι `חָרָה`, χόλος `זַעַם`, κοτέω `כָּעַס`); ἀμοιβή `תַּגְמוּל` (ὄπις `גְּמוּל`, TH
  222); ἐχθρός `שָׂנוּא`; δαίς `סְעוּדָה`; μάλιστα `בְּיִחוּד`; ἐγχώριος `בַּמָּקוֹם`; ἄρκιος `מַסְפִּיק`; δώτης `נוֹתֵן`,
  δότειρα `נוֹתֶנֶת`; παχνόω `הִקְפִּיא`; σμικρός `קָטָן`; αἶθοψ `בּוֹעֵר` (αἰθαλόεις `לוֹהֵט`); ἀλέξω `הָדַף`; θαμά
  `תְּכוּפוֹת`; κήδω `צִעֵר` (κῆδος `צַעַר`); βλαβερός `מַזִּיק`; φείδομαι / φειδώ `חָסַךְ` / `חִסָּכוֹן`; πυθμήν `קַרְקָעִית`;
  πίστις / ἀπιστία `אֵמוּן` / `אִי־אֵמוּן`; πυγοστόλος `מְהֻדֶּרֶת־עַכּוּז`; κωτίλλω `פִּטְפֵּט`; διφάω `חִפֵּשׂ`; φηλητής
  `גַּנָּב`; φέρβω `פִּרְנֵס` (γηροκόμος `מְכַלְכֵּל`); ἐγκαταλείπω `הִשְׁאִיר`; ἐπιθήκη `תּוֹסֶפֶת`; ἔλδομαι `עָרַג`
  (χατίζω `הִתְאַוָּה`, λιλαίομαι `כָּמַהּ`); δύω `שָׁקַע`; χαράσσω `הִשְׁחִיז`; πεδίον `מִישׁוֹר`; ἄγκος `עֵמֶק` (`גַּיְא` is
  the LXX's χάος); κυμαίνω `מַעֲלֶה גַּלִּים` (vocalized against ἀρετή `מַעֲלָה`); βοωτέω `נַהֵג בַּבָּקָר` (ἀρόω keeps
  `חָרַשׁ`; ἐλαύνω `נָהַג` TH 291 – a compound phrase, noted); πτώσσω `חִזֵּר עַל` (the Mishnaic "go round the doors");
  ἐπιδίδωμι `נָתַן עוֹד`; ἀμελέω `הֶעְלִים עַיִן` (Prov 28:27); λυπέω `הֶעֱצִיב`; πράσσω `הֵפִיק` (Prov 3:13); νομός `מִרְעֶה`
  (≠ νόμος `חֹק`); ἀλεωρή `מִפְלָט`; ἀροτήρ `חוֹרֵשׁ`; γαμετή `נְשׂוּאָה`; ἀρνέομαι `סֵרֵב`; τητάομαι `חָסַר` (στέρομαι
  `מְקֻפָּח`); παραμείβω `חָלַף`; ἀναβάλλω `דָּחָה`; αὔριον `מָחָר`, ἔνηφι `מָחֳרָתַיִם`; ἐτωσιοεργός `שֶׁמְּלַאכְתּוֹ לַשָּׁוְא`;
  ἀμβολιεργός `מַשְׁהֶה־מְלָאכָה` (both through ἔργον `מְלָאכָה`, which the gate licenses).
- **Names:** Πληιάδες `כִּימָה` (vocalized; a singular Hebrew name for the Greek plural, so 383 uses the infinitive
  `בִּזְרֹחַ`); Ἀτλαγενής `יְלִידוֹת אַטְלָס`; δαίμων `דַּיְמוֹן` (314, "lot"); Demeter `דמטר` (300, 393).

### Open decisions for the user
- **211 αἶσχος `כְּלִמָּה`** (changed from `חֶרְפָּה` in translator 1's part, so that ὄνειδος can have the LXX's
  `חֶרְפָּה`): a cross-part change; revert if the coordinator prefers αἶσχος `חֶרְפָּה` and ὄνειδος another word.
- **314 δαίμονι δ' οἷος ἔησθα** (a crux): `ויהי מה שתהיה לפי הדיימון` keeps both readings open.
- **378** (the wish "may you die old, leaving a second son"): translated as a wish, with Evelyn-White's conditional
  reading in the apparatus.
- **406** (athetized by some; Aristotle quotes only 405): translated in full without `{חשודה}`, as the base does not
  bracket it.
- **310** (in Rzach and West, not in the base): described in words at 309, not translated.
- **The infinitive absolute** for every imperatival infinitive (above) – some (`עָשׂוֹ`, `שַׁלֵּם`, `הַנֵּחַ`) are rare in
  Modern Hebrew; the alternative, the imperative, would hide the Greek form. Fixed by renderings §4; for the user to know.

### Progress log
- 2026-10-24: drafted 286–413 in seven sections, each saved to a scratch file and inserted before the placeholder by
  script, then `fill`, `verify WD` and `check_bible_quotes.py` (0 problems after each). Verify catches fixed on the way:
  337 `(המזבח)` (the `מזבח` gate: βωμός is absent; now `עָלָיו`). Quote-checker catches fixed: four backticked words beside
  a reference that were not quotations (289 `הוֹד`, 337 `טָהוֹר`, 382 `עָבַד`, 402 `הֵפִיק`), and verses with the
  Psalms/Proverbs four-space caesura split into half-verse quotations.
- Fidelity read-through of the whole range against the Greek (every negation, tense and mood): 286 `אֹמַר` vocalized (ἐρέω
  is future); 390 `הַמַּעֲלֶה` vocalized (homograph of `מַעֲלָה`).
- `lexmap` pass on both sides (Hebrew → lemmas and lemma → Hebrew): the splits and pairs above recorded; the lexmap
  parser cut a gloss containing `; ` (320 χρῆμα) – fixed. Cited precedents checked against the map (κτῆσις TH 606, ὄπις
  TH 222, μάρναμαι TH 629 / WD 163 corrected in the notes).
- End: `verify WD` 0 problems, 0 repeated-line differences (416 entries); `check_bible_quotes.py` on the annotated file and
  project.md: 0 problems; `selftest` 0 failures. Not done (as briefed): intro, `build`, the review passes,
  `build_parallels_index.py`.

### The text on its own terms
- **ἀρετή is prosperity as much as virtue** (287–292, 313): the "road" is the farmer's way from poverty to a full barn;
  κακότης is misery as much as vice. The steep road that becomes easy (291–292) is Hesiod's image, later Prodicus' "Heracles
  at the crossroads".
- **Three kinds of men** (293–297): who understands by himself, who listens to good advice, who does neither – Perses is
  the third; Aristotle quotes the lines in the Ethics.
- **Hunger as a person** (299–302): it "hates" the idle and is his "companion"; Demeter "loves" the worker and fills his
  barn – the gods of the field as patrons of a working household.
- **Work no disgrace** (311): against the later aristocratic contempt for manual labour; the disgrace is idleness, and
  envy of the rich worker is the good Strife again (312, cf. 23).
- **Shame good and bad** (317–319): the poor man's shame keeps him from work and from asking; boldness belongs to wealth –
  a village's social order in three lines (and 500 repeats 317 of empty hope).
- **Wealth seized and wealth god-given** (320–326): by force or by the tongue in court (the lawsuit with Perses); the gods
  "dim" the seizer and shrink his house.
- **The crimes no court tries** (327–334): against the suppliant and the guest (Zeus Hikesios and Xenios), the brother's
  wife, orphans, the old father: Zeus himself requites – the gods' anger as the bond of the family and the village.
- **Sacrifice as household routine** (336–341): "according to your means", morning and evening, pure in body; its purpose
  frankly economic – that you buy the neighbour's plot, not he yours.
- **The neighbour before kin** (342–348): neighbours come ungirt, in-laws stop to dress; a bad neighbour loses you an ox –
  the village as the real safety net.
- **Measure for measure and the gift economy** (349–360): borrow by measure, return the same and more; give to the giver;
  Giving (Δώς) and Snatching (Ἅρπαξ) as two half-personified women; the robbed man's heart "freezes".
- **Thrift** (361–369): "a little on a little"; what is in the house does not worry you; drink deep at the jar's top and
  bottom, spare in the middle (Seneca's "sera parsimonia in fundo").
- **Trust and distrust** (370–375): a witness even with your brother (smiling); the wheedling woman "searching your barn"
  – Pandora's daughters again; trusting a woman is trusting thieves.
- **The only son** (376–380): a peasant's family planning, so that the plot is not divided (as Hesiod's was with Perses);
  more sons only if the father lives long and Zeus gives more.
- **The calendar begins with the Pleiades** (383–392): heliacal rising (May) for the harvest, morning setting (November)
  for ploughing; forty days invisible; the same law for plains, coast and glens; "strip to sow, strip to plough, strip to
  reap".
- **The brother at the door** (396–404): Perses has come begging; the poet refuses and sends him to work, before he must
  beg from neighbours with wife and children; debts and hunger as the farmer's two fears.
- **The household's foundations** (405–413): house, (bought) woman, plough-ox – Aristotle's definition of the οἶκος; own
  your tools, never borrow at the season; never put off till tomorrow – "the delayer wrestles with ruin".

### Key parallels
- **WD 289 ↔ Gen 3:19 (LXX ἐν ἱδρῶτι = `בְּזֵעַת`)**: sweat set by the gods before excellence, against sweat as the curse
  that leads to bread and to dust – the same Greek word, opposite valuations.
- **WD 288–292 ↔ Prov 15:19 (LXX ὁδοὶ ἀεργῶν)**: the two roads, inverted – in Proverbs the idle man's way is thorny, in
  Hesiod badness is smooth and excellence steep; Prov 19:15 LXX (ψυχὴ ἀεργοῦ πεινάσει) ↔ WD 302 (hunger the idle man's
  companion), with Hesiod's own ἀεργός.
- **WD 304–305 ↔ Prov 6:6–8 + the LXX's plus 6:8a**: the sluggard sent to the ant – and in the Greek Proverbs also to the
  bee (μέλισσα, ἐργάτις): a Greek addition in which Hesiod's bees and drones may echo.
- **WD 299, 301, 411 ↔ Prov 12:11 (LXX ὁ ἐργαζόμενος … ἐμπλησθήσεται), 3:10 (πίμπληται τὰ ταμίεια = `וְיִמָּלְאוּ
  אֲסָמֶיךָ`)**: the worker fills his barn, in the same Greek verbs.
- **WD 328 ↔ Gen 49:4 (LXX ἀνέβης … ἐπὶ τὴν κοίτην)**: "going up on the brother's bed" – Reuben's idiom and verb; Lev
  18:16, 20:21 the prohibition.
- **WD 330–334 ↔ Exod 22:20–23 (LXX ὀρφανός)**: stranger, widow and orphan protected by the god who "is angry" and requites.
- **WD 336 ↔ Deut 16:17 (LXX κατὰ δύναμιν)**, Lev 5:7, 12:8: sacrifice according to one's means – the identical Greek
  phrase.
- **WD 345 ↔ Prov 27:10 (LXX κρείσσων φίλος ἐγγὺς ἢ ἀδελφὸς μακρὰν οἰκῶν)**: the near neighbour better than the distant
  kinsman – the same proverb, with ἐγγύς and "dwelling"; the verse's other words (πατρῷος, ἐγκαταλείπω) recur at 376–378.
- **WD 350 ↔ Deut 25:14 (LXX μέτρον καὶ μέτρον), Lev 19:35**; **WD 354 ↔ Deut 15:10 (LXX διδοὺς δώσεις … οὐ λυπηθήσῃ)**:
  measure and giving – in the Torah one just measure and giving to the poor, in Hesiod "the same and more" and giving to
  the giver.
- **WD 404 ↔ Deut 15:2 (LXX ἀφήσεις πᾶν χρέος)**: the release of debts – a divine law in Israel, the farmer's own task in
  Hesiod; **WD 405 ↔ Exod 20:13 (house, wife … ox)**: the same order of the household as the Hebrew Decalogue, which the
  LXX (Exod 20:17) reorders; **WD 410 ↔ Prov 3:28, 27:1 (LXX αὔριον)**; **WD 413 ↔ Gen 32:25 (LXX ἐπάλαιεν)**.
- **WD 383 ↔ Job 9:9, 38:31, Amos 5:8**: `כִּימָה` = Πλειάς only in Job 38:31; Job 9:9 LXX lists other stars in another
  order, and Amos 5:8 LXX drops the stars altogether.

### Lines shared with other texts
- No line of 286–413 repeats another drafted line. Near-repeats fixed here for later copies: **317 ≈ 500** (`ובושה לא טובה
  סועדת איש נצרך,` – 500 has ἐλπίς for αἰδώς) and **343 ≈ 700** (`מי שגר קרוב אליך`). Inside the range: 299 ≈ 397
  (`עֲבֹד, פרסס`). Words only: 304–305 ≈ TH 594–599 (the drones).

### Proposals for the shared renderings
- **Grammar (§4):** the infinitive-for-imperative → the vocalized infinitive absolute, first at **336** `הַקְרֵב`; with μή
  → `אַל` + infinitive absolute (**352** `אַל בָּצוֹעַ`); "שם הפועל כציווי" in the פירוק. The gnomic aorist → participle
  confirmed (334, 345, 355, 360, 372).
- **παλαίω `נֶאֱבַק`** (413; LXX Gen 32:25 ἐπάλαιεν = `וַיֵּאָבֵק`, a kind-(a) bridge): proposed to keep it, and to move
  **μάρναμαι** (TH 629, 647, 663; WD 163) off `נֶאֱבַק` – e.g. to `נִלְחַם` (if πόλεμος `מִלְחָמָה` may share its root, as
  μάχη / μάρναμαι shared one) – or else to record the pair.
- **ὄνειδος `חֶרְפָּה`** (311; LXX Gen 30:23) and **αἶσχος `כְּלִמָּה`** (211, changed): for §11.
- **ἀρετή `מַעֲלָה`** (289, vocalized) and κακότης `רֹעַ` – for §5.
- **κτα- = קנה:** κτητός `קְנוּיָה` (406), κτέανον `קִנְיָן` (315); ὠνέομαι `רָכַשׁ` (341).
- **λυπέω `הֶעֱצִיב`** (401) – the licensed member of the עצב gate.
- Recurring words fixed here (first line): ἀεργία `בַּטָּלָה` (311); καλιά `אָסָם` (301); χρῆμα `הוֹן` / `דָּבָר` / `כֵּלִים`
  (320, 344, 407); κέρδος `בֶּצַע`, κερδαίνω `בָּצַע` (323, 352); μέτρον `מִדָּה` (350), μετρέω `מָדַד` (349); μισθός `שָׂכָר`
  (370); μάρτυς `עֵד` (371); αἰτέω `שָׁאַל` (408); χρέος `חוֹב` (404); αὔριον `מָחָר` (410); μελέτη `שְׁקִידָה` (380);
  ἄρκιος `מַסְפִּיק` (351); χρῄζω / χράω `נִצְרָךְ` (317, 351); ἀναίδεια `חֻצְפָּה` (324); θάρσος `תְּעוּזָה` (319); πίστις
  `אֵמוּן` (372); ἀναβάλλω `דָּחָה` (410); δαίς `סְעוּדָה` (342); σπονδή `נֶסֶךְ`, θύος `קְטֹרֶת`, μηρία `יְרֵכַיִם` (337–338);
  ἵλαος `נוֹחַ` (340); πεδίον `מִישׁוֹר` (388); ἄγκος `עֵמֶק` (389); ἐπιτέλλω (of a star) `זָרַח`, δύω `שָׁקַע` (383–384);
  ὥριος `בְּעוֹנָתוֹ` (392); βοωτέω `נַהֵג בַּבָּקָר` (391); ἀροτήρ `חוֹרֵשׁ` (405); γαμετή `נְשׂוּאָה` (406).
- **Names:** Ἀτλαγενής `יְלִידוֹת אַטְלָס` (383). The treebank lemma of 383 is "πλψιάς": the names check for Πληιάδες
  will not fire there; the tool could add that spelling (a coordinator's decision).

### For the next part (WD 414–617, the farmer's year)
- The infinitive absolute for every imperatival infinitive (the precepts of the calendar are full of them); `אַל` +
  infinitive absolute with μή; the gnomic aorist → participle.
- Fixed and waiting: 500 ≈ 317 (`… לא טובה סועדת איש נצרך,`); 700 ≈ 343 (`מי שגר קרוב אליך`); F25 `גרעיני דמטר הקדושים`
  (466, 597, 805 – check the Greek first); Πληιάδες `כִּימָה` (572, 615, 619), Ὠρίων `כְּסִיל` ★; ἄμητος `קָצִיר`, ἄροτος
  `חָרִישׁ`, ἀρόω `חָרַשׁ`, σπείρω `זָרַע`, θέρος `קַיִץ`, χειμών `חֹרֶף`; βοῦς `שׁוֹר` / `בָּקָר`; καλιά `אָסָם`; αὔριον `מָחָר`;
  ἀμβολιεργός `מַשְׁהֶה־מְלָאכָה`; δαίς `סְעוּדָה`; μισθός `שָׂכָר`; ἐλπίς at 498 (`תִּקְוָה`) with κομίζω `סָעַד`.
- Gate homographs met in this part: `מזבח` (no βωμός), `ערם` (γυμνός, vocalize `עָרֹם`), `זרוע` (σπείρω, vocalize
  `זָרוֹעַ`), `אלה` / `מאלה` (vocalize `אֵלֶּה`), `ספים` (vocalize `סוֹפִים`), `עד` (vocalize `עֵד`).

### Lessons for the guidelines
- **A gloss in the פירוק must not contain `; `** – it is the segment separator, and `lexmap` cut 320's χρῆμα gloss there
  (the Hebrew of the line vanished from the map). Use a comma.
- **A self-test line may not fit the line division**: the WD 289 self-test ends `;`, but the Greek sentence ends one word
  into 290 (ἀθάνατοι): keep the self-test's words and follow the base's punctuation; the self-test still passes.
- **A garbled treebank lemma silently disables the names check** (383 "πλψιάς"): look at the lemma of every name in the
  `data` output, not only at the NAMES lines it prints.
- **The LXX's pluses are bridges too**: the bee of Prov 6:8a, the ὄνειδος / αἰσχύνομαι of Prov 20:4 and the giver of
  Prov 22:9a exist only in the Greek Proverbs – worth grepping the LXX for Hesiod's words, not only the verses the
  literature names.

## WD 414–617

### Scope
WD 414–617 (translator 2, part 4, 2026-10-24): the farmer's year. Autumn – cutting timber, mortar, pestle and wagon
(414–426); the plough, the two oxen and the forty-year-old ploughman (427–447); the crane's cry, the season of
ploughing, the wagon without wood, the prayer to Zeus Chthonios and Demeter (448–468); sowing and good management, the
late ploughman and the cuckoo (469–492); winter – the smith's warm λέσχη and empty hope (493–503); Lenaion and Boreas –
the forest, the beasts, the girl indoors, the "boneless one" (504–535); winter clothes, the morning mist, the hard month
and the rations (536–563); spring – Arcturus and the swallow, pruning the vines, the "house-carrier" and the harvest, the
dawn (564–581); summer – the thistle and the cicada, Sirius, shade and wine (582–596); threshing and storing, the hired
man and the dog, the vintage under Orion and Sirius, the setting of the Pleiades – back to ploughing (597–617). 204
entries in ten `## ` sections, in the base's order. The placeholder is now `<!-- טרם תורגם: 618–828 -->`.

### Sources consulted
- The base and the AGDT treebank through `hesiod_tools.py data WD 414 617`; every parse carrying a tense, a mood, a gate
  or a parallel checked by hand. Treebank slips noted in the פירוק: 568 ὀρθογόη (treebank ὀρθρογόη); 617 πλειών "year"
  shares its diacritic-free lemma with πλείων "more" (so `lexmap` merges them: a tool collision, not a rendering one);
  609 Ὠαρίων and 598, 615 Ὠρίων are two lemma spellings of one name (both carry the names check).
- The Septuagint through `../tools/lxx_verses.py` – every Greek verse quoted was printed first: Gen 1:2, 1:14, 2:5, 2:6,
  2:15, 3:19, 3:20, 3:21, 4:2, 8:22, 9:21, 15:2, 24:25, 26:12, 41:5, 45:19; Exod 23:12; Lev 13:48, 20:20, 25:3; Deut 8:4,
  11:14, 22:9, 25:4; Judg 9:13; Isa 5:6, 38:14; Ezek 4:12; Amos 5:8; Job 8:14, 9:9, 24:16, 37:6, 37:8, 37:9, 38:31; Prov
  6:11a, 13:4, 23:29; Ps 148:8. Jeremiah (8:7, 4:3), Ruth (3:2, 3:3), the Song of Songs (2:11–12), Qohelet, Psalms
  29/121/128/129/147, Numbers and 1 Kings are not in the tool: Hebrew only.
- The Hebrew Bible through `check_bible_quotes.py --show` for every verse quoted (0 problems at the end).
- The creation corpus: the Farmer's Instructions (`../סיפורי-הבריאה-המסופוטמיים/5-הוראות-האיכר/`: lines 14, 23, 25, 49,
  50, 58, 65, 90, 94, 96, 98, 105–109) and Summer and Winter (`7-הקיץ-והחורף/` 215), quoted from their Hebrew `>` lines;
  every one stated as "a shared motif, not a source".
- Rank 3: West 1978 and Evelyn-White as readings in a few words (602 ἄοικον, 617 πλειών, 571 φερέοικος); ancient
  testimonia named from memory only where well known (Alcaeus fr. 347 copies 582–588; the scholia's πλειών = ἐνιαυτός;
  Odyssey 11.489 for the θής). The Gezer calendar in words only. The Hebrew translations were not consulted.

### Decisions
- **Fixed renderings applied:** F25 `גרעיני דמטר הקדושים` (466, 597: both Δημήτερος ἱερὸν ἀκτήν); F13 `לילות וימים`
  (562; 612 "δέκα ἤματα καὶ δέκα νύκτας" is another phrase: `עשרה ימים ועשרה לילות`); the Gen 8:22 set (σπείρω `זָרַע`,
  ἀμάω / ἄμητος `קָצַר` / `קָצִיר`, θέρος `קַיִץ`, χειμών `חֹרֶף`, ἔαρ `אָבִיב`, ἀρόω `חָרַשׁ`, ἄροτος `חָרִישׁ`, ἄροτρον
  `מַחֲרֵשָׁה`); ἄρτος `לֶחֶם` (442); σῖτος `דָּגָן` (604); the names Πληιάδες `כִּימָה` (572, 615), Ὠρίων `כְּסִיל` ★
  (598, 609, 615, always vocalized), Σείριος `סִירִיּוּס`, Ἀρκτοῦρος `אַרְקְטוּרוֹס` (566, 610), Βορέας `בּוֹרֵאָס` (506,
  vocalized), the Hyades `הַהִיאָדוֹת` (615, vocalized), Ζέφυρος `זֶפִירוֹס` (594, vocalized), Διόνυσος `דִּיּוֹנִיסוֹס`
  (614, vocalized), Ἠώς `שַׁחַר`; ὦ Πέρση `הוֹ פֶּרְסֵס` (611).
- **The infinitive for the imperative** (renderings §4): the vocalized infinitive absolute throughout the calendar
  (e.g. 597 `דָּחֹק`, 600 `אָסֹף`, 604 `כַּלְכֵּל`, 606 `הָבֵא`, 608 `הָשֵׁב`, `הַתֵּר`, 611 `בָּצֹר`, 612 `הַרְאֵה`, 613
  `כַּסֵּה`, `שָׁאֹב`, 616 `הָיֹה זוכר`). Exceptions recorded in the notes: an infinitive governed by κέλομαι / ἄνωγα is a
  plain infinitive (602 `לַעֲשׂוֹת`, 603 `לָתוּר`, 598 `לָדוּשׁ` after `דָּחֹק`); 574 the imperative `וּבְרַח` (the
  infinitive absolute `בָּרוֹחַ` is caught by the `רוח` gate). A real imperative (604 μὴ φείδεο) → `אַל תַּחְסֹךְ`.
- **Time clauses:** ἦμος / τῆμος `בְּשָׁעָה שֶׁ־` / `בְּאוֹתָהּ שָׁעָה`; εὖτε (with ἄν) `בְּשָׁעָה שֶׁ־` (598, 609); ἐπήν with
  the aorist subjunctive `אַחֲרֵי שֶׁ־` (600, 614).
- **The farm's vocabulary (new words, first line):** τέμνω `כָּרַת` (420) but περιτέμνω of vines `זָמַר` (570; LXX Lev
  25:3 τεμεῖς = `תִּזְמֹר`); σκάφος `עִדּוּר` (572; LXX Isa 5:6 τμηθῇ … σκαφῇ = `יִזָּמֵר … יֵעָדֵר`); the plough's parts in
  Mishnaic terms – ἔλυμα `סַדָּן`, γύης `בֹּרֶךְ`, ἱστοβοεύς `יָצוּל`, ἐχέτλη `יְדִית` (427–436); ἄμαξα `עֲגָלָה` (426, 453;
  LXX Gen 45:19); στάχυς `שִׁבֹּלֶת` (473; LXX Gen 41:5); στήμων / κρόκη `שְׁתִי` / `עֵרֶב` (538; LXX Lev 13:48); χιτών
  `כֻּתֹּנֶת`, δέρμα `עוֹר` (536, 513; LXX Gen 3:21); ῥινός `גֶּלֶד` (515); πρόβατον `צֹאן` (558; LXX Gen 4:2); οἶνος `יַיִן`
  (585; LXX Gen 9:21); λέσχη `בֵּית־הַשִּׂיחָה` (493; LXX Prov 23:29 λέσχαι = `שִׂיחַ`); ἄοκνος `לֹא־עָצֵל` (495; LXX Prov
  6:11a); ὑετός `מָטָר` (LXX Job 37:6), ὄμβρος `גֶּשֶׁם`, ὀμβρέω `הִמְטִיר`, ὕω `גָּשַׁם`; σκοτόεις `חָשׁוּךְ` (555, through the
  `חשך` gate; LXX Gen 1:2 σκότος); χελιδών `סִיס` (568; LXX Isa 38:14); κόκκυξ / κοκκύζω `קוּקִיָּה` / `מְקוּקָה` (486);
  εὐθημοσύνη / κακοθημοσύνη `הַנְהָגָה טוֹבָה` / `רָעָה` (471–472); σκόλυμος `קִנְרָס`, τέττιξ `צִיקָדָה` (582); βίβλινος
  `בִּיבְּלִינִי` (589); πρῖνος `אַלּוֹן מָצוּי` (436); ἀλωή `גֹּרֶן` (599); δίνω `דּוּשׁ` (598); θής `שָׂכִיר`, ἔριθος
  `פּוֹעֶלֶת`, ἄτεκνος `עֲרִירִי` (602; LXX Gen 15:2, Lev 20:20); κομέω `כִּלְכֵּל` (604; as γηροκόμος `מְכַלְכֵּל`, TH 605);
  ἡμερόκοιτος `יְשַׁן־הַיּוֹם` (605); χόρτος `מִסְפּוֹא` (606; LXX Gen 24:25 χορτάσματα), συρφετός `תֶּבֶן`; ἀναψύχω `הֵשִׁיב
  נֶפֶשׁ` (608; LXX Exod 23:12 ἀναψύξῃ = `וְיִנָּפֵשׁ`); ἀποδρέπω `בָּצַר`, βότρυς `אֶשְׁכּוֹל` (611); συσκιάζω `כִּסָּה בַּצֵּל`,
  ἀφύσσω `שָׁאַב` (613); ῥοδοδάκτυλος `וְרֻדַּת־הָאֶצְבָּעוֹת` (610); πλειών `שָׁנָה` (617).
- **Names and transcriptions:** Ληναιών `לֵנַיאוֹן` (504), Θρῄκη `תְּרַקְיָה` (507), Πανέλληνες `כָּל־הַהֶלֶנִים` (528),
  Πανδιονίς `בַּת־פַּנְדִּיּוֹן` (568).
- **Riddle-names kept as riddles:** ἀνόστεος `חֲסַר־הָעֲצָמוֹת` (524, the octopus), φερέοικος `נוֹשֵׂא־הַבַּיִת` (571, the
  snail), ἡμερόκοιτος `יְשַׁן־הַיּוֹם` (605, the thief): the hearer solves them; the note gives the answer.
- **Splits recorded** (one Greek word, two Hebrew words by sense): πήγνυμι `נָעַץ` / `הִרְכִּיב`; ἐλαύνω `נָהַג` / `גֵּרֵשׁ`;
  ἄκρον `קָצֶה` / `שִׂיא`; ἀραρίσκω `הוֹלֵם` / `עָרוּךְ` (601) / `מְחֻבָּר`; βοῦς `שׁוֹר` / `בָּקָר` / fem. `פָּרָה` (591); δέω
  `קָשַׁר` (TH `אָסַר`); ἐμπνέω `נָשַׁף` (TH `הִשְׁרָה`); αἱρέω `תָּפַס`, but ἀπό … ἕληται in tmesis `לָקַח מִ־` (605).
- **Pairs recorded** (two Greek words, one Hebrew word): δειπνέω / δεῖπνον `אָכַל לַאֲרוּחָה`; καταλέγω / εὐνάζω `שָׁכַב`;
  ἀνίστημι / ὄρνυμι `קָם`; ἀργαλέος / χαλεπός `קָשֶׁה`; δέρμα / χρώς `עוֹר`; ἀρύω / ἀφύσσω `שָׁאַב` (550, 613); ἐνιαυτός /
  πλειών `שָׁנָה`; κέλομαι / κελεύω / ἄνωγα `צִוָּה`; ὕλη `יַעַר` and ὑλοφάγος `אוֹכֶלֶת־חֹרֶשׁ` (591, vocalized: `חורש` =
  ἀροτήρ, 405).

### Open decisions for the user
- **602 θῆτά τ' ἄοικον ποιεῖσθαι**: "hire a thes without a household" (most) or "turn the thes out of the house" (after
  the harvest): the Hebrew `שכיר חסר־בית לַעֲשׂוֹת לך` keeps both open.
- **617 πλειών**: "the year" (the scholia), translated literally (`והשנה תלך … אל מתחת לאדמה`); the sense – the seed of
  the whole year is now under the ground – is in the note, with the possible pun on Πλειάδες.
- **603 ὑπόπορτις**: the image ("with a calf under her") kept – `שעגל יונק תחתיה` – rather than a plain `מֵינִיקָה`.
- **608 ἀναψύχω `הֵשִׁיב נֶפֶשׁ`**: transitive, as the Greek (refresh the knees); the LXX's Niphal `וְיִנָּפֵשׁ` is
  intransitive. The alternative is `נָפַשׁ` with a change of construction.
- **The plough's Mishnaic terms** (427–436): exact, but obscure to a modern reader; the notes explain each one.
- **ἔλυμα `סַדָּן`** collides with ἄκμων `סַדָּן` "anvil" (TH 722, 724): a true Hebrew homograph; the alternative is the
  Mishnaic `בֵּית הַסַּדָּן` or a description.

### Progress log
- 2026-10-24: drafted 414–617 in ten sections, each saved to a scratch file and inserted before the placeholder by
  script, then `fill`, `verify WD` and `check_bible_quotes.py` (0 problems after each). Verify catches fixed on the way:
  477 `אֶל` vocalized (εὐοχθέων contains "θε"); 506 `בּוֹרֵאָס` and 594 `זֶפִירוֹס` vocalized (first occurrence); 517
  `השיער שלהם` and 527 `על המחוז ועל העיר` (the `ערם` gate); 574 `וּבְרַח` (the `רוח` gate). Quote-checker catches fixed:
  604 a backticked `כִּלְכֵּל` beside a reference; a 1 Kgs 7:33 note made a full quotation; Gen 24:16 needs the ketiv
  `וְהַנַּעֲרָ`. Removed on the way: a wrong Prov 8:17 parallel (578), unverifiable half-quotations (491), and at 595 a
  "verse" that does not exist (replaced by Gen 26:19, printed). Stray Hebrew letters inside Greek words fixed (εὐοχθέων,
  κακοθημοσύνη, φεύγω).
- `lexmap` pass on both sides (Hebrew → lemmas and lemma → Hebrew) over the whole range: the splits and pairs above
  recorded; 591 `חֹרֶשׁ` vocalized after the reverse map showed it beside ἀροτήρ `חורש`.
- End: `verify WD` 0 problems, 0 repeated-line differences (620 entries); `check_bible_quotes.py` on the annotated file
  and project.md: 0 problems; `selftest` 0 failures. Not done (as briefed): intro, `build`, the review passes,
  `build_parallels_index.py`.

### The text on its own terms
- **The sky is the farmer's clock.** No dates and no month-names but one (Lenaion, 504): the year is read off the
  heliacal risings and settings – the Pleiades (383, 572, 615), Arcturus at dusk (566) and at dawn (610), Orion (598,
  609, 615), Sirius (417, 587, 609) – and off the birds and beasts: the crane (448), the cuckoo (486), the swallow (568),
  the snail climbing the plants (571), the cicada (582). The calendar closes on itself: 615–617 returns to 383–384.
- **The Boeotian winter** (504–563): Boreas from Thrace, the sea roaring, the forest shrieking, the beasts with their
  tails between their legs; the old man made "bent", τροχαλός, running like a wheel (518), the girl who stays indoors by her mother (519–523),
  the octopus gnawing his own foot (524) – the cold as a force that sorts every creature into its place.
- **The household's labour roles:** the master gives orders, the slaves (δμῶες) do the work (459, 470, 502, 573, 597,
  608); the forty-year-old ploughman who keeps his furrow straight (441–447); the hired man and the hired woman
  (602–603), the dog fed on bread (604); the girl and her mother (519–523); the wife appears only as the "wanton" women of high summer (586).
- **Measure and timing as morality:** "the poor man's" misjudgement (the late ploughman, 485–490), "empty hope" (498 ≈
  317), the λέσχη as the idle man's trap (493–501), "do not sleep in the harvest" (573–577): failure in the calendar is a
  moral failure, and the gods' will is "hard to know" (483–484).
- **Every crop is a god's gift:** Demeter's holy grain (466, 597), the gifts of Dionysus (614); the prayer at the first
  furrow to Zeus Chthonios and Demeter (465–468).
- **The oral poet's lore:** folk medicine (summer dries the men and inflames the women, 586–588, copied by Alcaeus),
  kennings and riddles (524, 571, 605), proverbial numbers (the forty-year-old, the ten-and-five days of the grapes,
  three parts water to one of wine, 596).

### Key parallels
- **WD 414–617 ↔ Gen 8:22 (LXX)**: the whole calendar is one long commentary on "seed-time and harvest, cold and heat,
  summer and winter, day and night shall not cease" – and the LXX's θέρος καὶ ἔαρ, ἡμέραν καὶ νύκτα are Hesiod's words
  (414, 462, 494, 562, 617). Same order; in Genesis a divine promise, in Hesiod a farmer's knowledge.
- **WD 448–451 ↔ Jer 8:7**: the crane (and the stork) "keeps the time of its coming" – Jeremiah's birds know their
  seasons, the people do not know God's law; Hesiod's crane tells the farmer when to plough. (Jeremiah not in the tool.)
- **WD 615, 609 ↔ Job 38:31, 9:9 (LXX)**: Job 38:31 LXX renders `כִּימָה` Πλειάς and `כְּסִיל` Ὠρίων – the very pair of
  615, and the source of the Hebrew names here; Job 9:9 LXX lists Πλειάς, Ἕσπερος and Ἀρκτοῦρος. Amos 5:8 LXX drops the
  stars. In the Bible the stars are God's works; in Hesiod, the farmer's clock.
- **WD 504–535 ↔ Job 37:6–10, Ps 147:16–17, Ps 148:8 (LXX)**: snow, frost and the cold "from the north" (Job 37:9 LXX
  ἀπὸ δὲ ἀκρωτηρίων ψῦχος); **Job 37:8 LXX θηρία ὑπὸ σκέπην** ↔ 512, 532 (the beasts take shelter) – the strongest single
  image; Ps 148:8 LXX χιών, κρύσταλλος.
- **WD 608 ↔ Exod 23:12 (LXX ἀναψύξῃ = `וְיִנָּפֵשׁ`)**: the slave's rest and the ox's rest, in Hesiod's own verb: a
  seasonal rest after the harvest in Hesiod, the weekly Sabbath as a commandment in the Torah.
- **WD 570, 572 ↔ Lev 25:3, Isa 5:6 (LXX τέμνω, σκάπτω)**: the two works of the vineyard, pruning and hoeing, are the LXX's
  `זָמַר` and `עָדַר` – the Greek gives the Hebrew words.
- **WD 536 ↔ Gen 3:21 (LXX χιτῶνας δερματίνους)**: the coat of skins as man's protection; **WD 563 ↔ Gen 3:20 (LXX μήτηρ
  πάντων)**: the earth "mother of all" and Eve "mother of all living".
- **WD 493 ↔ Prov 23:29 (LXX λέσχαι)**; **WD 495 ↔ Prov 6:11a (LXX ἄοκνος)**; **WD 498 ↔ Prov 13:4 (LXX ἀεργός)**: the
  Greek Proverbs speak Hesiod's vocabulary of idleness.
- **WD 605 ↔ Job 24:16 (LXX)**: the thief who digs through houses in the dark and shuts himself in by day – Hesiod's
  "day-sleeper".
- **WD 602 ↔ Gen 15:2 (LXX ἄτεκνος = `עֲרִירִי`)**; **WD 606 ↔ Gen 24:25 (LXX χορτάσματα = `מִסְפּוֹא`)**; **WD 614 ↔ Judg
  9:13** (wine that gladdens gods and men); **WD 568 ↔ Song 2:11–12** (the bird's voice announces spring); **WD 599 ↔ Ruth
  3:2** (winnowing on the threshing floor).
- **The Farmer's Instructions** (a shared motif of agricultural instruction, not a source): spare ox and spare plough (FI
  23, 25 ↔ 432–434), seeding depth (FI 49–50 ↔ 446, 471), the straight furrow (FI 58 ↔ 443), the prayer as the seed
  sprouts (FI 65 ↔ 465), fodder for the wagon oxen (FI 94 ↔ 452), threshing and winnowing (FI 98, 105–109 ↔ 597–599),
  counted days (FI 96 ↔ 612–613). **Summer and Winter 215** (the man walking in the cold in old shoes) ↔ 541. **The Gezer
  calendar** (in words): the months of the agricultural year in order, without stars and without morals.
- Looked for and not found: the snail (571) has no counterpart in Prov 30:24–28 (ant, rock-badger, locust, lizard); the
  Song of Songs has no harvest-and-Sirius image for 582–596 (only the spring of 2:11–12, used at 568); Gen 2:25 belongs
  to 391 (part 3) – 460 has no γυμνός.

### Lines shared with other texts
- **500 ≈ 317** (`ובושה לא טובה` → `ותקווה לא טובה סועדת איש נצרך,`): copied word for word, with ἐλπίς for αἰδώς.
- **614 ≈ TH 941**: Διώνυσον πολυγηθέα – `רַב־הַשִּׂמְחָה` kept.
- **598, 615**: σθένος Ὠαρίωνος twice – `חוסן כְּסִיל` both times. 466 = 597 in F25.
- No other line of 414–617 repeats a drafted line; `verify` shows 0 repeated-line differences.

### Proposals for the shared renderings
- **Names (§3):** Ζέφυρος `זֶפִירוֹס` (594), Ληναιών `לֵנַיאוֹן` (504), Θρῄκη `תְּרַקְיָה` (507), Πανδίων `פַּנְדִּיּוֹן`
  (568), Πανέλληνες `כָּל־הַהֶלֶנִים` (528); the treebank's two spellings Ὠρίων / Ὠαρίων both map to `כְּסִיל`.
- **For §5 or §11 (kind-(a) LXX bridges):** σκάφος / σκάπτω `עָדַר` (572; Isa 5:6), περιτέμνω (vines) `זָמַר` (570; Lev
  25:3), λέσχη `שִׂיחָה` (493; Prov 23:29), ἄοκνος `לֹא־עָצֵל` (495; Prov 6:11a), χελιδών `סִיס` (568; Isa 38:14), ὑετός
  `מָטָר` (Job 37:6), ἄτεκνος `עֲרִירִי` (602; Gen 15:2), ἀναψύχω `הֵשִׁיב נֶפֶשׁ` (608; Exod 23:12), χόρτος `מִסְפּוֹא`
  (606; Gen 24:25), στάχυς `שִׁבֹּלֶת` (473; Gen 41:5), στήμων / κρόκη `שְׁתִי` / `עֵרֶב` (538; Lev 13:48), χιτών `כֻּתֹּנֶת`,
  δέρμα `עוֹר` (536; Gen 3:21), πρόβατον `צֹאן` (558; Gen 4:2), οἶνος `יַיִן` (585; Gen 9:21), ἄμαξα `עֲגָלָה` (426; Gen
  45:19).
- **Time clauses:** ἦμος / τῆμος / εὖτε `בְּשָׁעָה שֶׁ־` / `בְּאוֹתָהּ שָׁעָה` – for the rest of the Days.
- **Grammar (§4):** an infinitive governed by κέλομαι / ἄνωγα / κελεύω stays a plain infinitive (602–603); a gated
  infinitive absolute may yield to the imperative with a note (574 `וּבְרַח`).
- **ψυχή `נֶפֶשׁ`** for 686 (χρήματα γὰρ ψυχὴ πέλεται), so that ἀναψύχω (608) and ψυχή share the root, as in the LXX.
- **ἔλυμα `סַדָּן`**: keep or move – it collides with ἄκμων `סַדָּן` (TH 722, 724); a coordinator's decision.

### For the next part (WD 618–828: sailing, marriage, the precepts, the Days)
- Fixed and waiting: Πληιάδες `כִּימָה` (619), Ὠρίων `כְּסִיל` ★ (619); F25 at 805 (check the Greek); the
  infinitive absolute for the precepts; ψυχή `נֶפֶשׁ` (686); 700 ≈ 343 (`מי שגר קרוב אליך`); ὦ Πέρση `הוֹ פֶּרְסֵס`;
  Βορέας `בּוֹרֵאָס` (already vocalized at 506), Ζέφυρος `זֶפִירוֹס` (594); οἶνος `יַיִן`; ὥριος `בְּעוֹנָתוֹ`, ὡραῖος
  `שֶׁבְּעוֹנָתוֹ`; the time clauses above.
- Gate homographs met in this part: `רוח` (infinitive absolute of ברח), `ערם` (`שערם`, `ועירם`), `שבת` (`בשבתך` → the
  participle `יושב`), `אל` / `אלה` beside a Greek "θε" (vocalize), `חורש` (ἀροτήρ vs. thicket: vocalize `חֹרֶשׁ`), `כלה`,
  `מזבח`, `חשך`.

### Lessons for the guidelines
- **Never quote a verse from memory, even a half-line**: two "verses" in this part (at 491 and 595) did not exist; the
  rule "print every verse before quoting it" caught them only because it was applied to every quotation, including those
  written in a note's flow.
- **A Greek word containing "θε" makes an unvocalized `אל` beside it a gate error** (477 εὐοχθέων): the gate reads the
  letters, not the word – vocalize `אֶל` whenever the line's Greek has "θε" anywhere.
- **The reverse lexmap finds Hebrew homographs, not only collisions** (591 `חורש` beside 405 `חורש`): run it over every
  part, filtering out function words.
- **The LXX of Hesiod's own vocabulary is a lexicon of Hebrew agriculture**: σκάπτω / τέμνω = עדר / זמר, χόρτος = מספוא,
  λέσχη = שיח – grepping the LXX for the Greek word often gives the right Hebrew word, not only a parallel.
- **The Farmer's Instructions and the Days share a genre** (a father's or a brother's instruction, in order through the
  year): citing it line by line is safe only as "a shared motif"; its Hebrew lines are quoted as they stand in its
  annotated file, with its own line number.

## WD 618–828

### Scope
WD 618–828 (translator 2, part 5, 2026-10-24): the sea – when not to sail, hauling the ship up, the poet's father who
came from Kyme to Ascra (618–645); the "measures of the sea", the poet's one crossing to Chalkis and the tripod for the
Muses (646–662); summer sailing fifty days after the solstice, the snatched spring sailing, "keep measure" (663–694);
marriage – the age, the virgin from nearby, the good and the bad wife (695–705); conduct toward the gods, the friend
and the brother, the tongue, the shared feast (706–723); the purity taboos – hands, sun and night, the hearth, the
funeral, the rivers (724–741); household beliefs – nails, the jug, the unfinished house, the crow, the pots, the
child, the bath, Rumour (742–764); the Days of the month (765–828) and the blessing on the man who knows them
(826–828). 211 entries in ten `## ` sections, in the base's order (… 767, 769, 768, 770 …; the labels kept).
**The placeholder is removed**: the annotated file now has all 831 entries of the base.

### Sources consulted
- The base and the AGDT treebank through `hesiod_tools.py data WD 618 828`; every parse carrying a tense, a mood, a gate
  or a parallel checked by hand. Treebank slips noted in the פירוק: 733 γονῇ lemmatized γονεύς "parent" (it is γονή
  "seed"); 726 ἀράς (ἀρά "prayer") merges in `lexmap` with the particle ἄρα; 705 ὠμός "raw" with ὦμος "shoulder"; 617
  πλειών (part 4) with πλείων.
- The Septuagint through `../tools/lxx_verses.py` – every Greek verse quoted was printed first: Gen 2:3, 3:23; Exod
  24:6, 30:19–20; Lev 12:2, 15:16, 15:18, 19:18, 19:26, 21:13–14, 22:24; Deut 11:14, 18:10, 18:13, 20:5,
  21:6, 21:12, 23:13–15, 26:5, 29:28; Judg 3:24, 9:13; Amos 2:13; Jonah 1:4–5, 2:4; Ezek 8:16, 27:25–26; Job 1:1; Prov
  6:6, 10:19, 12:4, 13:8, 13:20, 17:5, 18:22, 22:1, and 29:19 (= MT 31:19 in the LXX order). Psalms 107, 90, 81, Ruth,
  Qohelet, Esther, Jeremiah, Numbers, 1 Samuel and the Song of Songs are not in the tool: Hebrew only. Prov 30:19,
  31:10 and 18:24 did not print in the LXX tool (the LXX order of Prov 24–31 differs): Hebrew only.
- The Hebrew Bible through `check_bible_quotes.py --show` for every verse quoted (0 problems at the end).
- The corpus itself: TH 22–34 (the proem: the Muses on Helicon) quoted at 639, 658, 662; TH 231–232 (Eris bears Oath)
  at 804; the creation corpus has no hemerology translated – the Babylonian hemerologies are described in words (825).
- Rank 3, in a few words: West 1978 for the cruxes (602 in part 4; 768, 756, 826 here), Evelyn-White's division of the
  month. Ancient testimonia named from memory only where well known: Virgil G. 2.412 (643), Plutarch on Amphidamas and
  the Lelantine war (654), Pausanias 9.31.3 on the tripod on Helicon (658) and 1.17.1 on the altar of Pheme (764), the
  scholion on Apollonius of Rhodes rejecting the Ornithomanteia (828). The Hebrew translations were not consulted.

### Decisions
- **Fixed renderings applied:** Πληιάδες `כִּימָה` (619), Ὠρίων `כְּסִיל` ★ (619, vocalized); Ἄσκρη `אַסְקְרָה` (640,
  vocalized); the Muses `הַמּוּזוֹת` and Ἑλικωνιάδες `הַהֶלִיקוֹנִיּוֹת` (658, vocalized), Helicon `הַהֶלִיקוֹן` (639,
  vocalized), with TH 22–34 linked; Ποσειδῶν `פּוֹסֵידוֹן` (667), Νότος `נוֹטוֹס` (675), Ἀπόλλων `אַפּוֹלוֹן` and Λητώ
  `לֵטוֹ` (771), Ἐρινύες `הָאֶרִינִיּוֹת` (803) – first occurrences in the poem, vocalized; Ἔρις `מָדוֹן`, Ὅρκος `שְׁבוּעָה`
  (804, masculine as in TH 232); γυνή `אִשָּׁה`, γαμέω `נָשָׂא אִשָּׁה` (699–701; middle `נִשְּׂאָה`, 698), γάμος
  `נִשּׂוּאִים`, παρθενική / παρθένος `בְּתוּלָה`, ἄκοιτις `רַעְיָה` (800); **700 ≈ 343** (`ובייחוד נָשׂוֹא את מי שגרה קרוב
  אליך,`); ἱερός `קָדוֹשׁ` (653, 770, 805, 819); **770 = the self-test line** (`רִאשׁוֹן – רֹאשׁ הַחֹדֶשׁ, הָרְבִיעִי
  וְהַשְּׁבִיעִי – יוֹם קָדוֹשׁ:`, checked against the Greek: ἔνη = the old-and-new day, the new moon; the colon follows the
  base's raised dot before 771's γάρ); ἑβδόμη / ἑβδόματος `שְׁבִיעִי` (770, 805; never the root שבת); **F25** at 805 (Δημήτερος
  ἱερὸν ἀκτήν, as 466, 597); ἦμαρ / ἡμέρη `יוֹם`, μείς `חֹדֶשׁ`; εὐδαίμων τε καὶ ὄλβιος `בַּר־מַזָּל` / `שְׂבַע־טוֹבָה` (826,
  kept as §5: in a calendar of days, "מזל" – the old star-luck – fits εὐδαίμων "of good daimon"); ψυχή `נֶפֶשׁ` (686);
  φυλάσσω `שָׁמַר` (694, 706, 765, 797); ἐργάζομαι `עָבַד` (623, 827); F5 (661), F18 (718).
- **The month** (765–828): ἱστάμενος `הָעוֹלֶה`, φθίνων `הַיּוֹרֵד`, μέσος `אֶמְצָעִי`; the ordinals as Hebrew ordinals
  (τετράς `רְבִיעִי`, εἰνάς / ἔνατος `תְּשִׁיעִי`, εἰκάς `הָעֶשְׂרִים`, τριακάς `הַשְּׁלוֹשִׁים`, τρισεινάς `הַתְּשִׁיעִי
  הַמְשֻׁלָּשׁ`); the order 767, 769, 768 kept.
- **Names (§2.3), first occurrence vocalized:** Κύμη `קִימָה` (636 – note: not `כִּימָה`, the Pleiades), Αἰολίς `אַיּוֹלִית`,
  Εὔβοια `אֶאוּבוֹיָה`, Αὐλίς `אַאוּלִיס` (651), Ἀχαιοί `הָאַכָאִים` (651, the familiar Hebrew form), Ἑλλάς `הֶלָס` (653),
  Ἀμφιδάμας `אַמְפִידָמָס` (654), Χαλκίς `כַלְקִיס` (655).
- **Grammar:** the infinitive for the imperative → the vocalized infinitive absolute throughout (`אָחֹז`, `עָבוֹד`,
  `מָשׁוֹךְ`, `תָּלֹה`, `חַכֵּה`, `גָּרֹר`, `לָקֹחַ`, `נָשׂוֹא`, `עָשׂוֹ`, `שַׁקֵּר`, `פָּרֹעַ`, `קַבֵּל`, `הִקָּרֵא`, `נַסֵּךְ`,
  `הַשְׁתֵּן`, `גַּלֵּה`, `הַזְרֵעַ`, `עָבוֹר`, `כָּרוֹת`, `שׂוֹם`, `הַשְׁאֵר`, `הוֹשֵׁב`, `לַגְלֵג`, `הָסֵךְ`, `פָּעוֹל`,
  `הוֹדֵעַ`, `אַלֵּף`, `הַשְׁלֵךְ`, `הַתְחֵל`); with μή / μηδέ → `אַל` + infinitive absolute (622, 674, 689, 707, 709, 715,
  724–759); `הָיֹה` + participle for εἶναι + perfect participle (641, 706, 722). Plain infinitives where the infinitive
  depends on a verb (688 after ἄνωγα, 798 after πεφύλαξο, 767 and 815 of purpose, 753 with its own subject ἀνέρα, 749
  after a whole line). Real imperatives stay imperatives (627 `שִׂים`, 760 `חֲמֹק`, 797 `הִשָּׁמֵר`, 819 `פְּתַח`). The
  iterative 634 → `הָיָה מַפְלִיג`; the gnomic aorist → participle (676, 677, 705, 741); the potential optative → `הָיָה`
  + participle (666, 684); the optative of instruction → jussive (698, 779).
- **One exception to the infinitive absolute: 793 `תוֹלִיד`** (future as command) – `הוֹלֵד` is not among the REQUIRED
  forms for γείνομαι in the tool, so the check fails on it (for the coordinator: add `הולד` to the list, or keep).
- **New words resting on LXX identities:** κρατήρ `אַגָּן` (744; Exod 24:6), ἄτεκνος (part 4); νίζω `רָחַץ` (739; Exod
  30:19 νίψεται) and λούω `רָחַץ` (749; Lev 15:16 λούσεται) – a pair, as in Hebrew; σπερμαίνω `הִזְרִיעַ` (736; Lev 12:2
  σπερματισθῇ); τέμνω "castrate" `כָּרַת` (786, 791; Lev 22:24 ἐκτομίας = `כָּרוּת`); ψυχή `נֶפֶשׁ` (686; Prov 13:8);
  κῦμα `גַּל` (Jonah 2:4); φειδωλός `חַסְכָנִי` (720; Prov 10:19 φειδόμενος χειλέων = `חוֹשֵׂךְ שְׂפָתָיו`).
- **Other new words (first line):** ναυτιλία `יַמָּאוּת` / πλόος `הַפְלָגָה` (618, 630); ἀήτης / ἀήτη `מַשָּׁב`, αὔρα `נֶשֶׁב`
  (621, 645, 670); φόρτος / φορτίον `מִטְעָן`, φορτίζω `טָעַן`; οἶνοψ `כֵּהֶה־כַּיַּיִן`; χείμαρος `פְּקָק`; πτερά (sails)
  `כַּנְפֵי`; ἐμπορία `מִסְחָר`; σοφίζω `מְחֻכָּם`; ὕμνος `רִנָּה` (657, 662, as ὑμνέω `רִנֵּן`, TH 33); τρίπους (the vessel)
  `חֲצוּבָה` (657; split from 533 `בַּעַל שָׁלֹשׁ הָרַגְלַיִם`); ἀνατίθημι `הֶעֱלָה מִנְחָה` (658; not `הִקְדִּישׁ` – קדש is
  ἱερός's); καιρός `הָעֵת הַנְּכוֹנָה` (694); δειπνολόχος `אוֹרֶבֶת לַסְּעוּדוֹת`, δαλός `אוּד`, ὠμὸν γῆρας `זִקְנַת בֹּסֶר`
  (704–705); φίλος (noun) `אוֹהֵב` (713; adjective `אָהוּב`); τίνυμαι `פָּרַע`; ὀνειδίζω `חֵרֵף` (718, vocalized `לְחָרֵף`
  with `[היתר שער]`: the `חרף` gate is χειμών's); θησαυρός `אוֹצָר`; ἑστία (the hearth) `הָאָח` (vocalized); αἰδοῖα
  `מְבוּשִׁים`; γονή `שִׁכְבַת זֶרַע` (733, `[היתר שער]`: the `זרע` gate is σπέρμα's, and this is its sense); ἐναποψύχω
  `הֵסֵךְ אֶת רַגְלָיו` (759; the biblical euphemism of 1 Sam 24:3, Judg 3:24 for the Greek euphemism); φήμη `שְׁמוּעָה`
  (760–764; a translated name if Φήμη recurs); κορώνη `עוֹרְבָנִית`; ἴδρις (the ant) `הַיּוֹדַעַת`; σωρός `כְּרִי` (not
  `ערמה`: the `ערם` gate); μητρυιά `אֵם חוֹרֶגֶת`; ὄνειαρ `תּוֹעֶלֶת`; ὑπερβασία `עֲבֵרָה` (828; ὑπερ־βαίνω = עבר, a calque in
  both languages); ἀναίτιος `נָקִי`.
- **Riddle-names kept as riddles:** πέντοζος "the five-branched" (742, the hand), ἴδρις "the knowing one" (778, the ant),
  ὑλοτόμος (807) plain.
- **Splits recorded:** ὅπλον `צִיּוּד` (ship's gear, 627) / `כְּלִי־נֶשֶׁק` (TH 853); θοός `מָהִיר` (ship) / `חוֹלֵף` (night,
  TH 481); ὀλίγος `קָטָן` (size, 643) / `מְעַט`; ἀνύω `הִשְׁלִים` (635) / `הִשִּׂיג`; ἀποφθίνω `הִשְׁמִיד` (666, as φθισήνωρ) /
  `דָּעַךְ` (TH 606); ὀρίνω `הִסְעִיר` (the sea, 676) / `הִרְגִּיז`; μένω `חִכָּה` (674) / `נִשְׁאַר`; ἐπιβαίνω `דָּרַךְ` (679) /
  `עָלָה`; ὑπέρβιος `עָצוּם מִדַּי` (a load, 692) / `פְּרָאִי` (TH); ἐπιτίθημι `הוֹסִיף` (697) / `שָׂם עַל`; ἄγω `לָקַח`
  (695, 800) / `נָהַג בְּ־` (768); δόμος `בַּיִת` (746) / `מָעוֹן` (the gods'); τρίπους (above); χρυσάωρ (epithet,
  `בַּעַל־חֶרֶב־הַזָּהָב`) / Χρυσάωρ `כְרִיסָאוֹר` (TH 281); ἄφενος `מָמוֹן` at 637 only (beside πλοῦτος `עֹשֶׁר`; `רְוָחָה` is
  εὐοχθέω, 477); ῥεῖα `בְּנָקֵל` (762, stylistic, beside κοῦφος `קַל` in 761); ἀραιός `דַּק` (809).
- **Pairs recorded:** ὀμιχέω / οὐρέω `הִשְׁתִּין`; ἀήτης / ἀήτη `מַשָּׁב`; φόρτος / φορτίον `מִטְעָן`; ἐνοσίχθων / ἐννοσίγαιος
  `מַרְעִישׁ־הָאֲדָמָה`; νίζω / λούω `רָחַץ`; λείπω / καταλείπω `הִשְׁאִיר`; ἔνατος / εἰνάς `תְּשִׁיעִי`; δείελος / ἕσπερος
  `עֶרֶב`; ἡμέρα / ἦμαρ `יוֹם`; ὄρνις / οἰωνός `עוֹף`; ἡμίονος / ὀρεύς `פֶּרֶד`; βούλομαι / ἐθέλω `רָצָה`; πρόβατον / μῆλον
  `צֹאן` (ὄις `כֶּבֶשׂ`, 775); ξύλον / δένδρεον `עֵץ`; μίμνω / μένω `חִכָּה`.

### Open decisions for the user
- **637 ἄφενος `מָמוֹן`** – a one-line split, because ἄφενος and πλοῦτος (which share `עֹשֶׁר` elsewhere) stand in the same
  line; the alternative is `עֹשֶׁר … עֹשֶׁר` (the Greek's redundancy kept).
- **651 the "voyage"** – the note calls Aulis–Chalkis (about 65 metres of sea) the poet's joke at his own expense: a
  reading (West), not the text.
- **714 κατελεγχέτω εἶδος** (crux): `אל יכזיב מראך את שכלך` – "let your face not belie your mind"; the other reading
  ("let not his looks put your mind to shame") is in the note.
- **756 ἀίδηλα** – `נִסְתָּרוֹת` ("unseen things") chosen over "destructive things"; both in the note.
- **768** (a hard line): `בשעה שהעם, בהבחינם, נוהגים בהם לפי האמת` – the days are "kept" when the people reckon the
  month truly.
- **793 `תוֹלִיד`** instead of the infinitive absolute `הוֹלֵד` (the tool's REQUIRED list; see Decisions).
- **826 `בַּר־מַזָּל`** kept as §5, with the reason above; the alternative `מְאֻשָּׁר` collides with μάκαρ.

### Progress log
- 2026-10-24: drafted 618–828 in ten sections (seven scratch files), each inserted before the placeholder by script,
  then `fill`, `verify WD` and `check_bible_quotes.py` (0 problems after each); the placeholder removed after 828.
  Verify catches fixed on the way: 629 `המעובד` (the `עבד` gate: εὐεργής, now `העשוי`); first occurrences vocalized –
  639 `הַהֶלִיקוֹן`, 658 `הַמּוּזוֹת הַהֶלִיקוֹנִיּוֹת`; 718 `לחרף` (the `חרף` gate: vocalized `לְחָרֵף` + `[היתר שער]`);
  733 `זרע` (`[היתר שער]`); 741, 742, 756 `אֵל` / `הָאֵלִים` / `אֵלֶּה` vocalized; 793, 804 the REQUIRED forms of γείνομαι
  (`תוֹלִיד`, `הנולד`). Quote-checker catches fixed: 655 Judg 11:40 (a quotation from memory, wrong – replaced by the
  printed verse); several backticked words beside a reference that were not quotations (678, 694, 719, 733, 736, 812).
- `lexmap` pass on both sides over 618–828: the splits and pairs above; fixed after it – 637 `רְוָחָה` → `מָמוֹן`
  (εὐοχθέω's word), 792 φώς `אִישׁ` → `גֶּבֶר` (as 193), 809 ἀραιός `קַל` → `דַּק` (κοῦφος's word).
- Fidelity read-through of all 211 Hebrew lines against the Greek (negations, tenses, moods, clause boundaries).
- End: `verify WD --strict` – **0 problems**, 0 repeated-line differences, 831 entries (base 831); `check_bible_quotes.py`
  on the annotated file and project.md: 0 problems; `selftest` 0 failures (29 lines). Not done (as briefed): intro,
  `build`, the review passes, `build_parallels_index.py`.

### The text on its own terms
- **The poet's own life** – the only autobiography in early Greek poetry: a father who sailed from Aeolian Kyme "fleeing
  not wealth but poverty" (633–638), settled in "Ascra, bad in winter, hard in summer, good never" (640); the poet's one
  crossing, from Aulis to Chalkis, and his victory with a song at the funeral games of Amphidamas – the tripod dedicated
  to the Muses on Helicon "where they first set me on the road of song" (650–659). The authority is not experience but
  inspiration (660–662).
- **The dangers of the sea** – sailing is a second, risky way to wealth: fifty days after the solstice, and only with
  part of one's livelihood; "wealth is life (ψυχή) to wretched mortals" (686) – and to die among the waves is terrible
  (687). Poseidon and Zeus hold "the end of good and evil" (669).
- **The household and the wife** – marriage at the right "season" of a man's life (≈ 30) and a girl's (≈ 18–19), a
  virgin from nearby, examined so as not to be "a joy to the neighbours"; the good wife the best prize, the bad one
  "roasts her man without a firebrand" (702–705). The wife returns at the loom (779).
- **The purity rules** – an archaic religious world without a temple law: every man, at home, keeps the boundaries of
  pure and impure – hands washed before libation, never urinating facing the sun or uncovered, "for the nights belong
  to the blessed ones" (730), no exposure by the hearth after intercourse, no begetting after a funeral, rivers and
  springs as gods. Many are taboos of the house (the jug on the bowl, the unfinished house, the crow, the unsacrificed
  pot).
- **The lunar calendar of lucky days** – the month in three decades, each day good or bad for an act (shearing,
  reaping, begetting boys or girls, castrating, taming, opening the jar, building ships); the days "from Zeus", known to
  few; "one day is a stepmother, another a mother" (825). The poem ends with the man who knows them, works, is blameless
  before the gods, "discerning the birds" – the passage to the lost Ornithomanteia.

### Key parallels
- **WD 730 ↔ Deut 23:13–15 (LXX)**: the camp latrine and covering, "for the Lord walks in your camp … let him not see
  an indecent thing in you" (ἀσχημοσύνη πράγματος) – Hesiod: do not expose yourself, "for the nights belong to the
  blessed ones". The same reason (the god is present and sees), the same domain. The strongest single parallel of the
  part.
- **WD 724–725, 739–740 ↔ Exod 30:19–20 (LXX νίψονται), Deut 21:6 (LXX νίψονται τὰς χεῖρας)**: washing the hands before
  approaching the gods – for the priests at the altar on pain of death in the Torah, for every man at his libation in
  Hesiod; hands washed in a stream as a declaration of innocence (Deut 21:6) ↔ "unwashed of his wickedness and his hands"
  (740).
- **WD 733 ↔ Lev 15:16–18 (LXX κοίτη σπέρματος), Exod 19:15**; **WD 735–736 ↔ Num 19:11, Lev 12:2 (LXX σπερματισθῇ)**:
  seed and the corpse as impurity that keeps one from the holy.
- **WD 770 ↔ Gen 2:3 (LXX ἡγίασεν)**: "the seventh, a holy day" – a monthly seventh (Apollo's birthday), not a week and
  not a rest day; and the LXX never calls the seventh ἱερόν: it "sanctifies" it (ἁγιάζω). Kind (c).
- **WD 801, 828 ↔ Lev 19:26, Deut 18:10 (LXX οἰωνίζομαι, ὀρνιθοσκοπέω)**: the bird-omens that close the poem as wisdom
  are, in the Greek Torah and in Hesiod's own words, forbidden; Deut 18:13 (LXX τέλειος) ↔ 826–827 the blameless man.
  Kind (c).
- **WD 827–828 ↔ Job 1:1 (LXX ἄμεμπτος … ἀπεχόμενος ἀπὸ παντὸς πονηροῦ)**: the portrait of the blessed man.
- **WD 718 ↔ Prov 17:5 (LXX ὁ καταγελῶν πτωχοῦ παροξύνει τὸν ποιήσαντα)**: to mock the poor is to reproach his maker –
  in Hesiod, poverty is "the gift of the gods".
- **WD 720 ↔ Prov 10:19 (LXX φειδόμενος χειλέων)**: the sparing tongue – Hesiod's φειδωλή in the LXX's verb.
- **WD 686 ↔ Prov 13:8 (LXX λύτρον ἀνδρὸς ψυχῆς ὁ ἴδιος πλοῦτος)**: wealth and ψυχή in one verse, inverted.
- **WD 704–705 ↔ Prov 12:4 (LXX ἄνδρα ἀπόλλυσιν γυνὴ κακοποιός)**: the bad wife destroys her man slowly, "like a worm in
  wood" / "roasting without a firebrand"; **702 ↔ Prov 18:22 (LXX γυναῖκα ἀγαθήν)**, 31:10, 703 ↔ Qoh 7:26; 779 ↔ Prov
  31:19 (LXX 29:19).
- **WD 711 ↔ Lev 19:18 (LXX οὐκ ἐκδικᾶται)**: "repay him double" against "you shall not take vengeance". Kind (c).
- **WD 744 ↔ Exod 24:6 (LXX κρατῆρας = `אַגָּנֹת`)**; **746 ↔ Deut 20:5 (LXX ἐνεκαίνισεν)**, the house not finished /
  not dedicated; **743 ↔ Deut 21:12 (LXX περιονυχιεῖς)**, the nails; **786 ↔ Lev 22:24 (LXX ἐκτομίας)**; **759 ↔ 1 Sam 24:3,
  Judg 3:24 (LXX)**, the euphemism; **727 ↔ Ezek 8:16 (LXX προσκυνοῦσιν τῷ ἡλίῳ)**, the sun – revered in Hesiod,
  worshipped as an abomination in Ezekiel; **756 ↔ Deut 29:28 (LXX τὰ κρυπτά)**.
- **The sea:** 634, 649 ↔ Ps 107:23–27 ("their wisdom swallowed"); 668–669, 689 ↔ Jonah 1:4–5, 14 (LXX); 687 ↔ Jonah 2:4
  (LXX κύματα); 644–645 ↔ Ezek 27:25–26 (LXX, the laden ship broken by the wind); 648 ↔ Prov 30:19 ("the way of a ship
  in the heart of the sea"); 692 ↔ Amos 2:13 (LXX ἅμαξα, the overloaded cart).
- **The emigrant father, 636–638 ↔ Deut 26:5 (LXX "Συρίαν ἀπέβαλεν ὁ πατήρ μου … καὶ παρῴκησεν"), Ruth 1:1**: the father
  who left his land because of hunger or poverty and settled as a stranger.
- **The days:** 825 ↔ Job 3:8 ("those who curse the day"), Esther 3:7 (the lot cast "from day to day and month to month");
  781, 793, 812 ↔ Qoh 3:2; 770 ↔ the new moon (Ps 81:4, Num 28:11, 1 Sam 20:5); 694 ↔ Qoh 3:1; the Babylonian hemerologies
  (in words; none translated in this folder): a shared motif of the lucky and unlucky days of the month.
- **The proem, 639, 658–662 ↔ TH 22–34**: the same Muses, the same verb ἐδίδαξαν (662 = TH 22), Helicon; and 804 ↔ TH
  231–232 (Eris bears Oath, the bane of perjurers) – internal links of the corpus.
- **Ancient-mind themes**: the poet's life as authority-by-inspiration; the sea as gamble; the bride as "booty"; purity
  as presence of the gods at night, in the sun, the hearth and the rivers; Rumour as a goddess; the month as a map of
  fate (the day "stepmother or mother").

### Lines shared with other texts
- **700 ≈ 343** (`ובייחוד … את מי שגר/שגרה קרוב אליך`): only καλεῖν → γαμεῖν changes (`קָרוֹא` → `נָשׂוֹא`).
- **789 ≈ 78** (`שקרים ואמרים חלקלקים`), **629 ≈ 45** (`את משוט־ההגה … מעל העשן`), **806 ≈ 599** (`בגורן מעוגלת היטב`),
  **796 ≈ 604** (`כלב משונן־שיניים`), **800 ≈ 695** (`לָקֹחַ … אל הבית`), **691 ≈ 687** (`ואיום הוא … בין הגלים`), **805 = 466 =
  597 in F25**, **615 ≈ 619** (σθένος Ὠαρίωνος `חוסן כְּסִיל`).
- No line of 618–828 repeats another drafted line exactly; `verify --strict` shows 0 repeated-line differences.

### Proposals for the shared renderings
- **Names (§3):** Κύμη `קִימָה` (636, with a warning against `כִּימָה`), Αἰολίς `אַיּוֹלִית`, Εὔβοια `אֶאוּבוֹיָה`, Αὐλίς
  `אַאוּלִיס`, Ἀχαιοί `הָאַכָאִים`, Ἑλλάς `הֶלָס`, Ἀμφιδάμας `אַמְפִידָמָס`, Χαλκίς `כַלְקִיס`; Φήμη `שְׁמוּעָה` (if it is
  personified again).
- **The tool:** add `הולד` (the infinitive absolute) to the REQUIRED forms of γείνομαι (and check the other REQUIRED
  lists for the infinitive absolute: `ילוד`, `ללדת` are there for τίκτω, but not `יָלֹד`).
- **For §5 / §11 (kind-(a) LXX bridges):** κρατήρ `אַגָּן` (Exod 24:6), νίζω `רָחַץ` (Exod 30:19), σπερμαίνω `הִזְרִיעַ` (Lev
  12:2), κῦμα `גַּל` (Jonah 2:4), φειδωλός `חַסְכָנִי` (Prov 10:19), τέμνω "castrate" `כָּרַת` (Lev 22:24); the kind-(c)
  identities οἰωνός / ὄρνις ↔ οἰωνίζομαι / ὀρνιθοσκοπέω (Lev 19:26) and ἑβδόμη ἱερόν ↔ ἡγίασεν (Gen 2:3), for the notes.
- **The month (§5):** ἱστάμενος `הָעוֹלֶה`, φθίνων `הַיּוֹרֵד`, μέσος `אֶמְצָעִי`; ἔνη `רֹאשׁ הַחֹדֶשׁ` (with the self-test).
- **The gate escapes used** (for the coordinator to confirm): 718 `לְחָרֵף` (ὀνειδίζω, against the `חרף` gate), 733
  `שכבת זרע` (γονή, against the `זרע` gate).

### For the next part
- The Works and Days is fully drafted (831 / 831). Left for the coordinator: the intro, `build`, the review passes
  (consistency, Hebrew), `build_parallels_index.py`, and the open points above (637, 714, 756, 768, 793, 826).

### Lessons for the guidelines
- **A REQUIRED list must include the infinitive absolute** once the infinitive-for-imperative rule is in force: 793
  `הוֹלֵד` failed the γείνομαι check, and the translator had to change the form.
- **The quote-checker also catches quotations from memory that are close but wrong** (655: a Judges 11:40 "quotation"
  that was not the verse): print first, every time – the checker is the safety net, not the method.
- **A backticked word followed by a parenthesized reference is read as a quotation** – including a Greek word's Hebrew
  equivalent and a book named without a chapter (a Qoh 3:2 phrase in backticks, followed by "ch. 3 v. 2" in Hebrew letters without the book, was read as Gen 3:2): write such references in plain
  words.
- **Homographs of names across languages** (Κύμη `קִימָה` / Πληιάδες `כִּימָה`) are not caught by any gate: vocalize both,
  and say so in the note.
- **The LXX of the Torah's purity laws speaks Hesiod's vocabulary** (νίπτω, λούω, σπέρμα, οἰωνίζομαι): for the ritual
  passages, grep the LXX for the Greek word before looking for the Hebrew theme.

## Review pass (a): fidelity (WD)

**Date:** 2026-10-24. **Reviewer:** fidelity reviewer (pass a), one sub-session, the whole poem (831 entries: 1–828 +
169a–d; 310 is not in the base).

### What was checked
- **Every line against its Greek**, in sections of ~100 lines (label | Greek | `>` line | every verb with its treebank
  parse | the פירוק), the doubtful forms against the lexicon: every content word accounted for; nothing added outside
  `( )`; person, number and case relations; the clause boundaries across lines (enjambment) and the order of images;
  the פירוק's `("…")` against the `>` line. The base's marks are in place: `{חשודה}` at 76, 79, 93, 99, 124–125
  (254–255 without it, as the base); `{פפירוס}` at 169a–d with the base's restorations in `[ ]`.
- **Scripted cross-checks:** every negation (Greek οὐ/μή/οὐδέ/μηδέ/οὔτε/μήτε/οὐκέτι/μηκέτι/νόσφι/ἄτερ … ↔ Hebrew, both
  ways): no negation lost, none reversed; every Hebrew negation without a Greek negative is an alpha-privative
  (`בלתי־`, `שאין`, `חסר־`, `נטולי־`), or a negation carried over from the line before (214–215), or 584 `בלי הרף`
  (πυκνόν); every imperfect and every -σκ- iterative (90, 133, 151, 634: all `היה/היו` + participle); every optative
  (potential → `היה` + participle or future by sense; wish → jussive / `מי יתן` / `אַל`; in conditions → future);
  the gnomic aorists and imperfects (all participles, each marked in the פירוק); the infinitive-for-imperative
  (vocalized infinitive absolute throughout; dependent infinitives plain); the perfects (present state); the grammar
  claims of the notes (163 statements: all consistent with the Greek).
- After each batch `hesiod_tools.py verify WD --strict`: 0 problems, 0 repeated-line differences.
  `check_bible_quotes.py` on the annotated file and this file: 0 problems (no quotation was added or changed).

### Result: 11 lines changed (each with its פירוק, and the notes where they quoted the old Hebrew)
The translation is faithful: no omitted content word, no reversed negation, no lost line or clause. The changes:

| Line | Before → after | Reason |
|---|---|---|
| 92 | `אשר נתנו לאנשים את הקרות` → `אשר נותנות …` | ἔδωκαν in a general relative with epic τε (αἵ τʼ): a gnomic aorist (diseases bring death), not a past event; renderings §4 → participle. The two notes that quoted `נתנו` updated |
| 116 | `ומתו כנכנעים לשֵׁנָה` → `והיו מתים …` | θνῇσκον: imperfect of habit (each of the golden race died so), in the series 112 `היו חיים`, 115 `היו מתענגים`, 117 `היה נושא`; §4 → `היה` + participle |
| 119 | `נהנו ממלאכותיהם` → `היו נהנים …` | ἐνέμοντο: imperfect of habit in the same series (as TH 910) |
| 126 | `המשאת המלכותית שהייתה להם` → `… שקיבלו` | ἔσχον is an aorist ("got, received"), not a state; the פירוק itself glossed "קיבלו" |
| 224 | `אל אלה שגירשו אותה` → `… שיגרשו אותה` | ἐξελάσωσι: aorist subjunctive in a general relative clause → future (§4; as 221 `יכריעו`), not a past |
| 230 | `ואף פעם לא ילווה רעב` → `… לא מלווה רעב` | ὀπηδεῖ is a present (a general truth, beside 229 `מייעד`, 231 `נהנים`): §4 → participle |
| 453 | `"שני שוורים תן לי ועגלה"` → `"… תן (לי) …"` | an addition outside `( )`: δὸς has no pronoun |
| 517 | `לא ינשוב בעדם` → `אינו נושב בעדם` | οὐ διάησιν is a present, as 514 and 519 (`נושב`, `אינו נושב`); the future made it a prediction |
| 542 | `קָשֹׁר לך, ובלבד ריפדת אותם מבפנים` → `קָשֹׁר לך, משריפדת אותם בלבד מבפנים` | a participle made a main verb (πυκάσσας, aorist participle: "having lined them"); the draft had a finite 2nd-person past beside the infinitive-command |
| 580 | `מעלה רבים מבני האדם על הנתיב,` → `מעלה רבים על הנתיב,` | an added word that also broke the enjambment: ἀνθρώπους stands at the head of 581, which already has `בני האדם` – the draft said "men" twice |
| 728 | `אך גם אחרי שתשקע` → `אך (גם) …` | `גם` has no Greek word (αὐτάρ "but"): an interpretation, now marked as added |

### Recurring patterns
- **The tense of a single verb in a run of general statements** (6 of 11): a general relative turned past (92, 224), a
  present turned future (230, 517), an imperfect of habit turned simple past where its neighbours have `היה` (116,
  119). The translators applied §4 correctly almost everywhere; the slips are single forms inside long maxims or
  descriptions – exactly the kind the Theogony's pass (a) found (TH 835, 910).
- **A participle made a main verb** (542), as TH 1006.
- **Additions** (453, 580, 728): a pronoun of the spoken Greek, a word anticipated from the next line, an
  interpretive `גם` – all small, none of substance.
- A scripted report per grammatical class (imperfects without `היה`, presents rendered as yiqtol, general-relative
  subjunctives rendered as past) would find most of these in minutes (as the TH reviewer proposed).

### Choices left as they are (defensible; noted for the user)
- **Imperfects of state rendered as a simple past** where Hebrew past already carries duration: 97 ἔμιμνε `נשארה`, 111
  ἐμβασίλευεν `מלך` (as TH 71's present `מולך`), 134 ἐδύναντο `לא יכלו`, 136 ἤθελον `רצו` (beside 139 `לא היו נותנים`),
  206 μύρετο `קונן`. `היה` + participle would be possible in each (`היה מולך`, `היו רוצים`), but heavier; pass (c) may
  decide.
- **Perfects rendered as a resultative past**: 347 ἔμμορε `נחל` (twice), as TH 728 `צמחו`.
- 43 `יום אחד` (ἐπʼ ἤματι "in a day": the number is the sense), 182 `ולא יהיה` (the copula of 184's ἔσσεται, needed
  in Hebrew), 759 `הָסֵךְ (בהם) את רגליך` (the biblical idiom for one Greek verb, ἐναποψύχω), 268 `הוא משקיף`
  (ὀφθαλμός is masculine, the Hebrew `עין` feminine: the line passes to Zeus himself), 799 (the פירוק quotes the
  treebank's θυμβορεῖ for the base's θυμοβορῆ, as the tool prints it).
- A spelling for pass (c): 88 `תיהיה` (read `תהיה`).

### Open cruxes for the user (translated by the most defensible option; the notes give the alternatives; no `?` in the line)
- **148** ἄπλαστοι `בלתי־יצורים` ("unformed", as TH 151, with DGE); the lexica record ἄπλατος "unapproachable" as a
  variant or a sense of the word (LSJ II, Bailly, Pape) – the note could name it.
- **314** δαίμονι δʼ οἷος ἔησθα `ויהי מה שתהיה לפי הדיימון` – the note calls it hard; the Hebrew keeps it open.
- **562** ἰσοῦσθαι νύκτας τε καὶ ἤματα – "share out by night and day" or "keep to it until the equinox" (the note).
- **590** μᾶζα ἀμολγαίη `עוגת חלב` – meaning disputed (the note).
- **518** τροχαλός `*כפוף*` (already italic); **68 / 77** διάκτορος `המוביל` (an epithet of disputed meaning, as in TH).
- If the user wants §6.8 applied strictly, 314, 562 and 590 could take a `?` (and 148 the variant in its note).


## Review pass (b): consistency (WD)

**Date:** 2026-10-24. **Reviewer:** consistency reviewer (pass b), one sub-session, the whole poem (831 entries), with the
Theogony as the precedent. No Theogony line was changed (so no TH note, no TH build).

### What was checked
- **Lemma → Hebrew:** `hesiod_tools.py lexmap` over both poems, then a skeleton filter (prefixes ו ה ב ל כ מ ש, the
  common suffixes and the matres stripped; similar skeletons merged): 431 lemmas with a WD occurrence and more than one
  Hebrew group, each read against renderings §5, §11.1–§11.12 and the five translators' "Decisions" / "Splits" lists; a
  separate pass for the seam (lemmas whose Hebrew in 1–285 and in 286–828 never meet: 80, nearly all inflection).
- **Hebrew → lemma:** the tool's exact reverse list (397 strings) and a reverse map on prefix-stripped Hebrew (390 groups
  with a WD line), read for collisions, recorded pairs and homographs.
- **Formulas and repeated lines:** `verify WD --strict` (F1–F34; the §9 lines); by hand WD 124–125 = 254–255, 149 = TH 152,
  54 / 71 / 72 = TH 559 / 572 / 573, 50, 52, 53, 57, 70 ≈ TH 565, 567, 558, 570, 571, 700 ≈ 343, 500 ≈ 317 (all exact, the
  differences only where the Greek differs); the Pleiades and Orion lines (383, 384, 572, 598, 609, 615, 619: `כִּימָה` /
  `כְּסִיל` vocalized everywhere, the plural agreement of the Greek kept throughout, σθένος Ὠαρίωνος `חוסן כְּסִיל` ×3);
  every epithet of Zeus across the two poems (one slip: μητιόεις at 769); every infinitive-for-imperative grouped by
  lemma (the same Greek verb has the same infinitive absolute everywhere; the apparent differences are real imperatives
  or dependent infinitives); every gnomic form marked in the פירוק (all participles).
- **Names:** every capitalized word's Hebrew grouped by lemma (one form each); the ★ names and the §7.3 traps (verify, and
  a grep of the bare strings).
- **Grammar:** the imperfects left by pass (a) (97, 111, 134, 136, 206).
- After each of five batches `verify WD --strict`: 0 problems, 0 repeated-line differences; at the end
  `check_bible_quotes.py` on the annotated file and this file: 0 problems.

### Result: 47 lines changed (each with its פירוק `("…")` and every note that quoted the old Hebrew)
**One lemma, two Hebrew words → the precedent (the Theogony, or the first WD occurrence)**

| Line | Before → after | Reason |
|---|---|---|
| 245 | `במחשבות זאוס` → `בהגיגי זאוס` | φραδμοσύνη: TH 626, 884, 891 `בהגיגי ארץ` – the same phrase (and `מחשבות` is δῆνος's, TH 236) |
| 282 | `ברצונו` → `במזיד` | ἑκὼν ἐπίορκον ὀμόσσας = TH 232 `במזיד נשבע לשקר` |
| 268 | `גם את אלה … הוא משקיף` → `גם באלה … הוא צופה` | ἐπιδέρκομαι: TH 760 `צופה`; the Hebrew-only contact with Prov 15:3 `צֹפוֹת` noted (kind b) |
| 795 | `מתנהל־הרגליים` → `עקום־ההילוך` | εἰλίπους: TH 290, 983 |
| 801 | `למעשה הזה` → `לַפּוֹעַל הזה` | ἔργμα: TH 823 `ופעלים`; `מַעֲשֶׂה` is ἔργον's (and ἔργμα / ἔρδω `פָּעַל` share a root, as in Greek) |
| 787 | `יום נעים` → `יום נוח` | ἤπιος: TH 235, 236, 407 (`נָעִים` is ἡδύς, TH 40) |
| 769 | `זאוס רב־התבונה` → `זאוס מלא־התבונה` | μητιόεις: 51 (the same phrase Διὸς πάρα μητιόεντος), 273, TH 286, 457; `רב־התבונה` is μητίετα's |
| 342, 722, 736, 742 | `סעודה` → `משתה` (`רב־האורחים`, `השופע`: agreement) | δαίς / δαίτη: TH 802 `למשתאות` |
| 704 | `האורבת לסעודות` → `האורבת לארוחות` | δειπνολόχος from δεῖπνον `אֲרוּחָה` (209, 442); `סעודה` freed |
| 712 | `לתת לך משפט` → `לספק לך משפט` | παρέχω: TH 639 `סיפק`; `נָתַן` is δίδωμι's |
| 515 | `גלד השור` → `עור השור` | ῥινός: TH 539 `בעור` (the ox-hide); the הקבלה bullet on Job 16:15 `גִלְדִּי`, which rested only on the old word, removed |
| 788 | `לדבר דברי לעג` → `להטיח דברי לעג` | βάζω: 186 `בהטיחם` (seam: `דִּבֵּר` is λέγω's) |
| 821 | `רע יותר` → `גרוע יותר` | χερείων: 127 `גרוע` (seam: `רַע` is κακός's) |
| 767 | `את המנות` → `את המזון` | ἁρμαλιή: 560 `מן המזון`; `מָנָה` is αἶσα's (§5) |
| 740 | `מרעתו` → `מן הרוע` | κακότης `רֹעַ` (93, 287); `רָעָה` is κακόν's |
| 549 | `מעשי המאושרים` → `מלאכות המאושרים` | ἔργα "tilled fields": `מְלָאכָה` (field-work, §5), as 119, 231 |
| 598, 609, 619, 646, 768 | `בשעה ש־` → `כאשר` | εὖτε (ἄν): 181, 323, 430, 448, 458, 564 (both translators) and TH 28 `כש־`; ἦμος / τῆμος keep `בשעה ש־` / `באותה שעה` (§11.11.2 is to be read so) |

**One Hebrew word, two lemmas (collisions; the precedent keeps the word)**

| Line | Before → after | Reason |
|---|---|---|
| 340 | `נוחים אליך` → `מְרֻצִּים לך` | ἵλαος had ἤπιος's `נוֹחַ`; the passive of ἱλάσκομαι `רִצָּה` (338; TH 91 `מְרַצִּים`) renders the same Greek family |
| 225 | `לזרים` → `לאורחים` | ξένος had ἀλλότριος's `זרים` (34, 395, TH 599); ξένος `אוֹרֵחַ` as 183, 327 (the split ξένος `אורח` / `זר` withdrawn) |
| 654 | `עז־הלב` → `נבון־המערכה` | δαΐφρων had ὀβριμόθυμος's epithet (TH 140); δαΐ `מערכה` (TH 650, 674) + φρήν |
| 773 | `המצוינים` → `יוצאי־הדופן` | ἔξοχος had ἀριδείκετος's `מצוין` (TH 385, 532, 543); `בולט` is πρέπω's (TH 92) |
| 648 | `רב־ההמיה` → `רב־הנהמה` | πολύφλοισβος had ἐρισμάραγος's epithet (TH 815); `שאון` is ὄτοβος's (TH 709); the sea's `כְּנַהֲמַת יָם` (Isa 5:30) |
| 456, 807 | `קורות` → `לוחות` | δόρυ shared `קוֹרָה` with ἔλυμα (430, 436: the coordinator's ruling, §11.11.4) in the same passage |
| 584 | `בלי הרף` → `תָּדִיר` | adverbial πυκνόν had ἐμμενής's `בלי הרף` (TH 610, 712); `בלי הפוגה` is TH 611, 690's |

**The imperfect of state or habit → `הָיָה` + participle (renderings §4)**
- **111** `כאשר מלך` → `כאשר היה מולך` (ἐμβασίλευεν, beside 112 `היו חיים`); **134** `לא יכלו` → `לא היו יכולים`;
  **136** `רצו` → `היו רוצים` (ἐδύναντο, ἤθελον: the silver race's habit, beside 139 `היו נותנים`); **206** `קונן` →
  `היה מקונן` (μύρετο, the nightingale's lament as the background of ἔειπεν).
- **97** ἔμιμνε `נשארה` **kept**: `נשאר` is a stative verb whose past already states the lasting result (Hope stayed
  inside, once); `הייתה נשארת` would read as a habit ("used to stay"), which the Greek does not say.

**Homographs vocalized (the line's words unchanged)**
- **186** `אֲנוּשׁוֹת` (χαλεπός, as 91, 178) against **416** `אֱנוֹשׁ`, **533** `לֶאֱנוֹשׁ` (βροτός / βρότεος, §5); **590**
  `חָלָב` (γάλα; δημός is `חֵלֶב`, TH 538); **177** `מִיְּגִיעַ`, **305** `יְגִיעַ` (κάματος) against 291 `יגיע` (ἱκνέομαι);
  **716** `רֵעָם` (ἑταῖρος; `רעם` is βροντή); **516** `הָעֵז` (αἴξ; `עז` is κρατερός); **466** `שֶׁיִּכְבְּדוּ` (βρίθω; τιμάω
  `יכבדו`, TH 81); **538** `עֵרֶב` (κρόκη; ἕσπερος / δείελος `עֶרֶב`).

**Apparatus only:** the 513 note (ῥινός now `עוֹר`), the 723 note and the section heading 706–723 (`המשתה המשותף`).

### Splits confirmed (one lemma, two Hebrew words, by sense; for renderings §11.13)
- ἀγορεύω: TH 86 `נָאַם` (orating in the assembly) / WD `אָמַר בְּפֻמְבֵּי` (280, 402, 688; both WD translators).
- δαιμόνιος (vocative): TH 655 `הוֹ נִפְלָא` (respectful) / WD 207 `הוֹ מְשֻׁנֶּה` (the hawk's contempt).
- κρυερός: TH 657 `מַקְפִּיא` (figurative "chilling") / WD 153 `קַר` (the cold house of Hades; `הִקְפִּיא` is παχνόω, 360).
- προρέω: TH 792 `נָבַע` (from a rock) / WD 757 `זָרַם` (rivers flowing to the sea; ῥέω `זָרַם`).
- ἔρχομαι: `בָּא` / `הָלַךְ` of a star or a wind passing over or through (419, 515).
- κρίνω: `הִכְרִיעַ` (judge: 221, TH 882) / `הִבְחִין` (discern days and omens: 768, 801, 828).
- ὄπις: TH 222 `גְּמוּל` (retribution) / WD `הַשְׁגָּחָה` (the gods' regard: 187, 251, 706).
- βλάπτω: TH 89 passive `נִפְגָּע` ("the wronged") / WD active `הִזִּיק` (193, 258, 283; βλαβερός `מַזִּיק` 365).
- λάσκω: TH 694 `הִתְפַּצֵּחַ` (wood crackling) / WD 207 `צָוַח` (a bird). πραΰνω: TH 254 `הִרְגִּיעַ` / WD 797 `אִלֵּף` (a bull).
  φρονέω: TH `חָשַׁב` / WD 202 `הִשְׂכִּיל`. πυκνός: adj. `צָפוּף` / adv. `תָּדִיר` (584).
- ἀλλά: `אֲבָל`; `אֶלָּא` after a negation (11, 444, 527 … – Hebrew grammar); `אַךְ` (513, 571).
- πάμπαν `לְגַמְרֵי` (302, 335) / `כָּלִיל` (763, with ἀπόλλυται: the idiom) – stylistic, left.
- The translators' recorded splits were checked against their lines and stand (σχέτλιος, φράζω, ἀφαιρέω, μίμνω /
  μένω, ἐπαινέω, ταχύς, νέμω, ἦθος, μίγνυμι, ἴσχω, λείπω, γίγνομαι of a person, ἄγω, νοέω, γιγνώσκω, εἶδον, χαλεπός,
  κοσμέω, κομίζω, πείθω, φίλος, ἐπιτέλλω, ἀνύω, τυγχάνω, ῥέζω / ἔρδω, χρῆμα, πήγνυμι, ἐλαύνω, ἄκρον, ἀραρίσκω, βοῦς,
  δέω, ἐμπνέω, αἱρέω, ὅπλον, θοός, ὀλίγος, ἀποφθίνω, ὀρίνω, ἐπιβαίνω, ὑπέρβιος, ἐπιτίθημι, δόμος, τρίπους, χρυσάωρ,
  ἄφενος 637, ῥεῖα 762), except **ξένος**, whose `זר` (225) is withdrawn (above).

### Pairs and homographs recorded (one Hebrew word; checked and left)
- **Pairs of synonyms** (Hebrew has one natural word), new: σχέτλιος (WD) / δυσηλεγής (TH 652, WD 506) `אַכְזָרִי`;
  ἀγέλη (TH 445) / πῶυ (WD 516, 786) `עֵדֶר`; σταθμός (TH 294, 444) / σηκός (WD 787) `דִּיר`; θήρ (WD 277, 512) /
  κνώδαλον (TH 582) `חַיָּה`; παῦρος / ὀλίγος `מְעַט`; ἀλέομαι / ἐξαλέομαι / ὑπαλεύομαι `חָמַק` (one family);
  ῥᾴδιος / κοῦφος `קַל` (761 beside 762 `בנקל`); νεφέλη (TH) / νέφος (WD) `עָנָן`; βλάπτω (WD) / πημαίνω (TH 232)
  `הִזִּיק`; χρώς / δέρμα / ῥινός / ῥινόν `עוֹר`; κεφαλή / κάρα `רֹאשׁ`. The translators' pairs (§11.9.6, §11.11.4,
  the part 3 and part 5 lists) stand.
- **Homographs** (vocalized where they could meet): `פּוֹעֵל` ῥεκτήρ (191) / `פּוֹעַל` ἔργμα (801) – one root, as ῥέζω /
  ἔρδω; `מְרֻצֶּה` ἵλαος / `מְרַצֶּה` ἱλάσκομαι (TH 91) – one family, as in Greek; `יַבָּשָׁה` ἤπειρος / `יְבֵשָׁה` αὖος
  (460); `רֵעַ` ἑταῖρος / `רַע` κακός; `קָרוֹב` ἐγγύθι / `בְּקָרוֹב` τάχα; and those vocalized above.

### Open points for the coordinator and the user
- **renderings §11.11.2** should read: ἦμος / τῆμος `בְּשָׁעָה שֶׁ־` / `בְּאוֹתָהּ שָׁעָה`; **εὖτε `כַּאֲשֶׁר`** (as ὅτε; TH 28).
- **renderings §11.11.4:** δόρυ `לוּחַ` (456, 807), since ἔλυμα has `קוֹרָה`.
- **New rows for §5 / §11.13** (each with its first line): δαίς `מִשְׁתֶּה` (TH 802); δεῖπνον `אֲרוּחָה` (δειπνολόχος 704);
  ἤπιος `נוֹחַ`, ἵλαος `מְרֻצֶּה` (340); ἔργμα `פֹּעַל`; φραδμοσύνη `הֲגִיגִים`; ἑκών `בְּמֵזִיד`; ἐπιδέρκομαι `צָפָה`;
  εἰλίπους `עֲקֹם־הַהִלּוּךְ`; βάζω `הֵטִיחַ`; ῥινός `עוֹר`; ξένος `אוֹרֵחַ`; δαΐφρων `נְבוֹן־הַמַּעֲרָכָה`; ἔξοχος
  `יוֹצֵא־דֹּפֶן`; πολύφλοισβος `רַב־הַנְּהָמָה`; μητιόεις `מְלֵא־הַתְּבוּנָה`; χερείων `גָּרוּעַ`; ἁρμαλιή `מָזוֹן`; παρέχω
  `סִפֵּק`; κακότης `רֹעַ` (never `רָעָה`).
- **For pass (c):** 538 `עֵרֶב רַב` is the phrase of Exod 12:38 (an unintended calque: the order `הרבה ערב` would avoid
  it); 340 `מְרֻצִּים` reads "satisfied" in Modern Hebrew (vocalized); 773 `יוצאי־הדופן` is a Mishnaic idiom now common;
  the pronoun `אלה` is unvocalized at 162, 164, 166, 224, 225, 238, 250, 274, 513, 684, 688, 697 (verify passes: no θε- in those lines), vocalized `אֵלֶּה` elsewhere – one practice would be better.
- **The Theogony** (not changed; for the record): TH 558 ὀχθέω `בכעס` beside κοτέω `כעס` (TH 315; WD 25) is a TH-internal
  pair (WD 53 differs by its own Greek, χολωσάμενος `ובזעמו`).
- **The parallels index** has to be regenerated (`build_parallels_index.py`): the 515 bullet (Job 16:15) was removed.

### Proposals for the tool (for the coordinator)
- **`lexmap --skeleton`** (as the TH reviewer proposed): strip prefixes, common suffixes and matres, merge similar
  strings, and print only the lemmas whose groups differ – and a reverse map on prefix-stripped Hebrew; both found the
  slips here in minutes (the raw output is 3,100 lines of inflection).
- **Traps for homographs between licensed key words**, firing only when the line's lemmas hold both readings' sources
  or the wrong one: `אנוש` (βροτός `אֱנוֹשׁ` / χαλεπός `אָנוּשׁ`), `חלב` (δημός / γάλα), `יגיע` (κάματος / ἱκνέομαι),
  `רעם` (βροντή / ἑταῖρος + suffix), `עז` (κρατερός / αἴξ), `ערב` (ἐρατός / κρόκη / evening).
- **A seam report**: the lemmas whose Hebrew in one translator's range never meets the other's (`--split 285`).

## Parallels index
(generated by `../build_parallels_index.py` from the הקבלה bullets)
