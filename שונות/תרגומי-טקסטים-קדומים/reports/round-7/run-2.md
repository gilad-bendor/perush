# Round 7, run 2 – the Old Avestan corpus, whole (report)

Child session `Round7/Run2` (parent: `session_01UnH1L2b1uMRsvSVD1ihmJY`), branch `translation-round-7-run-2`,
2026-11-08/09, range B, one agent at a time (the run's share). Scope as narrowed by the parent: the Old Avestan part of
the plan's run 2 only (the Kaṭha Upaniṣad moved to a run 3; nothing in `הוודה-והאווסטה/` edited).

## Done
- **The new corpus `האווסטה/`** (corpus.md, renderings.md, translator-brief--avestan.md, parallels-index.md,
  `avesta_tools.py`, `build_parallels_index.py`), three projects, **1,020 lines**, each with a full apparatus (פירוק
  of every word, הערות, הקבלה where real, footnotes for the main cruxes):
  | Project | KEYs | Lines |
  |---|---|---|
  | `1-הגאתות/` – the 17 Gāthās (Ahunavaitī Y 28–34, Uštavaitī Y 43–46, Spəṇtā.mainyu Y 47–50, Vohu.xšaϑrā Y 51, Vahištōišti Y 53) | Y28 … Y53 | 869 |
  | `2-יסנה-הפטנגהאיתי/` – the Yasna Haptaŋhāiti, Y 35.2–41.6 | YH | 112 |
  | `3-ארבע-התפילות/` – Ahuna Vairya, Ašəm Vohū, Yeŋ́hē hātąm, Airiiə̄mā išiiō | PR | 12 |
- Per KEY: `annotated-<KEY>.rtl.md`, `translation--intro-<KEY>.rtl.md`, the generated `translation-<KEY>.rtl.md`;
  per project: `project.md`, `translation--head.rtl.md`, the generated `translation.rtl.md`; print stubs
  `הדפסה/האווסטה/{1-הגאתות,2-יסנה-הפטנגהאיתי,3-ארבע-התפילות}.rtl.md`. No layout modules exist yet for these
  translations (a layout session may write them).
- **Base:** CAB's XML (the Gāthic verse lines, Geldner's numbering; repetitions, Middle Persian headings and Young
  Avestan frames dropped by script) → `sources/CAB/old_avestan.tsv`; TITUS for Y 27.13–15. New sources: Mills 1887
  (SBE 31), Moulton 1913 (PD OCR, rank 5); recipes and manifest items added.
- **Process:** one translator (T1) in six parts, resumed after each merge (its proposals merged into renderings
  §11.1–§11.7 and its 12 reported tool bugs fixed before the next part); an independent reviewer (R1) over all 1,020
  lines (77 fixes); a consistency pass on the coordinator's decisions (≈ 60 lines; §11.8). 148 entries carry a
  `ביקורת` note.
- Shared files: STATUS (§3/§4 line, last-updated), history (a "Learned on" block + changelog), guidelines §5.2 (Old
  Avestan lesson) and §6.7 (the Avestan corpus row), sources-registry §4.4y, tools.md, fetch-recipes, MANIFEST, the
  plan row; READMEs of CAB, TITUS, Archive-org--PD-translations.

## Verification
- `python3 -I -B האווסטה/avesta_tools.py verify` (all 19 KEYs): **0 problems**, 0 repeated-line differences; every
  `translation-<KEY>.rtl.md` equals its `>` lines (`build`).
- `python3 -I -B האווסטה/avesta_tools.py selftest`: 7 lines, 0 failures.
- `python3 -I tools/check_bible_quotes.py האווסטה/*/*.rtl.md`: **0 problems** (every quoted verse printed first).
- `python3 -I -B האווסטה/build_parallels_index.py`: 12 rows.

