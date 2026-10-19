<!-- Extracted from https://oracc.museum.upenn.edu/doc/help/editinginatf/advancedconventions/index.html on 2026-10-16 by a stdlib HTML->Markdown converter; see raw .html for the original. -->

# ATF Advanced Conventions

This document describes ATF features which are not needed for everyday documents and which some users will never need.

## Legacy

To save the time and bother of converting legacy transliteration into ATF you can use:

```
#atf: use legacy
```

to get the processor to treat typographic features such as diacritics, half-brackets, and intra-sign square brackets as if they were valid ATF.

## Line Numbers

By default the ATF processor renumbers lines, storing the original line number and generating a new one according to consistently defined rules. This procedure was adopted because of the lack of consistency in numbering administrative texts.

It is possible to suppress this behaviour and, indeed, it is necessary to suppress this behaviour if intertext linking is in use. The relevant protocol to achieve this is:

```

#atf: use mylines
```

## Cells & Fields

Two mechanisms provide structural subdivisions of lines: cells and fields.

Cells are alignment units (like table cells); they can be of use to organize the data in a way that mimics the layout on the object. Fields are logical subdivisions in a line which are not necessarily laid out in a special way on the object. Cells can contain fields but fields cannot contain cells; fields are lower in the structural hierarchy than cells.

Fields can have a type specified so that higher order processors working with the XTF data can work intelligently with them.

In ATF, cells are separated by ampersand characters (`&`); fields are separated by commas. Both separators must be preceded by one or more spaces.

Field types are indicated with an exclamation mark followed by one or more lowercase letters; see the [lexical documentation for examples of how this works](https://oracc.museum.upenn.edu/doc/help/editinginatf/lexicaltexts/index.html).

```

&P123123=UET 3,2
1. a & e

&P123123=UET 3,2
1. a , e

&P123123=UET 3,2
1. e4 ,!sv A
```

## Streams

Streams are XTF's mechanism for entering data several times in several different ways; no automatic alignment is done between streams, but an alignment-group mechanism is provided for those occasions where alignment is a requirement. There are three kinds of stream in XTF:

**MTS: Main Transliteration Stream**
: This is the default line-type and is the only one that is normally used. Lemmatization information is aligned with the MTS unless there is an NTS.

**NTS: Normalized Transliteration Stream**
: This is a transliteration stream in which adjustments have been made to normalize the text; a normal-orthography version of an emesal text could be created using this mechanism, for example. Lemmatization information is aligned with the NTS if present. If NTS and LGS are both given, NTS must come before LGS.

**LGS: Linearized Grapheme Stream**
: This is the sequence of graphemes exactly in order and linearized to the extent possible; this is mainly used in transliterations of ED texts where the presumed reading sequence and the actual grapheme sequence often diverge. No alignment is ever done with the LGS.

**GUS: Gloss Underneath Stream**
: Implemented for compatibility with the SAA corpus, this stream allows glosses which appear on the tablet underneath the main text line to be given in their own line.

In ATF, the MTS is the unmarked case (the one with the line number). The NTS is introduced by the sequence equals-period-space at the start of the line (`=. `). The LGS is introduced by the sequence equals-colon-space at the start of the line (`=: `). A simple, if contrived example of all the streams is:

```

&P246246=Streams
1. a
={ e
=. e4
=: A
#lem: a[water]

```

## Alignment

Alignment between MTS and NTS can be effected through the alignment-groups mechanism in which groups of words can be defined and labelled such that the groups in one stream correspond to the groups in the other stream.

If groups are used at all in a stream then every word in the stream must belong to a group.

In ATF, alignment groups must be enabled using a protocol; the groups are then indicated using matched parentheses with one or more lowercase letters following the closing parenthesis:

```

&P122221=Align
#atf: use alignment-groups
1.  %u  (UD)a  (GAL UM ME)b (BA LAGAB)c
=.      (kur)a (umeda)b     (ba-jen)c
#lem: 	kur[mountain]; umeda[nurse]; jen[go]

```

## Zones

Zones are an experimental feature; at the schema level they are defined in the GDL, but it is convenient to discuss them here because they are another mechanism for grouping graphemes. The concept is that part of an inscription, e.g., a case, may exhibit ordering which may not be linear but is nevertheless be based on some spatial relationship between signs. Transliterators can assign graphemes to zones and label the graphemes by zone.

In ATF, zones are indicated using a dollar sign followed by digits (e.g., `$1`. In the Ebla version of the text in the alignment example, the words are stacked vertically as in the image here. This could be transliterated as follows:

```

&P122221=Align
#atf: use alignment-groups
1.  %u  (UD$1)a (GAL$2 UM$3 ME$3)b (BA$4 LAGAB$4)c
=.      (kur)a  (umeda)b           (ba-jen)c
#lem: 	kur[mountain]; umeda[nurse]; jen[go]
```

 18 Dec 2019 osc at oracc dot org

Steve Tinney

Steve Tinney, 'ATF Advanced Conventions', *Oracc: The Open Richly Annotated Cuneiform Corpus*, Oracc, 2019 [http://oracc.museum.upenn.edu/doc/help/editinginatf/advancedconventions/]

Back to top ^^

 Released under a [Creative Commons Attribution Share-Alike license 3.0](https://oracc.museum.upenn.edu/doc/about/licensing/index.html), 2014.  [http://www.facebook.com/opencuneiform]  [http://oracc.blogspot.com]  [http://www.twitter.com/oracctivity]

 Oracc uses cookies only to collect Google Analytics data. Read more [here](https://oracc.museum.upenn.edu/doc/about/cookies/index.html); see the stats [here](http://www.seethestats.com/site/oracc.museum.upenn.edu) [http://www.seethestats.com/site/oracc.museum.upenn.edu]; opt out [here](http://tools.google.com/dlpage/gaoptout).

http://oracc.museum.upenn.edu/doc/help/editinginatf/advancedconventions/
