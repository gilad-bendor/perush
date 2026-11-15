# Round 8 harmonization – batch C: Vedic and Hittite (2026-11-15; by the lead's delegation)

Items: `finalization-plan.md` §2, "Batch C" (from `run-3.md` – Rigveda Book 2 against Book 7 and the Kaṭha – and `run-5.md`
– the Hittite myths). Principle as in `harmonization--2026-11-13.md`: one Hebrew per source word; inside the Vedic corpus
the lemma's corpus majority wins (Book 7 is the corpus majority overall, but a lemma that Book 7 has once and Book 2 many
times follows its own majority), a different lemma or a different sense keeps its own Hebrew. The Vedic and Hittite
corpora write the lemma plain in the פירוק bullet, so the survey was by segment (`` `form` – lemma "gloss" … ("Hebrew") ``,
a scratch script over every `annotated*.md` of the corpus), both ways: the lemma family, then each candidate Hebrew for
collisions; `tools/harmonize_survey.py heb` for the other corpora. Avestan: no Vedic–Avestan cognate pair touched,
`האווסטה/` not edited.

## A. Changes

| # | Source word | Hebrew (binding) | Survey before | Lines changed | Reason |
|---|---|---|---|---|---|
| 1 | Skt √*vakṣ* "grow, wax" (Zurich also files *ukṣitá*, *ukṣámāṇa* under it) | `פָּרַח` | Book 2 `פרח` 7 (2.2.4a, 2.3.6a, 2.16.1c, 2.21.3b, 2.22.3b, 2.24.11b, 2.34.4a); Book 7 `שגשג` 1 (7.8.2d). `שגשג` is √*puṣ*'s: Book 7 4 (7.32.9c, 16b, 7.56.5b, 7.57.5d), Book 2 2 (2.12.4d, 2.27.15b). Reverse survey of `פרח`: AB 7.15.2d *puṣpín* `פורחות` – the same lemma is `מלבלב` in RV 2.13.7a | `הוודה-והאווסטה/7-ריגוודה-ספר-ז/annotated-RV7.8` 2d `שחור־החישוק, בצמחים פרח.` (+ פירוק, note); **and** *puṣpín* → `מְלַבְלֵב`: `4-העקדה/annotated-AB7` 15.2d `"מלבלבות שתי שוקי הנודד;` (+ פירוק, note) – 2 lines | Book 2's consistency pass split the two roots (√*puṣ* `שגשג`, √*vakṣ* `פרח`); 7.8.2d was the one line that still gave √*vakṣ* the √*puṣ* word. The collision check found AB's *puṣpín* on `פרח`: it takes Book 2's `מלבלב` (one Hebrew per lemma) |
| 2 | Skt √*jinv* (Zurich √*ji* 2) "quicken, promote" | `קִדֵּם` | Book 2 `קידם` 4 (2.23.19b, 2.24.16b, 2.40.3d, 6a); Book 7 `עורר` 1 (7.104.6d). `עורר` / `התעורר` is √*budh*'s (≈ 25 lines, both books; caus. 7.44.2a, 7.79.1b) | `7-ריגוודה-ספר-ז/annotated-RV7.104` 6d `את הנוסחים האלה קדמו, כשני אדוני־גברים!` (+ פירוק, note) – 1 line | the lemma's majority; `עורר` belongs to √*budh*. The compound *parjányajinvita* (7.103.1c) is kept – section B |
| 3 | Skt *yuvatí* "young woman" | `צְעִירָה` | Book 7 `צעירה` 2 (7.77.1a, 7.80.2c), `הנערה` 1 (7.1.6a); Book 2 `הצעירות` 2 (2.35.4a, 11c); RV 10.18.10c `עלמה` 1. `נערה` is *yóṣā*'s (10.10.4c, 7.69.4a, 7.75.5a, 7.77.1a); `עלמה` is *kanyā̀*'s (2.15.7a) | `7-ריגוודה-ספר-ז/annotated-RV7.1` 6a `אשר אליו באה הצעירה, אל רב־הכשרון,` (+ פירוק, note); `5-יאמה-והמתים/annotated-RV10.18` 10c `צעירה רכה כצמר למי שנתן את שכר־הכוהנים –` (+ פירוק) – 2 lines | the majority (the feminine of *yúvan* `צעיר`); each of the other two Hebrew words is another lemma's. RV 10.18.10c is the same sense (the earth "like a young woman"), as Book 7's own record (`project.md`, "RV 10.18.10c `עלמה` … older") already said |
| 4 | Skt √*śū* "swell, wax strong" | `תָּפַח` | Book 7 `תפח` 3 (7.20.2a, 7.32.6b, 7.93.2b), `התעצמו` 1 (7.74.6c); Book 2 `יתפח` 1 (2.25.1b). `התעצם`: no other lemma | `7-ריגוודה-ספר-ז/annotated-RV7.74` 6c `וגם בעצמתם שלהם תפחו הגברים,` (+ פירוק, note: the play *śávasā śūśuvuḥ* is not kept in Hebrew) – 1 line | the lemma's majority in both books. The 7.74 intro and section heading do not quote the word |
| 5 | Skt √*guh* "hide" | `הֶחְבִּיא` (`חָבוּי`) | the Rigveda `החביא` / `חבוי` 9 (RV 10.129.3a, 10.72.7c, 10.17.2a, 7.100.6c, 7.76.4c, 7.80.2b, 2.11.5a, 2.24.3d, 2.40.2b); `בהסתירה` 1 (7.104.17b). `נסתר` is *niṇyá*'s (7.33.9a, 7.56.4a, 7.61.5d) | `7-ריגוודה-ספר-ז/annotated-RV7.104` 17b `בהחביאה את גופה בשקר –` (+ פירוק) – 1 line | the majority; `הסתיר` / `נסתר` is *niṇyá*'s word. The Kaṭha's *gūḍha* / *guhya* kept – section B |
| 6 | Skt √*str̥* (with *ní*) "lay low, strew flat" | `שִׁטַּח` | Book 7 `פיזר` 1 (7.18.11b); Book 2 `שיטח` 1 (2.11.20b). `פיזר` is √*vap*'s (7.56.3a, 2.14.6d, 7b, 2.15.9a, 2.33.11d) and √*kr̥̄*'s (1.32.13b); √*str̥̄* "spread" is `הציע` (7.17.1b, 7.43.2c, 2.3.4b, 2.11.16c). `שיטח`: no other lemma | `7-ריגוודה-ספר-ז/annotated-RV7.18` 11b `עמים של שני הוַאיקַרְנָה – שיטח המלך ארצה;` (+ פירוק, note) – 1 line | a tie of one line each: decided by the collision – Book 7's `פיזר` is another root's word in both books |
| 7 | Skt *haṃsá* "(wild) goose" | `אַוָּז` | the Rigveda `אווזים` 2 (7.59.7b, 2.34.5c); KU `הברבור` 1 (5.2a). `ברבור` in the other corpora: Greek κύκνος (Hesiod, Shield 316) | `8-קטהה-אופנישד/annotated-KU2` 5.2a `האווז היושב בבהיר, …` (+ פירוק, the תרגומים bullet) – 1 line | one Hebrew per lemma, the majority; the Kaṭha's verse is itself a Rigveda verse (RV 4.40.5, the note says so); `ברבור` is the Greek κύκνος's |
| 8 | Skt *yóni* (renderings §11.19) | `רֶחֶם` (*vásman* `קֵן`) | *yóni* `רחם` 14 lines in four projects (5, 7, 8, 9) (Book 7's 7.97.4a changed by run 3); `קן` for *yóni* only RV 10.34.11b (by sense, renderings §11.8) | `הוודה-והאווסטה/renderings.md` §11.19 (*yóni* `קן` in 7.97 marked superseded); the note of `9-ריגוודה-ספר-ב/annotated-RV2.31` 1c (it still said `קן` was shared with *yóni* in 7.97) – no `>` line | the record follows the lines |

**Total: 9 `>` lines** (RV7.1 6a, RV7.8 2d, RV7.18 11b, RV7.74 6c, RV7.104 6d and 17b, RV10.18 10c, KU2 5.2a, AB7 15.2d),
their פירוק segments and notes, one Book 2 note, the renderings (§11.19 amended, §11.28 new: "2026-11-15 harmonization
(after Round 8)"). Rebuilt with `vedic_tools.py build`: `translation-RV7.1`, `-RV7.8`, `-RV7.18`, `-RV7.74`, `-RV7.104`,
`translation-RV10.18`, `translation-KU2`, `translation-AB7` and the project `translation.rtl.md` of projects 4, 5, 7, 8.
No intro, section heading or print stub quoted a changed word (grepped over the whole folder: none of the old strings
remains outside Book 2's `project.md` hand-off list, a historical record).

## B. Kept, with reasons

| Source words | Hebrew | Reason |
|---|---|---|
| Skt *ucátha* / *ukthá* | both `אֲמִירָה` (*ucátha* 3: 7.18.5c, 2.19.7a, 2.20.5a; *ukthá* ≈ 12 + the compounds) | two nouns of √*vac* in one sense ("utterance, recitation"), like √*sr̥* / √*sru* `זרם`, *jaraṇā́* / *jarás* `זקנה`, *rohít* / *aruṇá* `אדום` (kept 2026-11-13). The Avestan cognate pair (*uxδa*) is *ukthá*'s only; a new word for a three-line by-form would split both books |
| Skt *majmán* / *śávas* | `עוֹצְמָה` (4: 7.82.5b, 2.1.15a, 2.17.4a, 2.22.2c) / `עָצְמָה` (≈ 25) | it is one Hebrew word in two spellings, and the split is real; but both books agree on *majmán*, and every free Hebrew word of strength or greatness is another lemma's: *ójas* `חוסן`, *sáhas* `עוז`, *tavasyà* `עוצם`, *túviṣmant* `רב־התוקף`, *mahimán* `גדולה`, *mahitvá* `גודל`, *máhas* `רוממות`, *vīryà* `גבורה`, *dyumná* `הדר`, *svadhā́* `כוח עצמי`; `גדלות` (the √*mah* family) reads as "adulthood". Moving it would open a new collision. Kept; the lead may rule otherwise |
| Skt *parjányajinvita* (RV 7.103.1c, also printed in project 6) | `שעורר פַּרְגַ'נְיָה` | a compound (another lemma, as *dhiyaṃjinvá* `מפיחי־ההגות`, 7.33.1b), and its sense is literally "awakened": the frogs wake at the first rain (the hymn's own intro). 7.104.6d's note now says so |
| Skt *gūḍha*, *guhya* (KU 1.29b, 2.12a, 5.6a) / RV √*guh* | `הַנִּסְתָּר` / `חבוי`, `החביא` | the Upaniṣad's term for the hidden Self, beside *gúhā* `סֵתֶר` "the secret place" (KU 1.14b, 2.12a, 3.1a, 4.6b): one family in the Kaṭha's own vocabulary, by sense |
| Hitt. GURUŠ | `עֶלֶם` (GI 1:13, 1:26, 1:38, 1:45, 1:74, 5:6) / `בָּחוּר` (HE 22:6–7, AP 1:42); GURUŠ-*tar* `עלומים` (KU 72, 76) | **the lead's ruling** (finalization plan §2): the Hittite Gilgameš keeps the Babylonian epic's Hebrew where the Hittite has its word (*eṭlu* `עלם`), renderings M4 |
| Hitt. DANNA | `בֵּרוּ` (GI 1:110–111) / `פַּרְסָה`, `פרסאות` (HLPT 22, HE 1:1, 6:18, UL 1:19) | **the lead's ruling**: GI follows the epic (*bēru* `בֵּרוּ`); the Laws and the other myths keep `פרסאות` |
| Hitt. *šamnai-* | `עִצֵּב` (GI 1:2, 1:3 and 4 more: the gods fashion Gilgameš) / `הִצִּיב` (HE 23:2; UL 3.1:179, 207 "set up against", and its iterative `מציב`) | confirmed by survey: "fashion a being" against "set up (a rival) against"; `יצר`, `צלם`, `דמות` reserved in every myth line (M4, §H3) |
| Hitt. *ara-* | `רֵעַ` (GI, Enkidu "friend") / `חָבֵר` (HL1, HL2 ×4, IN ×2: "fellow, colleague") | confirmed: GI keeps the epic's *ibru* `רֵעַ` (the Gilgameš corpus `רעי`, `רעהו` …); the Laws' and Instructions' "colleague" is another sense |
| Hitt. *nanna-* | `דחק?` (SI 2:56) / `העביר?` (KU 277, of a word) / `הרחק` (AM 33, 79, 159, 251, the rituals' imperative "drive away") | confirmed: "drive" of captives, "send on" of a message, "drive off" of evil; two of the three readings are marked `?` (broken context) |
| Hitt. *weya-* / *wiya-* / *wai-* | `בכה` (SI 4:9 weeping) / `צעק` (KU 146, GI 1:189) / `יילל` (IL 52, EL 1.1:30, 42: *wai-* "wail") | confirmed: three senses (weep, cry out, wail – *wai-* is also a separate lemma in HPM) |
| Hitt. *maniyaḫḫ-* | `ניהל` (SI 5:18, 5:21 "govern") / `הפקיד` (UL 3.1:5, 101 "hand over") / `מנה` (IN 6.4, 16.3 "assign"); SR *maniyaḫḫai-* `מחוז` (a noun) | confirmed by sense |
| Hitt. *ninink-* | `עורר` (LA 1:116 animals) / `הניע` (UL 2:88, 3.1:8; EL 1.1:5 objects) / `השתולל` (IN 12.4, middle) | confirmed by sense (and voice) |
| Hitt. *išḫiya-* / *išḫai-* | `כרך` (AZ 6, *anda* "wrap in") / `אסר` (AS 18, rams tied up) / `כבול` (SR 10.4.5) / `חייב` (HL1 525, 533, 535; HLPT 203 "impose") / `אלם` (HL2 158a.1, sheaves) | confirmed by sense, each recorded in its corpus's renderings (myths M4, rituals §R, Laws). (run 5's report says "SG"; the line is AZ 6) |

## Verification
- `python3 -I -B הוודה-והאווסטה/vedic_tools.py verify --strict` (whole corpus): before **0 problems**; after the build
  **0 problems** (the 2 known repeated-line differences, RV 10.10.13d/14b and 7.38.6b/7.52.3b, unchanged; RV 1.32 ↔ the
  fifth-day dossier untouched).
- `vedic_tools.py build RV7.1 RV7.8 RV7.18 RV7.74 RV7.104 RV10.18 KU2 AB7`: done; the new strings are in the generated
  `translation-*.rtl.md` and the projects' `translation.rtl.md`; no old string left in any file of the folder.
- `vedic_tools.py selftest`: 23 lines, 0 failures.
- `python3 -I tools/check_bible_quotes.py` on the ten changed files, then on every `.md` of `הוודה-והאווסטה/`: 0 problems.
- `python3 -I -B tools/hittite_tools.py verify --strict` (all Hittite keys): 0 problems; IL ↔ dossier identical, HE ↔ dossier
  60 entries identical; 10 repeated-line notices (the known ones). `hittite_tools.py selftest`: 69 lines, 0 failures.
  `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems. (No Hittite file was edited.)
- Surveys: a segment script (scratch, `batch-C/vsurvey.py`) over the Vedic and Hittite corpora; `tools/harmonize_survey.py
  parse` (GURUŠ, DANNA), `heb` (`ברבור`, `חוסן`, the `רע` family) for the other corpora.

## For the lead
- **Nothing outside batch C's corpora** needed a change; no gate bug.
- **A homograph, now corpus-wide:** *yóni* `רֶחֶם` (14 lines) and √*mr̥ḍ* "be merciful" `רַחֵם` / `ירחם` (≈ 19 lines) are
  the same unvocalized string – the reason Book 7's part 9 had chosen `קן` for 7.97.4a. Run 3 chose `רחם`; I kept it (the
  sense is right, and the lines read in context), but a trap row in renderings §7.3 with vocalized *yóni* lines would be
  the clean fix – a gate change over 14 lines, left to you.
- **Seen in passing, not changed:** AB 7.15.2d *bhūṣṇú* "thriving" (√*bhū*) `משגשגת` shares `שגשג` with √*puṣ* (another
  lemma, prose gāthā); RV 10.15.4c–d *ávas* / *ūtí* against Book 7 (already reported 2026-11-13).
- *majmán* (section B) is the one item kept against a real Hebrew-side identity; overrule if you prefer a new word.
- No `האווסטה/` file and no Hittite renderings were touched (the Hittite items were all confirmed, so no "2026-11-15"
  line was added to those corpora's renderings; the Vedic renderings carry §11.28).
