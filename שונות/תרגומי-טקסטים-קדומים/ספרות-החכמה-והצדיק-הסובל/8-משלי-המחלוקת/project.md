# Project 8: the Babylonian fables and contests (eBL L/2/8, 9, 11, 12, 13)

Round 5, run 5 (2026-10-31). Keys **PV** (Palm and Vine), **PO** (the Poplar), **OH** (Ox and Horse), **SP** (the
Spider), **WR** (the Wren); files `annotated-<KEY>.rtl.md`, intros `translation--intro-<KEY>.rtl.md`, head
`translation--head.rtl.md`; built by `../wisdom_tools.py build`. Renderings: `../renderings.md` (§12 for this run);
brief `../translator-brief--round5-run5.md`.

## Scope and base
All five eBL chapters, 454 labels: Palm and Vine (`L/2/12`, 54; ed. and tr. Jiménez), the Series of the Poplar (`L/2/8`,
82), the Series of Ox and Horse (`L/2/9`, 217), the Series of the Spider (`L/2/11`, 59), the Story of the Poor, Forlorn
Wren (`L/2/13`, 42) – `../../sources/eBL/Fable-*/`, fetched 2026-10-31, no empty **N:** lines. Rank 3: eBL's English
(Jiménez). Not available: Jiménez 2017 (*The Babylonian Disputation Poems*, the print edition: a purchase; records only),
Lambert 1960 (*BWL*).

## Why
Judg 9:8–15 (the trees and their king), 2 Kgs 14:9, Ezek 17 (the plant and eagle fables); the Wren and the Eagle
against Etana; the disputation genre (Sumerian contests in the creation corpus).

## Order
PV, PO (Judg 9 first), OH, SP, WR.

## Progress
- 2026-10-31: set up by the coordinator (keys in `wisdom_config.py`, renderings §12).

## PV

### Scope
Palm and Vine (eBL `L/2/12`, ed. and tr. E. Jiménez), all 54 labels (1'–54'): the end of Palm's speech (1'–28'), the
transition (29'–30'), Vine's (Wine's) answer (31'–54'); the beginning and the end (Palm's second speech, any verdict) are
lost. Manuscripts: three Hellenistic library tablets from Uruk (UrkHel1, the main witness for 4'–54'; UrkHel2, the only
witness for 1'–3'; UrkHel3) and a Late Babylonian school tablet (BabaLBSch1). File `annotated-PV.rtl.md`; intro
`translation--intro-PV.rtl.md`; generated `translation-PV.rtl.md`.

### Sources consulted
eBL reading edition, ATF, glossary (`../../sources/eBL/Fable-Palm-and-Vine/`); Jiménez's English (rank 3, read after the
draft of each line). The corpus renderings (§1–§12), the Theodicy (Th1 1, 32, 55, 56), the Šamaš Hymn, the Dialogue of
Pessimism, the Poor Man, Gilgameš, and the cross-corpus survey (`tools/harmonize_survey.py`) for every new word.
Not available: Jiménez 2017 (the print edition, with its commentary).

