---
title: "Claude Sonnet 5"
entry_type: "model"
entry_badge: "Official Anthropic API pricing"
context_label: "Official Anthropic context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Claude Sonnet 5."
parameters_note: "Not publicly disclosed"
cost_input_1m: 2.00
cost_output_1m: 10.00
context_window: 1000000
pricing_source_date: "2026-08-25"
pricing_model_version: "Anthropic Claude API claude-sonnet-5. $2 input and $10 output per 1M tokens is now the standard price. Anthropic states the previously scheduled increase to $3/$15 on 2026-09-01 will not occur. Cache hits $0.20/1M; 5-minute cache writes $2.50/1M; 1-hour cache writes $4/1M."
pricing_note: "Calculator uses official Anthropic Claude Sonnet 5 standard API rates: $2 input and $10 output per 1M tokens. These were launched as introductory rates through 2026-08-31 and are now the permanent standard price. Prompt caching, Batch API, cloud-platform routes, and regional endpoint premiums are separate."
cac_status: "Not publicly verified"
---
Claude Sonnet 5 is Anthropic's current Sonnet-tier API model, built for builders who want a strong mix of speed, intelligence, long-context work, and practical everyday coding or writing help without paying for the higher Opus or Fable tiers.

## What this model is

Anthropic lists the exact Claude API ID and alias as `claude-sonnet-5`. The models overview describes Claude Sonnet 5 as offering the best combination of speed and intelligence in the current Claude lineup.

The same overview lists Claude Sonnet 5 with text and image input, text output, multilingual capability, vision support, adaptive thinking, a 1 million token context window, and a 128,000 token maximum output. Anthropic notes that every Claude model ID is a pinned snapshot; `claude-sonnet-5` is not an evergreen pointer to an unspecified future model.

## Pricing notes

Anthropic's official pricing page lists Claude Sonnet 5 at $2 per 1M input tokens and $10 per 1M output tokens. The calculator on this page uses those first-party Claude API rates.

Anthropic launched those figures as introductory pricing through August 31, 2026, with a planned move to $3/$15 on September 1, 2026. The same official pricing page now states that $2/$10 is the standard price and that the scheduled September 1 increase will not occur. This page therefore stores $2/$10 as current standard pricing, not as a temporary intro rate.

Anthropic also lists prompt-cache prices: 5-minute cache writes $2.50 per 1M tokens, 1-hour cache writes $4 per 1M tokens, and cache hits and refreshes $0.20 per 1M tokens. Batch API discounts, partner cloud pricing, data residency, and regional endpoint premiums are separate paths.

## Benchmarks and specs

Anthropic's models overview lists Claude Sonnet 5 with a 1 million token context window, a 128,000 token maximum output, a reliable knowledge cutoff of January 2026, and a training data cutoff of January 2026.

This page does not show a parameter count or public benchmark score. Those numbers should only be shown when exact public sources are matched to `claude-sonnet-5` specifically.

## Best fit

Claude Sonnet 5 is best for builders who want one strong default Claude API model for coding help, drafting, research, long-document analysis, structured assistant workflows, and agent-style tasks where both cost and quality matter.

For harder agentic coding and enterprise work, Anthropic currently recommends starting with Claude Opus 5. For the highest available capability, Anthropic points to Claude Fable 5.

## Sources

- [Anthropic Claude models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Anthropic Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Anthropic Models API reference](https://platform.claude.com/docs/en/api/models)
