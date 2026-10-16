"""Build translation.rtl.md (the whole epic) from translation-I/II/III.rtl.md, then verify it.

Usage (from any directory):  python3 -I build_translation.py
The header (title, general introduction, legend, plot) is HEAD below; each tablet's short introduction is in INTRO.
Everything else is copied verbatim from the tablet files: section headings (demoted ## -> ###), numbered lines,
gap notes, colophons, appendices and footnotes (labels prefixed by tablet: [^1] -> [^II-1]).
Verification: every numbered line equals its source line (modulo the footnote label), footnote references and
definitions match one to one, and no label is duplicated. Exit code 1 on any problem.
"""
import re, sys, os
A = os.path.dirname(os.path.abspath(__file__))
HEAD = r"""<!--
GENERATED FILE. Do not edit by hand.
Built from translation-I.rtl.md, translation-II.rtl.md and translation-III.rtl.md (2026-10-16).
Their section headings, numbered lines, unnumbered lines (gap notes, colophons, appendix notes) and footnotes are copied verbatim.
Changes made by the build: section headings are demoted from ## to ###; footnote labels are prefixed by tablet ([^1] in Tablet II becomes [^II-1]);
each tablet's own introduction is replaced by the short paragraph under its ## heading; the closing "---" lines are dropped.
To change the text, edit the tablet files and run: python3 -I build_translation.py (in this folder). It rebuilds this file and verifies it.
-->

# אַתְרַחֲסִיס: "כשהאלים היו אדם" – האפוס כולו, לוחות I–III

**מהו האפוס.** "אתרחסיס" הוא הסיפור המסופוטמי המלא, שהמבול הוא שיאו. הוא מתחיל לפני שנברא האדם, כשהאלים עצמם עבדו את האדמה, ומסתיים בסדר החדש שנקבע לאנושות אחרי המבול. שמו העתיק הוא שורת הפתיחה שלו, *inūma ilū awīlum*, "כשהאלים היו אדם". השם שבו הוא מוכר היום הוא שם גיבורו, אַתְרַחֲסִיס, שפירושו "רַב־תְּבוּנָה" (*atru* "יתר" + *ḫasīsu* "תבונה"). באותו כינוי נקרא גיבור המבול גם בעלילות גילגמש XI 197.

**הנוסחים.** הנוסח השלם העתיק ביותר הוא הנוסח הבבלי הקדום מסִיפַּר. הסופר אִיפִּיק־אַיָּה העתיק אותו בימי אַמִּי־צָדוּקָה מלך בבל, בסביבות 1640 לפני הספירה, בשלושה לוחות: לפי הקולופון של לוח III היו בהם יחד 1,245 שורות. נשתמרה כמחצית מהן. לצדו ידועים נוסח "לַרְסָה", שקדום עוד יותר (כתב יד C₀), קטעים בבליים תיכונים, "הנוסח האשורי" מספריית אשורבניפל בנינוה (המאה השביעית לפני הספירה), ולוחות בבליים מאוחרים. התרגום הולך אחרי הנוסח הבבלי הקדום, ומשלים את הפערים שבו מן הנוסחים המאוחרים, בסימון גלוי. נוסחי המבול המאוחרים שהם חיבורים בפני עצמם (לוח התיבה, אוגרית, ניפור ועוד) מתורגמים בנפרד, ב[נוסחי מבול אכדיים נוספים](../4-נוסחי-מבול-אכדיים-נוספים/translation.rtl.md).

**המהדורות.** לוח I, שורות 1–333: מהדורת eBL (Electronic Babylonian Library) של ע' חימנס וג' רוצי, עם תרגומו של B. R. Foster. לוח I, שורות 334–416, ולוח II כולו: המהדורה של נ' וסרמן ומ' שטרק ב־SEAL (Sources of Early Akkadian Literature). לוח III: נ' וסרמן, *The Flood: The Akkadian Sources* (2020), כפי שהיא מופיעה ב־SEAL. הפירוק, הנוסחים, ההקבלות לבראשית והשחזורים, שורה אחר שורה, נמצאים בקבצים המוערים: `annotated-I.rtl.md`, `annotated-II.rtl.md`, `annotated-III.rtl.md`.

**המספור.** כל לוח ממוספר כמו במהדורה שלו:
- **לוח I**: מספר שורה רץ (1–416). שורות 1–333 במספור eBL. מספור זה זהה למספור של למברט ומילארד (1969), שבו מצטטים את הטקסט בספרות, חוץ מקטע הבריאה, שבו eBL מפגר אחריהם באחת עד ארבע שורות. שורות 334–416 במספור של למברט ומילארד. שורה שמספרה בא עם אות עברית (**256א**) קיימת רק בנוסח מאוחר.
- **לוח II**: אות של מקטע (A–I) ומספר שורה בתוכו (**E 63**), כי אורך הפערים בין המקטעים אינו ידוע. מספר שבא אחריו אות לטינית (**E 78q**) הוא שורה שקיימת רק בנוסח מאוחר.
- **לוח III**: טור (i–viii) ושורה (**ii 51**), כמו אצל למברט ומילארד.
- **הנספחים**: הטור והשורה של כתב היד C₀.

**איך לקרוא.**

| סימן | פירוש |
|---|---|
| `[מילה]` | הלוח שבור, והמילה משוחזרת (בדרך כלל לפי כתב יד אחר, לפי נוסח מאוחר או לפי גילגמש XI) |
| `[…]` / `…` | חסר, או שאין לו תרגום |
| `(מילה)` | תוספת למובן, שאינה במקור |
| `?` | קריאה או משמעות לא ודאית |
| `*מילה*` | תרגום לא ודאי |
| `⟨מילה⟩` | מילה שהסופר השמיט |
| `{נוסח אשורי}`, `{נוסח בבלי תיכון}`, `{נוסח בבלי חדש}`, `{נוסח בבלי מאוחר}` | בתחילת שורה: השורה קיימת רק בעד מאוחר, ולא בנוסח הבבלי הקדום |
| *(שורות 3–9 חסרות)* | שורה נטויה בין השורות: גודלו המשוער של פער |

השמות: אֶנְקִי (השם השומרי, בכתבי היד הבבליים הקדומים) ואֵאָה (השם האכדי, בשאר) הם אותו אל, אל החוכמה והמים המתוקים, שמציל את הגיבור. אֶנְלִיל הוא מלך האלים, שמביא את המבול; אָנוּ, אבי האלים; נִינְתּוּ, שנקראת גם מָמִי, היא אלת האם שבראה את האדם; אֲדַד, אל הסערה. *ilu* מתורגם "אֵל", ברבים "אלים" (לא "אלוהים").

**העלילה.** האלים הצעירים, האִיגִיגִי, נושאים את עבודת הפרך של חפירת התעלות, ומורדים באנליל. אנקי מציע לברוא את האדם, שיישא את "סל האלים": אלת האם בוללת טיט בבשרו ובדמו של אל שנשחט, ובני האדם נולדים ומתרבים. ה"שאון" של בני האדם מטריד את אנליל, והוא שולח עליהם מגפה, בצורת ורעב, ובכל פעם אנקי מגלה לבן חסותו, אתרחסיס, איך להינצל. לבסוף האלים נשבעים להביא מבול; אנקי, שמסרב להישבע, מגלה את הסוד לקיר של בית קנים, ואתרחסיס שומע ובונה ספינה. המבול נמשך שבעה ימים ושבעה לילות, והאלים, שאין עוד מי שיאכיל אותם, רעבים ומקוננים. אחרי הזבח של אתרחסיס נקבע סדר חדש: מוות, נשים שאינן יולדות ושֵׁדָה שחוטפת תינוקות, כדי שהאנושות לא תרבה שוב."""
INTRO = {
 "I": ("## לוח I: בריאת האדם והמגפה",
       "לוח I (416 שורות לפי הקולופון) מספר על עבודת הפרך של האלים ועל מרדם, על בריאת האדם מטיט ומבשרו ודמו של אל שנשחט, על חוקי הלידה והנישואין, ועל הסבב הראשון: האנשים רבים, השאון שלהם מטריד את אנליל, והוא שולח מגפה. שורות 1–333 לפי eBL, 334–416 לפי SEAL. בסוף הלוח – הקולופון של איפיק־איה."),
 "II": ("## לוח II: הבצורת, הרעב ושבועת המבול",
       "לוח II (439 שורות לפי הקולופון; נשתמרו קטעים, ואורך הפערים ביניהם אינו ידוע) ממשיך את הסבבים: בצורת ורעב, שהולכים ומחריפים עד \"השנה השישית\", שבה מגישים את הבת לסעודה; הריב בין אנקי לאנליל; שבועת המבול, וסירובו של אנקי להישבע. הטקסט מורכב מעדים רבים, וחלק מן השורות קיימות רק בנוסח האשורי. בסופו נספח: סוף הלוח בנוסח לרסה (C₀)."),
 "III": ("## לוח III: המבול",
       "לוח III (390 שורות לפי הקולופון; נשתמרה כמחציתן) מספר על המבול: החלום והקיר, בניית הספינה וטעינתה, הסערה, קינת אלת האם, הזבח, זעמו של אנליל ותשובת אנקי, והסדר החדש. הוא שרד בשני חלקים של לוח אחד שהעתיק איפיק־איה (C₁, C₂). שורות המשותפות לגילגמש XI מתורגמות כאן במילים זהות לאלה שבתרגום גילגמש, ושונות רק היכן שהאכדית שונה. בסופו נספח: תחילת סיפור המבול בנוסח לרסה (C₀)."),
}
LINE = re.compile(r"^\*\*([^*.:]+)\*\* ")
def body(t):
    src = open(f"{A}/translation-{t}.rtl.md", encoding="utf-8").read().split("\n")
    first = next(i for i, l in enumerate(src) if l.startswith("## "))
    text, notes = [], []
    for l in src[first:]:
        if l.startswith("[^"):
            notes.append(l)
        elif l.strip() == "---":
            continue
        else:
            text.append(l)
    fix = lambda s: re.sub(r"\[\^(\d+)\]", lambda m: f"[^{t}-{m.group(1)}]", s)
    out = []
    for l in text:
        if l.startswith("## "):
            l = "#" + l
        out.append(fix(l))
    while out and not out[-1].strip():
        out.pop()
    notes = [fix(n) for n in notes]
    return out, notes, src[first:]
