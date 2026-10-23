# Renderings – the witchcraft-and-incantations corpus (`כשפים-ולחשים/`)

Binding for every translator of the corpus (Maqlû I–VIII and the Ritual Tablet; later texts of the corpus too). Fixed by
the coordinator of Round 3, run 6 (2026-10-21) **before the first line**, from a reading of the whole of Maqlû in eBL
(Abusch's edition, Schwemer's revision) and from the earlier corpora's renderings. Translators **propose** changes in
their section of `1-מקלו/project.md` ("Proposals for the shared renderings"); only the coordinator edits this file.

Precedence where this file is silent: the wisdom corpus (`../ספרות-החכמה-והצדיק-הסובל/renderings.md`: personal religion,
demons, the exorcist), then the Gilgameš corpus (`../אפוס-גילגמש/renderings.md`), then the flood and creation corpora,
then `translation-guidelines.md` §6.7. Check every new Hebrew word against the earlier corpora:
`python3 -I -B ../קולות-היום-יום/kol_tools.py lookup '<Akkadian regex>'` (how a source word was rendered anywhere) and
`python3 -I -B maqlu_tools.py grep '<Hebrew regex>' --all` (where a Hebrew string is already used).

The tags of guidelines §6.4 apply ([cognate], [equivalent], [divergence], [absent]). ★ = checked by `maqlu_tools.py
verify` (FORMULAS, RESERVED, TRAPS, FIXED).

## 0. The text and its voice

Maqlû ("Burning") is the script of one night-and-morning ceremony against witchcraft (the Ritual Tablet gives its acts):
a patient ("I"; `annanna mār annanna`, "so-and-so son of so-and-so") and his exorcist burn figurines of the witch, then
quench the fire, wash, and send the evil away at dawn. Almost every incantation addresses either a god (Nuska, Girra,
Šamaš, the gods of the night) or the witch herself ("you", **fem. sg.**: `-ki`, `attī`), or the witches together
("you", masc. pl. `-kunu`, or fem. pl. `-kina` / `-šina`). Keep the person and gender of every address visible in the
Hebrew (`־ךְ` / `־כֶם` / `־כֶן`), and vocalize the suffix where the unvocalized form is ambiguous.

## 1. Names

Vocalize at the first occurrence in each file; **always** where marked ★ (they read as Hebrew words unvocalized).

| Akkadian | Hebrew | Note |
|---|---|---|
| Maqlû (title; *maqlû* "burning", from *qalû*) | מַקְלוּ | In the colophons `מַקְלוּ`; as a common noun (RT 94 *ašar maqlâ taqlû*) `קְלִיָּה` (with *qalû* = `קָלָה`, §5). |
| Nuska | נוּסְכּוּ | Fire and lamp god, vizier of Enlil; the night's judge. |
| Girra | גִּירָה ★ | Always vocalized (`גירה` = "cud"); wisdom corpus form. Fire itself, as a god. |
| Ea; Asalluḫi; Marduk | אֵאָה; אֲסַלּוּחִי; מַרְדּוּךְ | Asalluḫi = Marduk as exorcist; note the identity at the first occurrence. Marduk: note `מְרֹדָךְ` (ירמיהו נ:ב). |
| Šamaš (god) / *šamšu* (the sun) | שַׁמַשׁ ★ / שֶׁמֶשׁ ★ | Both occur in Maqlû: **always vocalized** (§6.7). |
| Sîn | סִין ★ | |
| Anu; Antu | אָנוּ ★; אַנְתוּ | `אנו` = "we". |
| Enlil; Ninlil | אֶנְלִיל; נִינְלִיל | |
| Bēlet-ilī; Bēlet-ṣēri | בֵּלֶת־אִילִי; בֵּלֶת־צֵרִי | Bēlet-ṣēri "Lady of the steppe", scribe of the netherworld. |
| Ištar; Dumuzi; Nanaya; Kanisurra | אִשְׁתַּר; דּוּמוּזִי; נַנָּיָה; כַּנִיסוּרָּה | Kanisurra *bēlet kaššāpāti* (V 56): note נחום ג:ד `בַּעֲלַת כְּשָׁפִים`. |
| Nergal; Ereškigal; Lugalirra; Meslamtaea | נֶרְגַּל; אֶרֶשְׁכִּיגַל; לוּגַלִירָּה; מֶסְלַמְתַּאֵאָה | |
| Ninurta; Gula | נִינוּרְתָּה; גּוּלָה ★ | `גולה` = "exile". Gula as a star (IV 55) the same. |
| Ningirima; Ningišzida; Siris; Enbilulu; Nintinugga; Ninšiku | נִינְגִּירִימָה; נִינְגִּישְׁזִידָה; סִירִיס; אֶנְבִּילוּלוּ; נִינְתִּינוּגָּה; נִינְשִׁיכּוּ | |
| Tišpak; Uraš; Lugaledinna; Latarak; Muḫra; Papsukkal; Pālil; Ningirsu; Uru | תִּשְׁפַּךְ; אוּרַשׁ; לוּגַלְאֶדִינָּה; לָטָרַק; מוּחְרָה; פַּפְּסוּכַּל; פָּלִיל; נִינְגִּירְסוּ; אוּרוּ | |
| Manzât (the rainbow goddess) | מַנְזָאת | VI 158 / VII 1 *rittī manzât* "my hand is Manzât". |
| Nikkal; Nissaba; Šakkan; Nabû; Šulpaea; Šala(š) | נִיכַּל; נִיסַבָּה; שַׁכַּן ★; נָבוּ ★; שׁוּלְפַּאֵאָה; שָׁלַשׁ | Nissaba also = "flour" (VII 66 *ina nissaba elleti* "with pure Nissaba": keep the name, note "flour"). |
| Gilgameš | גִּלְגָּמֶשׁ | I 38, IV 50: the judge of the dead. |
| the Igigi; the Anunnaki | אִיגִיגִי; אֲנוּנָּכִּי | |
| the *apsû*; Eridu; Ekur; Esagil; Duranki | אַפְּסוּ; אֶרִידוּ; אֵכּוּר; אֵסַגִּיל; דּוּרַנְקִי | |
| the Sages | הַחֲכָמִים (*apkallu* = `חָכָם`) | *sebet apkallū šūt eridu* = `שִׁבְעַת הַחֲכָמִים שֶׁל אֶרִידוּ`; *apkallū ša apsî* = `חַכְמֵי הָאַפְּסוּ`; *apkal ilī* = `חֲכַם הָאֵלִים`. |
| the River (god) *Id* / *nāru* | הַנָּהָר (as a name, with a note at the first occurrence: the River-ordeal god); *nāru* (common) `נָהָר` | `id ellu` = `נָהָר טָהוֹר`. |
| *mušītu* (Night, personified) | הַלַּיְלָה | *ilū mušīti* = `אֵלֵי הַלַּיְלָה` ★ (`אלי` vocalized). *mūšu* (common) = `לַיְלָה`, *urru* = `יוֹם` (*mūša u urra* = `לַיְלָה וְיוֹמָם`). |
| Places: Zabban; Ur; Larsa; Agade; Subartu; Elam; Sutean; Gutean; Lullubean; Ḫanigalbat; Amurru | זַבָּן; אוּר ★; לַרְסָה; אַכַּד; סוּבַּרְתּוּ; עֵילָם (adj. `עֵילָמִי`/`עֵילָמִית`); סוּתִי/סוּתִית; גּוּתִי/גּוּתִית; לוּלּוּבִּי/לוּלּוּבִּית; חָנִיגַלְבַּת; אַמּוּרוּ | Elam: the biblical form (בראשית י:כב). |
| Rivers: Tigris; Euphrates; Baliḫ | חִדֶּקֶל; פְּרָת; בָּלִיחַ | |
| Stars (IV 52–60; VII 47–50): Nimru; Urgulû; Ereqqu; Zuqaqīpu; Šitaddaru; Ḫabaṣīrānu; Šukūdu; *lēʾu*; *gamlu* | נִמְרוּ; אוּרְגוּלּוּ; הָעֲגָלָה; הָעַקְרָב; שִׁתַּדַּרוּ; חַבַּצִירָנוּ; הַחֵץ; הַשּׁוֹר(?); הַמַּקֵּל | A common noun gets Hebrew (Ereqqu "the Wagon", Zuqaqīpu "the Scorpion", Šukūdu "the Arrow" = Sirius), a name is transliterated; the modern constellation in the apparatus. Šitaddaru = Orion: note `כְּסִיל` (איוב ט:ט, עמוס ה:ח) [equivalent]. |

## 2. The witch and her craft (the heart of the corpus)

### 2.1 The practitioners

