# Session operator

This repo holds several sub-projects, each with its own system-prompt - there is no default one.
A session that was started without a launcher script (e.g. a cloud session) is set up by the "operator":
the SessionStart hook in `.claude/settings.json` runs `claude/operator/operator.sh hook`, whose output
(starting with "# Session operator") reports the environment, and says how to choose and load an option.

**If that output is not in your context** (the hook did not run, or failed): run
`claude/operator/operator.sh hook <<< '{}'` yourself before anything else, and follow its output.

## Git: never commit `docs/`

`docs/` at the repo root holds the HTML/PDF mirrors, which the RTL editor regenerates by itself - the user commits them
separately. **Exclude it from every commit** (e.g. `git commit -- <paths>`, or `git restore --staged <repo root>/docs/`
before committing - a session may be working in a subfolder), unless the user explicitly asks to commit it.
