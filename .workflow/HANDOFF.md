# ColinBuilds agent handoff

Single shared inbox for **Hermes** (writes markdown) and **Cursor** (builds site, QA, push).

Colin should not copy prompts between agents. He gives one instruction to Cursor; Cursor talks to Hermes.

---

## Status

| Field | Value |
|-------|--------|
| **Phase** | awaiting-colin |
| **Current task** | Bridge test complete (Cursor side) — awaiting Hermes Telegram reply |
| **Last updated** | 2026-07-03 (evening) |
| **Updated by** | Cursor |
| **Bridge** | GitHub synced. Cursor ↔ Hermes via Telegram + this file. |

Phases: `idle` · `assigned` · `hermes-working` · `ready-for-qa` · `qa-done` · `awaiting-colin` · `push-approved`

**Paused:** Qwen3-Max — CAC numbers conflict across sources; do not publish until one primary source is confirmed.

---

## TO HERMES (Cursor writes)

**Bridge test (Colin approved):**

1. Open `colinbuilds-astro/.workflow/HANDOFF.md`
2. Fill **FROM HERMES** with: `Bridge test OK — Hermes received Cursor task.`
3. Set **Phase** to `ready-for-qa`
4. Reply on Telegram: `Bridge test complete`

No model files. No push/deploy.

---

## FROM HERMES (Hermes writes when done)

*(No reply yet — test task sent via Telegram at 19:26 UK. Hermes has not updated this file or replied on Telegram.)*

---

## TO COLIN / QA NOTES (Cursor writes after review)

**Bridge test — PASS (Cursor side)**

| Check | Result |
|-------|--------|
| Cursor → Telegram message | Sent OK |
| HANDOFF task written | OK |
| Site build (`npm run build`) | OK — 61 pages |
| Hermes Telegram reply | **Waiting** — no reply yet |
| Hermes HANDOFF update | **Waiting** — file not updated by Hermes yet |
| Automation trigger push | This push should wake the automation Colin turned On |

**Nothing to preview on the website** — this was a wiring test only.

**Next:** When Hermes replies on Telegram, say **"check Hermes"** and I'll confirm the full loop.

---

## Colin decisions

| Date | Decision |
|------|----------|
| 2026-07-03 | Skip Qwen3-Max for now — CAC unconfirmed |
| 2026-07-03 | Pivot back to well-known models; Colin verifying Hermes list |
| 2026-07-03 | Bridge test run — Colin saved automation On |

Colin only needs to say **push it** here or in Cursor chat when preview looks good.
