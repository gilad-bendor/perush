# Translator brief: Hittite (the Laws, the Instructions for Temple Personnel, the elimination rituals)

Written 2026-10-24 by the Round 4 run 6 coordinator, before the first Hittite line. **Binding for every translator of a
Hittite text** (keys HL1, HL2, HLPT, IN, AS, UH, PU, AM, AM2 of `tools/hittite_tools.py`), on top of
`translation-guidelines.md` (read it in full).

## 0. Read first
1. `translation-guidelines.md` (all of it; §1 both purposes, §5.2 the ★ rules, §6, §7.2 the entry format);
2. `חוקים-ובריתות/renderings.md` **§5–§7 and §H2–§H9** (the law terms, the Hittite tables); for the rituals also
   `טקסי-שילוח-וטיהור/renderings.md` (§R1, §H2);
3. your project's `project.md` (scope, base, labels, open decisions, the Proposals section you will fill);
4. this brief.
The existing corpora's renderings are binding for shared names, formulas and terms (search before fixing a word, ★ below).

## 1. The ★ rules (guidelines §5.2; every one is binding)
- ★ **Draft unvocalized, in plene spelling, from the very first line**; vocalize only names (first occurrence per file;
  ★ names always), ambiguous words (the traps of §H6: `אֵל`, `אֵלִים`, `אָמָה`, `חַתִּי` …) and archaic forms. A regex that
  strips niqqud must keep the maqaf: `[֑-ֽֿ-ׇ]`.
- ★ **Write the transliteration as `` `@` ``** under each `### <label>` and run `python3 -I -B tools/hittite_tools.py fill
  <file>`: never retype the base line.
- ★ **Print every Bible verse before quoting it** (`python3 -I tools/check_bible_quotes.py --show <book> "<ch> <v>"`),
  never quote from memory, notes included; write `` `…` (Book ch:v) `` with the book named, whole words only; then run
  `check_bible_quotes.py` on your file.
- ★ **Reserved words**: the Hebrew of every key Bible comparison is reserved for its real counterpart only (§H3: never;
  §H4: only with its Hittite word). `verify` checks them; if a line truly needs a gated word whose counterpart is not
  licensed, propose a licence in Proposals rather than bending the Hebrew. Grep reserved *letter strings*, not only words.
- ★ **Fix the Hebrew of every formula and refrain before drafting it** (§H5: *takku*, *karū … kinun=a*, *parna=šše=a
  šuwāyezzi*, *n=aš aki*, *QĀSSU waštai*, *pāi*, *UMMA*; the rituals' incantation refrains: find them with `data` → the
  "identical" / "similar" lines). Identical Hittite gets identical Hebrew; command and execution in the same words and
  order.
- ★ **Grep the `>` lines of all earlier files before fixing any new Hebrew word**: `hittite_tools.py lemma '<regex>'`
  (how a Hittite word was rendered so far), `hittite_tools.py grep '<Hebrew>' --all` (where a Hebrew word is already used
  in any corpus, and for what), `python3 -I tools/harmonize_survey.py heb '<Hebrew>'`. One Hittite word = one Hebrew word
  through all the Hittite texts; one Hebrew word ≠ two source words.
- ★ **Re-check the pre-draft renderings against your drafted lines before the hand-off**: list every row you changed in
  Proposals.
- ★ **The rank-3 translation is the main source of false echoes**; read the transliteration (and the CHiL / TLHdig
  glosses, which are machine-assisted and often unselected) before believing any brief, the coordinator's included.
  Briefs say "look for", never "translate as". Consult the HPM editor's translation (`hittite_tools.py tr KEY FROM TO`:
  German, Italian or English) **only after** forming your own reading of the line, and record every disagreement.
- ★ **Save as you go**: write each drafted section to disk at once (the quota can stop you at any moment).

