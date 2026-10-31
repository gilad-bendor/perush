# Part CL1: the Cuthaean Legend, Standard Babylonian 1–93 (Round 5, run 5), 2026-10-31

Translator: one sub-agent (to be resumed for CL2–CL4). File: `annotated-SB.rtl.md` (header paragraphs + entries
`SB.1`–`SB.93`, seven sections).

## Progress and passes
- Read: guidelines (§1, §5.2 ★, §6, §6.7, §6.8, §7.2), the Cuthaean and Etana briefs, `corpus.md`, `renderings.md`
  §0, §2, §5, §10.1–§10.4, §11 in full, `project.md`; models: Etana `annotated-II.rtl.md`, Sargon `annotated.rtl.md`;
  Gilgameš I 24–28 (copied for SB.1–3).
- Data: `kings_tools.py data CL SB.1 SB.93` and `pars CL SB.1 SB.93` (scratch); the eBL glossary for the rare words
  (*luṭû*, *guḫšû*, *sehû*, *namzāqu*, *rēdû*, *ṣillû*).
- Drafted unvocalized and plene, transliteration as `` `@` `` + `fill CL` (93 lines filled), saved section by section
  (1–30, 31–62, 63–93). Every new Hebrew word grepped first (`harmonize_survey.py parse/words/heb`). Every Bible verse
  printed before quoting (38 verses).
- Pass (a) fidelity: every word against N and the ATF of each manuscript (the partial-restoration rule: SB.1–2 are
  unbracketed although N brackets them, because NinNAQuo1 and SipNBSch1 preserve them; partial brackets in SB.5
  `א[ב]י`, 9, 12, 22, 25, 46, 54, 65–66, 68); every content word accounted for; additions in `( )` (14, 31, 35, 63,
  72, and the KIMIN "ditto" of 86–87); N's round-bracketed words not translated (27 *u*, 28 *ināru*, 39 *šumša*, 58
  *tâmti*) and named in the notes.
- Pass (b) consistency: the formulas copied byte for byte (11/75, 12–13/76–77, 14/72 (+63), 15/73, 16/74, 79/89,
  84–87, 65 ↔ 70–71); renderings and the earlier corpora checked for each lemma.
- Pass (c) Hebrew aloud: vocalized the words that read otherwise unvocalized (`רָכַב`, `נָגַע?`, `שִׂכְלוֹ`,
  `נִשְׁקוֹ`, `שֵׁם`, `בָּנוּ`, `קָנוּ`, `רָכְבוּ`, `בְּקֶרֶב`, `הַיַּמִּים`, `יֶשְׁנוֹ`, `רָעִים`, `שַׂמְתִּי`,
  `אָשִׂים`, `מַפְתֵּחַ`, `טַעְמוֹ`, `מְשַׁלֵּם`, `מְצַוֵּה`, `בִּנְסֹחַ`, `בְּלֶכֶת`, the imperatives `פְּתַח`,
  `קְרָא`, `גַּע`, `דְּקֹר`).
- Checks: `kings_tools.py verify CL` – 93 entries; **one problem, a tool false positive** (SB.60: the name `מָגָן`
  Magan, which renderings §11.1 and TRAPS require, matches the `גן` gate of *kirû* through the prefix class `מ`; every
  Hebrew spelling of Magan is `מגן`; the coordinator should exempt `מגן` from that gate or license it by *magan*);
  "same transliteration, different Hebrew" SB.16/SB.74 is justified (*ukīn* is 1st and 3rd sg.; 16 is the Enmerkar
  copy in the 3rd person, like 14–15). `check_bible_quotes.py 4-אגדת-כותה/*.md` – 0 problems.

