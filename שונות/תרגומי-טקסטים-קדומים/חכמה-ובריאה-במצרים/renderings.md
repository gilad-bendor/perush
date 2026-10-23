# The Egyptian corpus – shared renderings (`חכמה-ובריאה-במצרים/`)

Binding for every text of the corpus (guidelines §6.6). Set by the coordinator of Round 4 run 3 on 2026-10-23,
**before the first line**, from the base texts themselves (AED-TEI) and the earlier corpora's precedents; translators
propose changes in their `project.md` ("Proposals"), and the coordinator merges them into §10 (numbered by translator).
Checked by `egypt_tools.py verify` (§5–§7) and `egypt_tools.py selftest` (§9).

The ruling principle (guidelines §6.4), restated for a non-Semitic language: Egyptian is not Semitic, so **cognates are
rare**. The real lexical contacts with Hebrew are **loanwords** (Egyptian words that entered Hebrew: `תֵּבָה`, `יְאֹר`,
`סוּף`, `אָחוּ`, `אֵיפָה`, `שֵׁשׁ`, `חַרְטֹם`, `פַּרְעֹה`, `טַבַּעַת`, `חוֹתָם`, `שִׁטָּה`, `קֶסֶת`, `קוֹף`), a few shared Afroasiatic
roots, and **calques and borrowed sayings** (Amenemope ↔ Proverbs 22:17–24:22). So: (1) choose the Hebrew by meaning,
as if the Bible did not exist; (2) a loanword is used **only** for its Egyptian source word, and tagged [cognate];
(3) the vocabulary of the Bible passages we compare (Gen 1–2, 6–9; Prov 22–24; Lev 19; Deut 19, 25, 27) is reserved
(§5), so that the apparatus, not the translation, shows the parallels.

## 1. The texts (KEYs; `egypt_tools.py units`)

| KEY | Text | Base (AED-TEI file, or our transcription) | Lines (labels) | Project |
|---|---|---|---|---|
| AM | The Instruction of Amenemope, pBM EA 10474 recto | `AED-TEI/Amenemope--pBM-EA-10474/` (TLA ed. P. Dils) | 551 (page.line `1.1`–`28.1`) | `1-מוסר-אמנמופה/` |
| MK | The Instruction for Merikare, E 130–138 | `AED-TEI/Merikare--pPetersburg-1116A/` (verso) | 9 (`E130`–`E138`) | `2-בריאה-במצרים/` |
| MT | The Memphite Theology (the Shabaka Stone, BM EA 498) | `El-Hawary-2010--…/memphite-transliteration.tsv` (our transcription of El Hawary 2010) | El Hawary's lines (`1a`…`64`) | `2-בריאה-במצרים/` |
| PT571 | Pyramid Text 571 (Pepi I, west wall) | `AED-TEI/PT-571--West-wall/` | 4 (`P/V/W.34`–`37`) | `2-בריאה-במצרים/` |
| PT486 | Pyramid Text 486 (Pepi I, antechamber west wall) | `AED-TEI/PT-486--West-wall/` | 3 (`P/A/W.58`–`60`) | `2-בריאה-במצרים/` |
| PT527 | Pyramid Text 527 (Merenre) | `AED-TEI/PT-527--West-wall/` | 4 (`M/C.med/W.84`–`87`) | `2-בריאה-במצרים/` |
| PT600 | Pyramid Text 600 (Pepi II) | `AED-TEI/PT-600--East-wall/` | 7 (`N/F/E.inf.17`–`23`) | `2-בריאה-במצרים/` |
| HC | The Book of the Heavenly Cow, KV 17 (Seti I) | `AED-TEI/Heavenly-Cow--KV17-Seti-I/` | 95 (columns `1`–`95`) | `3-ספר-הפרה-השמימית/` |

The other witnesses (`egypt_tools.py data KEY --wit`): five fragmentary Amenemope copies (tablets and ostraca, 21st
dynasty – **older** than the papyrus: their variants go in the apparatus); Merikare pMoscow 4658 and pCarlsberg VI;
the Heavenly Cow on Tutankhamun's first shrine (the oldest copy, c. 1325 BCE) and in Ramesses VI's tomb (KV 9).

**Amenemope's `/`:** where the TLA analysed one written word in two ways, AED puts a `<gap/>` between the two
analyses; the corpus tool prints it as ` / ` (no text is lost there). Translate the word once.

## 2. The transliteration convention (the Hebrew apparatus)

### 2.1 The base text's marks (AED / Leiden)
`[x]` lost, restored by the editor · `(x)` not written (a defective writing), supplied · `⟨x⟩` omitted by the scribe,
supplied · `{x}` written by the scribe, superfluous · `⸢x⸣` damaged · `x?` reading uncertain · `[…]` lost · `,` and `.`
inside a word: the TLA's segmentation (`ḥꜣ,t` "front", `.pl` plural, `.du` dual, `.t` feminine) · `=f` suffix pronoun ·
`i̯` a weak radical not written · `ṱ` a feminine `t` before a suffix · `~` a group-writing (syllabic) spelling of a
foreign or Late word. The Hebrew follows the brackets: `[ ]` in the source = `[ ]` in the Hebrew; `( )` / `⟨ ⟩` of the
source are **not** carried into the Hebrew (the word is read whole); `{ }` is left out of the Hebrew.

### 2.2 Egyptian words and names in Hebrew letters
For names (and for an Egyptian word quoted in a Hebrew note): `ꜣ` → א · `j`, `y` → י (word-initial `j` → א) · `ꜥ` → ע ·
`w` → ו · `b` → ב · `p` → פ · `f` → פ · `m` → מ · `n` → נ · `r` → ר · `h` → ה · `ḥ` → ח · `ḫ` → ח · `ẖ` → ח · `z`, `s` → ס ·
`š` → שׁ · `q` → ק · `k` → כ · `g` → ג · `t` → ת · `ṯ` → צ׳ · `d` → ד · `ḏ` → ג׳. Vowels: the conventional Egyptological
ones (the script writes none), or the Greek / Coptic form where it is the familiar one. **Familiar names keep their
familiar Hebrew form** (§3: `אוֹסִירִיס`, `אִיסִיס`, `חוֹרוּס`). In running notes write the transliteration in Latin
letters in backticks (`` `snk n mw` ``), as the dossier did.

## 3. Names

