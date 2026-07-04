# Hermes — ColinBuilds model page rules

## Workflow — read LETTER first

**Single inbox:** `Hermes OS/colinbuilds/LETTER.md` (Obsidian vault)

**Messaging:** Colin copy-pastes between you and Cursor. No Telegram bridge.

1. Colin writes **section 1** — which 2 models this batch (Colin forwards your task from Cursor if needed).
2. You research live, update **section 2**, send to Kratos.
3. After Kratos PASS, save model file(s) in **`posts/models/`**, update **section 4**.
4. Colin tells Cursor when ready. Cursor builds preview. Colin decides in **section 6**.

Do **not** create new dated handoff files per batch. Update LETTER in place.

**Do not** push, deploy, or edit Astro/website files. Cursor handles build and git.

---

## Job

Write full model markdown in **`posts/models/`** (Obsidian vault).

Use the same section layout as live pages. Frontmatter must match verified sources.

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
- "page data" / "directory" / workflow notes
- "before publication" / "this draft"
- Kratos, Hermes, or author instructions

**Use instead:**
- "The calculator on this page uses…"
- Plain third-person facts from official sources

---

## Pricing rules — search order (do not skip)

When researching a model, check in this order:

1. **Official first** — the model maker’s own API pricing page (OpenAI, Anthropic, Google, DeepSeek, Mistral, Alibaba, etc.). If clear per-token rates exist → use top-level `cost_input_1m` / `cost_output_1m` + official source link. Body and calculator say **official API pricing**.

2. **Provider only if no official** — OpenRouter, Together, Groq, Fireworks, etc. Use `providers[]` with source URL per host. Body and badge must say **provider-hosted** — never “official” or “Meta/OpenAI official.”

3. **Never use provider pricing when official exists** — do not default to OpenRouter because it is easier.

4. **Do not invent prices.** Unverified → leave blank or omit claim. Keep **`draft: true`**.

5. **Body must match calculator rates** exactly.

6. **Claude Sonnet reference** — current Anthropic Sonnet pricing from official page (Sonnet 5 intro rates when applicable).

In LETTER section 2, state which path each model used: **official** or **provider (host name)**.

---

## Specs and context rules

1. **`context_window` must match the hero claim.** Native vs YaRN/extended must be honest in label and body.
2. **Do not show extended context in hero** if native is smaller, unless label says so.
3. **`parameters_note` must not contradict body** or Hugging Face card.
4. **Anthropic tier names must be current** — Sonnet, Opus, Haiku, **Fable** are valid.
5. **No "Unknown" in public body.**

---

## Sources

- Link official pricing/docs first.
- Markdown links with readable titles in `## Sources`.

---

## File hygiene

1. Edit **final filenames only** in `posts/models/` — e.g. `gpt-4o.md`.
2. **Never** leave temp files (no `.hermes-tmp*`, `.tmp`, `.bak`).
3. After Cursor copies to astro, build is Cursor's job (`npm run build`).

---

## Kratos handoff

- Send work to Kratos for live cross-check.
- Write verdict in **LETTER section 3** (or one linked `kratos-missions/` report).
- QA detail stays **out of** public model markdown.

---

## Checklist before updating LETTER section 4

- [ ] Section order correct
- [ ] No banned editorial phrases
- [ ] Pricing notes match frontmatter / calculator intent
- [ ] Context window honest
- [ ] No "Unknown" in body
- [ ] Kratos PASS or PASS WITH CAUTIONS
- [ ] Files saved in `posts/models/`

---

## Pace

**2 models per batch** from [[MODEL-INDEX-TRACKER]]. Arena / CAC backfill later — no rush.

**Paused:** Qwen3-Max — do not publish until CAC has one confirmed primary source.
