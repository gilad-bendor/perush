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
| 1 | {d}li-pi₂-it-eš₄-tar₂ lugal saĝ il₂ nun barag-ga | לִיפִּית־אִישְׁתַּר, מלך נושא ראש, נסיך הדוכן, | `כְּבוֹדִי וּמֵרִים רֹאשִׁי` (תהלים ג:ד) | equivalent | נשיאת הראש כסימן כבוד ושלטון; שם האל מרים את ראש המלך, כאן "נשיאת ראש" היא תואר קבוע של המלך. |
| 2 | ḫe₂-du₇ {ĝiš}isimu₂{sar} nam-lugal-la | תפארת, יוֹנֶקֶת המלכות, | `וְנֵצֶר מִשָּׁרָשָׁיו יִפְרֶה` (ישעיהו יא:א); `וַיַּעַל כַּיּוֹנֵק לְפָנָיו` (ישעיהו נג:ב) | equivalent | המלך כנבט היוצא מגזע המלכות. המלה העברית `יוֹנֶקֶת` היא התקדים השומרי של הקורפוסים (*isimu₂* בשירי בילגמש), לא שאולה מישעיהו; `נֵצֶר`, `חֹטֶר`, `צֶמַח` נשארים בהקבלה. |
| 3 | {d}utu-gin₇ du še-er-zid kalam-ma | ההולך כְּאוּתוּ, זיו הארץ, | `וּכְאוֹר בֹּקֶר יִזְרַח שָׁמֶשׁ` (שמואל ב כג:ד) | equivalent | "דברי דוד האחרונים": המושל הנאמן כשמש הבוקר על הארץ; ראו גם אידין־דגן B 22. |
| 8 | men aga zid saĝ me-te-ĝal₂ | עטרה, כתר נאמן – הולמים את הראש, | `תָּשִׁית לְרֹאשׁוֹ עֲטֶרֶת פָּז` (תהלים כא:ד) | equivalent | כתר המלך כמתנת האל; ראו 48. |
| 10 | nun {d}li-pi₂-it-eš₄-tar₂ dumu {d}en-lil₂-la₂ sipad igi-ĝal₂-tuku | הנסיך ליפית־אישתר, בן אנליל, הרועה הפיקח, | `וַיִּבְחַר בְּדָוִד עַבְדּוֹ … מֵאַחַר עָלוֹת הֱבִיאוֹ לִרְעוֹת בְּיַעֲקֹב עַמּוֹ` (תהלים עח:ע–עא) | equivalent | המלך כרועה העם: התואר העתיק ביותר של המלוכה המסופוטמית (*sipad*, מאיאנתום ועד חמורבי), ובמקרא – דוד הרועה. |
| 11 | uĝ₃ laḫ₅-laḫ₅-e ĝissu dug₃-ga ud IŠ?-e ni₂ dub₂-bu | המוליך את העם (אל) צל טוב, ביום …? – להירגע, | `אֲשֶׁר אָמַרְנוּ בְּצִלּוֹ נִחְיֶה בַגּוֹיִם` (איכה ד:כ) | equivalent | המלך כצל המגן על עמו; גם אידין־דגן B 9, 23 ("בסככך הרחב"). |
| 15 | ka lal₃-gin₇ dug₃ mu ka-ge du₇ | פה – כדבש טוב; שֵׁם – לפה ראוי, | `הוּצַק חֵן בְּשִׂפְתוֹתֶיךָ` (תהלים מה:ג); `וּמְתוּקִים מִדְּבַשׁ` (תהלים יט:יא) | equivalent | מזמור המלך: נועם דיבורו של המלך;  – הדבש כמשל לדבר הנעים. |
| 16 | šag₄-ge de₆-a dam {d}inana | אשר הלב הביא, בן־הזוג של אִינַנָּה, | `תַּאֲוַת לִבּוֹ נָתַתָּה לּוֹ` (תהלים כא:ג) | equivalent | משאלת לב המלך; ראו אידין־דגן B 39. |
| 17 | {d}en-ki-ke₄ ĝeštug₂ daĝal saĝ-e-eš rig₇-ga | אשר אֶנְקִי בינה רחבה במתנה העניק לו, | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה … וְרֹחַב לֵב כַּחוֹל אֲשֶׁר עַל שְׂפַת הַיָּם` (מלכים א ה:ט) | equivalent | החכמה ה"רחבה" כמתנת האל למלך: אותו דימוי מרחבי. ההבדל: בשומרית החכמה יושבת באוזן (*ĝeštug₂*), במקרא – בלב. |
| 23 | gi-1-nindan eš₂-gana₂ za-gin₃ | קנה־המידה, חבל־המידה של ספיר, | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) | equivalent | `סַפִּיר` המקראי הוא הלָזוּרִית הכחולה, *za-gin₃*, לא הספיר המודרני. |
| 24 | ĝiš-as₄-lum le-um igi-ĝal₂ šum₂-mu {d}nisaba-ke₄ šu daĝal ma-ra-an-dug₄ | מוט־המדידה, לוח־העץ הנותן פקחות – נִיסָבָּה ביד רחבה לך (נתנה). | `כִּי פָתֹחַ תִּפְתַּח אֶת יָדְךָ לוֹ` (דברים טו:ח) | equivalent | "יד רחבה", "יד פתוחה": הנדיבות כיד; ראו אידין־דגן B 69. |
| 25 | {d}li-pi₂-it-eš₄-tar₂ dumu {d}en-lil₂-la₂-me-en | ליפית־אישתר, בן אנליל אתה; | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז); `אֲנִי אֶהְיֶה לּוֹ לְאָב וְהוּא יִהְיֶה לִּי לְבֵן` (שמואל ב ז:יד) | equivalent | המלך כבן האל. |
| 25 | {d}li-pi₂-it-eš₄-tar₂ dumu {d}en-lil₂-la₂-me-en | ליפית־אישתר, בן אנליל אתה; | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז); `אֲנִי אֶהְיֶה לּוֹ לְאָב וְהוּא יִהְיֶה לִּי לְבֵן` (שמואל ב ז:יד) | divergence | בתהלים ב האל אומר "בני אתה" אל המלך; כאן המשורר (והתלמיד) אומר זאת – והאב הוא אנליל, לא אל לאומי יחיד; ובאידין־דגן B 18 המלך הוא "בן ילוד דָּגָן" ממש. |
| 26 | niĝ₂-zid niĝ₂-gen₆-na pa bi₂-e-e₃ | נאמנות ונכונה – הופעת. | `מִשְׁפָּט וּצְדָקָה בְּיַעֲקֹב אַתָּה עָשִׂיתָ` (תהלים צט:ד) | divergence | צמד ערכים שהמלך "עושה" בארצו; הצמד השומרי (נאמנות ונכונה) אינו הצמד העברי (משפט וצדקה), והתרגום האנגלי הוא שמשווה ביניהם. |
| 27 | en sag₉-zu an-zag-še₃ na-dul? | אדון – נאוּתך – עד קצה השמים מכסה? | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ וּתְקוּפָתוֹ עַל קְצוֹתָם` (תהלים יט:ז) | equivalent | "קצה השמים" כגבול העולם; ראו אידין־דגן B 48. |
| 29 | inim-ma nu-kuš₂-u₃ gal-zu ka-aš bar uĝ₃-e si sa₂ | בדבר אינו יגע, רב־הדעת, המכריע הכרעה, המיישר את העם, | `וַיִּשְׁמְעוּ כָל יִשְׂרָאֵל אֶת הַמִּשְׁפָּט אֲשֶׁר שָׁפַט הַמֶּלֶךְ … כִּי רָאוּ כִּי חָכְמַת אֱלֹהִים בְּקִרְבּוֹ לַעֲשׂוֹת מִשְׁפָּט` (מלכים א ג:כח) | equivalent | חכמת המלך מתגלה בהכרעת הדין. |
| 30 | ĝeštug₂ daĝal niĝ₂-nam gal-le-eš zu | בינה רחבה, היודע כל דבר בגדולה, | `וַאדֹנִי חָכָם כְּחָכְמַת מַלְאַךְ הָאֱלֹהִים לָדַעַת אֶת כָּל אֲשֶׁר בָּאָרֶץ` (שמואל ב יד:כ) | equivalent | המלך היודע הכל: האישה התקועית על דוד. |
| 31 | di kur-kur-ra-ke₄ si sa₂-sa₂-e-de₃ | את דין הארצות – ליישר, | `יִשְׁפֹּט עֲנִיֵּי עָם` (תהלים עב:ד) | equivalent | המלך כשופט העם |
| 31 | di kur-kur-ra-ke₄ si sa₂-sa₂-e-de₃ | את דין הארצות – ליישר, | `יִשְׁפֹּט עֲנִיֵּי עָם` (תהלים עב:ד) | divergence | כאן "דין הארצות", של ארצות ההרים הזרות (*kur-kur*): שלטון המלך השומרי משתרע גם על הנכרים. |
| 32 | inim šag₄-ga ĝal₂-la lul zid-bi mu-e-zu | בדבר שבלב – את השקר והנאמן שבתוכו – אתה יודע. | `וְלֹא לְמַרְאֵה עֵינָיו יִשְׁפּוֹט וְלֹא לְמִשְׁמַע אָזְנָיו יוֹכִיחַ` (ישעיהו יא:ג); `לֵב שֹׁמֵעַ לִשְׁפֹּט אֶת עַמְּךָ לְהָבִין בֵּין טוֹב לְרָע` (מלכים א ג:ט) | equivalent | המלך השופט היודע את מה שמתחת לפני הדברים; גם . |
| 33 | {d}li-pi₂-it-eš₄-tar₂ lu₂-erim₂-ra guru₅-uš mu-e-ta-ab-ed₂-de₃-en | ליפית־אישתר – את האויב – *כרות* אתה מוציא, | `לַבְּקָרִים אַצְמִית כָּל רִשְׁעֵי אָרֶץ` (תהלים קא:ח) | equivalent | המלך המכרית את הרשעים מן הארץ. |
| 34 | ka šer₇-da-ka ĝiri₃ saga₁₁ dug₄ lu₂ zi-zi-i mu-e-zu | מפי העבֵרה – … – להקים איש אתה יודע, | `מְקִימִי מֵעָפָר דָּל` (תהלים קיג:ז) | equivalent | "להקים" את האיש הנופל כמעשה החסד של השליט. |
| 35 | nam-tag dugud ka garaš₂-kam lu₂ til-le mu-ni-in-zu | מעוון כבד – פי האסון הוא – איש לְכַלּוֹת? הוא ידע. | `יְהוָה מֵמִית וּמְחַיֶּה` (שמואל א ב:ו) | equivalent | אם הקריאה נכונה, 34–35 הם שני צדי הכוח: להקים ולכלות. |
| 36 | a₂-tuku sa gaz nu-mu-un-ši-ak-e | בעל־הזרוע – שוד אינו עושה לו, | `וִידַכֵּא עוֹשֵׁק` (תהלים עב:ד) | equivalent | המלך מגן על החלש מפני החזק; ראו 37. |
| 37 | kalag-ga sig₉-ga še₂₉-eš₂ nu-mu-un-ak-e | החזק – את החלש – עשוק אינו עושה. | `וִידַכֵּא עוֹשֵׁק` (תהלים עב:ד) | equivalent | `שהחזק בחלש לא יחבול` – חמורבי, הפרולוג והאפילוג (*dannum enšam ana lā ḫabālim*, `../../חוקים-ובריתות/2-חוקי-חמורבי/`): אותה נוסחה, בערך מאה שנה אחרי ליפית־אישתר; העברית כאן שומרת על `החזק` ו`החלש` של התרגום שם. ובמקרא: . |
| 38 | niĝ₂-si-sa₂ ki-en-gi ki-uri-a mu-ni-ĝar | מישרים בשׁוּמֶר ואכד שַׂמְתָּ, | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | cognate | *niĝ₂-si-sa₂* הוא בשומרית מה שהאכדית קוראת *mīšarum*, קרובתה של `מֵישָׁרִים` העברית: המלך "שׂם" מישרים בשומר ואכד כמו שהאל "כונן מישרים" ביעקב. |
| 38 | niĝ₂-si-sa₂ ki-en-gi ki-uri-a mu-ni-ĝar | מישרים בשׁוּמֶר ואכד שַׂמְתָּ, | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | divergence | בתהלים האל הוא שעושה את המישרים; כאן – המלך. |
| 39 | su kalam-ma mu-dug₃ | את בשר הארץ הֵיטַבְתָּ. | `יְהִי פִסַּת בַּר בָּאָרֶץ` (תהלים עב:טז) | equivalent | שלום הארץ ושפעה כפרי מלכות הישר. |
| 46 | išib keš₃{ki}-še₃ {d}nin-tur₅-re zid-de₃-eš pad₃-da-me-en | כאִישִׁיבּ לכֵּשׁ – נִינְתּוּר בנאמנות בחרה (בך) – אתה; | `וַיִּבְחַר בְּדָוִד עַבְדּוֹ` (תהלים עח:ע) | equivalent | הבחירה האלוהית במלך; `בָּחַר` מותר כאן רק לצד *pad₃* (`../renderings.md` §4). |
| 47 | urim₂{ki}-še₃ ĝal₂-la šul ĝiš tuku {d}suen-na-me-en | לאוּר – המצוי (שם), העלם השומע של סוּאֵן אתה; | `וְנָתַתָּ לְעַבְדְּךָ לֵב שֹׁמֵעַ` (מלכים א ג:ט); `וְאָנֹכִי נַעַר קָטֹן` (מלכים א ג:ז) | equivalent | שלמה, ה"נער" המבקש לב שומע. |
| 48 | {d}en-ki-ke₄ eridug{ki}-ta aga zid šum₂-ma-me-en | אשר אנקי מאֶרִידוּ כתר נאמן נתן לו – אתה; | `תָּשִׁית לְרֹאשׁוֹ עֲטֶרֶת פָּז` (תהלים כא:ד) | equivalent | הכתר כמתנת האל. |
| 54 | {ĝiš}gu-za-na suḫuš-bi mu-ra-an-ge-en | את יסוד כסאו – לך כונן. | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג); `צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאֶךָ` (תהלים פט:טו) | equivalent | הכסא המכונן. |
| 54 | {ĝiš}gu-za-na suḫuš-bi mu-ra-an-ge-en | את יסוד כסאו – לך כונן. | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג); `צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאֶךָ` (תהלים פט:טו) | divergence | בשמואל האל מכונן את הכסא לבן; כאן האב הארצי מכונן אותו לבנו – ו"בדבר אַן ואנליל" (55). |
| 58 | niĝ₂-gen₆-na-zu ka-ga₁₄ mi-ni-in-ĝal₂ | את נכונתך – בפה – הניח. | `וְנָתַתִּי דְבָרַי בְּפִיו` (דברים יח:יח) | equivalent | לשׂים דבר בפה; ראו אידין־דגן B 26, 52. |

