"""Build the Unas composite (composite-UN.tsv): one row per Allen 2013 line of each Unas wall occurrence, cut from AED words.

Round 8 run 1 (2026-11-13). Not needed to translate or verify (egypt_tools.py reads the committed composite-UN.tsv); kept
to document and redo the composite. Inputs (all scratch, re-made from the web):
  AED_PT_DIR   every AED-TEI record of the TLA's Pyramid Texts corpus (1,378 `bbawpyramidentexte` ids from the AED
               repository's concordance_name_text_id.csv, fetched from raw.githubusercontent.com)
  ptindex.tsv  one row per record: king, title, wall, id, <lb> count, words, first and last <lb> (a scan of AED_PT_DIR)
  wocc.tsv     Allen 2013 vol. I, "Occurrences": every Unas (W) occurrence, spell and wall code with Sethe's column numbers
  allen_n.json Allen 2013 vol. I, "Transcription": each spell's numbered lines (n, Pyr. §, the variants) – © Allen,
               consulted, never committed
Method: for each Unas occurrence (in wall order), the AED record of the same spell is chosen – Unas's own record of that
wall position first, then another Unas copy of the spell, then the earliest later pyramid whose copy matches well
(Teti, Pepi I, Merenre, Pepi II; a damaged copy only when no better one exists); its words are cut at Allen's line
boundaries by a character alignment of normalized transliterations (difflib). Spells AED lacks or holds only in a copy
that does not match are marked A (read from Allen's transcription, consulted locally).
usage: python3 -I make_composite.py AED_PT_DIR ptindex.tsv wocc.tsv allen_n.json OUT.tsv"""
import sys, re, json, difflib, os
sys.path.insert(0, '/home/user/perush/שונות/תרגומי-טקסטים-קדומים/tools')
import aed2md
D, IDX, OCC, AL, OUT = sys.argv[1:6]
A = json.load(open(AL, encoding='utf-8'))['spells']

def nk(k):
    k = k.replace('-', '–').replace(' ', '')
    m = re.match(r'^(\d+)–(\d+)$', k)
    if m and len(m.group(2)) < len(m.group(1)):
        k = m.group(1) + '–' + m.group(1)[:len(m.group(1)) - len(m.group(2))] + m.group(2)
    return k

def nums(k):
    m = re.match(r'^(\d+)–(\d+)$', k)
    if m: return set(range(int(m.group(1)), int(m.group(2)) + 1))
    return {int(x) for x in re.findall(r'\d+', k)}

recs = []
for l in open(IDX, encoding='utf-8'):
    king, t, ms, tid, lb, w, a, b = l.rstrip('\n').split('\t')
    ns = set()
    for x, y in re.findall(r'PT (\d+)(?:\s*[-–]\s*(\d+))?', t):
        ns |= set(range(int(x), int(y) + 1)) if y and int(y) > int(x) and int(y) - int(x) < 10 else {int(x)}
    if not king and re.fullmatch(r'\d+a?', a or '') and int(re.match(r'\d+', a).group()) < 650:
        king = 'Unas'
    if not ns: continue
    recs.append(dict(king=king, title=t, ms=ms, tid=tid, nlb=int(lb), nw=int(w), a=a, b=b, nums=ns))
SIG = {'Unas': 'W', 'Teti': 'T', 'Pepi I.': 'P', 'Merenre': 'M', 'Pepi II.': 'N', '8. Dyn.': 'Ib'}
PREF = ['Unas', 'Teti', 'Pepi I.', 'Merenre', 'Pepi II.']

occ = []
seen204 = 0
for l in open(OCC, encoding='utf-8'):
    k, _, s = l.rstrip('\n').split('\t')
    k = nk(k)
    if k == '204':
        seen204 += 1
        if seen204 == 2: k = '205'
    if k == '23': k = '23–24'
    rng = [(int(x), int(y) if y else int(x)) for x, y in re.findall(r'\((\d+)(?:–(\d+))?\)', s)]
    loc = re.match(r'W (\S+(?: [ivx]+)?)', s).group(1)
    occ.append(dict(key=k, loc=loc, cols=rng, s=s))

