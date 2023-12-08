<script>
	import Title from './CardTitle.svelte';
</script>

<div class="py-3 bg-gray-300 space-y-2 rounded-md">
	<slot {Title} />
	<slot name="content" />
	{#if $$slots.action}
		<slot name="action" />
	{/if}
</div>
