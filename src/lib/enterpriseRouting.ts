export type RoutingModel = {
  title: string;
  slug: string;
  costInput1m: number;
  costOutput1m: number;
};

/** Share of monthly traffic treated as routine (routed to the economical model). */
export const ROUTINE_TRAFFIC_SHARE = 0.8;

/** Share of monthly traffic sent to the premium model. */
export const PREMIUM_TRAFFIC_SHARE = 0.2;

export function monthlyBill(
  model: RoutingModel,
  inputMillions: number,
  outputMillions: number,
): number {
  return inputMillions * model.costInput1m + outputMillions * model.costOutput1m;
}

export type EnterpriseRoutingResult = {
  premiumOnly: number;
  routedTotal: number;
  routineCost: number;
  premiumSliceCost: number;
  savings: number;
  savingsPercent: number;
  routineInputMillions: number;
  routineOutputMillions: number;
  premiumInputMillions: number;
  premiumOutputMillions: number;
};

export function calculateEnterpriseRouting(params: {
  premium: RoutingModel;
  economical: RoutingModel;
  inputMillions: number;
  outputMillions: number;
  routineShare?: number;
}): EnterpriseRoutingResult {
  const routineShare = params.routineShare ?? ROUTINE_TRAFFIC_SHARE;
  const premiumShare = 1 - routineShare;

  const routineInputMillions = params.inputMillions * routineShare;
  const routineOutputMillions = params.outputMillions * routineShare;
  const premiumInputMillions = params.inputMillions * premiumShare;
  const premiumOutputMillions = params.outputMillions * premiumShare;

  const premiumOnly = monthlyBill(params.premium, params.inputMillions, params.outputMillions);
  const routineCost = monthlyBill(params.economical, routineInputMillions, routineOutputMillions);
  const premiumSliceCost = monthlyBill(
    params.premium,
    premiumInputMillions,
    premiumOutputMillions,
  );
  const routedTotal = routineCost + premiumSliceCost;
  const savings = premiumOnly - routedTotal;
  const savingsPercent = premiumOnly > 0 ? (savings / premiumOnly) * 100 : 0;

  return {
    premiumOnly,
    routedTotal,
    routineCost,
    premiumSliceCost,
    savings,
    savingsPercent,
    routineInputMillions,
    routineOutputMillions,
    premiumInputMillions,
    premiumOutputMillions,
  };
}
