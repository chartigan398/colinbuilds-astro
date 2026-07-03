---
title: "Kimi K2.7 Code"
entry_type: "model"
entry_badge: "Current Alibaba-hosted Kimi API pricing"
context_label: "Published context window"
benchmark_note: "Benchmarks not shown until exact Kimi K2.7 Code evaluation source is attached"
parameters_note: "Not publicly disclosed on the checked Alibaba Cloud Model Studio listing"
cost_input_1m: 0.95
cost_output_1m: 4.0
context_window: 262144
pricing_source_date: "2026-06-29"
pricing_model_version: "Alibaba Cloud Model Studio international (Singapore) hosted pricing for kimi-k2.7-code; $0.95 input and $4.00 output per 1M tokens"
cac_status: "Not publicly verified"
---
Kimi K2.7 Code is Moonshot AI's coding-focused Kimi model, tracked here through Alibaba Cloud Model Studio hosted pricing so ColinBuilds can compare it against Qwen, DeepSeek, GLM, Mistral, GPT-4o, and Claude Sonnet on a consistent provider-priced basis.

## What this model is

Moonshot describes Kimi K2.7 Code as a coding-focused agentic model built on Kimi K2.6. The Hugging Face model card says it improves real-world long-horizon coding tasks, strengthens end-to-end completion across complex software engineering workflows, and reduces thinking-token usage by about 30% compared with Kimi K2.6.

The same model card lists a Mixture-of-Experts architecture with 1T total parameters, 32B activated parameters, a 256K context length, and image/video input support. This page is still cautious about public benchmark panels: Kimi publishes benchmark tables, but ColinBuilds should only surface exact benchmark cards when the source, settings, and comparison conditions are attached.

## Pricing notes

This page uses Alibaba Cloud Model Studio hosted pricing, not Moonshot direct API pricing. Alibaba lists `kimi-k2.7-code` in Model Studio's third-party model catalogue, and the billing page lists token prices by region/deployment scope.

For the Singapore International service, Alibaba lists `kimi-k2.7-code` at $0.95 per 1M input tokens and $4.00 per 1M output tokens. The ColinBuilds calculator uses those International rates so this page stays consistent with the other Alibaba Model Studio priced entries in the directory.

Alibaba also lists lower Global rates in some regions, including $0.894 input and $3.713 output per 1M tokens. Those are useful context, but they are not the headline calculator rate on this page.

## Benchmarks and specs

The Hugging Face card for `moonshotai/Kimi-K2.7-Code` lists 1T total parameters, 32B activated parameters, 61 layers, 384 experts, 8 selected experts per token, and a 256K context length. It also says K2.7 Code supports image and video input.

The model card includes benchmark comparisons for coding and agentic tasks, but this page keeps benchmark wording general until ColinBuilds attaches exact benchmark values and settings in the page data.

## Best fit

Kimi K2.7 Code is best for coding assistants, code-generation experiments, long-horizon software tasks, and comparisons where Moonshot's model is accessed through Alibaba Cloud rather than through a direct Moonshot account.

For ColinBuilds readers, this is a good “coding model with regional/provider pricing” example: the model identity comes from Moonshot, while the headline price shown here comes from Alibaba Cloud Model Studio.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
- [Kimi K2.7 Code on Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