## Key findings
**The ancient mind.** The Gāthās are a priest-poet's own voice, around the late second millennium BCE: a man who asks
his god questions (the Y 44 refrain "this I ask you – tell me truly, Lord"), who complains of being powerless ("I know
why: few cattle, few men", Y 46.2), who gives his daughter in marriage and tells her to decide by her own wisdom
(Y 53.3). His world is pastoral – the cow's soul laments to the gods that no protector was made for her (Y 29), the
herdsman against the raider – and his religion is a choice: two primal spirits, twins, chose between the good and the
evil, and so must every man and woman (Y 30.3–6, 45.2). Mazdā's qualities – Order (*aša*), Good Thought, Rule,
Devotion, Wholeness, Deathlessness – are at once abstractions and persons the poet addresses, and the Hebrew keeps
both by grammar (renderings §3.2). The old gods (*daēuuas*) are rejected – yet they keep the very word that means "god"
in India (`אֵלִים`, the cousin corpus's *devá*): the scandal stays visible. The end of a life is a passage over "the
bridge of the sorter" (`גֶּשֶׁר הַבּוֹרֵר`), where a man's own *daēnā* ("inner view") meets him (Y 46.10–11,
51.13); existence will be "made brilliant" (`לַעֲשׂוֹת אֶת הַקִּיּוּם מְפֹאָר`) by "those who will bring benefit"
(*saōšiiaṇt*). The YH shows the first community's worship: to the fire, the waters, the earth and the "wives" of Ahura.
**The Bible parallels in the apparatus** (all shared motifs or reception notes – the Gāthās never met Israel; the
Persian contact came centuries later): outstretched hands in prayer (Y 28.1 / 50.8 ↔ Exod 9:29, 1 Kgs 8:22); the
choice between life and non-life (Y 30.3–4 ↔ Deut 30:15, 19); "first and last" (Y 31.8 ↔ Isa 44:6, 48:12, with the
uncertainty of *yezīm* stated); the cosmological questions (Y 44.3–5 ↔ Ps 104:19, Job 38:4, 33, Isa 40:12, and Isa
45:7 `יוֹצֵר אוֹר וּבוֹרֵא חֹשֶׁךְ`, with the reception note that it is addressed to Cyrus and often read as an answer to
Persian dualism); the shepherd given to the poor (PR 27.13 ↔ Ezek 34:23); the refining fire and molten metal (Y 51.9 ↔
Mal 3:2); and the one lexical contact – **the Persian loanword `דָּת`** (Av. *dāta*, Y 33.1, 46.15 ↔ Esth 1:13, Ezra
7:12) [cognate]. Echo control kept the later Jewish words out of the lines (`בָּרָא`, `קָדוֹשׁ`, `צַדִּיק`, `מָשִׁיחַ`,
`שָׂטָן`, `מַלְאָךְ`, `גֵּיהִנֹּם`, `תְּחִיָּה`, `קֵץ`, `עוֹלָם`, `אַשְׁרֵי`, `מִשְׁכָּן`, `חֶסֶד`): the comparisons
with Qumran's two spirits, Daniel's resurrection and Ashmedai (< *aēšma daēuua*, Y 29.1) stand only in the notes.

## Decisions taken (minor, by the coordinator)
- The corpus structure: one KEY per Yasna chapter; labels Geldner's chapter.stanza + CAB's line letter; Y 27.15 keeps
  TITUS's letters c–e (its a–b are the Young Avestan formula).
- The key renderings (renderings §5): the Aməṣ̌a Spəṇtas as common nouns with the article; *ārmaiti* `מְסִירוּת`,
  *hauruuatāt* `שְׁלֵמוּת`, *amərətāt* `אַלְמָוֶת`, *druj* `שֶׁקֶר`, *drəguuaṇt* `בַּעַל הַשֶּׁקֶר`, *mąϑra* `מַנְתְּרָה`,
  *nəmah* `קִידָה`, *ratu* `מַכְרִיעַ`, *saōšiiaṇt* `הָעָתִיד לְהוֹעִיל`, *daēnā* `הַשְׁקָפָה` (and *dāta* `דָּת`, by the
  loanword rule), *uštā* `רָצוֹן` (`אַשְׁרֵי` reserved).
- *tanū* `גּוּף` (the Vedic cognate keeps it), *kəhrp* `צוּרָה`; *rafnah* `עזרה`; *friia* `רֵעַ` (vocalized); *aōj-*
  `דיבר`; *ciš-* `הקצה` / *ci-* `ייעד`; `השיג` only for *āp-*; *varəz-* `פעל`, *vaēn-* `הביט`, *spas-* `צפה`, *ā-xsā-*
  `התבונן`; `מִשְׁכָּן` and `חֶסֶד` reserved; *saṇd-* "appear" kept as `נראה` (a recorded overlap with *dars-* `ראה`).
- Unvocalized traps added: `רֵעַ`, `אִשְּׁךָ` ("your fire"; unvocalized it reads "testicle" – found at the end, six
  lines fixed).
- The F9 refrain written plene (`אֱמוֹר`); every proposal of T1 accepted (§11.1–§11.7).

## Questions for the user
None that block. One for the lead's finalization rather than the user: Vd 2 (in `הוודה-והאווסטה/`) renders *daēnā*
`דָּת`; this corpus gives `דָּת` to *dāta* (the source of the Hebrew loan) and *daēnā* `הַשְׁקָפָה` – see the splits
below.

## Problems and skipped items
- No quota stop (the gate said GO at every step; range B, one agent).
- The modern editions and translations (Insler, Humbach, Kellens–Pirart, Narten, West) are not open: the readings rest
  on CAB's analyses, Bartholomae (OCR) and the translators' parsing; rank 5 (Mills, Moulton) only after drafting.
  Moulton's OCR misses many stanzas (Y 30.5–11, most of Y 31–34, 43–44), so many תרגומים bullets are absent.
- Many cruxes are translated by the most defensible reading and marked (`?`, `*…*`, or `…` where a word is opaque:
  e.g. 48.1b *ąsaš́utā*, 50.2d *†nišąsiiā*, 53.9a–b); T1's list of least certain lines is in renderings §11.7's report
  and was the reviewer's first priority.
- The plural *ahurā̊ŋhō* / *spitamā̊ŋhō* still need a `[היתר שם]` escape per entry (the name check wants the singular
  string).
- The intros were re-read after the review; the layout of the new clean files is left to a layout session.

## Cross-corpus splits left for the lead
Avestan words whose Vedic cognate the cousin corpus has not rendered yet (one Hebrew per cognate pair; align with run
1's Book 7) – full list in `האווסטה/renderings.md` §12:
*druj* / *druh* `שֶׁקֶר`; *ārmaiti* / *arámati* `מְסִירוּת`; *hauruuatāt* / *sarvátāt* `שְׁלֵמוּת`; *amərətāt* /
*amr̥tatvá* `אַלְמָוֶת`; *aməṣ̌a* / *amŕ̥ta* `בן אלמוות`; *xratu* / *krátu* `תְּבוּנָה`; *mąϑra* / *mántra*
`מַנְתְּרָה`; *nəmah* / *námas* `קִידָה`; *mīžda* / *mīḍhá* `שָׂכָר`; *kauui* / *kaví* `קַוִי`; *vīra* / *vīrá* `אַנְשֵׁי
חַיִל`; *garah* / *gír* `שִׁירָה`; *zaotar* / *hótar* `מְנַסֵּךְ`; *yazata* / *yajatá* `הראוי לזבח`; *usig* / *uśíj*
`אוּשִׁיג׳`; *īžā* / *íḍā* `רוויה`; *miiazda* / *miyédha* `סעודת הזבח`; *vərəϑrəm.jan* / *vr̥trahán* `הורג החוסם`; *gənā* /
*gnā́* `אשה`; *miϑra* "contract" `הסכם` / Vedic *mitrá*; Airiiaman / Aryaman (names, each language's transcription);
*vahišta* / Vasiṣṭha (a note). Recorded, kept: *mainiiu* `רוּחַ` / *manyú* `כַּעַס` (the cousin corpus's own split);
*uxδa* `מִלָּה` / *ukthá* `שִׁירֵי־הַשֶּׁבַח` (by sense). For the lead to settle: **Vd 2's *daēnā* `דָּת`** against this
corpus's *daēnā* `הַשְׁקָפָה` / *dāta* `דָּת` (the loanword rule of 2026-10-30 gives `דָּת` to *dāta*).
