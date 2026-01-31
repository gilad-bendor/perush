# $BIBLE-VIEWER - Hebrew Bible Search & Viewing Tool

## Project Purpose

This sub-project is part of the larger "perush" (פירוש) project - a methodological allegorical interpretation of the Hebrew Bible.
The $BIBLE-VIEWER provides a powerful web-based tool for searching and exploring the Hebrew Bible text, with particular emphasis on linguistic analysis through Strong's number support.

The tool is publicly accessible at:
https://gilad-bendor.github.io/perush/bible-viewer.html

However, for debugging - it is accessible at:
file://<the parent "perush" folder>/docs/bible-viewer.html

## Key Features

### Main Verses Display
The main area (CSS-selector `#verses-container`) contains *all* the verses in the Bible (CSS-selector `#verse`). Example verse element:
```html
<div class="verse" data-book="בראשית" data-chapter="0" data-verse="0" data-index="0" data-searchable=" בראשׁית&lt;7225&gt; ברא&lt;1254&gt; אלהימ&lt;430&gt; את&lt;853&gt; השׁמימ&lt;8064&gt; ואת&lt;853&gt; הארצ&lt;776&gt; ">בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ</div>
```

Features:
- Full Hebrew Bible text (Tanakh) with each verse on its own line
- Toggle display of nikud (vowel points) and ta'amim (cantillation marks)
- Optional verse location prefixes
- RTL (right-to-left) layout with mobile-responsive design

### Search Panel
The bottom-panel (CSS-selector `#footer`) contains the search-form (CSS-selector `#search-wrapper`):
- **Extended Regular Expressions** with Hebrew-specific enhancements (see Linguistic Analysis below)
- **Strong's Number Integration**: Double-click any word to search all its inflections
- Final/regular letter equivalence (ך=כ, ם=מ, ן=נ, ף=פ, ץ=צ)
- Ignores nikud and ta'amim during search

## Linguistic Analysis Platform

This tool serves as a powerful platform for linguistic research on biblical Hebrew verbs and nouns. The key capabilities:

### Strong's Numbers System
The tool integrates [Strong's Concordance numbers](https://en.wikipedia.org/wiki/Strong's_Concordance#Strong's_numbers) - a numbering system where every Hebrew word in the Bible is assigned a number based on its semantic meaning (not just spelling). This allows finding all inflections and forms of a word regardless of conjugation.

**Important nuance**: A single Hebrew root may have multiple Strong's numbers if it carries different meanings. For example, the root ע.נ.ה is split into:
- [H6030](https://biblehub.com/hebrew/6030.htm) - to answer, respond, sing
- [H6031](https://biblehub.com/hebrew/6031.htm) - to afflict, oppress
- [H6032](https://biblehub.com/hebrew/6032.htm) - Aramaic form (in Daniel)

### Double-Click Word Lookup
Double-clicking any word in the text automatically:
1. Identifies the word's Strong's number
2. Searches for ALL occurrences of that Strong's number across the entire Bible
3. Displays results with the matching words highlighted

This is invaluable for studying how a specific Hebrew concept appears throughout Scripture.

### Advanced Search Syntax

**Simple searches with spaces:**
- `הלך` - finds any word containing "הלך" or "הלכ" anywhere
- ` הלך` (space before) - finds words **starting** with "הלך"
- `הלך ` (space after) - finds words **ending** with "הלך"
- ` הלך ` (spaces both sides) - finds the **exact** word "הלך" only

**Special Hebrew patterns (extensions to standard regex):**
- `@` - matches zero or more of א,ה,ו,י (matres lectionis). Example: `ה@ל@ך` matches הלך, הליך, הולך, etc.
- `#` - matches any single Hebrew letter. Example: `ה#לך` matches הולך, המלך, הפלך, etc.
- `<...>` - searches by Strong's number or root word:
  - `<6030>` - all occurrences of Strong's H6030
  - `<6030|6031>` - multiple Strong's numbers
  - `<ענה>` - all Strong's numbers whose root word matches "ענה"

**Standard regex capabilities:**
- `.` - any character including space (can span words)
- `[...]` - character class, e.g., `[אבג]`
- `[^...]` - negated character class
- `(א|ב|ג)` - alternation
- `*`, `+`, `?`, `{n,m}` - repetition quantifiers

**Complex search examples:**
- ` ה@ל@ך #*פנ` - a word starting with "ה", with optional אהוי, then "ל", optional אהוי, then final "ך", followed by any letters, then "פנ"
- `<הלך|נפל> #*פנ` - any inflection of "הלך" or "נפל" followed by letters then "פנ"

### Interaction
- Hover on verse: shows location in status bar
- Click on verse: fixates location display with copy options
- Copy-to-clipboard automatically includes verse references
- Resizable split-pane for search results

## Technical Architecture

### Build System (`build-bible-viewer.js`)
A Node.js script that generates a self-contained HTML file (this happened once - and will probably never happen again - so it can be ignored):

1. **Input Sources:** (from another repo of mine: https://github.com/gilad-bendor/hebrew)
   - `../../hebrew/data/bsb/bsb-words.basic.csv` - Bible text with Strong's numbers
   - `../../hebrew/data/biblehub/biblehub-entries-index.md` - Strong's number definitions

2. **Processing:**
   - Normalizes Hebrew text (shin/sin handling, final letters)
   - Encodes words with Strong's numbers in compact Base64 format
   - Inlines CSS and JavaScript into single HTML file

3. **Output:**
   - `../docs/bible-viewer.html` - Self-contained, deployable HTML file
     This is served as "git-page" via https://gilad-bendor.github.io/perush/bible-viewer.html

### File Structure
```
$BIBLE-VIEWER/
├── build-bible-viewer.js   # Build script (Node.js)
├── __bible-viewer.html     # HTML template
├── __bible-viewer.js       # Client-side JavaScript (1300+ lines)
├── __bible-viewer.css      # Styling with mobile support
└── CLAUDE.md               # This file
```

### Data Encoding in `../docs/bible-viewer.html`
- Hebrew characters encoded as 7-bit indices
- Strong's numbers as 16-bit big-endian values
- Verse data stored as Base64 strings for efficient loading

## Development Commands

```bash
# Build the bible-viewer.html (run from project root)
node build-bible-viewer.js

# Output appears at ../docs/bible-viewer.html
```

## Browser Compatibility

- Modern browsers with ES6+ support
- Uses native `<dialog>` element
- CSS Grid and Flexbox for layout
- LocalStorage for recent searches persistence

## Programmatic Bible Utilities

**NOTE**: The "sibling" project `../$BIBLE-LINGUAL-RESEARCH` provides CLI tools for ClaudeCode to perform similar research.
