# Web UI Specification

> **Spin-out from `CLAUDE.md`.** Read when working on the frontend (`public/`), the status-read bar, attention button, or UI layout.

## Layout

The UI is designed for the Director reading Hebrew text, thinking carefully, and occasionally intervening — an **academic seminar**, not a fast chat app.

```
┌────────────────────────────────────────────────┬───────────────┐
│                                                │ Agent Panel   │
│          SHARED CONVERSATION                   │ (collapsible) │
│      (scrolling feed, RTL, color-coded         │               │
│       by speaker)                              │  ┌──────────┐ │
│                                                │  │ Tabs:    │ │
│                                                │  │ מילונאי  │ │
│  [streaming indicator: milo typing...]         │  │ אדריכל   │ │
│                                                │  │ מבקר     │ │
│                                                │  └──────────┘ │
├────────────────────────────────────────────────┤               │
│  ✦ status-read: הדיון זורם — כל צד מוסיף שכבה. │ [assessment]  │
│    next: האדריכל  ·  phase: speaking           │ [tool usage]  │
├────────────────────────────────────────────────┤               │
│  > Human input                     [↵]         │               │
└────────────────────────────────────────────────┴───────────────┘
```

**Conversation area** (main, left): Scrolling feed of all public messages, color-coded by speaker. Streaming text appears in real-time with a typing indicator.

**StatusRead bar** (sticky, between conversation and input): The Orchestrator-Agent's status-read comment, next Participant's name, current phase. Always visible. Subtle fade-transition (300ms). Changes visually during the Director's turn.

**Director input** (sticky bottom): A textarea. Always visible. Highlighted during the Director's turn. Dimmed but accepts `/end` at other times.

**Participant-Agent panel** (right side, collapsible): Tabs — one per Participant-Agent. Shows assessments, tool activity. Collapsed by default. Opens automatically when a Participant-Agent is speaking.

## RTL Design

The deliberation is in Hebrew. This is **RTL-first design**.

1. **`dir="rtl"` on the `<html>` element.** The entire page is RTL by default.

2. **Tailwind logical properties** throughout — never physical `left`/`right`:
   - `ms-4` not `ml-4` (margin-inline-start)
   - `pe-2` not `pr-2` (padding-inline-end)
   - `start-0` not `left-0` (inset-inline-start)
   - `border-s` not `border-l` (border-inline-start)
   Physical direction utilities (`ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`) are **forbidden**.

3. **CSS Grid with named areas** for the main layout (in `public/input.css`):
   ```css
   .deliberation-room {
     display: grid;
     grid-template-areas: "conversation sidebar";
     grid-template-columns: 1fr 300px;
     /* In RTL, "conversation" is on the right, "sidebar" on the left — automatic */
   }
   ```

4. **Mixed-direction text**: Use `unicode-bidi: plaintext` on text containers.

5. **Input field**: `dir="auto"` — Hebrew input is RTL, English commands like `/end` are LTR.

6. **Font stack**: `'David', 'Narkisim', 'Times New Roman', serif` — consistent with `../_RTL-EDITOR`.

## Speaker Color-Coding

Implemented palette: human=blue, milo=emerald, archi=violet, kashia=rose, barak=amber. Colors should be distinguishable and scale to N participants.

## URL Routing

The app uses client-side URL routing with `history.pushState`:

| URL | Page | Behavior |
|-----|------|----------|
| `/` | Landing page | Meeting list + new meeting form |
| `/meeting/<id>` | Deliberation page | Sends `join-meeting` over WS; server auto-detects active vs. ended |

**Navigation flow:**
- Creating a meeting → URL updates to `/meeting/<new-id>` after sync
- Clicking "view" on a meeting card → navigates to `/meeting/<id>` (read-only if ended; full editor if it's the active meeting)
- Clicking "resume" on a meeting card → sends `resume-meeting`, URL updates after sync
- Back button from deliberation → always returns to `/` (active meeting stays active on server)
- Browser back from deliberation → returns to `/`
- Direct URL access (`/meeting/<id>`) → sends `join-meeting` on WS connect

**Key invariant:** The back-to-landing button never ends or interrupts the active meeting. The Director can freely browse the meeting list and return to the active meeting. Use `/end` to explicitly end a meeting.

**Server SPA routing:** Any request to `/meeting/*` serves `index.html`. The frontend JS reads the URL to determine what to display.

**Reconnection:** On WS reconnect, if the URL is `/meeting/<id>`, the client re-sends `join-meeting` to restore state.

## Meeting Lifecycle in the Browser

### Landing Page

```
┌──────────────────────────────────────────────────────────────────┐
│                            חדר הדיונים                            │
│                                                                    │
│  ┌── פגישה חדשה ────────────────────────────────────────────┐     │
│  │  כותרת: [______________________________________________] │     │
│  │  פרומפט פתיחה: (multi-line textarea)                     │     │
│  │  משתתפים: [toggle cards, all selected by default]        │     │
│  │                        [ התחל דיון ]                     │     │
│  └──────────────────────────────────────────────────────────┘     │
│                                                                    │
│  ┌── פגישות ────────────────────────────────────────────────┐     │
│  │  (most recent with "המשך דיון" + "צפייה בלבד";            │     │
│  │   others with "צפייה בלבד" only)                          │     │
│  └──────────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────────┘
```

**Creating a meeting**: Title + opening prompt + participant selection via toggle cards. All agents selected by default. At least 1 required. Selection is **immutable** for the meeting's duration.

**Meeting list**: Previous meetings from `git branch --list "sessions/*"`. Most recent first.

**Continue vs. View-only**: Most recent meeting shows both buttons; others show only "צפייה בלבד".

**Empty state**: "אין פגישות קודמות" in muted text.

### View-Only Mode

When activated, the server sends `sync` with `readOnly: true`. Differences:
- Human input textarea **hidden** (removed from DOM).
- StatusRead bar shows static "מצב צפייה" banner.
- No Attention or Rollback buttons.
- Agent panel works normally for browsing.
- Persistent banner at top.

## Attention Button

Located **in the status-read bar**, at the inline-end side (left side in RTL).

**Three states**:
1. **Idle**: `[ ✋ תשומת לב ]` — subtle, muted border.
2. **Activated**: `[ ✋ תשומת לב ✓ ]` — amber/gold fill, checkmark, disabled. Single pulse animation (600ms).
3. **Consumed**: Returns to idle automatically when the Director's turn begins.

**Visibility**: Hidden during `human-turn` phase and in view-only mode. Idempotent — clicking when activated does nothing.

**Mechanism**:
1. Client sends `{ type: "attention" }` — fire-and-forget.
2. Server sets `attentionRequested = true`, broadcasts `attention-ack`.
3. Current cycle continues uninterrupted.
4. At next selection phase: orchestrator's prompt is augmented to force Director selection.
5. Defense-in-depth: orchestrator **overrides** `nextSpeaker` regardless of orchestrator response.
6. Flag resets after Director speaks.

**Edge cases**:
- Director chosen anyway: flag consumed regardless.
- `/end` sent before Director's turn: flag discarded.
- Assessment failure: flag survives to next successful selection.

## Desktop-Only

The UI is designed for desktop browsers. No responsive/mobile layout. No responsive breakpoints.
