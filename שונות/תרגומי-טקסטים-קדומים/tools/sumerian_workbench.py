"""Sumerian workbench: lemmas, morphology and concordances for translating an ETCSL composite.

Written 2026-10-19 (creation corpus project 3) from the throw-away scripts of project 2 (lem.py, buildidx.py, q.py,
conc.py, gl.py; see guidelines §5, "When ORACC has no text, build a form index").
Reads only local data: the ETCSL bulk corpus (sources/ETCSL/_bulk/etcsl-unzipped/etcsl/) and the ORACC
epsd2-literary zip (sources/ORACC/_bulk/epsd2-literary.zip). Run with `python3 -I`.

Usage (paths relative to the folder שונות/תרגומי-טקסטים-קדומים/, or absolute):
  python3 -I tools/sumerian_workbench.py lemmas <c.N.xml> [FROM[-TO]]
        per ETCSL line: label, then every word as  form=lemma[label]POS  (ETCSL's own TEI lemmatisation).
  python3 -I tools/sumerian_workbench.py morph <form-or-regex> [--max N]
        every ORACC epsd2-literary instance of a written form (ETCSL-style or ORACC-style spelling;
        ĝ/ŋ and h/ḫ are equated, subscripts may be written as digits): cf[gw]POS {morph;base}  text.line
        The first call builds a cache (sources/ORACC/_bulk/epsd2-literary--form-index.json, gitignored, ~1 min).
  python3 -I tools/sumerian_workbench.py line <c.N.xml> FROM[-TO]
        ETCSL lemmas of each line AND, for each verbal form, its ORACC morph if the form is attested elsewhere
        (marked "ORACC:"), else "(no parsed instance: our analysis)".
  python3 -I tools/sumerian_workbench.py conc <regex> [--lemma] [--max N]
        concordance of the whole ETCSL corpus: every line whose Unicode transliteration (or, with --lemma,
        whose sequence of lemmas) matches the regex, with text number and line label; for formulas.
  python3 -I tools/sumerian_workbench.py gloss <regex> [--max N]
        ePSD2 glossary (gloss-sux.json inside the zip): citation forms / guide words / senses matching the regex.
"""
import importlib.util
import json
import os
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ETCSL = os.path.join(ROOT, 'sources', 'ETCSL', '_bulk', 'etcsl-unzipped', 'etcsl', 'transliterations')
OZIP = os.path.join(ROOT, 'sources', 'ORACC', '_bulk', 'epsd2-literary.zip')
CACHE = os.path.join(ROOT, 'sources', 'ORACC', '_bulk', 'epsd2-literary--form-index.json')

# reuse etcsl2md.sux (ETCSL ASCII -> Unicode); etcsl2md.py calls main() at top level, so exec it without that call
_E2M = {}
exec(compile(re.sub(r'\nmain\(\)\s*$', '\n', open(os.path.join(HERE, 'etcsl2md.py'), encoding='utf-8').read()),
             'etcsl2md.py', 'exec'), _E2M)
sux = _E2M['sux']
SUBR = str.maketrans('₀₁₂₃₄₅₆₇₈₉ₓ', '0123456789x')


def key(form):
    """Normalise a written form for lookup: no brackets/damage marks, ŋ=ĝ, subscripts→digits, lower case."""
    f = form.replace('ŋ', 'ĝ').replace('Ŋ', 'Ĝ').translate(SUBR)
    f = re.sub(r'[\[\]⸢⸣?!<>«»⟨⟩#*]', '', f)
    return f.lower()


def parse_etcsl(path):
    """Yield (label, words) per <l>; words = list of (form_unicode, lemma, label, pos)."""
    raw = open(path, encoding='utf-8').read()
    raw = re.sub(r'<!DOCTYPE[^>]*(\[[^\]]*\])?>', '', raw, flags=re.S)
    raw = re.sub(r'&([A-Za-z0-9]+);', lambda m: {'amp': '&amp;', 'lt': '&lt;', 'gt': '&gt;'}.get(m.group(1), ''), raw)
    root = ET.fromstring(raw)
    for l in root.iter('l'):
        ws = []
        for w in l.iter('w'):
            form = w.get('form') or ''
            ws.append((sux(form), w.get('lemma') or '', w.get('label') or '', w.get('pos') or ''))
        yield l.get('n'), ws


def rng(spec, labels):
    if not spec:
        return labels
    a, _, b = spec.partition('-')
    b = b or a
    if a not in labels or b not in labels:
        sys.exit(f'line {a} or {b} not in the text')
    return labels[labels.index(a):labels.index(b) + 1]


