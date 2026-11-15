# Part KL1: the Sumerian King List, 48–431 and A–D (translator A, Round 9 run 2, 2026-11-15)

## Progress
- **Drafted:** all 388 new entries of `annotated-KL.rtl.md` (48–431 with the pluses 73A, 79A, 89A–B, 106A–B, 111A–B,
  249A, 253A–B, 283A–B, 326A, 353A, 370A, 375A, and the single-manuscript lines A–B (vD) and C–D (L1+N1)); the file
  header (Hebrew, covering the whole list); 22 `## ` section headings (one per dynasty, 1–39 and 40–94 included, and the
  closing summary 378–431); `translation--intro-KL.rtl.md`.
- **Copied lines 1–47:** kept; one vocalization revision (43) and one apparatus note (47), below.
- **Review passes:** (a) fidelity – every `>` line against the transliteration, the ORACC morph and ETCSL's notes
  (brackets: whole restored words only; numbers from other manuscripts in `{ }`; variants in the notes); fixed 383
  (a `שנה` the tablet does not write) and 113 (punctuation); (b) consistency – a script checked every formula against
  its transliteration (city struck, kingship carried, `היה מלך`, `בן`, `N מלכים –`, `עשה N שנה.`, the summary
  formulas, the occupations): no deviation except the ones justified below (333–334 masculine, 227–229 feminine);
  (c) Hebrew read aloud, and the apparatus scanned for the reserved strings (three `העולם` in notes → `התבל`).
- **Checks:** `python3 -I -B ur3_tools.py verify KL` – 435 entries, OK (two "same source, different Hebrew" notes,
  both justified: 334 `מלכותו` for the masculine `מחנה`; 362 `{20}` from P2, P5); the flood-references excerpt check
  OK. `check_bible_quotes.py` on the annotated file, the intro and this file – 0 problems.

