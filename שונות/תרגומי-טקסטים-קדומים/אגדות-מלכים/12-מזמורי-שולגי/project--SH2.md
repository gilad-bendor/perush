# Part SH2: Šulgi C and Šulgi D (translator B; Round 9 run 2, 2026-11-16)

## Progress
- **SHC** (`annotated-SHC.rtl.md`): all 253 entries drafted (A1–A146, B1–B110, C1–C14; gaps A66–A73, A127–A128, B83, B96–B101); header, 10 `## ` sections, `translation--intro-SHC.rtl.md`. `verify SHC` – OK.
- **SHD** (`annotated-SHD.rtl.md`): all 262 entries drafted (1–397; gaps 26–27, 65–134, 139–148, 200–206, 235–239, 257–287, 321–330, the end); header, 9 `## ` sections, `translation--intro-SHD.rtl.md`. `verify SHD` – OK (one note: 230/346 differ only by the restored `[פיזרתי]` vs `פיזר` – the vow and its fulfilment, intended).
- **SHB**: Subir aligned to `שׁוּבִּיר` (with bullets); natural `שבר` forms restored (301, 340). `verify SHB` – OK.
- Three passes: fidelity (morphology re-checked against ORACC Q000397/Q000398 where the reading depends on it); consistency (`rel`, `lexmap`; SH1 strings copied wherever the Sumerian repeats); Hebrew aloud. Every Bible verse printed before quoting; `check_bible_quotes` – 0 problems.

