# Project: Ugaritic rituals (KTU 1.40, 1.119, 1.39)

Round 5, run 3. Coordinator: the run's session; translators as sub-agents, one at a time, each with
`../translator-brief--ugaritic.md`.

## Scope

**KTU 1.40** (43 lines), the ritual of atonement / purification for the men and women of Ugarit – a refrain repeated
for each group (the sons of Ugarit, the women, the king, the queen …): "whether you sinned … by your anger, your
impatience, … this is the offering we offer … may it be borne to the father of the sons of El …", with a donkey (*ʿr*)
and a sheep (*š*) – the Ugaritic text closest to **Lev 16** (the bearing away, Lev 16:22) and Lev 4–5. Then, if the
time allows (the plan's "short selection of 1.39–1.148"): **KTU 1.119** (36, a sacrifice calendar ending with a prayer to
Baal for a city besieged: ↔ Ps 20, 2 Kgs 3:27) and **KTU 1.39** (22, a sacrifice list: the shape of a Ugaritic offering
day; ↔ Num 28–29, Lev 1–7).

## Base text and versions

CUC v0.2.8 (KTU³) with its machine parses; DULAT. EUPT edits only the poetic texts. Rank 3 (not in the folder; never
quoted verbatim): Pardee, *Les textes rituels* (1999) and *Ritual and Cult at Ugarit* (2002); del Olmo Lete, *Canaanite
Religion* (1999/2014); Miller (1971) for 1.40.

## Line numbering

KTU's (= CUC's), one-column tablets: `### <line>`.

## Files

As the other projects.

## Decisions (coordinator, before the first line)

- 1.40's refrain is fixed at its best-preserved copy (lines 24–34) and copied into every other copy (the restored ones
  too), with the second-person masculine / feminine as the tablet has it. The ritual words: *dbḥ* `זבח`, *šlmm* `שלמים`
  [cognate] (Lev 3), *ḫṭu* the root חטא [cognate] (Lev 4–5), *nšʾ* `נשא` (Lev 16:22 `וְנָשָׂא הַשָּׂעִיר עָלָיו`), *npy*
  by its sense (DULAT "purification / expiation"; never `כִּפֵּר`: the root כפר is not on the tablet – Lev 16's word is the
  finding), *ʿr* `עַיִר` (§10), *š* `שֶׂה` [cognate].

## Progress log (coordinator)

- 2026-10-31: keys 1.40, 1.119, 1.39 in the tool.

## KTU 1.40

### Scope
1–43 (43 lines; translator 3, Round 5 run 3). The purification ritual: one formula in four copies – I (1–17) men, -*km*, "here is the ram"; II (18–25) women, -*kn*, ram; III (26–34) men and the king, "the donkey of rectitude"; IV (35–43) women, after "and return to the recitation", donkey. Lines 1–17 are mostly KTU³'s restoration from the other copies. The project's first tablet: its header and intro carry the signs.

### Sources consulted
CUC v0.2.8 (KTU³) via `data`, `pars`, `lex`, `dulat`; the corpus files; the Hebrew Bible through `check_bible_quotes.py --show`. Rank 3 (Miller 1971, Pardee 1999/2002, del Olmo Lete) not in the folder.