parts = [HEAD]
srcs = {}
for t in ("I", "II", "III"):
    out, notes, src = body(t)
    srcs[t] = src
    h, p = INTRO[t]
    parts.append(f"\n\n{h}\n\n{p}\n\n" + "\n".join(out) + "\n\n" + "\n\n".join(notes))
res = "".join(parts) + "\n"
dst = f"{A}/translation.rtl.md"
open(dst, "w", encoding="utf-8").write(res)

# ---- verification ----
bad = 0
comb = res.split("\n")
# split combined into tablets by the ## headings
idx = {t: next(i for i, l in enumerate(comb) if l == INTRO[t][0]) for t in INTRO}
bounds = {"I": (idx["I"], idx["II"]), "II": (idx["II"], idx["III"]), "III": (idx["III"], len(comb))}
for t, (a, b) in bounds.items():
    cl = [l for l in comb[a:b] if LINE.match(l)]
    sl = [l for l in srcs[t] if LINE.match(l)]
    # source lines with relabeled footnotes
    sl2 = [re.sub(r"\[\^(\d+)\]", lambda m: f"[^{t}-{m.group(1)}]", l) for l in sl]
    if len(cl) != len(sl2):
        print(t, "count mismatch", len(cl), len(sl2)); bad += 1
    for x, y in zip(cl, sl2):
        if x != y:
            print(t, "DIFF\n  ", x, "\n  ", y); bad += 1
    # the same lines with footnote labels stripped equal the raw source
    strip = lambda s: re.sub(r"\[\^[^\]]+\]", "", s)
    if [strip(x) for x in cl] != [strip(y) for y in sl]:
        print(t, "text mismatch after stripping notes"); bad += 1
    # footnote refs and definitions match one to one
    refs = re.findall(r"\[\^(" + t + r"-\d+)\](?!:)", "\n".join(comb[a:b]))
    defs = re.findall(r"^\[\^(" + t + r"-\d+)\]:", "\n".join(comb[a:b]), re.M)
    if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
        print(t, "footnote mismatch", sorted(set(refs)) == sorted(defs), len(refs), len(defs)); bad += 1
    print(f"Tablet {t}: {len(cl)} numbered lines, {len(defs)} footnotes")
labels = re.findall(r"\[\^([^\]]+)\]:", res)
if len(labels) != len(set(labels)):
    print("duplicate footnote labels"); bad += 1
print("problems:", bad)
sys.exit(1 if bad else 0)
