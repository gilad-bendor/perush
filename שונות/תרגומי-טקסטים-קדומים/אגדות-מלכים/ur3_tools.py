"""Ur III kingship (Round 9 run 2, 2026-11-15): projects 12–14 of the legends-of-kings corpus.

Eight ETCSL composites (base, rank 1) + ORACC epsd2/literary lemma + morph (local zip, aligned by content):
  12-מזמורי-שולגי (the long Šulgi hymns):
    SHB  Šulgi B   2.4.2.02  Q000396   annotated-SHB.rtl.md
    SHC  Šulgi C   2.4.2.03  Q000397   annotated-SHC.rtl.md   (segments A–C: labels A1 …)
    SHD  Šulgi D   2.4.2.04  Q000398   annotated-SHD.rtl.md
    SHE  Šulgi E   2.4.2.05  Q000399   annotated-SHE.rtl.md
    SHX  Šulgi X   2.4.2.24  Q000416   annotated-SHX.rtl.md
  13-מות-אור-נמה:
    UN   The Death of Ur-Namma  2.4.1.1  Q000386  annotated-UN.rtl.md  (the Nibru version 1 …, A, B; the Susa version
         S.A1 … S.D…)
  14-רשימת-המלכים-השומרית:
    KL   The Sumerian King List  2.1.1  Q000371  annotated-KL.rtl.md  (1 …, and the single-manuscript lines A–D)
    RL   The Rulers of Lagaš     2.1.2  Q000372  annotated-RL.rtl.md

Built on ../קנון-בית-הטבלה/canon_tools.py (imported: its ETCSL / ORACC machinery, `verify`, `rel`, `tr`, `lexmap`, and
through it ../העולם-התחתון/netherworld_tools.py with the corpus-wide Sumerian gates, traps and formulas). The hymns
take the canon's Psalm gates (RESERVED_C); every key takes this run's gates (RESERVED_U, renderings.md §14.4).
The flood references (../סיפורי-המבול-המסופוטמיים/6-אזכורי-המבול/annotated.rtl.md) hold excerpts of KL (§1, 1–47) and
RL (§4): `verify KL|RL` checks that they are identical to the whole text here (guidelines §1).

Usage (python3 -I -B, from any directory):
  ur3_tools.py verify KEY|all [--strict]   as canon_tools (entries = ETCSL's line list; the backticked line = ETCSL's;
        gates licensed by the transliteration + the ORACC lemma line; traps; formulas; translation = `>` lines), and
        for KL / RL the flood-references excerpt check.
  ur3_tools.py build [12|13|14]            each project's translation.rtl.md; then verify.
  ur3_tools.py lines KEY FROM TO           the base lines with the ORACC lemma + morph (the translator's data).
  ur3_tools.py tr KEY FROM TO              ETCSL's English paragraphs for these lines (rank 3: AFTER drafting).
  ur3_tools.py skel KEY                    write the skeleton annotated-KEY.rtl.md (once; never over a drafted file).
  ur3_tools.py rel KEY FROM TO [--min R]   near-identical lines already translated anywhere in the folder.
  ur3_tools.py excerpt KL|RL               the flood references' excerpt beside the lines here.
  ur3_tools.py grep all|KEY '<regex>'      `>` lines (niqqud stripped) of these keys.
  ur3_tools.py lexmap [KEY…]               lemma ↔ Hebrew from the פירוק bullets.
"""
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
_spec = importlib.util.spec_from_file_location('canon_tools', os.path.join(ROOT, 'קנון-בית-הטבלה', 'canon_tools.py'))
ct = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(ct)
nw = ct.nw
B, E, P = nw.B, nw.E, nw.P

