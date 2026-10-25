# Project 8: the Hittite Laws (CTH 291–292)

## Scope
All of the Hittite Laws, in three units (`../../tools/hittite_tools.py` keys):
- **HL1** – the first tablet, *takku LÚ-aš* "If a man", HL 1–100, in its **standard 13th-century text** (CHiL CTH 291.2,
  571 clauses; the sections are CHiL's, titled with Hoffner's HL numbers; CHiL has no 49 here: it is in PT § XLI). The
  **Old Hittite version** (CHiL 291.1, KBo 6.2 = KBo 22.62+, 16th c., 491 clauses) and the deviating versions 291.3–5 are
  witnesses: `data HL1` prints them at each §, and the apparatus notes every difference that changes the meaning (the
  tariffs, the penalties, the formulas): the OS wording is the oldest form of the law.
- **HLPT** – the **late parallel text** KBo 6.4 (CHiL CTH 291.PT, 206 clauses, §§ I–XLI; scribe Ḫanikkuili, 13th c.), a
  reworked version of HL 1–49 with its own § numbers (I–XLI, "cfr. HL n"). It holds § IV, the corpse found in the open
  field and the distance measured to the nearest town (↔ Deut 21:1–9). Translated as its own text; its Hebrew follows HL1's
  wherever the Hittite is the same.
- **HL2** – the second tablet, *takku GIŠ.GEŠTIN-aš* "If a vine", HL 101–200 (with the a/b sub-paragraphs): **our
  composite** from TLHdig's 37 manuscripts (`composite-HL2.tsv`; KBo 6.26, KBo 6.10+, 6.11, 6.12, 6.13+, KBo 25.85+, KUB
  29.23+, 29.33+ …), labels `<§>.<n>`, with the lead manuscript of each line and its duplicates, every restoration from a
  duplicate named in the `note` column.

## Base
- CHiL: `../../sources/HPM/CHiL--CTH-291.*` (HPM, CC BY-SA 4.0; Italian translation = rank 3).
- TLHdig 0.3: `../../sources/TLHdig/CTH-292/` (CC BY 4.0; German word glosses; no translation).
- Rank 3 / 5 (consult after drafting): CHiL's Italian (HL1, HLPT); for HL2 none open – Hrozný 1922 (*Code hittite*, PD,
  archive.org `codehittiteprove01hroz`, French; rank 5, old readings) and Zimmern & Friedrich 1922 (PD, German); Hoffner
  1997 (©, records only); the Chicago Hittite Dictionary per word (free volumes L–N, P, Š; quotes many laws with
  translation).

## Line numbering
HL1 / HLPT: CHiL's clause numbers ("kola"), one Hebrew line per clause; the § in the `## ` heading (`## §5 – …`; HLPT
`## § IV (cfr. HL 6) – …`). HL2: `<§>.<n>`, one Hebrew line per composite line (= a line of the lead manuscript, or a
clause where the composite joins duplicates: the TSV says).

## Bible (look for; the parallels index is the product)
Exod 21:12–14 (HL 1–4: killing; "his hand errs" ↔ 21:13), 21:18–19 (HL 10: the injurer pays the physician), 21:22–25 (HL
17–18: a miscarriage, by month), 21:26–27 (HL 7–8, 11–16: blinding, a tooth, limbs: compensation, not talion), 21:28–36
(HL 70–79?, the animals), 21:37–22:3 (HL 57–70, 93–97: theft of animals, burglary), 22:4–5 (HL 106–107: fire, grazing),
22:6–14 (HL 75–77?: deposit and hire), 22:15–16 (HL 28–35: betrothal, bride-price, elopement), 22:17 (HL 44b, 111:
sorcery); Lev 18 and 20 (HL 187–200: incest and bestiality ranked: *ḫurkel* / permitted); Lev 19:19 (HL 166–167: sowing
seed on seed); Deut 21:1–9 (HL 6; PT § IV); Deut 22:22–27 (HL 197–198: in the mountains / in the house); Deut 25:5–10,
Gen 38 (HL 193: the brother, then the father-in-law); Deut 19:14 (HL 168–169: the boundary); the code that revises itself
(*karū … kinun=a*, HL 7, 9, 19, 25, 51, 54–59, 63, 67–69, 81, 91, 92, 94, 101, 119, 121–129 …): a law that admits change.

## Open decisions
(the translator's Proposals and the coordinator's decisions go here)

## Progress
- 2026-10-24: base secured (CHiL, TLHdig), tool, renderings (`../renderings.md` §7, §H2–§H9), brief – before drafting.

## Proposals

### Part 1 (HL1 1–145)
Drafted 2026-10-25: `annotated-HL1.rtl.md`, clauses 1–145 (HL §1–§27, CHiL sections 1–28), with פירוק, נוסחים (291.1, 291.3–5
at every §), תרגומים (CHiL, read after drafting), הקבלה, הערות. `verify HL1`: no errors in 1–145 (see the tool point
below for the one reported problem); `check_bible_quotes.py`: 0 problems; `selftest`: 0 failures.