### Decisions
- **The refrain** (fixed at 24–34, copied into every copy, restored ones too; m. / f. as the tablet): `או (אם) תחטאו` (I–II) / `או (אם) השתנה יָפְיְכֶם` (III–IV); `או לפי הקַּטִּי, … הַדַּדְמִי, … החֻרִּי, … החִתִּי, … האַלַתִּי, … הגִּבְרִי, … חובטיכם, … מדלדליכם, … קַרְזְבִּל`; `או באפכם, או בקוצר נפשכם, או ב*קלקלה* (אשר) *תקלקלו*`; `או (אם) תחטאו לזבחים ולהגשה – זִבְחֵנוּ נזבח; זו ההגשה (אשר) נגיש, זו השחיטה (אשר) נִשְׁחֲטָה: יִנָּשֵׂא אל אבי בני אֵל, יִנָּשֵׂא אל דור בני אֵל, אל קהל בני אֵל, אל תַּכְמָן וְשׁוּנַם: הנה השֶּׂה / העַיִר!`
- Coordinator's words kept: *dbḥ* `זבח`, *ḫṭʾ* `חטא`, *nšʾ* Gt `יִנָּשֵׂא`, *npy* `טָהֳרָה` (by sense; never `כִּפֶּר`), *ʿr* `עַיִר`, *š* `שֶׂה`.
- **New collision settled:** *šqrb* (Š of *qrb*) is the cognate of `הקריב`, so it takes it (`והקרב`); *ṯʿ* / *ṯʿy* "offering / offer" take `הגשה` / `הגיש` (Amos 5:25 `הִגַּשְׁתֶּם`). 1.161:27–30 (merged as `והקרב`) changed to `והגש` in the same session.
- *u* `או` throughout ("whether … or"), with `(אם)` before a verb; *l p* `לפי` [cognate] (Gen 47:12) – "according to (the mouth of)", keeping the ambiguity (by the manner / the accusation of).
- Ethnic adjectives: `הקַּטִּי`, `הַדַּדְמִי`, `החֻרִּי` (Ugaritic form; `הַחֹרִי` Gen 14:6 in the note), `החִתִּי` (the biblical form), `האַלַתִּי` (*alṯy* Alashia; `אֱלִישָׁה` in the note), **`הגִּבְרִי`** for *ġbr* – transcribed with ג, not ע, because `העברי` would be a false echo ("the Hebrew"); *ġ* ≠ *ʿ*.
- *ḫbtkm* `*חובטיכם*` (DULAT "oppressor"), *mdllkm* `*מדלדליכם*` (D/Š ptc. of *dll*), *qrzbl* `קַרְזְבִּל`.
- *b apkm* `באפכם`, *b qṣrt npškm* `בקוצר נפשכם` [cognate] (Num 21:4; 1.16 VI:34 `קצר־הנפש`), *qṭt tqṭṭ* `*קלקלה* … *תקלקלו*` (L-stem reduplication kept; DULAT "transgression").
- *šn ypkm* `השתנה יָפְיְכֶם` (*šnw* "be disfigured"; `שָׁנָה` stays *ṯny*'s; *yp* `יֹפִי` [cognate]).
- *mšr* `מֵישָׁרִים` [cognate] (the law corpus's *mīšarum*); *mpḫrt* `קהל` (new; `אֲסֵפָה` is *pḫr*'s), *dr* `דור` (§4.2), *nkt* `שחיטה` (new), *mspr* `מִסְפָּר` (`ושוב אל המִסְפָּר` copies 1.4 V:42), *gr* `גֵּר` [cognate], *yman* `יָוָן` (biblical form), *aṯt* `האִשָּׁה`.
- 34 ⟨l mpḫrt bn il⟩ (scribal omission) rendered ⟨…⟩; 39 *l šn* read as a slip for *u šn* (`*או*`).

### Open decisions for the user
- *npy* `טָהֳרָה` (or `נִקּוּי`, closer to "sieve").
- *ġbr* `הגִּבְרִי` (g-transcription against §2's ע, to avoid `העברי`).
- *qṭt* `*קלקלה*` (or a plainer "transgression" word).
- *ṯʿ* `הגשה` (new, replacing the merged `הקרב`).

### Progress log
- Drafted 1–43; `verify 1.40` clean; quotes: three remembered wordings corrected (Gen 47:12 `הַטָּף`, Ps 29:1, Lev 4:22/27).
- Pass (a) fidelity: 9 `(של)` added for the parallel with 26.
- Pass (b) consistency: the four copies against 24–34 (verify: 0 repeated-line differences); m./f. per tablet.
- Pass (c) Hebrew: read the generated translation; no change.
- `verify 1.40 --strict`: 0; `check_bible_quotes.py`: 0.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (the parses, DULAT; no EUPT for this text). **12 `>` lines changed**, all brackets, with notes: one sign or an ending restored → no bracket (19, 22, 25, 26, 37, 39, 40, 42); a word read in CUC had been bracketed (4 *ġbr*, 20 *p*, 43 *ṯkmn*); 10 and 36 *[np]y* bracketed whole. **The refrain** (6–8, 16–17, 24–25, 32–34, 40–43) is identical Hebrew in every copy; masculine (copies I, III: *-km*, `תחטאו`, `תקלקלו`) and feminine (copies II, IV: *-kn*, `תחטאנה`, `תקלקלנה`) follow the tablet; the restorations of copy I (6–17) each name the copy they are restored from. No meaning, negation, *l* or person errors found; every restoration from a parallel says so in its פירוק. Rebuilt; `verify 1.20 1.21 1.22 1.161 1.40 1.119 1.39 --strict` 0 problems, 0 repeated-line differences; quotes 0.

### The text on its own terms
- Sin as a catalogue of possibilities: the ritual does not know what was done, so it names every way – foreign influence, oppressors, anger, impatience, a petty misdeed, a fault in the cult itself – and covers them all (11–15, 28–32).
- The city's whole population is named: men, women, the resident alien "of the walls", the Ionians, the king (18, 26–28, 35–36): purity is collective.
- The bodily state counts like sin: "if your beauty is disfigured" stands in the place of "if you sin" (28, 39).
- The offering is "lifted" to El and his assembly (24–25): the gods receive it, nothing is sent away.
- The donkey of "rectitude" (26): an animal that restores *mšr*, the right order.

### Key parallels
- [divergence] Lev 16:22 `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם` – the same verb *nšʾ*, the opposite direction (to the gods, not away from them); a donkey, not a goat.
- [cognate] Lev 4:3 `וְהִקְרִיב עַל חַטָּאתוֹ אֲשֶׁר חָטָא` – *šqrb* + *ḫṭʾ*; [divergence] Lev 4 by status (priest, congregation, ruler, individual) ↔ the groups here.
- [equivalent] Num 15:26, Lev 16:29 – the `גֵּר` included in the atonement (18, 35–36).
- [cognate] Num 21:4 `וַתִּקְצַר נֶפֶשׁ הָעָם` – *qṣrt npš*.
- [cognate] Gen 10:2 `וְיָוָן`; Gen 15:20 `הַחִתִּי` – the peoples around Ugarit.
- The finding of absence: `כִּפֶּר` (Lev 16) is not on the tablet; its word is *npy*.

### Lines shared with other tablets
35 = 1.4 V:42 (`ושוב אל המִסְפָּר`); 25 *dr* ↔ §4.2 `דּוֹר אֵל`; the four internal copies.

### Proposals for the shared renderings
- *ṯʿ* `הגשה`, *ṯʿy* `הגיש` (revising §12.8's `הקרב`); *šqrb* `הקריב` [cognate].
- *npy* `טָהֳרָה`; *mpḫrt* `קהל`; *nkt* `שחיטה`; *mšr* `מֵישָׁרִים`; *l p* `לפי`; *qṣrt npš* `קוצר נפש`; *yp* `יֹפִי` (collides with 1.5–1.6 *ysmt* `יופי`: the cognate should keep it – for the next Baal-cycle session); *šnw* `השתנה`; *ġbr* `גִּבְרִי`; *gr* `גֵּר`.

### Lessons for the guidelines
- Transcribing *ġ* as ע can manufacture a biblical word (*ġbr* → `העברי`): check a transcribed name against Hebrew words before fixing it.

## KTU 1.119

### Scope
1–36 (36 lines; translator 3). A month's sacrifice calendar (1–25: the 7th, 17th, 18th days of Ibaʿlat; the king's ablution and "profane" state at sunset; offerings to Baal of Ugarit, El, the Baals, Ġlm, the two Ġlmt, Išḫara, the deified dead kings) and the prayer for a besieged city (26–36).

### Sources consulted
As 1.40.

### Decisions
- Offering words (shared with 1.39): *gdlt* `גְּדֵלָה` (literal "the big one"; the גדל gate licensed by *gdlt*), *dqt* `דַּקָּה`, *alp* `בקר`, *š* `שֶׂה`, *imr* `כבש`, *ynt qrt* `יונת קריה`, *ʿṣr* `צפור`, *npš* `נפש` (an offal portion; licensed), *ur* `אוּר`, *šnpt* `הנפה` (Š → hifʿil; `תְּנוּפָה` [cognate] in the note), *kbd* `כָּבֵד`, *ššrt* `שַׁרְשֶׁרֶת` [cognate].
- *ʿrb špš w ḥl mlk* `בא שַׁפְּשׁ – וחוֹל המלך` (*ḥl* `חֹל` [cognate], Lev 10:10); *yrtḥṣ mlk brr* `יתרחץ המלך, בָּר` (*brr* `בַּר`, Ps 24:4); *mḥllm* `*מחללים*`.
- *rišyt* `ראשית` [cognate] (25) – the cognate keeps it: 1.22 I:24 *prʿ* changed from `*ראשית*` to `*תנובה*`. *mtk* `*הַתָּכָה*` (`נֶסֶךְ` is *nsk*'s).
- **The prayer:** *k gr ʿz ṯġrkm* `כי יתגרה עַז (ב)שעריכם` (*gry* `הִתְגָּרָה` [cognate], Deut 2:5; not `גֵּר`); *qrd* `לוחם`; `את עיניכם אל בעל תשאו`; *al* (II) `אָנָּא` (positive; *al* (I) "not" would invert the prayer); *ydy* `השליך`; *ibr* `אַבִּיר`; *šqdš* `הקדיש` (licensed); *mḏr* `נדר` [cognate] – **the `נדר` gate's licence widened to *mḏr* / *nḏr* (tool fix)**; *mlʾ* D `נְמַלֵּא`; **31 *ḏkr* `זָכָר`, not "firstborn"**: KTU³ reads ⸢d⸣kr – the old *bkr* reading built the 2 Kgs 3:27 parallel; `בְּכוֹר` not used; *ḥtp* `*חֶתֶף*`; *ʿšrt … nʿšr* `*מעשר* … *נעשר*` (the tithe reading, Gen 28:22; DULAT's "banquet" in the note); *ntbt* `נתיב`; *ntlk* `נתהלך`; *ṣlt* `תפילה`.
- 12 *mdgl* (metathesis of *mgdl*) `מגדל` – **the `גדל` gate's licence widened to *mdgl* (tool fix: the prefix class reads `למגדל` as ל־מ־גדל)**.

### Open decisions for the user
- 32 *ʿšrt / nʿšr*: tithe (chosen) or banquet.
- 8 *bt ṯʿy*: "the house of the officiant" (chosen) or "the daughter of …".
- 22 *tdn*: `*תדון*` (CUC) – sense unclear.

### Progress log
- Drafted 1–36; `verify` blocked 12 (`למגדל`) → licence fix; 30 `נדר` → licence fix; then clean. Passes (a)–(c): no further change. `verify 1.119 --strict` 0; quotes 0.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (the parses, DULAT; no EUPT for this text). **8 `>` lines changed**, all brackets, with notes: one sign or an ending restored → no bracket (11, 19, 31, 32, 34); a word read in CUC had been bracketed (9, 15 *bʿl*; 33 *bt*). No meaning, negation, *l* or person errors found; every restoration from a parallel says so in its פירוק. Rebuilt; `verify 1.20 1.21 1.22 1.161 1.40 1.119 1.39 --strict` 0 problems, 0 repeated-line differences; quotes 0.

### The text on its own terms
- Holiness has hours: at sunset the king becomes "profane" again (4, 23–24), after washing himself "pure" (5) – the king moves in and out of sacred status by the calendar.
- The dead kings (*ṯʿ*, *mlkm*) are on the calendar beside the gods (11, 25).
- War theology in a liturgy: when the enemy is at the gate, lift the eyes to Baal, promise a bull, a vow, a male, a tithe, a pilgrimage – and Baal "will hear your prayer" (26–36): the ritual text guarantees the answer.

### Key parallels
- [cognate] Ps 121:1 `אֶשָּׂא עֵינַי אֶל-הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי` – lifting the eyes to the god for help.
- [cognate] Judg 11:30 – a vow in war; Gen 28:22 `עַשֵּׂר אֲעַשְּׂרֶנּוּ` – a vow with a tithe (figura etymologica).
- [divergence] 2 Kgs 3:27 – Mesha's firstborn on the wall: the situation is shared, the word is not (*ḏkr*, not *bkr*).
- [cognate] Lev 10:10 `בֵּין הַקֹּדֶשׁ וּבֵין הַחֹל` – *ḥl*.
- [cognate] Ex 29:24 `תְּנוּפָה` – *šnpt*; Lev 1:3 `זָכָר` as offering.
- [cognate] Ps 127:5 `בַּשָּׁעַר`; Deut 2:5 `תִּתְגָּרוּ`.

### Lines shared with other tablets
4 = 23–24 (`בא שַׁפְּשׁ – וחוֹל המלך`); 28 ↔ 35–36 (the request and its promised fulfilment, the same words).

### Proposals for the shared renderings
*gdlt* `גְּדֵלָה`, *dqt* `דַּקָּה`, *ḥl* `חֹל`, *brr* `בַּר`, *mḥll* `מחלל`, *šnpt* `הנפה`, *rišyt* `ראשית` (and *prʿ* `*תנובה*`), *mtk* `*הַתָּכָה*`, *gry* `התגרה`, *ʿz* (adj.) `עַז`, *al* (II) `אָנָּא`, *mḏr* `נדר`, *ḏkr* `זָכָר`, *ʿšr(t)* `מעשר` / `עשר`, *ṣlt* `תפילה`, *ššrt* `שַׁרְשֶׁרֶת`, *ynt* `יונה`; names `אִבַּעְלַת`, `אִשְׁחַרַי` / `אוּשְׁחַרַי`.

### Lessons for the guidelines
- The famous detail again: "a firstborn we will offer" (the base of the Mesha parallel) is not on the tablet (*ḏkr*).
- A gate's prefix class can read a metathesized source word's Hebrew as a gated root (`למגדל`): license the metathesized spelling.

## KTU 1.39

### Scope
1–22 (22 lines; translator 3). A sacrifice list for one ritual day: *ṯʿ* offerings, the "loins and liver", bovid and ram for El, *ilh* / *ilhm*, the gods of the cycle, "burnt offering and peace offering", at night Šapšu-pgr and the *ṯrmnm* in the king's house, "thirty times", the altar steps, the Lady of the House, "the people of the gods".

### Sources consulted
As 1.40.

### Decisions
- *šrp* `שְׂרֵפָה` ([equivalent] `עֹלָה`, never `עֹלָה` itself), *šlmm* `שְׁלָמִים` [cognate] (Lev 3), *dbḥ* `זבח`, *ṯʿ* `הגשה` (CUC's "title of dead kings" rejected here: an offering list).
- ***ilhm* `אִלָהוּם` / *ilh* `אִלָהוּ`** (transcribed, always vocalized): the plural is the form of `אֱלֹהִים` (never in a line, §5.1) – the finding is in the note.
- *mtntm* `מָתְנַיִם` [cognate], *kbd* `כָּבֵד` (CUC "total" rejected) – Lev 3:4.
- *trṯ* `תִּירוֹשׁ` (the god "Must"), *ilt mgdl* `אֵלַת המגדל`, *ilt asrm* `אֵלַת האסירים`, *špš pgr* `שַׁפְּשׁ־פֶּגֶר` (*pgr* `פֶּגֶר` [cognate], Ezek 43:9), *ṯrmnm* `תַּרְמָנִים`, *dqt* (DN) `דַּקִּית` (apart from the offering `דַּקָּה`), *ʿnt ḫbly* `עֲנָת ה*מחבלת*`, *iltm ḫnqtm* `שתי האֵלוֹת החוֹנְקוֹת`, *bʿlt bhtm* `בעלת הבית`, *inš ilm* `אנוש האֵלִים` (*inš* `אֱנוֹשׁ`, apart from *nšm* `אֲנָשִׁים`).
- *rmṣt* `*רֶמֶץ*`, *dṯt* `*דשא*` [cognate] (Gen 1:11, a word contact only), *mlun* `*מלואות*` (`מִלֻּאִים` of Lev 8 avoided), *ḫṣt* `חצי`, *pamt* `פעמים`, *yrdt mdbḥt* `*מורדות* המזבחות` (DULAT "steps"; Ex 20:22 forbids altar steps).
- The scribe's deletions ({kṯr}, {ršp}, {k}, {š}) are not translated.

### Open decisions for the user
- *ilhm* transcribed (chosen) or rendered "the gods" (`אֵלִים`, colliding with *ilm*).
- 20 *yrdt*: noun "steps" (chosen) or verb "she / you shall descend".

### Progress log
- Drafted 1–22; `verify 1.39` clean; quotes: three wordings aligned with the verses (Lev 3:4, Ps 8:5 maqaf, 1 Kgs 17:17). Passes (a)–(c): no further change. `--strict` 0.
- Independent fidelity review (Round 5 run 3), 2026-10-31: every line checked against CUC / KTU³ (the parses, DULAT; no EUPT for this text). **5 `>` lines changed**, all brackets, with notes: one sign restored → no bracket (5, 17, 18, 19, 20). No meaning, negation, *l* or person errors found; every restoration from a parallel says so in its פירוק. Rebuilt; `verify 1.20 1.21 1.22 1.161 1.40 1.119 1.39 --strict` 0 problems, 0 repeated-line differences; quotes 0.

### The text on its own terms
- The pantheon as a table of portions: every god gets an animal by size and kind – "big" (*gdlt*) or "little" (*dqt*), ram, bird – an economy of honour.
- Dead kings by night: Šapšu "of the corpse" and the *ṯrmnm* receive sacrifices in the king's house (12, 17): the royal ancestor cult inside the palace.
- Dangerous goddesses are fed too (the "stranglers", 18; Anat "the destroyer", 17).
- The same two-way division as Leviticus: the offering burnt whole and the offering shared (4).

### Key parallels
- [cognate] Lev 3:1 `זֶבַח שְׁלָמִים`; [equivalent] Lev 1:3 `עֹלָה` ↔ *šrp*.
- [equivalent] Lev 3:4 – kidneys and liver as the god's portion (2).
- [cognate] Gen 1:1 – *ilhm*, the form of `אֱלֹהִים`, as a group of gods.
- [cognate] Ezek 43:9 `וּפִגְרֵי מַלְכֵיהֶם` – *pgr* in a royal cult beside the sanctuary.
- [divergence] Ex 20:22 – altar steps forbidden / part of the rite (20).

### Lines shared with other tablets
Offering words as 1.119; 7 *dr il w pḫr bʿl* ↔ 1.40 `דור בני אֵל … קהל בני אֵל`; 6 *ṯkmn w šnm* ↔ 1.40.

### Proposals for the shared renderings
*ilh* `אִלָהוּ`, *ilhm* `אִלָהוּם` (always vocalized); *šrp* (n.) `שְׂרֵפָה`; *mtnt* `מָתְנַיִם`; *pgr* `פֶּגֶר`; *ṯrmnm* `תַּרְמָנִים`; *inš* `אֱנוֹשׁ`; *ḫnqt* `חונקת`; *ḫbly* `*מחבלת*`; *mdbḥ* `מזבח`; *yrdt* `*מורדות*`; *pʿm* `פעם`.

### Lessons for the guidelines
- An offering list keeps its source's word order ("god – victim" or "victim – god"): a fixed Hebrew pattern (`X – Y`) keeps the order visible without adding verbs.

## Parallels index
