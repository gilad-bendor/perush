# Telipinu and the vanishing gods

Project of `../` (the Hurro-Hittite and Old Anatolian myths; Round 5 run 2, 2026-10-30). Tool: `tools/hittite_tools.py`
(read `../corpus.md`, `../renderings.md`, `../translator-brief--myths.md`).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| TE | The Telipinu myth, first version (CTH 324.1): the god's disappearance, the land's withering, the search, the bee, Kamrušepa's ritual, the anger sent to the dark earth, the return | HPM CTH 324.1 (Rieken et al.): `sources/HPM/MYTH--CTH-324.1/` | 267 |
| SG | The Sun-god's disappearance and return (CTH 323.1; 323.2 as `2:`) – Round 8 run 5 | HPM CTH 323.1–2 | 219 |
| LI | The Storm-god in Liḫzina (CTH 331.1; 331.2 as `2:`) – Round 8 run 5 | HPM CTH 331.1–2 | 104 |
| AZ | Anzili and Zukki (CTH 333) – Round 8 run 5 | HPM CTH 333 | 104 |
| MU | The Storm-god's *mugawar* (CTH 325; 31 % damaged, taken whole: the lead's call) – Round 8 run 5 | HPM CTH 325 | 274 |

Labels and numbering: `../corpus.md` § Labels. Rank 3 (after drafting only): the HPM editors' German translation
(`hittite_tools.py tr KEY`), for the composites none (Neu 1996 and Hoffner 1998 are © and not in hand).

## Notes
- The project was renamed from `5-טליפינו/` on 2026-11-14 (Round 8 run 5), when the vanishing-god myths beside Telipinu joined it (guidelines §1: the project follows its scope).
- The other Telipinu versions (CTH 324.2–9) are fetched to `sources/HPM/` but not translated (small fragments of the same story); nor CTH 322, 326–328, 332, 334–337 (fragmentary vanishing-god pieces outside the plan).

## Open decisions
(none yet)

## Proposals
(filled by the translators: every new rendering, every pre-set row changed, gates, cruxes)

### Translator 4, TE
Drafted 2026-10-31: `annotated-TE.rtl.md`, all 267 clauses, with a Hebrew intro and `##` headings per HPM §. `verify TE
--strict` 0, `verify --strict` (all keys) 0, `selftest` 0, `check_bible_quotes.py` 0. HPM's German read after the whole
text was drafted; every correction is in a **תרגומים** bullet.

**1. The fixed strings (copy byte for byte).**
- The four angers (M2 plus two): *karpi-* `חרון`, *kartimmiyatt-* `זַעַם` (always vocalized: the myth §H6 trap), *waštul*
  `חטא`, **_šāwar_ `טינה`** (new: HPM "Ärger"; kept apart from *šāi-* `זָעַם`, the verb, 15, 50); the list =
  `החרון, הַזַּעַם, החטא (ו)הטינה של תֶּלִיפִּינוּ` (180, 186, 217, 223, 241; without *waštul* 190, 195, 222); with suffixes
  `את חרונו / את זַעְמוֹ / את חטאו / את הטינה לקחתי` (103–106, 172–176, 203–206).
- The analogy: *māḫḫan* … *QĀTAMMA* = **`כמו ש… – כך …`**, with *U* / *-a* **`כך גם …`** (133–195); the presentative
  *kāša* = `הִנֵּה … מונח:` (F21; 125–137).
