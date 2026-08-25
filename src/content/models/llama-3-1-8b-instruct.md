---
title: "Llama 3.1 8B Instruct"
entry_type: "open-weight"
entry_badge: "Open-weight profile · provider pricing separate"
context_label: "Published Meta context window"
benchmark_note: "Meta model card reports MMLU 69.4 and MMLU-Pro 48.3 for Llama 3.1 8B Instruct; benchmark values are percentages from Meta's published evaluation table."
parameters_note: "8B parameters, Meta model-card reported; not a mixture-of-experts active-parameter figure."
context_window: 128000
parameters_active: 8000000000
mmlu_score: 69.4
mmlu_pro_score: 48.3
pricing_note: "Provider-hosted OpenRouter pricing recorded for Llama 3.1 8B Instruct. This is labelled provider pricing, not Meta official creator pricing. OpenRouter rates were last recorded 2026-07-02 and were not re-verified on 2026-08-25."
pricing_source_date: "2026-07-02"
pricing_model_version: "Meta Llama 3.1 8B Instruct open-weight model; no direct official Meta API price recorded. Provider/reseller prices last recorded 2026-07-02 and were not re-fetched on 2026-08-25."
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.02
    cost_output_1m: 0.03
    source: "https://openrouter.ai/meta-llama/llama-3.1-8b-instruct/api"
    source_date: "2026-07-02"
    model_id: "meta-llama/llama-3.1-8b-instruct"
    note: "Provider-hosted Llama 3.1 8B Instruct route; not Meta official pricing."
cac_status: "Not publicly verified"
---
Llama 3.1 8B Instruct is Meta's small, practical Llama 3.1 chat model: an open-weight assistant-style model that is light enough to appear in local, hosted, and edge-deployment workflows while still using the Llama 3.1 family's long 128K context window.

## What this model is

This is the 8B instruction-tuned member of the Llama 3.1 family. For builders, it is useful because it sits in the sweet spot between capability, cost control, and deployment flexibility. It will not beat frontier closed models on hard reasoning, but it is often the kind of model people can actually run, fine-tune, host, or compare across multiple providers.

The important beginner lesson is that Llama 3.1 8B Instruct is an open-weight model, not a single official hosted API product with one Meta price. A builder may see many hosted prices for this model across providers, but those are provider-labelled prices and must not be presented as Meta official pricing.

## Pricing notes

OpenRouter lists Llama 3.1 8B Instruct at $0.02 per 1M input tokens and $0.03 per 1M output tokens, checked on 2026-07-02.

The calculator on this page uses those OpenRouter rates. This is provider-hosted pricing, not an official Meta creator price. Meta released the model weights under the Llama 3.1 Community License, so hosted API costs can vary by provider.

## Benchmarks and specs

Meta's Llama 3.1 model card reports these values for the instruction-tuned 8B model:

- Context window: 128,000 tokens
- MMLU: 69.4
- MMLU-Pro: 48.3
- Parameters: 8B
- Model release date: 2024-07-23
- Knowledge cutoff: December 2023
- Supported languages listed by Meta: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai

## Best fit

- Cheap assistant experiments where hosted-provider pricing can be compared separately
- Local or self-hosted demos
- Beginner education about open-weight vs hosted API pricing
- Small-model baselines against Qwen, Mistral, DeepSeek, Gemma, and larger Llama variants

## Sources

- https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_1/
- [OpenRouter Llama 3.1 8B pricing](https://openrouter.ai/meta-llama/llama-3.1-8b-instruct/api)
- https://huggingface.co/api/models/meta-llama/Llama-3.1-8B-Instruct