occ.sort(key=lambda o: (o['cols'][0][0], o['cols'][0][1]))
_P = {}
def words_of(tid):
    if tid not in _P:
        t = open(os.path.join(D, tid + '.xml'), encoding='utf-8').read()
        body = t[t.index('<body>'):]
        ws, lb, cur = [], '?', None
        for m in aed2md.TOK.finditer(body):
            l, sid, wid, lem, inner = m.groups()
            if l is not None:
                lb = l.strip('[]').split('=')[0].strip(); continue
            if sid:
                cur = sid; continue
            if wid is None:
                ws.append(dict(id='', surf='[…]', lemma='', feats='gap', gloss='', lb=lb, sent=cur)); continue
            surf, feats = aed2md._surface(inner)
            ws.append(dict(id=wid, surf=surf, lemma=lem, feats=feats, gloss='', lb=lb, sent=cur))
        _P[tid] = ws
    return _P[tid]

def snap(ws, m):
    """A boundary between consecutive lines never leaves a suffix pronoun (`=k`) at the start of a line: it moves to
    the previous line. A line of a single short word left between two lines (a particle that belongs to the next line,
    as PT 215's `n` of `n nṯr`) joins the next line."""
    lis = sorted(m)
    for a, b in zip(lis, lis[1:]):
        i0, j0 = m[a]; i1, j1 = m[b]
        nb = j0
        while nb < j1 - 1 and ws[nb]['surf'].lstrip('[⸢(').startswith('='):
            nb += 1
        m[a] = (i0, nb); m[b] = (nb, j1)
    for a, b in zip(lis, lis[1:]):
        i0, j0 = m[a]; i1, j1 = m[b]
        if j0 - i0 == 1 and len(re.sub(r'[^a-zꜣꜥḥḫẖšṯḏ]', '', ws[i0]['surf'])) <= 1 and a != lis[0]:
            m[a] = (i0, i0); m[b] = (i0, j1)
    return {k: v for k, v in m.items() if v[1] > v[0]}

TR = str.maketrans({'Ʒ': 'A', 'ꜣ': 'A', 'Ƹ': 'E', 'ꜥ': 'E', 'ḩ': 'X', 'ẖ': 'X', 'ḫ': 'K', 'ḥ': 'H', 'ḏ': 'D', 'ṯ': 'T', 'š': 'S', 'q': 'q', 'ı': 'i', 'z': 's'})
def norm(t):
    t = t.replace('i̯', '').replace('u̯', '').replace('NN', '#')
    t = t.translate(TR)
    return re.sub(r'[^A-Za-z#0-9]', '', t).lower().replace('y', 'j')

def anorm(w):
    if 'kings_name' in w['feats']: return '#'
    if w['feats'] == 'gap': return ''
    return norm(re.sub(r'\{[^}]*\}', '', w['surf']))

def lost_frac(ws):
    n = sum(1 for w in ws if w['feats'] == 'gap' or re.fullmatch(r'\[.*\]\??', w['surf']))
    return n / max(1, len(ws))

def align(ws, lines):
    """ws: AED words; lines: [(n, text)] -> {n: (i, j)} contiguous word ranges, plus match score."""
    a_chars, a_map = [], []
    for i, w in enumerate(ws):
        for c in anorm(w): a_chars.append(c); a_map.append(i)
    b_chars, b_map = [], []
    for li, (n, t) in enumerate(lines):
        for c in norm(t): b_chars.append(c); b_map.append(li)
    sm = difflib.SequenceMatcher(None, a_chars, b_chars, autojunk=False)
    votes = {}
    matched = 0
    for blk in sm.get_matching_blocks():
        for d in range(blk.size):
            wi = a_map[blk.a + d]; li = b_map[blk.b + d]
            votes.setdefault(wi, {}).setdefault(li, 0); votes[wi][li] += 1
            matched += 1
    assign = [None] * len(ws)
    for wi, v in votes.items(): assign[wi] = max(v, key=v.get)
    # the matched span of AED words (local alignment: a record may hold more than this spell)
    have = [i for i, x in enumerate(assign) if x is not None]
    if not have: return {}, 0.0, None
    # drop isolated outlier words far from the main span: keep words whose line is within monotone order
    lo, hi = have[0], have[-1]
    # trim: words before the first word of line 0.. and after the last
    cur = assign[lo]
    for i in range(lo, hi + 1):
        if assign[i] is None or assign[i] < cur: assign[i] = cur
        cur = assign[i]
    out = {}
    for i in range(lo, hi + 1):
        li = assign[i]
        a, b = out.get(li, (i, i + 1)); out[li] = (min(a, i), max(b, i + 1))
    score = matched / max(1, len(b_chars))
    return out, score, (lo, hi + 1)

