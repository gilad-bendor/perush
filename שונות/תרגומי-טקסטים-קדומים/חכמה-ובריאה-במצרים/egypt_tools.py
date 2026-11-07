"""Tools of the Egyptian corpus (`חכמה-ובריאה-במצרים/`: the Instruction of Amenemope, the Egyptian creation texts, the
Book of the Heavenly Cow). Run with python3 -I -B from any folder.

    python3 -I -B egypt_tools.py units                    the texts (KEYs), their project folder and line counts
    python3 -I -B egypt_tools.py data KEY [FROM [TO]]     a translator's line data: each base line (with the bracket
                                                         marks), every word with its TLA lemma id, morphology and the
                                                         TLA's German gloss in context, the fixed lines (renderings §7)
                                                         and the lines of the corpus that repeat it, with their Hebrew
    python3 -I -B egypt_tools.py tr KEY [FROM [TO]]       the TLA's (or El Hawary's) German sentence translation: rank 3,
                                                         read only AFTER drafting the lines (guidelines §3)
    python3 -I -B egypt_tools.py fill FILE…               replace every `@` under a `### <label>` by the exact base line
    python3 -I -B egypt_tools.py lex '<regex>'            every corpus line whose transliteration or lemma id matches,
                                                         with its Hebrew: how a word was rendered so far
    python3 -I -B egypt_tools.py lemma TLA-ID|'<regex>'   the forms and German glosses of a TLA lemma (or the lemmas
                                                         whose German gloss matches) across the base texts
    python3 -I -B egypt_tools.py verify [KEY…] [--strict]
    python3 -I -B egypt_tools.py build [KEY…]             translation-<KEY>.rtl.md + each project's translation.rtl.md
    python3 -I -B egypt_tools.py grep '<regex>' [--all]   the unvocalized `>` lines of this corpus (--all: of every
                                                         corpus in the folder), with the source line
    python3 -I -B egypt_tools.py gates                    print the reserved / gated words, traps and formulas
    python3 -I -B egypt_tools.py selftest                 run the gates on the test lines of renderings.md §9

KEYs (renderings.md §1): AM (Amenemope, pBM EA 10474, labels page.line "1.1"…"28.1"), MK (Merikare E 130–138,
pPetersburg 1116A vs., labels "E130"…), MT (the Memphite Theology, Shabaka Stone, El Hawary's line labels "1a"…"64"),
PT571 PT486 PT527 PT600 (Pyramid Text spells, AED wall labels, e.g. "P/V/W.34"), HC (the Heavenly Cow, KV 17 Seti I,
columns "1"…"95"). Annotated file: <project>/annotated-<KEY>.rtl.md.

Base texts (../sources/): AED-TEI (TLA 2018, CC BY-SA 4.0) read through ../tools/aed2md.py; the Memphite Theology from
El-Hawary-2010--Wortschoepfung--OBO-243/memphite-transliteration.tsv (our transcription of El Hawary's edition).

verify checks, per file:
  1. every entry `### <label>` has exactly one `> ` line; entries follow the base's line list (none missing,
     duplicated or out of order; a placeholder `<!-- טרם תורגם: … -->` makes missing lines a note unless --strict);
  2. the backticked line under each heading equals the base line exactly (use `@` + fill);
  3. translation-<KEY>.rtl.md (if built) equals the `>` lines;
  4. RESERVED Hebrew strings in the bracket-free unvocalized `>` line: an error unless the line's licence text (its
     transliteration + TLA lemma ids) matches the licensing regex (renderings.md §5);
  5. TRAPS: unvocalized strings that read as another Hebrew word (renderings.md §5.3);
  6. FORMULAS: where the source line has a fixed formula, the Hebrew must have its fixed rendering (§6);
  7. FIXED lines (§7): the `>` line equals the fixed Hebrew (brackets, marks, punctuation and niqqud ignored), or the
     entry says `[סטייה מן הקבוע: <reason>]`;
  8. repeated lines (identical bracket-free source, 3+ words) with different Hebrew are listed (justify or fix).
Exit code 1 on any error of 1–7.
"""
import difflib
import glob
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, ".."))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import aed2md  # noqa: E402

AED = os.path.join(ROOT, "sources", "AED-TEI")
MT_TSV = os.path.join(ROOT, "sources", "El-Hawary-2010--Wortschoepfung--OBO-243", "memphite-transliteration.tsv")
MT_DE = os.path.join(ROOT, "sources", "El-Hawary-2010--Wortschoepfung--OBO-243", "memphite-german.tsv")

P1 = "1-מוסר-אמנמופה"
P2 = "2-בריאה-במצרים"
P3 = "3-ספר-הפרה-השמימית"
# the tales and Book of the Dead 125 (Round 5 run 6, 2026-10-31)
P4 = "4-מעשה-בשני-האחים"
P5 = "5-פפירוס-וסטקר"
P6 = "6-ספר-המתים-של-נו"
P7 = "7-סינוהה"
P8 = "8-המלח-הנטרף"
# the Instruction for Merikare, whole (Round 6 run 2, 2026-11-06)
P9 = "9-מוסר-למריכרע"
PROJECTS = (P1, P2, P3, P4, P5, P6, P7, P8, P9)
NU_KEYS = {f"NU{i}" for i in range(1, 11)}
BOOK = NU_KEYS | {"BD", "CH"}   # the Book of the Dead keys (formulas scoped to them: renderings §12)
# the gates scoped to the tales (RESERVED entries with a key set); since Round 6 run 2 also the Book of the Dead and
# Merikare (the Decalogue / Ps 15 / Ps 24 / Deut 26 words concern them as much as BD 125)
TALES = {"TB", "WE", "BD", "SI", "SS"} | BOOK | {"MR"}   # the gates scoped to the tales (RESERVED entries with a key set)

