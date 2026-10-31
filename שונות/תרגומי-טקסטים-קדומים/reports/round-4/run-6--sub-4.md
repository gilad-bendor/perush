# Round 4, run 6, sub-session 4 – the Hittite elimination rituals (AS, UH, PU, AM, AM2)

Session `session_01UnH1L1oHp4fYEKJGDxp5y3` (child of `session_01Lwwha2FxM84MQKx7ABauwV`), 2026-10-30 13:41 – ~16:50 UTC, inside
range A, on `main`. Model: the coordinator and every sub-agent ran Opus 5.5 (one translator resumed through four parts; three
review passes, each a fresh agent); one agent at a time throughout; no cheaper model used.

## Done
- **Step 1, before the first line** (commit 4620072): every row of the ritual renderings §R1 checked against the five HPM
  composites (481 clauses) and every gate tested on the rituals' words by a scratch script; the result is the new
  `טקסי-שילוח-וטיהור/renderings.md` **§R1a** (corrections and binding additions), new ritual H-tables (H3 reserved, H5 formulas
  F17–F21, H6 traps) and 21 new selftest lines (H9); licence fixes in the law file's H3/H4.
- **Step 2, drafting**: `annotated-AS.rtl.md` (109), `annotated-UH.rtl.md` (33), `annotated-PU.rtl.md` (56), `annotated-AM.rtl.md`
  (260), `annotated-AM2.rtl.md` (23) in `טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים/`, one translator in four parts (AS; UH + PU;
  AM 1–110; AM 111–260 + AM2), each merged at once into the renderings as **§R2–§R5**, verified and committed (b73bf0b, f7a17a0,
  0a06d3c, c992aa3). Every entry has פירוק, נוסחים (where the manuscripts differ), תרגומים (the HPM editor's translation, read
  after drafting: Chrzanowska, Görke, Christiansen in German, Collins in English), הקבלה, הערות.
- **Step 3, review**: (a) fidelity – 55 lines (64332be); (b) consistency – 12 lines, refrains compared by script, lexmap
  collisions (4d1c706); (c) Hebrew – 20 lines + 12 headings, and the six intros `translation--intro-{AS,UH,PU,AM,AM2}.rtl.md` +
  the project's `translation--intro.rtl.md` (c7ed343). Built `translation-<KEY>.rtl.md` and the project's `translation.rtl.md`.
- **Step 4**: `טקסי-שילוח-וטיהור/build_parallels_index.py` (new: writes each text's "Part <KEY>: parallels index" into
  `project.md` from the הקבלה bullets, and merges them by Bible book and verse into the corpus `parallels-index.md`, keeping the
  key findings above "## The table"); **102 rows** (AS 41, UH 13, PU 14, AM 27, AM2 7); key findings written; `corpus.md` status
  section; `project.md` Open decisions and Progress; print stub `הדפסה/טקסי-שילוח-וטיהור/1-טקסי-השילוח-החתיים.rtl.md` (97e8fac).

## Verification
- `python3 -I -B tools/hittite_tools.py verify --strict` on all nine Hittite keys (HL1, HLPT, HL2, IN, AS, UH, PU, AM, AM2):
  **0 problems**. Two repeated-line notices remain, both justified: HL1 180/186 (sub 1) and AM 101/189 (a gap mark in 189,
  explained in its note).
- `selftest`: 51 lines, 0 failures (30 before; 21 ritual lines added, 3 replaced by drafted lines).
- `python3 -I tools/check_bible_quotes.py` on every file written or changed (five annotated files, six intros, the built
  translations, `project.md`, `corpus.md`, `parallels-index.md`, both renderings files, the print stub): **0 problems**. The
  translator's first draft had two remembered verses (Num 8:19, 19:2), caught and fixed.
- The intros: the H3 reserved-word gates run on them by script (pass (c)): 0 hits after two `מדבר` "speaks" were rewritten.

## Key findings
**For the Bible** (all typological; the notes say where Wright 1987 and Janowski & Wilhelm 1993 argue a north-Syrian route):
- **Lev 16:21–22**: the carrying verb is the same act (*peda-* `נשא` ↔ `וְנָשָׂא הַשָּׂעִיר עָלָיו`: AS 33, PU 26, 45, AM 40) and
  the release is *arḫa tarna-* `שִׁלַּח` (the mouse, AM 41, 87, 168 ↔ Lev 14:7). But the carriers are rams and an adorned woman
  (AS), a **male sheep (UDU.NÍTA), not the literature's "ram"**, crowned with five-coloured wool (UH), a war captive and a woman,
  then a bull and a ewe (PU), a little mouse (AM). The goat is [absent] as a carrier.
