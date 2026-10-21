# Project: Atra-ḫasīs, Tablets I–III → Hebrew

Read `../../translation-guidelines.md`, then `../corpus.md` and `../renderings.md` (shared, binding), then this file.

## The whole epic (scope)
- **Text:** *Atra-ḫasīs* (*inūma ilū awīlum*, "When the gods were man"), the whole epic: Tablet I (the gods' labour, the rebellion, the creation of man, the first round of noise and the plague), Tablet II (the second and third rounds: drought and famine; Enki's conflict with Enlil; the decision to send the flood and the oath), Tablet III (the flood, the sacrifice, the new order).
- **Base recension:** the Old Babylonian Sippar recension copied by Ipiq-Aya (c. 1640 BCE), with the MB, NA ("Assyrian recension", ms. S) and LB witnesses where the OB text is broken or where they add lines.
- **Work is split by tablet.** Each tablet has its own section below and its own working files (`annotated-I.rtl.md`, `translation-I.rtl.md`, etc.). Each tablet's translator edits only that tablet's section of this file.
- **Shared renderings inside the epic** (the noise passage, the speech formulas, the elders/heralds passage, Enki's "long-haired heroes") are recorded in `renderings.md` and must be identical across the three tablets.

## Tablet I

### Scope
The whole of Tablet I (OB colophon: "Tablet 1 of *inūma ilū awīlum*, its lines are 416", Ipiq-Aya, reign of Ammī-ṣaduqa, 17th cent. BCE): the gods' labour and the division of the universe (1–38); the Igigi's revolt and the siege of Ekur (39–110); Nusku's embassy and Enlil's despair (111–173); Enki's proposal and the creation of man from clay and the slain god's flesh and blood (174–246); the birth-goddesses, the first births and the rules of birth and marriage (247–308); a broken stretch (309–351); the multiplying of mankind, its noise, Namtar's plague, Atra-ḫasīs's first appeal and its success, and "1,200 years had not passed" (352–416).

Working files: `annotated-I.rtl.md` (per line, with apparatus), `translation-I.rtl.md` (clean reading translation).

### Base text and witnesses
- **Base:** eBL corpus, *Atraḫasīs* OB I (ed. E. Jiménez and G. Rozzi, translation B. R. Foster): `sources/eBL/Atrahasis-OB-I/`. 333 lines, normalized. Manuscripts: SipOB1 = BM 78941 (L&M A, Ipiq-Aya), SipOB2 = BM 92608 (E), SipOB3 = BM 17596.A (F), SipOB4 = BM 78257 (G), SipOB5 = BM 22714.B. Its line commentary (much fuller than `reading-edition.md`; it was extracted from `_raw/chapter-display.json`) is the rank-4 source.
- **Second opinion and the end of the tablet:** SEAL no. 1515 (Wasserman & Streck, 2024–25), composite score of Tablet I, all periods, with translation and lemmas: `sources/SEAL/Atrahasis-OB/node-1515--…`. It covers L&M 1–416 and adds lines found only in later witnesses ("19a", "260a–g", "363a–f", …).
- **Later recensions used to fill gaps** (marked in the text as such): eBL SB I (= OB 1–131), SB II (= OB 111–234), SB III (= OB 231–305); MB Bab₂ (Babylon, school tablet; = OB 38–67); the NA "Assyrian recension" (L&M ms S+T, via SEAL) for the plague and the seven-and-seven births; NA Q, V, z (via SEAL).

### Line numbering
- **eBL numbering is the main number for 1–333.** It is Lambert & Millard's (L&M) numbering, with three differences: (a) some L&M line pairs are one verse in eBL (66–67, 113–114, 147–148, 159–160, 215–216, 233–234, 243–244, 278–279, 284–285, 286–287, 292–293, 297–298); (b) **eBL 183–261 run 1 to 4 lines behind L&M**: eBL 183–186 = L&M 184–187 (L&M 183 is eBL 186, in another order), eBL 187–191 = L&M 188–192, L&M 193–195 do not exist in eBL (George 2003: the SB text shows there is no gap), eBL 192–256 = L&M 196–260, eBL 257–261 are a lacuna, eBL 262–271 = L&M 261–270; (c) from eBL 272 the two coincide again. The L&M/SEAL number is given in the apparatus whenever it differs ("L&M 208"), since the scholarly literature cites L&M.
- **334–416 are numbered by L&M/SEAL**, because eBL's edition stops at 333. The text there is SEAL's (ms A, supplemented by NA S+T, Q, V, z and bd).
- **Lines from later recensions** that have no OB equivalent get the number of the preceding main line plus a Hebrew letter ("256א–256ז"), with SEAL's own label in the note ("SEAL 260a–g"; in 1–181 the two coincide, e.g. 110א = SEAL 110a). They are marked `[נוסח אשורי]` / `[נוסח בבלי תיכון]` / `[נוסח בבלי חדש]` in the annotated file and "(נוסח אשורי)" in the clean translation. Where the OB line exists but is broken and a later recension fills it, the line keeps its number and the filling is in [brackets] with the source named in the note (e.g. 51–56 from MB Bab₂).

### Sources consulted (Tablet I)
eBL OB I + commentary; eBL SB I, II, III and MB Bab₂ with their commentaries; SEAL 1515 (translation and lemmas); eBL glossaries (stems); Sefaria (Klein, BDB) for the cognates *eṣēru*/יצר, *bâšu*/בוש, *durāru*/דרור, *qarāṣu*/קרץ, *zabālu*/סבל. Modern translations used for comparison: Foster (eBL), Wasserman & Streck (SEAL); George's notes on the SB recension (via eBL).

### Decisions (Tablet I)
1. **I 1 *inūma ilū awīlum*:** `כְּשֶׁהָאֵלִים הָיוּ אָדָם` (eBL, following the study it cites as "LS25: 652": *awīlum* is a predicative nominative, "being man"; close to von Soden's nominal reading). The comparative reading ("like men", Lambert; the NA incipit *kī amēli*) is given in the apparatus and the clean translation's footnote. *awīlum* = `אָדָם` [equivalent] (shared).
2. ***lullû* = `קַדְמוֹן`** (noun), distinct from *awīlu* = `אָדָם`; see `renderings.md`. Proposed for the shared file.
3. ***banû* = `בָּנָה`** [cognate] throughout (create, build), not `בָּרָא` / `יָצַר`.
4. **The *ṭēmu* / *eṭemmu* pun:** `טַעַם` / `אִט` (shared); the slain god's name: `וֵא` + apposition `אֵל` (eBL: *wê ila*, "Wê, a god"), not one name וֵא־אִילָא; see the proposal below.
5. ***Bēlet-kala-ilī* (I 243–244)** is translated in the text (`גְּבֶרֶת־כָּל־הָאֵלִים`), since the line is about the meaning of the new name; the Akkadian form is in the note.
6. **I 352:** the text has "600 years" ([…] 600 *šanātum*), not 1,200; the 1,200 years (600+600) are at I 416 (= II i 1). Both are listed against Gen 6:3.

### Progress log (Tablet I)
- 2026-10-16: sources read (eBL OB I + full commentary, SB I–III, MB Bab₂, SEAL 1515); line mapping eBL ↔ L&M established; `renderings.md` Tablet I section written (including the epic's recurring formulas, so the Tablet II translation can follow them).
- 2026-10-16: `annotated-I.rtl.md` drafted in seven sections: 1–56, 57–110g, 111–173, 174–246, 247–308, 309–351, 352–416 + colophon (≈400 entries, incl. the later-recension lines).
- 2026-10-16: three review passes. (a) Fidelity: brackets checked against eBL/SEAL; restorations from later recensions labelled. (b) Consistency: every repeated line compared mechanically (44/46/58/60, 80–83, 93–96, 124–143, 146–152 / 159–165, 184–186 / 191–193, 202–213 / 217–226, 374–384 / 389–399 / 403–411): identical where the Akkadian is identical, differing only where it differs (e.g. 210 *i nišme* "let us hear" / 223 *išmû* "they heard"). Aligned with Tablet II on *niššīku* (נָסִיךְ), *sukkallu* (וְזִיר), *šerru* (עוֹלָל), *nagbu* (מַעֲמַקִּים), *tenēšētu* (בְּרִיּוֹת). (c) Hebrew: per the coordinator, niqqud reduced to partial (names at first occurrence, ambiguous words: `נִשָּׂאֶנּוּ`, `נָבֹלָּה`, `אִט`, `לַחַי`, `אוֹתוֹ`, `צָרָה`, `הַקְּדֵשָׁה`…); spelling made plene.
- 2026-10-16: `translation-I.rtl.md` written (intro, 8 section headings, 12 footnotes).
- 2026-10-21: cross-corpus harmonization (the lead's decision 5, settled): *šiptu* = `קֶסֶם` instead of `לחש` (249, 250a, 251). 271 *kuzbu* was `קסמה` and is now `עֲגָבֶיהָ` (the lead, 2026-10-21: *kuzbu* = `עֲגָבִים` as in Gilgameš and the everyday-voices corpus; `קֶסֶם` stays for *šiptu*).
- **Open:** Lambert & Millard's own text for 334–416 was not available (SEAL used); the MB Babylon tablets of Márquez Rowe 2016 (`Marquez-Rowe-2016--…/`, PDF) were not collated beyond what eBL MB Bab₂ and SEAL already include; `eBL/Atrahasis-MB-*` other than Bab₂ were checked and do not belong to Tablet I.

### Parallels index (Tablet I)

| Line (eBL; L&M) | Original | Hebrew rendering | Genesis (or Bible) | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *inūma ilū awīlum* | כשהאלים היו אדם | ב:ה `וְאָדָם אַיִן לַעֲבֹד`; א:כו | [equivalent] / [divergence] | Before man, the gods did man's work. *awīlum* singular-collective like `אָדָם`. |
| 2–6, 186 | *dullu*, *tupšikku*; *šupšik ilim awīlum lišši* | עמל, סל; את סל האל – האדם ישא | ב:ה, טו `לְעָבְדָהּ`; ג:יז–יט, כג | [divergence] | Labour is man's purpose in both; here it is the gods' burden transferred to him. *zabālu* = סבל [cognate]. |
| 25–26 | *Idiqlat*, *Purattu* | חִדֶּקֶל, פְּרָת | ב:יד | [cognate] / [divergence] | Dug by the gods vs. flowing from Eden. |
| 41, 44, 62 | *alkānim i …*; *i niblula* | לכו ונ…; נָבֹלָּה | יא:ג–ז `הָבָה … וְנָבְלָה`; יא:ט | [equivalent] (cohortative) / [cognate] (*balālu* = בלל) | Divine/human plural plotting; the verb "mix" recurs in the creation of man (207, 222). |
| 77, 179, 238, 352–363 | *rigmu*, *ḫubūru* | שאון, המולה | ו:יא, יג `חָמָס`; ו:ה | [divergence] | The noise moves from the rebel gods (77) to man at his creation (238), then brings plague (and in III the flood). |
| 179, 358 | *tukkum kabit*; *iktabta rigim awīlūti* | הזעקה כבדה; כבד (עליי) שאון האנושות | יח:כ `זַעֲקַת סְדֹם … כִּי כָבְדָה` | [equivalent] / [divergence] | A "heavy" outcry reaches the deity before a punishment. |
| 183, 189 | *libnī-ma lullâ awīlam*; *bāniat awīlūti* | תבנה קדמון – אדם; בונת האנושות | א:כו `נַעֲשֶׂה אָדָם`; ג:כ `אֵם כָּל חָי`; ב:כב `וַיִּבֶן` | [equivalent] / [divergence]; *banû* = בנה [cognate] | Creation decided in a divine council; purpose: labour vs. dominion and image. |
| 188 | *tabsūtu* | מיילדת | לה:יז | [equivalent] | |
| 199, 207, 222, 230 | *ṭīdu/ṭiṭṭu*, *ruʾtu* | טיט, רוק | ב:ז `עָפָר מִן הָאֲדָמָה … וַיִּפַּח`; איוב לג:ו `מֵחֹמֶר קֹרַצְתִּי` | [cognate] (טיט) / [divergence] | Clay + god's flesh and blood + gods' spittle vs. dust + divine breath. |
| 202, 217 | *warḫum sebūtum u šapattum* | בראש החודש, בשביעי ובכסה | ב:ב–ג (seventh day) | [divergence]; *šapattu* ~ `שַׁבָּת` [cognate?] | Lunar purification days fixed at creation vs. the seventh day of rest. |
| 204, 220, 235 | *ilam ištēn liṭbuḫū*; *ṭabāḫu* | אל אחד יטבחו | — | [absent]; *ṭabāḫu* = טבח [cognate] | No slain god in Genesis. |
| 206, 221 | *ina šīrīšu u dāmīšu* | בבשרו ובדמו | ט:ד–ו; ויקרא יז:יא; ו:ג `בְּשַׁגַּם הוּא בָשָׂר` | [divergence]; *damu* = דם [cognate] | Blood as life and as link to the divine (image) vs. literal divine blood. |
| 210 | *aḫriātiš ūmī* | לאחרית הימים | מט:א `בְּאַחֲרִית הַיָּמִים` | [cognate] | Same idiom. |
| 211–213, 219, 235 | *eṭemmu*; *ṭēmu* | אִט; טעם | ב:ז `נִשְׁמַת חַיִּים`; ישעיהו יט:ג `הָאִטִּים` | [cognate/loan] / [divergence] | The pun ṭēmu/eṭemmu kept as טעם/אט. |
| 212 | *ittu* | אות | ד:טו; ט:יב–יג | [cognate] / [divergence] | The sign is inside man vs. given externally. |
| 233–234 | *šipram … ušaklil* | מלאכה ציוויתם עליי – והשלמתי | ב:א–ב `וַיְכַל … מְלַאכְתּוֹ` | [equivalent] | Completion formula of the work of creation. |
| 239 | *apṭur ullam andurāram aškun* | התרתי את העול, כוננתי דרור | ה:כט `וּמֵעִצְּבוֹן יָדֵינוּ`; כז:מ `וּפָרַקְתָּ עֻלּוֹ`; ויקרא כה:י | [cognate] (*andurāru* = דרור, *ullu* = עֹל) / [divergence] | Relief from toil: for the gods through man vs. for man through Noah. |
| 243–244 | *pānā … inanna … lū šumki* | לפנים … עתה … יהי שמך | יז:ה; לב:כט; ב:כג; ג:כ | [equivalent] | Renaming formula. |
| 252 | *kerṣī uktarriṣ* | קריצות קרצה | איוב לג:ו `קֹרַצְתִּי` | [cognate] | |
| 255, 288, 294 | *libittu* | לבנה | יא:ג | [cognate] | Birth-brick vs. building-brick. |
| 256א–ז (SEAL 260a–g, NA only) | *7 u 7 … zikarī … sinnišāti … šināšan* | שבע ושבע … זכרים … נקבות … שתיים שתיים | א:כז `זָכָר וּנְקֵבָה`; ז:ב–ג `שִׁבְעָה שִׁבְעָה … זָכָר וּנְקֵבָה`; ז:ט, טו `שְׁנַיִם שְׁנַיִם` | [equivalent] / [divergence] | The ark's counts appear here at the first creation of mankind. *zikaru* = זכר [cognate]. |
| 266, 288 | *uṣurāt nišī uṣṣar*; *īṣir* | צורות האנשים צרה; צרה בקמח | ב:ז `וַיִּיצֶר`; ו:ה; ח:כא `יֵצֶר` | [cognate] (*eṣēru* = יצר) / [divergence] | The goddess draws the "designs" (laws of life) of mankind vs. man's moral "inclination". |
| 266ב (NA), 294 | *7 / 9 ūmī linnadi libittu* | שבעה / תשעה ימים תונח הלבנה | ויקרא יב:ב | [divergence] | Seven/nine days after birth. |
| 270–271 | *īnšu lišši*; *lilqe ardatam kuzubša* | ישא את עיניו; ייקח את העלמה – את קסמה | לט:ז `וַתִּשָּׂא … אֶת עֵינֶיהָ`; ו:ב `וַיִּקְחוּ לָהֶם נָשִׁים` | [cognate] (idiom) / [equivalent] | |
| 276, 300 | *iḫtīrū aššatum u mussa* | בחרו זה בזה האישה ובעלה | ו:ב `מִכֹּל אֲשֶׁר בָּחָרוּ`; ב:כד | [equivalent] / [divergence] | Marriage instituted at creation. |
| 282 | *silītam ipte* | את השליה פתחה | כט:לא; ל:כב `וַיִּפְתַּח אֶת רַחְמָהּ` | [equivalent] | |
| 289 | *anākū-mi abni īpušā qātāya* | אני היא שבניתי, ידיי עשו | תהלים קיט:עג; איוב י:ח | [equivalent] | (Outside Genesis.) |
| 290 | *qadištu* | הַקְּדֵשָׁה | לח:כא | [cognate] | Meaning debated. |
| 303 | *tišēt ūmī liššakin ḫidûtum* | תשעה ימים תיכון שמחה | כט:כז `מַלֵּא שְׁבֻעַ זֹאת` | [divergence] | Wedding feast: nine days vs. a week. |
| 339 | *bubūtiš nišī tītiš ilī* | לרעבון האנשים, למזון האלים | ג:יט, כג | [divergence] | Man farms to feed himself and the gods. |
| 352, 416 | *[…] 600 šanātum*; *ul illik 600+600 šanātum* | […] שש מאות שנה; לא חלפו שש מאות ושש מאות שנה | ו:ג `מֵאָה וְעֶשְׂרִים שָׁנָה` | [divergence] | A fixed span between multiplication and divine reaction. (Brief's "1,200 at I 352": the text has 600 at 352, 1,200 at 416 = II i 1.) |
| 353 | *[mātum irtapiš] nišū imtīdā* | [הארץ רחבה], האנשים רבו | ו:א `כִּי הֵחֵל הָאָדָם לָרֹב`; א:כח; ט:א, ז | [equivalent]; *mâdu* ~ מְאֹד [cognate] | Blessing in Genesis, problem here. |
| 355, 168 | *ittaʾdar* | נטרד | ו:ו `וַיִּתְעַצֵּב אֶל לִבּוֹ` | [equivalent] | The god's distress at mankind. |
| 364–367 | *bēl tašīmti Atra-ḫasīs*; *ilšu Enki … ītammu ittišu* | בעל התבונה, אתרחסיס; אלו אנקי … היה מדבר עמו | ו:ח–ט `נֹחַ … צַדִּיק תָּמִים … אֶת הָאֱלֹהִים הִתְהַלֶּךְ` | [divergence] | Hero introduced at the crisis: wisdom and a personal god vs. righteousness. |
| 384 | *lišakkil qāssu* | ויסיר את ידו | (avoided: ו:ז `אֶמְחֶה`) | — | Echo deliberately not created. |
| 402 | *ibnû bīssu* | בנו את ביתו (לנמתר) | ח:כ `וַיִּבֶן נֹחַ מִזְבֵּחַ` | [divergence] | Building for the god who strikes. |

### Proposals for the shared renderings (Tablet I)

| Akkadian | Proposed Hebrew | Reason | Lines |
|---|---|---|---|
| *lullû* | קַדְמוֹן | Must differ from *awīlu* = אָדָם (I 183 has both). Avoids the Kabbalistic "אדם קדמון" and the root יצר (reserved for *eṣēru*). | I 182–183, 190; also Enūma eliš VI, Gilg. |
| *banû* | בָּנָה | [cognate]; Hebrew uses it of creating the woman (ב:כב). Not בָּרָא / יָצַר. | passim |
| *eṣēru*, *uṣurtu* | צָר, צוּרָה (note: cognate יצר) | Cognate of יצר; keeps the sense "draw a design". | I 266, 288 |
| *balālu* | בָּלַל | [cognate] (יא:ט). | I 62, 130, 207, 209, 222, 227 |
| *ṭabāḫu* | טָבַח | [cognate]. | I 204, 220, 235 |
| *Wê-ila* (shared row "וֵא־אִילָא") | **וֵא** (+ apposition אֵל) | eBL (after Moran, Alster, Krebernik): the name is *Wê*; *ila* is "a god". Change the shared name row. **Accepted** (shared §1, 2026-10-16). | I 47, 219 |
| *Bēlet-kala-ilī* | גְּבֶרֶת־כָּל־הָאֵלִים (in the text, where the naming is the point) | Exception to the "translate Bēlet-ilī in a note" rule, for the naming line only. | I 243–244 |
| *eṭemmu* singular | אִט (vocalized) | The shared row gives אִט / אִטִּים; vocalize the singular always (otherwise read as "slowly"). | I 211, 213, 224, 226 |
| *šapattu* | כֵּסֶה (full-moon day) | Biblical term (תהלים פא:ד); note *šapattu* / שַׁבָּת. | I 202, 217 |
| *ittu* | אוֹת | [cognate]. | I 212, 225 |
| *andurāru*, *ullu* | דְּרוֹר, עֹל | [cognates]. | I 239 |
| *ḫupšu* | חֲבוּרַת הָעֲמֵלִים (not חָפְשִׁי) | False friend. | I 145, 158 |

### Lessons for the guidelines (Tablet I)
- **The eBL `reading-edition.md` drops most of the line commentary** and leaves double-numbered lines ("66-67") as `### ?` with an empty normalization. The full commentary is in `_raw/chapter-display.json` (`lines[].variants[].note.parts`), and `chapter.atf` has every line. `ebl_fetch.py` should export both (a short extractor is in this session's notes: walk `parts`, joining `StringPart`/`EmphasisPart`/`BibliographyPart`).
- **eBL renumbers parts of OB Atra-ḫasīs I** (eBL 183–271 ≠ L&M), but its own notes cite L&M numbers. Always establish a line concordance before translating a text that the literature cites by an older numbering.
- **False friends found:** *ḫupšu* (labour gang) ≠ `חָפְשִׁי`; *niššīku* ≠ `נָסִיךְ` etymologically (sound-likeness only); *kabāsu* "tread" ~ `כבש` (sense "subdue" would mislead); *amāru* (again, I 109).
- **Cognates worth reusing:** *eṣēru* = יצר; *karāṣu* = קרץ (Job 33:6); *balālu* = בלל; *bâšu* = בוש; *andurāru* = דרור; *zabālu* = סבל; *ṭabāḫu* = טבח; *ittu* = אות; *aḫrât ūmī* = אחרית הימים; *simānu* = זמן; *eršu* = ערש.
- **Partial niqqud and plene spelling go together**: stripping niqqud from a vocalized draft leaves defective spellings (`כסא`, `ודבר`, `האדנות`) that must be made plene by hand. Draft unvocalized from the start.

## Tablet II

### Scope
The whole of Tablet II (OB colophon, ms B: "Tablet 2 of *inūma ilū awīlum*, [its lines]: 439", Ipiq-Aya, month Šabāṭu, Ammī-ṣaduqa year 12): the second round of noise (1,200 years) and the drought and famine sent against mankind; the Assyrian recension's fuller plague list; the plague of swollen bellies (OB ms D₀ = Schøyen MS 2950); the elders and the heralds: the cult of Adad and the end of the drought; the third round of noise (3 × 3,600 years) and the cosmic guard (Anu and Adad above, Sîn and Nergal / Enlil in the middle, Ea at the bolt of the sea); the famine years, up to "the sixth year" when the daughter is served up for dinner; Atra-ḫasīs's weeping by the river, his offering, and the messages between him and Enki through the long-haired *laḫmu*; Enki's release of the fish; Enlil's anger, the quarrel, and the oath "of the flood"; the gods' demand that Enki swear, and his refusal ("Shall I raise my hand against my people?"); the end: "the gods commanded total destruction; Enlil did an evil deed to the people".

Working files: `annotated-II.rtl.md`, `translation-II.rtl.md`.

### Base text and witnesses
- **Base:** SEAL no. 39732, *Atraḫasis II (all periods)*, Wasserman & Streck (uploaded 10–11/08/2026): composite score with translation and per-word lemmas, `sources/SEAL/Atrahasis-OB/node-39732--…`. Manuscripts (SEAL sigla, = Lambert & Millard where they exist): **B** (OB Sippar, Ipiq-Aya, Tablet II; cols. i, ii, vii, viii), **D** (OB Sippar; cols. i–viii), **D₀** (OB, Schøyen MS 2950 = CUSAS 10, 3), **H** (OB), **I** (OB), **C₀** (early OB "Larsa", Schøyen MS 5108 = CUSAS 10, 2; cols. i–iii, iv), **X-MB**, **Y-MB** (Middle Babylonian), **Q-NA**, **S+T+-NA** (the Neo-Assyrian "Assyrian recension", Nineveh, K 3399+ etc.), **be** (Late Babylonian), **bd** (a variant quoted in SEAL).
- **eBL:** the eBL corpus chapters of Atra-ḫasīs that exist (OB I, SB I–III, MB Bab₂, Priv, Ug₂) do **not** parallel Tablet II: SB I–III run parallel to OB Tablet I, and MB Priv is the flood warning (Tablet III). The eBL chapters "Old Babylonian II", "Neo-Assyrian I/II", "SB IV–X" exist as shells with manuscript lists but **no lines** (checked through the API, 2026-10-16). So SEAL is the only full edition. The eBL Fragmentarium transliteration of **K 3399+** (`sources/eBL-fragmentarium/atf/K.3399…`, ms S, cols. iv–vi) was used to check the Assyrian recension's lines (Seg. A 6a–B 18, E 78a–y, E 152–175): it reads S v 27' `i-na š[i-im-t]i` (SEAL: `i-na UD-[mi-šu]`) and S v 18' / vi 7' `e-reb` (SEAL: `e-kal`); both noted in the apparatus.
- **Wasserman 2020** (OBO 290), pp. 16–19: edition of C₀ iv (the Larsa recension's version of the end of Tablet II), with the L&M concordance "Atr. II viii 33–35" for Seg. I 3–5. Used for the end of the tablet and for *gamertu*.
- **Schøyen catalogue** (MS 2950, MS 5108) and **Márquez Rowe 2016** were read; they add no text for Tablet II beyond SEAL.

### Line numbering
- **SEAL's segment numbering is the main number** ("A 1", "E 161g", "H 22"). SEAL divides the tablet into segments A–I because the witnesses do not overlap continuously and the gaps between them are of unknown length; within a segment the numbering follows the OB manuscripts (in Seg. E, the LB manuscript be). Lines found only in a later witness have letter suffixes ("A 6a", "E 78q").
- In the annotated file each line also gives the **manuscript lines** (e.g. "B i 7; D i 7; Q obv. 15; S iv 40"), which is how Lambert & Millard and most literature cite Tablet II (L&M "II i" = B/D i, "II ii" = D ii, "II iii" = D iii, "II iv" = D iv / H, "II v" = D v, "II vi" = D vi / C₀ i–ii, "II vii" = B vii / D vii / C₀ iii, "II viii" = B viii / D viii). L&M's own line numbers are not available to us (paid; guidelines §9); the one concordance we have is Wasserman 2020: Seg. I 3–5 = L&M II viii 33–35, I 6–7 = II viii 36–37.
- Where SEAL quotes several manuscripts for a line, the translation follows **the oldest well-preserved witness** (OB > MB > NA/LB) unless SEAL's composite translation follows another; the variants that change the sense are translated in the apparatus.

### Decisions (Tablet II)
1. **Composite text, one line per segment number.** Variant manuscripts are not translated as separate lines; their differences are in the apparatus (`נוסח:`). Exception: where a later witness adds lines (S+T+ v 3–26, vi 7–15; X-MB in Seg. G), they are numbered and translated, marked `[נוסח אשורי]` / `[נוסח בבלי תיכון]` / `[נוסח בבלי מאוחר]` in both files, as Tablet I does.
2. **The noise passage, the elders/heralds passage and the speech formulas** follow Tablet I's renderings exactly (`renderings.md` I.1).
3. **Enki / Ea:** the OB manuscripts say Enki, the MB/LB/NA ones Ea. The Hebrew keeps whichever name the followed manuscript has (shared rule), so both appear; a first-occurrence note says they are the same god.
4. **Atra-ḫasīs's spellings** (*Atram-ḫasīs*, *Watram-ḫasīs* in D₀ and C₀, *Atar-ḫasīs* in S) are all `אַתְרַחֲסִיס` in the text; the spelling is in the apparatus.
5. ***rigmu*:** שָׁאוֹן for mankind's noise (A 5, A 7, E 60, E 66, E 69), *including* D 6, where mankind's *rigmu* is weeping (`שְׁאוֹנָהּ – בֶּכִי`): the point is that the same noise has become a cry. For one man's cry that Enki hears (E 108, E 119): קוֹל, with a note. For the heralds' proclamation (E 16, 32, 46): קוֹל, as Tablet I.
6. **The end of Tablet II and C₀ iv:** SEAL's Seg. I 3–5 are translated from B/D; the early-OB Larsa version (C₀ iv 1'–7', with "*abūbam ana ūm warḫim*") is translated in an appendix at the end of both files, because it is the same scene in another recension. C₀ iv 8'–19' (Atra-ḫasīs kneels before Ea; Ea's answer) belong to the beginning of the Tablet III story and are left to the Tablet III translator.

### Progress log (Tablet II)
- 2026-10-16: sources read (SEAL 39732 in full, SEAL 1518, Wasserman 2020 on C₀, eBL K 3399+, eBL corpus checked for OB II / NA / SB IV–X: empty). `renderings.md` Tablet II section written, following Tablet I's I.1.
- 2026-10-16: drafted A 1–23, B 1–18, C 1–7, D 1–11, E 1–62 in `annotated-II.rtl.md`.
- 2026-10-16: drafted E 63–131 (from here on translation lines unvocalized, per the coordinator's niqqud note).
- 2026-10-16: drafted E 132–175c and F 1–17.
- 2026-10-16: drafted G 1–97.
- 2026-10-16: drafted H 1–36, I 1–7i and the appendix (C₀ iv 1'–7'). First draft of the whole tablet complete.
- 2026-10-16: review passes (a) fidelity, (b) consistency (aligned with Tablet I's finished lines: I 357, 358, 359, 376–388, 412–415, 236–239 eBL), (c) Hebrew (niqqud stripped to partial, ktiv male); `translation-II.rtl.md` produced (488 numbered lines, 11 footnotes); parallels index and proposals written. The coordinator's regenerated eBL notes do not affect Tablet II (no eBL corpus lines used).

### Parallels index (Tablet II)

| Line (SEAL) | Akkadian | Hebrew rendering | Bible verse | Tag | Comment |
|---|---|---|---|---|---|
| A 1, E 63 | *ul illik 600+600 šanātum*; *šelalti šār šanāti* | לא חלפו שש מאות ושש מאות שנה; שלושה שָׁרִים של שנים | Gen 6:3 | [divergence] | A span of years before the god reacts; here cosmic intervals (600 → 1,200 → 10,800), there human life-span (120). |
| A 2, E 64 | *mātum irtapiš nišū imtīdā* | הארץ רחבה, האנשים רבו | Gen 6:1; 1:28; 9:1, 7 | [equivalent] | Multiplication as the prelude to the decree; in Genesis it is also a blessing. |
| A 4–8, E 66–70 | *rigmu*, *ḫubūru* | שאון, המולה | Gen 6:11, 13 (`חָמָס`); 18:20 (`זַעֲקַת … כִּי כָבְדָה`) | [divergence]; *kabātu*/כבד [cognate] | Noise vs. violence as the cause. |
| A 5 | *Enlil ištemē rigimšin* | אנליל שמע את שאונם | Gen 6:5 `וַיַּרְא` | [divergence] | The god hears noise / sees evil. |
| A 6, E 11, G 49r | the assembly of the gods | אספת האלים | Gen 6:7, 13, 17 | [absent] | In Genesis one god decides alone. |
| A 9–10, G 59 | cutting off food | קטעו לאנשים את המזון | Gen 1:29; 9:3 | [divergence] | God gives food / the gods withhold it. |
| A 11, B 9, G 55 | *zunnu* withheld | את גשמו יסיר אדד | Gen 7:4, 12; 8:2 | [equivalent] / [divergence] | Rain withheld is the plague; in Genesis rain is the flood. |
| A 12–13 (S), B 10, E 78b, E 145 | *issakir šapliš … mīlu ina nagbi* | נסכר מלמטה … הגאות מן המעמקים | Gen 8:2 `וַיִּסָּכְרוּ מַעְיְנֹת תְּהוֹם וַאֲרֻבֹּת הַשָּׁמָיִם` | **[cognate]** (*sekēru* N = נִסְכַּר) | Same root, same passive stem, same above/below pair. Strongest lexical contact of the tablet. |
| A 13, E 146, G 57 | *nagbu* | מעמקים | Gen 7:11; 8:2 `מַעְיְנֹת תְּהוֹם` | [equivalent] | Rendered so as not to pre-empt. |
| A 14–15 | *lillik šāru / qaqqara līerri* | תלך הרוח ותצחיח את הקרקע | Gen 8:1, 13–14 | [divergence] | Wind that dries: a plague here, the end of the flood there. |
| A 16 | *erpetu* | עננים | Gen 9:13–14 | [divergence] | Rainless clouds / the cloud of the sign. |
| A 18, B 11 | *liššur eqlu išpikīšu* | יגרע השדה את יבולו | Gen 3:17; 8:21–22; Deut 11:17; Lev 26:20 | [equivalent] | Curse of the ground and its lifting. |
| A 19 + A 11–13 + B 6 | Adad's rain / the deep / Nisaba's breast / the womb | | Gen 49:25 `בִּרְכֹת שָׁמַיִם מֵעָל בִּרְכֹת תְּהוֹם … בִּרְכֹת שָׁדַיִם וָרָחַם` | [equivalent] (inverted) | The same four-term sequence, as curse vs. blessing. |
| B 2–4, E 150–151 | salt in the fields, no plants | הערבה … תלד מלח; עשב אל יצא | Deut 29:22; Gen 1:11–12; 2:5 | [equivalent] | Un-creation of the third day. |
| B 6, B 18 / E 62 | *rēmu kuṣur* / *rēmu peti ibanni šerra* | הרחם תהיה קשורה / הרחם פתוחה, בונה עולל | Gen 20:18; 16:2; 30:22 `וַיִּפְתַּח אֶת רַחְמָהּ` | [equivalent] / **[cognate]** (*rēmu*, *petû*, *banû*) | Womb closed and opened by the gods. |
| D 4–6 | animals and humans swell | הבהמה צבתה … צבתה האנושות | Gen 6:7; 7:23 | [divergence] | Animals suffer with man. |
| D 7, E 79–81a | Atra-ḫasīs the sage, in intimacy with his god | החכם אתרחסיס; ואלו, אאה, דיבר עמו | Gen 6:8–9 | [divergence] / [equivalent] | Wise vs. righteous; walking/talking with God. |
| E 12, 30; G 15, 29, 75; G 49s–u | *māmītu*, *māmīt abūbi* | שבועה; שבועת המבול | Isa 54:9; Gen 8:21; 9:11 | [divergence] | Oath to bring the flood vs. oath never to bring it again. |
| E 95 | *nīqâ iqqi* | זבח זבח | Gen 8:20 | [divergence] | Offering before the flood (plea) vs. after it. |
| E 102, E 128 | *ḫasāsu* | ויזכרני; וזכר אותך | Gen 8:1 `וַיִּזְכֹּר אֱלֹהִים אֶת נֹחַ`; 30:22 | [equivalent] | The root of the hero's name. |
| E 107–108 | the cry goes down to the Apsû; Enki hears | אל האפסו ירדה אנקתו; שמע אנקי את קולו | Gen 21:17; Exod 2:23–24 | [equivalent] | Hearing-and-remembering sequence. |
| E 144 | *ṣerret šamāmi kankat* | חתום עטין השמים | Gen 7:11; 8:2 `אֲרֻבֹּת הַשָּׁמַיִם` | [equivalent] | The upper water-openings. |
| E 151, G 58 | *malû* | מלאה מלח; נמלאו עשב | Gen 6:11, 13 `וַתִּמָּלֵא הָאָרֶץ חָמָס` | [cognate] (*malû*) / [divergence] | |
| E 152 | *ištīta šattam īkulā labīra* | בשנה הראשונה אכלו את הישן | Lev 26:10; 25:22; Gen 41:30, 36 | [equivalent] | Numbered famine years. |
| E 161b–h | daughter served up, mother locks her door | שמו את הבת לסעודה | Lev 26:29; Deut 28:53–57; 2 Kgs 6:28–29; Lam 4:10 | [equivalent]; for Gen 6–9 [absent] | |
| E 161m–o | Enki weeps *rēmēniš* | ברחמים זולגות דמעותיו | Gen 6:6; 43:30 | [divergence]; *rēmu* / רַחֲמִים [cognate] | God grieves at having made man / the god weeps for man. |
| G 21, 35, 81 | *iškun ittam ina ašqulāl šamši* | שם אות(?) באשקולל השמש | Gen 9:12–13 | [divergence] (uncertain) | A sign in a celestial phenomenon after a water-plague; restoration uncertain. |
| G 57 | *mīlum … ukattim ṣēra rapša* | הגאות … כיסתה את הערבה הרחבה | Gen 7:19–20 | [divergence] | Water covers the land, beneficially. |
| G 63, 65 | *ilum ītašuš* | האל … התמרמר | Gen 6:6 `וַיִּתְעַצֵּב אֶל לִבּוֹ` | [equivalent] | Rendered so as not to pre-empt. |
| G 64, 66 | *ṣīḫtum īkulšu* | צחוק אכל אותו | (Gen 17:17; 18:12) | [cognate] (*ṣīḫtu*/צחק) | Lexical only. |
| H 3 | *taštaḫdā rigma ana awīlūti* | הענקתם שאון לאנושות | Gen 8:21 `כִּי יֵצֶר לֵב הָאָדָם רַע מִנְּעֻרָיו` | [divergence] | The fault is innate in both; here it is "noise", given by the gods. |
| H 9–18 | the gods make Enki swear; he refuses | הבה נשביע…; האושיט את ידי אל אנשיי? | Gen 6:13; 22:12; 37:22 | [absent] | No dissenting god in Genesis. |
| H 15, G 49s | *abūbu* | מבול | Gen 6:17; 9:11 | [equivalent] | First occurrence of *abūbu* in Tablet II: G 49s. |
| H 20–24 | Šullat and Ḫaniš, Errakal, the throne-bearers | | (Gilg. XI 100–103) | [absent] in Genesis | The divine agents of the storm. |
| H 28; C₀ iv 6' | *ana ūm warḫim* | ליום הירח | Gen 7:11 | [divergence]; *warḫu*/ירח [cognate] | The flood has a calendar date in both. |
| I 3; C₀ iv 1' | the people must not hear | אל ישמעו (האנשים) את הדבר | Gen 6:13 | [divergence] | The decree is hidden from man / revealed to Noah by God himself. |
| I 4 | *ilū iqbû gamertam* | האלים ציוו כָּלָה | Gen 6:13 `קֵץ כָּל בָּשָׂר בָּא לְפָנַי`; Nah 1:8 | [equivalent] | |
| I 5 | *šipra lemna ana nišī īpuš Enlil* | מעשה רע לאנשים עשה אנליל | Gen 6:5; 8:21 | **[divergence]** | The key contrast: in Genesis the evil is man's; here the evil is the flood, done by the god. |

### Proposals for the shared renderings (Tablet II)

| Akkadian | Proposed Hebrew | Reason | Lines |
|---|---|---|---|
| *sekēru* N | נִסְכַּר | [cognate] with `וַיִּסָּכְרוּ` (Gen 8:2), same stem; the Gilg. XI / Atr. III translators should use it if the verb occurs. | Atr. II A 12 (S), B 10, E 78b, E 145 |
| *nagbu* | מַעֲמַקִּים | Not תְּהוֹם / מַעְיָנוֹת, which pre-empt Gen 7:11; 8:2. | Atr. II A 13, B 10, E 146, G 57 |
| *laḫmu* (Ea's attendants) | שְׂעִירִים | "The hairy ones"; also in Gilg./Atr. III if they appear. | Atr. II E 74 … |
| *guzalû* | נוֹשֵׂא הַכִּסֵּא | As Atr. I; for Gilg. XI 101 (*illakū guzalû*) so that Atr. II H 24 and Gilg. XI 101 match. | Atr. II H 24; Gilg. XI 101 |
| *tarkullu* / *nasāḫu* | עַמּוּדֵי הַקְּשִׁירָה / נָסַח | *nasāḫu* = נסח [cognate], same meaning (`וְנִסַּחְתֶּם`, Deut 28:63); for Gilg. XI 102. | Atr. II H 22; Gilg. XI 102 |
| *Šullat u Ḫaniš illakū ina maḫri* | שׁוּלַּת וְחָנִישׁ הוֹלְכִים לְפָנִים (Atr. II jussive: ילכו ל[פנים], as Gilg. XI 100) | Shared line Gilg. XI 100 / Atr. II H 20–21. | |
| *gamertu* | כָּלָה | "Total destruction" (Wasserman 2020); distinct from *karāšu* = כִּלָּיוֹן. Occurs also in Atr. III (C₁ iii 38', v 44") and the Ark Tablet 49. | Atr. II I 4; C₀ iv 2' |
| *ūm warḫim* | יוֹם הַיָּרֵחַ | *warḫu* = ירח [cognate]; the moon's disappearance day. Also Atr. III, Ark Tablet 50. | Atr. II H 28; C₀ iv 6' |
| *ṭēmu* in the sense "state, news" | מַצָּב (with a note) | The shared entry already allows a context rendering; here טַעַם would be a false friend. Suggest adding the sense to the shared note. | Atr. II E 135, 137 |
| *rigmu* of one person crying | קוֹל (with a note that it is the "noise" word) | The shared entry distinguishes people (שָׁאוֹן) and gods (קוֹל); it should say what to do with one man's cry. | Atr. II E 108, 119 |
| *têrtu* | צַו (divine instruction); הוֹדָעָה (message carried by messengers) | Atr. I has צַו only; a man's message to a god is not a command. | Atr. II E 112–165, G 49a |
| *iktabta rigim awīlūti* | כָּבֵד (עָלַי) שְׁאוֹן הָאֱנוֹשׁוּת | **Accepted and applied** in all tablets (harmonization pass). Tablet I wrote עליי without parentheses; the Akkadian has no "on me". | Atr. I 358; II A 7, E 69 |

### Lessons for the guidelines (Tablet II)
- **A composite of many recensions:** when the base edition is a score (SEAL), translate one line per score number from the oldest well-preserved witness, put sense-changing variants in the apparatus, and translate lines found only in later witnesses as numbered lines with a recension tag. Restorations taken from a parallel witness must name it.
- **eBL corpus shells:** an eBL chapter can exist with a manuscript list and zero lines (Atra-ḫasīs OB II, NA I–II, SB IV–X in Oct. 2026). Check `lines` in the API response before assuming an edition exists.
- **Unvocalized text needs full spelling:** when niqqud is stripped, defective spellings (ודבר, מהמלתם, קדם) must be converted to *ktiv male* (ודיבר, מהמולתם, קודם). Draft unvocalized from the start.
- **A repeated formula in a later tablet** should be checked against the earlier tablet's *actual lines*, not only its glossary (e.g. `דיבר אל` without ו when the line stands alone, I 357 = II A 6).

## Tablet III

### Scope
The whole of Tablet III in the OB Sippar recension (Ipiq-Aya, Ammī-ṣaduqa year 12; colophon: 390 lines, 1,245 for the three tablets): the dream and Enki's speech to the reed wall; the boat's specifications; Atra-ḫasīs's excuse to the elders (col. i); building, loading, the feast, the sealed door, the storm breaking loose (ii); the storm, the frightened gods, Nintu/Mami's first lament (iii); her second lament, the gods' thirst, seven days and seven nights (iv); [the end of the flood is lost]; the sacrifice, the gods "like flies", Nintu's accusation, the fly necklace (v–vi 4); Enlil's anger, Anu's and Enki's answers (vi); the new order: death, barren women, the Pāšittu demon, celibate priestesses (vi–vii); the closing address and the colophon (viii). Appendix: the early-OB "Larsa" recension C₀ iv 8′–19′ (left to Tablet III by the Tablet II translator).

Working files: `annotated-III.rtl.md`, `translation-III.rtl.md`.

### Progress log (Tablet III)
- 2026-10-16: sources read (SEAL 1517; Wasserman 2020 edition, commentary pp. 37–60 and ch. 3.1, 3.2, 3.5, 3.8; SEAL 1518, 1520, 1559, 1561–1562, 27122, 27124, 27127–27129; Gilg. XI project files; Tablets I–II files). eBL corpus OB III checked: chapter exists, 0 lines.
- 2026-10-16: col. i drafted (i 1–50).
- 2026-10-16: cols. ii (ii 9–55) and iii (iii 3–54) drafted.
- 2026-10-16: cols. iv–viii, the colophon and the C₀ iv 8′–19′ appendix drafted. First draft of the whole tablet complete. Bible-quote checker: 0 problems.
- 2026-10-16: three review passes. (a) Fidelity: every line re-read against SEAL/Wasserman's transliteration; brackets aligned (partial-word brackets allowed, as in Tablet I); speech quotation marks fixed (i 13, i 20); Wasserman's own inconsistencies resolved explicitly (i 46 *iqbi* vs *aqbi*; ii 32–33 translation vs transliteration; v 32 *zanānu* "rain" vs his "Providing food"). (b) Consistency: every `[מקבילה: גילגמש XI]` line compared with Gilg. XI `translation.rtl.md` word by word (table below); internal repeats checked (i 1–2 / 11–12; iii 51 / v 39–40; iii 53–54 / v 42–43; iv 4 / 13; ii 49 / 53; iv 12 / vi 23 / vi 40); formulas checked against Tablet I's and II's *actual lines* (I 188, 228, 354, 357, 372–373, 385–388; II A 9, E 155, G 13, G 28–29, I 6–7, E 161n). (c) Hebrew: lines read aloud as a sequence; plene spelling; niqqud only on names at first occurrence and ambiguous words (אֵלְכֶם, אֵלִי, שָׁנוּ, שָׂבְעָה, חָיָה, מְקֹרָה, נִכְּרוּ, הֲנִגַּשׁ, הִמָּלְכוּ, לוּ).
- 2026-10-16: `translation-III.rtl.md` written (intro, 12 section headings, 268 numbered lines + fragment groups and the colophon, appendix C₀ iv 8–19, 21 footnotes). A script confirmed that every numbered line equals the annotated file's line. Bible-quote checker on both files: 0 problems.
- 2026-10-21: cross-corpus harmonization (the lead's decision 1, settled): *uqnû* = `סַפִּיר` [equivalent] instead of `לָזוּרִית` (vi 3, identical with Gilg. XI 166), with the [equivalent] note (Exod 24:10, Ezek 1:26, Job 28:6).

### Base text and witnesses
- **Base:** SEAL no. 1517 = Wasserman 2020, pp. 19–37 (transliteration, translation), commentary pp. 37–60: mss **C₁** (BM 78942+78971+80385) and **C₂** (MAH 16064), one tablet in two non-joining pieces, copied by Ipiq-Aya. Eight columns; c. half the 390 lines survive.
- **eBL:** the corpus chapter "Old Babylonian III" exists but has no lines (API checked 2026-10-16); eBL Fragmentarium has the BM pieces in its catalogue without transliteration. The eBL edition of the Ark Tablet (`eBL/Atrahasis-MB-Priv/`) was used for the reading of *ubut* (i 22).
- **Later recensions cited in the apparatus** (translated as texts in their own right by project 4): Ark Tablet (SEAL 1520), Nippur J (1562), Ḫattuša J1 (1559), Ugarit I/I1/I2 (1561, 27122, 27124), NA U (27128) and W (27127), LB z (27129). They are cited where they fill gaps (iii 7–8 Anzu from U r 16′; iii 11 *ittaṣâ* from U r 18′; iii 23 Anu from U r 20′; the lost end of the flood from I2) or diverge (U r 3′, W 4′, Ark 59–60 on who seals the boat; J r 11′ "birds of heaven").
- **C₀ (Schøyen MS 5108, SEAL 1518)**, col. iv 8′–19′: translated as an appendix (Tablet II did iv 1′–7′).

### Line numbering (Tablet III)
Wasserman/SEAL: column + line, with primes counting from the first preserved line. With the primes dropped this is Lambert & Millard's numbering ("III ii 51"), which the literature (and the Gilg. XI project's table) cites; every annotated heading gives both ("ii 51″ (C₁) = III ii 51"). The clean translation uses the L&M form ("**ii 51**"). Fragment-only stretches (ii 15–21, iv 39–47, v 8–14, vii 14–27, vii 36–41, viii 3–7) are grouped. Gaps are given with their approximate size.

### Decisions (Tablet III)
1. **i 22 *ubut / upud*:** the shared formula `הֲרֹס בַּיִת, בְּנֵה סְפִינָה` (majority reading *ubut*, abātu; also eBL's Ark Tablet), although Wasserman reads *upud* "depart". Flagged below as a proposal.
2. **Shared lines with Gilg. XI** copy the Gilg. XI Hebrew, differing only where the Akkadian differs (table below). Where the Gilg. XI project's table had suggested a Hebrew for the OB line, I followed it except: vi 5 (*makurru* ≠ *eleppu*: `אֳנִיָּה`, not `ספינה`); iii 54 / v 43 (*kamāsu* = `אסף`, because `כנס` is Tablet I's *paḫāru* D, used in i 39); iii 38 / v 44 (*gamertu* = `כָּלָה` as in Tablet II, not `כלָיה גמורה`); iv 25 (*rādu* = `זֶרֶם`, not `גשם`, which is *zunnu* in Tablet II); iii 29 / iv 21 (*pulḫītu* = `פחד`, not `אימה`, which is Gilg. *puluḫtu*); vi 6 (`מלא חמה`, Tablet II G 13's order, not `חמה מלא`); ii 48 (`שָׁנוּ פניו`, intransitive, not `שינה פניו`).
3. **Internal formulas** follow Tablets I–II's actual lines: i 38–41 = I 385–388; iii 15 *kīma lî išappu* = I 354 `כשור גועה` (the flood now "bellows like a bull" as the land did); vi 7–8 = II G 28–29; vi 6 = II G 13; v 45 = II E 155 `קדרו פניהם`; vii 9 *pursī* = II A 9 `קטעו`; vii 13 *zabālu* Š = I 6 `הסבילו`.
4. ***rigmu*:** `שָׁאוֹן` for the land's and the flood's noise (iii 10, 20, 23) and mankind's (iii 43, 47, pl. `שאונים`); `קוֹל` for Adad's (ii 50), per the shared rule. The noise thread of the epic stays visible in the Hebrew.
5. **Three words for darkness** kept apart: *eṭûtu* `עֲלָטָה`, *daʾāmu* `הֶאֱפִיל` (as Gilg. XI 107), *ekēlu* `הֶחְשִׁיךְ`.
6. **Echo-control choices that cost something:** `שִׁבֵּשׁ` not `בִּלְבֵּל` (iii 41; root בלל is *balālu*/Babel); `סִיֵּם` not `כִּלָּה` (iv 11); `שָׁדַד` not `הִשְׁחִית` for a restored verb (iv 26); `גּוּף` not `פֶּגֶר` (iii 42); `הַמְעוֹפֵף, צִפּוֹר הַשָּׁמַיִם` not `עוֹף הַשָּׁמַיִם` (ii 35); `יוֹלֶדֶת וְלֹא יוֹלֶדֶת` not `עֲקָרָה` (vii 2); `אֲסוּרוֹת` not `תּוֹעֵבָה` (vii 8). Accepted echoes, tagged: `טְהוֹרִים` for *ellu* (ii 32; [equivalent] with 7:2, 8:20, but for a feast). Echo avoided after the corpus merge: `הַנָּע`, not `רֶמֶשׂ`, for restored *nammaššû* (ii 37; the concept tagged [equivalent]).
7. **Hidden cognates surfaced:** *kupru* `כֹּפֶר` (i 33, ii 13, ii 51); *ṭēmu* + *šanû* `נשתנה טעמו` (iii 25 = 1 Sam 21:14); *birku* `בֶּרֶךְ` (vii 5; Gen 30:3; 50:23); *qadištu* `קְדֵשָׁה`; *zamāru* `זֶמֶר / זִמֵּר`; *šikaru* `שֵׁכָר`; *ṣamû* `צמא`; *šebû* `שׂבע`; *martu* `מָרָה`; *malāku* Gt `נמלך`; *napāšu* (נפש, noted); *ṣupru* (צִפֹּרֶן, noted); *pagru* (פֶּגֶר, noted); *Ayyāru* `אִיָּר`.
8. **Wasserman's readings adopted** at the cruxes: i 13 `[של החלום]` (against George 2009); i 28 `עיגול` (Tigay, Ark Tablet); i 37 *bâʾ abūbi*; ii 34 *bêru* "choose"; ii 54–55 the wind (not Atra-ḫasīs) cuts the boat loose; iii 53 plural ("the gods, his sons"); iv 5 *abu-man* (Wilcke); v 41 rhetorical question; vi 9 *pirištum* `הסוד` (against L&M's *napištum*); vi 15 `[לגדר־הקנה]`; vi 25–26 a diptych (against Wilcke). iii 48 *ētellī* rendered `עולה אני` to keep both "I went up" and Wasserman's declarative "I shall go up".
9. **Restorations that carry Genesis parallels are flagged as such** in both files: vi 48 "death" (Lambert 1980b), vi 49 "the grave" (Wilcke), ii 37 *nammaššû*, ii 38 "craftsmen", iii 23 Anu.

### Parallels index (Tablet III)

| Line (Wasserman = L&M) | Akkadian | Hebrew rendering | Genesis (or Bible) | Tag | Comment |
|---|---|---|---|---|---|
| i 13, i 17 | *[ša šutti] wuddiā qerebša*; *uršum* | [של החלום] הודיעני את תוכו; חדר המשכב | 6:13 `וַיֹּאמֶר אֱלֹהִים לְנֹחַ` | [divergence] | Revelation by dream and through a wall vs. direct speech. |
| i 20–21 | the reed wall | קיר, הקשב לי! / גדר־קנה… | 6:13 | [absent] | The secret leaks through an object because the god is under oath. |
| i 22 | *ubut bīta bini eleppa* | הרוס בית, בנה ספינה | 6:14 `עֲשֵׂה לְךָ תֵּבַת עֲצֵי גֹפֶר` | [divergence] | *eleppu* = boat, not `תֵּבָה`; no wood named. |
| i 24 | *napišta bulliṭ* | והחיה נפש | 6:19–20 `לְהַחֲיֹת`; 7:3 `לְחַיּוֹת זֶרַע` | [equivalent]; *napištu* = נפש [cognate] | |
| i 25 | *eleppu ša tabannûši* | הספינה אשר תבנה אותה | 6:15 `וְזֶה אֲשֶׁר תַּעֲשֶׂה אֹתָהּ` | [equivalent] | Same syntax opening the specifications. |
| i 26, 28 | *mitḫurat*; *kippāti* | שווה; עיגול | 6:15 300×50×30 | [divergence] | A round boat, equal sides (Ark Tablet) vs. a long box. |
| i 29–31 | *kīma Apsî ṣullilši*; *ai īmur Šamaš qerebša*; *eliš u šapliš* | כאפסו – קרה אותה; אל יראה שמש את תוכה; מלמעלה ומלמטה | 6:16 `צֹהַר`, `מִלְמַעְלָה`, `תַּחְתִּיִּם שְׁנִיִּם וּשְׁלִשִׁים`; 8:13 `מִכְסֵה` | [divergence] / [equivalent] / [absent] (Apsû) | The OB boat is to be dark inside: no `צֹהַר`, no window. |
| i 33; ii 13; ii 51 | *kupru* | כֹּפֶר | 6:14 `וְכָפַרְתָּ … בַּכֹּפֶר` | **[cognate]** | The strongest lexical link. |
| i 34–35 | *anāku ulliš ušaznanakku ḫiṣbi iṣṣūrī …* | אני – אחר כך אמטיר עליך גודש ציפורים… | 7:4 `אָנֹכִי מַמְטִיר` | [equivalent] | Divine 1st-person "I will rain". |
| i 37 | *bâʾ abūbi 7 mūšīšu* | את בוא המבול – את שבעת לילותיו | 7:4 `לְיָמִים עוֹד שִׁבְעָה`; 7:10 | [divergence] | Seven = duration here, waiting time there. |
| i 42–49 | the excuse to the elders | עם אלכם אלי אינו מסכים… | — | [absent] | Noah explains nothing to his generation. |
| ii 10–14 | the city builds the boat | הנגר… העשיר… העני | — | [absent] | |
| ii 30–31 | silver and gold loaded | כסף… זהב | — | [absent] | |
| ii 32 | *ellūti iṭbuḫ alpī* | שוורים טהורים טבח | 7:2; 8:20 `הַבְּהֵמָה הַטְּהוֹרָה` | [equivalent] / [divergence] | "Pure" animals slaughtered for the feast before the flood. |
| ii 34 | *ibēr-ma ušterib* | בחר והכניס | 6:20 `יָבֹאוּ אֵלֶיךָ`; 7:9, 15 | [divergence] | The hero chooses and brings in; in Genesis the animals come. |
| ii 35 | *mupparšu iṣṣūr šamāi* | המעופף, ציפור השמים | 7:3 `מֵעוֹף הַשָּׁמַיִם` | [equivalent] | Wasserman: "exact parallel"; no "two by two", no "male and female". |
| ii 36–37 | *būl …*, *nammaššê ṣēri* | בהמת…, [הַנָּע] השדה | 6:20; 7:14 | [equivalent] | *nammaššû* restored. |
| ii 38 | *mārī ummâni* | בני האומנים | 7:7, 13 | [absent] | Craftsmen saved (civilization). |
| ii 39 | *[ub]il arḫu* | הביא הירח | 7:11 `בַּחֹדֶשׁ הַשֵּׁנִי בְּשִׁבְעָה עָשָׂר יוֹם` | [divergence] | A lunar date (new moon) for the flood. |
| ii 42 | *kimtašu ušterib* | את משפחתו הכניס | 7:1 `בֹּא אַתָּה וְכָל בֵּיתְךָ`; 6:18 | [equivalent] / [divergence] | No count of persons. |
| ii 40–47 | the feast; Atra-ḫasīs's distress | למשתה; שבור ליבו, ומקיא מרה | — | [absent] | Noah shows no emotion (rabbinic criticism, Wasserman n. 230). |
| ii 49, 53 | *Adad … ina erpeti* | אדד שואג בענן | 9:13–14 `בֶּעָנָן` | [divergence] | The cloud seats the storm god at the start, the bow at the end. |
| ii 51–52 | *kupru babil ipeḫḫi bābšu / idilu bābšu* | כופר הובא; סותם את פתחו / משנעל את פתחו | 7:16 `וַיִּסְגֹּר יְהוָה בַּעֲדוֹ`; 6:16 `וּפֶתַח הַתֵּבָה` | **[divergence]** | Who closes the door: the hero (OB), the boatman (Gilg.), God (Gen). |
| ii 54–55 | the wind cuts the rope | רוח זועמת… התירה את הספינה | 7:17–18; 8:1 `וַיַּעֲבֵר אֱלֹהִים רוּחַ` | [divergence] | Wind starts the flood here, ends it in Gen. |
| iii 8 | *[ušarriṭ] šamāi* | [קרע את] השמים | 7:11 `וַאֲרֻבֹּת הַשָּׁמַיִם נִפְתָּחוּ` | [divergence] | Restored. |
| iii 10, 15, 20, 23 | *rigmu* of land and flood; *kīma lî išappu* | שאונה ניפץ; כשור גועה; שאון המבול | 6:11, 13 `חָמָס` | [divergence] | Noise is the cause (I–II) and is "shattered"; the flood bellows as the land did (I 354). |
| iii 13 | *ul īmur aḫu aḫāšu* | לא ראה איש את אחיו | Exod 10:23 | [equivalent] (outside Gen) | |
| iii 18 | *eṭûtu, Šamaš laššu* | העלטה, שמש איננו | — | [absent] | No darkness in Gen's flood. |
| iii 20–31; iv 15–23 | gods afraid, weeping, hungry, thirsty | האלים יראו…; יושבים בצמא וברעב | 8:21 | [absent] | The gods depend on human offerings. |
| iii 25 | *Anu ištani ṭēmšu* | נשתנה טעמו | 1 Sam 21:14 `וַיְשַׁנּוֹ אֶת טַעְמוֹ` | [cognate] (idiom) | |
| iii 36–38, 42–45 | Mami's regret; *gamertu* | איך אמרתי עימם כלה; מבלעדיי כזבובים נהיו הצאצאים | 6:6 `וַיִּנָּחֶם … וַיִּתְעַצֵּב`; 6:13 `קֵץ כָּל בָּשָׂר`; 8:21 | [divergence] / [equivalent] | Regret over the flood (goddess, after) vs. over creating man (God, before). |
| iii 43 | *rigimšina ešme* | את שאונם שמעתי | 6:5 `וַיַּרְא יְהוָה כִּי רַבָּה רָעַת הָאָדָם` | [divergence] | The gods hear noise; God sees evil. |
| iii 53; v 42; vi 21–22 | *lā imtalkū-ma iškunū abūba* | לא נמלכו/נמלך, וחוללו/חולל את המבול | 6:5–7, 11–13 | [divergence] | The decision "without counsel" vs. a motivated decision. |
| iii 54; v 43 | *nišī ikmisū ana karāši* | את האנשים אספו/אסף לכליון | 7:23 `וַיִּמַח אֶת כָּל הַיְקוּם` | [equivalent] | |
| iv 6–9 | corpses like dragonflies and rafts | את הים – כשפיריות…; כרפסודה נשענו | 7:19–21; 8:4 `וַתָּנַח` | [divergence] | The land not wholly submerged (Wasserman); bodies, not the boat, "lean". |
| iv 24–25 | *7 ūmī 7 mūšiāti / illik rādu meḫû abūbu* | שבעה ימים, שבעה לילות / הלך זרם, סופה, מבול | 7:4, 12 (40 days), 7:24 (150 days) | [divergence] / [equivalent] (days and nights counted separately; *rādu* ~ `הַגֶּשֶׁם`, 7:12) | Gilg. XI 128: 6 days, 7 nights. |
| iv 26 – v 29 (gap; I2) | window, dove, crane (Ugarit I2) | — | 8:6 `חַלּוֹן`; 8:8 `וַיְשַׁלַּח אֶת הַיּוֹנָה` | [equivalent] (in I2 only) | Lost in OB. |
| v 30–31 | *ana šāri erbet ittaqi niqâ* | לארבע הרוחות זבח זבח | 8:20 `וַיִּבֶן נֹחַ מִזְבֵּחַ … וַיַּעַל עֹלֹת` | [divergence] | No altar, no burnt offering, no clean animals named. |
| v 34 | *iṣinū ilū ereša* | הריחו האלים את הריח | 8:21 `וַיָּרַח יְהוָה אֶת רֵיחַ הַנִּיחֹחַ` | [equivalent] | Closest narrative parallel; roots differ. |
| v 35–36 | *kīma zubbī eli niqî paḫrū; īkulū niqâm* | כזבובים על הזבח מקובצים; אכלו את הזבח | 8:21 | [absent] / [divergence] | Gods swarm and eat; God smells. *zubbu* = זבוב [cognate]. |
| v 41 | *Enlil iṭḫi-a ana qutrenni* | הנגש אנליל אל הקטורת | 8:21 | [absent] | The god who caused the flood is not at the offering. *qutrinnu* = קטורת [cognate]. |
| v 44; vi 8 | *ubla pīkunu gamertam*; *ubla pīni … māmītam* | נשאתם כלה על פיכם; נשאנו יחד שבועה על פינו | Isa 54:9; 8:21; 9:11 | [divergence] | An oath to bring the flood vs. an oath never to bring it again. |
| v 46 – vi 4 | the fly necklace (*zubbū … lū uqni kišādīya / luḫsus-ma ūmī*) | הזבובים… יהיו ספיר על צווארי / אזכור את הימים | 9:13–16 `אֶת קַשְׁתִּי נָתַתִּי בֶּעָנָן … לִזְכֹּר` | [equivalent] / [divergence] | A sky-coloured object hung "before" the gods as a memorial. |
| vi 5–10 | Enlil's anger at the survivor | את האנייה ראה…; איך חיה אדם בכליון? | 6:8; 7:23 `וַיִּשָּׁאֶר אַךְ נֹחַ`; 8:1 | [absent] | No god in Genesis is angry that someone survived. |
| vi 9, 15 | *pirištu*; *kikkiša ušapta zikra* | מאין יצא הסוד?; לגדר־הקנה גילה את הדבר | 6:13 | [divergence] | A leaked secret vs. God's own disclosure. |
| vi 18–19 | *[lū ē]puš …; [ušt]aṣṣira napištam* | אכן עשיתי…; נצרתי נפש | 6:19 `לְהַחֲיֹת`; 7:23 | [equivalent] | |
| vi 25–26 | *bēl arnim šukun šērētka* | על בעל העוון שים את עונשך | 9:5–6 `שֹׁפֵךְ דַּם הָאָדָם…`; Deut 24:16; Ezek 18:20 | [equivalent] / [divergence] | Individual punishment instead of a universal one; here a limit on the gods, there a law for man. |
| vi 48–49 | *[šuknī mūta] ana nišī; [awīla … šuṣ]lilī* | שימי מוות לאנשים; את האדם בקבר השכיבי | 6:3 `וְהָיוּ יָמָיו מֵאָה וְעֶשְׂרִים שָׁנָה`; 3:19 | [divergence] | Mostly restored. A post-flood limit on human life vs. a pre-flood one. |
| vii 1–2, 9 | *ālittum-ma lā ālittum; alādam pursī* | יולדת ולא יולדת; את הלידה קטעי | **9:1, 7 `פְּרוּ וּרְבוּ`**; 1:28; 6:1; 11:30; 29:31; 20:18; Deut 7:14 | **[divergence]** | The central inversion: limits on fertility after the flood vs. the blessing of fertility. |
| vii 3–5 | Pāšittu seizes the baby *ina birku ālitti* | פשיטתו … מברכי היולדת | 30:3 `וְתֵלֵד עַל בִּרְכַּי`; 50:23 | [absent] (demon) / [cognate] (*birku*) | Infant death instituted. |
| vii 6–11 | priestesses forbidden to bear; *qadištu* | אוגבבתו, אנתו… קדשה | 38:21 `הַקְּדֵשָׁה` | [absent] / [cognate] | |
| vii 13 | *[šuzb]ilī-šin* | הסבילי אותן | (I 6) | — | The epic's "labour" theme returns, now on women. |
| viii 9–10 | *kīma niškunu abūba / awīlum ibluṭ* | כאשר חוללנו את המבול / אדם חיה | 7:23; 8:1 | [divergence] | |
| viii 18–19 | *abūba ana kullat nišī uzammer šimeā* | את המבול – לכל האנשים זימרתי. שמעו! | 9:12–17 | [absent] | A sung epic ends with "Listen!"; Genesis ends with covenant and sign. *zamāru* = זמר [cognate]. |
| C₀ iv 13–15 | *ana nišī tabakki … ādirī attā* | על האנשים אתה בוכה … הפוחד מפניי – אתה! | 7:1 `כִּי אֹתְךָ רָאִיתִי צַדִּיק`; 6:8–9 | [divergence] | Chosen for piety and pity, not righteousness. |

### Lines shared with Gilgameš XI (Tablet III ↔ Gilg. XI)
"Same" = identical Akkadian, so the Hebrew is copied from Gilg. XI. Otherwise the difference in the Akkadian, and the corresponding single difference in the Hebrew, is stated.

| OB III | Gilg. XI | Our OB Hebrew | Gilg. XI Hebrew | Difference |
|---|---|---|---|---|
| i 16 | 37 | ודיבר אל עבדו: | דיבר אל עבדו, אליי: | OB two-line formula (ו); SB *yâši* |
| i 20–21 | 21–22 | קיר, הקשב לי! / גדר־קנה, שמור את כל דבריי! | גדר־קנה, גדר־קנה! קיר, קיר! / שמע, גדר־קנה! קיר, הקשב! | different verbs and order (shared formula) |
| i 22 | 24 | הרוס בית, בנה ספינה! | נתוץ בית, בנה ספינה! | verb only (*ubut* / *uqur*) |
| i 23–24 | 26 | מאס ברכוש / והחיה נפש! | מאס ברכוש והחיה נפש! | same, on two lines |
| i 25 | 28 | הספינה אשר תבנה [אותה] – | הספינה אשר אתה תבנה אותה – | no *attā* |
| i 26 | 30 | […] שווה […] | יהיו שווים רוחבה ואורכה; | broken |
| i 29 | 31 | [כָּ]אַפְּסוּ – קָרֵה אותה! | כָּאַפְּסוּ – קָרֵה אותה! | same |
| i 34 | 43 | אני – אחר כך אמטיר עליך | [לכם] ימטיר עליכם שפע! | speaker, person, adverb |
| i 35 | 44 | גֹּדֶשׁ ציפורים, *אֲגֻדּוֹת* דגים!' | [גֹּדֶשׁ] ציפורים, סֵתֶר דגים! | *buduru* / *puzru* |
| i 47 | 40 | [לא] אשב בע[ירכם]! | לא אשב בעירכם! | same |
| i 48 | 41 | [על] ארץ אנליל לא א[שים רגליי]! | [על] קרקע אנליל לא אשים [רגליי]! | *erṣetu* / *qaqqaru* |
| i 49 | 42 | [ע]ם אֵלִי א[רד אל האפסו]. | [ארד] אל האפסו, ועם אאה אדוני אשב. | "my god" for "Ea my lord"; no "dwell" |
| ii 10 | 54 | הזקנ[ים …] | הזקנים סוחבים פתיל. | broken |
| ii 11 | 50 | הנגר [נושא את קרדומו], | הנגר נושא [את קרדומו], | same |
| ii 12 | 51 | קולע הקנים [נושא את אבנו], | קולע הקנים נושא [את אבנו], | same |
| ii 13 | 55 | כֹּפֶר [נשא העשיר], | העשיר נושא כֹּפֶר, | order; perfect |
| ii 14 | 56 | העני [הביא את הנצרך]. | העני … הביא את הנצרך. | same (no broken word) |
| ii 30–31 | 82–83 | כל אשר [היה לו טען עליה – כסף/זהב] | כל אשר היה לי טענתי עליה – כסף/זהב | 3rd vs 1st person |
| ii 32 | 71 | [שוורים] טהורים [טבח], | לאין מספר טבחתי שוורים, | *ellūti* / *ana lā mīni*; person; G / D |
| ii 33 | 72 | [כבשים] שמנים [שחט]. | שחטתי כבשים יום יום. | *kabrūti* / *ūmišam*; person |
| ii 36–38 | 86 | בהמ[ת …] … [הַנָּע] השדה; בנ[י האומנים(?)] הכניס. | בהמת השדה, חיית השדה, בני האומנים – את כולם העליתי. | verb *erēbu* Š / *elû* Š; different list |
| ii 42 | 85 | […] את משפחתו הכניס. | העליתי אל תוך הספינה את כל משפחתי וקרוביי; | verb; no *kala*, no *salātu* |
| ii 46 | 138 | אינו יושב, אינו כורע; | כרעתי, וישבתי בוכה, | negated, reversed order |
| ii 48 | 92–93 | היום – שָׁנוּ פניו; | של היום – הבטתי בתוארו: / … | different words |
| ii 51 | 94 (89) | כֹּפֶר הובא; סותם את פתחו. | באתי אל תוך הספינה וסתמתי את פתחי. | same verb *peḫû*, person, tense, *kupru* |
| ii 53 | 99 | אדד שואג בענן. | אדד בתוכו רעם ורעם. | verb; "in the cloud" |
| iii 5 | 109 | [יום] אחד – הסופה, | יום אחד – הסופה, המבול … […]. | no *abūbu* |
| iii 10 | 108 | [ככלי חרס] את שאונה ניפץ. | [שטף] את הארץ כשור […], … ניפץ [אותה]. | different image |
| iii 11 | 110 | [… יצא] המבול. | … [המבול]. | different verb |
| iii 12 | 111 | [כקרב] עברה על האנשים ההשמדה. | כקרב עוברת על האנשים [ההשמדה]. | preterite / present |
| iii 13 | 112 | [לא] ראה איש את אחיו, | אין איש רואה את אחיו, | preterite / present |
| iii 14 | 113 | [לא] נִכְּרוּ בכליון. | אין האנשים נִכָּרים בכליון. | no *nišū*; preterite |
| iii 20, 23 | 114 | [האלים יראו את שאון] המבול, | האלים יראו את המבול! | *rigim* added |
| iii 21 | 115 | [בשמים סתר] תפסו, | נסוגו, עלו אל שמי אנו. | different words |
| iii 22 | 116 | [בחוץ] ישבו. | האלים ככלבים מכורבלים, בחוץ רבוצים. | no dogs; *ašābu* / *rabāṣu* |
| iii 32–33 | 117–118 | ראתה האלה, ובוכה – / מיילדת האלים, ממי החכמה: | צווחת האלה כיולדה, / ייללה בלת־אילי, נעימת הקול: | different predicates and epithet |
| iii 34–35 | 119 | יאפיל היום, / ייהפך, יחשיך! | אותו יום – אכן נהפך לטיט, | wish vs. statement; same *târu* |
| iii 36–38 | 120–121 | אני, באספה של האלים, / איך אמרתי / עימם כלה? | כי אני באספת האלים אמרתי רעה. / איך אמרתי באספת האלים רעה, | *puḫri ša ilī* / *puḫur ilī*; *gamertu* / *lemuttu* |
| iv 4, 13 | 118 | מייללת נינתו | ייללה בלת־אילי | name; present / preterite |
| iv 5 | 123 | לוּ אב ילד [את אנשיי]! | אני היא היולדת – אנשיי הם! | different clause |
| iv 6–7 | 124 | את הים – כשפיריות / מילאו את הנהר. | כבני דגים הם ממלאים את הים! | image; tense |
| iv 15 | 125 | האלים בכו עימה על הארץ. | האלים, אלה של האנונכי, בוכים עימה, | tense; *šūt Anunnakkī* / *ana mātim* |
| iv 18 | 126 (var.) | היא – במקום שישבה בבכי, | (George follows ms T1) | |
| iv 21 | 127 | צמאות שפתותיהם בפחד, | צרובות שפתותיהם, אחוזות קדחת. | *ṣamû* / *šabābu*; *pulḫīta* / *leqâ buḫrēti* |
| iv 24 | 128 | שבעה ימים, שבעה ל[ילות] | שישה ימים ושבעה לילות | 7/6; *ūmu* / *urru*; no *u* |
| iv 25 | 129 | הלך זרם, סופה, [מבול]. | הולכת רוח, מבול, סופה, משטחת את הארץ. | preterite; *rādu* (most Gilg. mss have it too) |
| v 30–31 | 157 | ל[ארבע] הרוחות / זבח [זבח], | הוצאתי, ולארבע הרוחות זבחתי זבח. | person; no *ušēṣī* |
| v 34 | 161 | [הריחו האלים] את הריח, | האלים הריחו את הריח, | word order |
| v 35 | 163 | [כזבובים] על הזבח מקובצים. | האלים התקבצו כזבובים על בעל הזבח. | no *ilū*, no *bēl*; stative |
| v 37 | 164 | [נינתו] קמה, | מיד כשהגיעה בלת־אילי, | different words |
| v 41 | 168–169 | הֲנִגַּשׁ אנליל אל הקְּטֹרֶת, | אנליל אל יבוא אל המנחה, | question vs. prohibition; *qutrinnu* / *surqinnu* |
| v 42 | 170 | אשר לא נמלך, וחולל את המבול, | כי לא נמלך, וחולל את המבול, | *ša* / *aššu* only |
| iii 53 | 170 | אשר לא נמלכו, וחוללו את [המבול], | (as above) | *ša*; plural |
| v 43; iii 54 | 171 | את האנשים אסף/אספו לכליון? | ואת אנשיי מנה לכליון. | *kamāsu* / *manû*; "my"; *u* |
| v 46–47 | 165 | והיא ניגשה אל הזבובים הגדולים / אשר תלה אנו… | נשאה את הזבובים הגדולים שעשה אנו בְּצַחֲקוֹ: | verbs |
| vi 2–3 | 166 | הזבובים ה[אלה] / יהיו סַפִּיר על צווא[רי], | אלים! אלה יהיו סַפִּיר על צווארי, | subject "these flies" |
| vi 4 | 167 | אזכור את הימים […] | את הימים האלה אזכור, ולעולם לא אשכח! | order; broken |
| vi 5 | 172–173 | את האֳנִיָּה ראה ה[גיבור אנליל], | ראה את הספינה, וזעם אנליל. | *makurru* / *eleppu*; *qurādu* / *ezēzu* |
| vi 6 | 174 | מלא חמה על הָאִיגִי[גִי]: | נמלא חמה על האלים, האיגיגי: | stative / Gt; no *ilī* |
| vi 9 | 175 | מאין יצא הסוד? | מאין יצאה נפש? | *pirištum* / *napištu* |
| vi 10 | 176 | איך חָיָה אדם בכליון? | אל יחיה איש בכליון! | question / wish; *awīlum* / *mamman* |
| vi 11–12 | 177–178 | אנו פתח את פיו / ודיבר אל הגיבור אנליל: | נינורתה פתח את פיו ואמר, / דיבר אל הגיבור אנליל: | speaker; OB / SB formula |
| vi 13–14 | 179 | מי את זאת, / אם לא אנקי, עושה? | מי, אם לא אאה, בונה דבר? | *epēšu annītam* / *banû amāta* |
| vi 15 | 196–197 | [לגדר־הקנה] גילה את הדבר. | אני לא גיליתי את סוד האלים… | different |
| vi 16–17 | 181–182 | [אנקי] פתח את פיו / [ודיבר] אל האלים הגדולים: | אאה פתח את פיו ואמר, / דיבר אל הגיבור אנליל: | addressee; formula |
| vi 20 | 183 | [אתה, חכם] האלים, [הגיבור], | אתה, חכם האלים, הגיבור, | same |
| vi 21–22 | 184 | [איך לא נמלכת, ואת] המבול / [(…)] חוללת? | איך זה לא נמלכת, וחוללת את המבול? | *kī* / *kīkī*; G / Gt (not visible in Hebrew) |
| vi 23–24 | 187 | [הרווחת את] ליבך – / [משוך] והרפה! | הרפה – פן יינתק; משוך – פן [ירפה]! | order; no "lest" |
| vi 25 | 185 | [על בעל העוון] – שים את עונשך, | על בעל העוון – הטל את חטאו, | *šukun šērētka* / *emid ḫīṭāšu* |

### Proposals for the shared renderings (Tablet III)

| Akkadian | Proposed Hebrew | Reason | Lines |
|---|---|---|---|
| OB *ubut / upud bīta* (shared row "*ubbut*") | keep `הֲרֹס בַּיִת`, but correct the row's normalization to *ubut* (*u-bu-ut*) and add a note: Wasserman 2020 reads *upud* (napādu) "depart from the house" → `הִפָּרֵד מִבַּיִת`. If the coordinator prefers the edition's reading, change Atr. III i 22 and the Ark Tablet line together. **Accepted** (shared §2: *ubut*, `הרוס בית`, Wasserman's reading in a note in every version). | The shared row writes "*ubbut*", which is neither reading. | Atr. III i 22; Ark 4 |
| *rādu* | זֶרֶם | Keeps *zunnu* = `גֶּשֶׁם` (Tablet II) distinct; `זֶרֶם מַיִם` (Isa 28:2). The Gilg. XI table suggested `גשם`. If Gilg. XI 129 is ever re-translated from the majority manuscripts (*šāru rādu meḫû abūbu*), it should use `זרם` too. | Atr. III iv 25; Gilg. XI 129 (variant); U r 7′ |
| *makurru* (boat type) | אֳנִיָּה | Distinct from *eleppu* = `סְפִינָה`. The shared row already lists `אֳנִיָּה` as an alternative for *eleppu*; it should be reserved for *makurru* (and *unūtu*'s cognate discussion noted). | Atr. III vi 5 (Gilg. table had `ספינה`) |
| *kamāsu* I "gather in" (*ana karāši*) | אָסַף | `כִּנֵּס` is Tablet I's *paḫāru* D (I 386 = III i 39). | Atr. III iii 54, v 43 |
| *pulḫītu* | פַּחַד | Distinct from *puluḫtu* = `אֵימָה` (Gilg. XI 93). | Atr. III iii 29, iv 21 |
| *eṭûtu* / *daʾāmu* / *ekēlu* | עֲלָטָה / הֶאֱפִיל / הֶחְשִׁיךְ | Three dark-words kept apart (*daʾummatu* = `אֲפֵלָה` in Gilg. XI 107). | Atr. III iii 18, 34, 35 |
| *rigmu* of the flood / of the land | שָׁאוֹן | The shared row covers people, animals and the flood; add explicitly "the land" (= its people) and the plural `שְׁאוֹנִים`. | Atr. III iii 10, 20, 23, 47 |
| *zubbu* (OB) = *zumbu* (SB) | זְבוּב | Add *zubbu* as a lemma (the shared formula row has only *zubbī / zumbī*); the fly image runs through iii 19, 44, v 35, v 46, vi 2. | |
| *ālittu* / *lā ālittu* | יוֹלֶדֶת / לֹא יוֹלֶדֶת | Not `עֲקָרָה`; the Genesis comparison (11:30; 29:31) belongs in the apparatus. | Atr. III vii 2 |
| *Pāšittu* | (shared: `פָּשִׁיטְתּוּ`) | Confirm; note: "the Eraser", = Lamaštu (von Soden). | vii 3 |
| *gamertu* | כָּלָה | Confirms Tablet II's proposal; the Gilg. XI table's `כלָיה גמורה` should not be used. | Atr. III iii 38, v 44 |
| *šakānu abūba* | חוֹלֵל (מַבּוּל) | Confirms the Gilg. XI proposal; used throughout Tablet III. | iii 53, v 42, vi 22, viii 9 |
| *malāku* Gt | נִמְלַךְ (impv. `הִמָּלְכוּ`) | Confirms the Gilg. XI proposal; the imperative in vi 44 makes the irony. | iii 53, v 42, vi 21, vi 44 |

Objections to Gilg. XI renderings: none that require a change. Two notes for the coordinator: (1) the Gilg. XI table's suggested OB Hebrew for III vi 5 (`ספינה`), iii 54 / v 43 (`כנס`), iii 38 (`כלָיה גמורה`), iv 25 (`גשם`) and iv 21 (`אימה`) was not followed, for the reasons above; (2) Gilg. XI 129 follows ms J1 (no *rādu*), so the OB / Gilg. difference in the Hebrew is larger than the majority text warrants.

### Lessons for the guidelines (Tablet III)
- **Check the edition's translation against its own transliteration.** Wasserman 2020 has small internal inconsistencies (ii 32–33 swaps bulls and sheep; i 46 transliterates *aq!-bi* but translates *iqbi*; v 32 translates "Providing food" while the commentary argues for "rain"). Translate the transliteration and the commentary's argument, and say so.
- **SEAL lemmatization slips** (as with eBL): i 43 *ītetezzizū* lemmatized as *izuzzu* "stand" (it is *ezēzu*); vi 5 *makkura* as *makkūru* "property" (it is *makurru* "boat"); iv 46 *it-t[a…]* as *ittu* "sign" on two signs. Don't build a parallel on a lemma.
- **Restorations can carry the Genesis parallel.** Several of the most quotable lines are restored (vi 48 "death"; ii 37 *nammaššû*; iii 8 Anzu; ii 38 craftsmen). Flag the restoration in the parallels index itself, not only in the apparatus.
- **A later project's Hebrew suggestions for an earlier text** (the Gilg. XI table's "Our Hebrew for OB") are useful but must be checked against the earlier text's own epic-internal formulas (here Tablets I–II), which take precedence when the Akkadian is the same.
- **Script the consistency pass:** extracting `> ` lines from the annotated file and comparing them with the clean file caught nothing this time, but it makes pass (b) mechanical and cheap.
