# Project 6: The Debate between Hoe and Plough (ETCSL 5.3.1) → Hebrew

Round 3, run 1 (2026-10-21), creation corpus (`../corpus.md`). Siglum in the corpus parallels index: **H&P**.

## Scope
An OB Sumerian school debate (*a-da-min₃*): the humble Hoe, "child of the poor", and the Plough, the king's implement at the festival of the fields, insult each other and boast of their works; Enlil decides for the Hoe; praise to Nisaba. The whole composite: 201 entries (1–196, with 28A, 37A, 37B, 61A, 178A).

## Base text and sources
- **Base text (rank 1):** ETCSL c.5.3.1, `../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/transliteration.md` (from the TEI `c.5.3.1.xml`; CC BY-NC-SA). Copy each transliteration line exactly.
- **Lemmas and morph (rank 2):** ETCSL's TEI lemmas (`python3 -I ../../tools/sumerian_workbench.py lemmas|line ../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/c.5.3.1.xml FROM-TO`); ORACC: none: ORACC Q000760 has no text in the 2022 export; use ETCSL's TEI lemmas and `tools/sumerian_workbench.py line|morph` (parsed instances elsewhere), else "ניתוח שלנו"; ePSD2 (`… gloss`).
- **Rank 3:** ETCSL's English translation (`../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/translation.md`), read only after forming the reading of each line. (Other translations: see "Sources consulted".)

## Line numbering
ETCSL composite labels, used as entry labels (`### <label>`); checked by `python3 -I ../sumerian_tools.py verify 6`.

