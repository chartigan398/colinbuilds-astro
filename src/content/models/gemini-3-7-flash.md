---
title: "Gemini 3.7 Flash"
entry_type: "model"
entry_badge: "Official Google Gemini API pricing · promotional through 2026-12-31"
context_label: "Official Google input token limit"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Gemini 3.7 Flash."
parameters_note: "Not publicly disclosed"
cost_input_1m: 0.75
cost_output_1m: 3.75
context_window: 1048576
pricing_source_date: "2026-08-25"
pricing_model_version: "Google Gemini API gemini-3.7-flash standard paid tier. Current listed rates through 2026-12-31: $0.75 input and $3.75 output per 1M tokens including thinking tokens. Starting 2027-01-01: $1.50 input and $7.50 output. Context cache $0.075/1M through 2026-12-31, then $0.15/1M. Calculator uses the current promotional standard rates, not the 2027 rates."
pricing_note: "Calculator uses official Google Gemini API standard paid-tier rates currently in effect through 2026-12-31: $0.75 input and $3.75 output per 1M tokens. Google lists higher standard rates from 2027-01-01. Batch, Flex, Priority, caching, storage, and grounding are separate."
cac_status: "Not publicly verified"
---
Gemini 3.7 Flash is Google's latest Flash-class Gemini API model for agentic workflows and multimodal reasoning. Google describes it as the most capable Flash model in the current Gemini 3 series.

## What this model is

Google lists the stable API model code as `gemini-3.7-flash`. The official model page describes Gemini 3.7 Flash as the next iteration in the Gemini 3 series of highly capable, natively multimodal, reasoning models.

The model page lists text, image, video, audio, and PDF as supported inputs, with text output. It lists support for caching, code execution, computer use in preview, file search, function calling, Google Maps grounding, search grounding, structured outputs, thinking (low, medium, high), URL context, Batch API, Flex inference, and Priority inference. Image generation and the Live API are not listed as supported for this model. The latest update is listed as August 2026.

Gemini 3.5 Flash remains available at a different, non-promotional standard price.

## Pricing notes

Google's official Gemini Developer API pricing page lists Gemini 3.7 Flash standard paid-tier pricing at $0.75 per 1M input tokens and $3.75 per 1M output tokens, including thinking tokens, through December 31, 2026.

The same page lists $1.50 input and $7.50 output per 1M tokens starting January 1, 2027. Context caching is listed at $0.075 per 1M tokens through December 31, 2026, then $0.15, plus storage billed per hour.

The calculator on this page uses the current promotional standard rates in effect through December 31, 2026: $0.75 input and $3.75 output per 1M tokens. It does not silently store the 2027 rates as if they were already in force. Batch, Flex, and Priority have separate official rows.

## Benchmarks and specs

Google's model page lists `gemini-3.7-flash` with a 1,048,576 token input limit and a 65,536 token output limit.

This page does not show a parameter count or public leaderboard score. Those numbers should only be shown when exact public sources are matched to this exact model identity and test setup.

## Best fit

Gemini 3.7 Flash is best for builders who want Google's current Flash API model for agentic product features, coding loops, multimodal assistants, and long-context work at the current promotional Flash price.

Compare against Gemini 3.5 Flash when you need the older Flash snapshot's listed $1.50/$9.00 standard rates, or against Gemini 3.1 Flash-Lite when cost and throughput matter more than the newest Flash tier.

## Sources

- [Google Gemini 3.7 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.7-flash)
- [Google Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
