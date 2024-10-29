<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import Symbol from './Symbol.svelte';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	let name = $state('');

	const saveName = () => {
		localStorage.setItem('name', name);
	};
</script>

<button
	use:melt={$trigger}
	class="rounded-full p-2 transition-colors duration-300 active:bg-gray-200"
>
	<Symbol name="account_circle" />
</button>

{#if $open}
	<div use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 200 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-50 flex size-full -translate-x-1/2 -translate-y-1/2 flex-col justify-between bg-gray-50 px-6 py-5 font-nunito shadow-lg sm:max-h-fit sm:max-w-[450px] sm:rounded-lg"
			transition:fly={{ x: '100%' }}
			use:melt={$content}
		>
			<div>
				<h2 use:melt={$title} class="m-0 text-xl font-semibold leading-6 text-black">
					Edit profile
				</h2>
				<p use:melt={$description} class="mb-5 mt-1 text-sm leading-normal text-zinc-600">
					Change user's name. Click save when you're done.
				</p>

				<div class="group relative bg-white">
					<input
						bind:value={name}
						placeholder=""
						class="peer w-full rounded-lg border-2 border-gray-200 px-3 py-1.5 text-lg font-medium outline-none focus:border-black"
					/>
					<p
						class="pointer-events-none absolute left-3 top-0 -translate-y-1/2 px-1 text-sm text-gray-400 transition-all group-focus-within:!top-0 group-focus-within:!text-sm group-focus-within:text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-enabled:bg-inherit"
					>
						Display name
					</p>
				</div>
			</div>

			<div class="mt-6 flex justify-end gap-4 font-nunito font-semibold">
				<button
					use:melt={$close}
					class="rounded-lg bg-gray-200 px-4 py-2 transition-colors duration-300 active:bg-gray-300"
				>
					Cancel
				</button>
				<button
					use:melt={$close}
					onclick={saveName}
					class="rounded-lg bg-green-400 px-4 py-2 text-black transition-colors duration-300 active:bg-green-500"
				>
					Save changes
				</button>
			</div>
			<button
				use:melt={$close}
				aria-label="close"
				class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-6 top-5 inline-flex
                h-6 w-6 appearance-none items-center justify-center
                rounded-full p-1"
			>
				<Symbol name="close" />
			</button>
		</div>
	</div>
{/if}
