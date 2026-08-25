---
title: "Gemini 3.5 Flash"
entry_type: "model"
entry_badge: "Previous Flash generation · still available"
context_label: "Official Google input token limit"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Gemini 3.5 Flash."
parameters_note: "Not publicly disclosed"
cost_input_1m: 1.50
cost_output_1m: 9.00
context_window: 1048576
pricing_source_date: "2026-08-25"
pricing_model_version: "Google Gemini API gemini-3.5-flash standard paid tier; input $1.50/1M tokens and output $9.00/1M tokens including thinking tokens. Still available. Google's latest Flash model is gemini-3.7-flash."
pricing_note: "Calculator uses official Google Gemini API standard paid-tier text input/output rates: $1.50 input and $9.00 output per 1M tokens. Batch, Flex, Priority, context caching, storage, Google Search grounding, and Google Maps grounding are separate."
cac_status: "Not publicly verified"
---
Gemini 3.5 Flash is Google’s fast Gemini 3 model for agentic API work where the app needs strong intelligence, multimodal input, long context, and lower latency than a heavier flagship route.

## What this model is

Google lists the stable API model code as `gemini-3.5-flash`. The official model page describes Gemini 3.5 Flash as built for real-world tasks, sub-agent deployment, multi-step workflows, long-horizon tasks, and rapid agentic loops involving complex coding cycles.

The model page lists text, image, video, audio, and PDF as supported inputs, with text output. It also lists support for caching, code execution, file search, function calling, Google Maps grounding, search grounding, structured outputs, thinking, URL context, Batch API, Flex inference, and Priority inference. Computer use is listed as supported in preview. Image generation and the Live API are not listed as supported for this model.

## Pricing notes

Google’s official Gemini Developer API pricing page lists Gemini 3.5 Flash standard paid-tier pricing at $1.50 per 1M input tokens and $9.00 per 1M output tokens, with output pricing including thinking tokens.

The calculator on this page uses the standard paid-tier text input/output rates: $1.50 input and $9.00 output per 1M tokens. Google also lists separate official rates for Batch, Flex, Priority, context caching, storage, Google Search grounding, and Google Maps grounding, so those should be checked separately before estimating a full production bill.

## Benchmarks and specs

Google’s model page lists `gemini-3.5-flash` with a 1,048,576 token input limit and a 65,536 token output limit. It lists the latest update as May 2026 and the knowledge cutoff as January 2025.

This page does not show a parameter count or public leaderboard score. Those numbers should only be shown when exact public sources are matched to this exact model identity and test setup.

## Best fit

Gemini 3.5 Flash is best for builders who want a current official Google API model for agentic product features, coding loops, multimodal assistants, long-context document work, and workflows that need speed without dropping to the cheapest lightweight tier.

It is also a useful comparison point against Gemini 3.1 Flash-Lite: Flash costs more, but Google positions it for stronger intelligence and more complex agentic work.

## Sources

- [Google Gemini 3.5 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
- [Google Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
