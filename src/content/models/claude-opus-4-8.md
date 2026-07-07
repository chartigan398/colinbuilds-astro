---
title: "Claude Opus 4.8"
entry_type: "model"
entry_badge: "Official Anthropic API pricing"
context_label: "Official Anthropic context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Claude Opus 4.8."
parameters_note: "Not publicly disclosed"
cost_input_1m: 5.00
cost_output_1m: 25.00
context_window: 1000000
pricing_source_date: "2026-07-07"
pricing_model_version: "Anthropic Claude API claude-opus-4-8 official API pricing; input $5/1M tokens, output $25/1M tokens, with separate prompt-cache columns."
pricing_note: "Calculator uses official Anthropic Claude Opus 4.8 API rates: $5 input and $25 output per 1M tokens. Prompt caching, Batch API, cloud-platform routes, data residency, fast mode, and regional endpoint premiums are separate pricing paths."
cac_status: "Not publicly verified"
---
Claude Opus 4.8 is Anthropic's current Opus-tier API model, positioned for complex agentic coding, enterprise work, and reasoning-heavy tasks where a builder wants stronger capability than the Sonnet tier.

## What this model is

Anthropic lists the exact Claude API ID and alias as `claude-opus-4-8`. The models overview says that if a user is unsure which model to use, Anthropic recommends starting with Claude Opus 4.8 for complex agentic coding and enterprise work.

The same overview lists Claude Opus 4.8 with text and image input, text output, multilingual capability, vision support, adaptive thinking, a 1 million token context window, and a 128,000 token maximum output. Anthropic also notes that every Claude model ID is a pinned snapshot; `claude-opus-4-8` is the exact current Opus model identity used here.

## Pricing notes

Anthropic's official pricing page lists Claude Opus 4.8 at $5 per 1M input tokens and $25 per 1M output tokens. The calculator on this page uses those first-party Claude API rates.

The same pricing table lists separate prompt-cache rates for Claude Opus 4.8: 5-minute cache writes at $6.25 per 1M tokens, 1-hour cache writes at $10 per 1M tokens, and cache hits and refreshes at $0.50 per 1M tokens. Anthropic also lists separate pricing paths for Batch API discounts, cloud platforms, data residency, and regional endpoint premiums, so production estimates should check the exact route and feature set.

## Benchmarks and specs

Anthropic's models overview lists Claude Opus 4.8 with a 1 million token context window, a 128,000 token maximum output, a reliable knowledge cutoff of January 2026, and a training data cutoff of January 2026.

This page does not show a parameter count or public benchmark score. Those numbers should only be shown when exact public sources are matched to `claude-opus-4-8` specifically.

## Best fit

Claude Opus 4.8 is best for builders who need a high-capability Anthropic API model for complex coding agents, deep codebase work, enterprise assistants, difficult planning tasks, and long-context reasoning where answer quality matters more than lowest cost.

It is a different fit from Sonnet 5: Sonnet is the faster cost-balanced default, while Opus 4.8 is the stronger Opus-tier choice for harder agentic and reasoning-heavy workloads.

## Sources

- [Anthropic Claude models overview](https://platform.claude.com/docs/en/about-claude/models/overview.md)
- [Anthropic Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing.md)
- [Anthropic Models API reference](https://platform.claude.com/docs/en/api/models.md)
