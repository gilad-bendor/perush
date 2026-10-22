# Translator notes: SAA 9 1 (unit S01)

## S01 (T1)

**Scope done:** all 214 lines of SAA 9 1 (ORACC P333952, labels `o.i.1'` … `o.vi.32`), in `annotated-01.rtl.md`, drafted 2026-10-22 (Round 3, run 3; one translator at a time; each section saved and filled on disk as it was drafted). `prophecy_tools.py verify S01`: **OK** (214/214 entries, no notes). `../../tools/check_bible_quotes.py annotated-01.rtl.md`: **0 problems** (every quoted verse printed with `--show` first; range references were split into single-verse references so that each is checked).

**Sections** (one `## ` per oracle, from the colophons *ša pî* PN and the rulings shown by `data`):

| Section | Lines | Prophet (colophon) | Boundary note |
|---|---|---|---|
| 0 (unnumbered) | i 1′–3′ | – | before a double ruling: the end of a lost oracle or the heading of the collection (open decision 1) |
| 1.1 | i 4′–29′ | Issar-la-tašiyaṭ, *mār Arbail* | |
| 1.2 | i 30′–ii 10′ | Sinqiša-amur, *marʾat Arbail* | runs across the break between columns i and ii |
| 1.3 | ii 11′–15′ | Remute-Allate of Dara-ahuya | |
| 1.4 | ii 16′–40′ | Bayâ ({mi₂}), *mār Arbail* | |
| 1.5 | iii 1′–6′ | Ilussa-amur, *Libbalaya* | beginning lost (top of column iii) |
| 1.6 | iii 7′–iv 35 | colophon lost | end lost (bottom of column iv) |
| 1.7 | v 1–11 | Issar-beli-daʾʾini, *šēlūtu ša šarri* | begins mid-sentence at the top of column v: its beginning was at the lost end of column iv; the 1.6/1.7 boundary is in the break |
| 1.8 | v 12–25 | Ahat-abiša, *marʾat Arbail* | |
| 1.9 | v 26–36 | colophon lost | end lost (bottom of column v) |
| 1.10 | vi 1–32 | La-dagil-ili, *mār Arbail* | its opening (vi 1–2) is restored; the 1.9/1.10 boundary is in the break |

### Review pass (a): fidelity
Read every Hebrew line against its transliteration and SAAo normalization (a script listed the `>` lines beside the base lines). Fixed in this pass:
- Brackets judged from the transliteration: ii 4′ `בסוגר[ים, …]` (the restored *-te* is the plural ending, so the bracket covers `ים`, not only `ם`); ii 5′ `בְּמִדּ[וֹת] […]` (restored ending + two lost signs kept apart); iv 2 `לא אוביש[ך]` (only the suffix *-ka* is restored); iv 32 `אש אבעי[ר]` (*u₂-⸢ša₂⸣-[haz]*: the last syllable is restored); v 31 `לצאת[ה]` (a stray `…` removed: the line has nothing after *uṣēša*); i 36′ `[הַגְּבִירָה]` is marked in the apparatus as Parpola's restoration (the ORACC transliteration has `[x x x]`); iv 34 `עַ[זָּה?]` is Parpola's reading of *da-aʾ-[x x]*, marked `?`.
- i 15′–17′: *ayūte dibbīya* is plural: `אילו מדבריי … שעליהם` (the first draft had the singular `אֵיזֶה`).
- Every content word is accounted for; additions without parentheses are only Hebrew grammar (the resumptive `עליהם` in i 17′, `לפניהם` in vi 18, a `ו` between asyndetic pairs where the Hebrew needs it: i 23′, ii 36′, v 16, v 18 – each one said in its entry). The `<$x$>` of i 20′ (an erased or unread sign) is not rendered and is noted.
- Gender checked line by line: the goddess speaks in the feminine (ii 8′ `יושבת [אני]`, ii 11′ `עלזה אני`, iv 23 `זוכרת [אני]`), Bel and Nabû in the masculine (ii 17′–19′, ii 34′–36′ `דומם`); the queen mother's complaint (v 14–20) is all feminine and vocalized where the unvocalized form is ambiguous (`פָּנִית`, `בְּחֵיקֵךְ שַׂמְתְּ`, `הִנְדַּדְתְּ`).
- Tense: perfect = completed past (ii 7′ `השג[תי]`, ii 23′ `עמדו, נצרוך`, ii 31′ `השלמתי`, iii 22′ `כוננתי`, iv 24 `אהבתיך`), present = future (i 19′ `אפשיט`, i 32′ `אתן`, iv 4 `אעבירך`, vi 21 `אוציא`), statives as nominal clauses (i 2′, ii 8′, ii 11′–12′, ii 32′, ii 36′, iv 23).

### Review pass (b): consistency with the renderings and the formulas
- Every formula of `../renderings.md` §2 that occurs in S01 checked against its line (the script enforces most of them): `אַל תִּירָא` (9×), `אָנֹכִי` (written plene `אנוכי`, vocalized `אָנוֹכִי` at its first occurrences, because the verify regex needs the plene form), `אָנֹכִי אִשְׁתַּר שֶׁל אַרְבֵּאִיל`, `גְּבִירַת אַרְבֵּאִיל`, `הַגְּבִירָה הַגְּדוֹלָה אָנֹכִי` (order kept), `מִפִּי` PN `בֶּן / בַּת אַרְבֵּאִיל`, `מֶלֶךְ אַשּׁוּר`, `יָמִים אֲרֻכִּים` (plene `ארוכים`), `שְׁנוֹת נֶצַח`, `הָאַחֲרוֹנוֹת יִהְיוּ כָּרִאשׁוֹנוֹת`, `הָאוֹיְבִים בְּסוּגָרִים, אַנְשֵׁי הַשָּׁלוֹם בְּמִדּוֹת` (over ii 3′–5′ as the tablet splits it), `בְּתוֹךְ הָאוֹי`, `אָקוּם וְאֵשֵׁב`, `שָׁלוֹם לְאֵסַרְחַדּוֹן מֶלֶךְ אַשּׁוּר` (v 26, byte for byte, = SAA 9 3 i 11), `בִּנְךָ וּבֶן בִּנְךָ` (vi 27, = SAA 9 2 ii 13′), `עַל בִּרְכֵּי נִינוּרְתָּה`, `אֶת אַשּׁוּר הִשְׁלַמְתִּי עִמְּךָ`, `הַלְּלֵנִי`, `הַדִּבּוּר הָרִאשׁוֹן … הָאַחֲרוֹן`.
- Key terms (§3, §3a) checked against their drafted lines (the ★ re-check of the pre-set table): `מָגִנְּךָ הַנָּאֶה אָנֹכִי` (iv 19), `הִבְטַחְתִּיךָ` (ii 8′, iv 1), `אַל תִּבְטַח בָּאֱנוֹשׁוּת` (ii 27′), `מְיַלֶּדֶת` / `מֵינֶקֶת` (iii 15′, 17′; plene `מיילדתך`, `מינקתך`), `יוֹרֵשׁ נֶאֱמָן, בֶּן מוּלִּיסּוּ` (iv 5–6, 20–21), `אֲהַבְתִּיךָ` (iv 24), `לֶחֶם מְתֻקָּן תֹּאכַל, מַיִם מְתֻקָּנִים תִּשְׁתֶּה` (vi 22–24, over three lines), `תִּתְקַן` (vi 26), `לַטֶּבַח אֶתֵּן` (i 32′), `אֲדוֹן הַקֻּלְמוֹס` (ii 38′), `חֻלְדָּה` (v 3), `הַנְּדוּרָה שֶׁל הַמֶּלֶךְ` (v 11), `לְעֶגְלָהּ` (v 29), `אֲגַפּוֹ` (i 7′), `כִּסְאֲךָ … כּוֹנַנְתִּי` (iii 21′–22′), `הַבֵּט אֵלַי` (ii 29′), `שָׁקַד` (3×), `נָצַר` (ii 23′), `עַתָּה`, `הִשִּׂיג`, `הִשְׁלִיךְ`, `בִּתֵּק`, `קָם`, `יָשַׁב`, `עָמַד`, `הָלַךְ`, `יָצָא` / `הוֹצִיא`, `שָׁלַח`, `שָׁמַע`, `גִּדֵּל`, `קִיטוֹר` / `הִקְטִיר`, `אֵשׁ`, `לֶחֶם`, `מַיִם`, `הַר`, `עֵינַיִם`, `יָד`, `רֶגֶל`, `בְּתוֹךְ`, `יוֹצֵא חֲלָצַי`, `שָׁמַיִם`, `זָהָב`, `רֶטֶט`, `שָׂדֶה`, `דּוֹמֵם`, `הֵיכָל`, `טוֹב`. Deviations are listed below.
- One source verb = one Hebrew verb across the text: *izuzzu* `עמד` (i 17′, ii 23′, 26′, vi 9, 12); *tebû* `קם` (i 6′, 27′, ii 35′); *qabû* `אמר`; *dabābu* `דיבר` (ii 18′, v 5, vi 7); *ḫarādu* `שקד`; *kullu* `החזיק` (iv 28, vi 17); *takālu* `בטח`; *našû* `נשא` (ii 32′) kept apart from *matāḫu* `הרים` (ii 28′); *gamāru* (not in S01) kept apart from *qatû* D `חיסל` (iv 10); *šebēru* (not in S01) kept apart from *kasāpu* `פתת` (i 7′, as in Gilgameš). Two senses of one verb, two Hebrew verbs, noted: *maḫāru* `קיבל` (v 2) / `פנה אל` (v 14); *qablu* `מותניים` (ii 26′) / `חצי (השמיים)` (iii 24′).
- Grep of all earlier corpora (`prophecy_tools.py grep every`, `lookup`) for every new word; collisions found and resolved during this pass: *kasāpu* `קצץ` → `פתת` (Gilgameš *iksupū kusāpa* = `פָּתְתוּ פַּת`; `קצץ` is *kasāmu* / *nakāsu* there); *mungu* `שיתוק` → `נוקשות` (`שיתוק` = *mišittu*, Ludlul II 76); *zīqtu* `לפידים` → `מַשּׂוּאוֹת` (`לַפִּיד` and `אֲבוּקָה` are both *dipāru*: Gilgameš XI 104, the Šamaš hymn 187); *kizirtu* `תלתל` → `קְוֻצָּה` (`תלתל` = *qimmatu*, Gilgameš VI 2); *nūru* `נר` → `אוֹר` (*nūru* = `אור` in the netherworld corpus and in LH; `נֵר`, the cognate, moved to the apparatus); *qiltu* `בורית` → `אַשְׁלָג` (`בורית` = *tullal*, Gilgameš III 38, and Sum. *naĝa*). Collisions left open: decisions 4–6.
- Name traps: `בֵּל`, `נָבוּ`, `סִין`, `שַׁמַשׁ`, `כֶּלַח`, `הָאוֹי` vocalized in every line where the name is; names vocalized at their first occurrence in the file; `אַתְּ` (v 8), `עִמִּי` (ii 22′), `אֵלַי` (ii 29′, v 14), `נָאָה` / `נָאֶה` vocalized.