### Parallels index (CL1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| SB.1 | *tupšenna pitē-ma narâ šitassi* | את תיבת־הלוחות פְּתַח, ואת המצבה – קְרָא בקול! | `וְהָיְתָה עִמּוֹ וְקָרָא בוֹ כָּל יְמֵי חַיָּיו לְמַעַן יִלְמַד` (דברים יז:יט); `וְכָתַבְתָּ עַל הָאֲבָנִים אֶת כָּל דִּבְרֵי הַתּוֹרָה הַזֹּאת בַּאֵר הֵיטֵב` (דברים כז:ח) | [equivalent] / [divergence] | A stela of a former king read by a later one; the Bible's king reads a law given by God. The opening = Gilgameš I 24–27 (Hebrew copied). |
| SB.4 | *šadâ īmid* | אל ההר נשען | `הִנְּךָ שֹׁכֵב עִם אֲבֹתֶיךָ` (דברים לא:טז) | [equivalent] | Two euphemisms for a king's death; different images. |
| SB.6 | *mumaʾʾir māti* | מְצַוֵּה הארץ | `נָגִיד וּמְצַוֵּה לְאֻמִּים` (ישעיהו נה:ד) | [equivalent] | The ruler as "commander"; one root with *umaʾʾir* `ציוויתי` (14, 63, 72). |
| SB.11, 75 | *ašāl-ma ilī rabûti* | שאלתי את האלים הגדולים, | `וַיִּשְׁאַל דָּוִד בַּיהוָה לֵאמֹר הַאֵלֵךְ` (שמואל א כג:ב); `וַיִּשְׁאַל שָׁאוּל בֵּאלֹהִים הַאֵרֵד אַחֲרֵי פְלִשְׁתִּים … וְלֹא עָנָהוּ` (שמואל א יד:לז); `וַיִּשְׁאַל שָׁאוּל בַּיהוָה וְלֹא עָנָהוּ` (שמואל א כח:ו) | [cognate] | *šâlu* / `שָׁאַל`: the same verb for asking the god before battle; and in 78 the answer is "no". |
| SB.14, 72 | *mārī bārî* | בני הבוחן | `וַיֵּצְאוּ בְנֵי הַנְּבִיאִים` (מלכים ב ב:ג) | [equivalent] | "Sons of" a profession = its guild; kept literal. |
| SB.16, 74 | *guḫšî ellūti* | מתקני־קנה טהורים | `מִזְבֵּחַ` (reserved) | [divergence] | A reed stand loaded with bread, not an altar of slaughter: `מִזְבֵּחַ` would manufacture a parallel. |
| SB.19 | *urruqu? zīma* | יְרַקְרַק? זִיו | `וְנֶהֶפְכוּ כָל פָּנִים לְיֵרָקוֹן` (ירמיהו ל:ו); `זִיוֹהִי שְׁנוֹהִי` (דניאל ה:ו) | [cognate] | Faces "greening" with fear; *zīmu* ~ Aram. `זִיו`. Reading uncertain (eBL). |
| SB.20 | *idâš?* | יָדוּשׁ? | `עַל דּוּשָׁם בַּחֲרֻצוֹת הַבַּרְזֶל אֶת הַגִּלְעָד` (עמוס א:ג) | [cognate] | Threshing as war. |
| SB.25 | *eṭem perʾi perʾīšu* | אִט צאצאי צאצאיו | `פֹּקֵד עֲוֹן אָבוֹת עַל בָּנִים וְעַל בְּנֵי בָנִים` (שמות לד:ז); `זַרְעָם נָכוֹן לִפְנֵיהֶם עִמָּם וְצֶאֱצָאֵיהֶם לְעֵינֵיהֶם` (איוב כא:ח) | [divergence] | Punishment across generations – here of the generations of *ghosts*, in the netherworld. |
| SB.27 | *mê dalḫūti … mê zakûti* | מים דלוחים … מים זכים | `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ` (יחזקאל לב:ב); `וּמִשְׁקַע מַיִם תִּשְׁתּוּ וְאֵת הַנּוֹתָרִים בְּרַגְלֵיכֶם תִּרְפֹּשׂוּן` (יחזקאל לד:יח) | [cognate] | *dalḫu* / `דלח`, *zakû* / `זך`: the punishment of the dead without a "name"; Ezek 34 opposes clear and fouled water in an oracle on bad shepherds (cf. SB.92). |
| SB.29 | *ina narê ul išṭur* | במצבה לא כתב | `וַיִּכְתָּב שָׁם עַל הָאֲבָנִים` (יהושע ח:לב); `כָתְבָהּ עַל לוּחַ אִתָּם … וּתְהִי לְיוֹם אַחֲרוֹן לָעַד` (ישעיהו ל:ח) | [equivalent] | Writing on stone as testimony for later generations. |
| SB.30 | *šuma ul ušēṣi* | שֵׁם לא הוציא | `וְהוֹצִא עָלֶיהָ שֵׁם רָע` (דברים כב:יד); `אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי; וַיִּקְרָא לַמַּצֶּבֶת עַל שְׁמוֹ` (שמואל ב יח:יח) | [equivalent] | The identical idiom "bring out a name" (Hebrew for a bad name); the stela instead of a son carries the name. |
| SB.31 | *iṣṣūr ḫurri*; *arēbī* | ציפור־החור; עורבים | `הִנֵּה עִבְרִים יֹצְאִים מִן הַחֹרִים` (שמואל א יד:יא); `וַיְשַׁלַּח אֶת הָעֹרֵב` (בראשית ח:ז) | [cognate] | *ḫurru* / `חוֹר`, *ārib* / `עֹרֵב`. |
| SB.31–36 | the created host | צבא … בָּנוּ אותם האלים | `הַנְּפִלִים הָיוּ בָאָרֶץ` (בראשית ו:ד) | [divergence] | Beings neither human nor divine; here created on purpose by the great gods, suckled by Tiāmat, beautified by Bēlet-ilī; `נְפִילִים` reserved. |
| SB.32 | *banû* | בָּנוּ | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | [equivalent] | The creation verb `בָּנָה` (`בָּרָא` reserved). |
| SB.34 | *ušēniq* | היניקה | `הֵינִיקָה בָנִים שָׂרָה` (בראשית כא:ז) | [cognate] | Tiāmat as wet-nurse (Tiāmat ~ `תְּהוֹם`, guidelines §6.7). |
| SB.36 | *irtašû minâti* | קָנוּ מידות | `אַנְשֵׁי מִדּוֹת` (במדבר יג:לב); `וְשָׁם רָאִינוּ אֶת הַנְּפִילִים בְּנֵי עֲנָק` (במדבר יג:לג) | [equivalent] | Our proposal: a people of great stature, found by scouts (cf. SB.63–69). |
| SB.48 | *imḫaṣū šaparšun* | ומחצו את כסליהם | `סָפַקְתִּי עַל יָרֵךְ` (ירמיהו לא:יח); `לָכֵן סְפֹק אֶל יָרֵךְ` (יחזקאל כא:יז) | [equivalent] | Striking the thigh in dismay (our proposal). |
| SB.50–58 | *sapāḫu* (G, N) | פיזרו / נתפזרה | `וּמִשָּׁם הֱפִיצָם יְהוָה עַל פְּנֵי כָּל הָאָרֶץ` (בראשית יא:ט); `עַם אֶחָד מְפֻזָּר וּמְפֹרָד` (אסתר ג:ח) | [equivalent] / [divergence] | The verb of scattering peoples; `פּוּץ` / `הֵפִיץ` reserved → `פִּזֵּר`. In Gen 11 God scatters one people; here a god-created host scatters land after land. |
| SB.59 | *ittadû ana nāri* | השליכו אל הנהר | `כָּל הַבֵּן הַיִּלּוֹד הַיְאֹרָה תַּשְׁלִיכֻהוּ` (שמות א:כב) | [equivalent] | Casting into the river as killing (*nadû* = `הִשְׁלִיךְ`; `יְאֹר` reserved). |
| SB.66 | *šumma dāmū uṣûni … amēlūtu šunu* | אם דם יצא – כמונו, אנושות הם | `כִּי הַדָּם הוּא הַנָּפֶשׁ` (דברים יב:כג) | [equivalent] | Blood as the mark of (human) life (our proposal). |
| SB.68 | *rābiṣu* | רוֹבֵץ | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] | The lurking demon (wisdom corpus precedent). |
| SB.68 | *šipir enlil* | מלאכת אֶנְלִיל | (Gen 2:2–3 `מְלַאכְתּוֹ`, the corpus rule for *šipru*) | [equivalent] | The host is a god's "work". |
| SB.67 | *šēdu* | שֵׁדוּ | `יִזְבְּחוּ לַשֵּׁדִים לֹא אֱלֹהַ` (דברים לב:יז) | [divergence] | Transliterated in a demon list: `שֵׁד` is not produced. |
| SB.69 | *ṭēnšu utirram* | השיב אליי את טַעְמוֹ | `וַהֲשִׁבֵנִי דָּבָר` (בראשית לז:יד); `וַיָּשִׁיבוּ אֹתָם דָּבָר` (במדבר יג:כו) | [cognate] / [equivalent] | *târu* / `שׁוּב`; "bring back word" from a reconnaissance, as the spies. |
| SB.73 | *sebet … puḫādī alput* | שבעה אל פני שבעה טלאים נגעתי | `שָׁאַל בַּתְּרָפִים רָאָה בַּכָּבֵד` (יחזקאל כא:כו) | [equivalent] | The king of Babylon inspecting the liver before war – the Bible's only mention of extispicy. |
| SB.78 | *namzāq ilī … ul iddinam* | מַפְתֵּחַ האלים … לא נתן לי | `וְלֹא עָנָהוּ יְהוָה גַּם בַּחֲלֹמוֹת גַּם בָּאוּרִים גַּם בַּנְּבִיאִם` (שמואל א כח:ו) | [equivalent] | No consent by omen or (*zāqīqu*) by dream. |
| SB.79, 89 | *kīam aqbi ana libbīya* | כך אמרתי אל לבי | `וַיֹּאמֶר יְהוָה אֶל לִבּוֹ` (בראשית ח:כא); `כִּי אָמַר בְּכֹחַ יָדִי עָשִׂיתִי וּבְחָכְמָתִי כִּי נְבֻנוֹתִי` (ישעיהו י:יג) | [equivalent] | The same idiom of inner decision; the proud king's self-talk. |
| SB.80–81 | *ayyu nēšu bīra ibri; ayyu barbaru išāl šāʾilta* | איזה אריה בחן בחינה? איזה זאב שאל שׁוֹאֶלֶת? | `קֹסֵם קְסָמִים מְעוֹנֵן וּמְנַחֵשׁ וּמְכַשֵּׁף` (דברים יח:י); `כִּי חַטַּאת קֶסֶם מֶרִי` (שמואל א טו:כג); `בַּקְּשׁוּ לִי אֵשֶׁת בַּעֲלַת אוֹב` (שמואל א כח:ז) | [divergence] | In the Bible divination is forbidden and rebellion is "like divination"; here rebellion is the refusal of divination. Saul goes to the medium when God is silent; Narām-Sîn refuses the *šāʾiltu* when the gods say no. |
| SB.82 | *lullik … ina migir libbīya* | אלכה … ברצון לבי | `הַאֵלֵךְ עַל רָמֹת גִּלְעָד לַמִּלְחָמָה אִם אֶחְדָּל; וַיֹּאמְרוּ עֲלֵה` (מלכים א כב:ו) | [divergence] | There the prophets permit; here the king permits himself. |
| SB.83 | *luddi ša ilim-ma* | ואשליכה את אשר לאל | `וְנַשְׁלִיכָה מִמֶּנּוּ עֲבֹתֵימוֹ` (תהלים ב:ג) | [equivalent] | Kings throwing off the god's bonds, with the same verb (*nadû* / `הִשְׁלִיךְ`) (our proposal). |
| SB.85 | *ištēn balṭu ul ittūra* | אחד חי לא שב | `לֹא נִשְׁאַר בָּהֶם עַד אֶחָד` (שמות יד:כח); `כִּי תֵצֵא לַמִּלְחָמָה עַל אֹיְבֶךָ … לֹא תִירָא מֵהֶם` (דברים כ:א) | [equivalent] / [divergence] | A whole army lost; the war law promises God's presence, here the king goes against the gods. |
| SB.90 | *ana palê mīnâ ēzib* | לשלטון – מה עזבתי? | `וְעָזְבוּ לַאֲחֵרִים חֵילָם` (תהלים מט:יא) | [cognate] | *ezēbu* / `עָזַב`: what one leaves behind. |
| SB.91 | *šarru lā mušallimu* | מלך שאינו מְשַׁלֵּם את ארצו | `וְשִׁלַּם נְוַת צִדְקֶךָ` (איוב ח:ו) | [cognate] | *šullumu* / `שִׁלֵּם` "keep / make whole". |
| SB.92 | *rēʾû lā mušallimu ummānīšu* | ורועה שאינו מְשַׁלֵּם את חילו | `אַתָּה תִרְעֶה אֶת עַמִּי` (שמואל ב ה:ב); `הוֹי רֹעֵי יִשְׂרָאֵל אֲשֶׁר הָיוּ רֹעִים אוֹתָם` (יחזקאל לד:ב) | [equivalent] | The king as shepherd who failed his flock. |

