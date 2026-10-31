# Project 6: Flood references → Hebrew

Read `../../translation-guidelines.md` first, then `../corpus.md` and the shared `../renderings.md`. This file holds only what is specific to this project.

## Scope
Passages of Mesopotamian literature that **mention** the flood or its survivor without narrating it. One section per text, in the same order in `annotated.rtl.md` and `translation.rtl.md`:

| § | Text | Language | Extent translated | Base edition |
|---|---|---|---|---|
| 1 | **Sumerian King List** (SKL), ETCSL 2.1.1 | Sumerian | ll. 1–47 (kingship descends; Eridu … Šuruppag; "the flood swept over"; kingship descends again to Kiš; Ĝušur, Kullassina-bēl). WB 62 variant: in a note (from Jacobsen 1939) | ETCSL composite (= ORACC Q000371 lemmatisation) |
| 2 | **Instructions of Šuruppag**, ETCSL 5.6.1 | Sumerian | ll. 1–13 (prologue) | ETCSL (= ORACC Q000782) |
| 3 | **Death of Bilgameš**, ETCSL 1.8.1.3, Me-Turan version, Segment F | Sumerian | F 3–41 (the dream: the gods' verdict; Ziusudra; the rites; Enki on the flood; the oath) + the variant lines F 123–128 of the repetition | ETCSL (= ORACC Q000363) |
| 4 | **Rulers of Lagaš**, ETCSL 2.1.2 | Sumerian | ll. 1–31 (after the flood: mankind without tools or irrigation) and 99–108, 117–124 (the first named rulers); 32–98 summarised (broken) | ETCSL (= ORACC Q000372) |
| 5 | **Poem/Ballad of Early Rulers**, ETCSL 5.2.5 | Sumerian (OB Sippar) | ll. 6–21 (the whole preserved composite) | ETCSL (= ORACC Q000789) |
| 6 | **Gilgameš SB I 1–28** | Akkadian | ll. 1–28 (prologue: "he brought back a report from before the flood", l. 8; the Seven Sages laid Uruk's foundations, l. 21) | eBL (George, rev. Rozzi, Jiménez) |
| 7 | **Erra and Išum I 126–162** | Akkadian | ll. 126–162 (Erra's question; Marduk's account of "the" flood, its aftermath, the sages sent down to the Apsû); ll. 170–172 in a note | eBL (Jiménez et al.) |
| 8 | **Dynastic Chronicle** (ABC 18 / Glassner 1) | Sumerian–Akkadian bilingual | BM 35572 1′–18′ (opening) and K 11261+ 1′–19′ (antediluvian section to the flood) | **new source:** eBL Fragmentarium transliterations |
| 9 | **Uruk List of Kings and Sages** (W 20030/7) | Akkadian | the whole tablet, o 1–r 9 | **new source:** ORACC cams/gkab P363353 (Robson) |

Not found in an open edition (recorded in `../../sources/_records-only--paid-and-restricted/README.md`): the Akkadian (Middle Assyrian) version of the Instructions of Šuruppak (Lambert, BWL 92ff.); the bilingual Emar/Ugarit Ballad of Early Rulers (Alster 2005; Arnaud, Emar 6/4 767; Ugaritica 5 164).

## Base texts and line numbering
- Sumerian (§1–5): ETCSL composites, `../../sources/ETCSL/<n>/transliteration.md`; per-word glosses from ORACC ePSD2 (`../../sources/ORACC/_bulk/epsd2-literary.zip`, converted with `tools/cdl2md.py` into the session scratchpad). ETCSL composite line numbers; Death of Bilgameš: "Me-Turan F n".
- Akkadian (§6–7): eBL reading editions, `../../sources/eBL/Gilgamesh-SB-I/`, `../../sources/eBL/Erra-SB-I/`. eBL line numbers.
- §8: eBL fragment line numbers (`K 11261 5′`, `BM 35572 7′`); `../../sources/eBL-fragmentarium/Dynastic-Chronicle--ABC-18/`.
- §9: ORACC labels (`o 1` … `r 9`); `../../sources/ORACC/cams-gkab--P363353--Uruk-List-of-Kings-and-Sages/`.

## Sources consulted
- Rank 1: ETCSL composites; ORACC Q000371, Q000782, Q000363, Q000372, Q000789 (ePSD2 lemmatisation); eBL Gilg. SB I and Erra SB I (normalisation, lemmas, notes, manuscripts); eBL Fragmentarium K.11261+, BM.35572; ORACC cams/gkab P363353.
- Rank 2: ePSD2 (via the ORACC lemmatisation); eBL dictionary/glossary files (`glossary.md` of each eBL folder); `/api/words` per word.
- Rank 3 (consulted after drafting): the ETCSL English translations; George's eBL translation of Gilg. I; Jiménez's eBL translation of Erra I; Robson's ORACC translation of P363353.
- Rank 4: eBL notes (Cagni 1969, Foster, CAD, AHw as quoted there); Jacobsen 1939 (`../../sources/Comparative-studies/Jacobsen-1939--Sumerian-King-List-AS11/`), for WB 62 and K 11624; Wasserman 2020 §3.8 (Erra IV 50 and Sippar; the Uruk list).
- Bible: `/Users/giladben-dor/dev/perush/תנך-מנוקד/` (every quotation checked against it).

## Decisions
1. **One section per text**; each opens with a short Hebrew introduction (what, date, why it matters for the flood).
2. **Sumerian a-ma-ru = `מַבּוּל`** (shared table) and **a-ma-ru ba-ur₃ = `הַמַּבּוּל שָׁטַף`** (ur₃ "to drag, sweep over, level"). `שָׁטַף` is not a Genesis word, so it creates no false echo.
3. **eĝer a-ma-ru ba-ur₃-ra-ta = `אחרי ששטף המבול`**, identical in SKL 40 and Rulers of Lagaš 1 (and, without eĝer, in Death of Bilgameš F 30, 123). Tagged [equivalent] with `אַחַר הַמַּבּוּל` (בראשית ט:כח; י:א; י:לב; יא:י).
4. **mu N i₃-ak** (SKL, Lagaš) = `עָשָׂה N שָׁנָה` (literal: "he did N years"), explained once in a note. It keeps the formula visible and avoids `מָלַךְ`, which the Sumerian does not say (contrast `lugal-am₃` = `הָיָה מֶלֶךְ`).
5. **Numbers** in Arabic digits as in the edition; the sexagesimal value (e.g. 28,800 = 8 šar) in the apparatus only.
6. **apkallu = `חָכָם`** (pl. `חֲכָמִים`), first occurrence noted as *apkallu*. **ummânu = `אֻמָּן`** (pl. `אֻמָּנִים`), noted as the cognate of `אָמוֹן` (משלי ח:ל) / `אָמָּן` (שיר השירים ז:ב) [cognate]: in Akkadian a learned expert, not a craftsman.
7. **ṭēmu in Gilg. I 8 = `דַּעַת`**, with a note: ṭēmu here is "report, information"; the shared table's `טַעַם` would be misread as "taste". Cf. Aramaic `בְּעֵל טְעֵם` (עזרא ד:ח), a calque of Akkadian *bēl ṭēmi*. Proposed below for the shared table.
8. **nagbu = `הַמַּעֲמַקִּים`** (Gilg. I 1, 3; Erra I 136): the subterranean water-source. Not `תְּהוֹם` (false echo; cf. *tâmtu*).
9. **Akkadian šukuttu (Erra) = `עֲדִי`**; **šiknu = `תֹּאַר`**; *šīr ilī* = `בְּשַׂר הָאֵלִים`.
10. **Sumerian zi "life" / nam-til₃ "life"** = `חַיִּים`; **Ziusudra** = `זִיוּסוּדְרָה` (shared). The name's meaning ("life of distant days") goes in a note, where it is compared with Ūta-napišti ("I found life").
11. **Bilingual lines** (Dynastic Chronicle): each tablet line (Sumerian or Akkadian) is translated separately, so the line remains the unit. Identical content gets identical Hebrew.

## Open questions
- K 11261 17′–18′ (Dynastic Chronicle): Sum. *mu₇-mu₇* / Akk. *hu-bur*. eBL lemmatises *hubur* as the underworld river Ḫubur. The context (Enlil, just before the flood) and Jacobsen's reading ("the [their?] noise") favour *hubūru* "din", the Atra-ḫasīs motif. Translated `הֲמֻלָּה` with `?` and both options in the apparatus.
- SKL 39 "a-ma-ru ba-ur₃-«ra-ta»": ETCSL marks the subordinating suffix as superfluous. We translate it as a main clause ("then the flood swept over").

## Progress log
- 2026-10-16: project created; sources checked; two new sources saved (`ORACC/cams-gkab--P363353--…`, `eBL-fragmentarium/Dynastic-Chronicle--ABC-18/`); records added to `_records-only--paid-and-restricted/`.
- 2026-10-16: §1–§6 drafted (annotated + translation). Coordinator note received: partial niqqud. §1–§2 were drafted fully vocalized; to be fixed in the review pass.
- 2026-10-16: §7–§9 drafted. Review passes done: (a) fidelity – every line checked against the edition; brackets per edition; (b) consistency – SKL 40 = Lagaš 1 = Death F 30/123 (`אחרי ששטף המבול`), SKL 1 = 41, §2 1–3 vs Death F 27–29 (differ only where the case ending differs); (c) Hebrew – niqqud reduced to names at first occurrence per section and ambiguous words (script in the session scratchpad; plene spelling restored by hand in §1–2). eBL notes re-checked after the coordinator regenerated the reading editions: one new note (Erra I 146, Cagni/Deller) added to the apparatus. **Status: all nine sections drafted and reviewed.**

- 2026-10-17 (Gilgameš corpus coordinator): §6 Gilg. I 7 and 26 harmonized with XI 9 and the creation corpus: *niṣirtu* = `נְצוּרָה` (was `סוֹד`, which is reserved for *pirištu*): I 7 `את הנְּצוּרָה ראה`, I 26 `[פתח] את פתח נצורתה`. I 1–28 are now also line 1–28 of `../../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-I.rtl.md`, which copies them verbatim (checked by `../../אפוס-גילגמש/verify.py`).
- 2026-10-21: cross-corpus harmonization (the lead's decisions, settled): (1) *uqnû* / ZA.GIN₃ = `סַפִּיר` [equivalent] instead of `לָזוּרִיט` in §6 Gilg. I 27, §7 Erra I 154 and §9 Uruk List o 10, each with the [equivalent] note (Exod 24:10, Ezek 1:26, Job 28:6). Gilg. I 27 is copied in the Gilgameš corpus (I 1–28): its copy must read `[שא] את לוח הַסַּפִּיר, וקרא בקול`. (8) *me* = `הַ־מֶה` in §3 Death F 16 (and its footnote), instead of `מֶה`.

## Parallels index
Tags per guidelines §6.4. "§" = section of this project; line numbers as in the edition.

| Line | Original | Hebrew rendering | Genesis (or other) verse | Tag | Comment |
|---|---|---|---|---|---|
| §1 SKL 1, 41; §8 BM 35572 14′–17′ | nam-lugal an-ta ed₃ / *šarrūta ištu šamê ušēridū* | המלוכה ירדה מן השמים | בראשית י:ח–י (נמרוד, `רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ`) | [absent] | In Genesis there is no kingship before the flood, and none sent from heaven. The first kingdom is postdiluvian and human. |
| §1 SKL 2–35 | five antediluvian cities | ארידו, בד־טיבירה, לרך, סיפר, שורופך | ד:יז (`וַיְהִי בֹּנֶה עִיר … חֲנוֹךְ`) | [divergence] | Five divine-kingship cities vs one city built by Cain. |
| §1 SKL 4–38; §8 K 11261 1′–9′; §5 8 | mu N i₃-ak (28,800 … 241,200) | עשה N שנה | בראשית ה (שנות חיים) | [divergence] | Reigns in multiples of *šar* (3,600) vs life-spans of hundreds. Total 241,200 years vs 1656 years (MT) to the flood. |
| §1 SKL 26; §8 K 11261 5′; §9 o 7 | Enmenduranna / Enmeduranki, 7th king, of Sippar (city of the sun) | אנמנדוראנה / אנמדורנכי | ה:כא–כד (חנוך, השביעי, 365 שנה, `לָקַח אֹתוֹ אֱלֹהִים`) | [divergence] | Standard comparison; the texts here give only name and number. |
| §1 SKL 32 n.; §8 K 11261 14′; §9 o 1–7 | 8 kings (WB) / 9 kings (Dynastic Chronicle) / 10 kings (W-B 62, Berossus) / 7 king–sage pairs | | בראשית ה (עשרה דורות) | [divergence] | The count of antediluvian generations varies inside the Mesopotamian tradition. |
| §1 SKL 39 | a-ma-ru ba-ur₃ | המבול שטף | ו:יז `הַמַּבּוּל` | [equivalent] | The flood as an epoch line only: no cause, no hero, no boat. |
| §1 SKL 40; §4 Lagaš 1; §3 Death F 30 | eĝer a-ma-ru ba-ur₃-ra-ta | אחרי ששטף המבול | ט:כח; י:א; י:לב; יא:י `אַחַר הַמַּבּוּל` | [equivalent] | The same era-boundary formula. |
| §6 Gilg. I 8 | *ša lām abūbi* | מלפני המבול | (the inverse of `אַחַר הַמַּבּוּל`) | [equivalent] / [absent] | Knowledge from before the flood carried over; Genesis transmits no antediluvian knowledge. |
| §1 SKL 41 | kingship descends again after the flood | | ט:א (`פְּרוּ וּרְבוּ`, = א:כח) | [divergence] | A second beginning: in Genesis the renewal is the blessing, in SKL it is kingship. |
| §1 SKL 45–47; §4 Lagaš 15–16, 117–124 | postdiluvian reigns of hundreds/thousands of years, father → son | | יא:י–כו; ו:ג (`מֵאָה וְעֶשְׂרִים שָׁנָה`) | [divergence] | Life shortens after the flood in both, at very different scales. |
| §2 Šuruppag 1–3; §3 Death F 27–29 | ud re-a ud su₃-ra₂ re-a | בימים ההם, בימים הרחוקים ההם | ו:ד `בַּיָּמִים הָהֵם` (and `אֲשֶׁר מֵעוֹלָם`) | [equivalent] | The formula that places a story in primeval time. |
| §2 Šuruppag 4–5 | ĝeštug₂ tuku "who has an ear" | הנבון | ו:ט `אִישׁ צַדִּיק תָּמִים` | [divergence] | The survivor's line is defined by wisdom (cf. Atra-ḫasīs "exceedingly wise"), Noah by righteousness. |
| §2 Šuruppag 6–8 | Ubar-Tutu → Šuruppag → Ziusudra; the father instructs | | ה:כה–כט (מתושלח → למך → נח; `זֶה יְנַחֲמֵנוּ`) | [divergence] | Three generations; the father speaks to the flood hero. Gilg. XI 23 and Dynastic Chronicle 12′: Ziusudra/Ūta-napišti is directly "son of Ubār-Tutu". |
| §3 Death F 15 | zi-ud-su₃-ra₂ ki-tuš-bi-a saĝ … ti | הגעת אל זיוסודרה במשכנו | ט:כט (`וַיָּמָת`) | [absent] | The flood survivor lives on and can be visited; Noah dies. |
| §3 Death F 16–18; §6 Gilg. I 8; §9 | rites/knowledge forgotten since the flood restored | | — | [absent] | No antediluvian knowledge is restored in Genesis. |
| §3 Death F 30 | puḫrum a-ma-ru | האספה – אחרי ששטף המבול | ו:ז; ו:יג (one God decides) | [divergence] | The flood is the assembly's decision. |
| §3 Death F 31; §4 Lagaš 4; §7 Erra 138 | numun nam-lu₂-ulu₃ / *zērīšin aṣbat* | זרע האנושות / את זרען … אחזתי בידי | ז:ג `לְחַיּוֹת זֶרַע עַל פְּנֵי כָל הָאָרֶץ` | [equivalent] | "Seed" is the object of destruction (Death), of survival (Lagaš), and of the god's own rescue (Erra). |
| §3 Death F 33, 126; §4 Lagaš 4; §7 Erra 145 | Ziusudra (dili) nam-til₃; taka₄; *ša ina abūbi isītā* | זיוסודרה לבדו … חי; הושאר; שנותרו מן המבול | ז:כג `וַיִּשָּׁאֶר אַךְ נֹחַ` | [equivalent] | "Alone" (dili) ↔ `אַךְ`. In Erra those left are "the people", plural. |
| §3 Death F 34–35, 127–128 | the gods' oath: no human will live (forever) again | השבעתם … לא יחיה עוד אדם | ו:ג `לֹא יָדוֹן רוּחִי בָאָדָם לְעֹלָם`; ג:כב `וָחַי לְעֹלָם`; ט:יא; ישעיהו נד:ט | [equivalent] / [divergence] | An oath after the flood; in Genesis/Isaiah its content is "no more flood", here "no more immortality". |
| §3 Death F 38–39 | gidim | אִט | ישעיהו יט:ג `הָאִטִּים` | [cognate/loan] | Shared rendering of *eṭemmu*. |
| §4 Lagaš 3 | nam-lu₂-ulu₃ da-re-eš | האנושות הוקמה להתקיים לעד | ח:כב; ט:יא | [divergence] | Permanence of humanity after the flood, as a fact rather than a divine promise. |
| §4 Lagaš 7 | nam-lu₂-ulu₃ mu-bi sa₄ | קראו לאנושות בשמה | ה:ב `וַיִּקְרָא אֶת שְׁמָם אָדָם` | [equivalent] | Naming humanity, here after the flood, as a second creation. |
| §4 Lagaš 11–13, 22–31 | no tools, canals or irrigation; people look to the rain | | ב:ה–ו (`כִּי לֹא הִמְטִיר … וְאָדָם אַיִן לַעֲבֹד`); ט:כ (`וַיָּחֶל נֹחַ אִישׁ הָאֲדָמָה`); ד:כב | [divergence] | A primeval world without agriculture; in Lagaš after the flood, in Genesis before man. Tools are a god's gift (Lagaš) vs human inventions (Gen 4). |
| §5 Ballad 9 | lu₂ an-še₃ bi₂-in-ed₂ (Etana) | האיש שעלה לשמים | ה:כד `לָקַח אֹתוֹ אֱלֹהִים` | [divergence] | Active ascent vs being taken. |
| §5 Ballad 10, 20 | zi-ud-su₃-ra₂-gin₇ nam-til₃ i₃-kiĝ₂-kiĝ₂ | שביקש חיים כמו זיוסודרה | ג:כב–כד; ט:כט | [absent] | Ziusudra as the model of the one who won life. |
| §5 Ballad 13 | lugal-e-ne dub-saĝ ud ul-le₂-a | המלכים, הראשונים של הימים הרחוקים | ו:ד `הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` | [equivalent] | The great ones of old as a closed past. |
| §6 Gilg. I 1, 3; §7 Erra 136 | *nagbu* | המעמקים | ז:יא; ח:ב `מַעְיְנֹת תְּהוֹם` | [equivalent] | Not rendered `תְּהוֹם` (false echo). |
| §6 Gilg. I 19–20 | *libittu*, *agurru* | לבנים; לבנים שרופות | יא:ג `וְנִשְׂרְפָה לִשְׂרֵפָה; וַתְּהִי לָהֶם הַלְּבֵנָה לְאָבֶן` | [cognate] (*libittu*) / [equivalent] | City of burnt brick: glory (Uruk) vs hubris (Babel). |
| §6 Gilg. I 21; §7 Erra 147, 162; §9 o 1–7 | *sebet muntalkū*; *sebet apkallū apsî*; ABGAL | שבעת היועצים; שבעת החכמים; החכם | ו:ד `הַנְּפִלִים … הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם`; ד:כ–כב | [divergence?] | Antediluvian culture-bearers: sages (Mesopotamia) vs mighty men of name (Gen 6:4) and Cainite inventors (Gen 4). The "sent down / did not come up" of Erra 147 vs `נְפִלִים` is speculative. |
| §6 Gilg. I 21 | *uššu … nadû* | את אֻשֶּׁיהָ … הניחו | עזרא ה:טז `יְהַב אֻשַּׁיָּא` | [cognate] | Aramaic, not Genesis; noted for the lexicon. |
| §7 Erra 132 | *āgugū-ma … aškuna abūba* | זעמתי … וחוללתי מבול | ו:יג (`חָמָס`); ישעיהו נד:ט (`מִקְּצֹף`); תהלים כט:י (`לַמַּבּוּל יָשָׁב`) | [divergence] | The flood as the god's anger, the god rising from his seat; Ps 29:10 enthrones YHWH over the flood. |
| §7 Erra 133, 136 | *šipīt šamê u erṣeti uptaṭṭir* | תפר השמים והארץ נפרם | ז:יא `נִבְקְעוּ … וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` | [equivalent] | The flood as a tearing of the cosmos. |
| §7 Erra 134–135 | stars displaced, furrow barren "forever" | | ח:כא–כב (`לֹא אֹסִף לְקַלֵּל עוֹד אֶת הָאֲדָמָה`; `לֹא יִשְׁבֹּתוּ`) | [divergence] | Genesis guarantees cosmic and agricultural order after the flood; Erra leaves it damaged. |
| §7 Erra 137 | *šiknāt napišti* | בעלי הנפש | ז:כב; ט:טו `נֶפֶשׁ חַיָּה` | [cognate] (*napištu*) / [equivalent] | |
| §7 Erra 140 | the god's image (*šukuttu*, *šiknu*) damaged by the flood | עדיי … תוארו האפיל | ה:ג; ט:ו `בְּצֶלֶם אֱלֹהִים` | [divergence] | Conceptual only (*ṣalmu* is not in the text). |
| §7 Erra 146 | *ušatbā kakkīya … uḫallaq rēḫa* | אילו הנפתי … הייתי מאבד את השארית | ח:כא `וְלֹא אֹסִף עוֹד לְהַכּוֹת אֶת כָּל חַי` | [equivalent] | Divine restraint after the flood: calculation vs promise. |
| §7 Erra 170–172 (note) | renewed flood if Marduk rises again | המים יעלו ויעברו על הארץ | ט:יא `וְלֹא יִהְיֶה עוֹד מַבּוּל` | [divergence] | |
| §8 BM 35572 10′–11′ | *napḫar ṣalmat qaqqadi ana šēpīšu ukannišū* | את כל שחורי הראש לרגליו הכניעו | א:כח `וּרְדוּ` | [divergence] | Dominion of king over men vs man over animals. |
| §8 K 11261 12′ | Ziusudra son of Ubar-Tutu, king | זיוסודרה, בן אובר־טוטו, המלך | ה:כח–לב (נח בן למך) | [divergence] | The flood hero as the last antediluvian king. |
| §8 K 11261 17′–18′ | mu₇-mu₇ / *ḫubūru*(?) | השאון(?) / ההמולה(?) | ו:א (`הֵחֵל הָאָדָם לָרֹב`); ו:ה; ו:יא (`חָמָס`) | [divergence] | Noise vs moral corruption as the flood's cause (if the reading is right). |
| §9 o 8 | the era after the ruling; Uruk's first postdiluvian sage | | י:י `וְאֶרֶךְ` | [divergence] | Uruk/Erech among the first postdiluvian cities in both. |
| §9 o 12; §7 Erra 147 | *ummânu* | אֻמָּן | משלי ח:ל `אָמוֹן`; שיר השירים ז:ב `אָמָּן` | [cognate] | Outside Genesis. |

## Proposals for the shared renderings

| Akkadian / Sumerian | Proposed Hebrew | Reason | Lines |
|---|---|---|---|
| Sum. *a-ma-ru ba-ur₃* | הַמַּבּוּל שָׁטַף | ur₃ "sweep over, level"; `שָׁטַף` is not a Genesis word, so no false echo. | SKL 39 |
| Sum. *eĝer a-ma-ru ba-ur₃-ra-ta* | אַחֲרֵי שֶׁשָּׁטַף הַמַּבּוּל | Fixed formula, shared by SKL 40 and Lagaš 1; should be identical in project 3 (Sumerian Flood Story) if it occurs there. | SKL 40; Lagaš 1; Death F 30, 123 |
| *lām abūbi* | לִפְנֵי הַמַּבּוּל | Counterpart of the above. | Gilg. I 8 |
| *ṭēmu* (sense "report, information") | דַּעַת (note: טַעַם) | `טַעַם` in modern Hebrew reads "taste"; the shared entry already allows `דַּעַת` "by context". Add the sense "report" explicitly, with `בְּעֵל טְעֵם` (עזרא ד:ח) as evidence. | Gilg. I 8 |
| *apkallu* (Sum. abgal) | חָכָם, pl. חֲכָמִים | Needed by projects 2 (XI 183 *apkal ilī*), 1 and 5 (Berossus' sages). Not `נְפִילִים`/`גִּבּוֹר` (false echo of Gen 6:4). | Erra 162; Uruk list o 1–8 |
| *ummânu* | אֻמָּן, pl. אֻמָּנִים | [cognate] `אָמוֹן`/`אָמָּן`; distinct from *apkallu*. Gilg. XI 86 (*mārī ummânī* "craftsmen") would then read `בְּנֵי הָאֻמָּנִים`. | Erra 147; Uruk list o 12–r 3 |
| *nagbu* | הַמַּעֲמַקִּים | Not `תְּהוֹם` (reserved as the note-cognate of *tâmtu*). | Gilg. I 1, 3; Erra 136 |
| *ḫasīsu* / Sum. ĝeštug₂ (tuku) | תְּבוּנָה / נָבוֹן | So that the meaning of Atra-ḫasīs ("exceedingly wise") is rendered with the same root wherever it is explained. | Šuruppag 4–5; Gilg. I 2, 4 |
| Sum. *numun nam-lu₂-ulu₃* | זֶרַע הָאֱנוֹשׁוּת | Matches *awīlūtu* = `הָאֱנוֹשׁוּת`; [equivalent] with ז:ג `זֶרַע`. Also in the Sumerian Flood Story (C 23 per the ETCSL README). | Death F 31; Lagaš 4 |
| Sum. *gidim* | אִט | Same as *eṭemmu* in the shared table. | Death F 38–39 |
| *libittu* | לְבֵנָה | [cognate]; for Atra-ḫasīs (the brick of the birth goddess) and Gilg. XI 325. | Gilg. I 19–20 |
| *puḫrum* (as a Sumerian loanword) | אֲסֵפָה | Confirms the shared entry for Sumerian contexts too. | Death F 7, 30 |

## Lessons for the guidelines
- **eBL Fragmentarium genre query** finds whole text families: `GET /api/fragments/query?genre=CANONICAL:Historiography:Chronicles` (URL-encode the colon path) lists every chronicle fragment, with genre sub-tags (e.g. "Dynastic Chronicle"). Worth adding to §4.6.
- **ORACC CAMS/GKAB** (`cams-gkab.zip`) contains Seleucid Uruk scholarly tablets with CC0 data, among them the Uruk List of Kings and Sages (P363353) and an Uruk King List (P363352); and Neo-Assyrian Huzirina tablets of Erra I (STT 1 16). The per-text HTML view (`https://oracc.museum.upenn.edu/<project>/<P>/html`) **does** work and gives the project's translation (the JSON zips have none).
- **eBL lemmatisation can be wrong in fragments**: K 11261 18′ *hu-bur* is lemmatised as the river Ḫubur where the context needs *ḫubūru* "din"; Gilg. I 18 *elī-ma* is lemmatised as the preposition *eli*. Always check the lemma against the normalisation and the context.
- **Niqqud**: drafting fully vocalized and stripping afterwards produces defective spelling (`הדבור`, `תלקח`). Draft directly in plene spelling, and vocalize only names and ambiguous words.
- **Maqaf is inside the Unicode niqqud block** (U+05BE). A niqqud-stripping regex `[֑-ׇ]` deletes the maqaf; use `[֑-ֽֿ-ׇ]`.
- **Jacobsen 1939** (open, ISAC) transcribes and translates W-B 62 and K 11624 in its notes (pp. 58–60, 69–77). Useful wherever the antediluvian king tradition matters (projects 3 and 5).
- 2026-10-24 (Round 4 run 5, the netherworld corpus's coordinator): §7 (Erra I 126–162) aligned with `../../העולם-התחתון/5-ארה-ואישום/`, which shares the 37 lines (its renderings §12.6 lists every change and its reason): 28 `>` lines revised in `annotated.rtl.md` and `translation.rtl.md` (the speech formula `שָׂח` / `דבר דיבר`; *simtu* `ההולם`; *leqû* `לקח טינופת`; *agāgu* `קצפתי`; Irkalla `אִירְכַּלָּה`; *šiknāt napišti* `בעלי הנפש`; *ṣabātu* `אחזתי`; *epēšu* `עשיתי`; *zīmu* `זיו`; Girra `גִּירָּה`; *kakkū* `כלי־נשקי`; *qabû* `אמרתי`; *elmēšu* `עִנְבָּר`; *ebbu* `צח`; *kânu* D `מכוננים`; *bānû* `בונה`; *binûtu* `צאצאי`; the reserved strings `עולם`, `תחתית`, `שבים`); kept the formula `וחוללתי מבול` and `האֻמָּנִים`. The parallels rows of 138 and 137 and the corpus `parallels-index.md` updated; `verify ER --strict` (netherworld corpus) checks that the two copies stay identical.
