<script>
	import Symbol from '$lib/components/Symbol.svelte';
	import Dialog from '../../component/Dialog.svelte';

	/** @type {{title:string}[]} */
	let arr = $state([{ title: 'Host' }]);

	let title = $state('');

	const add = () => {
		arr.push({ title });
		title = '';
	};
</script>

<main class="flex h-screen flex-col overflow-hidden font-nunito">
	<h1 class="mt-4 text-center text-3xl font-bold">Header</h1>
	<div class="flex max-h-full flex-col gap-3 overflow-auto px-4 py-4">
		{#each arr as ar}
			<div class="group relative bg-white">
				<input
					placeholder=""
					class="peer w-full rounded-lg border-2 border-gray-200 px-3 py-1.5 text-lg font-medium outline-none focus:border-black"
				/>
				<p
					class="pointer-events-none absolute left-3 top-0 -translate-y-1/2 px-1 text-xs text-gray-400 transition-all group-focus-within:!top-0 group-focus-within:!text-xs group-focus-within:text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-enabled:bg-inherit"
				>
					{ar.title}:
				</p>
			</div>
		{/each}
	</div>

	<Dialog
		bind:inp={title}
		click={() => {
			add();
		}}
		className="fixed bottom-4 right-4 grid size-12 place-content-center rounded-full border border-gray-100 bg-white shadow-md outline-none transition-all focus-visible:border-gray-200 focus-visible:shadow-xl active:bg-slate-50"
	>
		<Symbol name="add_2" />
	</Dialog>
</main>
