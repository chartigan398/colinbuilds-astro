# Second Pass Fact-Check — DeepSeek-V3

Date: 2026-06-29
Draft checked: `/mnt/c/Users/chart/colinbuilds-astro/src/content/models/deepseek-v3.md`
Report status: local only; not published
Role: Kratos / Second Pass Man

## Summary

- Overall readiness: needs edits / still draft.
- Main outcome: schema should distinguish standard MMLU from MMLU-Pro, launch pricing from newer pricing versions, and company-level CAC filing from model-specific CAC evidence.
- Publication decision: keep `draft: true`.

## Claim Review

| Claim | Status | Source | Notes |
|---|---|---|---|
| 671B total parameters | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo says 671B total. |
| 37B active parameters | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo says 37B activated per token. |
| 128K context window | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo/model downloads table. |
| 14.8T training tokens | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Found in official README, not just model memory. |
| Multi-head Latent Attention / DeepSeekMoE | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo. |
| Auxiliary-loss-free load balancing | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo. |
| Multi-token prediction objective | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official repo. |
| Launch input price $0.27 / 1M cache miss | vendor-reported | https://api-docs.deepseek.com/news/news1226 | Historical V3 launch pricing, not necessarily current V3.x/V4 pricing. |
| Launch output price $1.10 / 1M | vendor-reported | https://api-docs.deepseek.com/news/news1226 | Historical V3 launch pricing. |
| Standard MMLU 88.5 | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Should be separate from MMLU-Pro. |
| MMLU-Pro 64.4 | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Old `mmlu_score` field was ambiguous. |
| MATH-500 90.2 | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official benchmark table. |
| C-Eval 86.5 | vendor-reported | https://github.com/deepseek-ai/DeepSeek-V3 | Official benchmark table. |
| DeepSeek has some CAC filing | uncertain | Notebook/source summary only, no filing URL/number provided here | Do not promote to model-specific filed status yet. |
| DeepSeek-V3 has a model-specific CAC filing number | uncertain | no verified source | Keep `cac_status: Unknown`. |

## Required Edits Applied

- Added `mmlu_pro_score`.
- Made `mmlu_score` standard MMLU.
- Added `pricing_source_date`.
- Added `pricing_model_version`.
- Added `cac_status`.
- Added `cac_source`.
- Kept `draft: true`.

## Publication Gate

Do not publish until:

1. pricing policy is chosen: historical launch pricing vs current API pricing vs latest V3.x version;
2. CAC evidence has a source URL or filing number, or remains Unknown;
3. vendor-reported benchmark labels are visible and acceptable;
4. default Hermes and Kratos agree on the final fact table.
