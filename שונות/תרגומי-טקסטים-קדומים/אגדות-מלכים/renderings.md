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
4. **Cross-corpus choices, followed as the most recent corpus has them** (settled by the lead's harmonization of
   2026-10-21, §9.6, where marked): Inana = `אִינַנָּה` ★ (settled); *me* = `הַ־מֶה` ★ (settled); *uĝ₃* = `עָם` (a
   city's or land's people; `הָאֲנָשִׁים` for humankind: settled, by sense); *nam-šub* (= Akk. *šiptu*) = `קֶסֶם`
   (settled: *nam-šub* = *tu₆* = *šiptu* = `קֶסֶם`, Akk. *tû* = `לַחַשׁ`; not `חֶבֶר`); *ĝidru* = `שַׁרְבִיט`
   (laments, Gudea; creation 2 has `מַטֶּה`); bitumen: *iṭṭû* (ESIR) = `חֵמָר` (flood corpus, Gudea *esir₂*), *kupru*
   = `כֹּפֶר` (not in these texts) (settled, as now).

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
| *lugal-za dug₄-ga-ni nam-ĝu₁₀ taḫ-a-ni nam-ĝu₁₀*; *lugal-ĝu₁₀ a-na bi₂-in-dug₄ a-na bi₂-in-taḫ-am₃* | `מַלְכְּךָ – אֲמִירָתוֹ, מַה לִּי? תּוֹסַפְתּוֹ, מַה לִּי?`; `מַלְכִּי – מָה אָמַר, מָה הוֹסִיף – (הִנֵּה):` | 178–179, 185A–B, 380–381, 517–518. [equivalent ↔ `מַה לִּי וָלָךְ מֶלֶךְ יְהוּדָה` (דברי הימים ב לה:כא); `מַה לִּי וָלָךְ כִּי בָאתָ אֵלַי לְהִלָּחֵם בְּאַרְצִי` (שופטים יא:יב)]. |
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
| *en₃-du*; *šir₃*; *nam-šub*; *za₃-mi₂* | `זִמְרָה` (was `זֶמֶר`; EA4 used `זמרה`, harmonized 2026-10-21, §9.6); `שִׁיר`; `קֶסֶם` (§0.4); `תְּהִלָּה` | *X za₃-mi₂* `X – תְּהִלָּה!` (104). |

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
Akkad `אַכַּד`, *me* `הַ־מֶה` ★, *kiĝ₂-gi₄-a* `שָׁלִיחַ`, *ra-gaba* `צִיר` (§9.6), *eme* `לָשׁוֹן`, *nam-šub* `קֶסֶם` (settled 2026-10-21), *nukaribbu* `גַּנָּן`,
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
- **Verbs:** *pa e₃ ak* `הזהיר`; *galam* `בתחכום … עיבד` (2026-10-23 harmonization, was `בכשרון`); *si sa₂* `יישר`; *sikil* `זיכה`; *mu₂* `הצמיח`; *de₆*
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

### 9.3 Part EA3 (308–469), 2026-10-21
Full list: `1-אנמרכר-ואדון-ארטה/project.md` ("Proposals (EA3)"). Binding for EA4:
- ***ur*** in the riddle 457–476 = `כלב` (Mittermayer; ETCSL "champion" recorded); *ur-gir₁₅* is also `כלב`.
- **Fixed strings:** the sceptre 340–346 (for 382–388, 409–411): `'בשרביטי – שורשו: הַ־מֶה של הנסיכות;` / `ענפיו –
  על כולבה – לצל עושה;` / `בענפיו המנצנצים – במקדש אאנה –` / `אִינַנָּה הטהורה – מתקררת בהם;` / `את השרביט –
  כשיקטום (ממנו) – בידו יהיה!` / `כמחרוזת אודם, כמחרוזת סַפִּיר – בידו יהיה!` / `אדון ארטה – לפניי – יוביל!' – אמור
  לו!"`; the grain 282 = 330 `על חמורי־המשא – בתלותו,`; the dog riddle 457–461 (for 471–476): `'כלב – לא יהיה
  שחור, כלב – לא יהיה לבן,` … `כלבי – עם כלבו – תחרות יעשה,` / `החזק – ייוודע!' – אמור לו!"`; the question 394–396
  `ועתה – איש לאיש מה אמר?` … `מה שאיש לאיש אומר – כך אכן היה!`.
- **Nouns:** *ĝidru* `שרביט`; *gi* `קנה`; *gi su-lim* `קנה־הזוהר`; *im* `טיט` (never `חמר`: that is *esir₂*); *dub*
  `לוח`; *gi-gag* `קולמוס־הקנה`; *munu₄* `מַלְת`; *šag₄-ĝar* `רעב`; *aĝrig* `נאמן־הבית`; *itima* `החדר הפנימי`
  (`היכל` is reserved for *e₂-gal*); *ab-ba-ab-ba* `הזקנים`; *ušumgal* `דרקון`; *edin* `ערבה`; *kaskal* and
  *ḫar-ra-an* `דרך`; *gug* `אודם`; *na₄-gug-ĝiš-dili* `מחרוזת אודם`; the colours *gig₂* `שחור`, *babbar* `לבן`, *su₄*
  `אדום`, *dara₄* `חום`, *sig₇-sig₇* `ירוק־צהוב`, *gun₃-gun₃* `מנומר`; *nam-me* `לא יהיה`.
- **Particles:** *i₃-ne-eš₂* `ועתה`; *lu₂ lu₂-ra* `איש לאיש`; *ur₅ ḫe₂-en-na-nam-ma-am₃* `כך אכן היה` (confirmed).
- **Tool:** the gated strings are tested on the bracket-free transliteration as well (`e₂-⸢gal⸣`); the "openly"
  formula accepts a final `:`.

### 9.4 Part EA4 (470–636), 2026-10-21
Full list: `1-אנמרכר-ואדון-ארטה/project.md` ("Proposals (EA4)"). For a later Enmerkar text (Enmerkar and
Ensuḫkešdana) and for the other corpora:
- **The writing passage:** *ka-ni dugud* `פיו כבד` (501–502; Mittermayer's *inim i₃-dugud* "the matter was heavy"
  in the apparatus); *im* `טיט`, *im šu-rin-na* `טיט־התנור`; *im-e šu ra* `בטיט יד היכה`; *gub* (words on clay)
  `הציב`; *dub-gin₇* `כלוח`; *ud-bi-ta … / i₃-ne-eš₂ …* `לפנים … / ועתה …`; *gag* `יתד`. `כתב` stays out of the
  Hebrew (*sar* only).
