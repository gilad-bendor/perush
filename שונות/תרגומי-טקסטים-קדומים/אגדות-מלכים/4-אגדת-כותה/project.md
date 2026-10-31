# Project 4: the Cuthaean Legend of Narām-Sîn (eBL L/1/12) – all five versions

Round 5, run 5 (`../../curated-translation-candidates.md`, "Round 5 plan", run 5), 2026-10-31. Coordinator: the run's
session (`Round5/Run5`); translators: sub-agents, one at a time, one translator resumed part by part (guidelines §5.2).

## Scope
The whole of eBL's edition of the *Cuthaean Legend* ("Narām-Sîn and the enemy hordes"), all five chapters, 345 labels:

| Key | eBL chapter | Folder (`../../sources/eBL/`) | Labels | Editors | Translation (rank 3) |
|---|---|---|---|---|---|
| OBI | Old Babylonian I | `Cuthaean-OB-I` | 74 | Mitto (ed.); Földi, Hätinen, Heinrich, Jiménez (rev.) | Foster |
| OBII | Old Babylonian II | `Cuthaean-OB-II` | 13 | the same | Foster |
| MBA | Middle Babylonian A (Ḫattuša) | `Cuthaean-MB-A` | 63 | the same | Foster |
| MBB | Middle Babylonian B (Ḫattuša) | `Cuthaean-MB-B` | 15 | the same | Foster |
| SB | Standard Babylonian (Nineveh, Sultantepe, Kiš …) | `Cuthaean-SB` | 180 | the same | Foster |

Base text: eBL (rank 1; the chapters fetched with `tools/ebl_fetch.py` on 2026-10-31, no empty **N:** lines).
Rank 3: Foster's English in eBL (read only after one's own reading). Rank 4: eBL's notes. Not available here:
Westenholz 1997 (*Legends of the Kings of Akkade*, the standard edition before eBL: a purchase; the user's rule, records
only), Gurney 1955, Haul 2009.

## Why it matters
- **The Bible:** a king who consults the omens, is refused, defies them ("which lion consulted the diviner?"), and is
  ruined; then obeys, and is told not to destroy the enemy (Deut 18:10–14, 1 Sam 28, 1 Sam 14:36–37, 1 Kgs 22,
  1 Sam 15). A host of strange beings "created by the great gods", suckled by Tiāmat (Gen 6:1–4?). Ea's speech on the
  gods' decision to destroy "the seed of mankind" by a deluge (Gen 6:7, 9:11–15). The curse of civil strife
  ("city against city, house against house; father … son, brother … brother", Isa 19:2, Mic 7:6) and the famine price
  (2 Kgs 6:25, 7:1). The stela as instruction to a future king (Deut 17:18–20; Josh 8:32), the counsel of
  submission and of returning good for evil (Prov 25:21–22; 1 Sam 24:18; Gen 50:15–21), "do your work in your wife's
  lap" (Deut 24:5; Qoh 9:9). Kutha and Nergal (2 Kgs 17:24, 30).
- **The soul of the ancients:** the *narû* genre (a fictive royal stela, "read it well"); the king's dilemma between
  the gods' signs and his own will; the testing of the strangers with a pin ("if blood comes out they are men like
  us"); the omen procedure (seven by seven lambs, reed altars, the gods of extispicy); a king's despair (*essehi
  enneši*), and the wisdom of passivity.

## Line numbering
eBL's labels, prefixed by the chapter key in the annotated files (`SB.80`, `OBI.a+3`); the clean translation shows
eBL's label under the version's heading. eBL's `Parallels:` field (`kings_tools.py pars CL …`, `data CL …`) links the
versions; ranges ("31-33") are linked line by line.

## Files
`annotated-<KEY>.rtl.md` (one per chapter), `translation--intro.rtl.md`, `translation.rtl.md` (built by
`../kings_tools.py build CL`), the translator's `project--<PART>.md`. Print stub `../../הדפסה/אגדות-מלכים/4-אגדת-כותה.rtl.md`.