### Parallels index (ID)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | aga zid-de₃ dalla mu-ra-ni-in-e₃ | את הכתר הנאמן – בבהירות לך הוציא, | `תָּשִׁית לְרֹאשׁוֹ עֲטֶרֶת פָּז` (תהלים כא:ד) | equivalent | הכתר כמתנת האל. |
| 3 | nam-sipad kalam-ma-še₃ mu-un-il₂-en | לרועוּת הארץ – אותך נשׂא, | `מֵאַחַר עָלוֹת הֱבִיאוֹ לִרְעוֹת בְּיַעֲקֹב עַמּוֹ` (תהלים עח:עא) | equivalent | המלך הנלקח לרעות את העם. |
| 4 | kur ĝiri₃-zu-še₃ mu-un-ĝar | את ההר – לרגליך שׂם. | `עַד אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א); `כֹּל שַׁתָּה תַחַת רַגְלָיו` (תהלים ח:ז) | equivalent | האל שׂם את האויבים לרגלי המלך: אותה תמונה ואותו פועל ("שׂם" / "שית"). |
| 9 | ki-en-gi ki-uri an-dul₃ daĝal-la-za ni₂ dub₂-bu-de₃ | את שׁוּמֶר ואַכַּד – בסככך הרחב – להרגיע, | `אֲשֶׁר אָמַרְנוּ בְּצִלּוֹ נִחְיֶה בַגּוֹיִם` (איכה ד:כ) | equivalent | המלך כצל המגן על עמו; ליפית־אישתר B 11. |
| 10 | uĝ₃-e u₂ nir-ĝal₂ gu₇-u₃-de₃ a dug₃ na₈-na₈-de₃ | שהעם יאכל מזון *נעלה*, מים טובים ישתה וישתה – | `עַל מֵי מְנֻחוֹת יְנַהֲלֵנִי` (תהלים כג:ב) | equivalent | הרועה המוביל אל מזון ומים. |
| 12 | {d}i-din-{d}da-gan sipad šag₄-ga-na-me-en | אִידִּין־דָּגָן, רועה לבו אתה; | `וְנָתַתִּי לָכֶם רֹעִים כְּלִבִּי` (ירמיהו ג:טו); `בִּקֵּשׁ יְהוָה לוֹ אִישׁ כִּלְבָבוֹ` (שמואל א יג:יד) | equivalent | המלך־הרועה "כלב" האל: אותו צירוף, "רועה לבו". |
| 14 | {d}en-ki-ke₄ ĝeštug₂ daĝal niĝ₂-nam-ma zu-zu | אֶנְקִי – בינה רחבה, היודעת כל דבר, | `וְרֹחַב לֵב כַּחוֹל אֲשֶׁר עַל שְׂפַת הַיָּם` (מלכים א ה:ט) | equivalent | כמו ליפית־אישתר B 17. |
| 15 | kiĝ₂ igi-ĝal₂ zi? ka piriĝ-ta [ed₂]-de₃ | מלאכת פקחות, חיים? מפי הלביא [להוציא] – | `כַּאֲשֶׁר יַצִּיל הָרֹעֶה מִפִּי הָאֲרִי שְׁתֵּי כְרָעַיִם` (עמוס ג:יב); `וְהִצַּלְתִּי מִפִּיו` (שמואל א יז:לה) | equivalent | הרועה המוציא את הטרף מפי הארי: דוד הרועה לפני שאול. אם הקריאה נכונה, זו אותה תמונה בדיוק – פקחות הרועה היא להציל נפש מפי הלביא. |
| 18 | dumu tud-da {d}da-gan-na en il₂ uĝ₃ [daĝal]-le | בן ילוד דָּגָן, האדון הנשׂא, [המרחיב] את העם, | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | equivalent | המלך כבן שהאל "ילד" |
| 18 | dumu tud-da {d}da-gan-na en il₂ uĝ₃ [daĝal]-le | בן ילוד דָּגָן, האדון הנשׂא, [המרחיב] את העם, | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | divergence | כאן הלידה היא מילולית בלשון (*tud* "ללדת"), ובשם המלך עצמו ("דָּגָן נתן") – ובתהלים "היום ילדתיך" הוא לידה של מינוי. |
| 21 | {d}en-lil₂ ḫe₂-da-ḫul₂ | אנליל – בך ישמח! | `יְהוָה בְּעָזְּךָ יִשְׂמַח מֶלֶךְ` (תהלים כא:ב) | equivalent |  |
| 21 | {d}en-lil₂ ḫe₂-da-ḫul₂ | אנליל – בך ישמח! | `יְהוָה בְּעָזְּךָ יִשְׂמַח מֶלֶךְ` (תהלים כא:ב) | divergence | שם המלך שמח באל, כאן האל במלך. |
| 22 | {d}utu-gin₇ ud zid e₃-a-zu-še₃ igi-bi ḫe₂-em-ši-ĝal₂ | כְּאוּתוּ – אל צאתך, יום נאמן – עינם אליך תהי נתונה! | `יִירָאוּךָ עִם שָׁמֶשׁ` (תהלים עב:ה); `וּכְאוֹר בֹּקֶר יִזְרַח שָׁמֶשׁ` (שמואל ב כג:ד) | equivalent | המלך הצודק כשמש העולה, ועיני העם אליו. |
| 24 | ḫar-ra-an kaskal-la si bi₂-sa₂ | את אורח הדרך – יישרת, | `וְהוּא יְיַשֵּׁר אֹרְחֹתֶיךָ` (משלי ג:ו); `יַשְּׁרוּ בָּעֲרָבָה מְסִלָּה` (ישעיהו מ:ג) | equivalent | יישור הדרכים; בשומרית – מעשה ממשי של מלך (דרכים בטוחות, תחנות דרכים: שולגי A 28–35), בעברית – משל. |
| 26 | niĝ₂-si-sa₂ ka-ga₁₄ mu-e-ni-ĝar | מישרים – בפה – שַׂמְתָּ, | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | cognate | *niĝ₂-si-sa₂* = האכדית *mīšarum*, קרובתה של `מֵישָׁרִים` |
| 26 | niĝ₂-si-sa₂ ka-ga₁₄ mu-e-ni-ĝar | מישרים – בפה – שַׂמְתָּ, | `וְנָתַתִּי דְבָרַי בְּפִיו` (דברים יח:יח) | equivalent | "לשׂום בפה". |
| 34 | ka-ta e₃-a-zu [an]-ne₂ ⸢dul⸣-[lu] | מוצא פיך – את [השמים] מכסה. | `כִּסָּה שָׁמַיִם הוֹדוֹ` (חבקוק ג:ג) | equivalent |  |
| 34 | ka-ta e₃-a-zu [an]-ne₂ ⸢dul⸣-[lu] | מוצא פיך – את [השמים] מכסה. | `כִּסָּה שָׁמַיִם הוֹדוֹ` (חבקוק ג:ג) | divergence | שם הוד האל מכסה את השמים, כאן דבר המלך. |
| 36 | igi bar-ra-zu lu₂ mu-un-til₃-le | מבטך – איש מחיה, | `בְּאוֹר פְּנֵי מֶלֶךְ חַיִּים` (משלי טז:טו) | equivalent | פני המלך ומבטו נותנים חיים. |
| 37 | ka ba-zu lu₂ mu-un-silim-e | שיחתך – איש מבריאה, | `צוּף דְּבַשׁ אִמְרֵי נֹעַם מָתוֹק לַנֶּפֶשׁ וּמַרְפֵּא לָעָצֶם` (משלי טז:כד) | equivalent | הדיבור המרפא. |
| 39 | šag₄-ge de₆-a-zu {d}nin-lil₂-le ḫe₂-am₃-bi im-[me] | את אשר לבך מביא – נִינְלִיל "כן יהי" [אומרת]. | `תַּאֲוַת לִבּוֹ נָתַתָּה לּוֹ` (תהלים כא:ג); `יִתֶּן לְךָ כִלְבָבֶךָ` (תהלים כ:ה) | equivalent | האל נענה למשאלת לב המלך: מזמורי המלוכה שבתהלים כ–כא, ממש בנושא הזה. |
| 40 | sipad {d}en-lil₂-ra ĝiškim til₃-me-en | רועה, הסומך על אנליל – אתה; | `כִּי הַמֶּלֶךְ בֹּטֵחַ בַּיהוָה` (תהלים כא:ח) | equivalent | המלך הסומך על האל. התרגום האנגלי מסתיר את ההקבלה (הוא הופך את הנושא). |
| 41 | {d}i-din-{d}da-gan a-ba za-e-gin₇ i₃-dim₂ | אִידִּין־דָּגָן – מי כמוך עֻצַּב? | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | equivalent | שאלת "מי כמוך": במקרא – על האל, כאן – על המלך. `מי כמוך` היא השומרית (*a-ba za-e-gin₇*), לא בחירה של התרגום. |
| 45 | šeg₁₂ e₂-kur-ra-ke₄ sag₉-ga-zu {d}en-lil₂ {d}nin-lil₂-ra ḫu-mu-un-ne-eb₂-be₂ | לבנת האֵכּוּר – את נאוּתך – לאנליל ולנינליל תאמר! | `כִּי אֶבֶן מִקִּיר תִּזְעָק` (חבקוק ב:יא) | equivalent | הבניין המדבר |
| 45 | šeg₁₂ e₂-kur-ra-ke₄ sag₉-ga-zu {d}en-lil₂ {d}nin-lil₂-ra ḫu-mu-un-ne-eb₂-be₂ | לבנת האֵכּוּר – את נאוּתך – לאנליל ולנינליל תאמר! | `כִּי אֶבֶן מִקִּיר תִּזְעָק` (חבקוק ב:יא) | divergence | בחבקוק האבן מעידה נגד הבונה, כאן הלבנה מעידה לטובתו. |
| 47 | mu maḫ-zu kalam-ma i₃-ĝal₂ | שמך הנשגב – בארץ מצוי, | `וְעָשִׂתִי לְךָ שֵׁם גָּדוֹל כְּשֵׁם הַגְּדֹלִים אֲשֶׁר בָּאָרֶץ` (שמואל ב ז:ט) | equivalent | השם הגדול של המלך בארץ. |
| 48 | an-zag-še₃ mu-zu pa bi₂-in-e₃ | עד קצה השמים – את שמך הופיע; | `לִפְנֵי שֶׁמֶשׁ יִנֹּין (יִנּוֹן) שְׁמוֹ` (תהלים עב:יז); `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ` (תהלים יט:ז) | equivalent | שם המלך כאור המגיע לקצות העולם. |
| 51 | šag₄-ta {d}da-gan-na [nam]-še₃ mu-ri-in-tar | מלב דָּגָן – לגורל – (זאת) לך גזר. | `מִבֶּטֶן אִמִּי אֵלִי אָתָּה` (תהלים כב:יא); `מֵרֶחֶם מִשְׁחָר` (תהלים קי:ג) | equivalent | הייעוד מן הרחם. |
| 55 | uĝ₃ e-da-lu uĝ₃ e-da-daĝal | העם – עמך רָבָה, העם – עמך רָחַב. | `כֵּן יִרְבֶּה וְכֵן יִפְרֹץ` (שמות א:יב) | equivalent | הצמד "רבה – פרץ" (*lu* – *daĝal*) |
| 55 | uĝ₃ e-da-lu uĝ₃ e-da-daĝal | העם – עמך רָבָה, העם – עמך רָחַב. | `פְּרוּ וּרְבוּ` (בראשית א:כב) | equivalent | *lu* = `רָבָה` מסומן תמיד (`../../סיפורי-הבריאה-המסופוטמיים/renderings.md` §6). כאן הריבוי הוא ברכת המלוכה, לא ברכת הבריאה. |
| 56 | kur-kur u₂-sal-la mu-e-ri-nu₂ | הארצות – באחו – לך שכבו; | `בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי` (תהלים כג:ב); `שָׁם תִּרְבַּצְנָה בְּנָוֶה טּוֹב` (יחזקאל לד:יד) | equivalent | הצאן הרובץ במרעה כתמונת שלום תחת רועה טוב; כאן הצאן הם הארצות עצמן. |
| 57 | uĝ₃-e ḫe₂-ĝal₂-la ud mu-ri-ib₂-zal-e | העם – בשפע – את היום לך מבלה. | `יְהִי פִסַּת בַּר בָּאָרֶץ` (תהלים עב:טז) | equivalent | שפע הארץ בימי המלך. |
| 61 | {d}i-din-{d}da-gan ud-zu ḫe₂-eb₂-su₃-ud-de₃ | אִידִּין־דָּגָן – את ימיך יאריך! | `אֹרֶךְ יָמִים עוֹלָם וָעֶד` (תהלים כא:ה); `יָמִים עַל יְמֵי מֶלֶךְ תּוֹסִיף` (תהלים סא:ז) | equivalent | המשאלה לאורך ימי המלך: אותה ברכה, אותה מלה (`ימים` + `ארך`). |
| 63 | igi dug₃ ḫu-mu-ri-in-du₈ | בעין טובה – אליך יראה! | `טוֹב עַיִן הוּא יְבֹרָךְ` (משלי כב:ט) | equivalent | "עין טובה" כנדיבות וכחסד. |
| 69 | šu ḫu-mu-un-bad | את היד – תפתח (לו)! | `פּוֹתֵחַ אֶת יָדֶךָ וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן` (תהלים קמה:טז); `כִּי פָתֹחַ תִּפְתַּח אֶת יָדְךָ לוֹ` (דברים טו:ח) | equivalent | "פתיחת היד", אותו צירוף. |
| 72 | ki-en-gi ki-uri suḫuš-bi mu-ra-an-ge-en | את יסוד שׁוּמֶר ואכד – לך כונן. | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | equivalent | כמו ליפית־אישתר B 54. |
| 78 | ibila kalag-ga-me-en₃ nir mu-e-ĝal₂ | יורש חזק אתה – בטחת, | `כִּי הַמֶּלֶךְ בֹּטֵחַ בַּיהוָה` (תהלים כא:ח) | equivalent | ראו 40. |
| 79 | {d}i-din-{d}da-gan nam-nun-na gu₂ an-še₃ mi-ni-in-zig₃ | אִידִּין־דָּגָן – בנסיכות – צוואר אל השמים הרים. | `עַל כֵּן יָרִים רֹאשׁ` (תהלים קי:ז) | equivalent | ראש המלך המורם, בסוף מזמור מלוכה. |

### Parallels index (EN)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 7 | ud kur-kur-ra-ke₄ | שמש הארצות, | `יִירָאוּךָ עִם שָׁמֶשׁ` (תהלים עב:ה) | equivalent | המלך והשמש. |
| 16 | ešgiri₂ šibir | במטה ובמקל־הרועים | `שִׁבְטְךָ וּמִשְׁעַנְתֶּךָ הֵמָּה יְנַחֲמֻנִי` (תהלים כג:ד) | equivalent | שני כלי הרועה, זה לצד זה. |
| 22 | an-dul₃ daĝal | סכך רחב | `אֲשֶׁר אָמַרְנוּ בְּצִלּוֹ נִחְיֶה בַגּוֹיִם` (איכה ד:כ) | equivalent | כמו אידין־דגן B 9. |
| 25 | an gal-e pad₃-da | אשר אַן הגדול בחר (בו), | `וַיִּבְחַר בְּדָוִד עַבְדּוֹ` (תהלים עח:ע) | equivalent | הבחירה האלוהית במלך. |
| 29 | nir ḫu-mu-un-ĝal₂-e-en | אכן בוטח אתה! | `כִּי הַמֶּלֶךְ בֹּטֵחַ בַּיהוָה` (תהלים כא:ח) | equivalent | כמו אידין־דגן B 40. |
| 30 | ka dug₃-ga | פה טוב, | `הוּצַק חֵן בְּשִׂפְתוֹתֶיךָ` (תהלים מה:ג) | equivalent | כמו ליפית־אישתר B 15. |
| 36 | ĝeštug₂ mu-ra-an-šum₂ | בינה לך נתן. | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה` (מלכים א ה:ט) | equivalent | הבינה כמתנת האל למלך. |
| 47 | im nam-til₃-la-ka | בטיט החיים | `יִמָּחוּ מִסֵּפֶר חַיִּים` (תהלים סט:כט); `כָּל הַכָּתוּב לַחַיִּים בִּירוּשָׁלִָם` (ישעיהו ד:ג) | equivalent | הרשימה האלוהית של החיים, שמי שנכתב בה – חי. כאן: הסופרת של האלים כותבת את שם המלך על לוח החיים. |
| 55 | sa₂ pad₃-de₃ | למצוא תושייה – | `לִי עֵצָה וְתוּשִׁיָּה אֲנִי בִינָה` (משלי ח:יד) | equivalent | החכמה המדברת; כאן בית הבינה של ניסבה. |
| 57 | niĝ₂-si-sa₂ | מישרים – | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | cognate | *niĝ₂-si-sa₂* = האכדית *mīšarum* (ליפית־אישתר B 38). |
| 69 | si sa₂-da-[zu-ne] | כשאתה מיישר, | `יִשְׁפֹּט עֲנִיֵּי עָם` (תהלים עב:ד) | equivalent | המלך השופט את העם. |
| 75 | tam-ma ba-e-zu | לברר אתה יודע. | `וְלֹא לְמַרְאֵה עֵינָיו יִשְׁפּוֹט` (ישעיהו יא:ג) | equivalent | השופט החודר אל מה שבלב (ליפית־אישתר B 32). |
| 76 | [si] sa₂ kug-sig₁₇-gin₇ | את היושר – כזהב – | `שֵׁבֶט מִישֹׁר שֵׁבֶט מַלְכוּתֶךָ` (תהלים מה:ז) | equivalent | היושר כסימן המלוכה. |
| 83 | du₈-u₃ tur₅-ra-bi mu-e-zu | ולהתיר את חוליו – אתה יודע. | `הַסֹּלֵחַ לְכָל עֲוֹנֵכִי הָרֹפֵא לְכָל תַּחֲלוּאָיְכִי` (תהלים קג:ג) | equivalent | העוון והחולי יחד, וההתרה של שניהם |
| 83 | du₈-u₃ tur₅-ra-bi mu-e-zu | ולהתיר את חוליו – אתה יודע. | `הַסֹּלֵחַ לְכָל עֲוֹנֵכִי הָרֹפֵא לְכָל תַּחֲלוּאָיְכִי` (תהלים קג:ג) | divergence | בתהלים – האל, כאן – המלך. |
| 85 | saĝ ĝiš nu-ub-ra-ra-an | ראש – בעץ – אינך מכה, | `כִּי לֹא אֶחְפֹּץ בְּמוֹת הַמֵּת` (יחזקאל יח:לב) | equivalent | השליט שאינו רוצה במות החוטא. |
| 88 | šag₄-la₂ sug₄ | הרחום, | `אֵל רַחוּם וְחַנּוּן` (שמות לד:ו) | equivalent | הרחמים כתכונת האל |
| 88 | šag₄-la₂ sug₄ | הרחום, | `אֵל רַחוּם וְחַנּוּן` (שמות לד:ו) | divergence | כאן – תכונת המלך. |
| 89 | lu₂ zid ki aĝ₂-e | האוהב את האיש הנאמן, | `אָהַבְתָּ צֶּדֶק וַתִּשְׂנָא רֶשַׁע` (תהלים מה:ח) | equivalent | אהבת המלך לישר. |
| 100 | gam-e-en | אתה מכופף. | `לְפָנָיו יִכְרְעוּ צִיִּים` (תהלים עב:ט) | equivalent | הארצות הכורעות לפני המלך. |
| 101-2 | barag-barag-ga nam-gi₄-me-eš₃ a-ra-ak-ne | בעלי הדוכנים – רעוּת לך עושים, | `וְיִשְׁתַּחֲווּ לוֹ כָל מְלָכִים` (תהלים עב:יא) | equivalent | מלכי הארצות נכנעים למלך. |
| 103-5 | du₁₄ mu₂-mu₂ zi ba-ni-ib₂-gi₄-gi₄ | בריב הצומח – נפש אתה משיב, | `נַפְשִׁי יְשׁוֹבֵב` (תהלים כג:ג) | equivalent | "השבת הנפש": אותו צירוף (*zi* + *gi₄* = נפש + שוב). |
| 107 | kug-sig₁₇ {na₄}gug za-gin₃-a-ta | בזהב, אודם וספיר | `מַלְכֵי שְׁבָא וּסְבָא אֶשְׁכָּר יַקְרִיבוּ` (תהלים עב:י) | equivalent | מס המלכים הזרים. `סַפִּיר` = *za-gin₃*, הלָזוּרִית (שמות כד:י). |
| 111 | ki su-ub ma-ra-ak-ne | את הארץ לך נושקים. | `וְאֹיְבָיו עָפָר יְלַחֵכוּ` (תהלים עב:ט) | equivalent | ההשתחוויה עד העפר לפני המלך. |
| 121 | mu «NI» sa₄-me-en | אשר קרא לו בשם – אתה; | `קָרָאתִי בְשִׁמְךָ לִי אָתָּה` (ישעיהו מג:א) | equivalent | האל "קורא בשם" את בחירו; גם כורש (ישעיהו מה:ג–ד). |
| 123 | niĝ₂-u₄-rum-ni-me-en | קניינה אתה. | `וִהְיִיתֶם לִי סְגֻלָּה מִכָּל הָעַמִּים` (שמות יט:ה) | equivalent | הנבחר כרכושו הפרטי של האל |
| 123 | niĝ₂-u₄-rum-ni-me-en | קניינה אתה. | `וִהְיִיתֶם לִי סְגֻלָּה מִכָּל הָעַמִּים` (שמות יט:ה) | divergence | כאן המלך, בתורה העם. `סְגֻלָּה` (= האכדית *sikiltu*) שמורה לקרובתה. |
| 130 | du₆-gin₇ mu-ra-an-du₈ | כתל לך פרש, | `וְהָיְתָה תֵּל עוֹלָם לֹא תִבָּנֶה עוֹד` (דברים יג:יז) | equivalent | העיר המובסת כתל. |
| 139 | šag₄ daĝal-zu-še₃ | ללבך הרחב | `וְרֹחַב לֵב כַּחוֹל אֲשֶׁר עַל שְׂפַת הַיָּם` (מלכים א ה:ט) | equivalent | כאן ממש "לב רחב" (*šag₄ daĝal*), ולא רק "בינה רחבה". |
| 141 | gi-en₃-dur(!) kud-da-zu | בכריתת טבורך, | `בְּיוֹם הוּלֶּדֶת אוֹתָךְ לֹא כָרַּת שָׁרֵּךְ` (יחזקאל טז:ד) | equivalent | כריתת הטבור ברגע הלידה |
| 141 | gi-en₃-dur(!) kud-da-zu | בכריתת טבורך, | `בְּיוֹם הוּלֶּדֶת אוֹתָךְ לֹא כָרַּת שָׁרֵּךְ` (יחזקאל טז:ד) | divergence | שם הטבור לא נכרת (התינוקת המושלכת), כאן הוא נכרת בידי האלה המיילדת – והגורל נגזר באותו רגע. |
| 145 | aga nam-til₃-la | את כתר החיים | `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה); `תָּשִׁית לְרֹאשׁוֹ עֲטֶרֶת פָּז` (תהלים כא:ד) | equivalent | הכתר והחיים, שתי המתנות של מזמור כא. |
| 153 | šag₄ ḫul₂-la | לב שמח | `תְּחַדֵּהוּ בְשִׂמְחָה אֶת פָּנֶיךָ` (תהלים כא:ז) | equivalent | השמחה כמתנת האל למלך. |
| 165 | u₃-luḫ saĝ gig₂-ga | את נֵצֶר שחורי הראש, | `וְנֵצֶר מִשָּׁרָשָׁיו יִפְרֶה` (ישעיהו יא:א) | divergence | בישעיהו הנצר הוא המלך עצמו, הצומח מגזע ישי; כאן הנצר הוא הענף שבידו, שבו הוא רועה את שחורי הראש. `נֵצֶר` הוא התקדים השומרי של הקורפוסים (*u₃-luḫ*: לוגלבנדה, שירי בילגמש). |

### Parallels index (NI)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | nin mul-an-gin₇ gun₃-a dub za-gin₃ šu du₈ | גבירה, המנומרת ככוכבי השמים, לוח ספיר – ביד אוחזת, | `לֻחֹת אֶבֶן כְּתֻבִים בְּאֶצְבַּע אֱלֹהִים` (שמות לא:יח) | equivalent | לוח כתוב בידי האל; כאן הלוח הוא כלי עבודתה של האלה הכותבת. |
| 1 | nin mul-an-gin₇ gun₃-a dub za-gin₃ šu du₈ | גבירה, המנומרת ככוכבי השמים, לוח ספיר – ביד אוחזת, | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר וּכְעֶצֶם הַשָּׁמַיִם לָטֹהַר` (שמות כד:י) | equivalent | אבן הספיר (הלָזוּרִית, לא הספיר של ימינו) כצבע השמים. |
| 12 | munus zid dub-sar maḫ an-na saĝ-tun₃ {d}en-lil₂-la₂ | האשה הנאמנה, הסופרת הנשגבה של אַן, הרושמת של אֶנְלִיל, | `וְקֶסֶת הַסֹּפֵר בְּמָתְנָיו` (יחזקאל ט:ב); `וַיִּכָּתֵב סֵפֶר זִכָּרוֹן לְפָנָיו` (מלאכי ג:טז) | equivalent | הסופר השמימי הרושם לפני האל; כאן הסופרת היא אלה, ו"רושמת" של ראש האלים. |
| 13 | gal-zu igi-ĝal₂ diĝir-re-e-ne | רבת־הדעת, הפיקחת של האלים, | `וָאֶהְיֶה אֶצְלוֹ אָמוֹן` (משלי ח:ל) | equivalent | החכמה הנשית העומדת לצד האל; כאן חכמת האלים היא אלה ממש, ובמשלי – האנשה של מידה. |
| 14 | ab-sin₂-na še gu mu₂-mu₂-de₃ | בתלם – שעורה ופשתה להצמיח, | `וְהַפִּשְׁתָּה וְהַשְּׂעֹרָה נֻכָּתָה` (שמות ט:לא) | equivalent | אותו צמד, שני גידולי השדה העיקריים של העמקים הגדולים (פשתה לבגד, שעורה ללחם ולשכר). |
| 17 | gu zi-zi-dam še zi-zi-dam | פשתה – להקים; שעורה – להקים, | `כִּי הַשְּׂעֹרָה אָבִיב וְהַפִּשְׁתָּה גִּבְעֹל` (שמות ט:לא) | equivalent | הפשתה והשעורה ה"קמות" בשדה. |
| 18 | buru₁₄ ezen gal {d}en-lil₂-la₂-ke₄ (gloss: X-im X X-a) | הקציר, החג הגדול של אנליל – | `וְחַג הַקָּצִיר בִּכּוּרֵי מַעֲשֶׂיךָ` (שמות כג:טז) | equivalent | הקציר כחג לאל. |
| 22 | ne-saĝ gal kurun₂-na de₂-e-de₃ | את הראשית הגדולה של הסובא – לשפוך, | `הַסֵּךְ נֶסֶךְ שֵׁכָר לַיהוָה` (במדבר כח:ז) | equivalent | נסך של שכר לאל, בתוך עבודת הקרבנות. |
| 29 | e₂-ĜEŠTUG₂.{d}NISABA-ke₄ ĝal₂ nam-mi-in-taka₄ (gloss: bi-it X) | את בית־בינת־ניסבה – פתחה, | `חָכְמוֹת בָּנְתָה בֵיתָהּ` (משלי ט:א) | equivalent | "בית הבינה" של האלה ו"בית החכמה" של משלי; ראו 45–46. |
| 31 | dub mul-an kug-ta šag₄ im-ma-da-kuš₂-u₃ | עם לוח כוכבי השמים הטהור – ייגעה את הלב, | `וְנָגֹלּוּ כַסֵּפֶר הַשָּׁמָיִם` (ישעיהו לד:ד) | equivalent | השמים כספר; כאן הכוכבים הם לוח שהאלה קוראת בו. |
| 38 | engar gal nam-nun-na e₂ ni₂ gur₃-ru nagar eridug{ki}-ga | האִכָּר הגדול של הנסיכות, של הבית טעון־האימה, הנגר של אֶרִידוּ, | — | cognate | *engar* = `אִכָּר` (שומרית > אכדית *ikkaru* > עברית; `../renderings.md` §5.3). |
| 45 | e₂ ĝeštug₂-ga-ke₄ ĝal₂ taka₄-a-ni (gloss: bi-it uz-ni-im i-na pe-te-e-ša) | את בית הבינה – בפתחו, | `חָכְמוֹת בָּנְתָה בֵיתָהּ` (משלי ט:א) | equivalent | בית החכמה; כאן אל החכמה פותח "בית בינה", במשלי החכמה עצמה בונה אותו. |
| 46 | {ĝiš}ig ĝeštug₂-ga sila-ba gub-ba-ni (gloss: da-la-at uz-ni-im X) | בדלת הבינה – בעמדו ברחובה, | `חָכְמוֹת בַּחוּץ תָּרֹנָּה בָּרְחֹבוֹת תִּתֵּן קוֹלָהּ` (משלי א:כ); `לִשְׁקֹד עַל-דַּלְתֹתַי יוֹם יוֹם` (משלי ח:לד) | equivalent | החכמה ברחוב ועל דלתות ביתה. מוטיב משותף של דלת הבינה הפתוחה אל הרחוב. |
| 54 | e₂-gal-la aĝrig zid ḫe₂-me-en | בהיכל – הסוכנת הנאמנה תְּהִי! | — | cognate | *e₂-gal* = `הֵיכָל` (שומרית > אכדית *ekallu* > עברית; `../renderings.md`). |
