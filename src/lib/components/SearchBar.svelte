<script lang="ts">
	import { Search } from 'lucide-svelte';
</script>

<form class="rounded-md flex items-center px-2 bg-gray-200 gap-2">
	<Search class="w-4 h-4" />
	<input
		type="text"
		placeholder="아이러브필사 검색하기"
		class="flex-1 h-8 bg-transparent text-sm w-44 focus:w-96 outline-none"
	/>
</form>
