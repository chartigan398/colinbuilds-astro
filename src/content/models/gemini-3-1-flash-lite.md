---
title: "Gemini 3.1 Flash-Lite"
entry_type: "model"
entry_badge: "Official Google Gemini API pricing"
context_label: "Official Google input token limit"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Gemini 3.1 Flash-Lite."
parameters_note: "Not publicly disclosed"
cost_input_1m: 0.25
cost_output_1m: 1.50
context_window: 1048576
pricing_source_date: "2026-07-17"
pricing_model_version: "Google Gemini API gemini-3.1-flash-lite standard paid tier; text/image/video input $0.25/1M tokens, audio input $0.50/1M tokens, and output $1.50/1M tokens including thinking tokens. Batch, Flex, Priority, context caching, storage, Google Search grounding, and Google Maps grounding have separate official rates."
pricing_note: "Calculator uses official Google Gemini API standard paid-tier text input/output rates: $0.25 input and $1.50 output per 1M tokens. Audio input, Batch, Flex, Priority, context caching, storage, Google Search grounding, and Google Maps grounding are separate."
cac_status: "Not publicly verified"
---
Gemini 3.1 Flash-Lite is Google’s low-latency, low-cost Gemini 3 API model for high-volume lightweight tasks where throughput and budget matter more than using the strongest Gemini route.

## What this model is

Google lists the stable API model code as `gemini-3.1-flash-lite`. The official model page describes Gemini 3.1 Flash-Lite as a cost-effective multimodal model optimized for high-frequency lightweight tasks, high-volume agentic workflows, simple data extraction, and applications where latency and API cost are the main constraints.

The model page lists text, image, video, audio, and PDF as supported inputs, with text output. It also lists support for caching, code execution, file search, function calling, Google Maps grounding, search grounding, structured outputs, thinking, URL context, Batch API, Flex inference, and Priority inference. Computer use, image generation, and the Live API are not listed as supported for this model.

## Pricing notes

Google’s official Gemini Developer API pricing page lists Gemini 3.1 Flash-Lite standard paid-tier pricing at $0.25 per 1M text, image, or video input tokens; $0.50 per 1M audio input tokens; and $1.50 per 1M output tokens, with output pricing including thinking tokens.

The calculator on this page uses the standard paid-tier text input/output rates: $0.25 input and $1.50 output per 1M tokens. Audio input is a separate Google-listed rate and is not covered by the text calculator field. Google also lists separate official rates for Batch, Flex, Priority, context caching, storage, Google Search grounding, and Google Maps grounding, so those should be checked separately before estimating a full production bill.

## Benchmarks and specs

Google’s model page lists `gemini-3.1-flash-lite` with a 1,048,576 token input limit and a 65,536 token output limit. It lists the latest update as May 2026 and the knowledge cutoff as January 2025.

This page does not show a parameter count or public leaderboard score. Those numbers should only be shown when exact public sources are matched to this exact model identity and test setup.

## Best fit

Gemini 3.1 Flash-Lite is best for builders who need a cheap official Google API model for high-volume translation, transcription-style text extraction, classification, simple data processing, support-message handling, and other tasks where fast, low-cost throughput matters.

It is also useful as a baseline for deciding whether a workflow really needs a stronger Flash or Pro model. If the job is repetitive, lightweight, and mostly text output, Flash-Lite may be the cheaper starting point.

## Sources

- [Google Gemini 3.1 Flash-Lite model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)
- [Google Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
