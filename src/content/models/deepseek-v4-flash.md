---
title: "DeepSeek-V4-Flash"
entry_type: "model"
entry_badge: "Current official DeepSeek API pricing"
context_label: "Current official context window"
benchmark_note: "Benchmarks not shown until exact DeepSeek-V4-Flash evaluation source is verified"
parameters_note: "Not publicly disclosed in current pricing page"
cost_input_1m: 0.14
cost_output_1m: 0.28
context_window: 1000000
pricing_source_date: "2026-06-30"
pricing_model_version: "Current official DeepSeek-V4-Flash pricing; cache-miss input used for calculator, cache-hit input is $0.0028/1M"
cac_status: "Not publicly verified"
---
DeepSeek-V4-Flash is a current official DeepSeek API route with 1M context, 384K maximum output, and unusually cheap cache-hit pricing.

## What this model is

DeepSeek-V4-Flash is one of DeepSeek's current API models listed on the official Models & Pricing page. It is not the same thing as older DeepSeek-V3 launch pricing, so this page should be used as a current pricing reference rather than a historical DeepSeek comparison.

The important point is simple: DeepSeek-V4-Flash is a low-cost API option where cache behaviour matters. A cached-input workload can price very differently from a fresh-input workload.

## Pricing notes

DeepSeek lists prices per 1M tokens. For DeepSeek-V4-Flash, the official pricing page lists $0.0028 per 1M input tokens on a cache hit, $0.14 per 1M input tokens on a cache miss, and $0.28 per 1M output tokens.

The calculator on this page uses the cache-miss input price as the default input rate, because that is the safer comparison when you do not yet know whether prompts will hit cache. Cache-hit pricing is still worth noting because it can make repeated-context workloads dramatically cheaper.

DeepSeek also warns that product prices may vary and recommends checking the pricing page regularly. Treat this as a current checked price, not a permanent guarantee.

## Benchmarks and specs

DeepSeek's official pricing table lists DeepSeek-V4-Flash with a 1M context length and a maximum output of 384K tokens. The same table lists JSON Output under features.

DeepSeek does not list parameter counts or benchmark scorecards for this route on the checked pricing page. This page does not list benchmark scores until a named evaluation source and test setup are verified.

## Best fit

DeepSeek-V4-Flash is best for cost-sensitive API comparisons, repeated-context workloads where caching may apply, and explanations of why “input price” can mean different things depending on cache hit versus cache miss.

It is a strong comparison against GPT-4o and Claude Sonnet when the question is how cheap a workflow can get before quality or reliability becomes the limiting factor.

## Sources

- [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing)
