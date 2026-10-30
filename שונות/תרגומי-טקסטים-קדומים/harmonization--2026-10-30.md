# Cross-corpus harmonization after Round 4 (2026-10-30; the lead, by the user's delegation)

Principle (as in the passes of 2026-10-21 and 2026-10-23, guidelines §6.7): one Hebrew per source word across the
corpora; the majority / earliest corpus wins unless the cognate rule (§6.4.2, §5.2 "When two source words collide in
one Hebrew word, the cognate keeps it") or a recorded reason decides otherwise. Round 4 brought the first non-Semitic
corpora (Egyptian, Greek, Hittite) and a cousin Semitic one (Ugaritic), so most of its splits are **across languages**;
they are settled by three principles (now in guidelines §6.7, "Cross-language principles"):

1. **A cognate reservation protects a Semitic text's own cognate, not the common vocabulary of every language.** In a
   non-Semitic corpus (Egyptian, Greek, Hittite, Sanskrit, …) the Akkadian corpora's cognate reservations – `עָבַר`
   (*ebēru*), `לָקַח` (*leqû*), `נָשָׂא` (*našû*), `הִשְׁלִיךְ` (*nadû*), `קָרָא` (*nabû*), `שָׂם` (*šakānu* / *ĝar*), `נָצַר` /
   `שָׁמַר` (*naṣāru*), `יָרֵא` (*palāḫu*), `גְּבוּל`, `טָרַף`, `חָתָן` … – do not apply: the text uses the natural Hebrew word
   by sense, tagged [equivalent], and its own gates (if any) license it by its own lemma. The common Semitic words
   (`אַלְמָנָה`, `שֵׁכָר`, `מִדָּה`, `טִיט`, `תֶּבֶן`, `כָּבֵד`, `אָלָה`, `נֶשֶׁר` …) are [cognate] in an Akkadian or Ugaritic line and
   [equivalent] in another language's line.
2. **A loanword's Hebrew belongs to its source language** (Egyptian `תֵּבָה`, `הָבְנִים`, `חַרְטֹם` …; Akkadian `אָרִיס`,
   `מִסְכֵּן` …; a Greek word with its own LXX identity keeps its LXX Hebrew): another language uses it only where Hebrew
   has no other word for the thing, and the note says it is a loanword from elsewhere.
3. **Inside one language (or two Semitic cousins), the cognate keeps the Hebrew and the other word moves**; a fixed
   formula keeps its Hebrew against a general reservation (*abūba šakānu* `חוֹלֵל מַבּוּל` against *šakānu* = `שָׂם`).
   **In Hittite, an Akkadogram** (written in Akkadian: UMMIĀNU, ASĪRU, ANZELLU, ILKU) **takes the Hebrew of its
   Akkadian word; a Sumerogram writes a Hittite word and is rendered by sense** (TÚG `בֶּגֶד`, ZABAR `אָרָד`, MUḪALDIM
   `מְבַשֵּׁל`).

Survey tool: `tools/harmonize_survey.py` (src / heb / parse / words), on the `>` lines.

## A. Changes (apply these)

