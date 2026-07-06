---
title: "Gemini 2.5 Pro"
entry_type: "model"
entry_badge: "Official Google Gemini API pricing"
context_label: "Official Google context window"
benchmark_note: "Benchmark panel intentionally not shown until exact public benchmark values are verified for Gemini 2.5 Pro."
parameters_note: "Not publicly disclosed"
cost_input_1m: 1.25
cost_output_1m: 10.00
context_window: 1048576
pricing_source_date: "2026-07-06"
pricing_model_version: "Google Gemini API gemini-2.5-pro standard paid tier for prompts up to 200K tokens; input $1.25/1M tokens and output $10.00/1M tokens including thinking tokens. Prompts over 200K tokens are listed at $2.50 input and $15.00 output per 1M tokens."
pricing_note: "Calculator uses official Google Gemini API standard paid-tier rates for prompts up to 200K tokens: $1.25 input and $10.00 output per 1M tokens. Longer prompts use higher listed rates; batch, caching, and grounding have separate listed prices; Flex and Priority are separate consumption options with terms to confirm before production estimates."
cac_status: "Not publicly verified"
---
Gemini 2.5 Pro is Google's advanced Gemini 2.5 API model for complex reasoning, coding, STEM work, and long-context analysis across large documents, datasets, and codebases.

## What this model is

Google lists the exact API model code as `gemini-2.5-pro`. The model page describes Gemini 2.5 Pro as a thinking model that can reason over complex problems in code, math, and STEM, and analyze large datasets, codebases, and documents using long context.

The official model page lists audio, images, video, text, and PDF as supported inputs, with text output. It also lists support for caching, code execution, file search, function calling, search grounding, structured outputs, thinking, URL context, Batch API, Flex inference, and Priority inference.

## Pricing notes

Google's official Gemini Developer API pricing page lists Gemini 2.5 Pro standard paid-tier pricing at $1.25 per 1M input tokens and $10.00 per 1M output tokens, including thinking tokens, for prompts up to 200K tokens.

For prompts over 200K tokens, the same official page lists higher standard rates: $2.50 per 1M input tokens and $15.00 per 1M output tokens. The calculator on this page uses the lower standard tier for prompts up to 200K tokens. Google also lists separate prices for batch, context caching, and grounding, while Flex inference and Priority inference are separate consumption options to confirm before estimating a full production bill.

## Benchmarks and specs

Google's model page lists `gemini-2.5-pro` with a 1,048,576 token input limit and a 65,536 token output limit. It lists the latest update as June 2025 and the knowledge cutoff as January 2025.

This page does not show a parameter count or public leaderboard score. Those numbers should only be shown when exact public sources are matched to this exact model identity.

## Best fit

Gemini 2.5 Pro is best for builders who need a stronger official Google API model than Gemini 2.5 Flash for coding help, reasoning-heavy assistants, long-document analysis, multimodal prompts, and workflows where the prompt may include large files or codebases.

It is also useful as a comparison point against lower-cost Gemini models because the official pricing has a clear break at 200K prompt tokens, which can change the real cost of long-context work.

## Sources

- [Google Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Google Gemini 2.5 Pro model page](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
- [Google Gemini API models](https://ai.google.dev/gemini-api/docs/models)
