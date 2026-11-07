#!/usr/bin/env python3
"""ETCSL web pages (etcsl.cgi HTML) -> the same Markdown as tools/etcsl2md.py, plus ETCSL's lemmas per word.

When the Oxford Text Archive's bulk zip (llds.ling-phil.ox.ac.uk, item 2518) is unreachable, the live ETCSL site still
serves every composite as HTML (2026-11-07: the OTA server answered 502). This converter reads such a page.

    python3 -I tools/etcslhtml2md.py c <c.X.html> <transliteration.md> <lemmas.tsv> <url> [--seg-prefix]
    python3 -I tools/etcslhtml2md.py t <t.X.html> <translation.md> <url>

Transliteration: ETCSL ASCII c/j/h -> š/ĝ/ḫ, indices subscripted, determinatives in {braces}, /…\\ -> ⸢…⸣, ... -> …,
notes in *…*; one line per <a name> anchor (= one ETCSL composite entry; variant lines that ETCSL numbers, e.g. 232A,
are entries, as in the XML conversion). With --seg-prefix, the labels of segments other than A carry the segment
letter (B1, B2 …) unless ETCSL's label already starts with it. lemmas.tsv: label, word form, ETCSL citation form,
POS, ETCSL's English gloss (from the page's tooltips).
Checked against the XML conversion of 1.8.2.3 (identical lines, 2026-11-07). Never executes anything downloaded.
"""
import html
import re
import sys
from html.parser import HTMLParser

SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
DETS = {'d', 'ki', 'ĝiš', 'mušen', 'na₄', 'id₂', 'kuš', 'ĝeš', 'urud', 'tug₂', 'sar', 'ku₆', 'u₂', 'lu₂', 'gi', 'm', 'dug',
        'tum₉', 'im', 'anše', 'uzu', 'udu', 'e₂', 'sa', 'kaš', 'f', 'mul', 'ninda', 'gud', 'giš', 'urudu', 'zabar', 'šim',
        'iti', 'kur', 'munus', 'ĝišimmar', 'mi₂', 'dub', 'eme', 'ga₂'}  # the determinatives of the XML conversions
SUXMAP = str.maketrans({'c': 'š', 'j': 'ĝ', 'h': 'ḫ', 'C': 'Š', 'J': 'Ĝ', 'H': 'Ḫ'})


def sux(s):
    return s.translate(SUXMAP).replace('...', '…')