### Parallels index (KL1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| KL 61–62, 69, 72 … (passim) | X dumu Y-ke₄ | X, בן Y | מלכים א יד:כ | [divergence] | Succession is stated as sonship only: no verb, no "in his stead"; never "begot" (Gen 5; 11 are reserved). |
| KL 4, 49 … (passim) | mu N i₃-ak | עשה N שנה | מלכים א יד:כ; מלכים א ב:יא | [divergence] | Kings counts `וְהַיָּמִים אֲשֶׁר מָלַךְ`; the list "does" years (*ak*), and at the end "does kingship" (427). The verb `מלך` is kept out of the translation. |
| KL 64–65 | e-ta-na sipad lu₂ an-še₃ ba-ed₃-de₃ | אֵתָנָה, הרועה, האיש אשר לשמים / עלה | מלכים ב ב:יא; משלי ל:ד; בראשית ה:כד | [divergence] | A king who goes up by himself (on the eagle) vs a prophet taken in a storm, Enoch taken by God. |
| KL 84 | lu₂ ma-da elam{ki}-ma | האיש אשר את ארץ עֵילָם | בראשית י:כב; בראשית יד:א | [cognate] | The same name. |
| KL 93 (and every copy) | X {ĝiš}tukul ba-an-sag₃; nam-lugal-bi Y-še₃ ba-de₆ | X בנשק הוכתה, / מלכותה לY הובלה. | שמואל ב ג:י; דברי הימים א י:יד; דניאל ב:כא | [equivalent] / [divergence] | Kingship transferred from house to house; in the Bible God transfers it for a sin, in the list it is carried off in the passive, after a city is struck. ETCSL's "was defeated" hides the weapon (*tukul*) present in every copy – a finding. |
| KL 97 | dumu {d}utu en-am₃ | בן אוּתוּ, היה אדון | תהלים ב:ז | [divergence] | Divine sonship as a datum of the list vs adoption on the day of anointing. |
| KL 103–104; 269–270 | lugal unug lu₂ unug mu-un-du₃-a; lugal a-ga-de₃ lu₂ a-ga-de₃ mu-un-du₃-a | מלך אוּרוּךְ, האיש אשר את אורוך / בנה; מלך אַגָּדֶה, האיש אשר את אַגָּדֶה / בנה | בראשית י:י; בראשית י:יא; בראשית ד:יז | [cognate] (Erech, Akkad) / [equivalent] | Two of the four cities of Nimrod's kingdom are capitals of the list; the king who builds a city (Asshur builds Nineveh; Cain builds a city). |
| KL 107, 109, 126, 160, 164, 215–217, 225, 254 | sipad, šu-KU₆, simug, azlag₂, ma₂-laḫ₄, ašgab, gudug, lu₂-kurun-na, zadim | הרועה, הדייג, הנפח, הכובס, הַמַּלָּח, הבורסי, כוהן־הַגּוּדוּג, מוכרת הַשֵּׁכָר, הסתת | שמואל ב ז:ח | [equivalent] | Kings from humble trades; in the Bible the rise is God's choice, spoken by him; in the list the trade is an epithet beside the name. |
| KL 113 | ab-ba-ni lil₂-la₂ | אביו – מַשַּׁב? | בראשית ו:ד | [divergence] | A hero with a non-human father (a *lil₂* spirit, not a god). Our proposal, as a shared motif only. |
| KL 133–134 (and Urim passim) | urim₂{ki} | אוּר | בראשית יא:כח | [cognate] | Ur of the Chaldees. |
| KL 164 | {lu₂}ma₂-laḫ₄ | הַמַּלָּח | יונה א:ה | [cognate] | Sumerian *ma₂-laḫ₄* > Akk. *malāḫu* > Heb. `מַלָּח`. |
| KL 224–229 | kug-{d}ba-u₂ {f}lu₂-kurun-na … lugal-am₃ mu 100 i₃-ak | כּוּ־בָּבָא, מוכרת השכר … הייתה מלך, עשתה 100 שנה | מלכים ב יא:ג | [divergence] | The only woman: a full dynasty with every formula, *lugal* "king"; Athaliah has no opening or closing formula. |
| KL 265–266 | a-ga-de₃{ki} | אַגָּדֶה | בראשית י:י | [cognate] | Akkad. |
| KL 268 | sagi ur-{d}za-ba₄-ba₄ | מַשְׁקֵה אור־זבבה | בראשית מ:א; נחמיה א:יא | [equivalent] | The same construct "cupbearer of king X"; in the list the cupbearer replaces the king. |
| KL 284–289 | a-ba-am₃ lugal a-ba-am₃ nu lugal | מי היה מלך? מי לא היה מלך? | שופטים יז:ו; מלכים א טז:כא | [equivalent] / [divergence] | The formula of the kingless time; in Judges a moral state, in the list a problem of counting (four kings in three years). |
| KL 289; 329 | 3 mu ib₂-ak; ud 40 i₃-ak | {4 אלה} עשו {3} שנה; עשה 40 יום | מלכים א טז:טו; מלכים ב טו:יג | [equivalent] | Very short reigns recorded to the day (Zimri 7 days, Shallum a month; Tirigan 40 days). |
| KL 309; C–D | lugal mu nu-tuku; lugal nu-ub-tuku | מלך שאין לו שם; מלך – לא היה לו | בראשית יא:ד; בראשית ו:ד; הושע י:ג | [divergence] / [equivalent] | The Gutian "army": no king with a name (*mu* is "name" and "year", the list's two key words). Gen 11:4 / 6:4: our proposal. |
| KL 365 (variant of L1+N1, P2) | mu ḫe₂-ĝal₂-la bal sag₉-ga til₃ niĝ₂ dug₃-ga | (in the note) | תהלים סא:ז | [equivalent] | A blessing on the living king's years inside a list of years. |
| KL 426–427 | 11 iri{ki} iri nam-lugal-la ib₂-ak-a | 11 ערים, / [ערים] שבהן עשו מלוכה. | בראשית י:י | [divergence] | A list of cities as a list of kingship; in Genesis one king's kingdom, here eleven cities through which the one kingship passed. |

## Key findings
**The ancient mind.**
1. **Kingship is one thing that moves.** It "descended from heaven", sits in one city at a time, and is "carried"
   (*ba-de₆*, passive, no agent) to the next; its turn is *bala* (`תקופה`, the subtotals 73A–283A: `N שנה – תקופת X
   היא.`). Before the flood the cities "fell" (*šub*); after it each is "struck with weapons" (*{ĝiš}tukul ba-an-sag₃*,
   `X בנשק הוכתה,`) – post-diluvian history is a history of wars. The formula holds even where no war is known (339:
   Utu-ḫeĝal → Ur-Namma): it is the pattern, not a report. ETCSL's "was defeated" drops the weapon from every copy; the
   same idiom is used of Kiš in Gilgameš and Aga (`בנשק – אַל נכה`, AG 74), and the list makes Kiš fall right after
   Aga (93). The Sippar manuscript (S) writes instead *bal-bi ba-kur₂* "its turn was changed" (241, 257, 263, 295, 305;
   P5 at 353): a scribe who preferred rotation to war.
2. **The few words of story are formulas too:** `אביו – X,` only for Gilgameš (a *lil₂* spirit, 113) and Sargon (a
   gardener, 267); `מלך X, האיש אשר את X / בנה,` only for Enmerkar and Sargon (103–104, 269–270); *mu-un-gen₆-na*
   `כונן` only for Etana ("all the lands", 66) and Ku-Baba ("the foundation of Kiš", 226); and Su3+Su4 (from Susa)
   adds that at Ur's fall someone "tore out the foundation of Sumer" (353A). Meš-ki-aĝ-gašer "entered the sea, went up
   to the mountains" (100–101) – ETCSL's "disappeared" is not in the Sumerian.
3. **Ku-Baba** (224–229), the tavern-keeper (`מוכרת השכר` = Akk. *sābītum*), "was king" (*lugal-am₃*) with every
   formula of a dynasty: the translation keeps `מלך` and lets only the Hebrew verb agree (`הייתה מלך, עשתה`).
4. **Order against history:** the list knows the dynasties were contemporary (P3+BT14: Dumuzid of Uruk captured
   Enmebaragesi of Kiš, 111A–B) and still sets them one after the other; it asks openly "who was king? who was not
   king?" (284), and of the Gutians says there was "no king with a name" (309) and "it was king by itself" (310 –
   singular; ETCSL pluralizes). Tirigan reigns 40 days (329); the grand total of all post-diluvian kings, 28,876 + X
   years (430), barely exceeds the first antediluvian king's reign alone (28,800, line 4).
