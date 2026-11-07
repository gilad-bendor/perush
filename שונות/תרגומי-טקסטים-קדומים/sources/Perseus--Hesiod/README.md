# Perseus – Hesiod, Theogony and Works and Days (Greek)

- **What:** Hesiod, *Theogony* and *Works and Days*, Greek text of H. G. Evelyn-White, *Hesiod, the Homeric Hymns and
  Homerica* (Loeb Classical Library, London: Heinemann / New York: Macmillan, 1914), as encoded by the Perseus Digital
  Library (`canonical-greekLit`): urn:cts:greekLit:tlg0020.tlg001.perseus-grc2 (Theogony) and tlg0020.tlg002.perseus-grc2
  (Works and Days).
- **URLs:** https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/master/data/tlg0020/tlg001/tlg0020.tlg001.perseus-grc2.xml
  and …/tlg002/tlg0020.tlg002.perseus-grc2.xml
- **Licence:** the 1914 text is in the public domain; Perseus's markup is CC BY-SA 4.0 (the repository's README) –
  committed, with attribution.
- **Retrieved:** the Theogony 2026-10-23 (Round 4 run 1, the fifth-day dossier); the Works and Days 2026-10-24 (Round 4
  run 4, the Hesiod corpus `../../הסיודוס/`).
- **What is here:** the two TEI files. Lines are `<l n="…">` (with `rend`, `style` attributes: parse the `n` anywhere in
  the tag). Theogony: 1,042 lines (1–1022 + 929a–t); Works and Days: 831 lines (1–828 + 169a–d; **WD 310 is not in the
  file**). Marks: a whole line in `<del>` = Evelyn-White's square brackets (a suspected line); Th. 929a–t in `<add>`
  (Galen's quotation of Chrysippus, fr. 343 M-W); WD 169a–d with `<del>` inside the line (the papyrus restorations).
  `../../tools/perseus2md.py lines <file>` prints them.
- **Line numbering:** the standard numbering, in Evelyn-White's order (transpositions: Th. 212/214/213, 425/427/426,
  429/434/430–433; WD 168/170–173/169/169a–d/174, 360/363/361–362, 767/769/768).
- **Usefulness:** the base text of the Hesiod corpus; the readings of West's editions (1966, 1978; ©) differ in a few
  hundred places – the translators note them where they know them.
- **Added 2026-11-07 (Round 6 run 5):** the Shield of Heracles (`tlg0020.tlg003`; from the same repository path, `tlg003`), for `../../הסיודוס/3-מגן-הרקלס/`. The TEI has 479 lines, labelled 1–480 without 298, with Evelyn-White's brackets as `<del>` on whole lines 204 and 210 and inside lines 203, 205, 209 and 211 (suspected words). The treebank has 3,315 words: all are aligned, but its line cites run one ahead in 139 and 304–309.
