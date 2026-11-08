# Cross-corpus harmonization after Round 6 (2026-11-09; the lead, by the user's delegation)

Principle (as in the passes of 2026-10-21, 10-23, 10-30 and 11-02, guidelines §6.7): one Hebrew per source word across
the corpora; the majority / earliest corpus wins unless the cognate rule or a recorded reason decides; across languages
the principles of 2026-10-30 and 2026-11-02 apply. The items are the "Cross-corpus splits left for the lead" of
`reports/round-6/run-1.md` … `run-5.md` and two of run 2's questions, planned in `reports/round-6/final--plan.md` (rows
1–28) and surveyed with `tools/harmonize_survey.py` both ways. Applied in range B by three agents at once on disjoint
corpora (A: Sumerian and Akkadian; B: Egyptian; C: Greek), plus two lines of the law corpus by the lead.

**One new rule** (guidelines §6.7): **a cognate's Hebrew is not lent to a non-cognate equivalent in another language.**
Where an Akkadian word's Hebrew is reserved as its cognate (*ṣalmu* `צֶלֶם`, Gen 1:26), the Sumerian word it translates
(*alan*) takes another Hebrew (`פֶּסֶל`, [equivalent]) – the default "a Sumerian word takes its Akkadian equivalent's
Hebrew" (§5.2) yields to the cognate reservation.

## A. Changes (applied)

