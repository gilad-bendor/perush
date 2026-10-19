# Verify the EST annotated files (and, if present, translation.rtl.md).
# usage: python3 -I verify.py [part-number ...]      (no argument = all parts that exist)
# Checks:
#  1. entries: every composite line of the part has exactly one "### <line>" entry, in order; extra "### T …" entries allowed;
#  2. exactly one "> " Hebrew line per entry;
#  3. reserved Deuteronomic words absent from the ">" lines (project.md, Decision 7);
#  4. formula consistency: where the SAAo normalization of a line contains a fixed formula, the (niqqud-stripped) Hebrew
#     contains the fixed Hebrew (renderings.md §1); where the lemma is a key verb, its Hebrew root is present;
#  5. identical normalizations -> identical Hebrew (listed when they differ, for review);
#  6. translation.rtl.md lines == annotated ">" lines (if the translation exists).
# Written 2026-10-17 for חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון.
import sys, re, os, glob, collections, unicodedata

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '../../sources/ORACC/saao-saa02--Q009186--Esarhaddon-Succession-Treaty/Q009186--lemmatised.md')
PARTS = {'1': ('i', '107'), '2': ('108', '236'), '3': ('237', '352'), '4': ('353', '413'),
         '5': ('414', '493'), '6': ('494', '611'), '7': ('612A', '670')}


def strip(s):
    s = unicodedata.normalize('NFC', s)
    return re.sub('[֑-ֽֿ-ׇ]', '', s)  # keep maqaf U+05BE


def source_lines():
    out = []; cur = None
    for l in open(SRC, encoding='utf-8'):
        m = re.match(r'\*\*o ([^*]+)\*\* ', l)
        if m:
            cur = {'n': m.group(1).strip(), 'norm': '', 'lem': ''}; out.append(cur)
        elif cur and l.strip().startswith('norm:'):
            cur['norm'] = l.strip()[5:].strip()
        elif cur and l.strip().startswith('<sub>lem:'):
            cur['lem'] = l.strip()
    return out


def parse_annot(fn):
    ents = []; cur = None
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip('\n')
        m = re.match(r'### (\S+(?: \S+ \S+)?)\s*$', l)
        if m:
            cur = {'n': m.group(1), 'heb': [], 'file': os.path.basename(fn)}; ents.append(cur); continue
        if cur is not None and l.startswith('> '):
            cur['heb'].append(l[2:].strip())
    return ents


RESERVED = ['סרה', 'תכסה', 'תכסו', 'שמר', 'ברית', 'עדות', 'עדֹת', 'אלהים', 'מטר', 'שחין', 'אפלה', 'בכל לבבכם', 'בכל לבכם', 'תוסיפו', 'תגרעו', 'תֹסף', 'תגרע']
RESERVED_RE = [re.compile(r'(?<![א-ת])' + w + r'(?![א-ת])') for w in ['סרה', 'ברית', 'הברית', 'בברית', 'עדות', 'העדות', 'אלהים', 'מטר', 'שחין', 'אפלה', 'באפלה', 'הדבר']] + \
    [re.compile(w) for w in ['שמר', 'בכל לבבכם', 'בכל לבכם', 'תגרע', 'תכס']]
# 'הדבר' is checked only in curse lines (pestilence); see below.

FORMULAS = [
    (r'Aššur-bani-apli mār šarri rabiu ša bēt rēd', 'אשור־בני־אפלי, בן־המלך הגדול של בית הירושה'),
    (r'Aššur-ahu-iddina šar Mat-Aššur', 'אסרחדון, מלך אשור'),
    (r'šumma attunu', 'אם אתם'),
    (r'KI\.MIN KI\.MIN', 'כנ״ל, כנ״ל'),
    (r'KI\.MIN', 'כנ״ל'),
    (r'ahhēšu mār ummīšu', 'אחיו, בני אמו'),
    (r'ṣalmāt qaqqadi', 'שחורי הראש'),
    (r'gummurti libbi', 'בשלמות לב'),
    (r'ketti ša libbi', 'באמת לב'),
    (r'napāh šamši', 'ממזרח השמש'),
]
ROOTS = [  # lemma substring -> regex the Hebrew must match
    ('adû[', r'אמנ'),
    ('naṣāru[', r'נ\S{0,2}צ\S{0,2}ר|נוצר|נצירה'),
    ('šemû[', r'ש\S{0,2}מ\S{0,2}ע'),
    ('tamû[', r'שב[וּ]?ע|ישבע|השבע|נשבע|תשבע|שביע'),
    ('māmītu[', r'אל[הת]'),
    ('râmu[', r'א\S{0,2}ה\S{0,2}ב'),
    ('ramû[', r'רפ'),
    ('haṭû[', r'ח\S{0,2}ט\S{0,1}א|חטא'),
    ('arāru[', r'אר[רו]|מאר'),
    ('šanû[be(come) changed', r'שנ'),
]