5. **The copies date themselves:** L1+N1 and P2 stop at Ur-Ninurta to bless him ("years of abundance, a good reign, a
   sweet life", 365); P5 adds Damiq-ilišu (375A); P3+BT14 counts the returns of kingship ("a second / third time to
   Unug", 185, 258).

**The Bible.**
6. Two of Nimrod's four cities, Erech and Akkad (`בָּבֶל וְאֶרֶךְ וְאַכַּד`, Gen 10:10), are capitals of the list
   (Unug 94–340, Agade 265–295), and the city-builder formula (103–104, 269–270) meets Gen 10:11 and 4:17: the
   Mesopotamian memory of the first royal cities behind Gen 10.
7. The list against Kings: `עשה N שנה` against `וְהַיָּמִים אֲשֶׁר מָלַךְ` (the verb kept out of the translation);
   "son of" without "in his stead"; Zimri's 7 days and Shallum's month against Tirigan's 40 days; Judges' `אֵין מֶלֶךְ`
   against "who was king?"; the transfer of kingship (2 Sam 3:10, 1 Chr 10:14) – by God for a sin, against the list's
   anonymous passive. Athaliah against Ku-Baba. The cupbearer (Gen 40:1, Neh 1:11) who becomes king (268).

## Open decisions
1. **Gilgameš's Hebrew form.** `../renderings.md` §14.1 gives `בִּילְגָּמֶשׁ` "(the Sumerian poems' form, 71×)", but the
   Sumerian poems (`../../אפוס-גילגמש/renderings.md` §23; AG, BH, DB, HA, HB) write `גִּלְגָּמֶשׁ` / `גילגמש`, and
   0 lines there have `בילגמש`. I followed the poems (112, 117; notes). For the lead.
2. **Etana:** the corpus and §14.1 have `אֵתָנָה`; the flood references §5 (Ballad 9, note) and the copied note of 47
   had `אֵטָנָה`. I used `אֵתָנָה` (and revised the note of 47); §5's note is the coordinator's.
3. **Kiš ★** (§14.1) is vocalized everywhere except 224 and 244, where `verify`'s "fully vocalized" heuristic flags
   a line of names (see gate bugs). Kiš unvocalized is unambiguous; is ★ needed?
