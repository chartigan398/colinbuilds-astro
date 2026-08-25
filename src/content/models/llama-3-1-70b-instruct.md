---
title: "Llama 3.1 70B Instruct"
entry_type: "open-weight"
entry_badge: "Open-weight profile · provider pricing separate"
context_label: "Published Meta context window"
benchmark_note: "Meta model card reports MMLU 83.6 and MMLU-Pro 66.4 for Llama 3.1 70B Instruct; benchmark values are percentages from Meta's published evaluation table."
parameters_note: "70B parameters, Meta model-card reported; not a mixture-of-experts active-parameter figure."
context_window: 128000
parameters_active: 70000000000
mmlu_score: 83.6
mmlu_pro_score: 66.4
pricing_note: "Provider-hosted OpenRouter pricing recorded for Llama 3.1 70B Instruct. This is labelled provider pricing, not Meta official creator pricing. OpenRouter rates were last recorded 2026-07-02 and were not re-verified on 2026-08-25."
pricing_source_date: "2026-07-02"
pricing_model_version: "Meta Llama 3.1 70B Instruct open-weight model; no direct official Meta API price recorded. Provider/reseller prices last recorded 2026-07-02 and were not re-fetched on 2026-08-25."
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.40
    cost_output_1m: 0.40
    source: "https://openrouter.ai/meta-llama/llama-3.1-70b-instruct/api"
    source_date: "2026-07-02"
    model_id: "meta-llama/llama-3.1-70b-instruct"
    note: "Provider-hosted Llama 3.1 70B Instruct route; not Meta official pricing."
cac_status: "Not publicly verified"
---
Llama 3.1 70B Instruct is Meta's larger, stronger Llama 3.1 chat model for builders who want open-weight control but need much better reasoning and general capability than the 8B tier.

## What this model is

This is the 70B instruction-tuned member of the Llama 3.1 family. It is the serious builder comparison point: large enough to be useful for high-quality chat, reasoning, multilingual work, coding assistance, and retrieval workflows, while still being open-weight and available across multiple hosting routes.

The main thing to understand is that Llama 3.1 70B Instruct is not one single priced API product. Meta provides the model weights under the Llama 3.1 Community License. Hosted inference prices depend on the provider, region, quantization, throughput tier, and serving setup. This page records model facts and benchmark data from Meta's model card, but does not invent one Meta official API price.

## Pricing notes

OpenRouter lists Llama 3.1 70B Instruct at $0.40 per 1M input tokens and $0.40 per 1M output tokens, checked on 2026-07-02.

The calculator on this page uses those OpenRouter rates. This is provider-hosted pricing, not an official Meta creator price. Meta released the model weights under the Llama 3.1 Community License, so hosted API costs can vary by provider.

## Benchmarks and specs

Meta's Llama 3.1 model card reports these values for the instruction-tuned 70B model:

- Context window: 128,000 tokens
- MMLU: 83.6
- MMLU-Pro: 66.4
- Parameters: 70B
- Model release date: 2024-07-23
- Knowledge cutoff: December 2023
- Supported languages listed by Meta: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai

## Best fit

- Stronger open-weight assistant comparisons
- Self-hosted or private-deployment evaluations
- RAG and long-context experiments where teams control the stack
- Comparing open-weight capability against GPT, Claude, Gemini, DeepSeek, Qwen, and Mistral options

## Sources

- https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_1/
- [OpenRouter Llama 3.1 70B pricing](https://openrouter.ai/meta-llama/llama-3.1-70b-instruct/api)
- https://huggingface.co/api/models/meta-llama/Llama-3.1-70B-Instruct
