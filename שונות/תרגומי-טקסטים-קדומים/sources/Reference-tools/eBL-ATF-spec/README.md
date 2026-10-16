# eBL-ATF specification

- **What:** the formal specification (EBNF + prose) of the ATF dialect used by the electronic Babylonian Library: fragment transliterations, corpus chapters (`#tr.en:` translations, manuscript sigla lines), and **normalised Akkadian** lines (`%n …`, with `|` metrical-foot and `||` caesura markers, as in the eBL Gilgameš and Atraḫasīs editions).
- **URL:** https://github.com/ElectronicBabylonianLiterature/ebl-api/blob/master/docs/ebl-atf.md (raw: https://raw.githubusercontent.com/ElectronicBabylonianLiterature/ebl-api/master/docs/ebl-atf.md)
- **Retrieved:** 2026-10-16
- **Licence:** the ebl-api repository is MIT-licensed (© 2018 Electronic Babylonian Library)
- **File:** `ebl-atf.md` (verbatim copy; already Markdown)

## How to use it
- Read it together with `../ORACC-ATF-and-lemmatization-docs/atf-inline-tutorial.md`. eBL-ATF is "based on Oracc-ATF but … not fully compatible".
- Most relevant sections: *Text lines* → *Word*, *Presence* (breaks/damage), *Normalized Akkadian*, *Chapters* (how the composite text and the manuscript lines (`NinNA1 i 1. …`) are laid out in the `atf` field of `/api/texts/…/display`), *Translation lines*.
- The full machine grammar (Lark) is at `ebl/transliteration/domain/atf_parsers/atf_grammar/ebl_atf.lark` in the same repo.
