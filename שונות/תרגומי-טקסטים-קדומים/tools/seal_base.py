#!/usr/bin/env python3
"""Build a line-base file (`base.tsv`) for a text whose base is a SEAL page or a CDLI ATF, for the corpus tools.

    python3 -I seal_base.py seal <node-N.md (from seal2md.py)> <out-dir>
    python3 -I seal_base.py atf  <P…atf> <out-dir>

`base.tsv` columns: label, transliteration, lemmas (SEAL: `form = lemma "meaning"; …`; ATF: empty), translation
(SEAL's own numbered translation line when its number equals the label; else empty). Labels are made unique and
space-free:
  - ’ ʼ → ' ; spaces dropped ("i 1" → "i1"; SEAL's split label "**i** 4" is rejoined);
  - when a raw label repeats inside the text, every label gets its section's prefix (col. i → `i`, obv. → `o`,
    rev. → `r`, lo. ed. → `le`, up. ed. → `ue`; ATF surfaces the same), e.g. `ii1'`, `r1''`;
  - SEAL's score lines (Sargon the Lion: `- 3'' (A rev. 2'–3')` + `↳ …`, one per witness) become one entry per
    composite line, the witnesses joined as `A: … ‖ B: …`.
Written 2026-11-14 (Round 8 run 4, the Akkade legends and the OB royal epics). Output is © SEAL for SEAL pages
(gitignored, guidelines §8); CDLI ATF is CC0.
"""
import os
import re
import sys

SECT = [(r'^col\.?\s*([ivx]+)\b', lambda m: m.group(1)), (r'^obv', lambda m: 'o'), (r'^rev', lambda m: 'r'),
        (r'^lo\.?\s*ed', lambda m: 'le'), (r'^up\.?\s*ed', lambda m: 'ue'), (r'^left\s*ed', lambda m: 'lft'),
        (r'^subscript', lambda m: 'sub')]


def sect_code(s):
    s = s.strip().lower().lstrip('-').strip()
    for rx, f in SECT:
        m = re.match(rx, s)
        if m:
            return f(m)
    return None


def norm_label(s):
    return re.sub(r'\s+', '', s.replace('’', "'").replace('ʼ', "'").replace('′', "'"))


def seal(path):
    rows, sec, tr = [], '', {}
    text = open(path, encoding='utf-8').read()
    body = text.split('\n## Text', 1)[1].split('\n## Translation', 1)[0]
    trs = text.split('\n## Translation', 1)[1].split('\n## Notes', 1)[0] if '\n## Translation' in text else ''
    for ln in trs.splitlines():
        m = re.match(r"^(\S+?[’ʼ']*)\s+(.*)$", ln.strip())
        if m and re.match(r"^[ivx]*\d", m.group(1)):
            tr.setdefault(norm_label(m.group(1)), m.group(2))
    score = {}
    lines = body.splitlines()
    i = 0
    while i < len(lines):
        ln = lines[i]
        m = re.match(r'^\*\*([^*]+)\*\*\s?(.*)$', ln)
        if m:
            lab, t = m.group(1).strip(), m.group(2)
            if re.fullmatch(r'[ivx]+', lab) and re.match(r'^\d+[\'’ʼ]*\s', t):   # "**i** 4 …"
                n, t = t.split(' ', 1)
                lab = f'{lab} {n}'
            if re.fullmatch(r'Obv\.|Rev\.', lab):                                # "**Obv.** A" (a heading)
                sec = sect_code(lab)
                i += 1
                continue
            row = dict(raw=norm_label(lab), sec=sec, tr=t.strip(), lem='')
            rows.append(row)
            if i + 1 < len(lines) and lines[i + 1].strip().startswith('lemmas:'):
                row['lem'] = lines[i + 1].strip()[len('lemmas:'):].strip()
                i += 1
            i += 1
            continue
        m = re.match(r"^- (\d+[’ʼ']+) \(([A-Z])\b[^)]*\)\s*$", ln)                  # a score line
        if m:
            lab, wit = norm_label(m.group(1)), m.group(2)
            t, lem = '', ''
            j = i + 1
            while j < len(lines) and lines[j].startswith('  '):
                s = lines[j].strip()
                if s.startswith('↳'):
                    t = s[1:].strip()
                elif s.startswith('lemmas:'):
                    lem = s[len('lemmas:'):].strip()
                j += 1
            if lab not in score:
                score[lab] = dict(raw=lab, sec='r', tr='', lem='', wit=[])
                rows.append(score[lab])
            score[lab]['wit'].append((wit, t, lem))
            i = j
            continue
        if ln.startswith('- '):
            c = sect_code(ln[2:])
            if c:
                sec = c
        i += 1
    for r in rows:
        if 'wit' in r:
            r['tr'] = ' ‖ '.join(f'{w}: {t}' for w, t, _ in r['wit'])
            r['lem'] = ' ‖ '.join(f'{w}: {l}' for w, _, l in r['wit'] if l)
    return rows, tr


def atf(path):
    rows, sec = [], ''
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip()
        if ln.startswith('@'):
            c = {'@obverse': 'o', '@reverse': 'r', '@left': 'lft', '@bottom': 'le', '@top': 'ue'}.get(ln.split()[0])
            if ln.startswith('@surface'):
                c = ln.split()[1] if len(ln.split()) > 1 else 's'
            if c:
                sec = c
            continue
        m = re.match(r"^(\d+[a-z]?'*)\.\s+(.*)$", ln)
        if m:
            rows.append(dict(raw=m.group(1), sec=sec, tr=m.group(2).strip(), lem=''))
    return rows, {}


def main():
    kind, src, out = sys.argv[1:4]
    rows, tr = seal(src) if kind == 'seal' else atf(src)
    for a, b, c in zip(rows, rows[1:], rows[2:]):          # a SEAL typo: "ii5" between ii50 and ii52 is ii51
        m1, m3 = re.fullmatch(r'([ivx]+)(\d+)', a['raw']), re.fullmatch(r'([ivx]+)(\d+)', c['raw'])
        if m1 and m3 and m1.group(1) == m3.group(1) and int(m3.group(2)) == int(m1.group(2)) + 2 and b['raw'] != f'{m1.group(1)}{int(m1.group(2)) + 1}':
            b['raw'] = f'{m1.group(1)}{int(m1.group(2)) + 1}'
            print(f'label fixed: {b["raw"]} (SEAL prints it otherwise)')
    raws = [r['raw'] for r in rows]
    dup = len(set(raws)) != len(raws)
    os.makedirs(out, exist_ok=True)
    seen = set()
    with open(os.path.join(out, 'base.tsv'), 'w', encoding='utf-8') as f:
        for r in rows:
            lab = (r['sec'] + r['raw']) if dup and r['sec'] and not re.match(r'^[ivx]+\d', r['raw']) else r['raw']
            if lab in seen:
                sys.exit(f'duplicate label {lab} in {src}')
            seen.add(lab)
            f.write('\t'.join([lab, r['tr'].replace('\t', ' '), r['lem'].replace('\t', ' '), tr.get(r['raw'], '') if not dup else '']) + '\n')
    print(f'{out}/base.tsv: {len(rows)} lines' + (' (labels prefixed by section)' if dup else ''))


if __name__ == '__main__':
    main()
