# Intro

We support Claude sessions with both *Hebrew* and *English* system-prompts.
We have comprehensive system-prompts in both languages (this session was started in a way that did not auto-load these system-prompts).

## How are the system-prompt files structured:

The system-prompt files live under `claude/perush-system-prompt/` (all paths here are relative to the repo root):
- `claude/perush-system-prompt/hebrew/` - the Hebrew system-prompt.
- `claude/perush-system-prompt/english/` - the English system-prompt (a translation of the Hebrew one).
- `claude/perush-system-prompt/shared/` - language-neutral files, used by both.

A perush session is started by one of two launchers, which add an "entry file" to the system-prompt:
- `scripts/claude-into-rtl-file--perush-hebrew.sh` adds `claude/perush-system-prompt/hebrew/system-prompt--Hebrew.md`
- `scripts/claude-into-rtl-file--perush-english.sh` adds `claude/perush-system-prompt/english/system-prompt--English.md`

Each entry file asks the session to read, in order, four files - the three parts of the system-prompt, and then the shared tools file:

| Part   | Hebrew                                                        | English                                                              |
|--------|---------------------------------------------------------------|----------------------------------------------------------------------|
| Part 1 | `claude/perush-system-prompt/hebrew/system-prompt--Hebrew--prefix.rtl.md` | `claude/perush-system-prompt/english/system-prompt--English--prefix.md`       |
| Part 2 | `פירוש/הקדמה-לפירוש.rtl.md`                                    | `claude/perush-system-prompt/english/system-prompt--English--perush-intro.md` |
| Part 3 | `claude/perush-system-prompt/hebrew/system-prompt--Hebrew--suffix.rtl.md` | `claude/perush-system-prompt/english/system-prompt--English--suffix.md`       |
| Tools  | `claude/perush-system-prompt/shared/system-prompt--tools.md`          | (the same file)                                                      |

The tools file (technical instructions for the tools that work with Hebrew files) is shared - it is *not* translated.
The same goes for `claude/perush-system-prompt/shared/הנחיות-לעריכת-קבצי-פירוש.rtl.md`, which both suffix files point to.

# The task: "import" changes in the Hebrew system-prompt - to the English system-prompt

Please check which of the three Hebrew files has uncommited (staged or unstaged) changes, and "import" these changes into the matching English files.
Important: to properly understand the context of changes in the Hebrew files - you *must* first read the *whole* of the three Hebrew files - in order.

Per changed Hebrew file:
- Analyze the uncommited changes in the Hebrew file, and understand them deeply and in their context.
- Apply these changes into the matching English file.

Be thorough and take your time: understand the Hebrew changes deeply, and craft the English translation with a holistic and contextual approach - so the English changes are harmonious within the whole English system-prompt.
