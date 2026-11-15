# Part RL1: the Rulers of Lagaš (translator A, resumed; Round 9 run 2, 2026-11-15)

## Progress
- **Drafted:** all 106 new entries of `annotated-RL.rtl.md` (32–37, 48–67, 109–116, 125–138, 141–142, 145–200); the
  Hebrew file header; 8 `## ` section headings (1–37 included); `translation--intro-RL.rtl.md`.
- **Copied lines (1–31, 99–108, 117–124):** ten `>` lines revised (below); notes added at 99, 104, 107.
- **Review passes:** (a) fidelity – every line against the transliteration and ORACC (brackets: whole restored words
  only – fixed 64, 194, 195, 197; 100 had two readable words translated as `[...]`); (b) consistency – KL strings
  copied (`אחרי ששטף המבול,`, `עשה N שנה.`, `X, בן Y,`, `האיש אשר את X` / `בנה,`, *šu-ši* as `× 60`), and RL's own
  copies followed (`אלוהו (האישי): X,`, `את התעלה X [חפר],`, the reversal 50–56 = 22–25, 11–13); (c) Hebrew aloud, and
  the apparatus scanned for reserved strings (`העולם` → `התבל`; `לשאול` removed).
- **Checks:** `verify RL` – 155 entries OK; the excerpt check shows exactly the ten revisions below (to be applied to
  the flood references). `check_bible_quotes.py` on the annotated file, the intro and this file – 0 problems.

### Parallels index (RL1)
| Line | Source | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| RL 50–56 | id₂ dun-ne-de₃ … {ĝiš}al {ĝiš}mar {gi}dusu {ĝiš}apin-e … uĝ₃-še₃ im-ta-an-ĝar-re-eš | תעלות – לחפור … את המעדר, את האת, [את הסל ואת המחרשה], / מחיית הארץ, / לעם [נתנו]. | בראשית ג:כג; בראשית ט:כ | [divergence] | Farming as a god's gift, "the life of the Land", after the flood; in Genesis tilling is the sentence of the expelled man, and after the flood Noah begins it himself. |
| RL 59–64 | ki-sikil-še₃ … ki-a za-za … {d}ezina₂ | אל העלמה … ארצה כרעו … אֶזִינָה, המצמיחה | — | [absent] | Farming begins in worship of the grain goddess; Genesis has no cult attached to the first farming. |
| RL 107 (with 200) | ud-ba mu sar nu-me-a … e₂-dub-ba sar-ra | כשעוד לא היה כתב … בבית הטבלה – נכתב | — | [absent] | A history that begins without writing and ends with its own writing in the school. |
| RL 155; 187 | niĝin₆ … mu-du₃-a; e₂-gal ti-ra-aš₂ … mu-du₃-a | ואת נִיגִין … – אשר בנה; ואת ההֵיכָל טִירַשׁ … – בנה | שמואל ב ז:יג | [equivalent] | The ruler builds the god's house and city; *e₂-gal* = `הֵיכָל` [cognate]. |
| RL 170–171 | lugal-a-ni {d}nin-ĝir₂-su e₂-a-ni du₃-da mu-un-na-dug₄ | [מלכו] נִינְגִּירְסוּ / [את ביתו לבנות] לו אמר | מלכים א ה:יט | [equivalent] / [divergence] | The god orders the ruler to build his house (cf. Gudea); in the Bible the word passes from David to his son. |
| RL 192 | um-mi-a | הָאֻמָּן | משלי ח:ל | [cognate] | Sum. *um-mi-a* > Akk. *ummânu* > `אָמוֹן`. |
| RL 199 | dumu ama-na dumu ad-da nu-me-a | בן אמו, בן אב – לא היה | — | [absent] | Gudea's own confession to Ĝatumdug ("I have no mother – you are my mother") turned into a biographical datum. |

## Key findings
**The ancient mind.**
1. **An answer to the King List from the city it left out.** The same opening (`אחרי ששטף המבול,` = KL 40), the same
   `עשה N שנה`, `X, בן Y` – but the measure of a ruler is a canal, not a war: no city is "struck with weapons", nobody
   receives kingship; the rulers are listed with their *personal god* (`אלוהו (האישי): X`, 104 …) and the canals
   they dug (101, 105, 141, 145–151: eight canals in a row, `אחד לבדו`, 150).
2. **Culture as the god's gift, in a reversal written in the same words:** before, "canals were not dug, levees not
   cleaned … Ninĝirsu had not yet given the hoe, the spade, the basket, the plough" (11–13, 22–25); then the same
   nouns and verbs as purposes and a gift (50–56). Without tools man lives 100 years of childhood and 100 more, "does
   no work", and lifts his eyes to the rain (14–26).
3. **Scribes become rulers:** from 183 on the list names scribes and officials (Puzur-Mama "scribe of Ninki",
   Ur-Ninmarki "the scribe, the *ummia*", whose gods are Ḫaya and Nisaba, Ur-Bau "scribe of Ur-Ninĝirsu"); the
   text, which begins "when there was no writing" (107), ends "written in the school. Nisaba be praised!" (200).
4. **Gudea "not the son of his mother nor of his father"** (199) turns his hymnic confession (Cyl. A iii 6–7) into
   a genealogical datum.

**The Bible.**
5. The gift of tools and of farming after the flood stands against Gen 3:23 (farming as punishment) and 9:20 (Noah
   begins it); the god commanding his house (170–171) meets 1 Kgs 5:19 / 2 Sam 7:13.

