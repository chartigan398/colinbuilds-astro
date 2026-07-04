---
title: "Grok 4.3"
entry_type: "model"
entry_badge: "Official xAI API pricing"
context_label: "Official xAI context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Grok 4.3."
parameters_note: "Not publicly disclosed"
cost_input_1m: 1.25
cost_output_1m: 2.50
context_window: 1000000
pricing_source_date: "2026-07-04"
pricing_model_version: "xAI grok-4.3 official API pricing; input $1.25/1M tokens, cached input $0.20/1M tokens, output $2.50/1M tokens. xAI notes higher context pricing for requests exceeding 200K tokens."
pricing_note: "Calculator uses official xAI grok-4.3 base API rates: $1.25 input and $2.50 output per 1M tokens. Cached input and higher-context pricing should be checked separately for production estimates."
cac_status: "Not publicly verified"
---
Grok 4.3 is xAI's current official Grok API model name for the Grok 4 line in the xAI developer docs, with text and image input, text output, a 1M token context window, and official xAI token pricing.

## What this model is

xAI lists the exact model name as `grok-4.3`, with aliases `grok-4.3-latest` and `grok-latest`. The model page describes Grok 4.3 as xAI's advanced flagship model for non-hallucination rate, agentic tool calling, and instruction following.

For builders, the important detail is the exact API identity. A request for “Grok 4” should be checked against xAI's current docs before writing pricing or model IDs, because the official model page currently exposes `grok-4.3` rather than a usable `grok-4` page.

## Pricing notes

xAI's official Grok 4.3 model page lists API pricing at $1.25 per 1M input tokens, $0.20 per 1M cached input tokens, and $2.50 per 1M output tokens.

The calculator on this page uses the base uncached input and output rates: $1.25 input and $2.50 output per 1M tokens. xAI also notes that higher context pricing applies for requests exceeding 200K tokens, so very long-context production estimates should check the xAI pricing page directly before budgeting.

## Benchmarks and specs

xAI's model page lists Grok 4.3 with text and image input, text output, a 1,000,000 token context window, function calling, structured outputs, and configurable reasoning levels of none, low, medium, and high.

This page does not show a parameter count or public benchmark score. Those numbers should only be shown when exact public sources are matched to `grok-4.3` specifically.

## Best fit

Grok 4.3 is best for builders who want xAI's official flagship API route for assistants, tool-using agents, structured-output workflows, image-plus-text prompts, and long-context tasks.

It is also a useful cost comparison against other official frontier APIs because its base listed input and output rates are easy to compare per 1M tokens, while cached input and higher-context usage can change the real bill.

## Sources

- [xAI Grok 4.3 model page](https://docs.x.ai/developers/models/grok-4.3)
- [xAI models overview](https://docs.x.ai/developers/models)
