# Round 6, run 3 – the Uruk cycle (report, 2026-11-07)

## Done
Three new projects in `אגדות-מלכים/`, beside project 1 (Enmerkar and the Lord of Aratta): the four Enmerkar–Lugalbanda poems are now complete. **1,226 entries**, exactly the plan's count.

| Key | Text | ETCSL | Entries | Project / files |
|---|---|---|---|---|
| LC | Lugalbanda in the Mountain Cave | 1.8.2.1 | 509 (1–499 with 232A–B, 325A–B; B1–B7) | `5-לוגלבנדה-במערת-ההר/annotated-1.rtl.md` (1–263), `annotated-2.rtl.md` (264–499, B1–B7) |
| LZ | Lugalbanda and the Anzud Bird | 1.8.2.2 | 422 (1–417; A–F) | `6-לוגלבנדה-וציפור-האנזוד/annotated-1.rtl.md` (1–202), `annotated-2.rtl.md` (203–417, A–F) |
| ES | Enmerkar and En-suḫgir-ana | 1.8.2.4 | 295 (1–283, 52A, 54A–D; B1–B7) | `7-אנמרכר-ואנסוחגירנה/annotated.rtl.md` |

- In each project: `project.md` (the parts, the progress, key findings, open decisions with rulings, proposals, parallels indexes LC1, LC2, LZ1, LZ2, ES: 222 rows), `translation--intro.rtl.md`, `translation.rtl.md` (generated), print stubs `הדפסה/אגדות-מלכים/5-…`, `6-…`, `7-…`. The corpus's `parallels-index.md` is rebuilt (677 rows), and `corpus.md` is updated.
- **Base texts:** the OTA bulk zip of ETCSL was unreachable (its server answered 502), so the base came from the **live ETCSL web pages**. I wrote `tools/etcslhtml2md.py` and tested it on 1.8.2.3 against the committed XML conversion: all 641 lines are identical. The only difference is that the web page shows "…" where the XML has "X" for a single lost sign. The three texts were converted with ETCSL's own lemma per word (`lemmas.tsv`). ORACC Q000367 and Q000368 provide lemma + morph, extracted from the epsd2-literary zip. ES has no ORACC text (Q000370 is catalogued only), so its verbs were checked against the epsd2-literary form index.
- **Tools:** `kings_tools.py` has new keys LC, LZ and ES:
  - `data` aligns the ORACC lines by content and prints the near-identical lines of all four poems with their Hebrew;
  - `skel` and a cycle-wide `pars`;
  - RESERVED_CY (reserved words licensed by the transliteration plus the ETCSL and ORACC lemmas) and FORMULAS_CY (the prayer, the tears, the refrain, the provisions, the running asses, the Anzud refrains).

  `build_parallels_index.py` now reads the three new projects.
- **Renderings:** `renderings.md` §12 was fixed before the first line; §12.6.1–§12.6.5 record what each part fixed.
- **Process:** three translators in sequence, one agent at a time (range A):
  - T-LC: two parts;
  - T-LZ: two parts;
  - T-ES: one part.

  Each translator made three review passes, and I merged after every part. Then one independent fidelity reviewer went over all 1,226 entries and fixed 17 `>` lines and 2 apparatus bullets:
  - 9 brackets;
  - 4 additions not marked as added;
  - 1 omitted negation (LZ 120);
  - 1 person/tense (LC 484).

  The log is in `reports/round-6/run-3--fidelity-log.md`.

## Verification
- `kings_tools.py verify KEY --strict` passes for all seven keys of the corpus: LC 509, LZ 422, ES 295, EA 641, SB 49, ET 585, CL 345 entries. The strict check covers:
  - coverage and the transliteration against the base text;
  - the reserved and gated words;
  - the name traps;
  - the formulas, including EA's formulas in the new texts;
  - `translation.rtl.md` against the `>` lines.
- `tools/check_bible_quotes.py` on every file of the corpus (`אגדות-מלכים/*.md` and all project files) and on the edited shared files: **0 problems**.
- `build_parallels_index.py`: 677 rows.

## Key findings
**The ancient mind.**
- **Lugalbanda in the Mountain Cave.** The youngest of eight heroes falls ill on the march. His companions leave him in a cave with food, drink, incense and weapons, laid out as for the dead (*ki-sig₁₀*), and march on weeping. Alone, he prays in one fixed formula to the sun at dusk, to the evening star (Inana) and to the moon, each at its own hour, "as to his own father". Each god "takes his tears".
  - The sun hymn makes the sun the poor man's garment and "the third of those who walk as two".
  - He eats the plants of life and drinks the water of life, runs like Šakkan's wild asses, makes fire from flint, and bakes bread on seven coals without knowing an oven.
  - He captures a wild bull and goats. Zangara, the god of dreams, appears "like a bull" and commands an offering; the execution repeats the command word for word.
  - At dawn, by the pit, An, Enlil, Enki and Ninḫursaĝa eat the best of the meal.
  - The end is a broken hymn to the night beings, "the fourteen torches of battle".
  - The poem opens like GEN, at the time "when heaven was parted from earth".
