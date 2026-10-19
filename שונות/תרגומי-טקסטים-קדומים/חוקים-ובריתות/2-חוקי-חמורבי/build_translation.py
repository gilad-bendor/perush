# Build translation.rtl.md (the clean reading translation of LH) from the annotated files.
# usage: python3 -I build_translation.py
#   Reads build_translation--head.rtl.md (title + Hebrew introduction) and annotated-01--… to annotated-12--….rtl.md in
#   order (lh_config.FILES). Prologue and epilogue: "## הפרולוג" / "## האפילוג" + the files' "## …" sections as "### …".
#   Laws: the topic headings of lh_config.TOPICS as "## …", each "## §N (a–b): heading" as "### §N – heading".
#   Each entry becomes "**<line>** <the > line>"; an apparatus field "**הערת שוליים:**" becomes a numbered footnote.
#   A placeholder "<!-- טרם תורגם: … -->" becomes an italic line "(…: טרם תורגם)".
#   Then run verify.py (it checks translation lines == annotated > lines).
# Written 2026-10-17 for חוקים-ובריתות/2-חוקי-חמורבי.
import os, re, glob, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lh_config as C

HERE = C.HERE
head = open(os.path.join(HERE, 'build_translation--head.rtl.md'), encoding='utf-8').read().rstrip('\n')
out = ['<!--', 'GENERATED FILE. Do not edit by hand.',
       'Built by build_translation.py from build_translation--head.rtl.md and annotated-01--… to annotated-12--….rtl.md.',
       'To change the text, edit the annotated files and run: python3 -I build_translation.py', '-->', '', head, '']
notes = []
topics = list(C.TOPICS); done_topics = set(); big = None


def topic_for(law):
    t = None
    for first, name in topics:
        if law >= first:
            t = (first, name)
    return t


for f in C.FILES:
    num, slug = f[0], f[1]
    files = sorted(glob.glob(os.path.join(HERE, f'annotated-{num}--*.rtl.md')))
    if not files:
        out += ['', f'_({f[4]}: טרם תורגם)_', '']
        continue
    want_big = 'הפרולוג' if slug.startswith('prologue') else ('האפילוג' if slug.startswith('epilogue') else None)
    if want_big and big != want_big:
        out += ['', f'## {want_big}', '']; big = want_big
    cur = None
    for l in open(files[0], encoding='utf-8'):
        l = l.rstrip('\n')
        if l.startswith('## '):
            h = l[3:].strip()
            m = re.match(r'§(\d+)(?:[–-](\d+))?\s*\(([^)]*)\)\s*:?\s*(.*)$', h)
            if m:
                big = None
                t = topic_for(int(m.group(1)))
                if t and t[0] not in done_topics:
                    done_topics.add(t[0])
                    out += ['', f'## {t[1]}', '']
                law = m.group(1) + ('–' + m.group(2) if m.group(2) else '')
                out += ['', f'### §{law} – {m.group(4).strip()}' if m.group(4).strip() else f'### §{law}', '']
            elif h.startswith('הפער'):
                t = topic_for(66)
                if t and t[0] not in done_topics:
                    done_topics.add(t[0]); out += ['', f'## {t[1]}', '']
                out += ['', f'### {h}', '']
            else:
                out += ['', f'### {h}', '']
            continue
        m = re.match(r'<!--\s*טרם תורגם:\s*(.*?)\s*-->', l.strip())
        if m:
            out += ['', f'_({m.group(1)}: טרם תורגם)_', '']
            continue
        m = re.match(r"### (\d+'?)\s*$", l)
        if m:
            cur = m.group(1); continue
        if cur and l.startswith('> '):
            out.append(f'**{cur}** {l[2:].strip()}  ')
            continue
        m = re.match(r'- \*\*הערת שוליים:\*\*\s*(.*)', l)
        if cur and m and m.group(1).strip():
            notes.append(m.group(1).strip())
            for i in range(len(out) - 1, -1, -1):
                if out[i].startswith(f'**{cur}** '):
                    out[i] = out[i].rstrip() + f'[^{len(notes)}]  '
                    break
# collapse multiple blank lines
res = []
for l in out:
    if l == '' and res and res[-1] == '':
        continue
    res.append(l)
if notes:
    res += ['', '---', '']
    res += [f'[^{i}]: {n}' for i, n in enumerate(notes, 1)]
open(os.path.join(HERE, 'translation.rtl.md'), 'w', encoding='utf-8').write('\n'.join(res).rstrip('\n') + '\n')
print('lines', sum(1 for l in res if l.startswith('**')), 'footnotes', len(notes))
