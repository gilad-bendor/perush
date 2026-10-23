# Translator notes: Advice to a Prince (unit AP)

## AP (T5)

**Scope done:** all 55 lines of Advice to a Prince (eBL `L/2/5`, labels `1`–`55`), in `annotated.rtl.md`, drafted 2026-10-22 (Round 3, run 3; the only translator running; each section written to disk and filled with `prophecy_tools.py fill` as soon as it was drafted: 1–6, 7–11, 12–19, 20–34, 35–46, 47–55). `prophecy_tools.py verify AP --strict`: **OK** (55/55 entries, no notes). `../../tools/check_bible_quotes.py annotated.rtl.md`: **0 problems**; the same on this file: **0 problems**. Every quoted verse was printed with `--show` first (two quotations from memory were caught in pass (a) and replaced by printed verses: Job 7:1, and a Deut 30-like phrase in line 2 that was removed). The gates were tested once on a scratch change of line 8 (`שוחד` and a missing `דין` were both reported) and the file restored.

**Sections** (`##`, from eBL's rulings): 1–2, 3–6, 7–11, 12–15, 16–19, 20–27, 28–34, 35–40, 41–46, 47–50, 51–55.

**Line 45** has no eBL normalization: `fill` built the backticked line from the lemma forms (`ašaršunu ana namê ikkammar`); the entry says so and checks it against both manuscripts' ATF.

### Review pass (a): fidelity
Every Hebrew line read against the eBL normalization, the variants and the manuscripts' ATF (a script printed the `>` lines beside the backticked lines).
- **Brackets** from the ATF, a word bracketed only when its root is broken in every manuscript: 33 `[ההולך ל]פני` (*[ālik p]ān*: NinNA1 `[x x p]a-an`, NipNB1 broken); 34 `[חי]ל?` (*[ummā]n?*); 35 `שוורי[הם]` (the suffix is broken in both tablets, while *eqlētīšunu* is whole in NipNB1, so `שדותיהם` has no bracket); 37 `כבשי[הם …]`; 36 `כְּלַל?` was first `כְּלַ[ל?]` and was corrected (*gi?#-im-r[a?-at?*: the root is preserved, only the ending is broken). Damaged-but-read signs (`#`, `!?`) get `?`, not brackets (32 `וצבא? המלך`, 34 `אויבו?`).
- **Words in round brackets in the normalization** (only in some manuscripts) are not translated in the line, as in the wisdom corpus: 11 *(āli)*, 41 *(u)*; the entries say so.
- **Tense:** preterite protases = Hebrew past (1–20, 28–30); present protases (32, 35–37, 42, 47–48, 53) = Hebrew future, as in the Torah's casuistic law; all apodoses future; statives none. `(אִם)` once per condition (12–13, 16–17, 20–22, 28–29, 35–36, 41–42, 47–48, 51–53).
- **Infinitives for finite verbs** (13 *turrū*, 16 *emēdu*, 17 *šūrubu*, 21 *emēdu*, 29 *šarāki*; eBL's introduction calls them deliberate archaisms) = Hebrew verbal nouns (`וַהֲפִיכָה`, `הֲשָׁתַת`, `הַכְנָסָה`, `הַעֲנָקָה`), so that the feature stays visible.
- **Negations:** *lā* (protasis, 1–4) and *ul* (main clause, 7, 55) both `לא`; 5 and 6 have **no** negation (checked on every tablet: NinNA1 `i-qul₂`, NipNB1 `ME` without `NU`).
- **Number:** 35–37, 47–48, 53 are 3rd person **plural** (the king's men, or impersonal); Foster has "he" throughout – corrected and noted in each entry.
- Additions outside `( )`: none except Hebrew grammar (`את`, the resumptive `(עליו)` in 16 and 21 is in parentheses).

### Review pass (b): consistency
- One source verb = one Hebrew verb, checked across the text: *qâlu* `האזין` (1–7); *emēdu* `הֵשִׁית` (16, 18 N `הוּשַׁת`, 21, 53); *paṭāru* D `הִתִּיר` (35, 47, 50); *šanû* D `שִׁנָּה` (2, 35, 47) / G `השתנה` (5); *šarāku* `הֶעֱנִיק` (15, 29, 36); *redû* `נָהַג` (2, 6 Gtn = Piel; 31 N = Nifal); *kânu* D `כּוֹנֵן` (22, 27 – the wordplay kept); *leqû* `לָקַח` (8, 12); *erēbu* `בָּא` (19, 55), Š `הִכְנִיס` (12, 17); *maqātu* Š `הִפִּיל` (10, 39); *dekû* `הֵעִיר` (10, 32); *manû* `מָנָה` (46 N, 48); *šakānu* `שָׂם` (7, 14); *izuzzu* Š `הֶעֱמִיד` (52); *nesû* `התרחק` (54).
- One source noun = one Hebrew noun: *ahû* / *ahītu* `זר` / `זָרָה` (2, 7, 9, 19, 36, 50); *nakru* `אויב` (9, 15, 19, 24, 25, 34) and *ayyābu* `צַר` (14, 31) kept apart; *ṣābu* `צבא` (10, 21, 26, 32) and *ummānu* `חיל` (25, 32–34) apart, and both apart from *ummânu* `אֻמָּן` (4, 41, 44); *ṣibittu* `אחיזה` (17, 19, 37); *ṣimittu* / *ṣimdatu* `צמד` (31, 35); *makkūru* `רכוש` (12, 15); *riksu* `קשרים` (47, 50); *tupšikku* `סַל` (21, 25, 53); *dīnu* `דין` (1, 2, 7, 8, 13); *rubû* `נשיא` (3, 7, 11, 23); *šūt rēši* `סריס` (11, 41, 44, 51).
- Formulas: *šamû u erṣetu* = `שמיים וָאָרֶץ` (plene; 7, 14, 27, 38, 49); *ilū rabûtu* = `האלים הגדולים` (6, 26, 53, 54); *mār Sippar Nippur u Bābili* = `בן סיפר, ניפור ובבל` (16, 28); `סיפר, ניפור ובבל` (20, 52).
- Earlier corpora grepped (`prophecy_tools.py lookup`, `grep every`) for every new word; the precedents followed are named in each entry. Collisions avoided: *waklu* not `מְמֻנֶּה` (LH *nu-banda₃*) nor `מַשְׁגִּיחַ` (LH *āšer*) → `נוֹגֵשׂ`; *šatammu* not `פָּקִיד` (MAL B *qēpu*) → `סוֹכֵן`; *sāniqu* not `מְפַקֵּחַ` (*gugallu*, line 38 and EST) → `מְבַקֵּר`; *tabālu* not `נשא` (*našû*, line 40) → `נָטַל` (LH); *bērūtu* not `תֵּל` (= *tīlu*) → `גַּל`; *nabalkutu* not `מָרַד` (EST *sīḫu* `מרד`) → `הִתְהַפֵּךְ עַל` (T3); *kadrû* not `מִנְחָה` (gated in the creation corpus) → `מַתָּנָה` (wisdom).
- Names vocalized at their first occurrence (Ea 2, Šamaš 7, Sippar 7, Nippur 8, Enlil 9, Babylon 12, Marduk 14, Anu 26, Erra 33, Adad 38, Apsû 43, Nabû 49, Esagil 49), the ★ names (`אָנוּ`, `נָבוּ`, `שַׁמַשׁ`) every time; `אֻמָּן`, `הֲלָךְ`, `רֶכֶשׁ`, `זָרָה`, `נָוֶה`, `אֵכּוּר` vocalized every time (homographs: "nurse", "walked", "acquired", "scattered", modern "oasis").
- The ★ re-check of the pre-set table (`../renderings.md` §4) against the drafted lines: the rows used as given are *qâlu*, *dīnu*, *dâṣu*, *rubû*, *ummânu*, *šūt rēši*, *apkallu*, *ṭēmu*, *šīmtu*, *ahû*, *ṭātu*, *makkūru* / *būšu*, *tupšikku*, *ilku*, *šisīt nāgiri*, *šubarrû* (`פְּטוֹר`, one of the two options), *bītāt ilī*, *kiṣṣu*, *atmanu*, *nīqu*, *nammaššû*, *zāqīqu*; the rows changed are listed under "Deviations" below.

### Review pass (c): Hebrew read aloud
Read section by section as the clean translation. Changes: 2 and 50 `וְזָרָה` vocalized (unvocalized "and scattered"); 43 `הָאַפְסוּ` vocalized; 51–52 `סוֹכֵן אֵכּוּר` vocalized; 44 `הָאֻמָּן` (the first draft had the unvocalized `האומן`, which reads "the nurse"); dashes in 13, 16–17, 21–22, 29, 41 so that the archaic infinitives and the fronted topics read as headings of the clause, not as broken syntax. The register is biblical-literary without vav-consecutive; the casuistic future of 32–53 reads like the Covenant Code.

### Parallels index (AP)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1–13 | *dīnu* (×6), no *šipṭu* in the text | `דִּין` | `לֹא תַטֶּה מִשְׁפָּט לֹא תַכִּיר פָּנִים; וְלֹא תִקַּח שֹׁחַד` (דברים טז:יט) | [divergence] | The Advice speaks of *dīnu* ("legal decision, lawsuit"), the Torah of `מִשְׁפָּט`; `מִשְׁפָּט` kept out of the translation so that the difference shows. |
| 1 | *šarru ana dīni lā iqūl … māssu innamma* | `(אִם) המלך לַדִּין לא הֶאֱזִין – … ארצו תִּשָּׁמֵם` | `מֶלֶךְ בְּמִשְׁפָּט יַעֲמִיד אָרֶץ;    וְאִישׁ תְּרוּמוֹת יֶהֶרְסֶנָּה` (משלי כט:ד) | [equivalent] | The same equation (the king's justice holds up the land; a king who takes contributions, cf. 12, destroys it). Line 1 is the work's title in the Nineveh catalogue and in the Nippur letter. |
| 1 | *nišūšu inneššâ* | `עמו יֵבוֹךְ` | `וְהָעִיר שׁוּשָׁן נָבוֹכָה` (אסתר ג:טו) | [equivalent] | *ešû* N = `נָבוֹךְ` (Gilgameš OB). |
| 1, 9 | *innamma*; *nakra ahâ* | `תִּשָּׁמֵם`; `אויב זר` | `אַרְצְכֶם שְׁמָמָה עָרֵיכֶם שְׂרֻפוֹת אֵשׁ; אַדְמַתְכֶם לְנֶגְדְּכֶם זָרִים אֹכְלִים אֹתָהּ` (ישעיהו א:ז) | [equivalent] | Desolation and strangers together. |
| 2 | *ahītu irteneddīšu* | `וְזָרָה תְּנַהֲגֶנּוּ` | `חַטָּאִים תְּרַדֵּף רָעָה` (משלי יג:כא) | [equivalent] | *redû* = `נָהַג` (Gilgameš), not `רדף`: "leads him on", Gtn. |
| 3 | *ūmūšu ikarrû* | `ימיו יקצרו` | `וּשְׁנוֹת רְשָׁעִים תִּקְצֹרְנָה` (משלי י:כז); `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ` (דברים יז:כ) | [equivalent]; [divergence] | The law of the king promises long days to the king who keeps the Torah; the Advice threatens short days to the king who does not heed his princes. |
| 4 | *ana ummâni lā iqūl māssu ibbalakkassu* | `לָאֻמָּן לא האזין – ארצו תתהפך עליו` | `וַיַּעֲזֹב אֶת עֲצַת הַזְּקֵנִים אֲשֶׁר יְעָצֻהוּ` (מלכים א יב:ח); `וַיִּפְשְׁעוּ יִשְׂרָאֵל בְּבֵית דָּוִד עַד הַיּוֹם הַזֶּה` (מלכים א יב:יט) | [equivalent] | Counsel not heeded → the land breaks away. |
| 5 | *ishappu* | `בליעל` | `יָצְאוּ אֲנָשִׁים בְּנֵי בְלִיַּעַל מִקִּרְבֶּךָ וַיַּדִּיחוּ אֶת יֹשְׁבֵי עִירָם` (דברים יג:יד) | [equivalent] | The wisdom corpus's *ishappu* = `בליעל`. |
| 5 | *ṭēm māti išanni* | `טַעַם הארץ ישתנה` | `וַיְשַׁנּוֹ אֶת טַעְמוֹ בְּעֵינֵיהֶם` (שמואל א כא:יד) | [equivalent] | "Change of *ṭēmu*" = madness, of a whole land. |
| 6 | *ina šitūlti u ṭūdāt mīšari irteneddûšu* | `בשאלה ובנתיבות מישרים יְנַהֲגוּהוּ` | `יַנְחֵנִי בְמַעְגְּלֵי-צֶדֶק לְמַעַן שְׁמוֹ` (תהלים כג:ג); `צֶדֶק צֶדֶק תִּרְדֹּף` (דברים טז:כ) | [equivalent]; [divergence] | **Foster reverses the line** ("clever trick … hound him into right counsel"): the protasis has no negation and the apodosis is a reward, the mirror of 2. *mīšaru* = `מֵישָׁרִים`, never `צֶדֶק`. |
| 7 | *mār Sippar idāṣ-ma* | `את בן סִפַּר עיוות` | `לְעַוֵּת אָדָם בְּרִיבוֹ אֲדֹנָי לֹא רָאָה` (איכה ג:לו) | [equivalent] | *dâṣu* with a person as object, in a lawsuit. |
| 7 | *Šamaš dayyān šamê u erṣeti* | `שַׁמַשׁ, דיין שמיים וָאָרֶץ` | `הֲשֹׁפֵט כָּל הָאָרֶץ לֹא יַעֲשֶׂה מִשְׁפָּט` (בראשית יח:כה) | [equivalent] | The god as judge of the world. |
| 7 | *ahâ idīn … dīna ahâ … išakkan* | `ואת הזר דן … דין זר בארצו ישים` | `וּשְׁפַטְתֶּם צֶדֶק בֵּין אִישׁ וּבֵין אָחִיו וּבֵין גֵּרוֹ` (דברים א:טז); `דָּן דִּין עָנִי וְאֶבְיוֹן אָז טוֹב` (ירמיהו כב:טז) | [divergence]; [equivalent] | The Torah commands equal justice to the stranger; the Advice condemns a king who judged the stranger **instead of** the citizen. Measure for measure: "judged a stranger" → "a stranger's justice". |
| 8 | *kadrâ ilqē-ma idāssunūti* | `ומתנה לקח, ועיוותם` | `וַיִּקְחוּ שֹׁחַד וַיַּטּוּ מִשְׁפָּט` (שמואל א ח:ג); `וְלֹא תִקַּח שֹׁחַד` (דברים טז:יט); `וִיאַבֵּד אֶת לֵב מַתָּנָה` (קהלת ז:ז) | [equivalent] | Samuel's sons: took – and perverted; the very sequence. *kadrû* `מַתָּנָה`, not `שֹׁחַד` (*ṭātu*, 42). Foster's "(customary) remuneration … (but)" softens. |
| 9–10 | *nakra ahâ idakkâššum* | `אויב זר יָעִיר עליו` | `הִנְנִי מֵעִיר עֲלֵיהֶם אֶת מָדָי` (ישעיהו יג:יז) | [equivalent] | The god "rouses" a foreign enemy: the same verb (*dekû* = `הֵעִיר`). |
| 11 | *šūt rēšīšu* | `וסריסיו` | `וְנָתַן לְסָרִיסָיו וְלַעֲבָדָיו` (שמואל א ח:טו) | [cognate] | `סָרִיס` < *ša rēši*. In Samuel the eunuchs profit, here they roam the streets. |
| 11 | *ina sūqī zilullîš iṣṣanuddū* | `ברחובות כְּהֵלֶךְ יָצוּדוּ` | `הָאֹכְלִים לְמַעֲדַנִּים נָשַׁמּוּ בַּחוּצוֹת` (איכה ד:ה) | [equivalent] | The court in the streets. |
| 12 | *kasap … ilqē-ma ana makkūri ušēriba* | `כסף בני בָּבֶל לקח, ולרכוש הכניס` | `וְכֶסֶף וְזָהָב לֹא יַרְבֶּה לּוֹ מְאֹד` (דברים יז:יז); `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח` (שמואל א ח:יד) | [equivalent]; [cognate] *leqû* / `לָקַח` | The "taking king". |
| 13 | *dīn … išmē-ma ana qalli turrū* | `את דין הבבלים שמע – וַהֲפִיכָה לְקַל` | `כַּקָּטֹן כַּגָּדֹל תִּשְׁמָעוּן` (דברים א:יז) | [divergence] | The duty to hear every case; the king heard and made it light. |
| 14 | *ayyābīšu elīšu išakkan* | `את צָרָיו עליו ישים` | `הָיוּ צָרֶיהָ לְרֹאשׁ` (איכה א:ה); `הַגֵּר אֲשֶׁר בְּקִרְבְּךָ יַעֲלֶה עָלֶיךָ מַעְלָה מָּעְלָה` (דברים כח:מג) | [equivalent] | *ayyābu* `צַר` beside *nakru* `אוֹיֵב` (15), as in Lam 1:5. |
| 15 | *makkūršu ana nakrīšu išarrak* | `את רכושו לאויבו יעניק` | `נַחֲלָתֵנוּ נֶהֶפְכָה לְזָרִים` (איכה ה:ב) | [equivalent] | Measure for measure with 12 (the same *makkūru*). |
| 16, 18 | *anna emēdu*; *annu innendu* | `הֲשָׁתַת עָוֹן`; `עוון הוּשַׁת` | `אִם כֹּפֶר יוּשַׁת עָלָיו` (שמות כא:ל); `אַל נָא תָשֵׁת עָלֵינוּ חַטָּאת` (במדבר יב:יא) | [equivalent] | `שית` is the Covenant Code's verb for imposing a penalty; `עָוֹן` = guilt and penalty, like *arnu*. |
| 17, 19 | *bīt ṣibitti* | `בית־האחיזה` | `וַיִּתְּנֵהוּ אֶל בֵּית הַסֹּהַר` (בראשית לט:כ); `וְנָתְנוּ אוֹתוֹ בֵּית הָאֵסוּר` (ירמיהו לז:טו) | [equivalent] | Neutral Hebrew (Šamaš Hymn precedent); none of the three biblical prison words. |
| 18 | *ālu ana bērūti iššappak* | `העיר לְגַל תִּשָּׁפֵךְ` | `וְהָיְתָה בָבֶל לְגַלִּים` (ירמיהו נא:לז); `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | [equivalent] | *bērūtu* is not *tīlu* (`תֵּל`), and `עוֹלָם` is never used. Deut 13 has the scoundrels (5) and the heaped city (18) in one chapter. |
| 20 | *mithāriš ušatbi* | `כאחד הקים` | `וַיַּעַל הַמֶּלֶךְ שְׁלֹמֹה מַס מִכָּל יִשְׂרָאֵל` (מלכים א ה:כז); `וּמִבְּנֵי יִשְׂרָאֵל לֹא נָתַן שְׁלֹמֹה עָבֶד` (מלכים א ט:כב) | [equivalent] | Kings itself is torn over whether the free people were exempt. |
| 21, 25 | *tupšikka emēdu*; *tupšikka … izabbil* | `הֲשָׁתַת סַל`; `סַל לאויבו יסבול` | `הֲסִירוֹתִי מִסֵּבֶל שִׁכְמוֹ;    כַּפָּיו מִדּוּד תַּעֲבֹרְנָה` (תהלים פא:ז); `וַיַּפְקֵד אֹתוֹ לְכָל סֵבֶל בֵּית יוֹסֵף` (מלכים א יא:כח); `לְמַעַן עַנֹּתוֹ בְּסִבְלֹתָם` (שמות א:יא) | [cognate] *zabālu* / `סֵבֶל`; [equivalent] *tupšikku* / `דּוּד` | Ps 81:7 has the same pair, the load and the basket. Atra-ḫasīs I 2 `סָבְלוּ סַל`. Foster's "forced labor" hides the basket. |
| 22 | *ilkī* | `הֲלָךְ` | `וּמִדָּה בְלוֹ וַהֲלָךְ מִתְיְהֵב לְהוֹן` (עזרא ד:כ) | [cognate] | Aramaic `הֲלָךְ` < *ilku*. |
| 22 | *šisīt nāgiri* | `צעקת הכרוז` | `וְהַמֶּלֶךְ אָסָא הִשְׁמִיעַ אֶת כָּל יְהוּדָה אֵין נָקִי` (מלכים א טו:כב) | [equivalent] | A royal proclamation of corvée, "none exempt": what the Advice forbids. |
| 24 | *māssu ana nakrīšu usahhar* | `את ארצו אל אויבו יַסֵּב` | `לְהָסֵב אֵלֶיךָ אֶת כָּל יִשְׂרָאֵל` (שמואל ב ג:יב) | [equivalent] | Turning a kingdom over to another king, the same root (*sahāru* = `סבב`). |
| 26–27 | *ṣābī šunūti … ina puhrīšunu šubarrâšunu ukinnū* | `הצבא ההוא – … באספתם את פטורם כוננו` | `וּפָלְחֵי בֵּית אֱלָהָא דְנָה מִנְדָּה בְלוֹ וַהֲלָךְ לָא שַׁלִּיט לְמִרְמֵא עֲלֵיהֹם` (עזרא ז:כד); `וְאֵת בֵּית אָבִיו יַעֲשֶׂה חָפְשִׁי בְּיִשְׂרָאֵל` (שמואל א יז:כה); `נָקִי יִהְיֶה לְבֵיתוֹ שָׁנָה אֶחָת` (דברים כד:ה) | [equivalent] | **The exemption is a decree of the divine assembly, not a royal favour** (in the Bible the king grants it). |
| 27 | *ina puhrīšunu* | `באספתם` | `אֱלֹהִים נִצָּב בַּעֲדַת-אֵל` (תהלים פב:א) | [divergence] | The assembly of gods that judges unjust judges (Ps 82:2). |
| 29 | *imrâšunu ana mūrnisqī šarāki* | `את מספואם לָרֶכֶשׁ – הַעֲנָקָה` | `וְהַשְּׂעֹרִים וְהַתֶּבֶן לַסּוּסִים וְלָרָכֶשׁ יָבִאוּ` (מלכים א ה:ח); `רַק לֹא יַרְבֶּה לּוֹ סוּסִים` (דברים יז:טז) | [equivalent]; [divergence] | Solomon's district officers levy fodder "for the horses and the steeds"; Deut forbids the horses, the Advice forbids feeding them on the citizens' fodder. |
| 31, 35 | *ṣimittu*; *ṣindāt alpī* | `בְּצֶמֶד הצר`; `צמדי שוורי[הם]` | `וַיִּקַּח צֶמֶד בָּקָר וַיְנַתְּחֵהוּ` (שמואל א יא:ז) | [cognate] | *ṣamādu* / `צמד`. eBL lemmatizes 35 as *ṣimdatu* "regulation": a slip (ox-teams). |
| 32 | *dikûtu … idekkû* | `בגיוס … יָעִירוּ` | `אֶת בְּנֵיכֶם יִקָּח וְשָׂם לוֹ בְּמֶרְכַּבְתּוֹ וּבְפָרָשָׁיו` (שמואל א ח:יא) | [equivalent] | Foster's passive ("are conscripted") vs the active plural. |
| 33 | *[ālik p]ān ummānīšu* | `[ההולך ל]פני חילו` | `וַיהוָה הוּא הַהֹלֵךְ לְפָנֶיךָ` (דברים לא:ח); `וְיָצָא לְפָנֵינוּ וְנִלְחַם אֶת מִלְחֲמֹתֵנוּ` (שמואל א ח:כ) | [divergence] | Partly restored. The god who goes before the army smites it (34). |
| 35 | *eqlētīšunu ušannû* | `ואת שדותיהם ישנו` | `וְאֶת שְׂדוֹתֵיכֶם וְאֶת כַּרְמֵיכֶם וְזֵיתֵיכֶם הַטּוֹבִים יִקָּח` (שמואל א ח:יד); `לֹא תַסִּיג גְּבוּל רֵעֲךָ` (דברים יט:יד) | [equivalent] | |
| 36 | *ana ahî išarrakū* | `לזר יעניקו` | `וְנָתַן לַעֲבָדָיו` (שמואל א ח:יד); `חָלִילָה לִּי מֵיְהוָה מִתִּתִּי אֶת נַחֲלַת אֲבֹתַי לָךְ` (מלכים א כא:ג) | [equivalent] | *šarāku* `הֶעֱנִיק`, not `נָתַן` (*nadānu*). Naboth. |
| 36 | *iharrub* | `יחרב` | `וְנָתַתִּי אֶת עָרֵיכֶם חָרְבָּה` (ויקרא כו:לא) | [cognate] | *harābu* / `חרב`. Foster's "[*Adad will cut off water*]" is Paulus's restoration. |
| 37 | *ṣibitti immerī[šunu …] iṣabbatū* | `אחיזת כבשי[הם …] יאחזו` | `צֹאנְכֶם יַעְשֹׂר; וְאַתֶּם תִּהְיוּ לוֹ לַעֲבָדִים` (שמואל א ח:יז) | [equivalent] | The flock tax is last in both lists. |
| 39 | *nammaššê ṣērīšu ina hušahhi* | `את נעי שדהו בכפן יפיל` | `מַה נֶּאֶנְחָה בְהֵמָה נָבֹכוּ עֶדְרֵי בָקָר כִּי אֵין מִרְעֶה לָהֶם` (יואל א:יח) | [equivalent] | |
| 41 | *manzāz pān šarri* | `מעמד פני המלך` | `וּמַעֲמַד מְשָׁרְתָו` (מלכים א י:ה); `אַשְׁרֵי עֲבָדֶיךָ אֵלֶּה הָעֹמְדִים לְפָנֶיךָ תָּמִיד` (מלכים א י:ח) | [equivalent] | *manzāzu* `מַעֲמָד` (T3). |
| 42 | *ṭāssun imahhar* | `את שׁוחדם יקבל` | `וְלֹא תִקַּח שֹׁחַד כִּי הַשֹּׁחַד יְעַוֵּר עֵינֵי חֲכָמִים` (דברים טז:יט); `שֹׁחַד מֵחֵק רָשָׁע יִקָּח` (משלי יז:כג) | [equivalent] | The only `שֹׁחַד` in the text (*ṭātu*), and it is taken by the **scholar** (`עֵינֵי חֲכָמִים`!). The Bible "takes", the Advice "receives" (*mahāru*). |
| 45 | *ana namê* | `לְנָוֶה` | `כִּי עִיר בְּצוּרָה בָּדָד נָוֶה מְשֻׁלָּח וְנֶעֱזָב כַּמִּדְבָּר` (ישעיהו כז:י) | [cognate] | *namû* / `נָוֶה` in the same curse (city → abandoned pasture); the root of 1 *innamma*. |
| 46 | *šāru itabbal … zāqīqiš immanni* | `רוח תיטול, מעשם כְּמַשַּׁב יִמָּנֶה` | `כִּי אִם-כַּמֹּץ אֲשֶׁר-תִּדְּפֶנּוּ רוּחַ` (תהלים א:ד); `וְאֶת כֻּלָּם יִשָּׂא רוּחַ יִקַּח הָבֶל` (ישעיהו נז:יג); `מֵאֶפֶס וָתֹהוּ נֶחְשְׁבוּ לוֹ` (ישעיהו מ:יז); `וְהִנֵּה הַכֹּל הֶבֶל וּרְעוּת רוּחַ` (קהלת א:יד) | [equivalent] | `הֶבֶל` is reserved (wisdom corpus) and not used: *zāqīqu* = `מַשַּׁב`. |
| 47 | *narîšunu ušannû* | `ואת מצבותיהם ישנו` | `אַל-תַּסֵּג גְּבוּל עוֹלָם    אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח); `וְלֹא תָקִים לְךָ מַצֵּבָה` (דברים טז:כב) | [equivalent]; [divergence] | The stele as a legal charter (kudurru curses) vs the Bible's cultic `מַצֵּבָה`. |
| 48 | *ana adê imannûšunūti* | `לאמנה ימנום` | `וַיָּבֵא אֹתוֹ בְּאָלָה` (יחזקאל יז:יג); `לֵךְ מְנֵה אֶת יִשְׂרָאֵל וְאֶת יְהוּדָה` (שמואל ב כד:א) | [equivalent]; [absent] `בְּרִית` | *adê* is EST's word; Foster's "labor obligations" hides it. |
| 49 | *Nabû tupšar Esagil* | `נָבוּ, סופר אֵסַגִּיל` | `כָּרַע בֵּל קֹרֵס נְבוֹ` (ישעיהו מו:א); `וְקֶסֶת הַסֹּפֵר בְּמָתְנָיו` (יחזקאל ט:ב) | [cognate] (name); [equivalent] | The heavenly scribe before the gods leave (Ezek 9 → 10; Advice 49 → 54). |
| 50 | *muʾaddû šarrūti* | `מְיַעֵד המלכות` | `עַד דִּי תִנְדַּע דִּי שַׁלִּיט עִלָּיאָ (עִלָּאָה) בְּמַלְכוּת אֲנָשָׁא וּלְמַן דִּי יִצְבֵּא יִתְּנִנַּהּ` (דניאל ד:כב) | [equivalent] | The god who assigns kingship, in a decree against a king of Babylon. |
| 51 | *aklu*; *šatam ēkurri*; *šūt rēš šarri* | `נוגש`; `סוֹכֵן אֵכּוּר`; `סריס המלך` | `וַיְצַו פַּרְעֹה בַּיּוֹם הַהוּא אֶת הַנֹּגְשִׂים בָּעָם וְאֶת שֹׁטְרָיו לֵאמֹר` (שמות ה:ו); `לֶךְ בֹּא אֶל הַסֹּכֵן הַזֶּה עַל שֶׁבְנָא אֲשֶׁר עַל הַבָּיִת` (ישעיהו כב:טו); `וְהוּא פָקִיד נָגִיד בְּבֵית יְהוָה` (ירמיהו כ:א); `סָרִיס אֶחָד אֲשֶׁר הוּא פָקִיד עַל אַנְשֵׁי הַמִּלְחָמָה` (מלכים ב כה:יט) | [equivalent]; [cognate] `סָרִיס` | The Nippur letter's version adds "king" and *šandabakku* to the list. |
| 53 | *tupšikku bītāt ilī rabûti immidūšunūti* | `סל בתי האלים הגדולים ישיתו עליהם` | `וַיִּשְׁלָחֵם לְבָנוֹנָה עֲשֶׂרֶת אֲלָפִים בַּחֹדֶשׁ` (מלכים א ה:כח); `וַיִּשְׁלַח הַמֶּלֶךְ רְחַבְעָם אֶת אֲדֹרָם אֲשֶׁר עַל הַמַּס וַיִּרְגְּמוּ כָל יִשְׂרָאֵל בּוֹ אֶבֶן וַיָּמֹת` (מלכים א יב:יח) | [divergence] | Corvée for the temple: Kings tells it without condemnation (and then the split); the Advice says the gods leave over it. |
| 54 | *iggagū-ma inessû atmanšun* | `יקצפו, ויתרחקו מדבירם` | `לְרָחֳקָה מֵעַל מִקְדָּשִׁי` (יחזקאל ח:ו); `וַיֵּצֵא כְּבוֹד יְהוָה מֵעַל מִפְתַּן הַבָּיִת` (יחזקאל י:יח); `וְחָרָה אַפִּי בוֹ בַיּוֹם הַהוּא וַעֲזַבְתִּים` (דברים לא:יז) | [equivalent] | Ezek 8:6 has the same verb (`רחק`) for the god and his sanctuary. |
| 55 | *ul irrubū ana kiṣṣīšun* (+ the letter's "the king shall ask") | `לא יבואו אל קודשיהם` | `וַהֲשִׁמּוֹתִי אֶת מִקְדְּשֵׁיכֶם` (ויקרא כו:לא); `וַיַּעַל כְּבוֹד יְהוָה מֵעַל תּוֹךְ הָעִיר` (יחזקאל יא:כג); `וְכָתַב לוֹ אֶת מִשְׁנֵה הַתּוֹרָה הַזֹּאת עַל סֵפֶר מִלִּפְנֵי הַכֹּהֲנִים הַלְוִיִּם` (דברים יז:יח) | [equivalent] | A written norm, kept by temple men, that the king must consult (our proposal). |

### Key findings
**The Bible**
1. **The Advice and 1 Sam 8 share the list, item for item:** the citizens' silver (12), sons conscripted for the king's army (32; 1 Sam 8:11), fields "changed" and given to another (35–36; 8:14), oxen and teams taken (35; 8:16 donkeys), the flock tax last (37; 8:17), the eunuchs of the king (11; 8:15). But the Advice reverses the frame: Samuel describes what the king *will* do and says the god will not answer (8:18); the Advice says the gods *will* answer, one by one, with a matching punishment.
2. **Justice is *dīnu*, never `מִשְׁפָּט`:** the text has no *šipṭu*; *dīnu* = `דִּין` throughout, and `מִשְׁפָּט` stays out, so the reader sees the gap with Deut 16:19 and 1 Sam 8:3.
3. **Two words for the gift:** *kadrû* `מַתָּנָה` (8, the king) and *ṭātu* `שֹׁחַד` (42, the scholar and the eunuch) – the only `שֹׁחַד` in the text is taken by the *ummânu*, the "wise" whose eyes Deut 16:19 says the bribe blinds.
4. **The basket and the load:** *tupšikka zabālu* `סָבַל סַל` (25) is the pair of Ps 81:7 (`סֵבֶל` / `דּוּד`), with the cognate *zabālu* / `סבל`; *ilku* `הֲלָךְ` [cognate] and the exemption of 26–27 are the institution of Ezra 7:24 (the temple personnel exempt from `הֲלָךְ`), Deut 24:5 and 1 Sam 17:25 (`חָפְשִׁי`).
5. **The fodder levy** (29) is the institution of 1 Kgs 5:8 (`לַסּוּסִים וְלָרָכֶשׁ`), the opposite of Deut 17:16's "not many horses".
6. **The gods leave their sanctuaries** (54–55) with the verb of Ezek 8:6 (`לְרָחֳקָה מֵעַל מִקְדָּשִׁי`), and after the scribe-god Nabû (49) – as in Ezek 9–10 the scribe with the ink-case comes before the glory leaves.
7. **Foster's three reversals** (guidelines §5.2): line 6 (a positive protasis and reward read as a warning), the singular "he" for the plural "they" (35–37, 47–48, 53), and the passive in 32; plus "labor obligations" for *adê* (48), which hides EST's word.
8. **Cognates made visible:** `סָרִיס`, `לָקַח`, `צֶמֶד` (*ṣimittu*), `סָבַל`, `הֲלָךְ`, `שָׁפַךְ` (*šapāku*, heap), `חָרֵב` (*harābu*), `נָוֶה` (*namû*), `צָבָא` (*ṣābu*), `מֵישָׁרִים` (*mīšaru*).

**The ancient mind**
1. **The scholars' claim on the king** is made in the scholars' own genre, the omen list: the king's deed is the sign, the gods' reaction the outcome – as certain as an eclipse. The text also turns on the scholars themselves (41–46): the *ummânu* who slanders and takes bribes dies by the weapon and is "counted as a breath".
2. **Freedom as a divine grant:** the exemption of Sippar, Nippur and Babylon from the basket, the *ilku* and the levy is decreed by Anu, Enlil and Ea "in their assembly" (27) – the same *šubarrû* the gods themselves received in Enūma eliš when man was made to carry the basket. The free citizen shares the gods' privilege.
3. **Each god guards his own city:** Šamaš for Sippar (7), Enlil for Nippur (9), Marduk for Babylon (14); Ea for the scholars (2, 6, 43), Nabû the scribe at the end (49–50).
4. **Measure for measure in the words themselves:** "judged a stranger" → "a stranger's justice" (7); the citizens' silver into *makkūru* → his *makkūru* to the enemy (12, 15); the basket imposed → his army carries the basket (21, 25); horses fed on their fodder → harnessed to the enemy (29–31); "loosened their bonds" → "the bonds of his land loosened" (47, 50); "counted them for the *adê*" → "his deeds counted as a breath" (46, 48).
5. **The text was used:** catalogued in the Nineveh library, and quoted by the scholars of Nippur in a letter to the king of Assyria asking help to rebuild their city, with "let the king inquire" after the quotation (eBL, line 55): a written norm turned against the king, as Deut 17:18 makes a book the king's daily reading.
6. **Archaism as authority:** eBL notes archaic sign values, old grammar and infinitives meant to make the text look old; the Hebrew keeps the infinitives as verbal nouns. We do not date the composition (eBL: "difficult to date").

### Open decisions
1. ***šipru* = `מְלָאכָה`** (6), following Atra-ḫasīs and the wisdom corpus; the cross-corpus choice `מְלָאכָה` / `פֹּעַל` (Enūma eliš) is still the user's (guidelines §6.7).
2. ***šubarrû* = `פְּטוֹר`** (27), with Enūma eliš; Adapa has `חֵרוּת` (*ša Ea šubarrâšu iškun* `את חירותו שָׂם`) – a split to settle.
3. ***ṣâdu* (11) `יָצוּד`** follows the Theodicy (249), though Hebrew `צוּד` is "hunt", not "roam"; `שׁוֹטֵט` is Gilgameš's *rapādu*. A better free verb (`יְסוֹבְבוּ` is *dâlu*) is wanted for both texts.
4. ***riksu* = `קְשָׁרִים`** (47, 50), with Gilgameš VIII / Enūma eliš I (`התיר קשריו`) and the wisdom corpus; the treaty corpus has singular `קֶשֶׁר` = *bārtu* "conspiracy", and LH *riksātu* = `תְּנָאִים`. Acceptable as a sense split?
5. ***waklu* = `נוֹגֵשׂ`** (51): the overseer of forced labour, exactly Exod 5:6's office, but Hebrew `נוֹגֵשׂ` colours him as an oppressor where the Akkadian is neutral; the neutral words are taken (`מְמֻנֶּה` LH, `מַשְׁגִּיחַ` LH).
6. ***šatammu* = `סוֹכֵן`** (51–52), *ēkurru* = `אֵכּוּר` (transliterated, as in the wisdom and netherworld corpora); alternative `נְגִיד` (1 Chr-like "chief of the house of God") rejected for its royal echo.
7. **Erra = `אֶרָּה`** (33), with Gilg. XI (flood corpus) and the netherworld corpus (★); `../renderings.md` §1 and the wisdom corpus have `אֵרָּה`. Same consonants; the vowel should be unified.
8. ***šapāku* = `שָׁפַךְ`** [cognate] (18), with Enūma eliš (*išpuk*); `../renderings.md` §3a pre-set `שָׁפַךְ` for *tabāku* (blood), unused in SAA 9: *tabāku* should get another verb (`נָגַר`?) when it occurs.
9. ***adê* (48)**: the formula forces `אֲמָנָה`; the meaning here ("count them for the oath" = make them sworn subjects / liable to service) is uncertain; Foster "labor obligations".
10. **40 (*nīq Šamaš ušaššâ*)**: a crux; rendered by eBL's reading (*našû* Š) with `?`, the alternatives (Lambert *nagaršû* Š, *egēru* Š, Paulus *ušakkan*) in the entry.
11. **The infinitives as verbal nouns** (13, 16–17, 21, 29): a method decision for any future archaizing text; the alternative is the biblical infinitive absolute (`הָשֵׁת`, Jer 7:9 style), rejected because it reads as an imperative.

### Proposals for the corpus renderings
(Hebrew strings exactly as used, with lines.)
- *qâlu* "heed" = `האזין` / `לא יאזינו` (1–7) – as pre-set; note beside T1's *qâlu* "be silent" = `דּוֹמֵם` (same lemma, two senses).
- *ešû* N = `יֵבוֹךְ` (1); *nawû* II N = `תִּשָּׁמֵם` (1); *nawû* / *namû* I = `נָוֶה` [cognate] (45 `לְנָוֶה`).
- *redû* = `נָהַג`: Gtn `תְּנַהֲגֶנּוּ` (2), `יְנַהֲגוּהוּ` (6); N `יִנָּהֲגוּ` (31) – replaces the pre-set `רָדַף`.
- *ahītu* = `זָרָה` (2 `וְזָרָה תְּנַהֲגֶנּוּ`, 50 `וְזָרָה יגזור`), always vocalized.
- *šâmu* / *šiāmu* "decree" = `גָּזַר` (50 `יגזור`); eBL's lemma *šâmu* "buy" is a slip.
- *karû* "be short" = `קָצַר` (3 `ימיו יקצרו`).
- *nabalkutu* "rebel" = `הִתְהַפֵּךְ עַל` (4 `ארצו תתהפך עליו`) – T3's verb, not `מָרַד`.
- *ishappu* = `בְּלִיַּעַל` (5 `לבליעל`), as the Theodicy.
- *ṭēm māti išanni* (G intransitive) = `טַעַם הארץ ישתנה` (5) – corrects the pre-set `יְשַׁנֶּה`.
- *šitūltu* = `שְׁאֵלָה` (6, wisdom); *ṭūdāt mīšari* = `נתיבות מישרים` (6).
- *dâṣu* = `עִוֵּת` (7 `עיוות`, 8 `ועיוותם`); *diānu* = `דָּן` (7); *dayyānu* = `דַּיָּן`.
- *kadrû* = `מַתָּנָה` (8 `ומתנה לקח`) – not `מִנְחָה`.
- *wabālu* = `הוֹבִיל` (8, T2); *dekû* = `הֵעִיר` (10 `יָעִיר עליו`, 32 `יָעִירוּ`); *dikûtu* = `גִּיּוּס` (32).
- *zilullîš* = `כְּהֵלֶךְ`, *ṣâdu* = `צוּד` (11, Theodicy; open 3).
- *makkūru* = `רְכוּשׁ` (12, 15); *būšu* = `קִנְיָן` (15 `את קניינו`).
- *šarāku* = `הֶעֱנִיק` (15 `יעניק`, 29 `הַעֲנָקָה`, 36 `יעניקו`).
- *Bābilayyu* = `הַבַּבְלִים` (13) apart from *mār Bābili* = `בני בָּבֶל` (12).
- *qallu* = `קַל` (13 `לְקַל`); *târu* D "turn into" = `הָפַךְ` (13, T4).
- *arnu* = `עָוֹן`, *arna emēdu* = `הֵשִׁית עָוֹן` (16 `הֲשָׁתַת עָוֹן`), N `הוּשַׁת` (18); *tupšikka emēdu* = `הֵשִׁית סַל` (21 `הֲשָׁתַת סַל`, 53 `סל … ישיתו עליהם`) – replaces the pre-set `הֵטִיל סַל`.
- *bīt ṣibitti* = `בית־האחיזה` (17, 19); *ṣibittu* (levy) = `אחיזה` (37 `אחיזת כבשי[הם …] יאחזו`).
- *bērūtu* = `גַּל` (18 `לְגַל`); *šapāku* = `שָׁפַךְ` (18 `תִּשָּׁפֵךְ`; open 8).
- *tebû* Š = `הֵקִים` (20); *mithāriš* = `כְּאֶחָד` (20).
- *ṣābu* = `צָבָא` (10, 21, 26, 32 `הצבא ההוא`); *ummānu* = `חַיִל` (25, 32–34).
- *ilku* = `הֲלָךְ` (22), always vocalized; *šisīt nāgiri* = `צעקת הכרוז` (22).
- *kânu* D = `כּוֹנֵן` (22, 27 `כוננו`).
- *apkal ilī* = `חכם האלים`, *muštālu* = `מָתוּן` (23).
- *sahāru* D "turn over to" = `הֵסֵב` (24 `יַסֵּב`; NipNB1 variant of 10).
- *zabālu* = `סָבַל` [cognate] (25 `סַל … יסבול`), with Atra-ḫasīs.
- *āšib šamê u erṣeti* = `יושבי שמיים וָאָרֶץ` (27); *puhru* = `אֲסֵפָה` (27); *šubarrû* = `פְּטוֹר` (27; open 2).
- *imrû* = `מִסְפּוֹא` (29, 30); *mūrnisqu* = `רֶכֶשׁ` (29, 30), always vocalized.
- *ṣimittu* / *ṣimdatu* (team) = `צֶמֶד` [cognate] (31 `בְּצֶמֶד הצר`, 35 `צמדי שוורי[הם]`).
- *gašru* = `כַּבִּיר` (33); *ālik pān* = `ההולך לפני` (33); *mahāṣu* = `מָחַץ` (34); *idi* = `לצד` (34).
- *paṭāru* D = `הִתִּיר` (35, 47, 50), with Gilgameš and Enūma eliš.
- *eqlu* = `שָׂדֶה` (35–36) beside *ṣēru* = `שָׂדֶה` (39), as in the law corpus; *ugāru* = `שְׁדֵמָה` (36); *harābu* = `חָרַב` [cognate] (36 `יחרב`).
- *immeru* = `כֶּבֶשׂ` (37).
- *Adad gugal šamê u erṣeti* = `אֲדַד, מפקח התעלות של שמיים וָאָרֶץ` (38) – EST's string with the corpus formula (EST has `של השמים והארץ`).
- *nammaššê ṣēri* = `נעי השדה` (39); *hušahhu* = `כָּפָן` (39).
- *nīqu* = `זֶבַח`, *našû* Š = `הִשִּׂיא` (40).
- *manzāz pān šarri* = `מעמד פני המלך` (41).
- *amāta lummunu* = `הֵרַע את דבר־` (42 `את דברם יָרֵעַ`); *ṭātu* = `שֹׁחַד` (42 `את שׁוחדם יקבל`); *mahāru* "receive" = `קִבֵּל` (42).
- *ina qibīt* DN = `במאמר` DN (43); *šar apsî* = `מלך הָאַפְסוּ` (43, EST).
- *ina kakki mâtu* = `בנשק מת` (44 `בנשק ימותו`).
- *ašru* = `מָקוֹם` (18, 45); *kamāru* N = `נִצְבַּר` (45 `יִצָּבֵר`).
- *arkatu* (remains) = `אַחֲרִית` (46 `אחריתם`); *tabālu* = `נָטַל` (46 `תיטול`); *epištu* = `מַעֲשֶׂה` (46); *zāqīqiš* = `כְּמַשַּׁב` (46); *manû* = `מָנָה` (46 N `יִמָּנֶה`, 48 `ימנום`).
- *riksu* = `קְשָׁרִים` (47, 50; open 4); *narû* = `מַצֵּבָה` (47, LH, Gilgameš).
- *harrānu* = `אוֹרַח` (48 `לאורח`); *aṣû* Š = `הוֹצִיא` (48).
- *ṭupšarru* = `סוֹפֵר` (49); *sāniqu* = `מְבַקֵּר` (49); *kiššatu* = `כְּלָל` (49); *mumaʾʾeru* = `מְצַוֶּה` (49); *gimru* = `הַכֹּל` (49); *šūq šamê* = `מרום השמיים` (49 variant).
- *muʾaddû* (*wadû* D) = `מְיַעֵד` (50 `מְיַעֵד המלכות`).
- *lū … lū* = `בין … בין` (51, LH); *waklu* = `נוֹגֵשׂ` (51; open 5); *šatammu* = `סוֹכֵן`, *ēkurru* = `אֵכּוּר` (51–52; open 6); *šūt rēš šarri* = `סריס המלך` (51); *šandabakku* = `שַׁנְדַּבַּכּוּ` (51 variant); *rēʾû* = `רוֹעֶה` (51 variant).
- *izuzzu* Š = `הֶעֱמִיד` (52); *šakānu* N = `יוּשַׂם` (52 variant `יוּשְׂמוּ`).
- *bītāt ilī rabûti* = `בתי האלים הגדולים` (53).
- *agāgu* = `קָצַף` (54 `יקצפו`, wisdom); *nesû* = `התרחק` (54 `ויתרחקו`, wisdom); *atmanu* = `דְּבִיר` (54 `מדבירם`); *kiṣṣu* = `קֹדֶשׁ` (55 `קודשיהם`).
- **Deviations from `../renderings.md`** (with reasons, each also in its entry): *emēdu* `הֵשִׁית` not `הֵטִיל` (T3, Enūma eliš; Exod 21:22, 30); *redû* `נָהַג` not `רָדַף` (Gilgameš ×3; and 31 is N "be driven"); *ṭēm māti išanni* intransitive `ישתנה` (eBL glossary: G "changes"); *kadrû* `מַתָּנָה` not `מִנְחָה` (wisdom; `מִנְחָה` gated); *ishappu* `בְּלִיַּעַל` not `נָבָל` (Theodicy); *riksu* `קְשָׁרִים` not `חוֹזֶה` / `אֲגֻדָּה` (Gilgameš, Enūma eliš, wisdom); *narû* `מַצֵּבָה` (LH, Gilgameš; the pre-set left it open); *šatam ēkurri* `סוֹכֵן אֵכּוּר` not `פְּקִיד בֵּית הָאֵל` (`פָּקִיד` = MAL B *qēpu*; `בֵּית הָאֵל` echoes Bethel); *bērūtu* `גַּל` not `תֵּל` (`תֵּל` is *tīlu*'s cognate); Erra `אֶרָּה` not `אֵרָּה` (flood XI, netherworld); *šapāku* `שָׁפַךְ` against §3a's *tabāku* (Enūma eliš; unused in SAA 9). No gate caught a correct word (no false positive to report).
