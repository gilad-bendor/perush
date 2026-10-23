# Cross-corpus harmonization after Round 3 (2026-10-23; the lead, by the user's delegation)

Principle (as in the 2026-10-21 pass, guidelines §6.7): one Hebrew per source word across the corpora; the
majority / earliest corpus wins unless the cognate rule (§6.4.2) or a recorded reason decides otherwise. Sumerian
loan-equivalents take their own precedents where the corpora already agree (guidelines §5.2, line on *amar*).
Survey tool: `tools/harmonize_survey.py` (src / heb / parse / words).

## A. Changes (apply these)

| # | Source word | Hebrew (binding) | Lines to change (corpus · file label) | Reason |
|---|---|---|---|---|
| 1 | *gišparru* "trap" | `פַּח` | EST 650 `במצודה` → `בפח` | Etana, Maqlû, the Šamaš Hymn all `פח` |
| 2 | *kamāru* "net" | `מִכְמוֹרֶת` (plene) | Šamaš Hymn 87 `מכמרת` → `מכמורת` | plene spelling (Enūma eliš IV 112 has it) |
| 3 | *naḫbalu* "snare" | `מוֹקֵשׁ` [equivalent: Ex 23:33, 34:12] | Atra-ḫasīs I 15, II E 73, E 77 `מלכודת הים` → `מוקש הים` (the three lines stay identical) | `מַלְכֹּדֶת` is *kippu*'s (the Šamaš Hymn 90) and EST 588's; Ludlul II 84 already `מוקש` (aligned with Etana by run 4) |
| 4 | *ḫaṭṭu* "sceptre; stick" | royal: `שַׁרְבִיט`; a stick or rod for beating: `מַקֵּל` (by sense) | LH 161, 3187′, 3356′, 3392′ (and 3188′ if it carries the word) `שבט…` → `שרביט…`; MAL A o i 77 `בשבטים` → `במקלות`; Enūma eliš IV 29 `שבט` → `שרביט` | `שֵׁבֶט` is reserved for its cognate *šabbiṭu* (Gilgameš SB 19, 39: `שבט`), as Etana proposed; Etana, Enmerkar and Gilgameš already `שרביט`; Maqlû I 40 already `מקל`. Note at LH / EE: [equivalent] Gen 49:10 `שבט` |
| 5 | *parakku* / Sum. *barag* "dais" | `דּוּכָן` | Etana I.15, I.23, II.3, II.4, OBM.9 `כס…` → `דוכן…` (`הכסים` → `הדוכנים`); Nergal and Ereškigal SB c+35 `כס המלכות` → `דוכן המלכות`; Enmerkar 498 `על הכס` → `על הדוכן` | Enūma eliš (8), Gilgameš, Maqlû, Ludlul, the Šamaš Hymn, Gudea, EWO, creation 2 all `דוכן`; `כסא` stays for *kussû* |
| 6 | Sum. *aga* = Akk. *agû* "crown" | `כֶּתֶר` | EWO 264 `עטרת` → `כתר` | Enmerkar, Agade, the proverbs, the flood references, Gilgameš, LH all `כתר` |
| 7 | *palgu* "canal" | `פֶּלֶג` [cognate] | Etana MA.i+10 `תעלה` → `פלג`; creation 2 (KAR 4 / the bilingual, obv. 13) `תעלה` → `פלג` | the cognate (§6.4.2); Enūma eliš, Maqlû already `פלג` |
| 8 | *mašqû* "watering place" | `מַשְׁקֶה` [cognate] (always vocalized) | Gilgameš SB I 109, 112, 170 `שוקת` → `משקה`; Ludlul II 86 `שוקתי – חסומה` → `משקי – חסום` | the cognate (Gen 13:10 `כֻּלָּהּ מַשְׁקֶה`), as Etana proposed; `שֹׁקֶת` stays for *buginnu* / Sum. *buniĝ* (Etana, Gudea) |
| 9 | Sum. *taraḫ* = *turāḫu* "ibex" | `יָעֵל` | EWO's boat `אקו־האפסו` → `יעל־האפסו` (every line) | EA, Agade, Etana have *taraḫ* = `יעל`; `אַקּוֹ` is Etana's *armu* |
| 10 | *dalālu* "praise"; *dalīlu* "praise, glory" | `פֵּאֵר`; `תִּפְאֶרֶת` | Ludlul I 1 `אהלל` → `אפאר`, 57 `להלל` → `לפאר`, 82 `הללו` → `פארו`, 119 `הללו את הילול[יו?]` → `פארו את תפארת[ו?]`; the Theodicy 4 `אהללך` → `אפארך`; the Šamaš Hymn 166 `מהללות` → `מפארות`; Maqlû I 17, 75 `את הלוליך אהלל` → `את תפארתך אפאר` | `הִלֵּל` / `הִתְהַלֵּל` is reserved for its cognate *alālu* (Enūma eliš §4: *nâdu* `שִׁבַּח`, *alālu* `הלל`, *dalālu* `פֵּאֵר`, with the figura etymologica `יפארו את תפארתו`, VII 24); the prophecies already `פארו` (r.6). The wisdom corpus's *alālu* is `הֵידָד` (Ludlul II 101, the Theodicy 294) |
| 11 | *naglabu* "shoulder blade" | `שְׁכֶם` | SAA 9 (o.18) `כתפיי שקודות` → `שכמותיי שקודות` | Maqlû `שכמותיי`; `כָּתֵף` stays for *būdu* (Gilgameš) |
| 12 | *šubarrû* "exemption, freedom" | `פְּטוֹר` | Adapa SB e+10 `חירותו` → `פטורו` | Enūma eliš, Advice to a Prince `פטור` |
| 13 | the formula *na ga-ri na-ri-ĝu₁₀ ḫe₂-dab₅* "let me give you advice, let my advice be taken" | `עֵצָה אֶתֵּן (לְךָ) – עֲצָתִי תֵּאָחֵז!` (*dab₅* = `אחז`) | Šuruppag 9, 79, 149 and the flood references 9 `עצתי תילקח` → `עצתי תיאחז`; Enmerkar 69, 626 `את עצתי תקבל` → `עצתי תיאחז`; GEN 182 `הוראה אורה – הוראתי תאחז!` → `עצה אתן – עצתי תיאחז!`; the Farmer's Instructions 1 and 110 (*na … de₅* = `הורה` / `הוראה`) → `נתן עצה` / `העצה … שנתן` | one formula, one Hebrew (§5.2 ★); Gudea, Inana's Descent, creation 2 already `תיאחז`; *na de₅* = `נתן עצה` in Šuruppag, the flood, Gudea, Inana, Enmerkar, creation 2 |
| 14 | Sum. *saĝ-tun₃* "registrar" | `רוֹשֵׁם` | Hoe and Plough 22, Summer and Winter 176 `המזכיר הנשגב` → `הרושם הנשגב` (the two lines stay identical) | Gudea, Agade, the proverbs `רושם`; `מַזְכִּיר` is a biblical office (2 Sam 8:16) |
| 15 | Sum. *galam* "artful, skilful" | `תִּחְכּוֹם` / `מְחֻכָּם` | Summer and Winter 308 `באומנות` → `בתחכום`; Enmerkar 39, 46, 263 `בכשרון` → `בתחכום` | EWO (6), Šuruppag and the flood references (3); Bird and Fish's insult `נוכל` stays (by sense, pejorative) |
| 16 | Sum. *igi-tum₃* "covetousness" | `חֶמְדָּה` | Šuruppag 135 `בעל משא־העין – ראש בעץ מכה.` → `החמדה – ראש בעץ מכה.` | the same saying as proverb A31, which has it; letters 7 `חמדה` |
| 17 | *gerrānu* "wailing" | `תַּאֲנִיָּה` (vocalized) | Ludlul I 105 `מספד` → `תַּאֲנִיָּה` | `מִסְפֵּד` is reserved for its cognate *sipdu* (Maqlû I 12); `יְלָלָה` is taken (Gilgameš, Ištar, the proverbs, the love lyrics); [equivalent] Lam 2:5 `תַּאֲנִיָּה וַאֲנִיָּה` |
| 18 | *nissatu* "grief"; *ašuštu* "distress" | *nissatu* = `יָגוֹן`; *ašuštu* = `דַּאֲבוֹן` | Maqlû I 38 `(ו)הדאבון` → `(ו)היגון`; Maqlû I 71, 72 `יגון` (*ašuštu*) → `דאבון`; the love lyrics LAOS 4 16 r.iv.9 `ומעצב – אינה יתרה עליי` → `ודאבון – אינו יתר עליי` | *nissatu* = `יגון` in Gilgameš (5), Atra-ḫasīs, Gilg. XI, the Theodicy (3; 30 has the same pair *kūru* + *nissatu*); `מַעֲצֵב` would share the root `עצב` of the reserved creation verb (*patāqu*) |
| 19 | *bâʾu* "pass along" | `עָבַר` | Maqlû I 13 `אל יחצו אליי את הפתח` → `אל יעברו אליי את הפתח`; Maqlû (the line with `כמי גאות אשטוף אותן`) → `כמי גאות אעבור עליהן` | the flood, Etana, Gilgameš, Ludlul, the Theodicy `עבר`; Enūma eliš and the Šamaš Hymn `צעד` stay (by sense: walking a course) |
| 20 | the vizier Kakka (eBL *Kakka*, {d}*ka₃-ka₃*) | `כַּכָּא` (always vocalized) | Enūma eliš (every `גַּגָּא` / `גגא`) and Nergal and Ereškigal (every `כַּכָּה` / `ככה` that is the name) → `כַּכָּא` | the current edition's reading (§6.5), with a final aleph: `קַקָּה` sounds childish, `ככה` reads "thus" |
| 21 | *tubāqu* (EST's bird trap) | `מְצוֹדָה` | EST 582 `בפח` → `במצודה` | frees `פח` for *gišparru* (row 1) inside EST, which keeps its trap words apart; [equivalent] Eccl 9:12, which has both `בִּמְצוֹדָה` and `בַּפָּח`; shared with Maqlû's *ḫuḫāru* (a bird trap too, another corpus) |
| 22 | Sum. *šeg₉* "wild sheep / goat" | `אַיִל־בָּר` | EWO 13 `[יעל] נולד` → `[איל־בר] נולד`, 353 `יעלים ועזי־בר?` → `אילי־בר ועזי־בר?` | Gudea, creation 2, Summer and Winter `איל־(ה)בר`; `יָעֵל` is *taraḫ*'s (row 9) |
| 23 | the formula of row 13, in Inana's Descent 30A | `עצתי תיא[חז]!` | spelling only (`תא[חז]` → `תיא[חז]`) | the formula's plene form (§5.2: a fixed passage's plene form is fixed once) |

Applied 2026-10-23 in batch A (laws, creation 4–7, Enmerkar, GEN, Šuruppag, the flood references, the love lyrics): see
`history.md`. Notes from batch A: row 4 also changed the MA laws' formula *ina ḫaṭṭāte* (`במקלות`) in 13 more lines;
row 5 also Enmerkar 594 (*barag*); row 18 in the love lyric kept its comparative (`ומדאבון – אינה יתרה עליי`); row 6
leaves Sum. *aga* and *men* both `כתר` (kept: the other corpora already have both crowns as `כתר`).

For every change: the `>` line; the parse bullet's ("…") for that word; any note or parallels-index row that quotes our
rendering (never a backticked Bible quotation); the corpus `renderings.md` row, plus one line "2026-10-23
harmonization" listing the changed lines; regenerate `translation*.rtl.md` with the corpus builder; the parallels
index (by its builder) if a row changed; then the corpus verifier `--strict` and `check_bible_quotes.py`. If a verifier
enforces the old word (a formula, a gate), change the verifier. Any line where the change would break the sense: skip
it, and report.

## B. Kept, with the reason (record, no change)

- *šētu* and *sapāru* both `רֶשֶׁת` (two words for "net", never in one text; Enūma eliš's Marduk net keeps
  `רשת` for Ezek 32:3 `וּפָרַשְׂתִּי עָלֶיךָ אֶת רִשְׁתִּי`, the net over the *tannin*); Sum. *sa-par₄* keeps `מִכְמוֹרֶת` (its own
  precedent in three Sumerian texts; the dragnet, Isa 19:8); Gilgameš's *šēšu* `מכמורת` (rare; unsure).
- *šuškallu* = `שְׂבָכָה` – already one word.
- *qiāšu* and *šarāku* both `הֶעֱנִיק` (two verbs for "bestow"); LH's *šarāku* `מסר` (handing over property, by sense)
  and Enūma eliš's `מנחיל` (allotting fields, by sense) stay.
- *giššu* `צַד` (SAA 9: Isa 60:4, 66:12 `עַל צַד תִּנָּשֵׂאוּ`) beside Etana's *idu* `צד`; *ḫangāru* and Sum. *ĝiri₂* both
  `פִּגְיוֹן`; *ḫabūnu* and *utlu* both `חֹצֶן` – synonyms in different texts.
- *gamāru*: the prophecy corpus's `כלה` (the trap `גֹּמֶר` = Gimir, §6.7) against `גמר` elsewhere – by trap.
- *markasu*: Maqlû `מוסרה` (beside *ṭurru* `חבל`), Atra-ḫasīs `חבל` (the mooring rope), Enūma eliš / Etana `רכס` (the
  cosmic bond) – by sense.
- *šēdu* `שֵׁדוּ` in hostile-demon lists / `רוּחַ־מָגֵן`; *pašāru* `הִתִּיר` / `פָּשַׁר` – by sense (as logged).
- Sum. *amar* `גוזל` / Akk. *atmu* `אפרוח` – by source word (§5.2).
- Sum. *dab₅*: `אחז` "hold" / `תפס` "seize, catch" – by sense, across the Sumerian corpora; *tug₂* `שִׂמְלָה` in the GEN
  lines that Gilg. XII renders word for word (copying XII's Hebrew, §5.2), `בגד` elsewhere.
- *kalam* `המולדת` in GEN: in the netherworld corpus `הָאָרֶץ` is reserved for *kur* = *erṣetu* (the netherworld), so the
  Land is kept apart – by corpus reservation.
- *ebbu* `צַח` / *ellu* `טָהוֹר` – two words.
- *kapāru* (tears) `מָחָה` (Isa 25:8 `וּמָחָה … דִּמְעָה`) beside EST's *pašāṭu* `מחה` (§6.7) – kept; *kapāru* is also the
  cognate of `כִּפֶּר`: the note says so.
- Sum. *pu₂*: `באר` (well) / `בריכה` (pond) – by sense; *ri*, *ki-šar₂*, *bulug*, *en₃-tukum-še₃* (S&W 302 "as long as"),
  *dam tuku* – by sense.
- *šērtu* `עֹנֶשׁ` / `אַשְׁמָה` – the word means both "sin" and "punishment": by sense.
- Erra = `אֶרָּה` (Gilg. XI 195, the flood, Advice to a Prince agree; add to the §6.5 name table).
- *šipru* `מְלָאכָה` / `פֹּעַל`: **left to the user** (Gen 2:2–3).