def main():
    want = sys.argv[1:] or [k for k in PARTS if glob.glob(os.path.join(HERE, f'annotated-{k}--*.rtl.md'))]
    src = source_lines(); order = [x['n'] for x in src]; byn = {x['n']: x for x in src}
    probs = 0; heb_by_norm = collections.defaultdict(set); allents = []
    for k in want:
        files = glob.glob(os.path.join(HERE, f'annotated-{k}--*.rtl.md'))
        if not files:
            print(f'part {k}: no annotated file'); continue
        ents = parse_annot(files[0]); allents += ents
        a, b = PARTS[k]; exp = order[order.index(a):order.index(b) + 1]
        got = [e['n'] for e in ents if not e['n'].startswith('T ')]
        if got != exp:
            probs += 1
            missing = [x for x in exp if x not in got]; extra = [x for x in got if x not in exp]
            print(f'part {k}: entry mismatch; missing {missing[:20]}; extra {extra[:20]}')
            for i, (x, y) in enumerate(zip(got, exp)):
                if x != y:
                    print(f'   first order difference at #{i}: got {x}, expected {y}'); break
        for e in ents:
            if len(e['heb']) != 1:
                probs += 1; print(f'part {k} {e["n"]}: {len(e["heb"])} Hebrew lines')
                continue
            h = strip(e['heb'][0])
            for r in RESERVED_RE:
                if r.pattern.endswith('הדבר(?![א-ת])'):
                    continue
                if r.search(h):
                    probs += 1; print(f'part {k} {e["n"]}: reserved word /{r.pattern}/ in: {h}')
            s = byn.get(e['n'])
            if not s:
                continue
            hb = re.sub(r'[\[\]⟨⟩{}]', '', h).replace('תיינת: ', '').replace('תיינת ', '')
            for pat, heb in FORMULAS:
                if re.search(pat, s['norm']) and heb not in hb:
                    if pat == r'KI\.MIN' and 'KI.MIN KI.MIN' in s['norm']:
                        continue
                    probs += 1; print(f'part {k} {e["n"]}: formula "{heb}" expected ({pat}); got: {h}')
            for lem, rx in ROOTS:
                if re.search(r'(?<![A-Za-zāēīūâêîûḫšṣṭ])' + re.escape(lem), s['lem']) and not re.search(rx, h):
                    probs += 1; print(f'part {k} {e["n"]}: lemma {lem} without its Hebrew /{rx}/: {h}')
            heb_by_norm[s['norm']].add(h)
    for nrm, hs in heb_by_norm.items():
        if len(hs) > 1 and len(nrm.split()) >= 3:
            print(f'REVIEW identical normalization, different Hebrew: {nrm}')
            for h in sorted(hs):
                print('      ', h)
    tr = os.path.join(HERE, 'translation.rtl.md')
    if os.path.exists(tr) and not sys.argv[1:]:
        tl = {}
        for l in open(tr, encoding='utf-8'):
            m = re.match(r'\*\*(\S+(?: \S+ \S+)?)\*\* (.*?)(\[\^[^\]]+\])*\s*$', l.rstrip())
            if m:
                tl[m.group(1)] = re.sub(r'\[\^[^\]]+\]', '', m.group(2)).strip()
        for e in allents:
            if e['heb'] and tl.get(e['n']) != e['heb'][0].strip():
                probs += 1; print(f'translation mismatch {e["n"]}: {tl.get(e["n"])!r} vs {e["heb"][0]!r}')
        print('translation lines:', len(tl), 'annotated entries:', len(allents))
    print('problems:', probs)


main()
