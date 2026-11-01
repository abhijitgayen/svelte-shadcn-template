import { siteConfig } from '#lib/config/site.js';
import type { RequestHandler } from './$types';

export const prerender = true;

interface SitemapRoute {
	path: string;
	priority: string;
	changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	lastmod?: string;
}

const routes: SitemapRoute[] = [
	{
		path: '',
		priority: '1.0',
		changefreq: 'weekly'
	},
	{
		path: '/hero',
		priority: '0.8',
		changefreq: 'monthly'
	}
];

export const GET: RequestHandler = async () => {
	const currentDate = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
	.map(
		(route) => `  <url>
    <loc>${siteConfig.url}${route.path}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