## Key findings
**For the Bible.**
1. **The king who asks the god before battle** (11, 72–78): *šâlu* is the cognate of `שָׁאַל` in exactly the Bible's
   idiom (`וַיִּשְׁאַל דָּוִד בַּיהוָה … הַאֵלֵךְ`, 1 Sam 23:2; Saul unanswered, 1 Sam 14:37, 28:6). The method differs
   (the liver of lambs; Ezek 21:26 is the only biblical mention of it), and the outcome too: the gods answer "no", and
   the king defies them. The defiance speech (80–83) reverses the biblical logic: in 1 Sam 15:23 rebellion is "like
   the sin of divination"; here rebellion *is* the rejection of divination.
2. **The scattering** (50–58): *sapāḫu* is the Akkadian verb of Gen 11:8–9's scattering (`הֱפִיצָם`). Rendered
   `פִּזֵּר` because `פּוּץ` / `הֵפִיץ` is reserved; [equivalent] with the reversal noted: a god-created host scatters
   land after land, in a "staircase" chain to the end of the world (Dilmun, Magan, Meluḫḫa).
3. **"If blood comes out, they are humans like us"** (66–71): a test of humanity by blood; the reconnaissance that
   "brings back word" (`השיב … טַעְמוֹ` ↔ `וַהֲשִׁבֵנִי דָּבָר`, Gen 37:14; `וַיָּשִׁיבוּ אֹתָם דָּבָר`, Num 13:26) and
   the host's "dimensions" (*minâti* `מידות` ↔ `אַנְשֵׁי מִדּוֹת`, Num 13:32–33, where the giants are also `נְפִילִים`)
   make the Numbers 13 scene the closest biblical frame (our proposal).
