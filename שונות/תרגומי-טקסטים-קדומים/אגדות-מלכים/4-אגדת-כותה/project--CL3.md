# Part CL3: the Cuthaean Legend, Middle Babylonian A and B from Ḫattuša (Round 5, run 5), 2026-10-31

Translator: the CL1–CL2 sub-agent, resumed. Files: `annotated-MBA.rtl.md` (header paragraphs + 63 entries, MBA.b+1–d+9;
eBL has no c+23) and `annotated-MBB.rtl.md` (header paragraphs + 15 entries, MBB.a+1–b+1). Both are single tablets
(HatMB1 = Bo 1202.z, KBo 19 98; HatMB1 = Bo 316.a).

## Progress and passes
- Data: `kings_tools.py data CL MBA.b+1 MBB.b+1` (78 lines); `@` + `fill CL` (63 + 15 filled). New Hebrew words grepped
  (`harmonize_survey.py`); every verse printed first (about 20).
- SB's Hebrew copied where the Akkadian is the same: b+14 = SB 100 (`דיבר אל האלים, שותפיו:`); b+13 = SB 99 without
  *iqabbi* (`אֵאָה, [האדון], פתח את [פי]ו?,`); b+10 `מוות, נַמְתָּר,` = SB 94; b+7/b+25/c+11 `שותפים`, `מופיעים`,
  `ביופי` = SB 37; b+11 *nebrītu* `רָזוֹן`, *ḫušaḫḫu* `כָּפָן` = SB 95, 144; b+16 *ḫulluqi awīlūti* `אַבֵּד את
  האנושות` = SB 102 (negated); b+17 *warkiāt ūmi* `לימים הבאים` = SB 131; b+23 *littaggiš* `יִנְדֹּד` = SB 166;
  c+8–9 *issaqqūni* `התקרבו` = SB 49, 56–57; c+10, c+17 *umma šunū-ma* / *umma šū-ma* `[לאמור – ה]ם:` / `[ל]אמור –
  הוא:` on the model of SB 79.
- Pass (a) fidelity: brackets by the single manuscript (partial brackets where only part of the root survives:
  b+2, b+3, b+7, b+11, b+13, b+15, c+8, MBB a+2/a+4); N's round-bracketed words not translated (b+25 *(u)*, c+11
  *( … )*).
- Pass (b) consistency: one Hebrew per lemma across the four chapters; *šapāru* `שָׁלַח` (Qal) kept apart from
  *ṭarādu* `שִׁלַּח` (Piel, SB 96); *kibru* `קָצֶה` (never `שָׂפָה`); *šīrāš* `סֹבֶא` (Ludlul *sīrāšu*), not `שֵׁכָר`
  (*šikaru*).
- Pass (c) Hebrew aloud: vocalized `יִירְאוּ` (not "they will see"), `וְלִבְנַת`, `אֵל`, `גְּזֹרוּ`, `אַבֵּד`, `לְזֵכֶר`,
  `יִשְׁכַּב`, `סֹבֶא`, `מְחַיֵּה לֵב`, `רָבוּ`, `קִנּ[וֹת?]`.
- **Checks:** `kings_tools.py verify CL` – 258 entries, **OK** (no problem in MBA/MBB; OBI/OBII still missing, as
  expected). `check_bible_quotes.py 4-אגדת-כותה/*.md` – 0 problems.

