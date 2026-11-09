# 8-קטהה-אופנישד – the Kaṭha Upaniṣad, whole (KU1 + KU2)

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md` (§5.4, §11.4, §11.7 are the
Kaṭha's own precedents); brief `../translator-brief--vedic.md`. Round 7 run 3 (plan: `../../curated-translation-candidates.md`,
"Round 7 plan", run 2, its Kaṭha half; report `../../reports/round-7/run-3.md`).

## Scope
The whole Kaṭha Upaniṣad (Black Yajurveda, Kaṭha school; probably 5th–4th c. BCE): adhyāya 1 = vallīs 1–3 (KEY `KU1`,
labels 1.1a–3.17c, 146 lines) and adhyāya 2 = vallīs 4–6 (KEY `KU2`, labels 4.1a–6.18b, 111 lines). One line = one
half-verse (a = the first half, b = the second; c = a third line: the refrain *etad vai tat* "this, truly, is That" of
vallīs 4–5, or a closing *om ity etat*). Line data: `python3 -I -B ../vedic_tools.py data KU1|KU2`.

**Base:** GRETIL's TEI of the Kaṭha (`../../sources/GRETIL/sa_kathopaniSad.xml`, CC BY-NC-SA 4.0, committed),
converted by `vedic_tools.py convert` to `../../sources/GRETIL/katha_1-6.tsv` (the whole text; it replaces
`katha_1-3.tsv`). Rank 3 (after drafting): Hume 1921 (public domain, as for KU1); `vedic_tools.py tr` if it covers KU.

**The binding project** `../4-העקדה/` keeps its title and embeds KU1 from here (`PROJECT_EMBEDS` in `../vedic_tools.py`:
`P4: ["AB7", "SB1.2.3", "KU1"]`), so its excerpt is the whole's first adhyāya by construction – the 7.103 precedent of
Round 7 run 1.

## Decisions (Round 7 run 3, the coordinator)
- **The move (2026-11-09):** `annotated-KU1.rtl.md`, `translation-KU1.rtl.md`, `translation--intro-KU1.rtl.md` moved
  here from `4-העקדה/` with `git mv` (history kept); project 8 = `8-קטהה-אופנישד`, title `קטהה אופנישד: נצ'יקטס אצל המוות`
  (the head: `translation--head.rtl.md`); print stub `../../הדפסה/הוודה-והאווסטה/8-קטהה-אופנישד.rtl.md`.
- **The converter dropped verses – fixed.** `convert_katha` read only `<lg>` groups; GRETIL writes a verse's last line
  outside its `<lg>` where a refrain follows (`<l>etad vai tat // KaU_4.3 //</l>`, and *om ity etat* at 2.15). So KU 2.15
  (`sarve vedā yat padam āmananti …` – the verse that names *om*) was missing from the base, and KU1's intro said "2.15
  is missing in this version" – wrongly. The converter now reads the `<l>` lines in order, a verse ending at the line that
  carries its number; vallīs 1–3 are otherwise byte-identical to the old `katha_1-3.tsv` (checked by diff), and the
  trailing double daṇḍa before a refrain is stripped. **KU1 therefore gains 2.15a–c**, to be drafted, and its intro's
  sentence about 2.15 corrected.
- **One Hebrew inside one text:** the Kaṭha keeps its own precedents (*vára* `מַשְׁאָלָה`, *purā́* `מקדם`, *sūnŕ̥tā*
  `נועם דיבור`, *śraddhā́* `אמונה`, *svargá loká* `עולם האור`, *śréyas* / *préyas* `הטוב` / `הנעים`, *bráhman* `נֹסַח`,
  *ātmán* `נפש`, *mr̥tyú* `מָוֶת` as a name …) even where Book 7 (Round 7 run 1) differs; every such pair goes to the
  report's *Cross-corpus splits*, for the lead. The Kaṭha's uses of the roots run 1 proposed to reserve (חטא, `פשע`,
  `סליחה`, `וידוי`, `חרון`) are listed there too (run `vedic_tools.py grep` on them).

