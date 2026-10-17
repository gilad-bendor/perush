# Build translation.rtl.md (the clean reading translation) from the annotated part files.
# usage: python3 -I build_translation.py
#   Reads build_translation--head.rtl.md (title + Hebrew introduction) and annotated-1--*.rtl.md … annotated-7--*.rtl.md
#   in order. Keeps the "## §N (lines): heading" section headings; each entry becomes "**<line>** <the > line>";
#   an apparatus field "**הערת שוליים:**" becomes a numbered footnote of that line.
#   Then run verify.py (it checks translation lines == annotated > lines).
# Written 2026-10-17 for חוקים-ובריתות/1-אמנת-הירושה-של-אסרחדון.
import os, re, glob

HERE = os.path.dirname(os.path.abspath(__file__))
head = open(os.path.join(HERE, 'build_translation--head.rtl.md'), encoding='utf-8').read().rstrip('\n')
out = ['<!--', 'GENERATED FILE. Do not edit by hand.',
       'Built by build_translation.py from build_translation--head.rtl.md and annotated-1--… to annotated-7--….rtl.md.',
       'To change the text, edit the annotated files and run: python3 -I build_translation.py', '-->', '', head, '']
notes = []
for k in range(1, 8):
    files = sorted(glob.glob(os.path.join(HERE, f'annotated-{k}--*.rtl.md')))
    if not files:
        continue
    cur = None
    for l in open(files[0], encoding='utf-8'):
        l = l.rstrip('\n')
        if l.startswith('## '):
            if out and out[-1] != '':
                out.append('')
            out += [l, '']
            continue
        m = re.match(r'### (\S+(?: \S+ \S+)?)\s*$', l)
        if m:
            cur = m.group(1); continue
        if cur and l.startswith('> '):
            out.append(f'**{cur}** {l[2:].strip()}  ')
            continue
        m = re.match(r'- \*\*הערת שוליים:\*\*\s*(.*)', l)
        if cur and m and m.group(1).strip():
            notes.append(m.group(1).strip())
            # attach the marker to the last line of this entry
            for i in range(len(out) - 1, -1, -1):
                if out[i].startswith(f'**{cur}** '):
                    out[i] = out[i].rstrip() + f'[^{len(notes)}]  '
                    break
if notes:
    out += ['', '---', '']
    out += [f'[^{i}]: {n}' for i, n in enumerate(notes, 1)]
open(os.path.join(HERE, 'translation.rtl.md'), 'w', encoding='utf-8').write('\n'.join(out).rstrip('\n') + '\n')
print('lines', sum(1 for l in out if l.startswith('**')), 'footnotes', len(notes))
