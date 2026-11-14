# The Hittite Gilgameš (CTH 341.III)

Project of `../` (the Hurro-Hittite and Old Anatolian myths), created 2026-11-14 by Round 8 run 5. Tool:
`tools/hittite_tools.py` key GI (read `../corpus.md`, `../renderings.md` M4, `../translator-brief--myths.md`,
`../translator-brief--round8-run5.md`). Pointed to from `../../אפוס-גילגמש/corpus.md` (project 4 there is this one).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| GI | The Hittite Gilgameš: a Hittite retelling (not a translation) of the epic, c. 1400–1300 BCE, in three tablets and fragments (KBo 10.47c, KBo 6.1+ …) | HPM CTH 341.III.1–19 (Rieken et al., CC BY-SA 4.0): `sources/HPM/MYTH--CTH-341.III.<n>/` | 611 |

Labels `<edition>:<clause>` (`GI 7:20` = CTH 341.III.7 kolon 20). The Hurrian and Akkadian Boğazköy fragments (CTH 341.I–II)
are out of scope (the plan: a separate question for the Mesopotamian survey). Rank 3: HPM's German (`tr GI`).

## Open decisions
(none yet)

## Proposals

### Round 8 run 5, translator 3, GI part 1
Drafted GI 1:1–1:221 and 2:1–2:35 (CTH 341.III.1–2, 256 clauses) in `annotated-GI.rtl.md`, plus
`translation--intro-GI.rtl.md` (intro to the whole text; its last sentence names the later episodes from the brief only).
`verify GI`: 0 problems (the undrafted 3:1–19:7 as notes); `check_bible_quotes.py`: 0 problems on both files. HPM's German
read after each section; every correction recorded in **תרגומים** (1:21, 1:122, 1:189, 1:184–187, 2:2, 2:5, 2:7).

