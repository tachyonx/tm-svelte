<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase';
	let { children } = $props();
	let isLoading = $state(false);

	onMount(() => {
		if (!pb.authStore.isValid) {
			document.getElementById('/login')?.click();
		} else if (window.location.href.includes('login')) {
			document.getElementById('/agenda')?.click();
		} else {
			isLoading = true;
		}
	});
</script>

<a id="/agenda" href="/agenda" aria-label="functional"></a>
<a id="/login" href="/login" aria-label="functional"></a>
<ParaglideJS {i18n}>
	{#if isLoading}
		{@render children()}
	{:else}
		<p>loading</p>
	{/if}
</ParaglideJS>
