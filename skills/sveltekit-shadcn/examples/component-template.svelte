<!-- Svelte 5 Component Reference Template -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '#lib/utils.js';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title: string;
		description?: string;
		variant?: 'default' | 'card' | 'ghost';
		children?: Snippet;
		footer?: Snippet<[count: number]>;
	}

	let {
		title,
		description,
		variant = 'default',
		class: className,
		children,
		footer,
		...restProps
	}: Props = $props();

	// Reactive local state using Svelte 5 runes
	let count = $state(0);

	// Derived computation
	const isHighlighted = $derived(count > 5);

	function increment() {
		count += 1;
	}
</script>

<div
	class={cn(
		'rounded-xl border p-6 transition-all',
		variant === 'default' && 'bg-background border-border text-foreground',
		variant === 'card' && 'bg-card border-border text-card-foreground shadow-sm',
		variant === 'ghost' && 'border-transparent bg-transparent',
		isHighlighted && 'ring-2 ring-primary ring-offset-2',
		className
	)}
	{...restProps}
>
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-semibold tracking-tight">{title}</h3>
		{#if isHighlighted}
			<span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
				Active
			</span>
		{/if}
	</div>

	{#if description}
		<p class="mt-1 text-sm text-muted-foreground">{description}</p>
	{/if}

	<div class="mt-4">
		{#if children}
			{@render children()}
		{:else}
			<p class="text-sm">Default content placeholder</p>
		{/if}
	</div>

	{#if footer}
		<div class="mt-6 border-t border-border pt-4">
			{@render footer(count)}
		</div>
	{/if}
</div>
