---
title: "Claude Sonnet Pricing Reference"
entry_type: "reference"
entry_badge: "Reference entry · Not a single model"
context_label: "Claude Sonnet context window (Sonnet 4.6 and Sonnet 5)"
benchmark_note: "Not applicable to this pricing reference"
parameters_note: "Not publicly disclosed"
cost_input_1m: 2.0
cost_output_1m: 10.0
context_window: 1000000
pricing_source_date: "2026-06-30"
pricing_model_version: "Anthropic Claude Sonnet 5 introductory API pricing through 2026-08-31; $2 input and $10 output per 1M tokens"
cac_status: "Not publicly verified"
---
Claude Sonnet is Anthropic's balanced model tier: strong enough for writing, coding, long-context reading, and business analysis, but cheaper than Anthropic's higher-priced Opus and Fable models.

## What this model is

This is a Sonnet-class pricing reference, not a benchmark profile for one exact Claude model snapshot. Anthropic's current models overview describes Claude Sonnet 5 as “the best combination of speed and intelligence,” while Claude Sonnet 4.6 remains listed in the pricing docs as an older Sonnet-class option.

The useful comparison is not just “which model is smartest?” It is whether Sonnet-level quality is worth the price when a task needs careful writing, code review, source reading, or structured judgment.

## Pricing notes

Anthropic's pricing page lists Claude Sonnet 5 at introductory pricing of $2 per 1M input tokens and $10 per 1M output tokens through August 31, 2026, then $3 input and $15 output per 1M tokens starting September 1, 2026. The same page lists Claude Sonnet 4.6 at $3 input and $15 output per 1M tokens, current Opus 4.x entries at $5 input and $25 output per 1M tokens, and Claude Fable 5 at $10 input and $50 output per 1M tokens.

The calculator on this page uses the current Sonnet 5 introductory rates: $2 input and $10 output per 1M tokens. Cache writes, cache hits, Batch API discounts, cloud marketplace routing, and data-residency multipliers can change real bills, so check Anthropic's pricing page before using this as a production cost estimate.

## Benchmarks and specs

Anthropic's model overview lists Claude Sonnet 5 with a 1M token context window and 128k max output tokens on the synchronous Messages API. Anthropic's pricing page also says Claude Sonnet 4.6 and Sonnet 5 include the full 1M token context window at standard pricing.

Anthropic does not publicly disclose Sonnet parameter counts in the checked docs. Because this page is a pricing reference, benchmark scorecards stay out unless exact model-version benchmark sources are verified.

## Best fit

Claude Sonnet is best for writing, editing, code review, source-heavy research, long-document analysis, and business workflows where careful answers matter more than the cheapest possible token price.

Sonnet is the “pay for judgment” comparison: use it when the cost of a sloppy answer is higher than the extra API spend.

## Sources

- [Anthropic Claude pricing](https://docs.anthropic.com/en/docs/about-claude/pricing)
- [Anthropic models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