# The Book of the Dead of Nu (pBM EA 10477), whole (Round 6 run 2, 2026-11-06): the papyrus's 136 AED chapter texts in
# the papyrus's order (the Bonn Totenbuch-Projekt's object record TM 134299, "Inhalt"; ../sources/AED-TEI/README.md),
# as (chapter token, AED title, TLA id). The chapter token opens every label: "17.1", "64L.3", "149.S1". Chapter 125
# is the KEY BD (Round 5 run 6), in its place between NU8 and NU9.
NU_ORDER = [
    ("17", "Tb 017", "AWPP4QCZNZF5NDZE5HKLKRNOJQ"),
    ("18", "Tb 018", "LSNPRWLZ6FA3HIRAJQHDZ2XIYU"),
    ("18PS", "Tb 018 PS", "TVKHE2O6IBB2JBAHS4EOLVPM74"),
    ("1", "Tb 001", "DDC4MLXQWVF6FLF7M2ENAZOWR4"),
    ("22", "Tb 022", "OJMES7QCI5CJVCB2I4NVS34PJY"),
    ("23", "Tb 023", "URNTUB6RTFAPNPWQBY3MM3TCFI"),
    ("25", "Tb 025", "3CM4IU3AKZDZJFCB4I5BF7CUWM"),
    ("26", "Tb 026", "2OOJ5QQXXFGHPOHII6H6MKUMII"),
    ("28", "Tb 028", "73ZVNKAMGRB3FPDD4VWU4EK6RY"),
    ("28-2", "Tb 028-2 = CT 389", "SCQ4JJSUZNF5PN5UY3XYCKUXKE"),
    ("27", "Tb 027", "TEKPYHYHOJD6PCYR2ALJ6PV424"),
    ("30A", "Tb 030 A", "TLR7GLYQANF3NHQDPCCEVDNUBI"),
    ("30B", "Tb 030 B", "WBZLKJJAHZAWNJ4N7KEFMAMGLQ"),
    ("43", "Tb 043", "U3K2U3NCGRGXBF2EASR53LYKBA"),
    ("24", "Tb 024", "SSIS7RUORJEFFHTOHW47U6WRV4"),
    ("31", "Tb 031", "ZV2MBVJVWRFAFJG2OVQNBBKMBI"),
    ("33", "Tb 033", "YFEGAIA5UNFUJIQ3ZYQ37EO2DU"),
    ("34", "Tb 034", "2ZTBXFWTWVEXRBSEEYH5DWXQ5U"),
    ("35", "Tb 035", "RRKRR7W46BCJZCPEUD5JGHSFPA"),
    ("74", "Tb 074", "5LZXDD5PTFFOPP5Y2TDEAEHQBM"),
    ("45", "Tb 045", "ZWGRFLAZJFDZNNN35UWWVOEGU4"),
    ("93", "Tb 093", "XPAYFLR4SZEQFPILYUJ2VFODL4"),
    ("91", "Tb 091", "UP3GUM2PMRGL5JEAMTIQCP6RRA"),
    ("41", "Tb 041", "MZPUIGAVHNGHPFNFNO5CRIFEK4"),
    ("42", "Tb 042", "5GPTF4PVHJASXFVEWJJNDIA7SQ"),
    ("14", "Tb 014", "KWS6FZ2OTJFSPAGDTFNBJTZOJY"),
    ("68", "Tb 068", "4QJMZPUUWJGODOC345NPAGF3UY"),
    ("92", "Tb 092", "OV732TT5YFF3LA6OVVDT6UUGK4"),
    ("63A", "Tb 063 A", "OEIEWZPZ2BCWXCGLRZ2GAYG4YY"),
    ("105", "Tb 105", "V75RR7XESVBSLN47PKGL3BEUXU"),
    ("95", "Tb 095", "5IAS63YBXZH7JGRYKP6IN6YTOY"),
    ("72", "Tb 072", "4TKG2ZWABZE7HBIC73DWKMAGSE"),
    ("71", "Tb 071", "TVFBR4K2ZVFKFJT6N3E5QP54GM"),
    ("106", "Tb 106", "23BCOHFITJDVXJD4YDFX7N3GWE"),
    ("40", "Tb 040", "TI4SI4LX2VGVVN7VPE657LWHOA"),
    ("90", "Tb 090", "OLDKJKF3QFAZFJVAZQAWC2EX5Q"),
    ("108", "Tb 108", "T7VEP7GOHNEOXHWF4HBMJ3SWHE"),
    ("47", "Tb 047", "ABJO66DOWJH4NPQIN5XDC7OK5A"),
    ("104", "Tb 104", "QOIFMPVD5NH6RNUNU5LZDXYK5A"),
    ("103", "Tb 103", "L6MXA7BVA5CD5INER4KK72WZWU"),
    ("51", "Tb 051", "IUC7LBO6NJEKJEQTD2KHCTLDA4"),
    ("119", "Tb 119", "R47P6SBCSNDHFI67A4DXSMWAMY"),
    ("36", "Tb 036", "DQJIM5P6UJDYZKHBGC376GD6PQ"),
    ("37", "Tb 037", "ABAJJMIXXZCBPOCHPWSGPZJP7Y"),
    ("79", "Tb 079", "GNUKGWOQ5RARBDTGPZYA77TE3U"),
    ("117", "Tb 117", "3LXGC77HEJCCJLEP3QG4DAHBIE"),
    ("118", "Tb 118", "H7GC6KNNHJEPRJHJ4MSFF4EMOA"),
    ("21", "Tb 021", "QUDZVGFXRBFYJMJL5FDURFWUYM"),
    ("12", "Tb 012", "NW6UJ3FO2RDM3C7QKWGOMGPUVA"),
    ("122-1", "Tb 122-1", "WZYEGCMRCFH4ZCASRHIU74L7XM"),
    ("122-2", "Tb 122-2", "DRZYUZBUNZFPXGFGZRQROZT2XM"),
    ("98", "Tb 098", "S6ETVPT6GBGJZGNHS4HX3G6U4M"),
    ("76", "Tb 076", "P5QMAOANFBCYLK4TPWG2SPJVMU"),
    ("85", "Tb 085", "OW4JOXQCIBE7BEUKXPUPKT2FAQ"),
    ("82", "Tb 082", "RRW4HCFOXRG7JDLNEUFEKCDQTI"),
    ("77", "Tb 077", "UE4L6DQB65BK3O66UP2ARMVYVM"),
    ("86", "Tb 086", "FT43SAQ7YREIFJWSRNCGCKMJE4"),
    ("124", "Tb 124", "MNSSM7LZYRFZTDQXOGA5FICY4Y"),
    ("83", "Tb 083", "GT3FC5L4OBDABE7HTO2BUJAV4A"),
    ("84", "Tb 084", "OSHBAUMEIVBGXHYQ2GZQNS3J74"),
    ("81A", "Tb 081 (A)", "SONIFMW3G5G3HBLTVIZGH364S4"),
    ("87", "Tb 087", "M54YPZO6WZCHZA2SHTQQIA3L3Q"),
    ("88", "Tb 088", "JEPX3TH5IVA2PM5DHYXGXE4V6A"),
    ("132", "Tb 132", "V6P3P44F7NFSVMS737V63OB2VY"),
    ("148", "Tb 148", "DRKTOFUL2JGV3F5HQP6EDQM6UM"),
    ("52", "Tb 052", "7XFXDWDXH5GDNNG7VJCYPMMZGI"),
    ("53", "Tb 053", "BEED7FJS2ZDD7D2O6KZXW3EQ7U"),
    ("61", "Tb 061", "PLFPG64MERH6TPBOQ53AVDTHHI"),
    ("56", "Tb 056", "ZPMVBNZR4VBQBHBMEFCNJYB4SM"),
    ("57", "Tb 057", "MPMFO6QMH5HBTOFUOQHEM7ZWGU"),
    ("54", "Tb 054", "7KO5SB3AYZAENKJRRJHMKT5DC4"),
    ("38B", "Tb 038 B", "YOFPFCHNKRH2FGQD24ANWNKPOY"),
    ("55", "Tb 055", "R27OZ7DSLZEB7MY72V642KKW5A"),
    ("29", "Tb 029", "SIR5SGY4IJC73BTYXKAOFVRTI4"),
    ("46", "Tb 046", "DF3OONREXVH35IZZRX55PYXRN4"),
    ("109", "Tb 109", "J62VBIGVJZGRXHHGOIUWZA3AK4"),
    ("9", "Tb 009", "KH5UON5JPNBFBLDB4JATIYZHSA"),
    ("132-2", "Tb 132-2", "TRQ2FDOOSNAB3E7QZQPYFDCHPA"),
    ("94", "Tb 094", "XBS7TQCJFZHHVKGDKYTBX6COWA"),
    ("63B", "Tb 063 B", "4RORK3YIO5AM7GJXASD66OEDQY"),
    ("8", "Tb 008", "TAAEKFD2UBGSXK7EA46MVUSW5U"),
    ("64L", "Tb 064 Lf", "E4M7JKU4OFED3H6VYMDZ2BYLF4"),
    ("2", "Tb 002", "RBAKILT47BFMDC2NG3GXRW73KQ"),
    ("3", "Tb 003", "56BJTNTNTNGHXI75PM7QOTA76U"),
    ("152", "Tb 152", "SR254KKWCJETPDQFEGHQWFH3M4"),
    ("75", "Tb 075", "HY2JGXM6YJAAVN6AOEH6WBNXBQ"),
    ("78", "Tb 078", "FNLR4FF2C5BILO2RYM2QDHUWYM"),
    ("65", "Tb 065", "2L63DPS52RHJXBHNOPVSPR3JCY"),
    ("67", "Tb 067", "V6W2DXOQLBC6FCU6JXRFOFB5KA"),
    ("179", "Tb 179", "ILT3F4K5XNH3NNE25JS4FNELJA"),
    ("123", "Tb 123", "CARCFGVMAJDDTBGLI3HMIIF5JU"),
    ("141", "Tb 141/2", "VVCNA4HTPVAMVNFMN7ZMW6YIOQ"),
    ("190", "(Tb 190)", "NGTS46MXHRFIDFF2LCWTZGCL6E"),
    ("133", "Tb 133", "BNSVBQ734FAQRNNHEMQNPYILHE"),
    ("136A", "Tb 136 A", "YTSXIARWD5GVLEYJLKVB4T6OSQ"),
    ("134", "Tb 134", "TF5Z3233M5BB5ONVM3TOLFYZUA"),
    ("130", "Tb 130", "QHJY7DEBQ5B3NP75SLSRBJ3N2A"),
    ("131", "Tb 131", "355SDK6JENBCJI5PFRAEXIXL7Q"),
    ("89", "Tb 089", "SHKHBCVWZFEY5OKOWCXEH5N4EE"),
    ("154", "Tb 154", "NKA525SNHJERLDARM7M3HIY4YA"),
    ("115", "Tb 115", "POXPDOUH6NDB7KIV2IONZGUE7M"),
    ("116", "Tb 116", "KITFEAWDU5AKXPGZLCEQIHB6ZU"),
    ("112", "Tb 112", "63CTJOSBLFGS7FKJODQOR7A2DA"),
    ("113", "Tb 113", "HX75DGQCGRDNNAHBEO3O7DQ4FM"),
    ("138", "Tb 138", "6YDRVLFSGVHODF5UBTBBIMHJRU"),
    ("187", "Tb 187", "56UMRAATEJFULKLZ3YLFQQST74"),
    ("189", "Tb 189", "62TYYXJ3XZDJFIOJZJMWNPTBIU"),
    ("44", "Tb 044", "SQRXBMS2VJCQ7FPT4YTU3ZQOJM"),
    ("50", "Tb 050", "MTKWLR7MAZDQJF5T3M2YG45V3M"),
    ("188", "Tb 188", "MCGN43SLPZENNINRWAC6F4NLRI"),
    ("4", "Tb 004", "TRXKYS74DJG4HJYU7CARZZHX54"),
    ("96", "Tb 096/97", "LJIQSTCU7RF5BBLZL5ZJIARKRI"),
    ("153A", "Tb 153 A", "FVPTCO7KDJFNFDV2NWLQ5WHNSY"),
    ("153B", "Tb 153 B", "HQIAM6PDI5AGXJ63DSXVQH3HRU"),
    ("64K", "Tb 064 Kf", "VITT2PFH5BDIFK7B2ACD4IL36Q"),
    ("11", "Tb 011", "L7AH4MGX6VHQPIVPHHSAY3M6NA"),
    ("6", "Tb 006", "2QKUJZQYDJDA7OAU6RDWNMBWQY"),
    ("5", "Tb 005", "W2XP3LBO25FERELBNCM7P6WCZM"),
    ("99B", "Tb 099 B", "5FK4PWIID5BXLCPHBJGFFCKRLE"),
    ("7", "Tb 007", "QE3O7RNQBNEHVEZHDV727MMYQA"),
    ("176", "Tb 176", "C7RSKT76WNCQJKBHNFJIFHGKUQ"),
    ("125", "Tb 125", "FGGZPRDYGBHV3AFOH5EXBPKDQY"),
    ("126", "Tb 126", "22KFZT5KHNAAPNYPHCFYK2DZXU"),
    ("145", "Tb 145", "3G54CQSW6RB6FNWBPTOHAUKHTE"),
    ("144", "Tb 144", "UHIG6K4CANGTLKUB32BFPPLHKA"),
    ("137A", "Tb 137 A", "A53RUQ76BRCDXHH6VCRW4UQYWI"),
    ("151", "Tb 151", "O5ZWL4BU6VAJXLNKTOH3XSVDLA"),
    ("101", "Tb 101", "OLCI3ICQTFDETAQ26FLLD6JQFU"),
    ("156", "Tb 156", "2IQLG7L5S5ADBJ3UTWYBDGPMQY"),
    ("155", "Tb 155", "N3M2DQQGC5AWFBGYDOIL6M6G4A"),
    ("100", "Tb 100", "6IU6S6WE2VDJXAN5GH76EWOIEA"),
    ("102", "Tb 102", "BMH7LRITC5CN7B2MKZ75AYCTEA"),
    ("136A2", "Tb 136 A2", "HFGIR2U5EJBFROAETW4AQ3PNIE"),
    ("136B", "Tb 136 B", "YZ437D6NRBC77AQJKMJA4ABNOM"),
    ("149", "Tb 149", "HD2WQFQ6VNBYTJPMJIBVXJHRZM"),
    ("150", "Tb 150", "HYWHYT7WVZC3FIQ2OSVW7YGIWA"),
]
NU_DIR = "BD--pNu-BM-EA-10477"
# the parts (KEYs) of the papyrus: (first chapter token, last chapter token), contiguous, in order
NU_PARTS = {"NU1": ("17", "18PS"), "NU2": ("1", "42"), "NU3": ("14", "37"), "NU4": ("79", "124"), "NU5": ("83", "64L"),
            "NU6": ("2", "190"), "NU7": ("133", "189"), "NU8": ("44", "176"), "NU9": ("126", "102"), "NU10": ("136A2", "150")}


def nu_chapters(key):
    toks = [c[0] for c in NU_ORDER]
    a, b = NU_PARTS[key]
    return NU_ORDER[toks.index(a):toks.index(b) + 1]


def _nu_title(key):
    ch = nu_chapters(key)
    return f"ספר המתים של נוּ, פרקים {ch[0][0]}–{ch[-1][0]}"

# KEY: (project, Hebrew title, kind, file, selection)
UNITS = {
    "AM": (P1, "מוּסַר אֲמֶנֶמוֹפֶּה", "aed", "Amenemope--pBM-EA-10474/5JO44VJZERAB3HQUHMFSMNXH6I.xml", None),
    "MK": (P2, "מֶרִיכָּרֶע: האל ובני האדם (E 130–138)", "aed-E", "Merikare--pPetersburg-1116A/YZSISQLOINELTMJDPXQ45O5IUU.xml", (130, 138)),
    "PT571": (P2, "טקסט הפירמידות 571 (פֶּפִּי הראשון)", "aed", "PT-571--West-wall/RKYIL56JTJFP3JAJI2FTEWARKA.xml", None),
    "PT486": (P2, "טקסט הפירמידות 486 (פֶּפִּי הראשון)", "aed", "PT-486--West-wall/ZAV2GQBVWBDSBOQIX4JNXP3DYI.xml", None),
    "PT527": (P2, "טקסט הפירמידות 527 (מֶרֶנְרַא)", "aed", "PT-527--West-wall/UY2LJNHE4JEFLMATP2CN3YLXH4.xml", None),
    "PT600": (P2, "טקסט הפירמידות 600 (פֶּפִּי השני)", "aed", "PT-600--East-wall/NHY7Q7ERPNEWTK5BWG7KELURNU.xml", None),
    "MT": (P2, "התאולוגיה של מֹף (אבן שַׁבַּכָּה)", "tsv", None, None),
    "HC": (P3, "ספר הפרה השמימית (קבר סֵתִי הראשון)", "aed", "Heavenly-Cow--KV17-Seti-I/WHEOIX5P5ZAVVFU4BGO6OWASV4.xml", None),
    "TB": (P4, "מעשה בשני האחים (פפירוס ד׳אורביני)", "aed", "Two-Brothers--pDOrbiney-BM-EA-10183/C6HNRC4K7FAYBHNDS3LV24EANI.xml", None),
    "WE": (P5, "סיפורי פפירוס וֶסְטְקָר", "aed", "Westcar--pBerlin-P-3033/J4EXGHLCL5DR7JHSPDWTVEKMDY.xml", None),
    "SI": (P7, "סיפור סִינוּהֶה", "aed-SI", ("Sinuhe--pBerlin-P-10499-R/QZCOZWR7YVAGNLPTMZIMHL6TYQ.xml",
                                           "Sinuhe--pBerlin-P-3022-B/JIPPXMXOTNCQDIKJIQVYWMKOWU.xml"), (1, 23)),
    "SS": (P8, "סיפור המלח הנטרף (פפירוס פטרבורג 1115)", "aed", "Shipwrecked-Sailor--pPetersburg-1115/QUFWZTEPLRE4NHKCPAJXGSAOSQ.xml", None),
    "NU1": (P6, _nu_title("NU1"), "aed-NU", None, None),
    "NU2": (P6, _nu_title("NU2"), "aed-NU", None, None),
    "NU3": (P6, _nu_title("NU3"), "aed-NU", None, None),
    "NU4": (P6, _nu_title("NU4"), "aed-NU", None, None),
    "NU5": (P6, _nu_title("NU5"), "aed-NU", None, None),
    "NU6": (P6, _nu_title("NU6"), "aed-NU", None, None),
    "NU7": (P6, _nu_title("NU7"), "aed-NU", None, None),
    "NU8": (P6, _nu_title("NU8"), "aed-NU", None, None),
    "BD": (P6, "ספר המתים, פרק 125 (פפירוס נוּ)", "aed", "BD-125--pNu-BM-EA-10477/FGGZPRDYGBHV3AFOH5EXBPKDQY.xml", None),
    "NU9": (P6, _nu_title("NU9"), "aed-NU", None, None),
    "NU10": (P6, _nu_title("NU10"), "aed-NU", None, None),
    "CH": (P6, "ספר המתים, פרק 175 (פפירוס חַע, טורינו 8438): נספח", "aed", "BD-175--pCha-Turin-8438/PHHTCP56KNFFXCKMBRE6SCOCGU.xml", None),
    "MR": (P9, "המוסר למֶרִיכָּרֶע (פפירוס פטרבורג 1116A)", "aed-E", "Merikare--pPetersburg-1116A/YZSISQLOINELTMJDPXQ45O5IUU.xml", (1, 149)),
}
PROJECT_TITLES = {P1: "מוסר אמנמופה", P2: "בריאת העולם במצרים: מריכרע, התאולוגיה של מֹף, טקסטי הפירמידות",
                  P3: "ספר הפרה השמימית", P4: "מעשה בשני האחים", P5: "סיפורי פפירוס וסטקר",
                  P6: "ספר המתים של נוּ", P9: "המוסר למריכרע", P7: "סיפור סינוהה", P8: "סיפור המלח הנטרף"}
