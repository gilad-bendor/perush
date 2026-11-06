# Project 3: the Sumerian Bilgameš poems (Round 6 run 1, 2026-11-06)

## Scope
Five Old Babylonian Sumerian poems about Bilgameš (= Gilgameš), whole, every recension ETCSL gives:

| Key | Text | ETCSL | ORACC | Entries | File(s) | Labels |
|---|---|---|---|---|---|---|
| HA | Bilgameš and Ḫuwawa, Version A ("The lord to the mountain of the living one") | 1.8.1.5 | Q000365 | 305 | `annotated-HA.rtl.md` | 1–202 with ETCSL's pluses (9A, 43A–43f, 61A–61d, 148A–148AAA …) |
| HB | Bilgameš and Ḫuwawa, Version B ("Ho, hurrah!") | 1.8.1.5.1 | Q000366 | 138 | `annotated-HB.rtl.md` | 1–168 (gaps) |
| BH | Bilgameš and the Bull of Heaven | 1.8.1.2 | Q000362 | 277 | `annotated-BH.rtl.md` | the version of unknown provenance `A1…`, `B1…`; Me-Turan `MT.A1…MT.D…`; the Ur III fragment `U3.A1…U3.B4` |
| AG | Bilgameš and Aga | 1.8.1.1 | Q000361 | 117 | `annotated-AG.rtl.md` | 1–115 (99A, 102A) |
| DB | The Death of Bilgameš | 1.8.1.3 | Q000363 | 495 | `annotated-DB-1.rtl.md` (Nibru `A1…I…`; another Nibru version `N2.1–N2.42`), `annotated-DB-2.rtl.md` (Me-Turan `MT.A1…MT.K12`) | |

**Total: 1,332 entries** (the plan's 1,381 counted ETCSL's `<l>` elements, which include the variant lines inside the manuscript notes: those are kept in the backticked line's parentheses and translated in the apparatus, not as entries).

**Not here:** Bilgameš, Enkidu and the Netherworld (ETCSL 1.8.1.4) stays whole in `../../העולם-התחתון/4-גילגמש-אנקידו-והעולם-התחתון/` (key GEN of `netherworld_tools.py`); the reading translation points to it between Aga and the Death (`translation--pointer-GEN.rtl.md`). Its Hebrew binds the shared words and formulas (renderings §23.1).

**The flood references' excerpt** of the Death of Bilgameš (`../../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md` §3, Me-Turan F 3–41 and F 123–128, 42 lines) is copied into `annotated-DB-2.rtl.md` at MT.F…, and kept identical by `bilgames_tools.py verify DB` (the excerpt's merged entries `F 5–6` etc. are compared line by line). Each revision is applied to both files at once (guidelines §5.2, "Copying an excerpt … is a chance to revise it").

## Base text
`../../sources/ETCSL/1.8.1.{1,2,3,5,5.1}--…/transliteration.md` (from the local OTA zip, CC BY-NC-SA; committed), with ORACC epsd2/literary Q000361–Q000366 lemma + morph (`../../sources/ORACC/epsd2-literary--Q0003xx--…/`, CC0; from the local 2022 zip – the ORACC server is not reachable from the cloud), aligned to ETCSL **by content** (`bilgames_tools.py`, difflib: ORACC has the notes' variant lines as lines of their own and many unlabelled lines). Rank 3: ETCSL's English (`translation.md` beside each transliteration); for the Death's Me-Turan F lines also the flood references' apparatus. Not available here: George 1999 / 2003, Gadotti, Edzard 1990–91 (Ḫuwawa), Cavigneaux and Al-Rawi 2000 (Me-Turan: Death, Bull), Fleming and Milstein 2010, Katz 2010 (Aga).

## Line numbering
ETCSL composite numbers; segments and versions as the table above (`bilgames_tools.py lines KEY FROM TO`). The literature cites Ḫuwawa A by ETCSL's (= Edzard's) numbers; Death of Bilgameš by Cavigneaux–Al-Rawi's segments (Me-Turan) and Civil's / George's "N" (Nibru).

## Related texts already translated (consult; the Sumerian differs from every Akkadian adaptation – each difference is a finding)
- **GEN** (`../../העולם-התחתון/4-…/annotated-1…4.rtl.md`): the same names, formulas and vocabulary (`python3 -I bilgames_tools.py rel KEY FROM TO` lists the near-identical lines with their Hebrew). The last Me-Turan line of GEN opens "Bilgameš and Ḫuwawa".
- **The Akkadian epic** (`../1-הנוסח-הבבלי-התקני/`, `../2-הנוסח-הבבלי-הקדום/`): Ḫuwawa A ↔ OB III (Yale) 140–160 (the "who can go up to heaven" speech; the name), OB Ishchali, Schøyen₂, SB II–V (the cedar forest, the auras); the Bull of Heaven ↔ SB VI; the Death ↔ SB VIII (the funeral; the river burial is not there) and SB XI 1–208 (Ziusudra / Ūta-napišti); Aga has no Akkadian counterpart.
- **Ḫuwawa A 28–29** is quoted in Akkadian in the Dialogue of Pessimism 83–84 (`../../ספרות-החכמה-והצדיק-הסובל/5-…`): the Sumerian takes the same Hebrew where the words are the same (guidelines §5.2, "A formula takes the same Hebrew across languages").
- **The Sumerian King List** (flood references §1): Gilgameš, Aga, Enmebaragesi, Kiš.
- **Enmerkar and the Lord of Aratta** (`../../אגדות-מלכים/1-…`): Unug, Kulaba, Eana, the auras (*me-lem₄* `זוהר`, *ni₂* `אימה`).

## Comparisons to watch (look for; never translate toward them; renderings §23)
HA: death and the wall (Ps 49:8–13, Qoh 1:4, Job 14:10–12; "who goes up to heaven" Deut 30:12, Prov 30:4); making a name (Gen 11:4, 2 Sam 8:13, Isa 56:5); the cedar felled (Isa 14:8, 37:24; Ezek 31:3–18); the guardian's auras (Gen 3:24); *kur lu₂ til₃-la* "the land of the living man" (Ps 116:9, Isa 38:11 `אֶרֶץ הַחַיִּים`; GEN MT uses `ארץ האיש החי`); the oath by the mother and father (Gen 31:53?); the plea for life of the defeated (1 Kgs 20:31–34, Ahab and Ben-Hadad; 1 Sam 15:32–33). HB: the same. BH: the goddess's desire and its refusal (Gen 39), the divine bull, meat for the poor and the orphan (Deut 14:29), the haunch thrown (?). AG: **the elders and the young men consulted (1 Kgs 12:6–14; Rehoboam)** – here the young men are right: a [divergence] of the deepest kind; the siege, the envoy, the man on the wall (2 Kgs 18:17–37); a debt of life repaid (1 Sam 24:18–20). DB: lying down without rising (Job 14:12 `וְאִישׁ שָׁכַב וְלֹא יָקוּם`); the death-dream and the divine council (1 Kgs 22:19–22; Job 1–2); "no man lives for ever" (Ps 89:49); the king told he will die (2 Kgs 20:1); the netherworld rank of the dead king (Isa 14:9–11; Ezek 32:21–32); the burial with the household (contrast Gen 23, 49:29–33, 50); the river diverted for the tomb; the gifts to the netherworld gods (Deut 26:14); the flood survivor (Gen 9:28–29).

**The ancient mind (for the הערות):** the fear of an anonymous death and the cure of a name; the hero who thinks of death in his prime (HA 20–33); the god of justice (Utu) as the patron of a just expedition; the seven warriors as the god's gift; the guardian's auras as clothes he can take off; the trickery and the pity; the gods' anger at killing; the goddess refused; the king's two councils; the debt of life; the dream of the divine assembly; the place of a dead king among the dead; the household who go with him; the tomb under the river.

## Parts (one translator at a time; range A: one agent)
1. **HA** whole (305), in two parts (1–148, 148A–202); then **HB** whole (copies HA wherever the Sumerian is the same).
2. **BH** whole (277), then **AG** whole (117).
3. **DB** whole (495): DB-1 (Nibru and N2, 213), DB-2 (Me-Turan, 282; the 42 excerpt lines are prefilled from the flood references: revise them, and list every revision under "Excerpt revisions", the coordinator applies it to the flood file).
4. An independent fidelity review of each text.

