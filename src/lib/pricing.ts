export type ProviderOffer = {
  name: string;
  cost_input_1m: number;
  cost_output_1m: number;
  source: string;
  source_date?: string;
  model_id?: string;
  note?: string;
};

export type PricingOffer = {
  name: string;
  costInput1m: number;
  costOutput1m: number;
  source?: string;
  sourceDate?: string;
  isOfficial: boolean;
};

type ModelPricingData = {
  cost_input_1m?: number;
  cost_output_1m?: number;
  pricing_source_date?: string;
  pricing_model_version?: string;
  providers?: ProviderOffer[];
};

export function getPricingOffers(data: ModelPricingData): PricingOffer[] {
  const offers: PricingOffer[] = [];

  if (data.cost_input_1m != null && data.cost_output_1m != null) {
    offers.push({
      name: 'Official API',
      costInput1m: data.cost_input_1m,
      costOutput1m: data.cost_output_1m,
      sourceDate: data.pricing_source_date,
      isOfficial: true,
    });
  }

  for (const provider of data.providers ?? []) {
    offers.push({
      name: provider.name,
      costInput1m: provider.cost_input_1m,
      costOutput1m: provider.cost_output_1m,
      source: provider.source,
      sourceDate: provider.source_date,
      isOfficial: false,
    });
  }

  return offers.sort(
    (a, b) => a.costInput1m + a.costOutput1m - (b.costInput1m + b.costOutput1m),
  );
}

export function getCheapestOfferKeys(offers: PricingOffer[]): Set<string> {
  if (offers.length === 0) return new Set();

  const minTotal = Math.min(...offers.map((offer) => offer.costInput1m + offer.costOutput1m));
  return new Set(
    offers
      .filter((offer) => offer.costInput1m + offer.costOutput1m === minTotal)
      .map((offer) => `${offer.name}:${offer.costInput1m}:${offer.costOutput1m}`),
  );
}

export function offerKey(offer: PricingOffer) {
  return `${offer.name}:${offer.costInput1m}:${offer.costOutput1m}`;
}

export function hasVerifiedPricing(data: ModelPricingData) {
  if (data.cost_input_1m != null && data.cost_output_1m != null) return true;
  return (data.providers?.length ?? 0) > 0;
}

export function getEffectivePricing(data: ModelPricingData) {
  if (data.cost_input_1m != null && data.cost_output_1m != null) {
    return {
      costInput1m: data.cost_input_1m,
      costOutput1m: data.cost_output_1m,
      label: 'Official API',
    };
  }

  const cheapest = getPricingOffers(data)[0];
  if (!cheapest) return null;

  return {
    costInput1m: cheapest.costInput1m,
    costOutput1m: cheapest.costOutput1m,
    label: cheapest.name,
  };
}
