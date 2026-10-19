# Shared renderings: the wisdom and righteous-sufferer corpus

Binding for both projects of this corpus (`1-לודלול/`, `2-התאודיציה-הבבלית/`). Read `corpus.md` first.
Written by the corpus coordinator before drafting (2026-10-19); later additions are dated (§10 onward). Translators do **not** edit this file: they write proposals in their section of the project's `project.md`, and the coordinator merges them here between runs.

Echo tags follow guidelines §6.4: [cognate], [equivalent], [divergence], [absent].
Check how a word was rendered so far with `python3 -I wisdom_tools.py lemma '<lemma>'` and `grep '<Hebrew>' [--gilg]`.

## 0. What binds, in what order
1. **This file.**
2. **The Gilgameš corpus's shared renderings** (`../אפוס-גילגמש/renderings.md`, §1–§21): it is the closest model (Standard Babylonian poetry of the same scribal culture); its ordinary words (§5), traps (§7) and merged rows bind wherever this file is silent.
3. **The flood corpus** (`../סיפורי-המבול-המסופוטמיים/renderings.md`), **the creation corpus** (`../סיפורי-הבריאה-המסופוטמיים/renderings.md`, §3 and §5: the Gen 1–3 key terms) and **the law corpus** (`../חוקים-ובריתות/renderings.md`: oath, curse, sin and justice terms).
Where they disagree, the lower number wins; every deviation from 2–3 is listed in §9.

## 1. Proper names
Vocalize at the first occurrence in each file; plain afterwards, except where marked **always vocalized** (checked by `wisdom_tools.py verify`).

