# The Kumarbi cycle: the Song of Emergence and the Song of Ullikummi

Project of `../` (the Hurro-Hittite and Old Anatolian myths; Round 5 run 2, 2026-10-30). Tool: `tools/hittite_tools.py`
(read `../corpus.md`, `../renderings.md`, `../translator-brief--myths.md`).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| KU | The Song of Emergence / "Kingship in Heaven" (CTH 344): Alalu, Anu, Kumarbi; the swallowing; the births | HPM CTH 344 (Rieken et al.): `sources/HPM/MYTH--CTH-344/` | 296 |
| UL | The Song of Ullikummi (CTH 345.I.1, I.2, I.3.1, I.3.2 = tablets 1–3; I.4–10 fragments) | HPM CTH 345.I.x: `sources/HPM/MYTH--CTH-345.I.<n>/` | 812 |

Labels and numbering: `../corpus.md` § Labels. Rank 3 (after drafting only): the HPM editors' German translation
(`hittite_tools.py tr KEY`), for the composites none (Neu 1996 and Hoffner 1998 are © and not in hand).

## Notes
- Hesiod's Theogony (`../../הסיודוס/`) is the comparison in the apparatus for the succession myth; no Hebrew is aligned with it.
- The other Kumarbi fragments (CTH 346.1–21) are fetched to `sources/HPM/MYTH--CTH-346.<n>/` but not translated in this run.

## Open decisions
(none yet)

## Proposals
(filled by the translators: every new rendering, every pre-set row changed, gates, cruxes)

### Translator 2, part 1 (KU; UL 1)
Drafted 2026-10-30: `annotated-KU.rtl.md` (KU 1–296, all) and `annotated-UL.rtl.md` (UL 1:1–1:253, tablet 1; placeholder
`<!-- טרם תורגם: 2:1–10:10 -->`). `verify KU --strict` 0; `verify UL` 0 problems (the placeholder note; one "identical
source, different Hebrew" listed: HE 5:17 / UL 1:238, below); `verify HE --strict`, `verify IL --strict` 0 after my §H2
edits; `selftest` 0; `check_bible_quotes.py` 0 on both files. HPM's German was read after each drafted block (KU 1–146,
147–234, UL 1:1–77, 78–160, 161–253) and every adopted correction is in the **תרגומים** bullets (KU 5–6, 8, 29, 42, 46, 65, 70,
116, 123, 138, 149, 151, 156, 163, 175, 229, 279; UL 1:5, 1:16, 1:24, 1:50, 1:100, 1:108, 1:123, 1:170, 1:179, 1:243–251).
Note: `tr KU 147 296` printed HPM for KU 235–296 together with 147–234, so those last 62 (mostly broken) clauses were drafted
after HPM had been seen once.

**1. The brief's "knees" is not on the tablet (pre-set M2 row changed).** KU 35 reads *pár-ši-nu-uš-šu-uš wakkiš*:
*paršina-* "cheek; buttock, loins, sexual parts" (CHD P s.v. *parše/ina-*, consulted for this one word). "Knees" is
Forrer's and Güterbock's emendation *gi!-nu-uš-šu-uš*, rejected by Otten, Sommer and CHD; HPM "Genitalien?". Rendered
`נשך את מָתְנָיו` (dual, as *paršinuš* is plural), with a footnote; Gen 9:22 [divergence], Hesiod Th. 180–181 [equivalent],
b. Sanh. 70a as reception (in הערות, not tagged). **M2 row *genu-*: keep `בֶּרֶךְ` for the real *genu-*** (UL 1:100, 1:172,
1:176, 1:199: the child on Kumarbi's and Enlil's knees; Gen 50:23, 30:3), **but its line "Anu's, KU" and the brief §4
("Kumarbi biting off Anu's knees") should say *paršina-* `מָתְנַיִם`.**

