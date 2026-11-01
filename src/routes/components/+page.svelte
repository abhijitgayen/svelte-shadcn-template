<script lang="ts">
	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Moon, Sparkles, Zap } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<SEO
	title="UI Components — Launchkit"
	description="Explore the included button, badge, and theme components and use them as a starting point for your SvelteKit app."
	keywords={['shadcn-svelte components', 'Svelte UI kit', 'Tailwind design system']}
/>

<div class="min-h-screen bg-background text-foreground">
	<header
		class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-5 py-5 sm:px-8"
	>
		<a href="/" class="flex items-center gap-2.5 font-semibold"
			><span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"
				><Sparkles class="size-4" /></span
			>launchkit</a
		>
		<nav
			class="order-3 flex w-full items-center justify-center gap-5 border-t border-border/60 pt-3 text-xs text-muted-foreground sm:order-none sm:w-auto sm:border-0 sm:pt-0 sm:text-sm"
			aria-label="Main navigation"
		>
			<a class="hover:text-foreground" href="/hero">Demo</a><a
				class="hover:text-foreground"
				href="/components"
				aria-current="page">Components</a
			><a class="hover:text-foreground" href="/getting-started">Guide</a>
		</nav>
		<div class="flex items-center gap-2">
			<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle color theme"
				><Moon class="size-4" /></Button
			><Button href="/" variant="outline" size="sm"><ArrowLeft class="size-4" /> Home</Button>
		</div>
	</header>
	<main class="animate-enter mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-8 md:pt-20">
		<Badge variant="outline" class="gap-2"
			><span class="size-1.5 rounded-full bg-chart-1"></span> Component playground</Badge
		>
		<div class="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
			<div>
				<h1 class="text-4xl font-semibold tracking-tight sm:text-6xl">
					Small pieces.<br /><span class="text-muted-foreground">A polished whole.</span>
				</h1>
				<p class="mt-4 max-w-xl leading-7 text-muted-foreground">
					A quick look at the UI building blocks included in the starter. Copy the patterns, change
					the tokens, and make them fit your product.
				</p>
			</div>
			<Button href="/getting-started" variant="outline"
				>Setup guide <ArrowUpRight class="size-4" /></Button
			>
		</div>
		<div class="mt-12 grid gap-5 lg:grid-cols-2">
			<section
				class="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
			>
				<div class="flex items-center gap-3">
					<span class="grid size-10 place-items-center rounded-xl bg-chart-1/10 text-chart-1"
						><Zap class="size-5" /></span
					>
					<div>
						<h2 class="font-semibold">Buttons</h2>
						<p class="text-sm text-muted-foreground">Variants and sizes for common actions</p>
					</div>
				</div>
				<div class="mt-7 flex flex-wrap gap-3">
					<Button>Primary action <ArrowRight class="size-4" /></Button><Button variant="secondary"
						>Secondary</Button
					><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button
						variant="destructive">Destructive</Button
					>
				</div>
				<div class="mt-6 border-t border-border pt-5">
					<p class="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
						Sizes
					</p>
					<div class="flex flex-wrap items-center gap-3">
						<Button size="sm">Compact</Button><Button>Default</Button><Button size="lg"
							>Large action</Button
						>
					</div>
				</div>
			</section>
			<section
				class="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
			>
				<div class="flex items-center gap-3">
					<span class="grid size-10 place-items-center rounded-xl bg-chart-2/10 text-chart-2"
						><Check class="size-5" /></span
					>
					<div>
						<h2 class="font-semibold">Badges</h2>
						<p class="text-sm text-muted-foreground">Useful for status, categories, and labels</p>
					</div>
				</div>
				<div class="mt-7 flex flex-wrap items-center gap-3">
					<Badge>Default</Badge><Badge variant="secondary">In progress</Badge><Badge
						variant="outline">Design system</Badge
					><Badge variant="destructive">Needs attention</Badge><Badge
						variant="outline"
						class="gap-2"><span class="size-1.5 rounded-full bg-chart-2"></span> Live</Badge
					>
				</div>
				<div class="mt-6 rounded-xl bg-muted/50 p-4">
					<p class="text-sm font-medium">A small status card</p>
					<div class="mt-3 flex items-center justify-between">
						<div>
							<p class="text-sm">Deployment</p>
							<p class="mt-0.5 text-xs text-muted-foreground">Updated just now</p>
						</div>
						<Badge variant="secondary"><Check class="size-3" /> Healthy</Badge>
					</div>
				</div>
			</section>
			<section class="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
				<div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
					<div>
						<h2 class="font-semibold">Semantic color tokens</h2>
						<p class="mt-1 text-sm text-muted-foreground">
							Switch themes and see the surfaces adapt automatically.
						</p>
					</div>
					<Button variant="outline" onclick={toggleMode}
						><Moon class="size-4" /> Toggle theme</Button
					>
				</div>
				<div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
					<div class="rounded-xl border border-border bg-background p-4">
						<span class="block size-8 rounded-lg bg-primary"></span>
						<p class="mt-3 text-sm font-medium">Primary</p>
						<p class="text-xs text-muted-foreground">Actions</p>
					</div>
					<div class="rounded-xl border border-border bg-muted p-4">
						<span class="block size-8 rounded-lg bg-secondary"></span>
						<p class="mt-3 text-sm font-medium">Secondary</p>
						<p class="text-xs text-muted-foreground">Quiet emphasis</p>
					</div>
					<div class="rounded-xl border border-border bg-card p-4">
						<span class="block size-8 rounded-lg border border-border bg-card"></span>
						<p class="mt-3 text-sm font-medium">Card</p>
						<p class="text-xs text-muted-foreground">Content surfaces</p>
					</div>
					<div class="rounded-xl border border-border bg-background p-4">
						<span class="block size-8 rounded-lg bg-destructive"></span>
						<p class="mt-3 text-sm font-medium">Destructive</p>
						<p class="text-xs text-muted-foreground">Important actions</p>
					</div>
				</div>
			</section>
		</div>
		<section
			class="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center sm:p-8"
		>
			<div>
				<h2 class="text-xl font-semibold">Ready to make it yours?</h2>
				<p class="mt-1 text-sm text-primary-foreground/70">
					Start with the setup guide and build from here.
				</p>
			</div>
			<Button href="/getting-started" variant="secondary"
				>Get started <ArrowRight class="size-4" /></Button
			>
		</section>
	</main>
</div>