## 2. Grammar mapping (Hittite → Hebrew)
**Verbs.**
- *Present-future* (*-zi*, *-mi*, *-anzi*):
  - in a law's protasis and apodosis, and in the Instructions' commands: Hebrew **future** (`אִם מִישֶׁהוּ יַהֲרֹג …
    יִתֵּן`; `וְאַתֶּם תַּעֲשׂוּ`);
  - in a ritual's prescriptions and narrative ("I take", "they bring", "she says"): the Hebrew **participle** (`אֲנִי
    לוֹקֵחַ`, `הֵם מְבִיאִים`, `אוֹמֶרֶת`), keeping the person (the 1st person of Ašḫella's or Ambazzi's "I" stays).
- *Preterite* (*-un*, *-š*, *-ta*, *-er*): Hebrew past.
- *Imperative* (2nd person): imperative; the *3rd-person imperative* (*-(d)du*, *-aru*, *-ndu*): jussive / wish (`יִשָּׂא`,
  `יִמָּשֵׁךְ`, `יִהְיֶה`).
- *Iterative* (*-šk-*): in the past `הָיָה + participle` (*pešker* `הָיוּ נוֹתְנִים`), in the present a participle or
  `תָּמִיד`; never `שׁוּב וָשׁוּב` (the root שוב is reserved in the Akkadian corpora).
- *Medio-passive*: נִפְעַל / פֻּעַל / reflexive, by function; *participle* (*-ant-*): adjective or passive participle
  (`מְקֻשֶּׁטֶת`); *periphrastic perfect* (*iyan ḫarzi* "has made"): Hebrew past, resultative force noted.
- *Supine / infinitive*: Hebrew infinitive (`לֶאֱכֹל`, *adanna*).

**The clause chain** (the sentence particles), one rendering per particle:
- *nu*, OH *ta* and *šu* (connectives): `וְ־` (never "and then" each time; `וְאָז` only where the sequence is the point);
- *-ma* (contrast, new topic): `וְ־`, or `וְאִלּוּ` / `אַךְ` where the contrast is real (say which in the פירוק);
- *-a* / *-ya* "and, also": `גַּם` (or `וְ־` between nouns);
- *-pat* "precisely, the same, only": `עַצְמוֹ` / `דַּוְקָא` / `בִּלְבַד` (say which);
- the local particles *-kan*, *-šan*, *-ašta*, *-apa*, *-an*: not translated (they inform the preverb and the verb);
- *-z(a)* (reflexive): a reflexive verb or `לְעַצְמוֹ`;
- *-wa(r)* (quotative): quotation marks only;
- the enclitic pronouns (*n=aš* "and he", *n=an* "and him", *n=at* "and it / they", *=šši* "to him", *=šmaš* "to them"):
  as the Hebrew needs them; never drop one silently.
- Prohibitive *lē* = `אַל` + future; *UL* / *natta* = `לֹא`; *UL kuiški* = `אַף אֶחָד … לֹא`.
- Preverbs (*arḫa* "away", *parā* "forth", *anda* "in", *šer* "above", *katta* "down", *EGIR-pa* "back"): render where they
  carry meaning (`הָלְאָה`, `הַחוּצָה`, `פְּנִימָה`; ritual corpus §R1).

**Sumerograms and Akkadograms** (guidelines §6.3): translate them by the word they write (*LUGAL* `מֶלֶךְ`, *É* `בַּיִת`,
*KÙ.BABBAR* `כֶּסֶף`); the Akkadographic prepositions *ANA* `אֶל` / `לְ־`, *IŠTU* `מִן`, *INA* `בְּ־`, *ITTI* `עִם`, *ŠA*
the construct state or `שֶׁל`, *QĀTAMMA* `כָּךְ` (`כְּמוֹ כֵן` where it means "likewise"), *UMMA* `כֹּה`. Determinatives
(`{d}`, `{m}`, `{f}`, `{URU}`, `{LÚ}`, `{GIŠ}`, `{SÍG}`, `{DUG}`, `{UZU}`) are not translated. An Akkadogram is an Akkadian
word: if it is the cognate of the Hebrew word, the tag may be [cognate] (through the Akkadogram): say so.

**Word order.** Hittite is verb-final; Hebrew is not. Change the order for grammar, not for elegance (guidelines §6.1),
and keep the order of the case's elements (victim, agent, act) where Hebrew allows. Numbers in words (`שִׁשָּׁה שְׁקָלִים
כֶּסֶף`, as LH `שליש מנה כסף`).

**Damage.** The composite's `[ ]` (restored), `⸢ ⸣` (damaged), `…` / `[…]` (lost) map to the guidelines' §6.8 marks; never
fill a gap silently; a restoration from a duplicate manuscript is the edition's restoration (CHiL / HPM composite) or the
composite's (HL2, IN: the `note` column says which manuscript).

## 3. The entry format (guidelines §7.2; read by the tools)
```markdown
## §5 – הריגת סוחר
### 15
`@`
> אם מישהו יהרוג סוחר,
- **פירוק:** `takku` – takku "if" ("אם", F1); `LÚDAM.GÀR` – DAM.GÀR "merchant", acc. ("סוחר"); `kuiški` – kuiški "anyone", nom. ("מישהו"); `kuēnzi` – kuen- "kill", pres. 3sg ("יהרוג").
- **נוסחים:** the Old Hittite version (291.1 …) / the other manuscripts: every difference that changes the meaning.
- **תרגומים:** CHiL (it.): "…" (after drafting).
- **הקבלה:** [equivalent] … `…` (Book ch:v) – …
- **הערות:** …
```
- The `>` line is drafted **unvocalized and plene** (vocalized names and traps only); the examples above in §2 are
  vocalized for reading, not as models of a drafted line.
- The `פירוק` items must keep the pattern `` `form` – lemma "gloss", morphology ("Hebrew") `` (with the Hebrew in
  `("…")`): `hittite_tools.py lexmap` builds the Hebrew ↔ lemma map from it.
- A footnote for the clean translation: `- **הערת שוליים:** …` (few: major cruxes and the key parallels).
- `## ` headings: one per § (the Laws: `## §N – <Hebrew title>`, Hoffner's numbering, with the CHiL / composite labels in
  brackets where useful; the rituals: HPM's §); they become the clean translation's section headings.
