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
| *bakû*; *dimtu*; *damāmu*; *nissatu*; *qubbû*; *gerrānu* | בָּכָה; דִּמְעָה; קוֹנֵן (*kīma summi adammum* = `כַּיּוֹנָה קוֹנַנְתִּי`); יָגוֹן; קִינָה; תַּאֲנִיָּה (vocalized; 2026-10-23 harmonization, was מִסְפֵּד, reserved for *sipdu*; [equivalent] איכה ב:ה) | Gilgameš. ↔ `אֶהְגֶּה כַּיּוֹנָה` (ישעיהו לח:יד) [equivalent]. *summu / summatu* = `יוֹנָה`. |
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
| *ezēzu*; *ezzu*; *uzzu*; *uggatu*; *libbātu*; *rūbu*; *agāgu*; *šabāsu*; *kamālu*; *šamru* | זָעַם; זוֹעֵם; זַעַם; קֶצֶף (2026-10-30 harmonization, was חֵמָה; = Enūma eliš, Adapa; `חֵמָה` is *imtu*'s); עֶבְרָה; חֲרוֹן; קָצַף; כָּעַס; רָגַז; עַז | **One Hebrew word per anger lemma** (Ludlul I 1–40 piles them up: the reader must see how many). |
| *nâḫu*; *pašāḫu*; *napāšu* | נָח; נִרְגַּע; נָפַשׁ | Creation. |
| *serrēmu*; *purīmu*; *lābu*; *nēšu* | פֶּרֶא (**not used**: `עָרוֹד` for *akkannu*): *serrēmu* = `חֲמוֹר־בָּר`; `עֵרָד` for *purīmu*?; לָבִיא / אַרְיֵה | Theodicy 48, 59: fix there; keep `פֶּרֶא` out (reserved by the Gilgameš corpus for Gen 16:12). |
| *gišimmaru*; *suluppu* | תָּמָר; תְּמָרִים | Gilgameš (Theodicy 56). |
| *bukru*; *aplu*; *māru*; *mārtu*; *aḫu rabû*; *aḫurrû* | בְּכוֹר (reserved for *bukru*, creation corpus); יוֹרֵשׁ; בֵּן; בַּת; הָאָח הַגָּדוֹל; הַצָּעִיר | Theodicy 245–250, 259–263 ↔ the younger son preferred (בראשית כה; מח). |

## 6. Formulas and repeated passages
| Akkadian | Hebrew | Notes |
|---|---|---|
| *ludlul bēl nēmeqi ila muštāla* (I 1, = the poem's title) | אֲפָאֵר אֶת אֲדוֹן הַחָכְמָה, אֵל … (2026-10-23 harmonization, was אֲהַלֵּל) | The first translator fixes the epithet *ila muštāla* ("the deliberating / considerate god": *muštālu* Gt of *šâlu* "ask, consider") and writes it here via `project.md`; I 1 = I 3 except the name; I 2 = I 4. |
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
- **Title line (§6):** I 1 `אֲהַלֵּל אֶת אֲדוֹן הַחָכְמָה, אֵל מָתוּן,` (since the 2026-10-23 harmonization `אֲפָאֵר …`, §11.16) (*muštālu* = `מָתוּן`, as LH's prologue in the law corpus); I 3 `מַרְדּוּךְ, אדון החכמה, אֵל מתון,`.
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
- **Ritual, prayer, piety (§2):** *utnēnu* `התפללות` / `התפלל`; *tēmīqu* `עתירה`; *maḫāru* Š `הקריב`; *ṭātu* `שׁוֹחַד` (open); *igisû* `תשורות`; *šulmānu* `שַׁלְמוֹן` [cognate]; *marû* `מריא` [cognate]; *rimku* `טבילה`; *tēdištu* `חידוש`; *salāḫu* `הזה`; *tēliltu* `טהרה`; *dalīlu* `תִּפְאֶרֶת` (2026-10-23 harmonization, was `הילולים`; *dalālu* = `פֵּאֵר`); *tanittu* `תהילה`; *zamāru* `זמר`; *qadādu* `קד`; *lā pāliḫ ili* `לֹא־יְרֵא אֵל`; *pašāru* N "be released" `שוחרר` ("relent" stays `נתפייס`).
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

## 11. Round 3, run 4 (2026-10-21): the Great Prayer to Šamaš, Counsels of Wisdom, the Dialogue of Pessimism, the Instructions of Šuruppag
Fixed by the run's coordinator **before drafting**, for four parallel translators (one per text; guidelines §5.1 "Parallel texts of one corpus"). §1–§10 bind as before; this section adds what the four texts need, and wins where it is more specific. Translators propose additions in their `project.md`; the coordinator merges them into §11.x below.

### 11.1 Names
| Source | Hebrew | Notes |
|---|---|---|
| Šamaš (god); *šamšu* (sun) | שַׁמַשׁ; שֶׁמֶשׁ | **In SH both occur: vocalize every occurrence of both** (checked). CW, DP: the god only, vocalized at the first occurrence. |
| Aya (Šamaš's bride) | אַיָּה – **always vocalized** (checked) | unvocalized "where?" |
| Ebabbar | אֵבַּבַּר | "the shining house" (Šamaš's temple in Sippar and Larsa), in a note. |
| Ḫubur; Kurnugê; *erṣet lā târi* | חֻבּוּר; כּוּרְנוּגִי; אֶרֶץ אֵין שׁוּב | the netherworld corpus (`../העולם-התחתון/renderings.md`); `שׁוּב` licensed by *târu*. |
| Ninurta; Ninkasi; Nisaba; Utu (Sum.); Ubara-Tutu; Ziusudra; Šuruppag (person and city) | נִינוּרְתָּה; נִינְכָּסִי; נִיסָבָּה; אוּתוּ – **always vocalized** (`אותו` "him"); אוּבָּר־טוּטוּ; זִיוּסוּדְרָה; שׁוּרוּפַּךְ | Šuruppag as in the flood corpus §2 (its lines 1–13 are copied verbatim, checked). |
| Išme-karāb; Enlil-banda (the Counsels' colophon names) | אִישְׁמֵה־כָּרָאבּ; אֶנְלִיל־בַּנְדָּה | CW A+104 (check the eBL normalization). |
| *ištarītu*; *kulmašītu*; *ḫarimtu* | אִשְׁתַּרִית; כּוּלְמַשִּׁית; זוֹנָה | *ḫarimtu* = `זוֹנָה` (Gilgameš corpus, binding #2), [equivalent]; the cult women transliterated, explained in a note; `קְדֵשָׁה` only for *qadištu*. |

### 11.2 Justice, trade and the Torah's commercial laws (SH 58–129, CW, DP 63–69)
| Akkadian | Hebrew | Tag / reason |
|---|---|---|
| *dīnu*; *dânu*; *dayyānu*; *bēl dīni* | דִּין; דָּן; דַּיָּן; בַּעַל דִּין | law corpus. |
| *kittu*; *kīnu*; *kīniš*; *mīšaru*; *išaru* | אֱמֶת; נֶאֱמָן; בֶּאֱמוּנָה; מֵישָׁרִים; יָשָׁר | §3. **No `צֶדֶק`** (checked): SH 110 *ša kīni ṣābit zibānīti* = `האוחז במאזניים בֶּאֱמוּנָה` against `מֹאזְנֵי צֶדֶק` (ויקרא יט:לו) is a [divergence] to note. |
| *ṣalpu*; *ṣiliptu* / *ṣaliptu*; *ṣalāpu* | עִקֵּשׁ; עִקְּשׁוּת; עִקֵּשׁ (v.) | "crooked": [equivalent] ↔ `עִקְּשׁוּת פֶּה` (משלי ד:כד), `תּוֹעֲבַת יְהוָה עִקְּשֵׁי לֵב` (משלי יא:כ). |
| *sartu* | מִרְמָה | "fraud, crime" (DP 40–45); [equivalent] ↔ `מֹאזְנֵי מִרְמָה תּוֹעֲבַת יְהוָה` (משלי יא:א). §3's *sarrātu* "lies" = `כְּזָבִים` stays where the sense is "lies": check `lemma 'sartu'` and record. |
| *ṭātu* | שֹׁחַד (gated) | [equivalent] ↔ `וְשֹׁחַד לֹא תִקָּח` (שמות כג:ח), `לֹא תִקַּח שֹׁחַד` (דברים טז:יט); Ludlul IV. *māḫir ṭāti* = `לוֹקֵחַ שֹׁחַד`? – no: `לקח` is reserved for *leqû*, so *maḫāru* = `קִבֵּל` (`מקבל שוחד`); the Bible's `לָקַח שֹׁחַד` goes in the apparatus. |
| *zibānītu*; *gišrinnu* | מֹאזְנַיִם (gated) | [equivalent] ↔ `מֹאזְנֵי צֶדֶק` (ויקרא יט:לו), `מֹאזְנֵי מִרְמָה` (משלי יא:א). |
| *abnu*; *aban kīsi*; *kīsu* | אֶבֶן; אֶבֶן הַכִּיס; כִּיס (gated) | **[cognate] twice** ↔ `לֹא יִהְיֶה לְךָ בְּכִיסְךָ אֶבֶן וָאָבֶן` (דברים כה:יג); *kīsu* also "capital" (SH 104 *uḫallaq kīsa*): keep `כִּיס` and say so in the note. |
| *sūtu*; *šiqlu*; *biltu* (talent); *uṭṭatu* (grain; a grain-weight) | סְאָה (gated) [cognate]; שֶׁקֶל; כִּכָּר; גַּרְגִּיר / דָּגָן by sense | the everyday-voices corpus (`שקל`, `ככר`). `אֵיפָה` never (↔ דברים כה:יד, in the apparatus). |
| *ṣibtu* (interest); *ḫubullu* (interest-bearing debt); *nēmelu*; *atru*; *ummânu* (creditor; loan) | תּוֹסֶפֶת; חוֹב; רֶוַח; יֶתֶר; נוֹשֶׁה | LH precedents (*ṣibtum* `תוספת`, *ḫubullum* `חוב`). `נֶשֶׁךְ`, `תַּרְבִּית`, `רִבִּית` never (checked; ↔ שמות כב:כד, ויקרא כה:לו–לז, דברים כג:כ in the apparatus). *ummânu* "creditor" vs *ummânu* "scholar" (`אֻמָּן`, §4): different words, note it. |
| *tamkāru*; *samallû*; *kāru* | תַּגָּר; שׁוּלְיַת־תַּגָּר (by sense); נָמֵל | law corpus (`תגר`). |
| *arnu*; *arna šūzubulu* | עָוֹן; הֵטִיל עָוֹן (by sense) | §2. |
| *abbūt enši ṣabātu* | אָחַז בַּעֲנִיַּת הַחַלָּשׁ? – fix in SH 99 | *ṣabātu* = `אָחַז` (§6.7 harmonization). |
| *riābu* (requite); *gimlu*; *gamālu* | גָּמַל; חֶמְלָה; חָמַל | **A deviation from the law corpus** (`הֶחֱלִיף` "replace"): here the sense is "requite" (CW A+11, A+15, A+62), and `גָּמַל` is the Hebrew word ([equivalent] ↔ `גְּמָלַתְהוּ טוֹב וְלֹא רָע`, משלי לא:יב). *gamālu* stays `חָמַל` (the false friend). |

### 11.3 Piety, parents, long life (CW, SH 130–166)
| Akkadian | Hebrew | Tag / reason |
|---|---|---|
| *palāḫu*; *pāliḫ ili*; *puluḫtu* | יָרֵא; יְרֵא אֵל; יִרְאָה | §2. CW 9 *pilaḫšunūti* (father and mother) = `יְרָאֵם` [equivalent] ↔ `אִישׁ אִמּוֹ וְאָבִיו תִּירָאוּ` (ויקרא יט:ג). |
| *kubbutu* (*kabātu* D) | כִּבֵּד (gated) | [cognate] ↔ `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא; the repository numbers the Decalogue Ex 20:1–13 and Deut 5:6–18: print every verse first). |
| *arāku* D + *ūmū* | הֶאֱרִיךְ יָמִים (gated) | [cognate] twice ↔ `לְמַעַן יַאֲרִכוּן יָמֶיךָ` (שמות כ:יא), `לְמַעַן יַאֲרִיכוּ יָמֶיךָ` (דברים כה:טו). Only where the Akkadian has *arāku* (CW A+91). |
| *balāṭa uttar* (*watāru* D) | יוֹסִיף חַיִּים | **Not** `האריך ימים`: the Akkadian has neither *arāku* nor *ūmu*. [equivalent] ↔ `יִרְאַת יְהוָה תּוֹסִיף יָמִים` (משלי י:כז), and the weights law's `לְמַעַן יַאֲרִיכוּ יָמֶיךָ` (דברים כה:טו), noted. |
| *ṭāb eli šamaš* / *ul ṭāb eli šamaš* | טוֹב עַל שַׁמַשׁ / לֹא טוֹב עַל שַׁמַשׁ | the Hebrew idiom of אסתר א:יט (`אִם עַל הַמֶּלֶךְ טוֹב`): literal and natural; `טוב` licensed by *ṭābu*. |
| *ikkibu* | תּוֹעֵבָה (*ikkib Marduk* = `תּוֹעֲבַת מַרְדּוּךְ`) | the everyday-voices / law corpora; [equivalent] ↔ `תּוֹעֲבַת יְהוָה` (משלי יא:א; יב:כב; טז:ה). |
| *ûrtu* | צַו | from *(w)âru* like *tērtu* (`הוֹרָאָה`): the debated link with `תּוֹרָה` goes in a note (`תּוֹרַת אִמֶּךָ`, משלי א:ח); `תּוֹרָה` / `מוּסָר` never in a `>` line (checked). |
| *našû īnī* (*ana*) | נָשָׂא עֵינַיִם (אֶל) | literal; [equivalent] ↔ `וַתִּשָּׂא אֵשֶׁת אֲדֹנָיו אֶת עֵינֶיהָ אֶל יוֹסֵף` (בראשית לט:ז), `לֹא תַחְמֹד אֵשֶׁת רֵעֶךָ` (שמות כ:יג); `חמד` never (checked). |
| *tappû*; *ibru*; *aššat / alti tappê* | חָבֵר; רֵעַ; אֵשֶׁת חֲבֵרוֹ | §3: *tappû* = `חבר`, so SH 88 is `אשת חברו`, against the Decalogue's `רֵעֶךָ` (a [divergence] in the word, an [equivalent] in the law). |
| *zêru*; *zāʾiru* | שָׂנֵא; שׂוֹנֵא | law corpus; CW 45 ↔ `אִם רָעֵב שֹׂנַאֲךָ` (משלי כה:כא). |
| *suppû*; *sullû* (n.); *teslītu*; *karābu*; *ikribu*; *labān appi* | תְּחִנָּה; תַּחֲנוּנִים; תַּחֲנוּן; בֵּרֵךְ; תְּפִלָּה; `לִטּוּף אַף` (Ludlul V 40, Theodicy 73; settled 2026-10-22) | §2 and the §6.7 harmonization; `lemma` before fixing. |
| *niqû*; *qutrinnu*; *šagigurrû* | זֶבַח; קְטֹרֶת; נִדְבָה | `נדבה` [equivalent] (freewill offering, ויקרא כב:כא). |

### 11.4 The Dialogue of Pessimism: the fixed refrain and its parts
Every exchange repeats one frame; **one Hebrew for each part** (checked by `verify` through the repeated lines):
| Akkadian | Hebrew |
|---|---|
| *arad mitanguranni* | `עֶבֶד, הִתְרַצֵּה לִי!` (*magāru* Gtn imperative, "keep complying with me"; the note gives Machinist's reading) |
| *annû bēlī annû* | `הֵן, אֲדוֹנִי, הֵן!` (*annû* = Ludlul's *anna* `הֵן`; `הִנֵּנִי` of בראשית כב:א only in the apparatus, [equivalent]) |
| *ē arad anāku … ul X* / *lā X* | `לֹא, עֶבֶד, אֲנִי … לֹא X!` |
| *lā taX bēlī lā taX* | `אַל תX, אֲדוֹנִי, אַל תX!` |
| *X bēlī X* (imperative) | `X, אֲדוֹנִי, X!` |
| *amēlu ša …* | `הָאָדָם אֲשֶׁר …` (*amēlu* = `אָדָם`, the narrative corpora) |
| *usātu*; *ēpiš usāti*; *bēl usāti* / *bēl lemutti* | עֶזְרָה; עוֹשֵׂה עֶזְרָה; בַּעַל עֶזְרָה / בַּעַל רָעָה (also SH 122, CW A+16) |
| *enenna mīnû ṭāb* | `עַתָּה, מַה טּוֹב?` ↔ `מִי יוֹדֵעַ מַה טּוֹב לָאָדָם` (קהלת ו:יב) [equivalent] |

### 11.5 Šuruppag (Sumerian): binding models
- **The Sumerian precedents bind**: the everyday-voices corpus (`../קולות-היום-יום/renderings.md`: the proverbs' vocabulary – *niĝ₂-gen₆-na* `נְכוֹנָה`, *niĝ₂-gig* `תּוֹעֵבָה`, *kal* `יָקָר`, *zid* `אֱמֶת` / `אִישׁ אֱמֶת`, *si sa₂* `יֹשֶׁר`, *lu₂-kur₂* `אִישׁ נָכְרִי`, *ḫu-ru-um* `נִבְעָר`, *lil₂* `כְּסִיל`, *gu₂* `צַוָּאר`, *ku₇* `מָתוֹק`, *zeb* `עָרֵב`), then the creation and city-lament corpora (Sumerian), then the flood corpus §2 (Šuruppag 1–13).
- **The frame:** *na de₅* = `נָתַן עֵצָה`, *na* = `עֵצָה`, *dumu-ĝu₁₀* = `בְּנִי` [equivalent ↔ `שְׁמַע בְּנִי מוּסַר אָבִיךָ`, משלי א:ח], *ĝizzal … ak* = `הִטָּה אֹזֶן` [equivalent ↔ `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים`, משלי כב:יז], *ab-ba* = `הַזָּקֵן` – all from the flood corpus §2. Lines 1–13 are copied verbatim; 73–82 and 143–152 copy them where the Sumerian is identical and change exactly what differs (`wisdom_tools.py sux SU` lists them).
- **The prohibitive** *na-* + verb = `אַל` + future (`אַל תִּקְנֶה`), never `לֹא` (the Sumerian has a modal prefix, the English "you should not" hides it); *nu-* = `לֹא`; *ḫe₂-* by the morphology (wish or affirmative: legends-of-kings rule); *ša-* (affirmative, "then surely") = `הֲרֵי` or a plain future, fixed by the translator at its first occurrence and kept.
- **Look for** (read the transliteration first; briefs say "look for", never "translate as"): a boundary (*ki-sur-ra*, `גְּבוּל` gated; ↔ דברים יט:יד, כז:יז – the survey's "do not move a boundary" may not be in this composite); surety (*šu du₈*, 19–20 ↔ משלי יא:טו, כב:כו); the neighbour's wife / a married woman (*nitalam*, 32–34 ↔ `לֹא תִנְאָף` (שמות כ:יב); משלי ו:כט); theft (28–31 ↔ `לֹא תִגְנֹב` (שמות כ:יב)); cursing (50); the slave girl (49, 131–133, 193); honour of the elder brother / mother / father (172–174, 255–260 ↔ שמות כ:יא); the palace as a river (94–96 ↔ קהלת א:ז `כָּל הַנְּחָלִים הֹלְכִים אֶל הַיָּם וְהַיָּם אֵינֶנּוּ מָלֵא`); the prayer that cools (139–140).
- Reserved as in §8, licensed by the Sumerian words (`wisdom_tools.py` allow-lists): `טוב` *dug₃*; `ידע` *zu*; `שלם` *silim*; `רשע` *erim₂*; `חסד` *sag₉*; `עפר` *saḫar*; `טיט` *im*; `לקח` *dab₅* (until 2026-10-23: flood line 9 and Šuruppag 9, 79, 149; now *dab₅* = `אָחַז` there too, `עצתי תיאחז`, and `לקח` is no longer licensed by *dab₅*; elsewhere *dab₅* = `אָחַז` / `תָּפַס`, the everyday-voices rule); `ארר` *nam … kud*.

### 11.6 Reserved in this run (checked by `wisdom_tools.py verify`, in addition to §8)
Never: `נֶשֶׁךְ` / `תַּרְבִּית` / `רִבִּית`; `אֵיפָה` (and "where?" is `הֵיכָן`); `הִנֵּה` / `הִנֵּנִי`; `חָמַד` (except `חֶמְדָּה` for Sum. *igi-tum₃*, 2026-10-23 harmonization: Šuruppag 135, as the proverbs A31); `תּוֹרָה` / `מוּסָר`; `צֶדֶק` (§8). Gated: `שֹׁחַד` (*ṭātu*), `כִּיס` (*kīsu*), `סְאָה` (*sūtu*), `מֹאזְנַיִם` (*zibānītu*), `גְּבוּל` (*kudurru*, *miṣru*, *ki-sur-ra*), the root `כבד` (*kabātu* family, *kabattu*), the root `ארך` (*arāku*). Vocalize: `שַׁמַשׁ` / `שֶׁמֶשׁ` in SH; `אַיָּה`; `אוּתוּ`; `אָמָה` (*geme₂*).

### 11.7 Files and order
| Key | Project folder | Text | Base | Labels |
|---|---|---|---|---|
| SH | `3-התפילה-הגדולה-לשמש/` | the Great Prayer to Šamaš | eBL `L/3/4` (ed. G. Rozzi; tr. Foster): `../sources/eBL/Shamash-Hymn-SB/` | 1–200 |
| CW | `4-עצות-חכמה/` | Counsels of Wisdom | eBL `L/2/3` (ed. Zs. J. Földi; tr. Foster): `../sources/eBL/Counsels-of-Wisdom-SB/` | 1–54, A+1–A+105 (159) |
| DP | `5-דו-שיח-הפסימיות/` | the Dialogue of Pessimism | eBL `L/2/4` (ed. A. A. Fadhil; tr. Foster, Sarabia, Khatabe): `../sources/eBL/Dialogue-of-Pessimism-SB/` | 1–38, a+1–a+7, 39–86 (93) |
| SU | `6-הוראות-שורופך/` | the Instructions of Šuruppag | ETCSL 5.6.1 (+ ORACC morph via `../tools/sumerian_workbench.py`): `../sources/ETCSL/5.6.1--Instructions-of-Shuruppag/` | 1–280 with 82A, 152A, 163A–B, 199A–B, 266A, 273A (288) |

### 11.8 After Etana (2026-10-22): nets, pits, and the words this run shares with the legends-of-kings corpus
Etana (Round 3 run 2, `../אגדות-מלכים/renderings.md` §10) was finished while this run waited for its quota; its serpent prays to Šamaš's net (*šētka erṣetu rapaštu, gišparraka šamû rūqūtu*), the image of SH 83–87. Its renderings bind here:
- **Nets (one Hebrew per word, in this corpus and with Etana):** *šētu* = `רֶשֶׁת` (gated in Etana); *gišparru* = `פַּח`; *šuškallu* = `שְׂבָכָה` (`וְעַל שְׂבָכָה יִתְהַלָּךְ`, איוב יח:ח; first set as `מִכְמֹרֶת`, changed after SH-a: *kamāru* = `מִכְמֹרֶת`, as in Enūma eliš IV 112); *naḫbalu* = `מוֹקֵשׁ`. **Changed by the coordinator in finished lines:** Ludlul II 72 (*šuškallu*: `כרשת` → `כִּשְׂבָכָה`), II 84 (*naḫbalu*: `פח` → `מוקש`), Theodicy 160 (*šētu*: `[מִכְמָר]` → `[רשת]`), with their notes and parallels rows. The other trap words of SH 84–96 (*rappu*, *kippu*, *kamāru*, *ḫuḫāru*) get distinct words fixed by the SH translator after grepping (EST has *kippu* = `מלכודת`, *gišparru* = `מצודה`; Enūma eliš *kamāru* = `מכמורת`, *sapāru* = `רשת`: **an open cross-corpus split** – the nets are not yet one-word-per-lemma across the corpora; STATUS §6).
- *šuttatu* = `שׁוּחָה` (CW 39, DP 51), *būrtu* = `בּוֹר` [cognate] (DP 51); *itû* = `גְּבוּל` (gated); *anzillu* = `תּוֹעֵבָה` (= Sum. *an-zil*; SH 95; *ikkibu* is `תּוֹעֵבָה` too – the shared Hebrew is noted where both occur); *eṭemmu* = `אִט` always vocalized; *māmītu* = `שְׁבוּעָה`, *tamû* = `נִשְׁבַּע`; *urḫu* = `דֶּרֶךְ`, *ḫarrānu* = `אוֹרַח`; Šamaš / the sun always vocalized (as in SH).

### 11.9 Pace (2026-10-22)
The cloud's special allowance is over (guidelines §5.1): **the translators of this run work one at a time**, in this order: SH-a (1–100), SH-b (101–200), CW, DP, SU-a (1–142), SU-b (143–280). Each later translator sees the Hebrew of the earlier ones (`grep` / `lemma`), so the lines shared between the texts (run brief §5) are copied, not re-invented.

### 11.10 Merged after SH-a (the Šamaš Hymn 1–100, 2026-10-22)
All proposals of `3-התפילה-הגדולה-לשמש/project.md` § SH (1–100) are **accepted and binding** (grep `annotated-SH.rtl.md`), with these decisions of the coordinator:
- **Light (§5):** *nūru* `אור` (`האור שלך` where `אורך` would read "length"; the `ארך` gate is now licensed by *nūru* too), *nawāru* `האיר`, *namirtu* `נהרה`, *napardû* Š `הנהיר`, *helû* Š `הבהיר`, *ekletu* `חשכה`, *eṭûtu* `עלטה`, *uklu* `אֹפֶל`, *melammu* `זוהר`, *šarūru* `קרני־אור`, *barīru* `נצנוץ`, *šalummatu* `הוד`, *namrīru* `נֹגַהּ`, *birbirrū* `שביבים`, *namurratu* `יפעה`, *ṣētu* `שָׁרָב`. The epithets of 17 bind 176–177 (`מנהיר העלטה, מאיר האֹפֶל,` / `פותח החשכה, מאיר הארץ הרחבה,`).
- **Nets (§11.8, revised):** *kamāru* = `מִכְמֹרֶת` (one Hebrew with Enūma eliš IV 112), *šuškallu* = `שְׂבָכָה` (SH 5, 83; Ludlul II 72 changed accordingly), *šētu* `רשת`, *gišparru* `פח`, *naḫbalu* `מוקש`, *rappu* `סד`, *kippu* `מלכודת` (EST), *ḫuḫāru* `מצודה`; *tarāṣu* (a net) `שָׁלַח` (↔ `כִּי שֻׁלַּח בְּרֶשֶׁת בְּרַגְלָיו`, איוב יח:ח).
- **Justice (§11.2), replaced:** *abbūt enši ṣabātu* = `אחז באבהות החלש` (*abbūtu* "fatherhood, patronage"; ↔ `אָב אָנֹכִי לָאֶבְיוֹנִים`, איוב כט:טז); *arna šūzubulu* = `הסביל עוון` (*zabālu* ~ `סבל` [cognate]); *pāna (ul) wabālu* = `(לא) נשא פנים`, a licensed idiom against §10.3's *wabālu* = `הביא` (↔ דברים י:יז); *zakû* D `זיכה` [cognate] (`נקי` stays *ebbu*); *māḫāzu* `מחוז` [cognate]; *ṣalpu* `עיקש`.
- **Other:** *rēʾû* `רועה`, *nāqidu* `נוקד` [cognate]; *qaqqaru* `קרקע`; *ṣīru* `נעלה`; *balu* + suffix `זולת`; *šiddu* `פאה`; *nesû* (adj.) `מרוחק`; *bâʾu* `צעד` beside *ebēru* `עבר` [cognate] (Ludlul and the Theodicy had *bâʾu* `עבר` in three lines; since the 2026-10-23 harmonization, row 19, `צעד` there too, §11.16).
- **88:** *iššû nīš īnīšu* (figura etymologica) = `נשא משא עיניו`; Foster's "covets" manufactures `לֹא תַחְמֹד` – a finding.

### 11.11 Merged after SH-b (the Šamaš Hymn 101–200, 2026-10-22; SH complete)
All proposals of `3-התפילה-הגדולה-לשמש/project.md` § SH (101–200) are **accepted and binding**: *sūtu* `סאה`, *aban kīsi* `אבן הכיס` (↔ `אַבְנֵי-כִיס`, משלי טז:יא; דברים כה:יג), *ṣibtu* `תוספת`, *maḫāru* (of prayer) `קידם את פני`, *naptanu* `פַּת־בַּג`, *sikkūru* `נֶגֶר`, *ḫalpû* `קיפאון`, *dipāru* `אבוקה`, *kallatu* `כַּלָּה`, *aplu* `יורש`, *ṣītu* `מוצא` (↔ `מוֹצָא פִי`, דברים ח:ג), *sulû* `משעול` (the Theodicy's `שווקים` is an old split, recorded). Coordinator: *labān appi* = **`ליטוף אף`** (Ludlul V 40, Theodicy 73 bind; SH 131 changed; CW A+82 follows); the `רשע` gate is licensed by *ruggugu* too (SH 127 keeps `הָעַוָּל`). Open collisions recorded in the project (*qiāšu* / *šarāku* `העניק`; *abullu* / *bābu* `שער`; *anzillu* / *ikkibu* `תועבה`).

### 11.12 Merged after CW (Counsels of Wisdom, 2026-10-22; complete)
All proposals of `4-עצות-חכמה/project.md` § CW are **accepted and binding** (grep `annotated-CW.rtl.md`): *šikaru* `שֵׁכָר` [cognate], *kurunnu* `סובא`; *ana X târu* "turn into" = `נהפך ל־` (Ludlul I 85; `שוב` for "return"); *paṭāru* intr. "slip away" `פטר` [cognate]; *namūtu* `לָצוֹן`; *rīqu* `ריק`; *šitūltu* `שְׁאֵלָה`; *sanāqu* `ריסן`; *aḫāzu* "marry" `בעל`, *āḫizu* `בועל` (Gilgameš); *warû* "lead" `נהג` (a recorded deviation from Gilgameš `הוביל`, which is *wabālu* here); *kibsu* `שביל`; *kadrû* `מתנה`; *erbu* `הכנסה`; *labāru* D `התמיד`; *ebbūtu* `נאמנות`; *karṣa akālu* `אכל קרצים` [cognate]; *ribbatu* `פיגורים`; *quʾʾû* `קוה` [cognate]; *iḫzu* `לימוד`; *ilūtu* `אֵלוּת`; *uṭṭatu* `גרגיר`; *takālu* G `בטח`, D `הבטיח`; *elâtu* / *šaplâtu* `מרומים` / `תחתיות`. Coordinator: the `טוב` gate's *ṭūbātu* licence is confirmed; A+37 `עינך אל תשא` (singular, the normalization's *īnka*) accepted; `pars` / `verify` now read eBL's chapter-less parallels (`L II.3 10`) as links inside the text. Collisions recorded in the project (open decision 1: *atāru* D / *waṣābu* `הוסיף`; *enû* / *šanû* `שנה`).

### 11.13 Merged after DP (the Dialogue of Pessimism, 2026-10-22; complete)
All proposals of `5-דו-שיח-הפסימיות/project.md` § DP are **accepted and binding** (grep `annotated-DP.rtl.md`). The frame of §11.4 held against the transliteration (*annû* = *annu* "yes": eBL's lemma "this" is a slip); the refusal takes a dash before the fronted object (`"לא, עֶבֶד, אני – <object> לא X!"`), an infinitive object the infinitive absolute (`סָעוֹד לא אֶסְעַד`). New: *muttapraššidu* `נָד`, *dayyālu* `סובב`, *murtappidu* `משוטט`; *mašāru* `דהר`; *dekû* `הרם`; *qīptu* "credit" `פיקדון`; *ummânu* "loan" `מַשָּׁאָה` (beside *ummânu* "creditor" `נושה`, SH: one root for one Akkadian word in two senses – accepted); *qappatu* `סלסלה`; *tikku* `מפרקת` (`עורף` is *labānu* here); *nasāku* `זרק`; *bēl dabābi* `בעל־דברים`; *patānu* `סעד` (beside Ludlul's *kâšu* D `סועד`: recorded); *ḫaḫḫūru* `*עורב*` (species uncertain; beside *āribu* `עורב`: recorded). eBL's link 6 → 23 is false (6 = 24).

### 11.14 Merged after SU-a (Šuruppag 1–142, 2026-10-22)
All proposals of `6-הוראות-שורופך/project.md` § SU (1–142) are **accepted and binding** for SU-b (grep `annotated-SU.rtl.md`): the prohibitive *na-* `אַל` + future, *nu-* `לֹא`, *bara-* `בַּל` (vocalized); **the consequence prefix *ša-* (*ši-*, *šu-*, *še₃-*) = `הֲרֵי` before the verb, always vocalized**; *du₁₄* `ריב` (= Akk. *ṣāltu*, CW), *lu₂-ki-inim-ma* `עד`; *zuḫ* `גנב`; *šu du₈* `אחיזת־יד`; *dab₅* `תפס` (`לקח` only 9 and 79); *sug₆* `החליף` (the law corpus); *geme₂* `אָמָה`, *gi₄-in* `שפחה`, *egir₂* `נסיכה`; *inim sig-ga* `הדבר השפל`; *ka tar* `התהלל`; *inim dirig* `דבר יתר`; *sag₉* `נאה`, *ḫul* `רע` (`טוב` only for *dug₃*); *lil₂* `כסיל`; *kaš* `שֵׁכָר`; *du₇* `נגף`; *pu₂* `בור`; *dur₃* `עַיִר`; *igi-tum₃* `בעל משא־העין` (2026-10-23 harmonization: `החמדה`) (as SH 88's *nīš īni*; the proverbs corpus has `החמדה` at 3.x – a recorded split: `חמד` is reserved in this corpus for the Decalogue comparison); *us₂* `דבק`, *la₂* `הצמיד`; *du₃* `בנה`, *ak* `עשה`. No *ki-sur-ra* in 1–142 (the "boundary" of the survey is absent so far). Tool: the `ארך` gate licensed by *gid₂*, the `שלם` gate by *sug₆*.

### 11.15 Merged after SU-b (Šuruppag 143–280, 2026-10-22; SU complete, the run's drafting done)
All proposals of `6-הוראות-שורופך/project.md` § SU (143–280) are **accepted**: affirmative *ḫe₂-* in a consequence = `אָכֵן` (legends-of-kings rule); *la-ba-* `לא`; *-inga-* `גם`; *engar* `אִכָּר` [cognate via *ikkaru*], *sipad* `רועה`, *kar-ke₄* `זונה`, *ama-a-tud* `יליד־בית`, *dumu-gir₁₅* `בן־חורין`, *emeda* `מינקת`; *ḫul gig* `שנא`; *taka₄* `עזב`; *ten* `שכך`; *kadra* `מתנה` (= CW's *kadrû*); *kurun* `סובא` (= CW); *kun₅* `סולם`; *za-gin₃* `סַפִּיר`; *ḫuĝ* `שָׂכוּר` (vocalized); *du₇* "perfect" `שכלל` [cognate via *šuklulu*] (*du₇* "gore" `נגף`); *ab-ba* `הזקן` throughout (13 = 260). Split recorded: *dam tuku* `אשה … השיג` (the proverbs corpus `לקח אשה`; `לקח` is reserved here). The text has no *ki-sur-ra* (no "boundary") and no *dug₃* ("good"): the survey's "do not move a boundary" and ETCSL's "good and evil" are both absent from the Sumerian.

### 11.16 The 2026-10-23 harmonization (`harmonization--2026-10-23.md`)
2026-10-23 harmonization: the advice formula *na ga-de₅ na de₅-ĝu₁₀ ḫe₂-dab₅* = `אתן עצה – עצתי תיאחז!` (row 13; *dab₅* = `אחז`); Sum. *igi-tum₃* = `חֶמְדָּה` (row 16, as the proverbs A31 and the letters); changed lines: Šuruppag 9, 79, 149 `עצתי תילקח` → `עצתי תיאחז` (9 kept identical to the flood corpus's copy); 135 `בעל משא־העין – ראש בעץ מכה.` → `החמדה – ראש בעץ מכה.`. `wisdom_tools.py`: `חמד` is now licensed by *igi-tum₃* only, and `לקח` no longer by *dab₅*.

2026-10-23 harmonization, batch B (rows 2, 8, 10, 17): *kamāru* = `מִכְמוֹרֶת` (plene, as Enūma eliš IV 112): SH 87 `מִכְמֹרֶת` → `מִכְמוֹרֶת`. *mašqû* = `מַשְׁקֶה` [cognate, Gen 13:10], always vocalized: Ludlul II 86 `שוקתי – חסומה` → `מַשְׁקִי – חסום` (gender adapted). *dalālu* = `פֵּאֵר`, *dalīlu* = `תִּפְאֶרֶת` (`הִלֵּל` is *alālu*'s, here `הֵידָד`): Ludlul I 1 `אֲהַלֵּל` → `אֲפָאֵר` (and the title of the poem, the I 1–4 heading, the introductions), III 57 `להלל` → `לפאר` (the table's "I 57"), V 82 `הַלְּלוּ!` → `פארו!` (and the 77–90 heading), V 119 `הִלְּלוּ את הִילּוּלָ[יו?]` → `פארו את תפארת[ו?]` (the table's "82, 119" are Tablet V); the Theodicy 4 `אהללך` → `אפארך`; SH 166 `מהללות` → `מפארות`. *gerrānu* = `תַּאֲנִיָּה` (vocalized; [equivalent] Lam 2:5): Ludlul I 105 `מספד` → `תַּאֲנִיָּה` (and the 105–120 heading, the Tablet I introduction). New overlap: *mašqû* `מַשְׁקֶה` (II 86) beside *mašqītu* `משקה` (III 106) – one root, "watering place" / "drink"; *mašqû* is always vocalized.

2026-10-23 harmonization, batch C (rows 19, revised, and 24): *bâʾu* "pass along, go" = `צעד` in every corpus (the Šamaš Hymn's choice, 28, 30, 169; `עבר` stays for its cognate *ebēru*, the Theodicy 17 `עוברים`; `חלף` is *etēqu*'s): Ludlul I 80 `ברחוב עובר אני` → `ברחוב צועד אני`, IV c+16 `בשחרור עברתי` → `בשחרור צעדתי` (the reversal of I 80 keeps the same verb; its footnote and the notes that quote I 80 too); the Theodicy 291 `עברתי בנחת` → `צעדתי בנחת`. *miṭirtu* = `תעלה` (`פֶּלֶג` is now *palgu*'s, row 7): the Theodicy 245 `מושך בפלג` → `מושך בתעלה`. New overlaps, recorded: `תעלה` now renders both *miṭirtu* (245) and *atappu* (Th1 138) in the Theodicy; `צעד` renders both *bâʾu* and *akāšu* (the Theodicy 65 `את המסילה שצעדו אלה`). The Šamaš Hymn 172 *bâʾu* II "come" keeps `באים`; Counsels of Wisdom's *šadāḫu* keeps `פסע`.

- **2026-10-30 harmonization** (`../harmonization--2026-10-30.md`, rows 5, 6, 9): *siparru* "bronze" = `אָרָד` (was `נְחֹשֶׁת`, which stays *erû* "copper", the Šamaš Hymn 94); *ṣubātu* "garment" = `שִׂמְלָה` (was `בֶּגֶד`); *uggatu* "fury" = `קֶצֶף` (§5's anger row; was `חֵמָה`, now *imtu*'s; = Enūma eliš II 78, Adapa). Changed lines: Ludlul IV a+21 `הבהיק [את חלודתי] כנחושת.` → `הבהיק [את חלודתי] כְּאָרָד.` (and the a+13–a+23 heading, the note, the Tablet IV introduction); II 71 `אַלּוּ את גווי עטף (כ)בגד,` → `אַלּוּ את גווי עטף (כ)שמלה,`; I 5 `שממה חמתו` → `שממה קִצְפּוֹ` (vocalized: unvocalized `קצפו` reads as the verb); I 37 `אֲגַלֶּה את חמתו` → `אֲגַלֶּה את קצפו` (and the 37–40 heading, the Tablet I introduction, the notes at III 56, IV a+5 and V 70 that quote I 5 / I 37); their glosses and notes, project.md's anger list and parallels rows (I 5, II 71, IV a+21), the parallels index rebuilt. Jer 23:19's `חֵמָה` (I 5) and Ezek 1:7's `נְחֹשֶׁת` (IV a+21) stay [equivalent].
