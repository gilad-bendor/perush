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

## Progress
- 2026-11-14: base secured (19 HPM editions), key GI added, renderings M4 fixed, brief written (the coordinator).
- 2026-11-14: GI 1:1–1:221 and 2:1–2:35 drafted (256 clauses; CTH 341.III.1–2), `translation--intro-GI.rtl.md` written; verify 0 problems, check_bible_quotes 0 (Round 8 run 5, translator 3, part 1 of 2). Next: 3:1–19:7.
