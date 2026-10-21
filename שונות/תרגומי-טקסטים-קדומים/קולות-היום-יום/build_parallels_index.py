#!/usr/bin/env python3
"""Build parallels-index.md for the everyday-voices corpus from the `הקבלה` bullets of the annotated files.

Usage (from the corpus folder or anywhere):
    python3 -I build_parallels_index.py            # writes parallels-index.md
    python3 -I build_parallels_index.py --stats    # prints counts only

Every `- **הקבלה:**` bullet of every annotated entry (units of kol_tools.UNITS) is split into its Bible references
(`(Book ch:v)`, the repository format); each reference becomes one row with the nearest preceding echo tag
([cognate] / [equivalent] / [divergence] / [absent]), the quoted words (the backticked text just before the
reference), the project, unit, line label and our Hebrew line. Rows are grouped by book, in the order that matters for
this corpus: the Song of Songs, Proverbs, Qohelet, then the Torah and the rest in canonical order.
The part of parallels-index.md above the line `<!-- generated below: do not edit -->` (the key findings, written by
hand) is kept on every rebuild.
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import kol_tools as K  # noqa: E402

OUT = os.path.join(HERE, 'parallels-index.md')
MARK = '<!-- generated below: do not edit -->'
BOOKS = ['שיר השירים', 'משלי', 'קהלת', 'בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים', 'יהושע', 'שופטים', 'שמואל א',
         'שמואל ב', 'מלכים א', 'מלכים ב', 'ישעיהו', 'ירמיהו', 'יחזקאל', 'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה',
         'נחום', 'חבקוק', 'צפניה', 'חגי', 'זכריה', 'מלאכי', 'תהלים', 'איוב', 'רות', 'איכה', 'אסתר', 'דניאל', 'עזרא',
         'נחמיה', 'דברי הימים א', 'דברי הימים ב']
BOOK_RX = '|'.join(sorted(map(re.escape, BOOKS), key=len, reverse=True))
REF = re.compile(r'\((?:[^()]*?[;,]\s*)?(' + BOOK_RX + r') ([א-ת"]+):([א-ת"]+)(?:[–-][א-ת"]+)?[^()]*\)')
TAG = re.compile(r'\[(cognate|equivalent|divergence|absent)[^\]]*\]')
PROJ_NAME = {'LOVE': '1 love', 'PROV': '2 proverbs', 'LET': '3 letters'}


def bullets(path):
    """{(unit, label): [הקבלה text]} for one annotated file."""
    res, unit, cur = {}, None, None
    units_of_file = [k for k, U in K.UNITS.items() if os.path.basename(path) in U['files']
                     and os.path.dirname(path).endswith(K.PROJ_DIRS[U['proj']])]
    unit = units_of_file[0] if len(units_of_file) == 1 else None
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^<!-- unit: (\S+) -->', ln)
        if m:
            unit, cur = m.group(1), None
            continue
        m = re.match(r'^### (\S+)\s*$', ln)
        if m:
            cur = m.group(1)
            continue
        if ln.startswith('#'):
            cur = None
            continue
        if cur and unit and ln.startswith('- **הקבלה:**'):
            res.setdefault((unit, cur), []).append(ln[len('- **הקבלה:**'):].strip())
    return res


def rows():
    out = []
    for unit, U in K.UNITS.items():
        order, ent = K.unit_entries(unit)
        seen = set()
        for p in K.unit_paths(unit):
            if p in seen or not os.path.exists(p):
                continue
            seen.add(p)
            for (u, lab), texts in bullets(p).items():
                if u != unit:
                    continue
                heb = ent.get(lab, {}).get('heb', [''])[0] if lab in ent else ''
                tr = ent.get(lab, {}).get('tr', [''])
                tr = tr[0] if tr else ''
                for t in texts:
                    for m in REF.finditer(t):
                        before = t[:m.start()]
                        tags = TAG.findall(before)
                        tag = tags[-1] if tags else (TAG.findall(t) or [''])[0]
                        q = re.findall(r'`([^`]+)`\s*$', before.rstrip())
                        out.append(dict(book=m.group(1), ch=m.group(2), v=m.group(3), ref=m.group(0)[1:-1],
                                        proj=U['proj'], unit=unit, label=lab, heb=heb, tr=tr, tag=tag,
                                        quote=q[0] if q else ''))
    return out


def gem(s):
    """Hebrew letter numeral -> int (for sorting)."""
    v = {'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 20, 'ל': 30, 'מ': 40,
         'נ': 50, 'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90, 'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400}
    return sum(v.get(c, 0) for c in s)


def esc(s):
    return s.replace('|', '\\|')


def main():
    rs = rows()
    if '--stats' in sys.argv:
        from collections import Counter
        print(len(rs), 'rows;', Counter(r['book'] for r in rs).most_common(12))
        print(Counter(r['tag'] for r in rs))
        return
    head = ''
    if os.path.exists(OUT):
        txt = open(OUT, encoding='utf-8').read()
        if MARK in txt:
            head = txt.split(MARK)[0].rstrip('\n') + '\n\n'
    if not head:
        head = '# Parallels index: the everyday-voices corpus\n\n(Key findings: write them here, above the marker.)\n\n'
    rs.sort(key=lambda r: (BOOKS.index(r['book']), gem(r['ch']), gem(r['v']), r['proj'], r['unit'], r['label']))
    lines = [head + MARK, '',
             f'Generated by `build_parallels_index.py` from the `הקבלה` bullets of the annotated files: {len(rs)} rows, '
             'grouped by book (the Song of Songs, Proverbs and Qohelet first). Columns: the Bible reference; the '
             'words quoted in the apparatus; the echo tag; the project, unit and line; our Hebrew line. The analysis '
             'of each row is in the annotated file.', '']
    cur = None
    for r in rs:
        if r['book'] != cur:
            cur = r['book']
            n = sum(1 for x in rs if x['book'] == cur)
            lines += ['', f'## {cur} ({n})', '', '| Bible | Quoted | Tag | Line | Our Hebrew |', '|---|---|---|---|---|']
        q = f"`{esc(r['quote'])}`" if r['quote'] else ''
        lines.append(f"| {esc(r['ref'])} | {q} | {r['tag']} | {PROJ_NAME[r['proj']]} · {r['unit']} {r['label']} | "
                     f"{esc(r['heb'])} |")
    open(OUT, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    print(f'parallels-index.md written: {len(rs)} rows')


if __name__ == '__main__':
    main()