- **Nouns:** *tug₂* `בגד`; *saĝ-ki* `מצח`; *eš₂-gar₃* `מכסה`; *ĝiškim* `אוֹת` (vocalized); *a-ma-ru* `מבול`; *a
  nam-til₃* `מֵי החיים`; *lil₂* `מַשַּׁב`; *ug* `לַיִשׁ`; *me-lem₄* `זוהר`; *um-ma* `הזקנה`; *ki-sikil* `עלמה`; *barag*
  (dais) `דוכן` (2026-10-23 harmonization, was `כס`); *aga*, *men* `כתר`; *en₃-du* `זמרה`; *gig* `חיטה`; *gu₂* (pulse) `קטנית`; *eme₅* `אתון`; *dur₃* `עַיִר`
  (vocalized); *ud₅* `עז`; *peš₃* `תאנה`; *ĝeštin* `גפן`; *ur igi-ĝal₂-la* `אוּר־אִיגִיגַלָּה` (name, open).
- **Verbs:** *šu … dag* + object `שמטה מידה`; *šu taka₄* `שלח`; *šu ti* `קיבל`; *igi du₈* `ראה` (≠ *igi bar*
  `הביט`); *dub₂* `נפץ`; *tar* `כרת`; *ur₃* `גרף`; *sud* (water) `הזה`; *gu₂ ĝar* "gather" `יחד שָׂם`; *ĝiš ĝal₂*
  `(צוואר) בעץ נתן`; *šir₃ dug₄* `שיר דיבר`; *bal ak* `לעשות חליפין`.
- **Fixed strings:** `השליח – פיו כבד; אינו יכול להשיבו.`; `לפנים – הצבת דבר על טיט – לא היתה;`; `אחרי שהמבול
  גרף,`; the commission with `שנית` / `שלישית` (477, 486).

### 9.5 The Sargon Birth Legend (SB), 2026-10-21
Full list: `2-אגדת-הולדת-סרגון/project.md` ("Proposals (SB)"). The §4 decisions held against the tablet: *quppu ša
šūri* `קֻפָּה של קנים`; ESIR (*iddî*) = *iṭṭû* `חֵמָר`; *nadû* `השליך`; *elû* Š `העלה`; *dālû* `דולה־המים` (fixed
string `אַקִּי דולה־המים`); *ana mārūti* `לְבֵן` (vocalized); *rabû* D `גידל`; *šakānu* `שָׂם`. New: *entu* / *ēnetu*
`אֵנְתּוּ` (law corpus); *puzru* `סתר`; *peḫû* `אטם`; *bābu* (of a box) `פתח`; *aḫu* (river) `גדה` (`שפה` is
reserved); *nukaribbūtu* `גַּנָּנוּת`; *šarrūta epēšu* `מלכות עשה` (↔ 1 Kgs 21:7); *dannu* `חזק`; *ṣalmāt qaqqadi*
`שחורי הראש`; *akkullu* `קרדום`; *erû* (metal) `נחושת`; *lamû* `סבב`; *nabalkutu* Gtn `חצה, פעם אחר פעם`; *nakāru* D
`שינה`; *rapādu* `שוטט`; *purīmu* `פרא`; *parû* `פרד`; *ṣabītu* `צבייה`; *nēšu* `אריה`.

### 9.6 Cross-corpus harmonization (the lead's decisions), 2026-10-21
2026-10-21 harmonization: one Hebrew per source word across all corpora (STATUS §6). Applied here:
- *za-gin₃* (= Akk. *uqnû*) "lapis lazuli" = `סַפִּיר` [equivalent] (as before in every `>` line; first occurrence in
  each file vocalized: EA 18, 209 = 527, 345 = 387 = 410, 481). The [equivalent] note at EA 18 (Exod 24:10, Ezek 1:26,
  Job 28:6: the biblical stone is lapis lazuli, not the modern sapphire), with the god's beard (209) and Inana's house
  E-zagin (559). `לזורית` is never the rendering; it stays only as the mineral's name in explanations. SB has no
  *uqnû*.