### Parallels index (SH2)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| SHC A5 | lugal ab₂-šilam-e tud-da i₃ ga-a ne-ḫa-me-en₃ | מלך שפרה מניקה ילדה, הנח בשמן ובחלב – אני. | בראשית יח:ח | [equivalent] | Butter and milk as the pair of plenty; here the royal infant's food. |
| SHC A8 | sipad zid niĝ₂-si-sa₂-da ḫul₂-la | רועה נאמן, השמח במישרים, | תהלים עב:ב | [equivalent] | The shepherd-king who rejoices in *niĝ₂-si-sa₂* (Akk. *mīšarum*, Heb. `מישרים`); the reserved `צדק`/`משפט` stay in the verse only. |
| SHC A18 | ur-saĝ-me-en₃ mu-ĝu₁₀ zid-de₃-eš₂ ḫe₂-em-pad₃-pad₃-de₃-ne | גיבור אני; את שמי – בנאמנות – יזכירו ויזכירו! | תהלים עב:יז | [equivalent] | The refrain's wish that the king's name be invoked; 8 times in SHC. |
| SHC A88 | me₃-ĝu₁₀ a-ma-ru-kam sag₂ nu-um-ši-ib₂-en₃ | קרבי – מבול הוא; *לא אפזרם*? | בראשית ז:יז | [equivalent] | *a-ma-ru*, the flood of the Sumerian flood stories (§14.3), as a metaphor for the king's battle; no flood narrative. |
| SHC A107 | zid-du mu-zu erim₂-du mu-zu | את הנאמן ידעתי, את הרשע ידעתי. | מלכים א ג:ט | [equivalent] | The judge-king who discerns the true from the wicked. |
| SHC A121 | [eme] [mar]-tu niĝ₂ eme-gi-ra-gin₇ ḫe₂-[en-ga-zu-am₃] | [לשון] [מַרְתּוּ] – כדבר לשון שׁוּמֶר – [אכן אף ידעתי]; | בראשית מב:כג | [equivalent] | As SHB 214, but the king himself answers the Amorite and the Elamite in their tongue. |
| SHC B33 | e₂ mu-gul-a-ĝu₁₀ du₆-du₆-ra₂ ⸢ḫu-mu⸣-un-šid | את הבית אשר הרסתי – לתלים אכן מניתי. | דברים יג:יז | [equivalent] | The ruined city as a *du₆* = Akk. *tīlu* = `תֵּל` (cognate through Akkadian). |
| SHC B60 | udu sipad nu-tuku-gin₇ lirum-e ḫa-ba-suḫ | כצאן שאין לה רועה – בהיאבקות אכן נשלפו. | מלכים א כב:יז | [equivalent] | A people scattered like sheep without a shepherd after defeat. |
| SHD 14 | lugal-ĝu₁₀ za-gin₇ a-ba an-ga-kalag a-ba an-ga-a-da-sa₂ | מלכי, כמוך – מי אף הוא חזק? מי אף הוא משתווה? | שמות טו:יא | [equivalent] | The hymnic "who is like you?" – addressed to the deified king; refrain 14–17 = 36–39 = 61–64. |
| SHD 32 | {ĝiš}ildag₂ ki-en-DU zag-ga du₃-a-gin₇ usu-a-me-en₃ | כצפצפה הנטועה על שפת תעלת־המים – בעל עוצמה אתה. | תהלים א:ג | [equivalent] | The tree planted by water channels as an image of thriving. |
| SHD 35 | {ĝiš}erin duru₅ ḫa-šu-ur₂-re mu₂-a-gin₇ ĝissu dug₃-ga-me-en₃ | כארז הלח, הצומח בין החַשּׁוּרִים – בעל צל טוב אתה. | תהלים צב:יג | [cognate] | *erin* = Akk. *erēnu* = `אֶרֶז`; the king as a shady cedar. |
| SHD 45 | {d}en-lil₂-le saĝ-[zu mu-un-il₂] | אֶנְלִיל – את ראשך [נשא]; | בראשית מ:יג | [equivalent] | "Lifting the head" as promotion – shared Sumerian, Akkadian and Hebrew idiom. |
| SHD 60 | sig-ta igi-nim-še₃ kalam-[ma] {d}en-lil₂ lugal kur-kur-[ra-ke₄] nam-sipad-bi ma-ra-[an-šum₂] | מן המטה עד המעלה של הארץ – אֶנְלִיל, מלך הארצות – את רועוּתה לך [נתן]. | שמואל ב ה:ב | [equivalent] | Kingship as shepherdship given by the god. |
| SHD 152 | gu₂ kur-ra-ke₄ ĝiri₃ u₃-mi-us₂ | את צוואר ההר – כאשר רגל הצמדתי, | יהושע י:כד | [equivalent] | The foot on the enemy's neck; as SHB 26. |
| SHD 176 | zi-bi-a bir₅ šu₂-šu₂-a-gin₇ saḫar sis-sis gi₄-bi₂-ib₂-gu₇ | בחייהם – כארבה המכסה – עפר מר אאכיל. | שמות י:ה | [equivalent] | The covering locust (*bir₅* = Akk. *erbû* = `אַרְבֶּה`); the dust-eating curse also Gen 3:14. |
| SHD 179 | e₂-mar-uru₅-ĝu₁₀-u₃ niĝ₂ ga-am₃-ta-si | את אשפתי – דבר אמלא. | תהלים קכז:ה | [equivalent] | A filled quiver: *e₂-mar-uru₅* = Akk. *išpatu* = `אַשְׁפָּה` (cognate through Akkadian); tag kept [equivalent] for the image. |
| SHD 219 | niĝ₂ ki-en-gi-ra ba-a-gu-la kur-ra ga-am₃-mi-ib₂-gu-ul | את אשר בשׁוּמֶר נהרס – בהר אהרוס. | שמות כא:כד | [equivalent] | Measure for measure between lands: what was destroyed in Sumer is destroyed in the mountains; 211–234 = 331–348 (vow and fulfilment, word for word). |
| SHD 392 | pa mul-bi an-dul₃-le-eš₂ ḫu-mu-u₃-ak | ענפיו הנוצצים – סכך יעשו! | יחזקאל לא:ו | [equivalent] | Kingship as a tree whose branches shade all; here the sceptre itself puts out branches. |
| SHD 395 | nam-til₃-la?-zu gu-gin₇ ḫe₂-mu₂-mu₂ še-gin₇ ḫe₂-mu₂-mu₂ | חייך – כפשתה יצמחו ויצמחו! כשעורה יצמחו ויצמחו! | תהלים עב:טז | [equivalent] | The royal blessing as growth of grain and grass; *nam dug₃ tar* "decree a good destiny", not `בֵּרַךְ`. |

