This folder contains ClaudeCode prompts resolved by a two-phase template system:
1. The `preprocess` npm package (`@include`, `@echo`, `@ifdef`, `@foreach`)
2. A custom `@foreach-agent` directive for iterating over participant agents with dot-access (e.g., `$agent.orchestratorIntro`)

The per-agent system-prompts (persona files) remain in `participant-agents/*.md`.