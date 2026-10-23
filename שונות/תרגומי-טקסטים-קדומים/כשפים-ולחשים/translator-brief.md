# Brief for the translators of Maqlû (`כשפים-ולחשים/1-מקלו/`)

You translate **one tablet of Maqlû** (or the part of a tablet the coordinator names) into Hebrew, as one of a chain of
translators who work **strictly one at a time** (guidelines §5.1: quotas apply in every session). The coordinator gives
you the tablet and its key cases in a short prompt; this file holds everything that is the same for every tablet. The
user is offline: never ask questions, never wait for confirmation. Decide sensibly, record each decision (with the
alternatives) in your section of `project.md`, and finish the work.

Paths below are relative to the corpus folder `שונות/תרגומי-טקסטים-קדומים/כשפים-ולחשים/` (the coordinator gives its
absolute path). Use absolute paths in tool calls; keep every command short-running; run Python with `python3 -I -B`.

## 1. Read first (all binding)
1. `../translation-guidelines.md` – **the whole file** (read it in parts): §1 (the two purposes, and the global aim), §5
   (workflow and the lessons of earlier corpora, the ★ rules above all), §6 (principles, echo control), §7 (formats).
2. `corpus.md`, then **`renderings.md` (binding: the names, the witchcraft lexicon, the exorcist and the rite, the
   materials, fire and burning, the formulas, §7 grammar, §8 reserved words and traps, §9 the fixed lines, §9a, §10)**,
   then `1-מקלו/project.md` (and the sections of the translators before you).
3. The format model: the first 120 lines of `../ספרות-החכמה-והצדיק-הסובל/3-התפילה-הגדולה-לשמש/annotated-SH.rtl.md`
   (Akkadian SB, header and apparatus density), and the annotated files of the earlier Maqlû tablets.
4. The base text: `../sources/eBL/Maqlu-<KEY>/reading-edition.md` – per line N (the normalization), T (Abusch's
   English), notes, and the manuscripts' transliterations (the ATF block: use it for the brackets).

## 2. Before drafting
- `python3 -I -B maqlu_tools.py pars <KEY>`: every line of your tablet that repeats (identically or nearly) a line
  elsewhere in Maqlû, or that §9 fixes, **with the Hebrew already given**. That Hebrew binds where the Akkadian is
  identical; change exactly what the Akkadian changes; note `[מקבילה: <KEY> <line>]` in the apparatus. A deviation from
  a §9 line needs `[סטייה מן הקבוע: <reason>]` in the entry (the verifier checks it).
- `python3 -I -B maqlu_tools.py lem <KEY> <FROM> [<TO>]`: each word with its lemma candidates from ORACC cmawro (eBL
  lemmatized only Tablet I). It is a lookup by form, not a parse: **parse every form yourself** (stem, tense, person,
  ventive, subjunctive, *-ma*).
- `python3 -I -B maqlu_tools.py norm '<Akkadian regex>'`: how a word was rendered so far in Maqlû;
  `python3 -I -B ../קולות-היום-יום/kol_tools.py lookup '<Akkadian regex>'`: in every earlier corpus;
  `python3 -I -B maqlu_tools.py grep '<Hebrew regex>' --all`: where a Hebrew string is already used. **Check every new
  Hebrew word for a recurring lemma against all three before you fix it** (★).
- Read the whole tablet once in the reading edition and decide the section headings: one `## ` heading per incantation
  (a Hebrew title from its content or first words, with the line range), the rubric lines inside it.

## 3. Drafting, line by line (guidelines §5 step 5)
For **every** eBL label of your range, in eBL's order (including `36a`, `144a`, `A+12`, `78'-79'`, and lines that are
only `...`), write one entry:

```markdown
### 19
`@`
> היא תמות, ואני אחיה.
- **פירוק:** `šī` – כינוי 3 נקבה יחיד ("היא"); `limūt-ma` – *mâtu* G פרקטיב 3 נ"י + -ma ("תמות"); `anāku` – "אני"; `lubluṭ` – *balāṭu* G פרקטיב 1 יחיד ("אחיה").
- **תרגומים:** eBL (Abusch): "May she die, but I live."
- **הקבלה:** [divergence] `מְכַשֵּׁפָה לֹא תְחַיֶּה` (שמות כב:יז) – …
- **הערות:** …
```
(An illustration of the format, not binding Hebrew beyond §9.)

