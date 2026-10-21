# Shared renderings: the legends-of-kings corpus (Enmerkar and the Lord of Aratta; the Sargon Birth Legend)

Binding for both projects of this folder (`corpus.md`). Echo tags follow guidelines §6.4: [cognate], [equivalent],
[divergence], [absent]. Fixed by the corpus coordinator before the first part was drafted (2026-10-21), from the
earlier corpora and a reading of the whole transliteration of both texts. Translators propose additions in
`project.md`; the coordinator merges them here (§9). **The translator of a formula's first occurrence may revise a
pre-set rendering of §3 with the reason in `project.md`; after that it binds every copy** (and the regex in
`kings_tools.py` FORMULAS is updated).

## 0. Inheritance
1. **Sumerian (EA):** the temple, lament and creation corpora bind, most recent first:
   `../בניין-המקדש/renderings.md` (all of it, with §9), `../קינות-על-ערים/renderings.md`,
   `../סיפורי-הבריאה-המסופוטמיים/renderings.md` §5–§8 and their project files. Look a word up before fixing it:
   `python3 -I kings_tools.py grep all '<regex>'` searches the `>` lines of all of them.
2. **Akkadian (SB):** the flood corpus's shared renderings (`../סיפורי-המבול-המסופוטמיים/renderings.md`), the
   Gilgameš corpus (`../אפוס-גילגמש/renderings.md`), the law corpus (`../חוקים-ובריתות/renderings.md`) and the
   wisdom corpus; guidelines §6.7.
