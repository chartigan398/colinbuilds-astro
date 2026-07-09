---
title: "Codestral"
entry_type: "model"
entry_badge: "Current official Mistral API pricing"
context_label: "Mistral-published context window"
benchmark_note: "No benchmark panel added until exact benchmark values are tied to a named Mistral source and test setup"
parameters_note: "Mistral's checked overview does not publish a parameter count for the current Codestral API row"
cost_input_1m: 0.30
cost_output_1m: 0.90
pricing_source_date: "2026-07-09"
pricing_model_version: "Codestral / codestral-latest on Mistral API pricing; Mistral model card lists current Codestral 25.08 API endpoint as codestral-2508"
context_window: 128000
cac_status: "Not publicly verified"
---
Codestral is Mistral's coding-focused API model for low-latency code completion, fill-in-the-middle, correction, and test-generation tasks.

## What this model is

Mistral's API pricing page lists the current pricing row as Codestral with the model ID `codestral-latest`. Mistral's live model card lists the current named Codestral version as Codestral 25.08 with the API endpoint `codestral-2508`.

Mistral describes Codestral as a coding model optimized for low-latency, high-frequency completion, fill-in-the-middle, and code generation tasks. The pricing page and model card identify it as the current Codestral API route.

## Pricing notes

The calculator on this page uses Mistral's official API pricing row for Codestral / `codestral-latest`: $0.30 per 1M input tokens and $0.90 per 1M output tokens.

This is Mistral official API pricing, not an OpenRouter, cloud marketplace, or reseller route. The exact dated model ID checked in Mistral's model card is `codestral-2508`; the pricing page presents the current API pricing row under `codestral-latest`.

## Benchmarks and specs

Mistral's model card lists Codestral 25.08 with a 128k-token context window and the API endpoint `codestral-2508`.

No benchmark score is shown until an exact benchmark source and model identity are matched to Codestral 25.08 or to the pricing alias used by Mistral.

## Best fit

Codestral is best for coding assistants, editor completions, fill-in-the-middle workflows, code correction, and test generation where a dedicated Mistral coding API route is preferred.

For broad multimodal or general assistant work, compare it against Mistral Medium, Mistral Large, or Mistral Small rather than treating Codestral as the general-purpose default.

## Sources

- [Mistral API pricing](https://mistral.ai/pricing/api/)
- [Mistral Codestral 25.08 model card](https://docs.mistral.ai/models/model-cards/codestral-25-08)
- [Mistral models overview](https://docs.mistral.ai/models/overview)