### Parallels index (CL3)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| MBA.b+2 | *enmekar ul išṭuram-ma narâ* | אֶנְמֶרְכַּר? לא כתב לי מצ[בה?] | `כָתְבָהּ עַל לוּחַ אִתָּם … וּתְהִי לְיוֹם אַחֲרוֹן לָעַד` (ישעיהו ל:ח) | [equivalent] | = SB 29, simpler: "did not write *for me*". |
| MBA.b+3 | *ul aḫī-ma u rittī ul iṣbat … ul akrubšu* | לא אחי, ואת כפי ל[א תפס?] … לא ברכתיו | `וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד) | [divergence] | SB 30 gives a literary reason (no "name"); MB A a relational one (not a "brother", did not "take my hand"). |
| MBA.b+4 | *awīlūtu īrub ana pānīšunu ana ḫurrī* | האנושות נכנסה – לפניהם – אל החורים | `הִנֵּה עִבְרִים יֹצְאִים מִן הַחֹרִים` (שמואל א יד:יא); `וַיִּתְחַבְּאוּ הָעָם בַּמְּעָרוֹת` (שמואל א יג:ו); `וּבָאוּ בִּמְעָרוֹת צֻרִים … מִפְּנֵי פַּחַד יְהוָה` (ישעיהו ב:יט) | [cognate] | *ḫurru* / `חוֹר`; the line SB 31 turned into "cave-bird". |
| MBA.b+5–6 | *ālu … ul ālu; qaqqaru … ul qaqqaru* | עיר – לפניהם – לא עיר; קרקע – … – לא קרקע | `וְנָתַתִּי אֶת יְרוּשָׁלִַם לְגַלִּים` (ירמיהו ט:י) | [equivalent] | Our proposal. |
| MBA.b+9, b+15 | *qātiššu ibnīšunūti*; *ummāna annia anāku abni* | בידו בָּנָה אותם; [ח]יל זה – אני בניתי | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב); `אֶמְחֶה אֶת הָאָדָם אֲשֶׁר בָּרָאתִי` (בראשית ו:ז) | [equivalent] / [divergence] | Ea alone builds the destroying host "with his hand" (SB 32: "the great gods"), then hands its fate to the other gods. |
| MBA.b+11 | *maḫīra* | מחיר | `סְאָה סֹלֶת בְּשֶׁקֶל וְסָאתַיִם שְׂעֹרִים בְּשֶׁקֶל` (מלכים ב ז:א) | [cognate] | *maḫīru* / `מְחִיר`. |
| MBA.b+16 | *aššum lā ḫulluqi awīlūti* | לבלתי אַבֵּד את האנושות | (SB 102 the positive) | [divergence] | The same phrase as SB 102 with the opposite sense. |
| MBA.b+18 | *libitti dūri lū ilu šunu liškēnū* | וְלִבְנַת החומה – אֵל תהי; הם – ישתחוו | `הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג); `לֹא תִשְׁתַּחֲוֶה לָהֶם` (שמות כ:ד); `לְמַעֲשֵׂה יָדָיו יִשְׁתַּחֲווּ` (ישעיהו ב:ח) | [cognate] / [divergence] | *libittu* / `לְבֵנָה`; a god decrees that the enemy worship a brick – to protect the wall. |
| MBA.b+20 | *ai išlul šallatam-ma* | אַל ישלול שלל | `לִשְׁלֹל שָׁלָל וְלָבֹז בַּז` (ישעיהו י:ו) | [cognate] | *šalālu šallata* / `שָׁלַל שָׁלָל`; in Isaiah God sends Assyria to plunder, here a god forbids it. |
| MBA.b+21 | *ai īkul akla bulluṭ libbi* | אַל יאכל לחם – מְחַיֵּה לֵב | `וְלֶחֶם לְבַב-אֱנוֹשׁ יִסְעָד` (תהלים קד:טו); `סְעָד לִבְּךָ פַּת לֶחֶם` (שופטים יט:ה) | [equivalent] | |
| MBA.b+22 | *nipiš šīrāš … mê lištī* | ריח סֹבֶא – מים ישתה | `סָבְאֵךְ מָהוּל בַּמָּיִם` (ישעיהו א:כב) | [equivalent] | |
| MBA.b+23–24 | *littaggiš ana kala ūmi … ai išēaššu šittu* | יִנְדֹּד כל היום … ו[שנה] אַל תבקשהו | `וְלֹא יִהְיֶה מָנוֹחַ לְכַף רַגְלֶךָ` (דברים כח:סה); `בַּבֹּקֶר תֹּאמַר מִי יִתֵּן עֶרֶב` (דברים כח:סז) | [equivalent] | The curse of restless wandering and sleeplessness. |
| MBA.c+8–9 | *ana māt akkadî … adi abul akkadî* | אל ארץ אַכַּד … עד שער אַכַּד | `וְאַכַּד` (בראשית י:י; renderings §1) | – | The host reaches the capital (not in SB). |