P12, P13, P14 = '12-מזמורי-שולגי', '13-מות-אור-נמה', '14-רשימת-המלכים-השומרית'
TEXTS = {
    'SHB': dict(d=P12, name='Šulgi B', no='2.4.2.02', slug='Shulgi-B', q='Q000396'),
    'SHC': dict(d=P12, name='Šulgi C', no='2.4.2.03', slug='Shulgi-C', q='Q000397'),
    'SHD': dict(d=P12, name='Šulgi D', no='2.4.2.04', slug='Shulgi-D', q='Q000398'),
    'SHE': dict(d=P12, name='Šulgi E', no='2.4.2.05', slug='Shulgi-E', q='Q000399'),
    'SHX': dict(d=P12, name='Šulgi X', no='2.4.2.24', slug='Shulgi-X', q='Q000416'),
    'UN': dict(d=P13, name='The Death of Ur-Namma', no='2.4.1.1', slug='Death-of-Ur-Namma', q='Q000386',
               versions=[('A version from Nibru', ''), ('A version from Susa', 'S.')]),
    'KL': dict(d=P14, name='The Sumerian King List', no='2.1.1', slug='Sumerian-King-List', q='Q000371', excerpt='1.'),
    'RL': dict(d=P14, name='The Rulers of Lagaš', no='2.1.2', slug='Rulers-of-Lagash', q='Q000372', excerpt='4.'),
}
ORDER = {P12: ['SHB', 'SHC', 'SHD', 'SHE', 'SHX'], P13: ['UN'], P14: ['KL', 'RL']}
KEYS = [k for d in (P12, P13, P14) for k in ORDER[d]]
HYMNS = ['SHB', 'SHC', 'SHD', 'SHE', 'SHX']
FLOOD_REF = os.path.join(ROOT, 'סיפורי-המבול-המסופוטמיים', '6-אזכורי-המבול', 'annotated.rtl.md')

for _k, _t in TEXTS.items():
    _t['p'] = os.path.relpath(os.path.join(HERE, _t['d']), ct.HERE)   # canon_tools joins its own HERE with 'p'
    _t['etcsl'] = f'ETCSL/{_t["no"]}--{_t["slug"]}/transliteration.md'
    _t['etr'] = f'ETCSL/{_t["no"]}--{_t["slug"]}/translation.md'
    _t['oracc'] = f'ORACC/epsd2-literary--{_t["q"]}--{_t["slug"]}/{_t["q"]}--lemmatised-morph.md'
    ct.TEXTS[_k] = _t

# This run's gates (renderings.md §14.4). Genesis 5 / 10–11 (the genealogies, the first kingdom, the long lives),
# the royal Psalms and 1 Kings (Solomon's wisdom; Elijah's run), the Song of Songs (Šulgi X), the burial and Sheol.
RESERVED_U = {
    B + P + r'(תולדות|תולדותיו|תולדותם)' + E: [],
    B + P + r'(ויחי|ויולד|ויולדו|הוליד|הולידה|הולידו|יוליד)' + E: [],
    B + P + r'(ממלכה|ממלכת|ממלכתו|ממלכות|ממלכתה)' + E: [],
    B + P + r'(ציד|צייד|ציידים)' + E: [r'\bmaš-da|\bdu₁₁-ga|ur₃-ra|\bmu-lu₂ ur₃|ḫuš?\[hunt|\bkur₉\b'],
    B + P + r'(אחר המבול|אחרי המבול)' + E: [r'a-ma-ru\b|a-ma-ru-'],
    B + P + r'(מבול|המבול)' + E: [r'a-ma-ru|amaru'],
    B + P + r'(דודי|דודים|רעיתי|רעיה|חתן|חתני)' + E: [r'\bdam\b|dam-|\bdam\[|ama₅|e₂-gi₄-a|nitalam|mu-ud-na|\bmud-na'],
    B + P + r'(קבר|קברו|קברה|קבורה|נקבר|קברוהו|נקברו)' + E: [r'ki-mu-ra|ki-maḫ|\bki\.mah|ki-ma-aḫ|ki-maḫ\['],
    B + P + r'(מלאך|מלאכי|מלאכים)' + E: [],
    B + P + r'(נביא|נביאים|נבואה|ניבא)' + E: [],
}
for _k in KEYS:
    ct.nw.RESERVED_KEY[_k] = (ct.RESERVED_C if _k in HYMNS else {}) | RESERVED_U
    ct.nw.TRAPS_KEY[_k] = dict(ct.TRAPS_C) | {
        'אורנמה': ('Ur-Namma (אוּר־נַמָּה)', r'ur-{d}namma|ur-namma'),
        'אור־נמה': ('Ur-Namma (אוּר־נַמָּה)', r'ur-{d}namma|ur-namma'),
    }

