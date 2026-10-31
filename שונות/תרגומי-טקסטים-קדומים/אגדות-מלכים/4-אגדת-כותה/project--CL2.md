# Part CL2: the Cuthaean Legend, Standard Babylonian 94–180 (Round 5, run 5), 2026-10-31

Translator: the CL1 sub-agent, resumed. File: `annotated-SB.rtl.md` (entries `SB.94`–`SB.180`, four sections, and a
header paragraph "חלק CL2"; the מספור sentence updated).

## Progress and passes
- Data: `kings_tools.py data CL SB.94 SB.180` and `pars CL SB.94 SB.180`; transliterations as `` `@` `` + `fill CL`
  (87 filled). Every new Hebrew word grepped (`harmonize_survey.py parse/words/heb`); every verse printed first (about
  50).
- Repeated lines copied from CL1: 108–113 = 72–77 (with this chapter's brackets: 108 `צ[יוויתי]`, 112
  `[אִילַ]בָּה`, `[אֲנוּנִי]תוּ`, 113 `שׁוּלַּת, [חָנִישׁ, שַׁמַשׁ הַגִּבּוֹר].`), 114 = 17 (1st person), 124 = 79
  (`אני [עצמי]`), 127 a deliberate copy of 78's opening (`מַפְתֵּחַ האלים הגדולים –`), 156 = the negation of 88's
  first two verbs, 151 = SB.1's `תיבת־לוחות` / `מצבה`, 178 = 93's `מצח … הוצאת`.
- Pass (a) fidelity: brackets checked against every manuscript (fixed: 106 `ניסכתי` unbracketed – the root is
  preserved in NinNA2 and BabLB1b); N's round-bracketed words not translated (98 the uninterpreted word as `…`, 129
  *-mi*, 134 *-ān-*, 147 *-niš-*); one fake quotation and three unreferenced ones removed or completed.
- Pass (b) consistency: one Hebrew per lemma inside the text – **two collisions caught and fixed**: *gullultu* moved
  from `רעתם` to `עבירתם` (`רָעָה` is *lemuttu*, 131); *gimillu* = `חֶמְלָה`, so that `גָּמַל` stays *riābu*'s (172).
- Pass (c) Hebrew aloud: vocalized `יִשָּׂא`, `הַתָּמָר`, `יֶשְׁנוֹ`, `מְחוֹלָל`, `עֲשִׂיתֶם`, `יִטְבְּעוּ`, `חַשְׁתִּי`,
  `קֵבָה`, `אָבִיא`, `עֲזֹב`, `תְאַבֵּד`, `יְקַוּוּ`, `יִשָּׁפֵךְ`, `לֻמְּדוּ`, `כָּפָן`, `רְאֵה`, `שְׁמַע`, `מִבְטָח`,
  `מַלֵּא`, `טַנְאֶיךָ`, `הַכְנֵס`, `קְשֹׁר`, `הַשְׁעֵן`, `נְצֹר`, `שַׁלֵּם`, `יִנְדֹּד`, `תֵּצֵא`, `יִקְטֹל`, `הֱיֵה`,
  `מְרֻסָּן`, `הֵן`, `גְּמֹל`, `חֲלֹף`, `יַזְכִּירוּ`, `הָאַחֲרוֹן`.
- **Checks:** `kings_tools.py verify CL` – 180 entries, **OK** (the FORMULAS of CL1 pass on all copies);
  "same transliteration, different Hebrew" SB.16 / 74 / 110 is the known 3rd-person Enmerkar copy.
  `check_bible_quotes.py 4-אגדת-כותה/*.md` – 0 problems.

