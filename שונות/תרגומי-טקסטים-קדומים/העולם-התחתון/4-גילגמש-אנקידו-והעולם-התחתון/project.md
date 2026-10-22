# Project 4: Bilgameš, Enkidu and the Netherworld (Sumerian)

## Scope
ETCSL 1.8.1.4 complete, all five recensions (guidelines §5.2, "translate the minor recensions too"):
- **Version A** (Nibru, Urim and elsewhere): `1`–`303` with the pluses `152A`, `163A`, `287A`–`287D`, `293A`–`293B`; no lines 280–285 (lost). 305 entries.
- **UET 6 58** (Urim): `U58.1`–`U58.28` – the interrogation in another order, with new fates.
- **UET 6 59** (Urim): `U59.A1`–`U59.A9`, `U59.B1`–`U59.B11`.
- **UET 6 60** (Urim): `U60.1`–`U60.17` – the end: Bilgames returns to Unug, the statues, the libation of clear water for "my father and my mother", the doxology.
- **Me-Turan** (Tell Haddad; Cavigneaux and Al-Rawi 2000): `MT.A1`–`MT.A24`, `MT.B1`–`MT.B71` (with `MT.B11A`; B26–28 lost).
**Total: 463 entries.** Files: `annotated-1.rtl.md` (1–135), `annotated-2.rtl.md` (136–253), `annotated-3.rtl.md` (254–303 + U58, U59, U60), `annotated-4.rtl.md` (Me-Turan).

## Base text
`../../sources/ETCSL/1.8.1.4--Gilgamesh-Enkidu-and-the-Netherworld/` (committed, CC BY-NC-SA) with ORACC epsd2/literary **Q000364** lemma + morph (`../../sources/ORACC/epsd2-literary--Q000364--Gilgamesh-Enkidu-and-the-Netherworld/`, CC0; aligned by position, checked). Rank 3: ETCSL's English (`translation.md`); **Gilgameš XII** (the ancient Akkadian translation of 171–303) as translated in `../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-XII.rtl.md`, with George's English in its apparatus. Not available here: Shaffer 1963, Gadotti 2014 (the current edition), George 1999/2003, Cavigneaux and Al-Rawi 2000.

