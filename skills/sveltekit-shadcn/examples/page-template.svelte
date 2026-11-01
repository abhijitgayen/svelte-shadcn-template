<!-- SvelteKit 3 + Svelte 5 Page Reference Template -->
<script lang="ts">
	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { ArrowRight } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<!-- 1. Search Engine Optimization & Social Previews -->
<SEO
	title="Feature Showcase - SvelteKit Starter"
	description="Discover the powerful features and components included with our Svelte 5 and shadcn-svelte starter template."
	keywords={['sveltekit', 'svelte 5', 'shadcn-svelte', 'components']}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Feature Showcase',
		description: 'Explore pre-configured features and components.'
	}}
/>

<!-- 2. Semantic Page Structure -->
<main class="mx-auto max-w-5xl px-6 py-16">
	<header class="flex flex-col items-start gap-4">
		<Badge variant="outline">Preview</Badge>
		<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">
			Modern Component Showcase
		</h1>
		<p class="max-w-2xl text-lg text-muted-foreground">
			Build high-performance web applications with accessibility, dark mode, and SEO built-in.
		</p>
	</header>

	<section class="mt-10 flex flex-wrap gap-4">
		<Button onclick={toggleMode} variant="outline">
			Toggle Dark Mode
		</Button>
		<Button class="gap-2">
			Explore More <ArrowRight class="size-4" />
		</Button>
	</section>
</main>
