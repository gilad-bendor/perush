# Project 1: the Instruction of Amenemope (`מוסר אמנמופה`)

## Scope
The whole text of pBM EA 10474 recto (KEY `AM`): the prologue (1.1–3.7), the thirty "houses" (3.8–27.5), the epilogue
(27.6–27.18) and the colophon (28.1): 551 lines, labelled page.line as in the TLA (= Lange 1925's numbering).

## Base text and witnesses
- AED-TEI `5JO44VJZERAB3HQUHMFSMNXH6I` (TLA 2018, ed. P. Dils), CC BY-SA 4.0: `../../sources/AED-TEI/Amenemope--pBM-EA-10474/`.
- The five older (21st-dynasty) fragmentary witnesses, in AED (`egypt_tools.py data AM … --wit`): tLouvre E 17173
  (2.15–18), oCairo SR 1840 (3.11–4.10), tMoscow I.1.d.324 (6.10–7.1), pStockholm MM 18416 (10.18–14.5), tTurin CGT
  58005 (24.1–25.9).
- Rank 3–5: the TLA's German (`tr AM`), Lange 1925 (PD).

## Plan
Drafted by one translator in parts (resumed after each merge): part 1 = 1.1–7.10 (prologue, houses 1–5), part 2 =
7.11–13.9 (houses 6–9), part 3 = 13.10–19.9 (houses 10–17), part 4 = 19.10–24.20 (houses 18–25), part 5 = 24.21–28.1
(houses 26–30, epilogue, colophon).

## AM 1.1–7.10

### Scope
Part 1 of 5: the prologue (title and purpose 1.1–1.12; the author's titles 1.13–2.12; the son's titles 2.13–3.7) and
houses 1–5 (3.8–7.10): 124 lines, all drafted, none lost (only small restorations: 1.19 `[s]⸢mn⸣`). The prologue
is one long sentence ("Beginning of the teaching … made by … for his son … – he says:"); the houses teach listening
and storing the words (1), protecting the weak and helping the drowning enemy (2), restraint before the "hot-mouthed"
(3), the two trees – the hot man and the truly silent (4), the temple's share and "do not say: today is like
tomorrow" (5). Older witnesses used: tLouvre E 17173 (2.15–18), oCairo SR 1840 (3.11–4.10), tMoscow I.1.d.324
(6.10–7.1).

### Sources consulted
The base (AED-TEI, TLA 2018, ed. Dils) through `egypt_tools.py data AM … --wit`; the TLA German (`tr`), read after
drafting each section; Lange 1925 (OCR, chapters 1–5, read for the cruxes 3.14, 4.8–4.11, 6.2–6.4, 6.19, 7.2–7.6);
Lichtheim and the usual readings from memory only, never quoted (Shupak's Hebrew not consulted). The format model:
the dossier's `annotated-MK.rtl.md`.

### Decisions
- **Plene, unvocalized `>` lines.** (My first save of the prologue was vocalized – the ★ error; all 45 lines were
  rewritten plene before anything else was drafted; the formula check of 2.7 caught it.)
- **sbꜣ.yt = `מוּסָר`** with the note at 1.1 (both "teaching" and "discipline"); 1.1 = the renderings' test line.
- **Two "return" verbs kept apart:** ꜥn (1.6, 4.11, 5.17) = `הֵשִׁיב` (it pairs with Prov 22:21 `לְהָשִׁיב` and lets
  5.17 "the god will know how to answer him" answer 4.11 "do not answer him yourself"); ḫsf (1.5) = `הֶחֱזִיר`
  (`תְּשׁוּבָה`) – the dossier's `להדוף` (MK E135, "ward off") is the same lemma in its other sense.
- **wḏꜣ** "be sound" / noun "well-being" = `שָׁלֵם` / `שָׁלוֹם` (1.2, 1.8, 4.2, 7.10); swḏꜣ (1.8) = `הֶחֱזִיק שָׁלֵם`
  (to keep the root); wḏꜣ "storehouse" = `אוֹצָר` (4.1; the pun noted). ḥr-tp tꜣ = `עַל פְּנֵי הָאָרֶץ` (1.8 and the
  refrain).
- **ḫꜣꜥ** "leave, abandon, throw" = `עָזַב` in all four lines (4.12 the bank abandons him, 5.4 leave him in the god's
  arms – cf. Gen 39:6 `וַיַּעֲזֹב … בְּיַד`, 5.16 `עֲזֹב אוֹתוֹ לְנַפְשׁוֹ`, 6.3 `עֲזִיבַת עֲנָפָיו`). Rejected:
  `הִשְׁלִיךְ` (fits 6.3 and Ps 55:23, but not 5.16), `הִנִּיחַ` (ambiguous "place").
- **jmm** (imperative of rḏj) = `תֵּן` (3.9, 3.10, 3.13, 5.3); rḏj "put" = `שָׂם` (3.11, 6.7); causative rḏj = a
  Hebrew causative (1.9 `לְהוֹרִיד`).
- **jri̯ ḥmw** "steer" = `הִטָּה מָשׁוֹט` (1.10, 5.1); jri̯ "serve as" = `הָיָה לְ־` (3.14, 3.16); jri̯ hꜣw "spend
  time" = `בִּלָּה עֵת` (3.17); otherwise jri̯ = `עָשָׂה`.
- **hꜣw** "time, lifetime" = `עֵת` (3.17 = 5.18; cf. Ps 31:16 `עִתֹּתָי`). Rejected `יָמֶיךָ` (would collide with hrw
  "day").
- **kꜣrj** = `מִקְדָּשׁ` (as the dossier's MK E134); **ḥw.t-nṯr** = `בֵּית הָאֵל` (literal, like ḥw.t = `בַּיִת`;
  never `בֵּית־אֵל`).
- **nfr.y** (poetic "grain", from nfr) = `בָּר` (vocalized; Joseph's grain word, Gen 41:35, 49 [equivalent]); jt
  keeps `תְּבוּאָה` / `שְׂעוֹרָה`.
- **jmj-rʾ** = `הַמְּמֻנֶּה עַל`; sꜣtꜣ = `קַרְקָעוֹת`; mꜣwj "new land" = `(קַרְקַע) חֲדָשָׁה` (1.17); dnw.yt =
  `מִרְשָׁם`; mdnw = `רְשִׁימַת מַס`; sꜣḥ = `אֲחֻזָּה`; wꜣḥ.y = `יְבוּל`; šmw (harvest) = `קָצִיר`; sšꜣ "skilled" =
  `בָּקִי` (as the renderings' §8 row for 27.16); jꜣw.t "office" = `מִשְׂרָה`.
- **smḥr** "courtier" = `רֵעַ (הַמֶּלֶךְ)` – "the king" in ( ); 1 Kgs 4:5 `רֵעֶה הַמֶּלֶךְ` [equivalent]. (The renderings'
  §8 left this to the translator for 27.17: I propose this form there too.)
- **nb** "lord" = `אָדוֹן` (1.16, 6.10), nb "owner of" = `בַּעַל` (2.9, 2.10): split by sense.
- **nḏs** in 2.14 "the least" = `הַצָּעִיר` (the renderings' `אִישׁ פָּשׁוּט` is for the noun "commoner"): split by sense.
- **mḥ** "fill" = `מִלֵּא` (5.5), but the idiom mḥ tw n "grasp" (7.9) = `הֵאָחֵז` (split by sense, noted).
- **The storm words:** ḏꜥ = `סְעָרָה` (3.15, 5.14), pḫpḫ = `סוּפָה` (4.15), qrjw = `רַעַם` (4.16); fire: ḫ.t = `אֵשׁ`
  (5.14), stꜣ = `לֶהָבָה` (6.6).
- **mḥy.t** "north wind" = `הַצָּפוֹן` (Song 4:16): `רוּחַ` is gated for ṯꜣw.
- **tꜣ-rʾ** "hot-mouthed" = `לוֹהֵט־הַפֶּה` (5.10): a lemma of its own, kept apart from šmm `הַחַם` (`חַם־הַפֶּה` is
  also blocked by the `חם` gate).
- **dby** "hippopotamus" = `סוּסֵי־הַנָּהָר` (7.3): `סוּס־הַיְאוֹר` is blocked by the `יאור` gate (jtrw only) – right
  by the gate's logic; Job 40:15 `בְהֵמוֹת` in the apparatus.
- **Semitic loanwords in Egyptian, rendered by their Hebrew cognate:** ꜥšq "extort" = `עָשַׁק` (6.14, [cognate] Lev
  19:13), mkmr.t "fish-net" = `מִכְמוֹרֶת` (7.6, [cognate] Isa 19:8; also the Akkadian corpora's *kamāru*).
- **The refrains (to be fixed in renderings §7):** 3.17 = 5.18 (= 17.15): `אם תבלה את עתך ואֵלֶּה בלבך,`;
  4.2 = 7.10: `יהיה גופך שלם על פני הארץ.`; the two trees 6.4 `קצו מובא אל מגרש־העצים;` ~ 6.12
  `קצו מובא במטע.` (the same except the place: Egyptian *n mꜥḫrmꜥ* / *m mnw*); 6.2 `הוא כעץ הצומח בפנים:` ~ 6.8
  `הוא כעץ הצומח בפרדס:`; 5.8 `להתאפק לפני הדיבור.` ~ 5.13 `יְשַׁן לפני הדיבור.` (the shared half `לפני הדיבור`).
- **jr** (topicalizer) = `הִנֵּה` (6.1, 7.7); `אֲשֶׁר לְ־הַחַם` was rejected because the contracted `לַחַם` reads "bread".
- **Cross-language collisions not avoided:** the Akkadian harmonization (`עָבַר` only for *ebēru*, `חָלַף` for *etēqu*,
  `עָזַב` for *ezēbu*) binds Akkadian words; for Egyptian words, which have no cognate there, I used the natural
  Hebrew (`עָבַר` 7.1 for snj "pass", `נַעֲבִיר` 5.1 for ḏꜣj "ferry", `עָזַב` for ḫꜣꜥ). The coordinator may rule
  otherwise.

### Open decisions for the user
- 4.10 bgꜣ: "be slack" (TLA, followed: `אל *תיחלש*? מול הפגיעה בך`) or "cry out" (Lange: "do not shout at him who hurt
  you"). 4.8–4.11 as prohibitions (TLA, oCairo `m-ḏi̯`) or as a conditional (Lange "when you are sent…").
- 2.12 / 2.8 "true of voice": of the father, or of Amenemope himself (does it mean he was dead when the text was
  written?). Left open in the notes.

### Progress log
- Drafted in five saves (prologue; houses 1–2; houses 3–5), each followed by `fill` + `verify AM` (0 problems).
- Gate hits during drafting: 2.7 (formula, the vocalized draft – fixed by rewriting plene); 5.5 `בלחם` "with bread"
  caught by the `חם` gate – exempted with the tool's own `[היתר שער: בלחם …]` marker (a gate bug: the gate allows up to
  three prefix letters, so `בלחם`, `ולחם`, `מלחם` all trip it; the Hebrew was not bent).
- Pass (a) fidelity: every word against the parse; brackets (1.19 not bracketed: only *s* restored); negations (5.2
  `bn`, the m-jri̯ chains with `וְאַל` for mtw=k); tenses (statives 4.14, 7.1, 7.2 as perfects; Third Future 5.17,
  5.19). Changes: 4.10, 4.13, 4.14, 4.16, 6.10, 6.19 after comparing the TLA (see the תרגומים bullets).
- Pass (b) consistency: lemma → Hebrew checked for every recurring lemma (ꜥn, ḫꜣꜥ, jmm, rḏj, jb/ḥꜣ.tj, ẖ.t, md.t,
  mdwj, wḏꜣ, jnj, gmj, šmm, gr, kꜣrj, nṯr, nfr.y, wsfꜣ, sꜣj, msḥ, thꜣ); refrains byte-identical (`verify`: 0
  repeated-line differences); new strings grepped (`grep --all`): `מכמורת` = *kamāru* elsewhere (same thing), the rest
  free in this corpus.
- Pass (c) Hebrew: read the generated `translation-AM.rtl.md` aloud; fixed 3.6 (`וּלְתֶפְנוּת`).
- `build AM`; `check_bible_quotes.py` on the annotated file, the intro, `translation-AM.rtl.md` and the project's
  `translation.rtl.md`: 0 problems; `verify AM`: 0 problems (non-strict; 427 lines placeholder); `selftest`: 0 failures.

### The text on its own terms
- **A land official's conscience** (1.13–2.6): the author measures, registers and taxes the land, sets the boundary
  stones (1.19), registers the new islands thrown up by the Nile in the king's name (1.17–18) and calibrates the
  Udjat corn measure (1.15) – the trade whose sins (moving stones, false measures) the later houses forbid.
- **A family teaching** (2.11–3.7): father, son and mother are named with their titles; the son and mother serve Min
  and Shu and Tefnut at Akhmim – wisdom passes from father to the youngest son, and on to his children (5.19).
- **The heart in its shrine** (1.9): the calm heart "goes down into its shrine" like a god's statue in its naos; the
  hot man's heart rises (4.17–18, 5.14).
- **Words stored in the body** (3.13–3.16): the sayings rest "in the casket of your belly" (oCairo: "inside your
  belly") and become a mooring-post on the tongue in a "storm of words" – memory as a scribe's box, speech as a boat.
- **Life as a Nile voyage** (1.10, 4.12–5.2): the steering-oar, the quay, the mud, the north wind, the crocodiles; the
  evil man's boat is wrecked – and the righteous ferry him across.
- **Help the enemy, leave the judgement to the god** (4.11, 5.1–5.6, 5.16–17): do not answer him yourself; lift him,
  feed him "that he be sated and ashamed"; "the god will know how to answer him".
- **The hot man and the truly silent** (2.7, 4.17, 5.10–5.15, 6.1–6.12, 7.7–7.9): temperament as morality; silence as
  trust in the god, not muteness; the author's own title "the truly silent in This".
- **Burial as the measure of a life** (2.9–2.10, 6.4–6.12): two tombs for the author; the hot tree is floated far from
  its place and burned ("the flame is its burial"), the silent tree "ends in its own garden".
- **The world turned over** (6.18–7.6): "tomorrow has come, today has passed": the flood recedes, the crocodiles lie
  bare, the jackals feast – the silent say "great is the favour of Re" (7.8).
- **Loanwords from Semitic** (6.14 ꜥšq, 7.6 mkmr.t): New Kingdom Egyptian borrowed Canaanite words – the contact ran
  both ways.

### Key parallels
- **3.9–3.16 ↔ Prov 22:17–18** [divergence/equivalent]: give (not "incline") your ears; heart; "in your belly"
  (`בְּבִטְנֶךָ` – and oCairo's older reading "inside your belly" is closer than the papyrus's "casket of your belly");
  the tongue / mooring-post against `יִכֹּנוּ יַחְדָּו עַל-שְׂפָתֶיךָ`; "useful" against `נָעִים`.
- **1.5–1.6 ↔ Prov 22:21** [equivalent]: `לְהָשִׁיב אֲמָרִים … לְשֹׁלְחֶיךָ` folds the Egyptian couplet into one colon.
- **4.4–4.5 ↔ Prov 22:22** [equivalent]: `אַל-תִּגְזָל-דָּל` – the same verb (ḥwrꜥ = `גָּזַל`), jꜣd "wretched" against
  `דָּל`.
- **4.1–4.2, 7.9–7.10 ↔ Prov 4:22, 8:35** [equivalent]: the words are life to those who "find" them, and health to the
  body.
- **5.3–5.6, 4.11, 5.17 ↔ Prov 25:21–22, 20:22, 22:23** [equivalent]: bread for the enemy, shame / coals; leave
  requital to the god.
- **6.1–6.12 ↔ Ps 1:3–4; Jer 17:5–8; Song 2:3** [equivalent / divergence]: the two trees; the good tree's sweet fruit
  and pleasant shade (Song 2:3 has the same pair); Scripture's tree is "planted by water", Amenemope's "grows in an
  orchard", and the bad tree is not a desert shrub but a tree grown indoors, floated off and burned.
- **6.18–7.1 ↔ Prov 27:1; Isa 56:12** [equivalent]: "do not say: today is like tomorrow" – Isaiah's drunkards say it.
- **7.2–7.6 ↔ Isa 19:5–8** [equivalent; 7.6 cognate]: the Nile drying up, the fishermen's `מִכְמֹרֶת`.
- **6.14 ↔ Lev 19:13** [cognate]: ꜥšq is Semitic `עָשַׁק`.

### Lines shared with other texts
- Within AM: 3.17 = 5.18 (and later 17.15), 4.2 = 7.10 – byte-identical Hebrew; 5.19 = 17.16 (later); 4.19 ~ 12.13
  (later: `יָעַח מעמיד את פשעו` – "sꜥḥꜥ btꜣ=f" = `העמיד את פשעו`).
- With the dossier's Merikare: ṯs `הקים` (5.3 = MK E135), kꜣrj `מקדש` (MK E134), ꜥ `זרוע`, nṯr `האל`, ꜣpd `עופות`, rm
  `דגים` – followed; ḫsf (MK E135 `להדוף`) split by sense (1.5 `החזיר`); zꜣw-ꜥ `חלש־הזרוע` (4.5) – MK E135 has
  `החלש` for *sꜣ-ꜥ* (the renderings ask the MK translator to align).

### Proposals for the shared renderings
| Egyptian | Hebrew | Reason / lines |
|---|---|---|
| ꜥn "return (a report, an answer); turn to" | `הֵשִׁיב` | 1.6, 4.11, 5.17; Prov 22:21 |
| ḫsf (with wšb.t) "reply" | `הֶחֱזִיר (תְּשׁוּבָה)`; "ward off" `הָדַף` | 1.5; MK E135 |
| wšb / wšb.t | `תְּשׁוּבָה` | 1.5, 4.11 (as the brief) |
| wḏꜣ (verb) / (noun) / swḏꜣ | `שָׁלֵם` / `שָׁלוֹם` / `הֶחֱזִיק שָׁלֵם` | 1.2, 1.8, 4.2, 7.10 |
| wḏꜣ "storehouse" | `אוֹצָר` | 4.1 (as §4.3) |
| ḫꜣꜥ "leave, abandon" | `עָזַב` | 4.12, 5.4, 5.16, 6.3 |
| zꜣw tw r "beware of" | `הִשָּׁמֵר לְךָ מִ־` | 4.4 (recurs: 13.x, 16.x …) |
| jmm "give!" / rḏj "put" | `תֵּן` / `שָׂם` | 3.9–3.13, 5.3 / 3.11, 6.7 |
| hꜣw "time, lifetime" | `עֵת` | 3.17 = 5.18 = 17.15 |
| kꜣrj / ḥw.t-nṯr | `מִקְדָּשׁ` / `בֵּית הָאֵל` | 1.9, 2.18, 3.3 / 6.1, 6.14, 7.7 |
| jr (topicalizer) | `הִנֵּה` | 6.1, 7.7 (the renderings' §3a "אֲשֶׁר לְ־" fails before `הַחַם`) |
| ḏꜥ / pḫpḫ / qrjw | `סְעָרָה` / `סוּפָה` / `רַעַם` | 3.15, 5.14 / 4.15 / 4.16 |
| ḫ.t / stꜣ (fire) | `אֵשׁ` / `לֶהָבָה` | 5.14 / 6.6 |
| wsfꜣ | `הִתְאַפֵּק` | 5.8, 5.12 |
| mdwj (verb) | `דִּבֵּר` (`הַדִּבּוּר`) | 5.8, 5.13 (md.t `דָּבָר`) |
| thꜣ (verb / noun) | `פָּגַע` / `פּוֹגֵעַ` | 4.10, 5.12 |
| tꜣ-rʾ | `לוֹהֵט־הַפֶּה` | 5.10 |
| ḥtp "rest" | `נָח` | 3.13 (as §4.4) |
| jnj "bring, fetch" | `הֵבִיא` (passive `מוּבָא`) | 4.13, 6.4, 6.12 |
| gmj | `מָצָא` | 3.18, 4.1, 6.15, 7.9 |
| sꜣj "be sated" | `שָׂבַע` | 5.6, 7.5 |
| ṯm "be ashamed" | `נִכְלַם` | 5.6 |
| jꜣw "old man" / ꜥꜣ "elder, great" / wr "great" | `זָקֵן` / `גָּדוֹל` / `גָּדוֹל` | 4.6 / 4.7 / 1.3, 1.18, 7.8 (ꜥꜣ and wr share `גָּדוֹל`, as §6.6 already has) |
| nb "lord" / nb "owner of" | `אָדוֹן` / `בַּעַל` | 1.16, 6.10 / 2.9–10 |
| smḥr "courtier" | `רֵעַ (הַמֶּלֶךְ)` | 1.4; for 27.17 too |
| sšꜣ "skilled" / jꜣw.t "office" | `בָּקִי` / `מִשְׂרָה` | 1.13 (27.16) |
| jmj-rʾ X | `הַמְּמֻנֶּה עַל X` | 1.13, 1.15, 2.5 |
| nfr.y (grain) | `בָּר` ★ (vocalized) | 1.15, 2.5, 2.6 |
| ḥzw.t "favour" | `חֵן` | 7.8 |
| msḥ / dby / wnš | `תִּמְסָח` / `סוּס־הַנָּהָר` / `תַּן` (vocalized `תַּנִּים`) | 4.16, 7.3 / 7.3 / 7.5 |
| ꜥšq / mkmr.t (Semitic loans) | `עָשַׁק` / `מִכְמוֹרֶת` [cognate] | 6.14 / 7.6 |
| mḥy.t "north wind" | `הַצָּפוֹן` | 4.14 (`רוּחַ` gated) |
| Jꜥḥ (the moon god) | `יָעַח` ★ (name, vocalized) | 4.19 |
| Mnw-kꜣ-mw.t=f / Wn-nfr / Tnj / Ṯꜣ-wr / ꜣbḏw / Snw.t | `מִין־כָּמוּתֶף` / `וֶנֶּפֶר` / `תְּנִי` / `צָ׳א־וֶר` / `אַבְּגֶ׳ו` / `סֶנוּת` | as §3; first-occurrence notes in AM |
| **Fixed lines (§7)** | 3.17 = 5.18 = 17.15 `אם תבלה את עתך ואֵלֶּה בלבך,`; 4.2 = 7.10 `יהיה גופך שלם על פני הארץ.`; 5.19 = 17.16 `ילדיך יִרְאוּ אותן.` | |
| **Gate fix** | the `חם` gate should not take `ל` as the last prefix letter before `חם` (or should list `לחם`, `בלחם`, `ולחם`, `מלחם`, `כלחם` as non-hits) | 5.5 `בלחם` |

### Lessons for the guidelines
- The ★ plene rule needs a mechanical check: the first save was vocalized again, and only the formula check of a
  single line (2.7, `האמתי` vs `האמיתי`) exposed it. A verify warning for lines with more than ~30% vocalized words
  would catch it at once.
- A gate on a two-letter root with up to three prefix letters will hit common words formed with a preposition (`בלחם`):
  test every short gate on `ל`/`ב` + the root's homographs.

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)
