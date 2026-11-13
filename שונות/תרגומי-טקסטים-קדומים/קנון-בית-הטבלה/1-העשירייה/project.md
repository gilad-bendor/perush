# Project 1: the Decad (העשירייה)

## Scope
The ten compositions that every Old Babylonian pupil copied and learned after the Tetrad, in the order of the OB
catalogues (Tinney 1999; the ETCSL notes cite the catalogues from Nibru, the Louvre and Urim): Šulgi A, Lipit-Eštar A,
the Song of the Hoe, Inana B, Enlil A, the Keš temple hymn, Enki's Journey to Nibru, Inana and Ebiḫ, Nungal A,
Bilgameš and Ḫuwawa A. **This project translates the eight not translated before** (1,141 entries); the Song of the Hoe
(`../../סיפורי-הבריאה-המסופוטמיים/2-טקסטי-בריאה-ועדן/`, 2026-10-17) and Bilgameš and Ḫuwawa A
(`../../אפוס-גילגמש/3-השירים-השומריים/`, 2026-11-06) stay whole in their projects; the reading translation points to them
at their place (`translation--pointer-HOE.rtl.md`, `translation--pointer-HA.rtl.md`).

| Key | Text | ETCSL | ORACC | Entries | File |
|---|---|---|---|---|---|
| SA | Šulgi A | 2.4.2.01 | Q000395 | 108 (1–102 with 86A–J … ) | annotated-SA.rtl.md |
| LA | Lipit-Eštar A | 2.5.5.1 | Q000481 | 108 | annotated-LA.rtl.md |
| IB | Inana B (*nin me šar₂-ra*) | 4.07.2 | Q000623 | 154 | annotated-IB.rtl.md |
| EL | Enlil A | 4.05.1 | Q000619 | 171 | annotated-EL.rtl.md |
| KH | The Keš temple hymn | 4.80.2 | Q000751 | 165 (1–134 with 58A–O …) | annotated-KH.rtl.md |
| EJ | Enki's Journey to Nibru | 1.1.4 | Q000335 | 130 (with 45A) | annotated-EJ.rtl.md |
| EB | Inana and Ebiḫ | 1.3.2 | Q000339 | 184 | annotated-EB.rtl.md |
| NG | Nungal A | 4.28.1 | Q000736 | 121 | annotated-NG.rtl.md |

## Base edition and numbering
ETCSL composites (rank 1; `../../sources/ETCSL/<no>--…/`), with ORACC epsd2/literary lemma + morph (rank 2; aligned
to ETCSL by content); ETCSL's English as the rank-3 check. Line labels are ETCSL's composite numbers.

## The ancient mind (what to look for)
The king as the gods' creation and the land's shepherd (Šulgi's self-praise: the runner from Nibru to Urim in one day);
Inana raised above An by Enheduana's hymn, and Inana against the mountain that would not bow; Enlil's E-kur as the bond
of heaven and earth, and the Keš hymn's temple "growing like a mountain"; Enki's boat-journey and banquet for his father;
Nungal's prison house, which tests and frees.

## Bible comparisons to watch (recorded with tags, never built into the Hebrew)
Royal hymns ↔ the royal Psalms (Ps 2, 45, 72, 110); temple hymns ↔ the Zion songs (Ps 46, 48, 84, 87; Ps 24 the gates);
Enlil's word ↔ Ps 29, 33; Inana against Ebiḫ ↔ the Divine Warrior and the mountains (Hab 3; Ps 18); Nungal's prison and
ordeal ↔ Ps 107:10–16; Job 33. Read the transliteration first: ETCSL's English is the main source of false echoes.

## Open decisions
(numbered by the translators)

## Progress log
- 2026-11-13: sources, `../canon_tools.py`, skeletons, renderings, brief (the coordinator).

## Part 3 (SA 1–102, LA 1–108)
Translator T1, Round 8 run 2, 2026-11-13.

### Progress
- **SA** (108 entries: 1–102 and the one-manuscript oath 86A–86J) and **LA** (108) drafted whole: headers, `## `
  sections (SA 8, LA 7), `translation--intro-SA.rtl.md`, `translation--intro-LA.rtl.md`.
- Three passes: (a) fidelity – both texts in the 1st person (*-me-en* `אני`), *ḫe₂-* + ḫamṭu in Šulgi's narrative
  read as affirmative past (`אכן`), *ḫe₂-* + marû as wishes (SA 33, 35, 92–94; LA 106), *bara-* `בַּל`, *ga-* (LA
  103), persons checked (LA 38 3rd person: Inana raised his head; ETCSL "I"); (b) consistency – Part 1–2 formulas
  (§5.1–§5.2) copied, lines shared with Lugalbanda (SA 75, 86; LA 27), Gudea (LA 31) and Šulgi A ↔ LA (LA 24 = SA
  87 without *ḫe₂-*) copied; `lexmap SA LA` clean; (c) Hebrew – `המכונן ומכונן`, `שָׂם` vocalized, one-word and
  name-heavy lines kept under the vocalization threshold.
- `verify SA`, `verify LA`: OK; `check_bible_quotes.py`: 0 problems (it caught four verses quoted from memory; fixed).

### Open decisions
1. **SA 28** *ĝiri₃ ḫu-mu-gur*: ETCSL "strengthened (?) the roads"; we have `את הרגל – אכן הפניתי?` – *gur* is `שוב`'s
   licence elsewhere (SA 61); a reviewer should check the reading.
2. **SA 64** *teš₂ gu₇* "eat together" (= vie): kept as an image `*יחד אכן טרפו*`; if the corpus prefers the sense,
   `התחרו`.
3. **nir-ĝal₂ split by sense:** as a noun / epithet `בעל הסמכות` (SA 6, 101; LA 20; = Gudea), as a verb `בָּטַח`
   (Part 1–2). ID 10's adjective `*נעלה*` (food) stays the odd one out.
4. **LA 18** *sipad zid*: ETCSL's "the good shepherd" is John 10:11's phrase; the Sumerian is `הרועה הנאמן` (`טוב` =
   *dug₃* only) – recorded as a false echo.
5. **LA 89** *si sa₂ … nu-ḫa-lam-e*: ETCSL "never destroys a just person" – no person in the Sumerian; `את היושר
   לנצח אינו מאבד`.

### Proposals for the corpus renderings
- **Self-praise formula, now used:** *X-me-en* = `X אני` at the line end (`מלך אני`, `בן אנליל אני`); *ĝe₂₆-e-gin₇*
  `כמוני`. The LA refrain `ליפית־אישתר, בן אנליל אני.` (2, 42, 79, 97, 107) and SA's opening `מלך אני; מן הבטן – גיבור
  אני.` are fixed strings. *ḫe₂-* + ḫamṭu in a 1st-person narrative = `אכן` + past (SA 21–30, 50–61, 62–78).
- Copied/confirmed formulas: *igi zid bar* `בעין נאמנה הביט` (LA 31); *gu₃ zid de₂* (LA 32); *an-ne₂ aga zid maḫ saĝ-ĝa₂
  … gen₆* `אַן – כתר נאמן ונשגב – על ראשי (אכן) כונן` (SA 87 = LA 24); *suḫuš … gen₆* (LA 100); *niĝ₂-si-sa₂ … ĝar
  / su kalam-ma … dug₃* in the 1st person `שַׂמְתִּי / הֵיטַבְתִּי` (LA 92); *muš₃ nu-tum₂* (LA 52); *ĝa₂-la dag* `הרפה`
  (LA 58, 66, 95); *mu sa₄* `קרא שם` (SA 92); *mu pad₃* `הזכיר (שם)` (SA 94, LA 106: *pad₃* "name" ≠ "choose" `בחר` ≠
  "find" `מצא`); *ud ul(-le₂-a)* `ימים רחוקים` (SA 36, 86H; LA 101); *za₃-mi₂-ĝu₁₀ dug₃-ga* `תהילתי מתוקה` (LA 108, the
  every-corpus closing in the 1st person); *X za₃-mi₂* `X – תְּהִלָּה!` (SA 102).
- New terms: *nitaḫ* `זכר`; *na-gada* `נוקד` [cognate]; *nir-ĝal₂* (noun) `בעל הסמכות`; *ka du₈* `פעור־פה`;
  *anše-ĝir₂-nun-na* `פרד`, *anše-kur-ra* `סוס`, *dur₃* `עַיִר`; *nam-kalag* `חוזק`; *šu du₇* `ביד השלים`; *inim
  gen₆-na* `הדבר הנכון`; *niĝ₂-erim₂* `עוולה` (Lugalbanda), *ḫul gig* `שנא`; *danna* `בֵּרוּ`; *sig* / *igi-nim* `המטה` /
  `המעלה`; *a₂ sed₄* `עת הקֹר`, *ni₂ te-en* `הצטנן`; *ka-tar* `תשבחת` (four praise words: `תהילה` / `שבח` / `קילוס` /
  `תשבחת`); *dub₃* `ברך`, *dub₃-tuku* `בעל־ברכיים`; *usu* `עוצמה`; *kab₂ di* `ניסה`; *ne₃* `כוח`; *nam-šul* `עלומים`;
  *tum₁₂* `יונה`; *ma-da* `מדינה`; *u₈* `רחל`; *ḫub₂* `דהירה`, *im₂* `שעטה`, *kaš₄* `ריצה`, *ul₄* `מיהר`; *gaz*
  (animals) `שחט`; *šeg₁₁ gi₄* `שאג`; *ĝiš tag* `הגיש`; *sur₂-du₃* `בז`; *a-la* `עליצות`; *mar-uru₅* `רוח המערב`, *mir*
  / *u₁₈-lu* `רוח הצפון` / `רוח הדרום`; *ša₄* `נהה`; *nim ĝir₂-ĝir₂* `ברק מבריק`; *tuku₄* `הרעיד`; *im* (rain) `גשם`;
  *gu₂ (-da) la₂* `חיבק`; *ni₂ te* `פחד` (`ירא` = *palāḫu*), *su zig₃* `סמר בשר`; *bara-* `בַּל`; *gu₅-li* `רֵעַ`;
  *kaš* `שֵׁכָר`; *nitalam* `אשה` / `איש`; *silim-eš₂ dug₄* `אמר 'בריא'`; *šag₄ guru₇* `מלוא כרי הלב` (Lugalbanda);
  *zi DN* (oath) `חֵי DN`; *ĝidru dab₅* `אחז שרביט`; *babbar* `לבן`; *gul* `הרס`; *numun zid* `זרע נאמן`; *lirum*
  `היאבקות`; *zag dib* `עבר גבול`; *sun₄* `זקן`; *ulutim₂* `דמות`; *šu-si* `אצבע`; *saĝ-kal* `ראשון`; *nam-lu₂-ulu₃*
  `האנושות`; *dadag* `צח`; *ki-gub* `מקום עמידה`; *ur₅* `כבד`; *ni₂ ri* `הטיל אימה` (*ri* "set up" `קבע`); *ĝeštug₂
  ba₉-ra₂* `פתח בינה`; *a-ra₂* `דרך` (method); *buru₁₄* `קציר`; *engar* `אִכָּר`, *guru₇* `כְּרִי`; *ambar* `אגם`;
  *ni₂-tuku* `חרד`; *kadra* `תשורה`; *sun₅* `ענווה`; *giri₁₇ šu ĝal₂* `יד על אף שָׂם`; *ḫuĝ* `ריצה`; *nesaĝ* `ראשית`;
  *zi-šag₄-ĝal₂* `חיוּת`; *al di* `ביקש`; *zu₂ keše₂* `חגורה`; *ĝiri₂-ur₃* `פגיון`; *kuš gur₂₁* `צִנָּה` (`מגן` avoided:
  Magan / the `גן` gate); *ugnim* `מחנה`; *ummud* `נאד`; *sed* `צונן`; *šag₄ dugud* `כבד־לב`; *dim₂-ma* `טעם`; *da-ri₂*
  `לנצח`; *ḫa-lam* `אבד`; *šub* `השליך` / `נפל`; *a-na* `מה`; *in-nin₉* `הגבירה`. Names: Šulgi `שׁוּלְגִּי`, Ninsumun
  `נִינְסוּמוּן`, Šakkan `שַׁכַּן` ★, Nin-egala `נִין־אֵגַלָּה`, Lugalbanda `לוּגַלְבַּנְדָּה`, Nunamnir `נוּנַמְנִיר`,
  Ĝaĝišua `גַּגִּישׁוּאַה`, Utaulu `אוּתָאוּלוּ`, E-šumeša `אֵשׁוּמֵשָׁה`, E-babbar `אֵבַּבַּר`; festival *eš₃-eš₃* `אֵשְׁאֵשׁ`;
  *saĝ-ur-saĝ* `סַגּוּרְסַג`.

### Key findings
- **The ancient mind.** The first text of the Decad is a king's boast made into a school text: Šulgi runs Nibru–Urim
  and back in a day "so that my name be set for distant days and not fall from the mouth" (SA 36) – and the pupils,
  copying it, are the mouths. He builds wayside houses where "whoever comes from below or above may cool himself at the
  cool time" (SA 30–35), drinks with his "brother" the sun and his wife Inana, and then swears he is not boasting
  (SA 84, 86A–J: "by the life of my father Lugalbanda"). The colophon praises Nisaba, not the king. Lipit-Eštar A is a
  self-portrait in a hundred "I am"s: the beautiful body, the provider (harvest, grain heap, cow-pen, marsh, river),
  the worshipper with a kid in his arms and his hand on his nose, and the slow judge ("I hurry over nothing; I seek
  its end", LA 85; "heavy of heart").
- **The Bible (shared motifs).** Ps 45:8 (`אָהַבְתָּ צֶּדֶק וַתִּשְׂנָא רֶשַׁע`) ↔ SA 23–25 (the same two-limbed royal
  confession); `נוֹקֵד` is a real [cognate] of *na-gada* (SA 5 ↔ Amos 1:1); the oath "by the life of" (*zi*) ↔ `חַי
  יְהוָה וְחֵי נַפְשֶׁךָ` (1 Sam 20:3); "no king like me" ↔ 1 Kgs 3:13; girding the loins to run ↔ 1 Kgs 18:46; the
  cool of the day in a garden ↔ Gen 3:8; heaven's rain and earth's water ↔ Gen 7:11; "the cedar's young shoot" (LA 3)
  ↔ Ezek 17:22, in the same two words; "the man of his heart" (LA 33) ↔ 1 Sam 13:14; "clean of hands" ↔ Ps 24:4;
  "heavy of heart" (LA 83) ↔ Exod 7:14 – the same phrase with the opposite sense (a [divergence]); the rhetorical
  "what have I thrown away?" ↔ 1 Sam 12:3.
- **ETCSL's false echoes:** "the good shepherd" (LA 18; John 10:11) is *sipad zid* "the true shepherd"; "a human god"
  (LA 20) is "god of mankind"; "holy sceptre" (SA 88) has no "holy"; "never destroys a just person" (LA 89) has no
  person.

## Part 4 (EL 1–171)
Translator T2, Round 8 run 2, 2026-11-13.

### Progress
- **EL 1–171** drafted whole (171 entries): header, 10 `## ` sections, `translation--intro-EL.rtl.md`.
- Three passes: (a) fidelity – persons (2nd person from 65 and 131; *-me-en* `אתה` 135, 139–140, 154; 154's *mu-un-zu*
  3rd person), *ša-* `הֲרֵי`, the negated marû of "Without Enlil" (109–130) as `לא` + future, ḫamṭu kept past where ETCSL
  writes "can" or a future (90–91, 103), number (57 singular), brackets (151 `[דברך]`); (b) consistency – T1's words
  (`בעין נאמנה הביט`, `השמיע קול נאמן`, `בעלי הדוכנים`, `הרועה הנאמן`, `נוקד`, `מנהיג`, `בעל נפש`, `הכריע הכרעה`, `דיין`,
  `נמלך`, `יגע־הלב`, `הֲרֵי`) and the lines shared with Enki and the World Order (3, 39, 81, 99, 146), Summer and Winter
  (38, 53–54, 118–119), Dumuzid's Dream (31), Gudea (78) copied; four collisions found by grepping every corpus and
  fixed (*bad* `פתח` not `פרש`; *la₂* `תלוי`; *mul* `נצנץ`, since `מבריק` is *ĝir₂*'s; *šita* `עתירה` and *u₃-gul* `בקשה`,
  as the Ur lament and Enmerkar have them); (c) Hebrew – the verb of *dugud* `לְכַבֵּד` vocalized, `נֵס`, `הֲרֵי`, `מַרְאֶךָ`.
- `canon_tools.py verify EL`: OK; `check_bible_quotes.py`: 0 problems (it caught one verse quoted from memory, EL 16;
  replaced by a printed one).

### Open decisions
6. **ulutim₂ = `תואר`** (EL 157), not `דמות`: the Uruk cycle's rule keeps `דמות` out of every `>` line (Gen 1:26;
   Aramaic *dmwt*, reserved), but LA 13 (T1) has `דמות נוראה־נוראה` – suggest LA 13 → `תואר נורא־נורא`.
7. **EL 20 *šag₄-a bar-a*** `*לב וחוץ*` (ORACC reads *a* as "two": "two hearts, two outsides"); either way the double
   heart of Ps 12:3.