# the variant witnesses a translator consults (printed by `data KEY --wit`)
WITNESSES = {
    "AM": ["Amenemope--tLouvre-E-17173/J54RCGRIM5CYLB5T27RUS5G7D4.xml", "Amenemope--oKairo-SR-1840/WWBWAINUHFAXBCPM4JT7CR4EZA.xml",
           "Amenemope--tMoskau-I.1.d.324/IC4YJ45UHFF53NCIOCBKQZ4UXE.xml", "Amenemope--pStockholm-MM-18416/HRK4O53VK5GX7AKGVDXUWXIQEU.xml",
           "Amenemope--tTurin-CGT-58005/BG2HK57AOVAXPLDFLPF2LEN3ZE.xml"],
    "MK": ["Merikare--pMoskau-4658/Z3IP3NIFJVGTNIV47MWEMXKQJQ.xml", "Merikare--pCarlsberg-VI/FTVMO4SFGBHHBA4RTMZITSRNAM.xml"],
    "HC": ["Heavenly-Cow--Tutankhamun-shrine/62AD3D3IY5EMTHDDJZ5UV42RWM.xml", "Heavenly-Cow--KV9-Ramses-VI/ENW4HOGRDVHFFB4UNYYQZQ4ZKY.xml"],
    "PT571": ["PT-571--West-wall-south/PFW6EIFCGRBQ5KWI44CEVLMVAI.xml"],
    "PT486": ["PT-486--East-wall/43NPRIN3UJGCJN7UOHQKGNYJLA.xml"],
    "BD": ["BD-125--pJuja-CG-51189/ZJ45MN6I2BEBXIOF4E2OH4PK64.xml", "BD-125--pMaiherperi-CG-24095/S4KP2OGKXFCPPK7Q5MHFEE6R7A.xml"],
    "MR": ["Merikare--pMoskau-4658/Z3IP3NIFJVGTNIV47MWEMXKQJQ.xml", "Merikare--pCarlsberg-VI/FTVMO4SFGBHHBA4RTMZITSRNAM.xml"],
    "SI": ["Sinuhe--oAshmolean-1945.40-AOS/RP2F6BGNDBAARDBNDHGFSFPIEM.xml"],
}
# pWestcar 2,21–4,7: the fifth-day dossier's excerpt (WC). Its `>` lines are the dossier's, kept identical by verify
# (the dossier is not edited from here: a revision is recorded in WE's entry as `[סטייה מן התיק: <reason>]`, for the lead).
DOSSIER_WC = os.path.join(ROOT, "מיתוסים-אוגריתיים", "3-תיק-היום-החמישי", "annotated-WC.rtl.md")
NIQ = "֑-ֽֿ-ׇ"


# ---------------------------------------------------------------- base texts
def _pt_label(lab):
    return re.sub(r"\s*=.*$", "", lab).strip().replace(" ", ".")


def _alt_gaps(words):
    """Amenemope: AED's <gap/> between two analyses of one written stretch (no text is lost there) -> ' / '.

    The TLA gives two analyses of a written word or of several words, and AED separates them with a <gap/>.
    Every single gap inside a line (a word before it and a word after it, neither a gap) is such a separator
    (checked against the TLA's German, which marks no loss at any of them; review pass (a), 2026-10-23); until
    then only a gap between two similar single words was caught, and 8 multi-word ones were printed as `[…]`.
    Gaps at a line end or in a run of gaps (27.17, 27.18, 28.1) stay `[…]`."""
    out = []
    for i, w in enumerate(words):
        if (w["feats"] == "gap" and out and out[-1]["feats"] not in ("gap", "alt")
                and i + 1 < len(words) and words[i + 1]["feats"] != "gap"):
            out.append({"id": "", "surf": "/", "lemma": "", "feats": "alt", "gloss": ""})
            continue
        out.append(w)
    return out


_DATA = {}


def rows(key):
    """[row], row = {label, text, words: [{surf, lemma, feats, gloss}], sents, orig}."""
    if key in _DATA:
        return _DATA[key]
    proj, title, kind, f, sel = UNITS[key]
    out = []
    if kind == "tsv":
        if not os.path.exists(MT_TSV):
            sys.exit(f"missing {MT_TSV}")
        for l in open(MT_TSV, encoding="utf-8"):
            if l.startswith("#") or not l.strip():
                continue
            c = l.rstrip("\n").split("\t")
            out.append({"label": c[0].strip(), "text": c[1].strip(), "words": [], "sents": [], "orig": c[0].strip()})
    elif kind == "aed-NU":
        for tk, title, tid in nu_chapters(key):
            seen = set()
            for ln in aed2md.parse(os.path.join(AED, NU_DIR, tid + ".xml")):
                lab = ln["label"].strip()
                m = re.match(r"^(\d+)\. (Stätte|Darstellung)$", lab)
                if m:
                    lab = ("S" if m.group(2) == "Stätte" else "D") + m.group(1)
                lab = {"?": "x"}.get(lab, lab).replace(" ", "")
                while lab in seen:   # a label the TLA repeats inside a chapter (Tb 7, Tb 149): b, c …
                    lab += "b"
                seen.add(lab)
                out.append({"label": f"{tk}.{lab}", "text": " ".join(w["surf"] for w in ln["words"]), "words": ln["words"],
                            "sents": ln["sents"], "orig": f"{title} {ln['label']}", "chapter": tk, "tid": tid})
    elif kind == "aed-SI":
        # Sinuhe: R 1–23 (pBerlin 10499; the beginning, lost in B), then B 1–311 (pBerlin 3022). B's Amherst
        # fragments (labels Am., An., …: the lost start of B, parallel to R) and its '?' line are left to the apparatus.
        for pref, path in (("R", f[0]), ("B", f[1])):
            for ln in aed2md.parse(os.path.join(AED, path)):
                lab = ln["label"].strip()
                if not re.match(r"^\d+$", lab) or (pref == "R" and not (sel[0] <= int(lab) <= sel[1])):
                    continue
                out.append({"label": pref + lab, "text": " ".join(w["surf"] for w in ln["words"]), "words": ln["words"],
                            "sents": ln["sents"], "orig": ln["label"]})
    else:
        lines = aed2md.parse(os.path.join(AED, f))
        for i, ln in enumerate(lines):
            lab = ln["label"]
            if kind == "aed-E":
                if not (sel[0] <= i + 1 <= sel[1]):
                    continue
                lab = f"E{i + 1}"
            elif key.startswith("PT"):
                lab = _pt_label(lab)
            elif key in TALES:
                lab = re.sub(r"^rto\s+", "", lab.strip()).replace(" ", "")
            words = _alt_gaps(ln["words"]) if key == "AM" else ln["words"]
            out.append({"label": lab, "text": " ".join(w["surf"] for w in words), "words": words,
                        "sents": ln["sents"], "orig": ln["label"]})
    _DATA[key] = out
    return out


def order(key):
    return [r["label"] for r in rows(key)]


def row(key, lab):
    for r in rows(key):
        if r["label"] == lab:
            return r
    return None


def plain_src(t):
    """A base line without bracket marks: for comparisons and licences."""
    t = re.sub(r"\{[^}]*\}", "", t or "")
    t = re.sub(r"[\[\]⸢⸣⟨⟩()?]", "", t)
    t = t.replace("…", " ").replace(" / ", " ").replace(" | ", " ")
    return re.sub(r"\s+", " ", t).strip()


def license_text(key, lab):
    r = row(key, lab)
    if not r:
        return ""
    lems = " ".join(sorted({"tla" + w["lemma"].replace("tla", "") for w in r["words"] if w.get("lemma")}))
    t = plain_src(r["text"])
    # a word split across two lines: also join the edge tokens with the neighbours
    rs = rows(key)
    i = rs.index(r)
    extra = ""
    if i > 0 and plain_src(rs[i - 1]["text"]).split() and t.split():
        extra += " " + plain_src(rs[i - 1]["text"]).split()[-1] + t.split()[0]
    if i + 1 < len(rs) and plain_src(rs[i + 1]["text"]).split() and t.split():
        extra += " " + t.split()[-1] + plain_src(rs[i + 1]["text"]).split()[0]
    return (t + extra + " | " + lems).lower()


# ---------------------------------------------------------------- annotated files
def annotated_path(key):
    return os.path.join(HERE, UNITS[key][0], f"annotated-{key}.rtl.md")


def translation_path(key):
    return os.path.join(HERE, UNITS[key][0], f"translation-{key}.rtl.md")