3. **A Sumerian word takes the Hebrew of its Akkadian equivalent** (law corpus §6, lament §0, temple §0.2). In this
   corpus that rule makes the two texts meet: Sum. *bal* "cross (a mountain)" = Akk. *nabalkutu* = `חָצָה`; Sum.
   *kur₂* "be different, change" = Akk. *nakāru* = `שִׁנָּה` (adj. `שׁוֹנֶה`; `נָכְרִי` only for *kur₂* "foreign,
   hostile", lament §9); Sum. *eme* = Akk. *lišānu* = `לָשׁוֹן`; Sum. *esir₂* = Akk. *iṭṭû* = `חֵמָר`; Sum. *šeg₁₂* =
   Akk. *libittu* = `לְבֵנָה`; Sum. *dugud* = Akk. *kabtu* = `כָּבֵד`.
4. **Open cross-corpus choices, followed as the most recent corpus has them (flagged, not resolved):** Inana =
   `אִינַנָּה` ★; *me* = `הַ־מֶה` ★; *uĝ₃* = `עָם` (laments; creation `הָאֲנָשִׁים`); *nam-šub* (= Akk. *šiptu*) =
   `קֶסֶם` (wisdom corpus; the alternative `לַחַשׁ` / `חֶבֶר` is STATUS §6's open decision); *ĝidru* = `שַׁרְבִיט`
   (laments, Gudea; creation 2 has `מַטֶּה`); bitumen: *iṭṭû* (ESIR) = `חֵמָר` (flood corpus, Gudea *esir₂*), *kupru*
   = `כֹּפֶר` (not in these texts).

## 1. Names
Vocalized at the first occurrence in each annotated file; afterwards plain spelling, **except ★, vocalized at every
occurrence** (`kings_tools.py verify` checks those it can).

| Source | Hebrew | Notes |
|---|---|---|
| Enmerkar (*en-me-er-kar₂*); *dumu {d}utu* | אֶנְמֶרְכַּר; בֶּן אוּתוּ ★ | King of Uruk (Sumerian King List: son of Meskiaĝgašer, 420 years; before Lugalbanda and Gilgameš). Mittermayer: Enmerkara. "Son of Utu" = descended from the sun-god (the dynasty's claim). |
| Aratta; *en aratta{ki}* | אָרַטָּה (temple corpus); אֲדוֹן אָרַטָּה | A city "beyond seven mountain ranges", in Iran (location unknown; Jiroft? Kerman?); a source of metals and lapis lazuli. The lord of Aratta is never named in this text (in Enmerkar and Ensuḫkešdana: Ensuḫkešdana). |
| Uruk (*unug{ki}*); Kulaba (*kul-aba₄{ki}*); *unug kul-aba₄* | אוּרוּךְ (note at the first occurrence: = `אֶרֶךְ`, בראשית י:י); כּוּלַבָּה; אוּרוּךְ־כּוּלַבָּה | Guidelines §6.4 (the Uruk rule): `אוּרוּךְ`, never `ארך`/`אֶרֶךְ` in a `>` line. Kulaba = a district of Uruk (An's temple quarter). *šeg₁₂ kul-aba₄* "brick(-built) Kulaba" = `לְבֵנַת כּוּלַבָּה` (§3). |
| E-ana (*e₂-an-na*); *ĝi₆-par₄*; E-zagin (*e₂-za-gin₃*); Abzu; E-nun; Eridug | אֵאַנָּה; גִּיפָּר; אֵזַגִּין; הָאַפְּסוּ; אֵנוּן; אֶרִידוּ | E-ana "house of heaven" (Inana's temple in Uruk); *ĝipar* the residence of the *en*; E-zagin "lapis-lazuli house" (Inana's temple in Aratta); Abzu the subterranean fresh water and Enki's temple in Eridu. Meanings in a note at the first occurrence. |
| Gods: Inana ★; Utu ★; An ★; Enlil; *{d}en-lil₂ ban₃-da ki-en-gi-ra*; Enki; Nudimmud; Nanna; Iškur; Nisaba; Nanibgal; Dumuzid; Ama-ušumgal-ana; Ĝeštin-ana; *{d}lamma* | ★ אִינַנָּה; ★ אוּתוּ; ★ אַן; אֶנְלִיל; אֶנְלִיל הַצָּעִיר שֶׁל שׁוּמֶר ★; אֶנְקִי; נוּדִימּוּד; נַנָּה; אִישְׁכּוּר; נִיסַבָּה; נַנִּיבְּגַל; דּוּמוּזִי; אַמָא־אוּשׁוּמְגַּל־אַנָּה; גֶּשְׁתִּין־אַנָּה; אֵלַת־הַמָּגֵן | As the temple and lament corpora. Nudimmud = Enki ("creator of the likeness"?); Dumuzi = `תַּמּוּז` in a note only (יחזקאל ח:יד). The "junior Enlil of Sumer" is Enmerkar's epithet for himself (128, 200) or Enki? (open: read the line). |
| Lands: Sumer ★ (*ki-en-gi*); Akkad (*ki-uri*); Šubur; Ḫamazi; Martu; Susa (*šušin*); Anšan; Dilmun; the Zubi mountains (*ḫur-saĝ zubi*); Tigris; Euphrates | ★ שׁוּמֶר; אֶרֶץ אַכַּד (note: `וְאַכַּד`, בראשית י:י; the Sumerian is *ki-uri*); שׁוּבּוּר; חַמָזִי; מַרְטוּ (note: the Amorites, Akk. Amurru; `הָאֱמֹרִי`, בראשית י:טז, in the note only); שׁוּשַׁן (biblical; נחמיה א:א); ★ אַנְשָׁן; דִּלְמוּן; הַרְרֵי זוּבִּי ★; חִדֶּקֶל; פְּרָת | Šubur (Subartu, the north), Ḫamazi (east of the Tigris), Sumer, Akkad, Martu (the west): the four quarters in 141–144. |
| Sargon (*Šarru-ukîn* = Šarru-kīn) | סַרְגּוֹן | The biblical spelling of the same name (`סַרְגוֹן מֶלֶךְ אַשּׁוּר`, ישעיהו כ:א – Sargon II, under whom the legend was probably composed); first-occurrence note: "the true / legitimate king". |
| Akkade (*A-ga-de*) | אַכַּד | Biblical (`וְאַכַּד`, בראשית י:י). |
| Azupirānu | אֲזוּפִּירָנוּ | "Saffron(-town)" (*azupīru* "saffron", eBL): note. |
| Aqqi / Akki (*Ak-ki*) | אַקִּי ★ | Always vocalized (`אכי`, `אקי`). The name may mean "I poured (water)" (*naqû*): note, with ?. |
| Ištar | אִשְׁתַּר ★ | Guidelines §6.4 (never `עַשְׁתֹּרֶת`). |
| Purattu; Tiāmat (*māt tiāmat*); Dūr-ilu (King's reading; Dēr?) | פְּרָת; אֶרֶץ הַיָּם; דּוּר־אִילוּ | *tâmtu* = `יָם` (guidelines §6.7); the Sealand. Dūr-ilu = BÀD.DINGIR, read Dēr by later scholars: note. |

## 2. Grammar (inherited; temple §2, lament §2)
Narrative marû = participle; ḫamṭu = past; *ḫe₂-* + marû = wish / jussive; ***ḫe₂-* + ḫamṭu in narrative or report =
`אָכֵן`** (affirmative); *ga-* = cohortative (`אֲסַפֵּר`); *u₃-* = "when, after" (`כְּשֶׁ־`; in the command formula of
§3 `כְּשֶׁתְּדַבֵּר`); *na-* + marû = `אַל` / "lest" (`פֶּן` — **not** reserved here: Gen 11:4's `פֶּן נָפוּץ` is a real
counterpart of *na-* "lest" only where the source has it); *nu-* = `לֹא`; *nam-* (negative modal) = `לֹא` (`בַּל`);
non-finite *-a* = relative; copula *-am₃* = nominal sentence; *-gin₇* = `כְּ־`; reduplication = plurality or iteration
(never `שוב ושוב`). **The tense of the spell of Nudimmud (134–155) is decided only by the morphology** (ORACC morph,
line by line; ḫamṭu or marû; *ḫe₂-* + which base); the Hebrew must keep its ambiguity where the Sumerian has none
(§4), and the two scholarly readings (a past golden age – Mittermayer, Alster, Klein; a future / wished state – Kramer
1968, ETCSL, Vanstiphout) go into the apparatus.

Akkadian (SB): guidelines §6.3. Preterite = past; *lū* + preterite (the *narû* style: *lū ēpuš*, *lū irāmanni*) =
**affirmative past `אָכֵן`** (not a wish); precative *li-* = jussive (`יִמְשֹׁל`, `יַעֲלֶה`); ventive -*am*/-*nim*
shown where it matters (`אֵלַי`); D = factitive (*urabbânni* `גִּדְּלַנִי`); Š = causative (*ušēlânni* `הֶעֱלַנִי`);
Gtn = iterative (`פַּעַם אַחַר פַּעַם`, never `שוב`).

## 3. Formulas and key phrases (pre-set; revisable at the first occurrence, then binding; checked by FORMULAS)
| Source | Hebrew | Lines / tag |
|---|---|---|
| *kiĝ₂-gi₄-a*; *lu₂-kiĝ₂-gi₄-a* | `שָׁלִיחַ`; `הַשָּׁלִיחַ` | (Agade 162). **`מַלְאָךְ` is reserved** (wisdom corpus; ↔ `וַיִּשְׁלַח יַעֲקֹב מַלְאָכִים לְפָנָיו`, בראשית לב:ד) [equivalent]. |
| *kiĝ₂-gi₄-a X-ra u₃-na-dug₄ u₃-na-de₃-taḫ* (the commission) | `שָׁלִיחַ, אֶל X – כְּשֶׁתְּדַבֵּר אֵלָיו, כְּשֶׁתּוֹסִיף לוֹ –` (X = `אֲדוֹן אָרַטָּה`; `מַלְכְּךָ, אֲדוֹן כּוּלַבָּה`) | 114, 219, 242, 339, 397, 456, 470; *2-kam-ma-še₃ / 3-kam-ma-še₃ u₃-na-dug₄ u₃-na-de₃-taḫ* `שֵׁנִית – כְּשֶׁתְּדַבֵּר אֵלָיו, כְּשֶׁתּוֹסִיף לוֹ –` / `שְׁלִישִׁית – …` (477, 486). *dug₄* = `דִּבֵּר`/`אָמַר`, *taḫ* = `הוֹסִיף`. |
| *e-ne-ra dug₄-mu-na-ab* (end of the commission) | `– אֱמֹר לוֹ!` (plene `אמור לו!`) | 135, 207, 226, 293, 346, 411, 461, 476, 496. |
| *ur₅-gin₇ ḫu-mu-na-ab-be₂-a-ka* | `כַּאֲשֶׁר כָּךְ אָמַר לוֹ –` | 218, 227, 294, 347, 389, 412, 462, 536; *ur₅-gin₇ ḫu-mu-na-ab-be₂* (235, marû: a question/wish) `כך אומַר לו?` (corrected in EA2, §9.2). |
| *X Y-ra gu₃ mu-na-de₂-e*; *X mu-na-ni-ib-gi₄-gi₄* | `X אֶל Y פּוֹנֶה:`; `X מֵשִׁיב לוֹ:` (creation corpus) | 68, 443, 556; 228. *gu₃ de₂* never `קָרָא`. |
| The messenger's journey: *ḫur-saĝ 5 ḫur-saĝ 6 ḫur-saĝ 7-e im-me-re-bal-bal* | `הֲרָרִים חֲמִשָּׁה, הֲרָרִים שִׁשָּׁה, הֲרָרִים שִׁבְעָה – חָצָה.` | 170, 509. *ḫur-saĝ* = `הֲרָרִים` (temple corpus); *bal* = `חָצָה` (= *nabalkutu*, SB I 17). |
| *igi mu-un-il₂ aratta{ki}-aš ba-te* | `עֵינַיִם נָשָׂא – אֶל אָרַטָּה קָרַב.` | 171, 510 [equivalent ↔ `וַיִּשָּׂא אַבְרָהָם אֶת עֵינָיו וַיַּרְא אֶת הַמָּקוֹם מֵרָחֹק` (בראשית כב:ד)]. |
| *kisal aratta{ki}-ka ĝiri₃ ḫul₂-la mi-ni-in-gub*; *šeg₁₂ kul-aba₄{ki}-a-ka ĝiri₃ ḫul₂-la mu-ni-in-gub* | `בַּחֲצַר אָרַטָּה – רֶגֶל שְׂמֵחָה הִצִּיב.`; `בִּלְבֵנַת כּוּלַבָּה – רֶגֶל שְׂמֵחָה הִצִּיב.` | 172, 438, 511; 299, 417. |
| *nam-nir-ĝal₂ lugal-a-na mu-un-zu* | `אֶת סַמְכוּת מַלְכּוֹ – הוֹדִיעַ.` | 173, 512 (Gudea: *nam-nir-ĝal₂* `הסמכות`). |
| *bur₂-ra-bi inim šag₄-ga-na bi₂-ib₂-be₂* | `בְּגָלוּי – אֶת דִּבְרֵי לִבּוֹ אוֹמֵר.` | 174, 377, 513. *bur₂* "loosen, reveal" is gated `פשר` only for a dream (temple corpus): here `בגלוי`. |
| *kiĝ₂-gi₄-a en aratta{ki}-ra mu-na-ab-bal-e* | `הַשָּׁלִיחַ – אֶל אֲדוֹן אָרַטָּה – (אֶת הַדָּבָר) מוֹסֵר:` | 175, 514. *bal* "transmit" (here) ≠ "cross" (170): recorded. |
| *a-a-zu lugal-ĝu₁₀ mu-e-ši-in-gi₄-in-nam*; *en unug{ki}-ga en kul-aba₄{ki}-a-ke₄ mu-e-ši-in-gi₄-nam*; *en-me-er-kar₂ dumu {d}utu-ke₄ mu-e-ši-in-gi₄-nam* | `אָבִיךָ, מַלְכִּי – אֵלֶיךָ שְׁלָחַנִי;`; `אֲדוֹן אוּרוּךְ, אֲדוֹן כּוּלַבָּה – אֵלֶיךָ שְׁלָחַנִי.`; `אֶנְמֶרְכַּר בֶּן אוּתוּ – אֵלֶיךָ שְׁלָחַנִי.` | 176–177, 185, 378–379, 515–516. *gi₄* "send (back)" = `שָׁלַח` here (the `שוב` gate is not triggered). "Your father": the diplomatic language of seniority [equivalent ↔ `בִּנְךָ בֶן הֲדַד מֶלֶךְ אֲרָם שְׁלָחַנִי אֵלֶיךָ` (מלכים ב ח:ט)]. |
| *lugal-za dug₄-ga-ni nam-ĝu₁₀ taḫ-a-ni nam-ĝu₁₀*; *lugal-ĝu₁₀ a-na bi₂-in-dug₄ a-na bi₂-in-taḫ-am₃* | `מַלְכְּךָ – אֲמִירָתוֹ, מַה לִּי? תּוֹסַפְתּוֹ, מַה לִּי?`; `מַלְכִּי – מָה אָמַר, מָה הוֹסִיף – (הִנֵּה):` | 178–179, 185A–B, 380–381, 517–518. [equivalent ↔ `מַה לִּי וָלָךְ מֶלֶךְ יְהוּדָה` (דברי הימים ב לה:כא); `מָה לִּי וָלָךְ כִּי בָאתָ אֵלַי לְהִלָּחֵם בְּאַרְצִי` (שופטים יא:יב)]. |
| *en-e kiĝ₂-gi₄-a kur-še₃ du-ur₂* / *aratta{ki}-aš inim mu-na-ab-taḫ-e* | `הָאָדוֹן – לַשָּׁלִיחַ הַהוֹלֵךְ אֶל הָהָר –` / `אֶל אָרַטָּה – דָּבָר מוֹסִיף לוֹ:` | 156–157, 337–338, 433. |
| *inim gal {d}inana gal-zu inim-ma-ke₄ me-a mu-na-ab-tum₃* | `אֶת הַדָּבָר הַגָּדוֹל שֶׁל אִינַנָּה, יוֹדַעַת הַדָּבָר – אָנָה יָבִיא?` | 72 (ḫu-), 107, 163 (with *gi-zu₂-lum-ma*). *tum₃* = `הֵבִיא` (temple corpus). |
| The Zubi passage (73–78, 108–113, 164–169): *ḫur-saĝ zubi-še₃ … ed₃-de₃* / *ḫur-saĝ zubi-ta … ed₃-de₃* / *šušin{ki}-e kur an-ša₄-an{ki}-a-še₃* / *peš₂ tur-gin₇ giri₁₇ šu … ĝal₂* / *ḫur-saĝ gal-gal ni₂-ba lu-a* / *saḫar-ra … gur₄-gur₄* | the first translator fixes (EA1), the later copies follow with only the verbal forms changed (wish in 73–78, imperative/second person in 108–113, past in 164–169) | *giri₁₇ šu ĝal₂* = `הִשְׁתַּחֲוָה` (temple corpus *kiri₃ šu ĝal₂*); *peš₂ tur* "little mice" `כְּעַכְבָּרִים קְטַנִּים`. |
| The plea and the promise: 38–64 (Enmerkar) ↔ 79–95 (Inana's answer: the same building list in 2nd person) | EA1 fixes 38–64; 79–95 copies its strings with person and mood changed | "Reversal / promise-fulfilment" rule (guidelines §5.2): read 79–95 before fixing 38–64. |
| The threat (115–123 ↔ 187–195 ↔ 487–490) and the demand (124–135 ↔ 196–207 ↔ 491–496) | EA1 fixes; EA2 and EA4 copy, varying only where the Sumerian varies | |
| The answer formula 208–217 ↔ 526–535 | EA2 fixes; EA4 copies | |
| *ĝi₆-par₄ {ĝiš}meš₃ gibil-gin₇ gurun il₂-la-na* | (EA2 fixes) | 216, 266, 534. |
| *ĝidru um-ta-an-kid₇ ḫu-mu-un-da-ĝal₂* / *na₄-gug-ĝiš-dili na₄-za-gin₃-ĝiš-dili-gin₇ šu-ni-a ḫu-mu-un-ĝal₂* / *… igi-ĝu₁₀-še₃ ḫu-mu-un-tum₂* | (EA3 fixes) | 344–346, 386–388, 409–411. |
| The grain: *anše barag la₂-e um-mi-in-la₂* / *anše-bal-e da-bi-a … sig₁₀*; *še guru₇ ka … si zu₂ buru₅{mušen}-e bi₂-in-taḫ* | (EA2 fixes in 282–283; EA3 copies 330–331, 329 = 356) | *guru₇* = `כְּרִי` [cognate loan]; *buru₅* "locust/sparrow" (EA2 decides; `אַרְבֶּה` ↔ Exod 10) . |
| *ur₅ ḫe₂-en-na-nam-ma-am₃* (396, 505, 506); *i₃-ne-eš₂ {d}utu ud ne-a ur₅ ḫe₂-en-na-nam-ma-am₃* (505) | `כָּךְ אָכֵן הָיָה`; `וְעַתָּה – לִפְנֵי אוּתוּ, בַּיּוֹם הַזֶּה – כָּךְ אָכֵן הָיָה!` | Creation corpus; **Curse of Agade 272 verbatim** (`ועתה – לפני אוּתוּ, ביום הזה – כך אכן היה!`) [equivalent ↔ `וַיְהִי כֵן` (בראשית א:ז)]. |
| *en₃-du*; *šir₃*; *nam-šub*; *za₃-mi₂* | `זֶמֶר`; `שִׁיר`; `קֶסֶם` (§0.4); `תְּהִלָּה` | *X za₃-mi₂* `X – תְּהִלָּה!` (104). |

## 4. Echo control for these texts (read before drafting)
- **Gen 11:1–9.** The Hebrew of the Babel story is reserved (§5) so that its counterparts show as findings:
  `שָׂפָה` (Sumerian has *eme* "tongue" = `לָשׁוֹן`, which is the word of Gen 10:5, 20, 31 – `לִלְשֹׁנֹתָם` – not of
  Gen 11); `דְּבָרִים אֲחָדִים`; `בָּלַל` (*kur₂* is "be different, change": `שׁוֹנֶה`, `שִׁנָּה`); `פּוּץ` / `הֵפִיץ`
  (115–116 "make the people fly off like a dove" is *dal* `עָף` [divergence]); `מִגְדָּל`; `שִׁנְעָר`; `בָּבֶל`;
  `נַעֲשֶׂה לָּנוּ שֵׁם`. `לְבֵנָה` only for *šeg₁₂*, `חֵמָר` only for *esir₂* / ESIR, `טִיט` only for *im*. The building
  that is "brought down from heaven" (43) and the mountain-temple are [divergence]s of `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם`.
- **The tense of 134–155** (§2): Hebrew has a word that keeps the Sumerian ambiguity: *ud-ba* = `אָז` (which in Hebrew
  can open a past or a future: `אָז יָשִׁיר`, `כִּי אָז אֶהְפֹּךְ`, צפניה ג:ט). The verbs follow the morphology; the
  apparatus gives both readings; ETCSL's "may they … address Enlil" and "shall change" are checked against the forms.
- **Exod 4:10.** *ka-ni dugud* = `פִּיו כָּבֵד` [equivalent; *dugud* = Akk. *kabtu*, the cognate of `כָּבֵד`]: so
  `כבד` is gated by *dugud* (§5) and must not appear elsewhere.
- **Writing (500–506).** *im* = `טִיט` (gated; Gudea); *dub* = `לוּחַ`; *gub* "set, stand" = `הִצִּיב` / `הֶעֱמִיד`
  (the words "set" on the clay – not `כָּתַב`, which is *sar*); `לוּחֹת`, `מִכְתָּב`, `חָרוּת` are the Bible's and stay
  in the apparatus (↔ שמות לב:טז).
- **Exod 2:1–10 (SB).** **`תֵּבָה` is reserved** (an Egyptian loan; Noah's and Moses' box): *quppu* "wicker basket,
  box" = `קֻפָּה` (always vocalized; Mishnaic Hebrew `קֻפָּה` is a loan from *quppu* [cognate loan]; Modern "cash box" –
  the vocalization and the note prevent the misreading). `גֹּמֶא`, `סוּף`, `יְאֹר`, `זֶפֶת`, `חָמַר` (the verb), `מָשָׁה`
  / `מְשִׁיתִהוּ` are reserved. *šūru* "reed bundle" = `קָנִים` (`קֻפַּת קָנִים`; **not** `אַגְמוֹן`, which would make
  a sound-echo of `גֹּמֶא` that the Akkadian does not have). **The bitumen is ESIR = *iṭṭû* = `חֵמָר`**, not *kupru*:
  the base text (King 1907: "*iddî*", the logogram ESIR) has no *kupru* (= ESIR.UD.A); the finding is that the Akkadian
  word's Hebrew rendering by the flood corpus's rule is the same word as Exod 2:3's `וַתַּחְמְרָה בַחֵמָר` [equivalent],
  while Gen 6:14's `כֹּפֶר` (*kupru*) is absent. *nadû* "throw" = `הִשְׁלִיךְ` (↔ שמות א:כב `הַיְאֹרָה תַּשְׁלִיכֻהוּ`
  [equivalent]; K 4470's *iddinanni* "gave me" = `נְתָנַתְנִי`); *nāru* = `נָהָר` [cognate]; *elû* Š = `הֶעֱלָה`
  [divergence ↔ `מְשִׁיתִהוּ`]; *dālû* (LÚ.A.BAL) "water-drawer" = `דּוֹלֵה־הַמַּיִם` [cognate: *dalû* ~ `דָּלָה`,
  `דְּלִי`; ↔ `וַתָּבֹאנָה וַתִּדְלֶנָה` (שמות ב:טז), `וְגַם דָּלֹה דָלָה לָנוּ` (שמות ב:יט)] – King reads the logogram
  *nâḳ mê* "irrigator, libation-pourer": both readings in the note; *ana mārūti* = `לְבֵן` / `לְבָנוּת` (↔ `וַיְהִי
  לָהּ לְבֵן`, שמות ב:י [equivalent]); *rabû* D = `גִּדֵּל` (↔ `וַיִּגְדַּל הַיֶּלֶד`); *erû* "conceive" = `הָרָה`, *walādu*
  = `יָלַד` (↔ `וַתַּהַר הָאִשָּׁה וַתֵּלֶד בֵּן`, שמות ב:ב); *puzru* = `סֵתֶר` (↔ `וַתִּצְפְּנֵהוּ`); *šakānu* = `שָׂם`
  (the creation corpus's fixed verb; ↔ `וַתָּשֶׂם בָּהּ אֶת הַיֶּלֶד`, שמות ב:ג – the same verb!).
- **ETCSL's English is the main source of false echoes** (guidelines §5.2): "in a single language", "shall change the
  speech", "the speech of mankind is truly one", "the junior Enlil", "holy" (*kug* = `טָהוֹר`), "temple" (*e₂* =
  `בַּיִת`), "shrine" (*eš₃* = `מִקְדָּשׁ`), "tablet" (*dub*), "wrote" (*gub*), "as on a tablet". Check each.

## 5. Reserved and gated strings (checked by `kings_tools.py verify`; RESERVED_COMMON)
- **Never:** the inherited `עוֹלָם`, `טֶרֶם`, `אֲדָמָה`, `בָּרָא`, `תְּהוֹם`, `מְלָאכָה`, `אֱלֹהִים`, `כָּבוֹד`,
  `שְׁכִינָה`, the root `קדש`, `מַלְאָךְ`, `אֵיכָה`, `קִינָה`; Gen 11's `שָׂפָה` (unless Akk. *šaptu*), `דְּבָרִים
  אֲחָדִים`, `בָּלַל` / `בִּלְבֵּל`, `פּוּץ` / `הֵפִיץ`, `שִׁנְעָר`, `בָּבֶל`, `מִגְדָּל`, `נַעֲשֶׂה לָּנוּ (שֵׁם)`; Exod 2's
  `תֵּבָה`, `גֹּמֶא`, `סוּף`, `יְאֹר`, `זֶפֶת`, `חָמַר` (verb), `מָשָׁה` / `מְשִׁיתִהוּ`.
- **Gated (only with the source word):** `חֵמָר` (*esir₂*, ESIR / King's *iddî*); `כֹּפֶר` (*kupru*); `לְבֵנָה`
  (*šeg₁₂*; also "white" licensed by *babbar*); `טִיט` (*im*); `כָּבֵד` (*dugud*, *kabtu*); `טוֹב` (*dug₃*);
  `ברך` (*šud₃*); `שׁוּב` (*gi₄*, *gur*, *târu*); `עוֹף` / `עָף` (*dal*, Akk. *šâʾu*); `עבד` (*kiĝ₂*, *arad₂*);
  `מִקְדָּשׁ` (*eš₃*); `הֵיכָל` (*e₂-gal*); `אָרַר` (*nam … kud/ku₅*); `נָכְרִי` (*kur₂*); `הִשְׁלִיךְ` (*nadû*, *šub*,
  *ri*); `נָהָר` (*nāru*, *id₂*); `קָרָא` (naming only: *sa₄*, *nabû*, *šuma zakāru*).

## 6. Traps of unvocalized Hebrew
`אותו` (Utu), `איננה` (Inana), `אן` (An), `שומר` (Sumer), `אור` (Urim), `אנשן`, `זובי`, `אכי`/`אקי` (Aqqi), `אשתר`
(Ištar), `המה` (*me*): vocalize at every occurrence (checked). Also: `אֵלִי` / `אֵלַי`; `לְבֵנָה` "brick" (Modern "moon");
`קֻפָּה` (Modern "cash box"); `כָּבֵד` (adj.) / `כָּבֵד` (liver; Gudea) / `כָּבוֹד` (reserved); `שָׂם` / `שָׁם`;
`עָרֵי` / `עָרִי`; `לִבְנוֹת` (build) / `לְבָנוֹת` (white); `הָרִים` (mountains) / `הֵרִים` (raised).

## 7. Shared with the other Round 2 runs (runs 5 and 7: `../העולם-התחתון/`, `../קולות-היום-יום/`)
Fixed here first (2026-10-21) where no earlier corpus had them; the others follow the earlier corpora too: Inana
`אִינַנָּה` ★, Utu `אוּתוּ` ★, An `אַן` ★, Enki `אֶנְקִי`, Nudimmud `נוּדִימּוּד`, Enlil `אֶנְלִיל`, Dumuzid `דּוּמוּזִי`,
Ĝeštin-ana `גֶּשְׁתִּין־אַנָּה`, Nisaba `נִיסַבָּה`, Iškur `אִישְׁכּוּר`, Ištar `אִשְׁתַּר` ★, Uruk `אוּרוּךְ`, Kulaba
`כּוּלַבָּה`, E-ana `אֵאַנָּה`, *ĝipar* `גִּיפָּר`, Eridu `אֶרִידוּ`, Abzu `הָאַפְּסוּ`, Aratta `אָרַטָּה`, Sumer `שׁוּמֶר` ★,
Akkad `אַכַּד`, *me* `הַ־מֶה` ★, *kiĝ₂-gi₄-a* `שָׁלִיחַ`, *eme* `לָשׁוֹן`, *nam-šub* `קֶסֶם` (open), *nukaribbu* `גַּנָּן`,
*quppu* `קֻפָּה`, *iṭṭû* `חֵמָר`. New here: Ama-ušumgal-ana `אַמָא־אוּשׁוּמְגַּל־אַנָּה`, Nanibgal `נַנִּיבְּגַל`,
Šubur `שׁוּבּוּר`, Ḫamazi `חַמָזִי`, Zubi `זוּבִּי`, Azupirānu `אֲזוּפִּירָנוּ`, Aqqi `אַקִּי`.

## 9. Merged from the parts
### 9.1 Part EA1 (1–155), 2026-10-21
Full list: `1-אנמרכר-ואדון-ארטה/project.md` ("Proposals (EA1)"). Binding for EA2–EA4 (copy the strings exactly where
the Sumerian recurs):
- **Time words:** *ud-ba* / *ud-bi-a* = `אז` (always); *ud re-a* = `בימים ההם`.
- ***kur***: before a country name `ארץ` (`ארץ אַנְשָׁן`, `ארץ דִּלְמוּן`, `ארץ מַרְטוּ`, `אֶרֶץ אַכַּד` for *ki-uri*);
  otherwise `הר`; *kur-kur* `הארצות`; *ḫur-saĝ* `הררים`, *ḫur-saĝ zubi* `הַרְרֵי זוּבִּי` (★ Zubi).
- **People:** *nam-lu₂-ulu₃* `האנושות`, + a city `אנשי X`; *lu₂-u₁₈-lu* `האדם`; *uĝ₃* `העם`; *erin₂* `החיל`.
- **Verbs:** *pa e₃ ak* `הזהיר`; *galam* `בכשרון … עיבד`; *si sa₂* `יישר`; *sikil* `זיכה`; *mu₂* `הצמיח`; *de₆*
  `נשא`; *tum₂* `הוביל`; *tum₃* `הביא`; *ed₃* `עלה`/`ירד`; *pad₃* `מצא`; *zig₃* `קם`; *gul* `הרס`; *dal* (caus.)
  `העיף`; *saĝ keše₂* `ראש קשר`; *u₆ e* `התפעל`; *igi bar* `הביט`; *ĝizzal ak* `קשב עשה`; *na de₅* `עצה נתן`;
  *dub₃ ĝar* `ברך שׂם`; *gu₂ ĝiš ĝar* `צוואר לעץ שׂם`.
- **Fixed strings:** the messenger `שליח – יודע דבר, בעל כוח־עמידה –`; the question `את הדבר הגדול של אִינַנָּה,
  יודעת הדבר – אנה יביא?`; the Zubi passage 108–113 (`אל הַרְרֵי זוּבִּי – תעלה בו!` / `מהַרְרֵי זוּבִּי – תרד עמו!` /
  `שׁוּשַׁן – עד ארץ אַנְשָׁן –` / `כעכברים קטנים – לה ישתחוו!` / `ההררים הגדולים – ההומים מעצמם –` / `בעפר – לפניה
  יתרפסו!`); the threat 115–123 and the demand 124–135 (template for 187–207, 487–496); the counsel 69–70 (for
  626–627); `לְבֵנַת כולבה`; `ככסף בסדק־הסלע`; `כתר־הראש … חבש`; `הר הַ־מֶה הזכים`.
- **Words:** *muš* `נחש`, *ĝiri₂* `עקרב`, *kir₄* `צבוע`, *ur-maḫ* `אריה`, *ur-gir₁₅* `כלב`, *ur-bar-ra* `זאב`,
  *gaba-šu-ĝar* `יריב`, *a-da* `תחרות`, *eme* `לשון`, *ka* `פה`, *anše* `חמור`, *barag* `שק`, *ḫi-li* `חן`,
  *taškarin* `תאשור`, *zag-du₈* `מזוזה`, *si-muš₂* `קרני־זוהר`, *agrun* `חדר`, *kug-me-a* `כּוּג־מֵאָה`, *a-eštub*
  `מֵי־הַשִּׁבּוּט` (always vocalized), *u₈* `רחל`.
- **Tool (EA1):** Zubi and *a-eštub* added to the name traps; the `שוב` gate refined (catches `שב`, `השיב…`, `משיב`, not
  `שבו`/`השיבוט`); `מקינה` is caught by the `קינה` reservation (write `מן הקן`).

### 9.2 Part EA2 (156–307), 2026-10-21
Full list: `1-אנמרכר-ואדון-ארטה/project.md` ("Proposals (EA2)"). Binding for EA3–EA4:
- **Verbs:** *dag* `ברח` (`אבריח`; *šu … dag* `ברחה מ־`); *ḫu-luḫ* `הבהיל`; *sig₁₀* "put" `נתן`; *šu-a gi₄* `לידו
  השיב`; *gu₃ nun e/di* `קול גדול השמיע`; *gu₃ … sig₁₀* `קול השמיע`; *ĝeštug₂ ĝar* `אוזן שׂם`; *taka₄* `עזב`;
  *saĝ šum₂* `ראש נתן`; *saĝ ĝar* `ראש שׂם`; *ud zal* `נגה`; *si* `מילא`; *dub* (grain) `ערם`; *gam* `כרע`.
- **Nouns:** *a-da-min₃* `תחרות`; *gaba-ri* `תשובה`; *piriĝ* `לביא`; *ḫu-ri₂-in* `נשר`; *buru₅* `דרור?`; *sa-par₄*
  `מכמורת`, *ĝiš-bur₂* `פח`; *šubur* `משרת`; *naĝa* `בורית`; *taraḫ-maš* `תיש־היעל`; *muš-saĝ-kal* `הנחש
  המובחר`; *{d}lamma* `אֵלַת־הַמָּגֵן`; *ad₆* `פגר`; *guru₇* `כרי`; *{sa}al-kad₅* `רשתות־המשא`; *anše barag la₂-e*
  `חמורי־המשא`; *anše-bal* `חמורי־חילוף`; *še* `שעורה`; *kisal gu₂-en-na* `חצר אולם־האספה`.
- **Particles:** *tukum-bi* `אם` (law corpus); *i₃-ge-en* `אם אכן` / `אכן`; *a-gin₇* `איך`.
- **Fixed strings:** the answer formula 208–217 (for 526–535, copied exactly), the grain lines 281–284 (for
  329–331, 355–356), *ĝi₆-par₄ {ĝiš}meš₃ gibil-gin₇ gurun il₂-la-na* `בגיפר שלו, הנושא תנובה כעץ־מס צעיר,`.
- **Tool:** the formula check ignores quotation marks; the `שוב` gate anchored (`תשובה` is not a hit).

## Changelog
- 2026-10-21: written before the first part, from the temple, lament, creation, flood, Gilgameš, law and wisdom
  corpora and a reading of both transliterations (the formula survey of §3; the echo-control list of §4).
