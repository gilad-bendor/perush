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

### Translator 1, part 2 (HE 2–29)
Drafted 2026-10-30: HE 2:1–29:15 (570 clauses, fragments 2–29) in `annotated-HE.rtl.md`; the placeholder is gone.
`verify HE --strict` 0, `verify IL --strict` 0 (dossier identical), `check_bible_quotes.py` 0 on both, `selftest` 0.
HPM read after each block (2–4, 5–9, 10–29); its corrections adopted and noted under **תרגומים** (notably: the fasting
guest of 5:15–23 is male, not Ištar; 6:14 *ašanza* "true"; 6:26 "seven days"; 7:4–9 irrealis; 8:31 "what kind of woman";
16:4 / 4:21 SIG₇ "ten thousand"; 22:9 imperative; 25:15–17 *kupri-* "bitumen"; 26:12 *ninink-* "move"; 27:19 "where you
sent me").

**1. Part-1 rulings applied.** §H5 F33/F38 notes and `translator-brief--myths.md` §2 now carry the strings used
(`(כאשר) X שמע את הדברים`; `שמו לו … כסא לשבת` / `ושולחן מקושט לאכול – שם לו`; the jussive `ישימו לו כסא לשבת` HE 5:10,
`ולאכול – שולחן יקשטו לו!` 5:11). M1 and §H2 got Kella, Taḫpurili, Zaliyanu/Zalinu, Zašḫapuna, Tazzuwaši, Piḫa-ziti,
Walwa-ziti (regexes tested: `verify IL --strict` 0; IL's `זליינו` normalized to `זלינו` = `זַלִיַנוּ`).

**2. Formula reuse (byte-identical modulo brackets):** F30 (4:18 fem. `אִשְׁתַּר החלה לומר אל חֶדַמּוּ:`; 6:27, 8:30, 22:1,
26:20, 27:18, 27:23 `X החל לומר את הדברים אל Y:`; broken ones `[…] החל [לומר]:`); F31 (4:47, 8:32 `אשתר [החלה] להשיב אל
חדמו:`; 6:13, 8:21, 20:19 `X החל להשיב את הדברים אל Y:`); F32 (7:3, 7:10); F33 (21:7, 26:33); F36 (26:34, 28:11 `ו[קם]
חיש,`); F37 (20:7); F38 (5:10, 5:15); messenger 6:28–29, 22:2–4, 28:2–3 as 1:101–103. New repeated passage: the
command/execution of 26:25–30 / 27:9–13 (`ואילו מקוּמֶּה – החלונות אשר פתוחים …, ואותם פנימה יכסו/כיסו`; `ובתוך הבית
לאכול ולשתות הרבה הכן/הכין`).

**3. New renderings (first line):** *šallanu-* `גידל` (2:5); ḪAŠḪUR `תפוח`, *ekunima-* `קור` (2:11); SILA₄ `טלה`; LIM-*tili*
`באלפים`; *ḫarziyala-* `שבלול?` (HPM); BIL.ZA.ZA `צפרדע`; MEŠEDDU `רומח`; LÀL/*milit* `דבש`; *lellipai-* `ליקק`; *kašt-*
`רעב` (3:7); *alpa-* `ענן`; *aššiyatar* `אהבה`; *šaḫi-*, *parnulli-* transliterated; *daššu-* `עז` (`מים עזים`, Isa 43:16);
*waršiya-* `ניגב` (`מחה` reserved); *waršula-* `ריח` (also 1:108, changed from `הרגעה`); *tešḫa-* `שינה`; *tarḫuili-* `אדיר`
(`גבור` stays UR.SAG's); *nekumant-* `עירום` (4:23, 8:20; Gen 2:25 – footnote); LÚ-*natar* `גבריות`; *armaḫḫ-* `עִבֵּר`;
*karitt-* `שיטפון`; KI.SIKIL `עלמה`; *išḫa-* `אדון`; *kappuwai-* `דאג` (HPM); BIBRÛ `ריטון`; *ašant-* `אמת`; *nekuz meḫur*
`עת הערב` (`מועד` reserved); *arkammi-* `כינור`, *galgalturi-* `מצלתיים?`; *tuliya-* `אספה`; *zaḫḫ-* `חבט`; *tarpanalli-*
transliterated (`תַּרְפַּנַלִּי`, "rival"); *ḫaliḫla-* `השתחווה`; *ninganu-* `הרווה`; É.DU₁₀.ÚS.SA `בית הרחצה`; *arra-* `השתטף`
(ritual §R1); Ì.DÙG.GA `שמן טוב`; UR.TUR `גור`; Ninatta / Kulitta / Ammezzadu / Ḫuršana / Kuppila / Uraš transcribed;
GURUŠ `בחור`; TUKUL `כלי נשק`; ZA.GÌN `סַפִּיר`; *ḫaluga-* `בשורה`, LÚ *ḫalukattalla-* / KIN.GI₄.A `שליח`; KILĪLU `עֲטָרָה`;
*duddumili* `בשקט`; *iyanna-* `יצא לדרך`; *karuššiya-* `השתתק` (HPM "gleichgültig"); *auri-* `מצפה` (`מגדל` reserved);
BURU₅ `ארבה`; *karip-* `זלל`; *kupri-* **`כֹּפֶר`** (25:15, 17; below); ALAM `פסל` (`צלם` kept for the comparison);
*duddu-* `חנן`; *ninink-* `הניע`; *karimmi-* transliterated `קָרִימִּי` (no clash with É DINGIR-LIM / É.GAL); *ištapp-* `כיסה`;
AB `חלון`; *aššanu-* `ביצע`; *peya-* = *uiya-* `שיגר` (a two-lemma split, as close synonyms); *kariya-* `הסתיר`;
*šamnai-* `הציב` (HPM "erschuf": no creation verb); ḫali- `מכלאה` (IN).

**4. Gates and tables (for the lead; law/ritual files untouched):**
- **`שגר` is blocked by the law §H3 `גר` row** (the prefix class `(?:ש|כש)?` reads ש־גר), although the myth brief fixes
  *uiya-* `שִׁגֵּר`: five escapes (26:22–24, 27:5–6). Fix: exclude `שגר` (e.g. `(?<![א-ת])ו?(?:כש)?[בלהמכ]?(?:גר…)` or a
  negative lookahead for `שגר`).
- **`כפר` (law §H3, NEVER) blocks the real cognate:** Hittite *kupri-* "bitumen" (25:15, 17) is the Akkadian loan *kupru*
  = `כֹּפֶר` (Gen 6:14; guidelines §6.7). Escaped twice; propose a licence `kupri`.
- Part-1 gate list stands (`גבור` / ḪUR.SAG, `ירא` / *watarnaḫḫ-*, `חטא` / *ešuwaštati*, `עברה`, `הקריב` / BAL).
- F8 (`pāi` = `ייתן`) fires on imperatives "give!" (4:44, 22:9): two `[סטייה מן הנוסחה]` escapes; propose restricting F8
  to the law keys.

**5. Cruxes:** HE 2:21, 4:20–22, 4:32 (heap of heads), 5:28 / 7:14 *tarpanalli-*, 6:14, 8:34 *šarauwar*, 12:16, 20:9–11
(HPM vs us), 21:15 (Ḫedammu's birth on Kumarbi's knees? – Gen 50:23, 30:3 in the apparatus), 25:15–18 (bitumen, seven
years: context lost), 29:7 (IB = Uraš). The order of fragments 2–29 is HPM's, not the story's.

## Progress
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
- 2026-10-30: translator 1, part 2: HE 2:1–29:15 drafted (no review passes yet).
- 2026-10-30: translator 1, part 1: IL 1–128 and HE 1:1–1:128 drafted (no review passes yet).
- 2026-10-31: review pass (a) fidelity – 36 lines changed (IL 115, 120, 128; HE 1:12, 1:33, 1:61, 2:5, 3:7, 4:17, 4:18, 4:20, 5:21, 6:8, 6:23, 7:10, 8:3, 8:20, 8:21, 8:30, 8:32, 8:39, 11:3, 16:8, 20:4, 20:10, 20:19, 21:9, 27:18, 27:23; KU 64, 117, 118, 125, 141, 168, 272).
- 2026-10-31: review pass (b) consistency – 26 lines changed (IL 13, 14, 15, 33; HE 1:38, 1:60, 2:5, 4:10, 4:14, 4:16, 4:35, 5:36, 6:22, 7:11, 7:15, 9:9, 9:15, 9:19, 10:7, 19:7, 20:14, 22:11, 26:30, 27:9, 27:13, 27:21; a note at HE 27:14). Unified: *ḫandai-* `ערך` (IL 13, HE 26:30, 27:13, 27:21), *mekki* `לָרֹב`/`הרבה` (IL 13: `בשפע` was *iyatar*'s root), {DUG}*palḫi-* `דוד` (IL 14, 15, 33), *epp-* `תפס` (HE 4:14, 9:19, 22:11), *iya-* mid. `התקדם` (HE 4:35, 19:7), *šanezzi-* `נעים` (HE 4:14, 9:15), *malai-* `אישר` (HE 4:10 = KU 276), *kanešš-* `הכיר` (HE 4:16), *tiya-* `צעד` (HE 6:22), *menaḫḫanda* `מול` (HE 2:5), *memai-* `לומר` (HE 9:9), *parā pai-* `הלך קדימה` (HE 1:38 = UL 1:212), the epithet's spelling `הגבור` (HE 1:60, 7:15, 10:7, 20:14), HE 5:36 = UL 2:62, HE 7:11 = 7:4 (`אותי, את קומרבי`: the accusative); HE 27:9 Kumme ★ vocalized in the half-bracket. IL 13–15 are the dossier's lines: two rows added to renderings §H8 (`verify IL` identical).
- 2026-10-31: review pass (c) Hebrew – 6 lines changed (IL 23: the apodosis without `ו`, "אם אשכב עמך, / אבוא ואעשה"; HE 2:5 `מְגַדְּלִים` vocalized (not "towers"); HE 9:23 `איכשהו` → `בדרך כלשהי` (register); KU 68 `הֱיֵה חַי`, KU 124 `וְאַחַר`, KU 231 `לְהָרִים` vocalized), and 33 `## ` headings (IL 9, HE 8, KU 16): reserved/gated words out of the headings (`גורל` IL §30″, HE 12; `מדבר` KU §10′, §21″; `כועס` KU §25‴; `לקרב` IL §23′, KU §20″; `נושא` for *dā-* IL §20′; `שולח` for *uiya-* HE §8‴; `החידקל` for Aranzaḫ KU §17′), headings that misread the line (IL §4 `שלושת הדודים` after §H8; HE 5 – the guest, not Ištar, does not eat), and `אֵל` / `הָאֵלִים` / `אָנוּ` / `הָרָה` vocalized in headings; IL 8–17 untouched (dossier identical); intros written (`translation--intro-IL/HE.rtl.md`, `translation--intro.rtl.md` here; `translation--intro-KU.rtl.md`, `translation--intro.rtl.md` in `2-מחזור-קומרבי/`), checked against the H3/H4 gates (no hit) and `check_bible_quotes.py` (0).

## Part IL: parallels index (Illuyanka, CTH 321)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-IL.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 8 | `mān {d}IM-aš {MUŠ}illuyankašš=a INA {URU}kiškilušša argatiyēr` | כאשר אֵל הַסְּעָרָה והנחש אִילוּיַנְקָה בְּכִּישְׁכִּילוּשָּׁה נאבקו זה בזה, | תהלים עד:יג | [equivalent] | `שִׁבַּרְתָּ רָאשֵׁי תַנִּינִים עַל-הַמָּיִם` (תהלים עד:יג) – מאבק אל הסערה בנחש: מוטיב משותף לחת, לכנען ולמקרא. כאן אין זה ים אלא עיר בארץ חת, והנחש שוכן בחור באדמה (28, 35). |
| 9 | `nu=za {MUŠ}illuyankaš {d}IM-an taruḫta` | גבר הנחש על אֵל הַסְּעָרָה. | ישעיהו כז:א | [divergence] | `בַּיּוֹם הַהוּא יִפְקֹד יְהוָה בְּחַרְבּוֹ הַקָּשָׁה וְהַגְּדוֹלָה וְהַחֲזָקָה עַל לִוְיָתָן נָחָשׁ בָּרִחַ` (ישעיהו כז:א) – במקרא האל אינו מובס לעולם; כאן הסיפור נפתח בתבוסת אל הסערה, וניצחונו בא רק בתחבולה ובעזרת אדם. |
| 17 | `nu {m}ḫūpašiyan LÚ.U19.LU wemiet` | ומצאה את חוּפַּשִׁיָּה, בן־אדם. | בראשית ו:ב | [divergence] | `וַיִּרְאוּ בְנֵי הָאֱלֹהִים אֶת בְּנוֹת הָאָדָם כִּי טֹבֹת הֵנָּה; וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) – גם כאן נפגשים אלה ובן־אדם, אבל בכיוון ההפוך: האלה מחפשת את האדם, והוא שמציב את התנאי (22). |
| 30 | `nu=wa adanna akuwanna eḫu` | בוא לאכול ולשתות!" | תהלים עד:יד | [divergence] | `תִּתְּנֶנּוּ מַאֲכָל לְעָם לְצִיִּים` (תהלים עד:יד) – שם המפלצת עצמה היא המאכל; כאן מזמינים אותה לאכול, והמשתה הוא המלכודת. |
| 37 | `nu {MUŠ}illuyankan išḫimanta kalēliet` | וקשר את הנחש בחבל. | איוב מ:כה; איוב מ:כט | [equivalent] | `תִּמְשֹׁךְ לִוְיָתָן בְּחַכָּה; וּבְחֶבֶל תַּשְׁקִיעַ לְשֹׁנוֹ` (איוב מ:כה); `הַתְשַׂחֶק-בּוֹ כַּצִּפּוֹר; וְתִקְשְׁרֶנּוּ לְנַעֲרוֹתֶיךָ` (איוב מ:כט) – המפלצת הנקשרת בחבל. באיוב השאלה הרטורית אומרת שאדם אינו יכול לעשות זאת; כאן אדם עושה זאת בדיוק – בעזרת אלה … |
| 39 | `nu=kan {MUŠ}illuya[nk]an kwenta` | והרג את הנחש, | ישעיהו כז:א | [equivalent] | `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) – אותו פועל (*kuen-* = `הרג`, כבחוקים החתיים), ואותו סוף לנחש. אבל אצל ישעיהו האל עושה זאת לבדו, "בחרבו", ובאחרית הימים; כאן – אחרי שאדם קשר את הנחש השיכור. |
| 45 | `zigg=a=war=ašta {GIŠ}luttanza arḫa lē autti` | אתה – מן החלון אל תביט החוצה! | בראשית יט:כו | [divergence] | `וַתַּבֵּט אִשְׁתּוֹ מֵאַחֲרָיו; וַתְּהִי נְצִיב מֶלַח` (בראשית יט:כו) – איסור להביט ועונש על ההבטה: מוטיב שחוזר בסיפורי עמים רבים. כאן ההבטה היא אל אשתו וילדיו, אל חייו הקודמים – כמו אשת לוט, המביטה אל מה שנשאר מאחור. |
| 49 | `apāš=a {GIŠ}lu[ttanza] arḫa šuwayet` | והוא הציץ החוצה מן ה[חלון], | בראשית כו:ח | [equivalent] | `וַיַּשְׁקֵף אֲבִימֶלֶךְ מֶלֶךְ פְּלִשְׁתִּים בְּעַד הַחַלּוֹן; וַיַּרְא וְהִנֵּה יִצְחָק מְצַחֵק אֵת רִבְקָה אִשְׁתּוֹ` (בראשית כו:ח) – ההבטה מן החלון החושפת אשה. הדמיון טיפולוגי. |
| 53 | `[ā]ppa=wa=mu É-na tarna` | "שַׁלְּחִינִי בחזרה הביתה!" | בראשית לב:כז | [equivalent] | `וַיֹּאמֶר שַׁלְּחֵנִי כִּי עָלָה הַשָּׁחַר` (בראשית לב:כז) – אותה בקשה ("שלחני") במפגש בין אדם לאלוהי. שם האלוהי מבקש מן האדם להשתחרר; כאן האדם מבקש מן האלה. *tarna-* = `שִׁלַּח` בכל הטקסטים החתיים. |
| 81 | `nu=za DUMU.MUNUS {MUŠ}illuyankaš DAM-anni dāš` | לקח לו את בת הנחש לאשה. | בראשית ו:ב | [divergence] | `וַיִּקְחוּ לָהֶם נָשִׁים מִכֹּל אֲשֶׁר בָּחָרוּ` (בראשית ו:ב) – נישואין בין עולמות (כאן בין בן האל לבת המפלצת) כתחבולה פוליטית; במקרא הנישואין בין בני האלהים לבנות האדם הם חטא שמביא את העונש. |
| 93 | `n=aš namma aruni za[ḫ]ḫiya pait` | ועוד הלך אל הים, אל הקרב. | ישעיהו כז:א | [equivalent] | `וְהָרַג אֶת הַתַּנִּין אֲשֶׁר בַּיָּם` (ישעיהו כז:א) – בנוסח השני הקרב האחרון הוא בים, והנחש הוא יצור של מים: התמונה הקרובה ביותר למקרא. |
| 99 | `lē=mu genzuwaiši` | אל תחוס עליי!" | שופטים טז:ל | [equivalent] | `וַיֹּאמֶר שִׁמְשׁוֹן תָּמוֹת נַפְשִׁי עִם פְּלִשְׁתִּים` (שופטים טז:ל) – גיבור המבקש למות יחד עם מי שהוא נלחם בו. אצל שמשון – נקמה; כאן – נאמנות לבית אשתו. הדמיון טיפולוגי. |
| 100 | `nu=kan {d}IM-aš {MUŠ}illiyank[an] ⸢U⸣ DUMU-ŠU kwenta` | ואֵל הַסְּעָרָה הרג את הנחש ואת בנו. | תהלים עד:יד | [equivalent] | `אַתָּה רִצַּצְתָּ רָאשֵׁי לִוְיָתָן` (תהלים עד:יד) – הריגת הנחש בידי אל הסערה. במזמור אין מחיר; כאן אל הסערה הורג גם את בנו שלו. |


## Part HE: parallels index (Ḫedammu, CTH 348.I)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-HE.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1:12 | `tiyat?=⸢ma⸣ [ ... ] ⸢GE6-i⸣ KI-pi GAM-anda` | וצעד? […] מטה, אל האדמה האפלה. | – | [equivalent] | שאול המקראית – "האדמה האפלה" היא העולם התחתון, מקום המתים והאלים הקדמונים; המלה `שאול` אינה באה בשורה (שמורה), וההשוואה בהערה בלבד. |
| 1:33 | `[n]u=za PĀNI ZI-ŠU memiškiuwan [dāiš]` | [והחל] לומר אל נפשו: | בראשית ח:כא | [equivalent] | `וַיֹּאמֶר יְהוָה אֶל לִבּוֹ` (בראשית ח:כא) – הדיבור הפנימי של האל. בעברית המקראית "אל לבו", בחתית "לפני נפשו" (ZI). |
| 1:39 | `[ ... ] {d}IŠTAR-in aušta` | […] את אשתר ראה. | בראשית ו:ב | [equivalent] | `וַיִּרְאוּ בְנֵי הָאֱלֹהִים אֶת בְּנוֹת הָאָדָם כִּי טֹבֹת הֵנָּה` (בראשית ו:ב) – הראייה שמעוררת תשוקה. כאן הנחש רואה את האלה, והתשוקה היא המלכודת שלה. |
| 1:54 | `kuwatt=an šer ḫarnikt[eni DUMU.LÚ.U19.LU-a]n` | "על מה תשמידו [את בני האדם]? | בראשית ו:ז | [equivalent] | `וַיֹּאמֶר יְהוָה אֶמְחֶה אֶת הָאָדָם אֲשֶׁר בָּרָאתִי מֵעַל פְּנֵי הָאֲדָמָה` (בראשית ו:ז) – השמדת בני האדם בידי האלים. כאן אין זו החלטה של האל העליון אלא תוצאה של מלחמה בין האלים (חדמו הוא נשקו של קומרבי), ויש אל אחד שמתנגד לה. |
| 1:55 | `A-NA DINGIR{MEŠ} SISKUR UL peškanzi` | לָאֵלִים לא ייתנו מנחה, | בראשית ח:כ; בראשית ח:כא; בראשית ח:כב | [equivalent] | `וַיִּבֶן נֹחַ מִזְבֵּחַ לַיהוָה; וַיִּקַּח מִכֹּל הַבְּהֵמָה הַטְּהֹרָה וּמִכֹּל הָעוֹף הַטָּהוֹר וַיַּעַל עֹלֹת בַּמִּזְבֵּחַ` (בראשית ח:כ) – המנחה של האדם לאל אחרי סכנת ההשמדה. גם בבראשית ח הקרבן של נח בא מיד אחרי ההשמדה, ואחריו ההבטחה `וְלֹא אֹסִף עוֹד לְה … |
| 1:55 | `A-NA DINGIR{MEŠ} SISKUR UL peškanzi` | לָאֵלִים לא ייתנו מנחה, | – | [divergence] | בבראשית האל אינו צריך את המנחה; הוא "מריח" אותה ומחליט מתוך עצמו. כאן האלים תלויים בה. |
| 1:60 | `[nu] wezzi {d}10-aš {URU}kummiyaš UR.SAG-iš LUGAL-uš {GIŠ}APIN-an [apašil]a ēpzi` | [ו]יבוא אֵל הַסְּעָרָה של קוּמֶּה, המלך הגבור, ואת המחרשה [בעצמו] יתפוס. | בראשית ב:ה; בראשית ב:טו | [equivalent] | `וְאָדָם אַיִן לַעֲבֹד אֶת הָאֲדָמָה` (בראשית ב:ה) – בלי אדם אין מי שיעבד את האדמה; כאן – בלי אדם האל עצמו יצטרך לחרוש. וכן `וַיִּקַּח יְהוָה אֱלֹהִים אֶת הָאָדָם; וַיַּנִּחֵהוּ בְגַן עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ` (בראשית ב:טו): האדם נועד לעבודה. אצל אאה זו … |
| 1:61 | `nu wezzi=ma {d}GAŠAN-iš {d}ḫepatušš=a [{NA4}A]RA5 apāšila mallanzi` | ויבואו אשתר וחֶבַּת, ובאבן [הרחיים] בעצמן יטחנו." | שמות יא:ה; ישעיהו מז:ב | [equivalent] | `עַד בְּכוֹר הַשִּׁפְחָה אֲשֶׁר אַחַר הָרֵחָיִם` (שמות יא:ה); `קְחִי רֵחַיִם וְטַחֲנִי קָמַח` (ישעיהו מז:ב) – הטחינה ברחיים היא עבודת השפחה הנמוכה, ובישעיהו – סימן להשפלת הגבירה. כך כאן: המלכות האלוהיות תטחנה בעצמן. |
| 1:63 | `kuwat=pat=wa [šer z]ik {d}kumarbiš DUMU.NAM.LÚ.U19.LU-an idalauwani šanḫiš[keši]` | "מדוע זה [על] אתה, קומרבי, דורש את בני האדם ברעה? | תהלים לח:יג | [equivalent] | `וְדֹרְשֵׁי רָעָתִי דִּבְּרוּ הַוּוֹת` (תהלים לח:יג) – "דורש רעה": בעברית המבקש את רעת חברו; בחתית האל "דורש (פוקד) את האדם ברעה". |
| 1:94 | `ašanna=šši {GIŠ}ŠÚ.A-an aruni tiyēr` | שמו לו, לים, כסא לשבת, | מלכים ב ד:י | [equivalent] | `וְנָשִׂים לוֹ שָׁם מִטָּה וְשֻׁלְחָן וְכִסֵּא וּמְנוֹרָה` (מלכים ב ד:י) – הכנת כסא ושולחן לאורח מכובד. |
| 1:103 | `[nu=mu u]ttanaš GEŠTU-an parā lagān ḫar(a)k` | [ו]הטה [לי] אוזנך ל[ד]ברים! | משלי כב:יז | [equivalent] | `הַט אָזְנְךָ וּשְׁמַע דִּבְרֵי חֲכָמִים` (משלי כב:יז) – אותה תמונה: האוזן המוטה אל הדברים. מילולית: "החזק את האוזן מוטה קדימה". |
| 1:119 | `ginuwa=nnaš=kan [ ... k]atkattiškezzi` | ברכינו […] רועדות, | נחום ב:יא; יחזקאל ז:יז | [equivalent] | `וְלֵב נָמֵס וּפִק בִּרְכַּיִם` (נחום ב:יא); `וְכָל בִּרְכַּיִם תֵּלַכְנָה מָּיִם` (יחזקאל ז:יז) – הברכיים הכושלות כסימן הפחד: ביטוי משותף לשפות רבות. |
| 1:120 | `SAG.DU-aš=ma=nnaš {LÚ}BÁḪAR-aš [{GIŠ}UMB]IN GIM-an weḫattari` | וראשנו מסתובב כגלגל של קַדָּר, | ירמיהו יח:ג | [equivalent] | `וָאֵרֵד בֵּית הַיּוֹצֵר; וְהִנֵּהוּ (וְהִנֵּה הוּא) עֹשֶׂה מְלָאכָה עַל הָאָבְנָיִם` (ירמיהו יח:ג) – אבני היוצר, הגלגל של הקדר: אותו כלי. אצל ירמיהו – תמונה של האל המעצב; כאן – של סחרחורת הפחד. |
| 2:15 | `[ ... GU4{ḪI]}.A ANŠE.KUR.RA{MEŠ}=ya LIM-tili azzikkez[zi]` | […בק]ר וסוסים – באלפים הוא אוכל. | איוב מ:טו | [divergence] | `חָצִיר כַּבָּקָר יֹאכֵל` (איוב מ:טו) – בהמות של איוב, המפלצת שנבראה "עמך", אוכלת עשב כבקר; חדמו אוכל את הבקר עצמו, באלפים. |
| 4:11 | `nu=⸢kan⸣ āššiyatar {GIŠ}šaḫin {GI[}Šparnull]inn=a daššawaš A{ḪI.A}-naš šunniyat` | מילאה אהבה, שָׂחִי ו[פַרְנוּלִּי] במים העזים. | ישעיהו מג:טז | [equivalent] | `וּבְמַיִם עַזִּים נְתִיבָה` (ישעיהו מג:טז) – "מים עזים" הם הים. |
| 4:23 | `{d}IŠTAR-iš=ma=k[an ANA {MUŠ}ḫedammu IGI-anda NÍ.TE{MEŠ} nekuman]da parā appiškezzi` | ואשתר – [מול חֶדַמּוּ את איבריה העירו]מים מושיטה קדימה. | בראשית ב:כה | [equivalent] | `וַיִּהְיוּ שְׁנֵיהֶם עֲרוּמִּים הָאָדָם וְאִשְׁתּוֹ וְלֹא יִתְבֹּשָׁשׁוּ` (בראשית ב:כה) – `עָרוֹם` מתרגם את המלה החתית *nekumant-* (M2). |
| 4:23 | `{d}IŠTAR-iš=ma=k[an ANA {MUŠ}ḫedammu IGI-anda NÍ.TE{MEŠ} nekuman]da parā appiškezzi` | ואשתר – [מול חֶדַמּוּ את איבריה העירו]מים מושיטה קדימה. | – | [divergence] | בבראשית העירום שבין אדם לאשתו תמים ואחר כך מביש; כאן הוא נשק: האלה מציגה את גופה כדי לפתות את הנחש ולהרדימו – והנחש הוא המפותה. |
| 21:15 | `⸢n=an?⸣ [AN]A {d}kumarbi g[inuwaš ... ]` | ואותו [אל] קומרבי – [על] ב[רכיו …] | בראשית נ:כג; בראשית ל:ג | [equivalent] | `גַּם בְּנֵי מָכִיר בֶּן מְנַשֶּׁה יֻלְּדוּ עַל בִּרְכֵּי יוֹסֵף` (בראשית נ:כג); `וְתֵלֵד עַל בִּרְכַּי` (בראשית ל:ג) – הנחת הרך הנולד על ברכי האב (או האם המאמצת) כמעשה של הכרה: מנהג משותף לחת (כמו בלידת אוליקומי) ולמקרא. |
| 25:15 | `ANA kupri=kkan kwin [ ... ]` | אל הכֹּפֶר – איזה […] | בראשית ו:יד | [cognate] | `וְכָפַרְתָּ אֹתָהּ מִבַּיִת וּמִחוּץ בַּכֹּפֶר` (בראשית ו:יד) – *kupri-* היא מלת השאלה מן האכדית *kupru*, שקרובה ל`כֹּפֶר` של התבה (הנחיות §6.7). [היתר שער: הכפר – *kupri-* = אכד׳ *kupru*, הקרוב האמיתי של `כֹּפֶר`; שורש כפר שמור בשורות חתיות, ובכל זאת כאן הוא … |
