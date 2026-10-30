# Shared renderings: the netherworld corpus (the Descent of Ištar, Inana's Descent; Nergal and Ereškigal; Bilgameš, Enkidu and the Netherworld; Erra and Išum)

Binding for both projects of this folder (`corpus.md`). Echo tags follow guidelines §6.4: [cognate], [equivalent], [divergence], [absent]. Fixed by the corpus coordinator **before the first line was drafted** (2026-10-21), after reading both base texts in full; the drafting of each text may revise a row with a reason (recorded in §9 and in the project's `project.md`), after which it binds every copy. Quotations here are checked by `../tools/check_bible_quotes.py`.

## 0. Inheritance (what binds, in what order)
1. **The Gilgameš corpus** (`../אפוס-גילגמש/renderings.md`) for every Akkadian word it fixed, above all its netherworld vocabulary: *erṣetu* (the netherworld) = `הָאָרֶץ`, never `שְׁאוֹל`; *eklētu* `חֲשֵׁכָה`, *eṭûtu* `עֲלָטָה`, *nūru* `אוֹר`; *epru* `עָפָר`, *ṭiṭṭu* `טִיט` (reserved); *bubūtu* `מָזוֹן`, *akalu* `לֶחֶם`; *ēribu* `בָּא` (`בָּאָיו`); *tayyāru* `שָׁב`; *zummû* `נֶעְדַּר`; Kurnugi `כּוּרְנוּגִי`, Irkalla `אִירְכַּלָּה`; Ereškigal, Namtar, Dumuzi **always vocalized** (`אֶרֶשְׁכִּיגַל`, `נַמְתָּר`, `דּוּמוּזִי`); *ḫīrtu* `כַּלָּה`, *ḫāwiru* `חָתָן`, *eṭlu* `עֶלֶם`, *ardatu* `עַלְמָה`, *šerru* `תִּינוֹק`; *šamḫatu* (pl.) `שַׁמְחוֹת`; *murṣu* `חֳלִי`; *qutrinnu* `קְטֹרֶת` [cognate]; *ṣubātu* `שִׂמְלָה`, *labāšu* `לָבַשׁ`, *inṣabtu* `נֶזֶם`, *šemeru* `צָמִיד`, *šibbu* `חֲגוֹר`, *bāštu* `הָדָר`, *šukuttu* `עֲדָיִים`, *uqnû* `סַפִּיר` (Gilgameš `לָזוּרִית`; changed by the 2026-10-21 harmonization, §10), *sāmtu* `אֹדֶם`; *maḫāṣu* `מָחַץ`; *ramāku* `טָבַל`; *pašāšu* `סָךְ`; *šīmta šâmu* `גָּזַר גּוֹרָל`; *nazāru* / *izru* `גִּדֵּף` / `גִּדּוּף`; *naṣāru* `נָצַר` (never `שָׁמַר`); prohibitive *lā* + present = `לֹא` + future. **Gilg. VII 184–191 = Ištar 4–11 and Gilg. VI 99–100 ≈ Ištar 19–20 are copied from there** (§3).
2. **The wisdom corpus** (`../ספרות-החכמה-והצדיק-הסובל/renderings.md`), the most recent Akkadian corpus, where Gilgameš is silent or older: *kabattu* `כָּבֵד` (the organ kept; a deviation from Gilgameš's `רוּחַ`, recorded in §8); *ištaru* / *iltu* `אֵלָה` always vocalized; *parṣu* `פֻּלְחָן` (= the creation corpus).
3. **The lament, temple and creation corpora** for the Sumerian (`../קינות-על-ערים/renderings.md`, `../בניין-המקדש/renderings.md`, `../סיפורי-הבריאה-המסופוטמיים/renderings.md` §5–§8), and **the law corpus's rule: a Sumerian word takes the Hebrew of its Akkadian equivalent** – here it is the backbone of the corpus, because the two texts tell one story (§2).
4. **Open cross-corpus choices followed as the most recent corpus has them (flagged):** Inana = `אִינַנָּה` ★ (laments, temple; the law corpus `אִינַאנָּה`); *me* = `הַ־מֶה` ★; *sukkal* / *šukkallu* = `וְזִיר` (creation, temple; **a deviation from the Gilgameš corpus's netherworld title `שַׂר`**, §8). **Settled 2026-10-21** by the lead's harmonization (§10): all three are now the rendering of every corpus.

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
| the ornaments, gate by gate | 1 *tug₂-šu-gur-ra men edin-na* (head); 2 *{na₄}za-gin₃ di₄-di₄-la₂* (neck); 3 *na₄-nunuz tab-ba* (breast); 4 *tu-di-da* "Come, man, come" (breast); 5 *ḫar kug-sig₁₇* (hand); 6 *gi-diš-nindan eš₂-gana₂ za-gin₃* (hand); 7 *{tug₂}pala₃ tug₂ nam-nin-a* (body) | 1 *agû rabû ša qaqqadīša*; 2 *inṣabāti ša uznīša*; 3 *erimmāti ša kišādīša*; 4 *dudināti ša irtīša*; 5 *šibbu aban alādi ša qablīša*; 6 *šemer qātīša u šēpīša*; 7 *ṣubāt bālti ša zumrīša* | Sum.: 1 `הַשּׁוּגוּרָּה, כֶּתֶר הָעֲרָבָה`; 2 `הַסַּפִּיר הַקָּטָן`; 3 `צֶמֶד הַחֲרוּזִים`; 4 `סִכַּת "בּוֹא, אִישׁ, בּוֹא"`; 5 `צְמִיד הַזָּהָב`; 6 `קְנֵה־הַמִּדָּה וְחֶבֶל־הַמִּדָּה שֶׁל סַפִּיר`; 7 `הַפַּלָּה, בֶּגֶד הַגְּבִירוּת`. Akk.: 1 `הַכֶּתֶר הַגָּדוֹל אֲשֶׁר לְרֹאשָׁהּ`; 2 `הַנְּזָמִים אֲשֶׁר לְאָזְנֶיהָ`; 3 `הַחֲרוּזִים אֲשֶׁר לְצַוָּארָהּ`; 4 `הַסִּכּוֹת אֲשֶׁר לְחָזָהּ`; 5 `חֲגוֹר אַבְנֵי־הַלֵּדָה אֲשֶׁר לְמָתְנֶיהָ`; 6 `צְמִידֵי יָדֶיהָ וְרַגְלֶיהָ`; 7 `שִׂמְלַת הַהָדָר אֲשֶׁר לְגֵוָהּ` | Cross-language: *men* = *agû* = `כֶּתֶר`; *na₄-nunuz* = *erimmatu* = `חֲרוּזִים`; *tu-di-da* = *dudittu* (the same word) = `סִכָּה`; *ḫar* = *šemeru* = `צָמִיד`; *tug₂* = `בֶּגֶד`, *ṣubātu* = `שִׂמְלָה`. *za-gin₃* = `סַפִּיר` (creation), *uqnû* = `סַפִּיר` too (2026-10-21 harmonization, §10; Gilgameš had `לָזוּרִית`). *nam-nin* = `גְּבִירוּת` (laments). *bāltu* is lemmatized by eBL as *bāštu* = `הָדָר` (Gilgameš). The order: both begin at the head and end with the garment of the body. **No `עֵירֹם` / `עָרוֹם` / `עֶרְוָה`** in either text (§6): neither text says "naked". |
| the eye of death; the word of anger; the cry of guilt | *igi … bar, i-bi₂ uš₂-a-kam*; *inim lipiš gig-ga*; *gu₃ nam-tag-tag-ga* (168–170 = 354–356) | – (Akk.: the sixty diseases, 69–75) | `הִבִּיטָה בָּהּ – עֵין הַמָּוֶת הִיא;` / `דִּבְּרָה אֵלֶיהָ – דְּבַר הֶחָרוֹן הַמַּר הוּא;` / `קוֹל נָתְנָה אֵלֶיהָ – קוֹל הֶעָוֹן הַכָּבֵד הוּא.` (168–170; 354–356 `בּוֹ` / `אֵלָיו`, without `הוּא`) | *nam-tag* = `עָוֹן` (laments). |
| the hanging corpse | *uzu niĝ₂ sag₃-ga {ĝiš}gag-ta la₂* | – | `הַבָּשָׂר הַמֻּכֶּה, הַתָּלוּי עַל הַיָּתֵד` | *uzu* `בָּשָׂר`; *sag₃* "strike" (ORACC sag[beat]); *gag* = *sikkatu* = `יָתֵד` (Gilgameš). [equivalent] ↔ `כִּי קִלְלַת אֱלֹהִים תָּלוּי` (דברים כא:כג); `וְאֶת גְּוִיָּתוֹ תָּקְעוּ בְּחוֹמַת בֵּית שָׁן` (שמואל א לא:י). |
| the striking of the thigh, the bitten lip / finger | *ḫaš₂ bar-bi … ra*; *nundum zu₂ … gub* (114–115) | *maḫāṣu pēnša*; *našāku ubānša* (101) | `מָחֲצָה עַל צַד יְרֵכָהּ`, `אֶת שְׂפָתָהּ נָשְׁכָה` / `מָחֲצָה אֶת יְרֵכָהּ, נָשְׁכָה אֶת אֶצְבָּעָהּ` | *ra* = *maḫāṣu* = `מָחַץ` (laments, Gilgameš). [equivalent] ↔ `סָפַקְתִּי עַל יָרֵךְ` (ירמיהו לא:יח); `לָכֵן סְפֹק אֶל יָרֵךְ` (יחזקאל כא:יז). |
| the request that must not be made | *me al nu-di-da* (193, 207); *al … dug₄* "crave, ask for" (191–192) | *erištu ša lā erēši* (102); *erēšu* | `שָׁאַל`; `מֶה אֲשֶׁר לֹא יִשָּׁאֲלוּ` (193, 207: *me* is plural) / `שְׁאֵלָה אֲשֶׁר לֹא תִּשָּׁאֵל` | *al dug₄* = *erēšu* (lexical); *erēšu* II = `שָׁאַל` (Gilgameš). **Never the infinitive or participle `לִשְׁאֹל` / `שָׁאוּל`, which in plene spelling read `לשאול` "to Sheol"** (§6, §7). [equivalent] ↔ `הִקְשִׁיתָ לִשְׁאוֹל` (מלכים ב ב:י). Cross-language: Inana asked for what may not be asked; so did Aṣûšu-namir. |
| the water and the plant of life | *a nam-til₃-la*; *u₂ nam-til₃-la* | *mê balāṭi* (114, 118) | `מֵי הַחַיִּים`; `עֵשֶׂב הַחַיִּים` | Creation corpus (*mê balāṭi* = `מֵי הַחַיִּים`); *u₂* = *šammu* = `עֵשֶׂב` (Gilgameš: the plant of rejuvenation). [divergence] ↔ `וְעֵץ הַחַיִּים בְּתוֹךְ הַגָּן` (בראשית ב:ט): a herb, not a tree, and it revives a corpse. |
| to sprinkle / throw on | *šub* (on a corpse) | *salāḫu* | `הִשְׁלִיךְ … עַל`; `הִזָּה … עַל` | *šub* = *nadû* = `הִשְׁלִיךְ` (Gilgameš *nadû*). [equivalent] ↔ the water sprinkled on one defiled by a corpse (במדבר יט:יג, יח). |
| to swear (someone) by the life of | *zi an-na zi ki-a pad₃* | *tummû nīš ilī rabûti* (97) | `בְּחַיֵּי שָׁמַיִם, בְּחַיֵּי אֶרֶץ – הִשְׁבִּיעוּ` (*ki* with *an*: no article, §2); `הַשְׁבַּע אוֹתָהּ בְּחַיֵּי הָאֵלִים הַגְּדוֹלִים` | *zi* = *nīšu* / *napištu*; *nīš ilim* = `חַיֵּי הָאֵל` (law corpus); *tamû* D = `הִשְׁבִּיעַ`. [equivalent] ↔ `חֵי פַרְעֹה` (בראשית מב:טו). |
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
| Sum. *šar₂* "mix (metal with dust)"; *sil* "split"; *dar* "split (wood)" (44–46) | `בָּלַל`; `בָּקַע`; `פִּצֵּל` (as drafted at 44–46: `אַל יִבְלֹל`, `אַל יִבָּקַע`, `אַל יְפַצֵּל`; §9) | The plea's three materials: silver, lapis, boxwood. |
| Sum. *kug* (metal, silver); *za-gin₃* (= Akk. *uqnû*, Ištar 129, 136); *{ĝiš}taškarin*; *zadim*; *nagar* | `כֶּסֶף`; `סַפִּיר` (vocalized at the first occurrence per file); `תְּאַשּׁוּר` (Gilg. *taskarinnu*); `סַתָּת`; `נַגָּר` | *za-gin₃* = *uqnû* = `סַפִּיר` in both texts and every corpus (2026-10-21, §10): [equivalent] ↔ `כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) – the biblical stone is lapis lazuli, not the modern sapphire (Inana 19, Ištar 129). |
| Sum. *ki-sikil* | `עַלְמָה` | Creation, temple. |
| Sum. *dumu* (Emesal *du₅-mu*) | `בַּת` (of a daughter), `בֵּן` / `יֶלֶד` otherwise | |
| Sum. *u₃-mu-un*, *umun*; *en*; *nam-en*; *nam-lagar* | `אָדוֹן`; `אָדוֹן`; `אֲדָנוּת`; `לַגָּרוּת` (note) | EWO / Agade (*nam-en* = `אדנות`). |
| Sum. *ki-sig₁₀* (Akk. *kispu*) | `סְעוּדַת הַמֵּתִים` | The offering meal for the dead (temple: *e₂-ninda-ki-sig₁₀* `בית־מזון־המתים`). [equivalent] ↔ `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד). |
| Sum. *kaš*; Akk. *šikaru* | `שֵׁכָר` [cognate] | |
| Sum. *di-kud*; *di … ku₅* | `דַּיָּן`; `דָּן דִּין` | Creation / law corpora. |
| Sum. *zid* (of a vizier); *sag₉*; *ge-en* / *gen₆* | `נֶאֱמָן`; `נָאֶה`; `נָכוֹן` | Laments. |
| Sum. *ḫi-li* | `חֵן` | Temple (*ḫi-li guru₃* `טעון חן`). ETCSL "wig". |
| Sum. *šembizid*; *igi … ĝar* | `פּוּךְ`, always vocalized (`הַפּוּךְ`; unvocalized `הפוך` reads "reversed"; was `כָּחָל`, changed 2026-10-21, §10); `עַל עֵינֶיהָ שָׂמָה` | [equivalent] ↔ `וַתָּשֶׂם בַּפּוּךְ עֵינֶיהָ` (מלכים ב ט:ל) – now the same noun and verb. An Akkadian *guḫlu* (not in these texts) would be `כָּחָל` [cognate]. |
| Sum. *ra-gaba* "envoy" (ORACC *ragaba*[rider]; 31, 174B, 292, 313) | `צִיר`, always vocalized (`צִירִי` 31, 313; `צִירָהּ` 174B; `צִיר` 292); masculine also for Ninšubur (`צִירִי נכונת־הדברים`, the rest of the line kept) | [equivalent] ↔ `וְצִיר אֱמוּנִים מַרְפֵּא` (משלי יג:יז), at 31. Unvocalized `צירי` reads "my birth pangs" (230, Ereškigal). Was `שָׁלִיחַ` (taken by Enmerkar's *kiĝ₂-gi₄-a*), changed 2026-10-21, §10. |
| Sum. *zi* (life); *nam-til₃*; Akk. *balāṭu*, *balṭu* | `חַיִּים`; `חַיִּים`; `חַיִּים`, `חַי` | |
| Sum. *uš₂* "die, death"; Akk. *mītu*, *mūtu* | `מָוֶת` / `מֵת` | ↔ `כִּי עַזָּה כַמָּוֶת אַהֲבָה` (שיר השירים ח:ו) in the notes on Inana and Dumuzi. |
| Sum. *lipiš* (figurative) | `חָרוֹן` (fixed at 169: `דְּבַר הֶחָרוֹן הַמַּר`; *lipiš bal* 190, 204 `בַּחֲרוֹנוֹ`) | Creation corpus: *lipiš* figurative = `קרב`; temple *lipiš … ra*. |
| Sum. *nam-tag* | `עָוֹן` | Laments (gated). |
| Sum. *tur₅* "sick"; *munus* | `חוֹלָה`; `אִשָּׁה` | |
| Sum. *u-u₈-a* (Ereškigal's cry) | `אוֹיָה` | Distinct from the laments' *me-li-e-a* `אוֹי לִי` and *a* `הוֹי`. [equivalent] ↔ `אוֹיָה לִי` (תהלים קכ:ה). |
| Sum. *šag₄*; *bar* (230–239: "inside" / "outside, body") | `קֶרֶב`; `גּוּף` (fixed at 236–241, as *bar-ra-na* `גּוּפָהּ` 21; §9) | ↔ `מֵעַי מֵעַי אֹחִולָה (אֹחִילָה)` (ירמיהו ד:יט). |
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
`איננה` (Inana / "is not"), `אותו` (Utu / "him"), `אן` (An), `אור` (Urim / "light"), `שרא` (Šara), `אומה` (Umma / "nation"), `סין` (Sîn / "China"), `בלילי` (Belili / "in my night"), `כות` (Kutha), `המה` (*me* / "they"), `נטי` (Neti): vocalize at every occurrence (checked where the name is in the source). `לשאול` / `שאול` (plene of `לִשְׁאֹל` "to ask", or `שָׁאוּל` "asked") read "to Sheol": never written (§6). `שׂוּמָה` / `שׂוּם` (stative of *ĝar* / *šakānu*) – never `הוּשְׂמָה` (laments). `גָּלָה` (the *gala* priest) – always vocalized. `שָׁחֲרוּ` (*ṣalāmu*) – vocalized (Gilgameš). `הַ־מֶה` – always with the maqaf and niqqud. `צִיר` / `צִירִי` / `צִירָהּ` (*ra-gaba*; `צירי` "my birth pangs") and `הַפּוּךְ` (*šembizid*; `הפוך` "reversed") – always vocalized (2026-10-21; checked by `verify`).

## 8. Deviations from the inherited renderings (recorded)
- *sukkal* / *šukkallu* = `וְזִיר` (creation, temple, Enūma eliš) instead of the Gilgameš corpus's netherworld title `שַׂר` (VIII): the Sumerian *sukkal* and the Akkadian *šukkallu* must read the same here (Ninšubur ↔ Namtar ↔ Papsukkal).
- *kabattu* = `כָּבֵד` (wisdom corpus; laments *ur₅*) instead of Gilgameš's `רוּחַ`: the most recent Akkadian corpus.
- *uznu* "ear" in *uzna šakānu / petû* = `אֹזֶן` (the literal image; Gilgameš default `בִּינָה`), because the Sumerian twin *ĝeštug₂* is also the ear, and the two openings must read alike.
- *kur* (netherworld) = `הָאָרֶץ`, a deviation from the Sumerian corpora's *kur* = `הַר` / `אֶרֶץ` "highland, foreign land": the sense is the netherworld throughout this text, and its Akkadian equivalent is *erṣetu* (§2).
- **Project 4 (2026-10-22):** *kalam* = `הַמּוֹלֶדֶת` (every other corpus `הארץ`): here `הארץ` is the netherworld (§11.8).
- **Project 4 (2026-10-21):** *dab₅* = `אָחַז` and *tug₂* = `שִׂמְלָה`, as Gilgameš XII (*ṣabātu*, *ṣubātu*), against Inana's Descent (`תָּפַס`, `בֶּגֶד`): the Akkadian translation of this very text decides (§11.1).
- *gam* = `הִכְרִיעַ` (Hiphil of the temple corpus's `כרע`); the lament and creation corpora use `הִכְרִיעַ` for *ka-aš bar* "decide" – a homograph across corpora, noted.

## 9. Revisions made during the drafting
(Merged by the coordinator; each item names the line and the reason.)
- *karru* (Ištar 82): `בֶּגֶד־אֵבֶל` → **`מַעֲטֵה אֵבֶל`** – the Adapa precedent (*karra labšāta* = `מעטה אבל לבוש אתה`, creation corpus) was found in an annotated `>` line, not in a renderings table. The Sumerian *tug₂-mu-dur₇-ra* keeps `בֶּגֶד־אֵבֶל` (Agade 88).
- *sippu* (Ištar 18a): `סַף` → **`מְזוּזָה`** (Gilgameš VI 15); Eshnunna's cognate `סַף` noted.
- *ur₄* (Inana 15, 103, 235, 262): `אָסְפָה` → `קָטַף` (ORACC *ur*[pluck]) in the drafting, to keep the echo between Inana's taking of the *me* (15) and Ereškigal's plucking of her hair (235). **Revised by the 2026-10-21 harmonization (§10):** a sense split – *ur₄* "gather" of the *me* (15, 103) = **`אָסַף`** (`את הַ־מֶה אספה`, as Enki and the World Order 65 `את הַ־מֶה אסף ואסף`, the identical phrase *me mu-un-ur₄-ur₄*); *ur₄* of hair "pluck" (235, 262) keeps **`קָטַף`** (`היא קוטפת`). The echo is now in the apparatus of 15 and 235.
- *ḫar-ra-an* (Inana 84) = `אֹרַח` – the Gilgameš / Ištar 6 `אֶל הָאֹרַח` (not the laments' `דֶּרֶךְ`), so that the Sumerian and the Akkadian "road of no return" read alike.
- *du₈* (*šu … du₈*, Inana 24, 25, 113, 291) = `אָחַז`; *ḫa-za* (286, 375, 376A) = `הֶחֱזִיק`; *dab₅* (283, 294, 350, 380) = `תָּפַס` (creation corpus) – three verbs of holding, kept apart.
- *us₂*: "push (bolt, door)" 74, 119–126 = `דָּחַף`; "adhere, stay" 193, 207 = `דָּבַק`; "follow" 345 = `הָלַךְ אַחֲרֵי` – one lemma, three senses by context (noted at each line).
- *de₂*: the speech formula *gu₃ de₂* = `פָּנָה אֶל`; *gu₃ … de₂* with a repeated noun (170, 356) = `נָתַן קוֹל`; libation (89) = `נָסַךְ`; milk (351) = `שָׁפַךְ`.
- *u₂* in the *galla* list (297, 361) kept `עֵשֶׂב` (not "food"): the demons "know no plant, no water" – the same two words as the plant and water of life (224–225); a footnote explains.
- *ur₂* = `חֵיק` (301, 303, 390–391), but of a weapon (292) `חֲלָצַיִם` (= Akk. *sūnu*).
- *kur-kur* (220) "the lands" = `הָאֲרָצוֹת` (plural; never the netherworld).
- *mussa* (370) = `בַּעַל־אֲחוֹתְךָ`, *murum₅* = `אֲחִי־אִשְׁתִּי` (`חָתָן` is gated by the Akkadian *ḫāwiru*).
- *ba* "allot" (246–247, 273–274, 397) = `חִלֵּק`; *niĝ₂-ba* (395, 397) = `מָנָה`.
- *za₃-mi₂ … dug₃* (412) = `תְּהִלָּתֵךְ מְתוּקָה` (Enki and Ninḫursaĝ 141 `תהילתך מתוקה`), not `טוֹבָה`.
- *nu-u₈-gig* (221) transliterated `נוּגִיג` (Akk. *qadištu*; `קְדֵשָׁה` reserved, apparatus only).
- Row "the eye of death" (§2) corrected to the drafted Hebrew of 168–170 (the pre-draft table had a slip); row "to swear" corrected to `בְּחַיֵּי שָׁמַיִם, בְּחַיֵּי אֶרֶץ` (no article, as §2's *ki* rule); §5 rows *šar₂ / sil / dar*, *lipiš*, *šag₄ / bar* brought in line with the drafted lines.

## 10. Shared with the other Round 2 runs (run 6 `../אגדות-מלכים/`, run 7 `../קולות-היום-יום/`)
Fixed here first, or adopted from the earlier corpora; the lead harmonizes leftovers. Inana `אִינַנָּה` ★; Dumuzi / Dumuzid `דּוּמוּזִי` ★ (never `תַּמּוּז`); Utu `אוּתוּ` ★; Nanna `נַנָּה`; Enki `אֶנְקִי`, Ea `אֵאָה`; Enlil `אֶנְלִיל`; Ereškigal `אֶרֶשְׁכִּיגַל` ★; Ninšubur `נִינְשׁוּבּוּר`; Unug / Uruk `אוּרוּךְ`; Eanna `אֵאַנָּה`; Kulaba `כֻּלַּבָּה`; Nibru `נִיפּוּר`; Eridug `אֶרִידוּ` (Emesal *uru₂-ze₂-eb* `אוּרוּ־זֶבָּה`); Šara `שַׁרָא` ★; *sukkal* `וְזִיר`; *i₃-du₈* / *atû* `שׁוֹעֵר`; *nin* / *bēltu* `גְּבִירָה`; *nin₉* `אָחוֹת`; *en* `אָדוֹן`, *nam-en* `אֲדָנוּת`; *me* `הַ־מֶה` ★; *ĝarza* / *parṣu* `פֻּלְחָן`; *kur* (netherworld) `הָאָרֶץ`; *ki-sikil* `עַלְמָה`; *gala* `גָּלָה`; *gal₅-la₂* `שֵׁד־גַּלָּה`; *tug₂-mu-dur₇-ra* `בֶּגֶד־אֵבֶל`, *karru* `מַעֲטֵה אֵבֶל` (Adapa); *ḫaš₄* / *pēnu* `יָרֵךְ`; *nim* `זְבוּב`; *ĝeštug₂* / *uznu* (the ear of attention) `אֹזֶן`. Added while drafting Inana 173–412: *kuš₂* `יָגַע`; *du₈* `אָחַז`, *ḫa-za* `הֶחֱזִיק`, *dab₅* `תָּפַס`; *nam tar* `גָּזַר גּוֹרָל`; *ĝidru* `שַׁרְבִיט`; *ra-gaba* `צִיר` (was `שָׁלִיחַ`, 2026-10-21); *ĝuruš* `בָּחוּר`; *en₃-še₃* `עַד מָתַי`; *dim₂* `עִצֵּב`; *ba* `חִלֵּק`, *niĝ₂-ba* `מָנָה`; *za₃-mi₂-zu dug₃-ga* `תְּהִלָּתְךָ מְתוּקָה`; *kadra* `תְּשׁוּרָה`; *zabar* `אָרָד`; *numun₂* `חַלְפָה`; *Lulal* `לוּלַל`; *Ningal* `נִינְגַּל`.

2026-10-21 harmonization (the lead's cross-corpus decisions, applied in this corpus): (1) *za-gin₃* = *uqnû* = `סַפִּיר` – Ištar 129 `בחליל סַפִּיר`, 136 `חליל הספיר` (were `לָזוּרִית`); Inana's `ספיר` unchanged, vocalized at the first occurrence per file (19 `הַסַּפִּיר`, 187 `סַפִּירְךָ`); [equivalent] notes (Exod 24:10, Ezek 1:26, Job 28:6) at Ištar 129 and Inana 19. (2) *šembizid* = `פּוּךְ` – Inana 22, 110 `את הַפּוּךְ` (were `הכחל`); the Akkadian Descent has no eye paint. (4) *ra-gaba* = `צִיר` – Inana 31 = 313 `צִירִי נכונת־הדברים`, 174B `צִירָהּ נכונת־הדברים`, 292 `צִיר אינו` (were `שליחתי`, `שליחתה`, `שליח`); [equivalent] Prov 13:17 at 31. (10) *ur₄* of the *me* = `אָסַף` – Inana 15 `את הַ־מֶה אספה`, 103 `א[ספה` (were `קטפה`); 235, 262 (the hair) keep `קוטפת`. `netherworld_tools.py verify` now checks these as formulas (§5) and the vocalization of `צִיר` / `הַפּוּךְ` as traps (§7). Already in line, no edit: Inana `אִינַנָּה` (9), *me* `הַ־מֶה` (8), *sukkal* / *šukkallu* `וְזִיר` (14), *en₃-du* `זִמְרָה` (12, Inana 335), *kabattu* `כָּבֵד` (13, Ištar 31, 96, 130); kept by the decisions "without edits": *kur* = *erṣetu* `הָאָרֶץ` (by sense), *ḫar-ra-an* `אֹרַח` (by sense), Dumuzi's vocalization. Not in these texts: *šu-ur₂-men*, *nam-šub* / *tu₆* / *šiptu*, *šudu₃*, *mušen*, *guru₇*.

## 11. Round 3 (run 5, 2026-10-21): what binds projects 3–4 (fixed by the coordinator before the first line)
Projects **3 Nergal and Ereškigal** (Akkadian, eBL `L/1/6`: the Middle Babylonian Amarna version `MB.…`, the Standard Babylonian Sultantepe/Uruk version `a+1`…`f+1`) and **4 Bilgameš, Enkidu and the Netherworld** (Sumerian, ETCSL 1.8.1.4 + ORACC Q000364: Version A, three Urim versions `U58.` `U59.` `U60.`, the Me-Turan version `MT.`). §0–§10 bind them like projects 1–2. Read both base texts in full first (`netherworld_tools.py lines NE|GEN …`).

### 11.1 Inheritance specific to the two texts
- **Project 4 and Gilgameš XII.** Gilg. XII (`../אפוס-גילגמש/1-הנוסח-הבבלי-התקני/annotated-XII.rtl.md`) is the ancient Akkadian translation of GEN 171–303. **Where the Akkadian renders the Sumerian word for word, the Sumerian takes XII's Hebrew letter for letter** (guidelines §5.2, "a formula takes the same Hebrew across languages"; the ancient translator's equations are evidence). Where XII changes, adds or drops something, the Hebrew differs exactly there, and the apparatus says so ([divergence] between the two versions: these are findings). The concordance is in `netherworld_tools.py` (`XII_CONC`); `python3 -I netherworld_tools.py xii FROM TO` prints each Sumerian line with its XII counterparts and their Hebrew. **Check every pairing** (the coordinator aligned by content; correct it in your proposals). The "BN N" references inside annotated-XII follow George 2003's numbering, about one line ahead of ETCSL there.
- Consequences inside project 4 (deviations from Inana's Descent, recorded in §8 below): *dab₅* = `אָחַז` (= XII *ṣabātu*; the refrain *kur-re im-ma-an-dab₅* = `הארץ אֲחָזַתְהוּ`, *nu-un-dab₅* = `לא אֲחָזוֹ`, vocalized as XII; Inana's Descent keeps `תָּפַס`, where it had to stay apart from *du₈* `אָחַז`); *tug₂* = `שִׂמְלָה` (= XII *ṣubātu*: *tug₂ dan₂-dan₂-na* = `שׂמלה זכה`; Inana's Descent keeps `בֶּגֶד`). One Hebrew per Sumerian word **inside** project 4.
- **Project 3 and the Descent of Ištar / Gilgameš.** The description of the netherworld (SB c+1–c+7) copies Gilg. VII 184–190 / Ištar 4–10 (§3; *bīt ekleti* = Gilg. VII 184 `אל בית החשכה, משכן אִירְכַּלָּה,`); the threat to raise the dead (d+71–72 = d+87–88) copies Ištar 19 `אעלה את המתים, ויאכלו את החיים,` and Gilg. VI 100 (Š, as here) `על החיים ארבה את המתים!`. The speech formula and *ina šemêšu* follow §4 and Gilgameš (`– כשמעו את זאת,`).

### 11.2 Names (★ = vocalized at every occurrence; checked by `verify`)
| Source | Hebrew | Notes |
|---|---|---|
| Nergal; Erra (SB: Nergal's other name, used side by side) | נֵרְגַל; ★ אֶרָּה | Gilgameš (`נֵרְגַל`; Errakal `אֶרָּכַּל`). `ארה` unvocalized reads "I pluck" (שיר השירים ה:א). The note at the first Erra: the two names of one god; Cuthah (`כּוּת` ★) and 2 Kgs 17:30. |
| Anu (Akk.); An (Sum.) | ★ אָנוּ; ★ אַן | `אנו` unvocalized = "we" (and *nīnu* "we" occurs in these lines: MB 3, SB a+6). |
| Kakka (Anu's vizier) | ★ כַּכָּא (2026-10-23 harmonization, was כַּכָּה) | eBL's *Kakka*, with a final aleph: neither `ככה` ("thus") nor `קקה`; the same in Enūma eliš. |
| Enlil / Ellil; Ea; Ea-Ninšiku | אֶנְלִיל; אֵאָה; אֵאָה־נִינְשִׁיכּוּ | |
| Nammu; Nanše; Ninurta | נַמּוּ; נַנְשֶׁה; נִינוּרְתָּה | |
| Lamaštu; Enmešar(ra) | לַמַשְׁתּוּ; אֶנְמֵשַׁר | Wisdom corpus (*lamaštu* `לַמַשְׁתּוּ`). |
| Bidu (the gatekeeper; SB c+41) | בִּידוּ | = Neti / Biti of Inana's Descent (`נֵטִי`): the note says so. |
| The gate names (SB c+41–47) | transliterated, vocalized | e.g. `אֶנְכִּישַׁר`, `אֶנְדַּשׁוּרִמָּה`, `אֶנוּרוּאוּלָּה`, `אֶנוּרוּבַּנְדָּה`, `אֶנְדּוּכּוּגָּה`, `אֶנּוּגִיגִי`; the note gives their meanings where known. |
| The fourteen demons (MB a+26–a+29, b+3–b+9) | fixed by the MB translator **once** for both lists (command / execution) | Transparent names translated as names (*rābiṣu* `רוֹבֵץ` [cognate] – Gilgameš XII, wisdom corpus; *bēl ūri* `בַּעַל־הַגַּג`; *miqit* `מַפָּל`…), opaque ones transliterated (*šarabdû*, *bennu*, *lību*); a note on each at its first occurrence. |
| Gilgameš (Sum. {d}gilgameš₂, read Bilgames); Enkidu; Ninsun | גִּלְגָּמֶשׁ (plain `גילגמש` afterwards); אֶנְקִידוּ; נִינְסוּן | One name in both languages (Gilgameš corpus); the first note gives the Sumerian reading *Bilgames*. |
| Inana; Utu; Enki (Emesal Amanki); Enlil (Emesal Mullil); Ereškigala (Emesal Gašan-kigala) | ★ אִינַנָּה; ★ אוּתוּ; אֶנְקִי; אֶנְלִיל; ★ אֶרֶשְׁכִּיגַל | §1. Utu stays `אוּתוּ` in the Sumerian, `שַׁמַשׁ` in XII (each language keeps its god's name; noted). Ningal `נִינְגַּל`, Ninazu `נִינַאזוּ`. |
| *nam-tar*; *a₂-sag₃*; *{d}udug {d}nergal* | ★ נַמְתָּר; אֲסַכּוּ; רוֹבֵץ נֵרְגַל | XII (`נַמְתָּר לא אֲחָזוֹ, אֲסַכּוּ לא אֲחָזוֹ`; *rābiṣ Nergal* `רוֹבֵץ נֵרְגַל`: the Akkadian translator rendered *udug* by *rābiṣu*; noted). |
| *anzud* (bird); *ki-sikil-lil₂-la₂* | אַנְזוּד; ★ עַלְמַת־הַמַּשַּׁב | *ki-sikil* `עַלְמָה`, *lil₂* `מַשַּׁב` (laments). [equivalent] ↔ `לִּילִית` (ישעיהו לד:יד) – **`לִילִית` reserved** (§12). |
| *{ĝiš}ḫa-lu-ub₂* | עֵץ־הַחַלּוּבּ | Temple corpus. |
| Unug, Kulaba, Eridug, Ekur; *buranun*; *ganzer*; Ĝirsu; *mar-tu*; *ki-en-gi ki-uri* | אוּרוּךְ; כֻּלַּבָּה; אֶרִידוּ; אֵכּוּר; פְּרָת; גַּנְזֵר; גִּירְסוּ; ★ מַרְטוּ; ★ שׁוּמֶר וְאַכַּד | Corpora. *mar-tu* = the Amorites: transliterated as in Enmerkar / Agade / EWO (`מַרְטוּ`), the note gives `הָאֱמֹרִי`. `שׁוּמֶר` unvocalized = "guard". |

### 11.3 Project 3 (Nergal and Ereškigal): key terms
| Akkadian | Hebrew | Tag / notes |
|---|---|---|
| *simmiltu*; *arkāt simmilat šamāmī* | `מַדְרֵגוֹת` (Gilg. I 15, III 43); `מַדְרֵגוֹת הַשָּׁמַיִם הָאֲרֻכּוֹת` | **`סֻלָּם` reserved** (apparatus only): [equivalent] ↔ `וְהִנֵּה סֻלָּם מֻצָּב אַרְצָה וְרֹאשׁוֹ מַגִּיעַ הַשָּׁמָיְמָה וְהִנֵּה מַלְאֲכֵי אֱלֹהִים עֹלִים וְיֹרְדִים בּוֹ` (בראשית כח:יב); a [cognate] *simmiltu* ~ `סֻלָּם` is proposed in the literature and disputed – say so, do not decide it by the Hebrew. |
| *elû*; *warādu* | `עָלָה`; `יָרַד` | §2. The messengers go up and down the stairway: the verbs of Gen 28:12 appear by themselves. |
| *mār šipri* | `שָׁלִיחַ` | Gilgameš, EST, LH. **`מַלְאָךְ` reserved** (wisdom corpus): [equivalent] ↔ Gen 28:12. |
| *bābu*; *atû*; *kisallu*; *tarbaṣu* | `שַׁעַר`; `שׁוֹעֵר`; `חָצֵר`; the MB translator fixes a different word | *bāb Anu Enlil u Ea* = `שַׁעַר אָנוּ, אֶנְלִיל וְאֵאָה` [equivalent] ↔ `וְזֶה שַׁעַר הַשָּׁמָיִם` (בראשית כח:יז). |
| *šukkallu*; *bēlu*, *bēltu*; *šarratu*; *mār(t)u*; *aḫātu*, *aḫu* | `וְזִיר`; `אָדוֹן`, `גְּבִירָה`; `מַלְכָּה`; `בֵּן` / `בַּת`; `אָחוֹת`, `אָח` | §2, §5. |
| *qerītu*; *kurummatu*; *paššūru*; *qīštu*; *zittu* | `סְעוּדָה` (Enūma eliš); the first translator fixes the rest after grepping (`netherworld_tools.py grep all`) | Keep *qīštu* "gift" and *zittu* "share" apart. |
| *šulmu*; *lū šulmu ana* … | `שָׁלוֹם` [cognate]; `"שָׁלוֹם לְ…?"` (question) / `"שָׁלוֹם לְ…"` (answer) | [equivalent] ↔ `הֲשָׁלוֹם לָךְ הֲשָׁלוֹם לְאִישֵׁךְ הֲשָׁלוֹם לַיָּלֶד וַתֹּאמֶר שָׁלוֹם` (מלכים ב ד:כו); `הֲשָׁלוֹם לוֹ וַיֹּאמְרוּ שָׁלוֹם` (בראשית כט:ו). The note: *lū* is the epistolary wish ("may it be well"), read here as a question. |
| *tebû* (*ina pān* X *lā itbû*); *kamāsu*; *(ašru)*; *qaqqara našāqu* | `קָם` (`אֲשֶׁר לֹא קָם לְפָנַי`); `כָּרַע` (Gilgameš OB, temple); the translator; `נָשַׁק אֶת הַקַּרְקַע` | [equivalent] ↔ `וּמָרְדֳּכַי לֹא יִכְרַע וְלֹא יִשְׁתַּחֲוֶה` (אסתר ג:ב); `וְלֹא קָם וְלֹא זָע מִמֶּנּוּ` (אסתר ה:ט) – the one who does not rise before the vizier. |
| *dâku*; *nakāsu* | `הָרַג`; `כָּרַת` (`לִכְרֹת אֶת רֹאשָׁהּ`) | |
| *ṣabātu*; *wuššuru* (*muššurīnni*) | `אָחַז` (harmonization); `שִׁלַּח` (flood corpus) | d+17 `שַׁלְּחִינִי` with d+25 "before daybreak": [equivalent] ↔ `שַׁלְּחֵנִי כִּי עָלָה הַשָּׁחַר` (בראשית לב:כז). |
| *lām urru inammeru* | `לִפְנֵי שֶׁיֵּאוֹר הַיּוֹם` (or the like; **`טֶרֶם` is reserved**, §6) | |
| *mutu*; *aššatu*; *ḫāʾiru* / *ḫāwiru*; *lalû* | `בַּעַל` (law corpus); `אִשָּׁה`; `חָתָן` (gated, §6); the translator (grep) | b+20 `"אַתָּה הֱיֵה בַעְלִי, וַאֲנִי אֶהְיֶה אִשְׁתְּךָ!"` [equivalent] ↔ the marriage formula `כִּי הִיא לֹא אִשְׁתִּי וְאָנֹכִי לֹא אִישָׁהּ` (הושע ב:ד). |
| *šarrūtu*; *erṣetu rapaštu*; *qaqqaru rapšu*; *erṣetu rabītu*; *ṭuppu ša nēmeqi* | `מַלְכוּת`; `הָאָרֶץ הָרְחָבָה` (Gilgameš); `הַקַּרְקַע הָרְחָבָה`; `הָאָרֶץ הַגְּדוֹלָה`; `לוּחַ הַחָכְמָה` | |
| *dīna diānu* / *dīna epēšu*; *parṣū* | `דָּן דִּין` / `עָשָׂה דִּין`; `פֻּלְחָן` (§2) | Law corpus (*dīnum* `דִּין`). |
| *našāqu*; *dimtu*; *kapāru* D (tears) | `נָשַׁק` [cognate]; `דִּמְעָה`; `מָחָה` | *kapāru* "wipe" ~ `כִּפֵּר` [cognate] ↔ `אֲכַפְּרָה פָנָיו בַּמִּנְחָה` (בראשית לב:כא); [equivalent] ↔ `וּמָחָה אֲדֹנָי יְהוִה דִּמְעָה מֵעַל כָּל פָּנִים` (ישעיהו כה:ח). `כפר` stays gated (*kupru*), so `כִּפֵּר` is not written. (Cross-corpus note: the treaty corpus has *pašāṭu* = `מָחָה`: a different text, recorded.) |
| *nuḫatimmu*; *ṭābiḫu*; *sīrāšû*; *šāqû*; *mēsû*, *mesû* (*šēpī*) | `מְבַשֵּׁל` (2026-10-30 harmonization, was `אוֹפֶה`: `אוֹפֶה` is the cognate of *ēpû* "baker"); `טַבָּח` [cognate]; the translator; `מַשְׁקֶה` [cognate]; `רָחַץ` (`רָחַץ רַגְלַיִם`) | [cognate] (*šāqû*) / [equivalent] (*nuḫatimmu*) ↔ `מַשְׁקֵה מֶלֶךְ מִצְרַיִם וְהָאֹפֶה` (בראשית מ:א); [equivalent] ↔ `וְרַחֲצוּ רַגְלֵיכֶם` (בראשית יח:ד). |
| *akalu*; *šīru*; *šikaru*; *kussû*; *mesīt šēpī* | `לֶחֶם`; `בָּשָׂר`; `שֵׁכָר` [cognate]; `כִּסֵּא` [cognate]; the translator | §5. |
| *zikar u sinniš* (*ša zikar u sinniš*) | `זָכָר וּנְקֵבָה` (`אֲשֶׁר לְזָכָר וּנְקֵבָה`) | *zikaru* ~ `זָכָר` [cognate], *sinništu* `נְקֵבָה` [equivalent] ↔ `זָכָר וּנְקֵבָה בָּרָא אֹתָם` (בראשית א:כז). `בָּרָא` stays reserved. |
| *narmaku*; *mayyālu*; *naʾduru* (*innadrū*) | `חֲדַר הָרַחְצָה`; `מִשְׁכָּב` (Gilg. XII 147); `לָפַת` (Gilg. XII 88 `לָפְתוּ`) | |
| *ṣalālu* (7-day refrain) | `יָשַׁן` (Gilg. XII) | Refrain fixed in §11.5. |
| *ardatu*; *ṣeḫertu*; *mēlulu* (noun); *dakāku* | `עַלְמָה`; the translator; `מָחוֹל` (everyday voices: *mēlula* `המחול`); the translator | [equivalent] ↔ `אָז תִּשְׂמַח בְּתוּלָה בְּמָחוֹל` (ירמיהו לא:יב). |
| *reḫû* (*urtaḫânni*); *bâtu* | the translator (keep apart from *niāku* `בָּא עַל` and *nâlu* `שָׁכַב`); `לָן` | [equivalent] ↔ `לִינִי הַלַּיְלָה` (רות ג:יג). |
| *musukkatu*; *ebbu* | `טְמֵאָה`; `צַח` (changed 2026-10-22, §11.7: *ellu* keeps `טָהוֹר`) | [equivalent] ↔ Lev 12, 15 (the apparatus quotes after printing). `נִדָּה` never (false friend, §6.7 of the guidelines). |
| *qubbuḫ ṣuddur pussul* | the translator (plain Hebrew for "bald, squinting, lame") | Describe the defect as the text does; the apparatus: `עִוֵּר אוֹ פִסֵּחַ` (ויקרא כא:יח), `עֲלֵה קֵרֵחַ` (מלכים ב ב:כג), `וְהוּא צֹלֵעַ עַל יְרֵכוֹ` (בראשית לב:לב). |
| *mê kuppi* | `מֵי מַעְיָן` (or the like) | `בּוֹר` is reserved (§6). |
| *ūmī dārûti* | `לְעַד` / `לָנֶצַח` | `עוֹלָם` is reserved (§6; creation corpus §5). |
| *ellilūtu*; *qarrādūtu* | `אֶנְלִילוּת`; `גְּבוּרָה` | |

### 11.4 Project 4 (Bilgameš, Enkidu and the Netherworld): key terms
| Sumerian | Hebrew | Tag / notes |
|---|---|---|
| *ud re-a*, *ĝi₆ re-a*, *mu re-a*; *ud ul* | `בַּיָּמִים הָהֵם`, `בַּלֵּילוֹת הָהֵם`, `בַּשָּׁנִים הָהֵן` (creation corpus 2:1–2); *ud ul* `בימים רחוקים` (§11.8; Bird and Fish 1) | [equivalent] ↔ `בַּיָּמִים הָהֵם` (בראשית ו:ד). |
| *an ki-ta ba₉*; *ki an-ta sur* | `הִפְרִיד` (creation corpus 2:4–5 `להפריד את השמים מן הארץ`); *sur* the translator | **Never `הִבְדִּיל`** (guidelines §6.7: Mesopotamian cosmology has no `רָקִיעַ` and no `בדל`). [divergence] ↔ Gen 1:6–7. |
| *an* / *ki* (heaven / earth); *kur* | `שָׁמַיִם` / `אֶרֶץ` (no article, §2); `הָאָרֶץ` (the netherworld) | §2; 13 `לְאֶרֶשְׁכִּיגַל – אֶת הָאָרֶץ …`. |
| *mu nam-lu₂-u₁₈-lu … ĝar* | `שֵׁם הָאֱנוֹשׁוּת … שָׂם` | *ĝar* = `שׂם` (reserved by rule). [equivalent] ↔ `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד). |
| *{im}šu-rin-na*; *ninda* | `תַּנּוּר` [cognate through Akk. *tinūru*]; `לֶחֶם` | Guidelines §6.7. |
| *{ĝiš}ma₂*; *ur-bar-ra*; *ur-maḫ* | `סְפִינָה`; `זְאֵב`; `אַרְיֵה` | |
| *{ĝiš}kiri₆* (Inana's garden); *gi-rin* | `גַּן` (gated in every corpus: only *kiri₆* / *kirû*); the translator (`נָאֶה`? `רַעֲנָן`?) | [equivalent] ↔ `וַיִּטַּע יְהוָה אֱלֹהִים גַּן בְּעֵדֶן` (בראשית ב:ח) – the tree, the snake at its root, the bird in its crown, the phantom maiden in its trunk (Gen 2–3, Isa 34:14). Look; do not force. |
| *muš tu₆ nu-zu* | `נָחָשׁ אֲשֶׁר קֶסֶם אֵינוֹ יוֹדֵעַ` | *tu₆* = `קֶסֶם` (2026-10-21 harmonization); `נחש` gated by *muš*, `ידע` by *zu*. [equivalent] ↔ `נְחָשִׁים צִפְעֹנִים אֲשֶׁר אֵין לָהֶם לָחַשׁ` (ירמיהו ח:יז); `כְּמוֹ פֶתֶן חֵרֵשׁ יַאְטֵם אָזְנוֹ` (תהלים נח:ה). |
| *mušen*; *amar* | `צִפּוֹר`; `גּוֹזָל` | Harmonization (*mušen* never `עוֹף`). |
| *{ĝiš}ellag*; *{ĝiš}e-ke₄-ma* | ★ `פּוּכּוּ`; ★ `מֵכּוּ` (`הַפּוּכּוּ`, `הַמֵּכּוּ`) | XII (*pukku*, *mekkû*); always vocalized (`הפוכו` reads "his opposite"). |
| *gidim* | ★ `אִט`, pl. `אִטִּים` | XII (*eṭemmu*). |
| *er₂ še₈*; *a-nir*; *i-lu* | `בָּכָה` (gated); `אֲנָחָה`; the translator | §5, laments. |
| *arad*; *lugal*; *gu₅-li*; *ama*; *a-a*; *nin₉*; *šeš* | `עֶבֶד`; `מֶלֶךְ`; `רֵעַ` (XII `רֵעִי`, vocalized); `אֵם`; `אָב`; `אָחוֹת`; `אָח` | XII has `אדוני` (*bēlī*) for *lugal-ĝu₁₀*: the Sumerian keeps `מַלְכִּי` – a [divergence] for the apparatus. |
| the interrogation formula *lu₂ X igi bi₂-du₈-am₃ igi bi₂-du₈-am₃ a-na-gin₇ an-ak* (Version A, U58) | `"אֶת אֲשֶׁר X – רָאִיתָ?" "רָאִיתִי." "אֵיךְ נַעֲשָׂה לוֹ?"` (plene `ראית`, `ראיתי`, `איך נעשה לו`: §11.5) | XII `"את אשר … – ראית?" "ראיתי:` (XII has no "how is he treated?": noted once). *igi … du₈* = *amāru* = `רָאָה`. |
| U59, Me-Turan: *igi bi₂-du₈-a a-na-gin₇ i₃-ĝal₂* | `"אֶת אֲשֶׁר X – רָאִיתָ? אֵיךְ הוּא?"` | |
| *ki-sig₁₀* / *ninda ki-sig₁₀*; *a si-ig-ga* / *a sig₉-ga*; *a ki-lul-la* | `סְעוּדַת הַמֵּתִים` (§5); the translator (`מַיִם זַכִּים` = XII 147 *mê zakûti*); the translator | [equivalent] ↔ `וְלֹא נָתַתִּי מִמֶּנּוּ לְמֵת` (דברים כו:יד). |
| *dub-sar*; *e₂-gal*; *apin*; *anše* | `סוֹפֵר`; `הֵיכָל` [cognate] (gated: *e₂-gal* / *ēkallu*); `מַחֲרֵשָׁה`; `חֲמוֹר` | XII 111–114. |

### 11.5 Formulas fixed before drafting (checked by `verify` where a regex can do it)
**Project 3 (Akkadian)**
| Akkadian | Hebrew |
|---|---|
| X *pâšu īpuš-ma iqabbi ana* Y *amāta izakkar* (one line) | `X פָּתַח אֶת פִּיו וְאָמַר, אֶל Y דָּבָר דִּבֵּר:` (fem. `פָּתְחָה אֶת פִּיהָ וְאָמְרָה, אֶל Y דָּבָר דִּבְּרָה:`; plene `דיבר`, `דיברה`) – the Ištar formula (§4) on one line, as Gilgameš has it |
| X *annīta ina šemîšu / šemêša* | `X – כְּשָׁמְעוֹ אֶת זֹאת,` / `– כְּשָׁמְעָהּ אֶת זֹאת,` |
| *urid / īlâ* X *arkāt simmilat šamāmī* | `יָרַד X בְּמַדְרֵגוֹת הַשָּׁמַיִם הָאֲרֻכּוֹת.` / `עָלָה X …` |
| *ana bāb ānu ellil u ea ina kašādīšu* / *ānu ellil u ea īmurūšū-ma* | `כְּהַגִּיעוֹ אֶל שַׁעַר אָנוּ, אֶנְלִיל וְאֵאָה,` / `אָנוּ, אֶנְלִיל וְאֵאָה רָאוּהוּ,` |
| *N bāba ušēriba ila kakka* (a+15–21) | `בַּשַּׁעַר הָרִאשׁוֹן הֱבִיאוֹ אֶת הָאֵל כַּכָּא,` (ordinals of §4) |
| *N bāba ša* G *ina erēbīšu* (c+41–47) | `כְּשֶׁבָּא אֶל הַשַּׁעַר הָרִאשׁוֹן, (שַׁעַר) שֶׁל G,` – the translator fixes the exact form at c+41 |
| *īrub-ma ana palkî kisallīša / ikmis iššiq qaqqara maḫrīša / īšir izzaz izakkarši* | fixed at a+22–24, copied at c+48–50 and e+29 |
| the message *umma attī-ma ul ša elî …* (a+4–10 = a+26–32) and Ereškigal's message (d+62–72 = d+78–88) | fixed at the first copy; the later copies are copied letter for letter (brackets follow each copy) |
| the taboos *ē taʾīr-ma ē* … (b+40–49) → their keeping *ul iʾīram-ma ul* … (c+55–64) → their breach (d+5–8) | command / execution: the same nouns and verbs, prohibitive → past (`אַל …` → `לֹא …`) |
| the 7-day refrain *ištēn ūma šanâ ūma ṣallū-ma šarratu ereškigal u erra* (d+11–14, e+37–41) | `יוֹם אֶחָד, יוֹם שֵׁנִי – יָשְׁנוּ הַמַּלְכָּה אֶרֶשְׁכִּיגַל וְאֶרָּה;` (`שְׁלִישִׁי`, `רְבִיעִי`, `חֲמִישִׁי`, `שִׁשִּׁי`, `שְׁבִיעִי`) – [equivalent] ↔ the seven days (Gen 1–2; 29:27 `מַלֵּא שְׁבֻעַ זֹאת`, the wedding week; Judg 14:12) |
| *innadrū-ma aḫḫū kilallān / ana mayyāli šitmuriš īterbū* (d+9–10 = e+35–36) | fixed at d+9–10 |
| *mīnâ tallak* X / *māratkunu išpuranni* (d+76–77 = d+105–106) | fixed at d+76–77 |
| *ušellī-ma mītūti ikkalū balṭūti / el balṭūti ušamʾad mītūti* | `אעלה את המתים, ויאכלו את החיים,` / `על החיים ארבה את המתים!` (§11.1) |

**Project 4 (Sumerian)**
| Sumerian | Hebrew |
|---|---|
| the prologue 1–26 = 52–69 (Inana to Utu) = 96–113 (to Gilgameš); the tree 27–49 = 70–89 = 114–133 | fixed at 1–49; the later copies copy them (vocatives, Emesal forms and pronouns change; *nu-nus* = *munus* `אִשָּׁה`) |
| *X gu₃ mu-na-de₂-e*; *inim mu-un-na-ni-ib-gi₄* | `X פּוֹנֶה אֶל Y:` (§4); `X מֵשִׁיב לְ… דָּבָר:` / the corpus's `מֵשִׁיב לוֹ:` |
| *inim-bi nu-mu-de₃-gub* / *inim-bi ba-de₃-gub* (90, 135, 229, 237) | `בדבר הזה לא עמד לצדה` / `בדבר הזה עמד לצדה` (`לצדו` for a man; §11.8; XII 63 `דבר לא ענה לו` for 229 is a different Akkadian: noted) |
| Gilgameš's instructions 184–198 → Enkidu's breach 206–220 | command / execution as XII 13–27 → 33–47 (copy XII where it renders the Sumerian; §11.1) |
| the appeal to Enlil 222–229 → to Enki 230–237 (and the Me-Turan copy) | fixed at 222–229 (XII 55–63) |
| the refrain *nam-tar nu-un-dab₅ a₂-sag₃ nu-un-dab₅ kur-re im-ma-an-dab₅* etc. (226–228 = 234–236) | XII 52–54 letter for letter: `נַמְתָּר לא אֲחָזוֹ, אֲסַכּוּ לא אֲחָזוֹ – הארץ אֲחָזַתְהוּ!` … |
| the interrogation formula | §11.4 |

### 11.6 Reserved for projects 3–4 (added to §6; checked by `verify`)
**Never:** `סֻלָּם`; `מַלְאָךְ` (any form); `לִילִית`; `הִבְדִּיל` (any form of בדל); `רָקִיעַ`; `טֶרֶם` (already); `בּוֹר` (already); `עוֹלָם` (already). **Gated:** `גַּן` – *kiri₆*; `פּוּכּוּ` / `מֵכּוּ` – *ellag* / *e-ke₄-ma* / *pukku* / *mekkû*; `הֵיכָל` – *e₂-gal* / *ēkallu*.

### 11.7 Merged after project 3, part 1 (SB a+1–b+50, 2026-10-22)
The translator's table of fixed strings (`3-נרגל-וארשכיגל/project.md`, "Proposals") **binds the later copies letter for letter**: the speech formula `אָנוּ פתח את פיו ואמר, אל כַּכָּא וזירו דבר דיבר:`; the message a+4–10 (`לאמור: 'אַתְּ – לא לך לעלות;` … `שליחך יבוא,` / `יְפַנֶּה את השולחן, יקבל את מתנתך;`); `כהגיעו אל שער …`; `"שוער, פתח לי את השער!"`; the gates `בשער הראשון הֱבִיאוֹ את האל כַּכָּא,`; the kneeling `בא אל חצרה הרחבה,` / `כרע, נשק את הקרקע לפניה,` / `התיישר, עומד ומדבר אליה:` (= Enūma eliš III 70); the greeting `שלום לX?` / `שלום לX;`; `האלים (הגדולים) היושבים בקרב אירכלה`; Ea's woodcutting command → execution; **the taboos**: `X Y נושא לך – אל תיגש, ואת Yו אל תאכל!` (*âru* "approach" = `ניגש`, against Foster's "take care"), the last `אתה – אשר לזכר ונקבה אל תאחז? בלבך`; the keeping (c+55–64) changes only `אל` + future → `לא` + past and `לך` → `לו`. b+26–28 = Gilg. X 92–94 and b+37 = Gilg. III 120 (`ושׂמה טַעַם`, vocalized, the "decree" sense) are copied from Gilgameš. Words: *umma* `לאמור`; *šapāru* `שָׁלַח`; *nīnu* `אֲנַחְנוּ` (never `אנו`); *ana maḫri* `לִפְנֵי`; *šattu* `שָׁנָה`, *warḫu* `חודש`; *paššūru* `שולחן`; *paṭāru* (a table) `פִּנָּה`; *qīštu* `מַתָּנָה`; *šalimtu* `שְׁלֵמוּת` [cognate].
**The coordinator's rulings on the open decisions** (the user's rule: minor things decided and recorded):
1. Kakka stays `כַּכָּה` (the eBL normalization *kaka*); Enūma eliš's `גַּגָּא` follows that edition's reading of the same god: a note at the first occurrence names both. [Settled 2026-10-23, §11.15: `כַּכָּא` in both corpora.]
2. *arkāt simmilat šamāmī*: the fixed `במדרגות השמים הארוכות` stays; the note gives eBL's reading (*arkātu* "the length(s) of").
3. *ebbu* = **`צַח`** (accepted), so that *ellu* keeps `טָהוֹר` (precedent); §11.3 row changed: d+67 `טמאה אני – ולא צחה`. *musukkatu* stays `טְמֵאָה`.
4. *mātu* = `ארץ` (no article) stays; *erṣetu* (netherworld) = `הארץ`; where the line could mislead, the note says which.
5. `בא` for *alāku* + ventive and for *erēbu*: accepted (Hebrew has no ventive); *erēbu* "enter (a gate)" keeps `בא אל`.
6. The literal `אל תיגש` (*âru*) stays (fidelity, §1); all ten lines stay together.
7. *našû* stative: `נושא` of a person, `נִשָּׂא` of a thing: accepted.
8. eBL's lemma *agû* "crown" for the tool (b+20) is a slip: recorded in the line's note.

### 11.8 Merged after project 4, part 1 (lines 1–135, 2026-10-22)
The translator's tables (`4-גילגמש-אנקידו-והעולם-התחתון/project.md`, "Proposals") **bind the later copies and lines 136–171**: the prologue (1–3 copied from Šuruppag 1–3 `בימים ההם, בימים הרחוקים ההם,` …; `כאשר שמים מארץ הוּפְרְדוּ,`; `כאשר את שם האנושות שָׂם,`; `כאשר אַן שמים נשא,`; `כאשר לְאֶרֶשְׁכִּיגַל את הארץ למתנה העניקו,`), the tree (`בשורשיו – נחש אשר קסם אינו יודע – קן הדביק;` / `בענפיו – הציפור אַנְזוּד – גוזל שָׂמָה;` / `במותניו – עַלְמַת־הַמַּשַּׁב – בית בנתה;`; `גן־הפרחים`, `כיסא־פרחים`, `מיטת־פרחים`), the dawn and the speech formula (`אחותו, אִינַנָּה הטהורה, / פונה אל הגיבור, העלם אוּתוּ:`).
**The coordinator's rulings on the open decisions:**
1. *kalam* = **`הַמּוֹלֶדֶת`** in project 4 only (every other corpus: `הארץ`), because `הארץ` is the netherworld here; 3 lines (7, 50 copy, 7 copy). Recorded as a deviation (§8).
2. *du₃* of a tree = **`נָטַע`** (Gudea precedent): the Sumerian says "plant", so it is the real counterpart of Gen 2:8 `וַיִּטַּע` [equivalent]; the creation corpus's ban covers its own texts, which have no planting.
3. *ra* = **`מָחַץ`** throughout project 4 (= XII *maḫāṣu*; the corpus §2); Šuruppag's `מכה` stays there.
4.–5. *zal* `עבר` / `נגה` by context; the persons of Inana's speeches follow the possessives: accepted.
6. *gi-rin* = `פְּרָחִים` (as a construct `גן־הפרחים`): accepted.
7. *ur₂* = `שֹׁרֶשׁ` also for the keel and *an-ur₂* "the root of heaven" (the horizon): accepted, with a note at each.
8. *amar* (of a bird) = **`גּוֹזָל`** – the Sumerian precedent (Gudea A.xxi.4, Anzud and its *amar*; Bird and Fish 104, 132). Etana's reservation of `גּוֹזָל` (Deut 32:11) covers its own Akkadian *atmu* = `אֶפְרוֹחַ`, a different word; the apparatus of GEN 43 names Deut 32:11 and says the image is not the Bible's (Anzud's chick in a goddess's tree). A cross-language split by source word, recorded for the lead.
9. *inim-bi (nu-)gub* = **`בדבר הזה (לא) עמד לצדה / לצדו`** (Inana's Descent 221A, identical to GEN 237): §11.5's provisional row is replaced.

### 11.9 Merged after project 3, part 2 (SB c+1–c+65, d+1–d+56, 2026-10-22)
The translator's table in `3-נרגל-וארשכיגל/project.md` binds the later copies (`האל ההוא`; `נַמְתָּר הלך, ואל גבירתו דבר דיבר:`; `כורעים, כפופים, האלים כולם,` / `כורעים, כפופים, האלים של ארץ.`; `אל חצר אָנוּ – בבואי/בבואו,`; the stairway, gate and seeing lines of d+26–28; Ea's disguise `אאה אביו – מי מעיין יַזֶּה עליו; קֵרֵחַ, פּוֹזֵל, חִגֵּר, …`; `דּוּנִי את דין האלים הגדולים,` → d+67 `לא אָדוּן את דין…`; the embrace `לָפְתוּ זה את זה, שניהם,` / `אל המשכב בפראות באו.`; the 7-day refrain; `לחמנו יאכל, שכרנו ישתה!`; `לפני שיאור היום – הָרוֹ עָלָה.`). c+1–7 copy Gilg. VII 184–188 / Ištar 9–10; c+23–24 Ištar 29–30; d+52 Gilg. XI 309.
**Rulings:** 9. *wadû* D = **`ידע`** (Gilg. XII 14 `יֵדְעוּךָ`; c+15 `יֵדָעֵהוּ`, c+19 `אֵדָעֵהוּ` changed by the coordinator; the `ידע` gate now accepts *wadû*). 10. *ṭeḫû* `התקרב` (kept apart from *âru* `ניגש`): accepted. 11. *šasû* `צעק` (Gilg. III 120): accepted. 12. `האלים של ארץ` (*ilū ša māti*): accepted; the note says "the land" = the upper world. 13. the Uruk-only `(umma)` untranslated, as the guidelines' header rule for words in parentheses. 14. *šadâšu elû* literal `הָרוֹ עלה`, with a note on the idiom ("to depart"): accepted. 15. *pussulu* `חִגֵּר` (neither Lev 21:18 `פִסֵּחַ` nor Gen 32:32 `צֹלֵעַ`): accepted. 16. the present kept at c+63, d+7: accepted. **Gate catch:** `שלחתני` contains `חתני` (the `חתן` gate): write `שלחת אותי` (c+26; also d+98).

### 11.10 Merged after project 4, part 2 (lines 136–253, 2026-10-22)
XII's Hebrew copied wherever the Akkadian renders the Sumerian word for word (186, 189, 191–198, 201, 214, 216–220; the refrain 226–228 = 234–236), tagged [cognate] with the XII line; elsewhere the Hebrew differs exactly where XII differs ([divergence] / [absent]) – findings: XII 92's refusal "I will not tell you" is a double reading of one Sumerian wish (246 *nu-uš-*); the Sumerian "servant … with his breeze" (240, 242) becomes XII's "ghost of Enkidu like a breath"; "an old garment" (251; Job 13:28) becomes XII's "an old beam". **`XII_CONC` corrected** in `netherworld_tools.py` from the translator's list (183, 231 none; 205 → 32; 210 → 37; 225–228 → 59–62 only; XII 31, 37a, 51–54, 64–71, 84–85 have no Version A counterpart; 246 → 90 + 92; 248 → 94 + 95; 250 → 98?; 251 → 97; 252 → 99). Binding for the next parts: the interrogation formula `"את אשר X – ראית?" "ראיתי." "איך נעשה לו?"` (245 `"את צו הארץ – ראית?`), `רֵעִי`, `האִטִּים`, `הארץ אֲחָזַתְהוּ`, `תלונת הארץ`, `אוי`; *a si-ig-ga* = `מים זכים` (XII 147 *mê zakûti*).
**Rulings:** 10. the `verify` false positive at 176 fixed in the tool (variant parentheses are now removed before the italic notes). 11. the sense splits *du₃* `חגר` (136) / `זקוף` (161), *il₂* `הרים`, *u₅* `רכב`, *al dug₄* `שיחק`: accepted, each noted. 12. *dur₂* `מושב` (`תחתית` reserved): accepted. 13. prohibitions `לא` + future as XII: accepted. 14. *niĝin₂* = `סובב` throughout (XII uses two verbs: noted as a divergence): accepted. 15. 225/233 `להעלותם *שב*`: accepted. 16. the uncertain words as listed.

### 11.11 Merged after project 3, part 3 (SB d+57–f+1, 2026-10-22): the SB complete
All repeated passages checked by script against their first copy (brackets stripped): d+62–72 = d+78–88, d+73–77 = d+102–106, d+9–14 = e+35–41, a+1–3 = e+43–45, a+12–13 = e+20–21, a+22 = e+29, c+25 = d+97, c+28–29 = d+93–94; the differences are the Akkadian's own. Fixed strings: Ereškigal's message (`לאמור: 'מאז קטנה הייתי, ובת הייתי,` / `לא ידעתי את מחול העלמות,` / `לא ידעתי את דילוג הקטנות.` … `טמאה אני – ולא צחה? לא אָדוּן את דין האלים הגדולים,` …); `"מה באת, נַמְתָּר?"` / `"בתכם שלחה אותי,`; `אחד סקר – ולא ראה את האל ההוא;`; *ana ūmī dārûti* `לִימֵי נֶצַח` (Etana precedent).
**Rulings:** 17. *reḫû* = `נִזְקַק` (rabbinic "had intercourse"; kept apart from *niāku* `בא על`, *nâlu* `שכב`), *itūlu* = `שָׁכַב`: accepted. 18. *ašāru* `סָקַר` (Enūma eliš VII 122): accepted. 19. *qāta mullû* `אמסור` (not the false friend `מִלֵּא יָד`; Exod 28:41 in the apparatus): accepted; added to the false friends for the guidelines §6.7. 20. *nêʾu irta* `הַטֵּה חזך`: accepted. 21. *ḫamāṣu* `תָּלַשׁ`, *uprû* `צָנִיף`, *ṣerretu* `מֵיתָר`, *talālu* `דָּרַךְ`: accepted (new). 22. e+22–28: the gatekeeper is the object, the verb `…` as the edition: accepted.

### 11.12 Merged after project 4, part 3 (254–303, U58, U59, U60, 2026-10-22)
The interrogation copies XII wherever the Akkadian renders it; **XII departs from the Sumerian three times, each a finding**: XII 149 drops the negation of 291 (the fallen soldier's parents do *not* hold his head; certain in U59.B3); XII 153 `גרידות סיר` translates the Urim wording (*utul₂*, U58.15), not Version A – the Akkadian translator used a manuscript like UET 6 58; XII 147 adds "and drinks clean water" to the man who died his god's death – the closing motif of U60. `XII_CONC` corrected (290 → 148, 291 → 149, 292 → 152, 293 → 153, 294 → 144, 295–296 → 145, 297 none, 300 → 146, 301 → 147; XII 150–151 have no Version A line; XII 151 ~ U58.19). Binding for the Me-Turan part: the two-line formula `"את אשר X – ראית?` / `איך הוא?"`; the sons' answers 255–267; `ילודי־הנֵּפֶל`; the leper `… מחוץ לעיר יושב`; `"את אשר באש נשרף`; the refrain 226–228 and the Ekur lines 222–224.
**Rulings:** 17. plene `כיסא` everywhere in project 4 (XII 116): accepted (annotated-1 38, 81, 125; annotated-2 147 changed by the translator; §11.8 updated). 18. the formula only as far as the Sumerian has it: accepted. 19. new words: *tiru* `איש־החצר`; *nu-u₃-tud* / the stillborn `ילודי־הנֵּפֶל` (never `נְפָלִים`, Gen 6:4); *tug₂* "a cloth spread over" = `בגד` (a sense split from the worn *tug₂* `שׂמלה`, recorded); *alan* `פסל`; *ki ḫul* `המקום הרע`: accepted. 20. the strings `בראש` and `עירם` avoided in `>` lines (Gen 1:1, "naked"): accepted; no new gate. 21. the uncertain words as listed.

### 11.13 Merged after project 3, part 4 (MB, 2026-10-22): project 3 complete (420/420)
The fourteen demons, fixed at MB a+26–29 and copied at b+3–9: `מִתְבָּרֵק`, `שַׁרַבְּדּוּ`, `רוֹבֵץ` [cognate ↔ Gen 4:7], `מְגָרֵשׁ`, `נְשִׁיבָה`, `בֶּנּוּ`, `סְחַרְחֹרֶת`, `מַפָּל`, `בַּעַל־הַגַּג`, `חֹם`, `לִיבּוּ`, `צְמַרְמֹרֶת` (`רֶשֶׁף`, `דֶּבֶר`, `קֶטֶב` in the apparatus only); *tarbaṣu* `מַרְבֵּץ`; *lā itbû* `לא קם` (SB *kamāsu* `כרע`); the MB copies the SB Hebrew where the Akkadian is the same.
**Rulings:** 23. the demons' names as above: accepted. 24. *dabābu* `סיפר`: accepted. 25. *tarbaṣu* `מרבץ` (same root as `רובץ`; the note says so): accepted. 26. *qadādu* `הרכין`: accepted. 27. `מנה` for the noun *kurummatu* (`מָנָה`, "portion") and the verb *manû* (`מָנָה`, "counted") – a homograph of two parts of speech, vocalized where ambiguous: accepted. 28. `בוכה, מתענה` unvocalized for both genders where the subject is broken: accepted. 29. *āmeru* `רואים`: accepted.

### 11.14 Merged after project 4, part 4 (Me-Turan, 2026-10-22): project 4 complete (463/463)
**The recensions, and where Gilgameš XII came from:** XII was translated from a Me-Turan / Urim-type text, not from Version A – it agrees with Me-Turan where Version A differs (XII 39 *il₂* "lifted"; XII 51–55, the narrated refrain and "the king weeps for his servant"; XII 111–112, the scribe line split in two; XII 144 the mooring pole *dimgul*, XII 145 the pegs *gag*), and with Urim at XII 153 (*utul₂*) and XII 147 (the clean water of U60). Its own changes: a dropped negation (149), a wish read as a refusal (92), Enkidu made a ghost (83, 87), no stillborn, no burnt man, no ending. Each version ends differently: Version A on the burnt man whose smoke went up; Urim on the rite (the statue, the clean water for the parents); Me-Turan on the quest (the king's heart struck, he seeks life; the last line opens "Gilgameš and Ḫuwawa"). `XII_CONC` now covers the Me-Turan lines (the translator's list). *ma₂-du₃* = `*קרש הספינה*` (ORACC madu[~boat]; 294, 296, U59.A1 changed by the translator), the mooring pole *dimgul* = `עמוד־הקשירה` (MT.B38 = XII 144).
**Rulings:** 22. MT.A9 `תלונת הארץ אוחזת אוֹתוֹ` (the Sumerian *marû*, narrative present – guidelines §5.2 "Sumerian"): accepted. 23. MT.A11 dative `על משרתו, אֶנְקִידוּ, (אשר) מן הארץ אינו יוצא –` (= XII 55): accepted. 24.–25. new words: *tab-ba* `חבר`, *ad gi₄* `נמלך` (*malāku*, the guidelines' cognate), *i-lu* `נְהִי`, *ur* `כלב`, *mu … sa₄* `נקראו בשם`, *ur₅* `כָּבֵד` (laments), *kur lu₂ til₃-la* `ארץ האיש החי`: accepted. 26. MT.B12, B19 `לבו טוב` (*dug₃*, licensed) against Version A's `לבו שמח` (*ḫul₂*): a real difference, accepted. 27. MT.B57 as ETCSL divides it, `⟨…⟩` for the missing subject: accepted. 28. as listed. 29. `verify` now strips ⸢ ⸣ before the formula checks and allows a quotation mark before `אט`.

### 11.15 The 2026-10-23 harmonization (`harmonization--2026-10-23.md`)
2026-10-23 harmonization: the advice formula *na ga-de₅ na de₅-ĝu₁₀ ḫe₂-dab₅* = `עצה אתן – עצתי תיאחז!` (row 13: one formula, one Hebrew; *na de₅* = `נתן עצה`, *dab₅* = `אחז`); changed lines: GEN 182 `הוראה אוֹרֶה – הוראתי תֵּאָחֵז!` → `עצה אתן – עצתי תיאחז!` (XII 12 keeps `הוראה` for *aširtu*: the [divergence] note says so). Inana 30A `[עצה] איעצך – עצתי תא[חז]!` is outside this pass.

2026-10-23 harmonization, batch B (rows 5, 20, 23): *parakku* → `דּוּכָן` (`כִּסֵּא` stays *kussû*'s); Kakka → `כַּכָּא` (eBL's *Kakka*, a final aleph: neither `ככה` "thus" nor `קקה`; always vocalized; Enūma eliš now has the same form); the advice formula's plene `תיאחז`. Changed lines: NE SB c+35 `כֵּס המלכות` → `דוכן המלכות`; every `כַּכָּה` of Nergal and Ereškigal → `כַּכָּא` – the `>` lines SB a+1, a+2, a+11, a+14, a+15, a+16, a+17, a+18, a+19, a+21, a+33, a+39, a+44, e+43, e+44 (bracket-split forms included), the headings, the notes (also the misspelt `כככה` of ten notes) and the introduction; Inana 30A `עצתי תֵּאָ[חז]!` → `עצתי תיא[חז]!`. `netherworld_tools.py`: the Kakka trap now also catches an unvocalized `ככא`, and the gate formula requires `הביאו את האל ככא`.

- **2026-10-30 harmonization** (`../harmonization--2026-10-30.md`, row 4): *nuḫatimmu* (LU₂.MUḪALDIM) "cook" = `מְבַשֵּׁל` (was `אוֹפֶה`, the cognate of *ēpû* "baker"; §11.3's row). Changed lines: NE SB b+42 `האופה לחם נושא לך` → `המבשל לחם נושא לך`, c+57 `האופה לחם נושא לו` → `המבשל לחם נושא לו`; their gloss and notes, c+59's parallel note; the introduction (`translation--intro.rtl.md`: `לחם המבשל`, `שכר מבשל־השכר`; Gen 40:1); project.md's taboos table; the parallels index rebuilt (Gen 40:1 now [equivalent] for *nuḫatimmu*; only *šāqû* is the cognate).

## 12. Round 4 (run 5, 2026-10-24): project 5, Erra and Išum I (fixed by the coordinator before the first line)
Project **5 Erra and Išum** (Akkadian, eBL `L/1/5`, Standard Babylonian Tablet I, 191 lines, ed. E. Jiménez, rev. Mitto, Földi, Hätinen, Rozzi; Jiménez's English). Tablets II–V are not edited on eBL yet (2026-10-24: their chapters list the manuscripts but no lines; "an edition … will be uploaded in the course of 2025/2026"), and no open edition of them exists (Cagni 1969 / 1970 are © and lending-only): the project is Tablet I, and II–V wait for eBL (`project.md`). §0–§11 bind it like the other projects. Read the base text in full first (`netherworld_tools.py lines ER 1 191`), with the precedent table the coordinator gives you.

### 12.1 Inheritance specific to this text
- **Erra I 126–162 is already translated** (2026-10-16), as §7 of the flood corpus's flood references (`../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md`, "## 7."). **These 37 lines are copied letter for letter** (the Gilgameš-copy rule of §3, guidelines §5.2 "an earlier corpus's text"), in the revised form of §12.6, and `verify ER` checks that the two files agree. The revisions bring the 2026-10-16 lines in line with rules fixed later (the coordinator applies each one to the flood corpus too, with its notes and parallels rows): a translator who wants to change a fixed line proposes it with a reason, and the coordinator changes both files.
- **Atra-ḫasīs** (`../סיפורי-המבול-המסופוטמיים/1-אתרחסיס/`): the noise of mankind that keeps the gods awake is the same motif in the same words: *ḫubūru* = `הֲמֻלָּה`, *rigmu* = `שָׁאוֹן`, *šittu* = `שֵׁנָה`, *nišū* = `הָאֲנָשִׁים` (Atra-ḫasīs II 41, 82, 793: `מהמולתם נטרד האל`, `מהמולתם נמנעה ממני שינה`, `מהמולתם לא תאחזני שינה`). Erra I 41, 73, 82 follow them.
- **Gilg. XI 135** `וכל בני האנוש נהפכו לטיט` (*itūrā ana ṭiṭṭi*): *târu ana* "turn into" = `נֶהְפַּךְ לְ־` (I 74; and the D in 172, `הָפַךְ לְ־`); *târu* "return" keeps `שָׁב` / `הֵשִׁיב` (gated, §6).
- **Nergal and Ereškigal** (project 3): the speech formula (*pâšu īpuš-ma iqabbi … amāta izakkar* = `פתח את פיו ואמר, אל X דבר דיבר:`), *annīta ina šemêšu* = `כשמעו את זאת`, *tebû* = `קם`, *ebbu* = `צַח` / *ellu* = `טָהוֹר`, Erra `אֶרָּה` ★, Anu `אָנוּ` ★, *gallû* = `שֵׁד־גַּלָּה` (pl. `שֵׁדֵי־גַּלָּה`), *erkallu* = `אִירְכַּלָּה` (Ištar, NE), *kurnugû* = `כּוּרְנוּגִי`, *arallû* = `אֲרַלּוּ`.

### 12.2 Names (★ = vocalized at every occurrence; checked by `verify`)
| Source | Hebrew | Notes |
|---|---|---|
| Erra; Nergal (118) | ★ אֶרָּה; נֵרְגַל | §11.2. The note at the first Erra: the plague god, Nergal's other name. |
| Išum; Hendursaĝa (2); Engidudu (21) | ★ אִישׁוּם; הֶנְדּוּרְסַגָּה; אֶנְגִּידוּדוּ | `אישום` unvocalized = Modern "indictment". Line 3 is an etymographic play on the name Hendursaĝa (eBL note): say so. |
| the Sebetti (*sebettu*, "the Seven") | ★ הַשִּׁבְעָה | EST, Maqlû (`הַשִּׁבְעָה`). Unvocalized `השבעה` reads "the oath" (*hašbaʿa*). The number *sebe* "seven" stays `שִׁבְעָה` (29 `שִׁבְעָה אֵלִים`, 162 `שִׁבְעַת הַחֲכָמִים`). |
| Anu; Ellil; Ea; Marduk (*Marūtuk*); Adad; Šamaš (116 *šamšu*: the sun, eBL "the sun god") | ★ אָנוּ; אֶנְלִיל; אֵאָה; מַרְדּוּךְ; אֲדַד; ★ שֶׁמֶשׁ / שַׁמַשׁ | Corpora. In 116 decide sun or god by the normalization (lower-case *šamši* = the noun) and vocalize. |
| Mami (Erra's wife, 20) | ★ מָמִי | Atra-ḫasīs (`מָמִי`); `ממי` = "from me". |
| Girra (*gīru*, the fire god, 141, 181) | ★ גִּירָּה | Maqlû. As a common noun (33, 113 "fire") *gīru* = `אֵשׁ` (by sense; eBL lemmatizes both as *gīru* I). |
| Šakkan (*būl šakkan*, 43, 77, 85) | ★ שַׁכַּן | LH / Lipit-Ištar (`שַׁכַּן`); `שכן` = "neighbour". *būl šakkan* = `בֶּהֱמַת שַׁכַּן`. |
| the Igigi; the Anunnaki; the Apsû | הָאִיגִיגִי; הָאֲנוּנָּכִּי; הָאַפְּסוּ | Corpora. |
| Šuanna (Babylon, 124); Esagil; Etemenanki; Eḫalanki | שׁוּאַנָּה; אֵסַגִּיל; אֵטֵמֵנַנְכִּי; אֵחַלַנְכִּי | The flood references (128). The note at Šuanna: a name of Babylon (`בָּבֶל`). |
| Ninildu; Kusibanda; Ninagal (155–159) | נִינִילְדּוּ; כּוּסִיבַּנְדָּה; נִינַגַל | The flood references. |
| *erkallu*; *kurnugû*; *arallû* | אִירְכַּלָּה; כּוּרְנוּגִי; אֲרַלּוּ | §12.1. |

### 12.3 Key terms
| Source | Hebrew | Tag / reason |
|---|---|---|
| *erṣetu* (earth, beside *šamû*; in 28 Earth as Anu's mate); *mātu* "land" (pl. *mātātu*) | both `(הָ)אָרֶץ`, pl. `הָאֲרָצוֹת` | In this tablet *erṣetu* is never the netherworld (that is *erkallu*, *kurnugû*, *arallû*), so it takes the Hebrew it has in every Akkadian corpus, as *mātu* does (Atra-ḫasīs, Gilgameš, the laws): one Hebrew for the two words, as everywhere; the parse names the word. Keeps Gen 6:11–13 (`הָאָרֶץ`) visible for *sapān māti*. |
| *šubtu* | `מוֹשָׁב` | Enūma eliš (`מושב`, Marduk's seat), the flood references (133 `קמתי ממושבי`); the root ישב is the cognate's (*wašābu*). The Gilgameš formula *šubat irkalla* (`משכן אירכלה`) is not in this text. |
| *tebû* (of a god rising from his seat; of weapons raised) | `קָם` | NE §11.3. Š *šutbû* (146) = `הֵנִיף` (the flood references). |
| *dekû* | `הֵעִיר` | (19, 123) ↔ `עוּרָה לָמָּה תִישַׁן אֲדֹנָי` (תהלים מד:כד) (print it). |
| *ṣalālu*; *šittu*; *dalpu* | `יָשֵׁן` (and `שָׁכַב` only for *nâlu*); `שֵׁנָה`; `נְדוּד־שֵׁנָה` / `שֶׁאֵינוֹ יָשֵׁן` (the translator fixes it) | Gilgameš, Atra-ḫasīs. |
| *ḫubūru*; *rigmu* | `הֲמֻלָּה`; `שָׁאוֹן` | Atra-ḫasīs (§12.1). |
| *nišū*; *dadmū*; *ṣalmāt qaqqadi*; *tenēšētu* | `הָאֲנָשִׁים` (*nišī dadmē* = `אַנְשֵׁי הַיִּשּׁוּבִים`); `יִשּׁוּבִים`; `שְׁחוֹרֵי הָרֹאשׁ`; `בְּנֵי הָאֱנוֹשׁ` | Atra-ḫasīs, the flood references, Gilg. XI 135 (*tenēšētu* `בני האנוש`). |
| *šīmtu*; *šiāmu* | `גּוֹרָל`; `גָּזַר` (*šīmta šiāmu* = `גָּזַר גּוֹרָל`) | Etana, creation (`גזר גורל`). |
| *nabû* (29 *ittabi zikiršun* "named them") | `קָרָא` (`קרא את שמם`) | The naming verb (§6.7); gated by `verify`. ↔ `וַיִּקְרָא אֶת שְׁמָם` (בראשית ה:ב) (print it). |
| *šasû* "call, summon" (31) | the root צעק (Hiphil `הִצְעִיק` "summoned", שמואל א י:יז) | Maqlû (*šasû* `צָעַק`); `קרא` is *nabû*'s, and both are in 29–31. |
| *ṭēma šakānu* (31) | `שָׂם טַעַם` | [cognate idiom] ↔ Aramaic `שָׂם טְעֵם` (עזרא ה:יג, ו:ג; print them); a note says it means "gave orders", not "taste" (§6.7). |
| *šakānu* | `שָׂם` (every form; *pānī šakānu* 124 = `שָׂם פָּנָיו`) | §6; the creation corpus. ↔ `שׂוֹם תְּשִׂמוּן פְּנֵיכֶם` (ירמיהו מב:טו) (print it). 132 keeps the flood formula *abūba šakānu* = `חוללתי מבול` (§12.6). |
| *imtu* "venom" | `חֵמָה` (*imat mūti* = `חֲמַת מָוֶת`; *imat bašmi* = `חֲמַת פֶּתֶן`) | [cognate] (Akk. *imtu* < *ḥimtu*; Heb. `חֵמָה` "venom", דברים לב:כד, לג; תהלים נח:ה). A note says Hebrew `חֵמָה` is also "wrath", the Akkadian only "venom". **A split with Enūma eliš and Maqlû (*imtu* `אֶרֶס`)**, recorded for the lead (the cognate rule). Gated by `verify`. |
| *bašmu* | `פֶּתֶן` | [cognate] (Ugaritic *bṯn* `פֶּתֶן`, the Ugaritic corpus; Enūma eliš's *bašmu* `פֶּתֶן`) ↔ `וְרֹאשׁ פְּתָנִים אַכְזָר` (דברים לב:לג). Gated. |
| *mūtu* | `מָוֶת` | Corpora. |
| *ṭābiḫu*; *ṭabāḫu* | `טַבָּח`; `טָבַח` / `טֶבַח` | [cognate] (§6.7). ↔ `לְמַעַן טְבֹחַ טֶבַח` (יחזקאל כא:טו) (the sword sharpened to slaughter; print it) at 91. |
| *kakku* (sg.); *kakkū* (pl.) | `נֶשֶׁק`; `כְּלֵי־נֶשֶׁק` (with suffixes: `כְּלֵי־נִשְׁקוֹ`, `כְּלֵי־נִשְׁקְךָ`) | Enūma eliš, Gilgameš (`כלי־נשקו`). Erra speaks *to* his weapons (7, 17): the plural is addressed. |
| *namṣaru*; *patru* | `חֶרֶב`; `סַכִּין` | Gilgameš (*namṣaru* `חרב`, *patru* `סכין`), the Dialogue (`סכין`). `חרב` gated to *namṣaru* (↔ `מִחוּץ תְּשַׁכֶּל חֶרֶב` (דברים לב:כה)). |
| *uṣṣu*; *qaštu*; *lišānu* (of an arrow) | `חֵץ`; `קֶשֶׁת`; `לָשׁוֹן` | [cognate]s. `חץ` gated to *uṣṣu* (↔ `חִצַּי אֲכַלֶּה בָּם` (דברים לב:כג), לב:מב). |
| *šuḫtu*; *kepû* | `חֲלוּדָה`; `קָהָה` | Ludlul (`חלודה`); ↔ `אִם קֵהָה הַבַּרְזֶל` (קהלת י:י) (print it). |
| *qû* (88, threads) | `קַו` | [cognate] (temple corpus *gu* = *qû* `קַו`); ↔ `וְקוּרֵי עַכָּבִישׁ יֶאֱרֹגוּ` (ישעיהו נט:ה) [equivalent] in the note. |
| *daltu*; *edēlu* | `דֶּלֶת`; `נָעַל` | [cognate] / Etana (*edēlu* `נעל`). 27 `אִישׁוּם – דֶּלֶת הוּא: לִפְנֵיהֶם נְעוּלָה` (the translator may refine the word order, not the words). ↔ שמות יב:כב–כג (the door the destroyer may not pass). `דלת` gated to *daltu*. |
| *bābu* | `שַׁעַר` | NE (`אל שער אנו…`). 189 *imna u šumēla ša bābīka* `מימין ומשמאל לשערך`. |
| *rabāṣu* Š (189) | `הִרְבִּיץ` | [cognate] (*rābiṣu* `רוֹבֵץ`, wisdom corpus; Gen 4:7). |
| *alāku* + *idu* (40, 44, 98) | `הָלַךְ לְצַד` (*lillikū idāka* = `ילכו לצדך`) | Etana (*idu* `צַד`). |
| *ālik maḫri* (11, 99, 105, 108); *alik pānīya* (99) | `הַהוֹלֵךְ לְפָנִים` (with a suffix `הַהוֹלֵךְ לְפָנַי` / `לְפָנָיו`); `לֵךְ לְפָנַי` | Jiménez's "champion" hides the image; ↔ `לְפָנָיו יֵלֶךְ דָּבֶר וְיֵצֵא רֶשֶׁף לְרַגְלָיו` (חבקוק ג:ה) (the plague god's escort; print it). |
| *ṣēru* (the battlefield); *ālik ṣēri*; *āšib āli* | `שָׂדֶה` (Gilgameš / flood rule); `הַהוֹלֵךְ אֶל הַשָּׂדֶה`; `יוֹשֵׁב הָעִיר` | Fixed for the soldiers' speech 47–59 (repeated: identical Hebrew). |
| *tāḫāzu*; *epēš tāḫāzi* | `מִלְחָמָה`; `עֲשׂוֹת מִלְחָמָה` | Enūma eliš; ↔ `עָשׂוּ מִלְחָמָה` (בראשית יד:ב) [equivalent idiom]. |
| *qurādu*; *qardu*; *qurdu* | `גִּבּוֹר` (*qurādu erra* = `אֶרָּה הַגִּבּוֹר`, *qarrād ilī* = `גִּבּוֹר הָאֵלִים`, *qarrād lā šanān* = `גִּבּוֹרִים שֶׁאֵין לָהֶם מִתְחָרֶה`); `גִּבּוֹר`; `גְּבוּרָה` | Gilgameš, EST (`השבעה, האלים הגיבורים`), the flood references. Gated to these three words (other strength words take other Hebrew: *gašru* `תַּקִּיף`, *dannu* `חָזָק`, *emūqu* `כֹּחַ`). The note at 29: seven warrior gods born to a god by Earth ↔ `הֵמָּה הַגִּבֹּרִים` (בראשית ו:ד) [divergence]. |
| *šanānu* | `הִתְחָרָה` (`מִתְחָרֶה`) | Gilgameš. |
| *ezzu*; *ezēzu*; *agāgu* (Š *šuggugu*) | `זוֹעֵם`; `זָעַם`; `קָצַף` (Š `הִקְצִיף`) | Corpora (*agāgu* `קצף`: Gilgameš, Advice to a Prince, Enūma eliš). 132 `קצפתי` (§12.6); 123 `אקציף` ↔ `הִקְצַפְתָּ` (דברים ט:ז) (print it). |
| *palāḫu*; *šaḫātu*; *galātu* | `יָרֵא`; `נִבְהַל` / Št `הִבָּהֵל`; `נִבְעַת` (stative `מַבְעִית`) | The prophecy corpus (*palāḫu* = ירא only); the translator fixes *šaḫātu* once (`נבהל`) and keeps it. |
| *raʾābu* (Š "make tremble"); *nâšu*; *arāru* B "quake" (74 *līrur*) | `רָעַד` / `הִרְעִיד`; `זָע`; `רָגַז` | The flood references (134 `שהרעדתי`, 135 `שזע`). **`ארר` never for *arāru* B**: it is *arāru* "curse" (`אָרַר`, Gilgameš). `רגז` ↔ `שָׁמְעוּ עַמִּים יִרְגָּזוּן` (שמות טו:יד) (print it) at the litany 62–74. |
| *šemû* | `שָׁמַע` | The litany 62–70 `X יִשְׁמְעוּ וְ…` (the same opening in every line). |
| *nâdu* | `שִׁבַּח` | Enūma eliš, Gilgameš. |
| *kanāšu*; *kamāsu*; *nīru* | `נִכְנַע`; `כָּרַע`; `עֹל` | NE (*kamāsu* `כרע`), Lipit-Ištar (*nīru* `עול`). |
| *biltu* | tribute (66) `מַשָּׂא`; yield (135) `יְבוּל` | By sense (the flood references 135 `יבול`); `מַשָּׂא` keeps the root of carrying (*wabālu* / נשא). |
| *gamālu* | `חָמַל` | False friend of `גָּמַל` (§6.7). 37 `ואל תחמול על איש` ↔ `וְאַל תַּחְמֹלוּ` (יחזקאל ט:ה) (print it). |
| *bâʾu* | `צָעַד`; of water (171) `שָׁטַף` | The 2026-10-23 harmonization, row 19. |
| *kippatu* | `חוּג` | [equivalent] ↔ `חוּג הָאָרֶץ` (ישעיהו מ:כב). |
| *ziāqu*; *šāru* | `נָשַׁב`; `רוּחַ` | Corpora. |
| *kabābu* (33); *ḫamāṭu*; *nablu* | `דָּלַק`; `לָהַט`; `שַׁלְהֶבֶת` | Maqlû's fire verbs keep their own (*qamû* `בִּעֵר`, *qalû* `קָלָה`, *šarāpu* `שָׂרַף`, *ḫamāṭu* `לָהַט`); *kabābu* takes a free one. |
| *labbu*; *nēšu*; *barbaru*; *rīmu* | `לָבִיא`; `אַרְיֵה`; `זְאֵב`; `רְאֵם` | [cognate] *labbu*, *rīmu*; Gilgameš. |
| *būlu*; *nammaššû* | `בְּהֵמָה`; `הַנָּע` (pl. `הַנָּעִים`) | Gilgameš, Atra-ḫasīs, creation 2 (`הנע`): not `רֶמֶשׂ` (a false echo of Gen 1:24). |
| *kapādu*; *lemuttu* / *lemnu* | `חָשַׁב`; `רָעָה` / `רַע` | Maqlû (*kapādu* `חָשַׁב`). 102 ↔ `אַתֶּם חֲשַׁבְתֶּם עָלַי רָעָה` (בראשית נ:כ) (print it). |
| *târu ana arkī* (103) | `שָׁב לְאָחוֹר` | ↔ `שׁוּב מֵחֲרוֹן אַפֶּךָ` (שמות לב:יב) (print it). |
| *rēmu* (101); *aḫulap* | `רַחֲמִים`; `רַב!` | The wisdom corpus. |
| *qâlu* | "be silent" (95 *qâliš*) `בִּדְמָמָה`; "listen" (106 *qūlam-ma*) `הַאֲזֵן` | Advice to a Prince, the prophecies (by sense, as there). |
| *awû* Gt (*ītammi*) | `שָׂח` ★ | Gilgameš (`קם ושח אל רעהו`). Unvocalized `שח` = "bowed". |
| *zakāru*; *qabû*; *amātu*; *awātu*; *atmû* | `דִּבֵּר`; `אָמַר`; `דָּבָר` | NE. 147 *ul aqbi* = `לא אמרתי` (§12.6). |
| *zikru*; *šumu*; *nibītu* | `זֵכֶר`; `שֵׁם`; the translator fixes one word (`כִּנּוּי`?) | Keep the three apart. |
| *wâru* D (*umtaʾʾer*) | `צִוָּה` | The flood references (141). |
| *ûrtu* | `צַו` | The wisdom corpus (`תּוֹרָה` never). |
| *paqādu* | `פָּקַד` | [cognate]. |
| *ṭiābu*; *ṭāb eli* (93, 191 *elīšu iṭīb*) | `טוֹב`, `יָטַב`; `יִיטַב עָלָיו` | The wisdom corpus (*ṭāb eli šamaš* = `טוֹב עַל שַׁמַשׁ`); ↔ `וַיִּיטַב הַדָּבָר בְּעֵינֵי הַמֶּלֶךְ` (אסתר א:כא) (print it). |
| *šamnu*; *ulû* | `שֶׁמֶן`; `מֵיטַב` | [cognate]; ↔ `כַּשֶּׁמֶן הַטּוֹב עַל הָרֹאשׁ` (תהלים קלג:ב). |
| *damiqtu* (81) | `חֶסֶד` (*damiqta epēšu* = `עָשָׂה חֶסֶד`) | Gilgameš (*dumqu* `חֶסֶד`, the same root); ↔ `וַעֲשֵׂה חֶסֶד עִם אֲדֹנִי אַבְרָהָם` (בראשית כד:יב) (print it). |
| *mâtu* Š (*šumuttu*, 43) | `הֵמִית` | LH (reserved for it). |
| *maqātu*; Š | `נָפַל`; `הִפִּיל` | Corpora. |
| *sapānu*; *ḫalāqu* D | `שִׁטֵּחַ`; `אִבֵּד` | Not `מָחָה`, `הִשְׁחִית`, `הִשְׁמִיד` (Gen 6–7: the apparatus discusses them). |
| *ummânu*; *apkallu* | ★ `אֻמָּן` (the flood corpus's Akkadian precedent; Gudea's Sumerian *um-mi-a* has `אָמָּן`: a split for the lead); `חָכָם` (162 `שבעת החכמים`) | [cognate]; every corpus *apkallu* `חכם`. ↔ בראשית ו:ד (`הַנְּפִלִים … אַנְשֵׁי הַשֵּׁם`), ד:כ–כב [divergence] in the notes only (§12.5). |
| *mēsu*; *elmēšu* | `(עֵץ) הַמֵּסוּ`; `עִנְבָּר` | The flood references (`מֵסוּ`); Gilgameš (*elmēšu* `עִנְבָּר`, not `חַשְׁמַל`: יחזקאל א:ד in the note). |
| *šukuttu*; *šiknu*; *simtu*; *agû*; *melammu* | `עֲדִי`; `תֹּאַר`; `הוֹלֵם` (*simat* X = `הַהוֹלֵם אֶת X`); `כֶּתֶר`; `זֹהַר` | The flood references; Ex 33:4–6 (`וְלֹא שָׁתוּ אִישׁ עֶדְיוֹ עָלָיו`, the people strip their ornaments when God will not go among them) in the note at 127 [divergence]. |
| *šiknāt napišti* | `בַּעֲלֵי הַנֶּפֶשׁ` | (137, 174, 177) Revised from the flood references' `יצורי הנפש` (the root יצר is reserved in this corpus, §6). *napištu* = `נֶפֶשׁ` [cognate]. |
| *nabnītu*; *binûtu* | `תּוֹלְדָה`; `צֶאֱצָאִים` | 137 `תולדתם` (the flood references); 161 *binût tâmti* `צאצאי הים` (revised from `יציר`, §12.6). |
| *banû*; *bānû* | `בָּנָה`; `בּוֹנֶה` | The creation verbs (§6.7). 158 `בונה אל ואדם` (revised from `יוצר`). |
| *epēšu* | `עָשָׂה` | The creation verbs. 139 `בית עשיתי` (revised from `בניתי`). |
| *kânu* D | `כּוֹנֵן` | The creation verbs. 157 (revised from `מתקינים`). |
| *leqû* | `לָקַח` (gated) | 127 *leqât urūša* `לקח טינופת`; 77, 120 *šēṭūta leqû* `לקח בוז`. |
| *ṣabātu* | `אָחַז` | The 2026-10-21 harmonization (no *aḫāzu* in this text). 96 *luṣbat ḫarrāna* `אֹחֲזָה אֹרַח` (cf. `וְיֹאחֵז צַדִּיק דַּרְכּוֹ` (איוב יז:ט)). 138 `אחזתי בידי` (revised from `לקחתי`). |
| *ḫarrānu*; *urḫu*; *ṭūdu*; *nērebu* | `אֹרַח`; `דֶּרֶךְ`; `שְׁבִיל`; `מָבוֹא` | Etana, Gilgameš. |
| *edēqu* (G, N) | `עָטָה` / `הִתְעַטֵּף` | Gilgameš. 8 *nandiqā kakkīkun* `התעטפו בכלי־נשקכם`, 143 `התעטפתי בכתר אדנותי`, 178 `אתעטף בכלי־נשקי` (one verb in all three). |
| *zīmu*; *niṭlu* | `זִיו`; `מַבָּט` | Corpora (*zīmu* `זיו`). 141, 144 revised (`קלסתר` → `זיו`). |
| *ebēbu* D | `טִהֵר` | The flood references (141, 162). |
| *nawāru* D; *nabāṭu* Š | `הֵאִיר`; `הִבְהִיק` | The flood references. |
| *rubû* | `נָשִׂיא` (*rubû marūtuk* = `הַנָּשִׂיא מַרְדּוּךְ`) | The wisdom and prophecy corpora. |
| *tamlû* | `מִלּוֹא` | [cognate] (§6.7). 59 `היכל המלוא`. |
| *maṣallu* | `מְלוּנָה` | Gilgameš; ↔ `כִּמְלוּנָה בְמִקְשָׁה` (ישעיהו א:ח). |
| *isinnu*; *šikaru*; *akalu* | `חַג`; `שֵׁכָר`; `לֶחֶם` | Corpora. |
| *reḫû* | sexual (28) `נִזְקַק לְ־` (NE §11.3); of sleep (82) `נִתַּךְ` (Gilgameš `השינה הניתכת`) | Split by sense, as the two precedents. |
| *walādu* | `יָלַד` | 29 `ילדה לו` (בראשית כא:ב in the note). |
| *ḫīrtu* | `רַעְיָה` | Enūma eliš. |
| *urinnu* | ★ `נֵס` | The temple corpus (*urin* = `נֵס`); `נס` = "miracle". |
| *namû* | `נָוֶה` | [cognate] (Advice to a Prince). |
| *ikkaru*; *zēru* | `אִכָּר`; `זֶרַע` | [cognate]s (the flood references 138). |
| *iṣṣūru* | `צִפּוֹר` | Every corpus. |
| *ṭarādu* (185) | the translator fixes it (grep the corpora; not `גֵּרֵשׁ` if another word fits: Gen 3:24) | |

### 12.4 Formulas fixed before drafting (checked by `verify` where a regex can do it)
| Source | Hebrew |
|---|---|
| *(X) pâšu īpuš-ma iqabbi / ana Y … amāta izakkar* (104–105, split over two lines) | `X פתח את פיו ואמר,` / `אל Y … דבר דיבר:` (NE) |
| *īpuš-ma pâšu izakkar ana Y* (94, 164, 169, 180) | `פתח את פיו, אל Y דיבר:` |
| *īpuš-ma pâšu ana Y ītammi* (126) / *… šar ilī ītammi* (129) | `פתח את פיו, אל Y שָׂח:` / `פתח את פיו מלך האלים ושָׂח,` |
| *ītammi ana kakkīšu* (7, 17) | `שָׂח אל כלי־נשקו:` (the rest of the line follows) |
| *ana sebetti qarrād lā šanān* (8, 18; 23 *ša sebetti …*, 97 *sebettu …*) | `אל הַשִּׁבְעָה, גיבורים שאין להם מתחרה:` (the same phrase, with its case, in all four) |
| *lillikū idāka* (40, 44) | `ילכו לצדך` |
| *qurādu erra* | `אֶרָּה הגיבור` (vocative and subject) |
| *qarrād ilī* | `גיבור האלים` |
| *ālik ṣēri*; *āšib āli* (49–56) | `ההולך אל השדה`; `יושב העיר` |
| *ul ubbala* (57–59) | `לא ישווה ל־` (the same verb in the three lines) |
| *X lišmû-ma* (62–70) | `ישמעו X ו־…` / `X ישמעו ו־…` (one order, all nine lines) |
| *ḫubūru* (41, 73, 82) | `הֲמֻלָּה` |
| *šipīt šamê (u) erṣeti* (133, 136, 170, 182) | `תפר השמים והארץ` |
| *ina šubtīya atbē(-ma)* (132, 133, 170) | `קמתי ממושבי` / `אקום ממושבי` |
| *aššu šipri šâšu ša taqbû* (131, 149) | `אשר למלאכה ההיא שאמרת` |
| *ali* (150–162) | `אַיֵּה` |
| *annīta ina šemêšu* (100, 168, 179) | `כשמעו את זאת` (NE) |
| *išmē-ma* (92, 163, 190) | `שמע` + the same order in the three lines |
| *amāt X iqbû elīšu iṭīb* (93, 191) | `דברי X אשר אמר(ו) – ייטבו עליו` (the translator fixes the form once) |
| *X illûnim-ma* (171, 175, 177) | `X יעלו ו־` |
| *kakkīya ezzūti* (98, 186) | `כלי־נשקי הזועמים` |
| *rubû marūtuk* | `הנשיא מרדוך` |
| *šiknāt napišti* | `בעלי הנפש` |

### 12.5 Reserved for project 5 (added to §6; checked by `verify`)
- **Never** (the plan's Torah focus: the apparatus, not the translation, shows the contact): the root שחת (`מַשְׁחִית`, `הִשְׁחִית`, `שַׁחַת`; שמות יב:יג, כג; בראשית ו:יא–יג); `נֶגֶף` / `נָגַף` / `מַגֵּפָה` (cf. `וְלֹא יִהְיֶה בָכֶם נֶגֶף לְמַשְׁחִית` (שמות יב:יג)); `רֶשֶׁף`; `קֶטֶב`; `דֶּבֶר` as "pestilence" (not checkable: the translator never uses it); `הִסְתִּיר` / `הֶסְתֵּר` / `נִסְתַּר` (cf. `וְהִסְתַּרְתִּי פָנַי` (דברים לא:יז)); `נְפִלִים` / `נְפִילִים`; `אַנְשֵׁי הַשֵּׁם`; `מְזוּזָה` (Exod 12:7, Deut 6:9: the amulet use of Tablet V is not in Tablet I).
- **Gated:** `חמה` / `חמת` – *imtu*; `פתן` – *bašmu*; `חץ` / `חצים` / `חצי־` – *uṣṣu*; `חרב` – *namṣaru*; `מבול` – *abūbu*; `גיבור` / `גבור` / `גבורה` – *qurādu* / *qardu* / *qurdu*; `דלת` – *daltu*; `אות` (the noun) – *ittu*; `קרא` – *nabû*; `שד` – also *gallû* (the corpus's `שֵׁד־גַּלָּה`).

### 12.6 The fixed lines 126–162 (the flood references' Hebrew of 2026-10-16, revised; copy letter for letter)
Revised words in **bold** in the reason column; every other word is the 2026-10-16 line unchanged.

| Line | Hebrew (binding) | Revision and reason |
|---|---|---|
| 126 | `פתח את פיו, אל מלך האלים שָׂח:` | `דיבר` → **`שָׂח`**: *ītammi* (*awû* Gt) is `שָׂח` (Gilgameš); `דיבר` is *zakāru*'s (§12.4) |
| 127 | `"מדוע העֲדִי, ההולם את אדנותך, אשר ככוכבי השמים מלא היה הדר – לקח טינופת?` | `אות` → **`ההולם את`** (*simat*, as 150, 161; `אות` is *ittu*'s, §12.5); `נטנף` → **`לקח טינופת`** (*leqât urūša*: *leqû* `לקח`, gated) |
| 128 | `כתר אדנותך, שהבהיק את אֵחַלַנְכִּי כמו את אֵטֵמֵנַנְכִּי – פניו מכוסים!"` | unchanged |
| 129 | `פתח את פיו מלך האלים ושָׂח,` | `ודיבר` → **`ושָׂח`** (126) |
| 130 | `אל אֶרָּה, גיבור האלים, דבר דיבר:` | `אמר דבר` → **`דבר דיבר`** (*amāta izakkar*, the NE formula) |
| 131 | `"אֶרָּה הגיבור, אשר למלאכה ההיא שאמרת לעשות:` | unchanged |
| 132 | `כאשר פעם קצפתי, וקמתי ממושבי, וחוללתי מבול,` | `זעמתי` → **`קצפתי`** (*agāgu*, §12.3); `וחוללתי מבול` kept: the flood corpus's formula *abūba šakānu* = `חולל מבול` (its renderings §3a; Gilg. XI 14, Atra-ḫasīs), which wins over the plain *šakānu* `שׂם` (a formula takes one Hebrew) |
| 133 | `קמתי ממושבי, ותפר השמים והארץ נפרם.` | unchanged |
| 134 | `השמים, שהרעדתי: מקום עמידתם של כוכבי השמים השתנה, ולא השבתי (אותם) למקומם.` | `אותם` → **`(אותם)`** (not in the Akkadian; = 137) |
| 135 | `אִירְכַּלָּה, שזע: יבול התלם פחת, ולעד קשה לגבותו.` | `העולם התחתון` → **`אִירְכַּלָּה`** (*erkallu*, the corpus's name; `עולם` is reserved, §6); `ועד עולם` → **`ולעד`** (the same) |
| 136 | `תפר השמים והארץ, שנפרם: המעמקים פחתו, הגאות נסוגה; שבתי וראיתי – קשה היה לשבוע.` | `חזרתי והבטתי` → **`שבתי וראיתי`** (*atūr āmur*: *târu* `שוב`, *amāru* `ראה`) |
| 137 | `ושל בעלי הנפש – תולדתם התמעטה, ולא השבתי (אותם) למקומם.` | `ויצורי` → **`ושל בעלי`** (*ša* opening a topic = `של X –`, as 23, 41, 55, 71, 90) (*ša šiknāt napišti*, §12.3); `(דבר) למקומו` → **`(אותם) למקומם`** (*ašruššun*, = 134) |
| 138 | `עד אשר, כאיכר, את זרען אחזתי בידי.` | `לקחתי` → **`אחזתי`** (*ṣabātu*); `עד ש` → `עד אשר` (word order kept) |
| 139 | `בית עשיתי וישבתי בתוכו.` | `בניתי` → **`עשיתי`** (*epēšu*) |
| 140 | `עֶדְיִי, שנהדף(?) במבול, ותוארו החשיך:` | vocalization only |
| 141 | `להבהיק את זיוי ולטהר את בגדיי ציוויתי את גִּירָּה.` | `קלסתרי` → **`זיוי`** (*zīmu*); `גִּירָא` → **`גִּירָּה`** (Maqlû) |
| 142 | `אחרי שהאיר את עֶדְיִי והשלים את המלאכה,` | `העדי` → **`עֶדְיִי`** (*šukuttī* "my") |
| 143 | `התעטפתי בכתר אדנותי, ושבתי למקומי.` | `עטיתי את` → **`התעטפתי ב־`** (*annadqū*, N: = 8, 178) |
| 144 | `זיוי הוטב, ומבטי מבעית.` | `קלסתרי נאה` → **`זיוי הוטב`** (*zīmūʾa ṭubbû*: *zīmu*; *ṭiābu* D) |
| 145 | `האנשים שנותרו מן המבול ראו את עשיית המלאכה.` | unchanged |
| 146 | `אילו הנפתי את כלי־נשקי, הייתי מאבד את השארית.` | `נשקי` → **`כלי־נשקי`** (*kakkīya*, pl.) |
| 147 | `את האֻמָּנִים ההם הורדתי אל האַפְּסוּ, ולא אמרתי שיעלו.` | `ציוויתי` → **`אמרתי`** (*qabû*; `ציווה` is *wâru*'s); `האֻמָּנִים` kept (the flood corpus's *ummânu* = `אֻמָּן`, its renderings §3a; Gudea's Sumerian *um-mi-a* has `אָמָּן`: a split for the lead) |
| 148 | `את מקומם של (עץ) המֵסוּ (ו)העִנְבָּר שיניתי, ולא הראיתי לאיש.` | `ואבן האֶלְמֵשׁוּ` → **`(ו)העִנְבָּר`** (Gilgameš); `עץ` → **`(עץ)`** (not in the Akkadian); `את מקום` → **`את מקומם של`** (*ašaršun*) |
| 149 | `ועתה, אשר למלאכה ההיא שאמרת, אֶרָּה הגיבור:` | unchanged |
| 150 | `איה (עץ) המֵסוּ, בשר האלים, ההולם את מלך הכל,` | `עץ` → **`(עץ)`** |
| 151 | `העץ הטהור, העלם הנעלה, הראוי לאדנות,` | unchanged |
| 152 | `אשר בים הרחב, במים, מאה בֵּרוּ (מהלך) – שורשו הגיע עד עמקי אֲרַלּוּ,` | `ש־` → **`אשר`** (`שבים` trips the `שוב` gate: "returning") |
| 153 | `וצמרתו, במרום, נשענה על שמי אָנוּ?` | unchanged |
| 154 | `איה הזַגִּינְדּוּרוּ הצח, שהתקינו(?) כְּסַפִּיר?` | `הבהיר` → **`הצח`** (*ebbu*, NE) |
| 155 | `איה נִינִילְדּוּ, הנגר הגדול של שלטוני העליון,` | unchanged |
| 156 | `נושא הקרדום של שֶׁמֶשׁ(?) צחה, היודע את העץ ההוא,` | `בהירה` → **`צחה`** (*ebbu*); `שֶׁמֶשׁ` vocalized (the sun / Šamaš trap) |
| 157 | `שמבהיקים אותו כיום, ומכוננים אותו תחתיי?` | `ומתקינים` → **`ומכוננים`** (*kânu* D) |
| 158 | `איה כּוּסִיבַּנְדָּה, בונה אל ואדם, שידיו מובחרות,` | `יוצר` → **`בונה`** (*bānû*; the root יצר is reserved, §6) |
| 159 | `איה נִינַגַל, נושא אבן הרכב ואבן השכב [...],` | `התחתית` → **`השכב`** (the lower millstone, Mishnaic `שֶׁכֶב וָרֶכֶב`; `תַּחְתִּית` is reserved in this corpus, §6: Deut 32:22 `שְׁאוֹל תַּחְתִּית`) |
| 160 | `הלש(?) את הנחושת הקשה כעור, מעצב הכ[לים]?` | unchanged |
| 161 | `איה האבנים המובחרות, צאצאי הים הרחב, ההולמות את הכתר?` | `יציר` → **`צאצאי`** (*binûtu*; the root יצר) |
| 162 | `איה שבעת החכמים של האפסו, הקַרְפִּיּוֹנִים הצחים, שכמו אֵאָה אדונם שוכללו בתבונה נעלה, מטהרי גופי?"` | `הבהירים` → **`הצחים`** (*ebbu*) |

### 12.7 Merged after part 1 (lines 1–99, 2026-10-24)
Accepted from the translator's proposals (`5-ארה-ואישום/project.md`, with reasons): *šaḫātu* = `נִרְתַּע` (Gilgameš I 180, 188, Ludlul II 108; `נבהל` is *parādu*'s), not `נִבְהַל`; *ṭūdu* = `נָתִיב` (`שביל` is *kibsu*'s); *ulmu* = `מַגְזֵרָה`; 27 `לפני[הם] נעול` (the stative *edil* is masculine: Išum is the one shut); 29 `ו"הַשִּׁבְעָה" קרא את זכרם` (*zikru* `זֵכֶר`); *lā* + present = `לא` + future (37 `ולא תחמול`), *ē* + preterite = `אל`; 93 = 191 `דבר X אשר אמר – יָטַב עליו.`; *ša* opening a topic = `של X – …` (23, 41, 55, 71, 90; fixed line 137 aligned to `ושל בעלי הנפש`); Irkalla = `אִירְכַּלָּה` (the corpus form of IS and NE; §12.1–§12.2 and fixed line 135 aligned). Words fixed for part 2: `שָׂח אל X:`; `שמע אותו/אותם אֶרָּה הגיבור,` (163); `ההולך לפני־` + suffix (105, 108); *leqû šēṭūta* `לקח … בוז`; *nišī dadmē* `אנשי היישובים`; *zikru* `זכר`; *gīru* (noun) `אש`, *qīšu* `יער`, *apu* `אגם`; *kippatu* `חוג`; *māḫiru* `יריב`; *idu* "arm" `זרועות`; *rašû* `היה ל־`; *nadû* `השליך`; *malku* `מלך` (shared with *šarru*: a split, recorded). Tool: the `חמה` gate no longer reads `מלחמה`.

## Changelog
- 2026-10-24 (Round 4, run 5): §12 added – the binding renderings of project 5 (Erra and Išum I), fixed by the coordinator before the first line; Erra I 126–162 copied from the flood references in a revised form (§12.6), checked by `verify ER`.
- 2026-10-23: end of §11.15, the 2026-10-23 harmonization batch B (NE c+35, Kakka, Inana 30A); the tool's Kakka trap and gate formula.
- 2026-10-23: §11.15, the 2026-10-23 harmonization (GEN 182).
- 2026-10-21: written by the corpus coordinator before the first line, from the Gilgameš, wisdom, lament, temple, creation and law corpora and a reading of both base texts in full.
- 2026-10-21: §9 filled after both texts were drafted and reviewed; §2/§5 rows corrected to the drafted lines; §10 extended.
- 2026-10-21: the lead's cross-corpus harmonization applied (§10): §0 *uqnû*, §0.4 settled, §5 *za-gin₃* / *šembizid* rows fixed and a *ra-gaba* row added, §7 traps, §9 *ur₄* revised.
- 2026-10-21 (Round 3, run 5): §11 added – the binding renderings of projects 3 (Nergal and Ereškigal) and 4 (Bilgameš, Enkidu and the Netherworld), fixed by the coordinator before the first line; the Sumerian of project 4 takes Gilgameš XII's Hebrew where XII renders it (`netherworld_tools.py xii`).
- 2026-10-22: §11.7 merged after project 3, part 1 (SB a+1–b+50); *ebbu* = `צַח`.
- 2026-10-22: §11.8 merged after project 4, part 1 (lines 1–135).
- 2026-10-22: §11.9 merged after project 3, part 2 (SB c+1–d+56); *wadû* D = `ידע`.
- 2026-10-22: §11.10 merged after project 4, part 2 (136–253); XII_CONC corrected; verify variant-parenthesis fix.
- 2026-10-22: §11.11 merged after project 3, part 3 (SB d+57–f+1).
- 2026-10-22: §11.12 merged after project 4, part 3 (254–303 and the Urim versions).
- 2026-10-22: §11.13 merged after project 3, part 4 (MB): project 3 complete.
- 2026-10-22: §11.14 merged after project 4, part 4 (Me-Turan): project 4 complete; XII_CONC extended to Me-Turan.
