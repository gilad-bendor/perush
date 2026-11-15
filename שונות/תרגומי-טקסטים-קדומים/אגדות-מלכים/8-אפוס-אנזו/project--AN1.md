# Part AN1 – the Epic of Anzû, Standard Babylonian Tablet I (eBL L/1/10, SB I), Round 8 run 4, 2026-11-14

Translator A. File: `annotated-I.rtl.md` (Hebrew header paragraphs written: נוסח הבסיס, פירוק, מספור, סימנים,
תרגומים להשוואה, תגי הקבלה, the story, three observations, the fixed formulas, מלים שמורות, שמות).

## Progress and passes
- **All 201 entries drafted** (I.1–I.29, I.a+30–a+55, I.b+56–b+189, I.c+190–c+201), in nine sections, each saved and
  filled (`kings_tools.py fill AN`) as drafted. Unvocalized and plene; names vocalized at first occurrence, the ★ names
  (מָמִי, אָנוּ, גִּירָּה, שַׁרָא, דָּגָן, בֵּלֶת־אִילִי, אִשְׁתַּר) everywhere.
- Passes: (1) fidelity – every line parsed against eBL's N and lemmas, brackets checked against each line's ATF
  (partial-restoration rule; b+111–b+124 are wholly restored by eBL and wholly bracketed); (2) consistency – the
  three refusal cycles and Anu's speech copied string for string (only brackets differ), grep of the corpora for every
  new word (`harmonize_survey.py words/heb`); (3) the Hebrew read as a whole (list of `>` lines).
- `python3 -I -B kings_tools.py verify AN`: 201 entries; **3 problems, all gate bugs** (below, proposal T1–T2); the
  other chapters are not drafted yet (coverage note only).
- `python3 -I ../tools/check_bible_quotes.py 8-אפוס-אנזו/annotated-I.rtl.md`: **0 problems**.