# Gate licences for names (KL1, 2026-11-15): Meš-Ane-pada (*pad₃*) is not `פדה`; Būr-Suen is not `בור` "pit".
for _k in list(nw.RESERVED):
    if 'פדה' in _k:
        nw.RESERVED[_k] = nw.RESERVED[_k] + [r'-pad₃|-pa₃-da|-pad\b']
    if '(גן|גנה' in _k:   # the canal name *gana₂-ḫi-li-an-na* (RL 148): *gana₂* "field" is not `גן`
        nw.RESERVED[_k] = nw.RESERVED[_k] + [r'gana₂']
    if _k == B + P + r'בור' + E or '(בור|' in _k:
        nw.RESERVED[_k] = nw.RESERVED[_k] + [r'bur-\{d\}suen|bur-\{d\}sin|bur-\{d\}zu']


def _names_only(heb):
    """A line of names (every Hebrew token vocalized, at most four tokens: KL's 'Dagan', 'Ur-Namma' lines) may be
    vocalized whole: the first occurrence of each name is vocalized by the rules."""
    toks = [t for t in re.split(r'[\s־]+', re.sub(r'[\[\](),.;:!?–"]', ' ', heb)) if re.search(r'[א-ת]', t)]
    return 0 < len(re.split(r'\s+', heb.strip())) <= 4 and all(re.search(r'[ְ-ׇ]', t) for t in toks)


ct.VOC_EXEMPT = _names_only

_gate_view = ct.gate_view


def gate_view(heb):
    """canon_tools.gate_view, and the verb `שבר` "break" (`שבור`, `לשבור`, `נשבור` …) is not ש / ל + `בור` "pit"
    (SH1, 2026-11-15)."""
    heb = re.sub(r'(?<![א-ת])(ו?[לנמ]?)ש(בור|בורה|בורים)(?![א-ת])', lambda m: m.group(1) + 'שבר', _gate_view(heb))
    return heb


ct.gate_view = gate_view

_ct_etcsl = ct.etcsl_lines


def etcsl_lines(rel, versions=None):
    """canon_tools.etcsl_lines, plus ETCSL's single-manuscript alternative lines labelled with a capital letter
    (`A. …`: KL A–D, UN A–B) as entries of their own, placed where ETCSL has them."""
    out, seg, pre = [], '', ''
    for ln in open(os.path.join(ct.SRC, rel), encoding='utf-8'):
        ln = ln.rstrip('\n')
        if versions and re.match(r'^\*\*[^*]+\*\*\s*$', ln):
            for sub, p in versions:
                if sub in ln:
                    pre, seg = p, ''
            continue
        m = re.match(r'^## Segment (\w+)', ln)
        if m:
            seg = m.group(1)
            continue
        m = re.match(r'^(\d+[A-Za-z]*(?:-\d+)?)\. (.*?)\s*$', ln) or re.match(r'^([A-Z])\. (.*?)\s*$', ln)
        if m:
            out.append((pre + seg + m.group(1), m.group(2)))
    return out


ct.etcsl_lines = etcsl_lines


def paths(key):
    return [os.path.join(HERE, TEXTS[key]['d'], f'annotated-{key}.rtl.md')]


