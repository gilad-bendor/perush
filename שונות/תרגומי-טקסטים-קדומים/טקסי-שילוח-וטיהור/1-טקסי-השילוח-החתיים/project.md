# Project 1: the Hittite elimination rituals ("rituals of sending away")

## Scope
Four rituals from Arzawa and Kizzuwatna (western and southern Anatolia), all in New Script copies of Middle Hittite
traditions, as one project (the survey's recommendation, `../../curation-surveys/world-survey--anatolia--2026-10-21.md`
§2.3.1), keys of `../../tools/hittite_tools.py`:
- **AS** – the ritual of **Ašḫella**, man of Ḫapalla, against a plague in the army (CTH 394; HPM ed. A. Chrzanowska;
  109 clauses, §1–§9): rams tethered before the officers' tents at night, an adorned woman sent with them to the enemy.
- **UH** – the ritual of **Uḫḫamuwa**, man of Arzawa (CTH 410; HPM ed. S. Görke; 33 clauses, §1–§4): a male sheep (*UDU.NÍTA*, not a
  ram: R1a) crowned with a wreath of coloured wool, driven to the enemy land, "to the god of the road".
- **PU** – the ritual of **Puliša** against a plague brought from the enemy's land (CTH 407; HPM ed. B.-J. Collins,
  English; 56 clauses, §1–§8 + colophon): a prisoner and a woman (or a bull and a ewe) sent back to the enemy god.
- **AM** – the ritual of **Ambazzi** (CTH 391.1; HPM ed. B. Christiansen; 260 clauses, 57 §§): a mouse carries the evil
  "to the high mountains, the deep valleys"; the Luwian gods Tarpattašši and Alauwaimi; **AM2** – its second version
  (CTH 391.2; 23 clauses).

## Base
The HPM critical editions ("Beschwörungsrituale der Hethiter", CC BY-SA 4.0): `../../sources/HPM/BESRIT--CTH-*`
(composite per clause + every manuscript; the editors' translations are rank 3: `hittite_tools.py tr KEY`, after
drafting). Word glosses from TLHdig (`../../sources/TLHdig/CTH-394/` etc., by form). Rank 3 / 4 records: Mouton 2016
(LAPO, French), Christiansen 2006 (StBoT 48, Ambazzi), Bawanypeck 2005 – ©.

## Line numbering
The HPM clause numbers (one Hebrew line per clause; "73a", "86a" as HPM); the § in the `## ` heading.

## Bible (look for)
**Lev 16:5–10, 20–22, 26** (the goat for Azazel: the animal that carries the evil away, the man who leads it, the camp);
Lev 14:4–7, 49–53 (the bird released "on the face of the field"; cedar, crimson, hyssop ↔ the coloured wool); 1 Sam 6:2–9
(the Philistines send the plague back to its god with golden mice and a gift: Ambazzi's mouse, Puliša's "appeasement"
of the enemy god); Zech 5:5–11 (the woman in the ephah carried off to Shinar); 2 Sam 24 (a plague in the land); m. Yoma 4:2,
6:6 (the crimson thread on the goat's head ↔ Uḫḫamuwa's coloured-wool crown). Tags: [equivalent], [divergence],
[absent]; the notes say whether a historical link is argued (Wright 1987, Janowski & Wilhelm 1993) or the parallel is
typological.

## Open decisions
- **Still open (for a later reader / the lead):** the cruxes listed in Proposals and Reviews (a)–(b) (AS 16, 52–56, 69; UH 13–14, 25;
  PU 21, 27/47, 34, 36, 43; AM 191, 216–220, 228 DAM, 235, 248, 257; AM2 17); UDU.ŠIR `אַיִל` – qualify it "breeding" like MÁŠ.ŠIR
  `תיש־ההרבעה`?; Etana's *anzillu* `תועבה` vs AM2's ANZELLU `אִסּוּר`.
