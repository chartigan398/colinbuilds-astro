# Hermes — ColinBuilds model page rules

**PAUSED (2026-07-03):** No new sweeps until Colin asks. See `.cursor/rules/confidence-score-failsafe.mdc`.

## Bridge workflow (no more copy-paste)

Cursor can message you directly on Telegram. You do **not** need Colin to relay prompts.

When Colin assigns work through Cursor:

1. Read **`.workflow/HANDOFF.md`** — section **TO HERMES** has the task.
2. Do the work (rules below).
3. Update **FROM HERMES** in that file: files changed, `npm run build` result, blockers.
4. Reply on Telegram: **"Handoff updated — ready for QA"** (or explain what's blocked).

Colin only approves preview and says **push it** at the end.

---

## Job

Write **body text only** in `colinbuilds-astro/src/content/models/`. Do not change frontmatter unless Colin or Cursor explicitly asks. Do not publish, push, or deploy.

---

## Section order (required)

1. Intro paragraph (no heading)
2. `## What this model is`
3. `## Pricing notes`
4. `## Benchmarks and specs`
5. `## Best fit`
6. `## Sources`

---

## Voice — reader-facing only

Write for a **public website visitor**, not for Colin, Cursor, or Kratos.

**Never use:**
- "ColinBuilds reference point"
- "For ColinBuilds readers"
- "ColinBuilds should only…"
- "ColinBuilds has not attached…"
- "before publication"
- "this draft"
- Kratos, Hermes, workflow notes, or author instructions

**Use instead:**
- "The calculator on this page uses…"
- "This page does not list benchmark scores until…"
- Plain third-person facts from official sources

---

## Pricing rules

0. **Confidence Score:** If any required data point lacks a verified value **and** working source link → leave field **blank**. Low Confidence files stay **`draft: true`** and cannot be published.
1. **Body must match what the calculator shows.** If frontmatter has `cost_input_1m` / `cost_output_1m`, the Pricing notes section must state those exact rates as the calculator default.
2. **Open-weight models with `providers:` only** — body must cite the same provider rates the calculator uses (usually cheapest listed provider).
3. **Do not invent prices.** If unsure, leave frontmatter unchanged and say Colin needs to verify.
4. **Separate tiers clearly** — cache hit/miss, thinking/non-thinking, context tiers, intro vs standard pricing. State which tier the calculator uses and why.
5. **Claude Sonnet reference** — use **current** Anthropic Sonnet pricing from the official pricing page. If Sonnet 5 intro pricing applies, body and frontmatter must both use that rate (not an older Sonnet tier).

---

## Specs and context rules

1. **`context_window` in frontmatter must match the hero claim.** If native context differs from extended/YaRN context, say so in Benchmarks and specs and use an honest `context_label` (e.g. "Native context window (131K with YaRN scaling)").
2. **Do not show 131K in the hero if native is 32K** unless the label clearly says YaRN/extended.
3. **`parameters_note` must not contradict the body.** If Hugging Face lists active parameters, do not say "not publicly disclosed."
4. **Anthropic tier names must be current** — Sonnet, Opus, Haiku, and **Fable** are all valid. Claude Fable 5 (June 2026) sits in Anthropic's Mythos-class tier above Opus; do not "correct" Opus/Fable phrasing away.
5. **Benchmark Matrix vs body** — if frontmatter includes benchmark fields shown on the page, do not claim benchmarks are unavailable in the body.

---

## Sources

- Link official pricing/docs first.
- Use markdown links with readable titles in `## Sources`.
- No bare URLs unless the existing page already uses them (Llama Meta links).

---

## File hygiene

1. Edit **final filenames only** — e.g. `gpt-4o.md`.
2. **Never** leave temp files in `src/content/models/` (no `.hermes-tmp*`, `.tmp`, `.bak`).
3. Verify with **`npm run build`** from `colinbuilds-astro` (not bare `npx astro build`).
4. If duplicate-id warnings appear: `npm run clean` then `npm run build` again.

---

## Kratos handoff

- Kratos checks source claims; QA report goes in Obsidian, **not** in the public markdown.
- Verdict format: PASS / PASS WITH CAUTIONS / FAIL.
- Cautions belong in Obsidian QA, not in reader-facing body text.

---

## Checklist before telling Colin "done"

- [ ] Section order correct
- [ ] No banned editorial phrases
- [ ] Pricing notes match calculator/frontmatter
- [ ] Context window honest (native vs extended)
- [ ] No "Unknown" in body
- [ ] No internal/workflow sentences
- [ ] `npm run build` passes
- [ ] Only files in `src/content/models/` changed

---

## After this cleanup

New models: **2 per day**, same layout, same rules. Arena Elo backfill later — no rush.
