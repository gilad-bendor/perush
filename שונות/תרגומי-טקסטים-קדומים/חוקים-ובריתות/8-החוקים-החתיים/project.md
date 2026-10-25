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
