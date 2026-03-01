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

## Template Marker Resolution

Non-underscore agent files undergo **marker resolution** before being used as system prompts. The session manager processes markers in this order:

1. **Include markers** — `${include:<filename>}` is replaced with the contents of the referenced file (from `participant-agents/`) without the frontmatter.

2. **Variable markers** — `${EnglishName}`, `${HebrewName}`, and any future frontmatter-derived variables are replaced with values from the **current file's** frontmatter.

3. **Iterator blocks** — `${each:participant}...${/each:participant}` repeats the enclosed template once per participant agent (all non-underscore files excluding the file currently being resolved). Inside the block, variable markers resolve against **each participant's** frontmatter in turn.

4. **Computed markers** — `${speakerIds}` resolves to a JSON-style list of valid `nextSpeaker` values, e.g., `"Milo" | "Archi" | "Kashia" | "Director"`.

**Resolution order matters**: includes first, then variables, then iterators, then computed markers.

**Example flow** for `milo.md`:
```
1. Read milo.md → parse frontmatter
2. Resolve ${include:...} markers → inline included file contents
3. Resolve ${EnglishName} → "Milo", ${HebrewName} → "מיילו"
4. No iterator blocks or computed markers → skip
5. Resolve _agents-prefix.md: expand ${each:participant} block with meeting's selected participants
6. Prepend _base-prefix.md (with dictionary injected) + resolved _agents-prefix.md
7. Result = complete system prompt for the milo session
```

**Example flow** for `_conversation-manager.md`:
```
1. Read _conversation-manager.md → parse frontmatter
2. Resolve ${each:participant}...${/each:participant} blocks with selected participants
3. Resolve ${speakerIds} → e.g., "Milo" | "Archi" | "Kashia" | "Barak" | "Director"
4. Prepend _base-prefix.md (with dictionary) — NO _agents-prefix.md for the manager
5. Result = complete system prompt for the conversation manager session
```

**Note on resolution order**: In the actual implementation, iterators resolve BEFORE file-level variables (not the spec's variables→iterators) because file-level variable resolution would clobber markers inside iterator blocks.

## System Prompt Construction

```
Participant agents:       _base-prefix.md (with dictionary) + _agents-prefix.md (resolved) + resolved agent file
Conversation manager:     _base-prefix.md (with dictionary) + resolved _conversation-manager.md
```

- `_base-prefix.md` includes `<!-- DICTIONARY_INJECTION_POINT -->` where the session manager injects the full dictionary from `../CLAUDE.md` at runtime.
- `_agents-prefix.md` includes `${each:participant}` markers resolved with the **meeting's selected participants'** frontmatter — introducing only the agents who are actually in the room.
- The conversation manager does NOT get `_agents-prefix.md` — it has its own participant introductions inside `_conversation-manager.md`.

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