| Akkadian | Hebrew | Reason |
|---|---|---|
| *kaššāpu* / *kaššāptu* ★ | מְכַשֵּׁף / מְכַשֵּׁפָה | [cognate] ↔ `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז), `מְכַשֵּׁף` (דברים יח:י). **The key comparison of the corpus.** "my warlock and my witch" = `מְכַשְּׁפִי וּמְכַשֵּׁפָתִי`. |
| *kišpū* ★; *kašāpu* (D *ukaššipanni*) | כְּשָׁפִים; כִּשֵּׁף (`כִּשְּׁפָה אוֹתִי`) | [cognate] ↔ `וּכְשָׁפֶיהָ` (מלכים ב ט:כב), `בְּרֹב כְּשָׁפַיִךְ` (ישעיהו מז:ט); also ישעיהו מז:יב, מיכה ה:יא, נחום ג:ד. *kaššāpūtu* (adj., "bewitched": *aklī kaššāpūti*) = `מְכֻשָּׁף`. |
| *ēpišu* / *ēpištu* ("the doer", the sorcerer) | עוֹשֶׂה / עוֹשָׂה (vocalize when both stand together) | *epēšu* used absolutely = "to do (sorcery)": `עָשָׂה` (`עָשְׂתָה לִי`). One verb for all *epēšu*. |
| *muštēpišu* / *muštēpištu* (Št participle: "the one who has it done") ★ | מְעַשֶּׂה / מְעַשָּׂה – **always vocalized** | Mishnaic `מְעַשֶּׂה` "one who causes another to do" (`גָּדוֹל הַמְעַשֶּׂה יוֹתֵר מִן הָעוֹשֶׂה`). Unvocalized `מעשה` = "deed". *ēpištī u muštēpištī* = `עוֹשָׂתִי וּמְעַשָּׂתִי` (the Akkadian chime kept). *uštēpiš* / *tušēpišī* = `עִשָּׂה` / `עִשִּׂית` (vocalized: "had (it) done"). |
| *sāḫiru* / *sāḫertu* (from *saḫāru* "to turn, go around") | מְסוֹבֵב / מְסוֹבֶבֶת | The "turner" of spells; *saḫāru* = `סוֹבֵב` throughout (II 199 `לֹא סוֹבַבְתִּי אוֹתָהּ וְהִיא סוֹבְבָה אוֹתִי`). Note at first occurrence. |
| *rāḫû* / *rāḫītu*, *raḫḫātu*; *reḫû* "inseminate" ★ | מְעַבֵּר / מְעַבֶּרֶת; עִבֵּר | `עִבֵּר` "impregnate" (איוב כא:י `שׁוֹרוֹ עִבַּר`). **Always vocalized** (`מעברי` = "my crossings"). VII 22 *arahhēka* = `מְעַבֵּר אֲנִי אוֹתְךָ`. |
| *elēnītu* | מַלְשִׁינָה | eBL "deceitful woman / denouncer"; note the uncertainty. |
| *nērtānītu*; *nērtu* | רוֹצַחַת; רֶצַח | |
| *bāʾirtu*, *bayyārtu* ("huntress") | צַיֶּדֶת | ↔ יחזקאל יג:יח `לְצוֹדֵד נְפָשׁוֹת` [equivalent]: the women who hunt souls. |
| *ḫayyāṭītu*; *dayyālītu*; *mūterribtu*; *muttalliktu* | מְרַגֶּלֶת; מְשׁוֹטֶטֶת; הַנִּכְנֶסֶת וְנִכְנֶסֶת; מִתְהַלֶּכֶת | *muttalliktu* (Gtn of *alāku*) = Hithpael `מִתְהַלֶּכֶת` (the stem's function). |
| *āšiptu* | אַשָּׁפִית | fem. of `אַשָּׁף` [cognate] (§3). |
| *eššebû* / *eššebūtu*; *naršindû* / *naršindatu*; *agugillu* / *agugiltu*; *mušlaḫḫu* / *mušlaḫḫatu* | אֶשֶּׁבּוּ / אֶשֶּׁבּוּתוּ; נַרְשִׁנְדּוּ / נַרְשִׁנְדָּתוּ; אַגּוּגִלּוּ / אַגּוּגִלְתּוּ; מוּשְׁלַחּוּ / מוּשְׁלַחָּתוּ | Transliterated: practitioner titles whose functions are only partly known; the note says what is known (*eššebû* an ecstatic, *mušlaḫḫu* a snake charmer: ↔ `קוֹל מְלַחֲשִׁים` (תהלים נח:ו), `לְבַעַל הַלָּשׁוֹן` (קהלת י:יא) [equivalent], in the apparatus). No `מִתְנַבֵּא` (would import 1 Sam 10), no `לוֹחֵשׁ` (reserved for *tû*). |
| *kurgarrû*; *qadištu*; *nadītu*; *kulmašītu*; *ištarītu*; *enu*, *entu* | כּוּרְגַּרָּה; קְדֵשָׁה; נָדִיתוּ; כּוּלְמַשִׁיתוּ; אִשְׁתַּרִית; אֶנְתוּ | the netherworld and everyday-voices corpora; *qadištu* [cognate] ↔ דברים כג:יח. |
| *qumqummatu*; *kuttimmatu*; *qurqurratu*; *kušāpātu* | קוּמְקוּמַּתוּ; כּוּתִּמַּתוּ; צוֹרֶפֶת(?); כּוּשָׁפָתוּ | Transliterate what is unclear; the note gives eBL's guesses. |
| *šābištu*; *lēqītu* (VI 54–55) | הָאוֹסֶפֶת; הַלּוֹקַחַת | *leqû* = `לָקַח` [cognate] (reserved). |

### 2.2 What the witch does (the sorcery nouns)

| Akkadian | Hebrew | Reason |
|---|---|---|
| *ipšu* | מַעֲשֶׂה (pl. `מַעֲשִׂים`) | From *epēšu* = `עָשָׂה`. |
| *epištu*, pl. *epšētu* ("deed, manipulation") | פְּעֻלָּה, `פְּעֻלּוֹת` | Kept apart from *ipšu* (VII 101 *ipšīki epšētīki epšēt ipšīki* = `מַעֲשַׂיִךְ, פְּעֻלּוֹתַיִךְ, פְּעֻלּוֹת מַעֲשַׂיִךְ`). |
| *ruḫû* | רִיר | "spittle" as a spell (UŠ₁₁, the logogram of *ruḫû*, is also "venom"); `רִיר` (שמואל א כא:יד, איוב ו:ו). A note at the first occurrence: the spell is spat; some derive it from *reḫû* "inseminate". |
| *ruʾtu*, *ruʾāti* (saliva) | רֹק | (איוב ז:יט; ישעיהו נ:ו). Kept apart from *ruḫû*. |
| *rusû* | כֶּבֶל | eBL "enchainment" (binding magic). |
| *upšāšû* | מְזִמּוֹת | (תהלים לז:ז `עֹשֶׂה מְזִמּוֹת`). *upšāšû lemnūti* = `מְזִמּוֹת רָעוֹת`. Not `תַּחְבּוּלוֹת` (the root חבל is *ḫabālu*, §2.4). |
| *upīšū* (VIII B+13, B+17: "sorcerous devices") | מַעֲשֵׂי־כְּשָׁפִים? → translator's choice, noted | |
| *bārtu* | מֶרֶד | |
| *amāt lemutti* | דְּבַר רָעָה | *amātu* = `דָּבָר`; *lemuttu* = `רָעָה`; *lemnu* = `רַע`. |
| *râmu* / *zīru* (love- / hate-magic) | אַהֲבָה / שִׂנְאָה | *râmu* = `אָהַב` (law corpus). |
| *zikurrudû* | זִיקוּרוּדָא | Transliterated ("cutting of the throat": magic that cuts off life); note. |
| *dibalû* | עִוּוּת דִּין | ↔ איוב ח:ג `הַאֵל יְעַוֵּת מִשְׁפָּט` [equivalent] (`מִשְׁפָּט` reserved for *šipṭu*). |
| *kadabbedû* | סְתִימַת פֶּה | ("seizing of the mouth", muteness). |
| *šurḫungû* | הַשְׁקָטַת חֵמָה | |
| *šabalbalû*; *ṣūd pānī* | שַׁבַּלְבַּלּוּ; סְחַרְחֹרֶת פָּנִים | |
| *šanê ṭēmi*; *ṭēma šunnû* | שִׁנּוּי טַעַם; שִׁנָּה אֶת טַעְמוֹ | **[cognate idiom]** ↔ שמואל א כא:יד `וַיְשַׁנּוֹ אֶת טַעְמוֹ` (David feigning madness), תהלים לד:א: both words and the sense ("madness") match. A deliberate exception to the flood corpus's *ṭēmu* = `דַּעַת` (§6.7), for this idiom only; elsewhere *ṭēmu* by sense. |
| *kipdu*; *kapādu* | מַחֲשָׁבָה; חָשַׁב | *ša ana lemutti ikpudūni* = `אֲשֶׁר לְרָעָה חָשְׁבוּ עָלַי` ↔ בראשית נ:כ `אַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` [equivalent]; ירמיהו יח:יח. |
| *riksu*; *rakāsu* | קֶשֶׁר; קָשַׁר | ↔ דברים יח:יא `חֹבֵר חָבֶר` [equivalent: binding] (apparatus only). *paṭīra rakāsu* (RT: set up an offering table) = `עָרַךְ` (by sense; a recorded split). |
| *kiṣru*; *kaṣāru* | צְרוֹר; צָרַר | *kiṣrīki kuṣṣurūti* = `צְרוֹרוֹתַיִךְ הַצְּרוּרִים`; *kiṣir libbi* "anger" (lit. "knot of the heart") = `צְרוֹר הַלֵּב`, explained in the note. |
| *kasû* "bind"; *kamû* "capture"; *ebēru* D (*ubbir*) | אָסַר; לָכַד; כָּפַת | |
| *patālu*; *pitiltu* | פָּתַל; פְּתִיל | [cognate] (בראשית ל:ח `נַפְתּוּלֵי … נִפְתַּלְתִּי`). |
| *našpartu* (message) | שְׁלוּחָה | (`שְׁלִיחוּת` is *šipirtu*, wisdom). *mār šipri* = `שָׁלִיחַ`. |
| *ḫabālu*; *ḫābilu*; *ḫablu* / *ḫabiltu* | חָבַל; מְחַבֵּל; חָבוּל / חֲבוּלָה | [cognate] (איוב לד:לא). *anāku lā aḫḫabbil* = `וַאֲנִי לֹא אֵחָבֵל`. |
| Traps and nets (II 162–180, III 156–160): *ḫuḫāru*; *šētu*; *šuškallu*; *gišparru*; *kītu* (reed mat); *kāpu* (rock wall); *pitiltu*; *pitiqtu* (brick course) | מְצוֹדָה; רֶשֶׁת; שְׂבָכָה; פַּח; מַחְצֶלֶת; כֵּף; פְּתִיל; נִדְבָּךְ | The net words of the wisdom corpus and Etana (one Hebrew per lemma since 2026-10-22; gated). *kāpu* ~ `וְכֵפִים` (איוב ל:ו) [cognate?]: note. |

### 2.3 The witch's acts on the victim (I 96–109, IV 13–73, VII 55–61)

*bunnannû* = `תֹּאַר` (↔ שמואל א כח:יד `מַה תָּאֳרוֹ`, the necromancy at En-dor) · *mašālu* D (*umaššilū*) = `הִמְשִׁיל` [cognate] (ישעיהו יד:י `אֵלֵינוּ נִמְשָׁלְתָּ`) · *lānu* = `גִּזְרָה` · *bāltu* = `גַּאֲוָה` · *nabnītu* = `יְצִיר` (changed 2026-10-23: *binûtu* = `מִבְנֶה` as in Gilgameš and Enūma eliš) · *gattu* = `קוֹמָה` · *lamassu* (of a person: his protective spirit, his "image") = `אֵלַת־מָגֵן` (wisdom; the note explains) · *ṣillu* = `צֵל` [cognate] (VI 55 the shadow taken from the wall; ↔ במדבר יד:ט `סָר צִלָּם`) · *paqādu* (hand over) = `הִפְקִיד` [cognate] · *aḫāzu* "marry, betroth" (*ana mīti iḫīrū*: *ḫâru* "choose a bride") — *ḫâru* = `אֵרַשׂ` (by sense; `אָרַשׂ` is *erēšu*'s false friend in the law corpus, so note it) · *nīš libbi* "sexual drive" = `נְשִׂיאַת לֵב` (Tablet I).

### 2.4 Verbs of the ceremony against her

| Akkadian | Hebrew | |
|---|---|---|
| *pašāru* (release, undo), N *ippašer*; *pāširu*; *pišertu* | הִתִּיר (N `הֻתַּר`); מַתִּיר; הַתָּרָה | **By meaning**: Hebrew `פָּשַׁר` does not mean "release"; Gilgameš's *pašāru* = `פָּשַׁר` is for dreams. The cognate is noted at the first occurrence: Aram. `מְפַשַּׁר חֶלְמִין` … `וּמְשָׁרֵא קִטְרִין` (דניאל ה:יב) "interpreter of dreams … who loosens knots". *šammi pišerti* = `צֶמַח הַהַתָּרָה`. |
| *paṭāru* | פָּטַר [cognate] | wisdom. |
| *ḫepû* (break) | שָׁבַר | *rikiski aḫeppe* = `אֶת קִשְׁרֵךְ אֶשְׁבֹּר`. |
| *târu* D; *turru* | הֵשִׁיב [cognate] | *turrat amāssa ana pîša* = `דְּבָרָהּ הוּשַׁב אֶל פִּיהָ`. `שׁוּב` only for *târu* (★ in the earlier corpora; no `שוב ושוב`, write `פעם אחר פעם`). |
| *nabalkutu* (turn over, back); Š | הִתְהַפֵּךְ; הָפַךְ | *kišpūša libbalkitū* = `כְּשָׁפֶיהָ יִתְהַפְּכוּ`. *saḫāpu* N (*dīnša lissaḫip*) = `יֵהָפֵךְ`. |
| *sapāḫu* | הֵפִיץ | (the legends-of-kings corpus: `הֵפִיץ` only for *sapāḫu*). |
| *ḫalāqu* D | אִבֵּד | *muḫalliq raggī* = `מְאַבֵּד הָרְשָׁעִים`. |
| *abātu* D (*muʾabbit*) | הָרַס | Gilgameš (`הורס חומת אבן`). |
| *kašādu* | הִשִּׂיג | *kāšid lemni u ayyābi* = `מַשִּׂיג רָע וְאוֹיֵב`. |
| *dâku* | הָרַג | law corpus (*iddâk* = `יֵהָרֵג`). |
| *mâtu* / *balāṭu*; *bulluṭu* | מֵת [cognate] / חָיָה; חִיָּה | **I 19, II 94, II 197:** `הִיא תָּמוּת וַאֲנִי אֶחְיֶה` ↔ שמות כב:יז `לֹא תְחַיֶּה` (the same D/Piel of "live"; *bulliṭanni* = `חַיֵּנִי`, תהלים קיט). |
| *parāsu* (cut off; decide); *purussû* | גָּזַר; גְּזֵרָה | One verb: *iptaras alaktu* `גָּזְרָה (אֶת) הַהֲלִיכָה`, *taprusī ittīya ilī* `גָּזַרְתְּ מֵעִמִּי אֶת אֵלִי`, *liprus ḫayyattakunu* `יִגְזֹר אֶת אֵימַתְכֶם`, *purussâya purus* `גְּזֹר אֶת גְּזֵרָתִי`. |
| *dīnu*; *diānu*; *dayyānu*; *bēl dīni* | דִּין; דָּן [cognate]; דַּיָּן; בַּעַל דִּין | law corpus; *bēl dīnīya* = `בַּעַל דִּינִי` (the Mishnaic idiom). *dīnī dīni* = `דּוּן אֶת דִּינִי`. |
| *ṭeḫû*; *qerēbu*; *sanāqu* | נִגַּשׁ; קָרַב [cognate]; הִגִּיעַ | (Gilgameš `ויגש`). |
| *epēšu* (sorcery) | עָשָׂה | §2.1. |
| *redû* (pursue) | רָדַף | (by sense; `רָדָה` is not its meaning here). |

## 3. The exorcist, purity and the rite

| Akkadian | Hebrew | |
|---|---|---|
| *āšipu*; *āšipūtu* | אַשָּׁף [cognate] (דניאל א:כ); אַשָּׁפוּת | *bēl āšipūti* = `אֲדוֹן הָאַשָּׁפוּת`. |
| *mašmaššu* | מְלַחֵשׁ | wisdom (↔ ישעיהו ג:ג, תהלים נח:ו [equivalent]). *mašmaš ilī* = `מְלַחֵשׁ הָאֵלִים`. |
| *šiptu* ★; *tû* ★; *tuduqqû* | קֶסֶם; לַחַשׁ; תּוּדוּקּוּ | §6.7 (settled 2026-10-21; Deut 18:10 `קֹסֵם קְסָמִים` in the apparatus at the first occurrence per file). *šipat balāṭi* = `קֶסֶם חַיִּים`; *bēlet šipti* = `בַּעֲלַת הַקֶּסֶם`. |
| *nadû šipta* "cast a spell" | הִשְׁלִיךְ קֶסֶם | (*nadû* = `הִשְׁלִיךְ`; false friend of `נִדָּה`). |
| *manû* (recite, lit. "count") | מָנָה [cognate] | RT *imannu* = `יִמְנֶה` (the note: "recite"). |
| *elēlu*, *ellu*; *ullulu*; *mullilu* | טָהַר, טָהוֹר; טִהֵר; מְטַהֵר | wisdom. |
| *ebēbu*; *ubbubu*; *ebbu* | נָקָה; נִקָּה; צַח | The verb as the wisdom corpus; the adjective *ebbu* = `צַח` as the netherworld corpus decided last (2026-10-22, Nergal and Ereškigal), so that *šamnu ellu šamnu ebbu šamnu namru* (VII 29) keeps three words: `שֶׁמֶן טָהוֹר, שֶׁמֶן צַח, שֶׁמֶן זוֹהֵר`. |
| *zakû* | זָכָה [cognate] | *ētelil ētebib azzaku* = `טָהַרְתִּי, נִקֵּיתִי, זַכּוֹתִי` ↔ ישעיהו א:טז `רַחֲצוּ הִזַּכּוּ`. |
| *qadāšu* D (*quddušu*); *qadištu* | מְקֻדָּשׁ, קִדֵּשׁ [cognate]; קְדֵשָׁה | *id ellu namru quddušu anāku* (III 61) = `נָהָר טָהוֹר, זוֹהֵר מְקֻדָּשׁ – אֲנִי` (Tablet III: *namru* is a second god, "the Bright One" = Šamaš, as III 69, 71 show). (The temple corpus's "no קדש" rule is for Sumerian *kug*.) |
| *mesû* (wash); *mīs pî*; *mīs qātī* | רָחַץ; רְחִיצַת פֶּה; רְחִיצַת יָדַיִם | ↔ `יִרְחֲצוּ אֶת יְדֵיהֶם` (דברים כא:ו), `אֶרְחַץ בְּנִקָּיוֹן כַּפָּי` (תהלים כו:ו) [equivalent]. |
| *salāḫu* (sprinkle) | הִזָּה | ↔ ויקרא יד:ז, טז:יד [equivalent]. |
| *pašāšu* (anoint) | מָשַׁח | (by sense; not cognate). *šamnu* = `שֶׁמֶן` [cognate]. |
| *nigsagilû* (the substitute); *dinānu*; *enû*, *ēnītu*; *maḫāru*, *māḫirtu* | תְּמוּרָה; בִּמְקוֹם (*dinānī* `בִּמְקוֹמִי`); הֶחֱלִיף, מַחֲלִיפָה; קִבֵּל, מְקַבֶּלֶת | ↔ ויקרא כז:י, טז:כב [equivalent]. *arnu* = `עָוֹן` [equivalent]; *zabālu* "bear" = `סָבַל` [cognate] (ישעיהו נג:יא `וַעֲוֹנֹתָם הוּא יִסְבֹּל`). *miḫru* (an ominous encounter) = `פֶּגַע` (`וָפֶגַע`, קהלת ט:יא). |
| *nignakku*; *qutrinnu*; *qutāru* | מַקְטֶרֶת; קְטֹרֶת; קְטֹרֶת (vocalize) | |
| *kidinnu* | אוֹת־הֲגָנָה | (protective emblem). |
| *zisurrû* | זִיסוּרָּא | Transliterated (a circle of flour). |
| KA.INIM.MA (the rubric) ★ | נֻסַּח | §6. |
| *maṣṣartu* (watch) | נְצִירָה | Gilgameš / law. The three watches of I 30: *barārītu*, *qablītu*, *namārītu* = `הָעַרְבִּית, הַתִּיכוֹנָה, הַשַּׁחֲרִית` ↔ שופטים ז:יט `הָאַשְׁמֹרֶת הַתִּיכוֹנָה` [equivalent]. |
| *nīš DN … lū tamâtunu* (V 171–174) | `בְּנֶפֶשׁ DN – הֻשְׁבַּעְתֶּם` | *tamû* D = `הִשְׁבִּיעַ` (everyday corpus); *nīšu* "life" = `נֶפֶשׁ`. *māmītu* = `שְׁבוּעָה` (wisdom). |
| *ilu* "my god" / *ištaru* "my goddess" | אֵלִי ★ / אֵלָתִי ★ | wisdom (always vocalized). *il āli* / *ištar āli* = `אֵל הָעִיר` / `אֵלַת הָעִיר`. |
| *annanna mār annanna ša ilšu annanna ištaršu annannītu* | פְּלוֹנִי בֶּן פְּלוֹנִי, שֶׁאֵלוֹ פְּלוֹנִי וְאֵלָתוֹ פְּלוֹנִית | [equivalent] ↔ רות ד:א `פְּלֹנִי אַלְמֹנִי`. |

## 4. Body, figurines and materials

| Akkadian | Hebrew | |
|---|---|---|
| *ṣalmu* ★ | צֶלֶם | [cognate] ↔ בראשית א:כו–כז, ה:ג; עמוס ה:כו. **One word for every figurine.** `דְּמוּת` never (★: the Gen 1:26 pair stays in the apparatus). *tamšīlu* = `תַּבְנִית` (creation corpus). |
| *lipû* (tallow) ★ | חֵלֶב – **always vocalized** (`חלב` = "milk") | [equivalent] (ויקרא ג). |
| *iškūru* (wax) | דּוֹנַג | ↔ תהלים סח:ג `כְּהִמֵּס דּוֹנַג מִפְּנֵי אֵשׁ` [equivalent], כב:טו. |
| *ṭīdu* ★ | טִיט | [cognate] (reserved). *karāṣu* (pinch off clay) = `קָרַץ` [cognate] ↔ איוב לג:ו `מֵחֹמֶר קֹרַצְתִּי`. |
| *līšu* (dough); *kupsu* (sesame pomace); *ittû* (bitumen); *gaṣṣu* (gypsum); *siparru* (bronze); *erēnu*; *bīnu*; *ēru* (cornel); *maštakal*; *ḫašû*; *kukru*; *nuḫurtu*; *terinnatu*; *sassatu*; *lardu*; *gišimmaru*; *burāšu* | בָּצֵק; גֶּפֶת; חֵמָר; גִּיר; נְחֹשֶׁת; אֶרֶז; אֵשֶׁל; אֵרוּ (note: cornel); מַשְׁתַּכַּל (note: soapwort); חַשּׁוּ (note: thyme?); כּוּכְּרוּ (note: an aromatic); נוּחוּרְתּוּ (note: asafoetida); אִצְטְרֻבָּל; חָצִיר; נֵרְדְּ [cognate] (שיר השירים א:יב); תָּמָר; בְּרוֹשׁ [cognate] | *ittû* = `חֵמָר` (§6.7: bitumen *iṭṭû* / ESIR = `חֵמָר`); *bīnu* = `אֵשֶׁל` (wisdom); *burāšu* = `בְּרוֹשׁ` (§6.7). Unidentified plants transliterated with eBL's guess in the note. |
| *uḫūlu* (alkali, potash) | בֹּרִית | ↔ ירמיהו ב:כב, מלאכי ג:ב [equivalent]. |
| *ṭābtu* (salt); *kirbān ṭābti* | מֶלַח; גּוּשׁ מֶלַח | |
| *kibrītu* ★ | גָּפְרִית | [cognate] ↔ בראשית יט:כד, דברים כט:כב, איוב יח:טו, תהלים יא:ו. |
| *šārtu* (hair); *sissiktu* (hem); *eper šēpī* (dust of the feet); *ḫuṣābu* (leavings, chips); *ḫimmātu* (sweepings) | שֵׂעָר; כָּנָף (↔ שמואל א כד:ה `כְּנַף הַמְּעִיל` [equivalent]); עֲפַר רַגְלַי (*eperu* = `עָפָר` ★); שְׁיָרִים; אַשְׁפָּה | *sissikta ṣabātu* "seize the hem" (II 27–30) = `אָחַז בִּכְנַף` ↔ זכריה ח:כג [equivalent]. |
| *zumru*; *pagru*; *šīru*; *šerʾānu*; *minâtu*; *mešrêtu* | גּוּף; גְּוִיָּה (of the living: Gilgameš) / `פֶּגֶר` [cognate] where it is a corpse (VIII B+4, ↔ בראשית טו:יא); בָּשָׂר; גִּיד; מִדּוֹת; אֵבָרִים | |
| *libbu*; *kabattu* ★; *kalâtu*; *rēš libbi* | לֵב; כָּבֵד (vocalized); כְּלָיוֹת [cognate]; רֹאשׁ הַלֵּב | |
| *qātu*; *rittu*; *idu*; *aḫu* (arm) | יָד; כַּף; יָד (*idāya* "my arms"); זְרוֹעַ | *rittum-ma rittu* = `כַּף, הוֹ כַּף`. |
| *muḫḫu* ("skull, top"); *ana muḫḫīša u lānīša* | קָדְקֹד; `עַל קָדְקֳדָהּ וְעַל גִּזְרָתָהּ` | ↔ תהלים ז:יז `וְעַל קָדְקֳדוֹ חֲמָסוֹ יֵרֵד` [equivalent]: the spell returns on its maker. |
| *eṭemmu* ★; *mītu*; *qabru*; *kimaḫḫu*; *gulgullu* | אִט – **always vocalized**, pl. `אִטִּים` [cognate] (ישעיהו יט:ג, beside `אֹבוֹת` and `יִדְּעֹנִים`); מֵת [cognate]; קֶבֶר [cognate]; כּוּךְ; גֻּלְגֹּלֶת [cognate] | |
| *erṣetu* (netherworld); *arallû*; *qaqqaru* | הָאָרֶץ (never `שְׁאוֹל` ★); אַרַלּוּ; קַרְקַע [cognate] | VII 142 *pite qaqqaru u muḫur arnīya* ↔ בראשית ד:יא [divergence]. |

## 5. Fire and burning (Maqlû = "Burning")

| Akkadian | Hebrew | |
|---|---|---|
| *qamû* ("burn": the commonest) | בִּעֵר (`בַּעֵר!`; *qāmû* = `מְבַעֵר`) | ↔ שמות כב:ה, דברים יג:ו `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` [equivalent]. |
| *qalû* ("roast, scorch"); *qālû*; *maqlû* | קָלָה [cognate] (law corpus; ירמיהו כט:כב `אֲשֶׁר קָלָם מֶלֶךְ בָּבֶל בָּאֵשׁ`); קוֹלֶה; קְלִיָּה | |
| *šarāpu*; *šurpu* ★ | שָׂרַף [cognate]; שְׂרֵפָה [cognate] | `שׂרף` **only** for *šarāpu* / *šurpu* (II 71 *aqallīšunūti ašarrapšunūti* = `קוֹלֶה אֲנִי אוֹתָם, שׂוֹרֵף אֲנִי אוֹתָם`). |
| *ḫamāṭu* | לָהַט | *zumurki liḫmuṭ* = `יִלְהַט אֶת גּוּפֵךְ`. |
| *bašālu* (*bišlī*); *qâdu* (*qidê*) | בִּשֵּׁל [cognate]; קָדַח [cognate] | III 188 = IV 1 *bišlī bišlī qidê qidê* = `בַּשְּׁלִי, בַּשְּׁלִי, קִדְחִי, קִדְחִי!` ↔ דברים לב:כב `כִּי אֵשׁ קָדְחָה בְאַפִּי`. |
| *napāḫu* (kindle; of the sun: rise) | נָפַח [cognate] / of the sun `זָרַח` (by sense) | |
| *išātu*; *nūru*; *dipāru*; *gizillû*; *tinūru*; *utūnu*; *kinūnu*; *nappaḫu*; *ḫuluppaqqu* | אֵשׁ [cognate]; אוֹר; לַפִּיד; אֲבוּקָה; תַּנּוּר [cognate]; אַתּוּן [cognate] (דניאל ג:ו `אַתּוּן נוּרָא יָקִדְתָּא`); כִּירָה; מַפּוּחַ; חוּלוּפַּקּוּ (a burning vessel; note) | |
| *qutru* | קִיטוֹר | [cognate] ↔ בראשית יט:כח `עָלָה קִיטֹר הָאָרֶץ כְּקִיטֹר הַכִּבְשָׁן`. |
| *laʾmu*; *tumru* | גַּחֶלֶת; רֶמֶץ | ↔ ישעיהו מז:יד `אֵין גַּחֶלֶת לַחְמָם` (Babylon's sorceries in the fire) [equivalent]. |
| *ikkibu* (V 74 *ikkib šamê*) | תּוֹעֵבָה | wisdom (gated). |
| *bullû* (extinguish); *nâḫu* D (quench, calm); *pašāḫu* | כִּבָּה; הֵנִיחַ [cognate נוח]; הִרְגִּיעַ | |
| *ḫâlu*; *zâbu*; *natāku* | נָמַס; זָב [cognate]; נִתַּךְ [cognate] | ★ refrain `הִמַּסּוּ, זוּבוּ וְהִנָּתְכוּ` ↔ יחזקאל כב:כ–כב (melting in the furnace), תהלים סח:ג. |
| Girra's four titles (IV 8 = 75, 105–106 = 121–122): *qāmû qālû kāsû kāšidu ša kaššāpāti* | `מְבַעֵר, קוֹלֶה, אוֹסֵר, מַשִּׂיג הַמְּכַשְּׁפוֹת` | one fixed string (Tablet IV). |
| Girra's epithets: *āriru*; *ezzu*; *qardu* / *qurādu*; *šarḫu*; *gašru*; *rašubbu*; *allallû*; *gitmālu* | הַיּוֹקֵד; הַזּוֹעֵם; הַגִּבּוֹר; הַנֶּהְדָּר; הָעַז; הַנּוֹרָא; הָאַדִּיר; הַשָּׁלֵם? → `הַמֻּשְׁלָם` | `שלם` is gated (§8): *gitmālu* = `הַמֻּשְׁלָם`. *bukru* = `בְּכוֹר` (wisdom; the note: "offspring", §6.7 false friend); *ilittu* = `יְלִיד` [cognate]; *mār* = `בֶּן`. |

## 6. Formulas and refrains (★ = checked by regex)

| Akkadian | Hebrew |
|---|---|
| ÉN at the head of an incantation ★ | `קֶסֶם.` as the first word of the line (`קֶסֶם. צָעַקְתִּי אֲלֵיכֶם, אֵלֵי הַלַּיְלָה,`: *šasû* = `צָעַק`, Tablet I). In the Ritual Tablet, ÉN + incipit = `(אֶת) הַקֶּסֶם "…"` (the incipit quoted in the Hebrew of its incantation). |
| TU₆ ÉN at the end ★ | ` – לַחַשׁ, קֶסֶם.` (the last words of the line). A bare closing ÉN ★ = ` – קֶסֶם.`; `(te) ÉN` = ` – קֶסֶם.` with the *te* in the apparatus. É.NU.RU (VII 177) in the apparatus. |
| KA.INIM.MA UŠ₁₁.BUR₂.RU.DA(.KAM) ★ + material | `נֻסַּח לְהַתָּרַת רִיר: צֶלֶם …` (UŠ₁₁ is the logogram of *ruḫû* = `רִיר`; the note: "the wording for undoing witchcraft"). `ṣalam X ša Y ballu` = `צֶלֶם X הַבָּלוּל בְּ־Y` (*balālu* = `בָּלַל` [cognate]). |
| *ina qibīt (iqbû) DN* | `בְּאִמְרַת DN` / `בָּאִמְרָה אֲשֶׁר אָמַר DN` (*qibītu* = `אִמְרָה`, wisdom). *ina amāt DN* = `בִּדְבַר DN`. |
| *ina qibīt ea šamaš u marduk u rubāti bēlet-ilī* | `בְּאִמְרַת אֵאָה, שַׁמַשׁ וּמַרְדּוּךְ, וְהַשָּׂרָה ★ בֵּלֶת־אִילִי` (*rubû* / *rubātu* = `שַׂר` / `שָׂרָה`; `שרה` always vocalized). |
| *šī limūt-ma anāku lubluṭ* | `הִיא תָּמוּת, וַאֲנִי אֶחְיֶה.` (pl. `הֵם יָמוּתוּ, וַאֲנִי אֶחְיֶה`) |
| *kaššāpīya u kaššāptīya* | `מְכַשְּׁפִי וּמְכַשֵּׁפָתִי` (also *kaššāpī u kaššāptī*); *kaššāpi u kaššāpti* = `מְכַשֵּׁף וּמְכַשֵּׁפָה` |
| *kišpī ruḫê rusê upšāšê lemnūti* | `כְּשָׁפִים, רִיר, כֶּבֶל, מְזִמּוֹת רָעוֹת` |
| *ipšu bārtu amāt lemutti (râmu zīru)* | `מַעֲשֶׂה, מֶרֶד, דְּבַר רָעָה (, אַהֲבָה, שִׂנְאָה)` |
| *lā iṭeḫḫû lā iqarribū (yâši)* | `לֹא יִגְּשׁוּ, לֹא יִקְרְבוּ (אֶל עַצְמִי)` – *yâši* / *kâši* / *kâšunu* (emphatic) = `עַצְמִי` / `עַצְמֵךְ` / `עַצְמְכֶם` with the verb's preposition (`אֵלַי … אֶל עַצְמִי`, `עָלַי עַצְמִי`, `אוֹתָךְ עַצְמֵךְ`). |
| *ḫūlā zūbā u itattukā* | `הִמַּסּוּ, זוּבוּ וְהִנָּתְכוּ!` (indicative *iḫūlū izūbū u ittattukū* = `נָמַסּוּ, זָבוּ וְנִתְּכוּ`) |
| *quturkunu lītelli šamê* | `קִיטוֹרְכֶם יַעֲלֶה הַשָּׁמַיְמָה` |
| *ana muḫḫīša u lānīša lillikū* | `יֵלְכוּ עַל קָדְקֳדָהּ וְעַל גִּזְרָתָהּ` |
| *dīnša lissaḫip-ma dēnī līšir* | `דִּינָהּ יֵהָפֵךְ, וְדִינִי יִישַׁר` (*ešēru* = `יָשַׁר` [cognate], gated) |
| *mimma mala tēpušī … utār ana šāri* | `כָּל אֲשֶׁר עָשִׂית … אָשִׁיב לָרוּחַ` (*šāru* = `רוּחַ`, *meḫû* = `סוּפָה`) |
| *attimannu kaššāptu ša …* | `מִי אַתְּ, מְכַשֵּׁפָה, אֲשֶׁר …`; *attamannu … attimannu* = `מִי אַתָּה … מִי אַתְּ` |
| *ē kaššāptīya elēnītīya* | `הוֹי מְכַשֵּׁפָתִי, מַלְשִׁינָתִי` |
| *tēpušāni tušēpišāni girra lipšur* (IV 13–67, abbreviated `tē(…)` in the edition) | `עֲשִׂיתֶם לִי, עִשִּׂיתֶם ★ לִי – גִּירָה יַתִּיר!` – where the edition writes the refrain in parentheses (abbreviated on the tablet) the Hebrew writes it in full **without** brackets and the apparatus says it is abbreviated. |
| *narbîka lušāpi dalīlīka ludlul* | `אֶת גְּדֻלָּתְךָ אֲגַלֶּה, אֶת הִלּוּלֶיךָ אֲהַלֵּל` (wisdom) |
| Colophon *DUB n.KAM maqlû* | `הַלּוּחַ הָרִאשׁוֹן / הַשֵּׁנִי … שֶׁל מַקְלוּ.` (+ the variant incipit-title in the apparatus); VIII *ZAG.TIL.LA.BI.ŠE₃* = `– שָׁלֵם.`; RT *ṭuppi nēpešī ša maqlû* = `לוּחַ הַטֶּקֶס שֶׁל מַקְלוּ` |
| catch-line (the next tablet's first line, at the end of a tablet) | the Hebrew of that first line exactly (the next translator's line: §9 fixes the shared ones). |

## 7. Grammar conventions

- Present-future of the ritual action (the speaker's acts: *aqallu*, *ašarrap*, *usappaḫ*) = participle with the pronoun:
  `קוֹלֶה אֲנִי`, `מֵפִיץ אֲנִי`. Perfect (*ētelil*, *attapaḫ*) = past (`טָהַרְתִּי`, `הִצַּתִּי`). Precative = jussive
  (`יְבַעֵר`, `יִגְזֹר`). Imperative to the witch (fem.): vocalize where needed (`בַּשְּׁלִי`).
- Ventive "to me / against me" (*-nim*, *-am*, *-ni*) with sorcery verbs = `לִי` (`עָשְׂתָה לִי`), with motion verbs `אֵלַי`.
- *-ma* by sense (guidelines §6.3).
- Bracket the Hebrew where N is bracketed (the restoration is the editor's); `[…]` for lost text; a line that is only
  `...` = `> …`.

## 8. Reserved words and traps (checked by `maqlu_tools.py verify`)

- **Never** (apparatus only): `אֱלֹהִים` / `אֱלוֹהַּ`; `שָׂטָן`, `מַלְאָךְ`, `עוֹלָם`; `שְׁאוֹל`; `אוֹב`, `יִדְּעֹנִי`,
  `מְעוֹנֵן`, `תְּרָפִים` (Deut 18:10–11 and 1 Sam 28 words with no Akkadian counterpart); `דְּמוּת`; `עֲזָאזֵל`, `שָׂעִיר`;
  Num 5's `מָרִים` / `מְאָרְרִים` / `סוֹטָה`.
- **Only for their source word:** כשף ★ (*kašāpu* family); `קֶסֶם` (*šiptu*); `לַחַשׁ` / `מְלַחֵשׁ` (*tû* / *mašmaššu*);
  `אַשָּׁף` (*āšipu*); `שְׁבוּעָה` / `הִשְׁבִּיעַ` (*māmītu*, *nīšu*, *tamû*); `שׂרף` (*šarāpu* / *šurpu*); `צֶלֶם` (*ṣalmu*);
  `גָּפְרִית` (*kibrītu*); `טִיט` (*ṭīdu*); `עָפָר` (*eperu*); `טוֹב` (*ṭābu*); `תְּמוּרָה` (*nigsagilû* / *pūḫu*); `כפר`
  (*kuppuru*); `נחש` (a snake word; never "divination"); `חבר` (*tappû*); ארר (*arāru*); `שֵׁד` never for a demon
  (`שדה` needs *ṣēru* / *eqlu*, `שדי` *tulû*).
- **Always vocalized** (TRAPS): `אֵלִי`, `אֵלָתִי`, `אֵלָה`, `אֵלֵי` (gods of); `גִּירָה`; `אָנוּ`; `סִין`; `שַׁמַשׁ` /
  `שֶׁמֶשׁ`; `אוּר`; `גּוּלָה`; `אַלּוּ`; `גַּלּוּ` (*gallû*; unvocalized "they exiled"); `אִט` / `אִטִּים`; `חֵלֶב`;
  `מְעַבֵּר` / `מְעַבֶּרֶת`; `מְעַשֶּׂה` / `מְעַשָּׂה`; `הַשָּׂרָה`; `רֵעַ`; `שַׁכַּן`; `נָבוּ`.

## 9. Fixed lines (repeated across Tablets I–VII; fixed before the parallel drafting)

The coordinator's Hebrew for every line that recurs in another tablet of I–VII (identical or near-identical
normalizations, `maqlu_tools.py pars`), **unvocalized and plene** like every draft (★), with only the always-vocalized
words and first-occurrence names vocalized; the normalization column is eBL's N of each line. **Copy it exactly** (brackets follow your own line's N; niqqud and punctuation are
not compared). A deviation needs `[סטייה מן הקבוע: <reason>]` in the entry's apparatus, and a proposal in `project.md`.
Lines shared only within one tablet are that translator's to keep identical. Tablets VIII and RT copy from the drafted
files (`pars`, `incipits`).

| Lines | Normalization | Hebrew |
|---|---|---|
| I 15 | ēpuš ṣalam kaššāpīya u kaššāptīya | `עשיתי צלם מְכַשְּׁפִי ומכשפתי,` |
| I 75 | ṣalmū kaššāpīya u kaššāptīya | `צלמי מכשפי ומכשפתי,` |
| II 39; III 70 | ša kaššāpīya u kaššāptīya | `של מכשפי ומכשפתי,` |
| VII 154 | annû ša kaššāpīya u kaššāptīya | `זה – של מכשפי ומכשפתי:` |
| I 16; II 40 | ša ēpišīya u muštēpištīya | `של עושי ומְעַשָּׂתִי,` |
| I 76 | ṣalmū ēpišīya u muštēpištīya | `צלמי עושי ומְעַשָּׂתִי,` |
| I 77 | ṣalmū sāhirīya u sāhertīya | `צלמי מְסוֹבְבִי וּמְסוֹבַבְתִּי,` |
| II 41 | ša sāhirīya u sāhertīya | `של מסובבי ומסובבתי,` |
| I 78 | ṣalmū rāhîya u rāhītīya | `צלמי מְעַבְּרִי וּמְעַבַּרְתִּי,` |
| II 42 | ša rāhîya u rāhītīya | `של מְעַבְּרִי וּמְעַבַּרְתִּי,` |
| I 79 | ṣalmū bēl ikkīya u bēlet ikkīya | `צלמי בעל זעפי ובעלת זעפי,` |
| II 43 | ša bēl ikkīya u bēlet ikkīya | `של בעל זעפי ובעלת זעפי,` |
| I 80 | ṣalmū bēl ṣerrīya u bēlet ṣerrīya | `צלמי בעל משטמתי ובעלת משטמתי,` |
| II 44 | ša bēl ṣerrīya u bēlet ṣerrīya | `של בעל משטמתי ובעלת משטמתי,` |
| I 81 | ṣalmū bēl rīdīya u bēlet rīdīya | `צלמי בעל רדיפתי ובעלת רדיפתי,` |
| II 45 | ša bēl rīdīya u bēlet rīdīya | `של בעל רדיפתי ובעלת רדיפתי,` |
| I 82 | ṣalmū bēl dīnīya u bēlet dīnīya | `צלמי בעל דיני ובעלת דיני,` |
| II 46 | ša bēl dīnīya u bēlet dīnīya | `של בעל דיני ובעלת דיני,` |
| I 83 | ṣalm[ū] bēl amātīya u bēlet amātīya | `צלמ[י] בעל דבריי ובעלת דבריי,` |
| II 47 | ša bēl amātīya u bēlet amātīya | `של בעל דבריי ובעלת דבריי,` |
| I 84 | ṣalmū bēl dabābīya u bēlet dabābīya | `צלמי בעל ריבי ובעלת ריבי,` |
| II 48 | ša bēl dabābīya u bēlet dabābīya | `של בעל ריבי ובעלת ריבי,` |
| I 85 | ṣalm[ū] bēl egerrêya u bēlet egerrêya | `צלמ[י] בעל קול־מקרי ובעלת קול־מקרי,` |
| II 49 | ša bēl egerrêya u bēlet egerrêya | `של בעל קול־מקרי ובעלת קול־מקרי,` |
| I 86 | ṣalmū bēl lemuttīya u bēlet lemuttīya | `צלמי בעל רעתי ובעלת רעתי,` |
| II 50 | ša bēl lemuttīya u bēlet lemuttīya | `של בעל רעתי ובעלת רעתי,` |
| I 19 | šī limūt-ma anāku lubluṭ | `היא תמות, ואני אחיה.` |
| II 94 | šunu limūtū-ma anāku lubluṭ | `הם ימותו, ואני אחיה,` |
| II 197; VI 150 | kaššāpta lidūkū-ma anāku lubluṭ | `את המכשפה יהרגו, ואני אחיה.` |
| I 55 | idî šipassu ša apkal ilī marduk | `השליכי את קסמו של חכם האלים, מַרְדּוּךְ.` |
| VI 77 | nadât šipassu ša apkal ilī mard[uk EN₂] | `מושלך קסמו של חכם האלים, מר[דוך – קסם.]` |
| I 88 | ša kišpī ruhê rusî upšāšê lemnūti | `אשר כשפים, ריר, כבל, מזימות רעות,` |
| VI 63 | kišpūša ruhûša rusûša upšāšûša lemnūti | `כן כשפיה, רירה, כבלה, מזימותיה הרעות` |
| VII 52a | kišpī ruhû rusû up[šāšû lemnūti] | `כשפים, ריר, כבל, מז[ימות רעות]` |
| I 89; IV 10 | ipšu bārtu amāt lemutti râmu zīru | `מעשה, מרד, דבר רעה, אהבה, שנאה,` |
| I 90; IV 11 | dibalâ zikurudâ kadabbedâ šurhungâ | `עיוות דין, זִיקוּרוּדָא, סתימת פה, השקטת חמה,` |
| I 91 | šabalbalê ṣūd pānī u šanê ṭēmu | `שַׁבַּלְבַּלּוּ, סחרחורת פנים ושינוי טעם` |
| IV 12 | šabalbalâ ṣūd pānī u šanê ṭēmu | `שַׁבַּלְבַּלּוּ, סחרחורת פנים ושינוי טעם` |
| I 111; II 144 | muhalliq raggī zēr kaššāpi u kaššāpti | `מאבד הרשעים, זרע מכשף ומכשפה,` |
| I 112; II 144a | muʾabbit lemnūti attā-ma | `הורס הרעים – אתה הוא.` |
| I 113a | ina ūmu annê ina d[īn]īya izizzammu | `ביום הזה, בד[י]ני עמוד לי!` |
| II 145 | ina ūmi annî ina dīnīya izizzam-ma | `ביום הזה, בדיני עמוד לי,` |
| I 114; II 24; II 108; II 131 | dīnī dīni purussâya purus / dēnī dīni purussâya purus | `דון את דיני, גזור את גזרתי!` |
| I 115; II 15; II 109; II 132 | qumu kaššāpī u kaššāptī / qumi kaššāpī u kaššāptī | `בער את מכשפי ומכשפתי,` |
| II 110; IV 140 | girra qumu kaššāpī u kaššāptī / girra qumi kaššāpī u kaššāptī | `גִּירָה, בער את מכשפי ומכשפתי,` |
| II 111; IV 141 | girra quli kaššāpī u kaššāptī | `גִּירָה, קלה את מכשפי ומכשפתי,` |
| I 116; II 133 | akul ayyābīya aruh lemnūtīya | `אכול את אויביי, כלה את מרעיי!` |
| I 139a | [ēpiš kiš]p[ī lemn]ūti ruhê lā ṭābūti | `[עושי כש]פ[ים רע]ים, ריר לא טוב,` |
| II 117 | ēpiš kišpī lemnūti u ruhê lā ṭābūti | `עושי כשפים רעים וריר לא טוב,` |
| I 139b | [ša ana lemutti] ikpudūn[i] yâši | `[אשר לרעה] חשבו [עליי] עצמי:` |
| II 118 | ša ana lemutti ikpudūni yâši | `אשר לרעה חשבו עליי עצמי:` |
| I 140 | hūlā zūbā u itattukā | `המסו, זובו והנתכו!` |
| V 145 | EN₂ hūlā zūbā u ita[t]tukā | `קסם. המסו, זובו והנת[כ]ו!` |
| I 141; V 146 | quturkunu lītelli šamê | `קיטורכם יעלה השמימה,` |
| I 142 | laʾmīkunu liballi šamši | `את גחלתכם תכבה הַשֶּׁמֶשׁ,` |
| V 147 | laʾmēkunu liballi šamšu | `את גחלתכם תכבה הַשֶּׁמֶשׁ,` |
| V 148 | liprus hayyattakunu mār ea mašmaššu | `יגזור את אימתכם בן אֵאָה, המלחש.` |
| I 143 | liprus hayyattakunu mār ea mašmaššu TU₆ EN₂ | `יגזור את אימתכם בן אאה, המלחש – לחש, קסם.` |
| I 144 | EN₂ nuska šurbû mālik ilī rabûti | `קסם. נוּסְכּוּ הנשגב, יועץ האלים הגדולים.` |
| II 1 | EN₂ nuska šurbû mālik ilī rabû[ti] | `קסם. נוּסְכּוּ הנשגב, יועץ האלים הגדו[לים],` |
| II 9 | ina balīka ul iššakkan naptanu ina ekur | `בלעדיך לא תיערך סעודה באֵכּוּר,` |
| VI 120 | ina balīki ul iššakkan naptan ina ekur | `בלעדייך לא תיערך סעודה באכור,` |
| II 18 | KA.INIM.MA U[Š₁₁.BUR₂.R]U.DA ṣalam lipî | `נוסח להתרת ריר: צלם חֵלֶב.` |
| II 76 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam siparri kibrīti | `נוסח להתרת ריר: צלם נחושת, גפרית.` |
| II 104 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam siparri | `נוסח להתרת ריר: צלם נחושת.` |
| II 126 | [KA.INI]M.MA UŠ₁₁.BUR₂.RU.DA ṣalam līši | `[נוס]ח להתרת ריר: צלם בצק.` |
| II 135 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam ṭīdi | `נוסח להתרת ריר: צלם טיט.` |
| II 149 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam ittî | `נוסח להתרת ריר: צלם חמר.` |
| II 160 | KA.INIM.MA U[Š₁₁.BUR₂.RU.DA] ṣalam kupsi | `נוסח לה[תרת ריר]: צלם גפת.` |
| III 38a | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA.KAM₂ ṣalam lipî himmāti | `נוסח להתרת ריר: צלם חֵלֶב (ו)אשפה.` |
| III 60a | [KA.INIM.M]A UŠ₁₁.BUR₂.RU.DA ṣalam iškūri | `[נוס]ח להתרת ריר: צלם דונג.` |
| II 182 | KA.IN[IM.MA] UŠ₁₁.BUR₂.RU.DA ṣalam ittî ša gaṣṣa ballu | `נוס[ח] להתרת ריר: צלם חמר הבלול בגיר.` |
| II 204 | KA.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam ṭīdi ša lipâ ballu | `נוסח להתרת ריר: צלם טיט הבלול בחֵלֶב.` |
| III 87a | [K]A.INIM.MA UŠ₁₁.BUR₂.RU.DA ṣalam ittî ša kibrīta ballu | `[נ]וסח להתרת ריר: צלם חמר הבלול בגפרית.` |
| II 33 | iṣbat īnīya nāṭilāti | `אחזה את עיניי הרואות,` |
| III 93 | aṣbat īnīki nāṭilāti | `אחזתי את עינייך הרואות,` |
| II 34 | iṣbat šēpīya allakāti | `אחזה את רגליי ההולכות,` |
| III 94 | aṣbat šēpīki allakāti | `אחזתי את רגלייך ההולכות,` |
| II 35 | iṣbat birkīya ebberēti | `אחזה את ברכיי העוברות,` |
| III 95 | aṣbat birkīki ebberēti | `אחזתי את ברכייך העוברות,` |
| II 36 | iṣbat ahīya muttabbilāti | `אחזה את זרועותיי הנושאות.` |
| III 96 | aṣbat ahīki muttabbilāti | `אחזתי את זרועותייך הנושאות.` |
| II 105 | EN₂ girra āriru mār ani qardu | `קסם. גִּירָה היוקד, בן אָנוּ הגיבור,` |
| III 179 | u girra āriru mār ani qardu | `וְגִירָה היוקד, בן אָנוּ הגיבור.` |
| IV 79 | u girra āriru mār ani qardu TU₆ EN₂ | `וְגִירָה היוקד, בן אָנוּ הגיבור – לחש, קסם.` |
| II 170; VII 18 | anāku ina qibīt marduk bēl nubatti | `אני – באמרת מַרְדּוּךְ, אדון טקסי הערב,` |
| II 171; VII 19 | u asalluhi bēl āšipūti | `ואֲסַלּוּחִי, אדון האשפות –` |
| VI 57 | [asallu]hi bēl āšipūti | `[אסלו]חי, אדון האשפות,` |
| II 218 | girra ezzu zumurki lihmuṭ | `גִּירָה הזועם ילהט את גופך.` |
| III 30 | girra ezzu zumurki lihmuṭ TU₆ EN₂ | `גִּירָה הזועם ילהט את גופך – לחש, קסם.` |
| II 227 | EN₂ kaššāptu muttallikt[u ša sū]qāti | `קסם. המכשפה, המתהלכת [בשו]וקים.` |
| III 1 | EN₂ kaššāptu muttalliktu ša sūqāti | `קסם. המכשפה, המתהלכת בשווקים,` |
| III 62; VI 86 | ēpišūʾa apkallū ša apsî / ēpišūʾa apkallū ša aps[î] | `עושיי – חכמי האַפְּסוּ,` |
| III 63 | ēpišētūʾa mārāt ani ša šamê | `עושותיי – בנות אָנוּ שבשמים.` |
| VI 87 | ēpišūtūʾa mārāt ani ša šam[ê] | `עושותיי – בנות אָנוּ שבשמ[ים].` |
| III 146 | ēpištu u muštēpištu | `העושה והמְעַשָּׂה!` |
| VI 59 | [ēpi]štu u muštēpištu | `[העוש]ה והמְעַשָּׂה –` |
| IV 152 | [EN₂] ēpištu u muštēpištu | `[קסם.] העושה והמְעַשָּׂה.` |
| V 1 | EN₂ ēpištī u muštēpištī | `קסם. עושתי ומְעַשָּׂתִי` |
| V 26; V 36; V 43 | ēpištī u muštēpištī | `עושתי ומְעַשָּׂתִי –` |
| III 153 | ul iṭehhûni (u) ul iqarribūni yâši (te) EN₂ | `לא יגשו אליי, לא יקרבו אל עצמי – קסם.` |
| VI 64 | lā iṭehhûni lā iqarribūni yâši TU₆ EN₂ | `לא יגשו אליי, לא יקרבו אל עצמי – לחש, קסם.` |
| V 18 | ipša bārtu amāt lemutti lā iṭehhâ lā iqarrub[a y]âši TU₆ EN₂ | `כך מעשה, מרד, דבר רעה – לא יגשו אליי, לא יקרבו [אל ע]צמי – לחש, קסם.` |
| VII 54 | ipšu bārtu amāt lemutt[i] lā iṭehhûni lā iqarrubūni yâši EN₂ | `כך מעשה, מרד, דבר רע[ה] – לא יגשו אליי, לא יקרבו אל עצמי – קסם.` |
| III 171; VI 90 | etellâ kīma nūnī ina mêya / ētellâ kīma nūnī ina mêya | `עולה אני כדגים ממימיי,` |
| III 172; VI 91 | kīma šahî ina rušumtīya / kīma šahî ina rušumdīya | `כחזיר מבוצי,` |
| III 173; VI 92 | kīma maštakal ina ušalli | `כמַשְׁתַּכַּל מן האחו,` |
| III 174; VI 93 | kīma sassati ina ahi atappi | `כחציר משפת התעלה,` |
| III 175; VI 94 | kīma zēr ušî ina ahi tâmti | `כזרע הובנים משפת הים.` |
| III 186; IV 149 | kaššāpu (u) kaššāptu ēpiš(u) u ēpištu / kaššāpu u kaššāptu ēpiš(u) u ēpištu | `מכשף ומכשפה, עוֹשֶׂה וְעוֹשָׂה –` |
| III 188 | EN₂ bišlī bišlī qidê qidê | `קסם. בַּשְּׁלִי, בשלי, קִדְחִי, קדחי!` |
| IV 1 | EN₂ bišlī bišlī qidê qidê | `קסם. בַּשְּׁלִי, בשלי, קִדְחִי, קדחי!` |
| V 5 | usappah kišpīki utār amâtīki ana pîki | `מפיץ אני את כשפייך, משיב את דברייך אל פייך.` |
| VI 44 | asappah kišpīki ut[ār amâtīki ana pîk]i | `מפיץ אני את כשפייך, מש[יב את דברייך אל פי]יך.` |
| V 10; V 131; VII 169 | ina qibīt ea šamaš u marduk u rubāti bēlet-ilī TU₆ EN₂ / ina qibīt ea šamaš u marduk rubāti [bēlet]-ilī TU₆ EN₂ / [ina] qibīt ea šamaš (u) marduk u rubāti bēlet-ilī TU₆ EN₂ | `באמרת אֵאָה, שַׁמַשׁ ומרדוך, והַשָּׂרָה בֵּלֶת־אִילִי – לחש, קסם.` |
| V 111 | ina qibīt ea šamaš (u) [mar]duk u rubāti bēlet-ilī T[U₆ EN₂] | `באמרת אאה, שַׁמַשׁ [ומר]דוך, והַשָּׂרָה בלת־אילי – ל[חש, קסם].` |
| V 52 | terrā kišpūša ana mehê amâtīša ana šāri | `השיבו את כשפיה לסופה, את דבריה לרוח!` |
| VI 29 | [terrā ki]špīša ana mehê amâtīša ana šāri | `[השיבו את כש]פיה לסופה, את דבריה לרוח!` |
| V 80 | usappah urpataki uhalla[q ūmki] | `מפיץ אני את ענניך, מאבד [את סערתך],` |
| VI 50; VII 5 | usappah urpataki uhallaq ūmki | `מפיץ אני את ענניך, מאבד את סערתך,` |
| V 81 | usappah kišpīki š[a ta]kk[imī mūša u urra] | `מפיץ אני את כשפייך א[שר צב]ר[ת (עליי) לילה ויומם],` |
| VII 6 | usappah kišpīki ša takkimī mūša u urra | `מפיץ אני את כשפייך אשר צברת (עליי) לילה ויומם,` |
| V 82 | u našparāt zik[u]r[u]d[â ša taltapparī yâši] | `ואת שלוחות הזי[קו]ר[ו]ד[א אשר שלחת פעם אחר פעם אל עצמי].` |
| VII 7 | u našparāt zikurudâ ša taltapparī yâši | `ואת שלוחות הזִּיקוּרוּדָא אשר שלחת פעם אחר פעם אל עצמי.` |
| V 108 | anāku ina qibīt e[a šar apsî] | `אני – באמרת א[אה, מלך האפסו],` |
| VII 40 | ina qibīt ea šar apsî | `באמרת אאה, מלך האפסו,` |
| V 176; VI 1 | EN₂ enlil qaqqadī pānūʾa ūmu | `קסם. אֶנְלִיל – ראשי, פניי – *יום*,` |
| VI 49 | aziqqak[kim]-ma kīma iltāni amurri | `[נ]ושב אני עלייך כרוח צפון־מערב,` |
| VII 4 | [az]iqqakkim-ma kīma iltāni amurri | `נושב אני על[ייך] כרוח צפון־מערב,` |
| VI 158 | [EN₂ rittī manzât zuqaqīpi] | `[קסם. כפי – מַנְזָאת, העקרב.]` |
| VII 1 | [E]N₂ rittī manzât zuqaqīpi | `[ק]סם. כפי – מַנְזָאת, העקרב.` |

Not fixed here (they differ in the Akkadian: each translator renders them, keeping the shared words): I 145 / IV 153 / VI
159 / VII 179 (colophons: §6); V 99 / VI 144 / VI 153; VI 72–73 / VII 148–149 (*ēkīam* "where?" vs *ē* "do not").

## 9a. Alignment with the corpora finished during this run (2026-10-23)

Before the first line (guidelines §5.2, "align with a corpus finished meanwhile"): the net words (above, §2.2) follow
the wisdom corpus and Etana; *ṣerru* "snake" = `נָחָשׁ` (Etana; II 156, IV 61) – the homonym *ṣerru* "enmity" (*bēl
ṣerri*) keeps `מַשְׂטֵמָה`; *ikkibu* = `תּוֹעֵבָה`; *ebbu* = `צַח`; *aḫu* "arm" = `זְרוֹעַ` (the prophecy corpus too);
*ṣīt šamši* = `מוֹצָא הַשֶּׁמֶשׁ` (Etana); *tamû* G = `נִשְׁבַּע`, D = `הִשְׁבִּיעַ`; *dalālu* = `הִלֵּל` (wisdom: Maqlû's
*dalīlīka ludlul* is Ludlul's own phrase; Enūma eliš and the prophecies have `פֵּאֵר` – a split left for the lead's next
harmonization). Recorded splits of this corpus: *pašāru* "release" = `הִתִּיר` (Gilgameš's dream-*pašāru* = `פָּשַׁר`);
*redû* "persecute" = `רָדַף` (the Advice's "lead" = `נָהַג`); *pagru* by sense (`גְּוִיָּה` / `פֶּגֶר`).

## 10. Merged proposals (by run)

(Added by the coordinator after each translator.)

### 10.1 Tablet I (2026-10-23; the coordinator's merge of `1-מקלו/project.md` § Tablet I)
- **Accepted:** *šasû* = `צָעַק` (the performative preterite *alsīkunūši* = past `צעקתי`; `קָרָא` is reserved for *nabû* "name",
  II 19 – now checked by script); *dabābu* noun `רִיב`, verb `דִּבֵּר`; *qû* `פִּשְׁתָּן`; *upuntu* `סֹלֶת`; *elēlu*
  `הֵידָד`; *nubû* `נְהִי`; *sipdu* `מִסְפֵּד` [cognate]; *nēberu* `מַעֲבָר`, *kāru* `נָמֵל`, *kalû* "hold back" `כָּלָא`
  [cognate]; *ereb šamši* `מְבוֹא הַשֶּׁמֶשׁ`; *ḫarrānu* `אוֹרַח` (Gilgameš, Etana); *nīš libbi* `נְשִׂיאַת לֵב`; *zenû* D
  `הֶאֱנִיף`; *rimku* `טְבִילָה`, *ramāku* D `הִטְבִּיל`; *luʾʾû* `מְזֹהָם`; *mangu* `נוּקְשׁוּת`; *aklu* `לֶחֶם`;
  *napištu* "life" `חַיִּים`; *annu* `הֵן`; *kīnu* `נֶאֱמָן`; *ṣīru* `נַעֲלֶה`; *tarbītu* `תַּרְבּוּת` [cognate]; *ḫaṭṭu*
  `מַקֵּל` (a staff) / `שַׁרְבִיט` (a sceptre); *mimma lemnu* `כָּל רַע`; *labāṣu* `לַבָּצוּ`; *aḫḫāzu* `אַחָּזוּ`; *lilû* /
  *lilītu* / *ardat-lilî* `לִילוּ` / `לִילִיתוּ` / `עַלְמַת־לִילוּ` (`לִילִית` never: Isa 34:14 in the apparatus, as the
  netherworld corpus reserves it); *ḫâru* `אֵרַשׂ` always vocalized (`אירשו` reads "inherited").
- **Accepted as a sense split:** *šēdu* in a list of hostile demons = `שֵׁדוּ` (transliterated; its cognate `שֵׁד`,
  Deut 32:17, in the apparatus), against the protective *šēdu* = `רוּחַ־מָגֵן` of the wisdom corpus and §6.7.
- **Changed by the coordinator:** *binûtu* = `מִבְנֶה` (Gilgameš, Enūma eliš; I 124 was `בִּנְיַן`), and *nabnītu*
  (VII 58, 65) = `יְצִיר` instead.
- **For the lead's next harmonization:** Ludlul I 105 renders *gerrānu* `מספד`, which is the cognate of *sipdu*.

### 10.2 Tablet II (2026-10-23)
- **Accepted:** the capture words of II 162–180: *kapālu* `גָּלַל`, *saḫāpu* `חִפָּה`, *abātu* G `הָרַס`, *nasāku* `זָרַק`,
  *asurrû* `בִּיב`, *šūšurātu* `טִאטוּא`, *mê musâti* `מֵי רְחִיצָה`; *nabalkutu* "climb over" `דִּלֵּג` (Ps 18:30) beside
  "turn back" `הִתְהַפֵּךְ` (a sense split); *buʾʾû* `חִפֵּשׂ`, *šeʾû* `בִּקֵּשׁ`, *saḫāru* `סוֹבֵב` (the three seeking verbs);
  *nâru* `קָטַל`; *pašāṭu* `מָחָה` (EST); *lapātu* `נָגַע`; *temēru* `טָמַן`; *laqātu* `לִקֵּט`; *egēru* `שִׁלֵּב` /
  `שָׁלוּב`; *šutābulu* `הֵנִיעַ` (not `בִּלְבֵּל`: Gen 11); *ilūtu* `אֵלוּת`; *nindabû* `תְּרוּמַת־לֶחֶם`; *askuppatu*
  `מִפְתָּן`; *ašlāku* `כּוֹבֵס`; *tubkinnu* `עֲרֵמַת זֶבֶל`; *ḫirītu* `חֲפִירָה`; *utūnu* `אַתּוּן` **always vocalized**
  (`אתון` = she-ass; checked by script); *šubtu* `מִשְׁכָּן`; *kayyānu* `תְּמִידִי`; *apu* `אֲגַם`; *nannāru* `נַנָּרוּ`
  (§6.7); the "Hand of X" diseases translated (`יַד־אֵל`, `יַד־אֵלָה`, `יַד־אִט`, `יַד־אֱנוֹשׁוּת`), the opaque ones
  transliterated; the abracadabra of II 150–153 transliterated.
- **Changed by the coordinator:** *šunamerimmakku* (II 61) = `יַד־שְׁבוּעָה` (was `יַד־אָלָה`): *māmītu* = `שְׁבוּעָה` in every
  corpus, and `אלה` collides with `אֵלָה` "goddess"; the `שבועה` gate is now licensed by Sumerian *namerim* too.

### 10.3 Tablet III (2026-10-23)
- **Accepted:** the practitioners' "of …" epithets (III 47–53: *luʾʾû* D `זִהֵם`, *lapātu* D `נִגַּע`, *kamû* `לָכַד`,
  *kasû* `אָסַר` …); the reversal verbs kept apart (III 55–57): *enû* Št `הֶחֱלִיף`, *nabalkutu* Š `הָפַךְ`, *šupêlu*
  `הֵמִיר`; *šumḫuru* `הִפְגִּיעַ` (Isa 53:6); the ten D-stem verbs of III 102–111, each its own Hebrew verb; *makurru*
  `אֳנִיָּה` (`סְפִינָה` stays for *eleppu*); *ṭurru* `חֶבֶל`, *ašlu* `עֲבוֹת`, *markasu* `מוֹסֵרָה` (a split from the flood
  corpus's *markasu* `חֶבֶל`, because Maqlû has both words), *batāqu* `נִתֵּק` (↔ Ps 2:3); *luḫummû* `טִין`; *rābiṣu*
  `רוֹבֵץ` [cognate] (the wisdom corpus's rule, not a transliteration); the colophon's *iškār āšipūti* = `סִדְרַת
  הָאַשָּׁפוּת`. Inside the tablet: 76 = 87, 154 = 180, 155 = 181.
- **A line of II corrected:** II 161 *ēteneppušūni* is a Gtn present (`עושים ועושים לי`), as III 64; IV 115 and RT 68'
  follow it.
- **Rule for the closing formula when only some copies have it** (III 101, 115): the Hebrew follows N; the copies with
  TU₆ ÉN go to a footnote.

### 10.4 Tablet IV (2026-10-23)
- **Accepted:** the refrain IV 13–67 written in full, unbracketed, with a note where the copies abbreviate it; Girra's
  four titles as one string (§5); *pāqidu* `פּוֹקֵד` beside *paqādu* `הִפְקִיד` (the play kept, IV 18); *šikkû*
  `חֻלְדָּה`, *arrabu* `עַכְבָּר` (Lev 11:29), *perurūtu* transliterated; *lulīmu* `יַחְמוּר` (Gilgameš); *šuškunu* (IV
  68–72, "make odious") `הִבְאִישׁ` by sense (Exod 5:21; not a form of `שׂם`); IV 115 feminine `עושות לי, עושות ועושות
  לי` (*ippušā*: the RT translator follows IV 115 at RT 68'); *piṭru* `פֶּטֶר` (Ludlul); *anāku pāširāk* `אני – מתיר
  אני`; *rūʾu* `עָמִית` (Etana's *rūʾūtu* `עֲמִיתוּת`), so *itbāru* `שֻׁתָּף`; *šizbu* `חָלָב` (always vocalized, against
  `חֵלֶב` "tallow"); *burû* `מַפָּץ`; *sirqu* `זְרִיקָה`; *šūbultu* `מִשְׁלוֹחַ`; *arāḫu* `חִסֵּל`; *bâʾu* `שָׁטַף`;
  *napāṣu* `נִפֵּץ` [cognate].
- **Settled by the coordinator:** *ḫepû* and *šebēru* both `שָׁבַר` (as in the Gilgameš corpus): *ḫepû* is Maqlû's
  frequent "break" (and *hīp libbi* is a "broken heart"), *šebēru* (IV 94, once) the cognate; the apparatus names the
  Akkadian verb where both stand near each other.

### 10.5 Tablet V (2026-10-23)
- **Accepted:** the method for the plant puns (V 27–35): the plant transliterated (identification in the note), the verb
  in its fixed Hebrew, the sound echo explained per line, no Hebrew pun invented; *errû* `אֶרּוּ` / *ēru* `אֵרוּ` (always
  vocalized: checked by script); Kanisurra *bēlet kaššāpāti* `בַּעֲלַת הַמְּכַשְּׁפוֹת` (Nah 3:4 `בַּעֲלַת כְּשָׁפִים` [cognate],
  with the difference spelled out); KIMIN ("ditto") abbreviations written out in full, unbracketed (as Tablet IV);
  *ina nīši u māmīti* `בנפש ובשבועה`; *ḫīp libbi* `שֵׁבֶר־לֵב`; *nagbu* `מַעֲמַקִּים` (the flood corpus; *mê nagbi*
  `מֵי מַעֲמַקִּים`), so *bēl nagbi* `אֲדוֹן הַמַּעֲמַקִּים`; the six "go away" verbs *isû* `סָר`, *rêqu* `רָחַק`, *bêšu* `זָז`,
  *ḫalāqu* `אָבַד`, *duppuru* `הִסְתַּלֵּק`, *atluku* `לֵךְ`; the boundary verbs *ebēru* `עָבַר`, *etēqu* `חָלַף` (Etana),
  *nabalkutu* `דִּלֵּג`, *erēbu* `נִכְנַס`; a parallel text (KalNAPar1) counts as a copy for the brackets, its pluses go to
  the apparatus only.

### 10.6 Tablet VI (2026-10-23)
- **Accepted:** *takālu* `בָּטַח` (*attakil takālu* `ובטחתי בָּטוֹחַ`, vocalized; the prophecy corpus's *takālu* = `בָּטַח`);
  *zaqāpu* `זָקַף` [cognate]; *ūru* `גַּג`; *bābu* `פֶּתַח`; *kidinnu* `אוֹת־הֲגָנָה`; *bēru* `בֵּרוּ` (always vocalized,
  Etana); *mār šipri* `שָׁלִיחַ` (singular where the writing is); *ulinnu* `חוּט צִבְעוֹנִי`; *sarāqu* `זָרַק` [cognate];
  *naḫāru* D `צִמֵּק` (the *nuḫurtu* pun explained); *šaʾerru* `שַׁאֵרּוּ`; *riḫītu* / *riḫûtu* `וָלָד`; *kaṣāṣu* D `קִצֵּץ`
  (= I 119); *nāsiḫ libbi* `נוֹסֵחַ לֵב` (vocalized: `נוסח` is the rubric's word); *tarbaṣu* `מִרְבָּץ`; *šapāku* (heap)
  `שָׁפַךְ` (2 Sam 20:15); *ṭābtu* `מֶלַח` and *kibrītu* `גָּפְרִית` as the speakers of their own incantations; the
  repeated lines of VI 126–157 identical, punctuation included. VIII 46–49 copy VI 45–46b.

### 10.7 Tablet VII (2026-10-23)
- **Accepted:** words N puts in parentheses (optional, some copies) are `( )` in the Hebrew with a note naming the copies;
  *reḫû* `עִבֵּר` of the speaker's own spell (VII 22–28); *atānu* `אָתוֹן` [cognate], *mūru* `עַיִר`, *armû* `עוֹפְרָה`
  (plene); *ṭuḫḫudu* `דִּשֵּׁן` (Ps 23:5); *riksu* stays `קֶשֶׁר` also for Gula's bandage (VII 42: the witch's knot and the
  healer's bandage are one word); *ṭarādu* `הִבְרִיחַ`; *samāku* `גֵּרֵשׁ`; *ṣubbû* `סָקַר`, *šurruḫu* `פֵּאֵר`, *kanānu* D
  `כָּרַךְ`, *manānu* `מֵיתָר`, *wuʾʾuru* `צִוָּה`; *gimilla gamālu* `גָּמַל … גְּמוּל` [cognate]; *šaḫāṭu* N `נִתְלַשׁ` (=
  V 54); *bāʾirtu* `צַיֶּדֶת`; *šalāpu* `שָׁלַף`; *ruqbūtu* `רִקָּבוֹן`; *muppišūtu* `עוֹשׂוּת`; *idātu* / *ittātu* both
  `אוֹתוֹת` (both are plurals of *ittu*); *ṭūb libbi* / *ṭūb šīri* `טוּב לֵב` / `טוּב בָּשָׂר`; *gummuru* `גָּמַר` (Gilgameš);
  *annaku* `אֲנָךְ` (open: Amos 7:7's meaning is disputed); *nīš ili* `נֶפֶשׁ אֵל`.
- **For the lead's next harmonization:** *nissatu* `דַּאֲבוֹן` here (V gave `יָגוֹן` to *ašuštu*) against *nissatu* `יגון`
  in the wisdom corpus and Gilgameš; *gamāru* `כִּלָּה` (prophecy) / `גָּמַר` (Gilgameš, here).

### 10.8 Tablet VIII (2026-10-23)
- **Accepted:** the A+ / B+ fragments explained in the header and intro (eBL numbers each sequence from its own start);
  *qiddatu* / *māḫirtu* `מוֹרַד הַזֶּרֶם` / `מַעֲלֵה הַזֶּרֶם`; *tebû* "depart" `קָם`; *rakāsu riksa* `קָשַׁר קֶשֶׁר`; *šalû*
  "dive" `צָלַל`; *nikiltu* `מְחֻכָּמוֹת` (the cognate `נֵכֶל` in the note); *puluḫtu* `פַּחַד`; *ḫurbāšu* `צְמַרְמֹרֶת`; the
  witch's participles of A+38–A+45 each its own verb (*sekēru* `סָכַר` [cognate], *ḫabālu* `חִבֵּל` [cognate]); *pagru*
  (a corpse) `פֶּגֶר` [cognate], *erû* `נֶשֶׁר`, *zību* `עַיִט` (Gilgameš), *baṣāru* `קָרַע`; *ṣillu* `צֵל` also for the
  reflection in the bowl (RT 175'–177'); *upīšū* `מַעֲבָדִים`; *kušāpu* `כּוּשָׁפּוּ`; KIMIN written out in full.

### 10.9 The Ritual Tablet (2026-10-23)
- **Accepted:** the incipit format `הקסם "…":` (no governing verb) / `את הקסם "…"` (with `ימנה`, `תמנה`, `תכלה`), the
  quotation being the Hebrew of the incantation's first line, cut where the RT cuts it and changed only where the RT's
  wording differs (17', 49', 65', 66', 68' fem., 73', 99', 104', 150', 156', 170'); incantations not in I–VIII translated
  in quotation marks (92' Sumerian, 95', 134'–135', 137', 178'); the materials copied from the rubrics of II–IV; *nēpešu*
  `טֶקֶס`, *marṣu* `חוֹלֶה`, *nappaṭu* `מַחְתָּה`, *kirru* `כַּד`, *namsû* `כִּיּוֹר` (Exod 30:18), *qēmu* `קֶמַח`, *laḫannu*
  `צְלוֹחִית`, *billatu* `בְּלִילָה`, *tābīlu* `תַּבְלִין`, *qilûtu* `הַקָּלוּי`; *qatāru* D `הִקְטִיר`, *karātu* `כָּרַת`,
  *parāku* `שִׂכֵּל`, *buḫḫušu* `בָּחַשׁ`, *barû* `בָּחַן` (wisdom), *sadāru* `סִדֵּר`; *nabāsu* `שָׁנִי`, *tabarru* `צֶמֶר
  אָדֹם`, *pallurtu* `שְׁתִי־וָעֵרֶב`, *gisallû* `מַעֲקֶה`, *qanû ṭābu* `קְנֵה הַטּוֹב` (Jer 6:20), *āsu* `הֲדַס`, *šurmēnu*
  `שׁוּרְבִּין` (§6.7); *burzigallu*, *šukbusu*, *maṣḫatu*, *šaḫarru*, *akalu*, *šubû* transliterated; *riksu* "ritual
  arrangement" `מַעֲרָכָה` (a sense split from `קֶשֶׁר`); *sippu* `מְזוּזָה`. The refrain check exempts RT (it quotes only
  the incipit).
- **Changed by the coordinator:** *paṭīru* (RT 14') = `מַעֲמָד` (was `שֻׁלְחָן`, which is *paššūru* in Gilgameš).