- **The destination is a land, not a wilderness**: "the enemy's border … a place where *ours* do not arrive" (AS 35–36; the
  briefs' "a place they do not know" is **not on the tablet**), "the road of the enemy" (UH 9), "back to the enemy land" (PU),
  "the high mountains, the deep valleys, the long roads" (AM 40). ↔ `אֶרֶץ גְּזֵרָה`, defined from "our" side and inhabited:
  the evil is given to "the evil people" (AM 22).
- **AS 24 – the hand-placing** (the lords of the camp put their hands on the rams) ↔ `וְסָמַךְ אַהֲרֹן` (Lev 16:21) – without a
  confession; the list that follows (AS 38) is of victims (men, cattle, sheep, horses, mules, donkeys), not of sins.
- **1 Sam 6**: "whichever god made this plague" (F17, six times) ↔ `הוּא עָשָׂה לָנוּ אֶת הָרָעָה הַגְּדוֹלָה הַזֹּאת`; the unused
  animal (AS 88 ↔ 6:7); "whoever finds it" (AS 40 ↔ 6:8); the gift that appeases and turns the god "in favour" (F18 ↔ 2 Sam
  24:16). Ambazzi's mouse is the carrier, the Philistines' golden mice the plague's image (AM 37 ↔ 1 Sam 6:5).
- **Lev 14**: no bird (MUŠEN) and no cedar (ERIN) in any of the five texts – [absent]; the coloured wool is the nearest thing to
  `שְׁנִי תוֹלַעַת` (AS 10, UH 6, PU 32; m. Yoma 4:2, 6:6).
- **Lev 16:26**: the hands rinsed in salt water, passage between two fires, "and they come away" (AS 58–67).
- **The fuller's simile** (AM 26–30 ×3, AM2 6–11) ↔ Mal 3:2, Ps 51:9, Isa 1:18, Jer 2:22.

**For the ancient mind:** plague as the act of an angry, often foreign god, who is not fought but fed, dressed up for and
politely sent home with a companion (an adorned woman, a crowned sheep, a captive in the king's own clothes); the evil as a
substance – extinguished like embers, drawn out of every limb with wool, washed out like a stain, handed over to enemies,
carried by a mouse beyond the world of men; the god invited to eat and drink "in a godly way" and not to turn to men; the
ritual expert's own voice (Ašḫella's "I", Ambazzi's feminine "I", her prayer for her own house, AM 225–231); five colours of
wool, metals and stones (lapis, carnelian, "Babylon stone") as a vocabulary of value; the Luwian gods Zarniza, Tarpattašši
("substitute"?), Alauwaimi, Mammai, and the Seven.

## Decisions taken (renderings fixed or changed; lines in the files named)
- **R1a (before drafting):** *dai-* = `שָׂם` with the Laws and IN (**the split with R1's `הִנִּיחַ` is decided**: `הניח` is *dala-*);
  *penna-* `הִסִּיעַ` / *unna-* `נָהַג` (R1 had *penna-* `נָהַג`; the Laws' precedent); *anda tarna-* "put in" = `הִכְנִיס`
  (`שִׁלַּח` only for *arḫa / parā tarna-* "release"); UH's animal UDU.NÍTA `כֶּבֶשׂ`; KILĪLU `עֲטָרָה`, *ḫaršanallai-* `עִטֵּר`;
  *ÚŠ* / *ḫenkan* `מגפה`, *akkiškittari* `מֵתִים`; *aššul* `טובה` (F18), *takšul* `שלום`; *kāša* `הִנֵּה` (F21); F19 the dawn;
  ANZELLU `אִסּוּר` beside *ḫurkil* `תועבה`; LÚ ŠU.DAB `אָסִיר` (shared with HLPT *ASĪRU*); *galank-* `מפויס`; the colours (SA₅
  `אָדֹם` ★, BABBAR `לָבָן` ★ …), the stones and metals.
- **R2 (AS)**: *arra-* "wash" **`שָׁטַף`** (coordinator, AS 65: IN's *warp-* holds `רחץ`; ↔ Lev 15:11); *ḫatta-* `דקר` (`שחט` stays
  *ḫuek-*'s); *išḫuwa-* `זרה` (split by sense from IN's "heap" `ערם`); *ḫink-* "bow" `הרכין`; *kuitman* "while" `כל עוד`;
  R1a corrected at AS 60 (*dai-* "put down") and AS 36.
- **R3 (UH, PU)**: the indefinite god `איזשהו אֵל`; F18 as a command; DINGIR.MUNUS `אֵלָה` ★; *uiya-* "send" `שיגר`; {D}IMIN.IMIN.BI
  "the Seven" `הַשִּׁבְעָה` (the composite's INIM.INIM.BI is a slip: both manuscripts have IMIN).
- **R4 (AM 1–110)**: the Ambazzi refrains fixed (table in `project.md`, Part 3); *šanḫ-* "roast" (homonym of IN's "sweep");
  SÍG *ištagga-* "bowstring" `מיתר`; Mammai `מַמַּאי` ★ / Mammāimi `מַמָּאִימִי` (two H2 rows).
- **R5 (AM 111–260, AM2)**: MÁŠ.ŠIR `תיש־ההרבעה`; *mulātar* transliterated; *pāi* "give!" `תן` (two F8 escapes, AM 117–118, kept
  rather than narrowing the Laws' F8).
- **Reviews**: the god's address `ו(אתה), הָאֵל` (no *zik*; AS 55, UH 25); the fuller refrain's double `כך` dropped (4 copies);
  AM 43 / 171 `אחר אנו נותנים לך` (1pl); {UZU}Ì "fat" `שומן` (the Laws), Ì.UDU "tallow" `חֵלֶב`; Ambazzi feminine throughout
  (AM 216/218); AS 16 marked as a crux.
- **Tables / tool**: the prefix class of every H3/H4 regex in both renderings files changed from `[ובלהמכש]*` to
  `ו?(?:ש|כש)?[בלהמכ]?` (the old class read `מש`, `שו` as prefixes: `משגר` hit `גר`, `שוזר` hit `זר`); licences widened: `נשא`
  (*pēdāu*), `תועבה` (*ḫurkil*), `תיש` (MÁŠ.ŠIR), `סמך` forms; new ritual traps `אָדֹם`, `לָבָן`, `עֵז`, `חֵלֶב`, `בָּר`, `אֹדֶם`,
  `עֲטָרָה`, `השבעה`, `אֵלָה`, `ממאי`, `שאלה`; new reserved words (Lev 1:4 `נרצה`, `שלמים`, 1 Sam 6 `אשם` / `טחורים`, `ארץ גזרה`,
  `עתי`, `מלאך`, Zech 5 `איפה` / `שנער`).

## Questions for the user
None that block. (The modern editions – Mouton 2016, Christiansen 2006 StBoT 48, Bawanypeck 2005 – are © and not in hand; they
would check the cruxes.)

## Problems and skipped items
- **No quota stop.** Every gate said GO (range A, `five_hour` `allowed`).
- Rank 3: the translator saw the HPM `edition.json` T-notes (the editor's translation notes) of AS before drafting; for UH, PU,
  AM only the textual notes. Recorded in `project.md`.
- Cruxes left marked (`?`, `*…*`): AS 16, 47, 52–56, 63, 69, 91, 103; UH 13–14 (KÉŠ "knot" / "herd"), 25, 32; PU 3/7, 21, 27/47,
  34, 36, 38, 43; AM 5/53 (subject), 37, 48, 103, 191, 216–220, 228 (DAM "my wife" in a woman's prayer), 235, 248, 257; AM2 17.
- **Ḫedammu (step 5)**: not started. A quick probe of `hethport.net/txhet_myth/partitur.php?xst=CTH 348.I.1` returned a 5 KB page
  without content (the right parameters, e.g. the editor's name, are unknown); not investigated further. Plan if the parent
  wants it: `tools/hpm2md.py fetch` the CTH 348.I.x editions (if HPM has them; else the TLHdig manuscripts as for IN), a new key
  in `hittite_tools.py`, the fifth-day dossier's rules (`נָחָשׁ` the comparison word; `תַּנִּין`, `לִוְיָתָן` never), one translator.
  Not cheap unless HPM has an edition with clauses: probably a whole sub-session.
- The intros' H3 check was a scratch script of pass (c), not a `hittite_tools.py` command.

## Cross-corpus splits left for the lead
- **Etana's *anzillu* `תּוֹעֵבָה`** vs AM2's ANZELLU `אִסּוּר` (AM2 has it beside *ḫurkil* `תועבה`, so the two words need two Hebrews).
- LÚ ŠU.DAB `אָסִיר` shares the word with HLPT's *ASĪRU* (same referent; accepted as a shared word).
- *arra-* `שטף` (rituals) / *warp-* `רחץ` (IN) – resolved here; Lev 15:11 / 16:26 keep both Bible verbs visible.
- UDU.ŠIR `אַיִל`: should it be qualified "breeding" like MÁŠ.ŠIR `תיש־ההרבעה`? (UDU.ŠIR is also the Laws' word.)
- HL2 163.3 *išuwan* `מלח` vs the rituals' MUN `מלח` (pass (b) noticed it; not checked).
- *nai-* `הפנה` (rituals) vs `הטה` (HL2): a split by sense, accepted.
- *memai-* / *tar-* both `אמר`, *uda-* / *uwate-* both `הביא`: shared common verbs, accepted.

## For the shared files
- **history.md** (changelog): "2026-10-30 – Round 4 run 6 sub 4: the Hittite elimination rituals of Ašḫella (CTH 394), Uḫḫamuwa
  (CTH 410), Puliša (CTH 407) and Ambazzi (CTH 391.1–2), 481 clauses, from the HPM editions: the ritual renderings checked against
  the composites before the first line (R1a), one Opus translator in four parts (merged as §R2–§R5), three review passes
  (fidelity 55 lines, consistency 12, Hebrew 20), intros, built; 102 parallels rows; `verify --strict` 0 problems on all nine
  Hittite keys; print stub. No quota stop." Story: the briefs' "crowned ram" (UH) is a male sheep (UDU.NÍTA), and their "a place
  they do not know" (AS 36) is "a place where ours do not arrive"; R1's *penna-* `נהג` and *dai-* `הניח` contradicted the Laws
  and were aligned before drafting; *anda tarna-* "put in" would have produced a false `שִׁלַּח`; the old prefix class of the
  reserved regexes read `מש` / `שו` as prefixes (`משגר`, `שוזר`) – fixed in both files.
- **tools.md**: `טקסי-שילוח-וטיהור/build_parallels_index.py` (new: per-text parallels tables in `project.md` from the הקבלה
  bullets + the corpus `parallels-index.md`, by Bible book and verse); `hittite_tools.py` unchanged in code, its tables changed
  (the H3/H4 prefix class; the ritual H3/H5/H6 sections).
- **sources-registry.md**: nothing new (HPM BESRIT and TLHdig already registered).
- **guidelines §5.2** (one line each):
  - "**A regex prefix class must not swallow the root**: `[ובלהמכש]*` read `מש` and `שו` as prefixes (`משגר` hit the `גר` gate,
    `שוזר` the `זר` gate); use `ו?(?:ש|כש)?[בלהמכ]?`. [Hittite rituals, Round 4 run 6]"
  - "**A preverb changes the verb's gate**: Hittite *tarna-* is 'release' (`שִׁלַּח`) only with *arḫa / parā*; *anda tarna-* is 'put
    in' – the gate cannot see the preverb, the brief must. [Hittite rituals]"
  - "**A plan's animal is the literature's**: UH's 'crowned ram' is UDU.NÍTA, a male sheep; check every animal, colour and
    material against the Sumerogram. [Hittite rituals]"
- **guidelines §6.7** (a line): "**The Hittite elimination rituals (`טקסי-שילוח-וטיהור/renderings.md` §R1a–§R5, 2026-10-30):**
  *dai-* `שָׂם`; *tarna-* (release) `שִׁלַּח`, *anda tarna-* `הִכְנִיס`; *peda-* `נשא`; *penna-* `הִסִּיעַ`, *unna-* `נָהַג`; *ÚŠ* `מגפה`;
  *KUR LÚ.KÚR* `ארץ האויב`; LÍL `בָּר` ★; *idālu* `רע` / `הרעה`; *aššul* `טובה`, *takšul* `שלום`; F17 `איזה אֵל אשר עשה את המגפה
  הזאת`; *kāša* `הִנֵּה`; *arra-* `שָׁטַף`; *ḫatta-* `דקר`; UDU.ŠIR `אַיִל` ★, UDU.NÍTA `כֶּבֶשׂ`, PÉŠ.TUR `עכבר קטן`; KILĪLU
  `עֲטָרָה`; *unuwant-* `מקושט`; ANZELLU `אִסּוּר`; *galank-* `מפויס`; the colours SA₅ `אָדֹם` ★, BABBAR `לָבָן` ★; reserved:
  `שָׂעִיר`, `עֲזָאזֵל`, כפר, `מִדְבָּר`, `עָוֹן`, `סָמַךְ`, `הִתְוַדָּה`, `גּוֹרָל`, `ארץ גזרה`, `עתי`, `נרצה`, `אשם`."
- **STATUS.md / the plan row (run 6):** the Hittite elimination rituals (ritual corpus project 1) complete (first draft, reviewed,
  built, print stub); run 6's four texts (Laws, Instructions, rituals) all done; Ḫedammu not started (see above).
