# Project 3: the letters (the Sumerian letters of private life; ETCSL 5.5.1 and 3.3.x)

## Scope
The Message of Lu-diĝira to his mother (ETCSL 5.5.1, 57 lines with 44A, 52A, 52B) and eight letters of the OB Sumerian epistolary curriculum that concern private life: 3.3.07 (Ugubi to his mother, 11), 3.3.06 (Aba-taḫ-lugalĝa to his brothers, 13), 3.3.01 (Ur-saga to a king, 14), 3.3.10 (Inanaka to Nintinuga, 26), 3.3.20 (Gudea to his personal god, 10), 3.3.08 (Šamaš-ṭāb to Ilak-niʾid, 19), 3.3.11 and 3.3.12 (Inim-Inana to Enlil-massu and Lugal-ibila, 15 + 13) – 178 lines. Not included: the royal correspondence of Ur (3.1.x) and the royal letter-prayers (3.2.x), which are political.
**The Old Babylonian Akkadian private letters (AbB) were planned but not obtained:** CDLI (`cdli.earth`) answered HTTP 503 all day (2026-10-21); Archibab is not on the allowlist; eBL's fragmentarium has OB letters but no searchable edition. A later run should take them (e.g. the letters of sons to mothers – Iddin-Sîn to Zinû, TCL 18 111 –, the Mari women, the Old Assyrian wives) from CDLI.

## Base text
ETCSL (`../../sources/ETCSL/5.5.1--…`, `3.3.0N--…`, CC BY-NC-SA) with ORACC epsd2/literary Q000775, Q000573, Q000578, Q000579, Q000580, Q000582, Q000583, Q000584, Q000592 (lemma + morph). ETCSL's English is rank 3. Some letters carry Akkadian glosses in the manuscripts (`(gloss: …)` in the transliteration): they are evidence for the ancient understanding and are translated in the apparatus.

## Line numbering
ETCSL composite numbers (44A, 52A, 52B in 5.5.1 are pluses of single manuscripts). Files: `annotated-ludigira.rtl.md` (LUD), `annotated-letters.rtl.md` (the eight letters, units marked `<!-- unit: KEY -->`).

## Formulas (renderings §3.3)
Opening *X-ra u₃-na-dug₄* / *Y na-ab-be₂-a* = `אֶל X אֱמֹר:` / `זֶה אֲשֶׁר Y אוֹמֵר:`; closing *a-ma-ru-kam* = `מַבּוּל הוּא!`.

