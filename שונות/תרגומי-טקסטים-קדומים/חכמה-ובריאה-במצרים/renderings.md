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

**Amenemope's `/`:** where the TLA analysed one written word **or a stretch of several words** in two ways, AED puts a
`<gap/>` between the two analyses; the corpus tool prints it as ` / ` (no text is lost there). Translate the stretch once
(the other analysis in the פירוק). Until 2026-10-23 the tool caught only a gap between two similar single words, and printed
the multi-word ones as `[…]` (§10.6). The real losses are only the line-end gaps of 27.17, 27.18 and 28.1.

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
| ktm.t "fine gold" (Amen. 18.12) | `כֶּתֶם` ★ | Job 28:16, Lam 4:1 (always vocalized: "stain") |
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
| ḫpr "come into being, become" | `נִהְיָה` (future: `יִהְיֶה`, §10.3) | `הָיָה`, `נִבְרָא` | Gen 1:3 `וַיְהִי` [equivalent]; Khepri `חֶפְּרִי` |
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
3. **"Better X than Y"** `ꜣḫ X r Y` = `מוּטָב X מִ־Y` (9.5–8, 16.11–14: 9.6–8 = 16.12–14 identical, §7; 9.5 "poverty in the god's hand" ≠ 16.11 "praise and the love of men": only the frame `מוטב … ` is shared).
4. **The two men:** `pꜣ šmm` = `הַחַם`; `gr mꜣꜥ` = `הַשּׁוֹתֵק הָאֲמִתִּי`; `pꜣ gr` = `הַשּׁוֹתֵק`.
5. **The Pyramid Texts:** `ḏd-mdw` "words to be spoken" = `דְּבָרִים לֵאמֹר:`; `n ḫpr.t X` "before X came into being"
   = `טֶרֶם נִהְיָה X` / `טֶרֶם נִהְיוּ X` [equivalent Gen 2:5 `טֶרֶם יִהְיֶה בָאָרֶץ`].
6. `tꜣ bw.t n pꜣ nṯr` = `תּוֹעֲבַת הָאֵל` (13.16, 15.21; with `ꜥꜣ.t` "great" 14.3: `תּוֹעֲבָתוֹ הַגְּדוֹלָה`).
7. **The refrains of Amenemope** (§7): 3.17 = 5.18 = 17.15 (`jr jri̯.y=k hꜣw=k jw nn m jb=k`); 4.2 = 7.10 (`wḏꜣ ḥꜥ.t=k
   ḥr-tp tꜣ`); 9.6–8 = 16.12–14 (9.5 / 16.11 differ); 22.5–8 = 23.8–11 (22.1–4 does not repeat); 5.8 = 5.13? (only the shared half); 6.4 = 6.12 except the last word.
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
| AM 9.6; AM 16.12 | `r wsr m wḏꜣ` | `מעושר באוצר;` |
| AM 9.7; AM 16.13 | `ꜣḫ pꜣw.t.pl jw ḥꜣ.tj nḏm` | `מוטב עוגות כשהלבב נעים` |
| AM 9.8; AM 16.14 | `r wsr ẖr šnn` | `מעושר עמוס צער.` |
| AM 8.10; AM 13.9 | `tm ḥry.t jni̯=k` | `פן תביא אותך האימה.` |
| AM 22.5; AM 23.8 | `ḫr-rʾ-ꜥ bw rḫ=k sḫr.w n nṯr` | `ובכן, אינך יודע את עצות האל,` |
| AM 22.6; AM 23.9 | `tm=k ṯm ⟨m⟩ dwꜣw` | `פן תיכלם מחר.` |
| AM 22.7; AM 23.10 | `ḥmsi̯ n=k r ꜥ.wj pꜣ nṯr` | `שב לך בזרועות האל,` |
| AM 22.8; AM 23.11 | `r pꜣy=k gr (r) ḥdb=w` | `שתיקתך תפיל אותם.` |

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
| 9.5–8; 16.11–14 (9.6–8 = 16.12–14) | better poverty in the god's hand than riches in the storehouse; better bread with a happy heart than riches with sorrow | Prov 15:16–17, 16:8, 17:1 (`טוֹב … מִ־`) | the form `מוּטָב … מִ־` (§6.3); `אוֹצָר` |
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
| AM 18.21 | ok | `אל תעשה לך איפה הנוטלת שתיים,` |
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
| PT571 P/V/W.35 | ok | `טרם נהיו השמים, טרם נהייתה הארץ,` |
| PT571 P/V/W.35 | err | `בְּטֶרֶם נִבְרְאוּ הַשָּׁמַיִם` |
| PT571 P/V/W.35 | err | `כַּאֲשֶׁר לֹא הָיוּ שָׁמַיִם` |
| HC 3 | err | `וַיִּנָּחֶם רַא` |
| HC 3 | ok | `אָז אָמַר הוֹד מַלְכוּתוֹ אֶל אֲשֶׁר בְּעִקְּבוֹתָיו: קִרְאוּ לִי אֶת עֵינִי, וְאֶת שׁוּ` |
| HC 1 | ok | `[נִהְיָה, אֵפוֹא, שֶׁזָּרַח רַא], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ` |
| HC 1 | err | `[נִהְיָה, אֵפוֹא, שֶׁזָּרַח רע], הָאֵל שֶׁנִּהְיָה מֵעַצְמוֹ` |
| TB 1,7 | ok | `ושכב הוא` |
| TB 1,2 | err | `ושכב הוא` |
| TB 1,2 | ok | `והוא עושה לו בגדים` |
| TB 1,5 | err | `והוא עושה לו בגדים` |
| TB 3,8 | err | `ויחר אפו` |
| BD 25 | ok | `הוֹ נחא־חר, היוצא מרא־סטאו: לא הרגתי אדם.` |
| BD 25 | err | `הוֹ נחא־חר, היוצא מרא־סטאו: לא רצחתי אדם.` |
| BD 17 | err | `נקי אני` |
| SI B81 | ok | `ארץ טובה היא, יָאָא שמה; אין כמוה בארץ; יש בה תאנים` |
| SI B82 | ok | `ועמהן ענבים; רב בה היין מן המים, רב` |
| SI B80 | err | `ועמהן ענבים` |
| SS 61 | ok | `על פניי, ומצאתי: נחש` |
| SS 64 | err | `נחש הוא` |
| AM 7.12 | ok | `וְאַל תִּשְׁכַּב` |

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

