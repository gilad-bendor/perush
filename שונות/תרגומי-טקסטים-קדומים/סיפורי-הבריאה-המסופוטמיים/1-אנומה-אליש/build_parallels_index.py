"""Regenerate the table of ../parallels-index.md from the parallels indexes of the corpus's projects.

Usage (from any directory):  python3 -I build_parallels_index.py
Reads every "### Parallels index (Tablet N)" table in project.md (columns: Line | Akkadian | Hebrew | Bible | Tag | Comment),
files each row under its first Genesis reference (outside backticks; a bare "א:כא" means Genesis), otherwise its first
reference, and rewrites everything after the line "## The table" in ../parallels-index.md (the key findings above it are
kept). Atra-ḫasīs I rows citing Gen 1–5 (flood corpus) are appended as a cross-reference.
Since 2026-10-17 it also reads project 2 (../2-טקסטי-בריאה-ועדן/project.md, "### Parallels index (<Text>)" tables,
same columns) and labels every row with a short text siglum (EE = Enūma eliš; see SIGLA).
Since 2026-10-19 it also reads projects 3 (B&F = Bird and Fish) and 4 (EWO = Enki and the World Order), same format.
"""
import os,re,sys
A=os.path.dirname(os.path.abspath(__file__))
P=os.path.join(A,"project.md"); ATR=os.path.join(A,"..","..","סיפורי-המבול-המסופוטמיים","1-אתרחסיס","project.md"); OUT=os.path.join(A,"..","parallels-index.md")
G={'א':1,'ב':2,'ג':3,'ד':4,'ה':5,'ו':6,'ז':7,'ח':8,'ט':9,'י':10,'כ':20,'ל':30,'מ':40,'נ':50,'ס':60,'ע':70,'פ':80,'צ':90,'ק':100,'ר':200,'ש':300,'ת':400}
def gem(s):
    return sum(G.get(c,0) for c in s)
BOOKS=['בראשית','שמות','ויקרא','במדבר','דברים','יהושע','שופטים','שמואל א','שמואל ב','מלכים א','מלכים ב','ישעיהו','ירמיהו','יחזקאל','הושע','יואל','עמוס','עובדיה','יונה','מיכה','נחום','חבקוק','צפניה','חגי','זכריה','מלאכי','תהלים','משלי','איוב','שיר השירים','רות','איכה','קהלת','אסתר','דניאל','עזרא','נחמיה','דברי הימים א','דברי הימים ב']
refre=re.compile(r'(?:(%s)[\s\-]+)?([א-ת]{1,3}):([א-ת]{1,3})'%'|'.join(sorted(BOOKS,key=len,reverse=True)).replace(' ','[ \\-]'))
def refs(cell):
    out=[]
    for m in refre.finditer(cell):
        b=(m.group(1) or 'בראשית').replace('-',' ')
        b=re.sub(r'\s+',' ',b)
        if b not in BOOKS: continue
        out.append((BOOKS.index(b),gem(m.group(2)),gem(m.group(3)),b,m.group(2),m.group(3)))
    return out
def tables(path, heading_re):
    rows=[]; cur=None
    for l in open(path,encoding='utf-8'):
        m=re.match(heading_re,l)
        if m: cur=m.group(1); continue
        if cur and l.startswith('### ') or (cur and l.startswith('## ')): 
            if not re.match(heading_re,l): cur=None
        if cur and l.startswith('| ') and not l.startswith('| Line') and not l.startswith('|---'):
            cells=[c.strip() for c in l.strip().strip('|').split(' | ')]
            if len(cells)>=6: rows.append((cur,cells))
    return rows
