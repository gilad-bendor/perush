# Extract the project translation (and section headings) from a saved ORACC per-text HTML page.
# usage: python3 -I oracc_html2tr.py <in.html> <out.md> <title> <url>
#   The ORACC zips have no translations; the per-text HTML view (https://oracc.museum.upenn.edu/<project>/<id>/html)
#   does (guidelines 4.6). Output: one paragraph per translation unit, prefixed with the transliteration line
#   labels it spans (first..last), and the section headings (§N ...) as "## " lines. Credits line kept verbatim.
#   Download first with: curl -s --max-time 60 -o <id>.html https://oracc.museum.upenn.edu/<project>/<id>/html
# Written 2026-10-17 (Esarhaddon's Succession Treaty, SAAo saa02 Q009186 / P500551).
import sys, re, html

src, out, title, url = sys.argv[1:5]
s = open(src, encoding='utf-8').read()


def text(frag):
    frag = re.sub(r'<span class="xtr-label">.*?</span>', '', frag)
    frag = re.sub(r'<sup[^>]*>(.*?)</sup>', r'^\1', frag)
    frag = re.sub(r'<[^>]+>', '', frag)
    return re.sub(r'\s+', ' ', html.unescape(frag)).strip()


# map tlit row id -> label, in document order
rows = re.findall(r'<tr id="([^"]+)" class="l[^"]*"[^>]*>.*?<span class="xlabel ">([^<]*)</span>', s)
order = [r for r, _ in rows]
label = dict(rows)
pos = {r: i for i, r in enumerate(order)}

lines = [f'# {title}', '', f'Web: {url}', '',
         'Project translation extracted from the ORACC HTML view (rank 3 in our hierarchy; consult only after our own reading).',
         'Each paragraph: [first label – last label of the transliteration lines it translates] text. "## " = section heading.', '']
# walk headings and translation cells in document order
for m in re.finditer(r'<td class="xtr-h1">(.*?)</td>|<td class="t1 xtr" data-tlit-id="([^"]+)"[^>]*?(?:rowspan="(\d+)")?[^>]*>(.*?)</td>', s, re.S):
    if m.group(1) is not None:
        lines += ['', '## ' + text(m.group(1)), '']
        continue
    tid, span, body = m.group(2), int(m.group(3) or 1), m.group(4)
    if 'xtr-dollar' in body:
        t = text(body)
        lines.append(f'*({t or "ruling"})*  ')
        continue
    first = label.get(tid, tid)
    i = pos.get(tid)
    last = label.get(order[i + span - 1], '') if i is not None and i + span - 1 < len(order) else ''
    rng = first if not last or last == first else f'{first} – {last}'
    lines.append(f'**[{rng}]** {text(body)}  ')
cm = re.search(r'<hr class="credits"/>(.*?)</div>', s, re.S)
if cm:
    lines += ['', '---', '', text(cm.group(1))]
open(out, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print('units', sum(1 for l in lines if l.startswith('**[')), 'headings', sum(1 for l in lines if l.startswith('## ')))