## Open decisions
1. *gi₄* "send (back)" = `שָׁלַח` where it means sending a person (5.5.1 2; 3.3.12 4, 10), `שׁוּב` / `הֵשִׁיב` where it means return (5.5.1 45; 3.3.01 7; 3.3.08 14; 3.3.11 11; 3.3.20 10): one Sumerian verb, two Hebrew verbs by sense; the gate `שוב` is licensed in both.
2. *ḫi-li* = `חֵן` in the letters and the proverbs (5.5.1 25, 31, 38; 1.197), against Akk. *kuzbu* = `עֲגָבִים` (project 1): the Sumerian word is wider (the mother's charm).
3. *lu-lim* = `יַחְמוּר` (5.5.1 22; Gilgameš *lulīmu*), though ETCSL reads "doe"; *mar-šum* = `כִּסֵּא־נְשִׂיאָה`, not `אַפִּרְיוֹן` (which would import Song 3:9).
4. *tukum-bi X an-na-kam* "if it is X's approval" = `אם רצון X הוא` (3.3.01 11, 3.3.10 19), keeping `טוֹב` for the one manuscript with *u₃-na-an-dug₃* (noted).
5. *ušbar* = `חָם` from the wife's side (5.5.1 14), `חוֹתֵן` from the husband's side (proverb 1.169).
6. *lul-aš* "falsely, in vain" = `לשווא` (3.3.06 7), `בלי שקר` (3.3.11 3, "beyond lying"); *lul* elsewhere `שֶׁקֶר`.
7. *a-zu* = `רוֹפֵא`; *tu₆* (= *šiptu*) = `קֶסֶם` (the open cross-corpus choice); *mu₇-mu₇* = `לַחַשׁ`.

## Progress
Drafted by the run-7 coordinator acting as the translator (see `../handoff--round2-run7.md` §6):
- 2026-10-21: the Message of Lu-diĝira (57 lines, `annotated-ludigira.rtl.md`); the eight letters (121 lines, `annotated-letters.rtl.md`). All 178 lines; `translation.rtl.md` built.

### Review passes (2026-10-21)
1. **Fidelity and Hebrew**: a read-through of all `>` lines; fixed `ברוך` "gently" (caught by the blessing gate: `בעדינות`), `הגן` for *mu₂-sar* "vegetable plot" (`ערוגות הירק`: no *kiri₆*), `שמן העונג` (a misreading of `שמן` "from": rephrased), `לשאול` (contains the never-string `שאול`: `נשאל`), an `(אהוב)` addition without *ki aĝ₂* (removed).
2. **Consistency** (by script): the key-lemma check (misses: the *gi₄* sense split, decision 1; `שׂוּמִים` plene); `verify LET` with the four letter formulas (opening *u₃-na-dug₄* in its three line-shapes, *na-ab-be₂-a* `זה אשר … אומר/אומרת:`, *u₃-na-de₃-taḫ* `הוסף:`, *a-ma-ru-kam* `מַבּוּל הוּא!`) and the five "signs" of 5.5.1 (`אוֹת … אתן לך:`).
3. **Echo control and quotations**: every quotation printed before use and `check_bible_quotes.py` clean; four notes first written with "not a quotation" memory quotes were replaced by printed verses (one of them, Gen 37:14, had been misremembered: `לְכָה נָּא` for `לֶךְ נָא`).

## Key findings (project 3)
- **A wasf of a mother**: 5.5.1's five "signs" describe the mother with the images of the Song of Songs' wasfs and of the "woman of valour": the house kept straight and the possessions multiplied (14–18 ↔ משלי לא:טז, כז), "more precious than carnelian" (24 ↔ משלי לא:י), the morning star (23 ↔ שיר השירים ו:י), the garden, the palm and the clusters (35, 48, 51 ↔ שיר השירים ד:יג; ז:ח), the sedan chair of precious wood (49 ↔ ג:ט), ivory (31 ↔ ה:יד; ז:ה), "good oil" (20 ↔ קהלת ז:א), and charm (*ḫi-li*) praised where Proverbs calls it "a lie" (25 ↔ משלי לא:ל).
- **"Your son is well"**: the end of 5.5.1 (54 `לוּ־דִּינְגִּירָה, בנך האהוב – שלום!`) ↔ `כֹּה אָמַר בִּנְךָ יוֹסֵף` (בראשית מה:ט) and `עוֹד יוֹסֵף חַי` (בראשית מה:כו); the mother who cannot sleep (4) and the captive returning to his mother (46 ↔ `וְשָׁבוּ בָנִים לִגְבוּלָם`, ירמיהו לא:טז).
- **The father's house**: Ur-saga asks the king that no one take his father's house (3.3.01 12–13 ↔ Naboth, מלכים א כא:ג; the daughters of Zelophehad, במדבר כז:ד); the king's word that cannot be turned back (7 ↔ `אֵין לְהָשִׁיב`, אסתר ח:ח).
- **The sick woman's letter-prayer** (3.3.10): the friends who stand far off (15 ↔ תהלים לח:יב; פח:יט), the vow to serve in the temple court (23 ↔ תהלים פד:יא), "on the ground of life I will set my feet" and "I will call your name" (21, 25 ↔ תהלים קטז:ט, יג), "your maidservant" (11 ↔ שמואל א א:יא).
- **"Like sheep without a shepherd"**: Gudea's letter to his god (3.3.20 3 ↔ במדבר כז:יז), and "may your heart return to its place" (10 ↔ `שׁוּבָה יְהוָה`, תהלים ו:ה).
- **Everyday life**: a homesick boy complaining that the bread and beer are stale (3.3.07); a brother leaving his mother in his brothers' care (3.3.06); a merchant's expense account in shekels, minas and talents, paid in tin (3.3.08 ↔ `שֶׁקֶל כֶּסֶף עֹבֵר לַסֹּחֵר`, בראשית כג:טז); a teacher sending silver and clothes to a pupil, and warning a colleague not to neglect Sumerian or let the children leave school without an agreed sign (3.3.11–12). The letter formula ends with "it is a flood!" – `מַבּוּל הוּא!`, "urgent".
