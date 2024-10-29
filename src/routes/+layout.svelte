<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import Client from '$lib/components/Client.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/fonts.css" />
</svelte:head>
<ParaglideJS {i18n}>
	<Client>
		{@render children()}
	</Client>
</ParaglideJS>
