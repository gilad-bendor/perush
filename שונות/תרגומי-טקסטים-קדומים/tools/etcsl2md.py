# Convert ETCSL TEI XML (OTA 2518, 2006 revised edition) to clean UTF-8 Markdown.
# usage: python3 -I etcsl2md.py <c-or-t.xml> <out.md> [source-url]
import re, sys
import xml.etree.ElementTree as ET

SUB = str.maketrans('0123456789', '₀₁₂₃₄₅₆₇₈₉')
LAT = {'aacute': 'á', 'eacute': 'é', 'iacute': 'í', 'oacute': 'ó', 'uacute': 'ú', 'ouml': 'ö', 'uuml': 'ü',
       'auml': 'ä', 'imacr': 'ī', 'amacr': 'ā', 'umacr': 'ū', 'emacr': 'ē', 'ucirc': 'û', 'icirc': 'î',
       'acirc': 'â', 'ecirc': 'ê', 'times': '×', 'plus': '+', 'commat': '@', 'aleph': 'ʾ', 'szlig': 'ß',
       'hr': '———', 'amp': '&', 'lt': '<', 'gt': '>', 'quot': '"', 'apos': "'", 'ccedil': 'ç', 'egrave': 'è',
       'agrave': 'à', 'ndash': '–', 'mdash': '—', 'shy': ''}
TRANS_ENT = {'c': 'š', 'C': 'Š', 'g': 'ĝ', 'G': 'Ĝ', 'h': 'ḫ', 'H': 'Ḫ', 's': 'ṣ', 'S': 'Ṣ', 't': 'ṭ', 'T': 'Ṭ'}


def sux(s):
    """ETCSL ASCII Sumerian -> conventional Unicode: c=š j=ĝ h=ḫ, sign indices subscripted."""
    s = s.translate(str.maketrans({'c': 'š', 'j': 'ĝ', 'h': 'ḫ', 'C': 'Š', 'J': 'Ĝ', 'H': 'Ḫ'}))
    # digits directly following a letter are sign indices -> subscript (standalone numerals stay)
    s = re.sub(r'(?<=[A-Za-zšĝḫŠĜḪ])(\d+)', lambda m: m.group(1).translate(SUB), s)
    s = s.replace('x', 'ₓ') if False else s
    return s


def prep(xml, mode):
    # replace entities by private markers so ElementTree can parse
    def ent(m):
        n = m.group(1)
        if n == 'X':
            return ''
        if n in LAT:
            return LAT[n]
        if mode == 'eng' and n in TRANS_ENT:
            return TRANS_ENT[n]
        if mode == 'sux' and n in TRANS_ENT:  # in Sumerian context, &c; etc. are letters
            return {'c': 'c', 'C': 'C', 'g': 'j', 'G': 'J', 'h': 'h', 'H': 'H'}.get(n, TRANS_ENT[n])
        if re.fullmatch(r's\d', n):
            return n[1]
        return '' + n + ''  # determinative
    return re.sub(r'&([A-Za-z0-9]+);', ent, xml)


def det_sux(s):
    return re.sub('([^]+)', lambda m: '{' + sux(m.group(1)) + '}', s)


def render_l(l, spantypes):
    out = []

    def walk(e, in_note=False):
        tag = e.tag
        if tag == 'note':
            out.append(('raw', '*' + ''.join(e.itertext()).strip() + '* '))
            out.append(('tail', e.tail))
            return
        if tag == 'gloss':
            out.append(('raw', '(gloss: '))
            out.append(('s', ''.join(e.itertext())))
            out.append(('raw', ')'))
            out.append(('tail', e.tail))
            return
        pre = {'damage': '⸢', 'damageEnd': '⸣', 'supplied': '[', 'suppliedEnd': ']', 'corrEnd': None}.get(tag)
        if tag in ('damage', 'damageEnd', 'supplied', 'suppliedEnd'):
            out.append(('raw', pre))
        elif tag == 'corr' and e.get('resp'):
            r = e.get('resp')
            out.append(('raw', {'scrOm': '⟨', 'scrAdd': '«'}.get(r, '⟨')))
            out.append(('corr', {'scrOm': '⟩', 'scrAdd': '»'}.get(r, '⟩')))
        elif tag == 'corrEnd':
            # close most recent open corr
            for i in range(len(out) - 1, -1, -1):
                if out[i][0] == 'corr':
                    close = out[i][1]
                    out[i] = ('raw', '')
                    out.append(('raw', close))
                    break
        elif tag == 'addSpan':
            t = e.get('type')
            if t in ('secondary', 'additional'):
                out.append(('raw', ' ('))
        elif tag == 'anchor':
            t = spantypes.get(e.get('id'))
            if t in ('secondary', 'additional'):
                out.append(('raw', ')'))
        elif tag == 'w':
            out.append(('raw', ' '))
        if tag == 'w' and e.get('form') == '' and ''.join(e.itertext()) == '':
            out.append(('raw', '…'))
        else:
            if e.text and tag not in ('l',):
                out.append(('s', e.text))
            elif e.text and tag == 'l':
                out.append(('s', e.text))
            for c in e:
                walk(c)
                if c.tag != 'note' and c.tag != 'gloss' and c.tail:
                    out.append(('s', c.tail))
        if tag == 'corr' and e.get('sic'):
            out.append(('raw', '(!)'))
        if tag == 'unclear':
            out.append(('raw', '?'))
        if tag == 'w':
            out.append(('raw', ' '))

    walk(l)
    s = ''
    for kind, v in out:
        if v is None or kind == 'corr':
            continue
        if kind == 'tail':
            if v and v.strip():
                s += sux(v)
            continue
        if kind == 's':
            s += sux(v.replace('\n', ' '))
        else:
            s += v
    s = det_sux(s).replace('', 'X')
    s = re.sub(r'\s+', ' ', s).strip()
    s = re.sub(r'\(\s+', '(', s).replace(' )', ')')
    s = re.sub(r'\[\s+', '[', s)
    s = re.sub(r'\s+\]', ']', s)
    s = re.sub(r'⸢\s+', '⸢', s)
    s = re.sub(r'\s+⸣', '⸣', s)
    s = s.replace('⸣⸢', '').replace('][', '')
    s = re.sub(r'\s+([⟩»])', r'\1', s)
    s = re.sub(r'([⟨«])\s+', r'\1', s)
    return s


