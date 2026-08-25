---
title: "Kimi K2.7 Code"
entry_type: "model"
entry_badge: "Current Alibaba-hosted Kimi API pricing"
context_label: "Official context window"
benchmark_note: "Benchmarks not shown until exact Kimi K2.7 Code evaluation source is verified"
parameters_note: "1T total / 32B activated parameters, Hugging Face model card"
cost_input_1m: 0.95
cost_output_1m: 4.0
context_window: 262144
pricing_source_date: "2026-08-25"
pricing_model_version: "Alibaba Cloud Model Studio international (Singapore) hosted pricing for kimi-k2.7-code; $0.95 input and $4.00 output per 1M tokens"
cac_status: "Not publicly verified"
---
Kimi K2.7 Code is Moonshot AI's coding-focused Kimi model, tracked here through Alibaba Cloud Model Studio hosted pricing for comparison against Qwen, DeepSeek, GLM, Mistral, GPT-4o, and Claude Sonnet.

## What this model is

Moonshot describes Kimi K2.7 Code as a coding-focused agentic model built on Kimi K2.6. The Hugging Face model card says it improves real-world long-horizon coding tasks, strengthens end-to-end completion across complex software engineering workflows, and reduces thinking-token usage by about 30% compared with Kimi K2.6.

The same model card lists a Mixture-of-Experts architecture with 1T total parameters, 32B activated parameters, a 256K context length, and image/video input support. Kimi provides benchmark tables on its model card, but this page does not list specific benchmark scores until they are tied to a named source and test setup.

## Pricing notes

This page uses Alibaba Cloud Model Studio hosted pricing, not Moonshot direct API pricing. Alibaba lists `kimi-k2.7-code` in Model Studio's third-party model catalogue, and the billing page lists token prices by region/deployment scope.

For the International (Singapore) service, Alibaba lists `kimi-k2.7-code` at $0.95 per 1M input tokens and $4.00 per 1M output tokens. The calculator on this page uses those International rates.

Alibaba also lists lower Global rates in some regions, including $0.894 input and $3.713 output per 1M tokens. Those are useful context, but they are not the headline calculator rate on this page.

## Benchmarks and specs

The Hugging Face card for `moonshotai/Kimi-K2.7-Code` lists 1T total parameters, 32B activated parameters, 61 layers, 384 experts, 8 selected experts per token, and a 256K context length. It also says K2.7 Code supports image and video input.

The model card includes benchmark comparisons for coding and agentic tasks. This page does not list specific benchmark scores until they are tied to a named public source and test setup.

## Best fit

Kimi K2.7 Code is best for coding assistants, code-generation experiments, long-horizon software tasks, and comparisons where Moonshot's model is accessed through Alibaba Cloud rather than through a direct Moonshot account.

The model identity comes from Moonshot; the headline price shown here comes from Alibaba Cloud Model Studio.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
- [Kimi K2.7 Code on Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