### 10.2 Round 4 run 3, sub 1 – Amenemope part 2 (7.11–13.9), merged 2026-10-23
1. **Fixed lines (§7):** 9.6–9.8 = 16.12–16.14 and 8.10 = 13.9. **Correction of §6.3/§6.7 and §8:** the "better" saying is not a four-line refrain: 9.5 `ꜣḫ pꜣ nmḥ m-ḏr.t pꜣ nṯr` (`מוטב הדלות ביד האל`) and 16.11 `ꜣḫ ḥs.wt m mr.wt n rmṯ` differ; only 9.6–8 = 16.12–14.
2. **House 6:** rmni̯ = `הֵזִיז`, wḏ = `אֶבֶן־גְּבוּל`, hꜣd = `פָּלַשׁ`, ḫꜣr.t = `אַלְמָנָה` (as §4.3); 7.12 copies 1.19's Hebrew.
3. **Words:** jmꜣḫ "revered (dead)" = `נִכְבָּד` (3.5 bw-wꜣy moved to `רָם־מַעֲלָה` to keep it free); ḏbꜣ.t = `תֵּבָה` (11.4), jp.t = `אֵיפָה` (8.19) [cognate: loanwords]; ꜥḥꜥw "lifetime" = `מֶשֶׁךְ הַיָּמִים`; snk "be greedy" = `הִתְאַוָּה` (never `חָמַד`); sḫt "trap" = `צָד`; spḥ "lasso" = `לָכַד בְּלוּלָאָה`; nḥp "potter" = `קַדָּר` (`יוֹצֵר` stays qmꜣ's); ḥry.t "terror" = `אֵימָה`; ḫr.t "needs" = `מִחְיָה`.
4. **8.1** `j:jri̯=k sjꜣ r` with an object = `תַּכִּיר אֶת` (recognize); §3a's `הִזָּהֵר` stays for sjꜣ without an object.
5. **Ruling (ḫꜣꜥ):** `עָזַב` "leave, abandon" stays the rendering; ḫꜣꜥ "throw" (11.17, words thrown like a lasso) = `הִשְׁלִיךְ` – a split by sense of one Egyptian lemma whose two senses Hebrew must separate; noted at the line.
6. **Formula fix (egypt_tools.py):** the "better" formula no longer fires on the `r` inside `ḥr-r-rʾ` (8.16 had a `[סטייה מן הנוסחה]`).

### 10.3 Round 4 run 3, sub 1 – Amenemope part 3 (13.10–19.9), merged 2026-10-23 (the second translator)
1. **Verbs and nouns** (one Hebrew per lemma): shꜣ "pervert, cheat" = `עִוֵּת` (Lam 3:36, Amos 8:5 `וּלְעַוֵּת מֹאזְנֵי מִרְמָה` [equivalent]); sꜥḏꜣ = `זִיֵּף`; msḏj = `שָׂנֵא`, ḫbd = `מְגֻנֶּה`, bꜥꜣ = `מָאַס`; wšd = `בֵּרַךְ`, the greeting jꜣw.tw=k = `"הלל לך!"`; gꜣnjsꜣ = `כְּפִיָּה`; dns = `כָּבֵד` (`כְּבַד־מִשְׁקָל`); wḥm = `שָׁנָה`; mj.t = `דֶּרֶךְ`, wꜣ.t = `אֹרַח`; rʾ "part (of a measure)" = `פִּיּוֹת` (rʾ stays `פֶּה`); ḏbꜥ "to seal" = `טָבַע` (`חָתַם` stays ḫtm's); ḥjy = `פָּקִיד`; ꜣ.tj "have-not" = `חֲסַר־כֹּל` (the poverty words now: nmḥ `דַּל`, twꜣ `עָנִי`, jꜣd `אֻמְלָל`, zꜣw-ꜥ `חֲלַשׁ־זְרוֹעַ`, ꜣ.tj `חֲסַר־כֹּל`); swꜣ "pass by" = `חָלַף` (snj has `עָבַר`); ḫꜣj = `מָדַד`, ḫꜣ.y = `הַמּוֹדֵד`; pr-ḥḏ = `בֵּית־הַכֶּסֶף`; dḫj = `מִשְׁקֹלֶת`; ḏnw "threshing floor" = `מְדוּשָׁה` (ḫtjw keeps `גֹּרֶן`, 8.18); jꜥnꜥ = `בַּבּוּן`, Hbj = `הָאִיבִּיס`, Pr-Ḫmnw = `בֵּית־חֶמְנוּ`; rwḏ.w = `סוֹכֵן`; ꜥḥwtj "tenant" = `חוֹכֵר` (item 2).
2. **Collisions settled (the coordinator):** ꜥḥwtj `אָרִיס` → `חוֹכֵר` (19.4): `אָרִיס` is the Hebrew loan of Akkadian *errēšu* (the law corpus), and a cognate keeps its word (guidelines §5.2; this refines §10.1.8: an Egyptian word takes the Hebrew of its meaning, **but not a Hebrew word that is the cognate or loan of another corpus's source word**). rwḏ.w `סוֹכֵן` stays: in Gudea (*aĝrig*) and the Advice (*šatammu*) it is a sense rendering too.
3. **Loanword:** ktm.t "fine gold" = `כֶּתֶם` ★ [cognate: loanword] (§4.2, gated and always vocalized).
4. **ḫpr in the future** = `יִהְיֶה` (§4.4 amended: `נִהְיָה` has no living future).
5. **Open for part 5:** twr – 15.7 `הִנָּזֵר מִן` (with r); the sense "respect" (25.7, 25.9, 26.14, 27.12) is settled by the part-5 translator, one Hebrew if the Egyptian sense allows.
6. Fixed lines 16.12–14, 17.15–16 copied byte for byte; 13.16 = 15.21 `תועבת האל.`; 14.3 `תועבתו הגדולה`.

### 10.4 Round 4 run 3, sub 1 – Amenemope part 4 (19.10–24.20), merged 2026-10-23 (the second translator)
1. **Fixed lines (§7):** 22.5–22.8 = 23.8–23.11 (the refrain is these four lines; 22.1–4 does not repeat, §8 corrected in spirit).
2. **The court:** qnb.t = `מוֹעֶצֶת־הַשּׁוֹפְטִים` (not `בֵּית דִּין`: `דִּין` is the Hebrew cognate of Akkadian *dīnu*, §10.3.2; not `שַׁעַר`, which would manufacture Prov 22:22); smtr `חֲקִירָה`, mtr `עֵד`; mꜥbꜣ.yt "the (court of) Thirty" = `הַשְּׁלֹשִׁים` (gated by the number); wḥm.w "herald" = `מַזְכִּיר` [equivalent 2 Sam 8:16].
3. **Words:** fqꜣ `שָׂכָר` (§4.3), fꜣ.t "gift" `מַשְׂאֵת`, jnw `מַתָּנָה`; ḫtm `חָתַם` (§4.2); stꜣ "protector" = `מְגוֹנֵן` (TLA "Erlöser"; `גֹּאֵל` never, `מָגֵן` avoided); mnḫ (noun) `מַעֲלָה`, whꜣ `כִּשָּׁלוֹן`; rwj … rwj `לְחוּד … לְחוּד`; ḥrj "fear" `פָּחַד`, snḏ `חָשַׁשׁ`, mkḥꜣ `הִתְעַלֵּם`; šww `הֵרִיק`, ẖꜥꜣ `רוֹקֵן` (18.20 changed to `מרוקנת`); mꜣꜣ `חָזָה`, ptr `רָאָה`, nw `הִבִּיט`; sḏr `יָשַׁן`, qdd `נָם`; šfj.t `יְקָר` ★, nrw `מוֹרָא`; ꜥqw `פַּת`, tʾ `לֶחֶם`; wꜣḥ `שָׁת`; sbj "laugh at" `לָעַג` (Prov 17:5 `לֹעֵג`; `צָחַק` is *ṣiāḫu*'s cognate), pjṯꜣ `הִתֵּל`; qs `עֲצָמוֹת`; kꜣmn / nmw / qbqb, ꜥmꜥ.t / dḥꜣ, qd as §4.3.
4. **Settled by the coordinator (the translator's open points):** mnḫ `מַעֲלָה` beside 3.2 `מעלות` (stairs) and 3.5 `רם־מעלה` (rank) – three senses of one Hebrew noun, kept: each is the natural word and no line confuses them (noted, not a collision of one sense); 21.13 bjꜣ.t "oracle, wonder" = `מוֹפֵת?` stays (`נְבוּאָה` and `אוֹת` would import a reserved theme; the TLA's "Orakel" in the apparatus); 22.1 by its own sense, Prov 23:11 in the apparatus.

### 10.5 Round 4 run 3, sub 1 – Amenemope part 5 (24.21–28.1), merged 2026-10-23 (the second translator)
1. **twr, split by construction** (settled by the coordinator: no Hebrew verb holds all three senses): with r "keep apart from" = `הִנָּזֵר מִן` (15.7); with a direct object "respect" = `הוֹקִיר` (25.7, 25.9, 26.14); without an object "become pure" = `נִטְהַר` (27.12); noted at the lines. wꜣš "honour" = `כִּבֵּד` (26.13; ↔ Prov 14:31 `וּמְכַבְּדוֹ`).
2. **The ship words, one Hebrew each** (the translator found and fixed a collision of part 4's jmw with part 2's sk.tj): sk.tj `סְפִינָה`, kꜣr `סִירָה`, jmw `כְּלִי־שַׁיִט` (20.5), dp.t `אֳנִיָּה`; ḥmw "steering oar" `מָשׁוֹט`, ḥp.t `מְשׁוֹט־חֲתִירָה`, mḫn.t `מַעְבֹּרֶת`; 20.5–20.6 changed accordingly.
3. **Words:** ḏrḏr "stranger" = `נָכְרִי` (`גֵּר` never); ḥnq.t = `שֵׁכָר` ★ always vocalized (unvocalized it reads fqꜣ's `שָׂכָר`); šrj `זוּטָר`, kd `קָטָן`, nḏs "young, lesser" `צָעִיר` (in the age sense; §4.1's `אִישׁ פָּשׁוּט` for the commoner), ẖrd `נַעַר`; ꜣ.t "back" `גֵּו`; ḫm (noun) `בַּעַר`; šfd "book, scroll" `סֵפֶר`; splits by sense noted at their lines: wꜣḥ `חָדַל` (26.10, beside `שָׁת` 23.14), bꜥꜣ "waive (a fare)" `פָּטַר` (27.5), šdj "extract" `חִלֵּץ` (27.4).
4. **27.7** `ראה לך את שלושים הבתים האלה:` (ptr n=k = `רְאֵה לְךָ`; §6.1's `שְׁלֹשִׁים הַבָּתִּים הָאֵלֶּה` kept inside it); **27.16–17** `הנה סופר שהוא בקי במשרתו –` / `ימצא את עצמו ראוי להיות רֵעַ (המלך) […].` (`מָהִיר`, `מְלָאכָה` only in the apparatus).
5. **Gate fix:** the `יאור` licence now includes the spelling `jwtwr` (26.16; the same TLA lemma tla33370 as 27.2).

### 10.6 Review pass (a), fidelity, the whole text (2026-10-23)
1. **A converter bug found by the reviewer:** `egypt_tools.py` `_alt_gaps` printed AED's `<gap/>` between two **multi-word** analyses as `[…]`, so the drafts showed eight false lacunae and translated both analyses side by side (14.7, 16.8, 18.12, 22.2, 22.4, 23.16, 25.15, 27.8; the notes at 22.2, 22.4, 25.15 called it a scribal doubling). Fixed: every single gap inside an AM line is now ` / ` (14.10 too: the TLA's German marks no loss); each line is translated once, with the other analysis in the פירוק. 22.2 / 22.4 read "he injured me" (`פגע בי`), not the TLA's first "I injured": the man seeking a patron is the victim, and 22.8's "them" are those who harmed him.
2. Fidelity fixes: 8.4 `נלקחו` (passive sḏm=f, past), 8.19 `שנתן` (jw + sḏm=f, past circumstantial), 10.6 `אל תשמח לך` (n=k restored), 13.5 `שהוא נצמד אליו` (the relative form's subject), 16.16 `(את עצמך)` (not written). No negation or tense misread in the whole text.
3. The §9 gate sample of 18.21 aligned with the drafted line (`הנוטלת שתיים`).

### 10.7 Review pass (b), consistency (2026-10-23)
1. **Throw / leave:** ḫꜣꜥ = `עָזַב` in all its lines; ḫꜣꜥ "throw (words)" 11.17 = `הֵטִיל` (not `הִשְׁלִיךְ`, which is qmꜣm's, 9.10; qmꜣm "rush" 22.18 `הִסְתָּעֵר` by sense). Supersedes §10.2.5.
2. **wꜣḥ, split by sense:** `שָׁת` "set" (2.3, 23.14), `הִשְׁאִיר` "leave behind" (10.9), `הִרְפָּה מִן` "leave off" (26.10); `חָדַל` is jꜣb's alone (17.1). Supersedes §10.4.3 / §10.5.3 on wꜣḥ. rḏj "let" = `הִנִּיחַ` (`אַל תַּנִּיחַ`).
3. ḫꜣb "bow" = `הִרְכִּין` (5.12, 25.11); bgꜣ "be slack?" = `הִתְרַשֵּׁל` (4.10; qbb and ṯnj keep `חָלַשׁ`); 11.19 = 25.4 `איש כשיעורך`; `הַשֵּׁכָר` (9.2) and `אֵל` (18.2) vocalized.
4. **The cognate rule of §10.3.2, narrowed (the coordinator):** it applies to **loanwords and rare technical words** whose very presence would suggest a lexical contact with another language (`אָרִיס` < *errēšu*), not to the **common Semitic vocabulary** that every corpus uses for its own word: `אַלְמָנָה` (Akk. *almattu*), `שֵׁכָר` (*šikaru*), `מִדָּה` (*maddattu*), `טִיט` (*ṭiṭṭu*), `תֶּבֶן` (*tibnu*), `כָּבֵד` (*kabtu*) are shared words: in an Akkadian line they carry [cognate], in an Egyptian line [equivalent] (Egyptian has no cognate), and the comparisons with Prov 23:10, Lev 19:35, Job 33:6, Ex 5:7 stand.

### 10.8 Round 4 run 3, sub 2 – Merikare E130–138 and the Pyramid Texts 571, 486, 527, 600, merged 2026-10-23 (translator 1)
1. **Names:** Nfr-kꜣ-Rꜥ `נֶפֶרְכָּרֶע`, Mry-Rꜥ `מְרִירַא`, Nmtj-m-zꜣ=f `נֶמְתִּי־אֶם־סָאֶף`, Srq.t `סֶרְקֶת`, Atum-Khepri `אָתוּם־חֶפְּרִי`; Ḥw.t-bnw `בֵּית־הַבֶּנוּ`, sḫ.t-ḥtp `שְׂדֵה־הַקּוֹרְבָּנוֹת` (plene), nn.t `שְׁמֵי־הַמַּטָּה`.
2. **The Heliopolitan words:** psḏ.t (the Ennead) = `התשיעייה` (plene), psḏ.t ꜥꜣ.t = `התשיעייה הגדולה`, the dual `שתי התשיעיות`; bnbn = `הַבֶּנְבֶּן`; qꜣꜣ "the high hill" = `גִּבְעָה` and qꜣj = `גָּבַהּ` (the sound-pun `גבהת כגבעה`; qꜣj of nails, PT486 59, `ארך` – a split by sense); kꜣ = `כָּא`, ꜥ kꜣ = `זרוע־כָּא`; mḥr = `פירמידה` (as AM 2.9).
3. **Verbs:** wdj "put" = `שָׂם` (sharing rḏj's "put"; rḏj "give" = `נָתַן`, rḏj "let" = `הִנִּיחַ`); dr "drive away" = `הִרְחִיק` (MK E130; `הָדַף` stays ḫsf's); ḥḏj = `הִזִּיק לְ־` (MK E132, as AM); ṯs "join, tie" = `קָשַׁר` (MK E133; ṯsj "raise" = `הֵקִים`); mꜣꜣ = `חָזָה` (MK E133, as AM); dnḫnḫ = `סוֹכֵךְ`; nḏ "protect" = `שָׁמַר` (nḏ ḥr, the greeting, = `שָׁלוֹם לִפְנֵיכֶם`: a split by construction); ḫwj + ḫpr = `הֵגֵן לְבַל יִהְיֶה`; ḏꜣj "ferry across" = `צָלַח` (2 Sam 19:18). The Akkadian corpora's reservation of the root שמר (for *naṣāru* = `נָצַר`) binds Akkadian words only (§10.1.8).
4. **Nouns and particles:** ẖnnw = `מְרִיבָה`; snḏ (noun) = `יִרְאָה`; j.ḫm-sk = `בִּלְתִּי־כָלֶה`; n-ḏ.t-ḏ.t = `עֲדֵי עַד`; hꜣ = `הוֹי`; the particle m "behold" = `הִנֵּה`; sꜣ-ꜥ / zꜣw-ꜥ = `חֲלַשׁ־הַזְּרוֹעַ` in MK too.
5. **The rubric** `ḏd-mdw zp N` = `דְּבָרִים לֵאמֹר, N פְּעָמִים:` (a variant of §6.5).
6. **Ruling (the coordinator) – kꜣ.t "work" (tla163020) = `מְלָאכָה`**, not translator 1's `מפעל` (Modern "factory"): `מְלָאכָה` is the natural Hebrew for a god's or a builder's work (Ex 36 of the Tabernacle's building), and the Memphite Theology's "work" beside "Ptah rested" then shows Gen 2:2 `מְלַאכְתּוֹ` as an [equivalent] (as Akkadian *šipru*, guidelines §6.7). kꜣ.t "thought" (tla162980) keeps `מַחֲשָׁבָה` (§4.4). PT600's lines are aligned by translator 1 in its next part.
7. **The Merikare dossier aligned:** E130, E132–E136 of `../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-MK.rtl.md` now carry this project's Hebrew (dr `הרחיק`, ḥḏj `הזיק ל־`, mꜣꜣ `חזה`, ṯs `קשר`, sꜣ-ꜥ `חלש־הזרוע`, the base's brackets, plene `תאוות` / `המאורעות`); its notes adjusted; `dossier_tools.py verify --strict` 0 problems.
### 10.9 Round 4 run 3, sub 2 – the Memphite Theology (1a–64), merged 2026-10-23 (translator 1)
1. **ḥtp = `נָח` in every verbal use** (MT 9, 15c, 29b, 59, 60, 61): Ptah's rest (59) is the same word as the reconciliation of Horus and Seth; the noun of the heart's content `נַחַת` (60); ḥtp / ḥtp.t "offering" = `קָרְבָּן`. The root שבת only in the apparatus.
2. **The theology's words:** kꜣ.t = `מְלָאכָה` (§10.8.6; 57 `כל מלאכה וכל חרושת`); ḥmw.t "craft" = `חֲרֹשֶׁת` (`אָמָּנוּת` would bring the loan `אָמָּן` < *ummânu*); kꜣꜣ.t "thought" = `מַחֲשָׁבָה`; wḏ.t-mdw = `צִוּוּי־דְּבָרִים`; md.t-nṯr = `דְּבַר־אֵל`; pr.t m ns = `מוֹצָא הַלָּשׁוֹן`; ꜥrqj.t = `הֲבָנָה`; mꜣṯ "devise (a name)" = `הָגָה`; the theology's heart is ḥꜣ.tj `לֵבָב` throughout (jb `לֵב` in 60–61).
3. **Verbs and nouns:** swt = `הוּא` (the independent pronoun, with El Hawary); jꜥb = `אָסַף`; dmḏ = `צֵרֵף` (smꜣ = `אִחֵד`); snsn = `הִתְחַבֵּר`; ẖnm = `דָּבַק`; wpj-ẖ.t "first-born" = `פֶּטֶר־בֶּטֶן` (Ex 13:2 `פֶּטֶר רֶחֶם` [equivalent]); jwꜥ.t / jwꜥw = `יְרֻשָּׁה` / `יוֹרֵשׁ`; msḫn.t = `אָבְנַיִם` (Ex 1:16 [equivalent]); ḫm "shrine" = `דְּבִיר`; ḏ.t "body" = `גְּוִיָּה`.
4. **Names and titles:** Zkr `סוֹכַּר` ★ (always vocalized: "sugar"); Nn.t `נוּנֶת`; Nfr-tm `נֶפֶרְתֵּם`; Wpj-wꜣ.wt `וֶפְּוָאוֶת`; Ḥw.t-kꜣ-Ptḥ `בֵּית־כָּא־פְּתָח`; njsw.t-bjtj `מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן`, bjtj `מֶלֶךְ־הַצָּפוֹן`; tꜣ-šmꜥw / tꜣ-mḥw `אֶרֶץ־הַדָּרוֹם` / `אֶרֶץ־הַצָּפוֹן`.
5. **Rubrics:** `ḏd-mdw X ḫft Y` = `דְּבָרִים לֵאמֹר, X אֶל Y:`; the scene labels `חוֹרוּס: הַצָּפוֹן.`; the stone's empty space (Spatium) `( )` = `(רווח ריק)`.
6. **Gates widened (the coordinator):** the `גבול` licence now includes El Hawary's spelling `ṯꜣš` (MT 9), the `דמות` licence `tj.t` (MT 53); the two `[היתר שער]` notes removed.
7. The transcription (TSV) checked against the page images at the flagged points (30b `[Stš]`, 61 `šnw.t`, 59 `Ḏḥwtj`): no error found.
### 10.10 Round 4 run 3, sub 2 – the Heavenly Cow, columns 1–48, merged 2026-10-23 (translator 2)
1. **The Cow's formulas:** `ḏd.jn ḥm n X` = `אָז אָמַר הוֹד מַלְכוּת X`; `ḏd.jn=sn ḫft ḥm=f` = `אָז אָמְרוּ נֹכַח הוֹד מַלְכוּתוֹ`; `nṯr.t tn` = `הָאֵלָה הַזֹּאת`; the aetiologies `ḫpr X pw` = `כָּךְ נִהְיָה X` (gender and number); `jy.wj m-ḥtp` = `בּוֹאִי בְּנַחַת` (the ḥtp family stays in נוח).
2. **Names:** Ꜣbw (Elephantine) `יֵב` ★ (the name of the Aramaic papyri's colony; not a biblical name); Nn-nsw (Herakleopolis) `חָנֵס` [equivalent Isa 30:4]; Jmꜣw `אִימָאוּ`; Ḥḥ.w `אֵלֵי־חֶח` ★; ḥnsktj `בַּעַל־הַצַּמָּה`.
3. **Words:** md.t "plot" = `דָּבָר` (the same lemma as AM's "word"); smꜣ `הָרַג`, šꜥ.t "slaughter" `טֶבַח`; mkj "protect" `נָצַר` (Egyptian: the Akkadian *naṣāru* reservation binds Akkadian only, §10.1.8); šbb.t "mash" `בְּלִיל` (Sekhmet "the mash of the night", 15; the beer mash, 18); sḏr.t "sleeping-draught" `מַשְׁקֵה־שֵׁנָה`; wꜣj "plot" `חָרַשׁ (רָעָה)`; wrd "be weary" `עָיֵף`; jḥ.t / jd.t `פָּרָה` / `עֶגְלָה`; ḥr.t "the upper sky" `מָרוֹם`; mnꜥ / mnꜥ.t `אָמַן` / `אוֹמֶנֶת`; ḥḥ "millions" `אַלְפֵי אֲלָפִים`; wjꜣ (the sun's bark) `צִי` ★ (Isa 33:21; every other ship word is taken, §10.5.2); ḥmy.t "rudder" `הֶגֶה` ★.
4. **Collision settled (the coordinator):** fꜣj "lift, carry" = `נָשָׂא` (21, 35 and later; fꜣj ḥr = `נָשָׂא פָּנִים`, the Hebrew idiom); rmni̯ "carry (on the shoulders)" in PT486 59–60 moves from `נשא` to `סָבַל` (`יסבלו`), a split by sense from AM's rmni̯ "remove" `הֵזִיז` (noted at the lines).
5. **Kept, recorded:** psḏ (MK E135) and sꜣ (the cow's back, HC) both `גַּב` – two Egyptian words for the same body part, never in one line; AM's ꜣ.t keeps `גֵּו`.
6. **Echo control held:** Re's change of heart is rendered only in the Egyptian's words (15 "Do not diminish them!", 20 "I will protect mankind from her", 27 "my heart is very weary of being with them"); the beer "fills" the fields (mḥ `מִלֵּא`); the flood only in the notes. The Tutankhamun shrine has nothing of 1–48 (Hornung p. 33: only his verses 202–234, 306–312 and the cow's picture); its differences in the cow drawing (44–48) are noted from Hornung's notes 114–120.
### 10.11 Round 4 run 3, sub 2 – the Heavenly Cow, columns 49–95, merged 2026-10-23 (translator 2)
1. **The ba:** `בָּא` ★, plural `בָּאִים` ★ (`בָּאוֹת` rejected); `הַבָּא` and its prefixed forms always vocalized; `אֵלוֹ` "his god" vocalized.
2. **Serpents and magic:** ḥfꜣw / ḥfꜣ.t = `נָחָשׁ` (the dossier's comparison word for every culture's serpent; `תַּנִּין` never); msḥ.w `תִּמְסָחִים`; ḥkꜣ.w "magic" = `קְסָמִים`; the TLA's "magician" lemma = the god `חֶקָא` where it is one being (60, 87–90), `קוֹסְמִים` in the plural (95) – a split by number, recorded; ꜣḫ.w "spells, efficacy" = `סְגֻלּוֹת`.
3. **Thoth and the court:** s.tj "deputy" = `מְמַלֵּא־מָקוֹם` (keeps the pun on s.t `מָקוֹם`); ṯꜣtj = `וְזִיר` (the cross-corpus word of *sukkallu*: [equivalent] here); the second ibis word and the baboon word transliterated (`תְּחֶנִי`, `עַנְעַן`; `בַּבּוּן` is AM's jꜥnꜥ).
4. **Purity:** wꜥb = `טָהוֹר` (AM 27.12's twr "become pure" `נִטְהַר` shares the root: kept, two Egyptian words of purity, never in one line); bd "natron" = `בֹּרִית` (Jer 2:22; `נֶתֶר` kept free); j-gr.t "the silent land" = `הַשּׁוֹתֶקֶת` (the root of AM's gr `הַשּׁוֹתֵק`); ẖr.t-nṯr = `נַחֲלַת־הָאֵל`.
5. **Eternity:** nḥḥ / ḏ.t = `נֶצַח` / `עַד`; as two divine names `נֶצַח וָעַד`. Column 49 `jw=j jm=j` "I am there (as) I" = `אֲנִי (הוּא) אֲנִי` (Hornung's "Ich bin, der ich bin" has a verb and a relative the Egyptian lacks; Ex 3:14 in the apparatus).
6. **Gate widened (the coordinator):** `השיג` (Hifil of נשג "reach") is no longer caught by the סוג / נסג gate; it is licensed by pḥ "reach" (MK E138, HC 29, 94) in its own gate.
7. Part 1 aligned by the translator: 26 `*המצב*?`, 28 `שולט` (`שַׁלִּיט` is ḥqꜣ's word).
### 10.12 Review pass (b), consistency, projects 2–3 (2026-10-24)
1. **New fixed words** (each the earlier text's word where one existed): šꜣs "hasten" `שׁוּט` (HC 17, 57; `רוּץ` stays sjn's); wḏꜣ "go, proceed" `נָסַע` (MT 28b, HC 33; `הָלַךְ` is šm's); ꜥḥ "palace" `אַרְמוֹן` (MT 64, HC 34), stp-sꜣ `בֵּית־הַמֶּלֶךְ`, šny.t `חָצֵר`; wpj "judge between" `פָּסַק (בֵּין)` (MT 7, 12a; AM 8.12); swḏ "hand over" `מָסַר` (MT 53; AM 21.17); smn `קָבַע` (HC 85; AM, PT486); ḥꜣw "abundance" `שֶׁפַע` (HC 81; AM); jḫ.t "property" `רְכוּשׁ` (HC 83; AM); ꜣḫ.w (HC 57) `גְּבוּרוֹת` (`סְגֻלָּה` is the law corpus's cognate of *sikiltu*: §10.11.2's `סְגֻלּוֹת` withdrawn); ḫw "deeds" `מַעֲלָלִים` (HC 35; the root זמם is MK E136's ẖꜣk.w-jb); njsw.t paired with bjtj = `מֶלֶךְ־הַדָּרוֹם` (MT 4, 8; the title njsw.t-bjtj `מֶלֶךְ־הַדָּרוֹם־וְהַצָּפוֹן` as §10.9.4); sꜣ-Rꜥ `בֶּן רַא` (MT, HC 95); mꜣꜣ `חָזָה` (HC 74, as §10.8.3).
2. **Splits by sense, recorded at the lines:** njs `קָרָא` / `הִכְרִיז`; šdj `קָרָא` / `חִלֵּץ`; qmꜣ `יָצַר` / `הִשְׁלִיךְ` (qmꜣm, AM 9.10); ḫpš `שׁוֹק` / `כָּתֵף`; spr `הִגִּיעַ` / `הִתְיַצֵּב`; pḥ `הִגִּיעַ` / `הִשִּׂיג`; ḥꜣ `סָבִיב` / `מֵאֲחוֹרֵי`.
3. **Two lemmas in one Hebrew word, kept (never in one line):** wꜣj / ḥrj `רָחוֹק`; zꜣw / nḏ `שָׁמַר`; šww (AM 13.3) / sšp `אוֹר`; bw / s.t `מָקוֹם`; md.t / jḫ.t `דָּבָר` (besides §10.10.5, §10.11.4).
4. **Spelling:** the formula of §6.5 keeps the fixed spelling `דברים לאמר:` (the verifier's form, the biblical spelling of the infinitive); elsewhere the plene `לאמור` (AM, HC) – both accepted. Plene in vocalized words: `שְׂדֵה־הַקּוֹרְבָּנוֹת`, `קורבן`, `אוֹדֶם`, `אמיתי` (§4.1's `אֲמִתִּי` strips to the plene `אמיתי` in drafted lines).
5. **Changed (2026-10-30 harmonization, row 8):** ẖr.t-nṯr = `חֶלְקַת־הָאֵל` (HC 93; was `נַחֲלַת־הָאֵל`, kept here earlier by the coordinator): *ẖr.t* is "portion, possession"; `נַחֲלָה` is the Ugaritic *nḥlt*'s cognate (Mot's land, KTU 1.4 VIII), and `נַחֲלַת ה'` would read as the biblical inheritance (a false echo). **Kept (the coordinator, §10.7.4):** MT's `פֶּטֶר־בֶּטֶן` (common Hebrew, not a loan or rare technical word).
### 10.13 The fifth-day dossier's Egyptian additions (WC: pWestcar, the wax crocodile; AP: pBremner-Rhind, Apophis), 2026-10-24
In `../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/` (KEYs `WC`, `AP`), following this corpus: msḥ `תִּמְסָח`, ḥf / ḥfꜣw `נָחָשׁ`, Re `רַא` ★, ḥry-tp `חַרְטֹם` [cognate: loanword] (the full title `הַכֹּהֵן־הַקּוֹרֵא הַחַרְטֹם`), ḫꜣꜥ "throw" `הֵטִיל` (§10.7.1), ḫpr m `נִהְיָה לְ־`, šꜣs `שׁוּט` (§10.12.1; its past `שָׁט` shares the letters of MK E133's sqdj `שָׁט` "sails" – two verbs, never in one line), sḏ.t `שַׁלְהֶבֶת`, ḫ.t `אֵשׁ`, sḫr "overthrow" `הִכְרִיעַ`, mḏꜣ.t "book" `מְגִלָּה`; new: mnḥ "wax" `שַׁעֲוָה`, š "lake" `אֲגַם`, ḏꜣ.t "depth" `עֹמֶק`, ḥry-pr "steward" `סוֹכֵן הַבַּיִת`, hbnj `הָבְנִים` [cognate: loanword, Ezek 27:15]. The dossier's own gates check them.

- **2026-10-30 harmonization** (`../harmonization--2026-10-30.md`, row 8): ẖr.t-nṯr = `חֶלְקַת־הָאֵל` (was `נַחֲלַת־הָאֵל`; §10.12 item 5). Changed line: HC 93 `חי בנחלת־האל` → `חי בחלקת־האל` (gloss and note; the parallels indexes rebuilt).

## 11. The tales and Book of the Dead 125 (Round 5 run 6, 2026-10-31; fixed by the coordinator before the first line)

**Why here, not a new corpus.** The tales share this corpus's language (Middle Egyptian: Sinuhe, the Shipwrecked Sailor,
Westcar, BD 125; Late Egyptian: the Two Brothers, as Amenemope), its base (AED-TEI), its tool and its renderings; BD 125's
forty-two denials are the other face of Amenemope's ethics ("no one is sinless"), and Westcar's wax crocodile is
already in the fifth-day dossier from this corpus's words. A new corpus would have duplicated the renderings and
opened splits for the lead to harmonize; the folder name stays (renaming breaks the print stubs), `corpus.md` says
that it now holds the tales too.

### 11.1 The texts (KEYs)
| KEY | Text | Base (AED-TEI) | Lines (labels) | Project |
|---|---|---|---|---|
| TB | The Tale of the Two Brothers, pD'Orbiney (pBM EA 10183) recto, Late Egyptian, c. 1200 BCE (Seti II) | `AED-TEI/Two-Brothers--pDOrbiney-BM-EA-10183/` | 185 (page,line `1,1`–`19,10`, the colophon `20,1`) | `4-מעשה-בשני-האחים/` |
| WE | The Tales of pWestcar (pBerlin P 3033), the end of a tale, the tales of Nebka's and Snefru's time, Djedi, the birth of the three kings | `AED-TEI/Westcar--pBerlin-P-3033/` | 305 (`1,1-11`, `1,12` … `12,25`) | `5-פפירוס-וסטקר/` |
| BD | The Book of the Dead, chapter 125 (the hall of the Two Truths, the negative confession), pNu (pBM EA 10477), 18th dynasty | `AED-TEI/BD-125--pNu-BM-EA-10477/` (+ pJuja, pMaiherperi: `data BD --wit`) | 115 (`1`–`115`) | `6-ספר-המתים-125/` |
| SI | The Story of Sinuhe: R 1–23 (pBerlin P 10499, the opening lost in B), then B 1–311 (pBerlin P 3022) | `AED-TEI/Sinuhe--pBerlin-P-10499-R/`, `…-3022-B/` (+ the Ashmolean ostracon AOS: `--wit`) | 334 (`R1`–`R23`, `B1`–`B311`) | `7-סינוהה/` |
| SS | The Shipwrecked Sailor, pPetersburg 1115 | `AED-TEI/Shipwrecked-Sailor--pPetersburg-1115/` | 191 (`1`–`189`, `30-31`, `40-41`) | `8-המלח-הנטרף/` |

Sinuhe: R 24 = B 1 (`njs.n=tw n wꜥ jm …`); B's Amherst fragments (`Am.`, `An.` …: its lost start, parallel to R)
and AOS (the Ramesside ostracon, nearly the whole text) are witnesses for the apparatus. **pWestcar 2,21–4,7** (the
wax crocodile, 27 lines) is the fifth-day dossier's excerpt WC: the WE file copies the dossier's `>` lines byte for
byte (`verify WE` checks it); the dossier is **not** edited from here: a revision is written in the WE entry as
`[סטייה מן התיק: <reason>]` and listed for the lead.

### 11.2 Names (★ = always vocalized)
| Egyptian | Hebrew | Notes |
|---|---|---|
| Jnpw (Anubis, the elder brother) | `אַנוּבִּיס` | the Greek form (familiar); the god's name, borne by a man |
| Bꜣtꜣ (Bata, the younger) | `בָּטָה` | a god of Saka (the 17th nome); "the ba of the land"? (a note) |
| Ḫnmw (Khnum) | `חְנוּם` (§3.1) | he "builds" Bata a wife (qd = `בָּנָה`: Gen 2:22 `וַיִּבֶן` [equivalent], §11.3) |
| the Seven Hathors (Ḥw.t-Ḥr 7) | `שֶׁבַע הַחַתְחוֹרוֹת` | the fate-decreeing goddesses |
| pꜣ jn.t pꜣ ꜥš (the Valley of the Cedar) | `עֵמֶק הָאֶרֶז` | ꜥš = `אֶרֶז` [equivalent] (the conifer of Lebanon; cedar / pine / fir debated: a note) |
| Snfrw, Ḫwfw, Ḏd-f-Rꜥ, Ḫꜥ-f-Rꜥ, Bꜣw-f-Rꜥ, Ḥr-ḏd-f | `סְנֶפְרוּ`, `ח׳וּפוּ`, `גֶ׳דֶפְרַא`, `חַעֶפְרַא`, `בָּאוּפְרַא`, `חוֹרְגֶ׳דֶף` | Khufu: Herodotus's Cheops (a note); ḫ = ח (§2.2), `ח׳` only to tell Khufu from a Hebrew word |
| Nb-kꜣ, Ḏsr, Ḏd(j), Wbꜣ-jnr, Ḏꜣḏꜣ-m-ꜥnḫ | `נֶבְּקָה`, `גֶ׳וֹסֶר`, `גֶ׳דִי`, `וֶבָּאוֹנֶר` (the dossier's), `גָ׳אגָ׳אאֶמְעַנְח` | |
| Rd-ḏd.t; Wsr-kꜣ=f, Sꜣḥ-Rꜥ, Kꜣkꜣj | `רוּדְגֶ׳דֶת`; `וֹסֶרְכָּאֶף`, `סָאחוּרַא`, `כָּאכָּאי` | the three kings' mother and the kings |
| Zꜣ-nh.t (Sinuhe) | `סִינוּהֶה` | "son of the sycamore" (a note); the Hebrew usage |
| Z-n-wsr.t, Jmn-m-ḥꜣ.t | `סֶנוּסֶרֶת`, `אַמֶנֶמְחַת` | `שְׂנֻסֶרֶת` rejected |
| Rṯnw (Retjenu), Jꜣꜣ (Yaa), Qdm (Qedem), Kpnj (Byblos) | `רֶצֶ׳נוּ`, `יָאָא`, `קֶדֶם` ★, `כֶּפֶּנִי` | Qedem: the Bible's `קֶדֶם` (Gen 25:6, 29:1 `אֶרֶץ בְּנֵי קֶדֶם`) [equivalent], always vocalized ("east, before"); Byblos = `גְּבַל` (Ezek 27:9) in the note |
| ꜥmw-nnšj (Ammunenshi) | `עַמּוּנֶנְשִׁי` | the West Semitic name in the note (*ʿAmmu-…*) |
| ꜥꜣm.w (Asiatics) | `הָעַאמוּ` | transliterated (a people word; "Asiatics" a note); not `עַם`, not `כְּנַעֲנִים` |
| ḥqꜣ (ruler) | `שַׁלִּיט` (§10.11.7) | `ḥqꜣ ḫꜣs.wt` "ruler of the foreign lands" = `שַׁלִּיט אַרְצוֹת־הַנֵּכָר` (the source of "Hyksos": a note) |
| the island's serpent (SS) | `הַנָּחָשׁ` | ḥfꜣw = `נָחָשׁ` (§10.11.2; the dossier rule) |
| the "Lord of Punt" (SS), Pwnt | `פּוּנְט` | |
| Wsjr NN (BD: "the Osiris Nu") | `אוֹסִירִיס נוּ` | the dead man becomes "an Osiris" (a note); the scribe's lost name `[…]` |

### 11.3 Key terms (one Hebrew per lemma; first the Bible-sensitive ones)
| Egyptian | Hebrew | Tag / note |
|---|---|---|
| sḏr "lie, sleep"; nk "copulate" | `שָׁכַב`; `שָׁכַב עִם` | the only words for the root שכב (gate): Gen 39:7, 12 `שִׁכְבָה עִמִּי` [equivalent] |
| ḥbs "clothes, garment" | `בֶּגֶד` / `בְּגָדִים` | the only word for `בֶּגֶד` with dꜣjw, mnḫ.t (gate); Gen 39:12–18 [divergence]: no garment in the wife's hand in TB |
| qd "build" | `בָּנָה` | as AM; Khnum "builds" a wife (Gen 2:22 [equivalent]) |
| ḥm.t "wife, woman" | `אִשָּׁה` | ḥm.t ṯꜣy "a man's wife" = `אֵשֶׁת אִישׁ` (Lev 20:10 [equivalent]) |
| ḥm=f; pr-ꜥꜣ | `הוֹד מַלְכוּתוֹ`; `פַּרְעֹה` [cognate: loanword] | as §4.2 (TB writes pr-ꜥꜣ 17 times: the Bible's own word for the king, from this period) |
| ꜥḥꜥ.n (narrative) | `וְאָז` (the dossier's WC `ואז`) | `ḏd.jn X` = `אָז אָמַר X` (§10.10.1) |
| bjꜣ.yt "wonder, marvel" (WE) | `פֶּלֶא` | Ex 15:11 `עֹשֵׂה פֶלֶא` [equivalent] |
| ḥkꜣ.w "magic"; šdj "recite" | `קְסָמִים` (§3.1); `קָרָא` (§10.12.2) | |
| ẖry-ḥb (ḥry-tp) | `הַכֹּהֵן־הַקּוֹרֵא (הַחַרְטֹם)` | the dossier's; ḥry-tp = `חַרְטֹם` [cognate: loanword], Ex 7:11 |
| msḥ | `תִּמְסָח` | never `תַּנִּין` (§5.1) |
| mw "water"; š "lake" | `מַיִם`; `אֲגַם` | the dossier's |
| mꜣꜥ.t; jzf.t; wꜥb | `אֱמֶת`; `עָוֶל`; `טָהוֹר` | §4.1; jzf.t (the opposite of Maat) = `עָוֶל` (Deut 32:4 `אֵין עָוֶל` in the note); wꜥb as HC (§10.11.4); `נָקִי` never in a tale (gate) |
| BD's `n jri̯=j X` | `לֹא עָשִׂיתִי X` | the negated past; one Hebrew verb per Egyptian verb through the 42 denials |
| smꜣ "kill"; ṯꜣw/jṯꜣ "steal"; grg "lie" | `הָרַג`; `גָּנַב`; `כָּזָב` (§11.6: ꜥḏꜣ keeps `שֶׁקֶר`) | Ex 20:13–16 [equivalent] in the apparatus; `רָצַח`, `נָאַף`, `חָמַד` never (gate) |
| nmḥ; ꜥwꜣ "rob"; nḥm "take away; save" | `דַּל` (§4.3); `גָּזַל`; the translator fixes nḥm (precedent AM 1.11 `להצילו`), by sense if needed, recorded | |
| wsḫ.t (hall) n.t Mꜣꜥ.tj | `אוּלַם שְׁתֵּי הָאֱמֶת` | "the Two Truths": a note |
| ḥsb qd.w "the reckoning of characters" | `חֶשְׁבּוֹן הַמִּדּוֹת` | |
| ḫꜣs.t | `מִדְבָּר` (HC); ḫꜣs.wt "foreign lands" `אַרְצוֹת־הַנֵּכָר` | split by sense (a desert hill / a foreign country), recorded at the lines |
| the seven species (SI B81–83) | dꜣb `תְּאֵנָה`, jꜣrr.t `עֲנָבִים`, jrp `יַיִן`, bj.t `דְּבַשׁ`, bꜣq `שֶׁמֶן־זַיִת`? / ḏd.t `זַיִת`, jt `שְׂעוֹרָה`, bd.t `כֻּסֶּמֶת` | Deut 8:8 [equivalent]: each word gated to its Egyptian word |
| tꜣ pw nfr (SI B81) | `אֶרֶץ טוֹבָה הִיא` | nfr = `טוֹב` (§5.2): Deut 8:7 `אֶרֶץ טוֹבָה` [equivalent] |
| qrs "bury", qrs.w "burial", wt "coffin" | `קָבַר`, `קְבוּרָה`, `אָרוֹן` | Gen 50:26 `וַיִּישֶׂם בָּאָרוֹן` [equivalent]; Gen 47:30, 50:5 (burial in the homeland); ḏbꜣ.t (chest, coffin) = `תֵּבָה` only (§4.2) |
| jꜣw.t "old age"; ḥꜣ.t-zp / rnp.t | `זִקְנָה`; `שָׁנָה` | Djedi's 110 years (WE 7,2): Gen 50:26 `בֶּן מֵאָה וָעֶשֶׂר שָׁנִים` [equivalent: the Egyptian ideal life span] |
| kꜣ, bꜣ | `כָּא` ★, `בָּא` ★ | §3.1 |

### 11.4 Reserved and gated in the tales (`TALES` in `egypt_tools.py`; added to §5)
Never in a tale line: the roots מאן / סרב (Gen 39:8), חרה (39:19), `סֹהַר` (39:20), `עִבְרִי`, the root בקע (Ex
14:16, 21), `נֵד` (Ex 15:8), the root גזר (Ps 136:13), the roots רצח / נאף / חמד (Ex 20), `נָקִי` and `בַּר לֵבָב`
(Ps 24:4), `נֶשֶׁךְ` / `תַּרְבִּית` (Ps 15:5), `אוֹנִי` (Deut 26:14), the root בער (Deut 26:13), `זָבַת` (Ex 3:8). Only for
their Egyptian word: the root שכב (sḏr, nk), `בֶּגֶד` (ḥbs …), the root צחק (sbṯ), `חוֹמָה` (jnb, sbtj), `יַבָּשָׁה` /
`חָרָבָה` (šwi̯, wšr), `נָחָשׁ` (ḥfꜣw …), the Deut 8:8 words (`תְּאֵנָה` dꜣb, `גֶּפֶן` / `עֲנָבִים` jꜣrr.t, `דְּבַשׁ` bj.t,
`זַיִת` ḏd.t / bꜣq). And everything of §5.1–§5.2.

### 11.5 Formulas
1. BD 125 B (21–62): `j X pri̯ m Y n jri̯=j Z` = `הוֹ X, הַיּוֹצֵא מִ־Y: לֹא עָשִׂיתִי Z.` (the vocative `j` = `הוֹ`, §3a;
   `pri̯ m` = `הַיּוֹצֵא מִ־`; the denial's verb by its own Egyptian verb). Fixed by its first line (21); checked by the
   verifier's formula (`הו … היוצא`).
2. BD 125: `jw=j wꜥb.kw` (×4) = `טָהוֹר אֲנִי` (the `zp-4` "four times" as `(אַרְבַּע פְּעָמִים)`).
3. Westcar's royal decree after each wonder (1,17ff., 4,17ff., 6,22ff.): fixed by its first drafted copy; the later
   copies copy it (`verify` lists differences).
4. Sinuhe's letter formula and the king's epithets: fixed by their first copy.
5. `ḏd.jn X` = `אָז אָמַר X`; `ꜥḥꜥ.n sḏm.n=f` = `וְאָז` + past (§3a).

### 11.6 Round 5 run 6 – TB part 1 (1,1–9,9), merged 2026-10-31 (translator 1)
1. **Kinship:** ꜥꜣ / šrj (the elder / younger brother) = `הַגָּדוֹל` / `הַקָּטָן` (Gen 27:15's pair; `קָטָן` "child" keeps the
   pun of 1,1–1,2); AM's `זוטר` stays for the social sense; AM 2.13 ktj `הקטן` – two lemmas, never in one line (kept).
2. **grg "lie" = `כָּזָב`** (TB 7,4, 7,8; BD 29 `n ḏd=j grg` follows), ꜥḏꜣ "false" = `שֶׁקֶר` / ꜥḏꜣ "the false one" `הַשַּׁקְרָן`
   against mꜣꜥ.tj `הָאֲמִתִּי`.
3. **Late Egyptian particles:** wn.jn / ꜥḥꜥ.n = `וְאָז` + past; ḫr-jr-m-ḫt = `וְאַחֲרֵי כֵן`; j.n=f = `– כָּךְ אָמַר לוֹ`; ḫr =
   `הֲרֵי`; js / jstw = `וְאָכֵן`; jḫ = `אֵפוֹא` (interrogative `מָה`); wꜥ-n (the indefinite article) not translated.
   **Collision settled (the coordinator): ḫr-jr = `וְהִנֵּה`** (the topicalizing `jr` = `הִנֵּה`, §3a), because `וּבְכֵן` is fixed
   for AM's ḫr-rʾ-ꜥ (§3a); ḫr-rʾ-ꜥ "still" (TB 8,6) = `עוֹד` by sense. TB part 1's `ובכן` for ḫr-jr changes in part 2's pass.
4. **Fixed narrative strings (copied at every repetition):** the dawn `וְאַחֲרֵי כֵן – הֵאִירָה הָאָרֶץ, וְיוֹם שֵׁנִי נִהְיָה –`;
   `יָמִים רַבִּים אַחֲרֵי זֶה`; `כְּמִנְהָגוֹ שֶׁל כָּל יוֹם`; `נִהְיָה … כִּנְמַר־הַדָּרוֹם`; `בּוֹא, נַעֲשֶׂה לָנוּ [שָׁעָה], נִשְׁכַּב` (3,7;
   5,1 and 7,6 without `לנו`); `אֶצְלִי כְּמִנְהַג אֵם / אָב` (3,9–3,10; 5,2; 7,4–7,5).
5. **Words:** mḥ m "seize" `אָחַז`; wꜥr "flee" `בָּרַח`; rḫ (sexually) `יָדַע`; qd `בָּנָה`, jrj `עָשָׂה` (9,6 / 9,7: the command
   and the execution differ in the Egyptian); hꜣy `בַּעַל`, ꜥḥꜣwtj `גֶּבֶר`, ꜥḏd `עֶלֶם`, jhꜣ.t `רֶפֶת`, jḥ `בָּקָר` / jḥ.t `פָּרָה`,
   mnjw `רוֹעֶה`, jꜣw.t "herd" `עֵדֶר` (≠ jꜣw.t "old age" `זִקְנָה`), ẖdb `הֵמִית`, njwj `חֲנִית`, dm.t `חֶרֶב`, bḫn `מִבְצָר`; ḥm.t
   and s.t-ḥm.t both `אִשָּׁה` (kept: one meaning).
6. **Names:** Rꜥ-Ḥrw-ꜣḫ.tj `רַא־חַרְאַחְתִּי`; Pꜣ-Rꜥ `רַא`.
7. **Gate fixed (the coordinator):** `לברוח` and `מרוח` are no longer read as `רוח` (the prefix class); `השבת` "you returned"
   still trips the שבת gate: write another form or an `[היתר שער]`.

### 11.7 Round 5 run 6 – TB part 2 (10,1–20,1), merged 2026-10-31 (translator 1)
1. y~mꜥ "sea" = `יָם` [cognate: a Semitic loanword in Late Egyptian; the god Yam in the note].
2. ꜥḥꜣ by sense: "fight" `נִלְחַם`, "quarrel" `רָב`; jrj-ꜥḥꜣwtj "adversary" `בַּעַל־רִיב`.
3. Cult: ꜥbt `מִנְחָה`, wdn `זֶבַח`, mꜣꜥ "offer" `הִקְרִיב`, hrw nfr `יוֹם טוֹב`.
4. Court: špsj.t `גְּבִירָה`, jrj-pꜥ.t `נָסִיךְ`, zꜣ-nsw `בֶּן־הַמֶּלֶךְ`, jmj-rʾ mšꜥ wr `הַמְּמֻנֶּה עַל הַצָּבָא הַגָּדוֹל`; the
   impersonal tw "one" for the king = `(הַמֶּלֶךְ)`.
5. Splits by sense: šrj.t "daughter" `בַּת` (šrj `קָטָן`); wpj "open (the heart)" `גִּלָּה`.
6. Gates fixed (the coordinator): the `זבת` gate takes only `ו` as a prefix (`הכוזבת` "the liar", 17,6); the `ענבים` licence
   includes the spelling `jꜣ~jr` (13,8); the two `[היתר שער]` notes may go.

### 11.8 Round 5 run 6 – WE part 1 (1,1-11–4,17), merged 2026-10-31 (translator 2)
1. **The royal decree after each wonder** (fixed by 1,12–1,17, copied at 4,12–4,17; binding for 6,22ff. and the later
   wonders, only the names and brackets change): `אז אמר הוד מלכות מלך־הדרום־והצפון X אמיתי־הקול: תן שיתנו תקרובת: לחם
   אלף, שֵׁכָר – כדים מאה, שור אחד, קטורת – כדורים שניים, למלך… ; וכן לגרום שיתנו עוגה אחת, שֵׁכָר – קנקן אחד, בשר – נתח
   גדול, קטורת – כדור אחד לכוהן־הקורא החרטום Y, ראיתי את מעשהו של דעת. אז עשו כמצוות הוד מלכותו, כולן.`
2. **Narrative:** `X pw jri̯.n Y` = a plain past verb; ḫr-m-ḫt `ואחרי`; jst `והרי`; the jn-cleft `X הוא ה…`; ḏi̯=j sḏm `אשמיע`;
   jt (forefather) `אב`; the dawn as TB's string without `כן`; `שָׁטָה` / `שָׁטוּ` always vocalized (`שִׁטָּה` gate).
3. **Words:** mꜣꜥ (offering) `תקרובת`, sntr `קטורת`, šzp.t `ביתן`, wbꜣ.yt `משרתת`, pds `ארגז` (`תֵּבָה` only ḏbꜣ.t), wn.t `דְּבִיר`,
   ḥw.t-nṯr `בית־האל`, ẖnw `הבירה`, jtrw `יאור` [loanword]; splits by sense recorded at the lines: jṯj `תפס`/`לקח`,
   rḏj `נתן`/`גרם`/`שם`, ꜥḥꜥ `קם`/`חיכה`, wꜥb `טהור`/`רחץ`.
4. **Gate fixed (the coordinator):** `לשבת` "to sit" is allowed where the line has ḥmsj.
5. The 27 dossier lines (2,21–4,7) copied byte for byte by script; no pending dossier revision.

### 11.9 Round 5 run 6 – WE part 2 (4,18–7,26), merged 2026-10-31 (translator 2; review passes pending)
1. The third decree (6,17–6,22) copies §11.8.1 with the Egyptian's three differences (recorded at the lines).
2. The lake (6,8–6,12): `שם חצי מי האגם על האחד מהם`, `נהפך`; no Ex 14 word in the lines (Ex 14:21–22 [divergence] in the apparatus).
3. Words: `מקום־רענון` / `התרענן`, pr-nswt `בית־המלכות`, `סירה`, ꜥḥꜥ.w `אניות`, `נערה`, `חתר` / `חתירה`, `תליון־הדג`, mfkꜣ.t `טורקיז`,
   `סופר־המגילה`, Ḏd-Snfrw `גֶ׳דֶד־סְנֶפְרוּ`, ꜣḫ.t (the pyramid) `אופק`, `כיסא־משא`; nfr by sense `טוב` / `יפה` (a split, recorded:
   the טוב gate licenses both); šꜣs `שָׁט` throughout.
4. **Kept (the coordinator):** wsr "oar" (WE) and AM's ḥmw "steering oar" both `משוט` – never in one line; to be reviewed at the lead's harmonization.
5. Gate trap: `ולבסוף` "finally" trips the סוף gate – write `ובאחרונה` (no gate change: `סוף` must stay licensed by ṯwfj).