### Review pass (c): Hebrew read aloud
Read each oracle aloud as a whole (the clean-translation view). Changes: i 15′ `אילו מדבריי` (the singular jarred with `שעליהם`); v 5 a comma after `מדברים` (otherwise "speak before his feet"); v 22–23 dashes (`הַמַּלְכוּת – שֶׁלְּךָ; הָעֹז – שֶׁלְּךָ הוּא`), so that the line reads as a predication, not as "your kingship"; iii 30′ and v 21 vocative `המלך!` (no "my", which is not on the tablet); vi 15 `רָפָה` (Judg 19:9) for "the day declines". Register: biblical vocabulary where it is the natural word, no vav-consecutive; the long sentences that the tablet spreads over five or six lines (iii 8′–14′, iii 19′–22′, iii 23′–29′, vi 3–6, vi 27–30) keep the Akkadian order with the verb last, which reads as elevated Hebrew.

### Parallels index (S01)

| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| o.i.5′ | *lā tapallah* | `[אַל] תִּירָא!` | `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א); `אַל תִּירָא כִּי עִמְּךָ אָנִי` (ישעיהו מא:י); `אַל תִּירְאוּ וְאַל תַּעַרְצוּ מִפְּנֵיהֶם` (דברים לא:ו) | [equivalent] | The salvation-oracle formula, 9× in S01 (i 5′, 24′, 30′; ii 16′, 33′; iii 30′; v 21; vi 1 restored). |
| o.i.6′–7′ | *aʾu šāru … aqappušu lā aksupūni* | `אֵיזֶה רוּחַ … שֶׁאֶת אֲגַפּוֹ לֹא פָּתַתִּי?` | `הַמְהַלֵּךְ עַל-כַּנְפֵי-רוּחַ` (תהלים קד:ג); `וְגַפִּין דִּי נְשַׁר לַהּ` (דניאל ז:ד) | [equivalent]; [cognate] *agappu* / Aram. `גַּף` | The winged wind (cf. Adapa breaking the South Wind's wing). |
| o.i.7′ | *agappu* | `אֲגַפּוֹ` | `יִפְרֹשׂ כְּנָפָיו יִקָּחֵהוּ` (דברים לב:יא) | [divergence] | The Bible's god spreads his wings over his people; the goddess breaks the wings of what rises against the king. |
| o.i.9′ | *kî šahšūrī ša Simani* | `כְּתַפּוּחֵי סִיוָן` | `הוּא חֹדֶשׁ סִיוָן` (אסתר ח:ט) | [cognate] (month name) | Parpola: "ripe apples"; cf. the love song LAOS 4 01 o.i.8 "like an apple of its season" (*simānu*). |
| o.i.10′, 14′ | *ina pān šēpēka ittangarāru / akkarrūni* | `לפני רגליך יתגלגלו` / `השלכתי` | `עַד-אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א); `יִפְּלוּ תַּחַת רַגְלָי` (תהלים יח:לט) | [equivalent] | Promise (10′) and accomplished fact (14′). |
| o.i.11′–12′ | *Bēlet rabītu anāku; anāku Issar ša Arbail* | `הַגְּבִירָה הַגְּדוֹלָה אָנוֹכִי; אָנוֹכִי אִשְׁתַּר שֶׁל אַרְבֵּאִיל` | `אָנֹכִי אֱלֹהֵי אַבְרָהָם אָבִיךָ; אַל תִּירָא` (בראשית כו:כד) | [cognate] *anāku* / `אָנֹכִי`; [equivalent] | The divine self-presentation after "fear not". |
| o.i.12′ | *Arbail* | `אַרְבֵּאִיל` | `כְּשֹׁד שַׁלְמַן בֵּית אַרְבֵאל בְּיוֹם מִלְחָמָה` (הושע י:יד) | [cognate?] | The identification of Beth-Arbel with Arbela is disputed. |
| o.i.12′ | Ištar | `אִשְׁתַּר` | `לְקַטֵּר לִמְלֶכֶת הַשָּׁמַיִם` (ירמיהו מד:יז) | [divergence] | The Queen of Heaven of the women of Judah. |
| o.i.17′; vi 9–12 | *ina muhhi lā tazzizūni*; *ina muhhi urkî tazzaz* | `שעליהם לא עמדת?`; `על האחרון תעמוד` | `הַהוּא אָמַר וְלֹא יַעֲשֶׂה וְדִבֶּר וְלֹא יְקִימֶנָּה` (במדבר כג:יט) | [equivalent] | "Stand on" a word = rely on it. |
| o.i.19′ | *ukâṣa* | `אַפְשִׁיט` | `וְעוֹרָם מֵעֲלֵיהֶם הִפְשִׁיטוּ` (מיכה ג:ג) | [equivalent] | Flaying of enemies. |
| o.i.22′–24′ | *ina pānātūka ina kutallīka allāka* | `לפניך ומאחוריך אלך` | `כִּי הֹלֵךְ לִפְנֵיכֶם יְהוָה וּמְאַסִּפְכֶם אֱלֹהֵי יִשְׂרָאֵל` (ישעיהו נב:יב); `וַיהוָה הוּא הַהֹלֵךְ לְפָנֶיךָ` (דברים לא:ח) | [equivalent] | Deut 31:8 has "goes before you" and "fear not" together, as here. |
| o.i.26′ | *anāku ina libbi ūʾa* | `אנוכי – בְּתוֹךְ הָאוֹי` | `עִמּוֹ-אָנֹכִי בְצָרָה` (תהלים צא:טו); `בְּכָל צָרָתָם לֹא (לוֹ) צָר` (ישעיהו סג:ט) | [equivalent] | The goddess enters the distress. |
| o.i.28′ etc. | *ša pî* PN | `מִפִּי` PN | `וַיִּכְתֹּב בָּרוּךְ מִפִּי יִרְמְיָהוּ` (ירמיהו לו:ד) | [equivalent] | The scribe writes "from the mouth" of the prophet. |
| o.i.28′ | Issar-la-tašiyaṭ | `אִשְׁתַּר־לָא־תַּשִּׁיָּט` ("Ištar, do not neglect (me)!") | `אַל-תִּטְּשֵׁנִי וְאַל-תַּעַזְבֵנִי אֱלֹהֵי יִשְׁעִי` (תהלים כז:ט) | [equivalent] | A prayer as a personal name. |
| o.i.32′ | *ana ṭabaḫḫi addana* | `לַטֶּבַח אתן` | `כַּשֶּׂה לַטֶּבַח יוּבָל` (ישעיהו נג:ז) | [cognate] | |
| o.i.33′; iv 5, 20 | *bēt rēdûtēka*; *aplu (kēnu)* | `בֵּית הַיְּרוּשָּׁה שֶׁלְּךָ`; `יוֹרֵשׁ נֶאֱמָן` | `וְהִנֵּה בֶן בֵּיתִי יוֹרֵשׁ אֹתִי` (בראשית טו:ג); `כִּי אִם אֲשֶׁר יֵצֵא מִמֵּעֶיךָ הוּא יִירָשֶׁךָ` (בראשית טו:ד) | [equivalent] | Gen 15: "fear not … your shield" + the heir; S01 iv 5–20: the heir + "your shield". Our proposal. |
| o.i.34′; vi 22–26 | *utaqqanka*; *aklu taqnu*; *tataqqun* | `[אֲתַ]קֶּנְךָ`; `לחם מְתֻקָּן`; `תִּתְקַן` | `מְעֻוָּת לֹא יוּכַל לִתְקֹן` (קהלת א:טו) | [cognate] | A rare true cognate; also iv 3 *tuqnu* `תיקון`. |
| o.i.35′ | *urabbakka* (restored) | `[אֲגַדֶּלְ]ךָ` | `כִּי נַעַר יִשְׂרָאֵל וָאֹהֲבֵהוּ` (הושע יא:א) | [equivalent] | Stands on the editor's restoration. |
| o.ii.3′–5′ | *nakarūte ina sigarrāte salmūti ina maddanāti* | `[האויבים] בסוגר[ים, אַנְשֵׁי הַשָּׁלוֹם] בְּמִדּ[וֹת]` | `וַיִּתְּנֻהוּ בַסּוּגַר בַּחַחִים` (יחזקאל יט:ט); `וּמִדָּה בְלוֹ וַהֲלָךְ` (עזרא ד:כ) | [cognate] ×3 (*sigarru*, *maddattu*, *salmu*) | Half of the formula stands on restorations (*salmūti*, the ending of *maddanāti*). |
| o.ii.6′ | *qarābu* (restored) | `[קרב]` | `הַמְלַמֵּד יָדַי לַקְרָב` (תהלים קמד:א) | [cognate] | |
| o.ii.7′ | *aktašad* | `השג[תי]` | `אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם` (תהלים יח:לח) | [equivalent] | |
| o.ii.8′; iii 30′–iv 1 | *uttakkilka* | `הבטחתיך` | `וְאַל יַבְטַח אֶתְכֶם חִזְקִיָּהוּ אֶל יְהוָה` (מלכים ב יח:ל); `מַבְטִיחִי עַל-שְׁדֵי אִמִּי` (תהלים כב:י) | [equivalent] (same function of the root: the causative of "trust") | The Rabshakeh's verb; Ps 22:10 joins it to the midwife image (iii 15′). |
| o.ii.11′–12′ | *rīšāk … rīši Arbail* | `עלזה אני … עלזה ארבאיל!` | `שִׂמְחִי וְעָלְזִי בְּכָל לֵב בַּת יְרוּשָׁלִָם` (צפניה ג:יד); `גִּילִי מְאֹד בַּת צִיּוֹן … הִנֵּה מַלְכֵּךְ יָבוֹא לָךְ` (זכריה ט:ט) | [equivalent] | The city rejoices over its king. |
| o.ii.17′, 38′ | Bēl; Nabû | `בֵּל`; `נָבוּ` | `כָּרַע בֵּל קֹרֵס נְבוֹ` (ישעיהו מו:א) | [equivalent] | The same pair of gods speaks in oracle 1.4; Isaiah mocks them. |
| o.ii.20′; iii 24′, 29′ | *aharrīdi*; *aharrissu* | `אשקוד`; `אשקוד עליו` | `כִּי שֹׁקֵד אֲנִי עַל דְּבָרִי לַעֲשֹׂתוֹ` (ירמיהו א:יב); `הִנֵּה לֹא-יָנוּם וְלֹא יִישָׁן שׁוֹמֵר יִשְׂרָאֵל` (תהלים קכא:ד) | [equivalent] | |
| o.ii.20′–21′ | *ummaka tušabšûkanni* | `אמך הביאתך לכלל הוויה` | `בְּנִי אַתָּה אֲנִי הַיּוֹם יְלִדְתִּיךָ` (תהלים ב:ז); `אִם אֲנִי הַמּוֹלִיד וְעָצַרְתִּי` (ישעיהו סו:ט) | [divergence] | A human mother bears; the gods stand by. *šubšû* = the creation corpus's `הֵבִיא לִכְלַל הֲוָיָה`. |
| o.ii.22′–26′ | 60 great gods stand, guard, gird | `שישים האלים הגדולים … עמדו, נצרוך … חגרו` | `אֱלֹהִים נִצָּב בַּעֲדַת-אֵל` (תהלים פב:א); `אֲאַזֶּרְךָ וְלֹא יְדַעְתָּנִי` (ישעיהו מה:ה) | [equivalent]; [absent] (no council at a birth in the Bible) | |
| o.ii.24′ | *Sin ina imittīka Šamaš ina šumēlīka* | `סִין לימינך, שַׁמַשׁ לשמאלך` | `יְהוָה צִלְּךָ עַל-יַד יְמִינֶךָ` (תהלים קכא:ה); `יוֹמָם הַשֶּׁמֶשׁ לֹא-יַכֶּכָּה; וְיָרֵחַ בַּלָּיְלָה` (תהלים קכא:ו) | [divergence] | Sun and moon as the guards themselves, vs. sun and moon as the dangers. Our proposal. |
| o.ii.27′ | *ina muhhi amēlūti lā tatakkil* | `אַל תִּבְטַח בָּאֱנוֹשׁוּת` | `אַל-תִּבְטְחוּ בִנְדִיבִים בְּבֶן-אָדָם שֶׁאֵין לוֹ תְשׁוּעָה` (תהלים קמו:ג); `אָרוּר הַגֶּבֶר אֲשֶׁר יִבְטַח בָּאָדָם` (ירמיהו יז:ה); `טוֹב לַחֲסוֹת בַּיהוָה מִבְּטֹחַ בָּאָדָם` (תהלים קיח:ח) | [equivalent] | Same verb (*takālu* / `בטח`), same object (mankind). |
| o.ii.28′–29′ | *mutuh ēnātīka ana ayāši dugulanni* | `הרם את עיניך, הבט אֵלַי!` | `פְּנוּ אֵלַי וְהִוָּשְׁעוּ כָּל אַפְסֵי אָרֶץ` (ישעיהו מה:כב); `שְׂאוּ מָרוֹם עֵינֵיכֶם וּרְאוּ` (ישעיהו מ:כו) | [equivalent] | |
| o.ii.31′ | *Aššur issīka ussallim* | `את אשור השלמתי עימך` | `גַּם-אוֹיְבָיו יַשְׁלִם אִתּוֹ` (משלי טז:ז) | [cognate] (*salāmu* D / Hiphil of שלם) | The goddess reconciles the state god with the king. |
| o.ii.32′ | *ṣeherāka attaṣakka* | `קטן היית – נשאתיך` | `הַנְּשֻׂאִים מִנִּי רָחַם` (ישעיהו מו:ג); `קָחָם עַל זְרוֹעֹתָיו` (הושע יא:ג); `כַּאֲשֶׁר יִשָּׂא אִישׁ אֶת בְּנוֹ` (דברים א:לא) | [cognate] *našû* / `נשא`; [equivalent] | |
| o.ii.36′ | *anāku qālākūni* | `ואנוכי דומם?` | `אֱלֹהִים אַל-דֳּמִי-לָךְ` (תהלים פג:ב); `הֶחֱשֵׁיתִי מֵעוֹלָם אַחֲרִישׁ אֶתְאַפָּק` (ישעיהו מב:יד) | [equivalent] | The psalmist asks God not to be silent; the oracle says it never was. |
| o.ii.37′ | *urkiūte lū kî pāniūte* | `הָאַחֲרוֹנוֹת יִהְיוּ כָּרִאשׁוֹנוֹת` | `הָרִאשֹׁנוֹת הִנֵּה בָאוּ; וַחֲדָשׁוֹת אֲנִי מַגִּיד` (ישעיהו מב:ט); `אַל תִּזְכְּרוּ רִאשֹׁנוֹת` (ישעיהו מג:יח) | [divergence] | Same word pair, opposite message: return to the old order vs. the new thing. |
| o.ii.38′ | *Nabu bēl qar-ṭuppi* | `נָבוּ, אֲדוֹן הַקֻּלְמוֹס` | `וְקֶסֶת הַסֹּפֵר בְּמָתְנָיו` (יחזקאל ט:ב) | [equivalent] | |
| o.ii.40′ | *Baya mār Arbail* ({mi₂}) | `בָּיָא, בן ארבאיל` | `וְנִבְּאוּ בְּנֵיכֶם וּבְנוֹתֵיכֶם` (יואל ג:א); `אֶל חֻלְדָּה הַנְּבִיאָה` (מלכים ב כב:יד) | [equivalent] | Prophets of both sexes; Bayâ is "son" with the female determinative. |
| o.iii.5′ | Ilussa-amur "I have seen her divinity" | `אִילוּסָּא־אָמוּר` | `אַתָּה אֵל רֳאִי` (בראשית טז:יג) | [equivalent] | A name from seeing the deity. |
| o.iii.9′–10′ | Libbi-ali, Ninua, Kalḫa, Arbail | `בָּעִיר הַפְּנִימִית, נִינְוֵה, כֶּלַח, ארבאיל` | `וַיִּבֶן אֶת נִינְוֵה וְאֶת רְחֹבֹת עִיר וְאֶת כָּלַח` (בראשית י:יא) | [equivalent] | |
| o.iii.11′–12′; iii 19′–20′; iv 15–16 | *ūmāti arkūte šanāti dārāte* | `יָמִים אֲרוּכִּים, שְׁנוֹת נֶצַח` | `לְמַעַן יַאֲרִיךְ יָמִים עַל מַמְלַכְתּוֹ הוּא וּבָנָיו` (דברים יז:כ) | [equivalent] | |
| o.iii.15′ | *sabsūbtaka* | `מיילדתך` | `כִּי-אַתָּה גֹחִי מִבָּטֶן` (תהלים כב:י); `מִמְּעֵי אִמִּי אַתָּה גוֹזִי` (תהלים עא:ו) | [equivalent] | God as midwife. |
| o.iii.17′ | *mušēniqtaka* | `מינקתך` | `וְשָׂרוֹתֵיהֶם מֵינִיקֹתַיִךְ` (ישעיהו מט:כג); `כַּאֲשֶׁר יִשָּׂא הָאֹמֵן אֶת הַיֹּנֵק` (במדבר יא:יב) | [cognate] (*enēqu* Š / Hiphil of ינק) | Moses refuses the nurse's role; the goddess takes it. |
| o.iii.21′–22′ | *kussāka … uktīn* | `את כסאך … כוננתי` | `וְכֹנַנְתִּי אֶת כִּסֵּא מַמְלַכְתּוֹ עַד עוֹלָם` (שמואל ב ז:יג); `גַּם-בְּנֵיהֶם עֲדֵי-עַד יֵשְׁבוּ לְכִסֵּא-לָךְ` (תהלים קלב:יב) | [cognate] ×2 (*kussû*, *kânu*); [divergence] | "Forever" vs. "long days, everlasting years"; Ps 132:12's condition vs. the oracle's unconditional gift. |
| o.iii.24′ | *ina qabli šamê* | `בחצי השמיים` | `וַיַּעֲמֹד הַשֶּׁמֶשׁ בַּחֲצִי הַשָּׁמַיִם` (יהושע י:יג) | [equivalent] | |
| o.iii.25′–27′ | *nūr ša ilmēši … ušanamāra* | `אור של ענבר … אאיר` | `עָרַכְתִּי נֵר לִמְשִׁיחִי` (תהלים קלב:יז); `לְמַעַן הֱיוֹת נִיר לְדָוִיד עַבְדִּי כָּל הַיָּמִים לְפָנַי` (מלכים א יא:לו); `כְּעֵין הַחַשְׁמַל` (יחזקאל א:ד) | [equivalent] (*nūru* is also the cognate of `נֵר`); [cognate?] *elmēšu* / `חַשְׁמַל` | The light the deity sets before the king; Ezekiel's ḥašmal = *elmēšu* (LXX ἤλεκτρον). |
| o.iii.28′ | *kî agê ša kaqqidīya* | `כעטרת ראשי` | `וְהָיִית עֲטֶרֶת תִּפְאֶרֶת בְּיַד יְהוָה` (ישעיהו סב:ג); `יִצְּרֶנְהוּ כְּאִישׁוֹן עֵינוֹ` (דברים לב:י) | [equivalent] | |
| o.iii.32′ | *lā aslika* | `לא רימיתיך` | `לֹא אִישׁ אֵל וִיכַזֵּב` (במדבר כג:יט); `אִם-לְדָוִד אֲכַזֵּב` (תהלים פט:לו) | [equivalent] | |
| o.iv.2 | *lā ubâška* | `לא אוביש[ך]` | `אֲשֶׁר לֹא יֵבֹשׁוּ קוָֹי` (ישעיהו מט:כג); `לֹא תֵבֹשׁוּ וְלֹא תִכָּלְמוּ` (ישעיהו מה:יז); `הֵן יֵבֹשׁוּ וְיִכָּלְמוּ כֹּל הַנֶּחֱרִים בָּךְ` (ישעיהו מא:יא) | [cognate] *bâšu* / `בוש` | Deutero-Isaiah's "shall not be ashamed", same root, same genre. |
| o.iv.3–4 | *nāru ina tuqunni ušebbarka* | `את הנהר בתיקון אעבירך` | `כִּי תַעֲבֹר בַּמַּיִם אִתְּךָ אָנִי` (ישעיהו מג:ב); `לְהַעֲבִיר אֶת הַמֶּלֶךְ אֶת הַיַּרְדֵּן` (שמואל ב יט:טז) | [cognate] *ebēru* Š / Hiphil of עבר; [equivalent] | David brought back across the Jordan after his son's revolt; Esarhaddon across the Tigris after his brothers'. Our proposal. |
| o.iv.6 | *mār Mullissi* | `בֶּן מוּלִּיסּוּ` | `אֲנִי אֶהְיֶה לּוֹ לְאָב וְהוּא יִהְיֶה לִּי לְבֵן` (שמואל ב ז:יד) | [divergence] | The king as son of a goddess-mother, not of a father-god. |
| o.iv.7–10 | *hangaru akku ina qātēya* | `פגיון זועם בידיי` | `אִם שַׁנּוֹתִי בְּרַק חַרְבִּי וְתֹאחֵז בְּמִשְׁפָּט יָדִי` (דברים לב:מא) | [equivalent] | |
| o.iv.12–13 | *kāsu ša malû qīlte, kalappu ša 2 šiqli* | `כוס אשר מלאה אַשְׁלָג, כֵּילַף של שני שקלים` | `כּוֹס זָהָב בָּבֶל בְּיַד יְהוָה` (ירמיהו נא:ז); `מַפֵּץ אַתָּה לִי כְּלֵי מִלְחָמָה` (ירמיהו נא:כ); `הוֹי אַשּׁוּר שֵׁבֶט אַפִּי` (ישעיהו י:ה); `הֲיִתְפָּאֵר הַגַּרְזֶן עַל הַחֹצֵב בּוֹ` (ישעיהו י:טו); `בְּכַשִּׁיל וְכֵילַפּוֹת יַהֲלֹמוּן` (תהלים עד:ו) | [equivalent]; [cognate] *kāsu* / `כּוֹס`, *kalappu* / `כֵּילַפּוֹת`, *šiqlu* / `שֶׁקֶל` | The king (or the empire) as a cup and a tool in the deity's hand. Our proposal. |
| o.iv.19 | *arītka deʾiqtu anāku* | `מָגִנְּךָ הַנָּאֶה אָ[נוֹכִי]` | `אַל תִּירָא אַבְרָם אָנֹכִי מָגֵן לָךְ` (בראשית טו:א); `וְאַתָּה יְהוָה מָגֵן בַּעֲדִי` (תהלים ג:ד); `כִּי לַיהוָה מָגִנֵּנוּ; וְלִקְדוֹשׁ יִשְׂרָאֵל מַלְכֵּנוּ` (תהלים פט:יט) | [equivalent]; [divergence] (Ps 89: the king is the shield) | The closest parallel of the corpus. The final *anāku* is restored. |
| o.iv.22–24 | *ḫissatka ḫassāku artâmka adanniš* | `את זכרך זוכרת אני; אהבתיך מא[וד]` | `גַּם אֵלֶּה תִשְׁכַּחְנָה וְאָנֹכִי לֹא אֶשְׁכָּחֵךְ` (ישעיהו מט:טו); `וַאֲנִי אֲהַבְתִּיךָ` (ישעיהו מג:ד); `וּזְכַרְתַּנִי וְלֹא תִשְׁכַּח אֶת אֲמָתֶךָ` (שמואל א א:יא) | [equivalent] | *ḫasāsu* is not a cognate of זכר (*zakāru* is). |
| o.iv.26–28 | *ina kizirtīka ina šamê rabiūti ukâlka* | `בקווצתך בשמיים הגדולים אחזיקך` | `וַיִּקָּחֵנִי בְּצִיצִת רֹאשִׁי; וַתִּשָּׂא אֹתִי רוּחַ בֵּין הָאָרֶץ וּבֵין הַשָּׁמַיִם` (יחזקאל ח:ג); `אֲשֶׁר הֶחֱזַקְתִּיךָ מִקְצוֹת הָאָרֶץ` (ישעיהו מא:ט) | [equivalent] | Held by a lock of hair between earth and heaven. Our proposal. |
| o.iv.29–32 | *qutru uqattar … išātu ušāhaz* | `קיטור אקטיר … אש אבעי[ר]` | `וְהִנֵּה תַנּוּר עָשָׁן וְלַפִּיד אֵשׁ` (בראשית טו:יז); `וַיהוָה הֹלֵךְ לִפְנֵיהֶם יוֹמָם בְּעַמּוּד עָנָן` (שמות יג:כא) | [cognate] *qutru* / `קיטור`, *išātu* / `אֵשׁ`; [equivalent] | Smoke and fire around the protected one. |
| o.v.3–4 | *kakkišāti pušhāti* | `את החולדות, העכברים` | `הַחֹלֶד וְהָעַכְבָּר וְהַצָּב לְמִינֵהוּ` (ויקרא יא:כט) | [equivalent] | The same pair of small vermin. |
| o.v.5 | *ša idabbabūni* | `אשר מדברים` | `כִּי דִבֶּר סָרָה עַל יְהוָה אֱלֹהֵיכֶם` (דברים יג:ו) | [equivalent] | "Speaking" = plotting. |
| o.v.7 | *ubattaqšunu* | `אבתקם` | `וּבִתְּקוּךְ בְּחַרְבוֹתָם` (יחזקאל טז:מ) | [cognate] (D / Piel) | |
| o.v.10 | Issar-beli-daʾʾini "Ištar, my lord, strengthen me!" | `אִשְׁתַּר־בֵּלִי־דַּאִינִי` | `וַיִּתְחַזֵּק דָּוִד בַּיהוָה אֱלֹהָיו` (שמואל א ל:ו) | [equivalent] | A prayer as a name. |
| o.v.11 | *šēlūtu ša šarri* | `הַנְּדוּרָה של המלך` | `וּנְתַתִּיו לַיהוָה כָּל יְמֵי חַיָּיו` (שמואל א א:יא) | [equivalent] | Dedicated by the king, not by a mother. |
| o.v.13 | *ana ummi šarri* | `אל אם המלך` | `וַיָּשֶׂם כִּסֵּא לְאֵם הַמֶּלֶךְ וַתֵּשֶׁב לִימִינוֹ` (מלכים א ב:יט); `וַיְסִרֶהָ מִגְּבִירָה` (מלכים א טו:יג); `אֱמֹר לַמֶּלֶךְ וְלַגְּבִירָה` (ירמיהו יג:יח) | [equivalent] | The queen mother (Naqia / Zakutu). |
| o.v.14–20 | the mother's appeal for her younger son | `על אשר פָּנִית אֵלַי … יוצא חלציי – בַּשָּׂדֶה הִנְדַּדְתְּ!` | `כִּי שְׁלֹמֹה בְנֵךְ יִמְלֹךְ אַחֲרָי` (מלכים א א:יז) | [equivalent] | A queen mother pleads for her younger son against his elder brothers. Our proposal. |
| o.v.19 | *ṣīt libbīya* | `יוצא חלציי` | `כִּי אִם אֲשֶׁר יֵצֵא מִמֵּעֶיךָ הוּא יִירָשֶׁךָ` (בראשית טו:ד); `כִּי אִם בִּנְךָ הַיֹּצֵא מֵחֲלָצֶיךָ` (מלכים א ח:יט) | [equivalent] | Said by a mother here, by fathers in the Bible. |
| o.v.20 | *ṣēru tussarpīdi* | `בַּשָּׂדֶה הִנְדַּדְתְּ` | `הִנֵּה אַרְחִיק נְדֹד; אָלִין בַּמִּדְבָּר` (תהלים נה:ח) | [equivalent] | Not Cain's `נָע וָנָד` (Gen 4:12): the root נוד avoided on purpose. |
| o.v.22–23 | *šarrūtu ikkû danānu ikkûma* | `המלכות – שלך, העוז – שלך הוא!` | `לְךָ יְהוָה הַגְּדֻלָּה וְהַגְּבוּרָה … לְךָ יְהוָה הַמַּמְלָכָה` (דברי הימים א כט:יא) | [equivalent] | There they belong to God; here the goddess gives them to the king. |
| o.v.26 | *šulmu ana Aššur-ahu-iddina šar Mat-Aššur* | `שָׁלוֹם לְאֵסַרְחַדּוֹן מֶלֶךְ אַשּׁוּר` | `הַנָּבִיא אֲשֶׁר יִנָּבֵא לְשָׁלוֹם` (ירמיהו כח:ט); `וַיֹּאמֶר אֶל הַמֶּלֶךְ שָׁלוֹם` (שמואל ב יח:כח) | [cognate] *šulmu* / `שָׁלוֹם`; [equivalent] | "Prophesying peace" is the genre; the runner brings "Shalom" to the king in the city after the battle with his rebel son (with v 28–30). |
| o.v.29 | *šulmu ana mūrīša* | `שלום לְעֶגְלָהּ` | `וְאֶפְרַיִם עֶגְלָה מְלֻמָּדָה` (הושע י:יא); `כְּעֵגֶל לֹא לֻמָּד` (ירמיהו לא:יז); `הֲבֵן יַקִּיר לִי אֶפְרַיִם` (ירמיהו לא:יט) | [equivalent] | The people (here: the king) as the deity's calf. |
| o.vi.3–6 | *ina ṭāb … ḫabūnšu tumallûni* | `בטוב … את חָצְנוֹ מילאה` | `וְחִצְנוֹ מְעַמֵּר` (תהלים קכט:ז); `גַּם חָצְנִי נָעַרְתִּי` (נחמיה ה:יג) | [equivalent] | |
| o.vi.7–12 | *dabābu pāniu … ūmâ ina muhhi urkî tazzaz* | `הדיבור הראשון … עתה על האחרון תעמוד` | `הָרִאשֹׁנוֹת הִנֵּה בָאוּ; וַחֲדָשׁוֹת אֲנִי מַגִּיד` (ישעיהו מב:ט) | [equivalent] | Earlier fulfilled words vouch for the later ones. |
| o.vi.14–17 | *kî ūmu išîṣūni zīqāti lukillu* | `כאשר היום רָפָה, מַשּׂוּאוֹת יחזיקו` | `הִנֵּה נָא רָפָה הַיּוֹם לַעֲרוֹב` (שופטים יט:ט); `וַיְהִי הַשֶּׁמֶשׁ בָּאָה וַעֲלָטָה הָיָה; וְהִנֵּה תַנּוּר עָשָׁן וְלַפִּיד אֵשׁ` (בראשית טו:יז) | [equivalent] | A torch at sundown, as in the Gen 15 night. |
| o.vi.19 | *nirriṭu* | `את הרטט` | `וְרֶטֶט הֶחֱזִיקָה` (ירמיהו מט:כד) | [cognate] | |
| o.vi.22–24 | *aklu taqnu takkal mê taqnūti tašatti* | `לחם מְתֻקָּן תאכל, מים מְתֻקָּנִים תשתה` | `לַחְמוֹ נִתָּן מֵימָיו נֶאֱמָנִים` (ישעיהו לג:טז); `וַאֲכַלְתֶּם לַחְמְכֶם לָשֹׂבַע וִישַׁבְתֶּם לָבֶטַח בְּאַרְצְכֶם` (ויקרא כו:ה) | [equivalent]; [cognate] *akālu* / `אָכַל`, *šatû* / `שָׁתָה` | Bread and water made safe. |
| o.vi.27 | *mārka mār marʾīka* | `בִּנְךָ וּבֶן בִּנְךָ` | `הוּא וּבָנָיו בְּקֶרֶב יִשְׂרָאֵל` (דברים יז:כ) | [equivalent] | = SAA 9 2 ii 13′. |
| o.vi.29 | *ina burki ša Inurta* | `עַל בִּרְכֵּי נִינוּרְתָּה` | `גַּם בְּנֵי מָכִיר בֶּן מְנַשֶּׁה יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (בראשית נ:כג); `וְתֵלֵד עַל בִּרְכַּי` (בראשית ל:ג); `וְעַל בִּרְכַּיִם תְּשָׁעֳשָׁעוּ` (ישעיהו סו:יב) | [cognate] *burku* / `בֶּרֶךְ`; [equivalent] | "On the knees" = acknowledged, adopted, legitimate. Our proposal. |
| o.vi.28–30 | *šarrūta … uppaš* | `מלכות … יעשו` | `אַתָּה עַתָּה תַּעֲשֶׂה מְלוּכָה עַל יִשְׂרָאֵל` (מלכים א כא:ז) | [equivalent] | The same idiom: "do kingship" = rule. |
| (whole text) | the promise without condition | – | `אִם-יִשְׁמְרוּ בָנֶיךָ בְּרִיתִי … גַּם-בְּנֵיהֶם עֲדֵי-עַד יֵשְׁבוּ לְכִסֵּא-לָךְ` (תהלים קלב:יב) | [absent] | No covenant, no law, no sin, no condition in S01; the only reproach is vi 9 ("you did not stand on the first word"). |

### Key findings
**Bible**
1. **Genesis 15 in one Assyrian tablet.** The elements of Gen 15:1–17 – "fear not", "I am", "your shield", the heir "who comes out of your body", the smoke and the fire torch at sunset – are all in SAA 9 1, though spread over several oracles: `אל תירא` (9×), `אנוכי`, `מָגִנְּךָ הַנָּאֶה אָנֹכִי` (iv 19), `יוֹרֵשׁ נֶאֱמָן` (iv 5, 20), `יוצא חלציי` (v 19), `קיטור … אש` (iv 30–32), `כאשר היום רפה, משואות יחזיקו` (vi 14–17). Only the shield is lexically close (*arītu* = `מָגֵן`, a rare word in both languages); the rest is shared motif. For the commentary this is the strongest control on Gen 15:1's *why exactly these words*: they are the words of the royal salvation oracle of the 7th century.
2. **"Make you trust" (D of *takālu*) = the Rabshakeh's `יַבְטַח`** (2 Kgs 18:30): the Assyrian envoy uses against Hezekiah's God the very verb with which Assyria's own prophets gave their king confidence (ii 8′, iii 30′–iv 1). And Ps 22:10 joins the same Hiphil (`מַבְטִיחִי`) to God as midwife – exactly the pair of iii 15′ (midwife) and iv 1 (made you trust).
3. **The goddess as midwife, wet-nurse, carrier** (ii 32′, iii 15′–18′): Isa 46:3, 49:23, Num 11:12 (Moses refuses to be the nurse; here the deity accepts), Hos 11:1–3, Ps 22:10, 71:6. *mušēniqtu* / `מֵינֶקֶת` is a true cognate (Š / Hiphil of the same root).
4. **"The latter like the former"** (ii 37′) uses Deutero-Isaiah's own pair (`רִאשֹׁנוֹת` / `אַחֲרוֹנוֹת`, `חֲדָשׁוֹת`) with the opposite message: continuity of the old order vs. the new thing (Isa 42:9; 43:18). [divergence], and a clean one.
5. **The king (or the empire) as a vessel and a tool in the deity's hand** (iv 12–13 "cup filled with lye, axe of two shekels"): Isa 10:5, 15 (Assyria as rod and axe), Jer 51:7, 20 (Babylon as God's cup and war club). *kalappu* is the cognate of the hapax `כֵּילַפּוֹת` (Ps 74:6).
6. **David's return across the Jordan** (2 Sam 19:16, 19) after his son's revolt, with `לְהַעֲבִיר אֶת הַמֶּלֶךְ` – the same verb (*ebēru* Š) as iv 4 `אעבירך`, said to a king returning across a river after his brothers' revolt. And the runner's "Shalom" to the king in the city after the battle (2 Sam 18:28) as a frame for v 26–30. Our proposals.
7. **The queen mother pleading for her younger son against his elder brothers** (v 13–20) ↔ Bathsheba for Solomon (1 Kgs 1:17; 2:19 "and she sat at his right" – cf. "those of the right and of the left", v 15–16). Our proposal.
8. **"On the knees of Ninurta"** (vi 29) ↔ `יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (Gen 50:23), `וְתֵלֵד עַל בִּרְכַּי` (Gen 30:3): the knees as the place of acknowledgement and adoption. Our proposal.
9. **The idiom *šarrūta epēšu* = `עָשָׂה מְלוּכָה`** (1 Kgs 21:7): kept literally (`מלכות … יעשו`), so that the Hebrew idiom is visible.
10. **Held by the lock of hair between earth and heaven** (iv 26–28) ↔ Ezek 8:3. Our proposal.
11. **Bel and Nabû speak in the same oracle** (1.4) – the pair that Isa 46:1–2 shows bowing and carried off as idols.
12. **[absent]:** no covenant, no law, no sin, no condition; the god's promises to the Davidic king are conditional in Ps 132:12, those of Ištar to Esarhaddon are not. The single reproach (vi 7–9) concerns trust, not conduct.
13. **Rank-3 corrections:** Parpola's "have no fear" and "fear not" are one formula; "given you faith" is the causative "made you trust"; "my king" (iii 30′, v 21) has no "my" on the tablet; "(Even as) I speak" renders a bare subjunctive; "the lamp" is *nūru* "light"; vi 9 is a statement on the tablet (Parpola makes it a question). None of these manufactured a Bible parallel, but "given you faith" hides the link to 2 Kgs 18:30.