**New renderings fixed (Hittite lemma → Hebrew, first clause).** All grepped with `grep --all` / `harmonize_survey.py heb`.
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *šullatar* (abl. *šullannaz*) "quarrel" | `במחלוקת` | 1 | `ריב`/`מריבה` avoided (Exod 21:18 `יְרִיבֻן`; the law corpus rejected `ריב` for MAL *ṣāltu*); `קטטה` = LH *risbatum*, `מדון` = MAL *ṣāltu*, `סכסוך` = EST *mušamḫiṣūtu*, `תגרה` = Gilg. *tuquntu*. **CHiL reads "con intenzione"**: a crux (recorded at 1). |
| *arnu-* "make arrive, bring, deliver" | `יַגִּיעַ` (always vocalized) | 2 | the causative of *ar-* "arrive", literal; `הוביל` is wabālu's cognate (EST), `הוליך` taken for *peḫute-*, `הביא` for *uwate-*. Used for the corpse (2), the merchant (28), the forfeited house (86). Open: `ימציא` would read more smoothly. |
| *peḫute-* "lead away, take there" | `הוליך` | 84 | (LE has `יוליך` for Akk. *redû*: a cross-language common verb, no cognate) |
| *uwate-* "bring (here)"; *EGIR-pa uwate-* | `הביא`; `הביא בחזרה` | 93; 103 | `שוב`/`השיב` avoided (reserved in the Akkadian corpora) |
| *peda-* "carry (there)" | `נשא` (`תישא`) | 139 | the H4 gate's word |
| *LÚ DAM.GÀR* and *unattalla-* "merchant" | `תַּגָּר` (vocalized at first occurrence) | 21, 28 | LH *tamkārum* = `תגר` (F41); DAM.GÀR is read *tamkāru*; *unattalla-* is probably the word DAM.GÀR writes, and 28 refers back to the merchant of 21, so one Hebrew. Split (`סוחר` for *unattalla-*) if the coordinator prefers. |
| *āššu-* "goods" | `רכוש` | 26 | (`טוב` avoided) |
| *antuḫša-* (LÚ.U₁₉.LU, UN) | `אדם` | 29 | as §7.1 |
| *taki-* "other"; *URU* "town" | `אחרת`; `עיר` | 29 | |
| *arḫa-* "boundary, territory" | `גבול` | 30 | |
| *gipeššar* "ell" | `אַמָּה` (vocalized; ≠ GÉME `אָמָה`) | 31 | Gilg. *ammatu* = `אמה`; lexmap shows one unvocalized string for two words: the vowels separate them |
| *karšš-* "cut off" | `חתך` (`יחתוך`) | 31 | CHiL "circoscriverà" |
| *dā-* "take"; iter. *dašker* | `לקח` (`ייקח`); `היו לוקחים` | 32; 45 | |
| *-za* (reflexive) | `לעצמו` where the sense allows; untranslated with *arnu-* (28) and with *iwaru … pēdai* (139) | 32 | |
| *dašuwaḫḫ-* "blind" | `עיוור` (`יעוור`) | 33 | |
| *lak-* "knock out (a tooth), make fall" | `הפיל` (`יפיל`) | 34 | [equivalent] Exod 21:27 `יַפִּיל` – the natural Hebrew and the real sense (CHiL "fa cadere"); the echo is real, noted at 34/39. MAL uses `הפיל` for *ṣalû* Š (miscarriage); the Hittite miscarriage verb is *pešš-* `השליך`, so no clash inside HL. |
| *ZU₉* "tooth" | `שן` (`שִׁנּוֹ` vocalized) | 34 | |
| *pai-* iter. pret. *pešker* | `היו נותנים` | 35 | as §7.1 |
| *ḫunink-* "injure, wound"; ptcp. *ḫuninkant-* | `פצע` (`יפצע`); `הפצוע` | 42; 44 | `חבל` is LH *ḫabālu*'s; [equivalent] Exod 21:25 `פֶּצַע`. CHiL "colpire" for both *ḫunink-* and *walḫ-*. |
| *pešš-* "throw (away)" | `השליך` | 46 | the king "threw away" the palace's share (46, 127); "throws out her womb" (74, 80) |
| *ištarnink-* "make sick" | `הֶחֱלָה` (`וְיַחֲלֶה`, vocalized) | 49 | |
| *šaktai-* "provide sick-maintenance" | `טיפל` (`יטפל`) | 50 | the gloss "kompensieren(?)" is wrong (see gates) |
| *pedan-* "place" | `מקום` (`במקומו`) | 51 | |
| *aniya-* iter. *anneškezzi* "work" | `עבד` (`יעבוד`) | 52 | |
| *kuitman*; *mān* (temporal) | `עד אשר`; `כאשר` | 53; 54 | *mān* conditional = `אם` (27), as §7.1 |
| SIG₅ (*lazziya-*) "recover" | `החלים` (`יחלים`) | 53 | = Sum. *sa₆*, UN `החלים` (d011) |
| *LÚ A.ZU* "physician"; *kuššan-* "wage, fee" | `רופא`; `שְׂכַר` (vocalized) | 56 | LH *asû* = `רופא`; *kuššan-* again in HL 24 (120–121) |
| *duwarna-* "break" | `שבר` (`ישבור`) | 57 | CHiL "torce" |
| *wak-* "bite (off)" | `נשך` (`ינשוך`) | 63 | as LE *našāku* (§42: the same 1-mina tariff) |
| *KIR₁₄* "nose"; *ištaman-* / GEŠTU "ear"; *GÌR* "foot" | `אף`; `אוזן`; `רגל` | 63, 69, 57 | |
| *iškalla-* "slit, tear" | `קרע` (`יקרע`) | 69 | CHiL "mutila" |
| *šarḫuwant-* "belly; foetus" | `בטן` (`את בטנה`) | 74 | literal; CHiL "il feto" |
| *ITU n{KAM}* | `החודש ה־n` (`החודש העשירי`) | 75 | |
| *taya-* | `יגנוב` | 83 | F9 (see formulas) |
| *išḫa-* "master" | `אדון` (`אדוניו`) | 85 | §5 *bēlum* of persons |
| *kanešš-* "recognize" | `הכיר` (`יכיר`) | 85 | |
| *luyumna-* / *luwili-* "Luwian" | `לוּוִי` (always vocalized: "Levi", "escort") | 97 | add to §H6? |
| *ḫuwai-* "run, flee" | `ברח` (`יברח`) | 102 | (law corpus *ḫalāqu* = `נמלט`) |
| *ēpp-* "seize" | `תפס` (`יתפוס`) | 104 | |
| *manninkuwan* "near" | `בקרבת מקום` | 104 | |
| *E.SIR* "shoes" | `נעליים` | 105 | = Sum. *e-sir₂* (Gilg. XII, GEN) |
| *kez* / *edi* + ÍD "this / that side of the river" | `מצד זה של הנהר` / `מן הצד ההוא של הנהר` | 106, 108 | `מעבר` avoided (the `עבר` reservation) |
| *pā(i)-* "go" | `הלך` (`ילך`) | 111 | |
| *kurur-* "enmity" (*kururi KUR-e*) | `ארץ אויב` | 115 | the H4 gate's word |
| *wemiya-* "find"; *ḫašša-* "hearth" | `מצא`; `מוקד` | 119 | GEN has `*מוקד*` for Sum. *niĝ₂-tab* |
| *ÚTUL* "pot"; *luli-* "pond, basin" | `קדרה`; `בריכה` | 122 | ÚTUL = Sum. *utul₂* `קדרה` (proverbs) |
| *paprešš-* "become impure" | `ייטמא` | 122 | §7.1 `נטמא`; see gates |
| *iwaru-* "dowry" | `מַתָּן` (`מַתָּנָהּ`, always vocalized: "gift") | 139 | as §7.1 |
| *apiya* "there"; *warnu-* "burn" | `שם`; `שרף` (`ישרפו`) | 140, 141 | Maqlû gates `שׂרף` to *šarāpu* in its own corpus only |
| *atta-* "father"; *DUMU.MEŠ* | `אב`; `בנים` | 143, 144 | |