rows=[('EE '+t,c) for t,c in tables(P, r'^### Parallels index \(Tablet (\w+)\)')]
P2=os.path.join(A,"..","2-טקסטי-בריאה-ועדן","project.md")
SIGLA={'Adapa':'Adapa','Enki and Ninḫursaĝa':'E&Nḫ','Enki and Ninmaḫ':'E&Nm','Song of the Hoe':'Hoe','Grain and Sheep':'G&S'}
def sig(name):
    for k,v in SIGLA.items():
        if name.startswith(k): return v
    if 'Eridu' in name: return 'Eridu'
    if 'KAR' in name: return 'KAR 4'
    return name
if os.path.exists(P2):
    rows+=[(sig(t),c) for t,c in tables(P2, r'^### Parallels index \((.+)\)\s*$')]
# projects 3-4 (2026-10-19): Bird and Fish (B&F), Enki and the World Order (EWO); same table format
for sub,sg in (("3-הציפור-והדג","B&F"),("4-אנקי-וסדר-העולם","EWO")):
    p3=os.path.join(A,"..",sub,"project.md")
    if os.path.exists(p3):
        rows+=[(sg,c) for t,c in tables(p3, r'^### Parallels index \((.+)\)\s*$')]
def strip_quotes(c):  # refs only outside backticks
    return re.sub(r'`[^`]*`','',c)
groups={}
for t,c in rows:
    line,akk,heb,bible,tag,com=c[:6]
    rs=refs(strip_quotes(bible))
    if not rs: rs=[(99,0,0,'—','','')]
    gen=[r for r in rs if r[0]==0]
    k=min(gen) if gen else min(rs)
    groups.setdefault(k[:3],[]).append((k,t,line,akk,heb,bible,tag,com))
def sect(k):
    b,ch,v=k
    if b==0 and ch<=11: return f'בראשית {ch}' , 0
    if b==0: return 'Genesis 12–50',1
    if b<=4: return 'Exodus – Deuteronomy',2
    if b==99: return 'No specific verse',4
    return 'The rest of the Bible',3
out=[]
cur=None
ORD=['EE I','EE II','EE III','EE IV','EE V','EE VI','EE VII','Adapa','E&Nḫ','E&Nm','Hoe','G&S','Eridu','KAR 4','B&F','EWO']
order={k:i for i,k in enumerate(ORD)}
n=0
for k in sorted(groups):
    s,_=sect(k)
    if s!=cur:
        cur=s
        title = s if not s.startswith('בראשית') else f'Genesis {k[1]}'
        out.append(f'\n### {title}\n\n| Verse | Text, line | Original | Hebrew rendering | Bible | Tag | Comment |\n|---|---|---|---|---|---|---|')
    for (kk,t,line,akk,heb,bible,tag,com) in sorted(groups[k],key=lambda x:(order.get(x[1],99),)):
        verse = f'{kk[3]} {kk[4]}:{kk[5]}' if kk[0]!=99 else '—'
        out.append(f'| {verse} | {t} {line} | {akk} | {heb} | {bible} | {tag} | {com} |'); n+=1
# Atrahasis I creation rows
atr=tables(ATR, r'^### Parallels index \((Tablet I)\)')
aout=['\n### Atra-ḫasīs I (flood corpus): the creation rows\n','Cross-reference only; the full rows are in `../סיפורי-המבול-המסופוטמיים/1-אתרחסיס/project.md` (Tablet I) and the flood corpus\'s `parallels-index.md`.\n','| Atra-ḫasīs I | Akkadian | Hebrew rendering | Bible | Tag | Comment |','|---|---|---|---|---|---|']
na=0
for t,c in atr:
    rs=refs(strip_quotes(c[3]))
    if any(r[0]==0 and r[1]<=5 for r in rs):
        aout.append('| '+' | '.join(c[:6])+' |'); na+=1
head=open(OUT,encoding='utf-8').read().split('\n## The table\n')[0]+'\n'
open(OUT,'w',encoding='utf-8').write(head+'## The table\n'+'\n'.join(out)+'\n'+'\n'.join(aout)+'\n')
print(n,'rows;',na,'Atr rows')
