# AI-Agent Personas & Template System

> **Spin-out from `CLAUDE.md`.** Read when working on `session-manager.ts` template resolution, adding new agents, or modifying system prompt construction.

## Persona Files

All AI-Agent personas live in `participant-agents/`:

| File | Name | Type | Role |
|------|------|------|------|
| `_base-prefix.md` | — | *(shared prefix)* | Prepended to ALL AI-Agents — project context, common instructions, dictionary injection point |
| `_agents-prefix.md` | — | *(shared prefix)* | Prepended to Participant-Agents only — introduces fellow Participants using `${each:participant}` markers |
| `milo.md` | **Milo / מיילו** | Participant-Agent | Dictionary Purist (המילונאי) — word-level dictionary fidelity |
| `archi.md` | **Archi / ארצ'י** | Participant-Agent | Architect (האדריכל) — structural coherence across the narrative |
| `kashia.md` | **Kashia / קשיא** | Participant-Agent | Skeptic (המבקר) — intellectual honesty, degrees of freedom, reverse-engineering test |
| `barak.md` | **Barak / ברק** | Participant-Agent | Ideator (ההברקה) — divergent insight, rare speaker by design |
| `_conversation-manager.md` | — | Conversation-Manager-Agent | The orchestration logic (not a Participant) |

**Naming convention**:
- Files with an `_` prefix are special (shared prefix, orchestration logic). They are NOT direct agent files — they serve as includes or shared content.
- Files without `_` are agent files that undergo template processing and have YAML frontmatter.
- Each Participant-Agent has an **English name** and a **Hebrew name** (phonetically similar).
- The Conversation-Manager-Agent has no public name — it "lives in the shadows."
- The Director is known as **"The Director"** / **"המנחה"**.

## Frontmatter

Each non-underscore agent file has YAML frontmatter:

```yaml
---
englishName: Milo
hebrewName: מיילו
managerIntro: "The Dictionary Purist. Audits word-level dictionary fidelity — catches untranslated words, loose synonyms, and narrative drift. Direct, factual, tends to speak frequently with short, pointed observations"
managerTip: "Bring in when specific words need dictionary checking, when the discussion is drifting from the text, or when dictionary evidence could settle a dispute"
---
```

Fields:
- **`englishName`** / **`hebrewName`**: Display names, used for speaker labels, UI, and template resolution.
- **`managerIntro`**: One-sentence profile for the Conversation Manager. Written from the manager's perspective.
- **`managerTip`**: Guidance for the manager on when this agent is most valuable.
- **`role`** (optional): Special role identifier. Currently only `_conversation-manager.md` uses `role: conversation-manager`.

## Agent Discovery

Participant-Agents are **discovered dynamically** from `participant-agents/` — not hardcoded. Adding a new Participant-Agent requires only creating a new `.md` file with proper frontmatter; no code changes needed.

At server start, the session manager scans `participant-agents/` for all non-underscore `.md` files:

1. Parse the YAML frontmatter to extract `englishName`, `hebrewName`, `managerIntro`, `managerTip`.
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
| `<!-- @foreach $p in participantManagerEntries -->$p`<br>`<!-- @endfor -->` | Same loop with extended format: `- **Name / שם**: intro. *tip.*` |
| `<!-- @echo speakerIds -->` | JSON-union of valid `nextSpeaker` values, e.g., `"Milo" \| "Archi" \| … \| "Director"` |

**Important — `@foreach` encoding**: preprocess's `@foreach` splits context values by comma if they look like plain text, which breaks descriptions that contain commas. The context values for participant loops are encoded as a JSON *object* keyed by index (`{"0":"entry0","1":"entry1"}`). This triggers `JSON.parse` in preprocess's foreach handler, which handles commas inside values correctly. See `toForEachContext()` in `session-manager.ts`.

**Example flow** for `milo.md`:
```
1. resolveTemplate("milo.md", meetingParticipants, "milo")
2. Read file → gray-matter strips frontmatter
3. buildPreprocessContext(): builds context with dictionary, participant loops, speakerIds
4. preprocessLib.preprocess(content, context, {type:"html", srcDir:PARTICIPANT_AGENTS_DIR})
   ↳ resolves <!-- @include _base-prefix.md --> → inlines base with <!-- @echo dictionary -->
   ↳ resolves <!-- @include _agents-prefix.md --> → expands @foreach with milo excluded
   ↳ any remaining @echo markers in persona content
5. Returns fully resolved system prompt
```

**Example flow** for `_conversation-manager.md`:
```
1. resolveTemplate("_conversation-manager.md", meetingParticipants)
2. Same single-pass preprocess call
   ↳ resolves <!-- @include _base-prefix.md -->
   ↳ expands <!-- @foreach $p in participantManagerEntries -->
   ↳ substitutes <!-- @echo speakerIds -->
3. Returns fully resolved system prompt
```

## System Prompt Construction

`buildSystemPrompt(agentId, meetingParticipants)` is now a thin wrapper: it calls `resolveTemplate(filename, meetingParticipants, excludeAgentId?)` once. All complexity lives in the template files and `buildPreprocessContext`.

**Participant-Agent prompt structure** (declared in each agent .md file):
```
<!-- @include _base-prefix.md -->      ← common instructions + dictionary (@echo dictionary)
<!-- @include _agents-prefix.md -->    ← fellow participants (@foreach, excludes self)

# Your Unique Identity: ...            ← persona-specific content
```

**Manager prompt structure** (declared in `_conversation-manager.md`):
```
<!-- @include _base-prefix.md -->      ← common instructions + dictionary
# Your Unique Identity: ...            ← manager-specific content with @foreach and @echo speakerIds
```

## Design Principles

The Participant-Agents follow a **primary mandate / secondary engagement** structure:

- **Primary mandate** (strict): Each agent has a domain they're uniquely qualified to observe.
- **Secondary engagement** (dialectical): Agents CAN and SHOULD engage with what others said — but always through their own lens.

### Language

Participant-Agents **speak in Hebrew**. The persona files themselves are in English (instructions for the LLM), but all output is in Hebrew.

### Speech Rhythm

No hard length constraint. The guidance is conversational: deliver your point well, keep it dynamic. Forcing a contribution when you have nothing important is worse than a brief "אין לי הערות כאן."

### The Conversation-Manager-Agent

- It does NOT analyze biblical text or participate in the conversation.
- It receives private assessments each cycle → outputs a Participant selection + vibe comment.
- It runs as a **persistent Sonnet session** (not Opus) — no tools needed, structured JSON output.
- Its heuristics prioritize: productive disagreement, balance across Participants, Director heartbeat (don't let 3+ Participant-Agent turns pass without Director input).
