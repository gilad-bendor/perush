# Project 1: the Old Babylonian love literature (LAOS 4 01–07, 10, 13–18, 20, 22–26)

## Scope
All Old Babylonian (and the one Old Akkadian) Akkadian love lyrics, love dialogues and love incantations that have an open base text: the 25 OB / OAkk texts of ORACC AkkLove (= Wasserman 2016, LAOS 4) – 835 lines, many of them broken. Not included: the Middle Babylonian / Middle Assyrian love texts (LAOS 4 08, 09, 11, 12, 19, 21: outside "OB"; a later run) and the Isin incantation tablet IB 1554 (LAOS 4 27–34; no text in the ORACC export). Selection and reasons: `../corpus.md`.

## Base text
ORACC **AkkLove** (`../../sources/ORACC/akklove--Akkadian-Love-Literature/`; CC0): Wasserman's transliteration, normalization (`norm:`) and lemmatization, and his English translation (rank 3, `…--translation.md`). LAOS 4 itself (commentary) is not owned; SEAL has the same editions (not downloaded).

## Line numbering
ORACC labels (= LAOS 4), written without spaces: `o.i.12` (obverse, column i, line 12), `r.3'`, `b.e.36`, `t.e.1'`. One annotated file per text (`annotated-NN.rtl.md`; the Kiš fragments 14a–f in `annotated-14.rtl.md`, the incantations 20, 23–26 in `annotated-20-26.rtl.md`).

## Translation order (priority)
10 (Nanaya and Muʾati), 15 (Rīm-Sîn), 16 + 04 (the "faithful lover" dialogue and its duplicate), 07, 06, 02, 03, 01, 13, 18, 17, 05, 14a–f, 22, 20, 23–26.