| # | Source word | Hebrew (binding) | Lines changed | Reason |
|---|---|---|---|---|
| 1 | Enki (the flood references §8) | `אֶנְקִי` | flood `6-…` BM 35572 2′, notes 3′ and Šuruppag, the §3 heading | an error: `אנכי` reads "I" |
| 2 | Sum. *di kud*; *ka-aš bar* | `דן דין` (`דָּן` alone); *ka-aš bar* `הכריע הכרעה` | BH B9–B11, MT.A24–A26, A36–A37; DB C8, G22, MT.F40, F85, F133; flood F 40; Gudea A.viii.6, A.xxii.22, A.xxvii.15; LSU 439, 494 | the creation and netherworld renderings' `דָּן דִּין` (earliest); `מִשְׁפָּט` is *šipṭu*'s; the law corpora's *di* `דין` / *di-ku₅* `דיין` agree |
| 3 | Ḫuwawa | `חוּוָוָה` everywhere | the OB tablets (III 97 … 276; Ishchali; Nippur; Schøyen₂), the SB and Gudea notes; a RAW_FORBIDDEN trap in `אפוס-גילגמש/verify.py` | one name, one spelling (the poems' ★ form) |
| 10 | Sum. *u₅{mušen}* | `שקנאי?` (*kur-gi₄* keeps `אווז`) | EA 436; LZ 220; proverbs c2 D10; Gudea A.xiv.23 `*השקנאי הטהור*` | the earliest (EWO 297, 418; ETCSL "pelican"); two Sumerian birds had shared `אווז` |
| 12 | Sum. *suḫ* / *suḫ₁₀* | `נזר` | ES 89, 178, 191; LSU 458; EA 274 *saĝ muš₃* → `עטרת ארטה` (to free `נזר`) | the creation corpus and the majority (EWO, LC, HB, BH) |
| 16 | Kulaba | `כּוּלַבָּה` | HA, HB, BH, AG, DB (21 lines), IN 347–348, GEN U60.5, U60.13, LC | the earliest (EWO) and the majority |
| 18 | Sum. *bala* "term" | `תְּקוּפָה` | LU 113, 94; the Sumerian Flood Story C26 | the laments' and flood references' rule |
| 19 | Sum. *gur₃* "be loaded" | `טען` / `טעון` (`נשא` stays *tum₂* / *de₆*'s) | IN 371–372; DD 166, 193, 228; CA 208; LSU 423; proverbs c3 A296 | the earliest (creation `טעון`, EA 1, LU 363–366) |
| 23 | Sum. *uru₄* "plough" | `חרש` | proverbs c2 A35, A153, B17; c3 A143 (c2 A32 keeps `זרע`: its object is grain) | the creation corpus's binding *uru₄* = `חָרַשׁ` |
| 24 | DD's gates and formulas | applied in `netherworld_tools.py` | RESERVED (`מקוה`, `ערב רב`, `פתר`, `איילות`), TRAPS (`מָנוּ`, `רֵעַ` +sfx, `שָׂמִים`, `אֵלָה`), 38 formulas | run 4's proposals |
| 7 | the horizon god | two names kept: Rꜥ-Ḥr.w-ꜣḫ.tj `רַא־חַרְאַחְתִּי`, Ḥr.w-ꜣḫ.tj `חוֹרוּס־אָחְתִּי` | NU6 141.3 (a third form) → `לרַא־חַרְאַחְתִּי` | two TLA lemmas, two names; one stray form |
| 9 | Eg. sꜥḥ (verb), BD 78 | `הידר`, stative `הָדוּר` (the noun stays `אציל`) | NU6 78.13, 78.19, 78.21, 78.32, 78.39 and their apparatus, the NU6 intro | `האציל` has one biblical sense, Num 11:17 `וַיָּאצֶל מִן הָרוּחַ`, so the line rebuilt that verse; HC 91 already has the noun sꜥḥ `הדר` |
| 25 | Gk. ἀλκτήρ | `הודף` | TH 657 | ἀσπίς is `מָגֵן`; ἀπαλέξω is already `הדף` |
| 26 | Gk. τεῦχος | `נשק` (θώραξ `שריון`) | TH 186, 929t; WD 150 | one Hebrew per lemma in the corpus |
| 27 | Gk. ἀλαλητός; ἰάχω / ἰαχή | ἀλαλητός `תרועה`; ἰάχω `צרח` / `צריחה` | TH 686; TH 69, 678, 708; SH 232, 382, 404, 436, 441, 451 | the LXX ties the ἀλαλ- family to רוע (Ps 89:16, Judg 15:14); SH 382 has both words; `צעק` is ἐνοπή's / ἀυτή's |
| 28 | ποδώκης; μεγαλήτωρ; κυανο-; κυρέω | `קל־רגליים`; `גדול־הלב`; `כחול־`; `נתקל` | SH 191; 450; 356, 393; 426 | the Theogony / Works and Days precedents |
| 15 | Sum. *alan* (Ur-Namma) | `פֶּסֶל` [equivalent] | UN prologue 3, 24 and the notes | the new rule above (the line had been tagged [cognate]) |

## B. Kept, with the reason

| # | Item | Reason |
|---|---|---|
| 4 | *ur₂* `חיק` / `שׁרש`; *ba* `מסר` / `חלק`; *ḫazin* / *aga-silig* `גרזן`; *uzu* / *su* `בשר` | splits by sense, recorded (Gilgameš renderings §23 rulings) |
| 5 | the Egyptian pairs sharing one Hebrew (renderings §12.6.13) | synonyms in a non-Semitic corpus; no line gives both lemmas one Hebrew (checked by script) |
| 6 | mr.w, sḫt, jꜣ.t, qnj.t, ḫꜣw.t, wpi̯ | by text and sense (§12.6.10–11) |
| 8 | ḥḏi̯ `הזיק` (BD 175, Merikare E132, the dossier's MK, Amenemope) | 33 tokens; most "harm, damage"; "destroy" in four lines only |
| 11 | *nu-gig* transliterated | another language; the `קדש` reservation protects *qadištu* |
| 13 | *galam* `נישא` (LC) / EA `בתחכום` | a sense split ("lofty" / "artful"); `נישא` also renders *il₂* |
| 14 | *er₂ šu ti* `לקח` / *šu ti* `קיבל` | an idiom |
| 17 | *kaskal* `מסילה` (LSU) | *ḫar-ra-an* `דרך` in the same line |
| 18b | Sum. *bala* `שלטון` in the law corpus (LI 16, UN e009, e018) | follows its Akkadian equivalent *palû* `שלטון` (LH) inside the law corpus |
| 20 | *sig₉* / *niĝ₂-me-ĝar* `דממה` | follows two earlier texts |
| 21 | *an-za-am* `גביע` = Akk. *assammu* | one word across the languages (confirmed) |
| 22 | *engiz* `מבשל` | a temple cook (ePSD); no gate blocks it |
| 28b | χλωρός `ירוק` / `חיוור`; δέρκομαι / ὁράω `הביט` | a sense split (plants / a face or metal); one sense |
| – | Eg. MT 63 ḏsr.w `בהדרת` beside sꜥḥ `הידר`; šwꜣ.w `רָשׁ` (MR) / `מסכן` (SI) | a noun by sense; a split by text |

**Open for a later pass:** Gk. ἐνοπή (TH 708 `צעקה`) and ἀυτή (SH `צעקת־הקרב`) share the root צעק; Sum. *tum₂* /
*de₆* is `הביא` / `הוביל` in most corpora and `נשא` in Inana, DD, GEN and the poems (bring / carry, by sense).

## C. Verification
Each apply agent ran its corpora's builders and verifiers (`--strict`) and `check_bible_quotes.py` on its files. Then
**every verifier of the folder, 51 runs at once in the background: all pass** (the Vedic tool after `vedic_tools.py
convert` regenerated its git-ignored TITUS tables), and **`tools/check_bible_quotes.py` over every `.md` file of the
folder: 0 problems**.
