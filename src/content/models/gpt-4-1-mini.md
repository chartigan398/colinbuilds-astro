---
title: "GPT-4.1 mini"
entry_type: "model"
entry_badge: "Previous-generation OpenAI API model · still available"
context_label: "OpenAI-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named source and test setup"
parameters_note: "OpenAI does not publish a parameter count for GPT-4.1 mini in the checked model page"
cost_input_1m: 0.40
cost_output_1m: 1.60
pricing_source_date: "2026-08-25"
pricing_model_version: "GPT-4.1 mini / gpt-4.1-mini; OpenAI model page lists standard pricing at $0.40 input, $0.10 cached input, and $1.60 output per 1M tokens. Still available; OpenAI recommends starting with GPT-5 Mini for more complex tasks."
pricing_note: "Calculator uses official OpenAI gpt-4.1-mini rates: $0.40 input and $1.60 output per 1M tokens. Cached input is $0.10/1M."
context_window: 1047576
cac_status: "Not publicly verified"
---
GPT-4.1 mini is OpenAI's still-available smaller, faster GPT-4.1-family API model for instruction-following, tool calling, and long-context text or image-input work at a lower price than GPT-4.1. It is previous-generation relative to GPT-5.6 Luna.

## What this model is

OpenAI's model page lists GPT-4.1 mini as the smaller, faster version of GPT-4.1 and identifies the model alias as `gpt-4.1-mini`. The same page lists the snapshot `gpt-4.1-mini-2025-04-14`.

GPT-4.1 mini is a separate model from GPT-4.1 and GPT-4o. OpenAI's pricing page lists separate rows for `gpt-4.1-mini`, `gpt-4.1`, `gpt-4o`, and `gpt-4o-mini`, with different prices.

## Pricing notes

The calculator on this page uses OpenAI's official standard pricing row for `gpt-4.1-mini`: $0.40 per 1M input tokens and $1.60 per 1M output tokens.

OpenAI's pricing row also lists cached input at $0.10 per 1M tokens for `gpt-4.1-mini`. The top-level calculator fields here use the standard input and output rates, not the cached-input, Batch, Flex, or Priority rates.

## Benchmarks and specs

OpenAI's model page lists GPT-4.1 mini with a 1,047,576-token context window, a 32,768-token maximum output, and a June 01, 2024 knowledge cutoff. It lists text and image as inputs and text as output.

No benchmark score is shown until an exact benchmark source and model identity are matched to GPT-4.1 mini.

## Best fit

GPT-4.1 mini is best for API tasks that need GPT-4.1-style instruction following, tool calling, image input, and a very large context window at lower cost and higher speed than GPT-4.1.

For more complex tasks where OpenAI recommends a newer mini route, compare GPT-4.1 mini against the current GPT-5 mini family rather than treating it as the default current mini model.

## Sources

- [OpenAI GPT-4.1 mini model page](https://developers.openai.com/api/docs/models/gpt-4.1-mini)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