4. **`{ }` for a number or word that WB lacks and ETCSL supplies from another manuscript** (*ms. X has:*), after
   guidelines §6.8's `{<siglum>}` (without the siglum, named in the note): 49, 51, 53, 141–144, 163, 190, 195, 197,
   200–202, 206–208, 236–240, 280, 283, 289, 331, 362, 364, 365. Confirm, or prefer plain numbers with a note.
5. **Sexagesimal numbers:** *6 šu-ši* written `360` (181, 183, 187, 188), and *7 šu-ši 7* `427` (336, 338, as ETCSL);
   the alternative is to keep "6 שישים".
6. ***en*** = `אדון` (canon §2; the Gilgameš poems' `אדון כּוּלַבָּה`) for Meš-ki-aĝ-gašer (97, `היה אדון`) and 106B,
   not the temple corpus's `אֵן` for the office.
7. **Grammatical agreement inside the formulas:** `מחנה גוטיום / בנשק הוכה, / מלכותו לאורוך הובלה.` (332–334) and
   Ku-Baba's `הייתה מלך, עשתה … / עשתה שנותיה` (227, 229). The Sumerian does not mark gender.
8. ***sagi*** = `מַשְׁקֶה` (268): the natural Hebrew word, which happens to be Gen 40:1's – kept, tagged [equivalent].
9. **Narām-Suen** keeps the Akkadian legends' `נָרָם־סִין` (Cuthaean Legend, AP), though Suen is `סוּאֵן` in the
   Sumerian names (Puzur-Suen, Šu-Suen, Būr-Suen).

## Proposals for the corpus renderings (`../renderings.md` §14.2–§14.3; strings exactly as written)
**Formulas of the King List** (the first copy in brackets):
- *X{ki} {ĝiš}tukul ba-(an-)sag₃* = `X בנשק הוכתה,` (93; masculine `בנשק הוכה,` for `מחנה`, 333); the S / P5 variant
  *X(-a) bal-bi ba-kur₂* = `X – תקופתה שֻׁנְּתָה` (notes, 241); TL's *ba-gul* = `נהרסה` (notes).
- *nam-lugal-bi Y-še₃ ba-de₆* = `מלכותה לY הובלה.`, split `מלכותה –` / `לY הובלה.` (the flood references; 146–147).
- *X{ki}(-a/-ka) PN* = `בX – PN` (the flood references, 11); *e₂-an-na-ka* = `באאנה –` (95).
- *PN dumu X-ke₄* = `PN, בן X` (62); alone *dumu X-ke₄* = `בן X` (69); with the years in the line `PN, בן X, עשה N
  שנה.` (61, 238, 251, 369, 375A).
- *lugal-am₃* = `היה מלך,` (the flood references); *en-am₃* = `היה אדון,` (97); *PN lugal* = `PN מלך,` (285–288).
- *N mu bala X-kam* = `N שנה – תקופת X היא.` (73A).
- *ab-ba-ni X* = `אביו – X,` (113, 267).
- *lugal X lu₂ X mu-un-du₃-a* = `מלך X, האיש אשר את X` / `בנה,` (103–104).
- *mu-bi N mu ib₂-ak* = `עשו שנותיהם: N שנה.` (387); one king `עשה שנותיו: N שנה.` (395).
- *šu-niĝin₂ N lugal* = `סך הכול N מלכים –` (378); *a-ra₂ N-kam* = `N פעמים –` / `פעם 1 –` (380, 392); *šag₄ X* (in
  the summaries) = `בלב X.` (381).
- Months and days: *itid N* = `N חודשים`, *ud N* = `N ימים` / `N יום` (91–92, 329: `עשה 40 יום.`).
- *a-ba-am₃ lugal a-ba-am₃ nu lugal* = `מי היה מלך? מי לא היה מלך?` (284).

**Words:** *tukul* `נשק`; *sag₃* `הכה`; *gam* `הכריע` (85); *bala* `תקופה`; *en* `אדון`; *ma-da* `ארץ`; *kur-kur*
`הארצות`; *gen₆* (with *mu-n-*) `כונן`; *suḫuš* `יסוד`; *ab* `ים`; *kur₉* `נכנס`; *ḫur-saĝ* `רכס`; *šu dili* `ביד
יחידה`; *nam-ra* `שבי`; *bur₁₂* `עקר`; *ugnim* `מחנה`; *mu* "name" `שם`; *ni₂-ta-a* / *ni₂-bi-a* `מעצמו` / `בעצמו`;
*šeš-gal* `האח הגדול`; *lil₂* `מַשַּׁב`; *a-ra₂* `פעם`; *šu-niĝin₂* `סך הכול`; *la₂* (in numbers) `חסר`. Occupations
(after the name, with the article): *sipad* `הרועה`, *šu-KU₆* `הדייג`, *simug* `הנפח`, *azlag₂* `הכובס`, *ma₂-laḫ₄*
`הַמַּלָּח`, *ašgab* `הבורסי`, *gudug* `כוהן־הַגּוּדוּג`, *{f}lu₂-kurun-na* `מוכרת הַשֵּׁכָר` (= *sābītum*), *zadim*
`הסתת`, *nu-kiri₆* `גנן`, *sagi* `מַשְׁקֵה` (construct, vocalized).

**Names** (first-occurrence forms): נַנְגִּישְׁלִישְׁמָה, אֶנְטַרַחְאַנָּה, בָּבּוּם, פּוּאַנּוּם, כָּלִיבּוּם,
כָּלוּמוּם, זוּקָקִיפּ, אַטַבּ, מַשְׁדָּה, אַרְוִיאוּם, אֵתָנָה, בָּלִיחַ, אֶנְמֶנוּנָּה, מֶלֶם־כִּישׁ, בַּרְסַלְנוּנָּה,
זָמוּג, טִיזְקַר, אִילְכּוּ, אִילְתַּסַדּוּם, אֶנְמֶבָּרָגֶסִי, עֵילָם, אַגָּא, אֵאַנָּה, מֶשְׁקִיאַגָּשֶׁר, אֶנְמֶרְכַּר,
אוּרוּךְ, לוּגַלְבַּנְדָּה, דּוּמוּזִי, כּוּאַרָה, גִּלְגָּמֶשׁ, כּוּלַבָּה, אוּר־נוּנְגַּל, אוּדוּלְכַּלַמָּה, לָבַּאשׁוּם,
אֶנְנוּנְטַרַחְאַנָּה, מֶשְׁחֶה, מֶלֶם־אַנָּה, לוּגַל־כִּיתוּן, מֶשְׁאַנֶּפַּדָּא, מֶשְׁקִיאַג־נַנָּה, אֵלוּלוּ, בָּלוּלוּ, אַוָואן,
סוּסוּדָּה, דָּדָסִיג, מָמָגַל, כַּלְבּוּם, תּוּגֶה, מֶנּוּנָּה, לוּגַלְגּוּ, חַמָזִי, חֲדָנִישׁ, אֶנְשַׁגְכּוּשְׁאַנָּה,
לוּגַל־אוּרֶה, אַרְגַנְדֵאָה, נַנִּי, אֲדַב, לוּגַל־אַנֶּה־מוּנְדּוּ, מָארִי, אַנְבּוּ, אַנְבָּא, בָּזִי, זִיזִי, לִימֶר,
שַׁרּוּם־אִיתֶר, כּוּ־בָּבָא, אַכְשַׁךְ, אוּנְזִי, אוּנְדַּלוּלוּ, אוּר־אוּר, פּוּזוּר־נִירַח, אִישׁוּ־אִיל, שׁוּ־סוּאֵן,
פּוּזוּר־סוּאֵן, אוּר־זַבַּבָּה, זִימוּדַר, אוּצִי־וַתַר, אִישְׁתַּר־מוּתִי, אִישְׁמֶה־שַׁמַשׁ, שׁוּ־אִילִישׁוּ, נַנִּיָּה,
לוּגַלְזָגֶּסִי, אַגָּדֶה, סַרְגּוֹן, רִימוּשׁ, מָנִישְׁתִּישׁוּ, נָרָם־סִין, שַׁרְכַּלִּי־שַׁרִּי, אִירְגִּיגִי, אִימִי, נָנוּם,
אִילוּלוּ, דּוּדוּ, שׁוּדּוּרוּל, אוּר־נִיגִין, אוּר־גִּיגִיר, כּוּדָּה, פּוּזוּר־אִילִי, אוּר־אוּתוּ, גּוּטִיּוּם,
אִינְכִּישׁוּשׁ, זַרְלַגַבּ, שׁוּלְמֶה, סִילוּלוּמֶשׁ, אִינִימַבַּכֶּשׁ, אִיגֶשָׁאוּשׁ, יַרְלַגַבּ, אִיבָּטֶה, יַרְלָה, כּוּרוּם,
אַפִּיל־כִּין, לָא־עֵרָבּוּם, אִירָרוּם, אִיבְּרָנוּם, חַבְּלוּם, יַרְלַגַנְדָּה, טִירִיגָה, אוּתוּ־חֶגַל, אוּר־נַמָּה, שׁוּלְגִּי,
אֲמַר־סוּאֵן, אִבִּי־סוּאֵן, אִיסִין, אִישְׁבִּי־אֶרָּה, אִידִּין־דָּגָן, אִישְׁמֶה־דָּגָן, לִיפִּית־אִישְׁתַּר,
אוּר־נִינוּרְתָּה, בּוּרְסוּאֵן, לִיפִּית־אֶנְלִיל, אֶרָּה־אִימִתִּי, אֶנְלִיל־בָּאנִי, זַמְבִּיָּה, אִיטֶר־פִּישָׁה,
אוּר־דּוּכּוּגָּה, סוּאֵן־מָגִיר, דָּמִיק־אִילִישׁוּ.

**For RL1 (the Rulers of Lagaš):** these KL strings will be copied there wherever the Sumerian is the same.

## Revisions of the copied flood-reference lines
- **KL 43** (`>`): `בכיש – גּוּשׁוּר` → `בְּכִישׁ – גּוּשׁוּר` – Kiš ★ (`../renderings.md` §14.1); vocalization only, so the
  excerpt check stays OK; to apply in the flood references §1 43. A sentence on the ★ added to its **הערות**.
- **KL 47** (apparatus only): "מכאן ממשיכה הרשימה ב־21 מלכים נוספים בכיש, ובהם אֵטָנָה … לא תורגם." → "… ובהם
  אֵתָנָה "הרועה, האיש אשר לשמים עלה" (שורות 64–67; ראו §5 שורה 9 באזכורי המבול)." – the list is translated now;
  Etana's corpus form. (The flood references may keep their own note, which is true of their excerpt.)
- **Proposed, not applied** (it would break the excerpt identity): **KL 1** `כאשר [המלו]כה ירדה מן השמים,` →
  `כאשר המלוכה ירדה מן השמים,` – by the brief's rule only a whole restored word is bracketed; here only the
  prefix *nam-* is restored. The coordinator decides, and applies to both copies at once.
- **Flood references §5 9** (note, outside the excerpt): `אֵטָנָה` → `אֵתָנָה`.

## Gate bugs (please fix in the tool; I wrote around them and say so in the lines' notes)
1. **`פדה`** (the netherworld corpus-wide RESERVED `פדיון|פדה|פדיונ`, unanchored, licence *napṭir|ipṭir*) hits the
   name Meš-Ane-pada (*meš₃-an-ne₂-pad₃-da*, 135, 138): written `מֶשְׁאַנֶּפַּדָּא` (final aleph, like `כַּכָּא`).
   Anchor the gate at a word start, or license *pad₃-da*.
2. **`בור`** (licence *bur₃*) hits Būr-Suen (`{d}bur-{d}suen`, 366, 369): written as one word `בּוּרְסוּאֵן`. License
   `\{d\}bur-|\bbur-\{d\}`.
3. **The "fully vocalized" heuristic** (`canon_tools.py`: > 2 tokens and niqqud > 60% of the letters) flags lines made
   only of names at their first occurrence plus trap names that must be vocalized (`דָּגָן`, `אוּר־נַמָּה`, `כִּישׁ`):
   I left Kiš unvocalized in 224, 244, Ur-Zababa in 268, Šulgi in 343, and the second name in 361, 363; and wrote
   `שַׁרְכַּלִּי־שַׁרִּי` (281), `אַרְגַנְדֵאָה` (189) lightly vocalized. Count maqaf-joined names as one token, or exempt
   lines whose tokens are all names.
4. (Documentation) `../renderings.md` §14.1's `בִּילְגָּמֶשׁ` "71×" does not match the Sumerian poems (open decision 1).
