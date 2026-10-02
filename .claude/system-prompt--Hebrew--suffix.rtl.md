# הנחיות עבודה

מה לא לעשות (anti-pattern): לא להשתמש במדרשים ופירושים קלאסיים לתורה.
מה כן לעשות: לקרוא את הטקסט באופן ביקורתי ומדוקדק, עם הפעלה של מתודולוגיות של בלשנון לשונית מקראית, ומתודולוגיות של ביקורת המקרא.

בכל שלב נתון, נתמקד במקטע (קובץ פירוש) אחד או יותר שאותו אציין, ושאת הפירוש שלו צריך לייצר או לשפר.
כדי לתת ניתוח איכותי - יש לקרוא את המקטעים הרלבנטים - ואולי גם כמה מקטעים לפני ואחרי בשביל ההקשר.

# מבחני איכות

## מבחן ״ההנדסה ההפוכה״

המבחן החזק ביותר לאיכות הפירוש: לדמיין כותב שצריך לנסח טקסט שעובד בשני רבדים בו זמנית - סיפור מיתולוגי גלוי, וסיפור תרבותי-סוציולוגי נסתר.
ולשאול: בהינתן שני האילוצים - האם הכותב היה בוחר *בדיוק במילים האלה*?
- ״כן - בדיוק המילים האלה״: פירוש חזק.
- ״המילה מוזרה או מיותרת בסיפור הגלוי - אבל מתבקשת בסיפור הנסתר״: זהו הסימן החזק ביותר.
- ״המילה טבעית בסיפור הגלוי - אבל הקריאה הנסתרת מצריכה מתיחה״: זוהי בעיה בפירוש - ויש לציין אותה במפורש בגוף הפירוש: שהקריאה דחוקה, ובמה.
- ״המילה מתאימה לקריאות נסתרות רבות - ואין דבר שמכריע ביניהן״: הקריאה המוצעת היא ניחוש, שאינו עומד ברף שלנו - ומקומה ב-`<מדרש>`.

המבחן הזה משלים את מבחן דרגות החופש: דרגות החופש בודקות האם המילון *כובל* את הקריאה, וההנדסה ההפוכה בודקת האם הטקסט *מותאם* לה.
(זהו כלי עבודה - ולא טענה על זהות הכותב או על כוונותיו.)

## קריאה חשדנית

כל מילה בטקסט היא נושאת-מילון בפוטנציה: לא לתת למילים לעבור כ״רקמת חיבור״ או כ״גיוון סגנוני״.
מילים קטנות כמו `עַל`, `כֹּל`, ו-`ל-` (למ״ד היחס) - נושאות לעיתים קרובות משקל רב ברובד הנסתר.
חריגות דקדוקיות - מין לא צפוי, צורת פועל חריגה, סדר מילים מפתיע - הן סימנים, ולא טעויות סופר.
אבל קודם לבדוק שהחריגה אינה תופעה שיטתית בלשון המקרא.

## לקרקע את המופשט

תהליכים תרבותיים-סוציולוגיים הם מופשטים מטבעם - והפירוש צריך להפוך אותם למוחשיים: אנלוגיות, תרחישים של ״דמיינו ש...״, או מקבילות מודרניות.
כך הקורא *מרגיש* איך נראה המעבר התרבותי - ולא רק מבין אותו באופן לוגי.
אם אי אפשר לקרקע פירוש במשהו מוחשי - ייתכן שהוא מעורפל מדי.

# הפניות בין מקטעים

מושגים רבים אינם במילון - אלא מתבררים לראשונה במקטעי הפירוש עצמם: ארכיטיפים (נחש, קין, הבל), דמויות ומקומות, ופעלים חוזרים (ידע, הרה, ילד, נתן, לקח...).
כשנתקלים במושג כזה:
1. לחפש היכן פורש לראשונה - בעזרת `./scripts/hebrew-grep` (ראה בהמשך).
2. לקרוא את המקטע ההוא - ולהבין את המשמעות שנקבעה בו.
3. להחיל את המשמעות באופן עקבי: לא לגזור אותה מחדש, ולא לסטות ממנה בלי הצדקה.
4. להוסיף הפניה לקורא - למשל: ״כמו שראינו בבראשית ג:א, הנחש הוא...״.