| # | Source word | Hebrew (binding) | Lines to change (corpus · file label) | Reason |
|---|---|---|---|---|
| 1 | *imtu* "venom" | `חֵמָה` [cognate] (construct `חֲמַת`; vocalized wherever it could read "sun" or "anger") | Enūma eliš: every `ארס` of *imtu* (I 136, 162; II 22; III 26, 84; IV 53, 62; V 51; and every other line that carries it: the refrain `בארס כדם מילאה את גופם` → `בְּחֵמָה כְּדָם מילאה את גופם`, identical in all copies); Maqlû III 14 `בארסה` → `בחמתה`, III 21 `את ארסך` → `את חמתך` | the cognate (Deut 32:24, 33 `חֲמַת זֹחֲלֵי עָפָר`, `חֲמַת תַּנִּינִם`); Erra I and Ugaritic *ḥmt* already `חמה`; `אֶרֶס` is not the cognate. Hesiod's Ares `אָרֵס` is only a homograph |
| 2 | *šurhungû* (Maqlû's list of witchcraft effects; < Sum. *šà-ḫun-ĝá* "heart-calming") | `הַשְׁקָטַת לֵב` | Maqlû I 90, IV 11 `השקטת חמה` → `השקטת לב`; V 59 `את השקטת החמה` → `את השקטת הלב` (and the fixed-lines table, renderings §9) | frees `חֵמָה` for *imtu* inside Maqlû (row 1); the literal Sumerian; `כַּעַס` is *agāgu*'s (Enūma eliš IV 76) and `נִרְגַּע` is *pašāḫu*'s |
| 3 | *ummânu* / Sum. *um-mi-a* / Hitt. UMMIĀNU "craftsman, expert" | `אֻמָּן` (vocalization) | Gudea: the renderings row (`אָמָּן` → `אֻמָּן`) and any vocalized `אָמָּן` in its lines | the flood corpus, Erra, the Hittite Laws `אֻמָּן` (majority, earliest); the [cognate] note keeps Song 7:2 `אָמָּן` |
| 4 | *nuḫatimmu* / Sum. *muhaldim* / Hitt. MUḪALDIM "cook" | `מְבַשֵּׁל` (by sense) | Nergal and Ereškigal SB b+42, c+57 `האופה` → `המבשל`; Adapa SB a+10 `עם האופים את האפייה עושה` → `עם המבשלים את הבישול עושה`, a+11 `עם אופי ארידו את האפייה ⟨עושה⟩` → `עם מבשלי ארידו את הבישול ⟨עושה⟩`; Bird and Fish 90 `האופה, מבשל השכר` → `המבשל, מבשל השכר`; Summer and Winter 213 `טבח` → `מבשל` | `אוֹפֶה` is the cognate of *ēpû* "baker" (NINDA.DÙ.DÙ in the Instructions, which has both words in one line, 14.2); `טַבָּח` is *ṭabāḫu*'s (§6.7); the Instructions already `המבשל`. `מְבַשֵּׁל־הַשֵּׁכָר` stays the brewer's (*lunga*, LÚ.KAŠ) |
| 5 | *siparru* / Sum. *zabar* / ZABAR "bronze" | `אָרָד` (vocalized at its first occurrence in each text and wherever it could read "I will go down") | Gilgameš SB I 25 and its copy in the flood references 25 `נחושת` → `ארד`; the flood references o 9; EST 530 (`שמים של נחושת` → `שמים של ארד`), 649; LH 2612′, 2616′, 2631′, 2635′, 2641′, 2645′ `באיזמל נחושת` → `באיזמל ארד`; Maqlû II 38, 76, 92, 104, RT 33′, 34′ (`צלם נחושת` → `צלם ארד`); Ludlul IV a+21 `כנחושת` → `כארד`; every other line whose source is *siparru* / ZABAR | one source word, one Hebrew: the Sumerian corpora (Gudea, Inana, Ur-Namma, EWO) and the Hittite texts have `ארד`, and the Hittite rituals (AM 113, 190) and EWO 232 need both metals in one line. Copper – *erû* / *urudu* / URUDU – keeps `נְחֹשֶׁת`; Greek χαλκός keeps `נחושת` (the LXX's word). EST 530's note keeps Deut 28:23 `שָׁמֶיךָ … נְחֹשֶׁת` as [equivalent] (not a cognate: the bronze sky, in other words) |
| 6 | *ṣubātu* "garment" (Akkadian) | `שִׂמְלָה` | Erra I 141 `בגדיי` → `שמלותיי`, 181 `בגדך` → `שמלתך`; MAL A r v 48 `בין בגד` → `בין שמלה`; Ludlul II 71 `(כ)בגד` → `(כ)שמלה` | Gilgameš (7), the Descent of Ištar (3), Nergal, Adapa `שמלה` (majority, earliest). The Hittite TÚG keeps `בגד` (a Sumerogram, principle 3); Sum. *tug₂* stays as settled on 2026-10-23 |
| 7 | *ḫalziqqu* "waterskin" (the Descent of Ištar) | `חֵמֶת` (always vocalized) | Ištar 98 `אל הנאד` → `אל החֵמֶת`, 99 `את הנאד` → `את החֵמֶת` (and its NA copy if it carries the word) | `נֹאד` is the cognate of *nādu* (Gilgameš, EST, Maqlû, Erra I 58); [equivalent] Gen 21:14 `וְחֵמַת מַיִם` |
| 9 | *uggatu* "fury" (added during batch A, which found it) | `קֶצֶף` | Ludlul I 5 `שממה חמתו` → `שממה קצפו`, I 37 `אגלה את חמתו` → `אגלה את קצפו` (and the wisdom corpus renderings row "*uggatu* … `חֵמָה`") | Enūma eliš II 78 and Adapa (MB 61′, SB c+2) already `קצף` (majority, earliest); frees `חֵמָה` for *imtu* (row 1). Erra's `קצפתי` (*agāgu*) shares the root, as the verb and noun of one idea; Hesiod's `קצף` "foam" is a homograph |
| 8 | Eg. *ẖr.t-nṯr* "necropolis" (the Heavenly Cow) | `חֶלְקַת־הָאֵל` | HC (the line before 94) `חי בנחלת־האל` → `חי בחלקת־האל` | `נַחֲלָה` is the Ugaritic *nḥlt*'s cognate (Mot's land), and `נַחֲלַת ה'` would read as the biblical inheritance (a false echo); *ẖr.t* is "portion, possession" |

For every change (as on 2026-10-23): the `>` line; the parse bullet's ("…") for that word; any note or parallels-index
row that quotes our rendering (never a backticked Bible quotation); the corpus `renderings.md` row, plus one line
"2026-10-30 harmonization" listing the changed lines; regenerate `translation*.rtl.md` with the corpus builder; the
parallels index (by its builder) if a row changed; then the corpus verifier `--strict` and `check_bible_quotes.py`.
If a verifier enforces the old word (a formula, a fixed line, a gate), change the verifier. Any line where the change
would break the sense: skip it, and report.

## B. Kept, with the reason (record, no change)

- **`נָחָשׁ`**: Etana's *ṣerru*, Ugaritic *nḥš* (the cognate, reserved there) and the dossier's comparison word for
  every culture's serpent – three languages; each is its own corpus's word (principle 1).
- **`אָלָה`**: Ugaritic *alt* (1.82, the cognate) and the law corpus's *māmītu* (EST has both *māmītu* and *tamītu*,
  2026-10-17); the wisdom and creation corpora's *māmītu* `שְׁבוּעָה` stays (settled earlier). Two languages.
