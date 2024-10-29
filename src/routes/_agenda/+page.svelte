<script>
	import { goto } from '$app/navigation';
	import Symbol from '$lib/components/Symbol.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {{title:string, value:string}[]} */
	let arr = $state([{ title: 'Host', value: '' }]);

	let title = $state('');
	let value = $state('');

	onMount(() => {
		if (!localStorage.getItem('name')) {
			localStorage.setItem('name', 'Abdullah');
		}
		let _arr = localStorage.getItem('arr');
		if (!_arr) {
			localStorage.setItem('arr', JSON.stringify([{ title: 'host', value: '' }]));
		}
		_arr = localStorage.getItem('arr');
		arr = JSON.parse(_arr || '[]');
	});
</script>

<main in:fade class="flex h-screen flex-col overflow-hidden font-nunito">
	<h1 class="mt-4 text-center text-3xl font-bold">Event Agenda</h1>
	<div class="flex max-h-full flex-col gap-3 overflow-auto px-4 py-4">
		{#each arr as ar}
			<div class="group relative mt-6">
				<p class="absolute bottom-full px-1 text-lg text-gray-400">
					{ar.title}:
				</p>
				<input
					disabled
					value={ar.value || 'empty'}
					class="peer w-full rounded-lg border-2 px-3 py-1.5 text-lg font-medium text-black outline-none focus:border-black {ar.value
						? 'text-opacity-100'
						: 'text-opacity-40'} {ar.value.toLowerCase() ==
					localStorage.getItem('name')?.toLowerCase()
						? 'border-green-500'
						: 'border-gray-200'}"
				/>
				{#if ar.value.length == 0}
					<button
						onclick={() => {
							// @ts-ignore
							let _arr = JSON.parse(localStorage.getItem('arr') || '[]').map((e) =>
								e.title == ar.title ? { title: e.title, value: localStorage.getItem('name') } : e
							);
							localStorage.setItem('arr', JSON.stringify(_arr));
							arr = _arr;
						}}
						class="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-green-300 px-2 py-0.5 text-sm font-bold transition-all duration-300 active:bg-green-400"
						>Opt in</button
					>
				{/if}
			</div>
		{/each}
		<button
			onclick={() => {
				goto('/agenda');
				localStorage.setItem('isAdmin', 'true');
			}}
			class="absolute bottom-2 left-1/2 -translate-x-1/2 underline">view as admin</button
		>
		<button
			onclick={() => {
				goto('home');
			}}
			class="absolute left-3 top-3.5 rounded-full p-2 underline transition-colors duration-300 active:bg-gray-200"
		>
			<Symbol name="arrow_back_ios_new" />
		</button>
	</div>
</main>
