<script lang="ts">
	import '../globale.css';
	import { ModeWatcher } from 'mode-watcher';
	import { SEO } from '#lib/components/seo/index.js';

	let { children } = $props();
</script>

<SEO />
<ModeWatcher />
{@render children()}
