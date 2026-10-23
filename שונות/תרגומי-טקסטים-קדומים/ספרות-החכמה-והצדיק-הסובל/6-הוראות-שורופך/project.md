# Project 6: The Instructions of Šuruppag

Wisdom corpus, project 6 (`../corpus.md`; Round 3, run 4 of `../../curated-translation-candidates.md`, 2026-10-21). Read `../../translation-guidelines.md`, `../corpus.md`, `../renderings.md` (**§11 is this run's**), `../translator-brief.md`, then this file.

## Scope
The whole composite: **288 labels** (1–280, with 82A, 152A, 163A–B, 199A–B, 266A, 273A), one file `annotated-SU.rtl.md`. **Lines 1–13 are the flood corpus's translation** (`../../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md` §2): copied verbatim, `>` lines checked identical by `verify`. Sections: the prologue (1–13), the first collection (14–72), the second prologue (73–82A), the second collection (83–142), the third prologue (143–152A), the third collection (153–276), the epilogue and doxology (277–280).

## Base edition
- **Rank 1:** ETCSL 5.6.1, *The instructions of Šuruppag* (composite of the Old Babylonian manuscripts; Alster 1974 / 2005 is the standard edition, not available here): `../../sources/ETCSL/5.6.1--Instructions-of-Shuruppag/transliteration.md` (+ `c.5.6.1.xml` for ETCSL's lemmas, `translation.md` for ETCSL's English). ORACC Q000782's morphology through `../../tools/sumerian_workbench.py line ../../sources/ETCSL/5.6.1--Instructions-of-Shuruppag/c.5.6.1.xml FROM-TO` (the epsd2-literary zip; oracc.museum.upenn.edu itself is blocked in the cloud).
- **Rank 3:** ETCSL's English (Black et al.), and the flood corpus's notes on 1–13; Lambert, *Babylonian Wisdom Literature* (1960) is not available here (`../../sources/_records-only--Wisdom-and-righteous-sufferer/`); Alster 2005 neither.
- **Line numbering:** ETCSL's composite numbers (= Alster's).

