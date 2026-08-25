---
title: "Grok 4.6"
entry_type: "model"
entry_badge: "Official xAI API pricing"
context_label: "Official xAI context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Grok 4.6."
parameters_note: "Not publicly disclosed"
cost_input_1m: 2.00
cost_output_1m: 6.00
context_window: 500000
pricing_source_date: "2026-08-25"
pricing_model_version: "xAI grok-4.6 official API pricing for prompts under 200k tokens: $2.00 input, $0.50 cached input, and $6.00 output per 1M tokens. Prompts at or above 200k tokens are $4.00 / $1.00 / $12.00 for the full request. Context window 500k tokens."
pricing_note: "Calculator uses official xAI grok-4.6 rates for prompts under 200k tokens: $2.00 input and $6.00 output per 1M tokens. Cached input is $0.50/1M. Requests whose prompt reaches 200k tokens are billed at the higher rate for all tokens."
cac_status: "Not publicly verified"
---
Grok 4.6 is xAI's current flagship API model for code and general work, with agentic tool calling, configurable reasoning, and official xAI token pricing.

## What this model is

xAI lists the exact model name as `grok-4.6`. The models overview describes it as the flagship model for code and everything else: agentic tool calling, minimal hallucinations, and configurable reasoning. xAI's model-choice guidance says to use Grok 4.6 for code and chat.

The official model page lists text and image input with text output, a 500,000-token context window, function calling, structured outputs, and reasoning. Batch API is listed as not supported. The knowledge cutoff is February 1, 2026.

Grok 4.3 remains available as a previous Grok 4-line route with a larger 1M context window and different token prices.

## Pricing notes

xAI's official Grok 4.6 model page lists API pricing for prompts under 200k tokens at $2.00 per 1M input tokens, $0.50 per 1M cached input tokens, and $6.00 per 1M output tokens.

For prompts at or above 200k tokens, the same page lists $4.00 input, $1.00 cached input, and $12.00 output per 1M tokens, billed at the higher rate for all tokens in the request.

The calculator on this page uses the under-200k uncached input and output rates: $2.00 input and $6.00 output per 1M tokens.

## Benchmarks and specs

xAI's model page lists Grok 4.6 with a 500,000 token context window, text and image input, text output, function calling, structured outputs, and reasoning. Batch API is not supported.

This page does not show a parameter count or public benchmark score. Those numbers should only be shown when exact public sources are matched to `grok-4.6` specifically.

## Best fit

Grok 4.6 is best for builders who want xAI's current flagship API route for coding, assistants, tool-using agents, and general knowledge work.

Use Grok 4.3 when the job needs the older 1M-context Grok 4.3 snapshot. Use Grok Build 0.1 when the job is specifically xAI's coding-oriented Build route.

## Sources

- [xAI Grok 4.6 model page](https://docs.x.ai/developers/models/grok-4.6)
- [xAI models overview](https://docs.x.ai/docs/models)
