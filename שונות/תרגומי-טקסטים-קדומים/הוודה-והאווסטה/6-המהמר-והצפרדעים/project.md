# 6-המהמר-והצפרדעים – RV 10.34, 7.103

Part of the Vedic and Avestan corpus (`../corpus.md`); renderings `../renderings.md`; brief `../translator-brief--vedic.md`.

## Scope
RV 10.34, 7.103. Base texts and line units: `../renderings.md` §1. Line data: `python3 -I -B ../vedic_tools.py data <KEY>`.

## Coordinator's notes
- Fixed before drafting (2026-10-30): the renderings §1–§10; the gates in `vedic_tools.py`.

<!-- The translators insert their sections here, above "## Parallels index". -->

## RV10.34 1a–14d, RV7.103 1a–10d (translator 4, Round 5 run 1, part 2)

### Scope
All 96 pādas: RV 10.34 (the gambler, 56) and RV 7.103 (the frogs, 40). Both have an annotated file and an intro, and
both were built with `vedic_tools.py build`.

### Sources consulted
- VedaWeb Zurich text and morphology (`vedic_tools.py data`); Grassmann and Monier-Williams as needed.
- After each hymn was drafted: `vedic_tools.py tr` (Griffith, Grassmann, Geldner, Elizarenkova); Jamison's commentary
  (`../../sources/Jamison--Rigveda-commentary/X.1–60-9-25-26.txt`, X.34; `VII.56–104-9-25-26.txt`, VII.103, with his
  1993 "Natural History Notes" reproduced there).
- Every Bible verse was printed with `check_bible_quotes.py --show` before it was quoted.

### Decisions
- **The coordinator's words:** *akṣá* `קובייה` (feminine, so the dice are feminine throughout), *kitavá* `מהמר`,
  *maṇḍū́ka* `צְפַרְדֵּעַ`. Hebrew `צפרדע` is feminine (Exod 8:2), so the frogs' verbs are feminine, except where the hymn
  calls them "men" (9b) and "brahmins". 10.16.14c's *maṇḍūkī́* stays `צפרדעה`.
- **Gaming words:** √*dīv* "play dice" `הימר` (the root of `מהמר`); √*krīḍ* "play" `שיחק`; *íriṇa* `גומת ההימור`;
  *sabhā́* `בית־הוועד`; *kr̥tá* (the winning throw) `ההטלות הזוכות`; *ekapará* `אחת־יותר`; *babhrú* "the brown ones" (the
  nuts) `החומות`; *vrā́ta* and *gaṇá* both `להקה`. Lexmap folds *vrā́ta* together with *vratá*: this is not a real collision.
- **vratá** has two senses (proposed): a god's ordinance is `תקנה` (10.10.5c), and a person's religious observance is
  `נדר` (7.103.1b *vratacārín* `מקיימי־נדר`; Num 6:2 is in the apparatus, tagged [equivalent]). *ánuvrata* (10.34.2d) is
  `המסורה`.
- **Splits by sense, recorded:**
  - √*tap* (passive) `ייסר` in 10.34.10a and 11a, and `להט` elsewhere (7b *tápana* `לוהט`).
  - *vā́c* `קול` here (`מלה` in 10.18.14c). *vā́cam akrata* `השמיעו קול` is used in both hymns (10.34.5c, 7.103.8a).
  - *yóni* `קן` in 10.34.11b.
  - √*nī* `הוליך` in 10.34.4d.
  - √*car* `נהג` in 10.34.14b.
  - √*skand* (intensive) `קיפץ` in 7.103.4c (`ניתז` in 10.17).
  - The preverb decides √*tr̥̄*: *ví* `סיכל`, *prá* `האריך`.
  - √*rudh*: *ápa* `הרחיק`, plain `עיכב`.
- **One word each:**
  - *ugrá* `עז` (as 10.121.5a), so *dhr̥ṣṇú* moved to `נועז`. I also changed 10.16.7c to `הנועז`.
  - *manyú* `כעס`; *śivá* `מיטיב`; *mitrá* (common noun) `רעות` (from `רֵעַ`, renderings §3.2).
  - *dhána* `הון`; *ásta* `בית`; *kr̥ṣí* / √*kr̥ṣ* `חריש` / `חרש`; *vittá* `קניין`; *jāyā́* `אישה`, *strī́* `אישה`.
  - *sarasī́* `בריכה` (`ברכה` tripped the blessing gate); *sáras* `אגם`.
  - *pŕ̥śni* `מנוקד`, *hárita* `ירקרק`; *gómāyu* / *ajámāyu* `גועה־פרה` / `פועה־תיש` (the simile `כפרה` tripped the כפר gate).
  - *prasargá*, *visargá* (√*sr̥j*) `שילוח`; *bráhman* `נֹסַח`; *adhvaryú* `כוהן־המעשה`; *gharmá* `החלב החם`; √*mī* *prá*
    `הפר` (7.103.9b, as 10.10.5c).
- **New names:** Mūjavant `מוּגַ'וַנְט`, the vibhīdaka `וִיבְּהִידַקָה`, and the cry *akhkhala* `אַקְהַלָה`. Parjanya and Savitṛ
  take renderings §3.1. In 10.34.11d *agnéḥ ánte* ("by the fire") is `ליד אַגְנִי`, because the table requires the name
  in the RV.
