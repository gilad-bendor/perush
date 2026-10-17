# Convert an ORACC CDL corpusjson text to Markdown (transliteration + lemmatisation).
# usage: python3 -I cdl2md.py <zip> <member-path> <out.md> <title> <url> [--morph]
#   --morph (added 2026-10-16): append each word's ePSD2 morphological analysis (f.morph, e.g. {mu.n:~}) and
#   base to the lem: line -- for Sumerian it decides hamtu/maru and the prefix chain (guidelines 4.6).
import sys, json, zipfile

zf, member, out, title, url = sys.argv[1:6]
MORPH = '--morph' in sys.argv[6:]
d = json.loads(zipfile.ZipFile(zf).read(member))


def gdl(items):
    s = ''
    for g in items:
        t = ''
        if 'det' in g:
            inner = gdl(g.get('seq', []))
            t = '{' + inner + '}'
        elif 'x' in g:
            t = {'ellipsis': '…', 'disamb': '', 'newline': ''}.get(g['x'], 'x')
            if g['x'] not in ('ellipsis',):
                t = g.get('x') if g['x'] in ('x',) else t
        elif 'q' in g:
            t = g['q']
        elif 'v' in g:
            t = g['v']
        elif 's' in g:
            t = g['s']
        elif 'n' in g and 'form' in g:
            t = g['form']
        elif 'c' in g and isinstance(g.get('seq'), list):  # compound
            t = g.get('form') or gdl(g['seq'])
        elif 'gg' in g:
            t = gdl(g.get('group', []))
            if g['gg'] == 'logo':
                pass
        elif 'seq' in g:
            t = gdl(g['seq'])
        elif 'group' in g:
            t = gdl(g['group'])
        else:
            t = g.get('form', '')
        if g.get('queried'):
            t += '?'
        if g.get('break') == 'damaged':
            if g.get('ho'):
                t = '⸢' + t
            if g.get('hc'):
                t = t + '⸣'
        if g.get('breakStart') or (g.get('o') == '[' and g.get('break') == 'missing'):
            t = '[' + t
        if g.get('breakEnd') and g.get('break') == 'missing':
            t = t + ']'
        if g.get('o') in ('<', '>'):
            t = '⟨' + t + ('' if g.get('c') else '⟩')
        elif g.get('o') in ('<<', '>>'):
            t = '«' + t + ('' if g.get('c') else '»')
        elif 'o' in g and g['o'] not in ('[', ']'):
            t = g['o'] + t
        if g.get('c') in ('<', '>'):
            t = t + '⟩'
        elif g.get('c') in ('<<', '>>'):
            t = t + '»'
        elif 'c' in g and isinstance(g['c'], str) and g['c'] not in ('[', ']'):
            t = t + g['c']
        s += t + (g.get('delim') or '')
    return s


lines = []
cur = None


def flush():
    global cur
    if cur:
        tr = ' '.join(cur['w']).replace('] [', ' ').replace('][', '')
        lines.append(f"**{cur['label']}** {tr}  ")
        lem = ' '.join(cur['lem'])
        if lem.strip():
            lines.append(f"  <sub>lem: {lem}</sub>  ")
    cur = None


def walk(nodes):
    global cur
    for n in nodes:
        k = n.get('node')
        if k == 'c':
            walk(n.get('cdl', []))
        elif k == 'd':
            t = n.get('type')
            if t == 'line-start':
                flush()
                cur = {'label': n.get('label') or n.get('n'), 'w': [], 'lem': []}
            elif t == 'nonx':
                flush()
                st = ' '.join(x for x in [n.get('extent', ''), n.get('scope', ''), n.get('state', '')] if x)
                lines.append(f"*({st})*  ")
            elif t in ('surface', 'object', 'column'):
                flush()
                lines.append(f"\n### {t}: {n.get('label', '')}\n")
        elif k == 'l':
            f = n.get('f', {})
            w = n.get('frag') or gdl(f.get('gdl', [])) or f.get('form', '')
            if cur is None:
                cur = {'label': '?', 'w': [], 'lem': []}
            cur['w'].append(w)
            if f.get('cf'):
                extra = ''
                if MORPH and (f.get('morph') or f.get('base')):
                    extra = '{' + ';'.join(x for x in (f.get('morph', ''), f.get('base', '')) if x) + '}'
                cur['lem'].append(f"{f['cf']}[{f.get('gw', '')}]{f.get('pos', '')}{extra}")
            else:
                cur['lem'].append(f.get('pos', 'X') or 'X')
        elif k == 'll':  # ambiguous lemmatisation
            ch = n.get('choices') or []
            if ch:
                walk([ch[0]])


walk(d['cdl'])
flush()
hdr = [f'# {title}', '', f'ORACC text {d.get("textid")} ({d.get("project")}), exported {d.get("UTC-timestamp")}. Licence: {d.get("license")}.',
       f'Web: {url}', '',
       'Converted from ORACC CDL JSON (corpusjson). Each line: label + transliteration (ORACC conventions: ŋ = ĝ, [ ] = missing, ⸢ ⸣ = damaged, {d} = determinative);',
       '"lem:" = ePSD2 lemmatisation citation-form[guide-word]POS for each word (X/u = unlemmatised)' + ('; {morph;base} = ePSD2 morphological analysis and base.' if MORPH else '.'), '']
open(out, 'w', encoding='utf-8').write('\n'.join(hdr + lines) + '\n')
print('lines', sum(1 for l in lines if l.startswith('**')))