def excerpt_entries(sec):
    """[(label, transliteration, `>` line)] of the flood references' section `## <sec>`."""
    out, on, cur = [], False, None
    for ln in open(FLOOD_REF, encoding='utf-8'):
        ln = ln.rstrip('\n')
        if ln.startswith('## '):
            on, cur = ln.startswith('## ' + sec), None
            continue
        m = re.match(r'^### (\S+)\s*$', ln)
        if on and m:
            cur = [m.group(1), '', None]
            out.append(cur)
        elif on and cur and ln.startswith('`') and not cur[1]:
            cur[1] = ln.strip().strip('`')
        elif on and cur and ln.startswith('> ') and cur[2] is None:
            cur[2] = ln[2:].rstrip()
    return out


def check_excerpt(key, strict):
    problems, notes = [], []
    order, ent = nw.parse_annotated([p for p in paths(key) if os.path.exists(p)], [])
    for lab, t, h in excerpt_entries(TEXTS[key]['excerpt']):
        if lab not in ent or not ent[lab]['heb'] or 'טרם תורגם' in ent[lab]['heb'][0]:
            (problems if strict else notes).append(f'excerpt {lab}: not yet drafted here')
            continue
        mine = ent[lab]['heb'][0]
        if not nw.same_heb(h or '', mine):
            problems.append(f'excerpt {lab}: the flood references differ:\n    F: {h}\n    H: {mine}')
    print(f'{key} excerpt in the flood references: ' + ('OK' if not problems else f'{len(problems)} problem(s)'))
    for p in problems:
        print('  - ' + p)
    for n in notes[:5]:
        print('  · ' + n)
    if len(notes) > 5:
        print(f'  · … {len(notes) - 5} more')
    return not problems


def verify(key, strict=False):
    ok = ct.verify(key, strict)
    if TEXTS[key].get('excerpt'):
        ok = check_excerpt(key, strict) and ok
    return ok


def build(which=None):
    ok = True
    for d in (P12, P13, P14):
        if which and not d.startswith(which):
            continue
        Pd = os.path.join(HERE, d)
        head = ('<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../ur3_tools.py build from translation--intro.rtl.md, '
                'translation--intro-<KEY>.rtl.md and the annotated `>` lines\n(section headings = the annotated `## ` '
                'lines; footnotes = the `הערת שוליים` bullets). To change the text, edit the annotated files and rebuild.\n'
                '-->\n\n')
        parts = [open(os.path.join(Pd, 'translation--intro.rtl.md'), encoding='utf-8').read().rstrip('\n')]
        notes, n = [], 0
        for key in ORDER[d]:
            ap = [p for p in paths(key) if os.path.exists(p)]
            if not ap:
                continue
            ip = os.path.join(Pd, f'translation--intro-{key}.rtl.md')
            intro = open(ip, encoding='utf-8').read().rstrip('\n') if os.path.exists(ip) else f'# {TEXTS[key]["name"]}'
            out = [f'<!-- text: {key} -->', intro]
            order, ent = nw.parse_annotated(ap, [])
            for kind, v in nw.sections(ap):
                if kind == 'h':
                    out.append(f'\n### {re.sub(r"^[0-9A-Za-z.+]+(?:[–-][0-9A-Za-z.+]+)?: ", "", v)}\n')
                else:
                    e = ent[v]
                    ref = ''
                    if e['fn']:
                        n += 1
                        ref = f'[^{n}]'
                        notes.append(f'[^{n}]: {e["fn"]}')
                    out.append(f'**{v}** {e["heb"][0]}{ref}  ')
            parts.append('\n'.join(out))
        text = head + '\n\n'.join(parts) + '\n' + ('\n---\n\n' + '\n\n'.join(notes) + '\n' if notes else '')
        open(os.path.join(Pd, 'translation.rtl.md'), 'w', encoding='utf-8').write(text)
        print(f'{d}/translation.rtl.md written, {n} footnotes')
        ok = all([verify(k) for k in ORDER[d]]) and ok
    return ok


