---
title: "DeepSeek-V4-Pro"
entry_type: "model"
entry_badge: "Current official DeepSeek API pricing"
context_label: "Current official context window"
benchmark_note: "Benchmarks not shown until exact DeepSeek-V4-Pro evaluation source is verified"
parameters_note: "DeepSeek V4 Preview release states 1.6T total parameters and 49B activated parameters for DeepSeek-V4-Pro"
cost_input_1m: 1.32
cost_output_1m: 3.96
context_window: 1000000
parameters_active: 49000000000
pricing_source_date: "2026-08-25"
pricing_model_version: "DeepSeek-V4-Pro-0813 / deepseek-v4-pro. Calculator uses peak cache-miss input and peak output. Peak: cache-hit $0.044, cache-miss $1.32, output $3.96 per 1M. Off-peak is half: $0.022 / $0.66 / $1.98. Peak hours are 01:00-04:00 and 06:00-10:00 UTC, Monday through Friday."
pricing_note: "Calculator uses official DeepSeek peak cache-miss rates for deepseek-v4-pro: $1.32 input and $3.96 output per 1M tokens. Off-peak cache-miss is $0.66 / $1.98. Peak cache-hit input is $0.044/1M."
cac_status: "Not publicly verified"
---
DeepSeek-V4-Pro is a current official DeepSeek API route for the V4 family, with a 1M context window, 384K maximum output, and official peak/off-peak pricing that separates cache-hit and cache-miss input tokens.

## What this model is

DeepSeek-V4-Pro is the current official DeepSeek API model ID from the V4 lineup. The exact API model ID is `deepseek-v4-pro`, currently serving DeepSeek-V4-Pro-0813 from `https://api.deepseek.com` for OpenAI-format calls and `https://api.deepseek.com/anthropic` for Anthropic-format calls.

DeepSeek's V4 Preview announcement and model card source the open-weight architecture and parameter claims. DeepSeek's API docs source the hosted API ID, pricing, context, and max-output claims. The current pricing table does not split prices by thinking mode, so this page does not invent a separate thinking price.

## Pricing notes

DeepSeek lists prices per 1M tokens and now uses peak and off-peak rates. Off-peak rates are half of peak. Peak hours are 01:00–04:00 and 06:00–10:00 UTC, Monday through Friday. The new prices took effect at 16:00 UTC on August 16, 2026.

For DeepSeek-V4-Pro, the official table lists:

- Cache-hit input: $0.022 off-peak / $0.044 peak
- Cache-miss input: $0.66 off-peak / $1.32 peak
- Output: $1.98 off-peak / $3.96 peak

The calculator on this page uses the peak cache-miss input price and peak output price as the default comparison, because that is the safer budget when you do not yet know whether prompts will hit cache or land in off-peak hours.

## Benchmarks and specs

DeepSeek's official pricing table lists DeepSeek-V4-Pro with a 1M context length and a maximum output of 384K tokens. The same table lists JSON Output, Tool Calls, Chat Prefix Completion, and FIM Completion in non-thinking mode.

The V4 preview release states that DeepSeek-V4-Pro has 1.6T total parameters and 49B activated parameters, and that the V4 series uses open weights under the MIT license. This page does not list benchmark scores until a named evaluation source and test setup are verified.

## Best fit

DeepSeek-V4-Pro is best for builders who want the stronger current DeepSeek API route, especially where long context, tool use, and reasoning mode matter more than the lowest possible token price.

It is also a useful comparison point against V4-Flash: both share the same official context headline, but V4-Pro is the larger route and has higher official token prices.

## Sources

- [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [DeepSeek-V4-Pro GA Release](https://api-docs.deepseek.com/news/news260813/)
- [DeepSeek V4 Preview Release](https://api-docs.deepseek.com/news/news260424)
- [DeepSeek Thinking Mode guide](https://api-docs.deepseek.com/guides/thinking_mode)
- [DeepSeek-V4-Pro Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
