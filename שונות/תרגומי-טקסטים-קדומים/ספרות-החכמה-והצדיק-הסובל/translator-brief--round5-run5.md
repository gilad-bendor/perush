# Brief for the translators of Round 5, run 5 (the Poor Man of Nippur; the fables)

This adds to `translator-brief.md` and to the tools and ★ sections (§2–§4) of `translator-brief--round3-run4.md` – read
both in full: they bind. Where they differ, this file wins. The renderings of this run: `renderings.md` §12.

## 1. The run
| Key | Text | Base | Project |
|---|---|---|---|
| PM | the Poor Man of Nippur (161) | eBL `../sources/eBL/Poor-Man-of-Nippur/` | `7-העני-מניפור/` |
| PV, PO, OH, SP, WR | Palm and Vine (54), the Poplar (82), Ox and Horse (217), the Spider (59), the Wren (42) | eBL `../sources/eBL/Fable-*/` | `8-משלי-המחלוקת/` |
Translators work **one at a time**, each resumed by the coordinator for its later files. **Write each drafted section to
disk at once** (a quota stop must lose at most the section in progress); if your file already has drafted lines, check
them and continue from the first missing label.

## 2. Your files
- `annotated-<KEY>.rtl.md` in your project: a `# ` Hebrew title, the Hebrew header paragraphs (as the DP and CW files:
  **נוסח הבסיס** with the manuscripts from `manuscripts.md`, **מספור**, **סימנים**, **תגי הקבלה**, **מלים קבועות**; never
  open a paragraph with a bold number), `---`, sections `## <from>–<to>: <Hebrew heading>`, and one `### <label>` entry
  per eBL label (every label, broken ones too) in the §7.2 format (`פירוק`, `תרגומים`, `הקבלה`, `הערות`, optional
  `הערת שוליים`), source line `` `@` `` + `python3 -I wisdom_tools.py fill <KEY>`.
- `translation--intro-<KEY>.rtl.md` (a `# ` title + a short Hebrew introduction), and, by the first translator of a
  project, `translation--head.rtl.md` (a `# ` title + one paragraph on the project); then `python3 -I wisdom_tools.py
  build`.
- Your section in your project's `project.md` (`## <KEY>`): progress and the three passes; `### Parallels index (<KEY>)`
  with exactly `| Line | Akkadian | Hebrew rendering | Bible | Tag | Comment |`; key findings (Bible; the ancient
  mind); open decisions; **Proposals** (every term or formula you fixed, with its exact Hebrew string).

## 3. Checks before you finish each part
`python3 -I wisdom_tools.py verify <KEY> --strict` (0 problems), `python3 -I ../tools/check_bible_quotes.py <your files>`
(0), three review passes (fidelity – brackets by the partial-restoration rule: a word whose root is preserved in one
manuscript is not bracketed; consistency; Hebrew aloud). Never commit, never edit `renderings.md`, the tools, other
files or corpora; no background jobs left running. Final reply: what you did, the checks, the fixed strings, key findings,
open decisions, problems.
