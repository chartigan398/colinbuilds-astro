---
title: "DeepSeek-V4-Flash"
entry_type: "model"
entry_badge: "Current official DeepSeek API pricing"
context_label: "Current official context window"
benchmark_note: "Benchmarks not shown until exact DeepSeek-V4-Flash evaluation source is verified"
parameters_note: "Not publicly disclosed in current pricing page"
cost_input_1m: 0.44
cost_output_1m: 1.32
context_window: 1000000
pricing_source_date: "2026-08-25"
pricing_model_version: "DeepSeek-V4-Flash-0731 / deepseek-v4-flash. Calculator uses peak cache-miss input and peak output. Peak: cache-hit $0.014, cache-miss $0.44, output $1.32 per 1M. Off-peak is half: $0.007 / $0.22 / $0.66. Peak hours are 01:00-04:00 and 06:00-10:00 UTC, Monday through Friday."
pricing_note: "Calculator uses official DeepSeek peak cache-miss rates for deepseek-v4-flash: $0.44 input and $1.32 output per 1M tokens. Off-peak cache-miss is $0.22 / $0.66. Peak cache-hit input is $0.014/1M."
cac_status: "Not publicly verified"
---
DeepSeek-V4-Flash is a current official DeepSeek API route with 1M context, 384K maximum output, and peak/off-peak pricing that also splits cache-hit and cache-miss input.

## What this model is

DeepSeek-V4-Flash is one of DeepSeek's current API models listed on the official Models & Pricing page, with model version DeepSeek-V4-Flash-0731 and API ID `deepseek-v4-flash`. It is not the same thing as older DeepSeek-V3 launch pricing.

DeepSeek also lists `deepseek-v4-pro` and experimental `deepseek-v4-flash-vision-exp`. Older `deepseek-chat` and `deepseek-reasoner` compatibility names were retired after 2026-07-24.

## Pricing notes

DeepSeek lists prices per 1M tokens and now uses peak and off-peak rates. Off-peak rates are half of peak. Peak hours are 01:00–04:00 and 06:00–10:00 UTC, Monday through Friday. All other hours are off-peak.

For DeepSeek-V4-Flash, the official table lists:

- Cache-hit input: $0.007 off-peak / $0.014 peak
- Cache-miss input: $0.22 off-peak / $0.44 peak
- Output: $0.66 off-peak / $1.32 peak

The calculator on this page uses the peak cache-miss input price and peak output price as the default comparison, because that is the safer budget when you do not yet know whether prompts will hit cache or land in off-peak hours. Repeated-context or off-peak workloads can be substantially cheaper.

DeepSeek also warns that product prices may vary and recommends checking the pricing page regularly.

## Benchmarks and specs

DeepSeek's official pricing table lists DeepSeek-V4-Flash with a 1M context length and a maximum output of 384K tokens. The same table lists JSON Output, tool calls, Responses API, and Anthropic API support.

DeepSeek does not list parameter counts or benchmark scorecards for this route on the checked pricing page. This page does not list benchmark scores until a named evaluation source and test setup are verified.

## Best fit

DeepSeek-V4-Flash is best for cost-sensitive API comparisons, repeated-context workloads where caching may apply, and explanations of why “input price” can mean different things depending on cache hit versus cache miss and peak versus off-peak hours.

## Sources

- [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [DeepSeek-V4-Pro GA release / pricing change](https://api-docs.deepseek.com/news/news260813/)
