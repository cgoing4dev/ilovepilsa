<script>
	import { ArrowLeft, MessageCircle, Heart } from 'lucide-svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from '$lib/components/ui/button/button.svelte';
	import TweetCard from '$lib/components/TweetCard.svelte';
</script>

<header class="p-4 flex items-center gap-3">
	<ArrowLeft />
	<h1 class="capitalize font-semibold text-lg">post</h1>
</header>
<div>
	<div class="px-4">
		<div class="flex justify-between">
			<div class="flex gap-2">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div>
					<p class="capitalize font-semibold">hyeonjun choi</p>
					<p class="text-sm text-gray-300">@cgoing4dev</p>
				</div>
			</div>
			<Button variant="secondary">follow</Button>
		</div>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque qui libero nostrum saepe
			quasi reiciendis necessitatibus, architecto recusandae officiis, pariatur eos voluptatum ab
			laboriosam a numquam explicabo dicta reprehenderit unde.
		</p>
		<img src="/rabbit_svelte.png" alt="" />
		<div class="flex justify-between text-sm mt-2">
			<button class="flex transition-all group items-center gap-2 text-gray-600">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<Heart class="group-hover:text-blue-500" />
				</div>
				<span class="group-hover:text-blue-500">7</span>
			</button>
			<button class="flex transition-all group items-center gap-2 text-gray-600">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<MessageCircle class="group-hover:text-blue-500" />
				</div>
				<span class="group-hover:text-blue-500">7</span>
			</button>
			<button class="flex transition-all group items-center gap-2 text-gray-600">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<Heart class="group-hover:text-blue-500" />
				</div>
				<span class="group-hover:text-blue-500">7</span>
			</button>
			<button class="flex transition-all group items-center gap-2 text-gray-600">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<Heart class="group-hover:text-blue-500" />
				</div>
				<span class="group-hover:text-blue-500">7</span>
			</button>
		</div>
	</div>
	<div class="flex gap-2 px-4 py-3">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<input type="text" placeholder="Post your reply" class="bg-transparent border flex-1" />
		<Button>comment</Button>
	</div>
	<div>
		<TweetCard />
		<TweetCard />
		<TweetCard />
		<TweetCard />
	</div>
</div>
