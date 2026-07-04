---
title: "Qwen3-Coder-480B-A35B-Instruct"
entry_type: "open-weight"
entry_badge: "Alibaba Cloud Model Studio hosted pricing"
context_label: "Native 256K context (1M with extrapolation)"
benchmark_note: "Benchmarks not shown until exact Qwen3-Coder evaluation source is verified"
parameters_note: "35B active parameters, model-card/provider-reported"
cost_input_1m: 1.5
cost_output_1m: 7.5
context_window: 262144
parameters_active: 35000000000
pricing_source_date: "2026-06-30"
pricing_model_version: "Current Alibaba Cloud Model Studio international pricing for qwen3-coder-480b-a35b-instruct; 0-32K token tier used for calculator; larger context tiers cost more"
cac_status: "Not publicly verified"
---
Qwen3-Coder-480B-A35B-Instruct is Alibaba/Qwen's large coding-focused open-weight MoE model, tracked here with Alibaba Cloud Model Studio hosted pricing for software-building and agentic coding comparisons.

## What this model is

Qwen describes Qwen3-Coder-480B-A35B-Instruct as the most powerful first variant in the Qwen3-Coder line: a 480B-parameter Mixture-of-Experts coding model with 35B active parameters. It is aimed at agentic coding, repo-scale work, tool use, and software engineering tasks rather than general chat alone.

This is the Qwen page to use when the question is specifically about coding-agent cost and capability, not general-purpose Qwen chat.

## Pricing notes

Alibaba Cloud Model Studio lists tiered International pricing for `qwen3-coder-480b-a35b-instruct`. The 0–32K token tier is $1.50 per 1M input tokens and $7.50 per 1M output tokens. The 32K–128K tier is $2.70 input and $13.50 output. The 128K–200K tier is $4.50 input and $22.50 output.

The calculator on this page uses the 0–32K tier by default because it is the lowest standard tier and the cleanest baseline for comparison. Longer-context coding tasks can cost more, so the tier must be checked before estimating real repo-scale agent runs.

This is Alibaba Cloud Model Studio hosted pricing, not OpenRouter or another reseller route.

## Benchmarks and specs

The Qwen3-Coder announcement describes the model as a 480B-parameter MoE model with 35B active parameters, native 256K context, and up to 1M context with extrapolation methods. The Hugging Face card also lists 480B total parameters and 35B activated parameters, and says the model supports only non-thinking mode.

The same Qwen3-Coder announcement frames the model around agentic coding and repo-scale tasks. This page does not list specific benchmark scores until they are tied to a named source, test setup, and comparison conditions.

## Best fit

Qwen3-Coder-480B-A35B-Instruct is best for coding assistant cost comparisons, long-context coding-agent experiments, tool-use workflows, and Qwen vs DeepSeek vs Kimi vs Claude/GPT cost comparisons.

The practical warning is that the headline tier may not match a long repo-scale run. Bigger context windows move into higher Alibaba pricing tiers.

## Sources

- [Alibaba Cloud Model Studio billing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
- [Alibaba Cloud Model Studio models](https://www.alibabacloud.com/help/en/model-studio/models)
- [Qwen3-Coder-480B on Hugging Face](https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct)
- [Qwen3-Coder announcement](https://qwenlm.github.io/blog/qwen3-coder/)
