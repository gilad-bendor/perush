# The serpents: Illuyanka and Ḫedammu

Project of `../` (the Hurro-Hittite and Old Anatolian myths; Round 5 run 2, 2026-10-30). Tool: `tools/hittite_tools.py`
(read `../corpus.md`, `../renderings.md`, `../translator-brief--myths.md`).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| IL | The Illuyanka myth (CTH 321): the priest Kella's frame (the *purulli* festival of Nerik), version 1 (the Storm-god beaten; Inara's feast; Ḫupašiya; the serpent bound and killed; Ḫupašiya's house on the rock), version 2 (the serpent takes the Storm-god's heart and eyes; his son marries the serpent's daughter), the priests' ranking | HPM CTH 321 (E. Rieken et al., TX/TRde 2012-06-08), CC BY-SA 4.0: `sources/HPM/MYTH--CTH-321/` | 128 |
| HE | The Song of Ḫedammu (CTH 348.I.1–29) | HPM CTH 348.I.1–29 (Rieken et al., TX 2009-09-01): `sources/HPM/MYTH--CTH-348.I.<n>/` | 698 |

Labels and numbering: `../corpus.md` § Labels. Rank 3 (after drafting only): the HPM editors' German translation
(`hittite_tools.py tr KEY`), for the composites none (Neu 1996 and Hoffner 1998 are © and not in hand).

## Notes
- **IL 8–17 = the fifth-day dossier's excerpt** (`../../מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-IL.rtl.md`, KBo 3.7
  i 9–20, on TLHdig): copied, its Hebrew joined clause by clause (a clause may span two tablet lines: IL 8 = i 9–10, IL 10–11
  = i 12–13, IL 14–15 = i 16–18); `verify IL` checks the identity; revisions are recorded in `../renderings.md` §H8 for the
  lead (this run does not edit the dossier). Ḫedammu enters the dossier at the lead's finalization, not here.
- HE's fragments follow HPM's numbering (348.I.1 … I.29); their order in the story is uncertain beyond fragment 1: each
  fragment's heading says what it contains.

## Open decisions
(none yet)

## Proposals
(filled by the translators: every new rendering, every pre-set row changed, gates, cruxes)

### Translator 1, part 1 (IL; HE 1)
Drafted 2026-10-30: `annotated-IL.rtl.md` (IL 1–128, all) and `annotated-HE.rtl.md` (HE 1:1–1:128; placeholder for 2:1–29:15).
`verify IL --strict`: 0 problems, dossier identity OK (2 rows in §H8); `verify HE`: 0 problems (placeholder note);
`check_bible_quotes.py` on both: 0; `selftest`: 0 failures. HPM's German read after each text was drafted; disagreements
and the corrections it caused are in the **תרגומים** bullets (IL 28, 34, 65, 67, 114–122; HE 1:18, 1:26, 1:28, 1:30,
1:63, 1:73, 1:93, 1:108, 1:112).

**1. The dossier (IL 8–17).** Copied byte for byte (joined as `verify` expects). One new §H8 row: IL 16 / KBo 3.7 i 19
`ואִינָרָה [… ל]זִיגָּרָתָּה` → `ואִינָרָה [ל]זִיגָּרָתָּה` (the gap holds only *INA*). The dossier's apparatus was adapted
and enlarged (Isa 27:1, Ps 74:13 kept; Gen 6:2 added at IL 17). Noted, not revised: the dossier renders *mekki* (IL 13)
`בשפע` and *iyatar* (IL 15) `שפע` – two source words, one root; IL 106 *mekki* = `רבה`.

