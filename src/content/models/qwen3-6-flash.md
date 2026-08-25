---
title: "Qwen3.6-Flash"
entry_type: "model"
entry_badge: "Alibaba Cloud Model Studio hosted pricing"
context_label: "Alibaba-listed 1M context · 0–256K tier used for calculator"
benchmark_note: "Benchmarks not shown until exact Qwen3.6-Flash evaluation source is verified"
parameters_note: "Not recorded from the checked Alibaba billing table"
cost_input_1m: 0.25
cost_output_1m: 1.5
context_window: 1000000
pricing_source_date: "2026-08-25"
pricing_model_version: "Alibaba Cloud Model Studio International (Singapore) pricing for qwen3.6-flash / qwen3.6-flash-2026-04-16: 0–256K tier $0.25 input and $1.50 output per 1M tokens. 256K–1M tier is $1.00 / $4.00."
pricing_note: "Calculator uses Alibaba Cloud Model Studio International 0–256K rates for qwen3.6-flash: $0.25 input and $1.50 output per 1M tokens. Longer-context tiers cost more. Batch and context-cache discounts are listed separately."
cac_status: "Not publicly verified"
---
Qwen3.6-Flash is Alibaba Cloud Model Studio's current Flash-class Qwen API route on the international billing table, with a listed 1 million token context and cheaper token prices than Qwen3.7-Plus.

## What this model is

Alibaba's Model Studio billing page lists `qwen3.6-flash` as currently equivalent to `qwen3.6-flash-2026-04-16` on the International (Singapore) deployment. This is hosted Model Studio pricing, not an OpenRouter reseller route.

No `qwen3.7-flash` row was present on the checked billing tables. Qwen3.5-Flash remains listed at a lower International rate ($0.10 / $0.40) as an older Flash snapshot.

## Pricing notes

On the International table, `qwen3.6-flash-2026-04-16` lists $0.25 per 1M input tokens and $1.50 per 1M output tokens for the 0–256K tier, and $1.00 input / $4.00 output for the 256K–1M tier.

The calculator uses the 0–256K International rates: $0.25 input and $1.50 output per 1M tokens. Alibaba also notes 50% batch inference discount and context-cache discount on some Flash rows; those are not blended into the calculator fields.

## Benchmarks and specs

Alibaba's billing table lists a 1 million token context for this International row. This page does not show a parameter count or public benchmark score until those are tied to this exact model ID.

## Best fit

Qwen3.6-Flash is best for cost-sensitive Alibaba-hosted Qwen comparisons where Flash-class latency and price matter more than Plus-tier capability.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
