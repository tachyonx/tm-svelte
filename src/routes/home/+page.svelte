<script>
	import { goto } from '$app/navigation';
	import Nav from '$lib/components/Nav.svelte';
	import { fade } from 'svelte/transition';
</script>

<Nav />
<div in:fade class="grid flex-1 place-content-center">
	<button
		onclick={() => {
			goto('/agenda');
		}}
		class="font-nunito font-medium underline">view example agenda</button
	>
</div>
