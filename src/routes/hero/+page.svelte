<script lang="ts">
	import SiteHeader from '#lib/components/site-header.svelte';
	import SiteFooter from '#lib/components/site-footer.svelte';

	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { ArrowRight, ArrowUpRight, Check, Sparkles } from '@lucide/svelte';
</script>

<SEO
	title="Landing Page Demo — Launchkit"
	description="A responsive landing page example built with SvelteKit, Svelte 5, Tailwind CSS v4, and shadcn-svelte."
	keywords={['SvelteKit landing page', 'Svelte 5 demo', 'shadcn-svelte']}
/>

<div class="relative isolate min-h-screen overflow-hidden bg-background">
	<div
		class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top,var(--color-secondary),transparent_68%)]"
	></div>
	<SiteHeader />

	<main class="animate-enter">
		<section
			class="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:grid-cols-2 lg:gap-12"
		>
			<div class="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
				<Badge variant="outline" class="mb-6 gap-2 bg-card/70 px-3 py-1.5 text-muted-foreground"
					><span class="size-1.5 rounded-full bg-chart-2"></span> Your next chapter starts here</Badge
				>
				<h1 class="text-5xl font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
					Make room for<br /><span
						class="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent"
						>what’s next.</span
					>
				</h1>
				<p
					class="mx-auto mt-6 max-w-lg text-lg leading-8 text-pretty text-muted-foreground lg:mx-0"
				>
					A beautiful, flexible starting point for your next product. Bring your idea, make this
					space your own, and build something worth coming back to.
				</p>
				<div class="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row lg:justify-start">
					<Button
						href="https://github.com/abhijitgayen/svelte-shadcn-template"
						target="_blank"
						rel="noreferrer"
						size="lg"
						class="h-12 rounded-xl px-6">Start building <ArrowRight class="size-4" /></Button
					><Button href="/" variant="outline" size="lg" class="h-12 rounded-xl px-6"
						>Explore the starter <ArrowUpRight class="size-4" /></Button
					>
				</div>
				<div
					class="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
				>
					<span class="inline-flex items-center gap-1.5"
						><Check class="size-4 text-chart-2" /> Thoughtful defaults</span
					><span class="inline-flex items-center gap-1.5"
						><Check class="size-4 text-chart-2" /> Easy to customize</span
					>
				</div>
			</div>
			<div class="animate-float-gently relative mx-auto w-full max-w-lg">
				<div class="absolute -inset-6 -z-10 rounded-full bg-chart-1/10 blur-3xl"></div>
				<div
					class="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-foreground/10 sm:p-4"
				>
					<div
						class="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-muted to-chart-1/10 p-6 sm:p-8"
					>
						<div
							class="absolute -top-12 -right-10 size-48 rounded-full border border-foreground/10 sm:size-64"
						></div>
						<div
							class="absolute -top-5 -right-3 size-36 rounded-full border border-foreground/10 sm:size-48"
						></div>
						<div class="relative flex items-center justify-between">
							<span
								class="grid size-10 place-items-center rounded-xl border border-border bg-card/70 backdrop-blur"
								><Sparkles class="size-5 text-chart-1" /></span
							><Badge variant="outline" class="bg-card/70 backdrop-blur">Your space to grow</Badge>
						</div>
						<div class="relative">
							<p class="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
								The next big thing
							</p>
							<p class="mt-2 max-w-xs text-3xl font-semibold tracking-tight sm:text-4xl">
								Starts with<br />a first step.
							</p>
							<div class="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
								<span class="grid size-7 place-items-center rounded-full bg-card"
									><ArrowRight class="size-3.5" /></span
								> Make it yours
							</div>
						</div>
					</div>
				</div>
				<div
					class="absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-lg sm:-left-7"
				>
					<span class="size-2 rounded-full bg-chart-2"></span><span class="text-xs font-medium"
						>Ready when you are</span
					>
				</div>
			</div>
		</section>
		<section class="border-y border-border/70 bg-muted/25">
			<div class="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
				<div>
					<p class="font-semibold">Start with a clear canvas</p>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						A confident first impression, ready for your own story and brand.
					</p>
				</div>
				<div>
					<p class="font-semibold">Shape it as you grow</p>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						Flexible components and design tokens make changes feel simple.
					</p>
				</div>
				<div>
					<p class="font-semibold">Keep your focus on the idea</p>
					<p class="mt-2 text-sm leading-6 text-muted-foreground">
						A modern foundation means less time on setup and more on making.
					</p>
				</div>
			</div>
		</section>
	</main>
	<SiteFooter />
</div>
