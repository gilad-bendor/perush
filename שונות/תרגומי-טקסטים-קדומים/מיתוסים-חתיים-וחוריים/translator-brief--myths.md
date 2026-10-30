# Translator brief: the Hurro-Hittite and Old Anatolian myths (addendum)

Written 2026-10-30 by the Round 5 run 2 coordinator, before the first line. **Binding for every translator of this corpus**
(keys IL, HE, KU, UL, SR, ZA, AP, EL, TE of `tools/hittite_tools.py`). It adds to – never replaces –
`../חוקים-ובריתות/translator-brief--hittite.md` (read it in full: the ★ rules, the grammar mapping, the entry format, the
tools) and `translation-guidelines.md` (in full). Read also `renderings.md` of this corpus (M0–M2, H2–H9) and the Hittite
H-tables of `../חוקים-ובריתות/renderings.md` and `../טקסי-שילוח-וטיהור/renderings.md` (they apply to these lines too).

## 1. What is different here
- **These are songs and tales, not laws or rituals.** The Hurrian songs (Kumarbi, Ḫedammu, Ullikummi, the Song of Release)
  are epic poetry translated from Hurrian: formulaic, repetitive, with speeches, messengers, journeys and banquets. The Old
  Anatolian myths (Illuyanka, Telipinu) are told as the cause of a festival or a ritual. Zalpa, Appu and Elkunirša are tales.
- **Tenses in narration.** Preterite → Hebrew past. A present (-zi, -anzi) in narration (the "historical present", common in
  the songs) → Hebrew **participle** (`קוּמַרְבִּי לוֹקֵחַ חָכְמָה אֶל לִבּוֹ`), so the reader sees the switch; in speech →
  future or present by context. Imperatives and 3rd-person imperatives as in the main brief.
- **One clause = one entry** (the HPM "kolon"). The edition's composite is the line you translate (`@` + `fill`). In a
  composite text (SR, ZA: our TLHdig composites) one entry = one tablet line; a sentence may run over several lines: keep the
  break (guidelines §6.1).
- **The fragments.** Ḫedammu (29 fragments), Ullikummi (tablets 1–3 and seven fragments), Elkunirša (two versions in
  fragments), Appu (four fragments) are one KEY each, labelled `<fragment>:<clause>` (`HE 6:3`, `UL 3.1:45`); every
  fragment gets a `## ` heading of its own (`## קטע 6 (CTH 348.I.6), §1′ – …`) with its CTH number.
- **Broken lines.** Many clauses are a word or less. Translate what is there (`[…] תחת […]`); an entry whose composite is
  only `[ ... ]` gets `> […]` and no apparatus at all. Do not spend notes on single broken words unless they matter. A
  restoration in the composite (`[ ]` with letters) is the editor's: translate it inside `[ ]`.
- **The rank-3 translation** here is the HPM editors' German (Rieken et al.), printed by `hittite_tools.py tr KEY FROM TO`:
  read it **only after** forming your own reading of each section, and record in **תרגומים** where you differ. For SR and ZA
  there is no HPM translation: read Neu 1996 / Hoffner 1998 only as memory checks, never quote them from memory.

