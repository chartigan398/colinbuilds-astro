---
title: "DeepSeek-V3"
date: 2026-06-29
slug: "deepseek-v3"
description: "A draft ColinBuilds profile and cost analysis of DeepSeek-V3 with second-pass fact-check fields."
tags: [ai-model, llm, deepseek, chinese-ai, open-weight]
cost_input_1m: 0.27
cost_output_1m: 1.10
context_window: 128000
parameters_active: 37000000000
parameters_total: 671000000000
mmlu_score: 88.5
mmlu_pro_score: 64.4
math_500_score: 90.2
ceval_score: 86.5
pricing_source_date: "2024-12-26"
pricing_model_version: "DeepSeek-V3 launch API pricing; cache-miss input price"
cac_status: "Unknown"
draft: true
source_status: "second-pass schema test; verify again before publishing"
---

DeepSeek-V3 is a Chinese open-weight Mixture-of-Experts language model from DeepSeek. According to the official DeepSeek-V3 repository, the model has 671B total parameters, 37B activated parameters per token, and a 128K context window. The same official source says DeepSeek-V3 was trained on 14.8T tokens and uses Multi-head Latent Attention, DeepSeekMoE, an auxiliary-loss-free load-balancing strategy, and a multi-token prediction objective.

For ColinBuilds, the main reason this model matters is cost and positioning. DeepSeek’s V3 launch announcement listed post-launch API pricing at $0.27 per 1M input tokens for cache misses, $0.07 per 1M input tokens for cache hits, and $1.10 per 1M output tokens. This draft keeps those values because they match the original DeepSeek-V3 source being profiled. Newer DeepSeek V3.x or V4 pricing should be tracked as a separate pricing version rather than silently overwriting this historical V3 page.

Benchmarks make DeepSeek-V3 a useful first test record for the directory. The official repository reports standard MMLU at 88.5, MMLU-Pro at 64.4, MATH-500 at 90.2, and C-Eval at 86.5 for the chat model benchmark table. These should be treated as vendor-reported until independently cross-checked against the paper, Hugging Face model card, and third-party leaderboards.

## Quick facts

| Field | Value |
|---|---:|
| Developer | DeepSeek |
| Country / ecosystem angle | China / non-US AI ecosystem |
| Architecture | Mixture-of-Experts |
| Total parameters | 671B |
| Active parameters | 37B |
| Context window | 128K tokens |
| Input price used in this draft | $0.27 per 1M tokens, cache miss launch/API pricing |
| Output price used in this draft | $1.10 per 1M tokens, launch/API pricing |
| Standard MMLU | 88.5 |
| MMLU-Pro | 64.4 |
| MATH-500 | 90.2 |
| C-Eval | 86.5 |
| CAC status | Unknown / model-specific filing not verified yet |

## Field source map

| Field | Value | Status | Source |
|---|---:|---|---|
| `cost_input_1m` | 0.27 | vendor-reported | DeepSeek V3 launch announcement, 2024-12-26 |
| `cost_output_1m` | 1.10 | vendor-reported | DeepSeek V3 launch announcement, 2024-12-26 |
| `pricing_source_date` | 2024-12-26 | verified source date | DeepSeek V3 launch announcement |
| `pricing_model_version` | DeepSeek-V3 launch API pricing | verified label | DeepSeek V3 launch announcement; separate from newer V3.x pricing |
| `context_window` | 128000 | vendor-reported | Official DeepSeek-V3 GitHub README |
| `parameters_active` | 37000000000 | vendor-reported | Official DeepSeek-V3 GitHub README |
| `parameters_total` | 671000000000 | vendor-reported | Official DeepSeek-V3 GitHub README |
| `mmlu_score` | 88.5 | vendor-reported | Official DeepSeek-V3 GitHub README chat model benchmark table |
| `mmlu_pro_score` | 64.4 | vendor-reported | Official DeepSeek-V3 GitHub README standard benchmark table |
| `math_500_score` | 90.2 | vendor-reported | Official DeepSeek-V3 GitHub README chat model benchmark table |
| `ceval_score` | 86.5 | vendor-reported | Official DeepSeek-V3 GitHub README chat model benchmark table |
| `cac_status` | Unknown | uncertain | No model-specific CAC filing number verified during second pass |
| `cac_source` | No model-specific CAC filing number verified yet | uncertainty note | Do not infer model-specific status from company-level filing summaries |

## ColinBuilds angle

DeepSeek-V3 is a strong seed page because it lets the site explain three useful beginner/business ideas in one place: open-weight models, Chinese AI cost competition, and practical model routing. A future comparison template could generate pages such as “DeepSeek-V3 vs GPT-4 cost”, “DeepSeek-V3 vs Qwen context window”, and “DeepSeek-V3 pricing calculator”.

## Kratos second-pass note

Kratos’ new standing role is Second Pass Man: he checks model pages after default Hermes drafts them. For this page, the second pass separates standard MMLU from MMLU-Pro, keeps launch pricing distinct from newer DeepSeek pricing versions, and refuses to mark CAC as filed unless a model-specific source or filing number is verified.

## Source links

- Official DeepSeek-V3 GitHub repository: https://github.com/deepseek-ai/DeepSeek-V3
- Official DeepSeek-V3 README raw source: https://raw.githubusercontent.com/deepseek-ai/DeepSeek-V3/main/README.md
- DeepSeek API launch news for V3 pricing: https://api-docs.deepseek.com/news/news1226
- DeepSeek current API pricing page: https://api-docs.deepseek.com/quick_start/pricing
- Hugging Face model metadata API: https://huggingface.co/api/models/deepseek-ai/DeepSeek-V3
- DeepSeek-V3 paper link from official repo: https://arxiv.org/pdf/2412.19437

## Verification notes

- `cost_input_1m` and `cost_output_1m` use DeepSeek-V3 launch/API pricing from the official DeepSeek V3 announcement. Newer V3.x/V4 prices should be recorded with a separate `pricing_model_version`.
- `mmlu_score` now means standard MMLU. `mmlu_pro_score` stores MMLU-Pro separately.
- `cac_status` is intentionally marked `Unknown` because no model-specific CAC filing number has been verified for DeepSeek-V3 during this test.
- Claims based only on DeepSeek’s own repository or announcement are marked vendor-reported, not independently confirmed.
- This file remains `draft: true` and should not be published without another fact check.