**2. Formula strings fixed (first lines; copy byte for byte):**
| F | Hebrew (first line) | Note |
|---|---|---|
| F34 | `לקח מקל בידו,` (UL 1:13, 1:146 `[לקח] מקל בידו,`); imperative `קח מקל בידך!` (1:81, 1:132) | |
| **F35** (first in the corpus) | `ולרגליו נעל נעליים – את הרוחות המהירות;` (UL 1:14); imperative `ולרגליך נעל נעליים – את הרוחות המהירות!` (1:133); without the winds `[ולרגליך נעל] נעליים!` (1:82), `[ולרגליו נעל נעלי]ים,` (1:147) | plene `נעליים` |
| F36 | `ומן הכסא קם חיש,` (UL 1:12, *GIŠŠÚ.A-az šarā ḫūdak araiš*); `[ומן הכסא קמו],` (1:158, no *ḫūdak*) | |
| F37 | `והלך מטה אל האדמה האפלה;` (KU 18), `הלך הוא מטה אל האדמה האפלה,` (KU 19); `ואותו אל האדמה האפלה שאו!` (UL 1:164) | |
| F38 | `ישימו לו כסא לשבת,` / `ולאכול – שולחן יקשטו לו!"` (UL 1:232–233 = HE 5:10–11); `שמו לו כסא לשבת,` / `והוא לא [יש]ב.` / `ולאכול – שולחן קישטו לו,` / `ובו לא נָגַע.` / `גביע נתנו לו,` / `ושפה לא שׂם (עליו).` (1:236–241 = HE 5:15–20); with a stool: `"לקומרבי ישימו שרפרף לשבת!` / `ושולחן ישימו לפניו!` (1:65–66) | **HE 5:17 (restored) has `[ושולחן לאכול] קישטו [לו],`; UL 1:238, the same Hittite, follows the order of its own command (1:233). Proposal: HE 5:17 → `[ולאכול – שולחן] קישטו [לו],`.** |
| F30–F33 | as HE: `X החל לומר את הדברים אל Y:` (KU 67), `X החל לומר אל נפשו:` (UL 1:104, 1:118 = HE 1:33, 1:181, 1:208), `X החל להשיב את הדברים אל Y:` (UL 1:38, KU 244), `(כאשר) X שמע את הדברים` (KU 242, UL 1:43, 1:156, 1:171); `אמפלורי, שמע את דבריי אלה:` (1:47, imperative) | F32 also for *ZI-ni peran* "into the mind": `לוקח חכמה אל נפשו` (UL 1:5, 1:9, 1:11; KU 262 `לקח אל נפשו`) |
| messenger | `"מ[וקישנו], וזירי! את הדבר אשר אני אומר לך –` (1:79, *memiyan*); `"אמפלורי, את הדברים אשר אני אומר לך –` / `והטה לי אוזנך לדברים!` (1:130–131 = HE 22:3–4); `קורא לכם קומרבי, אבי הָאֵלִים, אֶל בית הָאֵלִים.` / `ואילו הדבר אשר לו הוא קורא לכם –` / `ובואו חיש!` (1:137–140, as HE 1:83–86); `ובבת אחת חצו,` (1:159 = HE 1:92) | 1:80 *GEŠTU-an parā epp-* "hold the ear forth" = `והושט לי אוזנך!` (another verb than `הטה`) |
| UL refrains | command/execution: `ביום אחד – אַמָּה יגבה!` → `וביום אחד – אַמָּה אחת הוא גובה,`; `ואילו בחודש אחד – אִיקוּ יגבה!` → `… אִיקוּ אחד הוא גובה.`; `ואילו האבן אשר אל ראשו נמחצת –` (1:169 = 1:195); `היא – על העיניים תולבש!` → `מולבשת.`; `ועל כתפו הימנית של אוּפֶּלּוּרִי – (כמו) *חנית* – שימו אותו!` → 1:190 `[שמו]`; `ואותו – כמו קנה דק – אַל תנפץ!` (1:128; 1:114 `ינפץ`) | for UL 2–3 |

