---
title: "Llama 3.3 70B Instruct"
entry_type: "open-weight"
entry_badge: "Open-weight profile · provider pricing separate"
context_label: "Published Meta context window"
benchmark_note: "Meta model card reports MMLU (CoT) 86.0 and MMLU-Pro (CoT) 68.9 for Llama 3.3 70B Instruct; benchmark values are percentages from Meta's published evaluation table."
parameters_note: "70B parameters, Meta model-card reported; not a mixture-of-experts active-parameter figure."
context_window: 128000
parameters_active: 70000000000
mmlu_score: 86.0
mmlu_pro_score: 68.9
pricing_note: "Provider-hosted OpenRouter, DeepInfra Turbo, and Groq pricing recorded for Llama 3.3 70B Instruct. These are labelled provider pricing, not Meta official creator pricing."
pricing_source_date: "2026-07-08"
pricing_model_version: "Meta Llama 3.3 70B Instruct open-weight model; no direct official Meta API price recorded; provider/reseller pricing must be separate."
providers:
  - name: "OpenRouter"
    cost_input_1m: 0.10
    cost_output_1m: 0.32
    source: "https://openrouter.ai/meta-llama/llama-3.3-70b-instruct/api"
    source_date: "2026-07-08"
    model_id: "meta-llama/llama-3.3-70b-instruct"
    note: "Provider-hosted Llama 3.3 70B Instruct route; not Meta official pricing."
  - name: "DeepInfra"
    cost_input_1m: 0.10
    cost_output_1m: 0.32
    source: "https://deepinfra.com/meta-llama/Llama-3.3-70B-Instruct-Turbo/api"
    source_date: "2026-07-08"
    model_id: "meta-llama/Llama-3.3-70B-Instruct-Turbo"
    note: "Provider-hosted DeepInfra Turbo route; not Meta official pricing."
  - name: "Groq"
    cost_input_1m: 0.59
    cost_output_1m: 0.79
    source: "https://console.groq.com/docs/model/llama-3.3-70b-versatile"
    source_date: "2026-07-08"
    model_id: "llama-3.3-70b-versatile"
    note: "Provider-hosted Groq Llama 3.3 70B Versatile route; not Meta official pricing."
cac_status: "Not publicly verified"
---
Llama 3.3 70B Instruct is Meta's updated 70B open-weight chat model: a December 2024 refresh of the Llama 3.1 70B tier with stronger published benchmark scores while keeping the 128K context window.

## What this model is

This is the 70B instruction-tuned member of the Llama 3.3 family. Meta describes it as a multilingual text-in/text-out model optimized for dialogue use cases, with support for multilingual text and code.

The main thing to understand is that Llama 3.3 70B Instruct is not one single priced API product from Meta. Meta provides the model weights under the Llama 3.3 Community License. Hosted inference prices depend on the provider, route name, quantization, and throughput tier. This page records model facts from Meta's model card and provider-hosted prices from separate docs.

## Pricing notes

OpenRouter lists Llama 3.3 70B Instruct at $0.10 per 1M input tokens and $0.32 per 1M output tokens, checked on 2026-07-08.

DeepInfra lists Llama 3.3 70B Instruct Turbo at $0.10 per 1M input tokens and $0.32 per 1M output tokens, checked on 2026-07-08.

Groq lists Llama 3.3 70B Versatile at $0.59 per 1M input tokens and $0.79 per 1M output tokens, checked on 2026-07-08.

The calculator on this page uses the lowest combined provider rate on this page (OpenRouter and DeepInfra tie at $0.10 input / $0.32 output). This is provider-hosted pricing, not an official Meta creator price.

## Benchmarks and specs

Meta's Llama 3.3 model card reports these values for the instruction-tuned 70B model:

- Context window: 128,000 tokens
- MMLU (CoT): 86.0
- MMLU-Pro (CoT): 68.9
- Parameters: 70B
- Model release date: 2024-12-06
- Knowledge cutoff: December 2023
- Supported languages listed by Meta: English, German, French, Italian, Portuguese, Hindi, Spanish, and Thai

## Best fit

- Open-weight 70B comparisons where Llama 3.1 70B is too old but 405B is too heavy
- Shopping hosted provider prices with a clear best-deal table
- RAG, assistant, coding, and multilingual evaluations where teams want model-weight access
- Comparing the 70B open-weight tier against Qwen, DeepSeek, Mistral, GPT, Claude, and Gemini options

## Sources

- https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_3/MODEL_CARD.md
- https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/
- [OpenRouter Llama 3.3 70B pricing](https://openrouter.ai/meta-llama/llama-3.3-70b-instruct/api)
- [DeepInfra Llama 3.3 70B Instruct Turbo pricing](https://deepinfra.com/meta-llama/Llama-3.3-70B-Instruct-Turbo/api)
- [Groq Llama 3.3 70B Versatile pricing](https://console.groq.com/docs/model/llama-3.3-70b-versatile)
- https://huggingface.co/api/models/meta-llama/Llama-3.3-70B-Instruct
