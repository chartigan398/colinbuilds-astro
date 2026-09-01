import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { games } from '../data/games.js';
import { allSchools } from '../data/schools.js';
import { getLiveComparisonPairs } from '../lib/compare';
import { hasVerifiedPricing } from '../lib/pricing';

const site = 'https://colinbuilds.com';

export const GET: APIRoute = async () => {
  const models = (await getCollection('models')).filter(
    (entry) => entry.data.draft !== true && hasVerifiedPricing(entry.data),
  );
  const guides = (await getCollection('guides')).filter((entry) => entry.data.draft !== true);
  const weekly = (await getCollection('weekly')).filter((entry) => entry.data.draft !== true);
  const { allComparisons } = await getLiveComparisonPairs();

  const liveGames = games.filter((game) => game.live);

  const paths = [
    '/',
    '/compare/',
    '/builds/nebula-x/',
    '/guides/',
    '/games/',
    '/philosophia/',
    '/philosophia/schools/',
    '/weekly/',
    ...liveGames.map((game) => `/games/${game.slug}/`),
    ...allSchools().map((school) => `/philosophia/schools/${school.id}/`),
    ...guides.map((guide) => `/guides/${guide.slug}/`),
    ...weekly.map((edition) => `/weekly/${edition.slug}/`),
    ...models.map((model) => `/models/${model.slug}/`),
    ...allComparisons.map((c) => c.href),
  ];

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