## The plan of the parts (one translator, resumed after each merge; the coordinator merges proposals into
`../renderings.md` §11.6 between parts)
| Part | Lines | Why |
|---|---|---|
| CL1 | SB 1–93 | the fullest version first: the stela's opening, Enmerkar's failure, the host, the test with the pin, the omens and the defiance, the three lost years |
| CL2 | SB 94–180 | the plagues, Ea's speech, the New Year and the obedient omens, the Morning Star's oracle, the stela's instruction |
| CL3 | MB A, MB B | the Ḫattuša versions: copy SB's Hebrew where the Akkadian is the same |
| CL4 | OB I, OB II | the Old Babylonian versions (OB I is a different telling: Narām-Sîn speaks to the gods) |

## Open decisions
Each part's own list is in its section under "Parts" (minor ones decided by the translator; the coordinator's decisions in `../renderings.md` §11.6). Left for the lead: *gimillu* `חֶמְלָה` (CL2), *aggu* / *ezēzu* sharing the root זעם (CL4), *ešertu* `בֵּית־אֵל` (`מִקְדָּשׁ` gated to *eš₃*), *šapru* = `שָׁלִיחַ` as *mār šipri*.

## Progress
- 2026-10-31: project set up (tool key CL, renderings §11, brief `../translator-brief--cuthaean.md`).
- 2026-10-31: CL1–CL4 drafted by one translator (resumed part by part), three passes each, merged after each part; `verify CL --strict`: 345 entries, OK; `translation.rtl.md` built.

## Parts
The translator's part files, merged here (2026-10-31).

## Part CL1: the Cuthaean Legend, Standard Babylonian 1–93 (Round 5, run 5), 2026-10-31

Translator: one sub-agent (to be resumed for CL2–CL4). File: `annotated-SB.rtl.md` (header paragraphs + entries
`SB.1`–`SB.93`, seven sections).

### Progress and passes
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

### Key findings
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

### Open decisions (minor ones decided)
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

### Proposals for the corpus renderings
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

## Part CL2: the Cuthaean Legend, Standard Babylonian 94–180 (Round 5, run 5), 2026-10-31

Translator: the CL1 sub-agent, resumed. File: `annotated-SB.rtl.md` (entries `SB.94`–`SB.180`, four sections, and a
header paragraph "חלק CL2"; the מספור sentence updated).

### Progress and passes
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
| SB.173 | *taṣbâti* | *מילוי־חפצים* | `וְיִתֶּן-לְךָ מִשְׁאֲלֹת לִבֶּךָ` (תהלים לז:ד) | [equivalent] | Uncertain word; a parallel of concept only (the Hebrew avoids the root of *šâlu*: reviewer). |
| SB.179–180 | *šūt yâši taktarba arkû liktarrabka kâša* | אתה אשר אותי בירכת – הָאַחֲרוֹן יברך אותך – אותך! | `וַאֲבָרְכָה מְבָרְכֶיךָ` (בראשית יב:ג); `מְבָרְכֶיךָ בָרוּךְ` (במדבר כד:ט); `וְאָמַר הַדּוֹר הָאַחֲרוֹן בְּנֵיכֶם` (דברים כט:כא) | [equivalent] | The blessing returning to the blesser; closes SB.30 "I did not bless him". |

### Key findings
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

### Open decisions
1. **Kutha** = `כּוּתָה` ★ (decided): the form of 2 Kgs 17:24 (`וּמִכּוּתָה`), keeps the Akkadian vowel, matches the
   project's name and TRAPS; `כּוּת` (17:30) in the note.
2. **SB 97 *šakin abūbu*** = `מבול מְחוֹלָל` (decided): Erra's verb, as a stative participle.
3. ***qāta wabālu*** = `הֵבִיא יָד` (decided; 125, 148), keeping *wabālu* = `הֵבִיא` and the 147/148 play
   (*ubillūšunūti* / *ubilšunūti*); `שָׁלַח יָד` only in the apparatus. A reviewer may prefer `שָׁלַח יָד` by sense.
4. ***gimillu*** = `חֶמְלָה` here (127), not the `גְּמוּל` of Enūma eliš / Gilgameš, because `גָּמַל` is *riābu* in
   this text (172) and *gamālu* "spare" ≠ `גָּמַל` "requite" (guidelines §6.7). Proposed as a corpus split by sense.
