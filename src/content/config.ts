import { defineCollection, z } from 'astro:content';

const models = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cost_input_1m: z.number(),
    cost_output_1m: z.number(),
    context_window: z.number(),
    parameters_active: z.number(),
    mmlu_score: z.number(),
    cac_filing: z.string(),
  }),
});

export const collections = { models };
