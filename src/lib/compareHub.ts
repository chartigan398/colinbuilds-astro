import type { CollectionEntry } from 'astro:content';
import {
  getEffectivePricing,
  getPricingOffers,
  hasVerifiedPricing,
  type PricingOffer,
} from './pricing';
import { comparisonsForModel, type ComparisonLink } from './compare';

export type CompareHubOffer = {
  name: string;
  costInput1m: number;
  costOutput1m: number;
  source?: string;
  sourceDate?: string;
  isOfficial: boolean;
};

export type CompareHubRow = {
  slug: string;
  title: string;
  entryType: string;
  entryBadge: string;
  costInput1m: number | null;
  costOutput1m: number | null;
  contextWindow: number | null;
  trustLabel: string;
  trustLevel: 'high' | 'medium' | 'reference';
  offers: CompareHubOffer[];
  mmluScore: number | null;
  mmluProScore: number | null;
  chatbotArenaScore: number | null;
  parametersActive: number | null;
  benchmarkNote: string | null;
  parametersNote: string | null;
  pricingNote: string | null;
  pricingSourceDate: string | null;
  pricingModelVersion: string | null;
  modelHref: string;
  comparisonCount: number;
  comparisons: ComparisonLink[];
};

function trustFor(entry: CollectionEntry<'models'>, offers: PricingOffer[]) {
  if (entry.data.entry_type === 'reference') {
    return { label: 'Reference pricing', level: 'reference' as const };
  }
  const hasOfficial = offers.some((o) => o.isOfficial);
  if (offers.length > 1) {
    return { label: `${offers.length} providers`, level: 'medium' as const };
  }
  if (hasOfficial) {
    return { label: 'Verified API', level: 'high' as const };
  }
  return { label: 'Provider priced', level: 'medium' as const };
}

function badgeFor(entry: CollectionEntry<'models'>) {
  if (entry.data.entry_badge) return entry.data.entry_badge;
  if (entry.data.entry_type === 'reference') return 'Reference';
  if (entry.data.entry_type === 'open-weight') return 'Open-weight';
  if (entry.data.entry_type === 'router-hosted') return 'Router-hosted';
  if (entry.data.entry_type === 'local-self-hosted') return 'Self-hosted';
  return 'Model';
}

export function buildCompareHubRows(
  entries: CollectionEntry<'models'>[],
  allComparisons: ComparisonLink[],
): CompareHubRow[] {
  return entries
    .filter((entry) => entry.data.draft !== true && hasVerifiedPricing(entry.data))
    .sort((a, b) => {
      // Newest first so fresh models land above the fold on the hub.
      const dateA = a.data.pricing_source_date ?? '';
      const dateB = b.data.pricing_source_date ?? '';
      if (dateA !== dateB) return dateB.localeCompare(dateA);
      return a.data.title.localeCompare(b.data.title);
    })
    .map((entry) => {
      const offers = getPricingOffers(entry.data);
      const effective = getEffectivePricing(entry.data);
      const trust = trustFor(entry, offers);
      const comparisons = comparisonsForModel(entry.slug, allComparisons);

      return {
        slug: entry.slug,
        title: entry.data.title,
        entryType: entry.data.entry_type,
        entryBadge: badgeFor(entry),
        costInput1m: effective?.costInput1m ?? null,
        costOutput1m: effective?.costOutput1m ?? null,
        contextWindow: entry.data.context_window ?? null,
        trustLabel: trust.label,
        trustLevel: trust.level,
        offers: offers.map((offer) => ({
          name: offer.name,
          costInput1m: offer.costInput1m,
          costOutput1m: offer.costOutput1m,
          source: offer.source,
          sourceDate: offer.sourceDate,
          isOfficial: offer.isOfficial,
        })),
        mmluScore: entry.data.mmlu_score ?? null,
        mmluProScore: entry.data.mmlu_pro_score ?? null,
        chatbotArenaScore: entry.data.chatbot_arena_score ?? null,
        parametersActive: entry.data.parameters_active ?? null,
        benchmarkNote: entry.data.benchmark_note ?? null,
        parametersNote: entry.data.parameters_note ?? null,
        pricingNote: entry.data.pricing_note ?? null,
        pricingSourceDate: entry.data.pricing_source_date ?? null,
        pricingModelVersion: entry.data.pricing_model_version ?? null,
        modelHref: `/models/${entry.slug}/`,
        comparisonCount: comparisons.length,
        comparisons,
      };
    });
}
