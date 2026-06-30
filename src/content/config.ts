import { defineCollection, z } from 'astro:content';

const models = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
    entry_type: z.enum(['model', 'reference', 'open-weight', 'router-hosted', 'local-self-hosted']).default('model'),
    entry_badge: z.string().optional(),
    context_label: z.string().optional(),
    benchmark_note: z.string().optional(),
    parameters_note: z.string().optional(),
    cost_input_1m: z.number().optional(),
    cost_output_1m: z.number().optional(),
    context_window: z.number().optional(),
    parameters_active: z.number().optional(),
    mmlu_score: z.number().optional(),
    mmlu_pro_score: z.number().optional(),
    pricing_source_date: z.string().optional(),
    pricing_model_version: z.string().optional(),
    pricing_note: z.string().optional(),
    cac_status: z.string().default('Not publicly verified'),
    cac_source: z.string().url().optional(),
  }),
});

export const collections = { models };