- *šembi(zid)* = `פּוּךְ` (as before: 66, 590; ↔ 2 Kgs 9:30, Jer 4:30 added). Akk. *guḫlu* would be `כָּחָל` (not here).
- *šu-ur₂-men* (= Akk. *šurmēnu*) = `שׁוּרְבִּין` (Gilgameš corpus's form; Mishnaic `שׁוּרְבִּינָא`), was `שׁוּרְמֵן`:
  EA 401 and D (the same half-line, identical Hebrew). *li* = `בְּרוֹשׁ` (*burāšu*); *ḫa-šu-ur₂* `חַשׁוּר` unchanged.
- *ra-gaba* = `צִיר` "envoy", always vocalized (unvocalized `צירי` reads "my birth pangs"), [equivalent] Prov 13:17;
  was `רַכָּב`: EA 363 (the only occurrence; `ra₂-gaba`). *kiĝ₂-gi₄-a* = `שָׁלִיחַ` unchanged. Checked by
  `kings_tools.py` TRAPS (`ציר` must be vocalized when the transliteration has *ra(₂)-gaba*).
- *nam-šub*, *tu₆*, *šiptu* = `קֶסֶם`; Akk. *tû* = `לַחַשׁ` (as before: EA 134, 135, 206, 207; no *tu₆*, *šiptu*, *tû*).
- *en₃-du* = `זִמְרָה` (EA 585 `זמרתה`, as before; §3 row corrected from `זֶמֶר`).
- *guru₇* = *karû* = `כְּרִי` (as before: 284, 285, 329, 356, 485, 551, 601, 621, 625).
- *sizkur₂* = `תְּפִלָּה`, *a-ra-zu* = `תַּחֲנוּן` (as before: 250); *šudu₃* not in these texts.
- *mušen* = `צִפּוֹר` (as before: 116, 188, 507; SB II.5 *iṣṣūru*); *me* = `הַ־מֶה` and Inana = `אִינַנָּה` (as before).
- Not in these texts: *ur₄* "gather" (570 *ur₄-[X]* is a broken name), *kabattu*, *sukkallu* / *sukkal*.

2026-10-23 harmonization (`harmonization--2026-10-23.md`; Enmerkar only – Etana's rows are applied later): *barag* "dais" → `דוכן` (row 5), the formula *na ga-e-de₅ na de₅-ĝu₁₀ ḫe₂-e-dab₅* → `עצה אתן לך – עצתי תיאחז!` (row 13), *galam* → `בתחכום` (row 15); changed lines: EA 498 `על הכס` → `על הדוכן`, 594 `את הכס` → `את הדוכן` (not in the table: the same *barag*); 69, 626 `את עצתי תקבל` → `עצתי תיאחז`; 39, 46 `בכשרון לי תעבד` → `בתחכום לי תעבד`, 263 `בכשרון לך אעבד` → `בתחכום לך אעבד`.

## 10. Etana (project 3, `3-אגדת-אתנה/`; Round 3, run 2, 2026-10-21) – fixed before the first part
Fixed by the coordinator from a reading of all six eBL chapters (585 lines: OB Morgan, OB Susa, MA Aššur, SB I–III)
and the earlier Akkadian corpora (Gilgameš, flood, creation, wisdom, law). **§0.2 (the Akkadian inheritance) binds**;
this section adds what Etana needs and settles its collisions. A translator may revise a §10.3 row at its first
occurrence, with the reason in `project.md`; after that it binds (and FORMULAS in `kings_tools.py` is updated).

### 10.1 Names (★ = vocalized at every occurrence; checked by TRAPS)
| Source | Hebrew | Notes |
|---|---|---|
| Etana | אֵתָנָה ★ | Gilgameš corpus form. Unvocalized `אתנה` reads "I will give" (Gudea `אתנה לך`): always vocalized, also in headings. King of Kiš, "the shepherd who went up to heaven" (Sumerian King List). |
| Kiš | כִּישׁ | First occurrence per file vocalized; note: the first city of kingship after the flood (Sumerian King List). The identification of `כּוּשׁ`, Nimrod's father (בראשית י:ח), with Kiš is a scholarly proposal: the apparatus only, marked so. |
| Šamaš (also OB *šamšum*); the sun *šamšu* | שַׁמַשׁ ★; שֶׁמֶשׁ ★ | Guidelines §6.7: both always vocalized where both occur (Etana has both: MA f+2). Never `שֶׁמֶשׁ` for the god. *qurādu* (his epithet) = `הַגִּבּוֹר`. |
| Anu (OB *ānum*) | אָנוּ ★ | Unvocalized `אנו` reads "we". |
| Enlil / Ellil; Ea; Sîn; Adad; Ištar; Innina | אֶנְלִיל; אֵאָה; סִין ★; אֲדַד; אִשְׁתַּר ★; אִנִּינָה | Sîn: unvocalized reads `סין` (the desert of Sin, Exod 16:1; China). Innina (SB I 21) = Inana by another name: note. |
| Igigū; Anunnakkū; the Sebetti; Šakkan; Anzû | אִיגִיגִי; אֲנוּנָּכִּי; הַשִּׁבְעָה; שַׁכַּן ★; אַנְזוּ | Flood and Gilgameš forms. Šakkan (Gilgameš ★). Anzû (II 72: the eagle cursed as "malignant Anzû"): the lion-headed thunderbird (EA `אַנְזוּד` is the Sumerian form): note. |
| *erû* (the eagle) | נֶשֶׁר | = Gilgameš *arû* (VII 170) and Sum. *ḫurin* (EA 245–247, Gudea): one word for the eagle in every corpus. [equivalent]; note that Akk. *našru* is the cognate of `נֶשֶׁר` and is not used here. Gated (verify). Homonym: *erû* "conceive" (OBS 5 *īrû*) = `הָרָה` (Sargon). |
| *ṣerru* | נָחָשׁ | Gilgameš: `נחש` only for the snake word (gated). |

### 10.2 Grammar (Akkadian; §2 of this file)
Preterite = past; perfect = past (often "then …"); present in narrative = participle or present (`אוכל`, `צד`), in
speech = future; stative = adjective / nominal clause; precative *li-* / *lū* = jussive (`יְהִי`, `תֵּלֵךְ`); *ai* +
preterite = `אַל` + future (`אל יֵצא`); Gtn (*išteneʾʾi*, *ittanallak*, *imtanaḫḫara*) = iterative: a participle or
`פעם אחר פעם` / `יום יום` (never `שוב`); *-ma* not "and then" each time; ventive shown where it means "to me / here".
**OB *ina šiātim lā kaṣrat* (OBM 7) is a stative "was not bound", not "not yet"**: `טֶרֶם` stays reserved (§5) and Gen
2:5's `טֶרֶם יִהְיֶה` goes to the apparatus as [divergence] (Foster's "had not yet been" is rank 3: the classic false
echo of "not yet", guidelines §5.2).

### 10.3 Formulas and repeated passages (checked by FORMULAS where marked ✓)
| Source | Hebrew (plene, unvocalized except names) | Lines |
|---|---|---|
| ✓ X *pâšu īpušam-ma ana* Y *izakkaršu* (OB *izzakaršu*; OB Šamaš *piʾāšu*) | `X פתח את פיו, אל Y דיבר:` | OBM b+3, b+14, c+5, c+8; II 7, 10, 74, 113, 115, 128, 143; III 9, 11. **Etana's formula has no *iqabbi***: so no `ואמר` (the flood / Gilgameš formula `פתח את פיו ואמר, אל Y דיבר:` has it). Order variant *īpuš(am)-ma izakkar(a) ana* Y (II 40, 96) = `X פתח את פיו, דיבר אל Y:`; with *amāta* (III 1) `X פתח את פיו, אל Y … דבר דיבר:`. MA / SB *ana šâšu ana* Y *iqabbi* ("said to him, to Y") – the first translator fixes (e.g. `X אומר לו, לY:`). |
| ✓ *atmu ṣeḫru atar ḫasīsa* / *ana erî abīšu amāta izakkar* | `האפרוח הקטן, יתיר־התבונה,` / `אל הנשר, אביו – דבר דיבר:` | OBS 22–23; MA c+3–4; II 45–46, 98–99. *watmu* / *atmu* = `אֶפְרוֹחַ` (Gilgameš precedent; [equivalent] ↔ `אֶפְרֹחִים` דברים כב:ו; `גּוֹזָל` is reserved: דברים לב:יא, §10.4); *atru* = `יָתִיר` (Enūma eliš *šūtur* `יתיר`); *ḫasīsu* = `תְּבוּנָה` (creation, flood); the epithet is Atra-ḫasīs's name (note). |
| ✓ X *ikkal ineʾʾi ikkalū mārūšu* (SB, MA); OB *erûm īkul īkulū mārūšu* | `X אוכל, סר – אוכלים בניו.`; `הנשר אכל – אכלו בניו.` | II 27–33, MA b+16–20; OBS 9, 11. *neʾû* "turn back, away" = `סָר` (no `שוב`). *bâru* "catch, hunt down" = `לָכַד` (Gilgameš; revised by ET2 from `צָד`, which belongs to *ṣâdu* / *ṣayyādu*): `… – הנחש לוכד,` (OB `לכד`); `רשת שַׁמַשׁ תלכדך` (↔ תהלים לה:ח). |
| ✓ *ša itâ ša šamaš ittiqu* | `אשר יחלוף את גבול שַׁמַשׁ –` | II 17, 19, 49. *etēqu* = `חָלַף` (Gilgameš; ↔ `חָלְפוּ חֹק`, ישעיהו כד:ה); *itû* = `גְּבוּל` (gated; [equivalent] ↔ דברים יט:יד, and Laban's heap `אִם אָנִי לֹא אֶעֱבֹר אֵלֶיךָ אֶת הַגַּל הַזֶּה` בראשית לא:נב). |
| ✓ *šamaš lemniš ina qāt māḫiṣi limalli* (II 18) / *umalli* (II 50) | `שַׁמַשׁ – ברעה – ביד המוחץ ימסרהו!` / `… ימסרהו.` (present: the fledgling's prediction) | *mullû ina qāti* "deliver into the hand": **never `מילא יד`** (Hebrew: ordination – a false echo); *māḫiṣu* = `מוֹחֵץ` (*maḫāṣu* = `מחץ`, law corpus). |
| The curse of the oath: *kakku murtappidu elīšu līšir* | `הנשק המשוטט – עליו יישר!` | OBS 3; MA b+4; II 21. *rapādu* = `שוטט` (Gilgameš), *ešēru* = `ישר` [cognate]. *nērebu* (mountain pass) = `מָבוֹא`, *nērebtu* = `מְבוֹאָה` (ET2: `מַעֲבָר` is Gilgameš's *nēberu*): `יתרחקו ממנו מבואות ההר,`; *ṭūdu* = `נָתִיב`, **_urḫu_ = `דֶּרֶךְ`, _ḫarrānu_ = `אוֹרַח` (vocalized), as in Gilgameš and the wisdom corpus** (harmonized 2026-10-22). |
| ✓ *alik urḫa etiq šadâ* (Šamaš's command; MA d+7 *šadâ ebir*) / execution X *illik ītiq šadâ* | `לך בדרך, חלוף את ההר,` / `X הלך, חלף את ההר.` | II 75, 89, 144, 149; MA d+7 (the tablet has *etiq*, as SB: corrected by ET3). *urḫu* = `דֶּרֶךְ` (Gilgameš; was `אֹרַח` before ET2, 2026-10-22). |
| ✓ *ana zikir šamaš qurādi* | `למאמר שַׁמַשׁ הגיבור –` | II 88, 148. *zikru* = `מַאֲמָר` (Gilgameš); but *zikru* "name, fame" (II 127 *zikirka luštešmi*) = `זִכְרְךָ` [cognate] (↔ `וְזֶה זִכְרִי לְדֹר דֹּר` שמות ג:טו): one lemma, two senses (creation corpus precedent). |
| ✓ The plea: *idnam-ma šamma ša alādi* / *kullimannī-ma šamma ša alādi* / *piltī usuḫ-ma šuma šuknanni* | `תנה לי את עשב הלידה!` / `הראני את עשב הלידה!` / `נסח את חרפתי, שִׂים לי שֵׁם!` | II 140–142 = III 12–14; MA d+4 (OB Morgan c+9 is another wish). *šammu* = `עֵשֶׂב` (Gilgameš, flood: "every `עשב` stands for *šammu*"); *alādu* = `יָלַד` (`לֵדָה`); *kullumu* = `הֶרְאָה` (law corpus); *nasāḫu* = `נָסַח` [cognate]; *pištu* = `חֶרְפָּה` (Gilgameš; [equivalent] ↔ `אָסַף אֱלֹהִים אֶת חֶרְפָּתִי` בראשית ל:כג, gated); *šuma šakānu* = `שָׂם שֵׁם` (Gilgameš; [equivalent] ↔ `וְנַעֲשֶׂה לָּנוּ שֵׁם` בראשית יא:ד): **`שֵׁם` here means "offspring, heir"** – the note says so, and that the Akkadian keeps the one word for both. The plant: [divergence] ↔ `תְּנִי נָא לִי מִדּוּדָאֵי בְּנֵךְ` (בראשית ל:יד); `דּוּדָאִים` reserved. |
| ✓ *ul išmēšunūtī-ma ul išmâ zikir mārīšu* | `לא שמע להם, לא שמע למאמר בניו.` | II 51, 104. |
| ✓ *atkalkum-ma šamaš qurādu* (OB *atkalakkum-ma … qurādum*) | `בך בטחתי, שַׁמַשׁ הגיבור!` | OBS a+11; II 62. *takālu* = `בָּטַח`. |
| ✓ *ūmišam-ma imtanaḫḫara šamaš* (II 123, 133; Gtn) | `יום יום – אל שַׁמַשׁ מתחנן:` | *maḫāru* Gtn "keep appealing to" = `התחנן` (iterative participle). *ūmišam* = `יום יום` (also II 6, OBM b+11). |
| The serpent's lament / the net: *šētka erṣetu rapaštu* / *gišparraka šamû rūqūtu* / *ina šētīka ai ūṣi erû* / *ēpiš lemutti u anzilli* / *mukīl lemutti ana ibrīšu* | ET2 fixes (OBS a+20–24 and II 69–72 in one part) | *šētu* = `רֶשֶׁת` (gated; [equivalent] ↔ `וּפָרַשְׂתִּי אֶת רִשְׁתִּי עָלָיו` (יחזקאל יב:יג)); *gišparru* = `פַּח` (= Sum. *ĝiš-bur₂*, EA `פח`; gated); *erṣetu* = `אֶרֶץ` (also the netherworld: Gilgameš; never `שאול`); *rapšu* = `רָחָב`; *rūqu* = `רָחוֹק`; *lemuttu* / *lumnu* / *lemnu* = `רָעָה` / `רֹעַ` / `רַע` (by form); *anzillu* = `תּוֹעֵבָה` (laments *an-zil*; gated); *mukīl lemutti* "harbourer of evil" = `מחזיק רעה` (*mukillu* = `מַחֲזִיק`, flood). |
| The oath of friendship (II 8–24; OBS 1–4; MA b+1–7) | ET2 fixes | *rūʾūtu* = `עֲמִיתוּת`, *rūʾu* = `עָמִית` (Gilgameš *rūʾu*); *itbāru* = `יְדִיד`; *ibru* = `רֵעַ` (vocalized; Gilgameš); *māmītu* = `שְׁבוּעָה` (wisdom and creation corpora; gated), *tamû* = `נִשְׁבַּע` (gated); *erṣetu* (II 15, "swear by the earth") = `הארץ`; *asakku* = `דבר אסור` (*asakka akālu* `אכל דבר אסור`; Ludlul *asakkiš* = `כדבר אסור`; `חֵרֶם` only in the apparatus, ↔ יהושע ז:א), *anzillu* = `תועבה`, so II 13 = 130 is `תועבת האלים … דבר אסור`; *lemnēti* = `רעות`; *kabtatī tušamriṣ* "you sickened my liver" = `את כבדי החלית` (*kabattu* = `כָּבֵד`, harmonization; gated; *marāṣu* Š = `החלה`). |
| Command / execution: Šamaš's plan II 75–87 ↔ the serpent II 89–92; the eagle's capture II 84–86 ↔ 111, 119–121; the fledgling's warning 47–50 ↔ 100; "searching in front and behind" 107 = 109 (MA c+14–19) | ET3 copies ET2's strings and its own; **the execution in the command's words and order** (guidelines §5.2) | *karšu* = `מֵעַיִם` (Gilgameš; the cognate `כָּרֵשׂ` in a note), *libbu* = `לֵב` / `קֶרֶב` by sense; *kutum libbi* `מכסה הקרביים`; *nakāsu* = `כָּרַת`; *kappu* = `כָּנָף`, *abru* = `אֵבֶר` [cognate; gated; ↔ `עַל אֶבְרָתוֹ` דברים לב:יא, `יַעֲלוּ אֵבֶר כַּנְּשָׁרִים` ישעיהו מ:לא]; *nuballu* (wing, tail?) = ET3 decides (not `כנף`, `אבר`, `נוצה`); *baqāmu* = `מָרַט`; *nadû* = `הִשְׁלִיךְ` (gated) – *ana šuttati nadû* = `השליך אל השוחה` [equivalent ↔ `וַיַּשְׁלִכוּ אֹתוֹ הַבֹּרָה` בראשית לז:כד]; *šuttatu* = `שׁוּחָה` (Gilgameš precedent; gated; ↔ `שׁוּחָה עֲמֻקָּה` משלי כב:יד; `כִּי כָרוּ שׁוּחָה לְנַפְשִׁי` ירמיהו יח:כ); *būrtu* = `בּוֹר` [cognate] (gated); *bubūtu* (hunger) = `רעבון`, *ṣūmu* = `צמא`; *rēmu* D (*rēmannī*) = `רחם` [cognate]; *ērišu* "bridegroom" = `חתן`? – ET3 decides with *nudunnû* (`מַתָּן`, law corpus). |
| Etana's prayer II 134–138 | ET3 fixes | *kubru* "the fattest" = `מִשְׁמַנֵּי` (Gen 27:28's `מִשְׁמַנֵּי` is "from the fat of": ET3 checks the echo, else `חֵלֶב`); *dāmu* = `דָּם`; *kabātu* D = `כִּבֵּד` [cognate] (gated); *eṭemmu* = `אִט`, pl. `אִטִּים` (flood; always vocalized: `אט` reads "slowly"); *palāḫu* = `יָרֵא` (wisdom corpus, of gods); *šāʾiltu* = `שׁוֹאֶלֶת` (Gudea, wisdom; pl. `השואלות`); *maššakku* = `מֻגְמָר` (Ludlul); *ṭubbuḫu* = `טבח` [cognate]. |
| The flights (SB III 30–51, b+25–45; MA i+1–14) | ET4 fixed (§10.6.4): the first flight *ullû* `בֵּרוּ אחד – העלה אותו,` + `"רֵעִי, הִסְתַּכֵּל – הארץ, כְּמוֹ מָה הִיא!` (*naplis … kī mīni*); the second *šušqû* `… – הגביה אותו,` + `"צְפֵה, רֵעִי – הארץ, איך היא!` (*dugul … kī*); the tablet has no *ibrī amur māta mīnâ ibašši* (corrected) | *bēru* = `בֵּרוּ` (Gilgameš; note "double hour, c. 10 km"); *šaqû* D = `הִגְבִּיהַּ` (↔ `אִם תַּגְבִּיהַּ כַּנֶּשֶׁר` עובדיה א:ד [equivalent]); *elû* = `עָלָה`, Š = `העלה`; *šamû* = `שָׁמַיִם` (*šamāmū* poetic: same, noted); *tâmtu* / *tiāmtu* = `יָם` (*tâmtu rapaštu* `הים הרחב`); *mūšaru* "(garden) bed" = `עֲרוּגָה`; *kirû* = `גַּן` (gated: "no garden word without *kirû*"), *nukaribbu* = `גַּנָּן` (gated); *palgu* = `פֶּלֶג` [cognate] (2026-10-23 harmonization, was `תְּעָלָה`); *agappu* / *gappu* "wing, wing feathers" = `אֲגַף` (vocalized; note), *nāṣu* "plumage" = `נוֹצָה` [cognate; ↔ `מָלֵא הַנּוֹצָה` (יחזקאל יז:ג)] (gated); *irtu* "chest" = `חָזֶה`; *idu* "arm, side" = `צַד` / `זְרוֹעַ` by sense; *biltu* = `מַשָּׂא`; *maqātu* "plunge, fall" = `נָפַל`; *šukênu* = `הִשְׁתַּחֲוָה` (Gilgameš); *bābu* = `שַׁעַר` (of the gods) / `פֶּתַח` (of a house); *kunukku* = `חוֹתָם`; *kussû* = `כִּסֵּא`; *nēšu* = `אַרְיֵה` (Sargon), *lābu* = `לָבִיא` [cognate]; *ardatu* = `עלמה` (EA *ki-sikil*). |
| Dreams (MA d+5–6, h+; SB III b+1–16): *šutta amāru* / *naṭālu*; *pašāru* | ET3 / ET4 | *šuttu* = `חֲלוֹם` (flood); *pašāru* = `פָּשַׁר` (never `פָּתַר`; ↔ בראשית מ–מא in the apparatus); *barû* Š (*ušabrânni*) = `הֶרְאָה`; *damqu* (of a dream) = `טוֹב` (gated; *damqu* licenses it). |

### 10.4 Reserved and gated (checked by `kings_tools.py verify ET`; RESERVED_ET, licensed by the eBL lemma)
- **Never** (apparatus only): everything in §5's "never" list (incl. `מִגְדָּל`, `נַעֲשֶׂה לָּנוּ`, `בָּבֶל`, `שִׁנְעָר`,
  `עוֹלָם`, `טֶרֶם`, `אֱלֹהִים`, `מַלְאָךְ`, the root קדש); and for Etana `דּוּדָאִים` (↔ `וַיִּמְצָא דוּדָאִים בַּשָּׂדֶה` (בראשית ל:יד)), `עֲקָרָה`
  (no Akkadian "barren" in these texts; ↔ בראשית יא:ל, כט:לא), `מַמְלָכָה` (↔ `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ` (בראשית י:י)), `פָּקַח` (*petû* = `פָּתַח`
  [cognate]; ↔ בראשית ג:ה, כא:יט), `סֻלָּם` (בראשית כח:יב), `גּוֹזָל` (דברים לב:יא), `חֵרֶם` (יהושע ז).
- **Gated** (only with the lemma): `נָחָשׁ` (*ṣerru*), `נֶשֶׁר` (*erû* I), `אֵבֶר` (*abru*), `נוֹצָה` (*nāṣu*), `בּוֹר`
  (*būrtu*), `שׁוּחָה` (*šuttatu*), `רֶשֶׁת` (*šētu*), `פַּח` (*gišparru*), `גְּבוּל` (*itû*), `תּוֹעֵבָה` (*anzillu*),
  `חֶרְפָּה` (*pištu*), `צְרִיחַ` (*dimtu*), `שְׁבוּעָה` (*māmītu*), `נִשְׁבַּע` (*tamû*), `גַּן` (*kirû*), `גַּנָּן`
  (*nukaribbu*), `רְאֵם` (*rīmu*), `כָּבֵד` / `כִּבֵּד` (*kabattu*, *kabātu*), `שׁוּב` (*târu*), `עָף` (*naprušu*, *šâʾu*),
  `הִשְׁלִיךְ` (*nadû*), `נָהָר` (*nāru*), `קָרָא` (*nabû*, *šasû*), `לְבֵנָה` (*libittu*), `טוֹב` (*ṭābu*, *damqu*),
  `ברך` (*karābu*, *ikribu*); `חֵמָר` / `כֹּפֶר` / `טִיט` as §5.
- **SB II 2 *dimta ītepuš*** "he had built a tower": *dimtu* = `צְרִיחַ` (Judg 9:46, 49; a tower-stronghold) –
  [equivalent] ↔ `וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד); `מִגְדָּל` reserved. Foster italicizes "tower": the
  line is broken and its subject unknown; the note says so. *dimtu* "tear" (II 61 *dimāšu*) = `דִּמְעָה` (a homonym).
- *ṣarbatu* "(Euphrates) poplar" = `צַפְצָפָה` (Modern botany: `צַפְצֶפֶת הַפְּרָת`, *Populus euphratica*), not `עֲרָבָה`
  (Enūma eliš and the Sumerian corpora give `עֲרָבָה` to *ṣēru* / *edin*: a collision); ↔ `צַפְצָפָה שָׂמוֹ` (יחזקאל
  יז:ה – the eagle parable) [equivalent], `עַל עֲרָבִים בְּתוֹכָהּ` (תהלים קלז:ב) in the note. *iṣu* = `עֵץ`.
- Animals (settled by ET2, one Hebrew each, grep-checked): *rīmu* = `רְאֵם` [cognate]; *serrēmu* = `חמור בר`; *armu* = `אַקּוֹ` (pl. `אַקּוֹאִים`); *turāḫu* = `יָעֵל` (= Sum. *taraḫ*, EA, Agade); *ditānu* = `*תְּאוֹ*` (pl. `*תְּאוֹאִים*`; = Sum. *alim*; the `דִּישֹׁן` proposal in a note only); *sappāru* = `*זֶמֶר*`; *ṣabītu* = `צְבִיָּה`; *nimru* = `נָמֵר` [cognate]; *mindinu* = `*בַּרְדְּלָס*`; *būlu* = `בְּהֵמָה` (*būl ṣēri* `בֶּהֱמַת הַשָּׂדֶה`); *nammaštû* = `הַנָּע` (`נָעֵי הקרקע`; never `רֶמֶשׂ`).
- *ṣabātu* = `תָּפַס` (the harmonization: `תָּפַס` in a text that also has *aḫāzu*, OBM a+6); *aḫāzu* (a wife) = `בָּעַל`
  (Gilgameš). *šarrūtu* = `מַלְכוּת`, *šarru* = `מֶלֶךְ`; the insignia: *agû* `כֶּתֶר` (Gilgameš), *kubšu* = `מִצְנֶפֶת`
  (↔ `הָסִיר הַמִּצְנֶפֶת וְהָרִים הָעֲטָרָה` יחזקאל כא:לא [equivalent]), *meānu* (*mīnu*) "crown?" = `עֲטָרָה`,
  *ḫaṭṭu* = `שַׁרְבִיט`, *šibirru* "staff" = `מַקֵּל`? (ET1 decides; not `מַטֶּה`, creation 2's *ĝidru*), *parakku* = `דּוּכָן`
  (2026-10-23 harmonization, was `כֵּס`; EA *barag*; "dais", also a god's sanctuary: II 3 *parakka ša adad* `[דו]כן אֲדַד`). *rēʾû* = `רוֹעֶה` (Gilgameš) [↔
  `אַתָּה תִרְעֶה אֶת עַמִּי` שמואל ב ה:ב]. *urdam šarrūtum ina šamāʾī* = `המלכות – מן השמים ירדה` [equivalent ↔
  Sumerian King List; Gen 10:8–10 in the note]. *libittu* = `לְבֵנָה` [cognate; ↔ בראשית יא:ג] (SB I 5).

### 10.5 The plan of the parts (translator chain; the coordinator merges proposals into §10.6 after each part)
| Part | Lines (eBL labels) | Content |
|---|---|---|
| ET1 | OBM 1–a+13; SB I 1–a+11 (69) | The gods plan the city; no king; kingship comes down from heaven; Ištar seeks a shepherd; Etana and his wife (dream) |
| ET2 | OBS 1–a+24; MA a+1–c+31; SB II 1–72 (179) | The poplar, the oath of friendship, the shared hunt, the eagle's plot, the fledgling's warning, the serpent's lament |
| ET3 | SB II 73–152; OBM b+1–c+9; MA d+1–f+18 (153) | Šamaš's ambush, the eagle in the pit, Etana's prayer for a son, the rescue, the bargain |
| ET4 | SB III 1–c+7; MA g+1–i+18 (184) | The speech of birds, the dreams, the flights to heaven (two ascents), the return, the gates of the gods |

The parts run strictly one at a time (quotas: the user, 2026-10-22; guidelines §5.1): ET2 → ET1 → ET3 → ET4. ET3
follows ET2 (command/execution, the fledgling's warning, the oath's curse); ET4 follows ET3 (the plea, the dreams).

### 10.6 Merged from the parts
#### 10.6.1 Part ET2 (OBS 1–a+24; MA a+1–c+31; SB II 1–72), 2026-10-22
Full list: `3-אגדת-אתנה/project.md` ("Part ET2": proposals). Binding for ET1, ET3, ET4 (copy the strings exactly where the
Akkadian recurs):
- **Revised in §10.3/§10.4:** *bâru* = `לָכַד`; *nērebu* / *nērebtu* = `מָבוֹא` / `מְבוֹאָה`; the animals; **the road words
  harmonized to Gilgameš** (*urḫu* `דֶּרֶךְ`, *ḫarrānu* `אוֹרַח`: OBS.1 changed; the formula `לך בדרך, חלוף את ההר,`).
- **Fixed strings:** the oath `לפני שַׁמַשׁ הגיבור – שבועה נשבעו שניהם.` / `אחרי ששבועה נשבעו שניהם,`; the friendship
  `"לְכָה, נעשה עֲמִיתוּת …` / `נהיה ידידים – אני ואתה!"`; II.12–13 `(אם) רַע אַתָּה – את כְּבֵדוֹ תַּחֲלֶה,` / `תועבת
  האלים – דבר אסור תאכל.` (for II.129–130: `רַע אַתָּה – ואת כְּבֵדִי הֶחֱלֵיתָ!` / `תועבת האלים – דבר אסור אכלת!`); the
  curses (`הנשק המשוטט – עליו יִישַׁר!`; `הפח, שבועת שַׁמַשׁ – יתהפכו עליו, וילכדוהו!` / `… עליך, וילכדוך!`); the hunt
  (`X אוכל, סר – אוכלים בניו.`; `… – הנשר לוכד,`); growth `בני הנשר גדלו, צמחו.`; the plot `הנשר – לבו רעה חשב,` / `חשב
  לבו רעה.` / `לאכול את אפרוחי עמיתו – את פניו שָׂם.`; the eagle's boast `אֶעֱלֶה – ובשמים אֵשֵׁב,` (↔ ישעיהו יד:יג);
  the fledgling `האפרוח הקטן, יתיר־התבונה,` / `אל הנשר, אביו – דבר דיבר:` / `"אל תאכל, אבי! רשת שַׁמַשׁ תלכדך,`;
  `לא שמע להם, לא שמע למאמר בניו.`; `ירד ואכל את בני הנחש.`; the lament (`"בך בטחתי, שַׁמַשׁ הגיבור!` … `עושה רעה, אַנְזוּ –
  מחזיק רעה לרֵעֵהוּ!"`). For ET3 (from MA c+5–c+25 ≈ II 98–117): the second warning and the ambush, in the ET2 table
  "for ET3".
- **Words:** *rūʾūtu* `עֲמִיתוּת`, *rūʾu* `עָמִית`, *itbāru* `יְדִיד`, *râʾu* Gt `הִתְרוֹעֵעַ`; *nīšu* (oath) `חַיִּים`;
  *nabalkutu* of a trap `הִתְהַפֵּךְ עַל` (crossing: `חָצָה`); *ṣillu* `צֵל`, *appu* (of a tree) `צַמֶּרֶת`, *išdu* `יְסוֹד`;
  *watmu* `אֶפְרוֹחַ`, *līdānu* `יֶלֶד`; *kapādu* `חָשַׁב`; *lemuttu* / *lumnu* / *lemnu* `רָעָה` / `רֹעַ` / `רַע`;
  *takālu* `בָּטַח`, *adāru* `חָרַד`; *lū* + *tīde* `אָכֵן יָדַעְתָּ`; *qerbetu* `נָוֶה`; *ukultu* `אָכְלָה`; *šiāḫu* `צָמַח`;
  *ṣupru* `צִפֹּרֶן`; *tarbuʾu* `אָבָק`; *līliātu* `עֶרֶב`; *magāru* `אָבָה`; *gallû* `שֵׁד־גַּלָּה` (netherworld corpus).
- **Left for the end-of-run harmonization** (other corpora): *šarāku* = `הֶעֱנִיק` (= Sum. *rig₇*, EA 614) collides
  with Gilgameš's *qiāšu* = `הֶעֱנִיק`; Enki and the World Order's boat name `אקו־האפסו` (*taraḫ*) against *taraḫ* =
  *turāḫu* = `יָעֵל` (EA, Agade, Etana) and *armu* = `אַקּוֹ`.
- **Tool:** `tools/ebl_fetch.py` fixed (a reconstruction line opening with a logogram, `%sb`, was glued to the previous
  line: SB II 25); `Etana-SB-II` regenerated.

#### 10.6.2 Part ET1 (OBM 1–a+13; SB I 1–a+11), 2026-10-22
Full list: `3-אגדת-אתנה/project.md` ("Part ET1"). Binding for ET3–ET4:
- **Formula:** *X ana šâšū-ma ana Y izzakaršu* (MA *ana šuāšu … izakkaršu*) = `X אליו, אל Y, דיבר:` (fem. `דיברה`;
  I.a+2; for SB III b+15, b+26, b+32, b+36 `הנשר אליו, אל אֵתָנָה, דיבר:`; MA e+14, i+1, i+5, i+12); checked by FORMULAS.
  MA h+13 *… iqabbi* = `X אליו, אל Y, אומר:`.
- **Fixed strings:** the prologue OBM 1–10 = SB I 8–17 (identical Hebrew where the Akkadian is identical);
  `[המל]כות – מן השמים ירדה.` (OBM 14); `לפני אָנוּ, בשמים – שׂוּמִים.`; `שרביט, עטרה, מצנפת ומקל־רועים`.
- **Words:** *eṣēru* = `יָצַר` (not `צָר`, guidelines §6.7: unvocalized `את העיר צרו` reads "besieged"; `יצר` in the
  planning sense, ישעיהו לז:כו); *uššu* = `אֻשִּׁים` [cognate, Aram. `אֻשַּׁיָּא`, עזרא ה:טז]; *libittu* `לְבֵנָה`;
  *šibirru* = `מקל־רועים` (= Sum. *šibir*, EWO 436); *ḫaṭṭu* `שרביט`; *kubšu* `מצנפת`, *meānu* `עטרה`; *parakku* `דוכן`
  (pl. `הדוכנים`; 2026-10-23 harmonization, was `כֵּס`, `הַכֵּסִים`); *ṣapāru* `*משובץ*`; *malāku* G `יעץ`, Gt `נמלך`; *mitluku* `נִמְלָךְ`; *isinnu* `חג`; *šiāmu*
  `גזר`; *rēʾû* `רוֹעֶה`; *itinnu* `בַּנַּאי`; *ḫiāṭu* `בחן`; *ina ūmīšū-ma* `ביום ההוא` (Gilgameš); *ina šiātim*
  `בָּהּ`; *eṭemmu* `אִט` (`אִטּוֹ`); *šutta šubrû* `חלום הֶרְאָה`; *marḫītu* `רַעְיָה`; *dadmū* `יישובים`; *ummānu*
  `הָמוֹן`; *dapnu* `עריץ`.
- **Left for the end-of-run harmonization:** *ḫaṭṭu* `שרביט` here and in EA vs `שבט` in Enūma eliš IV 29 and LH
  (proposal: `שרביט` for *ḫaṭṭu* everywhere, `שבט` only for *šabbiṭu*); *parakku* `כֵּס` vs `דוכן` (Enūma eliš) [both settled 2026-10-23: `שרביט`, `דוכן`]; Sum.
  *aga* `עטרת` (EWO 264) vs *agû* `כתר` (Gilgameš); *ṣapāru* `*משובץ*` vs Gilgameš VIII *raʾzu*; *ḫiāṭu* `בחן` vs
  *barû* `בוחן` (Enūma eliš); *ina ūmīšu* `ביום ההוא` vs `בעת ההיא` (Enūma eliš, Adapa); *barû* Š and *kullumu* both
  `הראה` (one Hebrew for two verbs, as set in §10.3).

#### 10.6.3 Part ET3 (SB II 73–152; OBM b+1–c+9; MA d+1–f+18), 2026-10-22
Full list: `3-אגדת-אתנה/project.md` ("Part ET3"). Binding for ET4:
- **Revised:** *kutum libbi* = `מִכְסֵה הַלֵּב` (not `מכסה הקרביים`: `קֶרֶב` is *qerbu*'s cognate; ↔ the caul fat of
  ויקרא ג:ג); *kubru* = `עֹבִי` (Gilgameš); *šubtu* = `מִשְׁכָּן` (`מַאֲרָב` is Gilgameš's *ušbu*); *maṣû* Št = `חָדַר`
  (II 83, 110; MA c+22 changed from `הגיע?` by the coordinator: `הגיע` is *kašādu*'s). II.133 keeps the Akkadian word
  order (`אֵתָנָה – יום יום – אל שַׁמַשׁ מתחנן:`; the formula check now finds the formula anywhere in the line).
- **Fixed strings and words:** see the ET3 proposals (the plea unchanged; the dream formulas; Etana's epithet `מלך
  הבהמה`; the bargain; the counting pattern of the eagle's attempts). *nuballu* = `*מְנִיפוֹת*`; *šērtu* = `עֹנֶשׁ`
  (Atra-ḫasīs); *ērišu* = `חָתָן`, *nudunnû* = `מַתָּן` (↔ בראשית לד:יב); *sanāqu* = `בִּקֵּר`; *šuʾu* = `שֶׂה`;
  *etēqu* Š = `הֶעֱבִיר`; *mā* = `הֵן`; *šaṭāṭu* = `שִׁסַּע`; *sādu* = `מִגְרָשׁ`; *nāʾeru* = `שׁוֹאֵג` (Gilgameš);
  *unnīnu* `תחנונים`; *zikru* "fame" `זֵכֶר`; *petû* (eyes) `פָּתַח` (`פָּקַח` reserved); `אֶתְּנָה` "I will give"
  vocalized (the pun on `אֵתָנָה` noted).
- **Tool:** the eagle gate (`נשר`) is licensed by the transliteration too (OBM b+9 *er[îm* has no eBL lemma).
- **Left for the end-of-run harmonization:** *šērtu* `עֹנֶשׁ` (Atra-ḫasīs) vs `אַשְׁמָה` (Gilgameš, Ludlul); *ērišu*
  `חתן` vs Gilgameš *ḫāmiru* `חתן`; *nāʾeru* `שואג` (Gilgameš) vs `צורח` (Atra-ḫasīs); `אחו` used for two source words
  elsewhere.

#### 10.6.4 Part ET4 (SB III 1–c+7; MA g+1–i+18), 2026-10-22
Full list: `3-אגדת-אתנה/project.md` ("Part ET4"). For a later Akkadian text of this corpus:
- **Fixed strings:** the flights (above, §10.3); the drops *nasāku* `… – זרק אותו,` / `הנשר נפל – וקיבל אותו בכנפיו.`;
  command → execution `על צדיי – שִׂים את זרועותיך!` / `על צדדיו – שָׂם את זרועותיו.` (and the chest, the wings); the
  plea `"רֵעִי, תנה לי את עשב הלידה!` (III 12); the dream ↔ its fulfilment in the same words (`בְּקֶרֶב? שער אָנוּ,
  אֶנְלִיל וְאֵאָה – צעדנו;` ↔ `… – צעדו;`; `השתחווינו זה עם זה – אני ואתה.` ↔ `הנשר ואֵתָנָה – זה עם זה – השתחוו.`).
  Repeated lines: commands end with `!`, executions with `.`.
- **Words:** *târu ana* `נֶהְפַּךְ לְ־` (Gilgameš); *kappu* of a man `כנפיים` (`כַּף` is *rittu*'s; footnote);
  *ina lēt* `אֵצֶל` (`צַד` is *idu*'s); *tēqītu* `סִיכָה` (`משחה` is *piššatu*'s); *maḫāru* Š `*הִקְבִּיל*`; *kiššatu*
  `כֹּל`; *buginnu* `שֹׁקֶת`; *galātu* `הִתְפַּלֵּץ`; *qarānu* `עָרַם`; *palgu* `פֶּלֶג` (2026-10-23 harmonization, was `תְּעָלָה`); *šamû ša anim* `שְׁמֵי אָנוּ`;
  *naš(š)û* "carry" `נָשָׂא` [cognate] (↔ שמות יט:ד).
- **Left for the end-of-run harmonization:** *palgu* `תעלה` vs Enūma eliš's cognate `פֶּלֶג` (proposal: `פֶּלֶג`
  everywhere) [settled 2026-10-23: `פֶּלֶג`]; *buginnu* `שוקת` vs Gilgameš *mašqû* `שוקת` (proposal: *mašqû* `מַשְׁקֶה`) [settled 2026-10-23: *mašqû* `מַשְׁקֶה`]; *galātu* `התפלץ` vs Gudea's
  Sum. *ḫuluḫ* `נבהל`; *qarānu* `ערם` beside EA's Sum. *dub* `ערם`.
- **Tool:** `בֵּרוּ` added to the name traps (unvocalized `ברו` reads "they chose / purify").


2026-10-23 harmonization, Etana (`harmonization--2026-10-23.md` rows 5, 7): *parakku* → `דּוּכָן` (as Enūma eliš, Gilgameš, Maqlû, Ludlul, the Šamaš Hymn, Gudea and Enmerkar; `כִּסֵּא` stays *kussû*'s), *palgu* → `פֶּלֶג` [cognate]; changed lines: I.15 `[הַכֵּסִים?]` → `[הדוכנים?]`, OBM.9 `הַכֵּסִים` → `הדוכנים` (the two lines stay identical), I.23 `את כֵּס השמים` → `את דוכן השמים`, II.3 `[כֵּ]ס אֲדַד` → `[דו]כן אֲדַד`, II.4 `[ב]צל הכס ההוא` → `[ב]צל הדוכן ההוא` (and the II 1–6 heading `הַדּוּכָן שֶׁל אֲדַד`); MA.i+10 `[כ]מי תעלה!` → `[כ]מי פלג!`. No other *parakku* in Etana. Four Bible quotations of §10.3–§10.4 corrected to the repo's text (Ezek 12:13, 17:3; Gen 30:14, 10:10).

2026-10-23 harmonization, Etana, batch C (`harmonization--2026-10-23.md` row 19, revised): *bâʾu* "pass along, go" → `צָעַד` (`עָבַר` is reserved for its cognate *ebēru*; `חָלַף` is *etēqu*'s, II `חלף את ההר`); changed lines: III.b+3 and b+5 `– עברנו;` → `– צעדנו;`, b+40 `– עברו;` → `– צעדו;`, b+42 `– עברו];` → `– צעדו];` (b+5 and b+42 are not in the table: the same verb; the dream and its fulfilment stay in the same words), with the b+3 footnote, the Tablet III introduction, the ET4 fixed strings (§10.6.4) and the project tables. Collision: *akāšu* is also `צעד` (OBS a+3 `הנחש צעד הֵנָּה`), recorded, not changed.

## Changelog
- 2026-10-23: the 2026-10-23 harmonization applied to Etana (end of §10); §10.3–§10.4 quotations corrected.
- 2026-10-23: the 2026-10-23 harmonization applied to Enmerkar (end of §9.6).
- 2026-10-21: written before the first part, from the temple, lament, creation, flood, Gilgameš, law and wisdom
  corpora and a reading of both transliterations (the formula survey of §3; the echo-control list of §4).
- 2026-10-21: §9.1–§9.5 merged after each part (EA1–EA4, SB); one quotation corrected (Judg 11:12 `מַה`).
- 2026-10-21: §9.6 the lead's cross-corpus harmonization applied (*ra-gaba* `צִיר`, *šu-ur₂-men* `שׁוּרְבִּין`, *en₃-du*
  `זִמְרָה` in §3; the rest confirmed); §0.4 and §7 marked settled.
- 2026-10-21: §10 Etana (project 3) – names, grammar, formulas, reserved and gated words, the plan of the parts; fixed
  by the Round 3 run 2 coordinator before the first part.
