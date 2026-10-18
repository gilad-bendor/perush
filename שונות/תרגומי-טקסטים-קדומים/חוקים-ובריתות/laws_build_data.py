# Build the translators' data files for projects 3-6 of the law corpus (laws_config.PROJECTS: LE, MAL, LI, UN):
# one Markdown file per annotated file, with, for every line of the base text: the label, the law (§), the
# transliteration, the normalization (CDLI `#tr.ts` for LE; ORACC `norm` + lemmas for MAL; none for the Sumerian
# composites), every exemplar's own line that CDLI links to it (LE, LI, UN), CDLI's notes, and the rank-3 English
# (CDLI per line; de Ridder 2021 per law for MAL, printed at the END of each law): read it AFTER your own reading.
# usage: python3 -I laws_build_data.py <KEY> <out-dir>        (out-dir: a scratch directory; not committed)
# Written 2026-10-18.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import laws_config as C

key, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
P = C.PROJECTS[key]
L = C.parse(key)
for f in C.files(key, L):
    num, slug, a, b, title = f
    rows = C.rows_of(L, a, b)
    o = [f'# Data for {P["folder"]}/annotated-{num}--{slug}.rtl.md: {title} ({a} – {b}, {len(rows)} lines)', '',
         'Per line: `### <label>` · `A:` composite transliteration · `N:` normalization (CDLI `ts`, or ORACC `norm`; '
         'it has slips: translate the transliteration) · `lem:` ORACC lemmas (MAL) · `W <siglum> <ref>:` an exemplar\'s own line '
         'linked by CDLI to this composite line · `#`/`$` CDLI notes · `EN:` rank-3 English (read only after your own reading).', '']
    if key == 'LE' or key in ('LI', 'UN'):
        o += ['Exemplars: ' + '; '.join(f'{s} = {m} ({p})' for s, m, p, _ in C.cdli_witnesses(P)), '']
    law = 'start'; pend_en = None
    for x in rows:
        if (x['law'], x['section']) != law:
            if pend_en:
                o += ['', f'EN (de Ridder 2021, whole §; rank 3): {pend_en}', '']
                pend_en = None
            law = (x['law'], x['section'])
            o += ['', f"## § {x['law']}" if x['law'] else f"## {x['section']}", '']
        for n in x['notes']:
            o.append(f'_{n}_')
        o.append(f"### {x['n']}")
        o.append(f"A: `{x['atf']}`")
        if x['ts']:
            o.append(f"N: `{x['ts']}`")
        if x.get('lem'):
            o.append(f"lem: {x['lem']}")
        for sig, ref, atf in x['wit']:
            o.append(f"W {sig} {ref}: `{atf}`")
        if key == 'MAL':
            if x['en']:
                pend_en = x['en']
        elif x['en']:
            o.append(f"EN: {x['en']}")
    if pend_en:
        o += ['', f'EN (de Ridder 2021, whole §; rank 3): {pend_en}', '']
    fn = os.path.join(out, f'data-{key}-{num}--{slug}.md')
    open(fn, 'w', encoding='utf-8').write('\n'.join(o) + '\n')
    print(fn, len(rows))
