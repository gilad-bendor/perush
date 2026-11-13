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

## Part 2 (EN 1-3–184)
Translator T1, Round 8 run 2, 2026-11-13.

### Progress
- **EN 1-3–184** drafted whole (171 entries, the range labels included): header, 8 `## ` sections,
  `translation--intro-EN.rtl.md`. ID 66 as the coordinator changed it (`כמקדש היולד דבר`): agreed.
- Three passes: (a) fidelity – persons against the morph (2nd person throughout), *ḫe₂-* / *na-* / *ša-*, brackets
  (whole restored words only: 140 `[גזרה]`, 171 `[בירח]`); (b) consistency – every Part 1 formula and term
  (`../renderings.md` §5.1) followed, `lexmap EN LB ID` clean (only segmentation artifacts); (c) Hebrew – one-word
  lines kept below the vocalization threshold, punctuation.
- `canon_tools.py verify EN`: OK; `check_bible_quotes.py`: 0 problems (it caught two quotations from memory, fixed).

### Open decisions
6. **EN is not in the first person.** The brief (and this file's "The ancient mind") expected Enlil-bāni speaking of
   himself; the transliteration is 2nd person throughout (*mu-ra-* "for you", *-zu* "your", *mu-e-zu* / *ba-e-zu* "you
   know", *-e-en* 2sg), and ETCSL translates it so. Its *-me-en* lines (29, 115–123, 174) are therefore `X אתה`. The
   self-praise formula `X אני` is still unused (Šulgi A will be the first).
7. **EN 183–184** *ĝa₂-la … nam-ba-an-dag-ge* (one compound across two lines) = `הרפֵּה / אל יַרפֶּה!`: `חָדַל` is
   already *muš₃ tum₂*'s (EN 119), and Lugalbanda 1 has `חדל` for *ĝa₂-la dag* – one of the two corpora will need to
   move if they are harmonized.
8. **EN 165** *u₃-luḫ* = `נֵצֶר` (Lugalbanda, the Bilgameš poems): the shepherd's switch the king receives, which puts
   `נֵצֶר` (Isa 11:1) in a royal line; kept as the Sumerian precedent, the difference recorded as a [divergence].

### Proposals for the corpus renderings
- New: *šu dug₄* `מגע־יד` (4); *gu₂ e₃* "wear (round the neck)" `עטה` (9); *me šar₂* `כל הַ־מֶה`; *šar₂* `רבבה`;
  *zag an ki* `גבול שמים וארץ`; *me-dim₂* `מבנה`; *ešgiri₂* `מטה`; *mas-su* `מנהיג`; *niĝ₂-zi-ĝal₂* `בעל נפש`; *maḫ-di*
  `מפואר`; *bur-šu-um* `קשישה`, *šu-gi* `זקן`; *ušbar* `חותן/חותנת` (by sense; `חם` in Inana's Descent); *saĝ-tun₃*
  `רושם`; *im nam-til₃* `טיט החיים`; *ad gi₄-gi₄* (noun) `הנמלכות`, *ba-an-gi₄* `תשובה`; *pad₃* "find" `מצא` (but
  "choose" `בחר`); *sa₂* `תושייה` (*na de₅* `עצה`); *ĝalga* `שכל` (*umuš* `תבונה`); *šag₄ kuš₂* `יגע־הלב`; *kug-zu* `חכם`;
  *nu-ĝar-ra* `זדוני`; *tam* `ברר`; *si sa₂* (noun) `יושר`, *si nu-sa₂* `הלא־ישר`; *zalag* `האיר`; *niĝ₂ kur₂ di* `הדובר
  דבר נכרי`; *gul* `הרס`; *tur₅* `חולי`; *du₈* "loosen" `התיר`; *ĝiš ra* `הכה בעץ`; *šag₄-la₂ sug₄* `הרחום`; *ne-saĝ*
  `ראשית`; *šagina* `מושל הצבא`; *erin₂* `חיל`; *a₂ ĝar* `זרוע שָׂם`; *gaba-ri* (rival) `שכנגד`; *gam* `כופף`;
  *barag-barag* (rulers) `בעלי הדוכנים`; *nam-gi₄-me-eš₃* `רעוּת`; *zi gi₄* `השיב נפש`; *gug* `אודם`; *ša-* `הֲרֵי`; *ki
  su-ub* `נשק את הארץ`; *še* `שעורה`; *ud šu₂-uš* `יום־יום`; *mu sa₄* `קרא בשם`; *niĝ₂-u₄-rum* `קניין`; *u₃-na*
  "triumph" `עוז` / *ĝi₆ u₃-na* `בלילה, בעומקו`; *du₆* `תל`; *en₃-dur kud* `כריתת טבור`; *nam-en* `אדנות`; *saĝ du₃*
  `בנה ראש`; *taḫ* `הוסיף`; *ĝiš-šub* `חלק`; *ki-nu₂* `משכב`; *ki … tag* `נגע בקרקע`; *di-kud* `דיין`; *u₃-luḫ*
  `נצר`; *itid* `ירח`; *giri₁₇-zal* `חדווה`; *an-ta-ĝal₂* `רם`; *mi₂ dug₄* `חיבב`; *umun₂* `בקיאות`; *ĝa₂-la dag*
  `הרפה`. Names: Enlil-bāni `אֶנְלִיל־בָּאנִי`, Asarluḫi `אַסַרְלוּחִי`, Nanibgal `נַנִּיבְּגַל`, E-zagin `אֵ־זַגִּין`,
  E-kišnuĝal `אֵ־כִּישְׁנוּגַל`, Diĝirmaḫ `דִּינְגִּירְמַח`, Nudimmud `נוּדִימּוּד`, E-ana `הָאֵאַנָּה`.
- Copied from Part 1 and other corpora: `ארבע הפינות`, `בבהירות הוציא`, `לגורל – לך גזר`, `על ראשך / בידך לך כונן`,
  `אשר אינו חדל`, `הגיבור החזק של אנליל` (laws), `בעין טובה`, `סכך רחב`, `מקל־רועים`.

### Key findings
- **The ancient mind.** The most detailed portrait of the judge-king in the Tetrad: he "cleanses" the malice hidden
  in the heart as a smith refines metal (73–75), polishes justice "like gold" (76–77), knows how to "loosen sin and
  its illness" (82–83: sin as a bond that causes disease, released together), and "does not strike a head with wood"
  for a transgression (85) – mercy as a royal virtue (88). Every god gives one gift; the gods' gifts follow the life
  of the king: his fate decreed when the midwife-goddess cuts his navel cord (139–142), his name written by Nisaba "on
  the clay of life" (47–48), the crown "of life" (145), the night in Inana's bed (155–158), the switch to shepherd the
  people (165–167). The school closes it again: "the house that gives counsel to the Land" (180).
- **The Bible (shared motifs).** "the clay of life" with the king's name ↔ the "book of life" (Ps 69:29, Isa 4:3);
  "whom Enlil called by name" ↔ Isa 43:1; "you are Ninlil's property" ↔ Exod 19:5 (`סגלה`); the navel cord cut at
  birth ↔ Ezek 16:4; "loosen sin and its illness" ↔ Ps 103:3; "restore the life (*zi gi₄*)" ↔ Ps 23:3 `נפשי ישובב`;
  staff and shepherd's rod ↔ Ps 23:4; the kings who kiss the ground and bring gold and stones ↔ Ps 72:9–11; the
  crown and "life" ↔ Ps 21:4–5; the broad heart ↔ 1 Kgs 5:9; Nisaba's house of wisdom "to find counsel" ↔ Prov 8:14.
- **ETCSL's echoes, corrected:** "Created by An" (4) is *šu dug₄* "touched by the hand"; "your divine creator" (148)
  is "who built your head"; "the just" (89) is "the true man"; "sceptre which brings to justice" (165–166) is "the
  switch … leading truly"; "holy" (*kug*) is "pure".

## Part 3 (NI)
Translator T2, Round 8 run 2, 2026-11-13.

### Progress
- **NI 1–57** (the OB version) and **L.1–L.9** (the Lagaš stone version of the beginning) drafted whole (66 entries):
  header, 6 `## ` sections (the Lagaš version its own), `translation--intro-NI.rtl.md`. The Lagaš lines copy the OB
  Hebrew wherever the Sumerian is the same (L.2 = 1b, L.6 = 5, L.7 = 6, L.8 = 8a; L.3, L.4, L.5, L.9 differ by a case
  ending or a sign, and the Hebrew differs by exactly that).
- Three passes: (a) fidelity – persons and aspects against the morph (*na-* + ḫamṭu affirmative in 19–30; 33–34 2nd
  person, as the Akkadian gloss has it), brackets (23 `nam₂-⸢nir⸣-[ra]`: ending restored → none), one redundant dative
  removed (50); (b) consistency – T1's §5.1–§5.3 words followed (`בעלת זרוע־נסיך` = SA 27, `בית־בינת־ניסבה` = EN 54,
  `במתנה העניק`, `המחובב בנאמנות`, `יגע־הלב`, `סופר`, `רושם`), the closing copied from Enki and Ninmaḫ 141, lexmap
  NI EL clean but for the splits below; (c) Hebrew – `שׂוּמָה` (never `הוּשְׂמָה`), `לְרַצּוֹת` / `מְמַנָּה` / `אַתְּ` / `תְּהִי`
  vocalized against misreading.
- `canon_tools.py verify NI`: OK; `check_bible_quotes.py`: 0 problems.

### Open decisions
9. **NI 52–55 *ḫe₂-me-en* = `X תְּהִי!`** (a wish), not the corpus's `אכן … אתה` (ID 43): here it is Enki's speech of
   blessing and appointment, and the interlinear Akkadian has *lū … atti* (ETCSL "may you be"). If the corpus wants one
   rendering of *ḫe₂-me-en* everywhere, ID 43 and NI 52–55 must be weighed together.
10. **NI 27–32: Nisaba is the subject** (`העלמה נִיסָבָּה – לברכה עמדה; … יישרה, … פתחה, … שָׂמָה`), against ETCSL's "He
    (Enki?) approaches Nisaba … he has opened … placed the tablet on her knees": *gub* is intransitive, Nisaba stands in
    the absolutive, and the Akkadian gloss addresses her in the 2nd person in 33–34 (*taššakkan*). A reviewer should
    look again.
11. **ḫuĝ split by sense**: 23–24 `לְרַצּוֹת` ("pacify", = LA 56 `המרצה`), 25–26 `מְמַנָּה` ("hire, install" – *en ḫuĝ*,
    ETCSL "appoint"); ORACC lemmatizes all four as "pacify".
12. **NI 4 / L.5** *gi DI 7* / *gi ŠID 7*: `קני־…` / `קני־המנייה?` – ŠID "counting" may explain the OB line; ORACC reads
    ŠID as Enlil. *tug₂-ba₁₃* (20, 49; also EL 157) `גלימה?` – perhaps the *pala₃* robe of Inana's Descent (`פַּלָּה`).

### Proposals for the corpus renderings
- **Formulas:** *ḫe₂-me-en* in a speech of blessing = `X תְּהִי!` (52–55; open decision 9); the closing *a-a {d}en-ki
  za₃-mi₂-zu dug₃-ga-am₃* = `האב אֶנְקִי, תהילתך מתוקה!` (= Enki and Ninmaḫ 141); the *-a-ni* series of a god's deeds =
  `ב` + infinitive + suffix (40–49, as the Akkadian gloss *ina epēšišu*: `בבנותו`, `בפתחו`, `בעמדו`); *šag₄ kuš₂* = `יִגַּע
  אֶת הַלֵּב` (verb) / `יגע־הלב` (adjective), = Akk. *mitluku* "deliberate" (the gloss of 42: a reading now proved).
- **Names:** Uraš `אוּרַשׁ`; Aruru `אֲרוּרוּ` (always vocalized); Kusu `כּוּסוּ`; Ezina `דָּגָן` (always vocalized); Ereš `אֵרֵשׁ`
  (always vocalized); Aratta `אָרַטָּה`; E-zagin `אֵ־זַגִּין`; E-engura `אֵ־אֶנְגּוּרָה`; Ḫal-an-kug `חַל־אַן־כּוּג`.
- **Terms:** *mul-an* `כוכבי השמים`; *šu du₈* "hold" `ביד אחז`; *immal₂* `פרת־בר`; *šeg₉-bar* `יחמור`; *naĝa* `בורית`; *ga*
  `חלב`; *ab-sin₂* `תלם`; *gu* `פשתה` (and `חוט` in "tangled thread": EL 132); *u₆ di* `התפעל`; *namnir* `שררה`; *ne-saĝ*
  `ראשית`; *kurun* `סובא`; *en* (priest) `אֵן`; *su-ub* `שפשף`; *mur₁₀* `לבש`; *tug₂-ba₁₃* `גלימה?`; *i₃-ḫe-nun* `שמן־השובע`,
  *ḫe-nun* `שובע` (≠ *ḫe₂-ĝal₂* `שפע`); *saĝ-tun₃* `רושם`; *nam-galam* `תחכום`; *ni₂ gur₃* `טעון־אימה`; *nagar* `נגר`;
  *taškarin* `תאשור`; *tun₃ bar* `בקרדום פילח`; *abgal* `אַבְּגַּל`; *sila* `רחוב`; *unu₂* `מעון`; *ĝišnimbar* `תמר`; *šita*
  (weapon) `אַלָּה` – but *šita* (prayer) `עתירה` (EL 59, 108; = the Ur lament, Gudea); *um-me* `מינקת`; *tur₃* `רפת`, *amaš*
  `דיר`, *gara₂* `שמנת`; *kišib-ĝal₂* `נושא החותם`; *niĝ₂-gur₁₁* `רכוש`; *aĝrig* `סוכן` (= Gudea; Akk. *abarakku*, Gilg. VIII
  `סוכנת`); *guru₇-du₆ guru₇-maš* `תילי־הכרי וערמות־הכרי`, *gu₂ gur* `אגר`.

### Key findings
- **The ancient mind.** The Tetrad's last hymn does not separate Nisaba's two faces: the goddess "speckled like the stars
  of heaven", holding a lapis tablet, the scribe of An and recorder of Enlil, is also the wild cow among the alkali
  plants who makes flax and barley "stand up" in the furrow and offers at Enlil's harvest feast. For the school the
  scribe and the farmer are one person: the tablet counts the grain heap. She puts the tablet on her knees like any
  pupil and "wearies her heart" over "the tablet of the stars of heaven" (31) – the Akkadian gloss of 42 translates the
  idiom *mitluku* "to deliberate": thinking is the heart's labour. Enki, in a long chain of "when he built, when he
  opened the house of wisdom, when he stood at the door of wisdom in its street" (40–49), blesses her into the economy
  of the palace – oil, cream, seal, steward, grain heap – and the hymn ends with praise of Enki, not of Nisaba: the
  Tetrad closes at the source of wisdom. The Lagaš stone (Ur III?) shows the hymn two centuries older than the school.
- **The Bible (shared motifs).** The house of wisdom and its door in the street (29, 45–46) ↔ Prov 9:1, 1:20, 8:34;
  wisdom "of the gods" ↔ Prov 8:30; the heavenly scribe ↔ Ezek 9:2, Mal 3:16; the written tablet in a god's hand ↔ Exod
  31:18; the heavens as a book (31) ↔ Isa 34:4; flax and barley as the pair of the field (14, 17) ↔ Exod 9:31; the
  harvest festival of the chief god (18) ↔ Exod 23:16; the libation of beer (22) ↔ Num 28:7. [cognate]s: *engar* `אִכָּר`,
  *e₂-gal* `הֵיכָל`.
- **ETCSL corrected:** "He approaches Nisaba" (27) has Nisaba as subject; "appease" vs "appoint" are one lemma in ORACC,
  two words in ETCSL (we follow the sense); "holy" is *kug* "pure"; "good woman" is *munus zid* "the true woman".

## Review R1 (LB ID EN)
Independent review (Round 8 run 2, 2026-11-13), three read-throughs of all 313 lines (fidelity against ETCSL + the ORACC
morph; consistency – `lexmap`, `rel`, the corpus formulas, every corpus's grep; Hebrew and apparatus). T1's drafting is
careful: no bracket, omission or person errors were found; the fixes are consistency and one tense.

**Lines changed:** LB 1 (wording/consistency 1); ID 1 (wording/consistency 1); EN 2 (tense 1, wording 1) + apparatus 2.
Brackets 0, omissions 0.

**Notable fixes**
- **LB 44** *maškim*: `הממונה החזק שלך` → `הנציב החזק שלך` (coordinator's task: `ממונה` stays *nu-banda₃*'s, NG 88 /
  Lugalbanda / Gilgameš and Aga). Grep of every corpus: `נציב` occurs once (Ešnunna §, Akk. *šagina*, another language);
  `פקיד` / `פקד` are kept for Akk. *paqādu* (cognate) and `שוטר` is Deut 16:18's word, so both were avoided. LB 44 is the
  only *maškim* line in the canon; NG 88's note updated.
- **ID 33** *inim-zu an kug-ge us₂-sa*: `בשמים הטהורים [דבק]` → `לשמים הטהורים [מגיע]` – the corpus formula *an-e us₂* =
  `לשמים מגיע` (EL 78, 144; KH 31–34; Gudea). *us₂* of a person "following, attending" keeps `דבק` (ID 8, LB 42, LA 51):
  a split by sense.
- **EN 177** *mi₂ i-ri-in-dug₄* (ḫamṭu, 3rd person): `לך מחבבות` → `לך חיבבו`.
- **EN 184** `אל ירפה` → `אַל ירפה` (the *na-* prohibitive, vocalized as in every `אַל יחדל`). EN 53, 136–138: a gloss
  that stood in the **פירוק**'s Hebrew parentheses moved out of them.

**Checked and kept:** LB 35 (open decision 3: *til* "finish off", 3rd person, `?` – the reading is defensible; ETCSL's
"free" has no lexical support for BE); ID 62 (decision 4); EN 29 *nir ḫu-mu-un-ĝal₂-e-en* `אכן בוטח אתה` (= ID 43);
EN 165 `נֵצֶר` (decision 8); LB 15 *dug₃* `טוב` of honey (T1's reason recorded; *dug₃* is `מתוקה` in the closings – a
split by sense).

**For the coordinator**
1. The verifier's "fully vocalized" test (> 0.6 marks per letter) fires on a line that is only a name (EN 35, 37, 124,
   132, 151) or one vocalized word (EN 183): T1 dropped a mark to pass (`נִיסבָּה`, `אַסַרלוּחי`, `אינַנָּה` for the ★
   `אִינַנָּה`). Kept so `verify` stays at 0; the test should skip lines of one or two words.
2. *maškim* is still `הממונה` in the laws (LI epil. 499′) and Gudea (B ix 23) – a cross-corpus split for the lead's
   harmonization; `../renderings.md` §5.1's *maškim* `ממונה` should read `נציב`.

## Review R2 (NI)
Independent review (Round 8 run 2, 2026-11-13), three read-throughs of all 66 lines (fidelity against ETCSL + the ORACC
morph and the interlinear Akkadian; consistency – `lexmap` over all twelve texts, the corpus formulas, `verify`; Hebrew
and apparatus, every **הקבלה** checked). T2's drafting is careful: the *-a-ni* series, the *ḫe₂-me-en* wishes and the
Lagaš copies are sound; the fixes are one tense, one bracket and one word.

**Lines changed:** 3 – tense/mood/person 1 (33), brackets 1 (16), wording/consistency 1 (39); apparatus 1 (33's gloss).
Omissions 0.

**Notable fixes**
- **NI 33** *mu-un-du₃-u₃-nam*: `אַתְּ היא שבנית` → `אַתְּ היא הבונה` – the form is marû (*du₃-e* + 2nd person *-en* +
  *-am*; ORACC *e.en.am*), and the interlinear Akkadian has the present *ippeš* (i-pe-eš₁₅). The **פירוק** read the gloss
  as "עשה/עשית": *ippeš* is 3rd person present only, so the gloss of 33 is not 2nd person (the 2nd person is in 34,
  *taššakkan*) – corrected.
- **NI 16** *di?-dam*: `לחבב בנאמנות` → `לחבב? בנאמנות` (ETCSL's `?` on the verb's sign).
- **NI 39** *en muš₃*: `אדון *המתחם*` → `אדון *המראה*` – *muš₃* is `*מראה*` in all of T2's lines (KH 13–14, 26; EL 138);
  ETCSL's "precinct" stays in the note.

**Checked and kept:** open decision 9 (52–55 `X תְּהִי!`: the Akkadian *lū … atti* settles it for this text); 10 (Nisaba
the subject of 27–32: kept – but note that *mu-un-gub* in 27 has the agent *-n-*, which could make it transitive, "(he)
stationed the maiden Nisaba", and that the gloss of 33 is 3rd person; the 2nd person of 33–34 still points to her); 11
(*ḫuĝ* `לְרַצּוֹת` / `מְמַנָּה`); 12. NI 35 and EL 29 `הוענקה לה` keep the resumptive `לה` of the Hebrew relative (the
recipient is the participle's own head, not an added word).

**For the coordinator**
1. *muš₃* has two Hebrews for one sense ("platform, cultic face"): T2 `*מראה*` (KH 13–14, 26; NI 39; EL 138 "your face"),
   T3 `*במה*` / `הבמה?` (EB, NG 29). One should be chosen for the corpus (`במה` is a biblical cult word: if kept, a note).

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