def read_annotated(key):
    """({label: hebrew}, label sequence, {label: source line}, {label: entry text}, problems) or None."""
    p = annotated_path(key)
    if not os.path.exists(p):
        return None
    heb, seq, src, body, probs = {}, [], {}, {}, []
    cur = None
    for l in open(p, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
            if cur in heb:
                probs.append(f"duplicate entry {cur}")
            heb[cur], body[cur] = [], []
            seq.append(cur)
            continue
        if l.startswith("## ") or l.startswith("# "):
            cur = None
            continue
        if cur is None:
            continue
        body[cur].append(l)
        if l.startswith("> "):
            heb[cur].append(l[2:].strip())
        elif l.startswith("`") and cur not in src and not heb[cur]:
            src[cur] = l.strip()
    for k, v in heb.items():
        if len(v) != 1:
            probs.append(f"entry {k}: {len(v)} '>' lines")
    return ({k: (v[0] if v else "") for k, v in heb.items()}, seq, src,
            {k: "\n".join(v) for k, v in body.items()}, probs)


def present_keys():
    return [k for k in UNITS if os.path.exists(annotated_path(k))]


def all_hebrew():
    out = {}
    for k in present_keys():
        a = read_annotated(k)
        out[k] = a[0] if a else {}
    return out


def strip_marks(s):
    """Hebrew without brackets, editorial marks, footnote refs, quotation marks and niqqud (keeps the maqaf)."""
    s = re.sub(r"\[\^[^\]]+\]", "", s)
    s = re.sub(r"[\[\]⟨⟩*?\"'“”״{}]", "", s)
    s = re.sub(r"[֑-ֽֿ-ׇ]", "", s)
    return re.sub(r"\s+", " ", s).strip()


def nopunct(h):
    return re.sub(r"\s+", " ", re.sub(r"[.,;:!–—]", " ", h)).strip()


# ---------------------------------------------------------------- gates (renderings.md §5–§6)
W = r"(?<![א-ת])[ובלמהכש]{0,3}"     # optional prefixes at a word start
WN = r"(?<![א-ת])[ובלהכש]{0,3}"     # the same without מ
E = r"(?![א-ת])"


def alt(*forms):
    return "(?:" + "|".join(forms) + ")"


# (regex on the bracket-free unvocalized line, licensing regex on the licence text or None = never, why)
RESERVED = [
    # --- Gen 1–2 and the dossier's words: never in an Egyptian line (no Egyptian cognate) ---
    (W + alt("אלוהים", "אלהים", "אלוהי", "אלהי", "אלוהיו", "אלוהינו", "אלוהיך") + E, None, "nṯr = אֵל / nṯr.w = אֵלִים; אֱלֹהִים never (§5.1)"),
    (W + alt("ברא", "בורא", "בראו", "בראה", "בראתי", "נברא", "נבראו", "בריאה", "בריאת", "ויברא", "יברא", "בראם", "בוראו", "בוראם") + E, None,
     "the root ברא never: jri̯ = עָשָׂה, qmꜣ = יָצַר?, ms = יָלַד, ḫpr = נִהְיָה (§5.1); Gen 1's `בָּרָא` only in the apparatus"),
    (W + alt("תנין", "תנינים", "התנין", "התנינים") + E, None, "msḥ (crocodile) = תִּמְסָח; `תַּנִּין` never in a line (the dossier rule; Ex 7:9 in the apparatus)"),
    (W + alt("לויתן", "לוויתן") + E, None, "לִוְיָתָן never"),
    (W + alt("תהום", "תהומות", "התהום", "תהומה") + E, None, "Nun = נוּן; `תְּהוֹם` never (Gen 1:2 in the apparatus)"),
    (W + alt("תהו", "ותהו", "בהו", "ובהו") + E, None, "תֹּהוּ / בֹּהוּ never"),
    (W + alt("רקיע", "הרקיע", "רקיעים") + E, None, "p.t = שָׁמַיִם; רָקִיעַ never"),
    (W + alt("שאול", "שאולה") + E, None, "dwꜣ.t = הַדּוּאַת (transliterated); שְׁאוֹל never"),
    (W + alt("מבול", "המבול") + E, None, "no flood in these texts: מַבּוּל never"),
    (W + alt("שבת", "השבת", "שבתו", "שביתה", "וישבות", "שבתה", "שבות") + E, None, "the root שבת never (Gen 2:2–3): ḥtp = נָח (Ex 20:11 `וַיָּנַח`)"),
    (W + alt("נשמה", "נשמת", "נשמתו", "נשמות") + E, None, "ṯꜣw = רוּחַ (the dossier's E130); נְשָׁמָה never (Gen 2:7 in the apparatus)"),
    (W + alt("נחם", "ניחם", "נחמתי", "וינחם", "נחמה", "התנחם", "נחמו") + E, None, "the root נחם never (Gen 6:6–7): no Egyptian word for 'regret' in the Cow"),
    (W + alt("התעצב", "ויתעצב", "עצב", "עצבון", "עיצבון") + E, None, "עצב never (Gen 6:6, 3:16–17)"),
    (W + alt("מחה", "אמחה", "ימחה", "נמחה", "מחו", "מחית") + E, None, "the root מחה never (Gen 6:7, 7:4, 23): render the Egyptian verb by its own sense"),
    (W + alt("שחת", "השחית", "השחיתו", "נשחת", "נשחתה", "משחית", "המשחית", "להשחית", "אשחית", "ישחית", "שחתה", "שחיתות", "השחתה", "שחתו") + E + r"(?<!משחת)", None, "the root שחת never (Gen 6:11–13, 17, 9:11, 15): render the Cow's verbs of killing by their own sense (smꜣ = הָרַג …)"),
    (W + alt("יצר", "יצרו", "יצרה", "יצרי", "וייצר", "יוצר", "יוצרו", "יוצרם", "ייצר", "יצרתי") + E, r"qmꜣ", "the root יצר only for qmꜣ 'create' [equivalent Gen 2:7] (the noun יֵצֶר of Gen 6:5 never; qd 'build' = בָּנָה)"),
    (W + alt("אדמה", "האדמה", "אדמתו") + E, None, "אֲדָמָה never (no Egyptian cognate; tꜣ = אֶרֶץ, ꜣḥ.t = שָׂדֶה)"),
    (W + alt("רוח", "רוחות", "הרוח", "רוחו", "רוחי", "רוחה", "רוחם") + E, r"ṯꜣw|ṯꜣ,w|\bnfw|šw\b|šw,t|ṯꜣ\.wj", "רוּחַ only for ṯꜣw 'breath, wind, air' (the dossier's E130) [equivalent Gen 1:2, 2:7]"),
    (W + alt("צלם", "צלמו", "צלמיו", "צלמים", "בצלמו", "צלמי") + E, r"snn|ẖnty|tjt|twt|ẖnt", "צֶלֶם only for snn (the dossier's E131) and the image words (twt, tjt): Gen 1:26–27"),
    (W + alt("דמות", "דמותו", "בדמות", "כדמות", "דמותם") + E, r"twt|tjt|tj\.t|qj|qd\b", "דְּמוּת only for twt / tjt / qj 'form' (Gen 1:26)"),
    (W + alt("טוב", "טובה", "טובים", "טובות", "היטיב", "ייטב", "טובו", "טובי", "טובתו", "טובתי", "מיטב", "הטוב", "הטובה") + E, r"nfr",
     "טוֹב only for nfr [equivalent Gen 1] (ꜣḫ 'useful, better' = מוֹעִיל / the 'better than' saying מוּטָב … מִ־)"),
    (W + alt("תורה", "תורת", "תורתי", "תורתו", "התורה", "תורות") + E, None, "תּוֹרָה never: sbꜣ.yt = מוּסָר (Prov 1:8, 23:12) [equivalent]"),
    # --- Amenemope and the Torah / Proverbs (renderings §4.3) ---
    (W + alt("גבול", "גבולות", "גבולי", "גבולו", "הגבול", "הגבולות", "גבולה", "גבולם") + E, r"tšj|tꜣš|ṯꜣš|tš,jw|tšjw|tšj", "גְּבוּל only for tꜣš / tšj 'boundary' [equivalent Deut 19:14, Prov 22:28]"),
    (W + alt("הסיג", "תסיג", "מסיג", "תסג", "יסיג", "הסגת", "נסוג", "נסג") + E, None, "the root סוג / נסג never (Deut 19:14, 27:17, Prov 22:28): rmni̯ = הֵזִיז / נָשָׂא, hꜣd = פָּלַשׁ"),
    (W + alt("השיג", "תשיג", "ישיג", "אשיג", "השיגו", "משיג") + E, r"pḥ", "השיג (נשג 'reach') only for pḥ 'reach' (MK E138, HC 29); it shares the letters of the reserved הִסִּיג"),
    (W + alt("אלמנה", "אלמנות", "אלמנת", "האלמנה", "אלמנתו") + E, r"ḫꜣr|ḫꜣrj|ḫꜣ\(rj\)|ḫꜣrt", "אַלְמָנָה only for ḫꜣr.t [equivalent Prov 23:10 (the emendation `גבול אלמנה`), Deut 24:19–21]"),
    (W + alt("יתום", "יתומים", "היתום", "יתומה", "יתומי") + E, None, "יָתוֹם never: nmḥ = דַּל (Late Egyptian 'poor man'; Prov 23:10 `יְתוֹמִים` in the apparatus)"),
    (W + alt("איפה", "האיפה", "איפות", "איפת", "ואיפה") + E, r"jp,t|jp\.t|\bjpt|jp\b", "אֵיפָה only for jp.t (the oipe) [cognate: an Egyptian loanword, Deut 25:14–15, Lev 19:36, Prov 20:10]"),
    (W + alt("פלס", "הפלס", "פלסים") + E, r"jws|jwsw|jws,w|jwsꜣ", "פֶּלֶס only for jws(w) 'the hand-balance' [equivalent Prov 16:11, Isa 40:12]"),
    (W + alt("מאזנים", "מאזני", "המאזנים", "מאזניו", "מאזניים") + E, r"mḫꜣ|mḫꜣy|mḫꜣ,t|mḫꜣ\(y\)", "מֹאזְנַיִם only for mḫꜣ.t 'the balance' [equivalent Lev 19:36, Prov 16:11, 11:1]"),
    (W + alt("שחד", "השחד", "שוחד") + E, None, "שֹׁחַד never: fqꜣ 'reward' = שָׂכָר (Ex 23:8, Deut 16:19 in the apparatus)"),
    (W + alt("עור", "עיוור", "עוור", "העור", "העיוור", "העוור", "עורים", "עיוורים", "עוורים") + E, r"kꜣmn|kꜣmꜣn|špw|bꜣk|jnm|dḥr|mskꜣ", "עִוֵּר (and `עוֹר` 'skin': jnm, dḥr) only for kꜣmn 'blind' [equivalent Lev 19:14, Deut 27:18]"),
    (W + alt("פסח", "הפסח", "פסחים", "פיסח") + E, r"qbqb", "פִּסֵּחַ only for qbqb 'lame' [equivalent Lev 21:18]"),
    (W + alt("גר", "הגר", "גרים", "לגר", "גרך") + E, None, "גֵּר never (Amenemope's stranger ḏrjḏrj = נָכְרִי; Deut 24:19 in the apparatus)"),
    (W + alt("גואל", "גאל", "גואלו", "גואלם", "הגואל", "גואלי", "גאלם") + E, None, "גֹּאֵל never (the wisdom corpus's reservation; Prov 23:11 in the apparatus)"),
    (W + alt("מוסר", "המוסר", "מוסרי", "מוסרו") + E, r"sbꜣ|sbꜣ,yt|sbꜣyt|sbꜣ,y\(t\)|sbꜣ\.yt|sbꜣ,tj", "מוּסָר only for sbꜣ.yt [equivalent Prov 1:8, 23:12]"),
    (W + alt("שלושים", "שלשים", "שלישים", "השלושים", "השלשים") + E, r"\b30\b|mꜥbꜣ|mꜥbꜣ,yt", "שְׁלֹשִׁים only for the number 30 / the Thirty (Prov 22:20)"),
    (W + r"(?<!ל)" + alt("חם", "החם", "חמים", "החמים", "חמם") + E,  # (?<!ל): `לחם` "bread" (+ prefixes) is not the hot man (AM 5.5)
     r"šmm|šmw|\bšm\b|šmmt|srf|(?<![\w,.-])ḫm(?![\w,-])", "the hot man (and the place name Ḫm, Letopolis `חֶם`: BD): pꜣ šmm = הַחַם (always vocalized: Ham, Gen 9:18)"),
    (W + alt("כסיל", "הכסיל", "כסילים", "אויל", "האויל", "אוילים", "נבל", "הנבל") + E, r"wḫꜣ|\bḫm\b|ḫm,w", "the fool words of Proverbs only for the Egyptian fool words: wḫꜣ = כְּסִיל, ḫm 'the ignorant' = הַבּוּר? (renderings §4.3)"),
    # --- Egyptian loanwords in Hebrew (renderings §4.2): only for their Egyptian source ---
    (W + alt("תבה", "תיבה", "התבה", "התיבה", "תבת", "תיבת", "תבתו", "תיבתו", "תבתך", "תיבתך") + E, r"ḏbꜣ|ḏb\(ꜣ\)|ḏbꜣ,t|ṯbt|db\.t", "תֵּבָה only for ḏbꜣ.t 'chest, coffin' [cognate: Egyptian loanword, Gen 6:14, Ex 2:3]"),
    (W + alt("יאור", "היאור", "יאורים", "היאורים", "יאורי", "יאוריהם", "יאר") + E, r"jtrw|jtr\b|jwtr|jtwr|jwtwr|jtr,w|jꜣtr|\bjtrw", "יְאֹר only for jtrw 'river' [cognate: Egyptian loanword, Gen 41:1, Ex 2:3]"),
    (W + alt("סוף", "הסוף", "בסוף", "כסוף") + E, r"ṯwf|ṯwfj|twfj", "סוּף only for ṯwfj 'papyrus thicket' [cognate: loanword, Ex 2:3]; 'end' = קֵץ / אַחֲרִית"),
    (W + alt("אחו", "האחו", "באחו") + E, r"ꜣḫ\b|ꜣḫ,w|ꜣḫ-w|ꜣḫw|bꜣẖ|bꜣḫ", "אָחוּ only (the place Bꜣẖ.w `בָּאחוּ` licensed: BD 108, 125) for ꜣḫ(w) 'reed meadow' [cognate: loanword, Gen 41:2]"),
    (W + alt("פרעה", "פרעו", "לפרעה", "הפרעה") + E, r"pr-ꜥꜣ|pr-ꜥꜣ", "פַּרְעֹה only for pr-ꜥꜣ 'the Great House' [cognate]; nsw = מֶלֶךְ, ḥm=f = הוֹד מַלְכוּתוֹ"),
    (W + alt("חרטם", "חרטמים", "החרטם", "החרטמים", "חרטמי") + E, r"ḥr,j-tp|ḥry-tp|ḥr\(,j\)-tp|ḥrj-tp", "חַרְטֹם only for ḥry-tp [cognate: loanword, Gen 41:8, Ex 7:11]"),
    (W + alt("שש", "השש", "בשש") + E, r"šs\b|šs,w|\bšsr|šsꜣ", "שֵׁשׁ 'linen' only for šs [cognate] (always vocalized: 'six')"),
    (W + alt("קסת", "הקסת") + E, r"gstj|gst", "קֶסֶת only for gstj 'the scribe's palette' [cognate: loanword, Ezek 9:2]"),
    (W + alt("טבעת", "הטבעת", "טבעות", "טבעתו") + E, r"ḏbꜥ,t|ḏbꜥ\.t|ḏbꜥt|ḫtm", "טַבַּעַת only for ḏbꜥ.t 'seal' [cognate: loanword, Gen 41:42]; ḏbꜥ 'finger' = אֶצְבַּע"),
    (W + alt("חותם", "החותם", "חתם", "חתום", "חתומה", "נחתם", "חותמו") + E, r"ḫtm|ḫtm,w|ḫtm\.t", "the root חתם only for ḫtm 'seal' [cognate: loanword, Gen 38:18]"),
    (W + alt("שיטה", "שיטים", "עצי שיטים") + E, r"šnḏ|šnḏ,t", "שִׁטָּה only for šnḏ.t 'acacia' [cognate: loanword, Ex 25:5]"),
    (W + alt("קוף", "קופים", "הקוף", "הקופים") + E, r"\bgf\b|gjf|gfn|gwf|gꜣf|gfw|ꜥnꜥn", "קוֹף only for gf [cognate: loanword, 1 Kgs 10:22]; the baboon jꜥnꜥ = בַּבּוּן"),
    (W + alt("כתם", "הכתם", "כתמים") + E, r"ktm|kꜣ~tj~mt", "כֶּתֶם 'fine gold' only for ktm.t [cognate: loanword, Job 28:16, Lam 4:1] (AM 18.12)"),
    (W + alt("שושן", "השושן", "שושנים", "שושנה", "השושנה", "שושנת", "שושני") + E, r"zšn|sšn|zššn|sššn", "שׁוֹשָׁן / שׁוֹשַׁנָּה only for zšn 'lotus' [cognate: loanword, Song 2:1–2, 1 Kgs 7:19] (NU5)"),
    (W + alt("זרת", "הזרת", "בזרת") + E, None, "זֶרֶת never: ḏr.t 'hand' = יָד"),
    # --- other corpora's reservations, carried over for safety ---
    (W + alt("צדק", "צדיק", "צדקה", "הצדיק", "הצדק", "צדקתו", "צדיקים") + E, None, "צֶדֶק / צַדִּיק never: mꜣꜥ.t = אֱמֶת, mꜣꜥ-ḫrw = אֲמִתִּי־קוֹל (renderings §4.1)"),
    (W + alt("משפט", "המשפט", "משפטו", "משפטי", "משפטים", "משפטך") + E, None, "מִשְׁפָּט never: qnb.t = בֵּית־דִּין, wpi̯ = שָׁפַט? (renderings §4.1)"),
    (W + alt("ברית", "הברית", "בריתי", "בריתו") + E, None, "בְּרִית never"),
    (W + alt("עולם", "עולמים", "לעולם", "העולם") + E, None, "עוֹלָם never: nḥḥ = נֶצַח, ḏ.t = עַד (the cross-corpus rule; Prov 22:28 `גְּבוּל עוֹלָם` in the apparatus)"),
    # --- the tales and BD 125 (renderings §11; Round 5 run 6): scoped to TALES (the 4th element) ---
    # Gen 39 (the Two Brothers): the words of Joseph and Potiphar's wife only for their Egyptian counterparts
    (W + alt("שכב", "שכבה", "שכבי", "שכבו", "ישכב", "תשכב", "נשכב", "אשכב", "לשכב", "שוכב", "שוכבת", "שכבנו", "שכבתי", "משכב", "משכבה", "משכבו") + E,
     r"sḏr|tla150740\b|nk\b|nk\.|nk=|nkk|nkj|nki̯|ẖdr|ḫdr|wnm-ẖdr|sḏr\.t", "the root שכב only for sḏr 'lie, sleep' / nk 'copulate' [equivalent Gen 39:7, 12, 14 `שִׁכְבָה עִמִּי`]", TALES),
    (W + alt("בגד", "בגדו", "בגדים", "בגדיו", "הבגד", "הבגדים", "בגדי", "בגדה", "בגדיה") + E,
     r"ḥbs|dꜣj|mnḫ|šs\b|šsr|ḥꜣ,tj|sḏꜣ|dꜣjw|jfd|sšd|ḥbs\.w", "בֶּגֶד only for a garment word (ḥbs, dꜣjw, mnḫ.t …) [Gen 39:12–18: the garment left in her hand]", TALES),
    (W + alt("צחק", "לצחק", "צחוק", "מצחק", "צחקה", "צחקו", "ויצחק", "יצחק", "ותצחק") + E, r"sbṯ|zbṯ|sbt", "the root צחק only for sbṯ 'laugh' (Gen 39:14, 17 `לְצַחֶק בָּנוּ`; Gen 18:12–15)", TALES),
    (W + alt("מאן", "מיאן", "וימאן", "ימאן", "מאנה", "מאנו", "מסרב", "סירב", "סרב", "סירבה") + E, None, "the refusal verbs never (Gen 39:8 `וַיְמָאֵן`): render the Egyptian by its own sense", TALES),
    (W + alt("חרה", "ויחר", "יחר", "חרון", "חרי", "חרונו", "חרתה") + E, None, "the root חרה never (Gen 39:19 `וַיִּחַר אַפּוֹ`): the Egyptian anger words by their own sense (the leopard simile literal)", TALES),
    (W + alt("סהר", "הסהר", "בסהר") + E, None, "`בֵּית הַסֹּהַר` never (Gen 39:20)", TALES),
    (W + alt("עברי", "העברי", "עבריה", "עברים", "העברים", "עבריות") + E, None, "עִבְרִי never", TALES),
    # Ex 14 (Westcar's parted lake)
    (W + alt("בקע", "ויבקע", "נבקע", "נבקעו", "ויבקעו", "בוקע", "בקעה", "בקעו", "מבוקע") + E, None, "the root בקע never (Ex 14:16, 21): Westcar's verb by its own sense", TALES),
    (W + alt("חומה", "חומות", "החומה", "כחומה") + E, r"jnb|sbt[y]?|sbtj|jnb\.w", "חוֹמָה only for jnb / sbtj 'wall' (Ex 14:22, 29 `וְהַמַּיִם לָהֶם חֹמָה`)", TALES),
    (W + alt("נד", "כנד", "כמו נד") + E, None, "נֵד never (Ex 15:8, Ps 78:13)", TALES),
    (W + alt("יבשה", "היבשה", "ביבשה", "חרבה", "החרבה", "בחרבה", "יבשת") + E, r"šwi̯|šwj|šw\.w|šwy|wšr", "יַבָּשָׁה / חָרָבָה only for šwi̯ 'dry' / wšr 'dry up' (Ex 14:21–22 `לֶחָרָבָה`, `בַּיַּבָּשָׁה`)", TALES),
    (W + alt("גזר", "גזרים", "לגזרים") + E, None, "the root גזר never in a tale (Ps 136:13 `לְגֹזֵר יַם סוּף לִגְזָרִים`)", TALES),
    # Deut 26:13–14, the Decalogue, Ps 15, Ps 24 (BD 125)
    (W + alt("רצח", "רצחתי", "תרצח", "ירצח", "רוצח", "רצחו") + E, None, "the root רצח never (Ex 20:13): smꜣ = הָרַג", TALES),
    (W + alt("נאף", "ניאף", "ניאפתי", "תנאף", "נואף", "נואפת", "נאפה", "ניאפה") + E, None, "the root נאף never (Ex 20:14): nk ḥm.t z = שָׁכַב עִם אֵשֶׁת אִישׁ (by sense)", TALES),
    (W + alt("חמד", "חמדתי", "תחמד", "חומד", "חמדה", "יחמד") + E, None, "the root חמד never (Ex 20:17)", TALES),
    (W + alt("נקי", "נקיה", "נקיים", "נקיתי", "ונקי", "נקיון", "ניקיון") + E, None, "נָקִי never (Ps 24:4 `נְקִי כַפַּיִם`; the wisdom corpus's reservation): wꜥb = טָהוֹר", TALES),
    (W + alt("בר", "ובר") + r"\s+" + alt("לבב", "לב") + E, None, "`בַּר לֵבָב` never (Ps 24:4)", TALES),
    (W + alt("נשך", "בנשך", "הנשך", "תרבית") + E, None, "נֶשֶׁךְ / תַּרְבִּית never (Ps 15:5; Lev 25:36–37)", TALES),
    (W + alt("אוני", "באוני", "בעוני") + E, None, "`בְאֹנִי` never (Deut 26:14)", TALES),
    (W + alt("בער", "ביער", "בערתי", "ביערתי", "תבער", "יבער", "בוער", "בוערת", "בערה", "הבערה") + E, r"(?<![\w,.-])ḫm(?![\w,-])", "the root בער never (Deut 26:13–14 `בִּעַרְתִּי`): the fire / removal verbs by their own sense", TALES),
    # Deut 8:8 (Sinuhe's land of Yaa): the seven species only for their Egyptian words
    (W + alt("תאנה", "תאנים", "התאנים", "תאנתו", "תאני") + E, r"dꜣb|dꜣb\.w|nḥ,t|nh,t", "תְּאֵנָה only for dꜣb 'fig' [equivalent Deut 8:8]", TALES),
    (W + alt("גפן", "הגפן", "גפנים", "ענבים", "הענבים", "ענב", "ענבי") + E, r"jꜣrr|jꜣrr,t|jrp|jꜣ~jr", "גֶּפֶן / עֲנָבִים only for jꜣrr.t 'grapes, vine' [equivalent Deut 8:8]", TALES),
    (W + alt("דבש", "הדבש", "דבשה", "דבשו") + E, r"bj,t|bj\.t|bj\b|bjt", "דְּבַשׁ only for bj.t 'honey' [equivalent Deut 8:8; Ex 3:8]", TALES),
    (W + alt("זית", "זיתים", "הזית", "הזיתים", "זיתי") + E, r"ḏd,t|ḏd\.t|ḏdt|bꜣq|bꜣq,t|\bbq\b|bq,t", "זַיִת only for ḏd.t / bꜣq 'olive' [equivalent Deut 8:8]", TALES),
    (r"(?<![א-ת])ו?" + alt("זבת", "זבה") + E, None, "`זָבַת חָלָב וּדְבָשׁ` never (Ex 3:8)", TALES),
    # the serpent (the dossier rule: `נָחָשׁ` the comparison word for every culture's serpent)
    (W + alt("נחש", "נחשים", "הנחש", "הנחשים", "נחשי", "נחשה") + E, r"ḥfꜣ|ḥfꜣw|ḥfꜣ,w|ḥfy|ḥfj|ꜥꜣpp|ḏdf|nḥꜣ|nꜣw|ꜥpp|sꜣ-tꜣ|ḏd\b|ḏd,t|ꜥrꜥr", "נָחָשׁ only for a serpent word (ḥfꜣw …) [equivalent Gen 3:1, Ex 7:9–12]", TALES),
]

V = NIQ
RW = rf"(?<![{V}א-ת])[ובלמהכש]?"
RE_ = rf"(?![{V}א-ת])"
# (regex on the RAW line; condition regex on the licence text: if it matches, the unvocalized string is an error;
# None = always), why. Renderings §5.3 "Always vocalized".
TRAPS = [
    (RW + r"(?:רע|הרע)" + RE_, r"\brꜥ\b|rꜥw|\bRꜥ", "Re is רַא (renderings §3): an unvocalized רע where the source has Rꜥ is a trap ('evil')"),
    (RW + r"(?:פתח)" + RE_, r"ptḥ|pth", "Ptah must be vocalized פְּתָח ('open')"),
    (RW + r"(?:גב)" + RE_, r"gb\b|gbb", "Geb must be vocalized גֶּבּ ('back')"),
    (RW + r"(?:מין)" + RE_, r"mnw\b|mnw\{tj\}|mnw", "Min must be vocalized מִין ('kind', Gen 1:21 `לְמִינֵהוּ`)"),
    (RW + r"(?:חם|החם)" + RE_, r"šmm", "the hot man must be vocalized הַחַם (Ham, Gen 9:18; Ps 105:23 `בְּאֶרֶץ חָם`)"),
    (RW + r"(?:אלים|אלי|אלה|אלת|אלתו|אלתי)" + RE_, r"(?<![-\w])nṯr", "'gods' / 'god of' / 'goddess' must be vocalized אֵלִים / אֵלֵי / אֵלָה / אֵלַת"),
    (RW + r"(?:און)" + RE_, r"jwnw|jwn,w|ꜣwnw", "Heliopolis must be vocalized אוֹן ('strength', 'iniquity')"),
    (RW + r"(?:מף|נף)" + RE_, r"mn-nfr|ḥw,t-kꜣ-ptḥ|jnb-ḥḏ|jnb.w-ḥḏ", "Memphis must be vocalized מֹף"),
    (RW + r"(?:בא)" + RE_, r"\bbꜣ\b(?!,)|bꜣ=|bꜣ\.", "the ba must be vocalized בָּא ('came')"),
    (RW + r"(?:כא)" + RE_, r"\bkꜣ\b|kꜣ=|kꜣ\.", "the ka must be vocalized כָּא"),
    (RW + r"(?:נון)" + RE_, r"nwn|nw,w|nnw", "Nun must be vocalized נוּן (the primeval water; Joshua's father)"),
    (RW + r"(?:נות)" + RE_, r"nw,t|nwt", "Nut must be vocalized נוּת"),
    (RW + r"(?:שו)" + RE_, r"šw\b|šw\.|šw=", "Shu must be vocalized שׁוּ"),
    (RW + r"(?:סת)" + RE_, r"stš|sth|swtḫ", "Seth must be vocalized סֵת (never שֵׁת)"),
    (RW + r"(?:שי|שאי)" + RE_, r"šꜣy", "Shai (Fate) must be vocalized שַׁאי ('gift')"),
    (RW + r"(?:מאת)" + RE_, r"mꜣꜥ,t|mꜣꜥt", "the goddess Maat must be vocalized מַאַת ('from', 'by')"),
    (RW + r"(?:שש)" + RE_, r"šs\b", "linen must be vocalized שֵׁשׁ ('six')"),
]

# (regex on the bracket-free source line, regex the bracket-free unvocalized Hebrew must match, what)
FORMULAS = [
    (r"^ḥw,t mḥ-1?\d\.t$|^ḥw,t mḥ-2\d\.t$|^ḥw,t mḥ-30\.t$|ḥw,t tp\.t", r"(?:^|\s)הבית ה", "ḥw.t mḥ-N.t = `הַבַּיִת הָ…` (§6.1; the chapter heading, 'house')"),
    (r"(?:^|\s)m-jri̯(?=\s|$)", r"(?:^|\s)[ו]?אל ", "m-jri̯ X = `אַל` + future (§6.2)"),
    (r"\bꜣḫ\b(?![,.]).*(?<![-\w])r(?![-\w])", r"(?:^|\s)[ו]?מוטב ", "ꜣḫ X r Y (better X than Y) = `מוּטָב X מִ־Y` (§6.3)", set(UNITS) - BOOK),
    (r"\bpꜣ šmm\b|\bpꜣyw =k šmm\b", r"(?:^|\s)[ו]?[ל]?(?:ה)?חם(?:\s|$|[,.;:])", "pꜣ šmm = `הַחַם` (§6.4)"),
    (r"\bgr mꜣꜥ\b", r"(?:ה)?שותק (?:ה)?(?:אמיתי|באמת)", "gr mꜣꜥ = `הַשּׁוֹתֵק הָאֲמִתִּי` (§6.4)"),
    (r"\bn ḫpr\.t\b|\bn ḫp\[?r\]?\.t\b", r"(?:^|\s)[ו]?טרם ", "n ḫpr.t X = `טֶרֶם נִהְיָה X` (§6.5)"),
    (r"\bḏ\(d\)-mdw\b|\bḏd-mdw\b", r"(?:^|\s)[ו]?(?:דברים לאמר|נאמר)|אמירה", "ḏd-mdw = `דְּבָרִים לֵאמֹר:` (§6.5)"),
    (r"^j \S.* pri̯ m \S+.* n \S", r"^הו .*היוצא", "BD 125: j X pri̯ m Y n sḏm=j Z = `הוֹ X, הַיּוֹצֵא מִ־Y: לֹא …` (§11.5.1)", {"BD"}),
    # --- the Book of the Dead of Nu, BD 175 (renderings §12.4; Round 6 run 2) ---
    (r"ḏd-mdw jn\b", r"דברים לאמר,? בפי", "ḏd-mdw jn X = `דְּבָרִים לֵאמֹר, בְּפִי X:` (§12.4.2)", BOOK),
    (r"(?<![\w-])mꜣꜥ-ḫrw", r"אמית\S*[־ ]?הקול|אמית\S*[־ ]קול", "mꜣꜥ-ḫrw = `אֲמִתִּי־הַקּוֹל` (§4.1, §12.4.3)", BOOK | {"MR"}),
    (r"smꜣꜥ-ḫrw", r"(?:אימת|מאמת|יאמת|לאמת|אאמת|תאמת|מאמתים|אימתו|אימתת)\S* .*קול", "smꜣꜥ-ḫrw (X) = `אִמֵּת אֶת קוֹל X` (§12.4.3)", BOOK),
    (r"ẖr-nṯr|ẖr,t-nṯr", r"חלקת[־ ]האל", "ẖr(.t)-nṯr = `חֶלְקַת־הָאֵל` (the 2026-10-30 harmonization; §12.4.4)", BOOK | {"MR"}),
    (r"šs-mꜣꜥ", r"נכון באמת", "šs-mꜣꜥ (ḥḥ n zp) = `דָּבָר נָכוֹן בֶּאֱמֶת, אַלְפֵי אֲלָפִים פְּעָמִים` (BD 115; §12.4.6)", BOOK),
    (r"^(?:ky )?rʾ n tm\b", r"לחש (?:אחר )?לבלי ", "rʾ n tm X = `לַחַשׁ לִבְלִי` + infinitive (§12.4.1)", BOOK),
    (r"^ky rʾ\b", r"(?:^|\s)לחש אחר", "ky rʾ = `לַחַשׁ אַחֵר` (§12.4.1)", BOOK),
]


def fixed_lines():
    p = os.path.join(HERE, "renderings.md")
    out = {}
    if not os.path.exists(p):
        return out
    insec = False
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 7.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Lines"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        heb = cells[2].strip("`").strip()
        for lab in re.split(r";\s*", cells[0]):
            m = re.match(r"^([A-Z]+\d*) (\S+)$", lab.strip())
            if m:
                out[(m.group(1), m.group(2))] = (cells[1].strip("`"), heb)
    return out


def lic(rx, key, lab):
    return rx is None or re.search(rx, license_text(key, lab), re.I) is not None


def check_line(key, lab, heb, body, fixed, out):
    """Run the gates on one entry; append messages to out; return the number of errors."""
    bad = 0
    plain = strip_marks(heb)
    # whole words that a gate's prefix class misreads (TB 6,3 `לברוח` "to flee", 8,7 `מרוח` "smeared"): not the gated word
    plain = re.sub(r"(?<![א-ת])[ובלכה]?(?:לברוח|מרוח|מרוחה|משקוף|המשקוף|משקופי|שמחה|שמחת|שמחתי|שמחתו|השמחה|משיט|משיטה|משיטים|המשיטים|להשיט|השיט|לוחם|לוחמים|הלוחמים|הלוחם|ללוחמים|מושבות|המושבות|במושבות|למושבות|כתיבה|הכתיבה|בכתיבה|לכתיבה|כתיבת)(?![א-ת])", " ", plain)   # + BD 90–91, 111; SI B70 (`שמחה` ≠ ש־מחה)
    if re.search(r"ḥmsi̯|ḥms\b|ḥmsj|ḥms\.", license_text(key, lab)):   # `לשבת` "to sit" (ḥmsj), not the root שבת (WE 3,8)
        plain = re.sub(r"(?<![א-ת])ו?לשבת(?![א-ת])", " ", plain)
    plain = re.sub(r"(?<![א-ת])[ובלמהכש]?רא־סטאו(?![א-ת])", " ", plain)   # Rosetau (Rʾ-sṯꜣ.w), not the root ברא (NU1 18.34)
    src = plain_src((row(key, lab) or {}).get("text", ""))
    for ent in RESERVED:
        rx, allow, why = ent[:3]
        if len(ent) > 3 and key not in ent[3]:
            continue
        if re.search(rx, plain) and not (allow and lic(allow, key, lab)):
            if "[היתר שער:" in body and re.search(r"\[היתר שער: [^\]]*" + re.escape(re.search(rx, plain).group(0).strip()), body):
                continue
            out.append(f"RESERVED {key} {lab}: {why}\n    {heb}\n    src: {src}")
            bad += 1
    for rx, cond, why in TRAPS:
        if re.search(rx, heb) and lic(cond, key, lab):
            out.append(f"UNVOCALIZED {key} {lab}: {why}\n    {heb}")
            bad += 1
    for ent in FORMULAS:
        srx, hrx, what = ent[:3]
        if len(ent) > 3 and key not in ent[3]:
            continue
        if re.search(srx, src) and not re.search(hrx, nopunct(plain)):
            if "[סטייה מן הנוסחה" in body:
                continue
            out.append(f"FORMULA {key} {lab}: {what}\n    {heb}\n    src: {src}")
            bad += 1
    if key in NU_KEYS | {"CH"} and re.match(r"^\S+\.1$|^1$", lab) and re.match(r"^rʾ n ", src) and not re.match(r"^לחש", nopunct(plain)) \
            and "[סטייה מן הנוסחה" not in body:
        out.append(f"FORMULA {key} {lab}: a chapter title rʾ n X = `לַחַשׁ לְ־X` (§12.4.1)\n    {heb}\n    src: {src}")
        bad += 1
    if (key, lab) in fixed:
        fh = fixed[(key, lab)][1]
        if nopunct(strip_marks(fh)) != nopunct(plain) and "[סטייה מן הקבוע" not in body:
            out.append(f"FIXED {key} {lab}: differs from renderings §7\n    fixed: {fh}\n    here:  {heb}")
            bad += 1
    return bad


def translation_lines(key):
    p = translation_path(key)
    if not os.path.exists(p):
        return None
    out, seq = {}, []
    for l in open(p, encoding="utf-8"):
        m = re.match(r"^\*\*([^*]+)\*\* (.*)$", l.rstrip("\n"))
        if m:
            out[m.group(1)] = re.sub(r"\[\^[^\]]+\]", "", m.group(2)).rstrip()
            seq.append(m.group(1))
    return out, seq


def dossier_wc():
    """{label: hebrew} of the fifth-day dossier's pWestcar excerpt (WC)."""
    out, cur = {}, None
    if not os.path.exists(DOSSIER_WC):
        return out
    for l in open(DOSSIER_WC, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
        elif cur and l.startswith("> "):
            out[cur] = l[2:].strip()
            cur = None
    return out


def check_dossier_wc(heb, body):
    """WE's lines 2,21–4,7 that the dossier has (WC) must equal the dossier's `>` lines exactly; a line marked
    `[סטייה מן התיק: <reason>]` is listed as a pending dossier revision (for the lead), not an error."""
    bad, pend = 0, []
    for lab, dh in dossier_wc().items():
        if lab not in heb:
            continue
        if heb[lab] != dh:
            if "[סטייה מן התיק:" in body.get(lab, ""):
                pend.append(lab)
                continue
            print(f"WE {lab}: differs from the fifth-day dossier (WC)\n    WC: {dh}\n    WE: {heb[lab]}")
            bad += 1
    n = len([l for l in dossier_wc() if l in heb])
    print(f"WE: {n} line(s) shared with the dossier's WC checked" + (f"; pending dossier revisions: {', '.join(pend)}" if pend else ""))
    return bad


DOSSIER_MK = os.path.join(ROOT, "מיתוסים-אוגריתיים", "3-תיק-היום-החמישי", "annotated-MK.rtl.md")


def gt_lines(path):
    """{label: `>` line} of any annotated file."""
    out, cur = {}, None
    if not os.path.exists(path):
        return out
    for l in open(path, encoding="utf-8"):
        l = l.rstrip("\n")
        m = re.match(r"^### (\S+)\s*$", l)
        if m:
            cur = m.group(1)
        elif cur and l.startswith("> "):
            out[cur] = l[2:].strip()
            cur = None
    return out


def check_excerpt(name, heb, other, other_name):
    """An excerpt kept identical to the whole (guidelines §1): every label of `other` present in `heb` must be equal,
    byte for byte (a revision goes to both files at once)."""
    bad, n = 0, 0
    for lab, oh in other.items():
        if lab not in heb:
            continue
        n += 1
        if heb[lab] != oh:
            print(f"{name} {lab}: differs from {other_name}\n    {other_name}: {oh}\n    {name}: {heb[lab]}")
            bad += 1
    print(f"{name}: {n} line(s) shared with {other_name} checked")
    return bad


def verify(keys, strict=False):
    keys = keys or present_keys()
    fixed = fixed_lines()
    bad = 0
    for key in keys:
        if key not in UNITS:
            print(f"unknown KEY {key}")
            bad += 1
            continue
        a = read_annotated(key)
        if a is None:
            print(f"{key}: no annotated file yet")
            bad += strict
            continue
        heb, seq, src, body, probs = a
        ordr = order(key)
        txt = open(annotated_path(key), encoding="utf-8").read()
        for p in probs:
            print(f"{key}: {p}")
            bad += 1
        missing = [x for x in ordr if x not in heb]
        extra = [x for x in seq if x not in ordr]
        if missing:
            if "טרם תורגם" in txt and not strict:
                print(f"{key}: note: {len(missing)} line(s) not yet drafted (placeholder): {missing[0]} … {missing[-1]}")
            else:
                print(f"{key}: missing in annotated: {missing}")
                bad += 1
        if extra:
            print(f"{key}: entries not in the base: {extra}")
            bad += 1
        if [x for x in seq if x in ordr] != [x for x in ordr if x in heb]:
            print(f"{key}: entries out of the base's order")
            bad += 1
        msgs = []
        for k in seq:
            if not heb[k].strip():
                print(f"{key} {k}: empty '>' line")
                bad += 1
            s = src.get(k)
            r = row(key, k)
            if s is None:
                print(f"{key} {k}: no backticked source line")
                bad += 1
            elif s == "`@`":
                print(f"{key} {k}: `@` not filled (run fill)")
                bad += 1
            elif r and s.strip("`") != r["text"]:
                print(f"{key} {k}: source line differs from the base\n    A: {s}\n    B: `{r['text']}`")
                bad += 1
            bad += check_line(key, k, heb[k], body.get(k, ""), fixed, msgs)
        for m in msgs:
            print(m)
        if key == "WE":
            bad += check_dossier_wc(heb, body)
        if key == "MK":   # Merikare E 130–136: the fifth-day dossier's excerpt (MK), identical to project 2's
            bad += check_excerpt("MK", heb, gt_lines(DOSSIER_MK), "the dossier's MK")
        if key == "MR":   # Merikare whole: E 130–138 = project 2's MK (the hymn), identical
            bad += check_excerpt("MR", heb, gt_lines(annotated_path("MK")), "project 2's MK")
        tr = translation_lines(key)
        if tr is not None:
            tl, tseq = tr
            if tseq != seq:
                print(f"{key}: translation line list differs from annotated ({len(tseq)} vs {len(seq)})")
                bad += 1
            for k in seq:
                if k in tl and tl[k] != heb[k]:
                    print(f"{key} {k}: translation != annotated\n   T: {tl[k]}\n   A: {heb[k]}")
                    bad += 1
        print(f"{key}: {len(seq)} annotated entries (base {len(ordr)})" + ("" if tr is None else f", {len(tr[1])} translation lines"))
    allh = all_hebrew()
    groups = {}
    for k2 in UNITS:
        for r in rows(k2):
            nk = plain_src(r["text"])
            if nk and len(nk.split()) >= 3:
                groups.setdefault(nk, []).append((k2, r["label"]))
    nd = 0
    print("\nRepeated lines (identical bracket-free source) with different Hebrew (justify in the apparatus or fix):")
    for nk, lst in groups.items():
        hs = [(k2, lab, allh.get(k2, {}).get(lab)) for k2, lab in lst]
        hs = [h for h in hs if h[2]]
        if len(hs) < 2 or (keys and not any(h[0] in keys for h in hs)):
            continue
        if len({nopunct(strip_marks(h[2])) for h in hs}) > 1:
            nd += 1
            print(f"- {nk}")
            for k2, lab, h in hs:
                print(f"    {k2} {lab}: {h}")
    print(f"\n{nd} repeated-line difference(s); problems: {bad}")
    return bad == 0


# ---------------------------------------------------------------- data, tr, fill, lex, lemma, grep
def _similar(key, lab, nk, corpus, allh, fixed, thr=0.75):
    out = []
    for k2, l2, n2 in corpus:
        if (k2, l2) == (key, lab) or not n2:
            continue
        if n2 == nk:
            r = 1.0
        elif len(nk.split()) >= 3 and abs(len(n2) - len(nk)) < 0.5 * len(nk):
            r = difflib.SequenceMatcher(None, nk, n2).ratio()
            if r < thr:
                continue
        else:
            continue
        h = allh.get(k2, {}).get(l2) or (fixed.get((k2, l2)) or (None, None))[1] or "(not yet drafted)"
        out.append((r, k2, l2, n2, h))
    out.sort(key=lambda x: -x[0])
    return out


def _corpus():
    return [(k2, r["label"], plain_src(r["text"])) for k2 in UNITS for r in rows(k2)]


def cmd_units():
    for k, u in UNITS.items():
        print(f"{k}\t{u[0]}\t{len(rows(k))} lines\t{u[1]}\t{'drafted' if os.path.exists(annotated_path(k)) else ''}")


def _span(key, a=None, b=None):
    rs = rows(key)
    labs = [r["label"] for r in rs]
    i = labs.index(a) if a else 0
    j = labs.index(b) if b else (i if a else len(rs) - 1)
    return rs[i:j + 1]


def cmd_data(key, a=None, b=None, wit=False):
    corpus = _corpus()
    allh = all_hebrew()
    fixed = fixed_lines()
    sp = _span(key, a, b)
    print(f"# {key} ({UNITS[key][1]}): line data {sp[0]['label']}–{sp[-1]['label']}\n")
    print("Words: surface – TLA lemma id (morphology) \"the TLA's German gloss in context\" (a dictionary aid, not a "
          "translation: check the form yourself).\n")
    for r in sp:
        print(f"### {r['label']}" + (f"   (AED: [{r['orig']}])" if r["orig"] != r["label"] else ""))
        print(f"`{r['text']}`")
        for w in r["words"]:
            if w["feats"] == "alt":
                print("- `/` – AED gives two analyses of the same written word (no text lost)")
            else:
                print(f"- {aed2md.fmt_word(w)}")
        if (key, r["label"]) in fixed:
            print(f"- FIXED (renderings §7): {fixed[(key, r['label'])][1]}")
        nk = plain_src(r["text"])
        if nk and len(nk.split()) >= 3:
            for rr, k2, l2, n2, h in _similar(key, r["label"], nk, corpus, allh, fixed)[:6]:
                print(f"- {'identical' if rr == 1.0 else f'similar {rr:.2f}'}: {k2} {l2} `{n2}` → {h}")
        print()
    if wit and key in WITNESSES:
        print("\n# The other witnesses (AED; consult for variants: say in the apparatus where they differ)\n")
        for f in WITNESSES[key]:
            p = os.path.join(AED, f)
            print(f"## {aed2md.title(p)} ({f.split('/')[0]})")
            for l in aed2md.parse(p):
                print(f"- [{l['label']}] `{l['text']}`")
            print()


def cmd_tr(key, a=None, b=None):
    if UNITS[key][2] == "tsv":
        de = {}
        if os.path.exists(MT_DE):
            for l in open(MT_DE, encoding="utf-8"):
                if not l.startswith("#") and "\t" in l:
                    c = l.rstrip("\n").split("\t")
                    de[c[0].strip()] = c[1]
        for r in _span(key, a, b):
            print(f"[{r['label']}] {de.get(r['label'], '(none)')}")
        return
    if UNITS[key][2] == "aed-NU":
        fs = tuple(f"{NU_DIR}/{c[2]}.xml" for c in nu_chapters(key))
    else:
        fs = UNITS[key][3] if isinstance(UNITS[key][3], tuple) else (UNITS[key][3],)
    trs = {}
    for f in fs:   # Sinuhe: R and B (their sentence ids are distinct)
        trs.update(aed2md.translations(os.path.join(AED, f)))
    seen = []
    for r in _span(key, a, b):
        for s in r["sents"]:
            if s not in seen:
                seen.append(s)
                print(f"[{r['label']}] {trs.get(s, '(no translation)')}")


def cmd_fill(path):
    path = os.path.abspath(path)
    m = re.search(r"annotated-([A-Z]+\d*)\.rtl\.md$", path)
    if not m or m.group(1) not in UNITS:
        sys.exit("not an annotated-<KEY>.rtl.md file")
    key = m.group(1)
    text = open(path, encoding="utf-8").read().split("\n")
    cur, n = None, 0
    for i, ln in enumerate(text):
        mm = re.match(r"^### (\S+)\s*$", ln)
        if mm:
            cur = mm.group(1)
            continue
        if ln.strip() == "`@`" and cur:
            r = row(key, cur)
            if r:
                text[i] = "`" + r["text"] + "`"
                n += 1
            else:
                print(f"no base line {cur}")
    open(path, "w", encoding="utf-8").write("\n".join(text))
    print(f"{os.path.basename(path)}: {n} lines filled")


def cmd_lex(pat):
    rx = re.compile(pat, re.I)
    allh = all_hebrew()
    for k in UNITS:
        for r in rows(k):
            if rx.search(r["text"]) or rx.search(license_text(k, r["label"])):
                h = allh.get(k, {}).get(r["label"])
                print(f"{k} {r['label']}: `{r['text']}`\n    {h or '(not yet drafted)'}")


def cmd_lemma(q):
    """A lemma id (tla12345 / 12345) → its forms and glosses; else a regex on the glosses → the lemmas."""
    idq = re.sub(r"^tla", "", q) if re.match(r"^(tla)?\d+$", q) else None
    found = {}
    for f in sorted(glob.glob(os.path.join(AED, "*", "*.xml"))):
        if re.search(r"_(st|wt|hiero)\.xml$", f):
            continue
        for ln in aed2md.parse(f):
            for w in ln["words"]:
                lem = w.get("lemma", "").replace("tla", "")
                if not lem:
                    continue
                if (idq and lem == idq) or (not idq and re.search(q, w.get("gloss", ""), re.I)):
                    e = found.setdefault(lem, {"forms": {}, "gloss": {}, "feats": {}})
                    e["forms"][w["surf"]] = e["forms"].get(w["surf"], 0) + 1
                    e["gloss"][w["gloss"]] = e["gloss"].get(w["gloss"], 0) + 1
                    e["feats"][w["feats"]] = e["feats"].get(w["feats"], 0) + 1
    for lem, e in sorted(found.items(), key=lambda x: -sum(x[1]["forms"].values())):
        print(f"tla{lem}: {sum(e['forms'].values())}×  forms: {', '.join(f'{k} ({v})' for k, v in sorted(e['forms'].items(), key=lambda x: -x[1])[:8])}")
        print(f"    glosses: {'; '.join(f'{k} ({v})' for k, v in sorted(e['gloss'].items(), key=lambda x: -x[1])[:5])}")
        print(f"    morphology: {'; '.join(f'{k} ({v})' for k, v in sorted(e['feats'].items(), key=lambda x: -x[1])[:4])}")


def cmd_grep(pat, every=False):
    rx = re.compile(pat)
    if not every:
        for k in present_keys():
            heb, seq, src, _, _ = read_annotated(k)
            for lab in seq:
                if rx.search(strip_marks(heb[lab])):
                    print(f"{k} {lab}: {heb[lab]}   ‹{(row(k, lab) or {}).get('text', '')}›")
        return
    for f in sorted(glob.glob(os.path.join(ROOT, "*", "**", "annotated*.rtl.md"), recursive=True)):
        srcl, lab = None, None
        for ln in open(f, encoding="utf-8"):
            if ln.startswith("### "):
                srcl, lab = None, ln[4:].strip()
            elif ln.startswith("`") and srcl is None:
                srcl = ln.strip()
            elif ln.startswith("> ") and rx.search(strip_marks(ln[2:])):
                print(f"{os.path.relpath(f, ROOT)} {lab}: {ln[2:].strip()[:140]}   ‹{(srcl or '')[:100]}›")


def cmd_gates():
    print("RESERVED (Hebrew regex | licensed by | why):")
    for ent in RESERVED:
        rx, allow, why = ent[:3]
        scope = f" [only {', '.join(sorted(ent[3]))}]" if len(ent) > 3 else ""
        print(f"  {rx}\n      ← {allow or 'NEVER'}  ({why}){scope}")
    print("\nTRAPS:")
    for rx, cond, why in TRAPS:
        print(f"  {rx}  [{cond}]  {why}")
    print("\nFORMULAS:")
    for ent in FORMULAS:
        s, h, w = ent[:3]
        scope = f" [only {', '.join(sorted(ent[3]))}]" if len(ent) > 3 else ""
        print(f"  {s}  →  {h}   ({w}){scope}")


def cmd_selftest():
    """Run the gates on the test lines of renderings.md §9: | KEY label | expect (ok/err) | Hebrew |."""
    p = os.path.join(HERE, "renderings.md")
    insec, n, fails = False, 0, 0
    fixed = fixed_lines()
    for l in open(p, encoding="utf-8"):
        if l.startswith("## "):
            insec = l.startswith("## 9.")
            continue
        if not insec or not l.startswith("|") or l.startswith("|---") or l.startswith("| Line"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        m = re.match(r"^([A-Z]+\d*) (\S+)$", cells[0])
        if not m:
            continue
        key, lab = m.groups()
        heb = cells[2].strip("`")
        msgs = []
        b = check_line(key, lab, heb, "", fixed, msgs)
        got = "err" if b else "ok"
        n += 1
        if got != cells[1]:
            fails += 1
            print(f"SELFTEST FAIL {key} {lab}: expected {cells[1]}, got {got}\n    {heb}")
            for x in msgs:
                print("   ", x.replace("\n", "\n    "))
    print(f"selftest: {n} lines, {fails} failure(s)")
    return fails == 0


# ---------------------------------------------------------------- build
def sections(key):
    out, cur = [], None
    for l in open(annotated_path(key), encoding="utf-8"):
        l = l.rstrip("\n")
        if l.startswith("## "):
            out.append(("h", l[3:].strip()))
            cur = None
        elif l.startswith("# "):
            cur = None
        elif re.match(r"^### (\S+)\s*$", l):
            cur = l[4:].strip()
            out.append(["l", cur, "", ""])
        elif cur and l.startswith("> "):
            out[-1][2] = l[2:].strip()
        elif cur and l.startswith("- **הערת שוליים:**"):
            out[-1][3] = l[len("- **הערת שוליים:**"):].strip()
    return out


GENERATED = ("<!--\nGENERATED FILE. Do not edit by hand.\nBuilt by ../egypt_tools.py build from {src}.\n"
             "To change the text, edit those files and run: python3 -I -B ../egypt_tools.py build\n-->\n\n")


def build_one(key):
    pdir = os.path.join(HERE, UNITS[key][0])
    ip = os.path.join(pdir, f"translation--intro-{key}.rtl.md")
    intro = open(ip, encoding="utf-8").read().rstrip("\n") if os.path.exists(ip) else f"# {UNITS[key][1]}"
    out, notes, n = [], [], 0
    secs = sections(key)
    for s in secs:
        if s[0] == "h":
            out.append(f"\n## {s[1]}\n")
        else:
            ref = ""
            if s[3]:
                n += 1
                ref = f"[^{n}]"
                notes.append(f"[^{n}]: {s[3]}")
            out.append(f"**{s[1]}** {s[2]}{ref}  ")
    head = GENERATED.format(src=f"translation--intro-{key}.rtl.md and the `## ` headings, `>` lines and `הערת שוליים` bullets of annotated-{key}.rtl.md")
    text = head + intro + "\n" + "\n".join(out) + "\n" + ("\n---\n\n" + "\n\n".join(notes) + "\n" if notes else "")
    open(translation_path(key), "w", encoding="utf-8").write(text)
    print(f"translation-{key}.rtl.md: {sum(1 for s in secs if s[0] == 'l')} lines, {n} footnotes")


def build_project(proj, keys):
    pdir = os.path.join(HERE, proj)
    hp = os.path.join(pdir, "translation--head.rtl.md")
    head = open(hp, encoding="utf-8").read().rstrip("\n") if os.path.exists(hp) else f"# {PROJECT_TITLES[proj]}"
    parts = [GENERATED.format(src="translation--head.rtl.md and translation-<KEY>.rtl.md") + head]
    for k in keys:
        src = open(translation_path(k), encoding="utf-8").read().split("\n")
        src = [l for l in src if not (l.startswith("<!--") or l.startswith("GENERATED") or l.startswith("Built by")
                                       or l.startswith("To change") or l == "-->")]
        fix = lambda s, k=k: re.sub(r"\[\^([^\]]+)\]", lambda m: f"[^{k}-{m.group(1)}]", s)
        body = []
        for l in src:
            if l.strip() == "---":
                continue
            body.append("#" + fix(l) if (l.startswith("# ") or l.startswith("## ")) else fix(l))
        while body and not body[0].strip():
            body.pop(0)
        parts.append("\n\n" + "\n".join(body).rstrip("\n"))
    open(os.path.join(pdir, "translation.rtl.md"), "w", encoding="utf-8").write("".join(parts) + "\n")
    print(f"{proj}/translation.rtl.md: {', '.join(keys)}")


def build(keys=None):
    pk = [k for k in present_keys() if not keys or k in keys]
    for k in pk:
        build_one(k)
    bad = 0
    for proj in PROJECTS:
        ks = [k for k in present_keys() if UNITS[k][0] == proj]
        if keys and not any(k in keys for k in ks):   # `build KEY`: only that KEY's project (parallel translators)
            continue
        if not ks:
            continue
        if len(ks) == 1 and proj != P2:
            # one text in the project: translation.rtl.md = translation-<KEY>.rtl.md under the project head
            pass
        build_project(proj, ks)
        p = os.path.join(HERE, proj, "translation.rtl.md")
        comb = [l for l in open(p, encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        srcl = []
        for k in ks:
            srcl += [re.sub(r"\[\^([^\]]+)\]", lambda m, k=k: f"[^{k}-{m.group(1)}]", l)
                     for l in open(translation_path(k), encoding="utf-8").read().split("\n") if re.match(r"^\*\*[^*]+\*\* ", l)]
        if comb != srcl:
            print(f"{proj}: combined numbered lines differ from the per-file translations")
            bad += 1
        txt = open(p, encoding="utf-8").read()
        refs = re.findall(r"\[\^([^\]]+)\](?!:)", txt)
        defs = re.findall(r"^\[\^([^\]]+)\]:", txt, re.M)
        if sorted(set(refs)) != sorted(defs) or len(refs) != len(set(refs)):
            print(f"{proj}: footnote mismatch ({len(refs)} refs, {len(defs)} defs)")
            bad += 1
    ok = verify(pk if keys else present_keys())
    return ok and bad == 0


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd, rest = a[0], [x for x in a[1:] if not x.startswith("--")]
    if cmd == "units":
        return cmd_units()
    if cmd == "data" and rest:
        return cmd_data(*rest[:3], wit="--wit" in a)
    if cmd == "tr" and rest:
        return cmd_tr(*rest[:3])
    if cmd == "fill" and rest:
        for p in rest:
            cmd_fill(p)
        return
    if cmd == "lex" and rest:
        return cmd_lex(rest[0])
    if cmd == "lemma" and rest:
        return cmd_lemma(rest[0])
    if cmd == "verify":
        sys.exit(0 if verify(rest, "--strict" in a) else 1)
    if cmd == "build":
        sys.exit(0 if build(rest) else 1)
    if cmd == "grep" and rest:
        return cmd_grep(rest[0], "--all" in a)
    if cmd == "gates":
        return cmd_gates()
    if cmd == "selftest":
        sys.exit(0 if cmd_selftest() else 1)
    sys.exit(__doc__)


if __name__ == "__main__":
    main()
