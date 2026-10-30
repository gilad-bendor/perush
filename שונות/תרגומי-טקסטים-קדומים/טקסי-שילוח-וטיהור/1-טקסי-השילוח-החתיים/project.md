# Project 1: the Hittite elimination rituals ("rituals of sending away")

## Scope
Four rituals from Arzawa and Kizzuwatna (western and southern Anatolia), all in New Script copies of Middle Hittite
traditions, as one project (the survey's recommendation, `../../curation-surveys/world-survey--anatolia--2026-10-21.md`
§2.3.1), keys of `../../tools/hittite_tools.py`:
- **AS** – the ritual of **Ašḫella**, man of Ḫapalla, against a plague in the army (CTH 394; HPM ed. A. Chrzanowska;
  109 clauses, §1–§9): rams tethered before the officers' tents at night, an adorned woman sent with them to the enemy.
- **UH** – the ritual of **Uḫḫamuwa**, man of Arzawa (CTH 410; HPM ed. S. Görke; 33 clauses, §1–§4): a male sheep (*UDU.NÍTA*, not a
  ram: R1a) crowned with a wreath of coloured wool, driven to the enemy land, "to the god of the road".
- **PU** – the ritual of **Puliša** against a plague brought from the enemy's land (CTH 407; HPM ed. B.-J. Collins,
  English; 56 clauses, §1–§8 + colophon): a prisoner and a woman (or a bull and a ewe) sent back to the enemy god.
- **AM** – the ritual of **Ambazzi** (CTH 391.1; HPM ed. B. Christiansen; 260 clauses, 57 §§): a mouse carries the evil
  "to the high mountains, the deep valleys"; the Luwian gods Tarpattašši and Alauwaimi; **AM2** – its second version
  (CTH 391.2; 23 clauses).

## Base
The HPM critical editions ("Beschwörungsrituale der Hethiter", CC BY-SA 4.0): `../../sources/HPM/BESRIT--CTH-*`
(composite per clause + every manuscript; the editors' translations are rank 3: `hittite_tools.py tr KEY`, after
drafting). Word glosses from TLHdig (`../../sources/TLHdig/CTH-394/` etc., by form). Rank 3 / 4 records: Mouton 2016
(LAPO, French), Christiansen 2006 (StBoT 48, Ambazzi), Bawanypeck 2005 – ©.

## Line numbering
The HPM clause numbers (one Hebrew line per clause; "73a", "86a" as HPM); the § in the `## ` heading.

## Bible (look for)
**Lev 16:5–10, 20–22, 26** (the goat for Azazel: the animal that carries the evil away, the man who leads it, the camp);
Lev 14:4–7, 49–53 (the bird released "on the face of the field"; cedar, crimson, hyssop ↔ the coloured wool); 1 Sam 6:2–9
(the Philistines send the plague back to its god with golden mice and a gift: Ambazzi's mouse, Puliša's "appeasement"
of the enemy god); Zech 5:5–11 (the woman in the ephah carried off to Shinar); 2 Sam 24 (a plague in the land); m. Yoma 4:2,
6:6 (the crimson thread on the goat's head ↔ Uḫḫamuwa's coloured-wool crown). Tags: [equivalent], [divergence],
[absent]; the notes say whether a historical link is argued (Wright 1987, Janowski & Wilhelm 1993) or the parallel is
typological.

## Open decisions
- **2026-10-30, Sub4, before the first line** (the ritual corpus `renderings.md` §R1a, H3/H5/H6/H9; the law file's H3/H4 licences):
  *dai-* `שָׂם` with the Laws (R1's `הִנִּיחַ` dropped); *penna-* `הִסִּיעַ` / *unna-* `נָהַג` with the Laws; *anda tarna-*
  `הִכְנִיס` (`שִׁלַּח` only for release); UH's animal is UDU.NÍTA `כֶּבֶשׂ`; ANZELLU `אִסּוּר` beside *ḫurkil* `תּוֹעֵבָה`;
  LÚ ŠU.DAB `אָסִיר`; F17 (the plague's god), F18 (*aššuli* `בטובה`), F19 (the dawn), F21 (*kāša* `הִנֵּה`); new traps
  (`אָדֹם`, `לָבָן`, `עֵז`, `חֵלֶב`, `בָּר`, `אֹדֶם`, `עֲטָרָה`); new reserved words (Lev 1:4 `נרצה`, 1 Sam 6 `אשם`/`טחורים`,
  `ארץ גזרה`, `עתי`, `מלאך`, Zech 5 `איפה`/`שנער`); gate licences widened (`נשא` *pēdāu*, `תועבה` *ḫurkil*, `תיש` MÁŠ.ŠIR,
  `סמך` forms). No MUŠEN and no ERIN in the five texts: Lev 14's bird and cedar are [absent].

## Progress
- 2026-10-24: base (HPM, TLHdig), tool, renderings (`../renderings.md`, `../../חוקים-ובריתות/renderings.md` §7, §H2–§H9),
  brief – before drafting.

## Proposals