- A not-yet-drafted range: `<!-- טרם תורגם: FROM–TO -->`.
- Escapes, written in the entry, each with its reason: `[סטייה מן הנוסחה: …]`, `[היתר שם: …]`, `[היתר שער: …]`.

## 4. Echo control for a non-Semitic language
Hittite never met Israel's scribes directly (the Bible's `חִתִּים` are later Syrian heirs or a Canaanite clan). Its
overlaps with the Torah are shared legal problems and shared ritual logic, not a source: the tags are [equivalent],
[divergence] and [absent] (no [cognate] except through an Akkadogram), and the note says in words whether a historical
link is argued (Milgrom on Num 18; Wright, Janowski–Wilhelm on Lev 16; Feder on Kizzuwatna blood rites) or the parallel is
typological. The danger of this corpus is the Torah's vocabulary (renderings §7, ritual corpus intro): the gates keep it
for the real counterparts, and the apparatus, not the translation, shows the comparison.

## 5. The second purpose: the soul of the ancients
The **הערות** explain the line on its own terms: Hittite society (the free and the unfree, the *šaḫḫan* and *luzzi*
duties, the palace, the elders, the women's rights, the price of a limb), the gods as masters to be fed and served, the
logic of sending the evil back to the god who sent it, the ritual expert's voice ("I"), the colours and materials, the
humour or harshness of a case. Not every line needs a note; the ones that open the ancient mind do.

## 6. Tools (`tools/hittite_tools.py`, run with `python3 -I -B` from any folder)
`units`; `data KEY [FROM [TO]]` (the base line, its words with lemma and gloss, every manuscript, the names, formulas and
gates that apply, the other versions of the § (HL1), the repeated lines with their Hebrew); `tr KEY [FROM [TO]]` (rank 3,
after drafting); `fill FILE`; `lemma '<regex>'`; `lexmap`; `grep '<Hebrew>' [--all]`; `verify KEY [--strict]`; `build`;
`gates`; `selftest`; for the composites `comp-init` and `comp-check`. TLHdig itself: `python3 -I tools/tlh2md.py
summary|lines|words`. The Chicago Hittite Dictionary (free volumes L–N, P, Š) is consulted per word only (its terms:
no bulk extraction).

## 7. Hand-off
At the end of your part: run `verify KEY` (no errors), `check_bible_quotes.py` on your file, the three review passes
(fidelity, consistency, Hebrew; guidelines §5.6) if your part is the last of the text, and write **Proposals** in the
project's `project.md`: every new rendering you fixed (lemma → Hebrew, the lines), every pre-set row you changed (and why),
every gate you think is wrong, every crux. Then report in a few lines what you did and what is open.