## 2. The formulas (fixed; `renderings.md` §H5; verify checks F30–F38)
| Hittite | Hebrew |
|---|---|
| X *memiškiwan dāiš* "began to speak" | `X הֵחֵל לוֹמַר` (fem. `הֵחֵלָּה`, pl. `הֵחֵלּוּ`) |
| X *ANA* Y *EGIR-pa memiškiwan dāiš* "began to answer" | `X הֵחֵל לְהָשִׁיב אֶל Y` |
| X *ANA ZI-ŠU memiškiwan dāiš* "began to speak to his own mind" | `X הֵחֵל לוֹמַר אֶל נַפְשׁוֹ` |
| *mān* X *uddār ištamašta* "when X heard the words" | `כַּאֲשֶׁר X שָׁמַע אֶת הַדְּבָרִים` (subject first; without *mān*: `X שָׁמַע אֶת הַדְּבָרִים`; translator 1, HE 1:76, 1:89) |
| *ŠU-za GIŠ.GIDRU-an dāš* "he took a staff in his hand" | `לָקַח מַקֵּל בְּיָדוֹ` |
| *IŠTU GÌR.MEŠ-ŠU KUŠ.E.SIR … liliwanduš IM.MEŠ-uš šarkuit* "he put on his feet (as) shoes the swift winds" | `וּלְרַגְלָיו נָעַל נַעֲלַיִם – אֶת הָרוּחוֹת הַמְּהִירוֹת` (the first translator fixes the exact string at its first occurrence and records it) |
| *šarā ḫūdak arāiš* "he rose at once" | `קָם חִישׁ` |
| *dankui tekan* / GE₆-*i* KI-*pi* "the dark earth" | `הָאֲדָמָה הָאֲפֵלָה` |
| *ašanna=šši GIŠ.ŠÚ.A tiyandu … adanna=ma=šši GIŠ.BANŠUR unuwandu* | *dai-* = `שָׂם`: `שמו לו, לים, כסא לשבת,` … `ושולחן מקושט לאכול – שם לו,` (HE 1:94, 1:96); the jussive: `ישימו לו כסא לשבת` (translator 1) |
| *uddār=ta kwe temi* "the words which I speak to you" | `אֶת הַדְּבָרִים אֲשֶׁר אֲנִי אוֹמֵר לְךָ` |
| *uddānaš GEŠTU-an parā lagān ḫark* "hold (your) ear inclined to the words" | `הַטֵּה אָזְנְךָ לַדְּבָרִים` (+ note: Prov 22:17 `הַט אָזְנְךָ`) |
Every other repeated passage (the messenger repeating his master's words; command and execution): **identical Hittite gets
identical Hebrew, in the same order** – find them with `data` ("identical" / "similar") and `lemma`.

## 3. Words to avoid in every Hittite line (the tool will stop you)
`מדבר` (write `אומר`), `זר` (write `נכרי`), `מועד`, `מקדש`, `משכן`, `תורה`, `ברית`, `כפר`, `עון`, `פשע`, `גורל`, `נדר`,
`מזבח` (Hittite *ištanana-* = `כַּן`), `מלאך` (SUKKAL `וְזִיר`; messenger `שָׁלִיחַ`), `איפה` "where" (write `היכן`),
`כעס` (write `זעם`), `אלהים`; `שלח` only for *tarna-* (send = *uiya-* `שִׁגֵּר`); `נשא` only for *peda-* (lift = *karp-*
`הֵרִים`); `ירא` only for *naḫḫ-*; `שמר` only for *paḫš-*; `שכב` only for *šeš-*; `אויב` only for *kurur-* / LÚ.KÚR;
`לפנים` only for *karū*; `קדוש` only for *šuppi-*; `טהור` only for *parkui-*; `חטא` only for *wašta-*. And this corpus's
§H3 (`תנין`, `שאול`, `תהום`, `ברא`, `הבדיל`, `רקיע`, `מגדל`, `מבול`, `מחה`, `השחית`, `דרור`, `צדיק`, `תבה`, `זפת`,
`קונה`, `אשרה`, `בעל`, `עשתרת`, `עדן`, `שבת`) and §H4 (`נחש` only MUŠ, `גבור` only UR.SAG, `ערום` only *nekumant-*,
`קנה` only "buy").

## 4. The Bible comparison in this corpus (look for; never "translate as")
- **IL, HE (Gen 1:21; Isa 27:1; Ps 74:13–14; Job 40–41):** the serpent of the waters, its defeat by drink and seduction
  (Illuyanka) or by Ištar's nakedness (Ḫedammu); the god who is beaten first; the voracious monster that devours; Ea's
  speech that killing mankind would starve the gods of offerings (↔ Gen 8:20–22 and the Atra-ḫasīs of the flood corpus).
  **The dossier's IL excerpt (IL 8–17 = KBo 3.7 i 9–20) is copied word for word** (`verify IL` compares them); a revision
  goes into `renderings.md` §H8, never into the dossier.
- **KU, UL (Gen 6:1–4, 9:20–27, 11:1–9; Gen 1:6–8):** the generations of kings in heaven, each deposing the one before
  (Hesiod's Theogony is translated in `../הסיודוס/`: compare with it in the apparatus); Kumarbi biting Anu's loins (*paršina-*, KU 35; not "knees": a rejected emendation)
  (↔ Ham and Noah, and the rabbinic reading that Ham castrated his father, b. Sanh. 70a – say it is reception); a stone
  child who grows until he reaches heaven (↔ Gen 11:4) on the shoulder of the giant who carries heaven and earth; the old
  copper tool with which heaven and earth were once cut apart (↔ Gen 1:6–7: no `הִבְדִּיל`, no `רָקִיעַ`).
- **SR (Lev 25:10; Deut 15:12–18; Jer 34:8–22; Judg 9:7–15):** the god demands the release of the captives, the city
  refuses (as Jerusalem revoked its release, Jer 34); the parables with their "it is not a deer, it is a man…"
  explanations (Jotham's fable; Ezek 17).
- **ZA (Exod 2:3; Gen 19:30–38; Lev 18:9):** thirty sons set adrift in containers sealed with fat; the brothers who
  marry their sisters, unknowing.
- **AP (Gen 15:2, 18:1–15, 25:22–23, 13:8–12):** the rich childless man, the god's promise, two sons "Wrong" and "Right"
  and the division of the inheritance.
- **EL (Gen 14:19, 22; Gen 39:7–20):** El the creator of the earth, his wife's advance to the Storm-god, refusal, slander.
- **TE (Ps 44:24; 1 Kgs 18:27; Jer 14:1–6; Deut 28:23–24; Joel 1):** the god who withdraws in anger, the land that
  withers, the animals that reject their young, the bee that wakes the god, the anger buried in bronze pots in the
  dark earth.

## 5. The soul of the ancients (הערות)
Explain: the Hurrian pantheon and its Hittite dress; kingship in heaven as a dynasty with succession struggles; the gods'
dependence on human offerings; the singer's formulas; the city festivals the myths served (the *purulli* of Nerik); magic
analogies in Telipinu ("as this wax melts …"); the humour of the tales (Appu sleeping in his shoes; the Sun-god's
"go home and sleep with your wife"); the political tale of Zalpa (Ḫattuša against Zalpa); the debt-slavery and release of
the Song of Release. Not every line needs a note; the ones that open the ancient mind do.

## 6. Hand-off
As in the main brief §7: `verify KEY` (no errors), `check_bible_quotes.py` on your file, Proposals in the project's
`project.md` (every new rendering, every pre-set row you changed and why, gates you think wrong, cruxes), then report.
