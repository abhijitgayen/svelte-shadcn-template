<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { ArrowRight, ArrowLeft } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import { SEO } from '#lib/components/seo/index.js';
</script>

<SEO
	title="Hero Section Demo - SvelteKit & shadcn-svelte"
	description="Explore the responsive marketing hero section demo built with SvelteKit 3, Svelte 5, Tailwind CSS v4, and shadcn-svelte components."
	keywords={[
		'SvelteKit Hero',
		'shadcn-svelte landing page',
		'Svelte 5 marketing hero',
		'Tailwind CSS v4 hero'
	]}
/>

<section
	class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 py-24 text-center md:py-32 lg:py-40"
>
	<div class="flex flex-wrap items-center justify-center gap-3">
		<Button onclick={toggleMode} variant="outline">Toggle Dark Mode</Button>
		<a href="/">
			<Button variant="ghost" class="gap-1.5">
				<ArrowLeft class="size-4" /> Back to Home
			</Button>
		</a>
	</div>

	<Badge variant="secondary" class="mb-4">
		<span
			class="bg-primary text-primary-foreground mr-2 rounded-full px-1.5 py-0.5 text-xs font-semibold"
			>New</span
		>
		SvelteKit 3.0 & Svelte 5 Ready
	</Badge>

	<h1
		class="text-balance max-w-3xl text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
	>
		Build faster with{' '}
		<span class="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
			SvelteKit
		</span>
	</h1>

	<p class="text-muted-foreground text-balance mx-auto max-w-175 text-lg sm:text-xl">
		The modern full-stack framework paired with beautiful, accessible UI components. Everything you
		need to ship production-ready apps today.
	</p>

	<div class="mt-4 flex flex-col justify-center gap-4 min-[400px]:flex-row">
		<a href="https://github.com/abhijitgayen/svelte-shadcn-template" target="_blank" rel="noreferrer">
			<Button size="lg" class="gap-2">
				Get Started <ArrowRight class="size-4" />
			</Button>
		</a>
		<a href="/">
			<Button size="lg" variant="outline">Explore Components</Button>
		</a>
	</div>
</section>