- **2026-10-30, Sub4, before the first line** (the ritual corpus `renderings.md` §R1a, H3/H5/H6/H9; the law file's H3/H4 licences):
  *dai-* `שָׂם` with the Laws (R1's `הִנִּיחַ` dropped); *penna-* `הִסִּיעַ` / *unna-* `נָהַג` with the Laws; *anda tarna-*
  `הִכְנִיס` (`שִׁלַּח` only for release); UH's animal is UDU.NÍTA `כֶּבֶשׂ`; ANZELLU `אִסּוּר` beside *ḫurkil* `תּוֹעֵבָה`;
  LÚ ŠU.DAB `אָסִיר`; F17 (the plague's god), F18 (*aššuli* `בטובה`), F19 (the dawn), F21 (*kāša* `הִנֵּה`); new traps
  (`אָדֹם`, `לָבָן`, `עֵז`, `חֵלֶב`, `בָּר`, `אֹדֶם`, `עֲטָרָה`); new reserved words (Lev 1:4 `נרצה`, 1 Sam 6 `אשם`/`טחורים`,
  `ארץ גזרה`, `עתי`, `מלאך`, Zech 5 `איפה`/`שנער`); gate licences widened (`נשא` *pēdāu*, `תועבה` *ḫurkil*, `תיש` MÁŠ.ŠIR,
  `סמך` forms). No MUŠEN and no ERIN in the five texts: Lev 14's bird and cedar are [absent].

## Progress
- 2026-10-24: base (HPM, TLHdig), tool, renderings (`../renderings.md`, `../../חוקים-ובריתות/renderings.md` §7, §H2–§H9),
  brief – before drafting.
- 2026-10-30 (Round 4 run 6 sub 4): renderings checked against the composites (R1a; commit 4620072); one Opus translator in four
  parts – AS; UH + PU; AM 1–110; AM 111–260 + AM2 – each merged into `../renderings.md` §R2–§R5; review passes (a) fidelity
  (55 lines), (b) consistency (12), (c) Hebrew (20 + headings); the intros; built; parallels indexes (below, and
  `../parallels-index.md`); print stub. **All five texts complete (first translation, reviewed).**

## Proposals

### Part 1 (AS)
Written 2026-10-30 by the translator, after drafting AS 1–107 (109 clauses) in `annotated-AS.rtl.md`; `verify AS`: 0 problems;
`check_bible_quotes.py`: 0 problems (it caught two remembered verses in my first draft – Num 8:19, Num 19:2 – both fixed).
The rank-3 translation (Chrzanowska) was read after the draft; note that the HPM `notes` field of `edition.json` (the T-notes,
the editor's translation notes) was seen while reading the edition before drafting.

**Fixed strings for UH, PU, AM (copy byte for byte; unvocalized except names / traps):**
- F17, the plague's god: `איזה אֵל אשר עשה את המגפה הזאת` (AS 17, 26 with an opening `"`; AS 81 adds `בקרב המחנה`, no quote:
  no *=wa*, an apposition to `לָאֵל ההוא`). AS 16 *kattan weḫattari*: `"איזה אֵל אשר סובב למטה –`.
- F18, the turn in favour: AS 84 *andan aššuli neyāru* = `וְיִפָּנֶה פנימה בטובה!"`.
- *takšulant- ēšdu* (AS 83): `בשלום יהיה!`; *menaḫḫanda* `כלפי` (IN).
- "Whoever finds it" (AS 40): `ומי שימצא אותה –` (*kuiš wemiyazzi*: `מי ש־` + future, the HL2 ruling); AS 41 the wish
  `… הארץ ההיא תיקח לה!"` (*KUR-eanza* = the ergative of *utne*; HPM "jene Bevölkerung").
- The god's meal: AS 55 `ואתה, הָאֵל – כְּאֵל אכול ושתה!` (*DINGIR-LIM-nili* `כְּאֵל`, as Gilgameš *kīma ili*); AS 82
  `"והָאֵל ההוא – יאכל וגם ישתה!` (iteratives without `תמיד`); the participants AS 72 / 97 `ואוכלים,`, AS 85 `ואוכלים ושותים,`.
- The day's end: `והם באים הלאה.` (AS 58, 73, 86, 98: *n=at(=za) arḫa uwanzi*); `היום השני – [תַּם].` / `היום השלישי – תַּם.` (TIL / QATI `תַּם`).
- F19 the dawn: `ביום השני, כשעולה השחר, בהשכמה, מיד –` (third, fourth: `השלישי`, `הרביעי`).
- *anda kiššan memanzi*: `ועליהם כך אומרים:` (AS 15, 25); *anda QĀTAMMA=pat memiškanzi* `ועליהם כך ממש אומרים:` (37);
  *namma=kan anda kiššan memaḫḫanzi* `ועוד: עליהם כך אומ[רים]:` (51). *kāša* `הנה`; *kinuna* `ועתה` (F3).
- The drive: *n=aš LÍL-ri (namma tamēdani AŠRI / pedi) pennianzi* `ואותם מסיעים אל הבָּר(, עוד אל מקום אחר);` (34, 43, 77, 90);
  AS 20 `ובשחר אני מסיע אותם אל הבָּר.`; *unna-* `נוהגים` (75, 87).
- The offering portions (AS 70 = 95): `ואת החזה, את הכתף הימנית, את הכבד ואת הלב – מן המבושל – שָׂם על העלווה.` / 95 `… את הלב וגם
  את הלחם העבה – מן המבושל – שָׂם בחזרה.`; *laḫḫurnuzzi išpar-* `ועלווה פורשים( על הקרקע / מתחת);`; "drinking the god" `… – שלוש פעמים שותה`.
- *idālu-* `רע` / *idālu* (n.) `הרעה`; *kī idālu ÚŠ-an* `המגפה הרעה הזאת`.

**New renderings (Hittite → Hebrew, lines):** *kiš-* "happen" `נעשה` (2, 5, 107; HL1); *ḫandai-* "prepare, arrange" `הכין` (7, 42, 49,
68, 76); *ḫarki-* `לָבָן` (= BABBAR) and *dankui-* `שחור` (= GE₆) (8); *tukk-* (mp) "matter" `חשוב` (9); *šuel* `חוט`; *taruppai-*
`אגד` (11: `שוזר` hit the `זר` reserved regex, see below); NA₄ NUNUZ `אבן־חרוז`, KAMKAMMATU `טבעת`, A.GAR₅ `עופרת` (= Sum. *a-gar₅*,
Curse of Agade), AN.BAR `ברזל` (12); *ḫamank-* `קשר` (13, 14); GIŠ ZA.LAM.GAR `אוהל` (= Sum. *za-lam-ĝar*, 14, 22); GÚ `צוואר`, SI
`קרן` (HL); *weḫ-* `סבב` (16, IN); *išḫiya-* "tie up" `אסר` (18; HL1's "impose" `חייב`: a split by sense; Gen 49:11 in the note);
*warši-* (mp) `הירגע` (19, 30; IN *waršanu-* `הרגיע`; HPM "begnüge dich"); *piddai-* `הגיש` (21, HL1); DUG KUKUBI `קנקן`, DUG GÌR.GÁN
`כד` (pl. `כדים`; HL2 has `כד` for a bare DUG: a mild overlap), GAL `כוס`, GIR₄ `חרס`; *ašaš-* `הושיב` (22); *ar-* (mp) "stand"
`עמד` (27, IN); *wargant-* `שמן`, NÍG.GIG `כבד`, ŠÀ `לב`, ÚR `ירך` (28; HPM "Glied"); AMĪLŪTU `בני האדם` (29, 38; *antuḫša-* stays
`אדם`, 56); *pukk-* `שנוא` (29); *ḫink-* "bow" `הרכין (ראש)` (31, 32, 57; HL1's "present" `הציג`: a split by sense – `קד` was
rejected: `קדים` reads "east wind"); *pai-* + verb (phraseological) `הולכים ו־` (35); *pittalai-* "abandon" `הפקיר` (35); ZAG
"border" `גבול` (HL2); *anzel* `שלנו` (36); *ar-* "arrive" `הגיע` (36, 63, HL1); GU₄ pl. `שוורים`, ANŠE.GÌR.NUN.NA `פרדים`;
*uda-* `הביא` (39); *ḫatta-* "pierce, cut, slaughter" `דקר` (46; `שחט` is *ḫuek-*'s); *pittalwant-* `*פשוט*` (47); *zanu-* `בישל`,
*zeyant-* `מבושל` (47, 54, 70, 95); *laḫḫurnuzzi* `עלווה`; *išpar-* `פרש` (48, 78, 94); *tagān* `על הקרקע` (46, 60, 94); GÍR.TUR
`סכין קטנה`; *ḫantezzi palši* `בפעם הראשונה` (52); *ḫantezziaz* `בראשונה` (68); *aššanu-* `הסדיר` (59, IN); *kuitman* "while"
`כל עוד` (59; HL1 "until" `עד אשר`: split by sense); *āra* `מותר` (61, HL1); MUN `מלח`; *išḫuwa-* "strew" `זרה` (64; IN 16.13
"heap" `ערם`: split by sense); *arra-* "wash" `רחץ` (65; **for the lead:** IN has *warp-* "bathe" `התרחץ` / `רחוץ` – one Hebrew root
for two Hittite verbs; I kept `רחץ` for *arra-* because the meaning is exact, and Lev 16:26 / Deut 21:6 stay in the apparatus;
the alternative is `שטף` for *arra-*); IZI `אש`, *warnu-* `שרף` (66, R1); *ištarna* `בין` (67, HL1) / `דרך` (33, the selftest line:
split by sense); *aniyatt-* `*הציוד*` (69, 71; HPM "Opferzurüstung"); GABA `חזה`, ZAG.UDU `כתף`, ZAG `ימני` (70, 95); 3-ŠU "three
times" `שלוש פעמים` (71, 96); UDU.'SÍG+MUNUS' `רחל` (R1a); *aniyan* (colophon) `רשומים` (100; HL1 *aniya-* `עבד`: split by sense);
INIM `דבר` (101, 104, 106); MU.KAM `שנה`, *ḫarrant-* `מקולקלת` (102); *kilāuwaš* transliterated `הַקִּילָאוּוָה(?)` (103; HPM *kelu*);
DUB.1.KAM `לוח אחד` (99; HPM "Eine Tafel"; HL1's `לוח ראשון` is a series tablet); *nai-* with *anda* and beads "thread" `השחיל` (12;
R1 *nai-* `הִפְנָה`, AS 84 `יִפָּנֶה`: split by sense).

**R1 / R1a rows changed or questioned (with the evidence):**
- **R1a "AS 60, 62 *dā-* 'takes'": AS 60 is *dai-* "put".** *nu=za UNŪTUM tagān katta UL kuiški dāi* = "nobody puts the utensil down on the
  ground"; 62 *šarā=za=at namma UL dāi* is *šarā dā-* "pick up" ("and he does not pick it up again"). The pair "put down / pick up" is
  the sense (so HPM: "legt niemand das Gerät … auf den Boden … nimmt es später (wieder) auf"). Drafted so.
- **The brief's "to the enemy's border … a place they do not know" (AS 35–36):** the tablet has *kuedani pidi anzel UL aranzi* "a place
  where ours (= our people) do not arrive" (*ar-* "arrive", the free-standing genitive *anzel*; HPM "an den unsere (Leute) nicht
  gelangen"); there is no "know". The parallel to `אֶרֶץ גְּזֵרָה` stands, but as a [divergence] defined from "our" side.
- R1 *nai-* `הִפְנָה`: kept for "turn" (84), split for *anda nai-* "thread into" (12).
- R1 *kattan*: rendered by sense – `אצל` with a d.-l. (21, 23, 56), `מתחת` "underneath" (48), `עמם` "along" (44), `זה לצד זה` (49),
  `למטה` (16, 18, 30; *katta* `למטה` as HL2); HPM has "hier" at 18. A fixed table row may help UH / AM.
- R1a *akkiškizzi* `מֵתִים` followed (105).

**Gates / traps that seem wrong or missing:**
- **The `זר` reserved regex** (`(?<![א-ת])[ובלהמכש]*(?:זר|זרים|זרה)`) matches `שוזר` (ש + ו + זר), and would match `מזרה`, `שזרה`, `וזרה`
  ("and strewed"), `כזר`: the prefix class `[ובלהמכש]*` lets any run of those letters precede `זר`. Suggest limiting the prefix to
  at most two letters and excluding `ש` + `ו` sequences, or listing the participle forms of `זרה` "strew" (`זורה`, `זורים`) and
  `שזר` as allowed. (AS 11 was changed to `מאגד`, not bent around the gate: `אגד` is the better word anyway.)
- `חזה` "breast" (AS 70, 95, ↔ Lev 7:34 `חֲזֵה הַתְּנוּפָה`) and `כתף` / `שוק`: not gated; GABA is the real counterpart, so no gate is
  needed, but `שׁוֹק` (Lev 7:32) should stay out of the Hittite lines (ZAG.UDU = `כתף`): perhaps H3.
- `קדים` (from `קד` "bow") reads "east wind": a trap if a later translator chooses it.
- The selftest ok-lines **AS 17** (with an opening quote; AS 17 has none, since 16 opens the speech) and **AS 84** should be replaced
  by the drafted lines: AS 17 `איזה אֵל אשר עשה את המגפה הזאת –`, AS 84 `וְיִפָּנֶה פנימה בטובה!"`.
- The title `# טקס אַשְׁחֶלָּה נגד מגפה במחנה` contains the gated `מגפה` / `מחנה`; `verify` does not complain (headings are not
  gated), which is right.

**Cruxes:** 16 *kattan weḫattari* (HPM "sich (her)abwendet"; ours `סובב למטה`); 18 *kattan* ("here" / "down"); 32 the king (case of
LUGAL); 47 *pittalwanteš*; 52–53 (lacunae; Dinçol's restorations too long); 54 C's *ḫūišawaz*; 56 *antuḫši=ma=wa=za kattan lē pešti*
(CHD "do not give yourself under a human being", followed and marked `*…*`; HPM "dem Menschen aber überlasse nichts"); 57 *n=at*
(subject, as HPM); 63 *arḫa ar-* (`מגיעים הלאה`: "finish / go away"); 69 *aniyatt-*; 91 GU₄ for the GU₄.MAḪ of 87; 103 *kilāuwaš*.

**Notes for the lead:** the Bible parallels are tagged and the historical question (Wright 1987; Janowski & Wilhelm 1993) is stated
in words at AS 10 and 35; new parallels worth the index: AS 16 ↔ Deut 23:15 (the god walking in the camp; weaker if *weḫ-* = "turn");
AS 17 ↔ 1 Sam 6:9 (`הוּא עָשָׂה לָנוּ אֶת הָרָעָה`); AS 18 ↔ 1 Sam 6:7 (`וַאֲסַרְתֶּם`); AS 67 ↔ Num 31:23–24 (through the fire, back to
the camp); AS 88 ↔ 1 Sam 6:7, Num 19:2 (the unused animal); AS 70 / 95 ↔ Lev 7:32–34 (breast and right side); AS 75 ↔ Lev 11:7 (the
pig as an offering, [absent]).

### Part 2 (UH, PU)
Written 2026-10-30 by the translator, after drafting UH 1–33 (`annotated-UH.rtl.md`) and PU 1–56 (`annotated-PU.rtl.md`). `verify UH`
and `verify PU`: 0 problems (PU 17 carries one escape, below); `check_bible_quotes.py` on both files: 0 problems. Rank 3 (Görke, Collins) was read
only after the drafts; for UH and PU I read only the textual notes of `edition.json`, not the translation notes. **AS 11:** I keep
`מאגד` (*taruppai-* "gather, unite": `אגד` is the better word; R2 already lists it).

**Fixed strings (copied from AS, or fixed here for AM):**
- F17: UH 11 `"איזה אֵל של ארץ האויב אשר עשה את המגפה הזאת –`; UH 15 (2nd person) `ואילו אתה, איזה אֵל אשר עשית את המגפה הזאת –`;
  PU 42 `"איזה אֵל [של אויב] אשר [עשה את המגפה הזאת] –`.
- **The indefinite god, fixed:** *kuiški DINGIR-LUM* = `איזשהו אֵל` (UH 3 `ואם איזשהו אֵל של אויב עשה אותה,` = the selftest line,
  unvocalized; PU 4 `[… בין] איזשהו אֵל [זכר, או אֵלָה …]`; PU 20 `"אם אולי את המגפה הזאת – איזשהו אֵל זכר של ארץ האויב עשה,`).
  DINGIR.MUNUS / *ŠA DINGIR MUNUS-TI* = `אֵלָה` (always vocalized: "these"); DINGIR LÚ = `אֵל זכר`.
- F18 as an imperative: `פְּנֵה פנימה בטובה` (UH 17 `ואל ארץ חַתִּי – פְּנֵה פנימה בטובה עוד!"`, UH 26 `ואילו אל ארץ חַתִּי – פְּנֵה פנימה
  בטובה!"`; PU 24 / 46 `ואילו אל המלך, …, אל המחנה ואל ארץ חַתִּי – פְּנֵה פנימה בטובה עוד!`); UH 25 without *aššuli* `… אֶל ארצך פְּנֵה פנימה!`.
- *takšul-* `לשלום` (UH 12 `הנה, את הכבש המעוטר הזה – לך, לָאֵל, לשלום נהגנו;`), *takšulai-* `עשה שלום` (UH 14 3sg, UH 16 imper.
  `כך עשה שלום!`); *menaḫḫanda* `כלפי`.
- *EGIR-pa … pēdau* `בחזרה … יישא!` (PU 26 `ובחזרה [אל ארץ האויב יי]שא!"`, PU 45 `… [בחזרה] אל ארץ האויב יישא!`).
- *galanganza ēš* `הֱיֵה מפויס!` (PU 23, 44; with the instrument PU 23 `באיש המקושט ה[זה] הֱיֵה מפויס!`).
- *(anda) kiššan memanzi* `ועליו / ועליהם כך אומרים:` (UH 10, 20); *ANA LÚ … anda kišan memai* `ואל האיש … כך אומר:` (PU 16, 19).
- The drive: UH 9 `ואת הכבש – אל דרך האויב מסיעים קדימה.`, UH 18 `… אל ארץ האויב מסיעים הלאה.`; *unna-* `נוהגים` (UH 5, 27; PU 28).
- The wool: UH 6 `ומכניסים צמר כחול, צמר אָדֹם, צמר ירוק, צמר שחור וצמר לָבָן,` (= the selftest line); PU 32 the same colour order.
- *EGIR-anda* `אחר כך` (IN; UH 19, 27; PU 28, 47, 49).

**New renderings:** KILĪLU `עֲטָרָה` (vocalized once), *ḫaršanallai-* `עיטר`, ptcp. `מעוטר` (R1a; UH 7, 8, 12, 18); KASKAL `דרך` (IN; UH 9,
33; PU 9, 10); KÉŠ "knot, bond" `הקשר?` (UH 13; Görke "Herde"; B has BÀD "wall"); *daššu-* `חזק` (IN); *maḫḫan* "as" `כמו ש־` (HL2);
ANŠE.KUR.RA DINGIR-LIM `סוסי הָאֵל`; ŠÀ.GAL "fodder" `מספוא`; Ì.UDU `חֵלֶב` ★ (R1a); *turiya-* `רתם` (HL1); *išpai-* "be sated" `שבע`;
GIGIR `מרכבה`; *iški(ya)-* "smear" `מרח` (`משח` avoided: IN's GUDU₁₂ is `מְשׁוּחַ`); **{D}IMIN.IMIN.BI "the Seven" = `הַשִּׁבְעָה` ★**
(UH 28: the composite prints `{D}INIM.INIM.BI`, but both manuscripts have IMIN.IMIN.BI; Görke "Siebengottheit"; = Akk. *Sebettu*, Erra's
`הַשִּׁבְעָה`; **proposed H2 row**: `\{d\}imin\.imin\.bi|\{d\}inim\.inim\.bi` → `הַשִּׁבְעָה` ★, "always vocalized: 'the seven, the oath'");
*kuen-* `הרג` (UH 30, HL1); GA.KIN.AG `גבינה` (R1a); EMṢU alone `קֵבָה(?)` (HL2 `קיבות(?)`; Görke "Lab"), NINDA EMṢU `לחם *חמוץ*`; DUG
*pulla-* `כלי־פּוּלָּה`; GIŠ INBU `תנובה` (HL2); DINGIR ŠA KASKAL-NIM `אֵל של הדרך` (UH 33). PU: *walḫ-* (GUL-aḫ-) `מחץ`; *iya-* (mp)
"go, march" with *arḫa* `יוצא` (PU 3, 7; Collins "returns"; IN 19.3 had `יתלוו`: by sense); *ēpp-* `תפס` (HL1); *kattan tiya-* `עומדים
לצד־`, *EGIR SISKUR tiya-* `עומד מאחורי הטקס` (idioms, as IN; *tiya-* alone `נכנס`, PU 10); *uwate-* `הביא`; NÍ.TE `גוף` (IN);
TÚG NÍG.LÁM "festive garments" `בגדי פאר`; *waššiya-* "clothe" `הלביש` (the causative of *weš-* `לבש`, IN); *āššu-* "good" `טוב` (PU 17,
53; HL1's *āššu-* "property" `רכוש`: two words); *uiya-* "send" `משגר` (PU 17; `שלח` is *tarna-*'s; Ugaritic *lʾak* has `שִׁיגֵּר` too: a
shared common word across languages); PŪḪU `תחליף` (HL2); *šalli-* `גדול`; ÚR `ירך` (as AS 28); *galank-* `מפויס` (R1a); *karp-* "lift"
`הרים` (PU 25, R1); GEŠTU `אוזן` (HL1); *ašušant-* "with earrings" `בעל־עגילים`; KA×U `פה` (IN); *ḫuittiya-* `משך` (R1; PU 32 "from the
king's mouth draws forth"); the colour verbs (R1a) `מאדים` (*ēšḫarwaḫḫ-*), `מוריק` (*ḫaḫlaḫḫ-*, restored), `משחיר` (*dankuwaḫḫ-*), and
the restored *[ḫarganušk]i?* `[ומלבין?]`; ÉRIN.MEŠ `אנשי צבא` (HL1); IDI (Akk.) "know!" `תדע`, *šakk-* `דע` (PU 36–37); ZÍZ `כוסמת`
(HL2); *mālant-* `*מקובל*` (PU 43; Collins "powerful(?)"; `לרצון` reserved); ADDIN (Akk.) `נתתי`; *ḫuinu-* "make run" `הריץ` (PU 48);
ṬUPPU `לוח`; *kuit* "because" `מפני ש־` (PU 34, with Collins).

**Gates / tables:**
- **The H3 `גר` regex** (Lev 22:10, 18) matches `משגר` (the participle of `שִׁגֵּר`, PU 17): the prefix class `[ובלהמכש]*` reads `מש` as
  two prefix letters – the same flaw as the `זר` regex fixed in R2. PU 17 carries `[היתר שער: משגר …]`; please apply the R2 fix to
  `גר` / `גרים` / `הגר` (and check `תושב`, `נדר`, `זבח` the same way).
- Proposed H2 row for {D}IMIN.IMIN.BI (above), and a trap: unvocalized `השבעה` / `לשבעה` reads "the oath" / "to seven".
- The selftest's UH 6 and UH 3 ok-lines match the drafted lines (UH 3 now unvocalized: `ואם איזשהו אֵל של אויב עשה אותה,`); UH 12's
  err-line stays valid (`לרצון`).

**Cruxes:** UH 13–14 (KÉŠ "knot" or "herd"; the subject of *takšulāizzi*); UH 25 (the Storm-god as the enemy's god, or Ḫatti's?); UH 28
(the composite's INIM.INIM.BI); UH 32 EMṢU; PU 3/7 *arḫa iya-* ("go out" / "return"); PU 21 *PŪḪĪ=ŠU* (whose substitute?); PU 27 / 47
*ŠA DINGIR MUNUS-TI* ("the words of a goddess" / "in case the deity is female"); PU 34 *kuit* and the last colour verb; PU 36 *[UL] IDI*
(imperative, with Collins; elsewhere "I do not know"); PU 43 *mālant-*; PU 38 *dāi*.

**For Ambazzi (part 3) – shared words fixed so far:** the wool and colours (SÍG `צמר`; ZA.GÌN `כחול`, SA₅ `אָדֹם` ★, SIG₇.SIG₇
`ירוק`, GE₆ `שחור`, BABBAR `לָבָן` ★; the colour verbs above); *šuel* `חוט`; *anda tarna-* `הכניס`, *taruppai-* `אגד`; *ḫuittiya-*
`משך` (AM's "wool drawn from feet to head"); KA×U `פה`; Ì / Ì.UDU `חֵלֶב` ★; GA.KIN.AG `גבינה`; INBU `תנובה`; NINDA.GUR₄.RA `לחם
עבה`; DUG ḫuppar `קערה`, KUKUBI `קנקן`, GAL `כוס`; *zanu-* `בישל`, *zeyant-* `מבושל`; *kuen-* `הרג`, *ḫatta-* `דקר`; the god's portions
(AS 70 / 95: GABA `חזה`, ZAG.UDU ZAG-an `הכתף הימנית`, NÍG.GIG `כבד`, ŠÀ `לב`); "drinking the god" `… – שלוש פעמים שותה`; the gods
`אֵל הַסְּעָרָה`, `אֵל הַשֶּׁמֶשׁ`, `אֵל הַמָּגֵן`, `הַשִּׁבְעָה`; *šipant-* `הקריב`; *idālu-* `רע`, *idālu* `הרעה`; *peda-* `נשא`, *EGIR-pa …
peda-* `בחזרה … יישא`; *arḫa tarna-* `שילח הלאה`; *penna-* `הסיע`, *unna-* `נהג`; *PŪḪU* `תחליף`; *galank-* `מפויס`; *walḫ-* `מחץ`;
*ištarna* `בין` / `דרך`; *ar-* "arrive" `הגיע`; the mouse is not in AS / UH / PU (PÉŠ.TUR `עכבר קטן` from R1).

### Part 3 (AM 1–110)
Written 2026-10-30 by the translator, after drafting AM 1–110 (§1–§25′) in `annotated-AM.rtl.md` (placeholder `<!-- טרם תורגם:
111–260 -->`). `verify AM`: 0 problems; `check_bible_quotes.py`: 0 problems. Christiansen's German read after the draft (only the
edition's textual notes before). Two `[היתר שם: …]` escapes (AM 93, 105), below.

**The speaker (decided once, in the intro and at AM 1, 14):** the 3sg prescriptions are Ambazzi herself – the same acts alternate
1sg / 3sg (AM 3–7 *išḫuwaḫḫi … kištanumi … memaḫḫi* against 51–55 *išḫūwāi … kištanuzi … memai*), and AM2 18 names
{MUNUS}ŠU.GI "the old woman" as the subject – so feminine participles (`אומרת`, `שׂמה`, `זורה`, `מכבה`, `מושכת`, `לוקחת`, `מפנה`,
`כורכת`, `מקריבה`, `פורסת`, `מפזרת`, `דוקרת`, `כורתת`, `מבשלת`, `משלחת`, `מזמנת`); her 1st person `אני זורה`, `אני מכבה`, `אני
אומרת`, `אני נותנת`; the 3pl verbs (`קולים`, `משלחים`, `מבשלים`) are the helpers.

**Refrains – the fixed Hebrew (part 1 = first copy; copy byte for byte, person / number as the Hittite has it):**
| Refrain | Fixed Hebrew (first full copy) | Copies |
|---|---|---|
| The bowl | `ואל אגן אָדֹם – עצי־חוּוַלִּי אני זורה,` / 3sg `ועצי־החוּוַלִּי – אל האגן האָדֹם שָׂמָה;` (51 *dāi*; 128 *šuḫḫāi* → `מפזרת`) · `ועל גביו – תבואה (ו)כוסמת אני זורה;` / `… זורה;` · `ואותו קולים,` · `ועוד: את עצי־החוּוַלִּי במים אני מכבה,` / `ואת עצי־החוּוַלִּי במים מכבה,` · `ואני אומרת:` / `ואומרת:` | 3–7; 51–55; 128–132; 207–208 |
| The extinguishing | `"כשם שאת אלה כיביתי,` (*kē*) / `"כשם שאת זה כיביתי,` (*kī*) · `כך גם הרעה שעל האדונים – תכבה!"` (134, 210 add *inan* "sickness": `כך גם הרעה – החולי – שעל האדונים – תכבה!"` proposed) | 8–9; 56–57; 133–134; 209–210 |
| Bow, arrows, hide | 58–59 (the full copy): `וכדורי בצק, חוּרְטַלִּים, קשת אחת של אֶזָּה – ועליה מיתר משוך –,` · `שלושה חיצים של אֶזָּה; וגם לפניהם – כדורי בצק, בריח, תַּרְזוּ; ואילו לפניהם – עור־שָׁאלָה קשור.` · `ואת כל זה על הפַּדַּנִי שָׂמָה.` (10 begins `ותבואה, כוסמת, …`, 135 *paddani šuḫḫāi* `… על הפַּדַּנִי מפזרת;`) | 10–14; 58–60; 135–138; 200–206; AM2 12 |
| The wool, feet to head | `ולוקחת לה צמר־אַשַׁרָה;` · `ואותו – על האדונים, מרגליהם עד לראשו, מצד זה ומצד זה – מושכת;` (16, 140 with `למעלה`, other order: `… מרגליהם, מצד זה ומצד זה, עד לראשו – מושכת למעלה;`) · `ומאחור, וגם למטה – מגבם מושכת;` · `ועוד: אותו מעליהם לוקחת הלאה;` · `ואותו על הפַּדַּנִי שָׂמָה.` | 15–19; 61–65; 139–143; 211 |
| "Draw out the evil" | `ואומרת:` · `"משוך ממנו הלאה את המשיכה הרעה – מן הראש, מן הידיים, מן הרגליים, מכל איבר!` (145 `ממנם`, pl.) · `ואותה – לאנשים הרעים, ליריבים – תן!` · `ואילו לאדונים – חיים, כוח, שנים ארוכות תן!"` (*innarawatar* `כוח`) | 20–23; 66–68; 144–147; AM2 1–5; 256 (`חיים, כוח, שנים ארוכות`) |
| The bowstring likewise | `וגם את המיתר – כך עושה;` · `וגם אומרת כך ממש.` | 24–25; 69–70; 148–149 |
| The fuller | `ובד־פשתן עליהם כך קושרת;` (26; 71 `ועוד: את בד־הפשתן – כך עושה;`) · `ואומרת:` · `"כשם שאת בד־הפשתן הזה – הכובסים עובדים את ה*גס*,` · `וממנו (הלאה?) את המָרִיחְשִׁי מטהרים,` · `והוא מלבין –` · `כך את החולי הרע של האדם הזה – יטהרו הָאֵלִים מן הגוף הלאה כך!"` | 26–30; 71–76; 150–155; AM2 6–11 (`ŠÀ.TAM` "stewards"; AM2 *tezzi* `אומרת`) |
| "Do not keep fighting" | `"X – אַל תיאבק בהם עוד!` · `לֵךְ – עם התַּרְזוּ הזה היאבק עוד!` · `ואת הרעה – מעליהם הלאה הרחק!"` (*nanna-* `הרחיק`) | 31–33; 77–79; 156–159 |
| The tin | `ומעט בְּדִיל – במיתר כורכת,` · `ואותו – אל האדונים, לימין, אל ידו ואל רגלו – מפנה.` | 34–35; 80–81; 160–161; AM2 18–19 (*ḫamank-* `קושרת`) |
| The mouse | `ועוד: אותו מעליהם לוקחת הלאה;` · `ואותו מפנה אל העכבר הקטן;` · `"לקחתי מעליהם הלאה את הרעה,` · `ואותה הפניתי אל העכבר הקטן;` · `ואותה העכבר הקטן הזה אל ההרים הגבוהים, אל העמקים העמוקים, אל הדרכים הארוכות יישא!"` | 36–40; 82–86; 162–167; AM2 20–21 |
| The release | `ואת העכבר הקטן משלחים הלאה.` / 3sg `… משלחת הלאה.` | 41; 87; 168 |
| "Take him – another to eat" | `"X – את זה קח לך אתה!` (88 *penni*: `הסע`) · `ואילו לאכול – אחר אנו נותנים לך!"` (review (c)) (89 `עֵז אני נותנת לך!"`) · `ואת השיירים מפזרת הלאה.` | 42–44; 88–89; 169–172 |
| The breads | `ועוד, במקום אחר – עלווה שָׂמָה;` / `ועלוות עצים שָׂמָה;` · `לחם עבה ארוך אחד – לָאֵלִים הזכרים של X – פורסת;` · `לחם עבה אחד – ל־X – פורסת;` · `ואותו על העלווה שָׂמָה.` | 45–46; 90–94; 173–177; 221–224 |
| The meat portions | `את הכתף הימנית מבשלים;` · `ואת (נתח) היד – לָאֵלִים הזכרים שָׂמָה;` · `ואילו את נתח־המוּחְרַי – ל־X שָׂמָה;` · `את המותן – לְמַמַּאי שָׂמָה;` · `ועוד – מקריבה.` · `את הכתף השמאלית – כך מקריבה;` · `ואת הכבד – כך מקריבה.` · `קרסול ימני אחד, הקדמי – לָאֵלִים הזכרים שָׂמָה;` · `חצי ראש, את החזה, את הבטן […] שָׂמָה;` · `ומקריבה.` | 97–110; 178–189; 233–245 |

**New renderings:** DÍLIM.GAL `אגן` (`קערה` stays *ḫuppar*); GIŠ *ḫuwalli-* / *ḫulli-* `עצי־חוּוַלִּי` (HPM "Wacholderholz(?)");
*ḫalki-* `תבואה`, *kar(a)š* `כוסמת`; ***šanḫ-* "roast" `קלה`** (AM 5, 53; a homonym of IN's *šanḫ-* "sweep, seek" `מטואטא` / `דרש`:
two words); *kištanu-* `כיבה` (IN), mp *kištai-* `כבה`; *maḫḫan … QĀTAMMA* `כשם ש… כך`; BĒLŪTU / EN.MEŠ `אדונים`; *ḫurtalli-*
transliterated (HPM "Gemengsel"); *pūrpūri-* `כדור`, *išna-* `בצק`; GIŠPAN `קשת`, GI "arrow" `חץ`; **SÍG *ištagga-* "bowstring" =
`מיתר`** (HPM; I first had a transliteration: corrected everywhere); *ēzza-* transliterated `אֶזָּה` (HPM "Rohr"); GIŠ *ḫattalu*
`בריח`; GIŠ *tarzu-* transliterated `תַּרְזוּ` (HPM "Sicherungsriegel": a second kind of bolt); KUŠ *šāla-* `עור־שָׁאלָה` (always
vocalized: "question"); GI *paddani-* transliterated `פַּדַּנִי` (HPM "Korb"); SÍG *ašara-* transliterated `צמר־אַשַׁרָה` (HPM "weiße
Wolle": `לָבָן` stays BABBAR / *ḫarki-*); *kēz kēzziya* `מצד זה ומצד זה`; *iškiša-* `גב`; *ḫuittiyaššar* `משיכה` (the figura etymologica
kept); ÚR "limb" `איבר` (AM; AS, PU `ירך`: split by sense, AM2 4 "nine limbs"); *idālawa-* `רע` (pl. `הרעים`); *ḫarpanalli-* `יריב`
(`אויב` is LÚ.KÚR); *innarawatar* `כוח`; GADA `בד־פשתן`; LÚ ÁZLAG `כובס` (HL2); *tannara-* `*גס*`; SÍG *mariḫši-* transliterated;
*ḫarkešš-* `הלבין`; *inan* `חולי`; *zaḫḫ-* `נאבק` (HL2); *it* (*pai-* imper.) `לֵךְ` (vocalized); *nanna-* `הרחיק`; NAGGA `בְּדִיל`;
*ḫulaliya-* `כרך`; *kunna-* `ימין`; *šuḫḫa-* `פיזר` (neither `שפך` nor `זרה`); *kuptar* `שיירים` (HL1); *paršiya-* of bread `פרס`
(HL2 "breach" `פרץ`: split by sense); *weriya-* `זימן`; *weḫ-* + *peran* `סובבים לפני (האדם)` (`לפנים` is gated to *karū*); UZ₆ `עֵז`
★; *ḫatta-* `דקר` (R2); *kuer-* "cut off" `כרת` (`חתך` is *karš-*, `קצץ` *kukkurš-*); *AŠAR 2-ŠU* `במקום שני`; UZU QĀTU `(נתח) היד`
(HPM "Huf"); UZU *muḫrai-* transliterated; MAŠ.SÌL `מותן` (HPM "Hüfte"); GÙB-la- `שמאלי`; KURŠINNU `קרסול`; *šarḫuwant-* `בטן`
(HL1); DINGIR.LÚ.MEŠ `הָאֵלִים הזכרים`; *GIŠ-ru* (*taru-*) `עצים`.

**Names:** Zarniza `זַרְנִיזָה`, Tarpattašši `תַּרְפַּתַּשִּׁי` (Luwian *tarpatt-* "substitute"? – a note at AM 2), Alauwaimi
`אֲלַוַּיְמִי` (HPM "Alauwaima"). **Mammai: two forms, as the texts have them** – AM *Mammai* `מַמַּאי` ★ (always vocalized: "from
what"), AM2 *Mammāimi* `מַמָּאִימִי` (the Luwian *-imi* form, like Alauwaimi). **Proposed H2 change:** split the row `mamm[aā]` into
`mamm[aā]i\b|mamma=` → `מַמַּאי` ★ and `mammāim|mammaim` → `מַמָּאִימִי`; then the two escapes at AM 93 and 105 can go.

**Gates / traps:** `לפנים` (F2's gate) blocked *peran* "in front" (AM 48): right as it stands (written `לפני (האדם)`); new traps
proposed: `שאלה` with KUŠ *šāla-*, `ממאי` with *Mammai*, `לך` with *it* (`לֵךְ`), `שמה` with *dai-* fem. (`שָׂמָה`: "there, her
name"), `קולים` is unambiguous enough. The selftest's AM 86 ok-line (`ואותו העכבר …`) differs from the drafted `ואותה העכבר …`
(*=at* = the evil, `הרעה`, fem.): please replace it by the drafted line; AM 41 and AM 95 match.

**Cruxes:** AM 5 / 53 the subject of *šanḫuwanzi*; 10 *ḫurtalli-*; 12 the number of arrows; 15 *ašara-*; 21 the addressee of
"draw out" (the god? the wool?); 27 *tannara-*; 37 *nai-* "turn to" or "wind round" (HPM) the mouse; 48–49 who "goes about in front";
94 C's `PĀNI {UZU}…`; 100 *AŠAR 2-ŠU*; 103 UZU QĀTU ("hand" / "hoof").

**For part 4 (111–260, AM2):** the precious things (113–116, 190–193, 252–255) take R1a's stones and metals (`כֶּסֶף`, `זָהָב`, `אֶבֶן
סַפִּיר`, `אֹדֶם` ★, `אֶבֶן־בָּבֶל`, `לוּלּוּרִי`, `תִּי`, `בַּרַשְׁחָה` ★ – never the string `בראש`, `בַּרְזֶל`, `בְּדִיל`, `נְחֹשֶׁת`, `אָרָד`);
*šuḫḫa-* `פיזר` there too; Tarpattašši's epithet *kuiš peran weḫatta* `אשר סובב לפני (האדם)` (122, 126, 156, 169, 175, 179, 185, 230);
*zik azzikki* (181) as AM 82's iterative `אכול`; AM2 11's ANZELLU `אִסּוּר` / *ḫurkil* `תּוֹעֵבָה` / *papratar* `טֻמְאָה` (R1a).

### Part 4 (AM 111–260, AM2)
Written 2026-10-30 by the translator, after drafting AM 111–260 (`annotated-AM.rtl.md`, now complete) and AM2 1–23
(`annotated-AM2.rtl.md`). `verify AM AM2 --strict`: 0 problems; `check_bible_quotes.py` on both: 0 problems. Christiansen's German read
after the drafts. Two `[סטייה מן הנוסחה: …]` escapes (AM 117, 118: F8 is the Laws' 3sg *pāi* `ייתן`; here *pāi* is the imperative
"give!" `תן` – **proposal:** limit F8's composite regex to the law texts, or exclude a *pāi* that follows an accusative in a speech).

**Refrains copied** (the part-3 table) into 128–177, 183–189, 200–211, 221–224, 236–245 and AM2 1–21, changing only what the Hittite
changes; every difference is tagged in **נוסחים**. The changes: 128, 135 *šuḫḫa-* `מפזרת` (for *dai-* / *išḫuwa-*); 133 *kištanun*;
134 / 210 *idālu inan* `החולי הרע` → `יכבה` (masc.); 139 no *=za*; 145 plural (`מהם`, `הראשים`); 146 no UN.MEŠ (`לרעים, ליריבים`);
149 no *=pat* (`כך`); 153 no *arḫa*; 155 `כך גם לאלה – את החולי הרע – יטהרו מן הגוף כך!"`; 157 no name, + *kattan*; 159 *katti=šši*
`מעמו`; 161 BĒLU sg. `האדון`; 170 no *zik*; 181 *azzikki* = 96's `"אתה – אכול!"`; 183 + IZI `באש`; 185, 240 muḫrai- to Tarpattašši;
188 `כך מבשלים`; 190 order of the stones + `לָאֵל`; AM2: 1–4 *papratar*, *mulātar*, SUD-ru `תימשך`; 4 "nine limbs" `מתשעת האיברים`;
5 = AM 22 (ḪUL = *idālawa-*); 6 `ואחריו`; 7 *tezzi* = `אומרת`; 8 ŠÀ.TAM `פקידי המשק` for ÁZLAG, KIN-zi sg.; 9 sg. `מטהר`; 11 the
king's body and the four impurity words; 18 the subject {MUNUS}ŠU.GI `הזקנה`; 19 *ḫamank-* `קושרת` for *nai-*; 20 `מעליו`; 21 *dai-*.

**New renderings:** URUDU.NAG `כלי־נחושת`; NA₄ TI `אבן תִּי` (HPM "Lebensstein"), *lulluri-* `לוּלּוּרִי`, *barašḫa-* / *barašḫi-*
`בַּרַשְׁחָה` / `בַּרַשְׁחִי` (the string `בראש` never occurs); *kuišš=a* (kuitta) `מכל אחד`; *uwātar* `ראייה`; *āššu memiški* `אמור טוב`,
*SIG₅-in memiški* `היטב אמור`; *parkunumar* `טיהור`; Tarpattašši's epithet *kuiš peran weḫatta* `אשר סובב לפני (האדם)` (122, 126, 156
pl. `סובבים`, 169, 175, 179, 185, 230); *laḫḫiya-* `צא למערכה?` (HL1 *laḫḫa-* `מערכה`; HPM "durchstreife"); *awan arḫa tiya-* `סור
הלאה` (IN idiom); *appa uwa-* `בא בחזרה` (`שוב` avoided); GIŠ *eya-* `עץ־אֵיָה` (HL1); *warḫui-* `סבוך` (HL2); *alpu-* `*מחודד*`; KÁ
`שער`; DUG ÚTUL `קדרה` (HL1); *araḫza* `אל החוץ`; *arawaḫḫ-* `פטר` (HLPT); DAM `אשה` (`[אשת]י?`); TI-an *ḫark-* `החזיק (בחיים)`; MÁŠ.ŠIR
`תיש־ההרבעה` (the gated `תיש`, qualified as HL1's `סוס־הרבעה`); GAL.ZABAR `כוס אָרָד`; *tarna-* of blood into a cup `הכניס` (R1a);
GIŠ GAG.URUDU `מסמר־נחושת`; *iniššan* `באופן ההוא`; *gulli-* `*גומה*` (HPM "Loch"); *duwān duwanna* `לכאן ולכאן`; *arḫa ed-* `אכל עד
תום` (*arḫa* by sense); QATI `תַּם` (HL1). AM2: *mulātar* (Luwian) transliterated `מוּלָאתַר`; ANZELLU `אִסּוּר`, *ḫurkil* `תועבה`
(F7), *papratar* `טומאה`; *parkuešš-* `טהר` (intr.); ŠÀ.TAM `פקידי המשק` (HPM "Kämmerer"); BAL `הניף` (by sense; IN *waḫnu-*
`המיר`); GIŠ *ḫattalwant-* `בריח`, GIŠ SAG.KUL `מנעול` (HPM: "Querbalkenriegel" / "Sicherungsriegel"); GIŠ IG `דלת` (HL2); *ḫeš-*
`פתח`; *arḫa arai-* `קם הלאה` (HPM "zurückhalten": a crux); {MUNUS}ŠU.GI `הזקנה` (the `זקן` gate licensed by ŠU.GI).

**Cruxes:** 115 *=mu* (with "go" or with "speak"); 119 *peran* ("before you" / "previously"); 191 *laḫḫiya*; 196 *alpu*; 216–220
(negated presents or prohibitions, HPM "soll nicht"); 228 DAM in a woman's mouth (the sign partly restored, `?`; perhaps a prayer copied
from a man's version); 235 (what is poured into the pots at the gate); 248 *šuppa-*; 251 *gulli-*; 257 *[…]arḫut*; AM2 15 SAG.KUL; 17
*arai-* "rise" or "hold back".

**Parallels (all typological):** 113 / 190 ↔ 1 Sam 6:5 (`כָּבוֹד` to the god of the plague); 180 the mouse offered ↔ 1 Sam 6:4, [absent]
(Lev 11:29 forbids it); 197 / 227 / 235 the door-post struck and "do not let the evil in" ↔ Exod 12:22–23; 234 the blood in a vessel ↔
Lev 14:5; AM2 1, 11, 17 ↔ Lev 16:16 (`מִטֻּמְאֹת`), Lev 18:22 (`תּוֹעֵבָה` = *ḫurkil*); 251 ↔ Lev 16:22.

**For the reviewers:** AM 225–228 is the old woman's own prayer (her house, her eya-tree, her freedom, her family), the ritual
expert's "I" at its fullest; AM2 18 is the only place where she is named by her title. AM has no colophon proper: 260 `תַּם` only.

### Review (a): fidelity
Written 2026-10-30 by the fidelity reviewer. All 481 `>` lines read against their composites, the TLHdig/CHiL glosses and the HPM
translation. The פירוק was changed with every line (its Hebrew in `("…")` = the line's). After the edits: `verify AS UH PU AM AM2
--strict` 0 problems (one notice only: AM 101 / 189, justified in 189's note), `check_bible_quotes.py` 0, `selftest` 0. No new Bible
verse quoted. Changed: AS 3 lines, UH 1, PU 8, AM 39, AM2 4 (55 lines).

**Changes to formulas (every copy changed):**
- **The god's vocative without *zik*:** AS 55 `ואתה, הָאֵל – כְּאֵל אכול ושתה!` → `ו(אתה), הָאֵל – כְּאֵל אכול ושתה!`; UH 25 `ואתה, הָאֵל,
  אֵל הַסְּעָרָה …` → `ו(אתה), הָאֵל, …` – no *zik* in either composite (IN 19.21, which has *zik*, keeps `ואתה`). **The coordinator should
  update R2's fixed string** (renderings.md line "the god's meal").
- **The fuller's refrain "so may the gods purify":** AM 30, 76, 155, AM2 11 had `כך … כך!` – two `כך` for one *QĀTAMMA* (the opening
  `כך` added). The trailing `כך` removed; *QĀTAMMA* = the opening `כך`, as in the extinguishing refrain (9, 57, 134, 210). AM 76
  `כך את החולי הרע של האדם הזה – יטהרו הָאֵלִים מן הגוף הלאה!"`; 155 `כך גם לאלה – את החולי הרע – יטהרו מן הגוף!"`; AM2 11 `… –
  יטהר!"`; AM 30 (brackets, below).

**Line by line** (old → new; reason):
- AS 54 `ל[ך, לָאֵל]` → `ל[ך?, לָאֵל]` (the edition's `t[uk(?)`). AS 55, UH 25: above. AS 63 `ואילו כאשר` → `ואילו [כאשר]` (*[maḫḫ]an*: stem
  restored).
- PU 1 `[איש העיר …(?)]` → `[איש …(?)]` (the determinative URU is not translated). PU 28 `[וגם כבשה] אח[ת – נוהגים]` → `[וגם כבשה] אחת –
  [נוהגים]` (the number 1 preserved). PU 36 `[אַל(?)] תדע` → `[לא(?)] תדע` (*UL*, not *lē*; Collins's 2nd person kept). PU 37 `… – דע!` →
  `… – דע!"` (the speech of 34 never closed; 42's quote mark had closed it). PU 43 `[ואם] הוא` → `[ואם הוא]` (*=aš* restored). PU 44
  `ואתה` → `[ו]אתה` (*nu* restored). PU 45 `ו[את המגפה הזאת – ה]פר הזה [בחזרה]` → `ו[את המגפה הזאת –] הפר [הזה] בחזרה` (GU₄.MAḪ and
  EGIR preserved, *kā]š* restored). PU 56 `[טקס] אחד` → `[טקס אחד]` (*1-EN* restored; as 55).
- AM 13 `ו[לפני]הם` → `[ולפני]הם` (=*[a]*). AM 14 `[ואת כ]ל זה` → `[ואת כ]ל [זה]` (*kī* restored). AM 17 `ו[אילו` → `[ואילו`. AM 18
  `מעלי[הם לוקחת הלאה]` → `מעליהם [לוקחת הלאה]` (=*šmaš* preserved). AM 22 `לאנשים [הר]עים` → `ל[אנשים הר]עים`; AM 67 `לאנשים` → `ל[אנשים]`
  (UN restored). AM 27 `"[כשם ש]את זה – הכו[בסים …]` → `"כשם שאת זה – [הכובסים …]`; AM 73 `"[כשם ש]את בד־הפשתן הזה` → `"כשם שאת
  בד־הפשתן [הזה]`; AM 152 `"[כשם שאת בד־הפשתן הזה]` → `"כשם ש[את בד־הפשתן הזה]` (*maḫḫan* is preserved in all three; ÁZLAG restored in
  27, *kī* in 73). AM 30 `[כך את החולי … הזה – יטהרו … הלאה] כך!"` → `כך [את החולי הרע של] האדם [הזה –] יטהרו [הָאֵלִים מן הגוף הלאה]!"`
  (*QĀTAMMA* and *parku[nuwandu]*'s stem preserved; the refrain above). AM 34 `ומעט` → `[ו]מעט`; AM 135 `ותבואה` → `[ו]תבואה`; AM 40
  `ואותה` → `[ו]אותה`; AM 41 `ואת [העכבר]` → `[ואת העכבר]` (*[nu]* restored). AM 43 `לך!"` → `[לך]!"` (=*[tta]*). AM 44 `מפזרת` → `[מפזרת]`
  (*š[uḫḫāi]*). AM 66 `מראשו, [מי]דיו, [מרגליו]` → `מראש[ו?], [מי]דיו?, [מרגליו?]` (the edition's three `?`). AM 113 `[אבן סַפִּיר, א]ֹדֶם` →
  `[אבן סַפִּיר], אֹדֶם`; AM 252 `[א]ֹדֶם` → `אֹדֶם` (GUG preserved, only NA₄ restored). AM 119 `אומר לפניך` → `[אומר] לפני(ך)` (*[mem]ai*;
  "you" not in the text). AM 122 `"[תַּרְפַּתַּשִּׁי], אשר סובב` → `[תַּרְפַּתַּשִּׁי], אשר [סובב]` (the quote opened and never closed – 123–125
  are prescriptions, HPM has none; *w[eḫatta]*). AM 136 `[קשת אחת?]` → `קשת [אחת?]` (PAN preserved). AM 147 `[שנים ארוכות]` → `שנים
  [ארוכות]` (MU preserved). AM 159 `מעמו` → `[מהם] עמו` (*katti=šši* "with him", not "from him"; [=šmaš] restored was untranslated). AM 174
  `לָאֵ[לִים הזכרים?` → `לָאֵלִים? [הזכרים?` (DINGIR? preserved, its `?` kept). AM 175 `אשר [סובב לפני (האדם)]` → `אשר סובב [לפני] (האדם)`.
  AM 176 `[לחם עבה] אחד` → `[לחם] עבה [אחד]`. AM 189 `הכב[ד – כ]ך` → `הכב[ד … – כ]ך` (the gap was silent). AM 206 `כל ז[ה על הפַּדַּנִי
  שָׂ]מָה` → `כל זה [על הפַּדַּנִי] שָׂמָה`. AM 210 `החו[לי הרע שעל הא]דונים` → `החו[לי] הרע שעל [הא]דונים` (*idalu*, *šer* preserved). AM 211
  `וגם [את] המי[תר]` → `[וגם את] המי[תר]` (=*a* restored). AM 221 `[ועלוות עצים]` → `[ו]עלוות [עצים]`. AM 222 `[… לָאֵלִים הזכרים של
  תַּרְפַּתַּשִּׁי]` → `[…] – לָאֵלִים הזכרים [של תַּרְפַּתַּשִּׁי]` (DINGIR.LÚ.MEŠ preserved). AM 227 `[ואת החולי הר]ע` → `[ואת] החולי [הר]ע`
  (*inan* preserved). AM 228 `(בחיים) החזק` → `בחיים החזק` (TI-an is written: not an addition). AM 238 `[את הכתף ה]ימנית` → `[ו]את הכתף
  [הימנית …]` (ZAG.UDU preserved, ZAG-an and *nu* restored). AM 255 `"[תַּרְפַּתַּשִּׁי]` → `"[… תַּרְפַּתַּשִּׁי]` (the gap). AM 76, 155: the
  refrain above. Notes adjusted: AM 159 נוסחים, AM 189 הערות, PU 36 תרגומים, AM2 11 נוסחים; פירוק of AM 100, 104 now quote the composite
  without the brackets it lacks.
- AM2 5 `[תן]!` → `[תן]!"` (the speech, whose opening is lost, ends here: 6 is a prescription; HPM closes it). AM2 11: the refrain. AM2 18
  `כו[רכת]` → `[כורכת]` (*ḫ[ūlaliyezzi]*). AM2 19 `אל י[דו` → `אל יד[ו` (ŠU preserved).

**Cruxes decided:** PU 36 (above: 2nd person kept, `לא`). AM 216–220: *UL* + present stays `לא` + participle (a statement, not HPM's
"soll nicht"; a prohibition would be *lē*). AM 119 *peran*: `לפני(ך)`, "previously" noted in the פירוק. AM2 19 *ḫamanzi*: kept 3sg `קושרת`
(ḫa-ma-an-zi = *ḫamank-zi* with the *k* unwritten, as 6 *ḫamakzi* without the nasal; HPM's "man bindet" is a 3pl reading – noted here).
**Cruxes left, as marked:** AS 16 *kattan weḫattari* (`סובב למטה`, unmarked: the coordinator may add `?`), 32 LUGAL's case, 47, 56, 69,
103; UH 13–14, 28, 32; PU 3/7, 21, 27/47 `(דברי) אֵלָה` (Collins "in case the deity is female"), 34, 38, 43; AM 5/53, 10, 12, 15, 27, 37 /
39 *nai-* `הפנה` (HPM "winden"), 115, 191, 196, 228, 235, 248, 251, 257; AM2 15, 17 *arai-*. **For the coordinator:** AM 216 `בא` and
218 `סובב` are masculine beside 219 `אומרת` – if the subject of 216–220 is Ambazzi (as 194 `היא באה בחזרה`), both become feminine; the
subject is lost, so I left them. AM 157 *kattan* (said in Part 4 to be rendered) has no Hebrew (`אַל תיאבק בהם עוד!`): HPM "damit".

### Review (b): consistency
Written 2026-10-30 by the consistency reviewer. Method: a script printed every copy of each Ambazzi refrain (the Part 3 table) and
of the cross-text formulas side by side with its composite (brackets and vowels normalized); `verify --strict`; the "identical" /
"similar" lists of `data KEY` for all five texts (74 pairs with different Hebrew, each read); `lexmap` filtered to the rituals (one
lemma → two Hebrews; one Hebrew → two lemmas), and the ritual lemmas against HL1 / HL2 / HLPT / IN. After the edits: `verify AS UH PU
AM AM2 --strict` 0 problems (the AM 101 / 189 notice only, justified in 189), `selftest` 0 failures, `check_bible_quotes.py` 0.
Changed: AS 3 lines, AM 7, AM2 2 (12 lines; the פירוק / notes with them).

**Checked and found consistent (no change):** F17 (AS 16, 17, 26, 81; UH 11, 15; PU 42), the indefinite god (UH 3; PU 4, 20), F18 (AS 84;
UH 17, 26; PU 24, 46), F19 (AS 42, 74, 87), F21 `הנה` (AS 18, 27, 38, 39, 52, 54; UH 12; PU 21; AM 114), *(anda) kiššan memai* (AS 15,
25, 37, 51; UH 10, 20; PU 16, 19, 33, 41), the drive (AS 20, 34, 43, 77, 90; UH 9, 18; AM 88, 215) and *unna-* (AS 75, 87; UH 5, 12, 27;
PU 28), the god's meal (AS 55, 82; AM 96, 181), the day's end (AS 58, 73, 86, 98; 73a, 86a), the participants (AS 72, 85, 97; AM 112,
247), the portions (AS 70 = 95), *EGIR-pa … pēdau* (PU 26, 45), *galanganza ēš* (PU 23, 44); every Ambazzi refrain in all its copies
(3–9 / 51–57 / 128–134 / 207–210; 10–14 / 58–60 / 135–138 / 200–206 / AM2 12; 15–25 / 61–70 / 139–149 / 211 / AM2 1–5 / 256; 26–33 /
71–79 / 150–159 / AM2 6–11; 34–44 / 80–89 / 160–172 / AM2 18–21; 45–50 / 90–110 / 173–189 / 221–224 / 233–245; 113–116 / 190–193 /
252–255): every difference of Hebrew corresponds to a difference of the Hittite, except the lines below. Ambazzi's 1sg / 3sg is
feminine throughout AM / AM2 (216, 218 were the only exceptions); Ašḫella's, Uḫḫamuwa's, Puliša's masculine. Names: vocalized at the
first occurrence in each file (AM 2, 50, 93; AM2 15; AS 1, 101, 104; UH 1; PU 1, 56); Mammai ★ vocalized in every line.

**Line by line** (old → new; reason):
- AS 2 `נעשית מגפה,` → `מגפה נעשית,` (the word order of the identical *ÚŠ-kan kišari* in AS 107 `[מגפה] נעשית` and PU 5 `מגפה נעש[ית]`).
- AS 16 `"איזה אֵל אשר סובב למטה –` → `"איזה אֵל אשר *סובב למטה* –` (the crux *kattan weḫattari* marked as the other cruxes; פירוק says so;
  **R2's fixed string** "AS 16 opens it, `"איזה אֵל אשר סובב למטה –`" should be updated by the coordinator).
- AS 49 `את החֵלֶב` → `את השומן` (*{UZU}Ì*: the Laws have UZU Ì / Ì `שומן` in HL1 459, 497, 499, binding for the shared word; the
  הקבלה with Lev 3:16 kept, the note says Ì = `שומן`). **R1a's "Ì / Ì.UDU = `חֵלֶב`" should be narrowed to Ì.UDU** (below).
- AM 128 `[ועצי־הח]וּוַלִּי – [אל האגן האָדֹם] מפזרת;` → `[ואל האגן האָדֹם – עצי־הח]וּוַלִּי מפזרת;` (the composite has the order of 3,
  *ANA DÍLIM.GAL SA5 ḫulliš*, not of 51 *ḫulliš ANA …*; the restoration follows the Hittite).
- AM 136 `– ואותה במיתר משוכה;` → `– ואותה – במיתר משוכה;` (= 11 `[ואותן – במיתר משוכות]`, the same *n=at IŠTU ištaggai ḫuittiyan*).
- AM 157 `אַל תיאבק בהם עוד!` → `אַל תיאבק בהם עוד *מקרוב*!` (*kattan* had no Hebrew, though Part 4 says it was rendered; now rendered by
  sense, R2, marked uncertain – HPM "damit"; פירוק, נוסחים, תרגומים aligned).
- AM 216 `[…] בא בחזרה,` → `[…] באה בחזרה,`; AM 218 `סובב, לא […]` → `סובבת, לא […]` (subject decided: Ambazzi, as 194 *mān=aš parna=ma
  āppa uizzi* `היא באה בחזרה` – she returns after the release of 212–215 and does not turn, speak or curse, 218–220 – and as 219
  `אומרת`; 217 `נעשה` (*kišari*, impersonal) and 250 `בא` (the sickness, `החולי`) stay masculine; the note of 220 aligned).
- AM 224 `ל[מַמַּאי]` → `לְ[מַמַּאי]`, AM 241 `ל[מַמַּאי שָׂמָה]` → `לְ[מַמַּאי שָׂמָה]` (as 93, 105, 187 `לְמַמַּאי`).
- AM2 11 `יטהר!"` → `יִטְהַר!"` (*parkuešš-* "become pure" is the intransitive; unvocalized `יטהר` is also the Laws' *parkunu-* "he
  shall purify", HL1 246, HLPT 142, 144, HL2 163.2: the collision removed by the vowels).
- AM2 21 `ואותו [אל העכבר הקטן] שָׂמָה;` → `ואותו שָׂמָה [אל העכבר הקטן];` (the word order of the refrain 37, 83, 163 `ואותו מפנה אל העכבר
  הקטן;` – the same Hittite order, *n=at=kan ANA PÉŠ.TUR nāi / dāi*).

**Decided without change:** AM2 19 *ḫamanzi* stays 3sg `קושרת`: the evidence is against the 3pl – the subject {MUNUS}ŠU.GI is named in
18 with the 3sg *ḫūlaliyezzi*, 20 and 21 are 3sg *dāi*, the AM copies (35, 81, 161) are 3sg *nāi*; and *ḫa-ma-an-zi* reads as the 3sg
*ḫamank-zi* with the *k* of *-nkz-* unwritten (as AM2 6 *ḫa-ma-ak-zi* leaves out the nasal), whereas a 3pl *ḫamankanzi* would have
lost a whole syllable. HPM's "man bindet" is noted in the פירוק. AM2 8 `עובדים` (3sg KIN-zi with a plural subject: Hebrew agreement) /
9 `מטהר` (3sg, no subject): kept, the Hittite's own difference. AM 3 `אגן אָדֹם` (first mention) / 51, 128 `האגן האָדֹם`: kept.

**Splits accepted (one lemma, two Hebrews), with the reason:** *kattan* by sense (`אצל`, `מתחת`, `עמם`, `זה לצד זה`, `למטה`, `לצד־`,
`*מקרוב*`; R2); *ištarna* `בין` / `דרך` (R2); *dai-* `שָׂם` / *dā-* `לקח` (two verbs); *pai-* "go" `לֵךְ` / *pai-* "give" `נתן`
(homonyms); *iya-* `עשה` / *iya-* (mp) `יוצא` (PU 3, homonyms); *tiya-* `נכנס` / `עומד` (PU 10, 11, 18: idioms, Part 2); *ḫantezzi-*
`ראשון` / AM 108 `הקדמי` (the fore ankle); *kunna-* `ימין` / ZAG `ימני` / ZAG `גבול` (HL2); ÚR `ירך` (AS, PU) / `איבר` (AM; R4);
*išḫiya-* `אסר` (HL1 `חייב`), *ḫink-* `הרכין` (HL1 `הציג`), *paršiya-* `פרס` (HL2 `פרץ`), *šanḫ-* `קלה` (IN `דרש`), *āššu-* `טוב` (HL1
`רכוש`), *išḫuwa-* `זרה` (IN `ערם`) – all recorded in R2–R4; **new for the lead:** *nai-* rituals `הפנה` (R1) against HL2 162, 166, 171
`הטה` (the diverting of water): a split by sense, accepted, not yet recorded in the law file's §7; Ì.UDU "tallow" `חֵלֶב` (UH 19, 24)
beside Ì `שומן`: two Sumerograms, two words (as the Laws' Ì.ŠAḪ `שומן־חזיר`).

**Collisions (one Hebrew, two lemmas) found and how resolved:** `חלב` – Ì (AS 49) vs Laws Ì `שומן`: fixed (AS 49 `שומן`), GA "milk"
`חָלָב` (IN) is the trap's; `יטהר` – *parkuešš-* (AM2 11) vs *parkunu-* (Laws): vocalized `יִטְהַר`; `אומר` – *memai-* vs *tar-* (AM2
*tezzi*, HL1 306, HLPT 188, IN 11.5): accepted (R1a; the Laws themselves use `אמר` for *tar-*); `הביא` – *uda-* vs *uwate-* (PU 12, Laws
`יביא`): accepted (two near-synonymous "bring" verbs; the Laws do the same); `נעשה` – *kiš-* (AS 2, 5) vs *iya-* passive (HL2 184.1
`[נעשה?]`): accepted (passive of `עשה` = *iya-*'s own root); `דרך` – *ištarna* (AS 33) vs KASKAL (UH 9; IN): accepted in R2 (preposition
vs noun); `מלבין` – *ḫarkešš-* (AM 29, 75; AM2 10) vs restored *ḫarganu-* (PU 34): accepted (one root *ḫark-*, the Hebrew verb both
"turns white" and "whitens"); `תַּם` – TIL / QATI (R2); `איל` – UDU.ŠIR (AS, `אַיִל` ★) vs HL1 UDU.A.LUM `אַיִל` and DÀRA.MAŠ `אַיָּל`:
UDU.ŠIR / UDU.A.LUM are both "ram" (accepted; the breeding sense of UDU.ŠIR shows at AS 88, while MÁŠ.ŠIR AM 232 is `תיש־ההרבעה` –
**for the lead**: whether UDU.ŠIR should be qualified the same way), the stag is vocalized; `מלח` – MUN (AS 64) vs HL2 163.3 *išuwan*
`מלח` (outside these files: **for the lead**, *išuwan*'s meaning is uncertain). Same-word variants (`עצי־החוּוַלִּי` *ḫuwalli-* /
*ḫulli-*, `אֵל המגן` LAMMA / {D}KAL, `אש` IZI / *paḫḫur*, `עצים` GIŠ / IṢU, `בלילה` GE₆ / *išpant-*) are one word.

**For the coordinator (renderings.md):** R2 AS 16 string (`*סובב למטה*`); R1a "Fat and milk" → Ì `שומן` (the Laws), Ì.UDU `חֵלֶב` ★; the H6
`חלב` trap's condition `\{uzu\}ì\b|\bì\b` now has no ritual line (only Ì.UDU); Part 4's "157 + *kattan*" is now true (`*מקרוב*`).

### Review (c): Hebrew
Written 2026-10-30 by the Hebrew reviewer. Method: each text read aloud as a continuous Hebrew text (the `>` lines and the `## `
headings in order), checking clause order, agreement (Ambazzi feminine: a script listed every masculine form in AM / AM2 – only
the fuller's subject `הוא`, the god's `סובב`, the imperatives and AM2 9 `מטהר`, all right), prepositions, ambiguous unvocalized
words, register and Lev 14 / 16 phrasing; every 1pl / 2nd-person Hittite verb checked for a Hebrew pronoun. The פירוק glosses
changed with every line. After the edits: `build`; `verify AS UH PU AM AM2 --strict` 0 problems (the AM 101 / 189 notice only);
`selftest` 51 lines, 0 failures; `check_bible_quotes.py` 0 on the five annotated files, the six intros and the built files.
**Changed: AS 5 lines, UH 1, PU 8, AM 5, AM2 1 (20 `>` lines), and 12 headings.**

**Lines** (old → new; reason):
- **Clause order** (Hittite S-O-V where Hebrew needs the verb earlier; images kept in order where Hebrew allows): PU 2 `[אם המלך את
  א]רץ האויב מוחץ,` → `[אם המלך] מוחץ [את א]רץ האויב,`; PU 3 / 7 (the pair) `… הלאה יוצא` → `… [יוצא] הל[אה]` / `… יוצ]א [הלאה]`;
  PU 8 `של הארץ – אסיר אחד ואשה אחת – תופסים;` → `אסיר אחד ואשה אחת של הארץ – תופסים;`; AM2 15 `כשם שהבריח את המנעול בחזרה
  מרחיק,` → `כשם שהבריח מרחיק את המנעול בחזרה,`; AS 62 `עוד לא לוקח` ("not yet") → `לא לוקח אותם לו עוד` (*namma UL* "no more").
- **Prepositions / grammar:** PU 14 `מלבישים לאיש` → `מלבישים את האיש`, PU 15 `ואילו לאשה –` → `ואילו את האשה –` (`הלביש` takes the
  person as object, Gen 27:15, Exod 29:5; *ANA* is the Hittite case); PU 16 `ואל האיש המלך כך אומר:` → `ואל האיש – המלך כך אומר:`
  (as PU 19; "the man the king" read as one phrase); AS 6 `כל אשר הם` → `יהיו אשר יהיו` (*kuiēš kuiēš* "whoever"); AS 9 `לא חשוב
  מאומה.` → `אין (זה) חשוב במאומה.`; AS 11 `ואותו הוא מאגד` → `ואותו מאגד` (the 3sg prescriptions have no pronoun elsewhere).
- **The 1pl present** (a bare participle reads as "they"): AM 43 `[א]חר נ[ות]נים [לך]!"` → `[א]חר אנו נ[ות]נים [לך]!"`, AM 171 `אחר
  נותנים לך!"` → `אחר אנו נותנים לך!"` (*pīweni*). **A refrain, both copies changed** (89 is 1sg `אני נותנת` and stays); the
  heading §11 with them. **For the coordinator:** the Part 3 refrain table (line "Take him – another to eat") now reads
  `ואילו לאכול – אחר אנו נותנים לך!"`; no `renderings.md` string holds it (R1a names the refrain without Hebrew).
- **Niqqud where a reading misleads:** AS 18, PU 43, AM 114 `לך` → `לְךָ` ("go" at the head of a speech); UH 23 `ושבעים` → `ושְׂבֵעִים`
  ("seventy"); AM 155 `לאלה` → `לָאֵלֶּה` (a goddess beside the gods); AM 226 `ופטור` → `וּפְטוֹר` (the adjective "exempt").
- **Headings:** PU §1 `הכה` → `מוחץ` (`הכה` is H3-reserved; *walḫ-*); AM §8, §18′, §38′ `אל תיאבקו` / `אל` → `אַל תיאבק` (the
  line's singular); AM §27′ `דַּבֵּר טוב` → `אמור טוב` (the lines' *memai*; `דִּבֶּר טוֹב` would add Num 10:29 / Esth 7:9), §22′, §27′
  `האלים` → `הָאֵלִים`, §43′ `לך` → `לֵךְ`, §30′ `קרבן` → `הקרבה` (`קָרְבָּן` rejected in R1); AS §7 `ומנחה` → `והקרבה`, §9 `לאלי` →
  `לְאֵלֵי`; AM2 §3′ `יטהר` → `יִטְהַר` (as the line).

**Read and left:** the dash-fronted O–V order throughout (the IN model; Hebrew allows it); AS 45 `מגיעים אותם` (*arnu-*, HL1
`יַגִּיעַ`: one verb); AS 66 `שורפים אש` (*warnu-* `שרף`; `הבעיר` is H3-reserved); AS 60 `אף אחד לא` (IN 6.2); the refrains `ואת הרעה –
מעליהם הלאה הרחק!`, `ואותה העכבר הקטן הזה … יישא!`, PU 45 `בחזרה … יישא!` (fixed strings, poetic order). No Lev 14 / 16 phrasing
found in the lines beyond the gated, intended verbs (`שִׁלַּח`, `נשא`, `שָׂמִים … את ידיהם` with `אל`, not `על`).

**The introductions** (new): `translation--intro-AS.rtl.md`, `-UH`, `-PU`, `-AM`, `-AM2` (title line = the annotated title without
"– תרגום מבואר"; 3 paragraphs each: the rite, carrier and destination; the expert, the NS manuscripts, the HPM editor, CC BY-SA 4.0,
the clause numbering, the brackets; one or two Bible comparisons, typological unless Wright 1987 / Janowski & Wilhelm 1993 are
named) and the project's `translation--intro.rtl.md` (the corpus and its shared logic, the editions and numbering, the brackets
table, the fixed words `מגפה`, `אֵל`, `שִׁלַּח`, `נשא`, `בָּר`, `ארץ האויב`, and the Bible comparison left to the apparatus). Verses
quoted, each printed first: Lev 16:22; Lev 14:4, 14:7; 1 Sam 5:11, 6:4, 6:8. **Gate check of the intros:** a script stripped niqqud
(keeping the maqaf, `[֑-ֽֿ-ׇ]`) and the backticked quotations, and applied all 44 H3 regexes of both renderings files to every line:
2 hits in the first draft (`מדבר` "speaks", AS and UH: rewritten `מספר`), then 0. Reserved words (`שָׂעִיר`, `עֲוֹנֹתָם`, `אֶרֶץ
גְּזֵרָה`, `תוֹלַעַת`, `אֵזֹב`) occur only inside the quoted verses.

## Part AS: parallels index (Ašḫella, CTH 394)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-AS.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | `UMMA {m}Ašḫella LÚ {URU}Ḫapalla` | כה (אומר) אַשְׁחֶלָּה, איש חַפַּלָּה: | – | [equivalent] | נוסחת הפתיחה *UMMA X* היא נוסחת המכתב האכדית ("כה (אומר) X"), ולא נוסחת השליח הנבואית `כֹּה אָמַר`: הפועל חסר במקור, ולכן הוא בסוגריים. |
| 2 | `mān=kan KUR-e anda našma ŠÀ KARAŠ ÚŠ-kan kišari` | אם בתוך הארץ, או בקרב המחנה, מגפה נעשית, | שמואל א ו:ד; שמואל ב כד:כה | [equivalent] | `כִּי מַגֵּפָה אַחַת לְכֻלָּם וּלְסַרְנֵיכֶם` (שמואל א ו:ד) – המגפה כפגע שבא על קבוצה שלמה; וכן `וַתֵּעָצַר הַמַּגֵּפָה מֵעַל יִשְׂרָאֵל` (שמואל ב כד:כה), מגפה בעם שהמלך עומד בראשו. |
| 2 | `mān=kan KUR-e anda našma ŠÀ KARAŠ ÚŠ-kan kišari` | אם בתוך הארץ, או בקרב המחנה, מגפה נעשית, | – | [divergence] | בטקס החתי המגפה נמצאת "בקרב המחנה" – צבא במסע, הרחק מן הבית – והטקס יחזיר אותה אל מעבר לגבול; בספר שמואל ב כד המגפה היא עונש על חטא המלך, והיא נעצרת במזבח. |
| 10 | `nu šūēl SÍG.BABBAR SÍG.SA5 SÍG.SIG7.SIG7 anda tarnaḫḫi` | ואני מכניס חוט: צמר לָבָן, צמר אָדֹם, צמר ירוק, | ויקרא יד:ד | [divergence] | `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד) – גם בטקס הטיהור של המצורע חוט צבוע (שני תולעת) הוא חלק מן הצרור שנשלח עם הציפור; כאן שלושה צבעים, והם נקשרים על הבהמה שתישא את הרעה. החוט האדום שנקשר על ראש השעיר המשתלח במסורת חז"ל (משנה יומא ד:ב, ו:ו) קרו … |
| 12 | `nu=kan 1-EN {NA4}NUNUZ 1 KAMKAMMATU AN.BAR ŠA A.GAR5=ia anda neḫḫi` | ואני משחיל פנימה אבן־חרוז אחת, טבעת אחת – של ברזל, וגם של עופרת – | זכריה ה:ז | [absent] | הטבעת ה"של ברזל ושל עופרת" – אין לה מקבילה בויקרא יד או טז. (עופרת מופיעה בחזון האשה באיפה, `וְהִנֵּה כִּכַּר עֹפֶרֶת נִשֵּׂאת` (זכריה ה:ז), אבל שם היא מכסה כבד הסוגר את האיפה: צירוף מקרים של חומר, ולא הקבלה.) |
| 13 | `n=at=kan ANA UDU.ŠIR{ḪI.A} {UZU}GÚ=ŠUNU SI{ḪI.A}=ŠUNU=ia anda ḫamangami` | ואותו אני קושר על האֵילִים – על צוואריהם וגם על קרניהם. | – | [equivalent] | הקישוט על צוואר הבהמה ועל קרניה דומה לחוט האדום שנקשר בין קרני השעיר במסורת המשנה (יומא ד:ב, ו:ו), ושאינו מופיע במקרא עצמו: |
| 13 | `n=at=kan ANA UDU.ŠIR{ḪI.A} {UZU}GÚ=ŠUNU SI{ḪI.A}=ŠUNU=ia anda ḫamangami` | ואותו אני קושר על האֵילִים – על צוואריהם וגם על קרניהם. | – | [absent] | בויקרא טז אין כל סימן על השעיר. |
| 14 | `n=aš GE6-az ANA PĀNI {GIŠ}ZA.LAM.GAR{ḪI.A} ḫamanganzi` | ואותם בלילה קושרים לפני האוהלים. | ויקרא טז:ז | [divergence] | `וְהֶעֱמִיד אֹתָם לִפְנֵי יְהוָה פֶּתַח אֹהֶל מוֹעֵד` (ויקרא טז:ז) – בויקרא השעירים מועמדים לפני האוהל של האל; כאן האֵילִים נקשרים לילה שלם לפני אוהלי המפקדים, כדי שהאֵל המשוטט ימצא אותם שם. |
| 16 | `kuiš=wa=kan DINGIR-LUM kattan weḫattari` | "איזה אֵל אשר *סובב למטה* – | דברים כג:טו | [equivalent] | `כִּי יְהוָה אֱלֹהֶיךָ מִתְהַלֵּךְ בְּקֶרֶב מַחֲנֶךָ` (דברים כג:טו) – האל המתהלך במחנה. |
| 16 | `kuiš=wa=kan DINGIR-LUM kattan weḫattari` | "איזה אֵל אשר *סובב למטה* – | – | [divergence] | בדברים האל הולך במחנה כדי להציל, והמחנה צריך להיות ראוי לנוכחותו; כאן האֵל המשוטט הוא מקור הרעה, ואין יודעים מי הוא. |
| 17 | `kuiš=wa DINGIR-LUM kī ÚŠ-kan iyat` | איזה אֵל אשר עשה את המגפה הזאת – | שמואל א ו:ט | [equivalent] | `הוּא עָשָׂה לָנוּ אֶת הָרָעָה הַגְּדוֹלָה הַזֹּאת` (שמואל א ו:ט) – גם הפלשתים אינם יודעים בוודאות מי "עשה" להם את הרעה, וגם הם בודקים זאת בטקס: אם העגלה תעלה אל גבול ישראל, אלוהי ישראל הוא שעשה זאת, ואם לא – `מִקְרֶה הוּא הָיָה לָנוּ` (שמואל א ו:ט). |
| 17 | `kuiš=wa DINGIR-LUM kī ÚŠ-kan iyat` | איזה אֵל אשר עשה את המגפה הזאת – | – | [divergence] | הפלשתים יודעים אל מי לשלוח (אל אלוהי הארון), ובודקים רק אם צדקו; אַשְׁחֶלָּה אינו יודע, ופונה אל "איזה אֵל" שיהיה. הדמיון כאן טיפולוגי: אותה בעיה (מגפה שמקורה באל לא ידוע), ופתרון דומה (מתנה ושילוח). |
| 18 | `nu=wa=ta kāša kūš UDU.ŠIR{ḪI.A} kattan išḫiyanun` | לְךָ – הנה, את האֵילִים האלה אסרתי למטה; | בראשית מט:יא; שמואל א ו:ז | [equivalent] | `אֹסְרִי לַגֶּפֶן עִירֹה` (בראשית מט:יא) – קשירת בהמה במקום, אותו פועל; ו־`וַאֲסַרְתֶּם אֶת הַפָּרוֹת בָּעֲגָלָה` (שמואל א ו:ז), במשלוח המנחה אל האל. |
| 20 | `lukkatti=ma=aš LÍL-ri pennaḫḫi` | ובשחר אני מסיע אותם אל הבָּר. | ויקרא יד:ז | [equivalent] | `וְשִׁלַּח אֶת הַצִּפֹּר הַחַיָּה עַל פְּנֵי הַשָּׂדֶה` (ויקרא יד:ז) – השדה הפתוח, מחוץ למקום היישוב. |
| 20 | `lukkatti=ma=aš LÍL-ri pennaḫḫi` | ובשחר אני מסיע אותם אל הבָּר. | ויקרא טז:כב | [divergence] | `וְשִׁלַּח אֶת הַשָּׂעִיר בַּמִּדְבָּר` (ויקרא טז:כב) – כאן לא מדבר אלא "הבָּר", השטח הפתוח שבין המחנה ובין הגבול. |
| 22 | `ANA {GIŠ}ZA.LAM.GAR LUGAL=ma peran MUNUS-TUM unuwandan ašaši` | ואילו לפני אוהל המלך – מושיב אשה מקושטת. | זכריה ה:ז; זכריה ה:יא | [divergence] | `וְזֹאת אִשָּׁה אַחַת יוֹשֶׁבֶת בְּתוֹךְ הָאֵיפָה` (זכריה ה:ז) – אשה יושבת, שתישא אל ארץ אחרת – `לִבְנוֹת לָה בַיִת בְּאֶרֶץ שִׁנְעָר` (זכריה ה:יא). |
| 22 | `ANA {GIŠ}ZA.LAM.GAR LUGAL=ma peran MUNUS-TUM unuwandan ašaši` | ואילו לפני אוהל המלך – מושיב אשה מקושטת. | זכריה ה:ח | [absent] | בויקרא טז אין אשה כלל. גם כאן הדמיון טיפולוגי: אשה שמושיבים אותה ושולחים אותה אל ארץ אחרת, וכך הרעה מסולקת; אצל זכריה האשה היא `הָרִשְׁעָה` (זכריה ה:ח) עצמה, וכאן היא מתנה לאֵל. |
| 24 | `namma=kan ANA UDU.ŠIR{ḪI.A} EN{MEŠ} KARAŠ QĀTĪ=ŠUNU parā tiyanzi` | ועוד: אל האֵילִים שָׂמִים אדוני המחנה את ידיהם קדימה, | ויקרא טז:כא | [divergence] | `וְסָמַךְ אַהֲרֹן אֶת שְׁתֵּי יָדָו עַל רֹאשׁ הַשָּׂעִיר הַחַי וְהִתְוַדָּה עָלָיו` (ויקרא טז:כא) – זו ההקבלה החזקה ביותר בטקס, וגם ההבדל ברור בה: בויקרא כהן אחד סומך את שתי ידיו על ראש השעיר ומתוודה על עוונות העם; כאן כל מפקדי המחנה, כל אחד בידיו שלו, "שָׂמִי … |
| 28 | `nu=war=at IŠTU {UZU}NÍG.GIG {UZU}ŠÀ U IŠTU {UZU}ÚR mekki warganteš` | והם שמנים מאוד – מן הכבד, מן הלב ומן הירך; | ויקרא ז:לב | [divergence] | `וְאֵת שׁוֹק הַיָּמִין תִּתְּנוּ תְרוּמָה לַכֹּהֵן` (ויקרא ז:לב) – גם בתורה איברים מסוימים הם החלק המובחר; כאן הכבד, הלב והירך משבחים את הבהמה בפני האֵל, כמו סוחר המשבח את סחורתו. |
| 33 | `namma=kan UDU.ŠIR{ḪI.A} MUNUS-an NINDA.GUR4.RA KAŠ=ya ANA KARAŠ ištarna arḫa pēdanzi` | ועוד: את האֵילִים, את האשה, את הלחם העבה ואת השכר – דרך המחנה נושאים הלאה. | ויקרא טז:כב | [equivalent] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם` (ויקרא טז:כב) – אותו פועל, אבל |
| 33 | `namma=kan UDU.ŠIR{ḪI.A} MUNUS-an NINDA.GUR4.RA KAŠ=ya ANA KARAŠ ištarna arḫa pēdanzi` | ועוד: את האֵילִים, את האשה, את הלחם העבה ואת השכר – דרך המחנה נושאים הלאה. | – | [divergence] | בכיוון הפוך: בויקרא השעיר הוא הנושא, וכאן בני האדם נושאים את האֵילִים ואת האשה דרך המחנה. *peda-* הוא "לשאת, לקחת הלאה" של חפצים ובהמות (גם בחוקים: `יישא הלאה`). |
| 35 | `n=aš=kan pānzi ANA ZAG {LÚ}KÚR anda arḫa pittalanzi` | ואותם – הולכים ומפקירים הלאה, אל תוך גבול האויב, | ויקרא טז:כב; ויקרא טז:י | [divergence] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – אצל אַשְׁחֶלָּה היעד הוא גבול האויב, ארץ מוגדרת ועוינת; בויקרא "ארץ גזרה", ארץ מבודדת שאין בה איש, ו־`הַמִּדְבָּרָה` (ויקרא טז:י), אל עזאזל. זה ההבדל המרכזי בין הטקסים: האנטולי … |
| 36 | `kuedani pidi anzel UL aranzi` | – מקום אשר (אנשים) שלנו לא מגיעים (אליו). | ויקרא טז:כב | [divergence] | `אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – גם כאן מקום מנותק מן החיים, אבל החתית מגדירה אותו מן הצד שלנו: מקום ש"שלנו" אינם מגיעים אליו, לא מקום שאין בו איש. (הניסוח המקובל "מקום שאינם יודעים" – אינו בכתוב: הפועל הוא *ar-* "להגיע".) |
| 38 | `kāša=wa=ššan kuit kēl ŠA KARAŠ idālu ANA AMĪLŪTI GU4{ḪI.A} UDU{ḪI.A} ANŠE.KUR.RA{MEŠ} ANŠE.GÌR.NUN.NA U ANA ANŠE{ḪI.A} a …` | "הנה, הרעה של המחנה הזה, אשר הייתה בבני האדם, בשוורים, בצאן, בסוסים, בפרדים ובחמורים – | ויקרא טז:כא | [divergence] | `אֶת כָּל עֲוֹנֹת בְּנֵי יִשְׂרָאֵל וְאֶת כָּל פִּשְׁעֵיהֶם לְכָל חַטֹּאתָם` (ויקרא טז:כא) – הרשימה בויקרא היא רשימה של חטאים; כאן רשימה של נפגעים – בני אדם ובהמות. הרעה החתית היא דבר, כמעט חומר, שישב "בתוך" האנשים והבהמות, לא אשמה. |
| 40 | `nu=war=at=za kuiš wemiyazzi` | ומי שימצא אותה – | שמואל א ו:ח | [divergence] | `וְשִׁלַּחְתֶּם אֹתוֹ וְהָלָךְ` (שמואל א ו:ח) – הפלשתים משלחים את המנחה ואת הארון בלי מלווה, ונותנים לפרות להחליט לאן ללכת; גם אַשְׁחֶלָּה אינו יודע מי ימצא את הבהמות, ומטיל את הרעה על מי שימצא. |
| 42 | `INA UD.2.KAM mān lukkatta karūwariuar ḫūdak 6 UDU.ŠIR{ḪI.A} 6 MÁŠ.GAL 12 {DUG}GÌR.GÁN 12 GAL{ḪI.A} 12 NINDA.GUR4.RA 1 {D …` | ביום השני, כשעולה השחר, בהשכמה, מיד – שישה אֵילִים, שישה תישים, שנים־עשר כדים, שתים־עשרה כוסות, שנים־עשר לחמים עבים, קער … | ויקרא טז:ה | [divergence] | `שְׁנֵי שְׂעִירֵי עִזִּים לְחַטָּאת; וְאַיִל אֶחָד לְעֹלָה` (ויקרא טז:ה) – בויקרא שני שעירים ואַיִל, כאן שישה אֵילִים ושישה תישים: הבהמות של היום השני מיועדות לסעודה (46–55), לא לשילוח – הן נשחטות, מתבשלות ונאכלות לפני האֵל. |
| 49 | `nu=ššan {UZU}Ì NINDA.GUR4.RA{ḪI.A} {URUDU}GÍR.TUR-li=ya kattan ḫandanzi` | ועליה מכינים זה לצד זה את השומן, את הלחמים העבים וגם את הסכין הקטנה; | ויקרא ג:טז | [divergence] | `כָּל חֵלֶב לַיהוָה` (ויקרא ג:טז) – בתורה החלב שייך לאל ונשרף; כאן השומן (*Ì*, `שומן` כבחוקים) מוגש לאֵל על העלווה, לצד הלחם והסכין, כארוחה. |
| 55 | `nu=wa=za DINGIR-LUM DINGIR-LIM-nili [e]t=za eku` | ו(אתה), הָאֵל – כְּאֵל אכול ושתה! | – | [absent] | אין במקרא הזמנה לאל "לאכול ולשתות"; |
| 55 | `nu=wa=za DINGIR-LUM DINGIR-LIM-nili [e]t=za eku` | ו(אתה), הָאֵל – כְּאֵל אכול ושתה! | תהלים נ:יג | [divergence] | `הַאוֹכַל בְּשַׂר אַבִּירִים וְדַם עַתּוּדִים אֶשְׁתֶּה` (תהלים נ:יג) – המקרא שולל את המחשבה שהאל אוכל. |
| 56 | `antuḫši=ma=wa=za kattan lē pešti` | ואילו אצל האדם – אַל *תתן את עצמך*!" | דברים כג:טו | [absent] | אין במקרא בקשה מן האל שלא יתקרב אל בני האדם; המקרא מבקש את ההפך, `כִּי יְהוָה אֱלֹהֶיךָ מִתְהַלֵּךְ בְּקֶרֶב מַחֲנֶךָ` (דברים כג:טו) – ראו 16. |
| 58 | `n=at=za arḫa uwanzi` | והם באים הלאה. | ויקרא טז:כו | [equivalent] | `וְאַחֲרֵי כֵן יָבוֹא אֶל הַמַּחֲנֶה` (ויקרא טז:כו) – השיבה מן המקום שאליו נשלחה הרעה. כאן "באים הלאה": חוזרים מן הבָּר. |
| 65 | `nu=za=kan QĀTĪ=ŠUNU apez ārri` | ואת ידיהם שוטף בזה. | ויקרא טז:כו | [equivalent] | `יְכַבֵּס בְּגָדָיו וְרָחַץ אֶת בְּשָׂרוֹ בַּמָּיִם; וְאַחֲרֵי כֵן יָבוֹא אֶל הַמַּחֲנֶה` (ויקרא טז:כו) – גם בויקרא מי ששילח את השעיר רוחץ לפני שישוב אל המחנה. |
| 65 | `nu=za=kan QĀTĪ=ŠUNU apez ārri` | ואת ידיהם שוטף בזה. | דברים כא:ו; ויקרא טו:יא | [divergence] | כאן שוטפים רק את הידיים, במי מלח, ואין כיבוס בגדים; ובמקרא – `יִרְחֲצוּ אֶת יְדֵיהֶם עַל הָעֶגְלָה הָעֲרוּפָה בַנָּחַל` (דברים כא:ו), רחיצת ידיים של הזקנים בטקס שמסלק אשמת דם מן הארץ. הפועל החתי (*arra-*) מתורגם `שטף`, כפועל שטיפת הידיים של הזב: `וְיָדָיו לֹא … |
| 67 | `n=at=kan ištarna arḫa uwanzi` | והם באים הלאה בינותן. | במדבר לא:כג; במדבר לא:כד | [equivalent] | `כָּל דָּבָר אֲשֶׁר יָבֹא בָאֵשׁ תַּעֲבִירוּ בָאֵשׁ וְטָהֵר` (במדבר לא:כג) – טיהור באש אחרי מלחמה, לפני השיבה אל המחנה – `וְאַחַר תָּבֹאוּ אֶל הַמַּחֲנֶה` (במדבר לא:כד). |
| 67 | `n=at=kan ištarna arḫa uwanzi` | והם באים הלאה בינותן. | – | [divergence] | במדבר לא מעבירים באש את הכלים, ואת האנשים רוחצים; כאן האנשים עצמם עוברים בין שתי מדורות. הדמיון טיפולוגי: אש כמחסום שהרעה אינה עוברת בו. |
| 70 | `nu=kan {UZU}GAB {UZU}ZAG.UDU ZAG-an {UZU}NÍG.GIG {UZU}ŠÀ zeiantaz {GIŠ}laḫḫurnuzzi dāi` | ואת החזה, את הכתף הימנית, את הכבד ואת הלב – מן המבושל – שָׂם על העלווה. | ויקרא ז:לד; ויקרא ז:לב | [equivalent] | `כִּי אֶת חֲזֵה הַתְּנוּפָה וְאֵת שׁוֹק הַתְּרוּמָה לָקַחְתִּי` (ויקרא ז:לד); `וְאֵת שׁוֹק הַיָּמִין תִּתְּנוּ תְרוּמָה לַכֹּהֵן` (ויקרא ז:לב) – החזה והחלק הימני הם המנות המובחרות גם בתורה. |
| 70 | `nu=kan {UZU}GAB {UZU}ZAG.UDU ZAG-an {UZU}NÍG.GIG {UZU}ŠÀ zeiantaz {GIŠ}laḫḫurnuzzi dāi` | ואת החזה, את הכתף הימנית, את הכבד ואת הלב – מן המבושל – שָׂם על העלווה. | – | [divergence] | בתורה הם מנת הכוהן; כאן הם, עם הכבד והלב, מנת האֵל, מבושלים ומונחים על העלווה. בחירת המנות – החזה והצד הימני – משותפת לטקסים רבים במזרח הקדום: דמיון כללי. |
| 75 | `nu 1 MÁŠ.GAL 1 UDU.NÍTA 1 ŠAḪ unnianzi` | תיש אחד, כבש אחד, חזיר אחד – נוהגים; | ויקרא יא:ז | [absent] | `וְאֶת הַחֲזִיר כִּי מַפְרִיס פַּרְסָה … טָמֵא הוּא לָכֶם` (ויקרא יא:ז) – בתורה החזיר טמא ואינו קרב; כאן הוא קרבן לאֵל, לצד התיש והכבש. בטקסים החתיים החזיר מופיע גם בטקסים של השאול ושל הטיהור. |
| 84 | `nu=war=aš=kan andan aššuli neyāru` | וְיִפָּנֶה פנימה בטובה!" | שמואל ב כד:טז | [divergence] | `וַיִּנָּחֶם יְהוָה אֶל הָרָעָה וַיֹּאמֶר לַמַּלְאָךְ הַמַּשְׁחִית בָּעָם רַב עַתָּה הֶרֶף יָדֶךָ` (שמואל ב כד:טז) – גם שם המגפה נגמרת כשהאל משנה את פניו כלפי העם; אבל שם הוא "מתנחם" מעצמו, ולא אחרי שהוזמן לסעודה. |
| 88 | `ANA UDU.'SÍG+MUNUS'=ma=ššan kuedani UDU.ŠIR nāwi pānza` | ואילו הרחל – אשר אַיִל טרם הלך עליה – | שמואל א ו:ז; במדבר יט:ב | [equivalent] | `וּשְׁתֵּי פָרוֹת עָלוֹת אֲשֶׁר לֹא עָלָה עֲלֵיהֶם עֹל` (שמואל א ו:ז) – גם הפלשתים, כשהם שולחים את המנחה אל האל, בוחרים בבהמות שעוד לא שימשו את האדם; וכן `פָרָה אֲדֻמָּה תְּמִימָה אֲשֶׁר אֵין בָּהּ מוּם אֲשֶׁר לֹא עָלָה עָלֶיהָ עֹל` (במדבר יט:ב). |
| 88 | `ANA UDU.'SÍG+MUNUS'=ma=ššan kuedani UDU.ŠIR nāwi pānza` | ואילו הרחל – אשר אַיִל טרם הלך עליה – | – | [divergence] | כאן התנאי הוא מיני – הרחל לא הורבעה; שם העול. הדמיון טיפולוגי: מה שניתן לאל צריך להיות "שלם", שלא נגע בו אחר. |


## Part UH: parallels index (Uḫḫamuwa, CTH 410)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-UH.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | `n=at mān kururaš kuiški DINGIR-LUM iyan ḫarzi` | ואם איזשהו אֵל של אויב עשה אותה, | שמואל א ו:ט | [equivalent] | `הוּא עָשָׂה לָנוּ אֶת הָרָעָה הַגְּדוֹלָה הַזֹּאת` (שמואל א ו:ט) – גם הפלשתים שואלים איזה אל "עשה" את המגפה. הדמיון טיפולוגי. |
| 5 | `1 UDU.NÍTA unniyanzi` | כבש אחד נוהגים; | ויקרא טז:י | [divergence] | `וְהַשָּׂעִיר אֲשֶׁר עָלָה עָלָיו הַגּוֹרָל לַעֲזָאזֵל יָעֳמַד חַי לִפְנֵי יְהוָה` (ויקרא טז:י) – בויקרא שעיר עזים, כאן כבש (*UDU.NÍTA*, זכר הכבשים – לא אַיִל מרביע כאצל אַשְׁחֶלָּה). אין כאן גורל: הבהמה נבחרת ונוהגים אותה. |
| 6 | `nu SÍG ZA.GÌN SÍG SA5 SÍG SIG7.SIG7 SÍG GE6 SÍG BABBAR=ya anda tarnanzi` | ומכניסים צמר כחול, צמר אָדֹם, צמר ירוק, צמר שחור וצמר לָבָן, | ויקרא יד:ד | [divergence] | `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד) – בטקס המצורע חוט אחד, "שני תולעת"; כאן חמישה צבעים, הנשזרים לעטרה. המשנה (יומא ד:ב, ו:ו) מספרת על "לשון של זהורית" שנקשרה בראש השעיר המשתלח – הפרט הקרוב ביותר לעטרת הצמר כאן; המקרא עצמו אינו יודע על כך ( |
| 6 | `nu SÍG ZA.GÌN SÍG SA5 SÍG SIG7.SIG7 SÍG GE6 SÍG BABBAR=ya anda tarnanzi` | ומכניסים צמר כחול, צמר אָדֹם, צמר ירוק, צמר שחור וצמר לָבָן, | – | [absent] | ). רייט (D. P. Wright, *The Disposal of Impurity*, 1987) ויאנובסקי ווילהלם (B. Janowski & G. Wilhelm, 1993) טענו לקשר היסטורי בין טקסי השילוח האנטוליים ובין טקס השעיר, דרך כִּצֻּוַתְנָה וצפון סוריה; זו טענה על מסירה ארוכה, לא על מקור ישיר. בקובץ הזה נאמר בכל ה … |
| 8 | `nu 1 UDU.NÍTA ḫaršanalanzi` | וכבש אחד מעטרים; | – | [absent] | בויקרא טז אין סימן על השעיר; |
| 8 | `nu 1 UDU.NÍTA ḫaršanalanzi` | וכבש אחד מעטרים; | – | [divergence] | המשנה (יומא ד:ב) קושרת לשון של זהורית בראשו, כדי להבדילו מן השעיר האחר – סימון, לא עיטור. |
| 9 | `nu UDU.NÍTA ANA KASKAL {LÚ}KÚR parā penniyanzi` | ואת הכבש – אל דרך האויב מסיעים קדימה. | ויקרא טז:כא; שמואל א ו:יב | [divergence] | `וְשִׁלַּח בְּיַד אִישׁ עִתִּי הַמִּדְבָּרָה` (ויקרא טז:כא) – בויקרא הבהמה מובלת אל המדבר; כאן אל "דרך האויב", הדרך שמובילה אל ארצו. וגם `וַיִּשַּׁרְנָה הַפָּרוֹת בַּדֶּרֶךְ עַל דֶּרֶךְ בֵּית שֶׁמֶשׁ` (שמואל א ו:יב) – הבהמות של המנחה הולכות בדרך אל ארצו של האל … |
| 12 | `nu kāša kūn UDU.NÍTA ḫaršanallandan tuk ANA DINGIR-LIM takšulanni ūnnummen` | הנה, את הכבש המעוטר הזה – לך, לָאֵל, לשלום נהגנו; | ויקרא טז:י | [divergence] | `וְהַשָּׂעִיר אֲשֶׁר עָלָה עָלָיו הַגּוֹרָל לַעֲזָאזֵל` (ויקרא טז:י) – גם בויקרא הבהמה "לעזאזל", אבל אין פנייה אל עזאזל ואין מתנה לו: הבהמה נושאת עוונות, ואינה מנחת שלום. |
| 17 | `nu=ššan KUR {URU}Ḫatti aššuli anda namma nāišḫut` | ואל ארץ חַתִּי – פְּנֵה פנימה בטובה עוד!" | שמואל ב כד:טז | [divergence] | `וַיִּנָּחֶם יְהוָה אֶל הָרָעָה` (שמואל ב כד:טז) – גם שם המגפה נעצרת כשהאל משנה את פניו; אבל האל מתנחם מעצמו, ולא מתוך מתנה. |
| 18 | `nu 1 UDU ḫaršannalantan INA KUR {LÚ}KÚR arḫa pennanzi` | ושה מעוטר אחד – אל ארץ האויב מסיעים הלאה. | ויקרא טז:כב | [divergence] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – היעד כאן ארץ האויב, ולא ארץ מנותקת; והכבש אינו "נושא" דבר: הכתוב אינו אומר שהרעה הועמסה עליו. הוא מנחת שלום, והמגפה תלך אחריו, עם האֵל, הביתה. |
| 21 | `ANŠE.KUR.RA{MEŠ}=wa tūriyan ḫarti` | "את הסוסים – רתמת; | חבקוק ג:ח | [equivalent] | `כִּי תִרְכַּב עַל סוּסֶיךָ מַרְכְּבֹתֶיךָ יְשׁוּעָה` (חבקוק ג:ח) – האל הרוכב על סוסים ומרכבה. |
| 21 | `ANŠE.KUR.RA{MEŠ}=wa tūriyan ḫarti` | "את הסוסים – רתמת; | מלכים ב כג:יא; מלכים ב ב:יא | [divergence] | `וַיַּשְׁבֵּת אֶת הַסּוּסִים אֲשֶׁר נָתְנוּ מַלְכֵי יְהוּדָה לַשֶּׁמֶשׁ` (מלכים ב כג:יא) – סוסים ומרכבות לשמש, שיאשיהו מבטל; ו־`וְהִנֵּה רֶכֶב אֵשׁ וְסוּסֵי אֵשׁ` (מלכים ב ב:יא). אלה הקבלות טיפולוגיות: האל כרוכב מרכבה – מוטיב משותף למזרח הקדום כולו, ולא קשר בי … |
| 33 | `n=at ANA DINGIR-LIM ŠA KASKAL-NIM iyanzi` | ואותם עושים לָאֵל של הדרך. | שמואל א ו:ח | [absent] | אין במקרא "אל הדרך". הקרוב ביותר: `וְשִׁלַּחְתֶּם אֹתוֹ וְהָלָךְ` (שמואל א ו:ח) – הדרך עצמה היא חלק מן הטקס. |


## Part PU: parallels index (Puliša, CTH 407)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-PU.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 2 | `[mān LUGAL-uš KU]R {LÚ}KÚR GUL-aḫzi` | [אם המלך] מוחץ [את א]רץ האויב, | שמואל ב כד:טו | [divergence] | `וַיִּתֵּן יְהוָה דֶּבֶר בְּיִשְׂרָאֵל מֵהַבֹּקֶר וְעַד עֵת מוֹעֵד` (שמואל ב כד:טו) – גם שם המגפה פוגעת בעם שבראשו מלך מנצח; אבל שם היא עונש על חטא המלך, וכאן היא מחיר הניצחון: המנוצחים, ואלוהיהם, הם שולחיה. |
| 8 | `[Š]A KUR-TI 1 {LÚ}ŠU.DAB 1 MUNUS-TUM=ya appanzi` | אסיר אחד ואשה אחת של הארץ – תופסים; | ויקרא טז:ה | [divergence] | `שְׁנֵי שְׂעִירֵי עִזִּים` (ויקרא טז:ה) – בויקרא בהמות; כאן בני אדם: אסיר מלחמה ואשה מארץ האויב, שיוחזרו אליה. |
| 13 | `nu=za=kan NÍ.TE=ŠU {TÚG}NÍG.LÁM{MEŠ} arḫa dāi` | ומעל גופו – את בגדי הפאר לוקח הלאה, | שמואל א יח:ד | [divergence] | `וַיִּתְפַּשֵּׁט יְהוֹנָתָן אֶת הַמְּעִיל אֲשֶׁר עָלָיו וַיִּתְּנֵהוּ לְדָוִד` (שמואל א יח:ד) – בגד שעובר מאדם לאדם, ועמו משהו מזהותו. ההקבלה טיפולוגית בלבד: יהונתן מעביר את מעמדו לאוהבו; המלך החתי מעביר את המגפה לתחליפו. |
| 20 | `mān=man kī ÚŠ-an ŠA KUR {LÚ}KÚR kuiški DINGIR-LIM LÚ DÙ-at` | "אם אולי את המגפה הזאת – איזשהו אֵל זכר של ארץ האויב עשה, | שמואל א ו:ט | [equivalent] | `אִם דֶּרֶךְ גְּבוּלוֹ יַעֲלֶה בֵּית שֶׁמֶשׁ הוּא עָשָׂה לָנוּ אֶת הָרָעָה הַגְּדוֹלָה הַזֹּאת` (שמואל א ו:ט) – אותו ספק, אותו פועל ("עשה"). הדמיון טיפולוגי. |
| 21 | `nu=wa=šši k[āš]a LÚ unuwantan ANA {LÚ}PŪḪĪ=ŠU piḫḫun` | ולו – הנה, איש מקושט נתתי לתחליפו! | ויקרא טז:כא | [divergence] | `וְנָתַן אֹתָם עַל רֹאשׁ הַשָּׂעִיר` (ויקרא טז:כא) – בויקרא העוונות "ניתנים" על הבהמה; כאן אדם ניתן לאֵל, "לתחליף". |
| 21 | `nu=wa=šši k[āš]a LÚ unuwantan ANA {LÚ}PŪḪĪ=ŠU piḫḫun` | ולו – הנה, איש מקושט נתתי לתחליפו! | – | [absent] | אין במקרא תחליף אנושי בטקס כפרה; התורה אוסרת את הקרבת האדם. |
| 22 | `IŠTU SAG.DU=ŠU=wa kā[š šall]iš {UZU}ŠÀ-za=wa kāš šalliš ÚR-azza=ya=wa k[āš šalli]š` | מראשו – זה [גד]ול; מלבו – זה גדול; וגם מירכו – [זה גד]ול. | – | [absent] | אין במקרא שבח כזה של קרבן או של תחליף. ההקבלה היא בתוך טקסי השילוח: שבח האֵילִים של אַשְׁחֶלָּה (AS 28: "שמנים … מן הכבד, מן הלב ומן הירך"). |
| 23 | `nu=wa=kan zik DINGIR-LIM LÚ k[ēz] LÚ unuwan[tit parā] galangaza ēš` | ואתה, אֵל זכר – באיש המקושט ה[זה] הֱיֵה מפויס! | ויקרא א:ד | [absent] | המילים `וְנִרְצָה לוֹ` (ויקרא א:ד) אינן כאן, ולא בכוונה: *galank-* הוא "לפייס, להשביע רצון" של אדם או של אֵל, ולא מונח של קרבן. |
| 26 | `EGIR-[pa=wa INA KUR {LÚ}KÚR p]ēdau` | ובחזרה [אל ארץ האויב יי]שא!" | ויקרא טז:כב | [equivalent] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – אותו פועל ("יישא") ואותו כיוון: משא שנישא אל ארץ אחרת. |
| 26 | `EGIR-[pa=wa INA KUR {LÚ}KÚR p]ēdau` | ובחזרה [אל ארץ האויב יי]שא!" | שמואל א ה:יא | [divergence] | כאן נושא אדם, והיעד הוא "בחזרה" – אל המקום שממנו באה המגפה; השווה `שַׁלְּחוּ אֶת אֲרוֹן אֱלֹהֵי יִשְׂרָאֵל וְיָשֹׁב לִמְקוֹמוֹ` (שמואל א ה:יא), שבו המגפה נשלחת לשוב אל מקומה עם אלוהיה. רייט (1987) ויאנובסקי ווילהלם (1993) רואים בטקסי השילוח של אנטוליה את הרקע … |
| 32 | `SÍG SA5 SÍG SIG7.SIG7 SÍG G[E6 SÍG BABBAR … ]ANA LUGAL KA×U-az parā ḫuitti[yazi]` | צמר אָדֹם, צמר ירוק, צמר ש[חור, צמר לָבָן …] – מפי המלך מושך החוצה. | ויקרא יד:ד | [divergence] | `וְעֵץ אֶרֶז וּשְׁנִי תוֹלַעַת וְאֵזֹב` (ויקרא יד:ד) – הצמר הצבוע של טקס המצורע; כאן הצמר נמשך מפי המלך – כאילו המחלה יוצאת ממנו בחוטים. |
| 43 | `[nu=war=aš m]ān DINGIR-LIM LÚ nu=wa=tta [GU4.MAḪ unuwa]ndan ašuša[n]tan mālantan AD[DIN]` | [ואם הוא] אֵל זכר – לְךָ [פר מקוש]ט, בעל־עגילים, *מקובל* נת[תי]; | – | [absent] | `לְרָצוֹן` של קרבנות התורה אינו כאן: *mālant-* הוא "מאושר, מוסכם" – פר שהאֵל יסכים לקבל, ולא מונח של כשרות קרבן. (`לרצון` שמור.) |
| 45 | `nu=w[a kī ÚŠ-an kā]š GU4.MAḪ EGIR-[pa] INA KUR {LÚ}KÚR pēdau` | ו[את המגפה הזאת –] הפר [הזה] בחזרה אל ארץ האויב יישא! | ויקרא טז:כב | [equivalent] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם` (ויקרא טז:כב) – כמו 26, ועכשיו הנושא בהמה, כבויקרא. |
| 45 | `nu=w[a kī ÚŠ-an kā]š GU4.MAḪ EGIR-[pa] INA KUR {LÚ}KÚR pēdau` | ו[את המגפה הזאת –] הפר [הזה] בחזרה אל ארץ האויב יישא! | – | [divergence] | פר ולא שעיר, ו"בחזרה אל ארץ האויב" ולא "אל ארץ גזרה". |


## Part AM: parallels index (Ambazzi, CTH 391.1)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-AM.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 3 | `nu=ššan ANA {DUG}DÍLIM.GAL S[A5 {GIŠ}ḫ]uw[alliš išḫuwaḫḫi` | ואל אגן אָ[דֹם – עצי־ח]וּוַ[לִּי אני זורה], | ויקרא יד:ה | [divergence] | `וְצִוָּה הַכֹּהֵן וְשָׁחַט אֶת הַצִּפּוֹר הָאֶחָת אֶל כְּלִי חֶרֶשׂ עַל מַיִם חַיִּים` (ויקרא יד:ה) – גם בטקס המצורע כלי ומים בפתח הטקס; כאן אגן אדום, עצים (בוערים?) ומים שמכבים אותם (6). הדמיון טיפולוגי. |
| 9 | `idālu=ya=kan ANA {LÚ.MEŠ}BĒLŪTIM šer QĀTAM[MA ki]štaru` | כך גם הרעה שעל האדונים – [ת]כבה!" | מלאכי ג:ב | [absent] | אין במקרא טקס של כיבוי אש כמשל להסרת רע. ההפך: `כִּי הוּא כְּאֵשׁ מְצָרֵף` (מלאכי ג:ב) – האל עצמו כאש המטהרת. |
| 16 | `n=an=šan ANA B[ĒLŪTI IŠTU GÌR{MEŠ}=ŠUNU kē]z kēzziya [ANA SAG.DU=ŠU šarā ḫ]uittiyai` | ואותו – על הא[דונים, מרגליהם, מצד ז]ה ומצד זה, [עד לראשו] – מושכת [למעלה]; | ויקרא יד:יד | [absent] | אין במקרא טקס כזה; וגם אין הוא נגיעה בדם (ויקרא יד:יד, על תנוך האוזן, הבוהן והאגודל): כאן הצמר עובר על כל הגוף ו"אוסף" את הרעה. |
| 21 | `arḫa=šši=kan idālu ḫuitteššar [ḫu]ittiyai! SAG.DU-it ŠU{MEŠ}-it GÌR{MEŠ}-it [ḫ]ūmantet {UZU}ÚR-it` | "משוך ממנו הלאה את המשיכה הרעה – מן הראש, מן הידיים, מן הרגליים, מכל איבר! | ויקרא יד:יד | [absent] | אין מקבילה מקראית ל"משיכת" הרעה מאיברי הגוף. הקרוב ביותר בטקסי הטיהור – מגע של חומר טקסי בחלקי הגוף (ויקרא יד:יד), שאינו מושך דבר החוצה. |
| 22 | `n=[a]t [id]ālauwaš [UN]{MEŠ} ḫarpanalliyaš [peški]` | ואותה – ל[אנשים הר]עים, ליריבים – [תן]! | ויקרא טז:כא | [divergence] | `וְשִׁלַּח בְּיַד אִישׁ עִתִּי הַמִּדְבָּרָה` (ויקרא טז:כא) – בויקרא הרעה מורחקת אל מקום שאין בו איש; כאן היא "ניתנת" לבני אדם אחרים: לאויבים, לרשעים. הדמיון טיפולוגי. |
| 23 | `[AN]A {LÚ.MEŠ}EN=ma TI-tar inn[arawatar MU{ḪI.A} GÍD.DA piški]` | ואילו לאדונים – חיים, [כוח, שנים ארוכות תן]!" | דברים ו:ב | [divergence] | `וּלְמַעַן יַאֲרִכֻן יָמֶיךָ` (דברים ו:ב) – גם בתורה אריכות ימים היא הברכה, אבל כשכר על שמירת המצוות; כאן מתנה שהאל מתבקש לתת בתמורה לרעה שנלקחה. התרגום `שנים ארוכות` (ולא `האריך ימים`) שומר על ההבדל. טיפולוגי. |
| 27 | `[k]ī=kan maḫḫan {LÚ.ME}[ {Š}ÁZLAG tannaran anniyanzi]` | "כשם שאת זה – [הכובסים עובדים את ה*גס*], | מלאכי ג:ב; תהלים נא:ט | [equivalent] | `וּכְבֹרִית מְכַבְּסִים` (מלאכי ג:ב) – אותו משל: הכובס המנקה, כדימוי לטיהור; ו־`תְּכַבְּסֵנִי וּמִשֶּׁלֶג אַלְבִּין` (תהלים נא:ט) – הכיבוס שמלבין (ראו 29). |
| 27 | `[k]ī=kan maḫḫan {LÚ.ME}[ {Š}ÁZLAG tannaran anniyanzi]` | "כשם שאת זה – [הכובסים עובדים את ה*גס*], | ירמיהו ב:כב | [divergence] | `כִּי אִם תְּכַבְּסִי בַּנֶּתֶר וְתַרְבִּי לָךְ בֹּרִית נִכְתָּם עֲוֹנֵךְ לְפָנַי` (ירמיהו ב:כב) – אצל ירמיהו הכתם אינו יורד. ההקבלות טיפולוגיות: משל הכובס הוא משל משותף לחברות שכיבסו בגדים בנחל; במקרא הכתם הוא עוון, כאן "רעה" וחולי. |
| 29 | `[n=a]t ḫarkišzi` | [והוא] מלבין – | ישעיהו א:יח | [equivalent] | `אִם יִהְיוּ חֲטָאֵיכֶם כַּשָּׁנִים כַּשֶּׁלֶג יַלְבִּינוּ` (ישעיהו א:יח) – ההלבנה כתוצאה של הטיהור; וגם שם הצמר: `אִם יַאְדִּימוּ כַתּוֹלָע כַּצֶּמֶר יִהְיוּ` (ישעיהו א:יח). טיפולוגי. |
| 31 | `{D}Zarnizaš {D}Tarpattaššiš lē=war=[uš] namma zaḫḫiškiši17` | "זרניזה, תרפתשי – אַל תיאבק [בהם] עוד! | בראשית לב:כה | [divergence] | `וַיֵּאָבֵק אִישׁ עִמּוֹ עַד עֲלוֹת הַשָּׁחַר` (בראשית לב:כה) – אדם נאבק עם ישות אלוהית; שם יעקב שורד ומתברך, כאן האלים "נאבקים" באדם במחלה, ומתבקשים להפסיק. דמיון של פועל ומוטיב בלבד (`נאבק` הוא כאן *zaḫḫ-*, כבחוקים), טיפולוגי. |
| 35 | `[n]=at=šan ANA {LÚ.MEŠ}EN-TIM kunni ANA QĀTĪ=ŠU [GÌ]R=ŠU nāi` | ואותו – אל האדונים, לימין, אל ידו ואל רגלו – מפנה. | ויקרא יד:יד | [divergence] | `וְנָתַן הַכֹּהֵן עַל תְּנוּךְ אֹזֶן הַמִּטַּהֵר הַיְמָנִית; וְעַל בֹּהֶן יָדוֹ הַיְמָנִית וְעַל בֹּהֶן רַגְלוֹ הַיְמָנִית` (ויקרא יד:יד) – גם בטיהור המצורע הצד הימני, היד והרגל; שם דם ושמן ניתנים עליהם, כאן בדיל כרוך בצמר מוצמד אליהם ונלקח שוב, אל העכבר. טיפו … |
| 37 | `n=at=kan [A]NA PÉŠ.TUR nāi` | ואותו מפנה אל העַכְבָּר הקטן; | שמואל א ו:ה | [divergence] | `וְצַלְמֵי עַכְבְּרֵיכֶם הַמַּשְׁחִיתִם אֶת הָאָרֶץ` (שמואל א ו:ה) – גם בשמואל עכברים במנחה שנשלחת עם המגפה אל האל; אבל שם עכברי זהב הם דמות המכה (העכברים "המשחיתים את הארץ"), וכאן עכבר חי הוא הנושא שמוציא את הרעה. טיפולוגי. |
| 40 | `[nu]=war=at kā[š PÉŠ.]TUR-aš pargauwaš ḪUR.SAG{ḪI.A}-aš ḫallūwaš ḫār[iyaš dalu]gauwaš KASKAL{ḪI.A}-aš pēdāu` | [ו]אותה [העכבר] הקטן הז[ה] אל ההרים הגבוהים, אל העמקים העמוקים, אל הדרכים [הא]רוכות יישא!" | ויקרא טז:כב | [equivalent] | `וְנָשָׂא הַשָּׂעִיר עָלָיו אֶת כָּל עֲוֹנֹתָם אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – אותו פועל ("יישא"), ואותו יעד מנותק. |
| 40 | `[nu]=war=at kā[š PÉŠ.]TUR-aš pargauwaš ḪUR.SAG{ḪI.A}-aš ḫallūwaš ḫār[iyaš dalu]gauwaš KASKAL{ḪI.A}-aš pēdāu` | [ו]אותה [העכבר] הקטן הז[ה] אל ההרים הגבוהים, אל העמקים העמוקים, אל הדרכים [הא]רוכות יישא!" | – | [divergence] | כאן הנושא עכבר, והיעד מתואר בשירה – הרים גבוהים, עמקים עמוקים, דרכים ארוכות – ולא "ארץ" אחת. טיפולוגי. |
| 41 | `[nu PÉ]Š.TUR arḫa tarnanzi` | [ואת העכבר] הקטן משלחים הלאה. | ויקרא יד:ז; ויקרא יד:נג | [divergence] | `וְשִׁלַּח אֶת הַצִּפֹּר הַחַיָּה עַל פְּנֵי הַשָּׂדֶה` (ויקרא יד:ז); `וְשִׁלַּח אֶת הַצִּפֹּר הַחַיָּה אֶל מִחוּץ לָעִיר אֶל פְּנֵי הַשָּׂדֶה` (ויקרא יד:נג) – אותו פועל (*arḫa tarna-* "לשחרר הלאה" = `שִׁלַּח`), ובעל חיים חי שמשוחרר ונושא את הרעה הלאה. |
| 41 | `[nu PÉ]Š.TUR arḫa tarnanzi` | [ואת העכבר] הקטן משלחים הלאה. | – | [absent] | הציפור עצמה אינה בטקסים החתיים האלה: כאן עכבר. ההקבלה טיפולוגית. |
| 89 | `adanna=ma=tta UZ6-an peḫḫi` | ואילו לאכול – עֵז אני נותנת לך!" | ויקרא טז:ה | [divergence] | `שְׁנֵי שְׂעִירֵי עִזִּים לְחַטָּאת` (ויקרא טז:ה) – גם כאן עז (נקבה), אבל היא לא נושאת את הרעה: העכבר נושא, והעֵז היא מזון לאל. טיפולוגי. |
| 95 | `n=ašta UZ6 {D}Alauwaimi šipanti` | ואת העֵז – לאֲלַוַּיְמִי מקריבה: | ויקרא טז:ה | [divergence] | `וּמֵאֵת עֲדַת בְּנֵי יִשְׂרָאֵל יִקַּח שְׁנֵי שְׂעִירֵי עִזִּים לְחַטָּאת` (ויקרא טז:ה) – שעירי עזים בויקרא, כאן עֵז נקבה; בויקרא האחד לחטאת והאחד לשילוח, וכאן העז היא הקרבן, והעכבר הוא המשולח. טיפולוגי. |
| 98 | `n=ašta ZAG-an {UZU}GEŠTU-an arḫa kuērzi` | ואת האוזן הימנית כורתת הלאה; | ויקרא יד:יד | [divergence] | `וְנָתַן הַכֹּהֵן עַל תְּנוּךְ אֹזֶן הַמִּטַּהֵר הַיְמָנִית` (ויקרא יד:יד) – האוזן הימנית בטקס הטיהור: שם של האדם המיטהר, כאן של הבהמה המוקרבת, ומנה לאל. טיפולוגי. |
| 102 | `ZAG-an{UZU}ZAG.UDU zanuwanzi` | את הכתף הימנית מבשלים; | ויקרא ז:לב | [divergence] | `וְאֵת שׁוֹק הַיָּמִין תִּתְּנוּ תְרוּמָה לַכֹּהֵן` (ויקרא ז:לב) – הצד הימני כמנה המובחרת; כאן מנה לאלים. טיפולוגי (כמו AS 70). |
| 113 | `namma KÙ.BABBAR GUŠKIN [{NA4}ZA.GÌN {NA4}]GUG {NA4}KÁ.DINGIR.RA {NA4}lullūri {NA4}TI [{NA4}barašḫ]aš AN.BAR NAGGA URUDU …` | ועוד: כסף, זהב, [אבן סַפִּיר], אֹדֶם, אֶבֶן־בָּבֶל, אבן לוּלּוּרִי, אבן תִּי, [אבן בַּרַשְׁ]חָה, ברזל, בְּדִיל, נחושת, א … | שמואל א ו:ה | [divergence] | `וּנְתַתֶּם לֵאלֹהֵי יִשְׂרָאֵל כָּבוֹד` (שמואל א ו:ה) – המנחה היקרה לאל שנשלחת עם המגפה; כאן מעט מכל מתכת ואבן, מפוזר לאֵל. טיפולוגי. |
| 180 | `n=an=kan apēdan[i] šipanti` | אותו לו מקריבה. | שמואל א ו:ד; ויקרא יא:כט | [absent] | `עַכְבְּרֵי זָהָב` (שמואל א ו:ד) – עכברי זהב כמנחה; כאן עכבר חי מוקרב. העכבר טמא בתורה (ויקרא יא:כט) ואינו קרב. טיפולוגי. |
| 197 | `n=at ḫantezz[iy]aš KÁ-aš ZAG-az GUL-aḫzi` | ואותו – אל הצד הימני של השער הראשון – מוחצת. | שמות יב:כב; שמות יב:כג | [divergence] | `וְהִגַּעְתֶּם אֶל הַמַּשְׁקוֹף וְאֶל שְׁתֵּי הַמְּזוּזֹת מִן הַדָּם` (שמות יב:כב); `וְלֹא יִתֵּן הַמַּשְׁחִית לָבֹא אֶל בָּתֵּיכֶם לִנְגֹּף` (שמות יב:כג) – גם שם מכים (מגיעים) במזוזה, כדי שהמשחית לא ייכנס לבית. כאן בענף עץ, בלי דם, בצד הימני של השער; ובבקשה ש … |
| 227 | `[nu idāl]u inan anda lē tarnatt[i]` | [ואת] החולי [הר]ע – פנימה אַל תכניס! | שמות יב:כג | [divergence] | `וְלֹא יִתֵּן הַמַּשְׁחִית לָבֹא אֶל בָּתֵּיכֶם לִנְגֹּף` (שמות יב:כג) – גם שם האל מתבקש (מובטח) שלא יניח למשחית להיכנס; כאן "החולי הרע" עצמו, כחומר. טיפולוגי. |
| 232 | `n=ašta MÁŠ.ŠIR {D}Tar[pattašša]n šipanti` | ואת תיש־ההרבעה – לתַּ[רְפַּתַּשִּׁי] מקריבה; | ויקרא טז:ה | [divergence] | `שְׁנֵי שְׂעִירֵי עִזִּים` (ויקרא טז:ה) – עז זכר גם כאן, אבל קרבן לאל ולא נושא של רעה. טיפולוגי. |
| 234 | `nu=ššan ēsḫar ANA GAL.ZABAR tarn[āi]` | ואת הדם אל כוס האָרָד מכני[סה]; | ויקרא יד:ה | [divergence] | `וְשָׁחַט אֶת הַצִּפּוֹר הָאֶחָת אֶל כְּלִי חֶרֶשׂ עַל מַיִם חַיִּים` (ויקרא יד:ה) – הדם נאסף בכלי; שם לזאת מזים על המיטהר, כאן לא נאמר מה נעשה בו (אולי 235: אל הקדרות שבשער). טיפולוגי. |
| 251 | `[ … ] INA KUR LÚ.K[ÚR … ] … gulliya nanni` | […] אל ארץ האו[יב …]… אל *הגומה* הרחק! | ויקרא טז:כב | [divergence] | `אֶל אֶרֶץ גְּזֵרָה` (ויקרא טז:כב) – גם כאן היעד הסופי של הרעה הוא ארץ אחרת: ארץ האויב, כבטקסי אַשְׁחֶלָּה ופּוּלִישָׁה. |


## Part AM2: parallels index (Ambazzi, second version, CTH 391.2)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-AM2.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 1 | `papratar [:mulātar] SUD-ru` | הטומאה, [המוּלָאתַר] – תימשך! | ויקרא טז:טז | [equivalent] | `וְכִפֶּר עַל הַקֹּדֶשׁ מִטֻּמְאֹת בְּנֵי יִשְׂרָאֵל` (ויקרא טז:טז) – הטומאה כדבר שיש להוציא. |
| 1 | `papratar [:mulātar] SUD-ru` | הטומאה, [המוּלָאתַר] – תימשך! | – | [divergence] | בויקרא הטומאה מוסרת מן המקדש בדם; כאן היא "נמשכת" מגוף המלך כחוט. טיפולוגי. |
| 8 | `GADA GIM-an {LÚ.MEŠ}ŠÀ.TAM tannarantan KIN-zi` | "כשם שאת בד־הפשתן – פקידי המשק עובדים את ה*גס*, | מלאכי ג:ב | [equivalent] | `וּכְבֹרִית מְכַבְּסִים` (מלאכי ג:ב) – ראו AM 27. טיפולוגי. |
| 11 | `ḪUL-uwašš=a UN{MEŠ}-aš ANZELLU ḫurkilaza paprannaza mulatnaza [_] NÍ.TE LUGAL QĀTAMMA parkuešdu` | כך גם גוף המלך – מן האִסּוּר של האנשים הרעים, מן התועבה, מן הטומאה, מן המוּלָאתַר – יִטְהַר!" | ויקרא יח:כב; ויקרא טז:טז | [equivalent] | `תּוֹעֵבָה הִוא` (ויקרא יח:כב) – *ḫurkil* היא בחוקים החתיים המילה לעבירות המין האסורות, כמו `תּוֹעֵבָה` בתורה; ו־`מִטֻּמְאֹת בְּנֵי יִשְׂרָאֵל` (ויקרא טז:טז). |
| 11 | `ḪUL-uwašš=a UN{MEŠ}-aš ANZELLU ḫurkilaza paprannaza mulatnaza [_] NÍ.TE LUGAL QĀTAMMA parkuešdu` | כך גם גוף המלך – מן האִסּוּר של האנשים הרעים, מן התועבה, מן הטומאה, מן המוּלָאתַר – יִטְהַר!" | – | [divergence] | כאן התועבה והטומאה אינן מעשים של המלך, אלא דבר שבא "מן האנשים הרעים" – מן הכישוף של האויבים – ודבק בגופו, ויש לטהר אותו ממנו כמו בגד מלוכלך. |
| 17 | `LUGAL-i=ya ḪUL-uwaš UN{MEŠ} ANZELLU ḫurkil papratar :mulātar QĀTAMMA arḫa araiddu` | כך גם מעל המלך – האִסּוּר של האנשים הרעים, התועבה, הטומאה, המוּלָאתַר – יקום הלאה!" | ויקרא יח:כב | [equivalent] | `תּוֹעֵבָה הִוא` (ויקרא יח:כב) – ראו 11. |
| 21 | `n=at=kan [ANA PÉŠ.TUR] dāi` | ואותו שָׂמָה [אל העכבר הקטן]; | שמואל א ו:ה | [divergence] | `וְצַלְמֵי עַכְבְּרֵיכֶם הַמַּשְׁחִיתִם אֶת הָאָרֶץ` (שמואל א ו:ה) – ראו AM 37. טיפולוגי. |
