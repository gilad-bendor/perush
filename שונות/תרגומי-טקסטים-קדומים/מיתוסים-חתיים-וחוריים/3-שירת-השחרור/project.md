# The Song of Release (the Hittite side)

Project of `../` (the Hurro-Hittite and Old Anatolian myths; Round 5 run 2, 2026-10-30). Tool: `tools/hittite_tools.py`
(read `../corpus.md`, `../renderings.md`, `../translator-brief--myths.md`).

## Scope and base
| KEY | Text | Base | Lines |
|---|---|---|---|
| SR | The Song of Release (CTH 789), the Hittite lines (lg="Hit") of KBo 32.13+, 32.14, 32.15, 32.16, 32.19, 32.10, 32.17 | **our composite** `composite-SR.tsv` from TLHdig 0.3 (CC BY 4.0), made by `composite-SR--made-by.py`, checked by `hittite_tools.py comp-check SR` (422 rows, 0 problems, 2026-10-30) | 422 |

Labels and numbering: `../corpus.md` § Labels. Rank 3 (after drafting only): the HPM editors' German translation
(`hittite_tools.py tr KEY`), for the composites none (Neu 1996 and Hoffner 1998 are © and not in hand).

## Notes
- **The Hurrian is out of scope** (the run brief): the bilingual's "a" lines are Hurrian, the "b" lines their Hittite
  translation; we translate the Hittite only, line by line. Where the Hittite is broken and the Hurrian partner preserved,
  the apparatus may say so, but no Hebrew is made from the Hurrian.