### Decisions
- **The contestants as names, without the article** (the Sumerian contests' rule, creation corpus §9.1): *arhānû* =
  `דֶּקֶל` (a lexical-list word; `תָּמָר` stays *gišimmaru*'s: Theodicy 56, PO d+17); *karānu* = `יַיִן` (every corpus
  has *karānu* = `יין`: Ludlul V 58, Gilgameš XI 73, EST, Maqlû; the speaker presents himself as a drink, 33', 36'; both
  manuscripts write {giš}GEŠTIN, the plant – noted at 29'). Rejected: `גֶּפֶן` (it would split *karānu* across the corpora
  and blur Judg 9:12–13's own split `גֶּפֶן` / `תִּירוֹשׁ`). The modern title "הדקל והגפן" (wisdom_config) is Jiménez's
  and stays the work's name; the intro's title is `הדקל והיין`.
- **Formulas** (fixed here, for OH/SP/WR): self-presentation *anākū-ma X* = `אני – X,` (2', 33'); the speech formula
  *īpuš-ma pâšu izzakkar ana šuāši* = `פתח את פיו, ואליו דיבר:` (30'; Gilgameš's `פתח את פיו ואמר, אל Y דיבר:` without
  *iqabbi*); *gana luqbīka* = `בוא, אוֹמְרָה לך` (31', = Theodicy 1); the contest verbs *šanānu* = `התחרה`, *maṣû* Št =
  `השתווה` (27'); *ṣāltu* = `ריב`, *ṣâlu* = `רב` (28', 32'); *ṭapālu* D = `הוציא דיבה` (31'–32').
- **Shade, rest, refuge:** *ṣillu ṭābu* = `צל טוב` [cognate twice; Hos 4:13]; *emēdu* (7') = `נשען`, not `חסה`
  (Jiménez's "seeks refuge" would import Judg 9:15's `חֲסוּ`): a split by sense from the Poor Man's *emēdu* `השית`.
  *rabābu* Š "relax" = `התרפה` (5'–6'; `נח` is *nâḫu*'s, `נרגע` *pašāḫu*'s).
- **The cult:** *šuluḫḫu* = `טקס רחיצת־הידיים` (12'); *upuntu* = `קמח־האוּפּוּנְתּוּ` (23', as *maṣḫatu* `קמח־מַצְחַתּוּ`;
  `מנחה` not used); *ginû* = `מנה קבועה` (24'; `קרבן־התמיד` is *sattukku*'s, 10'); *ušurtu* (34') = `מַעַשְׂרוֹת?` – see
  the open decision; *gagû* = `הַגָּגוּ` (38', transliterated).
- **Other words:** *lulīmu* = `יַחְמוּר` (Deut 14:5; `אַיָּל` reads "ram"); *ummānu* = `ההמון` (8', the corpus word, here
  "army"); *anḫūtu* = `עייפות`; *ṭaḫādu* D = `השפיע`; *gamāru* D = `גמר` (`שלם` is gated); *balu* + suffix = `זולת`;
  *parāsu* = `פרס` [cognate, Isa 58:7]; *tiʾūtu* = `מזון`; *ḫišiḫtu* = `מצרכים`; *šiāḫu* = `גבה`; *ṣimittu* = `צמד`
  [cognate]; *malallû* = `דוברה`; *išpartu* = `אורגת`; *qû* "thread" = `חוט` (by sense; the cognate `קַו` noted); *aru*
  (palm frond) = `כפה` (Lev 23:40); *šušāru* = `פתיל`; *eblu* = `חבל` [cognate]; *pasuttu* = `רשתית` (a new net word:
  the nets stay one Hebrew per lemma, §11.8, §11.10); *usandû* = `צייד־הציפורים`; *ṭawû* = `שזר`; *itinnu* = `בנאי`;
  *gušūru* = `קורה`; *āriru* = `טוחן`; *ḫamāṭu* Š = `החיש`; *tarāṣu* D stat. = `מתוח`; *šurbû* = `מרומם` (`נעלה` is
  *ṣīru*'s); *nibītu* = `כינוי`; *šalṭiš* = `כשליט` [cognate]; *âru* = `ניגש`; *muṣṣālu* = `מריב`; *ḫuršānu* = `הרים`;
  *qû* (measure) = `קַב`; *ḫiāqu* = `מזג`; *markasu* = `קשר`; *baʾūlātu* = `נתינים`; *elēṣu* D = `העליץ` [cognate];
  *nabāṭu* Š = `הבהיק`; *tiqnu* = `עדיים`; *rēma rašû* = `רחמים קנה` (literal); *puqqu* = `קשוב`; *liʾbu* = `קדחת`
  (Deut 28:22; `חום` is *ummu*'s); *abāru* III = `חבק` (41', 47'); *šibṭu* = `מכה` (`מגפה` avoided: נגף is *nakāpu*'s);
  *zabālu* D "linger" = `השהה` (by sense; G = `סבל`); *arāmu* = `עטה` (and *katāmu* = `כיסה`, PO c+37); *matāqu* D =
  `המתיק` [cognate]; *lallaru* = `מיילל` (`מקונן` would collide with *damāmu* `קונן`); *nubû* = `נהי` (Jer 9:17);
  *ṣarāpu* D = `צרב`; *nabû* D "wail" = `יבב` (`קרא` stays *nabû* G's); *ramû* = `רפה`; *kasû* = `כפות`; *šurruḫu* =
  `גאה`; *lullû* = `מעודן`; *lammu* = `שָׁקֵד`; *adāru* = `אֲדָרוּ` (transliterated; `צפצפה` is *ṣarbatu*'s); *nīlu* =
  `שוכב`.

### Open decisions for the user
1. *ušurtu* (34'): eBL's lemma is "group of ten", Jiménez translates "the tithe"; drafted `מַעַשְׂרוֹת?` [cognate, with
   `?`]. Alternative: `העשיריות` (neutral). The tithe of wine (Deut 14:23, 26) makes it a strong parallel if right.
2. *arhānû* = `דֶּקֶל` collides with Sumerian *ĝišimmar* = `דקל` in other corpora (Gudea A xxvi 2, Lipit-Ištar 133'–135',
   EWO 241), while the wisdom corpus has *gišimmaru* = `תָּמָר`: a cross-corpus split for the next harmonization (if
   *ĝišimmar* moves to `תמר`, `דקל` is free for *arhānû*).
3. *karānu* = `יין` throughout (the contestant "Wine"), with the modern title "הדקל והגפן"; alternative: `גֶּפֶן` for
   the contestant only (a split by sense).
4. 37' *irâš*: eBL lemmatizes *riāšu* "rejoice" (drafted `וגל ברינה`), Jiménez translates "asks for" (*erēšu*).
5. 42' "I bring back from the netherworld plague (and) Namtar": drafted with Jiménez's reading ("(מוכה)" added); MS
   UrkHel1 reads "I send back to the netherworld".

### Progress log
- 2026-10-31: drafted 1'–54' in four saved sections (1'–15', 16'–28', 29'–35', 36'–54'), source lines by `fill`.
- Pass (a) fidelity: brackets checked against the ATF (6' partial, 28' restored, 30' and 32' suffixes not bracketed, 50'
  `ל[פנים]`); 22' the scribe's omitted *ina* marked `⟨ב⟩`; the eBL note on UrkHel3's variant moved from 24' to 34'
  (where it belongs); 29' the {giš} determinative noted.
- Pass (b) consistency: formulas and the Palm quotations (3'/51', 4'/52', 9'/52') checked; *arāmu* changed `כיסה` →
  `עטה` (44') to keep `כיסה` for *katāmu* (PO c+37); `wisdom_tools.py lemma` / `harmonize_survey.py heb` on every new word.
- Pass (c) Hebrew: the generated `translation-PV.rtl.md` read aloud; 49' `באישון לילה` → `בעת הלילה` (no "dead of night"
  in *šāt mūši*); intro: Šamaš vocalized.
- `verify PV --strict`: 0 problems; `check_bible_quotes.py`: 0 (two mismatches fixed: Dan 1:20 `הָאַשָּׁפִים`, Gen 42:6
  `הַשַּׁלִּיט`). Four footnotes (7', 26', 34', 36').

### Parallels index (PV)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3' | *šīhāku lāna* | גבוה אני בגוף | `זֹאת קוֹמָתֵךְ דָּמְתָה לְתָמָר` (שיר השירים ז:ח) | [equivalent] | The palm's stature; the Akkadian has *lānu* "body", not *gattu* "stature". |
| 5' | *ina šaplīya rēʾû u kaparru ušarbabū* | תחתיי – הרועה ונער־הרועה … מתרפים | `וְתַחַת פֹּארֹתָיו יָלְדוּ כֹּל חַיַּת הַשָּׂדֶה; וּבְצִלּוֹ יֵשְׁבוּ כֹּל גּוֹיִם רַבִּים` (יחזקאל לא:ו) | [equivalent] | The great tree sheltering men and beasts; in Ezekiel (and Dan 4:9) an image of empire. |
| 7' | *ina ṣillīya ṭābi* | בצלי הטוב | `תַּחַת אַלּוֹן וְלִבְנֶה וְאֵלָה כִּי טוֹב צִלָּהּ` (הושע ד:יג) | [cognate] | *ṣillu* / `צֵל` and *ṭābu* / `טוֹב`: the same phrase, "good shade". |
| 7' | *ina ṣillīya … immid lulimmu* | בצלי הטוב – נשען היחמור | `בֹּאוּ חֲסוּ בְצִלִּי` (שופטים ט:טו) | [divergence] | Jotham gives the shade-offer to the bramble that has none; here the palm boasts of real shade. Jiménez's "seeks refuge" would manufacture `חסה`: the verb is *emēdu* "lean". |
| 7' | *lulimmu* | היחמור | `אַיָּל וּצְבִי וְיַחְמוּר` (דברים יד:ה) | [equivalent] | The red deer. |
| 9' | *ana inbīya ṣayyahūti iriššā apâtu* | על תנובתי המענגת – גלים הרבים | `הֶחֳדַלְתִּי אֶת מָתְקִי וְאֶת תְּנוּבָתִי הַטּוֹבָה` (שופטים ט:יא) | [equivalent] | The fig's produce in Jotham's fable; *inbu* = `תנובה`. |
| 10' | *uṭahhad paššūr ilī* | משפיע אני על שולחן האלים | `הֶחֳדַלְתִּי אֶת דִּשְׁנִי אֲשֶׁר בִּי יְכַבְּדוּ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:ט) | [equivalent] | The tree's gift to the gods; the palm feeds both gods (10') and men (9', 13'–15'). |
| 12' | *gimir šuluhhi* | כל טקס רחיצת־הידיים | `וְרָחֲצוּ אַהֲרֹן וּבָנָיו מִמֶּנּוּ אֶת יְדֵיהֶם וְאֶת רַגְלֵיהֶם` (שמות ל:יט) | [equivalent] | Hand-washing before the sacred; in Babylon with palm (and tamarisk) in the water. |
| 13' | *aparras teʾûta* | פורס אני מזון | `הֲלוֹא פָרֹס לָרָעֵב לַחְמֶךָ` (ישעיהו נח:ז) | [cognate] | *parāsu* / `פרס` "dole out food". |
| 14' | *kurunna napšat nišī* | סובא מובחר – נפש האנשים | `וְיַיִן יְשַׂמַּח חַיִּים` (קהלת י:יט) | [equivalent] | The drink as "life"; = Theodicy 32 (the same phrase). |
| 16' | *ana epinnīšu ubbala ṣimitta* | אל מחרשתו מביא את הצמד | `לֹא תַחֲרֹשׁ בְּשׁוֹר וּבַחֲמֹר יַחְדָּו` (דברים כב:י) | [equivalent] | *ṣimittu* ~ `צֶמֶד` [cognate]. |
| 19' | *arūʾa* | כפותיי | `כַּפֹּת תְּמָרִים` (ויקרא כג:מ) | [equivalent] | Palm fronds; in Babylon raw material for rope. |
| 21' | *ana gišparrīšu iṭammi ebla* | לפחו שוזר חבל | `טָמְנוּ גֵאִים פַּח לִי וַחֲבָלִים פָּרְשׂוּ רֶשֶׁת לְיַד-מַעְגָּל` (תהלים קמ:ו) | [cognate] | *eblu* / `חֶבֶל` beside *gišparru* = `פַּח` [equivalent]; also `הֲתִפֹּל צִפּוֹר עַל פַּח הָאָרֶץ` (עמוס ג:ה). |
| 24' | *ana paššūr ilī u šarri* | אל שולחן האלים והמלך | `הַמְשַׂמֵּחַ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:יג) | [divergence] | Jotham's "gods and men" against the Babylonian "gods and king". |
| 25' | *turruṣā dalātūʾa* | מתוחות דלתותיי | `וּשְׁתֵּי דַּלְתוֹת עֲצֵי שֶׁמֶן וְקָלַע עֲלֵיהֶם מִקְלְעוֹת כְּרוּבִים וְתִמֹרֹת` (מלכים א ו:לב) | [divergence] | Solomon's temple doors carry carved palms; here the doors are palm wood. |
| 26' | *šurbâkū-ma eli kal iṣṣī nibīt šumīya šarra* | מרומם אני על כל העצים: כינוי שמי – 'מלך'! | `הָלוֹךְ הָלְכוּ הָעֵצִים לִמְשֹׁחַ עֲלֵיהֶם מֶלֶךְ` (שופטים ט:ח) | [divergence] | **Key:** the trees and kingship. In Jotham's fable the useful trees refuse kingship because of their gifts; here the palm claims it because of them. |
| 26' | *eli kal iṣṣī … šarra* | על כל העצים … מלך | `הַחוֹחַ אֲשֶׁר בַּלְּבָנוֹן שָׁלַח אֶל הָאֶרֶז אֲשֶׁר בַּלְּבָנוֹן` (מלכים ב יד:ט) | [equivalent] | The plant fable of rank (Jehoash). |
| 28' | *šalṭiš* | כשליט | `וְיוֹסֵף הוּא הַשַּׁלִּיט עַל הָאָרֶץ` (בראשית מב:ו) | [cognate] | *šalāṭu* / `שׁלט`. |
| 29' | *karānu* | יַיִן | `וַיֹּאמְרוּ הָעֵצִים לַגָּפֶן` (שופטים ט:יב) | [divergence] | *karānu* is vine and wine at once; Jotham's fable separates `גֶּפֶן` / `תִּירוֹשׁ`. |
| 31' | *muṭappilu* | מוציא־דיבה | `וּמוֹצִא דִבָּה הוּא כְסִיל` (משלי י:יח) | [equivalent] | *ṭapālu* / *ṭapiltu* = `דִּבָּה` (corpus §3). |
| 33' | *šikar hursanni* | שֵׁכָר ההרים | `תְּנוּ-שֵׁכָר לְאוֹבֵד; וְיַיִן לְמָרֵי נָפֶשׁ` (משלי לא:ו) | [cognate] | *šikaru* / `שֵׁכָר`; wine and beer as a pair. |
| 34' | *ušhāq ušrāti* | מוזג אני את המַעַשְׂרוֹת? | `מַעְשַׂר דְּגָנְךָ תִּירֹשְׁךָ וְיִצְהָרֶךָ` (דברים יד:כג) | [cognate] | Conditional: *ušurtu* (eBL "group of ten"; Jiménez "tithe") from *ešer* "ten"; the tithe of wine eaten "before YHWH" (Deut 14:23, 26). Also `וְלַמַּעַשְׂרוֹת` (נחמיה יב:מד). Rests on Jiménez's reading. |
| 36' | *ullaṣ kabattašu ušnabbaṭ zīmīšu* | מעליץ אני את כבדו, מבהיק את זיוו | `וְיַיִן יְשַׂמַּח לְבַב-אֱנוֹשׁ` (תהלים קד:טו) | [equivalent] | **Key:** the same pair – the heart (Akk. liver) and the face (Ps 104:15b `לְהַצְהִיל פָּנִים מִשָּׁמֶן`) – said of a god here. |
| 36' | *ullaṣ* | מעליץ | `עָלַץ לִבִּי בַּיהוָה` (שמואל א ב:א) | [cognate] | *elēṣu* / `עלץ`. |
| 36' | *ullaṣ kabattašu* (of Šamaš) | מעליץ אני את כבדו | `הַמְשַׂמֵּחַ אֱלֹהִים וַאֲנָשִׁים` (שופטים ט:יג) | [equivalent] | Wine gladdens the god too. |
| 38' | *irašši rēma* | רחמים קונה | — | [cognate] | *rēmu* / `רַחֲמִים` (corpus §2). |
| 41' | *liʾbu* | קדחת | `יַכְּכָה יְהוָה בַּשַּׁחֶפֶת וּבַקַּדַּחַת` (דברים כח:כב) | [equivalent] | Fever. |
| 45' | *ina erši namtarīšu agammil napšassu* | על ערש נמתרו – חומל אני על נפשו | `תְּנוּ-שֵׁכָר לְאוֹבֵד; וְיַיִן לְמָרֵי נָפֶשׁ` (משלי לא:ו) | [divergence] | In Proverbs wine makes the dying forget (`יִשְׁתֶּה וְיִשְׁכַּח רִישׁוֹ`, משלי לא:ז); here it brings them back from death. |
| 45' | *ina erši* | על ערש | `יְהוָה יִסְעָדֶנּוּ עַל-עֶרֶשׂ דְּוָי` (תהלים מא:ד) | [cognate] | *eršu* / `עֶרֶשׂ`. |
| 44' | *ana qabri* | אל הקבר | — | [cognate] | *qabru* / `קֶבֶר`. |
| 46' | *umattaq lallara … nubûšu* | ממתיק אני את המיילל … נהיו | `וְקִרְאוּ לַמְקוֹנְנוֹת וּתְבוֹאֶינָה` (ירמיהו ט:טז) | [equivalent] | Professional mourners and their wailing (`וְתִשֶּׂנָה עָלֵינוּ נֶהִי`, ירמיהו ט:יז); *matāqu* / `מתק` [cognate] (Judg 9:11 `מָתְקִי`). |
| 50' | *illak ina pān ṣābī* | הולך בפני הצבא | `אֲשֶׁר יֵצֵא לִפְנֵיהֶם וַאֲשֶׁר יָבֹא לִפְנֵיהֶם` (במדבר כז:יז) | [equivalent] | The leader; *ṣābu* / `צָבָא` [cognate]. |
| 53' | *lammu* | השָּׁקֵד | `מַקֵּל שָׁקֵד אֲנִי רֹאֶה` (ירמיהו א:יא) | [equivalent] | The almond; also Aaron's rod (`וַיִּגְמֹל שְׁקֵדִים`, במדבר יז:כג). |
| 53' | *ina rēš rāṭi* | בראש הרהט | `בָּרְהָטִים בְּשִׁקְתוֹת הַמָּיִם` (בראשית ל:לח) | [cognate] | *rāṭu* / `רַהַט`. |

### The text on its own terms
- **Utility as a claim to rank** (5'–26'): the palm lists what it gives the shepherd, the cattle, the deer, the army,
  mankind, the gods' table, the exorcist, the land (like the grain), and eight crafts – farmer, boatwright, weaver,
  fisherman, fowler, builder, priest, miller – and concludes "my title is 'king'" (26'). The Babylonian economy of the
  south seen from its one tree.
- **The palm in the cult** (10'–12', 23'–24'): dates on the gods' table, palm parts in the exorcist's rites and in the
  hand-washing (*ŠU.LUḪ*), palm heart whitening the priest's flour, the regular portions to "the table of gods and king"
  (the king eats the gods' leftovers).
- **Wine from the mountains** (33'): "the beer of the mountains" – an imported luxury in Babylonia, the drink of temples
  and kings, against the local date-beer.
- **The gods drink** (34'–38'): wine poured "at the gods' table" gladdens Šamaš's liver and lights his face; he dresses in
  his finery, rejoices in song and "acquires mercy" – the god's mood, and so his mercy, depends on the offering.
- **Wine as medicine and consolation** (41'–48'): it heals fever, brings the dying back from the netherworld, "sweetens"
  the professional mourner – hyperbole in the style of the gods' "who gives life to the dead".
- **Dream omens** (49'–50'): whoever sees wine at night will lead the army – the language of the dream books.
- **Debating technique**: insults first (31'), then counter-claims point by point (14'/39' over the same *kurunnu*;
  3'–9'/51'–52' the opponent's boasts quoted and twisted: "tall" becomes "proud"), then a parable (53'–54': the small
  almond at the head of the channel beats the big tree lying in it).
- **A late text**: copied in Hellenistic Uruk, among the last cuneiform literature; the scribe's *ḫepi eššu* ("new
  break", 34') shows he copied an already damaged tablet.

### Lines shared with other files
- 14' = Theodicy 32 (*kurunnu napšat nišī*): `סובא מובחר – נפש האנשים –` copied.
- 31' = Theodicy 1 (*gana luqbīka*): `בוא, אוֹמְרָה לך` copied.
- 13' cf. Atra-ḫasīs OB II 9 (eBL link; not translated in this corpus).

### Proposals for the shared renderings
- Contestants as names without the article; *arhānû* `דֶּקֶל`, *karānu* `יַיִן` (the contestant), *gišimmaru* `תָּמָר`.
- `אני – X,` (*anākū-ma X*); `פתח את פיו, ואליו דיבר:` (*īpuš-ma pâšu izzakkar ana šuāši*); *gana luqbīka* `בוא, אוֹמְרָה לך`.
- *šanānu* `התחרה`, *šitnuntu* `התחרות` (PO), *maṣû* Št `השתווה`; *ṣâlu* `רב`, *muṣṣālu* `מריב`; *ṭapālu* D `הוציא דיבה`.
- *emēdu* "lean" `נשען` (split by sense from `השית`); *rabābu* Š `התרפה`; *lulīmu* `יַחְמוּר`; *ušurtu* `מַעַשְׂרוֹת?`;
  *šuluḫḫu* `רחיצת־הידיים`; *upuntu* `קמח־האוּפּוּנְתּוּ`; *ginû* `מנה קבועה`; *gagû* `הַגָּגוּ`.
- *liʾbu* `קדחת`; *lallaru* `מיילל`; *nubû* `נהי`; *abāru* III `חבק`; *arāmu* `עטה` / *katāmu* `כיסה`; *zabālu* D `השהה`.
- *pasuttu* `רשתית` (nets); *eblu* `חבל`; *šušāru* `פתיל`; *aru* `כפה`; *lammu* `שָׁקֵד`; *adāru* `אֲדָרוּ`.

### Lessons for the guidelines
- An eBL note can sit under the wrong line in a reading (the UrkHel3 variant note belongs to 34', not 24'): read the ATF
  of each manuscript before attributing a variant.
- eBL's lemma and Jiménez's translation disagree in several places (37' *riāšu* / "asks for"; 54' *bâʾu* II "come" /
  "surpasses"; PO a+6 *nahāsu* / "weeps"; PO d+23 *marru* "bitter" / "shovel"): in this edition check both against the
  signs before choosing.

## PO

### Scope
The Series of the Poplar (*iškar ṣarbati*; eBL `L/2/8`, ed. and tr. E. Jiménez), all 82 labels in four fragments
(a+1–a+7, b+1–b+9, c+1–c+41, d+1–d+25), whose order is not certain. Manuscripts: one Late Babylonian library tablet from
Babylon in three pieces (BabLB1a–c) and two Neo-Assyrian tablets from Nineveh (NinNA1a+b, NinNA2). File
`annotated-PO.rtl.md`; intro `translation--intro-PO.rtl.md`.

### Sources consulted
As PV (`../../sources/eBL/Fable-Poplar/`); Etana (`../../אגדות-מלכים/`) for *ṣarbatu*; the cross-corpus survey.

### Decisions
- **Contestants:** *ṣarbatu* = `צַפְצָפָה` (Etana; Ezek 17:5), feminine as in Akkadian; *martû* = `מַרְתּוּ`
  (transliterated, always vocalized: Jiménez's "Ash" is uncertain, and `מרתו` reads "his mistress"). Other uncertain
  trees transliterated (*šaššūgu* `שַׁשּׁוּגוּ`, *adāru* `אֲדָרוּ` in PV); certain ones by name (`אֵשֶׁל`, `תָּמָר`, `אֶרֶז`,
  `שׁוּרְבִּין`, `רִמּוֹן`).
- **Speech formulas:** *X pâšu īpuš-ma ana Y amāta izakkar* = `X פתח(ה) את פיו (פיה), ואל Y דבר דיבר(ה):` (c+6, d+14:
  PV 30' + the Poor Man's *amāta zakāru* `דבר דיבר`); *X ana Y amāta izzakkar* = `X אל Y דבר דיבר:` (c+32, = PM 27).
  *aggiš* = `בקצף` (*agāgu* = `קצף`, corpus §5).
- **Words:** *alālu* Gt = `התהלל` [cognate] (a+4); *qīšu* = `חורש`; *apu* = `אגם`; *ṣulūlu* = `סכך` (c+16; not
  `מחסה` / `חסה`); *ḫaṭṭu* = `מקל` (a beating stick; `שבט` stays *šabbiṭu*'s); *lā māgiru* = `מי שאינו מתרצה`
  (*magāru* = `רצה`); *naṭû* = `הכה`; *qarādu* D = `אימץ`; *akû* (I and II) = `תשוש` (`חלש` is *enšu*'s); *lutû* = `זרד`;
  *eṭēru* = `חילץ` / *šūzubu* = `הציל`; *mangālu* = `מַנְגָּלוּ` (transliterated, meaning unknown); *birtu* = `בירה`
  [cognate]; *nanṣabu* = `מרזב`; *kilīlu* = `זר`; *zaʾānu* D = `עיטר`; *šukuttu* = `תכשיטים` (*šukānu* `תכשיט` in Ludlul:
  recorded); *iṣṣūr šāri* = `ציפור־הרוח`; *maštaku* = `חדר`; *zabālu* = `סבל` [cognate]; *makkūru* = `נכסים`; *būšu* =
  `רכוש`; *nukurtu* = `איבה`; *rukūbu* = `רְכוּב` [cognate, Ps 104:3]; *sarāqu serqa* = `זרה זרייה`; *gišḫurru* =
  `צורה`; *mīlu gapšu* = `גאות הגואה`; *māḫiru* = `יריב`; *tâmtu gallatu* = `הים המתגלגל`; *ḫamṭūtu* = `בחופזה`;
  *bušṭītu* = `תולעת־העץ`; *marāqu* = `שחק`; *palāšu* D = `נקב`; *riksu* = `פרק`; *tarahhu* = `מדרון`; *ḫerû* =
  `חפר`; *māḫiṣu* (PAN.TAG.GA) = `קַשָּׁת`; *nurmû* = `רִמּוֹן`; *ṣabātu* stat. "captive" = `אסור` (by sense); *puḫur
  kullati* = `אספת הכלל` (`עולם` reserved); *muḫalliq* = `מאבד`; *kaqdâ* = `תמיד`; *šarû* (of shade) = `רב`; *šamāḫu* =
  `שגשג`; *larû* = `ענף`; *šitnuntu* = `התחרות`; *marāṣu* Š = `הֶחֱלָה` (Isa 53:10); *šīr ilūti* = `בשר אֵלוּת`; *sapānu*
  = `שיטח`; *tallu* = `מוט` (`קורה` is *gušūru*'s); *masāku* Š stat. = `נמאס`; *rakāsu* = `אגד` (`קשר` is *kaṣāru*'s);
  *kankannu* = `כַּן`; *dannu* = `חזק`; *marru* "spade" = `מָרָא` [cognate, Mishnaic/Aramaic]; *šerʾu* = `תלם`.

### Open decisions for the user
1. *martû* transliterated (Jiménez "Ash" = `מֵילָה`); *šaššūgu* too ("Elm" = `בּוּקִיצָה`).
2. c+15 *ilīšu* (DINGIR-MEŠ-*šu₂*): drafted plural `אֵלָיו`; Jiménez singular "his god".
3. d+23: eBL lemmatizes {giš}MAR as *marru* I "bitter" – a slip; read *marru* "spade" = `מָרָא`.
4. d+21 *kankannu* `כַּן` and Exod 30:18 `וְכַנּוֹ`: tagged [equivalent]; a cognate (*kannu* / `כֵּן`) is possible but
   unchecked.
5. c+20 *šukuttu* `תכשיטים` beside Ludlul's *šukānu* `תכשיט` (two lemmas, one Hebrew root).

### Progress log
- 2026-10-31: drafted a+1–d+25 in six saved sections (a+1–a+4, a+5–c+8, c+9–c+22, c+23–c+41, d+1–d+13, d+14–d+25).
- Pass (a) fidelity: brackets against the ATF – c+23 `לפני` and c+38 `חפור` unbracketed (root preserved), c+31 `[ל]נכסי`,
  d+17 `תנובתך` and d+23 `תלמו` (only the suffix broken); d+10 Jiménez's "you are plucked" removed from the line (not in
  N); d+7 `העולם` (reserved) → `הכלל`.
- Pass (b) consistency: the formulas of c+6 / d+14 / c+32 against PV 30' and PM 27; *katāmu* `כיסה` / *arāmu* `עטה`;
  gender (the poplar speaks in the feminine: c+13 `מאמצת`).
- Pass (c) Hebrew: c+20 `כבזר` → `כזר`; d+22 spacing.
- `verify PO --strict`: 0 problems; `check_bible_quotes.py`: 0. Four footnotes (a+3, c+11, c+12, d+17).

### Parallels index (PO)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| a+2 | *ina qīši* | בחורש | `וְחֹרֶשׁ מֵצַל` (יחזקאל לא:ג) | [equivalent] | The shading thicket of Ezekiel's cedar parable. |
| a+3 | *ṣarbatu* | צַפְצָפָה | `קָח עַל מַיִם רַבִּים צַפְצָפָה שָׂמוֹ` (יחזקאל יז:ה) | [equivalent] | The Bible's only `צַפְצָפָה`, in the eagle-and-vine fable (Etana's precedent). |
| a+4 | *ītallal ṣarbatu* | התהללה צפצפה | `אַל יִתְהַלֵּל חֹגֵר כִּמְפַתֵּחַ` (מלכים א כ:יא) | [cognate] | *alālu* Gt / `הִתְהַלֵּל`: the same stem and sense; also `אַל יִתְהַלֵּל עָשִׁיר בְּעָשְׁרוֹ` (ירמיהו ט:כב). |
| c+8 | *ereqqu* | העגלה | `עֹשֶׂה-עָשׁ כְּסִיל וְכִימָה` (איוב ט:ט) | [equivalent] | Ursa Major ("the Wagon"); `עָשׁ` is so understood by many commentators. |
| c+10 | *tamkāru* | התגר | — | [cognate] | *tamkāru* / `תַּגָּר` (a loanword). |
| c+11 | *ul issekkerū mê nagbi* | לא ייסכרו מי המעמקים | `וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם` (בראשית ח:ב) | [cognate] | **Key:** *sekēru* N / `נִסְכַּר` with the waters of the deep (*nagbu* `מעמקים` / `תְּהוֹם`): the end of the flood in Genesis; field irrigation here. |
| c+12 | *ina haṭṭīya … inattû zumuršu* | במקלי … מכים את גוו | `שׁוֹט לַסּוּס מֶתֶג לַחֲמוֹר; וְשֵׁבֶט לְגֵו כְּסִילִים` (משלי כו:ג) | [equivalent] | **Key:** the stick on the body (*zumru* = `גו`) and the fool (*lillu* = `כסיל`, c+13); also `וְשֵׁבֶט לְגֵו חֲסַר-לֵב` (משלי י:יג), `חוֹשֵׂךְ שִׁבְטוֹ שׂוֹנֵא בְנוֹ` (משלי יג:כד). *ḫaṭṭu* is not `שבט` (*šabbiṭu*'s). |
| c+13 | *uqarrad lilla* | מאמצת אני את הכסיל | `אִוֶּלֶת קְשׁוּרָה בְלֶב-נָעַר; שֵׁבֶט מוּסָר יַרְחִיקֶנָּה מִמֶּנּוּ` (משלי כב:טו) | [equivalent] | Education by the stick. |
| c+14 | *upattâ uznīšu* | אפתח את אוזניו | `אֲדֹנָי יְהוִה פָּתַח לִי אֹזֶן` (ישעיהו נ:ה) | [equivalent] | Opening the ear; `וַיִּגֶל אָזְנָם לַמּוּסָר` (איוב לו:י): through suffering, there; through the stick, here. |
| c+15 | *usallam ilīšu* | משלים עם אֵלָיו | `וְאִם לֹא תַשְׁלִים עִמָּךְ` (דברים כ:יב) | [cognate] | *salāmu* / `הִשְׁלִים`. |
| c+16 | *eli kabti u muškēni šakin ṣulūlu* | על הנכבד ועל המסכן – שׂוּם סכך | `עָשִׁיר וָרָשׁ נִפְגָּשׁוּ; עֹשֵׂה כֻלָּם יְהוָה` (משלי כב:ב) | [equivalent] | Rich and poor together; *muškēnu* / `מִסְכֵּן` [cognate] (`וּמָצָא בָהּ אִישׁ מִסְכֵּן חָכָם`, קהלת ט:טו). |
| c+16 | *ṣulūlu* | סכך | `וְסֻכָּה תִּהְיֶה לְצֵל יוֹמָם מֵחֹרֶב` (ישעיהו ד:ו) | [equivalent] | Shelter as shade. |
| c+16 | *ṣulūlu* (of the poplar) | סכך | `תַּחַת אַלּוֹן וְלִבְנֶה וְאֵלָה כִּי טוֹב צִלָּהּ` (הושע ד:יג) | [divergence] | `לִבְנֶה` (a poplar?) is praised for its shade; *ṣarbatu* is the Euphrates poplar, and the Hebrew does not write `לבנה`. |
| c+18 | *inaṣṣarū birta* | נוצרים את הבירה | `וַאֲנִי הָיִיתִי בְּשׁוּשַׁן הַבִּירָה` (נחמיה א:א) | [cognate] | *birtu* / `בִּירָה` (a late loan); *naṣāru* / `נָצַר` [cognate]. |
| c+22 | *izabbila makkūra* | סובל את נכסיו | `וַיֵּט שִׁכְמוֹ לִסְבֹּל` (בראשית מט:טו) | [cognate] | *zabālu* / `סָבַל` "carry". |
| c+24 | *rukūbu* | הָרְכוּב | `הַשָּׂם-עָבִים רְכוּבוֹ` (תהלים קד:ג) | [cognate] | The gods' processional vehicle (a boat) / God's "vehicle" of clouds. |
| c+29 | *uballaṭ lā lēʾâ ušezzeb enša* | מחיה אני את מי שאינו מסוגל, מצילה את החלש | `כִּי הָיִיתָ מָעוֹז לַדָּל מָעוֹז לָאֶבְיוֹן בַּצַּר לוֹ מַחְסֶה מִזֶּרֶם צֵל מֵחֹרֶב` (ישעיהו כה:ד) | [equivalent] | Rescuing the weak from the flood – a god's work in Isaiah, a boat's here. |
| c+34 | *ana marāqi* | לשחוק | `וְשָׁחַקְתָּ מִמֶּנָּה הָדֵק` (שמות ל:לו) | [equivalent] | Grinding fine. |
| c+39 | *uš[ebber?]* | יע[ביר?] | — | [cognate] | *ebēru* / `עבר` (restored). |
| d+2 | *nurmû* | הרִמּוֹן | `אֶרֶץ חִטָּה וּשְׂעֹרָה וְגֶפֶן וּתְאֵנָה וְרִמּוֹן` (דברים ח:ח) | [equivalent] | A list of trees. |
| d+3 | *erēnu* | הארז | `הַחוֹחַ אֲשֶׁר בַּלְּבָנוֹן שָׁלַח אֶל הָאֶרֶז אֲשֶׁר בַּלְּבָנוֹן` (מלכים ב יד:ט) | [cognate] | *erēnu* / `אֶרֶז`. |
| d+11 | *šuršūka ul dunnunū* | שורשיך אינם חזקים | `וְעַל יוּבַל יְשַׁלַּח שָׁרָשָׁיו` (ירמיהו יז:ח) | [cognate] | *šuršu* / `שֹׁרֶשׁ`; and the uprooted vine `הֲלוֹא אֶת שָׁרָשֶׁיהָ יְנַתֵּק` (יחזקאל יז:ט). |
| d+12 | *ul šaru ṣillaka* | לא רב צלך | `בֹּאוּ חֲסוּ בְצִלִּי` (שופטים ט:טו) | [divergence] | A tree mocked for its scant shade; Jotham's bramble offers the shade it does not have. *ṣillu* / `צֵל` [cognate]. |
| d+15 | *ušamris[su]* | הֶחֱלָה [אותה?] | `וַיהוָה חָפֵץ דַּכְּאוֹ הֶחֱלִי` (ישעיהו נג:י) | [equivalent] | *marāṣu* Š "make sick, vex" / `הֶחֱלָה`; a different root (Hebrew `נִמְרֶצֶת` is the cognate, corpus §3). |
| d+16 | *kīma bīni … ul šīr ilūti* | כָּאֵשֶׁל – … לא בשר אֵלוּת | `וּשְׁאֵרִיתוֹ לְאֵל עָשָׂה לְפִסְלוֹ` (ישעיהו מד:יז) | [divergence] | **Key:** the tree that becomes a god's body – mocked by the prophets (also `כִּי עֵץ מִיַּעַר כְּרָתוֹ מַעֲשֵׂה יְדֵי חָרָשׁ בַּמַּעֲצָד`, ירמיהו י:ג), the highest honour here. |
| d+17 | *gišimmari šar iṣṣī* | תָּמָר, מלך העצים | `הָלוֹךְ הָלְכוּ הָעֵצִים לִמְשֹׁחַ עֲלֵיהֶם מֶלֶךְ` (שופטים ט:ח) | [equivalent] | **Key:** "king of trees" as the palm's standing title (cf. PV 26'); Jotham's king is the bramble, Jehoash's tree the cedar. |
| d+17 | *inib[ka ul innakkal?]* | תנובתך [לא תיאכל?] | `הֶחֳדַלְתִּי אֶת מָתְקִי וְאֶת תְּנוּבָתִי הַטּוֹבָה` (שופטים ט:יא) | [divergence] | The tree's produce as its merit (the fig in Jotham's fable). |
| d+21 | *[kanka]nnūk?* | [כַּנ]ך? | `וְעָשִׂיתָ כִּיּוֹר נְחֹשֶׁת וְכַנּוֹ נְחֹשֶׁת לְרָחְצָה` (שמות ל:יח) | [equivalent] | The stand of a washing vessel (restored word); perhaps cognate (*kannu*). |
| d+23 | *ina marri* | בַּמָּרָא | — | [cognate] | *marru* "spade" > Aramaic / Mishnaic `מָרָא` (eBL's lemma "bitter" is a slip). |
| d+23 | *šerʾāšu* | תלמו | `תְּלָמֶיהָ רַוֵּה` (תהלים סה:יא) | [equivalent] | The furrow (Sum. *absin₃* = `תֶּלֶם`, creation corpus). |

### The text on its own terms
- **The ancient title** *iškar ṣarbati* "the Series of the Poplar": the scribes catalogued the debates like any other
  literary series; one copy from Ashurbanipal's library, one from Late Babylonian Babylon.
- **A tree's whole economy** (c+9–c+31): the merchant, the irrigation dam, the school and court stick, the cult, the city
  gate, the roof drain, the palace, the wind vane, river boats, the king's barge, the gods' processional boat, rescue in
  the spring flood, the sea, the booty of war – Mesopotamian life is made of poplar wood.
- **Discipline by the stick** (c+12–c+14): the poplar "makes the fool brave" and "opens the ears" of the deaf – the
  Babylonian school (the *é-dub-ba*'s "man in charge of the whip") as much as the Proverbs.
- **Cult and magic** (c+15, c+25–c+27): poplar twigs to reconcile a man (or the king) with his gods; a woman's scattered
  offering and the gesture of stroking the nose; the magic circle (*gišḫurru*) in which god and king stand – the
  purification of statues and of kings.
- **Wood for gods' bodies** (d+16): the tamarisk is "divine flesh" – the statue's core, made god by the mouth-washing
  ritual; the poplar is not.
- **A carpenters' debate** (c+33–c+39): hard wood (*martû*) holds the soft poplar's joints, makes the spades and arrows;
  soft wood makes boats and doors. The debate turns technical knowledge into rhetoric.
- **Insult and the verdict-less fragment**: "stupid of trees" (d+9), "despicable" (d+19), "furiously" (d+14); a god
  (Nudimmud = Ea, b+4) is named, perhaps the judge, but the end is lost.

### Lines shared with other files
- c+6, d+14 (speech formula): PV 30' + PM 27 (*amāta zakāru* `דבר דיבר`); c+32 = PM 27's pattern.
- d+19 *gana luqbīka* = PV 31', Theodicy 1.
- c+16 ≈ d+22 (*eli X u Y šakin …*): the same Hebrew frame `על X ו־Y – שׂוּם …`.

### Proposals for the shared renderings
- *ṣarbatu* `צַפְצָפָה` (feminine contestant); *martû* `מַרְתּוּ` ★ (always vocalized); *šaššūgu* `שַׁשּׁוּגוּ`.
- Formulas: `X פתח(ה) את פיו (פיה), ואל Y דבר דיבר(ה):`; `X אל Y דבר דיבר:`; *aggiš* `בקצף`.
- *alālu* Gt `התהלל`; *ṣulūlu* `סכך`; *ḫaṭṭu* (stick) `מקל`; *lā māgiru* `מי שאינו מתרצה`; *qarādu* D `אימץ`; *akû*
  `תשוש`; *lutû* `זרד`; *birtu* `בירה`; *nanṣabu* `מרזב`; *rukūbu* `רְכוּב`; *mīlu gapšu* `גאות הגואה`; *māḫiru* `יריב`;
  *šitnuntu* `התחרות`; *marāṣu* Š `הֶחֱלָה`; *šīr ilūti* `בשר אֵלוּת`; *tallu* `מוט`; *rakāsu* `אגד`; *kankannu* `כַּן`;
  *marru* (spade) `מָרָא`; *šerʾu* `תלם`; *katāmu* `כיסה`; *makkūru* `נכסים`, *būšu* `רכוש`.

### Lessons for the guidelines
- In a fragmentary composite whose fragments' order is unknown, the section headings should name the fragment letters
  (a, b, c, d) so the reader sees that the order is the editor's; the intro says so.
