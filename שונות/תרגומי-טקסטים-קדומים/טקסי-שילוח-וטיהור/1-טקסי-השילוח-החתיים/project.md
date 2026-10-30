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