8. **sa-par₃ = `מכמורת`** (EL 26; = Lugalbanda and Anzud 499, Dumuzid's Dream), while the 2026-10-23 harmonization gave
   `מִכְמוֹרֶת` to Akk. *kamāru*; Sum. *sa-par₃* is Akk. *saparru*: a cross-language split for the lead.
9. **gu split by sense:** `פשתה` (NI 14, 17; EL 150) / `חוט` (EL 132–133, = Enki and the World Order 441 `חוט סבוך`) – one
   ORACC lemma ("cord"); **il₂** participle `מורם` in EL 38 only (`נישא` is *u₁₉-ru*'s, EL 10, 15).
10. **EL 163** `עמך` (as 162 and ETCSL), though the verb *ši-mu-da-an-* lacks the 2nd person *-e-* of 162.

### Proposals for the corpus renderings
- **Formulas and fixed strings:** the refrain *kur gal {d}en-lil₂-da nu-me-a* = `אילולא ההר הגדול, אנליל –` (109 = 124);
  *kur gal a-a {d}en-lil₂* = `ההר הגדול, האב אנליל` (39, 171; = EWO 200, S&W 318); the closing *za₃-mi₂-zu maḫ-am₃* =
  `תהילתך נשגבה!`; *niĝ₂ nu-kur₂-ru* = `דבר שאינו משתנה` (2 = 168); *ka-ta e₃* = `מוצא פה` (= ID 34); *an-ne₂ us₂* = `לשמים
  מגיע` (78, 144; = Gudea); *u-Vmma-teĝ₃* = `כשהוא נגש אל` (146, 148); "Without X" lists: negated marû = `לא` + future.
- **Terms:** *dug₄* (noun) `אמירה`; *su₃-ra₂* `רחוק`; *ĝiš-nu₁₁* `אור`; *sun₅* (verb) `השתפל`; *dur₂ ĝar* `מושב שָׂם`; *uz₃-saĝ*
  `*מוט*` (= ID 7); *es₂-ad* `מלכודת`; *pu₂* `באר` (`בור` reserved); *sa* `רשת`; *sa-par₃* `מכמורת`; *ḫurin* `נשר`; *erim₂-ĝal₂*
  `איבה`; *inim / niĝ₂ kur₂* `דבר / עניין נכרי`; *u₃-nu-ĝar-ra* `זדון`; *niĝ₂-a₂-ĝar* `מרמה`; *sun₇* `יהירות` (= Bird and
  Fish); *niĝ₂-gig* `תועבה` (= Akk. *ikkibu*); *igi-tum₃ la₂* `חמדה`; *gi₁₆-sa* `אוצר`; *kar* `רציף`; *dugud* `כבד` / `לְכַבֵּד`;
  *nam-lu₂-ulu₃* `אנושות`; *ĝizzal ak* `קשב עשה`; *nam-ab-ba* `זקנה`; *a₂-dam* `נווה`; *nam-ḫe₂* `שגשוג`; *di-ir-ga* `קשר`;
  *mu₇* `לחש`; *inim-ĝar* `קול־דבר`; *kal-kal* `יקר`; *lagar* `כוהן־הלַגָּר`, *gudug* `הַגּוּדוּג`, *nu-eš₃* `הַנּוּאֵשׁ`; *šita*
  (prayer) `עתירה`; *u₃-gul* `בקשה`; *ḫur* `שרטט`; *uš₈* `תשתית` (≠ *suḫuš* `יסוד`, *temen* `מסד`); *idim* `כובד`; *mul* `נצנץ`;
  *saĝ sag₃* `ראש הכה`; *itima* `החדר הפנימי`; *suḫ₁₀* `נזר`; *maš₂-da-ri-a* `דורון`; *gu₂-un* `משא`; *kisal* `חצר`; *tum₉*
  `רוח`; *{d}tir-an-na* `טִירַנָּה, הקשת`; *dili* `יחיד`; *kingal* `ראש־המועצה`; *ugula* `משגיח`; *a-eštub* `מי־האֶשְׁתּוּב`;
  *erim₃* `מחסן`; *gurun* `תנובה`; *u₂-šim* `מספוא`; *a-gar₃* `שדמה`; *niĝ₂-ur₂-4* `ההולכים על ארבע`; *e-ne su₃-ud* `שעשוע ארוך`;
  *niĝ₂-me-ĝar sug₄* `דממה מלאה`; *gu suḫ₃* `חוט סבוך`; *gilim* `שזור בהצלבה`; *nam-diĝir* `אלוהות`; *muš₃* `מראה`; *tuku*
  (a wife) `קנה`; *ulutim₂* `תואר`; *i₃ li* `שמן רענן`; *til₃* `שכן`. Names: Nunamnir `נוּנַמְנִיר`, Nuska `נוּסְכּוּ`, Uraš
  `אוּרַשׁ`, lu₂-maḫ `הַלּוּמַח`, nin-diĝir `הַנִּין־דִּינְגִּיר`.

### Key findings
- **The ancient mind.** Enlil A is less a hymn to a god than to a city's morality: Nibru is a net and a trap for the
  rebel land, an eagle spreads its talons over it, and no "lofty speaker" lengthens his days in it (17–28); its list of
  outlawed things is a list of sins of the tongue – the double heart, the crooked tongue, the alien word, slander,
  arrogance, the hollow "be well!" (18–24) – and its positive law is the family's: the younger brother "makes heavy"
  (honours) the elder, the son humble to his mother lengthens his old age (32–34). Then "Without the Great Mountain
  Enlil" (109–130): no city, no king, no priest chosen by the omen kid, no rain from the clouds' mouth, no calf, no
  lamb, no seed – the whole order of nature and society hangs on one god, and his word is not a command but a
  substance: "your word is flax, your word is barley" (150), abundance when it nears heaven, joy when it nears earth.
- **The Bible (shared motifs; the strongest contacts).** EL 2 *niĝ₂ nu-kur₂-ru ka-ta e₃-a-ni* "the unchanging thing,
  the issue of his mouth" ↔ `וּמוֹצָא שְׂפָתַי לֹא אֲשַׁנֶּה` (Ps 89:35), word for word; the honouring of the elder and
  the long old age of the humble son ↔ Exod 20:11 (the repository's numbering) – Sumerian *dugud* "heavy, honour" is the
  same metaphor as `כִּבֵּד`; the city of steadfastness ↔ Zech 8:3 `עִיר הָאֱמֶת`; the tongue sins barred from the city ↔
  Ps 101:7, 12:3–4; "Without Enlil" ↔ Ps 127:1 and the negative catalogue of Gen 2:5; the god as rainbow and floating
  cloud ↔ Ezek 1:28 (and a [divergence] with Gen 9:13); no god has seen him ↔ Exod 33:20; the word as rain and growth
  ↔ Isa 55:10–11, Hos 2:23; the word as food ↔ Deut 8:3; Ninlil "acquired" as a wife (*tuku*) ↔ Ruth 4:10 `קָנִיתִי`.
  [cognate]s: *na-gada* `נוֹקֵד`, *engar* `אִכָּר`, *saḫar* `עָפָר`, *u₈* `רָחֵל`, *niĝ₂-si-sa₂* `מֵישָׁרִים`.
- **ETCSL's false echoes, corrected:** "righteousness and justice" (30) is *niĝ₂-zid niĝ₂-si-sa₂* `הנאמנות והמישרים`;
  "the good shepherd" (60, 154) is *sipad zid* `הרועה הנאמן`; "holy" is *kug*; "No god can look upon him" (103) is a
  past, "no god has seen him"; "It cuts short the life" (18) turns a negated "does not lengthen days" into an act;
  "the Anuna enter" (8) follows a variant lemma, the main text has *sun₅* "humble themselves"; "you are greatly suited
  for the abzu" (75) misplaces the *-zu* of a possessed place.

## Part 5 (KH 1–134, EJ 1–129)
Translator T2, Round 8 run 2, 2026-11-13.

### Progress
- **KH** (165 entries: 1–134 with 58A–58R and 103A–103L) and **EJ** (130 entries, with 45A) drafted whole: headers,
  `## ` sections (KH 10: one per "house", the one-manuscript houses their own; EJ 9), `translation--intro-KH.rtl.md`,
  `translation--intro-EJ.rtl.md`.
- **The refrain fixed before the first copy**, from the transliteration, and copied letter for letter into all nine
  copies (18–20, 41–43, 55–57, 58O–Q, 71–73, 84–86, 100–102, 103I–K, 124–126; brackets and `⟨ ⟩` per copy):
  `כְּכֵשׁ הנעלה – הֲגַם איש יוביל?` / `כגיבורה, אַשְׁגִּי, הנעלה – הֲגַם אם תלד?` / `את הנעלה כגבירתה, נִינְתּוּר – מי ראה?`;
  the section lines `הבית הראשון.` … `הבית השמיני.`; the "X / בית כֵּשׁ X" pairs (13–14, 22–23, 59–60, 75–76, 104–105,
  120–121, 128–129) and KH 29–30 = 91–92, 61 = 77, 63 ≈ 83 copied; the closing `אל העיר … – האיש הנגש – אַל יגש!`
  (128–131) and the doxologies `כֵּשׁ הבנויה, אשגי – תְּהִלָּה!` / `כֵּשׁ המחובבת, נינתור – תְּהִלָּה!`.
- Lines copied from other corpora where the Sumerian is the same: EJ 1 (Enmerkar 6), 5 = 45A (ID 60), 15 and KH 28
  (the Hoe 73 `כשור נהם`), 22 (= KH 36), 79 (EWO 165), 93 (Hoe and Plough 25), 96, 107 (Gudea), 129 (Bird and Fish
  190); EJ 117 in the corpus formula `פונה אל`.
- Three passes: (a) fidelity – *na-* + ḫamṭu affirmative (KH 1–3; EJ 80, 89), *ḫe₂-* + ḫamṭu `אכן` (EJ 65, 67), number
  and person, brackets (half-restored words unbracketed: 58O, 58Q, 45A); (b) consistency – grepped every new word
  in all corpora; fixed *ĝal₂* `מניח` (not `שָׂם`, *ĝar*'s), *si-ĝar* `מסגר` (`מנעול` is *suḫub₄*'s), *mur ša₄* `נהם`,
  *ĝa₂-nun* `בית־הגנזים`, *ug* `לַיִשׁ`, *šita₂* `מַפֵּץ`, *lulim* `אַיָּל`; (c) Hebrew – gate-safe phrasing where a
  harmless word matched a gate (`כמו פר־ההרבעה`, `אשר בו`), unvocalized names in the doxologies.
- `verify KH`, `verify EJ`: OK; `check_bible_quotes.py`: 0 problems (it caught one quotation form, EJ 24).

### Open decisions
11. **Gate problem, `בור`:** the area unit *bur₃* (KH 46) cannot be transliterated `בּוּר`: the corpus-wide `בור` gate
    (`netherworld_tools.py`, reserved outright) blocks it, so the line has the plural `בּוּרִים` (the singular `שַׁר`
    beside it). Suggest licensing `בור` by `bur₃`.
12. **Gate problem, `הלל`:** the *lal₃* priest (KH 112) with the article (`הַלָּל`) is read as the reserved `הלל`; the line
    has `הכוהן־לָל`. Suggest a licence by `lal₃` or keeping the circumlocution.
13. **KH 128–131 *lu₂ te-a na-te*** = `האיש הנגש – אַל יגש!` (*na-* prohibitive, ETCSL's sense); an affirmative *na-*
    ("the one who approaches does approach") is possible. The paradox of approach is the hymn's last word.
14. **gaz:** EJ 93 copies Hoe and Plough 25 (`שוורים הורג, צאן שוחט`: *gaz* `הרג`, *šar₂* `שחט`); SA 52 (T1) has *gaz*
    `שחט`. One of them should move.
15. **Splits by sense, recorded:** *sur* `קלע` (KH 11, a net of words) / `סחט` (EJ 100, beer); *idim* `כובד` (EL 143) /
    `מעיין` (KH 53); *sig₇* `הוריק` (vegetation) / `מהודר` (beauty: KH 49–50, = EL 96 `התהדר`); *kug* `טהור` / `כסף`
    (the metal: EJ 6, 11, 124, 128); *aga* `כתר` / `כלי־האַגָּה` (EJ 111); *ad gi₄* `נמלך` kept even for the river's
    "echo" (EJ 91).
16. **KH 13–14 *aratta*** `*נכבד*` (ETCSL "important"; ORACC reads the name Aratta); *muš₃* `*מראה*` (ETCSL "platform").
17. **New particle:** *ša-* + *-nga-* in a rhetorical question = `הֲגַם` (the refrain), not `הֲרֵי` (*ša-* alone).

### Proposals for the corpus renderings
- **Fixed strings:** the Keš refrain and the section lines (above); the closing paradox `האיש הנגש – אַל יגש!`;
  *e₂ N-kam-ma* = `הבית ה…` (ordinal); *an-še₃ … ki-še₃* = `למעלה … למטה`; *gud-gin₇ mur ša₄* = `כשור נהם`;
  *gu₃ nun di* = `קול נסיכי השמיע`; *an-ne₂ us₂* = `לשמים מגיע`; *temen … abzu-a sig₉* = `מסדו – בָּאַפְסוּ תקוע`;
  *gaba-šu-ĝar nu-tuku* = `יריב אין לו`; *ĝiri₃ (dili) gub* = `את רגלו (לבדו) הציב`.
- **Terms:** *rib* `נעלה`; *ma₂-gur₈* `ספינת־המַגּוּר`; *ninda₂* `פר־ההרבעה`; *lipiš* `רוגז`; *ib-gal* `מתחם גדול`; *šar₂* (area)
  `שַׁר`, *bur₃* `בּוּר`(ים); *lulim* `אַיָּל`; *taraḫ-maš* `תיש־יעל`; *muš-gu₇{mušen}* `ציפור־אוכלת־הנחש`; *iti₆* `אור־הירח`;
  *barag₂* `השתרע`; *šita₂* `מַפֵּץ`; *idim* (spring) `מעיין`; *zag-ĝar* `חדרי־האל`; *nu-ka-aš* `מכריע`; *ĝa₂-nun* `בית־הגנזים`;
  *gi-gun₄* `הגִּיגוּנָה`; *la-ḫa-ma* `הַלַּחַמָּה`; *saĝ-kul* `בריח`, *si-ĝar* `מסגר`, *zag-du₈* `מזוזה`, *aškud₂* `מחסום`,
  *kun₄* `מדרגה`, *ĝiš-ur₃* `קורה`, *nir-gam-ma* `קמרון`, *gi-kid* `מחצלת`, *gi-sal* `מחיצת־הקנים`, *gi dub-ba-an* `גדר־קנים`;
  *ur-maḫ* `אריה` (≠ *piriĝ* `לביא`, *ug* `לַיִשׁ`); *agrun* `החדר`; *ĝiri₂ la₂* `תולה הפגיון`; *a₂-la₂* `תוף־האָלָא`; *ub₃
  zabar* `תוף־הארד`; *al-ĝar-sur₉* `מקלות־התוף`; *{ĝiš}za₃-mi₂* (instrument) `הַזַּמִּי` (not `תהילה`); *zabar* `ארד`;
  *kaš* `שֵׁכָר`, *kurun₂* `סובא`, *ulušin* `שֵׁכַר־האֻלֻּשִׁין`, *duḫ* `מחית`; *a-da-min₃* `תחרות`; *akkil* `המולה`; *kar₂*
  `זרח`; *kad₅* `קשור`; *ḫaš₄ ĝar* `שם ירך` (brood); *niĝir* `כרוז`; *pisaĝ* `טנא`; *nam-šub* `קסם`. Names: Ašgi
  `אַשְׁגִּי`, Šulpae `שׁוּלְפָּאֶה`, Urumaš `אוּרוּמָשׁ`, Isimud `אִיסִימוּד`, Niraḫ `נִירָח`, Ubšu-unkena `אוּבְּשׁוּאוּנְכֵּנָה`,
  E-engura `אֵ־אֶנְגּוּרָה`.

### Key findings
- **The ancient mind.** The Keš hymn, already copied at Abū Ṣalābīḫ around 2600 BCE, is pure praise of a building:
  no god acts in it but Enlil, who looks and praises, and Nisaba, who writes the praise down (9–12). The temple is a
  barge in the sky, a roaring bull, a rainbow, a mountain and a spring at once, measured in impossible fields "above"
  and "below" (45–54); it is a city whose inside no one knows (59–60), and the hymn ends in a paradox of holiness: "to
  the city – the man who approaches – let him not approach!" (128–131). Enki's Journey makes the temple alive – its
  bricks speak and take counsel, its reed screen roars – and turns a building story into a family one: the son builds,
  sails to his father with beer and a feast, seats the gods in their order, and the father proclaims "my son has built
  a house" before the assembly.
- **The Bible (shared motifs).** The refrain's rhetorical birth questions ↔ Isa 66:8 (`מִי שָׁמַע כָּזֹאת מִי רָאָה
  כָּאֵלֶּה`, Zion in labour) and Ps 87:5; the sanctuary one may not approach ↔ Exod 19:12, Ps 24:3 (KH 128, EJ 123); the
  building whose head reaches heaven ↔ Gen 11:4 (a [divergence]: pride there, praise here); the measured house ↔ Ezek
  42:20; "Jerusalem, the built one" ↔ KH 132; the horn in the cult ↔ Ps 150:3; the son who builds the house and the
  father who confirms it ↔ 2 Sam 7:13; Enki's unchangeable word (EJ 68) ↔ Ps 89:35; no one may look inside (EJ 47) ↔
  Exod 33:20. [cognate]: the Euphrates `פְרָת` (EJ 24).
- **ETCSL corrected:** "Draw near … but do not draw near" (KH 128) adds an imperative the Sumerian lacks; "the king
  places stone bowls" (108) makes an intransitive *gub* transitive; "was erected for Nudimmud" (EJ 10) is a plural
  "stand before him"; "Enlil was made happy" (EJ 116) is "brought joy" (= EJ 82); "holy" is *kug* "pure"; "lord" for
  *lugal* "king" (EJ 35, 45).

## Part 6 (IB 1–154)
Translator T3, Round 8 run 2, 2026-11-13.

### Progress
- **IB 1–154** drafted whole (154 entries): header, 12 `## ` sections, `translation--intro-IB.rtl.md`.
- Three passes: (a) fidelity – every verbal chain against the ORACC morph: *ḫe₂-/ḫa-* + ḫamṭu affirmative `אכן`
  (53–54, 66, 86, 89–90, 98, 101), + marû wish (75, 80, 91, 93–95, 110, 121, 141); *na-* + marû `אַל` (55–57, 84, 96);
  *bara-* `בַּל` (87–88, 100, 102); the first-person passages parsed by agent marking (ḫamṭu without *-n-* = "I did":
  68, 105b, 118, 137, 139; *-n-* … *-en* = "he did to me": 101, 104–106, 108); ORACC's *bara* (negative) for
  *ba-ra-* in 104–105 rejected (= *ba-ta-*, "out": the expulsion stands); person/number of the land (masc.) and the
  city (fem.) aligned (43–57); (b) consistency – `lexmap IB` reviewed; every new word grepped in all corpora; four
  collisions fixed (`צָנִיף` is Gudea's *gur* → *suḫ-gir₁₁* `צְפִירָה`; `גיל` is *ul* in Lugalbanda and Anzud → *asil*
  `רִנָּה`; `נעקר` is *bur₁₂* → *zir* `נשבר`; `הקצה` → *ba* `חילק`, = Akk. *zâzu*); *gur₃* one word `טעון` (68
  `טָעַנְתִּי`, not `נשא` = *il₂*); lines shared with other texts copied (7–8 Inana's Descent; 34, 115 EWO; 66
  Enmerkar and Ensuḫgirana; 112 Lugalbanda; 127 Lugalbanda; 145 Lugalbanda's *šu ba-an-ši-in-ti*); (c) Hebrew –
  `עִמִּי`, `יָאֹר`, `שׂוּמָה` (not `הוּשְׂמָה`), `אֵלָה`, `גָּלָה` without the article, `בריאה את!` (not bare `בריאה`,
  "creation"), `טָעַנְתִּי`.
- `canon_tools.py verify IB`: OK; `check_bible_quotes.py`: 0 problems.

### Open decisions
18. **ur split by sense:** 14 *nin ur-ra u₅-a* `הרוכבת על *החיה*` (Inana's lion?), 128 *ur-gin₇ ad₆ gu₇* `ככלב`. One
    lemma; if the corpus wants one word, `כלב` in both.
19. **nam-en = `כהונת־האֵן`** (IB 4 = 107, Enheduana's crown), while EN has `אדנות` (a king's lordship): a split by
    sense (*en* `אֵן` for the office, renderings §2).
20. **u₃-sumun₂ = `פרת־הבר`** (58, 91; = Enmerkar and Ensuḫgirana's *u₃-sumun₂ zid* `פרת־הבר הנאמנה`), which collides
    with NI's *immal₂* `פרת־בר`: one should move (for the lead).
21. **Splits recorded:** *bur₂* "reveal" `חשף` (57, 119) / "interpret (a dream)" `פשר` (temple corpus); *du₈* `התיר`
    (75–76) / "spread" `פרש` (147); *šu la₂* `מתח יד` (118, = the Ur lament) / *la₂* `תלה` (7); *gu₃ de₂* "shout" `השמיע
    קול` (126) – the formula `פונה אל` kept for the address form only; *la-la* `עתרת` (= S&W), which LH has for
    *nuḫšum* (a cross-language overlap for the lead).
22. **Uncertain person / mood, marked in the lines:** 70–71 (the form says "the light came near", ETCSL "I
    approached"); 84 `אַשִׁימְבַּבַּר – אַל תתייגע!?` (vocative; ETCSL "do not be anxious about A."; 1st person
    possible); 98 *ḫe₂-* + ḫamṭu read affirmative `אכן נזנחה` (ETCSL a wish); 105b `אכלתי` (no *-n-*; or impersonal);
    138 *na-* + marû as a negative question `הלא יתקרר לי?`; 76 *mu-e-du₈-e* (2nd-person *-e-*; object left out).
23. **Gate problem (report, not edited):** ETCSL's catalogue note in IB 1's backticked line ("OB catalogue from Urim")
    licenses the Urim trap, so `אור־יום` had to be vocalized there (`אוֹר־יוֹם`). The verifier should strip the
    italic `*Cited in …*` notes before the trap and gate checks.

### Proposals for the corpus renderings
- **Formulas (copy letter for letter):** the refrain *X ḫe₂-zu-am₃* = `שX – יִוָּדַע!` (123–133), opened by *ḫe₂-zu
  ḫe₂-zu-am₃* = `יִוָּדַע! יִוָּדַע!` (122); *{d}nanna li-bi₂-in-dug₄-ga za-a-kam bi₂-in-dug₄-ga* = `אשר נַנָּה לא אמר,
  אשר "שלָּךְ הוא!" אמר` (122 = 134); *-me-en* to a goddess = `X את` (12, 112, 114), *za-e-me-en* = `את היא` (6);
  Enheduana's self-naming `האֵן אני, אֶנְחֶדּוּאַנָּה אני` (67), `אֶנְחֶדּוּאַנָּה אני` (81), `האֵן הצחה של נַנָּה אני`
  (120); *šag₄ … ḫa-ma-sed-de₃* = `לבך – יתקרר לי!` (80, 121; 138 `הלא יתקרר לי?`); *šag₄ … ki-bi gi₄* = `אל מקומו
  ישוב לי!` / `אל מקומו שָׁב לה` (110 ↔ 146); *{d}a-nun-na diĝir gal-gal-e-ne* = `הָאֲנוּנָּה, האלים הגדולים` (34,
  115; = EWO); *kur gul-gul* = `הורסת ההר` (17, 153); *nin X dirig-ga a-ba ki-za ba-an-tum₃* = `גבירה העולה על X – מי
  ממקומך הביא?` (42 = 59); *u₃-ma gub* = `בעוז עומד` (104, 133); *ga-am₃-dug₄* = `אומרה` (63, 136).
- **Terms (new or confirmed):** *nin me šar₂-ra* `גבירת כל הַ־מֶה` (pre-set, used); *ud* "daylight" `אור־יום` (1, 70,
  147; *ud* storm `סערה`); *nu-gig* `נוּגִיג` (= Inana's Descent); *suḫ-gir₁₁* `צְפִירָה`; *nam-en* `כהונת־האֵן`; *uš₁₁*
  `ארס`; *a-ma-ru* `מבול`; *izi* `אש`; *biluda* `טקסים`; *za-pa-aĝ₂* `שאון`; *niĝ₂-me-ĝar* `דממה`; *šu ti* `לקח` (=
  Akk. *leqû*: 23, 145); *i-dub* `סף`; *ĝal₂ taka₄* `פתח`; *sig* `*מוטל*`; *gu₃ ra* `הכה קול`; *im-ḫul* `הרוח הרעה`;
  *su-din* `עטלף`; *ib₂* `זעף`; *mir* (adj.) `זעם` (*mir* wind `רוח הצפון`); *te-en* `צינן` / `הצטנן`; *sed* `התקרר`,
  *sed₄* `קירר`; *ḫul-ĝal₂* `רע`; *ḫur-saĝ* `הררים`; *gid₂* `האריך`; *abul* `שער`; *de₂* (liquids) `יצק`; *laḫ₅*
  `הוביל`; *sil* `פילח`; *ki-e-ne-di* `מקום משחק`; *sar* `רדף`; *zir* `נשבר`; *bur₂* (reveal) `חשף`; *u₃-sumun₂*
  `פרת־הבר`; *ĝipar* `גִּיפַּר`; *masab* `סל־המַסַּבּ`; *asil* `רִנָּה`; *ki-sig₁₀* `סעודת־המתים` (= Inana's Descent);
  *lal₃* `דבש`; *uḫ* `רוק`; *saḫar … gi₄* `לעפר שב`; *kar* `נטל` (= Lugalbanda); *nam … kud* `אָרַר`; *er₂ pad₃*
  `מצא דמעות`; *ma₂* `ספינה`; *ug₅* `מת`; *en₃ tar* `דרש`; *ki-lul-la* `מקום־הרצח`; *nam-ĝu₁₀* (idiom) `מה לי?` (=
  Enmerkar and Ensuḫgirana); *sim* `סנונית` (= Gudea); *ab* `חלון`; *kiši₁₆ kur-ra* `חוח ההר` (= the Ur lament);
  *ĝiri₂ ba-da-ra* `פגיון וסכין`; *tab* (companion) `שותף`; *ninim* `קנאה`; *an-ur₂ an-pa* `שורש השמים, רום השמים` (=
  Lugalbanda); *gu₂ ĝiš ĝar* `צוואר לעץ שָׂם`; *banda* `צעיר`; *a-gin₇* `אֵיךְ`; *ki su-ub* `נשק את הארץ`; *nundum*
  `שפה`; *di kur₂* `דין נכרי`; *niĝin₂* `סבב`; *ĝiš-nu₂ gi-rin-na* `מיטת־הפרחים` (= Enmerkar); *uru₁₆* `נישא`; *še-g*
  `שמע (לקול)`; *ne-mur* `רמץ`; *dub* (heap) `צבר`; *UN-gal* `שליט`; *gala* `גָּלָה` (no article); *an-bar₇* `צהריים`;
  *dab₅* `אחז`; *gu₂-en* `אולם־האספה`; *la-la* `עתרת` (= S&W); *ma-az* `גואה`; *iti₆* `אור־הירח`; *šudu₃ ša₄* `ברכה …
  בירך` (= Gudea); *ĝiš-kan₄* `עמוד־הפתח`; *ba* `חילק`. Names: Uraš `אוּרַשׁ`, Iškur `אִישְׁכּוּר`, Lugal-ane
  `לוּגַל־אַנֶּה`, Ašimbabbar `אַשִׁימְבַּבַּר`, Ušumgal-ana `אוּשׁוּמְגַּל־אַנָּה`, Ningal `נִינְגַּל`, E-ešdam-kug
  `אֵאֶשְׁדַּמְכּוּג`, E-ana `אֵאַנָּה`, Enheduana `אֶנְחֶדּוּאַנָּה`.

### Key findings
- **The ancient mind.** Inana B is the Decad's one text in a named author's voice, and its shape is a lawsuit: a
  priestess robbed of her house (69 "the funerary meal is set; I – I am not alive"), whose own god does not try her
  case (100–102), appeals over his head to his daughter, and wins. The hymn's theology is political: a city is
  punished not for a deed but for a sentence it did not say ("the land is yours!", 51–52), and the punishment reaches
  the bed – the wife will not talk sweetly to her husband at night (55–57). The great goddess is praised precisely for
  what is terrible in her – "that you eat corpses like a dog – let it be known!" (128) –, and the prayer's answer is
  told in the prayer's own words: "may your heart return to its place for me" (110) → "the heart of Inana returned
  to its place for her" (146). The poem also tells its own transmission: the song "spoken at night" is to be repeated
  by a *gala* singer "at noon" (139–141) – as the school repeated it.
- **The Bible (shared motifs; the strongest contacts).** The betraying companion who "entered as a partner and
  approached in envy" (90) ↔ Ps 55:13–15 (`וְאַתָּה אֱנוֹשׁ כְּעֶרְכִּי`), Ps 41:10; "my own case is not finished; an
  alien case surrounds my eyes" (117) ↔ Ps 43:1 `וְרִיבָה רִיבִי`; the refrain "let it be known" after the enemies'
  ruin (122–133) ↔ Ps 83:19, 59:14 `וְיֵדְעוּ כִּי`; "she took her prayer" (145, *šu ti* = Akk. *leqû*) ↔ Ps 6:10
  `יְהוָה תְּפִלָּתִי יִקָּח` – the same verb with the same object; "returned to dust" (73, *saḫar* + *gi₄*) ↔ Gen
  3:19, Ps 104:29 (the gift of soothing, not man, returns to dust); the gods fleeing like bats to the ruin mounds (35) ↔
  Isa 2:20–21; fire rained on the land (13) ↔ Ps 11:6; the river turned to blood that the people cannot drink (45) ↔
  Exod 7:20–21; tears as drink (82) ↔ Ps 102:10; counted with the dead while alive (69) ↔ Ps 88:5; the swallow (105) ↔
  Isa 38:14; prayer at night and at noon (140–141) ↔ Ps 55:18; lofty as heaven, broad as earth (123–124) ↔ Job
  11:8–9; the gods kissing the ground (116) ↔ Ps 72:9, Isa 49:23; the mountain and the flood at her feet (78) ↔ Ps
  29:10. All shared motifs: Sumer never met Israel.
- **ETCSL corrected:** "righteous" (2, 60) and "good" (65, 91) are *zid* "true"; "holy" is *kug*; "not yet" (117,
  122, 134) is not in the Sumerian; "Mistress of heaven" (3) is the untranslated title *nu-gig*; "my ability to soothe
  moods vanished" (73) hides "returned to dust"; "may your ship … be abandoned" (98) is an affirmative past; "the
  greatest deity" (87) is "the god, the great man"; "offerings" (145) is *sizkur₂* "prayer"; "everyone's speech" (152)
  adds "everyone"; ORACC's machine parse reads the expulsion lines (104–105) as negated.

## Part 7 (EB 1–184, NG 1–121)
Translator T3, Round 8 run 2, 2026-11-13.

### Progress
- **EB** (184 entries) and **NG** (121 entries) drafted whole: headers, `## ` sections (EB 9, NG 8),
  `translation--intro-EB.rtl.md`, `translation--intro-NG.rtl.md`. IB 1 un-vocalized (`אור־יום`) after the decision-23 fix.
- **Repeated passages fixed before the first copy:** Inana's speech EB 33–52 = 92–111, copied letter for letter, with each
  Sumerian difference given its own Hebrew (93 no *-ra-*; 98 *UŠ … šub*; 99 *laḫ₅*, *sar-sar*; 101 *ebiḫ₂-bi*; 103 no
  *-na-*; 106 *tuku*; 110 ⟨ku⟩); the refrains EB 25–26, 30–32, 89–91, 113–115, 176–177, 180–181; the indictment
  153–158 = 33–35 in the 2nd person; NG 7 / 26 / 39 / 61 / 78 (`מזרועו / מידו לא יצא`), 11 = 60, 82 = 98, 83 = 104, 113 = 114.
- Three passes: (a) fidelity – *na-* + ḫamṭu in EB 30–35/92–94 read as **negative** (`לא`), proved by the parallel *nu-*
  in 157–158, against KH's affirmative *na-* (decision 13); EB 159–160 *-ge-en* / *-be₂-en* marû = present (ETCSL past);
  ORACC's *bara-* for *ba-ra-* (EB 134, 177; NG 82) rejected again; person of 164 (the *-n-* vs the speech context)
  noted; (b) consistency – `lexmap EB NG` reviewed; lines copied from Lugalbanda (EB 53), Inana's Descent (EB 54
  `הפַּלָּה`), the Ur lament (EB 47/106 `במאגרי המים … איש הזיכוך`), Enki and Ninḫursaĝa (EB 65), LSU (NG 57), SA 37 (NG
  112), EWO (NG 18), LB 32 (NG 37, 91), Anzud (NG 62–63); (c) Hebrew – gate-safe wording (`אשר בו` for `שבו`, `שבתוכו`,
  `מחזיר` for *ni₁₀*, `מיטבו` for `מבחרו`, `תוף` for *ub*), vocalized traps (`שָׁאֲלָה`, `אֵלָה`, `אֵלָתוֹ`, `צִירִי`, `אוֹת`,
  `גָּלָה`, `גַּלָּה`), fully-vocalized short lines un-vocalized (EB 69, 88, 183–184; NG 121).
- `verify EB`, `verify NG`, `verify IB`: OK; `check_bible_quotes.py`: 0 problems (it caught one misquote, Ps 7:14).

### Open decisions
24. **na- + ḫamṭu is negative in EB** (30–35, 92–94: "it did not show me its fear"), affirmative in KH (decision 13):
    both by context; a corpus note on *na-* would help the reviewers.
25. **Gate problems (workarounds, for the gate tables):** *ub* (drum) cannot be transliterated (`אוּבּ` hits the `אוב`
    gate) – EB 174 has `תוף`; `מבחר` is read as מ+`בחר` (NG 113–114 `מיטבו`); `שבו` "in it" (EB 46/105 `אשר בו`).
26. **Splits by sense:** *sar* `הריץ` (EB 39, 99: the "skipping-rope" game) / `רדף` (IB); *sud* `פשט` (EB 12) / `הרחיק`;
    *nitalam* `בן־זוג` (NG 85); *si* "fill" `מילא` and "put on (a garment)" (NG 100 `*ימלא*`); *nu-banda₃* `ממונה` (NG 88, =
    Lugalbanda) collides with T1's *maškim* `ממונה`; *gal₅-la₂* `גַּלָּה` (NG 96, the prison officer; = Gudea) beside the
    netherworld's *galla* demons; *mar-uru₅* "flood" / *e-mar-uru₅* "quiver" (EB 4, 41, 135–136) – one sign, two words.
27. **Uncertain lines, marked:** EB 18, 51/110 (*kur-ku*), 63, 72–73, 75, 82, 88, 146, 166; NG 16, 40, 43, 45–46, 50, 71,
    87 (no negation in the form; `לא` from 75), 100, 102, 116.
28. **EB 177 *ba-ra-šum₂*** (ORACC "did not give") read as 176 *ba-šum₂* "I gave (my) head" = attacked.

### Proposals for the corpus renderings
- **Fixed strings:** the indictment `מאחר שמעצמו לא עשה לי, / מאחר שאת אפו – ארצה – לא קירב לי, / מאחר ששפתיו בעפר לא גרר
  לי –` (EB 33–35 = 92–94; 2nd person 157–158 `על שאת אפך ארצה לא קירבת, / על ששפתיך בעפר לא גררת –`); `את אימתו לא עשה
  לי` (*ni₂-bi na-ma-ra-ab-ak*, 30–32); `כעיר שאַן אררה – אל מקומה אַל תשוב! / כאשר אֶנְלִיל מצח האריך – את צווארה אַל
  ירים!` (49–50 = 108–109); *ka tar … sil* `את תשבחתי יפלח` + *me-teš₂ i-i* `שבח יעלה לי` (EB 52, NG 110–111); *zid-du
  erim₂-du bar ak* `(להפריד) את הנאמן מן הרשע` (NG 11, 60); *šu/a₂ … nu-e₃* `מידו / מזרועו לא יצא`; *lul zid-bi zu* `את
  השקר והנאמן שבתוכו – יודע`; *gu₃ … de₂* (address) `פונה אל` (EB 152).
- **Terms:** *in-nin* `הגבירה`; *a₂-an-kar₂* `אַנְקַר`; *šen-šen* `מלחמה` (*me₃* `קרב`); *ešemen* `חבל־הקפיצה`; *mar-uru₅*
  (quiver) `אשפה`; *a₂-sag₃* `אבן־קלע`; *ebiḫ₂* `חבל`; *ĝiš-gid₂-da* `רומח`; *niĝ₂-su-ub* `ליטוש`; *ilar* `מקל־קלע`; *ḫa-zi-in*
  `גרזן`; *ḫul-du* `עושה־הרע`; *a-niĝin₂* `מאגר מים`; *pala₃* `פַּלָּה`; *šer-kan₂ dug₄* `קישט`; *gug* `אודם`; *šita* (weapon)
  `אַלָּה`; *dur* `רצועה`; *an-usan* `ערב` / `בין־ערביים`; *kan₄* `שער`; *ki-gal* `בסיס`; *mubum* `מוּבּוּם`; *kaskal* `מסע`,
  *ḫar-ra-an* `אורח`; *gana₂-ur₃* `משדדה`; *kur-ur₂* `שורש ההר`; *muš-saĝ-kal* `הנחש המובחר`; *al dug₄* `שָׁאַל`; *lu₂-tur*
  `קטן`; *aš₂ dug₄* `קילל`; *allanum* `אלון` [cognate]; *immen* `צמא`; *numun₂(-bur)* `חלפה`; *am-si* `פיל`; *Mullil*
  `מוּלִּיל`; *kurĝara* `כּוּרְגַּרָּה`; *pilipili* `פִּילִיפִּילִי`; *lilis* `לִילִיס`; *ĝiš-keše₂-ra₂* `סכר`; *e₂-eš₂* `בית־האסורים`
  (`כֶּלֶא` reserved); *{ĝiš}rab₃* `סד`; *irigal* `אִירִיגַל`; *id₂-lu₂-ru-gu₂* `נהר־המבחן`; *en-nu-uĝ₃* `משמר`; *erim₂-du*
  `רשע` (= Gudea); *zid-du* `הנאמן`; *bar ak* `הפריד` (`הבדיל` reserved); *kun₄* `מדרגה`; *a-sal-bar* `אַסַלְבָּר`; *dub-la₂*
  `מגדל־שער`; *ĝiš nu-kuš₂-u₃* `צירי־הדלת`; *suḫub₄* `מנעול`; *umbin* `טופר`; *er₉* `עצום`; *muš₃* `*במה*`; *unken* `אספה`;
  *ĝiš-bur₂* `פח`; *a-ĝi₆* `גל`; *i-si-iš* `יללה` (`מספד` reserved); *ma₅* `כתש`; *ni₁₀* `החזיר`; *e₂-gi₄-a* `כלה`; *gi-dur kud*
  `כריתת פתיל־הקנה`; *mi₂ zid dug₄* `טיפוח נאמן`; *ni₂ silim-eš₂ e* `את עצמו, כשלם, משבח` (= Anzud); *kindagal* `גַּלָּב`;
  *gal₅-la₂* `גַּלָּה`; *im nam-til₃* `טיט החיים`; *ḫuĝ* (calm) `השקיט`; *luḫ* `רחץ`; *udu-i₃* `כבש־שמן`; *igištu* `*מגוננת*`.
  Names: Elam `עֵילָם`, Subir `שׁוּבִּיר`, Lullubi `לוּלוּבִּי`, Gibil `גִּיבִּיל`, Nungal `נוּנְגַּל`, Nin-egala `נִין־אֵגַלָּה`, Birtum
  `בִּירְתּוּם`, Ig-alim `אִיגְאַלִים`, Ninḫarana `נִין־חַרַנָּה`, Nezila `נֵזִילָה`, Nindimgul `נִין־דִּימְגּוּל`.

### Key findings
- **The ancient mind.** Ebiḫ is punished for an omission, as the city in Inana B is: it did not put its nose to the dust
  (EB 34, 157) – and its height, beauty and green slopes are listed as its crimes (153–156). An refuses (the mountain is
  too terrible even for the gods); Inana acts alone, kills the mountain like a beast (neck, heart, flanks) and then
  builds a palace and gives the cult performers their instruments – the same "dagger and knife" that Lugal-ane mocked
  Enheduana with in Inana B 108 are here cult objects (EB 173). Nungal A is a theology of prison: a house that "gives
  birth to the true man" (56, 60, 103), where the goddess of incarceration is also a midwife (71–72), the ordeal river
  "does not kill the straight one" (8), and the released prisoner, polished "like silver from the dust", is handed
  back "to the fair hand of his god" (106–109).
- **The Bible (shared motifs).** The mountain punished for its height ↔ Isa 2:12–14 (EB 120, 153); "his head in heaven" ↔
  Gen 11:4 (EB 156, a [divergence]); the warrior sharpening his weapon, arrows ready ↔ Ps 7:13–14 (EB 41, 140); the locust
  ↔ Joel 1:4 (EB 76); fire in the mountains ↔ Mic 1:4; Elam ↔ Gen 10:22 [cognate]; *allanum* ↔ `אַלּוֹן` [cognate]. NG: the
  bolt *si-ĝar* `מסגר` ↔ Ps 142:8 / Isa 42:7 `הוֹצִיאָה מִמַּסְגֵּר` (the same word: a Sumerian door-bolt becomes the Bible's
  prison); `משמר` ↔ Gen 40:3; the stocks ↔ Job 13:27; the ordeal river ↔ Num 5:24; the tablet of life ↔ Ps 69:29; the
  friends who keep away from the prisoner ↔ Ps 88:9 (`כָּלֻא וְלֹא אֵצֵא`); rescue "from the mouth of disaster" ↔ Job 33:28;
  refining like silver ↔ Mal 3:3.
- **ETCSL corrected:** EB "it showed me no respect" is right but its *na-* is negative here, not affirmative; EB 159–160
  are present, not past; EB 21 "ring out" is *ra* "strike (a song)"; NG "the just / righteous" is *zid-du* `הנאמן` / *si
  sa₂* `הישר`; NG 45 "naked" is "empty-hearted"; NG 103 "exterminates" is *te-en* "cools"; NG 48 "ineffective" is
  *niĝ₂-gig* "abomination"; NG 97 "will not be killed" is "his head will not be struck with the stick".

## Review R1 (SA LA)
Independent review (Round 8 run 2, 2026-11-13), three read-throughs of all 216 lines (fidelity against ETCSL + the ORACC
morph; consistency – `lexmap`, `rel`, the corpus formulas, every corpus's grep; Hebrew and apparatus). The self-praise
formula, the *ḫe₂-* + ḫamṭu `אכן` + past and the LA refrain are consistent throughout; no bracket, omission or
person/tense error was found.

**Lines changed:** SA 4 (wording/consistency 4, apparatus: 1 new **הקבלה**); LA 1 (wording/consistency 1). Brackets 0,
tense/mood/person 0, omissions 0.

**Notable fixes**
- **SA 52** *gud ḫa-ba-ni-gaz udu ḫa-ba-ni-šar₂* (coordinator's task 2): `שוורים אכן שחטתי שם, כבשים לרבבות אכן עשיתי
  שם` → `שוורים אכן הרגתי שם, צאן אכן שחטתי שם` – **the split is not confirmed but aligned**: EJ 93 is the same formula of
  oxen, not of people (`אנקי שוורים הורג, צאן שוחט`, = the Song of the Hoe 25), and *gaz* is `הרג` in every corpus (EB 74;
  the Ur-Namma laws; the Sumer and Urim lament; only the Curse of Agade 237 has `מכה`). The verb *šar₂* here is "slaughter" as in the
  formula (the variant *ḫa-ba-ni-šum* "slaughtered" confirms it), not the number *šar₂* `רבבה` (EN 17, 106). New
  **הקבלה**: [equivalent] `הָרֹג בָּקָר וְשָׁחֹט צֹאן` (ישעיהו כב:יג), as at Hoe 25. `../renderings.md` §5.3's "*gaz*
  (animals) `שחט`" should be dropped.
- **SA 51, LA 45** *tur₃*: `דיר` → `רפת` (*tur₃* `רפת`, *amaš* `דיר`: §5.4, Lugalbanda, Enmerkar and Ensuḫgirana).
- **SA 92** *an ub-da 4*: `בארבע הפינות של השמים?` → `בארבע הפינות`, as SA 4 and LB 5 (the *an* untranslated in both).
- **SA 99** *kur gul-gul*: `ההורס את ההרים` → `ההורס את ההר` (*kur* `ההר`, SA 91; IB 17, 153 `הורסת ההר`).
- NG 88's note on *maškim* updated (it is now `נציב`, LB 44: coordinator's task 1, reported in the Tetrad's review).

**Checked and kept:** open decisions 1 (SA 28 `את הרגל – אכן הפניתי?`: *ĝiri₃* beside *kaskal* may be "path" –
`את השביל`; the `?` stays, the doubt is the reading), 2 (SA 64, the image), 3 (*nir-ĝal₂* split), 4, 5.

## Review R2 (EL KH EJ)
Independent review (Round 8 run 2, 2026-11-13), three read-throughs of all 466 lines (EL 171, KH 165, EJ 130): fidelity
against ETCSL + the ORACC morph line by line (aspect, the modal prefixes, persons, brackets, the **פירוק**'s Hebrew
against the `>` line – also by script); consistency – `lexmap` over all twelve texts, `rel`/`verify`, the corpus
formulas, every corpus's grep for the formulas touched; Hebrew read aloud, every **הקבלה** tag and verse checked.
T2's three texts are accurate and the refrains are kept letter for letter; the fixes are a mood (the Keš closing), two
tenses, two brackets, a misread *an* and two tags.

**Lines changed:** EL 1 (brackets 1: 57); KH 6 (tense/mood/person 4: 128–131; brackets 1: 58O; wording/consistency 1:
6) + apparatus (128 tag, the header, the section heading, the intro); EJ 4 (tense 3: 15, 19, 20; wording/consistency 1:
126) + apparatus 1 (24 tag). Omissions 0. Total 11 lines.

**Notable fixes**
- **KH 128–131** *lu₂ te-a na-te*: `האיש הנגש – אַל יגש!` → `האיש הנגש – לֹא נִיגַּשׁ!` (coordinator's task; decision 13):
  see "The *na-* + ḫamṭu question" below. Header, `## 128–134` heading, 133's note, the intro and EJ 123's note follow.
- **KH 6** *an ub-da 4*: `אַן, ארבע הפינות` → `ארבע הפינות` – *an* is "heaven" in the fixed phrase "the four corners
  (of heaven)", not the god (the line had the ★ name); = SA 4, 92, LB 5 after R1, EL 68.
- **KH 58O** *[keš₃]⸢{ki}⸣-gin₇*: `כְּכֵשׁ` → `[כְּכֵשׁ]` – the name's only sign is restored (just the determinative
  survives): a restored word, bracketed like 58P `[כגיבורה]` (§6.8).
- **EJ 15** *gud-gin₇ mur im-ša₄*: `כשור נוהמת` → `כשור נָהֲמָה` – the finite form of the corpus formula `כשור נהם` (the
  Song of the Hoe 73, the same form; §5.5); the non-finite *mur ša₄* keeps the participle `נוהם` (KH 28, EJ 40).
- **EJ 19–20** *im-ma-ĝen*: `הולך` → `הלך` – singular "go" is *ĝen* only in ḫamṭu (marû *du*); the marû verbs beside it
  (*gu₃ … de₂-e*, *šum₂-mu*) keep their participles.
- **EJ 126** *teš₂*: `כאחד` → `יחד` (= EJ 40, SA 64; `כאחד` stays *dili-a*'s, EJ 103). **EL 57** *lagar?*: `?` added.
- **EJ 24** Tigris `חִדֶּקֶל`: [equivalent] → [cognate] (the same name via Akk. *idiqlat*: §6.4's rule for names).
  **KH 128** Exod 19:12: [equivalent] → [divergence] (a prohibition there, a statement here).

**The *na-* + ḫamṭu question (KH 128–131; EB 30–35)**
- In the drafts both texts already read the prefix as negative (KH `אַל` – prohibitive; EB `לא` – a negated fact); T2's
  "affirmative" reading was for KH 1–3 and EJ 80, 89 (narrative *nam-ta-ab-e₃* "came out", *na-zig₃*, *nam-du₈*): right,
  the narrative affirmative *na-* (Thomsen §§ on *na-*; Jagersma 2010 ch. 24; Attinger's "na- affirmatif"), kept.
  KH 54 *na-nam* (copula) – affirmative, kept. NI 19–20, 28–30 (*nam-mi-in-*) – narrative affirmative, kept.
- The grammars put the prohibitive *na-* with **marû** (*na-ab-be₂-en*, *na-te-ĝe₂₆-e*); *na-* with **ḫamṭu** is either the
  affirmative of narrative or – in Old Babylonian literary texts – a plain negation of a fact (= *nu-*). (These are the
  standard positions of Thomsen, Jagersma and Attinger as I know them; the books are not in the repository, so no
  paragraph numbers are cited.) **KH 128–131**: *na-te* is ḫamṭu (*te*, not *te-ĝe₂₆*) and 3rd person, so not a regular
  prohibitive; the affirmative gives a tautology ("the one who approaches does approach") in a coda that is not
  narrative; the negation of fact fits the hymn's refrain of the unattainable ("who has seen?"). Hence `לא` + past:
  "the man who approaches – has not approached", i.e. does not reach it – still a paradox, and the Hebrew repeats the
  root as the Sumerian does (`הנגש` / `ניגש`). **EB 30–35** *na-ma-ra-ab-ak(-a-gin₇)*: ḫamṭu, the parallel 157–158 has
  *nu-* for the same clauses, and only a negation gives Inana a reason to attack – **EB (T3's `לא` + past) is right**;
  no change proposed. The two texts now render the same construction with the same particle.

**Checked and kept:** EL 8 *mu-un-na-sun₅-sun₅-ne-eš* `משתפלים` (the OB marû 3rd plural *-e-ne-eš*); EL 158
*ba-e-de₃-tuku-dam* `אשר קנית לך` (*-ed-am* could be prospective, "whom you were to take"; ETCSL's past kept); KH 80
*nam-en mu-un-na-ak* `עושה` (ḫamṭu in a descriptive house list, stative); KH 28 `כשור נוהם` (non-finite); open decisions
11–12 (gate workarounds), 14 (closed by R1), 15–17; the cognates through the Akkadian equivalent (*saḫar*, *u₈*,
*niĝ₂-si-sa₂*) follow the folder's convention (§5.2 "a formula takes the same Hebrew across languages").

**For the coordinator**
1. `../renderings.md` §5.5: the closing string `האיש הנגש – אַל יגש!` should read `האיש הנגש – לא ניגש!` (decision 13
   closed as above); §5.5's `כשור נהם` is the finite form, the participle `נוהם` the non-finite one.
2. *us₂* "adjoin" is `צמוד` / `הצמיד` (KH 58F, 98; EJ 39, 56, 107) beside `מגיע` (reach) and `דבק` (attend): a third
   split by sense, recorded here.
3. *dili*: `יחיד` (EL 100) / `בייחוד` (EJ 100) / `כאחד` (EJ 103); *teš₂*: `יחד`, *teš₂-bi* "all of it" `כולו` (EJ 6) –
   splits by sense, recorded.
4. *muš₃* `*מראה*` (T2) vs `*במה*` (T3): see the Tetrad's Review R2.

## Review R3 (IB EB NG)
Independent review (Round 8 run 2, 2026-11-13), three read-throughs of all 459 lines (IB 154, EB 184, NG 121): (a) fidelity
against ETCSL + the ORACC morph line by line (every verbal chain: aspect, the modal prefixes, persons, agent marking,
brackets; the **פירוק**'s Hebrew against the `>` line, also by script – no mismatch); (b) consistency – `lexmap` over all
twelve texts, `verify all`, `rel`, the corpus formulas; (c) Hebrew read aloud, the apparatus. T3's parsing of Inana B holds
up: the *ḫe₂-* + ḫamṭu / marû split, the first-person agent marking (68, 105, 118, 137, 139 vs 101, 104–106), the
*bara-* / *ba-ra-* (= *ba-ta-*) distinction and the negative *na-* of EB 30–35 were all checked and kept.

**Lines changed (my texts):** IB 3 (brackets 2: 26, 52; apparatus 1: 25); EB 8 (tense/mood/person 0; wording/consistency
8: 3, 15, 22, 40, 56, 58, 99, 184); NG 7 (brackets 1: 64; omission/addition 1: 87; wording/consistency 5: 20, 29, 85, 110,
121). Total 18 lines; omissions 0.

**Notable fixes**
- **EB 15, 40, 99** *ḫur-saĝ-ĝa₂*: `בהרריי` → `בהררים` (15) / `ברכס` (40, 99) – the sign *ĝa₂* writes the locative *-a* after
  the stem's *ĝ* (ORACC's *-ĝu₁₀* "my" is a machine misparse: the narrator has no mountains, and Inana does not own Ebiḫ);
  ETCSL "in the mountain ranges / range". T3's own 117, 119, 126, 128, 138 already read it so.
- **NG 87** *lu₂ ba-an-ul₄-ul₄-e-ne*: `איש לא ימהרו` → `את האיש *ממהרים*` – the form has no negation; the draft imported
  `לא` from 75 (open decision 27).
- **NG 29** *muš₃* (coordinator's task 1): `על הבמה? שלו` → `ב*מראהו*` (§5.9; = EL 138, KH 13–14, 26, NI). No other
  `במה` line in T3's texts.
- **IB 52** *a-a ugu-zu* (no *-ak*): `"של האב…"` → `"(של) האב…"`; **IB 26** *niĝ₂*: `כל דבר` → `(כל) דבר`; **NG 64**
  *nam mu-un-tar* (no *-ma-*): `גורל לי גזר` → `גורל (לי) גזר`. **IB 25** *mu-ri-du*: the **פירוק** said ḫamṭu – *du* is the
  marû of *ĝen*.
- **NG 110** *diĝir lu₂-ba-ke₄*: `אל האדם ההוא` (read as a preposition) → `האל של האדם ההוא`.

**Corpus-wide consistency pass** (`lexmap` all twelve; `verify all`: no "same source, different Hebrew" note left)
| Lemma | Before → after | Lines |
|---|---|---|
| *ḫur-saĝ* (`הר` is *kur*) | `הר` → `רכס` (one range) / `הררים` (collective) | LA 48; KH 15, 17, 58I, 70; EJ 74, 121; EL 38, 97; NG 20; SA 48; EB 15 |
| *ḫar-ra-an* / *kaskal* | `דרך` ↔ `אורח` swapped → *ḫar-ra-an* `אורח` (= EB 74, 86; Akk. *ḫarrānu*), *kaskal* `דרך` | SA 17, 34; ID 24 |
| *nitalam* (§5.3 `איש` / `אשה`; *dam* `בן־זוג`) | `בן־זוגי` → `אישי` | NG 85 |
| *mur … ša₄* (`שאג` is *šeg₁₁ gi₄*) | `את שאגתן … נהו` → `את נהמתן … נהמו` | SA 63 |
| *ḫub₂* (§5.3 `דהירה`) | `מְדַלֶּגֶת` → `דוהרת` | EB 3 |
| *e* / *dug₄* `אמר` (`שיר` is *šir₃*) | `שרות` → `אומרות` | EB 22 |
| *de₆* `הביא` (`נשא` is *il₂*) | `נשאה` → `הביאה` | EB 58 |
| *gi-rin* `פרח` | `ורדות` → `פרחי אודם` | EB 56 |
| *a₂-dam* `נווה` (EL) | `היישובים` → `הנווה` | SA 49 |
| *dal* `עף` (IB 35, 105) | `הנמלטת` → `המעופפת` | SA 44 |
| *X za₃-mi₂* `X – תְּהִלָּה!` (§3) | `תהילה!` → `תְּהִלָּה!` | EB 184 (= SA 102), NG 121, EJ 129 |

**For the coordinator**
1. EB 183 `העלמה אִינַנָּה – תהילה!` stays unvocalized: with the ★ Inana the line trips the "fully vocalized" check (a gate
   limit, not a choice).
2. Splits by sense found and kept, to be recorded in §5 if accepted: *kaskal* `מסע` (EB 74, "murderous raids") beside
   `דרך`; `דרך` also for *a-ra₂* (method, §5.3), *in-di₃* (EB 51) and *ĝiri₃* "path" (NG 39, 44); *ḫur-saĝ* `רכס` /
   `הררים` (above; §5.6 has only `הררים`); *zi-pa-aĝ₂* `שאון` (IB 20) / `צוואר` (EB 56); *gur₄* `הגדיש` (EJ 111) / `חזק`
   (EB 19); *sud* `האריך` (SA 44, EL) beside *gid₂* `האריך`; *ḫuĝ* `רִצָּה` (a god: LA 56, NI 23) / `השקיט` (a heart: NG 105–106).
3. Checked and kept: IB 98 *ḫe₂-bi₂-ib-taka₄* affirmative (ḫamṭu: no marû *-e*); EB 162 *ba-e-te-en* `צננת` (2nd person,
   T3's note); EB 114 *{d}inana-me-en* without `אני` (An speaks; noted); EB 85 *ḫe₂-* + ḫamṭu `אכן` against ETCSL's wish.

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (SA)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | lugal-me-en šag₄-ta ur-saĝ-me-en | מלך אני; מן הבטן – גיבור אני. | `יְהוָה מִבֶּטֶן קְרָאָנִי` (ישעיהו מט:א); `מֵרֶחֶם מִשְׁחָר` (תהלים קי:ג) | equivalent | הייעוד מן הבטן; ובמזמור המלוכה . |
| 5 | na-gada sipad saĝ gig₂-ga-me-en | נוקד, רועה שחורי הראש אני; | `אֲשֶׁר הָיָה בַנֹּקְדִים מִתְּקוֹעַ` (עמוס א:א) | cognate | *na-gada* (= האכדית *nāqidu*) הוא מקורה של `נוֹקֵד` העברית (הנחיות §6.7: "Sumerian loans through Akkadian into Hebrew"); המלך הוא נוקד כמו עמוס. |
| 6 | nir-ĝal₂ diĝir kur-kur-ra-me-en | בעל הסמכות, אל הארצות אני; | `כִּסְאֲךָ אֱלֹהִים עוֹלָם וָעֶד` (תהלים מה:ז) | equivalent | המלך המכונה "אלהים" |
| 6 | nir-ĝal₂ diĝir kur-kur-ra-me-en | בעל הסמכות, אל הארצות אני; | `כִּסְאֲךָ אֱלֹהִים עוֹלָם וָעֶד` (תהלים מה:ז) | divergence | במסופוטמיה (אכד, אור השלישית) המלך המוּאלה זוכה ממש לפולחן, ובמקרא הפסוק יחיד ושנוי בפירושו. |
| 8 | šag₄-ge pad₃-da an kug-ga-me-en | נבחר־הלב של אַן הטהור אני; | `כָּרַתִּי בְרִית לִבְחִירִי` (תהלים פט:ד) | equivalent | המלך בחיר האל. |
| 12 | ĝeštug₂ šum₂-ma {d}en-ki-kam-me-en | אשר אֶנְקִי נתן לו בינה – אני; | `וַיִּתֵּן אֱלֹהִים חָכְמָה לִשְׁלֹמֹה` (מלכים א ה:ט) | equivalent | הבינה כמתנת האל למלך. |
| 23 | niĝ₂-si-sa₂-e ki ḫa-ba-aĝ₂-ĝa₂-am₃ | את המישרים – אכן אהבתי, | `אָהַבְתָּ צֶּדֶק וַתִּשְׂנָא רֶשַׁע` (תהלים מה:ח) | equivalent | אהבת היושר ושנאת הרע של המלך, באותו מבנה של שתי צלעות (23–25) |
| 23 | niĝ₂-si-sa₂-e ki ḫa-ba-aĝ₂-ĝa₂-am₃ | את המישרים – אכן אהבתי, | `אָהַבְתָּ צֶּדֶק וַתִּשְׂנָא רֶשַׁע` (תהלים מה:ח) | cognate | *niĝ₂-si-sa₂* = האכדית *mīšarum* ~ `מֵישָׁרִים` (ליפית־אישתר B 38). |
| 25 | inim niĝ₂-erim₂ dug₄-ga ḫul ḫa-ba-ra-gig-ga-am₃ | את דובר דבר העוולה – אכן שנאתי. | `דֹּבֵר שְׁקָרִים לֹא יִכּוֹן לְנֶגֶד עֵינָי` (תהלים קא:ז) | equivalent | המלך שאינו סובל את הדובר רע. |
| 28 | ĝiri₃ ḫu-mu-gur kaskal kalam-ma-ke₄ si ḫe₂-mi-sa₂-sa₂ | את הרגל – אכן הפניתי?, את דרכי הארץ אכן יישרתי, | `יַשְּׁרוּ בָּעֲרָבָה מְסִלָּה` (ישעיהו מ:ג) | equivalent | יישור הדרכים, כאן מעשה מלך ממשי (אידין־דגן B 24). |
| 33 | a₂ sed₄-bi-še₃ ni₂ ḫe₂-eb-ši-te-en-te-en | לעת הקֹר – יצטנן שם! | `מִתְהַלֵּךְ בַּגָּן לְרוּחַ הַיּוֹם` (בראשית ג:ח) | equivalent | "עת הקֹר" של היום, ובשתיהן – בגן. השעה הצוננת של ערב (או של בוקר) היא שעת ההליכה והמנוחה בארץ חמה. |
| 35 | iri du₃-a-gin₇ zi-ni ḫa-ba-ši-in-tum₃ | כמו אל עיר בנויה – את נפשו (לשם) יוביל! | `וְהָיוּ לָכֶם הֶעָרִים לְמִקְלָט` (במדבר לה:יב) | equivalent | מקום מחסה בדרך |
| 35 | iri du₃-a-gin₇ zi-ni ḫa-ba-ši-in-tum₃ | כמו אל עיר בנויה – את נפשו (לשם) יוביל! | `וְהָיוּ לָכֶם הֶעָרִים לְמִקְלָט` (במדבר לה:יב) | divergence | שם מחסה לרוצח בשגגה, כאן לנוסע מפני הלילה. |
| 36 | mu-ĝu₁₀ ud ul-le₂-a-aš ĝa₂-ĝa₂-de₃ ka-ta nu-šub-bu-de₃ | את שמי – לימים רחוקים – לָשׂוּם, שמן הפה לא ייפול, | `יְהִי שְׁמוֹ לְעוֹלָם … יִנּוֹן שְׁמוֹ` (תהלים עב:יז); `וְעָשִׂתִי לְךָ שֵׁם גָּדוֹל` (שמואל ב ז:ט) | equivalent | שם המלך החי לדורות; . |
| 42 | piriĝ nam-šul-bi-ta nu-kuš₂-u₃ ne₃-ba gub-ba-me-en | לביא, אשר בעלומיו אינו יגע, העומד בכוחו – אני. | `יָרוּצוּ וְלֹא יִיגָעוּ` (ישעיהו מ:לא) | equivalent | הרץ שאינו יגע. |
| 43 | {tug₂}niĝ₂-lam₂ ban₃-da ib₂-ĝa₂ ba-du₃ | את בגד־הנִיגְלָם הקטן – על מתניי – הידקתי. | `וַיְשַׁנֵּס מָתְנָיו וַיָּרָץ לִפְנֵי אַחְאָב` (מלכים א יח:מו) | equivalent | הרץ החוגר את מתניו לפני ריצה ארוכה, ובשתיהן ריצה אל מלך / של מלך. |
| 47 | uĝ₃ saĝ gig₂-ga u₈-gin₇ lu-a u₆ dug₃ ḫa-ma-ab-dug₄ | שחורי הראש, הרבים כרחלות – בהתפעלות טובה אכן התפעלו בי. | `מְלֵאוֹת צֹאן אָדָם` (יחזקאל לו:לח) | equivalent | העם הרב כצאן. |
| 52 | gud ḫa-ba-ni-gaz udu ḫa-ba-ni-šar₂ | שוורים אכן הרגתי שם, צאן אכן שחטתי שם; | `הָרֹג בָּקָר וְשָׁחֹט צֹאן` (ישעיהו כב:יג) | equivalent | אותו צמד בדיוק, בחגיגה (= המעדר והמחרשה 25, מסע אנקי לניפור 93). |
| 66 | {d}iškur-re an niĝ₂-daĝal-la-ba gu₃ ḫu-mu-ni-dub₂-dub₂ | אִישְׁכּוּר – בשמים, במרחביהם – קול אכן הרעיש. | `אֵל הַכָּבוֹד הִרְעִים` (תהלים כט:ג) | equivalent | אל הסערה המרעים בקולו; אִישְׁכּוּר (= אדד) הוא מקבילו המסופוטמי של בעל־הדד הכנעני. |
| 67 | im an-na-ke₄ a ki-ta gu₂ ḫe₂-em-ma-da-ab-la₂ | גשמי השמים – עם מי הארץ – צוואר אכן חיבקו. | `נִבְקְעוּ כָּל מַעְיְנֹת תְּהוֹם רַבָּה וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא) | equivalent | מי מעלה ומי מטה הנפגשים; כאן סערה אחת, שם המבול. |
| 68 | na₄ tur-tur-bi na₄ gal-gal-bi | אבניו הקטנות, אבניו הגדולות – | `וַיהוָה הִשְׁלִיךְ עֲלֵיהֶם אֲבָנִים גְּדֹלוֹת מִן הַשָּׁמַיִם` (יהושע י:יא) | equivalent | אבני הברד "הגדולות". |
| 70 | lugal-me-en ni₂ ba-ra-ba-da-te su ba-ra-ba-da-zig₃ | מלך אני – בל פחדתי, בל סמר בשרי; | `תְּסַמֵּר שַׂעֲרַת בְּשָׂרִי` (איוב ד:טו) | equivalent | הבשר ה"קם" מפחד, אותה תמונה. |
| 82 | nitalam-ĝu₁₀ ki-sikil {d}inana nin ḫi-li an ki-a | אשתי, העלמה אִינַנָּה, גבירת החן של שמים וארץ, | `תִּקְרְאִי אִישִׁי` (הושע ב:יח) | equivalent | בן־הזוג האלוהי |
| 82 | nitalam-ĝu₁₀ ki-sikil {d}inana nin ḫi-li an ki-a | אשתי, העלמה אִינַנָּה, גבירת החן של שמים וארץ, | `תִּקְרְאִי אִישִׁי` (הושע ב:יח) | divergence | בהושע הנישואין הם משל לברית בין אל לעם, כאן הם יחסי מלך ואלה בפולחן. |
| 86B | zi a-a-ĝu₁₀ kug {d}lugal-ban₃-da? | חֵי אבי, הטהור, לוּגַלְבַּנְדָּה?, | `חַי יְהוָה וְחֵי נַפְשֶׁךָ` (שמואל א כ:ג) | equivalent | שבועה ב"חיי" האל וב"חיי" האדם: *zi DN* השומרי הוא אותה נוסחה. |
| 86J | lugal [ki-en-gi]-⸢ra?⸣ ĝe₂₆-gin₇-nam uĝ₃-e ba-ra-ĝal₂-la | מלך [שׁוּמֶר] כמוני – לעם בל היה. | `אֲשֶׁר לֹא הָיָה כָמוֹךָ אִישׁ בַּמְּלָכִים כָּל יָמֶיךָ` (מלכים א ג:יג) | equivalent | המלך שאין כמוהו |
| 86J | lugal [ki-en-gi]-⸢ra?⸣ ĝe₂₆-gin₇-nam uĝ₃-e ba-ra-ĝal₂-la | מלך [שׁוּמֶר] כמוני – לעם בל היה. | `אֲשֶׁר לֹא הָיָה כָמוֹךָ אִישׁ בַּמְּלָכִים כָּל יָמֶיךָ` (מלכים א ג:יג) | divergence | על שלמה אומר זאת האל, כאן המלך על עצמו. |
| 87 | an-ne₂ aga zid maḫ saĝ-ĝa₂ ḫe₂-em-mi-in-gen₆ | אַן – כתר נאמן ונשגב – על ראשי אכן כונן. | `תָּשִׁית לְרֹאשׁוֹ עֲטֶרֶת פָּז` (תהלים כא:ד) | equivalent | הכתר שהאל שׂם על ראש המלך. |
| 88 | e₂-kur za-gin₃-na {ĝiš}ĝidru ḫa-ba-dab₅-ba | באֵכּוּר של הספיר – שרביט אכן אחזתי. | `מַטֵּה עֻזְּךָ יִשְׁלַח יְהוָה מִצִּיּוֹן` (תהלים קי:ב) | equivalent | השרביט הניתן למלך מן המקדש. |
| 89 | barag babbar-ra {ĝiš}gu-za suḫuš gen₆-na saĝ an-še₃ ḫa-ba-il₂ | על דוכן לבן, כסא מכונן־יסוד – ראש אל השמים אכן נשאתי. | `צֶדֶק וּמִשְׁפָּט מְכוֹן כִּסְאֶךָ` (תהלים פט:טו) | equivalent | הכסא ה"מכונן". |
| 92 | an ub-da 4 uĝ₃ saĝ sig₁₀-ga-a-ba mu-ĝu₁₀ ḫe₂-em-mi-sa₄ | בארבע הפינות, בעם אשר ראשו מושת – את שמי יקראו! | `וְיִקָּרֵא בָהֶם שְׁמִי` (בראשית מח:טז) | equivalent | קריאת השם כהמשך קיומו. |
| 94 | nam-maḫ-ĝu₁₀ ḫu-mu-ni-pad₃-de₃-ne | את נשגבותי – יזכירו! | `בְּכָל הַמָּקוֹם אֲשֶׁר אַזְכִּיר אֶת שְׁמִי` (שמות כ:כ) | equivalent | "הזכרת השם". |
| 97 | nam-ur-saĝ nam-kalag-ga nam-til₃ niĝ₂ dug₃ saĝ-e-eš rig₇-ga | גבורה, חוזק, חיים, דבר טוב – במתנה העניק לו; | `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה) | equivalent | החיים כמתנת האל למלך. |

### Parallels index (LA)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | lugal mi₂ dug₄-ga šag₄-ta numun zid-me-en | מלך מחובב, מן הבטן זרע נאמן אני; | `עַד עוֹלָם אָכִין זַרְעֶךָ` (תהלים פט:ה); `זֶרַע אֱמֶת` (ירמיהו ב:כא) | equivalent | זרע המלוכה;  – הצירוף עצמו (*numun zid*), שם על ישראל כגפן. |
| 2 | {d}li-pi₂-it-eš₄-tar₂ dumu {d}en-lil₂-la₂-me-en | לִיפִּית־אִישְׁתַּר, בן אֶנְלִיל אני. | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז) | equivalent | המלך כבן האל (ליפית־אישתר B 25). |
| 3 | {ĝiš}isimu₂{sar} {ĝiš}erin-na-gin₇ saĝ mu-il₂-la-ta | מאז שנשאתי ראש כיונקת ארז, | `וְלָקַחְתִּי אָנִי מִצַּמֶּרֶת הָאֶרֶז … מֵרֹאשׁ יֹנְקוֹתָיו רַךְ אֶקְטֹף` (יחזקאל יז:כב) | equivalent | "יונקת הארז" כמשל למלך, בעברית ובשומרית באותן מלים (*isimu₂* = `יוֹנֶקֶת`, *erin* = `אֶרֶז`). |
| 9 | am su-ba saĝ nu-ĝa₂-ĝa₂-me-en | רְאֵם, אשר מול גופו ראש אין שׂם – אני; | `כְּתוֹעֲפֹת רְאֵם לוֹ` (במדבר כג:כב) | equivalent | הראם כמשל לעוצמה; *am* = האכדית *rīmu* ~ `רְאֵם`. |
| 14 | nundum inim-inim-ma ḫe₂-du₇-me-en | שפתיים – תפארת לכל דבר – אני; | `הוּצַק חֵן בְּשִׂפְתוֹתֶיךָ` (תהלים מה:ג) | equivalent | יופי שפתי המלך. |
| 18 | saĝ gig₂-ga sipad zid-bi-me-en | שחורי הראש – רועם הנאמן אני; | `וַהֲקִמֹתִי עֲלֵיהֶם רֹעֶה אֶחָד … אֵת עַבְדִּי דָוִיד` (יחזקאל לד:כג) | equivalent | המלך כרועה העם. |
| 20 | diĝir nam-lu₂-ulu₃ nir-ĝal₂ uĝ₃ šar₂-ra-me-en | אל האנושות, בעל הסמכות של עם רבבות אני; | `כִּסְאֲךָ אֱלֹהִים עוֹלָם וָעֶד` (תהלים מה:ז) | equivalent | המלך המכונה אל (שולגי A 6). |
| 23 | išib an-na šu dadag-ga-me-en | אִישִׁיבּ של אַן, צח־הידיים אני; | `נְקִי כַפַּיִם וּבַר לֵבָב` (תהלים כד:ד) | equivalent | טוהר הידיים של העולה אל הקודש. |
| 26 | ki-ur₃-ra {ĝiš}ĝidru ma-ni-in-šum₂ | בקִי־אוּר – שרביט לי נתן; | `מַטֵּה עֻזְּךָ יִשְׁלַח יְהוָה מִצִּיּוֹן` (תהלים קי:ב) | equivalent | השרביט הניתן מן המקדש (שולגי A 88). |
| 33 | u₄-ta-u₁₈-lu lu₂ šag₄-ga-na-me-en | אוּתָאוּלוּ – איש לבו אני; | `בִּקֵּשׁ יְהוָה לוֹ אִישׁ כִּלְבָבוֹ` (שמואל א יג:יד) | equivalent | "איש לבבו" של האל, אותו צירוף (אידין־דגן B 12: `רועה לבו אתה`). |
| 35 | ĝeštug₂ ba₉-ra₂ {d}en-ki-kam-me-en | אשר אֶנְקִי פתח לו בינה – אני; | `אֲדֹנָי יְהוִה פָּתַח לִי אֹזֶן` (ישעיהו נ:ה) | equivalent | "פתיחת האוזן" בידי האל, אותו דימוי. |
| 43 | buru₁₄ maḫ zig₃-ga zi kalam-ma-me-en | המקים קציר נשגב, חיי הארץ אני; | `יְהִי פִסַּת בַּר בָּאָרֶץ` (תהלים עב:טז) | equivalent | שפע התבואה בימי המלך. |
| 50 | {d}li-pi₂-it-eš₄-tar₂ šul ni₂-tuku-ni-me-en | ליפית־אישתר, העלם החרד לו אני. | `וְחָרֵד עַל דְּבָרִי` (ישעיהו סו:ב) | equivalent | החרדה לאל כיראת שמים. |
| 61 | ul₄-ul₄-la dub₃ nu-kuš₂-u₃-me-en | הממהר והממהר, אשר ברכיו אינן יגעות אני; | `יָרוּצוּ וְלֹא יִיגָעוּ` (ישעיהו מ:לא) | equivalent | כמו שולגי A 42. |
| 62 | nesaĝ tum₃ e₂-babbar nu-dib-be₂-me-en | המוביל ראשית, אשר את אֵבַּבַּר אינו עובר (בלי לבוא) – אני; | `רֵאשִׁית בִּכּוּרֵי אַדְמָתְךָ תָּבִיא בֵּית יְהוָה אֱלֹהֶיךָ` (שמות כג:יט) | equivalent | הבאת הראשית אל בית האל. |
| 68 | e₂-kur-ta nam-til₃ šum₂-ma-me-en | אשר מן האֵכּוּר חיים ניתנו לו – אני; | `חַיִּים שָׁאַל מִמְּךָ נָתַתָּה לּוֹ` (תהלים כא:ה) | equivalent | החיים כמתנת האל למלך. |
| 72 | da-da-ra nam-šul-la zu₂ keše₂ nu-du₈-me-en | החגור בעלומים, אשר את החגורה אינו מתיר אני; | `וְלֹא נִפְתַּח אֵזוֹר חֲלָצָיו` (ישעיהו ה:כז) | equivalent | הלוחם שחגורתו אינה נפתחת. |
| 80 | {kuš}ummud a sed-de₃ zi ĝuruš-a-me-en | נאד מים צוננים, חיי הבחורים אני; | `מַיִם קָרִים עַל נֶפֶשׁ עֲיֵפָה` (משלי כה:כה) | equivalent | המים הקרים כחיים לעייף. |
| 83 | šag₄ dugud-da inim-še₃ ĝal₂-la-me-en | כבד־הלב, הנכון לדיבור אני; | `כָּבֵד לֵב פַּרְעֹה` (שמות ז:יד) | divergence | אותו צירוף, מושג הפוך: בשומרית "כבד־לב" הוא השקול, הרציני, שאינו נחפז (85); בתורה – הקשה, הממאן. |
| 85 | niĝ₂-nam-e nu-ul₄-en eĝer-bi kiĝ₂-kiĝ₂-me-en | בשום דבר איני ממהר; את סופו מבקש ומבקש אני; | `כְּבֹד אֱלֹהִים הַסְתֵּר דָּבָר וּכְבֹד מְלָכִים חֲקֹר דָּבָר` (משלי כה:ב) | equivalent | המלך החוקר עד תום. |
| 86 | šag₄ su₃-ra₂ ĝeštug₂ daĝal-la-me-en | לב רחוק־טווח, בינה רחבה אני; | `וְלֵב מְלָכִים אֵין חֵקֶר` (משלי כה:ג); `וְרֹחַב לֵב` (מלכים א ה:ט) | equivalent | עומק לב המלך; . |
| 88 | niĝ₂-gen₆-na ka-ga₁₄ ĝal₂-la-me-en | אשר בפיו נכונה מצויה – אני; | `תּוֹרַת אֱמֶת הָיְתָה בְּפִיהוּ` (מלאכי ב:ו) | equivalent | הדבר הנכון בפי האיש. |
| 92 | niĝ₂-si-sa₂ ki-en-gi ki-uri-a mu-ni-ĝar su kalam-ma mu-dug₃ | מישרים בשׁוּמֶר ואכד שַׂמְתִּי, את בשר הארץ הֵיטַבְתִּי. | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | cognate | *niĝ₂-si-sa₂* = האכדית *mīšarum* (ליפית־אישתר B 38). |
| 93 | niĝ₂-gen₆-na-ĝu₁₀-uš a-na mu-da-šub | מנכונתי – מה השלכתי? | `אֶת שׁוֹר מִי לָקַחְתִּי` (שמואל א יב:ג) | equivalent | השאלה הרטורית של המנהיג המצהיר על יושרו |
| 93 | niĝ₂-gen₆-na-ĝu₁₀-uš a-na mu-da-šub | מנכונתי – מה השלכתי? | `אֶת שׁוֹר מִי לָקַחְתִּי` (שמואל א יב:ג) | divergence | שמואל שואל את העם, המלך שואל את עצמו. |
| 100 | {ĝiš}gu-za-ĝa₂ suḫuš-bi ma-ni-in-ge-en | את יסוד כסאי – לי כוננה. | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג) | equivalent | הכסא המכונן (ליפית־אישתר B 54). |
| 101 | su₃-ra₂ ud ul-le₂-a-aš gu₂-da ḫu-mu-ni-in-la₂ | לימים רחוקים, רחוקים – אכן חיבקה אותי. | `וִימִינוֹ תְּחַבְּקֵנִי` (שיר השירים ב:ו) | equivalent | החיבוק של האהובה; כאן אלה ומלך. |
| 106 | mu-ĝu₁₀ kur-kur-ra zid-de₃-eš ḫu-mu-un-pad₃-de₃ | את שמי – בארצות – בנאמנות יזכירו! | `בְּכָל הַמָּקוֹם אֲשֶׁר אַזְכִּיר אֶת שְׁמִי` (שמות כ:כ) | equivalent | הזכרת השם (שולגי A 94). |

### Parallels index (IB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 13 | izi bar₇-bar₇-ra kalam-e šeĝ₃-ĝa₂ | אש לוהטת – על הארץ ממטירה, | `אֵשׁ וְגָפְרִית וְרוּחַ זִלְעָפוֹת` (תהלים יא:ו) | equivalent | "ימטר על רשעים" אש מן השמים בידי האל הסוער; מוטיב משותף (השוו גם בראשית יט:כד). אצל אִינַנָּה האש יורדת על *kalam*, ארצה שלה – לא על הרשעים. |
| 20 | nin-ĝu₁₀ za-pa-aĝ₂-zu-še₃ kur i₃-gam-gam-e | גבירתי – לשאונך – ההר מתכופף; | `וַיִּתְפֹּצְצוּ הַרְרֵי עַד שַׁחוּ גִּבְעוֹת עוֹלָם` (חבקוק ג:ו) | equivalent | ההרים שוחים לפני האל הבא בסערה; מוטיב משותף. אצל אִינַנָּה ההר (*kur*) הוא גם ארץ האויב, וההשתחוויה היא כניעה מדינית. |
| 30 | {d}iškur-da šegx(KA×LI) mu-da-an-gi₄-gi₄-in | עם אִישְׁכּוּר – שאגה את שואגת; | `וַיַּרְעֵם בַּשָּׁמַיִם יְהוָה` (תהלים יח:יד) | equivalent | האל המרעים בסערה; מוטיב משותף של אל הסערה (במקרא – האל לבדו; כאן אִינַנָּה "עם" אל הסערה אִישְׁכּוּר). |
| 35 | su-din{mušen} dal-la-gin₇ du₆-de₃ mu-e-ši-ib-ra-aš | כעטלף המעופף – אל התל מפנייך *נמלטו*; | `לַחְפֹּר פֵּרוֹת וְלָעֲטַלֵּפִים` (ישעיהו ב:כ) | equivalent | העטלפים והחורבות מפני אימת האל ביום בואו "לערוץ הארץ" (ב:כא); מוטיב משותף. אצל אִינַנָּה האלים עצמם הם העטלפים. |
| 45 | id₂-ba uš₂ ma-ra-an-de₂ uĝ₃-bi ma-ra-na₈-na₈ | בנהרו – דם יצק לך; עמו – שותה לך; | `וַיֵּהָפְכוּ כָּל הַמַּיִם אֲשֶׁר בַּיְאֹר לְדָם` (שמות ז:כ); `וְלֹא יָכְלוּ מִצְרַיִם לִשְׁתּוֹת מַיִם מִן הַיְאֹר` (שמות ז:כא) | equivalent | הנהר שנעשה דם, והעם שאינו יכול לשתות; מוטיב משותף של מכת אל במים (אין כאן מקור: שומר לא הכירה את מצרים של ספר שמות). |
| 55 | munus-bi dam-a-ni-ta sag₉-ga na-an-da-ab-be₂ | אשתהּ – עם בן־זוגה – נָאוּת אַל תדבר; | `קוֹל חָתָן וְקוֹל כַּלָּה` (ירמיהו ז:לד) | equivalent | שתיקת בני הזוג בעיר המוכה; מוטיב משותף של הקינה. כאן הקללה אינה רק שמחת החתונה שתשבות, אלא השיחה של הלילה בין איש לאשתו. |
| 69 | ki-sig₁₀-ga bi₂-ib-ĝar ĝe₂₆-e nu-mu-un-til₃-le-en | סעודת־המתים – שׂוּמָה; אני – איני חיה. | `נֶחְשַׁבְתִּי עִם-יוֹרְדֵי בוֹר` (תהלים פח:ה) | equivalent | המתפלל שנחשב כמת בחייו; מוטיב משותף של קינת היחיד. |
| 72 | ka lal₃-ĝu₁₀ šu uḫ₃-a ba-ab-dug₄ | פי־הדבש שלי – ברוק *נגע*; | `וּלְשׁוֹנִי מֻדְבָּק מַלְקוֹחָי` (תהלים כב:טז) | equivalent | הפה של המתפלל שנעשה יבש ונדבק; מוטיב משותף. |
| 73 | niĝ₂ ur₅ sag₉-sag₉-ĝu₁₀ saḫar-ta ba-da-gi₄ | הדבר שלי, המנאה את הכבד – לעפר שָׁב. | `וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט); `וְאֶל-עֲפָרָם יְשׁוּבוּן` (תהלים קד:כט) | equivalent | *saḫar* "עפר" ו־*gi₄* "שב": אותם שני מושגים, `עָפָר` [cognate דרך האכדית *eperu*] ו־`שוּב` (= *târu*); השוו . מוטיב משותף – אבל כאן לא האדם שב לעפר אלא כוחה של המשוררת לרכך לבבות. |
| 78 | kur a-ma-ru ĝiri₃-ni-še₃ i₃-nu₂ | ההר והמבול – לרגליה שוכבים. | `יְהוָה לַמַּבּוּל יָשָׁב` (תהלים כט:י) | equivalent | האל השולט במבול; מוטיב משותף: המבול כוח קדמון שנכנע לאלוהות. |
| 82 | er₂-ĝa₂ kaš dug₃-ga-gin₇ | את דמעותיי – כשֵׁכָר טוב – | `וְשִׁקֻּוַי בִּבְכִי מָסָכְתִּי` (תהלים קב:י) | equivalent | הבכי כמשקה; מוטיב משותף. אצל אנחדואנה הדמעות הן שכר שהיא מוזגת לאלה – מנחת נסך. |
| 85 | šu-luḫ an kug-ga-ke₄ niĝ₂-nam-ma-ni in-kur₂ | בטָהֳרַת אַן הטהור – כל אשר לו – שִׁנָּה; | `שִׁלְחוּ בָאֵשׁ מִקְדָּשֶׁךָ` (תהלים עד:ז) | equivalent | חילול המקדש בידי אויב; מוטיב משותף. אצל אנחדואנה המחלל אינו נכרי אלא מלך מקומי. |
| 90 | tab mu-ši-in-kur₉-ra-ni ninim-ma-ni ḫu-mu-un-te | בבואו – כשותף – בקנאתו אכן קרב. | `כִּי לֹא-אוֹיֵב יְחָרְפֵנִי` (תהלים נה:יג); `וְאַתָּה אֱנוֹשׁ כְּעֶרְכִּי` (תהלים נה:יד); `גַּם-אִישׁ שְׁלוֹמִי` (תהלים מא:י) | equivalent | הרֵעַ השווה שבגד, ובא "בבית אלהים" (נה:טו); השוו . מוטיב משותף של קינת היחיד: האויב הקשה הוא השותף. |
| 93 | ki-bal ḫul gig {d}nanna-za-ke₄-eš an-ne₂ ḫa-ba-ab-šum₂-mu | את ארץ המרי, השנואה – בעבור נַנָּה שלך – אַן יִתְּנֶהָ! | `יִהְיוּ-בָנָיו יְתוֹמִים` (תהלים קט:ט) | equivalent | קללות המתפלל על האויב ועל עירו וביתו (93–96); מוטיב משותף של קינת היחיד. |
| 105 | sim{mušen}-gin₇ ab-ta ba-ra-an-dal-en zi-ĝu₁₀ im-mi-gu₇ | כסנונית – מן החלון הֵעִיפַנִי; את נפשי – אכלתי. | `כְּסוּס עָגוּר כֵּן אֲצַפְצֵף` (ישעיהו לח:יד); `כְּצִפּוֹר בּוֹדֵד עַל-גָּג` (תהלים קב:ח) | equivalent | המתפלל החולה כסנונית; השוו . מוטיב משותף: הציפור הנמלטת או הבודדה כדמות של אדם נרדף. |
| 116 | {d}a-nun-na-ke₄-ne nundum-nundum-bi-ta ki su-ub ma-ra-ak-ke₄-ne | הָאֲנוּנָּה – בשפתותיהם – את הארץ נושקים לך; | `וְאֹיְבָיו עָפָר יְלַחֵכוּ` (תהלים עב:ט); `אַפַּיִם אֶרֶץ יִשְׁתַּחֲווּ לָךְ וַעֲפַר רַגְלַיִךְ יְלַחֵכוּ` (ישעיהו מט:כג) | equivalent | נשיקת העפר לפני השליט; מוטיב משותף של חצר מלכות במזרח הקדום. כאן הנושקים הם אלים. |
| 117 | di ni₂-ĝa₂ nu-mu-un-til di kur₂ di-ĝu₁₀-gin₇ igi-ĝa₂ mu-un-niĝin₂ | דיני שלי – לא תם; דין נכרי – כדיני – את עיניי סבב. | `שָׁפְטֵנִי אֱלֹהִים וְרִיבָה רִיבִי` (תהלים מג:א) | equivalent | המתפלל שאדם מבקש מן האל לדון את דינו מול "גוי לא חסיד"; מוטיב משותף של קינת היחיד. בתהלים האל הוא הדיין; כאן הדיין (נַנָּה) שותק, והמתפללת פונה לאלה אחרת. |
| 122 | ḫe₂-zu ḫe₂-zu-am₃ {d}nanna li-bi₂-in-dug₄-ga za-a-kam bi₂-in-dug₄-ga | יִוָּדַע! יִוָּדַע! – אשר נַנָּה לא אמר, אשר "שלָּךְ הוא!" אמר – | `וְיֵדְעוּ כִּי-אַתָּה שִׁמְךָ יְהוָה לְבַדֶּךָ` (תהלים פג:יט); `וְיֵדְעוּ כִּי-אֱלֹהִים מֹשֵׁל בְּיַעֲקֹב` (תהלים נט:יד) | equivalent | תפילה שסופה "שיידעו" את גדולת האל, אחרי ההרס של האויבים; מוטיב משותף. אצל אנחדואנה מה שייוודע הוא גם מעשי האלה הנוראים (125–130) וגם שתיקתו של אל אחר. |
| 123 | an-gin₇ maḫ-a-za ḫe₂-zu-am₃ | שכשמים נשגבה את – יִוָּדַע! | `גָּבְהֵי שָׁמַיִם מַה-תִּפְעָל` (איוב יא:ח); `וּרְחָבָה מִנִּי-יָם` (איוב יא:ט) | equivalent | מידת האל בגובה השמים וברוחב הארץ והים (123–124); מוטיב משותף. |
| 141 | gala-e an-bar₇-ka šu ḫu-mu-ra-ab-gi₄-gi₄ | גָּלָה (המשורר) – בצהרי היום – ישיב לך! | `עֶרֶב וָבֹקֶר וְצָהֳרַיִם אָשִׂיחָה וְאֶהֱמֶה` (תהלים נה:יח); `וּבַלַּיְלָה שִׁירֹה עִמִּי` (תהלים מב:ט) | equivalent | תפילה הנאמרת בלילה ובצהריים; מוטיב משותף. כאן השיר עובר מפי המחברת אל פי המשורר המקצועי – מסירה של טקסט לפולחן. |
| 145 | sizkur₂-ra-na šu ba-an-ši-in-ti | את תפילתה – לקחה. | `יְהוָה תְּפִלָּתִי יִקָּח` (תהלים ו:י) | equivalent | אותו פועל ואותו מושא: *šu ti* הוא המקבילה השומרית של אכדית *leqû*, קרובת `לָקַח`; האל "לוקח" את התפילה. מוטיב משותף של תפילת היחיד, ובמלים כמעט זהות. |

### Parallels index (EL)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | niĝ₂ nu-kur₂-ru ka-ta e₃-a-ni nam ul-še₃ tar-re | הדבר שאינו משתנה – מוצא פיו – גורל לימים רחוקים גוזר; | `וּמוֹצָא שְׂפָתַי לֹא אֲשַׁנֶּה` (תהלים פט:לה) | equivalent | אותו צירוף: מה שיוצא מפי האל אינו משתנה; *kur₂* "לשנות" ו־`שִׁנָּה` במקום אחד בשורה. |
| 11 | dur-an-ki-ka dur₂ ba-an-ĝar ĝeštug₂ daĝal-la-ke₄ | בדּוּר־אַן־כִּי – מושב שָׂם, בעל הבינה הרחבה; | `יְפֵה נוֹף מְשׂוֹשׂ כָּל הָאָרֶץ הַר צִיּוֹן` (תהלים מח:ג) | equivalent | עיר האל כמרכז העולם; כאן "דור־אן־כי", "קשר שמים וארץ", שם המקדש של ניפור. |
| 16 | šag₄-bi ka ĝiri₂ kiĝ₂-a ka garaš₂-a-ka | תוכה – פי פגיון מבקש, פי האסון; | `הָרְגוּ לְפִי חָרֶב` (בראשית לד:כו) | equivalent | "פה" לחרב: העברית, כמו השומרית, קוראת ללהב "פה". |
| 17 | {ĝiš}es₂-ad ki-bal-a pu₂ sa ak-a | מלכודת לארץ המרי – באר ורשת עשויים. | `וּפָרַשְׂתִּי אֶת רִשְׁתִּי עָלָיו וְנִתְפַּשׂ בִּמְצוּדָתִי` (יחזקאל יב:יג) | equivalent | רשת האל על המורד. |
| 18 | gal-bi dug₄-ga-bi ud la-ba-ni-ib-su₃-ud-de₃ | המגדיל לדבר – ימים בה לא יאריך; | `יַכְרֵת יְהוָה כָּל שִׂפְתֵי חֲלָקוֹת לָשׁוֹן מְדַבֶּרֶת גְּדֹלוֹת` (תהלים יב:ד) | equivalent | הלשון ה"מדברת גדולות" נכרתת. |
| 20 | šag₄-a bar-a eme si nu-sa₂ | *לב וחוץ*, לשון שאינה ישרה, | `שְׂפַת חֲלָקוֹת בְּלֵב וָלֵב יְדַבֵּרוּ` (תהלים יב:ג) | equivalent | הלב הכפול: לב אחד בפנים ואחר בחוץ, והלשון שאינה ישרה. |
| 25 | iri niĝ₂-gig-ga nu-mu-ni-ib-dib-be₂ | העיר – את התועבות אינה מעבירה בתוכה. | `לֹא יֵשֵׁב בְּקֶרֶב בֵּיתִי עֹשֵׂה רְמִיָּה דֹּבֵר שְׁקָרִים לֹא יִכּוֹן לְנֶגֶד עֵינָי` (תהלים קא:ז) | equivalent | רשימת חוטאי הלשון שאין להם מקום בבית; כאן העיר, ושם הבית. |
| 26 | nibru{ki} a₂-bi sa-par₃ gal-la-am₃ | נִיפּוּר – זרועה מכמורת גדולה היא; | `אֶפְרוֹשׂ עֲלֵיהֶם רִשְׁתִּי כְּעוֹף הַשָּׁמַיִם אוֹרִידֵם` (הושע ז:יב) | equivalent | האל פורש רשת על החוטאים. |
| 29 | iri niĝ₂-gen₆-na saĝ-e-eš rig₇-ga | העיר – אשר נכונה במתנה הוענקה לה; | `וְנִקְרְאָה יְרוּשָׁלִַם עִיר הָאֱמֶת` (זכריה ח:ג) | equivalent | עיר שתכונתה היא האמת־היציבות; כאן "נכונה" ניתנה לעיר כמתנה. |
| 30 | niĝ₂-zid niĝ₂-si-sa₂ gi₁₆-sa-še₃ ak-a | אשר את הנאמנות ואת המישרים לאוצר עשתה; | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | cognate | *niĝ₂-si-sa₂* = `מֵישָׁרִים` (דרך האכדית *mīšarum*): . |
| 30 | niĝ₂-zid niĝ₂-si-sa₂ gi₁₆-sa-še₃ ak-a | אשר את הנאמנות ואת המישרים לאוצר עשתה; | `אַתָּה כּוֹנַנְתָּ מֵישָׁרִים` (תהלים צט:ד) | divergence | ETCSL "righteousness and justice" נשמע כ־`צְדָקָה וּמִשְׁפָּט`; בשומרית אין "צדק" אלא "נאמנות". |
| 32 | šeš-gal šeš-ban₃-da dugud-de₃-da nam-lu₂-ulu₃ ak-da | את האח הגדול – האח הצעיר – לְכַבֵּד; אנושות – לעשות; | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ לְמַעַן יַאֲרִכוּן יָמֶיךָ` (שמות כ:יא) | equivalent | אותו דימוי: "להכביד" = לכבד. בשומרית *dugud* "כבד" הוא גם "לכבד", בדיוק כמו `כִּבֵּד` העברי; ראו 34. |
| 33 | inim ab-ba-še₃ ĝizzal ak-de₃ ni₂ šu-a gi₄-gi₄-dam | לדבר האב – קשב לעשות; את עצמו אל היד להשיב; | `שְׁמַע בְּנִי מוּסַר אָבִיךָ` (משלי א:ח) | equivalent | השמיעה לדבר האב. |
| 34 | dumu ama-ni-ir sun₅-na ni₂ teĝ₃-ĝe₂₆-da nam-ab-ba sud-de₃ | הבן – הענו לאמו – לפחוד (ממנה), להאריך זקנה. | `לְמַעַן יַאֲרִכוּן יָמֶיךָ` (שמות כ:יא) | equivalent | הכבוד להורים והאריכות בימים באותו משפט; בשומרית הזקנה הארוכה באה מן הענווה לאם. |
| 37 | barag nam-ḫe₂ e₂-kur e₂ za-gin₃ saḫar-ta ša-ba-ra-an-il₂ | דוכן השגשוג, הָאֵכּוּר, בית הספיר – מן העפר הֲרֵי נשא; | — | cognate | *saḫar* = `עָפָר` (דרך האכדית *eperu*). |
| 38 | ḫur-saĝ il₂-la-gin₇ ki sikil-la bi₂-in-mu₂ | כרכס מורם – במקום זך הצמיח (אותו); | `נָכוֹן יִהְיֶה הַר בֵּית יְהוָה בְּרֹאשׁ הֶהָרִים וְנִשָּׂא מִגְּבָעוֹת` (ישעיהו ב:ב) | equivalent | בית האל כהר המתנשא. |
| 43 | me-bi me abzu lu₂ igi nu-bar-re-de₃ | הַ־מֶה שלו – הַ־מֶה של הָאַפְסוּ, אשר איש לא יביט בהם; | `לֹא תוּכַל לִרְאֹת אֶת פָּנָי` (שמות לג:כ) | equivalent | מה שאין לאדם להביט בו; כאן הַ־מֶה של המקדש, ראו גם 103, 138. |
| 44 | šag₄-bi ab su₃-ra₂ an-zag nu-zu-a | תוכו – ים רחוק, אשר את קצה השמים אינו יודע; | `הַחֵקֶר אֱלוֹהַּ תִּמְצָא אִם עַד תַּכְלִית שַׁדַּי תִּמְצָא` (איוב יא:ז) | equivalent | מה שאין לו קצה ואין לחקור אותו; כאן תוך המקדש, שם האל עצמו. |
| 55 | šu gid₂ igi-tum₃ la₂ šu sumur niĝ₂-gig-ga | יד שלוחה, חמדה, יד זועמת – תועבה (לו); | `לֹא תַחְמֹד` (שמות כ:יג) | equivalent | "חמדה" ברשימת האסורים; כאן כתועבת המקדש. |
| 60 | engar maḫ-bi sipad zid kalam-ma | האִכָּר הנשגב שלו – הרועה הנאמן של הארץ, | — | cognate | *engar* = `אִכָּר`. |
| 68 | ub-da 4-ba murub₄-ba dur-an-ki-ka ki ba-e-ni-tag-ge | בארבע הפינות, בתוכן – בדּוּר־אַן־כִּי – בקרקע אתה נוגע; | `יֹשְׁבֵי עַל טַבּוּר הָאָרֶץ` (יחזקאל לח:יב) | equivalent | המקום שבאמצע העולם. |
| 69 | saḫar-bi zi kalam-ma zi kur-kur-ra-ka | עפרה – חיי הארץ, חיי כל הארצות; | — | cognate | *saḫar* = `עָפָר` (דרך *eperu*). |
| 69 | saḫar-bi zi kalam-ma zi kur-kur-ra-ka | עפרה – חיי הארץ, חיי כל הארצות; | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | divergence | בבראשית העפר הוא סוף החיים; כאן עפר עיר האל הוא "חיי הארץ". |
| 70 | šeg₁₂-bi kug ḫuš-a uš₈ {na₄}za-gin₃-na-ka | לבניה – זהב? אדמדם; תשתיתה – של אבן ספיר; | `וִיסַדְתִּיךְ בַּסַּפִּירִים` (ישעיהו נד:יא) | equivalent | יסודות העיר מספיר. |
| 71 | am-gin₇ ki-en-gi-ra si mul ba-ni-ib-be₂ | כראם – בשׁוּמֶר את הקרניים מנצנצת; | `וַתָּרֶם כִּרְאֵים קַרְנִי` (תהלים צב:יא) | equivalent | קרני הראם המורמות כסמל עוצמה. |
| 79 | ĝissu-bi kur-kur-ra ša-mu-un-la₂ | צלו – על כל הארצות הֲרֵי תלוי; | `כָּסּוּ הָרִים צִלָּהּ` (תהלים פ:יא) | equivalent | צל המכסה ארצות. |
| 86 | kur šu-ni-še₃ kur ĝiri₃-ni-še₃ | ההר – אל ידו, ההר – אל רגליו; | `עַד אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א) | equivalent | האויבים תחת רגלי המלך שבחר האל. |
| 87 | kur-ra ki su₃-ra₂-bi gu₂ mu-na-ab-ĝa₂-ĝa₂ | ההר – את מקומותיו הרחוקים – צוואר לו שָׂמִים; | `לְפָנָיו יִכְרְעוּ צִיִּים וְאֹיְבָיו עָפָר יְלַחֵכוּ` (תהלים עב:ט) | equivalent | הרחוקים נכנעים למלך. |
| 93 | {d}en-lil₂ sipad zid teš₂-ba lu-a | אנליל, הרועה הנאמן של הרבים־יחד, | `יְהוָה רֹעִי לֹא אֶחְסָר` (תהלים כג:א) | equivalent | האל כרועה; כאן רועה של "הרבים", של כל היצורים (94). |
| 94 | na-gada mas-su niĝ₂-zi-ĝal₂-la-ka | הנוקד, המנהיג של כל בעל נפש, | `וּמֵישַׁע מֶלֶךְ מוֹאָב הָיָה נֹקֵד` (מלכים ב ג:ד) | cognate | *na-gada* = `נוֹקֵד` (שומרית > אכדית *nāqidu* > עברית; `../renderings.md` §5.3): . |
| 98 | {d}tir-an-na-gin₇ an-e ši-in-gi₄ | כטִירַנָּה, הקשת – אל השמים הֲרֵי שב; | `כְּמַרְאֵה הַקֶּשֶׁת אֲשֶׁר יִהְיֶה בֶעָנָן בְּיוֹם הַגֶּשֶׁם כֵּן מַרְאֵה הַנֹּגַהּ סָבִיב` (יחזקאל א:כח) | equivalent | האל המופיע כקשת בענן; ראו 99. |
| 98 | {d}tir-an-na-gin₇ an-e ši-in-gi₄ | כטִירַנָּה, הקשת – אל השמים הֲרֵי שב; | `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן` (בראשית ט:יג) | divergence | בבראשית הקשת היא אות ברית; כאן היא מראה האל עצמו. |
| 99 | dungu dirig-ga-gin₇ ni₂-bi-a mu-un-ĝen | כענן השט – מעצמו הלך. | `הַשָּׂם עָבִים רְכוּבוֹ` (תהלים קד:ג) | equivalent | האל הנע בעננים. |
| 100 | an-na dili nun-bi-im ki-a ušumgal-bi-im | בשמים – הנסיך היחיד הוא; בארץ – הדרקון־הענק שלה הוא; | `כִּי יְהוָה הוּא הָאֱלֹהִים בַּשָּׁמַיִם מִמַּעַל וְעַל הָאָרֶץ מִתָּחַת אֵין עוֹד` (דברים ד:לט) | equivalent | השליט בשמים ובארץ |
| 100 | an-na dili nun-bi-im ki-a ušumgal-bi-im | בשמים – הנסיך היחיד הוא; בארץ – הדרקון־הענק שלה הוא; | `כִּי יְהוָה הוּא הָאֱלֹהִים בַּשָּׁמַיִם מִמַּעַל וְעַל הָאָרֶץ מִתָּחַת אֵין עוֹד` (דברים ד:לט) | divergence | אצל אנליל "היחיד" הוא הראשון בין אלים רבים, לא האל היחיד. |
| 103 | diĝir na-me igi nu-mu-ni-in-du₈ | אל כלשהו – אותו לא ראה. | `לֹא תוּכַל לִרְאֹת אֶת פָּנָי כִּי לֹא יִרְאַנִי הָאָדָם וָחָי` (שמות לג:כ) | equivalent | האל שאין לראותו |
| 103 | diĝir na-me igi nu-mu-ni-in-du₈ | אל כלשהו – אותו לא ראה. | `לֹא תוּכַל לִרְאֹת אֶת פָּנָי כִּי לֹא יִרְאַנִי הָאָדָם וָחָי` (שמות לג:כ) | divergence | כאן גם האלים לא ראו אותו, ובשמות – האדם. |
| 109 | kur gal {d}en-lil₂-da nu-me-a | אילולא ההר הגדול, אנליל – | `אִם-יְהוָה לֹא-יִבְנֶה בַיִת שָׁוְא עָמְלוּ בוֹנָיו בּוֹ` (תהלים קכז:א) | equivalent | "אם האל לא" – ואז כל מעשה האדם לשווא; כאן הרשימה ארוכה בהרבה: לא עיר, לא מלך, לא גשם, לא לידה. |
| 119 | mušen an-na-ke₄ ki daĝal-la gud₃ la-ba-ni-ib-u₂-us₂ | ציפור השמים – בארץ הרחבה – קן לא תדביק; | `שָׁם צִפֳּרִים יְקַנֵּנוּ` (תהלים קד:יז) | equivalent | הציפור המקננת כחלק מסדר העולם שהאל מקיים. |
| 120 | an-na dungu sir₂-ra ka-bi nu-du₈-e | בשמים – העננים הדחוסים – את פיהם לא יפערו; | `כִּי לֹא הִמְטִיר יְהוָה אֱלֹהִים עַל הָאָרֶץ` (בראשית ב:ה) | equivalent | רשימת מה שאין, כי האל לא המטיר; גם שם כמו כאן – אין שיח ואין עשב (121–122). |
| 127 | u₈-e amaš-bi-a sila₄ ĝa₂ gig nu-e₃ | הרחל – בדירה – טלה … לא תוציא; | — | cognate | *u₈* = `רָחֵל` (דרך האכדית *laḫru*; `../renderings.md` §5.3). |
| 128 | a-za-lu-lu ni₂-ba lu-a | ההמונים – הרבים מעצמם – | `שִׁרְצוּ בָאָרֶץ וּרְבוּ בָהּ` (בראשית ט:ז) | equivalent | ריבוי היצורים; *lu* = `רָבָה` בתיוג. |
| 132 | šag₄-bi gu suḫ₃-a si nu-sa₂-e-dam | תוכם – חוט סבוך, שאין ליישרו; | `פְּלִיאָה דַעַת מִמֶּנִּי נִשְׂגְּבָה לֹא אוּכַל לָהּ` (תהלים קלט:ו) | equivalent | דעת האל שאין להשיג. |
| 136 | niĝ₂ ak-zu a-ba i₃-zu-zu | את אשר אתה עושה – מי יודע? | `מִי יֹאמַר אֵלָיו מַה תַּעֲשֶׂה` (איוב ט:יב) | equivalent | מעשה האל שאין לשאול עליו ואין לדעת אותו. |
| 138 | muš₃-za diĝir igi nu-bar-re-dam | במַרְאֶךָ – אל לא יוכל להביט. | `לֹא תוּכַל לִרְאֹת אֶת פָּנָי` (שמות לג:כ) | equivalent | פני האל שאין להביט בהם. |
| 146 | an-e um-ma-te ḫe₂-ĝal₂-la-am₃ | כשהוא נגש אל השמים – שפע הוא; | `כִּי כַּאֲשֶׁר יֵרֵד הַגֶּשֶׁם וְהַשֶּׁלֶג מִן הַשָּׁמַיִם` (ישעיהו נה:י); `כֵּן יִהְיֶה דְבָרִי אֲשֶׁר יֵצֵא מִפִּי` (ישעיהו נה:יא) | equivalent | הדבר כגשם, היורד ומצמיח |
| 146 | an-e um-ma-te ḫe₂-ĝal₂-la-am₃ | כשהוא נגש אל השמים – שפע הוא; | `אֶעֱנֶה אֶת הַשָּׁמָיִם וְהֵם יַעֲנוּ אֶת הָאָרֶץ` (הושע ב:כג) | equivalent | השמים והארץ עונים לדבר האל בשפע. |
| 150 | inim-zu gu-am₃ inim-zu še-am₃ | דברך – פשתה הוא; דברך – שעורה הוא; | `כִּי עַל כָּל מוֹצָא פִי יְהוָה יִחְיֶה הָאָדָם` (דברים ח:ג); `וְהַפִּשְׁתָּה וְהַשְּׂעֹרָה` (שמות ט:לא) | equivalent | דבר האל כמזון; כאן בפשטות: הדבר *הוא* הפשתה והשעורה. וראו  – אותו צמד (ניסבה A 14). |
| 153 | zi dug₃-ga u₂-šim im-da-pa-an-pa-an | בחיים טובים – במספוא – עמו נושמים; | `תְּשַׁלַּח רוּחֲךָ יִבָּרֵאוּן וּתְחַדֵּשׁ פְּנֵי אֲדָמָה` (תהלים קד:ל) | equivalent | החיים והנשימה של כל חי תלויים ברוח האל; כאן בדבר האל. |
| 154 | {d}en-lil₂ sipad zid-me-en DU.DU-bi mu-un-zu | אנליל, הרועה הנאמן אתה; את הליכותיהם ידע; | `כִּי יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים` (תהלים א:ו) | equivalent | האל היודע את דרכי ברואיו |
| 154 | {d}en-lil₂ sipad zid-me-en DU.DU-bi mu-un-zu | אנליל, הרועה הנאמן אתה; את הליכותיהם ידע; | `כִּי יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים` (תהלים א:ו) | divergence | כאן "דרכם" של הבהמות שהוא רועה, שם – דרכם של בני האדם. |
| 158 | munus zid igi il₂-la ba-e-de₃-tuku-dam | האשה הנאמנה, אשר נשאת אליה עין – אשר קנית לך, | `קָנִיתִי לִי לְאִשָּׁה` (רות ד:י) | equivalent | "קנה" לאשה; *tuku* "לרכוש, להחזיק" הוא גם הפועל השומרי של הנישואין. |
| 161 | inim-ma-ni su-a bi₂-dug₃-ga-bi i₃ li šag₄-ga-kam | דברה, המיטיב לבשר – שמן רענן ללב הוא; | `שֶׁמֶן וּקְטֹרֶת יְשַׂמַּח לֵב` (משלי כז:ט) | equivalent | שמן ללב כדימוי לדבר טוב. |
| 168 | dug₄-ga a₂-taḫ-a-ni niĝ₂ nu-kur₂-ru | אמירתו ועזרתו – דבר שאינו משתנה; | `וּמוֹצָא שְׂפָתַי לֹא אֲשַׁנֶּה` (תהלים פט:לה) | equivalent | ראו 2. |

### Parallels index (KH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 9 | {d}en-lil₂-le keš₃{ki} za₃-mi₂ am₃-ma-ab-be₂ | אנליל – לכֵּשׁ תהילה אומר. | `סֹבּוּ צִיּוֹן וְהַקִּיפוּהָ סִפְרוּ מִגְדָּלֶיהָ` (תהלים מח:יג) | equivalent | תהילת עיר המקדש עצמה; כאן האל העליון הוא שמשבח אותה. |
| 12 | dub-ba sar-sar šu-še₃ al-ĝa₂-ĝa₂ | כתוב וכתוב על הלוח – אל היד שׂוּם. | `כְּתֻבִים בְּאֶצְבַּע אֱלֹהִים` (שמות לא:יח) | equivalent | כתב שנכתב בידי האל; כאן אלת הכתיבה כותבת את השיר. |
| 15 | ḫur-saĝ-da mu₂-a an-da gu₂ la₂-a | הצומח עם הרכס, המחבק את השמים, | `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | equivalent | הבניין המגיע לשמים |
| 15 | ḫur-saĝ-da mu₂-a an-da gu₂ la₂-a | הצומח עם הרכס, המחבק את השמים, | `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | divergence | בבראשית יא – יוהרת אדם, כאן תהילת בית האל. |
| 18 | keš₃{ki}-gin₇ rib-ba lu₂ ši-in-ga-tum₂-mu | כְּכֵשׁ הנעלה – הֲגַם איש יוביל? | `מִי שָׁמַע כָּזֹאת מִי רָאָה כָּאֵלֶּה הֲיוּחַל אֶרֶץ בְּיוֹם אֶחָד אִם יִוָּלֵד גּוֹי פַּעַם אֶחָת` (ישעיהו סו:ח) | equivalent | שאלות רטוריות של לידה וראייה על עיר האל; ראו 19–20. |
| 19 | ur-saĝ-bi {d}(gloss: aš)aš₇-gi₄-gin₇ rib-ba ama ši-in-ga-u₃-tud | כגיבורה, אַשְׁגִּי, הנעלה – הֲגַם אם תלד? | `וּלְצִיּוֹן יֵאָמַר אִישׁ וְאִישׁ יֻלַּד-בָּהּ` (תהלים פז:ה) | equivalent | העיר כמקום לידה; כאן – אם שתלד גיבור כמו אל העיר. |
| 31 | e₂ ib-gal an-ne₂ us₂-sa | בית – מתחם גדול – לשמים מגיע; | `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | equivalent | ראו 15. |
| 37 | ĝissu-bi kur-kur-ra dul-la | צלו – על כל הארצות מכסה, | `כָּסּוּ הָרִים צִלָּהּ` (תהלים פ:יא) | equivalent | הצל המכסה; ראו אנליל A 79. |
| 45 | e₂ an-še₃ 10 šar₂{iku} ki-še₃ 5 šar₂{iku} | בית – למעלה עשרה שַׁר, למטה חמישה שַׁר; | `לְאַרְבַּע רוּחוֹת מְדָדוֹ` (יחזקאל מב:כ) | equivalent | מידות בית האל. |
| 59 | iri{ki} ga-am₃ iri{ki} ga-am₃ šag₄-bi a-ba mu-zu | עיר היא אכן, עיר היא אכן! את תוכה – מי ידע? | `יְרוּשָׁלִַם הַבְּנוּיָה כְּעִיר שֶׁחֻבְּרָה-לָּהּ יַחְדָּו` (תהלים קכב:ג) | equivalent | הבית הגדול כעיר שלמה. |
| 79 | {d}nin-tur₅ ama gal-la tud-tud mu-un-ĝa₂-ĝa₂ | נִינְתּוּר, האם הגדולה – לידה ולידה שם שָׂמָה; | `כִּי חָלָה גַּם יָלְדָה צִיּוֹן אֶת בָּנֶיהָ` (ישעיהו סו:ח) | equivalent | עיר האל כיולדת; כאן אלת הלידה במקדשה. |
| 116 | si am-ma-ke₄ gum₂-ga mi-ni-ib-za | קרן הראם – המיה משמיעה; | `הַלְלוּהוּ בְּתֵקַע שׁוֹפָר` (תהלים קנ:ג) | equivalent | קרן בעבודת המקדש. |
| 128 | iri-še₃ iri-še₃ lu₂ te-a na-te | אל העיר, אל העיר – האיש הנגש – לֹא נִיגַּשׁ! | `הִשָּׁמְרוּ לָכֶם עֲלוֹת בָּהָר וּנְגֹעַ בְּקָצֵהוּ` (שמות יט:יב) | divergence | המקום שאין לגשת אליו; בשמות – איסור, כאן – קביעה (*na-* + ḫamṭu): הנגש אל כש אינו מגיע אליה. |
| 132 | keš₃{ki} du₃-a {d}(gloss: aš)aš₇-gi₄ za₃-mi₂ | כֵּשׁ הבנויה, אשגי – תְּהִלָּה! | `יְרוּשָׁלִַם הַבְּנוּיָה` (תהלים קכב:ג) | equivalent | העיר "הבנויה" בשיר המקדש. |

### Parallels index (EJ)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | uĝ₃-e u₂-šim-gin₇ ki in-dar-ra-ba | כאשר העם – כמספוא – את הארץ בקע, | `תּוֹצֵא הָאָרֶץ נֶפֶשׁ חַיָּה` (בראשית א:כד) | divergence | החיים יוצאים מן הארץ; כאן בני האדם עצמם צומחים מן האדמה כצמחים (ראו שיר המעדר). |
| 6 | e₂-a-ni kug {na₄}za-gin₃-na teš₂-bi ba-ni-in-du₃ | את ביתו – מכסף ומספיר – כולו בנה; | `וִיסַדְתִּיךְ בַּסַּפִּירִים` (ישעיהו נד:יא) | equivalent | בית או עיר מאבנים יקרות. |
| 24 | {id₂}idigna {id₂}buranun-na maḫ ni₂ šu ti-a | (כ)חִדֶּקֶל ופְּרָת – נשגב, אימה ביד לוקח! | `פְרָת` (בראשית ב:יד) | cognate | השם המקראי של הנהר |
| 24 | {id₂}idigna {id₂}buranun-na maḫ ni₂ šu ti-a | (כ)חִדֶּקֶל ופְּרָת – נשגב, אימה ביד לוקח! | `פְרָת` (בראשית ב:יד) | cognate | `חִדֶּקֶל` – שם הנהר במקרא (בראשית ב:יד); אותו שם (שומרית *idigna* > אכדית *idiqlat* > עברית), ולכן |
| 24 | {id₂}idigna {id₂}buranun-na maḫ ni₂ šu ti-a | (כ)חִדֶּקֶל ופְּרָת – נשגב, אימה ביד לוקח! | `פְרָת` (בראשית ב:יד) | cognate | כמו שמות מקום אחרים (הנחיות §6.4). |
| 47 | šag₄ šeg₉-bar-ra lu₂ igi nu-bar-re-dam | את תוכו – … – איש לא יביט בו; | `לֹא תוּכַל לִרְאֹת אֶת פָּנָי` (שמות לג:כ) | equivalent | מה שאין להביט בו; ראו אנליל A 43. |
| 68 | dug₄-ga {d}en-ki-ke₄ šu nu-bal-e-de₃ | את אמירת אנקי – שלא להפוך – | `וּמוֹצָא שְׂפָתַי לֹא אֲשַׁנֶּה` (תהלים פט:לה) | equivalent | דבר האל שאינו משתנה; ראו אנליל A 2. |
| 120 | dumu-ĝu₁₀ e₂ mu-un-du₃ lugal {d}en-ki-ke₄ | בני, המלך אנקי – בית בנה; | `הוּא יִבְנֶה בַּיִת לִשְׁמִי` (שמואל ב ז:יג) | equivalent | הבן הבונה את הבית, והאב המאשר אותו. |
| 123 | eridug{ki} ki sikil lu₂ nu-ku₄-ku₄-da | אֶרִידוּ, מקום זך, אשר איש לא ייכנס אליו, | `מִי יַעֲלֶה בְהַר יְהוָה וּמִי יָקוּם בִּמְקוֹם קָדְשׁוֹ` (תהלים כד:ג) | equivalent | המקום שאין כל אדם נכנס אליו; ראו שיר המקדש בכש 128. |

### Parallels index (EB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 27 | elam{ki} su-bir₄{ki}-a niĝin₂-na-ĝu₁₀-ne | בסובבי את עֵילָם ושׁוּבִּיר, | `עֵילָם` (בראשית י:כב) | cognate | אותה ארץ ואותו שם, מזרחית לשומר. |
| 34 | giri₁₇-bi ki-še₃ na-ma-ra-ab-te-a-gin₇ | מאחר שאת אפו – ארצה – לא קירב לי, | `אַפַּיִם אֶרֶץ יִשְׁתַּחֲווּ לָךְ` (ישעיהו מט:כג) | equivalent | ההשתחוויה "אפיים ארצה" כסימן כניעה; מוטיב משותף של חצר המלוכה. |
| 35 | nundum saḫar-ra na-ma-ni-ib-ur₃-ra-gin₇ | מאחר ששפתיו בעפר לא גרר לי – | `וְאֹיְבָיו עָפָר יְלַחֵכוּ` (תהלים עב:ט) | equivalent | השפתיים בעפר כסימן כניעה; מוטיב משותף. |
| 41 | ti mar-uru₅-a si ga-ba-ab-sa₂ | חצים – באשפה – איישרה; | `חִצָּיו לְדֹלְקִים יִפְעָל` (תהלים ז:יד) | equivalent | האל הלוחם המכין את חציו; מוטיב משותף. |
| 76 | ti a₂-ta e₃-a a-gar₃-e {ĝiš}kiri₆ tir zu₂ bir₅-gin₇ zi-zi | חץ מן הזרוע יוצא; על שדמה, גן ויער – כשן הארבה מתנשאת, | `יֶתֶר הַגָּזָם אָכַל הָאַרְבֶּה` (יואל א:ד) | equivalent | שן הארבה ככלי הרס של האל; מוטיב משותף. |
| 120 | sukud-da-bi an-na šag₄-bi nir mi-ni-ib-e₃ | גובהו – אל השמים; לבו – בהדר יצא; | `וְעַל כָּל הֶהָרִים הָרָמִים; וְעַל כָּל הַגְּבָעוֹת הַנִּשָּׂאוֹת` (ישעיהו ב:יד) | equivalent | גובה ההרים כגאווה שהאל משפיל ("על כל גאה ורם", ב:יב); מוטיב משותף. |
| 140 | ĝiri₂ a₂ 2-a-bi u₃-sar ba-an-ak | את הפגיון – את שני להביו – השחיזה; | `אִם-לֹא יָשׁוּב חַרְבּוֹ יִלְטוֹשׁ` (תהלים ז:יג) | equivalent | האל המשחיז את נשקו לפני ההכאה; מוטיב משותף. |
| 148 | {ĝiš}al-la-nu-um-bi enmen-ba mi-ni-in-ug₇ | את אלוניו – בצמא המיתה; | — | cognate | `אַלּוֹן` – *al-la-nu-um* היא מלה שאולה מאכדית *allānu* "אלון", קרובת העברית `אַלּוֹן`. |
| 149 | bar-bi-a izi mi-ni-in-ri i-bi₂-bi bi₂-in-mu₂ | בצדדיו – אש הטילה; את עשנו – הצמיחה; | `כַּדּוֹנַג מִפְּנֵי הָאֵשׁ` (מיכה א:ד) | equivalent | `וְנָמַסּוּ הֶהָרִים תַּחְתָּיו` …  – האש של האל בהרים; מוטיב משותף של התגלות הלוחם האלוהי. |
| 153 | ḫur-saĝ il₂-la-zu-še₃ sukud-da-zu-še₃ | "רכס – על התנשאותך, על גובהך, | `כִּי יוֹם לַיהוָה צְבָאוֹת עַל כָּל גֵּאֶה וָרָם` (ישעיהו ב:יב) | equivalent | ההר נענש "על" גובהו ונישאותו; מוטיב משותף (ישעיהו ב:יד: ההרים הרמים). |
| 156 | an-ne₂ šu si sa₂-a-zu-še₃ | על שידיך אל השמים יישרת, | `וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | divergence | המגדל השולח ראשו לשמים; כאן ההר עצמו "מיישר יד" לשמים, ונענש כמו המגדל. מוטיב משותף של הגובה כחטא. |

### Parallels index (NG)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | e₂ kur e₂-eš₂ diĝir-re-e-ne {ĝiš}rab₃ maḫ an ki-a | בית, הר, בית־האסורים של האלים, הסד הנשגב של שמים וארץ; | `וְתָשֵׂם בַּסַּד רַגְלַי` (איוב יג:כז) | equivalent | הסד ככלי של אסירה בידי האל; מוטיב משותף. |
| 8 | e₂ id₂-lu₂-ru-gu₂ si sa₂ nu-ug₇-e erim₂-e bar ak | בית – נהר־המבחן, שאת הישר אינו ממית, שאת הרשע מפריד; | `וְהִשְׁקָה אֶת הָאִשָּׁה אֶת מֵי הַמָּרִים הַמְאָרְרִים` (במדבר ה:כד) | equivalent | מבחן המים שמבדיל את האשם מן הזכאי; מוטיב משותף של דין האל במים. |
| 10 | e₂ gu-la en-nu-uĝ₃ e₂ šer₇-da lu₂ nam-tag-ga kiĝ₂-kiĝ₂ | בית גדול, משמר, בית העבֵרה, המבקש את איש העווֹן; | `וַיִּתֵּן אֹתָם בְּמִשְׁמַר בֵּית שַׂר הַטַּבָּחִים אֶל בֵּית הַסֹּהַר` (בראשית מ:ג) | equivalent | "משמר" כבית כלא; מוטיב משותף (מצרים בסיפור יוסף). |
| 24 | {ĝiš}si-ĝar-bi muš-šag₄-tur₃ ki sumur-ra ni₂-bi ur₃-ur₃-ru-dam | מסגרו – נחש־שַׁגְטוּר, הגורר את עצמו במקום פרא. | `הוֹצִיאָה מִמַּסְגֵּר נַפְשִׁי` (תהלים קמב:ח); `לְהוֹצִיא מִמַּסְגֵּר אַסִּיר` (ישעיהו מב:ז) | equivalent | ה"מסגר" כסמל של הכלא; כאן *si-ĝar* `מסגר` הוא בריח השער, ובמקרא – בית הסוהר כולו. |
| 47 | lu₂ zu-a-ni gu₃ nu-mu-un-da-ab-be₂ bar-ta im-da-gub | מכריו – אינם מדברים עמו; מן החוץ עומדים עמו; | `הִרְחַקְתָּ מְיֻדָּעַי מִמֶּנִּי` (תהלים פח:ט); `כָּלֻא וְלֹא אֵצֵא` (תהלים פח:ט) | equivalent | המכרים המתרחקים מן האסיר / הנידון; מוטיב משותף של קינת היחיד; ושם, באותו פסוק,  – המתפלל כאסיר. |
| 77 | im nam-til₃-la šu-ĝa₂ mu-un-ĝal₂ lu₂ zid bi₂-in-gub-be₂-en | את טיט־החיים – בידי אני מחזיקה; את הנאמן – מעמידה אני; | `יִמָּחוּ מִסֵּפֶר חַיִּים` (תהלים סט:כט) | equivalent | הרשימה האלוהית של החיים, שהנאמנים כתובים בה; מוטיב משותף. |
| 82 | šag₄ ḫul mu-sed₄ ka garaš₂?-ta lu₂ ba-ra-an-zi-zi-i | לב רע – מקררת אני; את האדם – מפי האסון – מקימה אני; | `פָּדָה נַפְשֹׁי (נַפְשׁוֹ) מֵעֲבֹר בַּשָּׁחַת` (איוב לג:כח) | equivalent | הצלת האדם מפי השחת; מוטיב משותף (`פדה` שמור בתרגום). |
| 107 | kug sag₉-ga-gin₇ šu u₃-mu-ni-in-su-ub saḫar u₃-mu-un-ta-zalag | כאשר – ככסף נאה – ביד שפשף אותו, מן העפר הבהיק אותו, | `וְיָשַׁב מְצָרֵף וּמְטַהֵר כֶּסֶף` (מלאכי ג:ג) | equivalent | הטיהור ככסף כדימוי של הזיכוך המוסרי; מוטיב משותף. כאן הכסף מצוחצח מן העפר, לא מותך באש. |
