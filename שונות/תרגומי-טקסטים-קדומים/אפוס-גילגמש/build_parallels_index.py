"""Regenerate the table of parallels-index.md from the per-tablet parallels indexes of the Gilgameš corpus.

Usage (from any directory):  python3 -I build_parallels_index.py

Reads every table under a heading `### Parallels index (Tablet <KEY>)` in 1-הנוסח-הבבלי-התקני/project.md and
2-הנוסח-הבבלי-הקדום/project.md (columns: Line | Akkadian | Hebrew rendering | Bible | Tag | Comment), files each row
under its first Genesis reference (outside backticks; a bare `ב:ז` means Genesis), otherwise its first reference, and
rewrites everything after the line `## The table` in parallels-index.md (the key findings above it are kept).
Rows are labelled "SB <tablet> <line>" or "OB <tablet> <line>". Genesis 1–11 by chapter, then Genesis 12–50 by
chapter, Exodus–Deuteronomy by book, the rest of the Bible, and rows without a verse.
Adapted from ../סיפורי-הבריאה-המסופוטמיים/1-אנומה-אליש/build_parallels_index.py.
"""
import os
import re
import sys

A = os.path.dirname(os.path.abspath(__file__))
SOURCES = [("SB", os.path.join(A, "1-הנוסח-הבבלי-התקני", "project.md")),
           ("OB", os.path.join(A, "2-הנוסח-הבבלי-הקדום", "project.md"))]
OUT = os.path.join(A, "parallels-index.md")
G = {'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50,
     'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90, 'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400}
BOOKS = ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים', 'יהושע', 'שופטים', 'שמואל א', 'שמואל ב', 'מלכים א', 'מלכים ב',
         'ישעיהו', 'ירמיהו', 'יחזקאל', 'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה', 'נחום', 'חבקוק', 'צפניה', 'חגי',
         'זכריה', 'מלאכי', 'תהלים', 'משלי', 'איוב', 'שיר השירים', 'רות', 'איכה', 'קהלת', 'אסתר', 'דניאל', 'עזרא', 'נחמיה',
         'דברי הימים א', 'דברי הימים ב']
TABLET_ORDER = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII',
                'OB-II', 'OB-III', 'OB-VA+BM', 'OB-Schoyen2', 'OB-Nippur', 'OB-Harmal1', 'OB-Ishchali', 'OB-Harmal2', 'OB-IM']
refre = re.compile(r'(?:(%s)[\s\-]+)?([א-ת]{1,3}):([א-ת]{1,3})' % '|'.join(
    b.replace(' ', '[ \\-]') for b in sorted(BOOKS, key=len, reverse=True)))


def gem(s):
    return sum(G.get(c, 0) for c in s)


def refs(cell):
    out = []
    for m in refre.finditer(cell):
        b = re.sub(r'\s+', ' ', (m.group(1) or 'בראשית').replace('-', ' '))
        if b not in BOOKS:
            continue
        out.append((BOOKS.index(b), gem(m.group(2)), gem(m.group(3)), b, m.group(2), m.group(3)))
    return out


def tables(path):
    rows, cur = [], None
    if not os.path.exists(path):
        return rows
    for l in open(path, encoding='utf-8'):
        m = re.match(r'^### Parallels index \(Tablet (\S+)\)\s*$', l)
        if m:
            cur = m.group(1)
            continue
        if cur and (l.startswith('### ') or l.startswith('## ')):
            cur = None
        if cur and l.startswith('| ') and not l.startswith('| Line') and not l.startswith('|---'):
            cells = [c.strip() for c in l.strip().strip('|').split(' | ')]
            if len(cells) >= 6:
                rows.append((cur, cells))
    return rows


def strip_quotes(c):
    return re.sub(r'`[^`]*`', '', c)


def sect(k):
    b, ch, v = k
    if b == 0 and ch <= 11:
        return f'Genesis {ch}'
    if b == 0:
        return f'Genesis {ch}'
    if b <= 4:
        return ['', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'][b]
    if b == 99:
        return 'No specific verse'
    return 'The rest of the Bible'


def main():
    groups = {}
    n = 0
    for proj, path in SOURCES:
        for key, c in tables(path):
            line, akk, heb, bible, tag, com = c[:6]
            rs = refs(strip_quotes(bible)) or [(99, 0, 0, '—', '', '')]
            gen = [r for r in rs if r[0] == 0]
            k = min(gen) if gen else min(rs)
            label = ('SB ' + key) if proj == 'SB' else key.replace('OB-', 'OB ')
            groups.setdefault(k[:3], []).append((k, key, label, line, akk, heb, bible, tag, com))
    order = {k: i for i, k in enumerate(TABLET_ORDER)}
    out, cur = [], None
    for k in sorted(groups):
        s = sect(k)
        if s != cur:
            cur = s
            out.append(f'\n### {s}\n\n| Verse | Tablet, line | Akkadian | Hebrew rendering | Bible | Tag | Comment |\n|---|---|---|---|---|---|---|')
        for (kk, key, label, line, akk, heb, bible, tag, com) in sorted(groups[k], key=lambda x: (order.get(x[1], 99), x[3])):
            verse = f'{kk[3]} {kk[4]}:{kk[5]}' if kk[0] != 99 else '—'
            out.append(f'| {verse} | {label} {line} | {akk} | {heb} | {bible} | {tag} | {com} |')
            n += 1
    head = open(OUT, encoding='utf-8').read().split('\n## The table\n')[0] + '\n' if os.path.exists(OUT) else '# Parallels index\n\n'
    open(OUT, 'w', encoding='utf-8').write(head + '## The table\n' + '\n'.join(out) + '\n')
    print(n, 'rows')
    return 0


if __name__ == '__main__':
    sys.exit(main())
