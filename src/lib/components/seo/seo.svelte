<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '#lib/config/site.js';

	interface Props {
		title?: string;
		description?: string;
		canonical?: string;
		keywords?: string[] | string;
		image?: string;
		imageAlt?: string;
		type?: 'website' | 'article' | 'profile' | string;
		noindex?: boolean;
		nofollow?: boolean;
		publishedTime?: string;
		modifiedTime?: string;
		author?: string;
		jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
	}

	let {
		title,
		description = siteConfig.description,
		canonical,
		keywords = siteConfig.keywords,
		image = siteConfig.ogImage,
		imageAlt,
		type = 'website',
		noindex = false,
		nofollow = false,
		publishedTime,
		modifiedTime,
		author = siteConfig.author,
		jsonLd
	}: Props = $props();

	// Format title: if title is supplied and doesn't already contain site name, append it
	const formattedTitle = $derived(
		!title
			? `${siteConfig.name} - ${siteConfig.shortName}`
			: title.includes(siteConfig.name)
				? title
				: `${title} | ${siteConfig.name}`
	);

	// Compute canonical URL
	const canonicalUrl = $derived(
		canonical ||
			(page?.url
				? `${siteConfig.url}${page.url.pathname === '/' ? '' : page.url.pathname}`
				: siteConfig.url)
	);

	// Compute full image URL
	const fullImageUrl = $derived(
		image.startsWith('http://') || image.startsWith('https://')
			? image
			: `${siteConfig.url}${image.startsWith('/') ? '' : '/'}${image}`
	);

	// Format keywords
	const formattedKeywords = $derived(Array.isArray(keywords) ? keywords.join(', ') : keywords);

	// Robots directive
	const robotsContent = $derived(
		noindex
			? nofollow
				? 'noindex, nofollow'
				: 'noindex, follow'
			: nofollow
				? 'index, nofollow'
				: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
	);

	// Default Structured Data if none passed
	const defaultJsonLd = $derived(
		jsonLd || {
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: siteConfig.name,
			url: siteConfig.url,
			description: siteConfig.description,
			author: {
				'@type': 'Person',
				name: siteConfig.author
			}
		}
	);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{formattedTitle}</title>
	<meta name="title" content={formattedTitle} />
	<meta name="description" content={description} />
	{#if formattedKeywords}
		<meta name="keywords" content={formattedKeywords} />
	{/if}
	<meta name="author" content={author} />
	<meta name="robots" content={robotsContent} />
	<meta name="googlebot" content={robotsContent} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={formattedTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:image:alt" content={imageAlt || formattedTitle} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:locale" content="en_US" />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}
	{#if author}
		<meta property="article:author" content={author} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={formattedTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />
	{#if siteConfig.twitterHandle}
		<meta name="twitter:site" content={siteConfig.twitterHandle} />
		<meta name="twitter:creator" content={siteConfig.twitterHandle} />
	{/if}

	<!-- JSON-LD Structured Data for Search Engines -->
	{@html `<script type="application/ld+json">${JSON.stringify(defaultJsonLd)}<\/script>`}
</svelte:head>
