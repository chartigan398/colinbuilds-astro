---
title: "Mistral Small 3.2 24B Instruct"
draft: true
entry_type: "open-weight"
entry_badge: "Archived/deprecated Mistral model profile"
context_label: "Published model context window"
benchmark_note: "Benchmarks not shown until exact Mistral Small 3.2 evaluation source is attached"
parameters_note: "24B parameters, model-card/provider-reported"
context_window: 128000
parameters_active: 24000000000
pricing_note: "Provider-hosted OpenRouter pricing added for Mistral Small 3.2 24B Instruct. Current official Mistral pricing may point to newer Mistral Small 4; this page labels the 3.2 route as provider pricing."
pricing_source_date: "2026-06-30"
pricing_model_version: "Archived/deprecated model; current official Mistral Small pricing moved to Mistral Small 4"
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.075
    cost_output_1m: 0.20
    source: "https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct/api"
    source_date: "2026-07-01"
    model_id: "mistralai/mistral-small-3.2-24b-instruct"
    note: "Provider-hosted OpenRouter route; not Mistral official creator pricing. OpenRouter description identifies the model as Mistral-Small-3.2-24B-Instruct-2506."
cac_status: "Not publicly verified"
---
Mistral Small 3.2 24B Instruct is an archived/open-weight profile that shows how model-version drift works: pricing and model names change, and old routes should not be used as current-price anchors.

## What this model is

This page is useful as a historical and open-weight profile. For current API cost comparisons, use the separate Mistral Small 4 page because that is the current official pricing reference found in Mistral's pricing docs.

## Pricing notes

Mistral Small 3.2 is excluded from the current-price calculator. Mistral's current official pricing page lists Mistral Small 4 / `mistral-small-latest` at:

- Input: $0.15 / 1M tokens
- Output: $0.60 / 1M tokens

## Best fit

- Explaining why model directories need version dates
- Comparing archived open-weight profiles with current API products
- Showing why current official pricing should not be guessed from older model names

For current Mistral API cost comparisons, use the Mistral Small 4 page — not this archived 3.2 profile.

## Sources

- https://huggingface.co/mistralai/Mistral-Small-3.2-24B-Instruct-2506
- https://huggingface.co/api/models/mistralai/Mistral-Small-3.2-24B-Instruct-2506
- https://docs.mistral.ai/getting-started/pricing
