<!-- Extracted from https://oracc.museum.upenn.edu/doc/help/editinginatf/primer/index.html on 2026-10-16 by a stdlib HTML->Markdown converter; see raw .html for the original. -->

# Oracc ATF Primer

A very quick start to get you up and running with your first ATF texts by giving some annotated examples.

## Example 1

Let's start with an example:

```

&P348865 = SpTU 5, 283
#project: cams
#atf: lang akk-x-ltebab
#atf: use unicode

@tablet

@obverse
1.	ṭup-pi! E₂ ep-šu₂ sip-pu rak-su E₂ rug-gu-bu
2.	{giš}IG SAG.KUL kun-nu KI{+ti₃} {id₂}har ša₂ {d}NA₃
$ single ruling
3.	40?# ina 1 KUŠ₃ US₂ AN.TA {tu₁₅}SI.SA₂ DA E₂ ša₂

```

The various ATF features illustrated here are:

**The `&-line`**
: Every text begins with an `&-line` giving the ID and the text's designation according to the CDLI catalog; if your text is not yet in the catalog, e-mail cdli@cdli.ucla.edu or osc@oracc.org to get the ID and designation.

**`#project: cams`**
: It is mandatory that you specify the project that the text belongs to. The ATF file is not valid if this line is omitted, as the #project line sends essential information to the server and is used for validation and lemmatisation. In addition, this line must come before the #atf protocol lines.

**`#atf: lang akk-x-stdbab`**
: You need to specify the main [language and dialect](https://oracc.museum.upenn.edu/doc/help/languages/index.html) for the text; for Sumerian just write `#atf: lang sux`.

**`#atf: use unicode`**
: You can specify that the transliteration is in [Unicode](https://oracc.museum.upenn.edu/doc/help/visitingoracc/unicode/index.html) (with š, ṣ, ṭ, etc and subscript numerals); if you omit this line then the transliteration must be in ASCII (with sz, s,, and t, and full-size numerals). We strongly recommend that all new ATF files use Unicode for Oracc. [CDLI ATF](https://oracc.museum.upenn.edu/doc/help/editinginatf/cdliatf/index.html) continues to use ASCII.

**`@tablet`**
: You can specify an object type; this is normally @tablet, but others include @bulla and @envelope.

**`@obverse, @reverse`**
: You can specify the part of the object you are transliterating; the edges are given using: `@left @right @top @bottom`.

**Lines of text**
: Lines of text are for the most part just like regular Assyriological practice. See Example 2 for how to do breakage.

**Logograms**
: Logograms can be simply entered as uppercase as is natural in transliterations of Akkadian.

**Determinatives, phonetic complements and glosses**
:

Determinatives are given in curly brackets.

Phonetic complements and glosses are marked with a `+` immediately after the first curly bracket; they are assumed to be in the same language as the rest of the word.

**Rulings**
: Lines ruled on the tablet as paragraph separators, etc., can be marked with $-lines ("dollar-lines").

**Numbers**
: Sexagesimal (base 60) numbers that just use the DIŠ and U signs are transliterated as regular numerals. Numbers in other metrological systems are explicitly qualified as in `1(disz)`. See [the numbers page](https://oracc.museum.upenn.edu/doc/help/editinginatf/cdliatf/numbers/index.html) and the [mathematics page](https://oracc.museum.upenn.edu/doc/help/editinginatf/maths/index.html) for more information (or the [numbers and metrology in CDLI page](https://oracc.museum.upenn.edu/doc/help/editinginatf/cdliatf/numbers/index.html) as appropriate).

You can see [here](http://oracc.museum.upenn.edu/cams/gkab/P348865) [http://oracc.museum.upenn.edu/cams/gkab/P348865] how the entire text appears online in CAMS.

## Example 2

```

&P348658 = SpTU 2, 055
#project: cams
#atf: lang akk-x-ltebab
#atf: use unicode

@tablet

@obverse
1.	ṭup-pi A.ŠA₃ ki-šub-ba#-[a ...]
2.	{id₂}har-ri ša₂ {d}MUATI? x [...]
3.	ša₂ qe₂-reb UNUG#[{ki}]

```

**Damage and breakage**
:

There are no half-brackets in ATF: signs which are damaged are flagged with the hash-sign (`#`) after the grapheme.

Signs which are completely broken away are placed in square brackets; square brackets may not occur inside a grapheme, only before or after it. The ellipsis (`...`) may be used to indicate that an undeterminable number of signs is missing.

Signs which cannot be identified are transliterated as `x`; when a number is missing the convention is to use `n` as in `n(disz)`.

**Querying, Correction and Collation**
: The other flags are the query (`?`) which can be placed after a grapheme to indicate uncertainty of reading; the asterisk (`*`) which indicates a collated reading; and the exclamation mark which indicates correction. After a corrected sign, the actual sign on the tablet may optionally be given: `a!` or `ki!(DI)`.

You can see [here](http://oracc.museum.upenn.edu/cams/gkab/P348658) [http://oracc.museum.upenn.edu/cams/gkab/P348658] how the entire text appears online in CAMS.

## Example 3

This shows a Sumerian text with non-sexagesimal numbers, transliterated in ASCII.

```

&P100099 = AAS 113
#atf: lang sux
@tablet
@obverse
1. 1(ban2) kasz 1(ban2) [...]
2. 1(disz) sila3 [...]
3. 1(u)? [...] gesz
4. 1(barig) kasz#? [...] x [...]
5. 3(ban2) [x]
6. nam-ha-ni sagi
7. {d}gu-la
8. mu-da-gen-na-a
9. iti sze-kar-ra-gal2-la

```

 18 Dec 2019 osc at oracc dot org

Steve Tinney & Eleanor Robson

Steve Tinney & Eleanor Robson, 'Oracc ATF Primer', *Oracc: The Open Richly Annotated Cuneiform Corpus*, Oracc, 2019 [http://oracc.museum.upenn.edu/doc/help/editinginatf/primer/]

Back to top ^^

 Released under a [Creative Commons Attribution Share-Alike license 3.0](https://oracc.museum.upenn.edu/doc/about/licensing/index.html), 2014.  [http://www.facebook.com/opencuneiform]  [http://oracc.blogspot.com]  [http://www.twitter.com/oracctivity]

 Oracc uses cookies only to collect Google Analytics data. Read more [here](https://oracc.museum.upenn.edu/doc/about/cookies/index.html); see the stats [here](http://www.seethestats.com/site/oracc.museum.upenn.edu) [http://www.seethestats.com/site/oracc.museum.upenn.edu]; opt out [here](http://tools.google.com/dlpage/gaoptout).

http://oracc.museum.upenn.edu/doc/help/editinginatf/primer/
