---
title: "Llama 3.1 70B Instruct"
draft: true
entry_type: "open-weight"
entry_badge: "Open-weight profile · provider pricing separate"
context_label: "Published Meta context window"
benchmark_note: "Meta model card reports MMLU 83.6 and MMLU-Pro 66.4 for Llama 3.1 70B Instruct; benchmark values are percentages from Meta's published evaluation table."
parameters_note: "70B parameters, Meta model-card reported; not a mixture-of-experts active-parameter figure."
context_window: 128000
parameters_active: 70000000000
mmlu_score: 83.6
mmlu_pro_score: 66.4
pricing_note: "No direct official Meta pay-as-you-go API price was found in the checked Meta/Llama sources on 2026-07-01. This page should be excluded from current-price calculators until a provider-labelled hosted route is added separately. Do not treat OpenRouter, Together, Fireworks, Replicate, Groq, or cloud-hosted prices as Meta official pricing."
pricing_source_date: "2026-07-01"
pricing_model_version: "Meta Llama 3.1 70B Instruct open-weight model; no direct official Meta API price recorded; provider/reseller pricing must be separate."
cac_status: "Not publicly verified"
---
Llama 3.1 70B Instruct is Meta's larger, stronger Llama 3.1 chat model for builders who want open-weight control but need much better reasoning and general capability than the 8B tier.

## What this model is

This is the 70B instruction-tuned member of the Llama 3.1 family. It is the serious builder comparison point: large enough to be useful for high-quality chat, reasoning, multilingual work, coding assistance, and retrieval workflows, while still being open-weight and available across multiple hosting routes.

The main thing to understand is that Llama 3.1 70B Instruct is not one single priced API product. Meta provides the model weights under the Llama 3.1 Community License. Hosted inference prices depend on the provider, region, quantization, throughput tier, and serving setup. That is why this draft stores model facts and benchmark data, but does not invent one Meta official API price.

## Pricing notes

No direct official Meta pay-as-you-go API price was found for Llama 3.1 70B Instruct in the checked Meta/Llama sources on 2026-07-01.

This means:

- leave `cost_input_1m` and `cost_output_1m` out of the draft frontmatter;
- exclude this page from current-price calculator math until a provider-labelled route is added;
- treat OpenRouter/Together/Fireworks/Groq/Replicate/cloud prices as separate hosted-provider records, not as Meta official pricing.

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

## Verification notes

Status: draft, needs Colin approval before website use.

Checked on 2026-07-01 by Hermes and second-pass checked by Kratos. Main source facts come from Meta's Llama 3.1 model card and the Hugging Face API identity record. The pricing field is intentionally handled as a pricing note rather than numeric API costs because no direct official Meta API price was found in the checked sources on this date.

License wording caution: describe this as an open-weight model released under the Llama 3.1 Community License. Do not label it as OSI-open-source, Apache, MIT, public domain, or unrestricted commercial use.

## Sources

- https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_1/
- https://huggingface.co/api/models/meta-llama/Llama-3.1-70B-Instruct
