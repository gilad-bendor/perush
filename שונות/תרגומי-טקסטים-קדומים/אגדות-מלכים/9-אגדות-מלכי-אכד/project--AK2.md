# Project 9, part AK2 – the Great Revolt against Narām-Sîn A (RA) and B (RB), Narām-Sîn and the Lord of Apišal (AP), Erra and Narām-Sîn (EN) – Round 8 run 4, translator B (2026-11-14)

## Progress and passes
- **Drafted: all 222 entries** – RB.1–38, RA.o1–RA.r4'' (41), AP.i1–AP.vi17 (71), EN.1–72. Headers were written for all four files. Every source line is `` `@` ``, filled by `fill AK`.
- RB went first (the fuller witness). RA copies its Hebrew where the Akkadian is the same (`= RB …`) and changes a word where the Akkadian differs (`~ RB …`: *Wurumu*, *Kiššîm*, *kasāpu* for *ḫepû*, "the house of Ninkarrak" for "the house of Gula"). CH, FL, ST and LI strings and AN's terms are reused (`ביום ההוא`, `קטל`, `מערכה`, `עִמּוּת`, `רובץ`, `וזיר`, `בכיר`, `ממונה`, `גופה`). The Cuthaean Legend's Narām-Sîn vocabulary (§11) is used as well (`כּוּתָה` ★, `מָגָן` ★, `הִתְנַכֵּר`, `מוֹשֵׁל`, `גזר`, the omen word `הוראה`).
- Passes: (a) fidelity – every form is parsed, and SEAL's English was read afterwards (RB, EN); (b) consistency with AK1 and the corpus; (c) Hebrew – unvocalized plene; ★ names are vocalized everywhere: Narām-Sîn, Sîn, Erra, Kutha, Magan, Mari, Umma ("nation"), Gula ("exile").
- **Checks:** `verify AK --strict` covers all **532** entries and reports **5 problems, all gate bugs** (below). `check_bible_quotes.py` on all eight annotated files: 0 problems.

### Parallels index (AK2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| RB.5 | *pašīš Anim* | `מְשׁוּחַ אָנוּ, שַׂר אֶנְלִיל,` | `אִם הַכֹּהֵן הַמָּשִׁיחַ יֶחֱטָא לְאַשְׁמַת הָעָם` (ויקרא ד:ג) | [cognate] | *pašīšu* < *pašāšu* "anoint": a priestly title of the king; `מָשִׁיחַ` stays gated |
| RB.11 | *ištēniš ibbalkitūninni* | `יחדיו מרדו בי:` | `יִתְיַצְּבוּ מַלְכֵי-אֶרֶץ וְרוֹזְנִים נוֹסְדוּ-יָחַד` (תהלים ב:ב) | [equivalent] | the kings of the earth rise up "together" against the king |
| RB.18 | *andurār ṣāb Kiš iškun* | `דרור לצבא כִּישׁ שׂם:` | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) | [cognate] | a king's release of the bound, against God's jubilee law |
| RB.19 | *abbuttašunu ugallib* | `את בלוריתם גילח,` | `וְגִלְּחָה אֶת רֹאשָׁהּ וְעָשְׂתָה אֶת צִפָּרְנֶיהָ` (דברים כא:יב) | [divergence] | shaving marks a change of status; *gullubu* ~ `גַּלָּב` |
| RB.20 | *kurṣêšunu uḫeppi* | `את אזיקיהם שבר.` | `פַּתֵּחַ חַרְצֻבּוֹת רֶשַׁע הַתֵּר אֲגֻדּוֹת מוֹטָה` (ישעיהו נח:ו) | [equivalent] | breaking fetters as release |
| RB.23 | *lā nakar aḫḫūtum ayyâši* | `כִּישׁ לא התנכרה – אחווה (היא) לי.` | `לְהָפֵר אֶת הָאַחֲוָה בֵּין יְהוּדָה וּבֵין יִשְׂרָאֵל` (זכריה יא:יד) | [cognate] | *aḫḫūtu* / `אַחְוָה`: brotherhood between cities |
| RA.r6' | *ana tāḫāzim uṣabbêm-ma … dīkū* | `[למערכה] יצא לצבא, וחמש רב[בות – נהרגו].` | `וַיִּצְבְּאוּ עַל מִדְיָן כַּאֲשֶׁר צִוָּה יְהוָה אֶת מֹשֶׁה; וַיַּהַרְגוּ כָּל זָכָר` (במדבר לא:ז) | [cognate] | *ṣabāʾu* / `צָבָא`; *ribbatu* / `רְבָבָה`; SEAL's *dekû* is *dâku* |
| AP.ii3 | *il mātim illaku ištīšu* | `אל הארץ – הולך עמו;` | `כִּי יְהוָה אֱלֹהֵיכֶם הַהֹלֵךְ עִמָּכֶם לְהִלָּחֵם לָכֶם עִם אֹיְבֵיכֶם לְהוֹשִׁיעַ אֶתְכֶם` (דברים כ:ד) | [divergence] | the closest contact with Deut 20; here a guard of gods walks before, behind and beside the king (ii 4–7) |
| AP.v2 | *kīma nēšim-mi nāʾirim tabašši* | `כאריה נוהם – הִנְּךָ;` | `אַרְיֵה שָׁאָג מִי לֹא יִירָא` (עמוס ג:ח) | [equivalent] | |
| AP.v5 | *ša kīka mannum* | `אין לך משתווה; אשר כמוך – מי?` | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | [equivalent] | as ST.15′ |
| AP.v18 | *attā-ma lū lābu nakrūka šunu lū šēlebū-ma* | `"אדוני, אתה – לביא; אויביך – הם שועלים; …` | `כְּשֻׁעָלִים בָּחֳרָבוֹת נְבִיאֶיךָ יִשְׂרָאֵל הָיוּ` (יחזקאל יג:ד) | [equivalent] | *lābu* / `לָבִיא`, *šēlebu* / `שׁוּעָל` [cognates] |
| AP.v19 | *rigmīka līrubū ana ḫurrīšunu* | `[…]… לקולך – ייכנסו אל חוריהם!"` | `וּבָאוּ בִּמְעָרוֹת צֻרִים וּבִמְחִלּוֹת עָפָר מִפְּנֵי פַּחַד יְהוָה` (ישעיהו ב:יט) | [equivalent] | |
| EN.14 | *ai tummid ḫaṣṣinnī kakkī* | `"אל תשעין [(…)] את [גר]זני, את נשקי!` | `לֹא תַשְׁחִית אֶת עֵצָהּ לִנְדֹּחַ עָלָיו גַּרְזֶן` (דברים כ:יט) | [divergence] | the axe in war: in Deut 20 it must spare the trees; here it must not be set aside |
| EN.21 | *rābiṣāk nablāk išātāk* | `רוב[ץ אני], לה[בה אני], [א]ש אני.` | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] | the god as "the lurker" |
| EN.34 | *puḫriš illikū rūšu u šū* | `באסיפה הלכו – עמיתו והוא.` | `כִּי יְהוָה אֱלֹהֵיכֶם הַהֹלֵךְ עִמָּכֶם לְהִלָּחֵם לָכֶם` (דברים כ:ד) | [divergence] | god and king as companions; the price is a house for the god |

