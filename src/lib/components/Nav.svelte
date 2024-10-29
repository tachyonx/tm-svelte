<script>
	import { fade } from 'svelte/transition';
	import AccountEdit from './AccountEdit.svelte';
</script>

<nav
	in:fade
	class="flex h-16 items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 shadow shadow-gray-300"
>
	<h1 class="pt-1 font-kalam text-xl font-semibold tracking-wide">Toastmasters</h1>
	<AccountEdit />
</nav>
