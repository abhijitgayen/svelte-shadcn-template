<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { SEO } from '#lib/components/seo/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { ArrowLeft, ArrowRight, Compass, Sparkles } from '@lucide/svelte';

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

<main
	class="animate-enter relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-16 text-foreground"
>
	<div
		class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top,var(--color-secondary),transparent_68%)]"
	></div>
	<div class="w-full max-w-xl text-center">
		<a href="/" class="mx-auto mb-14 inline-flex items-center gap-2.5 font-semibold tracking-tight"
			><span class="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"
				><Sparkles class="size-4" /></span
			>launchkit</a
		>
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
		<p class="mt-12 text-xs text-muted-foreground">
			Need a fresh start? <a
				href="/"
				class="font-medium text-foreground underline-offset-4 hover:underline"
				>Return to launchkit</a
			>
		</p>
		<nav
			class="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground"
			aria-label="More pages"
		>
			<a class="hover:text-foreground" href="/hero">Demo</a><a
				class="hover:text-foreground"
				href="/components">Components</a
			><a class="hover:text-foreground" href="/getting-started">Guide</a>
		</nav>
	</div>
</main>