## Open decisions
(numbered; the translators add)

## Proposals for the corpus renderings
(the translators add, per part)

## Progress
- 2026-11-06: sources converted (ETCSL 1.8.1.1, 1.8.1.2, 1.8.1.5, 1.8.1.5.1; ORACC Q000361–Q000366), `bilgames_tools.py`, skeletons of all six annotated files (1,332 entries), the excerpt copied into DB-2, renderings §23 fixed (the coordinator).

## Parallels index
Per text, under the headings `### Parallels index (Tablet HA)`, `… (Tablet HB)`, `(Tablet BH)`, `(Tablet AG)`, `(Tablet DB)`, columns exactly `| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |` (Bible = the vocalized verse(s) in backticks followed by the reference); merged into `../parallels-index.md` by `../build_parallels_index.py`.

## Part 1 (HA 1–202)
Translator: Round 6 run 1, part 1 (2026-11-06). The whole of Bilgameš and Ḫuwawa A in one part (the plan's two parts merged at the coordinator's request).

### Progress
- **305 / 305 entries drafted** (1–202 with all of ETCSL's pluses), with the header paragraphs and twelve `## ` section headings, in `annotated-HA.rtl.md`.
- Three review passes: (a) **fidelity** – every `>` line re-read against its transliteration and ORACC morph (fixes: 128 singular "toenail" against ETCSL's plural; 62 the temporal clause *bal-e-da-bi*; 13 the ambiguous `בגדי` vocalized `בִּגְדִי`; 159 a doubled `לו`); (b) **consistency** – a script grouped identical cleaned transliterations: every identical Sumerian line has identical Hebrew (the oath ×11, the place formula ×6, the request ×6, the gift ×6, the three-line refrain ×6, the "Nth time" line ×7, 4–7 = 30–33, 50 = 52, 130–132 = 164–166); GEN copies checked (MT.B71 → 1, 176 → 8, 183 → 21, 145 → 58 etc., 146 → 147, 167 → 152F, 51 → 45); (c) **Hebrew** – read aloud; `האדון` of 1 unvocalized as GEN MT.B71; `הָהָבְנִים`, `אֲחָזַתְהוּ` vocalized.
- `python3 -I bilgames_tools.py verify HA`: **1 problem, not in the Hebrew but in the gate**: line 113 `ספינת מָגָן` – Magan (`מָגָן` ★, the corpus's name, `../../translation-guidelines.md` §6.7) trips the corpus-wide `גן` gate (*kiri₆*). The kings corpus solved the same trap by licensing *magan* in its own gate (`kings_tools.py` RESERVED_CL). **Request to the coordinator:** add `ma₂-gan|magan` to the licences of the `גן` gate for this project (RESERVED_B, or the netherworld gate's list). The Hebrew is right and stays.
- `python3 -I ../../tools/check_bible_quotes.py annotated-HA.rtl.md project.md`: 0 problems (every verse printed first).

### Open decisions
1. **Magan and the `גן` gate** (above): a licence for *ma₂-gan* is needed; until then `verify HA` reports 113.
2. **Plural *ur-saĝ* = `לוחמים`** (36, 58A): the singular stays `גיבור` (GEN), but the plural `גיבורים … הם` would reproduce Gen 6:4 `הֵמָּה הַגִּבֹּרִים … אַנְשֵׁי הַשֵּׁם` in a poem about the name, and the gate reserves `גבורים` (the plene `גיבורים` would slip past it). A split by number; HB (14 *ur-saĝ*) should follow. Accept, or prefer another plural?
3. ***ur₂* = `חיק`** throughout HA (Utu to his mother's lap, 80; "the child of the lap", 134; the captive to his mother's lap, 162, 173; and "the lap of the ramah" = its foot, 83, 148 …), against GEN's `שֹׁרֶשׁ` (a tree's roots): the Sumerian plays on one word for the mother's lap and the mountain's foot. A sense split, recorded.
4. ***la₂***: `מתח` (25 the neck, 28 "the tall man does not stretch to heaven", 67 terror, 78 the shadow) and `כפת` (152b, binding arms). Sense split.
5. ***gub***: `הציב` with ear / foot (1, 54, 56, 95; GEN), `העמיד` with name (6–7; §23.3), `עמד` intransitive (83, 88, 132, 166). Three Hebrew for one verb, by construction, as fixed by the corpus.
6. ***dim₂* `אֵעָשֶׂה`** in 91 (*ak* = `עשה` elsewhere): `ייבנה לי` (Akk. *banû*) is unintelligible there. ***zi … pad₃*** "swear (lit. find the life of)" = `נשבע` in 157 (*pad₃* = `מצא` elsewhere): idiom by sense.
7. ***umun₂*** (119) and ***uš₂*** (103A) both `דם` (umun₂ italic): ORACC and ETCSL read *umun₂* "blood"; no better word.
8. **Uncertain words left in italics** (decide when an edition is available): *muš-šag₄-tur₃* `*נחש־הרחם*` (38), *muš-saĝ-kal* `*נחש־הראש*` (41), *ma₂-ur₃* `*מגררות־הספינות*` (44, 60), *ĝi₆-edin* `*חשכת־הערבה*` (56), *ma₂-da-la₂* `*ספינת־הגרר*` (107, 115), 115's *zi-šag₄-ĝal₂* line, *u₃-luḫ … lum-lum sud-sud* `*שופע הפרי, ארוך הנצר*` (130, 164; ETCSL reads a sceptre), *gar₃ ĝeštin* `*פְּקַעַת־הגפן*` (150), *zid₂-eša* `קמח־*אֵשָׁה*` (148O), the stones *du₈-ši-a*, *nir₇* transliterated (148TT; not `בְּדֹלַח`, Gen 2:12).
9. **27 *nam-ba-ak-e*** read as a statement ("so it will be done to me"), not a prohibitive: the context and *ḫe₂-me-a* decide; the note gives the other reading.
10. ***inga-*** rendered by context: `עוד` (the "Nth time" formula), `כבר` (122), not rendered in the praise lines 133–134 / 168–169 (emphatic).

### Proposals for the corpus renderings (binding HB and the later texts unless revised)
**Formulas and refrains fixed in HA** (for `verify`; HB copies wherever its Sumerian is the same):
| Sumerian | Hebrew | Lines |
|---|---|---|
| *kur lu₂ til₃-la* … *ĝeštug₂ … gub* | `האדון – אל ארץ האיש החי – את אוזנו הציב.` (= GEN MT.B71) | 1, 2 |
| the name lines *kur-ra ga-an-kur₉ mu-ĝu₁₀ ga-am₃-ĝar* / *ki mu gub-bu-ba-am₃ mu-ĝu₁₀ ga-bi₂-ib-gub* / *ki mu nu-gub-bu-ba-am₃ mu diĝir-re-e-ne ga-bi₂-ib-gub* | `אל ההר אָבוֹא – את שמי אשים;` / `במקום אשר שֵׁם עומד בו – את שמי אעמיד;` / `במקום אשר שֵׁם אינו עומד בו – את שם האלים אעמיד.` | 5–7 = 31–33 |
| *murgu ĝuruš-e til₃-la saĝ til₃-le-bi-še₃ la-ba-ra-an-e₃-a* | `מאחר שהבחור – מגב החיים, אל קִצָּם – לא יצא,` | 4, 30 |
| *lu₂ sukud-ra₂ an-še₃ nu-mu-un-da-la₂* / *lu₂ daĝal-la kur-ra la-ba-an-šu₂-šu₂* | `האיש הגבוה – אל השמים לא יימתח;` / `האיש הרחב – את ההר לא יכסה.` (DP 83–84 `אֵיזֶהוּ ארוך – אשר אל השמים יעלה?` / `אֵיזֶהוּ רחב – אשר את הארץ יקיף?`: only `אל השמים` and `רחב` are the same words) | 28–29 |
| the seven: *ur-saĝ dumu ama dili-me-eš 7-me-eš*; *1-am₃ šeš-gal-bi šu piriĝ-ĝa₂ umbin ḫu-ri₂-in-na*; *ma₂-ur₃-ma₂-ur₃ ḫur-saĝ-ĝa₂-ke₄ ḫu-mu-ni-in-tum₂-tum₂-mu*; *7-bi-e-ne ur-saĝ šul {d}utu … mu-un-na-ra-an-šum₂* | `לוחמים, בני אם אחת הם – שבעה הם.`; `הראשון, אחיהם הגדול – יד לביא, ציפורן נשר;`; `אל *מגררות־הספינות* של הרמה – יובילוהו!`; `את שבעתם – הגיבור, העלם אוּתוּ – לגילגמש נתן.` (ordinals `השני` … `השביעי`) | 36–45, 58A–60 |
| the muster *e₂ tuku e₂-a-ni-še₃ ama tuku ama-a-ni-še₃* / *nitaḫ saĝ-dili X-gin₇ ak a₂-X-še₃ …* | `מי שיש לו בית – אל ביתו! מי שיש לו אם – אל אמו!` / `זכרים בודדים, עשויים כמוני – אל זרועי ייעשו!` → `… כמוהו – חמישים – אל זרועו נעשו.` | 50–53 |
| the axes *{urud}a₂-aš-ĝar {urud}aga-silig a₂ nam-ur-saĝ-ni … de₂* | `את הקרדום, את הגרזן – זרוע גבורתו – שופך הוא שם;` (*de₂* = `שפך`, = OB III *šapāku*) | 55 |
| the ranges *ḫur-saĝ N-kam-ma … bal {ĝiš}erin šag₄-ga-ni nu-mu-ni-in-pad₃* / *nu-mu-un-na-šub* | `את הרמה ה־N עבר – את הארז לבו לא מצא.` / `– הארז אל לבו לא נפל;`; the seventh `את הרמה השביעית – בעוברו אותה – את הארז לבו מצא.` | 61–62 |
| the felling *pa-bi i₃-ku₅-ru-ne zu₂ (ba-an-/bi-)keše₂-re-ne* / *ur₂ ḫur-saĝ-ĝa₂-ka mu-ni-ib-nu₂-(u₃-ne/nu₂-e)* | `את ענפיו כורתים, *אוגדים*;` (= GEN 146) / `בחיק הרמה – משכיבים אותם.` | 147–148, 148I–AAA |
| *dumu iri-na mu-un-de₃-re₇-eš-am₃* | `בני עירו, אשר הלכו עמו,` (= GEN 145; *-za* `עירך … עמך`; *iri{ki}* alone `בני העיר`) | 58, 70, 82, 146, 148I … |
| the oath *zi ama ugu-ĝu₁₀ {d}nin-sumun₂-ka a-a-ĝu₁₀ kug {d}lugal-ban₃-da* | `"חֵי אמי הורתי, נִינְסוּן, ואבי, לוּגַלְבַּנְדָּה הטהור!` (`חֵי` always vocalized) | 90 … 148RR (11×) |
| *N-kam-ma-še₃ in-ga-nam-mu-na-ab-be₂* | `לפעם ה־N – עוד אומר לו:` (without *-še₃*: `פעם N־ית – עוד אומר לו:`) | 92, 140, 148A … |
| *kur-ra tuš-a-zu ba-ra-zu kur-ra tuš-a-zu ḫe₂-zu-am₃* | `ישיבתך בהר – בַּל נודעה; ישיבתך בהר – תיוודע!` | 138 … 148SS (6×) |
| the gift *X … kur-ra ḫu-mu-ra-ni-kur₉-ra* / *…-DU-en* | `X – אל ההר אכן הבאתי לך!` (*kur₉*) / `אל ההר אכן הובלתי לך;` (*DU*) | 139, 143, 148E … |
| *su-zu-a / su-zu-am₃ nu-mu-ra-teĝ₃-ĝe₂₆-de₃-en* | `אל בשרך – לא אתקרב?` / `בשרך הוא – לא אתקרב?` | 148F … |
| the request *ni₂-zu ba-am₃-ma-ra su-za / su-zu-am₃ ga-an-kur₉* | `את אימותיך חֲלֹק לי – אל בשרך אָבוֹא!` / `… – בשרך הוא – אָבוֹא!` | 144, 148G … |
| the handing over *ni₂ te-a-ni N mu-na-ra-an-ba* | `את אימתו ה־N חלק לו.` (`הראשונה` for *1-am₃*); 149 `כאשר תמה לו אימתו השביעית – אל צדו התקרב.` | 145 … 148XX, 149 |
| the praise *i₃-a lum-lum u₃-luḫ-ḫa sud-sud / dumu-gir₁₅ giri₁₇-zal diĝir-re-e-ne / gud lipiš-tuku me₃-a gub-ba* | `"הוֹי, *שופע הפרי, ארוך הנצר*, / בן־חורין, ששון האלים, / שור רוגז, העומד בקרב!`; *ama-zu dumu tud-da maḫ-bi in-ga-an-zu* `אמך – ללדת בן – ידעה עד מאוד;`; *emeda-zu dumu (ur₂-ra) ga gu₇ …* `אומנתך – להאכיל חלב את (בן־החיק / הבן) – ידעה עד מאוד!` | 130–134 = 164–169 |
| the release *mušen dab₅-ba ki-bi-še₃ ḫa-ba-du / ĝuruš dab₅-ba ur₂ ama-na-še₃ ḫe₂-gi₄-gi₄* | `הציפור האחוזה – אל מקומה תלך! / הבחור האחוז – אל חיק אמו ישוב!` → Enkidu's mockery (*du-a-bi*, *gi₄-gi₄-dam*) `ציפור אחוזה – ללכת אל מקומה?! / בחור אחוז – לשוב אל חיק אמו?!` | 161–162, 172–173 |
| *ĝuruš … iri ama tud-da-zu nu-ub-ši-(in-)gur-ru-de₃(-en)* | `אל עיר אמך יולדתך לא תשוב!` | 125, 174 |
| the auras *me-lem₄-a-ni N … X-še₃ ba-an-šum₂* | `את זוהרו ה־N – ל־X נתן;` | 193–199 |
| *a-na-aš-am₃ ur₅-gin₇ i₃-ak-en-ze₂-en* | `"למה כך עשיתם?` | 187 |

**Words** (shared lemmas; grep before changing): *kur* `הר` (`ההר`, singular in HA, so that 29 "cannot cover the mountain" and 31 "let me enter the mountain" stay one word); *ḫur-saĝ* `רָמָה` (= Akk. *ḫuršānu* `רָמָה`, the loan keeps one Hebrew; vocalized at the first); *kur₉* / *ku₄* `בוא` (causative `הביא`), *DU* / *tum₂* / *tum₃* `הוביל`; *mu* `שֵׁם`; *gub* (see decision 5); *dim₂-ma* `טַעַם` (= Akk. *ṭēmu*; `דַּעַת` impossible, the root ידע is *zu*'s) – 11 and 170; *zu* `ידע`; *ur₂* `חיק`; *ama ugu* `אם הורה` / *ama tud* `אם יולדת`, *buluĝ₃* `גידל`; *zi* (oath) `חֵי`; *ba* `חלק` (to give a share) against *šum₂* `נתן`; *ni₂* and *ni₂ te(-a)* both `אימה` (= *puluḫtu*; OB III `שבע אימות`), *ni₂ te* (verb) `ירא` (GEN), *ni₂ ri* `הטיל אימה` (Gudea); *me-lem₄* `זוהר`; *su* `בשר` (kin); *arḫuš* `רחמים`; *dumu-gir₁₅* `בן־חורין`; *ĝuruš* `בחור`, *šul* `עלם`, *ur-saĝ* `גיבור` (pl. `לוחמים`), *nitaḫ* `זכר`, *saĝ-dili* `בודד`, *dili* `אחד` / `יחיד`; *arad* `עבד`, *lugal* `מלך`, *en* `אדון` (*en* priest `כוהנת־אֵן`); *sag₃* `הכה` (23 the heart, 46 "the cedar-striker", 57, 64), *kud* `כרת` (9A the mountain's name, 147 branches, 179 the neck), *ra* `מחץ`, *du₇* `נגף` (= Akk. *nakāpu*), *šub* `השליך` / `נפל`, *dab₅* `אחז`, *la₂* (decision 4), *šuš* `כיסה`, *dul* `העטה`, *sig₁₀* `הניח`, *ĝar* `שׂם`, *tag* `נגע`, *su-ub* `נשק`, *teĝ₃* `התקרב`, *us₂* `דבק`, *de₂* `שפך` (cast), *taḫ* `הוסיף` (*a₂-taḫ* `מוסיף־זרוע`; `עֵזֶר` reserved), *tuku* `יש לו`, *bal* `עבר` (a range; "turn over" `התהפך`), *nu₂* `שכב` / `השכיב`, *zi* `קם`, *gi₄* / *gur* `שוב`, *u₅* `רכב`, *igi du₈* `ראה`, *igi bar* `הביט`, *igi* `עין`, *er₂ pad₃* `דמעות מצא` (GEN), *er₂ še₈* `בכה`; *bad₃* `חומה`, *ad₆* `פגר`, *tilla₂* `כיכר`, *e₂ simug* `בית הנפח`, *kiri₆* `גן`, *ĝiš-gi* `סבך הקנים`, *a-šag₄* `שדה`, *id₂* `נהר`, *tir* `יער`, *e₂-gal* `היכל`; *erin* `אֶרֶז`, *esi* `הָבְנִים`, *ḫa-lu-ub₂* `עֵץ־הַחַלּוּבּ`, *ḫašḫur* `תפוח`, *taškarin* `תאשור`; *piriĝ* `לביא`, *ur-maḫ* `אריה`, *ḫurin* `נשר`, *ušum(gal)* `דרקון`, *am* `רְאֵם`, *gud* `שור`, *ur-gir₁₅* `כלב`, *mušen* `ציפור`, *muš* `נחש`; *ĝidru* `שרביט`, *kug* `טהור`, *tug₂* `שׂמלה`, *giĝ₄* `שקל`, *i₃* `שמן`, *ummud* `נֹאד`, *e-sir₂* `נעל`, *a-ĝa₂-la₂* `שק`, *saman* `אפסר`, *eš₂* `חבל`, *nindan* `קנה`, *ma₂* `ספינה`, *za-gin₃* `סַפִּיר`; *a₂-aš-ĝar* `קרדום`, *aga-silig* `גרזן`; *nam-ur-saĝ* `גבורה`; *u₃-sa₂* `שינה`, *ma-mu₂* `חלום`; *nam-tag* `עוון`; *nam-tar* `גורל`; *lul* `שקר`; *ḫuĝ* `שכר` (`שָׂכִיר`); *ḫi-li* `חן` (ETCSL's "wig" again, 174B); *šag₄-ne-ša₄* `תחנונים`; *mi₂ dug₄* `חיבב`; *za₃-mi₂* `תהילה`; *giri₁₇-zal* `ששון`; *silim* `שלום`; *kadra* `מתנה`; *maš₂-da-ri-a* `דורון` (`מִנְחָה` stays *sa₂-dug₄*'s); *emeda* `אומנת`; *me-te* `הראוי`; *sug₄* `גדוש`; *niĝ₂-me-ĝar* `דממה`. **Avoided** (echo control, the note at each line): `גיבורים` (Gen 6:4), `הבה` (Gen 11:3–4; *ĝar-ra* `עתה`, 107), `לוהטת` (Gen 3:24's `לַהַט`, kept for the auras' comparison; 40 `יוקדת`), `פנים` for *igi* (Ezek 1:10's lion face; `עין`), `בְּדֹלַח` (Gen 2:12), `עֵזֶר`, `טֶרֶם` (121 `עוד … לא`).

### Key findings
**The ancient mind.** The poem's question is death and its answer is a name: Gilgameš sees one anonymous corpse floating past the wall (23–26), knows that "the tall man does not stretch to heaven" (28), and goes to "set up his name" – and, where no name stands, the gods' name (5–7): the expedition is also an act of piety. Utu accepts not the kids and the sceptre but the **tears** as the gift (34). The guardian's **terrors are property** – cast (126), handed out one by one in exchange for gifts (145 …), and finally, after his death, his **auras distributed** by Enlil to the field, the river, the reeds, the lion, the palace, the forests and the prison goddess (193–199): everything fearsome in the world is an inheritance from the dead guardian. The Sumerian keeps two words apart (*ni₂ te* "terror" given by Ḫuwawa with *ba* "allot"; *me-lem₄* "aura" given by Enlil with *šum₂* "give"), which ETCSL's English blurs. The **trick** is told with humour (a king of Kiš offered as "my big sister", shoes for big and small feet, mountain stones brought to the mountain) and with unease: the captive weeps, says he never knew mother or father (155), and Enlil asks "Why did you do this?" – Ḫuwawa should have eaten their bread (187–192). The **mothers** run through the poem: the bachelors leave because they have no house (50–53), their mothers wait in the square (84), Gilgameš swears by his mother, Ḫuwawa praises it, Gilgameš wants the captive returned "to his mother's lap" (162), and Ḫuwawa's curse – "you will not return to the city of your mother who bore you" (125) – is turned by Enkidu against Gilgameš (174). Wordplay kept in the Hebrew: *ur₂* `חיק` (mother's lap = the mountain's foot); *la₂* `מתח` (the neck stretched over the wall, the tall man who does not stretch to heaven, the evening shadow stretched over the mountain); *dim₂-ma* `טַעַם` (the mountain's "decision" is Utu's, 11; the lofty king "has no sense", 170, with *sukud* "tall" from 28); *kud* `כרת` (the Mountain of Cedar-cutting, the branches, the neck); *nu₂* `שכב` (the sleeping king who does not rise, 74–77; the felled cedars "laid down", 148); *kur₉* `בוא` (enter the mountain, 5 = enter the flesh, 144).
**The Bible** (all shared motifs, not sources; the full list in the index):
- **The muster and its exemptions** (50–53) ↔ Deut 20:5–8 [equivalent/divergence]: the men with a house go home – here because the expedition takes only those who have nothing to lose.
- **"Two are better than one … the threefold cord"** (107–111) ↔ Qoh 4:9–12 [equivalent]: the closest wording – a threefold thing that no one cuts – after a sequence on two men together; the Hebrew `משולשת` is the natural word, and the parallel is real.
- **The kiss that is a blow** (151) ↔ 2 Sam 20:9–10, Joab and Amasa [equivalent].
- **The king who spares a captive king and the rebuke** (159–174) ↔ 1 Kgs 20:31–42, Ahab and Ben-Hadad (`וְהָיְתָה נַפְשְׁךָ תַּחַת נַפְשׁוֹ` ~ "you will not return to your mother's city") and 1 Sam 15:33, Agag [equivalent/divergence]: in the Bible the prophet speaks for God; here the slave, and the god (Enlil) is angry at the killing.
- **A marriage offer as a ruse before killing** (139–149) ↔ Gen 34:13–16 [divergence] (our proposal).
- **The oath "by the life of"** *zi* (90 …) ↔ `חֵי פַרְעֹה` (Gen 42:15) [equivalent]; heaven and earth as witnesses (157) ↔ Deut 30:19.
- **The name** (5–7) ↔ Gen 11:4 `וְנַעֲשֶׂה לָּנוּ שֵׁם` [equivalent/divergence], 2 Sam 8:13, 2 Sam 18:18 (Absalom's pillar "to keep my name in remembrance"); **the cedar-cutter king** (61–64, 148) ↔ Isa 37:24, 14:8 [equivalent].
- **The saying 28–29 in its three forms**: Sumerian statement (tied to the plot: "the mountain" he will enter); OB III 140 question ("who has gone up to heaven?", same conclusion: make a name); Dialogue of Pessimism 83–84 question with the opposite conclusion; Deut 30:12 / Prov 30:4 have the question's form (`מי יעלה … השמימה`), i.e. the Akkadian shape, not the Sumerian. The Akkadian changed *sukud* "tall" → *arku* "long", *la₂* "stretch" → *elû* "go up", *kur* "the mountain" → *erṣetu* "the earth", *šuš* "cover" → *gamāru* "encompass"; only "to heaven" and "wide" (*daĝal* = *rapšu*) survive – and only they are the same Hebrew.
- **Gen 3:24** (the guardian's flame) ↔ the auras (193): tagged [equivalent] as a motif only; the Hebrew avoids `להט` everywhere (40).
- **Corrections of ETCSL that matter**: 23 "people are dying" is one man (*lu₂ ba-uš₂*); 26 "corpses … make the river almost overflow" is one corpse floating in water; 101 "face" is *igi* "eye"; 174B "wig" is *ḫi-li* "allure" (the same ETCSL slip as in Inana's Descent); 186 "he spoke angrily" is "his heart was seized at Gilgameš's word"; 126 ETCSL's passive is ORACC's active (Ḫuwawa casts the terror).

### Parallels index (Tablet HA)
| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | *kur lu₂ til₃-la* | ארץ האיש החי | `אָמַרְתִּי לֹא אֶרְאֶה יָהּ יָהּ בְּאֶרֶץ הַחַיִּים` (ישעיהו לח:יא) | [equivalent] | "The land of the living man" (singular); = GEN MT.B71, the last line of GEN's Me-Turan version. |
| 5 | *mu-ĝu₁₀ ga-am₃-ĝar* | את שמי אשים | `וְנַעֲשֶׂה לָּנוּ שֵׁם` (בראשית יא:ד) | [equivalent] | A name against death and oblivion; Babel builds toward heaven, Gilgameš knows no one reaches it (28) and goes to the mountain. = OB III 161 *šuma … luštakna*. |
| 5 | *mu ĝar* | את שמי אשים | `וַיַּעַשׂ דָּוִד שֵׁם` (שמואל ב ח:יג) | [equivalent] | The name made by a campaign. |
| 6 | *mu gub* | את שמי אעמיד | `וַיַּצֶּב לוֹ בְחַיָּו אֶת מַצֶּבֶת` (שמואל ב יח:יח) | [equivalent] | The name that "stands": a monument. |
| 23 | *lu₂ ba-uš₂* | איש מת | `כִּי יִרְאֶה חֲכָמִים יָמוּתוּ` (תהלים מט:יא) | [equivalent] | Seeing others die as the start of thinking on one's own death; Ps 49:12 mocks the names on the land. ETCSL's plural corrected. |
| 28 | *lu₂ sukud-ra₂ an-še₃ nu-mu-un-da-la₂* | האיש הגבוה – אל השמים לא יימתח | `מִי יַעֲלֶה לָּנוּ הַשָּׁמַיְמָה` (דברים ל:יב) | [equivalent] | The Bible has the question form of the Akkadian adaptations (DP 83, OB III 140), not the Sumerian statement. |
| 28 | *an-še₃ … la₂* | אל השמים לא יימתח | `מִי עָלָה-שָׁמַיִם וַיֵּרַד` (משלי ל:ד) | [equivalent] | Same. |
| 29 | *lu₂ daĝal-la kur-ra la-ba-an-šu₂-šu₂* | האיש הרחב – את ההר לא יכסה | `אֲרֻכָּה מֵאֶרֶץ מִדָּהּ; וּרְחָבָה מִנִּי-יָם` (איוב יא:ט) | [equivalent] | The pair of dimensions; DP 84 changed "the mountain" to "the earth". |
| 34 | *er₂-na kadra-gin₇ šu ba-an-ši-in-ti* | את דמעותיו, כמתנה, לקח | `שָׁמַעְתִּי אֶת תְּפִלָּתֶךָ רָאִיתִי אֶת דִּמְעָתֶךָ` (מלכים ב כ:ה) | [equivalent] | The god sees the king's tears; Hezekiah gets years, Gilgameš help for a name. |
| 35 | *arḫuš* | רחמים | `כִּי נִכְמְרוּ רַחֲמָיו אֶל אָחִיו` (בראשית מג:ל) | [equivalent] | *arḫuš* is "womb" and "compassion", like `רֶחֶם` / `רַחֲמִים` (a non-Semitic language: a shared image, not a cognate). |
| 48 | *si gu₃ ra* | תקע בקרן | `וַיִּתְקַע בַּשּׁוֹפָר בְּהַר אֶפְרָיִם` (שופטים ג:כז) | [equivalent] | The horn of mustering. |
| 48 | *lu₂ dili-gin₇* | כאיש יחיד | `וַיֵּצְאוּ כְּאִישׁ אֶחָד` (שמואל א יא:ז) | [divergence] | "As one man" or "for single men" (ETCSL); `יחיד` keeps both readings and does not copy the biblical idiom. |
| 50 | *e₂ tuku e₂-a-ni-še₃ ama tuku ama-a-ni-še₃* | מי שיש לו בית – אל ביתו! מי שיש לו אם – אל אמו! | `מִי הָאִישׁ אֲשֶׁר בָּנָה בַיִת חָדָשׁ וְלֹא חֲנָכוֹ יֵלֵךְ וְיָשֹׁב לְבֵיתוֹ` (דברים כ:ה) | [equivalent] | The exemptions before war; here the bachelors go because they have no one. |
| 50 | (same) | (same) | `מִי הָאִישׁ הַיָּרֵא וְרַךְ הַלֵּבָב יֵלֵךְ וְיָשֹׁב לְבֵיתוֹ` (דברים כ:ח) | [divergence] | Deut sends home the fearful; HA keeps the fearful Enkidu (117–119). |
| 61 | *ḫur-saĝ … bal … {ĝiš}erin … pad₃* | את הרמה … עבר – את הארז לבו לא מצא | `אֲנִי עָלִיתִי מְרוֹם הָרִים יַרְכְּתֵי לְבָנוֹן; וְאֶכְרֹת קוֹמַת אֲרָזָיו` (ישעיהו לז:כד) | [equivalent] | The king who goes up the mountains to cut cedars: Sennacherib's boast; a royal Mesopotamian topos. |
| 64 | *{ĝiš}erin-na al-sag₃-ge* | את הארז מכה | `מֵאָז שָׁכַבְתָּ לֹא יַעֲלֶה הַכֹּרֵת עָלֵינוּ` (ישעיהו יד:ח) | [equivalent] | The cedar-cutter; with 148. |
| 68 | *u₃-sa₂-gin₇ ba-an-dab₅* | כשינה אֲחָזַתְהוּ | `וְתַרְדֵּמָה נָפְלָה עַל אַבְרָם; וְהִנֵּה אֵימָה חֲשֵׁכָה גְדֹלָה נֹפֶלֶת עָלָיו` (בראשית טו:יב) | [divergence] | Sleep and terror at sunset (our proposal); here a danger, not a revelation. |
| 74 | *nu-mu-un-na-an-zi-zi-i* | אינו קם לו | `וְאִישׁ שָׁכַב וְלֹא-יָקוּם` (איוב יד:יב) | [equivalent] | The sleeper who does not rise – the death formula of the Death of Bilgameš (§23.3). |
| 86 | *tug₂-gin₇ … dul* | כשׂמלה – העטה עליו | `עֹטֶה-אוֹר כַּשַּׂלְמָה` (תהלים קד:ב) | [equivalent] | Wrapping in a non-garment "like a garment". |
| 90 | *zi ama ugu-ĝu₁₀ … a-a-ĝu₁₀ …* | חֵי אמי הורתי … ואבי | `חֵי פַרְעֹה אִם תֵּצְאוּ מִזֶּה` (בראשית מב:טו) | [equivalent] | The oath "by the life of"; 11 copies. |
| 90 | *ama ugu-ĝu₁₀* | אמי הורתי | `וְאֶל חֶדֶר הוֹרָתִי` (שיר השירים ג:ד) | [equivalent] | `הורה` "she who conceived" for *ugu* (against *tud* `ילד`). |
| 107 | *lu₂ 2-e nu-uš₂-e* | שני אנשים – לא ימותו | `טוֹבִים הַשְּׁנַיִם מִן הָאֶחָד` (קהלת ד:ט) | [equivalent] | The wisdom of "two"; Qoh: work and help, HA: "will not die". |
| 107 | (same) | (same) | `כִּי אִם יִפֹּלוּ הָאֶחָד יָקִים אֶת חֲבֵרוֹ` (קהלת ד:י) | [equivalent] | Same sequence. |
| 108 | *tug₂ 3 tab-ba lu₂ nu-kud-de₃* | שׂמלה משולשת – איש לא יכרות | `וְהַחוּט הַמְשֻׁלָּשׁ לֹא בִמְהֵרָה יִנָּתֵק` (קהלת ד:יב) | [equivalent] | The threefold thing that is not cut; Qoh a cord, HA a cloth; both pass from two to three. |
| 139 | *nam-dam-še₃ … ḫu-mu-ra-ni-kur₉-ra* | לאישות – אל ההר אכן הבאתי לך | `וְנָתַנּוּ אֶת בְּנֹתֵינוּ לָכֶם וְאֶת בְּנֹתֵיכֶם נִקַּח לָנוּ; וְיָשַׁבְנוּ אִתְּכֶם וְהָיִינוּ לְעַם אֶחָד` (בראשית לד:טז) | [divergence] | A marriage alliance as a ruse before killing (our proposal); Enmebaragesi is a king of Kiš, not a sister. |
| 139 | (same) | (same) | `וַיַּעֲנוּ בְנֵי יַעֲקֹב אֶת שְׁכֶם וְאֶת חֲמוֹר אָבִיו בְּמִרְמָה` (בראשית לד:יג) | [divergence] | Same. |
| 144 | *su-za ga-an-kur₉* | אל בשרך אָבוֹא | `אַךְ עַצְמִי וּבְשָׂרִי אָתָּה` (בראשית כט:יד) | [equivalent] | "Flesh" = kin in Sumerian (*su*), Hebrew and Akkadian (*šīru*). |
| 144 | (same) | (same) | `כִּי אָחִינוּ בְשָׂרֵנוּ הוּא` (בראשית לז:כז) | [equivalent] | Same. |
| 144 | *ba* | חֲלֹק לי | `וְלֹא-חָלַק לָהּ בַּבִּינָה` (איוב לט:יז) | [equivalent] | `חלק ל־` "give a share", for *ba* (against *šum₂* `נתן`). |
| 148 | *ur₂ ḫur-saĝ-ĝa₂-ka mu-ni-ib-nu₂-u₃-ne* | בחיק הרמה – משכיבים אותם | `מֵאָז שָׁכַבְתָּ לֹא יַעֲלֶה הַכֹּרֵת עָלֵינוּ` (ישעיהו יד:ח) | [equivalent] | The felled cedars "laid down" with the verb of sleep and death. |
| 148O | *{kuš}ummud a sed₄* | נֹאד של מים קרים | `מַיִם קָרִים עַל-נֶפֶשׁ עֲיֵפָה` (משלי כה:כה) | [equivalent] | Cold water as the best gift. |
| 148TT | *{na₄}du₈-ši-a {na₄}nir₇ {na₄}za-gin₃-na* | אבן־הַדּוּשִׁיָּא, אבן־הַנִּיר, אבן־הַסַּפִּיר | `שָׁם הַבְּדֹלַח וְאֶבֶן הַשֹּׁהַם` (בראשית ב:יב) | [divergence] | Precious stones of a far land (our proposal); `בְּדֹלַח` avoided for *du₈-ši-a*. |
| 148TT | *za-gin₃* | סַפִּיר | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר` (שמות כד:י) | [equivalent] | The biblical `סַפִּיר` is lapis lazuli (harmonization 2026-10-21). |
| 151 | *ne mu-un-su-ub-ba-gin₇ te-na tibir-ra ba-ni-in-ra* | כמנשק – על לחיו באגרוף מחץ | `וַתֹּחֶז יַד יְמִין יוֹאָב בִּזְקַן עֲמָשָׂא לִנְשָׁק לוֹ` (שמואל ב כ:ט) | [equivalent] | The kiss that is a blow. |
| 151 | (same) | (same) | `וַעֲמָשָׂא לֹא נִשְׁמַר בַּחֶרֶב אֲשֶׁר בְּיַד יוֹאָב וַיַּכֵּהוּ בָהּ` (שמואל ב כ:י) | [divergence] | Joab kills; Gilgameš only strikes – Enkidu will kill. |
| 151 | *te-na … ra* | על לחיו … מחץ | `וַיַּכֶּה אֶת מִיכָיְהוּ עַל הַלֶּחִי` (מלכים א כב:כד) | [equivalent] | The blow on the cheek (*te* = Akk. *lētu* `לְחִי`). |
| 151 | *tibir* | באגרוף | `בְּאֶבֶן אוֹ בְאֶגְרֹף` (שמות כא:יח) | [equivalent] | The fist. |
| 157 | *zi an-na … zi ki-a … zi kur-ra ma-an-pad₃* | בחֵי שמים … בחֵי ארץ … בחֵי ההר נשבע לי | `הַעִדֹתִי בָכֶם הַיּוֹם אֶת הַשָּׁמַיִם וְאֶת הָאָרֶץ` (דברים ל:יט) | [equivalent] | Heaven and earth as the oath's witnesses; HA adds "the mountain". |
| 159 | *šag₄-ga-ni arḫuš ba-ni-in-tuku* | בלבו היו רחמים | `כִּי נִכְמְרוּ רַחֲמָיו אֶל אָחִיו` (בראשית מג:ל) | [equivalent] | Compassion in the heart (35). |
| 162 | *ĝuruš dab₅-ba ur₂ ama-na-še₃ ḫe₂-gi₄-gi₄* | הבחור האחוז – אל חיק אמו ישוב | `וַיֹּאמֶר הַעוֹדֶנּוּ חַי אָחִי הוּא` (מלכים א כ:לב) | [equivalent] | The victor who would spare the captive king. |
| 170 | *sukud-ra₂ dim₂-ma nu-tuku* | הגבוה – טַעַם אין לו | `נֶזֶם זָהָב בְּאַף חֲזִיר אִשָּׁה יָפָה וְסָרַת טָעַם` (משלי יא:כב) | [equivalent] | Stature (or beauty) without sense; *dim₂-ma* = Akk. *ṭēmu* `טַעַם`. |
| 11 | *kur-ra dim₂-ma-bi {d}utu-kam* | טַעַם ההר – של אוּתוּ הוא | `מִטַּעַם הַמֶּלֶךְ וּגְדֹלָיו` (יונה ג:ז) | [equivalent] | `טַעַם` as a ruler's decision. |
| 11 | *dim₂-ma* | טַעַם | `וּבָרוּךְ טַעְמֵךְ` (שמואל א כה:לג) | [equivalent] | `טַעַם` as good sense (170). |
| 174 | *za-e iri ama tud-da-zu nu-ub-ši-gur-ru-de₃-en* | אתה – אל עיר אמך יולדתך לא תשוב | `יַעַן שִׁלַּחְתָּ אֶת אִישׁ חֶרְמִי מִיָּד וְהָיְתָה נַפְשְׁךָ תַּחַת נַפְשׁוֹ` (מלכים א כ:מב) | [equivalent] | The rebuke to the king who spared his enemy: your life for his. |
| 174 | (same) | (same) | `כַּאֲשֶׁר שִׁכְּלָה נָשִׁים חַרְבֶּךָ כֵּן תִּשְׁכַּל מִנָּשִׁים אִמֶּךָ` (שמואל א טו:לג) | [divergence] | Samuel kills the captive the king spared, naming his mother; in HA the god will be angry at the killing. |
| 179 | *gu₂-ni im-ma-an-kud* | את צווארו כרת | `וַיְשַׁסֵּף שְׁמוּאֵל אֶת אֲגָג לִפְנֵי יְהוָה בַּגִּלְגָּל` (שמואל א טו:לג) | [divergence] | The spared captive killed by another. |
| 187 | *a-na-aš-am₃ ur₅-gin₇ i₃-ak-en-ze₂-en* | למה כך עשיתם? | `וַיֹּאמֶר מֶה עָשִׂיתָ; קוֹל דְּמֵי אָחִיךָ צֹעֲקִים אֵלַי מִן הָאֲדָמָה` (בראשית ד:י) | [equivalent] | The god's question after the killing (our proposal). |
| 190 | *ninda gu₇-zu-ne-ne-a ḫe₂-gu₇-e* | מן הלחם שאתם אוכלים – יאכל | `וְאָכַל לֶחֶם תָּמִיד לְפָנָיו כָּל יְמֵי חַיָּיו` (מלכים ב כה:כט) | [equivalent] | The captive who eats the king's bread: protection and honour. |
| 193 | *me-lem₄* | זוהרו | `וְאֵת לַהַט הַחֶרֶב הַמִּתְהַפֶּכֶת לִשְׁמֹר אֶת דֶּרֶךְ עֵץ הַחַיִּים` (בראשית ג:כד) | [equivalent] | The guardian's radiance (corpus §4); in HA the guardian dies and his auras are spread through the world: [divergence] in the outcome. |
| 167 | *unug{ki}* | אוּרוּךְ | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ` (בראשית י:י) | [cognate] | Unug = biblical Erech (a proper name: [cognate], §6.4.3). |

## Part 2 (HB 1–168)
Translator: Round 6 run 1, part 2 (2026-11-06), the same translator as part 1.

### Progress
- **138 / 138 entries drafted** (all the preserved lines of 1–168), with header paragraphs and seven `## ` section headings, in `annotated-HB.rtl.md`. HA's Hebrew is copied letter for letter wherever the Sumerian is the same (1–3 = HA 130–132; 27 = HA 11; 43 = HA 42; 67 = HA 64; 69 = HA 148NN; 81 = HA 78; 85 = HA 73; 92 = HA 102; 133 = HA 152a; the oath, the ranges formula, the felling refrain, the praise), and differs exactly where the Sumerian differs: each difference is noted at its line ("A: …").
- Three passes: (a) **fidelity** (fixes: bracket rule applied to 6, 7, 8, 21, 43, 48, 65, 110, 112, 113, 139, 142, 158 – restored signs inside a preserved word unbracketed; 95 `(כנגדו)` → `(מולו)`, a reserved string); (b) **consistency** – a script grouping HA and HB by identical cleaned transliteration: every identical Sumerian line has identical Hebrew in both files; (c) **Hebrew** – read aloud.
- `python3 -I bilgames_tools.py verify HB`: **OK** (0 problems). `check_bible_quotes.py annotated-HB.rtl.md project.md`: 0 problems.

### Open decisions
11. ***kur* in 11–13 = `הארץ`** (the netherworld: *irigal* "the great city", "the land of submission"), against `ההר` everywhere else in HA/HB: the same word, two worlds, inside one poem. With it *irigal* = `העיר הגדולה` (translated; the note names Akk. *irkallu* `אִירְכַּלָּה`, its derivative).
12. ***sud* (12) = `ארוך`** – the word of the Akkadian (DP 83 *arku* `ארוך`), against HA 28 *sukud* `גבוה`. Kept apart deliberately: it is the finding (below).
13. **The father in the oath**: *a-a ugu-ĝa₂* (86, 109) = `ואבי הורי` (*ugu* `הורה`, Gen 49:26 `הוֹרַי`); *a-a tud-da-ĝu₁₀* (165) = `אבי מולידי` (*tud* `ילד`, causative). HA's form (`ואבי`) where B has *a-a-ĝu₁₀* (15, 99).
14. ***diĝir-ĝu₁₀* = `אֵלִי`, *diĝir-zu* = `אֵלְךָ`** (always vocalized; `אֱלֹהֶיךָ` reserved).
15. **Uncertain, in italics**: *nam-gu₂-ka* `*הכניעה*` (11), *gib* `*יחסום*` (12), *ĝiri₃-bal* `*מעברות־הרגל*` (48; ORACC "flooding", ETCSL "destructive weather"), *te* `*נעץ*` (72), *KA-za … e₃* `*בפיך* הוציא` (100, 110; 139 `מפיך הוצאת` – swearing), *šu si sa₂* `יד *ישרת*` (137), *aškud₂* `*מרפקיו*` (134, 141), *ĝiri₃ kur-ra* `*שבילי* ההר` (157; *ĝiri₃* `רגל` elsewhere – a sense split).
16. ORACC slips noted at their lines: 8 *a-a* lemmatized "father" (it is "in the water"); 53 *dam zu-še₃* lemmatized *zu* "know" (it is "your").

### Proposals for the corpus renderings
New fixed strings (for the later texts, and for `verify` if wanted): the B oath `"חֵי אמי הורתי, נִינְסוּן, ואבי הורי, לוּגַלְבַּנְדָּה הטהור!` + `אֵלִי, אֶנְקִי, האדון נוּדִימּוּד` (and in Ḫuwawa's mouth `חֵי אמך הורתך, … ואביך …` / `אֵלְךָ, …`); the stars `הם – כוכבי השמים הם; בארץ – את האורח יודעים הם;` and `… יודעים הם` (45–49); the muster `"עיר! מי שיש לו אישה – אל אשתך! מי שיש לו בן – אל בנך!` / `מי שאין לו אישה, מי שאין לו בן –`; `גיבור – ישיבתך בהר – תיוודע!`; the shoes `לרגליך הקטנות – נעליים קטנות אכן נעשו לי!` (and `הגדולות`); `גיבור – שקר הנחת! … שבועה כרתָּ –`; the mockery as statements `גיבור אחוז – משוחרר הוא?!` / `כוהנת־אֵן אחוזה – אל הגִּפָּר שבה?!` / `כוהן־גּוּדוּג אחוז – אל חֵנוֹ שב?!`; `"אמי יולדתי – מערת ההר; / אבי מולידי – מערת הרמה;`.
Words: *ur₅* `כָּבֵד` (vocalized; laments); *irigal* `העיר הגדולה`; *taka₄* `עזב`; *zag* `גבול`; *ed₃* `עלה`; *suḫ₁₀* `נזר`; *keše₂* `קשר`; *mul* `כוכב`; *kaskal* `דרך` (and *ḫar-ra-an* `אורח`, as *urḫu* / *ḫarrānu*); *dam-gar₃* `תַּגָּר`; *tum₁₂* `יונה`; *ab-lal* `נקב` (GEN 241); *dam* `אישה`; *zig₃ ĝar* `קימה שָׂם` (levy); *ĝiri₃ dab₅* `את הרגל אחז` (take the road); *šu-gur* `רומח`; *eme* `לשון`; *šarag* `יבש`; *usu* `כוח`; *nam-erim₂ kud* `כרת שבועה` (`בְּרִית` reserved); *kilib₃* `כל`; *ḫurrum* `מערה`; *aratta* `אָרַטָּה`; *Nudimmud* `נוּדִימּוּד`.

### Key findings
**What B changes against A – the ancient mind of a second telling:**
- **The opening**: B begins with the praise lines that A gives to Ḫuwawa and to Enkidu in mid-poem (HA 130–132, 164–167): the catalogue title *i₃-a lum-lum* is A's flattery made into B's hymnic incipit.
- **The lament goes down**: where A says "the tall man does not stretch to heaven, the wide man does not cover the mountain" (HA 28–29), B speaks of "the great city, the land of submission, that lets no man go" and says "the long one does not block the land (*kur*), the wide one does not cover the land" (11–13): the limit is below, the netherworld, not above. **The Akkadian saying draws on both traditions**: DP 83 *ayyu arku* "who is long" = B's *sud* (not A's *sukud* "tall"); DP 84 *erṣeta ugammeru* "encompass the earth/netherworld" = B's *kur* as netherworld; but DP 83 *ana šamê elû* "to heaven" = A's *an-še₃*. The Hebrew shows it: `ארוך`, `הארץ`, `רחב` are B's and DP's words; `אל השמים` is A's and DP's.
- The man in the water is still "a man" (*lu₂*), not "a corpse" (8; HA 26); the liver (*ur₅*), not the heart, is struck (5, 9).
- **Personal religion**: B adds "my god Enki, lord Nudimmud" to the oath (16, 87, 100, 110), and Ḫuwawa throws it back: "you swore by your mother and father, by your god Enki" (137–139).
- **The seven are stars**, said in so many words (45–46), who know the road to Aratta, like merchants and like doves in the mountain clefts (47–49) – the knowledge of the road, not force.
- **The muster** sends home "who has a wife … who has a son" (53–55) – closer to Deut 20:7 and 24:5 than A's "house" and "mother".
- **Gilgameš wakes himself** (83–84; in A, Enkidu wakes him).
- **The guardian's power is *me-lem₄* "aura"** in B (72, 130), *ni₂ te* "terror" in A (HA 67, 145–149) – kept apart in the Hebrew (`זוהר` / `אימה`, §23.6).
- **The gifts are shoes "made" for him** (*dim₂*, 102–103, 112–113), small and big together; **the blow is to the ear, without the feigned kiss** (131; HA 150–151).
- **Ḫuwawa's accusation** (137–141): "you laid down a lie, you cut an oath" – B makes the broken oath explicit, where A has only "hero, … falsehood" (HA 152B). Gilgameš's pity follows the accusation (142).
- **The reason for mercy is use** (144–146): Ḫuwawa will be a guide who "knows" the stations of the road, and carry all Gilgameš's things; Enkidu's answer: he will blur the mountain paths, and "we will not return to the city, the mother who bore (us)" (157–158; A: "you").
- **The orphan of the rock** (164–166): "my mother who bore me – a cave in the mountain; my father who begot me – a cave in the range; Utu, you made me dwell alone in the mountain" – A's "I never knew mother or father … you raised me" (HA 155–156) turned into an image, and Utu no longer a foster father but the one who set him there alone.
- **Variants of A that are B's main text**: HA 24 (2 mss. *šag₄ ḫul*) = HB 6; HA 43 (1 ms. *a₂-bi*) = HB 44; HA 152 (1 ms. *saĝ-ki … guru₅-uš*) = HB 132; HA 152a–b (2 mss.) = HB 133–134; HA 174A–B (1 ms.) = HB 152–154. The two versions were not sealed off from each other: copyists of A borrowed B's lines.
**The Bible** (shared motifs): Deut 20:7, 24:5 (the husband exempted, 53); Num 10:31 (the stranger who knows the road as guide, 145); Josh 9:15, 19 (an oath to the deceived/deceiver that binds the stronger, 137); "cutting" an oath ~ `כרת ברית` (137); Num 30:3 (the oath "that goes out of the mouth", 139); Song 2:14, Jer 48:28 (the dove in the rock clefts, 49); Judg 5:20 (the stars, 45); Jer 2:27 (parents who are rock and wood, 164); Lam 3:28 (to sit alone, 166); Job 7:9 (no return from the land of the dead, 11).

### Parallels index (Tablet HB)
| Line | Sumerian | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 4 | *unug{ki}* | אוּרוּךְ | `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ` (בראשית י:י) | [cognate] | Unug = Erech. |
| 11 | *irigal kur nam-gu₂-ka … lu₂ la-ba-an-da₁₃-da₁₃-a* | העיר הגדולה, ארץ *הכניעה* – איש לא תעזוב | `כָּלָה עָנָן וַיֵּלַךְ; כֵּן יוֹרֵד שְׁאוֹל לֹא יַעֲלֶה` (איוב ז:ט) | [equivalent] | The land of no return; B's lament turns to the netherworld (HA has no such line). |
| 12 | *sud-da kur-ra la-ba-an-gib-be₂-a* | הארוך – את הארץ לא *יחסום* | `מִי יַעֲלֶה לָּנוּ הַשָּׁמַיְמָה` (דברים ל:יב) | [divergence] | B's limit is below (the netherworld), the Bible's question and HA 28 look up; DP 83's "long" is B's word. |
| 29 | *suḫ₁₀ za-gin₃* | נזר של סַפִּיר | `וְתַחַת רַגְלָיו כְּמַעֲשֵׂה לִבְנַת הַסַּפִּיר וּכְעֶצֶם הַשָּׁמַיִם לָטֹהַר` (שמות כד:י) | [equivalent] | Lapis as the colour of the sky; the rising sun's crown. |
| 45 | *e-ne-ne an-na mul-la-me-eš ki-a ḫar-ra-an zu-me-eš* | הם – כוכבי השמים הם; בארץ – את האורח יודעים הם | `מִן שָׁמַיִם נִלְחָמוּ; הַכּוֹכָבִים מִמְּסִלּוֹתָם נִלְחֲמוּ עִם סִיסְרָא` (שופטים ה:כ) | [divergence] | The stars as allies on their courses; in HB guides, in Judges fighters. |
| 49 | *tum₁₂{mušen}-gin₇ ab-lal kur-ra zu-me-eš* | כיונים – את נקב ההר יודעים הם | `יוֹנָתִי בְּחַגְוֵי הַסֶּלַע בְּסֵתֶר הַמַּדְרֵגָה` (שיר השירים ב:יד) | [equivalent] | The rock dove in the clefts. |
| 49 | (same) | (same) | `וִהְיוּ כְיוֹנָה תְּקַנֵּן בְּעֶבְרֵי פִי פָחַת` (ירמיהו מח:כח) | [equivalent] | Same. |
| 53 | *dam tuku dam-zu-še₃ dumu tuku dumu-zu-še₃* | מי שיש לו אישה – אל אשתך! מי שיש לו בן – אל בנך | `וּמִי הָאִישׁ אֲשֶׁר אֵרַשׂ אִשָּׁה וְלֹא לְקָחָהּ יֵלֵךְ וְיָשֹׁב לְבֵיתוֹ` (דברים כ:ז) | [equivalent] | The husband exempted; B closer to Deut than HA 50 (house, mother). |
| 53 | (same) | (same) | `כִּי יִקַּח אִישׁ אִשָּׁה חֲדָשָׁה לֹא יֵצֵא בַּצָּבָא` (דברים כד:ה) | [equivalent] | Same. |
| 86 | *a-a ugu-ĝa₂* | ואבי הורי | `בִּרְכֹת אָבִיךָ גָּבְרוּ עַל בִּרְכֹת הוֹרַי` (בראשית מט:כו) | [equivalent] | `הוֹרַי` "my begetters" for *ugu* of the father. |
| 137 | *nam-erim₂ mu-e-kud* | שבועה כרתָּ | `וַיִּכְרְתוּ שְׁנֵיהֶם בְּרִית` (בראשית כא:כז) | [equivalent] | "To cut" an oath / a covenant – the same image in two unrelated languages. |
| 137 | *lul mu-e-sig₁₀ … nam-erim₂ mu-e-kud* | שקר הנחת … שבועה כרתָּ | `וַיַּעַשׂ לָהֶם יְהוֹשֻׁעַ שָׁלוֹם וַיִּכְרֹת לָהֶם בְּרִית לְחַיּוֹתָם; וַיִּשָּׁבְעוּ לָהֶם נְשִׂיאֵי הָעֵדָה` (יהושע ט:טו) | [divergence] | An oath granting life, with deceit; in Joshua the deceivers are the weak and the oath is kept. |
| 137 | (same) | (same) | `אֲנַחְנוּ נִשְׁבַּעְנוּ לָהֶם בַּיהוָה אֱלֹהֵי יִשְׂרָאֵל; וְעַתָּה לֹא נוּכַל לִנְגֹּעַ בָּהֶם` (יהושע ט:יט) | [divergence] | The oath by one's god that binds the stronger; Ḫuwawa invokes Gilgameš's oath by his god Enki. |
| 139 | *KA-za mu-e-ni-e₃* | מפיך הוצאת | `אוֹ הִשָּׁבַע שְׁבֻעָה לֶאְסֹר אִסָּר עַל נַפְשׁוֹ לֹא יַחֵל דְּבָרוֹ:  כְּכָל הַיֹּצֵא מִפִּיו יַעֲשֶׂה` (במדבר ל:ג) | [equivalent] | The oath "that goes out of the mouth" binds. |
| 145 | *lu₂ zu-me ḫe₂-a dur₂ kaskal-la igi me-eb-du₈-de₃-a* | איש יודע לנו יהיה – את מושבי הדרך יראה לנו | `כִּי עַל כֵּן יָדַעְתָּ חֲנֹתֵנוּ בַּמִּדְבָּר וְהָיִיתָ לָּנוּ לְעֵינָיִם` (במדבר י:לא) | [equivalent] | The stranger who "knows" the stations of the road as a guide; here the captive enemy. |
| 164 | *ama tud-da-ĝu₁₀ ḫur-ru-um kur-ra* | אמי יולדתי – מערת ההר | `אֹמְרִים לָעֵץ אָבִי אַתָּה` (ירמיהו ב:כז) | [equivalent] | Parents who are part of nature; Jeremiah's mockery, Ḫuwawa's orphanhood. |
| 166 | *{d}utu dili-ĝu₁₀-ne kur-ra mu-un-de₃-en-tuš-en* | אוּתוּ – לבדי בהר הושבת אותי | `יֵשֵׁב בָּדָד וְיִדֹּם כִּי נָטַל עָלָיו` (איכה ג:כח) | [equivalent] | Sitting alone as a lot laid on a person. |
