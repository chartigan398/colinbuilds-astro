---
title: "GPT-5.6 Luna"
entry_type: "model"
entry_badge: "Current official OpenAI API pricing"
context_label: "OpenAI-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named source and test setup"
parameters_note: "OpenAI does not publish a parameter count for GPT-5.6 Luna in the checked model page"
cost_input_1m: 1
cost_output_1m: 6
pricing_source_date: "2026-07-14"
pricing_model_version: "GPT-5.6 Luna / gpt-5.6-luna; OpenAI standard short-context pricing row lists $1.00 input, $0.10 cached input, $1.25 cache writes, and $6.00 output per 1M tokens"
context_window: 1050000
cac_status: "Not publicly verified"
---
GPT-5.6 Luna is OpenAI's cost-sensitive GPT-5.6 API model for high-volume applications that still need the GPT-5.6 family rather than an older or unrelated model line.

## What this model is

OpenAI's model page describes GPT-5.6 Luna as a GPT-5.6 model designed for cost-sensitive, high-volume workloads. It roughly corresponds to the nano model tier used in earlier GPT-5 families.

The model supports text and image input with text output. OpenAI's GPT-5.6 guidance positions Luna as the efficient high-volume option below Terra and Sol.

## Pricing notes

The calculator on this page uses OpenAI's official standard short-context pricing row for `gpt-5.6-luna`: $1.00 per 1M input tokens and $6.00 per 1M output tokens.

OpenAI's pricing page also lists cached input at $0.10 per 1M tokens and cache writes at $1.25 per 1M tokens for the standard short-context row. The model page says prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full request. Those cached, cache-write, and long-context figures are noted here but are not used in the top-level calculator fields.

## Benchmarks and specs

OpenAI's model page lists GPT-5.6 Luna with a 1,050,000-token context window, a 128,000-token maximum output, and a Feb 16, 2026 knowledge cutoff. It also lists reasoning token support.

No benchmark score is shown until an exact benchmark source and model identity are matched to GPT-5.6 Luna.

## Best fit

GPT-5.6 Luna is best for high-volume assistants, extraction, classification, routing, lightweight coding support, and repeated agent steps where official OpenAI pricing needs to stay low.

Use Terra or Sol when the task needs a stronger GPT-5.6 tier, especially for complex reasoning, difficult coding, or quality-first analysis.

## Sources

- [OpenAI GPT-5.6 Luna model page](https://developers.openai.com/api/docs/models/gpt-5.6-luna)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI GPT-5.6 model guidance](https://developers.openai.com/api/docs/guides/latest-model)
