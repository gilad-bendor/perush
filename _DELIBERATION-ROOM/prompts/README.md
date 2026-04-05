This folder contains ClaudeCode prompts resolved by a fixpoint template loop (three phases, repeated until stable):
1. The `preprocess` npm package (`@include`, `@echo`, `@ifdef`, `@foreach`)
2. A custom `@foreach-agent` directive for iterating over participant agents with dot-access (e.g., `$agent.introForOthers`)
3. A custom `@include-region` directive for extracting a regex-matched region from a file (e.g., `<!-- @include-region file.md /^# Heading\n[\s\S]*(?=^## Next Heading\n)/m -->`)

The per-agent system-prompts (persona files) remain in `participant-agents/*.md`.
Full directive reference: see `CLAUDE-TOPICS/PERSONAS.md` → "Template Directives".