## The parallels that matter for the commentary (the coordinator's list: "look for", never "translate as")
Gen 2:5, 2:15, 3:23 (the work of the ground: the Hoe as the labourer of every season); Gen 4:2 (farmer and herder); Gen 4:17, 11:3–4 (the Hoe makes bricks, builds houses and a city); Gen 2:8–10 (setting up a garden, watering it, the well and the water-lift ↔ H&P 142–150); **Gen 8:21–22** (H&P 166–175: after the heavens were overturned and Enlil flooded the harvest, "Enlil did not abandon us", then "winter like harvest", "summer and winter" — a post-catastrophe promise of the seasons?); Lev 19:9–10, Deut 24:19–21 (orphan, widow, the poor glean ↔ H&P 45–47, 178A); Deut 22:10 (H&P 88: six oxen and four men); 1 Sam 13:20–21 (sharpening ploughshares; H&P 93–103 the broken tooth and the artisans); Isa 2:4 (implements); Prov 14:4; Prov 20:4 and Ecc 3:1–8 (the Plough's four months of work and eight of idleness, H&P 104–108); the genre on its own terms: school humour, high and low status, the verdict for the humble; Nisaba and the scribe who books the Hoe's work (189–193).

## Sources consulted
- **Rank 1:** ETCSL c.5.3.1 composite (`../../sources/ETCSL/5.3.1--Debate-Hoe-and-Plough/transliteration.md`, from `c.5.3.1.xml`), every line copied by script (`@` filled from the base file, and every existing line compared with it).
- **Rank 2:** ETCSL TEI lemmas (`sumerian_workbench.py line`), with the ORACC morph of the same forms elsewhere in the epsd2-literary corpus where they exist (ORACC Q000760 itself has no text); "ניתוח שלנו" elsewhere. ePSD2 glossary (`… gloss`) for *barag* (two lemmas: "press?" and "spread out"), *pad* "break", *anzagar* "(fortified) tower", *garadin* "stack of sheaves", *gurud* "throw", *addir* "wage", *kinkin* "small millstone", *sumur* "angry". The ETCSL-wide concordance (`… conc`, after restoring the git-ignored ETCSL bulk with `tools/sources_sync.py fetch --only 'ETCSL/_bulk/etcsl-unzipped'`) for *mu-da-ab-sa₂-e*, *im … barag*, *šeg₁₂ … du₃*, *kiši₁₆*, *šu … dag*, *buru₁₄ … su*, *sag₂ … dug₄* (2.5.4.01 274 has the same frame as 166), *a gig dug₄*.
- **Rank 3:** ETCSL's English translation (t.5.3.1), read after forming the reading of each section; every disagreement is in the **תרגומים** bullet.
- **Precedents:** the corpus renderings (§0–§9); Summer and Winter (`7-הקיץ-והחורף/`: project.md "Proposals" and "Decisions", renderings.md, and its annotated Hebrew grepped for every shared word: *saĝ-tun₃* (S&W 176 = H&P 22, copied), *a-gar₃-a-gar₃*, *ḫaš*, *ki duru₅*, *kuš₂*, *ba-al*, *gir₄*, *gi-gur*, *dab₅*, *ri*, *si-il*, *sumur*, *buluĝ₃*, *dugud*, *kar*, *teš₂*, *mi₂ dug₄*, *ma₂-la₂*, *a₂-la₂*, *maš₂-anše*, *ezen*, *u₆ e*, *gen₆*, *ur₃*, *saĝ-ki*, *u₈*, *sila₄*, *geme₂*, *arad*, *lugal* (owner)); Bird and Fish (the debate formulas 51, 85, 188–190); Grain and Sheep (*šakir*, *išin*, *mu₂-sar*, *gur₃*, *ummud*, *kinkin*, *dur₂ ĝar*, *u₁₈-lu* / *mir*, *niĝ₂-dara₂*, *šu-kar₂ … sug-zag gu₇*, *lu₂ lu₂-u₃*); the Song of the Hoe (*al*, *sa la₂*, *u₃-šub*, *dusu*, *bur₁₂*, *ze₂*, *ud zal*, *dub-saĝ*, *šeg₁₁ gi₄*, *e₂-kur … {ĝiš}al-e ĝar-ra-am₃*, and its line 109 = H&P 196); Enki and the World Order (*ri*, *nu-banda₃*, *taḫ*, *ma₂-laḫ₅*, *dub-sar*); Etana (*an-za-gar₃* = *dimtu* = `צְרִיחַ`; *asal₂* = *ṣarbatu* = `צַפְצָפָה`); Enmerkar (*šu … dag* = `שָׁמַט מִיָּד`); the laments (*a* = `הוֹי`, *gig* = `מַר`, *du₆* = `תֵּל`); Gudea (*uš ki ĝar*, *saĝ-tun₃* = `רושם השדות`); the proverbs (*gu₂ šub* = `הִשְׁלִיךְ צַוָּאר`).
- **Not available:** Vanstiphout 1997 (COS 1); Mittermayer 2019. No purchase made.

## Decisions
1. **The two debaters** as §9.1: `מַעְדֵּר` (masculine) and `מַחֲרֵשָׁה` (feminine; first occurrence vocalized in 6), no article, Hebrew gender. Where the hoe is an ordinary implement in the narrative (134 "the fire which a hoe has stirred", 144 "people take up the hoe", 173 "the hoe given to the dry land") it takes the article (`הַמַּעְדֵּר`).
2. **The Hoe's charges and boasts (13–17 / 122–126)** were fixed as a pair before 122 was drafted: the same Hebrew, with `אינך …` (*nu-…-en*, 2nd sg.) against `אני …` (*i₃-…-en*, 1st sg.) and `מחרשה –` against `מעדר אני –` in 17 / 126. Participles throughout (marû), so the boast reads as the charge turned positive word for word (guidelines §5.2, promise/fulfilment).
3. **Formulas:** 7 = 194 `ויכוח שנאמר בין מעדר ומחרשה:` (§9.5; in 7 it opens the speeches, in 194 it closes the text); 8 = 63 `מעדר אל מחרשה פונה:`, 20 `מחרשה אל מעדר פּוֹנָה:`, 186 `אנליל אל מעדר פונה:`; 195 `באשר מעדר עלה על מחרשה –`; 196 `ניסבה – תהילה!` (§9.5 `DN – תְּהִלָּה!`; the Song of the Hoe 109, the same Sumerian line, has `לניסבה – תהילה!`: see open decision 6). Repeated lines identical: 9 = 18, 10 = 19, 62 = 159, 60 / 90 (gender only), 38 / 40, and the refrain 138 = 141 = 150 `X – את אשתו ואת ילדיו – בי כלכל.` (51 and 178 `בי מכולכל`).
4. **48 / 178A** differ by one word: 178A has the scribal addition «ĝu₁₀» "my", marked for deletion in the edition, so `השיבולים` (178A) against `שיבוליי` (48). The only "same transliteration, different Hebrew" pair that `verify` lists; justified.
5. **22** is S&W 176 word for word, so its Hebrew is copied (`המזכיר הנשגב של האב אנליל – אני!`; *saĝ-tun₃* = `מַזְכִּיר`, S&W's proposal). **2026-10-23 harmonization: `הרושם הנשגב של האב אנליל – אני!` in both (*saĝ-tun₃* = `רוֹשֵׁם`).**
6. **Farming and irrigation words** (§9.3 applied; proposed for the Farmer's Instructions below): *apin* `מחרשה`; *{ĝiš}al* `מעדר`; *zu₂* `שן` (of hoe and plough); *a₂* of the plough = its handle `זרוע` (29); *{ĝiš}ninda₂* (seeder funnel) `מַשְׁפֵּךְ` (never a word of the root זרע); *šudul* `עול`; *gud* `שור`; *ab-sin₂* `תלם`; *gid₂* of the furrow `מָשַׁךְ`; *lagab* `עשה רגבים` / `רגב`; *eg₂* `סוללה`; *pa₅* `תעלה`; *sur₃* `חריץ`; *a-gar₃* `שדמה` (singular); *a-šag₄* `שדה`; *gana₂* `חלקה`; *ki duru₅* `מקום לח`; *ḫaš* (water) `קטע`; *u₂-kul* `עשב־הכּוּל`; *{ĝiš}mud* `גזע`; *i-ri₈/₉-na* `שורש`; *kiši₁₆* `שִׁטָּה` (vocalized); *nagar* `נגר`; *tug₂-du₈* `כובס`; *zar* `אלומה`, *zar-maš* `אלומות`; *garadin* `גדיש`; *guru₇* `כרי`; *araḫ₄* `מַמְגּוּרָה` (a third word, so as not to collide with *e₂-saĝ* `אסם` in S&W and *erim₃* `אסמים` in G&S); *ziz₂* / *gig* `כוסמת` / `חיטה`; *še šeĝ₆* `שעורה בשלה`; *in-nu* `תבן`; *[urud]bulug-gur₁₀* `מגל?`; *gur₁₀* `קצר` (37B), *buru₁₄* `קציר` (170, 174); *de₅* `לָקַט` (48, 76, 86, 178A: of ears, eggs, and roots); *an pad-ra₂* `שיבולים שבורות`; *gi-gur* `סל־קנים`; *ḫar-mušen* `כלוב־ציפורים`; *mu₂-sar* `ערוגה`; *mu-gu₂*, *zi-ri₂-gum* (water-lifts) transliterated; *pu₂* `באר` (see 9); *ba-al* `חפר`; *ĝiš-keše₂-da* `סכר`; *an-za-gar₃* `צריח`; *ummud* `נאד`.
7. **The poor** (§9.3 left *ki-gul-la* open): *ki-gul-la* = `אֶבְיוֹן`. `דַּל` is already Grain and Sheep's word for *ukur₃* (59 `בית הדל`), and *ukur₃* is `עָנִי` here (§9.3; 5, 57): three Sumerian words, three Hebrew words. *nu-siki* / *nu-mu-un-su* `יתום` / `אלמנה`; *saĝ-dili* `בודד`.
8. **The refrain verb *a₂ … e₃*** (lit. "make the arm go out") = `כִּלְכֵּל` throughout (51, 138, 141, 150, 178), so the refrain is visible; ETCSL has "thrive" in 51 and "support" elsewhere.
9. ***pu₂* = `בְּאֵר`** (56, 145, 162), a departure from corpus §6.1 (*pu₂* "pool, water-hole" = `בְּרֵכָה`, in the marsh of Bird and Fish): a hole dug in the steppe where there is no water (160–162) is a well, and the biblical collocation is `חָפַר בְּאֵר` (Gen 21:30; 26:15–25; Num 21:18). Open decision 2.
10. **One Sumerian verb, one Hebrew verb – with splits by sense, recorded:** *la₂* `מהודק` (1), `תלוי` / `נתלה` (53, 94, 96), `מתח` (168), `שקל?` (174), `הידק` (176–177); *gid₂* `משך` (9, 18, 50), `האריך` (121, 169); *us₂* `סמך` (15, 124), `דבק` (119), `בתהלוכה` (87; S&W `הדביק`); *gig* `מר` (59, 167), `חולה` (132); *kar* `ברח` (5, 89), `נטל` (175); *a₂* `זרוע` (21, 29, 176–177), `כוח` (89), `עת` (133); *sa₂* `השווה` (60, 90), `השיג` (154). Kept constant: *du₃* `בנה` (17 times; also of bricks, 13, 122, and of a tooth, 95), *ĝar* `שָׂם` (vocalized, every line), *ri* `הטיל` (70, 72, 93, 110), *de₅* `לקט`, *dab₅* `אחז`, *šu ti* `קיבל`, *maḫ* `נשגב` (also adverbial `בנשגבות`, 187–188), *ed₃* `עלה`, *e₃* `יצא`, *niĝin* `סובב` / `הקיף`, *si … sa₂* `יישר`, *sig₁₀* `שָׁת`, *dim₂* `עיצב`.
11. ***šeg₁₂ … du₃*** (13, 122) = `לבנים … בונה`, not `לָבַן לְבֵנִים`: the Sumerian verb is the ordinary *du₃* "build" (Akk. *labānu*, the cognate of `נִלְבְּנָה`, is noted). The Gen 11:3–4 cluster (bricks, build, city, tower) is shown in the apparatus.
12. ***sig₇*** = `יְרַקְרַק` (adj., 42, 129) / `הוֹרִיק` (verb, 113): a departure from S&W `ירוק` (149, green thorns), by sense – here ripe grain heaps and yellow clay (ETCSL "yellow"); `יְרַקְרַק` covers green-to-yellow (Ps 68:14, gold).
13. ***ni₂ te-en*** (133) = `נִרְגַּע`, the corpus's verb for Akk. *pašāḫu* (§3), noted ↔ Gen 2:2; ***šu dag*** (172) = `שָׁמַט מִיָּד` (Enmerkar); ***ga-na*** (6) = `הָבָה!`; ***lu₂-ulu₃*** (55) = `אָדָם` ("anyone"), not the corpus's `קַדְמוֹן` (*lullû*), which would import "primeval man".
14. **Seasons in 174–175** as §9.1 (`הַחוֹרֶף`, `הַקַּיִץ`, with the article; `הַחוֹרֶף` vocalized plene, since `חֹרֶף` strips to the defective `חרף`, an error).
15. **Gated words** (script): `חרש` / `מחרשה` only in lines with *apin* (the Hoe's lines never name the plough's work with the root חרש); `טובח` (25) avoided because it contains `טוב` (→ *gaz* `הורג`, which matches Isa 22:13); `שבולת` written plene; `מזרעה` / `צינור הזריעה` avoided for *ninda₂* (root זרע gated); `גנה` avoided (gate on גן); `נטע` never (142 `מעמיד` with the Gen 2:8 note).
16. **Uncertain lines** translated with `?` or *italics*, the alternatives in the apparatus: 5, 13 / 122 (*barag*), 37A, 43, 56, 61A, 64, 73, 83, 87, 89, 92, 105, 112, 134–135, 166, 174, 179.

## Open decisions
1. ***saĝ-tun₃*** (22): `מַזְכִּיר` (copied from S&W 176, its proposal) vs Gudea's `רושם השדות` (ETCSL lemma "land registrar"). One Hebrew for the corpora. **Settled 2026-10-23 (`harmonization--2026-10-23.md` row 14): `רוֹשֵׁם`.**
2. ***pu₂*** = `בְּאֵר` here (decision 9) vs corpus §6.1 `בְּרֵכָה`. Proposal: `בְּרֵכָה` for a pool in the marsh, `בְּאֵר` for a dug well, recorded as a split by sense.
3. **166–175 as a post-catastrophe passage** ↔ Gen 8:21–22: our proposal rests on ETCSL's reading of 166 ("heavens"), 168 (houses and the river) and 170 ("flooded the harvest"); the text never says *a-ma-ru* "flood". 174 (*la₂* "weigh out?") and 175 (*šu … kar*) are obscure; the "you" of 174 may be Enlil or the Hoe. Read with Civil / Vanstiphout / Mittermayer when available.
4. ***ud-de₃*** (179) "the storm" (ETCSL) or "the day"; who speaks 179–185 (the Storm = Enlil? the Hoe still?).
5. **62 in the Plough's mouth**: the vocative "Plough" fits 159 (the Hoe's) but not 62; perhaps a copying from 159.
6. **196 / Song of the Hoe 109** – the same Sumerian line (*{d}nisaba za₃-mi₂*): here `ניסבה – תהילה!` (§9.5), there `לניסבה – תהילה!`. Harmonize one of them.
7. ***ki-gul-la*** = `אֶבְיוֹן` (decision 7): confirm for the corpus (the law and proverb corpora may have it).
8. ***sig₇*** `יְרַקְרַק` (here) vs `ירוק` (S&W 149): one Hebrew per word, or a split by sense?
9. ***us₂*** `סמך` / `דבק` (here) vs S&W `הדביק`: a split by sense, or one verb?
10. ***barag*** (13, 122): ETCSL "press (?)" (`רמס`, italic) or ePSD2 *barag* "spread out" (`פרש`/`טח`)? The Nahum 3:14 parallel depends on it.
11. ***ninda₂*** "seeder funnel" = `מַשְׁפֵּךְ`: the Farmer's Instructions will need the same word (the seeder plough is central there).
12. **Vocative *e*** (1) = `הוֹ`: no precedent in the corpora (the laments' `הוֹי` is a cry of woe).

## Proposals for the corpus renderings
Hoe and Plough is the second of the three texts of Round 3 run 1. Words it fixed that the Farmer's Instructions (FI) also has or will need (`translator-brief--sumerian--5-7--shared-lemmas.txt`), and S&W words it followed or departed from:

| Sumerian | Hebrew in H&P | Lines | Notes |
|---|---|---|---|
| *{ĝiš}apin*; *{ĝiš}al* | מַחֲרֵשָׁה (fem.); מַעְדֵּר (masc.) | passim | §9.1; with the article for the ordinary implement (134, 144, 173). |
| *zu₂* (blade of hoe / plough) | שן (pl. שיניים) | 2–4, 95–96, 173 | §9.3. |
| *a₂* of the plough | זרוע (= the handle) | 29 | FI: the plough's handles. |
| *{ĝiš}ninda₂* | מַשְׁפֵּךְ | 114, 185 (var.) | The seeder funnel; never a זרע word (gated). FI needs it. |
| *šudul*; *gud*; *gud-zu 6* | עול; שור (pl. שוורים) | 30, 25, 88 | §9.3. No *erin₂* in H&P. |
| *ab-sin₂*; *gid₂* (furrow) | תלם; מָשַׁךְ | 34, 92; 9, 18 | §9.3. |
| *lagab* | עשה רגבים; רגב | 10, 19 | `רֶגֶב` (Job 21:33). |
| *eg₂*; *pa₅*; *sur₃*; *ĝiš-keše₂-da* | סוללה; תעלה; חריץ; סכר | 67, 84; 67, 71; 56, 62; 151 | §9.3. |
| *a-gar₃*; *a-šag₄*; *gana₂*; *ki duru₅* | שדמה (sg.); שדה; חלקה; מקום לח | 39, 68, 80; passim; 89; 81 | §9.3; S&W. |
| *a … ḫaš* | (מים) נקטעו | 80 | = S&W 174. |
| *u₂-kul*; *{ĝiš}mud*; *i-ri₈/₉-na*; *kiši₁₆* | עשב־הכּוּל; גזע; שורש; שִׁטָּה | 85; 86; 86, 94; 94 | Weeds, stumps, roots, the thorny acacia (never `קוץ`). |
| *nagar*; *tug₂-du₈*; *e₂ nam-gašam* | נגר; כובס; בית האומנות | 98; 100; 99 | *nagar* [cognate loan]. |
| *še šeĝ₆*; *ziz₂*; *gig*; *še* | שעורה בשלה; כוסמת; חיטה; שעורה | 37, 185; 44; 44; 45 | §9.2–9.3. |
| *zar*, *zar-maš*; *garadin*; *guru₇*, *guru₇-du₆*; *in-nu* | אלומה; גדיש; כרי, כרי־התל; תבן | 39; 176; 43; 49 | `גָּדִישׁ` (Exod 22:5; Job 5:26). |
| *araḫ₄* | מַמְגּוּרָה | 45 | A third storehouse word (S&W *e₂-saĝ* `אסם`, G&S *erim₃* `אסמים`). |
| *bulug-gur₁₀*; *gur₁₀*; *buru₁₄* | מגל?; קצר; קציר | 37A; 37B; 170, 174 | §9.2 gates. |
| *de₅* | לָקַט | 48, 76, 86, 178A | [cognate via *laqātu*]; of ears, eggs and roots. FI 79–82 (gleaning). |
| *an pad-ra₂* | שיבולים שבורות | 48, 178A | The gleaners' ears (Ruth 2:2). |
| *nu-siki*; *nu-mu-un-su*; *ki-gul-la*; *ukur₃*; *saĝ-dili* | יתום; אלמנה; אביון; עני; בודד | 46; 46; 46, 178; 5, 57; 178 | Decision 7. |
| *gi-gur*; *ḫar-mušen* | סל־קנים; כלוב־ציפורים | 47, 177; 78, 177 | S&W *gi-gur*. |
| *mu₂-sar*; *mu-gu₂*; *zi-ri₂-gum*; *pu₂*; *ba-al* | ערוגה; המוּגוּ; הזִירִיגוּם; באר; חפר | 146–147; 145; 146; 56, 145, 162; 56, 145, 161 | Water-lifts transliterated; *pu₂* open decision 2. |
| *a₂ … e₃* | כִּלְכֵּל | 51, 138, 141, 150, 178 | The refrain. |
| *addir*; *ḫuĝ* | משכורת; שכר (to hire) | 137; 98 | *addir* kept apart from *a₂* "wage" `שָׂכָר`. |
| *ezen* (of the plough) | חג | 24 | The plough festival (FI?). |
| *itid šu-numun* | ירח שׁוּ־נוּמוּן | 24 | Month names transliterated (no `זרע`). |
| *engar*; *engar zid nam-lu₂-ulu₃* | אִכָּר; אִכָּר נֶאֱמָן שֶׁל הָאֱנוֹשׁוּת | 23, 97 | §9.3 (vocalized like the formula). |
| *saĝ-tun₃ maḫ a-a {d}en-lil₂-la₂-me-en* | הרושם הנשגב של האב אנליל – אני! | 22 | = S&W 176 (open decision 1, settled 2026-10-23; was `המזכיר`). |
| *an-za-gar₃* | צריח | 152, 155 | = Akk. *dimtu* (Etana); `מִגְדָּל` stays for the Bible. |
| *gir₄*; *esir₂*; *ma₂-laḫ₅*; *ma₂-la₂* | כּוּר; חֵמָר; מלח; ספינת־משא | 139; 139; 139, 141; 109 | S&W, cross-corpus. |
| *kinkin*; *naĝa₄*; *ĝiš-gan-na*; *šag₄-sur*; *ma-an-sim* | רחיים; הָעֱלִי (always vocalized); עֱלִי־הָעֵץ; כברה; מסננת | 180–182 | FI (milling, sieving). |
| *ni₂ te-en* | נרגע | 133 | = Akk. *pašāḫu* (§3). |
| *šu … dag* | שמט מיד | 172 | = Enmerkar. |
| *sig₇* | יְרַקְרַק / הוֹרִיק | 42, 113, 129 | Open decision 8. |
| *us₂* | סמך / דבק | 15, 119, 124 | Open decision 9. |

New terms that a later text of any corpus may need: *asal₂* `צַפְצָפָה`, *šinig* `אֵשֶׁל`, *ma-nu* `עֵץ־הַמָּנוּ`, *ĝiš-ab-ba* `עֵץ־הַיָּם`; *niĝ₂-sa-ḫa* `תְּנוּבָה` (apart from *gurun* `פְּרִי`); *ḫašḫur* `תַּפּוּחַ`; *e-ne* `משחק`; *dal* (beam) `קורה`; *i-bi₂* `עשן`; *nam-barag* `שְׂרָרָה`; *a gig dug₄* `"הוֹי" מר נאמר`; *sag₂ dug₄* `פוזר`; *buru₁₄ … su* `הטביע (את הקציר)`; *ga-na* `הָבָה!`; *dal-ḫa-mun* `סופת־אבק`; *im su₄* `טיט אדום`; *e vocative* `הוֹ`.

## Key findings for the commentary
- **Gen 8:21–22 (and 5:29, 9:20).** In the middle of the Hoe's speech (166–175), a quoted memory of catastrophe: "after heaven(?) was scattered, after a bitter 'oh' was said over Sumer, when (he) stretched a hand on the built houses by the river, when Enlil frowned at the land, after Enlil drowned the harvest, after Enlil did a lofty thing – Enlil did not let us slip from his hand; the hoe with the single tooth he gave to the arid land; winter like harvest you weighed out(?); the hand of summer and winter we take…". The sequence – a god's destruction of the harvest by water, the god's not abandoning, the tool given to the land, and the pair summer–winter – is the sequence of Gen 8:21–22 (`לֹא אֹסִף לְקַלֵּל עוֹד אֶת הָאֲדָמָה` (בראשית ח:כא); `זֶרַע וְקָצִיר וְקֹר וָחֹם וְקַיִץ וָחֹרֶף` (בראשית ח:כב)), with the farmer resuming work (`וַיָּחֶל נֹחַ אִישׁ הָאֲדָמָה` (בראשית ט:כ); and Gen 5:29's hope of relief "from the ground"). Our proposal; the text says no "flood" (*a-ma-ru*), and 174–175 are obscure (open decision 3).
- **Gen 11:3–4, 4:17.** The Hoe's works are exactly the Babel cluster: it treads clay and makes bricks (13, 122), lays foundations and builds houses (14, 123), surrounds the city with a firm wall (127), builds in the palace city (130), and raises a tower (*an-za-gar₃*, 152) – but a watchman's tower where tired field-workers rest (153–156; cf. Isa 5:2), not a tower "with its top in heaven". Bitumen (*esir₂* `חֵמָר`, 139) is there too (`וְהַחֵמָר הָיָה לָהֶם לַחֹמֶר` (בראשית יא:ג)).
- **Gen 2:5, 2:8–15, 3:23.** The Hoe "sets up" (*gub*) a garden for the king (142 ↔ `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח); `אֲשֶׁר עַל גַּן הַמֶּלֶךְ` (מלכים ב כה:ד)): a mud wall, a well, two water-lifts, straightened beds, "I am the one who puts water in the beds" (147 ↔ `לְהַשְׁקוֹת אֶת הַגָּן` (בראשית ב:י)), an apple tree whose produce "comes out" and adorns the gods' house (148–149). The Eden garden is watered by a river; the Sumerian one by a tool and a man's labour. The work words: *kiĝ₂* `עֲבוֹדָה` (37, 53, 81, 87, 93, 190) – the field "is there for work" (81 ↔ `וְאָדָם אַיִן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה)), and the last word of the verdict is "the work" (190).
- **Lev 19:9–10, 23:22; Deut 24:19–21; Ruth 2.** The Plough boasts that "the orphan, the widow, the destitute – having taken their reed baskets – glean my broken ears" (46–48; repeated by the Hoe, 178A). The gleaning of the poor is a given institution, and *de₅* = Akk. *laqātu* is the cognate of `לָקַט`; the triad is Deuteronomy's `לַגֵּר לַיָּתוֹם וְלָאַלְמָנָה יִהְיֶה` (דברים כד:יט) with the destitute in place of the stranger. The divergence: in the Torah the owner is commanded "do not glean"; here the gleaning is the implement's glory.
- **1 Kgs 19:19, Deut 22:10, Jer 51:23.** "Your oxen are six, your men four, and you are the eleventh among them" (88) – the very structure of Elisha: `וְהוּא חֹרֵשׁ שְׁנֵים עָשָׂר צְמָדִים לְפָנָיו וְהוּא בִּשְׁנֵים הֶעָשָׂר` (מלכים א יט:יט).
- **1 Sam 13:20–21, Isa 2:4.** The plough's blade breaks, is rebuilt, will not hold; carpenters are hired, a workshop surrounds it, fullers and strap-makers toil, a stinking hide is put on its head (95–103): in Samuel too the ploughshare depends on outside craftsmen and their fees.
- **Gen 4:2–5.** The farmer's tool and the shepherd are not rivals (38–40, 165: the Plough's straw improves Dumuzi's sheep; the Hoe's well lets the shepherd's ewes adorn the steppe); the god prefers the lowly worker (195) – as in Summer and Winter, the reverse of Gen 4:4–5.
- **Gen 21, 26; Num 21:18; Ps 63:2; Isa 41:18.** Insulted as a "digger of wells and ditches" (56, 62 = 159), the Hoe answers: "in the steppe, the arid land, the place where there is no water – when I have dug its sweet water, the thirsty man brings his life to the edge of my well" (160–162; and the waterskin, 157 ↔ Hagar's `וְחֵמַת מַיִם` (בראשית כא:יד)).
- **Prov 20:4, Ecc 3:1.** The Plough works four months and is gone eight, "twice your standing you go away" (105–108); the Hoe works twelve.
- **The ancient mind.** A school text that sides with the slave: the Hoe is "the child of the poor", "wood in the poor man's hand", "a slave who clings to his master" (5, 57, 119); its victory is to be "like a slave-girl standing ready", its work booked by Nisaba's scribe in shekels and minas (189–193). The world of irrigated Sumer in one inventory: dykes and canals, reedbeds and floods, fowlers and fishermen, brick-mould and roof, kiln and bitumen, boats, gardens and water-lifts, the cool house in the evening (133), the lone young man and the destitute supported (178). And school humour about its own genre: the sieve and the strainer hold a debate too (182; cf. the sickle, 37A).

### Parallels index (Hoe and Plough)

| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *{ĝiš}al* | מַעְדֵּר | `וְכֹל הֶהָרִים אֲשֶׁר בַּמַּעְדֵּר יֵעָדֵרוּן` (ישעיהו ז:כה) | [equivalent] | The Bible's hoe. The line is the composition's title in the OB catalogues. |
| 5 | *dumu ukur₃-ra* | בן העני | `לֶעָנִי וְלַגֵּר תַּעֲזֹב אֹתָם` (ויקרא יט:י) | [equivalent] | The Hoe is the poor man's tool (5, 57, 178). |
| 6 | *du₁₄ ga-na … ĝar* | ריב, "הָבָה!", אכן שָׂם | `וַיְהִי רִיב בֵּין רֹעֵי מִקְנֵה אַבְרָם וּבֵין רֹעֵי מִקְנֵה לוֹט` (בראשית יג:ז) | [equivalent] | *du₁₄* = `רִיב` (§9.4). *ga-na* = `הָבָה!` (cf. Gen 11:3, the brick-makers' `הָבָה`; our proposal). |
| 12 | *saḫar {ĝiš}dusu-e … si* | עפר בסל … למלא | `כִּי עָפָר אַתָּה` (בראשית ג:יט) | [equivalent] | *saḫar* = `עָפָר` [cognate via *eperu*]: here the material of work, not of man. |
| 13 | *im … šeg₁₂ … du₃* | טיט – אינך רומסת, לבנים – אינך בונה | `הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [equivalent] | *šeg₁₂* = *libittu* = `לְבֵנָה`; repeated in the positive at 122. With Nahum 3:14 (clay, tread, brick-mould). |
| 14 | *uš ki … e₂ … du₃* | יסוד בארץ … בית … בונה | `וַיְהִי בֹּנֶה עִיר` (בראשית ד:יז) | [equivalent] | Building is the Hoe's work (14, 123, 127, 130). |
| 21 | *a₂ gal … šu gal* | בזרוע גדולה … ביד גדולה | `וּבְיָד חֲזָקָה וּבִזְרוֹעַ נְטוּיָה` (דברים ד:לד) | [divergence] | The hand-and-arm pair of divine might, here of the craftsmen who built the plough. Our proposal. |
| 22 | *saĝ-tun₃ maḫ* | הרושם הנשגב | `וִיהוֹשָׁפָט בֶּן אֲחִילוּד מַזְכִּיר` (שמואל ב ח:טז) | [equivalent] | = S&W 176 (open decision 1). |
| 23 | *engar zid nam-lu₂-ulu₃* | אִכָּר נֶאֱמָן שֶׁל הָאֱנוֹשׁוּת | `וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | [cognate] | *engar* > *ikkaru* > `אִכָּר`; `אִכָּר וְצִמְדּוֹ` (ירמיהו נא:כג). The formula of S&W 317 / FI 111 has "of Enlil"; here "of mankind". |
| 24 | *ezen-ĝu₁₀ … a-šag₄-ga* | חגי … בשדה | `וְחַג הַקָּצִיר בִּכּוּרֵי מַעֲשֶׂיךָ אֲשֶׁר תִּזְרַע בַּשָּׂדֶה` (שמות כג:טז) | [divergence] | The royal plough festival; ETCSL's "harvest month" is the month name *šu-numun*. |
| 25 | *gud … gaz, udu … šar₂* | שוורים הורג, צאן שוחט | `הָרֹג בָּקָר וְשָׁחֹט צֹאן` (ישעיהו כב:יג) | [equivalent] | The same pair of verbs at a feast. |
| 29 | *lugal-e a₂-ĝu₁₀ šu … du₈* | המלך את זרועי ביד החזיק | `וְהוּא חֹרֵשׁ שְׁנֵים עָשָׂר צְמָדִים לְפָנָיו` (מלכים א יט:יט) | [equivalent] | A great man at the plough; the king opens the ploughing season. |
| 30 | *gud … šudul … si sa₂* | את שוורי לעול יישר | `לֹא תַחֲרֹשׁ בְּשׁוֹר וּבַחֲמֹר יַחְדָּו` (דברים כב:י) | [equivalent] | Oxen and yoke (§9.3). |
| 34 | *ab-sin₂ … edin me-te-aš* | תלמי העומד – לעדי לערבה | `תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶהָ` (תהלים סה:יא) | [equivalent] | The furrows as the land's ornament. |
| 36 | *maš₂-anše lu-a … gam* | הבהמות הרבות … כורעות | `וְהִנֵּה תְסֻבֶּינָה אֲלֻמֹּתֵיכֶם וַתִּשְׁתַּחֲוֶיןָ לַאֲלֻמָּתִי` (בראשית לז:ז) | [divergence] | Šakkan's animals kneel toward the Plough's stalks; Joseph's sheaves bow. *lu* = `רָבָה` tagged ↔ Gen 1:22. Our proposal. |
| 37 | *še šeĝ₆ … kiĝ₂* | בעבודה, בשעורה הבשלה | `שִׁלְחוּ מַגָּל כִּי בָשַׁל קָצִיר` (יואל ד:יג) | [equivalent] | *šeĝ₆* of grain = `בָּשֵׁל` (§9.2). With 37A, the sickle. |
| 37B | *gur₁₀* | קָצוּר | `זֶרַע וְקָצִיר` (בראשית ח:כב) | [equivalent] | *gur₁₀* = `קָצַר` (gated). One manuscript only. |
| 38 | *šakir sipad dug₃ ĝar* | מחבצת הרועה – לטוב שׂוּמָה | `וַיְהִי הֶבֶל רֹעֵה צֹאן וְקַיִן הָיָה עֹבֵד אֲדָמָה` (בראשית ד:ב) | [divergence] | The farmer's tool boasts that the shepherd profits from it (38–40): dependence, not rivalry. |
| 42 | *ḫur-saĝ sig₇* | הר ירקרק | `וְאֶבְרוֹתֶיהָ בִּירַקְרַק חָרוּץ` (תהלים סח:יד) | [equivalent] | The yellow-green of ripe grain heaps. |
| 43 | *guru₇ … gu₂ … gur* | כרים … צוברת | `וַיִּצְבֹּר יוֹסֵף בָּר כְּחוֹל הַיָּם` (בראשית מא:מט) | [equivalent] | *gu₂ gur* = `צָבַר` (S&W); *guru₇* > *karû* > `כְּרִי` [cognate]. |
| 44 | *ziz₂ gig* | כוסמת וחיטה | `וְהַחִטָּה וְהַכֻּסֶּמֶת לֹא נֻכּוּ` (שמות ט:לב) | [equivalent] | The two wheats beside barley. |
| 45 | *araḫ₄ nam-lu₂-ulu₃ … še … si* | את ממגורות האנושות שעורה אני ממלאת | `נָשַׁמּוּ אֹצָרוֹת נֶהֶרְסוּ מַמְּגֻרוֹת` (יואל א:יז) | [equivalent] | *araḫ₄* = `מַמְגּוּרָה`; *si* = `מִלֵּא` tagged ↔ Gen 1:22 (no creation motif here). |
| 46 | *nu-siki nu-mu-un-su ki-gul-la* | היתום, האלמנה, האביון | `לַגֵּר לַיָּתוֹם וְלָאַלְמָנָה יִהְיֶה` (דברים כד:יט) | [equivalent] | The gleaning triad; the Sumerian has "the destitute" where Deuteronomy has the stranger. Key finding. |
| 48 | *an pad-ra₂-ĝu₁₀ … de₅* | את שיבוליי השבורות מלקטים | `וְלֶקֶט קְצִירְךָ לֹא תְלַקֵּט` (ויקרא יט:ט) | [cognate] | *de₅* = Akk. *laqātu* ~ `לָקַט`. Divergence: a boast of abundance, not a command to the owner. Also Ruth 2:2 (next row). |
| 48 | *an pad-ra₂ … de₅* | שיבולים … מלקטים | `אֵלְכָה נָּא הַשָּׂדֶה וַאֲלַקֳּטָה בַשִּׁבֳּלִים` (רות ב:ב) | [cognate] | The gleaner's ears (ETCSL "scattered ears"); repeated by the Hoe at 178A. |
| 49 | *in-nu a-šag₄-ga* | את תבני … בשדה | `הֵם יֵלְכוּ וְקֹשְׁשׁוּ לָהֶם תֶּבֶן` (שמות ה:ז) | [equivalent] | Straw gathered from the field (for fodder and bricks). |
| 51 | *a₂ … e₃* | בי מכולכל | `וַיְכַלְכֵּל יוֹסֵף אֶת אָבִיו וְאֶת אֶחָיו` (בראשית מז:יב) | [equivalent] | The refrain verb (51, 138, 141, 150, 178). |
| 53 | *{ĝiš}al im-ma kiĝ₂-ĝa₂* | מעדר, התלוי בטיט בעבודה | `לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה) | [equivalent] | *kiĝ₂* = `עֲבוֹדָה` (the root עבד reserved for it): the work is clay-work. |
| 55 | *{ĝiš}al u₃ {ĝiš}u₃-šub-ba im-ma* | מעדר ומלבן … בטיט | `בֹּאִי בַטִּיט וְרִמְסִי בַחֹמֶר הַחֲזִיקִי מַלְבֵּן` (נחום ג:יד) | [equivalent] | Clay, treading and the brick-mould. |
| 56 | *pu₂ ba-al sur₃ ba-al* | חופר באר, חופר חריץ | `וַיָּשָׁב יִצְחָק וַיַּחְפֹּר אֶת בְּאֵרֹת הַמַּיִם` (בראשית כו:יח) | [equivalent] | Well-digging as an insult; answered at 160–162. *pu₂* = `בְּאֵר` (open decision 2). |
| 57 | *ĝiš šu ukur₃-ra* | עץ ביד העני | `כִּי לֹא יֶחְדַּל אֶבְיוֹן מִקֶּרֶב הָאָרֶץ` (דברים טו:יא) | [equivalent] | Poverty as a taunt. |
| 58 | *šu arad lu₂-ka* | יד עבדו של איש | `הִנֵּה כְעֵינֵי עֲבָדִים אֶל יַד אֲדוֹנֵיהֶם` (תהלים קכג:ב) | [equivalent] | *arad* = `עֶבֶד` (licensed). Turned into a boast at 119. |
| 65 | *dub-saĝ-zu* | הראשון לפנייך | `וְרַב יַעֲבֹד צָעִיר` (בראשית כה:כג) | [divergence] | The "small" one (64) goes first. Our proposal. |
| 67 | *eg₂ … pa₅* | סוללה … תעלה | `וְהִשְׁקִיתָ בְרַגְלְךָ כְּגַן הַיָּרָק` (דברים יא:י) | [equivalent] | A land of irrigation canals. |
| 68 | *a-gar₃-a-gar₃-re a … si* | את השדמה והשדמה – מים אני ממלא | `וְאֵד יַעֲלֶה מִן הָאָרֶץ וְהִשְׁקָה אֶת כָּל פְּנֵי הָאֲדָמָה` (בראשית ב:ו) | [equivalent] | Watering the whole land – by a tool here, by an `אֵד` there. *si* tagged ↔ Gen 1:22. |
| 76 | *mušen-du₃ nunuz … de₅* | צייד־הציפורים ביצים מלקט | `קַן צִפּוֹר לְפָנֶיךָ … אֶפְרֹחִים אוֹ בֵיצִים` (דברים כב:ו) | [divergence] | Egg-collecting: limited by the Torah, part of the abundance here. *de₅* ~ `לָקַט`. |
| 78 | *{ĝiš}ḫar-mušen* | כלובי־הציפורים | `כִּכְלוּב מָלֵא עוֹף` (ירמיהו ה:כז) | [equivalent] | The fowler's trap. |
| 81 | *ki duru₅ kiĝ₂-ĝa₂* | המקום הלח לעבודה נמצא | `וְאָדָם אַיִן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה) | [equivalent] | After the water is drained, the land "is there for work". |
| 85 | *u₂-kul a-šag₄-ga* | עשב־הַכּוּל שבשדה | `וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ` (בראשית ג:יח) | [divergence] | Weeds as routine work, not curse (also 94: roots and acacia). |
| 86 | *{ĝiš}mud {ĝiš}i-ri₉-na* | הגזעים ושורשיהם | `וְיָצָא חֹטֶר מִגֵּזַע יִשָׁי` (ישעיהו יא:א) | [equivalent] | Stump and roots; the Hoe "gleans" them (*de₅*). |
| 88 | *gud-zu 6 lu₂-zu 4 … 11-kam-ma* | שווריך – שישה, אנשייך – ארבעה, ואת – האחת־עשרה | `וְהוּא חֹרֵשׁ שְׁנֵים עָשָׂר צְמָדִים לְפָנָיו וְהוּא בִּשְׁנֵים הֶעָשָׂר` (מלכים א יט:יט) | [equivalent] | The same numerical structure ("and he with the twelfth"). Key finding. |
| 88 | *gud-zu 6* | שווריך – שישה | `לֹא תַחֲרֹשׁ בְּשׁוֹר וּבַחֲמֹר יַחְדָּו` (דברים כב:י) | [divergence] | The plough team is oxen only. |
| 94 | *i-ri₈-na kiši₁₆* | שורשים ושִׁטָּה | `וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ` (בראשית ג:יח) | [divergence] | Thorny plants as an obstacle to ploughing, not a punishment; `קוֹץ` reserved (*kiši₁₆* = acacia). |
| 95 | *zu₂-zu … kud … du₃* | שינך נכרתה; כששינך נבנתה | `לִלְטוֹשׁ אִישׁ אֶת מַחֲרַשְׁתּוֹ וְאֶת אֵתוֹ וְאֶת קַרְדֻּמּוֹ וְאֵת מַחֲרֵשָׁתוֹ` (שמואל א יג:כ) | [equivalent] | The plough depends on outside craftsmen (95–103), as in Samuel (and their fee, 13:21). Key finding. |
| 97 | *mu-še₃ … sa₄* | בשם קורא | `וַיִּקְרָא אֶת שְׁמוֹ נֹחַ לֵאמֹר` (בראשית ה:כט) | [equivalent] | A name that is a sentence (*mu sa₄* = `קָרָא שֵׁם`). |
| 102 | *kuš₂* | מתייגעים | `וְאֶת יְגִיעַ כַּפַּי רָאָה אֱלֹהִים` (בראשית לא:מב) | [equivalent] | *kuš₂* = `יָגַע` (§9.3); not `בְּעִצָּבוֹן תֹּאכְלֶנָּה` (בראשית ג:יז), which is reserved. |
| 103 | *kuš nu-dug₃ saĝ-du-zu … ĝar* | עור לא טוב על קודקודך שָׂמוּ | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) | [divergence] | A foul hide put on the plough's head. *nu-dug₃* = "not good" (as `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח), verbally only). |
| 105 | *ud zag-ĝu₁₀ itid 12* | ימי צדי – שנים־עשר ירחים | `לַכֹּל זְמָן; וְעֵת לְכָל חֵפֶץ תַּחַת הַשָּׁמָיִם` (קהלת ג:א) | [equivalent] | The year divided into work and absence (105–108). |
| 106 | *ud gub-ba-zu itid 4* | ימי עמידתך – ארבעה ירחים | `מֵחֹרֶף עָצֵל לֹא יַחֲרֹשׁ` (משלי כ:ד) | [equivalent] | The short ploughing season. Also Isa 28:24. |
| 107 | *ud saḫ₆-zu itid 8* | ימי פרישתך – שמונה ירחים | `תָּכִין בַּקַּיִץ לַחְמָהּ` (משלי ו:ח) | [divergence] | Wisdom praises the worker of every season; so does the Hoe. |
| 117 | *iri{ki}-a ga-an-til₃* | בעיר אֶשְׁכְּנָה | `וַיְהִי בֹּנֶה עִיר` (בראשית ד:יז) | [equivalent] | The tool of the city. |
| 119 | *arad lugal-a-ni-ir us₂-sa* | עבד הדבק בבעליו | `אָהַבְתִּי אֶת אֲדֹנִי` (שמות כא:ה) | [equivalent] | The insult of 58 turned into the Hoe's boast; `דָּבַק` (Ruth 2:8). |
| 121 | *tur₃ … amaš* | הרפת … הדיר | `וַיְהִי הֶבֶל רֹעֵה צֹאן` (בראשית ד:ב) | [divergence] | The herdsman's pens are built with the hoe. |
| 122 | *im … šeg₁₂ … du₃-du₃* | טיט – אני רומס, לבנים – אני בונה | `הָבָה נִלְבְּנָה לְבֵנִים` (בראשית יא:ג) | [equivalent] | The Babel cluster (122–130, 152): bricks, house, wall, city, tower. Key finding. |
| 127 | *iri … bad₃ gen₆ … du₃* | העיר … חומה מכוננת בניתי | `וַיְהִי בֹּנֶה עִיר` (בראשית ד:יז) | [equivalent] | City and wall built with the hoe; Gen 11:4 too. |
| 130 | *e₂-gal* | היכל | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל` (בראשית יא:ד) | [cognate] | *e₂-gal* > *ekallu* > `הֵיכָל`; the palace city. |
| 133 | *a₂ sed₄-bi-še₃ ni₂ … te-en* | לעת הקור – נרגעים | `מִתְהַלֵּךְ בַּגָּן לְרוּחַ הַיּוֹם` (בראשית ג:ח) | [equivalent] | The cool of the day in the house; *sed₄* = `קֹר` (gated, ↔ Gen 8:22); *ni₂ te-en* = *pašāḫu* = `נִרְגַּע` (↔ Gen 2:2). Our proposal. |
| 137 | *addir* | משכורתו | `הַגִּידָה לִּי מַה מַּשְׂכֻּרְתֶּךָ` (בראשית כט:טו) | [equivalent] | The worker's wage; Deut 24:15. |
| 138 | *dam dumu-ni a₂ … e₃* | את אשתו ואת ילדיו – בי כלכל | `אָנֹכִי אֲכַלְכֵּל אֶתְכֶם וְאֶת טַפְּכֶם` (בראשית נ:כא) | [equivalent] | The refrain (138, 141, 150). |
| 139 | *esir₂ … bil* | חֵמָר אני מחמם | `וְהַחֵמָר הָיָה לָהֶם לַחֹמֶר` (בראשית יא:ג) | [equivalent] | *esir₂* = `חֵמָר` (all corpora); the boat's bitumen ≠ the ark's `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) (*kupru*) [divergence]. |
| 142 | *lugal-ra {ĝiš}kiri₆ … gub* | למלך – גן אני מעמיד | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | [equivalent] | *kiri₆ gub* "set up a garden" = plant (`נָטַע` reserved). The garden needs wall, well, water-lifts and beds (142–150). Key finding. |
| 142 | *lugal-ra {ĝiš}kiri₆* | למלך – גן | `שַׁעַר בֵּין הַחֹמֹתַיִם אֲשֶׁר עַל גַּן הַמֶּלֶךְ` (מלכים ב כה:ד) | [equivalent] | The king's garden; also Ecc 2:5. |
| 143 | *{ĝiš}kiri₆ … niĝin₂ im-du₃-a* | את הגן הקיף … בחומת־טיט | `גַּן נָעוּל אֲחֹתִי כַלָּה` (שיר השירים ד:יב) | [equivalent] | The walled garden. |
| 145 | *pu₂-ba … ba-al* | בארו נחפרה | `כִּי חָפַרְתִּי אֶת הַבְּאֵר הַזֹּאת` (בראשית כא:ל) | [equivalent] | The well of the garden. |
| 147 | *mu₂-sar-ra a … sig₁₀* | בערוגות מים אני שָׁת | `וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת הַגָּן` (בראשית ב:י) | [divergence] | The garden watered by a tool ("I am the one"), not by a river. |
| 148 | *niĝ₂-sa-ḫa am₃-e₃* | תנובה יוצאת | `וַתּוֹצֵא הָאָרֶץ דֶּשֶׁא` (בראשית א:יב) | [equivalent] | *e₃* = `יָצָא` tagged; the apple tree among the garden's trees (Gen 2:9). |
| 149 | *niĝ₂-sa-ḫa-bi e₂ diĝir* | תנובתו – בבית האלים | `וַיָּבֵא קַיִן מִפְּרִי הָאֲדָמָה מִנְחָה לַיהוָה` (בראשית ד:ג) | [equivalent] | Garden produce brought to the gods' house. |
| 152 | *an-za-gar₃ … du₃* | צריח … בניתי | `וַיִּבֶן מִגְדָּל בְּתוֹכוֹ` (ישעיהו ה:ב) | [equivalent] | The watchtower in a cultivated plot. |
| 152 | *an-za-gar₃* | צריח | `נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [divergence] | The Hoe's tower is a resting place for field-workers (153–156), not a tower to heaven. |
| 153 | *ud … ĝi₆* (153–154) | היום … הלילה | `וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | [equivalent] | Day and night of field work; Gen 31:40. |
| 157 | *{kuš}ummud … a … de₂* | נאד … מים לו יוצקים | `וַיִּקַּח לֶחֶם וְחֵמַת מַיִם וַיִּתֵּן אֶל הָגָר` (בראשית כא:יד) | [equivalent] | Waterskin, well and the thirsty in the steppe (157–162); Gen 21:19. |
| 158 | *zi-ni šag₄-ba … ĝar* | את חייו בלבו אני שָׂם | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | [divergence] | Revival of the exhausted, not creation; `וַתָּשָׁב רוּחוֹ וַיֶּחִי` (שופטים טו:יט) [equivalent]. |
| 160 | *edin bar-rim₄ ki a nu-ĝal₂-la* | בערבה, בצייה, במקום אשר אין בו מים | `בְּאֶרֶץ צִיָּה וְעָיֵף בְּלִי מָיִם` (תהלים סג:ב) | [equivalent] | The same phrase; *bar-rim₄* = `צִיָּה`. `וְאֶרֶץ צִיָּה לְמוֹצָאֵי מָיִם` (ישעיהו מא:יח). |
| 161 | *a dug₃-ga-bi … ba-al* | את מימיה המתוקים חפרתי | `בְּאֵר חֲפָרוּהָ שָׂרִים כָּרוּהָ נְדִיבֵי הָעָם` (במדבר כא:יח) | [equivalent] | Digging a well in the wilderness: princes there, the lowly hoe here. |
| 162 | *gu₂ pu₂-ĝa₂-še₃* | אל שפת בארי | `וַיָּרִיבוּ רֹעֵי גְרָר עִם רֹעֵי יִצְחָק לֵאמֹר לָנוּ הַמָּיִם` (בראשית כו:כ) | [divergence] | Wells as an object of quarrel there, an argument in the debate here; Gen 21:19, 29:2. |
| 163 | *lu₂ lu₂-u₃-ra* (163–164) | איש אל רעהו | `וַיֹּאמְרוּ אִישׁ אֶל רֵעֵהוּ` (בראשית יא:ג) | [equivalent] | The quoted speech of people (163–178A). |
| 165 | *sipad … u₈ sila₄* | הרועה – כבשותיו וטלאיו | `וַיְהִי הֶבֶל רֹעֵה צֹאן` (בראשית ד:ב) | [equivalent] | The shepherd's flock adorns the steppe, thanks to the Hoe's well. |
| 166 | *ud an-ne₂ sag₂ … dug₄* | אחרי יום שבו השמים? פוזרו | `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` (בראשית ז:יא) | [divergence] | A catastrophe that starts in heaven. Opens 166–175 ↔ Gen 8:21–22 (our proposal; open decision 3). |
| 167 | *ki-en-gi a gig … dug₄* | על שׁוּמֶר "הוֹי" מר נאמר | `עָבַר קָצִיר כָּלָה קָיִץ; וַאֲנַחְנוּ לוֹא נוֹשָׁעְנוּ` (ירמיהו ח:כ) | [equivalent] | Lament over a lost harvest (170). |
| 168 | *e₂ du₃ id₂-da šu … la₂* | בבית הבנוי בנהר יד מתח | `וְלֹא יִהְיֶה עוֹד מַבּוּל לְשַׁחֵת הָאָרֶץ` (בראשית ט:יא) | [equivalent] | Water destroying dwellings. Our proposal. |
| 169 | *ma-da saĝ-ki … gid₂* | אל הארץ מצח האריך | `וַיִּנָּחֶם יְהוָה כִּי עָשָׂה אֶת הָאָדָם בָּאָרֶץ` (בראשית ו:ו) | [divergence] | The god's displeasure before the disaster; no moral reason given. |
| 170 | *buru₁₄ … su* | את הקציר הטביע | `זֶרַע וְקָצִיר` (בראשית ח:כב) | [equivalent] | *buru₁₄* = `קָצִיר` (gated); the harvest drowned by Enlil. `וַיִּמַח אֶת כָּל הַיְקוּם` (בראשית ז:כג). Key finding. |
| 171 | *maḫ … ak* | (דבר) נשגב עשה | `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי כַּאֲשֶׁר עָשִׂיתִי` (בראשית ח:כא) | [divergence] | The disaster summed up as the god's deed. |
| 172 | *šu nu-me-en-dag* | אותנו מידו לא שמט | `לֹא יַרְפְּךָ וְלֹא יַעַזְבֶךָּ` (דברים לא:ו) | [equivalent] | The god who struck "did not let us slip"; `וַיִּזְכֹּר אֱלֹהִים אֶת נֹחַ` (בראשית ח:א). Key finding. |
| 173 | *{ĝiš}al … bar-rim₄-še₃ … šum₂* | את המעדר … לצייה נתן | `זֶה יְנַחֲמֵנוּ מִמַּעֲשֵׂנוּ וּמֵעִצְּבוֹן יָדֵינוּ מִן הָאֲדָמָה אֲשֶׁר אֵרְרָהּ יְהוָה` (בראשית ה:כט) | [equivalent] | After the disaster, the tool for working the land; `וַיָּחֶל נֹחַ אִישׁ הָאֲדָמָה` (בראשית ט:כ); Gen 3:23 [divergence]. Our proposal. |
| 174 | *en-te-en buru₁₄-gin₇* | את הַחוֹרֶף כקציר | `קַיִץ וָחֹרֶף אַתָּה יְצַרְתָּם` (תהלים עד:יז) | [equivalent] | Winter (sowing) set against harvest; *en-te-en*, *buru₁₄* gated; ↔ `זֶרַע וְקָצִיר` (בראשית ח:כב). |
| 175 | *šu e₂-me-eš en-te-na-ke₄* | את יד הַקַּיִץ (וְ)הַחוֹרֶף | `וְקַיִץ וָחֹרֶף וְיוֹם וָלַיְלָה לֹא יִשְׁבֹּתוּ` (בראשית ח:כב) | [equivalent] | Summer and winter, together, right after the catastrophe and Enlil's not abandoning (166–173). Key finding. |
| 176 | *garadin … la₂* | את הגדיש הידק | `וְנֶאֱכַל גָּדִישׁ אוֹ הַקָּמָה` (שמות כב:ה) | [equivalent] | *garadin* = `גָּדִישׁ`; Job 5:26. |
| 178 | *ĝuruš saĝ-dili ki-gul-la* | הבחור הבודד, האביון | `לֶעָנִי וְלַגֵּר תַּעֲזֹב אֹתָם` (ויקרא יט:י) | [equivalent] | Those without family supported by the hoe; 178A they glean. |
| 178A | *an pad-ra₂-«ĝu₁₀» … de₅* | את השיבולים השבורות מלקטים | `וַאֲלַקֳּטָה בַשִּׁבֳּלִים` (רות ב:ב) | [cognate] | = 48, now in the Hoe's mouth ("my" deleted). |
| 180 | *kinkin … naĝa₄* | הרחיים … הָעֱלִי | `וְטָחֲנוּ בָרֵחַיִם אוֹ דָכוּ בַּמְּדֹכָה` (במדבר יא:ח) | [equivalent] | Household tools quarrelling (180–182); Prov 27:22. |
| 182 | *šag₄-sur ma-an-sim … a-da-min₃ … ak* | הכברה ומסננתה – ויכוח עשו | `כַּאֲשֶׁר יִנּוֹעַ בַּכְּבָרָה` (עמוס ט:ט) | [equivalent] | A debate inside the debate: the school laughing at its own genre. |
| 184 | *{d}ezina₂ gu₂-zu … šub* | לדָּגָן – מדוע את צווארך השלכת? | `וַיִּשַׁע יְהוָה אֶל הֶבֶל וְאֶל מִנְחָתוֹ` (בראשית ד:ד) | [divergence] | Who honours the grain goddess. |
| 190 | *dub-sar-e kiĝ₂ … il₂* | הסופר – את העבודה ישא | `וְאָדָם אַיִן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה) | [equivalent] | The verdict ends with "the work" (*kiĝ₂*), booked by Nisaba's scribe. |
| 193 | *geme₂-gin₇ gub-ba eš₂-gar₃ … ĝar* | כאָמָה העומדת – את המכסה אתה שָׂם | `כְּעֵינֵי שִׁפְחָה אֶל יַד גְּבִרְתָּהּ` (תהלים קכג:ב) | [equivalent] | The Hoe's victory is a slave's virtue; Exod 5:8 (the brick quota "placed" on the workers). |
| 195 | *{ĝiš}al-e {ĝiš}apin-na dirig-ga-ba* | באשר מעדר עלה על מחרשה | `וַיִּשַׁע יְהוָה אֶל הֶבֶל וְאֶל מִנְחָתוֹ` (בראשית ד:ד) | [divergence] | The god prefers one of two; here the lowly working tool, as in S&W the farmer. |

## Progress
(drafting; review passes (a) fidelity, (b) consistency, (c) Hebrew; verify and check_bible_quotes results)
- 2026-10-22: header + 1–8 drafted (verify OK).
- 2026-10-22: 9–19 drafted (the Hoe's first speech; 13–17 fixed for 122–126).
- 2026-10-22: 20–37B drafted (the Plough's festival; 22 copied from S&W 176).
- 2026-10-22: 38–51 drafted (harvest, storehouses, the gleaners).
- 2026-10-22: 52–62 drafted (the Plough's insults).
- 2026-10-22: 63–79 drafted (the Hoe's reply: precedence, water works).
- 2026-10-22: 80–103 drafted (preparing the field; the Plough's team and repairs).
- 2026-10-22: 104–121 drafted (four months against twelve; the Plough's mishaps; the Hoe in the city).
- 2026-10-22: 122–141 drafted (122–126 = 13–17 in the positive; city, palace, cool houses, boatman).
- 2026-10-22: 142–165 drafted (the king's garden, the well, the watchtower; the thirsty in the steppe).
- 2026-10-22: 166–178A drafted (the catastrophe; "Enlil did not let us go"; winter and summer; the gleaners again).
- 2026-10-22: 179–196 drafted (the tools' quarrel; Enlil's verdict; Nisaba). **All 201 entries drafted.**
- 2026-10-22: `translation--intro.rtl.md` written; `sumerian_tools.py build 6` (201 lines, 7 footnotes).
- 2026-10-22: **review pass (a), fidelity** (every line read against its transliteration): 5 (ETCSL's "even" removed; *šag₄ … kar* literal), 28 (no first person in *-ši-*), 36, 50, 156 (dimensional infixes are in the verb: no parentheses), 155 (*u₃-* clause), 174 (*me-en-de₃* "we", not "for us").
- 2026-10-22: **review pass (b), consistency** (formulas 7 = 194, 8 = 63, 9–10 = 18–19, 62 = 159, 13–17 / 122–126, the refrain 138 = 141 = 150, 38 / 40, 60 / 90; every *ĝar* line has vocalized `שָׂם` (scripted); one Sumerian verb, one Hebrew verb, splits by sense recorded in Decisions): first-occurrence vocalization of `מַחֲרֵשָׁה` (6) and `אֶנְלִיל` (22); `פּוֹנָה` (20); `שְׁמָהּ` (185); plene `שיבולים` (48, 178A); 69 reworded (`כשמים` reads "like heaven").
- 2026-10-22: **review pass (c), Hebrew** (the clean translation read aloud, as a separate read-through): 133 `לעת קורם` → `לעת הקור` (`קורם` reads "their beam"); register even; no unintended biblical calques found beyond those noted in the apparatus (`הָבָה` 6, `אֶשְׁכְּנָה` 117, `שָׁמַט מִיָּד` 172, each discussed).
- 2026-10-22: project.md completed (sources, decisions 1–16, open decisions 1–12, proposals incl. the FI words, key findings, parallels index: 96 rows, parsed by the corpus builder's own table reader); `renderings.md` written from the drafted lines and **re-checked by script** (76 rows: every listed line contains the row's Hebrew; 0 misses).
- 2026-10-22: **final checks:** `python3 -I sumerian_tools.py build 6` (201 lines, 7 footnotes); `verify 6 --strict` OK (one listed note: 48 / 178A, justified, decision 4); `check_bible_quotes.py annotated.rtl.md translation--intro.rtl.md project.md`: 0 problems (every verse printed with `--show` before quoting).
- Not done here (outside this folder): the print stub `../../הדפסה/סיפורי-הבריאה-המסופוטמיים/6-המעדר-והמחרשה.rtl.md`, the merge into `../renderings.md` and `../parallels-index.md` (coordinator). The git-ignored ETCSL bulk was restored locally (`tools/sources_sync.py fetch --only 'ETCSL/_bulk/etcsl-unzipped'`, 797 files ok) for the concordance.