**Pre-set rows of §7 / §H checked against the drafted lines.**
- §7.1 rows used as set: *takku*, *kuiški*, *kuen-*, *walḫ-*, *n=aš aki*, *QĀSSU waštai*, *šarnink-* / *šarnikzel*, *pai-* / *pešker*, *karū … kinun=a*, *parna=šše=a šuwāezzi*, *SAG.DU*, *ELLUM*, *ARAD/GÉME*, *LÚ/MUNUS/antuḫša-*, *KÙ.BABBAR/GÍN/MA.NA*, *LUGAL*, *É.GAL*, *iwaru*.
- F6 is written **twice in HL 3–4**: *keššar=šiš waštai* (11, the Hittite word for "hand") and *QA-AS-SÚ waštai* (17). Both = `ידו חוטאת`. The F6 regex does not match *keššar=šiš waštai*: add `keššar=šiš waštai` (and `kiššar`).
- F9 (`t[aā]y[ae]zzi`) misses the spelling *dāyezzi* (87, 92, 97): widen to `[td][aā]y[ae]zzi`.
- F5, F2, F3, F4, F8, F1 worked as set. Punctuation of the F5 / F6 pair: `וימות –` / `ידו חוטאת –` (the selftest's `ידו חוטאת:` is only a test).
- §7.1 *parkunu- / papr-*: the gate list has `יטמא` but not the plene `ייטמא` (122, 124, 128) nor `שייטמא`; add them (the line passes now only because the gate does not see it).

**Gates that are wrong (false licences, seen in the data of 1–145).** The licences match inside other words or German glosses:
`ארז` (`erin|eren`) is licensed by "kompens**ieren**" (26, 50); `פיצה` by the gloss "kompensieren(?)" of *šaktai-* (50);
`שלח` (`tarn`) by *iš**tarn**ikzi* (49); `נשא` (`ped`) by *pēdi* "place" (51); `מחנה` (`karaš`) by *karaššiyēzzi* (31);
`שכב` (`šaš`) by *attaš=**šaš**=a* (143). Suggest anchoring each licence to the lemma (`\bgiš\.erin`, `\btarna-`,
`\bpeda-\b`, `karaš\b`, `\bšeš-`). None of these words is used in 1–145, so no line depends on the false licence.

**Tool / base point.** `verify HL1` reports "entries out of the base's order" (1 problem) for every draft: the base list
ends with the colophons labelled `1`, `1`, `2`, `3` after 567 (CHiL's labels for the tablet's end lines), so the label set
has duplicates and the order check can never pass. The colophon rows need unique labels (e.g. `col.1`–`col.4`) or the
check must skip them. Not fixable in the annotated file.

**Cruxes (all recorded in the apparatus).**
- *šullannaz* (1, 5): "in a quarrel" (Hoffner, CHD) vs CHiL "con intenzione" – decides whether HL 1–4 distinguish intent
  from accident like Exod 21:12–14, or quarrel from a blow that ended in death.
- *apūn arnuzi* (2 etc.): "he shall bring him (the corpse, for burial)" vs "make restitution for him" vs CHiL "take care of
  him"; rendered literally (`יַגִּיעַ`).
- *parna=šše=a šuwāezzi*: subject = the culprit (Hoffner) or the victim's side (CHiL "la vittima cercherà il risarcimento");
  the Hebrew keeps the Hittite's open subject.
- HL 5, 28: whether the 100 minas also apply "in the land of Ḫatti"; *=pat* with the merchant (ours) or the subject (CHiL).
- HL 20, 95: who pays the 12 shekels to whom (owner → returner, or thief → owner).
- HL 27, 139: who carries the dowry in (291.3 `iwaru=šši … pēdāi` suggests the bride: `תישא`).
- HL 26b–c: the standard text is broken; the content is given from 291.3–5 in the נוסחים.

**Findings for the parallels index (selection).** Exod 21:13 `וְהָאֱלֹהִים אִנָּה לְיָדוֹ` ↔ "his hand errs" (11, 17)
[equivalent]: the hand as the agent in both, the deity only in the Torah; Exod 21:12, 14 / Num 35:31 [divergence]
(persons, not death; no asylum); Exod 21:18–19 ↔ HL 10 [equivalent]: the substitute worker = `שִׁבְתּוֹ יִתֵּן`, the physician's
fee = `וְרַפֹּא יְרַפֵּא`; Exod 21:22 ↔ HL 17–18 [divergence]: a tariff by month and class vs the husband's claim before
`פְּלִלִים` (291.3 has a flat rate); Exod 21:24–27, Lev 24:19–20 ↔ HL 7–16 [divergence]: silver for every limb; Exod 21:27
`יַפִּיל` ↔ *lak-* [equivalent]; Exod 21:16, Deut 24:7 ↔ HL 19–21 [divergence]: the kidnapper loses his house (19a) or pays
heads (19b), and the law grades by nation (Ḫatti / Luwiya); Deut 23:16–17 ↔ HL 20–24 [divergence, a reversal]: the
returner of a runaway is paid, the harborer pays wages; Deut 21:1–3 ↔ HL 6 [divergence]: land, not a rite; the measuring
appears only in HLPT § IV; Lev 11:33, 36 ↔ HL 25 [divergence]: defilement of a vessel or pond as damage to property;
Deut 24:1 ↔ HL 26 [divergence]: the woman may "refuse" the man (291.5); Amos 2:6 `בַּעֲבוּר נַעֲלָיִם` ↔ HL 22 (shoes as
the finder's fee). The code that revises itself (*karū … kinun=a*): HL 7, 9, 19b, 25 in 1–145, every time halving the
former tariff, and HL 9 / 25 name the king's act (`ועתה המלך … השליך`) – the OS already has the same revisions.

**Shared words HLPT will need** (HLPT § I–XLI reworks HL 1–49): all the formulas above; *šullatar* `במחלוקת`, *arnu-*
`יַגִּיעַ`, *peḫute-* `הוליך`, *uwate-* `הביא`, *taya-* `יגנוב`, *ḫunink-* `פצע` / `הפצוע`, *duwarna-* `שבר`, *wak-* `נשך`,
*iškalla-* `קרע`, *lak-* `הפיל`, *dašuwaḫḫ-* `עיוור`, *pešš-* `השליך` (*šarḫuwant-* `בטן`), *kanešš-* `הכיר`, *išḫa-*
`אדון`, *ḫuwai-* `ברח`, *ēpp-* `תפס`, *E.SIR* `נעליים`, *kuššan-* `שְׂכַר`, *A.ZU* `רופא`, *ištarnink-* `וְיַחֲלֶה`, *šaktai-*
`טיפל`, SIG₅ `החלים`, *antuḫša-* `אדם`, *arḫa-* `גבול`, *gipeššar* `אַמָּה`, *karšš-* `חתך`, DAM.GÀR / *unattalla-* `תַּגָּר`,
*āššu-* `רכוש`, the numbers (2–10 plural `שקלים`, 11+ singular `שקל`; `מנה כסף`, `מאה מנה כסף`; `ראש אחד`, `שני ראשים`,
`שנים עשר ראש`). § IV of HLPT (the corpse in the field) is the place for the Deut 21:1–9 measuring.

### Part 2 (HL1 146–290)
Drafted 2026-10-25: clauses 146–290 (HL §28–§52; CHiL sections 29–54; HL 49 is not in this text, and HL 50 begins in a
gap). Base order kept: §35 (181–183) stands between §32 and §33 in ms. A, so the file has it there. `verify HL1`: 0
problems (one repeated-line difference, 180/186, justified in the entry: Hittite *=an* is common gender, "her" / "him");
`check_bible_quotes.py`: 0 problems. Placeholder `<!-- טרם תורגם: 291–col4 -->`.

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *tar- / te-* "say"; ptcp. *taranza* | `אמר`; `אמורה (לאיש)` | 146 | the betrothal "by word"; `אֹרָשָׂה` stays the Torah's |
| *pittenu-* "make run, elope with" | `הבריח` (`יבריח`) | 147 | causative of *pittai-*; ≠ *ḫuwai-* `ברח` |
| *kuššan* "when" (adv.) | `כאשר` | 148 | homograph of *kuššan-* "wage" |
| *ḫantezzi(ya)-* "first" | `הראשון` | 149 | |
| *kui- kui-* "whatever" | `כל אשר` | 149 | |
| *atta-*; *anna-* | `אב`; `אם` | 151 | |
| *mimma-* "refuse" | `מאן` (`ימאן`, `ימאנו`) | 154 | [equivalent] Exod 22:16 `אִם מָאֵן יְמָאֵן אָבִיהָ` |
| *tuḫš-* "cut off, separate" | `ניתק` (`וינתקו`) | 155 | kept apart from *ḫarp-* `נפרד` |
| *ḫamenk-* "bind" (betrothal) | `קשורה (לאיש)` | 156 | |
| *kušata* "bride-price" | `מֹהַר` (defective, always vocalized) | 157 | §7.1 |
| *piddai-* "render, pay (a due)" | `הגיש` (`יגיש`) | 157 | `יביא` = *uwate-*; `ימסור` = LH *šarāku* (the dowry verb) |
| *appezzi(ya)-* / *appezziyan* "later" | `לאחר מכן` | 158 | |
| *ḫulla-* "fight, oppose" | `התנגד` (`יתנגדו`) | 158 | `יערערו` = LH *baqāru* |
| *2-ŠU* "twice" | `פי שניים` | 160 | ↔ LH §160 `יכפיל וישיב` |
| *nāwi* "not yet" | `טרם` | 161 | |
| *šamen-* "pass by; forfeit" | `הפסיד` (`יפסיד`) | 164 | also needed in HL 48 (OS) |
| *šiela-* (meaning uncertain) | `*פנויים*` | 165 | crux; CHiL "soli" |
| *ar- anda* "come together" | `באו יחד` | 166 | |
| *DAM* "wife"; *ANA DAM-ŠU dā-* | `אשה`; `לקח לאשתו` | 167 | |
| *iya-* "do, make"; iter. *išša-* | `עשה` | 168 | both forms one Hebrew |
| *idalawešš-* "become bad" | `היו רעים` | 169 | |
| *naššu … našma* | `או ש… או ש…` | 169 | |
| *ḫarp-* (mp) "separate" | `נפרד` (`ייפרדו`) | 170 | |
| *šarra-* "divide"; *takšan* | `חלק` (`יחלקו`); `לשניים` | 171 | [equivalent] Exod 21:35 `וְחָצוּ` (`חצה` avoided) |
| *DUMU*, *DUMU.MEŠ*, *DUMU.NITA* | `בן`, `בנים` | 168 | |
| *DĪNU* + *QĀTAMMA=pat* | `דינם – כך ממש` | 175 | *QĀTAMMA=pat* = `כך ממש` (also 288) |
| *AGRIG* "steward"; *SIPA* "shepherd" | `סוכן`; `רועה` | 181 | = Sum. *aĝrig* (Gudea `סוכן`), *sipa* |
| *GÉME-iššaršš-* "become a slave woman" | `לאָמָה תיעשה` | 183 | |
| *parā tarna-* "let go, release" | `שלח החוצה` (`ישלח`) | 180 | gated `שלח`; [equivalent] Exod 21:26 `לַחָפְשִׁי יְשַׁלְּחֶנּוּ`. CHiL reads *=an* in 180 as the slave ("him"); we read the wife |
| *LÚ antiyant-* "in-marrying son-in-law" | `חתן־בית` | 185 | |
| *šardiya-* "helper, supporter" | `עוזר` | 188 | |
| *appanda* "after" | `אחרי` (`ואחריהם`) | 188 | |
| *kiš-* "become" | `נעשה` (`ייעשה`, `נעשית`) | 191 | |
| *UR.BAR.RA* "wolf" | `זאב` | 191 | = Sum. *ur-bar-ra* |
| *ḫanneššar* "lawsuit" | `דין` | 192 | §7.1 |
| *kartimmiya-* "be angry" | `זעם` (`יזעמו`) | 194 | |
| *ḫar(k)-* "have, hold" | `החזיק` (`יחזיק`) | 198 | |
| *ḫark-* "perish, be lost" | `אבד` (`יאבד`, `אבוד`) | 203 | homograph of *ḫar(k)-* "hold" |
| *šaḫḫan*; *luzzi* | `שַׁחְחַן`; `לוּצִּי` | 199; 258 | §7.1; first note at 199 |
| *arḫa* + *pešš-* "throw away" | `השליך הלאה` | 200 | |
| *dala-* "leave" | `הניח` (`יניח`) | 201 | |
| *ḫapparai-* "trade, sell"; *ḫappar* "deal" | `מכר` (`ימכור`); `מסחר` | 202; 279 | |
| *LÚ GIŠTUKUL*; *GIŠTUKUL* (the service) | `איש־הכלי`; `הכלי` | 203 | §7.1. So UNŪTU "implements" = `חפצים` (251), not `כלים` |
| *LÚ ILKI* | `אִישׁ־הַהֲלָךְ` (`הַהֲלָךְ` always vocalized: "the walker") | 204 | §7.1; [cognate via the Akkadogram] Ezra 7:24 `וַהֲלָךְ` |
| *tittiya-* "install, assign" (ptcp.) | `מוצב` | 204 | |
| *šiyattariya-* "have sealed/registered to oneself" | `רשם לעצמו` (`ירשום`) | 208 | `חתם` kept off (the Egyptian corpus's loanword) |
| *NAM.RA* "deportee" | `שבויים` | 214 | |
| *kuššaniya-* "hire" | `שכר` (`ישכור`) | 228 | the verb of *kuššan-*; `שָׂכָר` / `שְׂכַר` / `שְׂכָרוֹ` vocalized |
| *laḫḫa-* "campaign" | `מערכה` (`למערכה`) | 229 | `מסע` = LH *ḫarrānu* |
| *GU₄*; *KUN* "tail"; *BĒL GU₄* | `שור`; `זנב`; `בעל השור` | 237 | §5 *bēl* + noun |
| *zinu-* (caus.) / *zai-* "cross" | `העביר` / `עבר` | 237, 240 | Hesiod's precedent for crossing a river; `עבר` is not a Hittite reservation, but Akkadian *ebēru* has it: **check** |
| *šuwai-* "push, drive away" | `דחה` (`ידחה`) | 238 | ≠ *šuwaye-* "look" (F4); the CHiL gloss "(an)schauen" here is wrong |
| *paḫḫur* / IZI "fire" | `אש` | 243 | |
| *appa* "back, in return" | `בחזרה` | 245 | as *EGIR-pa* (103) |
| *parkunu-* "purify" | `טיהר` (`יטהר`) | 246 | gated |
| *kuptar* "remains"; *uktūri-* "cremation site" | `שיירים`; `מקומות השרֵפה` | 247 | CHiL "discarica" (crux) |
| *alwanzatar* | `כשפים` | 249 | gated |
| *DĪN LUGAL* | `דין המלך` | 250 | §7.1 |
| UNŪTU "implements, goods" | `חפצים` | 251 | |
| *wemiya-* | `מצא` | 251 | (§7.3) |
| *piyanai-* "reward" | `גמל` (`[לו] יגמול`) | 253 | wisdom corpus has `גמל` for *riābu*: cross-language, no cognate |
| *NÍ.ZU* "thief" | `גַּנָּב` (`לְגַנָּב`, vocalized) | 255 | §7.1 |
| *iwaru* "inheritance share" | `מַתָּן` (`כְּמַתָּן`; `אדון המַתָּן`) | 256 | §7.1; one Hebrew for the dowry (HL 27) and the inheritance share |
| *mekki-* "much"; *tepu-* "little" | `רב`; `מעט` | 257 | |
| *karp-* "lift; render (a duty)" | `הרים` (`ירים`) | 258 | literal; `נשא` is gated to *peda-* |
| *kulei* "fallow" | `בור` (`השדות הבורים`) | 262 | |
| *ark-* "divide off" | `הפריש` (`יפריש`) | 262 | CHiL "delimita" |
| *NÍG.BA* "gift" | `מַתַּת` (vocalized) | 265 | kept apart from *iwaru* `מַתָּן` |
| *BANŠUR*; *NINDA* | `שולחן`; `לחם` | 267 | = Gilg. *paššūru* `שולחן` |
| *waš-* "buy" | `קנה` (`יקנה`) | 269 | |
| *ḫippara-* | `חִפָּרָה` (transliterated, always vocalized: "dug") | 276 | add to §H2 / §H6? |
| *lē kuiški* | `אף אחד אל` | 277 | |
| *eya-* (tree) | `עץ־אֵיָה` | 281 | |
| *āšk-* "gate" | `שער` | 281 | |
| *UŠ.BAR* "weaver" | `אורג` | 283 | = Sum. *uš-bar* |
| *arawa-* and *ELLUM* **of a house** | `פטור` | 284, 286 | **proposal:** *ELLUM* of persons = `בן חורין`, of a house or land = `פטור` (= *arawa-*); the gate `בן חורין` is unaffected |
| *LÚ.MEŠ ḪA.LA* "men of the share"; *NIŠŪTU* "kin" | `אנשי־חלקו`; `קרוביו` | 285 | |
| *É.NA₄* "stone house"; *DUMU.LUGAL*; *BĒL ŠUPPATI* | `בית־האבן`; `בן־המלך`; `בעל *שֻׁפַּתִּי*` | 289 | *ŠUPPATI* transliterated; never `קדש` (the gate's licence `šupp` matches it: anchor the licence to *šuppi-*, `\bšuppi\|\bšuppa\b\|šuppešš`) |

**Pre-set rows checked.** §7.1 *kušata* `מֹהַר`, *iwaru* `מַתָּן`, *šaḫḫan* / *luzzi*, *LÚ GIŠTUKUL* / *LÚ ILKI*, *ḪA.LA*
`חלק`, *DĪNU*, *alwanzatar*, *parkunu-*, *ARAD/GÉME*, *ELLUM* – used as set (with the *ELLUM*-of-a-house proposal above).
F1–F8 worked; F9 did not fire in this range (no *taya-*).

**Gates and traps (new points).** `קדש`'s licence `šupp` matches *ŠUPPATI* (289): anchor it. Add `חפרה` (*ḫippara-*) and
`הלך` / `ההלך` (*ILKI*, read "the walker") to §H6 if you want them enforced; `מהר` (bride-price) is already a trap in the
law corpus guidelines ("quickly") – consider a §H6 row (licence `kušat`).

**Cruxes (in the apparatus).** HL 28 / 154: what the parents "refuse" (to give her, or to compensate: CHiL); HL 31 *šiela-*
(`*פנויים*`); HL 34 / 36 *parā tarna-*: whom "no one shall release" (the wife / the slave) and what it means (status kept,
or no leaving); HL 35 / 183: "in the third year she becomes a slave" (OS `I-NA MU 3{KAM}`) vs CHiL "enslaved for 3 years";
HL 37: who the "helpers" are (the family's pursuers, CHiL) and who dies; HL 38 / 194 the broken subject; HL 41 / 218 ms. A
writes LÚ ILKI where OS and 291.3 have the man of the tool (scribal error; translated as written); HL 44b *uktūri-*
(cremation site vs dump); HL 52 *ŠUPPATI*.

**Versions worth the index.** HL 32–33: the OS spells out the division of goods and children that the standard text
abbreviates to "their case is the same"; HL 42: the wages (12 / 6 shekels) are absent from the OS and present in 291.3 and
the standard text – a later addition; HL 43: 291.3 adds an explanatory clause; HL 44b: OS "throws (*pešš-*) them into
someone's house" (no field); HL 45: OS *āššu* "goods" for UNŪTU; HL 46: OS has no "and the šaḫḫan", 291.3 "fields of
šaḫḫan"; HL 47a: OS exempts from "šaḫḫan (and) luzzi", the standard text only from luzzi (a narrowing), and names the king
as the giver of the loaf; HL 50: the full OS list (Nerik, Arinna, Zippalanda, the eya-tree); HL 51: a privilege reduced
(*karū … kinun=a* applied to an exemption, not a tariff) – already in the OS.

**Parallels (selection).** Exod 22:15–16 ↔ HL 28–30 [equivalent / divergence]: the refusal of the father (`מָאֵן יְמָאֵן` ↔
*mimma-*), but the Hittite parents act together and the betrothal is by word, then by "binding" and bride-price; double
restitution ↔ LH §160; Exod 21:3–4 ↔ HL 31–36 [divergence]: in the Torah the slave's wife and children stay with the master,
in HL the free father takes the children, the mother one child, the house is halved; Exod 21:2 ↔ HL 35 [divergence,
reversal]: a free woman becomes a slave in the third year; Deut 19:6 ↔ HL 37 [divergence]: pursuit allowed, the abductor
"has become a wolf"; Exod 22:14 ↔ HL 42; Exod 21:28 `בַעַל הַשּׁוֹר` ↔ HL 43; Exod 21:23 ↔ HL 43, 44a [divergence]: a person
or a son handed over, not death; Exod 22:17 ↔ HL 44b [equivalent/divergence]: sorcery = moving the ritual's residue onto
another's property, judged by the king; Lev 14:7 ↔ HL 44b; Deut 22:1–3, Lev 5:22 ↔ HL 45 [equivalent; divergence: a finder's
reward, and the keeper "becomes a thief"]; 1 Sam 8:14; 1 Kgs 21:3; Lev 25:23 ↔ HL 39–48 (land held under service); 2 Sam 9:7,
13 ↔ HL 47a [equivalent]: fields granted with bread from the king's table; Gen 47:22, Ezra 7:24 (`וַהֲלָךְ`) ↔ HL 50–51
[equivalent]: cult personnel exempt from royal service.

**Shared words for HLPT** (its §§ XXIX–XLI rework HL 28–49): all of the above, especially *pittenu-* `הבריח`, *piddai-*
`הגיש`, *kušata* `מֹהַר`, *mimma-* `מאן`, *tuḫš-* `ניתק`, *šardiya-* `עוזר`, *ḫar(k)-* `החזיק` / *ḫark-* `אבד`, *karp-*
`הרים`, *šaḫḫan* / *luzzi*, `איש־הכלי` / `אִישׁ־הַהֲלָךְ`, *tittiya-* `מוצב`, *šiyattariya-* `רשם לעצמו`, *kuššaniya-* `שכר`,
*laḫḫa-* `מערכה`, *parkunu-* `טיהר`, *kuptar* `שיירים`, *alwanzatar* `כשפים`, UNŪTU `חפצים`, *piyanai-* `גמל`, *NÍG.BA*
`מַתַּת`, *waš-* `קנה`, *kulei* `בור`, *ark-* `הפריש`, *ḫippara-* `חִפָּרָה`, *ḫappar(ai)-* `מסחר` / `מכר`, *šamen-* `הפסיד`.

### Part 3 (HL1 291–439)
Drafted 2026-10-25: clauses 291–439 (HL §53–§76; CHiL sections 55–78). `verify HL1`: 0 problems (the one listed
repeated-line difference is still 180/186, accepted); `check_bible_quotes.py`: 0 problems. Placeholder
`<!-- טרם תורגם: 440–col4 -->`. The coordinator's two fixes (`וְהָאֵם`, `הַבּוּרִים`) kept.

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *takšan* "together" (+ *eš-*) | `יחד` (`יחד יהיו`) | 291 | in 171 *takšan šarra-* was `לשניים יחלקו` (CHiL "a metà"): a split by sense, flag; `יחד` also renders *anda* in 166 (`ויבואו יחד`) – lexmap shows it |
| *LÚ ḪA.LA-ŠU* | `איש־חלקו` | 291 | §7.4 `אנשי־חלקו` |
| *gimra-* / LÍL "open country" | `בָּר` (vocalized) | 294 | the ritual corpus's word (§H3 note) |
| *ṬUPPU* | `לוח` | 298 | §5 |
| *karuwili-* "former" | `ישן` (`השדות הישנים`) | 299 | not `לפנים` (F2, *karū*) |
| *QĀTU* "hand, share" | `יד` (`שתי ידות`) | 300 | [equivalent; coordinator: *qātu* is not the cognate of `יד` (= *idu*)] Gen 47:24 `וְאַרְבַּע הַיָּדֹת` |
| ÉRIN.MEŠ | `אנשי צבא` | 302 | Akk. *ṣābu* = `צָבָא` (§6.7) |
| MANDA, ŠALA, *karuḫali-* | `מַנְדָּה`, `שָׁלָה`, `קָרוּחָלִי` (transliterated) | 302 | |
| *LÚ GIŠPAN*; *NAGAR GIŠ-ṢÍ*; *KUŠ₇* | `קשתים`; `חרשי העץ`; `אנשי המרכבה` | 302 | `חרשי העץ` ↔ `חָרַשׁ עֵצִים` (ישעיהו מד:יג) |
| *uwa-* "come" | `בא` | 304 | |
| *aruwai-* "bow down" | `השתחווה` (`משתחווים`, narrative present) | 305 | |
| *tar-* iter. *taršk-* | `אומרים` | 306 | |
| *ara-* "peer, friend" | `חבר` (`חבריכם`) | 313 | |
| *apeniššan* "in that way" | `באותה דרך` | 314 | kept apart from *QĀTAMMA* `כך` |
| *tuliya-* "assembly" | `אספה` | 310 | |
| *tiya-* "step" (+ *anda*) | `נכנס` | 310 | |
| *BÀD* "fortification"; *KASKAL LUGAL* | `חומה`; `דרך המלך` | 315 | |
| *takš-* "join, build" | `בנה` (`לבנות`) | 315 | ms. C `pāuwanzi` "to go" |
| *tuḫš-* (of vineyards) | `לנתק` | 316 | kept to the §7.4 Hebrew of the verb; CHiL "potare" |
| *LÚ TIBIRA* "coppersmith" | `חרש־הנחושת` | 317 | `נפח` is Gilgameš's *nappāḫu* (cognate); ↔ 1 Kgs 7:14 `חֹרֵשׁ נְחֹשֶׁת` |
| *NU.GIŠKIRI₆* "gardener" | `גנן` | 318 | as LH F41 (*nukaribbum*) |
| *ḫumantiya=pat* | `כל אחד ואחד` | 318 | |
| *GU₄.MAḪ* | `פַּר` (vocalized) | 319 | §7.1 |
| *šawitišt-* "weanling" | `גָּמוּל` / `גְּמוּלִים` (always vocalized: "requital") | 320 | §7.1 |
| *iuga-* / MU.1; *taiuga-* / MU.2 | `בן שנה`; `בן שנתיים` | 322, 324 | |
| *ANŠE.KUR.RA.MAḪ* "stallion" | `סוס־הרבעה` | 330 | |
| *UDU* pl. | `צאן` (feminine numerals: `שלושים צאן`, `שש צאן`, as `וְאַרְבַּע צֹאן`) | 342 | |
| *UDU.U₈*; *UDU.NÍTA*; *UDU.ÁŠ.MUNUS.GÀR* | `רחל` (`רחלות`); `כבש`; `כבשה` (`כבשות`) | 344 | |
| *parkunu-* of an animal ("castrate") | `טיהר` (`ויטהר אותו`) | 347 | literal: the Hittite euphemism; CHiL "castra"; ↔ Lev 22:24 |
| *GU₄ APIN.LÁ*; *ANŠE.KUR.RA turiyawaš* | `שור חרישה`; `סוס רתמה` | 364, 369 | |
| *turiya-* "harness" | `רתם` (`ירתום`) | 410 | |
| *uttar* / *AWĀTU* "matter" | `דבר` (`דברו – כך ממש`) | 370, 392 | |
| *enant-* "tame"; *annanuḫḫa-* "trained" | `מבוית`; `מאולף` | 371, 372 | |
| *DÀRA.MAŠ* "stag" | `אַיָּל` (vocalized; ≠ UDU.A.LUM `אַיִל`) | 372 | add a §H6 row? |
| *UDU.KUR.RA* | `שה־הרים` | 373 | |
| *ÁB*; *ANŠE.KUR.RA.MUNUS.AL.LÁ* | `פרה`; `סוסה` | 378, 379 | |
| *ḫali-* "corral"; *ašawar* "pen" | `מכלאה`; `דיר` | 379, 382 | (Gilg. `דיר` is *supūru*: cross-language) |
| *ḫarp-* (mp) "stray (into another's pen)" | `נפרד אל` | 379 | §7.4 `נפרד`; CHiL "sconfina" |
| *šakuwaššar-* "intact, complete" | `בשלמותו` | 384 | |
| *2-ki* / *2-TAM* "double" | `כפליים` | 404 | kept apart from *2-ŠU* `פי שניים` |
| *ANŠE.GÌR.NUN.NA*; *ANŠE* | `פרד`; `חמור` | 400 | §7.1 |
| *unna-* "drive (here)" | `נהג` (`ינהג`) | 407 | |
| *utne* "land, countryside" | `ארץ` (`בארץ`) | 408 | |
| *ḫink-* "present, hand over" | `הציג` (`יציגו`) | 409 | |
| *LÚ.MEŠ ŠU.GI* | `זקנים` | 409 | gated, §7.1 |
| *tayazzil-* "theft" | `גנבה` | 420 | |
| *SI* "horn" | `קרן` | 421 | |
| SIG₅ (adj.) "good" | `משובח` | 423 | SIG₅ (verb) `החלים` (§10); `טוב` avoided |
| *karap-* "devour" | `טרף` (`יטרוף`) | 430 | [equivalent] Exod 22:12 |
| BA.ÚŠ "died" | `מת` | 434 | |
| *link-* "swear" | `נשבע` (`וְיִשָּׁבַע`, vocalized: "be sated") | 435 | gated; the gate list has `ישבע` but not the plene `יישבע` |
| *appatariya-* "impound, commandeer" | `עיכב` (`יעכב`) | 436 | CHiL "requisisce" |

**Formulas and gates.** F1–F9 fired as set. Points: the `שבועה` gate should list `יישבע` / `ויישבע` (plene); the
`לפנים` licence `früher` matches the gloss of *karuwili-* (299: "früherer") – harmless (the line has no `לפנים`), but anchor
it if you want; `אַיָּל` vs `אַיִל` (DÀRA.MAŠ / UDU.A.LUM) and `גָּמוּל` (weanling) vs `גמול` (requital, *piyanai-* `יגמול`)
could be §H6 traps.

**Cruxes (in the apparatus).** 294 *gimraš=šaš* "of their open land" (CHiL "of his land"); 302 MANDA, ŠALA, *karuḫali-*;
315–316 the syntax of HL 56 (a list of works no one is exempt from – CHiL) and *tuḫš-* of vines (prune or harvest); 347
*parkunu-* = castrate (rendered literally); 374 MÁŠ.GAL! (the editors' emendation; the OS has the plough-ox as the
measure); 379 / 382 *ḫarp-*; 419 *ark-* (CHiL "locks up"; we keep `יפריש`); 438 *apūn arnuzzi* (CHiL "keeps it");
439 *kuššan-* "its hire" (CHiL "its value").

**The numbers (Hittite "now" / "formerly" ↔ the Torah), for the index.** Bull 15 / 30 (5 two-year-olds, 5 yearlings, 5
weanlings) ↔ Exod 21:37 five cattle for an ox; stallion 15 / 30; ram 15 / 30 sheep (5 ewes, 5 rams, 5 lambs) ↔ four sheep
for a sheep (also 2 Sam 12:6 `אַרְבַּעְתָּיִם`); plough-ox 10 / 15; harness horse = plough-ox; cow 6 / 12; mare = cow; ewe or
ram 6 / 12; a stolen animal found alive: returned + double (HL 70) ↔ Exod 22:3 `חַיִּים שְׁנַיִם יְשַׁלֵּם`; castration 7
(about half the theft tariff) ↔ Lev 22:24; an ox dead in another's field: 2 (HL 72) ↔ Exod 21:34; horn or leg broken:
exchange for a good ox, or keep it + 2 shekels (HL 74) ↔ Exod 21:36 `שׁוֹר תַּחַת הַשּׁוֹר`. Every tariff of HL 57–69 that
has a "formerly" is halved (only the plough-ox by a third), and the OS already has the reduced tariffs.

**Other parallels (selection).** Gen 47:24 (`יָדֹת`) ↔ HL 53; 1 Kgs 5:27, 12:4 ↔ HL 54–55 (forced labour; subjects petition
the king; here the king's answer is "do as your fellows"); 1 Kgs 7:14 ↔ HL 56; Deut 22:2 ↔ HL 66, 71 [equivalent: the
finder keeps the animal until the owner claims it; divergence: a public declaration at the king's gate or before the
elders, and the finder may harness it]; Exod 23:4 ↔ HL 71; Exod 22:9–13 ↔ HL 75 [equivalent, the closest structural match
in this part: a borrowed or hired animal dies, is devoured or lost → full replacement; "died by the god" → an oath,
`שְׁבֻעַת יְהוָה תִּהְיֶה בֵּין שְׁנֵיהֶם`; divergence: the devoured animal is paid for in HL, not in the Torah]; Exod 9:3 `יַד
יְהוָה … בְּמִקְנְךָ` ↔ OS HL 75 `I-NA QA-TI DINGIR-LIM` "by the hand of the god"; Exod 22:14 ↔ HL 76.

**Versions.** HL 53: OS imperative *dāu*; mss. C, D plural partners; HL 54: ms. E omits several groups; HL 56: ms. C
"to go"; HL 64: OS `uttar=šed=a kī=pat`; HL 65: OS measures by the plough-ox; HL 75: OS "by the hand of the god"; all the
animal tariffs identical in OS and standard.

**Shared words for HLPT** (§§ XXXI ff. rework HL 53–76?): the animal table (`פַּר`, `סוס־הרבעה`, `גָּמוּל`, `בן שנה`,
`בן שנתיים`, `רחל`, `כבש`, `כבשה`, `צאן`, `שור חרישה`, `סוס רתמה`, `פרה`, `סוסה`, `פרד`, `חמור`, `אַיָּל`, `שה־הרים`),
*turiya-* `רתם`, *šakuwaššar-* `בשלמותו`, *2-ki* `כפליים`, *unna-* `נהג`, *ḫink-* `הציג`, *karap-* `טרף`, *appatariya-*
`עיכב`, *tayazzil-* `גנבה`, *enant-* `מבוית`, *ḫali-* `מכלאה`, *ašawar* `דיר`, *link-* `נשבע`.

### Part 4 (HL1 440–col4)
Drafted 2026-10-25: clauses 440–567 (HL §77a–§100; CHiL sections 79–103) and the colophons col1–col4. **HL1 is
complete**: 571 entries, 104 `## ` headings (= the base's 103 sections + the colophon), no `@`, no placeholder.
`verify HL1`: 0 problems (the one repeated-line difference is 180/186, accepted); `check_bible_quotes.py`: 0 problems;
`selftest`: 0 failures. Also done at the start of this part: 291 notes the *takšan* split; 204's tag corrected to
[cognate loan] (Aramaic `הֲלָךְ` is borrowed from *ilku*, not cognate); 302 (ÉRIN = *ṣābu* = `צָבָא`) is a true cognate and
stays. Changed in earlier lines: 315 *takš-* `לבנות` → `להתקין` (`בנה` is now *wete-*'s, §98, §100); 166 *ar-* `יבואו` →
`יגיעו` (`בא` is *uwa-*'s; *ar-* / *arnu-* = `הגיע` / `יַגִּיעַ`).

**Whole-file self-check.** Formulas uniform across the file: F4 `ואל ביתו יביט` ×36, F5 `וימות` ×11, F6 `ידו חוטאת` ×2,
F2 `לפנים` ×16 (one without *kinun=a*: §54), F3 ×15, F1 ×155, F8 ×77, F9 ×26 – each with one Hebrew. `lexmap`
"one Hebrew for several lemmas" – all by design: Sumerogram / Akkadogram and the word it writes (*keššar* / *QĀSSU*,
*ištaman-* / GEŠTU / *UZNU*, *wemiya-* / KAR, *uttar* / *AWĀTU*, *QĀTU* / ŠU `יד`, *parn-* / *per*), *BĒLU* of a person
= *išḫa-* `אדון` (§5 rule; 536), the particles (*nu/ta/U* `ו`, *natta/UL* `לא`), *kuššan* "when" / *mān* `כאשר` (both
"when"), *anda* / *takšan* `יחד` (166, 291; accepted split), `איל` (`אַיִל` / `אַיָּל`, vocalized: the new trap),
`אמה` (`אָמָה` / `אַמָּה`, vocalized).

**New renderings fixed (lemma → Hebrew, first clause).**
| Hittite | Hebrew | First | Note |
|---|---|---|---|
| *armawant-* "pregnant" | `הרה` | 440 | [equivalent] Exod 21:22 `אִשָּׁה הָרָה` |
| *šarḫuwanda* (no possessive) | `את הבטן` | 441 | §17 `את בטנה` |
| IGI "eye" | `עין` | 446 | |
| *ḫuša-*, *tarušḫa-* (harness parts) | `חוּשָׁה`, `טַרוּשְׁחָה` (transliterated) | 450 | crux: *anda dā-* "put on" (ours) / "carry off" (CHiL) |
| PARĪSU, ŠE | `פָּרִיס` (pl. `פָּרִיסִים`), `שעורים` | 452 | §H6 |
| MUL "star" | `כוכב` (`הכוכבים`) | 456 | |
| *penna-* "drive (there)" | `הסיע` (`יסיע`) | 457 | pair of *unna-* `נהג` |
| UZU Ì "fat"; KUŠ "hide" | `שומן`; `עור` | 459, 460 | |
| ŠAḪ; NIGA; ŠAḪ.TUR; *kappi-* | `חזיר` (fem. `חזירה`); `מפוטם`; `חזרזיר`; `קטן` | 461–476 | the Torah's word only by necessity (no other Hebrew for "pig"); Lev 11:7 [absent] in the apparatus |
| *ḫila-* "courtyard" | `חצר` (`של חצר`) | 465 | |
| *kappuwai-* "count" | `ספר` (`יספרו`) | 470 | |
| *šeli-* "grain heap" | `ערמה` | 479 | |
| UR.GI₇; *LÚ UR.GI₇* | `כלב`; `איש־הכלבים` | 485, 489 | CHiL "cacciatore" |
| Ì.ŠAḪ | `שומן־חזיר` | 496 | |
| NIM.LÀL; *kammara-* "cloud, swarm"; É.NIM.LÀL | `דבורים`; `ענן`; `כוורת` | 501–509 | |
| BUBUTANU | `*בּוּבּוּתָנוּ*` (transliterated; "bee-stings"? CHiL) | 507 | crux |
| *tapeššar* | `*טַפֶּשְׁנִי*` (transliterated; "in the act"? CHiL) | 512 | crux |
| *išḫai-* "bind, impose" | `חייב` (`יחייבו אותו`) | 523 | the verb of *išḫiul* `חובה` |
| *kukkurš-* "cut off, mutilate" | `קצץ` (`יקצצו`) | 530 | LH *nakāsu* `קצץ` (cross-language); ↔ Deut 25:12 |
| *šer* "on behalf of" | `בעדו` | 537 | |
| ÉSAG "storage pit"; *ḫalki-* "grain" | `אסם`; `תבואה` | 541 | (LH *našpakum* `אסם`: cross-language) |
| *šunna-* "fill" | `מילא` (`ימלא`) | 543 | |
| *lukk-* "set fire" | `הצית` (`יצית`) | 551 | |
| *wete-* "build" | `בנה` (`יבנה`) | 552 | |
| *nakkuš-* "damage, loss" | `נזק` | 555 | |
| *taišzi-* (a barn) | `*מתבן*` | 562 | Isa 25:10 |
| *etri(ya)-* "feed" | `האכיל` (`יאכיל`) | 563 | |
| *ḫamešḫant-* "spring" | `אביב` | 564 | |
| IN.NU.DA "straw" | `תבן` | 566 | |
| DUB; QATI; ŠU (scribe); PĀNI; IŠṬUR | `לוח`; `תם`; `יד`; `לפני`; `כתב` | col1–col2 | |

**The colophons (translated as data).** ms. E: "Tablet 2! of 'If […]' – hand of […], before A[…] … wrote"; ms. C:
"Tablet 2 – finished. 'If a man'. Of the father of His Majesty (`שִׁמְשִׁי`)". **Finding (looked, not presupposed):** col3
"If a man" is the **title** of this tablet (its incipit, *takku LÚ-aš*), not a catch-line for the next tablet – the second
tablet opens "If a vine" (*takku GIŠ.GEŠTIN-aš*). And both colophons call this tablet the **second** (DUB 2.KAM), though
its content is HL 1–100 (the editors mark `2!`): an open point for HL2 / the coordinator. CHiL restores the supervisor in
col1 as A[nuwanza], the court scribe of the 13th century. "Of the father of His Majesty" = the copy (or the redaction) of the
present king's father.

**Cruxes (in the apparatus).** 445 `2!` (OS: 3 shekels for a mare); 450 *anda dā-*; 507 BUBUTANU; 512 *tapešni*; 555
*nakkuš Ú-UL šarnikzi* (no compensation for what perished inside: CHiL agrees "non risarcirà"); 562 *taišzi-*; 564 *arnu-*
(CHiL "take care of them"); col1–col2 "tablet 2".

**Parallels (selection).** Exod 21:22 ↔ HL 77a (`הָרָה`; the same *pešš-* as HL 17); Exod 21:26 ↔ HL 77b; Exod 22:14 ↔ HL
78; Exod 22:4 ↔ HL 79, 86 [divergence: the field's owner uses the oxen one day, or may kill the pig but must return it];
Exod 22:12, Amos 3:12, Exod 21:35 ↔ HL 80 (the remains divided: fat to the owner, hide to the culprit); Lev 11:7 ↔ HL 81–86
[absent: the pig has a price in Ḫatti]; Exod 22:30 ↔ HL 87–90 [absent: the dog has a price by its work – a shepherd's dog
= a free man's hand]; Exod 22:1 `בַּמַּחְתֶּרֶת` ↔ HL 90 (a thieving dog killed, no compensation) and HL 93 (the burglar
caught before entering); Exod 22:6 ↔ HL 94; Deut 25:12, Exod 22:2 ↔ HL 95, 99 [divergence: the slave's nose and ears cut
off, the free man pays; the master pays or gives up the slave]; Judg 14:8 ↔ HL 91; Deut 28:8 ↔ HL 96–97; Exod 22:5 ↔ HL
98–100 [divergence: the arsonist rebuilds; a slave's master pays or loses him; a burnt barn – feed the cattle until
spring]. *karū … kinun=a* in this part: HL 81 (pig, 1 mina → 12 shekels), 91 (bees, 1 mina? → 5), 92 (hives, "stings"? →
6), 94 (house theft, 1 mina → 12): the last revision, perhaps, of a body penalty into silver.

**Shared words for HLPT:** *armawant-* `הרה`, *penna-* `הסיע`, the pig and dog words, *išḫai-* `חייב`, *kukkurš-* `קצץ`,
*lukk-* `הצית`, *wete-* `בנה`, *šunna-* `מילא`, ÉSAG `אסם`, PARĪSU `פָּרִיס`; and the earlier parts' tables.

**For the coordinator (HL1 review).** The three review passes (fidelity, consistency, Hebrew) of the whole text were not
part of this brief; the self-check above covers consistency by script. Points a reviewer may want to re-decide: `יַגִּיעַ`
for *arnu-* (CHiL varies: "occuparsi di", "consegnare", "tenere"), `מחלוקת` (*šullatar*, CHiL "with intent"), the literal
`ויטהר אותו` (castration), `לנתק` for vines, `יחייבו` (*išḫai-*), and the transliterated *tapešni* / BUBUTANU.