**2. Formula strings fixed (first lines; reuse byte for byte):**
| F | Hebrew (first line) | Note |
|---|---|---|
| F10 (narration) | `כֹּה (אָמְרָה) אִינָרָה (אֶל) חוּפַּשִׁיָּה:` (IL 18); `כֹּה (אָמַר) X אֶל Y:` (IL 21) | In a story's past the added verb is past; in the frame and in speech present: `כֹּה (אוֹמֵר) קֶלָּה` (IL 1, 102), `כֹּה (אוֹמְרִים) הָאֵלִים` (IL 108, as HPM). `כֹּה` vocalized. |
| F30 | `[ו]החל לומר אל נפשו:` (HE 1:33); `[אֵאָה], מלך החכמה, החל לומר אל קוּמַרְבִּי:` (1:62); `קומרבי החל לומר את הדברים אל וְזִי[רוֹ]:` (1:100) | Any *-wan dāiš* = `החל ל־` (IL 52 `החל ליילל`, IL 95 `החל לגבור`). |
| F31 | `מוּקִישָׁנוּ החל להשיב אל הים את דברי קוּמַרְבִּי:` (HE 1:81) | Here *EGIR-pa memai-* with *uddār* = "repeat (the message)"; `השיב (דבר)` covers "answer" and "report back" (Gen 37:14). |
| F32 | `אל נפשו` also for ***PĀNI** ZI-ŠU* "before his soul" (HE 1:33 = UL 1:118) | Proposal: F32 = *ANA / PĀNI ZI-ŠU*. |
| F33 | `[מוּקִישָׁנוּ] שמע את [הד]ברים,` (HE 1:76); `כאשר הים הגדול שמע את הדברים,` (1:89) | **Changed from the brief's `כַּאֲשֶׁר שָׁמַע X אֶת הַדְּבָרִים`**: the F33 regex (`שמע\S* (?:את )?(?:ה)?דברי`) fails when the subject stands between verb and object, so the subject comes first: `(כאשר) X שמע את הדברים`. |
| F36 | `וקם [חיש],` (1:77); `וקם חיש,` (1:90); `ו[קם] חיש,` (1:111, no *šarā*) | |
| F37 | `… מטה, אל האדמה האפלה.` (1:12); `וכאשר הגיע מטה אל האדמה האפלה,` (1:14) | GAM-anda = `מטה`. |
| F38 | `שמו לו, לים, כסא לשבת,` (1:94); `ושולחן מקושט לאכול – שם לו,` (1:96); `והַמַּשְׁקֶה נותן לו יין מתוק לשתות.` (1:97) | **Changed from the brief's `יַצִּיגוּ … יַעַרְכוּ`**: *tiyēr* / *zikkezzi* are *dai-* (and its iterative), fixed `שָׂם` in every Hittite text. The jussive of HE 5:11 (*unuwandu*) will be `ישימו`/`יקשטו` – for the next part. |
| messenger | `את הדברים אשר [אני] אומר ל[ך] –` (1:102); `[ו]הטה [לי] אוזנך ל[ד]ברים!` (1:103) | Prov 22:17 in the apparatus. |

**3. New repeated passages (for the later parts):** command / execution / repetition (HE 1:73–75, 78–80, 87–88, 91):
`בנהר ובארץ, מטה, עשה דרך הלאה` (*ÍD-za taknaza GAM-an arḫa KASKAL-an iya-*; HPM "mittels Fluss (und) Erde"); `ואותך –
אֵל הַיָּרֵחַ, אֵל הַשֶּׁמֶשׁ וְאֵלֵי הָאָרֶץ – אַל יִרְאוּ!` / `ואותו – אֵל הַיָּרֵחַ, אֵל הַשֶּׁמֶשׁ וְאֵלֵי הָאָרֶץ – [לא ר]או.`
(`יִרְאוּ` vocalized: the `ירא` homograph); `"בוא! קורא לך אבי הָאֵלִים, קומרבי. … הדבר מהיר! ובוא חיש!` (1:82–86); `[…
אינו אוכל עוד], וגם דב[ר] אינו שותה.` (1:15–16 = 20–21); `אֵאָה, מלך החכמה`; `אבי הָאֵלִים`; `הים הגדול` (*šalliš
aruna-*, no determinative); IL `גבר הנחש על אֵל הַסְּעָרָה` (9 = 75).

