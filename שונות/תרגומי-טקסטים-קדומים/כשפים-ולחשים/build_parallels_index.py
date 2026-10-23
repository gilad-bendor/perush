"""Regenerate the parallels indexes of the witchcraft-and-incantations corpus (Maqlû).

Usage (from any directory):  python3 -I -B build_parallels_index.py

1. Reads the **הקבלה** bullets of 1-מקלו/annotated-<KEY>.rtl.md (KEY = I … VIII, RT). Each bullet is split at its tags
   ([cognate], [equivalent], [divergence], [absent]); a segment's Bible cell is every "`vocalized quotation` (Hebrew
   reference)" in it, the rest of the segment is the comment.
2. Rewrites, in 1-מקלו/project.md, everything after the heading `## Parallels index` with one table per tablet under
   `### Parallels index (<KEY>)` (columns: Line | Source | Hebrew rendering | Bible | Tag | Comment).
3. Rewrites everything after the line `## The table` in parallels-index.md (the key findings above it are kept): every
   row filed under its highest-priority Bible reference (Genesis, Exodus, the rest of the Torah, the Former Prophets,
   Isaiah–Jeremiah–Ezekiel, the Twelve, Psalms, Wisdom and the Writings, rows without a verse); labels "<KEY> <line>".
Adapted (2026-10-23) from ../העולם-התחתון/build_parallels_index.py: one project, one table per tablet.
"""
import os
import re
import sys

A = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(A, '1-מקלו')
KEYS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'RT']
PROJECTS = [(k, P, [f'annotated-{k}.rtl.md']) for k in KEYS if os.path.exists(os.path.join(P, f'annotated-{k}.rtl.md'))]
OUT = os.path.join(A, 'parallels-index.md')
G = {'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8, 'ט': 9, 'י': 10, 'כ': 20, 'ל': 30, 'מ': 40, 'נ': 50,
     'ס': 60, 'ע': 70, 'פ': 80, 'צ': 90, 'ק': 100, 'ר': 200, 'ש': 300, 'ת': 400}
BOOKS = ['בראשית', 'שמות', 'ויקרא', 'במדבר', 'דברים', 'יהושע', 'שופטים', 'שמואל א', 'שמואל ב', 'מלכים א', 'מלכים ב',
         'ישעיהו', 'ירמיהו', 'יחזקאל', 'הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה', 'נחום', 'חבקוק', 'צפניה', 'חגי',
         'זכריה', 'מלאכי', 'תהלים', 'משלי', 'איוב', 'שיר השירים', 'רות', 'איכה', 'קהלת', 'אסתר', 'דניאל', 'עזרא', 'נחמיה',
         'דברי הימים א', 'דברי הימים ב']
SECTIONS = [("Genesis", ['בראשית']), ("Exodus", ['שמות']), ("Leviticus, Numbers, Deuteronomy", ['ויקרא', 'במדבר', 'דברים']),
            ("The Former Prophets", ['יהושע', 'שופטים', 'שמואל א', 'שמואל ב', 'מלכים א', 'מלכים ב']),
            ("Isaiah, Jeremiah, Ezekiel", ['ישעיהו', 'ירמיהו', 'יחזקאל']),
            ("The Twelve", ['הושע', 'יואל', 'עמוס', 'עובדיה', 'יונה', 'מיכה', 'נחום', 'חבקוק', 'צפניה', 'חגי', 'זכריה', 'מלאכי']),
            ("Psalms", ['תהלים']),
            ("Wisdom and the Writings", ['משלי', 'איוב', 'קהלת', 'שיר השירים', 'רות', 'איכה', 'אסתר', 'דניאל', 'עזרא', 'נחמיה',
                                         'דברי הימים א', 'דברי הימים ב'])]
BOOKRX = '|'.join(b.replace(' ', '[ \\-]') for b in sorted(BOOKS, key=len, reverse=True))
refre = re.compile(r'(%s)[\s\-]+([א-ת]{1,3}):([א-ת]{1,3})' % BOOKRX)
TAG = re.compile(r'\[(cognate|equivalent|divergence|absent)\]')
PAIR = re.compile(r'`([^`]*[֑-ׇ][^`]*)`\s*\(((?:%s)[\s\-]+[א-ת]{1,3}:[א-ת]{1,3}[^)]*)\)' % BOOKRX)
NIQ = re.compile('[֑-ֽֿ-ׇ]')


def gem(s):
    return sum(G.get(c, 0) for c in s)


def refs(cell):
    out = []
    for m in refre.finditer(re.sub(r'`[^`]*`', '', cell)):
        b = re.sub(r'\s+', ' ', m.group(1).replace('-', ' '))
        if b in BOOKS:
            out.append((b, gem(m.group(2)), gem(m.group(3)), m.group(2), m.group(3)))
    return out


def cell(s):
    return s.replace(' || ', ' ‖ ').replace(' | ', ' · ').replace('|', '·').strip()


