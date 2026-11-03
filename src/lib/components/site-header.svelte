<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import BrandLogo from '#lib/components/brand-logo.svelte';
	import { ArrowUpRight, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Demo', href: '/hero' },
		{ label: 'Components', href: '/components' },
		{ label: 'Guide', href: '/getting-started' }
	];
</script>

<header
	class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-5 py-5 sm:px-8"
>
	<a
		href="/"
		class="flex items-center gap-2.5 font-semibold tracking-tight"
		aria-label="Launchkit home"
	>
		<BrandLogo />
	</a>

	<nav
		class="order-3 flex w-full items-center justify-center gap-x-5 gap-y-2 border-t border-border/60 pt-3 text-xs text-muted-foreground sm:order-none sm:w-auto sm:border-0 sm:pt-0 sm:text-sm"
		aria-label="Main navigation"
	>
		{#each links as link}
			<a
				href={link.href}
				aria-current={page.url.pathname === link.href ? 'page' : undefined}
				class="transition-colors hover:text-foreground aria-[current=page]:font-medium aria-[current=page]:text-foreground"
				>{link.label}</a
			>
		{/each}
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
			class="hidden sm:inline-flex">GitHub <ArrowUpRight class="size-4" /></Button
		>
	</div>
</header>
