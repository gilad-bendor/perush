# Renderings – the Hurro-Hittite and Old Anatolian myths (`מיתוסים-חתיים-וחוריים/`)

Fixed 2026-10-30 by the Round 5 run 2 coordinator, **before the first line**. Binding for every text of this corpus (keys
IL, HE, KU, UL, SR, ZA, AP, EL, TE of `tools/hittite_tools.py`), on top of:
- `translation-guidelines.md` (§5.2 the ★ rules; §6.7, especially "The Hittite texts" and the cross-language principles of
  the 2026-10-30 harmonization);
- the Hittite tables of `../חוקים-ובריתות/renderings.md` §7 and **§H2–§H9** and of `../טקסי-שילוח-וטיהור/renderings.md`
  §R1–§R5 and §H2–§H9: **they apply to every Hittite line, these myths included** (the tool reads them);
- the translator brief `../חוקים-ובריתות/translator-brief--hittite.md` and this corpus's addendum
  `translator-brief--myths.md`;
- the fifth-day dossier's rules (`../מיתוסים-אוגריתיים/renderings.md` §11): `נָחָשׁ` is the comparison word for every
  culture's serpent; `תַּנִּין`, `לִוְיָתָן`, `אֱלֹהִים`, `בָּרָא`, `שְׁאוֹל` never in a line.

**The H-tables of this file (§H2–§H9 below) apply only to the myth keys** (`hittite_tools.py` `MYTH_KEYS`): they reserve
words (`בַּעַל`, `צַדִּיק` …) that the Laws use rightly.

## M0. Echo control in this corpus
Hittite is not Semitic, and these myths reached Ḫattuša from the Hurrians (Kumarbi, Ḫedammu, Ullikummi, the Song of
Release), from northern Syria and Canaan (Elkunirša and Ašertu) and from old Anatolia (Illuyanka, Telipinu, Zalpa). Every
contact with Genesis is therefore an [equivalent], a [divergence] or an [absent]; a [cognate] only through a Canaanite
name (*Elkunirša* = `אֵל קֹנֵה אָרֶץ`, Gen 14:19) or an Akkadogram that is the Hebrew word's cognate. The danger of this
corpus is Genesis 1–11's vocabulary (the serpent of the sea, the generations of the gods, the tower to heaven, the
destruction of mankind, the cutting apart of heaven and earth): it is reserved (§H3) or gated (§H4), and the apparatus,
not the translation, shows the comparison. Where the Hittite has the very word, the Hebrew uses the Bible's word and the
note says so (`נָחָשׁ` for MUŠ, `עָרוֹם` for *nekumant-*, `גִּבּוֹר` for UR.SAG, `שָׁמַיִם` and `אֶרֶץ`).

## M1. Names (the human table; the machine table is §H2)
Transcription as the Hittite texts (law renderings §H2): *š* `שׁ`, *ḫ* `ח`, *z* `ז`, *k* `ק`, *t* `ת`, *p* `פּ`, *w* `ו`
(`וו` inside a word), *y* `י`; the HPM editors' normalization (Upelluri, not Ubelluri). Vocalized at the first occurrence in
each file; ★ = always. Biblical places take their biblical form (guidelines §6.4: Nineveh `נִינְוֵה`).

