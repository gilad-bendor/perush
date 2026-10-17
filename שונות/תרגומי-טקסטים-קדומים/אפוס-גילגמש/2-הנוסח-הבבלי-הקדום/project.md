# Project: the Epic of Gilgameš, Old Babylonian tablets → Hebrew

Read `../../translation-guidelines.md` first, then `../corpus.md`, the shared `../renderings.md` (binding), `../translator-brief.md`, and the SB project's `../1-הנוסח-הבבלי-התקני/project.md` (its tablet sections: the SB Hebrew of the parallel passages). This file holds what is specific to the OB tablets; each tablet has its own section below.

## Scope
The Old Babylonian epic (*šūtur eli šarrī*, "Surpassing all kings"), c. 1800–1700 BCE, survives on separate tablets of different origin, not on one series. Translated here, in priority order:
1. **OB VA+BM** (VA 2788 + BM 96930; Sippar): Gilgameš and Šamaš; Gilgameš and the ale-wife – the **carpe diem** (a+21–a+28 ↔ Qoh 9:7–9) and "when the gods created mankind, they established death for mankind, life they kept in their own hands" (a+18–a+20 ↔ Gen 3:22); Gilgameš and Sursunabu (= SB Ur-šanabi). 87 lines.
2. **OB II** (the Pennsylvania tablet, UM 29.13.570; = SB I 242 – II): Gilgameš's dreams; Enkidu and Šamḫat; the shepherds' camp; **bread and beer** ("Eat the bread, Enkidu, it is the due of life; drink the beer, it is the destiny of the land"), clothing, anointing: "he became a man" (*awīliš īwe*) ↔ Gen 2:7, 3:6, 3:21; the bridegroom and Gilgameš's right to the bride ↔ 6:1–4; the fight. 145 lines.
3. **OB III** (the Yale tablet, YBC 2178; = SB II–III): the plan to go to the forest; Ḫuwawa; "I will establish a name for myself" (*šumī lultakan*) ↔ 11:4, 6:4; "who, my friend, can go up to heaven? Only the gods dwell forever with Šamaš; as for man, his days are numbered" ↔ 6:3, 11:4. 219 lines.
4. Lower priority, if time allows: Schøyen₂ (the forest; 94), Nippur (dreams on the road; 26), Harmal₁ (21), Ishchali (Ḫuwawa; 47), Harmal₂ (59), IM (45).

