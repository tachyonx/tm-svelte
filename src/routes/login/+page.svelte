<script>
	import { goto } from '$app/navigation';
	import Loading from '$lib/components/Loading.svelte';
	import { pb } from '$lib/pocketbase';

	let isLoading = $state(false);
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
	{#if isLoading}
		<Loading />
	{:else}
		<button
			disabled={isLoggingIn}
			onclick={login}
			class="relative select-none overflow-hidden rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 font-nunito text-lg font-bold shadow-sm"
		>
			Sign in with Google
			{#if isLoggingIn}
				<span class="absolute inset-0 grid place-content-center bg-inherit">
					<Loading />
				</span>
			{/if}
		</button>
	{/if}
</main>
