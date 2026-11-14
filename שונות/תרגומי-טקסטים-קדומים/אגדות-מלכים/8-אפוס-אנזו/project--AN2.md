# Part AN2 – the Epic of Anzû, Standard Babylonian Tablets II and III (eBL L/1/10), Round 8 run 4, 2026-11-14

Translator A (resumed after AN1). Files: `annotated-II.rtl.md` (154 entries), `annotated-III.rtl.md` (155 entries); Hebrew
header paragraphs written for both.

## Progress and passes
- **All 309 entries drafted**: II.1–II.154 in five sections; III.1–51, a+52–a+77, 91–102, b+103–b+168 in four.
  Each section saved and filled (`fill AN`) as drafted.
- Repeats copied from the SB I strings (renderings §13.7.1) and within the tablets, string for string (only brackets per
  copy, and quotation marks, differ): II.24–27 = II.122–125 = II.144–147 = I.b+96–99; II.17–27 = 115–125 = 137–147
  (Mami's orders → Ea's counsel → Šarur's delivery); II.59–69 = 75–85 = 92–102 (the failed shot → Ninurta's report →
  Šarur's delivery to Ea); II.72–85 = 89–102; II.107–125 = 129–147; II.29–34 = 149–154; II.70 = 104; II.86 ↔ 126,
  88 ↔ 128. Executions in SB III use the command's words and order: III.9 ← II.108, III.10–12 ← II.109–111, III.17 ←
  II.20, III.22 ← II.18, III.42–45 command → execution. III.21 `… אל ידו השיב.` reverses I.c+201.
- `verify AN`: 510 entries; **1 problem, a gate bug** (T3 below). `check_bible_quotes.py` on both files: **0 problems**.
- Three passes: fidelity (lemma by lemma, brackets against the ATF), consistency (copied strings; `verify`'s
  "same transliteration, different Hebrew" list is empty after unifying quotation marks), Hebrew read through.

### Parallels index (AN2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| II.10 | *tulul qašta šukudu imta libilšu* | דְּרֹךְ קשת, החצים – חֵמָה יביאו לו! | `קַשְׁתּוֹ דָרַךְ וַיְכוֹנְנֶהָ` (תהלים ז:יג); `כִּי חִצֵּי שַׁדַּי עִמָּדִי אֲשֶׁר חֲמָתָם שֹׁתָה רוּחִי` (איוב ו:ד) | [cognate] / [equivalent] | *qaštu* ~ קשת, *imtu* ~ חֵמָה: the god's poisoned arrows. |
| II.12 | *zīmīka* | זיווך | `זִיוֹהִי שְׁנוֹהִי` (Dan 5:6, in a note) | [cognate] | *zīmu* ~ Aram. זיו. |
| II.15–16 | *ai ippuha šamšu … ūmu namru ana daʾummati litūršu* | אל תזרח השֶּׁמֶשׁ עליו, / היום הבהיר – לאפלה ישוב לו! | `וְהֵבֵאתִי הַשֶּׁמֶשׁ בַּצָּהֳרָיִם וְהַחֲשַׁכְתִּי לָאָרֶץ בְּיוֹם אוֹר` (עמוס ח:ט); `שֶׁמֶשׁ וְיָרֵחַ קָדָרוּ` (יואל ב:י) | [equivalent] | Darkening the day as a war weapon. |
| II.18 | *ana busrati* | לבשורה | `אִישׁ טוֹב זֶה וְאֶל בְּשׂוֹרָה טוֹבָה יָבוֹא` (שמואל ב יח:כז) | [cognate] | Feathers as the victory message (fulfilled III.22). |
| II.30 | *uštaṣbit sebet qablī* | רתם שבעה קרבות | `וַיִּשְׁלַח חִצָּיו וַיְפִיצֵם וּבְרָקִים רָב וַיְהֻמֵּם` (תהלים יח:טו) | [equivalent] | The storm-warrior god. |
| II.35 | *ina šahāt šadî* | בצלע ההר | `וְשִׁמְעִי הֹלֵךְ בְּצֵלַע הָהָר` (שמואל ב טז:יג) | [equivalent] | Same phrase. |
| II.37 | *igṣuṣ* | חרק (שיניו) | `חָרֹק עָלַי שִׁנֵּימוֹ` (תהלים לה:טז) | [equivalent] | |
| II.55 | *ibarriq uṣṣī* | בורקים הרשפים | `שָׁמָּה שִׁבַּר רִשְׁפֵי קָשֶׁת` (תהלים עו:ד); `לְאוֹר חִצֶּיךָ יְהַלֵּכוּ לְנֹגַהּ בְּרַק חֲנִיתֶךָ` (חבקוק ג:יא) | [equivalent] | Flashing arrows. |
| II.59 | *itlul qašta qanâ umalli* | דרך קשת, קנה מילא | `כִּי דָרַכְתִּי לִי יְהוּדָה קֶשֶׁת מִלֵּאתִי אֶפְרַיִם` (זכריה ט:יג); `וְיֵהוּא מִלֵּא יָדוֹ בַקֶּשֶׁת` (מלכים ב ט:כד) | [cognate] | Both idioms, "tread the bow" and "fill the bow", in one line, as in Zech 9:13. |
| II.61 | *qanû ittūra* | הקנה שב | `חֵץ תְּשׁוּעָה לַיהוָה` (מלכים ב יג:יז) | [divergence] | An arrow as a sign; here it turns back. eBL's lemma *tarû* is a slip for *târu*. |
| II.65 | *šerʾānu* | הגיד | `גִּיד הַנָּשֶׁה אֲשֶׁר עַל כַּף הַיָּרֵךְ` (בראשית לב:לג) | [equivalent] | |
| II.110 | *nukkis abrīšu* | כרות את אברותיו | `הַנֶּשֶׁר הַגָּדוֹל גְּדוֹל הַכְּנָפַיִם אֶרֶךְ הָאֵבֶר מָלֵא הַנּוֹצָה` (יחזקאל יז:ג) | [divergence] | The great bird's power is its pinions. |
| II.113 | *lillikū qanû berqī* | ילכו הקנים, ברקים | `וְיָצָא כַבָּרָק חִצּוֹ` (זכריה ט:יד) | [equivalent] | Lightning arrows. |
| III.8 | *zuʾt tamhāri* | בזיעת העימות | `בְּזֵעַת אַפֶּיךָ תֹּאכַל לֶחֶם` (בראשית ג:יט) | [cognate] | *zūtu* ~ זֵעָה. |
| III.29 | *lizziz itti ilī … pirišta lišme* | יעמוד עם האלים אחיו, וסוד ישמע | `כִּי מִי עָמַד בְּסוֹד יְהוָה וְיֵרֶא וְיִשְׁמַע אֶת דְּבָרוֹ` (ירמיהו כג:יח); `כִּי אִם גָּלָה סוֹדוֹ אֶל עֲבָדָיו הַנְּבִיאִים` (עמוס ג:ז) | [equivalent] | Standing in the gods' council and hearing its secret: the same two verbs. |
| III.39 | *liškuna ina burkīka* | ישים בברכיך | `וְתֵלֵד עַל בִּרְכַּי` (בראשית ל:ג); `יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (בראשית נ:כג) | [cognate] / [equivalent] | Placing on the knees as an act of possession. |
| III.b+107 | *qarrādu … šadî tanarra* | גיבור … הרים קוטל אתה | `וַיִּקְרָא שְׁמוֹ פֶּלֶא יוֹעֵץ אֵל גִּבּוֹר` (ישעיהו ט:ה) | [equivalent] | Names of honour for the victorious hero (b+117–142). |
| III.b+111 | *kullat nakirī tušakniša ana šēpī abīka* | את כלל האויבים הכנעת לרגלי אביך | `עַד אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | [equivalent] | |
| III.b+115 | *mannu ša kīma kâta* | מי כמוך | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | [equivalent] | A real *kīma* "like you" here, unlike I.b+103 (*kām* "binder"). |
| III.b+117 | *imbû* | קראו | `וְכֹל אֲשֶׁר יִקְרָא לוֹ הָאָדָם נֶפֶשׁ חַיָּה הוּא שְׁמוֹ` (בראשית ב:יט) | [cognate] | *nabû* = קָרָא; naming as power. |
| III.b+119 | *rēʾût nišī* | רועוּת האנשים | `אַתָּה תִרְעֶה אֶת עַמִּי` (שמואל ב ה:ב) | [equivalent] | |

## Key findings
**The ancient mind.** (1) The word is the weapon: Anzû, holding the tablet, unmakes the arrow by sending each part
back to its source (reed to reed-bed, wood to forest, sinew to beast, feather to bird, II.63–65): matter obeys
the word of whoever holds the destinies; Ea's counsel turns the same word against him ("Feather to wing!" – and the
feathered shaft flies to him, III.13). (2) Messages travel word for word: command → report → delivery → execution
(II.71–147, III.9–22), and the epic's form is this fidelity. (3) The darkness of the fight (sun into gloom, II.15–16,
51) and the "deluge-worthy" battle make the duel a cosmic storm; Ninurta is also the god of waters (III.102 *mīlu*).
(4) The prize is names: a god of one city becomes the god of all (b+117–142: Ningirsu, Inšušinak, Zababa,
Lugalbanda …) – theology by accumulation of names, like Marduk's fifty names. (5) The victor hesitates to give the
tablet back (a+71–a+77, broken): the danger of the object outlives the thief.