**Fixed strings (copy byte for byte)**
- The anger formula *nu=šši kartimmiyaz kišat* (1:78, 1:157, 1:169): `וזַעַם בא עליו` (with `[ ]` per copy: `[ו]זַ[עַם] בא עליו.`, `[ו]זַעַם בא עליו:`, `[וזַעַם בא] עליו,`).
- The Sun-god of heaven {d}UTU ŠAMÊ: `אֵל הַשֶּׁמֶשׁ של השמים` (as AS 96, UL 2:13).
- Speech formulas as F30/F31: `X החל להשיב אל Y:` (1:53, 1:91, 1:95, 1:99); present *EGIR-pa memiškezzi* `X משיב/משיבה אל Y:`; *memiškezzi* `אומר`.
- The journey: DANNA `בֵּרוּ` (*bēru*, the Gilgameš corpus); the Euphrates {ÍD}Mala `נהר מָלָה`.
- The threat/non-fulfilment pair (1:174–181): `ואתכם מעלה אל השמים אשא` / `אך מעלה [אל השמים] לא הגיע אותם`; `ואתכם [מטה] אל האדמה האפלה אַגִּיעַ!` / `[ו]אל האדמה האפלה לא הגיע אותם.` (*arnu-* `הגיע`, the Laws' precedent; F37).
- 1:203–204: `ולא עולה בידו לצאת קדימה, / ולא עולה בידו לצעוד לאחור.`
- The eight winds (1:200), Akkadograms with the Gilgameš corpus's Hebrew of SB V 160–162: IMILTĀNU `רוח צפון`, ZIQZIQQU `נשיבה־סוערת`, ŠURUPPÛ `קרה`, AŠAMŠŪTU `עלעול`, ANḪULLU (= *imḫullu*) `סער`; IM.GAL `הרוח הגדולה`.
- Ḫuwawa's surrender (1:207–209): `"הַרְפֵּה ממני, גִּלְגָּמֶשׁ! / ואתה – היה לי אדון, / ואני – אהיה לך עבד!`

**New renderings (lemma → Hebrew, lines)**
- GURUŠ "young man" `עלם` (pl. `עלמים`; the Gilgameš corpus's *eṭlu*): 1:13, 1:26, 1:38, 1:45, 1:74.
- {LÚ}ṢĀʾIDU `צייד` [cognate through the Akkadogram, Gen 10:9]: 1:53. {MUNUS}KAR.KID (= *ḫarimtu*) `זונה`: 1:54, 1:57.
- DINGIR.MAḪ (in GI, for Aruru) `אֵלַת־הָאֵם` (M1): 1:14, 1:16, 1:28. LÍL / *gimra-* `בָּר` (the Hittite table; SB *ṣēru* `שדה` in the notes): 1:30, 1:31, 1:47. MÁŠ.ANŠE (= *būlu*) `בהמות`: 1:32–1:38.
- :akkušša "pits" `בורות`, :aggati- "traps" `מלכודות` (the SB Hebrew), *šaḫ-* "fill up" `מילא`, SAḪAR "earth" `עפר` (1:40, 1:49) / "dust" `אבק` (1:186: sense split).
- *weḫ-* "roam" `סובב` (IN precedent): 1:10, 1:93. *ara-* "friend" `רֵעַ` (the Gilgameš *ibru*; the Laws have `חבר`): 1:89 – a split for the lead.
- *šummittant-* "axe" `קרדום`, ḪAṢṢINNU `גרזן` (*ḫaṣṣinnu*'s Hebrew): 1:151, 1:154. *karš-* "cut (a tree)" `כרת` (as SI 2:76 and SB *nakāsu* `כרת`): 1:155, 1:160, 1:211, 2:5, 2:9.
- *arḫa dali-* "let go, give up" `הרפה`: 1:205, 1:207, 1:217. *arkuwar* "plea" `טענה` (not `תפילה`): 1:198. *wiya-* "cry out" `צעק`: 1:189. *išḫaḫru-* `דמעות`; PA₅ `פלג` (1:191).
- *ḫalentu-* "palace" `ארמון` (`היכל` is gated to É.GAL; as SR 13.1.2): 1:212, 2:20. *kattaluzzi-* `מפתן`; ZA.GÌN `ספיר`; {NA4}*kirinnazi-* transliterated `קִירִינַּזִי` (2:22, 2:27).
- NÍG.LÁM `בגדי פאר` (1:68, 2:14); *parku-* (verb) `טיהר` (2:15, gate licensed); *dušk-* `שמח` (2:12, as UL 2:24); ARAD `עבד`, EN `אדון` (1:208–209); LÚMUTU `איש` (2:30: `בעל` is §H3).
- *taršama-* (Luwian) `*קדקד*` (1:175, 1:179); *galpariwala-*, *pulpuli-*, *mītar* transliterated with `*…*`.
- {LÚ}NAR `זמרים`, *ḫazzik-* `ניגן` (1:132); *urki-* `עקבות` (1:133); *taḫara-* `רעש` (1:156); *tetana-* `שערות?` (1:183); ZŪTU `זיעה` (1:184).

**Pre-set rows changed / applied, and why**
- M4 *šamnai-* `עיצב` and ALAM `תואר` applied (1:2, 1:3, 1:6, 1:7, 1:21, 1:22, 1:30). **Split for the lead:** HE 23:2, UL 3.1:179, UL 3.1:207 render *šamnai-* `הציב` (lexmap); GI follows M4.
- M2 *iya-* mid. `הִתְקַדֵּם` kept even for the animals going to graze and drink (1:34–1:39, 1:45, 1:170), though "הולך" would be the natural word.
- M2 *išḫuwai-* `זרה` kept for throwing traps into the river (1:42, 1:52); the IN precedent is `ערם` (lexmap): a split already in the corpus.
- M3 *tarna-* `השאיר` (the EL 2.2:22 split) used for laying pits and traps (1:38, 1:41, 1:48, 1:50).
- M2 *epp-* `תפס` kept against the SB's *ṣabātu* `אחז`, also in the calqued idiom KASKAL-an *epp-* = *ḫarrāna ṣabātu* `תפסתי את הדרך` (1:196; SB `אחז דרך`): if the lead prefers the Akkadian idiom's Hebrew here, change 1:196 only.
- *šakuwai-* `צופה` (KU, UL, AP precedent) kept against SB V 2's `מסתכלים ומסתכלים` (*palāsu*): 1:118, 1:119.
- *kiš-* "become": `נעשה` elsewhere; here by idiom `בא` (anger "came upon him", 1:78, 1:157, 1:169) and `עולה (בידו)` (1:203–204: "it is possible") – sense splits for the lead.
- Gilgameš is written vocalized `גִּלְגָּמֶשׁ` in every line (see the name bug below).

**Gate and name bugs (escaped and reported)**
- **Name check, Gilgameš:** the §H2 row's Hebrew `גִּלְגָּמֶשׁ` strips to the defective `גלגמש`, so the corpus's plain form `גילגמש` (guidelines §6.5; the Gilgameš corpus) fails `verify`. Worked around by vocalizing every occurrence; the row should accept `גילגמש`.
- **Gate `גבור`** (§H4) catches the infinitive `לגבור` "to prevail" (*tarḫ-*, M3 `גבר על`): 1:13 `[היתר שער: לגבור …]`. The regex should exclude `לגבור` / `לגבר` (or license by *tarḫ-*).
- **Gate `שכב`**: 1:55 *šešdu* has no lemma in the tool's data for this line, so the *šeš-* licence is not seen: `[היתר שער: תשכב …]`.
- **Gate `ארז`**: 1:118 `{G]}IŠERIN` – the half-bracketed sign is not read as GIŠ.ERIN: `[היתר שער: ובארז …]` (the known bracket gap).

**Cruxes**
- 1:2: the broken name after UR.SAG (`{d}k[u?-`): Kumarbi? (HPM: "Der Held K[u- …]").
- 1:28 *mītar*: HPM "Gedeihen?" (the mother goddess takes away prosperity) or the material of Enkidu's making (cf. SB I 99–100) – transliterated.
- 1:42: HPM's "(scil. Gilgameš)" as the subject who throws the traps into the river is surely Enkidu (1:39–40, 1:51–52).
- 1:92–93: 2nd or 3rd person (HPM 3rd); 1:178/181: *=šmaš* "you" (HPM, ms K "I") or "them" (ours).
- 1:185–186: who raises the dust – the horses (HPM) or the dust itself (ours).
- 2:19–27: Gilgameš speaks first and promises Ištar a palace with a lapis threshold, then Ištar answers with the same words (2:27): the reverse of SB VI 6–21, where Ištar opens and promises.

**Parallels for the index**
- Gen 1:26–27, 2:7 [divergence]: the gods fashion Gilgameš's figure (*šamnai-*, ALAM; 1:2–1:6) and the mother goddess fashions Enkidu in the steppe (1:30); SB I 49 `צלם` [cognate] in the Akkadian.
- 1 Sam 17:4 [equivalent]: the giant measured in cubits (1:7, eleven cubits = SB I 52).
- Gen 10:10 [cognate]: Uruk = `אֶרֶךְ` (1:11). Gen 2:14 [equivalent]: Mala = the Euphrates (1:112).
- Gen 10:9 [cognate through the Akkadogram]: ṢĀʾIDU `צייד` (1:53). Gen 38:15 [equivalent]: KAR.KID `זונה` (1:54).
- Gen 3:21 [divergence]: Enkidu's fine garments, the passage into the human world (1:68).
- Gen 15:1 [equivalent]: the god's "do not fear" (1:163; = SB V 97 `אַל תפחד`).
- Gen 44:9 [equivalent]: the surrender formula "I will be your servant" (1:209).
- Isa 55:12 [equivalent]: the mountains / forest that make music (1:132; = SB V 24–26).
- Lam 3:48 [equivalent]: tears like canals (1:191).
- Where the Hittite adapter kept, changed or dropped the Babylonian epic (all in the notes): kept – the gods' gifts, 11 cubits, the young men of Uruk, Enkidu made in the steppe and living with the animals, the hunter's pits and traps, "bring a harlot", the ius primae noctis (OB II 156–161), the wrestling, 20/30 leagues, the singing forest, Šamaš's voice from heaven, the weeping before the Sun, the great winds, Ḫuwawa's offer of service and Enkidu's "do not listen", the cedar for Enlil's temple door (SB V 316–318), the cleansing and Ištar's "come, be my husband"; changed – Gilgameš roams all lands before reaching Uruk, the mother goddess (not Anu) is angered, the hunter is named Šangašu and goes straight to Gilgameš (his father dropped), 9 (not 4) spans, the 16th day (not the 3rd), eight (not thirteen) winds, Gilgameš (not Ḫuwawa) weeps and cries out, horses at the battle, Ištar answered first by Gilgameš; dropped – the prologue and the walls of Uruk, the complaints of Uruk's women, the dreams on the road, Ninsun.

### Round 8 run 5, translator 3, GI part 2
Drafted GI 3:1–19:7 (CTH 341.III.3–19, 355 clauses; the placeholder removed): all 611 clauses of GI are now in
`annotated-GI.rtl.md`. `verify GI --strict`: 0 problems (2 "identical source, different Hebrew" notices, both on broken
lines of one or two letters: GI 11:5 ~ UL 2:6, GI 6:33 ~ UL 2:168 / LA 1:159 – no real repetition). `check_bible_quotes.py`:
0 on both files (one remembered verse, Qoh 9:7, caught and corrected). The last sentence of `translation--intro-GI.rtl.md`
now summarizes tablet 3 and the fragments as they are. HPM's German read after each section; corrections in **תרגומים**
(3:1, 3:5, 3:8–3:10, 3:20, 3:30, 3:88–3:90, 3:102–3:105, 3:111, 3:113, 6:39, 8:5, 8:8–10, 9:8, 10:3, 18:1).

**Fixed strings**
- The council's sentence (3:14–3:15): `'אנקידו – ימות! / וגִּלְגָּמֶשׁ – אַל ימות!'` (*lē aki* = `אַל` + future).
- Enkidu's lament (3:23–3:28): `"אחי, / אחי היקר! / … / ובין הָאִטִּים אשב, / ואת מפתן הָאִ[טִּים אחצה], / ואת אחי היקר בעיניי לא [אראה] עוד."`
- Tears like canals, now three times: 1:191 `ודמעותיו זורמות [כפלגים].`, 3:22 `ודמעותיו זורמות הלאה [כ]פלגים.` (+ *parā*), 3:33 (past) `ו[דמעותיו] כ[פלגים] זר[מו] הלאה.`
- *UMMA* PN `כֹּה X:` (3:91, 3:93); *lukk-* "it dawned" `האיר` (3:2, 3:82).
- The axe command / execution (3:106 → 3:109): `תפוס את הגרזן בידך,` → `תפ[ס] את הגרזן בידו,`; poles `מוטות של … אמות` (3:107, 3:110).
- Ullu's blessing: TI-*aš ēšdu* `יהי חי!`, TI-*za ēš* `היה חי`, TI-*tar* `חיים` (6:28–6:54).

**New renderings**
- ŠEŠ "brother" `אח` (Enkidu calls Gilgameš "my brother", where the Akkadian has *ibrī* `רֵעִי`); *nakki-* "dear" `יקר` (3:24, 3:28, 6:31).
- GIDIM (= *eṭemmu*) `אִט` (always vocalized, as the Gilgameš corpus): 3:26–3:27. *šarra-* "cross (a threshold)" `חצה` (M3's verb): 3:27.
- {GU4}ALÛ `השור` (the Hittite writes no "of heaven"; note at 3:8): 3:8, 3:17, 5:9, 8:11. *:niwalla-* "innocent" `החף` (`צדיק`, `נקי` avoided): 3:18.
- {LÚ}TAPPĪ (= *tappû*) `חבר` (the Gilgameš corpus): 3:20. *kartimmiya-* (verb) `זָעַם` (3:19), as *šāi-* (14:10).
- UR.MAḪ (= *nēšu*) `אריה`; {GU4}AM (= *rīmu*) `רְאֵם`: 3:54, 3:56, 3:78. MUNUS.KÚRUN.NA (= *sābītu*) `בעלת־המסבאה` (SB X 1): 3:85, 12:3. NAMSĪTU `גיגית`.
- ALAM `תואר` (M4) also for the statues: `שני תו[ארים]` of the lions (3:79), `שני תוארי האבן` = SB's *šūt abnī* `אנשי האבן` (3:92). `פסל` avoided (Sumerian *alan*'s).
- *aggannaš wetenaš* `מי המוות` (SB X 84, 86): 3:104. :*winala-* `מוטות`; *gipeššar* `אמה` (as AMMATU; a Hittite measure of about a cubit – a merger for the lead): 3:107, 3:110. {GIŠ}MÁ `ספינה`; *:pintant-* `*מוט־ההיגוי*`.
- *ḫurzai-* "curse" `קילל` (`ארר` is the Akkadian's): 3:71. *ḫink-* `הרכין (ראש)` (KU 12): 3:65. *laḫḫiyai-* `נודד` (not `נד`): 3:49. *zai-* "cross" `עבר`, *zainu-* `העביר` (3:51, 3:88–3:92).
- *ezzan* "chaff" `מוץ` (as *pû*): 3:44. *ḫaluka-* `בשורה`; *ḫuitar* `חיות`; *irman-* `חולי`; *kalutti-* `שורה`; *ambašši-* `עולה?` (the burnt offering; not reserved in Hittite lines – check); *zandanatar* transliterated `*הזַּנְדַּנָתַר*`; MÁŠ-*tar* `משפחה` (HPM "Familie"); GISKIM `אות`; *ḫali-* `משמרת`; *laknu-* `הפיל`; SÌR `שירה` (`שירת גִּלְגָּמֶשׁ`, as UL 1:252), NU.TIL `לא נשלם` (KU 286).
- Names (first occurrence vocalized): Itiḫa- `אִיתִיחַ[…]` (3:38), Naḫmizuli `נַחְמִיזוּלִי` (5:4, 9:23), Šušḫaruwa `שׁוּשְׁחַרוּוָה` (6:40), Itla `אִיתְלָה`, Impaluri `אִמְפַּלּוּרִי` (9:15), Ḫebat `חֶבַּ[ת?]` (19:1).

**Pre-set rows / decisions applied**
- The coordinator's decisions applied: *šamnai-* `עיצב`, 1:196 `תפס` unchanged. Gilgameš left vocalized in every line (harmless; the name check is fixed).
- *šakuwai-*, *iya-* mid., *epp-* as in part 1. *ḫark-* "perish" `אבד` (M3): 9:8 `האבוד`.

**Gate / name bugs**
- None new. (The part 1 escapes at 1:13 `לגבור` and 1:55 `תשכב` are still in place; 1:13 may now lose its escape.)

**Cruxes**
- 3:1: HPM's 1st plural "while we slept" – Enkidu narrating?
- 3:8–3:10: *kuit* "why?" (HPM; ours now) or "because"; who "cleared the mountains of cedar" (Ḫuwawa or Gilgameš).
- 3:67–3:71: Gilgameš's greeting to the Sea and the cursing (of Gilgameš? of the fate goddesses?) – no Babylonian parallel.
- 3:88–3:90: who says "you cross it" to whom (Šiduri to Ur-šanabi?).
- 3:105: *GIM-an iyaši* "if you do (it)" (HPM) or "how will you do?" (SB X 86).
- 6:22 KUN₅ "doors? ladders?"; 6:45, 6:55 *zandanatar*; 6:47 who raises the hand to Ullu.
- 14:5–14:6: the speaker who knows "the day on which they bore me" from an omen (Gilgameš? Ullu?).

**Parallels for the index**
- Gen 2:17 [equivalent]: the god's death sentence (3:14–3:15).
- Gen 18:23 [equivalent]: a god protests the death of the innocent (3:18).
- Deut 18:11 [equivalent]: GIDIM / *eṭemmu* `אִט` (3:26).
- Qoh 9:7 [equivalent]: "eat, drink" offered to the hero (6:18).
- To the Babylonian epic (in the notes): the council of the gods fills SB VII 2–26; kept – Šiduri "who sits" (SB X 1), the Stone Ones as stone figures, the waters of death, the axe and the poles (SB X 159–167), "a month and a half" read as one month and fifteen days (SB X 171), the lions and the prayer to the Moon (SB IX 8–18), the Sun crossing the sea (SB X 81–82); changed – "brother" for "friend", the Moon orders lion statues for his temple, 40 or 50 ells for SB's five rods (and no number of poles), Gilgameš bows to the Sea, Ullu (Hurrian) for Ūta-napišti, the blessings of "life" for Ullu and Gilgameš (vs. the plant of SB XI); dropped (or lost) – the Bull of Heaven episode itself (only mentioned), Enkidu's curse of the door and of Šamḫat, the funeral, the scorpion people, the flood story.

## Progress
- 2026-11-14: base secured (19 HPM editions), key GI added, renderings M4 fixed, brief written (the coordinator).
- 2026-11-14: GI 1:1–1:221 and 2:1–2:35 drafted (256 clauses; CTH 341.III.1–2), `translation--intro-GI.rtl.md` written; verify 0 problems, check_bible_quotes 0 (Round 8 run 5, translator 3, part 1 of 2). Next: 3:1–19:7.
- 2026-11-14: GI 3:1–19:7 drafted (355 clauses; CTH 341.III.3–19): all 611 clauses drafted; intro updated; verify --strict 0 problems, check_bible_quotes 0 (Round 8 run 5, translator 3, part 2 of 2). Next: review.
- 2026-11-14: independent review (Round 8 run 5, reviewer C) – 192 lines changed (1:2–1:220, 2:1–2:31, 3:1–3:145, 4:7–19:3): ≈150 brackets to the partial-restoration rule (no bracket splitting a Hebrew word: a restored ending unbracketed, a restored stem bracketed whole; also restored verbs that were left unbracketed, 1:158, 1:179, 1:215, 2:19, 3:3, 3:22, 3:71, 5:5, and preserved ones that were bracketed, 1:45, 1:169, 2:31); meaning – 1:2 the subject is "the hero K[u…]" (nom.), not Gilgameš; 1:17 *kartimmiya-* `זָעֲמָה` (as 3:19); 1:18, 1:127 *parranda* `מעבר`; 1:21 *unin* `את ההוא`; 1:26 *tarḫ-* `גבר על` (as 1:13); 1:159 one relative; 1:211 *daššu-* of trees `החזקים` (`העזים` read "the goats"); 3:25 *parkiyanu-* `יקימו` (not `ירוממו`); 3:67 "be far"; 4:7 *ḫāši* `יולדת?` (HPM); 6:17 *uwanzi* "they come"; 6:19 *nik* `[רווה]` (not "do not withhold"); 6:22 KUN₅ `המדרגות?`; 6:25 dat. `ולאוּלּוּ`; 14:10 "my god" is the subject; 3:145 the verb added; consistency – *dā-* `לקח` (1:28), *peḫute-* `הוליך` (1:54, 1:73, 3:80, 3:81, as HL1 / IL / EL and SB I 160 `הוֹבֵל`), *arra-* `שטף` (1:185, 6:10), *šuppariya-* `יָשַׁנּוּ` (3:1), *tetana-* `שיער` (1:183), *kuitman … nāwi* `בעוד ש… עדיין לא` (1:165, 1:167), *šarā epp-* `הרים` (6:57 as 6:47); vocalized traps `נָבוֹאָה` (2:2, "prophecy"), `נִשָּׂא` (2:4), `בַּשּׁוּרָה` (6:25, beside `בשורה` "news"), `הֱיֵה`, `אֶל` beside `הָאֵלִים` (1:18); notes softened (1:2 the prologue claim and the misquoted SB I 1, 1:10, 2:19 the speaker is restored, 3:71 who curses), `מדבר` removed from two notes; the intro: `מקדשו` → `בית האל שלו`, Ullu as the voyage's goal and "all Babylonian gods renamed" softened, the restored "[be?] my [husband?]" marked. The translator's fixed strings changed by the brackets: 1:78 `[וזַעַם] בא עליו.`, 1:169 `[וזַעַם] בא [עליו],`, 3:22 `ודמעותיו [זורמות?] הלאה כפלגים.`, 3:33 `ו[דמעותיו] [כפלגים] זרמו הלאה.`, 3:109 `ותפס את הגרזן בידו,`. For the lead: GURUŠ `עלם` (GI) vs `בחור` (HE, AP), DANNA `בֵּרוּ` (GI) vs `פרסאות` (HLPT, HE), and the translator's own splits (*ara-*, *karš-*, *išḫuwai-*, *šamnai-*). `verify GI --strict` 0 problems; `check_bible_quotes.py` 0 on both files.

## Part GI: parallels index (the Hittite Gilgameš, CTH 341.III)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-GI.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1:2 | `šamniyantan UR.SAG-iš {d}k[u?- ... 3] ⸢{d}⸣GIŠ.GIM.MAŠ-un ALAM-an` | המעוצב – הגבור ק[ו?…] […] את תואר גִּלְגָּמֶשׁ. | בראשית א:כז | [divergence] | `וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ` (בראשית א:כז) – כאן מעצבים את גופו של אדם אחד, הגבור, ולא את האדם; *šamnai-* `עיצב` ו־ALAM `תואר` שומרים את ההשוואה באפראט (M4). באפוס התקני: `את צלם גוויתו צָרָה בֵּלֶת־אִילִי` (SB I 49), ושם *ṣalmu* הוא `צלם` |
| 1:2 | `šamniyantan UR.SAG-iš {d}k[u?- ... 3] ⸢{d}⸣GIŠ.GIM.MAŠ-un ALAM-an` | המעוצב – הגבור ק[ו?…] […] את תואר גִּלְגָּמֶשׁ. | – | [cognate] | ; החתית כותבת ALAM, הסומרוגרם של *ṣalmu*, ומקומו כאן מוסב אל "הַתֹּאַר". |
| 1:3 | `šamner=ma [šallauš? DINGIR{MEŠ}-uš?] {d}GIŠ.GIM.MAŠ-un ALAM-an` | ועיצבו [הָאֵלִים הגדולים?] את תואר גִּלְגָּמֶשׁ. | בראשית ב:ז | [divergence] | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה` (בראשית ב:ז) – כאן אין חומר (באפוס התקני: בלת־אילי "צרה" את הצלם, ונודימוד "השלים" את הקומה, SB I 49–50). |
| 1:7 | `ALAM=ši p[argašti] 11 AMMATUM` | תוארו – [בגובהו] אחת־עשרה אַמּוֹת, | – | [equivalent] | האפוס התקני: `[…] גוף, אחת־עשרה באמה [גופו]` (SB I 52) – המעבד החתי שמר את המספר. |
| 1:7 | `ALAM=ši p[argašti] 11 AMMATUM` | תוארו – [בגובהו] אחת־עשרה אַמּוֹת, | שמואל א יז:ד | [equivalent] | `גָּבְהוֹ שֵׁשׁ אַמּוֹת וָזָרֶת` (שמואל א יז:ד) – הענק נמדד באמות גם במקרא. |
| 1:8 | `GABA=ma=šši palḫāšti 9 w[akšur?]` | וחזהו – רוחבו תשעה [זרתות?], | – | [divergence] | האפוס התקני: `[ארבע באמה] – המרווח בין [שדיו]` (SB I 53) – כאן "תשע" ויחידה אחרת. |
| 1:9 | `[{U]}ZUḫarniuš=ma=šši dalugašti ⸢3?⸣[ ... ]` | ושוקיו? – אורכן שלוש […] […] | – | [equivalent] | האפוס התקני: `שלוש אמות – רגלו, חצי קנה – שוקו` (SB I 54). |
| 1:11 | `[n=aš=kan] {URU}uraga URU-ri ār(a)š` | [והוא] הגיע אל העיר אוּרוּךְ, | בראשית י:י | [cognate] | אוּרוּךְ היא `אֶרֶךְ` של `וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד וְכַלְנֵה בְּאֶרֶץ שִׁנְעָר` (בראשית י:י). |
| 1:13 | `nu=za UD.KAM-tili ŠA {URU}uraga {LÚ.MEŠ}GU[RUŠ] taruḫḫiškiuwan dāiš` | ויום יום החל לגבור על עלמי אורוך. | – | [equivalent] | האפוס התקני: `מתקדרים עלמי אורוך *שלא כדין*` (SB I 65), `[יום] ו[לילה] מתנשא בעזות` (SB I 67) – "עלמי אורוך" (*eṭlūtu* `עלמים`) כבאכדית. אבל מעשי הדיכוי עצמם (הבן שאינו מוחזר לאביו, הבתולה שאינה מוחזרת לבעלה) אינם בשרידי העיבוד החתי. |
| 1:30 | `[nu=kan? U]R.SAG-in {d}enkitan LÍL-ri ⸢anda⸣ š[a]mniyat` | [ואת הגבור] אֶנְקִידוּ עיצבה בַּבָּר. | – | [equivalent] | האפוס התקני: `בשדה בנתה את אֶנְקִידוּ, הגיבור` (SB I 101) – שורה כמעט זהה: "הגבור", "בשדה / בבר", "בנתה / עיצבה". באכדית *banû* (`בנה`), בחתית *šamnai-* (`עיצב`), אותו פועל ששימש ליצירת גילגמש (2–6): גילגמש ואנקידו מעוצבים בידי האלים באותה מלה. |
| 1:30 | `[nu=kan? U]R.SAG-in {d}enkitan LÍL-ri ⸢anda⸣ š[a]mniyat` | [ואת הגבור] אֶנְקִידוּ עיצבה בַּבָּר. | בראשית ב:ז | [divergence] | `וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם … וַיִּפַּח בְּאַפָּיו` (בראשית ב:ז) – אדם יחיד מעוצב מחוץ לחברה, והמשך סיפורו הוא כניסה אל עולם האדם (באפראט בלבד). |
| 1:32 | `[n=an MÁŠ].ANŠE{ḪI.A} šallanuškanzi` | [ואותו] הבהמות מגדלות. | – | [equivalent] | האפוס התקני: `תתנכר לו בהמתו, [אשר גדל] לצידה` (SB I 143) – שם אנקידו "גדל" עם הבהמה; כאן הבהמות עצמן מגדלות אותו. MÁŠ.ANŠE הוא הסומרוגרם של *būlu* `בהמה`. |
| 1:34 | `nu kwēz MÁŠ.ANŠE{ḪI.A} weši[yauwanzi] iy[an]tari` | ובאשר הבהמות מתקדמות [לרעות], | – | [equivalent] | האפוס התקני: `עם הצביות אוכל עשב` (SB I 108). |
| 1:36 | `š[akur]ūwauwanzi=ya [kwēz iyantari]` | ו[לשתות] – [באשר הן מתקדמות], | – | [equivalent] | האפוס התקני: `עם הבהמה *הצטופף* בַּמַּשְׁקֶה, / עם הנעים – במים טוב לבו` (SB I 109–110). |
| 1:38 | `[nu] {m}šangašuš {LÚ}GU[RUŠ ... ] ANA MÁŠ.ANŠE{ḪI.A} :akku[šša17 :aggatiušša=ya18?] tarniškezzi` | [ו]שַׁנְגַּשׁוּ, [העלם …], לבהמות בורות [ומלכודות] משאיר תמיד; | – | [equivalent] | האפוס התקני: `[מילא] את הבורות אשר חפרתי [אני], / [נסח] את מלכודותיי` (SB I 128–129) – "בורות" ו"מלכודות" כבאכדית. בבבלית הצייד אינו נקרא בשם; המעבד החתי נתן לו שם, שַׁנְגַּשׁוּ (ממלה אכדית "רוצח"? – *šaggāšu*). |
| 1:40 | `nu=kan [:akkušša? SAḪAR{ḪI.A}-az] šaḫiškezzi` | ו[את הבורות – בעפר] ממלא תמיד, | – | [equivalent] | האפוס התקני: `מילא את הבורות אשר חפרתי אני` (SB I 155). |
| 1:43 | `{m}šangašuš=ma pait` | ושנגשו הלך, | – | [equivalent] | האפוס התקני: `אחז דרך, אל תוך אורוך [שׂם פניו], / אל המלך? גילגמש תִּנָּה את הוראותיו` (SB I 146–147) – אבל המעבד החתי השמיט את אבי הצייד ואת עצתו (SB I 132–143): הצייד הולך ישר אל גילגמש. |
| 1:45 | `{LÚ}GURUŠ-a[nza=wa ammuk? p]eran iyattari` | "עלם – לפניי? מתקדם, | – | [equivalent] | האפוס התקני: `עלם אחד אשר [בא] אלינו` (SB I 148). |
| 1:53 | `[nu] {d}GIŠ.GIM.MAŠ-uš ANA [{m}šangašu] {LÚ}ṢĀ’IDU EGIR-pa [mem]iškiuwan [dāiš]` | [ו]גִּלְגָּמֶשׁ החל להשיב אל [שנגשו] הצייד: | בראשית י:ט | [cognate] | *ṢĀʾIDU* היא המלה האכדית *ṣayyādu* (כתובה באכדוגרמה), קרובת `צַיִד`: `הוּא הָיָה גִבֹּר צַיִד לִפְנֵי יְהוָה` (בראשית י:ט) – כמו באפוס התקני (`צייד`). |
| 1:54 | `[ ... ] {MUNUS}KAR.KID pēḫute` | "[…] זונה – הוֹלֵךְ! | – | [equivalent] | האפוס התקני: `לך, צייד, עמך את הזונה שַׁמְחַת הוֹבֵל` (SB I 160); |
| 1:54 | `[ ... ] {MUNUS}KAR.KID pēḫute` | "[…] זונה – הוֹלֵךְ! | בראשית לח:טו | [equivalent] | `וַיַּחְשְׁבֶהָ לְזוֹנָה` (בראשית לח:טו) – כבאפוס. |
| 1:58 | `[ ... še]šta` | […] שכב. | – | [equivalent] | האפוס התקני: `שישה ימים ושבעה לילות – אנקידו קם, ובא על שַׁמְחַת` (SB I 192) – כל הפיתוי (SB I 176–191) שבור או קוצר כאן. |
| 1:62 | `[ ... p]āiweni` | "[…] נלך, | – | [equivalent] | האפוס התקני: `לך, אנקידו, אוליכך / אל אורוך־הדיר` (SB I 209–210) – שמחת קוראת לאנקידו ללכת לעיר. |
| 1:68 | `nu {d}EN.KI.DU-uš [ ... {TÚG}NÍG].LÁM{MEŠ} ḫarta` | ואנקידו […] בגדי פאר החזיק. | – | [equivalent] | האפוס הבבלי הקדום: אנקידו מקבל בגד מן הזונה (OB II 67–73), ובאפוס התקני `לבש לבוש` (SB II 34–35) – המעבר מן הבר אל עולם האדם עובר בבגדים. |
| 1:68 | `nu {d}EN.KI.DU-uš [ ... {TÚG}NÍG].LÁM{MEŠ} ḫarta` | ואנקידו […] בגדי פאר החזיק. | בראשית ג:כא | [divergence] | `וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם` (בראשית ג:כא) – באפראט בלבד. |
| 1:73 | `{d}GIŠ.GIM.[MAŠ ... p]ēḫuteškanzi` | "(אל) גִּלְגָּמֶשׁ […] מוליכים תמיד, | – | [equivalent] | האפוס הבבלי הקדום: `לגילגמש, המלך של אורוך־הכיכר, / פתוחה *רשת* האנשים לבוחר; / על אשת הגורל – הוא בא: / הוא – תחילה, הבעל – אחר כך` (OB II 156–161) – "זכות הלילה הראשון" של המלך; המעבד החתי שמר את התמונה (הכלה "מובאת" אל גילגמש, 73–76), אך בשרידיה אין "בעל". |
| 1:76 | `[ ... -p]a? ANA {d}GIŠ.GIM.MAŠ EGIR-an arḫa [ ... ]` | […] אחרי גִּלְגָּמֶשׁ הלאה […]" | – | [equivalent] | `הוא – תחילה, הבעל – אחר כך` (OB II 160–161): העלם בא "אחרי גילגמש". |
| 1:77 | `[GIM-an=ma {d}EN.KI].DU4-uš unin memiyan išta[mašta]` | [וכאשר אנקידו] את הדבר ההוא שמע, | – | [divergence] | האפוס הבבלי הקדום: `למאמר העלם הוריקו פניו` (OB II 165–166) – שם פני אנקידו מחווירים; כאן הוא זועם (78). |
| 1:87 | `[ ... ] ⸢{d}GIŠ.GIM.MAŠ-uš⸣ [ ... ] appantati` | […] גִּלְגָּמֶשׁ […] נתפסו (זה בזה). | – | [equivalent] | האפוס הבבלי הקדום: `נאחזו (זה בזה), וכַּפָּר כפפו (את גבם)` (OB II 218–219) – אותה תמונה; העברית החתית `נתפסו`, כי *epp-* הוא `תפס` (M2), והאכדית *ṣabātu* היא `אחז`. |
| 1:89 | `[ ... ] {LÚ}aran` | […] רֵעַ. | – | [equivalent] | האפוס הבבלי: *ibru* `רֵעַ` – אחרי ההתגוששות גילגמש ואנקידו נעשים רעים (OB II 234–240; SB II). *ara-* החתית היא המלה לחבר שווה מעמד. |
| 1:110 | `nu=šmaš=k[an ... ] ⸢20⸣ DANNA [ ...? ]` | ו[…] עשרים בֵּרוּ […] | – | [equivalent] | האפוס התקני: `לעשרים בֵּרוּ פָּתְתוּ פַּת, / לשלושים בֵּרוּ שָׂמוּ מלון` (SB IV 1–2, ועוד) – הנוסחה הבבלית שרדה בחתית רק במספרים. |
| 1:112 | `[G]IM-an INA {ÍD}mala NUNDUM=ši [erer]` | [ו]כאשר אל שפת נהר מָלָה [הגיעו], | בראשית ב:יד | [equivalent] | נהר מלה הוא הפרת (`הוּא פְרָת` (בראשית ב:יד)); באפוס התקני הפרת מופיע רק בסוף הדרך, כשהארז נשלח בו לניפור (SB V 318). המעבד החתי, הקרוב לגיאוגרפיה, מעביר את הגיבורים דרך הפרת אל ההרים שבמערב. |
| 1:115 | `[ ... INA UD 1]6{KAM} ŠÀ ḪUR.SAG{MEŠ} erer` | [ביום] השישה־עשר אל תוך ההרים הגיעו. | – | [divergence] | האפוס התקני: `[מהלך י]רח וחצי – ביום השלישי ניגשו אל הר הַלְּבָנוֹן` (SB IV 4) – כאן היום השישה־עשר, ובלי שם להר. |
| 1:118 | `[{G]}IŠERIN=ma=šmaš šakuškanz[i]` | ובארז הם צופים תמיד, | – | [equivalent] | האפוס התקני: `בגובה הארז מסתכלים ומסתכלים` (SB V 2) – אותה תמונה, והצורה החוזרת (*-šk-*) כמו הצורה החוזרת האכדית; העברית `צופה` לפי התקדים החתי של *šakuwai-* (KU 182, UL 1:178, AP 1:41), ולא `הסתכל` של האכדית *palāsu*. |
| 1:120 | `[ ... ] AŠRĪ{ḪI.A} ŠA DINGIR-LIM kwit [erer?]` | […] משום שֶׁאֶל מקומות הָאֵל [הגיעו?], | – | [equivalent] | האפוס התקני: `רואים הם את הר הארזים, / מושב האלים` (SB V 6–7). |
| 1:125 | `[ ... =w]a ḪUR.SAG{MEŠ}-[u]š warḫūnuškezzi` | […] הוא את ההרים מסבך תמיד, | – | [equivalent] | האפוס התקני: `מסתבך הנעצוץ, עטוף היער` (SB V 10). |
| 1:126 | `[ ... ]lappinit aršanteš [ ... ]` | […] בסרפד? זורמים […] | – | [equivalent?] | האפוס התקני: `[נזל] השרף, כגשם נִמְטָר, / [הול]ך, ונושאים אותו האפיקים` (SB V 15–16) – אולי אותה תמונה של יער "זורם". |
| 1:132 | `iwar40 {LÚ}NAR [ ... ] ḪUR.S[AG? ḫa]zzikkanzi` | כזמרים […] ההרים מנגנים. | – | [equivalent] | האפוס התקני: `[קופות] משוררות, גור הקוף צווח: / [כחבורת] מנגנים ומתופפים, / יום יום הם הומים לפני חומבבה` (SB V 24–26; מן הלוח שפורסם ב־2014) – אותה תמונה של יער מנגן; *ḫazzik-* "ניגן" (בכלי). |
| 1:132 | `iwar40 {LÚ}NAR [ ... ] ḪUR.S[AG? ḫa]zzikkanzi` | כזמרים […] ההרים מנגנים. | ישעיהו נה:יב | [equivalent] | `הֶהָרִים וְהַגְּבָעוֹת יִפְצְחוּ לִפְנֵיכֶם רִנָּה` (ישעיהו נה:יב) – מוטיב משותף של הרים שרים, לא מקור. |
| 1:133 | `nu GIM-an {d}GIŠ.GIM.MAŠ [ŠA {d}ḫuwaw]a urkin aušta` | וכאשר גִּלְגָּמֶשׁ ראה את עקבותיו [של חוּוָוָה], | – | [equivalent] | האפוס התקני: `במקום אשר חוּמְבָּבָה התהלך בו – שׂוּם שביל` (SB V 4). |
| 1:135 | `n=an na[ḫ- ... ]` | ואותו […] | – | [equivalent?] | אם *naḫḫ-* "יראה", כבאפוס התקני: `[אימה] נפלה על גִּלְגָּמֶשׁ` (SB V 28). |
| 1:139 | `[ ... ] GAM-an UL art[ati]` | […] לא עמדת עמ(י)? | – | [equivalent] | האפוס התקני: אנקידו מחזק את לב גילגמש לפני הקרב (SB IV 230–247; SB V 61–68). |
| 1:151 | `[ ... ] šummittantan ŠU-az ēpt[a]` | […] קרדום בידו תפס. | – | [equivalent] | האפוס התקני: `גילגמש כורת את העצים` (SB V 311); באפוס הבבלי הקדום הגרזנים נוצקים לפני הדרך (OB III). *šummittant-* הוא "קרדום" (השם החתי), ו־ḪAṢṢINNU (154) "גרזן" (האכדוגרמה, *ḫaṣṣinnu* `גרזן` של האפוס). |
| 1:155 | `[ ... ]-ašš=a {GIŠ}ERIN kar(a)šta` | […] וגם […] את הארז כרת. | – | [equivalent] | האפוס התקני: `רֵעִי, כרתנו ארז גבוה` (SB V 314). |
| 1:156 | `[GIM-an=ma {d}]ḫu[wawai]š? taḫaran47 ištamašta` | [וכאשר] חוּוָוָה? שמע את הרעש, | – | [equivalent] | האפוס הבבלי הקדום והתקני: חומבבה שומע את הלמות הגרזנים ואת נפילת הארז (OB Ishchali; SB V); בדברי האפוס על השומר: `שׁוֹמֵעַ הוּא לְשִׁשִּׁים בֵּרוּ אֶת הֶמְיַת הַיַּעַר` (renderings §3.1). |
| 1:158 | `kwiš=wa w[et]` | "מי [בא]? | – | [equivalent] | האפוס התקני: `מי זה יֵרֵד אֶל יַעֲרוֹ?` (renderings §3.1, SB II 222). |
| 1:161 | `nu=wa=šmaš=kan nepišaz kattan {d}UTU ŠAMÊ memiškezz[i]` | ואז מן השמים מטה אֵל הַשֶּׁמֶשׁ של השמים אומר להם: | – | [equivalent] | האפוס התקני: `מיד – תרועה [מן השמים צועקת וצועקת אליו]` (SB V 96) – שַׁמַשׁ עונה מן השמים; אבל באפוס התקני זה אחרי בכי גילגמש (SB V 90–95), ובחתית הבכי והתפילה באים אחר כך (188–198). שמש הבבלי הוא אֵל הַשֶּׁמֶשׁ של השמים בחתית. |
| 1:163 | `lē=wa naḫtēni` | אַל תיראו! | – | [equivalent] | האפוס התקני: `אַל תפחד, עמוד לו!` (SB V 97) – באכדית *palāḫu* (`פחד` באפוס), בחתית *naḫḫ-* (`ירא`). |
| 1:163 | `lē=wa naḫtēni` | אַל תיראו! | בראשית טו:א | [equivalent] | `אַל תִּירָא` (בראשית טו:א) – דבר האל המעודד; מוטיב משותף, באפראט בלבד. |
| 1:165 | `kwitman=war=aš=ka[n] É-ri anda nāwi paiz[zi]` | בעוד שהוא אל תוך הבית עדיין לא הלך! | – | [equivalent] | האפוס התקני: `לא י[בוא אל יערו], / לא ירד אל החורש` (SB V 97–98) – שמש מזרז את הגיבורים לפני שיחזור חומבבה אל יערו; בחתית "אל תוך הבית". |
| 1:167 | `nu=wa=za :galpariwala50 nā[wi? ... ]` | ואת ה*גלפרי*־… עדיין? לא […]" | – | [equivalent?] | אם *galpariwala-* היא מלבוש, זה זכר ל"שבעת המעטים" של חומבבה: `[לא י]תעטף בשבעת מעטיו [של נוגה]!` (SB V 99). |
| 1:174 | `nu=wa=šmaš=⸢kan⸣ nepiši šarā pēdaḫḫ[i]` | ואתכם מעלה אל השמים אשא, | – | [equivalent] | האפוס התקני, דברי חומבבה: `לו נשאתיך, לו תליתיך בשתיל אשר במבוא יערי` (SB V 192) – אותו פועל ("נשא") באיום. האיום "מעלה אל השמים … מטה אל האדמה האפלה" (174–176) הוא מרחב העולם כולו: אין לגיבורים מקום להימלט אליו. |
| 1:176 | `nu=šmaš=kan [GAM-an] dankuwai [takn]ī arnumi` | ואתכם [מטה] אל האדמה האפלה אַגִּיעַ!" | – | [equivalent] | "האדמה האפלה" – העולם התחתון של החתים (F37); באפוס הבבלי אנקידו רואה בחלומו את "בית העפר" (SB VII), וחומבבה אינו מאיים כך. |
| 1:187 | `nu nepiš UL tukkišzi` | ואין השמים נראים. | – | [equivalent] | האפוס התקני: `בעקבי רגליהם – הקרקע זזה, / בכרכרם – התבקעו שִׂרְיוֹן וְהַלְּבָנוֹן. / שָׁחַר ענן לבן` (SB V 155–157) – הקרב מחשיך את השמים. |
| 1:189 | `n=aš wīškezz[i]` | והוא צועק. | – | [equivalent] | האפוס התקני: `נשא גילגמש את ראשו, [לפני שַׁמַשׁ בוכה]` (SB V 90; שם "בוכה", כאן "צועק") – גילגמש בוכה לפני שמש בשעת הקרב (ובהמשך גם חומבבה, SB V 185). |
| 1:191 | `nu=šši=kan išḫaḫru :P[A5{ḪI.A}-uš mān arš]anzi` | ודמעותיו זורמות [כפלגים]. | – | [equivalent] | האפוס התקני: `לפני קרני שַׁמַשׁ ז[ולגות דמעותיו]` (SB V 91); |
| 1:191 | `nu=šši=kan išḫaḫru :P[A5{ḪI.A}-uš mān arš]anzi` | ודמעותיו זורמות [כפלגים]. | איכה ג:מח | [equivalent] | `פַּלְגֵי מַיִם תֵּרַד עֵינִי` (איכה ג:מח) – דמעות כפלגים, מוטיב משותף. |
| 1:196 | `nu KASKAL-an ēppun` | ותפסתי את הדרך, | – | [equivalent] | האכדית *ḫarrāna ṣabātu* "אחז דרך" (`אחז דרך` באפוס, SB I 146) – הניב האכדי בלשון חתית (*KASKAL-an epp-*); העברית `תפס`, כי *epp-* הוא `תפס` (M2). |
| 1:198 | `[{d}UT]U ŠAMÊ Š[A {d}]GIŠ.GIM.MAŠ arkuw[ar] ištamašta` | [אֵל הַשֶּׁמֶשׁ] של השמים את טענתו של גִּלְגָּמֶשׁ שמע, | – | [equivalent] | האפוס התקני: `שַׁמַשׁ שמע את מאמר פיו` (SB V 95). |
| 1:199 | `nu ANA {d}ḫuwawa IM[{MEŠ}-uš] GAL{MEŠ}-iš araezzi` | ומקים על חוּוָוָה רוחות גדולות: | – | [equivalent] | האפוס התקני: `שַׁמַשׁ העיר לו על חומבבה את הסופות הגדולות` (SB V 159) – השורה כמעט מילה במילה. |
| 1:200 | `IM.GAL [{I]}MILTĀNU[ ... ] {IM}ZIQZIQQU {IM}ŠURUPPÛ {IM}AŠ[AMŠŪTU] {IM}ANḪULLU` | הרוח הגדולה, רוח צפון, […] נשיבה־סוערת, קרה, עלעול, סער – | – | [equivalent] | האפוס התקני: `רוח דרום, רוח צפון, רוח קדים, רוח מערב, נשיבה, / נשיבה־סוערת, שַׁפַּרְזִיקּוּ, סַעַר, סִימוּרְרוּ, / אַסַּכּוּ, קָרָה, סוּפָה, עַלְעוֹל` (SB V 160–162) – שמות הרוחות כתובים בחתית באכדית, ולכן העברית של האפוס לכל אחת מהן. |
| 1:201 | `8 IM{MEŠ}-a=šš[i] arāer` | ושמונה רוחות קמו עליו, | – | [divergence] | האפוס התקני: `שלוש עשרה רוחות קמו, ופני חומבבה חשכו` (SB V 163) – כאן שמונה (בבבלי הקדום שבע?). |
| 1:204 | `UL=ma=šši EGIR-pa tiy[auwanzi] kišari` | ולא עולה בידו לצעוד לאחור. | – | [equivalent] | האפוס התקני: `לא יִגּוֹף לפניו, לא ירמוס לאחוריו` (SB V 164). |
| 1:207 | `arḫa=wa=mu dāli {d}GIŠ.GIM.MAŠ` | "הַרְפֵּה ממני, גִּלְגָּמֶשׁ! | – | [equivalent] | האפוס התקני: `גילגמש, מַלֵּט את נפשי!` (SB V 173). |
| 1:209 | `ammuk=ma=ddu=za ARAD-iš ēšlut` | ואני – אהיה לך עבד! | – | [equivalent] | האפוס התקני: `[עבד? ח]י – לאדוניו [ישוב?]` (SB V 172). |
| 1:209 | `ammuk=ma=ddu=za ARAD-iš ēšlut` | ואני – אהיה לך עבד! | בראשית מד:ט | [equivalent] | `וְגַם אֲנַחְנוּ נִהְיֶה לַאדֹנִי לַעֲבָדִים` (בראשית מד:ט) – נוסחת הכניעה; מוטיב משותף. |
| 1:210 | `n[u]=t[t]a? [{GIŠ}]ERIN{MEŠ}? kwiēš šallanuškenun` | ו[את] הארזים אשר גידלתי לך, | – | [equivalent] | האפוס התקני: `עצים, ככל אשר תאמר, […] / אנצרה לך הדס` (SB V 175–176). |
| 1:212 | `nu=za {É.MEŠ}ḫal[enduwa? ... ]` | ו[ארמונות?] […]" | – | [equivalent] | האפוס התקני: `עצים – הדר הי[כלך …]` (SB V 177) – העצים לבניין ההיכל (באכדית *ekallu* `היכל`; בחתית *ḫalentu-* `ארמון`). |
| 1:215 | `n=an lē išt[amašti]` | אותו אַל [תשמע]! | – | [equivalent] | האפוס התקני: `[רֵ]עִי, אַל תשמע את אמירתו של חומבבה` (SB V 179). |
| 1:217 | `lē {d}ḫuwaw[ain daliyaši?]` | אַל [תַּרְפֶּה] מחוּוָוָה! | – | [equivalent] | האפוס התקני: `רֵעִי, חומבבה, נוצר יער [הארזים] – / גמור אותו, קטול אותו` (SB V 197–198). |
| 2:4 | `nu=wa kwit pēdum[men]i ANA {d}E[N.LÍL ... ] EGIR-pa` | ומה נִשָּׂא בחזרה אל [אֶנְלִיל …]? | – | [equivalent] | האפוס התקני: `[אל בית] א[נליל בניפו]ר י[שאנה פְּרָת]` (SB V 318) – הארז הוא מנחה לאנליל. |
| 2:6 | `kwiš=m[a(-) ... ] ŠA {d}EN.LÍL É DINGIR-LIM [K]Á.GAL-TIM 1-edaz[ ... ]` | ומי ש[…] של בית הָאֵל של אנליל את השער הגדול, מאחד […] | – | [equivalent] | האפוס התקני: `עשיתי דלת – שישה קנים גובהה, שני קנים רוחבה, / אמה אחת עשויה, עמודה, צירה ו*פותה* – מאחד הם` (SB V 316–317) – דלת לבית אנליל, עשויה מעץ אחד. |
| 2:10 | `n=at=[kan] ANA {ÍD}malā [ ... ]` | ואותו אל נהר מָלָה […] | – | [equivalent] | האפוס התקני: `רכסו רפסודה, השליכו […]` (SB V 321) – הארז נשלח בנהר. |
| 2:12 | `nu=šmaš=at duškiškanzi` | שמחים בו תמיד. | – | [equivalent] | האפוס התקני: `[ישמחו] דבירי [ניפור]` (SB V 319). |
| 2:14 | `nu=šmaš {d}GIŠ.GIM.MAŠ-uš [{d}EN.K]I.DU4-u[šš=a ... ] {TÚG}NÍG.LÁM{MEŠ} arḫa pe[ššiēr]` | וגִּלְגָּמֶשׁ [ו]אנקידו – את בגדי הפאר מעליהם [פשטו], | – | [equivalent] | האפוס התקני: `רחץ את פרעותיו, ניקה את קישוטיו, / ניער את תלתליו על גבו. / השליך את צוֹאָיו, התלבש בזַכָּיו` (SB VI 1–3) – בבבלית גילגמש לבדו, וכאן שניהם. |
| 2:19 | `[nu {d}GIŠ.GIM.MAŠ-u]š ANA {d}IŠTAR me[miškezzi]` | [וגִּלְגָּמֶשׁ] [אומר] אל אִשְׁתַּר: | – | [divergence] | באפוס התקני אִשְׁתַּר פותחת: `אל נוי גילגמש נשאה עיניה הנסיכה אִשְׁתַּר` (SB VI 6); כאן, לפי השחזור של HPM (שם הדובר שבור; נשתמרה רק סיומת הנושא), גילגמש מדבר ראשון. |
| 2:22 | `[KÁ-aš {GIŠ}kat]taluzzi=ma I[ŠTU? {NA4}ZA.GÌN? {NA4}kiri]nnazi=ya teḫḫ[i]` | ואת מפתן [השער] [בספיר?] ובאבן קִירִינַּזִי אשים!" | – | [divergence] | האפוס התקני: `ארתום לך מרכבה של סַפִּיר וזהב` (SB VI 10) – שם אשתר מבטיחה לגילגמש מתנות ספיר; כאן גילגמש מבטיח לה ארמון ומפתן של ספיר (או שאשתר מצטטת את מתנותיה, 27). ZA.GÌN = *uqnû* `סַפִּיר` (הֶרְמוֹנִיזַצְיָה 2026-10-21). |
| 2:29 | `[eḫu? {d}G]IŠ.GIM.MAŠ` | "[בוא?,] גִּלְגָּמֶשׁ, | – | [equivalent] | האפוס התקני: `בוא, גילגמש, היה אתה החתן!` (SB VI 7). |
| 2:30 | `nu=mu=za {L[}ÚMUTU-YA? ēš?]` | ו[היה?] לי [לאיש?]!" | – | [equivalent] | האפוס התקני: `אתה – תהיה בעלי, ואני – אהיה אשתך!` (SB VI 9) – העברית `איש`, כי `בעל` שמור בשורות המיתוסים (§H3). |
| 2:31 | `[n]u {d}GIŠ.GIM.MAŠ-uš A[NA {d}IŠTAR EGIR-pa mem]iškezzi` | [ו]גִּלְגָּמֶשׁ אל [אִשְׁתַּר] משיב: | – | [equivalent] | האפוס התקני: `[גילגמש] פתח את פיו ואמר, / [דיבר] אל הנסיכה אשתר` (SB VI 22–23) – הסירוב, שבבבלית הוא נאום ארוך על אהוביה של אשתר, שבור כאן. |
| 3:5 | `kēdani=wa=za=kan GE6-anti kwin Ù-[an ūḫḫun]` | החלום אשר [ראיתי] בלילה הזה: | – | [equivalent] | האפוס התקני: `רֵעִי, על מה זה נמלכו האלים הגדולים?` (SB VII 1), והנוסחה `אִמִּי, הַחֲלוֹם אֲשֶׁר רָאִיתִי בַּלַּיְלָה הַזֶּה` (renderings §2). |
| 3:8 | `apūš=wa=kan kwit {GU4}ALÛ-un kwenner` | 'למה הם הרגו את השור, | – | [equivalent] | האפוס התקני: שור השמים (*alû*, `שׁוֹר הַשָּׁמַיִם`) שאנקידו וגילגמש הרגו (SB VI). בחתית כתוב ALÛ בלבד, בלי "השמים"; הפרק עצמו לא נשתמר בעיבוד החתי (אולי בשבר של הלוח השני). |
| 3:15 | `{d}GIŠ.GIM.MAŠ-uš=ma=wa lē aki` | וגִּלְגָּמֶשׁ – אַל ימות!' | בראשית ב:יז | [equivalent] | `מוֹת תָּמוּת` (בראשית ב:יז) – גזר דין המוות בפי האל; מוטיב משותף, באפראט בלבד. גזרת אנליל מבדילה בין הרעים: האדם שנוצר בבר ימות, והמלך שני־שלישיו אל – יחיה (עוד). |
| 3:17 | `UL=war=an=kan tuetaza memiyanaz kwenni[r] {GU4}ALÛ-un {d}ḫuwawainn=a` | 'הלא בדברך הרגו את השור ואת חוּוָוָה? | – | [equivalent] | באפוס הבבלי שמש הוא פטרון המסע אל היער (SB III–V), ובשמו יצאו הגיבורים. |
| 3:18 | `kinun=ma :niwall[iš] {d}EN.KI.DU4-uš aki` | ועתה – אנקידו החף ימות?' | בראשית יח:כג | [equivalent] | `הַאַף תִּסְפֶּה צַדִּיק עִם רָשָׁע` (בראשית יח:כג) – אל המוחה בפני אל על דינו של מי שאינו אשם; מוטיב משותף, באפראט בלבד (`צדיק` שמור בשורות המיתוסים). |
| 3:21 | `{d}E[N.KI.DU4-uš] ANA {d}GIŠ.GIM.MAŠ peran ⸢katta⸣ šešta` | ו[אנקידו] שכב (חולה) לפני גִּלְגָּמֶשׁ, | – | [equivalent] | האפוס התקני: אנקידו שוכב חולה שנים־עשר יום (SB VII 252–253). |
| 3:26 | `nu=[wa=z]a=kan ANA GIDIM[{ḪI.A}] ēšḫaḫari` | ובין הָאִטִּים אשב, | דברים יח:יא | [equivalent] | `וְשֹׁאֵל אוֹב וְיִדְּעֹנִי וְדֹרֵשׁ אֶל הַמֵּתִים` (דברים יח:יא) – כבאפוס (*eṭemmu* `אִט`, renderings §4). |
| 3:27 | `{GIŠ}kattaluzz[i]=ya=wa=kan ŠA GID[IM{ḪI.A} šarraḫḫi]` | ואת מפתן [הָאִטִּים אחצה], | – | [equivalent] | האפוס התקני: חלום אנקידו על "בית העפר", הבית "אשר הנכנס אליו אינו יוצא" (SB VII 184–188). |
| 3:42 | `[ ... ] INA ḪUR.SAG arḫa piddāet` | […] אל ההר נס, | – | [equivalent] | האפוס התקני: `במרירות בוכה, ומשוטט בשדה` (SB IX 2) – בבבלית "שדה", בחתית "הר". |
| 3:52 | `DUMU.LÚ.U19.[LU UL šakki?]` | בני האדם [אינם יודעים?]. | – | [equivalent] | האפוס התקני: `ואין איש, מימי עד, אשר יעבור את הים` (SB X 80). |
| 3:53 | `[nu MÁŠ.ANŠ]E{ḪI.A} kwenneškezzi` | [ואת הבהמות] הוא הורג תמיד, | – | [equivalent] | האפוס התקני: גילגמש צד חיות ולובש את עורן (SB X 6, 260–266) – הבהמות שגדלו את אנקידו (1:32) נהרגות עכשיו בידי רעו. |
| 3:56 | `[n]u=⸢kan⸣ 2 UR.MAḪ{MEŠ} :pittanumm[inzi? ... ]` | [ו]שני אריות *מבהילים?* […] | – | [equivalent] | האפוס התקני: `אל מבואות ההרים הגעתי בלילה, / אריות ראיתי, ופחדתי אני` (SB IX 8–9) – UR.MAḪ = *nēšu* `אריה`. |
| 3:77 | `[ ... ]{d}30-aš UR.SAG-iš [ ... ]` | […] אֵל הַיָּרֵחַ, הגבור, […] | – | [equivalent] | האפוס התקני: `נשאתי את ראשי, את סִין מברך` (SB IX 10) – גילגמש מתפלל אל סין, אל הירח, כשהוא רואה אריות. |
| 3:78 | `⸢zik=ma⸣=wa=kan apūš kwiēš 2 U[R.MAḪ{MEŠ}] kwinnešta` | "ואתה – את שני [האריות] האלה אשר הרגת, | – | [equivalent] | האפוס התקני: `מחץ [בלביאים], הרג, פורר` (SB IX 18). |
| 3:85 | `⸢nu=kan⸣ {f}ziduriš {MUNUS}KÚRUN.NA AN[A {GIŠ}GU.ZA] ē[š]zi?` | ושִׁידוּרִי, בעלת־המסבאה, יושבת על [כסא], | – | [equivalent] | האפוס התקני: `שִׁידוּרִי – בַּעֲלַת־הַמִּסְבָּאָה, אשר בשפלת הים יושבת` (SB X 1) – מלה במלה. |
| 3:86 | `nu=šš[i N]AMSĪTUM ⸢ŠA⸣ GUŠKI[N ... ]` | ולה [גיגית] של זהב […] | – | [equivalent] | האפוס התקני: `היו לה כַּנִּים, היו לה … […]` (SB X 3) – כלי המסבאה של שידורי. |
| 3:88 | `[z]ig=⸢an⸣ zāši` | "אתה – אותו עובר." | – | [equivalent] | האפוס התקני: `מלבד זה, גילגמש – (גם אם) עברת את הים, / אל מי המוות כשתגיע – מה תעשה?` (SB X 85–86). |
| 3:89 | `ANA {m}UR[ŠANABI ... ]` | אל [אוּרְשַׁנַבִּי …] | – | [equivalent] | האפוס התקני: `גילגמש, יש (שם) אוּרְשַׁנַבִּי, המלח של אותנפישתי` (SB X 87). |
| 3:92 | `ammuk=wa apūš 2 ALAM NA4 [z]āinušker` | "אותי – שני תוארי האבן האלה העבירו תמיד." | – | [equivalent] | האפוס התקני: `ואנשי האבן עמו` (SB X 88), `אשר לא חרדו ממי המוות` (SB X 103) – "אנשי האבן" (*šūt abnī*) של הבבלית הם בחתית "תוארי אבן" (ALAM NA₄), פסלים חיים. |
| 3:104 | `nu=wa aggannaš wetan[aš] kuwapi ārti` | ואל מי המוות – כאשר תגיע, | – | [equivalent] | האפוס התקני: `בתווך – מי המוות, אשר את פניה חוסמים` (SB X 84), `אל מי המוות כשתגיע – מה תעשה?` (SB X 86) – "מי המוות" גם בחתית (*aggannaš wetenaš*). |
| 3:106 | `ḪAṢṢINNU=wa ŠU-za ēp` | תפוס את הגרזן בידך, | – | [equivalent] | האפוס התקני: `שא, גילגמש, גרזן ב[זרועך]` (SB X 159). |
| 3:107 | `nu=wa=kan [:winala] ŠA 40 gipešnaš našma ŠA 50 g[ipešnaš kar(a)š]` | ו[מוטות] של ארבעים אמות או של חמישים [אמות כרות]!" | – | [divergence] | האפוס התקני: `רד אל היער, ומוטות בני חמישה קנים [שלוש מאות כרות?]` (SB X 160) – שם חמישה קנים (שישים אמה) ושלוש מאות מוטות; כאן ארבעים או חמישים "אמה", בלי מספר מוטות. |
| 3:108 | `nu GIM-an {d}GIŠ.GIM.MAŠ-uš ŠA {m}URŠAN[ABI] memiyan IŠME` | וכאשר גִּלְגָּמֶשׁ את דבר אוּרְשַׁנַבִּי שמע, | – | [equivalent] | האפוס התקני: `גילגמש – [כשמעו] את זאת, / נשא גרזן בזרועו` (SB X 163–164) – הפקודה והביצוע. |
| 3:111 | `n=at :šappatta :pi[š- ... ]` | ואותם קילף ו[…] | – | [equivalent] | האפוס התקני: `קיצע, ושׂם דד` (SB X 167). |
| 3:113 | `n=at=kan 2-eluš=pat? ANA {GIŠ}MÁ šarā [pāer?] {d}GIŠ.GIM.MAŠ-uš {m}URŠANABI-išš=a` | ושניהם בלבד [עלו] על הספינה – גִּלְגָּמֶשׁ ואוּרְשַׁנַבִּי. | – | [equivalent] | האפוס התקני: `גילגמש ואורשנבי רכבו על [הספינה]` (SB X 169). |
| 3:116 | `Š[A KASKA]L=a=šmaš=kan? ITU 1{KAM} UD 15{KAM} ša-[ ... ]` | ו[של הדרך] – להם חודש אחד וחמישה־עשר יום … | – | [equivalent] | האפוס התקני: `מהלך ירח וחצי – ביום השלישי הלכו […]` (SB X 171) – "ירח וחצי" = חודש וחמישה־עשר יום: המעבד פירש את המספר. |
| 6:10 | `[ ... ] peran ārri` | […] לפני (העיר) שוטף. | – | [equivalent] | האפוס התקני: אוּתְנַפִּשְׁתִּי מצווה לרחוץ את גילגמש ולהלבישו (SB XI 250–270). |
| 6:18 | `[ ... ] ēt eku` | "[…] אכול, שתה! | קהלת ט:ז | [equivalent] | `לֵךְ אֱכֹל בְּשִׂמְחָה לַחְמֶךָ` (קהלת ט:ז) – האכילה והשתייה כמנוחה; מוטיב משותף, באפראט בלבד. |
| 6:52 | `[ ... ] {d}GIŠ.GIM.MAŠ-ya TI-tar EGIR-[pa ... ]` | […] וגם לגִּלְגָּמֶשׁ – חיים בחזרה […], | – | [divergence] | האפוס התקני: אוּתְנַפִּשְׁתִּי אינו נותן לגילגמש חיים, אלא מגלה לו את "העשב" (SB XI 295–300); כאן, בשבר, "חיים" ניתנים זה לזה. |
| 8:11 | `nu=wa {GU4}ALÛ-u[š ... ]` | "והשור […] | – | [equivalent] | שור השמים (SB VI) – השבר אולי מן הפרק החסר על השור. |
| 11:1 | `[ ... {d}U]TU AN-E 1-aš zā-[ ... ]` | […] אֵל הַשֶּׁמֶשׁ של השמים – אחד עובר […] | – | [equivalent] | האפוס התקני: `עובר הים – שַׁמַשׁ הגיבור; / בלעדי שַׁמַשׁ – עובר הים, מי?` (SB X 81–82). |
| 12:5 | `KASKAL-an=wa kwin [ ... ]` | "את הדרך אשר […] | – | [equivalent] | האפוס התקני: `עתה, אורשנבי, מהו [אורח אותנפישתי]?` (SB X 150) – השאלה על הדרך אל אוּתְנַפִּשְׁתִּי. |
| 14:5 | `ḫašer=mu=za kwed[ani UD-ti? ... ]` | "[ביום] אשר ילדו אותי […] | – | [equivalent] | האפוס התקני: `גילגמש – מיום שנולד נקרא שמו` (SB I 47). |
| 16:2 | `⸢nu=šmaš⸣ [ ... dankuwai? ta]knī arnumi` | ואתכם […] אל [האדמה האפלה?] אַגִּיעַ." | – | [equivalent] | עותק אחר של איום חוּוָוָה: `ואתכם [מטה] אל האדמה האפלה אַגִּיעַ!` (1:176). |
