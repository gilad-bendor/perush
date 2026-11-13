# Project 2: the Tetrad (הרביעייה)

## Scope
The four short hymns that opened the Old Babylonian literary course, often on one tablet or prism (Tinney 1999): two
Isin kings and the goddess of writing – Lipit-Eštar B, Iddin-Dagan B, Enlil-bāni A, Nisaba A. 387 entries.

| Key | Text | ETCSL | ORACC | Entries | File |
|---|---|---|---|---|---|
| LB | Lipit-Eštar B | 2.5.5.2 | Q000482 | 63 | annotated-LB.rtl.md |
| ID | Iddin-Dagan B | 2.5.3.2 | Q000448 | 79 | annotated-ID.rtl.md |
| EN | Enlil-bāni A | 2.5.8.1 | Q000499 | 171 (1-3 … 184; range labels `1-3`, `101-2`, `103-5`, `136-138`) | annotated-EN.rtl.md |
| NI | Nisaba A | 4.16.1 | Q000733 | 57 (OB) + 9 (`L.1`–`L.9`: the Lagaš stone version of the beginning) | annotated-NI.rtl.md |

## Base edition and numbering
As project 1 (ETCSL + ORACC lemma/morph; ETCSL's English after drafting). Enlil-bāni A's range labels are ETCSL's own
(one composite line for lines the edition counts together). Nisaba A's second version gets the prefix `L.`.

## The ancient mind (what to look for)
What a beginner copied first: the king praised in the second person (Lipit-Eštar B, Iddin-Dagan B) and in the first
(Enlil-bāni A: the king who was a gardener's son? – read the text, not the legend), and Nisaba, the goddess of the
measuring line, the stylus and the tablet: the scribes' patron.

## Bible comparisons to watch
The royal Psalms (Ps 72: the king's justice, the poor); Nisaba's wisdom and measuring line ↔ Prov 8; Job 38:5. Record
only real contacts.

## Open decisions
(numbered by the translators)

## Progress log
- 2026-11-13: sources, `../canon_tools.py`, skeletons, renderings, brief (the coordinator).

## Part 1 (LB 1–63, ID 1–79)
Translator T1, Round 8 run 2, 2026-11-13.

### Progress
- **LB 1–63** and **ID 1–79** drafted whole (142 entries): file headers, `## ` sections (LB 6, ID 7), every entry with
  פירוק / תרגומים / הקבלה / הערות; `translation--intro-LB.rtl.md`, `translation--intro-ID.rtl.md`.
- Three passes over both texts: (a) fidelity – persons and aspects against the ORACC morph (LB 35 3rd person, LB
  38–39 unmarked person, ID 48/52/79 3rd-person *-n-*, ID 63/68–70 *ḫe₂-* + ḫamṭu read as wishes), brackets (only
  whole restored words: ID 18, 20, 31, 33, 34, 38, 39, 68), added words in `( )` (LB 11); (b) consistency – every
  formula below copied letter for letter between the two hymns, `lexmap LB ID` clean (one Hebrew per lemma except
  homographs and *ud* by sense: `יום` / `שמש` ID 70); (c) Hebrew – `שֵׁם` vocalized (LB 15), `ישתה וישתה` (ID 10),
  `מזמור` and `קורא` kept out of the intros.
- `canon_tools.py verify LB` / `verify ID`: OK; `check_bible_quotes.py` on both files and this file: 0 problems.

### Open decisions
1. **Gate bug, `קדש`** (`netherworld_tools.py`, used by `canon_tools.py`): the prefix class `[הבלמכש]{0,2}` reads the
   pre-set *eš₃* `מִקְדָּשׁ` (and `כמקדש`, `במקדש`) as מ + קדש, so the pre-set rendering cannot pass `verify`. ID 66 has
   `כִּמְעוֹן` for *eš₃* **only as a stopgap**, said in its note; once the gate lets `מקדש` through (e.g. `(?<!מ)קדש`
   after the prefix class), change ID 66 to `כְּמִקְדָּשׁ`. Every Decad text with *eš₃* (the Keš hymn, Enlil A, Nungal)
   will hit it.
2. **The project intro** (`translation--intro.rtl.md`) uses `מזמורים` for the four hymns; `מזמור` is reserved outright
   (`../renderings.md` §4). My two intros use `שיר שבח` / `השיר`. Suggest the same there (coordinator's file).
3. **LB 35** *lu₂ til-le mu-ni-in-zu*: ETCSL "free (from punishment)"; we read *til* (BE) "finish off", 3rd person –
   `איש לְכַלּוֹת? הוא ידע` (the judge who also destroys, 1 Sam 2:6). A reviewer should look again.
4. **ID 62** *nam-kal-la niĝ₂-nam-e zu-a*: ETCSL drops *nam-kal-la* and makes Enlil "who knows everything"; the
   ergative on *niĝ₂-nam* makes "everything" the subject: `*היוקר* – אשר כל דבר יודע (אותו)`. Uncertain.
5. **ID 10** *u₂ nir-ĝal₂*: the Curse of Agade 14 (same words) has `מזון נבחר`, but `בחר` is gated to *pad₃* here:
   `*נעלה*`. Either the Agade line keeps `נבחר` (another corpus) or both move to one word.

### Proposals for the corpus renderings (the royal vocabulary; later texts follow these)
**Formulas (copy letter for letter):**
- **Second-person praise** *X-me-en* = `X אתה` (at the line end, like the copula): `ליפית־אישתר, בן אנליל אתה;`
  (LB 25 = 57), `מלך שׁוּמֶר ואכד אתה`, `רועה לבו אתה`. **Self-praise** (Šulgi A, Enlil-bāni A) *X-me-en* = `X אני`
  (the laws' `בן אנליל, אני`; Grain and Sheep `בת אנליל אני`). *za-e-me-en* = `אתה הוא` (LB 42); *ĝe₂₆-e-me-en* =
  `אני הוא` (Bird and Fish). *-zu-um* "your … is" = `… שלך הוא` (LB 44–45). *ḫe₂-me-en* = `אכן … אתה` (ID 43).
- **Doxology** *X za₃-mi₂* = `X – תְּהִלָּה!` (LB 63); *za₃-mi₂-zu* = `תהילתך`; *me-teš₂ i-i* = `שבח יעלה` (ID 17;
  laments, Lugalbanda); *i-i* alone = `יעלה (שבח)` (LB 60); *ar₂* = `קִלּוּס` (LB 61: three praise words, three
  Hebrews: `תְּהִלָּה` / `שֶׁבַח` / `קִלּוּס`).
- *muš₃ nam-ba-an-tum₂-mu* = `אַל יחדל!` (LB 61; ID 44 `אַל יחדלו!`, ID 65 `אַל תחדל!`); *silig* = `פָּסַק` (ID 66).
- *su kalam-ma … dug₃* = `את בשר הארץ הֵיטַבְתָּ` (LB 39 = ID 25; the laws' `את בשר שומר ואכד הֵיטַבְתִּי`).
- *niĝ₂-si-sa₂ … ĝar* = `מישרים … שָׂם` (LB 38; laws); *X ka-ga₁₄ ĝar* = `X – בפה – שַׂמְתָּ` (ID 26); *X ka-ga₁₄ ĝal₂*
  = `X – בפה – הניח` (LB 58, ID 52).
- *suḫuš-bi mu-ra-an-ge-en* = `את יסוד X – לך כונן` (LB 54, ID 72).
- *a₂ nun … te-ĝal₂* = `זרוע־נסיך תהי לך!` (LB 14 = ID 46).
- *inim dug₄-ga an {d}en-lil₂-la₂-ta* = `בדבר שנאמר מאת אַן ואנליל` (LB 55, = the laments); short forms `בנאמר מאת
  אנליל` (ID 35), `בנאמר ונאמר מאת אַן ואנליל` (ID 73), `בדבר הנאה מאת אַן ואנליל` (ID 46).
- *igi-bi … ši ĝal₂* = `עינם אליך (תהי) נתונה` (ID 22, 42, 59); *igi zid bar* = `בעין נאמנה הביט` (ID 5, = Gudea);
  *gu₃ zid de₂* = `השמיע קול נאמן` (ID 6, 13; laments); *igi dug₃ du₈* = `בעין טובה ראה` (ID 63).
- *en nam tar-tar-re-de₃* = `האדון הגוזר את הגורלות` (ID 60, = the laws); *nam tar* = `גזר גורל`.
- *u₆ dug₃-ge-eš e* = `בהתפעלות טובה התפעל` (ID 19, = Enmerkar); *gu₂ (an-še₃) zig₃* = `צוואר (אל השמים) הרים`
  (ID 29, 79; laments); *ki-bal du₇-du₇* = `ארץ המרי … נוגח ונוגח` (ID 50, = Gudea); *niĝ₂-du₇ pa e₃* = `את הדבר
  הראוי – הופיע` (ID 27, = Gudea); *šu-luḫ si sa₂* = `את הטָהֳרָה יישר` (ID 30, = Gudea).
**Key terms (new or confirmed):**
- King and court: *saĝ il₂* `נושא ראש`; *nun* `נסיך`, *nam-nun* `נסיכות` (laws); *ḫe₂-du₇* `תִּפְאֶרֶת`; *isimu₂*
  `יוֹנֶקֶת` (Bilgameš poems; `נֵצֶר` / `צֶמַח` / `חֹטֶר` only in the apparatus); *men* `עֲטָרָה`; *šibir* `מקל־רועים`;
  *gu₂-tuku* `אדיר` (`הרועה האדיר`, = Gudea); *ibila* `יורש`; *a₂-tuku* `בעל־זרוע`; *kalag* `חָזָק` (`המלך החזק` = LH's
  *šarrum dannum*); *dam* `בן־זוג`; *maškim* `ממונה`; *sukkal(-maḫ)* `וזיר (נשגב)`; *a₂-taḫ* `עוזר`; *išib* `אִישִׁיבּ`;
  *saĝ us₂* `*המשרת הדבק*`; *us₂* `דָּבַק`.
- Fitness words, one Hebrew each: *me-te-ĝal₂* `הולם` (Lugalbanda, Enmerkar), *tum₂* "suitable" `יָאֶה`, *du₇*
  `רָאוּי` (*niĝ₂-du₇* `הדבר הראוי`), *sag₉* `נָאֶה` / `נָאָה` / `נָאוּת`.
- Wisdom: *ĝeštug₂ daĝal* `בינה רחבה`; *igi-ĝal₂* `פִּקְחוּת`, *igi-ĝal₂-tuku* `פִּקֵּחַ`; *gal-zu* `רַב־הַדַּעַת`; *umuš*
  `תבונה`; *ad gi₄* `נמלך`; *niĝ₂-nam zu* `היודע כל דבר`.
- Justice: *niĝ₂-zid* `נֶאֱמָנוּת`, *niĝ₂-gen₆-na* `נְכוֹנָה` (never `צדק` / `משפט` – ETCSL's "justice and
  righteousness", "righteousness"); *niĝ₂-si-sa₂* `מישרים`; *di* `דין`; *ka-aš bar* `הכריע הכרעה`; *uĝ₃ si sa₂*
  `יישר את העם`; *lu₂-erim₂* `אויב` (laments); *šer₇-da* `עֲבֵרָה` (proverbs; `חטא` stays gated); *nam-tag* `עָווֹן`;
  *garaš₂* `אסון`; *lul* / *zid* `שקר` / `נאמן`; *sig₉* "weak" `חַלָּשׁ` and *kalag* `חָזָק` (= LH's *enšum* / *dannum*);
  *ḫeš₅* `עָשׁוּק`; *sa gaz* `שׁוֹד`.
- Trust: *ĝiškim-til₃* `סָמַךְ` / `סְמִיכָה` (= *tukultu*; `מִשְׁעָן` is Akk. *nēmedu*); *nir ĝal₂* `בָּטַח` (AG, Bird
  and Fish, Lugalbanda); *nir-ĝal₂* as an adjective of food `*נעלה*` (open decision 5).
- Shepherd's world: *an-dul₃ (daĝal)* `סכך (רחב)` (Gudea), *ĝissu* `צל`; *ni₂ dub₂* `נרגע` (= *pašāḫu*); *u₂-sal*
  `אָחוּ` (Agade, Gudea), *nu₂* `שכב`; *ḫe₂-ĝal₂* `שפע`; *lu* `רָבָה` (tagged), *daĝal* `רָחַב`; *ud zal* `בִּלָּה יום`.
- The school: *e₂-dub-ba-a* `בית הטבלה`; *dub* `לוח`; *le-um* `לוח־העץ`; *gu-šum₂* `יָתֵד` ("כתב היתדות"); *gi-dub-ba*
  `חרט` (Gudea); *gi-diš-nindan eš₂-gana₂ za-gin₃* `קנה־המידה, חבל־המידה של ספיר` (Inana's Descent); *aslum*
  `מוט־המדידה`; *dub-sar(-tur)* `סופר (צעיר)`; *nam-dub-sar* `סופרוּת`; *sar* `כתב`; *šu daĝal (dug₄)* `יד רחבה`;
  *šu bad* `פתח יד`.
- Others: *alim* `תְּאוֹ`; *še-er-zid* `זיו`; *gun₃* `מנומר`; *ul* `צהלה`; *u₅* `רוכב`; *dalla* `בהירות`; *i-lu*
  `אִילוּ` (song; `נְהִי` in a lament); *bala* `תקופה`; *uru₁₆* `נישא`; *dirig* `עלה על`; *du₁₇* `ריב`; *kiĝ₂*
  `מלאכה`; *a₂ aĝ₂* `ציווה`; *dim₂* `עיצב` (`יצר` reserved); *tak₄* (written *da₁₃*) `זנח`; *ka ba* `שיחה`; *silim*
  `בריא`; *til₃* `החיה`; *nidba* `קרבן`; *šeg₁₂* `לבנה`; *gu₂-erim₂-ĝal₂* `עוין`; *sa₂ dug₄* `השיג`; *in-dub* `תחום`;
  *eĝer* `סוף`; *kur* "foreign highland" `ההר`, *kur-kur* `הארצות`.
- Names: Išme-Dagan `אִישְׁמֶה־דָּגָן` and Dagan `דָּגָן` always vocalized (trap `דגן`); Šu-ilīšu `שׁוּ־אִילִישׁוּ`;
  Nin-Isina `נִין־אִיסִינָה`; Nuska `נוּסְכּוּ`.

### Key findings
- **The ancient mind.** The first literary text a pupil copied is about himself: the perfect king is the perfect
  scribe – Nisaba straightened his fingers on the clay, beautified his wedges, gave him the measuring reed and the
  wax board (LB 18–24), he is "the tablet writer of Nibru" (LB 41), and both hymns end by asking that his praise "not
  cease in the house of the tablet", that the clay say it and the scribe rejoice in it (LB 59–61), and that Nisaba
  give wisdom to "the junior scribe who brought his hand to it and wrote on the clay" (ID 64–70). The school is "like
  a shrine that gives birth" (ID 66). The king's two faces: the shepherd (shade, food, sweet water, pasture: ID 7–10,
  56–57) and the judge (LB 28–39: he knows the lie in the heart; "the strong does not make the weak oppressed").
- **The Bible (royal Psalms; shared motifs, not sources).** `מֵישָׁרִים` is a real [cognate] through Akk. *mīšarum*:
  "you set *niĝ₂-si-sa₂* in Sumer and Akkad" (LB 38) ↔ `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (Ps 99:4). [equivalent]s: "son of
  Enlil you are" / "son born of Dagan" ↔ Ps 2:7; "the shepherd of his heart" ↔ 1 Sam 13:14, Jer 3:15; "Ninlil says
  'so be it' to what your heart brings" ↔ Ps 21:3, 20:5; the shepherd who relies on Enlil ↔ Ps 21:8; "may he
  lengthen your days" ↔ Ps 21:5, 61:7; the mountains at your feet ↔ Ps 110:1; the king's shade ↔ Lam 4:20; the lands
  lying in the meadow ↔ Ps 23:2, Ezek 34:14; "the people multiplied and spread" ↔ Exod 1:12; "who is fashioned like
  you?" ↔ Exod 15:11; life out of the lion's mouth ↔ Amos 3:12, 1 Sam 17:35; broad wisdom as the god's gift ↔ 1 Kgs
  5:9; the throne's foundation made firm ↔ 2 Sam 7:13; the king's name to the edge of heaven ↔ Ps 72:17; the strong
  and the weak ↔ LH's *dannum enšam ana lā ḫabālim* (copied: `החזק` / `החלש`).
- **False echoes of the rank-3 English, corrected:** "justice and righteousness" (LB 26) is "the true and the firm"
  (`נאמנות ונכונה`), not `משפט וצדקה`; "righteousness" (LB 58) is *niĝ₂-gen₆-na*; ETCSL's "Shepherd Enlil is your
  support" (ID 40) reverses subject and dative and so hides Ps 21:8 (the king relies on the god); "holy" (*kug*) is
  "pure"; "cosmic bond" (ID 7) is *us₂-saĝ* "stake".

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (LB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (ID)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (EN)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (NI)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
