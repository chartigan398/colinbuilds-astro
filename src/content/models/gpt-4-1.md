---
title: "GPT-4.1"
entry_type: "model"
entry_badge: "Previous-generation OpenAI API model · still available"
context_label: "OpenAI-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named source and test setup"
parameters_note: "OpenAI does not publish a parameter count for GPT-4.1 in the checked model page"
cost_input_1m: 2
cost_output_1m: 8
pricing_source_date: "2026-08-25"
pricing_model_version: "GPT-4.1 / gpt-4.1; OpenAI model page lists standard pricing at $2.00 input, $0.50 cached input, and $8.00 output per 1M tokens. Still available; OpenAI recommends starting with GPT-5-family models for complex tasks."
pricing_note: "Calculator uses official OpenAI gpt-4.1 rates: $2.00 input and $8.00 output per 1M tokens. Cached input is $0.50/1M."
context_window: 1047576
cac_status: "Not publicly verified"
---
GPT-4.1 is OpenAI's still-available non-reasoning GPT-4.1 API model for instruction-following, tool calling, and long-context text or image-input work. It is previous-generation relative to GPT-5.6.

## What this model is

OpenAI's model page lists GPT-4.1 as the smartest non-reasoning model and identifies the model alias as `gpt-4.1`. The same page lists the snapshot `gpt-4.1-2025-04-14`.

GPT-4.1 should not be confused with GPT-4o. OpenAI's pricing page lists separate rows for `gpt-4.1`, `gpt-4o`, and `gpt-4o-2024-05-13`, with different prices.

## Pricing notes

The calculator on this page uses OpenAI's official standard pricing row for `gpt-4.1`: $2.00 per 1M input tokens and $8.00 per 1M output tokens.

OpenAI's pricing row also lists cached input at $0.50 per 1M tokens for `gpt-4.1`. The top-level calculator fields here use the standard input and output rates, not the cached-input, Batch, Flex, or Priority rates.

## Benchmarks and specs

OpenAI's model page lists GPT-4.1 with a 1,047,576-token context window, a 32,768-token maximum output, and a June 01, 2024 knowledge cutoff. It lists text and image as inputs and text as output.

No benchmark score is shown until an exact benchmark source and model identity are matched to GPT-4.1.

## Best fit

GPT-4.1 is best for API tasks that need strong instruction following, reliable tool calling, broad domain knowledge, image input, and a very large context window without using a reasoning model.

For complex tasks where OpenAI recommends a newer reasoning or flagship route, compare GPT-4.1 against the current GPT-5 family rather than treating it as the default top model.

## Sources

- [OpenAI GPT-4.1 model page](https://developers.openai.com/api/docs/models/gpt-4.1)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
