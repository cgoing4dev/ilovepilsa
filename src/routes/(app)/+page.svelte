<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import TweetCard from '$lib/components/TweetCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Image } from 'lucide-svelte';
</script>

<Header />

<div class="px-4 py-2 flex gap-2">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<div class="w-full border">
		<input
			placeholder="what is happening?"
			type="text"
			class="bg-transparent text-lg w-full px-2 outline-none h-10"
		/>
		<div class="flex border-t py-3 justify-between items-center">
			<div class="flex gap-2 items-center">
				<input type="file" hidden id="img" accept="image/png, image/jpeg, image/gif, image/webp" />
				<label for="img">
					<Image class="text-primary cursor-pointer" />
				</label>
			</div>
			<Button>Post</Button>
		</div>
	</div>
</div>
<TweetCard></TweetCard>
