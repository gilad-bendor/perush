#!/bin/bash -eux

# Execute this to make CLAUDE.md use the English version (.claude/system-prompt--English.md)
# This has the potential of making ClaudeCode think more natively and deeply.

echo "@.claude/system-prompt--English.md" > CLAUDE.md
