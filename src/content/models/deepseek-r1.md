---
title: "DeepSeek-R1-0528"
entry_type: "open-weight"
entry_badge: "Open-weight R1 profile · provider pricing only"
context_label: "Provider-listed context window"
benchmark_note: "DeepSeek-R1-0528 model card reports AIME 2025 improving from 70% to 87.5%; other benchmark fields are not shown until source-specific values are mapped into the page schema"
parameters_note: "37B active-parameter value is sourced from DeepSeek's original R1 architecture README and provider metadata; R1-0528 is the current R1 open-weight update checked here"
context_window: 163840
parameters_active: 37000000000
pricing_note: "No current official DeepSeek API price is recorded for an R1 API route. DeepSeek's current API docs list deepseek-v4-flash and deepseek-v4-pro, while deepseek-reasoner is deprecated and currently routes to deepseek-v4-flash thinking mode. OpenRouter pricing is provider-hosted, not official DeepSeek creator pricing."
pricing_source_date: "2026-08-25"
pricing_model_version: "Current R1 version checked as DeepSeek-R1-0528. Official DeepSeek API docs no longer list an R1 API route; live IDs are deepseek-v4-flash and deepseek-v4-pro. Calculator still uses previously recorded OpenRouter provider-hosted pricing for deepseek/deepseek-r1-0528 from 2026-07-07 and was not re-verified against OpenRouter on 2026-08-25."
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.50
    cost_output_1m: 2.15
    source: "https://openrouter.ai/api/v1/models"
    source_date: "2026-07-07"
    model_id: "deepseek/deepseek-r1-0528"
    note: "Provider-hosted DeepSeek-R1-0528 route. OpenRouter API lists prompt $0.0000005/token, completion $0.00000215/token, and input cache read $0.00000035/token; calculator uses non-cache prompt and completion rates."
cac_status: "Not publicly verified"
---
DeepSeek-R1-0528 is the current DeepSeek R1 open-weight update checked here. It should not be confused with the current official DeepSeek API model IDs, which are now V4 routes.

## What this model is

DeepSeek's R1 line is its open-weight reasoning model family. The DeepSeek-R1-0528 model card says the R1 model received a minor version upgrade, with improved reasoning depth, reduced hallucination rate, function-calling support, and better coding experience.

For API use, the current DeepSeek docs need careful wording. The live Models & Pricing page lists `deepseek-v4-flash`, `deepseek-v4-pro`, and experimental `deepseek-v4-flash-vision-exp` as the currently supported model IDs. DeepSeek's V4 preview notes said `deepseek-chat` and `deepseek-reasoner` would be fully retired after 2026-07-24 15:59 UTC. That means this page does not present `deepseek-reasoner` as a current official R1 API price.

## Pricing notes

No current official DeepSeek API price is recorded here for a DeepSeek-R1 API route. The historical DeepSeek-R1 release post used `model=deepseek-reasoner`, but the live API docs now route that compatibility name to V4-Flash thinking mode and mark it for retirement.

The calculator on this page uses provider-hosted OpenRouter pricing for `deepseek/deepseek-r1-0528`: $0.50 per 1M input tokens and $2.15 per 1M output tokens, checked on 2026-07-07 through OpenRouter's public models API. OpenRouter also lists an input cache-read price of $0.35 per 1M tokens, but the calculator uses the non-cache input rate for safer comparison.

OpenRouter pricing is provider-hosted marketplace pricing for `deepseek/deepseek-r1-0528`; it is not official DeepSeek creator/API pricing. Hosted R1 costs can vary by provider and route.

## Benchmarks and specs

The DeepSeek-R1-0528 model card says the current R1 version improves AIME 2025 accuracy from 70% in the previous version to 87.5%, and that average reasoning length on AIME increased from 12K tokens to 23K tokens.

The 37B active-parameter value is sourced from DeepSeek's original R1 architecture README and provider metadata, not from a current official DeepSeek API R1 route. The 163,840-token context is OpenRouter/provider-listed; DeepSeek's original R1 README listed 128K context for the original R1.

## Best fit

DeepSeek-R1-0528 is best for reasoning-focused comparisons where open weights matter and where the price shown is clearly labelled as provider-hosted.

It is not the cleanest choice for a current official DeepSeek API pricing comparison. For that, DeepSeek's live docs point to the V4 model IDs, especially V4-Pro and V4-Flash with thinking mode controls.

## Sources

- [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [DeepSeek API list models reference](https://api-docs.deepseek.com/api/list-models)
- [DeepSeek Thinking Mode guide](https://api-docs.deepseek.com/guides/thinking_mode)
- [DeepSeek-R1-0528 Release](https://api-docs.deepseek.com/news/news250528)
- [DeepSeek-R1 Release](https://api-docs.deepseek.com/news/news250120)
- [DeepSeek V4 Preview Release](https://api-docs.deepseek.com/news/news260424)
- [DeepSeek-R1 GitHub README](https://raw.githubusercontent.com/deepseek-ai/DeepSeek-R1/main/README.md)
- [DeepSeek-R1-0528 Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528)
- [OpenRouter public models API](https://openrouter.ai/api/v1/models)