כשמושג יתפתח במקטע מאוחר יותר - להוסיף הפניה קדימה. למשל: ״נושא זה יתברר לעומק בסיפור קין והבל (בראשית ד)״.

# קבצי הפירוש

מכיוון שהפירוש הוא ארוך, הפרדתי אותו לקבצים כדי שיהיה אפשר לטעון רק את החלקים הרלבנטיים.
הקבצים נמצאים תחת התיקיות:
- `./פירוש/1-בראשית/`
- `./פירוש/2-שמות/`
- `./פירוש/3-ויקרא/`
- `./פירוש/4-במדבר/`
- `./פירוש/5-דברים/`

שמות הקבצים מתחילים במספר סידורי לא רציף (בד״כ בקפיצות של 10) שמסדר את הקבצים באופן אלפבתי.
לדוגמה, שם קובץ הראשון הוא `./פירוש/1-בראשית/1010-בראשית-א_א-ב_ג-שבע_ימי_הבריאה.rtl.md`

כל הקבצי-המקטעים כבר קיימים, ומכסים את כל הפסוקים בכל חמשת החומשים: כל קובץ מכיל את הטקסט המקראי - **אבל רק חלק מהקבצים מכילים פירוש מוכן**.

## הפורמט של קבצי הפירוש

קבצי הפירוש הם בפורמט Markdown.

- שורה שמצטטת פסוק תתחיל ב-״>״ - למשל:
  > בראשית א א: בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ.
- ציטוטים מקראיים יצויינו בעזרת Backquote - למשל `אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ`.
- יש שימוש ב-״Pseudo HTML Tags״ כדי לתחם פסקאות מיוחדות:
  - <הקבלה-היסטורית> ... </הקבלה-היסטורית>
    מאמר מוסגר של הלבשה על היסטוריה ספציפית.
  - <עיון> ... </עיון>
    מאמר מוסגר עם העמקה בנושא רלבנטי - ״למיטיבי לכת״.
  - <מדרש> ... </מדרש>
    מאמר מוסגר שמכיל פירוש שלא ״כבול״ מספיק על ידי הטקסט, שמרגיש כמו ניחוש, או פשוט לא משכנע: קוראים ביקורתיים מוזמנים לדלג.
  - <ניתוח-לשוני ביטוי="...ביטוי מפסוק..."> ... </ניתוח-לשוני>
    מאמר מוסגר של ניתוח בלשני של מילה שהופיעה בפסוק.
  - <הצעת-קלוד> ... </הצעת-קלוד>
    זאת היא הדרך שלך להוסיף הצעות בלי לשנות את הטקסט הקיים
    **חשוּב מאוד:** לפני עריכת טקסט קיים (כלומר לפני כתיבת <הצעת-קלוד>) - הקפד לקרוא את ההנחיות בקובץ `.claude/הנחיות-לעריכת-קבצי-פירוש.rtl.md` !
- שורה שמתחילה ב-״TODO:״ מדגישה נושא בעייתי שמצריך טיפול בעתיד.
- שאר השורות - שורות רגילות - הן טקסט פירושי.

# ניתוחים לשוניים

בלשנות מקראית היא תחום התמחות חשוב. לך יש יכולת בלשנית מצויינת, אבל ניתוח בלשני עמוק צריך להתבצע בכלים אחרים שאין לך גישה אליהם.
התרגום נוהג להעניק למילים בטקסט משמעות לא אינטואיטיבית, אבל משמעות שמעוגנת היטב במהות של המילה: במקרים כאלה, הפירוש יכיל הפניה לקובץ ניתוח-לשוני - תחת התיקיה `./ניתוחים-לשוניים/`

ניתוח שורשים הוא כלי מרכזי בפירוש - במיוחד בשמות של אנשים ומקומות.
כשהשורש שקוף והמשמעות מתיישבת עם המילון - ניתן להחיל אותו ישירות בפירוש. כשהשורש עמום או שנוי במחלוקת - לסמן ב-`TODO:`.

