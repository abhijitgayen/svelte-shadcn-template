<script lang="ts">
	import SiteHeader from '#lib/components/site-header.svelte';
	import SiteFooter from '#lib/components/site-footer.svelte';

	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import * as Accordion from '#lib/components/ui/accordion/index.js';
	import * as Alert from '#lib/components/ui/alert/index.js';
	import * as AlertDialog from '#lib/components/ui/alert-dialog/index.js';
	import { buttonVariants } from '#lib/components/ui/button/index.js';
	import { ArrowRight, ArrowUpRight, Check, Moon, Zap } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';

	type ComponentId = 'button' | 'badge' | 'alert' | 'alert-dialog' | 'accordion';

	const componentCatalog: { id: ComponentId; name: string; description: string }[] = [
		{ id: 'button', name: 'Button', description: 'Actions, links, and calls to action.' },
		{ id: 'badge', name: 'Badge', description: 'Compact labels for status and categories.' },
		{ id: 'alert', name: 'Alert', description: 'Persistent inline feedback and status.' },
		{
			id: 'alert-dialog',
			name: 'Alert Dialog',
			description: 'Confirmation for important decisions.'
		},
		{ id: 'accordion', name: 'Accordion', description: 'Expandable content for FAQs and details.' }
	];

	let selectedComponent = $state<ComponentId>('button');
	const selectedDetails = $derived(componentCatalog.find((item) => item.id === selectedComponent));
</script>

<SEO
	title="UI Components — Launchkit"
	description="Explore the included button, badge, and theme components and use them as a starting point for your SvelteKit app."
	keywords={['shadcn-svelte components', 'Svelte UI kit', 'Tailwind design system']}
/>

