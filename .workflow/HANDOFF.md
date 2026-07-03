# ColinBuilds agent handoff

Single shared inbox for **Hermes** (writes markdown) and **Cursor** (builds site, QA, push).

Colin should not copy prompts between agents. He gives one instruction to Cursor; Cursor talks to Hermes.

---

## Status

| Field | Value |
|-------|--------|
| **Phase** | idle |
| **Current task** | Resume known-model work — Colin checking Hermes model list |
| **Last updated** | 2026-07-03 |
| **Updated by** | Cursor |

Phases: `idle` · `assigned` · `hermes-working` · `ready-for-qa` · `qa-done` · `awaiting-colin` · `push-approved`

**Paused:** Qwen3-Max — CAC numbers conflict across sources; do not publish until one primary source is confirmed.

---

## TO HERMES (Cursor writes)

*(Waiting for Colin to confirm Hermes model list, then Cursor assigns first batch here.)*

---

## FROM HERMES (Hermes writes when done)

*(Empty — Hermes fills: files changed, build result, blockers.)*

---

## TO COLIN / QA NOTES (Cursor writes after review)

*(Empty — Cursor fills: PASS / PASS WITH CAUTIONS / FAIL, what Colin should preview.)*

---

## Colin decisions

| Date | Decision |
|------|----------|
| 2026-07-03 | Skip Qwen3-Max for now — CAC unconfirmed |
| 2026-07-03 | Pivot back to well-known models; Colin verifying Hermes list |

Colin only needs to say **push it** here or in Cursor chat when preview looks good.