### Parallels index (CL2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| SB.94 | *šalummat nēšī* | הוד אריות | `וְהִשְׁלַחְתִּי בָכֶם אֶת חַיַּת הַשָּׂדֶה` (ויקרא כו:כב) | [equivalent] | Beasts among the curse-plagues (our proposal). |
| SB.96 | *murṣa dīʾa dilipta mala bašû* | חולי, חולי־הראש, נדודי־שינה – כל אשר ישנו | `גַּם כָּל חֳלִי וְכָל מַכָּה אֲשֶׁר לֹא כָתוּב בְּסֵפֶר הַתּוֹרָה הַזֹּאת` (דברים כח:סא) | [equivalent] | "Every disease there is". |
| SB.97 | *šakin abūbu* | מבול מְחוֹלָל | `וְלֹא יִהְיֶה עוֹד מַבּוּל לְשַׁחֵת הָאָרֶץ` (בראשית ט:יא) | [equivalent] | *abūbu* / `מַבּוּל` (guidelines §6.7); the stative of Erra's formula `חולל מבול`. |
| SB.98 | *elēnum … šaplānu ina apsî … abūbu* | מעל, בשמים … מתחת, בָּאַפְּסוּ … מבול | `נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם רַבָּה וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא) | [equivalent] | A "deluge" from above and from the abyss (our proposal); `תְּהוֹם` reserved. |
| SB.102 | *zēr amēlūti ana ḫulluqi* | לאבד את זרע? האנושות | `וַיֹּאמֶר יְהוָה אֶמְחֶה אֶת הָאָדָם` (בראשית ו:ז); `וְהִנְנִי מַשְׁחִיתָם אֶת הָאָרֶץ` (בראשית ו:יג) | [divergence] | The gods' decision to destroy mankind, quoted by Ea; `מָחָה` reserved, *ḫalāqu* D = `אִבֵּד`. *zēru* = `זֶרַע` [cognate]. |
| SB.103 | *šubšû nišī ana dārâti … tamtalkā* | ולהביא לִכְלַל הֲוָיָה את האנשים לעד? – [א]לים?, נמלכתם | `וַהֲקִמֹתִי אֶת בְּרִיתִי אִתְּכֶם וְלֹא יִכָּרֵת כָּל בָּשָׂר עוֹד מִמֵּי הַמַּבּוּל` (בראשית ט:יא) | [equivalent] / [cognate] | The post-flood commitment to keep mankind; *šubšû* = the closest match to `בָּרָא` (guidelines §6.7); *malāku* / `נִמְלַךְ`. |
| SB.118 | *ušardâ qulmû* | יגירו הקרדומות | `יַגִּירֻהוּ עַל-יְדֵי-חָרֶב` (תהלים סג:יא) | [equivalent] | Our proposal. |
| SB.119 | *ina dāmī iṭebbû* | בדם יִטְבְּעוּ | `וּמִבְחַר שָׁלִשָׁיו טֻבְּעוּ בְיַם סוּף` (שמות טו:ד) | [cognate] | *ṭebû* / `טבע`. |
| SB.121–122 | *ardud … akšussunūti* | רדפתי … השגתי | `קוּם רְדֹף אַחֲרֵי הָאֲנָשִׁים; וְהִשַּׂגְתָּם` (בראשית מד:ד); `רְדֹף כִּי הַשֵּׂג תַּשִּׂיג` (שמואל א ל:ח) | [equivalent] | Pursuit and overtaking after asking the god. |
| SB.125, 148 | *qāta wabālu* | לא אָבִיא [ידי?] / את ידי להרוג – לא הבאתי עליהם | `אַל תִּשְׁלַח יָדְךָ אֶל הַנַּעַר` (בראשית כב:יב); `וְיָד אַל תִּשְׁלְחוּ בוֹ` (בראשית לז:כב) | [equivalent] | The hand not "sent" to kill; the Akkadian verb kept (`הֵבִיא יָד`). |
| SB.127, 148 | *gimilšunu [iqbi]*; *ul ubilšunūti* | חמלתם [אמר?]; לא הבאתי עליהם | `וַיַּחְמֹל שָׁאוּל וְהָעָם עַל אֲגָג` (שמואל א טו:ט); `וְהַחֲרַמְתֶּם אֶת כָּל אֲשֶׁר לוֹ וְלֹא תַחְמֹל עָלָיו` (שמואל א טו:ג) | [divergence] | Saul is punished for sparing the enemy king; Narām-Sîn is commanded to spare. The strongest counter-parallel of the text. |
| SB.128 | *dilbat elletu ištu šamê* | דִּלְבַּת הטהורה, מן השמים | `אֵיךְ נָפַלְתָּ מִשָּׁמַיִם הֵילֵל בֶּן שָׁחַר` (ישעיהו יד:יב) | [divergence] | The Morning Star from heaven: fallen for pride (Isaiah) / speaking to a humbled king (here). |
| SB.130 | *ezib zēr ḫalqātî lā tuḫallaq* | עֲזֹב! זרע האובדים – לא תְאַבֵּד | `לֹא תְחַיֶּה כָּל נְשָׁמָה` (דברים כ:טז) | [divergence] | The Bible's ban on sparing vs the god's ban on destroying; `חֵרֶם` reserved. |
| SB.131 | *rēssun inaššâ ana lemutti* | לרעה יִשָּׂא את ראשם | `יִשָּׂא פַרְעֹה אֶת רֹאשְׁךָ מֵעָלֶיךָ` (בראשית מ:יט); `יִשָּׂא פַרְעֹה אֶת רֹאשֶׁךָ וַהֲשִׁיבְךָ עַל כַּנֶּךָ` (בראשית מ:יג) | [equivalent] | "Lift the head" for good or evil: the same idiom. |
| SB.132 | *uqaʾʾû rēša* | יְקַוּוּ ראש | `אַל תֹּאמַר אֲשַׁלְּמָה רָע; קַוֵּה לַיהוָה וְיֹשַׁע לָךְ` (משלי כ:כב) | [cognate] | *quʾʾû* / `קִוָּה`; leave revenge to the god. |
| SB.134 | *ilammû kalbū* | יסובבו כלבים | `כִּי סְבָבוּנִי כְּלָבִים` (תהלים כב:יז) | [cognate] / [equivalent] | *kalbu* / `כֶּלֶב`. |
| SB.135 | *dāmūšunu ittabbakū* | דמם יִשָּׁפֵךְ | `שֹׁפֵךְ דַּם הָאָדָם בָּאָדָם דָּמוֹ יִשָּׁפֵךְ` (בראשית ט:ו); `שָׁפְכוּ דָמָם כַּמַּיִם` (תהלים עט:ג) | [equivalent] | |
| SB.136 | *erṣetu išpikīša gišimmaru bilassa umaṭṭa* | הארץ – את יבולה, הַתָּמָר – את משאו ימעיט | `וְלֹא תִתֵּן אַרְצְכֶם אֶת יְבוּלָהּ וְעֵץ הָאָרֶץ לֹא יִתֵּן פִּרְיוֹ` (ויקרא כו:כ); `וְהָאֲדָמָה לֹא תִתֵּן אֶת יְבוּלָהּ` (דברים יא:יז) | [equivalent] | Earth and tree in one curse, as in Lev 26:20; `פְּרִי` not used (*biltu* = `מַשָּׂא`). |
| SB.138–140 | *ālu itti āli … abu itti māri … rūʾu itti itbāri* | עיר עם עיר … אב עם בן … עמית עם ידיד | `וְנִלְחֲמוּ אִישׁ בְּאָחִיו וְאִישׁ בְּרֵעֵהוּ עִיר בְּעִיר מַמְלָכָה בְּמַמְלָכָה` (ישעיהו יט:ב); `כִּי בֵן מְנַבֵּל אָב … אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ` (מיכה ז:ו) | [equivalent] | The same chain of civil strife sent by a god. |
| SB.141 | *itti aḫāmiš kīnāti ul ītammû* | זה עם זה – אמת לא ידברו | `דַּבְּרוּ אֱמֶת אִישׁ אֶת רֵעֵהוּ` (זכריה ח:טז) | [equivalent] | The positive command, inverted. |
| SB.142 | *šanâtim-ma* | וזרות | `עֵינֶיךָ יִרְאוּ זָרוֹת` (משלי כג:לג) | [equivalent] | |
| SB.144–145 | *ḫušaḫḫu*; *ana ištēn šiqil kaspi sūt uṭṭatu imaḫḫar* | כָּפָן; באחד [שקל?] כסף? – סאת שעורים יקבל | `וַיְהִי רָעָב גָּדוֹל בְּשֹׁמְרוֹן וְהִנֵּה צָרִים עָלֶיהָ` (מלכים ב ו:כה); `סְאָה סֹלֶת בְּשֶׁקֶל וְסָאתַיִם שְׂעֹרִים בְּשֶׁקֶל` (מלכים ב ז:א) | [cognate] / [divergence] | *sūtu* / `סְאָה`, *šiqlu* / `שֶׁקֶל`: the same units and grain; in 2 Kgs 7:1 the price of relief, here of famine (×30 the normal price). |
| SB.146 | *šarru dannu … ina māti ul ibši* | מלך חזק … בארץ לא היה | `בַּיָּמִים הָהֵם אֵין מֶלֶךְ בְּיִשְׂרָאֵל` (שופטים יז:ו) | [equivalent] | |
| SB.147 | *ana bibilti ubillūšunūti* | לשבי הביאום | `גַּם אוֹתוֹ לְאַשּׁוּר יוּבָל מִנְחָה` (הושע י:ו) | [cognate] | *wabālu* / `יבל`. |
| SB.149–150 | *attamannu … ša ilū inabbûšū-ma šarrūta ippuš* | אתה, מי שתהיה … אשר האלים יקראוהו, ומלכות יעשה | `וְכָתַב לוֹ אֶת מִשְׁנֵה הַתּוֹרָה הַזֹּאת עַל סֵפֶר` (דברים יז:יח); `מֶלֶךְ אֲשֶׁר יִבְחַר יְהוָה אֱלֹהֶיךָ בּוֹ` (דברים יז:טו) | [equivalent] | A written instruction for a future, god-chosen king. |
| SB.152 | *ina kutî* | בכּוּתָה | `וַיָּבֵא מֶלֶךְ אַשּׁוּר מִבָּבֶל וּמִכּוּתָה` (מלכים ב יז:כד); `וְאַנְשֵׁי כוּת עָשׂוּ אֶת נֵרְגַל` (מלכים ב יז:ל) | [cognate] | The same city and god. |
| SB.153 | *papāḫ nergal* | הַפַּפָּח של נֵרְגַּל | `וַיִּבֶן לוֹ מִבַּיִת לִדְבִיר לְקֹדֶשׁ הַקֳּדָשִׁים` (מלכים א ו:טז) | [equivalent] | The inner shrine; `דְּבִיר` not used. |
| SB.156–157 | *lā tessehhi lā tennešši lā tapallaḫ lā tatarrur* | לא תיסער, לא תיבוך, לא תפחד, לא תרעד | `הִשָּׁמֵר וְהַשְׁקֵט אַל תִּירָא וּלְבָבְךָ אַל יֵרַךְ` (ישעיהו ז:ד); `בְּהַשְׁקֵט וּבְבִטְחָה תִּהְיֶה גְּבוּרַתְכֶם` (ישעיהו ל:טו); `אַל יֵרַךְ לְבַבְכֶם אַל תִּירְאוּ` (דברים כ:ג) | [equivalent] / [divergence] | Isaiah's counsel of quietness to a frightened king is the closest; Deut 20:3's "fear not" sends to battle. |
| SB.159 | *ina sūn sinništīka šipra lū teppuš* | בחיק אשתך מלאכה תעשה | `כִּי יִקַּח אִישׁ אִשָּׁה חֲדָשָׁה לֹא יֵצֵא בַּצָּבָא` (דברים כד:ה); `רְאֵה חַיִּים עִם אִשָּׁה אֲשֶׁר אָהַבְתָּ` (קהלת ט:ט) | [equivalent] | *šipru* = `מְלָאכָה` (the user's rule). |
| SB.163 | *ana āl dannūtīka šūrib* | אל עיר מבצרך הַכְנֵס | `הֵאָסְפוּ וְנָבוֹאָה אֶל עָרֵי הַמִּבְצָר` (ירמיהו ד:ה) | [equivalent] | |
| SB.166 | *ē tuṣīšu* | אַל תֵּצֵא אליו | `כִּי תֵצֵא לַמִּלְחָמָה עַל אֹיְבֶךָ` (דברים כ:א) | [divergence] | |
| SB.168 | *līkul šīr rēdûtīka* | יאכל את בשר *רַגְלִיֶּיךָ* | `הַנִּחוּ לוֹ וִיקַלֵּל` (שמואל ב טז:יא) | [equivalent] | Non-retaliation (our proposal). |
| SB.170–171 | *lū ašrāta lū sanqāta / annû bēlī apulšunūti* | הֱיֵה נכנע, הֱיֵה מְרֻסָּן / "הֵן, אדוני!" – ענה אותם | `הָבִיאוּ אֶת צַוְּארֵיכֶם בְּעֹל מֶלֶךְ בָּבֶל וְעִבְדוּ אֹתוֹ וְעַמּוֹ וִחְיוּ` (ירמיהו כז:יב) | [equivalent] | Submission to the stronger enemy as the god's will. |
| SB.172 | *ana gullultīšunu rīb dumqī* | לעבירתם – גְּמֹל חסד | `כִּי אַתָּה גְּמַלְתַּנִי הַטּוֹבָה וַאֲנִי גְּמַלְתִּיךָ הָרָעָה` (שמואל א כד:יז); `לָמָּה שִׁלַּמְתֶּם רָעָה תַּחַת טוֹבָה` (בראשית מד:ד); `אִם רָעֵב שֹׂנַאֲךָ הַאֲכִלֵהוּ לָחֶם` (משלי כה:כא); `אַל-תֹּאמַר כַּאֲשֶׁר עָשָׂה-לִי כֵּן אֶעֱשֶׂה-לּוֹ` (משלי כד:כט); `אֱלֹהִים חֲשָׁבָהּ לְטֹבָה` (בראשית נ:כ) | [equivalent] | *riābu* = `גָּמַל`, the verb of 1 Sam 24:17 (the repository's numbering; 24:18 in most editions); `טוֹב` reserved, *dumqu* = `חֶסֶד`. |
| SB.173 | *taṣbâti* | *משאלות* | `וְיִתֶּן-לְךָ מִשְׁאֲלֹת לִבֶּךָ` (תהלים לז:ד) | [equivalent] | Uncertain word. |
| SB.179–180 | *šūt yâši taktarba arkû liktarrabka kâša* | אתה אשר אותי בירכת – הָאַחֲרוֹן יברך אותך – אותך! | `וַאֲבָרְכָה מְבָרְכֶיךָ` (בראשית יב:ג); `מְבָרְכֶיךָ בָרוּךְ` (במדבר כד:ט); `וְאָמַר הַדּוֹר הָאַחֲרוֹן בְּנֵיכֶם` (דברים כט:כא) | [equivalent] | The blessing returning to the blesser; closes SB.30 "I did not bless him". |

## Key findings
**For the Bible.**
1. **The anti-1 Sam 15.** Narām-Sîn asks again, the gods' "key" orders *gimillu* (mercy), the Morning Star commands
   "you shall not destroy the seed of the lost", and he "did not bring his hand to kill" (125–148). In 1 Sam 15 the
   god commands `וְלֹא תַחְמֹל`, and the king who spares is rejected. The two texts share the frame (a king, an
   oracle, an enemy captured, sparing or killing) and reverse its ethics.
2. **Ea and the flood** (97–103): the gods decided to "destroy the seed of mankind" and then "deliberated to bring
   people into being forever" – the two movements of Gen 6:7 and 9:11 in one speech, with *šubšû* (the Akkadian
   nearest to `בָּרָא`) and *malāku* (`נִמְלַךְ`). The "deluge" is metaphorical here (a stative of Erra's formula).
3. **The curses of war** (131–146) gather the Bible's own: "lift the head" for evil (Gen 40), dogs surrounding (Ps
   22:17), blood poured (Gen 9:6), earth and tree withholding their yield (Lev 26:20), civil strife in Isaiah 19:2's
   very order (city with city, man with brother, companion with friend), no truth spoken (Zech 8:16 inverted), the
   famine price in the units of 2 Kgs 7:1 (seah, barley, shekel), "no king in the land" (Judg 17:6).
4. **The counsel to a future king** (149–180) is the Akkadian counterpart of Deut 17:18–20 in form (a written
   instruction for a god-chosen king), and of Isaiah's `הַשְׁקֵט אַל תִּירָא` (7:4; 30:15) in content; "do your work
   in your wife's lap" meets Deut 24:5 and Qoh 9:9; "repay kindness for their misdeed" meets 1 Sam 24:17 (same verb
   `גָּמַל`), Prov 24:29, 25:21–22, Gen 50:20.
5. **Kutha and Nergal** (152–153): the same city (`וּמִכּוּתָה`, 2 Kgs 17:24) and the same god (`נֵרְגַל`, 17:30) –
   the stela is deposited in the temple of the god whom the Kutheans later brought to Samaria.

**For the ancient mind.**
1. **The ethics of non-resistance as political wisdom:** stay home, fortify, tie up the weapons, say "yes, my lord",
   repay misdeed with kindness, step aside – not out of universal morality, but because the enemy is "the work of
   Enlil" and the gods will punish it in their time.
2. **The same act, now right:** the extispicy that the king mocked (80–81) is repeated word for word (108–114) and
   now answers; the verbs of his despair (88) become the prohibitions of the end (156). The text teaches by repetition.
3. **A text that blesses its reader:** instead of the usual curse on whoever erases the stela, the ending blesses the
   reader who saves himself by it and blesses its author – closing the circle opened by Enmerkar's unblessed silence
   (30).
4. **Famine as numbers:** the price of barley (×30) was the ancient measure of catastrophe, as in Samaria's siege.

## Open decisions
1. **Kutha** = `כּוּתָה` ★ (decided): the form of 2 Kgs 17:24 (`וּמִכּוּתָה`), keeps the Akkadian vowel, matches the
   project's name and TRAPS; `כּוּת` (17:30) in the note.
2. **SB 97 *šakin abūbu*** = `מבול מְחוֹלָל` (decided): Erra's verb, as a stative participle.
3. ***qāta wabālu*** = `הֵבִיא יָד` (decided; 125, 148), keeping *wabālu* = `הֵבִיא` and the 147/148 play
   (*ubillūšunūti* / *ubilšunūti*); `שָׁלַח יָד` only in the apparatus. A reviewer may prefer `שָׁלַח יָד` by sense.
4. ***gimillu*** = `חֶמְלָה` here (127), not the `גְּמוּל` of Enūma eliš / Gilgameš, because `גָּמַל` is *riābu* in
   this text (172) and *gamālu* "spare" ≠ `גָּמַל` "requite" (guidelines §6.7). Proposed as a corpus split by sense.
5. ***papāḫu*** transliterated `פַּפָּח` (no Hebrew without `דְּבִיר` or the root קדש).
6. ***tākaltu*** (125) = `קֵבָה` by the extispicy sense; ***taṣbâtu*** (173) `*משאלות*` and ***rēdûtu*** (168)
   `*רַגְלִיֶּיךָ*` in italics; *lizkurū?* (176) `יַזְכִּירוּ?` (eBL: perhaps *lišṭurū* "let them write").
7. ***aḫāzu* Š** (142) = `לֻמַּד` by sense (*lamādu* does not occur in this text).

## Proposals for the corpus renderings
| Source | Hebrew (exact) | Tag | Notes | Lines |
|---|---|---|---|---|
| *ea bēlu pâšu īpuš-ma iqabbi* / *izakkar ana ilī athêšu* | `אֵאָה, האדון, פתח את פיו ואמר,` / `דיבר אל האלים, שותפיו:` | – | the Gilgameš split formula (III 13–14) | 99–100 (MB A b+13–14) |
| *abūbu* (stative of *abūba šakānu*) | `מבול מְחוֹלָל` | [equivalent] | | 97 |
| *apsû*; *abūbu baši* | `בָּאַפְּסוּ`; `מבול יֶשְׁנוֹ` | – | | 98 |
| *zēr amēlūti ana ḫulluqi* | `לאבד את זרע? האנושות` | [cognate] *zēru* | *ḫalāqu* D = `אִבֵּד`, *ḫalqu* = `אוֹבֵד` | 102, 130 |
| *šubšû nišī ana dārâti … tamtalkā* | `ולהביא לִכְלַל הֲוָיָה את האנשים לעד? – [א]לים?, נמלכתם."` | [equivalent] | | 103 |
| *zagmukku ša rebūti šatti ina kašādi* | `בהגיע ראש השנה של השנה הרביעית,` | – | formula `בהגיע` | 104 |
| *tēmīqu*; *supû* | `עֲתִירָה`; `שַׁוְעָה` | – | `תַּחֲנוּנִים` stays *unnīnu* | 105 |
| *nīqī … aqqi*; *têrēti … uštēšira* | `נִסְכֵי … ניסכתי`; `הוראות טהורות יישרתי.` | – | | 106–107 |
| *redû* Š; *qulmû*; *ṭebû* | `הִגִּיר`; `קַרְדֹּם`; `טָבַע` [cognate] | | | 118–119 |
| *naprušu* N (flee) | `עָף` | – | gated | 120 |
| *radādu*; *ḫamāṭu*; *arāḫu* D | `רָדַף`; `מִהֵר`; `חָשׁ` | – | | 121 |
| *qāta wabālu* | `הֵבִיא יָד` | [equivalent] `שָׁלַח יָד` | | 125, 148 |
| *bīru šīru tākaltu* | `בחינה, בשר, קֵבָה` | – | | 125 |
| *gimillu* | `חֶמְלָה` | – | split from `גְּמוּל` (see open decision 4) | 127 |
| *namzāq ilī rabûti* | `מַפְתֵּחַ האלים הגדולים –` | – | the opening copied 78 → 127 | 78, 127 |
| *Dilbat* | `דִּלְבַּת` | – | Venus (Ištar) | 128 |
| *ezib … lā tuḫallaq* | `עֲזֹב! … לא תְאַבֵּד.` | – | *lā* + present = `לא` + future | 130 |
| *arkât ūmī*; *rēša našû* | `הימים הבאים`; `נָשָׂא רֹאשׁ` | [equivalent] | `אַחֲרִית הַיָּמִים` kept for *aḫrât ūmī* | 131 |
| *aggu*; *quʾʾû* | `זַעַם`; `קִוָּה` [cognate] | | | 132 |
| *naqāru* N; *qamû*; *lawû*; *kalbu*; *tabāku* N | `נֶהֱרַס`; `בִּעֵר`; `סוֹבֵב`; `כֶּלֶב`; `נִשְׁפַּךְ` | | | 133–135 |
| *išpiku*; *gišimmaru*; *biltu*; *maṭû* D | `יְבוּל`; `תָּמָר`; `מַשָּׂא`; `הִמְעִיט` | | | 136 |
| *ālu itti āli bītu itti bīti inakkir* | `עיר עם עיר, בית עם בית – יתנכר;` | – | *nakāru* G (hostility) = `הִתְנַכֵּר` | 138 |
| *eṭlu*; *rūʾu*; *itbāru* | `עֶלֶם`; `עָמִית`; `יְדִיד` | – | Etana | 140 |
| *kittu* (pl.); *awû* Gt | `אֱמֶת`; `דִּבֵּר` | – | | 141 |
| *aḫāzu* Š; *šanû* (pl. f.) | `לֻמַּד`; `זָרוֹת` | – | | 142 |
| *nakru* | `אוֹיֵב` | – | `נָכְרִי` reserved (*kur₂*) | 143 |
| *ḫušaḫḫu* | `כָּפָן` | – | EST | 144 |
| *sūtu*; *šiqlu*; *uṭṭatu* (ŠE.BAR); *maḫāru* | `סְאָה` [cognate]; `שֶׁקֶל` [cognate]; `שְׂעֹרִים`; `קִבֵּל` | | *šeʾu* (162) = `תְּבוּאָה` | 145 |
| *bibiltu* | `שֶׁבִי` | – | | 147 |
| *iššiakku*; *rubû* | `מוֹשֵׁל`; `נָשִׂיא` | – | | 149 |
| *Kutû*; *Emeslam*; *Nergal*; *papāḫu* | `כּוּתָה` ★; `אֵמֶסְלָם`; `נֵרְגַּל`; `פַּפָּח` | [cognate] | | 152–153 |
| *lā tessehhi lā tennešši* | `לא תיסער, לא תיבוך,` | – | = 88 negated | 156 |
| *lā tapallaḫ lā tatarrur* | `לא תפחד, לא תרעד,` | – | *palāḫu* (not of gods) = `פָּחַד` | 157 |
| *išdu*; *sūnu*; *dūru*; *ḫirītu*; *pisannu*; *būšu*; *makkūru*; *dannūtu*; *tubqu* | `יְסוֹד`; `חֵיק`; `חוֹמָה`; `חֲפִירָה`; `טֶנֶא`; `רְכוּשׁ`; `נְכָסִים`; `מִבְצָר`; `פִּנָּה` | | | 158–164 |
| *ē* + verb | `אַל` + future (`אַל תֵּצֵא אליו`, `אַל תתקרב אליו`) | – | distinct from *lā* `לא` | 166–167 |
| *wašru*; *sanqu*; *apālu* | `נִכְנָע`; `מְרֻסָּן`; `עָנָה` | | | 170–171 |
| *gullultu*; *riābu*; *dumqu*; *qīštu* | `עֲבֵרָה`; `גָּמַל`; `חֶסֶד`; `תְּשׁוּרָה` | | | 172–173 |
| *ṭupšarru emqu*; *zakāru* | `סופרים חכמים`; `הִזְכִּיר` | – | | 175–176 |
| *arkû* | `הָאַחֲרוֹן` | – | | 179 |