def translit(root):
    spantypes = {}
    for a in root.iter('addSpan'):
        spantypes[a.get('to')] = a.get('type')
    lines = []
    body = root.find('text')

    def rec(e, seg=''):
        for c in e:
            if c.tag in ('div1', 'div2'):
                n = c.get('n') or ''
                typ = c.get('type') or ''
                lines.append('')
                lines.append(('## ' if c.tag == 'div1' else '### ') + (typ.capitalize() + ' ' + n).strip())
                lines.append('')
                rec(c, n if typ == 'segment' else seg)
            elif c.tag == 'head':
                lines.append('**' + ''.join(c.itertext()).strip() + '**')
                lines.append('')
            elif c.tag == 'gap':
                lines.append('*(' + c.get('extent', '') + ')*  ')
            elif c.tag == 'l':
                n = c.get('n')
                lid = c.get('id', '')
                lines.append(f'{n}. {render_l(c, spantypes)}  ')
            elif c.tag == 'lg':
                rec(c, seg)
            elif c.tag == 'note':
                lines.append('*[note: ' + ''.join(c.itertext()).strip() + ']*  ')
            elif c.tag == 'altGrp':
                pass
            else:
                rec(c, seg)
    rec(body)
    return lines


def eng_inline(e):
    s = ''
    if e.text:
        s += e.text
    for c in e:
        if c.tag == 'gap':
            s += ' *(' + c.get('extent', '') + ')* '
        elif c.tag == 'note':
            s += ' [note: ' + eng_inline(c).strip() + '] '
        elif c.tag == 'foreign':
            s += '*' + eng_inline(c) + '*'
        elif c.tag == 'q':
            s += '“' + eng_inline(c) + '”'
        else:
            s += eng_inline(c)
        if c.tail:
            s += c.tail
    return s


def translation(root):
    lines = []
    body = root.find('text')

    def rec(e):
        for c in e:
            if c.tag in ('div1', 'div2'):
                lines.append('')
                lines.append(('## ' if c.tag == 'div1' else '### ') + ((c.get('type') or '').capitalize() + ' ' + (c.get('n') or '')).strip())
                lines.append('')
                rec(c)
            elif c.tag == 'head':
                lines.append('**' + ''.join(c.itertext()).strip() + '**')
                lines.append('')
            elif c.tag == 'gap':
                lines.append('*(' + c.get('extent', '') + ')*')
                lines.append('')
            elif c.tag == 'p':
                t = eng_inline(c)
                t = det_eng(t)
                t = re.sub(r'[ \t\r\n]+', ' ', t).strip()
                lines.append(f'**{c.get("n")}.** {t}')
                lines.append('')
            else:
                rec(c)
    rec(body)
    return lines


def det_eng(s):
    s = s.replace('', '...')
    return re.sub('([^]+)', lambda m: '{' + m.group(1) + '}', s)


def main():
    src, dst = sys.argv[1], sys.argv[2]
    url = sys.argv[3] if len(sys.argv) > 3 else ''
    raw = open(src, encoding='utf-8', errors='strict').read()
    is_c = '/c.' in src or src.split('/')[-1].startswith('c.')
    title = ''.join(ET.fromstring(prep(raw, 'eng')).find('.//title').itertext()).strip()
    raw = prep(raw, 'sux' if is_c else 'eng')
    root = ET.fromstring(raw)
    hdr = [f'# {det_eng(title)}', '',
           f'ETCSL {root.get("id")} — converted from ETCSL TEI XML (Oxford Text Archive item 2518, revised edition Oct 2006; CC BY-NC-SA 3.0).',
           f'Source file: `{src.split("/")[-1]}`' + (f'; web: {url}' if url else ''), '']
    if is_c:
        hdr += ['Conventions (this conversion): ETCSL ASCII c/j/h → š/ĝ/ḫ; sign indices as subscripts (du₁₁); determinatives in {braces} ({d}, {ki}, {ĝeš});',
                '[ ] = restored; ⸢ ⸣ = damaged (ETCSL web shows /…\\); ? = uncertain reading; ⟨ ⟩ = scribal omission supplied; « » = scribal addition;',
                '(…) parenthesised italic notes = manuscript variants (“1 ms. has instead:”, “1 ms. adds:”); … = lost word(s), X = illegible sign.',
                'Line numbers = ETCSL composite line numbers (with segment letters where the composition has segments).', '']
        body = translit(root)
    else:
        hdr += ['Paragraph labels = ETCSL composite line ranges covered by each translation paragraph. “...” = untranslatable/lost text.', '']
        body = translation(root)
    out = '\n'.join(hdr + body).rstrip() + '\n'
    out = re.sub(r'\n{3,}', '\n\n', out)
    open(dst, 'w', encoding='utf-8').write(out)


main()
