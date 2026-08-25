---
title: "Grok 4.3"
entry_type: "model"
entry_badge: "Previous-generation xAI API model · still available"
context_label: "Official xAI context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Grok 4.3."
parameters_note: "Not publicly disclosed"
cost_input_1m: 1.25
cost_output_1m: 2.50
context_window: 1000000
pricing_source_date: "2026-08-25"
pricing_model_version: "xAI grok-4.3 official API pricing; input $1.25/1M tokens, cached input $0.20/1M tokens, output $2.50/1M tokens. xAI notes higher context pricing for requests exceeding 200K tokens. Current xAI flagship is grok-4.6."
pricing_note: "Calculator uses official xAI grok-4.3 base API rates: $1.25 input and $2.50 output per 1M tokens. Cached input is $0.20/1M. Higher-context pricing should be checked separately for production estimates."
cac_status: "Not publicly verified"
---
Grok 4.3 is xAI's previous Grok 4-line API model. It remains available, with text and image input, text output, a 1M token context window, and official xAI token pricing. xAI's current flagship recommendation is Grok 4.6.

## What this model is

xAI lists the exact model name as `grok-4.3`, with aliases `grok-4.3-latest`. The model page describes Grok 4.3 as a fast, reliable model with strong tool calling and instruction following.

The official page lists a 1,000,000-token context window, function calling, structured outputs, and configurable reasoning levels of none, low, medium, and high. Batch API is listed as supported.

## Pricing notes

xAI's official Grok 4.3 model page lists API pricing at $1.25 per 1M input tokens, $0.20 per 1M cached input tokens, and $2.50 per 1M output tokens.

The calculator on this page uses the base uncached input and output rates: $1.25 input and $2.50 output per 1M tokens. xAI also notes that higher context pricing applies for requests exceeding 200K tokens. The checked Grok 4.3 page does not show the exact higher-context dollar amounts in the fetched summary, so those long-context rates are not stored as calculator fields.

## Benchmarks and specs

xAI's model page lists Grok 4.3 with text and image input, text output, a 1,000,000 token context window, function calling, structured outputs, and configurable reasoning levels of none, low, medium, and high.

This page does not show a parameter count or public benchmark score. Those numbers should only be shown when exact public sources are matched to `grok-4.3` specifically.

## Best fit

Grok 4.3 is best for existing integrations pinned to this snapshot, or for comparisons that need the 1M-context Grok 4.3 route rather than Grok 4.6's 500k window.

For new general xAI work, xAI currently points to Grok 4.6.

## Sources

- [xAI Grok 4.3 model page](https://docs.x.ai/developers/models/grok-4.3)
- [xAI models overview](https://docs.x.ai/docs/models)