- ★ **Write the normalization as `` `@` `` and run `python3 -I -B maqlu_tools.py fill 1-מקלו/annotated-<KEY>.rtl.md`**:
  the tool copies eBL's N exactly. Never retype it.
- ★ `> ` is exactly one line of Hebrew, **unvocalized and plene (כתיב מלא) from the first draft**; vocalize only names at
  their first occurrence in the file, ambiguous words, archaic forms, and the always-vocalized words of `renderings.md`
  §8 (the verifier checks them). A vocalized word must strip to the plene string you would otherwise write (`נוּסַּח`,
  not `נֻסַּח`, if you vocalize it at all).
- **פירוק:** every word: lemma, stem, tense/aspect, person, ventive, subjunctive, *-ma*. **Do not trust a lemma** (eBL's
  or cmawro's): say so when you depart.
- **Brackets** follow the manuscripts: a word is in `[ ]` when its root, or most of it, is broken in all manuscripts of
  the line (check the ATF block, not only N's brackets). `[…]` for a lost stretch; never fill a gap silently. A line that
  is only `...` gets `> …`.
- **תרגומים:** Abusch's T, quoted briefly, **after** you formed your own reading; record every disagreement and why (★:
  the rank-3 translation is the main source of false echoes; check every negation, stem, precative and "may"
  against the normalization).
- **הקבלה:** the echo check of guidelines §6.4 on every line with a biblical contact: the tag, the verse in the repository's
  format, the biblical words quoted **vocalized, exactly as in `../../../תנך-מנוקד/`**, written `` `…` (ספר פרק:פסוק) ``.
  ★ **Print every verse before quoting it** (`python3 -I ../tools/check_bible_quotes.py --show שמות "כב יז"`; Psalms
  and Proverbs use a hyphen-minus for maqaf: keep it). The texts to keep in view: Exod 22:17; Deut 18:10–11; Lev
  19:26, 31; 20:6, 27; 1 Sam 28; 2 Kgs 9:22, 30–37; 21:6; Isa 47:9–15; Mic 5:11; Nah 3:4; Mal 3:5; Ezek 13:17–23; Lev 14
  and 16; Num 5; Deut 21:1–9; Ps 7:16–17, 35:7–8, 58, 91:5–6, 109:17–19; Prov 26:27; Job 18:15; Gen 19:24, 28; Isa 34:14;
  19:3. Never force one: most Maqlû lines have none, and that is fine.
- **הערות:** the text **on its own terms** (guidelines §1, §7.2), where an ancient hearer heard more than the words: who
  each god, demon and practitioner is; what the rite does (which figurine, what it is made of, why it is burned, buried,
  given to dogs); the legal frame (the night court, the plaintiff and the defendant, the verdict); the body and its
  parts as the witch's targets; the wordplay (*rittum-ma rittu*, the *-ki* addresses, the paired male/female lists);
  the relation to the Ritual Tablet (which act goes with this incantation). Also cruxes, alternatives, the
  first-occurrence notes `renderings.md` requires.
- **הערת שוליים:** (optional) one sentence for the clean translation, only for the major cruxes and the key biblical
  parallels; it becomes a numbered footnote.

**Save as you go** (guidelines §5.1): write each incantation's entries to the file as soon as they are drafted (not the
whole tablet at the end), and run `fill` and `verify <KEY>` after each one. A quota stop then loses at most one
incantation. If you are stopped, the coordinator resumes you or a successor from what is on disk.

## 4. The rules most often broken (read again before each incantation)
- `renderings.md` §8: the reserved and gated strings, checked by `maqlu_tools.py verify` (`אלוהים`, `שאול`, `אוב`,
  `ידעוני`, `דמות`, `עולם` never; כשף, `קסם`, `לחש`, `אשף`, `צלם`, `טיט`, `גפרית`, שרף, `טוב`, `עפר`, `תמורה`, the net
  words … only for their source word). If the verifier blocks a word that is right, tell the coordinator; never bend
  the Hebrew to pass and never edit the tool's lists.
- **One Hebrew word per Akkadian lemma** (★): the sorcery nouns (*ipšu*, *epšētu*, *kišpū*, *ruḫû*, *rusû*, *upšāšû*),
  the verbs of binding and releasing, the fire verbs (*qamû* `בער`, *qalû* `קלה`, *šarāpu* `שרף`, *ḫamāṭu* `להט`), the
  practitioners. If you need a new one, grep first.
