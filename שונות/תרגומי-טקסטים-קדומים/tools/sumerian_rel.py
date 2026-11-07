#!/usr/bin/env python3
"""Near-identical Sumerian lines across the folder, with the Hebrew already given (Round 6 run 4, 2026-11-07).

    python3 -I tools/sumerian_rel.py <annotated file> [MIN_RATIO=0.72] [--self]

For every entry of the given annotated file, prints the entries of every other annotated file of the folder (and,
with --self, of the same file) whose transliteration is near-identical (difflib ratio on the bracket-free text, at
least MIN_RATIO), with their file, label and `>` line – so a translator copies a formula or a repeated line exactly.
An entry is `### <label>`, then a backticked transliteration line, then `> ` Hebrew. Only Sumerian-looking lines are
indexed (sign indices or ĝ/š/ḫ). Never executes anything downloaded.
"""
import difflib
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
SUX = re.compile(r'[₀-₉ĝḫ]')


def key(t):
    t = re.sub(r'\s*\(\*[^)]*\)', '', t)
    t = re.sub(r'\s*\*[^*]*\*', '', t)
    t = re.sub(r'\{[^}]*\}', '', t)
    return re.sub(r'\s+', ' ', re.sub(r'[\[\]⸢⸣?!«»⟨⟩()…-]', ' ', t)).strip()


def entries(path):
    out, cur = [], None
    for ln in open(path, encoding='utf-8'):
        ln = ln.rstrip('\n')
        m = re.match(r'^### (\S+)\s*$', ln)
        if m:
            cur = [m.group(1), None, None]
            out.append(cur)
            continue
        if cur is None:
            continue
        if cur[1] is None and ln.startswith('`') and ln.count('`') >= 2:
            cur[1] = ln.strip().strip('`')
        elif cur[2] is None and ln.startswith('> '):
            cur[2] = ln[2:].strip()
    return [e for e in out if e[1] and e[2] and SUX.search(e[1])]


def main():
    a = [x for x in sys.argv[1:] if not x.startswith('--')]
    target = os.path.abspath(a[0])
    mn = float(a[1]) if len(a) > 1 else 0.72
    self_ = '--self' in sys.argv
    pool = []
    for p in glob.glob(os.path.join(ROOT, '**', 'annotated*.rtl.md'), recursive=True):
        if os.path.abspath(p) == target and not self_:
            continue
        rel = os.path.relpath(p, ROOT)
        for lab, t, h in entries(p):
            if 'טרם תורגם' in h:
                continue
            pool.append((rel, lab, key(t), h))
    for lab, t, h in entries(target):
        k = key(t)
        if len(k) < 8:
            continue
        hits = []
        for rel, l2, k2, h2 in pool:
            if os.path.abspath(os.path.join(ROOT, rel)) == target and l2 == lab:
                continue
            sm = difflib.SequenceMatcher(None, k, k2)
            if sm.real_quick_ratio() < mn or sm.quick_ratio() < mn:
                continue
            r = sm.ratio()
            if r >= mn:
                hits.append((r, rel, l2, k2, h2))
        if hits:
            print(f'### {lab}  `{k}`')
            for r, rel, l2, k2, h2 in sorted(hits, reverse=True)[:6]:
                print(f'  {r:.2f} {rel} {l2}: `{k2}`\n       > {h2}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
