# The Avestan corpus (`האווסטה/`)

> Round 7 run 2 (2026-11-09) began this corpus with **the whole Old Avestan corpus**: the Gāthās of Zaraϑuštra, the
> Yasna Haptaŋhāiti and the four prayers – about 1,020 lines. Its tool module is `avesta_tools.py` (its own, so that
> the Rigveda's runs and the Avestan runs never edit one file: the plan of 2026-11-02); the renderings of the cousin
> corpus `../הוודה-והאווסטה/` bind it (guidelines §6.7, one Hebrew for a cognate pair of cousin languages). The
> Vīdēvdād 2 (Yima and the *vara*) stays in `../הוודה-והאווסטה/3-המבול/` until the whole Vīdēvdād is translated here,
> then is kept identical to it by script (the plan).

## The texts
| Project | KEYs | Text | Lines | Base |
|---|---|---|---|---|
| `1-הגאתות/` | Y28–Y34, Y43–Y51, Y53 | **The Gāthās** ("songs") of Zaraϑuštra: 17 hymns in five metres – the Ahunavaitī (Y 28–34), the Uštavaitī (Y 43–46), the Spəṇtā.mainyu (Y 47–50), the Vohu.xšaϑrā (Y 51), the Vahištōišti (Y 53); 238 stanzas | 869 | CAB (the XML's verse lines) |
| `2-יסנה-הפטנגהאיתי/` | YH | **The Yasna Haptaŋhāiti** ("the worship in seven chapters"), Y 35.2–41.6: the oldest Iranian liturgy in rhythmic prose, in the Gāthic dialect, to Ahura Mazdā, the fire, the waters, the earth and the souls | 112 | CAB |
| `3-ארבע-התפילות/` | PR | **The four holy prayers**: Ahuna Vairya (Y 27.13), Ašəm Vohū (27.14), Yeŋ́hē hātąm (27.15), Airiiə̄mā išiiō (54.1) | 12 | TITUS (Geldner) for 27.13–15; CAB for 54.1 |

**Reading order:** the Ahuna Vairya and the Ašəm Vohū stand before the Gāthās in the Yasna (Y 27.13–14), the
Ahunavaitī is named after the Ahuna Vairya, and the Airiiə̄mā išiiō closes the Gāthic part (Y 54). The liturgy's own
order: Y 27.13–15 – Y 28–34 – Y 35–41 (the YH, between the first and the second Gāthā) – Y 43–51 – Y 53 – Y 54.1.
The files follow the projects; each project's `translation.rtl.md` gives its texts in the Yasna's order.

## Date, language, transmission
Old (Gāthic) Avestan, the language of eastern Iran in the late second millennium BCE (estimates run from c. 1500 to
c. 1000 BCE; a few scholars still argue for c. 600). The Gāthās are the words of Zaraϑuštra himself (he names himself
in the third and first person), a priest-poet of the Indo-Iranian tradition who turned against the *daēuuas*; the YH
is a little later, from his first community. They survived **by oral recitation** in the Yasna liturgy for some two
thousand years, written in the Avestan alphabet only in the Sasanian period (c. 5th–6th c. CE); the oldest manuscript
is of 1323 CE (J2). Their language was no longer understood by the priests who recited them (the Pahlavi translation
often guesses): a verbatim oral tradition of the highest fidelity (guidelines §1, criterion 2).

## The base and what was left out
`avesta_tools.py convert` reads CAB's XML (the Corpus Avesticum Berolinense's linguistic corpus, Geldner's numbering
in `corresp`) and keeps the Old Avestan verse lines. Dropped: the Middle Persian headings (`gāhān būn`), the rubrics
(`zōt ud rāspīg`), the liturgical repetitions (Y 28.1, 33.11, 34.15, 43.1, 47.1, 51.1, 53.1, 53.9, 54.1 written out two
to four times; YH units written out again as one), the Young Avestan preface Y 28.0 and the closing formulas after
each hymn (`ahiiāsąm hāitīm yazamaide` …), Y 35.1 and Y 41.7–8 (Young Avestan frames of the YH). Y 27.13–15 are not
in CAB's "corpus without repetitions": they come from TITUS (Geldner's text with Humbach's line division; 27.15's
lines c–e, its a–b being the Young Avestan formula before the prayer).

## Status
See each `project.md`. Round 7 run 2: drafted by one translator, part by part (one agent at a time: the run's share).
