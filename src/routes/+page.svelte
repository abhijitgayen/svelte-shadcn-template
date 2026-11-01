<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Accordion from '#lib/components/ui/accordion/index.js';
	import { SEO } from '#lib/components/seo/index.js';
	import { toggleMode } from 'mode-watcher';
</script>

<SEO
	title="SvelteKit + shadcn-svelte Starter Template"
	description="Production-ready starter template featuring Svelte 5 (Runes), SvelteKit 3, Tailwind CSS v4, and shadcn-svelte components."
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'SvelteKit shadcn Starter',
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Any',
		description:
			'Production-ready starter template featuring Svelte 5, SvelteKit 3, Tailwind CSS v4, and shadcn-svelte.',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		}
	}}
/>

<main class="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
	<header class="flex max-w-xl flex-col items-center gap-2">
		<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
			SvelteKit + <span class="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">shadcn-svelte</span>
		</h1>
		<p class="text-muted-foreground text-sm sm:text-base">
			Accessible, beautiful components powered by Svelte 5 Runes and Tailwind CSS v4.
		</p>
	</header>

	<div class="flex flex-wrap items-center justify-center gap-3">
		<Button onclick={toggleMode} variant="outline">Toggle Dark Mode</Button>
		<a href="/hero">
			<Button variant="default">View Hero Demo &rarr;</Button>
		</a>
	</div>

	<div class="flex flex-wrap justify-center gap-3">
		<Button>Default</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="destructive">Destructive</Button>
		<Button variant="ghost">Ghost</Button>
	</div>

	<section class="mt-4 w-full max-w-md text-left" aria-labelledby="faq-heading">
		<h2 id="faq-heading" class="sr-only">Frequently Asked Questions</h2>
		<Accordion.Root type="single" class="w-full">
			<Accordion.Item value="item-1">
				<Accordion.Trigger>What is SvelteKit?</Accordion.Trigger>
				<Accordion.Content>
					SvelteKit is the official full-stack framework for Svelte. It handles routing, server-side
					rendering, and static generation out of the box.
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-2">
				<Accordion.Trigger>What is shadcn-svelte?</Accordion.Trigger>
				<Accordion.Content>
					shadcn-svelte is a collection of accessible, copy-paste UI components built with Tailwind
					CSS and Bits UI designed specifically for Svelte applications.
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item value="item-3">
				<Accordion.Trigger>Do I need to know Tailwind CSS?</Accordion.Trigger>
				<Accordion.Content>
					Basic Tailwind knowledge helps, but you can use the pre-built components as-is or tweak
					design tokens directly in <code>src/globale.css</code>.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
</main>