**4. New renderings (Hittite → Hebrew, first line).** IL: *kalleš-* `זימן` (28; `קרא` kept for *ḫalzai-*, 97 and HE
1:83); *mugai-* `הפציר` (10, dossier); *ḫarp-* mid. "join" `הצטרף` (20; the Laws have `נפרד` for the same verb, HL1 170,
379 – a sense split worth a look); *peḫute-* `הוליך` (25, HL1); *munnai-* `החביא` (26); *unu-* mid. `התקשט` (27);
*ḫattešnar* `חור` (28); *ninik-* `רוה` (34; HPM "stillten ihren Durst"); *numan* `אינם רוצים` (35); *išḫimant-* `חבל`,
*kaleliya-* `קשר` (37); *peruna-* `סלע` (41); *watarnaḫḫ-* `ציווה (על)` (43, 82); *gimra-* `הַבָּר` (44, ritual table);
*luttai-* `חלון` (45); *au-* `ראה`, but *arḫa au-* "look out" `הביט החוצה` (45–46; preverb rule); *šuwaya-* `הציץ` (49);
*wai-* `יילל` (52); *tarna-* `שִׁלַּח` (53 `שַׁלְּחִינִי`, Gen 32:27); *ḫunḫuwana-* `גאות` (61; `מבול` reserved); Ú.SAL `מרעה`
(58); *ḫarši-* `כיכר לחם`, LÚ GIŠ.GIDRU `איש־המקל` (HPM "Herold") (66); *wek-* `ביקש` (67, 84–88); *ašiwant-* / MÁŠDA
`עני` (78; HE 1:109); *ḫašš-* (of the father) `הוליד` (79); *šalleš-* `גדל` (80); DAM-*anni* `לאשה`, *ANA DAM-ŠU* `לאשתו`
(78, 81); *ešri-* `תואר` (92; TLHdig's "Vlies" is wrong; `דמות`/`צלם` avoided); *karuiliyatt-* `קדמות` (`כקדמותו`, 92);
*namma* `עוד` (35, 93, 95; as IN); *zaḫḫai-* `קרב` (93–94; note: `לקרב` is reserved by the law §H3 `יקרב` row, so "to
battle" = `אל הקרב`); *genzuwai-* `חס` (99); *epp-* … *anda* `תפס בתוכם` (98); *ḫantezzi-* / *appezzi-* `ראשון` /
`אחרון` (104–105); *ḫalkueššar* `אספקה` (106); *wattaru-* `מעיין` (115); *pul-* "lot" `פּוּל` (113, 118: transliterated
and vocalized, since `גורל` is reserved; Esth 3:7 *pūr* in the note – an open question for the lead); NA₄ ŠU.U `אֶבֶן־הַשּׁוּ`
(112; HPM "Basalt"; kept apart from *kunkunuzzi-* `בזלת`); *šašant-* `פילגש` (120); *kuera-* `חלקה` (122); *kapunu*
`קַפּוּנוּ`, KISLAḪ `גורן`, SAG.GÉME.ARAD `עֲבָדִים וַאֲמָהוֹת` (123); DUMU.MEŠ `בנים` (as HL1 168); GAL DUB.SAR.MEŠ `שַׂר
הסופרים` (as HLPT col1); QATI `נשלם`. HE 1: DANNA `פרסה` (as HLPT 22); ZU₉ `שן`; *ḫuwant-* "wind" `רוח`, *tarma-* `יתד`
(1:18); *paš-* "swallow" `בלע` (1:26, HPM; TLHdig "stick in"); EME `לשון`; *dannarant-* `ריק`; *kuitman* `בעוד`; *parā
pai-* `יצא`; ***SISKUR* "offering" (given to the gods) `מנחה`** (1:46, 1:55 – a sense split from the rituals' SISKUR
`טקס`; for the lead); *šamminu-* `הקטיר` (1:56); *išpantuzzi-* `נסך`; BAL = *šipant-* `הקריב` (1:65–67); GIŠ.APIN
`מחרשה`; NA₄.ARA₅ `רחיים`, *malla-* `טחן`; *apašila* `בעצמו`; *šanḫ-* `דרש` (IN 9.16 precedent; HE 1:63 `דורש את בני
האדם ברעה`); *idalawatar* `רעה`; *šeli-* `ערמת־תבואה`; *duškaratt-* `שמחה`; LÚ PA₅ `איש־הפלג`; ŠUM-*an tar-* `אמר בשם`;
*ešḫar* `דם`, *išḫaḫru* `דמעות`; *liliwant-* `מהיר` (1:85, as F35's swift winds); *šarra-* `חצה`; *šarḫula-* `בעלת־עמודים?`
(HPM); *unuwant-* `מקושט`; GIŠ.IG `דלת`, *ḫattalwai-* `נעל`, *zakki-* `מנעול` (`בריח` reserved), *pešš-* `השליך`; *waršula-*
`הרגעה`; *walḫeššar* `מַחַץ` (Isa 30:26); *wantema-* `ברק`, *tetḫima-* `רעם`; *nawi* `עוד לא`; *katkattiya-* `רעד`;
BÁḪAR `קַדָּר` (as HL2 176b; `יוצר` avoided: Gen 2:7 – Jer 18:3 in the note); UMBIN `גלגל`; *weḫ-* mid. `הסתובב`.

**5. Pre-set rows changed / to check.** F33 and F38 Hebrew (above). M1: new names `קֶלָּה` (frame; Kella / Killa),
`תַּחְפּוּרִילִי`, `זַשְׁחַפּוּנָה`, `תַּזּוּוַשִׁי`, `זַלִיַנוּ` (one Hebrew for *Zaliyanu* / *Zalinu*, mountain and god), `פִּיחָה־זִיטִי`,
`וַלְוַה־זִיטִי?` – propose adding to M1/H2. The ritual §R1 `טקס` for SISKUR – see 4. M2 *ḫarnink-* `השמיד`: note the Laws
render the same verb `השחית` (HL2 107.2) – fine as a myth-only reservation, but the harmonizer should know.

**6. Gates I think are wrong (all in the law file §H4 unless said; none bent the Hebrew):**
- `גבור` licence `ur\.sag` matches **ḪUR.SAG** "mountain" (IL 64, 67; HE 1:47): anchor `(?<![ḫh])ur\.sag`. And its Hebrew
  regex catches the infinitive `לגבור` of the verb `גבר` (IL 95, escaped with `[היתר שער: לגבור]`): exclude `לגבור`.
- `ירא` licence `naḫḫ` matches *watarnaḫḫ-* "instruct" (IL 43, 82): anchor `(?<![a-zš])naḫ`.
- `חטא` licence `wašt` matches *ešuwaštati* "we sit" (IL 110): anchor.
- `עברה` licence misses *ḫarannet* (HPM lemma *ḫaratar*, IL 57; escaped): add `ḫar=?atar|ḫarann`.
- `הקריב` licence misses BAL (= *šipant-*) and the spelling *šippant-* (HE 1:65–67, ms C; escaped three times): add
  `\bbal\b|šippant`.
- `מגפה` licensed by *ḫinikta* (`ḫink`, IL 65), `מחץ` by *walḫi-* beer (IL 14), `נשא` by *peḫute-* (IL 25), `שכב` by
  *šeš-* B "prosper" (IL 4, 6) and *šašant-* (IL 120): harmless false licences.
- Law §H3 `לקרב` (a verb form) also bars the noun phrase "to (the) battle": noted, worked around (`אל הקרב`).

**7. Cruxes (open).** IL 4/6 *šeš-* B "prosper" vs *šeš-* A "sleep"; IL 61–63 (the king receives Inara's house and the
"river of the flood": restorations); IL 65 *ḫinikta*; IL 100 *DUMU-ŠU* "his son" (kept ambiguous, as HPM); IL 113, 118
*pul-* (rendering open, above); HE §2′ (1:12–16): **the subject who goes down to the dark earth and fasts is not
preserved** – the heading is neutral (`יורד אל האדמה האפלה`), not "Kumarbi" as the brief suggested; HE 1:18 (HPM "Der
Wind isst ihn, den Pflock"); 1:42 who fears the serpents; 1:93 *šarḫula-*; 1:121 *mienu-*.

**8. Parallels recorded (for the index):** Ps 74:13 (IL 8), 74:14 (IL 30, 100); Isa 27:1 (IL 9, 39, 93); Job 40:25, 29
(IL 37: the serpent bound with a cord); Gen 6:2 (IL 17, 81; HE 1:39); Gen 19:26 (IL 45: the forbidden look); Gen 26:8
(IL 49: the window); Gen 32:27 (IL 53 `שַׁלְּחִינִי`); Judg 16:30 (IL 99: "let me die with them"); Gen 6:7 (HE 1:54);
Gen 8:20–22 and Atra-ḫasīs III iii 30–31, v 34–35, I 1–2, 190–193 (HE 1:55: no mankind, no offerings – the inverse of
Noah's sacrifice); Gen 2:5, 2:15 (HE 1:60: without man the Storm-god must plough); Exod 11:5, Isa 47:2 (HE 1:61: the
goddesses at the millstone); Ps 38:13 (HE 1:63); 2 Kgs 4:10 (HE 1:94, the chair and table); Prov 22:17 (HE 1:103); Nah
2:11, Ezek 7:17 (HE 1:119); Jer 18:3 (HE 1:120, the potter's wheel); Gen 8:21 `אֶל לִבּוֹ` (HE 1:33, F32).

## Progress
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
- 2026-10-30: translator 1, part 1: IL 1–128 and HE 1:1–1:128 drafted (no review passes yet).
