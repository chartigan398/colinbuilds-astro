---
title: "DeepSeek-V4-Pro"
entry_type: "model"
entry_badge: "Current official DeepSeek API pricing"
context_label: "Current official context window"
benchmark_note: "Benchmarks not shown until exact DeepSeek-V4-Pro evaluation source is verified"
parameters_note: "DeepSeek V4 Preview release states 1.6T total parameters and 49B activated parameters for DeepSeek-V4-Pro"
cost_input_1m: 0.435
cost_output_1m: 0.87
context_window: 1000000
parameters_active: 49000000000
pricing_source_date: "2026-07-07"
pricing_model_version: "Current official DeepSeek API pricing for deepseek-v4-pro; calculator uses cache-miss input ($0.435/1M). Cache-hit input is listed separately at $0.003625/1M."
cac_status: "Not publicly verified"
---
DeepSeek-V4-Pro is a current official DeepSeek API route for the V4 family, with a 1M context window, 384K maximum output, and official pricing that separates cache-hit and cache-miss input tokens.

## What this model is

DeepSeek-V4-Pro is the current official DeepSeek API model ID from the DeepSeek-V4 Preview release. The exact API model ID is `deepseek-v4-pro`, served from `https://api.deepseek.com` for OpenAI-format calls and `https://api.deepseek.com/anthropic` for Anthropic-format calls.

DeepSeek's V4 Preview announcement and model card source the open-weight architecture and parameter claims. DeepSeek's API docs source the hosted API ID, pricing, context, and max-output claims. The current pricing table does not split prices by thinking mode, so this page does not invent a separate thinking price.

## Pricing notes

DeepSeek lists prices per 1M tokens. For DeepSeek-V4-Pro, the official pricing page lists $0.003625 per 1M input tokens on a cache hit, $0.435 per 1M input tokens on a cache miss, and $0.87 per 1M output tokens.

The calculator on this page uses the cache-miss input price as the default input rate, because that is the safer comparison when you do not yet know whether prompts will hit cache. Cache-hit pricing is still important for repeated-context workloads, where the effective input cost can be much lower.

DeepSeek also warns that product prices may vary and recommends checking the pricing page regularly. Treat this as a current checked price, not a permanent guarantee.

## Benchmarks and specs

DeepSeek's official pricing table lists DeepSeek-V4-Pro with a 1M context length and a maximum output of 384K tokens. The same table lists JSON Output, Tool Calls, Chat Prefix Completion, and FIM Completion in non-thinking mode.

The V4 preview release states that DeepSeek-V4-Pro has 1.6T total parameters and 49B activated parameters, and that the V4 series uses open weights under the MIT license. This page does not list benchmark scores until a named evaluation source and test setup are verified.

## Best fit

DeepSeek-V4-Pro is best for builders who want the stronger current DeepSeek API route, especially where long context, tool use, and reasoning mode matter more than the lowest possible token price.

It is also a useful comparison point against V4-Flash: both share the same official context headline, but V4-Pro is the larger route and has higher official token prices.

## Sources

- [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
- [DeepSeek V4 Preview Release](https://api-docs.deepseek.com/news/news260424)
- [DeepSeek Thinking Mode guide](https://api-docs.deepseek.com/guides/thinking_mode)
- [DeepSeek API list models reference](https://api-docs.deepseek.com/api/list-models)
- [DeepSeek-V4-Pro Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