5. ***papāḫu*** transliterated `פַּפָּח` (no Hebrew without `דְּבִיר` or the root קדש).
6. ***tākaltu*** (125) = `קֵבָה` by the extispicy sense; ***taṣbâtu*** (173) `*מילוי־חפצים*` (reviewer: was `*משאלות*`, which shares the root of *šâlu*) and ***rēdûtu*** (168)
   `*רַגְלִיֶּיךָ*` in italics; *lizkurū?* (176) `יַזְכִּירוּ?` (eBL: perhaps *lišṭurū* "let them write").
7. ***aḫāzu* Š** (142) = `לֻמַּד` by sense (*lamādu* does not occur in this text).

### Proposals for the corpus renderings
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

## Part CL3: the Cuthaean Legend, Middle Babylonian A and B from Ḫattuša (Round 5, run 5), 2026-10-31

Translator: the CL1–CL2 sub-agent, resumed. Files: `annotated-MBA.rtl.md` (header paragraphs + 63 entries, MBA.b+1–d+9;
eBL has no c+23) and `annotated-MBB.rtl.md` (header paragraphs + 15 entries, MBB.a+1–b+1). Both are single tablets
(HatMB1 = Bo 1202.z, KBo 19 98; HatMB1 = Bo 316.a).

### Progress and passes
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

### Key findings
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

### Open decisions
1. MBA.b+8 *zummû* `*שְׁכוֹל*` (uncertain word; Gurney's *ṣupur* "fingernail" noted).
2. MBA.b+16 *šumšu lū zikir* `שמו יהי לְזֵכֶר` – "let its name be (only) a mention" vs Foster's "be spoken of"; kept
   ambiguous.
3. MBA.c+13 *qinnāt tâmti* `קִנּ[וֹת?] [ה]ים` – *qinnu* "nest; clan" kept literal (`קֵן`, Etana); *zīmiš* `*כְּזִיו*?`.
4. MBA.b+14: the tablet writes ŠEŠ-MEŠ-*šu* ("his brothers"), eBL normalizes *athêšu*; the Hebrew follows N
   (`שותפיו`).
5. MBB is too broken for a story; its renderings follow the corpus words (*ḫurru*, *erēbu* Š, *aṣû* Š, *rakābu* Š).

### Proposals for the corpus renderings
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

## Part CL4: the Cuthaean Legend, Old Babylonian I and II from Sippar (Round 5, run 5), 2026-10-31

Translator: the CL1–CL3 sub-agent, resumed. Files: `annotated-OBI.rtl.md` (header paragraphs + 74 entries, OBI.a+1–d+17),
`annotated-OBII.rtl.md` (header paragraphs + 13 entries, OBII.1–c+2); `translation--intro.rtl.md` (Hebrew title and
introduction to the whole legend); `translation.rtl.md` built.

### Progress and passes
- Data: `kings_tools.py data CL OBI.a+1 OBII.c+2` (87 lines); `@` + `fill CL` (87 filled). New words grepped; every
  verse printed first (about 25).
- SB / MB Hebrew copied where the Akkadian is the same, in OB forms: b+9 `אני – נסערתי, נבוכותי,` (SB 88); b+12
  `אני – מלך שאינו מְשַׁלֵּם את ארצו,` (= SB 91); b+13 the same with *nišīšu* `את אנשיו` (SB 92 *ummānīšu* `חילו`);
  b+15 `איך אָשִׂים –` (SB 93); b+16 `ואת גוויתי ואת עַצְמִי אוציא?` (SB 93 *pūtī* `מצחי`); b+3 `שני שישים אלף חיל
  הוצאתי` (SB 85); b+11 `לאמור – אני:` (*umma anākū-ma*, SB 79 without *lū*); d+13 `מחיר` (MB A b+11).
- Pass (a) fidelity: brackets checked against SipOB1's ATF (seven over-bracketed words in c+3–c+16 unbracketed: their
  roots are preserved); OB II's illegible lines given as `…` / `[…]`.
