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

**Structural fields** (required, typed in `AgentDefinition`):
- **`englishName`** / **`hebrewName`**: Display names, used for speaker labels, UI, and template resolution.

**Dynamic fields** (stored in `frontmatterData: Record<string, string>`):
All other frontmatter fields are captured dynamically. No code changes needed to add new fields — just add them to the frontmatter and reference them in templates. Standard dynamic fields:
- **`orchestratorIntro`**: One-sentence profile for the Orchestrator. Written from the orchestrator's perspective.
- **`orchestratorTip`**: Guidance for the orchestrator on when this agent is most valuable.

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

Template resolution is a two-phase process:

1. **Phase 1 — `preprocess` library**: Resolves `@include`, `@echo`, `@ifdef`, and standard `@foreach` directives. Included files are processed recursively with the same context.
2. **Phase 2 — Custom `@foreach-agent`**: Resolves `@foreach-agent` loops with dot-access on `AgentDefinition` properties (including `frontmatterData` fields). Runs after includes are inlined, so it works across included files.

Available directives (HTML-comment syntax):

| Directive | What it does |
|-----------|-------------|
| `<!-- @include filename.md -->` | Inline another file (recursive, same context) |
| `<!-- @echo dictionary -->` | Inject the full dictionary text extracted from `../CLAUDE.md` |
| `<!-- @echo EnglishName -->` | Agent's own English name (from frontmatter) |
| `<!-- @echo HebrewName -->` | Agent's own Hebrew name (from frontmatter) |
| `<!-- @echo fieldName -->` | Any frontmatter field from the current agent's file |
| `<!-- @foreach-agent $var in participantAgents -->`<br>`$var.englishName / $var.hebrewName: $var.orchestratorIntro`<br>`<!-- @endfor-agent -->` | Loop over participant agents with dot-access to any field (structural or `frontmatterData`) |

The `@foreach-agent` directive supports dot-access on any `AgentDefinition` property: `id`, `englishName`, `hebrewName`, `roleTitle`, and any key in `frontmatterData`. For example, `$agent.orchestratorIntro` resolves to the agent's `frontmatterData.orchestratorIntro` value.

**Example flow** for `milo.md`:
```
1. resolveTemplate("milo.md", meetingParticipants, "milo")
2. Read file → gray-matter strips frontmatter
3. buildPreprocessContext(): builds context with dictionary + all frontmatter as @echo vars
4. Phase 1: preprocessLib.preprocess(content, context, ...)
   ↳ resolves <!-- @include ../prompts/system-prompt-base-prefix.md --> → inlines base with dictionary
   ↳ resolves @echo markers (EnglishName, HebrewName, dictionary, etc.)
5. Phase 2: resolveForEachAgent(afterPreprocess, { participantAgents: [...] })
   ↳ expands <!-- @foreach-agent $agent in participantAgents --> → one entry per fellow participant (milo excluded)
   ↳ replaces $agent.englishName, $agent.orchestratorIntro, etc. with actual values
6. Returns fully resolved system prompt
```

**Example flow** for `system-prompt-orchestrator.md`:
```
1. resolveTemplate("system-prompt-orchestrator.md", meetingParticipants, undefined, PROMPTS_DIR)
2. Same two-phase resolution
   ↳ Phase 1: resolves <!-- @include system-prompt-base-prefix.md --> and @echo markers
   ↳ Phase 2: expands <!-- @foreach-agent $agent in participantAgents --> with dot-access
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