**Bible.** Zech 9:13 has both bow idioms of II.59 (`דָּרַךְ … קֶשֶׁת`, `מִלֵּא`); Jer 23:18 has III.29's "stand in the
council and hear"; Isa 9:5's throne-names and Ps 110:1's enemies at the father's feet; Gen 3:19's sweat (*zūtu*).
**Corrected rank-3 readings:** III.b+115 is a real "who is like you" (*kīma kâta*), where I.b+103 was not; Foster's
"conquer/defeat" for *kamû* is "bind" throughout (II.5, 17, 69; III.a+62, b+108); "firstborn" for *bukru* (II.57).

## Open decisions
1. II.1 *biriq*: eBL lemmatizes the noun *berqu*; rendered as the imperative `בְּרֹק` (Foster too).
2. II.36 *irūbaššu*: eBL *erēbu*; rendered with Foster as *raʾābu* `רגז` (the form fits both).
3. III.25 *uttaʾʾar*: eBL *naʾāru* "roar"; rendered as *nêru* D `קטל` (Foster "slain").
4. III.b+133 *nabâta*: eBL *nebû* "shine" followed (`*זוהרת*`); eBL Lab's "you are called" (*nabû*) in the note –
   it would need the `קרא` gate's licence.
5. II.64 *mummu* `*גוף*`, II.65 *šašallu* `*גב*`, II.109 / III.10 *ana arkat šukudīka* – uncertain, italic.
6. Two Hebrew words for *šanû*: Akk. *šanû* "change / repeat" = `שָׁנָה` / `שִׁנָּה` [cognate] here, but renderings §0.3
   gives `שִׁנָּה` to *nakāru* (and Sum. *kur₂*). By the cognate rule *šanû* should keep it; the lead decides.