## Plan for the rest of the run (range A: one agent at a time)
1. **Translator part 1 – KU2 vallī 4 + KU1 2.15a–c** (38 + 3 lines), then **part 2 – vallīs 5–6** (73 lines),
   sequentially (one text), each with the guidelines, `../renderings.md` (§5.4, §11.4, §11.7 first), `lexmap` of KU1,
   this file, and the translator brief; `fill` the `@` lines; Hume after drafting; the coordinator merges a §11.x
   section into `../renderings.md` after each part.
2. **Revision of KU1 to the current rules** (guidelines §1: completing means the whole text): one pass over 1.1a–3.17c
   against today's guidelines (the echo tags, the name tags of 2026-11-02, the §6.7 harmonizations since 2026-10-30,
   the parallels format), plus the intro's 2.15 sentence and its scope (now the whole Upaniṣad's frame: the intro of
   KU2 covers vallīs 4–6: the senses turned outward, the fire-sticks, the aśvattha tree upside down, the 101 channels
   of the heart, and the closing: Naciketas "became free of death").
3. **Three review passes** (fidelity, consistency – KU1 and KU2 as one text, Hebrew) – an independent reviewer agent.
4. `verify KU1 KU2 --strict`, `build`, the corpus `build_parallels_index.py`, `check_bible_quotes.py` on every file,
   every Vedic verifier; then the report, `finish`, and the parent's message.

