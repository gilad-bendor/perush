# ETCSL bulk download — Oxford Text Archive item 2518 ("The Electronic Text Corpus of Sumerian Literature. Revised edition", Oct 2006)

- **Editors:** J. Black, G. Cunningham, J. Ebeling, E. Flückiger-Hawker, E. Robson, J. Taylor, G. Zólyomi (Oxford). Deposit prepared by Jarle Ebeling & Graham Cunningham, 2006.
- **URL:** https://llds.ling-phil.ox.ac.uk/llds/xmlui/handle/20.500.14106/2518 (old handle: http://hdl.handle.net/20.500.12024/2518 — the old `ota.bodleian.ox.ac.uk` host did not respond on 2026-10-16). Files: `…/bitstream/handle/20.500.14106/2518/<file>?sequence=N&isAllowed=y`.
- **Retrieved:** 2026-10-16
- **Licence:** **CC BY-NC-SA 3.0** (stated on the landing page, saved as `OTA-2518-landing-page.html`).
- **Size:** `etcsl.zip` 4.9 MB; unpacked 23 MB.

## Contents
- `etcsl.zip` — the original archive (unchanged). `etcsl-unzipped/etcsl/` — extracted copy:
  - `transliterations/c.*.xml` — 394 composite transliterations (TEI P4-style XML, word-level lemmatisation: `<w form= lemma= pos= label=>`; `<l n= id= corresp=>` lines linked to translation paragraphs).
  - `translations/t.*.xml` — English prose translations (`<p n="line-range" corresp=>`).
  - `bibliography/` — consolidated bibliography XML.
  - `tei/` — DTDs.
- `etcsl.xml`, `corphdr.xml`, `etcsl-sux.ent`, `etcsl-extensions.*` — corpus driver file, header, entity declarations (entities are placeholders like `[c]`; real meanings: c=š, j=ĝ, h=ḫ, &X; = "…" / illegible).
- `etcslmanual.html` — encoding manual (read before writing new converters). `etcslfullcat.html` — full catalogue (numbers ↔ titles). `contents.txt`, `readme.txt`.

## Encoding notes (for future conversions)
- ASCII Sumerian: `c`→š, `j`→ĝ, `h`→ḫ (also uppercase in sign names), digits after a sign = index (`du11` → du₁₁).
- Milestones `<damage/>…<damageEnd/>`, `<supplied/>…<suppliedEnd/>`, `<corr resp="scrOm|scrAdd"/>…<corrEnd/>`, `<unclear cert="qry">`, variants via `<addSpan type="primary|secondary|additional" to=…/>` + `<note>` + `<anchor id=…/>` + `<altGrp>`.
- Entities must be pre-substituted before XML parsing (they are not XML-defined). A working converter (`etcsl2md.py`, XML → Markdown) was used for the compositions in `../1.7.4--Flood-Story/` etc.; copy kept at `../../../tools/etcsl2md.py` (run with `python3 -I`).

## Usefulness
High: the complete, lemmatised ETCSL in one 5 MB file, legally reusable (non-commercial). Use with ORACC ePSD2 (`../../ORACC/`) for lemma glosses and for newer manuscript evidence.
