---
title: "GPT-5.6 Terra"
entry_type: "model"
entry_badge: "Current official OpenAI API pricing"
context_label: "OpenAI-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named source and test setup"
parameters_note: "OpenAI does not publish a parameter count for GPT-5.6 Terra in the checked model page"
cost_input_1m: 2.5
cost_output_1m: 15
pricing_source_date: "2026-07-14"
pricing_model_version: "GPT-5.6 Terra / gpt-5.6-terra; OpenAI standard short-context pricing row lists $2.50 input, $0.25 cached input, $3.125 cache writes, and $15.00 output per 1M tokens"
context_window: 1050000
cac_status: "Not publicly verified"
---
GPT-5.6 Terra is OpenAI's balanced GPT-5.6 API model for teams that want strong GPT-5.6 capability at a lower official token price than the Sol tier.

## What this model is

OpenAI's model page describes GPT-5.6 Terra as a GPT-5.6 model designed for workloads that balance intelligence and cost. It roughly corresponds to the mini model tier used in earlier GPT-5 families.

The model supports text and image input with text output. OpenAI's GPT-5.6 guidance positions Terra as the lower-price strong-performance option between flagship Sol and high-volume Luna.

## Pricing notes

The calculator on this page uses OpenAI's official standard short-context pricing row for `gpt-5.6-terra`: $2.50 per 1M input tokens and $15.00 per 1M output tokens.

OpenAI's pricing page also lists cached input at $0.25 per 1M tokens and cache writes at $3.125 per 1M tokens for the standard short-context row. The model page says prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full request. Those cached, cache-write, and long-context figures are noted here but are not used in the top-level calculator fields.

## Benchmarks and specs

OpenAI's model page lists GPT-5.6 Terra with a 1,050,000-token context window, a 128,000-token maximum output, and a Feb 16, 2026 knowledge cutoff. It also lists reasoning token support.

No benchmark score is shown until an exact benchmark source and model identity are matched to GPT-5.6 Terra.

## Best fit

GPT-5.6 Terra is best for production assistants, coding workflows, research helpers, document analysis, and agent steps where GPT-5.6 quality is useful but Sol-level pricing is not needed for every request.

Use Sol for the hardest quality-first tasks, and use Luna when the priority is very high volume at the lowest GPT-5.6 tier price.

## Sources

- [OpenAI GPT-5.6 Terra model page](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
- [OpenAI GPT-5.6 model guidance](https://developers.openai.com/api/docs/guides/latest-model)