**The ancient mind**
1. **A deity who is a mother, and also a warrior.** The same goddess is midwife, wet-nurse and protective mother (ii 32′, iii 15′–18′, iv 22–28), and flays the enemies, cuts them to pieces, holds an "angry dagger" (i 19′, iv 7–10, v 7). The king is her calf (v 29), and she is a cow who goes out to the steppe and sends greetings to the calf in the city.
2. **Prophecy as a service, written down.** Each oracle is a short report "from the mouth of" a named person and city, collected on one tablet by the palace scribes – the ancestor of Jer 36's `מִפִּי יִרְמְיָהוּ`. Six of the eight named prophets carry the female determinative; one (Bayâ) is called "son"; one (Issar-beli-daʾʾini) is "the king's votaress", a woman the king dedicated to the temple.
3. **Names as prayers and memories:** "Ištar, do not neglect (me)!", "I have seen her distress", "I have seen her divinity", "Ištar, my lord, strengthen me!", "Sister of her father", "He does not see god". The parents' hopes and visions are in the names of the people who became the goddess's mouth.
4. **The anxieties of a king after a murder in the palace:** enemies rolling like windfall apples; paralysis and "woe" (i 25′–26′); a promise of safe bread and safe water in his own palace (vi 22–26, poison and sorcery); trembling banished from the palace (vi 19–21); "do not trust in mankind" (ii 27′) in a civil war in which courtiers and troops change sides.
5. **The gods' divided favour within the family:** the queen mother's complaint (v 14–20) accuses the goddess of having taken the other sons into her lap and sent her own son roaming the steppe – a mother's grief and a political claim at once. The answer turns from the mother to the son: "Now, king, fear not!"
6. **Reciprocity:** the goddess asks for praise (ii 33′, 39′; vi 13, 18), and for a ritual at nightfall with torches before the people (vi 14–18): the oracle is a gift that asks for a return.
7. **The Assyrian cosmos of the oracle:** sixty great gods at a royal birth (sixty = Anu's number, the whole council), Sin and Šamaš at the right and left, the goddess in a golden chamber in the middle of heaven, lighting a lamp of *elmēšu* before the king, holding him by a lock of hair in the sky.

### Open decisions
1. **i 1′–3′** before the double ruling: an unnumbered section ("end of a lost oracle, or the heading of the collection?"). If Parpola's 1.1 includes these lines (not checked: no copy of the printed edition), the heading should say so.
2. **The boundaries 1.6/1.7 and 1.9/1.10** lie in the lost ends of columns iv and v; Parpola's numbering is followed, and the headings say that the boundary is in the break.
3. **ii 33′, 39′ *naʾʾidāni*** (plene *-da-a-ni*): read as singular `הללני` (with Parpola and the adjacent singular), though the form could be a plural `הללוני` addressed to the audience; vi 13 has the singular spelling *naʾʾidanni*.
4. **`פִּגְיוֹן` for *ḫangāru*** (iv 7) collides with Gudea's `לשון הפגיון` (Sum. *ĝiri₂* = Akk. *patru*); alternatives `שֶׁלַח` (2 Chr 23:10 "each with his weapon in his hand") or keeping `פגיון` and noting the overlap.
5. **`חֹצֶן` for *ḫabūnu*** (vi 5) collides with *utlu* = `חוצן` (LH epilogue; love song LAOS 4 13). Alternatives: *ḫabūnu* = `חֵיק` (Isa 65:7, Ps 79:12 "into their bosom") and *sūnu* (v 17) another word; or `חָזֶה`.
6. **`עלז` for *rīšu* / *rāšu*** (ii 11′–12′): Ludlul III 97 has an italic *`עִלְּזָהּ`* for *ḫelû* D. Minor.
7. ***elmēšu*** (iii 25′): `עִנְבָּר` against the probable cognate `חַשְׁמַל` (Ezek 1:4), rejected because "light of ḥašmal" reads as "electric light" in modern Hebrew. The user may prefer the cognate with a note.
8. ***kizirtu*** (iv 26): `קְוֻצָּה`; `צִיצִת (רֹאשׁ)` would put Ezek 8:3 into the translation itself.
9. **vi 9** read as a statement (Parpola: a question).
10. **The `תקן` gate**: *tuqnu* (iv 3, `בתיקון`) is the same family but not in the gate's licence list; the coordinator may add *tuqnu* / *tuqunni* so that `תיקון` is gated too (it passes now only because `תיקון` does not match the gate's patterns).
11. **`../renderings.md` §3a "*akalu* = `לֶחֶם` [cognate]"**: *akalu* is from *akālu* "eat" (= `אָכַל`), not a cognate of `לֶחֶם`; the tag should move to *akālu* / `אָכַל`.