def load_index():
    if os.path.exists(CACHE):
        return json.load(open(CACHE, encoding='utf-8'))
    print('building the ORACC form index (once)…', file=sys.stderr)
    z = zipfile.ZipFile(OZIP)
    idx = defaultdict(list)

    def walk(n, q):
        if isinstance(n, dict):
            if n.get('node') == 'l' and 'f' in n:
                f = n['f']
                ref = n.get('ref', '')
                lab = ref.split('.', 1)[1] if '.' in ref else ref
                idx[key(f.get('form', ''))].append([f.get('cf', ''), f.get('gw', ''), f.get('pos', ''),
                                                    f.get('morph', ''), f.get('base', ''), q, lab])
                return
            for v in n.values():
                walk(v, q)
        elif isinstance(n, list):
            for v in n:
                walk(v, q)

    for name in z.namelist():
        if '/corpusjson/' in name and name.endswith('.json'):
            try:
                d = json.loads(z.read(name))
            except Exception:
                continue
            walk(d, os.path.basename(name)[:-5])
    json.dump(idx, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False)
    return idx


def fmt(inst):
    cf, gw, pos, morph, base, q, lab = inst
    return f'{cf}[{gw}]{pos} {{{morph};{base}}}  {q}.{lab}'


def cmd_morph(pat, mx=25):
    idx = load_index()
    k = key(pat)
    hits = idx.get(k)
    if hits is None:
        rx = re.compile(k)
        hits = [i for f, v in idx.items() if rx.fullmatch(f) for i in v]
    c = Counter(fmt(h).split('  ')[0] for h in hits)
    print(f'{pat}: {len(hits)} instance(s)')
    for a, n in c.most_common(mx):
        ex = next(h for h in hits if fmt(h).startswith(a))
        print(f'  {n:4d}× {a}   e.g. {ex[5]}.{ex[6]}')


def cmd_lemmas(path, spec, with_morph=False):
    lines = list(parse_etcsl(path))
    labs = [l for l, _ in lines]
    want = set(rng(spec, labs))
    idx = load_index() if with_morph else None
    for lab, ws in lines:
        if lab not in want:
            continue
        print(f'{lab}. ' + ' '.join(f'{f}={lm}[{lb}]{p}' for f, lm, lb, p in ws))
        if with_morph:
            for f, lm, lb, p in ws:
                if p != 'V' or f in ('X', ''):
                    continue
                hits = idx.get(key(f), [])
                if hits:
                    c = Counter(fmt(h).split('  ')[0] for h in hits)
                    a, n = c.most_common(1)[0]
                    print(f'      {f}: ORACC: {a} ({n}× of {len(hits)})')
                else:
                    print(f'      {f}: (no parsed instance: our analysis)')


def cmd_conc(pat, lemma=False, mx=60):
    rx = re.compile(pat)
    n = 0
    for fn in sorted(os.listdir(ETCSL)):
        if not fn.startswith('c.') or not fn.endswith('.xml'):
            continue
        try:
            lines = list(parse_etcsl(os.path.join(ETCSL, fn)))
        except ET.ParseError:
            continue
        for lab, ws in lines:
            s = ' '.join(lm for _, lm, _, _ in ws) if lemma else ' '.join(f for f, _, _, _ in ws)
            if rx.search(s):
                print(f'{fn[2:-4]:10s} {lab:6s} {" ".join(f for f, _, _, _ in ws)}')
                n += 1
                if n >= mx:
                    print('… (more; raise --max)')
                    return


def cmd_gloss(pat, mx=30):
    z = zipfile.ZipFile(OZIP)
    d = json.loads(z.read('epsd2/literary/gloss-sux.json'))
    rx = re.compile(pat, re.I)
    n = 0
    for e in d.get('entries', []):
        s = f"{e.get('cf', '')}[{e.get('gw', '')}]{e.get('pos', '')}"
        senses = '; '.join(x.get('mng', '') for x in e.get('senses', []))
        if rx.search(s) or rx.search(senses):
            print(f'{s}  senses: {senses}  icount={e.get("icount", "")}')
            n += 1
            if n >= mx:
                return


def opt(args, name, default):
    if name in args:
        i = args.index(name)
        v = args[i + 1]
        del args[i:i + 2]
        return int(v)
    return default


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    mx = opt(a, '--max', None)
    c = a[0]
    if c == 'lemmas':
        cmd_lemmas(a[1], a[2] if len(a) > 2 else None)
    elif c == 'line':
        cmd_lemmas(a[1], a[2], with_morph=True)
    elif c == 'morph':
        cmd_morph(a[1], mx or 25)
    elif c == 'conc':
        cmd_conc(a[1], '--lemma' in a, mx or 60)
    elif c == 'gloss':
        cmd_gloss(a[1], mx or 30)
    else:
        sys.exit(__doc__)


if __name__ == '__main__':
    main()