## Base text
- eBL `L/1/4`, "Old Babylonian" chapters (ed. A. R. George, with A. C. Heinrich, M. Schlegelmilch and others; George's translation): `../../sources/eBL/Gilgamesh-OB-<name>/reading-edition.md`. eBL's running labels (`1'`, `a+1`, `b+1` …) are the line numbers here; the apparatus gives the column (from SEAL / George 2003).
- Second opinion: SEAL (`../../sources/SEAL/Gilgamesh-OB/`, nodes 1830, 1831, 1534, 1532, 1530, 1526): transliteration with lemmas; its translation is George's (not an independent check).

## Relation to the SB text
- OB lines that are identical with SB lines (eBL's `Parallels:` field lists them; `../parallels_for.py OB-II` prints them with the SB Hebrew) get the SB Hebrew, changed only where the OB Akkadian differs (dialect forms aside: OB mimation and *issaqqaram* for SB *izzakkar*: see the formulas in `../renderings.md` §2, OB rows).
- OB names: Ḫuwawa = `חוּוָוה`; Sursunabu = `סוּרְסוּנַבּוּ` (= SB Ur-šanabi, noted); Ūta-naʾištim = `אוּתְנַאִישְׁתִּים` (noted); Šamḫat; Enkidu; Ninsun (OB *Ninsumun* = `נִינְסוּמוּן`).

## Open decisions for the user
Collected by the coordinator (2026-10-18); each tablet section below has its own list (VA+BM 6, II 7, III 7, Schøyen₂ 7, Nippur 4, Harmal₁ 4, Ishchali 5, Harmal₂ 4, IM 3). Cross-tablet:
1. *dâlu* "wander" = `סוֹבֵב` (chosen, keeping `נָע` of Gen 4:12 out) or `נָע`.
2. The OB spelling of Šamḫat (*Šamkatum* where the tablet writes it) – kept `שַׁמְחַת`.
3. The Harmal spelling *Ḫubibi* = `חוּבִּיבִי` or the usual `חוּוָוה`.
4. OB III 148 `העמדתי` (*šuma šuzuzzu*) vs 160/188 `אָשִׂים לי` (*šuma šakānu*): both kept distinct.

## Status / progress log
- **2026-10-18: complete (first draft).** OB VA+BM 87, OB II 145, OB III 219, and the lower-priority Schøyen₂ 94, Nippur 26, Harmal₁ 21, Ishchali 47, Harmal₂ 59, IM 45 = 743 labels, by three sequential translators, three review passes each; `../verify.py --strict` 0 problems; `translation.rtl.md` built (narrative order); print stub `../../הדפסה/אפוס-גילגמש/2-הנוסח-הבבלי-הקדום.rtl.md`. Not translated: OB UM, Schøyen₁, Schøyen₃, CUNES, SM (small and broken; not fetched) and the MB/NA chapters.
- 2026-10-17: eBL chapters fetched (VA+BM, II, III, Schøyen₂, Nippur, Harmal₁, Ishchali, Harmal₂, IM); SEAL pages saved; project brief written by the coordinator.

---

<!-- Tablet sections are appended below by the tablet translators, in the order they were drafted. -->

## Tablet OB-VA+BM

### Scope
OB VA+BM (VAT 4105 + BM 96974, the "Sippar" or "Meissner" tablet; eBL siglum SipOB1), all 87 eBL labels: col. i 1′–15′ (Gilgameš in skins, digging wells, chasing the winds; Šamaš: "where are you wandering? the life you seek you will not find"; Gilgameš's answer on rest in the netherworld and the light of the sun), col. ii a+1–a+15 (Gilgameš to the ale-wife: the lament for Enkidu = SB X 55–60 with OB variants; "after he was gone I did not find life"; "death, which I fear, let me not see"), col. iii a+16–a+43 (the ale-wife: "when the gods created mankind, death they set for mankind, life they held in their own hands" and the carpe diem; Gilgameš asks for the way across), col. iv b+1–b+29 (the Stone Ones smashed; Sursunabu: "what is your name?"; the Stone Ones and the Waters of Death; the punting-poles). Single manuscript; cols. i–iv each lack their beginning or end; well preserved where extant (a+1, b+15 wholly broken; a+29–a+43, b+15–b+18, b+28–b+29 damaged).

### Sources consulted
- eBL `L/1/4` OB VA+BM (`../../sources/eBL/Gilgamesh-OB-VA-BM/reading-edition.md`: N, T, L, notes, parallels, ATF).
- SEAL 1534 (`../../sources/SEAL/Gilgamesh-OB/node-1534--Gilg-OB-VA-BM.md`): transliteration, lemmas, George's translation; its column numbering is cited in the apparatus header.
- `../renderings.md` incl. §9–§12 (binding); SB X (`../1-הנוסח-הבבלי-התקני/annotated-X.rtl.md`: the fixed passage §3.2 as written there, 55–60, 72–91, 103–112, 155–176, 259–261, 319–322) and SB I, VI, VII, XI 209–328; `../parallels_for.py OB-VA+BM --all` (34 lines with parallels).
- George's translation (eBL T), after drafting; Tchernichovsky 1924 (`../../sources/Ben-Yehuda--Tchernichovsky-1924/full-work--all-tablets.rtl.md`, ll. 2925–2960, where he places the OB ale-wife speech inside Tablet X) after pass (c).
- The vocalized Bible through `../../tools/check_bible_quotes.py --show`.

### Decisions
1. **Files generated from one line-by-line data file** (scratchpad), as for SB X: the normalization is inserted from eBL by script, so annotated `>` lines and the clean translation are identical by construction.
2. **The fixed passage (`../renderings.md` §3.2) is copied from X 55–60 in its plene form** and changed only where the OB Akkadian differs: a+1–a+2 and a+3–a+4 split X 55 / X 56 over two lines each (a+2/a+4 keep `אשר עמי עבר את כל התלאות`; a+3 has no *ibrī*, so no `רֵעִי`); a+5 *illik-ma ana šīmat awīlūtim* = `הלך אל גורל האדם` (X 57 *ikšudaššu* = `הגיע אליו`); a+6 *urrī u mūšī* = `יום ולילה בכיתי עליו,` (X 58 has the six days); a+7 = X 59 and a+10 = X 60 identical; a+8 (no SB counterpart) `– 'אולי יקום רֵעִי לקולי!' –`; a+9 `שבעה ימים ושבעה לילות,` (OB "seven days", the basis of George's reading of OB II 48).
3. **dâlu "roam restlessly" = `סוֹבֵב`** (7′, 10′, a+16): a new verb, because `שוטט` is *rapādu*, `תעה` *nagāšu* (a+12), `התהלך` *alāku* Gtn, `חזר` *saḫāru* and `נד` is reserved. Rejected: `נָע` (the closest meaning, but it would pre-empt `נָע וָנָד`, Gen 4:12, which is tagged instead). *êš* = `אָנָה` (also OB II 145).
4. **The two questions** 7′–8′ (Šamaš) and a+16–a+17 (ale-wife) have identical Hebrew except the closing mark (8′ closes Šamaš's speech; a+17 ends with `:` before the explanation a+18–a+20). *saḫāru* "seek" = `חִזֵּר אַחֲרֵי`, *watû* = `מָצָא`, *balāṭu* = `חַיִּים`.
5. **11′ and 14′ follow eBL's normalization (Maul's readings)**, not George's translation: 11′ *mādū* "plenty" (`בתוך הארץ – רבה התנומה`; George "will rest be scarce?"); 14′ *rēqet* "is far" (`רחוקה החשכה? כמה הנהרה?`; George "hidden"); b+11 *rēqetam* "far". *sakāpu* = `נָם`, noun `תְּנוּמָה`; *erṣetu* = `אֶרֶץ` (netherworld).
6. **nawirtu "brightness" = `נְהָרָה`** [cognate] (13′, 14′; Job 3:4), apart from *nūru* = `אוֹר`. *šebû* = `שָׂבַע`. Šamaš (`שַׁמַשׁ`, 5′, 9′) and the sun (`שֶׁמֶשׁ`, 13′, 15′, b+11) are vocalized at every occurrence.
7. **a+18–a+20**: *banû* = `בָּנָה`; *šakānu* = `שׂים` (reserved, as X 321 `שׂמו מוות וחיים`); *ṣabātu* = `אָחַז` with the hands kept (`חיים – בידיהם אחזו`; George's "kept for themselves" hides the hands, which carry the comparison with Gen 3:22 `פֶּן יִשְׁלַח יָדוֹ`). Word order of the Akkadian kept (object first) so that a+19 / a+20 stand in parallel.
8. **The carpe diem a+21–a+28 is rendered word by word, with no Qohelet vocabulary that the Akkadian does not justify**: *karšu* = `מֵעַיִם` (§3.2) – "let your belly be full", not `לחמך`; *ḫadû* Gtn = doubled `שְׂמַח וּשְׂמַח` / `תשמח ותשמח` (no `שוב`, §11); *ḫidûta šakānu* = `שׂים שמחה` (keeps *šakānu*); *sâru* = `כִּרְכֵּר` (new; 2 Sam 6:14), *mēlulu* = `חוּל` (the root of X's noun *mēlulu* = `מָחוֹל`; rejected `שַׂחֵק`, which would pre-empt Gen 21:9, 26:8); *ṣubātu* = `שִׂמְלָה` (creation corpus; not `בגדיך`), *ebēbu* D stative = `מנוקות` (not `לְבָנִים`); *mesû* = `רָחַץ`, *ramāku* = `טָבַל`; *ṣubbû* = `שׁוּר` (new, vocalized; `הביט`/`הסתכל`/`צפה` are taken); *ṣeḫru* = `הַקָּטָן`; *marḫītu* = `רַעְיָה` (§4), *sūnu* = `חֲלָצַיִם` (§11, as VII). The comparison with Qoh 9:7–9 is made row by row in the index below.
9. **šīmtu = `גּוֹרָל`** (a+5, a+29); the parallel with Qohelet's `חֶלְקְךָ` is an index row, not a rendering.
10. **Names**: Sursunabu = `סוּרְסוּנַבּוּ` (project.md); Ūta-naʾištim = `אוּתְנַאִישְׁתִּים` (per-run prompt and project.md; renderings §1 writes `אוּתְנַאִישְׁתִּי` – open decision 1); `בַּעֲלַת־הַמִּסְבָּאָה` with maqaf (§12); `אַנְשֵׁי הָאֶבֶן` (§1); Uruk-Eanna = `אוּרוּךְ־אַיַּכּוּ`. *rūqu* and *rēqu* both `הרחוק`.
11. **New ordinary words**: *ḫerû* D = `חָפַר` (§9); *būrtu* = `בְּאֵר` (≠ *būru* `בּוֹר`); *redû* = `נָהַג` (§10: `נוהג את הרוחות`, not `רודף`, which is *ṭarādu*); *ašāšu* = `דָּאַג` (not `התעצב`: patāqu = עצב, and Gen 6:6 would be pre-empted); *dakāšu*/*daqāšu* = `*גוחן*`; *kibsu* = `שְׁבִיל`; *uzzu* = `זַעַם`; *nadānu* Št = `נִדְבַּר` (b+19; OB II 204); *ṭeḫû* D = `הִגִּישׁ` (b+18); *ṣertu* = `פִּטְמָה` (b+28; *tulû* = `דַּד` in X 161); *ṣuppā* = `שישים אמה`; *mušēbiru* = `מעביר`, *šūburu* = `הַעֲבִיר`.
12. **Copies of SB X with Akkadian changes**: b+26 *liqē-ma … ina qātīka* = `[קח], גילגמש, גרזן בידך,` (X 159 *iši … ana idīka* = `שא … ב[זרועך]`; *leqû* = `לקח` reserved); b+27 `[מוטות] בני שישים אמה – שלוש מאות כרות!` (X 160 with "go down to the forest" and five *nindanu*); b+28 `ושׂים פטמות` (X 161 `ושׂים דַּד`); a+39 `אם ראוי – את הים [אעבורה?]!"` (X 76/153, own brackets); a+41 `"לא היה, גילגמש, אשר כמוך …` (X 79 opening). Speech formulas: `X דיבר אליו, אל Y:` (§2 OB row; a+15 = a+40 = X 78), short `דיבר אל Y:` (6′).
13. **Brackets by the ATF**: e.g. 2′ `[לבש]`, 3′ `[חפר?]`, 4′ `[ש]תה?`, a+29 `גור[ל]`, a+33 `ח[ולה]` against a+35 `חולה`, b+19 `[ישבו]`, b+26 `[קח]`, b+27 `[מוטות]`; partly broken suffixes or prepositions are not bracketed.
14. **eBL slips recorded**: *ṣēru* lemmatized "back" (10′, a+12); a+20 has no subjunctive; b+24 and b+25 are listed as parallels of X 76 and X 77 (unrelated lines); a+9 is listed as = X 60 and a+39 as = X 75 (the true pairs are X 58 and X 76/153); X 80 and X 82 are listed against b+28 and b+27.

### Open decisions for the user
1. **Ūta-naʾištim**: `אוּתְנַאִישְׁתִּים` (chosen: per-run prompt and project.md, with the OB mimation of eBL's normalization) or `אוּתְנַאִישְׁתִּי` (renderings §1, parallel to SB `אוּתְנַפִּשְׁתִּי` without *-m*)? One of the two files must change.
2. ***dâlu* = `סוֹבֵב`** (chosen) or `נָע` (closer in meaning, but it would make the Gen 4:12 parallel in the translation itself)?
3. **11′, 14′**: eBL's normalization (Maul: "rest will be plenty", "is darkness far?") is translated; George's question "will rest be scarce?" and "darkness is hidden" are in the apparatus. Keep?
4. ***ṣubātu* = `שִׂמְלָה`** (corpus rule) in the carpe diem, where Qohelet has `בְגָדֶיךָ`: confirm that the corpus rule should hold here (alternative: `בגדיך`, which would turn an [equivalent] into an identity created by the translation).
5. ***ḫadû* Gtn as a doubled verb** (`שְׂמַח וּשְׂמַח`, `תשמח ותשמח`) or `שמח תמיד` (adds a word)?
6. ***sūnu* = `חֲלָצַיִם`** (§11) gives `רעיה – תשמח ותשמח בחלציך!`; `בחיקך` would be more natural (Deut 13:7 `אֵשֶׁת חֵיקֶךָ`), but `חֵיק` is *kirimmu* in I 178.

### Progress log
- 2026-10-17: read the brief, the whole guidelines, corpus.md, renderings (incl. §9–§12), both project files (SB tablet sections I, XI, VI, VII, X), the format models; ran `parallels_for.py OB-VA+BM --all`; read the eBL edition (N, T, L, notes, ATF) and SEAL 1534.
- Drafted all 87 entries in six sections into a data file and generated `annotated-OB-VA+BM.rtl.md` and `translation-OB-VA+BM.rtl.md` (Hebrew header and introduction, 8 footnotes).
- Pass (a) fidelity: every `>` line against N and the ATF; changes: b+27 `[מוטות]` (two root consonants broken), a+17 closing `:` (the speech continues), a+20 parse corrected (no subjunctive); brackets of a+2, a+29, a+33/a+35, a+36, a+37 rechecked.
- Pass (b) consistency: the X lines (55–60, 76, 78, 79, 109, 155, 159–161) compared character by character (`verify.py` list below); speech formulas; names and vocalization (`שַׁמַשׁ`/`שֶׁמֶשׁ` every time, `רֵעִי` every time, first occurrences); reserved strings grepped: `שׂים` only *šakānu* (a+19, a+23, b+28), `לקח` only *leqû* (b+26), `שב` only *târu* (b+2), no `ידע`, `עפר`, `טיט`, `עשב`, `עץ`, `עולם`, `נד`, `אלוהים`; new strings (`סובב`, `נהרה`, `תנומה`, `כרכר`, `שׁוּר`, `שביל`, `דאג`, `פטמות`) grepped against all earlier `>` lines: none in use.
- Pass (c) Hebrew: read aloud; 10′ and a+8 kept in their literal form. Then Tchernichovsky 1924 compared (he moves this speech into SB X): he imports `בִּבְרֹא אֱלֹהִים אָדָם`, `לָקְחוּ לָהֶם`, `אֱכֹל וּשְׁתֵה`, `בְּכָל־עֵת יִהְיוּ בְגָדֶיךָ לְבָנִים`, `וְשֶׁמֶן עָלָיו אַל יֶחְסָר`, `רְאֵה חַיִּים עִם הָאִשָּׁה` – Qohelet 9:7–9 almost verbatim, none of it in the Akkadian (no oil, no white garments, no wine, `אלהים`/`ברא`/`לקח` for *ilū*/*banû*/*ṣabātu*); nothing changed in ours.
- `python3 -I verify.py OB-VA+BM OB-II`: 87 entries = eBL 87, 87 translation lines, problems 0; the differences in repeated lines are justified below. `check_bible_quotes.py` on both files and this section: 0 problems.

### Parallels index (Tablet OB-VA+BM)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2′ | [iltab]aš maškīšunu | [לבש] את עורותיהם | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) | [divergence] | **Key.** *labāšu* ~ לבש [cognate], *mašku* = עור: the man who has seen death clothes *himself* (Gt) in the skins of the animals he killed; in Genesis God clothes man as he leaves the garden. Verb restored. Cf. SB X 6, 261. |
| 2′ | ikkal šīram | אוכל את הבשר | `כָּל רֶמֶשׂ אֲשֶׁר הוּא חַי לָכֶם יִהְיֶה לְאָכְלָה` (בראשית ט:ג) | [divergence] | Eating flesh as the mark of the man outside the order of the beginning (vs `הִנֵּה נָתַתִּי לָכֶם אֶת כָּל עֵשֶׂב`, 1:29). Weak. |
| 3′ | [uḫarr]i? būrātim | [חפר?] … בארות | `וַיָּשָׁב יִצְחָק וַיַּחְפֹּר אֶת בְּאֵרֹת הַמַּיִם` (בראשית כו:יח) | [equivalent] | Digging wells in the wild; verb restored (eBL with ?). |
| 4′ | iredde šārī | נוהג את הרוחות | `אֶפְרַיִם רֹעֶה רוּחַ וְרֹדֵף קָדִים` (הושע יב:ב) | [equivalent] | Chasing the wind as futile labour; *redû* = נהג. |
| 4′ | iredde šārī | נוהג את הרוחות | `וְהִנֵּה הַכֹּל הֶבֶל וּרְעוּת רוּחַ` (קהלת א:יד) | [equivalent] | Qohelet's image; Hebrew only, not a lexical link. |
| 5′ | šamšu ītašuš | שַׁמַשׁ דאג | `וַיִּתְעַצֵּב אֶל לִבּוֹ` (בראשית ו:ו) | [divergence] | A god grieved over a man; *ašāšu* "be distressed", rendered `דאג` so as not to make the echo. |
| 7′ | gilgāmeš êš tadâl | גילגמש, אָנָה אתה סובב? | `וַיִּקְרָא יְהוָה אֱלֹהִים אֶל הָאָדָם וַיֹּאמֶר לוֹ אַיֶּכָּה` (בראשית ג:ט) | [divergence] | A god's "where?" to a man; here not an interrogation about guilt but a warning that the search is vain. = a+16 (the ale-wife). |
| 7′ | êš tadâl | אנה אתה סובב | `אֵי מִזֶּה בָאת וְאָנָה תֵלֵכִי` (בראשית טז:ח) | [equivalent] | A divine messenger asks a wanderer in the wild "whither?" (*êš* = אנה). |
| 7′ | tadâl | סובב | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | [equivalent] | *dâlu* "roam restlessly" ≈ `נָע`; rendered `סובב` (open decision 2) so that the parallel is shown, not made. |
| 8′ | balāṭam ša tasaḫḫuru lā tutta | את החיים אשר אתה מחזר אחריהם – לא תמצא | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | [divergence] | **Key.** Life is beyond man's reach: in Genesis God bars the way, here the god only states that it will not be found. = a+17. |
| 8′ | ša tasaḫḫuru lā tutta | אשר אתה מחזר אחריהם – לא תמצא | `לְבַקֵּשׁ וְלֹא יִמְצָא; וְגַם אִם יֹאמַר הֶחָכָם לָדַעַת לֹא יוּכַל לִמְצֹא` (קהלת ח:יז) | [equivalent] | Seek / not find (*saḫāru* / *watû* = מצא); also `וְעָמֹק עָמֹק מִי יִמְצָאֶנּוּ` (קהלת ז:כד). |
| 10′ | atalluki | הִתְהַלֵּךְ | `וַיִּתְהַלֵּךְ חֲנוֹךְ אֶת הָאֱלֹהִים` (בראשית ה:כב) | [equivalent] | Gtn = Hithpael "walk about"; form only. |
| 11′ | ina libbu erṣetim sakāpum mādū | בתוך הארץ – רבה התנומה | `כִּי עַתָּה שָׁכַבְתִּי וְאֶשְׁקוֹט; יָשַׁנְתִּי אָז יָנוּחַ לִי` (איוב ג:יג) | [equivalent] | Rest in the netherworld (*erṣetu* = ארץ). Reading *mādū* "plenty" (Maul, eBL N); George "scarce?". |
| 11′–14′ | sakāpum mādū … rēqet ekletum | רבה התנומה … רחוקה החשכה? | `וְיִזְכֹּר אֶת יְמֵי הַחֹשֶׁךְ כִּי הַרְבֵּה יִהְיוּ` (קהלת יא:ח) | [equivalent] | **Key.** The many days of darkness against the little light of life; Qohelet's sequence light – sun – darkness is the same as 11′–15′. |
| 12′ | attillam-ma kalu šanātim | אשכב כל השנים | `וְאִישׁ שָׁכַב וְלֹא-יָקוּם עַד-בִּלְתִּי שָׁמַיִם לֹא יָקִיצוּ` (איוב יד:יב) | [equivalent] | *nâlu* = שכב (as SB X 70). |
| 13′ | īnāya šamšam liṭṭulā-ma | עיניי בַּשֶּׁמֶשׁ תבטנה | `וּמָתוֹק הָאוֹר; וְטוֹב לַעֵינַיִם לִרְאוֹת אֶת הַשָּׁמֶשׁ` (קהלת יא:ז) | [equivalent] | **Key.** The eyes and the sun, as the good of the living; *šamšu* = שמש [cognate]. |
| 13′ | nawirtam lušbi | ונהרה אשבעה | `וְאַל-תּוֹפַע עָלָיו נְהָרָה` (איוב ג:ד) | [cognate] | *nawirtu* (*nawāru* "shine") = נְהָרָה (Aram. נהורא). |
| 13′ | lušbi | אשבעה | `וַיִּגְוַע יִצְחָק וַיָּמָת וַיֵּאָסֶף אֶל עַמָּיו זָקֵן וּשְׂבַע יָמִים` (בראשית לה:כט) | [divergence] | *šebû* = שׂבע [cognate]: the patriarch dies "sated with days", Gilgameš asks to be "sated with light"; also `זָקֵן וְשָׂבֵעַ` (בראשית כה:ח). |
| 15′ | matīma mītum līmuram šarūru šamši | אי־פעם – יראה מת את קרן השמש? | `כְּעֹלְלִים לֹא-רָאוּ אוֹר` (איוב ג:טז) | [equivalent] | The dead do not see the sun; also `עַד-נֵצַח לֹא יִרְאוּ-אוֹר` (תהלים מט:כ), `גַּם שֶׁמֶשׁ לֹא רָאָה וְלֹא יָדָע` (קהלת ו:ה). |
| 15′ | mītum | מת | `הֲלַמֵּתִים תַּעֲשֶׂה-פֶּלֶא` (תהלים פח:יא) | [equivalent] | The dead outside the world of light (Ps 88). |
| a+5 | illik-ma ana šīmat awīlūtim | הלך אל גורל האדם | `אָנֹכִי הֹלֵךְ בְּדֶרֶךְ כָּל הָאָרֶץ` (מלכים א ב:ב) | [equivalent] | Death as "going" the way of all; SB X 57 has "the fate reached him". |
| a+6 | urrī u mūšī elīšu abki | יום ולילה בכיתי עליו | `וַיִּתְאַבֵּל עַל בְּנוֹ יָמִים רַבִּים` (בראשית לז:לד) | [equivalent] | Mourning; also `וַיִּבְכּוּ אֹתוֹ מִצְרַיִם שִׁבְעִים יוֹם` (בראשית נ:ג). |
| a+7 | ul addiššu ana qebērim | לא נתתיו לקבורה | `וָאֶקְבְּרֶהָ שָּׁם בְּדֶרֶךְ אֶפְרָת` (בראשית מח:ז) | [divergence] | Genesis buries its dead at once; Gilgameš refuses. = SB X 59. |
| a+8 | ibrī-man itabbiam ana rigmīya | אולי יקום רֵעִי לקולי | `אֲנִי הֹלֵךְ אֵלָיו וְהוּא לֹא יָשׁוּב אֵלָי` (שמואל ב יב:כג) | [divergence] | OB plus (not in SB): the hope that the dead will rise at the cry; David's opposite conclusion after the child's death (and see a+21–a+26 ↔ 2 Sam 12:20). |
| a+9 | sebet ūmim u sebe mušiātim | שבעה ימים ושבעה לילות | `וַיֵּשְׁבוּ אִתּוֹ לָאָרֶץ שִׁבְעַת יָמִים וְשִׁבְעַת לֵילוֹת` (איוב ב:יג) | [equivalent] | Seven days and seven nights of mourning; `וַיַּעַשׂ לְאָבִיו אֵבֶל שִׁבְעַת יָמִים` (בראשית נ:י). SB X 58 "six days". |
| a+10 | adi tûltum imqutam ina appīšu | עד שנפלה תולעת מאפו | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | [divergence] | The nose, where the breath of life entered, issues the worm; = SB X 60. |
| a+10 | tûltum | תולעת | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | [divergence] | Decay instead of the "return to dust"; also `תַּחְתֶּיךָ יֻצַּע רִמָּה וּמְכַסֶּיךָ תּוֹלֵעָה` (ישעיהו יד:יא). |
| a+11 | ištu warkīšu ul ūta balāṭam | מאחריו – לא מצאתי חיים | `לְבַקֵּשׁ וְלֹא יִמְצָא` (קהלת ח:יז) | [equivalent] | OB plus: Gilgameš himself says he did "not find life" – the words Šamaš and the ale-wife use (8′, a+17). |
| a+12 | attanaggiš kīma ḫābilim qabaltu ṣēri | תעיתי כלוכד באמצע השדה | `וְהִנֵּה תֹעֶה בַּשָּׂדֶה` (בראשית לז:טו) | [equivalent] | Wandering in the field (*nagāšu* = תעה, as SB X 5); *ḫābilu* "trapper" ↔ `אִישׁ יֹדֵעַ צַיִד אִישׁ שָׂדֶה` (כה:כז). |
| a+13 | ātamar pānīki | ראיתי את פנייך | `כִּי עַל כֵּן רָאִיתִי פָנֶיךָ כִּרְאֹת פְּנֵי אֱלֹהִים` (בראשית לג:י) | [equivalent] | "I have seen your face" as a formula of encounter; also b+12. |
| a+14 | mūtam ša ātanaddaru ai āmur | את המוות … אל אראה | `מִי גֶבֶר יִחְיֶה וְלֹא יִרְאֶה-מָּוֶת` (תהלים פט:מט) | [equivalent] | *mūta amāru* = `רָאָה מָוֶת`; the fear of death as Gilgameš's motive. |
| a+14 | mūtam ša ātanaddaru | את המוות, אשר אני חרד ממנו | `פֶּן תְּמֻתוּן` (בראשית ג:ג) | [divergence] | Fear of death as motive: in Genesis it guards a prohibition, here it drives the search. |
| a+18 | inūma ilū ibnû awīlūtam | כאשר בנו האלים את האנושות | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם` (בראשית ב:ז) | [equivalent] | *banû* = בנה, [equivalent] of `וַיִּיצֶר`, the root of `וַיִּבֶן` (ב:כב); the gods in the plural (cf. `נַעֲשֶׂה אָדָם`, א:כו). |
| a+18 | ibnû | בנו | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | [cognate] | *banû* / `בנה`: the creation verb of the woman. |
| a+19 | mūtam iškunū ana awīlūtim | מוות – שׂמו לאנושות | `כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת תָּמוּת` (בראשית ב:יז) | [divergence] | **Key.** Death as decree on man: in Genesis conditional on eating, here part of man's creation from the start. |
| a+19 | iškunū | שׂמו | `וַיָּשֶׂם שָׁם אֶת הָאָדָם` (בראשית ב:ח) | [equivalent] | *šakānu* = שׂים (reserved): the gods "set" death for man, God "set" man in the garden. Same verb in SB X 321 `שׂמו מוות וחיים`. |
| a+19–a+20 | mūtam … balāṭam | מוות … חיים | `רְאֵה נָתַתִּי לְפָנֶיךָ הַיּוֹם אֶת הַחַיִּים וְאֶת הַטּוֹב וְאֶת הַמָּוֶת וְאֶת הָרָע` (דברים ל:טו) | [divergence] | Death and life as the gods' allotment, without choice; Deuteronomy sets both before man and commands `וּבָחַרְתָּ בַּחַיִּים` (דברים ל:יט). Here death comes first. |
| a+20 | balāṭam ina qātīšunu iṣṣabtū | חיים – בידיהם אחזו | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | [divergence] | **Key.** The hand and life: the gods hold life in their hands; in Genesis God fears that man will stretch out *his* hand and take of the tree of life. *ṣabātu* "seize, hold" ↔ `וְלָקַח` [equivalent] (*leqû* not used). George's "kept for themselves" hides the hands. |
| a+20 | ina qātīšunu | בידיהם | `אֲשֶׁר בְּיָדוֹ נֶפֶשׁ כָּל-חָי` (איוב יב:י) | [equivalent] | Life in the god's hand; also `אֲנִי אָמִית וַאֲחַיֶּה … וְאֵין מִיָּדִי מַצִּיל` (דברים לב:לט). |
| a+20 | balāṭam ina qātīšunu | חיים – בידיהם | `הַשָּׁמַיִם שָׁמַיִם לַיהוָה; וְהָאָרֶץ נָתַן לִבְנֵי-אָדָם` (תהלים קטו:טז) | [equivalent] | A division between gods and men. |
| a+21 | lū mali karaška | יהיו מלאים מעיך | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ` (קהלת ט:ז) | [equivalent] | **Carpe diem 1.** Qohelet's first command (eat your bread); here the full belly, not the bread – eating itself is not named. Qohelet adds `לֵךְ` and the bread. |
| a+21 | karaška … lū mali | יהיו מלאים מעיך | `בִּטְנְךָ תַאֲכֵל וּמֵעֶיךָ תְמַלֵּא` (יחזקאל ג:ג) | [cognate] | *malû* ~ מלא [cognate] with *karšu* = מעיים: "fill your bowels". |
| a+21 | lū mali karaška | יהיו מלאים מעיך | `בְּזֵעַת אַפֶּיךָ תֹּאכַל לֶחֶם` (בראשית ג:יט) | [divergence] | Food: in Genesis the curse of toil, here the advice of the ale-wife. |
| a+22 | urrī u mūšī ḫitattu attā | יום ולילה – שְׂמַח וּשְׂמַח, אַתָּה | `וּשְׁתֵה בְלֶב טוֹב יֵינֶךָ` (קהלת ט:ז) | [equivalent] | **Carpe diem 2.** Joy (*ḫadû* Gtn); Qohelet ties it to wine (`יֵינֶךָ`), which the OB lacks (no drink in a+21–a+28). |
| a+22 | urrī u mūšī | יום ולילה | `כִּי אִם שָׁנִים הַרְבֵּה יִחְיֶה הָאָדָם בְּכֻלָּם יִשְׂמָח` (קהלת יא:ח) | [equivalent] | Joy at all times; Qohelet "in all the years", here "day and night". |
| a+23 | ūmišam šukun ḫidûtam | יום יום – שׂים שמחה | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ` (קהלת ט:ז) | [equivalent] | **Carpe diem 3.** *ḫidûtu* = שִׂמְחָה ↔ `בְּשִׂמְחָה`; Qohelet's `בְּכָל עֵת` (קהלת ט:ח, of the garments) corresponds to *ūmišam* "every day". |
| a+23 | šukun ḫidûtam | שׂים שמחה | `וְשִׁבַּחְתִּי אֲנִי אֶת הַשִּׂמְחָה אֲשֶׁר אֵין טוֹב לָאָדָם תַּחַת הַשֶּׁמֶשׁ כִּי אִם לֶאֱכֹל וְלִשְׁתּוֹת וְלִשְׂמוֹחַ` (קהלת ח:טו) | [equivalent] | Eat, drink, rejoice as man's only good. |
| a+24 | sūr u mēlil | כַּרְכֵּר וָחוּל | `עֵת סְפוֹד וְעֵת רְקוֹד` (קהלת ג:ד) | [absent] | **Carpe diem 4.** Dance and play are absent from Qoh 9:7–9. `מְכַרְכֵּר` (שמואל ב ו:יד) is the Hebrew for *sâru*. |
| a+25 | lū ubbubū ṣubātūka | יהיו שמלותיך מנוקות | `בְּכָל עֵת יִהְיוּ בְגָדֶיךָ לְבָנִים` (קהלת ט:ח) | [equivalent] | **Carpe diem 5. Same construction**: *lū* + stative + "your garments" = `יִהְיוּ בְגָדֶיךָ` + adjective. *ebēbu* "be clean, bright" ↔ `לְבָנִים` (whiteness); *ṣubātu* = שׂמלה ↔ `בְגָדֶיךָ` (different words). Qohelet adds `בְּכָל עֵת`. |
| a+25 | ṣubātūka | שמלותיך | `וַיִּרְחַץ וַיָּסֶךְ וַיְחַלֵּף שִׂמְלֹתָו` (שמואל ב יב:כ) | [equivalent] | Clean clothes after mourning (David after the child's death); `וַיְגַלַּח וַיְחַלֵּף שִׂמְלֹתָיו` (בראשית מא:יד). |
| a+25 | ṣubātūka | שמלותיך | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) | [divergence] | Clean garments against Gilgameš's skins (2′). |
| a+26 | qaqqadka lū mesi | ראשך – יהי רחוץ | `וְשֶׁמֶן עַל רֹאשְׁךָ אַל יֶחְסָר` (קהלת ט:ח) | [divergence] | **Carpe diem 6.** "Your head" in both; the OB washes it with water, Qohelet anoints it with oil. Qohelet adds the oil (in OB II 108 oil follows washing). |
| a+26 | mesi … ramkāta | רחוץ … טבול | `וְרָחַצְתְּ וָסַכְתְּ וְשַׂמְתְּ` (רות ג:ג) | [equivalent] | Washing, anointing, clothing as one sequence; *mesû* = רחץ; also 2 Sam 12:20. |
| a+26 | mê lū ramkāta | במים תהיה טבול | `וַיִּטְבֹּל בַּיַּרְדֵּן שֶׁבַע פְּעָמִים` (מלכים ב ה:יד) | [equivalent] | *ramāku* = טבל. |
| a+27 | ṣubbi ṣeḫram ṣābitu qātīka | שׁוּר את הקטן האוחז בידך | `רְאֵה חַיִּים עִם אִשָּׁה` (קהלת ט:ט) | [absent] | **Carpe diem 7.** The child is absent from Qohelet, which names only the wife; Qohelet's `רְאֵה` ↔ *ṣubbi* "gaze" [equivalent]. |
| a+27 | ṣeḫram ṣābitu qātīka | הקטן האוחז בידך | `קוּמִי שְׂאִי אֶת הַנַּעַר וְהַחֲזִיקִי אֶת יָדֵךְ בּוֹ` (בראשית כא:יח) | [equivalent] | Adult and child hand in hand. |
| a+27 | ṣeḫram | הקטן | `בְּעֶצֶב תֵּלְדִי בָנִים` (בראשית ג:טז) | [divergence] | Children: in Genesis under the curse, here part of the advice to rejoice; also `בָּנֶיךָ כִּשְׁתִלֵי זֵיתִים` (תהלים קכח:ג). |
| a+28 | marḫītum liḫtaddâm ina sūnīka | רעיה – תשמח ותשמח בחלציך | `רְאֵה חַיִּים עִם אִשָּׁה אֲשֶׁר אָהַבְתָּ כָּל יְמֵי חַיֵּי הֶבְלֶךָ` (קהלת ט:ט) | [equivalent] | **Carpe diem 8.** The wife (*marḫītu* = רעיה; Qohelet `אִשָּׁה אֲשֶׁר אָהַבְתָּ`); in the OB *she* rejoices "in your lap", in Qohelet *he* "sees life" with her. Qohelet adds `אֲשֶׁר אָהַבְתָּ` and `כָּל יְמֵי חַיֵּי הֶבְלֶךָ`. |
| a+28 | marḫītum liḫtaddâm | רעיה – תשמח | `וּשְׂמַח מֵאֵשֶׁת נְעוּרֶךָ … דַּדֶּיהָ יְרַוֻּךָ בְכָל-עֵת` (משלי ה:יח–יט) | [equivalent] | Joy in the wife and in her body; *ḫadû* = שׂמח. |
| a+28 | ina sūnīka | בחלציך | `וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד` (בראשית ב:כד) | [divergence] | Man and wife in the body; in Genesis union and leaving the parents, here pleasure. |
| a+28 | marḫītum | רעיה | `וְאֶל אִישֵׁךְ תְּשׁוּקָתֵךְ וְהוּא יִמְשָׁל בָּךְ` (בראשית ג:טז) | [divergence] | The woman's desire for the man under the curse vs the wife's joy in the advice. |
| a+21–a+28 | (the whole speech) | יהיו מלאים מעיך … רעיה – תשמח ותשמח בחלציך | `כִּי כְבָר רָצָה הָאֱלֹהִים אֶת מַעֲשֶׂיךָ` (קהלת ט:ז) | [absent] | Qohelet grounds the advice in God's approval; the ale-wife grounds it in the gods' having kept life for themselves (a+18–a+20). |
| a+21–a+28 | (the whole speech) | יהיו מלאים מעיך … | `וַיָּקָם דָּוִד מֵהָאָרֶץ וַיִּרְחַץ וַיָּסֶךְ וַיְחַלֵּף שִׂמְלֹתָו … וַיָּשִׂימוּ לוֹ לֶחֶם וַיֹּאכַל` (שמואל ב יב:כ) | [equivalent] | The return to life after a death: wash, (anoint,) change clothes, eat – advice that Gilgameš refuses, David's act. |
| a+29 | annāma šīmti … | זהו גור[ל] … | `כִּי הוּא חֶלְקְךָ בַּחַיִּים וּבַעֲמָלְךָ` (קהלת ט:ט) | [equivalent] | **Carpe diem 9.** The same closing statement: this is man's "lot" (*šīmtu* = גורל) / "portion" (`חֵלֶק`); also `כִּי הוּא חֶלְקוֹ` (קהלת ה:יז). Word partly restored. |
| a+30 | ša balṭu | אשר חי | `אֶל כָּל הַחַיִּים יֵשׁ בִּטָּחוֹן` (קהלת ט:ד) | [equivalent] | The living vs the dead; line broken. |
| a+33 | ana ibrīya libbī maruṣ | על רֵעִי – לבי ח[ולה] | `צַר לִי עָלֶיךָ אָחִי יְהוֹנָתָן` (שמואל ב א:כו) | [equivalent] | Grief for the dead friend. |
| a+38 | kibsam kullimī | הראי את השביל | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | The way to life: guarded in Genesis, asked of a woman here. |
| a+38 | kibsam | השביל | `בַּיָּם דַּרְכֶּךָ … בְּמַיִם רַבִּים; וְעִקְּבוֹתֶיךָ לֹא נֹדָעוּ` (תהלים עז:כ) | [equivalent] | A path through the sea (*kibsu* "track"). |
| a+39 | šumma naṭû tiāmtam [lūbir?] | אם ראוי – את הים [אעבורה?] | `וַיַּעֲבֹר אֵת מַעֲבַר יַבֹּק` (בראשית לב:כג) | [divergence] | Crossing the water as threshold (cf. b+5). Verb restored. |
| a+41 | ul ibši … ša kīma kâta | לא היה … אשר כמוך | `לֹא קָם נָבִיא עוֹד בְּיִשְׂרָאֵל כְּמֹשֶׁה` (דברים לד:י) | [equivalent] | "There was none like you". |
| b+2 | izzaz elīšu | ועומד עליו | `וְהִנֵּה שְׁלֹשָׁה אֲנָשִׁים נִצָּבִים עָלָיו` (בראשית יח:ב) | [equivalent] | Standing over someone; form only. |
| b+5 | mannum šumka | מי שמך | `מִי שְׁמֶךָ` (שופטים יג:יז) | [equivalent] | **Key.** Word for word (*mannum* = מי, *šumu* = שֵׁם [cognate]). |
| b+5 | mannum šumka qibiam yâšim | מי שמך? אמור לי | `וַיֹּאמֶר אֵלָיו מַה שְּׁמֶךָ; וַיֹּאמֶר יַעֲקֹב` (בראשית לב:כח) | [divergence] | **Key.** The question of the name at the crossing of a water (the Jabbok), in a night of struggle; also `הַגִּידָה נָּא שְׁמֶךָ` (לב:ל). In Genesis man asks the divine being, here the guardian of the crossing asks the man. |
| b+8 | gilgāmeš šumī anāku | גילגמש – שמי, אני | `אֲנִי יוֹסֵף אֲחִיכֶם` (בראשית מה:ד) | [equivalent] | Self-introduction by name. |
| b+9 | uruk | אוּרוּךְ | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד וְכַלְנֵה בְּאֶרֶץ שִׁנְעָר` (בראשית י:י) | [cognate] | Uruk = Erech. |
| b+11 | urḫam rēqetam waṣāʾu šamši | דרך רחוקה, מוצא השמש | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים` (בראשית ג:כד) | [equivalent] | The way to the one who has life lies in the east, at the sunrise; Eden is `מִקֶּדֶם` (ב:ח). *rēqetam* "far" (eBL; George "hidden"). |
| b+11 | waṣāʾu šamši | מוצא השמש | `מִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ` (תהלים יט:ז) | [equivalent] | *waṣû* = יצא; the sun's going out. |
| b+22 | šūt abnim-ma … mušēbirūʾa | אנשי האבן הם … מעביריי | `וַיַּעֲבֹר אֵת מַעֲבַר יַבֹּק` (בראשית לב:כג) | [equivalent] | *ebēru* = עבר [cognate]: ferrying across the water. |
| b+23 | aššum lā alappatu mê mūtim | כי לא אגע במי המוות | `וּמִפְּרִי הָעֵץ אֲשֶׁר בְּתוֹךְ הַגָּן אָמַר אֱלֹהִים לֹא תֹאכְלוּ מִמֶּנּוּ וְלֹא תִגְּעוּ בּוֹ: פֶּן תְּמֻתוּן` (בראשית ג:ג) | [equivalent] | **Key.** A prohibition of touch tied to death; here the forbidden thing is the "Waters of Death" themselves, on the way to the man who has life. *lapātu* = נגע (not cognate). = SB X 175 (`במי המוות – ידך אל תיגע!`). |
| b+23 | mê mūtim | מי המוות | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | The barrier on the way to life is water. |
| b+26 | [liq]ē-ma … ḫaṣṣinnam ina qātīka | [קח] … גרזן בידך | `וַיִּקַּח בְּיָדוֹ אֶת הָאֵשׁ וְאֶת הַמַּאֲכֶלֶת` (בראשית כב:ו) | [cognate] | *leqû* = לקח + a tool in the hand; verb restored. Form only. |
| b+27 | [parīsī] … ḫamšat šūši | [מוטות] … שלוש מאות | `שְׁלֹשׁ מֵאוֹת אַמָּה אֹרֶךְ הַתֵּבָה` (בראשית ו:טו) | [divergence] | 300 and cubits in building a craft for water; numerical only (here 300 poles of 60 cubits). |

### Lines shared with other tablets
- **The fixed passage (`../renderings.md` §3.2) = SB X 55–60**: a+1–a+4 = X 55–56 split over four lines (`רֵעִי` only where *ibrī* stands); a+7 = X 59 and a+10 = X 60 identical; a+5, a+6, a+9 change exactly the Akkadian changes (decision 2); a+8 and a+11–a+14 have no SB counterpart. Plene spelling as X (`מאוד`, `המוות`).
- **Within the tablet**: 7′–8′ = a+16–a+17 (only the closing mark differs: speech end vs continuation); a+15 = a+40 (= X 78; a+40 bracketed); b+4 = b+14 = b+21; a+32 = a+34; a+33 ~ a+35 (friend / Enkidu); a+13 ~ b+12 (ale-wife / Sursunabu); b+1 ~ b+24 (3rd / 2nd person).
- **SB X lines with Akkadian changes** (decision 12): X 76/153 → a+39; X 79 → a+41; X 109 → b+7 (`גילגמש דיבר אליו, אל סורסונבו:`, no "the boatman"); X 155 → b+21 (name); X 159–161 → b+26–b+28; X 106 → b+1 (`ביקע`); X 175 → b+23 (`נגע`, `מי המוות`); X 5 → a+12 (*nagāšu* = `תעה`); X 261 → 2′; X 321 → a+19 (`שׂמו … מוות`).
- **`verify.py` differences (OB-VA+BM), all justified**: X 55/56/57/58 ≠ a+1–a+6 (split lines and Akkadian changes, above); X 60 ≠ a+9 (eBL pairs a+9 with X 60; the true pair is X 58); X 75 ≠ a+39 (unrelated; the true pairs are X 76, 153: *naṭû* without *-ma*, end of speech, restored verb); X 79 ≠ a+41, X 155 ≠ b+21, X 159 ≠ b+26 (different Akkadian); X 80 ≠ b+28, X 82 ≠ b+27 (eBL mispairings); 8′ ≠ a+17 (closing mark only); 7′ / a+16 and a+40 / X 78 (vocalization and brackets only).
- **For later tablets**: SB VIII/IX copies of the lament take X's Hebrew, not this one; OB II 48 `שבעה ימים ושבעה לילות` = a+9 (done in the same run).

### Proposals for the shared renderings
1. **Names (§1):** Sursunabu = `סוּרְסוּנַבּוּ`; Ūta-naʾištim = `אוּתְנַאִישְׁתִּים` (or align to §1 `אוּתְנַאִישְׁתִּי`: open decision 1); Uruk-Eanna = `אוּרוּךְ־אַיַּכּוּ`.
2. **Key terms (§4):** *dâlu* = `סוֹבֵב` (open decision 2; Gen 4:12 `נָע` tagged, not used); *êš* = `אָנָה`; *nawirtu* = `נְהָרָה` [cognate]; *sakāpu* noun = `תְּנוּמָה`; *karšu malû* = `מעיים מלאים`; *ḫidûta šakānu* = `שׂים שמחה`; *sâru* = `כִּרְכֵּר`, *mēlulu* (verb) = `חוּל`; *ebēbu* D stative = `מְנֻקֶּה`; *ṣubbû* = `שׁוּר` (always vocalized); *ṣeḫru* = `קָטָן`; *ṣabātu* "hold (life) in the hand" = `אָחַז בְּיָד`; *šūt abnim* (OB) = `אַנְשֵׁי הָאֶבֶן`.
3. **Ordinary words (§5):** *būrtu* = `בְּאֵר`; *ašāšu* = `דָּאַג`; *dakāšu*/*daqāšu* = `*גָּחַן*`; *kibsu* = `שְׁבִיל`; *uzzu* = `זַעַם`; *nadānu* Št = `נִדְבַּר`; *ṭeḫû* D = `הִגִּישׁ`; *ṣertu* = `פִּטְמָה`; *ṣuppā* = `שישים אמה`; *mušēbiru* = `מַעֲבִיר`; *šūburu* = `הַעֲבָרָה` / `הַעֲבִיר`; *rigmu* = `קוֹל`; *-man* = `אוּלַי`.
4. **Formula (§2):** OB *ana šâšum issaqqaram ana* Y = `X דיבר אליו, אל Y:` (as SB); OB *issaqqaram ana* Y alone = `דיבר אל Y:`; OB *ana šâšim* (to her) = `דיבר אליה`.

### Lessons for the guidelines
- **A text that later literature quotes almost verbatim (the carpe diem ↔ Qoh 9:7–9) needs one index row per clause**, each saying what the later text adds or lacks; a single "parallel" row hides the differences, which are the findings (here: no wine, no oil, no white, no God's approval in the OB; no child in Qohelet).
- **The rank-6 Hebrew translation can import the later text wholesale**: Tchernichovsky renders the OB speech with Qohelet's own verses. Check every Hebrew literary translation of a passage with a known biblical counterpart word by word against the Akkadian.
- **eBL's normalization sometimes follows a newer reading than its own translation** (Maul's *mādū*, *rēqet* against George's T): translate N and record T's reading.

## Tablet OB-II

### Scope
OB II (the Pennsylvania tablet; eBL BabaOB1, CBS 7771), all 145 eBL labels (George's line numbers 1–242, many as ranges `4-5`, `222-224` for one verse written over two or three manuscript lines): col. i 1–38 (Gilgameš's two dreams and his mother's interpretation, = SB I 243–288), col. ii 43–84 (Enkidu and Šamḫat; "you are like a god"; the garment; the shepherds' hut), col. iii 85–122 (bread and beer; "he became a man"; the guard of the shepherds; the man going to the wedding), col. iv 135–166 (the bridegroom's report: "first he, afterwards the husband"), col. v 174–204 (Enkidu enters Uruk; the equal of Gilgameš; Išḫara's bed), col. vi 208–242 (the fight in the door; Enkidu's praise of Gilgameš; the colophon *šūtur eli šarrī*). Single manuscript, very well preserved; lost: 39–42, 123–134, 167–173, 205–207 (no labels); damaged: 27–28, 78–84 (80–84 wholly restored from 183–189), 120–122, 174–176, 204–211.

### Sources consulted
- eBL `L/1/4` OB II (`../../sources/eBL/Gilgamesh-OB-II/reading-edition.md`: N, T, L, notes, parallels, ATF).
- SEAL 1830 (`../../sources/SEAL/Gilgamesh-OB/node-1830--Gilg-OB-II.md`): transliteration, lemmas, translation (George's, with small changes, e.g. 108 "became a human being", 110 "like a man").
- `../renderings.md` incl. §9–§12; SB I (`../1-הנוסח-הבבלי-התקני/annotated-I.rtl.md`, 29, 74, 95, 100–112, 186–298) and X, VII; `../parallels_for.py OB-II --all` (102 lines with parallels, most of them to SB I and to the untranslated SB II and MB tablets).
- George's translation (eBL T), after drafting; Tchernichovsky 1924 (who had no OB II text: his Tablet I–II scenes, e.g. ll. 835–851, give Enkidu "bread and wine" from the altar) after pass (c).
- The vocalized Bible through `../../tools/check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** with the eBL normalization inserted by script (as OB VA+BM and SB X).
2. **SB I binds the dream passage where the Akkadian is identical, and changes exactly where it differs**: 1–2 split SB I 243 (`קם גִּלְגָּמֶשׁ, פושר חלום,` / `מדבר אל אמו:`, keeping I 243's participle); 29–30 = I 276; 33–34 = I 282 with the OB present *aḫabbub* (`וכאשה מחבק אני אותו`); 7 *kiṣrum* without *kīma* (`גוש של אָנוּ`); 8 *iktabit* (`וכבד היה ממני`); 9 *nâšu* D (`הנעתי … להניעו`); 10 *paḫir* (`נקבצת`, as I 276); 14 *atbalaššu ana ṣērīki* (`והבאתי אותו אלייך`); 26 without *ippunna*/*šutta*; 48–50 = I 192 split, with "seven days" (as OB VA+BM a+9); 53 *anaṭṭalka* … `כְּאֵל היית` (§4 formula; flood XI 2 `מביט אני בך`); 54–55 *tattanallak* (`מתהלך` for I 206's `משוטט`); 56–57 *lurdēka* = `אֶנְהָגְךָ` (*redû*, §10) and *Uruk ribītim* (`אורוך־הכיכר`); 58 without Ištar; 242 *šūtur eli šarrī* = I 29 `נעלה על המלכים`.
3. **6 *ibbīšūnim-ma* = `זזו`**, following George's translation ("parted company") and the form, against eBL's lemma *bašû* (SB I 245 `נהיו לי`): the N-form with *ī* does not fit *bašû*; the lemma looks copied from the SB line.
4. **37–38 translated from the manuscript, not from N**: eBL's normalization adds *emqet* and *īde*, which the ATF and George's translation lack (copied from I 284); hence `אֵם גילגמש, יודעת את הכל, [דיברה] א[ל גילגמש]:` (= 15 + 16).
5. **Speech formulas (OB):** *pīša īpušam-ma* / *issaqqaram ana* Y over two lines = `הזונה פתחה את פיה,` / `ודיברה אל אנקידו:` (§2 OB row, without `ואמרה`, since there is no *iqabbi*); in one line (94–95) joined; *issaqqaram ana* Y alone = `דיברה/דיבר אל Y:`; *ana šâšim issaqqaram* = `X דיבר אליו, אל Y:`; *ītawwâm* (*awû* Gt) = `שָׂח`.
6. **The bread-and-beer passage (87–119)**, the key Genesis passage of the tablet: *akala šakānu* = `לחם שׂמו` (Gen 43:31 `שִׂימוּ לָחֶם`); *ul īde … aklam ana akālim* = `לא ידע אנקידו לחם לאכול` (*edû* = ידע, *akālu* = אכל, both cognate); *lamādu* D stative = `לֻמַּד`; *simat balāṭim* = `הראוי לחיים` (§4 *simat*); *šīmti mātim* = `גורל הארץ`; *šebû* = `שׂבע`; *assammu* = `גָּבִיעַ`; *pašāru* N (103) = `נִפְשְׁרָה רוחו` – the corpus's *pašāru* = `פשר` kept even in this sense, so that the link with "פושר חלום" (1, 44) is visible; *elēṣu libbu* = `עלץ לבו` [cognate, 1 Sam 2:1]; *gallābu* = `גַּלָּב`; *lapātu* (derived stem, "groom") = `טיפל` (not `נגע`, kept for *lapātu* "touch"); **108–109 *šamnam iptašaš-ma awīliš īwe* = `שֶׁמֶן סָךְ – היה לאדם`**: *awīlu* = `אָדָם` (§4), *ewû/emû* + *-iš* = `היה לְ־` exactly as X 68 *ṭiṭṭiš emû* = `היה לטיט`; the *-ma* is a dash, because `והיה` reads as a converted future and `ולאדם היה` as "and the man had"; rejected `נהיה לאדם` / `נעשה לאדם` (hide the `הָיָה לְ־` structure of Gen 2:7); 110–111 *kīma mutim ibašši* = `כגבר היה`.
7. ***mutu*** = `בַּעַל` where it means "husband" (160–161, §9) and `גֶּבֶר` where it means "man, warrior" (110–111, 238); the cognate `מְתִים` "men" was rejected (reads "dead"). Open decision 3.
8. **Clothing (69–72):** *šaḫāṭu* = `פָּשַׁט` (§9), *libšu* (OB poetic) = `מַלְבּוּשׁ` (new; *lubūšu* = `לְבוּשׁ`), *labāšu* D = `הִלְבִּישׁ` [cognate ↔ `וַיַּלְבִּשֵׁם`], Gt = `לָבַשׁ`.
9. **The shepherds (75–119):** *gupru* = `סֻכָּה` (new; Gen 33:17), *tarbaṣu* = `רֶבֶץ` (§4) [cognate ↔ Gen 4:7 `רֹבֵץ`], *nāqidu* = `נוֹקֵד`, *maṣṣaru* = `נוֹצֵר` (never `שׁוֹמֵר`), *ēru* = `עֵר`, *sakāpu* = `נָם`; *napāṣu* D = `נִפֵּץ`; *kašādu* D "chase off" = `הֵנִיס` (rejected `גירש`, a Gen 3:24 echo without basis, and `הבריח`, which reads "the bolt"); *lābu* = `לָבִיא` (pl. `לְבָאִים`).
10. **The wedding (120–166):** *emu* = `חָם` (law corpus), *bīt emi* = `בית החם`; *emūtu* = `חֲתֻנָּה`; *ḫiāru* = `בָּחַר` and *ḫayyāru* = `בּוֹחֵר` (so that `מִכֹּל אֲשֶׁר בָּחָרוּ`, Gen 6:2, can be compared word for word); *kallūtu* = `כְּלוּלוֹת` [cognate of *kallatu*]; *uklu* = `מַאֲכָל` [cognate]; *ṣayyaḫu* = `עָרֵב` (rejected `מעדנים`, root עדן); *pūgu* = `*רשת*`; *aššat šīmatim* = `אשת הגורל`; *pānānum* = `תחילה` (not `בראשונה`, which contains ברא); *abunnatu* = `טַבּוּר`, *bitqu* = `בִּתּוּק` (*batāqu*, §10); *arāqu* = `הוֹרִיק` [cognate].
11. **The equal (183–195):** *mašālu* = `משול`; *padattu* = `גִּזְרָה`; *lānu* = `גוף`; *eṣemtu* = `עֶצֶם` [cognate ↔ Gen 2:23]; *pagālu* = `חָסוֹן`; *meḫru* = `שָׁוֶה` (§4 *maḫāru*; never `כנגדו`) ↔ `עֵזֶר כְּנֶגְדּוֹ`; 80 restored as 183 (N's *padānam* "way" looks like a slip for *padattam*).
12. **The fight (208–240):** *maḫāru* Gt = `נפגשו פנים אל פנים` (as I 112); *parāku* = `חָסַם`, *parāsu* = `קָטַע`; *nadānu* + infinitive = `נתן ל־` "allow" [cognate idiom]; *līʾu* = `פַּר` (vocalized `כַּפָּר`); *lâdu* = `כָּפַף`; *sippu* = `מְזוּזָה` (VII), *igāru* = `קִיר`, *ratātu* = `זָע`; *kamāsu* = `כָּרַע`; *pašāḫu* = `נִרְגַּע`; *nêʾu irta* = `הפנה את חזהו` (literal); *kīma ištēn-ma* = `כיחיד`; *rīmtu* = `רְאֵמָה`; *ullû* = `מוּרָם`; *šâmu* = `גָּזַר`.
13. **Names:** Šamḫat = `שַׁמְחַת` (always vocalized) also where the OB tablet writes *Šamkatum* (open decision 2); Ninsunna = `נִינְסוּנָּה` (the form of the text; project.md's *Ninsumun* does not occur here); Išḫara = `אִשְׁחַרָה`; Ayakku = `אַיַּכּוּ`; Anu `אָנוּ` always vocalized.
14. **Other new words:** *šamāḫu* = `פּוֹרֵחַ` (the root of the name Šamḫat, noted); *edēru* = `לָפַת` (apart from *ḫabābu* = `חִבֵּק`); *emēdu* = `סָמַךְ`, N `נִסְמַךְ`; *âru* = `הוֹלִיךְ`; *abāku* = `נֶעְתָּק`; *magāru* = `רָצָה` (I 211); *milku* = `עֵצָה`; *piāqu* = `צִמְצֵם`; *nagû* = `רִנֵּן`; *akāšu* = `צָעַד` (D `הִצְעִיד`); *ḫiāšu* = `חָשׁ`; *mānaḫtu* = `יְגִיעַ`; *zikru* = `מַאֲמָר`; *ṣênu* = `טָעַן`; *tāwītu* = `שִׂיחָה`; *kayyānu* = `תָּמִיד`; *nīqu* = `זֶבַח`; *anāpu* = `רָגַז`; *šizbu* = `חָלָב`; *enēqu* Gtn = `היה יונק`; *nâšu* D = `הֵנִיעַ`; *ulṣu* = `עֲלִיצוּת`.
15. **Reserved strings** checked: `שׂים` only *šakānu* (35–36, 62–63, 87, 191–192, 194–195; 61 *šakānu* Gt idiom rendered by sense, `עוסקים`), `לקח` only *leqû* (35–36, 112–113), `ידע` only *edû*/*mūdû* (15, 37–38, 90–91), `אדם` only *awīlu*; no `שוב`, `עפר`, `טיט`, `עשב`, `עץ`, `עולם`, `קרא` (212–213 `אל פניו`, not `לקראתו`), `ברא`, `נחש`, `ערום`.
16. **eBL slips recorded:** 37–38 (N adds *emqet*, *īde*); 6 (lemma *bašû*); 80 (*padānam*); *ṣēru* lemmatized "back" throughout (47, 54–55, 77); 120–121 *ussaqqir* lemmatized *zakāru* (sense unclear; George "invited"); 103 and 106–107 lemmas G-stem glosses for N / derived stems.

### Open decisions for the user
1. **108–109 `שֶׁמֶן סָךְ – היה לאדם`**: the dash for *-ma* (chosen) or `וּלְאָדָם הָיָה` (Akkadian word order, but ambiguous unvocalized) or `ונהיה לאדם` (unambiguous, loses `הָיָה לְ־` of Gen 2:7 and X 68)?
2. **Šamkatum**: `שַׁמְחַת` everywhere (chosen; one character, one name) or the OB form `שַׁמְכַּתוּם` where the tablet writes it (135, 140, 175), as the corpus does for Ḫuwawa / Sursunabu / Ūta-naʾištim?
3. ***mutu***: `גֶּבֶר` (110–111, 238) and `בַּעַל` (160–161) by sense, or `בַּעַל` everywhere (`כבעל היה` – "became like a husband", a reading some scholars defend)?
4. **6 `זזו`** (George, the form) against eBL's lemma *bašû* (`נהיו לי`, = SB I 245)?
5. **103 `נִפְשְׁרָה רוחו`**: keeping the corpus's `פשר` for *pašāru* in the sense "be released, relax" (chosen, to show the one verb) or `הותרה רוחו` by sense?
6. **106–107 *lapātu*** in a derived stem "groom, treat" = `טיפל` (chosen) or the corpus's `נגע` (`נגע הגלב בגוויתו`, literal but obscure)?
7. **1–2**: OB II 2 keeps SB I 243's participle `מדבר` (the line is the second half of I 243), while every other *issaqqaram ana* Y of the OB tablets is `דיבר`. Keep the SB form, or make OB II 2 `דיבר אל אמו:`?

### Progress log
- 2026-10-17 (same run as OB VA+BM): ran `parallels_for.py OB-II --all`; read the eBL edition (N, T, L, notes, ATF), SEAL 1830 and the SB I dream passage and Enkidu passage.
- Drafted all 145 entries in eight sections (Hebrew header and introduction, 18 footnotes) into a data file; generated `annotated-OB-II.rtl.md` and `translation-OB-II.rtl.md`.
- Pass (a) fidelity: every line against N and the ATF; changes: 27–28 `[של אורוך]` and 58 `[הטהור]` (root consonants broken: *[ša uru]k*, *e[l-l]im*), consistent with 56–57; 51 `הזונה` unbracketed (root legible); 37–38 retranslated from the ATF (decision 4).
- Pass (b) consistency: SB I lines compared character by character (`verify.py` list below); 242 aligned with I 29 (`נעלה על המלכים`, first draft had `יתר`); 238 *ullû* therefore `מוּרָם`; formulas; names and vocalization (`שַׁמְחַת`, `אָנוּ`, `רְאֵמָה`, `אֵם`, `דְּבָרָהּ`, `וְשָׂחָה`, `לֻמַּד`, `שֵׁכָר`); reserved strings grepped (decision 15); new strings grepped against all earlier `>` lines (none in use, except `שכח` – VII *mašû* too, consistent).
- Pass (c) Hebrew: read aloud; kept the literal `פתוחה *רשת* האנשים לבוחר` and `הפנה את חזהו` with notes. Tchernichovsky 1924 compared: he has no OB II, and his SB-based scenes give Enkidu `לֶחֶם וְיַיִן` "from the altar", call the harlot `קְדֵשָׁה` and the god `אֱלֹהִים` – none of these here; nothing changed.
- `python3 -I verify.py OB-VA+BM OB-II`: 145 entries = eBL 145, 145 translation lines, problems 0. `check_bible_quotes.py` on both files and this section: 0 problems.

### Parallels index (Tablet OB-II)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | šunatam ipaššar | פושר חלום | `וַיַּחֲלֹם יוֹסֵף חֲלוֹם וַיַּגֵּד לְאֶחָיו` (בראשית לז:ה) | [equivalent] | The young man tells his dream to his family; = SB I 243. |
| 1 | ipaššar | פושר | `חֲלוֹם חָלַמְנוּ וּפֹתֵר אֵין אֹתוֹ` (בראשית מ:ח) | [cognate] | *pašāru* ~ פשר (Aram., Qoh 8:1 `פֵּשֶׁר דָּבָר`) ↔ `פֹּתֵר` [equivalent]; here "reveal, tell" a dream, the interpreter is the mother (15–23). Never `פתר` in the lines. Also 44. |
| 6 | kakkabū šamāʾī | כוכבי השמים | `וְהִנֵּה הַשֶּׁמֶשׁ וְהַיָּרֵחַ וְאַחַד עָשָׂר כּוֹכָבִים מִשְׁתַּחֲוִים לִי` (בראשית לז:ט) | [equivalent] | Stars in the dream of the young future ruler; *kakkabu* = כוכב [cognate]. Here a star falls and is carried; there they bow. |
| 6–23 | (the dream and its interpretation) | … | `הֲבוֹא נָבוֹא אֲנִי וְאִמְּךָ וְאַחֶיךָ לְהִשְׁתַּחֲוֹת לְךָ אָרְצָה` (בראשית לז:י) | [divergence] | The parent interprets the dream: Jacob rebukes, Ninsun welcomes; the mother is named in both. |
| 8 | aššīšū-ma iktabit elīya | נשאתי אותו – וכבד היה ממני | `לֹא אוּכַל אָנֹכִי לְבַדִּי לָשֵׂאת אֶת כָּל הָעָם הַזֶּה כִּי כָבֵד מִמֶּנִּי` (במדבר יא:יד) | [cognate] | *našû* = נשא, *kabātu elīya* = `כָּבֵד מִמֶּנִּי` [cognate]. |
| 10 | uruk | אוּרוּךְ | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד וְכַלְנֵה בְּאֶרֶץ שִׁנְעָר` (בראשית י:י) | [cognate] | Uruk = Erech. |
| 11 | eṭlūtum unaššaqū šēpīšu | העלמים מנשקים את רגליו | `וְהִנֵּה תְסֻבֶּינָה אֲלֻמֹּתֵיכֶם וַתִּשְׁתַּחֲוֶיןָ לַאֲלֻמָּתִי` (בראשית לז:ז) | [equivalent] | Homage to the thing in the dream; = 21 (the young men will kiss the feet of the man it stands for); `וְעַל פִּיךָ יִשַּׁק כָּל עַמִּי` (בראשית מא:מ). |
| 18–19 | ina ṣērim iwwalid-ma urabbīšu šadû | בשדה נולד, וגידלו ההר | `וַיִּגְדָּל וַיֵּשֶׁב בַּמִּדְבָּר וַיְהִי רֹבֶה קַשָּׁת` (בראשית כא:כ) | [equivalent] | A child raised in the wild; also `אִישׁ יֹדֵעַ צַיִד אִישׁ שָׂדֶה` (כה:כז). |
| 24 | ittīlam-ma ītamar šanītam | שכב, וראה (חלום) שני | `וַיִּישָׁן וַיַּחֲלֹם שֵׁנִית` (בראשית מא:ה) | [equivalent] | Sleep and a second dream (Pharaoh); `וַיַּחֲלֹם עוֹד חֲלוֹם אַחֵר` (לז:ט). |
| 31 | šani būnūšu | שונה תוארו | `וַיְהִי יוֹסֵף יְפֵה תֹאַר וִיפֵה מַרְאֶה` (בראשית לט:ו) | [equivalent] | Appearance (*būnu* = תואר) of the axe, which is a man (SB I 286). |
| 33–34 | arāmšū-ma kīma aššatim | אהבתי אותו, וכאשה | `וַתְּהִי לוֹ לְאִשָּׁה וַיֶּאֱהָבֶהָ` (בראשית כד:סז) | [equivalent] | *râmu* = אהב; "like a wife": the future friend is loved as a wife (cf. 2:18–24). |
| 35–36 | elqēšū-ma aštakanšu ana aḫīya | לקחתי אותו, ושׂמתיו לצדי | `וַיִּקַּח אַחַת מִצַּלְעֹתָיו` (בראשית ב:כא) | [divergence] | **Key.** Taking (*leqû* = לקח [cognate]) and the side (*aḫu* "side" ↔ `צֵלָע` "side, rib"): God takes from man's side to make the woman; here the dreamer takes what he loves "like a wife" and puts it at his side – and it is his friend. |
| 35–36 | aštakanšu | ושׂמתיו | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע אֲשֶׁר לָקַח מִן הָאָדָם לְאִשָּׁה; וַיְבִאֶהָ אֶל הָאָדָם` (בראשית ב:כב) | [equivalent] | *šakānu* = שׂים (reserved) ↔ `וַיָּשֶׂם` (ב:ח); the partner placed beside the man. No SB counterpart for this line. |
| 43 | aššum uštamaḫḫaru ittīka | למען אשווה (אותו) עמך | `אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | [equivalent] | **Key.** The mother "makes equal" a partner for her son as God makes man a `כְּנֶגְדּוֹ`; *šutamḫuru* = הִשְׁוָה (never כנגדו). = SB I 288. Person ambiguous (1st or 3rd). |
| 45 | maḫar ḫarimtim | לפני הַזּוֹנָה | `וַיַּחְשְׁבֶהָ לְזוֹנָה` (בראשית לח:טו) | [equivalent] | *ḫarimtu* = זונה (root *ḫarāmu* ~ חרם, different meaning). |
| 47 | ṣēram imtaši ašar iwwaldu | את השדה שכח, את המקום אשר נולד בו | `עַל כֵּן יַעֲזָב אִישׁ אֶת אָבִיו וְאֶת אִמּוֹ; וְדָבַק בְּאִשְׁתּוֹ` (בראשית ב:כד) | [divergence] | **Key.** The man leaves his origin for the woman: Genesis his father and mother, here the open country where he was born (no SB counterpart). |
| 47 | ṣēram imtaši | את השדה שכח | `וְשִׁכְחִי עַמֵּךְ וּבֵית אָבִיךְ` (תהלים מה:יא) | [equivalent] | Forgetting the house of origin at marriage; *mašû* = שכח [equivalent]. Also `לֶךְ לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ` (בראשית יב:א). |
| 48 | ūmī sebet u sebe mušiātim | שבעה ימים ושבעה לילות | `מַלֵּא שְׁבֻעַ זֹאת` (בראשית כט:כז) | [equivalent] | A week of union; "seven", not SB I 192's "six" (numeral damaged, read 7 after OB VA+BM a+9). |
| 49–50 | tebī-ma šamḫat irḫi | קם, ובא על שַׁ[מְחַת] | `וַיָּבֹא אֵלֶיהָ` (בראשית כט:כג) | [equivalent] | *reḫû* = `בא על`, euphemism; = SB I 192. |
| 53 | anaṭṭalka enkīdu kīma ilim tabašši | מביטה אני בך, אנקידו – כְּאֵל היית | `וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | [equivalent] | **Key.** The woman tells the man he has become like a god – after intercourse (49–50), not after eating (in Genesis the snake to the woman, before eating). *ilu* singular = כְּאֵל. SB I 205 has *damqāta* "you are handsome" for *anaṭṭalka*. |
| 53 | kīma ilim tabašši | כְּאֵל היית | `הֵן הָאָדָם הָיָה כְּאַחַד מִמֶּנּוּ לָדַעַת טוֹב וָרָע` (בראשית ג:כב) | [equivalent] | "Has become like one of us" – followed by the departure from the animals' world (54–65) / the expulsion (ג:כג). Tense: open decision 2 of Tablet I. |
| 54–55 | itti nammaštê tattanallak ṣēram | עם הנעים מתהלך אתה בשדה | `וּלְכֹל חַיַּת הַשָּׂדֶה וּלְאָדָם לֹא מָצָא עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:כ) | [equivalent] | The man among the animals of the field, without an equal (cf. 194–195). *ṣēru* = שדה, *nammaštû* = הנעים. |
| 61 | ašar šitkunū nēpešētim | מקום אשר בו עוסקים במעשי אומנות | `וַיְשַׁלְּחֵהוּ יְהוָה אֱלֹהִים מִגַּן עֵדֶן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ג:כג) | [divergence] | Leaving the natural state: in Genesis to till the soil, here to the city of crafts. |
| 62–63 | kīma awīlim-ma taštakkan ramānka | כאדם? [תשׂים?] את עצמך | `וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה` (בראשית ב:ז) | [equivalent] | After "like a god" (53), "like a man" (*awīlu* = אדם); fulfilled in 108–109. Verb restored. |
| 64–65 | ina qaqqarim māk rēʾîm | מן הקרקע באין רועה | `כַּצֹּאן אֲשֶׁר אֵין לָהֶם רֹעֶה` (במדבר כז:יז) | [equivalent] | "Where there is no shepherd" (*makû* + *rēʾû*). |
| 66 | išme awāssa | שמע את דְּבָרָהּ | `כִּי שָׁמַעְתָּ לְקוֹל אִשְׁתֶּךָ וַתֹּאכַל מִן הָעֵץ` (בראשית ג:יז) | [equivalent] | **Key.** The man listens to the woman, and eating follows (87–100): in Genesis the reason for the curse, here the way to humanity. Also `וַיִּשְׁמַע אַבְרָם לְקוֹל שָׂרָי` (בראשית טז:ב). |
| 67–68 | milkum ša šinništim imtaqut ana libbīšu | עצת האשה נפלה אל לבו | `וַתִּתֵּן גַּם לְאִישָׁהּ עִמָּהּ וַיֹּאכַל` (בראשית ג:ו) | [equivalent] | The woman's counsel changes the man's course; *milku* = עצה (no link with עץ). |
| 69–70 | ištīnam ulabbissu | את האחד – הלבישה אותו | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) | [divergence] | **Key.** *labāšu* D = `הִלְבִּישׁ` [cognate], the same stem: God clothes man and wife; here the woman clothes the man in half of her own garment and wears the other half (71–72). = SB II 34–35 (other wording). |
| 69–70 | išḫuṭ libšam | פשטה מלבוש | `וַיִּתְפַּשֵּׁט יְהוֹנָתָן אֶת הַמְּעִיל אֲשֶׁר עָלָיו וַיִּתְּנֵהוּ לְדָוִד` (שמואל א יח:ד) | [equivalent] | Stripping off one's garment to give it to the other; *šaḫāṭu* = פשט. |
| 69–72 | (clothing) | פשטה מלבוש … היא לבשה | `וַיִּתְפְּרוּ עֲלֵה תְאֵנָה וַיַּעֲשׂוּ לָהֶם חֲגֹרֹת` (בראשית ג:ז) | [divergence] | First clothing of the pair; no shame motif here (Enkidu is never called naked). |
| 73–74 | ṣabtat qāssu kīma ilim ireddēšu | אוחזת בידו, כְּאֵל נוהגת אותו | `וַיְבִאֶהָ אֶל הָאָדָם` (בראשית ב:כב) | [divergence] | God brings the woman to the man; here the woman leads the man. *redû* = נהג (`וְנַעַר קָטֹן נֹהֵג בָּם`, ישעיהו יא:ו). |
| 75–76 | ana gupri ša rēʾîm | אל סוכת הרועה | `וַיְהִי הֶבֶל רֹעֵה צֹאן` (בראשית ד:ב) | [equivalent] | **Key.** The shepherds as the first station of culture outside the wild; in Genesis the shepherd is the second brother. *rēʾû* = רועה [cognate]. |
| 75–76 | gupru | סוכת | `וּלְמִקְנֵהוּ עָשָׂה סֻכֹּת` (בראשית לג:יז) | [equivalent] | *gupru* "shepherd's hut" = סֻכָּה. |
| 75–76 | ašar tarbāṣim | מקום הרבץ | `לַפֶּתַח חַטָּאת רֹבֵץ` (בראשית ד:ז) | [cognate] | *tarbaṣu* (from *rabāṣu*) ~ רבץ: the "lair" at the shepherds' place, the word of Gen 4:7. Root only. |
| 85–86 | šizba ša nammaštê ītenniq | את חלב הנעים היה יונק | `וּלְבֶן שִׁנַּיִם מֵחָלָב` (בראשית מט:יב) | [equivalent] | Enkidu's former food (milk of the animals; SB I 108 grass) before bread; *enēqu* = ינק [cognate]. = 188–189. |
| 87 | akalam iškunū maḫaršu | לחם שׂמו לפניו | `וַיֹּאמֶר שִׂימוּ לָחֶם` (בראשית מג:לא) | [cognate] | **The same phrase**: *akala šakānu* = `שׂים לחם` (*šakānu* = שׂים; *akalu* ~ אכל). Also `וַיָּשִׂימוּ לוֹ לֶחֶם וַיֹּאכַל` (שמואל ב יב:כ). = SB II 44. |
| 87–93 | akalam iškunū … ul īde | לחם שׂמו לפניו … לא ידע | `לְפָנָיו לֶאֱכֹל וַיֹּאמֶר לֹא אֹכַל` (בראשית כד:לג) | [equivalent] | Food set before the newcomer, who does not eat (there by choice, here from ignorance). |
| 88–89 | inaṭṭal u ippallas | מביט ומסתכל | `וַתֵּרֶא הָאִשָּׁה כִּי טוֹב הָעֵץ לְמַאֲכָל וְכִי תַאֲוָה הוּא לָעֵינַיִם` (בראשית ג:ו) | [equivalent] | Looking at the food before eating. |
| 90–91 | ul īde enkīdu aklam ana akālim | לא ידע אנקידו לחם לאכול | `וְנִפְקְחוּ עֵינֵיכֶם; וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | [divergence] | **Key.** *edû* = ידע, *akālu* = אכל (both cognate): in Genesis eating brings knowing (`וַתֹּאכַל … וַיֵּדְעוּ`, ג:ו–ז); here man "does not know" how to eat, and learning to eat makes him a man (108–109). |
| 90–91 | ul īde … aklam ana akālim | לא ידע … לחם לאכול | `וַיַּאֲכִלְךָ אֶת הַמָּן אֲשֶׁר לֹא יָדַעְתָּ … כִּי לֹא עַל הַלֶּחֶם לְבַדּוֹ יִחְיֶה הָאָדָם` (דברים ח:ג) | [cognate] | Food one did not know, bread and life: the three words *edû*, *akalu*, *balāṭu* (96–97). |
| 92–93 | šikaram ana šatêm lā lummud | שֵׁכָר לשתות לא לֻמַּד | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר` (בראשית ט:כא) | [cognate] | *šikaru* ~ שכר [cognate], *šatû* = שתה [cognate]: the intoxicating drink at the beginning of culture (Noah `אִישׁ הָאֲדָמָה … וַיִּטַּע כָּרֶם`, ט:כ); there shame, here joy (103–105). *lamādu* = למד [cognate]. |
| 96–97 | akul aklam … simat balāṭim | אֱכֹל את הלחם … הראוי לחיים | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | [divergence] | **Key.** Eating and life: in Genesis eating of the tree of life gives eternal life; here bread is "what befits life" – human life. |
| 96–97 | akul aklam | אֱכֹל את הלחם | `בְּזֵעַת אַפֶּיךָ תֹּאכַל לֶחֶם` (בראשית ג:יט) | [equivalent] | Bread as the food of man outside the garden; here a gift, there a toil. |
| 96–97 | akul aklam | אֱכֹל את הלחם | `מִכֹּל עֵץ הַגָּן אָכֹל תֹּאכֵל` (בראשית ב:טז) | [divergence] | A command to eat (vs `לֹא תֹאכַל מִמֶּנּוּ`, ב:יז). |
| 96–98 | akul aklam … šikaram šiti | אֱכֹל את הלחם … שְׁתֵה את השכר | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ וּשְׁתֵה בְלֶב טוֹב יֵינֶךָ` (קהלת ט:ז) | [equivalent] | The same pair of imperatives (cf. OB VA+BM a+21). |
| 98 | šīmti mātim | גורל הארץ | `כִּי הוּא חֶלְקְךָ בַּחַיִּים` (קהלת ט:ט) | [equivalent] | *šīmtu* "lot" ↔ `חֵלֶק` (as OB VA+BM a+29). |
| 99–100 | īkul aklam … adi šebêšu | אכל … את הלחם עד שָׂבְעוֹ | `וְאָכַלְתָּ וְשָׂבָעְתָּ` (דברים ח:י) | [cognate] | *akālu* / אכל, *šebû* / שׂבע. Also `וַיֹּאכַל וַיֵּשְׁתְּ וַיָּקָם וַיֵּלַךְ` (בראשית כה:לד). |
| 101–102 | šikaram ištiam sebet assammim | שתה את השכר – שבעה גביעים | `וַיִּשְׁתּוּ וַיִּשְׁכְּרוּ עִמּוֹ` (בראשית מג:לד) | [cognate] | Drinking to drunkenness at a feast; *assammu* = `גָּבִיעַ` [equivalent] (`גְּבִיעִי גְּבִיעַ הַכֶּסֶף`, בראשית מד:ב). |
| 101–105 | šikaram … īliṣ libbašu | שתה את השכר … עלץ לבו | `וַיֵּשְׁתְּ מִן הַיַּיִן וַיִּשְׁכָּר; וַיִּתְגַּל בְּתוֹךְ אָהֳלֹה` (בראשית ט:כא) | [divergence] | Noah's drink leads to nakedness and curse, Enkidu's to joy, anointing and clothing. |
| 103 | ittapšar kabtatum | נִפְשְׁרָה רוחו | `וַיֹּאכַל בֹּעַז וַיֵּשְׁתְּ וַיִּיטַב לִבּוֹ` (רות ג:ז) | [equivalent] | The mood released by drink; *pašāru* = פשר (the dream verb of 1, 44). |
| 104–105 | īliṣ libbašu | עלץ לבו | `עָלַץ לִבִּי בַּיהוָה` (שמואל א ב:א) | [cognate] | **The same phrase**: *elēṣu* + *libbu* = `עָלַץ לֵב`. |
| 104–109 | īliṣ libbašū-ma pānūšu ittamrū … šamnam | עלץ לבו, ופניו האירו … שמן | `וְיַיִן יְשַׂמַּח לְבַב-אֱנוֹשׁ לְהַצְהִיל פָּנִים מִשָּׁמֶן; וְלֶחֶם לְבַב-אֱנוֹשׁ יִסְעָד` (תהלים קד:טו) | [equivalent] | **Key.** The same sequence: bread, drink, glad heart, shining face, oil – the gifts that make human life (Ps 104 as a creation psalm). |
| 104–105 | pānūšu ittamrū | ופניו האירו | `חָכְמַת אָדָם תָּאִיר פָּנָיו` (קהלת ח:א) | [equivalent] | A shining face. |
| 106–107 | ultappit gallābum | טיפל הגלב | `וַיְגַלַּח וַיְחַלֵּף שִׂמְלֹתָיו וַיָּבֹא אֶל פַּרְעֹה` (בראשית מא:יד) | [equivalent] | Shaving and change of clothes before entering the king's presence (here before entering Uruk). *gallābu* = גלב [cognate] (`תַּעַר הַגַּלָּבִים`, יחזקאל ה:א). |
| 106–107 | šuʾʾuram pagaršu | בגוויתו השעירה | `הֵן עֵשָׂו אָחִי אִישׁ שָׂעִר` (בראשית כז:יא) | [cognate] | *šuʾʾuru* = שעיר [cognate]: the hairy man of the field (Esau `כֻּלּוֹ כְּאַדֶּרֶת שֵׂעָר`, כה:כה); Enkidu's hair is removed. |
| 108–109 | awīliš īwe | היה לאדם | `וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה` (בראשית ב:ז) | [equivalent] | **Key.** The same construction "became + *l-*" (*ewû* + *-iš* = `הָיָה לְ־`): in Genesis the man becomes a living being by God's breath; here he becomes a man (*awīlu* = אדם [equivalent]) through bread, beer, the barber and oil. The same verb and ending in X 68 `רעי אשר אהבתי היה לטיט` (*ṭiṭṭiš emû*): becoming man – becoming clay (↔ ג:יט). |
| 108–109 | šamnam iptašaš-ma | שמן סך | `וַיִּרְחַץ וַיָּסֶךְ וַיְחַלֵּף שִׂמְלֹתָו … וַיָּשִׂימוּ לוֹ לֶחֶם וַיֹּאכַל` (שמואל ב יב:כ) | [equivalent] | Anointing (*pašāšu* = סך) between washing/grooming and clothing, with bread; also `וְרָחַצְתְּ וָסַכְתְּ וְשַׂמְתְּ` (רות ג:ג). *šamnu* = שמן [cognate]. |
| 110–111 | ilbaš libšam | לבש מלבוש | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) | [divergence] | *labāšu* = לבש [cognate]: clothing as the mark of the new man; in Genesis God's act at the expulsion. |
| 110–111 | kīma mutim ibašši | כגבר היה | `הוּא הָיָה גִבֹּר צַיִד` (בראשית י:ט) | [equivalent] | The man as warrior (*mutu* "man, warrior"); after "like a god" (53) and "a man" (108–109). |
| 112–113 | ilqe kakkašu lābī ugerre | לקח את נשקו – בלבאים מתגרה | `וּבָא הָאֲרִי וְאֶת הַדּוֹב וְנָשָׂא שֶׂה מֵהָעֵדֶר. וְיָצָאתִי אַחֲרָיו וְהִכִּתִיו` (שמואל א יז:לד–לה) | [equivalent] | The shepherd fights lions for the flock; *leqû* = לקח. |
| 114 | issakpū rēʾû mūšiātim | נמו הרועים בלילות | `הָיִיתִי בַיּוֹם אֲכָלַנִי חֹרֶב וְקֶרַח בַּלָּיְלָה; וַתִּדַּד שְׁנָתִי מֵעֵינָי` (בראשית לא:מ) | [divergence] | Jacob the shepherd loses his sleep; here the shepherds sleep because Enkidu watches. |
| 115–116 | uttappiṣ barbarī | ניפץ זאבים | `בִּנְיָמִין זְאֵב יִטְרָף` (בראשית מט:כז) | [equivalent] | The wolf as the predator of the flock; `טְרֵפָה לֹא הֵבֵאתִי אֵלֶיךָ` (לא:לט). |
| 117 | nāqidū | הנוקדים | `וּמֵישַׁע מֶלֶךְ מוֹאָב הָיָה נֹקֵד` (מלכים ב ג:ד) | [cognate] | *nāqidu* = נוקד [loan]. |
| 118–119 | enkīdu maṣṣaršunu awīlum ērum | אנקידו – נוֹצְרָם, אדם ער | `הֲשֹׁמֵר אָחִי אָנֹכִי` (בראשית ד:ט) | [equivalent] | **Key.** The keeper of the shepherds: in Genesis the shepherd is killed and his brother denies being his "keeper"; here the man from the wild becomes the shepherds' keeper. *maṣṣaru* = נוצר [equivalent of שומר]. |
| 118–119 | maṣṣaršunu … ērum | נוצרם, אדם ער | `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | [equivalent] | The keeper who does not sleep while the others sleep (114 *sakāpu* = נם). |
| 118–119 | maṣṣaršunu | נוצרם | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | *naṣāru* = נצר, never שמר (cf. Ḫumbaba, `../renderings.md` §3.1). |
| 135–136 | ippuš ulṣam | עושה הוא עליצות | `עֲלִיצֻתָם כְּמוֹ לֶאֱכֹל עָנִי בַּמִּסְתָּר` (חבקוק ג:יד) | [cognate] | *ulṣu* ~ עליצות [cognate]; pleasure with Šamḫat (cf. `מְצַחֵק אֵת רִבְקָה`, בראשית כו:ח). |
| 137–138 | iššī-ma īnīšu ītamar awīlam | נשא את עיניו, וראה אדם | `וַיִּשָּׂא עֵינָיו וַיַּרְא וְהִנֵּה שְׁלֹשָׁה אֲנָשִׁים` (בראשית יח:ב) | [cognate] | **The same idiom**: *īnī našû* = `נָשָׂא עֵינַיִם`, then seeing a man approach. |
| 145 | eṭil êš taḫīšam | עלם, אָנָה אתה חָשׁ | `לְמִי אַתָּה וְאָנָה תֵלֵךְ` (בראשית לב:יח) | [equivalent] | "Whither?" to a traveller (*êš* = אנה); also `וְאָנָה תֵלֵכִי` (טז:ח). |
| 149 | bītiš emūtim iqrûninni | לבית החתונה הזמינוני | `וַיֶּאֱסֹף לָבָן אֶת כָּל אַנְשֵׁי הַמָּקוֹם וַיַּעַשׂ מִשְׁתֶּה` (בראשית כט:כב) | [equivalent] | The wedding feast. |
| 150–151 | šīmāt nišī-ma ḫiyār kallūtim | גורלות האנשים הם – בחירת כלולות | `וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) | [equivalent] | **Key.** *ḫiāru* "choose" ↔ `בָּחָרוּ` (not cognate): taking a bride by choice is "the lot of the people"; in Genesis the "sons of God" choose. *kallūtu* ~ `כְּלוּלוֹת` [cognate] (`אַהֲבַת כְּלוּלֹתָיִךְ`, ירמיהו ב:ב). |
| 150–151 | šīmāt nišī | גורלות האנשים | `עַל כֵּן יַעֲזָב אִישׁ אֶת אָבִיו וְאֶת אִמּוֹ; וְדָבַק בְּאִשְׁתּוֹ` (בראשית ב:כד) | [equivalent] | Marriage as the order of human life ("therefore …" ↔ "it is the lot of the people"). |
| 153 | uklāt bīt emi ṣayyāḫātim | מאכלי בית החם הערבים | `כִּי טוֹב הָעֵץ לְמַאֲכָל` (בראשית ג:ו) | [cognate] | *uklu* (root of *akālu*) = מאכל [cognate]; here the delights of the wedding feast. Also `וְטוֹב לְמַאֲכָל` (ב:ט). |
| 155 | peti pūg nišī ana ḫayyāri | פתוחה *רשת* האנשים לבוחר | `מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) | [equivalent] | *ḫayyāru* "the chooser" (the king). *pūgu* "net" (George "veil"), uncertain. = 157–158. |
| 159–161 | aššat šīmatim iraḫḫi šū pānānum-ma mutum warkānum | על אשת הגורל – הוא בא … הוא – תחילה, הבעל – אחר כך | `וַיִּרְאוּ בְנֵי הָאֱלֹהִים אֶת בְּנוֹת הָאָדָם כִּי טֹבֹת הֵנָּה; וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) | [equivalent] | **Key.** The *ius primae noctis*: the king who is two-thirds god (SB I 48) and "like a god" (194–195) takes the brides before their husbands; Genesis' "sons of God" take wives "of all whom they chose" (150–151, 155 *ḫiāru*). Cf. SB I 74 (`[לא] משלח [גילגמש] בתולה ל[בעלה]`). |
| 159–161 | iraḫḫi … mutum | בא … הבעל | `וַיִּקַּח אֹתָהּ וַיִּשְׁכַּב אֹתָהּ וַיְעַנֶּהָ` (בראשית לד:ב) | [equivalent] | A ruler's son takes a woman by force; also `וַתֻּקַּח הָאִשָּׁה בֵּית פַּרְעֹה` (בראשית יב:טו) – the king takes a married woman. |
| 160–161 | mutum | הבעל | `וְהִוא בְּעֻלַת בָּעַל` (בראשית כ:ג) | [equivalent] | *mutu* "husband" = בעל (§9). |
| 162 | ina milki ša ilim qabī-ma | בעצת האל – (כך) אמור | `מֵיְהוָה יָצָא הַדָּבָר` (בראשית כד:נ) | [equivalent] | The marriage as divine decree (there of Rebekah's marriage). |
| 163–164 | ina bitiq abunnatīšu šīmassum | בבתוק טבורו – גורל לו | `בְּיוֹם הוּלֶּדֶת אוֹתָךְ לֹא כָרַּת שָׁרֵּךְ` (יחזקאל טז:ד) | [equivalent] | The cutting of the umbilical cord on the day of birth (*abunnatu* = `שֹׁר`); the right fixed from birth. |
| 163–164 | šīmassum | גורל לו | `וּשְׁנֵי לְאֻמִּים מִמֵּעַיִךְ יִפָּרֵדוּ` (בראשית כה:כג) | [equivalent] | Destiny fixed at birth (Jacob and Esau); also `וּבְטֶרֶם תֵּצֵא מֵרֶחֶם הִקְדַּשְׁתִּיךָ` (ירמיהו א:ה). |
| 165–166 | īriqū pānūšu | הוריקו פניו | `וְנֶהֶפְכוּ כָל פָּנִים לְיֵרָקוֹן` (ירמיהו ל:ו) | [cognate] | *arāqu* ~ ירק [cognate]: the face turning pale. |
| 165–166 | ana siqri eṭlim īriqū pānūšu | למאמר העלם הוריקו פניו | `וַיִּחַר לְקַיִן מְאֹד וַיִּפְּלוּ פָּנָיו` (בראשית ד:ה) | [equivalent] | The face changes with anger; Enkidu goes to confront the strong one (vs Cain's murder). |
| 175–176 | illak ina pānīšu u šamkatum warkīšu | הולך ל[פניו], ושַׁמְחַת אחריו | `וַתֵּלַכְנָה אַחֲרֵי הָאִישׁ` (בראשית כד:סא) | [divergence] | The woman follows the man; here after she has led him (73–76). |
| 183 | ana gilgāmeš mašil padattam | לגילגמש – משול בגזרה | `וּלְאָדָם לֹא מָצָא עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:כ) | [equivalent] | The equal in body (*mašālu* = משול [cognate]); = 80 (restored). |
| 184–185 | eṣemtam pukkul | בעצם – חסון | `עֶצֶם מֵעֲצָמַי וּבָשָׂר מִבְּשָׂרִי` (בראשית ב:כג) | [cognate] | *eṣemtu* = עצם [cognate]: likeness of the partner in bone and body. |
| 190 | kayyānā … nīqiātum | תמידים … הזבחים | `וַיִּזְבַּח יַעֲקֹב זֶבַח בָּהָר` (בראשית לא:נד) | [equivalent] | *nīqu* = זבח; *kayyānu* = תמיד (`עֹלָה תָמִיד`, במדבר כח:ג). |
| 191–192 | eṭlūtum ūtelliṣū | העלמים התעלצו | `עָלַץ לִבִּי בַּיהוָה` (שמואל א ב:א) | [cognate] | *elēṣu* = עלץ (as 104–105). |
| 193 | ša išarū zīmūšu | אשר ישר זיוו | `מַלְכָּא זִיוֹהִי שְׁנוֹהִי` (דניאל ה:ו) | [cognate] | *zīmu* = זיו [cognate]; *išaru* = ישר [cognate]. |
| 194–195 | ana gilgāmeš kīma ilim šakiššum meḫrum | לגילגמש, כְּאֵל, שׂוּם לו שווה | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ; אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | [equivalent] | **Key.** *meḫru* (from *maḫāru* "stand opposite") ↔ `כְּנֶגְדּוֹ` ("opposite him"): an equal is "set for him" (*šakānu* = שׂים ↔ `וַיָּשֶׂם`, ב:ח); here the rival-friend, in Genesis the woman. Cf. SB I 95 (`יהי שווה`). |
| 194–195 | kīma ilim | כְּאֵל | `וִהְיִיתֶם כֵּאלֹהִים` (בראשית ג:ה) | [equivalent] | Gilgameš "like a god" (cf. 53 of Enkidu). |
| 196–197 | ana išḫara mayyālum nadī-ma | לאִשְׁחַרָה – משכב מושלך | `וַיֶּאֱסֹף לָבָן … וַיַּעַשׂ מִשְׁתֶּה` (בראשית כט:כב) | [equivalent] | The marriage bed of the goddess of marriage; *mayyālu* = משכב. |
| 202–203 | iptaras alaktam ša gilgāmeš | קטע את הליכתו של גילגמש | `וַיִּתְיַצֵּב מַלְאַךְ יְהוָה בַּדֶּרֶךְ לְשָׂטָן לוֹ` (במדבר כב:כב) | [equivalent] | Blocking the way; = SB II 102. |
| 214 | ittamḫarū | נפגשו פנים אל פנים | `כִּי רָאִיתִי אֱלֹהִים פָּנִים אֶל פָּנִים` (בראשית לב:לא) | [equivalent] | The face-to-face of a wrestling match (*maḫāru* Gt). |
| 215–216 | bābam iptarik ina šēpīšu | את השער חסם ברגלו | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | The one who bars the entrance; *parāku* = חסם. |
| 217 | gilgāmeš erēbam ul iddin | לגילגמש לבוא לא נתן | `עַל כֵּן לֹא נְתַתִּיךָ לִנְגֹּעַ אֵלֶיהָ` (בראשית כ:ו) | [cognate] | **The same idiom**: *nadānu* + infinitive "allow" = `נתן ל־` [cognate]; also `וְלֹא נְתָנוֹ אֱלֹהִים לְהָרַע עִמָּדִי` (לא:ז). There God keeps a man from a married woman; here Enkidu keeps Gilgameš from the bride's house. |
| 218–228 | iṣṣabtū-ma kīma līʾim iluddū … ikmis-ma | נאחזו … כרע גילגמש | `וַיֵּאָבֵק אִישׁ עִמּוֹ עַד עֲלוֹת הַשָּׁחַר` (בראשית לב:כה) | [equivalent] | **Key.** A bodily struggle between two at a threshold, ending with blessing and a name (234–240; Gen 32:29–30). = 222–224. |
| 227–228 | ikmis-ma gilgāmeš ina qaqqarim šēpšu | כרע גילגמש – רגלו על הקרקע | `וַיַּרְא כִּי לֹא יָכֹל לוֹ וַיִּגַּע בְּכַף יְרֵכוֹ` (בראשית לב:כו) | [divergence] | At the end one of the wrestlers is brought down on his leg / thigh; here Gilgameš, the winner, kneels. *kamāsu* = כרע (`כָּרַע רָבַץ כְּאַרְיֵה`, מט:ט). |
| 229–230 | ipšiḫ uzzašu | נרגע זעמו | `עַד אֲשֶׁר תָּשׁוּב חֲמַת אָחִיךָ` (בראשית כז:מד) | [equivalent] | The anger between the two subsides; followed by reconciliation (`וַיָּרָץ עֵשָׂו לִקְרָאתוֹ וַיְחַבְּקֵהוּ`, לג:ד). |
| 234–235 | kīma ištēn-ma ummaka ulidka | כיחיד ילדה אותך אמך | `קַח נָא אֶת בִּנְךָ אֶת יְחִידְךָ אֲשֶׁר אָהַבְתָּ` (בראשית כב:ב) | [equivalent] | *ištēn* "one, unique" ↔ `יְחִידְךָ`. |
| 238 | ullu eli mutī rēška | מורם על הגברים ראשך | `וְעַתָּה יָרוּם רֹאשִׁי עַל אֹיְבַי סְבִיבוֹתַי` (תהלים כז:ו) | [equivalent] | The raised head; also `הֱוֵה גְבִיר לְאַחֶיךָ` (בראשית כז:כט). |
| 239–240 | šarrūtam ša nišī išīmkum enlil | את מלכות האנשים גזר לך אֶנְלִיל | `הֲמָלֹךְ תִּמְלֹךְ עָלֵינוּ` (בראשית לז:ח) | [equivalent] | Kingship decreed, after dreams of homage (1–43); in Genesis the brothers' scornful question after Joseph's dreams. Also `לֹא יָסוּר שֵׁבֶט מִיהוּדָה` (מט:י). |
| 242 | šūtur eli šarrī | נעלה על המלכים | `יֶתֶר שְׂאֵת וְיֶתֶר עָז` (בראשית מט:ג) | [cognate] | *atāru* ~ יתר; the title of the OB epic; = SB I 29. Root only. |

### Lines shared with other tablets
- **SB I (dreams and Enkidu)**: identical Hebrew where the Akkadian is identical: 29–30 = I 276; 1–2 = I 243 split; 49–50 = I 192 (second half); 46 = I 298; 242 = I 29 (first half). Changed exactly where the Akkadian changes (decision 2): 3 ~ I 244; 6 ~ I 245 (decision 3); 7 ~ I 246; 8 ~ I 247; 9 ~ I 248; 10 ~ I 249, 277; 11, 21 ~ I 253; 14 ~ I 255, 281; 15–16, 37–38 ~ I 257–258, 284–285 (decision 4); 24 ~ I 271; 25 ~ I 272; 26 ~ I 274; 27–28 ~ I 275; 33–34 ~ I 254, 282; 43 ~ I 288; 44 ~ I 296; 48 ~ I 192 (seven days); 53 ~ I 205; 54–55 ~ I 206; 56–58 ~ I 207–208; 59–60 ~ I 208a–b; 66 ~ I 211.
- **OB VA+BM**: 48 = VA+BM a+9 (`שבעה ימים ושבעה לילות`); 17 *ša kīma kâti* = VA+BM a+41 `אשר כמוך`; 145 *êš* = VA+BM 7′ `אָנָה`; 204 *nadānu* Št = VA+BM b+19 `נדברו`.
- **Within the tablet**: 11 = 21; 80–86 = 183–189 (80–84 restored); 155 = 157–158; 218–219 / 220–221 = 222–224 / 225–226 (+ names); 51–52 + 94–95 + 147–148 (speech formula); 15–16 = 37–38.
- **First copies for SB II (not yet translated)**: SB II 34–38 (~ 69–77), 40–42 (~ 80–84, 183–187), 44–51 (~ 87–98), 60–63 (~ 115–121), 100–115 (~ 179–226). The SB II translator should copy this Hebrew where the Akkadian is identical (e.g. II 37 *ana gupri ša rēʾî ašar tarbāṣi* = 75–76 `אל סוכת הרועה, מקום הרבץ.`; II 102 = 202–203; II 111–112 ~ 215–217; II 114 ~ 214).
- **`verify.py` differences (OB-II), all justified by the Akkadian** (25, listed by the script): I 208/208a/208b ≠ 58/59/60, I 244 ≠ 3, I 245 ≠ 6, I 246 ≠ 7, I 247 ≠ 8, I 248 ≠ 9, I 249/277 ≠ 10, I 254/282 ≠ 33–34, I 257 ≠ 15, I 271 ≠ 24, I 272 ≠ 25, I 274 ≠ 26, I 296 ≠ 44, I 243 ≠ 2, I 255/281 ≠ 14, I 275 ≠ 27–28, I 284 ≠ 37–38, I 192 ≠ 48 and 49–50 (decision 2; the SB line is split in two here); 218–219 ≠ 222–224 (the names).

### Proposals for the shared renderings
1. **Key terms (§4):** *awīliš ewû* = `הָיָה לְאָדָם` (beside *ṭiṭṭiš emû* = `הָיָה לְטִיט`: one verb, one Hebrew); *mutu* = `בַּעַל` "husband" / `גֶּבֶר` "man, warrior" by sense (open decision 3); *meḫru* = `שָׁוֶה` (with *maḫāru*); *ḫiāru* = `בָּחַר`, *ḫayyāru* = `בּוֹחֵר` (↔ Gen 6:2); *kallūtu* = `כְּלוּלוֹת`; *emūtu* = `חֲתֻנָּה`; *uklu* = `מַאֲכָל` [cognate]; *eṣemtu* = `עֶצֶם` [cognate]; *tarbaṣu* = `רֶבֶץ` [cognate ↔ Gen 4:7]; *gupru* = `סֻכָּה`; *libšu* = `מַלְבּוּשׁ`; *simat balāṭi* = `הָרָאוּי לַחַיִּים`; *akala šakānu* = `שָׂם לֶחֶם`; *pašāru* N "be released (mood)" = `נִפְשַׁר` (one Hebrew root for *pašāru*).
2. **Names (§1):** Šamkatum (OB spelling) = `שַׁמְחַת` (open decision 2); Ninsunna = `נִינְסוּנָּה`; add to §7 "always vocalize": `שֵׁכָר` (vs "wages"), `לֻמַּד`, `שָׂח`/`שָׂחָה` (vs "swam"), `דְּבָרָהּ`, `אֵם`.
3. **Ordinary words (§5):** *šamāḫu* = `פָּרַח`; *edēru* = `לָפַת`; *emēdu* = `סָמַךְ` (N `נִסְמַךְ`); *âru* = `הוֹלִיךְ`; *abāku* = `נֶעְתַּק`; *magāru* = `רָצָה`; *piāqu* = `צִמְצֵם`; *nagû* = `רִנֵּן`; *elēṣu* = `עָלַץ`, *ulṣu* = `עֲלִיצוּת`; *gallābu* = `גַּלָּב`; *assammu* = `גָּבִיעַ`; *šizbu* = `חָלָב`; *kašādu* D "chase off" = `הֵנִיס`; *lābu* = `לָבִיא`; *akāšu* = `צָעַד`; *ḫiāšu* = `חָשׁ`; *zikru* = `מַאֲמָר`; *ṣênu* = `טָעַן`; *ṣayyaḫu* = `עָרֵב`; *abunnatu* = `טַבּוּר`; *arāqu* = `הוֹרִיק`; *tāwītu* = `שִׂיחָה`; *kayyānu* = `תָּמִיד`; *nīqu* = `זֶבַח`; *padattu* = `גִּזְרָה`; *pagālu* = `חָסוֹן`; *anāpu* = `רָגַז`; *parāsu* = `קָטַע`; *līʾu* = `פַּר`; *lâdu* = `כָּפַף`; *igāru* = `קִיר`; *ratātu* = `זָע`; *nêʾu* = `הִפְנָה`; *ullû* = `מוּרָם`; *rīmtu* = `רְאֵמָה`; *nâšu* D = `הֵנִיעַ`.
4. **Formula (§2):** OB two-line opening without *iqabbi*: `X פתחה את פיה,` / `ודיברה אל Y:`; OB *šunatam ipaššar* = `פושר חלום` (as SB).
5. **verify.py**: nothing needed (no false positives for these tablets).

### Lessons for the guidelines
- **eBL's normalization can import a whole formula from the SB parallel that the OB manuscript does not have** (OB II 37–38 *emqet … īde*; probably also the lemma of OB II 6): for every OB line with an SB parallel, compare N with the ATF word by word before copying the SB Hebrew.
- **A verb of becoming with the adverbial *-iš* (*awīliš īwe*, *ṭiṭṭiš ītemi*) should have one fixed Hebrew (`הָיָה לְ־`) across texts**: it is the construction of Gen 2:7 `וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה`, and fixing it made "became a man" and "became clay" visible as a pair.
- **Avoid `ו` + perfect for a clause-final *-ma* when the next word could be read as a converted future** (`והיה`): a dash keeps the Akkadian sequence without the biblical tense.

## Tablet OB-III

### Scope
OB III (the Yale tablet, YBC 2178; eBL BabaOB1; the companion of OB II, by the same scribe), all 219 eBL labels (10-11 … 295; George's numbering, verse lines written over two tablet lines as ranges): col. i 10–44 (Enkidu's alarm at "a feat that does not exist in the land"; the friends kiss and form a friendship; the harlot), col. ii 56–90 (Ninsun on Enkidu; Enkidu's tears: "my arms have gone limp, my strength weak"), col. iii 96–135 (the plan to kill Ḫuwawa; Enkidu: "I knew him in the uplands when I roamed with the herd … sixty leagues … his voice is the Deluge"; Gilgameš would climb the forest's mountain, the seat of the Anunnakkū; the guardian Wēr, Adad), col. iv 136–180 ("the seven terrors"; **"who, my friend, has gone up to heaven? The gods – with Šamaš forever they dwelt; mankind – its days are numbered; whatever it does is wind"**; "if I fall, I have set up my name"; **"a name that is eternal I will establish for myself"**; the forge; the assembly of Uruk), col. v 182–228 (the speech to the elders; the elders' counsel "you are young, Gilgameš"; Gilgameš laughs; a blessing; his prayer to Šamaš), col. vi and left edge 229–295 (the weapons; the departure; the elders' blessing and advice "let Enkidu go before you", "wash your feet in Ḫuwawa's river", "dig a well"; Enkidu leads; the crowd sent home; "may your god go before you"). Single manuscript. Lost: 1–9, 26–38, 45–55, 91–95, 181, 207–210, 290–294 (no labels); badly damaged: 10–25, 39–44, 56–70, 96–103, 119–126, 172–180, 203–214, 222–228, 236–246, 273–289.

### Sources consulted
- eBL `L/1/4` OB III (`../../sources/eBL/Gilgamesh-OB-III/reading-edition.md`: N, T, L, all notes, parallels, ATF; `glossary.md` for stems).
- SEAL 1831 (`../../sources/SEAL/Gilgamesh-OB/node-1831--Gilg-OB-III.md`): the saved page has the translation only (George's, with small changes, e.g. 115–116 "home" for "ambush", 160 "for myself"), no transliteration or lemmas, so it served as a check of the translation, not of the lemmas.
- `python3 -I parallels_for.py OB-III --all` (106 lines with parallels); the first copies in SB II (`../1-הנוסח-הבבלי-התקני/annotated-II.rtl.md` 162–302, incl. the §3.1 passage and 230–253), SB III (1–12, 76–82, 130–135, 164–168, 202–233), SB V 6, 130–131, 167, SB I 58, 105, 275, 294–295, SB XI 139, 309, OB II (16, 27–28, 31, 147–148, 194–195), OB VA+BM.
- `../renderings.md` incl. §9–§18 (binding); both `project.md` files with their tablet sections (II, III above all); the format models; `annotated-OB-II.rtl.md` as the nearest model.
- George's translation (eBL T), after drafting; Tchernichovsky 1924 (`../../sources/Ben-Yehuda--Tchernichovsky-1924/full-work--all-tablets.rtl.md`, ll. 1340–1480) after pass (c).
- The vocalized Bible through `../../tools/check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `OBIII-[abcd].data.md` + `gen_OBIII.py`), as for OB II and SB II–III: eBL's N and George's T are inserted by script, so the annotated `>` lines and the clean translation are identical by construction.
2. **The two "name" lines are two different verbs, and the brief's *šumī lultakan* is not in the tablet.** 148 reads *šumma amtaqut šumī lū ušzīz* (*izuzzu* Š "set up, make stand"), rendered `אם נפלתי – את שמי העמדתי:` (*izuzzu* = `עמד`, Š = `הֶעֱמִיד`; `שׂים` stays reserved for *šakānu*). The *šakānu* line is 160 = 188 *šuma ša darû anāku luštaknam* (Gt), rendered `שם אשר נצחי הוא – אני אָשִׂים לי!` (*šumu* = `שֵׁם`, *šakānu* = `שׂים`, *darû* = `נִצְחִי`, never `עוֹלָם`). `לי` renders the reflexive Gt (Streck, RN602), not an addition; George's "for ever" (Gt of permanence) is in the apparatus. 149–150 (the words that will be said / inscribed) is `'גילגמש עם חוווה העריץ ארג תגרה!'` – the idiom *tuqumtam šatû* "to weave battle" kept literally; the brief's "Gilgameš fell in combat with fierce Ḫuwawa" is not what the line says (*ištu* "wove"; "fell" is the condition of 148).
3. **140–143** (the key passage): 140 *mannu ibrī ēlû šamāʾī* – preterite + subjunctive, "who is it that went up", hence `"מי, רֵעִי, עלה לש[מים]?` (past, as Prov 30:4 `מִי עָלָה שָׁמַיִם`), not George's "can climb". 141 *ilū-ma itti šamšim dāriš u[šbū]*: `האלים – עם שַׁמַשׁ לָעַד [ישבו];` – the two *-ma* of 141 and 142 are both rendered by the dash, so that the lines stand against each other (George's "Only" is the reading of the focal *-ma*, given in the note); *šamšim* = `שַׁמַשׁ` (the god; {d}UTU is the god throughout this tablet; "in sunlight" in the note); *dāriš* = `לָעַד` (vocalized). 142 = SB II 234 verbatim (`האנושות – מנויים ימיה,`). 143 *mimma ša īteneppušu šārum-ma* (Gtn present): `כל אשר הוא עושה – רוח.` (SB II 235 `כל אשר עשה – [רוח].` for the SB preterite/perfect); *šāru* = `רוּחַ`, never `הֶבֶל`.
4. **The guardian passage (`../renderings.md` §3.1) in its OB form**, changed exactly where the OB Akkadian differs: 110–112 = §3.1 with the OB name (`חוווה – קולו מבול,` / `פיו – אש, ונפשו – מוות.`); 129–130 = SB II 217; 131–132 *nāṣirša wēr-ma dān lā sākip* = `נוצרו – וֵר [הוא]; עז הוא, לא ינ[ום];` (only "its guardian" and "is Wēr" change); 134–135 without *u* (`אֲדַד – רא[שון], הוא – [שני].`); 136 = `למען שלו[ם הארזים]`; 137 *pulḫiātim sebe išīmšum* = `שבע אימות [גזר לו אֶנְלִיל?]."` (SB *ana pulḫāti ša nišī* "for the terror of the people" is a different phrase). **108–109 are not the §3.1 lines**: *ana šūši bērā nummât qištum* (`לשישים בֵּרוּ (לכל עבר) שומם היער –`: *nawû* D "be desolate", George's long note) and *ana libbīša* (`מי זה ירד אל לבו?`); eBL's "=" links them to SB II 223/224, which have *išemmē-ma … rimmāt* and *ana qištīšu*.
5. ***maḫāru* "stand against"** in the abstract *qabal lā maḫār* (115–116, 200) and in 194 = `לעמוד מול` (`קרב שאין לעמוד מולו`, `מי זה יעמוד מול כלי־נשקו?`), 57 *māḫiru* = `מתמודד`, against §14's *maḫāru* G "confront" = `פגש` (which does not fit the verbal noun); *šubtu* = `מִשְׁכָּן` in 102–103, 115–116, 200, 275 (one lemma, one word; George's "ambush" only in the notes).
6. **The elders' counsel and blessing** copy SB II and III where the Akkadian is identical and change exactly where it differs: 190 *siqra uterrū* = `מאמר השיבו` (SB II 288 *ṭēma* = `טעם השיבו`; also 42–43); 191 = SB II 289; 192 *mimma ša tēteneppušu lā tīde* = `כל אשר אתה עושה – לא ידעת.` (SB II 290 *ša tātamû* `אשר שַׂחְתָּ`; the OB repeats Gilgameš's own 143); 249 without *gimir* (`"[אַל] תבטח, גילגמש, בכוחותיך!`); 251 = SB III 6; 253 *nērebēti* `מבואות` (SB III 7 *ḫarrāna*); **255 *ušallim*** (*šalāmu* D, gnomic preterite) = `'[ההולך] לפנים הביא בשלום את החבר,` – the root שלם and the Hebrew of SB III 9 *lišallim* `יביא בשלום`, against SB III 4 *ušezzeb* `מציל`; **256 *ša īnāšu šuwwurā pagaršu iṣṣur*** = `[אשר] עיניו מוארות – את גוויתו נ[צר?].'` (SB III 5 replaces it with "who knows the path kept his friend safe"). *naṣāru* = `נצר` (250, 256), never `שמר`.
7. **Speech formulas (OB)**: two lines `X פתח את פיו,` / `ודיבר אל Y:` (83–84, 89–90, 104–105, 117–118, 127–128, 138–139; as OB II 147–148); one line 272 `[אנקי]דו פתח את פיו, ודיבר אל גילגמש:`; *issaqqaram* after a narrative line (78) `[ודיבר] אל אנקידו:`.
8. **Names**: Ḫuwawa = `חוּוָוה` (vocalized at 97; renderings §1); Wēr = `וֵר`, always vocalized (unvocalized `ור`); Anšan `אַנְשָׁן` (`הקשת האַנְשָׁנִית`); Lugalbanda `לוּגַלְבַּנְדָּה`; Anunnakkū `אֲנוּנָּכִּי`; Uruk `אוּרוּךְ` (172), *Uruk ribītim* `אורוך־הכיכר`; `שַׁמַשׁ`, `רֵעִי`, `אוֹרַח`, `בֵּרוּ`, `כּוּר` vocalized at every occurrence; *ilka* / *ilī* = `אֵלְךָ` / `אֵלִי` always vocalized ("I will go" / "to me").
9. **New words** (all grepped against every earlier `>` line; none in use): *ḫašāḫu* = `חָשַׁק`; *rūʾūtu* = `עֲמִיתוּת` (from *rūʾu* = `עמית`; `רֵעוּת` rejected: unvocalized "evils", and the echo of `רְעוּת רוּחַ`); *nâdu* D = `הִילֵּל`; *tabbītu* = `יְבָבָה`; *dâdānū* = `מיתרי צוואר`; *uštālipā* = `*פיתלו*`; *anāḫu* Št "sigh" = `נֶאֱנַח` (G "tire" = `יגע`, §10); *enēšu* = `חָלַשׁ`; *galātu* D = `הִבְהִיל`; *nawû* D = `שׁוֹמֵם`; *danānu* (noun) = `חוֹזֶק`; *qarrādūtu* = `גְּבוּרָה`; *šatû* III "weave" = `אָרַג`; *kasāmu* = `קִצֵּץ`; *mešēltu* "blade" = `לַהַב` (VIII has `מַשְׁחֶזֶת` for the same lemma: proposal 3); *ṣipru* = `חוֹד`; *iḫzu* = `מִשְׁבֶּצֶת`; *ṣiāḫu* = `צָחַק` [cognate]; *têrtu* = `הַנְחָיָה` (not `הוראה` = *aširtu*, not `תורה`); *šibqū* = `תַּחְבּוּלוֹת`; *ernittu* = `מִשְׁאָלָה` (`ניצחון` rejected: the root נצח belongs to *dārû* = `נִצְחִי`, 160/188); *padānu* = `מִשְׁעוֹל`; *peḫû* = `חָסוּם`; *ṣamāru* = `שָׁאַף`; *naqû* (libation) = `נִסֵּךְ`; *nawāru* D stative (eyes) = `מוּאָר`; *šalāmu* G + ventive = `בא בשלום` (219, 232; `אשלם` rejected: reads "I will pay"); *šemû* Š = `הִשְׁמִיעַ`; *patru* = `סַכִּין` (§10).
10. **šipru** (17) = `מְלָאכָה` (flood-corpus usage; the cross-corpus open decision on `מלאכה`/`פֹּעַל`, guidelines §6.7, is unchanged). George's "(yet)" in 17 is not in the Akkadian and is not translated (no `טֶרֶם`).
11. **Brackets by the ATF** (pass a): a word is bracketed when its root is mostly broken, even where N brackets more or less (e.g. 197 *ri#-ig#-ma-šu* damaged but legible: `קולו` unbracketed; 158 `[את ידי] אשׂים`; 170 `משבצות`; 215 `אורוך [גְּשָׁה ב]שלום`; 240 `[גילגמש] לקח`).
12. **eBL slips and links recorded**: *ṣēru* lemmatized "back" (151); 193 *būnu* lemmatized "goodness" (it is *būnu* II "face, features"); 215 linked to SB II 1 (a catch-line, unrelated; the true pair is SB III 1 / 215); 108/195 and 109/196 marked "=" to SB II 223/224/280/281/293/295 (different words, decision 4); 137 marked "=" to SB II 219b and 279 (unrelated lines of the variant couplet).

### Open decisions for the user
1. **148 *šumī lū ušzīz* = `את שמי העמדתי`** (chosen: *izuzzu* Š; the parallel with 2 Sam 18:18 `וַיַּצֶּב לוֹ … מַצֶּבֶת … בַּעֲבוּר הַזְכִּיר שְׁמִי` and Deut 25:7 `לְהָקִים לְאָחִיו שֵׁם` is in the apparatus) or `את שמי הקמתי` (closer to the Hebrew idiom `הֵקִים שֵׁם`, but `קום` is *tebû* in this corpus)?
2. **160/188 `אני אָשִׂים לי`** – `לי` for the reflexive Gt (Streck; chosen), or `אני אָשִׂים` without it (George's reading, Gt of permanence), which would weaken the formal match with Gen 11:4 `וְנַעֲשֶׂה לָּנוּ שֵׁם`?
3. **141 `האלים – עם שַׁמַשׁ`** (the dash for *-ma*, parallel to 142; the god) or George's `רק האלים … באור השמש`?
4. ***ernittu* = `מִשְׁאָלָה`** (257, 263b–264, 265, 286; Ps 20:6 `מִשְׁאֲלוֹתֶיךָ` tagged) – acceptable, or a neutral `מטרה` / `מבוקש`? It is a new corpus word (SB IV, V will have *ernittu*).
5. ***maḫāru* in *qabal lā maḫār* / *imaḫḫaru* = `לעמוד מול`** (115–116, 194, 200) against §14's *maḫāru* G = `פגש` – accept as a sense split, or force `פגש` (`קרב שאין לפגשו`)?
6. ***rūʾūtu* = `עמיתות`** (18–19) – keep the lemma chain *rūʾu* = `עמית`, or the natural `רֵעוּת` (vocalized), accepting the echo of `רְעוּת רוּחַ` (Qoh 1:14) four lines before 143?
7. **266–267** ("in Ḫuwawa's river … wash your feet"): kept as "river" (George), against the proposed *nârum* "slaying" (Speiser: "after the slaying of Ḫuwawa"); the brief's "I will wash my feet in the river of your Ḫuwawa" puts the line in Gilgameš's mouth, but in the tablet it is the elders' imperative.

### Progress log
- 2026-10-18: read the brief, the whole guidelines, corpus.md, renderings.md (incl. §9–§18), both project files with their tablet sections (SB II and III in full), the format models and annotated-OB-II; ran `parallels_for.py OB-III --all` (106 lines); read the whole eBL edition (N, T, L, all notes, ATF) and SEAL 1831's translation; printed the Hebrew of every SB II/III/V/XI line that eBL links.
- Drafted all 219 entries in eleven sections into four data files and generated `annotated-OB-III.rtl.md` and `translation-OB-III.rtl.md` (Hebrew header and introduction, 6 footnotes: 140, 141–143, 148–150, 160/188, 218–235, 285–286).
- Pass (a) fidelity: every `>` line against N and the ATF. Changes: brackets of 24, 72–73, 83, 119, 157, 158–159, 161, 162, 170, 172, 177, 178, 197, 215, 219, 240, 243, 249, 254, 255, 256, 272 brought into line with the ATF; 115–116/200 *šubtu* back to `משכן` (first draft `מארב`, George); 163 and 161 final marks; 244 `(מוכנים)` for the addition.
- Pass (b) consistency: the §3.1 lines (110–112, 129–137, 195–200) and SB II 217, 232–241, 247–249, 288–290, 300–301, SB III 1–8, V 130–131, XI 309 compared character by character (`verify.py` list below); 158–159 aligned with 187 (`,`); speech formulas; names and vocalization (strip test: `פִּיתְּלוּ`, `הִילְּלוּ` corrected to plene); reserved strings grepped in the plain `>` lines: `שׂים` only *šakānu* (58, 158–160, 171, 187–188, 221, 235, 243–244, 273), `ידע` only *edû* (106, 152, 192, 231, 253, 275), `לקח` only *leqû* (240), `שוב` only *târu* (232; *târu* D `השיב` 42–43, 190, 220, 246, 277), no `שמר`, `עולם`, `הבל`, `טרם`, `אלוהים`, `קרא`, `עפר`, `טיט`, `עשב`, `עץ`, `נחש`, `נע`/`נד`; every new string grepped against all earlier `>` lines (none in use; `נאד` = *nādu* as VII, VIII, XII).
- Pass (c) Hebrew: read aloud; kept the literal `נשא את פניו` (77), `ארג תגרה` (149–150), `עושים הם את ההליכה` (244, 273), `שומם היער` (108). Tchernichovsky 1924 has no Yale-tablet text (his Tablets III–IV follow the SB fragments known before 1920): his elders' blessing (`יִהְיֶה שַׁמַשׁ מָגֵן לִידִידוֹ … יִנְצֹר אֶת חַיֵּי הַמֶּלֶךְ`), Šamaš's charge `חָטָא לְפָנַי חֻמְבַּבָּה, עַל־כֵּן עֲלוּ וְהַכּוּהוּ נָפֶשׁ` (sin and `הכהו נפש`, Deut 19:6, which no Akkadian text has), `נוֹטֵר`, `הַר־הָאֱלֹהִים` and `אֱלֹהֵי הַשֶּׁמֶשׁ` – nothing changed in ours.
- `python3 -I verify.py OB-III`: 219 entries = eBL 219, 219 translation lines, problems 0 (74 differences in repeated lines, 12 in marks only, each justified below). `check_bible_quotes.py` on both files and this section: 0 problems (15 first-draft mismatches fixed: 2 Sam 4:1, Ezek 28:2, Ps 29:3/10, Isa 37:24, 45:2, 56:5, 1 Sam 17:7, Exod 20:6 (this edition's numbering), 35:21, 1 Kgs 8:54 for Dan 6:11 (Aramaic), Jer 13:17, Prov 22:5, Dan 12:1 for Neh 9:27).

### Parallels index (Tablet OB-III)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 10-11 | inakkud pagrum | הולמת הגוויה | `לִבִּי סְחַרְחַר עֲזָבַנִי כֹחִי` (תהלים לח:יא) | [equivalent] | The body's panic at the plan; cf. 87–88. |
| 17 | šipram ša lā ibaššû ina mātim | מלאכה אשר איננה בארץ | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [divergence] | An unprecedented human undertaking; here Enkidu warns against it. George's "(yet)" is an addition: no "not yet" in the Akkadian (no `טֶרֶם`). |
| 18-19 | ittašqū-ma īpušū rūʾūtam | התנשקו, ועשו עמיתות | `וַיִּשְּׁקוּ אִישׁ אֶת רֵעֵהוּ וַיִּבְכּוּ אִישׁ אֶת רֵעֵהוּ` (שמואל א כ:מא) | [equivalent] | **Key.** Two friends kiss; in both the kiss is followed by tears (71–80). *našāqu* Gt = `התנשקו`. |
| 18-19 | īpušū rūʾūtam | ועשו עמיתות | `וַיִּכְרֹת יְהוֹנָתָן וְדָוִד בְּרִית בְּאַהֲבָתוֹ אֹתוֹ כְּנַפְשׁוֹ` (שמואל א יח:ג) | [equivalent] | "Making friendship" (*rūʾūta epēšu*) vs "cutting a covenant"; no covenant word in the Akkadian. |
| 18-19 | ittašqū-ma | התנשקו | `וַיָּרָץ עֵשָׂו לִקְרָאתוֹ וַיְחַבְּקֵהוּ … וַיִּשָּׁקֵהוּ וַיִּבְכּוּ` (בראשית לג:ד) | [equivalent] | Reconciliation by a kiss after a fight (OB II 214–240), as Esau and Jacob after the night's wrestling (Gen 32). |
| 24 | [arši ibram mā]likam | [קניתי רֵעַ, יו]עץ | `אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | [equivalent] | The partner of the dreams (OB II 1–43) as "friend, counsellor" (SB I 294–295); verb and noun restored. *rašû* = `קנה` ↔ `קָנִיתִי אִישׁ` (ד:א). |
| 57 | māḫiram | מתמודד | `אֶעֱשֶׂה לּוֹ עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:יח) | [equivalent] | *māḫiru* (from *maḫāru* "stand opposite") ↔ `כְּנֶגְדּוֹ`; line broken. |
| 58 | šuknīšum-ma | שׂימי לו | `וַיָּשֶׂם שָׁם אֶת הָאָדָם` (בראשית ב:ח) | [equivalent] | *šakānu* = `שׂים` (reserved): "set (a rival?) for him", addressed to a woman (Ninsun?); cf. OB II 194–195 `שׂוּם לו שווה`. Object lost. |
| 71–76 | īnāšu imlâ dimtam … ilmin libbašū-ma | עיניו מלאו דמעה … רע לבו | `וַיִּתֵּן אֶת קֹלוֹ בִּבְכִי` (בראשית מה:ב) | [equivalent] | Tears of one man before another (Joseph; Gilgameš and Enkidu). |
| 79-82 | ammīni ibrī īnāka imlâ dimtam / ilmin libbaka | למה, רֵעִי, עיניך מלאו דמעה, רע לבך | `חַנָּה לָמֶה תִבְכִּי וְלָמֶה לֹא תֹאכְלִי וְלָמֶה יֵרַע לְבָבֵךְ` (שמואל א א:ח) | [equivalent] | **The same double question**: "why" the tears, "why" the bad heart (*lemēnu* ↔ `יֵרַע`, not cognate). Partly restored. |
| 72-73 | ilmin libbašu | רע לבו | `מַדּוּעַ פָּנֶיךָ רָעִים … אֵין זֶה כִּי אִם רֹעַ לֵב` (נחמיה ב:ב) | [equivalent] | "Badness of heart" = grief. |
| 72-73 | uštāniḫ | נאנח | `וַיֵּאָנְחוּ בְנֵי יִשְׂרָאֵל מִן הָעֲבֹדָה` (שמות ב:כג) | [equivalent] | *anāḫu* Št = `נאנח`. |
| 77 | itbalam pānīšu | נשא את פניו | `הִנֵּה נָשָׂאתִי פָנֶיךָ גַּם לַדָּבָר הַזֶּה` (בראשית יט:כא) | [equivalent] | George "showed pity": the Akkadian idiom "carry the face" has the sense of the Hebrew `נָשָׂא פָנִים` (favour); different root (*wabālu*). Literal sense: `וַיִּשָּׂא פָנָיו אֶל הַחַלּוֹן` (מלכים ב ט:לב). |
| 87-88 | aḫāya irmâ-ma emūqī īniš | זרועותיי רפו, וכוחי חלש | `וַיִּרְפּוּ יָדָיו` (שמואל ב ד:א) | [equivalent] | **Key** (brief). Limbs gone slack from fear; *ramû* ↔ `רפה` [equivalent]; also `חַזְּקוּ יָדַיִם רָפוֹת` (ישעיהו לה:ג). = SB II 181, 187 (3rd/2nd person). |
| 87-88 | emūqī īniš | וכוחי חלש | `כָּשַׁל בַּעֲוֹנִי כֹחִי` (תהלים לא:יא) | [equivalent] | Failing strength; also `עֲזָבַנִי כֹחִי` (תהלים לח:יא). |
| 97–99 | ḫuwāwa dapīnu … [i nin]āra[šš]u | חוּוָוה העריץ … [נקט]לנו | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | **Key.** The guardian of the gods' place: in Genesis set there by God, the man driven away; here the man sets out to kill the guardian. Verb partly restored. |
| 98-99 | [ṭēmšu liḫ]liq | [ודעתו? תאב]ד | `וּבִעַרְתָּ הָרָע מִקִּרְבֶּךָ` (דברים יג:ו) | [absent] | SB III 205 "we shall banish from the land every evil that Šamaš hates" (the brief's "to banish evil from the land", close to the Deuteronomic formula) is **not** in OB III: here the aim is Ḫuwawa himself and the name (148–160). Tchernichovsky imports the Deuteronomic phrase into his SB III. Line restored, uncertain. |
| 100-101 | ina qišti erēnim ašar ḫuwāwa wašbu | ביער הארזים, מקום אשר חוווה יושב בו | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי` (יחזקאל כח:ב) | [equivalent] | A divine dwelling in a remote place (cf. 123). Partly restored. |
| 100-101 | erēnim | הארזים | `אֶרֶז בַּלְּבָנוֹן` (יחזקאל לא:ג) | [cognate] | *erēnu* = `אֶרֶז`; the cedar forest as the garden of God in Ezek 31:8–9. |
| 106 | īdē-ma ibrī ina šadî | ידעתי (אותו), רֵעִי, בהר | `וְהָאָדָם יָדַע אֶת חַוָּה אִשְׁתּוֹ` (בראשית ד:א) | [cognate] | *edû* = `ידע` (reserved); root only: knowledge from experience in the wild (also 152, 275). |
| 107 | inūma attallaku itti būlim | כאשר התהלכתי עם הבהמה | `וַיִּקְרָא הָאָדָם שֵׁמוֹת לְכָל הַבְּהֵמָה … וּלְאָדָם לֹא מָצָא עֵזֶר כְּנֶגְדּוֹ` (בראשית ב:כ) | [divergence] | **Key.** Enkidu remembers his life with the animals (*būlu* = `בהמה`) before he became a man (OB II 108–109) – the state of Gen 2:20 before the partner. *alāku* Gtn = `התהלך`. |
| 108 | ana šūši bērā nummât qištum | לשישים בֵּרוּ (לכל עבר) שומם היער | `בְּאֶרֶץ לֹא עָבַר בָּהּ אִישׁ וְלֹא יָשַׁב אָדָם שָׁם` (ירמיהו ב:ו) | [equivalent] | *nawû* D "be without inhabitant" (George's note); OB wording differs from SB II 223 ("he hears for sixty leagues"). |
| 108 | nummât qištum | שומם היער | `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן מִקֶּדֶם` (בראשית ב:ח) | [divergence] | The gods' guarded place is a desolate forest, not a planted garden (no garden word, renderings §16). |
| 109 | mannu ša urradu ana libbīša | מי זה ירד אל לבו | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | Entry into the guarded place forbidden; "into its heart" (*libbu*) here, "into his forest" in SB. = 196. |
| 110 | ḫuwāwa rigmašu abūbu | חוווה – קולו מבול | `וַאֲנִי הִנְנִי מֵבִיא אֶת הַמַּבּוּל מַיִם עַל הָאָרֶץ` (בראשית ו:יז) | [equivalent] | *abūbu* = `מַבּוּל` [equivalent, not cognate]; the guardian's voice is the Deluge. = 197, §3.1. |
| 110 | rigmašu abūbu | קולו מבול | `יְהוָה לַמַּבּוּל יָשָׁב` (תהלים כט:י) | [equivalent] | The divine voice (`קוֹל יְהוָה עַל-הַמָּיִם`, תהלים כט:ג) and the Deluge in one psalm. |
| 111-112 | pīšu girrum-ma napīssu mūtum | פיו – אש, ונפשו – מוות | `מִפִּיו לַפִּידִים יַהֲלֹכוּ … נַפְשׁוֹ גֶּחָלִים תְּלַהֵט` (איוב מא:יא–יג) | [equivalent] | Leviathan: fire from the mouth, the "breath" (*napīšu* ↔ `נֶפֶשׁ`) burning. = 198, §3.1. |
| 111-112 | pīšu girrum-ma | פיו – אש | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [divergence] | The guardian's fire. |
| 115-116 | qabal lā maḫār šubat ḫuwāwa | קרב שאין לעמוד מולו – משכן חוווה | `לֹא יִתְיַצֵּב אִישׁ בְּפָנֶיךָ` (דברים ז:כד) | [equivalent] | "None can stand against" as the mark of the invincible; = 200 (the elders); also 194. |
| 119 | lūliam šadîša | אעלה אל הרו | `מִי יַעֲלֶה בְהַר יְהוָה וּמִי יָקוּם בִּמְקוֹם קָדְשׁוֹ` (תהלים כד:ג) | [equivalent] | Climbing the mountain of the gods' seat (123). |
| 123 | mūšab ilī e[nunnakkī] | מושב האל[ים, האנונכי] | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | [equivalent] | **Key.** The Cedar Forest as "the seat of the gods" (= SB V 6) ↔ the king of Tyre in `בְּעֵדֶן גַּן אֱלֹהִים` (יחזקאל כח:יג). Anunnakkū restored. |
| 129-130 | kī nillak ibrī ana qišti erēni | איך נלך, רֵעִי, אל יער הארזים | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | "How can we go" to the guarded place; = SB II 217. |
| 131-132 | nāṣirša wēr-ma dān lā sākip | נוצרו – וֵר הוא; עז הוא, לא ינום | `וַיַּשְׁכֵּן … אֶת הַכְּרֻבִים וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר` (בראשית ג:כד) | [equivalent] | **Key.** *nāṣiru* "guardian" ↔ `לִשְׁמֹר` (*naṣāru* = `נצר`, never `שמר`): in the OB the guardian is the god Wēr (= Adad, 134–135), and Ḫuwawa his appointee (133) – a divine hierarchy of guardians, as cherubim set by God. |
| 131-132 | dān lā sākip | עז הוא, לא ינום | `הִנֵּה לֹא יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | [equivalent] | The same phrase: the guardian "does not slumber" (*sakāpu* = `נום`). The reading *lā sākip* (for older *lā ṣālil*) now confirmed (eBL note). |
| 137 | pulḫiātim sebe išīmšum ellil? | שבע אימות [גזר לו אנליל?] | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | **Key** (brief). The guardian's "seven terrors" (the auras of SB V, *pulḫātu* = `אימות`) ↔ the flaming sword beside the cherubim; decreed (*šâmu* = `גזר`) by Enlil (restored, after SB II 228). The SB "for the terror of the people" is absent here. |
| 140 | mannu ibrī ēlû šamāʾī | מי, רֵעִי, עלה לשמים | `מִי עָלָה-שָׁמַיִם וַיֵּרַד` (משלי ל:ד) | [equivalent] | **Key.** The same rhetorical question in the same tense (preterite + subjunctive: "who is it that went up"); *elû* ↔ `עלה`, *šamû* = `שמים` [cognate]. George "can climb". |
| 140 | mannu … ēlû šamāʾī | מי … עלה לשמים | `לֹא בַשָּׁמַיִם הִוא לֵאמֹר מִי יַעֲלֶה לָּנוּ הַשָּׁמַיְמָה` (דברים ל:יב) | [equivalent] | "Who will go up to heaven" as the impossible. |
| 140 | ēlû šamāʾī | עלה לשמים | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | [divergence] | **Key.** Heaven and "name" in one sequence, as here (140 → 148 → 160): the builders reach for heaven *and* a name; Gilgameš concludes that heaven is closed to man and chooses the name instead. |
| 140 | ēlû šamāʾī | עלה לשמים | `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה` (בראשית כח:יב) | [divergence] | The way between earth and heaven, on a journey (cf. 216–235 ↔ Gen 28:20–22). |
| 141 | ilū-ma itti šamšim dāriš u[šbū] | האלים – עם שַׁמַשׁ לָעַד [ישבו] | `וְעַתָּה פֶּן יִשְׁלַח יָדוֹ וְלָקַח גַּם מֵעֵץ הַחַיִּים וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | [divergence] | **Key.** Life "forever" belongs to the gods (*dāriš* = `לָעַד`, never `לְעוֹלָם`); in Genesis God guards it against man's reaching. Verb restored. |
| 141 | ilū-ma … dāriš ušbū | האלים … לעד ישבו | `וְאַתָּה יְהוָה לְעוֹלָם תֵּשֵׁב` (תהלים קב:יג) | [equivalent] | The gods' eternal "sitting" (*ašābu* = `ישב`), against man's numbered days (Ps 102:12 `יָמַי כְּצֵל נָטוּי`). |
| 141 | ilū-ma … / awīlūtum-ma … | האלים – … / האנושות – … | `הַשָּׁמַיִם שָׁמַיִם לַיהוָה; וְהָאָרֶץ נָתַן לִבְנֵי-אָדָם` (תהלים קטו:טז) | [divergence] | The division between gods and men. |
| 141 | ilū-ma itti šamšim | האלים – עם שמש | `וַיִּתְהַלֵּךְ חֲנוֹךְ אֶת הָאֱלֹהִים וְאֵינֶנּוּ כִּי לָקַח אֹתוֹ אֱלֹהִים` (בראשית ה:כד) | [divergence] | Being "with" the god(s) as the state beyond death, granted to one man. |
| 142 | awīlūtum-ma manû ūmūša | האנושות – מנויים ימיה | `לִמְנוֹת יָמֵינוּ כֵּן הוֹדַע וְנָבִא לְבַב חָכְמָה` (תהלים צ:יב) | [cognate] | **Key.** *manû* ~ `מנה` and *ūmu* ~ `יום`: the same two roots. = SB II 234. |
| 142 | manû ūmūša | מנויים ימיה | `וַיֹּאמֶר יְהוָה לֹא יָדוֹן רוּחִי בָאָדָם לְעֹלָם … וְהָיוּ יָמָיו מֵאָה וְעֶשְׂרִים שָׁנָה` (בראשית ו:ג) | [equivalent] | **Key.** Man's days limited, against the gods' "forever" (141); in Genesis a divine decree, here a hero's maxim. Gen 6:3 has `לְעֹלָם` and `רוּחִי` beside the limit, as 141 *dāriš* and 143 *šāru* stand beside 142. |
| 142 | manû ūmūša | מנויים ימיה | `אִם חֲרוּצִים יָמָיו מִסְפַּר-חֳדָשָׁיו אִתָּךְ` (איוב יד:ה) | [equivalent] | Counted days. |
| 142 | awīlūtum-ma manû ūmūša | האנושות – מנויים ימיה | `אָדָם לַהֶבֶל דָּמָה; יָמָיו כְּצֵל עוֹבֵר` (תהלים קמד:ד) | [equivalent] | Man and his days, followed (143) by the image of nothingness. |
| 143 | mimma ša īteneppušu šārum-ma | כל אשר הוא עושה – רוח | `רָאִיתִי אֶת כָּל הַמַּעֲשִׂים שֶׁנַּעֲשׂוּ תַּחַת הַשָּׁמֶשׁ; וְהִנֵּה הַכֹּל הֶבֶל וּרְעוּת רוּחַ` (קהלת א:יד) | [equivalent] | **Key.** "All" (*mimma*) that man does (*epēšu* = `עשה`) is "wind" (*šāru* = `רוּחַ`, not `הֶבֶל`). Gtn: continual doing. SB II 235 has the preterite. |
| 143 | šārum-ma | רוח | `וּמַה יִּתְרוֹן לוֹ שֶׁיַּעֲמֹל לָרוּחַ` (קהלת ה:טו) | [equivalent] | Toil for the wind. |
| 143 | šārum-ma | רוח | `זְכֹר כִּי-רוּחַ חַיָּי` (איוב ז:ז) | [equivalent] | Life as wind. |
| 144 | taddar mūtam | חרד מן המוות | `פֶּן תְּמֻתוּן` (בראשית ג:ג) | [divergence] | Fear of death: here mocked by Gilgameš, who will himself fear it after Enkidu's death (OB VA+BM a+14, SB X 62). |
| 145 | danānu qarradūtīka | חוזק גבורתך | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | [equivalent] | Heroism (*qarrādūtu*, from *qarrādu* ~ *qurādu* = `גבור`) and the name (148–160) together, as the `גִּבֹּרִים … אַנְשֵׁי הַשֵּׁם`. |
| 146–147 | lullik-ma ina pānīka … ē tādur | אלכה לפניך … אַל תחרד | `וַיהוָה הוּא הַהֹלֵךְ לְפָנֶיךָ הוּא יִהְיֶה עִמָּךְ … לֹא תִירָא וְלֹא תֵחָת` (דברים לא:ח) | [equivalent] | The same pair: "going before you" and "do not fear"; here a man before his friend (cf. 251, 285). |
| 147 | ṭiḫe ē tādur | גְּשָׁה, אַל תחרד | `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א) | [equivalent] | "Do not fear" to the hero (*adāru* ↔ `ירא`, not cognate). |
| 148 | šumma amtaqut šumī lū ušzīz | אם נפלתי – את שמי העמדתי | `וְאַבְשָׁלֹם לָקַח וַיַּצֶּב לוֹ בְחַיָּו אֶת מַצֶּבֶת … כִּי אָמַר אֵין לִי בֵן בַּעֲבוּר הַזְכִּיר שְׁמִי` (שמואל ב יח:יח) | [equivalent] | **Key.** "Setting up" (*izuzzu* Š ↔ `וַיַּצֶּב`, not cognate) a name against death; *šumu* = `שֵׁם` [cognate]; Durand reads 148–150 as the language of a victory stele. **Not *šakānu*:** the brief's *šumī lultakan* is not in the tablet (decision 2). |
| 148 | šumī lū ušzīz | את שמי העמדתי | `לְהָקִים לְאָחִיו שֵׁם בְּיִשְׂרָאֵל` (דברים כה:ז) | [equivalent] | "Raising" a name for the dead; also `לְהָקִים שֵׁם הַמֵּת עַל נַחֲלָתוֹ` (רות ד:ה). Here a man raises his own name in the event of his death. |
| 148 | šumī | שמי | `וְנַעֲשֶׂה לָּנוּ שֵׁם פֶּן נָפוּץ עַל פְּנֵי כָל הָאָרֶץ` (בראשית יא:ד) | [equivalent] | The name as the answer to mortality / dispersion. |
| 149-150 | gilgāmeš itti ḫuwāwa dapīnim taqumtam ištu | גילגמש עם חוווה העריץ ארג תגרה | `וְעֵץ חֲנִיתוֹ כִּמְנוֹר אֹרְגִים` (שמואל א יז:ז) | [equivalent] | The weaving image in a duel (*šatû* "weave" = `ארג`); there the weapon, here the battle itself ("joined battle", George). |
| 151 | tawwaldam-ma tarbia ina ṣēri | נולדת וגדלת בשדה | `וַיִּגְדָּל וַיֵּשֶׁב בַּמִּדְבָּר` (בראשית כא:כ) | [equivalent] | Raised in the wild (Ishmael); also `אִישׁ שָׂדֶה` (כה:כז). = SB II 237. [divergence] with SB I 100–101 (Enkidu built from clay, not born). |
| 152 | išḫiṭkā-ma lābu | זינק עליך לביא | `וְהִנֵּה כְּפִיר אֲרָיוֹת שֹׁאֵג לִקְרָאתוֹ` (שופטים יד:ה) | [equivalent] | The hero and the lion; also `וּבָא הָאֲרִי וְאֶת הַדּוֹב` (שמואל א יז:לד), David before Goliath (cf. 191). |
| 152 | kalāma tīde | את הכל ידעת | `וִהְיִיתֶם כֵּאלֹהִים יֹדְעֵי טוֹב וָרָע` (בראשית ג:ה) | [cognate] | *edû* = `ידע`; "knowing all" from experience, not from eating. Root only. |
| 153 | eṭlūtum iḫbutū maḫarka | העלמים נסו מפניך | `וַיָּנֻסוּ מִפָּנָיו וַיִּירְאוּ מְאֹד` (שמואל א יז:כד) | [equivalent] | Men flee before the strong one. |
| 158-159 | luksumam erēnam | ואקצצה את הארז | `גַּם בְּרוֹשִׁים שָׂמְחוּ לְךָ אַרְזֵי לְבָנוֹן; מֵאָז שָׁכַבְתָּ לֹא יַעֲלֶה הַכֹּרֵת עָלֵינוּ` (ישעיהו יד:ח) | [equivalent] | **Felling the cedars as royal hubris**; also `וְאֶכְרֹת קוֹמַת אֲרָזָיו מִבְחַר בְּרֹשָׁיו` (ישעיהו לז:כד). = 187. |
| 158-159 | qātī luškun-ma | את ידי אשׂים | `פֶּן יִשְׁלַח יָדוֹ` (בראשית ג:כב) | [divergence] | Weak: "setting the hand" (*qāta šakānu*, begin work) on the gods' trees vs "stretching the hand" to the tree of life. |
| 160 | šumam ša darû anāku luštaknam | שם אשר נצחי הוא – אני אָשִׂים לי | `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | [equivalent] | **Key.** *šumu* = `שֵׁם` [cognate]; *šakānu* Gt (reflexive, Streck) ↔ `וְנַעֲשֶׂה … לָּנוּ` (*šakānu* = `שׂים`, not `עשה`): the same structure "name + make for oneself". = 188 (before the elders, as the city's builders speak in Gen 11:4). |
| 160 | šumam … luštaknam | שם … אשׂים | `וְלָשׂוּם לוֹ שֵׁם` (שמואל ב ז:כג) | [cognate] | **The idiom itself in both roots**: *šuma šakānu* = `שׂוּם שֵׁם` (God's name); also `לָשׂוּם אֶת שְׁמוֹ שָׁם` (דברים יב:ה). |
| 160 | šumam ša darû | שם אשר נצחי הוא | `שֵׁם עוֹלָם אֶתֶּן לוֹ אֲשֶׁר לֹא יִכָּרֵת` (ישעיהו נו:ה) | [equivalent] | "An everlasting name" (*darû* ↔ `עוֹלָם`; rendered `נצחי`, never `עולם`); also `לַעֲשׂוֹת לוֹ שֵׁם עוֹלָם` (ישעיהו סג:יב). |
| 160 | šumam ša darû | שם אשר נצחי הוא | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | [equivalent] | **Key.** The heroes of renown; Gilgameš, two-thirds god (SB I 48), seeks to become a "man of the name". |
| 160 | šumam | שם | `וַאֲגַדְּלָה שְׁמֶךָ` (בראשית יב:ב) | [divergence] | The great name given by God vs the name a man makes for himself. |
| 161 | ana kiškattîm lumūḫam | אל הכּוּר אצא | `תּוּבַל קַיִן לֹטֵשׁ כָּל חֹרֵשׁ נְחֹשֶׁת וּבַרְזֶל` (בראשית ד:כב) | [equivalent] | The forge and the making of weapons (161–171); *kiškattû* = `כּוּר` ↔ `מִכּוּר הַבַּרְזֶל` (דברים ד:כ). |
| 164 | wašbū uštaddanū ummiānū | יושבים, נדברים האומנים | `וְחָרָשׁ לֹא יִמָּצֵא בְּכֹל אֶרֶץ יִשְׂרָאֵל … פֶּן יַעֲשׂוּ הָעִבְרִים חֶרֶב אוֹ חֲנִית` (שמואל א יג:יט) | [equivalent] | Craftsmen as the condition of weapons. |
| 166–168 | šalāš bilā … mešēlētum šina bilā | שלושה משאות (כל אחד) … הלהבים – שני משאות | `וְלַהֶבֶת חֲנִיתוֹ שֵׁשׁ מֵאוֹת שְׁקָלִים בַּרְזֶל` (שמואל א יז:ז) | [equivalent] | The enormous weight of a giant's weapon, its blade (`לַהֶבֶת` ↔ *mešēltu* "blade") weighed; the heroes here are the giants. |
| 170 | iḫzū patrī … ḫurāṣa | משבצות הסכינים … זהב | `מֻסַבֹּת מִשְׁבְּצוֹת זָהָב תַּעֲשֶׂה אֹתָם` (שמות כח:יא) | [equivalent] | Gold mountings (*iḫzu* = `משבצת`). Form only. |
| 172 | abullātim ša uruk sebe | שערי העיר של אוּרוּךְ – שבעה | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד וְכַלְנֵה בְּאֶרֶץ שִׁנְעָר` (בראשית י:י) | [cognate] | Uruk = Erech. |
| 173 | puḫra issī-ma | [לאספה] צעק | `וַיָּבֹא חֲמוֹר וּשְׁכֶם בְּנוֹ אֶל שַׁעַר עִירָם וַיְדַבְּרוּ אֶל אַנְשֵׁי עִירָם` (בראשית לד:כ) | [equivalent] | The ruler addresses the city's assembly (the gates shut, 172). |
| 182 | ilam ša iqabbû lūmur | את האל אשר אומרים (עליו) – אראה | `כִּי רָאִיתִי אֱלֹהִים פָּנִים אֶל פָּנִים וַתִּנָּצֵל נַפְשִׁי` (בראשית לב:לא) | [equivalent] | To see a god and come out alive (cf. 219); Ḫuwawa is called *ilu* here (DINGIR as logogram, George). |
| 183 | ša šumšu ittanambalā mātātum | אשר את שמו נושאות הארצות | `וּלְמַעַן סַפֵּר שְׁמִי בְּכָל הָאָרֶץ` (שמות ט:טז) | [equivalent] | A name spread through the lands. |
| 183 | šumšu ittanambalā | את שמו נושאות | `לֹא תִשָּׂא אֶת שֵׁם יְהוָה אֱלֹהֶיךָ לַשָּׁוְא` (שמות כ:ו) | [divergence] | "Carrying a name" (*wabālu* = `נשא` by sense): in Hebrew uttering it (in an oath); here the lands carry it about. Numbering of this Bible edition (= Exod 20:7 elsewhere). |
| 185-186 | kīma dannu perʾum ša uruk | כי עז החוטר של אורוך | `וְיָצָא חֹטֶר מִגֵּזַע יִשָׁי` (ישעיהו יא:א) | [equivalent] | The king as a "shoot" (*perʾu* = `חֹטֶר`). |
| 187 | qātī luškun-ma luksumam erēnam | את ידי אשׂים, ואקצצה את הארז | `וְאֶכְרֹת קוֹמַת אֲרָזָיו מִבְחַר בְּרֹשָׁיו` (ישעיהו לז:כד) | [equivalent] | = 158–159. |
| 188 | šuma ša darû anāku luštaknam | שם אשר נצחי הוא – אני אָשִׂים לי | `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | [equivalent] | **Key.** = 160, now before the elders of the city. Also `לָשׂוּם אֶת שְׁמוֹ שָׁם` (דברים יב:ה) [cognate idiom]. |
| 191 | ṣeḫrētī-ma gilgāmeš libbaka našīka | צעיר אתה, גילגמש, לבך נשאך | `כִּי נַעַר אַתָּה וְהוּא אִישׁ מִלְחָמָה מִנְּעֻרָיו` (שמואל א יז:לג) | [equivalent] | **Key.** "You are young" to the hero about to fight the giant (Saul to David; the elders to Gilgameš). = SB II 289. |
| 191 | libbaka našīka | לבך נשאך | `וַיָּבֹאוּ כָּל אִישׁ אֲשֶׁר נְשָׂאוֹ לִבּוֹ` (שמות לה:כא) | [equivalent] | *libbu našû* = `נשאו לבו` (the same idiom; *našû* = `נשא` [cognate?]); here impetuousness, in Exodus willingness. |
| 191–192 | ṣeḫrētī … lā tīde | צעיר אתה … לא ידעת | `וְאָנֹכִי נַעַר קָטֹן לֹא אֵדַע צֵאת וָבֹא` (מלכים א ג:ז) | [equivalent] | Youth and not knowing (*edû* = `ידע`). |
| 192 | mimma ša tēteneppušu lā tīde | כל אשר אתה עושה – לא ידעת | `וַיַּאֲכִלְךָ אֶת הַמָּן אֲשֶׁר לֹא יָדַעְתָּ` (דברים ח:ג) | [cognate] | *edû* = `ידע`, root only; the elders turn Gilgameš's own words (143) against him. |
| 194 | mannu ša imaḫḫaru kakkīšu | מי זה יעמוד מול כלי־נשקו | `לֹא יִתְיַצֵּב אִישׁ בְּפָנֶיךָ` (דברים ז:כד) | [equivalent] | The invincible. |
| 202 | ippalsam-ma iṣīḫ ana ibrīšu | הסתכל, וצחק אל רֵעֵהוּ | `וַיִּפֹּל אַבְרָהָם עַל פָּנָיו וַיִּצְחָק; וַיֹּאמֶר בְּלִבּוֹ הַלְּבֶן מֵאָה שָׁנָה יִוָּלֵד` (בראשית יז:יז) | [cognate] | **Key.** *ṣiāḫu* = `צחק` [cognate]: laughter at what seems impossible – Abraham and Sarah (`וַתִּצְחַק שָׂרָה בְּקִרְבָּהּ`, בראשית יח:יב) laugh at God's promise; Gilgameš laughs at the elders' warning. |
| 213 | ilka lišēširam šēpīka | אֵלְךָ יישר את רגליך | `בְּכָל-דְּרָכֶיךָ דָעֵהוּ; וְהוּא יְיַשֵּׁר אֹרְחֹתֶיךָ` (משלי ג:ו) | [equivalent] | The god "straightens" the path (*ešēru* ~ `ישר`); verb restored. |
| 215 | ana kārim ša uruk ṭiḫea ina šulmi | אל נמל אורוך גְּשָׁה בשלום | `וְשַׁבְתִּי בְשָׁלוֹם אֶל בֵּית אָבִי` (בראשית כח:כא) | [equivalent] | The return "in peace" (*šulmu* ~ `שלום` [cognate]). = SB III 1, 215. |
| 216 | kamis-ma gilgāmeš ina maḫar šamaš | כורע גילגמש לפני שַׁמַשׁ | `קָם מִלִּפְנֵי מִזְבַּח יְהוָה מִכְּרֹעַ עַל בִּרְכָּיו` (מלכים א ח:נד) | [equivalent] | Kneeling in prayer (*kamāsu* = `כרע`). |
| 218 | allak šamšu ašar ḫuwāwa | הולך אני, שַׁמַשׁ, אל מקום חוווה | `אִם יִהְיֶה אֱלֹהִים עִמָּדִי וּשְׁמָרַנִי בַּדֶּרֶךְ הַזֶּה אֲשֶׁר אָנֹכִי הוֹלֵךְ` (בראשית כח:כ) | [equivalent] | **Key.** The traveller's prayer-vow: "I am going" (*allak* ↔ `אָנֹכִי הוֹלֵךְ`), keep me (219), bring me back (220), I will build you a house (234) – Jacob's vow in the same order. Ḫuwawa restored. |
| 219 | ullânum lušlimam napištī bulliṭ? | משם אבוא בשלום, נפשי – החיה | `וַתִּנָּצֵל נַפְשִׁי` (בראשית לב:לא) | [equivalent] | Coming out alive from the encounter with the divine (182); also `וְחָיְתָה נַפְשִׁי בִּגְלָלֵךְ` (בראשית יב:יג). *bulliṭ* restored. |
| 220 | terranni ana kārim ša uruk | הֲשִׁיבֵנִי אל נמל של אורוך | `וְהִנֵּה אָנֹכִי עִמָּךְ וּשְׁמַרְתִּיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ וַהֲשִׁבֹתִיךָ אֶל הָאֲדָמָה הַזֹּאת` (בראשית כח:טו) | [equivalent] | **Key.** *târu* D = `השיב` (שוב [equivalent], not cognate): the god's bringing back of the traveller. |
| 220 | terranni | הֲשִׁיבֵנִי | `עַד שׁוּבְךָ אֶל הָאֲדָמָה` (בראשית ג:יט) | [divergence] | "Return" to the earth as death vs return home as life (*târu* = `שוב`, renderings §4). |
| 221 | ṣillam šukun elīya? | צל שׂים עליי | `יְהוָה צִלְּךָ עַל-יַד יְמִינֶךָ` (תהלים קכא:ה) | [cognate] | *ṣillu* = `צֵל`: the god's shade over the traveller (Ps 121, the traveller's psalm; cf. 131–132 `לא ינום`). *elīya* restored. |
| 221 | ṣillam | צל | `סָר צִלָּם מֵעֲלֵיהֶם וַיהוָה אִתָּנוּ` (במדבר יד:ט) | [cognate] | Divine "shade" as protection before facing giants. |
| 229 | eli dūri ša appīšu illakā dīmātum | על דופן אפו זולגות דמעות | `וְתֵרַד עֵינִי דִּמְעָה` (ירמיהו יג:יז) | [equivalent] | Weeping before the journey (= SB XI 309 formula). |
| 230 | ḫarrānam ša lā alliku matīma | באוֹרַח אשר לא הלכתי בה אי־פעם | `כִּי לֹא עֲבַרְתֶּם בַּדֶּרֶךְ מִתְּמוֹל שִׁלְשׁוֹם` (יהושע ג:ד) | [equivalent] | A road never travelled, under divine guidance. |
| 232 | lutūr? lušlimam anāku | אשובה?, אבוא בשלום אני | `וְשַׁבְתִּי בְשָׁלוֹם אֶל בֵּית אָבִי` (בראשית כח:כא) | [equivalent] | **Key.** The same two verbs: *târu* ↔ `וְשַׁבְתִּי`, *šalāmu* ↔ `בְשָׁלוֹם` [cognate]. *lutūr* restored. |
| 234 | lubnīkum? bītam ša lalêka | אבנה? לך בית של עונגך | `וְהָאֶבֶן הַזֹּאת אֲשֶׁר שַׂמְתִּי מַצֵּבָה יִהְיֶה בֵּית אֱלֹהִים` (בראשית כח:כב) | [equivalent] | **Key.** A house for the god as the vow's payment, after the safe return. Verb restored (George). |
| 234 | lubnīkum bītam | אבנה לך בית | `הַאַתָּה תִּבְנֶה לִּי בַיִת לְשִׁבְתִּי` (שמואל ב ז:ה) | [equivalent] | *banû* = `בנה`: a king builds a house for his god. |
| 236–242 | unūssu … qaštum u išpatum … išpassu | כליו … הקשת והאשפה … אשפתו | `וְעַתָּה שָׂא נָא כֵלֶיךָ תֶּלְיְךָ וְקַשְׁתֶּךָ וְצֵא הַשָּׂדֶה` (בראשית כז:ג) | [equivalent] | Equipment (*unūtu* = `כלים`), bow and quiver for going out to the wild (Esau). |
| 238 | išpatum | האשפה | `אַשְׁרֵי הַגֶּבֶר אֲשֶׁר מִלֵּא אֶת-אַשְׁפָּתוֹ מֵהֶם` (תהלים קכז:ה) | [cognate] | *išpatu* = `אַשְׁפָּה`; *qaštu* = `קֶשֶׁת` [cognate]. |
| 245–248 | ukarrabū gilgāmeš … ikarrabūšu | מברכים את גילגמש … מברכים אותו | `וַיְבָרְכוּ אֶת רִבְקָה וַיֹּאמְרוּ לָהּ` (בראשית כד:ס) | [equivalent] | The departing one blessed by his people (*karābu* = `ברך`). |
| 249 | ē tatkal gilgāmeš ana emūqīka | אַל תבטח, גילגמש, בכוחותיך | `אַל יִתְהַלֵּל הַגִּבּוֹר בִּגְבוּרָתוֹ` (ירמיהו ט:כב) | [equivalent] | Do not trust in strength; also `גִּבּוֹר לֹא-יִנָּצֵל בְּרָב-כֹּחַ` (תהלים לג:טז). = SB III 2 (without "all"). |
| 250 | uṣur ramānka | ונצור את עצמך | `רַק הִשָּׁמֶר לְךָ וּשְׁמֹר נַפְשְׁךָ מְאֹד` (דברים ד:ט) | [equivalent] | *naṣāru ramāna* ↔ `שְׁמֹר נַפְשְׁךָ` (*naṣāru* ↔ `שמר`; rendered `נצר`). |
| 251 | lillik enkīdu ina pānīka | ילך אנקידו לפניך | `הִנֵּה אָנֹכִי שֹׁלֵחַ מַלְאָךְ לְפָנֶיךָ לִשְׁמָרְךָ בַּדָּרֶךְ` (שמות כג:כ) | [equivalent] | **Key.** The one who goes ahead as guardian of the way (255 "the one who goes in front kept his companion safe"). = SB III 6. |
| 252–254 | urḫam amer … īde ša qišti nērebētim | דרך ראה … יודע את מבואות היער | `כִּי עַל כֵּן יָדַעְתָּ חֲנֹתֵנוּ בַּמִּדְבָּר וְהָיִיתָ לָּנוּ לְעֵינָיִם` (במדבר י:לא) | [equivalent] | The guide who knows the wilderness (Hobab); *edû* = `ידע`. Cf. 275. |
| 255 | ālik maḫra tappâm ušallim | ההולך לפנים הביא בשלום את החבר | `טוֹבִים הַשְּׁנַיִם מִן הָאֶחָד … כִּי אִם יִפֹּלוּ הָאֶחָד יָקִים אֶת חֲבֵרוֹ` (קהלת ד:ט–י) | [equivalent] | **Key.** A proverb of two companions on the way (*tappû* = `חבר`); gnomic preterite. SB III 4 changes *ušallim* to *ušezzeb* (`מציל`). |
| 256 | pagaršu iṣṣur | את גוויתו נצר | `הֲשֹׁמֵר אָחִי אָנֹכִי` (בראשית ד:ט) | [equivalent] | Guarding oneself (OB) vs one's friend (SB III 5 *ibiršu*) – the SB turns the proverb toward the keeper of the other; *naṣāru* ↔ `שמר`. Verb partly restored. |
| 256 | pagaršu iṣṣur | את גוויתו נצר | `שׁוֹמֵר נַפְשׁוֹ יִרְחַק מֵהֶם` (משלי כב:ה) | [equivalent] | The wary man keeps himself. |
| 257 | lišakšidka ernittaka šamšu | יגיעך אל משאלתך שַׁמַשׁ | `יִתֶּן-לְךָ כִלְבָבֶךָ; וְכָל-עֲצָתְךָ יְמַלֵּא … יְמַלֵּא יְהוָה כָּל-מִשְׁאֲלוֹתֶיךָ` (תהלים כ:ה–ו) | [equivalent] | **Key.** The blessing of the king going to battle; *ernittu* = `משאלה` (open decision 4). = 286. |
| 259 | liptēkum padānam peḫītam | יפתח לך את המשעול החסום | `אֲנִי לְפָנֶיךָ אֵלֵךְ … דַּלְתוֹת נְחוּשָׁה אֲשַׁבֵּר` (ישעיהו מה:ב) | [equivalent] | The god opens the closed way before the conqueror. |
| 259 | padānam peḫītam | המשעול החסום | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | The closed way opened by the god vs the way closed by God. |
| 265 | kīma ṣeḫrim ernittaka kušdam | כקטן – הגע אל משאלתך | `וְאָנֹכִי נַעַר קָטֹן` (מלכים א ג:ז) | [divergence] | "Like a child" here the insistent child who gets his way (George's note on the Isin love incantations), not humility. |
| 266-267 | ina nārim ša ḫuwāwa … misi šēpīka | בנהר של חוווה … רחץ את רגליך | `יֻקַּח נָא מְעַט מַיִם וְרַחֲצוּ רַגְלֵיכֶם` (בראשית יח:ד) | [equivalent] | Washing the feet at the journey's end (*mesû* ↔ `רחץ`); also `וּמַיִם לִרְחֹץ רַגְלָיו` (בראשית כד:לב). Said by the elders, not by Gilgameš (open decision 7). |
| 268 | ina nubattīka ḫiri būrtam | במלונך – חפור באר | `וַיִּבֶן שָׁם מִזְבֵּחַ … וַיֶּט שָׁם אָהֳלוֹ; וַיִּכְרוּ שָׁם עַבְדֵי יִצְחָק בְּאֵר` (בראשית כו:כה) | [equivalent] | **Key.** Camp, a well dug, and a libation/altar (270) at each station; *ḫerû* = `חפר` ↔ `וַיַּחְפְּרוּ עַבְדֵי יִצְחָק בַּנָּחַל` (כו:יט). |
| 269 | mû ellūtum ina nādīka | מים טהורים בנאדך | `שִׂימָה דִמְעָתִי בְנֹאדֶךָ` (תהלים נו:ט) | [cognate] | *nādu* = `נֹאד`. |
| 269 | lū kayyānū mû … ina nādīka | יהיו תמיד מים … בנאדך | `וַיִּקַּח לֶחֶם וְחֵמַת מַיִם וַיִּתֵּן אֶל הָגָר` (בראשית כא:יד) | [equivalent] | Water for the wilderness journey; `וַתְּמַלֵּא אֶת הַחֵמֶת מַיִם` (כא:יט). |
| 270 | kaṣûtim mê ana šamši tanaqqi | מים קרים לְשַׁמַשׁ תנסך | `וַיַּצֵּב יַעֲקֹב מַצֵּבָה … וַיַּסֵּךְ עָלֶיהָ נֶסֶךְ` (בראשית לה:יד) | [equivalent] | A libation on the road (*naqû* ↔ `נסך`). |
| 271 | ilka taḫassas lugalbanda | את אֵלך תזכור – את לוגלבנדה | `וְזָכַרְתָּ אֶת יְהוָה אֱלֹהֶיךָ` (דברים ח:יח) | [equivalent] | Remembering one's (personal) god. |
| 273 | ašar taštaknu | אשר שׂמת (את פניך) | `וַיָּשֶׂם אֶת פָּנָיו הַר הַגִּלְעָד` (בראשית לא:כא) | [cognate] | *pānī šakānu* = `שׂים פנים`; here (by George's reading) abbreviated, "the face" supplied. |
| 274 | ay iplaḫ libbaka yâti duglanni | אַל יפחד לבך – בי צְפֵה | `אַל יֵרַךְ לְבַבְכֶם אַל תִּירְאוּ` (דברים כ:ג) | [equivalent] | Encouragement before battle. |
| 276 | ša ḫuwāwa ittallaku | אשר חוווה מתהלך בה | `וַיִּשְׁמְעוּ אֶת קוֹל יְהוָה אֱלֹהִים מִתְהַלֵּךְ בַּגָּן לְרוּחַ הַיּוֹם` (בראשית ג:ח) | [divergence] | The master of the guarded place "walking about" (*alāku* Gtn = `התהלך`) in his forest / garden. "the road" restored. |
| 285 | lillik ilka ina pānīka? | ילך אֵלְךָ [לפניך?] | `וַיהוָה הוּא הַהֹלֵךְ לְפָנֶיךָ הוּא יִהְיֶה עִמָּךְ` (דברים לא:ח) | [equivalent] | **Key** (brief). The god who goes before; also `וַיהוָה הֹלֵךְ לִפְנֵיהֶם יוֹמָם בְּעַמּוּד עָנָן` (שמות יג:כא). "before you" restored. |
| 285 | lillik ilka | ילך אלך | `קוּם עֲשֵׂה לָנוּ אֱלֹהִים אֲשֶׁר יֵלְכוּ לְפָנֵינוּ` (שמות לב:א) | [equivalent] | A god "who will go before us". In the tablet three "go before": Gilgameš (146), Enkidu (251), the god (285). |
| 286 | lišakšidka ernittaka šamšu | יגיעך אל משאלתך שמש | `יְמַלֵּא יְהוָה כָּל-מִשְׁאֲלוֹתֶיךָ` (תהלים כ:ו) | [equivalent] | = 257; restored. |

### Lines shared with other tablets
- **SB II (first copies)**: identical where the Akkadian is: 142 = II 234; 151 = II 237; 191 = II 289; 129–130 = II 217 (brackets); 111–112 / 198 = II 222, 279, 292 (brackets only); 136 = II 218a, 227, 284, 298 (brackets). Changed exactly where the Akkadian changes (all listed by `verify.py`): 110 / 197 (name *Ḫuwawa*); 131–132 (*nāṣirša wēr-ma*); 134–135 (no *u*); 137 (*pulḫiātim sebe* for *ana pulḫāti ša nišī*); 143 (Gtn present); 152 (singular lion); 153 (no *u*); 156 (no "why, my friend"); 157 (no *u*, *-ma*); 161 (verb preserved, speech continues); 163 (*iṣṣabtū-ma … imūḫū*); 164 (Št, subject); 165 (great hatchets for "seven talents"); 180 (elders, *ribītim*); 190 (*siqra* for *ṭēma*); 192 (*ša tēteneppušu* for *ša tātamû*); 201 (*siqir mālikīšu*); 202 (laughed); 71/74, 79–80 (singular *dimtam*, word order); 83–84, 89–90, 104–105, 138–139 (the OB two-line formula for the SB one-line forms). **Not copies, although eBL links them**: 108 / 195 ≠ II 223, 280, 293; 109 / 196 ≠ II 224, 281, 295 (decision 4); 137 ≠ II 219b, 279; 215 ≠ II 1 (decision 12); 60, 61, 65, 66, 68, 70 (II 165–178 broken in both).
- **SB III**: 251 = III 6, 220 (brackets); 215 = III 1, 215 (brackets, end of speech); changed: 249 (no *gimir*), 252 ~ III 8, 222 (other verbs), 253 ~ III 7 (*nērebēti*), 255 ~ III 4, 218 (*ušallim* > *ušezzeb*: `הביא בשלום` / `מציל`), 256 ~ III 5, 219 (other line), 260–261 ~ III 79. eBL's 251 ~ III 77 is a loose "cf.".
- **Others**: 156–157 ~ V 130–131 (as II 232–233); 191 ~ V 167; 229 ~ XI 139, 309 (*dīmātum* without suffix); 174 = OB II 27–28 (brackets) ~ I 275; 24–25 ~ I 294–295; 84, 105, 128 = OB VA+BM 6′ / OB II 16 forms.
- **Within the tablet**: 12–13 = 113–114 = 199; 108–116 = 195–200 (brackets: 108/195 `[בֵּרוּ]`, 110/197); 72–73 = 75–76; 158–159 = 187 (brackets); 160 = 188 (closing quote); 257 = 286 (brackets, closing); 42–43 ~ 190; 143 ~ 192; 219 ~ 232 (`אבוא בשלום`); 102–103 ~ 115–116 ~ 275 (*šubtu* = `משכן`).
- **For later tablets**: SB IV (dreams on the road, wells dug at each camp) should take 268 `במלונך – חפור באר!` and 270 for its parallels; OB Schøyen₂ 65 = 77–78 (`[גילגמש נ]שא את פניו,` / `[ודיבר] אל אנקידו:`); OB Harmal₂ 14 ~ 276; OB Ishchali 37′ ~ 171.
- **`verify.py` differences (OB-III), all justified above** (74 + 12 marks-only): the SB II/III/V/XI pairs of this list; 158–159 ≠ 187 and 160 ≠ 188 and 257 ≠ 286 (brackets and final marks only, within the tablet); 174 ≠ I 275 (the OB line has a broken opening word).

### Proposals for the shared renderings
1. **Key terms (§4)**: *šuma šakānu* Gt = `שָׂם (לו) שֵׁם` (160, 188; ↔ Gen 11:4, 2 Sam 7:23, Deut 12:5) and **šuma šuzuzzu (*izuzzu* Š) = `הֶעֱמִיד שֵׁם`** (148; ↔ 2 Sam 18:18, Deut 25:7) – two verbs, two Hebrew words; *darû* (stative verb) = `נִצְחִי` (with *dārû*); *dāriš* = `לָעַד` (vocalized); *ṣiāḫu* = `צָחַק` [cognate] (Gen 17:17, 18:12); *ernittu* = `מִשְׁאָלָה` (open decision 4; keeps נצח for *dārû*); *nawû* D = `שׁוֹמֵם`; *šatû* III (*tuqumtam šatû*) = `אָרַג תִּגְרָה`; *rūʾūtu* = `עֲמִיתוּת` (open decision 6); *kasāmu* = `קִצֵּץ` (cedars; *nakāsu* = `כרת`, *ḫaṣābu* = `גדע`); *naqû* = `נִסֵּךְ` (beside *nīqu* = `זֶבַח`).
2. **Names (§1)**: Wēr = `וֵר` (always vocalized; a form of Adad); Anšan = `אַנְשָׁן`, *anšanû* = `אַנְשָׁנִי`; add to §7 "always vocalize": `וֵר`, `אֵלְךָ`, `אֵלִי` (*ilka*, *ilī*), `לָעַד`, `הֲשִׁיבֵנִי`, `יַרְאוּךָ`, `הִילְּלוּ`.
3. **Ordinary words (§5)**: *ḫašāḫu* = `חָשַׁק`; *nâdu* D = `הִלֵּל`; *tabbītu* = `יְבָבָה`; *dâdānū* = `מֵיתְרֵי צַוָּאר`; *anāḫu* Št = `נֶאֱנַח`; *enēšu* = `חָלַשׁ`; *galātu* D = `הִבְהִיל`; *danānu* (noun) = `חוֹזֶק`; *qarrādūtu* = `גְּבוּרָה`; *mešēltu* (dagger) = `לַהַב` (VIII `מַשְׁחֶזֶת`: one lemma, two senses – coordinator's choice); *ṣipru* = `חוֹד`; *iḫzu* = `מִשְׁבֶּצֶת`; *têrtu* = `הַנְחָיָה`; *šibqū* = `תַּחְבּוּלוֹת`; *padānu* = `מִשְׁעוֹל`; *peḫû* = `חָסוּם`; *ṣamāru* = `שָׁאַף`; *nawāru* D stat. = `מוּאָר`; *šalāmu* G + ventive = `בָּא בְּשָׁלוֹם`; *šemû* Š = `הִשְׁמִיעַ`; *maḫāru* "stand against" (verbal noun / with weapons) = `עָמַד מוּל`, *māḫiru* = `מִתְמוֹדֵד` (open decision 5).
4. **Formula (§2)**: OB `X פתח את פיו,` / `ודיבר אל Y:` and the one-line `X פתח את פיו, ודיבר אל Y:` confirmed for the masculine (as OB II 147–148, 94–95); *siqra turru* = `מאמר השיב`.
5. **verify.py**: no change needed; eBL's "=" links of 108/109/137/215 to SB II (decision 12) could be added to a list of known false links.

### Lessons for the guidelines
- **A per-run brief can misquote the key line**: the "*šumī lultakan*" of the prompt does not exist in OB III; the tablet has *šumī lū ušzīz* (148, *izuzzu* Š) and *šuma … luštaknam* (160, 188, *šakānu* Gt). Check every key-case quotation against the edition before building a parallel on it; here the difference itself is a finding (a name "set up" like a stele vs a name "placed").
- **eBL's "=" between an OB and an SB line can join lines that share only a frame** (108 *nummât* vs SB *išemmē-ma … rimmāt*; 109 *libbīša* vs *qištīšu*): compare the normalizations word by word before copying a fixed passage.
- **The tense of a rhetorical question carries the parallel**: *mannu … ēlû* (preterite + subjunctive) is "who went up", exactly Prov 30:4 `מִי עָלָה שָׁמַיִם`; the modal English ("can climb") hides it.

## Tablet OB-Schoyen2

### Scope
OB Schøyen₂ (MS 3025, Schøyen Collection; eBL BabaOB1; provenance unknown, Babylonia), all 94 eBL labels (1a–84; tablet lines with two verses split a/b): obv. 1a–45 (Gilgameš lies down and asks the night for a dream; dream 1: the mountain that collapsed on him and the shining man who pulled him out; Enkidu's interpretation "the one you saw was King Šamaš; in days of distress he will take your hand"; the march to the land of Ebla; Gilgameš on the hill; the sleep "that spills over people"; dream 2: Adad cries out, lightning, "death was raining down", the god comes forth), lower edge 46–48, rev. 49–84 (Enkidu's interpretation "your dreams are favourable, a god is ⟨with⟩ you"; the march to Ḫamran, the mountain of the Amorite; they hear Ḫuwawa's voice daily; "the guardian of the cedar who turns back every breast"; the cedar's auras "covering the uplands"; Enkidu's terror and Gilgameš's "do not fear, Enkidu, protect me!"; the night camp; catch-line "my friend, I have seen a third (dream)!"). Single manuscript, almost complete; damaged: 1b, 9–10, 43–51, 53–60a, 78–81.

### Sources consulted
- eBL `L/1/4` OB Schøyen₂ (`../../sources/eBL/Gilgamesh-OB-Schoeyen2/reading-edition.md`: N, T, L, all notes – George 2003 (RN117) and the revised readings after cleaning (RN127), with Khait and Nurullin 2006 –, parallels, ATF; `glossary.md` for stems).
- SEAL 1532 (`../../sources/SEAL/Gilgamesh-OB/node-1532--Gilg-OB-Schoyen2.md`): the old (2003) transliteration, lemmas and translation; used as a record of the readings eBL has revised (1b, 6, 9, 18, 38, 42, 52, 58, 61–62, 69–74, 78–81, 83).
- `python3 -I parallels_for.py OB-Schoyen2 --all` (55 lines with parallels); `../renderings.md` incl. §9–§20 (the IV incubation cycle, §20, binding); the SB IV section of `../1-הנוסח-הבבלי-התקני/project.md` and `annotated-IV.rtl.md` (1–33, 84–109, 155–162, b+1′–b+7′, 210–219); OB II and OB III annotated files (formulas, 104–105, 77–78, 165–166); SB II 191.
- George's translation (eBL T) after drafting; Tchernichovsky 1924 (ll. 1610–1735, his "Tablet V" = SB IV) after pass (c).
- The vocalized Bible through `../../tools/check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `S2.txt` + `gen.py`): eBL's N and George's T are inserted by script; the annotated `>` lines and the clean translation are identical by construction (`gen.py` serves all six tablets of this run).
2. **The IV cycle (§20) copied where the Akkadian is identical, changed exactly where it differs**: 30 = IV 93 `השינה הניתכת על האנשים – עליו נפלה.` (OB *imqussu* "fell on him" for SB *elīšu imqut*: same sense, same Hebrew); 29 `על כרעיו סמך את סנטרו,` (no name: IV 92 has *gilgāmeš*); 2 = 31 `באמצע (הלילה) הבהילה אותו שנתו,` (OB *ugallissu* "his sleep startled him", *galātu* D = `הבהיל` §19, for SB *uqatti* `כילה`); 3 = 32 `קם, שָׂח אל רֵעֵהוּ:` (no *-ma*, so no `ו`); 4a `רֵעִי, ראיתי חלום!`, 33a / 84 `ראיתי (חלום) שני / שלישי!` (OB has no *šuttu*: `(חלום)`); 34 `צעק אֲדַד, הארץ רועשת,` (IV 101: the heavens, the ground); 35 `היום חָבַשׁ (את ראשו)` (*apāru* = `חבש`, VI; IV 102 *ušḫarrir* `קפא`); 36 = IV 103; 37 G for SB Gtn (no `פעם אחר פעם`); 40–41 the OB words (*adī-ma kīam-ma*, *šuppūtum*, plural *itūrū laʾmiš* `נהפכו לאודים`).
3. **The dream verbs**: *šittu* = `שֵׁנָה` (2, 30, 31, 83; never `תַּרְדֵּמָה` – Job 4:13 and Gen 15:12 only in the apparatus); *šuttu* = `חֲלוֹם`; ***pašāru* = `פּוֹשֵׁר`** (13a, 44a, 83) – this OB tablet has the cognate of `פֵּשֶׁר` where SB IV has *šumḫuru* (`מרצה לו את חלומו`); 83 *ipaššaršum* "revealed (the dream) to him" is `פושר לו` with the note of §2 (sense "tell"). *šasû* = `צָעַק` (34, 45). *dekû* = `הֵעִיר` (4b, 83): the OB waking question is the reverse of IV 18 – "why did you **not** rouse me?" – noted against 1 Sam 3:5.
4. **83 follows the manuscript, not eBL's N**: N prints *šuttašu*, the ATF has *ši-it-ta-šu* (= *šittašu*), and George's own note parses it as the subject ("his sleep roused him"): `העירה אותו שנתו, ופושר לו:`. Likewise 31's eBL note "his dream startled him" is a slip for "his sleep".
5. **38 *ennešu* = `נבוכותי`** (*ešû* N "be confused", George's revised reading); eBL's lemma *enēšu* "be weak" belongs to the old reading `en-ni-iš₇` (SEAL "I grew ever weaker"): lemma slip recorded. `נבוך` is new (IV left it as the rejected alternative for *šāšû* `מבולבל`, so the two lemmas stay apart).
6. **The guardian lines**: 58, 60a *maṣṣar erēnim* = `נוצר הארז` (*maṣṣaru* = `נוֹצֵר`, never `שׁוֹמֵר`; the singular "cedar" as in the Akkadian, not §3.1's *nāṣir qišti erēni* `נוצר יער הארזים`); 59 = 60b *ša utarru kalīšina irātim* = `אשר משיב את כולן, את החזות` – the bodily image kept (George "repels every advance"), with *târu* D = `השיב` (the root שוב only for *târu*); 71 *mannum-ma ilam šâti igerrēšu* = `מי זה – האל ההוא – יתגרה בו,` and 72 `בָּאִיגִיגִי`, following §3.1 `מִי זֶה יִתְגָּרֶה בּוֹ בָּאִיגִיגִי?`; 73 *{d}hu* (eBL N *humbāba*) = `חוווה` (the OB name; the sign is the abbreviation of *{d}hu-wa-wa*, 16a).
7. **The auras (*melemmū* = `זְהָרִים`)**: 62, 70 `[זהריו] / זהריו מכסים את הרמות` – the auras belong to the cedar (*-šu* on *erēnu*), not to Ḫuwawa: the forest itself radiates terror; *katāmu* = `כסה` (§17).
8. **New words** (all grepped against every earlier `>` line; none in use for another lemma): *qâpu* = `קָרַס`; *seʾû* = `דָּחַק`; *lawû* = `סובב` (= XII *lamû*); *šalummatu* = `הוֹד` (zohar, nogah, bohaq, qeren are taken); *dannatu* = `מְצוּקָה` (`צרה` is *pašqu*, X); *parṣu* = `פֻּלְחָן` (creation corpus); *šipirtu* = `שְׁלִיחוּת` (`מלאכה` = *šipru*); *ešû* N = `נָבוֹךְ`; *laʾmu* = `אוּד` (Isa 7:4; `רמץ` = *tumru*, `גחלים` = *pēmtu*); *didallu* = `אֵפֶר`; *lēʾûtu* = `יְכוֹלֶת`; *mālaku* = `מַהֲלָךְ` (X 171); *ūmakkal* = `יום אחד`; *epēšu* Š (81) = `חולל` (`אחוללה`; `אעשה` would hide the Š; `עורר` is the root of *dekû* `הֵעִיר`); *raḫāṣu* I "rush" (54) = `שטף` (see proposal 3).
9. **Names**: Ḫuwawa `חוּוָוה` (16a), Adad `אֲדַד` (34), Ebla `אֶבְלָה` (26; not biblical, transliterated), Ḫamran `חַמְרָן` (55), Igigi `בָּאִיגִיגִי` (72), and **Amurru = `הָאֱמוֹרִי`** (56; the biblical people, guidelines §6.4.6, plene with niqqud) – which makes Deut 1:7 `הַר הָאֱמֹרִי … וְהַלְּבָנוֹן` visible; `גִּילְגָּמֶשׁ` (1a, with yod, §20), `אֶנְקִידוּ` (13a); `שַׁמַשׁ`, `רֵעִי`, `רֵעֵהוּ`, `שָׂח`, `אֵל`, `הָבֵא`, `אַל` vocalized every time.
10. **Readings recorded where eBL and SEAL differ** (eBL followed): 1b imperative *bila* "O night, bring!" (SEAL *ublaššu* "brought him"); 6 *iseʾʾânni* (SEAL *īsiḫanni* "girt me"); 9 *lābiš [iṭḫ]eam* (SEAL *labiš [pal]âm* "clad in a royal mantle"); 18 *parṣam ša mutim šipirti zikari* (SEAL "the one of death came forth"); 42 *ilum* (SEAL Šamaš); 52 *it⟨tī⟩ka* (SEAL *idka* "your arm"); 58 *iṭṭuššunūti* "watched them" (SEAL *īdēšu-ma* "knew him"); 62 *melemmāšu* (SEAL *šurmēni* "cypresses"); 72, 74 *ina igīgī*, *ina kibrātim* (SEAL *ina qātīšu* "in his hand").
11. **eBL lemma slips recorded**: 28 *ittanaplas* lemmatized *naplāsu* (noun; it is *palāsu* N Gtn); 29 *zuqassu* as *suqtu* (as in IV); 38 (decision 5); 83 N *šuttašu* (decision 4); 84 *šaluštam* as *šalāš* "three" (it is *šalšu* "third").

### Open decisions for the user
1. ***dumqu* "beauty" (10)** = `חסד` (binding §10; Isa 40:6 `וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה` tagged) or the open alternative `נוֹי` (`ובנוי – [נאה?]`), which a reader understands at once?
2. ***šalummatu* = `הוֹד`** (8) – a new corpus word (Ps 21:6 `הוֹד וְהָדָר`): acceptable, or a neutral `זיו` (but *zīmu* = `זיו`, §3.2)?
3. ***emūqu* as a body part (11) = `זרועותיי`** (George "upper arm"), the same Hebrew as *aḫu* in 8 – or the literal `כוחותיי` (keeps one lemma one word, but is opaque in Hebrew)?
4. ***kašādu* + abstract object (53) = `תשיג`** (*kašāru* is `השיג`, §12) or the corpus's `תגיע אל תחבולותיך` (one Hebrew word for *kašādu*)?
5. ***raḫāṣu* I (54) = `שטפו`** ("they rushed like a flood") against VII's `רמס` for the same lemma ("devastate") – a sense split, or force `רמסו`?
6. **81 *lušēpiš* = `אחוללה`** (Š "have it done"; `חולל` also renders the idiom *šakānu abūba* in flood XI) or `אעשה` (simpler, hides the Š)?
7. **1b `"חלום, לילה, הָבֵא(?)!"`** – the order of the Akkadian (dream first) kept; `"לילה, הָבֵא חלום!"` reads more easily.

### Progress log
- 2026-10-18: read the brief, the whole guidelines, corpus.md, renderings.md (incl. §9–§20), both project files with the IV, OB II and OB III sections, the format models and annotated-OB-III / annotated-IV; ran `parallels_for.py OB-Schoyen2 --all` (55 lines); read the whole eBL edition (N, T, L, all notes, ATF) and SEAL 1532.
- Drafted all 94 entries in seven sections into one data file and generated `annotated-OB-Schoyen2.rtl.md` and `translation-OB-Schoyen2.rtl.md` (Hebrew introduction, 5 footnotes: 22, 30, 52, 58, 62).
- Pass (a) fidelity: every `>` line against N and the ATF (brackets by the signs: 9 `[ניגש]`, 16b `[הלא]`, 44a–44b, 57 `[יום]`, 60a, 61, 63 `[כ]כרות`, 64 `ב[אה חר]דה`, 65a `נ[שא]`, 74, 78, 81; 36 and 41 unbracketed although IV brackets them – only one sign broken here); 14 `זה` → `(זה)` (an addition); 83 corrected to the ATF (*šittašu*).
- Pass (b) consistency: the §20 strings and OB II 104–105, OB III 77–78, SB II 191 compared by `verify.py` (below); speech formulas (13b = 44b = 68b; 65b = 77b; 68a, 77a as OB III); reserved strings grepped in the plain `>` lines: `שׂים` only *šakānu* (51), `ידע` only *edû* (39, 81), שוב only *târu* (59, 60b `משיב`; 41 `נהפכו` for *târu* + ‑iš), no `שמר`, `תרדמה`, `קרא`, `פתר`, `טוב`, `עולם`, `אלוהים`, `עפר`, `טיט`, `עשב`, `עץ`, `נחש`, `לקח`; every new string grepped against all earlier `>` lines (`הוד` occurred only inside `הודיעה`; `קרס` only inside `קרסולו`; `אפר` only inside `אפרוח`, `ואפרוט`).
- Pass (c) Hebrew: read aloud; kept the literal `זרועותיי – הוד חזק עליהן`, `אשר משיב את כולן, את החזות`, `מלון – נמו, שכבו`. Tchernichovsky 1924 has no Schøyen text (published 2003); his SB-IV dream passage imports `וְתַרְדֵּמָה נָפְלָה` (Gen 15:12), `בַּחֲצִי הַלַּיְלָה נָדְדָה שְׁנָתוֹ` (Esth 6:1), `הַאַתָּה קָרָאתָ לִי` (1 Sam 3), `טוֹב הַחֲלוֹם … וְזֶה פִּתְרוֹנוֹ` (Gen 40:12, 16), `הָיָה לְעָפָר מִן הָאֲדָמָה` (Gen 2:7) and `וַיַּשְׁכֵּם` – none in the Akkadian; nothing changed in ours.
- `python3 -I verify.py OB-Schoyen2`: 94 entries = eBL 94, 94 translation lines, **problems: 0**; 39 differences in repeated lines (all justified below), 8 in brackets/marks only. `check_bible_quotes.py` on both files: 0 problems (5 first-draft mismatches fixed: Gen 46:2, Job 4:13 reference, 1 Kgs 18:42 `בִּרְכָּו`, Joel 1:18, Gen 21:14).

### Parallels index (Tablet OB-Schoyen2)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a, 82 | sakip nīl; nubattam iskipū inīlū | נָם, שוכב; מלון – נמו, שכבו | `וַיָּלֶן שָׁם כִּי בָא הַשֶּׁמֶשׁ … וַיִּשְׁכַּב בַּמָּקוֹם הַהוּא` (בראשית כח:יא) | [equivalent] | **Key.** The traveller lies down for the night on the way and dreams (Gen 28:12); the tablet opens and closes with the same two verbs. |
| 1b | šunatam mušiyatum bila | חלום, לילה, הָבֵא(?)! | `וַיֵּרָא אֵלָיו יְהוָה בַּלַּיְלָה הַהוּא` (בראשית כו:כד); `בְּמַרְאֹת הַלַּיְלָה` (בראשית מו:ב) | [equivalent] | The dream asked for (incubation); SB IV 87 asks the mountain. Reading as imperative is Khait–Nurullin/George (SEAL: "the night brought him"). |
| 2, 31 | ina qablītim šittašu ugallissu | באמצע (הלילה) הבהילה אותו שנתו | `וַתִּתְפָּעֶם רוּחוֹ וּשְׁנָתוֹ נִהְיְתָה עָלָיו` (דניאל ב:א); `וַתִּפָּעֶם רוּחוֹ` (בראשית מא:ח) | [equivalent] | The dreamer startled out of sleep at midnight. |
| 2, 31 | šittašu | שנתו | `וַיִּיקַץ יַעֲקֹב מִשְּׁנָתוֹ` (בראשית כח:טז) | [divergence] | *šittu* = `שינה` (never `תרדמה`); Jacob wakes in the morning, Gilgameš at midnight. |
| 3, 13a | itbe ītawwâ ana ibrīšu; enkīdu šuttam ipaššar | קם, שָׂח אל רֵעֵהוּ; אנקידו פושר חלום | `וְהִנֵּה אִישׁ מְסַפֵּר לְרֵעֵהוּ חֲלוֹם` (שופטים ז:יג); `וַיַּעַן רֵעֵהוּ וַיֹּאמֶר אֵין זֹאת בִּלְתִּי אִם חֶרֶב גִּדְעוֹן` (שופטים ז:יד) | [equivalent] | **Key.** A dream told to a friend on the eve of battle and interpreted by the friend as victory. |
| 13a, 44a, 83 | šuttam ipaššar | פושר חלום | `וּמִי יוֹדֵעַ פֵּשֶׁר דָּבָר` (קהלת ח:א) | [cognate] | *pašāru* / פשר; the OB tablet has it where SB IV has *šumḫuru*. |
| 13a, 44a | šuttam ipaššar | פושר חלום | `וּפֹתֵר אֵין אֹתוֹ` (בראשית מ:ח) | [equivalent] | Joseph's `פֹּתֵר`; `פתר` is not used in the Hebrew. |
| 4b | ammīnim lā tedkianni | למה לא העירותני? | `הִנְנִי כִּי קָרָאתָ לִּי` (שמואל א ג:ה) | [divergence] | SB IV 18 asks "did you not call me?" (as Samuel to Eli); the OB asks the reverse: why did you **not** rouse me. |
| 4b, 33b | mādiš palḫat; eli šuttim … palḫat | מאוד מפחיד (היה); מפחיד (הוא) יותר | `פַּחַד קְרָאַנִי וּרְעָדָה` (איוב ד:יד) | [equivalent] | The terror of the night vision. |
| 7, 20 | birkīya iltawi lūtum; ulawwa puluḫtašu birkīka | את ברכיי סובב רפיון; אימתו תסובב את ברכיך | `וּבִרְכַּיִם כֹּשְׁלוֹת אַמֵּצוּ` (ישעיהו לה:ג) | [equivalent] | Weak knees; *luʾtu* = `רפיון` of §3.1 (the feebleness that seizes whoever enters the forest). |
| 8 | šalummatum | הוד | `הוֹד וְהָדָר תְּשַׁוֶּה עָלָיו` (תהלים כא:ו) | [equivalent] | Divine/royal radiance; new word (open decision 2). |
| 10 | dumqam-ma | ובחסד | `וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה` (ישעיהו מ:ו) | [equivalent] | `חסד` = "beauty" (binding *dumqu* = חסד; open decision 1). |
| 12, 22 | ištalpanni; iṣabbat qātka | שלף אותי; יאחז בידך | `יִשְׁלַח מִמָּרוֹם יִקָּחֵנִי יַמְשֵׁנִי מִמַּיִם רַבִּים` (שמואל ב כב:יז) | [equivalent] | The god pulls the hero out from under the mountain. |
| 15 | nukkur mimma | מנוכר הוא בכל | `וַיִּתְנַכֵּר אֲלֵיהֶם` (בראשית מב:ז) | [cognate] | *nakāru* / נכר (as IV 215). |
| 18 | šipirti zikari | שליחות של זכר | `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז) | [cognate] | *zikaru* / `זָכָר`; here "the task of a male" = single combat. Rests on George's revised reading (SEAL reads otherwise). |
| 21 | u ša tāmurūšu šamaš-ma šarru | ואשר ראית אותו – שַׁמַשׁ הוא, המלך | `וְהִנֵּה הַשֶּׁמֶשׁ וְהַיָּרֵחַ וְאַחַד עָשָׂר כּוֹכָבִים מִשְׁתַּחֲוִים לִי` (בראשית לז:ט) | [divergence] | The sun in a dream: in Joseph's, his father; here the god who rescues. |
| 21 | šamaš-ma šarru | שַׁמַשׁ הוא, המלך | `כִּי שֶׁמֶשׁ וּמָגֵן יְהוָה אֱלֹהִים` (תהלים פד:יב) | [equivalent] | The sun as protector. |
| 22 | ina ūmī ša dannatim iṣabbat qātka | בימי מצוקה יאחז בידך | `לָאֵל הָעֹנֶה אֹתִי בְּיוֹם צָרָתִי וַיְהִי עִמָּדִי בַּדֶּרֶךְ אֲשֶׁר הָלָכְתִּי` (בראשית לה:ג) | [equivalent] | **Key.** The god who helps "in the day of distress" and is with the traveller on the road (Bethel). |
| 22 | iṣabbat qātka | יאחז בידך | `וְאַחְזֵק בְּיָדֶךָ` (ישעיהו מב:ו); `אָחַזְתָּ בְּיַד-יְמִינִי` (תהלים עג:כג) | [equivalent] | The god takes the hand. |
| 24 | īliṣ libbašū-ma pānūšu ittamrū | עלץ לבו, ופניו האירו | `עָלַץ לִבִּי בַּיהוָה` (שמואל א ב:א); `יָאֵר יְהוָה פָּנָיו אֵלֶיךָ` (במדבר ו:כה) | [equivalent] | = OB II 104–105. |
| 26, 56 | ana māt-ibla; [ša]d amurrum wašbu | אל ארץ אֶבְלָה; [הר] (אשר) הָאֱמוֹרִי יושב (בו) | `וּבֹאוּ הַר הָאֱמֹרִי … וְהַלְּבָנוֹן עַד הַנָּהָר הַגָּדֹל נְהַר פְּרָת` (דברים א:ז) | [cognate] | **Key.** *Amurru* = `הָאֱמֹרִי`; the road from the Euphrates to the Lebanon passes "the mountain of the Amorite" in both. `[הר]` is restored (or *[mā]t* "land"). |
| 56 | amurrum | הָאֱמוֹרִי | `כִּי לֹא שָׁלֵם עֲוֹן הָאֱמֹרִי עַד הֵנָּה` (בראשית טו:טז) | [cognate] | The name. |
| 27 | īlī-ma gilgāmeš ana ṣēr šadîm | עלה גילגמש על גב ההר | `וַיַּעַל מֹשֶׁה אֶל הָהָר` (שמות כד:טו) | [equivalent] | Ascent before the revelation (dream 2: storm on the mountain). |
| 29 | ina kimṣīšu ummidam zuqassu | על כרעיו סמך את סנטרו | `וַיִּגְהַר אַרְצָה וַיָּשֶׂם פָּנָיו בֵּין בִּרְכָּו` (מלכים א יח:מב) | [equivalent] | The incubation posture; Elijah awaits a sign from heaven. |
| 30 | šittum rāḫiat nišī imqussu | השינה הניתכת על האנשים – עליו נפלה | `בִּנְפֹל תַּרְדֵּמָה עַל-אֲנָשִׁים` (איוב ד:יג) | [equivalent] | **Key.** The same phrase: sleep "falling on people" in a night vision. Hebrew `שינה` (*šittu*), not `תרדמה`. |
| 30 | imqussu | עליו נפלה | `וְתַרְדֵּמָה נָפְלָה עַל אַבְרָם` (בראשית טו:יב) | [equivalent] | Sleep that "falls on" the man before the vision; *maqātu* = `נפל`. |
| 33a | ibrī ātamar šanītam | ראיתי (חלום) שני | `וַיִּישָׁן וַיַּחֲלֹם שֵׁנִית` (בראשית מא:ה); `וַיַּחֲלֹם עוֹד חֲלוֹם אַחֵר` (בראשית לז:ט) | [equivalent] | A second dream after the first. |
| 34–37 | issi adad; [i]briq birqum; innapiḫ išātum | צעק אדד; בָּרַק בָּרָק; נִפְּחָה אש | `וַיְהִי קֹלֹת וּבְרָקִים וְעָנָן כָּבֵד עַל הָהָר` (שמות יט:טז) | [equivalent] | Storm theophany on a mountain: voice, lightning, fire. |
| 36 | [i]briq birqum | בָּרַק בָּרָק | `בְּרוֹק בָּרָק וּתְפִיצֵם` (תהלים קמד:ו) | [cognate] | The same figura etymologica. |
| 36 | innapiḫ | נִפְּחָה | `וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים` (בראשית ב:ז) | [cognate] | *napāḫu* / `נפח`, here of kindling fire. |
| 37 | izannun mūtum | נִמְטָר מוות | `וַיהוָה הִמְטִיר עַל סְדֹם וְעַל עֲמֹרָה גָּפְרִית וָאֵשׁ` (בראשית יט:כד) | [equivalent] | Death/fire raining from the sky. |
| 41 | itūrū laʾmiš | נהפכו לאודים | `כִּי עָפָר אַתָּה וְאֶל עָפָר תָּשׁוּב` (בראשית ג:יט) | [divergence] | *târu* + ‑iš "turn into"; `נהפך` (§20), the root שוב not used. |
| 41 | laʾmiš | לאודים | `מִשְּׁנֵי זַנְבוֹת הָאוּדִים הָעֲשֵׁנִים הָאֵלֶּה` (ישעיהו ז:ד) | [equivalent] | Smouldering firebrands. |
| 42 | ilum ittaṣi | הָאֵל יצא | `יְהוָה מִסִּינַי בָּא וְזָרַח מִשֵּׂעִיר לָמוֹ` (דברים לג:ב); `יְהוָה בְּצֵאתְךָ מִשֵּׂעִיר` (שופטים ה:ד) | [equivalent] | The god "comes forth" like the sunrise after the storm. eBL *ilum* (SEAL: Šamaš). |
| 48 | inawwirā īnāka | ותאורנה עיניך | `רְאוּ נָא כִּי אֹרוּ עֵינַי` (שמואל א יד:כט) | [equivalent] | Eyes that "brighten" after fear and fatigue. |
| 51 | tašakkanam ana didallī | תשׂים לאפר | `וָאוֹצִא אֵשׁ מִתּוֹכְךָ הִיא אֲכָלַתְךָ וָאֶתֶּנְךָ לְאֵפֶר עַל הָאָרֶץ` (יחזקאל כח:יח) | [equivalent] | Fire that turns into ashes – in Ezekiel the fate of the "cherub" in "Eden, the garden of God" (28:13–14). |
| 52 | damqā šunātūka ilum it⟨tī⟩ka | נאים חלומותיך, אֵל ⟨עמך⟩ | `וְהִנֵּה אָנֹכִי עִמָּךְ וּשְׁמַרְתִּיךָ בְּכֹל אֲשֶׁר תֵּלֵךְ` (בראשית כח:טו) | [equivalent] | **Key.** The dream on the road means "God is with you"; rests on George's emendation *it⟨tī⟩ka* (SEAL *idka* "your arm"). |
| 52 | ilum it⟨tī⟩ka | אֵל ⟨עמך⟩ | `אֱלֹהִים עִמְּךָ בְּכֹל אֲשֶׁר אַתָּה עֹשֶׂה` (בראשית כא:כב) | [equivalent] | Same formula; *ilu* = `אל` (never `אלוהים`). |
| 57 | ūmišam ištenemmû rigim ḫuwāwa | [יום] יום שומעים (הם) את קול חוווה | `וַיִּשְׁמְעוּ אֶת קוֹל יְהוָה אֱלֹהִים מִתְהַלֵּךְ בַּגָּן` (בראשית ג:ח) | [equivalent] | **Key.** The voice heard from the forest/garden; in Genesis the hearers hide (3:8b), here Enkidu blanches (63–64). |
| 57 | rigim ḫuwāwa | קול חוווה | `שׁוֹמֵעַ הוּא לְשִׁשִּׁים בֵּרוּ אֶת הֶמְיַת הַיַּעַר` (§3.1, SB II 222) | [divergence] | In the fixed passage the guardian hears the intruders; here they hear him. (Intra-corpus.) |
| 58, 60a | maṣṣar erēnim | נוצר הארז | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | **Key.** The guardian of the gods' place; *maṣṣaru* = `נוֹצֵר`, never `שׁוֹמֵר`; here he "watches them" (*iṭṭuššunūti*, revised reading; SEAL "knew him"). |
| 59, 60b | ša utarru kalīšina irātim | אשר משיב את כולן, את החזות | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [divergence] | The sword "turns every way" to keep off; the guardian "turns back every breast". *târu* D = `השיב`. |
| 61, 69 | išši īnīšu ītamar erēnam; aššī-ma īnīya ātamar | נשא את עיניו, ראה את הארז; נשאתי … את עיניי, וראיתי | `וַיִּשָּׂא אַבְרָהָם אֶת עֵינָיו וַיַּרְא וְהִנֵּה אַיִל` (בראשית כב:יג); `וָאֶשָּׂא עֵינַי וָאֵרֶא בַּחֲלוֹם` (בראשית לא:י) | [cognate] | *īnā našû* / `נשא עיניים` + "see". 61 has the verb restored. |
| 62, 70 | melemmāšu katim ḫursānī | זהריו מכסים את הרמות | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [equivalent] | **Key.** The aura (*melemmū* = `זְהָרִים`) at the forest; here it belongs to the cedar itself. 62 restored from 70. |
| 62, 70 | melemmāšu katim | זהריו מכסים | `כִּסָּה שָׁמַיִם הוֹדוֹ` (חבקוק ג:ג) | [equivalent] | A radiance that "covers"; *katāmu* = `כסה`. |
| 62, 70 | katim ḫursānī (of the cedar) | מכסים את הרמות | `כָּסּוּ הָרִים צִלָּהּ; וַעֲנָפֶיהָ אַרְזֵי-אֵל` (תהלים פ:יא) | [equivalent] | Mountains covered by the tree; "cedars of God". |
| 63, 66, 75 | īriqū pānūšu | הוריקו פניו | `וְנֶהֶפְכוּ כָל פָּנִים לְיֵרָקוֹן` (ירמיהו ל:ו) | [cognate] | *arāqu* / ירק: faces turning pale-green with fear. |
| 65a | gilgāmeš itbalam pānīšu | גילגמש נ[שא] את פניו | `הִנֵּה נָשָׂאתִי פָנֶיךָ` (בראשית יט:כא); `אוּלַי יִשָּׂא פָנָי` (בראשית לב:כא) | [equivalent] | "Bear the face" = take pity (*wabālu* Gt; OB III 77). |
| 71–74 | mannum-ma ilam šâti igerrēšu … ina igīgī | מי זה – האל ההוא – יתגרה בו … בָּאִיגִיגִי | `מִי כָמֹכָה בָּאֵלִם יְהוָה` (שמות טו:יא) | [equivalent] | The rhetorical "who?" before an invincible god; Ḫuwawa called "god". |
| 79 | [al]lak-mî it[tī]ka | '[אל]ך עמך' | `כִּי יְהוָה אֱלֹהֶיךָ הוּא הַהֹלֵךְ עִמָּךְ` (דברים לא:ו); `וְהִנֵּה אָנֹכִי עִמָּךְ` (בראשית כח:טו) | [equivalent] | The god who goes with the hero; reading partly restored, *šamšum?* uncertain. |
| 80 | ē tādur enkīdu uṣur yâti | אַל תחרד, אנקידו, נְצוֹר אותי | `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א) | [equivalent] | "Fear not" – said by the hero to his friend, who is asked to be the guard. |
| 80 | uṣur yâti | נְצוֹר אותי | `לִשְׁמָרְךָ בְּכָל-דְּרָכֶיךָ` (תהלים צא:יא) | [equivalent] | Protection on the road; *naṣāru* = `נצר`, never `שמר`. |

### Lines shared with other tablets
- **SB IV (the §20 cycle)**: 30 = IV 93 (and 15, 48, 135, 176) in letters (marks only); changed exactly where the Akkadian changes (all listed by `verify.py`): 29 ≠ IV 92 etc. (no name, D for Gt); 2/31 ≠ IV 94 etc. (*ugallissu*); 3/32 ≠ IV 95 etc. (no *-ma*); 4a ~ IV 21 (no ordinal); 33a ≠ IV 54/99, 84 ~ IV 99 (no *šuttu*); 33b ~ IV 100 (frightening vs confused); 34 ≠ IV 101; 35 ≠ IV 102; 36 = IV 103 (marks only); 37 ≠ IV 104 (G vs Gtn); 40 ≠ IV 105; 41 ≠ IV 106; 27 ≠ IV 85 etc. (*ana ṣēr* for *ina muḫḫi*); 25/26 ≠ IV 82 (another stage formula); 44a ≠ IV 108 (*pašāru* vs *šumḫuru*); 14–16b ~ IV 215–216 (`מנוכר הוא בכל` copied); 21 ≠ IV b+3′, 22 ≠ IV b+4′ (eBL "=" links lines that share two words).
- **OB II**: 24 = OB II 104–105 (identical). 63/66/75 ~ OB II 165–166 (`הוריקו פניו`).
- **OB III**: 65a = OB III 77, 65b = OB III 78 (brackets only). 78 ~ OB III 191 (*libbu našû*).
- **SB II 191**: 64, 67, 76 (`באה חרדה אל לבי.`; 76 identical in letters with the closing quotation mark; 64, 67 change the suffix).
- **Within the tablet**: 2 = 31; 3 ~ 32; 15 = 16b (brackets); 59 = 60b (final mark); 61 ~ 69; 62 = 70 (brackets); 13b = 44b = 68b; 65b = 77b; 1a ~ 82.
- **For later tablets**: OB Harmal₁ 1a–1b ~ 27–28, 3a ~ 4a, 10–13 ~ 14–22, 16b–17a ~ 17; OB Nippur a+6 ~ 21, 15 ~ 9 – the Harmal₁ and Nippur translators (this run) copy these.

### Proposals for the shared renderings
1. **Key terms (§4)**: *šalummatu* = `הוֹד` (open decision 2); *melemmū* of the cedar (62, 70) added to the *melammu* row and the Gen 3:24 rows, with Hab 3:3 and Ps 80:11; *maṣṣar erēnim* = `נוצר הארז` beside §3.1 *nāṣir qišti erēni*; *ša utarru irātim* = `אשר משיב … את החזות` (↔ Gen 3:24 `הַמִּתְהַפֶּכֶת`); Amurru = `הָאֱמוֹרִי` (Deut 1:7); *šittu … imqussu* = the §20 string (`עליו נפלה`); *pašāru* "tell (a dream)" = `פושר לו` (83).
2. **Names (§1)**: Ebla = `אֶבְלָה`; Ḫamran = `חַמְרָן`; Amurru = `הָאֱמוֹרִי` (always vocalized: unvocalized `האמורי` is fine but `האמרי` defective must not appear).
3. **Ordinary words (§5)**: *qâpu* = `קָרַס`; *seʾû* = `דָּחַק`; *lawû* / *lamû* = `סובב`; *dannatu* = `מְצוּקָה`; *parṣu* = `פֻּלְחָן`; *šipirtu* = `שְׁלִיחוּת`; *ešû* N = `נָבוֹךְ`; *laʾmu* = `אוּד`; *didallu* = `אֵפֶר`; *lēʾûtu* = `יְכוֹלֶת`; *mālaku* = `מַהֲלָךְ`; *ūmakkal* = `יום אחד`; *apāru* = `חבש` (confirmed); *epēšu* Š = `חולל` (open decision 6); *raḫāṣu* I "rush (like a flood)" = `שָׁטַף` beside VII's `רמס` "devastate" (open decision 5).
4. **Formula (§2)**: OB `X פתח את פיו,` / `ודיבר אל Y:` with *izzaqqaram-ma* (68a–68b, 77a–77b) and *šuttam ipaššar* / *izzaqqaram-ma ana* Y = `פושר חלום,` / `ודיבר אל Y:` (13a–13b, 44a–44b).
5. **verify.py**: nothing needed. eBL's "=" of 21/22 to IV b+3′/b+4′ and of 25/26 to IV 82 join lines that share only two words (add to the list of known false links).

### Lessons for the guidelines
- **An eBL normalization can contradict its own manuscript and note** (83 N *šuttašu* "his dream", ATF *ši-it-ta-šu* "his sleep", and George's note parsing "his sleep" as subject; 31's note "his dream startled him"): in dream texts, where *šittu* and *šuttu* differ by one vowel, read the signs before translating either word.
- **An older edition kept beside the current one shows which parallels are new**: SEAL's 2003 readings lack the cedar's auras (62), the guardian who "watches them" (58), "a god is with you" (52) and the "rite of a man" (18); a parallel built on these must say that it rests on the revised reading.

## Tablet OB-Nippur

### Scope
OB Nippur (IM 58451; eBL NipOB1), all 26 eBL labels: obv. 1–19 (the end of Enkidu's interpretation of a lost dream: "my friend, we have come close to the forest, the dreams are near, battle is swift"; Gilgameš will lock horns with Ḫuwawa and force his head down; "the old man you saw is your mighty god, the one who begot you, Lugalbanda"; Gilgameš's fourth dream: an Anzû-bird rising like a cloud, "its mouth fire, its breath death", and a man "strange of form" who seized its wings and cast it down), rev. a+0–a+6 after a gap (Enkidu's interpretation: the Anzû again; "while you fear its splendour, I will raise you up"; "the man you saw was mighty Šamaš"). Single manuscript; 16–19, a+0–a+2 damaged.

### Sources consulted
- eBL `L/1/4` OB Nippur (`../../sources/eBL/Gilgamesh-OB-Nippur/reading-edition.md`: N, T, L, the notes of George 2003 (RN117), ATF).
- SEAL 1530 (`../../sources/SEAL/Gilgamesh-OB/node-1530--Gilg-OB-Nippur.md`): transliteration, lemmas, George's translation (13 *pu!?-lu!?-uḫ-tum-ma* "terror"; 3 as a question).
- `python3 -I parallels_for.py OB-Nippur --all` (10 lines); `../renderings.md` §3.1 (OB III 111–112), §20; the Schøyen₂ section above (the dream formulas, *šalummatu* = `הוד`); SB IV 141, b+3′.
- George's translation (eBL T) after drafting; Tchernichovsky 1924 has no Nippur text (published 1979); the Bible through `check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `NIP.txt` + `gen.py`), as Schøyen₂.
2. **14 = a+3, the §3.1 line in the feminine**: OB III 111–112 / 198 `פיו – אש, ונפשו – מוות.` (*pīšu girrum-ma napīssu mūtum*) → `פיה – אש, נפשה – מוות.` (*pīša girrum napīssa*: feminine suffixes, no *-ma*, so no `ו`). What the guardian passage says of Ḫuwawa is said here of the dream's Anzû – and the Anzû is Ḫuwawa (3–4, a+4–a+6).
3. **7–8 *puršumum … ilka wīrum, bāni qaqqadīka lugalbanda*** = `הישיש אשר ראית – אֵלְךָ הוא, הכביר, / בונה ראשך, לוּגַלְבַּנְדָּה."`: *wīru* read with George as the adjective "mighty" (= *gašru* `כביר`), not the god Wēr (`וֵר`, OB III 131: the forest's guardian); *bāni qaqqadim* "father" (a calque of Sumerian *saĝ-du₃*) kept literally, because its verb is *banû* = `בנה` (the creation verb, renderings §4); *puršumu* = `יָשִׁישׁ` (`זקן` is *šību*).
4. **3 *namrīrī ša ilim*** = `בנגהות האל` (*namrīru* = `נֹגַהּ`, §4, plural `נְגֹהוֹת`): the auras of the guardian, ↔ Gen 3:24; "the god" is Ḫuwawa.
5. **5 *tušabraqšu*** (*barāqu* Š, "batter, destroy", Malku *šubruqu* = *dâku*) = `*תרסקהו*` by sense, in italics, with the root ברק and Ps 144:6 in the apparatus (`תבריקהו` reads "you will make him shine"); *nakāpu* Gt = `התנגח` (as I 30 Gt `מנגח`; V's G `נגף`); *šapālu* D = `השפיל` [cognate].
6. **a+5 *ušetbēka anāku*** = `אקימך אני!` (*tebû* Š = `הקים`; the Anzû "rose", *itbē-ma* `קמה`, 12): the friend who raises his friend (Qoh 4:10).
7. **New words**: *arāḫu* = `מִהֵר` (stative `מהרה`); *šâʾu* = `דָּאָה` (Deut 28:49); *puršumu* = `יָשִׁישׁ`; *binītu* = `בִּנְיָה` (15, singular; creation corpus `בנויים` for the plural "creatures"); *wīru* = `כביר`; *namrīru* pl. = `נְגֹהוֹת`; *erpetu* = `ענן` (as V); *kappu* = `כנף` (as IV, VI).
8. **Names**: Ḫuwawa `חוּוָוה` (4), Anzû `אַנְזוּ` (11, §1), Lugalbanda `לוּגַלְבַּנְדָּה` (8), `שַׁמַשׁ` (a+6), `אֵלְךָ` (7, always vocalized, §19).
9. **a+0** (wholly lost; George restores 11 in the second person) is `"[…]` – not filled.

### Open decisions for the user
1. **5 `*תרסקהו*`** (by sense) or a root-keeping rendering such as `תכה אותו כברק` (adds "like lightning")?
2. **8 `בונה ראשך`** (literal; *banû* visible) or the meaning `מולידך` / `אביך` (George "the one who begot you")?
3. **7 *wīru* = `הכביר`** (George's adjective) or the older reading `וֵר` (the god Wēr), which would make Gilgameš's protector the forest's own guardian (OB III 131)?
4. **10 *etqet eli* = `חולף הוא על`** (keeps *etēqu* = `חלף`) or the idiomatic `עולה הוא על` ("surpasses")?

### Progress log
- 2026-10-18: read eBL OB Nippur (N, T, L, notes, ATF) and SEAL 1530; `parallels_for.py OB-Nippur --all` (10 lines). Drafted 26 entries in three sections; generated both files (introduction; 2 footnotes: 7–8, a+4–a+5).
- Pass (a): every line against N and the ATF; brackets 18 `[לפ]ניי`, a+1 `[קמה כ]ענן, ד[ואה]`; 11 changed from `הסתכלתי – ואנזו בשמים` to `הסתכלתי באַנְזוּ בשמים –` (*palāsu* + accusative).
- Pass (b): 14/a+3 against OB III 111–112 (only the gender and the missing *-ma* differ); 9 against IV 141 and Schøyen₂ 33a/84; a+6 against Schøyen₂ 21 and IV b+3′; reserved strings: `בנה` only *banû* (8, `בונה`), `השליך` only *nadû* (18), no `שׂים`, `ידע`, שוב, `שמר`, `יצר`, `אלוהים`, `תרדמה`; new strings grepped (`ישיש`, `דואה`, `בנייה`, `נגהות`, `תתנגח`, `תשפיל`, `אקימך` – none for another lemma).
- Pass (c): read aloud; kept `בונה ראשך` and `עומד בלילי` literal.
- `python3 -I verify.py OB-Nippur`: 26 = 26, problems 0; 3 differences in repeated lines (14 ≠ OB III 111–112, 198: gender and *-ma*; 13 ≠ a+2: the copy's own break `[…]`). `check_bible_quotes.py`: 0 problems (Exod 4:3 and 1 Sam 2:8 corrected in the first draft).

### Parallels index (Tablet OB-Nippur)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | niqterib qištiš | קרבנו אל היער | `וַיְהִי כַּאֲשֶׁר הִקְרִיב לָבוֹא מִצְרָיְמָה` (בראשית יב:יא) | [cognate] | *qerēbu* / קרב: drawing near to the place of danger. |
| 2 | šunātum qitrubā aruḫ tāḫāzum | חלומות קרבו, מהרה המלחמה | `קָרְבוּ הַיָּמִים וּדְבַר כָּל חָזוֹן` (יחזקאל יב:כג) | [cognate] | **Key.** The dream/vision "has come near" (to fulfilment); *qerēbu* / קרב. |
| 2 | qitrubā … aruḫ | קרבו … מהרה | `כִּי קָרוֹב יוֹם אֵידָם וְחָשׁ עֲתִדֹת לָמוֹ` (דברים לב:לה) | [equivalent] | "Near" and "hastening" in one line. |
| 3 | namrīrī ša ilim | נגהות האל | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [equivalent] | **Key.** The guardian's awe-inspiring auras (*namrīru*; §4 *melammu* row). |
| 3 | namrīrī | נגהות | `וְנֹגַהּ לוֹ סָבִיב` (יחזקאל א:כז) | [equivalent] | Radiance around the divine figure. |
| 5 | tattakkip-ma kīma lēʾim | תתנגח (בו), וכפר | `וְקַרְנֵי רְאֵם קַרְנָיו בָּהֶם עַמִּים יְנַגַּח` (דברים לג:יז) | [equivalent] | The hero as a goring bull. |
| 5 | tušabraqšu | *תרסקהו* | `בְּרוֹק בָּרָק וּתְפִיצֵם` (תהלים קמד:ו) | [cognate] | *barāqu* Š "smite (as lightning)"; the root is hidden in our Hebrew (italics). |
| 6 | rēšīšu tušappal | את ראשו תשפיל | `וּרְאֵה כָל גֵּאֶה וְהַשְׁפִּילֵהוּ` (איוב מ:יא) | [cognate] | *šapālu* / שפל. |
| 6 | rēšīšu tušappal | את ראשו תשפיל | `הוּא יְשׁוּפְךָ רֹאשׁ` (בראשית ג:טו) | [divergence] | The enemy's head brought down; here a bull-wrestler's hold. |
| 7 | puršumum ša tāmuru ilka wīrum | הישיש אשר ראית – אלך הוא, הכביר | `וְעַתִּיק יוֹמִין יְתִב` (דניאל ז:ט) | [equivalent] | **Key.** A god appearing as an old man in a night vision. |
| 7 | ilka | אלך | `וֵאלֹהֵי אָבִי הָיָה עִמָּדִי` (בראשית לא:ה) | [equivalent] | The personal (ancestral) god as protector. |
| 8 | bāni qaqqadīka | בונה ראשך | `וַיִּבֶן יְהוָה אֱלֹהִים אֶת הַצֵּלָע` (בראשית ב:כב) | [cognate] | *banû* / בנה in an idiom for "father" (Sumerian calque). |
| 8 | bāni qaqqadīka lugalbanda | בונה ראשך, לוגלבנדה | `הֲלוֹא הוּא אָבִיךָ קָּנֶךָ הוּא עָשְׂךָ וַיְכֹנְנֶךָ` (דברים לב:ו) | [equivalent] | The god as father and maker. |
| 11–12 | anzâm … itbē-ma kīma erpeti išaʾʾu | אנזו … קמה כענן, דואה | `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר` (דברים כח:מט) | [equivalent] | *šâʾu* / `דאה`: the eagle's flight. |
| 12 | kīma erpeti | כענן | `מִי אֵלֶּה כָּעָב תְּעוּפֶינָה` (ישעיהו ס:ח) | [equivalent] | Flying like a cloud. |
| 11 | anzâm ina šamê | אנזו בשמים | `וַיֵּרֶד הָעַיִט עַל הַפְּגָרִים` (בראשית טו:יא) | [divergence] | A bird of prey in a vision; here the mythical Anzû. |
| 13 | šunnû pānūša | משונים פניה | `וַיְשַׁנּוֹ אֶת טַעְמוֹ` (שמואל א כא:יד) | [cognate] | *šanû* / שנה "change, disfigure". |
| 14, a+3 | pīša girrum napīssa mūtum | פיה – אש, נפשה – מוות | `נַפְשׁוֹ גֶּחָלִים תְּלַהֵט וְלַהַב מִפִּיו יֵצֵא` (איוב מא:יג) | [cognate] | **Key.** The §3.1 line of Ḫuwawa, here of the Anzû; *napīšu* / נפש, fire from the mouth (Leviathan). |
| 14, a+3 | pīša girrum | פיה – אש | `וְאֵת לַהַט הַחֶרֶב` (בראשית ג:כד) | [equivalent] | The fiery guardian. |
| 15 | šani binītam | שׁוֹנֶה בִּנְיָה | `וְהַבִּנְיָה וְקִירוֹתֶיהָ` (יחזקאל מא:יג) | [cognate] | *binītu* from *banû* / בנה. |
| 16 | izzaz ina mušītīya | עומד בלילי | `וְהִנֵּה יְהוָה נִצָּב עָלָיו` (בראשית כח:יג) | [equivalent] | **Key.** The divine figure "standing" in the night dream (Bethel). |
| 16 | izzaz | עומד | `וַיָּבֹא יְהוָה וַיִּתְיַצַּב וַיִּקְרָא כְפַעַם בְּפַעַם` (שמואל א ג:י) | [equivalent] | The figure stands by the sleeper. |
| 18 | ittadīši ina maḫrīya | והשליך אותה לפניי | `וַיַּשְׁלִכֵהוּ אַרְצָה וַיְהִי לְנָחָשׁ` (שמות ד:ג) | [divergence] | Casting down as a sign; *nadû* = `השליך`. `לפניי` partly restored. |
| a+4 | šalummassa tapallaḫam | מהודה פוחד אתה | `וַיִּירָא וַיֹּאמַר מַה נּוֹרָא הַמָּקוֹם הַזֶּה` (בראשית כח:יז) | [equivalent] | Fear of the divine radiance after the dream. |
| a+5 | ušetbēka anāku | אקימך אני | `כִּי אִם יִפֹּלוּ הָאֶחָד יָקִים אֶת חֲבֵרוֹ` (קהלת ד:י) | [equivalent] | **Key.** The friend raises the friend ("two are better than one", 4:9). *tebû* Š = `הקים`. |
| a+6 | eṭlum ša tāmuru šamaš dannu | העלם אשר ראית – שַׁמַשׁ העז | `כִּי שֶׁמֶשׁ וּמָגֵן יְהוָה אֱלֹהִים` (תהלים פד:יב) | [equivalent] | The sun-god as the rescuer in the dream (as Schøyen₂ 21). |

### Lines shared with other tablets
- **OB III / §3.1**: 14 = a+3 ~ OB III 111–112, 198 (`פיו – אש, ונפשו – מוות.` → `פיה – אש, נפשה – מוות.`: gender and the missing *-ma*; `verify.py` lists both).
- **SB IV**: 9 ~ IV 141 (no *šuttu*: `(חלום)`); a+6 ~ IV b+3′ (`העלם אשר ראית`).
- **OB Schøyen₂**: 9 ~ 33a, 84; 15 ~ 9; a+6 ~ 21; 17 ~ 11 (*ṣabātu* + arm); a+4 *šalummatu* = `הוד` (8).
- **Within the tablet**: 12 = a+1 (brackets); 13 ~ a+2 (`…` / `[…] …`: each copy's own break; `verify.py` lists it); 14 = a+3.

### Proposals for the shared renderings
1. **Key terms (§4)**: *namrīru* plural = `נְגֹהוֹת` (3) in the *melammu* row; *bāni qaqqadi* = `בונה ראש` (8; ↔ Gen 2:22, Deut 32:6); the §3.1 line in the feminine (`פיה – אש, נפשה – מוות.`) noted under §3.1 as the Nippur copy.
2. **Names (§1)**: Anzû `אַנְזוּ` (used); Lugalbanda (used).
3. **Ordinary words (§5)**: *arāḫu* = `מִהֵר`; *šâʾu* = `דָּאָה`; *puršumu* = `יָשִׁישׁ`; *binītu* (sg.) = `בִּנְיָה`; *wīru* = `כביר`; *barāqu* Š = `*רסק*` (open decision 1); *tebû* Š = `הֵקִים`.

### Lessons for the guidelines
- **A fixed passage can migrate to another subject**: the guardian's "mouth fire, breath death" (§3.1) describes the dream's Anzû here. A fixed-passage check by string finds such a copy only if the gender and the clitics are allowed to vary; search the normalization of every new tablet for the key words of every fixed passage, not only for eBL's "=" links.

## Tablet OB-Harmal1

### Scope
OB Harmal₁ (IM 52615; eBL ŠadOB1; Tell Harmal = ancient Šaduppûm), all 21 eBL labels: obv. 1a–9b (Enkidu's "go up to the crag of the mountain, look …"; Gilgameš wakes: "I have been robbed of the sleep of the gods!"; the dream: he seized wild bulls of the steppe, one split the ground with its bellowing and its dust "butted the sky", he bent before it; someone pulled him out and gave him water from his waterskin), rev. 10–17b (Enkidu's interpretation: "the god to whom we go – is he not the wild bull?"; "the countenance you saw was shining Šamaš; he will take our hand in hardships"; the one who gave water was "your god who honours your head, Lugalbanda"; "we shall join forces and do one thing, a feat that does not exist in the land"). Single manuscript; 1b, 7–9a damaged.

### Sources consulted
- eBL `L/1/4` OB Harmal₁ (`../../sources/eBL/Gilgamesh-OB-Harmal1/reading-edition.md`: N, T, L, notes of George 2003 (RN117), ATF); SEAL 1526 (George's translation).
- `python3 -I parallels_for.py OB-Harmal1 --all` (10 lines); the Schøyen₂ and Nippur files of this run (the dream formulas, *dannatu* = `מצוקה`, *nukkur mimma*, *ilka … lugalbanda*); OB III 17; `../renderings.md`.
- George's translation after drafting; Tchernichovsky 1924 has no Harmal text (published 1958–1977); the Bible through `check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `H1.txt` + `gen.py`).
2. **2 *šittam ša ilī anāku ekmēku*** = `"שנת האלים – אני, ממני נחטפה!`: *šittu* = `שינה` (never `תרדמה`); *ekēmu* = `חטף` (the root of *ekkēmu* `חוטף`, §10); the double-accusative stative ("I am robbed of the sleep") becomes `ממני נחטפה` with the emphatic `אני` kept. The "sleep of the gods" ↔ `תַּרְדֵּמַת יְהוָה` (1 Sam 26:12) is in the apparatus.
3. **Copies of Schøyen₂ and OB III changed exactly where the Akkadian changes**: 11 `הלא הָרְאֵם הוא? מנוכר הוא בכל!` (Schøyen₂ 15 with "wild bull" for "mountain"); 13 `במצוקות יאחז בידנו.` (Schøyen₂ 22 without "days", "our hand"); 12 `הזיו אשר ראית – שַׁמַשׁ המאיר;` (*zīmū*, Renger's reading; Schøyen₂ 21, Nippur a+6); 10 `"[האל], רֵעִי, אשר אליו אנו הולכים –`; 17b = OB III 17 (`מלאכה אשר איננה ב⟨ארץ⟩."`, the scribe's omission marked; George's "(yet)" not translated – no `טרם`).
4. **16b–17a *nennemmid-ma*** = `ניסמך (זה על זה)` (*emēdu* N "join, lean on each other", OB II `נסמך`), against Schøyen₂ 17 *tennemmidā-ma* = `תיתקלו (זה בזה)` (*emēdu* N in battle, §15): one lemma, two senses by subject (we two vs you and he); `נַעֲשֶׂה` vocalized (§7).
5. **15–16a *ilka mukabbit qaqqadīka lugalbanda*** = `אֵלְךָ, מכבד ראשך, לוּגַלְבַּנְדָּה.` – *kabātu* D = `כִּבֵּד` [cognate], literal with "head", beside Nippur 8 *bāni qaqqadīka* `בונה ראשך` (Ps 3:4 `כְּבוֹדִי וּמֵרִים רֹאשִׁי`).
6. **1a *ana ṣūrim ša šadî*** = `אל צוּר? ההר` – the reading *ṣūrum* (Semitic "rock", Landsberger) kept with a question mark; George also allows a slip for *ṣērim* (Schøyen₂ 27 `גב`); eBL lemmatizes *ṣēru*.
7. **New words** (grepped against every earlier `>` line): *ekēmu* = `חָטַף` (root of §10 `חוטף`); *nemû* = `*שומם*` (italic, George's guess *nawû*); *dalāḫu* = `דָּלַח` [cognate, Ezek 32:2]; *letû* = `פָּלַח` (`בקע` is *ḫepû* D); *usukku* = `לֶסֶת` (`לחי` is *lētu*); *kabātu* D = `כִּבֵּד`; *namru* = `מאיר`. *lapātu* stative = `נגוע` (§10 *lapātu* = `נגע`).
8. **eBL lemma slips**: 4 *ṣērim* lemmatized "back" (it is "steppe", `שדה`); 1a (decision 6).

### Open decisions for the user
1. **2 `"שנת האלים – אני, ממני נחטפה!`** (keeps *anāku* and the root of *ekkēmu*) or the smoother `"נגזלה ממני שנת האלים!`?
2. **1a `צוּר?`** (the cognate reading, ↔ Exod 33:21 `וְנִצַּבְתָּ עַל הַצּוּר`) or `גב` (assuming a scribal slip, as Schøyen₂ 27)?
3. **3b *laptat* = `נגוע`** (literal "touched", the sense "ominous") or `מבשר רעה` (by sense)?
4. **16b–17a `ניסמך (זה על זה)`** vs Schøyen₂ 17 `תיתקלו (זה בזה)` for *emēdu* N – keep the sense split, or one Hebrew verb for both?

### Progress log
- 2026-10-18: read eBL OB Harmal₁ and SEAL 1526; `parallels_for.py OB-Harmal1 --all`. Drafted 21 entries in two sections; generated both files (3 footnotes: 2, 9b, 16b–17b).
- Pass (a): every line against N and the ATF; 8 `או[תי]` → `אותי` (only the suffix is broken); 9b `[השקה]`, 10 `[האל]`; 17b `⟨ארץ⟩` (the scribe's omission).
- Pass (b): 11, 13 against Schøyen₂ 15, 22; 12 against Schøyen₂ 21 and Nippur a+6; 17b against OB III 17 (the final mark aligned to OB III's `."`; George's "!" not followed); vocalization (`הָרְאֵם`, `רְאֵמֵי`, `נַעֲשֶׂה`, `אֵלְךָ`, `שַׁמַשׁ`, `רֵעִי`); reserved strings: none of `תרדמה`, `שׂים`, `ידע`, שוב, `שמר`, `טרם`, `אלוהים`, `עפר`, `טיט`, `עשב`, `עץ`.
- Pass (c): read aloud; kept `אבקו מתנגח בשמים`, `מכבד ראשך`.
- `python3 -I verify.py OB-Harmal1`: 21 = 21, problems 0; 1 marks-only difference (17b / OB III 17: `⟨ ⟩`). `check_bible_quotes.py`: 0 problems.

### Parallels index (Tablet OB-Harmal1)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1a | elī-ma ana ṣūrim ša šadî | עלה אל צוּר? ההר | `וְנִצַּבְתָּ עַל הַצּוּר` (שמות לג:כא) | [cognate] | Ascent to the rock before the divine appearance (33:22 `וְשַׂמְתִּיךָ בְּנִקְרַת הַצּוּר`). Rests on the reading *ṣūrum* (perhaps a slip for *ṣērim* "back"). |
| 2 | šittam ša ilī | שנת האלים | `כִּי תַּרְדֵּמַת יְהוָה נָפְלָה עֲלֵיהֶם` (שמואל א כו:יב) | [equivalent] | **Key.** "The sleep of the gods" ↔ "the deep sleep of the LORD". *šittu* = `שינה`. |
| 2 | šittam ša ilī … ekmēku | שנת האלים … ממני נחטפה | `וַיַּפֵּל יְהוָה אֱלֹהִים תַּרְדֵּמָה עַל הָאָדָם וַיִּישָׁן` (בראשית ב:כא) | [divergence] | The god-sent sleep: in Genesis cast upon the man, here snatched from the dreamer as he wakes. |
| 3b | kī laptat kī nemiat kī dalḫat | כמה נגוע, כמה *שומם*, כמה דלוח | `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ` (יחזקאל לב:ב) | [cognate] | *dalāḫu* / דלח "make turbid". |
| 3b | kī dalḫat | כמה דלוח | `וַתִּפָּעֶם רוּחוֹ` (בראשית מא:ח) | [equivalent] | The disturbing dream. |
| 4, 11 | rīmī ṣērim; ul rīmum-ma | ראמי השדה; הלא הראם הוא? | `הוֹשִׁיעֵנִי מִפִּי אַרְיֵה; וּמִקַּרְנֵי רֵמִים עֲנִיתָנִי` (תהלים כב:כב) | [cognate] | *rīmu* / `רְאֵם`; the wild bull as the danger from which the god rescues (8–9b, 12–16a). |
| 5a | iš-šasêšu qaqqaram ilette | בצעקתו את הקרקע פולח | `וַתִּבָּקַע הָאֲדָמָה אֲשֶׁר תַּחְתֵּיהֶם` (במדבר טז:לא) | [equivalent] | The ground split open. |
| 9b, 14 | mê nādīšu išqianni / išqûka | מים מנאדו השקה אותי / אותך | `וַתִּפְתַּח אֶת נֹאוד הֶחָלָב וַתַּשְׁקֵהוּ` (שופטים ד:יט) | [cognate] | **Key.** *nādu* / `נֹאד` and *šaqû* / `השקה`, both cognate. |
| 9b, 14 | mê nādīšu išqianni | מים מנאדו השקה אותי | `וַתְּמַלֵּא אֶת הַחֵמֶת מַיִם וַתַּשְׁקְ אֶת הַנָּעַר` (בראשית כא:יט) | [equivalent] | Rescue by water from a skin, given by the god's intervention. |
| 12 | zīmū ša tāmuru šamaš namrum | הזיו אשר ראית – שַׁמַשׁ המאיר | `מַלְכָּא זִיוֹהִי שְׁנוֹהִי` (דניאל ה:ו) | [cognate] | *zīmu* / `זיו`. Reading *zīmū* is Renger's (others *rīmu*). |
| 12 | šamaš namrum | שַׁמַשׁ המאיר | `כִּי שֶׁמֶשׁ וּמָגֵן יְהוָה אֱלֹהִים` (תהלים פד:יב) | [equivalent] | The sun-god as protector. |
| 13 | ina dannātim iṣabbat qātni | במצוקות יאחז בידנו | `עִמּוֹ-אָנֹכִי בְצָרָה; אֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ` (תהלים צא:טו) | [equivalent] | The god with man in distress, rescuing and honouring (cf. 15–16a *mukabbit*). |
| 13 | ina dannātim | במצוקות | `לָאֵל הָעֹנֶה אֹתִי בְּיוֹם צָרָתִי` (בראשית לה:ג) | [equivalent] | As Schøyen₂ 22. |
| 15–16a | ilka mukabbit qaqqadīka lugalbanda | אֵלְךָ, מכבד ראשך, לוגלבנדה | `וְאַתָּה יְהוָה מָגֵן בַּעֲדִי; כְּבוֹדִי וּמֵרִים רֹאשִׁי` (תהלים ג:ד) | [equivalent] | **Key.** The protecting god who "honours the head"; *kabātu* D / כבד. |
| 15–16a | mukabbit | מכבד | `כִּי מְכַבְּדַי אֲכַבֵּד` (שמואל א ב:ל) | [cognate] | *kabātu* D / `כִּבֵּד`. |
| 16b–17a | nennemmid-ma ištiat neppeš | ניסמך (זה על זה), ואחת נַעֲשֶׂה | `טוֹבִים הַשְּׁנַיִם מִן הָאֶחָד` (קהלת ד:ט); `וְהַחוּט הַמְשֻׁלָּשׁ לֹא בִמְהֵרָה יִנָּתֵק` (קהלת ד:יב) | [equivalent] | Two friends joined against a danger (cf. Nippur a+5). |
| 17b | šipram ša lā ibaššû ina ⟨mā⟩tim | מלאכה אשר איננה ב⟨ארץ⟩ | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [divergence] | = OB III 17: an unprecedented undertaking; here an encouragement. No "not yet" (no `טרם`). |

### Lines shared with other tablets
- **OB III**: 17b = OB III 17 (marks only: `⟨ ⟩`).
- **OB Schøyen₂**: 1a ~ 27 (imperative; *ṣūrim* for *ṣēr*); 1b ~ 28; 3a ~ 4a (*šuttam aṭṭul* for *ātamar šuttam*); 7 ~ 7–8 (*lawû*, *aḫu*); 8 ~ 12 (*šalāpu*); 10 ~ 14/16a; 11 ~ 15 (rīmu for šadû); 12 ~ 21; 13 ~ 22; 16b–17a ~ 17 (decision 4).
- **OB Nippur**: 12 ~ a+6; 15–16a ~ 7–8 (*mukabbit* for *bāni*).
- **SB IV**: 3a ~ IV 21 etc.; 10–11 ~ IV 215–216.

### Proposals for the shared renderings
1. **Key terms (§4)**: *šittu ša ilī* = `שנת האלים` (↔ 1 Sam 26:12, Gen 2:21) in the *šittu* row; *mukabbit qaqqadi* = `מכבד ראש` beside *bāni qaqqadi* = `בונה ראש`; *nādu* + *šaqû* = `נאד` + `השקה` (Judg 4:19).
2. **Ordinary words (§5)**: *ekēmu* = `חָטַף`; *dalāḫu* = `דָּלַח`; *letû* = `פָּלַח`; *usukku* = `לֶסֶת`; *kabātu* D = `כִּבֵּד`; *nemû* = `*שומם*` (provisional); *emēdu* N "join forces" = `נסמך (זה על זה)` beside "clash" = `נתקל` (open decision 4).
3. **§7 "always vocalize"**: `הָרְאֵם` with the article too (unvocalized `הראם` reads "did he show them?").

### Lessons for the guidelines
- **Small parallel tablets of one episode should be translated together, the best-preserved first**: Schøyen₂, Nippur and Harmal₁ share the interpretation formulas (*nukkur mimma*, "the one you saw – Šamaš", "he will take your hand", "your god Lugalbanda"); fixing them on Schøyen₂ made Harmal₁'s variants (wild bull for mountain, *zīmū* for *eṭlu*, "our hand", *mukabbit* for *bāni*) visible as exact one-word changes.

## Tablet OB-Ishchali

### Scope
OB Ishchali (ISACM-A 22007; eBL NērOB1; Ishchali = ancient Nērebtum, Diyala), all 47 eBL labels: obv. 1′–15′, lower edge 16′–18′ (after a lost beginning: Ḫuwawa's plea; Enkidu: "Smite Ḫuwawa! why have you had mercy on him?"; Gilgameš: "now, my friend, we must achieve victory – the auras are escaping in the wood, the sheens are clouding over"; Enkidu: "catch a bird, and where will its chicks go? Let us look for the auras later … smite him again and slay his attendant"), rev. 19′–43′ and left edge a+1–a+2 (Gilgameš takes his axe, draws his sword and smites the neck, Enkidu encourages him; the blood carried by the ravines; "he slew the ogre, the forest's guardian, at whose yell Sirion and Lebanon were split"; the uplands trembled; after slaying the seven (auras) he took up ten talents of weapons, went down and trampled the forest, and opened the hidden abode of the Anunnakkū; Gilgameš felling the trees, Enkidu choosing timber; "Gilgameš, smite the cedar … thirty reeds long … the Euphrates"). Single manuscript; 1′–9′, 24′–29′, 32′–36′, 41′–a+2 damaged.

### Sources consulted
- eBL `L/1/4` OB Ishchali (`../../sources/eBL/Gilgamesh-OB-Ishchali/reading-edition.md`: N, T, L, notes of George 2003 (RN117) and Wasserman (RN2651), ATF). No SEAL page for this tablet.
- `python3 -I parallels_for.py OB-Ishchali --all` (19 lines); SB V 133–318 (`../1-הנוסח-הבבלי-התקני/annotated-V.rtl.md`: 156, 250–256, 285–288, 300–318), SB X 93–94, IX 15–16, SB I 7, OB III 123, 171; `../renderings.md` §3.1, §4 (*melammu*, *naṣāru*), §16.
- George's translation after drafting; Tchernichovsky 1924 has no text of this episode (Ishchali published 1957); the Bible through `check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `ISH.txt` + `gen.py`).
2. ***nêru* = `קָטַל`** throughout (7′, 18′, 22′, 26′, 28′, 30′, 34′, 35′b), as SB V 287, 305, 307 – **also of the cedar in 41′** (`קטול את הארז!`): the same verb kills the guardian and the tree, and the Hebrew keeps it.
3. **The guardian**: *maṣṣaru* = `נוֹצֵר` (26′, 30′, 34′; never `שומר`); 30′ *maṣṣaru qištim* = `נוצר היער` (SB V 37, 43); 34′ written *ma-ṣa-ru {giš}EREN* = `נוצר הארז` (eBL's N *qišti* corrected to the manuscript; George's T has "the cedar's guardian"); *ḫarḫaru* = `פָּרִיץ` (new; Ezek 18:10 "violent man", Isa 35:9 "ravenous beast" – both senses George weighs: "villain" and an older "monster").
4. **The auras**: 12′–13′ *melemmū iḫalliqū … namrīrū irrupū ana erpi* = `הזהרים נמלטים ביער, / הזהרים נמלטים, והנגהות מתעננים לעב.` (*melemmū* = `זְהָרִים`, *namrīrū* = `נְגֹהוֹת` as Nippur 3; *ḫalāqu* G "escape" = `נמלט` (law corpus); *erēpu* = `מעונן` §9, present `מתעננים`; *erpu* = `עב`, new); 16′ `את הזהרים – אחר כך נבקשה`; 35′b *ištū-ma sebet inēru* = `אחרי ששבע קטל,` – the seven (auras), against SB V 307 "his seven sons".
5. **15′ = SB V 250 + 251 in one line**: `"רֵעִי, צפור לכוד, אנה ילכו אפרוחיה?` – V's two half-lines joined, with V's words (`צפור לכוד`, `אנה ילכו אפרוחיה`); Deut 22:6 (the bird and its young) tagged [divergence], following Wasserman's note.
6. **Copies of SB lines**: 21′ = X 94 `שלף חרב מחגורו,` (identical); 19′ `שמע גילגמש את מאמר עמיתו,` (V 285 with *rūʾu* `עמית` for *ibru*); 22′ `גילגמש קטל את הצוואר,` (V 287 without the object suffix); 20′ *ilqe ḫaṣṣinnam ina qātīšu* = `לקח גרזן בידו,` (*leqû* = `לקח`, reserved; IX/X have *išši … ana idīšu* `נשא … בזרועו`); 37′b `ירד, ורמס את היער.` (*raḫāṣu* = `רמס`, as V 300, 306 and VII); 39′ `גילגמש מבתק את העצים, אנקידו בוחר *גזעים*.` (*batāqu* D = `ביתק` §10, *ḫiāru* D = `בחר` §13 – V 311–312 have *nakāsu* `כורת`, *šeʾû* Gtn `מבקש ומבקש`; *urbazillu* = V's `*גזעים*`).
7. **31′ *ša ana rigmīšu ultattû saria u labnān*** = `אשר לקולו נִפְלְחוּ שִׂרְיוֹן וְהַלְּבָנוֹן.` – the biblical names (§1; V 156 `התבקעו שִׂרְיוֹן וְהַלְּבָנוֹן`, there *ḫepû* and the heroes' stamping, here *letû* `פלח` (Harmal₁ 5a) and Ḫuwawa's yell). Ps 29:5–6 is the key parallel (voice, cedars, Lebanon and Sirion).
8. **38′ *mūšab anunnakkī puzzuram ipte*** = `את מושב האֲנוּנָּכִּי הַצָּפוּן פתח.` – *puzzuru* = `צָפוּן` (new), not `נסתר`, because `נסתר` renders *katimtu* in I 7 (`ואת הנסתר פתח`): the two "opened the hidden" lines stay distinguishable (and are cross-referenced). *mūšabu* = `מושב` (OB III 123; ↔ Ezek 28:2).
9. **New words**: *lītu* = `תְּשׁוּעָה` (11′; `ניצחון` barred: נצח is *dārû*); *gimilla šakānu ana ṣēri* = `שׂם גמול על` (9′); *ḫarḫaru* = `פריץ`; *erpu* = `עב`; *mutabbilu* = `מְשַׁמֵּשׁ` (`משרתות` occurs in VI); *šuškallu* = `שְׂבָכַת־הַקְּרָב` (`רשת` = *pūgu*, `מכמורת` = *šēšû*); *puzzuru* = `צָפוּן`; *ḫepû* (adj.) = `שבור` (35′, by sense); *libba epēšu* = `*עשה לב*` (23′, literal, italic); *rāʾû* (*rūʾu*) = `עמית` (§9).
10. **Names**: `[ח]וּוָוה` (1′), `גִּילְגָּמֶשׁ` (6′), `אֶנְקִידוּ` (14′, first complete), `האֲנוּנָּכִּי` (38′), `שִׂרְיוֹן וְהַלְּבָנוֹן` (31′), `פְּרָת` (a+1); `אֵלֶיךָ` (7′, "your gods") vocalized against "to you".
11. **eBL slips**: 34′ N *qišti* for the manuscript's *{giš}EREN*; 36′ *š[itta]* "two" lemmatized *šittu* "sleep"; 5′, 9′ *ṣēru* "back" correct here (*ana ṣēri* "towards, upon").

### Open decisions for the user
1. **11′ *lītu* = `תשועה`** ("victory", 2 Sam 23:10) – acceptable, or `גבורה` (but that is *qarrādūtu*, OB III)?
2. **30′/34′ *ḫarḫaru* = `הפריץ`** or `המפלצת` (George's suspicion of the older sense) / `הנבל`?
3. **23′ *libba īpuš* = `*עשה לב*`** (literal) or by sense `עודד` / `חיזק את לבו`?
4. **18′ *mutabbilšu* = `משמשו`** – by sense (*wabālu* Gtn "attend, manage"); a root-keeping `נושאו (כליו)` would add words.
5. **22′ `גילגמש קטל את הצוואר`** (literal object) or `קטל (אותו) בצוואר` (as V 287, which has the suffix)?

### Progress log
- 2026-10-18: read eBL OB Ishchali (all notes, ATF); `parallels_for.py OB-Ishchali --all`; printed the Hebrew of SB V 133–318, X 93–94, IX 15–16. Drafted 47 entries in three sections; generated both files (2 footnotes: 15′, 30′–31′).
- Pass (a): every line against N and the ATF (brackets 1′ `[ח]וווה`, 6′, 7′, 9′, 10′, 11′ `[תשו]עה`, 36′ `ש[ני?]`, 42′ `[… אש]ר`; *ultatti⟨ū⟩* and *irtaḫi⟨ṣ⟩* noted, not marked in the Hebrew – only an ending is omitted); 34′ to the manuscript.
- Pass (b): V 250–251, 285–288, 300, 307, 311–312, X 94, OB III 123, 171 compared (verify below); new strings grepped against all earlier `>` lines – changes: 38′ `הנסתר` → `הצפון` (I 7 has `הנסתר` for *katimtu*), 18′ `משרתו` → `משמשו` (VI `משרתות`); reserved: `לקח` only *leqû* (20′, 37′), `עץ` only *iṣu* (39′), `שׂים` only *šakānu* (9′, 11′), שוב only *târu* (18′), no `שמר`, `עולם`, `אלוהים`, `ידע`, `נחש`, `עפר`.
- Pass (c): read aloud; kept `אבקו`-style literalism (`קטול את הארז`, `הזהרים נמלטים`). Tchernichovsky 1924 has no text here.
- `python3 -I verify.py OB-Ishchali`: 47 = 47, problems 0; 3 differences (V 250, V 251 ≠ 15′: one OB line for two SB lines; OB III 123 ≠ 38′: different lines linked by eBL), 2 marks-only (X 94, X 165). `check_bible_quotes.py`: 0 problems.

### Parallels index (Tablet OB-Ishchali)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 9′ | taštakan gimillam ana ṣērīšu | שׂמת גמול עליו | `גְּמָלַתְהוּ טוֹב וְלֹא רָע` (משלי לא:יב) | [cognate] | *gimillu* / `גמול` "a favour". |
| 11′ | lītam nešakkan | [תשו]עה נשׂים | `וַיַּעַשׂ יְהוָה תְּשׁוּעָה גְדוֹלָה בַּיּוֹם הַהוּא` (שמואל ב כג:י) | [equivalent] | "Victory" in battle. |
| 12′–13′, 16′ | melemmū iḫalliqū … namrīrū irrupū | הזהרים נמלטים … והנגהות מתעננים | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [divergence] | **Key.** The guardian's protective radiance (*melammu*, §4) escapes from the forest when the guardian is overcome; "seven" auras (35′b). |
| 15′ | iṣṣūram bār-ma êšam illakū watmūšu | צפור לכוד, אנה ילכו אפרוחיה? | `כִּי יִקָּרֵא קַן צִפּוֹר לְפָנֶיךָ … לֹא תִקַּח הָאֵם עַל הַבָּנִים` (דברים כב:ו) | [divergence] | **Key.** The same proverb (bird and young), used to urge killing, in Deuteronomy to forbid it (Wasserman, RN2651, after A. Gai). |
| 15′ | iṣṣūram … watmūšu | צפור … אפרוחיה | `וְהִכַּנִי אֵם עַל בָּנִים` (בראשית לב:יב) | [divergence] | Mother and young struck together. |
| 17′ | watmū irtanappudū | אפרוחים משוטטים ומשוטטים | `נָע וָנָד תִּהְיֶה בָאָרֶץ` (בראשית ד:יב) | [equivalent] | *rapādu* (§3.2: tagged, never rendered `נד`). |
| 20′ | ilqe ḫaṣṣinnam ina qātīšu | לקח גרזן בידו | `וַיִּקַּח אֲבִימֶלֶךְ אֶת הַקַּרְדֻּמּוֹת בְּיָדוֹ וַיִּכְרֹת שׂוֹכַת עֵצִים` (שופטים ט:מח) | [cognate] | *leqû* / `לקח` + "in his hand"; then the cutting of trees (39′). |
| 20′ | ilqe … ina qātīšu | לקח … בידו | `וַיִּשְׁלַח אַבְרָהָם אֶת יָדוֹ וַיִּקַּח אֶת הַמַּאֲכֶלֶת` (בראשית כב:י) | [equivalent] | Taking the blade to kill. |
| 23′ | enkīdu ibiršu īpuš libba | אנקידו, רֵעֵהוּ, *עשה לב* | `וַיְחַזֵּק אֶת יָדוֹ בֵּאלֹהִים` (שמואל א כג:טז) | [equivalent] | The friend's encouragement (Lambert/George's reading of the idiom). |
| 25′ | dāmšu ubbalū … ḫarrū | את דמו נושאים … האפיקים | `קוֹל דְּמֵי אָחִיךָ צֹעֲקִים אֵלַי מִן הָאֲדָמָה` (בראשית ד:י); `אֲשֶׁר פָּצְתָה אֶת פִּיהָ לָקַחַת אֶת דְּמֵי אָחִיךָ` (בראשית ד:יא) | [cognate] | *dāmu* / `דם`; the slain one's blood taken by the land; here carried by the ravines. |
| 25′ | ḫarrū | האפיקים | `וַתִּשָּׁבַרְנָה פֹרֹאתָיו בְּכֹל אֲפִיקֵי הָאָרֶץ` (יחזקאל לא:יב) | [equivalent] | The felled cedar's boughs in the ravines. |
| 26′, 30′, 34′ | ḫuwāwa maṣṣaram inēr; inēr ḫarḫaram maṣṣaru qištim / erēni | את חוווה, הנוצר, קטל; קטל את הפריץ, נוצר היער / הארז | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | **Key.** The guardian of the gods' forest is killed by the hero; in Genesis the guardian is set and man expelled. *maṣṣaru* = `נוצר`. |
| 30′, 34′ | ḫarḫaram | הפריץ | `וּפְרִיץ חַיּוֹת בַּל יַעֲלֶנָּה` (ישעיהו לה:ט) | [equivalent] | `פריץ` "violent one / ravenous beast" (open decision 2). |
| 31′ | ša ana rigmīšu ultattû saria u labnān | אשר לקולו נִפְלְחוּ שִׂרְיוֹן וְהַלְּבָנוֹן | `קוֹל יְהוָה שֹׁבֵר אֲרָזִים … וַיַּרְקִידֵם כְּמוֹ-עֵגֶל; לְבָנוֹן וְשִׂרְיֹן כְּמוֹ בֶן-רְאֵמִים` (תהלים כט:ה–ו) | [equivalent] | **Key.** A voice that shakes the pair Lebanon–Sirion and the cedars; here the voice of the forest's guardian. |
| 31′ | saria | שִׂרְיוֹן | `צִידֹנִים יִקְרְאוּ לְחֶרְמוֹן שִׂרְיֹן` (דברים ג:ט) | [cognate] | *Sariya* (SB *Sirāra*) = `שִׂרְיֹן`, Hermon / Anti-Lebanon (§1). |
| 33′ | irtutū kala ḫuršānim | זעו כל הרמה | `וַיֶּחֱרַד כָּל הָהָר מְאֹד` (שמות יט:יח) | [equivalent] | The whole mountain trembles. |
| 35′b | ištū-ma sebet inēru | אחרי ששבע קטל | `וְאֵת לַהַט הַחֶרֶב` (בראשית ג:כד) | [divergence] | The seven (auras) slain; SB V 307 "his seven sons". *sebe* / `שבע` [cognate]. |
| 37′b | urid-ma irtaḫiṣ qištam | ירד, ורמס את היער | `וְנִקַּף סִבְכֵי הַיַּעַר בַּבַּרְזֶל; וְהַלְּבָנוֹן בְּאַדִּיר יִפּוֹל` (ישעיהו י:לד) | [equivalent] | The forest and the Lebanon laid waste. |
| 38′ | mūšab anunnakkī puzzuram ipte | את מושב האנונכי הצפון פתח | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | [equivalent] | **Key.** The forest-mountain as the seat of the gods (§16 *mūšab ilī*). |
| 38′ | puzzuram | הצפון | `יֹשֵׁב בְּסֵתֶר עֶלְיוֹן` (תהלים צא:א) | [equivalent] | The hidden abode of the god. |
| 38′ | puzzuram ipte | הצפון פתח | `וַיְגָרֶשׁ אֶת הָאָדָם; וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים` (בראשית ג:כד) | [divergence] | The hero, having killed the guardian, opens the gods' hidden place; in Genesis man is shut out of it. |
| 39′ | gilgāmeš iṣṣī ubattaq | גילגמש מבתק את העצים | `לֹא תַשְׁחִית אֶת עֵצָהּ לִנְדֹּחַ עָלָיו גַּרְזֶן … וְאֹתוֹ לֹא תִכְרֹת` (דברים כ:יט) | [divergence] | Felling trees with the axe (20′); Deuteronomy forbids it. *iṣu* / `עץ` [cognate]. |
| 39′ | iṣṣī ubattaq … erēnam | מבתק את העצים … הארז | `וְיִכְרְתוּ לִי אֲרָזִים מִן הַלְּבָנוֹן` (מלכים א ה:כ) | [equivalent] | Cedars of the Lebanon cut for a temple (the door for Enlil, OB IM, SB V 316–318). |
| 39′ | iṣṣī ubattaq | מבתק את העצים | `מֵאָז שָׁכַבְתָּ לֹא יַעֲלֶה הַכֹּרֵת עָלֵינוּ` (ישעיהו יד:ח) | [divergence] | The cedars of Lebanon and their feller (the king of Babylon). |
| 39′ | uḫarra urbazillī | בוחר *גזעים* | `מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) | [cognate] | *ḫiāru* / `בחר` (§13); a verbal link only. |
| 41′ | nēr erēnam | קטול את הארז | `קוֹל יְהוָה שֹׁבֵר אֲרָזִים` (תהלים כט:ה) | [equivalent] | The cedar "killed" with the guardian's verb (*nêru*). *erēnu* / `ארז` [cognate]. |
| a+1 | purattim | פְּרָת | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | [cognate] | The Euphrates (the timber floated to Nippur, SB V 318). |

### Lines shared with other tablets
- **SB V**: 15′ = V 250 + 251 (joined; `verify.py` lists both); 19′ ~ V 285 (*rūʾu* for *ibru*); 22′ ~ V 287 (no suffix); 23′ ~ V 288 (another verb); 31′ ~ V 156 (another verb, same names); 35′b ~ V 307; 37′b ~ V 300 (`רומס את היער`); 39′ ~ V 311–312 (other verbs); a+1 ~ V 318.
- **SB X / IX**: 21′ = X 94, X 165 (marks only); 20′ ~ IX 15, X 93 (*leqû … ina qātīšu* vs *našû … ana idīšu*).
- **SB I 7**: 38′ ~ I 7 (`ואת הנסתר פתח` – *katimtu*; here *puzzuru* `הצפון`, decision 8).
- **OB III**: 37′ ~ 171 (ten talents); 38′ ~ 123 (another line; eBL "=").
- **Within the tablet**: 6′ = 14′ = 40′ (brackets; 14′ vocalized name); 30′ ~ 34′ (forest / cedar); 12′ ~ 13′.

### Proposals for the shared renderings
1. **Key terms (§4)**: *melemmū iḫalliqū* = `הזהרים נמלטים` and *sebet* (the seven auras) in the *melammu* row; *maṣṣar erēni* / *maṣṣar qišti* = `נוצר הארז` / `נוצר היער` (with Schøyen₂); *mūšab anunnakkī* = `מושב האנונכי` (↔ Ezek 28:2) with *puzzuru* = `צָפוּן`; *nêru* of trees = `קטל` (41′); Ps 29:5–6 added to the Lebanon/Sirion row.
2. **Ordinary words (§5)**: *ḫarḫaru* = `פָּרִיץ`; *lītu* = `תְּשׁוּעָה`; *erpu* = `עָב`; *mutabbilu* = `מְשַׁמֵּשׁ`; *šuškallu* = `שְׂבָכַת־הַקְּרָב`; *ḫalāqu* G "escape" = `נמלט` (law corpus) beside D `אבד`; *letû* N/Dt = `נפלח`.
3. **verify.py**: eBL's "=" OB III 123 / Ishchali 38′ is a false link (different lines).

### Lessons for the guidelines
- **A fresh Hebrew word for a new lemma must also be checked against the formulas of the prologue**: `הנסתר … פתח` was the natural rendering of 38′, but the same two words stand in SB I 7 for another Akkadian noun (*katimtu*); choosing `הצפון` keeps the two passages distinct while the apparatus links them.

## Tablet OB-Harmal2

### Scope
OB Harmal₂ (IM 52750; eBL ŠadOB1, Tell Harmal), all 59 eBL labels (1-2, 3–26, 27-28, 29–53, left edge 56′–63′); legible only 4–6 ("let your shout boom like a kettledrum"), 11–20 ("when, my friend, … where Ḫuwawa comes and goes – there is a track, the path is straight"; "we have come to a place where one should not go!"; "let us set a weapon in Ḫuwawa's gate!"; Enkidu, "the … of the wild": "a tempest's onslaught – Ḫuwawa! like Adad he will swoop on us!"), 36–49 (in the woods; someone "set his face towards the auras"; "living, we are not alive, Gilgameš"; the guardian pleads: "guard my life for me, Gilgameš! The cow of the fold, Ninsumuna, bore you … from the mouth of Šamaš, the savage hero, I heard … let me guard for you cedar, cypress and juniper, the tallest trees, fit for a palace!"; "the wild-born was able to give counsel": "my friend, a man – Ḫuwawa does not …"). Single manuscript; 1–3, 7–10, 21–35, 49–63′ broken or undeciphered. The scribe writes the guardian's name *hu-bi-bi* (Ḫubibi) and Gilgameš *{d}bil₄*.

### Sources consulted
- eBL `L/1/4` OB Harmal₂ (`../../sources/eBL/Gilgamesh-OB-Harmal2/reading-edition.md`: N, T, L, the notes of George 2003 (RN117), ATF). No SEAL page.
- `python3 -I parallels_for.py OB-Harmal2 --all` (9 lines); SB V 4–5, 43, 166–180, SB IV 26, 107, OB II 234–237, OB III 276; `../renderings.md` §3.1, §4, §15, §16.
- George's translation after drafting; Tchernichovsky 1924 has no Harmal text; the Bible through `check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `H2.txt` + `gen.py`). Every label has an entry, also the 30 broken ones (`[…] … […]` as eBL's N).
2. **The name as the tablet writes it**: *hu-bi-bi* = `חוּבִּיבִי` (14, 17, 20, 48; renderings §1 "keep the form the text has"; eBL normalizes *humbāba*, George translates Huwawa); noted in the header.
3. **16 *nittalka ašru lā alākim*** = `באנו אל מקום לא ללכת (בו)!` – the infinitive phrase of §3.1 (`הַדֶּרֶךְ הַזֹּאת – לֹא לָלֶכֶת בָּהּ`) copied; ↔ Gen 3:24, Exod 3:5.
4. **38 *balāṭam-ma ul balṭānu*** (a paronomastic infinitive, rare in OB, George) = `חָיֹה לא חיים אנו` – the Hebrew infinitive absolute, so that the construction of `מוֹת תָּמוּת` (Gen 2:17) and `לֹא מוֹת תְּמֻתוּן` (Gen 3:4) is visible; *ana ḫatāʾim* left untranslated (`ל…`).
5. **The guardian's plea**: 41 *pūtu napištīya uṣram-ma* = `[מו]ל נפשי – נצור לי, גילגמש,` (*pūtu* = `מול` §9, *naṣāru* = `נצר`; George "have mercy on my life"); 46 *luṣṣurkkum erēnam šurmēnam supālam šīḫūtim iṣṣī* = `אנצרה לך ארז, שׁוּרְבִּין ו*עַרְעָר*, גבוהי [העצ]ים,` (V 176 `אנצרה לך הדס` copied for the verb); 47 `הראויים להיכל!"` (*simtu* = `הראוי ל־`). The guardian offers to "guard" (*naṣāru*) the trees **for** the man – the [divergence] with Gen 2:15, 3:24.
6. **47 *waldam ṣērim mitlukam ileʾʾi*** = `ילוד השדה – להימלך יוכל:` (IV 26 `[א]שר נולד בש[דה – להימלך יוכל]` for the verb phrase; *waldu* = `ילוד` as I 30).
7. **42 *ulidka littum ša supūri ninsumuna*** = `ילדה אותך עגלת הדיר, נִינְסוּמוּנָה!` – *littu* "cow" = `עֶגְלָה` (new; `פרה` is *arḫu* in I; OB II's *rīmtu* is `רְאֵמָה`); the long name form `נִינְסוּמוּנָה` (as OB II `נִינְסוּנָּה`).
8. **43 *lāma*** = `קודם ש־` (§18 *lām*), never `טרם` (§6).
9. **New words**: *wašṭu* = `*קשוח*` (18, uncertain reading); *miqittu* = `מַפֹּלֶת`; *supālu* = `*עַרְעָר*`; *littu* = `עגלה`; *kânu* = `כון` (6, creation corpus); *nēmedu* = `משען` (VI); *šaḫātu* = `נרתע` (§9); *meḫû* = `סופה` (III, V); *pānam ana … šakānu* = `שׂם פנים אל` (§15).
10. **eBL lemma slips**: 18, 47 *ṣēri(m)* lemmatized "back" (it is "the wild", `שדה`).

### Open decisions for the user
1. **The name `חוּבִּיבִי`** (the tablet's spelling) or the normal OB `חוווה` with a note?
2. **38 `חָיֹה לא חיים אנו`** (infinitive absolute, Gen 2:17's construction) or George's sense `איננו חיים באמת`?
3. **42 *littu* = `עגלה`** (a new word to keep *arḫu* `פרה` apart) or `פרה` for both lemmas?
4. **46 *supālu* = `*ערער*`** (a guess at "juniper") or the transliteration `סוּפָּלוּ`?

### Progress log
- 2026-10-18: read eBL OB Harmal₂ (all notes, ATF); `parallels_for.py OB-Harmal2 --all`; printed SB V 4–5, 43, 150–180. Drafted 59 entries in five sections (two of them broken lines only); generated both files (3 footnotes: 16, 38, 46–47).
- Pass (a): every line against N and the ATF (5 `קול[ך …]`, 6 `[י]כונו`, 15 `[שׂ]וּם … שבי[ל]`, 20 `[חוביבי! כ]אֲדַד`, 41 `[מו]ל`, 44 `[ש]מעתי`, 46 `[העצ]ים`); every broken line entered as N gives it.
- Pass (b): V 4–5, 43, 168–169, 176–177, IV 26, OB II 234–237 compared; reserved strings: `שׂים` only *šakānu* (15, 17, 37), `לקח` only *leqû* (18), `עץ` only *iṣu* (40, 46, 50), no `טרם`, `שמר`, `עולם`, `אלוהים`, `ידע`, `עפר`; new strings grepped against all earlier `>` lines (none of `עגלת`, `קשוח`, `מפלת`, `ערער`, `יכונו`).
- Pass (c): read aloud; the broken lines left as the edition has them.
- `python3 -I verify.py OB-Harmal2`: 59 = 59, problems 0; 1 difference (V 43 ≠ 5: brackets and the longer OB line). `check_bible_quotes.py`: 0 problems (two first-draft quotations corrected: a wrong Jer 32:39, Gen 6:4).

### Parallels index (Tablet OB-Harmal2)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 5 | kīma lilissi liššapu rigimka | כתוף יתעבה קול[ך] | `קוֹל יְהוָה עַל הַמָּיִם` (תהלים כט:ג) | [equivalent] | The thundering voice (as SB V 43). |
| 6 | likūnū | [י]כונו | `וַיְהִי כֵן` (בראשית א:ז) | [cognate] | *kânu* / כון; context lost. |
| 14 | ša ḫubibi ittallaku | אשר חוביבי מתהלך | `וַיִּשְׁמְעוּ אֶת קוֹל יְהוָה אֱלֹהִים מִתְהַלֵּךְ בַּגָּן` (בראשית ג:ח) | [equivalent] | **Key.** The lord of the forest "walking about" in it (*alāku* Gtn = `התהלך`, §16). |
| 15 | šakin kibsu šutēšur padānu | שׂוּם שביל, מיושר המשעול | `יַשְּׁרוּ בָּעֲרָבָה מְסִלָּה לֵאלֹהֵינוּ` (ישעיהו מ:ג) | [equivalent] | A straight path to the god's place (SB V 4–5). |
| 16 | nittalka ašru lā alākim | באנו אל מקום לא ללכת (בו) | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | **Key.** A place one must not enter (cf. §3.1 *ul ša alāki*). |
| 16 | ašru lā alākim | מקום לא ללכת | `אַל תִּקְרַב הֲלֹם; שַׁל נְעָלֶיךָ מֵעַל רַגְלֶיךָ` (שמות ג:ה) | [equivalent] | The holy, forbidden place. |
| 19 | miqitti meḫê | מפלת סופה | `וְהִנֵּה רוּחַ גְּדוֹלָה בָּאָה מֵעֵבֶר הַמִּדְבָּר … וַיִּפֹּל` (איוב א:יט) | [equivalent] | A storm that "falls". |
| 20 | kīma adad išâʾam ana ṣērīni | כאדד ידאה עלינו | `כַּאֲשֶׁר יִדְאֶה הַנָּשֶׁר` (דברים כח:מט) | [equivalent] | *šâʾu* / `דאה` (Nippur 12). |
| 37 | pānam ana melammī ištakan | פנים אל הזהרים שׂם | `וַיָּשֶׂם אֶת פָּנָיו הַר הַגִּלְעָד` (בראשית לא:כא) | [cognate] | *pānī šakānu ana* / `שׂים פנים אל` (§15). |
| 37 | melammī | הזהרים | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת` (בראשית ג:כד) | [equivalent] | The guardian's auras (§4). |
| 38 | balāṭam-ma ul balṭānu | חָיֹה לא חיים אנו | `מוֹת תָּמוּת` (בראשית ב:יז); `לֹא מוֹת תְּמֻתוּן` (בראשית ג:ד) | [equivalent] | **Key.** The same paronomastic construction (infinitive + negation + finite verb of one root), here of life; *balāṭu* ≠ חיה etymologically. |
| 38 | balāṭam-ma ul balṭānu | חָיֹה לא חיים אנו | `וְאָכַל וָחַי לְעֹלָם` (בראשית ג:כב) | [divergence] | Mortal life in the forest of the gods. |
| 41 | pūtu napištīya uṣram-ma | [מו]ל נפשי – נצור לי | `וְנֹצֵר נַפְשְׁךָ הוּא יֵדָע` (משלי כד:יב) | [cognate] | *naṣāru* + *napištu* / `נצר` + `נפש`. |
| 42 | ulidka littum ša supūri ninsumuna | ילדה אותך עגלת הדיר, נינסומונה | `אֲשֶׁר יָבֹאוּ בְּנֵי הָאֱלֹהִים אֶל בְּנוֹת הָאָדָם וְיָלְדוּ לָהֶם` (בראשית ו:ד) | [divergence] | The hero born of a goddess (cf. OB II 234–237, SB V 168); in Genesis the reverse (divine fathers, human mothers). |
| 42 | littum | עגלת | `עֶגְלָה יְפֵה פִיָּה מִצְרָיִם` (ירמיהו מו:כ) | [equivalent] | The cow/heifer as an epithet. |
| 44 | ina pī šamšim dapīnim qurādim | מפי שַׁמַשׁ, העריץ, הגיבור | `הֵמָּה הַגִּבֹּרִים אֲשֶׁר מֵעוֹלָם אַנְשֵׁי הַשֵּׁם` (בראשית ו:ד) | [equivalent] | *qurādu* = `גיבור` (§4), here of the sun-god. |
| 46 | luṣṣurkkum erēnam šurmēnam supālam šīḫūtim iṣṣī | אנצרה לך ארז, שורבין ו*ערער*, גבוהי העצים | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד); `לְעָבְדָהּ וּלְשָׁמְרָהּ` (בראשית ב:טו) | [divergence] | **Key.** The guardian of the trees offers to guard them **for** the hero; *naṣāru* = `נצר`. |
| 46 | erēnam šurmēnam … iṣṣī | ארז, שורבין … העצים | `אֲנִי אֶעֱשֶׂה אֶת כָּל חֶפְצְךָ בַּעֲצֵי אֲרָזִים וּבַעֲצֵי בְרוֹשִׁים` (מלכים א ה:כב) | [equivalent] | Cedar and cypress offered to a king for building. |
| 46–47 | šīḫūtim iṣṣī simatu ēkalli | גבוהי העצים, הראויים להיכל | `כְּבוֹד הַלְּבָנוֹן אֵלַיִךְ יָבוֹא בְּרוֹשׁ תִּדְהָר וּתְאַשּׁוּר יַחְדָּו לְפָאֵר מְקוֹם מִקְדָּשִׁי` (ישעיהו ס:יג) | [equivalent] | The Lebanon's trees to adorn the (divine) house. |
| 47 | waldam ṣērim mitlukam ileʾʾi | ילוד השדה – להימלך יוכל | `אִישׁ יֹדֵעַ צַיִד אִישׁ שָׂדֶה` (בראשית כה:כז) | [equivalent] | Enkidu "born in the wild" (*ṣēru* = `שדה`, §4), yet wise in counsel. |

### Lines shared with other tablets
- **SB V**: 5 ~ V 43 (`verify.py`: brackets and the longer OB line); 14–15 ~ V 4–5 (`שׂוּם שביל`, `מיושר`); 41 ~ V 173 (another verb: *eṭēru* `מלט`); 42 ~ V 168; 44–45 ~ V 169; 46–47 ~ V 176–177 (`אנצרה לך`); 48 ~ V 179.
- **SB IV**: 47 ~ IV 26, 107 (`להימלך יוכל`).
- **OB II / OB III**: 42 ~ OB II 234–237; 14 ~ OB III 276 (`מתהלך`).
- **For OB IM**: 47 = OB IM 19 (*waldam ṣērim mitlukam ileʾʾi*) – copied there.

### Proposals for the shared renderings
1. **Names (§1)**: Ḫubibi (the Harmal spelling) = `חוּבִּיבִי`; Ninsumuna = `נִינְסוּמוּנָה`.
2. **Key terms (§4)**: *balāṭam-ma ul balṭānu* = `חָיֹה לא חיים אנו` (↔ Gen 2:17, 3:4) in the *balāṭu* row; *luṣṣurkkum … iṣṣī* (the guardian guarding the trees for the hero) in the *naṣāru* row; *ašru lā alākim* = `מקום לא ללכת` beside §3.1.
3. **Ordinary words (§5)**: *littu* = `עֶגְלָה`; *miqittu* = `מַפֹּלֶת`; *supālu* = `*עַרְעָר*`; *wašṭu* = `*קשוח*`; *waldu* = `ילוד`.

### Lessons for the guidelines
- **A badly broken tablet still yields its key line when every legible word is parsed**: Harmal₂'s one preserved grammatical rarity (the paronomastic infinitive *balāṭam-ma ul balṭānu*) is the closest Akkadian match in the corpus to the form of `מוֹת תָּמוּת`; render rare constructions with their Hebrew counterpart (here the infinitive absolute), not by sense.

## Tablet OB-IM

### Scope
OB IM (IM 21180.X; eBL BabaOB1; provenance unknown, Babylonia), all 45 eBL labels: obv. 1–29 (broken opening: "… and let us sit down on our own" twice; "the guardian of the forest"; the killing of the guardian's sons "the Cricket, the Roarer, the Flyer, the Worm"; "he smote five times"; "he trampled the cedar forest and opened the hidden abode of the gods, the Anunnakkū"; the "wild-born" Enkidu's counsel: "by your strength you slew the guardian – what could shame you? Lay the forest low! Seek out for me a tall cedar whose top vies with the heavens; I will make a door … may no stranger draw near it, may a god love it! To Enlil's house let the Euphrates carry it; may the folk of Nippur rejoice, may Enlil delight in it!"), rev. 30–57 and top edge 58–59 almost wholly lost. Single manuscript.

### Sources consulted
- eBL `L/1/4` OB IM (`../../sources/eBL/Gilgamesh-OB-IM/reading-edition.md`: N, T, L, the notes of George 2003 (RN117) and Wasserman (RN2651), ATF). No SEAL page.
- `python3 -I parallels_for.py OB-IM --all` (17 lines, all "cf."); SB V 300–319, SB II 229, OB III 123; the Ishchali and Harmal₂ files of this run (38′, 37′b, 47).
- George's translation after drafting; Tchernichovsky 1924 has no text here; the Bible through `check_bible_quotes.py --show`.

### Decisions
1. **Generated from one data file** (scratchpad `IM.txt` + `gen.py`); every broken label entered as eBL's N gives it.
2. **Copies of the Ishchali, Harmal₂ and SB V lines, changed exactly where the Akkadian changes**: 17b-18 `את מושב האלים, האֲנוּנָּכִּי, הַצָּפוּן פתח.` (Ishchali 38′ + *ilī*, as OB III 123); 17a `… רמס את יער הארזים,` (*raḫāṣu* = `רמס`, *qišti erēni* = §3.1 `יער הארזים`); 19 `ילוד השדה – להימלך יוכל,` (= Harmal₂ 47b); 20 `"בעוצמתך את הנוצר קטלת,` (V 305 in the singular); 22b `בַּקֵּשׁ לי ארז גבוה,` (V 314 `ארז גבוה`; *šeʾû* D imperative); 22c `אשר קדקודו מתחרה בשמים!` (V 315 *nakpu* `נוגף` → *šannu* `מתחרה`, *šanānu* as I 45, V 22); 23 `אעשה דלת אשר קנה רוחבה,` (V 316); 27 `אל בית אֶנְלִיל ישאנה פְּרָת,` (V 318 without "in Nippur"); 28 `ישמחו המון נִיפּוּר,` (V 319 with *ummānu* `המון` for *atmanu* `דבירי`); 13 the guardian's sons (V 308's `צרצר, שואג`, without the article, + *mupparšu* `מעופף` (IV 52), *mubattiru* `*זחל*`).
3. **21-22a *mīnû ubaššakka … šunēl*** = `מה יבייש אותך? את יער ה⟨ארזים⟩ – הַשְׁכֵּב!` – *bâšu* = `בוש` [cognate] (guidelines §6.7), D = `בייש` (↔ Gen 2:25 `וְלֹא יִתְבֹּשָׁשׁוּ`); *nâlu* Š = `השכיב` (IV 90): the forest "laid down" with the verb of lying down to sleep.
4. **6, 8 *i niwšib / nīšib wēdāni*** = `ונשבה לבדנו.` (*ēdēnu* = `לבד`, §11 ↔ Gen 2:18).
5. **24 *ay irši šagammam*** = `אַל תקנה *פות*` (*rašû* = `קנה`, §4, kept against the idiomatic "have"); 25 *amāt* (eBL lemma *awātu* "word" – a slip: it is *ammatu* "cubit") = `אמה`; *lētu* = `לְחָיֶיהָ` (vocalized).
6. **26 *ay iṭḫēšim aḫûm ilum lirāmši*** = `אַל יִגַּשׁ אליה זר, אֵל יאה[בנה]!` – *ṭeḫû* = `נגש`, *aḫû* = `זר`, *râmu* = `אהב`; the Hebrew `אַל … אֵל` sound-play is not in the Akkadian (*ay* … *ilum*) – both vocalized, noted; ↔ Num 18:7 `וְהַזָּר הַקָּרֵב יוּמָת`.
7. **New words**: *mubattiru* = `*זחל*`; *ḫamšīšu* = `חמש פעמים`; *kiṣru* (pl., 12) = `גושים?` (§2 *kiṣru* = `גוש`); *ummānu* "folk" = `המון` (§5).
8. **Names**: `האֲנוּנָּכִּי`, `אֶנְלִיל`, `פְּרָת`, `נִיפּוּר` vocalized; `רֵעֵהוּ`, `אַל`, `אֵל`, `יָגִיל`, `הַשְׁכֵּב`, `בַּקֵּשׁ` vocalized.
9. **eBL slips**: 19 *ṣērim* lemmatized "back"; 25 *amāt* lemmatized *awātu*.

### Open decisions for the user
1. **26 `אַל יִגַּשׁ אליה זר, אֵל יאהבנה`** – the unintended Hebrew pun `אַל`/`אֵל` (vocalized) acceptable, or `בל יגש אליה זר`?
2. **24 *rašû* = `תקנה`** (one Hebrew verb for *rašû*, §4) or by sense `אל יהיה לה פות`?
3. **13 the sons' names without the article** (as V 308) or as proper names transliterated (`זִיזָנוּ`, `נָאֶרוּ`, `מוּפַּרְשׁוּ`, `מוּבַּתִּרוּ`)?

### Progress log
- 2026-10-18: read eBL OB IM (all notes, ATF); `parallels_for.py OB-IM --all`. Drafted 45 entries in three sections; generated both files (1 footnote: 22b–22c).
- Pass (a): every line against N and the ATF (4 `[ידיים?]`, 9 `נוצ[ר היער]`, 13, 16 `[קטל]`, 21-22a `⟨ארזים⟩`, 26 `יאה[בנה]`).
- Pass (b): V 300–319, Ishchali 37′b–38′, Harmal₂ 47, OB III 123 compared word by word (all eBL links are "cf.", so `verify.py` lists none); reserved strings: no `שׂים`, `ידע`, `לקח`, שוב, `שמר`, `עולם`, `אלוהים`, `עץ` (*iṣu* does not occur), `עפר`; new strings grepped (`זחל`, `חמש פעמים`, `מתחרה בשמים`, `יבייש`, `הַשְׁכֵּב` – none for another lemma).
- Pass (c): read aloud.
- `python3 -I verify.py OB-IM`: 45 = 45, problems 0, no repeated-line differences. `check_bible_quotes.py`: 0 problems (Gen 2:14 corrected to a quotation).

### Parallels index (Tablet OB-IM)
| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 6, 8 | i niwšib wēdāni | ונשבה לבדנו | `לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ` (בראשית ב:יח) | [divergence] | *ēdēnu* = `לבד` (§11); the two friends "alone" together. Context broken. |
| 9 | maṣṣar qištim | נוצ[ר היער] | `לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | The guardian; *maṣṣaru* = `נוצר`. `היער` restored. |
| 10 | iṣabbassu | יאחזהו | `וְהַיּוֹרֵד אֶל יַעֲרוֹ – תֹּאחֲזֵהוּ רִפְיוֹן` (§3.1, SB II 229) | [divergence] | Perhaps the §3.1 line; subject lost. (Intra-corpus.) |
| 13 | zizānam inēru nāʾeram mupparšam mubattiram | את צרצר ק[טלו, את שוא]ג, את מעופף, את *זחל* | `וַיַּשְׁכֵּן … אֶת הַכְּרֻבִים וְאֵת לַהַט הַחֶרֶב` (בראשית ג:כד) | [divergence] | The guardian's (seven) sons/auras slain (SB V 307–308). |
| 17a | irtaḫiṣ qištam ša erēni | רמס את יער הארזים | `וְאֶכְרֹת קוֹמַת אֲרָזָיו מִבְחַר בְּרֹשָׁיו … יַעַר כַּרְמִלּוֹ` (ישעיהו לז:כד) | [equivalent] | The hero who invades and fells the cedar forest of the Lebanon (Sennacherib's boast). |
| 17b-18 | mūšab ilī enunakkī puzzuram ipte | את מושב האלים, האנונכי, הצפון פתח | `מוֹשַׁב אֱלֹהִים יָשַׁבְתִּי בְּלֵב יַמִּים` (יחזקאל כח:ב) | [equivalent] | **Key.** "The seat of the gods" (§16), as Ishchali 38′. |
| 17b-18 | puzzuram ipte | הצפון פתח | `וַיְגָרֶשׁ אֶת הָאָדָם; וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים` (בראשית ג:כד) | [divergence] | The gods' hidden place opened by the hero vs closed to man. |
| 19 | waldam ṣērim | ילוד השדה | `אִישׁ יֹדֵעַ צַיִד אִישׁ שָׂדֶה` (בראשית כה:כז) | [equivalent] | Enkidu "born of the wild" (*ṣēru* = `שדה`). |
| 20 | ina dunnīka-ma maṣṣaram tenēram | בעוצמתך את הנוצר קטלת | `וַיַּשְׁכֵּן … אֶת הַכְּרֻבִים … לִשְׁמֹר` (בראשית ג:כד) | [divergence] | The guardian killed (V 305). |
| 21-22a | mīnû ubaššakka | מה יבייש אותך? | `וַיִּהְיוּ שְׁנֵיהֶם עֲרוּמִּים הָאָדָם וְאִשְׁתּוֹ; וְלֹא יִתְבֹּשָׁשׁוּ` (בראשית ב:כה) | [cognate] | *bâšu* / בוש; shame and its absence. |
| 21-22a | ubaššakka | יבייש אותך | `כִּי זָנְתָה אִמָּם הֹבִישָׁה הוֹרָתָם` (הושע ב:ז) | [cognate] | The causative stem of בוש. |
| 22b | šuwwiam erēnam šīham | בַּקֵּשׁ לי ארז גבוה | `וְעַל כָּל אַרְזֵי הַלְּבָנוֹן הָרָמִים וְהַנִּשָּׂאִים` (ישעיהו ב:יג) | [equivalent] | The lofty cedar. |
| 22c | ša muḫḫašu šamāʾī šannu | אשר קדקודו מתחרה בשמים | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) | [equivalent] | **Key.** A top that "rivals the heavens" (SB V 315 "butts the heavens"); cf. the tower whose head is in heaven. |
| 22c | šamāʾī šannu | מתחרה בשמים | `הַשָּׁמַיִם אֶעֱלֶה מִמַּעַל לְכוֹכְבֵי אֵל אָרִים כִּסְאִי` (ישעיהו יד:יג) | [equivalent] | Rivalry with heaven (*šanānu* "rival"). |
| 23 | lūpuš daltam | אעשה דלת | `וְאֵת פֶּתַח הַדְּבִיר עָשָׂה דַּלְתוֹת עֲצֵי שָׁמֶן` (מלכים א ו:לא) | [equivalent] | A temple door of choice wood. |
| 26 | ay iṭḫēšim aḫûm | אַל יִגַּשׁ אליה זר | `וְהַזָּר הַקָּרֵב יוּמָת` (במדבר יח:ז) | [equivalent] | **Key.** No outsider may approach the god's door. *aḫû* = `זר`. |
| 26 | ay iṭḫēšim aḫûm | אַל יִגַּשׁ אליה זר | `וַיַּשְׁכֵּן מִקֶּדֶם לְגַן עֵדֶן אֶת הַכְּרֻבִים … לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [divergence] | Access barred – here by a door made from the guardian's own cedar. |
| 27 | ana bīti ellil libil purattum | אל בית אנליל ישאנה פרת | `וַאֲנִי אֲשִׂימֵם דֹּבְרוֹת בַּיָּם עַד הַמָּקוֹם אֲשֶׁר תִּשְׁלַח אֵלַי` (מלכים א ה:כג) | [equivalent] | Cedars of the Lebanon floated by water to the god's house. |
| 27 | purattum | פְּרָת | `וְהַנָּהָר הָרְבִיעִי הוּא פְרָת` (בראשית ב:יד) | [cognate] | The Euphrates. |
| 29 | lirīssim enlil | יגיל בה אנליל | `יִשְׂמַח יְהוָה בְּמַעֲשָׂיו` (תהלים קד:לא) | [equivalent] | The god delighting in the gift. |

### Lines shared with other tablets
- **SB V**: 13 ~ V 308; 17a ~ V 300; 20 ~ V 305 (number); 22b ~ V 314; 22c ~ V 315 (verb); 23 ~ V 316; 24–25 ~ V 317; 27 ~ V 318; 28 ~ V 319 (noun). All eBL links are "cf.", so `verify.py` lists none; each change is the Akkadian's.
- **OB Ishchali**: 17a ~ 37′b; 17b-18 ~ 38′ (+ *ilī*); 11–12 ~ 32′–33′ (Wasserman); 14 ~ 30′ (George, uncertain).
- **OB Harmal₂**: 19 = 47b (`ילוד השדה – להימלך יוכל`).
- **OB III**: 17b-18 ~ 123.
- **Within the tablet**: 6 = 8 (spelling variants only).

### Proposals for the shared renderings
1. **Key terms (§4)**: *ša muḫḫašu šamāʾī šannu* = `אשר קדקודו מתחרה בשמים` (↔ Gen 11:4) beside SB V 315 `נוגף בשמים`; *ay iṭḫēšim aḫûm* = `אל יגש אליה זר` (↔ Num 18:7); *bâšu* D = `בייש` [cognate ↔ Gen 2:25].
2. **Ordinary words (§5)**: *mubattiru* = `*זחל*`; *ḫamšīšu* = `חמש פעמים`; *nâlu* Š = `הִשְׁכִּיב` (confirmed, IV 90) also of felling a forest.

### Lessons for the guidelines
- **Parallels that eBL marks only "cf." must still be compared word by word**: none of OB IM's seventeen SB/OB links is checked by `verify.py`, yet the tablet differs from SB V in exactly one word in most of them (*šannu* for *nakpu*, *ummān* for *atman*, singular for plural); writing each copy as "the first copy plus the Akkadian's change" makes these one-word differences legible for the commentary.
