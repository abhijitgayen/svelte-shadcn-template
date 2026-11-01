<script lang="ts">
	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as Accordion from '#lib/components/ui/accordion/index.js';
	import { toggleMode } from 'mode-watcher';
	import {
		ArrowRight,
		ArrowUpRight,
		Check,
		Code2,
		Layers3,
		Moon,
		Palette,
		Sparkles,
		Zap
	} from '@lucide/svelte';
</script>

<SEO
	title="SvelteKit Starter — Ship your next idea sooner"
	description="A thoughtful SvelteKit starter with Svelte 5, Tailwind CSS v4, and shadcn-svelte. Start with a polished foundation and make it yours."
	keywords={['SvelteKit starter', 'Svelte 5 template', 'shadcn-svelte', 'Tailwind CSS v4']}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'SvelteKit shadcn Starter',
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Any',
		description:
			'A thoughtful SvelteKit starter with Svelte 5, Tailwind CSS v4, and shadcn-svelte.',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
	}}
/>

<div class="relative isolate min-h-screen overflow-hidden bg-background">
	<div
		class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top,var(--color-secondary),transparent_68%)] opacity-70"
	></div>
	<header class="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
		<a
			href="/"
			class="flex items-center gap-2.5 font-semibold tracking-tight"
			aria-label="SvelteKit Starter home"
		>
			<span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"
				><Sparkles class="size-4" /></span
			>
			<span>launch<span class="text-muted-foreground">kit</span></span>
		</a>
		<nav
			class="order-3 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border/60 pt-3 text-xs text-muted-foreground md:order-none md:w-auto md:border-0 md:pt-0 md:text-sm"
			aria-label="Main navigation"
		>
			<a class="transition-colors hover:text-foreground" href="/hero">Demo</a>
			<a class="transition-colors hover:text-foreground" href="/components">Components</a>
			<a class="transition-colors hover:text-foreground" href="/getting-started">Guide</a>
			<a class="transition-colors hover:text-foreground" href="#features">Features</a>
			<a class="transition-colors hover:text-foreground" href="#stack">Tech stack</a>
			<a class="transition-colors hover:text-foreground" href="#faq">FAQ</a>
		</nav>
		<div class="flex items-center gap-2">
			<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle color theme"
				><Moon class="size-4" /></Button
			>
			<Button
				href="https://github.com/abhijitgayen/svelte-shadcn-template"
				target="_blank"
				rel="noreferrer"
				size="sm"
				class="hidden sm:inline-flex">View on GitHub <ArrowUpRight class="size-4" /></Button
			>
		</div>
	</header>

	<main class="animate-enter">
		<section
			class="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
		>
			<div class="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
				<Badge
					variant="outline"
					class="mb-6 gap-2 border-border/80 bg-card/70 px-3 py-1.5 text-muted-foreground"
					><span class="size-1.5 rounded-full bg-chart-2"></span> A clean start for your next big idea</Badge
				>
				<h1
					class="text-5xl font-semibold tracking-[-0.055em] text-balance text-foreground sm:text-6xl lg:text-7xl"
				>
					Skip the setup.<br /><span
						class="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent"
						>Start building.</span
					>
				</h1>
				<p
					class="mx-auto mt-6 max-w-xl text-lg leading-8 text-pretty text-muted-foreground lg:mx-0"
				>
					A modern SvelteKit foundation with the details already taken care of. Spend less time
					wiring things together and more time making something people love.
				</p>
				<div class="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row lg:justify-start">
					<Button href="/getting-started" size="lg" class="h-12 rounded-xl px-6"
						>Get started <ArrowRight class="size-4" /></Button
					>
					<Button href="/hero" variant="outline" size="lg" class="h-12 rounded-xl px-6"
						>Explore the demo <ArrowUpRight class="size-4" /></Button
					>
				</div>
				<div
					class="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground lg:justify-start"
				>
					<span class="inline-flex items-center gap-1.5"
						><Check class="size-4 text-chart-2" /> Open source</span
					>
					<span class="inline-flex items-center gap-1.5"
						><Check class="size-4 text-chart-2" /> TypeScript ready</span
					>
					<span class="inline-flex items-center gap-1.5"
						><Check class="size-4 text-chart-2" /> Yours to shape</span
					>
				</div>
			</div>

			<div class="relative mx-auto w-full max-w-xl lg:ml-auto">
				<div
					class="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-chart-1/15 via-chart-2/10 to-chart-4/15 blur-2xl"
				></div>
				<div
					class="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-foreground/10"
				>
					<div class="flex items-center justify-between border-b border-border px-4 py-3">
						<div class="flex items-center gap-1.5">
							<span class="size-2.5 rounded-full bg-destructive/70"></span><span
								class="size-2.5 rounded-full bg-chart-4"
							></span><span class="size-2.5 rounded-full bg-chart-2"></span>
						</div>
						<span class="text-xs text-muted-foreground">your-next-big-thing</span><span
							class="size-4"
						></span>
					</div>
					<div class="grid min-h-80 grid-cols-[88px_1fr] sm:grid-cols-[118px_1fr]">
						<aside class="border-r border-border bg-muted/40 p-3 sm:p-4">
							<div class="mb-5 flex items-center gap-2">
								<span class="size-6 rounded-lg bg-primary"></span><span
									class="h-2 w-12 rounded bg-foreground/70"
								></span>
							</div>
							<div class="space-y-2">
								<div class="h-7 rounded-md bg-accent"></div>
								<div class="h-7 rounded-md"></div>
								<div class="h-7 rounded-md"></div>
							</div>
							<div class="mt-8 h-px bg-border"></div>
							<div class="mt-4 space-y-2">
								<div class="h-1.5 w-10 rounded bg-muted-foreground/30"></div>
								<div class="h-1.5 w-14 rounded bg-muted-foreground/20"></div>
								<div class="h-1.5 w-11 rounded bg-muted-foreground/20"></div>
							</div>
						</aside>
						<div class="p-4 sm:p-6">
							<div class="flex items-start justify-between gap-2">
								<div>
									<div class="h-2 w-16 rounded bg-muted-foreground/25"></div>
									<div class="mt-3 h-5 w-32 rounded bg-foreground/80 sm:w-44"></div>
								</div>
								<span
									class="rounded-md bg-primary px-2.5 py-1.5 text-[10px] font-medium text-primary-foreground"
									>New project +</span
								>
							</div>
							<div class="mt-6 grid grid-cols-2 gap-3">
								<div class="rounded-xl border border-border p-3">
									<div class="flex items-center justify-between">
										<span
											class="grid size-7 place-items-center rounded-lg bg-chart-1/10 text-chart-1"
											><Zap class="size-3.5" /></span
										><span class="text-[9px] text-chart-2">+12.8%</span>
									</div>
									<div class="mt-4 h-2 w-14 rounded bg-muted-foreground/25"></div>
									<div class="mt-2 h-5 w-20 rounded bg-foreground/70"></div>
								</div>
								<div class="rounded-xl border border-border p-3">
									<div class="flex items-center justify-between">
										<span
											class="grid size-7 place-items-center rounded-lg bg-chart-2/10 text-chart-2"
											><Layers3 class="size-3.5" /></span
										><span class="text-[9px] text-chart-2">+8.2%</span>
									</div>
									<div class="mt-4 h-2 w-12 rounded bg-muted-foreground/25"></div>
									<div class="mt-2 h-5 w-16 rounded bg-foreground/70"></div>
								</div>
							</div>
							<div class="mt-3 rounded-xl border border-border p-3 sm:p-4">
								<div class="flex items-center justify-between">
									<div class="h-2 w-20 rounded bg-muted-foreground/25"></div>
									<div class="h-2 w-10 rounded bg-muted-foreground/15"></div>
								</div>
								<div class="mt-4 flex h-20 items-end gap-2 sm:h-24">
									{#each [35, 53, 43, 72, 50, 84, 66, 95, 72, 100, 80, 92] as height, i}<div
											class="flex-1 rounded-t-sm bg-chart-1/25"
											style={`height:${height}%;opacity:${0.55 + i * 0.035}`}
										></div>{/each}
								</div>
							</div>
						</div>
					</div>
					<div
						class="flex items-center gap-2 border-t border-border bg-muted/30 px-4 py-2.5 text-[10px] text-muted-foreground"
					>
						<span class="size-1.5 rounded-full bg-chart-2"></span> Everything is in place. Your turn.
					</div>
				</div>
				<div
					class="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-lg sm:-left-8"
				>
					<span class="grid size-8 place-items-center rounded-lg bg-chart-2/10 text-chart-2"
						><Code2 class="size-4" /></span
					><span
						><span class="block text-xs font-medium">Built for momentum</span><span
							class="block text-[10px] text-muted-foreground">Svelte 5 + TypeScript</span
						></span
					>
				</div>
			</div>
		</section>

		<section id="features" class="scroll-mt-10 border-y border-border/70 bg-muted/25">
			<div class="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
				<div class="mx-auto max-w-2xl text-center">
					<span class="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
						>A better starting point</span
					>
					<h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
						The boring bits, already handled.
					</h2>
					<p class="mt-4 text-muted-foreground">
						A considered foundation with the essentials in place, ready to grow with your product.
					</p>
				</div>
				<div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div
						class="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<span class="grid size-11 place-items-center rounded-xl bg-chart-1/10 text-chart-1"
							><Zap class="size-5" /></span
						>
						<h3 class="mt-5 font-semibold">A fast, modern stack</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">
							Svelte 5 runes and SvelteKit give you a streamlined way to build responsive,
							full-stack experiences.
						</p>
					</div>
					<div
						class="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<span class="grid size-11 place-items-center rounded-xl bg-chart-2/10 text-chart-2"
							><Palette class="size-5" /></span
						>
						<h3 class="mt-5 font-semibold">A design system that fits</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">
							Semantic color tokens, dark mode, and shadcn-svelte components make the interface easy
							to adapt.
						</p>
					</div>
					<div
						class="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<span class="grid size-11 place-items-center rounded-xl bg-chart-3/10 text-chart-3"
							><Code2 class="size-5" /></span
						>
						<h3 class="mt-5 font-semibold">A developer-friendly setup</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">
							TypeScript, useful aliases, SEO defaults, and clear conventions help you move from
							idea to implementation.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section
			id="stack"
			class="mx-auto grid max-w-7xl scroll-mt-10 gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-2 lg:items-center"
		>
			<div>
				<span class="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
					>A solid foundation</span
				>
				<h2 class="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
					Modern tools. Less setup. More making.
				</h2>
				<p class="mt-4 max-w-lg leading-7 text-muted-foreground">
					Start with proven tools that work beautifully together. Keep what you need, customize the
					rest, and get to the part you’re excited about.
				</p>
				<a
					href="/hero"
					class="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:underline"
					>See the component demo <ArrowRight class="size-4" /></a
				>
			</div>
			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each [{ name: 'Svelte 5', detail: 'Reactive UI' }, { name: 'SvelteKit', detail: 'Full-stack app' }, { name: 'TypeScript', detail: 'Typed by default' }, { name: 'Tailwind v4', detail: 'CSS-first styles' }, { name: 'shadcn-svelte', detail: 'Accessible UI' }, { name: 'Mode watcher', detail: 'Dark mode ready' }] as item}<div
						class="rounded-xl border border-border bg-card p-4"
					>
						<div
							class="mb-5 grid size-8 place-items-center rounded-lg bg-secondary text-secondary-foreground"
						>
							<Check class="size-4" />
						</div>
						<p class="text-sm font-medium">{item.name}</p>
						<p class="mt-1 text-xs text-muted-foreground">{item.detail}</p>
					</div>{/each}
			</div>
		</section>

		<section id="faq" class="scroll-mt-10 border-t border-border/70 bg-muted/25">
			<div
				class="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]"
			>
				<div>
					<span class="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
						>Good to know</span
					>
					<h2 class="mt-3 text-3xl font-semibold tracking-tight">A few quick answers.</h2>
					<p class="mt-4 text-muted-foreground">
						Everything you need to get your first project moving.
					</p>
				</div>
				<Accordion.Root type="single" class="w-full"
					><Accordion.Item value="item-1"
						><Accordion.Trigger>What is included in this starter?</Accordion.Trigger
						><Accordion.Content
							>A SvelteKit app with Svelte 5, TypeScript, Tailwind CSS v4, shadcn-svelte components,
							dark mode, SEO defaults, and a polished landing page to make your own.</Accordion.Content
						></Accordion.Item
					><Accordion.Item value="item-2"
						><Accordion.Trigger>Can I change the design and colors?</Accordion.Trigger
						><Accordion.Content
							>Absolutely. Update the semantic tokens in <code>src/globale.css</code> and adapt the page
							components to fit your brand and product.</Accordion.Content
						></Accordion.Item
					><Accordion.Item value="item-3"
						><Accordion.Trigger>How do I get started?</Accordion.Trigger><Accordion.Content
							>Clone the repository, install dependencies with pnpm, and run <code>pnpm dev</code>.
							The README has the setup steps and useful commands.</Accordion.Content
						></Accordion.Item
					></Accordion.Root
				>
			</div>
		</section>
	</main>

	<footer
		class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8"
	>
		<a href="/" class="flex items-center gap-2 font-medium text-foreground"
			><span class="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground"
				><Sparkles class="size-3.5" /></span
			>launchkit</a
		>
		<p>Made for the things you’re about to make.</p>
		<div class="flex items-center gap-4">
			<a class="transition-colors hover:text-foreground" href="/getting-started">Getting started</a>
			<a class="transition-colors hover:text-foreground" href="/components">Components</a>
		</div>
		<a
			class="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
			href="https://github.com/abhijitgayen/svelte-shadcn-template"
			target="_blank"
			rel="noreferrer">Open source on GitHub <ArrowUpRight class="size-3.5" /></a
		>
	</footer>
</div>