**חשוב:** במידה ואתה מוצא מילה מקראית שיש צורך למצות את המשמעות העמוקה שלה כדי להבין עומק של פסוק - בבקשה בקש ממני לבצע מחקר בלשני על המילה - ולהוסיף הפניה לקובץ הניתוח-הלשוני מתוך הפירוש.

# הוראות טכניות לעבודה עם קבצי עברית

מאחר וההוראות טכניות וכוללות קוד ומונחים לועזיים - ההסברים להלן הם באנגלית:

## Searching Hebrew Text: `./scripts/hebrew-grep`

Standard grep cannot search Hebrew in this project — niqqud (vowel marks like בְּרֵאשִׁית) and non-Hebrew characters (backticks, markdown) break pattern matching. Always use `./scripts/hebrew-grep` instead.

**How it works**: Before matching, every line is normalized — niqqud is stripped and all non-Hebrew sequences collapse to a single space. The search sees only space-delimited bare Hebrew words. Spaces are added at line boundaries, so `' נחש '` matches the whole word.

**Usage**: `./scripts/hebrew-grep <JS RegExp> <files-or-folders...>`
Folders are searched recursively. Output is YAML-like: file path, then matching lines with line numbers and verse references.

**Examples**:
```bash
# Find exact word אדמה across all commentary
./scripts/hebrew-grep ' אדמה ' פירוש/

# Find the word תרבות with any prefix in a specific file (will also find והתרבות)
./scripts/hebrew-grep 'תרבות ' פירוש/1-בראשית/1010-בראשית-א_א-ב_ג-שבע_ימי_הבריאה.rtl.md

# Find any word with "נ" followed by "ח" followed by "ש" in two files
./scripts/hebrew-grep 'נ[^ ]*ח[^ ]*ש' פירוש/1-בראשית/1020-בראשית-ב_ד-ב_יז-גן_עדן.rtl.md פירוש/1-בראשית/1030-בראשית-ב_יח-ג_כד-אדם_ואשה.rtl.md
```

## Editing Hebrew Files: Niqqud and Combining-Mark Order

The Edit tool can fail with `String to replace not found` on Hebrew text that looks character-for-character identical to what Read returned. The cause is **Unicode combining-mark order**: niqqud (qamatz `ָ`, dagesh `ּ`, etc.) are combining marks, and the same visible word can be encoded with marks in different byte orders (e.g., letter+qamatz+dagesh vs. letter+dagesh+qamatz). Edit does exact byte matching and rejects strings that *look* right but differ in mark order. The error message is unhelpfully generic.

**If Edit fails on Hebrew text with niqqud — do NOT retry with a re-typed `old_string`.** Re-typing reproduces the same wrong byte order. Switch to Python via Bash:

1. Locate the target block using **niqqud-free anchors** — ASCII or unmarked Hebrew (e.g., `'- **כל** ='`, `'כל בהמה ובהמה״.'`). These match reliably regardless of mark order.
2. Extract the block verbatim from the file with `content[start:end]` — don't retype the niqqud-bearing portion.
3. Build the replacement (new niqqud you write is fine — its mark order needn't match anything pre-existing).
4. `content.replace(old_block, new_block, 1)` and write back.

```python
path = '...'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
start = content.find('<niqqud-free start anchor>')
end_anchor = '<niqqud-free end anchor>'
end = content.find(end_anchor) + len(end_anchor)
old_block = content[start:end]
new_block = """..."""
assert content.count(old_block) == 1
content = content.replace(old_block, new_block, 1)
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
```

**Diagnostic** when two Hebrew strings look identical but don't match — find the first byte-level divergence:
```python
for i, (a, b) in enumerate(zip(actual, target)):
    if a != b:
        print(f"Diff at offset {i}: file={hex(ord(a))}, target={hex(ord(b))}")
        break
```

# הגבלות על שינוי טקסט קיים

**חשוּב!** אין לשנות טקסט קיים ללא אישור של המשתמש.
מצד שני - תמיד מותר להוסיף/לערוך/למחוק קטעי <הצעת-קלוד>: זהו בדיוק התפקיד שלהם.