- The return reverses §4′ word for word: *IṢBAT* / *wišuriya-* `תפס` / `חנק` → *tarna-* `שילח` (19–26 → 245–250); *mimma-*
  `מיאן ב־` (25–26) → *penništa* `*קיבלה*` (251–253, with HPM "erkannte an"; TLHdig's *penna-* "drive" rejected).
- F37: `האדמה האפלה` (154, 235: `בתוך האדמה האפלה`, because F37 does not accept `באדמה`).

**2. New renderings (first line).** *kammara-* `ערפל` (19; HL1 has `ענן` for a swarm, HE *alpa-* `ענן`); *tuḫḫui-* `עשן`;
*wišuriya-* `חנק` (20; SR `נמעך`: a split by sense); *kalmi(šni)-* `גזר`; GUNNI `אח`; TÙR `דיר`; É.GU₄ `רפת`; *mimma-* `מאן`
(25; Jer 31:14 / Gen 37:35); *ḫuinu-* `הריץ` (16, SR); *ḫalki-* `תבואה`, {D}Immarni `אִימַּרְנִי`, *šalḫiyant-* `צמיחה`,
*mannitti-* `*שגשוג*`, *išpiyatar* `שובע`; *gimra-* `בַּבָּר`, *wellu-* `כַּר` (`אחו` is Egyptian's), *marmara-* `בִּצָּה`;
*ḫalenzu-* `עדשה`; *armaḫḫ-* `התעבר`; *ḫat-* `יבש`; *paršdu-* `ניצן`; PÚ `מעיין`; *kašt-* `רעב`, **_kištant-_ `כפן`** (two hunger
words: Job 30:3); EZEN₄ `חג`; *ḫara(n)-* `נשר` [equivalent]; *ḫariya-* `עמק`; *kuwaliu-* `*שקט*` (HPM); *nakki-* `נכבד`; NÍG.GUL
`פטיש`; NIM.LÀL `דבורה`; *partawar* `כנף`; *amiyant-* `קטן`; *tuḫš-* `חתך`; *pippa-* `הרס`; *lelaniya-* `השתולל`; *ḫattara-*
`עוקץ` (96, HPM; TLHdig "hoe"); *kukuš-* `כתת`; *galank-* `מפויס` (R1a); PÈŠ `תאנה`, SERDUM `זית`, GEŠTIN.HÁD.DU.A `צימוק`,
LÀL `דבש`, Ì.NUN `חמאה`, *miu-* `רך`, *militešš-* `מתק`; DIM₄ / BAPPIR `לתת` / `לחם־שכר`; *takšant-* `מאוחד`; *papparš-*
`זילף`; *uwantiwanta-* `ברק`, *tetḫai-* `רעם` (HE); *zaḫḫ-* `חבט` (HE; `הכה` reserved); *arai-* "stop" `עצר` (UL);
*pattar* `נפה`; *karaš* `תבואה` (EL); *tuekka-* `עצם` (SR) in *tuggaz* `מעצמו`; *waršamma-* `זרדים`; *ura-* `נשרף` (`בער`
reserved); *uriwara-* `לוהט`; *tepšu-* `יבש`; É NA₄KIŠIB `בית החותם` (UL); ŠEN `צינור`; *ḫatalkišna-* `עוזרד`; *ḫima-*
`*דמות*`; EME `לשון`; *patalḫa-* `כף רגל` (UL); *šukšuka-* `שער־המצח`; {SÍG}*ēšri* `גיזה` (IL *ešri-* `תואר`: a split by
determinative); *tipa-* `כף`; ÚTUL `סיר` (KU); KASKAL.LUGAL `דרך המלך` (Num 20:17); *annašnant-* `עמוד`; *wawarkima-* `ציר־הדלת`;
*ḫila-* `חצר`, *ḫilammar* `בית־השער` (UL); NI.DUḪ `שוער`; GIŠ.IG `דלת`; *ḫattalu-* `בריח`; ZABAR `אָרָד`, *palḫi-* `דוד`,
*ištappulli-* `מכסה` (= EL's NAKTAMMU), A.BÁR `עופרת`, *zakki-* `מנעול`; *ḫandai-* `ערך` (247, and its participle at 150);
*innarawatar* `אונים` (Isa 40:29); EGIR.UD-MI `הימים הבאים`; *eya-* `אֵיָה`; *kurša-* `עור`; *kunna- walla-* `ירך הימין`; Ì of
an animal `שומן` (259; Ì for oil `שמן`, 134, 147: as decided for ZA / EL).

**3. Gates and names (escaped, none bent the Hebrew).**
- Law §H4 `חטא` misses the spelling *wašdul* / *ušdul* (160, 186, 205, 217, 223, 241): add `wašd|ušd` (as for EL 1.2:59).
- Ritual §H2 `mamma\b` (Mammai) fires inside *šamamma* (129, `[היתר שם]`): anchor `(?<![a-zš])mamma`.
- Law §H4 `קנה`: GI "reed" (150) – translator 2's `\bgi\b` proposal.
- Law §H2 `\{d\}utu` vs *taknaš* {D}UTU (232; `[היתר שם]`) – translator 3's proposal.
- F18 (`aššul` `בטובה`) does not see the macron spelling *āššuli* (124; harmless – the Hebrew has it anyway).

**4. Cruxes (open).** 7–10 (the broken start); 13–14 *kurkuriya-*; 16–17 (the shoes are the literature's, not the text's);
28 {D}Immarni, *mannitti-*; 29 *uli-* (HPM "hid"); 30 *ḫalenzu-*; 56 *kuwaliu-*; 83 *ḫanti*; 85 *walganu-*; 96 the sting;
101 *kišnu-*; 115–121; 122 *walḫeššar* water; 125–130 *galaktar*, *parḫuena-*, *šamamma*, *talliya-*, *šakuwan*; 137 *līti*;
149 the woods; 164 Ḫapantali; 166, 175 *warku-*; 168 *karaš*; 196–200 the gods under the hawthorn, *ḫima-*; 214 *šukšuka-*;
251–253 *penništa*; 260 {D}GÌR; 264 *nuš tumantiyaš*.

**5. Parallels for the index.** Jer 14:5, Gen 37:35 (25: the mother rejects her young); Ps 44:24, 1 Kgs 18:27, Ps 104:29 (29:
the absent, "sleeping" god); Joel 1:10, Hag 1:10 (31); Joel 1:12, Hag 1:11 (35); Joel 1:18 (38); Joel 1:20, Jer 14:3 (39); Deut
28:24 (41); Hag 1:6, Lev 26:26 (45: eating without satiety); Deut 31:17 (51: the hidden god, the good gone); Ps 78:65 (154: the god
rising in fury); Num 20:17 (230–231: the king's road, not field or vineyard); Deut 28:23 (235: bronze and iron); Isa 40:29 (255);
Lev 7:32 (266: the right thigh). In words only: the Akkadian "land of no return" (240); Etana's eagle (53).

### Round 8 run 5, translator 1, SG LI AZ
Drafted 2026-11-14: `annotated-SG.rtl.md` (219 clauses, CTH 323.1 + 323.2), `annotated-LI.rtl.md` (104, CTH 331.1 + 331.2),
`annotated-AZ.rtl.md` (104, CTH 333), each with a Hebrew intro and `## CTH …, § n′ – …` headings, and
`translation--intro-{SG,LI,AZ}.rtl.md`. `verify SG/LI/AZ --strict` 0 problems; `check_bible_quotes.py` 0 on each file.
HPM's German read after each section was drafted; every correction is in a **תרגומים** bullet (≈ 45 lines changed:
mostly mood – imperatives and futures read as pasts – and speech limits).

**1. Fixed strings (copy byte for byte).**
- *Ḫaḫḫima-* = `קִפָּאוֹן`, **vocalized at every occurrence** (unvocalized `קפאון` is unreadable; the plene `קיפאון`
  would not match the name check, which looks for the stripped vocalized form `קפאון`); the common noun "freezing" in notes `קיפאון`.
  *tinnu-* "paralyse, bring to a standstill" `שיתק` (SG 1:40–1:75: `[קִפָּאוֹן] את כל הארץ שיתק,`); "seized" *IṢBAT*
  `תפס` (TE 19): `ואת זַבַּבָּה קִפָּאוֹן תפס.`, `וגם אותו קִפָּאוֹן תפס.`; *ḫarzi* `מחזיק`.
- The TE suffocation scene copied in AZ 43–50 and its reversal AZ 66–73 (TE 19–24, 245–253): `[את הבית תפס הערפל],` /
  `את החלונות תפס העשן,` / `[על הַכַּנִּים נחנקו הָאֵלִים],` / `על האח [נחנקו הגזרים],` / `בדיר – הצאן [נחנקו],` /
  `[ברפת] נחנקו השוורים;` / `[הָאֵם וגם הילד שלה – נחנקו],` / `האשה [וגם האיש שלה – נחנקו].`; reversal
  `… הערפל שילח,` / `את [החלונות] – העשן שילח,` / `על הַכַּנִּים – [הָאֵלִים] החלימו,` … (SIG5-*yant-* `החלימו`, IL 92).
  AZ has *INA TÙR=kan* without *anda*, so `בדיר` (TE 23 `בתוך הדיר` has *anda*); *É-er* and *AB* change places
  against TE 19–20, and the Hebrew follows the Hittite.
- TE 236 = LI 1:37 byte for byte: `מכסיהם – של עופרת,`.
- The ritual refrains of SG §17″–§22″: `אֲדוֹן הָאֵל לפני הָאֵל הולך,` / `נעים מקטיר,` (*šanezzi šameš(iya)-*, UL 2:86
  `הקטירה`) / `לחשים לוחש,` (*ḫukmai- ḫuek-*) / `שלוש פעמים מקיף,` (*irḫai-*) / `לחם עבה מתוק אחד – לאֵל הַשֶּׁמֶשׁ – פורס,`
  (AM 46, 91–92) / `על שולחן אֵל הַשֶּׁמֶשׁ שָׂם,` / `ומַרְנוּוַנְט, שכר־דבש, יין – לאֵל הַשֶּׁמֶשׁ מקריב.` (*šipant-*
  `מקריב`, the rituals) / *QĀTAMMA* "likewise" `כמו כן` (not the analogy formula's `כך`) / `כאשר טוב לאכול,`
  (*mān adanna SIG5-atta*). SG 1:140–1:161 are feminine (the Old Woman), 1:163ff. masculine (the "lord of the god").
- Reserved-word stand-ins: *kuwašk-* (iter. of *kuen-* "strike") `תוקף` (`הכה` reserved); *mutu* "husband" `האיש שלה`
  (`בעל` reserved in the myths); EN SÍSKUR `אֲדוֹן הַטֶּקֶס`, BĒL DINGIR-LIM `אֲדוֹן הָאֵל`; *war-* "burn (intr.)" `דולק`
  (`בער` reserved); *peran* "forward" `קדימה` (`לפנים` is *karū*'s).

**2. New renderings (first line).** SG: *munnai-* `הטמין` (1:8; `הסתיר` is HE's *kariya-*); {DUG}ḪAB.ḪAB `קיתון`
(1:14); *ḫappina-* `להבה` (1:16, 1:176); *ḫaḫḫal-* `שיח`; *ikšai-* `*נכבה*`; *antaki-* `חלציים` (1:20; `מתניים` is
*paršina-*); *kariya-* `עטה` (1:21, AZ 11; AP `עטוי`); *ištappulli-* `מכסה` (TE); *walla-* `השתבח` / `הֱיוּ מְשֻׁבָּחִים`
(1:11, 1:24; M4 `שיבח`); *šakai-* `אות` (1:28, 1:39); *ḫuišnu-* `החיה` (law); *ḫatnu-* `ייבש`; *ḫuwant-* `רוח`;
*appuzzi-* / Ì.UDU `חֵלֶב` (vocalized; `שומן` stays *šakan*); *šanḫ-* "seek" `דרש` (as TE 52–56; my first draft's `חיפש` aligned to TE during MU); *tuekka-* pl. "limbs" `איברים` (SG 1:69, LI 2:14; SR sg. `עצם`); *ḫarš-* `בקע` (1:80); *terip-* `חרש`; *nai-*
`הטה` (HL2 162.1); *damenk-* `הצמיד` / `צמוד`; *šuḫḫa-* `פיזר` (rituals); *aiš* `פה`; *ḫala-* `*ראש*`; *nakkešš-*
`הכביד`; *tarnatt-* `*מנה*`; MAŠDA `עני`; *mugawar* `הפצרה`, *mugai-* `הפציר` (M4, as set); ZABAR `אָרָד`; *arimpa-*
`*משען*`; GAG `יתד`; MAR `מעדר`; *alkišta-* `ענף`; *laḫḫura-* `דוכן`; DUG `כלי`; GAL "cup" `כוס`; *marnuwant-*
`מַרְנוּוַנְט` (IL 14); KAŠ.LÀL `שכר־דבש`; GEŠTIN.LÀL `יין־דבש`; SÍG BABBAR / ZA.GÌN / SA5 / SIG7.SIG7 / GE6 `צמר
לָבָן / כחול / אָדֹם / ירוק / שחור`; SÍG *pittulaš* `חוט־צמר`; *kina-* `מסונן`; GI.DÙG.GA `קנה טוב` (law H4 `קנה`
licensed by GI, [equivalent] Jer 6:20); *ḫurnai-* `ריסס` (IN 2.6); UNŪTU `חפצים` (HL1); MA.SÁ.AB `סל`; EMṢU `קֵבָה`
(UH 32); GA.KIN.AG `גבינה`; *ašaš-* `הושיב`; {DUG}*paḫḫunalli-* `כלי־האש` (`מחתה` avoided: Lev 10:1); *ḫatk-* `סגר`;
*lukk-* "dawn" `כשעולה השחר` (AS 42); KU7 `מתוק`; *parši(ya)-* `פרס` (AM); {UZU}*šuppa* `בשר`; *ḫuišu-* `חי`;
ZAG.UDU `כתף`; GABA `חזה`; NÍG.GIG `כבד`; *zanu-* `בישל`; {UZU}TU7 `תבשיל` (IN); NINDA.Ì.E.DÉ.A `עוגת־שמן`
(`בלולה בשמן` avoided); DÍLIM.GAL `צלחת גדולה` (`קערה` is *ḫuppar-*'s); *išpai-* "satiety" `שובע` (1:199, TE);
MUḪALDIM `מבשל` (IN). LI: *išḫa-* `אדון`; *tarpi-*, *parninka-*, *ḫapanzi* transliterated; *išḫaḫru-* `דמעות` (HE);
IGI-*aš* GIG `מחלת העיניים`; *šipa-* `מוגלה`; *ḫarki-* (eye) `הלָבָן`; *inan* `חולי` (AM); *damašš-* `לחץ`;
*ḫarganau-* `כף היד`, *kalulupa-* `אצבע`, *šankuwai-* `ציפורן`; *lalukkai-* `האיר`; *walula-* `*אישון*`; *enera-*
`גבה`, *laplipa-* `ריס`; *aniya-* "work (land)" `עבד`; *warš-* `קצר` (HL2); *tiyeššar* `מטע`; *ḫašp-* "fell" `גדע`;
*ḫink-* mid. "bow" `קד` (active "present" `הציג`, HL1: a split by voice; `השתחווה` is MU's *aruwai-*); *dala-* `הניח`; KANKAL `אדמה נטושה`;
*mališku-* `חלש`; *ḫatteššar* `גומה` (AM 251); *tarupp-* `כינס` (KU 138); *marriya-* `נמס` (KU 251). AZ: KA.GAG
`שכר־קַגַּג`; LAM.GAL `עץ־פיסטוק`; *gulš-* `חקק` (IN); A.DA.GUR `קני־שתייה`; *išḫiya-* "bind (in)" `כרך` (the law
sense "obligate" `חייב`); *šunna-* `מילא`; *walḫi-* `וַלְחִי` (IL 14); MUNUS ŠÀ.ZU `מיילדת`; *laḫuwai-* `יצק` (SR);
*šarku-* `נעל` (UL); TŪDITTU `סיכה`; *pašk-* `תקע`; *ḫubiki-* `צעיף`; *ḫantezzi-* / *appezzi-* `קדמי` / `אחורי`;
*tiya-* `צעד` (M3; *šarā tiya-* "stood up" `מעלה צעדה`); É.ŠÀ `החדר הפנימי` (UL); *ḫaluga-* `בשורה` (HE); *kinun*
`עתה`; *waḫnu-* intr. `הסתובב` (M3 `סובב`); *kadupai-* `*כרסם*`; MUN `מלח`; Ú.SAL `כַּר` (= TE *wellu-*); *uwani-*
`גוש־מלח`; *dandukeššar* `תמותה`; TI-*tar* `חיים`; *zinna-* mid. `הסתיים` (M3 `סיים`); *ukturi* `תמיד` (HE 12:13).

**3. Pre-set rows (M4) checked against the lines.** *ḫaḫḫima-* `קִפָּאוֹן`, *mugai-* `הפציר` / *mugawar* `הפצרה`,
*walliya-* `שיבח` (here reflexive `השתבח`): as set. *ekun-* `קפא` and *ekuna-* `קר` do not occur in SG, LI or AZ. No
pre-set row changed. Note for the lead: M4's *ekun-* `קָפָא` shares the root of `קִפָּאוֹן` – harmless as a pair, but say
so if *ekun-* turns up in MU.

**4. Gate and name bugs (escaped by rewording, none bent the meaning).**
- **The vocalization check (`check_line` → `_find_word`) takes the first word equal to the name's first word**: for
  `אֵל הַסְּעָרָה` / `אֵל הַשֶּׁמֶשׁ` that is the unvocalized preposition `אל` before the name (`[אל] אֵל הַסְּעָרָה`,
  SG 1:3; `אל אֵל הַשֶּׁמֶשׁ`, AZ 74) → a false VOCALIZE error. Escaped by vocalizing the preposition `אֶל`. Fix: skip a
  candidate word immediately followed by the rest of the name, or match the whole name.
- `_find_word` also splits a name at a bracket (`[לִיחְ]זִינָה`, LI 1:61 → VOCALIZE): the restoration was a single
  sign, so the corpus rule allowed `לִיחְזִינָה` unbracketed anyway.
- Law H4 `מחץ` (*walḫ-*) fires on `למחצה` "half" (SG 1:93 `חצאי־אחים` written instead; restored to `אחים למחצה` after the coordinator's fix) and is licensed by the drink
  *walḫi-* (AZ 14). Proposal: exclude `למחצה`/`מחצית`, and drop `walḫi` from the licence.
- My reserved-word scan of notes and intros (the tool checks `>` lines only) caught `גורל`, `ראשית`, `מדבר`, `כעס`,
  `זרה`, `בעל` in my own notes: fixed. Worth a `verify` option that runs the NEVER rows on `הערות` and intros, skipping
  the bullet label `הערות` itself (it matches the `ערות` row).

**5. Cruxes (open).** SG 1:6, 1:45, 2:3 *waršula-* (`ריח`? HPM leaves it), *paišgataru*; 1:14 *ḫalḫaldani-* (HPM
"shoulder", TLHdig "head"); 1:20 *antaki-*; 1:47–1:53 the speaker (HPM closes a speech at 1:53); 1:58 *kappuwatten*
(past or imperative); 1:83 {NA4}*pirulūwari*; 1:90 *piššatti*; 1:93 *pappannikneš*; 1:108 *šiya-*; 1:112 *annanna-*
(a name or HPM's "annanna-woman"); 1:118–1:121; 1:128, 1:135 *tarnatt-*; 1:136 *arimpa-*, *tuḫḫueššar*; 1:150
*ḫupai-*; 1:157 *BĒL DINGIR-LIM* (genitive, with HPM); 1:199 *išpānaš* (HPM "satiety", not "night"). LI 1:50
*lalukkit* (HPM a verb); 1:53 *walula-*; 1:66–1:67, 1:74–1:75 *tiyeššar*, *ḫašp-*; 1:76–1:87. AZ 5 *tarna-* of straws;
38 TŪDITTU; 42 *tapinama-*; 66 *gakaeššar*, *ḫuinpa-*; 87 NINDA.ZU9, *kadupai-*; 92 the parenthesis; 95 *tiyawala*.

**6. Parallels for the index.** SG 1:41: Deut 28:23 [equivalent]; Job 37:10, Ps 147:17 (the frost that stops the
waters). SG 1:139: Jer 6:20 (`קָנֶה הַטּוֹב`, GI.DÙG.GA) [equivalent]. SG 1:174: Lev 7:31 (the breast) [equivalent].
LI 1:36: Mic 7:19 (sins cast into the sea) [divergence]. AZ 35: TE 16 (the reversed shoes: here the shoe is written,
E.SIR); AZ 43, 66: TE 19–24, 245–253; AZ 84: TE 196 (the hawthorn).

### Round 8 run 5, translator 1, MU
Drafted 2026-11-14: `annotated-MU.rtl.md` (274 clauses, CTH 325) with a Hebrew intro and `## CTH 325, § n – …` headings,
and `translation--intro-MU.rtl.md`. `verify MU --strict`: one problem, the tool's (§4 below); `check_bible_quotes.py` 0.
HPM read after drafting; ≈ 20 lines corrected (each in a **תרגומים** bullet: 26 *šiya-* mid. `*זינק*`, 79 "whoever",
103 *mān* "how", 112 "has not yet heard", 114 "where to", 138 "twice … into his hand", 196 Telipinu?, 199 *alpa-*
"cloud" `ענן`, 203 fem., 206 *wašši-* `עשבי־מרפא`, 260 *karpanu-* `*הוביל*`).

**1. Fixed strings.** Every clause that repeats TE is TE's Hebrew, with MU's own brackets: 35–53 (the suffocation and
withering list; *epp-* `תפס` where TE has *IṢBAT*/*wišuriya-*), 54–59 (the feast), 61–64 (`בני [אינו בפנים]: / זָעַם הוא, /
וכל [טוב נשא עמו]`), 65–76 (the eagle; `דרוש` / `דרשתי`; 76 *AKŠUD* `השגתי`), 117–127 (the bee), 159–195 (the angers
`החרון, הַזַּעַם, החטא (ו)הטינה`, `את חרונו לקחתי` …, the analogy `כמו ש… – כך גם …`, `שַׁלַּח את החרון!`), 217–259 (the
path, the seven doors, the return, the *eya*-tree). The repeated-line check against TE is clean (MU 258 = TE 266).
New fixed strings: *ḫuḫḫa-* `סב`; `כֹּה (אומר) אבי אֵל הַסְּעָרָה:` (85, 95, 113, 120); *wašta-* `חטא`, *waštai-* `החטא`;
*urkiya-* `חקר`; SIG5-*ziya-* "put right" `תיקן` (108, 110); *aruwai-* "bow, prostrate" `השתחווה` (32); {D}UTU-ŠĪ "My Sun"
`הוד מלכותי` (134, 138).

**2. *mugai-* / *mugawar*.** Neither occurs in MU's preserved clauses (the title is the edition's): M4's `הפציר` /
`הפצרה` stands unchanged; the intro explains *mugawar* `הפצרה`, the heading keeps `המוּגָוָר` (M4).

**3. Rows aligned in my earlier keys during MU.** *šanḫ-* "seek": SG 1:65 `מחפשים` → `דורשים` (TE 52–56 `דרש`; my SG
proposal of a split withdrawn). *ḫink-* mid. "bow": LI 1:70 `השתחוו` → `קדו` (`השתחווה` is *aruwai-*'s, MU 32). SG 1:93
`חצאי־אחים` → `אחים למחצה` (after the `מחץ` gate fix).

**4. Tool bugs.**
- **HPM numbers two MU clauses 178** (the second stands for 180; the skeleton and base have both). `verify` keys entries by
  label: it reports `duplicate entry 178` (the one remaining `--strict` problem) and reads the first 178's composite for
  the second, so the NAME check demanded `אֵל הַסְּעָרָה` there (escaped `[היתר שם]`). Fix: relabel the second as `178a`
  (or `180`) in the base, or key the checks by position.
- **The `נשא` gate's licence reads the lemma only**: *pēdaš* inside a restoration has no lemma, so MU 44 and 63 (TE 28,
  51 copied) failed; escaped `[היתר שער: נשא]`. Fix: add `pēd|ped-a` forms to the licence text from the bracket-free
  composite.
- **{D}UTU-ŠĪ** (with the macron) is caught by the {d}UTU row (`אֵל הַשֶּׁמֶשׁ`), not the law row `שִׁמְשִׁי`: escaped at
  134, 138; I rendered the title `הוד מלכותי` (the sense in this ritual) – the lead may prefer the law table's `שִׁמְשִׁי`.
- *taknaš=at {d}UTU-aš* (226) is missed by the Sun-goddess row because of the clitic: escaped, as TE 232.

**5. Cruxes.** 1–33 (the broken opening); 26 *šiya-*; 84 *minu*; 116 *ḫink-* "present / hand over" (`אציג`, law
precedent; HPM "übergeben"); 134–138 *waḫeššar* water (`*סיבוב*`); 183 *ḫemuš?* (TE's `*דמויות*` copied); 194–195 the
"burden of spring / harvest"; 197–203 the oven, Ḫallara, the golden window, *karšani-*; 206–210; 230–231 iron lids
and lead bolts (reversed against TE 236–237).

**6. Parallels.** None quoted in the lines' apparatus; the comparison is TE's (Ps 44:24, Jer 14, Joel 1, Deut 28:23 at
TE's lines). The new motif – the grandfather who seeks the culprit, "you alone have sinned … I will kill you", and the
mother goddess who "will put it right" whether he sinned or not (79–112) – has no biblical counterpart to cite.

## Progress
- 2026-11-14: independent review (Round 8 run 5, reviewer A), SG – 16 lines changed (1:21, 1:22, 1:48, 1:76, 1:103, 1:125, 1:139, 1:141, 1:174, 1:176, 1:178, 1:206, 1:207, 1:210, 2:5, 2:8): brackets by the partial-restoration rule (`[U]L` = `לא`/`הלא` as UL 3.1 and LA; `d]āi`, `[d]āi`, `[B]ĒL`, `SIG5-att[a]`, `a]ppuzzi` unbracketed; `[ḫappur]iyaš` bracketed whole; no split inside a Hebrew word: `הקית[ון`, `מכ[סה]` → `מכסה?`; 1:178 ŠA UDU restored, ZAG.UDU preserved), added words removed or put in ( ) (1:103 `ו`, 1:176 `(ו)את`), Hebrew (1:125 `ובו אפציר`, 1:141 `[…] וכך`); notes/intro: `שם בעל משמעות`, `מדברת` (reserved `בעל`, `מדבר`) reworded.
- 2026-11-14: independent review (Round 8 run 5, reviewer A), MU – 7 lines changed (7, 37, 40, 54, 64, 167, 229): brackets (7 `[U]L` = `לא`; 54 EZEN4 partly preserved `חג [עשה]`; 64 `[manni]ttin` bracketed; 167 `זו[עם` → `זועם`; 229 *dankuwa[i]* preserved `[בתוך האדמה] האפלה`; 40 GU4 restored → all bracketed), TE's word order kept (37 `[על האח] נחנקו [הגזרים]`, 40 `[בתוך הרפת נחנקו השוורים]`, TE 21/24); intro: "the king washes his hands" (`נוטל את ידיו`, a rabbinic idiom and not the text) → the water poured into his hand (138).
- 2026-11-14: independent review (Round 8 run 5, reviewer A), LI – 5 lines changed (1:4, 1:5, 1:40, 1:62, 1:77): brackets (`d]āu` = `ייקח` unbracketed; `par[ninkan]` bracketed whole), narrative present as participle (1:62 `אינו יכול`, as 1:61 `תוקף`), a stray `…` (1:77); intro: the Micah 7:19 echo quoted in the corpus format.
- 2026-11-14: independent review (Round 8 run 5, reviewer A), AZ – 12 lines changed (3, 8, 14, 51, 53, 54, 81, 87, 91, 92, 93, 103): no split inside a Hebrew word (14 `קנ[קן]`, 51 `[… ק]ראה`, 53 `[… נע]ים?`, 54 `[… שתי]תי?`, 81 `עת[ה`, 93 `אחר כ[ך`, 103 `הָאֵל[ה` → `והאלה`, no `את`), 92 brackets (*dandukešnaš* preserved `את [בן]־התמותה`, `[uš]kezzi` restored), added `ו` removed (3, 8, 87), consistency *zinna-* mid. `הסתיים` (91 `נגמר` → `מסתיים`, as 95–97; intros aligned).
- 2026-11-14: Round 8 run 5, translator 1: MU 1–274 drafted whole, with intro; HPM read after drafting; `verify MU --strict` 1 (the duplicate label 178, a tool/base issue); `check_bible_quotes.py` 0. SG 1:65, 1:93 and LI 1:70 aligned (Proposals, MU §3).
- 2026-11-14: Round 8 run 5, translator 1: SG 1:1–2:8 (219), LI 1:1–2:16 (104), AZ 1–104 (104) drafted whole, with intros; HPM read after each section; `verify --strict` 0 for each key; `check_bible_quotes.py` 0. Proposals above.
- 2026-10-31: review pass (a) fidelity – 13 lines changed (3, 6, 8, 18, 90, 100, 128, 133, 138, 145, 164, 194, 207): brackets (3, 6, 8, 133, 138, 145, 164, 207), added words removed or put in ( ) (18 `יצא`, 128 `ו`, 194 `(מי)`), 90 *=še* "to him" (was `ולהם`), 100 *ḫāraš* nom. + instr. "with (his) wings" (was `כנף הנשר`). Open for pass (b): the analogy formula `כך גם X – כך Y` (133–195, 217, 222, 241; the note at 133) renders one QATAMMA twice and, at 222, leaves *namma* untranslated.
- 2026-10-31: review pass (b) consistency – 14 lines changed (136, 140, 142, 145, 151, 168, 180, 181, 186, 190, 195, 217, 222, 241; the note at 133). The analogy formula (the coordinator's ruling): one `כך` per *QĀTAMMA*, `כמו ש… – כך …`, with *U* / *-a* / *-ya* `כך גם …`; no `כך` where the line has no *QĀTAMMA* (217, 241 `גם …`); 222 *[nam]ma* now rendered `[עוד]`; 181 `[וכמו ש…]` → `כמו ש[…]` (no *nu*). 168 *karaš* `כוסמת` and *išḫuwai-* `זריתי` (as the rituals' AM 4 `תבואה (ו)כוסמת אני זורה`). Recorded in renderings M2 / M3.
- 2026-10-31: translator 4: TE 1–267 drafted, HPM read after drafting (no review passes by a second reader yet).
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
- 2026-10-31: review pass (c) Hebrew – 9 lines changed (TE 136 `הַחֲזֵק`, 151 `הֱיֵה ערוך` vocalized (imperatives); 195, 231, 242 `אַל` vocalized (prohibitions, not "to"); 176, 242 closing quotes; 251–253 `את הילד/הטלה/העגל שלה` as 25–26, for `את ילדה` ("gave birth"), `טלה`, `עגלה` ("heifer")), and 3 `## ` headings (§9′ `שולחת` for *uiya-* → `משגרת`; §26″ `הכבשים` as line 165; `הָאֵלִים`); intro written (`translation--intro-TE.rtl.md`), checked against the H3/H4 gates (no hit) and `check_bible_quotes.py` (0).

## Part TE: parallels index (Telipinu, CTH 324.1)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-TE.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 25 | `UDU-uš=za SILA4-SU mimmaš` | השה מיאנה בטלה שלה, | ירמיהו יד:ה; בראשית לז:לה | [equivalent] | `כִּי גַם אַיֶּלֶת בַּשָּׂדֶה יָלְדָה וְעָזוֹב` (ירמיהו יד:ה) – האם הנוטשת את ולדה בעצירת הגשם; כאן היא "ממאנת" בו: `וַיְמָאֵן לְהִתְנַחֵם` (בראשית לז:לה) – אותו שורש לסירוב. |
| 29 | `{d}telipinuš=a pait marmarri andan ulišta` | ותֶּלִיפִּינוּ הלך, אל תוך הבִּצָּה, והתמזג (בה); | תהלים מד:כד; מלכים א יח:כז | [equivalent] | `עוּרָה לָמָּה תִישַׁן אֲדֹנָי` (תהלים מד:כד); `אוּלַי יָשֵׁן הוּא וְיִקָץ` (מלכים א יח:כז) – האל הנעדר, שיש להעירו או למצאו; בגרסאות אחרות של המיתוס הדבורה מוצאת את תֶּלִיפִּינוּ ישן בכר ועוקצת אותו. |
| 29 | `{d}telipinuš=a pait marmarri andan ulišta` | ותֶּלִיפִּינוּ הלך, אל תוך הבִּצָּה, והתמזג (בה); | תהלים קד:כט | [divergence] | אליהו לועג לבעל הישן; כאן האלים עצמם מחפשים את האל הנעלם, ובני האדם מחזירים אותו בטקס. `תַּסְתִּיר פָּנֶיךָ יִבָּהֵלוּן` (תהלים קד:כט) – העולם הנבהל בהסתלקות האל. |
| 31 | `nu namma ḫalkiš ZÍZ-tar UL māi` | ושוב התבואה, הכוסמת, אינה צומחת, | חגי א:י | [equivalent] | `וְהָאָרֶץ כָּלְאָה יְבוּלָהּ` (חגי א:י) – הארץ שאינה נותנת את יבולה כשהאל נעצר מלתת. |
| 31 | `nu namma ḫalkiš ZÍZ-tar UL māi` | ושוב התבואה, הכוסמת, אינה צומחת, | יואל א:י | [equivalent] | `שֻׁדַּד דָּגָן הוֹבִישׁ תִּירוֹשׁ אֻמְלַל יִצְהָר` (יואל א:י). |
| 35 | `[nu? ḪU]R.SAG{DIDLI.ḪI.A} ḫāter` | [וה]הרים יבשו, | יואל א:יב; חגי א:יא | [equivalent] | `כָּל עֲצֵי הַשָּׂדֶה יָבֵשׁוּ` (יואל א:יב); `וָאֶקְרָא חֹרֶב עַל הָאָרֶץ וְעַל הֶהָרִים` (חגי א:יא). |
| 38 | `wešaeš ḫāter` | המרעים יבשו, | יואל א:יח | [equivalent] | `כִּי אֵין מִרְעֶה לָהֶם` (יואל א:יח). |
| 39 | `PÚ{ḪI.A} ḫāzta` | המעיינות יבשו, | יואל א:כ; ירמיהו יד:ג | [equivalent] | `כִּי יָבְשׁוּ אֲפִיקֵי מָיִם` (יואל א:כ); `בָּאוּ עַל גֵּבִים לֹא מָצְאוּ מַיִם` (ירמיהו יד:ג). |
| 41 | `DUMU.LÚ.U19.LU{MEŠ} DINGIR{MEŠ}-ešš=a kištantit ḫarkiyanzi` | בני האדם וגם הָאֵלִים מכפן אובדים. | דברים כח:כד | [equivalent] | `יִתֵּן יְהוָה אֶת מְטַר אַרְצְךָ אָבָק וְעָפָר` (דברים כח:כד) – הבצורת כעונש; כאן – כתוצאה מזעם האל, בלי חטא של בני האדם. |
| 45 | `n=e UL išpiyēr` | ולא שבעו; | חגי א:ו; ויקרא כו:כו | [equivalent] | `אָכוֹל וְאֵין לְשָׂבְעָה שָׁתוֹ וְאֵין לְשָׁכְרָה` (חגי א:ו); `וַאֲכַלְתֶּם וְלֹא תִשְׂבָּעוּ` (ויקרא כו:כו) – אותה קללה, אכילה בלי שובע. |
| 51 | `nu=wa=z ḫūman āššu pētaš` | וכל טוב נשא עמו." | דברים לא:יז | [equivalent] | `וְהִסְתַּרְתִּי פָנַי מֵהֶם … וּמְצָאֻהוּ רָעוֹת רַבּוֹת וְצָרוֹת` (דברים לא:יז) – כשהאל נעלם, הטוב נעלם עמו. |
| 53 | `{d}UTU-uš ḫāranan{MUŠEN} lēliwandan IŠPUR` | אֵל הַשֶּׁמֶשׁ שיגר את הנשר המהיר: | – | [equivalent] | הנשר השליח והמחפש – כבאגדת אֵתָנָה; *ḫara(n)-* `נשר` (כ*erû* בכל הקורפוסים: |
| 53 | `{d}UTU-uš ḫāranan{MUŠEN} lēliwandan IŠPUR` | אֵל הַשֶּׁמֶשׁ שיגר את הנשר המהיר: | – | [equivalent] | ). |
| 154 | `katta dankui tēkan zaḫḫišk[e]zzi` | מטה – את האדמה האפלה הוא חובט. | תהלים עח:סה | [equivalent] | `וַיִּקַץ כְּיָשֵׁן אֲדֹנָי` (תהלים עח:סה) – האל המתעורר בזעם; כאן הוא שב כסערה ורעם. |
| 230 | `KASKAL.LUGAL=at tarnau` | דרך המלך – אותם תשלח! | במדבר כ:יז | [equivalent] | `דֶּרֶךְ הַמֶּלֶךְ נֵלֵךְ לֹא נִטֶּה יָמִין וּשְׂמֹאול` (במדבר כ:יז) – הדרך הראשית; וכאן, כמו שם: בדרך המלך – ולא בשדה ובכרם (231). |
| 231 | `miyantili A.ŠÀ-ni {GIŠ}KIRI6-ni {GIŠ}TIR-ni lē paizzi` | אל השדה הצומח, אל הגן, אל היער – אַל ילכו! | במדבר כ:יז | [equivalent] | `לֹא נַעֲבֹר בְּשָׂדֶה וּבְכֶרֶם` (במדבר כ:יז). |
| 266 | `[n]=ašta anda kunnaš wallaš kitta` | ובתוכו מונחת ירך הימין; | ויקרא ז:לב | [equivalent] | `וְאֵת שׁוֹק הַיָּמִין תִּתְּנוּ תְרוּמָה לַכֹּהֵן` (ויקרא ז:לב) – ירך הימין, נתח הכבוד של הזבח, כאן בתוך שק השפע של האל. |