## Key findings
**For the Bible.**
1. **Ea, maker of the destroyer:** in MB A the host is Ea's own work, "built with his hand" (b+9, b+15: "this host I
   built; you decree its fate"), and his curse protects mankind from it (b+16 "so that it not destroy mankind"). In
   SB, "the great gods" build the host, and Ea's speech recalls the gods' decision to destroy "the seed of mankind"
   (SB 102). The same phrase *aššu(m) … ḫulluqi … awīlūti* is negated in MB A and positive in SB – a change of
   theology between versions, with Gen 6:7 (the maker who decides to destroy) between them as a counter-model.
2. **A brick as god** (b+17–18): Ea decrees that the host "revere the wall" and worship "the brick of the wall" as a
   god – so that it never takes the city. With *libittu* = `לְבֵנָה` [cognate] (Gen 11:3) and the ban on bowing to
   made things (Exod 20:4; Isa 2:8), an irony the Bible would read as idolatry is here a divine protective trick.
3. **The curse on the host** (b+19–24) is a little *arrat ilī*: no conquest, no plunder (`שָׁלַל שָׁלָל` [cognate], Isa
   10:6), no bread "that revives the heart" (Ps 104:15), no beer, only water, wandering all day, no sleep at night –
   the Deut 28:65–67 pattern of a life without rest.
4. **Humanity in holes** (b+4): "humankind entered the holes before them" – the people of the land hiding in caves
   (1 Sam 13:6, 14:11; Isa 2:19); SB turned the line into the host's "cave-bird" bodies.