- Pass (b) consistency across the five chapters: *ewû* Št `הָפַךְ` in OB I c+7, c+10, c+17 and OB II 2; *ḫalāqu* D
  `אִבֵּד` throughout; *sapānu* `שָׁטַח`; *sapāḫu* `פִּזֵּר`; *abūbu* `מַבּוּל`; *tīlu* `תֵּל`; *parakku* `דּוּכָן`;
  *maḫīru* `מְחִיר`; *ezēbu* `עָזַב`.
- Pass (c) Hebrew aloud: vocalized `עָז[ב]`, `הוֹתִיר`, `אֵל`, `עַצְמִי`, `לְאַבֵּד`, `שָׁטַח`, `הָפַךְ`, `נִהְיָה`,
  `אִבֵּד`, `הֵסֵב`, `שְׁטוּחָה`, `מוּסַבָּה`, `רוּשְׁשָׁה`, `גַּל`; one heading of CL3 corrected (MB A `שֶׁבָּרָא` →
  `שֶׁבָּנָה`: the root ברא is reserved).
- **Checks:** `kings_tools.py build CL` – `translation.rtl.md` written, 345 lines; **`verify CL --strict` – 345
  entries, OK** (the only note: SB.16/74/110 "same transliteration, different Hebrew", the known 3rd-person Enmerkar
  copy in SB.16); `check_bible_quotes.py 4-אגדת-כותה/*.md` – 0 problems.