7. *tāhāzu* = `מַעֲרָכָה` (Maqlû has `מלחמה`, which here is *anuntu*'s since AN1).

## Proposals for the corpus renderings
**Fixed strings (later copies, AN3 included, copy them):**

| Source | Hebrew | Lines |
|---|---|---|
| *šūrih napšassu anzâ kumū-ma* | `הַשְׁמֵד את נפשו – את אנזו אֱסֹר,` | II.17, 115, 137 |
| *šārū kappīšu ana busrati liblūni* | `הרוחות – את כנפיו לבשורה יביאו הנה,` | II.18, 116, 138 |
| *bītuš ēkur ana ṣēr abīka ellil* | `הביתה, אל אֵכּוּר, אל אביך אנליל.` | II.19, 117, 139 |
| *šadî qerbīssunu rihiṣ dullih-ma* | `את ההרים, את קרבם – שְׁטֹף, עַכֵּר,` | II.20, 140 (118 `קרבו`) |
| *lemna anzâ ikis napšassu* | `את אנזו הרע – כְּרֹת את נפשו!` | II.21, 119, 141 |
| *šarrūtu līruba ana ēkur* / *ana abi ālidīka litūrū parṣū* | `המלכות תיכנס אל אֵכּוּר,` / `אל האב מולידך – ישובו הפולחנים!` | II.22–23, 120–121, 142–143 |
| Anu's promise (I.b+96–99) | as AN1; II.27, 125, 147 without `ו` (*-(ma)* only in some MSS) | II.24–27, 122–125, 144–147 |
| *zikir ummīšu išme qurādu* | `את מאמר אמו שמע הגיבור,` | II.28 |
| *igrur irtaʾub šadûssu igguš* | `*התפתל*, רגז – ואל הרו נדד.` | II.29, 149 |
| II.30–34 (harnessing) | `האדון רתם שבעה קרבות,` / `הגיבור רתם שבע רוחות־רעה,` / `מעוררות העפר – שבעה עלעולים.` / `הניע מדון נורא, התגרה תגרה,` / `לעימות – לצדו – קשבו הנשיבות.` | II.30–34, 150–154 |
| the shot (II.59–69) | `דרך קשת, קנה מילא,` / `מחזה הקשת – קנה הביא אליו;` (76 `דרך קשת, קנה הביא אליו;`) / `לא קרב אל אנזו – הקנה שב.` / `אנזו – קרא עליו:` / `"קנה, אשר הלכת – שוב אל אגמך,` / `*גוף* הקשת – אל יערותייך,` / `הגיד – אל *גב* האיל, הכנף – אל הציפורים – שובו!"` / `נושא הוא את לוח גורלות האלים בידו;` / `הביאו המיתר, השלח – לא קרבו אל גופו.` / `דמם הקרב, נכלאה התגרה,` / `בטלו הנשקים – בקרב ההר את אנזו לא אסרו.` | II.59–69, 75–85, 92–102 (OB III 17 ~ 63) |
| the report | `האדון נינורתה – את אנזו סבב,` / `נינורתה – חגור עפר הקרב,` / `הגיבור – חגור עפר הכליון;` | II.72–74, 89–91 |
| messenger formulas | `הצעיק את שָׁרוּר, דבר ציווה עליו:`; `שָׁרוּר השתחווה, לקח את ההוראה,`; `את מלאכת המערכה נטל – אל …`; `את כל אשר … סיפר (לו) – … שִׁנָּה (לו):` | II.70, 104; 86, 126; 87, 127; 88, 128 |
| Ea's counsel | `הקרב אל ינוח – שִׂים את תשועתך!` / `הַעֲיֵף אותו, ובמפגש הסופות – את אברו ישליך!` / `יקח האדון – *אל אחורי חציך*,` / `כרות את אברותיו, ימין, שמאל – הַתֵּז!` / `יביט בכנפו – ויִטֹּל מאמר פיו;` / `"כנף אל כנף!" – יקרא; אל תירא ממנו!` / `דרוך – מחזה קשתך ילכו הקנים, ברקים;` / `אבר, כנף – *כאלה של דם* – ירקדו;` | II.107–114, 129–136 |
| the execution | `עייף – אנזו, ובמפגש הסופות – את אברו השליך.` / `לקח האדון – *אל אחורי חציו*,` / `כרת את אברותיו, ימין ושמאל – התיז.` / `הביט בכנפיו – ונטל מאמר פיו;` | III.9–12 |
| the victory | `הגיבור נינורתה את לוח גורלות האלים אל ידו השיב.` | III.21, 37 |
| *X pâšu īpuš-ma iqabbi* / *ana Y amāta izakkar* | as AN1 (`X פתח את פיו ואמר,` / `אל Y דבר דיבר:`) | III.32–33, 40–41, 46–47, a+53–54, a+57–58 |
| naming | `את שמך … נתנו …`; `… קראו …` (*nabû* `קָרָא`); `… יאמרו לך` (*qabû*) | III.b+117–142 |

**Terms:** listed in the two headers' **מלים שמורות** (II: *qaštu* `קֶשֶׁת`, *talālu* `דָּרַךְ`, *qanû* `קָנֶה`, *šukudu*
`חֵץ`, *šiltāhu* `שֶׁלַח`, *ūṣu* `רֶשֶׁף`, *matnu* `מֵיתָר`, *imtu* `חֵמָה`, *uggatu* `קֶצֶף`, *bussurtu* `בְּשׂוֹרָה`, *šanû* D
`שִׁנָּה`, *dabābu* `סִפֵּר`, *tāhāzu* `מַעֲרָכָה`, *tamhāru* `עִמּוּת`, *anantu* `מָדוֹן`, *imhullu* `רוּחַ־רָעָה`, *mehû* `סוּפָה`,
*rahāṣu* `שָׁטַף`, *lītu* `תְּשׁוּעָה`, *anāhu* `עָיֵף`, *zīmu* `זִיו`, *daʾummatu* `אֲפֵלָה`, *karāšu* `כִּלָּיוֹן`, *kalû* `כָּלָא`,
*baṭālu* `בָּטֵל`, *šukênu* `הִשְׁתַּחֲוָה`, *diāšu* `דּוּשׁ`, *melemmu* `זֹהַר`, *tabālu* `נָטַל`, *lawû* `סָבַב`, *ebēhu* `חָגַר`,
*sehû* D `טִלְטֵל`, *dekû* `הֵנִיעַ`, *gummurtu* `שְׁלֵמוּת`, *nanduru* `נוֹרָא`, *raʾābu* `רָגַז`, *birbirrū* `שְׁבִיבִים`,
*šalummatu* `הוֹד`, *apluhtu* `שִׁרְיוֹן`, *imbaru* `עֲרָפֶל`, *būnu* `תֹּאַר`, *apu* `אֲגַם`, *mithuru* `מִפְגָּשׁ`, *mēlulu* `רָקַד`;
III: *zūtu* `זֵעָה`, *ittu* `אוֹת`, *pirištu* `סוֹד`, *nigûtu* `רִנָּה`, *burku* `בֶּרֶךְ`, *šukkallu* `וָזִיר`, *rābiṣu*
`רוֹבֵץ`, *kanāšu* Š `הִכְנִיעַ`, *qarādu* `גָּבַר`, *šarāku* `הִקְנָה`, *narbû* `רוֹמְמוּת`, *rēʾûtu* `רוֹעוּת`, *šūturu*
`יָתִיר`, *kâṣu* `קִלֵּף`, *dulhānu* `עֲכִירוּת`, *mīlu* `גֵּאוּת`, *pulukku* `יָתֵד`, *dalālu* `הִלֵּל`, *alāku* Š `הוֹלִיךְ`).
**Names:** Šarur `שָׁרוּר` ★, Birdu `בִּרְדוּ`, Nusku `נוּסְכּוּ`, and the names of SB III (header of `annotated-III`).

**Tool:**
- T3. RESERVED_COMMON `ברך|ברכ|…` is unanchored: it reads `בברכיך` "on your knees" (*burku*, III.39) as ברך "bless".
  Anchor it, or license by *burku*.
- Lemma slips that a gate may meet later: II.61 *ittūra* lemmatized *tarû* (it is *târu*: the `שוב` gate passed only
  because `שב` is not in its forms); II.86 *uškīn* lemmatized *kânu* (*šukênu*); III.b+111 *tušakniša* lemmatized
  *šakānu* (*kanāšu*).
