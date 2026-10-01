import type { APIRoute } from 'astro';
import { diensten } from '../data/diensten';

// Je site-URL (zonder schuine streep aan het eind)
const SITE = 'https://scharloo-install.nl';

// Vind automatisch alle paginabestanden onder src/pages,
// inclusief de blogposts (.md). Geen extra pakket nodig.
const modules = import.meta.glob(['./**/*.astro', './**/*.md', './**/*.mdx']);

function toUrlPath(file: string): string | null {
  let p = file.replace(/^\.\//, '').replace(/\.(astro|md|mdx)$/, '');

  if (p.includes('[')) return null;            // dynamische routes overslaan
  if (p.startsWith('_')) return null;          // privébestanden
  if (/(^|\/)(404|500)$/.test(p)) return null; // foutpagina's

  if (p === 'index') p = '';
  else if (p.endsWith('/index')) p = p.slice(0, -6);

  let url = '/' + p;
  if (!url.endsWith('/')) url += '/'; // past bij trailingSlash: 'always'
  return url;
}

export const GET: APIRoute = () => {
  const statisch = Object.keys(modules)
    .map(toUrlPath)
    .filter((u): u is string => u !== null);

  // Dynamische dienstpagina's (via diensten/[slug].astro) horen er ook in.
  const dienstPaginas = diensten
    .filter((d) => d.genereerPagina)
    .map((d) => `/diensten/${d.slug}/`);

  const urls = Array.from(new Set([...statisch, ...dienstPaginas])).sort();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