def entries(paths):
    """Yield (label, source, hebrew, parallels-bullet) for every entry with a הקבלה bullet."""
    for p in paths:
        if not os.path.exists(p):
            continue
        lab = src = heb = None
        for l in open(p, encoding='utf-8'):
            l = l.rstrip('\n')
            m = re.match(r'^### (\S+)\s*$', l)
            if m:
                lab, src, heb = m.group(1), None, None
                continue
            if lab and src is None and l.startswith('`'):
                s = re.sub(r'\s*\(\*[^)]*\)', '', l.strip('`'))
                s = re.sub(r'\s*\*[^*]*\*\s*$', '', s)
                src = s
                continue
            if lab and heb is None and l.startswith('> '):
                heb = l[2:]
                continue
            if lab and l.startswith('- **הקבלה:**'):
                yield lab, src or '', heb or '', l[len('- **הקבלה:**'):].strip()


def segments(bullet):
    """Split a הקבלה bullet at its tags: [(tag, bible, comment)].

    A tag inside a parenthesis of the previous segment's comment (the segment starts with ")") is folded back into that
    comment; a tag segment with no quotation of its own (e.g. "[divergence]: …" after the verses) takes the previous
    segment's verses."""
    marks = list(TAG.finditer(bullet))
    if not marks:
        return [('—', '', bullet)]
    out = []
    for i, m in enumerate(marks):
        seg = bullet[m.end(): marks[i + 1].start() if i + 1 < len(marks) else len(bullet)]
        pairs = PAIR.findall(seg)
        if not pairs and out and (seg.lstrip().startswith(')') or out[-1][2].count('(') > out[-1][2].count(')')):
            tag0, bible0, com0 = out[-1]
            out[-1] = (tag0, bible0, (com0 + ' [' + m.group(1) + ']' + seg).strip())
            continue
        bible = '; '.join(f'`{q}` ({r})' for q, r in pairs)
        if not pairs and out:
            bible = out[-1][1]
        rest = PAIR.sub('', seg)
        rest = re.sub(r'^[\s;,.:–—]+|[\s;,]+$', '', rest)
        rest = re.sub(r'\s*;\s*(;\s*)+', '; ', rest)
        rest = re.sub(r'^(ובפסוק [^–]*|ושם)?\s*[–—]\s*', '', rest)
        out.append((m.group(1), bible, rest))
    return out


def project_rows(key, d, files):
    rows = []
    for lab, src, heb, b in entries([os.path.join(d, f) for f in files]):
        for tag, bible, com in segments(b):
            rows.append((lab, src, heb, bible, tag, com))
    return rows


def write_project(tables):
    """tables = [(key, rows)]: one table per tablet, all in 1-מקלו/project.md."""
    p = os.path.join(P, 'project.md')
    t = open(p, encoding='utf-8').read()
    head = t.split('\n## Parallels index')[0].rstrip('\n')
    out = ['## Parallels index',
           'Generated by `../build_parallels_index.py` from the **הקבלה** bullets of the annotated files; merged by Bible '
           'verse into `../parallels-index.md`. Do not edit the tables by hand.']
    for key, rows in tables:
        out += ['', f'### Parallels index ({key})', '| Line | Source | Hebrew rendering | Bible | Tag | Comment |',
                '|---|---|---|---|---|---|']
        for lab, src, heb, bible, tag, com in rows:
            out.append(f'| {lab} | {cell(src)} | {cell(heb)} | {cell(bible) or "—"} | {tag} | {cell(com)} |')
    open(p, 'w', encoding='utf-8').write(head + '\n\n' + '\n'.join(out) + '\n')


def main():
    groups, n = {}, 0
    order = {k: i for i, (k, _, _) in enumerate(PROJECTS)}
    tables = []
    for key, d, files in PROJECTS:
        rows = project_rows(key, d, files)
        tables.append((key, rows))
        print(f'{key}: {len(rows)} rows in project.md')
        for i, (lab, src, heb, bible, tag, com) in enumerate(rows):
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
            sk = (sec, BOOKS.index(ref[0]) if ref[0] in BOOKS else 99, ref[1], ref[2])
            groups.setdefault(sk, []).append((ref, order[key], i, f'{key} {lab}', src, heb, bible, tag, com))
    write_project(tables)
    titles = [t for t, _ in SECTIONS] + ['The rest of the Bible', 'No specific verse']
    out, cur = [], None
    for sk in sorted(groups):
        if sk[0] != cur:
            cur = sk[0]
            out.append(f'\n### {titles[cur]}\n\n| Verse | Text, line | Source | Hebrew rendering | Bible | Tag | Comment |\n'
                       f'|---|---|---|---|---|---|---|')
        for (ref, ko, i, label, src, heb, bible, tag, com) in sorted(groups[sk], key=lambda x: (x[1], x[2])):
            verse = f'{ref[0]} {ref[3]}:{ref[4]}' if ref[0] != '—' else '—'
            out.append(f'| {verse} | {label} | {cell(src)} | {cell(heb)} | {cell(bible) or "—"} | {tag} | {cell(com)} |')
            n += 1
    head = open(OUT, encoding='utf-8').read().split('\n## The table\n')[0] + '\n' if os.path.exists(OUT) else \
        '# Parallels index: the witchcraft-and-incantations corpus (Maqlû)\n\n'
    open(OUT, 'w', encoding='utf-8').write(head + '## The table\n' + '\n'.join(out) + '\n')
    print(n, 'rows in parallels-index.md')
    return 0


if __name__ == '__main__':
    sys.exit(main())