## Why this text (guidelines §1, both purposes)
- **Bible:** Proverbs 1–9 and 22:17–24:22 (a father's instructions to a son; `שְׁמַע בְּנִי`; `הַט אָזְנְךָ`); surety (Prov 6:1–5; 11:15; 17:18; 22:26); theft and the neighbour's wife (Ex 20:12 in the repository's numbering; Prov 6:29–32); honour of parents and of the elder brother (Ex 20:11; Prov 23:22; 30:17); the boundary, if the text has it (Deut 19:14; 27:17; Prov 22:28; 23:10); the slave girl and the free woman (Prov 30:23); the palace as an insatiable river (Qoh 1:7; Prov 27:20; 30:15–16); the gift of words, the soft tongue (Prov 15:1; 16:24; 25:15); the flood hero as the recipient of the oldest wisdom (Gen 5:29; 6:9); the Akkadian version that Gilgameš XI 23 knows.
- **The ancient mind:** the oldest wisdom literature of mankind (Fara and Abu Ṣalābīḫ, c. 2600 BCE, in its OB form): advice on fields, wells, donkeys, slaves, quarrels, beer, marriage, the palace; the sayings of the father to the survivor of the flood; Utu as the model of the warrior; the mother "like Utu", the father "like a god"; the gods of the mountains who eat men; Nisaba, the goddess of the scribes, in the doxology.

## Files
`annotated-SU.rtl.md`; `translation--intro-SU.rtl.md` (title and introduction, by the translator); `translation--head.rtl.md` (coordinator); generated `translation-SU.rtl.md`, `translation.rtl.md` (`python3 -I ../wisdom_tools.py build`).

## Progress log
- 2026-10-21: base text in the repository (ETCSL, retrieved 2026-10-16); project set up by the run's coordinator; renderings fixed in `../renderings.md` §11.

(The translator appends `## SU` below, with the subsections of `../translator-brief.md` §7.)

## SU (1–142)
Translator SU-a, Round 3 run 4, 2026-10-22 (the only translator running; quotas apply). ETCSL labels 1–142 with 82A (143 entries) in `annotated-SU.rtl.md`; the placeholder `<!-- טרם תורגם: 143–280 -->` follows 142 for SU-b. `translation--intro-SU.rtl.md` (title + introduction for the whole text, with the signs) written; `translation-SU.rtl.md` and `translation.rtl.md` built.

### Scope
- **1–13** the prologue (the flood corpus's Hebrew copied verbatim, checked by `verify`); **14–72** the first collection; **73–82A** the second prologue (82A in one ms. only); **83–142** the second collection. 15 section headings (`## 14–18: …` etc.) give the clean translation its headings.
- Preservation: 1–82 and 92–142 are mostly complete in the composite; **83–91 are almost wholly lost** (only "the beer-drinking mouth", "my little one", Ninkasi and a few verbs survive); single illegible signs (X) in 22, 24–27, 28, 32, 52, 53, 58; obscure lines: 15b, 16b, 21, 36, 52, 61b, 101, 137, 139 (ETCSL leaves 15b, 16b, 26, 36, 52, 61b, 83–91, 139 untranslated).
- Manuscripts: ETCSL's composite of the OB copies (mostly Nibru); its manuscript variants ("1 ms. adds / has instead") are given in the apparatus of 16, 20, 39, 51, 56, 63, 65, 67, 106.

### Sources consulted
- Rank 1: ETCSL 5.6.1 (`transliteration.md`, lemmas from `c.5.6.1.xml`); ORACC Q000782 morphology through `../../tools/sumerian_workbench.py line` (nearly every finite verb of 14–142 is parsed there; unparsed forms marked "ניתוח שלנו": 17, 28, 29, 39, 41, 45, 47, 48, 52, 71–79, 132, 133, 141).
- Rank 3: ETCSL's English, read after drafting; the flood corpus's notes on 1–13.
- Precedents: `../renderings.md` (§2–§11.13), `../../קולות-היום-יום/renderings.md` and the proverbs files (`kol_tools.py lookup`), the lament, temple, creation, netherworld, legends-of-kings and law corpora (Sumerian `lookup`), and the finished SH, CW, DP files (`wisdom_tools.py grep` / `lemma`).
- Not available: Alster 1974 / 2005, Lambert 1960 (the Akkadian fragments), Civil 1984, Wilcke 1978.

### Decisions
Grammar (binding for SU-b):
| Sumerian | Hebrew | Reason / first line |
|---|---|---|
| *na-* + verb (prohibitive) | `אַל` + future | `../renderings.md` §11.5; first at 11 (flood corpus); every prohibitive of 14–142. Before the copula (*na-nam*, 30, 69, 70, 93, 117) *na-* is affirmative ("is indeed"): rendered by the nominal sentence (`… הוא`), not `אל`. |
| *nu-* | `לֹא` | 19 (`לא תביא` – the only *nu-* "command" of the first collection, a statement form like the Decalogue's `לֹא`), 38, 51, 92, 95, 96, 100, 102, 115, 116. |
| *bara-* | `בַּל` (vocalized) | 26 only. |
| ***ša-*** (allomorphs *ši-*, *šu-*, *še₃-*; ORACC `ša.`) | **`הֲרֵי`** before the verb, always vocalized | Fixed at 14 (`הֲרֵי את מותניך יבקע`): the affirmative modal prefix of the consequence clauses. Rejected: a plain future (hides the prefix; ETCSL "it will"), `אָכֵן` (the legends-of-kings rendering of affirmative *ḫe₂-*), `פֶּן` (Proverbs' consequence particle, but *ša-* affirms, it does not warn). Used in 14, 17, 19, 21, 41 (×2), 43, 49, 51, 53, 55, 57 (×3), 59, 65, 73, 75, 107–110, 115, 119–122, 130, 134, 136, 137. In the frame (73, 75) it is the only Hebrew difference from 6, 8 (`שורופך הֲרֵי נתן עצה לבנו`). |
| *ḫe₂-* | jussive (`יהיו`, `יהי`) | 71–72, 133; *ḫe₂-ĝal₂* (140) is the noun "abundance" (`שפע`). |
| *ga-* | cohortative (`אתננו`, `אדבקה`, `אֶחְיֶה`, `אוֹכְלָה`, `אאירה`) | 97–100, 114, 123, 139. |
| *u₃-* | `משנ־` / `כש־` | 30 (`משנתפס`), 68 (`כשתגיע`). |

Words (first occurrence; all checked against the drafted lines at the end, ★):
| Sumerian | Hebrew | Lines | Rejected / reason |
|---|---|---|---|
| *du₁₄* | `ריב` | 22–27, 35, 60 | = Akk. *ṣāltu* (`ריב` in Ludlul I 116, CW 33–37): Šuruppag 22–27 ↔ CW 31–38. |
| *lu₂-ki-inim-ma* | `עד` | 23 | proverbs corpus. |
| *zuḫ* | `גנב` | 28, 39 | [equivalent ↔ `לֹא תִגְנֹב`]. |
| *buru₃* (of a house) | `חתר` | 29 | ↔ `בַּמַּחְתֶּרֶת` (Ex 22:1). |
| *al dug₄* | `שאל` ("ask for") | 29 | netherworld corpus; `חמד` reserved. |
| *piriĝ* | `לביא` | 30 | temple / creation corpora (*ur-maḫ* = `אריה`). |
| *saĝ* (a slave as a "head") | `ראש (עבד)` | 30 | the counting word kept, the sense in parentheses. |
| *dab₅* | `תפס` | 19, 30, 118 | `לקח` only 9 (and its identical copies 79, 149) until the 2026-10-23 harmonization; since then the formula has `אחז` (`עצתי תיאחז`). |
| *šu du₈* | `אחיזת־יד` | 19, 20 | not `ערבות`: the gesture-idiom is the finding (↔ `תָּקַעְתָּ … כַּפֶּיךָ`). |
| *sug₆* | `החליף` | 21, 41, 59, 92 | law corpus (Sum. *ib₂-su-su* = `יחליף`; = Akk. *riābu*); `שלם` (Ex 21:37 `יְשַׁלֵּם`) reserved for *silim*. |
| *igi du₈* | `פקח עין` | 21 | literal "open the eye". |
| *uru₂* | `מבול?` | 21 | ETCSL lemma "flood"; elsewhere "city": open. |
| *kaskal*; *ka-ĝiri₃*; *sila*; *sila daĝal* | `דרך`; `שביל`; `רחוב`; `הרחוב הרחב` | 15, 16, 18, 27, 46, 47 | letters / proverbs corpora; CW *kibsu* `שביל`. |
| *gana₂*; *a-šag₄* | `חלקה`; `שדה` | 15, 17; 16 | *a-šag₄* = `שדה` (lament precedent), so *gana₂* gets its own word. |
| *pu₂* | `בור` | 17 | = Akk. *būrtu* = `בּוֹר` [cognate] (Etana, §11.8). |
| *du₃* | `בנה` (also of a well, a "building" mouth, a leather-worker); *ĝiš₃ du₃* `הקים (איבר)` | 17, 104, 109; 49 | one Hebrew for the lemma; 104 and 109 have the same form *du₃-du₃-e*. `עשה` = *ak*. |
| *uĝ₃* | `העם` | 17 | lament rule (a place's people). |
| *ḫul*; *sag₉* | `רע` (`יָרֵעַ`); `נאה` | 17, 47; 47, 103 | Sumerian corpora; `טוב` only *dug₃*, which is absent from 14–142. |
| *dur₃*; *anše*; *anše edin* | `עַיִר` (vocalized); `חמור`; `חמור־ערבה` | 14; 48 | `עַיִר` [equivalent] (Job 11:12, Gen 49:11); `פרא` reserved. |
| *murub₄* | `מותניים` | 14 | = Akk. *qablu*. |
| *si-il*; *dar*; *bar* (axe) | `בקע`; `סדק`; `פילח` | 14; 134, 139; 31 | three split-verbs, three Hebrew verbs. |
| *ĝar* | `שׂם` (`תשים`, `שׂוּם`, `ישים`) | 15, 37, 54, 108 | creation / lament corpora. |
| *nam-silig*; *usu*; *a₂-tuku* | `כוח`; `עוצמה` (`בעל־העוצמה`); `בעל־זרוע` | 15, 61; 63 (var.), 110; 63 | `בעל־זרוע` ↔ `וְאִישׁ זְרוֹעַ` (Job 22:8). |
| *zi* | `חיים` | 16, 71–72, 130 | flood corpus (the name Ziusudra). |
| *ki*; *kalam*; *kur-kur* | `ארץ` / `מקום`; `הארץ`; `הארצות` | 22, 61, 128; 142; 130 | *ki* never `אדמה`. |
| *niĝir-si*; *nitaḫ*; *nam-nitaḫ* | `שׁוֹשְׁבִין`; `זכר`; `זכרות` | 32; 68 | `זכר` [cognate via Akk. *zikaru*]. |
| *ki-sikil*; *dam tuku* | `עלמה`; `שיש לה בעל` | 33, 34 | netherworld corpus *ki-sikil*. |
| *e-ne dug₄* | `שחק שחוק` | 33 | ↔ `מְצַחֵק` (Gen 26:8). |
| *inim sig-ga* | `הדבר השפל` | 33, 65, 93 | `דִּבָּה` stays for Akk. *ṭapiltu*. |
| *maḫ* | `נשגב` | 33, 52, 94 | lament / creation (*id₂ maḫ* `נהר נשגב`). |
| *pe-el*; *mu₂* | `טמא`; `הצמיח` | 35 | proverbs corpus. |
| *lul*; *lu₂-lul* | `שקר`; `שקרן` | 36; 67, 136 | proverbs corpus. |
| *ka tar* | `התהלל` | 37, 67 | ↔ `אַל-תִּתְהַלֵּל` (Prov 27:1). |
| *ad gi₄*; *gi₄* / *gur* | `השיב קול`; `שוב` / `השיב` | 38; 64 | lament rule. |
| *dugud* | `כבד` | 38 | licensed by the gate (*dugud*). |
| *uš₂*; *ninda* | `דם`; `לחם` | 40; 39, 97–100 | |
| *gud*; *udu* | `שור`; `שה` (`צאנך` for *udu-zu*) | 41, 45, 94; 41, 44 | proverbs corpus. |
| *u₃-nu-ĝar-ra* | `דבר זדוני` | 42 | proverbs *nu-ĝar-ra* `זדוני`. |
| *ĝiš-bur₂*; *eĝer-bi-še₃* | `פח`; `לאחריתו` | 43 | Etana (`פח`). |
| *u₂*; *kiĝ₂*; *sag₂* | `עשב`; `ביקש`; `פיזר` | 44, 93, 105, 138 | |
| *uš*; *sig₁₀* | `יסוד`; `הונח` / `מונח` | 45–46 | |
| *ḫuĝ*; *lu₂ ḫuĝ-ĝa₂* | `שכר` (`תשכור`); `שכיר` | 45; 119 | not to be read `שֵׁכָר` (*kaš*, vocalized). |
| *geme₂*; *gi₄-in*; *egir₂* | `אָמָה` (always vocalized); `שפחה`; `נסיכה` | 49, 132–133; 55; 132–133 | proverbs corpus (`אָמָה` ★ / `שפחה`); *nin* = `גבירה` elsewhere. |
| *ĝiš₃* | `איבר` | 49, 62 | plain, not euphemistic. |
| *aš₂*; *aš₂ bal*; *aš₂ dug₄ / di* | `קללה`; `קלל`; `האומר קללה` | 50, 134, 137, 142 | lament / proverbs; `ארר` = *nam … ku₅*. |
| *a₂ zig₃* | `בזרוע רמה` | 50, 62 | ↔ `בְּיָד רָמָה` (Num 15:30). |
| *šu gid₂*; *gid₂* | `הושיט יד`; `נמשך` | 51; 52 | lament precedent; `ארך` avoided (gated for *arāku*; see Problems). |
| *a₂ sig*; *sig* (of words) | `זרוע רפה`; `שפל` | 51; 33 | one lemma, two senses (open decision 4). |
| *šub*; *ed₃* | `נפל`; `ירד` | 52, 55; 51 | `עזב` reserved. |
| *ur₅ (tuku)* | `חוב` (`מי שחוב עליו`) | 53 | proverbs; `בעל־חוב` (= creditor in Hebrew) avoided. |
| *bad* | `הרחיק` / `מרוחק` | 53, 63, 64, 98 | = flood line 2 `המרוחקים`. |
| *kur₂* | `שונה` / `השתנה` | 27, 53, 66 | legends-of-kings corpus. |
| *sun₇* | `יהיר` | 54 | |
| *bal* | `עבר` | 12, 56, 82 | flood corpus. |
| *kiri₆*; *gi-sig* | `גן`; `גדר־הקנים` | 58 | everyday corpus (`גן` only *kiri₆*). |
| *du₈* (a fence) | `התיר` | 58 | not `פרץ` (Qoh 10:8 in the apparatus). |
| *ur₃*; *us₂*; *la₂* | `גרף`; `דבק (אחרי)`; `הצמיד` / `תלה` | 60, 88; 61, 99; 18, 43 | *la₂*: "attach" (18), "hang" (43), "be laden" (135). |
| *kisal*; *zu* | `חצר`; `ידע` | 62 | `ידע` licensed by *zu*. |
| *ĝuruš*; *iri*; *bad₃-šul-ḫi* | `בחור`; `עיר`; `חומת־החוץ?` | 63–64 | |
| *{ĝiš}bal*; *NU* | `פלך`; `טווה` | 65 | temple / proverbs corpora. |
| *lu₂ X* (construct) | `איש־X` | 65 | as *lu₂-ki-inim-ma*. |
| *e₂ kaš*; *kaš* | `בית השֵּׁכָר`; `שֵׁכָר` (vocalized) | 67, 83, 85, 126 | proverbs; CW *šikaru* `שֵׁכָר` [cognate]. |
| *ur-saĝ*; *dili*; *šar₂* | `גיבור`; `יחיד` / `לבדו`; `רבבה` | 69–72 | *šar₂* = 3,600, "the great number". |
| *2-kam-ma-še₃* | `בפעם השנייה` | 76 | (SU-b: 146 *3-kam-ma-še₃* = `בפעם השלישית`). |
| *lu₂-tur* | `קטני` | 84, 102 | |
| *e₂-gal*; *id₂*; *du₇* | `היכל`; `נהר`; `נגף` (`שור נוגף`) | 26, 94, 123; 94 | *du₇* = Akk. *nakāpu* = `נגף` (law corpus). |
| *niĝ₂ sa₂ nu-di* | `"די!" לא ייאמר` | 95 | by sense (open decision 3); *sa₂* alone = `השתווה` (102). |
| *silig* | `נעצר` | 96 | |
| *šum₂*; *ku-nu*; *til* | `נתן`; `קרוב`; `נגמר` | 97–100, 121 | `תם` reserved. |
| *niĝ₂-u₂-rum* | `קניין` | 101 | *niĝ₂-gur₁₁* = `רכוש` (proverbs). |
| *sa₂*; *sa₂ dug₄* | `השתווה`; `מילא` | 102; 106 | |
| *šid*; *kišib*; *lal₃*; *u₂-lal₃*; *bur₁₂* | `מנה`; `חותם`; `דבש`; `עשב־דבש`; `עקר` | 103–105 | |
| *{kuš}lu-ub₂*; *sug₄* | `שק־עור`; `ריק` | 106–107, 119–121 | temple corpus (`שקי־עור`); `כיס` reserved for *kīsu*. |
| *gal-gal di* | `המדבר גדולות` | 107 | ↔ Ps 12:4. |
| *silim dug₄* | `"שלום!" (אמר)` | 108 | `שלם` licensed by *silim*. |
| *kuš* | `עור` | 109 | |
| *lil₂*; *na-ĝa₂-aḫ* | `כסיל`; `שוטה` | 111–112; 142 | §11.5 (`נבער` = *ḫu-ru-um*, not in 1–142). |
| *u₂-gu de₂*; *de₂* | `איבד`; `שפך` | 111–112; 116 | |
| *u₃-sa₂* | `שֵׁנָה` (vocalized) | 112 | |
| *keše₂* | `קשר` / `קשירה` | 18, 113 | |
| *giri₁₇ šu ĝal₂* | `יד על אף הניח` | 113–114 | the gesture kept (Akk. *labān appi* `ליטוף אף`); another corpus has `השתחווה`. |
| *nam tar* | `גזר גורל` | 115, 118 | never `ברך`. |
| *teš₂*; *ur₂*; *u₆* | `בושה`; `חיק`; `פליאה` | 116–117 | |
| *dim₃* | `חסרת־אונים` | 118 | |
| *ba*; *ĝa₂-la dag* | `חלק`; `חדל מן העבודה` | 119, 122 | |
| *dumu-nitaḫ*; *dumu-munus*; *ama₅* | `בן`; `בת`; `בית־הנשים` | 124–125 | ↔ Esth 2:3. |
| *di* (lawsuit) | `דין` | 126 | §11.2 *dīnu*. |
| *šag₄ gu₇* | `אכל את הלב` | 127 | |
| *an*; *sud*; *kal* | `שמים`; `רחוק`; `יקר` | 98, 128–129; 128; 13, 128, 131 | |
| *lu* | `רבה` (`תַּרְבֶּה`) | 129 | creation corpus, tagged. |
| *pa-an-pa* | `נשם` | 130 | |
| *ud*; *buru₁₄* | `יום`; `קציר` | 131 | |
| *de₅* / *ri* (gather) | `לקט` | 132–133 | the same *de₅* as *na de₅* (`נתן עצה`, a fixed formula). |
| *igi-tum₃ la₂* | `בעל משא־העין` (2026-10-23 harmonization: `החמדה`) | 135 | = Akk. *nīš īni* (SH 88 `משא עיניו`); `חמד` reserved (the proverbs corpus has `החמדה`: open decision 1). |
| *ĝiš*; *ra* | `עץ`; `הכה` | 135 | |
| *gu₃ mur*; *tug₂*; *bir₇* | `נהמת קול`; `בגד`; `קרע` | 136 | |
| *niĝ₂-erim₂* | `רשע` | 137 | proverbs; licensed. |
| *inim dirig* | `דבר יתר` | 138 | ↔ `שְׂפַת-יֶתֶר` (Prov 17:7); *dirig* = Akk. *(w)atāru*. |
| *u₃-bu-bu-ul*; *lipiš*; *gig* | `אבעבועה`; `קרביים`; `מר` | 138 | the laments had `להבה` for *u₃-bu-bu-ul* (another sense). |
| *zalag* | `האיר` | 139 | |
| *šudu₃*; *a-ra-zu* | `ברכה`; `תחנון` | 140; 141 | the 2026-10-21 harmonization (ETCSL "prayer" for both). |
| *sed* | `קר` / `צינן` | 141 | |
| *ĝizzal* | `אוזן` | 10, 80, 142 | flood corpus (`הטה אוזן`). |
| Names | `נִינְכָּסִי` (86); ★`אוּתוּ` always vocalized (70, 72) | | §11.1. |

### Open decisions for the user
1. **`חמד` and *igi-tum₃*** (135): the proverbs corpus (A31, the same saying) renders *igi-tum₃* `החמדה`; this corpus reserves `חמד` (§11.6), so here `בעל משא־העין`, aligned with SH 88's `משא עיניו` (*nīš īni*). A cross-corpus split: either the proverbs line changes to `משא־העין`, or `חמד` is licensed for *igi-tum₃* in both. **Settled 2026-10-23 (`harmonization--2026-10-23.md` row 16): `החמדה – ראש בעץ מכה.`, `חמדה` licensed by *igi-tum₃* in `wisdom_tools.py`.**
2. ***ša-* = `הֲרֵי`** (14 and 30 more places): alternative a plain future (lighter Hebrew, prefix hidden) or `אָכֵן`. SU-b should keep `הֲרֵי` (143, 145, 152A ff.).
3. **95 `"די!" לא ייאמר`** for *niĝ₂ sa₂ nu-di-dam* (lit. "'an equal thing' is not said"): by sense, to show the idiom of Prov 30:15–16 (`לֹא-אָמְרוּ הוֹן`); a literal `"שווה" לא ייאמר` is opaque.
4. ***sig*** has two Hebrew words by sense: `שפל` (*inim sig-ga*, 33, 65, 93) and `רפה` (*a₂ sig*, 51).
5. **30 *ni₂-zu***: translated as the edition writes it (`עצמך – לביא הוא`), against ETCSL's English "A thief" (= *ni₂-zuḫ*, Alster); if the reading "thief" is preferred: `הגנב – לביא הוא`.
6. **21 *uru₂*** "flood" (ETCSL lemma) or "city": `מבולו?`.
7. **34 *lu₂ dam tuku***: the Sumerian does not mark the gender; `מי שיש לה בעל` follows 33 and ETCSL.
8. **49 *zu₂ ur₅ … sa₄***: the compound verb rendered by its sense (`תכרסם`), not word by word (*sa₄* "call" is part of it).
9. ***du₃* = `בנה` everywhere** (17 a well, 104 a "building" mouth, 109 the leather-worker): literal at the price of odd Hebrew in 104 and 109 (`פה בונה?`, `הבונה בעור`); the alternative is by sense (`חוצב`, `דוקר`, `עושה`), which would break the identity of 104 and 109.
10. **138 *u₃-bu-bu-ul* ~ Akk. *bubuʾtu* ~ `אֲבַעְבֻּעֹת`** (Ex 9:9): our proposal, to be checked in a dictionary (CAD / ePSD2) before it enters the index as a cognate.

### Progress log
- Read: the run brief and the coordinator's message of 2026-10-22, `../translator-brief.md`, the guidelines, `../corpus.md`, `../renderings.md` (incl. §11.1–§11.13), the flood corpus's Šuruppag 1–13, the proverbs model (`annotated-c1-1.rtl.md`) and `../../קולות-היום-יום/renderings.md`, the Sumerian brief of the creation corpus, the Theodicy model.
- `wisdom_tools.py sux SU`: 1–13 from the flood corpus; 73–82A repeat 6–13; 135 ≈ proverbs A31.
- Drafting in sections, each written to disk at once: 1–18, 19–31, 32–41, 42–53, 54–72, 73–93, 94–102, 103–110, 111–142; `fill SU` after each; `verify SU` and `check_bible_quotes.py` after each.
- Pass (a) fidelity: every content word accounted for in the פירוק bullets; brackets checked against the composite (15: the bracket removed, only the suffix is broken; 20 `תעש[ה]`, 34 `ב[ני]`, 35 `ת[טמא]`, 78 `[נתן]`, 81–82 `[אל]`, 82A).
- Pass (b) consistency: the repeated lines (73–82A against 6–13: only `הֲרֵי` in 73, 75, `בפעם השנייה` in 76 and the brackets differ); 69 = 70 and 71 = 72 except the name; 111 = 112 + `בשֵׁנָה`; 57 / 59 the same frame; 119–122 the same `הֲרֵי … עמך`. Collisions found and fixed: *us₂* and *la₂* both `הצמיד` (61 → `תדביק`, 99 `אדבקה`); *zal* `יחלוף` against *sug₆* `החליף` (48 → `יכלה`); *du₃* `עושה` against *ak* `עשה` (109 → `הבונה … יבנה`, 104 → `פה בונה?`).
- Pass (c) Hebrew: the generated `translation-SU.rtl.md` read through; 26 double punctuation removed, 120 aligned with 119/121 (`את שק־העור`).
- Checks: `python3 -I wisdom_tools.py verify SU` – 0 problems (143 entries, placeholder note for 143–280); the 1–13 copy check passes; `check_bible_quotes.py` – 0 problems on the annotated file, the intro, the generated translation and this file. `wisdom_tools.py build` run (`translation-SU.rtl.md` 143 lines, 9 footnotes).

### The text on its own terms
- **A practical world without gods** (14–68): the reasons given are never divine punishment but what people will do – "that man will seize you" (19), "the people will harm you" (17), "'Replace it!' they will say to you" (59), "the courtyard will know" (62). The gods enter only with Utu as the model of the single warrior (70, 72), Ninkasi (86) and the image of fate (115, 118).
- **The farmer's and the trader's advice comes first**: which donkey not to buy (14, 48), where not to put a field or a well (15–17), not to build by the square (18), not to scatter the flock into unchecked pasture (44), not to hire another's ox for an unsure job (45–46).
- **Debt and surety as the great danger**: the hand-grasp (19–20), the debtor not to be driven away (53), the hired man who eats your bread and leaves for the palace (119–123), the promise "I'll give it to you" that is "as far as the sky" (97–100).
- **The body of social life**: the gesture of supplication "hand to the nose" (113–114, the fool begging for his life); the "head" as the word for a slave (30); tearing the garment as a liar's display (136); "eating the heart" for worry (127); "cooling the heart" for appeasement (141).
- **Women and slaves**: the slave girl who "gnaws" the master who sleeps with her (49), the man who lives with an arrogant partner falls to a slave girl's status (55), the married woman and the slander about her (33–34), the rape that the courtyard learns of (62), the daughter sent to the women's quarters (125), "gather like a slave girl, eat like a princess" (132–133).
- **The palace** is a mighty river with a goring ox in its middle, that never says "enough" and whose outflow never stops (94–96) – the oldest image of the insatiable state; the hired man ends up "standing" (serving) there (123).
- **Speech** is the theme of the second collection: three mouths (103–105), the talkative and the boaster (106–108), the slanderer's spindle eye (65), the "excess word" as a pustule and a poison herb (138), the curse that circles back to the hand (50), and the prayer as cold water (141). The collection ends bitterly: the Land listens to curses and to the fool (142).
- **Humour and paradox**: the thief who is a lion until caught (30); the fool who decrees fates like a god (115); the shameless one who stands "for admiration" (117); the leather-worker who ends up working his own skin (109, a pun on *kuš* "hide / skin").
- **The frame**: the oldest wisdom is put in the mouth of the father of the flood hero, and repeated three times (1–13, 73–82A, 143–152A) like a school text; perhaps the only flood word of the first collection is in 21 (*uru₂* "flood?").
- **Grammar as meaning**: the counsels are prohibitives (*na-*, Hebrew `אַל`), as in Proverbs' "Words of the Wise", not the Decalogue's `לֹא`; once (19) a *nu-* statement.

### Lines shared with other files
- **1–13** = the flood corpus's `>` lines, copied verbatim (checked by `verify`, COPIES).
- **74, 77** = 7; **79** = 9 (`תילקח`: *dab₅* = `לקח` kept with the identical line; all three `תיאחז` since the 2026-10-23 harmonization); **80** = 10; **81** = 11 and **82** = 12 with the prohibitive restored in brackets (`[אל]`); **82A** = 13 with the brackets of the composite; **73, 75** = 6, 8 + `הֲרֵי` (*še₃-* for *na-*, ḫamṭu for marû); **76** = 6 + `בפעם השנייה`; **78** = 8 with the verb in brackets. SU-b: 143–152A repeat the same lines (143, 145 *še₃-mu-ni-in-de₅* = 73, 75; 146 `בפעם השלישית`; 151 lacks *šu*; 152A has *ak* for *ĝal₂*).
- **Counsels of Wisdom 31–38 ↔ Šuruppag 22–27** (the quarrel and the witness): one Hebrew for *ṣāltu* / *du₁₄* = `ריב`; CW 33 `במקום ריב – אל תִּדָּחֵק` ↔ SU 22 `במקום ריב – אל תלך …` (the verbs differ in the source).
- **SH 88** *nīš īni* `משא עיניו` ↔ SU 135 *igi-tum₃* `משא־העין` (2026-10-23: `החמדה`).
- **Proverbs A31** (`igi-tum₃ la₂ saĝ ĝiš ra-ra` `החמדה – ראש בעץ מכה`) ↔ SU 135 `בעל משא־העין – ראש בעץ מכה`: the verb identical, the noun differs (open decision 1; identical since the 2026-10-23 harmonization).

### Proposals for the shared renderings
- §11.5: ***ša-*** (and *ši-*, *šu-*, *še₃-*) = `הֲרֵי`, always vocalized, before the verb; *bara-* = `בַּל` (vocalized); *na-nam* (affirmative) = nominal sentence.
- *sug₆* = `החליף` (law corpus) in this corpus too; *du₇* = `נגף` (= *nakāpu*); *du₁₄* = `ריב` (= *ṣāltu*); *šu du₈* = `אחיזת־יד`; *igi-tum₃* = `משא־העין` (= *nīš īni*; 2026-10-23 harmonization: `חמדה`); *inim dirig* = `דבר יתר`; *inim sig-ga* = `הדבר השפל`; *geme₂* `אָמָה` / *gi₄-in* `שפחה` / *egir₂* `נסיכה`; *pu₂* = `בור`; *dur₃* = `עַיִר` (always vocalized); *e₂ kaš* = `בית השֵּׁכָר` (vocalized); *ka tar* = `התהלל`; *a₂ zig₃* = `בזרוע רמה`; *giri₁₇ šu ĝal₂* = `יד על אף הניח` (literal, against another corpus's `השתחווה`).
- Always vocalize (add to §8): `הֲרֵי`, `עַיִר`, `השֵּׁכָר`, `שֵׁנָה` (sleep), `אֶחְיֶה`, `אוֹכְלָה`.
- `wisdom_tools.py`: the `שלם` allow-list entries `su[replace`, `su-su` never match ETCSL's lemma `sug6[to replace]` nor its forms (`ša-ba-ri-ib-su-su`); if `שלם` is ever wanted for *sug₆*, the entry should be `sug6[`. Not needed while *sug₆* = `החליף`.

### Lessons for the guidelines
- **A Sumerian lemma is not always the Sumerian word of its Akkadian gate**: *gid₂* "be long" is the Sumerian of *arāku*, but the `ארך` gate lists only Akkadian lemmas, so a Sumerian translator cannot use the cognate's Hebrew without a gate change; record the Sumerian equivalents in the gates (or decide that the Sumerian does not inherit the Akkadian cognate).
- **ETCSL's English hides the modal prefixes** ("you should not" for *na-*, "it will" for *ša-*): fix one Hebrew particle per prefix before drafting a Sumerian instruction text.

## SU (143–280)
Translator SU-b (the same translator as SU-a), Round 3 run 4, 2026-10-22; the only translator running. ETCSL labels 143–280 with 152A, 163A–B, 199A–B, 266A, 273A (145 entries), so the file is complete: 288 entries. The placeholder is removed. The single `### Parallels index (SU)` below holds the rows of both halves.

### Scope
- **143–152A** the third prologue; **153–276** the third collection; **277–280** the colophon and doxology to Nisaba. 16 section headings.
- Preservation: mostly complete, but **233–240 are nearly lost** (signs only) and 222, 234, 237, 265, 270, 273 are fragmentary. Obscure lines: 157, 167–168, 182, 199, 219, 222, 244–245, 249–253, 264, 270. The 1-ms. lines 163A–B, 199A–B, 266A and 273A are drafted where ETCSL gives them; 152A is in "some mss.".
- **No *ki-sur-ra*** (boundary) occurs anywhere in the composite (grep of the whole transliteration: 0 hits). The "do not move a boundary" of the surveys is **absent** from this text; the only possible hint is *bulug* in 16 (SU-a).

### Sources consulted
As for 1–142. The ORACC morphology covers most verbs; the forms marked "ניתוח שלנו" are 143–149, 161, 164, 182, 192, 200–201, 205–207, 209–211, 226–227, 263. New precedents: Etana / legends of kings (*ḫe₂-* affirmative = `אָכֵן`), the law corpus (*dumu-gi₇* `בן חורין`), CW (*kurunnu* `סובא`, *kadrû* `מתנה`), the temple corpus (*ḫuĝ* `נח`, the other homonym), the lament corpus (*a* `הוי`, the gesture "scratching the nose").

### Decisions
Grammar: as in 1–142 (§11.14), plus the following.
- *ša-* = `הֲרֵי` kept in 143, 145, 148, 153, 181–182, 184, 187–188, 193–194, 215, 254–255, 261, 270.
- *ḫe₂-* + marû in a consequence clause = `אָכֵן` (192, 207; the legends-of-kings rule); *ḫe₂-* jussive = imperative / jussive (173–174, 200–201, 205–206, 260).
- *la-ba-* (= *nu-ba-*) = `לא` (162–164, 199).
- *na-* before *ĝal₂* (227), like *na-nam*, is affirmative.
- *-inga-* = `גם` (181, 194–195).

Words (first occurrence in 143–280):
| Sumerian | Hebrew | Lines | Reason / rejected |
|---|---|---|---|
| *engar*; *sipad* | `אִכָּר`; `רועה` | 153, 272; 271 | cognate loans (creation corpus); *sipad* = *rēʾû*. |
| *eg₂*; *pa₅*; *ra* | `סוללה`; `תעלה`; `הכה` | 153, 262; 135 | *ra* "beat" kept for the pun ("he has 'beaten' your dykes"). |
| *kar-ke₄* | `זונה` | 154 | §11.1 *ḫarimtu*. |
| *ama-a-tud*; *dumu-gir₁₅* | `יליד־בית`; `בן־חורין` | 155; 156 | proverbs; law corpus (*dumu-gi₇*). |
| *u₄-sar* | `מושחז` | 154 | ↔ Prov 5:4. |
| *kur* (mountain land); *ḫur-saĝ* | `הר` / `ארץ־ההר`; `ההרים` | 158, 169, 178–180, 267–268; 193 | |
| *dili* | `לבד` | 166 | 69. |
| *nam-tar* (noun); *peš₁₀*; *dur₅* | `גורל`; `גדה`; `רטוב` | 170; 198, 263 | |
| *ze₂-er* | `המעיד` | 171 | ↔ Ps 18:37. |
| *šeš-gal*; *nin₉ gal*; *a-a* | `האח הגדול`; `האחות הגדולה`; `אב` | 172–174 | *ab-ba* stays `הזקן` (258–260, the formula of 13); `כבד` is not used (no *kabātu*). |
| *kiĝ₂* (noun) | `מלאכה` | 175 | *ĝa₂-la* = `עבודה`. |
| *niĝ₂-tuku*; *gig* (noun) | `עשיר`; `חולי` | 184, 204 | *gig* = Akk. *murṣu* `חֳלִי`; the adjective stays `מר`. |
| *du₇* "be perfect"; *šu du₇* | `משוכלל`; `שכלל` | 183, 185; 279 | [cognate via *šuklulu*]; the homonym *du₇* "gore" = `נגף` (94). |
| *zig₃* (raise) | `הרים` | 188 | the root of `זרוע רמה` (50, 62); `הקים` is *ĝiš₃ du₃*. |
| *taka₄* | `עזב` | 198 | licensed (*taka4[*); = Akk. *ezēbu*. |
| *ḫul gig* | `שנא` / `שנאה` | 203, 235, 255 | compound by sense (= Akk. *zêru*); in 255 split by *ša-*. |
| *ki aĝ₂* | `אהב` | 202 | letters corpus. |
| *me* | `הַ־מֶה` (always vocalized) | 204 | every corpus. |
| *nir-ĝal₂*; *gaba-ĝal₂*; *nun* | `בעל־סמכות`; `בעל־חזה`; `נסיך` (`נסיכות`) | 204–205 | *egir₂* = `נסיכה`. |
| *ezen* | `חג` | 208 | proverbs. |
| *dam tuku* (marry) | `השיג אשה` | 208 | `לקח אשה` (proverbs) is reserved here; `נשא` = *il₂*. Open decision 11. |
| *ḫuĝ* (209–211) | `שָׂכוּר` (vocalized: `שכור` reads "drunk") | 209–211 | ETCSL's lemma "to hire"; the temple corpus's *ḫuĝ* "rest" = `נח` is a homonym. |
| *kug*; *za-gin₃*; *gada* | `כסף`; `ספיר`; `פשתן` | 210–211 | the 2026-10-21 harmonization (*za-gin₃* = `סַפִּיר`, Ex 24:10 noted). |
| *lul* (of animals) | `שקרן` | 214, 218 | *lul* = `שקר`. |
| *tur₃*; *buru₃* | `רפת`; `חתר` | 214 | 29. |
| *munus zid*; *e₂ zid* | `אשת־אמת`; `בית־אמת` | 215 | *zid* = `אמת`. |
| *gu₂-tar*; *la₂* (hang) | `רעמה`; `תלה` | 218 | as 43; *la₂* "attach" = `הצמיד` (18, 206). |
| *bar-šu-ĝal₂* | `נכסים` | 220 | *niĝ₂-gur₁₁* `רכוש`, *niĝ₂-u₂-rum* `קניין`. |
| *kurun* | `סובא` | 221 | CW (*kurunnu*); *kaš* = `שֵׁכָר`. |
| *kun₅* | `סולם` | 222 | [cognate via Akk. *simmiltu*]. |
| *nim*; *dal* | `זבוב`; `עף` | 223 | creation corpus (*dal*). |
| *eme₃*; *šaḫ*; *ga* | `אתון`; `חזירה`; `חלב` | 224–225 | |
| *giri₁₇ ḫur*; *šeg₁₁ gi₄* | `שרט את אפה`; `השיב זעקה` | 226 | the lament corpus's mourning gesture. |
| *e-sir₂*; *ur₃* (roof); *bad₃-si* | `סמטה`; `גג`; `מעקה` | 229–231 | *sila* = `רחוב`. |
| *pad₃* | `מצא` | 234 | |
| *gum₂-gam* … *za* | `קול־בהמה … משמיע` | 236 | |
| *ḫul₂*; *dirig* (verb) | `שמח`; `עולה על` | 241 | proverbs; *inim dirig* stays `דבר יתר` (255). |
| *ku₇*; *kal* (verb) | `מתוק`; `הוקיר` | 242–243 | proverbs. |
| *gun₃* | `מנומר` | 244 | |
| *Ezina* | `אֶזִינָה` | 245 | the grain goddess, transliterated, noted. |
| *kir₁₁*; *lag* | `כבשה`; `רגב` | 246–247 | *udu* = `שה`. |
| *kar* (wife) | `חטף` | 248–249 | ↔ Judg 21:21. |
| *a* (interjection); *re₇*; *gam* | `הוי`; `הלך` (pl.); `כופף` | 250–251 | lament corpus (*a*). |
| *galam*; *ug₅*; *šu du₃* | `מחוכם`; `המית`; `כבל (יד)` | 252–253 | *galam* as flood line 4; *šu du₃* by sense (the only *du₃* compound besides 49). |
| *emeda* | `מינקת` | 254 | ↔ Gen 24:59, Ex 2:7. |
| *diĝir-zu* | `אֵלְךָ` (vocalized) | 256 | `אלך` reads "I shall go". |
| *dib* | `העביר` | 256 | the same root as *bal* = `עבר` in another stem: a recorded near-collision. |
| *dadag* | `ניקה` (`מנקה`) | 258 | = Akk. *ebēbu* D; licensed. |
| *iri bar-ra* / *iri šag₄-ga* | `העיר החיצונה` / `הפנימית` | 261 | |
| *šukur₂*; *ḫad₂* | `מָנָה` (vocalized); `יבש` | 263 | `מָנֶה` = *ma-na* (letters). |
| *niĝ₂-me-ĝar* | `שתיקה` | 264 | |
| *giĝ₄* (axe); *Dilmun* | `*גרזן?*`; `דִּלְמוּן` | 265 | |
| *ur*; *ḫuš* | `כלב`; `נורא` | 266 | so 60's *ur* may be "dog" too (open decision 12). |
| *diĝir kur-ra* | `אֵלֵי ההר` (vocalized) | 268 | |
| *kadra*; *ten* | `מתנה`; `שכך` | 274–276 | CW *kadrû*; *sed* = `צינן`. |
| *mul* | `כוכב` | 276 | |
| *nin*; *dub*; *za₃-mi₂*; *Nisaba* | `גבירה`; `לוח`; `תהילה`; `נִיסָבָּה` | 279–280 | §11.1. |

### Open decisions for the user
11. ***dam tuku*** "take a wife" (208) is rendered `אשה אל תשיג (לך)`: `לקח` is reserved (*dab₅* / *leqû*) and `נשא` is *il₂*. The proverbs corpus has `לָקַח אִשָּׁה` for *dam tuku*, so this is a cross-corpus split.
12. ***ur*** in 60 (ETCSL lemma "man") against *ur* "dog" in 266: if 60 is "dog", it reads `כלב אל תאכיל`.
13. ***ab-ba* = `הזקן` in 258–259** ("the father is a god"), against ETCSL's "father". The binding formula word is kept so that 260 `עצת הזקן` = 13. The alternative `האב` would merge it with *a-a* (172).
14. **190 *ba-ra-an-bal-e***: ORACC parses *bara-* (a strong negation: "he will not cross the river"). We follow ETCSL (*ba-* + *-ra-*): `(ו)את הנהר יעבור`.
15. **209–211 *ḫuĝ***: "hired" (ETCSL's lemma; ETCSL's English "borrowed / illusory") or *ḫuĝ* "calm, at rest" (the temple corpus's `נח`). We chose `שָׂכוּר`.
16. **244 *gun₃* ~ `בָּרֹד` (Gen 31:10)** through Akk. *burrumu*: our proposal, unverified.

### Progress log
- Read §11.14 and the coordinator's message (the `ארך` gate is now licensed by *gid₂*, the `שלם` gate by *sug₆*). Ran `sux SU`: 143–152A repeat 73–82A / 1–13, 160 = 165. Ran `sumerian_workbench.py line` for 143–280. Grepped the transliteration for *ki-sur*: none.
- Drafted in four sections, each inserted on disk at once before the placeholder: 143–171, 172–203, 204–241, 242–280. Ran `fill`, `verify` and `check_bible_quotes.py` after each, then removed the placeholder.
- Pass (a): every word is in the פירוק. Brackets: 147, 148 (`ל[זיוסודרה]`), 154 `[זונה]`, 175 `תעש[ה]`, 215 `[ישים]`, 236 `ב[ני]`, 266 `יו[דע] … [נורא הוא]`, 271 `[נגמר לו]`, 275 `בהיכ[ל]`.
- Pass (b): repeated lines checked: 143 / 145 = 73 / 75; 144 = 7; 146 = 76 + `השלישית`; 148 = 75 minus `בנו`; 149–150 = 9–10; 151 = 11 (no *šu*, noted); 152 = 12; 152A = 13 with `יעשה` (*ak*); 160 = 165; 162 ≈ 163; 177 / 220 the same second half; 183 / 185 the same second half; 196 ≈ 197; 209–211 the refrain `– שָׂכוּר הוא`; 249 = 15's second half; 258 ≈ 259; 260 the formulas of 10 / 13; 271–272 `נגמר לו`; 138 = 155's second half (`עשב מר־קרביים הוא`); 103 = 224's verb phrase (`דברים מונה`); 130 = 232 (`חיים … נושמות`).
- Pass (c): the generated translation read through. In 190 the tense was corrected to the marû (`יעבור`); 200 `תשקע` (one Hebrew verb for *su*).
- Checks: `verify SU --strict` – 0 problems, 288 entries; `check_bible_quotes.py` clean on all my files; `build` run (288 lines, 14 footnotes).

### The text on its own terms
- **Buying slaves** (154–164) is the longest practical section. Do not buy a prostitute, a house-born slave, a free man or a palace slave girl; buy a stranger from the mountains, who has no house and no city to go back to (162–163). That is a cold logic of dependence. The slave girl from the hills brings "fine" in her hand and "bad" in her heart (193–199).
- **The family hierarchy**: the elder brother "is" a father and the elder sister "is" a mother (172–174). The mother "is" Utu and the father "is" a god (257–259). The parents are not just honoured but put in the place of the gods. The mother comes first (cf. Lev 19:3).
- **The world outside Sumer** (158, 178–180, 266–271): the mountains are where bread drives men up and where foreign slaves come from. Their gods eat men, and there are no houses or cities "as men build them". It ends in shepherds and farmers whose work "is finished".
- **Women in the third collection**: the festival bride whose finery is all "hired" (208–211); the "true woman" placed in a true house (215); the woman with her own property who ruins the house (220); a long sketch of a restless woman who flies into every house like a fly, peers from every roof and parapet, and "breathes life" near a quarrel (222–232); the wife not to be abducted (248–249); the wet nurses of the women's quarters who decree the king's fate (254).
- **Popular belief** (246–247): cursing a ewe brings a daughter; throwing a clod into the chest brings a son. These are omens of birth.
- **Animals as characters**: the "lying" ox that breaks the stall and the "lying" donkey that droops its mane (214, 218); a she-donkey that "recites words" in the street and a sow that suckles in public (224–225).
- **Economics**: do not buy a donkey at harvest (216); a field below the dyke yields a ration wet or dry (263); the suburbs build the inner city (261); the beer-drinker "sinks" the harvest (221); copper from Dilmun (265); "do not treasure things – let things treasure you" (243).
- **The *me*** (204): authority, wealth and forcefulness are "the *me* of princeship", divine institutions. Hence the advice to bend the neck to them (205–207).
- **The end**: the counsels are a "gift" (*kadra*) that soothes the heart and opens the palace (274–275). The whole is closed with praise to Nisaba, goddess of writing (279–280): the oldest wisdom ends with the scribe's signature.

### Lines shared with other files
- 143–152A ↔ 73–82A / 1–13 (see Pass (b)).
- 155b = 138b; 224 shares the verb phrase of 103; 232 shares the verb phrase of 130; 249b = 15b.
- CW: *kurunnu* `סובא` (221), *kadrû* `מתנה` (274–276). The ETCSL text has no parallel to CW's "honour father and mother" in these lines. 172–174 and 255–260 are the Sumerian counterpart, with `הטה אוזן` / `צוואר ייכנע` and no `כבד`.
- Proverbs corpus: *dam tuku* (`לקח אשה` there, `השיג אשה` here: open decision 11).

### Proposals for the shared renderings
- *ḫe₂-* + marû in a consequence clause = `אָכֵן` (192, 207), as in the legends-of-kings corpus.
- *du₇* "be perfect" / *šu du₇* = `שכלל` [cognate via *šuklulu*], to be kept apart from *du₇* "gore" (`נגף`).
- *ḫul gig* = `שנא` / `שנאה` (compound); *taka₄* = `עזב` (licensed).
- *me* = `הַ־מֶה` (confirmed); *kadra* = `מתנה`; *ten* = `שכך` (beside *sed* `צינן`).
- *emeda* = `מינקת`; *kun₅* = `סולם`; *ḫuĝ* "hire" = `שָׂכוּר` (always vocalized); *šukur₂* = `מָנָה` (always vocalized).
- Always vocalize: `אֵלְךָ`, `אֵלֵי`, `אֲמַת` (slave girl of …), `שָׂכוּר`, `מָנָה`, `אָכֵן`.

### Lessons for the guidelines
- **ETCSL's English twice turns *sag₉ … ḫul* into "good and evil"** (47, 193). Before tagging a "good and evil" contact, check that the Sumerian has *dug₃*. It never does in this text: there is no `טוב` in all 288 lines.
- **ETCSL's "like"** in identity statements (*X Y-am₃*: "the elder brother *is* a father", "the mother *is* Utu") softens claims that are bolder than the Bible's. Check *-gin₇* ("like") against *-am₃* ("is") before quoting.

### Parallels index (SU)
| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 9 | *dumu-ĝu₁₀ na ga-de₅* | בני, אתן עצה | `שְׁמַע בְּנִי מוּסַר אָבִיךָ` (משלי א:ח) | [equivalent] | the father's address to the son; `מוסר` reserved. |
| 10 | *ĝizzal ḫe₂-em-ši-ak* | הטה אליו אוזן | `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים` (משלי כב:יז) | [equivalent] | the opening of "the Words of the Wise", the biblical collection closest in form. |
| 14 | *dur₃* | עַיִר | `וְעַיִר פֶּרֶא אָדָם יִוָּלֵד` (איוב יא:יב) | [equivalent] | the young donkey; the first counsel is a market counsel. |
| 16 | (*bulug*?) | חיים (על) *חוד?* הם | `אַל-תַּסֵּג גְּבוּל עוֹלָם    אֲשֶׁר עָשׂוּ אֲבוֹתֶיךָ` (משלי כב:כח) | [absent] | no "do not move the boundary" in 1–142 (*ki-sur-ra* absent); *bulug* "boundary stake?" only possibly here (also Deut 19:14). |
| 17 | *pu₂ … uĝ₃-e ša-ri-ib-ḫul-ḫul* | בור … הֲרֵי העם יָרֵעַ לך | `וְכִי יִפְתַּח אִישׁ בּוֹר אוֹ כִּי יִכְרֶה אִישׁ בֹּר וְלֹא יְכַסֶּנּוּ` (שמות כא:לג) | [divergence] | the danger runs the other way: from the neighbours to the well's owner. |
| 18 | *sila daĝal* | הרחוב הרחב | `בָּרְחֹבוֹת תִּתֵּן קוֹלָהּ` (משלי א:כ) | [equivalent] | the square as the place of the crowd. |
| 19 | *šu du₈* | אחיזת־יד | `בְּנִי אִם-עָרַבְתָּ לְרֵעֶךָ;    תָּקַעְתָּ לַזָּר כַּפֶּיךָ` (משלי ו:א) | [equivalent] | surety named by a hand gesture in both languages; ETCSL's "vouch" hides it. |
| 19 | *šu du₈ … ša-ba-e-dab₅-be₂* | הֲרֵי האדם ההוא יתפוס אותך | `נוֹקַשְׁתָּ בְאִמְרֵי-פִיךָ;    נִלְכַּדְתָּ בְּאִמְרֵי-פִיךָ` (משלי ו:ב) | [equivalent] | the guarantor "caught". |
| 19 | *šu du₈* | אחיזת־יד | `אַל-תְּהִי בְתֹקְעֵי-כָף;    בַּעֹרְבִים מַשָּׁאוֹת` (משלי כב:כו) | [equivalent] | also `אָדָם חֲסַר-לֵב תּוֹקֵעַ כָּף` (משלי יז:יח), `רַע-יֵרוֹעַ כִּי-עָרַב זָר` (משלי יא:טו); 19 has *nu-* (statement), 20 *na-* (prohibitive). |
| 23 | *lu₂-ki-inim-ma* | עד | `לֹא תַעֲנֶה בְרֵעֲךָ עֵד שָׁקֶר` (שמות כ:יב) | [divergence] | Šuruppag: do not be a witness at all (danger to the witness); the Decalogue: do not be a false one. CW 34–35 the Akkadian parallel. |
| 28 | *niĝ₂ nam-mu-zuḫ-zuḫ* | דבר אל תגנוב | `לֹא תִגְנֹב` (שמות כ:יב) | [equivalent] | same prohibition, different grammar: *na-* = Proverbs' `אַל`, not the Decalogue's `לֹא`. |
| 28 | *na-* (prohibitive) | אל + עתיד | `אַל-תַּסֵּג גְּבוּל עוֹלָם` (משלי כב:כח) | [equivalent] | the counsel form of Proverbs 22–24 is the Sumerian prohibitive. |
| 29 | *e₂ na-a-an-ni-buru₃-e-en* | בית אל תחתור | `אִם בַּמַּחְתֶּרֶת יִמָּצֵא הַגַּנָּב` (שמות כב:א) | [equivalent] | breaking through a mud-brick wall. |
| 29 | *mi-si-IŠ-ra al nam-me* | את *ארגז־הכסף* אל תשאל | `לֹא תַחְמֹד בֵּית רֵעֶךָ` (שמות כ:יג) | [divergence] | "house" and "desire" in one line, but as a stage of burglary; `חמד` reserved, *al dug₄* = `שאל`. |
| 30 | *ul-dab₅ saĝ na-nam* | משנתפס – ראש (עבד) הוא | `וְנִמְצָא יְשַׁלֵּם שִׁבְעָתָיִם` (משלי ו:לא) | [divergence] | the moment of capture decides: sevenfold payment / slavery. The line reads *ni₂-zu* "yourself"; ETCSL's English "A thief" (open decision 5). |
| 31 | *sa gaz* | שוד | — | [absent] | SA.GAZ = *ḫapiru* / *ʿapiru* elsewhere (the debated link with `עִבְרִי`); here only "robbery". |
| 32 | *niĝir-si* | שׁוֹשְׁבִין | `וַתְּהִי אֵשֶׁת שִׁמְשׁוֹן לְמֵרֵעֵהוּ אֲשֶׁר רֵעָה לוֹ` (שופטים יד:כ) | [equivalent] | the best man who takes the bride (cf. LH 161). |
| 33 | *e-ne … dug₄* | שחוק אל תשחק | `וַיַּרְא וְהִנֵּה יִצְחָק מְצַחֵק אֵת רִבְקָה אִשְׁתּוֹ` (בראשית כו:ח) | [equivalent] | "playing" with a married woman reveals the bond. |
| 33 | *ki-sikil dam tuku-da* | עם עלמה שיש לה בעל | `כֵּן הַבָּא אֶל-אֵשֶׁת רֵעֵהוּ:    לֹא-יִנָּקֶה כָּל-הַנֹּגֵעַ בָּהּ` (משלי ו:כט) | [divergence] | Šuruppag fears the slander (`הדבר השפל – נשגב`), Proverbs the guilt. |
| 34 | *dagan-na … dur₂ nam-bi₂-e-ĝa₂-ĝa₂* | בחדר … אל תשב | `נֹאֵף אִשָּׁה חֲסַר-לֵב` (משלי ו:לב) | [divergence] | Šuruppag forbids the situation, Proverbs / the Decalogue (`לֹא תִנְאָף`, שמות כ:יב) the act. |
| 35 | *du₁₄ nam-mu₂-mu₂-de₃* | ריב אל תצמיח | `פּוֹטֵר מַיִם רֵאשִׁית מָדוֹן` (משלי יז:יד) | [equivalent] | the quarrel that grows from a small beginning. |
| 37 | *ka nam-tar-tar-re-e-en* | אל תתהלל | `יְהַלֶּלְךָ זָר וְלֹא-פִיךָ` (משלי כז:ב) | [equivalent] | also `אַל-תִּתְהַלֵּל` (משלי כז:א); both locate boasting in the mouth (*ka*). Again 67. |
| 39 | *ninda zuḫ-a* | לחם גנוב | `מַיִם-גְּנוּבִים יִמְתָּקוּ;    וְלֶחֶם סְתָרִים יִנְעָם` (משלי ט:יז) | [equivalent] | literal stolen bread, eaten "with" someone. |
| 40 | *šu-zu uš₂-am₃* | את ידך – בדם היא | `יְדֵיכֶם דָּמִים מָלֵאוּ` (ישעיהו א:טו) | [equivalent] | also `וִימַהֲרוּ לִשְׁפָּךְ-דָּם` (משלי א:טז). |
| 41 | *gud … udu ša-ba-ri-ib-su-su* | הֲרֵי שור תחליף, הֲרֵי שה תחליף | `כִּי יִגְנֹב אִישׁ שׁוֹר אוֹ שֶׂה וּטְבָחוֹ אוֹ מְכָרוֹ` (שמות כא:לז) | [equivalent] | the same pair, in the same order, for a slaughtered animal; no multiple; *sug₆* = `החליף`, the Bible's `יְשַׁלֵּם` not used (`שלם` reserved for *silim*). |
| 43 | *ĝiš-bur₂-gin₇ ši-me-ši-ib₂-la₂-e* | כפח הֲרֵי יתלה עליך | `כְּמַהֵר צִפּוֹר אֶל-פָּח` (משלי ז:כג) | [equivalent] | the word that becomes a trap; also `וְכַצִּפֳּרִים הָאֲחֻזוֹת בַּפָּח` (קהלת ט:יב). ETCSL's "lay a trap" hides "like a snare it will hang". |
| 43 | *eĝer-bi-še₃* | לאחריתו | `אַחֲרִיתוֹ כְּנָחָשׁ יִשָּׁךְ` (משלי כג:לב) | [equivalent] | the "later" of a harmless-looking thing. |
| 45 | *gud lu₂ na-ḫuĝ-e* | שור של אדם אל תשכור | `אִם שָׂכִיר הוּא בָּא בִּשְׂכָרוֹ` (שמות כב:יד) | [equivalent] | the hired / borrowed animal and the liability (also שמות כב:יג). |
| 47 | *šag₄-bi sag₉ ḫul-a* | תוכו נאה ורע | `וְעֵץ הַדַּעַת טוֹב וָרָע` (בראשית ב:ט) | [divergence] | **false echo of ETCSL** ("good and evil"): *sag₉*, not *dug₃*; no knowledge, no morality – the night hides both. |
| 48 | *anše edin-na* | חמור־ערבה | `אֲשֶׁר-שַׂמְתִּי עֲרָבָה בֵיתוֹ` (איוב לט:ו) | [equivalent] | the untameable wild ass of the steppe (`מִי-שִׁלַּח פֶּרֶא חָפְשִׁי`, איוב לט:ה); `פרא` reserved. |
| 49 | *geme₂ … ĝiš₃ na-an-du₃* | עם אֲמָתְךָ איבר אל תקים | `וְשִׁפְחָה כִּי תִירַשׁ גְּבִרְתָּהּ` (משלי ל:כג) | [equivalent] | the slave woman who gains power by sex; cf. Hagar `וַתֵּקַל גְּבִרְתָּהּ בְּעֵינֶיהָ` (בראשית טז:ד). |
| 50 | *aš₂ … šu-uš im-ši-ni₁₀-ni₁₀* | קללה … אל היד היא סובבת | `כֵּן קִלְלַת חִנָּם` (משלי כו:ב) | [equivalent] | the curse that returns (Prov: does not arrive). |
| 50 | *a₂ zig₃* | בזרוע רמה | `וְהַנֶּפֶשׁ אֲשֶׁר תַּעֲשֶׂה בְּיָד רָמָה` (במדבר טו:ל) | [equivalent] | the raised arm of defiance / force; again 62 (rape). |
| 53 | *ur₅ tuku na-an-bad-e* | את מי שחוב עליו אל תרחיק | `וְעֶבֶד לֹוֶה לְאִישׁ מַלְוֶה` (משלי כב:ז) | [divergence] | prudence, not mercy (cf. `לֹא תִהְיֶה לוֹ כְּנֹשֶׁה`, שמות כב:כד): a driven-away debtor becomes an enemy. |
| 54 | *sun₇-na-da e₂ na-an-da-ĝa₂-ĝa₂-an* | עם יהיר – בית אל תשים | `אַל-תִּתְרַע אֶת-בַּעַל אָף` (משלי כב:כד) | [equivalent] | `אַל` + "with" a difficult man, in the same collection of Proverbs. |
| 58 | *gi-sig-ga … nam-bi₂-du₈-e-en* | גדר־הקנים … אל תתיר | `וּפֹרֵץ גָּדֵר יִשְּׁכֶנּוּ נָחָשׁ` (קהלת י:ח) | [equivalent] | the punishment here is the crowd's "Replace it!" (59). |
| 62 | *dumu lu₂-ra ĝiš₃ a₂ zig₃ … kisal-e bi₂-zu-zu* | … החצר תדע | `כִּי בַשָּׂדֶה מְצָאָהּ; צָעֲקָה הַנַּעֲרָ הַמְאֹרָשָׂה וְאֵין מוֹשִׁיעַ לָהּ` (דברים כב:כז) | [divergence] | the Torah asks whether she was heard (also דברים כב:כד); Šuruppag warns that the household will know. |
| 62 | *ĝiš₃ a₂ zig₃* | איבר בזרוע רמה | `וַיִּקַּח אֹתָהּ וַיִּשְׁכַּב אֹתָהּ וַיְעַנֶּהָ` (בראשית לד:ב) | [equivalent] | Dinah: the family "knows" and avenges. |
| 63 | *a₂-tuku* | בעל־זרוע | `וְאִישׁ זְרוֹעַ לוֹ הָאָרֶץ` (איוב כב:ח) | [equivalent] | "man of the arm" = the powerful, in both languages. |
| 65 | *lu₂ inim sig-ga-ke₄ igi {ĝiš}bal-gin₇ ši-NU-NU* | איש־הדבר־השפל – העין כפלך הֲרֵי טווה | `קֹרֵץ בְּעֵינָו מֹלֵל בְּרַגְלָו` (משלי ו:יג) | [equivalent] | the worthless man's eye (`אָדָם בְּלִיַּעַל`, משלי ו:יב; `קֹרֵץ עַיִן יִתֵּן עַצָּבֶת`, משלי י:י). |
| 65 | *{ĝiš}bal* | פלך | `וְכַפֶּיהָ תָּמְכוּ פָלֶךְ` (משלי לא:יט) | [equivalent] | the spindle as an image (here of the restless eye). |
| 69 | *dili-ni lu₂ šar₂-ra-am₃* | הוא לבדו – רבבת אנשים הוא | `אֵיכָה יִרְדֹּף אֶחָד אֶלֶף וּשְׁנַיִם יָנִיסוּ רְבָבָה` (דברים לב:ל) | [divergence] | the one against the many; in the Bible the strength is God's (`אִישׁ אֶחָד מִכֶּם יִרְדָּף אָלֶף`, יהושע כג:י), here the hero's own – and Utu's (70). Also `וְדָוִד בְּרִבְבֹתָיו` (שמואל א יח:ז). |
| 70 | *{d}utu dili na-nam* | אוּתוּ – יחיד הוא | `יָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח` (תהלים יט:ו) | [equivalent] | the sun as a warrior. |
| 94 | *e₂-gal id₂ maḫ-am₃* | ההיכל – נהר נשגב הוא | `כָּל הַנְּחָלִים הֹלְכִים אֶל הַיָּם וְהַיָּם אֵינֶנּוּ מָלֵא` (קהלת א:ז) | [divergence] | Qohelet's never-full sea is nature's futility; Šuruppag's never-full palace is the state's appetite. ETCSL's "like a … river" adds a "like". |
| 94 | *šag₄-bi gud du₇-du₇-dam* | תוכו – שור נוגף הוא | `וְכִי יִגַּח שׁוֹר אֶת אִישׁ אוֹ אֶת אִשָּׁה וָמֵת` (שמות כא:כח) | [equivalent] | the goring ox as the image of the current; *du₇* = Akk. *nakāpu* = `נגף`. |
| 95 | *niĝ₂ ku₄-ku₄ niĝ₂ sa₂ nu-di-dam* | מה שנכנס – "די!" לא ייאמר לו | `אַרְבַּע לֹא-אָמְרוּ הוֹן` (משלי ל:טו) | [equivalent] | the same idiom: "they do not say 'enough'" (also `אֶרֶץ לֹא-שָׂבְעָה מַּיִם`, משלי ל:טז). Rendered by sense (open decision 3). |
| 95 | (the insatiable) | — | `שְׁאוֹל וַאֲבַדֹּה לֹא תִשְׂבַּעְנָה` (משלי כז:כ) | [equivalent] | Proverbs' insatiables are Sheol and the eyes; here the palace. |
| 96 | *niĝ₂ e₃ niĝ₂ nu-silig-ge-dam* | מה שיוצא – לא ייעצר | `אֶל מְקוֹם שֶׁהַנְּחָלִים הֹלְכִים שָׁם הֵם שָׁבִים לָלָכֶת` (קהלת א:ז) | [equivalent] | the flow that never stops. |
| 97–98 | *ga-ra-ab-šum₂-bi … an ba₉-ra₂-am₃* | "אתננו לך" … נתינתו – שמים מרוחקים היא | `אַל-תֹּאמַר לְרֵעֲיךָ (לְרֵעֲךָ) לֵךְ וָשׁוּב וּמָחָר אֶתֵּן` (משלי ג:כח) | [equivalent] | the deferred promise "I will give". |
| 102 | *lu₂-tur-ĝu₁₀ niĝ₂ nu-mu-un-da-sa₂* | לקטני – דבר לא ישתווה | `וְכָל-חֲפָצֶיךָ לֹא יִשְׁווּ-בָהּ` (משלי ג:טו) | [equivalent] | the "nothing equals" idiom (there of wisdom); children as the treasure, without a god (`הִנֵּה נַחֲלַת יְהוָה בָּנִים`, תהלים קכז:ג: [divergence]). |
| 105 | *ka lal₃-e* | פה הדבש | `צוּף-דְּבַשׁ אִמְרֵי-נֹעַם` (משלי טז:כד) | [equivalent] | sweet speech as honey; in Proverbs it heals the hearer, here it profits the speaker. |
| 107 | *gal-gal di* | המדבר גדולות | `לָשׁוֹן מְדַבֶּרֶת גְּדֹלוֹת` (תהלים יב:ד) | [equivalent] | the same phrase. |
| 109 | *kuš … kuš-ni* | בעור – בעורו | `עוֹר בְּעַד עוֹר` (איוב ב:ד) | [equivalent] | a pun on animal hide and human skin in both. |
| 111 | *{lu₂}lil₂* | הכסיל | `וְאִוֶּלֶת בְּיָדֶיהָ תֶהֶרְסֶנּוּ` (משלי יד:א) | [equivalent] | *lil₂* = Akk. *lillu* = `כסיל`: the fool as the one who loses. |
| 116 | *lu₂ ur₂-še₃ mu-un-de₂-e* | אל חיק אדם שופך | `וְהָשֵׁב לִשְׁכֵנֵינוּ שִׁבְעָתַיִם    אֶל-חֵיקָם` (תהלים עט:יב) | [equivalent] | "into the lap" = to load on another. |
| 119 | *lu₂ ḫuĝ-ĝa₂-zu* | שכירך | `וּכְשָׂכִיר יְקַוֶּה פָעֳלוֹ` (איוב ז:ב) | [divergence] | the Torah protects the hired man (`לֹא תַעֲשֹׁק שָׂכִיר עָנִי וְאֶבְיוֹן`, דברים כד:יד); Šuruppag warns that he will eat your bread and leave for the palace. |
| 125 | *ama₅* | בית־הנשים | `אֶל שׁוּשַׁן הַבִּירָה אֶל בֵּית הַנָּשִׁים` (אסתר ב:ג) | [equivalent] | the women's quarters. |
| 126 | *kaš naĝ-a-zu-ne di na-an-ne-e* | בשתותך שֵׁכָר – דין אל תאמר | `וִישַׁנֶּה דִּין כָּל-בְּנֵי-עֹנִי` (משלי לא:ה) | [equivalent] | **one of the strongest**: beer and judgment, with two cognates through Akkadian (`שֵׁכָר` / *šikaru*, `דִּין` / *dīnu*); Proverbs' `וּלְרוֹזְנִים אֵו (אֵי) שֵׁכָר` (משלי לא:ד) addresses kings, Šuruppag everyone. |
| 126 | *kaš naĝ* | בשתותך שֵׁכָר | `יַיִן וְשֵׁכָר אַל תֵּשְׁתְּ` (ויקרא י:ט) | [equivalent] | the priests; `אַל` + drinking. |
| 128 | *an su₃-ud-dam ki kal-kal-la-am₃* | השמים – רחוקים הם; הארץ – יקרה־יקרה היא | `הַשָּׁמַיִם שָׁמַיִם לַיהוָה;    וְהָאָרֶץ נָתַן לִבְנֵי-אָדָם` (תהלים קטו:טז) | [equivalent] | heaven far, earth man's; also `כִּי הָאֱלֹהִים בַּשָּׁמַיִם וְאַתָּה עַל הָאָרֶץ` (קהלת ה:א). [divergence]: no god owns heaven here, and heaven is the source of increase (129). |
| 129 | *im-da-lu-lu-un* | תַּרְבֶּה | `פְּרוּ וּרְבוּ` (בראשית א:כב) | [equivalent] | *lu* = `רבה` (creation corpus rule: always tagged); here of goods, "with heaven". |
| 130 | *zi … pa-an-pa* | חיים … נושמות | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | [divergence] | the lands breathe "with" heaven; no god breathes into them. |
| 131 | *ud buru₁₄-še₃* | ביום הקציר | `אָגְרָה בַקָּצִיר מַאֲכָלָהּ` (משלי ו:ח) | [equivalent] | harvest as the time of gathering (also `אֹגֵר בַּקַּיִץ בֵּן מַשְׂכִּיל`, משלי י:ה). |
| 132 | *geme₂-gin₇ de₅-ga-ab* | כאָמָה לקוט | `וַתְּלַקֵּט בַּשָּׂדֶה אַחֲרֵי הַקֹּצְרִים` (רות ב:ג) | [equivalent] | the gleaner; the humble work of harvest. |
| 132 | *geme₂ … egir₂* | כאָמָה … כנסיכה | `וְשִׁפְחָה כִּי תִירַשׁ גְּבִרְתָּהּ` (משלי ל:כג) | [divergence] | the slave woman / mistress pair: a catastrophe in Proverbs, a rule of life here. |
| 135 | *igi-tum₃ la₂* | החמדה | `נִבְהָל לַהוֹן אִישׁ רַע עָיִן` (משלי כח:כב) | [equivalent] | greed as an act of the eye; = Akk. *nīš īni* (SH 88); `לֹא תַחְמֹד` (שמות כ:יג) in the apparatus only (open decision 1). |
| 136 | *lu₂-lul-e tug₂ ši-bir₇-bir₇-e* | השקרן בגד הֲרֵי קורע | `וְקִרְעוּ לְבַבְכֶם וְאַל בִּגְדֵיכֶם` (יואל ב:יג) | [divergence] | the torn garment as an empty display. |
| 138 | *inim dirig* | דבר יתר | `לֹא-נָאוָה לְנָבָל שְׂפַת-יֶתֶר` (משלי יז:ז) | [equivalent] | the same concept ("excess speech"); *dirig* = Akk. *(w)atāru* ~ `יתר` (a cognate through the Akkadian, our proposal). |
| 138 | *u₃-bu-bu-ul* | אבעבועה | `לִשְׁחִין פֹּרֵחַ אֲבַעְבֻּעֹת` (שמות ט:ט) | [cognate?] | via Akk. *bubuʾtu*? Our proposal, unverified (open decision 10). |
| 141 | *a-ra-zu a sed-da* | התחנון – מים קרים | `מַיִם קָרִים עַל-נֶפֶשׁ עֲיֵפָה` (משלי כה:כה) | [equivalent] | cold water as the image of what restores; ETCSL "prayer" for *a-ra-zu* (supplication). |
| 141 | *šag₄-ge im-sed-e* | את הלב מצנן | `מַעֲנֶה-רַּךְ יָשִׁיב חֵמָה` (משלי טו:א) | [equivalent] | "cooling the heart" = appeasing anger. |
| 143–280 | (*ki-sur-ra* absent) | — | `אָרוּר מַסִּיג גְּבוּל רֵעֵהוּ` (דברים כז:יז) | [absent] | the whole composite has no *ki-sur-ra* "boundary": no "do not move the boundary" (also Deut 19:14, Prov 22:28; see 16). |
| 154 | *kar-ke₄ … ka u₄-sar-ra-kam* | [זונה] … פה מושחז היא | `וְאַחֲרִיתָהּ מָרָה כַלַּעֲנָה;    חַדָּה כְּחֶרֶב פִּיּוֹת` (משלי ה:ד) | [equivalent] | the harlot / strange woman as a sharp mouth; the noun restored ([kar]). |
| 155 | *ama-a-tud* | יליד־בית | `יְלִיד בָּיִת וּמִקְנַת כֶּסֶף` (בראשית יז:יב) | [divergence] | the same two classes of slaves (house-born / bought); the Torah treats them alike, Šuruppag warns against the house-born (`וִילִיד בֵּיתוֹ`, ויקרא כב:יא). |
| 161 | *a ḫu-mu-ra-an-de₂-e igi-zu-še₃ ḫe₂-du* | מים ישפוך לך; לפניך ילך | `אֲשֶׁר יָצַק מַיִם עַל יְדֵי אֵלִיָּהוּ` (מלכים ב ג:יא) | [equivalent] | pouring water as the servant's office. |
| 166 | *dili-zu-ne kaskal na-an-ni-du-un* | לבדך – בדרך אל תלך | `וְאִילוֹ הָאֶחָד שֶׁיִּפּוֹל וְאֵין שֵׁנִי לַהֲקִימוֹ` (קהלת ד:י) | [equivalent] | the danger of being alone (also `טוֹבִים הַשְּׁנַיִם מִן הָאֶחָד`, קהלת ד:ט). |
| 170–171 | *nam-tar peš₁₀ dur₅-ra-am₃ … ĝiri₃-ni im-ma-da-an-ze₂-er* | הגורל – גדה רטובה הוא; את רגל האדם הוא ממעיד | `לְעֵת תָּמוּט רַגְלָם` (דברים לב:לה) | [divergence] | the slipping foot; in the Bible God makes it slip or holds it (`וַאֲנִי כִּמְעַט נָטָויּ (נָטָיוּ) רַגְלָי`, תהלים עג:ב), here fate is slippery ground. |
| 172 | *šeš-gal a-a na-nam nin₉ gal ama na-nam* | האח הגדול – אב הוא; האחות הגדולה – אם היא | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא) | [divergence] | the parents' status extended to the elder siblings; the verbs are "listen" and "bend the neck", not "honour" (no *kabātu*); ETCSL's "like" is not in the text. |
| 172 | *šeš-gal* | האח הגדול | `הֱוֵה גְבִיר לְאַחֶיךָ` (בראשית כז:כט) | [divergence] | the elder rules by birth here; in Genesis by a blessing given to the younger. |
| 173–174 | *ĝizzal ḫe₂-em-ši-ak … gu₂ ḫe₂-em-ši-ĝal₂* | הטה אליו אוזן! … צוואר ייכנע לה! | `שְׁמַע לְאָבִיךָ זֶה יְלָדֶךָ;    וְאַל-תָּבוּז כִּי-זָקְנָה אִמֶּךָ` (משלי כג:כב) | [equivalent] | the father's own formulas (10, 13) applied to the elder brother and sister. |
| 176 | *ka-zu-ta niĝ₂-nam nu-lu-lu-un* | בפיך – דבר לא תרבה | `בְּכָל-עֶצֶב יִהְיֶה מוֹתָר;    וּדְבַר-שְׂפָתַיִם אַךְ-לְמַחְסוֹר` (משלי יד:כג) | [equivalent] | talk does not enrich; *lu* = `רבה` (tagged). |
| 177 | *ĝa₂-la dag-ge e₂ dur₂-bi-še₃ mu-un-ĝen* | החדל מן העבודה – הבית אל תחתיתו הלך | `וּבְשִׁפְלוּת יָדַיִם יִדְלֹף הַבָּיִת` (קהלת י:יח) | [equivalent] | idleness ruins the house; also `גַּם מִתְרַפֶּה בִמְלַאכְתּוֹ` (משלי יח:ט). |
| 184 | *lu₂ niĝ₂-tuku lu₂ niĝ₂ nu-tuku gig še₃-em-ĝar* | לעשיר – מי שאין לו דבר הֲרֵי שם חולי | `עָשִׁיר וָרָשׁ נִפְגָּשׁוּ;    עֹשֵׂה כֻלָּם יְהוָה` (משלי כב:ב) | [divergence] | rich and poor as creatures of one God in Proverbs; here the poor man harms the rich. |
| 185 | *lu₂ dam tuku a₂ šu im-du₇-du₇* | מי שיש לו אשה – זרוע ויד משוכללות | `אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | [equivalent] | the wife completes the man ("arm and hand perfected"). |
| 186 | *dam nu-un-tuku … mu-un-nu₂* | מי שאין לו אשה – ב*מכלאה?* שוכב | `גַּם אִם יִשְׁכְּבוּ שְׁנַיִם וְחַם לָהֶם; וּלְאֶחָד אֵיךְ יֵחָם` (קהלת ד:יא) | [equivalent] | the man who lies down alone; cf. `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח) – Šuruppag has no "not good" (no *dug₃*). |
| 187–188 | *e₂ gul-gul-lu-de₃ … lu₂ zi-zi-i-de₃* | הבא להרוס בית … הבא להרים אדם | `מַשְׁפִּיל אַף מְרוֹמֵם` (שמואל א ב:ז) | [divergence] | destroying and raising up: God's acts in Hannah's song, a man's will here; also `עֵת לִפְרוֹץ        וְעֵת לִבְנוֹת` (קהלת ג:ג). |
| 193 | *sag₉ … ḫul* | נאה … רע | `וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | [divergence] | **ETCSL's false echo**, again (cf. 47): "good and evil" for *sag₉* / *ḫul*, not *dug₃*; the qualities of a slave girl, not knowledge (also בראשית ב:ט). |
| 195 | *ḫul šag₄ an-ga-am₃* | הרע – גם הלב הוא | `כִּי יֵצֶר לֵב הָאָדָם רַע מִנְּעֻרָיו` (בראשית ח:כא) | [divergence] | the bad in the heart: of all mankind (after the flood) in Genesis, of a foreign slave girl here. |
| 198 | *šag₄-ge nu-da₁₃-da₁₃* | הלב לא יעזוב | `אֵלִי אֵלִי לָמָה עֲזַבְתָּנִי` (תהלים כב:ב) | [equivalent] | *taka₄* = Akk. *ezēbu* = `עזב` (licensed): the heart does not "abandon" the fine. |
| 201 | *an-edin-na {kuš}ummud ḫe₂-en-da-dar* | בערבה העליונה – נאד־המים עמו ייסדק! | `וַיִּקַּח לֶחֶם וְחֵמַת מַיִם` (בראשית כא:יד) | [equivalent] | the waterskin in the desert, the traveller's life (Hagar's runs out). |
| 202 | *šag₄ ki aĝ₂ niĝ₂ e₂ du₃-du₃-u₃-dam* | לב אוהב – דבר בונה בית הוא | `חַכְמוֹת נָשִׁים בָּנְתָה בֵיתָהּ` (משלי יד:א) | [equivalent] | "building the house"; [divergence] `אִם-יְהוָה לֹא-יִבְנֶה בַיִת` (תהלים קכז:א). |
| 203 | *šag₄ ḫul gig niĝ₂ e₂ gul-gul-lu-dam* | לב שונא – דבר הורס בית הוא | `שִׂנְאָה תְּעֹרֵר מְדָנִים;    וְעַל כָּל-פְּשָׁעִים תְּכַסֶּה אַהֲבָה` (משלי י:יב) | [equivalent] | the love / hate pair (202–203). |
| 208 | *ezem-ma-ka dam na-an-tuku-tuku-e* | בחג – אשה אל תשיג (לך) | `וַחֲטַפְתֶּם לָכֶם אִישׁ אִשְׁתּוֹ מִבְּנוֹת שִׁילוֹ` (שופטים כא:כא) | [divergence] | a wife taken at a festival: the elders' advice in Judges, the father's warning here; also 248 (*kar* "abduct" = `חטף`). |
| 209 | *šag₄-ga ḫuĝ-ĝa₂-am₃ bar-ra ḫuĝ-ĝa₂-am₃* | התוך – שָׂכוּר הוא; החוץ – שָׂכוּר הוא | `שֶׁקֶר הַחֵן וְהֶבֶל הַיֹּפִי` (משלי לא:ל) | [equivalent] | finery as a disguise. |
| 210 | *za-gin₃* | ספיר | `כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) | [equivalent] | lapis lazuli = biblical `סַפִּיר` (the 2026-10-21 harmonization). |
| 211 | *tug₂ … gada* | הבגד … הפשתן | `וְהַגִּלְיֹנִים וְהַסְּדִינִים וְהַצְּנִיפוֹת וְהָרְדִידִים` (ישעיהו ג:כג) | [equivalent] | the list of borrowed / proud finery. |
| 214 | *gud lul-la* | שור שקרן | `וְאִם שׁוֹר נַגָּח הוּא מִתְּמֹל שִׁלְשֹׁם וְהוּעַד בִּבְעָלָיו` (שמות כא:כט) | [equivalent] | the ox whose nature is hidden from the buyer. |
| 215 | *munus zid e₂ zid-še₃ lu₂ ši-in-[ĝar]* | אשת־אמת – לבית־אמת אדם הֲרֵי [ישים] | `וּמֵיְהוָה אִשָּׁה מַשְׂכָּלֶת` (משלי יט:יד) | [divergence] | the good wife from God in Proverbs, placed by "a man" (the families) here; also `אֵשֶׁת-חַיִל מִי יִמְצָא` (משלי לא:י); ETCSL's "good household" is *zid*, not *dug₃*. |
| 221 | *kurun naĝ-naĝ-e buru₁₄ im-su-su-su* | שותה הסובא – את הקציר משקיע | `כִּי-סֹבֵא וְזוֹלֵל יִוָּרֵשׁ` (משלי כג:כא) | [equivalent] | the drinker impoverished (also `אַל-תְּהִי בְסֹבְאֵי-יָיִן`, משלי כג:כ). |
| 222 | *{ĝiš}kun₅* | סולם | `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה` (בראשית כח:יב) | [cognate] | the word only, via Akk. *simmiltu*; no shared image. |
| 224 | *eme₃ sila-a inim i₃-šid-e* | האתון – ברחוב דברים מונה | `וַיִּפְתַּח יְהוָה אֶת פִּי הָאָתוֹן` (במדבר כב:כח) | [divergence] | a "speaking" she-ass: a miracle in Numbers, mockery here. |
| 228 | *e₂-e₂-a i-in-ku₄-ku₄-ku₄* | אל כל בית ובית היא נכנסת | `בְּבֵיתָהּ לֹא-יִשְׁכְּנוּ רַגְלֶיהָ` (משלי ז:יא) | [equivalent] | **the restless woman of the streets**, the same type (`פַּעַם בַּחוּץ פַּעַם בָּרְחֹבוֹת;    וְאֵצֶל כָּל-פִּנָּה תֶאֱרֹב`, משלי ז:יב); 222–232. |
| 230 | *da ur₃-ra … e₃-ab* | על שפת הגג … "צא!" | `טוֹב לָשֶׁבֶת עַל-פִּנַּת-גָּג    מֵאֵשֶׁת מִדְיָנִים וּבֵית חָבֶר` (משלי כא:ט) | [equivalent] | the roof and the quarrelsome woman in one image. |
| 231 | *bad₃-si-bad₃-si-a* | מכל מעקה ומעקה | `וְעָשִׂיתָ מַעֲקֶה לְגַגֶּךָ` (דברים כב:ח) | [equivalent] | the roof parapet. |
| 241 | *šag₄ ḫul₂-la* | לב שמח | `לֵב שָׂמֵחַ יֵיטִב פָּנִים` (משלי טו:יג) | [equivalent] | the end of the line is lost. |
| 242 | *niĝ₂-nam nu-kal zi ku₇-ku₇-da* | שום דבר לא יקר – (מלבד) חיים מתוקים | `וּמָתוֹק הָאוֹר; וְטוֹב לַעֵינַיִם לִרְאוֹת אֶת הַשָּׁמֶשׁ` (קהלת יא:ז) | [equivalent] | the sweetness of life against the worthlessness of things. |
| 244 | *gun₃-gun₃* | מנומר | `עֲקֻדִּים נְקֻדִּים וּבְרֻדִּים` (בראשית לא:י) | [equivalent] | speckled; `בָּרֹד` ~ Akk. *burrumu*? Our proposal (open decision 16). |
| 246 | *kir₁₁-e aš₂ nam-en dumu-munus in-u₃-tud-un* | על הכבשה – קללה אל תאמר; בת ילדת | `כִּי אִם כִּבְשָׂה אַחַת קְטַנָּה … וַתְּהִי לוֹ כְּבַת` (שמואל ב יב:ג) | [equivalent] | ewe-lamb and daughter, in Nathan's parable and in a Sumerian birth omen. |
| 254 | *emeda-ga-la₂ ama₅-a-ke₄ … nam ši-im-mi-ib-tar-re* | המיניקות של בית־הנשים … גורל הֲרֵי גוזרות | `וְאֶת מֵנִקְתָּהּ` (בראשית כד:נט) | [divergence] | the nurse as a fixture of the house (also `אִשָּׁה מֵינֶקֶת מִן הָעִבְרִיֹּת`, שמות ב:ז); here she decrees the child-king's fate. |
| 255 | *ama-zu-ur₂ inim dirig … ḫul ša-ba-ra-gig-ga-am₃* | לאמך דבר יתר אל תאמר – הֲרֵי שנאה היא לך | `עַיִן תִּלְעַג לְאָב    וְתָבֻז לִיקְּהַת-אֵם` (משלי ל:יז) | [equivalent] | contempt for the mother; [divergence] `וּמְקַלֵּל אָבִיו וְאִמּוֹ מוֹת יוּמָת` (שמות כא:יז) – death there, hatred here. |
| 256 | *inim ama-za inim diĝir-za* | דבר אמך, דבר אֵלְךָ | `אִישׁ אִמּוֹ וְאָבִיו תִּירָאוּ וְאֶת שַׁבְּתֹתַי תִּשְׁמֹרוּ:  אֲנִי יְהוָה אֱלֹהֵיכֶם` (ויקרא יט:ג) | [equivalent] | mother first, then the god, in one sentence; also `וְאַל-תִּטֹּשׁ תּוֹרַת אִמֶּךָ` (משלי א:ח), `בְּקוֹל אָבִיו וּבְקוֹל אִמּוֹ` (דברים כא:יח). |
| 257 | *ama {d}utu-am₃ lu₂ mu-un-u₃-tud* | האם – אוּתוּ היא; את האדם ילדה | `כַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ` (שמות כ:יא) | [divergence] | **one of the strongest**: the parents are not only honoured but identified with gods (mother = Utu, father = a god, 258–259); ETCSL's "like Utu" / "like a god" soften it (*-am₃*, not *-gin₇*). Also `שְׁמַע לְאָבִיךָ זֶה יְלָדֶךָ` (משלי כג:כב). |
| 259 | *ab-ba diĝir-am₃ inim-ma-ni zid-da* | הזקן – אל הוא; דברו – אמת | `וּדְבָרֶיךָ יִהְיוּ אֱמֶת` (שמואל ב ז:כח) | [equivalent] | "your words are truth", said of God; here of the father. |
| 260 | *na de₅ ab-ba-še₃ ĝizzal ḫe₂-em-ši-ia-ak* | אל עצת הזקן – הטה אליה אוזן! | `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים` (משלי כב:יז) | [equivalent] | the two formulas of the prologue (10, 13) close the paternal section. |
| 263 | *al-duru₅ šukur₂-ra-am₃ al-ḫad₂ šukur₂-ra-am₃* | רטובה – מָנָה היא; יבשה – מָנָה היא | `הַטְרִיפֵנִי    לֶחֶם חֻקִּי` (משלי ל:ח) | [equivalent] | the fixed ration. |
| 264 | *niĝ₂ u₂-gu de₂-a niĝ₂-me-ĝar-ra* | דבר שאבד – דבר של שתיקה הוא | `עֵת לְבַקֵּשׁ וְעֵת לְאַבֵּד` (קהלת ג:ו) | [equivalent] | accepting loss. |
| 268 | *diĝir kur-ra lu₂ gu₇-gu₇-u₃-me-eš* | אֵלֵי ההר – אוכלי אדם הם | `אֶרֶץ אֹכֶלֶת יוֹשְׁבֶיהָ הִוא` (במדבר יג:לב) | [equivalent] | the foreign land that "eats men" (also `אֹכֶלֶת אָדָם`, יחזקאל לו:יג); here the mountain gods themselves. |
| 271 | *sipad-ra kiĝ₂-kiĝ₂ mu-na-til udu gi₄-gi₄ [mu-na-til]* | לרועה – לבקש נגמר לו; להשיב שה [נגמר לו] | `וְאֶת הַנִּדַּחַת לֹא הֲשֵׁבֹתֶם וְאֶת הָאֹבֶדֶת לֹא בִקַּשְׁתֶּם` (יחזקאל לד:ד) | [equivalent] | **the same pair of shepherd's verbs**, seek and bring back (*kiĝ₂* `בקש`, *gi₄* `השיב`); the second verb restored. |
| 274 | *kadra inim-ma-bi niĝ₂ šag₄ ten-na* | מתנת דבריו – דבר משכך לב הוא | `מַתָּן אָדָם יַרְחִיב לוֹ;    וְלִפְנֵי גְדֹלִים יַנְחֶנּוּ` (משלי יח:טז) | [equivalent] | the gift that soothes and opens the palace (275); also `מַתָּן בַּסֵּתֶר יִכְפֶּה-אָף` (משלי כא:יד), `דָּבָר דָּבֻר עַל-אָפְנָיו` (משלי כה:יא). |
| 280 | *ki-sikil {d}nisaba za₃-mi₂* | לעלמה נִיסָבָּה – תהילה! | `כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ:            הַלְלוּ-יָהּ` (תהלים קנ:ו) | [divergence] | a book closed in praise: of the goddess of writing (the scribe's signature), not of the god of the text. |