- The persons and genders of address (`renderings.md` §0): the witch is "you" fem. sg. (`־ךְ`, `־ייך`), the witches
  "you" masc. pl. (`־כם`) or fem. pl. (`־כן`); keep them as the Akkadian has them.
- Present-future of the speaker's acts = participle with the pronoun (`קולה אני`); perfect = past; precative = jussive
  (`יבער`, `יגזור`); no vav-consecutive.
- The formulas (§6) and the fixed lines (§9) character for character; the refrains inside your tablet identical.
- **Biblical vocabulary only when it is the natural word or the cognate, and then tagged.** Maqlû invites Psalms'
  curses and Deuteronomy's lists: a borrowed phrase that the Akkadian does not justify is a false echo; an avoided
  cognate (`מכשפה`, `כשפים`, `גפרית`, `קיטור`, `אשף`, `צלם`) is a hidden echo. Both are errors.
- Do not add what is not in the Akkadian; additions for sense go in `( )`.

## 5. The clean translation
Write `1-מקלו/translation--intro-<KEY>.rtl.md`: `# <the tablet's title in Hebrew>` and a short Hebrew introduction
(what happens in this tablet and where it stands in the night-and-morning ceremony; the manuscripts and the edition in a
sentence; for Tablet I, also the signs: `[ ]`, `[…]`, `…`, `( )`, `?`, *italics*, `⟨ ⟩`). Never open a paragraph with
bold text (the builder reads `**label**` lines as numbered lines). Then run `python3 -I -B maqlu_tools.py build`: it
generates `translation-<KEY>.rtl.md` and the combined `translation.rtl.md` from your intro and the annotated `## `
headings, `>` lines and `הערת שוליים` bullets, and verifies. Never edit a generated file.

## 6. Three review passes (guidelines §5 step 6), each a separate read-through of the whole tablet
- **(a) fidelity:** every content word accounted for; nothing added outside `( )`; brackets checked against the ATF.
- **(b) consistency:** formulas, fixed and repeated lines identical (`verify` lists every difference: justify it in the
  apparatus or fix it); names; `renderings.md` respected; every new Hebrew string grepped against the earlier tablets.
- **(c) Hebrew:** read the generated `translation-<KEY>.rtl.md` aloud; register even; no unintended biblical calques.
- Then `python3 -I ../tools/check_bible_quotes.py 1-מקלו/annotated-<KEY>.rtl.md 1-מקלו/translation--intro-<KEY>.rtl.md
  1-מקלו/translation-<KEY>.rtl.md` and fix every mismatch; `python3 -I -B maqlu_tools.py verify <KEY> --strict` must
  report **no problems**.

## 7. Your section in `1-מקלו/project.md`
Insert it **above** the line `## Parallels index` (do not rewrite earlier sections): `## Tablet <KEY>` with, in English
(Bible quotations in Hebrew, vocalized):
- `### Scope` (labels, preservation, manuscripts in a sentence);
- `### Sources consulted`;
- `### Decisions` (renderings you fixed, the rejected alternatives and the reason);
- `### Open decisions for the user`;
- `### Progress log` (drafting, the three passes with what each changed, the verify and quote checks);
- `### The text on its own terms`: 5–15 bullets – what this tablet shows of the ancient mind, each with its lines;
- `### Key parallels`: the 3–10 strongest Bible contacts in a sentence each (the full table is generated from your
  **הקבלה** bullets by `build_parallels_index.py`: write those bullets carefully, a tag before each contact);
- `### Lines shared with other tablets` (what you copied, what differs and why);
- `### Proposals for the shared renderings` (new recurring words, formulas, names – with Hebrew and reason);
- `### Lessons for the guidelines` (only what generalizes).

## 8. Limits
- Edit only your annotated file, your `translation--intro-<KEY>.rtl.md`, the generated files (through `build`) and your
  section of `project.md`. Do not edit `renderings.md`, other tablets' files, other corpora, the guidelines, the tools or
  anything in `../sources/` (if a tool has a bug, say so in your final message; a minimal fix is allowed only if it
  blocks you, and must be reported). Do not commit. **Do not start sub-agents.**
- If you cannot finish, finish the entries you start, leave `<!-- טרם תורגם: <first>–<last> -->` where the rest
  belongs, build the clean translation for what is done, and say exactly where you stopped.
- Your final message to the coordinator (short): labels done, the main decisions, the strongest parallels and the
  strongest "ancient mind" findings, open decisions, problems.
