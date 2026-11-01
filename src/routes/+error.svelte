<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import SiteHeader from '#lib/components/site-header.svelte';
	import SiteFooter from '#lib/components/site-footer.svelte';
	import { ArrowLeft, ArrowRight, Compass } from '@lucide/svelte';

	const isNotFound = $derived(page.status === 404);
	const errorTitle = $derived(
		`${page.status} — ${isNotFound ? 'Page not found' : 'Something went wrong'}`
	);
</script>

<SEO
	title={errorTitle}
	description="The requested page could not be found or an unexpected error occurred."
	noindex={true}
	nofollow={true}
/>

<div class="flex min-h-screen flex-col bg-background text-foreground">
	<SiteHeader />
	<main
		class="animate-enter relative isolate flex flex-1 items-center justify-center overflow-hidden px-5 py-16"
	>
		<div
			class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top,var(--color-secondary),transparent_68%)]"
		></div>
		<div class="w-full max-w-xl text-center">
			<div
				class="mx-auto grid size-20 place-items-center rounded-3xl border border-border bg-card text-muted-foreground shadow-sm"
			>
				<Compass class="size-9" />
			</div>
			<p class="mt-8 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
				Error {page.status}
			</p>
			<h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
				{isNotFound ? 'This page wandered off.' : 'A little detour.'}
			</h1>
			<p class="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
				{isNotFound
					? 'We can’t find the page you’re looking for. It may have moved, or the link might be out of date.'
					: 'Something unexpected happened while loading this page. Try again, or head back to the start.'}
			</p>
			<div class="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
				<Button onclick={() => goto('/')} size="lg" class="h-11 rounded-xl px-5"
					>Back to home <ArrowRight class="size-4" /></Button
				><Button
					onclick={() => history.back()}
					variant="outline"
					size="lg"
					class="h-11 rounded-xl px-5"><ArrowLeft class="size-4" /> Go back</Button
				>
			</div>
		</div>
	</main>
	<SiteFooter />
</div>