class Row(HTMLParser):
    """Collects the rows of the composite table: (anchor name or None, [pieces]), pieces = (kind, text)."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.rows, self.cur, self.td, self.stack, self.h4 = [], None, 0, [], False
        self.tip = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'tr':
            self.cur = {'name': None, 'pieces': [], 'tdn': 0, 'seg': None}
        elif tag == 'td' and self.cur is not None:
            self.cur['tdn'] += 1
        elif tag == 'h4':
            self.h4 = True
        if self.cur is None:
            return
        if tag == 'a' and a.get('name', '').startswith('c'):
            self.cur['name'] = a['name']
        kind = None
        if tag == 'sub':
            kind = 'sub'
        elif tag == 'sup':
            kind = 'sup'
        elif tag == 'span' and a.get('class') == 'note':
            kind = 'note'
        elif tag == 'span' and 'onmouseover' in a:
            m = re.search(r"doTooltip\(event, '(.*)'\)", a['onmouseover'], re.S)
            kind = 'w'
            self.cur['pieces'].append(('wstart', m.group(1) if m else ''))
        self.stack.append((tag, kind))

    def handle_endtag(self, tag):
        if tag == 'h4':
            self.h4 = False
        if tag == 'tr' and self.cur is not None:
            self.rows.append(self.cur)
            self.cur = None
            return
        while self.stack:
            t, k = self.stack.pop()
            if k == 'w':
                self.cur['pieces'].append(('wend', ''))
            if t == tag:
                break

    def handle_data(self, data):
        if self.cur is None:
            return
        if self.h4:
            self.cur['seg'] = data.strip()
            return
        if self.cur['tdn'] < 2:
            return
        kinds = [k for _, k in self.stack if k]
        kind = 'note' if 'note' in kinds else ('sub' if kinds and kinds[-1] == 'sub' else
                                               'sup' if kinds and kinds[-1] == 'sup' else 'text')
        self.cur['pieces'].append((kind, data))


def tip_cf(t):
    t = re.sub(r'<sub>(\d+)</sub>', lambda m: m.group(1).translate(SUB), html.unescape(t))
    t = re.sub(r'<sup>([^<]*)</sup>', r'{\1}', t)
    m = re.match(r'^(.*?) \(([^)]*)\) (.*)$', t)
    if not m:
        return t, '', ''
    return sux(m.group(1)), m.group(2), m.group(3)


def render(pieces):
    out, words, curw = [], [], None
    for kind, s in pieces:
        if kind == 'wstart':
            curw = [s, []]
            continue
        if kind == 'wend':
            if curw is not None:
                words.append((curw[0], ''.join(curw[1])))
            curw = None
            continue
        if kind == 'note':
            if out and out[-1].startswith('\x01'):
                out[-1] += s
            else:
                out.append('\x01' + s)
            continue
        if kind == 'sub':
            t = s.translate(SUB)
            if out and out[-1].endswith('}') and out[-1].startswith('{'):
                out[-1] = out[-1][:-1] + t + '}'
                if curw is not None and curw[1]:
                    curw[1][-1] = out[-1]
                continue
        elif kind == 'sup':
            t = '?' if s == '?' else '!' if s == '!' else '{' + sux(s) + '}'
        else:
            t = sux(s).replace('<', '⟨').replace('>', '⟩')
        out.append(t)
        if curw is not None:
            curw[1].append(t)
    text = ''.join(('*' + ' '.join(x[1:].split()) + '*') if x.startswith('\x01') else x for x in out)
    text = ' '.join(text.split())
    # damage: "/…\\" -> "⸢…⸣"; a "/" with no closing "\\" is ETCSL's own alternative-reading slash
    while re.search(r'/([^/\\]*)\\', text):
        text = re.sub(r'/([^/\\]*)\\', r'⸢\1⸣', text, count=1)
    text = text.replace('\\', '⸣')
    text = re.sub(r'(?<=[A-Z₀-₉)])x(?=[A-Z(])', '×', text)
    # an inline alternative first: "{A} {(*note*) B}" -> "A (*note* B)"
    text = re.sub(r'\{((?:[^{}]|\{[^{}]*\})*)\} \{\((\*[^*]*\*)\)\s*((?:[^{}]|\{[^{}]*\})*)\}', r'\1 (\2 \3)', text)
    # consecutive superscripts are one gloss; a superscript that is no determinative is a gloss
    text = re.sub(r'\}\{(?=-)', '', text)
    text = re.sub(r'\{([^{}]+)\}', lambda m: m.group(0) if m.group(1) in DETS or m.group(1) in '?!' else '(gloss: ' + m.group(1) + ')', text)
    text = re.sub(r'\(sour[cš]e: [^)]*\)', '(!)', text)
    # an inline alternative: "{A} {(*note*) B}" -> "A (*note* B)"; a bare note "(*note*)" -> "*note*"
    text = re.sub(r'\((\*[^*]*\*)\)$', r'\1', text)
    return text, words


def convert_c(src, out_md, out_tsv, url, seg_prefix):
    p = Row()
    p.feed(open(src, encoding='utf-8').read())
    title = html.unescape(re.search(r'<h2>(.*?)</h2>', open(src, encoding='utf-8').read(), re.S).group(1)).strip()
    num = re.search(r'c\.([\d.]+)\.html$', src).group(1) if re.search(r'c\.([\d.]+)\.html$', src) else ''
    lines, tsv, seg = [], [], 'A'
    lines.append(f'# {title} -- a composite transliteration\n')
    lines.append(f'ETCSL c.{num} — converted from the ETCSL web page (etcsl.cgi, the 2006 revised edition; CC BY-NC-SA 3.0) '
                 f'with `tools/etcslhtml2md.py`, because the OTA bulk zip was unreachable (2026-11-07).')
    lines.append(f'Source file: `c.{num}.html`; web: {url}\n')
    lines.append('Conventions (this conversion): ETCSL ASCII c/j/h → š/ĝ/ḫ; sign indices as subscripts (du₁₁); determinatives in {braces} ({d}, {ki}, {ĝeš});')
    lines.append('[ ] = restored; ⸢ ⸣ = damaged (ETCSL web shows /…\\); ? = uncertain reading; ⟨ ⟩ = scribal omission supplied; « » = scribal addition;')
    lines.append('(…) parenthesised italic notes = manuscript variants (“1 ms. has instead:”, “1 ms. adds:”); … = lost word(s), X = illegible sign.')
    lines.append('Line numbers = ETCSL composite line numbers' + (' (segments other than A: the segment letter + the number, e.g. B1).' if seg_prefix else '.') + '\n')
    for r in p.rows:
        if r['seg']:
            seg = r['seg'].replace('Segment', '').strip()
            lines.append(f'\n## {r["seg"]}\n')
            continue
        text, words = render(r['pieces'])
        if r['name']:
            lab = r['name'].split('.', 1)[1]
            if '.' in lab:
                s, n = lab.split('.', 1)
                lab = n if (s == 'A' or not seg_prefix or n.startswith(s)) else s + n
            lines.append(f'{lab}. {text}  ')
            for cf, form in words:
                c, pos, gl = tip_cf(cf)
                form = re.sub(r'/([^/\\]*)\\', r'⸢\1⸣', form).replace('\\', '⸣').replace('/', '⸢')
                tsv.append(f'{lab}\t{form}\t{c}\t{pos}\t{gl}')
        else:
            t = text.strip()
            if not t or t in ('{', '}') or t.startswith('ETCSL') or t.startswith('©'):
                continue
            if t.startswith('(*') and t.endswith('*)'):
                lines.append(f'*[note: {t[2:-2]}]*  ')
            elif t.startswith('*') and t.endswith('*'):
                lines.append(f'*[note: {t[1:-1]}]*  ')
            else:
                lines.append(f'*({t.strip("()")})*  ')
    open(out_md, 'w', encoding='utf-8').write('\n'.join(lines).rstrip() + '\n')
    open(out_tsv, 'w', encoding='utf-8').write('label\tform\tcf\tpos\tgloss\n' + '\n'.join(tsv) + '\n')


def convert_t(src, out_md, url):
    h = open(src, encoding='utf-8').read()
    title = html.unescape(re.search(r'<h2>(.*?)</h2>', h, re.S).group(1)).strip()
    num = re.search(r't\.([\d.]+)\.html$', src).group(1)
    out = [f'# {title}\n', f'ETCSL t.{num} — converted from the ETCSL web page (2006 revised edition; CC BY-NC-SA 3.0) with '
           f'`tools/etcslhtml2md.py`.', f'Source file: `t.{num}.html`; web: {url}\n',
           'Paragraph labels = ETCSL composite line ranges covered by each translation paragraph. “...” = untranslatable/lost text.\n']
    body = h[h.find('<h2>'):]
    for m in re.finditer(r'<h4>(.*?)</h4>|<p>(.*?)</p>', body, re.S):
        if m.group(1):
            out.append(f'## {html.unescape(m.group(1)).strip()}\n')
            continue
        p = m.group(2)
        lab = re.search(r">([^<>]+?)\.</a>", p)
        p = re.sub(r'<span class="(transux|foreign)">(.*?)</span>', r'*\2*', p, flags=re.S)
        p = re.sub(r'<span class="note">(.*?)</span>', r'[note: \1]', p, flags=re.S)
        p = re.sub(r'<a [^>]*>[^<]*?\.</a>', '', p, count=1)
        p = html.unescape(re.sub(r'<[^>]+>', '', p)).replace('……', '......')
        p = ' '.join(p.split())
        out.append((f'**{lab.group(1)}.** ' if lab else '') + p + '\n')
    open(out_md, 'w', encoding='utf-8').write('\n'.join(out).rstrip() + '\n')


if __name__ == '__main__':
    a = sys.argv[1:]
    if a and a[0] == 'c':
        convert_c(a[1], a[2], a[3], a[4], '--seg-prefix' in a)
    elif a and a[0] == 't':
        convert_t(a[1], a[2], a[3])
    else:
        sys.exit(__doc__)