4. **A name instead of a son** (29–30): *šuma šūṣû* = `הוֹצִיא שֵׁם` (Deut 22:14, same idiom); the stela carries the
   name, as Absalom's `מַצֶּבֶת` "because I have no son to keep my name" (2 Sam 18:18). The king without a written name
   is punished in his ghosts, who drink muddy water (27: *dalḫu* ~ `דלח` [cognate], *zakû* ~ `זך`).
5. **Echoes not manufactured:** `מִזְבֵּחַ` (*guḫšû* is a reed stand), `נְפִילִים`, `שֵׁד` (*šēdu* transliterated),
   `קֹסֵם` / `אוֹב`, `הֵפִיץ`, `טֶרֶם`, `בָּרָא` stay in the apparatus. Foster's "holy" (*ellu* "pure"), "destroyed"
   (58: the same *ispuhū* as 56–57), "Stab" (*lapātu* "touch") and "their mother" (*šassūru* "womb-goddess") were
   corrected against the Akkadian.

**For the ancient mind.**
1. **One verb, two tests:** *lapātu* "to touch" is the technical verb of extispicy (the diviner "touches" the lamb) and
   the verb of the pin-test (65, 70). Keeping `נָגַע` in both shows how the king tests the enemy and the gods with the
   same gesture – the body's blood and the lamb's liver are both "read".