## Key findings
- **The ancient mind.** The revolt is told as a test of legitimacy. Narām-Sîn swears by his gods that Kiš "was not hostile – it was brotherhood to me", and recalls his grandfather Sargon's *andurāru*: the shaved slave-locks and broken fetters (RB.16–23). The rebels choose a king whose name puns on their assembly: "Kiš assembled (*ipḫur*)" – and they made "Ipḫur-Kiš" king, the son of a lamentation priestess with no father named (RB.26–28; RA o15 shows the pun openly). A king fights "by the judgment of Ištar and Annunītu" (RA o10). The gods walk with the king as a bodyguard with their standards (AP ii). War is woven (EN.20 *qabla šatû*). God and king are "companions" who go "in assembly", and the god is paid with a house whose gate snakes carry two names, "Battle" and "Prosperity" (EN.33–51).
- **The Bible.** Deut 20:4 ("the LORD goes with you") meets AP ii3 and EN.34–36, and these are the closest contacts in the AK texts. There is no "soft heart" in any of the speeches. Other contacts: *andurāru* `דרור` (Lev 25:10), *aḫḫūtu* (Zech 11:14), *ṣabāʾu* `צבא` the verb (Num 31:7), *pašīšu* `משוח` (Lev 4:3), and the lion and foxes (Ezek 13:4).
- **Readings against SEAL's lemmas:** RA r6′/r8′ *dīkū* is *dâku*, not *dekû*; AP v7 *lutmâ* is *tamû*, not *watû*; AP v1 *Girri* and *Addum* are gods, not *gerru* and *nadû*; FL's *ernittu* = `נִצָּחוֹן` (AK1's restoration of FL i7′ should follow).

## Open decisions
1. ***nabalkutu* "rebel" = `מָרַד`** (RB.11, 15), a split by sense from §0.3's `חָצָה` "cross".
2. ***qerēbu* `קָרַב` [cognate] (EN.46) vs AN's *ṭeḫû* `קרב`** (also CH.9, LI.8″, AP vi5). By the cognate rule *qerēbu* keeps `קרב`, and *ṭeḫû* would need another verb (`נִגַּשׁ`? – the netherworld's *âru*). This is for the lead.
3. ***ernittu* = `נִצָּחוֹן`** (EN.12–13). FL i7′'s restored `[מאוויו]?` should become `[נצחונו]?`. I did not change the merged AK1 file.
4. ***dannūtu* "strength" `חֹזֶק`** (RB.8) vs CL2's "fortress" `מבצר`: a split by sense.
5. ***malku* = `נָסִיךְ`** (EN.53) vs AN's *rubûtu* `נְסִיכוּת`.