## Open decisions
1. **`עפר` in 12 and 108:** the Sumerian has *{gi}dusu* "basket", no *saḫar*: `סל העפר` → `הסל`, `סלי עפר` →
   `סלים` (*dusu* = `סַל`, the temple corpus). The "earth" of ETCSL's "earth basket" stays in the note.
2. ***kabar*** (113) `רועה־בקר`, kept apart from *sipad* `רועה`.
3. ***diĝir-ra-ni*** `אלוהו (האישי)` with the copied "(האישי)" kept in every copy (formula of the first copy, 104).
4. **ĝar** = `נתן` in 56 (as the copied 13); the creation corpus's `שָׂם` used where *ĝar* is "place" (112).
5. **Ur-Bau, Gudea** (196, 198): the list makes Gudea Ur-Bau's younger brother; his inscriptions make him his
   son-in-law – noted, not harmonized.

## Proposals for the corpus renderings (strings exactly as written)
- *diĝir-ra-ni X* = `אלוהו (האישי): X,` (104); *{id₂}X mu-un-dun* = `את התעלה X [חפר],` (101; restored or not);
  *id₂ dun-ed-e* = `תעלות – לחפור,` (50); *eg₂ pa₅-re šu-luḫ ak-de₃* = `סוללות ותעלות – [לנקות],` (51).
- *{gi}dusu* = `סל` (12, 54, 108); *{ĝiš}al* `מעדר`, *{ĝiš}mar* `את`, *{ĝiš}apin* `מחרשה` (copied 11–12); *zi-šag₄-ĝal₂
  kalam-ma* `מחיית הארץ` (copied).
- *ulušin* `שֵׁכַר־כוסמת`; *kurun* `שֵׁכָר` (KL 225); *bal* (libate) `ניסך`; *uru₄* `נחרש`; *za-za* `כרע`; *ki-ulutim*
  `מועד`; *še-numun* `זרע־השעורה`; *še gu-nu* `שעורה מנומרת` (copied); *ki-sikil* `עַלְמָה` (§14.3).
- *kabar* `רועה־בקר`; *dub-sar* `סופר`; *um-mi-a* `אֻמָּן`; *šatam* `פקיד`; *šeš-ban₃-da* `האח הצעיר` (cf. KL *šeš-gal*
  `האח הגדול`); *unken* `אספה`; *saĝ-eš₂ rig₇* `כמתנה נתן`; *en₃ tar* `לדאוג`; *ki aĝ₂* `אהובה`; *e₂ šag₄ ḫul₂-la-ni* `בית
  שמחת לבה`; *ud re-a* `הימים ההם`; *e₂-dub-ba sar-ra* `בבית הטבלה – נכתב.`; the doxology `X – תְּהִלָּה!` (§14.2).
- Names: אַגַל, כּוּאֶה, אַמָא־אַלִים, אוּר־נַנְשֶׁה, אֵ־סִירָרָה, אַנֶּתוּם, שׁוּל־אוּתוּל, אֶנְאֶנְטַרְזִיד, מֶשְׁאַנְדּוּ,
  אֶן־אֶנְלִילֶה־סוּ, פּוּזוּר־נִינְלִיל, אֶן־מֶשְׁאַנְדּוּ, דָּדוּ, טוּגְגוּר, פּוּזוּר־מָמָה, נִינְכִּי, זָזָרוּ,
  לַמְכּוּ־נִיגְגֶּנָּה, חֶנְגַל, פָּבִּילְסַג, אוּר־נִינְמַרְכִּי, חָיָה, אוּר־נִינְגִּירְסוּ, גּוּדֵאָה; canals מָח,
  פִּירִיגְגִּינְגֶּן, פִּירִיג, לוּגַל, גַּנָּא־חִילִי־אַנָּה, נַנְשֶׁה־פַּדָּה, אוּר־מַח־בַּנְדָּה, טַבְּטָה־כּוּגַל.

## Revisions of the copied flood-reference lines (old → new; to apply to the flood references §4)
- **12:** `את סל העפר ואת המחרשה, מחיית הארץ,` → `את הסל ואת המחרשה, מחיית הארץ,` – no *saḫar*; the `עפר` gate.
- **108:** `תעלות לא נחפרו, סלי עפר [לא נישאו].` → `תעלות לא נחפרו, סלים [לא נישאו].` – same.
- **100:** `[...]` → `עין נוראה … […]` – *igi ḫuš* is preserved and readable.
- **103:** `אֶן־אַכִּיגַלַּגֻבָּה –` → `אֶן־אַכִּיגַלַּגוּבָּה –`; **118:** `בן אן־אכיגלגבה,` → `בן אן־אכיגלגובה,` – plene (★).
- **20:** `בעת ההיא מי לגש נעצרו(?) [...],` → `בעת ההיא מי לַגַשׁ נעצרו(?) […],` – Lagaš vocalized (`לגש` "to approach"),
  the edition's ellipsis.
- **24:** `השטחים הגדולים לא [...],` → `השטחים הגדולים לא […],`; **99:** `[עשה ... שנה].` → `[עשה … שנה.]` (= KL 150);
  **104:** `אלוהו (האישי): [...],` → `אלוהו (האישי): […],`; **107:** `… כתב, [...],` → `… כתב, […],` – the `…` of the
  notation (guidelines §6.8), as in KL.

## Gate bugs
1. **`גן`** (corpus-wide RESERVED, licence *kiri₆*/*magan*) hits the canal name *gana₂-ḫi-li-an-na* `גַּנָּה־…` (148):
   written `גַּנָּא־חִילִי־אַנָּה`. License *gana₂* (or exempt the maqaf-joined name).
2. (Copied 117, 120: the old "fully vocalized" flag on name lines is gone with the coordinator's fix.)
