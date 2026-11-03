<script lang="ts">
	import { cn } from '#lib/utils.js';

	interface Props {
		compact?: boolean;
		class?: string;
	}

	let { compact = false, class: className }: Props = $props();
</script>

<span class={cn('inline-flex items-center gap-1 font-semibold tracking-tight', className)}>
	<span
		class={cn(
			'inline-flex shrink-0 items-center justify-center text-primary',
			compact ? 'size-7' : 'size-9'
		)}
		aria-hidden="true"
	>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			class={compact ? 'size-3.5' : 'size-[18px]'}
		>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z" fill="currentColor" />
			<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z" fill="currentColor" />
			<path d="M21 11H13V13H21V11Z" fill="currentColor" />
			<path d="M13 15H21V17H13V15Z" fill="currentColor" />
			<path d="M21 19H13V21H21V19Z" fill="currentColor" />
		</svg>
	</span>
	{#if !compact}
		<span>launch<span class="text-muted-foreground">kit</span></span>
	{/if}
</span>
