# AI-Agent Personas & Template System

> **Spin-out from `CLAUDE.md`.** Read when working on `session-manager.ts` template resolution, adding new agents, or modifying system prompt construction.

## Persona Files

Agent persona files live in `participant-agents/`; shared prompt templates live in `prompts/`:

| File | Name | Type | Role |
|------|------|------|------|
| `prompts/system-prompt-base-prefix.md` | — | *(shared prefix)* | Prepended to ALL AI-Agents — scholarly persona, deliberation mechanics, full interpretive methodology, dictionary injection point, fellow participants, per-agent `noteInSelfSystemPrompt` injection point |
| `participant-agents/milo.md` | **Milo / מיילו** | Participant-Agent | Dictionary Purist (המילונאי) — word-level dictionary fidelity |
| `participant-agents/archi.md` | **Archi / ארצ'י** | Participant-Agent | Architect (האדריכל) — structural coherence across the narrative |
| `participant-agents/kashia.md` | **Kashia / קשיא** | Participant-Agent | Skeptic (המבקר) — intellectual honesty, degrees of freedom, reverse-engineering test |
| `participant-agents/barak.md` | **Barak / ברק** | Participant-Agent | Ideator (ההברקה) — divergent insight, rare speaker by design |
| `prompts/system-prompt-orchestrator.md` | — | Orchestrator-Agent | The orchestration logic (not a Participant) |

**Naming convention**:
- Prompt templates (shared prefixes, per-cycle prompts, orchestrator system prompt) live in `prompts/`.
- Agent persona files in `participant-agents/` undergo template processing and have YAML frontmatter.
- Each Participant-Agent has an **English name** and a **Hebrew name** (phonetically similar).
- The Orchestrator-Agent has no public name — it "lives in the shadows."
- The Director is known as **"The Director"** / **"המנחה"**.

## Frontmatter

Each non-underscore agent file has YAML frontmatter:

```yaml
---
englishName: Milo
hebrewName: מיילו
noteInSelfSystemPrompt: "You are especially attuned to precision in language — the exact word, the exact root, the exact usage across the corpus."
introForOthers: "The Dictionary Purist. Audits word-level dictionary fidelity — catches untranslated words, loose synonyms, and narrative drift. Direct, factual, tends to speak frequently with short, pointed observations"
noteForOrchestrator: "Bring in when specific words need dictionary checking, when the discussion is drifting from the text, or when dictionary evidence could settle a dispute. If Milo is quiet, either dictionary fidelity is solid — or the conversation has drifted so far from the text that Milo has nothing to anchor to. The latter is a red flag."
---
```

**Structural fields** (required, typed in `AgentDefinition`):
- **`englishName`** / **`hebrewName`**: Display names, used for speaker labels, UI, and template resolution.

**Dynamic fields** (stored in `frontmatterData: Record<string, string>`):
All other frontmatter fields are captured dynamically. No code changes needed to add new fields — just add them to the frontmatter and reference them in templates. Standard dynamic fields:
- **`introForOthers`**: One-sentence profile visible to fellow participants and the orchestrator. Describes the agent's role and style.
- **`noteForOrchestrator`**: Intelligence briefing for the orchestrator — when to bring this agent in, what their silence or score patterns mean, and what to watch for. Richer than a simple "tip" because the orchestrator is a substantive moderator who needs to understand each agent's engagement patterns.
- **`noteInSelfSystemPrompt`**: A single sentence echoed into the shared Persona section of the base prefix, seeding the agent's distinctive intellectual orientation before any methodology sections. Bridges the shared scholarly identity with the agent's unique cognitive style.