| Source | Hebrew | Note |
|---|---|---|
| {D}10 / {D}IM / {D}U / {D}IŠKUR | `אֵל הַסְּעָרָה` | The Storm-god; in the Hurrian myths he is Teššub, in Elkunirša the Canaanite Baal, in the Old Anatolian myths Tarḫunna: the note says which (as the Laws and the dossier). |
| {D}UTU | `אֵל הַשֶּׁמֶשׁ` | The Sun-god (in the Hurrian myths Šimige; the Sun-goddess of the Earth is `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה`). |
| {D}30 | `אֵל הַיָּרֵחַ` | The Moon-god (Kušuḫ). |
| {D}A.AB.BA, {D}*aruna-* | `אֵל הַיָּם` | The Sea (male in these myths: his daughter, his vizier Impaluri). The common noun A.AB.BA / *aruna-* = `יָם`. |
| {D}Kumarbi | `קוּמַרְבִּי` | The father of the gods (Hurrian; ≈ Kronos, Dagan, El). |
| {D}Anu | `אָנוּ` ★ | (unvocalized "we"; as the Akkadian corpora) |
| {D}Alalu | `אֲלַלוּ` | |
| {D}É.A, {D}A.A | `אֵאָה` | Ea, "the king of wisdom" (as the flood corpus). HPM reads {D}A.A as Ea in CTH 344 and 345. |
| {D}Ellil / {D}EN.LÍL | `אֶנְלִיל` | (as the Akkadian corpora) |
| {D}Tašmišu | `תַּשְׁמִישׁוּ` ★ | (unvocalized "his use") Teššub's brother and vizier. |
| {D}IŠTAR / {D}GAŠAN | `אִשְׁתַּר` | Šauška of Nineveh (the Hittite writes her with Ištar's logogram); never `עַשְׁתֹּרֶת`. |
| {D}Ḫebat | `חֶבַּת` | Teššub's consort. |
| {D}Ninatta, {D}Kulitta | `נִינַתָּה`, `קוּלִיתָּה` | Ištar's musicians. |
| {D}Ḫedammu (MUŠ) | `חֶדַמּוּ` | The sea serpent. |
| {D}Šertapšuruḫi | `שֶׁרְתַּפְּשׁוּרוּחִי` | Daughter of the Sea, Ḫedammu's mother. |
| {D}Ullikummi | `אוּלִּיקוּמִּי` | The stone monster ("destroy Kumme!"). |
| {D}Upelluri | `אוּפֶּלּוּרִי` | The giant who carries heaven and earth. |
| {D}Impaluri | `אִמְפַּלּוּרִי` | The Sea's vizier. |
| {D}Mukišanu | `מוּקִישָׁנוּ` | Kumarbi's vizier. |
| {D}Irširra | `אִירְשִׁירָּה` | The Irširra deities (the nurses). |
| {D}Gulšeš | `גּוּלְשֶׁשׁ` | The fate goddesses (a name: `גּוֹרָל` is reserved in every Hittite line, law §H3). |
| DINGIR.MAḪ | `אֵלַת־הָאֵם`, pl. `אֵלוֹת־הָאֵם` | The mother goddesses. |
| {D}NIN.TU / Ḫannaḫanna | `חַנַּחַנָּה` | "Grandmother" (TE). |
| {D}Kamrušepa | `קַמְרוּשֶׁפָּה` | The goddess of magic (TE). |
| {D}Telipinu | `תֶּלִיפִּינוּ` | |
| {D}Aštabi, {D}Takiti, {D}Šuwaliyatt, {D}Zababa, {D}Išḫara | `אַשְׁתַּבִּי`, `תַּקִּיתִי`, `שׁוּוַלִיַּת`, `זַבַּבָּה`, `אִישְׁחָרָה` | |
| {D}Elkunirša | `אֶלְקוּנִירְשָׁא` | = Canaanite *ʾil qōnê ʾarṣ* "El, creator (owner) of the earth": the note at the first occurrence quotes Gen 14:19 [cognate]; `קֹנֵה` never in a line. |
| {D}Ašertu | `אַשֶּׁרְתּוּ` ★ | (unvocalized "his Asherah / his happiness") = Ugaritic Athirat `אֲתִירַת`, biblical `אֲשֵׁרָה`: never `אֲשֵׁרָה` in a line. |
| MUŠ *illuyanka-* | `הַנָּחָשׁ אִילוּיַנְקָה` / `הַנָּחָשׁ` | As the dossier: *illuyanka-* is the Hittite word "serpent", used as a name. |
| {D}Inara, {m}Ḫupašiya, {m}Kella | `אִינָרָה`, `חוּפַּשִׁיָּה`, `קֶלָּה` | (IL; the dossier's forms) |
| {URU}Kiškilušša | `כִּישְׁכִּילוּשָּׁה` | The dossier's form (written before the *k* `ק` convention; kept for the identity with the dossier). |
| {URU}Ziggaratta, Nerik, Tanipiya, Tarukka, Kaštama | `זִיגָּרָתָּה`, `נֵרִיק`, `תַּנִּיפִּיָּה`, `תַּרוּקָּה`, `קַשְׁתַּמָּה` | |
| {m}Kella / Killa | `קֶלָּה` | The GUDU₁₂-priest of Nerik who tells IL (IL 1, 102, 127). |
| {m}Taḫpurili | `תַּחְפּוּרִילִי` | A GUDU₁₂-priest (IL 108–111). |
| {D}Zaliyanu / Zalinu (mountain and god) | `זַלִיַנוּ` | One Hebrew for both spellings (IL 64–120). |
| {D}Zašḫapuna, {D}Tazzuwaši | `זַשְׁחַפּוּנָה`, `תַּזּוּוַשִׁי` | Zaliyanu's wife and concubine (IL 107–120). |
| {m}Piḫa-LÚ, {m}UR.MAḪ-LÚ | `פִּיחָה־זִיטִי`, `וַלְוַה־זִיטִי` | The colophon's scribe and chief scribe (IL 128; Luwian readings). |
| {URU}Kumme / Kummiya | `קוּמֶּה` ★ | (unvocalized "height, storey") Teššub's city. |
| {URU}Ninuwa / Nenuwa | `נִינְוֵה` | The biblical form (Jonah); Ištar's city. |
| {URU}Abzuwa | `אַבְּזוּוָה` | Ea's abode (the Apsû; a note). |
| {URU}Nippur, {URU}Urkiš, {URU}Duddul(l)a, {URU}Kuzina | `נִפּוּר`, `אוּרְקִישׁ`, `דּוּדּוּלָּה`, `קוּזִינָה` | |
| {ÍD}Aranzaḫ | `אַרַנְזַח` | The Tigris (a note: `חִדֶּקֶל`, Gen 2:14). |
| {ÍD}Māla | `מָלָה` | The Euphrates (a note: `פְּרָת`). |
| {m}Appu | `אַפּוּ` ★ | (unvocalized "his nose / his anger") |
| Appu's sons ḪUL-lu, NÍG.SI.SÁ | `רַע`, `יָשָׁר` (names, no article) | "Wrong" and "Right": `צַדִּיק` is reserved (§H3). Check the transliteration before believing this row. |
| {URU}Zalpa, Kaneš, Neša, Tamarmara | `זַלְפָּה` ★, `קָנֵשׁ`, `נֵשָׁה`, `תַּמַרְמַרָה` | |
| SR: {URU}Ebla, {URU}Ikinkal(i)š, Megi, Zazalla, Purra, Allani; (translator 3:) Pazzanikarri, {URU}Lulluwa, {m}Pizi[…], the gentilic *eplumena-* | `אֶבְּלָה` ★, `אִיקִינְקַלִּישׁ`, `מֶגִי`, `זַזַּלָּה`, `פּוּרָּה` ★, `אַלָּנִי`; `פַּזַּנִיקַרִּי`, `לוּלּוּוָה`, `פִּיזִי[…]`, `בני אֶבְּלָה` | Ebla's king, its orator (son of Pazzanikarri), the captive leader; the Sun-goddess of the Earth (Allani: the Hittite writes only *taknaš* {D}UTU = `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה`; the name `אַלָּנִי` is used in notes only). ★ Ebla ("her mourning") and Purra ("fruitful") always vocalized (§H6). |
| KU/UL (translator 2): {D}Nara, Napšara, Minki, Ammunki, Ammezzadu, Ninlil, Kulkulimma; Mount Kanzura, Mount Tašša; {D}A.GILIM, {D}KA.ZAL, {D}NAM.ḪÉ, {D}EN.KI; the bull Šeri; {URU}Urkiš; the *ikunta* lake; the scribes Ašḫapala, Tarḫuntaššu, LAMMA-SUM, Waršiya, Ziti | `נָרָה`, `נַפְּשָׁרָה`, `מִינְקִי`, `אַמּוּנְקִי`, `אַמֶּזַּדּוּ`, `נִינְלִיל`, `קוּלְקוּלִימָּה`; `הַר קַנְזוּרָה`, `הַר תַּשָּׁה`; `אַ־גִּילִים`, `קַזַל`, `שֶׁפַע` (a name, no article), `אֶנְקִי`; `שֵׁרִי`; `אוּרְקִישׁ`; `אגם אִיקוּנְתָה`; `אַשְׁחַפָּלָה`, `תַּרְחוּנְתַּשּׁוּ`, `קוּרוּנְטָה־פִּיָּה?`, `וַרְשִׁיָּה`, `זִיטִי` | NAM.ḪÉ "abundance" (= *iyatar*, the dossier's `שפע`) as a deity; A.GILIM untranslated (reading unknown). |

## M2. Key terms (Hittite → Hebrew)
| Hittite | Hebrew | Rejected | Echo | Reason |
|---|---|---|---|---|
| *nepiš* "heaven"; *tekan* / KI / *dagān* "earth"; *nepiš tekann=a* | **שָׁמַיִם**; **אֶרֶץ**; **שָׁמַיִם וָאָרֶץ** | | [equivalent] ↔ `אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ` (בראשית א:א) | The natural words; the comparison in the apparatus. |
| *dankui- tekan* "the dark earth" (the netherworld) | **הָאֲדָמָה הָאֲפֵלָה** | `שְׁאוֹל` (reserved), `תְּהוֹם` | [equivalent] / [divergence] ↔ Sheol | *tekan* in this phrase is the ground into which the dead go: `אֲדָמָה` keeps it apart from the cosmic `אֶרֶץ`; ★ a fixed phrase (F37). |
| *aruna-* / A.AB.BA "sea" | **יָם** | `תְּהוֹם` (reserved) | [equivalent] ↔ `וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים` (בראשית א:י) | |
| MUŠ, *illuyanka-* "serpent" | **נָחָשׁ** (gated) | `תַּנִּין`, `לִוְיָתָן`, `רַהַב`, `בָּרִחַ` (reserved) | [equivalent] ↔ `הַתַּנִּינִם הַגְּדֹלִים` (בראשית א:כא) | The dossier's comparison word. |
| UR.SAG, *ḫaštali-* "hero, heroic" | **גִּבּוֹר** (gated) | | [equivalent] ↔ `הֵמָּה הַגִּבֹּרִים` (בראשית ו:ד) | The epithet of the Storm-god ("the heroic king of Kumme"). |
| LUGAL-*uiznatar* "kingship"; *nepiši* "in heaven" | **מַלְכוּת**; **בַּשָּׁמַיִם** | | | KU: "Kingship in Heaven". |
| *karuiliyaš* DINGIR.MEŠ "the former (primeval) gods"; *karuili-* | **הָאֵלִים הַקַּדְמוֹנִים**; **קַדְמוֹן** | `רִאשׁוֹנִים`, `רֵאשִׁית` (reserved) | | |
| DUMU.LÚ.U₁₉.LU "mankind"; LÚ.U₁₉.LU "a human, mortal"; *antuḫša-* "person" | **בְּנֵי הָאָדָם**; **בֶּן־אָדָם**; **אָדָם** | `הָאֱנוֹשׁוּת` | [equivalent] ↔ `בְּנֵי הָאָדָם` (בראשית יא:ה) | The dossier has `בן־אדם` (IL 17). |
| *ḫarnink-* "destroy" | **הִשְׁמִיד** | `מָחָה`, `הִשְׁחִית` (reserved) | [equivalent] ↔ `אֶמְחֶה אֶת הָאָדָם` (בראשית ו:ז) | |
| ZI, *ištanza(n)-* "soul, mind" | **נֶפֶשׁ** | `לֵב` (that is ŠÀ, *kard-*) | [equivalent] ↔ `וַיֹּאמֶר יְהוָה אֶל לִבּוֹ` (בראשית ח:כא) | "to his own mind" (F32). |
| ŠÀ, *kard-* "heart, inside" | **לֵב** | | | |
| *uttar* / INIM "word, matter" | **דָּבָר** (pl. `הַדְּבָרִים`) | | | F33. |
| *memiškiwan dāi-* "began to speak"; *EGIR-pa memiškiwan dāi-* "began to answer" | **הֵחֵל לוֹמַר**; **הֵחֵל לְהָשִׁיב** | `פָּתַח אֶת פִּיו` (the Akkadian *pâšu īpuš*) | | F30–F31: the Hurrian-song formula, one Hebrew. |
| *ištamaš-* "hear"; *ištamašš-* + *uddār* | **שָׁמַע**; **שָׁמַע אֶת הַדְּבָרִים** | | | F33. |
| *ḫattatar* / GALGA "wisdom"; *ḫattant-* "wise" | **חָכְמָה**; **חָכָם** | | | Ea `מֶלֶךְ הַחָכְמָה` (*galgaš* LUGAL-*uš*), `אֲדוֹן הַחָכְמָה` (*ḫattannaš* EN-*aš*). |
| SUKKAL "vizier" | **וְזִיר** | `מַלְאָךְ` (reserved, ritual §H3), `שָׁלִיחַ` (that is LÚ *ḫalugatalla-* "messenger" = `שָׁלִיחַ`) | | As every corpus. |
| *uiya-* "send"; *ḫalugatalla-* "messenger" | **שִׁגֵּר**; **שָׁלִיחַ** | `שִׁלַּח` (gated to *tarna-*) | | Ritual §R3. |
| GIŠ.GIDRU "staff" (the traveller's) | **מַקֵּל** | `מַטֶּה` (Exod 4), `שַׁרְבִיט` (Akk. *ḫaṭṭu* as a sceptre) | | F34; a Sumerogram by sense. |
| KUŠ.E.SIR "shoes"; *liliwant-* IM.MEŠ "the swift winds" | **נַעֲלַיִם**; **הָרוּחוֹת הַמְּהִירוֹת** | | | F35. |
| *šarā ar-* "rise"; *ḫūdak* "at once"; *nuntarnu-* "hurry" | **קָם**; **חִישׁ**; **מִהֵר** | `מַהֵר` unvocalized (a trap: *kušata*) – write `חִישׁ` | | F36. |
| GIŠ.ŠÚ.A "chair"; GIŠ.BANŠUR "table" (the welcome) | **כִּסֵּא**; **שֻׁלְחָן** | | [equivalent] ↔ `מִטָּה וְשֻׁלְחָן וְכִסֵּא` (מלכים ב ד:י) | F38: `כִּסֵּא לָשֶׁבֶת … שֻׁלְחָן לֶאֱכֹל`. |
| *nekumant-* "naked" | **עָרוֹם** (gated) | | [equivalent] ↔ `וַיִּהְיוּ שְׁנֵיהֶם עֲרוּמִּים` (בראשית ב:כה) | Ištar before Ḫedammu and Ullikummi. |
| *paršina-* "loins" (Anu's, KU 35; corrected 2026-10-30 by translator 2: the "knees" of the older literature is a rejected emendation, CHD P); *genu-* "knee" (UL) | **מָתְנַיִם**; **בֶּרֶךְ** | | [divergence] ↔ `וַיַּרְא חָם … אֵת עֶרְוַת אָבִיו` (בראשית ט:כב) | `עֶרְוָה` is reserved in every Hittite line. |
| *armai-* "be pregnant"; *ḫašš-* "give birth"; *šallanu-* "rear" | **הָרָה** ★ (vocalized); **יָלַד**; **גִּדֵּל** | | | |
| NA₄ *kunkunuzzi-* "basalt (diorite)" | **בַּזֶּלֶת** | | | Ullikummi's stone. |
| URUDU "copper"; ZABAR "bronze"; AN.BAR "iron" | **נְחֹשֶׁת**; **אָרָד** ★; **בַּרְזֶל** | | | The 2026-10-30 harmonization. |
| *kuer-* "cut (apart)" (heaven from earth) | **חָתַךְ** | `הִבְדִּיל` (reserved), `גָּזַר` | [divergence] ↔ `וַיַּבְדֵּל בֵּין הַמַּיִם` (בראשית א:ז) | UL 3.1: the old copper cutter. |
| *kartimmiyatt-* "anger"; *karpi-* "wrath"; *šāi-* "be angry" | **זַעַם**; **חָרוֹן**; **זָעַם** | `חֵמָה` (Akk. *imtu*'s), `כַּעַס` (reserved, law §H3) | | TE (the IN precedent: *kartimmiya-* `זעם`). |
| *parā tarnumar* "release" (SR); *arḫa / parā tarna-* | **שִׁחְרוּר**; **שִׁלַּח** (gated) | `דְּרוֹר` (reserved: Akk. *andurāru*'s), `חָפְשִׁי` (reserved) | [equivalent] ↔ `וּקְרָאתֶם דְּרוֹר` (ויקרא כה:י), `תְּשַׁלְּחֶנּוּ חָפְשִׁי` (דברים טו:יב) | The Hurrian *kirenzi* = Akk. *andurāru*: the note says it. |
| LÚ.MEŠ ŠU.GI "elders" (Ebla's) | **זְקֵנִים** (gated, law §H4) | | | |
| *tuppa-* (Zalpa's "chests, containers") | **אַרְגָּז** (pl. `אַרְגָּזִים`) | `תֵּבָה`, `סַל`, `קֻפָּה` (reserved / other corpora's) | [equivalent] ↔ `וַתִּקַּח לוֹ תֵּבַת גֹּמֶא` (שמות ב:ג) | Check the transliteration: *tuppuš šakanda šunnaš* "filled the containers with fat". |
| *šakan* / Ì "fat, oil" | **שֻׁמָּן** | `זֶפֶת`, `חֵמָר` (reserved) | [divergence] ↔ `וַתַּחְמְרָה בַחֵמָר וּבַזָּפֶת` (שמות ב:ג) | (the Laws' {UZU}Ì `שומן`) |
| GIŠ.ZA.LAM.GAR "tent" | **אֹהֶל** | | [equivalent] ↔ `פֶּתַח הָאֹהֶל` (בראשית יח:א) | EL. |

## H2. Names (machine-read; the myth texts only)
| Source (regex) | Hebrew | ★ | Note |
|---|---|---|---|
| `kumarb\|kumarbiy` | `קוּמַרְבִּי` | | |
| `\{d\}é\.a\b\|\{d\}a\.a\b\|\{d\}ea\b` | `אֵאָה` | | Ea |
| `\{d\}anu\b\|\{d\}anu[šnw]\|\{d\}anim\b` | `אָנוּ` | ★ | Anu |
| `\{d\}alal` | `אֲלַלוּ` | | |
| `ta[šs]miš\|da[šs]miš\|\{d\}tašmit` | `תַּשְׁמִישׁוּ` | ★ | |
| `\{d\}ištar\|\{d\}gašan(?!\.)` | `אִשְׁתַּר` | | |
| `ḫe[bp]a[td]` | `חֶבַּת` | | (translator 2: was `ḫe[bp]at\|ḫe[bp]add`, which missed *ḫepadun*, UL 3.1:35) |
| `\{d\}ninatt` | `נִינַתָּה` | | |
| `\{d\}kul[il]?[td]d?a` | `קוּלִיתָּה` | | |
| `ḫedamm` | `חֶדַמּוּ` | | |
| `šertapšuruḫ` | `שֶׁרְתַּפְּשׁוּרוּחִי` | | |
| `ul+[iu]kumm` | `אוּלִּיקוּמִּי` | | (Round 5 run 2, translator 2: was `ul[lu]{1,2}kumm`, which missed *ullikummi*) |
| `upel+[uū]r\|ubel+[uū]r` | `אוּפֶּלּוּרִי` | | (translator 2: *upellūri* with ū was missed) |
| `impal+[uū]r` | `אִמְפַּלּוּרִי` | | |
| `mukišan` | `מוּקִישָׁנוּ` | | |
| `iršir` | `אִירְשִׁירָּה` | | |
| `\{d\}gulš` | `גּוּלְשֶׁשׁ` | | |
| `\{d\}nin\.tu\|ḫannaḫann` | `חַנַּחַנָּה` | | |
| `ka[m]+a?rušep` | `קַמְרוּשֶׁפָּה` | | |
| `telipin` | `תֶּלִיפִּינוּ` | | |
| `(?:taknaš\|takna-aš\|ták-na-aš) \{d\}utu` | `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה` | | the Sun-goddess of the Earth (Allani); the law row's Sun-god skips her (2026-10-30) |
| `\{d\}30\b` | `אֵל הַיָּרֵחַ` | | the Moon-god |
| `\{d\}a\.ab\.ba\|\{d\}arun` | `אֵל הַיָּם` | | the Sea |
| `\{d\}ellel\|\{d\}ellil\|\{d\}en\.líl\|\{d\}elall` | `אֶנְלִיל` | | |
| `a[šs][dt]abi` | `אַשְׁתַּבִּי` | | |
| `\{d\}takit` | `תַּקִּיתִי` | | |
| `elkunirš\|\{d\}kunirš` | `אֶלְקוּנִירְשָׁא` | | Elkunirša |
| `a[šs]er[td]` | `אַשֶּׁרְתּוּ` | ★ | Ašertu |
| `\{d\}inar` | `אִינָרָה` | | |
| `ḫ[uū]pašiy` | `חוּפַּשִׁיָּה` | | |
| `kiškilušš` | `כִּישְׁכִּילוּשָּׁה` | | |
| `ziggaratt` | `זִיגָּרָתָּה` | | |
| `\{m\}appu` | `אַפּוּ` | ★ | Appu |
| `\{uru\}kumm` | `קוּמֶּה` | ★ | Kumme |
| `\{m\}k[ie]ll` | `קֶלָּה` | | Kella (IL) |
| `taḫpuril` | `תַּחְפּוּרִילִי` | | |
| `zaliyan\|zalin[uū]` | `זַלִיַנוּ` | | Zaliyanu / Zalinu |
| `zašḫap` | `זַשְׁחַפּוּנָה` | | |
| `t[aā]zzuwaš` | `תַּזּוּוַשִׁי` | | |
| `piḫa-lú` | `פִּיחָה־זִיטִי` | | |
| `ur\.maḫ-lú` | `וַלְוַה־זִיטִי` | | |
| `\{uru\}n[ie]nuw` | `נִינְוֵה` | | Nineveh |
| `\{uru\}a[bp]z[uū]w` | `אַבְּזוּוָה` | | |
| `\{íd\}aranzaḫ` | `אַרַנְזַח` | | |
| `\{íd\}m[aā]la` | `מָלָה` | | |
| `kanzur\|ganzur` | `קַנְזוּרָה` | | Mount Kanzura (KU 57, 177–178; translator 2) |
| `\{gu4\}š[eē]r` | `שֵׁרִי` | | Šeri, the Storm-god's bull (KU 85, 210, 221) |
| `\{d\}napšar` | `נַפְּשָׁרָה` | | (KU 4, 77) |
| `\{d\}ammunk` | `אַמּוּנְקִי` | | (KU 4) |
| `\{d\}išḫar` | `אִישְׁחָרָה` | | Išḫara (KU 6; M1) |
| `\{uru\}urkiš` | `אוּרְקִישׁ` | | Kumarbi's city (UL 1:15) |
| `\{d\}ka\.zal` | `קַזַל` | | KA.ZAL (KU 118) |
| `\{d\}en\.ki\b` | `אֶנְקִי` | | Enki = Ea (KU 225) |
| `ašḫapal` | `אַשְׁחַפָּלָה` | | the scribe of KU (KU 287, 292) |
| `\{d\}šuwaliy` | `שׁוּוַלִיַּת` | | Šuwaliyatt (SR 13.2.1; KU 89; Round 5 run 2, translator 3) |
| `\{d\}zuen` | `אֵל הַיָּרֵחַ` | | the Moon-god written {D}ZUEN (SR 13.11.2; translator 3) |
| `\{m\}m[eē]+[kg]` | `מֶגִי` | | Megi, king of Ebla (SR; translator 3) |
| `zazall` | `זַזַּלָּה` | | Zazalla, the orator of Ebla (SR) |
| `\{m\}purr` | `פּוּרָּה` | ★ | Purra, the captive (SR; unvocalized "fruitful") |
| `\{uru\}epl` | `אֶבְּלָה` | ★ | Ebla (SR; unvocalized "her mourning"; the gentilic *eplumena-* `בני אֶבְּלָה`) |
| `\{uru\}iki(?:n)?kal` | `אִיקִינְקַלִּישׁ` | | Ikinkališ (SR 19.1.1, 19.2.1, 19.15.3, 19.17.1) |
| `\{m\}pazz` | `פַּזַּנִיקַרִּי` | | Pazzanikarri, Zazalla's father (SR 15.13.3) |
| `\{uru\}lul+uw` | `לוּלּוּוָה` | | Lulluwa (SR 10.1.1, 10.3.3) |
| `zalpuw` | `זַלְפָּה` | ★ | Zalpuwa, the Old Hittite form of Zalpa (ZA 1.4; translator 4: the law row `zalpa` misses it) |
| `\{uru\}kan[ie]š` | `קָנֵשׁ` | | Kaneš = Neša (ZA 1.1, 2.7; translator 4) |
| `\{uru\}neš` | `נֵשָׁה` | | Neša (ZA 2.2, 2.10; translator 4) |
| `\{m\}ḫapp` | `חַפִּי` | | Ḫappi, the rebel prince (ZA 2.18–5.2; translator 4) |
| `\{uru\}alḫi` | `אַלְחִיוּתָה` | | Alḫiuta (ZA 2.18) |
| `ḫaraḫš` | `חַרַחְשׁוּ` | | Ḫaraḫšu (ZA 4.1) |
| `tamnašš` | `תַּמְנַשּׁוּ` | | Tamnaššu (ZA 4.3) |
| `\{m\}tabarn\|\{m\}taparn` | `תַּבַּרְנָה` | | Tabarna, as a person's name (ZA 5.2; the title *labarna* is the law table's `לַבַּרְנָה`) |
| `zimbir` | `סִפַּר` | | Sippar, the Sun-god's city (AP 1:131, 1:154; translator 4) |
| `\{uru\}kuzin` | `קוּזִינָה` | | Kuzina = Ḫarran, the Moon-god's city (AP 1:132) |
| `\{d\}nanay` | `נַנַיָּה` | | Nanaya (AP 1:135) |
| `kiššin` | `קִישִּׁינָה` | | Kiššina, Nanaya's city (AP 1:135) |
| `\{d\}amar\.utu` | `מַרְדּוּךְ` | | Marduk (AP 1:136; the Akkadian corpora's form) |
| `ká\.dingir\.ra` | `בָּבֶל` | | Babylon (AP 1:136; guidelines §6.4) |
| `\{uru\}amurr` | `אֱמֹרִי` | | Amurru (EL 1.2:58; the biblical form, guidelines §6.4) |
| `za\.ba4\.ba4` | `זַבַּבָּה` | | Zababa (EL 2.2:16, 2.3:16; M1) |
| `\{d\}nin\.é\.gal` | `נִינֶגַל` | | Ninegal (EL 2.3:10) |

## H3. Reserved: never in a myth line (machine-read; the myth texts only)
| Hebrew (regex on the unvocalized, bracket-free line) | Licence | Why |
|---|---|---|
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:תנין\|תנינים\|התנין\|לויתן\|רהב\|עקלתון)(?![א-ת])` | NEVER | Gen 1:21, Isa 27:1 (the dossier's rule: MUŠ = `נחש`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:ברא\|בורא\|יברא\|נברא\|נבראו\|בריאה\|בריאת\|בראשית)(?![א-ת])` | NEVER | Gen 1:1 |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:שאול\|שאולה)(?![א-ת])` | NEVER | Sheol (*dankui- tekan* = `האדמה האפלה`); `לשאול` "to ask" is never written (guidelines §6.7) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:תהום\|תהומות\|תהו\|בהו)(?![א-ת])` | NEVER | Gen 1:2 |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:רקיע\|הבדיל\|יבדיל\|מבדיל\|הבדילו\|הובדלו\|הבדלה\|נבדל\|נבדלו\|ויבדל)(?![א-ת])` | NEVER | Gen 1:6–7 (*kuer-* = `חתך`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:מבול\|המבול)(?![א-ת])` | NEVER | Gen 6–9 (no flood in these texts) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:נפלים\|נפילים)(?![א-ת])` | NEVER | Gen 6:4 |
| `(?<![א-ת])ו?(?:כש)?[בלהמכ]?(?:מחה\|ימחה\|אמחה\|נמחה\|נמחו\|למחות\|וימח)(?![א-ת])` | NEVER | Gen 6:7, 7:23 (*ḫarnink-* = `השמיד`); the bare `ש` prefix dropped by translator 3 (SR 15.6.4: it read `שמחה` "rejoices" as ש־מחה, as the law `גר` row read `שגר`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:השחית\|ישחית\|משחית\|השחיתה\|להשחית\|נשחתה\|שחת)(?![א-ת])` | NEVER | Gen 6:11–13, 9:11 |
| `(?<![א-ת])ו?(?:שבת\|ישבות\|וישבות\|שבתון)(?![א-ת])` | NEVER | Gen 2:2 (`לשבת` "to sit" is allowed: the prefix class here is `ו` only) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:דרור\|יובל\|היובל\|שמיטה\|שמטה)(?![א-ת])` | NEVER | Lev 25:10, Deut 15 (*parā tarnumar* = `שחרור`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:צדיק\|צדיקים\|הצדיק\|צדק\|צדקה)(?![א-ת])` | NEVER | Gen 18:23–25 (Appu's "Right" = `ישר`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:תבה\|תיבה\|תבת\|גמא\|זפת\|יאור\|היאור\|חמר)(?![א-ת])` | NEVER | Exod 2:3 (Zalpa's containers `ארגזים`, fat `שומן`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:קנה שמים\|קונה שמים\|קנה ארץ\|קונה ארץ\|קונה)(?![א-ת])` | NEVER | Gen 14:19, 22 (the name `אֶלְקוּנִירְשָׁא` is transliterated; its meaning is the note's) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:אשרה\|האשרה\|אשרת\|אשרות\|אשרים)(?![א-ת])` | NEVER | Asherah (Ašertu = `אַשֶּׁרְתּוּ`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:בעל\|הבעל\|בעלה\|בעלך\|בעלי\|בעלים\|בעלו)(?![א-ת])` | NEVER | Baal (the Storm-god = `אל הסערה`; a husband = `איש`) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:עשתרת\|עשתורת\|עשתרות)(?![א-ת])` | NEVER | Ištar = `אִשְׁתַּר` (guidelines §6.4) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:עדן)(?![א-ת])` | NEVER | Gen 2:8 (no Eden in these texts) |
| `(?<![א-ת])ראשו בשמים(?![א-ת])` | NEVER | Gen 11:4 `וְרֹאשׁוֹ בַשָּׁמַיִם`: only where the Hittite has "head" and "heaven" (then `[היתר שער: ראשו]` with the reason) |

## H4. Gated: allowed only where the source word is in the line (machine-read; the myth texts only)
| Hebrew (regex) | Licence (regex on the licence text: composite + lemmas + glosses, lower case) | Why |
|---|---|---|
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:נחש\|נחשים\|ניחש)(?![א-ת])` | `muš\|illuyank\|illiyank\|elliyank\|illiunk\|ḫedamm\|schlange` | `נחש` only for MUŠ / *illuyanka-* (the dossier's comparison word) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:גבור\|גיבור\|גבורים\|גיבורים\|גבורה\|גבורת)(?![א-ת])` | `(?<!ḫ)ur\.sag\|ḫaštal\|qarrad\|qarrād\|held` | `גבור` only for UR.SAG / *ḫaštali-* (Gen 6:4) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:ערום\|עירום\|ערומה\|עירומה\|ערומים\|עירומים\|עירמה)(?![א-ת])` | `nekum\|nackt` | `ערום` only for *nekumant-* (Gen 2:25, 3:7) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:מגדל\|מגדלו\|מגדלים)(?![א-ת])` | `an\.za\.gàr\|an\.za\.gar` | `מגדל` only for AN.ZA.GÀR "tower" (SR's tower parable ↔ Gen 11:4; Ullikummi is a stone, not a tower). Made a gate 2026-10-30 (translator 3) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:בריח\|בריחים\|הבריח)(?![א-ת])` | `ḫattal\|riegel` | `בריח` only for *ḫattalu-* "bolt" (the rituals' word; Isa 27:1 `נָחָשׁ בָּרִחַ` stays the apparatus's) |
| `(?<![א-ת])ו?(?:ש\|כש)?[בלהמכ]?(?:קנה\|קונה\|קנו\|קניתי\|יקנה)(?![א-ת])` | `wašš\|šám\|kauf\|\bgi\b\|{giš}gi\b` | `קנה` only for "buy" (Gen 14:19: never for Elkunirša) |

## H5. Formulas (machine-read; the myth texts only)
| F | Composite (regex, flat) | Hebrew (regex on the unvocalized line without punctuation) | Note |
|---|---|---|---|
| F30 | `(?<!egir-pa )(?<!egir-an )(?<!āppa )(?<!appa )memišk\S*w?an d[aā]i` | `הח(?:ל\|לה\|לו) לומר` | *memiškiwan dāiš* "began to speak" = `הֵחֵל לוֹמַר` (*āppa* added to the lookbehinds by translator 4, AP 1:54) |
| F31 | `(?:egir-pa\|āppa\|appa) memišk\S*w?an d[aā]i` | `הח(?:ל\|לה\|לו) להשיב` | *EGIR-pa* / *āppa memiškiwan dāiš* "began to answer" = `הֵחֵל לְהָשִׁיב` (*āppa*, the phonetic spelling of EGIR-pa, AP 1:54: translator 4) |
| F32 | `zi-šu memišk\|zi-ni memišk\|ištanzan` | `נפש` | *ANA ZI-ŠU* "to his own mind" = `אֶל נַפְשׁוֹ` |
| F33 | `(?:uddār\|inim\S*)\S* (?:ištamašt\|išt[aā]maš\|išme)` | `שמע\S* (?:את )?(?:ה)?דברי` | "heard the words" = `(כַּאֲשֶׁר) X שָׁמַע אֶת הַדְּבָרִים` (subject first; HE 1:76, 1:89) |
| F34 | `gidru-an d[aā]` | `מקל` | "took a staff (in the hand)" = `לָקַח מַקֵּל (בְּיָדוֹ)` |
| F35 | `e\.sir\S* liliwan[td]\S* im\{meš\}` | `הרוחות המהירות` | the wind-shoes = `… נַעֲלַיִם … הָרוּחוֹת הַמְּהִירוֹת` |
| F36 | `šarā ḫūdak ar[aā]i` | `קמ?\S* חיש` | "rose at once" = `קָם חִישׁ` |
| F37 | `dankui\S* (?:tekan\|dagān\|taknī\|ki-)\|ge6-i ki-pi\|ge6-i ki` | `האדמה האפלה` | the netherworld "the dark earth" = `הָאֲדָמָה הָאֲפֵלָה` |
| F38 | `ašanna=šši \{giš\}šú\.a` | `כסא לשבת` | the welcome (*dai-* = `שָׂם`): `שמו לו, לים, כסא לשבת,` … `ושולחן מקושט לאכול – שם לו,` (HE 1:94, 1:96) |

## H6. Traps (machine-read; the myth texts only)
| Unvocalized (regex on the raw line) | Condition (regex on the licence text) | Why |
|---|---|---|
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:תשמישו)(?![֑-ׇא-ת])` | `.` | Tašmišu `תַּשְׁמִישׁוּ` ("his use") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:קומה)(?![֑-ׇא-ת])` | `kumm` | Kumme `קוּמֶּה` ("height") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:אפו)(?![֑-ׇא-ת])` | `appu` | Appu `אַפּוּ` ("his nose / anger") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:אשרתו)(?![֑-ׇא-ת])` | `.` | Ašertu `אַשֶּׁרְתּוּ` |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:אנו)(?![֑-ׇא-ת])` | `\{d\}anu\|\{d\}anim` | Anu `אָנוּ` ("we") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:הרה\|הרתה)(?![֑-ׇא-ת])` | `.` | `הָרָה` "pregnant" (Hera; "the mountain") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:אמה\|אמות)(?![֑-ׇא-ת])` | `ammat\|danna` | AMMATU "cubit" `אַמָּה` ("her mother", "maid") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:ישר)(?![֑-ׇא-ת])` | `níg\.si\.sá` | Appu's son "Right" `יָשָׁר` (a name: vocalized) |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:רע)(?![֑-ׇא-ת])` | `ḫul-lu\|ḫul-u` | Appu's son "Wrong" `רַע` (a name; "friend") |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:זעם)(?![֑-ׇא-ת])` | `.` | `זַעַם` (noun) / `זָעַם` (verb): vocalize where both could be read |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:אבלה)(?![֑-ׇא-ת])` | `.` | Ebla `אֶבְּלָה` ("her mourning"; SR, translator 3) |
| `(?<![֑-ׇא-ת])[ובלמהכש]?(?:פורה)(?![֑-ׇא-ת])` | `.` | Purra `פּוּרָּה` ("fruitful"; SR, translator 3) |

