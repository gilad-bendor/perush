# Intro

We support Claude sessions with both *Hebrew* and *English* system-prompts.
We have comprehensive system-prompts in both languages (this session was started in a way that did not auto-load these system-prompts).

## How are the system-prompt files structured:

The file `CLAUDE.md` contains a single line: either `@.claude/system-prompt--Hebrew.md` or `@.claude/system-prompt--English.md`

The file `.claude/system-prompt--Hebrew.md` contains these three lines:
```
@system-prompt--Hebrew--prefix.rtl.md
@../פירוש/הקדמה-לפירוש.rtl.md
@system-prompt--Hebrew--suffix.rtl.md
```

The file `.claude/system-prompt--English.md` contains these three lines:
```
@system-prompt--English--prefix.md
@system-prompt--English--dictionary.md
@system-prompt--English--suffix.md
```

So effectively, a Claude session reads `CLAUDE.md`, and then one of the `.claude/system-prompt--<language>.md` files, and then - the three "real content" files - the three parts of the system-prompt - in order:

| Part   | Hebrew                                     | English                                         |
|--------|--------------------------------------------|-------------------------------------------------|
| Part 1 | `.claude/system-prompt--Hebrew--prefix.md` | `.claude/system-prompt--English--prefix.md`     |
| Part 2 | `פירוש/הקדמה-לפירוש.rtl.md`                | `.claude/system-prompt--English--dictionary.md` |
| Part 3 | `.claude/system-prompt--Hebrew--suffix.md` | `.claude/system-prompt--English--suffix.md`     |

# The task: "import" changes in the Hebrew system-prompt - to the English system-prompt

Please check which of the three Hebrew files has uncommited (staged or unstaged) changes, and "import" these changes into the matching English files.
Important: to properly understand the context of changes in the Hebrew files - you *must* first read the *whole* of the three Hebrew files - in order.

Per changed Hebrew file:
- Analyze the uncommited changes in the Hebrew file, and understand them deeply and in their context.
- Apply these changes into the matching English file.

Be thorough and take your time: understand the Hebrew changes deeply, and craft the English translation with a holistic and contextual approach - so the English changes are harmonious within the whole English system-prompt.
