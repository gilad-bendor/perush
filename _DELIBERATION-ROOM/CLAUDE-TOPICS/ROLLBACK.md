# In-Meeting Rollback

> **Spin-out from `CLAUDE.md`.** Read when working on rollback functionality in the orchestrator, server, or frontend.

Rollback allows the Director to rewind the deliberation to any past human message, discard everything after it, optionally edit the message, and resume from there. It is the most complex feature — touching the UI, WebSocket protocol, orchestrator, session manager, and git layer.

## UI: Per-Message Rollback Icon

Every human message in the conversation feed has a **rollback icon** (`↩`) that appears **on hover**. It sits at the inline-start edge (right side in RTL) of the message, vertically centered with the first line of text.

- The **opening prompt** (the very first human message) also has a rollback button — rolling back to it discards the entire conversation.
- **Hidden** in view-only mode.
- **Clickable during active agent speech** — triggers immediate interrupt followed by the rollback flow.

## Confirmation Dialog

Clicking the rollback icon opens a **modal dialog** overlaid on the deliberation UI:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                    חזרה לנקודה קודמת                         │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ ההודעה שנבחרה:                                        │  │
│  │                                                        │  │
│  │ "הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן        │  │
│  │  שונה מהשימוש בבראשית א:כא"                           │  │
│  │                                                        │  │
│  │ (מחזור 3 מתוך 7)                                      │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ⚠ פעולה זו תמחק 4 מחזורים (מחזורים 4-7)                   │
│                                                              │
│  לאחר החזרה תוכל לערוך את ההודעה ולהמשיך משם.               │
│                                                              │
│           [ ביטול ]              [ אישור חזרה ]              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

- **Cancel** has default focus (safety).
- **Enter key does NOT trigger Confirm** — deliberate safety design; must click explicitly.
- During the dialog, messages after the target cycle get `opacity: 0.3` to visually preview what will be discarded.

## Rollback Flow (6 Phases)

**Phase 1 — Immediate Abort** (client-side, < 100ms):
- Client sends `{ type: "rollback", targetCycleNumber: number }`.
- Client transitions to "rolling back" state: fades messages after target, shows spinner, disables all buttons.

**Phase 2 — Server-Side Abort** (< 1s):
- If any `query()` calls are active (speech, assessments, selection), the orchestrator calls `.interrupt()` on each.
- Broadcasts `{ type: "phase", phase: "rolling-back" }`.

**Phase 3 — Git Rollback** (session branch, < 5s):
- Find the target cycle's commit on the session branch (commit message format: `"Cycle N: <speaker>"`).
- Reset: `git -C <worktree> reset --hard <commit>`.
- Re-read `meeting.yaml` from the now-reset worktree.

**Phase 4 — Perush File Rollback** (main branch, if needed):
- Check for correlated tags (`session-cycle/*--<meeting-id>/*`) for cycles after the target.
- If perush changes exist after the rollback point: stash any uncommitted main changes (`git stash push -m "Pre-rollback stash" -- פירוש/ ניתוחים-לשוניים/`), then `git reset --hard <tag>/main` to the most recent tag at or before the target cycle.
- If no perush changes after target: main is left untouched.
- Notify the Director via `rollback-progress` if changes were stashed.

**Phase 5 — Session Recovery**:
- **All agent sessions are recreated** — not just the ones that spoke after the rollback point. All sessions have accumulated invalid context (private assessments, manager decisions, internal reasoning from discarded cycles). Clean sessions from the rolled-back transcript are the safest approach.
- For each agent (all Participant-Agents + Conversation-Manager-Agent):
  1. Create a new Agent SDK session (same persona, same model).
  2. Feed the conversation transcript from the rolled-back `meeting.yaml` as initial context.
  3. Capture the new session (move+symlink into worktree).
  4. Update `meeting.yaml.sessionIds`.
- Commit to session branch: `"Rollback to cycle N + session recovery"`.

**Phase 6 — Edit-After-Rollback**:
- Server sends `sync` with `editingCycle: targetCycleNumber`.
- Browser renders the rolled-back conversation. The target human message is displayed in an **editable textarea** — inline, replacing the static message text.

```
┌──────────────────────────────────────────────────────────┐
│ המנחה (עריכה):                                           │
│ ┌─────────────────────────────────────────────────────┐  │
│ │ הנה נקודה מעניינת: שימו לב שהשימוש ב"כל" כאן        │  │
│ │ שונה מהשימוש בבראשית א:כא                           │  │
│ └─────────────────────────────────────────────────────┘  │
│         [ שלח כמו שהוא ]           [ שלח ]               │
└──────────────────────────────────────────────────────────┘
```

- **"שלח כמו שהוא"** (Send as-is): submits the original text unchanged.
- **"שלח"** (Send): submits the edited text.
- Either button sends the text as a normal `human-speech` message. The cycle proceeds from there as usual.

**Special case — rollback to opening prompt (cycle 0)**: There is no "cycle 0 commit" — the initial commit is "Initial: meeting created." The rollback resets to this initial commit. The `meeting.yaml` at this point has an empty `cycles` array. The `editingCycle: 0` signal tells the browser to render the `openingPrompt` as editable. When submitted, the orchestrator updates `meeting.yaml.openingPrompt` with the new text and feeds it to all newly-recovered sessions as the opening context.

## Schema Impact

Rollback does **not** add new fields to `meeting.yaml`. Instead, it **truncates** the `cycles` array to the target cycle and updates `sessionIds` for the recovered sessions. The git history preserves what was discarded (pre-rollback commits remain in the reflog). The rollback commit message (`"Rollback to cycle N + session recovery"`) serves as the audit trail.

## Edge Cases

- **Rollback during assessment/selection phase**: All active `query()` calls are interrupted.
- **Uncommitted perush changes on main**: Stashed with a `rollback-progress` notification to the Director.
- **Session recovery failure for one agent**: Rollback is still considered successful (git state is correct). The failed agent is logged; recovery retried on the next cycle that needs it.
- **Rapid successive rollbacks**: All UI buttons are disabled during the `rolling-back` phase. A second rollback cannot start until the first completes.
- **No "undo rollback"**: Discarded cycles exist in the git reflog but there is no UI for recovering them. This is acceptable for a single-user local tool where the Director has full git access.
