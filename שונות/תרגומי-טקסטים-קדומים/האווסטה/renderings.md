# Renderings – the Avestan corpus (`האווסטה/`)

> Binding for every text of this corpus (guidelines §6.6). Fixed by the coordinator of Round 7 run 2 (2026-11-09)
> before the first line; the translators propose changes in their reports (merged into §11, numbered by part).
> **The cousin corpus binds:** the renderings of `../הוודה-והאווסטה/` (Vedic and the Vīdēvdād) hold for every word
> they already cover and for every Vedic cognate (guidelines §6.7, the cousin-language rule of 2026-11-02: one Hebrew
> for a cognate pair). Where this corpus needs a Hebrew the cousin corpus has not chosen yet, the choice is made here
> and listed in §12 for the lead (Round 7 run 1 translates the Rigveda's Book 7 at the same time).
> Checked by `avesta_tools.py verify` (names §3, gates §7, formulas §8; `gates` prints them; `selftest` runs §10).

## 1. The texts and the bases
| KEY | Text | Base | Labels |
|---|---|---|---|
| Y28 … Y34 | the Ahunavaitī Gāthā (7 hymns, 3-line stanzas, 7 + 9 syllables) | CAB, the XML's verse lines (`sources/CAB/old_avestan.tsv`) | Geldner's chapter.stanza + the line letter (`28.1a`) |
| Y43 … Y46 | the Uštavaitī (5-line stanzas, 4 + 7) | CAB | as above |
| Y47 … Y50 | the Spəṇtā.mainyu (4-line stanzas, 4 + 7) | CAB | as above |
| Y51 | the Vohu.xšaϑrā (3-line stanzas, 7 + 7) | CAB | as above |
| Y53 | the Vahištōišti (4-line stanzas, one of 5 lines; 7 + 5 // 7 + 5 + 7) | CAB | as above |
| YH | the Yasna Haptaŋhāiti, Y 35.2–41.6 (rhythmic prose; CAB's units = lines) | CAB | `35.2a` |
| PR | the four prayers: Ahuna Vairya (27.13), Ašəm Vohū (27.14), Yeŋ́hē hātąm (27.15c–e), Airiiə̄mā išiiō (54.1) | TITUS (Geldner's text, Humbach's lines) for 27.13–15; CAB for 54.1 | `27.13a`; 27.15 keeps TITUS's letters c–e (its a–b are the Young Avestan formula before the prayer) |

Dropped from the base by `convert` (and listed in `corpus.md`): the Middle Persian headings (`gāhān būn`), the rubrics
(`zōt ud rāspīg`), the liturgical repetitions (a stanza written out two to four times; YH's units written out again as
one), the Young Avestan preface Y 28.0 and the closing formulas after each hymn (`ahiiāsąm hāitīm yazamaide`).

## 2. Hebrew conventions
### 2.1 The line
- **One verse line = one Hebrew line** (YH: one CAB unit = one line). The Gāthic sentence often runs over two and three
  lines and its word order is free: keep each line's own words in it, even where the Hebrew sentence must then break
  mid-phrase; never move a word to another line.
- Keep the **caesura** where the Hebrew allows it (the Ahunavaitī line falls 4 + 3 // 4 + 5; mark nothing, just let the
  Hebrew fall in two).
- **Vocatives** stand between commas: `מַזְדָּה`, `אֲהוּרָה`. The Gāthic poet addresses Mazdā in the 2nd plural
  (`xšmā`, `vō` – "you", Mazdā with the Aməṣ̌a Spəṇtas) and in the 2nd singular (`ϑβā`, `tōi`): the Hebrew keeps the
  number (`אֶתְכֶם` / `אוֹתְךָ`), and the apparatus says who the plural is.
- **Particles:** `at̰` `וְ־` / `אָז` (narrative or emphatic: by sense; not translated where it only opens the stanza –
  the פירוק says so); `zī` `כִּי`; `nōit̰` `לֹא`; `mā` (prohibitive) `אַל`; `yaϑā … aϑā` `כְּשֵׁם שֶׁ… כָּךְ`; `hiiat̰`
  `כַּאֲשֶׁר` / `אֲשֶׁר` / `שֶׁ־` by sense; `kat̰` (question) `הַאִם` / `מָה`; `kuϑrā` `לְאָן`; `kaϑā` `אֵיךְ`;
  `-cā … -cā` `וְ־ … וְ־`; `vā … vā` `אוֹ … אוֹ`; `ā` (preverb or postposition) by sense; `ərəš` `נְכוֹנָה`.
- **Speech:** the Gāthās mark no quotation; the Hebrew opens a quoted speech with a colon where the sense requires it.

### 2.2 Avestan in the Hebrew apparatus
In the apparatus, Avestan words are written in Latin transliteration (CAB's spelling) in italics or backticks, never in
Hebrew letters (the names excepted). The פירוק gives for every word: the form, the lemma (CAB / Bartholomae), its
grammar (case, number; tense-aspect, mood, voice, person), and the Hebrew in parentheses and quotation marks:
`` `yāsā` – yāh- / yās- "ask" (pres. 1sg. subj.?) ("מְבַקֵּשׁ") ``. The lexmap reads exactly this format.

### 2.3 Transcription of names (for names not in §3)
The cousin corpus's Avestan rules (`../הוודה-והאווסטה/renderings.md` §2.3): ϑ `ת`, δ `ד`, γ `ג`, x `ח`, xᵛ `חְוּ`,
š / ṣ̌ / š́ `ש`, ž `ז`, ŋ / ŋ́ `נג`, β `ב`, f `פ`, z `ז`, c `צ׳`, j `ג׳`; final -a / -ā `־ָה`; ə / ə̄ by the nearest
vowel (usually `ֶ`). **Vocalize every name at its first occurrence in each file** (checked).

## 3. Names (binding; checked by script: where the source regex matches the folded line, the Hebrew must be in it)
The regex is matched on the **folded** source (`avesta_tools.py` `fold`: lower case, no diacritics, ϑ = th, ə = e,
ŋ = ng, š = s, x́ = x; spaces around words). Plurals and case forms: write the name as the table has it (a plural
needs `[היתר שם: …]` in the entry when the Hebrew cannot keep the singular string).

### 3.1 The table
| Source name | folded-source regex | Hebrew | ★ | note |
|---|---|---|---|---|
| Mazdā | ` mazd(?!aiiasn\|ayasn\|atha)` | `מַזְדָּה` |  | "Wise (one)": the god's name, alone or with Ahura, in either order (the Gāthās prefer *mazdā ahura*, the YH *ahura mazdā*); the Hebrew keeps the source's order |
| Ahura | ` ahur(?!a?angh)` | `אֲהוּרָה` |  | "Lord" (= Vedic *ásura*, the cousin corpus's `אַסוּרָה` + note); the plural *ahurā̊ŋhō* "the Lords" is a common noun (`הָאֲהוּרִים`, §5) |
| Zaraϑuštra | ` zarathustr` | `זָרָתוּשְׁטְרָה` |  | (Vd 2's form) |
| Spitāma | ` spitam` | `סְפִּיתָמָה` |  | Zaraϑuštra's clan; *spitamā̊ŋhō* "the Spitāmas" (`[היתר שם]` for `הַסְּפִּיתָמִים`) |
| Vīštāspa | ` vistasp` | `וִישְׁטָסְפָּה` |  | the *kauui* who received the teaching |
| Frašaoštra | ` frasaostr` | `פְרַשָׁאוֹשְׁטְרָה` |  | of the Hvōgva clan |
| Jāmāspa | ` jamasp` | `גָ׳אמָאסְפָּה` |  | of the Hvōgva clan |
| Hvōgva | ` hvogv\| huuogv` | `הְווֹגְוָה` |  | the clan of Frašaoštra and Jāmāspa |
| Maidiiōi.māŋha | ` maidiioi` | `מַיְדְיוֹי־מָאנְגְהָה` |  | Zaraϑuštra's cousin (Y 51.19) |
| Pourucistā | ` pourucist` | `פּוֹרוּצִ׳יסְטָה` |  | Zaraϑuštra's youngest daughter (Y 53.3) |
| Haēcat̰.aspa | ` haecat ?asp` | `הַאֵצַ׳ת־אַסְפָּה` |  | Zaraϑuštra's clan ancestor; *haēcat̰.aspānā* "of the H. line" |
| Yima | ` yim(?:a\|o\|ai\|ahe\|e\|asci\|ascit)\b` | `יִימָה` | ★ | (Vd 2's form; = Vedic Yama) Y 32.8 |
| Vīuuaŋhan | ` viuuangh` | `וִיוַנְגְהְוַנְט` |  | Yima's father (Vd 2: `בן וִיוַנְגְהְוַנְט`); = Vedic Vivasvant |
| Bəṇduua | ` bendu` | `בֶּנְדְוָה` |  | an opponent (Y 49.1–2) |
| Grəhma | ` grehm` | `גְּרֶהְמָה` |  | an opponent (Y 32.12–14) |
| Friiāna | ` friian` | `פְרִיָאנָה` |  | the Turanian clan that befriended the teaching (Y 46.12) |
| Tūra | ` tura(?:hiia\|he)?\b` | `טוּרָה` |  | the Turanians (Y 46.12) |
| Airiiaman (the god) | ` airiiema ` | `אַאִירְיָמָן` |  | the god of the alliance in the prayer Y 54.1 (= Vedic Aryaman); the common noun *airiiaman* is `הַחֲבוּרָה` (§5.4) |

### 3.2 Common nouns that are names elsewhere
The Aməṣ̌a Spəṇtas (Vohu Manah, Aša, Xšaϑra, Ārmaiti, Haurvatāt, Amərətāt) and Spəṇta Mainyu are **common nouns with
the article** (`הַסֵּדֶר`, `הַמַּחֲשָׁבָה הַטּוֹבָה` …), never transliterated: in the Gāthās they are at once Mazdā's
qualities and persons he speaks with, and the Hebrew keeps both by grammar (a vocative, a verb of speech, a gift) as the
source does. The apparatus calls them by their Avestan names. *kauui*, *karapan*, *usig* are titles of men (§5.4).

## 4. Grammar mapping (Old Avestan → Hebrew)
- **Present** → Hebrew present / participle; **aorist** (injunctive) → past or present by context – the Gāthic
  injunctive is timeless and the Hebrew may use the present; **perfect** → past (result); **imperfect** → past.
- **Subjunctive** → future (`אֶשְׁאַל`, `יִהְיֶה`) or purpose (`כְּדֵי שֶׁ־`); **optative** → wish (`יְהִי`, `הַלְוַאי`,
  `נָא`); **imperative** → imperative (vocalize where it could be read as a past: `עֲנֵה`); the Gāthic 1sg. subjunctive
  of resolve (*pərəsā* "let me ask") → `אֶשְׁאַל` / `אֲנִי שׁוֹאֵל` by the refrain's fixed form (F9).
- **Middle** → reflexive or "for oneself" only where it carries meaning (*vərəṇtē* "they choose for themselves"
  `בּוֹחֲרִים לָהֶם`).
- **Instrumental** of the Aməṣ̌a Spəṇtas (*aṣ̌ā*, *vohū manaŋhā*) → `בְּ־` ("with / through"): `בַּסֵּדֶר`,
  `בַּמַּחֲשָׁבָה הַטּוֹבָה` – one preposition for the whole corpus (the "comitative or instrumental" debate stays in
  the apparatus); **dative** → `לְ־`; **ablative** with *hacā* → `מִן` / `לְפִי` ("in accordance with": *aṣ̌āt̰ hacā*
  = `לְפִי הַסֵּדֶר`, F12); **genitive** → construct or `שֶׁל`; **locative** → `בְּ־`.
- **Dual** (*ubā ahū*, the two spirits *yə̄mā*) → `שְׁנֵי` / `שְׁתֵּי` + plural, or the Hebrew dual.

## 5. Key terms (one source lemma = one Hebrew word; tags in the apparatus)
### 5.0 Echo control in a corpus that met Israel late
The Gāthās (c. 1500–1000 BCE, eastern Iran) and the YH had no contact with Israel; the Persian empire's contact with
Judah (Cyrus, Isa 44–45; Ezra; Esther) came centuries later, through Young Avestan and Old Persian religion. Hence:
parallels are **shared motifs** (said so in words), and the apparatus may say where later Jewish ideas (two spirits,
judgement at death, a final renovation) have been compared with Iranian ones – as the scholars' comparison, never as a
source. The Hebrew of the lines must not manufacture them: the words of the Bible's and later Judaism's key ideas are
reserved (§7). **The one real lexical contact is the Persian loanword `דָּת`** (< Old Persian *dāta* = Avestan
*dāta* "law, what is established"), Esther and Ezra's word: it is kept for *dāta* and tagged [cognate].

### 5.1 The Aməṣ̌a Spəṇtas and the two spirits
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *aša* / *aṣ̌a* | `סֵדֶר` (gated) | `צֶדֶק`, `אֱמֶת`, `יֹשֶׁר` | the cousin corpus: *r̥tá* = Av. *aša* `סֵדֶר` [cognate across Indo-Iranian]; "truth-order, the right course of things" |
| *aṣ̌a vahišta* | `הַסֵּדֶר הַטּוֹב בְּיוֹתֵר` (F2) |  |  |
| *aṣ̌auuan* | `נֶאֱמַן הַסֵּדֶר` (pl. `נֶאֶמְנֵי הַסֵּדֶר`) | `צַדִּיק` | Vd 2 binds; "one who has Aša, truthful" |
| *druj* | `שֶׁקֶר` (gated) | `כָּזָב`, `רֶשַׁע` | "the Lie, deceit" (Vedic *druh*: §12); the opposite of *aša* |
| *drəguuaṇt* | `בַּעַל הַשֶּׁקֶר` (pl. `בַּעֲלֵי הַשֶּׁקֶר`) | `רָשָׁע` | "one who has the Lie" (the mirror of *aṣ̌auuan*) |
| *vohu manah* | `הַמַּחֲשָׁבָה הַטּוֹבָה` (F1) | `הַמַּחְשָׁבָה הַטּוֹבָה` (spelling) | *manah* = Vedic *mánas* `מַחֲשָׁבָה` (the cousin corpus); *vohu* `טוֹב` |
| *manah* (alone) | `מַחֲשָׁבָה` |  | (also *manahiia* "mental": `שֶׁבַּמַּחֲשָׁבָה`) |
| *aka manah*, *acišta manah* | `הַמַּחֲשָׁבָה הָרָעָה`, `הַמַּחֲשָׁבָה הָרָעָה בְּיוֹתֵר` |  | *aka* `רַע`, *acišta* `הָרַע בְּיוֹתֵר` |
| *xšaϑra* | `מַלְכוּת` | `שִׁלְטוֹן` | Vd 2 binds; *xšaϑra vairiia* (Y 51.1) `הַמַּלְכוּת הַנִּבְחֶרֶת` |
| *ārmaiti* | `מְסִירוּת` | `תֹּם`, `עֲנָוָה`, `אֱמוּנָה` | "right-mindedness, devotion" (*arə-* "fit" + *mati*); Vedic *arámati* (§12) |
| *hauruuatāt* | `שְׁלֵמוּת` |  | "wholeness, health" (Vedic *sarvátāt*: §12) |
| *amərətatāt* / *amərətāt* | `אַלְמָוֶת` |  | "deathlessness" (Vedic *amr̥tatvá*: §12); the מות gate licenses it |
| *mainiiu* | `רוּחַ` (gated) |  | the cousin corpus (Vd 2; Vedic *manyú* keeps `כַּעַס`: a recorded split) |
| *spəṇta* / *spə̄ništa* | `נָדִיב` / `הַנָּדִיב בְּיוֹתֵר` (gated) | the root קדש | Vd 2 binds (`הָרוּחַ הַנְּדִיבָה בְּיוֹתֵר`); "beneficent, life-giving, strong" |
| *spəṇta mainiiu* | `הָרוּחַ הַנְּדִיבָה` (F3) | `רוּחַ הַקֹּדֶשׁ` | Ps 51:13 / Isa 63:10 in the apparatus only |
| *aŋra* (mainiiu) | `מַזִּיק` / `הָרוּחַ הַמַּזִּיקָה` (F4) | `שָׂטָן` | Vd 2 binds |
| *yə̄mā* (Y 30.3) | `תְּאוֹמִים` |  | the two primal spirits are twins (Gen 25:24 is not a parallel: no tag) |
| *vahišta* / *vahiiah* | `הַטּוֹב בְּיוֹתֵר` / `טוֹב יוֹתֵר` (gated, as *vohu*) |  | the superlative of *vohu* (Vedic *vásiṣṭha*: the name of Book 7's poet clan – a note) |
| *vohu*, *vaŋhu* | `טוֹב` (gated) |  | the cousin corpus |
| *hu-* (prefix) | `טוֹב־` / an adjective by sense |  | *humata hūxta huuaršta* (F5) |

### 5.2 God, worship, the word
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *daēuua* | `אֵל` / `אֵלִים` ★ (always vocalized) | `שֵׁד`, `שֵׁדִים`, `אֱלִילִים` | the cousin corpus: *devá* = `אֵל` – the same word that is "god" in India is the rejected god in the Gāthās; the Hebrew keeps that scandal visible (a note at its first occurrence per file) |
| *ahurā̊ŋhō* (pl.) | `הָאֲהוּרִים` |  | "the Lords" (Mazdā with his companions) |
| *yaz-* / *yasna* | `זָבַח` / `זֶבַח` (gated) | `עָבַד`, `פֻּלְחָן`, `סָגַד` | the cousin corpus: Vedic √*yaj* / *yajñá* = Av. *yaz-* / *yasna* `זבח` (Vd 2: *māzdaiiasni* `זוֹבְחֵי מַזְדָּה`); "worship (with offerings)": `זוֹבְחִים אָנוּ לַ־X` (*yazamaidē* + acc.) |
| *yesńiia* | `רָאוּי לַזֶּבַח` |  | as Vd 2's *yazata* `רְאוּיֵי־הַזֶּבַח` |
| *nəmah* | `קִידָה` | `הִשְׁתַּחֲוָיָה`, `תְּפִלָּה` | "homage, bowing" (√*nam* "bend"; Vedic *námas*: §12) |
| *stu-*, *staōta*, *stūt* | `שִׁבֵּחַ`, `שֶׁבַח`, `מְשַׁבֵּחַ` |  | *staōtar* `מְשַׁבֵּחַ` |
| *garah* | `שִׁירָה` | `שִׁיר` | "song of praise, welcome"; *garō dəmāna* `בֵּית הַשִּׁירָה` (F7) |
| *vahma* | `תְּהִלָּה` |  | "praise, adoration" |
| *mąϑra* | `מַנְתְּרָה` (transliterated, vocalized at first occurrence) | `תּוֹרָה`, `לַחַשׁ` | "the formula of thought, the sacred utterance" (= Vedic *mántra*: §12); *mąϑran* `בַּעַל הַמַּנְתְּרָה` |
| *uxδa* | `מִלָּה` (pl. `מִלִּים`) |  | "utterance" (Vedic *ukthá* `שִׁירֵי־הַשֶּׁבַח`, RV 10.72.1c: a split by sense, §12) |
| *vacah* | `דִּבּוּר` |  | *manah – vacah – š́iiaōϑna* `מַחֲשָׁבָה – דִּבּוּר – מַעֲשֶׂה` |
| *š́iiaōϑna* | `מַעֲשֶׂה` |  |  |
| *humata*, *hūxta*, *huuaršta* | `מַחֲשָׁבָה טוֹבָה`, `דִּבּוּר טוֹב`, `מַעֲשֶׂה טוֹב` (F5) |  | the triad |
| *ustānazasta* | `בְּיָדַיִם פְּרוּשׂוֹת` |  | Y 28.1, 50.8 (Exod 9:29, 1 Kgs 8:22: [equivalent], a shared gesture) |
| *zaotar*, *zaōϑra* | `מְנַסֵּךְ`, `נֶסֶךְ` |  | √*zu-* = Vedic √*hu* `נָסַךְ` (the cousin corpus) |
| *ratu* | `מַכְרִיעַ` (a person) / `הַכְרָעָה` (a decision) | `שׁוֹפֵט`, `רַב` | "judge, authoritative model; judgement" (Ahuna Vairya) |
| *ahu* (2) "lord" | `אָדוֹן` |  | the Ahuna Vairya's *ahū*; never the name Ahura |
| *xratu* | `תְּבוּנָה` |  | "will, intellect, resolve" (Vedic *krátu*: §12) |
| *cisti* | `בִּינָה` |  |  |
| *daēnā* | `הַשְׁקָפָה` | `דָּת` (reserved for *dāta*) | "vision, inner view, conscience, the self that sees" (√*dī* "see"); a split from Vd 2's `דָּת` (Young Avestan "religion"), for the lead (§12) |
| *dāta* | `דָּת` [cognate] (gated, always vocalized) |  | "law, what is established": the source of the Hebrew loan (Esth 1:8, 13; Ezra 7:12) |
| *sə̄ṇgha* | `הוֹרָאָה` | `תּוֹרָה` | "pronouncement, teaching" |
| *sāsnā* | `לִמּוּד` |  | "instruction" |
| *dā-* (Vedic *dhā*, "set, establish, create") | `שָׂם` / `הֶעֱמִיד` | the root ברא, the root יצר | *dātar* = `מַעֲמִיד` (the cousin corpus, 2026-11-02) |
| *dā-* (Vedic *dā*, "give") | `נָתַן` |  | the two roots are homonyms in Avestan: tell them apart in the פירוק |
| *taš-*, *tašan* | `חִשֵּׁל`, `מְחַשֵּׁל` | `יָצַר` | = Vedic √*takṣ* `חִשֵּׁל` (the cousin corpus); *gə̄uš tašan* `מְחַשֵּׁל הַפָּרָה` |
| *var-* (choose), *vairiia* | `בָּחַר`, `נִבְחָר` |  | Y 30.2, 30.6; *ahū vairiiō* `אָדוֹן נִבְחָר` |
| *pərəs-* | `שָׁאַל` |  | F9 |
| *vaēd-* / *vīduuā̊* | `יָדַע` / `הַיּוֹדֵעַ` |  |  |

### 5.3 The world, the soul, the end
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *ahu* (1) "existence" | `קִיּוּם` | `עוֹלָם`, `חַיִּים` | Vd 2 binds (Av. *ahu-* `הַקִּיּוּם`); *ubā ahū* `שְׁנֵי הַקִּיּוּמִים`; *ahu astuuaṇt* `הַקִּיּוּם בַּעַל הָעֲצָמוֹת` (F8); *ahu manahiia* `הַקִּיּוּם שֶׁבַּמַּחֲשָׁבָה` |
| *astuuaṇt* | `בַּעַל עֲצָמוֹת` |  | Vd 2 binds |
| *gaēϑā* | `בַּעֲלֵי הַחַיִּים` | the root יצר | Vd 2 binds |
| *gaiia*, *jiiātu* | `חַיִּים` (gated) |  |  |
| *uštāna* | `חִיּוּת` | `נִשְׁמַת חַיִּים` | "life-breath, vitality" (as Vedic *ásu* `חִיּוּת`) |
| *uruuan* | `נֶפֶשׁ` (gated) | `נְשָׁמָה` | "soul" |
| *gav-* | `פָּרָה` (gated) |  | "the cow" (Y 29); *gə̄uš uruuan* `נֶפֶשׁ הַפָּרָה`; Vd 2's collective `בָּקָר` stays for the herds |
| *pasu*, *staōra* | `צֹאן`, `בְּהֵמָה גַּסָּה` |  | Vd 2 binds |
| *vīra* | `אַנְשֵׁי חַיִל` |  | "men, warriors" (*pasu vīra* `צֹאן וְאַנְשֵׁי חַיִל`; Vedic *vīrá*: §12) |
| *nar*, *nāirī* | `גֶּבֶר`, `אִשָּׁה` |  | the cousin corpus |
| *maš́iia* | `אָדָם` (gated) |  | Vd 2 binds |
| *zam* | `אֶרֶץ` |  | Vd 2 binds |
| *asman* | `שָׁמַיִם` |  |  |
| *āp*, *uruuarā* | `מַיִם`, `צְמָחִים` |  |  |
| *raōcah* | `אוֹר` (gated) |  | Y 44.5 (Gen 1:3–5, Isa 45:7: [equivalent] / shared motif) |
| *təmah* | `חֹשֶׁךְ` (gated) |  | the cousin corpus (*támas*) |
| *huuarə* / *xᵛarə* | `שֶׁמֶשׁ` |  |  |
| *ātar* | `אֵשׁ` (gated) |  | Mazdā's fire, the fire of the ordeal |
| *aiiah xšusta* | `מַתֶּכֶת מוּתֶּכֶת` |  | the molten metal of the ordeal (Y 51.9) |
| *mīžda* | `שָׂכָר` (gated) |  | Vedic *mīḍhá* (§12) |
| *cinuuat̰ pərətu* | `גֶּשֶׁר הַבּוֹרֵר` (F6) | `הַמַּבְדִּיל` (Gen 1) | "the bridge of the one who sorts" |
| *drūjō dəmāna* | `בֵּית הַשֶּׁקֶר` (F7b) | `שְׁאוֹל`, `גֵּיהִנֹּם` |  |
| *garō dəmāna* | `בֵּית הַשִּׁירָה` (F7) | `גַּן עֵדֶן` |  |
| *urvaēsa* | `מִפְנֶה` | `קֵץ` | "the turning point" (of existence) |
| *fraša* (*fərašəm ahūm kar-*) | `מְפֹאָר` (`לַעֲשׂוֹת אֶת הַקִּיּוּם מְפֹאָר`) | `חָדָשׁ` | "brilliant, wonderful" (the later *frašō.kərəti*: a note) |
| *saōšiiaṇt* | `הָעָתִיד לְהוֹעִיל` (pl. `הָעֲתִידִים לְהוֹעִיל`) | `מוֹשִׁיעַ`, `מָשִׁיחַ`, `גּוֹאֵל` | "the one who will bring benefit" (*sū-* "benefit, strengthen") – a future participle; the later saviour is a note |
| *sauua* | `תּוֹעֶלֶת` |  |  |
| *uštā* | `רָצוֹן` / `כִּרְצוֹן` | `אַשְׁרֵי` (never) | "wish, at will" (Ašəm Vohū, Y 43.1): `אַשְׁרֵי` would make Ps 1:1 |
| *rafəδra* | `סַעַד` |  | "support, help" |
| *yauuā* / *vīspāi yauuē* | `עַד` / `לְכָל הָעִדָּן` | `לְעוֹלָם` | "duration; for all time" |
| *darəga* | `אָרֹךְ` |  | *darəgō.jīti* `אֹרֶךְ חַיִּים` |

### 5.4 People and the social world
| Source | Hebrew | Not | Why |
|---|---|---|---|
| *xᵛaētu* | `הַקְּרוֹבִים` |  | the family / clan |
| *vərəzəna* | `הַקְּהִלָּה` |  | the work community |
| *airiiaman* | `הַחֲבוּרָה` |  | the alliance of hospitality (Y 32.1, 33.3; the god of Y 54.1: §3.1) |
| *dax́iiu* | `מְחוֹז` |  | "land, people" |
| *nmāna*, *dəmāna* | `בַּיִת` |  |  |
| *kauui* (pl. *kauuaiiō*, *kəuuīnō*) | `קַוִי` (pl. `קַוִיִּים`), vocalized at first occurrence | `מֶלֶךְ`, `מְשׁוֹרֵר` | the title of princes (hostile, and Vīštāspa); = Vedic *kaví* "poet-seer" (§12) |
| *karapan* | `כַּרַפַּן` (pl. `כַּרַפַּנִים`) |  | "mumbler": a priest of the old cult |
| *usig* | `אוּשִׁיג׳` (pl. `אוּשִׁיגִ׳ים`) |  | a priestly class (Vedic *uśíj*) |
| *drigu* | `עָנִי` | `אֶבְיוֹן` | "the poor (who follow the truth)" (Ahuna Vairya) |
| *vāstar*, *vāstriia*, *fšuiiaṇt* | `רוֹעֶה`, `רוֹעֶה`, `מְגַדֵּל צֹאן` |  | *vāstra* `מִרְעֶה` |
| *dūta* | `שָׁלִיחַ` | `מַלְאָךְ` |  |
| *xšnu-* | `רִצָּה` / `שִׂמַּח` by sense |  |  |
| *zaoša* | `חֵפֶץ` |  | the cousin corpus |

## 6. (no LXX layer)

## 7. Reserved and gated words, and traps (checked by `avesta_tools.py verify`; `gates` prints the regexes)
### 7.1 Never in a line
`אֱלֹהִים`; the roots ברא and יצר (Gen 1–2; Isa 45:7 stays in the apparatus); `תְּהוֹם`, `תֹּהוּ`, `בֹּהוּ`,
`רָקִיעַ`, `רֵאשִׁית`; the flood and sea-monster words; `שְׁאוֹל`, `גֵּיהִנֹּם`, `עֵדֶן`, `פַּרְדֵּס`; `מָשִׁיחַ`,
`מוֹשִׁיעַ`, `גּוֹאֵל`, `גְּאֻלָּה`; `תְּחִיָּה`; `שָׂטָן`; `מַלְאָךְ`; the roots קדש, צדק, רשע, ארר, ברך (with a
`[היתר שער]` for `בֶּרֶךְ` "knee"); `כָּבוֹד`; `קֵץ`; `עֹלָה`, `קָרְבָּן`, `מִזְבֵּחַ`, `נִיחוֹחַ`; `נְשָׁמָה`; `תּוֹרָה`;
`צֶלֶם`, `דְּמוּת`; the root שבת; `נָח`; `עוֹלָם`; `אַשְׁרֵי`.

### 7.2 Only for their source counterpart
`רוּחַ` (*mainiiu*, the wind), `חֹשֶׁךְ` (*təmah*), `אוֹר` (*raōcah* and its kin), `זֶרַע` (*taoxman*, *ciϑra*),
`טוֹב` (*vohu*, *vahiiah*, *vahišta*, *hu-*), `אֱמֶת` (*haiϑiia*), `שֶׁקֶר` (*druj*), `סֵדֶר` (*aša*), `נָדִיב`
(*spəṇta*), `גֶּשֶׁר` (*pərətu*), `דָּת` (*dāta*), the root זבח (*yaz-*, *yasna*, *yesńiia*), `נֶפֶשׁ` (*uruuan*),
`אֵשׁ` (*ātar*), `שָׂכָר` (*mīžda*), `פָּרָה` / `בָּקָר` (*gav* and the cattle words), `חַי` / `חַיִּים` (*jiiā-*,
*gaiia*, *uštāna*, *gaēϑā*), the root מות (*mar-*, *amərətāt*).

### 7.3 Always vocalized (traps)
`אֵל` / `אֵלִים` (*daēuua*: "to", "these"), `יִימָה` (Yima), `דָּת`, and `עַד` where it renders *yauua* and could be
read as the preposition.

## 8. Formulas (fixed; checked by script: | F | folded-source regex | Hebrew regex | lines |)
The Hebrew regex is matched on the bracket-free, unvocalized, punctuation-free line.

| F | folded-source regex | Hebrew regex | lines |
|---|---|---|---|
| F1 | `\b(?:vohu\|vangheus\|vanheus)\b (?:manangha\|manangho\|mano\|manah\|manahi\|manangham)\b` | `מחשבה הטובה` | *vohu manah* adjacent (any case): `הַמַּחֲשָׁבָה הַטּוֹבָה` with its prepositions |
| F2 | `\bas(?:a\|em\|ahe\|ahiia\|at\|ai\|aat\|ahe\|ai)\b (?:vahist\w*)` | `סדר הטוב ביותר` | *aṣ̌a vahišta* adjacent |
| F3 | `\bspent\w* mainii\w*\|\bmainii\w* spent\w*` | `רוח\S* \S*נדיב` | *spəṇta mainiiu* adjacent |
| F4 | `\bangr\w* mainii\w*\|\bmainii\w* angr\w*` | `רוח\S* \S*מזיק` | *aŋra mainiiu* adjacent |
| F5 | `\bhumata\w* \S* ?huxta\w*` | `מחשב\S* \S*טוב\S* \S*דיבור\S* \S*טוב` | the triad *humata hūxta huuaršta* |
| F6 | `\bcinuuat\w* \S*pere\w*\|\bpere\w* cinuuat` | `גשר\S* הבורר` | *cinuuat̰ pərətu* |
| F7 | `\bgaro demana\w*\|\bdemana\w* garo` | `בית השירה` | *garō dəmāna* |
| F7b | `\bdrujo demana\w*` | `בית השקר` | *drūjō dəmāna* |
| F8 | `\bahu\w* astuuat\w*\|\bastuuat\w* \S* ?ahu` | `קיומ?\S*(?: \S+){0,3} בעלי? העצמות` | *ahu astuuaṇt* |
| F9 | `\btat thba peresa eres moi vaoca ahura\b` | `זאת אני שואל אותך אמור לי נכונה אהורה` | the refrain of Y 44.1–19 (`זֹאת אֲנִי שׁוֹאֵל אוֹתְךָ – אֱמוֹר לִי נְכוֹנָה, אֲהוּרָה:`) |
| F10 | `\bahmai yahmai usta kahmaicit\b` | `לו לכל מי ש` | Y 43.1a (the Uštavaitī's name line): `כרצון לו – לכל מי ש(הוא) – כרצון לכל אחד!` |
| F12 | `\basat haca\b` | `לפי הסדר` | *aṣ̌āt̰ hacā* "in accordance with Aša" |

## 9. Repeated lines
The Gāthās repeat lines and half-lines across hymns (`data` lists every identical or near-identical line with its
Hebrew): the later copy copies the first copy's Hebrew byte for byte and changes exactly what the Avestan changes.
YH 35.2 = 41.7 (the latter is outside the scope).

## 10. Self-test lines (`avesta_tools.py selftest`: | KEY label | expect | Hebrew |)
| KEY label | expect | Hebrew |
|---|---|---|
| Y28 28.1a | ok | אֶת זֹאת אֲנִי מְבַקֵּשׁ בְּקִידָה, בְּיָדַיִם פְּרוּשׂוֹת, אֶת סַעֲדָהּ |
| Y28 28.1a | err | אֶת זֹאת אֲנִי מְבַקֵּשׁ בִּתְפִלָּה, וְהָרוּחַ הַקְּדוֹשָׁה |
| Y28 28.2a | ok | אֲנִי, הַבָּא אֲלֵיכֶם, מַזְדָּה אֲהוּרָה, בַּמַּחֲשָׁבָה הַטּוֹבָה |
| Y28 28.2a | err | אֲנִי, הַבָּא אֲלֵיכֶם, מַזְדָּה אֲהוּרָה, בְּטוֹב הַלֵּב |
| PR 27.14a | ok | הַסֵּדֶר טוֹב, הַטּוֹב בְּיוֹתֵר הוּא |
| PR 27.14b | err | אַשְׁרֵי, אַשְׁרֵי לוֹ |
| Y28 28.1b | err | שֶׁל הָרוּחַ, מַזְדָּה, הָרִאשׁוֹנָה – הַנְּדִיבָה, בְּצֶדֶק – כָּל הַמַּעֲשִׂים |

## 11. Merged from the translators (numbered by part; the coordinator)
### 11.1 PR, Y 28–30 (T1, part 1; merged 2026-11-09)
- **Fixed strings:** Ahuna Vairya *ahū vairiiō* `אדון נבחר`, *ratuš* `מכריע`, *aṣ̌āt̰cīt̰ hacā* `לפי הסדר עצמו`
  (Y 29.6b copies: `לא נמצא אדון אחד, וגם לא מכריע לפי הסדר עצמו`); the Ašəm Vohū `הסדר טוב, הטוב ביותר הוא; /
  כרצון הוא, כרצון – לו, / אשר לסדר הטוב ביותר – סדר.`; imperatives vocalized.
- **New rows (accepted):** *aṣ̌i* `גְּמוּל` (apart from *mīžda* `שָׂכָר`); *hant-* / *hātąm* `הַקַּיָּמִים` (the root
  of *ahu* `קיום`); *rafnah* `עֶזְרָה`, *auuah* `סִיּוּעַ` (*rafəδra* keeps `סַעַד`); *ϑβars-* / *ϑβōrəštar* `חָצַב` /
  `הַחוֹצֵב` (*taš-* keeps `חִשֵּׁל`: Y 29.1a `למי חצבתם אותי? מי חישל אותי?`); *vi-ci-* `הִבְחִין`, *vīciϑa*
  `הַבְחָנָה`, *vīcira* `מַבְחִין` (*var-* keeps `בָּחַר`); *kāma* `חֵשֶׁק` (the cousin corpus); *vid-* "find" `מָצָא`;
  *iš́iia* `נִכְסָף`; *aēšma* `זַעַם`; *xrafstra* `טורף`; *sraōša* `הַקְשָׁבָה`; *frī-* `פִּיֵּס`; *xšnu-* `רִצָּה`;
  *āiiapta* `הֶשֵּׂג`, *āpana* `הַשָּׂגָה`; *uruuāta* `תַּקָּנָה`; *xšā-* `מָלַךְ`; *mə̄ṇ … dā-* `שָׂם על לב`;
  *ā.dəbaōman* `תעתוע`; *maga* `שותפות?`; *ādāna* `פרעון`; *kaēnā* `נקמה`; *hudāh* / *duždāh* `טובי־הנתינה` /
  `רעי־הנתינה`; *pərəs-* middle `נועץ` (Vd 2).
- **Settled by the coordinator:** *tanū* `גּוּף` (the cousin corpus's Vedic *tanū́*: the cognate keeps it); *kəhrp*
  `צוּרָה` (the gate note corrected). *srauuah* split by sense (`הדברים` 28.10c "words" / `בשם הטוב` 30.10c "fame"),
  recorded. *fraša* stays `מפואר` (CAB's "lush" in the apparatus). *ahura* as a title (Y 29.2c) `אֲהוּרָה` + note.
- **Tool fixes after part 1:** the Ahura trap removed (the name check vocalizes the first occurrence); the `שקר` gate
  licensed by *drəgu-*; the `רוח` gate by *mańiuu-*; the Mazdā regex skips *mazdāϑā*; F1 reads the folded
  *vaŋhə̄uš* (`vangheus`); F8 allows the dual and words between; formulas are matched without stripping the regex.


### 11.2 Y 31–34 (T1, part 2; merged 2026-11-09)
- **New rows (accepted):** *dāmi* `מְכוֹנֵן` (apart from *dātar* `מַעֲמִיד`); *ərəši* `חוֹזֶה` (the cousin corpus's
  *ŕ̥ṣi*); *zrazdā* `בעל אמונה` (cognate of Vedic *śraddhā́* `אמונה`); *dāta* `הַדָּתוֹת` [cognate] (Esth 1:13, Ezra
  7:12), its homographs *dātā* "give!" / "given" told apart; *miϑah* / *miϑahuuacah* `כוזב` / `בעל הדיבור הכוזב`;
  *ərəzu* / *razišta* `ישר` / `הישר ביותר`; *mərəd-* `שיבש`; *dab-* `רימה`; *van-* `הביס` (*zā-* `ניצח`, *tar-* `גבר
  על`); *vaxš-* `צמח` / `הצמיח`; *frād-* `קידם` (*frādat̰.gaēϑa* `המקדם את בעלי החיים`); *fradaxš-* / *fradaxštar*
  `הורה` / `מורה`; *ϑrā-* `הגן`; *sā-* `חתך`; *pā-* `שמר`; *maraka* `כליה`; *xᵛarəϑa* `מזון`; *rāiti* `מתת`;
  *dāϑra* `מתנה`; *draōnah* `חלק`; *asti* `אורח`; *uruuaϑa* `ידיד`; *arədra* `דבק`; *tarōmaiti* `בוז`; *asrušti*
  `אי־ההקשבה`; *frasā* `שאלה`; *ham.paršti* `היוועצות`; *daxšta* `אות`; *miiazda* `סעודת הזבח`; *būmī* `אֲדָמָה`;
  *šōiϑra* `יישוב`; *vīs* `שבט`; *huxratu* / *hudānu* / *hucisti* `טוב התבונה` / `טוב השכל` / `טוב הבינה`; *maṇtu*
  `יועץ`; *dūti* `שליחות`; *maēϑā* always uncertain (`*רעועה*`).
- **Recorded splits (by sense):** *hazah* `אלימות` (29.1b) / `עוצמה` (33.12c); *ciϑra* "evident" `גלוי` / "seed"
  `זרע`; *aṣ̌i* "eye" (32.10b) is a homonym of *aṣ̌i* `גמול`; *vaēda* `מוצא` / `ממצא`; *xᵛīti* `הצלחה` / *fradaϑa*
  `לקדם`.
- **Tool fix after part 2:** the `טוב` gate licensed by *vax́ii-* (the comparative).

### 11.3 Y 43–44 (T1, part 3a; merged 2026-11-09)
- **Fixed strings:** F10 Y 43.1a `כרצון לו – לכל מי ש(הוא) – כרצון לכל אחד!` (Y 44.16e echoes it); F9 written plene
  `אֱמוֹר` (the vocalized `אֱמֹר` strips to `אמר`); the Y 43 refrain (43.5/7/9/11/13/15) `נדיב חשבתי אותך, מַזְדָּה
  אֲהוּרָה,` / `כאשר בא אליי במחשבה הטובה,`.
- **New rows (accepted):** *dāmi* "founding" `הכינון` (the agent noun keeps `מכונן`); *vərəϑrəm.jan* `הורג החוסם`
  (the cousin corpus's *vr̥tra* `החוסם`); *huuāpah* `אומן טוב`; *nabah* `שחקים`; *vāta* `רוח` (the wind);
  *xᵛafna* `שינה` (30.3a "dreams": a split by sense); *taxma* `גיבור`; *friia* `רע`; *uzəma* `מוקיר`; *ząϑa*
  `הולדה`; *irixta* `אחרית`; *spāda* `צבא`; *vananā* `ניצחון`; *zrazdāiti* `אמונה`; *tušnā.maiti* `ההרהור השקט`;
  *daxšāra* `אות`; *ādišti* `ציווי`; *āskəti* `קרבה`; *yaōš dā-* `טיהר`; *hātąm* fem. `הקיימות`.

## 12. Cross-corpus choices for the lead (Avestan words whose Vedic cognate the cousin corpus has not rendered yet)
Each pair below gets one Hebrew under the cousin-language rule; this corpus's choice is given, for the lead to align
with Round 7 run 1 (the Rigveda, Book 7) at the finalization:
*aša* / *r̥tá* `סֵדֶר` (already one); *daēuua* / *devá* `אֵל` (already one); *mainiiu* `רוּחַ` / *manyú* `כַּעַס`
(a recorded split, kept); *druj* / *druh* `שֶׁקֶר`; *haiϑiia* / *satyá* `אֱמֶת` (already one); *ārmaiti* / *arámati*
`מְסִירוּת`; *hauruuatāt* / *sarvátāt* `שְׁלֵמוּת`; *amərətatāt* / *amr̥tatvá* `אַלְמָוֶת`; *xratu* / *krátu*
`תְּבוּנָה`; *mąϑra* / *mántra* `מַנְתְּרָה`; *nəmah* / *námas* `קִידָה`; *mīžda* / *mīḍhá* `שָׂכָר`; *kauui* / *kaví*
`קַוִי`; *uxδa* / *ukthá* `מִלָּה` (the cousin corpus: `שִׁירֵי־הַשֶּׁבַח`, a split by sense); *vīra* / *vīrá*
`אַנְשֵׁי חַיִל`; *garah* / *gír* `שִׁירָה`; *vahišta* / *vásiṣṭha*; *daēnā* `הַשְׁקָפָה` against Vd 2's `דָּת` (the
loanword rule gives `דָּת` to *dāta*); *ahura* / *ásura*; *zaotar* / *hótar* `מְנַסֵּךְ`; *usig* / *uśíj*; Airiiaman
/ Aryaman; *ərəši* / *ŕ̥ṣi* `חוֹזֶה` and *zrazdā* / *śraddhā́* `אמונה` (both follow the cousin corpus);
*miiazda* / *miyédha* `סעודת הזבח`. The translators add to this list (§11).
