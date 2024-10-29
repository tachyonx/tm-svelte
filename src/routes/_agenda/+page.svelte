<script>
	import Symbol from '$lib/components/Symbol.svelte';
	import Dialog from '../../component/_Dialog.svelte';

	/** @type {{title:string, value:string}[]} */
	let arr = $state([{ title: 'Host', value: '' }]);

	let title = $state('');
	let value = $state('');

	const add = () => {
		arr.push({ title, value });
		title = '';
		value = '';
	};
</script>

<main class="flex h-screen flex-col overflow-hidden font-nunito">
	<h1 class="mt-4 text-center text-3xl font-bold">Header</h1>
	<div class="flex max-h-full flex-col gap-3 overflow-auto px-4 py-4">
		{#each arr as ar}
			<div class="group relative mt-6 bg-white">
				<p class="absolute bottom-full px-1 text-lg text-gray-400">
					{ar.title}:
				</p>
				<input
					disabled
					value={ar.value || 'empty'}
					class="peer w-full rounded-lg border-2 border-gray-200 px-3 py-1.5 text-lg font-medium text-black outline-none focus:border-black {ar.value
						? 'text-opacity-100'
						: 'text-opacity-40'}"
				/>
				{#if ar.value.length == 0}
					<button
						class="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-green-300 px-2 py-0.5 text-sm font-bold transition-all duration-300 active:bg-green-400"
						>Opt in</button
					>
				{/if}
			</div>
		{/each}
	</div>

	<Dialog
		bind:inp={title}
		bind:val={value}
		click={() => {
			add();
		}}
		className="fixed bottom-4 right-4 grid size-12 place-content-center rounded-full border border-gray-100 bg-white shadow-md outline-none transition-all focus-visible:border-gray-200 focus-visible:shadow-xl active:bg-slate-50"
	>
		<Symbol name="add_2" />
	</Dialog>
</main>
