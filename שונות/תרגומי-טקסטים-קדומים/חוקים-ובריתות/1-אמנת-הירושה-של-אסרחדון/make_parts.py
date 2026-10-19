# Split est.json (from build_data.py) into the seven part data files part-1.md … part-7.md (run in the same directory).

import json
d=json.load(open('est.json'))['comp']
parts=[('1','i','107'),('2','108','236'),('3','237','352'),('4','353','413'),('5','414','493'),('6','494','611'),('7','612A','670')]
order=[c['n'] for c in d]
for k,a,b in parts:
    i,j=order.index(a),order.index(b)
    out=[f'# EST part {k}: composite lines {a}–{b} ({j-i+1} entries)','',
         'Data: SAAo Q009186 (composite) and P500551 (Tell Tayinat). C = composite transliteration; N = SAAo normalization; L = lemmas [guide word=contextual sense]; T = Tayinat line(s) aligned by SAAo to this composite line (label = composite_T_column_line; "UNPLACED" = SAAo could not place it, attached here after the preceding placed line); PW = Parpola & Watanabe translation unit starting at this line (rank 3: read only AFTER your own reading); TT = Lauinger translation of the Tayinat unit starting there (rank 3).','']
    for c in d[i:j+1]:
        if 'sec' in c: out+=['', '## '+c['sec'], '']
        out.append(f"### {c['n']}")
        out.append(f"C: {c['tl']}")
        out.append(f"N: {c['norm']}")
        out.append(f"L: {c['lem']}")
        for t in c['tay']:
            fl=' UNPLACED' if t.get('unplaced') else ''
            out.append(f"T [{t['label']}]{fl}: {t['tl']}  || N: {t['norm']}  || L: {t['lem']}")
            if t.get('tr'): out.append(f"   TT: {t['tr']}")
        for a2 in c.get('after',[]): out.append(f"ruling/state after: {a2}")
        if 'pw' in c: out.append(f"PW: {c['pw']}")
        out.append('')
    open(f'part-{k}.md','w').write('\n'.join(out))
    print(k, j-i+1, sum(len(x) for x in out))
