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
