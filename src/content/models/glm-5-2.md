---
title: "GLM-5.2"
entry_type: "open-weight"
entry_badge: "Current official Z.ai API pricing"
context_label: "Official context window"
benchmark_note: "Benchmarks not shown until exact GLM-5.2 evaluation source is attached"
parameters_note: "40B active parameters, Z.ai/GLM-5 source-attributed"
cost_input_1m: 1.4
cost_output_1m: 4.4
context_window: 1048576
parameters_active: 40000000000
pricing_source_date: "2026-06-30"
pricing_model_version: "Current Z.ai official GLM-5.2 API pricing; cached input listed separately at $0.26/1M"
cac_status: "Not publicly verified"
---
GLM-5.2 is the ColinBuilds reference point for Z.ai's long-context open-weight model lane: a China-model ecosystem entry with official Z.ai API pricing, a 1M context claim, and a public Hugging Face release.

## What this model is

Z.ai describes GLM-5.2 as a flagship model built for long-horizon tasks. The official docs position it around project-scale engineering context, long-running coding and refactoring work, and stronger stability across multi-step tasks.

For ColinBuilds readers, GLM-5.2 is useful because it lets us compare a major Chinese open-weight/API model against Qwen, DeepSeek, GPT-4o, Claude Sonnet, Mistral, and Kimi without mixing official API pricing with third-party reseller pricing.

## Pricing notes

Z.ai's pricing page lists text-model prices per 1M tokens. For GLM-5.2 it lists $1.40 per 1M input tokens, $0.26 per 1M cached input tokens, limited-time free cached-input storage, and $4.40 per 1M output tokens.

The ColinBuilds calculator uses the standard input and output prices: $1.40 input and $4.40 output per 1M tokens. Cached-input pricing is listed separately because it depends on workload shape and should not be silently blended into the default comparison.

## Benchmarks and specs

Z.ai's GLM-5.2 documentation lists a 1M context length and 128K maximum output tokens. The same docs describe text input and text output, multiple thinking modes, streaming output, context caching, and structured output support.

The Hugging Face model page lists the public `zai-org/GLM-5.2` repository and shows a total model size of 753B parameters. This is separate from any active-parameter figure shown elsewhere. This page keeps benchmark claims conservative: Z.ai publishes coding and long-horizon benchmark comparisons, but ColinBuilds should only surface exact benchmark panels when the specific benchmark source and evaluation settings are attached.

## Best fit

GLM-5.2 is best for long-context engineering tasks, codebase-level analysis, refactoring plans, and China-model ecosystem comparisons where official Z.ai API pricing matters.

For ColinBuilds readers, it belongs in the “long-context builder model” bucket: the useful question is whether its 1M context and coding focus are worth the higher official API price compared with cheaper DeepSeek/Qwen-style routes.

## Sources

- [GLM-5.2 announcement](https://z.ai/blog/glm-5.2)
- [GLM-5.2 documentation](https://docs.z.ai/guides/llm/glm-5.2)
- [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
- [GLM-5.2 on Hugging Face](https://huggingface.co/zai-org/GLM-5.2)