### Deviations from the corpus renderings (with reasons)
- **i 33′ *ina bēt rēdûtēka*** = `[בְּ]בֵית הַיְּרוּשָּׁה שֶׁלְּךָ`, not the brief's `בֵּית יְרֻשָּׁתְךָ`: EST's institution name `בֵּית הַיְּרוּשָּׁה` (renderings §0) is kept whole, and the verify formula for *bēt rēdût-* requires the string `בית הירושה`.
- **i 10′ *ittangarāru*** = `יתגלגלו` (future: Ntn present), against the table's citation form `הִתְגַּלְגְּלוּ`; same verb.
- **ii 27′, ii 29′** follow the renderings' Hebrew order (`אַל תִּבְטַח בָּאֱנוֹשׁוּת`, `הַבֵּט אֵלַי`), although the tablet puts the prepositional phrase first; noted in the entries.
- **v 22–23** = `הַמַּלְכוּת – שֶׁלְּךָ,` / `הָעֹז – שֶׁלְּךָ הוּא!`: the renderings' string with dashes, split over the two tablet lines.
- **vi 28–30** = `מלכות / עַל בִּרְכֵּי נִינוּרְתָּה / יעשו.`: the renderings' `יַעֲשׂוּ מַלְכוּת` in the tablet's order (object first, verb last), over three lines.
- Plene forms of vocalized table strings: `אנוכי` (vocalized `אָנוֹכִי`), `ארוכים`, `מיילדתך`, `מינקתך`, `עימך`, `מְתֻקָּן` kept vocalized.