- **Lugalbanda and the Anzud Bird.** Hospitality is a strategy. Lugalbanda adorns the monster-bird's nest and its chick, and the returning Anzud sees exactly what Lugalbanda did (58–60 = 94–96).
  - Anzud offers wealth, archery, armour and abundance. "Lugalbanda, who loves the seed, does not put out his hand" (four times). He asks only for speed.
  - The grant repeats the request line for line in the second person. Anzud asks for secrecy: "fair fortune may hide foul".
  - The mountains carry the netherworld's epithet: "where no man goes alone, whence no man returns". Six times no one volunteers; the lone volunteer swears by heaven and earth.
  - Enmerkar's message to Inana is a lover's complaint. He calls himself abandoned "like an Anzud chick", an irony only the hearer can see. The delivery repeats it exactly.
  - Inana answers with a ritual riddle: one tamarisk, one fish, the river. Victory comes through cult, and the spoil is Aratta's craftsmen.
- **Enmerkar and En-suḫgir-ana.**
  - **The boast.** En-suḫgir-ana claims Inana's bed: "he sees dreams with her, I speak with her awake". Enmerkar answers with the same images reversed.
  - **The sorcerer.** A sorcerer (*maš-maš*) from fallen Ḫamazu offers to subdue Uruk. He makes a cow and a goat speak, and the milk departs from Ereš, Nisaba's city. The herdsmen, two brothers, cry to Utu.
  - **The contest.** The old woman Saĝburu meets him at the river. Five times he raises an animal from the water and she raises its predator (eagle, wolf, lion, leopard, tiger). He pleads for his life and she refuses: "a crime is set; life I will not give you". She throws him into the Euphrates.
  - **The yielding.** En-suḫgir-ana calls himself the one who "follows" and Enmerkar the older brother.
  - **Writing.** Enmerkar "pats the message like clay" (77), the words of the invention of writing in EA 503 and 539. ES 122–127 replay EA's contests: bull, man, and "his dog with my dog".
- **Across the cycle.** Lugalbanda's levy (LC 24–29) repeats the Death of Bilgameš (DB MT.H10–H15). ES's running messenger (45–47) repeats LC 273–275. The messenger formulas are shared with EA throughout.

**The Bible (the apparatus; shared motifs – none a source).**
- **1 Kgs 19:4–9:** Elijah, the cave, the cake by his head (1 Kgs 19:6, 8) [equivalent / divergence].
- **Ps 142:** the prayer "in the cave", with `וְאֵין-לִי מַכִּיר` – the same complaint as LC 156 [equivalent].
- **Deut 4:19:** lifting the eyes to sun, moon and stars – the gesture the Torah forbids, here the hero's piety [divergence].
- **1 Kgs 3:15:** dream – rising – offering – banquet, Solomon's sequence.
- **Gen 8:21:** the gods eating the offering, with `ריח` only where the Sumerian has *ir* (LC 383). `ניחוח` stays in the apparatus.
- **Lugalbanda and the Anzud Bird:**
  - Isa 40:31 – running without weariness, beside eagles [equivalent];
  - Deut 32:11 – the eagle's nest;
  - 1 Kgs 3:5–14 – the gift asked and the riches refused [divergence: Solomon gets the riches, Lugalbanda does not];
  - Gen 12:2 – the famous name;
  - *alan* `פֶּסֶל` (Exod 20:3) with the cognate *ṣalmu* ~ `צֶלֶם` (Gen 1:26) as a finding: here man makes the god's image;
  - 2 Sam 11:1 – "the return of the year";
  - Isa 54:11–12 – lapis walls;
  - 2 Kgs 24:14 – the craftsmen as spoil;
  - *gur* = *kurru* ~ `כֹּר` [cognate]; Martu ~ `הָאֱמֹרִי` [cognate].
- **Enmerkar and En-suḫgir-ana:**
  - Exod 7:12 – the contest of sorcerers at the river [divergence];
  - Num 22:28 – the speaking beast;
  - Num 12:6–8 – dream against waking speech with the deity;
  - Gen 25:23 and 27:29 – the older brother [divergence];
  - *ma-na* ~ `מָנֶה` [cognate].
- **False echoes of ETCSL's English, corrected against the Sumerian** (each recorded in an index row):
  - "altar" is *barag* `דוכן`;
  - "sacrifice" is *gu₇* "feed";
  - "like a tower" is *u₁₈-ru* "lofty"; *dim-dim* is `עמודים`;
  - "shark's teeth" is not in the text;
  - "righteous / Enlil's counsel" (LZ 100);
  - "made famous" is *pa e₃* "make shine";
  - "temples" is *e₂* "house";
  - no "good and evil" (*sag₉* "beautiful", Gen 3:5 [absent]);
  - "a sin that cannot be forgiven" is *nu-mu-e-tum₃* "you did not bring" (Num 14:20 [absent]);
  - "capital offence … not pardoning" is "a crime is set; life I will not give you";
  - "chosen" is *pad₃* "found";
  - "second to you" is *us₂* "one who follows";
  - "Wise Woman" is *um-ma* "the old woman";
  - "awoke – it was a dream" (LC 361) is *zig₃* "rose" (`קם`), so Gen 41:7 is only a motif;
  - "holy" is *kug* "pure" throughout.