**3. New renderings (first line).** KU: *karuili-* `קדמון` (2, M2); *daššu-* `עז` (3, as HE 4:11; the Laws/rituals have
`חזק`: split noted); *ištamašk-* imp. `ישמעו` (3); *waktur(i)-* `*איתן*` (7); *kappuwai-* `ספר` / part. `ספורות` (14, 61, 267);
*zaḫḫain pai-* `נתן קרב` (15); *tarḫ-* `גבר על` (16, as IL 9), with an infinitive `יכול` (231: a split); *piddai-* `נס` (17,
30); *ḫink-* `מרכין (ראש)` (12, as AS 31); **GAL "cup" `גביע`** (13, 24, UL 1:240; as HE 5:19); NAG `משקה` (13, 22);
*maz(z)-* `עמד בפני` (28, 47; IN 14.22 has `העז` "dare": a split by construction); *ḫuwiyalla-* `נשמט` (29); *iyanna-*
`יצא לדרך` (31, as HE); *šalik-* `נגע` (32, UL 1:239, as HE 5:18); *epp-* `תפס` (33, UL 1:51, 1:214); *ḫuittiya-* `משך` (34,
R1); ***paršina-* `מתניים`** (35); *wakk-* `נשך` (35, 70); *uli(š)-* `התמזג` (36); *paš-* `בלע` (37, 43, as HE 1:26); *dušk-*
`שמח` (38, 42, UL 1:101); *ḫaḫḫarš-* `צחק` (39); *nai-* mid. `פנה` (40); *aimpa-* `משא` (45, 49); *ašma* `ראשונה`, *dān*
`שנית`, 3-*anna* `שלישית` (46–48); *armaḫḫ-* `עיבר` (46–48, as HE); *nakki-* `כבד`, *nakkiyatar* `כובד` (46, 79, UL 1:225);
*ḫatuga-* `איום` (49; HE 4:38 `נוראים` for the same word – **a split to settle**: I used `נורא` for *naḫšarant-*, KU 57, from
*naḫḫ-* = `ירא`); *zinna-* `סיים` (51, as HE 9:9; `תכלה` at 50 with an infinitive); *munnai-* mid. `התחבא` (53); *allapaḫḫ-*
`יָרַק` (54, vocalized: "green"); *immiya-* `מעורב` (55); *išḫaššarwant-* `של אדנות` (59); ITU *tiya-* `החודש צעד` (62, 271;
*tiya-* `צעד`, as HE 1:12) and ITU *pai-* `החודש הלך` (258, 268–270; IL 48); *ḫaršumna-* `מקור` in *ḫattannaš ḫaršumnaš EN-aš*
`אדון מקור החכמה` (68, 204); GURUŠ-*tar* `עלומים` (72, 76, 79); UR.SAG-*liyatar* `גבורה` (73); *eḫu* `בוא` (as HE); *papraḫḫ-*
`טמא` (110, 112: licensed); *ištamana-* `אוזן` (112); *paršanu-* `ריסק` (117); *tarna-* "skull?" `גולגולת` (117, 118, 168);
*iya-* mid. `התקדם` (119, UL 1:60–61, 1:148); *maušš-* `נפל` (122); *tammeumaḫḫ-* `השתנה` (123, UL 1:216); NAM.ḪÉ `שֶׁפַע`
(name; 124, 190); *šanḫ-* `דרש` (124, UL 1:7, as HE); *arḫa ed-* `אכל לגמרי` (127, 131); *pušš-* `כתש` (132, UL 1:112);
*punušš-* `שאל` (137, vocalized `שְׁאַל`); *tarupp-* `כינס` (138); *uškišk-* `הביט` (141); *we(ya)-* / *wiwai-* `צעק` (146, 272–273);
*naḫšariya-* `ירא` (149); *ḫattešnar* `חור` (155, IL 28); *ḫappinant-* `עשיר` (157); *memmal* `גריסים` (158, 166); *kiš-*
`נעשה` (163); *ḫaššanu-* **`יִלֵּד`** (175, 178, UL 1:95, 1:98: piel, vocalized `יִלְּדוּ`; Exod 1:16 – the midwives' object is
the mother); *šakuwai-* `צפה` (182, UL 1:41, 1:178, 1:205–207); *ḫarnink-* `השמיד` (186–193, M2); *mai-* `צמח` (199);
*dala-* `הניח` (201, 203 `הנח לו!`); *ḪUL-wešš-* `נעשה רַע` (209, 243); *zaḫḫiya-* `נאבק` (220, as HL2 174); *parḫ-* `רדף`
(216); *arnu-* `הִגִּיעַ` (219, as HL1); *ḫurzakk-* `קילל`, *ḫurtai-* `קללה` (222–249, R1); *māl* `תבונה` (228); IGI.GÁL `נבון`
(234; *ḫattant-* stays `חכם`); *ḫullanzatar* `מלחמה` (236); *la-* `התיר` (239); *inira-* `גבה` (240); ÚTUL `סיר` (250, UL
1:116); *marriya-* `נמס` (251); MAR.GÍD.DA `עגלה`; ṬĒMU `שליח` (275–284: **two source words, *ḫalugatalla-* and ṬĒMU, one
Hebrew** – I think acceptable as synonyms; for the lead); *piyanai-* `העניק` (281); TÚG.GÚ.È.A `גלימה`, GAB `חזה` (283, UL
1:174); NU.TIL `לא נשלם`; GÁB.ZU.ZU `תלמיד`; *ḫarra-* `שחוק` (291). UL: *išḫamai-* `שר` (`אשיר`, 1:1, 1:4); *šallanu-*
`גִּדֵּל` (M2; the present participle `מְגַדֵּל` vocalized and escaped, below); *iškar-* `השחיל` (1:10); *luli-* `אגם`, *ikunta*
transcribed `אִיקוּנְתָה` (1:16, 1:18, as HPM); *kitta-* `מונח` (1:18, KU 154); *dalugašti-* `אורך`, *palḫašti-* `רוחב`,
*pargašti-* `גובה`; *watku-* `זינק` (1:22, 1:107; HE has `מזנק`); *šeš-* `שכב` (1:23, licensed); *dā-* (sexual) `לקח` (1:25–26);
*daššanu-* `חיזק` (1:48); *kartimmiyawant-* `זועם` (1:50); *katkattima-* `רעד` (1:51, as HE); *naḫšaratt-* `יראה` (1:52);
*karū* "already" `מלפנים` (1:54–55: F2 kept); *duwarnai-* `שבר` (1:54, 1:116); TU₇ `תבשיל`, *zanu-* `בישל`; NAR `משורר`,
GIŠ {D}INANNA `נבל` (1:56; *arkammi-* stays `כינור`); *šarā tiya-* `התרומם` (1:57, 1:59: kept apart from *arai-* `קם`);
*ḫaššalli-* `שרפרף` (1:65); KAŠ-*eššar* `שֵׁכָר`; *uda-* `הביא`; MUḪALDIM `מבשל`; GEŠTIN KU₇ `יין מתוק`; *ḫali-* `משמרת`
(1:91); DUMU sg. `ילד` (UL and KU 126, 214; DUMU.MEŠ `בנים` as translator 1; DUMU.NITA `בן`); *karp-* `הרים` (1:99, 1:173,
1:177 `הרים את עיניו`), mid. `מורם` (1:203); *ḫalai-* `*נדנד*` (1:100, 1:176; HPM "setzten"); *kunk-* `נענע` (1:102);
*šanezzi-* `נעים` (1:103, 1:110, KU 277); ŠUM `שם`; *paiddu* / *pandu* adverbial `מעתה` (UL 1:108, KU 156, with HPM);
*tamašš-* `לחץ` (1:110, 1:174; IN 14.21 `ילחץ`); *ezzan* `מוץ`; *lalakueša-* `נמלה`; *pašiḫai-* `מעך`; *ḫaḫḫari-* GI `קנה דק`;
*zaḫḫurai-* `ניפץ` (KU 108, UL 1:114, 1:128); *išḫuwai-* `פיזר` (1:115); *dannara-* `ריק` (as HE); *uppeššar* `תשורה`
(1:121, 1:163: `משלוח` avoided, root שלח); *liliwaḫḫ-* `החיש` (1:157, 1:165); *šarra-* `חצה` (as HE); ZAG ZAG.UDU `כתף ימנית`;
GIŠ *šiyatal* / GIŠ ŠU.I `*חנית*`; AMMATU `אַמָּה` (vocalized; [cognate] through the Akkadogram), IKU `אִיקוּ`; *pargawešš-* /
*parkiya-* `גבה`; *walḫ-* mid. `נמחץ`; *waššiya-* `הולבש` (1:170, 1:196, HPM "gedeckt"); NÍ.TE `גוף`; *takk-* `דומה`; *kalmara-*
`קרן` (Hab 3:4); *waḫnu-* `סובב` (IN has `המיר` for the same verb: a sense split); SAG.KI `מצח`; *ḫalluwai-* `מריבה`;
*ḫarnamniyašḫa-* `*מהומה*`; *akkatar* `מוות`; ŠÀ.TAM `משגיח`; LÚ GIŠ.BANŠUR `איש השולחן`; *išḫuzzi-* `חגורה`; *karimmi-*,
*kuntarra-*, *maldani-* transcribed.