- **`שַׁרְבִיט`**: Ugaritic *ḫṭ* = Akkadian *ḫaṭṭu* (2026-10-23): one word, as it should be.
- **Names**: Resheph `רֶשֶׁף`, Dagan `דָּגָן` as in the Ugaritic §6.7 line; Athtart `עַתְּתַרְת` beside Ištar `אִשְׁתַּר` – each
  language its own form (§6.4.6).
- **The common Semitic words** of the Egyptian corpus (`אַלְמָנָה`, `שֵׁכָר`, `מִדָּה`, `טִיט`, `תֶּבֶן`, `כָּבֵד`) – principle 1.
- **`הָבְנִים`**: Westcar's *hbnj* owns it (the loanword's source); Gudea's Sumerian *esi* "ebony" keeps it too – Hebrew has
  no other word for ebony (principle 2); its note says the Hebrew is an Egyptian loanword.
- **`וְזִיר`** (HC *ṯꜣtj* = *sukkallu* / *sukkal*, by sense), **`סוֹכֵן`** (AM *rwḏ.w*, Gudea *aĝrig*, the Advice's *šatammu*,
  by sense), **`חוֹכֵר`** (AM *ꜥḥwtj*, leaving `אָרִיס` to *errēšu*), **`מִכְמֹרֶת`** (AM *mkmr.t*, a Semitic loan, = *kamāru*).
- **`שָׁמַר` / `נָצַר`** for the Egyptian protect-words (*nḏ*, *zꜣw*, *mkj*): the Akkadian reservation is Akkadian-only
  (principle 1).
- **`כּוּשׁ`** for Αἰθίοψ and for Kush in every corpus; the plural `כּוּשִׁים` is never used (a slur in Modern Hebrew): no
  corpus has it (surveyed).
