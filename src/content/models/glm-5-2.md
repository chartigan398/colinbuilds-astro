---
title: "GLM-5.2"
entry_type: "open-weight"
entry_badge: "Current official Z.ai API pricing"
context_label: "Official context window"
benchmark_note: "Benchmarks not shown until exact GLM-5.2 evaluation source is verified"
parameters_note: "753B total parameters on Hugging Face; active-parameter count not verified in checked live sources"
cost_input_1m: 1.4
cost_output_1m: 4.4
context_window: 1048576

pricing_source_date: "2026-06-30"
pricing_model_version: "Current Z.ai official GLM-5.2 API pricing; cached input listed separately at $0.26/1M"
cac_status: "Not publicly verified"
---
GLM-5.2 is Z.ai's long-context open-weight model: a China-model ecosystem entry with official Z.ai API pricing, a 1M context claim, and a public Hugging Face release.

## What this model is

Z.ai describes GLM-5.2 as a flagship model built for long-horizon tasks. The official docs position it around project-scale engineering context, long-running coding and refactoring work, and stronger stability across multi-step tasks.

GLM-5.2 is useful for comparing a major Chinese open-weight/API model against Qwen, DeepSeek, GPT-4o, Claude Sonnet, Mistral, and Kimi on official API pricing rather than third-party reseller routes.

## Pricing notes

Z.ai's pricing page lists text-model prices per 1M tokens. For GLM-5.2 it lists $1.40 per 1M input tokens, $0.26 per 1M cached input tokens, limited-time free cached-input storage, and $4.40 per 1M output tokens.

The calculator on this page uses the standard input and output prices: $1.40 input and $4.40 output per 1M tokens. Cached-input pricing is listed separately because it depends on workload shape and should not be silently blended into the default comparison.

## Benchmarks and specs

Z.ai's GLM-5.2 documentation lists a 1M context length and 128K maximum output tokens. The same docs describe text input and text output, multiple thinking modes, streaming output, context caching, and structured output support.

The Hugging Face model page lists the public `zai-org/GLM-5.2` repository and shows a total model size of 753B parameters. The checked Z.ai docs and Hugging Face page do not confirm an active-parameter count, so this page does not show one. Z.ai provides coding and long-horizon benchmark comparisons in its docs, but this page does not list specific benchmark scores until they are tied to a named source and test setup.

## Best fit

GLM-5.2 is best for long-context engineering tasks, codebase-level analysis, refactoring plans, and China-model ecosystem comparisons where official Z.ai API pricing matters.

The practical question is whether its 1M context and coding focus are worth the higher official API price compared with cheaper DeepSeek or Qwen-style routes.

## Sources

- [GLM-5.2 announcement](https://z.ai/blog/glm-5.2)
- [GLM-5.2 documentation](https://docs.z.ai/guides/llm/glm-5.2)
- [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
- [GLM-5.2 on Hugging Face](https://huggingface.co/zai-org/GLM-5.2)