## Key findings
- **ETCSL translates only SHC A1–A17 and B1–B16.** The rest of Šulgi C is read here for the first time against the morphology alone; 182 entries say "ETCSL – לא מתורגם", and the readings are cautious (`?`, `*…*`).
- **SHC refrain** (A18–A20 and 7 more times): `גיבור אני; את שמי – בנאמנות – יזכירו ויזכירו! / רועה אני; בברכה – ככוכבי השמים – ינמרו וינמרו! / את התהילה הגדולה, הראויה לי להיאמר – בשיר יאמרו!` – fixed letter for letter. Chapter openers *in-ga-me-na-ta* = `מאחר שאף אני הוא,` (A97, A115, B75); the language formula `"בריא!" – אכן אמרו לי; בלשון X דבר אכן השבתי להם.` (A123, A126 – Martu, Elam).
- **SHD vow and fulfilment**: 211–234 (first person, *ga-*) = 331–348 (third person, past) – the same Hebrew words in the same order, only person and tense changed; 378–380 repeat 234/349/350 as infinitives. The gods' walk refrain `עם שולגי, הרועה הנאמן של שׁוּמֶר – ברגל הלך.` ×6 (294–318).
- **SHD 312** *ud-ba abzu-ta ba-ra-ta-e₃*: *bara-* is a negation – Enki does **not** come out of the Abzu; he only raises one eye (313) and the mountain is destroyed. ETCSL ("emerges") misses the point.
- **SHD 346** names Gutium – the only explicit identification of the campaign's enemy in the surviving text.
- **ETCSL corrections (SHD):** 216/217 "kill" is *šu gi₄* "return the hand" = `גמול` / *gi₄*; 351 "fattened" is *gi₄-a* "returned"; 388 "raise your head" is *gu₂ us₂* "press the neck"; 234 "pure lapis" – *kug* is the noun "silver" (as 378).

## Open decisions
- *tun₃* (SHD 224, 339) `קרדום` (canon) collides with *dur₁₀* `קרדום` (SH1, approved). Proposal: keep both, or *tun₃* `גרזן` – the coordinator's call.
- *ki-ur₃* and *šubtum* both `מאורה` (SHD); *uš₂* and *u₃-mun* both `דם` (SHD 156, 192, 195–196); *a₂-tuku* and *a₂-ĝal₂* both `בעל־זרוע` (SHC A135, A141).
- Splits by sense (deliberate): *kar* `נמלט` / `רציף` (in the name כר־גשתינה, 376); *bal* `שפך` / `הפך` (225, 340); *gaz* `הרג` / `נשבר`; *bur₂* `פשר` (SHC A111) / `שחרר`; *ensi* `שואל` (SHC A103) vs *ensi₂* `מושל`; *zid* "right side" `ימין` (SHD 297) vs `נאמן` elsewhere; *us₂* `הצמיד` / `קשר` (mooring, SHD 377).
- SHD 211 *ga-am₃-mi-aĝ₂* read with ORACC as *gaz* `אהרוג` (as 212, 214).
- SHD 226 *a-ri₂-na* transliterated `אֲרִינָה` (an unidentified weed).

## Proposals for the corpus renderings
- *šu gi₄* = `גמול … השיב` (SHD 216, 218, 332, 334, 354), in line with guidelines §6.7 *gimilla turru* `הֵשִׁיב גְּמוּל`.
- *nam (dug₃) tar* `גזר גורל (טוב)` throughout SHD 383–387 – never `בֵּרַךְ`.
- *u₂-dug₄* / *lamma* `רוּחַ־הַמָּגֵן` / `אֵלַת־הַמָּגֵן` (SHD 221, 253, 337), with canon NG 87.
- *si-im* / *a₂-la₂* `תוף־הסִּים` / `תוף־האָלָא` (SHD 366).

## Gate bugs
- `הבדיל` "the tin" (SHC A13, *an-na*) trips the reserved `הבדיל` ("separated"); written `של בדיל`. A definite-article exemption for *an-na* would help.
- `שבו` "in which" trips the `שוב` gate (SHC A14, SHD 226, 342); written `שֶׁבּוֹ`.
- `קטורת` is reserved even for an incense ingredient (SHC A102); written `מחתה`.
- The "fully vocalized" check fires on short lines made mostly of names (SHC A106, B93, C10; SHD 376); fixed by leaving a name unvocalized at a later occurrence.
