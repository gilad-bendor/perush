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

## Parallels index
Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible verse into `../parallels-index.md`. Do not edit the tables by hand.

### Parallels index (SA)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (LA)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (IB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (EL)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (KH)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (EJ)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (EB)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|

### Parallels index (NG)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
