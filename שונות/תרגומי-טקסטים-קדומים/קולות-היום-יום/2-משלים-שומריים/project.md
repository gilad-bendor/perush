# Project 2: the Sumerian proverbs (ETCSL 6.1.01 complete; selections from 6.1.02 and 6.1.03)

## Scope
- **Collection 1** (ETCSL 6.1.01), complete: 194 proverbs, 348 composite lines (segments A–G; the two "X X" variant lines C.A–C.B that ETCSL's converter drops are untranslatable).
- **Collection 2 (+6)** (6.1.02): a selection of 51 proverbs (92 lines) – the poor man (2.15–2.34), the scribe (2.37–2.54), the fox (2.58–2.69), lies (2.71–2.72), the donkey and the ox (2.75, 2.81–2.82, 2.93), the city of the lame (2.118–2.119 = 1.65–1.66), good and bad, marriage and divorce (2.121–2.124), the house (2.138–2.146), the palace (2.155–2.160).
- **Collection 3** (6.1.03): a selection of 32 proverbs (60 lines) – the son whose god has turned (3.5), "I will go tomorrow" (3.6), the heir (3.9), eating modestly (3.15), friendship (3.16–3.17), the open hand (3.22), wealth (3.23), the slave girl and the lady (3.41), the daughter-in-law (3.44), lies (3.55), the merchant (3.64), measure for measure (3.69), the king and the cupbearer (3.86), the garrulous (3.97, 3.103), the mother's care (3.112), the tongue (3.114), the false witness (3.118), the aching heart (3.127), the personal god as shepherd (3.134), the good word (3.159–3.160), the "abominations" of the gods (3.170, 3.171, 3.175), fate (3.176), the uttered word (3.177), the price of free and slave labour (3.183), justice (3.190).
Alster 1997 (*Proverbs of Ancient Sumer*) and Gordon 1959 are © and not owned (records only).

## Base text
ETCSL 6.1.01–03 (`../../sources/ETCSL/6.1.0N--…/`, CC BY-NC-SA) with ORACC epsd2/literary Q000795–Q000797 (lemma + morph for every word, `../../sources/ORACC/epsd2-literary--Q00079N--…/`, CC0). ETCSL's English is rank 3.

## Line numbering
ETCSL composite lines with the segment letter (`A1` … `D138`, `E1`, `F1`, `G1`): ETCSL restarts the count in each segment. The proverb number (`1.9`, from the TEI `<lg n>`) is the unit: the clean translation prints it before the proverb's first line. Files: `annotated-c1-1.rtl.md` (A1–A82: 1.1–1.?), `annotated-c1-2.rtl.md` (segment B), `annotated-c1-3.rtl.md` (segments C–G), `annotated-c2.rtl.md`, `annotated-c3.rtl.md`.

## Repeated lines
1.65–1.66 = 2.118–2.119 (the city without dogs, the city of the lame): identical Hebrew (2.118 adds `הוא` for the copula *-am₃*). 1.152–1.153 = 3.9 (A22): the formula *giri₁₇-zal-še₃ nu-il₂* = `לששון – לא נשא` (not *ezen nu-tuku*, as the pre-set renderings said: corrected, and checked by `kol_tools.py`). 1.44 (A57) = 1.103 (B69) opening `מי שאוכל ואוכל דבר גדול`; 1.125 (C5) ≈ 3.112 (A205) `מן הדג את העצמות ילקט לי / אלקט לך`; 1.58 = 1.59 opening; 1.83 ≈ 1.84 (the boat of truth / of wickedness).

## Open decisions
1. *niĝ₂-gig DN* = `תּוֹעֲבַת DN` (1.23, 3.118, 3.170, 3.171, 3.175): the lament corpus gives `תּוֹעֵבָה` to *an-zil* – two Sumerian taboo words, one Hebrew word (the user's decision; corpus renderings §3.2).
2. *gu₂* "neck" = `צַוָּאר` (aligned with runs 5–6), although project 1 gives `צוואר` to Akk. *ṣawāru*; the idiom *gu₂ šub* "neglect" is kept literal (`השליך צוואר`, 1.21).
3. *mu-ud-na* "spouse" = `בֶּן־זוּג` / `בַּת־זוּג` (C5, C13, B81), against the pre-set `בַּעַל`, which *dam* needs (C3 `בעלי` beside C5 `בן־זוגי`).
4. *il₂* "lift, carry, support" = `נָשָׂא` throughout, also in *dam nu-il₂* (1.153, 3.9), where Hebrew `נשא אשה` "marry" is a possible but not certain reading (ETCSL "support").
5. *sig₁₀* "put" by sense: `הונח` (1.38, 1.159), `שולם` (1.28, a purchase "put down"), `נבדק` (1.196, "put to the test"), `כבוש` (1.96).
6. *dirig* = `עוֹלֶה עַל` in comparisons (1.57, 1.154, 1.193, 2.60), but "float downstream" in 1.83–1.84 (`שטה במורד`) and "overflow" in 1.96, 1.101.
7. *zeb* "sweet, pleasant" = `עָרֵב` (1.126, 1.190), keeping `טוֹב` for *dug₃* and `מָתוֹק` for *ku₇* (5.5.1); *zil₂* = `נָעִים`; *sag₉* = `נָאֶה`; *ḫi-li* = `חֵן` (1.197; changed at the letters from `עֲגָבִים`, because 5.5.1 uses it of the mother).
8. *buru₅* = `דְּרוֹר` (1.18); *ḫu-ru-um* = `נִבְעָר` (3.103; ETCSL "fool"; `כְּסִיל` stays for *lil₂*); *gi₄-in* = `שִׁפְחָה`, *geme₂* = `אָמָה` ★.

## Progress
Drafted by the run-7 coordinator acting as the translator (see `../handoff--round2-run7.md` §6), with `kol_tools.py verify` and `check_bible_quotes.py` clean after each file:
- 2026-10-21: Collection 1 segment A (82 lines, `annotated-c1-1.rtl.md`), segment B (98, `annotated-c1-2`), segments C–G (168, `annotated-c1-3`); Collection 2 selection (92, `annotated-c2`); Collection 3 selection (60, `annotated-c3`). All 500 lines; `translation.rtl.md` built.

### Review passes (2026-10-21)
1. **Fidelity and Hebrew**: a read-through of the `>` lines of all five files beside the transliteration; fixed `לא יָכְלָה` (1.195, unvocalized it read "will perish"), `ברעב היינו מתים` (the gate `יין` caught `היינו`), `שבו` "in it" (caught by the `שוב` gate: rephrased `אשר בו`), `שמן` for *u₅* (1.150: `*משחה*`), and several notes that had been written with a bare unchecked quotation (all removed or replaced by printed verses).
2. **Consistency** (by script): the key-lemma check over 60 Sumerian lemmas (*ninda* `לחם`, *ukur₃* `עני`, *dug₃* `טוב`, *gi₄* / *gur* `שוב`, *niĝ₂-gig* `תועבה`, *kal* `יקר`, *sag₉* `נאה`, *gu₂* `צוואר`, *nam* `גורל` …): the only misses were suffixed forms and the sense-renderings listed in the open decisions; `verify PROV` (gates, traps, the two formulas, identical lines).
3. **Echo control and quotations**: `check_bible_quotes.py` on all files (0 problems); ETCSL's "righteousness", "fool", "just man", "abomination" checked against the Sumerian (`נְכוֹנָה`, `נִבְעָר`, `אִישׁ אֱמֶת`, `תּוֹעֵבָה` tagged); the formula of 1.152–1.153 corrected.

## Key findings (project 2)
- **"Make your foot rare in your friend's house"**: 1.8 *e₂ dub₃-sa-na-ka lu₂ ba-ni-ib-kal-le* `בבית ידידו – האם יוקר אדם?` ↔ `הֹקַר רַגְלְךָ מִבֵּית רֵעֶךָ` (משלי כה:יז) – the same verb (*kal* "rare, precious" = `יקר`), the same house.
- **"A stranger will eat it"**: 1.9 *lu₂-kur₂-ra ib₂-gu₇* `איש נכרי יאכל` ↔ `כִּי אִישׁ נָכְרִי יֹאכְלֶנּוּ` (קהלת ו:ב).
- **Wealth with wings**: 1.18 `הרכוש – דרור עף ועף, מקום מושב לא ימצא` ↔ משלי כג:ה; and the sparrow that does find a house (תהלים פד:ד).
- **The sluggard's winter**: 2.20 `בחורף את השדה לא זרע, ובעת הקציר …` ↔ `מֵחֹרֶף עָצֵל לֹא-יַחֲרֹשׁ` (משלי כ:ד).
- **The poor man's word**: 2.27 `דבר העני – לא התקבל` ↔ `וּדְבָרָיו אֵינָם נִשְׁמָעִים` (קהלת ט:טז); 1.56 `"שם רע" – שמו` ↔ `שֵׁם רָע` (דברים כב:יד).
- **The personal god as shepherd**: 3.134 `האל של בן האדם – רועה המחפש עשב` ↔ `יְהוָה רֹעִי … בִּנְאוֹת דֶּשֶׁא` (תהלים כג).
- **The false witness as an "abomination"**: 3.118 `תועבת סואן הוא` ↔ the `עֵד שָׁקֶר` among the seven `תּוֹעֲבַות` (משלי ו:טז–יט); the *niĝ₂-gig* of three gods (Suen, Inana, Ninurta) against the one `תּוֹעֲבַת יְהוָה`.
- **One fate for all**: 3.176 `כאיש אמת דבר, כרשע דבר` ↔ `מִקְרֶה אֶחָד לַצַּדִּיק וְלָרָשָׁע` (קהלת ט:ב).
- **Family law in proverbs**: the girl chooses (1.148 ↔ בראשית כד:נז); "having children is divine" (1.160 ↔ בראשית ל:ב); the mother of eight (2.141 ↔ `וְרַבַּת בָּנִים אֻמְלָלָה`, שמואל א ב:ה); the free man worth two slave women (3.183 ↔ דברים טו:יח, reversed); the daughter-in-law (3.44 ↔ מיכה ז:ו); "raise the horn" (1.109 ↔ תהלים עה:ה).
- **The ancient mind**: the school (the scribe who knows no Sumerian, the hungry pupil, the "translations"), the fox's boasting, bread as the measure of life, the curse that breeds curses, the heart that no one can find (3.127 ↔ משלי יד:י), a mother cooling the soup with her mouth.