- The composite has no restorations of its own: each row is a TLHdig line as TLHdig gives it (its `[ ]` are the TLHdig
  editors'). The tablet order follows the narrative (Neu 1996); the 67 smaller fragments are left (corpus.md).

## Open decisions
(none yet)

## Proposals
(filled by the translators: every new rendering, every pre-set row changed, gates, cruxes)

### Translator 3 (SR)
Drafted 2026-10-30: `annotated-SR.rtl.md`, all 422 rows (KBo 32.13, 32.14, 32.15, 32.16, 32.19, 32.10, 32.17), with a Hebrew
intro and `##` headings per tablet and §. `verify SR --strict` 0; `verify IL HE KU UL --strict` 0 after my table edits
(the 3 "identical source, different Hebrew" listed there are UL's own, translator 2); `selftest` 0; `check_bible_quotes.py`
0. No rank-3 translation was quoted (none in hand); the transliteration and the TLHdig glosses were the base, and where the
literature is known to differ the note says so in general terms. The Hurrian lines were not translated (the apparatus
mentions the Hurrian *kirenzi* = Akk. *andurāru* only).

**1. Tables edited (myth `renderings.md`; tested with `verify` SR, IL, HE, KU, UL).**
- §H2 new rows: `\{d\}šuwaliy` `שׁוּוַלִיַּת` (also fires on KU 89, which already has it); `\{d\}zuen` `אֵל הַיָּרֵחַ`;
  `\{m\}m[eē]+[kg]` `מֶגִי`; `zazall` `זַזַּלָּה`; `\{m\}purr` `פּוּרָּה`; `\{uru\}epl` `אֶבְּלָה` (also the gentilic *eplumena-*);
  `\{uru\}iki(?:n)?kal` `אִיקִינְקַלִּישׁ`; `\{m\}pazz` `פַּזַּנִיקַרִּי`; `\{uru\}lul+uw` `לוּלּוּוָה`. M1's SR row updated.
- §H6 new traps (always vocalized): `אבלה` (Ebla / "her mourning"), `פורה` (Purra / "fruitful").
- §H3 `מחה` row: **the bare `ש` prefix dropped** – it read `שמחה` "rejoices" (*dušk-*, SR 15.6.4, 15.7.2, 15.7.4) as ש־מחה,
  exactly as the law `גר` row read `שגר` (fixed 2026-10-30). The lead may want the same audit for the other myth §H3 rows
  with `(?:ש|כש)?` (e.g. `שבת`-type collisions: `שמגדל`, `שתהו` are harmless, but `שבעל` …).

**2. Gates and names I think are wrong (escaped, none bent the Hebrew):**
- **{D}UTU with *taknaš*** (the Sun-goddess of the Earth, Allani) is caught by the law §H2 row `\{d\}utu(?!-ši)` →
  `אֵל הַשֶּׁמֶשׁ`; five `[היתר שם]` escapes (13.1.2, 13.2.3, 13.2.6, 13.5.1, 14.16.1). Proposal: a negative lookbehind in the
  law row, `(?<!ták-na-a-aš )(?<!ták-na-aš-ma )(?<!taknaš )\{d\}utu(?!-ši)`, and a myth §H2 row
  `ták-?na-?a?-?aš(?:-ma)? \{d\}utu` → `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה`. (The name check also cannot see a name whose
  letters a bracket splits – translator 2's point; I moved two brackets past a name, 15.13.3, 15.13.6, and said so.)
- **Myth §H3 `בריח`** (NEVER, for Isa 27:1 `נָחָשׁ בָּרִחַ`) blocks the Hittite *ḫattalu-* "bolt", which the rituals render
  `בריח` (AM 12, 59; AM2 12, 15), and the verb `הִבְרִיחַ` (*pittenu-*, the Laws' `יבריח`, HL1 148): escaped at 13.2.6
  (`בריח האדמה`, ↔ Jonah 2:7 `הָאָרֶץ בְּרִחֶיהָ`) and 14.11.1. Proposal: license the row by `ḫattal`, and exclude `הבריח`.
- **Myth §H3 `מגדל`** (NEVER, "Ullikummi is a stone") blocks AN.ZA.GÀR "tower" (Akk. *dimtu*) in the parable of the tower
  and the carpenter (14.16.1, 14.16.6, 14.17.1, escaped): here the Hittite has the very word, and the parallel with Gen 11:3–4
  (a tower of bricks, its foundations down to the netherworld and its top brought near to heaven) is real, so hiding it would be
  a hidden echo. Proposal: turn the row into a §H4 gate licensed by `an\.za\.gàr`. `ראשו בשמים` was not written (no "head":
  the word is broken, 14.16.2).
- **Law §H4 `שמר`** licence `en\.nun` misses TLHdig's É.EN.NU.UN (`en.nu.un`): add `en\.nu\.un` (10.4.3, escaped).
- **F18** (`aššul` → `בטובה`) fires on the noun *aššul* "favour" in a curse (10.1.2 `אַל טובה`, escaped): restrict to
  `aššuli`.
- Harmless false licences seen in `data`: `ירא` by *menaḫḫanda* (`naḫḫ` inside it: anchor `(?<![a-z])naḫḫ`), `שכב` by
  *ašašta* "seated", `מחץ` by *šakki*, `נחש` at 15.13.3, `נשא` by *pedi* "place", `קנה` by `šám`; law §H6 `אמה` condition
  `danna` matches *adanna* "to eat".

**3. New renderings (Hittite → Hebrew, first line).** *iya-* mid. `התקדם` (13.1.1, as UL); *ḫalentu-* `ארמון` (13.1.2);
*taknaš* {D}UTU `אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה` (13.1.2; M1); IKU `אִיקוּ`, *tawalla-* `*תַּוַלָּה*` (measures; 13.1.5, 13.1.7);
GIŠ.GÌR.GUB `מִדְרַס־רגליים` (13.1.7: `הֲדֹם` is left to Ugaritic *hdm*, its cognate); *parganu-* `הגביה` (13.1.8);
*išḫuzziya-* `חגר` (13.2.3); EZEN₄ `חג`; *ḫattalu-* `בריח` (13.2.6, as the rituals); *ḫatt(a)-* "stab, slaughter" `טבח`
(13.3.1; `שחט` is *ḫuek-*'s); SIG₇ `רבבה`; UDU.GUKKAL `כבש־אַלְיָה`; NINDA.DÙ.DÙ `אופה`; DÍLIM.GAL `אגן` (as AM);
*kuškuššulla-* `מכתש`; *meḫur* `עת`; *ašaš-* `הושיב`; *kalulupa-* `אצבע`; *miyu-* `*רך*` (or "four"); *ḫalwani-* transcribed;
*šarra-* `חצה`; *aliyan-* `אַיָּל` (always vocalized); *šuwe-* `דחה`; *warkešš-* `השמין`, *warganu-* `השמין`; *šulle-*
`התגאה`; *wešiya-* `רעה`, *weši-* `מרעה`; *ḫurzakk-* / *ḫuwarzašš-* `קילל`, *ḫuwartan ḫark-* `קיללו`; *ištarakkiya-* `חלה`;
ṢAYYĀDU `צייד` [cognate through the Akkadogram]; MUŠEN.DÙ `לוכד ציפורים`; {UZU}Ì `שומן`, Ì `שמן`, *šakni-* `שומן` (**note:
M2 has Ì `שֻׁמָּן` for Zalpa; SR keeps the oil/fat split of the source: Ì-i "in oil" `בשמן`**); *antuḫša-* `אדם`; *ḫuwai-* `ברח`;
*takkišk-* `זמם`; *dala-* `הניח`; *ḫatreššar* `הודעה` (`בשורה` is *ḫaluga-*'s); *tuekka-* `עצם` ("self", 14.1.1, 19.5.4);
*tapuša* `לצד`; *šakuwa zikk-* `שם את העיניים`; *auri- išḫa-* `אדון־מצפה`; *telipuri-* `חבל`; *šišḫ-* `*הקצה*`;
*teššummi-* `ספל` (GAL is `גביע` / `כוס` elsewhere); *laḫu-* `יצק`; *walliyatar* `תפארת`; *šuppištuwara-* `קישוט`; *gulš-*
`חרט`; *lalukkišnu-* `הבהיק`; *marlant-* `שוטה`; *kunna-* *išḫunau-* `זרוע ימנית`; *wišuriya-* `נמעך`; *šakkuriya-*
`רמס`; *amiyara-* `תעלה`; *muwa-* `*שקע*` / `נפל` (unclear); *kurur* / LÚ.KÚR `אויב`; *meyani* `לפרקו`, *elaššar*
`לבגרות`; *anda au-* `הביט ב־`; NINDA *kugulla-* `לחם־קוּגוּלָּה`; UDUN `תנור`; *pittenu-* `הִבְרִיחַ` (HL1); *šuniya-* `טבל`;
*maniyaḫḫai-* `מחוז` (`אדון־מחוז`); IGI.DU₈.A `מסים`; *maknu-* `הרבה`; *išiyaḫḫ-* `הלשין`; *lilḫuwai-* `שפך`; *gilušši-*
transcribed; *utniyašḫa-* `מושל־ארץ`; *šallanna-* `גרר`; LÚ NAGAR `נגר` (HL2); AN.ZA.GÀR `מגדל` (escaped, above); *kutt-*
`קיר`; *ḫutanu-* `*חפירות*`; *manninkuwaḫḫ-* `קירב`; *šamana-* `יסוד`; *ḫuinu-* `הריץ`; SIG₄ `לְבֵנָה`; *titnu-* `הציב`;
*ḫandant-* `העורך(?)` (*ḫandai-* `ערך`, UL); *paraštu-* `נצר`; UMMIĀNU `אֻמָּן`; *ḫaḫratar* `עידור`; *šiššiyan-* `חוב`,
*šiššiyala-* `נושה` (Akk. MAL *ummiānu* "creditor" also has `נושה`: a cross-language [equivalent], acceptable by the 2026-10-30
principles); *dammišḫai-* `עשק`, *dammišḫa-* `עושק`; *wewakk-* `תבע`; *kištuwant-* `רעב`; ZÍZ `כוסמת` (HL2); *kušiši-*
transcribed (`גלימת־קוּשִׁישִׁי`); *wašš-* `הלביש`; *ḫurtant-* `*מקולל*`; *kupi-* transcribed; *išḫueššar* `ערמה`; *pallanti-*
`מצוקה`; *ḫuišnu-* `החיה`; *dušk-* `שמח` (KU); *malkiya-* `שזר`; *šuil* `חוט`; ARAD / GÉME `עבד` / `אָמָה`; ŠAPĀRU `שִׁגֵּר`;
*wešk-* (*wai-*) `יילל` (IL); *aruwai-* `קד` (`השתחווה` is *ḫaliḫla-*'s); *peḫute-* `הוליך`; *memiškatalla-* `נואם`;
*tuliya-* `אספה`; *ḫaliyatar* `כריעה`; MUL `כוכב`; SI `קרן` (UL *kalmara-* also `קרן`: a split to watch); ḫašša- "grandson"
`נכד`; *kuššan* `שָׂכָר` (HL1); NA₄.ARA₅ `רחיים` (HE); *ḫan-* `שאב` (UL); *wiwiški-* `צעק` (KU); *aššuli* `בטובה` (F18);
*parā tarnumar* `שחרור`, *arḫa / parā / āppa tarna-* `שִׁלַּח` (M2), never `דְּרוֹר`; *āppa piyant-* `הנתון בחזרה`; GIŠ.ŠÚ.A-*aš*
URU `עיר הכסא`; *šarlai-* `רומם`; GIŠ.TUKUL `כלי־נשק` (UL); *ḫarpanalli-* `מורד`; *ḫullanniwan dai-* `החל להביס` (`הכה`
reserved); A.ŠÀ *ḫaršauwar* `שדה חרוש`; UD.7.KAM-*az* `ביום השביעי`; *kuššanga* `מעולם`; *waḫnueššar* `הֶקֵּף` (the city's
circuit wall), *katterra-* / *šarazzi-* `תחתון` / `עליון`; *ḫuššili-* transcribed; KI.LAM `שוק`; *ḫašša-* `*בסיס*` (or
"hearth"); *wašš-* "buy", part. `נקנה` (licensed `קנה`); É.EN.NU.UN `בית המשמר`; *išḫiya-* `כבול` (`קשר` is IL's
*kaleliya-*); SIPA `רועה`.

**4. Formulas and repeated passages fixed (copy byte for byte):**
- The parable explanation: `אך לא X הוא – אדם הוא:` (with *=ma*: 14.2.1, 14.5.1), `לא X הוא – אדם הוא:` (without: 14.9.1,
  14.12.1, 14.14.3, 14.17.1); the curse of the maker: `"מי שיצק/שבנה/שהציב אותי – לו ידו / תישבר! ולו זרועו / הימנית
  תימעך!"` (14.7.6–8, 14.16.3–4, 14.19.5–14.20.1); `וכאשר X שמע, / לבו בתוכו חלה.`; the son: `הבן ההוא אשר מול אביו / אויב
  (נעשה), גדל, והגיע לפרקו, / ובאביו עוד אינו מביט`.
- The wisdom refrain (×6): `הניחו את הדבר ההוא! ולכם (דבר) אחר / (דבר) אני אומר. שמעו את ההודעה! / ואילו חכמה – אני אומר
  לכם.` (the line breaks differ by copy).
- The owners' offer (15.2–15.5 = 16.5–16.7): `[שקל אחד כסף ייתן];` / `[וזהב – כל אח]ד חצי שקל ייתן; ואילו כסף – לו` /
  `ואילו אם רעב הוא, אל הסערה,` / `אז לָאֵל – כל אחד פָּרִיס אחד של שעורים נִתֵּן;`.
- The god's message (19.1–19.6) and Megi's repetition of it (19.15–19.21, with *=wa*): the same Hebrew, in quotation marks
  in the repetition.

**5. Cruxes (open).** 13.1.3 (no verb with "his chair"); 13.1.7 *tawalla-*; 13.5.4 *miyaweš* "soft" or "four"; 13.6.3
*tišumiša-* (= *teššummi-*?); 14.2.3 *man=aš*; 14.5.6 *šišḫer*; 14.7.3 *maišti*; 14.8.9, 14.20.4 *muwantaru*; 14.9.3
*šalleštal*; 14.14 *gilušši-* (a dog?); 14.16.1 *ḫutanuš*; 14.19–20 the tree parable (*ḫarran*, *zazgai*, *ḫaḫranni*);
15.4.4 / 15.5.4 / 16.7.4 *DINGIR-uš UN* "god (and) man"; 15.5.1 *ḫurtanza* "cursed" (the series debt – hunger – nakedness –
?); 15.6.3–15.7.4 (whose soul rejoices: Megi's, Purra's); 15.8.3 *piškeuwani*; 15.9–15.10 the speaker ("release your
servant, your maid, your son, your wife" – mockery of Megi?); 15.13.1 *pariššan*; 15.13.5 *=za … parkunut*: Megi purified
himself, not the city (my reading, by 15.13.6); 16.9.3 *walluškezzi* "praises" the millstone(?); 19.1.3 / 15.7.3 *āppa
piyant-*; 19.2.5 / 19.17.5 the restored {D}IŠKUR in the nominative; 19.9.1 *aššurami*; 19.9–10 *ḫašša-*; 10.4.6 *ḫinkan*.

**6. Parallels for the index.**
Judg 9:8, Ezek 17:2 (14.1.1: the fable and its explanation); 2 Sam 12:7 (14.2.1: "you are the man" – the explanation formula);
Deut 32:15 (14.1.4: fattened and kicked); Gen 10:9 (14.1.14: ṢAYYĀDU [cognate]); Ps 78:2 (14.3.3); Gen 44:21 (14.4.4); Isa
29:16, 45:9 (14.7.5: the made thing against its maker – here it curses); Job 31:22 (14.7.8: the arm broken); Gen 8:21 (14.8.1:
speaking to one's heart); Lev 20:9 (14.9.5, in words); Gen 37:31, Prov 26:11 (14.11.4); Job 20:15 (14.12.7: swallowing and
vomiting riches); **Gen 11:4, 11:3** (14.16.1, 14.16.7: a tower of bricks reaching from the netherworld to heaven – [equivalent],
the Hittite has the word); Isa 30:14 (14.16.6); Judg 1:7 (14.20.7, 19.1.4: under the table); Isa 66:1, Ps 110:1 (13.1.6–7,
13.4.7: the throne, the footstool, the right hand); Jonah 2:7 (13.2.6: the bolts of the earth); Lev 3:9 (13.3.3); Lev 7:34
(13.4.2, in words); Gen 37:25 (13.4.6); Amos 1:3 (13.7.1); Deut 24:14 (15.2.1: oppression); Isa 58:7 (15.4.3: clothing the
naked); **Deut 15:18** (15.8.2: the master's reluctance to release); **Jer 34:9, 34:11** (15.9.4, 15.13.2: the release
proclaimed and revoked); Exod 21:3 (15.10.1); Deut 21:7 (15.13.5: the elders clear themselves); Lev 16:21 [divergence]
(15.13.6: the sins thrown on the city); Num 24:17 (16.3.3: the king as a star); 1 Sam 2:10 (16.4.3); Deut 21:3 (16.1.2); Exod
11:5 (16.9.4: the millstone); Josh 9:21 (16.9.5: drawers of water); **Deut 15:13** and **Lev 25:10** (19.1.1: release "in
favour", not empty; *kirenzi* = *andurāru* ~ `דְּרוֹר`, through the Hurrian and Akkadian); Deut 10:8 (19.2.6: standing before
= serving); **Jer 34:8** (19.3.1: proclaiming release); Deut 15:18 (19.4.4: the blessing); Josh 6:15 (19.5.3: the seventh
day); **Jer 34:22** (19.6.1–2: the city destroyed and left without inhabitant); Jer 19:11, Ps 2:9 (19.7.2: the city broken
like a vessel – the cup of the smith's parable returns); Mic 1:6 (19.10.2: the stones down to the valley); Isa 6:11
(19.21.3); Exod 21:2 (19.14.2: the bought slave); Ps 80:2 (10.2.1: the shepherd); Gen 40:3 (10.4.3: the guard-house).

## Progress
- 2026-10-30: translator 3: SR 13.1.1–17.4.3 drafted (all 422 rows; no review passes by a second reader yet).
- 2026-10-30: base secured, renderings fixed, brief written (the coordinator).
- 2026-10-31: review pass (a) fidelity – 23 lines changed (SR 13.6.3, 14.4.4, 14.5.6, 14.12.2–14.12.5, 14.14.3–14.14.5, 14.16.2, 14.16.4, 14.17.2, 15.2.1, 16.4.3, 19.1.1, 19.2.1, 19.3.4, 19.7.1, 19.8.2, 19.9.2, 19.15.3, 19.16.1). Brackets (restored vs preserved words, esp. *tarna* in 19.15.3/19.16.1); tense: present *a-uš-zi* rendered past in 14.12.5/14.14.5 (now "אינו מביט" as 14.9.4); *URU-ri* moved into the previous line and so doubled in 14.14.3–4 (each line now holds its own word); 14.5.6 "אך" without -ma → "ו"; 15.2.1 "אם" was our own restoration shown as the edition's → "(אם)"; 13.6.3 the determinative DUG as "[כלי]" → "(כלי)".
- 2026-10-31: review pass (b) consistency – 1 line changed (SR 14.20.4: *išḫuwai-* `יִזָּרוּ`, as UL 1:115 and the rituals' `זרה`). Splits kept (Ì `שמן`/`שומן`, *ḫuwai-* `ברח`, *wišuriya-* `נמעך`, *kištuwant-* `רעב`, *mekki* `גדול` of a person, *menaḫḫanda* `כנגד`): renderings M3.
- 2026-10-31: review pass (c) Hebrew – 4 lines changed (SR 14.2.5 `והעיר – …` for `ואת העיר – … אותו`; 14.12.3, 14.14.4 `הִרְבָּה, אחר כך,` for `הרבה מאחור` ("far behind"); 15.6.1 `וּנְחַיֶּה` vocalized), and 13 `## ` headings (`אֶבְּלָה`, `פּוּרָּה`, `אֵל` / `הָאֵל(ים)` vocalized; §12 `אדון המחוז` as the line); intro written (`translation--intro-SR.rtl.md`: the Hittite side only, the Hurrian not translated, our TLHdig composite, its tablets and labels), checked against the H3/H4 gates (no hit) and `check_bible_quotes.py` (0).

## Part SR: parallels index (the Song of Release, Hittite side, CTH 789)

Generated by `../build_parallels_index.py` from the הקבלה bullets of `annotated-SR.rtl.md` (one row per tagged segment; the full discussion is in the entry).

### Parallels index
| Line | Original | Hebrew rendering | Bible | Tag | Comment |
|---|---|---|---|---|---|
| 13.1.6 | `A-NA {GIŠ}ŠÚ.A {D}IŠKUR-aš pár-ga-u-an e-ša-at` | על הכסא אל הסערה, גבוה, ישב; | ישעיהו סו:א | [equivalent] | `הַשָּׁמַיִם כִּסְאִי וְהָאָרֶץ הֲדֹם רַגְלָי` (ישעיהו סו:א) – הכסא והדום הרגליים במידות קוסמיות. |
| 13.1.7 | `A.ŠÀ 7 ta-wa-al-la-aš-ma-aš-ša-an A-NA {GIŠ}GÌR.GUB` | ואילו על מִדְרַס־הרגליים – של שבע *תַּוַלָּה* שדה – | תהלים קי:א | [equivalent] | `שֵׁב לִימִינִי עַד אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ` (תהלים קי:א). |
| 13.2.2 | `kat-ta-an-ta ta-an-ku-wa-i ták-ni-i i-ia-an-né-er` | מטה, אל הָאֲדָמָה הָאֲפֵלָה, יצאו לדרך. | – | [divergence] | `שְׁאוֹל` – העולם התחתון של המקרא הוא מקום שאין חוזרים ממנו; כאן האלים יורדים אליו לסעודה (M2: `שְׁאוֹל` לא בשורה). |
| 13.2.6 | `ták-na-a-aš ḫa-at-tal-wa-aš ták-na-a-aš {D}UTU-uš` | (היא,) של בריח האדמה, אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה. | יונה ב:ז | [equivalent] | `הָאָרֶץ בְּרִחֶיהָ בַעֲדִי לְעוֹלָם` (יונה ב:ז) – העולם התחתון כמקום נעול בבריחים; כאן הבריח הוא תואר האלה עצמה, שומרת השער. |
| 13.3.3 | `3 SIG₇ {UDU}GUKKAL+KUN{ḪI.A}-na ḫa-at-te-eš` | שלוש רבבות כבשי־אַלְיָה טבחה; | ויקרא ג:ט | [equivalent] | `הָאַלְיָה תְמִימָה` (ויקרא ג:ט) – כבש האליה, מעדן המזבח והשולחן. |
| 13.4.2 | `an-da a-re-er {LÚ.MEŠ}MUḪALDIM-ma-kán {UZU}GABA{ḪI.A}` | פנימה הגיעו; ואילו המבשלים – את החזות | ויקרא ז:לד | [equivalent] | `חֲזֵה הַתְּנוּפָה` (ויקרא ז:לד, במלים) – החזה, נתח הכבוד; כאן הוא מוגש לאלים במשתה. |
| 13.4.6 | `e-ša-at ka-ru-ú-li-uš-ma-za DINGIR{MEŠ}-uš` | ישב; ואילו את הָאֵלִים הַקַּדְמוֹנִים | בראשית לז:כה | [equivalent] | `וַיֵּשְׁבוּ לֶאֱכָל לֶחֶם` (בראשית לז:כה) – הישיבה לסעודה. |
| 13.4.7 | `{D}IŠKUR-aš ZAG-az a-ša-aš-ta` | לימין אל הסערה הושיבה. | תהלים קי:א | [equivalent] | `שֵׁב לִימִינִי` (תהלים קי:א) – מקום הכבוד לימין המלך. |
| 13.7.1 | `]x-at 2-aš 3-aš 4-aš` | […]… שניים, שלושה, ארבעה | עמוס א:ג | [equivalent] | `עַל שְׁלֹשָׁה פִּשְׁעֵי דַמֶּשֶׂק וְעַל אַרְבָּעָה` (עמוס א:ג) – מניין עולה; ההקשר כאן שבור (אולי מניין כוסות או סבבים). |
| 14.1.1 | `a-li-⸢ia⸣-n[a-an]-za a-pé-el tu-e-eg-ga-a[z-še-et]` | אַיָּל – מעל עצמו שלו | שופטים ט:ח; יחזקאל יז:ב | [equivalent] | `הָלוֹךְ הָלְכוּ הָעֵצִים לִמְשֹׁחַ עֲלֵיהֶם מֶלֶךְ` (שופטים ט:ח); `חוּד חִידָה וּמְשֹׁל מָשָׁל אֶל בֵּית יִשְׂרָאֵל` (יחזקאל יז:ב) – משל של טבע ודומם שפירושו בני אדם. |
| 14.1.4 | `na-aš wa-ar-ke-eš-ta na-aš šu-u-ul-le-e-et` | והשמין, והתגאה, | דברים לב:טו | [equivalent] | `וַיִּשְׁמַן יְשֻׁרוּן וַיִּבְעָט` (דברים לב:טו) – השמן הבועט במי שהשמין אותו, ממש כאייל. |
| 14.1.14 | `a-li-ia-na-an {LÚ.MEŠ}ṢA-A-I-DU-TIM da-a-an-du-ma-an` | את האַיָּל – הציידים! ייקחו אותו | בראשית י:ט | [cognate] | (דרך האכדוגרם) *ṢAYYĀDU* – `צַיָּד`: `הוּא הָיָה גִבֹּר צַיִד לִפְנֵי יְהוָה` (בראשית י:ט). |
| 14.2.1 | `Ú-UL-ma a-li-ia-na-aš nu an-tu-wa-aḫ-ḫa-aš` | אך לא אַיָּל הוא – אדם הוא: | שמואל ב יב:ז | [equivalent] | `וַיֹּאמֶר נָתָן אֶל דָּוִד אַתָּה הָאִישׁ` (שמואל ב יב:ז) – הפירוש החותך של המשל. |
| 14.3.3 | `ḫa-at-ta-a-tar-ma-aš-ma-aš me-mi-iš-ke-mi` | ואילו חכמה – אני אומר לכם. | תהלים עח:ב | [equivalent] | `אֶפְתְּחָה בְמָשָׁל פִּי אַבִּיעָה חִידוֹת מִנִּי קֶדֶם` (תהלים עח:ב) – המשל כ"חכמה" שנאמרת לשומעים. |
| 14.4.4 | `š[a-a-ku-wa] ⸢zi⸣-ik-ke-zi na-aš-ša-an ta-pu-ša-aš ú-e-ši-ia-aš` | את [העיניים] הוא שם. והוא אל המרעים אשר לצד – | בראשית מד:כא | [equivalent] | `וְאָשִׂימָה עֵינִי עָלָיו` (בראשית מד:כא) – "שׂם עין" על דבר. |
| 14.7.5 | `na-an a-ap-pa mar-la-a-an-za URUDU-aš ḫu-ur-za-ke-u-an da-i[š]` | אותו הנחושת השוטה החלה לקלל בחזרה: | ישעיהו כט:טז; ישעיהו מה:ט | [equivalent] | `כִּי יֹאמַר מַעֲשֶׂה לְעֹשֵׂהוּ לֹא עָשָׂנִי` (ישעיהו כט:טז); `הֲיֹאמַר חֹמֶר לְיֹצְרוֹ מַה תַּעֲשֶׂה` (ישעיהו מה:ט) – הכלי המתקומם נגד עושהו. כאן הכלי לא רק מתווכח: הוא מקלל. |
| 14.7.8 | `iš-ḫu-na-ú-uš ar-ḫa ú-i-šu-u-ri-ia-at-ta-ri` | הימנית תימעך!" | איוב לא:כב | [equivalent] | `כְּתֵפִי מִשִּׁכְמָה תִפּוֹל וְאֶזְרֹעִי מִקָּנָה תִשָּׁבֵר` (איוב לא:כב) – קללת הזרוע הנשברת, כאן מפי הכלי על מי שעשאו. |
| 14.8.1 | `nu-za {LÚ}SIMUG PA-NI ŠÀ-ŠU me-mi-iš-ke-u-an da-iš` | והנפח החל לומר אל לבו: | בראשית ח:כא | [equivalent] | `וַיֹּאמֶר יְהוָה אֶל לִבּוֹ` (בראשית ח:כא) – השיחה עם הלב לפני ההחלטה. |
| 14.9.5 | `ŠA A-BI-ŠU DINGIR{MEŠ} ku-in ḫu-wa-ar-ta-an ḫar-kán-zi` | (הוא) אשר אֵלֵי אביו קיללו אותו. | ויקרא כ:ט | [equivalent] | `כִּי אִישׁ אִישׁ אֲשֶׁר יְקַלֵּל אֶת אָבִיו` (ויקרא כ:ט, במלים) – כאן לא הבן מקלל: הכלי מקלל את עושהו, והאלים מקללים את הבן שבגד. |
| 14.11.4 | `šu-ú-ni-at na-aš-za e-ša-at na-an a-da-a-an-na da-iš` | טבל אותו, וישב, ואותו לאכול החל. | בראשית לז:לא | [equivalent] | `וַיִּטְבְּלוּ אֶת הַכֻּתֹּנֶת בַּדָּם` (בראשית לז:לא) – הטבילה; ובמשלי המקרא הכלב הוא הבזוי והזולל (`כְּכֶלֶב שָׁב עַל קֵאוֹ`, משלי כו:יא). |
| 14.12.7 | `li-il-ḫu-wa-an da-iš` | החל לשפוך. | איוב כ:טו | [equivalent] | `חַיִל בָּלַע וַיְקִאֶנּוּ מִבִּטְנוֹ יֹרִשֶׁנּוּ אֵל` (איוב כ:טו) – בולע העושר שמקיא אותו; כאן הוא "שופך" לפני אדונו את מה שבלע, כמו הכלב והלחם הטבול. |
| 14.16.1 | `[{LÚ}NAGAR] AN.ZA.GÀR-an ⸢wa-al⸣-li-i[a]-an-ni ú-e-te-et nu-uš-ši-kán ḫu-u-t[a]-nu-uš kat+ta-an-ta ták-na-a-aš {D}UTU-i …` | [נגר] מגדל לתפארת בנה; ואת *חפירותיו* מטה – אל אֵלַת־הַשֶּׁמֶשׁ שֶׁל הָאֲדָמָה – הגיע מטה; | בראשית יא:ד | [equivalent] | `הָבָה נִבְנֶה לָּנוּ עִיר וּמִגְדָּל וְרֹאשׁוֹ בַשָּׁמַיִם` (בראשית יא:ד) – מגדל שיסודותיו נוגעים בעולם התחתון וראשו (14.16.2) מקורב לשמים: מבנה שמחבר את קצות העולם, כמו בבל. אבל כאן אין המבנה חטא האדם: הוא מעשה ידיו של אומן, והמגדל הוא שמתקומם על בונהו. |
| 14.16.6 | `[A-NA AN.ZA.GÀR] ḫu-u-ur-ta-in te-et wa-al-aḫ-du-ia-an {D}IŠKUR-aš AN.ZA.GÀR nu-uš-ši ša-a-ma-nu-uš še-er ḫu-i-nu-ud-du` | [אל המגדל] קללה אמר: "ימחץ אותו אל הסערה, את המגדל! ואת יסודותיו מעלה יריץ! | ישעיהו ל:יד | [equivalent] | `וּשְׁבָרָהּ כְּשֵׁבֶר נֵבֶל יוֹצְרִים` (ישעיהו ל:יד) – המבנה שנשבר עד היסוד. |
| 14.16.7 | `[ ]-ar-ši-kán kat+ta-an-ta a-mi-ia-ri ma-uš-du SIG₄-ma-kán kat+ta-an-ta ÍD-i ma-uš-du` | [ואת …]ו – מטה, אל תוך התעלה ייפול! ואילו הַלְּבֵנִים – מטה, אל הנהר ייפלו!" | בראשית יא:ג | [equivalent] | `הָבָה נִלְבְּנָה לְבֵנִים וְנִשְׂרְפָה לִשְׂרֵפָה` (בראשית יא:ג) – מגדל של לבנים; כאן הלבנים יוטלו אל הנהר. |
| 14.20.7 | `ŠA-PAL [{GIŠ}Š]Ú.⸢A⸣ a-k[i ]x[` | תחת ה[כ]סא מת […]…[…] | שופטים א:ז | [divergence] | `שִׁבְעִים מְלָכִים בְּהֹנוֹת יְדֵיהֶם וְרַגְלֵיהֶם מְקֻצָּצִים הָיוּ מְלַקְּטִים תַּחַת שֻׁלְחָנִי` (שופטים א:ז) – המושפל תחת שולחן השליט, ככלב. |
| 15.2.1 | `[ {D}IŠ]KUR-aš ši-iš-ši-ia-ni-it dam-mi-iš-ḫa-a-an-za` | "[…] (אם) [אֵל הַסְּ]עָרָה עשוק בחוב, | דברים כד:יד | [equivalent] | `לֹא תַעֲשֹׁק שָׂכִיר עָנִי וְאֶבְיוֹן` (דברים כד:יד) – העושק של העבד והשכיר; כאן האל עצמו "עשוק בחוב", כאחד מעבדי החוב. |
| 15.4.3 | `ne-ku-⸢ma⸣-an-za na-an ku-iš-ša {TÚG}ku-ši-ši-⸢ia⸣-az wa-aš-ša-u-e-ni` | עירום – אותו כל אחד בגלימת־קוּשִׁישִׁי נלביש. | ישעיהו נח:ז | [equivalent] | `כִּי תִרְאֶה עָרֹם וְכִסִּיתוֹ` (ישעיהו נח:ז) – כסות העירום; כאן בעלי העבדים מציעים לכסות את האל, כדי שלא יצטרכו לשחרר את עבדיהם. |
| 15.8.2 | `ku-iš pí-iš-ke-ez-zi {LÚ.MEŠ}SAGI-ia-at-na-aš` | מי ייתן? וגם המַשְׁקִים – הם לנו | דברים טו:יח | [equivalent] | `לֹא יִקְשֶׁה בְעֵינֶךָ בְּשַׁלֵּחֲךָ אֹתוֹ חָפְשִׁי מֵעִמָּךְ כִּי מִשְׁנֶה שְׂכַר שָׂכִיר עֲבָדְךָ שֵׁשׁ שָׁנִים` (דברים טו:יח) – התורה צופה את טענת האדון: מי ישרת אותי? כאן הטענה נאמרת במפורש. |
| 15.9.4 | `tu-el ARAD-DÁM GÉME-TAM pa-[ra-a tar-na]` | את עבדך, את אֲמָתְךָ – שַׁ[לַּח!] | ירמיהו לד:ט | [equivalent] | `לְשַׁלַּח אִישׁ אֶת עַבְדּוֹ וְאִישׁ אֶת שִׁפְחָתוֹ הָעִבְרִי וְהָעִבְרִיָּה חָפְשִׁים` (ירמיהו לד:ט) – העבד והשפחה ששוחררו בירושלים; GÉME `אָמָה`, כבחוקים. |
| 15.10.1 | `DUMU-KA-za ar-ḫa ma-ni-ia-aḫ DAM-[KA` | את בנך – הַפְקֵד הלאה! את אשת[ך …] | שמות כא:ג | [equivalent] | `אִם בַּעַל אִשָּׁה הוּא וְיָצְאָה אִשְׁתּוֹ עִמּוֹ` (שמות כא:ג, במלים) – גורל האשה והבנים בשחרור העבד. |
| 15.13.2 | `am-me-el-ma-a[n U]RU-aš Ú-UL pa-a-i` | ואילו עירי – אותו לא תיתן; | ירמיהו לד:יא | [equivalent] | `וַיָּשׁוּבוּ אַחֲרֵי כֵן וַיָּשִׁבוּ אֶת הָעֲבָדִים וְאֶת הַשְּׁפָחוֹת אֲשֶׁר שִׁלְּחוּ חָפְשִׁים` (ירמיהו לד:יא) – העיר שאינה נותנת את השחרור (שם: שנתנה אותו וחזרה בה). |
| 15.13.5 | `a-pé-el U[RU-LAM]-ŠU wa-aš-du-la-az pár-ku-nu-ut` | טיהר את עצמו מן החטא של עי[ר]ו שלו; | דברים כא:ז | [equivalent] | `יָדֵינוּ לֹא שָׁפְכֻה (שָׁפְכוּ) אֶת הַדָּם הַזֶּה וְעֵינֵינוּ לֹא רָאוּ` (דברים כא:ז) – ההיטהרות מאשמה קיבוצית. |
| 15.13.6 | `{URU}e-ep-[la-an UR]U-an URU-ri še-er wa-aš-túl{ḪI.A} pé-eš-ši-e-et` | ואת אֶבְּלָה[, הע]יר – על העיר השליך את החטאים. | ויקרא טז:כא | [divergence] | `וְנָתַן אֹתָם עַל רֹאשׁ הַשָּׂעִיר` (ויקרא טז:כא) – החטאים מושלכים על נושא אחר; כאן לא על בהמה שתישלח, אלא על העיר עצמה – וזו תושמד (19.6). |
| 16.1.2 | `[ ]x iš-tar-na {LÚ.MEŠ}ŠU.GI-aš NU.GÁL-ma-aš` | […]… בין הזקנים – אך אין | דברים כא:ג | [equivalent] | `זִקְנֵי הָעִיר הַהִוא` (דברים כא:ג, במלים) – מועצת זקני העיר כגוף המכריע. |
| 16.3.3 | `{URU}e-ep-l[u]-me-na-aš MUL-aš {M}m[e-` | כוכב בני אֶבְּלָה, מֶ[גִי …]! | במדבר כד:יז | [equivalent] | `דָּרַךְ כּוֹכָב מִיַּעֲקֹב וְקָם שֵׁבֶט מִיִּשְׂרָאֵל` (במדבר כד:יז) – המלך ככוכב עמו. |
| 16.4.3 | `SI-ŠU [ me-m]i-iš-ke-⸢et⸣` | קרנו […] היה אומר. | שמואל א ב:י | [equivalent] | `וְיָרֵם קֶרֶן מְשִׁיחוֹ` (שמואל א ב:י) – הקרן כסמל הכוח והגאווה. |
| 16.9.4 | `] pa-ra-a tar-nu-mar le-e e-eš-zi` | […] שחרור אַל יהיה! | שמות יא:ה | [equivalent] | `עַד בְּכוֹר הַשִּׁפְחָה אֲשֶׁר אַחַר הָרֵחָיִם` (שמות יא:ה) – הטוחנת ברחיים כשפלת העבדים. |
| 16.9.5 | `]x ku-iš ÍD-az ḫa-a-ni` | […]… מי ששואב מן הנהר, | יהושע ט:כא | [equivalent] | `וַיִּהְיוּ חֹטְבֵי עֵצִים וְשֹׁאֲבֵי מַיִם לְכָל הָעֵדָה` (יהושע ט:כא) – שואבי המים כמעמד המשועבד. |
| 19.1.1 | `⸢DUMU{MEŠ⸣} {URU⸢}i⸣-ki-in-kal ⸢ar⸣-[ḫa aš-šu-li tar-na]` | את בני אִיקִינְקַלִּישׁ [שַׁלַּח] הל[אה בטובה]! | דברים טו:יג | [equivalent] | `וְכִי תְשַׁלְּחֶנּוּ חָפְשִׁי מֵעִמָּךְ לֹא תְשַׁלְּחֶנּוּ רֵיקָם` (דברים טו:יג) – השחרור "בטובה", לא בידיים ריקות; |
| 19.1.1 | `⸢DUMU{MEŠ⸣} {URU⸢}i⸣-ki-in-kal ⸢ar⸣-[ḫa aš-šu-li tar-na]` | את בני אִיקִינְקַלִּישׁ [שַׁלַּח] הל[אה בטובה]! | ויקרא כה:י | [equivalent] | `וּקְרָאתֶם דְּרוֹר בָּאָרֶץ לְכָל יֹשְׁבֶיהָ` (ויקרא כה:י) – שחרור כללי של העבדים. |
| 19.1.4 | `ku-iš a-⸢da-a⸣-[an-na pí-iš-ke-ez-z]i` | אשר לא[כול נותן]. | שופטים א:ז | [divergence] | `שִׁבְעִים מְלָכִים … הָיוּ מְלַקְּטִים תַּחַת שֻׁלְחָנִי` (שופטים א:ז) – אצל אדני בזק המלכים השבויים אוכלים פירורים תחת שולחנו; כאן השבוי הוא שמאכיל את המלכים. |
| 19.2.6 | `pé-ra-an ša-r[a-a ar-ta-ri]` | לפני(ך) מע[לה עומד]. | דברים י:ח | [equivalent] | `לַעֲמֹד לִפְנֵי יְהוָה לְשָׁרְתוֹ` (דברים י:ח) – "עמד לפני" = שירת. |
| 19.3.1 | `ma-a-an pa-⸢ra-a⸣ [tar-nu-mar i-ia-at-te-ni]` | אם ש[חרור תעשו] | ירמיהו לד:ח | [equivalent] | `לִקְרֹא לָהֶם דְּרוֹר` (ירמיהו לד:ח) – "עשיית שחרור" כמעשה ציבורי של העיר כולה, ברבים. |
| 19.4.4 | `wa-al-li-i[a-an-ni ma-a-i]` | לתפא[רת יצמח]. | דברים טו:יח | [equivalent] | `וּבֵרַכְךָ יְהוָה אֱלֹהֶיךָ בְּכֹל אֲשֶׁר תַּעֲשֶׂה` (דברים טו:יח) – הברכה ההבטחה לעיר המשחררת: ניצחון בנשק ופריון השדה. |
| 19.5.3 | `nu nam-ma UD 7{KAM}-[az nu-u]š-ša-an am-mu-uk` | אז, ביום השביעי, [א]ני | יהושע ו:טו | [equivalent] | `וַיְהִי בַּיּוֹם הַשְּׁבִיעִי וַיַּשְׁכִּמוּ כַּעֲלוֹת הַשַּׁחַר` (יהושע ו:טו) – היום השביעי כיום החורבן של העיר. |
| 19.6.1 | `{URU}e-ep-la-an U[RU-an ḫ]ar-ni-⸢ik⸣-[m]i` | ואת אֶבְּלָה, הע[יר – א]שמיד; | ירמיהו לד:כב | [equivalent] | `וַהֲשִׁבֹתִים אֶל הָעִיר הַזֹּאת וְנִלְחֲמוּ עָלֶיהָ וּלְכָדוּהָ וּשְׂרָפֻהָ בָאֵשׁ` (ירמיהו לד:כב) – ובירמיהו: העיר שחזרה בה מן השחרור תיחרב. |
| 19.6.2 | `na-aš ma-a-an Ú-U[L ku-uš-ša-an-g]a a-ša-a-an-za` | והיא – כאילו [מעולם] לא היתה מיושבת – | ירמיהו לד:כב | [equivalent] | `וְאֶת עָרֵי יְהוּדָה אֶתֵּן שְׁמָמָה מֵאֵין יֹשֵׁב` (ירמיהו לד:כב). |
| 19.7.2 | `ar-ḫa {DUG}te-e[š-šum-mi-ia-aš i-wa-a]r du-wa-ar-na-aḫ-ḫ[i]` | [כמו ספ]ל אשבור הלאה, | ירמיהו יט:יא; תהלים ב:ט | [equivalent] | `כָּכָה אֶשְׁבֹּר אֶת הָעָם הַזֶּה וְאֶת הָעִיר הַזֹּאת כַּאֲשֶׁר יִשְׁבֹּר אֶת כְּלִי הַיּוֹצֵר` (ירמיהו יט:יא); `כִּכְלִי יוֹצֵר תְּנַפְּצֵם` (תהלים ב:ט) – העיר נשברת ככלי. |
| 19.10.2 | `kat-ta-an-ta ÍD-⸢i⸣ [` | מטה, אל הנהר […] | מיכה א:ו | [equivalent] | `וְהִגַּרְתִּי לַגַּי אֲבָנֶיהָ וִיסֹדֶיהָ אֲגַלֶּה` (מיכה א:ו) – אבני העיר המושלכות אל הגיא עד גילוי היסודות. |
| 19.14.2 | `[ Ú]-UL wa-ša-a-an-za` | [… ל]א נקנה | שמות כא:ב | [equivalent] | `כִּי תִקְנֶה עֶבֶד עִבְרִי שֵׁשׁ שָׁנִים יַעֲבֹד` (שמות כא:ב) – העבד הקנוי; כאן מי ש"לא נקנה" – אולי שבוי מלחמה, שאינו עבד בכסף. |
| 19.21.3 | `a-ša-a-an-za URU-aš nu-wa-ra-an QA-TAM-M[A i-i]a-[m]i` | היתה עיר מיושבת – כך אעשה אותה." | ישעיהו ו:יא | [equivalent] | `עַד אֲשֶׁר אִם שָׁאוּ עָרִים מֵאֵין יוֹשֵׁב` (ישעיהו ו:יא). |
| 10.2.1 | `-z]a ḫu-u-ma-an-ta-aš {LÚ}SIPA-aš` | […] רועה הכול, | תהלים פ:ב | [equivalent] | `רֹעֵה יִשְׂרָאֵל הַאֲזִינָה` (תהלים פ:ב) – האל כרועה; בתפילות החתיות אל השמש הוא "רועה כל בני האדם". |
| 10.4.3 | `I-NA É.E[N.NU.UN` | בבית המש[מר …] | בראשית מ:ג | [equivalent] | `וַיִּתֵּן אֹתָם בְּמִשְׁמַר בֵּית שַׂר הַטַּבָּחִים` (בראשית מ:ג) – בית המשמר כבית סוהר. |
