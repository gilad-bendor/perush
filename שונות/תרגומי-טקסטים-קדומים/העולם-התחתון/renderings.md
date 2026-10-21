# Shared renderings: the netherworld corpus (the Descent of Ištar, Inana's Descent)

Binding for both projects of this folder (`corpus.md`). Echo tags follow guidelines §6.4: [cognate], [equivalent], [divergence], [absent]. Fixed by the corpus coordinator **before the first line was drafted** (2026-10-21), after reading both base texts in full; the drafting of each text may revise a row with a reason (recorded in §9 and in the project's `project.md`), after which it binds every copy. Quotations here are checked by `../tools/check_bible_quotes.py`.

## 0. Inheritance (what binds, in what order)
1. **The Gilgameš corpus** (`../אפוס-גילגמש/renderings.md`) for every Akkadian word it fixed, above all its netherworld vocabulary: *erṣetu* (the netherworld) = `הָאָרֶץ`, never `שְׁאוֹל`; *eklētu* `חֲשֵׁכָה`, *eṭûtu* `עֲלָטָה`, *nūru* `אוֹר`; *epru* `עָפָר`, *ṭiṭṭu* `טִיט` (reserved); *bubūtu* `מָזוֹן`, *akalu* `לֶחֶם`; *ēribu* `בָּא` (`בָּאָיו`); *tayyāru* `שָׁב`; *zummû* `נֶעְדַּר`; Kurnugi `כּוּרְנוּגִי`, Irkalla `אִירְכַּלָּה`; Ereškigal, Namtar, Dumuzi **always vocalized** (`אֶרֶשְׁכִּיגַל`, `נַמְתָּר`, `דּוּמוּזִי`); *ḫīrtu* `כַּלָּה`, *ḫāwiru* `חָתָן`, *eṭlu* `עֶלֶם`, *ardatu* `עַלְמָה`, *šerru* `תִּינוֹק`; *šamḫatu* (pl.) `שַׁמְחוֹת`; *murṣu* `חֳלִי`; *qutrinnu* `קְטֹרֶת` [cognate]; *ṣubātu* `שִׂמְלָה`, *labāšu* `לָבַשׁ`, *inṣabtu* `נֶזֶם`, *šemeru* `צָמִיד`, *šibbu* `חֲגוֹר`, *bāštu* `הָדָר`, *šukuttu* `עֲדָיִים`, *uqnû* `לָזוּרִית`, *sāmtu* `אֹדֶם`; *maḫāṣu* `מָחַץ`; *ramāku* `טָבַל`; *pašāšu* `סָךְ`; *šīmta šâmu* `גָּזַר גּוֹרָל`; *nazāru* / *izru* `גִּדֵּף` / `גִּדּוּף`; *naṣāru* `נָצַר` (never `שָׁמַר`); prohibitive *lā* + present = `לֹא` + future. **Gilg. VII 184–191 = Ištar 4–11 and Gilg. VI 99–100 ≈ Ištar 19–20 are copied from there** (§3).
2. **The wisdom corpus** (`../ספרות-החכמה-והצדיק-הסובל/renderings.md`), the most recent Akkadian corpus, where Gilgameš is silent or older: *kabattu* `כָּבֵד` (the organ kept; a deviation from Gilgameš's `רוּחַ`, recorded in §8); *ištaru* / *iltu* `אֵלָה` always vocalized; *parṣu* `פֻּלְחָן` (= the creation corpus).
3. **The lament, temple and creation corpora** for the Sumerian (`../קינות-על-ערים/renderings.md`, `../בניין-המקדש/renderings.md`, `../סיפורי-הבריאה-המסופוטמיים/renderings.md` §5–§8), and **the law corpus's rule: a Sumerian word takes the Hebrew of its Akkadian equivalent** – here it is the backbone of the corpus, because the two texts tell one story (§2).
4. **Open cross-corpus choices followed as the most recent corpus has them (flagged):** Inana = `אִינַנָּה` ★ (laments, temple; the law corpus `אִינַאנָּה`); *me* = `הַ־מֶה` ★; *sukkal* / *šukkallu* = `וְזִיר` (creation, temple; **a deviation from the Gilgameš corpus's netherworld title `שַׂר`**, §8).

## 1. Names
Vocalized at the first occurrence in each text; afterwards plain spelling, **except ★: vocalized at every occurrence** (they read as Hebrew words, or the earlier corpora so decided; checked by `netherworld_tools.py verify`).

| Source | Hebrew | Notes |
|---|---|---|
| Ištar (Akk.); Inana (Sum.; Emesal Gašan-ana) | אִשְׁתַּר; ★ אִינַנָּה | Never `עַשְׁתֹּרֶת` (guidelines §6.4.6); the note names `עַשְׁתֹּרֶת` / `עַשְׁתָּרוֹת` (שמואל א לא:י) once. |
| Ereškigal (Akk. *ereškigal*, NA *aš(š)rigingal*); Sum. Ereškigala (Emesal Gašan-kigala) | ★ אֶרֶשְׁכִּיגַל; NA spelling ★ אַשְׁרִיגִינְגַל (note) | Sum. *ereš-ki-gal* "Lady of the Great Below"; the NA hymn translates the name as *bēlet qaqqari rabīti* (§2). |
| Sîn (Akk.); Nanna (Sum.) | ★ סִין; נַנָּה | `סין` "China". *mārat Sîn* = `בַּת סִין`. |
| Ea (Akk.); Enki (Sum.; Emesal Amanki) | אֵאָה; אֶנְקִי | |
| Enlil (Sum.; Emesal Mullil) | אֶנְלִיל | |
| Utu; Ningal | ★ אוּתוּ; נִינְגַּל | |
| Namtar | ★ נַמְתָּר | Ereškigal's vizier; the name = "fate" (Sum. *nam-tar*). |
| Papsukkal | פַּפְּסוּכַּל | "Vizier of the great gods"; in the Sumerian, Ninšubur has this role. |
| Ninšubur (Emesal Gašan-šubur) | נִינְשׁוּבּוּר | Inana's vizier (female in this text). |
| Neti (ETCSL; ORACC reads Biti) | ★ נֵטִי | The chief gatekeeper (*i₃-du₈ gal*). |
| Gugalana (*gud-gal-an-na*) | גּוּגַלְאַנָּה | Gilgameš corpus (the Bull of Heaven). |
| Aṣûšu-namir (var. *aṣnamer*); *assinnu*; *kulʾu* | אַצּוּשׁוּ־נָמִר ("his going-out is bright", note); `הָאַסִּנּוּ`; `כּוּלְאוּ` | Cult performers of Ištar, transliterated with a note. Never `קָדֵשׁ` (דברים כג:יח) in a `>` line. |
| *kur-ĝar-ra*; *gala-tur(-ra)* | כּוּרְגַּרָּה; גָּלָה־טוּר | Transliterated, no article (laments: *gala* = `גָּלָה`; `הגלה` "exile"). Notes: the *kurgarrû* (Akk.) and the "little *gala*" lamentation priest. |
| *gal₅-la₂* (the netherworld constables) | שֵׁד־גַּלָּה, pl. ★ `שֵׁדֵי־גַּלָּה` (never with the article) | Creation corpus §7 (Bird and Fish). |
| Dumuzi (Akk.); Dumuzid (Sum.) | ★ דּוּמוּזִי (both) | Gilgameš corpus. **Never `תַּמּוּז`** in a `>` line (יחזקאל ח:יד in the apparatus). |
| Belili | ★ בֵּלִילִי | `בלילי` "in my night". Dumuzi's sister (= Ĝeštinana). |
| Šara; Lulal | ★ שַׁרָא; לוּלַל | |
| Anunnakkū (Akk.); the Anuna (Sum.) | אֲנוּנָּכִּי; הָאֲנוּנָּה | Each language keeps its form (Gilgameš; laments). |
| Kute (Cuthah) | ★ כּוּת | Biblical (`וְאַנְשֵׁי כוּת עָשׂוּ אֶת נֵרְגַל`, מלכים ב יז:ל); the note gives Akk. *Kutû*. |
| Ēgalgina | אֵגַלְגִּינָה | "The palace of permanence"; the netherworld palace. |
| Ganzer (*e₂-gal ganzer*) | גַּנְזֵר (`הֵיכַל גַּנְזֵר`) | The netherworld palace / gate. |
| Cities and temples of Inana 6–13H, 49, 196, 328–347 | Unug `אוּרוּךְ` (note: = `אֶרֶךְ`), Eanna `אֵאַנָּה`, Bad-tibira `בַּד־טִיבִּירָה`, Emuškalama `אֵמוּשְׁכַּלַמָּה`, Zabalam `זַבַּלַם`, Giguna `גִּיגוּנָה`, Adab `אֲדַב`, Ešara `אֵשַׁרָּה`, Nibru `נִיפּוּר`, Barag-dur-ĝara `בָּרַג־דּוּרְגַּרָה`, Kiš `כִּישׁ`, Ḫursaĝ-kalama `חֻרְסַג־כַּלַמָּה`, Agade `אַכַּד` (note: `וְאַכַּד`, בראשית י:י), Ulmaš `אוּלְמַשׁ`, ★ Umma `אוּמָּה`, Ibgal `אִיבְּגַל`, ★ Urim `אוּר` (note: `אוּר כַּשְׂדִּים`), Edilmuna `אֵדִלְמוּנָה`, Kisiga `כִּיסִיגָה`, Amaš-e-kug `אַמַשׁ־אֵכּוּג`, Ĝirsu `גִּירְסוּ`, Ešdam-kug `אֵשְׁדַּם־כּוּג`, Isin `אִיסִין`, Ešeg-meše-du `אֵשֶׁג־מֵשֶׁדּוּ`, Akšak `אַכְּשַׁךְ`, Anzagar `אַנְזַגַּר`, Šuruppak `שׁוּרוּפַּךְ`, Niĝin-ĝar-kug `נִיגִין־גַּר־כּוּג`, Kazallu `כַּזַּלּוּ`, Ekur `אֵכּוּר`, Emud-kura `אֵמוּד־כּוּרָה`, Ekišnuĝal `אֵכִּישְׁנוּגַל`, Eridug (Emesal *uru₂-ze₂-eb*) `אוּרוּ־זֶבָּה` (note: = Eridu; laments), Šeg-kur-šaga `שֶׁג־כּוּר־שַׁגָּה`, Kulaba `כֻּלַּבָּה` | Laments, Gilgameš, creation corpora where they have them; the rest new (§10). |

## 2. The two languages: one Hebrew for one thing (fixed before drafting)
The Akkadian poem is a shortened retelling of the Sumerian one, and the ancient lexical lists equate many of its words. Where the two texts name the same thing, the Hebrew is the same (guidelines §5.2), so that a reader of the two translations sees what the Akkadian kept, changed and left out. Checked by `netherworld_tools.py verify` (FORMULAS) where a regex can do it.

| Thing | Sumerian | Akkadian | Hebrew (both) | Notes / tag |
|---|---|---|---|---|
| the netherworld | *kur* (lit. "mountain-land, foreign land") | *erṣetu* (lit. "earth") | `הָאָרֶץ` | The equation *kur* = *erṣetu* is the ancient translators' (Gilgameš XII renders the Sumerian *kur* by *erṣetu*). [cognate] (*erṣetu* ~ `אֶרֶץ`) ↔ `הָאָרֶץ בְּרִחֶיהָ בַעֲדִי לְעוֹלָם` (יונה ב:ז); `אֶל-אֶרֶץ חֹשֶׁךְ וְצַלְמָוֶת` (איוב י:כא). **`שְׁאוֹל` is reserved** (§6). Sum. *ki* "earth" opposite *an* "heaven" = `אֶרֶץ` without the article (`שָׁמַיִם … אֶרֶץ`); *ki-gal* "the great below" = `הָאָרֶץ הַגְּדוֹלָה`. The first note of each text says that Sumerian separates *ki* (the earth) from *kur* (the netherworld) and that Akkadian and Hebrew do not. |
| the great earth | *ki-gal* | *qaqqaru rabītu* (NA 1, 3, Ereškigal's epithet = her name) | `הָאָרֶץ הַגְּדוֹלָה` (Sum.); `הַקַּרְקַע הַגְּדוֹלָה` (Akk.) | *qaqqaru* = `קַרְקַע` (creation corpus); the note links the two. |
| the land of no return | *kur nu-gi₄* (83); *ḫar-ra-an lu₂ du-bi nu-gi₄-gi₄-de₃* (84) | *qaqqar lā târi* (1); *ḫarrānu ša alaktaša lā tayyārat* (6, = Gilg. VII 186) | `אֶרֶץ לֹא־שׁוּב` (Sum.), `קַרְקַע לֹא־שׁוּב` (Akk.); the road: Gilg. `אֶל הָאֹרַח אֲשֶׁר הֲלִיכָתָהּ אֵינָהּ שָׁבָה` | *gi₄* = *târu* = `שׁוּב` (reserved). [equivalent] ↔ `וְאֹרַח לֹא-אָשׁוּב אֶהֱלֹךְ` (איוב טז:כב); `לֹא-יָשׁוּב עוֹד לְבֵיתוֹ` (איוב ז:י); `וְהוּא לֹא יָשׁוּב אֵלָי` (שמואל ב יב:כג). |
| to go down / come up | *ed₃* (both directions; by context) | *warādu*; *elû* | `יָרַד`; `עָלָה` | *kur-ra ba-e-a-ed₃* = `אֶל הָאָרֶץ יָרְדָה` = Akk. *ana erṣeti urid* (85). *kur-ta ed₃* = `עָלְתָה מִן הָאָרֶץ`. [equivalent] ↔ `כֵּן יוֹרֵד שְׁאוֹל לֹא יַעֲלֶה` (איוב ז:ט) (Ištar 85 *urid ul īlâ*). |
| to set the mind ("the ear") on | *ĝeštug₂ … gub* (1–3) | *uzna šakānu* (2–3, 98); *uzna petû* (NA 9–10) | `הִצִּיבָה אֶת אָזְנָהּ`; `שָׂמָה אֶת אָזְנָהּ`; `פָּתְחָה אֶת אָזְנָהּ` | The ear (*ĝeštug₂* = *uznu*) is the seat of attention and wisdom; the literal image is kept (a deviation from the Gilgameš default *uznu* = `בִּינָה`, recorded in §8), with a note at every occurrence. *gub* "stand" (tr.) = `הִצִּיב`; *šakānu* = `שָׂם` (reserved). |
| to abandon | *šub* | *ezēbu* (34) | `עָזַב` | Laments (`עזב` gated by *šub* / *taka₄*; *ezēbu* licenses it in Akkadian). |
| the gate; the door; the bolt; the doorpost | *abula*, *kan₄*; *{ĝiš}ig*; *{ĝiš}si-ĝar* | *bābu*; *daltu*; *sikkūru*; *sippu* | `שַׁעַר`; `דֶּלֶת`; `בְּרִיחַ`; `מְזוּזָה` | Gilgameš, laments; *sippu* = `מְזוּזָה` as Gilgameš VI 15 (Eshnunna has the cognate `סַף`, noted). |
| the gatekeeper | *i₃-du₈* (*i₃-du₈ gal kur-ra* `הַשּׁוֹעֵר הַגָּדוֹל שֶׁל הָאָרֶץ`) | *atû* | `שׁוֹעֵר` | Bird and Fish (*i₃-du₈*). |
| the vizier | *sukkal* | *šukkallu* | `וְזִיר` | §0.4. |
| the lady; my lady | *nin*; *nin-ĝu₁₀* | *bēltu*; *bēltī* | `גְּבִירָה`; `גְּבִירָתִי` | Laments (*nin* = `גְּבִירָה`). *bēlet erṣeti* = `גְּבִירַת הָאָרֶץ`; *šarratu* = `מַלְכָּה` (Gilg. "מלכת הארץ"). |
| sister | *nin₉* | *aḫātu* | `אָחוֹת` | |
| the rites / the divine powers | *me*; *ĝarza* | *parṣu* (pl. *parṣū*) | *me* = ★ `הַ־מֶה`; *ĝarza* = *parṣu* = `פֻּלְחָן` | The lexical equation *ĝarza* = *parṣu* (and *me* = *parṣu*). The gate answer: Sum. `בִּדְמָמָה, אִינַנָּה! הַ־מֶה שֶׁל הָאָרֶץ – בַּיָּד מֻשְׁלָמִים.` / `אִינַנָּה, לְפֻלְחַן הָאָרֶץ – אַל תִּפְתְּחִי פִּיךְ!`; Akk. `"בּוֹאִי, גְּבִירָתִי; שֶׁל גְּבִירַת הָאָרֶץ – כָּךְ פֻּלְחָנֶיהָ."` (§4). |
| the stripping | *lu₂ ba-da-an-ze₂-er* "one removed (it) from her" | *umtaṣṣi* (*waṣû* D "remove") + *ittabal* (*tabālu* "take away") | Sum. `הֵסִירוּ מֵעָלֶיהָ` (the Hebrew impersonal plural for *lu₂*); Akk. `הֵסִיר, נָטַל` | `הֵסִיר` for both "remove" verbs; *tabālu* = `נָטַל` (never `לָקַח`, reserved for *leqû*). [divergence] ↔ `וַיַּפְשִׁיטוּ אֶת יוֹסֵף אֶת כֻּתָּנְתּוֹ` (בראשית לז:כג) – the apparatus only; `פָּשַׁט` is not used (the original has "remove", not "strip"). |
| the ornaments, gate by gate | 1 *tug₂-šu-gur-ra men edin-na* (head); 2 *{na₄}za-gin₃ di₄-di₄-la₂* (neck); 3 *na₄-nunuz tab-ba* (breast); 4 *tu-di-da* "Come, man, come" (breast); 5 *ḫar kug-sig₁₇* (hand); 6 *gi-diš-nindan eš₂-gana₂ za-gin₃* (hand); 7 *{tug₂}pala₃ tug₂ nam-nin-a* (body) | 1 *agû rabû ša qaqqadīša*; 2 *inṣabāti ša uznīša*; 3 *erimmāti ša kišādīša*; 4 *dudināti ša irtīša*; 5 *šibbu aban alādi ša qablīša*; 6 *šemer qātīša u šēpīša*; 7 *ṣubāt bālti ša zumrīša* | Sum.: 1 `הַשּׁוּגוּרָּה, כֶּתֶר הָעֲרָבָה`; 2 `הַסַּפִּיר הַקָּטָן`; 3 `צֶמֶד הַחֲרוּזִים`; 4 `סִכַּת "בּוֹא, אִישׁ, בּוֹא"`; 5 `צְמִיד הַזָּהָב`; 6 `קְנֵה־הַמִּדָּה וְחֶבֶל־הַמִּדָּה שֶׁל סַפִּיר`; 7 `הַפַּלָּה, בֶּגֶד הַגְּבִירוּת`. Akk.: 1 `הַכֶּתֶר הַגָּדוֹל אֲשֶׁר לְרֹאשָׁהּ`; 2 `הַנְּזָמִים אֲשֶׁר לְאָזְנֶיהָ`; 3 `הַחֲרוּזִים אֲשֶׁר לְצַוָּארָהּ`; 4 `הַסִּכּוֹת אֲשֶׁר לְחָזָהּ`; 5 `חֲגוֹר אַבְנֵי־הַלֵּדָה אֲשֶׁר לְמָתְנֶיהָ`; 6 `צְמִידֵי יָדֶיהָ וְרַגְלֶיהָ`; 7 `שִׂמְלַת הַהָדָר אֲשֶׁר לְגֵוָהּ` | Cross-language: *men* = *agû* = `כֶּתֶר`; *na₄-nunuz* = *erimmatu* = `חֲרוּזִים`; *tu-di-da* = *dudittu* (the same word) = `סִכָּה`; *ḫar* = *šemeru* = `צָמִיד`; *tug₂* = `בֶּגֶד`, *ṣubātu* = `שִׂמְלָה`. *za-gin₃* = `סַפִּיר` (creation), *uqnû* = `לָזוּרִית` (Gilgameš). *nam-nin* = `גְּבִירוּת` (laments). *bāltu* is lemmatized by eBL as *bāštu* = `הָדָר` (Gilgameš). The order: both begin at the head and end with the garment of the body. **No `עֵירֹם` / `עָרוֹם` / `עֶרְוָה`** in either text (§6): neither text says "naked". |
| the eye of death; the word of anger; the cry of guilt | *igi … bar, i-bi₂ uš₂-a-kam*; *inim lipiš gig-ga*; *gu₃ nam-tag-tag-ga* (168–170 = 354–356) | – (Akk.: the sixty diseases, 69–75) | `הֵבִיאָה בָּהּ – עֵין הַמָּוֶת הָיְתָה.` etc. (fixed at 168–170, §4) | *nam-tag* = `עָוֹן` (laments). |
| the hanging corpse | *uzu niĝ₂ sag₃-ga {ĝiš}gag-ta la₂* | – | `הַבָּשָׂר הַמֻּכֶּה, הַתָּלוּי עַל הַיָּתֵד` | *uzu* `בָּשָׂר`; *sag₃* "strike" (ORACC sag[beat]); *gag* = *sikkatu* = `יָתֵד` (Gilgameš). [equivalent] ↔ `כִּי קִלְלַת אֱלֹהִים תָּלוּי` (דברים כא:כג); `וְאֶת גְּוִיָּתוֹ תָּקְעוּ בְּחוֹמַת בֵּית שָׁן` (שמואל א לא:י). |
| the striking of the thigh, the bitten lip / finger | *ḫaš₂ bar-bi … ra*; *nundum zu₂ … gub* (114–115) | *maḫāṣu pēnša*; *našāku ubānša* (101) | `מָחֲצָה עַל צַד יְרֵכָהּ`, `אֶת שְׂפָתָהּ נָשְׁכָה` / `מָחֲצָה אֶת יְרֵכָהּ, נָשְׁכָה אֶת אֶצְבָּעָהּ` | *ra* = *maḫāṣu* = `מָחַץ` (laments, Gilgameš). [equivalent] ↔ `סָפַקְתִּי עַל יָרֵךְ` (ירמיהו לא:יח); `לָכֵן סְפֹק אֶל יָרֵךְ` (יחזקאל כא:יז). |
| the request that must not be made | *me al nu-di-da* (193, 207); *al … dug₄* "crave, ask for" (191–192) | *erištu ša lā erēši* (102); *erēšu* | `שָׁאַל`; `מֶה אֲשֶׁר לֹא יִשָּׁאֵל` / `שְׁאֵלָה אֲשֶׁר לֹא תִּשָּׁאֵל` | *al dug₄* = *erēšu* (lexical); *erēšu* II = `שָׁאַל` (Gilgameš). **Never the infinitive or participle `לִשְׁאֹל` / `שָׁאוּל`, which in plene spelling read `לשאול` "to Sheol"** (§6, §7). [equivalent] ↔ `הִקְשִׁיתָ לִשְׁאוֹל` (מלכים ב ב:י). Cross-language: Inana asked for what may not be asked; so did Aṣûšu-namir. |
| the water and the plant of life | *a nam-til₃-la*; *u₂ nam-til₃-la* | *mê balāṭi* (114, 118) | `מֵי הַחַיִּים`; `עֵשֶׂב הַחַיִּים` | Creation corpus (*mê balāṭi* = `מֵי הַחַיִּים`); *u₂* = *šammu* = `עֵשֶׂב` (Gilgameš: the plant of rejuvenation). [divergence] ↔ `וְעֵץ הַחַיִּים בְּתוֹךְ הַגָּן` (בראשית ב:ט): a herb, not a tree, and it revives a corpse. |
| to sprinkle / throw on | *šub* (on a corpse) | *salāḫu* | `הִשְׁלִיךְ … עַל`; `הִזָּה … עַל` | *šub* = *nadû* = `הִשְׁלִיךְ` (Gilgameš *nadû*). [equivalent] ↔ the water sprinkled on one defiled by a corpse (במדבר יט:יג, יח). |
| to swear (someone) by the life of | *zi an-na zi ki-a pad₃* | *tummû nīš ilī rabûti* (97) | `בְּחַיֵּי הַשָּׁמַיִם, בְּחַיֵּי הָאֶרֶץ – הִשְׁבִּיעוּ`; `הַשְׁבַּע אוֹתָהּ בְּחַיֵּי הָאֵלִים הַגְּדוֹלִים` | *zi* = *nīšu* / *napištu*; *nīš ilim* = `חַיֵּי הָאֵל` (law corpus); *tamû* D = `הִשְׁבִּיעַ`. [equivalent] ↔ `חֵי פַרְעֹה` (בראשית מב:טו). |
| the substitute, the ransom | *saĝ-dili saĝ-ĝa₂-na … šum₂* (289) "give one head in place of her head" | *napṭiru*, *ipṭiru* (118b, 126) | `רֹאשׁ אֶחָד בִּמְקוֹם רֹאשָׁהּ`; `פִּדְיוֹן` | `תַּחַת` and `כֹּפֶר` are kept out (law corpus: `תחת` reserved; `כֹּפֶר` = *kupru*). [equivalent] ↔ `וְיֵקַר פִּדְיוֹן נַפְשָׁם` (תהלים מט:ט); `מִיַּד שְׁאוֹל אֶפְדֵּם` (הושע יג:יד); `נֶפֶשׁ תַּחַת נָפֶשׁ` (שמות כא:כג). |
| dust | *saḫar* (308, 331, 341, 44) | *epru* | `עָפָר` (reserved) | [cognate] (*epru*). ↔ `רְדִי וּשְׁבִי עַל עָפָר` (ישעיהו מז:א); `הֶעֱלוּ עָפָר עַל רֹאשָׁם` (איכה ב:י). |
| the mourning garment | *tug₂-mu-dur₇-ra* (lit. "dirty garment") | *karru* III (82) | Sum. `בֶּגֶד־אֵבֶל`; Akk. `מַעֲטֵה אֵבֶל` | Each language keeps its precedent: Curse of Agade 88 (*tug₂-mu-dur₇-ra … mur₁₀* = `בגד־אבל לבש`) and Adapa (*karra labšāta* = `מעטה אבל לבוש אתה`, creation corpus); Ištar 82 *karra labiš* = `מַעֲטֵה אֵבֶל לָבוּשׁ` as Adapa. The note gives the literal sense of the Sumerian. *mu-dur₇* "dirt" alone (222–223, Enki's fingernail) = `טִנֹּפֶת` (Lament for Ur 358): the wordplay (the saviours are made of the dirt that the mourners wear) is explained in the note. *mur₁₀* = *labāšu* = `לָבַשׁ`. |
| to lacerate (oneself) | *ḫur* (ORACC hur[scratch]) | *gadādu* D? (81, Gabbay's reading) | `שָׂרַט` (Sum.); `*גָּדוּד*` (Akk., uncertain) | [equivalent] ↔ `וְשֶׂרֶט לָנֶפֶשׁ לֹא תִתְּנוּ בִּבְשַׂרְכֶם` (ויקרא יט:כח); `לֹא תִתְגֹּדְדוּ` (דברים יד:א) – *gadādu* ~ `גדד` [cognate], if Gabbay is right. `שׂרט` is gated by *ḫur*. |
| to weep; tears; the wailers | *er₂ še₈*; *er₂* | *bakû*; *dimtu*; *bakkāʾū u bakkâtu* (137) | `בָּכָה`; `דִּמְעָה`; `הַבּוֹכִים וְהַבּוֹכוֹת` | [cognate] (*bakû*) ↔ `וְהִנֵּה שָׁם הַנָּשִׁים יֹשְׁבוֹת מְבַכּוֹת אֶת הַתַּמּוּז` (יחזקאל ח:יד). |
| the husband of her youth | *mu-ud-na* (384) | *ḫāmir ṣeḫrūtīša* (127; eBL lemma *ḫāwiru*) | `בַּעַל` (*mu-ud-na*, *dam*); `חֲתַן נְעוּרֶיהָ` | *ḫāwiru* = `חָתָן` (Gilgameš); *ṣuḫru* = `נְעוּרִים`. [equivalent] ↔ `עַל בַּעַל נְעוּרֶיהָ` (יואל א:ח); `הַעֹזֶבֶת אַלּוּף נְעוּרֶיהָ` (משלי ב:יז). |
| to wash, to anoint, to clothe (the end of mourning) | *a tu₅*, *i₃ šeš₂* (if they occur) | *ramāku*, *pašāšu*, *labāšu* D (128–129) | `טָבַל`, `סָךְ`, `הִלְבִּישׁ` | Gilgameš. [equivalent] ↔ `וַיִּרְחַץ וַיָּסֶךְ וַיְחַלֵּף שִׂמְלֹתָו` (שמואל ב יב:כ). |

## 3. Lines copied from the Gilgameš corpus (Akkadian; identical normalization = identical Hebrew)
| Ištar | Gilgameš | Hebrew (copied letter for letter; brackets follow the Ištar manuscripts) |
|---|---|---|
| 5 *ana bīti ša ēribūšu lā āṣû* | VII 185 | `אל הבית אשר בָּאָיו אינם יוצאים,` |
| 6 *ana ḫarrāni ša alaktaša lā tayyārat* | VII 186 | `אל האורח אשר הליכתה אינה שבה,` |
| 7 *ana bīti ša ēribūšu zummû nūra* | VII 187 (*āšibūšu*) | `אל הבית אשר בָּאָיו נעדרי אור,` (VII has `יושביו`) |
| 8 *ašar epru bubūssunu akalšunu ṭiṭṭu* | VII 188 | `אשר שם עפר – מזונם, ולחמם – טיט;` |
| 9 *nūra ul immarū ina eṭûti ašbū* | VII 190 (*u nūra lā immarā*) | `אור אינם רואים, בעלטה יושבים.` (VII `ואור …`) |
| 10 *labšū-ma kīma iṣṣūrī ṣubāt (a)gappī* | VII 189 | `לְבוּשִׁים – כציפור – שמלת כנפיים,` |
| 11 *eli dalti u sikkūri šabuḫ epru* | VII 191 | `על הדלת והבריח שוקע עפר,` |
| 11a *[eli?] talli? šuḫarratu tabkat* | VII 192 (*eli bīti*) | `[על?] המשקוף? דממת המוות יצוקה.` |
| 4 *ana bīti eṭî šubat erkalli* | VII 184 (*ana bīt eklēti šubat irkalla*) | `אל הבית החשוך, משכן אִירְכַּלָּה,` (*eṭû* "dark" ≠ *eklētu*) |
| 19 *ušellâ mītūtī-(ma) ikkalū balṭūti* | VI 99 | `אעלה את המתים, ויאכלו את החיים,` |
| 20 *eli balṭūti imaʾʾidū mītūtu* | VI 100 (*ušamʾad*, Š) | `על החיים ירבו המתים!"` (VI `ארבה את המתים`) |
| 17 *amaḫḫaṣ dalta …* | VI 97 *amaḫḫaṣ* | `אמחץ …` |

## 4. Formulas and repeated passages (fixed; checked by regex, plene, with gender and final letters allowed)
**Akkadian**
| Akkadian | Hebrew |
|---|---|
| X *pâša īpuš-ma iqabbi* / *ana* Y *amāta izzakkar* (12a–13, 66–67, 109–110) | `X פָּתְחָה אֶת פִּיהָ וְאָמְרָה,` / `אֶל Y דָּבָר דִּבְּרָה:` (masc. 21–22 `הַשּׁוֹעֵר פָּתַח אֶת פִּיו וְאָמַר,` / `דִּבֵּר אֶל …:`) |
| *ereškigal annīta ina šemêša* (28, 100) | `אֶרֶשְׁכִּיגַל – כְּשָׁמְעָהּ אֶת זֹאת,` (Gilgameš `X – כשמעו את זאת,`) |
| the gate formula *N bāba ušēribšī-ma umtaṣṣi ittabal X ša Y-īša* (42–60) | `בַּשַּׁעַר הַ… הֱבִיאָהּ – הֵסִיר, נָטַל אֶת X אֲשֶׁר לְ…` |
| *ammīni atû tatbal X ša Y-īya* (43–61) | `"לָמָּה, שׁוֹעֵר, נָטַלְתָּ אֶת X אֲשֶׁר לְ…י?"` |
| *erbī bēltī ša bēlet erṣeti kīam parṣūša* (44–62) | `"בּוֹאִי, גְּבִירָתִי; שֶׁל גְּבִירַת הָאָרֶץ – כָּךְ פֻּלְחָנֶיהָ."` |
| the exit formula *N bāba ušēṣīšī-ma uttērši X* (119–125) | `בַּשַּׁעַר הַ… הוֹצִיאָהּ – הֵשִׁיב לָהּ אֶת X …` (the same X strings as 42–60: a reversal passage) |
| ordinals of the gates | `הָרִאשׁוֹן`, `הַשֵּׁנִי`, `הַשְּׁלִישִׁי`, `הָרְבִיעִי`, `הַחֲמִישִׁי`, `הַשִּׁשִּׁי`, `הַשְּׁבִיעִי` |
| 77–80 = 87–90 (the cessation of sex) | fixed at 77–80; 87–90 copy them (the Akkadian is identical but for *muḫḫi*) |
| 63 = 86 *ištu ullânum-ma ištar ana kurnugi urdu* | `מִיָּד אַחֲרֵי שֶׁיָּרְדָה אִשְׁתַּר אֶל כּוּרְנוּגִי,` |
| command / execution 111–114 → 115–118; 37 → 39; 93–99 (Ea's instructions) → 100–108 | the execution copies the command's nouns and verbs (imperative → past) |

**Sumerian**
| Sumerian | Hebrew |
|---|---|
| *(place) (temple) mu-un-šub kur-ra ba-e-a-ed₃* (4–13H, 101) | `אֶת (temple) בְּ(place) עָזְבָה, אֶל הָאָרֶץ יָרְדָה.` |
| *abula N-kam-ma ku₄-ku₄-da-ni-ta* (129B–159) | `כְּשֶׁבָּאָה אֶל הַשַּׁעַר הַ…,` |
| *X … lu₂ ba-da-an-ze₂-er* (129A–160) | `X … – הֵסִירוּ מֵעָלֶיהָ.` |
| *ta-am₃ ne-e* | `"מַה זֶּה?"` |
| *si-a {d}inana me kur-ra-ke₄ šu al-du₇-du₇* | `"בִּדְמָמָה, אִינַנָּה! הַ־מֶה שֶׁל הָאָרֶץ – בַּיָּד מֻשְׁלָמִים.` |
| *{d}inana ĝarza kur-ra-ke₄ ka-zu na-an-ba-e* | `אִינַנָּה, לְפֻלְחַן הָאָרֶץ – אַל תִּפְתְּחִי פִּיךְ!"` |
| the plea to the fathers (43–47 = 52–56 = 60–64 = 185–189 = 199–203 = 212–216) | fixed at 43–47 (vocatives change) |
| the answer of Enlil and Nanna (191–194 = 205–208) | fixed at 191–194 |
| the mourning rites (34–39 → 176–181 → 316–321) | fixed at 34–39 (imperatives); the executions copy them (past) |
| Enki's instructions (227–252) → execution (254–280) | fixed at 227–252 |
| the *galla* list (297–305 = 361–367) | fixed at 297–305 |
| the substitutes' scene (306–310 = 329–333 = 339–343) | fixed at 306–310 |
| *X gu₃ mu-na-de₂-e* (to Y) | `X פּוֹנֶה אֶל Y:` / past `פָּנְתָה` (creation corpus *gu₃ de₂* = `פָּנָה אֶל`) |
| *X mu-na-ni-ib-gi₄-gi₄* | `X מֵשִׁיב לוֹ / לָהּ:` (creation corpus) |
| *inim … saĝ keše₂ ak* (124, 254) | `לִדְבַר … קָשַׁר רֹאשׁ` (lit. "bound the head" = obeyed; note) |
| *ud 3 ĝi₆ 3* (173) | `שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת` [equivalent ↔ יונה ב:א] |

## 5. Key terms (both texts unless marked)
| Source | Hebrew | Tag / notes |
|---|---|---|
| Sum. *gam* (ORACC *gurum* "bend"; of a person "bring down, kill") | `הִכְרִיעַ` (pass. `הוּכְרַע`) | Temple corpus *gam* = `כרע`. [equivalent] ↔ `וּבַחוּרֵי יִשְׂרָאֵל הִכְרִיעַ` (תהלים עח:לא). Homograph in the lament and creation corpora (*ka-aš bar* "decide" = `הִכְרִיעַ`): a different word, noted. |
| Sum. *šar₂* "mix (metal with dust)"; *sil* "split"; *dar* "split (wood)" (44–46) | `נִתְעָרֵב`; `נִבְקַע`; `נִסְדַּק` | The plea's three materials: silver, lapis, boxwood. |
| Sum. *kug* (metal, silver); *za-gin₃*; *{ĝiš}taškarin*; *zadim*; *nagar* | `כֶּסֶף`; `סַפִּיר`; `תְּאַשּׁוּר` (Gilg. *taskarinnu*); `סַתָּת`; `נַגָּר` | |
| Sum. *ki-sikil* | `עַלְמָה` | Creation, temple. |
| Sum. *dumu* (Emesal *du₅-mu*) | `בַּת` (of a daughter), `בֵּן` / `יֶלֶד` otherwise | |
| Sum. *u₃-mu-un*, *umun*; *en*; *nam-en*; *nam-lagar* | `אָדוֹן`; `אָדוֹן`; `אֲדָנוּת`; `לַגָּרוּת` (note) | EWO / Agade (*nam-en* = `אדנות`). |
| Sum. *ki-sig₁₀* (Akk. *kispu*) | `סְעוּדַת הַמֵּתִים` | The offering meal for the dead (temple: *e₂-ninda-ki-sig₁₀* `בית־מזון־המתים`). [equivalent] ↔ `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד). |
| Sum. *kaš*; Akk. *šikaru* | `שֵׁכָר` [cognate] | |
| Sum. *di-kud*; *di … ku₅* | `דַּיָּן`; `דָּן דִּין` | Creation / law corpora. |
| Sum. *zid* (of a vizier); *sag₉*; *ge-en* / *gen₆* | `נֶאֱמָן`; `נָאֶה`; `נָכוֹן` | Laments. |
| Sum. *ḫi-li* | `חֵן` | Temple (*ḫi-li guru₃* `טעון חן`). ETCSL "wig". |
| Sum. *šembizid*; *igi … ĝar* | `כָּחָל`; `עַל עֵינֶיהָ שָׂמָה` | [equivalent] ↔ `וַתָּשֶׂם בַּפּוּךְ עֵינֶיהָ` (מלכים ב ט:ל). |
| Sum. *zi* (life); *nam-til₃*; Akk. *balāṭu*, *balṭu* | `חַיִּים`; `חַיִּים`; `חַיִּים`, `חַי` | |
| Sum. *uš₂* "die, death"; Akk. *mītu*, *mūtu* | `מָוֶת` / `מֵת` | ↔ `כִּי עַזָּה כַמָּוֶת אַהֲבָה` (שיר השירים ח:ו) in the notes on Inana and Dumuzi. |
| Sum. *lipiš* (figurative) | `חֵמָה`? – fixed at 169 | Creation corpus: *lipiš* figurative = `קרב`; temple *lipiš … ra*. |
| Sum. *nam-tag* | `עָוֹן` | Laments (gated). |
| Sum. *tur₅* "sick"; *munus* | `חוֹלָה`; `אִשָּׁה` | |
| Sum. *u-u₈-a* (Ereškigal's cry) | `אוֹיָה` | Distinct from the laments' *me-li-e-a* `אוֹי לִי` and *a* `הוֹי`. [equivalent] ↔ `אוֹיָה לִי` (תהלים קכ:ה). |
| Sum. *šag₄*; *bar* (230–239: "inside" / "outside, body") | `קֶרֶב`; `גַּב`? – fixed at 236–239 | ↔ `מֵעַי מֵעַי אֹחִולָה (אֹחִילָה)` (ירמיהו ד:יט). |
| Sum. *ama gan* "the mother who gives birth" | `הָאֵם הַיּוֹלֶדֶת` | |
| Sum. *gaba*; *gu₂*; *saĝ*; *saĝ-ki*; *igi* / *i-bi₂*; *giri₁₇*; *ḫaš₄-gal* / *ḫaš₂*; *mur*; *šu*; *ĝiri₃*; *umbin*; *nundum*; *ur₂* | `חָזֶה`; `צַוָּאר`; `רֹאשׁ`; `מֵצַח`; `עַיִן`; `אַף`; `יָרֵךְ`; `כָּתֵף`; `יָד`; `רֶגֶל`; `צִפֹּרֶן`; `שָׂפָה`; `חֵיק` | Body words; Akk. *irtu* `חָזֶה`, *kišādu* `צַוָּאר`, *qaqqadu* `רֹאשׁ`, *uznu* `אֹזֶן`, *qablu* `מָתְנַיִם`, *zumru* `גֵּו`, *pēnu* `יָרֵךְ`, *ubānu* `אֶצְבַּע`, *lētu* `לְחִי`, *appu* `אַף`, *sūnu* `חֲלָצַיִם`, *birku* `בֶּרֶךְ`. |
| Akk. *kurnugi*; *erkallu* | `כּוּרְנוּגִי` (★ always vocalized); `אִירְכַּלָּה` | Gilgameš. |
| Akk. *eṭû* (adj.) | `חָשׁוּךְ` | (*eklētu* `חֲשֵׁכָה`, *eṭûtu* `עֲלָטָה`.) |
| Akk. *šuḫarratu*; *tallu* | `דְּמָמַת הַמָּוֶת` (Gilgameš VII 192); `מַשְׁקוֹף` | |
| Akk. *gišrinnu*; *karru* II | `מֹאזְנַיִם`; `כַּפְתּוֹר` | 18a (doors). |
| Akk. *nadû* "throw down" | `הִשְׁלִיךְ` | Gilgameš. |
| Akk. *zikru* "name" (24) / "utterance" (91) | `זֵכֶר` (24) / `מַאֲמָר` (91) | [cognate] *zakāru* ~ `זכר` ↔ `וְזֶה זִכְרִי לְדֹר דֹּר` (שמות ג:טו); 91 as Gilgameš (*zikru* = `מַאֲמָר`). One lemma, two senses: noted. |
| Akk. *keppû*; *mukillu*; *dalāḫu* | `חֶבֶל־קְפִיצָה`; `מַחֲזִיק`; `דָּלַח` (stative `דָּלוּחַ`) | Gilgameš; creation (*dalāḫu* = `דָּלַח` [cognate] ↔ `וַתִּדְלַח מַיִם בְּרַגְלֶיךָ`, יחזקאל לב:ב – the netherworld chapter of Ezekiel). |
| Akk. *nikis bīni*; *arāqu*; *kunīnu*; *ṣalāmu* | `אֶשֶׁל כָּרוּת`; `הוֹרִיק`; `כּוּנִינוּ` (a vessel, transliterated); `שָׁחַר` (vocalized) | Gilgameš (*bīnu*, *arāqu*, *ṣalāmu*). |
| Akk. *wabālu*; *napardû* (Š, N) | `הֵבִיא`; `הֵאִיר` / `אוֹר` | 31, 96. |
| Akk. *lubki* (precative) | `אֶבְכֶּה` | |
| Akk. *lakû*; *ina lā ūmīšu*; *ṭardu* | `רַךְ`; `בְּלֹא יוֹמוֹ`; `נִרְדָּף` | [equivalent] ↔ `בְּלֹא-יוֹמוֹ תִּמָּלֵא` (איוב טו:לב); `לָמָּה תָמוּת בְּלֹא עִתֶּךָ` (קהלת ז:יז). |
| Akk. *raʾābu* | `רָעַד` | Gilgameš. [equivalent] ↔ `שְׁאוֹל מִתַּחַת רָגְזָה לְךָ לִקְרַאת בּוֹאֶךָ` (ישעיהו יד:ט). |
| Akk. *malāku* N; *šubêʾu* / *ašābu* (65) | `נִמְלַךְ`; `*יָשְׁבָה*` (uncertain) | |
| Akk. *riāšu*; *ḫadû* | `גָּל`; `שָׂמַח` | Gilgameš. |
| Akk. *būrtu*; *lītu*; *alpu*; *imēru*; *atānu* | `עֶגְלָה`; `פָּרָה`; `שׁוֹר`; `חֲמוֹר`; `אָתוֹן` [cognate] | Gilgameš has *arḫu* = `פָּרָה` (a different cow word, another text). |
| Akk. *šaḫāṭu* I "leap (on)"; *arû* IV Š "impregnate" | `זִנֵּק`; `הֶהֱרָה` | Gilgameš (*šaḫāṭu*). |
| Akk. *kummu*; *aḫītu*; *aḫu* II | `חֶדֶר`; `צַד`; `צַד` | |
| Akk. *anḫiš*; *illakā dimāšu* | `בִּיגִיעָה`; `זוֹלְגוֹת דִּמְעוֹתָיו` (Gilgameš) | |
| Akk. *emqu*; *banû* | `חָכָם`; `בָּנָה` | Gilgameš. |
| Akk. *ḫalziqqu* (eBL lemma *ḫazīqatu* "headcloth" is a slip: the determinative is KUŠ, "leather") | `נֹאד` | [equivalent] ↔ `שִׂימָה דִמְעָתִי בְנֹאדֶךָ` (תהלים נו:ט). |
| Akk. *epinnu*; *ḫabannatu*; *maštītu*; *askuppu*; *manzāzu*; *mūšabu*; *ṣillu*; *dūru*; *šakru*; *ṣamû* | `מַחֲרֵשָׁה`; `בִּיב`; `שְׁתִיָּה`; `מִפְתָּן`; `מַעֲמָד`; `מוֹשָׁב`; `צֵל`; `חוֹמָה`; `שִׁכּוֹר`; `צָמֵא` | Gilgameš where it has them. |
| Akk. *zaʾānu* D; *ayyaru* (stone) | `עִטֵּר`; `אַבְנֵי־אַיָּרוּ` (transliterated) | |
| Akk. *kussû*; *ḫurāṣu* | `כִּסֵּא` [cognate]; `זָהָב` | |
| Akk. *ḫuššû*; *malīlu* | `אָדֹם`; `חָלִיל` | |
| Akk. *ikkillu*; *ḫabālu*; *ēdu* | `יְלָלָה`; `חִבֵּל` [cognate] (law corpus); `יָחִיד` | [equivalent] ↔ `וְסָפְדוּ עָלָיו כְּמִסְפֵּד עַל הַיָּחִיד` (זכריה יב:י); `אֵבֶל יָחִיד עֲשִׂי לָךְ` (ירמיהו ו:כו). |
| Akk. *īnu* (eye-stone) | `אַבְנֵי־עַיִן` | |
| Akk. *eṣēnu* | `הֵרִיחַ` | Flood / creation corpora. |
| Akk. *ilu* (pl. *ilū*) | `אֵל`, `אֵלִים` (never `אֱלֹהִים`) | |
| Sum. *gaba … šub*, *ĝiri₃-ni-še₃ … šub* (307, 330, 340) | `לְרַגְלֶיהָ נָפְלָה` | *šub* intransitive = `נָפַל` (temple). |
| Sum. *saĝ … sag₃* (352) "shake the head"; *gi-gid₂*, *gi-di-da* (353) | by sense; `חָלִיל` (Agade *gi-gid₂* `חליל`) | |
| Sum. *sipad*; *{dug}šakir*; *ga* | `רוֹעֶה`; `מַחְבֵּצָה` (creation); `חָלָב` | |
| Sum. *muš*; *muš-saĝ-kal* | `נָחָשׁ` (reserved, licensed by *muš*); `נְחַשׁ־הַסַּגְכַּל` | [equivalent] ↔ `וְהַנָּחָשׁ` (בראשית ג:א) only as the word. |
| Sum. *kur₉* "enter"; *ku₄* "enter" | `בָּא` / `נִכְנַס` (fixed at 77 and 121: *kur₉* = `נִכְנַס`, *ku₄* = `בָּא`) | |
| Sum. *nim* (the fly) | `זְבוּב` | Gilgameš (*zubbu*). |
| Sum. *mu MAŠ* "half a year" | `חֲצִי שָׁנָה` | 407. |

## 6. Reserved strings (never in a `>` line unless the source has the licensing word; checked by `netherworld_tools.py verify`)
- **Never:** `שְׁאוֹל` and every string `שאול` (so also `לשאול`, `השאול`, `שאולה`: the infinitive of `שָׁאַל` is never written plene, §7); `תַּמּוּז`; `עַשְׁתֹּרֶת` / `עשתורת` / `עשתרות`; `רְפָאִים`; `צַלְמָוֶת`; `אֲבַדּוֹן`; `תַּחְתִּית` / `תַּחְתִּיּוֹת`; `בּוֹר` (as a word: `יוֹרְדֵי בוֹר`, תהלים פח:ה); `עֵירֹם` / `עָרוֹם` / `עֶרְוָה` / `ערומה` / `ערום` (neither text says "naked"); `אוֹב`, `יִדְּעֹנִי`, `התגודד`, `קָרְחָה`; `קְדֵשָׁה` / `קָדֵשׁ`; `עוֹלָם` (also in `העולם התחתון`, the corpus name); `טֶרֶם`; `אֱלֹהִים`; `קִינָה` / `קינות` / `קונן` (the lament corpus's genre word); `מִסְפֵּד`; `כָּבוֹד` (any form); `שְׁכִינָה`; `בָּרָא`; `יָצַר`; `תְּהוֹם`; `גלה` / `גָּלוּת` / `הגלה` (exile; *gala* is written `גָּלָה` with niqqud, never with the article).
- **Gated (allowed only beside the licensing source word):** `עפר` – *epru* / *eperu* / *saḫar*; `טיט` – *ṭiṭṭu* / *ṭīdu* / *im*; `שוב` / `השיב` – *târu* / *tayyāru* / *gi₄* / *gur*; `עזב` – *ezēbu* / *šub* / *taka₄*; `לקח` – *leqû* / *ti* / *šu ti*; `ידע` – *edû* / *zu*; `נחש` – *muš*; `שד` – *gal₅-la₂*; `שרט` – *ḫur*; `עוון` – *nam-tag*; `פדיון` / `פדה` – *napṭiru* / *ipṭiru*; `טוב` – *ṭābu* / *dug₃* / *du₁₀*; `כֹּפֶר` – *kupru* (none expected); `קטרת` – *qutrinnu*; `שׂם` – *šakānu* / *ĝar* / Emesal *mar* (by rule; not checkable unvocalized); `חתן` – *ḫāwiru* / *ḫāʾiru*; `בכה` / `בוכ` – *bakû* / *bakkāʾu* / *bakkītu* / *er₂*.

## 7. Traps of unvocalized Hebrew
`איננה` (Inana / "is not"), `אותו` (Utu / "him"), `אן` (An), `אור` (Urim / "light"), `שרא` (Šara), `אומה` (Umma / "nation"), `סין` (Sîn / "China"), `בלילי` (Belili / "in my night"), `כות` (Kutha), `המה` (*me* / "they"), `נטי` (Neti): vocalize at every occurrence (checked where the name is in the source). `לשאול` / `שאול` (plene of `לִשְׁאֹל` "to ask", or `שָׁאוּל` "asked") read "to Sheol": never written (§6). `שׂוּמָה` / `שׂוּם` (stative of *ĝar* / *šakānu*) – never `הוּשְׂמָה` (laments). `גָּלָה` (the *gala* priest) – always vocalized. `שָׁחֲרוּ` (*ṣalāmu*) – vocalized (Gilgameš). `הַ־מֶה` – always with the maqaf and niqqud.

## 8. Deviations from the inherited renderings (recorded)
- *sukkal* / *šukkallu* = `וְזִיר` (creation, temple, Enūma eliš) instead of the Gilgameš corpus's netherworld title `שַׂר` (VIII): the Sumerian *sukkal* and the Akkadian *šukkallu* must read the same here (Ninšubur ↔ Namtar ↔ Papsukkal).
- *kabattu* = `כָּבֵד` (wisdom corpus; laments *ur₅*) instead of Gilgameš's `רוּחַ`: the most recent Akkadian corpus.
- *uznu* "ear" in *uzna šakānu / petû* = `אֹזֶן` (the literal image; Gilgameš default `בִּינָה`), because the Sumerian twin *ĝeštug₂* is also the ear, and the two openings must read alike.
- *kur* (netherworld) = `הָאָרֶץ`, a deviation from the Sumerian corpora's *kur* = `הַר` / `אֶרֶץ` "highland, foreign land": the sense is the netherworld throughout this text, and its Akkadian equivalent is *erṣetu* (§2).
- *gam* = `הִכְרִיעַ` (Hiphil of the temple corpus's `כרע`); the lament and creation corpora use `הִכְרִיעַ` for *ka-aš bar* "decide" – a homograph across corpora, noted.

## 9. Revisions made during the drafting
(Merged by the coordinator; each item names the line and the reason.)

## 10. Shared with the other Round 2 runs (run 6 `../אגדות-מלכים/`, run 7 `../קולות-היום-יום/`)
Fixed here first, or adopted from the earlier corpora; the lead harmonizes leftovers. Inana `אִינַנָּה` ★; Dumuzi / Dumuzid `דּוּמוּזִי` ★ (never `תַּמּוּז`); Utu `אוּתוּ` ★; Nanna `נַנָּה`; Enki `אֶנְקִי`, Ea `אֵאָה`; Enlil `אֶנְלִיל`; Ereškigal `אֶרֶשְׁכִּיגַל` ★; Ninšubur `נִינְשׁוּבּוּר`; Unug / Uruk `אוּרוּךְ`; Eanna `אֵאַנָּה`; Kulaba `כֻּלַּבָּה`; Nibru `נִיפּוּר`; Eridug `אֶרִידוּ` (Emesal *uru₂-ze₂-eb* `אוּרוּ־זֶבָּה`); Šara `שַׁרָא` ★; *sukkal* `וְזִיר`; *i₃-du₈* / *atû* `שׁוֹעֵר`; *nin* / *bēltu* `גְּבִירָה`; *nin₉* `אָחוֹת`; *en* `אָדוֹן`, *nam-en* `אֲדָנוּת`; *me* `הַ־מֶה` ★; *ĝarza* / *parṣu* `פֻּלְחָן`; *kur* (netherworld) `הָאָרֶץ`; *ki-sikil* `עַלְמָה`; *gala* `גָּלָה`; *gal₅-la₂* `שֵׁד־גַּלָּה`; *tug₂-mu-dur₇-ra* `בֶּגֶד־אֵבֶל`, *karru* `מַעֲטֵה אֵבֶל` (Adapa); *ḫaš₄* / *pēnu* `יָרֵךְ`; *nim* `זְבוּב`; *ĝeštug₂* / *uznu* (the ear of attention) `אֹזֶן`.

## Changelog
- 2026-10-21: written by the corpus coordinator before the first line, from the Gilgameš, wisdom, lament, temple, creation and law corpora and a reading of both base texts in full.