### Parallels index (CL4)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| OBI.b+2 | *imtaḫaṣ dabdâm* | מחץ תבוסה | `וּמֵאֱלֹהִים הָיְתָה תְּבוּסַת אֲחַזְיָהוּ` (דברי הימים ב כב:ז) | [equivalent] | *dabdû* = `תְּבוּסָה`; defeat from God. |
| OBI.b+4 | *umalli ṣēram* | מילא את השדה | `וְנָתַתִּי פֶּגֶר מַחֲנֵה פְלִשְׁתִּים הַיּוֹם הַזֶּה לְעוֹף הַשָּׁמַיִם` (שמואל א יז:מו) | [equivalent] | Our proposal. |
| OBI.b+10 | *ānaḫ* | יגעתי | `יָגַעְתִּי בְּאַנְחָתִי` (תהלים ו:ז) | [cognate] | *anāḫu* ~ `אנח`. |
| OBI.b+11 | *ilu ana palêya mīnâm ublam* | אֵל – לשלטוני מה הביא? | `וַיֹּאמֶר מֹשֶׁה אֶל יְהוָה לָמָה הֲרֵעֹתָ לְעַבְדֶּךָ` (במדבר יא:יא) | [equivalent] | The OB king blames the god; SB 90 asks what *he* left. |
| OBI.b+12–13 | *šarrum lā mušallim mātīšu / rēʾûm lā mušallim nišīšu* | אני – מלך שאינו מְשַׁלֵּם את ארצו, / ורועה שאינו מְשַׁלֵּם את אנשיו | `וְשִׁלַּם נְוַת צִדְקֶךָ` (איוב ח:ו); `אַתָּה תִרְעֶה אֶת עַמִּי` (שמואל ב ה:ב) | [cognate] / [equivalent] | Unchanged for a millennium (= SB 91), except "people" → "army" (SB 92). |
| OBI.b+18 | *nakram dannam idkeam-ma* | אויב חזק העיר עליי | `הִנְנִי מֵעִיר עַל בָּבֶל` (ירמיהו נא:א) | [equivalent] | The god "rouses" the enemy. |
| OBI.c+4 | *ša adad issû eli mātim* | אשר אֲדַד צעק על הארץ | `יַרְעֵם מִן שָׁמַיִם יְהוָה; וְעֶלְיוֹן יִתֵּן קוֹלוֹ` (שמואל ב כב:יד) | [equivalent] | The storm-god's thunder as destruction. |
| OBI.c+5 | *ṭēmša ispuḫ* | את דעתה פיזר | `וּמִשָּׁם הֱפִיצָם יְהוָה` (בראשית יא:ט) | [equivalent] | *sapāḫu*; here the land's "reason" is scattered. *ḫubūru* "clamour" – Atra-ḫasīs's word. |
| OBI.c+6 | *tillānī* | תלים | `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | [cognate] | *tīlu* / `תֵּל`. |
| OBI.c+8 | *kīma abūb mê ša ibbašû / ina nišī … maḫriātim* | כמבול המים אשר נִהְיָה / באנשים […] הראשונים | `וַאֲנִי הִנְנִי מֵבִיא אֶת הַמַּבּוּל מַיִם עַל הָאָרֶץ` (בראשית ו:יז) | [equivalent] | "The flood of water" – the same phrase; the only explicit reference to the primeval Flood in any version. |
| OBI.c+12–13 | *kīma lā nabšîm … sapnat mātum šusḫurat* | כְּלֹא נִהְיָה … שְׁטוּחָה הארץ, מוּסַבָּה | `רָאִיתִי אֶת הָאָרֶץ וְהִנֵּה תֹהוּ וָבֹהוּ` (ירמיהו ד:כג); `וְעִוָּה פָנֶיהָ` (ישעיהו כד:א) | [equivalent] | A land returned to non-being (`תֹּהוּ` not in the line). |
| OBI.c+14 | *ina ezēz ilī* | בזעם האלים | `וְכָל עָרָיו נִתְּצוּ מִפְּנֵי יְהוָה מִפְּנֵי חֲרוֹן אַפּוֹ` (ירמיהו ד:כו) | [equivalent] | |
| OBI.c+15; OBII.2 | *ālānū ubbutū*; *kīma karmi uštēwi* | ערים – מוחרבות; כְּגַל – הָפַךְ | `כִּי שַׂמְתָּ מֵעִיר לַגָּל קִרְיָה בְצוּרָה לְמַפֵּלָה` (ישעיהו כה:ב) | [equivalent] | |
| OBI.c+17 | *kīma abūb palgim* | כמבול פלג | `וְהָיוּ לְנַחַל שׁוֹטֵף וְיִשְׁטְפוּ אֶרֶץ וּמְלוֹאָהּ` (ירמיהו מז:ב) | [equivalent] | *palgu* / `פֶּלֶג` [cognate]. |

### Key findings
**For the Bible.**
1. **The Flood as a historical yardstick** (OB I c+8–9): Akkad's ruin is "like the flood of water that came about among
   the former people" – *abūb mê* = Gen 6:17's `הַמַּבּוּל מַיִם`. In the OB version the Flood is past history; in SB
   (97–103) Ea recalls the gods' decision to destroy and then to keep mankind.
2. **From blaming the god to self-blame:** OB I b+11, b+14 "O god, what has (he) brought to my reign?" (the god roused
   the enemy, b+18) becomes in SB 89–90 "I said to my heart: what have I left for my reign?". The core lament "a king who
   does not keep his land whole, a shepherd who does not keep his people whole" survives a millennium nearly unchanged,
   except that "people" becomes "army".
3. **A curse of land in the language of the prophets:** cities flattened, mounds levelled, the land "turned" and made
   "as if it had not come into being" (c+6–c+17) – Jer 4:23–26, Isa 24:1, 25:2, Deut 13:17's `תֵּל`.

**For the ancient mind.**
1. **One story, three ages:** the OB tablet tells of a historical-seeming enemy (the Ḫariāt, Malgium, Gukkanium – names
   of the scribe's own Old Babylonian world) roused by a god, and a lament over Akkad like the Sumerian "Curse of
   Akkade"; the MB tablets make the enemy a host built by Ea; the SB stela makes it a race created by the great gods and
   adds the writing, the omens, the oracle and the counsel. The core – three defeats, the king's despair, the land's ruin –
   stays.
2. **War as Ištar's dance** (d+4–6): *mēlelu* "play/dance" with "battles" – the goddess's game.
3. **Numbers as drama:** 180,000 + 120,000 + 60,000 = 360,000 dead (b+1–b+7), against SB's 120,000 + 90,000 + 60,700.

### Open decisions
1. **SB.132 *aggu* vs OB I c+14 *ezēzu*:** both now in the root זעם (`לזעם לב אֶנְלִיל`; `בזעם האלים`). *ezēzu* = `זָעַם`
   is the Erra / Ludlul precedent; *aggu* (adjective "fierce") could move to another word (e.g. `עַז`, but *ezzu* may
   hold it in Gilgameš) – for the lead.
2. ***ešertu*** = `בֵּית־אֵל` / `בתי האלים` (c+2): `מִקְדָּשׁ` is gated to *eš₃* in this corpus (Enūma eliš has
   `מקדשים` for *ešertu*).
3. ***šulputu*** (c+3, *lapātu* Š) = `הֻשְׁחַת` by sense, not the G's `נָגַע`.
4. ***šapru*** "envoy" (a+5) = `שָׁלִיחַ`, sharing the word with *mār šipri* (guidelines §6.7).
5. ***ḫariātim*** transcribed `חֲרִיָּאת` (people? place?); ***gukkaniam*** `גֻּכָּנִיּוּם` (eBL: a toponym, tentative).

### Proposals for the corpus renderings
| Source | Hebrew (exact) | Tag | Notes | Lines |
|---|---|---|---|---|
| *ina šanîm / šalšim … ummānam ušēṣiam-ma* | `בשנית – שני שישים אלף חיל הוצאתי –` / `בשלישית – שישים אלף חיל הוצאתי –` | – | SB 85's words | OBI b+3, b+5 |
| *imtaḫaṣ dabdâm* | `מחץ תבוסה` | – | *dabdû* = `תְּבוּסָה` | OBI b+2, b+4, b+8 |
| *nêru*; *watāru* D; *malû* D | `קָטַל`; `הוֹתִיר`; `מִלֵּא` | – | Gilgameš; Enūma eliš | OBI b+4–b+7 |
| *anāku essehi enneši* / *ānaḫ āšuš amṭī-ma* | `אני – נסערתי, נבוכותי,` / `… יגעתי, דאגתי, נתמעטתי –` | – | *maṭû* G `נִתְמַעֵט` | OBI b+9–10 |
| *umma anākū-ma ilu ana palêya mīnâm ublam* | `לאמור – אני: "אֵל – לשלטוני מה הביא?` | – | | OBI b+11 |
| *u rēʾûm lā mušallim nišīšu* | `ורועה שאינו מְשַׁלֵּם את אנשיו.` | – | *nišū* = `אֲנָשִׁים` | OBI b+13 |
| *pagrī u ramānī lušēṣi* | `ואת גוויתי ואת עַצְמִי אוציא?` | – | *ramānu* = `עֶצֶם` | OBI b+16 |
| *nakram dannam idkeam-ma* | `אויב חזק העיר עליי,` | – | *dekû* = `הֵעִיר` | OBI b+18 |
| *ḫubūru*; *kabāsu*; *ṭēmu* (mind) | `הֲמֻלָּה`; `דָּרַךְ`; `דַּעַת` | – | | OBI c+5, c+16 |
| *tīlu*; *ewû* Št; *saḫāru* D / Š; *abātu* D; *ekû* Dt | `תֵּל` [cognate]; `הָפַךְ`; `הֵסֵב` / `מוּסָב`; `הֶחֱרִיב`; `רוֹשֵׁשׁ` | | | OBI c+6–c+16, OBII 2 |
| *kīma abūb mê ša ibbašû* | `כמבול המים אשר נִהְיָה` | [equivalent] | Gen 6:17 | OBI c+8 |
| *kīma lā nabšîm* | `כְּלֹא נִהְיָה` | – | the opposite of *šubšû* | OBI c+12 |
| *ezēzu* | `זָעַם` | – | see open decision 1 | OBI c+14 |
| *mēlelu*; *anantu* | `מָחוֹל`; `מַאֲבָק` | – | | OBI d+5–6 |
| *maḫīru sanqu* | `מחיר דחוק` | [cognate] *maḫīru* | *sanqu* II ≠ *sanqu* I `מְרֻסָּן` | OBI d+13 |
| *qablu*; *šatû* (weave); *karmu* | `מִלְחָמָה`; `אָרַג`; `גַּל` | – | `קְרָב` would collide with *qerbu* | OBII 1–2 |
| Names | `חֲרִיָּאת`, `מַלְגִּיּוּם`, `גֻּכָּנִיּוּם` | – | | OBI b+19–20 |
