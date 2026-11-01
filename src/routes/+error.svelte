<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { SEO } from '#lib/components/seo/index.js';

	const goHome = () => goto('/');
	const goBack = () => history.back();

	const isNotFound = $derived(page.status === 404);
	const errorTitle = $derived(
		`${page.status} - ${isNotFound ? 'Page Not Found' : 'Application Error'}`
	);
</script>

<SEO
	title={errorTitle}
	description="The requested page could not be found or an unexpected error occurred."
	noindex={true}
	nofollow={true}
/>

<div
	class="bg-background text-foreground flex min-h-screen items-center justify-center px-6 py-12"
>
	<div class="w-full max-w-md text-center">
		<!-- Error Icon -->
		<div
			class="bg-destructive/10 text-destructive mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M12 8v4" />
				<path d="M12 16h.01" />
			</svg>
		</div>

		<!-- Status -->
		<p class="text-primary mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
			Error {page.status}
		</p>

		<!-- Heading -->
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
			{isNotFound ? 'Page not found' : 'Something went wrong'}
		</h1>

		<!-- Description -->
		<p class="text-muted-foreground mx-auto mt-4 max-w-sm text-sm leading-7">
			{isNotFound
				? "Sorry, we couldn't find the page you're looking for. It may have been moved or deleted."
				: 'An unexpected error occurred. Please try again or return to the home page.'}
		</p>

		<!-- Actions -->
		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<button
				onclick={goHome}
				class="bg-primary text-primary-foreground focus-visible:ring-ring focus-visible:ring-offset-background rounded-xl px-6 py-3 text-sm font-semibold shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
			>
				Go to Home
			</button>

			<button
				onclick={goBack}
				class="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring focus-visible:ring-offset-background rounded-xl border px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
			>
				Go Back
			</button>
		</div>

		<!-- Footer -->
		<p class="text-muted-foreground mt-12 text-xs">
			SvelteKit shadcn Starter · Error {page.status}
		</p>
	</div>
</div>
