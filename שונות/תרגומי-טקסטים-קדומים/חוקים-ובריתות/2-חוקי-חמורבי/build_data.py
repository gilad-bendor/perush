# Build the translators' data files for the Laws of Hammurabi: one Markdown file per annotated file (lh_config.FILES),
# with, for every composite line: the label, the law (§), the stele reference and the stele's own transliteration
# where it differs, the CDLI transliteration, the CDLI normalization (ts), SEAL's transliteration and lemmas
# (prologue and epilogue), and the CDLI English (rank 3: read AFTER forming your own reading).
# usage: python3 -I build_data.py <out-dir>        (out-dir: a scratch directory; the data files are not committed)
# Written 2026-10-17 for חוקים-ובריתות/2-חוקי-חמורבי.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lh_config as C

out = sys.argv[1]
os.makedirs(out, exist_ok=True)
L = C.align_stele(C.parse_composite())
seal, seal_tr = C.parse_seal()
for f in C.FILES:
    num, slug, a, b, title = f
    rows = [x for x in L if C.lineno_key(a) <= C.lineno_key(x['n']) <= C.lineno_key(b)]
    o = [f'# Data for annotated-{num}--{slug}.rtl.md: {title} (composite lines {a}–{b}, {len(rows)} lines)', '',
         'Per line: `### <composite line>` · law · stele ref · `A:` CDLI transliteration · `S:` stele transliteration where it differs '
         '(damage `#`, `[ ]` on the stele: the composite fills these from duplicates) · `N:` CDLI normalization · '
         '`SEAL:` SEAL 7520 transliteration and `lem:` its lemmas (prologue/epilogue only) · `EN:` CDLI English (rank 3).', '']
    law = None
    for x in rows:
        if x['law'] != law:
            law = x['law']
            o += ['', f"## § {law}" if law else f"## {x['section']}", '']
        for n in x['notes']:
            o.append(f'_{n}_')
        o.append(f"### {x['n']}  ({x.get('stele', 'stele: –')})")
        o.append(f"A: `{x['atf']}`")
        if x.get('stele_atf'):
            o.append(f"S: `{x['stele_atf']}`")
        o.append(f"N: `{x['ts']}`")
        k = C.seal_key(x)
        if k and k in seal and (x['section'] in ('prologue', 'epilogue')):
            o.append(f"SEAL {k[0]} {k[1]}: {seal[k]['atf']}")
            o.append(f"lem: {seal[k]['lemmas']}")
        o.append(f"EN: {x['en']}")
    if slug.startswith('prologue') or slug.startswith('epilogue'):
        o += ['', '---', '', '## SEAL 7520: Streck\'s English translation (rank 3; whole text, numbered by stele column and line)', '', seal_tr.strip()]
    open(os.path.join(out, f'data-{num}--{slug}.md'), 'w', encoding='utf-8').write('\n'.join(o) + '\n')
    print(num, slug, len(rows))