## Repeated lines (fixed before drafting)
- LAOS 4 10: o.7 = o.8 and o.9 = o.10 except the address (*bēlī* / *Muʾati*): identical Hebrew except the name; o.12 ≈ o.13.
- LAOS 4 04 o.1–16 ≈ 16 o.ii.10–13 and o.i.1–8 (the man's rejection speech): the later file copies the earlier file's Hebrew where the Akkadian is identical (`kol_tools.py verify` lists the differences).

## Sources consulted
Wasserman 2016 via AkkLove (rank 3); the Gilgameš corpus renderings (binding).

## Open decisions
1. *māru* "son" as a term of endearment for the lover (07 o.9, 16 r.iii.23, 01 passim): rendered literally `בן` / `בני` (LAOS 4 03 o.4 `נער` by sense). Alternative: `יקירי` (Wasserman's "darling"). **Settled 2026-10-21 (the lead's harmonization): `בֵּן` kept.**
2. *sukannīnu* (a dove; 06 o.i.9, 17) = `תּוֹר`, because `יוֹנָה` is reserved for *summatu*; the identification of the species is uncertain.
3. *šumšû* (07) and *biātu* (06) "spend the night" both = `לִין` (two Akkadian verbs, one Hebrew verb).
4. *irimmu* "bead (love-charm)" = `חרוז` throughout (10, 15, 16, 04, 02); Wasserman "love-charm".
5. *ḫabābu*: `חִבֵּק` (caress; Gilgameš binding) but `הָמָה` of the heart and of water (03 r.32; renderings §3.1) – one lemma, two Hebrew verbs by sense.
6. *mēlulu* "play, dance" = `שִׂחֵק` (13 o.i.14', 14a o.6', 14e): a declared deviation from the Gilgameš corpus's `חוּל` / `מָחוֹל`, because here the verb takes an object ("play with my breasts"); `צחק` stays reserved for *ṣiāḫu*.
7. *bānû* "builder, creator" (14a o.11') = `הַבּוֹנֶה`, following the creation corpus's *banû* = `בָּנָה`; Wasserman "the creator" (`בורא` is reserved for the Gen 1 comparison).
8. *ṣabātu* = `תָּפַס` and *aḫāzu* = `אָחַז` [cognate] (22 o.12–r.32, 01 l.e.36, 13 o.ii.6'): a deviation from the Gilgameš corpus, where *ṣabātu* = `אָחַז`; this corpus has both verbs, and the Song's `אֲחַזְתִּיו` (3:4) needs the true cognate. 03 o.10 and 16 o.i.5, r.iv.4 were changed to `תפס` at review. **Settled 2026-10-21 (the lead's harmonization): kept – *ṣabātu* = `תָּפַס` in texts that also have *aḫāzu*.**
9. *ṣawāru* "neck" = `צַוָּאר` [cognate] (22 r.35–36); the Gilgameš corpus gives `צוואר` to *kišādu* (not in this corpus).
10. *ḫašāšu* "rejoice" = `שָׂשׂ` (10 r.12', 20 o.9); *šâlu* "rejoice" = `צָהַל` (15 o.i.27); *riāšu* `גָּל`, *ḫadû* `שָׂמַח`.
11. *karānu* "vine" = `גֶּפֶן` where it is sown (23 o.8), `יַיִן` elsewhere (15 o.i.18, 02 o.9).
12. *ruʾtu* "spittle, sap" = `רוֹק` (22; 14a o.12'), kept apart from the creation corpus's *rupuštu* `רִיר`.
13. **Settled 2026-10-21 (the lead's cross-corpus harmonization, `../renderings.md` §9):** *uqnû* = *za-gin₃* = `סַפִּיר` [equivalent] (was `לָזוּרִית`; 26 o.3, with the note on Exod 24:10, Ezek 1:26, Job 28:6); *sukkallu* = `וְזִיר` (was `השר`; 06 o.i.23); *šiptu* = `קֶסֶם` kept (the closing formula of 20 unchanged); Inana `אִינַנָּה` in the apparatus too.

## Progress
Drafted by the run-7 coordinator acting as the translator (no sub-agent tool was available; see `../handoff--round2-run7.md` §6), text by text in the priority order, with `kol_tools.py verify` and `check_bible_quotes.py` clean after each text:
- 2026-10-21: LAOS 4 10 (39 lines), 15 (43), 16 (110), 04 (50; the shared lines copied from 16), 07 (43), 06 (62), 02 (23), 03 (36), 01 (142), 13 (38), 18 (37), 17 (14), 05 (11), 14a–f (80), 22 (38), 20 + 23–26 (69). All 835 lines drafted.

### Review passes (2026-10-21, the coordinator)
1. **Fidelity and Hebrew** (one read-through of every `>` line of the 25 texts against the ORACC normalization, `listing` view): fixed two glosses written inside `>` lines (`(=מוכתר)` 14a o.16', `(=ישיג)` 18 o.15; `(=קשה)` 01 o.ii.9) – moved to the notes; *ḫašāšu* unified (`שש` / `ישישו`, 20 o.9 had `יצהלו`, which collides with *šâlu*).
2. **Consistency** (by script): a key-lemma check (every line with one of 50 key lemmas – *dādu*, *râmu*, *kuzbu*, *inbu*, *kirû*, *irimmu*, *ṭābu*, *aḫāzu*, *ṣabātu*, *târu*, *palāsu* … – must carry the fixed Hebrew; the misses were all broken words, ventive "come" = `בא`, or sense-renderings recorded above); `kol_tools.py verify LOVE` (reserved strings, gates, traps, identical source lines); the *aḫāzu* / *ṣabātu* collision found and fixed (decision 8).
3. **Echo control and quotations**: every quotation converted to the `` `…` (Book ch:v) `` form so that `check_bible_quotes.py` sees it (17 had been written `` `…`, Book ch:v `` and were unchecked; all matched); a scan of the `>` lines for vav-consecutive and archaic forms (none); the new gate `אחז` (only *aḫāzu*).

## Key findings (project 1)
- **"To the garden you came down"** (22 o.8–9, Old Akkadian, Kiš): *kirîšum tūrdā … tūrdāma ana kirîm* = `לגן ירדתן … ירדתן אל הגן` ↔ `דּוֹדִי יָרַד לְגַנּוֹ` (שיר השירים ו:ב), `אֶל גִּנַּת אֱגוֹז יָרַדְתִּי` (שיר השירים ו:יא): the verb and the noun both [cognate / equivalent], some 1,500 years before the Song.
- **The adjuration** (22 r.33–38): `משביע אני אותך … עד שצווארו וצווארך לא נצמדו – לא תרגעי!` ↔ `הִשְׁבַּעְתִּי אֶתְכֶם בְּנוֹת יְרוּשָׁלִַם` (שיר השירים ב:ז; ה:ח): the same frame (I adjure you + by whom + "until"), but by Ištar and Išḫara where the Song swears "by the gazelles and the hinds of the field".
- **The counsel of father and mother reversed** (20 o.10–11): `אל תשבי לעצת אביך, אל תקחי את עצת אמך` against `שְׁמַע בְּנִי מוּסַר אָבִיךָ וְאַל-תִּטֹּשׁ תּוֹרַת אִמֶּךָ` (משלי א:ח).
- **"Your love-making is good"**: *dādūka ṭābū* = `דּוֹדֶיךָ טובים` (13 o.i.6'; 10 o.9) ↔ `כִּי טוֹבִים דֹּדֶיךָ מִיָּיִן` (שיר השירים א:ב) – the closest phrase match of the corpus; with the Kiš wasf's *sissinnu* = `סַנְסִנֵּי` (13 o.i.11') ↔ the Song's hapax `אֹחֲזָה בְּסַנְסִנָּיו` (שיר השירים ז:ט) and the left hand (13 o.i.13' ↔ ב:ו; ח:ג).
- **`לְכָה דוֹדִי`** (15 o.i.20 *alkam … i nīpuš*) ↔ ז:יב; the "shepherd … where do you lie down" of *tarbaṣu* (07 r.39) ↔ א:ז; the twin (14b) ↔ ד:ה; the oil (*šamnu*) and honey (*dišpu*) ↔ א:ג; ד:יא; "I called her, she did not turn to me" (26 o.5) ↔ `קְרָאתִיו וְלֹא עָנָנִי` (שיר השירים ה:ו).
- **The patriarchal narratives**: *ṣīḫtu* "(erotic) laughter" = `צְחוֹק` ↔ `יִצְחָק מְצַחֵק אֵת רִבְקָה` (בראשית כו:ח) throughout; "I saw your face – you are a god" (03 o.17–18) ↔ בראשית לג:י; *amtu* (03 r.21) ↔ רות ג:ט; *šeriktu* "dowry" = `שִׁלּוּחִים` (03 r.26, 04 o.18) ↔ בראשית לא:יד; *aḫāt abiki* (18 o.19) ↔ ויקרא יח:יב; *qadištu* (20 o.12, 26 o.7) ↔ בראשית לח:כא.
- **The ancient mind**: love as a force to be "seized" and "cast" (the incantations' *aḫāzu*, *nadû*); the goddess as patron of the girl; the king as the goddess's lover; jealousy, slander (*karṣī akālu* ↔ Aram. דניאל ג:ח) and gossip; the humour and obscenity of 18; the girl's work (dough, the baby on her hip, 26) set against desire.