- **Greek words with their own LXX identity** (principle 2): `אַגָּן` κρατήρ (Exod 24:6 LXX; the everyday-voices trap is a
  Song-of-Songs reservation for Akkadian), `אוֹת` σῆμα (by sense, beside the Mesopotamian cognate *ittu*), `נֶשֶׁר` ἀετός
  (= Etana's *erû*, [equivalent] in both), `דֶּבֶר` λοιμός, `קָלוֹן` the Ugaritic *qlt* and `כְּלִמָּה` αἶσχος.
- ***šubtu*** "seat, dwelling": Gilgameš (with the Descent of Ištar, Nergal, Maqlû, Etana) `מִשְׁכָּן` – Gilgameš keeps
  `מוֹשָׁב` for *mūšabu* (its pattern-cognate, I 208, 215; OB II 58, 60), and the formula *šubat irkalla* `מִשְׁכַּן אִירְכַּלָּה`
  is shared by three texts – against Enūma eliš, LH and Erra `מוֹשָׁב`. Kept by text (no text has both renderings for
  *šubtu*); the exact cognate `שֶׁבֶת` collides with the reserved string `שבת`.
- ***emqu*** `חָכָם` beside *apkallu* `חָכָם` (adjective and noun, by sense); ***malku*** `מֶלֶךְ` [cognate] beside *šarru*
  `מֶלֶךְ` (Hebrew has one word for "king").
- ***mātu*** / ***erṣetu*** both `אֶרֶץ` (every Akkadian corpus; the Descents' reservation of `הָאָרֶץ` for the netherworld does
  not meet Erra I, whose netherworld is *erkallu* / *kurnugû* / *arallû*).
- ***abūba šakānu*** `חולל מבול` (the flood formula) against *šakānu* = `שָׂם`: a formula wins (principle 3).
- **Hittite common vocabulary** (principle 1): `עָבַר` / `הֶעֱבִיר` (*zinu-*, *zai-*), `לָקַח` (*dā-*), `נָשָׂא` (*peda-*),
  `הִשְׁלִיךְ` (*pešš-*), `קָרָא` (*ḫalzai-*), `שָׂם` (*dai-*; the Laws, the Instructions and the rituals all `שׂם`), `גְּבוּל`
  (*arḫa-* / ZAG; MAL B, the wisdom corpus and the legends gate `גבול` for their own Akkadian words), `טָרַף` (*karap-*, Exod
  22:12 [equivalent]; Ur-Namma's reservation is Sumerian), `פָּגַע` (*ḫapallašai-*), `חֲתַן־בַּיִת` (HL1 185), `חָצָה`
  (*šarra-*, beside Sum. *bal*), `יָרֵא` (*naḫḫ-* = *palāḫu*: the same equivalent), `הִטְבִּיעַ` (*šiya-*; `חָתַם` stays the
  Egyptian loanword's).
- ***anzillu*** / ANZELLU: Etana `תּוֹעֵבָה` (beside *asakku* `דבר אסור` in the same line) and the Hittite ritual AM2 `אִסּוּר`
  (beside *ḫurkil* `תּוֹעֵבָה`, the Laws' word for the forbidden unions, Lev 18) – each text sets the word beside another
  that owns the other Hebrew, so they keep it by text (the exception to principle 3, recorded). The wisdom corpus's
  *ikkibu* `תּוֹעֵבָה` stays (Prov `תּוֹעֲבַת ה'`).
- **GIŠ.ḪUR** "record, writing board" `שְׁטָר` (the Instructions) against Gudea's *ĝiš-ḫur* "drawing, plan" `צוּרָה`: one sign,
  two meanings, two languages – by sense.
- **PA₅** `פֶּלֶג` in Hittite (= *palgu*, 2026-10-23) against the Sumerian corpora's *pa₅* `תְּעָלָה` (Gudea, EWO, the
  Farmer's Instructions, Hoe and Plough, Šuruppag, the letters, the Sumerian flood: the fixed pair `סוללה ותעלה`) – the
  Sumerian precedent where all the Sumerian corpora agree (as with *amar*, §5.2).
- **`חֵלֶף`** (*kaššaš* "substitute") beside MAL *kīmū* (cross-language equivalent; the noun, not *etēqu*'s verb `חָלַף`).
- **`אָסִיר`** (LÚ ŠU.DAB and the Akkadogram ASĪRU, one referent inside Hittite); **`פַּסְלוֹן`** (*šena-*, beside an Egyptian
  figurine, the same concept); **UDU.ŠIR** `אַיִל` (the Laws' and the rituals' word; no qualifier needed: `אַיִל` is the male);
  *išuwan* (HL2 163.3) `מלח` beside the rituals' MUN `מלח` – the word is uncertain (Hoffner), the line marks it.
- ***nai-*** `הִפְנָה` (rituals) / `הִטָּה` (HL2), ***memai-*** / ***tar-*** both `אָמַר`, ***uda-*** / ***uwate-*** both `הֵבִיא`:
  common verbs, by sense.
- **`גוזל` / `אפרוח`, `רשת`, `פח`**: not used in the Round 4 texts.

## C. Applied

(Filled in as the batches are applied.)
