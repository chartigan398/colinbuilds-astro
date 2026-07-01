import type { CollectionEntry } from 'astro:content';

export type ModelEntry = CollectionEntry<'models'>;

export type ComparisonLink = {
  slugA: string;
  slugB: string;
  href: string;
  label: string;
};

export function isLiveComparisonModel(entry: ModelEntry) {
  if (entry.data.draft === true) return false;
  return entry.data.cost_input_1m != null && entry.data.cost_output_1m != null;
}

export function comparisonPath(slugA: string, slugB: string) {
  return `/compare/${slugA}-vs-${slugB}/`;
}

export function comparisonsForModel(slug: string, allComparisons: ComparisonLink[]) {
  return allComparisons.filter((comparison) => comparison.slugA === slug || comparison.slugB === slug);
}

export function pickRelated<T>(items: T[], seed: string, count: number): T[] {
  if (items.length === 0) return [];
  let hash = 0;
  for (const char of seed) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  const start = Math.abs(hash) % items.length;
  const picked: T[] = [];
  for (let i = 0; i < Math.min(count, items.length); i++) {
    picked.push(items[(start + i) % items.length]);
  }
  return picked;
}

export async function getLiveComparisonPairs() {
  const { getCollection } = await import('astro:content');
  const liveModels = (await getCollection('models'))
    .filter(isLiveComparisonModel)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const allComparisons = liveModels.flatMap((modelA, index) =>
    liveModels.slice(index + 1).map((modelB) => ({
      slugA: modelA.slug,
      slugB: modelB.slug,
      href: comparisonPath(modelA.slug, modelB.slug),
      label: `${modelA.data.title} vs ${modelB.data.title}`,
    })),
  );

  const paths = liveModels.flatMap((modelA, index) =>
    liveModels.slice(index + 1).map((modelB) => ({
      params: { modelA: modelA.slug, modelB: modelB.slug },
      props: {
        modelAEntry: modelA,
        modelBEntry: modelB,
        allComparisons,
      },
    })),
  );

  return { liveModels, allComparisons, paths };
}
