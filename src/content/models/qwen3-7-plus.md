---
title: "Qwen3.7-Plus"
entry_type: "model"
entry_badge: "Alibaba Cloud Model Studio hosted pricing"
context_label: "Alibaba-listed 1M context · 0–256K tier used for calculator"
benchmark_note: "Benchmarks not shown until exact Qwen3.7-Plus evaluation source is verified"
parameters_note: "Not recorded from the checked Alibaba billing table"
cost_input_1m: 0.4
cost_output_1m: 1.6
context_window: 1000000
pricing_source_date: "2026-08-25"
pricing_model_version: "Alibaba Cloud Model Studio International (Singapore) pricing for qwen3.7-plus-2026-05-26: 0–256K tier $0.40 input and $1.60 output per 1M tokens. 256K–1M tier is $1.20 / $4.80. The qwen3.7-plus alias row also mentions limited-time 20% off list price; calculator stores the dated snapshot list rates, not an inferred discounted figure."
pricing_note: "Calculator uses Alibaba Cloud Model Studio International 0–256K list rates for qwen3.7-plus-2026-05-26: $0.40 input and $1.60 output per 1M tokens. The alias row mentions limited-time 20% off; the exact discounted dollar amount is not stored because it is not separately listed as a number. Longer-context tiers cost more."
cac_status: "Not publicly verified"
---
Qwen3.7-Plus is Alibaba Cloud Model Studio's current Plus-class Qwen API route on the international billing table, with a listed 1 million token context and separate prices for the 0–256K and 256K–1M input tiers.

## What this model is

Alibaba's Model Studio billing page lists `qwen3.7-plus` as currently equivalent to `qwen3.7-plus-2026-05-26` on the International (Singapore) deployment. This is hosted Model Studio pricing, not an OpenRouter reseller route.

Older Qwen3-235B-A22B and Qwen3-Coder-480B pages remain in this directory as previous Qwen3-family references that are still listed on the same billing page.

## Pricing notes

On the International table, the dated snapshot `qwen3.7-plus-2026-05-26` lists $0.40 per 1M input tokens and $1.60 per 1M output tokens for requests in the 0–256K tier, and $1.20 input / $4.80 output for the 256K–1M tier. Non-thinking and thinking output are listed at the same dollar amounts on that snapshot row.

The `qwen3.7-plus` alias row on the same International table says “List price $0.4 Limited-time 20% off” for input and “List price $1.6 Limited-time 20% off” for output. This page stores the dated snapshot list rates in the calculator and notes the limited-time discount language. It does not invent a 20%-off dollar figure.

The calculator uses the 0–256K International list rates: $0.40 input and $1.60 output per 1M tokens.

## Benchmarks and specs

Alibaba's billing table lists a 1 million token context for this International row. This page does not show a parameter count or public benchmark score until those are tied to this exact model ID.

## Best fit

Qwen3.7-Plus is best for current Alibaba-hosted Qwen Plus comparisons against GPT, Claude, Gemini, DeepSeek, and Mistral on official Model Studio International rates.

For cheaper Qwen Flash-class hosted pricing, compare against Qwen3.6-Flash. For the earlier open-weight Qwen3 MoE profile, compare against Qwen3-235B-A22B.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