**For the ancient mind.**
1. **A Babylonian story at the Hittite court:** two Middle Babylonian copies at Ḫattuša, and a Hittite translation
   (cited in eBL's SB notes for the pin-test, the three years and the advice to stay home): the legend of an Akkadian
   king's failure was school literature for a foreign empire's scribes.
2. **The host as a diplomatic power:** six kings and six hundred men send messengers to Narām-Sîn and introduce
   themselves in the first person (c+10–c+13) – the enemy behaves like a kingdom, not a horde.
3. **Brotherhood among kings** (b+3): Enmerkar was "not my brother" and "did not take my hand" – the language of royal
   alliance (cf. the Amarna letters' "brother") explains why the old king is not blessed.

## Open decisions
1. MBA.b+8 *zummû* `*שְׁכוֹל*` (uncertain word; Gurney's *ṣupur* "fingernail" noted).
2. MBA.b+16 *šumšu lū zikir* `שמו יהי לְזֵכֶר` – "let its name be (only) a mention" vs Foster's "be spoken of"; kept
   ambiguous.
3. MBA.c+13 *qinnāt tâmti* `קִנּ[וֹת?] [ה]ים` – *qinnu* "nest; clan" kept literal (`קֵן`, Etana); *zīmiš* `*כְּזִיו*?`.
4. MBA.b+14: the tablet writes ŠEŠ-MEŠ-*šu* ("his brothers"), eBL normalizes *athêšu*; the Hebrew follows N
   (`שותפיו`).
5. MBB is too broken for a story; its renderings follow the corpus words (*ḫurru*, *erēbu* Š, *aṣû* Š, *rakābu* Š).

## Proposals for the corpus renderings
| Source | Hebrew (exact) | Tag | Notes | Lines |
|---|---|---|---|---|
| *šeššet šarrū šunu athû šūpû … u šediš meʾāt ummānšunu* | `שישה מלכים הם, שותפים, מו[פיעים], ושש מאות – חילם.` (b+7); `[שישה] מלכים הם, שותפים, מופיעים [ביופי?], ושש מאות – חילם.` (b+25); `"שישה מלכים אנחנו, שותפים, [מופיעים] ביופי, ושש מאות – חילנו.` (c+11) | – | the MB refrain; the SB words copied | MBA b+7, b+25, c+11 |
| *ea [bēlu pâšu] īpušam-ma* / *izzakar ana ilī athêšu* | `אֵאָה, [האדון], פתח את [פי]ו?,` / `דיבר אל האלים, שותפיו:` | – | SB 99–100 without *iqabbi* | MBA b+13–14 |
| *umma šunū-ma* / *umma šū-ma* | `[לאמור – ה]ם:` / `[ל]אמור – הוא:` | – | on the model of SB 79 | MBA c+10, c+17 |
| *awīlūtu īrub ana pānīšunu ana ḫurrī* / *ālu … ul ālu* / *qaqqaru … ul qaqqaru* | `האנושות נכנסה – לפניהם – אל החורים;` / `עיר – לפניהם – לא עיר;` / `קרקע – לפני[הם] – לא קרקע.` | [cognate] *ḫurru* | | MBA b+4–6 |
| *ḫurru* | `חוֹר` | [cognate] | (SB 31 `ציפור־החור`) | MBA b+4, MBB a+3 |
| *rittu* | `כַּף` | – | *qātu* = `יָד` | MBA b+3 |
| *gihlû* (= *kiḫullû*) | `אֵבֶל` | – | | MBA b+10 |
| *šibṭu*; *maḫīru* | `מַכָּה`; `מְחִיר` | [cognate] *maḫīru* | | MBA b+11 |
| *šapāru*; *ṭarādu* | `שָׁלַח`; `שִׁלַּח` | – | Qal / Piel kept apart | MBA b+8, b+12; SB 96 |
| *šīmta šiāmu* | `גָּזַר גּוֹרָל` (`את גורלותיו גְּזֹרוּ`) | – | = Sum. *nam tar* | MBA b+15 |
| *zikru* | `זֵכֶר` | [cognate] | Etana | MBA b+16 |
| *palāḫu* (as before a god); *šukênu* | `יָרֵא` (`יִירְאוּ`); `הִשְׁתַּחֲוָה` | – | general *palāḫu* `פָּחַד` (SB 157) | MBA b+17–18 |
| *libittu*; *dūru* | `לְבֵנָה` [cognate]; `חוֹמָה` | | | MBA b+17–18 |
| *šalālu šallata* | `שָׁלַל שָׁלָל` | [cognate] | | MBA b+20 |
| *aklu*; *bulluṭ libbi* | `לֶחֶם`; `מְחַיֵּה לֵב` | – | | MBA b+21 |
| *eṣēnu*; *nipšu*; *šīrāš* | `הֵרִיחַ`; `רֵיחַ`; `סֹבֶא` | – | Ludlul *sīrāšu* `סובא` | MBA b+22 |
| *nâlu*; *šittu*; *šeʾû* | `שָׁכַב`; `שֵׁנָה`; `בִּקֵּשׁ` | – | | MBA b+24 |
| *rabû* D; *kibru* | `גִּדֵּל`; `קָצֶה` (pl. `קְצָווֹת`) | – | `שָׂפָה` never | MBA b+26–27, d+7 |
| *ṣâlu* | `רָב` | – | *ṣāltu* `רִיב` | MBA c+4 |
| *kāru*; *abullu* | `נָמָל`; `שַׁעַר` | – | | MBA c+8–9 |
| *qinnu* (clan) | `קֵן` (`קִנּוֹת`) | – | literal | MBA c+13 |
| *aššatu* | `אִשָּׁה` | – | | MBA d+2 |
| *erēbu* Š; *rakābu* Š | `הִכְנִיס`; `הִרְכִּיב` | – | | MBB a+2, a+4, a+10 |
