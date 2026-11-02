# Cross-corpus harmonization after Round 5 (2026-11-02; the lead, by the user's delegation)

Principle (as in the passes of 2026-10-21, 2026-10-23 and 2026-10-30, guidelines §6.7): one Hebrew per source word
across the corpora; the majority / earliest corpus wins unless the cognate rule (§6.4.2; §5.2 "When two source words
collide in one Hebrew word, the cognate keeps it") or a recorded reason decides otherwise; across languages the three
principles of 2026-10-30 apply (a cognate reservation protects a Semitic text's own cognate; a loanword's Hebrew belongs
to its source language; inside one language – or two cousin languages – the cognate keeps the Hebrew, and a fixed
formula wins).

Round 5 brought four new corpora (Vedic and Avestan, the Hurro-Hittite myths, the inscriptions, and – inside existing
corpora – the Ugaritic epics, the Cuthaean Legend, the Poor Man and the fables, the Egyptian tales). Its runs settled
most collisions inside their own corpora; the items they left for the lead ("Cross-corpus splits left for the lead" in
`reports/round-5/run-1.md` … `run-6.md`, and the parent's items) were surveyed with `tools/harmonize_survey.py` on the
`>` lines, both ways (`src` / `parse` on the source word, `heb` on the chosen Hebrew). Few needed a change: most are
cross-language and allowed by the 2026-10-30 principles, or splits by sense inside one language with a reason.

**Two new rules** (guidelines §6.4 and §6.7):
1. **The echo tag on a proper name** (a place, a people, a person, a god): `[cognate]` when the name is the same word as
   the Bible's – the same name, even as a loan or a transcription (Nebo `נְבוֹ`, Dibon, Gad, Kemosh, Kutha `כּוּת`,
   Babylon, Memphis `מֹף`, Danel / Dan'el); `[equivalent]` only when the Bible names the same thing by another word.
2. **Cousin languages inside one corpus** (Sanskrit and Avestan; Ugaritic, Punic and Hebrew; Akkadian and its
   Akkadograms in Hittite): the cognate pair takes one Hebrew – principle 3 of 2026-10-30 applied across the two
   languages of a corpus (*aša* = *r̥tá* `סֵדֶר`, now *dātar* = *dhātár* `מַעֲמִיד`).

## A. Changes (applied)

| # | Source word | Hebrew (binding) | Lines changed (corpus · label) | Reason |
|---|---|---|---|---|
| 1 | Av. *dātar* (the epithet of Ahura Mazdā, formulas F4 / F4b) | `מַעֲמִיד` (as Skt *dhātár* `הַמַּעֲמִיד`, RV 10.190.3) | Vd 2.1 (F4), 2.39, 2.42, 2.43 (F4b) and every other *dātar* line; renderings F4, F4b, §11; the formula table of `vedic_tools.py` | the cousin cognate (rule 2 above), as *aša* = *r̥tá*; and `עושה` also renders Av. *kar-* / Skt √*kr̥* in the same text (`שעשה יִימָה`), which hid that the Avestan has two verbs. The verb *dā-* itself (*dātō* "I was made") stays by sense |
| 2 | Akk. *aggu* "furious" | `קוֹצֵף` / `קֶצֶף` (the root קצף) | the Cuthaean Legend SB 132 `לזעם לב אנליל` → `לקצף לב אנליל`; LH epilogue 3545′ `הזועם` → `הקוצף`; EST 475 *aggiš* `בזעם` → `בקצף` (the adverb) | Gilgameš VII 149, X 307, SAA 9 1 iv 7, the Theodicy 50, the Poplar d+14 already `קוצף` (majority, earliest); *aggu* is the adjective of *agāgu* `קצף` (Erra I); `זָעַם` is *ezēzu*'s (Enūma eliš, Ludlul, Counsels, Erra, the Cuthaean OB I) |
| 3 | Hitt. *kupri-* "bitumen" (Ḫedammu 25:15–17) | `כֹּפֶר` [cognate, Gen 6:14] – licensed | `hittite_tools.py`: the root-כפר NEVER row (law §H3) licensed by *kupri-*; the two escapes in HE 25:15–17 removed | the Akkadian loan *kupru* (= the flood corpus's `כֹּפֶר`, §6.7): a loanword keeps its source language's Hebrew (principle 2); the Hittite reservation of כפר is Lev 16's `כִּפֶּר`, not the bitumen |
| 4 | the law formula F8 (*pāi* `ייתן`) | scoped to the law keys | `hittite_tools.py` (the myth imperatives "give!" and Appu's narrative present no longer fire); their escapes removed | a law formula, not a word rule (the same scoping as the myth tables, `MYTH_KEYS`, §5.2) |
| 5 | the ritual formula F18 (*aššul* `טובה`) | scoped to its formula / the ritual keys | `hittite_tools.py` (the noun *aššul* in the Song of Release no longer fires); its escape removed | as row 4 |
| 6 | the echo tag on proper names | rule 1 above | the inscriptions corpus `מילים-באבן/` (the Mesha apparatus tagged the same place sometimes `[equivalent]`, sometimes `[cognate]`), Mesha 1 (Mesha), 2 (Dibon), 8 (Medeba), 9 (Baal-meon), 10 (Kiriathaim), 19 (Jahaz), Mesad Hashavyahu 7 (Hoshaiah): [equivalent] → [cognate]; Sinuhe B29 Qedem and Kpny (= Byblos `גְבַל`) → [cognate]; no `>` line changed (ʿAjrud's Teman ↔ Deut 33:2 stays [equivalent]: other names) | run 4's question; one rule for every corpus from now on |
| 7 | pWestcar 2,22 and the bracket notation of the dossier's WC / the corpus's WE | the Egyptian corpus's rule in both files: `⸢ ⸣` is not carried into the Hebrew; a half-restored word is bracketed whole, a restored ending is not bracketed; 2,22 = `וזהב־לבן; *אוליד*? … [שלח] שליח […]. [ואז] [תפס] [תמסח]` | the 27 lines of WC = WE 2,21–4,7 (identical in both files, `verify WE`) | run 6: the Westcar translator had spread the dossier's `⸢ ⸣` over WE, and the reviewer removed it from 25 lines; one notation for both files, the corpus's |
| 8 | the dossier's Illuyanka excerpt (IL = KBo 3.7 i 9–20) | the myth corpus's four revisions (renderings §H8): `וְאֵל הַסְּעָרָה – אֶת כָּל הָאֵלִים` (vocalized), `ואִינָרָה [ל]זִיגָּרָתָּה`, `וערכה הכול לָרֹב:` (*ḫandai-* `ערך`, *mekki* `לרב`), `דוד … – ובדודים` ({DUG}*palḫi-*) | the dossier's `annotated-IL.rtl.md`; the §H8 rows deleted | the corpus renderings of the whole myth corpus; `verify IL` keeps the two identical |

Rows 3–5 and 8 are the Hittite tool and dossier batch; rows 1, 2, 6, 7 the other batch (section C).

## B. Kept, with the reason (record, no change)

- **Av. *dā-*** (the verb) by sense; ***spəṇta*** `נָדִיב` beside Skt *suvidátra* `נדיב`, and ***páyas*** `לֶשֶׁד` beside
  *médha* in the fixed `לֶשֶׁד הַזֶּבַח`: not cognates, by sense inside the corpus (renderings §11.8).
- ***kā́ma*** `חֵשֶׁק` = Hesiod's ἔρος, ***amŕ̥ta*** `אלמוות` (plene, as Hesiod), `מֶרְחָב` for *rájas* (Vedic) and πέλαγος
  (Greek), `נָחָשׁ` for *áhi* / *aži* / *sarpá* (the dossier's comparison word for every culture's serpent): aligned on
  purpose, or cross-language (principle 1).
- **SISKUR** (Hittite "ritual; offering"): `טֶקֶס` in the rituals and for EN SISKUR `אדון הטקס` (Zalpa / Appu), `מִנְחָה`
  in Ḫedammu, where it is the gods' offerings from mankind (Ea's speech: killing mankind would starve the gods, ↔ Gen
  8:20–22). The Sumerogram is wider than either Hebrew word; by sense, recorded at its lines (renderings M3).
- **Hitt. *ḫarnink-***: `הִשְׁמִיד` in the myths, `הִשְׁחִית` in the Laws (HL2 107.2 and the others) and the Instructions.
  In the myths `הִשְׁחִית` would manufacture Gen 6:13 (`מַשְׁחִיתָם`) in Ea's speech about killing mankind; in the Laws
  the object is property (a vineyard; Jer 12:10 `שִׁחֲתוּ כַרְמִי` is a real, harmless match). By text, with the reason.
- **Hitt. *ḫenkan*** `המוות` (Zalpa) / `מגפה` (the rituals, beside ÚŠ); ***waḫnu-*** `סובב` (the Song of Emergence) /
  `המיר` (the Instructions, Lev 27:10); ***ḫarp-*** `הצטרף` / `נפרד`; ***šarra-*** `חצה` / `חלק`; ***maz(z)-***;
  `שָׁלִיחַ` for ṬĒMU and *ḫalugatalla-*; `שִׁגֵּר` for *peya-* and *uiya-*; `קֶרֶן` for SI and *kalmara-* (ray): common
  verbs and nouns whose Hittite range covers both Hebrew senses; by sense (renderings M3).
- **`חָרוֹן`** (Hitt. *karpi-*) beside Gilgameš's *libbātu*; **`הִשְׁמִיד`** beside the Sumerian *ḫalam*; **`גִּבּוֹר`** for
  Ug. *ġzr* beside the myths' gate on UR.SAG: different languages (principle 1).
- **Ugaritic and Punic:** *mšr* `מֵישָׁרִים` = Akk. *mīšarum*, `אַלְמָנָה` / `יָתוֹם`, `נֶשֶׁר`, `קֶשֶׁת`, Punic `ʾlm`
  `הָאֵלִים` (= Ug. *ilm*), `ʾlp` `בָּקָר` (= Ug. *alp*; `אֲלָפִים` Ps 8:8 in the apparatus of both): consistent across
  the languages. *ṯʿ* `הגשה` and *dbḥ* / *šlmm* `זבח` / `שלמים` against the Hittite SISKUR: different languages.
- **Aramaic *ʿdy*** (Sefire, not yet translated): the run that does Sefire starts from EST's *adê* `אֲמָנָה` (the same
  word – a loan between the two – so principle 3), with `עֵדֹת` / `עֵדוּת` in the apparatus, unless it finds a reason in
  the text; it records its choice.
- ***šâlu*** `שָׁאַל` [cognate] (the Cuthaean Legend's oracle questions, the laws, Gilgameš) and ***erēšu*** "request"
  `שָׁאַל` (Gilgameš VI 71, 103, XI 213, the Descent of Ištar 102, Nergal, Erra I 6, Counsels, the Dialogue of Pessimism,
  Etana, SAA 9) – also `בִּקֵּשׁ` in Etana, Ištar 118b, Enūma eliš, MAL A, by sense: Hebrew `שָׁאַל` itself means "ask"
  and "request" (1 Kgs 3:5 `שְׁאַל מָה אֶתֶּן לָךְ`), and the Descent of Ištar's figura `שאלת … שאלה אשר לא תישאל` is a
  fixed passage; the [cognate] tag goes to *šâlu* only, *erēšu* lines are [equivalent]. Moving *erēšu* would touch ~15
  established lines in eight corpora for no gain in the comparison.
- ***gimillu*** `חֶמְלָה` (the Cuthaean SB) beside Erra's *gamālu* `חָמַל` (one root in both languages) and the formula
  *gimilla turru* `הֵשִׁיב גְּמוּל` (Enūma eliš, Gilgameš): a formula wins; `גָּמַל` stays *riābu*'s.
- **The palm:** Akk. *gišimmaru* `תָּמָר` (the Cuthaean SB 136, Maqlû I 22, the Theodicy 56, the Poplar d+17 – consistent),
  Sum. *ĝišimmar* `דֶּקֶל` (EWO 241 beside *zulum* `תמרים`, Lipit-Ištar), the fables' contestant `דֶּקֶל`: kept – the
  Sumerian lines have the fruit beside the tree, where `תמר` / `תמרים` would merge them.
- ***ešertu*** `בֵּית־אֵל` (`מִקְדָּשׁ` is gated to *eš₃*); ***šapru*** `שָׁלִיחַ` = *mār šipri*'s (both "envoy");
  ***gipāru*** `מכלאה` / `מרעה` / `אחו` by sense; ***ḫazannu*** `חַזָּן` [cognate] (the note gives "mayor").
- **The Egyptian tales' kept splits** (renderings §11): wsr / ḥmw `משוט`, qd.w / dbḥ `מידה`, dmj `עיירה` / `עיר`,
  jdr / jꜣw.t `עדר`, ꜥfd.t / pds `ארגז` (and the Hittite *tuppa-* `ארגז`, another language); y~mꜥ `ים` [cognate] in the
  Two Brothers beside the Ugaritic Yam `יָם` (a name there): the same Semitic word, a note in both.

## C. Applied

Applied 2026-11-02 in two batches at once, on independent files (range B, two agents; Opus), each told to apply every
row to every line that carries the word:
- **Batch H** (rows 3–5, 8, and Ḫedammu into the fifth-day dossier): the Hittite tool, the myth corpus, the dossier's
  IL and the new HD excerpt.
- **Batch E** (rows 1, 2, 6, 7): the Vedic corpus, the Cuthaean Legend, Hammurabi, the inscriptions corpus, Westcar
  (WE and the dossier's WC).

Every touched corpus was rebuilt and its verifier passed with `--strict`; then every verifier of the folder and
`check_bible_quotes.py` over all its `.md` files (`reports/round-5/final.md`). The lines each batch changed are listed
in the "2026-11-02 harmonization" line of each touched corpus's `renderings.md`.