### Proposals for the corpus renderings
New shared words fixed in S01 (exact strings as used; the later translators will meet most of them in SAA 9 2–11):
- ***šarrūta epēšu*** "exercise kingship" = **`מַלְכוּת … עָשָׂה`** (vi 28–30 `מלכות … יעשו`; ↔ `תַּעֲשֶׂה מְלוּכָה`, 1 Kgs 21:7); object first where the tablet has it first.
- ***pušḫu*** (the second animal, with *kakkišu* `חֻלְדָּה`) = **`עַכְבָּר`** (v 4 `העכברים`; ↔ `הַחֹלֶד וְהָעַכְבָּר`, Lev 11:29).
- ***qâlu*** "be silent" (stative) = **`דּוֹמֵם`** (ii 36′ `ואנוכי דומם?`; root as Gilgameš X `אֶדּוֹם`).
- ***ṣēru*** = **`שָׂדֶה`** (v 20 `בַּשָּׂדֶה`, v 28 `לשדה`).
- ***rapādu*** Š "make roam" = **`הִנְדִּיד`** (v 20 `הִנְדַּדְתְּ`); G stays Gilgameš's `שׁוֹטֵט`; never `נָד` / `הֵנִיד`.
- ***mūru*** = `עֵגֶל` (v 29 `לְעֶגְלָהּ`), as renderings §3.
- ***agû*** = **`עֲטֶרֶת`** (iii 28′; = Sum. *aga* `עטרת` in Enki and the World Order).
- ***nūru*** = **`אוֹר`**, *nawāru* Š = **`הֵאִיר`** (iii 25′–27′ `אור של ענבר … אאיר`); ***elmēšu*** = **`עִנְבָּר`** (decision 7).
- ***maštaku*** / NA *massiku* = **`חֶדֶר`** (iii 23′ `בחדר של זהב`).
- ***ina qabli šamê*** = **`בַּחֲצִי הַשָּׁמַיִם`** (iii 24′); *qablu* "loins" = `מָתְנַיִם` (ii 26′).
- ***ḫarādu*** = `שָׁקַד` (ii 20′, iii 24′; with a suffix `אשקוד עליו`, iii 29′).
- ***šubšû*** (of a birth) = **`הֵבִיא לִכְלַל הֲוָיָה`** (ii 21′ `הביאתך לכלל הוויה`; the creation-corpus verb).
- ***60 ilāni rabûti*** = **`שִׁשִּׁים הָאֵלִים הַגְּדוֹלִים`** (ii 22′, 25′).
- ***Sin ina imittīka Šamaš ina šumēlīka*** = **`סִין לימינך, שַׁמַשׁ לשמאלך`** (ii 24′); *ina imitti / šumēli* "at the right / left" = `לִימִין / לִשְׂמֹאל`.
- ***rakāsu qabla*** = **`חָגַר מָתְנַיִם`** (ii 26′); *rakāsu* otherwise `קָשַׁר` (EST).
- ***matāḫu (ēnātī)*** = **`הֵרִים (עֵינַיִם)`** (ii 28′ `הרם את עיניך`), kept apart from *našû* `נָשָׂא` (ii 32′ `נשאתיך`).
- ***rīšu*** / *rāšu* "rejoice" = **`עָלֵז`** (ii 11′–12′ `עלזה אני … עלזה ארבאיל`; decision 6).
- ***salāʾu*** "deceive" = **`רִמָּה`** (iii 32′ `לא רימיתיך`).
- ***bâšu*** D = **`הוֹבִישׁ`** (iv 2 `לא אוביש[ך]`) [cognate].
- ***ebēru*** Š = **`הֶעֱבִיר`** (iv 4 `אעבירך`) [cognate]; ***nāru*** = `נָהָר`; ***tuqnu*** = **`תִּקּוּן`** (iv 3 `בתיקון`).
- ***qatû*** D = **`חִסֵּל`** (iv 10 `אחסל`), kept apart from *gamāru* `כִּלָּה`.
- ***ḫangāru*** = `פִּגְיוֹן` (iv 7; decision 4); ***aggu*** = `זוֹעֵם`.
- ***kāsu*** = `כּוֹס`; ***qiltu*** = **`אַשְׁלָג`**; ***kalappu*** = **`כֵּילַף`** [cognate]; ***šiqlu*** = `שֶׁקֶל` (iv 12–13).
- ***ḫissatu*** / ***ḫasāsu*** = **`זֵכֶר`** / **`זָכַר`** (iv 22–23 `את זִכְרְ[ךָ] זוכרת [אני]`); not cognates (*zakāru* is).
- ***kizirtu*** = **`קְוֻצָּה`** (iv 26 `בקווצתך`).
- ***kullu*** = **`הֶחֱזִיק`** (iv 28 `אחזיקך`, vi 17 `יחזיקו`); never `אָחַז` (*aḫāzu*).
- ***aḫāzu*** Š (fire) = **`הִבְעִיר`** (iv 32).
- ***kasāpu*** = **`פָּתַת`** (i 7′ `לֹא פָּתַתִּי`), as Gilgameš.
- ***kâṣu*** D = **`הִפְשִׁיט`** (i 19′ `אַפְשִׁיט`).
- ***mungu*** = **`נוּקְשׁוּת`** (i 25′ `בתוך הנוקשות`).
- ***dibbu*** pl. = `דְּבָרִים` (i 15′ `אילו מדבריי`); ***ayyu*** = `אֵיזֶה`, pl. `אֵילוּ`.
- ***ina muḫḫi izuzzu*** "rely on" = **`עָמַד עַל`** (i 17′ `שעליהם לא עמדת?`, vi 9 `עליו לא עמדת`, vi 12 `על האחרון תעמוד`).
- ***pānātu*** / ***kutallu*** = **`לִפְנֵי`** / **`מֵאֲחוֹרֵי`** (i 22′–23′ `לפניך ומאחוריך`).
- ***qarābu*** = **`קְרָב`** [cognate] (ii 6′); ***ēdēnû*** = `אֶחָד` (ii 7′).
- ***ašbu*** (stative, "sit idle") = **`יוֹשֵׁב / יוֹשֶׁבֶת (אֲנִי)`** (ii 8′).
- ***gušūru*** = **`קוֹרָה`** (ii 19′ `קורות ליבך`; = Sum. *ad* `קורות` in Gudea).
- ***ṣeḫru*** = `קָטָן` (ii 32′ `קטן היית`).
- ***maḫāru*** "receive" = `קִבֵּל` (v 2); "appeal to" = **`פָּנָה אֶל`** (v 14 `על אשר פָּנִית אֵלַי`).
- ***dabābu*** "plot" = `דִּבֵּר` (v 5 `אשר מדברים`), the verb alone.
- ***atti attīma*** = **`אַתְּ – אַתְּ הִיא`**; ***šarru šarrīma*** = **`הַמֶּלֶךְ – מַלְכִּי הוּא`** (v 8–9).
- ***ummi šarri*** = **`אֵם הַמֶּלֶךְ`** (v 13; for SAA 9 2 i 13′ and SAA 9 5).
- ***sūnu*** = **`חֵיק`** (v 17 `בְּחֵיקֵךְ`); ***ḫabūnu*** = `חֹצֶן` (vi 5 `את חָצְנוֹ`; decision 5).
- ***iyû*** / ***ikkû*** (independent possessives) = **`שֶׁלִּי`** / **`שֶׁלְּךָ`** (v 18, 22–23).
- ***birīt āli*** = **`תּוֹךְ הָעִיר`** (v 30); *birti* "between" = `בֵּין` (ii 15′).
- ***ṭābu*** "goodness" (*ina ṭāb*) = **`בְּטוֹב`** (vi 3); ***malû*** D = `מִלֵּא` (vi 6).
- ***šiāṣu*** (of the day) = **`רָפָה`** (vi 15 `כאשר היום רָפָה`).
- ***zīqtu*** "torch" = **`מַשּׂוּאָה`** (vi 16 `מַשּׂוּאוֹת`), since `לַפִּיד` and `אֲבוּקָה` are both *dipāru* in the earlier corpora.
- ***nirriṭu*** = `רֶטֶט`, *aṣû* Š = `הוֹצִיא` (vi 19–21), as renderings §3a.
- ***dannu*** = **`עַז`** (i 1′ `עַזָּה`; iv 34 `עַ[זָּה?]`), with *danānu* = `עֹז`; ***rapšu*** = `רָחָב` (i 2′).
- ***šar mātāti*** = **`מֶלֶךְ הָאֲרָצוֹת`** (i 4′).
- ***šēlūtu ša šarri***, ***bēl qar-ṭuppi***, the prophets' names, ***Libbalaya*** = `מן העיר הפנימית`: as renderings §1–§2.
- **The prophets' names translated** (first note in each colophon): Issar-la-tašiyaṭ "Ištar, do not neglect (me)!"; Sinqiša-amur "I have seen her distress"; Remute-Allate "the gift (grace) of Allatu"; Bayâ (hypocoristic, unclear); Ilussa-amur "I have seen her divinity"; Issar-beli-daʾʾini "Ištar, my lord, strengthen me!"; Ahat-abiša "Sister of her father"; La-dagil-ili "He does not see god".
- **Gate suggestion:** add *tuqnu* / *tuqunni* to the `תקן` licence (decision 10).