## H8. The fifth-day dossier's Illuyanka excerpt: revisions pending for the lead (machine-read)
`verify IL` checks that IL 8–17 equal the dossier's KBo 3.7 i 9–20 (`../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-IL.rtl.md`)
after these replacements are applied to the dossier's joined Hebrew. The lead applies them to the dossier at the round's
finalization (then deletes the rows). This run does not edit the dossier.

| The dossier's string | Ours | Why |
|---|---|---|
| `ואל הסערה – את כל האלים` | `וְאֵל הַסְּעָרָה – אֶת כָּל הָאֵלִים` | KBo 3.7 i 12 = IL 10 (DINGIR.MEŠ): unvocalized `ואל` / `האלים` read as "and to" / "these"; the Hittite tools' trap (law renderings §H6) requires `אֵל` / `אֵלִים` vocalized in a line with DINGIR. |
| `ואִינָרָה [… ל]זִיגָּרָתָּה` | `ואִינָרָה [ל]זִיגָּרָתָּה` | KBo 3.7 i 19 = IL 16 (Round 5 run 2, translator 1): the gap between the goddess's name (preserved in KBo 3.7 i and ms D `{d}i-na-ra-a[š`) and the town holds only the preposition (TLHdig `_ (_)`, one or two signs; HPM restores *INA*): the dossier's `[…` suggests a lost word. |

## H9. Selftest (myth lines; `hittite_tools.py selftest`)
| Line | Expect | Hebrew |
|---|---|---|
| HE 1:12 | err | `ירד אל השאול` |
| HE 1:12 | ok | `וצעד [ … ] ירד אל האדמה האפלה.` |
| HE 1:12 | err | `וצעד [ … ] ירד אל הארץ.` |
| HE 1:33 | ok | `החל לומר אל נפשו:` |
| HE 1:33 | err | `פתח את פיו ודיבר אל לבו:` |
| UL 1:13 | ok | `לקח מקל בידו,` |
| IL 9 | ok | `גבר הנחש על אֵל הַסְּעָרָה.` |
| IL 9 | err | `גבר התנין על אֵל הַסְּעָרָה.` |
| HE 1:77 | ok | `קם חיש` |
