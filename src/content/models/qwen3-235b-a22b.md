---
title: "Qwen3-235B-A22B"
entry_type: "open-weight"
entry_badge: "Previous Qwen3 generation · still listed on Model Studio"
context_label: "Native 32K context (131K with YaRN scaling)"
benchmark_note: "Benchmarks not shown until exact Qwen3-235B-A22B evaluation source is verified"
parameters_note: "22B active parameters, model-card/provider-reported"
cost_input_1m: 0.7
cost_output_1m: 2.8
context_window: 32768
parameters_active: 22000000000
pricing_source_date: "2026-08-25"
pricing_model_version: "Alibaba Cloud Model Studio International pricing for qwen3-235b-a22b; input $0.70/1M, non-thinking output $2.80/1M, thinking output $8.40/1M. Still listed. Newer hosted Plus/Flash routes are qwen3.7-plus and qwen3.6-flash."
cac_status: "Not publicly verified"
---
Qwen3-235B-A22B is Alibaba/Qwen's large open-weight Mixture-of-Experts model for builders who want a serious China-model alternative to closed frontier APIs, with Alibaba Cloud Model Studio pricing used for practical cost comparison.

## What this model is

Qwen3-235B-A22B is one of the flagship Qwen3 MoE releases. The Hugging Face model card lists 235B total parameters and 22B activated parameters, which is why this page labels it as an MoE model rather than a dense 235B model.

Qwen3 is built around both thinking and non-thinking modes. In beginner terms, that means the same model family can be used for deeper reasoning-style answers or faster direct responses depending on how it is called.

## Pricing notes

Alibaba Cloud Model Studio lists `qwen3-235b-a22b` for the International service with separate output pricing for non-thinking and thinking modes. The listed input price is $0.70 per 1M tokens. Non-thinking output is $2.80 per 1M tokens, while thinking-mode output is $8.40 per 1M tokens.

The calculator on this page uses the non-thinking output price by default because it is the safer baseline for quick comparison against GPT-4o, Claude Sonnet, DeepSeek, GLM, and Mistral. Thinking-mode output can be materially more expensive, so it should be treated as a separate cost case rather than silently blended into the default calculator rate.

This is Alibaba Cloud Model Studio hosted pricing, not OpenRouter or another reseller route.

## Benchmarks and specs

The Hugging Face model card lists Qwen3-235B-A22B as 235B total parameters with 22B activated parameters. It also says Qwen3 natively supports context lengths up to 32,768 tokens and that Qwen validated performance up to 131,072 tokens using YaRN scaling.

The Qwen3 announcement says Qwen3 supports hybrid thinking modes and was released under the Apache 2.0 license. Qwen provides benchmark comparisons on its announcement and model card, but this page does not list specific benchmark scores until they are tied to a named source and test setup.

## Best fit

Qwen3-235B-A22B is best for China/open-weight ecosystem comparisons, explaining MoE active parameters to beginners, and comparing Alibaba-hosted Qwen pricing against DeepSeek, GLM, Kimi, GPT-4o, and Claude Sonnet.

MoE sizing is a useful lesson here: total parameters (235B) and activated parameters (22B) are not the same number, and thinking-mode output pricing is priced separately from normal quick-response output.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
- [Qwen3-235B-A22B on Hugging Face](https://huggingface.co/Qwen/Qwen3-235B-A22B)
- [Qwen3 announcement](https://qwenlm.github.io/blog/qwen3/)
