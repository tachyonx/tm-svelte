<script lang="ts">
	import { createDialog, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import Symbol from '$lib/components/Symbol.svelte';
	import type { Snippet } from 'svelte';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	let {
		click,
		children,
		className,
		inp = $bindable()
	}: { click: () => void; children: Snippet; className: string; inp: string } = $props();
</script>

<button use:melt={$trigger} class={className}>
	{@render children()}
</button>

{#if $open}
	<div class="font-nunito" use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 200 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-lg"
			use:melt={$content}
			transition:fly={{ y: 200 }}
		>
			<h2 use:melt={$title} class="mb-5 text-xl font-semibold leading-6 text-black">Add role</h2>
			<!-- <p use:melt={$description} class="-mt-1 mb-4 leading-normal text-zinc-600">desc</p> -->

			<div class="group relative bg-white">
				<input
					placeholder=""
					bind:value={inp}
					class="peer w-full rounded-lg border-2 border-gray-200 px-3 py-1.5 text-lg font-medium outline-none focus:border-black"
				/>
				<p
					class="pointer-events-none absolute left-3 top-0 -translate-y-1/2 px-1 text-xs text-gray-400 transition-all group-focus-within:!top-0 group-focus-within:!text-xs group-focus-within:text-black peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-enabled:bg-inherit"
				>
					Title
				</p>
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
					onclick={click}
					class="rounded-lg bg-green-400 px-4 py-2 text-black transition-colors duration-300 active:bg-green-500"
				>
					Save
				</button>
			</div>
			<button
				use:melt={$close}
				aria-label="close"
				class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-4 top-4 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full p-1"
			>
				<Symbol name="close" />
			</button>
		</div>
	</div>
{/if}
