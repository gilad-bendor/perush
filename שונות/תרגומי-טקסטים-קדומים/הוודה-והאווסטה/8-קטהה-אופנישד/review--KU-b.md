# KU1 + KU2 review pass (b) – consistency

Reviewer: independent agent, 2026-11-09. Method: `vedic_tools.py lexmap '.*'`, filtered to lemmas with more than one Hebrew inside KU1+KU2 (inflection and prefix differences ignored), plus grep for the repeated lines, the names (§3, §7.3) and *puruṣa*.

| label | old | new | why |
|---|---|---|---|
| KU1 1.8b | `מן האדם` | `מן האָדָם` | *puruṣa* `אָדָם`, vocalized as in renderings §3/§7.2 and the majority of KU lines (KU1 2.1a, 3.11a; KU2 4.12a, 4.13a, 5.8a) |
| KU1 3.11b | `מעל האדם` | `מעל האָדָם` | same |
| KU2 6.8a | `האדם, החודר לכל` | `האָדָם, החודר לכל` | same (and = KU1 3.11a) |
| KU2 6.17a | `אדם בגודל אגודל` | `אָדָם בגודל אגודל` | same (= 4.12a, 4.13a) |
| KU1 1.14b | `ובסיסו – דע אותה כמוצבת בסתר` | `והבסיס – דע אותה כמונחת בסתר` | open item from pass (a): "its" is not in *pratiṣṭhām*. Also *nihita* is `מונח` in KU1 2.20a and KU2 4.8a (and *guhāhita* `המונח בסתר`, 2.12a) |
| KU1 1.22b | `אחר לא יימצא` | `אחר לא יושג` | √*labh* `השיג` (renderings §11.4; KU1 2.7a, 2.23a–b) |
| KU2 5.13a | `שבין הבלתי־קבועים` | `שבין הלא־קבועים` | *anitya* `לא קבוע`: KU1 2.10a–b is the precedent |
| KU1 3.13a | תרגומים: Hume "כמונו בעניין" | Hume reads a dual, "speech and mind"; we follow Śaṅkara's *vāk manasi* (?) | open item from pass (a). The `>` line is kept (it is the precedent, and the ladder *tad … jñāne*, *jñānam … mahati* requires it), but the note wrongly said Hume agrees |

Decided without change:
- **KU1 2.9a** *proktā anyena* "כשאחר מלמד אותה": the passive is given as an active with the agent. The meaning is the same, and it matches 2.8b (*ananyaprokte* "כשאחר אינו מלמד אותו"), so it is kept.
- **Splits by sense already justified in the notes:** *dharma* (`דבר` / `משפט`), *anu-√paś* (`הבט אחורה` / `רואה`), √*śri* (`נשען` / `שוכן`), *agni* (`האש` / `אַגְנִי`, §3).
- **Other lexmap pairs that are sense splits:** *abhaya* (noun `חוסר פחד` vs. adjective `הבלתי־מפחיד`), *gati* (`גישה` 2.8b vs. `מטרה`), *durga* (`קשה` of a path vs. `קשה־מעבר` of ground), *vara* "boon" vs. *vara* "choice"; I left all of them.
- **Repeated lines:** `verify` reports 0 differences. The cross-file pairs are identical: 4.4b = KU1 2.22b; KU2 6.7–6.8 match KU1 3.10–3.11 in the shared words.
- **Names and traps:** `מָוֶת`, `אֵל(ים)` and `יָמָה` are always vocalized in both files.

Last item: the whole of KU1 + KU2.