### 3.1 Gods (never assimilated to a biblical name; guidelines §6.4)
| Egyptian | Hebrew (ours) | Notes |
|---|---|---|
| Rꜥ (Re) | `רַא` ★ | **not** `רַע` (= "evil"; Amenemope speaks of evil on every page); first occurrence per file: note "רע/רא, אל השמש". Always vocalized. |
| Jtmw / Tm (Atum) | `אָתוּם` | "the complete / not-yet-being one" (Jtm ~ tm "complete; not be") |
| Ḫprj (Khepri) | `חֶפְּרִי` | ~ ḫpr "come into being" (the pun is noted) |
| Ptḥ (Ptah) | `פְּתָח` ★ | unvocalized `פתח` = "open"; always vocalized |
| Tꜣ-ṯnn (Tatenen) | `תָּא־טֶנֶן` | "the risen land" |
| Nwn (Nun) | `נוּן` ★ | the primeval water (Gen 1:2 `תְּהוֹם` in the apparatus only); `נוּן` is also Joshua's father: always vocalized |
| Šw (Shu) | `שׁוּ` ★ | the air; Tfnwt (Tefnut) `תֶּפְנוּת` |
| Gb (Geb) | `גֶּבּ` ★ | unvocalized `גב` = "back" |
| Nwt (Nut) | `נוּת` ★ | the sky goddess |
| Wsjr (Osiris) | `אוֹסִירִיס` | Wn-nfr (Onnophris) `וֶנֶּפֶר` |
| Ꜣst (Isis) | `אִיסִיס` | |
| Ḥrw (Horus) | `חוֹרוּס` | |
| Stš (Seth) | `סֵת` ★ | **never** `שֵׁת` (Gen 4:25) |
| Nb.t-ḥw.t (Nephthys) | `נֶפְתִּיס` | |
| Ḥw.t-Ḥr (Hathor) | `חַתְחוֹר` | "house of Horus" |
| Sḫm.t (Sekhmet) | `סֶחְמֶת` | "the powerful one" |
| Ḏḥwtj (Thoth) | `תְּחוּת` | Hebrew usage; the Egyptian `ג׳חוּתִי` in a note |
| Ḫnmw (Khnum) | `חְנוּם` | the potter god |
| Jmn (Amun) | `אָמוֹן` | the Bible's form for the same god (Jer 46:25 `אָמוֹן מִנֹּא`; Nah 3:8 `נֹא אָמוֹן`): [equivalent] noted; the king of Judah `אָמוֹן` is another matter |
| Mnw (Min) | `מִין` ★ | unvocalized `מין` = "kind" (Gen 1:21 `לְמִינֵהֶם`): always vocalized |
| Jtn (the Aten, the sun disk; Amenemope's `pꜣ Jdn`) | `אָטוֹן` | Hebrew usage; not `אתון` ("she-ass") |
| Šꜣy and Rnn.t (Fate and Fortune) | `שַׁאי` ★ and `רֶנֶנֶת` | `שי` = "gift" |
| Mꜣꜥ.t (Maat, the goddess) | `מַאַת` ★ | the concept: `אֱמֶת` (§4.1) |
| Ḥkꜣ (Heka, magic) | `חֶקָא` (the god) / `קְסָמִים` (the power; the dossier's E135) | |
| Ꜥꜣpp (Apophis) | `אַפּוֹפִּיס` | the Egyptian `עַאפֶּפּ` in a note |
| Nb-r-ḏr ("the Lord to the Limit", "the Lord of All") | `אֲדוֹן הַכֹּל` | an epithet, translated |
| Ḥꜥpj (the Inundation) | `חַעְפִּי` | |
| Wꜣḏ.t / Nḫb.t (the Two Ladies) | `וָאגֶ׳ת` / `נֶחְבֶּת` | |
| Ḥw / Sjꜣ (Utterance / Perception) | `חוּ` / `סִיא` | (Memphite Theology, the Cow) |

### 3.2 Places and peoples
| Egyptian | Hebrew | Notes |
|---|---|---|
| Km.t ("the Black Land") | `כֵּמֶת` | note at first occurrence: Egypt = `מִצְרַיִם`; Egypt's own name is kept |
| Tꜣ-mrj | `תָּא־מֶרִי` | another name of Egypt |
| Jwnw (Heliopolis) | `אוֹן` ★ | the Bible's form (Gen 41:45): [equivalent]; unvocalized `און` = "strength, iniquity" |
| Mn-nfr / Jnb-ḥḏ (Memphis) | `מֹף` ★ | the Bible's form (Hos 9:6; `נֹף` Isa 19:13); "the White Wall" `הַחוֹמָה הַלְּבָנָה` |
| Wꜣs.t (Thebes) / Njw.t "the City" | `וָאסֶת` / `נֹא` | `נֹא` (Nah 3:8) only for Njw.t |
| Jpw (Akhmim, Panopolis) | `אִפּוּ` | Amenemope's home |
| Tnj (This) / Ṯꜣ-wr (the Thinite nome) | `תְּנִי` / `צָ׳א־וֶר` | |
| ꜣbḏw (Abydos) | `אַבְּגֶ׳ו` | the Greek `אַבִּידוֹס` in a note |
| Snw.t (Senut) | `סֶנוּת` | |
| Ḫmnw (Hermopolis) | `חֶמְנוּ` | |
| Dwꜣ.t (the netherworld) | `הַדּוּאַת` | transliterated; `שְׁאוֹל` never |

### 3.3 Persons (Amenemope's prologue)
Jmn-m-jp.t (Amenemope) `אֲמֶנֶמוֹפֶּה` ("Amun is in Opet"; Hebrew forms in use: אמנמופה, אמנמאופה) · Kꜣ-nḫt (his
father Kanakht) `כָּא־נַחְט` · Ḥr-m-mꜣꜥ-ḫrw (his son Hor-em-maakheru) `חוֹר־אֶם־מָאעַ־חֶרוּ` · Tꜣ-wsr.t (the son's
mother) `תָּא־וֹסֶרֶת` · Sn.w (the copyist Senu, 28.1) `סֶנוּ` · Merikare `מֶרִיכָּרֶע` (the dossier's form, kept: here
`ע` is the Egyptian `ꜥ` of Rꜥ, inside the name) · Shabaka `שַׁבַּכָּה` · Pepi `פֶּפִּי` · Merenre `מֶרֶנְרַא` · Seti `סֵתִי`.

## 3a. Grammar mapping (Egyptian → Hebrew)
Draft from the form, not from the German. The TLA's morphology (`data`) names the form; check it.

**Middle Egyptian** (Merikare, the Cow, the Pyramid Texts; Amenemope's archaizing passages):
- `sḏm.n=f` (past / perfect) → Hebrew past (`עָשָׂה`). In a relative form ("which he made") → `אֲשֶׁר עָשָׂה`.
- `sḏm=f` (the "aorist" / prospective / circumstantial – the TLA labels it `suffixConjugation`) → by context:
  general present (`זוֹרֵחַ הוּא`), future or wish (`יִחְיֶה`, `יְהִי`), purpose after a main clause (`כְּדֵי שֶׁ…` or a bare
  future: `עָשָׂה רוּחַ – יִחְיוּ`). Say in the parse which reading you chose.
- `sḏm.jn=f`, `ꜥḥꜥ.n sḏm.n=f`, `wn.jn=f ḥr sḏm` (narrative "then") → `אָז` / `וְאָז` + past; **no vav-consecutive**.
- the stative ("old perfective", TLA `pseudoParticiple`) → adjective, participle or nominal clause, keeping its
  resultative force (`שׁוֹכֵב הוּא`, `זָקֵן`; "his bones are silver" `עַצְמוֹתָיו כֶּסֶף`).
- `jw=f ḥr sḏm` / `sw ḥr sḏm` (progressive) → participle (`וְהוּא שׁוֹמֵעַ`).
- participles → `הַ…` / `אֲשֶׁר …`; the passive `sḏm.tw=f` → passive or impersonal (`נַעֲשָׂה`, `עָשׂוּ`).
- `n sḏm.t=f` "he has **not yet** heard" / "before he heard" → `טֶרֶם` (§6.5: the Pyramid Texts' "not yet").
- `n sḏm=f` "he did not hear / cannot hear" and `n sḏm.n=f` "he cannot hear / has not heard": parse them; never guess.
- `nn` + infinitive / noun → `אֵין`; `jmi̯=k sḏm` / `m sḏm` (prohibitive) → `אַל` + future.
- the non-verbal sentences (`X pw`, "it is X"; `jnk X` "I am X") → nominal sentences (`צְלָמָיו הֵם`, `אֲנִי X`).
- `jn X sḏm` (cleft: "it is X who hears") → `X הוּא הַשּׁוֹמֵעַ`.

**Late Egyptian** (Amenemope's main idiom; the Cow's later forms):
- `m-jri̯ sḏm` (the negative imperative) → `אַל` + future (`אַל תָּזִיז`, §6.2); the conjunctive `mtw=k sḏm` that follows
  continues the mood: after `m-jri̯` it is **also prohibited** → `וְאַל` + future, or `וְ…` when the sense is "and so";
  after an imperative → `וְ` + imperative / future.
- the First Present `sw ḥr sḏm`, `tw=k ḥr sḏm` → participle (`הוּא מְדַבֵּר`); with a stative → adjective.
- the Third Future `jw=f r sḏm` → future; the negative future `bn sḏm=f` → `לֹא` + future.
- the negative aorist `bw jri̯=f sḏm` "he does not (ever) hear" → `אֵינֶנּוּ שׁוֹמֵעַ` / `לֹא יִשְׁמַע לְעוֹלָם`?? – no
  `עוֹלָם` (§5): `אֵין הוּא שׁוֹמֵעַ` / `לֹא יִשְׁמַע לְעֵת מִן הָעִתִּים`; habitual `ḫr sḏm=f` → `וְאָז` / `וַהֲרֵי` + present.
- the "second tense" `j:jri̯=k sḏm` (emphasizing an adverb) → render the emphasis on the adverb (`בְּזְהִירוּת עֲשֵׂה`) or
  a plain imperative where Amenemope uses it as an exhortation (`j:jri̯=k sjꜣꜣ` "beware" `הִזָּהֵר`).
- `jr X` (topicalization "as for X") → `הִנֵּה X` (§10.1.6; `אֲשֶׁר לְ־X` only where it reads well); the circumstantial `jw` → `כְּשֶׁ…` / `וְ…` / a participle.
- the definite article `pꜣ`, `tꜣ`, `nꜣ` → `הַ־`; the possessive article `pꜣy=f` → the suffix (`בֵּיתוֹ`).
- the Late Egyptian `ḥr` before a verb (written or not, `(ḥr)`) is the First Present: participle.

**Particles and connectives** (fixed): `ptr` "look" → `רְאֵה`; `ḫr-rʾ-ꜥ` → `וּבְכֵן`; `jst` → `וַהֲרֵי`; `m-ḏr` "when"
→ `כַּאֲשֶׁר`; `r-ḏd` (quoting) → `לֵאמֹר`; `ḏd=f` "he says" → `אוֹמֵר הוּא`; `j` (vocative) → `הוֹ`; `mj` "like" → `כְּ`,
`mj` "come!" → `בּוֹא`.

## 4. Key terms (one Hebrew per lemma; echo tags; first come the Bible-sensitive ones)

### 4.1 God, truth, the person
| Egyptian (TLA lemma) | Hebrew | Not | Why / tag |
|---|---|---|---|
| nṯr, pꜣ nṯr (90260) | `הָאֵל` (`אֵל`); pl. `אֵלִים` ★ | `אֱלֹהִים`, `יהוה` | the dossier's E130. Amenemope's "the god" is God in general (Proverbs' `יְהוָה` in the apparatus: [equivalent]) |
| mꜣꜥ.t (66620) | `אֱמֶת` | `צֶדֶק`, `מִשְׁפָּט`, `יֹשֶׁר` | "truth, order, right": one Hebrew word (the goddess `מַאַת`) |
| mꜣꜥ (adj.) "true" | `אֲמִתִּי` / `בֶּאֱמֶת` | | gr mꜣꜥ = `הַשּׁוֹתֵק הָאֲמִתִּי` (§6.4) |
| mꜣꜥ-ḫrw "true of voice" (of the dead) | `אֲמִתִּי־הַקּוֹל` | `צַדִּיק`, `זַכַּאי` | literal; note: "vindicated (at the judgement), the late" |
| jsf.t | `עָוֶל` | `רֶשַׁע` | Lev 19:35 `עָוֶל` [equivalent] |
| ꜥḏꜣ "false" | `שֶׁקֶר` | | md.t n ꜥḏꜣ `דִּבְרֵי שֶׁקֶר`; `n-ꜥḏꜣ` "falsely" `בְּשֶׁקֶר` |
| bw.t "abomination" | `תּוֹעֵבָה` | | [equivalent] Prov 6:16, 11:1, 20:10, 23; Deut 25:16 `כִּי תוֹעֲבַת יְהוָה אֱלֹהֶיךָ` – `tꜣ bw.t n pꜣ nṯr` = `תּוֹעֲבַת הָאֵל` (§6.6) |
| jb (heart) | `לֵב` | | one Hebrew per lemma: |
| ḥꜣ.tj (heart) | `לֵבָב` | | … the two Egyptian hearts take the two Hebrew ones (both biblical) |
| ẖ.t (belly, body) | `בֶּטֶן` | `קֶרֶב` | Prov 22:18 `בְּבִטְנֶךָ` [equivalent] (Amen. 3.13 "the casket of your belly") |
| ḥꜥ.w (body, limbs) | `גּוּף` | | the dossier's E131 `מִגּוּפוֹ` |
| ns (tongue) / rʾ (mouth) / sp.t (lip) | `לָשׁוֹן` / `פֶּה` / `שָׂפָה` | | |
| ꜥnḫ.wj (ears) | `אָזְנַיִם` | | `jmm ꜥnḫ.wj=k` = `תֵּן אָזְנֶיךָ` – **not** `הַט אָזְנְךָ` (Prov 22:17: [divergence] "give" / "incline") |
| fnḏ (nose) | `אַף` | | Gen 2:7 `בְּאַפָּיו` [equivalent] (the dossier's E131 `אַפֵּיהֶם`) |
| ṯꜣw (breath, wind, air) | `רוּחַ` | `נְשָׁמָה` | the dossier's E130; Gen 2:7 `נִשְׁמַת חַיִּים` [equivalent], Gen 1:2 `רוּחַ` |
| ꜥnḫ (life, to live) | `חַיִּים`, `חַי` | | `pꜣ ꜥnḫ` "life" (Amen.) `הַחַיִּים`; `wḏꜣ` "be sound, prosper" = `שָׁלֵם` / `שָׁלוֹם` (§4.4) |
| kꜣ / bꜣ / ꜣḫ (the spirits) | `כָּא` ★ / `בָּא` ★ / `אָח` | | transliterated, always vocalized; a note at the first occurrence per file. bꜣ.w (pl.) "power, wrath" = `עָצְמָה` (`bꜣ.w n nṯr` `עָצְמַת הָאֵל`) |
| rmṯ (people, mankind) | `בְּנֵי הָאָדָם` | `אָדָם` alone | the dossier's E130 (`rmṯ` ~ `rmj.t` "tear": the pun noted) |
| z (man, a person) | `אִישׁ` / `אָדָם` | | `z nb` `כָּל אִישׁ` |
| nḏs (commoner) / srj, sr (official) | `אִישׁ פָּשׁוּט` / `שַׂר` | | |
| ḥm=f (His Majesty) | `הוֹד מַלְכוּתוֹ` | `פַּרְעֹה` | `ꜥnḫ-wḏꜣ-snb` (after the king) `חַיִּים, שָׁלוֹם, בְּרִיאוּת` |
| nsw (king) | `מֶלֶךְ` | | pr-ꜥꜣ only = `פַּרְעֹה` (§4.2) |

### 4.2 Egyptian loanwords in Hebrew (each Hebrew word **only** for its Egyptian source; tag [cognate] – "loanword")
| Egyptian | Hebrew | Bible |
|---|---|---|
| ḏbꜣ.t "chest, coffin, shrine" (Amen. 11.4 `ḏb(ꜣ),t=k`) | `תֵּבָה` | Gen 6:14, Ex 2:3 |
| jtrw "river" (Amen. 26.16?, 27.2 `jtwr`) | `יְאֹר` | Gen 41:1, Ex 2:3 |
| ṯwf(j) "papyrus, reeds" | `סוּף` | Ex 2:3, 5 |
| ꜣḫ(w) "reed-meadow" | `אָחוּ` | Gen 41:2 |
| jp.t "oipe" (a grain measure, ≈19 l; Amen. 18.21–23) | `אֵיפָה` | Deut 25:14–15, Lev 19:36, Prov 20:10 |
| šs "fine linen" | `שֵׁשׁ` ★ | Gen 41:42, Ex 25:4 |
| ḥry-tp "chief (lector priest)" | `חַרְטֹם` | Gen 41:8, Ex 7:11 (Westcar; not in these texts) |
| pr-ꜥꜣ "the Great House" | `פַּרְעֹה` | |
| ḏbꜥ.t "seal(-ring)" | `טַבַּעַת` | Gen 41:42 – `ḏbꜥ` "finger" = `אֶצְבַּע` |
| ḫtm "seal, to seal" (Amen. 19.21 `sw ḫtm m ḏbꜥ=f`) | `חוֹתָם`, `חָתַם` | Gen 38:18; 1 Kgs 21:8 |
| šnḏ.t "acacia" | `שִׁטָּה` | Ex 25:5 |
| gf "monkey" | `קוֹף` | 1 Kgs 10:22 – the baboon `jꜥnꜥ` (Thoth's animal, Amen. 17.9, 17.22) = `בַּבּוּן`, **not** `קוֹף` |
| gstj "palette" | `קֶסֶת` | Ezek 9:2 |
| ḫsbḏ "lapis lazuli" | `סַפִּיר` | not a loanword: the cross-corpus rule (*uqnû* = `סַפִּיר` [equivalent], guidelines §6.7) |
| msḥ "crocodile" | `תִּמְסָח` | Arabic *timsāḥ* < Coptic < Egyptian msḥ; Modern Hebrew `תִּמְסָח`. `תַּנִּין` never (the dossier rule; Ex 7:9–12 in the apparatus) |

### 4.3 Amenemope and the Torah / Proverbs (fixed before drafting; see also §8)
| Egyptian | Hebrew | Not | Why / tag |
|---|---|---|---|
| sbꜣ.yt "teaching, instruction (also: discipline)" | `מוּסָר` | `תּוֹרָה`, `הוֹרָאָה` | Prov 1:8, 23:12, 23:23 [equivalent]: both mean "teaching" and "chastisement" |
| sbꜣ "teach" | `לִמֵּד` | | |
| ḥw.t (a "house" = a chapter, 3.8, 27.7) | `בַּיִת` | `פֶּרֶק` | literal: the stanza is a "house" in both languages; §6.1 |
| tꜣš / tšj "boundary" | `גְּבוּל` | | Deut 19:14, 27:17, Prov 22:28, 23:10 [equivalent] |
| wḏ "boundary stone, stela" | `אֶבֶן־גְּבוּל` | `מַצֵּבָה` | (7.12 `wḏ.y ḥr tšjw n ꜣḫ.t` "the boundary-stone on the borders of the fields") |
| rmni̯ "carry; remove" | `נָשָׂא` / of a boundary stone `הֵזִיז` | `הִסִּיג` | the Torah's `הִסִּיג` is reserved (§5): [equivalent] in the apparatus |
| hꜣd "trespass, encroach upon" | `פָּלַשׁ` | `בָּא`, `הִסִּיג` | Prov 23:10 `וּבִשְׂדֵי יְתוֹמִים אַל תָּבֹא` [equivalent] |
| ḫꜣr.t "widow" | `אַלְמָנָה` | | 7.15: the source of the emendation of Prov 23:10 `גְּבוּל עוֹלָם` → `גְּבוּל אַלְמָנָה`; Deut 24:19–21 |
| nmḥ "poor (free) man; orphan" | `דַּל`; abstract nmḥ.w `דַּלּוּת` | `יָתוֹם` | Late Egyptian sense "poor" |
| twꜣ "poor, humble" | `עָנִי` | | |
| jꜣd "wretched" | `אֻמְלָל` | `דַּל` | (4.4; Prov 22:22 `דָּל`: [equivalent] in the apparatus) |
| zꜣw-ꜥ / sꜣ-ꜥ "weak-armed" | `חֲלַשׁ־זְרוֹעַ` | | (4.5; Merikare E135 – the dossier has `הַחַלָּשׁ`: the MK translator aligns) |
| ḥwrꜥ "rob" | `גָּזַל` | | Prov 22:22 `אַל-תִּגְזָל` [equivalent] |
| pꜣ šmm "the heated man" | `הַחַם` ★ | `בַּעַל אַף`, `אִישׁ חֵמוֹת` | literal ("the hot one"); Prov 22:24 `אִישׁ חֵמוֹת` [equivalent]; always vocalized (Ham) |
| gr "silent", pꜣ gr | `הַשּׁוֹתֵק` | `הַמַּחֲרִישׁ` | Prov 17:28 `מַחֲרִישׁ` [equivalent] |
| gr mꜣꜥ "the truly silent" | `הַשּׁוֹתֵק הָאֲמִתִּי` | | §6.4 |
| mḫꜣ.t "balance" | `מֹאזְנַיִם` | | Lev 19:36, Prov 11:1, 16:11 [equivalent] |
| jws(w) "hand-balance, beam" | `פֶּלֶס` | | Prov 16:11 `פֶּלֶס וּמֹאזְנֵי מִשְׁפָּט` [equivalent]: the Egyptian also has two words |
| qd.t "kite" (a weight, ≈9 g) | `קֶדֶט` | `אֶבֶן`, `שֶׁקֶל` | transliterated, like `שֶׁקֶל`; Deut 25:13 `אֶבֶן וָאָבֶן`, Lev 19:36 `אַבְנֵי צֶדֶק` [equivalent] |
| dbḥ "measure (of grain)" | `מִדָּה` | | Lev 19:35 `בַּמִּדָּה` [equivalent] |
| ḫꜣr "sack" (a grain measure) | `שַׂק` | `כֹּר` | |
| wḏꜣ.t (the Udjat measure / the Eye of Horus) | `הַוּגָ׳את` | | transliterated, note "the healed eye of Horus, as a measure" |
| fqꜣ "reward, payment" | `שָׂכָר` | `שֹׁחַד` | Ex 23:8, Deut 16:19 `שֹׁחַד` [equivalent] in the apparatus |
| kꜣmn "blind" | `עִוֵּר` | | Lev 19:14, Deut 27:18 [equivalent] |
| nmw "dwarf" | `גַּמָּד` | | |
| qbqb "lame" | `פִּסֵּחַ` | | Lev 21:18 [equivalent] |
| ꜣḫ "useful, profitable" | `מוֹעִיל` | `טוֹב` | in the "better X than Y" saying (`ꜣḫ X r Y`): `מוּטָב X מִ־Y` (§6.3) |
| nfr "good, beautiful, perfect" | `טוֹב` / `יָפֶה` by sense | | `טוֹב` only for nfr (§5) |
| bjn "bad, evil" / ḏw "evil" | `רַע` / `רָעָה` | | so Re is `רַא` (§3.1) |
| qd "build, form" (24.14 "the god is his builder") | `בָּנָה`, `בּוֹנֶה` | `יוֹצֵר` | Gen 2:22 `וַיִּבֶן` [equivalent]; Isa 64:7 `יֹצְרֵנוּ` in the apparatus |
| ꜥmꜥ.t "clay, mud" | `טִיט` | `חֹמֶר` | Job 33:6 `מֵחֹמֶר קֹרַצְתִּי` [equivalent]; `חֹמֶר` collides with the Akkadian corpora's `חֵמָר` (bitumen) |
| dḥꜣ "straw" | `תֶּבֶן` | | Ex 5:7 (the clay and straw of the bricks) [equivalent] |
| jtj / jt "barley, grain" | `שְׂעוֹרָה` / `תְּבוּאָה` | | |
| šnw.t "granary" / wḏꜣ "storehouse" | `אָסָם` / `אוֹצָר` | | Prov 15:16 `מֵאוֹצָר רָב` |

### 4.4 Words of the creation texts and the Cow
| Egyptian | Hebrew | Not | Why / tag |
|---|---|---|---|
| jri̯ "make, do" | `עָשָׂה` | | the dossier; Gen 1:7, 16, 25–26 `וַיַּעַשׂ` [equivalent] |
| qmꜣ "create, form" | `יָצַר` | `בָּרָא` | Gen 2:7 `וַיִּיצֶר` [equivalent]; `בָּרָא` never |
| ḫpr "come into being, become" | `נִהְיָה` | `הָיָה`, `נִבְרָא` | Gen 1:3 `וַיְהִי` [equivalent]; Khepri `חֶפְּרִי` |
| ms "give birth" / ms.w "children" | `יָלַד` / `יְלָדִים` | | |
| ḥtp "rest, be content" (Memphite 59 "Ptah rested") | `נָח` | `שָׁבַת` | Ex 20:11 `וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי` [equivalent]; Gen 2:2 `וַיִּשְׁבֹּת` [divergence]. ḥtp.w (offerings) `קָרְבָּנוֹת` |
| md.t "word, matter" | `דָּבָר` | | "every divine word" (md.t nṯr) `כָּל דְּבַר אֵל` |
| ḏd "say" | `אָמַר` | | Gen 1:3 `וַיֹּאמֶר` [equivalent] |
| wḏ "command" | `צִוָּה` | | |
| kꜣ.t / kꜣj "thought; to plan" | `מַחֲשָׁבָה` / `חָשַׁב` | `יֵצֶר` | the dossier's E133 `מחשבתם`; Gen 6:5 [equivalent] |
| p.t / tꜣ | `שָׁמַיִם` / `אֶרֶץ` | `רָקִיעַ`, `אֲדָמָה` | |
| mw (water) | `מַיִם` | | snk n mw "the greed of the water" `תַּאֲוַת הַמַּיִם` (the dossier) |
| snn "image, likeness" | `צֶלֶם` | | the dossier's E131 [equivalent Gen 1:26–27] |
| twt / tjt "image, statue, form" | `דְּמוּת` | | [equivalent Gen 1:26] |
| ꜣpd (birds) / rm (fish) | `עוֹפוֹת` / `דָּגִים` | `צִפּוֹרִים` | the dossier's E132 |
| ꜥw.t "small cattle, flock" | `צֹאן` | `בְּהֵמָה` | the dossier's E130, E132 (`צֹאן הָאֵל`) |
| sm.w "plants" | `עֵשֶׂב` | `צֶמַח`, `דֶּשֶׁא` | the dossier's E132; Gen 1:29–30 [equivalent] |
| smꜣ / smꜣm "slay, slaughter" | `הָרַג` | `הִשְׁחִית`, `מָחָה` | the dossier's E132, E136 (`הרג`) |
| sbj "rebel; rebellion" | `מָרַד` / `מֶרֶד` | | the dossier's E133 |
| jr.t (eye; the Eye of Re) | `עַיִן` (`עֵין רַא`) | | |
| ḥnq.t "beer" | `שֵׁכָר` | `בִּירָה` | = Sum. *kaš* (Šuruppag) |
| ddj "red ochre" | `אֹדֶם` | | |
| Nwn (the primeval water) | `נוּן` ★ | `תְּהוֹם` | |
| wꜥ "one, alone" | `אֶחָד`, `לְבַדּוֹ` | | "the One who made himself into millions" |
| ḏ.t / nḥḥ "eternity" (two words) | `עַד` / `נֶצַח` | `עוֹלָם` | the cross-corpus rule (`עוֹלָם` never) |

## 5. Reserved and gated Hebrew (checked by `egypt_tools.py verify`; the code's RESERVED list is authoritative)

### 5.1 Never in an Egyptian line (the Bible's own words; the apparatus compares them)
`אֱלֹהִים`, the root `ברא`, `תַּנִּין`, `לִוְיָתָן`, `תְּהוֹם`, `תֹּהוּ`, `בֹּהוּ`, `רָקִיעַ`, `שְׁאוֹל`, `מַבּוּל`, the root `שבת`,
`נְשָׁמָה`, the roots `נחם` and `עצב`, `מָחָה` (Gen 6:7), the noun `יֵצֶר`, `אֲדָמָה`, `תּוֹרָה`, the roots `סוג` / `נסג`
(`הִסִּיג`), `גֵּר`, `זֶרֶת`, `צֶדֶק` / `צַדִּיק`, `מִשְׁפָּט`, `בְּרִית`, `עוֹלָם`, `שֹׁחַד` (fqꜣ = `שָׂכָר`), `יָתוֹם`.

### 5.2 Only for their source word (licensed by the line's transliteration or TLA lemma ids)
`רוּחַ` (ṯꜣw) · `צֶלֶם` (snn, twt, tjt) · `דְּמוּת` (twt, tjt) · `טוֹב` (nfr) · `גְּבוּל` (tꜣš/tšj) · `אַלְמָנָה` (ḫꜣr.t) ·
`אֵיפָה` (jp.t) · `פֶּלֶס` (jws) · `מֹאזְנַיִם` (mḫꜣ.t) · `עִוֵּר` (kꜣmn) · `פִּסֵּחַ` (qbqb) · `מוּסָר` (sbꜣ.yt) · `שְׁלֹשִׁים`
(the number 30) · `הַחַם` (šmm) · the fool words `כְּסִיל` / `אֱוִיל` / `נָבָל` (wḫꜣ, ḫm) · the loanwords of §4.2
(`תֵּבָה`, `יְאֹר`, `סוּף`, `אָחוּ`, `פַּרְעֹה`, `חַרְטֹם`, `שֵׁשׁ`, `קֶסֶת`, `טַבַּעַת`, `חוֹתָם`, `שִׁטָּה`, `קוֹף`).
The verb `יָצַר` only for qmꜣ (and qd? no: qd = `בָּנָה`).

### 5.3 Always vocalized (the verifier's traps)
`רַא` (Re; and never `רע` for him) · `פְּתָח` · `גֶּבּ` · `מִין` · `הַחַם` · `אֵלִים` / `אֵלֵי` / `אֵלָה` · `אוֹן` · `מֹף` · `בָּא` ·
`כָּא` · `נוּן` · `נוּת` · `שׁוּ` · `סֵת` · `שַׁאי` · `מַאַת` · `שֵׁשׁ`.

### 5.4 False friends and traps
- Egyptian `rʾ` "mouth" ≠ Hebrew `רֹאשׁ`; `ḥr` "face" ≠ `חֹר`; `jb` "heart" ≠ `אָב`; `mw` "water" ~ `מַיִם` (an
  Afroasiatic cognate? say so only with a reference); `sn` "brother" ≠ `שֵׁן`.
- `nfr` "good, beautiful" ≠ the name `נֶפֶר`- in compounds (Wn-nfr).
- the Late Egyptian article `pꜣ` ≠ Hebrew `פֹּה`; `nꜣ` ≠ `נָא`.
- **AED's German is a rank-3 translation** (guidelines §3): hidden from `data`; read `tr` only after drafting.
- **Modern-Hebrew traps:** `מוּסָר` reads as "morality" (and is: the Egyptian sbꜣ.yt is both; a note at 1.1);
  `הַחַם` reads as "Ham"; `תִּמְסָח` is unfamiliar (a note at its first occurrence).

## 6. Formulas (fixed Hebrew; enforced by regex in `egypt_tools.py`)
1. **The chapter heading** `ḥw.t mḥ-N.t` "the N-th house": `הַבַּיִת הַשֵּׁנִי` … `הַבַּיִת הָעֲשִׂירִי`, `הַבַּיִת
   הָאַחַד־עָשָׂר` … `הַבַּיִת הַשְּׁלֹשִׁים` (cardinals with the article above ten); 3.8 `ḏd=f ḥw.t tp.t` `אוֹמֵר הוּא:
   הַבַּיִת הָרִאשׁוֹן`. One line each, nothing added. 27.7 `tꜣj 30 n ḥw.t` `שְׁלֹשִׁים הַבָּתִּים הָאֵלֶּה`.
2. **The prohibitive** `m-jri̯ X` = `אַל` + future; `mtw=k Y` after it = `וְאַל` + future (or `וְ` + future when it states
   the consequence: the translator says which in the parse).
3. **"Better X than Y"** `ꜣḫ X r Y` = `מוּטָב X מִ־Y` (9.5–8, 16.11–14: the two copies identical, §7).
4. **The two men:** `pꜣ šmm` = `הַחַם`; `gr mꜣꜥ` = `הַשּׁוֹתֵק הָאֲמִתִּי`; `pꜣ gr` = `הַשּׁוֹתֵק`.
5. **The Pyramid Texts:** `ḏd-mdw` "words to be spoken" = `דְּבָרִים לֵאמֹר:`; `n ḫpr.t X` "before X came into being"
   = `טֶרֶם נִהְיָה X` / `טֶרֶם נִהְיוּ X` [equivalent Gen 2:5 `טֶרֶם יִהְיֶה בָאָרֶץ`].
6. `tꜣ bw.t n pꜣ nṯr` = `תּוֹעֲבַת הָאֵל` (13.16, 15.21; with `ꜥꜣ.t` "great" 14.3: `תּוֹעֲבָתוֹ הַגְּדוֹלָה`).
7. **The refrains of Amenemope** (§7): 3.17 = 5.18 = 17.15 (`jr jri̯.y=k hꜣw=k jw nn m jb=k`); 4.2 = 7.10 (`wḏꜣ ḥꜥ.t=k
   ḥr-tp tꜣ`); 9.5–8 = 16.11–14; 22.5–8 = 23.8–11; 5.8 = 5.13? (only the shared half); 6.4 = 6.12 except the last word.
8. The king's blessing `ꜥnḫ-(w)ḏꜣ-s(nb)` = `חַיִּים, שָׁלוֹם, בְּרִיאוּת`.

## 7. Fixed lines (enforced character by character, niqqud and marks ignored)
The refrains are fixed by their **first** drafted occurrence: the translator of AM drafts the first copy, and the
later copies copy it byte for byte (guidelines §5.2 "a fixed passage's plene form is fixed once"). The coordinator
writes them here after the first part, so that the verifier enforces them.

| Lines | Source | Hebrew |
|---|---|---|
| AM 3.17; AM 5.18; AM 17.15 | `jr jri̯.y=k hꜣw=k jw nn m jb=k` | `אם תבלה את עתך ואֵלֶּה בלבך,` |
| AM 4.2; AM 7.10 | `wḏꜣ ḥꜥ.t=k ḥr-tp tꜣ` | `יהיה גופך שלם על פני הארץ.` |
| AM 5.19; AM 17.16 | `r nꜣyw=k ms.w (r) ptr=w` | `ילדיך יִרְאוּ אותן.` |

## 8. Amenemope ↔ Proverbs 22:17–24:22 and the Torah: the shared sayings (fixed before drafting)
The literature's pairings, **to be checked against the transliteration** (guidelines §5.2: a brief says "look for",
never "translate as"). The Hebrew of Amenemope renders the Egyptian; the Proverbs wording goes into the apparatus with
its tag, and the reserved words of §5 keep the translation from borrowing it. Each pair gets a row in the project's
parallels table.

| Amenemope | Content | Bible | Words to watch |
|---|---|---|---|
| 1.5–6 | to answer the one who spoke, to report to the one who sent him | Prov 22:21 `לְהָשִׁיב אֲמָרִים אֱמֶת לְשֹׁלְחֶיךָ` | wšb "answer" `לְהָשִׁיב` [equivalent]; hꜣb "send" `שָׁלַח` |
| 3.8–4.2 (ch. 1) | give your ears, hear the sayings; give your heart; the casket of the belly; a mooring-post on the tongue | Prov 22:17–18 `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים` … `בְּבִטְנֶךָ` … `עַל-שְׂפָתֶיךָ` | `תֵּן` not `הַט`; ẖ.t `בֶּטֶן`; ns "tongue" against `שְׂפָתֶיךָ` [divergence] |
| 27.7 | "look at these thirty houses" | Prov 22:20 `הֲלֹא כָתַבְתִּי לְךָ` (ketiv `שלשום`, qere `שָׁלִשִׁים`) | `שְׁלֹשִׁים` (the emendation "thirty" rests on Amenemope) |
| 4.4–5 (ch. 2) | beware of robbing the wretched, of being violent to the weak | Prov 22:22 `אַל-תִּגְזָל-דָּל כִּי דַל-הוּא` | ḥwrꜥ `גָּזַל`; jꜣd `אֻמְלָל` against `דָּל` |
| 11.13–14 (ch. 9) | do not befriend the hot man, nor approach him to converse | Prov 22:24 `אַל-תִּתְרַע אֶת-בַּעַל אָף` | `הַחַם` ★ |
| 13.8–9 | do not leap to join such a one, lest terror carry you off | Prov 22:25 `פֶּן-תֶּאֱלַף אֹרְחֹתָו` | |
| 7.12–15 (ch. 6) | do not move the boundary stone … do not encroach on the boundaries of a widow | Prov 22:28, 23:10 `אַל-תַּסֵּג גְּבוּל עוֹלָם`; Deut 19:14 `לֹא תַסִּיג גְּבוּל רֵעֲךָ`; Deut 27:17 | `גְּבוּל`; `הֵזִיז` (not `הִסִּיג`); ḫꜣr.t `אַלְמָנָה` – Prov 23:10's `עוֹלָם` / `אַלְמָנָה` emendation |
| 8.9–10 | beware of trespassing on the boundaries of the fields | Prov 23:10–11 | |
| 9.10–10.5 (ch. 7) | do not set your heart on riches … they made themselves wings like geese, flew to the sky | Prov 23:4–5 `כִּי עָשֹׂה יַעֲשֶׂה-לּוֹ כְנָפַיִם כְּנֶשֶׁר` | jri̯ `עָשָׂה` [equivalent]; dnḥ "wings" `כְּנָפַיִם`; r "geese" `אֲוָזִים` against `נֶשֶׁר` [divergence] |
| 9.5–8 = 16.11–14 | better poverty in the god's hand than riches in the storehouse; better bread with a happy heart than riches with sorrow | Prov 15:16–17, 16:8, 17:1 (`טוֹב … מִ־`) | the form `מוּטָב … מִ־` (§6.3); `אוֹצָר` |
| 14.5–10, 14.17–18 (ch. 11) | do not covet the poor man's goods … a big mouthful you swallow and vomit | Prov 23:6–8 `פִּתְּךָ-אָכַלְתָּ תְקִיאֶנָּה` | |
| 22.11–14 (ch. 21) | do not empty your belly to everyone | Prov 23:9 | |
| 23.13–18 (ch. 23) | do not eat bread before a noble … look at the bowl before you | Prov 23:1–3 `כִּי-תֵשֵׁב לִלְחוֹם אֶת-מוֹשֵׁל` | |
| 27.16–17 | the scribe skilled in his office is found worthy to be a courtier | Prov 22:29 `חָזִיתָ אִישׁ מָהִיר בִּמְלַאכְתּוֹ` | sšꜣ "skilled" `בָּקִי` (not `מָהִיר`); smḥr "courtier" `רֵעַ הַמֶּלֶךְ` / `יוֹעֵץ`? (the translator decides; not `מֶלֶךְ`) |
| 19.11–13 | do not say "today is like tomorrow" | Prov 27:1 `אַל-תִּתְהַלֵּל בְּיוֹם מָחָר` | |
| 19.16–17 | one thing are the words men say, another is what the god does | Prov 16:9, 19:21 `וַעֲצַת יְהוָה הִיא תָקוּם` | |
| 5.3–6 | lift him up, give him your hand, leave him in the god's hands, fill his belly with your bread | Prov 25:21–22, 20:22 | |
| 22.1–8 = 23.8–11 | do not say "I have found a strong patron" … sit in the god's arms | Prov 20:22 | the refrain |
| 17.18–19, 17.22–18.3 (ch. 16) | do not move the balance, nor falsify the kite-weights, nor diminish the parts of the measure; the ape by the balance | Lev 19:35–36; Deut 25:13–16; Prov 11:1, 16:11, 20:10, 23 | `פֶּלֶס`, `מֹאזְנַיִם`, `קֶדֶט`, `מִדָּה` |
| 18.15–19.9 (ch. 17) | do not falsify the measure; do not make an oipe that holds two | Deut 25:14 `אֵיפָה וְאֵיפָה`; Prov 20:10 | `אֵיפָה` [cognate: loanword] |
| 16.5–7 (ch. 13) | a large debt of a poor man: make it three parts, release two | Deut 15:1–2 (the release) | `שָׁמַט` never (no cognate): `וִתֵּר`? |
| 20.21–21.4 (ch. 20) | do not confound a man in the court … do not accept the reward of the powerful | Ex 23:6–8; Deut 16:19 | fqꜣ `שָׂכָר` (`שֹׁחַד` in the apparatus) |
| 24.9–12 (ch. 25) | do not laugh at a blind man, nor tease a dwarf, nor injure a lame | Lev 19:14; Deut 27:18; Prov 17:5 | `עִוֵּר`, `גַּמָּד`, `פִּסֵּחַ` |
| 24.12–17 | man is clay and straw, the god is his builder; he tears down and builds up daily | Gen 2:7; Job 33:6; Isa 64:7; 1 Sam 2:7–8; Eccl 3:3 | `טִיט`, `תֶּבֶן`, `בּוֹנֶה` |
| 26.9–13 (ch. 28) | do not pounce on a widow you find (gleaning) in the field; do not pass a stranger by with your oil jar; the god loves him who honours the poor | Deut 24:19–21 (the stranger, the orphan, the widow at the harvest); Prov 14:31, 19:17 | `אַלְמָנָה`; the stranger: `נָכְרִי` (`גֵּר` never) |
| 6.1–12 (ch. 4) | the hot man in the temple is like a tree grown indoors … the truly silent is like a tree grown in a garden: it flourishes, its fruit is sweet, its shade pleasant | Ps 1:3; Jer 17:5–8 | [equivalent] the two trees; `נָטַע`? (not in the Egyptian: rd "grow" `צָמַח`) |
| 22.1–8 | do not say "find me a strong patron … a protector": sit in the god's arms | Prov 20:22; Prov 23:11 `כִּי-גֹאֲלָם חָזָק` | `גֹּאֵל` never (the wisdom corpus's reservation): the Egyptian "protector" by its own sense |
| 13.15–16, 15.20–21 | do not speak falsely; the abomination of the god | Prov 12:22 `תּוֹעֲבַת יְהוָה שִׂפְתֵי-שָׁקֶר` | `תּוֹעֲבַת הָאֵל` |

## 9. Gate tests (`egypt_tools.py selftest`; every gate tested before the first line, guidelines §5.2)

| Line | expect | Hebrew |
|---|---|---|
| AM 7.12 | ok | `אַל תָּזִיז אֶת אֶבֶן־הַגְּבוּל מִגְּבוּלוֹת הַשָּׂדוֹת,` |
| AM 7.12 | err | `אַל תַּסִּיג אֶת אֶבֶן־הַגְּבוּל מִגְּבוּלוֹת הַשָּׂדוֹת,` |
| AM 7.15 | ok | `וְאַל תִּפְלֹשׁ אֶל גְּבוּלוֹת הָאַלְמָנָה.` |
| AM 7.13 | err | `וְאַל תִּפְלֹשׁ אֶל גְּבוּלוֹת הָאַלְמָנָה.` |
| AM 3.8 | ok | `אוֹמֵר הוּא: הַבַּיִת הָרִאשׁוֹן.` |
| AM 4.3 | ok | `הַבַּיִת הַשֵּׁנִי.` |
| AM 4.3 | err | `הַפֶּרֶק הַשֵּׁנִי.` |
| AM 11.13 | ok | `אַל תִּתְחַבֵּר אֶל הַחַם,` |
| AM 11.13 | err | `אַל תִּתְחַבֵּר אֶל החם,` |
| AM 11.13 | err | `אַל תִּתְחַבֵּר אֶל אִישׁ הַחֵמָה,` |
| AM 1.1 | ok | `רֵאשִׁית הַמּוּסָר לַחַיִּים,` |
| AM 1.1 | err | `רֵאשִׁית הַתּוֹרָה לַחַיִּים,` |
| AM 18.21 | ok | `אַל תַּעֲשֶׂה לְךָ אֵיפָה שֶׁמַּחֲזִיקָה שְׁתַּיִם,` |
| AM 18.22 | err | `אֵיפָה תַּעֲשֶׂה לְךָ,` |
| AM 17.18 | ok | `אַל תָּזִיז אֶת הַפֶּלֶס, וְאַל תְּזַיֵּף אֶת הַקְּדָטִים,` |
| AM 9.5 | ok | `מוּטָב הַדַּלּוּת בְּיַד הָאֵל` |
| AM 9.5 | err | `טוֹבָה הַדַּלּוּת בְּיַד הָאֵל` |
| AM 11.4 | ok | `תִּהְיֶה נִכְבָּד, נִסְתָּר בְּתֵבָתְךָ;` |
| AM 11.3 | err | `תִּהְיֶה נִכְבָּד, נִסְתָּר בְּתֵבָתְךָ;` |
| AM 13.16 | ok | `תּוֹעֲבַת הָאֵל.` |
| MK E130 | ok | `בְּנֵי הָאָדָם, צֹאן הָאֵל – עשה שמים וארץ למענם, הדף את תַּאֲוַת הַמַּיִם, עשה את רוח הלב – יחיו` |
| MK E130 | err | `בְּנֵי הָאָדָם, צֹאן הָאֱלֹהִים – ברא שמים וארץ למענם` |
| MK E131 | ok | `אַפֵּיהֶם. צלמיו הם, שיצאו מגופו; זורח הוא בשמים למענם; עשה` |
| MK E132 | err | `להם עשב, צאן, עופות ודגים – צלמיו הם` |
| PT571 P/V/W.35 | ok | `טֶרֶם נִהְיוּ הַשָּׁמַיִם, טֶרֶם נִהְיְתָה הָאָרֶץ,` |
| PT571 P/V/W.35 | err | `בְּטֶרֶם נִבְרְאוּ הַשָּׁמַיִם` |
| PT571 P/V/W.35 | err | `כַּאֲשֶׁר לֹא הָיוּ שָׁמַיִם` |
| HC 3 | err | `וַיִּנָּחֶם רַא` |
| HC 3 | ok | `אָז אָמַר הוֹד מַלְכוּתוֹ אֶל אֲשֶׁר בְּעִקְּבוֹתָיו: קִרְאוּ לִי אֶת עֵינִי, וְאֶת שׁוּ` |
| HC 1 | ok | `[נִהְיָה, אֵפוֹא, שֶׁזָּרַח רַא], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ` |
| HC 1 | err | `[נִהְיָה, אֵפוֹא, שֶׁזָּרַח רע], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ` |


## 10. Changes and proposals merged (by run and translator)

### 10.1 Round 4 run 3, sub 1 – Amenemope part 1 (1.1–7.10), merged 2026-10-23
1. **Fixed lines (§7)** from the first drafted copies: 3.17 = 5.18 = 17.15; 4.2 = 7.10; 5.19 = 17.16. The two trees 6.4 `קצו מובא אל מגרש־העצים;` / 6.12 `קצו מובא במטע.` and 6.2 / 6.8 `הוא כעץ הצומח בפנים:` / `…בפרדס:` stay parallel (the Egyptian differs in the place word and the preposition).
2. **Verbs:** ꜥn "return (a report, an answer)" = `הֵשִׁיב` (1.6, 4.11, 5.17; Prov 22:21 `לְהָשִׁיב` [equivalent]); ḫsf (+ wšb.t) "reply" = `הֶחֱזִיר (תְּשׁוּבָה)`, ḫsf "ward off" = `הָדַף` (MK E135); wšb(.t) = `תְּשׁוּבָה`; ḫꜣꜥ = `עָזַב`; jmm "give!" = `תֵּן`, rḏj "put" = `שָׂם`; jnj = `הֵבִיא` (passive `מוּבָא`); gmj = `מָצָא`; sꜣj = `שָׂבַע`; ṯm "be ashamed" = `נִכְלַם`; wsfꜣ = `הִתְאַפֵּק`; mdwj = `דִּבֵּר` (`הַדִּבּוּר`); thꜣ = `פָּגַע` / `פּוֹגֵעַ`; ḥtp = `נָח` (§4.4); zꜣw tw r "beware of" = `הִשָּׁמֵר לְךָ מִ־`.
3. **Nouns:** wḏꜣ (verb / noun) = `שָׁלֵם` / `שָׁלוֹם`, swḏꜣ = `הֶחֱזִיק שָׁלֵם`; wḏꜣ "storehouse" = `אוֹצָר` (the pun noted, 4.1); hꜣw "time, lifetime" = `עֵת`; kꜣrj "shrine" = `מִקְדָּשׁ` (the dossier), ḥw.t-nṯr = `בֵּית הָאֵל`; the storm words ḏꜥ `סְעָרָה`, pḫpḫ `סוּפָה`, qrjw `רַעַם`; fire ḫ.t `אֵשׁ`, stꜣ `לֶהָבָה`; tꜣ-rʾ "hot-mouthed" = `לוֹהֵט־הַפֶּה` (not `חַם־הַפֶּה`: the hot man's `הַחַם` is šmm's alone); jꜣw `זָקֵן`, ꜥꜣ and wr `גָּדוֹל`; nb "lord" `אָדוֹן` / "owner of" `בַּעַל`; smḥr "courtier" = `רֵעַ (הַמֶּלֶךְ)` (1.4; also 27.17: 1 Kgs 4:5 `רֵעֶה הַמֶּלֶךְ` [equivalent]); sšꜣ "skilled" `בָּקִי`, jꜣw.t "office" `מִשְׂרָה`; jmj-rʾ X `הַמְּמֻנֶּה עַל X`; nfr.y "grain" = `בָּר` ★ (always vocalized); ḥzw.t "favour" = `חֵן`; mḥy.t "north wind" = `הַצָּפוֹן` (Song 4:16; `רוּחַ` is ṯꜣw's).
4. **Animals:** msḥ `תִּמְסָח` (§4.2); dby "hippopotamus" = `סוּס־הַנָּהָר` (`יְאוֹר` is jtrw's); wnš "jackal" = `תַּן` (vocalized `תַּנִּים`: unvocalized it is close to the reserved `תנין`).
5. **Semitic loanwords in Late Egyptian** take their Hebrew cognate, tagged [cognate]: ꜥšq = `עָשַׁק` (6.14), mkmr.t = `מִכְמוֹרֶת` (7.6; = the cross-corpus `מִכְמוֹרֶת` of *kamāru*: the same Semitic word).
6. **The topicalizer** jr X = `הִנֵּה X` (§3a's `אֲשֶׁר לְ־` becomes `לַחַם` "bread" before `הַחַם`): §3a amended accordingly.
7. **Names:** Jꜥḥ (the moon god) `יָעַח` ★; Mnw-kꜣ-mw.t=f `מִין־כָּמוּתֶף`; the §3 forms of Wn-nfr, Tnj, Ṯꜣ-wr, ꜣbḏw, Snw.t confirmed.
8. **Ruling (the coordinator):** the Akkadian corpora's cognate reservations (`עָבַר` only for *ebēru*, `עָזַב` for *ezēbu*, `חָלַף` for *etēqu* …) bind **Akkadian** source words; an Egyptian word with no Semitic cognate takes the Hebrew word of its meaning (one Hebrew per Egyptian lemma), so ḫꜣꜥ = `עָזַב` stands. A Semitic loanword in Egyptian takes its cognate (item 5).
9. **Gate fix (egypt_tools.py):** the `חם` gate no longer reads `לחם` "bread" (with prefixes: `בלחם`, `ולחם` …) as the hot man (5.5 had been passed by `[היתר שער]`). The hot man after `ל` is licensed by šmm anyway, and the unvocalized trap still checks it.