| Akkadian (eBL) | Hebrew | Notes |
|---|---|---|
| Marduk | מַרְדּוּךְ | Creation corpus. First occurrence: note the biblical `מְרֹדָךְ` (ירמיהו נ:ב) and `בֵּל` (ישעיהו מו:א). |
| Bēl (as a name) / *bēlu* (common noun, "the Lord") | בֵּל – **always vocalized** / הָאָדוֹן | `בל` unvocalized reads "not". Ludlul's *bēlu* "the Lord" (Marduk) = `הָאָדוֹן`; *bēl nēmeqi* = `אֲדוֹן הַחָכְמָה`. |
| Zarpānītu | צַרְפָּנִיתוּ | Marduk's wife (EST: `צרפניתו`). |
| Nabû; Tašmētu | נָבוּ – **always vocalized**; תַּשְׁמֵתוּ | Nabû: note `נְבוֹ` (ישעיהו מו:א). |
| Esagil; Ezida; Babylon; Borsippa | אֵסַגִּיל; אֵזִידָה; בָּבֶל; בּוֹרְסִיפָּה | Temple names transliterated, meaning in a note (Esagil "house whose head is raised"). The gates of Esagil (Ludlul V) are transliterated by their Akkadian names (*Kā-…*) with the translation in a note. |
| Šubši-mešrê-Šakkan (Ludlul's sufferer) | שׁוּבְּשִׁי־מֶשְׁרֵא־שַׁכַּן – the last element **always vocalized** | "(O) Šakkan, bring wealth into being!" (Lenzi ch. 8 app., 9 app.): note at first occurrence (Ludlul III). Šakkan unvocalized reads `שכן`. |
| Saggil-kīnam-ubbib (the Theodicy's author, in the acrostic) | סַגִּיל־קִינַם־אוּבִּיב | "O Esagil, make the righteous one pure (clean)!": a note on the name at the colophon/acrostic. |
| Narru (= Enlil); Zulummar (= Ea); Mami; Aruru; Bēlet-ilī | נַרּוּ; זוּלוּמָּר; מָמִי; אֲרוּרוּ – **always vocalized**; בֵּלֶת־אִילִי | Theodicy 276–278 (check the eBL normalization: Foster's "Enlil" may render *Narru*). |
| Ea; Enlil; Anu; Šamaš; Sîn; Adad; Erra; Nergal; Ištar | אֵאָה; אֶנְלִיל; אָנוּ; שַׁמַשׁ; סִין; אֲדַד; אֵרָּה; נֵרְגַל; אִשְׁתַּר | Shared. *šamšu* "sun" = `שֶׁמֶשׁ`; vocalize both where both occur. Erra: law corpus `אֵרָּה`. |
| Ḫubur (the river of the netherworld) | חֻבּוּר | Note: not the Habor of 2 Kgs 17:6 (`חָבוֹר`); a homonym only. |
| Laluralimma (the exorcist of Ludlul III), Ur-Nintinugga (the man in the dream), Tabi-utul-Enlil (the sufferer's name of dream II, check), the dream figures | transliterate from eBL's normalization, vocalized at the first occurrence; meaning in a note | Fix the forms at the first occurrence in Ludlul III and list them in `1-לודלול/project.md`. |
| Igīgū; Anunnakkū | אִיגִיגִי; אֲנוּנָּכִּי | Shared. |

## 2. The divine world of personal religion (key terms, both texts)
| Akkadian | Hebrew | Tag / reason |
|---|---|---|
| *ilu* "god" (incl. "a man's (personal) god", *ilšu*) | אֵל; "my god" `אֵלִי` – **always vocalized** (unvocalized it reads "to me"); pl. `הָאֵלִים` | [equivalent] ↔ `אֵלִי אֵלִי לָמָה עֲזַבְתָּנִי` (תהלים כב:ב). **Never `אֱלֹהִים` / `אֱלוֹהַּ`** (Job's words; reserved, checked). |
| *ištaru*, *ištartu*, *iltu* "goddess" (the personal goddess) | אֵלָה – **always vocalized**; "my goddess" `אֵלָתִי` | `אלה` unvocalized reads "these" / "oath". The pair *ilu u ištaru* = `הָאֵל וְהָאֵלָה`. [absent] in the Bible (no personal goddess). |
| *šēdu*; *lamassu*; *šēd dumqi* | רוּחַ־מָגֵן; אֵלַת־מָגֵן; רוּחַ־מָגֵן שֶׁל חֶסֶד | Creation / law corpora. `שֵׁד` is a false friend (guidelines §6.7). |
| *utukku*, *alû*, *lamaštu*, *lilû* / *ardat lilî*, *gallû*, *rābiṣu*, *eṭemmu*, *namtaru* | אוּטוּכּוּ; אַלּוּ – **always vocalized**; לַמַשְׁתּוּ; לִילוּ / עַלְמַת־לִילוּ; גַּלּוּ; רוֹבֵץ; אִט – always vocalized; נַמְתָּר | **Deviation from the Gilgameš corpus** (*utukku* = `רוּחַ` there, for Enkidu's ghost): here the demons are a list of distinct classes, so they are transliterated and explained in a note at first occurrence (the soul of the ancients: who each demon is, where it lives, what it does). *rābiṣu* "the lurker" = `רוֹבֵץ` [cognate ↔ `לַפֶּתַח חַטָּאת רֹבֵץ`, בראשית ד:ז]. *lilû* ↔ `לִּילִית` (ישעיהו לד:יד) [cognate]. |
| *šīmtu*; *šâmu* | גּוֹרָל; גָּזַר | Shared. |
| *ṭēmu* (of a god: "will, mind, plan") | דַּעַת (`דַּעַת הָאֵל`); in other senses by sense (flood corpus) | ↔ `כִּי לֹא מַחְשְׁבוֹתַי מַחְשְׁבוֹתֵיכֶם` (ישעיהו נה:ח) [equivalent]. |
| *milku* (counsel, decision; of a god) | עֵצָה | Note the cognate Aramaic `מִלְכִּי` (דניאל ד:כד) and `וַיִּמָּלֵךְ לִבִּי` (נחמיה ה:ז) [cognate]. *malāku* = `נִמְלַךְ` (guidelines). |
| *alaktu* (way, course; *alakti ili*) | הֲלִיכָה (`הֲלִיכַת הָאֵל`) | Gilgameš corpus. ↔ `וְלֹא דַרְכֵיכֶם דְּרָכָי` (ישעיהו נה:ח); `קְצוֹת דְּרָכָו` (איוב כו:יד) [equivalent]. *urḫu* = `דֶּרֶךְ`, *ḫarrānu* = `אֹרַח` (Gilgameš). |
| *barû* (inspect, examine; *libbi ilī ibarri*); *bārû* (the diviner by extispicy); *bīru* (extispicy) | בָּחַן; הַבּוֹחֵן; בְּחִינָה | ↔ `וּבֹחֵן לִבּוֹת וּכְלָיוֹת` (תהלים ז:י) [equivalent]. Note at first occurrence: the *bārû* reads the god's answer in the entrails of a sacrificed lamb. Not `רוֹאֶה` (*amāru* = `רָאָה`). |
| *šāʾilu* (dream interpreter, "asker") | הַשּׁוֹאֵל | [cognate] ↔ `וְשֹׁאֵל אוֹב וְיִדְּעֹנִי` (דברים יח:יא). Law corpus (*šāʾilu* = שׁוֹאֵל). |
| *mašmaššu*; *āšipu* (the exorcist; Ludlul uses both) | מְלַחֵשׁ; אַשָּׁף | *āšipu* = `אַשָּׁף` [cognate] (דניאל א:כ; law corpus). *mašmaššu* = `מְלַחֵשׁ` [equivalent ↔ `נְבוֹן לָחַשׁ`, ישעיהו ג:ג; `קוֹל מְלַחֲשִׁים`, תהלים נח:ו]: the two words stay apart. The Theodicy's acrostic names its author *mašmaššu*. |
| *asû* (physician) | רוֹפֵא | Note Aramaic `אָסְיָא` [cognate]. |
| *zaqīqu* (dream spirit, "phantom") | מַשַּׁב | Gilgameš corpus (never `הֶבֶל`). |
| *šuttu*; *tabrīt mūši*; *munattu* | חֲלוֹם; חֶזְיוֹן לַיְלָה; תְּנוּמַת שַׁחַר | ↔ `בַּחֲלוֹם חֶזְיוֹן לַיְלָה … בִּתְנוּמוֹת עֲלֵי מִשְׁכָּב` (איוב לג:טו) [equivalent]. |
| *tērtu* (omen from extispicy; pl. *têrētu*) | הוֹרָאָה (pl. `הוֹרָאוֹת`) | From *(w)âru* D "instruct": note the debated link with `תּוֹרָה`. *tērtu* "office, post" (Ludlul I 60) = `מִשְׂרָה`, by sense, noted. |
| *ittu*, pl. *idātu* (sign); *egerrû* (chance utterance as omen) | אוֹת [cognate]; קוֹל־מִקְרֶה (note) | Guidelines §6.7 (*ittu* = אות). |
| *māmītu* (oath; the curse of a broken oath) | שְׁבוּעָה | **Deviation from the law corpus** (`אָלָה`): `אלה` would collide with `אֵלָה` "goddess" (always vocalized). Flood and creation corpora have `שְׁבוּעָה`. *nīš ili zakāru* (swear by the god) = `הִזְכִּיר נֶפֶשׁ אֵל`? – fix at Ludlul II 22 (*nīšu* "life, oath"). |
| *arnu* / *annu*; *ḫīṭu* / *ḫiṭītu*; *gillatu*; *šērtu*; *eʾiltu*; *egû* | עָוֹן; חֵטְא; פֶּשַׁע; אַשְׁמָה; חוֹב; שָׁגָה (by sense, "be negligent") | Law and Gilgameš corpora (*arnu* = `עון`, *šērtu* = `אַשְׁמָה`). ↔ `כַּמָּה לִי עֲוֹנוֹת וְחַטָּאוֹת` (איוב יג:כג), `וּמֶה לֹא תִשָּׂא פִשְׁעִי וְתַעֲבִיר אֶת עֲוֹנִי` (איוב ז:כא). |
| *paṭāru* (release, absolve; loosen) | פָּטַר; N `נִפְטַר` | [cognate] (Hebrew `פטר` "release, exempt"). Release from sin, demon, bond. |
| *pašāru* N/D (relent; release anger) | נִתְפַּיֵּס (*muppašir* = `מִתְפַּיֵּס`) | The Gilgameš rule *pašāru* = `פָּשַׁר` holds for dreams only; "relent" is a different sense (by meaning). |
| *salāmu*; *musallimu* | הִשְׁלִים (`הִשְׁלִים עִם`); מַשְׁלִים | [cognate] (`וְאִם לֹא תַשְׁלִים עִמָּךְ`, דברים כ:יב). |
| *gamālu*; *gāmilu*; *gimlu* | חָמַל; חוֹמֵל; חֶמְלָה | Guidelines (*gamālu* ~ `גמל` is a false friend). |
| *rēmu*; *rêmu*; *rēmēnû* | רַחֲמִים; רִחֵם; רַחוּם | [cognate] ↔ `אֵל רַחוּם וְחַנּוּן` (שמות לד:ו). Reserved: `רחם` only for these. |
| *eṭēru*; *šūzubu* (*ezēbu* Š) | חִלֵּץ; הִצִּיל | ↔ `כִּי חִלַּצְתָּ נַפְשִׁי מִמָּוֶת` (תהלים קטז:ח). |
| *bulluṭu*; *balāṭu* (v.); *balāṭu* (n.) | הֶחֱיָה; חָיָה; חַיִּים | ↔ `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל א ב:ו); `אֲנִי אָמִית וַאֲחַיֶּה` (דברים לב:לט) [equivalent]. |
| *ezēbu* | עָזַב – reserved | [cognate] ↔ `לָמָה עֲזַבְתָּנִי` (תהלים כב:ב). Ludlul I 43 has *nadû*, not *ezēbu*: `הִשְׁלִיךְ` (Gilgameš), tagged [equivalent]. |
| *nesû*; *ruqqu* / *rūqu* | הִתְרַחֵק; רָחוֹק | ↔ `אַל תִּרְחַק מִמֶּנִּי` (תהלים כב:יב). |
| *apālu* (answer) | עָנָה | ↔ `וְלֹא תַעֲנֶה` (תהלים כב:ג); `אֲשַׁוַּע אֵלֶיךָ וְלֹא תַעֲנֵנִי` (איוב ל:כ) [equivalent]. |
| *šasû*; *qabû*; *zakāru* (of a god's name: "invoke") | צָעַק; אָמַר; הִזְכִּיר | Gilgameš (*šasû* = `צָעַק`; `קָרָא` reserved for *nabû*). |
| *sullû*; *supû*; *teslītu*; *ikribu*; *karābu* | הִתְחַנֵּן; תְּחִנָּה; תַּחֲנוּן; תְּפִלָּה (or `בְּרָכָה` by sense); בֵּרֵךְ | One Hebrew word per lemma: *supû u teslītu* = `תְּחִנָּה וְתַחֲנוּן`. |
| *palāḫu* (of gods, king, palace: "revere"); *puluḫtu* (reverence); *pāliḫ ili* | יָרֵא; יִרְאָה; יְרֵא אֵל | **Deviation from the Gilgameš / creation corpora** (`פָּחַד` / `אֵימָה`): in personal piety the verb means "revere", and `יָרֵא` is the natural Hebrew ([equivalent] ↔ `וִירֵא אֱלֹהִים וְסָר מֵרָע`, איוב א:א; `יִלְמְדוּן לְיִרְאָה אֹתִי`, דברים ד:י; `יִרְאַת יְהוָה רֵאשִׁית דָּעַת`, משלי א:ז). Physical fear keeps `פָּחַד`; *puluḫtu* as a divine aura stays `אֵימָה`. |
| *pirittu*; *ḫattu*; *adāru* / *adirtu* | בֶּהָלָה; חִתִּית; חָרַד / חֲרָדָה | *ḫattu* ~ `חַת` [cognate] (`וְחִתְּכֶם`, בראשית ט:ב; `חִתִּיתָם`, יחזקאל לב). |
| *naqû*; *niqû*; *taqqītu*; *sattukku*; *maṣḫatu*; *mākālû* | נִסֵּךְ; זֶבַח; נֶסֶךְ; קָרְבַּן תָּמִיד; קֶמַח־מִנְחָה (?, fix at Ludlul II 20); סְעוּדָה | Flood / creation corpora (*niqû* = `זֶבַח`, *naqû* = `נִסֵּךְ`). `מִנְחָה` alone is not used for *maṣḫatu* (it would echo בראשית ד:ג–ה); tag the Lev 2 equivalent in the apparatus. |
| *appa labānu* / *appa enû*; *šukênu*; *kamāsu* | (literal: "rub / stroke the nose"), with a note; הִשְׁתַּחֲוָה; כָּרַע | ↔ `נִשְׁתַּחֲוֶה וְנִכְרָעָה` (תהלים צה:ו) [equivalent]. |
| *ūm ili*; *eššēšu*; *parṣu* (rite, office); *mû* (rites, *mê ili*) | יוֹם הָאֵל; חַג־הַחֹדֶשׁ (note); פֶּלַח (note); נֹהַג (by sense) | Fix at Ludlul II 16–29; *parṣu* also Ludlul I 103 ("my solemn duties"). |

## 3. The sufferer: body, disease, social death
| Akkadian | Hebrew | Tag / reason |
|---|---|---|
| *zumru*; *pagru*; *šīru*; *lānu*; *gattu* | גֵּו; גְּוִיָּה; בָּשָׂר; גּוּף; קוֹמָה | Gilgameš §5, §9. |
| *eṣemtu*; *mašku*; *dāmu*; *šerʾānu*; *mešrêtu*; *riksu* (joint) | עֶצֶם; עוֹר; דָּם; גִּיד; אֵבָרִים; פֶּרֶק | ↔ `עוֹר וּבָשָׂר תַּלְבִּישֵׁנִי; וּבַעֲצָמוֹת וְגִידִים תְּשֹׂכְכֵנִי` (איוב י:יא); `בְּעוֹרִי וּבִבְשָׂרִי דָּבְקָה עַצְמִי` (איוב יט:כ); `כָּל עַצְמוֹתָי` (תהלים כב:טו). |
| *kabattu* (the liver: mood, temper) | כָּבֵד – **always vocalized** (`כְּבֵדִי`, `כְּבֵדוֹ`) | **Deviation from the Gilgameš corpus** (`רוּחַ`): keep the organ, since the ancient psychology lives in it ([cognate] ↔ `נִשְׁפַּךְ לָאָרֶץ כְּבֵדִי`, איכה ב:יא). Creation corpus has `כָּבֵד` for Tiāmat's liver. |
| *libbu*; *karšu*; *qerbu*; *unātu* (innards); *rēš libbi* | לֵב; מֵעַיִם; קֶרֶב; (fix at Ludlul I 113); רֹאשׁ הַלֵּב (note: epigastrium) | |
| *qaqqadu*, *rēšu*; *muḫḫu*; *pūtu*; *pānu*; *zīmu*; *īnu*; *uznu*; *appu*; *pû*; *šaptu*; *lišānu*; *kišādu*; *labānu* (nape tendon); *irtu*; *tulû*; *ṣēru* (back); *idu*; *qātu*; *rittu*; *birku*; *šēpu*; *purīdu* | רֹאשׁ; קָדְקֹד; מֵצַח; פָּנִים; זִיו; עַיִן; אֹזֶן; אַף; פֶּה; שָׂפָה; לָשׁוֹן; צַוָּאר; עֹרֶף (note); חָזֶה; שָׁדַיִם (vocalized); גַּב; זְרוֹעַ; יָד; כַּף; בֶּרֶךְ; רֶגֶל; יָרֵךְ (by sense) | |
| *murṣu*; *marāṣu*; *silʾitu*; *luʾtu*; *mangu*; *mišittu*; *rimûtu*; *šūlu*; *diʾu*; *šuruppû*; *ḫurbāšu*; *raʾību* | חֳלִי; חָלָה; מַחֲלָה; רִפְיוֹן; קִשָּׁיוֹן; שִׁתּוּק; קֵהוּת (?); שִׁעוּל; כְּאֵב־רֹאשׁ (note); צִנָּה; חַלְחָלָה; רַעַד | *murṣu* = `חֳלִי` (law corpus) ↔ `וִידוּעַ חֹלִי` (ישעיהו נג:ג) [equivalent]; note *marāṣu* ~ `נִמְרֶצֶת` (מלכים א ב:ח) [cognate]. *luʾtu* = `רִפְיוֹן`, *mangu* = `קִשָּׁיוֹן` (Gilgameš V 29). |
| *erša*; *mayyālu*; *mēseru*; *kišukku* | עֶרֶשׂ [cognate]; מִשְׁכָּב; מַאֲסָר; בֵּית כֶּלֶא | ↔ `יְהוָה יִסְעָדֶנּוּ עַל עֶרֶשׂ דְּוָי` (תהלים מא:ד); *mēseru* ~ `אסר` [cognate]. |
| *qabru*; *kimaḫḫu*; *qebēru*; *erṣetu* (netherworld); *arallû*; *bikītu* | קֶבֶר [cognate]; גָּדִישׁ (note: איוב כא:לב); קָבַר; אֶרֶץ (note); אַרַלּוּ; בְּכִית | Never `שְׁאוֹל` (reserved). ↔ `כְּמוֹ חֲלָלִים שֹׁכְבֵי קֶבֶר` (תהלים פח:ו). |
| *mītu*; *mūtu*; *mâtu*; *mītūtu* | מֵת; מָוֶת; מֵת; מִיתָה | |
| *tānēḫu* / *tānīḫu*; *anāḫu* (Št *šutānuḫu*) | אֲנָחָה; נֶאֱנַח | [cognate] ↔ `וּשְׁנוֹתַי בַּאֲנָחָה` (תהלים לא:יא); `כִּי לִפְנֵי לַחְמִי אַנְחָתִי תָבֹא` (איוב ג:כד). |
| *bakû*; *dimtu*; *damāmu*; *nissatu*; *qubbû*; *gerrānu* | בָּכָה; דִּמְעָה; קוֹנֵן (*kīma summi adammum* = `כַּיּוֹנָה קוֹנַנְתִּי`); יָגוֹן; קִינָה; מִסְפֵּד | Gilgameš. ↔ `אֶהְגֶּה כַּיּוֹנָה` (ישעיהו לח:יד) [equivalent]. *summu / summatu* = `יוֹנָה`. |
| *ibru*; *tappû*; *rūʾu*; *kinattu*; *talīmu*; *aḫu*; *mūdû* | רֵעַ – **always vocalized**; חָבֵר; עָמִית; בֶּן־גִּיל; אָח; מַכִּיר (by sense) / יוֹדֵעַ | Gilgameš (*ibru*, *tappû*, *rūʾu*, *talīmu*). ↔ `שְׁלֹשֶׁת רֵעֵי אִיּוֹב` (איוב ב:יא); `הִרְחַקְתָּ מְיֻדָּעַי מִמֶּנִּי` (תהלים פח:ט); `אַחַי מֵעָלַי הִרְחִיק וְיֹדְעַי אַךְ זָרוּ מִמֶּנִּי` (איוב יט:יג). |
| *kimtu*; *nišūtu*; *salātu* | מִשְׁפָּחָה; קְרוֹבִים; בֵּית אָב (by sense) | |
| *ardu*; *amtu*; *ummānu* (the populace) | עֶבֶד; אָמָה; הֶהָמוֹן | Law / Gilgameš. ↔ `לְעַבְדִּי קָרָאתִי וְלֹא יַעֲנֶה` (איוב יט:טז). |
| *ḫādû* (one who rejoices over me) | הַשָּׂמֵחַ עָלַי (`הַשָּׂמֵחַ לְאֵידִי` if the Akkadian has the object) | ↔ `שָׂמֵחַ לְאֵיד` (משלי יז:ה); `אִם אֶשְׂמַח בְּפִיד מְשַׂנְאִי` (איוב לא:כט); `וְלֹא שִׂמַּחְתָּ אֹיְבַי לִי` (תהלים ל:ב). |
| *ṭapiltu*; *dabābu*; *nullâtu*; *tušša*; *napraku* | דִּבָּה [equivalent ↔ `דִּבַּת רַבִּים`, תהלים לא:יד]; סִפֵּר (Gilgameš); נְבָלָה; עֲלִילָה; מַחְסוֹם (by sense; *napraku* "bolt" = `בְּרִיחַ`) | Guidelines: *dabābu* is not `דִּבָּה`; *ṭapiltu* is. |
| *šarru*; *šīr ilī*; *nanzāzu*; *ekallu*; *puḫru* | מֶלֶךְ; בְּשַׂר הָאֵלִים; הָעוֹמְדִים לְפָנָיו (pl., by sense); הֵיכָל; אֲסֵפָה (Gilgameš; `קָהָל` not used) | |
| *lemnu*; *lemuttu*; *lumnu*; *raggu*; *ṣēnu* (wicked); *ḫarḫaru*; *lillu* | רַע; רָעָה; רֹעַ; רָשָׁע; זֵד; נוֹכֵל; כְּסִיל | One word per lemma. *ṣēnu* "sheep" = `צֹאן` (homonym, [cognate]). |
| *kabtu*; *šarû*; *mašrû*; *lapnu*; *lapānu*; *enšu*; *muškēnu*; *dunnamû*; *ašṭu* | נִכְבָּד (of persons; "heavy" = `כָּבֵד`); עָשִׁיר; עֹשֶׁר; דַּל; הִדַּל; חַלָּשׁ; מִסְכֵּן; אֶבְיוֹן; קָשֶׁה | Law corpus (*muškēnum* = `מִסְכֵּן`, ↔ קהלת ט:טו [cognate]). |
| *dumqu*; *damiqtu*; *damqu*; *damāqu* | חֶסֶד; חֶסֶד ("favour, good fortune"; other senses by sense, noted); נָאֶה; by sense (never `טוב`) | Gilgameš (*dumqu* = `חֶסֶד`); law corpus (*damqu* = `נָאֶה`). `טוֹב` is reserved for *ṭābu* / *ṭiābu* / *ṭūbu* (creation corpus; checked), so the reader can see where the cognate stands. Fix *damiqtu* and *damāqu* at their first occurrences (Ludlul I 40, 93, 119) and propose them for §10. |
| *ṭābu*; *ṭiābu* D; *ṭūbu*; *ṭūb libbi* | טוֹב [cognate]; הֵיטִיב; טוּב; טוּב לֵב | ↔ `גַּם אֶת הַטּוֹב נְקַבֵּל מֵאֵת הָאֱלֹהִים וְאֶת הָרָע לֹא נְקַבֵּל` (איוב ב:י). |
| *kittu*; *kīnu*; *kânu*; *išaru* / *išartu* / *mīšaru*; *sarru* / *sarrātu*; *lā kīnātu* | אֱמֶת [cognate]; נֶאֱמָן; כּוֹנֵן / נָכוֹן; יָשָׁר / יֹשֶׁר / מֵישָׁרִים [cognate]; כּוֹזֵב / כְּזָבִים; לֹא נְכוֹנוֹת | Akkadian has no *ṣdq* here: **`צַדִּיק`, `צֶדֶק`, `צְדָקָה` are never used** (checked), nor `תָּם` / `תָּמִים` (Job 1:1). *sarāru* "be false" ~ Hebrew `סָרַר` "rebel": a false friend. |

## 4. Wisdom and knowledge
| Akkadian | Hebrew | Notes |
|---|---|---|
| *nēmequ*; *emqu*; *apkallu* | חָכְמָה; חָכָם (fem. `חֲכָמָה`); הֶחָכָם (as Marduk's epithet: `הָאָדוֹן הֶחָכָם`) | Gilgameš (*emqet* = `חֲכָמָה`); flood / creation (*apkallu* = `חָכָם`). |
| *itpēšu*; *palkû*; *mūdû*; *ḫassu*; *lēʾû*; *ummânu*; *pakku*; *murqu* | נָבוֹן; רְחַב־דַּעַת; יוֹדֵעַ; פִּקֵּחַ; מְסֻגָּל (by sense); אֻמָּן (scholar, note); שִׁקּוּל־דַּעַת; שֵׂכֶל | Theodicy: fix each at its first occurrence and keep it (one Hebrew word per lemma; the Theodicy's lexicon is deliberately recherché). |
| *ḫasīsu*; *uznu*; *ṭēmu*; *milku* | תְּבוּנָה; בִּינָה / אֹזֶן; דַּעַת / טַעַם; עֵצָה | Gilgameš and §2. |
| *edû*; *lamādu* (Š *šulmudu*); *ḫakāmu* | יָדַע (reserved, checked); לָמַד [cognate] (`לִמֵּד`); הֵבִין? – fix at Ludlul II 37 | *ḫakāmu* ~ `חכם` [cognate]: choose by sense, note the root. |
| *mannu …?*; *ayyu …?*; *ēkâ …?* | מִי …?; אֵיזֶה …?; אֵיכָה / הֵיכָן …? | ↔ `מִי יוֹדֵעַ` (קהלת ג:כא); `וְהַחָכְמָה מֵאַיִן תִּמָּצֵא` (איוב כח:יב). |
| *zikru*; *qibītu*; *amatu* | דְּבַר (מֵימְרָה); אִמְרָה; דָּבָר | Theodicy. |

## 5. Nature and time words that recur in the images
| Akkadian | Hebrew | Notes |
|---|---|---|
| *ūmu* (day; storm); *mūšu*; *urru*; *šēru*; *arḫu*; *šattu*; *šamšu*; *nūru* | יוֹם / סְעָרָה; לַיְלָה; יוֹם (by daylight); בֹּקֶר; יֶרַח / חֹדֶשׁ (by sense); שָׁנָה; שֶׁמֶשׁ; אוֹר | Gilgameš. Ludlul I 2 *eziz mūšī muppašir urrī* ↔ `כִּי רֶגַע בְּאַפּוֹ חַיִּים בִּרְצוֹנוֹ בָּעֶרֶב יָלִין בֶּכִי וְלַבֹּקֶר רִנָּה` (תהלים ל:ו) [equivalent]. |
| *meḫû*; *šāru*; *imḫullu*; *zâqu*; *abūbu*; *mīlu* | סוּפָה; רוּחַ; רוּחַ־רָעָה (note: Marduk's weapon in Enūma eliš); נָשַׁב; מַבּוּל; גֵּאוּת | Gilgameš / creation. |
| *ezēzu*; *ezzu*; *uzzu*; *uggatu*; *libbātu*; *rūbu*; *agāgu*; *šabāsu*; *kamālu*; *šamru* | זָעַם; זוֹעֵם; זַעַם; חֵמָה; עֶבְרָה; חֲרוֹן; קָצַף; כָּעַס; רָגַז; עַז | **One Hebrew word per anger lemma** (Ludlul I 1–40 piles them up: the reader must see how many). |
| *nâḫu*; *pašāḫu*; *napāšu* | נָח; נִרְגַּע; נָפַשׁ | Creation. |
| *serrēmu*; *purīmu*; *lābu*; *nēšu* | פֶּרֶא (**not used**: `עָרוֹד` for *akkannu*): *serrēmu* = `חֲמוֹר־בָּר`; `עֵרָד` for *purīmu*?; לָבִיא / אַרְיֵה | Theodicy 48, 59: fix there; keep `פֶּרֶא` out (reserved by the Gilgameš corpus for Gen 16:12). |
| *gišimmaru*; *suluppu* | תָּמָר; תְּמָרִים | Gilgameš (Theodicy 56). |
| *bukru*; *aplu*; *māru*; *mārtu*; *aḫu rabû*; *aḫurrû* | בְּכוֹר (reserved for *bukru*, creation corpus); יוֹרֵשׁ; בֵּן; בַּת; הָאָח הַגָּדוֹל; הַצָּעִיר | Theodicy 245–250, 259–263 ↔ the younger son preferred (בראשית כה; מח). |

## 6. Formulas and repeated passages
| Akkadian | Hebrew | Notes |
|---|---|---|
| *ludlul bēl nēmeqi ila muštāla* (I 1, = the poem's title) | אֲהַלֵּל אֶת אֲדוֹן הַחָכְמָה, אֵל … | The first translator fixes the epithet *ila muštāla* ("the deliberating / considerate god": *muštālu* Gt of *šâlu* "ask, consider") and writes it here via `project.md`; I 1 = I 3 except the name; I 2 = I 4. |
| *eziz mūšī muppašir urrī* (I 2, 4) | זוֹעֵם בַּלַּיְלָה, מִתְפַּיֵּס בַּיּוֹם | Fixed. |
| I 9–10 = 11–12 (with *Marduk*); I 29–30 ≈ 31–32 | identical Hebrew where the Akkadian is identical | |
| **Ludlul II 51–57 ↔ III 69–75 (cf.)** | the same Hebrew word for every shared lemma | The demons that came (II) are driven back the same way (III): the reversal must be visible. The Tablet III translator copies the nouns of II exactly. |
| Ludlul I 41ff. ↔ V (restoration) and I 77ff. (the courtier's humiliation) ↔ V (his reinstatement) | the same Hebrew for the same lemma | Track by `wisdom_tools.py lemma`. |
| Theodicy: the friend's address formulas (*ibrī*, *itpēšu*, *palkû*, *mūdû* …) and the stanza openings | fixed at first occurrence | Each stanza's first syllable is the acrostic (§7). |
| *ṭēm ili / milik ili … rūqu kīma qereb šamê* (Theodicy 82, 256 ≈ 58) | identical Hebrew where identical | ↔ `כִּי גָבְהוּ שָׁמַיִם מֵאָרֶץ כֵּן גָּבְהוּ דְרָכַי מִדַּרְכֵיכֶם` (ישעיהו נה:ט) [equivalent]; `גָּבְהֵי שָׁמַיִם מַה תִּפְעָל` (איוב יא:ח). |

## 7. The Theodicy's acrostic
The 27 stanzas begin with the syllables *a-na-ku sa-ag-gi-il-ki-[i-na-am-u]-ub-bi-ib ma-áš-ma-šu ka-ri-bu ša i-li u šar-ri* "I am Saggil-kīnam-ubbib, the exorcist, who blesses god and king" (check every syllable against eBL's ATF before using it). **The Hebrew does not imitate the acrostic** (fidelity over form; a Hebrew acrostic would force word choices). Instead:
- each stanza in the annotated and the clean translation has the heading `## בית <Roman numeral> (<lines>) – <speaker> – <syllable>`, e.g. `## בית I (1–11) – הסובל – a`;
- the clean translation's introduction explains the acrostic, gives the whole sentence in Hebrew, and mentions the biblical alphabetic acrostics (תהלים קיט; איכה א–ד; משלי לא:י–לא) as a [divergence]: the Bible's acrostics are alphabetic, this one spells a name and a sentence.

## 8. Reserved Hebrew (checked by `wisdom_tools.py verify`)
Never in a `>` line: `אֱלֹהִים` / `אֱלוֹהַּ`; `שָׂטָן`; `עוֹלָם`; `טֶרֶם`; `רָקִיעַ`, `עֵדֶן`, `תֵּבָה`, `כְּרוּבִים`; `שְׁאוֹל`; `הֶבֶל`; `גֹּאֵל` / `גָּאַל`; `מַלְאָךְ`; `תָּם` / `תָּמִים` / `תֻּמָּה`; `צַדִּיק` / `צֶדֶק` / `צְדָקָה`; `פֶּרֶא` (Gilgameš).
Only for their Akkadian counterpart (lemma-gated): `עָזַב` (*ezēbu*), `טוֹב` (*ṭābu* family), `יָשָׁר` (*išaru* family), `רחם` (*rēmu* family), `ידע` (*edû*; `דַּעַת` also for *ṭēmu*), `עָפָר` (*eperu*), `טִיט` (*ṭiṭṭu*), `קֶבֶר` (*qabru* / *qebēru*), `לָקַח` (*leqû*), `נָחָשׁ`, ארר, `חֶסֶד` (*dumqu* family), שלם (*šulmu* / *šalāmu* / *salāmu*), `נָקִי` (*zakû* / *ebbu*), `רָשָׁע` (*raggu* / *ṣēnu*). Gilgameš §6 also binds (`שׂים` = *šakānu*, `קָרָא` = *nabû*, שוב = *târu*, `עֵץ` = *iṣu*, `עֵשֶׂב` = *šammu*), checked by hand with `grep`.
If a check fires on a legitimate rendering of a lemma variant, the coordinator widens the allow-list; do not bend the Hebrew.

## 9. Deviations from the inherited renderings
- *utukku*: transliterated `אוּטוּכּוּ` (Gilgameš: `רוּחַ`), because the demons are a list here (§2).
- *kabattu*: `כָּבֵד` (Gilgameš: `רוּחַ`), the organ kept (§3).
- *palāḫu* of gods: `יָרֵא` (Gilgameš, creation: `פָּחַד`) (§2).
- *māmītu*: `שְׁבוּעָה` (law corpus: `אָלָה`), because of `אֵלָה` "goddess" (§2).
- *pašāru* "relent": `נִתְפַּיֵּס` (Gilgameš: `פָּשַׁר` for dreams, which stays).

## 10. Merged after the runs
(The coordinator adds the translators' accepted proposals here, numbered by run.)

### 10.1 After Ludlul I (run 1, 2026-10-19)
All proposals of `1-לודלול/project.md` § Tablet I "Proposals for the shared renderings" are **accepted and binding** (grep `annotated-I.rtl.md` for context). The main ones:
- **Title line (§6):** I 1 `אֲהַלֵּל אֶת אֲדוֹן הַחָכְמָה, אֵל מָתוּן,` (*muštālu* = `מָתוּן`, as LH's prologue in the law corpus); I 3 `מַרְדּוּךְ, אדון החכמה, אֵל מתון,`.
- **Anger (§5), added:** *nakbatu* `כובד`; *ennettu* `עונש`, *enēnu* II `ענש` (*enēnu* I "be gracious" = `חנן` [cognate]: the pun survives); *gaṣṣu* `אכזר`; *akṣu* `חֲמוּרָה` (vocalized); *šabbasû* `כועס`; *nekelmû* `הזעיף פנים`; *nadāru* `השתולל`, *nanduru* `משתולל`; *nalbubu* `זועף`.
- **Personal religion (§2), added / corrected:** *parṣu* = `פולחן`, *pelludû* = `חוקות` (Enūma eliš V 67; **replaces** §2's `פֶּלַח`); *têrtu* "office" `משרה`; *egerrû* `קוֹל־הַמִּקְרֶה`; *tû* `לחש`; *karāṭu* N `נִכְמָר`; *kâšu* D "help" `סעד`; *nêšu* Š `קיים (חיים)`; *naparkû* `חדל`; *salātu* `ניתק`; *šadâšu elû* `עלה אל הרו`; *ālik idi* `הולך לצד`; *dalāḫu* `דלוח` [cognate].
- **Body and society (§3), added / corrected:** *adirtu* (gloom; *adāru* I) = `קדרות` (**corrects** §2's `חֲרָדָה`, which stays for *adāru* II "fear"); *idirtu* `צרה`; *unūtu* (innards) `כלים`; *aḫulap* = **`רַב!`** (always vocalized; ↔ `רַב עַתָּה הֶרֶף יָדֶךָ`, שמואל ב כד:טז; binds III 35, 38, 55); *damiqtu* (noun) `חסד`, *damqu* (adj.) `נאה`; *ṭābtu* `טובות`; *bāštu* `הדר`; *dūtu* `און`; *simtu* `צביון`; *taslītu* `רכילות`; *qīptu* `פקודה`; *kaṣāru* `קשר`; *karāṣu* D "slander" `קרץ` [cognate ↔ `אֲכַלוּ קַרְצֵיהוֹן`, דניאל ג:ח]; *ḫaštu* `שחת`; *rēṣu* `עוזר`; *gitallutu* `פלצות`; *qitayyulu* `תמהון`; *zammāru* `זמר`; *ṣarāpu* I `צרב`, II Š `הצריח`; *etellu* `נגיד`; *agašgû* `זאטוט`; *ṣāltu* `ריב`, *puḫpuḫḫû* `קטטה`; *kabāru* `כביר`.
- **Always vocalize (§8), added:** `אֵל` standing alone; `רַב` (*aḫulap*); `אוּלַי` (*tuša*); `כְּפָרָה`; `חֲמוּרָה`; `הַכָּבֵד` / `כָּבְדָה` (heavy vs liver); `הַנָּאָה`.
- **Convention:** words in parentheses in eBL's normalization (variants of some manuscripts) are translated only if needed; `(לאדם)` may be added after *rašû* Š "make (someone) acquire".
- Open (for the user): *aḫu* "arm" vs *idu* "arm" (both `זרוע` so far; `project.md` I, open decision 4).

### 10.2 After Ludlul II (run 2, 2026-10-19)
All proposals of `1-לודלול/project.md` § Tablet II are **accepted and binding** (grep `annotated-II.rtl.md`). The main ones:
- **Closed items of §2:** *nīš ili zakāru* = `הזכיר את חיי (האל)`; *maṣḫatu* = `קמח־מַצְחַתּוּ` (as Gilgameš IV; **replaces** §2's `קֶמַח־מִנְחָה`); *ūm ili* `יום האל`, *eššēšu* `חג־החודש`; *appa enû* `שינה את אפו` (literal); *šukênu* `השתחווה`; *kimiltu* `זלעפה`; *kikiṭṭû* `טקס`; *maššakku* `מֻגְמָר`; *bâlu* `עתר`; *sakikkû* `תסמינים`; *tašīmtu* `תושייה`; *sakkû* `תקנה`; *nigûtu* `רינה`; *baṭālu* `ביטל` [cognate]; *ḫasāsu* `הגה`.
- **The demon passage II 51–57 (binding for III 69–75; table in `project.md` § Tablet II "Lines shared"):** *imḫullu* `רוח־רעה`; *išid šamê* `יסוד השמים`; *irat erṣeti* `חזה הארץ`; *diʾu* `כאב־הראש`; *šūlu* (demon) `שׁוּלוּ` **always vocalized** (*šūlu* "cough" = `שיעול`; open decision: III 71 is lemmatized "cough" by eBL); *utukku lā nêʾi* `אוּטוּכּוּ שאין להפנותו לאחור`; *ēkur* `אֵכּוּר`; *apsû* `אַפְּסוּ`; *erkallu* `אֶרְכַּלָּה`; *lamaštu* `לַמַשְׁתּוּ`; *šuruppû* `צינה`; *luʾtu* `רפיון`. Coordinator's choices for III: *duppuru* D = `הדף` (not `סילק`, which is *tabālu*); *kašādu* D "chase off" = `הֵנִיס` (Gilgameš); *târu* D = `השיב` (the pun on *lā nêʾi*); *elû* Š = `העלה`; *nasāḫu* = `נסח`; *šammu* = `עשב`.
- **Body and disease (§3), added:** *urʾudu* `גרון`; *ḫaḫḫu* `ליחה`; *uriqtu* `ירקון` [cognate ↔ דברים כח:כב]; *bubūtu* `רעבון`; *niṭâtu* `מלקות`; *qinnāzu* `שוט`; *paruššu* `דרבן`; *ṣillû* `סלונים`; *ziqtu* `דוקרנים`; *illurtu* `אזיקים`; *maškanu* `כבל`; *rubṣu* `גללים`; *tabāštānu* `צואה`; *zâbu* `זב` [cognate]; *rimûtu* `קהות`; *mangu* `קשיון`; *zaqru* `תמיר`; *šukānu* `תכשיט`; *ḫabil* `חבול`.
- **Wisdom (§4):** *ḫakāmu* = `הבין` (cognate חכם noted); *gullultu* `עבירה`; *masāku* `נמאס`; *apâtu* `הרבים`; *anzanunzû* `התהום` [equivalent]; *lū īde* `לו ידעתי`.
- **Nature and time (§5):** *šâḫu* `נשף`; *ekēlu* `אָפֵל` (vocalized; open: the flood corpus has `הֶחְשִׁיךְ`); *eṭû* `חשך`; *surriš* `לרגע`, *zamar* `מיד`; *urqītu* `ירק` [cognate]; *agû* `גל`.
- **Always vocalize (§8), added:** `שׁוּלוּ`, `אָפֵל`, `שָׁדַיִם`, `כְּאֵל`, `אֵלָם` / `אֵלָן`.
- `wisdom_tools.py`: the `ישר` allow-list includes *bussuru* (`בישר`, II 118).

### 10.3 After Ludlul III (run 3, 2026-10-19)
All proposals of `1-לודלול/project.md` § Tablet III are **accepted and binding** (grep `annotated-III.rtl.md`), with these notes:
- **Names (§1):** Laluralimma `לָלוּרָלִימָּה` (= the commentary's *Ṭābi-utul-Enlil*, the same man: §1's "Tabi-utul-Enlil (check)" is withdrawn); Ur-Nintinugga `אוּר־נִינְתִּינוּגָּה`; *bābilû* `הבבלי`; the sufferer's name explained at III 44.
- **Ritual (§2):** *šiptu* `קסם` (*mê šipti* `מי קסם`, *šipat balāṭi* `קסם חיים`) beside *tû* `לחש` – **open for the user**: `קֶסֶם` is the Bible's word for divination (`קֹסֵם קְסָמִים`, דברים יח:י), so it pre-empts the Deut 18 comparison; the alternative is `חֶבֶר` / `לַחַשׁ` (see the coordinator's note in `1-לודלול/project.md`, open decisions); *ramku* `טבול`; *bīnu* `אשל`; *mullilu* `מטהר`, *elēlu* D `טיהר`; *ebēbu* D `ניקה`; *muššuʾu* `עִסָּה`; *kapāru* `כִּפֵּר` (always vocalized; ↔ ישעיהו ו:ז); *unnīnu* `שוועה`; *egītu* `שגגה`; *pišertu* `שחרור`; *lā tapallaḫ* `אל תירא`; *ittu damqatu* `אות נאה`; *šipirtu* `שליחות`; *lēʾu* `לוח`.
- **Body (§3), added:** *šinnu* `שן`; *luʾu* `ושט`; *šammāḫu* `המעי הגס`; *ṣupru* `ציפורן`; *nešmû* `שמיעה`; *nipšu* `נשיפה`; *ummu* (fever) `חום`; *esēru* `נאסר` [cognate]; *idiltu* `נעילה`; *mašqītu* `משקה`; *saḫḫu* `נפיחות`.
- **Images (§5):** *qutru* `עשן`; *imbaru* `ערפל`; *nalšu* `טל`; *agû* I `כתר`; *melammu* `זוהר`; *šār bēri* `שלושת אלפים ושש מאות בֵּרוּ`; *amalu* `אַמָּלוּ`.
- ***wabālu*** (this corpus): `הביא` (bring to someone) / `הוביל` (carry off); `נשא` only for *našû*. A deviation from Gilgameš §10 (`הוביל` = *warû* there; *warû* does not occur here). Open for the user.
- **Always vocalize (§8), added:** `הֶחֱלוּנִי`, `הַנַּחֲלֶה`, `עִסָּה`, `כַּסַּל`, `הַמּוּצָא`, `הוֹבִילָהּ`.

### 10.4 After Ludlul IV and V (run 4, 2026-10-19)
All proposals of `1-לודלול/project.md` § Tablet IV and § Tablet V are **accepted and binding** (grep `annotated-IV.rtl.md`, `annotated-V.rtl.md`). The main ones for the Theodicy translators:
- **Names (§1):** Nazi-Maruttaš `נָזִי־מָרוּתַּשׁ`; Girra `גִּירָה`; Sumer `שׁוּמֶר` (always vocalized), Akkad `אַכַּד`; Kunuš-kadru `כּוּנוּשׁ־כַּדְרוּ`; the gates of Esagil transliterated + a quoted Hebrew gloss (`בְּכָא־חֶגַל ("שער השפע")`).
- **Ritual, prayer, piety (§2):** *utnēnu* `התפללות` / `התפלל`; *tēmīqu* `עתירה`; *maḫāru* Š `הקריב`; *ṭātu* `שׁוֹחַד` (open); *igisû* `תשורות`; *šulmānu* `שַׁלְמוֹן` [cognate]; *marû* `מריא` [cognate]; *rimku* `טבילה`; *tēdištu* `חידוש`; *salāḫu* `הזה`; *tēliltu* `טהרה`; *dalīlu* `הילולים`; *tanittu* `תהילה`; *zamāru* `זמר`; *qadādu* `קד`; *lā pāliḫ ili* `לֹא־יְרֵא אֵל`; *pašāru* N "be released" `שוחרר` ("relent" stays `נתפייס`).
- **Society and body (§3):** *qēbiru* `קובר` [cognate]; *šalamtu* `נבלה`; *kabātu* D `כיבד` [cognate]; *mānaḫtu* `יגיע`; *maruštu* `תלאה`; *mārū Bābili* `בני בבל`; *ṣalmat qaqqadi* `שחורי הראש`; *abbuttu* `תספורת העבדות`; *kīlu* `כלא`.
- **Images (§5):** *gerru* `כפיר`; *šuršu* `שורש` [cognate] (III a+1 *erēnu* changed by the coordinator to `בסיס`); *papallu* `שתיל`; *ekletu* `חשכה`; *eṭûtu* `עלטה`; *nawirtu* `נהרה`.
- **Formulas (§6):** *lūman lā* `לוּלֵא`; refrain *anna* `הֵן!`; I 35–36 = V 73–74 (`שלא … מי` / `מבלעדי … איזה`); *qāta ṣabātu* `אחז את ידי`.
- `wisdom_tools.py` verify: a reserved-string hit is also licensed by a token of the line's normalization (for unlemmatized Sumerian names such as *ka-silim*).

### 10.5 After the Theodicy 1–143 (run 5, 2026-10-19)
All proposals of `2-התאודיציה-הבבלית/project.md` § Th1 are **accepted and binding** (grep `annotated-Th1.rtl.md`):
- **Stanza headings:** `## בית I (1–11) – הסובל – a` / `– הָרֵעַ –` (vocalized). IX–XI syllables only from the acrostic sentence.
- **Opening formula:** *gana luqbīka* = `בוא, אוֹמְרָה לך` (*gana* = `בוא`, as the ancient commentary glosses it; Gilgameš has `קוּם`). The ancient title in the head file follows it.
- **Address epithets:** *itpēšu* `נבון`; *nayyādu* `זהיר` (*naʾdu* `נזהר`); *bēl pakki* `בעל שיקול־הדעת` (*pakku* `שיקול־דעת`); *mūdû* `יודע`; *mumtalku* `הַנִּמְלָךְ`; *ibru* `רֵעַ`; *tappû* `חבר`; *narāmu* `אהוב`; *rūʾu* `עמית`; *aḫu* `אח`; *aqru* `יקר`; *nussuqu* `נבחר`; *rāš uzni* `קונה בינה`; *gitmālu* `מושלם`; *palkû* `רחב־דעת`; *lēʾû* `מסוגל`.
- **Repeated maxim:** 82 *ṭēm ili kīma qereb šamê nesi* → 256 copies its second half (`כקרב השמים … התרחק`).
- The commentary: eBL's `BabaLBCom1` is BM 66882+ = CCP 1.4 (one commentary, not two). A word it quotes is not bracketed ("שמורה בפירוש").
- `wisdom_tools.py`: *pakku*, *palkû* licensed for `דעת`.

### 10.6 After the Theodicy 144–297 (run 6, 2026-10-19)
All proposals of `2-התאודיציה-הבבלית/project.md` § Th2 are **accepted** (grep `annotated-Th2.rtl.md`): *Narru* `נַרּוּ`, *Zulummar* `זוּלוּמָּר` (the commentary's identifications Enlil / Ea in the notes); *patāqu* `עִצֵּב`; *santak* `תדיר`; *ṣurru* `טוּחוֹת` (open); *nīru* `מוֹטָה` (`עול` = *abšānu*); *pūḫu* `תמורה`; *isḫappu* `בליעל`; *pašallu* `סְגוֹר` (`כֶּתֶם` would trip the `תם` check; open). Line 297's "shepherd, sun of the people" is **the king** (eBL; cf. Ludlul I 55), not Šamaš.