## Progress log
- 2026-11-09 06:14–06:45 UTC (range B, its last half hour): the move, the converter fix, the project, `build` (P4
  embeds KU1: its `translation.rtl.md` unchanged), `verify` (only KU1's three new lines 2.15a–c missing, as expected).
- 2026-11-09 06:21–06:32 UTC: **KU2 drafted whole** (111 lines; one translator sub-agent, vallī 4 then vallīs 5–6;
  Hume consulted after each line); merged into `../renderings.md` §11.21; intro `translation--intro-KU2.rtl.md` (the
  coordinator); `verify KU1 KU2 --strict`: no problems (after the Virāj regex fix); `build`; parallels index;
  `check_bible_quotes.py` on every file: 0 problems. **Plan step 1 done.** Paused at the gate's WAIT into range A
  (Fri 13 Nov 13:24 UTC): next is step 2 (KU1's revision), then step 3 (the independent review of KU1 + KU2).

## For the report (collected as the run goes)
- **Cross-corpus splits with Book 7 (Round 7 run 1), kept as the Kaṭha has them** (one Hebrew inside one text): *vára*
  KU `משאלה` / RV 7 `מבחר`; *purā́* KU 1.21a `מקדם` / RV 7 `לפנים`; *sūnŕ̥tā* KU `נועם דיבור` / RV 7 `נדיבות`. (More as
  KU2 is drafted.) KU2's *agni* is `האש`, and `אַגְנִי` only where the god is meant (4.8b, 6.3a) – renderings §3.
- **The roots run 1 proposed to reserve** (חטא, `פשע`, `סליחה`, `וידוי`, `חרון`): none in KU1's or KU2's `>` lines
  (grep, 2026-11-09).
- **Revision items found in KU1** (for step 2): the parallels notes have empty brackets `()` where a reference was
  dropped (2.9a, 3.14b – the generated index shows them); the intro's 2.15 sentence (done 2026-11-09).

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (KU1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1.1a | uśan ha vai vājaśravasaḥ sarvavedasaṃ dadau | בכמיהה (לעולם האור), נתן בן וָאגַ'שְׁרַוַס את כל רכושו. | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ` (בראשית כב:ב) | divergence | בבראשית האל מבקש את הבן; כאן האב נותן "הכל" מרצונו, והבן הוא שמזכיר לאב שגם הוא כלול ב"הכל". הודו הקדומה לא באה במגע עם ישראל: מוטיב משותף (אב שנותן את בנו), לא מקור. |
| 1.2a | taṃ ha kumāraṃ santaṃ dakṣiṇāsu nīyamānāsu śraddhāviveśa | אֶל תוכו, אף שהיה נער, כשהובלו (הפרות של) השכר, נכנסה אמונה, | `וְהֶאֱמִן בַּיהוָה; וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה` (בראשית טו:ו) | divergence | גם שם "אמונה" נכנסת ברגע של הבטחה על בן. אבל *śraddhā́* היא אמון בתוקף של הזבח – שהמנחה תביא את שכרה – לא אמונה באל. מוטיב משותף, לא מקור. |
| 1.3a | pītodakā jagdhatṛṇā dugdhadohā nirindriyāḥ | "שתו מים, אכלו עשב, נחלבו חלבן, חסרות כוח – | `וְכִי תַגִּישׁוּן עִוֵּר לִזְבֹּחַ אֵין רָע וְכִי תַגִּישׁוּ פִּסֵּחַ וְחֹלֶה אֵין רָע` (מלאכי א:ח) | equivalent | גם הנביא מוחה על מי שנותן לאל את מה שאין בו ערך. מוטיב משותף (זבח פסול כזבח שקר), לא מקור. |
| 1.4a | sa hovāca pitaraṃ tata kasmai māṃ dāsyasīti | הוא אמר לאביו: "יקירי, למי תיתן אותי?" | `וַיֹּאמֶר יִצְחָק אֶל אַבְרָהָם אָבִיו וַיֹּאמֶר אָבִי וַיֹּאמֶר הִנֶּנִּי בְנִי` (בראשית כב:ז) | equivalent | שאלה של בן לאביו ברגע הזבח. יצחק שואל איפה הקורבן; נַצִ'יקֵטַס שואל אם הוא עצמו הקורבן – שאם האב נותן "הכל", גם הבן הוא רכוש. מוטיב משותף, לא מקור. |
| 1.4c | taṃ hovāca mṛtyave tvā dadāmīti | אמר לו: "למָוֶת אני נותן אותך!" | `וַיֹּאמֶר אֲהָהּ בִּתִּי הַכְרֵעַ הִכְרַעְתִּנִי וְאַתְּ הָיִית בְּעֹכְרָי; וְאָנֹכִי פָּצִיתִי פִי אֶל יְהוָה וְלֹא אוּכַל לָשׁוּב` (שופטים יא:לה) | divergence | דבר אחד שיצא מפי אב, ואינו יכול לחזור בו. יפתח נדר בלי לדעת; האב ההודי אומר בכעס. ובשני המקרים הבן (הבת) מקבל את הדבר: נצ'יקטס הולך אל מָוֶת. |
| 1.4c | taṃ hovāca mṛtyave tvā dadāmīti | אמר לו: "למָוֶת אני נותן אותך!" | `קַח נָא אֶת בִּנְךָ` (בראשית כב:ב) | divergence | כאן אין אל שמבקש: האב עצמו "נותן" את הבן למוות, במלה. מוטיב משותף (אב המוסר את בנו למוות), לא מקור. |
| 1.6b | sasyam iva martyaḥ pacyate sasyam ivājāyate punaḥ | כמו תבואה בן התמותה מבשיל, כמו תבואה הוא נולד שוב." | — | divergence | `אֱנוֹשׁ כֶּחָצִיר יָמָיו; כְּצִיץ הַשָּׂדֶה כֵּן יָצִיץ` (תהילים קג:טו) – גם במקרא האדם כצמח; אבל שם הצמח נובל ואיננו, וכאן הוא נזרע ונולד "שוב" (*púnar*). זו אחת העדויות הראשונות לרעיון הגלגול בספרות ההודית. מוטיב משותף (האדם כצמח), והסטייה היא העיקר. |
| 1.7b | tasyaitāṃ śāntiṃ kurvanti hara vaivasvatodakam | בשבילו עושים את השקט הזה: הבא מים, בן וִיוַסְוַנְט! | `יֻקַּח נָא מְעַט מַיִם וְרַחֲצוּ רַגְלֵיכֶם` (בראשית יח:ד) | equivalent | המים לאורח, ראשית ההכנסה. גם אברהם מקבל אורחים שהם יותר משהם נראים. מוטיב משותף (הכנסת אורחים כחובה קדושה), לא מקור. |
| 1.9a | tisro rātrīr yad avatsīr gṛhe me anaśnan brahmann atithir namasyaḥ | "מאחר שישבת שלושה לילות בביתי בלי לאכול, ברהמין, אורח ראוי לקידה – | `לֶחֶם לֹא אָכַל וּמַיִם לֹא שָׁתָה` (שמות לד:כח) | equivalent | צום של מי שעומד לקבל דבר מן העולם שמעבר. כאן שלושה לילות בבית המוות. מוטיב משותף (הצום לפני הגילוי), לא מקור. |
| 1.9b | namas te 'stu brahman svasti me 'stu tasmāt prati trīn varān vṛṇīṣva | קידה לך, ברהמין, ויהי לי שלום! לכן, תמורה (לכל לילה), בחר שלוש משאלות." | `וְלֹא שָׁאַלְתָּ לְּךָ יָמִים רַבִּים וְלֹא שָׁאַלְתָּ לְּךָ עֹשֶׁר` (מלכים-א ג:יא) | equivalent | גם שם אל מציע לאדם לבקש. ראו 1.23–1.27. מוטיב משותף (האל המציע משאלה), לא מקור. |
| 1.11b | sukhaṃ rātrīḥ śayitā vītamanyus tvāṃ dadṛśivān mṛtyumukhāt pramuktam | בנחת יישן לילות, בלי כעס, כשיראה אותך משוחרר מפי מָוֶת." | `מִיַּד שְׁאוֹל אֶפְדֵּם מִמָּוֶת אֶגְאָלֵם` (הושע יג:יד) | equivalent | השחרור מיד המוות או מפיו. מוטיב משותף, לא מקור. |
| 1.12a | svarge loke na bhayaṃ kiṃcanāsti na tatra tvaṃ na jarayā bibheti | "בעולם האור אין פחד כלל; אינך שם, ואין מפחדים מן הזקנה; | `בִּלַּע הַמָּוֶת לָנֶצַח וּמָחָה אֲדֹנָי יְהוִה דִּמְעָה מֵעַל כָּל פָּנִים` (ישעיהו כה:ח) | equivalent | עולם שאין בו מוות, ולכן אין בו פחד. מוטיב משותף, לא מקור. |
| 1.18b | sa mṛtyupāśān purataḥ praṇodya śokātigo modate svargaloke | הוא, אחרי שהדף לפניו את חבלי מָוֶת, מעבר לצער – עולז בעולם האור. | — | equivalent | `אֲפָפוּנִי חֶבְלֵי-מָוֶת; וְנַחֲלֵי בְלִיַּעַל יְבַעֲתוּנִי` (תהילים יח:ה; וכן `אֲפָפוּנִי חֶבְלֵי-מָוֶת וּמְצָרֵי שְׁאוֹל מְצָאוּנִי` (תהילים קטז:ג)) – אותו צירוף בדיוק: *mr̥tyupāśa* "חבלי המוות" (*pā́śa* `חֶבֶל`, `../renderings.md` §5.3). במזמור החבלים אופפים את המתפלל והאל מציל; כאן היודע "הודף" אותם בעצמו. הודו לא באה במגע עם ישראל: מוטיב משותף (המוות כצייד בחבלים), לא מקור. |
| 1.20a | yeyaṃ prete vicikitsā manuṣye astīty eke nāyam astīti caike | "הספק הזה כשבן אנוש מת – 'הוא קיים', אומרים אחדים, ו'הוא אינו קיים', אומרים אחרים – | `אִם-יָמוּת גֶּבֶר הֲיִחְיֶה` (איוב יד:יד) | equivalent | `מִי יוֹדֵעַ רוּחַ בְּנֵי הָאָדָם הָעֹלָה הִיא לְמָעְלָה; וְרוּחַ הַבְּהֵמָה הַיֹּרֶדֶת הִיא לְמַטָּה לָאָרֶץ` (קוהלת ג:כא) – אותה שאלה, באותו ניסוח של ספק ("מי יודע"); ו. קהלת ואיוב נשארים בספק; נצ'יקטס דורש תשובה מן המוות עצמו. מוטיב משותף (השאלה על הקיום אחרי המוות), לא מקור – אבל שני הטקסטים קרובים בזמן (המאות ה־5–3 לפנה"ס), ושניהם עדות לאותה שאלה שעלתה בתרבויות רבות בתקופה ההיא. |
| 1.23a | śatāyuṣaḥ putrapautrān vṛṇīṣva bahūn paśūn hastihiraṇyam aśvān | "בחר בנים ונכדים בני מאה שנה, בהמות רבות, פילים וזהב, סוסים; | `וְלֹא שָׁאַלְתָּ לְּךָ יָמִים רַבִּים וְלֹא שָׁאַלְתָּ לְּךָ עֹשֶׁר וְלֹא שָׁאַלְתָּ נֶפֶשׁ אֹיְבֶיךָ` (מלכים-א ג:יא); `וְגַם אֲשֶׁר לֹא שָׁאַלְתָּ נָתַתִּי לָךְ גַּם עֹשֶׁר גַּם כָּבוֹד` (מלכים-א ג:יג) | divergence | שלמה בחר בחכמה ולא בחיים ארוכים ועושר, והאל נותן לו גם את מה שלא ביקש (). כאן המוות עצמו מציע את החיים הארוכים והעושר כדי שהנער *לא* יבחר בידיעה – והנער מסרב. מוטיב משותף (הבחירה בידיעה על פני חיים ועושר), לא מקור. |
| 1.26b | api sarvaṃ jīvitam alpam eva tavaiva vāhās tava nṛtyagīte | גם החיים כולם – מעט הם. שלך יהיו הרכבים, שלך הריקוד והשיר! | — | equivalent | `אֱנוֹשׁ כֶּחָצִיר יָמָיו` (תהילים קג:טו) – קוצר החיים. מוטיב משותף, לא מקור. |
| 1.27a | na vittena tarpaṇīyo manuṣyo lapsyāmahe vittam adrākṣma cet tvā | לא בהון ישבע בן אנוש. הון נשיג – אם ראינו אותך. | — | equivalent | `אֹהֵב כֶּסֶף לֹא יִשְׂבַּע כֶּסֶף וּמִי אֹהֵב בֶּהָמוֹן לֹא תְבוּאָה; גַּם זֶה הָבֶל` (קוהלת ה:ט) – אותה חכמה: העושר אינו משביע. מוטיב משותף, לא מקור. |
| 1.28b | abhidhyāyan varṇaratipramodān atidīrghe jīvite ko rameta | כשהוא מהרהר בתענוגות היופי והאהבה – מי ישמח בחיים ארוכים מדי? | — | equivalent | `וּמוֹתַר הָאָדָם מִן הַבְּהֵמָה אָיִן כִּי הַכֹּל הָבֶל` (קוהלת ג:יט) – החיים הארוכים אינם תשובה. מוטיב משותף, לא מקור. |
| 2.1a | anyac chreyo 'nyad utaiva preyas te ubhe nānārthe puruṣaṃ sinītaḥ | "אחד הוא הטוב, ואחר הוא הנעים; שניהם, בעלי יעדים שונים, קושרים את האָדָם. | `רְאֵה נָתַתִּי לְפָנֶיךָ הַיּוֹם אֶת הַחַיִּים וְאֶת הַטּוֹב וְאֶת הַמָּוֶת וְאֶת הָרָע` (דברים ל:טו) | divergence | שתי דרכים לפני האדם, והוא צריך לבחור. אבל בדברים הבחירה היא בין טוב לרע; כאן היא בין הטוב לנעים – שני דברים שאינם רעים, ושניהם "קושרים". ההודים הקדומים לא באו במגע עם ישראל: מוטיב משותף (שתי הדרכים), לא מקור. |
| 2.1b | tayoḥ śreya ādadānasya sādhu bhavati hīyate 'rthād ya u preyo vṛṇīte | מי שלוקח מהם את הטוב – ייטב לו; נופל מן היעד מי שבוחר את הנעים. | `וּבָחַרְתָּ בַּחַיִּים לְמַעַן תִּחְיֶה אַתָּה וְזַרְעֶךָ` (דברים ל:יט) | equivalent | הבחירה (√*vr̥*, הפועל של ה"משאלות") ותוצאתה. מוטיב משותף, לא מקור. |
| 2.2b | śreyo hi dhīro 'bhi preyaso vṛṇīte preyo mando yogakṣemād vṛṇīte | כי החכם בוחר את הטוב על פני הנעים; הכסיל בוחר את הנעים, בשביל רכישה ושמירה. | — | equivalent | `הֶחָכָם עֵינָיו בְּרֹאשׁוֹ וְהַכְּסִיל בַּחֹשֶׁךְ הוֹלֵךְ` (קוהלת ב:יד) – החכם והכסיל כשתי דמויות מנוגדות. מוטיב משותף, לא מקור. |
| 2.3b | naitāṃ sṛṅkāṃ vittamayīm avāpto yasyāṃ majjanti bahavo manuṣyāḥ | לא לקחת את השרשרת הזאת, העשויה הון, שבה טובעים בני אנוש רבים. | `כִּי-טוֹבָה חָכְמָה מִפְּנִינִים; וְכָל-חֲפָצִים לֹא יִשְׁווּ-בָהּ` (משלי ח:יא) | equivalent | הידיעה עדיפה על העושר. מוטיב משותף, לא מקור. |
| 2.5a | avidyāyām antare vartamānāḥ svayaṃ dhīrāḥ paṇḍitaṃ manyamānāḥ | השוכנים בתוך אי־הידיעה, חכמים בעיני עצמם, חושבים את עצמם בקיאים – | `אַל תְּהִי חָכָם בְּעֵינֶיךָ` (משלי ג:ז) | equivalent | המוטיב של מי שחכם בעיני עצמו משותף לספרות החכמה. מוטיב משותף, לא מקור. |
| 2.5b | dandramyamāṇāḥ pariyanti mūḍhā andhenaiva nīyamānā yathāndhāḥ | מתרוצצים, מסתובבים, השוטים, כמו עיוורים המובלים בידי עיוור. | `נְגַשְׁשָׁה כַעִוְרִים קִיר וּכְאֵין עֵינַיִם נְגַשֵּׁשָׁה` (ישעיהו נט:י) | equivalent | העיוורון הרוחני כגישוש של עיוורים. התמונה המלאה "עיוור מוביל עיוור" ידועה מן הברית החדשה (מתי טו:יד), לא מן התנ"ך. מוטיב משותף, לא מקור. |
| 2.6b | ayaṃ loko nāsti para iti mānī punaḥ punar vaśam āpadyate me | "העולם הזה – הוא קיים; אין אחר", כך חושב הוא, ושוב ושוב הוא בא תחת שלטוני. | `אָכוֹל וְשָׁתוֹ כִּי מָחָר נָמוּת` (ישעיהו כב:יג) | equivalent | עמדתו של מי שאין לו עולם מלבד הזה. מוטיב משותף, לא מקור. |
| 2.9a | naiṣā tarkeṇa matir āpaneyā proktānyenaiva sujñānāya preṣṭha | לא בעיון אפשר להשיג את התובנה הזאת; כשאחר מלמד אותה, היא קלה לידיעה, אהובי. | `וְהַחָכְמָה מֵאַיִן תִּמָּצֵא; וְאֵי זֶה מְקוֹם בִּינָה` (איוב כח:יב); `אֱלֹהִים הֵבִין דַּרְכָּהּ` (איוב כח:כג) | equivalent | החכמה שאינה נמצאת בחיפוש אנושי. באיוב רק האל יודע את מקומה: ; כאן המוות, המורה, הוא שמלמד. מוטיב משותף (החכמה הנסתרת שאין להשיגה בכוח), לא מקור. |
| 2.10a | jānāmy ahaṃ śevadhir ity anityaṃ na hy adhruvaiḥ prāpyate hi dhruvaṃ tat | אני יודע שהאוצר אינו קבוע; כי בלא־יציבים אין משיגים את היציב ההוא. | `כִּי עָשֹׂה יַעֲשֶׂה-לּוֹ כְנָפַיִם` (משלי כג:ה) | equivalent | העושר שאינו נשאר. מוטיב משותף, לא מקור. |
| 2.18a | na jāyate mriyate vā vipaścin nāyaṃ kutaścin na babhūva kaścit | החכם אינו נולד ואינו מת; הוא לא בא מאיזה מקום, ולא נהיה מישהו. | — | divergence | `וְהָרוּחַ תָּשׁוּב אֶל הָאֱלֹהִים אֲשֶׁר נְתָנָהּ` (קוהלת יב:ז) – גם בקהלת משהו באדם אינו חוזר לעפר; אבל שם הרוח ניתנה ושבה אל נותנה, וכאן הנפש לא נולדה ואין לה ממי לבוא ואל מי לשוב. מוטיב משותף (משהו באדם שאינו מת), לא מקור. |
| 2.21a | āsīno dūraṃ vrajati śayāno yāti sarvataḥ | כשהוא יושב – הוא הולך רחוק; כשהוא שוכב – הוא הולך לכל מקום. | — | divergence | `אָנָה אֵלֵךְ מֵרוּחֶךָ; וְאָנָה מִפָּנֶיךָ אֶבְרָח` (תהילים קלט:ז) – במזמור האל נמצא בכל מקום, והאדם אינו יכול לברוח ממנו; כאן הנפש של האדם עצמו "הולכת לכל מקום" בלי לזוז. מוטיב משותף (נוכחות בכל מקום), לא מקור. |
| 2.23a | nāyam ātmā pravacanena labhyo na medhayā na bahunā śrutena | הנפש הזאת אינה מושגת בהוראה, לא בדעת, לא בשמיעה רבה. | `אָכֵן רוּחַ-הִיא בֶאֱנוֹשׁ; וְנִשְׁמַת שַׁדַּי תְּבִינֵם` (איוב לב:ח) | equivalent | הבינה אינה באה מלימוד ומזקנה, אלא מבפנים. מוטיב משותף, לא מקור. |
| 2.23b | yam evaiṣa vṛṇute tena labhyas tasyaiṣa ātmā vivṛṇute tanūṃ svām | את מי שהוא בוחר – בו היא מושגת; לו הנפש הזאת מגלה את גופה שלה. | `אֱלֹהִים הֵבִין דַּרְכָּהּ; וְהוּא יָדַע אֶת-מְקוֹמָהּ` (איוב כח:כג) | equivalent | הידיעה העליונה אינה בידי המבקש. מוטיב משותף, לא מקור. |
| 2.24b | nāśāntamānaso vāpi prajñānenainam āpnuyāt | ולא מי שמחשבתו אינה שקטה – בבינה ישיג אותה. | `וְסוּר מֵרָע בִּינָה` (איוב כח:כח) | equivalent | הבינה קשורה בחדילה מן הרע. מוטיב משותף, לא מקור. |
| 3.3a | ātmānaṃ rathinaṃ viddhi śarīraṃ ratham eva tu | דע את הנפש כבעל המרכבה, ואת הגוויה – כמרכבה; | — | divergence | `אַל-תִּהְיוּ כְּסוּס כְּפֶרֶד אֵין הָבִין; בְּמֶתֶג-וָרֶסֶן עֶדְיוֹ לִבְלוֹם` (תהילים לב:ט) – גם המזמור משווה את האדם הסורר לסוס שצריך מתג ורסן; כאן הסוסים הם החושים *בתוך* האדם, והמושכות הן המחשבה. מוטיב משותף (סוס ורסן כמשל לשלטון עצמי), לא מקור; משל המרכבה הידוע ביותר במערב הוא של אפלטון (פיידרוס 246), גם הוא בלי מגע. |
| 3.5b | tasyendriyāṇy avaśyāni duṣṭāśvā iva sāratheḥ | חושיו סוררים, כמו הסוסים הרעים של עגלון. | `וּמֹשֵׁל בְּרוּחוֹ מִלֹּכֵד עִיר` (משלי טז:לב) | equivalent | השליטה בעצמו כגבורה. מוטיב משותף, לא מקור. |
| 3.14a | uttiṣṭhata jāgrata prāpya varān nibodhata | קומו! התעוררו! אחרי שהשגתם את המשאלות – למדו! | `עוּרִי עוּרִי לִבְשִׁי עֻזֵּךְ צִיּוֹן` (ישעיהו נב:א) | equivalent | קריאת ההתעוררות. בישעיהו היא לעם ולעיר; כאן לכל שומע, מן השינה של אי־הידיעה. מוטיב משותף, לא מקור. |
| 3.14b | kṣurasya dhārā niśitā duratyayā durgaṃ pathas tat kavayo vadanti | חודו המושחז של תער, קשה לעבור עליו – דרך קשה היא זו – כך מדברים המשוררים. | `וְאֹרַח צַדִּיקִים כְּאוֹר נֹגַהּ: הוֹלֵךְ וָאוֹר עַד-נְכוֹן הַיּוֹם` (משלי ד:יח); `דֶּרֶךְ רְשָׁעִים כָּאֲפֵלָה` (משלי ד:יט) | divergence | במשלי דרך החכם היא אור הולך וגדל, ודרך הרשעים חשכה: ; כאן הדרך הנכונה עצמה היא חוד של תער. מוטיב משותף (הדרך כמשל לחיים), לא מקור. |
| 3.15a | aśabdam asparśam arūpam avyayaṃ tathārasaṃ nityam agandhavac ca yat | מה שאין בו קול, אין בו מגע, אין בו צורה, אינו כלה, וכך גם אין בו טעם, קבוע, ואין בו ריח, | `קוֹל דְּבָרִים אַתֶּם שֹׁמְעִים וּתְמוּנָה אֵינְכֶם רֹאִים זוּלָתִי קוֹל` (דברים ד:יב) | divergence | בדברים האל אין לו תמונה, אבל יש לו קול; כאן העיקרון העליון אין בו גם קול – הוא מעבר לכל חמשת החושים (קול, מגע, צורה, טעם, ריח). מוטיב משותף (העליון שאין לו צורה), לא מקור. |

### Parallels index (KU2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4.2a | parācaḥ kāmān anuyanti bālās te mṛtyor yanti vitatasya pāśam | אחרי חשקים חיצוניים הולכים הנערים; הם הולכים אֶל חבל מָוֶת הפרוש. | `אֲפָפוּנִי חֶבְלֵי-מָוֶת` (תהלים יח:ה) | equivalent | כמו *mr̥tyupāśa* `חבלי מָוֶת` בפרק הראשון: המוות כצייד שפורש חבלים, דימוי משותף לתרבויות שלא נפגשו; הודו הקדומה לא באה במגע עם ישראל. |
| 4.9a | yataś codeti sūryo astaṃ yatra ca gacchati | זה שממנו עולה השמש, ושאליו היא הולכת לשקוע – | — | — | [shared motif] `וְזָרַח הַשֶּׁמֶשׁ וּבָא הַשָּׁמֶשׁ` (קהלת א:ה) – הזריחה והשקיעה כמחזור הקבוע של העולם; בקהלת הם מראים שאין חדש, כאן הם מצביעים על המקור האחד שממנו השמש באה ואליו היא שבה. מוטיב משותף, לא מקור. |
| 5.15b | tam eva bhāntam anu bhāti sarvaṃ tasya bhāsā sarvam idaṃ vibhāti | אחריו, המאיר, מאיר הכל; בזוהרו זורח כל זה. | — | — | [shared motif] `וְהָיָה לָךְ יְהוָה לְאוֹר עוֹלָם` (ישעיהו ס:יט) – אור שאינו של השמש והירח; בישעיהו האל מחליף את המאורות, כאן הם מאירים רק באורו. מוטיב משותף, לא מקור. |