2. **The enemy as the gods' creation** (31–35, 68): the strange host is "built" by the great gods, suckled by Tiāmat,
   beautified by Bēlet-ilī, "the work of Enlil"; their father's name is "Anu-is-our-creator". Evil is inside the divine
   order – which is why the king may not resist it on his own (the lesson of CL2).
3. **The dead depend on the living's memory:** Enmerkar, who left no stela, is sentenced with "the ghosts of his family,
   his offspring and his offspring's offspring" to foul water – the netherworld fate of those no one remembers (cf.
   Ištar's Descent 33, Gilgameš XII 147). The *narû* genre is thus a way to secure one's afterlife.
4. **The king's despair** (88): five verbs of collapse in one line (*essehi enneši akkala āšuš uštānih*), echoed by the
   final instruction's prohibitive (156 *lā tessehhi lā tennešši*). The sexagesimal counts of the lost armies (2 × 60
   thousand, 90 thousand, 60,700) are kept.

## Open decisions (minor ones decided)
1. **Tool:** the `גן` gate (*kirû*) flags `מָגָן` (Magan) in SB.60 – exempt `מגן` or license it by *magan* (the
   coordinator's file; not edited).
2. **Kutha:** `כּוּתָה` vs `כּוּת` – not in CL1 (SB 1–93 has no Kutha); for CL2.
3. **Anunītu** = `אֲנוּנִיתוּ` (eBL's normalization has one *n*), revising the draft `אַנּוּנִיתוּ` of §11.1 – decided.
4. **Subartu** = `סוּבַּרְתּוּ` (normalization *subartu*, with *s*), revising the draft `שׁוּבַּרְתּוּ?` – decided.
5. **SB.79 *umma lū anākū-ma*** = `לאמור – אני עצמי:` (the *lū* as emphasis on the pronoun, not `אָכֵן`): decided; a
   reviewer may prefer `לאמור: אכן אני –`.
6. **SB.29 *pagrī u pūtī*** – rendered literally and italicized (`*גוויתי ומצחי*`), function uncertain (apposition to
   "to me"?).
7. **SB.88 *akkala*** – eBL's tentative *kalû* N, `*נעצרתי*` (italic).
8. **SB.23 *šalamtaš*** = `כְּ[גוּפָה?]` – the Gilgameš / Ludlul word `נְבֵלָה` is blocked in this corpus by the
   `בלל` string gate (`נבלה`, Gen 11:7); `פֶּגֶר` is *pagru*'s cognate. Proposed: *šalamtu* = `גּוּפָה` in this corpus.

## Proposals for the corpus renderings
### Formulas of §11.3 (fixed at their first copy; to be enforced by FORMULAS)
| Source | Hebrew (exact) | Lines | Notes |
|---|---|---|---|
| *ašāl-ma ilī rabûti* | `שאלתי את האלים הגדולים,` | 75 (111); 11 in the 3rd person `[שאל?] את האלים הגדולים,` | *šâlu* = `שָׁאַל` [cognate]; comma (the gods' list follows). |
| *ištar ilaba zababa anunītu* / *šullat ḫaniš šamaš qurāda* | `אִשְׁתַּר, אִילַבָּה, זַבַּבָּה, אֲנוּנִיתוּ,` / `שׁוּלַּת, חָנִישׁ, שַׁמַשׁ הַגִּבּוֹר.` | 12–13, 76–77 (112–113) | vocalized in every copy; **Anunītu revised to `אֲנוּנִיתוּ`**. |
| *alsi mārī bārî umaʾʾir* | `הצעקתי את בני הבוחן, ציוויתי (עליהם),` | 72 (108); 14 `[הצעיק? את בני הבוחן,] ציווה (עליהם),`; 63 `הצעקתי רַגְלִי, ציוויתי (עליו),` | *šasû* "summon" = `הִצְעִיק`; *wuʾʾuru* = `צִוָּה` (draft row revised: `צִוָּה`, not `הִפְקִיד`, because *mumaʾʾiru* 6 = `מְצַוֶּה`, Isa 55:4). |
| *sebet ana pān sebet puḫādī alput* | `שבעה אל פני שבעה טלאים נגעתי,` | 73 (109); 15 `[שבעה אל פני שבעה] טלאים נָגַע?,` | *lapātu* = `נָגַע` (also the pin-test 65, 70); *puḫādu* = `טָלֶה`. |
| *ukīn guḫšî ellūti* | `כוננתי מתקני־קנה טהורים.` | 74 (110); 16 `[כונן] מתקני־קנה טהורים.` | *guḫšû* = `מִתְקַן־קָנֶה` (`מִזְבֵּחַ` reserved; `דּוּכָן` = *parakku*, `מַעֲמָד` = Maqlû's *paṭīru*). |
| *kīam aqbi ana libbīya umma lū anākū-ma* | `כך אמרתי אל לבי, לאמור – אני עצמי:` | 79, 89 (124) | *umma* = `לֵאמֹר` (Nergal and Ereškigal, Enūma eliš). Revises the draft `"אני בעצמי …"`. |
| *X šattu ina kašādi* / *… ummāna ušēṣī-ma ina libbīšunu ištēn balṭu ul ittūra* | `בהגיע השנה הראשונה,` / `שני שישים אלף חיל הוצאתי – ומתוכם אחד חי לא שב.`; 86 `בהגיע השנה השנית – תשעים אלף (חיל הוצאתי – ומתוכם אחד חי לא שב).`; 87 `בהגיע השנה השלישית – שישים אלף ושבע מאות (חיל הוצאתי – ומתוכם אחד חי לא שב).` | 84–87 | the KIMIN "ditto" of 86–87 in `( )`; the sexagesimal number kept. |
| *ina luṭê luput ina ṣillê šuḫul-ma* ↔ *ina luṭê alput* / *ina ṣillê ašḫul-ma dāmū ittaṣûni* | `"בפג[יון] גַּע, במחט דְּקֹר:` ↔ `"ב[פגיון] נגעתי,` / `במחט דקרתי – ודם יצא."` | 65 ↔ 70–71 | brackets per manuscript; same words and order. |
| *šumma dāmū uṣûni kī nâšī-ma amēlūtu šunu* / *šumma dāmū lā uṣûni šēdu namtaru* / *utukku rābiṣu lemnūtu šipir enlil šunu* | `[א]ם דם יצא – כמונו, אנושות הם;` / `[אם] דם לא יצא – שֵׁדוּ, נַמְתָּר,` / `[אוּטוּ]כּוּ, רוֹבֵץ – רָעִים, מלאכת אֶנְלִיל הם."` | 66–68 | demons transliterated; *šipru* = `מְלָאכָה`. |
| *anāku essehi enneši* (OB I b+9) / *lā tessehhi lā tennešši* (SB 156) | *sehû* N = `נִסְעַר`, *ešû* N = `נָבוֹךְ` (SB.88 `נסערתי, נבוכותי, *נעצרתי*, דאגתי, התייגעתי.`) | 88 | for CL2 (156) and CL4 (OB I b+9–b+10). |
| *ana palê mīnâ ēzib* / *anāku šarru lā mušallimu mātīšu* / *u rēʾû lā mušallimu ummānīšu* / *kī luštakkan-ma pagrī u pūtī lušēṣi* | `"לשלטון – מה עזבתי?` / `אני – מלך שאינו מְשַׁלֵּם את ארצו,` / `ורועה שאינו מְשַׁלֵּם את חילו.` / `איך אָשִׂים – ואת גוויתי ואת מצחי אוציא?"` | 90–93 | for OB I b+11–b+16 (OB *nišīšu* "his people" ≠ SB *ummānīšu* `חילו`; OB *ramānī* "myself" ≠ *pūtī* `מצחי`). |

### Names (all new to the corpus except where marked)
`נָרָם־סִין` ★; `סַרְגּוֹן` (project 2); `אֶנְמֶרְכַּר` (project 1); `אִשְׁתַּר` ★, `אִילַבָּה`, `זַבַּבָּה`, `אֲנוּנִיתוּ`,
`שׁוּלַּת`, `חָנִישׁ`, `שַׁמַשׁ` ★ `הַגִּבּוֹר`; `הָאֲנוּנָּכִּי`; `תִּיאָמַת`; `בֵּלֶת־אִילִי` ★; `אֶנְלִיל`; the host:
`אָנוּ־בָּנִינִי` (Anu-banini; "Anu is our creator"), `מֵלִילִי`, `מֵמַנְדּוּח`, `מֵדוּדוּ`, (third brother broken),
`תַּרְתַּדָּדָה`, `בַּלְדַּחְדַּח`, `אַחוּדַנָדִיח`, `חוּרּוּכִּידוּ`; places: `פּוּרוּשְׁחַנְדַּר`, `פּוּחְלוּ`,
`פּוּרַנְשׁוּ`, `אַשְׁחוּחוּ`, `אַחְחָחוּ`, `לוּבּוּדוּ`, `לוּלְבּוּ`, `אֻמַּן־מַנְדָּה`, `כַּרַנָא`, `שׁוּבַּת־אֶנְלִיל`
(always vocalized: `שובת`), `סוּבַּרְתּוּ`, `גּוּטִיּוּם`, `עֵילָם`, `דִּלְמוּן`, `מָגָן` ★, `מֵלוּחָה` ★. Demons:
`שֵׁדוּ` (always vocalized), `נַמְתָּר`, `אוּטוּכּוּ`, `רוֹבֵץ`.

### Key terms
| Source | Hebrew | Tag | Notes | Lines |
|---|---|---|---|---|
| *narû* | `מַצֵּבָה` | – | as the law corpus and Gilgameš (gated) | 1, 29 |
| *tupšinnu*; *šitassi* | `תיבת־הלוחות`; `קְרָא בקול` | – | Gilgameš I 24–27 copied | 1 |
| *ummānu* (army), pl. *ummānātu* | `חַיִל`, `חילותיהם` | – | Gilgameš I 33, Advice to a Prince, LH (`הָמוֹן` of Gilgameš = a crowd) | 28, 38, 61, 85, 92 |
| *ṣābu* | `צָבָא` | [cognate] | law corpus | 31 |
| *rēdû* | `רַגְלִי` (always vocalized) | – | `וַיִּפֹּל מִיִּשְׂרָאֵל שְׁלֹשִׁים אֶלֶף רַגְלִי` (שמואל א ד:י) | 48, 63, 69 |
| *bārû*; *bīru*; *barû* | `הַבּוֹחֵן`; `בְּחִינָה`; `בָּחַן` | – | wisdom corpus; *mārū bārî* `בני הבוחן` | 14, 17, 72, 80 |
| *šâlu*; *šāʾiltu* | `שָׁאַל`; `שׁוֹאֶלֶת` | [cognate] | | 11, 75, 81 |
| *šasû* "summon" / Gt "read aloud" | `הִצְעִיק` / `קְרָא בקול` | – | split by sense, noted | 1, 14, 63, 72 |
| *wuʾʾuru*; *mumaʾʾiru* | `צִוָּה`; `מְצַוֶּה` | [equivalent] Isa 55:4 | | 6, 14, 63, 72 |
| *lapātu* | `נָגַע` | – | extispicy and the pin-test | 15, 65, 70, 73 |
| *sahālu*; *luṭû*; *ṣillû* | `דָּקַר`; `פִּגְיוֹן`; `מַחַט` | – | Maqlû `דקר` | 64–65, 70–71 |
| *guḫšû* | `מִתְקַן־קָנֶה` | [divergence] `מִזְבֵּחַ` | | 16, 74 |
| *puḫādu* | `טָלֶה` | – | EST | 15, 73 |
| *kânu* D; *ellu* | `כּוֹנֵן`; `טָהוֹר` | – | | 16, 47, 74 |
| *banû* IV / *banû* II D / *banûtu* | `בָּנָה` / `יִפָּה` / `יֹפִי` | – | the pun noted | 32–33, 35, 37 |
| *šassūru* | `אֵלַת־הָרֶחֶם` | – | Atra-ḫasīs | 35 |
| *enēqu* Š | `הֵינִיק` | [cognate] | | 34 |
| *eṭēlu*; *rašû*; *minītu* | `נעשה עלם`; `קָנָה`; `מִדָּה` | – | *eṭlu* `עֶלֶם` (Gilgameš) | 36 |
| *athû*; *šūpû* | `שֻׁתָּפִים`; `מוֹפִיעַ` | – | Ludlul `שותפיי` | 37 |
| *iṣṣūr ḫurri*; *ārib* | `צִפּוֹר־הַחוֹר`; `עוֹרֵב` | [cognate] | love songs; flood | 31 |
| *amēlūtu* | `אֱנוֹשׁוּת` | – | Gilgameš, Maqlû | 31, 66 |
| *pagru*; *pūtu* | `גְּוִיָּה`; `מֵצַח` | – | `פֶּגֶר` = *pagru*'s cognate, only in a note | 21, 29, 31, 93 |
| *šalamtu* | `גּוּפָה` | – | `נבלה` blocked by the `בלל` gate | 23 |
| *eṭemmu*; *kimtu*; *perʾu* | `אִט`; `מִשְׁפָּחָה`; `צֶאֱצָא` | – | **`זֶרַע` kept for *zēru*** (CL2: Ea's "seed of mankind") | 24–26 |
| *purussû*; *dīnu*; *marṣu* (verdict) | `גְּזֵרָה`; `דִּין`; `קָשֶׁה` | – | | 23–24 |
| *dalḫu*; *zakû* | `דָּלוּחַ`; `זַךְ` | [cognate] | Ištar's Descent, Gilgameš XII | 27 |
| *igigallu* | `שֵׂכֶל` | – | `תְּבוּנָה` = *ḫasīsu* (Etana), `בִּינָה` = *uznu* | 28 |
| *kakku*; *kamû*; *kašādu* | `נֶשֶׁק`; `אָסַר`; `הִגִּיעַ` / `הִשִּׂיג` (conquer) | – | | 28, 58, 84–87 |
| *ezēbu* | `עָזַב` | [cognate] | | 29, 90 |
| *šuma šūṣû* | `הוֹצִיא שֵׁם` | [equivalent] Deut 22:14 | | 30 |
| *karābu* | `בֵּרֵךְ` | – | gated | 30 |
| *sapāḫu* G / N | `פִּזֵּר` / `נִתְפַּזֵּר` | [equivalent] Gen 11:9 | `הֵפִיץ` reserved | 50–58 |
| *sanāqu* | `הִתְקָרֵב` | – | Gilgameš | 49, 56–57 |
| *pāṭu* | `תְּחוּם` | – | `גְּבוּל` = *itû* | 50 |
| *sapannu* | `שְׁפֵלָה` | – | Gilgameš `שפלת הים` | 58 |
| *nēberu*; *dâku* | `מַעְבָּר`; `הָרַג` | – | | 59 |
| *rēṣūtu*; *šakānu* N | `עֶזְרָה`; `הִתְיַצֵּב` (G `שָׂם`) | – | | 62, 64, 93 |
| *šapru*; *maḫāṣu* | `כֶּסֶל`; `מָחַץ` | – | | 48 |
| *ṣabātu* | `תָּפַס` | – | as Etana (*aḫāzu* also in the text, SB 170) | 48, 83 |
| *ṭēma turru* | `השיב טַעַם` | – | Nergal and Ereškigal precedent | 69 |
| *namzāqu*; *zāqīqu* | `מַפְתֵּחַ`; `מַשָּׁב` | – | | 78 |
| *nēšu*; *barbaru*; *ḫabbātu*; *migru* | `אַרְיֵה`; `זְאֵב`; `שׁוֹדֵד`; `רָצוֹן` | – | | 80–82 |
| *sehû* N; *ešû* N; *ašāšu*; *anāḫu* Štn | `נִסְעַר`; `נָבוֹךְ`; `דָּאַג`; `הִתְיַגֵּעַ` | – | | 88 |
| *palû*; *šullumu* | `שִׁלְטוֹן`; `שִׁלֵּם` (vocalized) | [cognate] | Job 8:6 | 90–92 |
| *rēʾû* | `רוֹעֶה` | [equivalent] | | 92 |
