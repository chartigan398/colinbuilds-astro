---
title: "GPT-5.6 Sol"
entry_type: "model"
entry_badge: "Current official OpenAI API pricing"
context_label: "OpenAI-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named source and test setup"
parameters_note: "OpenAI does not publish a parameter count for GPT-5.6 Sol in the checked model page"
cost_input_1m: 5
cost_output_1m: 30
pricing_source_date: "2026-07-14"
pricing_model_version: "GPT-5.6 Sol / gpt-5.6-sol; bare gpt-5.6 alias routes to gpt-5.6-sol; OpenAI standard short-context pricing row lists $5.00 input, $0.50 cached input, $6.25 cache writes, and $30.00 output per 1M tokens"
context_window: 1050000
cac_status: "Not publicly verified"
---
GPT-5.6 Sol is OpenAI's flagship GPT-5.6 API model for complex professional work, long-context tasks, and tool-heavy workflows where capability matters more than choosing the cheapest tier.

## What this model is

OpenAI's model page describes GPT-5.6 Sol as the frontier model in the GPT-5.6 family. It is the Sol tier behind the bare `gpt-5.6` alias, so requests sent to `gpt-5.6` route to GPT-5.6 Sol.

The model supports text and image input with text output. OpenAI's GPT-5.6 guidance says Sol is the flagship-capability option, while Terra targets a balance of intelligence and cost and Luna targets efficient high-volume work.

## Pricing notes

The calculator on this page uses OpenAI's official standard short-context pricing row for `gpt-5.6-sol`: $5.00 per 1M input tokens and $30.00 per 1M output tokens.

OpenAI's pricing page also lists cached input at $0.50 per 1M tokens and cache writes at $6.25 per 1M tokens for the standard short-context row. The model page says prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full request. Those cached, cache-write, and long-context figures are noted here but are not used in the top-level calculator fields.

## Benchmarks and specs

OpenAI's model page lists GPT-5.6 Sol with a 1,050,000-token context window, a 128,000-token maximum output, and a Feb 16, 2026 knowledge cutoff. It also lists reasoning token support.

No benchmark score is shown until an exact benchmark source and model identity are matched to GPT-5.6 Sol.

## Best fit

GPT-5.6 Sol is best for demanding API work: complex coding, deep analysis, long-document reasoning, agentic workflows, and applications where the strongest GPT-5.6 tier is worth the higher token price.

Use GPT-5.6 Terra or GPT-5.6 Luna when the workload is high-volume or cost-sensitive enough that the lower official OpenAI pricing matters more than choosing the flagship tier.

## Sources

- [OpenAI GPT-5.6 Sol model page](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI GPT-5.6 model guidance](https://developers.openai.com/api/docs/guides/latest-model)
