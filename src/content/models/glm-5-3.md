---
title: "GLM-5.3"
entry_type: "open-weight"
entry_badge: "Current official Z.ai API pricing"
context_label: "Official context window"
benchmark_note: "Benchmarks not shown until exact GLM-5.3 evaluation source is verified"
parameters_note: "Z.ai says GLM-5.3 uses the same base model as GLM-5.2; a separate public parameter count was not verified on the checked GLM-5.3 docs"
cost_input_1m: 1.4
cost_output_1m: 4.4
context_window: 1048576
pricing_source_date: "2026-08-25"
pricing_model_version: "Current Z.ai official GLM-5.3 API pricing; input $1.40/1M, cached input $0.26/1M, output $4.40/1M. Cached-input storage listed as limited-time free."
pricing_note: "Calculator uses official Z.ai GLM-5.3 rates: $1.40 input and $4.40 output per 1M tokens. Cached input is $0.26/1M."
cac_status: "Not publicly verified"
---
GLM-5.3 is Z.ai's current flagship text API model. Z.ai says it uses the same base model as GLM-5.2, with post-training improvements aimed at complex software engineering and agent work.

## What this model is

Z.ai lists the API model ID as `glm-5.3`. The GLM-5.3 docs describe a 1M-token context window, 128K maximum output, text-only inputs, and reasoning that is always enabled, with `reasoning_effort` of `low`, `high`, or `max`. Disabling reasoning is not supported.

GLM-5.2 remains listed on Z.ai's pricing page at the same token rates and is kept in this directory as the previous snapshot.

## Pricing notes

Z.ai's pricing page lists GLM-5.3 at $1.40 per 1M input tokens, $0.26 per 1M cached input tokens, limited-time free cached-input storage, and $4.40 per 1M output tokens.

The calculator on this page uses the standard input and output prices: $1.40 input and $4.40 output per 1M tokens. Cached-input pricing is listed separately because it depends on workload shape.

Mistral's API catalog also hosts GLM 5.2 at the same $1.40 / $4.40 token rates under `zai-glm-5-2`. This page uses first-party Z.ai pricing for GLM-5.3.

## Benchmarks and specs

Z.ai's GLM-5.3 documentation lists a 1M context length and 128K maximum output tokens, text input and text output, streaming, function calling, and always-on reasoning.

This page does not list specific benchmark scores until they are tied to a named source and test setup. Z.ai's own coding-benchmark claims are therefore omitted here.

## Best fit

GLM-5.3 is best for current Z.ai flagship comparisons on long-horizon coding and agent tasks where official Z.ai API pricing is required.

For the previous snapshot at the same token price, compare against GLM-5.2.

## Sources

- [GLM-5.3 documentation](https://docs.z.ai/guides/llm/glm-5.3)
- [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
