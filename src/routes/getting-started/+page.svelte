<script lang="ts">
	import SiteHeader from '#lib/components/site-header.svelte';
	import SiteFooter from '#lib/components/site-footer.svelte';

	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { ArrowRight, Check, ExternalLink } from '@lucide/svelte';

	const steps = [
		{
			number: '01',
			title: 'Get the code',
			command: 'git clone https://github.com/abhijitgayen/svelte-shadcn-template.git',
			detail: 'Create your own copy of the starter and move into the project folder.'
		},
		{
			number: '02',
			title: 'Install dependencies',
			command: 'pnpm install',
			detail: 'Install the packages used by the app. Node.js and pnpm should be available.'
		},
		{
			number: '03',
			title: 'Start building',
			command: 'pnpm dev',
			detail: 'Open the local URL printed in your terminal and start making the project yours.'
		}
	];
</script>

<SEO
	title="Getting Started — Launchkit"
	description="Set up the SvelteKit starter and start building your project in a few simple steps."
	keywords={['SvelteKit setup', 'Svelte starter guide', 'pnpm SvelteKit']}
/>

<div class="min-h-screen bg-background text-foreground">
	<SiteHeader />
	<main class="animate-enter mx-auto max-w-5xl px-5 pt-12 pb-20 sm:px-8 md:pt-20">
		<Badge variant="outline" class="gap-2"
			><span class="size-1.5 rounded-full bg-chart-2"></span> Quick start</Badge
		>
		<h1 class="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
			From fresh clone<br /><span class="text-muted-foreground">to first feature.</span>
		</h1>
		<p class="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
			A short setup guide to get the starter running, understand where things live, and make it
			yours.
		</p>
		<div class="mt-12 grid gap-4">
			{#each steps as step}
				<section
					class="grid gap-5 rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:grid-cols-[64px_1fr] sm:p-7"
				>
					<div
						class="grid size-12 place-items-center rounded-xl bg-secondary font-mono text-sm text-muted-foreground"
					>
						{step.number}
					</div>
					<div>
						<h2 class="text-lg font-semibold">{step.title}</h2>
						<p class="mt-1 text-sm text-muted-foreground">{step.detail}</p>
						<pre
							class="mt-4 overflow-x-auto rounded-xl bg-muted px-4 py-3 text-sm text-foreground"><code
								>{step.command}</code
							></pre>
					</div>
				</section>
			{/each}
		</div>
		<section class="mt-12 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
			<div class="flex items-start gap-4">
				<span class="grid size-10 shrink-0 place-items-center rounded-xl bg-chart-2/10 text-chart-2"
					><Check class="size-5" /></span
				>
				<div>
					<h2 class="text-lg font-semibold">Make the starter yours</h2>
					<p class="mt-2 max-w-2xl leading-7 text-muted-foreground">
						Update the site details in <code class="rounded bg-muted px-1.5 py-0.5 text-foreground"
							>src/lib/config/site.ts</code
						>, tune your theme tokens in
						<code class="rounded bg-muted px-1.5 py-0.5 text-foreground">src/globale.css</code>, and
						replace the landing page content when you’re ready.
					</p>
				</div>
			</div>
			<div class="mt-6 flex flex-wrap gap-3">
				<Button href="/components" size="sm">Browse components <ArrowRight class="size-4" /></Button
				><Button
					href="https://github.com/abhijitgayen/svelte-shadcn-template"
					target="_blank"
					rel="noreferrer"
					variant="outline"
					size="sm">Repository <ExternalLink class="size-3.5" /></Button
				>
			</div>
		</section>
	</main>
	<SiteFooter />
</div>