### Parallels index (AN1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| I.2 | *gašra luzzammur* | את הכביר – אזמרה | `אָנֹכִי לַיהוָה אָנֹכִי אָשִׁירָה אֲזַמֵּר לַיהוָה אֱלֹהֵי יִשְׂרָאֵל` (שופטים ה:ג); `אָשִׁירָה לַיהוָה כִּי גָאֹה גָּאָה` (שמות טו:א) | [cognate] | *zamāru* ~ זמר: a singer opens, in the first person, a song of the warrior god. |
| I.4 | *gašra luttaʾʾid* | את הכביר – אשבחה | `יְהוָה עִזּוּז וְגִבּוֹר יְהוָה גִּבּוֹר מִלְחָמָה` (תהלים כד:ח) | [equivalent] | Praise of the god as warrior. |
| I.5 | *ilitti ēkur* | יְלִיד אֵכּוּר | `יְלִידֵי בֵיתוֹ` (בראשית יד:יד) | [equivalent] | "Born of the house" (Enlil's temple). |
| I.6 | *mušašqû* | משקה | `וְאֵד יַעֲלֶה מִן הָאָרֶץ וְהִשְׁקָה אֶת כָּל פְּנֵי הָאֲדָמָה` (בראשית ב:ו) | [cognate] / [divergence] | *šaqû* Š ~ השקה; the war god also waters fold and city. |
| I.9 | *šimâ* | שִׁמְעוּ | `שִׁמְעוּ מְלָכִים הַאֲזִינוּ רֹזְנִים` (שופטים ה:ג) | [equivalent] | Call to the audience. |
| I.12 | *nāʾir kusarikki ina qereb tâmti* | קוטל את איש־השור בקרב הים | `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) | [divergence] | A god's slain monster of the sea. |
| I.14 | *hayyāša* | החש | `אֱיָלוּתִי לְעֶזְרָתִי חוּשָׁה` (תהלים כב:כ) | [cognate] | *hâšu* ~ חוש (also b+102 *lihīš* `מי יחוש?`). |
| I.15 | *adīna … lā ibbanû* | עד אז … לא נבנו | `וְכֹל שִׂיחַ הַשָּׂדֶה טֶרֶם יִהְיֶה בָאָרֶץ` (בראשית ב:ה) | [equivalent] | A real "not yet" (unlike Etana OBM 7); `טֶרֶם` stays reserved. |
| I.17 | *idiglatu purattu* | חִדֶּקֶל, פְּרָת | `וְשֵׁם הַנָּהָר הַשְּׁלִישִׁי חִדֶּקֶל … וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | [cognate] / [divergence] | The two rivers formed, but (18) not yet bringing water to the land. |
| I.18 | *ana māti lā ubbalū mêšunu nagbū* | אל הארץ אינם מביאים את מימיהם [המעמקים] | `וְאֵד יַעֲלֶה מִן הָאָרֶץ` (בראשית ב:ו) | [divergence] | A dry world before order; in Genesis water rises. |
| I.28 | *šaššāru abrāšu* | משור – אברותיו | `יִפְרֹשׂ כְּנָפָיו … עַל אֶבְרָתוֹ` (דברים לב:יא); `יַעֲלוּ אֵבֶר כַּנְּשָׁרִים` (ישעיהו מ:לא) | [cognate] | *abru* ~ אבר. |
| I.a+54 | *lizziz maharkā-ma* | יעמוד לפניך | `אַשְׁרֵי עֲבָדֶיךָ אֵלֶּה הָעֹמְדִים לְפָנֶיךָ תָּמִיד` (מלכים א י:ח) | [equivalent] | "Stand before" = serve. |
| I.a+55 | *liptarrik ina atmani šubat kiṣṣi* | יהי חוסם בדביר, מושב [המעון] | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | A winged guardian at the god's door – who becomes the thief. |
| I.b+57 | *māhāza ītahaz* | מחוז אחז | `וַיַּנְחֵם אֶל מְחוֹז חֶפְצָם` (תהלים קז:ל) | [cognate] | *māhāzu* (from *ahāzu*) is the source of Hebrew מָחוֹז; the pun kept. |
| I.b+64 | *ṭuppi šīmāti ša qātīšu* | לוח הגורלות שבידיו | `וְנָתַתָּ אֶל חֹשֶׁן הַמִּשְׁפָּט אֶת הָאוּרִים וְאֶת הַתֻּמִּים` (שמות כח:ל) | [divergence] | An object of decision carried by its holder; חושן/אורים/תומים never in a line. |
| I.b+66 | *ukkuš ellilūti iṣṣabat ina libbīšu* | את סילוק האנלילות – תפס בלבו | `וְאַתָּה אָמַרְתָּ בִלְבָבְךָ הַשָּׁמַיִם אֶעֱלֶה … אָרִים כִּסְאִי` (ישעיהו יד:יג) | [equivalent] | The rebel's decision "in his heart". |
| I.b+69 | *lulqē-ma ṭuppi šīmāti* | אקחה – את לוח גורלות האלים – אני | `אֶעֱלֶה עַל בָּמֳתֵי עָב אֶדַּמֶּה לְעֶלְיוֹן` (ישעיהו יד:יד) | [equivalent] | A string of first-person cohortatives (69–72) ending in the throne (71). |
| I.b+81 | *šuharrur ellil* | דומם – אנליל | `וַיִּדֹּם אַהֲרֹן` (ויקרא י:ג) | [equivalent] | Silence after disaster (our proposal). |
| I.b+83, b+89 | *ṭēma šakānu* | שָׂם טַעַם | `וּמִנִּי שִׂים טְעֵם` (עזרא ד:יט); `מִטַּעַם הַמֶּלֶךְ` (יונה ג:ז) | [cognate] | The Aramaic idiom "set a decree" is a calque of the Akkadian; same two words. |
| I.b+86 | *ilu ayyu anzâ linār-ma* | "איזה אל – את אנזו יקטול | `אֶת מִי אֶשְׁלַח וּמִי יֵלֶךְ לָנוּ` (ישעיהו ו:ח); `מִי יְפַתֶּה אֶת אַחְאָב` (מלכים א כב:כ) | [equivalent] / [divergence] | The divine council seeks an agent; here three gods refuse in turn. |
| I.b+87 | *lišarbi šumšu* | יגדיל את שמו | `וַאֲגַדְּלָה שְׁמֶךָ` (בראשית יב:ב) | [equivalent] | A great name as reward. |
| I.b+93 | *šubriq anzâ* | הַבְרֵק את אנזו | `בְּרוֹק בָּרָק וּתְפִיצֵם` (תהלים קמד:ו) | [cognate] | *barāqu* ~ ברק. |
| I.b+94 | *šumka lirbi* | יגדל שמך | `וְיִגְדַּל שִׁמְךָ עַד עוֹלָם` (שמואל ב ז:כו) | [equivalent] | Same wish, same verb. |
| I.b+103 | *ayyu kām anzî ina ilī* | מי אוסר אנזו – בין האלים | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | [divergence] | An apparent echo only: *kām* is *kamû* "bind", not *kīma* "like". Foster's "defeat" hides the verb of I.10. |
| I.b+107 | *ittabši ṣīt pîšu kī il duranki* | נהיה מוצא פיו כאל דּוּרַנְקִי | `כִּי עַל כָּל מוֹצָא פִי יְהוָה יִחְיֶה הָאָדָם` (דברים ח:ג); `כָּל מוֹצָא שְׂפָתֶיהָ` (במדבר ל:יג) | [cognate] | *ṣīt pî* ~ מוֹצָא פִי: the word that becomes decree. |
| I.b+109 | *išahhuhū* | נרפים | `שָׁמַעְנוּ אֶת שָׁמְעוֹ רָפוּ יָדֵינוּ` (ירמיהו ו:כד) | [equivalent] | Slackness from fear. |
| I.b+110 | *ipsil urha* | נטה (מן) הדרך | `וַתֵּט הָאָתוֹן מִן הַדֶּרֶךְ` (במדבר כב:כג) | [equivalent] | Turning aside from a mission (our proposal). |
| I.b+154 | *iqatturū* | עשנים | `וְהַר סִינַי עָשַׁן כֻּלּוֹ` (שמות יט:יח) | [cognate] | *qatāru* ~ קטר; rendered `עשן` (קִטֵּר kept for incense). |
| I.b+177–178 | *pānā-ma mami … eninni bēlet kullat ilī lū šumki* | "לפנים – מָמִי … ועתה – "גבירת כלל האלים" יהי שמך | `שָׂרַי אִשְׁתְּךָ לֹא תִקְרָא אֶת שְׁמָהּ שָׂרָי כִּי שָׂרָה שְׁמָהּ` (בראשית יז:טו); `כִּי הִוא הָיְתָה אֵם כָּל חָי` (בראשית ג:כ) | [equivalent] / [divergence] | Renaming as elevation; the mother of all named for her office. |
| I.c+192 | *alkakāt* | הליכות | `הֲלִיכוֹת עוֹלָם לוֹ` (חבקוק ג:ו) | [cognate] | *alāku* ~ הלך. |
| I.c+194 | *abnī-ma* | בניתי | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע … לְאִשָּׁה` (בראשית ב:כב) | [cognate] | *banû* "build" for making living beings. |

## Key findings
**The ancient mind.** (1) Power lives in an object: whoever holds the Tablet of Destinies has Enlil's word – "his
utterance has become like the god of Duranki's; whom he curses turns to clay" (b+107–108) – so legitimacy follows the
thing, not the right; the cosmos can be stolen while its king is bathing (b+75–77), naked, his crown on the throne.
(2) The danger came through wisdom: Ea himself advised making the newborn monster a door-guard (a+53–55), and the guard
learned power by watching it (b+62–64: Gt `מתבונן` three times). (3) The council's despair is told by repetition: three
gods hear the same eight lines of promise and answer with the same nine lines of refusal (the Hebrew copied string for
string); the exhaustion is in the form. (4) Rewards are names: "Mighty be your name" (b+99), Mami renamed "Mistress of
all the gods" (b+178), and – later – Ninurta's names. (5) The mother of the gods as the source of all offices: she
"bore all the Igigi", "built" the Anunnakkū, assigned kingship of heaven to Anu and *ellilūtu* to her brother (c+193–
197) – and is asked to give her son. (6) Wisdom sits in the guts (*karšu* `מעיים`) and is "built" (*banû*) like a house
(b+156–157).

**Bible.** The tablet carried by its holder vs the breastpiece of judgment (Exod 28:30, [divergence]); the rebel who
"said in his heart … I will raise my throne" (Isa 14:13–14) – Anzû's string of cohortatives (b+69–72); the divine
council asking who will go (Isa 6:8, 1 Kgs 22:20); *ṣīt pî* = `מוֹצָא פִי` (Deut 8:3) and *ṭēma šakānu* = `שִׂים טְעֵם`
(Ezra 4:19) as real lexical contacts; *māhāzu* = מָחוֹז. **Corrected rank-3 echoes:** b+103 `ayyu kām anzî` is "who
binds Anzû" (*kamû*), not "who is like" – the apparent Exod 15:11 echo is not in the Akkadian; Foster's "firstborn" for
*bukru* (I.2, b+111, b+132) – the word is "child, offspring" (rendered `צאצא`); Foster's "rallied" (b+164) is
"trembled" (*tarāru*); Foster's "defeated" (I.10) is "bound".

## Open decisions (minor ones decided)
1. *bukru* = `צֶאֱצָא` (Enūma eliš) – collides with CL's *perʾu* `צֶאֱצָא` (already a split between EE and CL). The
   coordinator may prefer another word for one of them.
2. *kiṣṣu* = `מָעוֹן` (Enūma eliš has `קֹדֶשׁ`, forbidden here by §5); `מָעוֹן` is used for several Sumerian words
   but for no Akkadian one.
3. I.6 *ermu*, *ūri* uncertain (`*מחסה*`, `*גג*`); b+59 reading uncertain (eBL).
4. *nagāšu* = `נָדַד` (b+79 and copies); an alternative is `פָּנָה`.
5. *šahāhu* = `נִרְפָּה` (b+109 and copies); Foster "despondent".
6. b+160 vs b+162: identical Akkadian, Hebrew differs only in the closing punctuation (`,` / `."`).

## Proposals for the corpus renderings
**Formulas (§13.3), fixed at their first copies – later parts copy these strings exactly:**

| Source | Hebrew | Tag | Notes | Lines |
|---|---|---|---|---|
| X *pâšu īpuš(am)-ma iqabbi* / *izakkara ana* Y | `X פתח את פיו ואמר,` / `דיבר אל Y:` | – | as Gilgameš XI, CL SB 99–100 | b+84–85, b+165 |
| *ana* X *amāta izakkar* | `אל X דבר דיבר:` | – | Nergal and Ereškigal, Etana III 1 | a+48, b+101, b+122, b+143, b+166 |
| *ilu ayyu anzâ linār-ma* / *ina kullat dadmī lišarbi šumšu* | `"איזה אל – את אנזו יקטול,` / `ובכלל היישובים יגדיל את שמו?"` | [equivalent] Isa 6:8 | `מי ילך` etc. gated | b+86–87 (OB II 9–10) |
| X *issû mār āni* / *bukur* Y | `את X הצעיקו, בן אָנוּ;` / `…, צאצא Y;` | – | *gugallu* `ממונה (המים)` (EE) | b+88, b+90, b+111, b+132 |
| *šakin(-ma) ṭēma ana šâšum-ma izakkaršu* | `שָׂם טַעַם, ואליו דיבר:` | [cognate] Ezra 4:19 | | b+89, b+91, b+112, b+133 (OB II 26, 28) |
| Anu's speech | `"X הכביר, X העריץ – אל יסור קרבך!` / `הַבְרֵק את אנזו בנשקך!` / `יגדל שמך באספת האלים הגדולים,` / `בין האלים, אחיך – מתחרה אל יהי לך!` / `יהיו וייבנו דוכנים,` / `בארבעת הקצוות שִׂים ושִׂים את מחוזותיך,` / `מחוזותיך ייכנסו אל אֵכּוּר!` / `התפאר לפני האלים – ו"כביר" יהי שמך!"` | | b+96–99 recur in SB II 24–27, 122–125, 144–147 (there addressed to Ninurta) | b+92–99, b+113–120, b+134–141 |
| the answer | `X ענה לָאִמְרָה,` / `אל אָנוּ, אביו, דבר דיבר:` | | | b+100–101, b+121–122, b+142–143 |
| the refusal | `"אבי, אל הר אין־גישה – מי יחוש?` / `מי אוסר אנזו – בין האלים, בניך?` / `את לוח הגורלות – השיגה ידו,` / `את האנלילות לקח – מושלכים הפולחנים;` / `אנזו עף, ואל הרו נדד.` / `נהיה מוצא פיו כאל דּוּרַנְקִי;` / `אמר – ומי שיארר – היה לטיט."` / `למוצא פיו – האלים נרפים.` / `נטה (מן) הדרך – "לא ללכת", אמר.` | [cognate] Deut 8:3 | the three theft lines = b+77–79 (narrative) | b+102–110, b+123–131, b+144–152 (OB II 17–24) |
| *šuharratu ittatbak šakin qūlu* | `הוצקה דממת המוות, דומייה שרויה.` | | Gilgameš VII / Ištar 11a, Gilgameš XI 134 | b+80 (OB II 3) |
| *abu malikšunu šuharrur ellil* | `האב, יועצם, דומם – אנליל.` | | Gilgameš XI 16 `יועצם` | b+81 (OB II 2) |
| *kiṣṣu ištahaṭ namurrassu* | `המעון – פשט את יפעתו.` | | | b+82 (OB II 5) |
| *ilū māti issanahhurū ana ṭēmi* | `אלי הארץ פונים פעם אחר פעם אל הַטַּעַם.` | | | b+83 (OB II 6) |
| *[n]arām libbīša umaʾʾaršu izakkaršu* | `את אהוב לבה – מצווה, אליו מדברת:` | | expect it in SB II | c+190 |
| *idnī ninurta šūpâ narāmki* / *rapša irti muttabbila qabal anunti* | `תני את נִינוּרְתָּה, המופיע, אהובך,` / `רחב החזה, המוליך קרב ומלחמה!` | | `המוליך קרב ומלחמה` also I.14 | b+179–182 |

**Terms** (Source | Hebrew | Tag | Notes | Lines): *gašru* | `כַּבִּיר` | – | Gilgameš, Maqlû; `גבור` stays *qarrādu*/*qardu* | passim ·
*dapīnu* | `עָרִיץ` | – | Gilgameš | b+92… · *bukru* | `צֶאֱצָא` | – | EE (open decision 1) | I.2, b+111, b+132 ·
*bīnu* | `בֶּן` | [cognate] | = *māru*'s word, noted | I.1 · *zamāru* | `זִמֵּר` | [cognate] | | I.2 · *nâdu* | `שִׁבַּח` | – | EE | I.4 ·
*ilittu* | `יְלִיד` | [equivalent] | | I.5 · *ašarēdu* | `בָּכִיר` | – | EE | I.5 · *tukultu* | `מִבְטָח` | – | | I.5 ·
*tuqumtu* | `תִּגְרָה` | – | Gilgameš, EE | I.7, b+73 · *qablu* | `קְרָב` | – | | I.14… · *anuntu* | `מִלְחָמָה` | – | | I.14… ·
*aguhhu* | `חֲגוֹרָה` | – | not `אבנט` | I.7 · *gallû* | `שֵׁד־גַּלָּה` | – | Etana, Erra | I.8 · *kamû* | `אָסַר`; *kām anzî* `אוסר אנזו` | – | | I.10, b+103, b+160 ·
*kasû* | `כָּפַת` | – | | I.10 · *nêru* | `קָטַל` | – | Gilgameš | I.12, b+86 · *kusarikku* | `איש־שור` | – | EE | I.12 ·
*hayyāšu*/*hiāšu* | `חָשׁ` | [cognate] | | I.14, b+102 · *ellilūtu* | `אֶנְלִילוּת` | – | | passim · *parakku* | `דּוּכָן` | – | §10.4 | I.15, b+96 ·
*bašāmu* | `תִּכֵּן` | – | | I.17 · *nagbu* | `מַעֲמַקִּים` | – | Gilgameš | I.18 · *pahāru* | `נֶאֱסַף`; *puhru* `אֲסֵפָה` | – | | I.21, b+94 ·
*utlu* | `חֹצֶן` | – | LH | I.26 · *šaššāru* | `מַשּׂוֹר` | – | Nergal | I.28 · *huršānu* | `רֶכֶס` | – | = Sum. *ḫur-saĝ* | a+32 ·
*rubûtu* | `נְסִיכוּת` | – | EE | a+33 · *gipšu* | `גָּאוֹן` | – | Theodicy | a+37 · *ašamšūtu* | `עִלְעוּל` | – | | a+38 ·
*ešû* | `שִׁבֵּשׁ` | – | `בלבל` reserved | a+39, c+198 · *ṣubbû* | `סָקַר` | – | | a+43 · *nadānu* Št | `נִדְבַּר עִם` | – | | a+44 ·
*tāwītu* | `מַעֲנֶה` | – | | a+47, b+56 · *apālu* | `עָנָה` | – | | a+47, b+100 · *anna apālu* | `"הֵן" ענה` | – | | b+56 ·
*nīlu* | `לַחוּת?` | – | | a+49 · *arû* "conceive" | `הָרָה` | – | Sargon | a+51 · *šuddulu* | `נִרְחָב` | – | | a+51 · *kāpu* | `צוּק` | – | | a+52 ·
*naparšudu* | `בָּרַח` | – | EE | a+54 · *parāku* | `חָסַם` | – | Gilgameš | a+55 · *atmanu* | `דְּבִיר` | – | EE | a+55 · *kiṣṣu* | `מָעוֹן` | – | open 2 | a+55… ·
*šubtu* | `מוֹשָׁב` | – | EE | a+39, a+55 · *māhāzu* | `מָחוֹז` | [cognate] | | b+57, b+97 · *ahāzu* (a place) | `אָחַז` | [cognate] | Etana's wife-*ahāzu* `בָּעַל` | b+57 ·
*têrtu* | `הוֹרָאָה` | – | CL | b+58, b+70 · *qiāpu* | `מָסַר` | – | EE | b+60 · *qatû* Št | `הִשְׁלִים` | – | | b+60 · *ramāku* | `טָבַל` | – | Gilgameš | b+61, b+75 ·
*naṭālu* G / Gtn | `הִבִּיט` / `הִתְבּוֹנֵן` | – | | b+62–74 · *bēlūtu* | `אֲדֹנוּת` | – | | b+63 · *ilūtu* | `אֵלוּת` | – | Gilgameš | b+63 · *nalbašu* | `לְבוּשׁ` | [cognate] | | b+63 ·
*ukkušu* | `סִלּוּק` | – | | b+66 · *hamāmu* | `קִבֵּץ` | – | not `אסף` (*pahāru*) | b+70 · *gamāru* | `גָּמַר` | [cognate] | | b+71 · *parṣu* | `פּוּלְחָן` | – | Gilgameš, EE | b+71… ·
*bêlu* | `מָשַׁל` | – | | b+71 · *kapādu* | `זָמַם` | – | EE | b+73 · *šahāṭu* | `פָּשַׁט` | – | not *pašāṭu* | b+76, b+82 · *nagāšu* | `נָדַד` | – | open 4 | b+79 ·
*šuharruru* | `דּוֹמֵם` | – | | b+81 · *namurratu* | `יִפְעָה` | – | CL | b+82 · *sahāru* Gtn | `פּוֹנֶה פעם אחר פעם` | – | | b+83 ·
*ṭēmu* | `טַעַם` ("decree") | [cognate] | by sense (flood rule) | b+83, b+89 · *milku* | `עֵצָה` | – | | b+153 · *gugallu* | `ממונה (המים)` | – | EE | b+88 ·
*neʾû* | `סָר` | – | §10.3 | b+92 · *barāqu* Š | `הִבְרִיק` | [cognate] | | b+93 · *māhiru* | `מִתְחָרֶה` | – | | b+95 · *erēbu* | `נִכְנַס` | – | | b+98 ·
*šarāhu* Gt / D | `הִתְפָּאֵר` / `מְפֹאָר` | – | | b+99, b+184 · *qibītu* | `אִמְרָה` | – | Maqlû, Ludlul | b+100 · *ṣīt pî* | `מוֹצָא פִי` | [cognate] | | b+107 ·
*arāru* | `אָרַר` | – | Gilgameš | b+108 · *ṭiṭṭiš emû* | `היה לטיט` | – | Gilgameš X 68 | b+108 · *šahāhu* | `נִרְפָּה` | – | open 5 | b+109 ·
*pasālu* | `נָטָה` | – | | b+110 · *pašāhu* | `נִרְגַּע` | – | guidelines §6.7 | b+153 · *qatāru* | `עָשֵׁן` | [cognate] | | b+154 · *dalāhu* | `עָכַר` | – | | b+154 ·
*uznu* | `בִּינָה` | – | Gilgameš | b+155, b+157 · *itpēšu* | `מְיֻמָּן` | – | EE | b+155, b+168 · *nēmequ* | `חָכְמָה` | – | | b+156 · *awû* Gt | `שָׂח` | – | | b+158… ·
*šeʾû* | `בִּקֵּשׁ` | – | CL3 | b+159 · *wadû* D | `יִעֵד` | – | | b+160, c+197 · *tarāru* | `רָעַד` | – | EE, CL | b+164 · *našāqu* | `נִשֵּׁק` | [cognate] | | b+164 ·
*māliku* / *māliktu* | `יוֹעֵץ` / `יוֹעֶצֶת` | – | Gilgameš | b+81, b+168 · *šurbûtu* | `גְּדֻלָּה` | – | | b+169 · *kanû* D | `הוֹקִיר` | – | `כבד` gated | b+170 ·
*hīrtu* | `רַעְיָה` | – | EE | b+177 · *bēltu* | `גְּבִירָה` | – | | b+178 · *rapšu irti* | `רחב החזה` | – | | b+180 · *alkakātu* | `הֲלִיכוֹת` | [cognate] | EE | c+192 ·
*ekēmu* | `חָטַף` | – | Gilgameš | c+200 · *zêru* | `שָׂנֵא` | – | | c+200.

**Names:** Dagan = `דָּגָן` ★ (Ugarit, the school canon; `דָּגוֹן` Judg 16:23 only in the apparatus; not Lipit-Ištar's
`דָּגַן`); Ninšiku `נִנְשִׁיכּוּ`; Duranki `דּוּרַנְקִי`; Šaršar `שַׁרְשַׁר`; Eninnu `אֵנִינּוּ` (Gudea); Annunītu
`אֲנוּנִיתוּ` (CL1).

**Tool (T1–T2), gates that block correct renderings (not written around):**
- T1. RESERVED_COMMON `טוב|טובה|טובים|טובות` is unanchored: it reads `טובל` "dips" (*ramāku*, b+61, b+75) as `טוב`.
  Anchor it at word start and end (or exempt `טובל`/`טובלת`/`טובלים`).
- T2. RESERVED_COMMON `ארור|ארר|אורר` (Sumerian licences only) blocks Akkadian *arāru* (`שיארר`, b+150; b+108 and
  b+129 slip through only because the bracket splits the token). Add `arāru|irrar|arrat` to its licence for the
  Akkadian keys (AN, AK, RE, ID; probably ET and CL too).
- FORMULAS for AN can now be filled from the strings above (renderings §13.3).
