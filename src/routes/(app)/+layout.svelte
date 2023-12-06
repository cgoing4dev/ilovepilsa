<script>
	import RightSide from '$lib/components/RightSide.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex border mx-auto w-full max-w-6xl">
	<Sidebar />
	<main class="min-h-screen flex-1">
		<slot />
	</main>
	<RightSide />
</div>