def sent_snap(ws, rng):
    return rng

rows = []
report = []
for o in occ:
    k = o['key']; al = A.get(k)
    pyr = {n: p for n, p, vs in al['lines']}
    kn = nums(k)
    c0, c1 = o['cols'][0][0], o['cols'][-1][1]
    cands = []
    for r in recs:
        if not (r['nums'] & kn): continue
        if r['king'] not in SIG: continue
        sig = SIG[r['king']]
        mm = re.match(r'^(Nt|Jp|Wd|An|Ib)/', r['a'] or '')
        if mm: sig = mm.group(1)   # a queen's pyramid (dated by her king in AED): Neith, Iput, Wedjebten, Ankhesenpepi
        same = False
        if r['king'] == 'Unas':
            ca = int(re.match(r'\d+', r['a']).group()); cb = int(re.match(r'\d+', r['b']).group())
            same = not (cb < c0 or ca > c1)
        ws = words_of(r['tid'])
        rec = ''.join(anorm(w) for w in ws)
        g3 = {rec[i:i + 3] for i in range(len(rec) - 2)}
        def best(vs):
            def sc3(v):
                v = norm(v); gs = [v[i:i + 3] for i in range(len(v) - 2)]
                return sum(g in g3 for g in gs) / max(1, len(gs))
            return max(vs, key=sc3)
        lines = [(n, best(vs)) for n, p, vs in al['lines']]
        m, sc, span = align(ws, lines)
        if not m: continue
        sub = ws[span[0]:span[1]]
        cands.append(dict(r=r, sig=sig, same=same, m=m, sc=sc, lost=lost_frac(sub), span=span, lines=lines))
    ALLEN_ONLY = {'39', '40', '44', '52', '86', '167', '169', '271', '281', '284', '303'}
    if k in ALLEN_ONLY or not cands:
        report.append(f"{k}\t{o['loc']}\tALLEN\t-\t-\t-\tlines {len(al['lines'])}/{len(al['lines'])}")
        for n, p, vs in al['lines']:
            rows.append([k, str(n), p, o['loc'], 'A', '', '', '', f"{c0}–{c1}" if c1 != c0 else str(c0), c0])
        continue
    def rank(c):
        if c['same']: return (0, 0, 0)
        if c['sig'] == 'W': return (1, -c['sc'], 0)
        good = c['sc'] >= 0.6 and c['lost'] < 0.25
        order = ['T', 'P', 'M', 'N', 'Nt', 'Jp', 'Wd', 'An', 'Ib']   # the kings' copies first (a queen's is feminine)
        if good: return (2, order.index(c['sig']), 0)
        return (3 if c['sc'] >= 0.5 else 4, round(c['lost'], 1), order.index(c['sig']))
    cands.sort(key=rank)
    c = cands[0]
    alts = [f"{x['sig']}:{x['r']['tid'][:6]}:{x['sc']:.2f}/{x['lost']:.2f}" for x in cands[1:6]]
    c['nlines'] = len(al['lines'])
    report.append(f"{k}\t{o['loc']}\t{c['sig']}{'(same)' if c['same'] else ''}\t{c['r']['title']}\t{c['r']['ms']}\tscore={c['sc']:.2f} lost={c['lost']:.2f}\tlines {len(c['m'])}/{len(al['lines'])}\talts {' '.join(alts)}")
    ws = words_of(c['r']['tid'])
    c['m'] = snap(ws, c['m'])
    lines = c['lines']
    for li in sorted(c['m']):
        i, j = c['m'][li]
        n = lines[li][0]
        lbs = []
        for w in ws[i:j]:
            if w['lb'] not in lbs: lbs.append(w['lb'])
        rows.append([k, str(n), al['lines'][li][1], o['loc'], c['sig'], c['r']['tid'], str(i), str(j), lbs[0] + ('–' + lbs[-1] if len(lbs) > 1 else ''), c0])