## Proposals for the corpus renderings
**Strings:** `X פתח את פיו,` / `ודיבר אל Y:` (AP v12–13; EN.19 in one line) – Etana's formula without *iqabbi*; `ביום ההוא` (*inūmīšu*, RB.16, RA o5); `מלך ארבע הקצוות` (*šar kibrāt arbaʾim*); `(ב)אִשְׁתַּר, אִילַבָּה, שׁוּלַּת וחָנִישׁ,` / `שַׁמַשׁ ואוּמוּמְשׁוּ!` (RB.21–22); `X, מלך Y,` (the RB list); `למערכה יצא לצבא` (*ana tāḫāzim uṣabbêm-ma*); `תן למלך את הנשק החזק, את מקל־הרועים,` / `לנבון, השמח במֵישָׁרִים, בונה ביתך!` (EN.65–68).
**Terms** (Source | Hebrew | Tag): *nabalkutu* (rebel) `מָרַד` · *ištēniš* `יַחְדָּו` · *andurāru* `דְּרוֹר` [cognate] · *abbuttu* `בְּלוֹרִית` · *gullubu* `גִּלַּח` · *kurṣû* `אֲזִקִּים` · *ḫepû* `שָׁבַר` · *kasāpu* `קִצֵּץ` · *aḫḫūtu* `אַחְוָה` [cognate] · *pašīšu* `מְשׁוּחַ` [cognate] · *šakkanakku* `שַׂר` · *mutawwû* `מְשׂוֹחֵחַ` · *ṣarraḫtu* `מְקוֹנֶנֶת` · *dīnu* `דִּין` · *šaʾāru* `נִצֵּחַ` · *ṣabāʾu* `צָבָא` (verb) [cognate] · *ribbatu* `רְבָבָה` [cognate] · *dâku* `הָרַג` · *wuššuru* `שִׁלַּח` · *tibûtu* `הִתְקוֹמְמוּת`, *tebû* Š `הֵקִים` · *mušallilu* `שׁוֹלֵל` · *pālilu* `חָלוּץ` · *qarnu* `קֶרֶן` [cognate] · *šurīnu* `דֶּגֶל` (= Sum. *šu-nir*) · *pirikku* `סֵמֶל` · *imittu* / *šumēlu* / *imnu* `יָמִין` / `שְׂמֹאל` [cognates] · *bašmu* `פֶּתֶן` [cognate] · *ṣupru* `צִפֹּרֶן` [cognate] · *nāʾiru* `נוֹהֵם` · *šāninu* `מִשְׁתַּוֶּה` · *lābu* `לָבִיא`, *šēlebu* `שׁוּעָל` [cognates] · *napāḫu* `נָפַח` [cognate] · *belû* `כָּבָה` · *mūtu* `מָוֶת` [cognate] · *tarānu* `מַחְסֶה` · *ūmakkal* `יוֹם תָּמִים` · *gegunû* `גֶּגוּנוּ` · *qaqqaru* `קַרְקַע` [cognate] · *napalsuḫu* `הִשְׁתַּטֵּחַ` · *šatû* II "weave" `אָרַג` · *ernittu* `נִצָּחוֹן` · *ṣimdu* `צֶמֶד` [cognate] · *ḫaṣṣinnu* `גַּרְזֶן` · *râsu* `רִסֵּק` · *nablu* `לֶהָבָה` · *tašīltu* `שִׂמְחָה` · *ramû* "settle" `שָׁכַן` · *warqu* `יָרֹק` [cognate] · *redû* `לִוָּה` · *puḫriš* `בָּאֲסֵפָה` · *esēru* `סָגַר` · *qerēbu* `קָרַב` [cognate] · *šigāru* `סוּגַר` [cognate] · *ṭūbu* `טוּב` · *malku* `נָסִיךְ` · *šibirru* `מַקֵּל־הָרוֹעִים` · *eršu* (wise) `נָבוֹן` · *sippu* `סַף` [cognate] · *eqlu* `חֶלְקָה`.
**Names:** as the four headers (RB: the twelve cities and the ten kings; RA: Lugalzagesi `לוּגַלְזָגֶּסִי`, Ninkarrak `נִינְכַּרַּכּ`, the southern rebels; AP: Šilaba `שִׁלַבָּה`, Addu `אַדּוּ`; EN: Laṣ `לַאץ`, Meslam `מֶסְלָם`, Duranki, the Igigi). Gula `גּוּלָה` and Umma `אוּמָּה` ★ always vocalized (TRAPS).

**Tool (gate bugs – the lines are correct and were not written around):**
- G5. The `אבר` gate (*abru*) reads the name Ibrat `אִבְּרַת` (RB.14, RA o3) as ה־אברת "feather". License it by the names (`Ib-ra-at`), as Magan licenses `גן`.
- G6. The Magan licence `magan` does not match SEAL's `Má-gan-na` (RB.35): add the folded `ma-gan`.
- G7. `טוב` is licensed by *ṭābu* / *ṭiābu* / *damqu* but not by the noun *ṭūbu* / *ṭubbu* (AP vi12, EN.51): add *ṭūbu*.
- G8. Gate holes (not blocking): `אשבע` (*tamû*, AP v7; SEAL's lemma slip *watû*) is not in the `נשבע` word list, and the slip itself would disable the licence.