<div class="min-h-screen bg-background text-foreground">
	<SiteHeader />
	<main class="animate-enter mx-auto max-w-7xl px-5 pt-12 pb-20 sm:px-8 md:pt-20">
		<Badge variant="outline" class="gap-2"
			><span class="size-1.5 rounded-full bg-chart-1"></span> Component playground</Badge
		>
		<div class="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
			<div>
				<h1 class="text-4xl font-semibold tracking-tight sm:text-6xl">
					Small pieces.<br /><span class="text-muted-foreground">A polished whole.</span>
				</h1>
				<p class="mt-4 max-w-xl leading-7 text-muted-foreground">
					A dynamic playground for the shadcn-svelte components included in this starter. Pick a
					component, try its interaction, and copy the pattern into your app.
				</p>
			</div>
			<Button href="/getting-started" variant="outline"
				>Setup guide <ArrowUpRight class="size-4" /></Button
			>
		</div>
		<section class="mt-12 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
			<div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<p class="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
						Live explorer
					</p>
					<h2 class="mt-2 text-2xl font-semibold tracking-tight">Try a component</h2>
					<p class="mt-1 text-sm text-muted-foreground">{selectedDetails?.description}</p>
				</div>
				<a
					class="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
					href="https://shadcn-svelte.com/docs/components"
					target="_blank"
					rel="noreferrer"
					>Browse the full shadcn-svelte catalog <ArrowUpRight class="ml-1 inline size-3.5" /></a
				>
			</div>
			<div class="mt-6 grid gap-6 lg:grid-cols-[220px_1fr]">
				<div class="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
					{#each componentCatalog as component}
						<button
							type="button"
							class="shrink-0 rounded-lg border px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground {selectedComponent ===
							component.id
								? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
								: 'border-border bg-background text-foreground'}"
							onclick={() => (selectedComponent = component.id)}
							aria-pressed={selectedComponent === component.id}>{component.name}</button
						>
					{/each}
				</div>
				<div class="min-h-44 rounded-xl border border-dashed border-border bg-muted/30 p-5">
					{#if selectedComponent === 'button'}
						<div class="flex flex-wrap gap-3">
							<Button>Primary <ArrowRight class="size-4" /></Button><Button variant="secondary"
								>Secondary</Button
							><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button>
						</div>
					{:else if selectedComponent === 'badge'}
						<div class="flex flex-wrap items-center gap-3">
							<Badge>Default</Badge><Badge variant="secondary">In progress</Badge><Badge
								variant="outline">Design system</Badge
							><Badge variant="destructive">Needs attention</Badge>
						</div>
					{:else if selectedComponent === 'alert'}
						<div class="grid max-w-xl gap-3">
							<Alert.Root
								><Alert.Title>You're all set</Alert.Title><Alert.Description
									>Your project settings have been saved.</Alert.Description
								></Alert.Root
							><Alert.Root variant="destructive"
								><Alert.Title>Action needed</Alert.Title><Alert.Description
									>Check your details and try again.</Alert.Description
								></Alert.Root
							>
						</div>
					{:else if selectedComponent === 'alert-dialog'}
						<AlertDialog.Root
							><AlertDialog.Trigger class={buttonVariants({ variant: 'outline' })}
								>Open confirmation</AlertDialog.Trigger
							><AlertDialog.Content
								><AlertDialog.Header
									><AlertDialog.Title>Continue with this example?</AlertDialog.Title
									><AlertDialog.Description
										>This dialog demonstrates a confirmation flow. No project data will be changed.</AlertDialog.Description
									></AlertDialog.Header
								><AlertDialog.Footer
									><AlertDialog.Cancel>Cancel</AlertDialog.Cancel><AlertDialog.Action
										>Continue</AlertDialog.Action
									></AlertDialog.Footer
								></AlertDialog.Content
							></AlertDialog.Root
						>
					{:else}
						<Accordion.Root type="single" class="max-w-xl"
							><Accordion.Item value="details"
								><Accordion.Trigger>How does this starter use Accordion?</Accordion.Trigger
								><Accordion.Content
									>Compose Root, Item, Trigger, and Content to create accessible expandable
									sections.</Accordion.Content
								></Accordion.Item
							><Accordion.Item value="docs"
								><Accordion.Trigger>Where can I find more examples?</Accordion.Trigger
								><Accordion.Content
									>Visit the official shadcn-svelte documentation for more patterns and API details.</Accordion.Content
								></Accordion.Item
							></Accordion.Root
						>
					{/if}
				</div>
			</div>
		</section>
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
			<section class="rounded-2xl border border-border bg-card p-6 sm:p-8">
				<div>
					<h2 class="font-semibold">Alerts</h2>
					<p class="mt-1 text-sm text-muted-foreground">Inline status and feedback messages.</p>
				</div>
				<div class="mt-5 grid gap-3">
					<Alert.Root>
						<Alert.Title>You're all set</Alert.Title>
						<Alert.Description>Your project settings have been saved.</Alert.Description>
					</Alert.Root>
					<Alert.Root variant="destructive">
						<Alert.Title>Action needed</Alert.Title>
						<Alert.Description>Check your details and try again.</Alert.Description>
					</Alert.Root>
				</div>
				<p class="mt-4 text-xs text-muted-foreground">
					Use <code>Alert.Root</code> for a persistent callout. See the
					<a
						class="underline underline-offset-4 hover:text-foreground"
						href="https://shadcn-svelte.com/docs/components/alert"
						target="_blank"
						rel="noreferrer">Alert docs</a
					>.
				</p>
			</section>
			<section class="rounded-2xl border border-border bg-card p-6 sm:p-8">
				<div>
					<h2 class="font-semibold">Alert dialog</h2>
					<p class="mt-1 text-sm text-muted-foreground">
						A modal confirmation that needs a response.
					</p>
				</div>
				<div class="mt-5">
					<AlertDialog.Root>
						<AlertDialog.Trigger class={buttonVariants({ variant: 'outline' })}
							>Open confirmation</AlertDialog.Trigger
						>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title>Continue with this example?</AlertDialog.Title>
								<AlertDialog.Description
									>This dialog demonstrates a confirmation flow. No project data will be changed.</AlertDialog.Description
								>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
								<AlertDialog.Action>Continue</AlertDialog.Action>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
				</div>
				<p class="mt-4 text-xs text-muted-foreground">
					Reserve this for important decisions. See the
					<a
						class="underline underline-offset-4 hover:text-foreground"
						href="https://shadcn-svelte.com/docs/components/alert-dialog"
						target="_blank"
						rel="noreferrer">Alert Dialog docs</a
					>.
				</p>
			</section>
			<section class="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-2">
				<div>
					<h2 class="font-semibold">Accordion</h2>
					<p class="mt-1 text-sm text-muted-foreground">
						Expandable sections for FAQs and grouped details.
					</p>
				</div>
				<Accordion.Root type="single" class="mt-3">
					<Accordion.Item value="install">
						<Accordion.Trigger>How do I add a component?</Accordion.Trigger>
						<Accordion.Content
							>Run the shadcn-svelte CLI from the project root, for example <code
								>pnpm dlx shadcn-svelte@latest add accordion</code
							>. The generated files live in <code>src/lib/components/ui</code>.</Accordion.Content
						>
					</Accordion.Item>
					<Accordion.Item value="use">
						<Accordion.Trigger>How do I use Accordion in a Svelte page?</Accordion.Trigger>
						<Accordion.Content
							>Import the parts with <code
								>import * as Accordion from '#lib/components/ui/accordion/index.js'</code
							>, then compose Root, Item, Trigger, and Content. More examples are in the official
							<a
								class="underline underline-offset-4 hover:text-foreground"
								href="https://shadcn-svelte.com/docs/components/accordion"
								target="_blank"
								rel="noreferrer">Accordion docs</a
							>.</Accordion.Content
						>
					</Accordion.Item>
				</Accordion.Root>
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
	<SiteFooter />
</div>