## Line numbering
ETCSL composite numbers (= Shaffer 1963 for Version A, as most of the literature). George 2003 (and so the "BN" references in annotated-XII) runs about one line ahead in the 170s–290s. **Gilgameš XII ↔ ETCSL**: `XII_CONC` in `../netherworld_tools.py` (the coordinator's alignment by content; `python3 -I ../netherworld_tools.py xii FROM TO`). Check each pairing.

## Comparisons (look for; never force – renderings §11)
Gen 1:1–2, 6:4 ("in those days"; heaven and earth parted – **no `הִבְדִּיל`**); Gen 2–3 (a garden, a tree, a snake at its root, a woman; the tree cut for furniture); Isa 34:14 (Lilith); Jer 8:17, Ps 58:5–6 (the snake no charm can bind); 1 Sam 28:11–15 (the ghost brought up: XII 87 = GEN 242); Deut 18:11, 26:14 (asking the dead; food for the dead); 2 Sam 12:23, Job 7:9 (no return); Gen 37:35, 2 Sam 18:33 (a father's grief); the fates of the dead by the number of sons (Ps 127:3–5; Deut 25:6, "that his name be not blotted out"; Isa 56:5 `יָד וָשֵׁם`); the unburied (Jer 22:19, 2 Kgs 9:10; Isa 14:19–20); the stillborn (Job 3:16, Eccl 6:3–5); the burnt (Lev 20:14?); the libation to the dead.
**The ancient mind:** the cosmogony in a subordinate clause; a goddess's furniture and a hero's toy; the game as oppression (the young men of Unug); a ball falling through the floor of the world; the rules of the netherworld (do not draw attention: no clean clothes, no oil, no noise, no kiss and no blow); the mother of Ninazu, naked and asleep; the ghost who "is seized by the earth"; the father of seven sons on a throne; the man with no heir; the unburied ghost who roams; the one burnt whose ghost "went up to heaven in smoke"; the son who honours his parents' ghosts with clean water (U60).

## Open decisions
(numbered; the translators add)

1. **(part 1) *kalam* = `הַמּוֹלֶדֶת`** (6–7; Emesal *ka-na-aĝ₂* 53 `מולדתי`, 97 `המולדת`), a deviation from every earlier corpus (*kalam* = `הארץ`): in this poem `הָאָרֶץ` is *kur*, the netherworld (renderings §2), and the two meet within seven lines (6–7 vs 13–16). `מולדת` keeps the Sumerian contrast *kalam* "the homeland" / *kur* "the foreign land, the netherworld" (Jacobsen's "homeland"). Alternative: `הארץ` as the precedent, with a footnote. *kalam* occurs only at 6–7 (and the Emesal 53, 97) in GEN.
2. **(part 1) *du₃* of a tree = `נָטַע`** (28, 36–37 via *du*, and the copies), of a house = `בָּנָה` (44, 131): the temple corpus's precedent (Gudea A.xxii.18 *{ĝiš}asal₂ … mu-du₃* `נטע`). The creation corpus forbade `נָטַע` for *kiri₆ gub* / *du₃* (its renderings §8, Gen 2:8); here the Sumerian does say "plant" (a tree, by the woman, with her foot), so the hidden echo would be worse than the overt one; the [equivalent] Gen 2:8 / Ps 104:16 is in the apparatus. Coordinator: confirm or impose the literal `בָּנָה`.
3. **(part 1) *ra* = `מָחַץ` everywhere in project 4**, also in the idiom *saĝ ĝiš ra* (26 `ראש בעץ מוחצים`; for 140 `ראש בעץ מחץ`), following Gilg. XII 18, 24, 26 (*maḫāṣu*, = GEN 189, 195, 197) and renderings §2; a deviation from Šuruppag 135 `ראש בעץ מכה` (wisdom corpus). *a … ra* "strike with water" = be swept away (31 `מים מחצוהו`, literal, note).
4. **(part 1) *zal*: two senses** – of time `עָבַר` (40, 53, 83, 127; *ba-e-zal-la re*), of daylight `נגה` (47–48, 91–92 *ud zal* `נוגה` / `בנגוה היום`, the Gudea and Enmerkar precedents). At 53 (= 97) the ORACC parse (*ud* … gen. … *zal* … *re*) makes "the days of my land's abundance" the subject: `בימי השפע של מולדתי, ההם אשר עברו,` – against ETCSL's "when abundance overflowed in the Land".
5. **(part 1) The person in Inana's speech** follows the Sumerian possessives and copulas: 77–80 and 121 first person (*šu-ĝa₂* "my hand", *-ĝen* "I am"), 81–82 / 125–126 `אמרה` (*bi₂-in-dug₄*), 123–124 third person (*šu-na*, *{d}ga-ša-an-na-ke₄*). ORACC parses *mu-un-dab₅* (77) as 3sg; ETCSL has "I". The differences between the copies are listed per line.
6. **(part 1) *gi-rin* = `פרחים`** (`גן־הפרחים`, `כסא־פרחים`, `מיטת־פרחים`), as Enmerkar 561 (*ĝiš-nu₂ gi-rin-na* `מיטת־הפרחים`; ORACC girim "flower"); renderings §11.4 left `נָאֶה`? / `רַעֲנָן`? open. `רַעֲנָן` would import Song 1:16 (`עַרְשֵׂנוּ רַעֲנָנָה`), which stays in the apparatus of 39.
7. **(part 1) *ur₂* = `שורש`** for the root of the tree (30, 42), the keel (21 `שורש הספינה`) and the horizon (*an-ur₂* 47 `שורש השמים`, as Agade 200; EWO has `יסוד השמים`); Inana's Descent has *ur₂* = `חֵיק` (a lap; another sense).
8. **(part 1) *amar* = `גּוֹזָל`** (43, 130; renderings §11.4; Bird and Fish 104), although the legends corpus (Etana) reserves `גּוֹזָל` for Deut 32:11 and renders Akk. *watmu* `אֶפְרוֹחַ`. No conflict inside this corpus; noted for the lead.
9. **(part 1) Uncertain words, marked `*…*`**: *ninda šu₂* (6, ORACC *šuš* "cover"; ETCSL "tasted"), *niĝ₂-tab* (7 `מוקד`), *ki an-ta sur* (9 `נִתְחֲמָה`), *na₄ gi gu₄-ud* (20 `אבני קנה מזנק`), *mi-šu₂-šu₂* (22 `מכסה ומכסה`), *zu₂ li₉-li₉* (45 `מבריקת השיניים`), ĜIŠ TUG₂ (70, 114 `*עץ*?`).

## Progress
(per translator: lines, passes)

- **Part 1 (`annotated-1.rtl.md`, lines 1–135, 135 entries), 2026-10-22**: drafted unvocalized; transliterations filled by script from ETCSL; three review passes – (a) fidelity against the transliteration and ORACC morph (every negation, copula and person checked; ETCSL's "for the first time", "fame", "storm", "hailstones", "like", "rose", "trembling", "But" not in the text); (b) consistency – the two repetitions compared by script with the first copy (11–26 = 54–69 = 98–113, 27–46 = 70–89 = 114–133, 47–51 = 91–95, 52–53 = 96–97, 90 = 135): every difference is a Sumerian difference (*lugal* / *u₃-mu-un* `המלך` / `האדון`; the person of 77–80, 121, 123–124; *kug* 78; *amar-bi* 130; *e₂ us₂* 87; *mušen* 92; *ka-na-aĝ₂-ĝa₂* 53 / *ka-na-aĝ₂* 97; ĜIŠ TUG₂ 70, 114; the negation 90 / 135); (c) Hebrew read aloud. `netherworld_tools.py verify GEN`: no problems (the other files are notes); `check_bible_quotes.py`: 0 problems.

## Key findings (part 1)
- **Bible.** (1) *a … dug₄ / de₂ ĝiri₃-ta* "she watered it with her foot" (37, 80, 124) = `וְהִשְׁקִיתָ בְרַגְלְךָ כְּגַן הַיָּרָק` (דברים יא:י): the same idiom, the same place (a garden), the irrigation of a river land. (2) The cosmogony in temporal clauses (*-a-ba* `כאשר`), as Gen 2:4b opens Eden with `בְּיוֹם עֲשׂוֹת` (בראשית ב:ד); heaven and earth "moved apart" (*bad*, passive, no agent) – no firmament, no `הִבְדִּיל` [divergence Gen 1:7]. (3) *mu nam-lu₂-ulu₃ ĝar* "set the name of mankind" (10) ↔ `וַיִּקְרָא אֶת שְׁמָם אָדָם בְּיוֹם הִבָּרְאָם` (בראשית ה:ב); ETCSL's "fame" pointed to Gen 11:4 instead. (4) The world divided (11–13) ↔ Ps 115:16–17 (heaven to God, earth to humankind, the dead apart) [divergence]. (5) The garden, the single tree on the Euphrates (Gen 2:14), the snake at its root (Jer 8:17, Ps 58:5 – "no charm"; Gen 3:1 [divergence]), the bird in its branches and the creatures below (Ezek 31:6 – the cosmic tree that is felled and goes down to Sheol; Dan 4:9), the phantom maiden (`לִּילִית`, ישעיהו לד:יד). (6) *na₄ šu* "hand-stone" (19) = `אֶבֶן יָד` (במדבר לה:יז); Utu leaving his chamber at dawn (49) = `כְּחָתָן יֹצֵא מֵחֻפָּתוֹ` (תהלים יט:ו); *ni₂ te inim* "fearing the word" (32) ↔ `הַיָּרֵא אֶת דְּבַר יְהוָה` (שמות ט:כ).
- **The ancient mind.** The creation is a background, not a subject: told in "when" clauses, it ends unresolved in Enki's storm. The order of the world is a plant that "appears" and is "cared for" (4–5), realised in bread and ovens (6–7). The netherworld is given to Ereškigal as a gift (*saĝ-rig₇* = *širiktu*, also a dowry). The tree is a body (it drinks, has skin and hips) and a world in small (snake below, bird above, demon in the middle). The goddess of war plants with her foot like a gardener, wants a throne and a bed from her tree, and weeps when wild things take it; the sun-god refuses, the human hero stands by her. The repetitions (Inana tells the whole prologue twice, word for word) are the poem's structure; her own retelling shortens the cosmogony ("when fate was decreed, in the days of my land's abundance") and reveals that "the woman" is herself.

## Proposals for the corpus renderings
(the translators add; the coordinator merges into `../renderings.md`)

**From part 1 (lines 1–135; binding for the later translators of project 4 – the Hebrew strings as drafted, niqqud as in the file).**

*The prologue (1–26; copied at 54–69, 98–113)*
| Sumerian | Hebrew | Lines / precedent |
|---|---|---|
| *ud re-a ud su₃-ra₂ re-a* / *ĝi₆ re-a ĝi₆ ba₉-ra₂ re-a* / *mu re-a mu su₃-ra₂ re-a* | `בימים ההם, בימים הרחוקים ההם,` / `בלילות ההם, בלילות המרוחקים ההם,` / `בשנים ההן, בשנים הרחוקות ההן,` | 1–3; copied from Šuruppag 1–3 (wisdom corpus) |
| *ud ul* | `בימים רחוקים` (renderings §11.4 had `יְמֵי קֶדֶם?`: changed – Bird and Fish 1 and the flood corpus have *ul* = `רחוק`) | 4–5 |
| *-a-ba* (temporal clause) | `כאשר …` | 4–16 |
| *niĝ₂-du₇ pa e₃*; *mi₂ zid dug₄* | `הדבר הראוי הופיע`; `טֻפַּח באמת` | 4–5 (Gudea, Hoe 1; EWO 77) |
| *eš₃*; *kalam*; *ninda*; *{im}šu-rin-na*; *niĝ₂-tab* | `מקדש`; `הַמּוֹלֶדֶת` (open decision 1); `לחם`; `תנור`; `*מוקד*` | 6–7 |
| *an ki-ta ba-da-ba₉-ra₂*; *ki an-ta ba-da-sur* | `שמים מארץ הוּפְרְדוּ`; `ארץ משמים *נִתְחֲמָה*` | 8–9 |
| *mu nam-lu₂-u₁₈-lu ba-an-ĝar* | `את שם האנושות שָׂם` | 10 |
| *an-ne₂ an ba-an-de₆ / -ir*; *{d}en-lil₂ / {d}mu-ul-lil₂ ki …* | `אַן שמים נשא`; `אֶנְלִיל ארץ נשא` (*de₆* = Emesal *ir* = `נשא`, Agade 70–76) | 11–12, 54–55 |
| *{d}ereš-ki-gal-la-ra kur-ra saĝ rig₇-(bi-)še₃ im-ma-ab-rig₇* | `לְאֶרֶשְׁכִּיגַל את הארץ למתנה העניקו` | 13, 56, 100 |
| *ba-u₅-a-ba*; *a-a* | `כאשר הפליג`; `האב` | 14–16 |
| *lugal-ra* / Emesal *u₃-mu-un-ra*; *tur-tur … gal-gal … ba-an-da-ri* | `על המלך` / `על האדון`; `קטנות הוטלו` / `גדולות הוטלו` | 17–18, 60–61 |
| *na₄ šu*; *na₄ gi gu₄-ud* | `אבני־יד`; `אבני *קנה מזנק*` | 19–20 |
| *ur₂*; *{ĝiš}ma₂ tur*; *ma₂-saĝ*; *ma₂-eĝer* | `שורש` (also keel and *an-ur₂*); `הספינה הקטנה`; `ראש הספינה`; `ירכתי הספינה` | 21–25 |
| *niĝ₂-bun₂-na* / Emesal *še-en-bun₂-na*; *du₇*; *šu₂-šu₂* | `צב`; `נגח`; `*מכסה ומכסה*` | 22 |
| *ur-bar-ra-gin₇ teš₂ … gu₇*; *ur-maḫ-gin₇ saĝ ĝiš … ra* | `כזאב יחדיו אוכלים`; `כאריה – ראש בעץ מוחצים` (*ra* = `מחץ`, open decision 3; for 140: `ראש בעץ מחץ`) | 24–26 |

*The tree (27–46; copied at 70–89, 114–133) – the strings for 140–150*
| Sumerian | Hebrew | Lines / precedent |
|---|---|---|
| *ud-bi-a* | `בעת ההיא` | 27 (Šuruppag 4 *ud-ba*) |
| *ĝiš* / Emesal *mu*; *{ĝiš}ḫa-lu-ub₂*; *1-am₃* / Emesal *di-ta-am₃* | `עץ`; `עֵץ־חַלּוּבּ` (definite `עֵץ־הַחַלּוּבּ`); `אחד` | 27, 70 |
| *gu₂ {id₂}buranun kug*; *du₃* (tree) / *du₃* (house) | `על גדת הפְּרָת הטהור`; `נטע` / `בנה` (open decision 2) | 28, 36, 44 |
| *a na₈* | `מים שותה` | 29 |
| *a₂ u₁₈-lu*; *ur₂-ba … bur₁₂*; *pa-ba … suḫ* | `זרוע רוח הדרום`; `את שורשיו עקר(ה)`; `את ענפיו נסח(ה)` (*suḫ* = Akk. *nasāḫu* = `נסח`) – for 144 `את שורשיו עקר, את ענפיו נסח` | 30 |
| *a … ra* | `מים מחצוהו` | 31 |
| *munus* / *nu-nus*; *inim* / *e-ne-eĝ₃ X-ta ni₂ te-a du* | `אישה`; `יְרֵאָה מדבר X – הולכת` (*ni₂ te* = `ירא`) | 32–33 |
| *šu-na / šu-ĝa₂ … dab₅*; *kur₉* (caus.); *ku₄* (caus.) | `בידה / בידי אחז(ה/תי)`; `הכניס`; `הביא` | 34–35 |
| *{ĝiš}kiri₆ gi-rin*; *{ĝiš}gu-za gi-rin*; *ĝiš-nu₂ gi-rin* | `גן־הפרחים`; `כסא־פרחים`; `מיטת־פרחים` (open decision 6) | 35, 38–39 |
| *šu … li-bi₂-in-du, ĝiri₃ / me-ri-ta bi₂-in-du*; *a … dug₄ / de₂* | `בידה לא נטעה, ברגלה נטעה`; `השקה` | 36–37 |
| *me-na-am₃ … tuš-de₃-en / nu₂-de₃-en bi₂-in-dug₄* | `"מתי על … אשב?" – אמרה;` / `"מתי על … אשכב?" – אמרה.` (inside a speech `'…'`) | 38–39 |
| *mu 5-am₃ mu 10-am₃ ba-e-zal-la re* | `חמש שנים, עשר שנים עברו;` | 40 |
| *ĝiš ba-gur₄ kuš-bi nu-mu-un-da-dar* | `העץ התעבה – עורו לא פֻּצַּל.` (*kuš* = `עור`, *dar* = `פצל`) | 41 |
| *ur₂-bi-a muš tu₆ nu-zu-e gud₃ … us₂* | `בשורשיו – נחש אשר קסם אינו יודע – קן הדביק;` – for 140 `בשורשיו – נחש אשר קסם אינו יודע – …` | 42 |
| *pa-bi-a mušen anzud{mušen}-de₃ amar(-bi) … ĝar* | `בענפיו – הציפור אַנְזוּד – (את) גוזל(ו) שָׂמָה;` | 43, 130 (141 *amar-bi* `את גוזלו`) |
| *šab-ba-bi-a ki-sikil lil₂-la₂-ke₄ e₂ … du₃ / us₂* | `במותניו – עַלְמַת־הַמַּשַּׁב – בית בנתה;` / `בית הדביקה;` (*šab* = `מותניים`) | 44, 87 |
| *ki-sikil zu₂ li₉-li₉ šag₄ ḫul₂-ḫul₂* | `העלמה *מבריקת השיניים*, שמחת הלב.` | 45 |
| *kug {d}inana(-ke₄) er₂ e-ne ba-še₈-še₈* | `אִינַנָּה הטהורה – היא בוכה.` (*kug {d}inana* = `אִינַנָּה הטהורה`; for 147 `לאחותו, אִינַנָּה הטהורה,`) | 46 |

*The dawn and the speech formulas (47–53, 90, 134–135)*
| Sumerian | Hebrew | Lines / precedent |
|---|---|---|
| *ud zal-le-da an-ur₂ zalag-ge-da* | `כאשר היום נוגה, כאשר שורש השמים מאיר,` | 47, 91 |
| *(mušen) buru₅ ud zal-le šeg₁₀ gi₄-gi₄-da* | `כאשר (הציפורים,) הדרורים – בנגוה היום – צפצוף משיבים ומשיבים,` | 48, 92 (EWO 99) |
| *{d}utu agrun-ta e₃-a-ni* | `כאשר יצא אוּתוּ מן החדר –` (for U60.7) | 49, 93 (Enmerkar 132) |
| *nin₉-a-ni kug {d}inana-ke₄ / ur-saĝ (šul) Y-ra gu₃ mu-na-de₂-e* | `אחותו, אִינַנָּה הטהורה,` / `פונה אל הגיבור, העלם אוּתוּ:` – `פונה אל הגיבור גִּלְגָּמֶשׁ:` (§4 `X פּוֹנֶה אֶל Y:`; for 238 `פונה אל הגיבור, העלם אוּתוּ, …`) | 50–51, 94–95 |
| *ur-saĝ*; *šul*; *šeš-ĝu₁₀*; *šeš-a-ni*; *nin₉-a-ni* | `הגיבור`; `העלם`; `אחי`; `אחיה` (of Inana) / `אחיו`; `אחותו` | |
| *ud re-a na-aĝ₂ ba-tar-ra-a-ba* | `בימים ההם, כאשר גורל נגזר,` (Enmerkar 6) | 52, 96 |
| *ud ḫe₂-ma-al-la ka-na-aĝ₂(-ĝa₂) ba-e-zal-la re* | `בימי השפע של מולדתי / המולדת, ההם אשר עברו,` (open decision 4) | 53, 97 |
| *nu-nus-ĝen*; *{d}ga-ša-an-na-ĝen* | `אני, האישה`; `אני, אִינַנָּה` | 79–80 |
| *inim-bi nu-mu-de₃-gub* / *inim-bi ba-(e-)de₃-gub* | `בדבר הזה לא עמד לצדה.` / `בדבר הזה עמד לצדה.` – **the renderings §11.5 row (`לִדְבָרָהּ לֹא עָמַד`) should change to this**: it is Inana's Descent 195, 209, 221A, and GEN 237 = Inana 221A letter for letter (`האב אנקי בדבר הזה עמד לצדה`, but `לצדו` for Gilgameš at 229, 237) | 90, 135 |
| *nin₉-a-ni inim in-na-an-dug₄-ga* | `הדבר אשר אחותו אמרה לו –` | 134 |

**Rows of renderings §11.4–§11.5 checked against the drafted lines:** *ud re-a* ✓; *ud ul* changed (above); *an ki-ta ba₉* `הופרדו` ✓ (`הִפְרִיד`); *ki an-ta sur* = `נִתְחֲמָה`; *mu nam-lu₂-ulu₃ ĝar* ✓; *šu-rin-na* `תנור` ✓, *ninda* `לחם` ✓; *{ĝiš}ma₂*, *ur-bar-ra*, *ur-maḫ* ✓; *kiri₆* `גן` ✓, *gi-rin* = `פרחים` (the row's `נָאֶה? רַעֲנָן?` resolved); *muš tu₆ nu-zu* ✓; *mušen* / *amar* ✓; *er₂ še₈* ✓; the prologue/tree copies ✓; *gu₃ de₂* ✓; *inim-bi (nu-)gub* changed (above). Names ✓ (`עֵץ־הַחַלּוּבּ`, `אַנְזוּד`, `עַלְמַת־הַמַּשַּׁב` ★, `פְּרָת`, `אוּרוּךְ`, `אַן` ★, `אוּתוּ` ★, `אֶרֶשְׁכִּיגַל` ★, `אִינַנָּה` ★).

**For `verify` (proposed FORMULAS for GEN):** *inim-bi nu-mu-(de₃|na)-gub* → `בדבר הזה לא עמד לצד(ה|ו)`; *inim-bi ba-(e-)?de₃-gub* → `בדבר הזה עמד לצד(ה|ו)`; *{d}utu agrun(-na)?-ta e₃* → `אוּתוּ מן החדר`; *saĝ ĝiš .*ra* → `ראש בעץ (מחץ|מוחצ)`; *{ĝiš}kiri₆ gi-rin* → `גן־הפרחים`; *ki-sikil zu₂ li₉-li₉* → `העלמה \*?מברי`. Gate proposal: `נטע` only with *du₃* / *du* of a tree (if decision 2 stands).

## Parallels index
Generated by `../build_parallels_index.py` from the annotated **הקבלה** bullets (`### Parallels index (GEN)`). It must stay the last section of this file (the script rewrites everything after its heading).
