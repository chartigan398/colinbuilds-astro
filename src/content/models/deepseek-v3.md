---
title: "DeepSeek-V3"
draft: true
entry_type: "open-weight"
entry_badge: "Archived profile · current pricing moved to DeepSeek-V4"
context_label: "Historical model context window"
benchmark_note: "Vendor-reported DeepSeek-V3 chat/instruct benchmarks"
parameters_note: "37B active / 671B total, vendor-reported"
context_window: 128000
parameters_active: 37000000000
mmlu_score: 88.5
mmlu_pro_score: 75.9
pricing_note: "Provider-hosted OpenRouter pricing added for the DeepSeek V3 route. This is labelled provider pricing, not official creator pricing; current official DeepSeek creator pricing belongs on newer DeepSeek V4 model pages."
pricing_source_date: "2026-06-30"
pricing_model_version: "Archived DeepSeek-V3 launch pricing retained in body copy only; current API pricing moved to DeepSeek-V4 models"
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.2002
    cost_output_1m: 0.8001
    source: "https://openrouter.ai/deepseek/deepseek-chat/api"
    source_date: "2026-07-01"
    model_id: "deepseek/deepseek-chat"
    note: "Provider-hosted OpenRouter route; not DeepSeek official creator pricing. OpenRouter canonical slug identifies this route as DeepSeek V3."
cac_status: "Not publicly verified"
---
DeepSeek-V3 is an archived DeepSeek model profile for explaining the DeepSeek ecosystem and historical price movement. Current DeepSeek API pricing belongs on the DeepSeek-V4-Flash page.

## What this model is

DeepSeek-V3 is useful as a context page: it shows why model pages need dates and version notes. A price or benchmark that was correct for V3 should not be silently reused as current DeepSeek API pricing after DeepSeek moved current API pricing to newer V4 models.

## Historical API economics

Historical official V3 API pricing recorded in the old source material:

- Input cache miss: $0.27 / 1M tokens
- Input cache hit: $0.07 / 1M tokens
- Output: $1.10 / 1M tokens

This page is excluded from the current-price calculator. Use DeepSeek-V4-Flash for current DeepSeek API pricing.

## Benchmark notes

Vendor-reported DeepSeek-V3 chat/instruct comparison values used in the page panels:

- MMLU: 88.5
- MMLU-Pro: 75.9
- Active parameters: 37B
- Total parameters: 671B

These should remain source-attributed and not be turned into broad "beats X" claims.

## Best fit

- Historical DeepSeek context
- Explaining version drift and archived pricing
- Comparing old DeepSeek V3 notes against current DeepSeek V4 pricing

## Sources

- https://api-docs.deepseek.com/quick_start/pricing
- https://github.com/deepseek-ai/DeepSeek-V3
