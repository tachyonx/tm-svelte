<script>
	import { goto } from '$app/navigation';
	import Symbol from '$lib/components/Symbol.svelte';
	import { onMount } from 'svelte';
	import Dialog from '../../component/Dialog.svelte';
	import { fade } from 'svelte/transition';

	/** @type {{title:string,value:string}[]} */
	let arr = $state([{ title: 'Host', value: '' }]);

	let title = $state('');

	const add = () => {
		arr.push({ title, value: '' });
		localStorage.setItem(
			'arr',
			JSON.stringify([...JSON.parse(localStorage.getItem('arr') || '[]'), { title, value: '' }])
		);
		title = '';
	};

	onMount(() => {
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
	<div class="flex max-h-full flex-col gap-4 overflow-auto px-4 py-4">
		{#each arr as ar}
			<div class="group relative bg-gray-50">
				<input
					placeholder=""
					value={ar.value}
					oninput={(evt) => {
						// @ts-ignore
						let _arr = JSON.parse(localStorage.getItem('arr') || '[]').map((e) =>
							// @ts-ignore
							e.title == ar.title ? { title: e.title, value: evt.target.value } : e
						);
						localStorage.setItem('arr', JSON.stringify(_arr));
						arr = _arr;
					}}
					class="peer w-full rounded-lg border-2 border-gray-200 bg-inherit px-3 py-1.5 text-lg font-medium outline-none focus:border-black"
				/>
				<p
					class="pointer-events-none absolute left-3 top-0 -translate-y-1/2 px-1 text-sm text-gray-400 transition-all group-focus-within:!top-0 group-focus-within:!text-sm group-focus-within:text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-enabled:bg-inherit"
				>
					{ar.title}
				</p>
			</div>
		{/each}
		<button
			onclick={() => {
				goto('/_agenda');
				localStorage.setItem('isAdmin', 'false');
			}}
			class="absolute bottom-2 left-1/2 -translate-x-1/2 underline">view as user</button
		>
		<button
			onclick={() => {
				localStorage.setItem('arr', '');
				arr = [];
			}}
			class="absolute right-3 top-3.5 rounded-full p-2 underline transition-colors duration-300 active:bg-gray-200"
		>
			<Symbol name="delete" />
		</button>
		<button
			onclick={() => {
				goto('home');
			}}
			class="absolute left-3 top-3.5 rounded-full p-2 underline transition-colors duration-300 active:bg-gray-200"
		>
			<Symbol name="arrow_back_ios_new" />
		</button>
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
