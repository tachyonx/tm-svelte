<script>
	import { onMount, tick } from 'svelte';
	import Symbol from './Symbol.svelte';
	import { pb } from '$lib/pocketbase';
	import { goto } from '$app/navigation';

	/**
	 * @typedef Props
	 * @prop {import('svelte').Snippet} children
	 */

	/** @type {Props & import('svelte/elements').HTMLAttributes<HTMLDivElement>} */
	let { children, class: className, ...props } = $props();

	let hasLoaded = $state(false);

	onMount(() => {
		tick().then(() => {
			if (!pb.authStore.isValid && !window.location.href.includes('/login')) {
				goto('/login').then(() => {
					hasLoaded = true;
				});
			} else if (pb.authStore.isValid && window.location.href.includes('/login')) {
				goto('/agenda').then(() => {
					hasLoaded = true;
				});
			} else {
				hasLoaded = true;
			}
		});
	});
</script>

<div
	class="relative flex h-screen w-screen flex-col overflow-hidden bg-gray-50 {className}"
	{...props}
>
	{#if hasLoaded}
		{@render children()}
	{:else}
		<span class="fixed inset-0 m-auto size-fit cursor-pointer">
			<Symbol name="progress_activity" size="40" class="animate-spin" />
		</span>
	{/if}
</div>