- **Readings:**
  - 10.34.3a: the mother-in-law is the gambler's own mother (Jamison, after Thieme).
  - 10.34.6b: "Will I win?" is kept as a question; Jamison reads it as both a question and a boast.
  - 10.34.8b: Geldner reads that the dice's own rules are as true as Savitṛ's.
  - 7.103.8c: the sweating belongs to the frogs in the summer heat (Geldner).
  - 7.103.9d: *gharmá* is both the ritual hot milk and the summer heat.
  - 7.103.10d: whose life is lengthened is left open.

### Open decisions for the user
- *vratá* = `נדר` for a person's observance, beside `תקנה` for a god's ordinance (a split by sense)?
- 10.34.11d: the name rule forces `אַגְנִי` for the household fire. Would `האש` read better there?

### Progress log
- Drafted 10.34, then 7.103. Each was saved, `fill`ed and `verify`ed at once, then compared with `tr` and Jamison and
  revised: 10.34 at 3a, 6b and 8b; 7.103 at 1b, 8c, 9d and 10d.
- Pass (a), fidelity: 10.34.11b became singular (`את אשת האחרים`).
- Pass (b), consistency: the lexmap gave *ugrá* / *dhr̥ṣṇú* (fixed in 10.16 and 10.34). The splits are listed above.
- Pass (c), Hebrew: the frogs were put in the feminine, because Hebrew `צפרדע` is feminine.
- Final checks: `check_bible_quotes.py` gives 0 problems; `verify --strict` gives no problems for both KEYs (and for
  RV10.16 after its change).

### The text on its own terms
- **10.34 is the oldest confession of an addict:** the dice as soma (1), the broken vow at the sound of the dice (5),
  the rush to the gaming hall "like a woman to her lover", and the question "Will I win?" that is also a boast (6).
- **The household falls apart from inside:** the blameless wife (2), the mother who no longer calls him son, and
  "like an old horse for sale" (3). Other men touch his wife, and his family disowns him: "lead him away bound" (4).
  He becomes a night thief (10d) and lies, an outcast, by the fire of others (11).
- **The dice have a will of their own:** a troop with fixed rules that even a king bows to (8). They are handless yet
  master the man with hands, and they are cold coals that burn the heart (9).
- **The god's advice is simple:** plough, be content, "there are your cows, there your wife" (13). The ending is ironic:
  "let another be in the bonds of the brown ones" (14d).
- **7.103 is natural history and ritual at once:**
  - The estivating frogs are "like a dry leather bag" (2).
  - The rain wakes the males' chorus; Jamison notes that the brahmin's "vow" includes celibacy (1b).
  - A frog repeats another "as the learner the teacher" (5): this is how the Rigveda itself was handed down.
  - The overnight soma rite and the sweating priests (7–8).
  - The frogs end as patrons who "give hundreds of cows" (10).

### Key parallels
- [divergence] 7.103.1d ↔ Exod 7:28, 8:10: the frogs are a plague that stinks in Exodus; in the Veda they are priests and
  bring blessing. India never met Israel.
- [equivalent] 10.34.5a ↔ Prov 23:35 `מָתַי אָקִיץ; אוֹסִיף אֲבַקְשֶׁנּוּ עוֹד`: the cycle of addiction is seen in both cultures.
- [equivalent] 10.34.9d ↔ Prov 6:27–28: coals as the image of a ruinous passion. In the Veda the coals are cold.
- [equivalent] 10.34.13a ↔ Prov 12:11 `עֹבֵד אַדְמָתוֹ יִשְׂבַּע-לָחֶם`, 24:30. [divergence] ↔ Gen 3:23: tilling the ground is
  part of the expulsion in Genesis and a god's good advice in the Veda.
- [divergence] 10.34.2d ↔ Prov 31:10–11: the trusted wife is the husband's wealth; the gambler drove his away.
- [equivalent] 7.103.5b ↔ Deut 6:7 `וְשִׁנַּנְתָּם`: learning by repetition. [equivalent] 7.103.1b ↔ Num 6:2: a vow of
  abstinence for a set time.

### Proposals for the shared renderings
- §3.1: Mūjavant `מוּגַ'וַנְט` (` mujav| maujav`), Parjanya as it stands.
- §5:
  - *akṣá* `קובייה`, *kitavá* `מהמר`, √*dīv* `הימר`, √*krīḍ* `שיחק`, *maṇḍū́ka* `צְפַרְדֵּעַ` (feminine agreement).
  - *vratá* `תקנה` (a god's) / `נדר` (a person's observance).
  - *ugrá* `עז`, *dhr̥ṣṇú* `נועז`, *manyú* `כעס`.
- Tool: lexmap folds *vratá* together with *vrā́ta*, and √*kr̥ṣ* "plough" together with √*kr̥ṣ* "drag" (MBh `משך`).
- The `כפר` gate's simile exception could also cover compounds like *gó-māyu*; I rephrased instead.

### Lessons for the guidelines
- Check the Hebrew gender of an animal word before drafting (`צפרדע` is feminine; *maṇḍū́ka* is masculine).
- A gate on a common word (`ברכה` "pool") blocks a homograph; rephrase plene (`בריכה`) rather than ask for a permit.

## Parallels index
(generated from the הקבלה bullets by `../build_parallels_index.py`)