## Decisions taken (minor, by me)
- **Three projects, not one.** This follows the corpus's practice: one project per text, EA as project 1.
- **Narrative *na-* is affirmative** (a plain verb, no `אַל`). This is now a rule for the cycle; the prohibitive *na-* stays `אַל`.
- ***alan* = `פֶּסֶל`.** This reverses my own pre-set `צֶלֶם`: five Sumerian precedents, EA 318 among them, win over the "Akkadian equivalent" rule, and the cognate stays in the apparatus.
- **Formulas:**
  - The tears formula *er₂ šu ti* `את דמעותיו לקח` follows the Bilgameš poems (HA). This is a recorded split from EA's *šu ti* `קיבל`.
  - Plural *ur-saĝ* `לוחמים` follows run 1's rule (Gen 6:4); LC 62 was aligned.
- **Splits by animal or sense, recorded:**
  - *amar* `עגל` / `גוזל` / `עֹפֶר`;
  - Anzud `אַנְזוּד` without the article (as Gudea);
  - *nam-maš-maš* `מְלַחֲשׁוּת` (coined, because `מלאכת` is reserved);
  - *ka-inim-ma* `דבר־הפה`;
  - *nu-gig* transliterated.
- **Licences added for homographs** rather than bending the Hebrew:
  - *ur₅* "liver" `כבד`;
  - *sun₄* "beard" `זקן`;
  - Aruru against the `ארור` gate;
  - ETCSL's spelling *šudu₃* in the `ברך` gate.
- **Kept as drafted, with each translator's reasoning in `project.md`:**
  - LC 353 `לקח` (the same form as 363);
  - LZ 296 / 318: the same Sumerian, past against wish;
  - ES 80 without a subject.
- **The independent reviewer's borderline readings** were left as drafted (listed in the log).

## Questions for the user
None.

## Problems and skipped items
- **No quota stop.** The run stayed in range A with one agent at a time, and the gate said GO at every step.
- **One VM restart** at the start of LC2. Nothing was lost: the save was committed and the translator resumed with SendMessage.
- **`sources_sync.py fetch` failures:** every `ETCSL/_bulk` item failed (llds.ling-phil.ox.ac.uk 502 / connection reset), and so did the web.archive.org items (George 2007 score, Wasserman 2020), as expected. None was needed in the end.
  - **Consequence:** `sumerian_workbench.py conc` (the ETCSL-wide concordance) and `lemmas` (the TEI) did not work here. The translators grepped the local transliterations instead and used ETCSL's lemmas from the web pages.
- **Rank-3 literature not available:** Wilcke 1969, Vanstiphout 2003, Black 1998 and Mittermayer's later work. The translations rest on ETCSL, ORACC (LC, LZ), the form index (ES) and the translators' own parsing.
- **Tool gaps:**
  - `check_bible_quotes.py` checks only the backtick group directly before a reference. A fragment in `` `A` … `B` (ref) `` goes unchecked. The translators wrote one group per quotation, but the checker could be widened.
  - `kings_tools.py data` / `skel` follow the base order (LZ's A–F come after 353).
- **Where the bracket convention is uneven:** a Hebrew word whose whole source is restored (a prefix or copula: LC 84 `[לא]`, LZ 154 / ES 73 `[הוא]`), against a partly restored verb left unbracketed. This is minor; the reviewer listed it.

## Cross-corpus splits left for the lead
1. *u₅* `אווז(?)` (EA 436, LZ 220) / *kur-gi₄* `אווז` (ES): two Sumerian "goose" words in one Hebrew word.
2. *nu-gig*: transliterated `הנּוּגִיג` here, while the law corpora have `קְדֵשָׁה`, which the `קדש` reservation of this corpus blocks.
3. *suḫ₁₀* `עטרה` (ES) overlaps Etana's Akkadian *meānu*.
4. *galam* `נישא` (LC, of an animal) / EA's `בתחכום`; *uru₁₆* also `נישא`.
5. *er₂ šu ti* `לקח` (HA, LC) / EA's *šu ti* `קיבל`.
6. *alan* `פֶּסֶל` (Sumerian) / Akkadian *ṣalmu* `צֶלֶם` (CL's gate): settled here by language; the lead may want to state it as a general rule.
7. Kulaba: the plain `כולבה` is shared, but the vocalization differs (`כּוּלַבָּה` here, `כֻּלַּבָּה` in run 1).
