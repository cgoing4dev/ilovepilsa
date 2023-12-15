<script lang="ts">
	import Card from './Card.svelte';
	import Button from './ui/button/button.svelte';
</script>

<div class="px-5 flex-[0.6] hidden md:inline-block border py-2 space-y-4">
	<!-- <SearchBar /> -->
	<Card let:Title>
		<Title>Subscribe To Premium</Title>
		<p slot="content">
			Subscribe to unlock new features and if eligible, receive a share of ads revenue.
		</p>
		<Button slot="action">Subscribe</Button>
	</Card>
	<Card let:Title>
		<div class="px-2">
			<Title>trend for you</Title>
		</div>
		<div slot="content">
			{#each Array(5) as _}
				<div class="cursor-pointer rounded py-2 hover:bg-gray-200 border p-2">
					<div class="flex items-center gap-1 text-xs capitalize">
						<p>music</p>
						<p>trending</p>
					</div>
					<p class="font-bold text-sm capitalize">davido</p>
					<p class="text-xs text-gray-500">255.5k</p>
				</div>
			{/each}
		</div>
	</Card>
</div>