**4. Names.** Added to `../renderings.md` M1 (one row) and §H2 (*kanzur*, *{gu4}šer*, *{d}napšar*, *{d}ammunk*, *{d}išḫar*,
*{uru}urkiš*, *{d}ka.zal*, *{d}en.ki*, *ašḫapal*); tested (`verify` HE, IL, KU, UL). **Fixed two H2 regexes that missed the
names:** Ullikummi `ul[lu]{1,2}kumm` → `ul+[iu]kumm` (*ullikummi* was not matched), Upelluri `upel+ur` → `upel+[uū]r`
(*upellūri*). Names in a bracket-split word (KU 4–5 `נָ[רָה`, `מִינְ]קִי`, `אַמֶּזַּדּ[וּ`) cannot pass the first-occurrence
check, so Nara, Minki and Ammezzadu stay out of §H2 (the tool's `_find_word` could strip brackets – for the lead).

**5. Gates I think are wrong (none bent the Hebrew):**
- §H4 `קנה` ("buy" only) blocks Sumerian/Hittite GI "reed" (KU 108, 132; UL 1:114, 1:128; escaped): **add `\bgi\b|rohr` to
  the licence** (every Sumerian corpus has *gi* `קנה`).
- §H3 `מגדל` (NEVER) catches the participle `מְגַדֵּל` of `גִּדֵּל` (*šallanu-*, M2) – UL 1:6, 1:8, 1:192 (vocalized and
  escaped). Keep the row (Ullikummi is no tower), but the brief should warn: write *šallanu-* in the present as `מְגַדֵּל`
  vocalized with the escape, or move M2 to `הִגְדִּיל`.
- Law §H4 `ירא` blocks `יראה` "he will see" (*au(š)-*, UL 1:184; escaped): license the homograph by *au(š)-* / *uška-*
  (guidelines §5.2: "license the gate by the homograph's source word").
- Law §H4 `שמר` licence `\bḫali\b` misses the long-vowel spelling *ḫāli* (UL 1:91; escaped): add `ḫāli`.
- Law §H4 `הקריב` misses *šippanz(a)k-* (KU 158, 166; escaped) – as translator 1's `šippant`.
- Law §H5 F8 fires on the imperative *pāi* (KU 126; escaped) – as translator 1.
- Myth §H3 `בעל` blocks `בעל־פה` (KU 280, rephrased `בפה`): harmless; law §H4 `לפנים` blocks "in front" (UL 1:179, rephrased).

**6. Cruxes (open).** KU 35 *paršina-* (above); KU 8 *kulkulimma-* (HPM "Ruhe", TLHdig "Glanz"; transcribed); KU 46 *ašma*
(HPM "Dabei"); KU 67 {D}A.GILIM (reading unknown; transcribed `אַ־גִּילִים`); KU 117–118, 168 *tarna-* "skull?" – the Storm-god
born from Kumarbi's head (Athena's birth, Th. 924); KU 138 (HPM: a question); KU 156 / UL 1:108 *pandu* / *paiddu* "henceforth";
KU 157–166: the basalt stone as a cult object (rich and poor offer) – a blessing on the stone (Gen 28:22; Th. 498–500);
KU 286 the ancient title SÌR GÁxÈ.A (`שירת ההתהוות?`); UL 1:10 NA₄ *kunna-*; 1:100 / 1:176 *ḫalai-*; 1:166 GIŠ ŠU.I / *šiyatal*;
1:170 / 1:196 *waššiya-* "be covered over the eyes"; 1:179; 1:203 *maldani-*; 1:209 *nutarriya-*.

