# Build <project>/translation.rtl.md (the clean reading translation) for projects 3-6 of the law corpus.
# usage: python3 -I laws_build_translation.py <KEY>          (KEY = LE | MAL | LI | UN)
#   Reads <project>/build_translation--head.rtl.md (title + Hebrew introduction) and the project's annotated files in
#   order (laws_config.files). A file whose slug starts with 'prologue' / 'epilogue' gets a "## הפרולוג" /
#   "## האפילוג" heading, and its own "## …" sections become "### …". Laws: the topic headings of
#   laws_config.TOPICS[KEY] become "## …" (placed before the first law of the group), and each "## §N (a–b): heading"
#   becomes "### §N – heading"; any other "## …" section (prologue, colophon) becomes "### …".
#   Each entry becomes "**<label>** <the > line>"; an apparatus field "**הערת שוליים:**" becomes a numbered footnote;
#   a placeholder "<!-- טרם תורגם: … -->" becomes an italic line. Then run laws_verify.py <KEY>.
# Written 2026-10-18 (generalized from 2-חוקי-חמורבי/build_translation.py).
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import laws_config as C

key = sys.argv[1]
P = C.PROJECTS[key]
D = os.path.join(C.HERE, P['folder'])
head = open(os.path.join(D, 'build_translation--head.rtl.md'), encoding='utf-8').read().rstrip('\n')
out = ['<!--', 'GENERATED FILE. Do not edit by hand.',
       f'Built by ../laws_build_translation.py {key} from build_translation--head.rtl.md and the annotated-*.rtl.md files.',
       f'To change the text, edit the annotated files and run: python3 -I ../laws_build_translation.py {key}', '-->', '', head, '']
notes = []
topics = C.TOPICS.get(key, [])
done = set(); big = None


def lawkey(s):
    m = re.match(r'(\d+)(.*)', s)
    return (int(m.group(1)), m.group(2)) if m else (9999, s)


def topic_for(law):
    t = None
    for first, name in topics:
        if lawkey(law) >= lawkey(first):
            t = (first, name)
    return t


for f in C.files(key):
    fn = C.annotated_path(key, f)
    if not os.path.exists(fn):
        out += ['', f'_({f[4]}: טרם תורגם)_', '']; continue
    want = 'הפרולוג' if f[1] == 'prologue' else ('האפילוג' if f[1].startswith('epilogue') else None)
    if want and big != want:
        out += ['', f'## {want}', '']; big = want
    cur = None
    for l in open(fn, encoding='utf-8'):
        l = l.rstrip('\n')
        if l.startswith('## '):
            h = l[3:].strip()
            m = re.match(r'§\s*(\S+?)(?:[–-](\S+?))?\s*\(([^)]*)\)\s*:?\s*(.*)$', h)
            if m:
                big = None
                t = topic_for(m.group(1))
                if t and t[0] not in done:
                    done.add(t[0]); out += ['', f'## {t[1]}', '']
                law = m.group(1) + ('–' + m.group(2) if m.group(2) else '')
                out += ['', f'### §{law} – {m.group(4).strip()}' if m.group(4).strip() else f'### §{law}', '']
            elif h.startswith('הקולופון'):
                out += ['', f'## {h}', '']
            else:
                out += ['', f'### {h}', '']
            continue
        m = re.match(r'<!--\s*טרם תורגם:\s*(.*?)\s*-->', l.strip())
        if m:
            out += ['', f'_({m.group(1)}: טרם תורגם)_', '']; continue
        m = re.match(r"### (\S.*?)\s*$", l)
        if m:
            cur = m.group(1); continue
        if cur and l.startswith('> '):
            out.append(f'**{cur}** {l[2:].strip()}  '); continue
        m = re.match(r'- \*\*הערת שוליים:\*\*\s*(.*)', l)
        if cur and m and m.group(1).strip():
            notes.append(m.group(1).strip())
            for i in range(len(out) - 1, -1, -1):
                if out[i].startswith(f'**{cur}** '):
                    out[i] = out[i].rstrip() + f'[^{len(notes)}]  '
                    break
res = []
for l in out:
    if l == '' and res and res[-1] == '':
        continue
    res.append(l)
if notes:
    res += ['', '---', ''] + [f'[^{i}]: {n}' for i, n in enumerate(notes, 1)]
open(os.path.join(D, 'translation.rtl.md'), 'w', encoding='utf-8').write('\n'.join(res).rstrip('\n') + '\n')
print('lines', sum(1 for l in res if l.startswith('**')), 'footnotes', len(notes))
