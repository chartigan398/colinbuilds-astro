import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getLiveComparisonPairs } from '../lib/compare';

const site = 'https://colinbuilds.com';

const hasOfficialPricing = (entry: { data: { draft?: boolean; cost_input_1m?: number; cost_output_1m?: number } }) =>
  entry.data.draft !== true && entry.data.cost_input_1m != null && entry.data.cost_output_1m != null;

export const GET: APIRoute = async () => {
  const models = (await getCollection('models')).filter(hasOfficialPricing);
  const { allComparisons } = await getLiveComparisonPairs();

  const paths = ['/', ...models.map((model) => `/models/${model.slug}/`), ...allComparisons.map((c) => c.href)];

  const urlEntries = paths
    .map(
      (path) => `  <url>
    <loc>${site}${path}</loc>
  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
