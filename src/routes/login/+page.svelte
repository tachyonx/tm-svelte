<script>
	import { goto } from '$app/navigation';
	import Symbol from '$lib/components/Symbol.svelte';
	import { pb } from '$lib/pocketbase';

	let isLoggingIn = $state(false);

	const login = () => {
		isLoggingIn = true;
		pb.collection('users')
			.authWithOAuth2({ provider: 'google' })
			.then((e) => {
				console.log(e);
				goto('/agenda');
			});
		isLoggingIn = false;
	};
</script>

<main class="grid h-screen place-content-center overflow-hidden bg-slate-50">
	<button
		disabled={isLoggingIn}
		onclick={login}
		class="relative select-none overflow-hidden rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-nunito text-lg font-bold shadow-sm"
	>
		Sign in with Google
		{#if isLoggingIn}
			<span class="absolute inset-0 grid place-content-center bg-inherit">
				<Symbol name="progress_activity" class="animate-spin" />
			</span>
		{/if}
	</button>
</main>