def unkey(spell, wall):
    w = wall.split()[0]
    reg = wall.split()[1] if len(wall.split()) > 1 else ''
    if w == 'B/N': return 'UN1' if reg in ('i', 'ii') else 'UN2'
    if spell == '219' or w == 'B/E': return 'UN4'
    if w in ('B/Eg', 'B/S'): return 'UN3'
    if w in ('B/Wg', 'P/N', 'P/S'): return 'UN5'
    if w in ('A/Wg', 'A/W'): return 'UN6'
    if w in ('A/S', 'A/Eg'): return 'UN7'
    if w == 'A/E': return 'UN8'
    return 'UN9'
DIRS = {'W': 'PT--Unas'}
seen_occ = {}
used_labels = set()
out = []
for r in rows:
    spell, n, pyr, wall, sig, tid, i, j, lb, c0 = r
    lab_sp = spell.replace('–', '-')
    k = (spell, c0)
    if k not in seen_occ:
        seen_occ[k] = sum(1 for x in seen_occ if x[0] == spell) + 1
    o = seen_occ[k]
    lab = f"{lab_sp}{'#' + str(o) if o > 1 else ''}.{n}"
    while lab in used_labels:   # Allen's numbering repeats a number (PT 278 '2, 2, 3'; PT 301 '35, 35'): b
        lab += 'b'
    used_labels.add(lab)
    path = (DIRS.get(sig, 'PT--Unas-parallels') + '/' + tid + '.xml') if tid else ''
    out.append([unkey(spell, wall), lab, spell, n, pyr, wall, sig, path, i, j, lb])
# The alignment keeps only the words it matched: words of the record before the first or after the last matched word
# of an occurrence were dropped (a line's tail lost: 302.24 "people, Unas flies away from you"; Round 8 run 1, UN9).
# Extend each occurrence's first row back, and its last row forward, up to the next row of the same record (or its end).
from collections import defaultdict
byrec = defaultdict(list)
for r in out:
    if r[7]: byrec[r[7]].append(r)
for path, rs in byrec.items():
    n = len(words_of(os.path.basename(path)[:-4]))
    occs = defaultdict(list)
    for r in rs: occs[(r[2], r[5], r[10] if r[6] == 'A' else '')].append(r)
    starts = sorted({int(r[8]) for r in rs}); ends = sorted({int(r[9]) for r in rs})
    for key_, orows in occs.items():
        last = max(orows, key=lambda r: int(r[9])); first = min(orows, key=lambda r: int(r[8]))
        nxt = [x for x in starts if x >= int(last[9])]
        last[9] = str(nxt[0] if nxt else n)
        prv = [x for x in ends if x <= int(first[8])]
        first[8] = str(prv[-1] if prv else 0)
with open(OUT, 'w', encoding='utf-8') as f:
    f.write('# The Pyramid Texts of Unas: the composite (Round 8 run 1, 2026-11-13; made by make_composite.py).\n'
            '# One row per line of Allen 2013 (A New Concordance of the Pyramid Texts I) of each Unas wall occurrence, in'
            ' wall order (Sethe\'s columns 1-649).\n'
            '# key, label (<spell>[#<occurrence>].<Allen line>), spell, allen_n, pyr (Sethe\'s Pyr. paragraph), unas_wall'
            ' (Allen\'s code), siglum (W Unas; T Teti; P Pepi I; M Merenre; N Pepi II: the AED witness; A = not in AED,'
            ' read from Allen 2013, consulted locally), aed (file under ../../sources/AED-TEI/), w_from, w_to (word'
            ' positions in the record, gaps counted), aed_lb (the record\'s columns; for A the Unas columns)\n')
    f.write('key\tlabel\tspell\tallen_n\tpyr\tunas_wall\tsiglum\taed\tw_from\tw_to\taed_lb\n')
    for r in out: f.write('\t'.join(r) + '\n')
open(OUT + '.report', 'w', encoding='utf-8').write('\n'.join(report) + '\n')
print(len(rows), 'rows')
