<script lang="ts">
	import { ArrowUpRight, Sparkles } from '@lucide/svelte';
</script>

<footer
	class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8"
>
	<a
		href="/"
		class="flex items-center gap-2 font-medium text-foreground"
		aria-label="Launchkit home"
	>
		<span class="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground"
			><Sparkles class="size-3.5" /></span
		>
		launchkit
	</a>
	<p>Made for the things you’re about to make.</p>
	<nav
		class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
		aria-label="Footer navigation"
	>
		<a class="transition-colors hover:text-foreground" href="/hero">Demo</a>
		<a class="transition-colors hover:text-foreground" href="/components">Components</a>
		<a class="transition-colors hover:text-foreground" href="/getting-started">Getting started</a>
		<a
			class="inline-flex items-center gap-1 transition-colors hover:text-foreground"
			href="https://github.com/abhijitgayen/svelte-shadcn-template"
			target="_blank"
			rel="noreferrer">GitHub <ArrowUpRight class="size-3.5" /></a
		>
	</nav>
</footer>
