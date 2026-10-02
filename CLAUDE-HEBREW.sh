#!/bin/bash -eux

# Execute this to make CLAUDE.md use the Hebrew version (.claude/system-prompt--Hebrew.md)
# This has the potential of making ClaudeCode have a Hebrew mind-set - that is closer to the Perush's language.

echo "@.claude/system-prompt--Hebrew.md" > CLAUDE.md
