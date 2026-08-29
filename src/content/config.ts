import { defineCollection, z } from 'astro:content';

const providerOfferSchema = z.object({
  name: z.string(),
  cost_input_1m: z.number(),
  cost_output_1m: z.number(),
  source: z.string().url(),
  source_date: z.string().optional(),
  model_id: z.string().optional(),
  note: z.string().optional(),
});

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
    providers: z.array(providerOfferSchema).optional(),
    context_window: z.number().optional(),
    parameters_active: z.number().optional(),
    mmlu_score: z.number().optional(),
    mmlu_pro_score: z.number().optional(),
    chatbot_arena_score: z.number().optional(),
    chatbot_arena_source_date: z.string().optional(),
    pricing_source_date: z.string().optional(),
    pricing_model_version: z.string().optional(),
    pricing_note: z.string().optional(),
    cac_status: z.string().default('Not publicly verified'),
    cac_filing_number: z.string().optional(),
    cac_source: z.string().url().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    guide_no: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const weekly = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    edition: z.string(),
    week: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { models, guides, weekly };
