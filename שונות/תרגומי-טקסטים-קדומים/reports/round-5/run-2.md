# Round 5, run 2 – the Hurro-Hittite and Old Anatolian myths: report

Session `session_01UnH1L4Kc1gLBgeBiiyg8G8` (title `Round5/Run2: Hurro-Hittite myths`), branch `translation-round-5-run-2`,
2026-10-30 21:03 – 2026-10-31 ~02:10 UTC, inside quota range A (one agent at a time throughout). Model: Opus 5.5 for the
coordinator and every sub-agent.

## Done
**The whole selection of the plan row, nine texts, 3,164 lines**, in the new corpus **`מיתוסים-חתיים-וחוריים/`**. Each
text has an annotated file (`annotated-<KEY>.rtl.md`: the line, פירוק, תרגומים (the HPM German, read after drafting),
הקבלה with tags, הערות), an intro, a built clean translation, and Proposals / Progress in its project's `project.md`.

| Project | KEY: text | Base | Lines |
|---|---|---|---|
| `1-אילויאנקה-וחדמו/` | IL: Illuyanka (CTH 321; IL 8–17 = the fifth-day dossier's KBo 3.7 i 9–20) | HPM "Mythen der Hethiter" (Rieken et al., CC BY-SA) | 128 |
| | HE: the Song of Ḫedammu (CTH 348.I.1–29, all 29 fragments) | HPM | 698 |
| `2-מחזור-קומרבי/` | KU: the Song of Emergence / Kingship in Heaven (CTH 344) | HPM | 296 |
| | UL: the Song of Ullikummi (CTH 345.I.1–3.2 and fragments I.4–10) | HPM | 812 |
| `3-שירת-השחרור/` | SR: the Song of Release, **the Hittite side only** (CTH 789: KBo 32.13, 14, 15, 16, 19, 10, 17) | our composite from TLHdig 0.3 (CC BY 4.0) | 422 |
| `4-זלפה-אפו-ואלקונירשה/` | ZA: the Tale of Zalpa (CTH 3.1, KBo 22.2) | our composite from TLHdig | 36 |
| | AP: Appu and his two sons (CTH 360.1–4) | HPM | 204 |
| | EL: Elkunirša and Ašertu (CTH 342.1.1–2.5) | HPM | 301 |
| `5-טליפינו/` | TE: Telipinu, first version (CTH 324.1) | HPM | 267 |

**The Hurrian of the Song of Release is out of scope** (the run brief): the bilingual's Hurrian lines (`lg="Hur"` in TLHdig)
are not translated; the Hittite translation lines (`lg="Hit"`) are, one row per tablet line.

Also: the corpus files (`corpus.md`, `renderings.md` M0–M3 and the machine tables §H2–§H9, `translator-brief--myths.md`,
`parallels-index.md` with key findings and 216 rows, `build_parallels_index.py`); five print stubs
(`הדפסה/מיתוסים-חתיים-וחוריים/`); sources: 84 HPM myth editions (`sources/HPM/MYTH--CTH-*`, parsed files committed, raw HTML
ignored), the TLHdig folders CTH-3, 324, 342, 344, 345, 348, 360, 789 (committed); tools: `hpm2md.py` kind `MYTH`;
`hittite_tools.py` with nine new keys, multi-edition keys, the myth tables scoped to the myth keys, cached tables, and the
dossier identity check (`verify IL`); the composites `composite-SR.tsv` (with its generator) and `composite-ZA.tsv`.
Shared files (one commit at the end): STATUS, the plan row, guidelines §5.2 and §6.7, history (story + changelog),
sources-registry, tools.md, and the source READMEs.

**Process:** the coordinator found the bases (HPM's myth index, which Round 4 had missed), extended the tool, built the two
composites (checked by `comp-check`, pushed before the first line), fixed the renderings, gates and formulas and wrote the
brief; then four translators one at a time (translator 1: IL, HE in two parts; 2: KU, UL in two parts; 3: SR; 4: ZA, AP,
EL, then TE), each merged, verified and committed at once; then seven review agents one at a time: fidelity (three groups:
172 lines fixed), consistency (67 entries; splits recorded in renderings M3), Hebrew (two halves: 48 lines and 85
headings; the intros).

## Verification
- `python3 -I -B tools/hittite_tools.py verify --strict` (all 18 Hittite keys, the Laws, Instructions and rituals
  included): **0 problems**; entries = base lines for every key; translations = the `>` lines. **IL ↔ dossier: identical**
  (after the 4 revisions pending in the myth renderings §H8). 8 repeated-line notices, all justified in their entries
  (UL 3.1:45/46/51 feminine; AP 1:32/33 2sg; EL 1.2:20 feminine; the two old ones, HL1 180/186 and AM 101/189).
- `hittite_tools.py selftest`: 60 lines, 0 failures (9 new myth lines).
- `comp-check SR` (422 rows) and `comp-check ZA` (36 rows): 0 problems.
- `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/dossier_tools.py verify --strict`: 0 problems (the dossier untouched).
- `tools/check_bible_quotes.py` over every `.md` file of the folder outside `sources/`: **0 problems** (translators caught
  several remembered verses, e.g. Mic 1:6, in their drafts).
- The intros were scanned with the reserved-word gates of all three Hittite renderings files: no hit.

## Key findings
**For the Bible** (all typological; the notes say so; details and verses in `parallels-index.md`):
- **Gen 1:21 (IL, HE):** in both Anatolian serpent myths the god is in danger and wins by a trick – a feast and a mortal
  helper (Illuyanka, the serpent bound with a cord ↔ Job 40:25, 29), Ištar's nakedness (Ḫedammu, *nekumant-* `עירום` ↔
  Gen 2:25). Ea's speech: killing mankind would starve the gods of offerings (↔ Gen 8:20–22, Atra-ḫasīs). The god of Gen
  1:21 creates the `תַּנִּינִם` and is never beaten.
- **Gen 6:1–4, 9:22 (KU):** kingship in heaven by revolt (Alalu, Anu, Kumarbi, nine years each); Kumarbi bites Anu's
  **loins** (*paršina-*, KU 35 – not the literature's "knees", a rejected emendation) and becomes pregnant with gods; the
  stone given him to eat, the cult stone (↔ Hesiod's Kronos; Gen 28:22), the god born from his head.
- **Gen 11:4 and Gen 1:6–7 (UL):** the stone child grows on Upelluri's shoulder until he reaches heaven; Ea cuts him off
  with "the old copper cutter with which they cut heaven and earth apart" (UL 3.1:219) – the separation as a past act of
  craft, against Gen 1's separation by the word (no `הִבְדִּיל`, no `רָקִיעַ` in any line). SR's tower parable (AN.ZA.GÀR,
  its top brought near heaven) is the corpus's closest wording to Gen 11:3–4.
- **Lev 25:10, Deut 15, Jer 34 (SR):** the god demands the release of Ebla's captives, the assembly refuses, the city is
  threatened with breaking like a vessel – the strongest parallel of the run is Jer 34:8–22 (a release proclaimed and
  revoked); `דְּרוֹר` is never in a line: the link runs through Hurrian *kirenzi* = Akk. *andurāru*.
- **Exod 2:3 (ZA):** thirty sons set adrift in containers sealed with fat, raised by the gods, nearly marrying their
  sisters (Lev 18:9).
- **Gen 15, 18 (AP):** the rich childless man, "the gods will give you one son" (AP 1:59), Wrong and Right.
- **Gen 14:19, 22 and Gen 39 (EL):** *Elkunirša* = `אֵל קֹנֵה אָרֶץ` [cognate through the Canaanite name]; Ašertu's advance
  and slander (↔ Potiphar's wife).
- **Ps 44:24, Jer 14:5, 1 Kgs 18:27 (TE):** the god who withdraws in anger, the animals that reject their young, the bee
  that wakes the sleeping god, the anger buried in bronze cauldrons in the dark earth; the return undoes the disaster word
  for word.

**For the ancient mind:** a pantheon in dynastic politics (viziers, messengers with staff and wind-shoes, banquets of
welcome); gods who need human offerings and say so; monsters engineered by a deposed father; heaven and earth once cut
apart with a tool; festivals that re-enact the myth (Nerik's *purulli*, the priest Kella's frame and the priests'
ranking); Ḫupašiya's bargain with a goddess and his loss of home; Kamrušepa's analogical magic; a city legend that turns
into Hittite politics (Zalpa); the comedy of Appu (lying down in his shoes; the Sun-god's "go home and sleep with your
wife"); a Canaanite domestic drama on a Hittite tablet (Elkunirša); a song about debt-slavery and the god who demands
release.

## Decisions taken (minor, by the coordinator, under the user's standing rule)
- **Placement:** a new corpus `מיתוסים-חתיים-וחוריים/` with five projects (the serpents; the Kumarbi cycle; the Song of
  Release; the three tales; Telipinu). Ḫedammu stays here; the lead adds it to the fifth-day dossier.
- **Bases:** the HPM "Mythen der Hethiter" editions wherever they exist (found through the portal's own index; fetched
  with the new `hpm2md.py` kind `MYTH`); our TLHdig composites for Zalpa (KBo 22.2 alone: KBo 3.38 is not in TLHdig) and
  for the Song of Release (the `lg="Hit"` lines of its seven main tablets, in Neu's narrative order). Multi-fragment
  compositions are one key each, labelled `<fragment>:<clause>`, in HPM's fragment order.
- **Scope:** Telipinu version 1 only; the Song of Release's seven main tablets; the Kumarbi fragments (CTH 346) fetched
  but not translated (none of them was in the plan's list).
- **Tool:** the myth renderings' H-tables apply to the myth keys only (they reserve `בַּעַל`, `צַדִּיק`, which the Laws use
  rightly); the law and ritual tables apply to every key, as before.
- **Renderings** (all in `renderings.md` M1–M3): the formulas F30–F38; MUŠ `נחש`, UR.SAG `גבור`, *nekumant-* `ערום`,
  AN.ZA.GÀR `מגדל`, *ḫattalu-* `בריח` as gates; *dankui- tekan* `האדמה האפלה`; *parā tarnumar* `שחרור`; *paršina-*
  `מתניים`; *kuer-* `חתך`; Appu's sons `רַע` / `יָשָׁר`; Elkunirša and Ašertu transliterated; the Sun-goddess of the
  Earth `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה`; GULGULLATU `גולגולת` [cognate] and *tarna-* "head-top" `קודקוד?`; *ḫatuga-* `נורא`;
  the partial-restoration rule (a sign or an ending restored → no bracket).
- **Gate fixes in the other Hittite tables** (proposed by the translators, applied by me after re-verifying every key):
  the law §H3 `גר` row no longer takes a bare `ש` prefix (it read `שגר` "sent" as ש־גר); licences widened for `חטא`
  (*wašdul*), `הקריב` (BAL, *šippan-*), `שמר` (*ḫāli*, É.EN.NU.UN), `שכב` (*šēš-*), `טהר` (*par-ku*), `כשפים` (UḪ₇); the law
  §H2 Sun-god row skips the Sun-goddess of the Earth; the ritual §H2 Mammai row no longer fires inside *šamamma*.
- **Accepted from the translators:** SISKUR `מנחה` in the myths (a split from the rituals' `טקס`), *pul-* `פּוּל`, Ì
  `שומן` (food) / `שמן` (anointing), *ḫandant-* `הגון`, *ḫuwappa-* `רשע`, and the other rows listed in each Proposals.
- **The dossier's Illuyanka excerpt was revised in four places, recorded for the lead in renderings §H8 (the dossier is
  untouched):** `ואל הסערה – את כל האלים` → vocalized (the DINGIR trap); `ואִינָרָה [… ל]זִיגָּרָתָּה` → `ואִינָרָה
  [ל]זִיגָּרָתָּה` (only *INA* is lost); `והכינה הכול בשפע:` → `וערכה הכול לָרֹב:` (*ḫandai-* and *mekki* as in the whole
  corpus); `כלי … כלי … כלי – ובכלים` → `דוד … דוד … דוד – ובדודים` ({DUG}*palḫi-*).

## Questions for the user
None that block. Two minor choices could be revisited:
1. **SISKUR** "offering / ritual" is `מנחה` in Ḫedammu (the gods' offerings from mankind) but `טקס` in the rituals: keep the
   split by sense, or one word?
2. **Appu's sons** are named by meaning, `רַע` and `יָשָׁר` ("Wrong" and "Right"), so the pun with "the evil road" / "the
   right road" stays visible; `צַדִּיק` was avoided to keep Gen 18:23–25 out of the line. Transliterate instead?

## Problems and skipped items
- **No quota stop**: every gate said GO (range A, `five_hour` `allowed`).
- **Left (recorded in `corpus.md`):** Telipinu versions 2–9 (CTH 324.2–9) and the other vanishing-god myths; the Kumarbi
  fragments (CTH 346.1–21, fetched); the 67 small Hittite fragments of the Song of Release (≈ 490 lines); the Hurrian side
  of the Song of Release (out of scope); the Hittite Gilgameš, Kešši, Gurparanzaḫ and the other HPM tales (not in the plan).
- **Zalpa** rests on one manuscript (KBo 22.2): its New Script duplicate KBo 3.38 is not in TLHdig; the obverse-reverse gap
  is marked. **The Song of Release** has no open modern translation: rank 3 was only the translators' memory, never quoted.
- **The brief's literature was wrong three times** and the translators corrected it from the tablets: Anu's "knees"
  (*paršina-* "loins"), Ištar's nakedness in Ullikummi (she dresses: the nakedness is Ḫedammu's), Telipinu's shoe (the text
  says "he made the right run left"); and Appu's details (the god's promise is "one son"; the cow's human calf is not in
  our fragments; the Sun-god passes the case to Ištar).
- **Escapes left in the files** (`[היתר שער: …]`, `[היתר שם: …]`, `[סטייה מן הנוסחה: …]`), each with its reason; some became
  unnecessary after the gate fixes (harmless). The law formula F8 (*pāi* `ייתן`) still fires on the imperative "give!" and
  on Appu's narrative present (escaped; restricting F8 to the law keys is left for the lead), and the ritual F18 fires on
  the noun *aššul* in the Song of Release.
- Uncertain readings (cruxes) are marked in the texts and listed in each project's Proposals; the fragments of Ḫedammu
  stay in HPM's order, not the story's.
- A few mistakes of the coordinator's own pre-set rows were caught by the translators (the `illuyank` name row against the
  dossier's `הנחש`; F35's `liliwant` vs *liliwanduš*; the Ullikummi and Upelluri name regexes).

## Cross-corpus splits left for the lead
- **Ḫedammu into the fifth-day dossier** (the plan), and the **4 pending revisions of the dossier's Illuyanka excerpt** in
  `מיתוסים-חתיים-וחוריים/renderings.md` §H8 (apply to `מיתוסים-אוגריתיים/3-תיק-היום-החמישי/annotated-IL.rtl.md`, then
  delete the rows; `verify IL` and `dossier_tools.py verify` check both sides).
- SISKUR `מנחה` (myths) / `טקס` (rituals); *ḫenkan* `המוות` (Zalpa) / `מגפה` (rituals); *waḫnu-* `סובב` (KU) / `המיר`
  (Instructions); *ḫarnink-* `השמיד` (myths) / `השחית` (HL2 107.2); *ḫarp-* `הצטרף` (myths) / `נפרד` (Laws); *šarra-*
  `חצה` (songs) / `חלק` (Appu, the Laws); *maz(z)-*; the full list of splits kept by sense is renderings M3.
- `שליח` for both ṬĒMU and *ḫalugatalla-*; `שיגר` for *peya-* and *uiya-*; `קרן` for SI and *kalmara-*.
- *kupri-* "bitumen" (HE 25:15–17) = the Akkadian loan *kupru* = `כֹּפֶר` [cognate, Gen 6:14], escaped twice past the law
  §H3 `כפר` row (NEVER): a licence for `kupri` is proposed.
- `חרון` (Hittite *karpi-*) is also Gilgameš's word for *libbātu*; `השמיד` also the Sumerian *ḫalam* (flood references):
  cross-language, allowed by the 2026-10-30 principles.
- The Kumarbi cycle ↔ Hesiod's Theogony is compared only in the apparatus (no Hebrew aligned); the Ullikummi cutter ↔ Enūma
  eliš's split Tiāmat and the creation corpus's "no `הבדיל`" rule (guidelines §6.7) are consistent.
