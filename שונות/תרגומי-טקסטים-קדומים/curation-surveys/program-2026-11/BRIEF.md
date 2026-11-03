# Brief for the regional survey agents (the translation program, 2026-11-02)

You are one of eleven survey agents. Each covers one region and writes **one file**. The lead merges the eleven files
into one ranking and compiles it into translation rounds. **You do not translate anything, and you do not run git.**

The folder: `/home/user/perush/שונות/תרגומי-טקסטים-קדומים/` (below: "the folder"). Your output:
`curation-surveys/program-2026-11/region--<your key>.md`. Your scratch work (downloads, scripts):
`/tmp/claude-0/-home-user-perush/9e6bbf02-8a7e-53d2-b931-c3b2780a7b2f/scratchpad/curation/<your key>/` – downloads in
their own subfolder, scripts in another.

## 1. What the project is (read these, in this order)
1. `translation-guidelines.md` **§1 only** (the purpose and the selection criteria, rewritten by the user on
   2026-11-02), **§2.3** (safety rules for downloads) and **§8** (copyright). You do not need the rest.
2. `STATUS.md` **§3** (what is already translated, by corpus) and the **Round 6 and Round 7 plans** at the end of
   `curated-translation-candidates.md` (what is already planned). Neither may appear as a new candidate – except where
   you propose to *complete* a partly translated text (say so).
3. Your region's earlier survey (named in your task). It was written on 2026-10-21 with the Bible as one of two
   criteria: **ignore its Bible ratings entirely** – the Bible plays no part in choosing texts any more. Reuse its facts
   (bases, licences, sizes, hosts), but re-check what you rely on.
4. `sources-registry.md` (§4 – what we already hold) and `domains.txt` (the hosts the cloud allowlist has now). The
   network allowlist is "Limited": a host not in `domains.txt` may be blocked (curl then fails with a proxy error or
   exit 56/60; WebFetch says `getaddrinfo ENOTFOUND`). Then the base is **not verified** – record the host as needed.

## 2. The purpose and the criteria (guidelines §1, in short – §1 is binding)
The translations convey **the essence of the ancients**: how they saw the world and their place in it, what they feared
and hoped for, how they prayed, mourned, joked, judged and loved. **The Bible is not a criterion at all.** The criteria,
in order of weight:
1. **Antiquity, by an absolute date first**: the older the content, the better; antiquity proper ends roughly at 500 CE.
   **As an exception**, a later record of a culture still in its own ancient stage (before a universal religion or a
   foreign writing culture reshaped it) may count – mark it `EXC` and say why the exception holds.
