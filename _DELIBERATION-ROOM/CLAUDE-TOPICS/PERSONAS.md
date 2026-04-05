# AI-Agent Personas & Template System

> **Spin-out from `CLAUDE.md`.** Read when working on `session-manager.ts` template resolution, adding new agents, or modifying system prompt construction.

## Persona Files

Agent persona files live in `participant-agents/`; shared prompt templates live in `prompts/`:

| File | Name | Type | Role |
|------|------|------|------|
| `prompts/system-prompt-base-prefix.md` | — | *(shared prefix)* | Prepended to ALL AI-Agents — project context, common instructions, dictionary injection point, fellow participants |
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
orchestratorIntro: "The Dictionary Purist. Audits word-level dictionary fidelity — catches untranslated words, loose synonyms, and narrative drift. Direct, factual, tends to speak frequently with short, pointed observations"
orchestratorTip: "Bring in when specific words need dictionary checking, when the discussion is drifting from the text, or when dictionary evidence could settle a dispute"
---
```

Fields:
- **`englishName`** / **`hebrewName`**: Display names, used for speaker labels, UI, and template resolution.
- **`orchestratorIntro`**: One-sentence profile for the Orchestrator. Written from the orchestrator's perspective.
- **`orchestratorTip`**: Guidance for the orchestrator on when this agent is most valuable.
- **`role`** (optional): Special role identifier. Currently only `system-prompt-orchestrator.md` uses `role: orchestrator`.

## Agent Discovery

Participant-Agents are **discovered dynamically** from `participant-agents/` — not hardcoded. Adding a new Participant-Agent requires only creating a new `.md` file with proper frontmatter; no code changes needed.

At server start, the session manager scans `participant-agents/` for all non-underscore `.md` files:

1. Parse the YAML frontmatter to extract `englishName`, `hebrewName`, `orchestratorIntro`, `orchestratorTip`.
2. Extract the `roleTitle` by finding the first `# ` heading and pulling the parenthesized Hebrew text — e.g., from `# The Dictionary Purist (המילונאי)` extract `המילונאי`.
3. Derive the `id` from the filename without `.md` (e.g., `milo.md` → `"milo"`).
4. Build an `AgentDefinition` object and cache it.

The result is cached for the server's lifetime (re-read on server restart).

**Important**: When adding or removing a Participant-Agent file, also update the `AgentId` type in `src/types.ts` — its literal union members should mirror the set of agent filenames (without `.md`). The type accepts any string at runtime (via `(string & {})`), but the literal members provide IDE autocomplete suggestions.

### REST Endpoint

```
GET /api/agents
```

Returns the cached agent definitions as a JSON array.

## Template Directives (preprocess)

All agent files are processed by the [`preprocess`](https://www.npmjs.com/package/preprocess) package in a single pass with `type: "html"`. Every included file is processed recursively with the same context.

Available directives (HTML-comment syntax):

| Directive | What it does |
|-----------|-------------|
| `<!-- @include filename.md -->` | Inline another file from `participant-agents/` (recursive, same context) |
| `<!-- @echo dictionary -->` | Inject the full dictionary text extracted from `../CLAUDE.md` |
| `<!-- @echo EnglishName -->` | Agent's own English name (from frontmatter) |
| `<!-- @echo HebrewName -->` | Agent's own Hebrew name (from frontmatter) |
| `<!-- @foreach $p in participantAgentEntries -->$p`<br>`<!-- @endfor -->` | Loop over fellow participants — each `$p` is a formatted bullet: `- **Name / שם**: intro` |
| `<!-- @foreach $p in participantOrchestratorEntries -->$p`<br>`<!-- @endfor -->` | Same loop with extended format: `- **Name / שם**: intro. *tip.*` |
**Important — `@foreach` encoding**: preprocess's `@foreach` splits context values by comma if they look like plain text, which breaks descriptions that contain commas. The context values for participant loops are encoded as a JSON *object* keyed by index (`{"0":"entry0","1":"entry1"}`). This triggers `JSON.parse` in preprocess's foreach handler, which handles commas inside values correctly. See `toForEachContext()` in `session-manager.ts`.

**Example flow** for `milo.md`:
```
1. resolveTemplate("milo.md", meetingParticipants, "milo")
2. Read file → gray-matter strips frontmatter
3. buildPreprocessContext(): builds context with dictionary, participant loops
4. preprocessLib.preprocess(content, context, {type:"html", srcDir:PARTICIPANT_AGENTS_DIR})
   ↳ resolves <!-- @include ../prompts/system-prompt-base-prefix.md --> → inlines base with dictionary + @foreach participant list (milo excluded)
   ↳ any remaining @echo markers in persona content
5. Returns fully resolved system prompt
```

**Example flow** for `system-prompt-orchestrator.md`:
```
1. resolveTemplate("system-prompt-orchestrator.md", meetingParticipants, undefined, PROMPTS_DIR)
2. Same single-pass preprocess call
   ↳ resolves <!-- @include system-prompt-base-prefix.md -->
   ↳ expands <!-- @foreach $p in participantOrchestratorEntries -->
3. Returns fully resolved system prompt
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
<!-- @include system-prompt-base-prefix.md -->      ← common instructions + dictionary
# Your Unique Identity: ...            ← orchestrator-specific content with @foreach
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

- It does NOT analyze biblical text or participate in the conversation.
- It receives free-text private assessments each cycle → outputs a next-speaker recommendation + public vibe text.
- It runs as a **persistent Sonnet session** (not Opus) — no tools needed, Hebrew narrative output with delimiter-based parsing.
- Its guidelines prioritize: productive disagreement, balance across Participants, Director heartbeat (don't let 3+ Participant-Agent turns pass without Director input).