def skel(key):
    p = paths(key)[0]
    if os.path.exists(p) and any(l.startswith('> ') and 'טרם תורגם' not in l for l in open(p, encoding='utf-8')):
        sys.exit(f'{os.path.basename(p)} has drafted lines: not overwritten')
    out = [f'# {TEXTS[key]["name"]} – תרגום מוער\n\n(הכותרות `## ` והפסקאות: המתרגם.)\n\n---\n']
    for lab, t, _ in ct.source(key):
        out.append(f'### {lab}\n`{t}`\n> טרם תורגם\n')
    open(p, 'w', encoding='utf-8').write('\n'.join(out))
    print(f'{os.path.basename(p)}: {len(ct.source(key))} entries')


def tr(key, a, b):
    """ETCSL's English paragraphs covering the labels a..b (by the paragraph's line span; segment / version prefixes
    and the letter-only alternative lines are read by their neighbours' numbers)."""
    src = ct.source(key)
    labels = [x[0] for x in src]
    i, j = labels.index(a), labels.index(b)
    def num(k):
        for lab in labels[k::-1]:
            m = re.search(r'(\d+)', lab.split('.')[-1])
            if m:
                return int(m.group(1))
        return 1
    lo, hi = num(i), num(j)
    for ln in open(os.path.join(ct.SRC, TEXTS[key]['etr']), encoding='utf-8'):
        m = re.match(r'^\*?\*?[A-Z]?(\d+)[A-Za-z]*(?:[-–][A-Z]?(\d+)[A-Za-z]*)?\.?\*?\*?', ln.strip())
        if m:
            s_, e_ = int(m.group(1)), int(m.group(2) or m.group(1))
            if e_ >= lo and s_ <= hi:
                print(ln.rstrip())


def excerpt(key):
    src = dict((l, t) for l, t, _ in ct.source(key))
    order, ent = nw.parse_annotated([p for p in paths(key) if os.path.exists(p)], [])
    for lab, t, h in excerpt_entries(TEXTS[key]['excerpt']):
        print(f'### {lab}  `{src.get(lab, "?")}`\n    F: {h}')
        if lab in ent and ent[lab]['heb']:
            print(f'    H: {ent[lab]["heb"][0]}')


def grep(key, pat):
    rx = re.compile(pat)
    for k in (KEYS if key == 'all' else [key]):
        for p in paths(k):
            if not os.path.exists(p):
                continue
            order, ent = nw.parse_annotated([p], [])
            for lab in order:
                for h in ent[lab]['heb']:
                    if rx.search(nw.strip(h)):
                        print(f'{k} {lab}: {h}   ‹{ent[lab]["tr"][0] if ent[lab]["tr"] else ""}›')


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    ct.paths = paths   # canon_tools.verify / rel / lexmap read the annotated files through paths()
    if a[0] == 'verify' and len(a) > 1:
        keys = KEYS if a[1] == 'all' else [a[1]]
        sys.exit(0 if all([verify(k, '--strict' in a) for k in keys]) else 1)
    if a[0] == 'build':
        sys.exit(0 if build(a[1] if len(a) > 1 else None) else 1)
    if a[0] == 'lines' and len(a) > 3:
        return ct.lines(a[1], a[2], a[3])
    if a[0] == 'tr' and len(a) > 3:
        return tr(a[1], a[2], a[3])
    if a[0] == 'skel' and len(a) > 1:
        return skel(a[1])
    if a[0] == 'rel' and len(a) > 3:
        m = float(a[a.index('--min') + 1]) if '--min' in a else 0.6
        return ct.rel(a[1], a[2], a[3], m)
    if a[0] == 'excerpt' and len(a) > 1:
        return excerpt(a[1])
    if a[0] == 'grep' and len(a) > 2:
        return grep(a[1], a[2])
    if a[0] == 'lexmap':
        return ct.lexmap(a[1:] or KEYS)
    sys.exit(__doc__)


if __name__ == '__main__':
    main()
