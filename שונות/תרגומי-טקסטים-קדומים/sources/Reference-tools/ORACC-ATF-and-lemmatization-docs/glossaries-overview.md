<!-- Extracted from https://oracc.museum.upenn.edu/doc/help/glossaries/index.html on 2026-10-16 by a stdlib HTML->Markdown converter; see raw .html for the original. -->

# Glossaries

## Introduction

Glossaries in Oracc provide a place to collect information about words in a way that can be used by the lemmatizer to create an exhaustive index of words and forms in a corpus. The formal name of the glossary type in Oracc is the Corpus-Based Dictionary, and the abbreviation CBD is often used in Oracc to refer to this type.

An Oracc glossary consists of a brief header and a series of entries. Each entry consists of a series of tags most of which have content that continues on the rest of the line. Each tag must begin a new line, and blank lines are not allowed within entries. When the content is too long to fit on one line comfortably, any tag may be continued onto one or more continuation lines. Continuation lines must begin with one or more space characters.

## Glossary Header

## Core Tags

### @entry ... @end entry

Each glossary article begins with an `@entry` tag. This gives the Citation Form (CF), Guide Word (GW) and Part-of-Speech (POS) for the word, in the form CF [GW] POS, i.e., the GW is in square brackets, and there is a space before the open bracket and after the close bracket. The CF [GW] POS must be unique within a glossary.

The `@entry` tag may be preceded by characters from the ACD module, and may be followed by an exclamation mark, `!`, indicating priority, or an asterisk `*` indicating that the entry is a phrase consisting of a sequence of words which retain their own meanings. PSUs, sequences of words with a meaning distinct from the individual parts, are not marked with the asterisk.

Each article must end with `@end entry` written on its own line.

### @bases

The `@bases` tag is used to list the bases for Sumerian words. Bases are separated by a semicolon (`;`), e.g., `du; du₃`. Bases may be specified as a primary base with alternate transliterations of the base in parentheses, in whch case multiple alternate bases may be separated by a comma followed by a space (`, `), e.g., `sag₉ (sa₆, ša₆, šag₉)`.

Stems can be associated with bases by giving the stem, preceded by an asterisk and followed by a space, immediately before a primary base, e.g., `*du du₇; *dudu du₇-du₇`.

The ACD module also provided facilities for remapping an existing base to a new base.

### @form

The `@form` tag links instances in the corpus to the entries in the glossary. The first element is always a written form as it might occur in the corpus but without any half, square, angle or round brackets. Following the written form various elements may occur depending in part on the language of the corpus. These elements are always marked by one or more characters which indicate the type of the element. No space is allowed between the type character and the data element.

**$ = NORM**
: The normalized version of the writing. This varies by language: in Akkadian, for example, it is the transcription of the word-form, without hyphens and determinatives and with accents. This is not used in the source version of Sumerian glossaries because it can be computed from the morphology (see below).

*** = STEM**
: The STEM, which may be a form of the BASE in Sumerian, or a notation such as D, Š, N, in Akkadian, or possibly other conventions for other languages.

**/ = BASE**
: The BASE utilized in a Sumerian writing. This must match a base given in the `@bases` part of the entry.

**+ = CONT**
: The Sumerian grapheme following the base, used only when that grapheme is the continuation of the end of the BASE, e.g., `-ma` in `inim-ma`. The deconstruction of the grapheme gives the consonant which continues the grapheme followed by the vowel which is normally a morpheme or morpheme constituent.

**# = MORPH**
: The morphology string for the writing.

**## = MORPH2**
: The second morphology string for the writing.

**@ = RWS**
: The RWS, Register or Writing System, for the form.

**COFs and PSUs**
: Special rules apply to `@form` lines for COFs and PSUs, as described in the relevant pages.
: The `@form` tag may be followed by an exclamation mark, `!`, indicating priority.

### @sense

The `@sense` tag gives meanings for the word as well as a Part-of-Speech for the sense, which is the Effective Part-of-Speech (EPOS) in lemmatization.

The `@sense` tag may be preceded by characters from the ACD module, and may be followed by an exclamation mark, `!`, indicating priority.

An optional (in fact, rarely given) guideword specific to the sense, or SGW, may follow the `@sense` tag in square brackets: this is used by the lemmatizer to provide a strict match when testing the inline sense for a match to the glossary sense.

The first required element after the `@sense` tag is a valid Part-of-Speech. After the POS comes the meaning for the sense.

### @note

### @inote

## Additional Tags

### @equiv

### @isslp

### @bib

Back to top ^^

 Released under a [Creative Commons Attribution Share-Alike license 3.0](https://oracc.museum.upenn.edu/doc/about/licensing/index.html), 2014.  [http://www.facebook.com/opencuneiform]  [http://oracc.blogspot.com]  [http://www.twitter.com/oracctivity]

 Oracc uses cookies only to collect Google Analytics data. Read more [here](https://oracc.museum.upenn.edu/doc/about/cookies/index.html); see the stats [here](http://www.seethestats.com/site/oracc.museum.upenn.edu) [http://www.seethestats.com/site/oracc.museum.upenn.edu]; opt out [here](http://tools.google.com/dlpage/gaoptout).

http://oracc.museum.upenn.edu/doc/help/glossaries/
