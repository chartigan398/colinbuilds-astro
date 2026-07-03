---
title: "Claude Sonnet Pricing Reference"
entry_type: "reference"
entry_badge: "Reference entry · Not a single model"
context_label: "Current Claude Sonnet 4.6 context window"
benchmark_note: "Not applicable to this pricing reference"
parameters_note: "Not publicly disclosed"
cost_input_1m: 3.0
cost_output_1m: 15.0
context_window: 1000000
pricing_source_date: "2026-06-30"
pricing_model_version: "Current Anthropic Claude Sonnet 4.6 official API pricing; $3 input and $15 output per 1M tokens"
cac_status: "Not publicly verified"
---
Claude Sonnet is the ColinBuilds reference point for Anthropic's balanced model tier: strong enough for writing, coding, long-context reading, and business analysis, but cheaper than the top Opus/Fable-style tier.

## What this model is

This is a Sonnet-class pricing reference, not a benchmark profile for one exact Claude model snapshot. Anthropic's current models overview describes Claude Sonnet 5 as “the best combination of speed and intelligence,” while the older Claude Sonnet 4.6 remains a Sonnet-class long-context reference in the pricing docs.

For ColinBuilds readers, the useful comparison is not just “which model is smartest?” It is whether Sonnet-level quality is worth the higher price when a task needs careful writing, code review, source reading, or structured judgment.

## Pricing notes

Anthropic's pricing page lists Claude Sonnet 4.6 at $3 per 1M base input tokens and $15 per 1M output tokens, with prompt-cache write and cache-hit rates listed separately. It also lists Claude Sonnet 5 at introductory pricing of $2 input and $10 output per 1M tokens through August 31, 2026, then $3 input and $15 output per 1M tokens starting September 1, 2026.

This ColinBuilds reference entry currently uses the standard Sonnet-class $3 input and $15 output per 1M token comparison rate. Cache writes, cache hits, Batch API discounts, cloud marketplace routing, and data-residency multipliers can change real bills, so those should be checked before using this as a production cost estimate.

## Benchmarks and specs

Anthropic's model overview lists Claude Sonnet 5 with a 1M token context window and 128k max output tokens on the synchronous Messages API. Anthropic's pricing page also says Claude Sonnet 4.6 and Sonnet 5 include the full 1M token context window at standard pricing.

Anthropic does not publicly disclose Sonnet parameter counts in the checked docs. Because this page is a pricing reference, benchmark panels stay out unless exact model-version benchmark sources are attached.

## Best fit

Claude Sonnet is best for writing, editing, code review, source-heavy research, long-document analysis, and business workflows where careful answers matter more than the cheapest possible token price.

For ColinBuilds readers, Sonnet is the “pay for judgment” comparison: use it when the cost of a sloppy answer is higher than the extra API spend.

## Sources

- [Anthropic Claude pricing](https://docs.anthropic.com/en/docs/about-claude/pricing)
- [Anthropic models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