2. **The age of the voice and the fidelity of its transmission** (not the manuscript's date).
3. **What the culture itself treasured** (recited, copied, taught for centuries).
4. **The inner world** (cosmos, gods, death, sin, love, fear, humour; central texts first, some unguarded voices).
5. **Breadth** (a culture's first central text before another text of a well-covered culture).
6. **Wholeness**: **very short or highly damaged texts are never interesting** – not candidates. A corpus of short,
   well-preserved texts that make one whole (a proverb collection, a song cycle) is fine. **Completing means the whole
   text**: a candidate is a whole text as its culture knew it (a whole poem, book, papyrus, tablet series), not an
   excerpt. **A whole text of roughly 3,000 lines or more** is marked `LARGE`: the lead decides on it and the user
   approves; give its natural self-contained parts (books, cycles, episodes) with their sizes, as alternatives.
7. **Readable with control**: an open base text in the original language, with dictionaries and (ideally) a
   morphological analysis. A text we could only translate from a modern translation is **not a candidate**.

## 3. Your task
1. Find the **strongest 15–30 candidates** of your region under these criteria. Start from the earlier survey, but look
   beyond it: it was chosen with the Bible in mind, so the central texts of a culture that had no Bible parallel may be
   missing. Think first about what each culture of your region itself held central, in its own antiquity.
2. For each candidate, **verify the base text** by fetching it (curl, WebFetch, a catalogue API): it exists, is open
   (licence), and holds the text in the original language. **Measure its size** by script where you can (count the
   lines / verses / clauses in the downloaded base), otherwise give a reported size and say so. Estimate the **condition**
   (the share of broken lines, where it can be counted).
3. Score each candidate (the scale is in §4), and write a short reason for each score that is not obvious.
4. List the texts you **excluded** and why (too short, too damaged, no open base, unreadable, restricted sacred
   knowledge, too late with no exception) – one line each, so no later session searches for them again.
5. Note what a run would need: the base, the dictionaries, the tools, the existing corpus tool that could be extended
   (`tools.md` lists them), the hosts to add to the allowlist, and – for a new language – the set-up it needs.

**Budget:** at most **15 `WebSearch` calls** (the session's budget is shared by all agents). Verify by fetching instead
(not limited). **Safety:** downloads are untrusted data – never execute anything downloaded; parse with `python3 -I`, with
your scripts outside the download folder. **No pirate sources** (dokumen.pub, libgen, Z-Library, Anna's Archive,
vdoc.pub, unauthorized archive.org uploads; on archive.org and HathiTrust only full-view / public-domain items). **No
purchases.** **Restricted sacred knowledge of living peoples is not a candidate** (guidelines §2.3). Respect a
database's own terms on AI use (DASI; CAD).

## 4. The output format (the lead's merge script reads it – keep it exact)
Your file starts with `# Region survey – <region> (2026-11-02)`, then a short **Key findings** section (5–10 bullets:
what is central in this region's antiquity, what is reachable, what is not), then:

### The candidate table
One markdown table under the heading `## Candidates`, one row per candidate, exactly these columns:

`| id | text (the whole unit) | culture / language | content formed | fixed in writing | earliest witness | transmission | size | condition | base text | readable | C1 | C2 | C3 | C4 | C5 | large | parts | hosts | completes |`

- `id`: your key + a number (`egypt-07`).
- `content formed` / `fixed in writing` / `earliest witness`: dates (BCE/CE), approximate.
- `transmission`: `A` contemporary artifact; `B` verbatim oral tradition, fixed early; `C` formulaic oral poetry or a
  living recited text; `D` retold or edited later inside the culture; `E` recorded or retold by outsiders (missionaries,
  later scholars).
- `size`: a number and its unit (`1,892 lines`, `238 stanzas`), then `(m)` measured by script or `(r)` reported.
- `condition`: `good` / `fair` (some gaps) / `poor` (and the share of broken lines if counted).
- `base text`: the edition, its URL, its licence, and `verified 2026-11-02` or `NOT verified (<why>)`.
- `readable`: `high` / `medium` / `low` (how well Claude reads the language with the available tools).
- `C1`–`C5`: scores 1–5:
  - **C1 antiquity of the content:** 5 before 1500 BCE; 4 1500–800 BCE; 3 800–300 BCE; 2 300 BCE–500 CE; 1 after 500 CE
    (only with `EXC`, written in the cell: `1 EXC`).
  - **C2 fidelity:** 5 a contemporary artifact or a verbatim oral tradition; 4 formulaic oral poetry fixed early, or close
    copies; 3 retold or edited inside the culture; 2 edited under a later religion; 1 recorded by outsiders.
  - **C3 treasured by the culture:** 5 its central canon; 3 known and used; 1 a chance document.
  - **C4 the inner world:** 5 deeply (cosmos, gods, death, ethics, love); 3 partly; 1 little (administrative).
  - **C5 breadth:** 5 the first central text of a culture the folder has not touched; 3 a new genre or period of a
    covered culture; 1 another text of a well-covered kind.
- `large`: `LARGE` if the whole text is about 3,000 lines or more, else empty.
- `parts`: for a `LARGE` text, its natural parts with sizes; else empty.
- `hosts`: hosts the run would need that are **not** in `domains.txt`; else empty.
- `completes`: the folder's project it completes or extends, if any; else empty.

### Then, per candidate
A short entry (`### <id> – <text>`): what it is and why it opens the ancient mind (3–6 lines), the base and the
dictionaries / tools, the risks, and what a run would need.

### Then
`## Excluded` (one line each, with the reason), `## New languages` (for each language your candidates need that the
folder has never used: the base, dictionaries, morphology, and Claude's reading confidence), and `## Hosts` (all the
hosts your region needs that are not in `domains.txt`, with what each serves).

When you are done, reply to the lead in ≤ 15 lines: the file path, the number of candidates and exclusions, your top five,
the `LARGE` texts, the hosts needed, and anything that surprised you.