**7. Parallels for the index.**
KU: Hesiod Th. 154–156 (9: the succession of kings; [equivalent], an argued historical link); Th. 722–725 (14: nine);
Th. 729–731 (18: the defeated gods below; Sheol in the note only); Th. 180–181, Gen 9:22, b. Sanh. 70a as reception (35);
Th. 459, 467 (37, 127: swallowing); Th. 497–500 (57, 155: the stone spat out, set up); Th. 504–506 (72: gifts to the new
king); Th. 886–890, 924 (118: the god born from the head); Th. 485–487, 497 (143: the stone instead of the child); Gen 28:22
and Th. 498–500 (157: the stone that receives offerings); Lev 5:7–11 (158, in words only: offerings of the rich and the poor);
Th. 183–185 and Gen 6:4 `וְיָלְדוּ לָהֶם` [divergence] (274: the earth bears); 1 Kgs 5:9 (228: wisdom as wide as the land);
Gen 8:21 (262: F32); Exod 1:16 (175: `יִלֵּד`, the midwife's verb).
UL: Exod 15:1, Th. 1, 105 (1:4: "I sing"); Gen 8:21 (1:5); Ps 104:3 (1:14: the wind-shoes); Gen 50:23, 30:3 (1:100: the child
on the knees); Gen 29–30 (1:105: naming with a meaning, in words); Isa 14:13 (1:109: going up to heaven to the throne);
Ps 1:4 (1:112: chaff); Prov 22:17 (1:131); Th. 517–519 (1:166: Upelluri ~ Atlas); Gen 18:2 (1:177: lifting the eyes); Gen 11:4
[divergence], Dan 2:35 [equivalent], Th. 820–825 (1:204: the stone that grows to heaven; Typhoeus); Hab 3:4 (1:211: rays);
Gen 24:33 (1:241: the guest who will not eat before his message).

## Progress
- 2026-10-30: translator 2, part 1: KU 1–296 and UL 1:1–1:253 drafted (no review passes yet).
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
