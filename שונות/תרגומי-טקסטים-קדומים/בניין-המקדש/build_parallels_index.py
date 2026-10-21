"""Regenerate the table of parallels-index.md from the per-file parallels indexes of the temple-building corpus.

Usage (from any directory):  python3 -I build_parallels_index.py

Reads every table under a heading `### Parallels index (<KEY>)` (KEY = A1 … A4, B1 … B3) in
1-גליליות-גודאה/project.md (columns: Line | Sumerian | Hebrew rendering | Bible | Tag | Comment), files each row under
its highest-priority Bible reference (outside backticks): Exodus first (the Tabernacle), then Kings, Chronicles,
Ezekiel, Genesis, the rest of the Torah, Haggai and Zechariah, Ezra–Nehemiah, Daniel, Psalms, the other Prophets, the
rest of the Bible, rows without a verse; and rewrites everything after the line `## The table` in parallels-index.md
(the key findings above it are kept). Rows are labelled "Gud <line>" (RIME label, e.g. A.ix.10).
Adapted (2026-10-20) from ../קינות-על-ערים/build_parallels_index.py.
"""
import os
import re
import sys

A = os.path.dirname(os.path.abspath(__file__))
SOURCES = [("Gud", os.path.join(A, "1-גליליות-גודאה", "project.md"))]
OUT = os.path.join(A, "parallels-index.md")
G = {'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50,
     'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90, 'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400}
BOOKS = ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים', 'יהושע', 'שופטים', 'שמואל א', 'שמואל ב', 'מלכים א', 'מלכים ב',
         'ישעיהו', 'ירמיהו', 'יחזקאל', 'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה', 'נחום', 'חבקוק', 'צפניה', 'חגי',
         'זכריה', 'מלאכי', 'תהלים', 'משלי', 'איוב', 'שיר השירים', 'רות', 'איכה', 'קהלת', 'אסתר', 'דניאל', 'עזרא', 'נחמיה',
         'דברי הימים א', 'דברי הימים ב']
# (section title, books in it); a row goes to the first section that holds one of its references
SECTIONS = [("Exodus (the Tabernacle)", ['שמות']), ("Kings (Solomon's temple)", ['מלכים א', 'מלכים ב']),
            ("Chronicles", ['דברי הימים א', 'דברי הימים ב']), ("Ezekiel", ['יחזקאל']), ("Genesis", ['בראשית']),
            ("Leviticus, Numbers, Deuteronomy", ['ויקרא', 'במדבר', 'דברים']), ("Haggai and Zechariah", ['חגי', 'זכריה']),
            ("Ezra and Nehemiah", ['עזרא', 'נחמיה']), ("Daniel", ['דניאל']), ("Psalms", ['תהלים']),
            ("The other Prophets", ['ישעיהו', 'ירמיהו', 'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה', 'נחום', 'חבקוק',
                                    'צפניה', 'מלאכי'])]
ORDER = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3']
ROM = {r: i for i, r in enumerate('i ii iii iv v vi vii viii ix x xi xii xiii xiv xv xvi xvii xviii xix xx xxi xxii xxiii xxiv xxv xxvi xxvii xxviii xxix xxx'.split(), 1)}
refre = re.compile(r'(%s)[\s\-]+([א-ת]{1,3}):([א-ת]{1,3})' % '|'.join(
    b.replace(' ', '[ \\-]') for b in sorted(BOOKS, key=len, reverse=True)))


def nat(line):
    m = re.match(r'([AB])\.([ivx]+)\.(\d+)', line)
    return (m.group(1), ROM.get(m.group(2), 0), int(m.group(3)), line) if m else ('~', 0, 0, line)


def gem(s):
    return sum(G.get(c, 0) for c in s)


def refs(cell):
    out = []
    for m in refre.finditer(re.sub(r'`[^`]*`', '', cell)):
        b = re.sub(r'\s+', ' ', m.group(1).replace('-', ' '))
        if b in BOOKS:
            out.append((b, gem(m.group(2)), gem(m.group(3)), m.group(2), m.group(3)))
    return out


def tables(path):
    rows, cur = [], None
    if not os.path.exists(path):
        return rows
    for l in open(path, encoding='utf-8'):
        m = re.match(r'^### Parallels index \((\S+)\)\s*$', l)
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


def main():
    groups = {}
    n = 0
    for proj, path in SOURCES:
        for key, c in tables(path):
            line, sux, heb, bible, tag, com = c[:6]
            rs = refs(bible)
            sec, ref = None, None
            for si, (title, books) in enumerate(SECTIONS):
                hit = [r for r in rs if r[0] in books]
                if hit:
                    sec, ref = si, min(hit, key=lambda r: (BOOKS.index(r[0]), r[1], r[2]))
                    break
            if sec is None and rs:
                sec, ref = len(SECTIONS), min(rs, key=lambda r: (BOOKS.index(r[0]), r[1], r[2]))
            if sec is None:
                sec, ref = len(SECTIONS) + 1, ('—', 0, 0, '', '')
            ln = line
            label = f'{proj} {ln}'
            sk = (sec, BOOKS.index(ref[0]) if ref[0] in BOOKS else 99, ref[1], ref[2])
            groups.setdefault(sk, []).append((ref, key, label, line, sux, heb, bible, tag, com))
    titles = [t for t, _ in SECTIONS] + ['The rest of the Bible', 'No specific verse']
    order = {k: i for i, k in enumerate(ORDER)}
    out, cur = [], None
    for sk in sorted(groups):
        if sk[0] != cur:
            cur = sk[0]
            out.append(f'\n### {titles[cur]}\n\n| Verse | Text, line | Sumerian | Hebrew rendering | Bible | Tag | Comment |\n|---|---|---|---|---|---|---|')
        for (ref, key, label, line, sux, heb, bible, tag, com) in sorted(groups[sk], key=lambda x: (order.get(x[1], 99), nat(x[3]))):
            verse = f'{ref[0]} {ref[3]}:{ref[4]}' if ref[0] != '—' else '—'
            out.append(f'| {verse} | {label} | {sux} | {heb} | {bible} | {tag} | {com} |')
            n += 1
    head = open(OUT, encoding='utf-8').read().split('\n## The table\n')[0] + '\n' if os.path.exists(OUT) else '# Parallels index\n\n'
    open(OUT, 'w', encoding='utf-8').write(head + '## The table\n' + '\n'.join(out) + '\n')
    print(n, 'rows')
    return 0


if __name__ == '__main__':
    sys.exit(main())
