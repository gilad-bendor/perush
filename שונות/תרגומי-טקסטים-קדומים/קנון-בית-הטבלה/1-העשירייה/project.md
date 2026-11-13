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