Dynamic fields are accessible in templates via:
- **`<!-- @echo fieldName -->`** — in the agent's own persona file (for self-reference).
- **`$var.fieldName`** — inside `@foreach-agent` loops (for referencing other agents' fields).

## Agent Discovery

Participant-Agents are **discovered dynamically** from `participant-agents/` — not hardcoded. Adding a new Participant-Agent requires only creating a new `.md` file with proper frontmatter; no code changes needed.

At server start, the session manager scans `participant-agents/` for all non-underscore `.md` files:

1. Parse the YAML frontmatter to extract `englishName`, `hebrewName`, and all other fields into `frontmatterData`.
2. Extract the `roleTitle` by finding the first `# ` heading and pulling the parenthesized Hebrew text — e.g., from `# ... Milo The Dictionary Purist (מיילו המילונאי)` extract `מיילו המילונאי`.
3. Derive the `id` from the filename without `.md` (e.g., `milo.md` → `"milo"`).
4. Build an `AgentDefinition` object and cache it.

The result is cached for the server's lifetime (re-read on server restart).

**Important**: When adding or removing a Participant-Agent file, also update the `AgentId` type in `src/types.ts` — its literal union members should mirror the set of agent filenames (without `.md`). The type accepts any string at runtime (via `(string & {})`), but the literal members provide IDE autocomplete suggestions.

### REST Endpoint

```
GET /api/agents
```

Returns the cached agent definitions as a JSON array.

## Template Directives

Template resolution runs as a **fixpoint loop** — three phases execute repeatedly until a full iteration produces no changes (capped at `MAX_PREPROCESS_ITERATIONS` from `config.ts`). This means any phase can introduce directives that a subsequent or earlier phase resolves on the next iteration.

1. **Phase 1 — `preprocess` library**: Resolves `@include`, `@echo`, `@ifdef`, and standard `@foreach` directives. Included files are processed recursively with the same context.
2. **Phase 2 — Custom `@foreach-agent`**: Resolves `@foreach-agent` loops with dot-access on `AgentDefinition` properties (including `frontmatterData` fields). Runs after includes are inlined, so it works across included files.
3. **Phase 3 — Custom `@include-region`**: Extracts a regex-matched region from a file. The included content re-enters the loop, so directives within the extracted region are resolved.

Available directives (HTML-comment syntax):

| Directive | What it does |
|-----------|-------------|
| `<!-- @include filename.md -->` | Inline another file (recursive, same context) |
| `<!-- @include-region path/to/file.md /RegExp/ -->` | Extract the single region matching the RegExp from a file (see below) |
| `<!-- @echo dictionary -->` | Inject the full dictionary text extracted from `../CLAUDE.md` |
| `<!-- @echo EnglishName -->` | Agent's own English name (from frontmatter) |
| `<!-- @echo HebrewName -->` | Agent's own Hebrew name (from frontmatter) |
| `<!-- @echo fieldName -->` | Any frontmatter field from the current agent's file |
| `<!-- @foreach-agent $var in participantAgents -->`<br>`$var.englishName / $var.hebrewName: $var.introForOthers`<br>`<!-- @endfor-agent -->` | Loop over participant agents with dot-access to any field (structural or `frontmatterData`) |

The `@foreach-agent` directive supports dot-access on any `AgentDefinition` property: `id`, `englishName`, `hebrewName`, `roleTitle`, and any key in `frontmatterData`. For example, `$agent.introForOthers` resolves to the agent's `frontmatterData.introForOthers` value.

### `@include-region`

Includes a **single regex-matched region** from a file, rather than the entire file.

**Typical usage** — extracting a section from a Markdown file by heading boundaries:

```html
<!-- @include-region system-prompt-base-prefix.md /^# The Deliberation\n[\s\S]*(?=^## Your Fellow Participants\n)/m -->
```

This includes the section "# The Deliberation" up to (excluding) "## Your Fellow Participants". The `m` flag makes `^` match at line beginnings. This heading-boundary pattern is expected to cover most uses.

- The RegExp must match **exactly one** region in the target file — throws on zero or multiple matches.
- Optional flags (`i`, `m`, `u`, etc.) can follow the closing slash. The `s` (dotAll) flag is always on.
- The `g` flag is **forbidden** (throws) — the directive's semantics require exactly-one matching.
- The directive's resolution is the matched string, which then re-enters the fixpoint loop for further directive resolution.

**Example flow** for `milo.md`:
```
1. resolveTemplate("milo.md", meetingParticipants, "milo")
2. Read file → gray-matter strips frontmatter
3. buildPreprocessContext(): builds context with dictionary + all frontmatter as @echo vars
4. Fixpoint loop iteration 1:
   Phase 1: preprocessLib.preprocess(content, context, ...)
     ↳ resolves <!-- @include ... --> → inlines base with dictionary
     ↳ resolves @echo markers (EnglishName, HebrewName, dictionary, etc.)
   Phase 2: resolveForEachAgent(...)
     ↳ expands <!-- @foreach-agent $agent in participantAgents --> with dot-access
   Phase 3: resolveIncludeRegion(...)
     ↳ resolves any <!-- @include-region ... --> directives
5. Iteration 2: all phases produce no changes → loop terminates
6. Returns fully resolved system prompt
```

## System Prompt Construction

`buildSystemPrompt(agentId, meetingParticipants)` is now a thin wrapper: it calls `resolveTemplate(filename, meetingParticipants, excludeAgentId?)` once. All complexity lives in the template files and `buildPreprocessContext`.

**Participant-Agent prompt structure** (declared in each agent .md file):
```
<!-- @include ../prompts/system-prompt-base-prefix.md -->      ← common instructions + dictionary + fellow participants (@foreach, excludes self)

# Your Unique Identity: ...            ← persona-specific content
```

**Orchestrator prompt structure** (declared in `prompts/system-prompt-orchestrator.md`):
```
# Your Unique Identity: ...                    ← orchestrator identity and role
# The Methodology You Are Moderating           ← @include-region mosaic from base-prefix (project, core principle, cognitive mode, dictionary, sequences, layers, anti-patterns, interpretive process, cross-referencing, mute texts)
# The Participants                             ← @foreach with introForOthers + noteForOrchestrator
# Your Input / Output / How to Decide          ← orchestrator-specific instructions
# קריאת מצב — The Status Read              ← intellectual deliberation status + occasional substantive observations
```

## Design Principles

The Participant-Agents follow a **primary mandate / secondary engagement** structure:

- **Primary mandate** (strict): Each agent has a domain they're uniquely qualified to observe.
- **Secondary engagement** (dialectical): Agents CAN and SHOULD engage with what others said — but always through their own lens.

### Language

Participant-Agents **speak in Hebrew**. The persona files themselves are in English (instructions for the LLM), but all output is in Hebrew.

### Speech Rhythm

No hard length constraint. The guidance is conversational: deliver your point well, keep it dynamic. Forcing a contribution when you have nothing important is worse than a brief "אין לי הערות כאן."

### The Orchestrator-Agent

- It is a **substantive moderator** — it understands the methodology deeply enough to notice blind spots, premature convergence, and unaddressed elements, but does NOT analyze biblical text or propose interpretations itself.
- It receives free-text private assessments each cycle → outputs a next-speaker recommendation + public status-read text.
- The status-read summarizes the intellectual state of the deliberation (what's been covered, what's open, energy level) and occasionally includes substantive observations about blind spots (unaddressed words, unapplied quality criteria, ignored layers). Substantive observations should be rare — most status-reads are a short factual status.
- It runs as a **persistent Opus session** — no tools needed, Hebrew narrative output with delimiter-based parsing.
- Its guidelines prioritize: productive disagreement, balance across Participants, Director heartbeat (don't let 3+ Participant-Agent turns pass without Director input).
