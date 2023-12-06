<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { MessageCircle, Heart } from 'lucide-svelte';
</script>

<a href="/post/post-1" class="flex gap-2 border-t p-3">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<div class="w-full">
		<div class="flex items-center text-xs text-gray-500 gap-1">
			<h3 class="capitalize text-sm font-semibold text-white">hyeonjun choi</h3>
			<p>@cgoing4dev</p>
			<span>&#183;</span>
			<p>22h</p>
		</div>
		<p class="text-sm mb-2 mt-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis temporibus nulla,
			architecto dolor ducimus iusto velit reiciendis neque doloremque, perferendis labore ipsa enim
			facilis, maxime non eaque est rerum.
		</p>

		<img src="rabbit_svelte.png" alt="" class="rounded-sm object-contain w-full" />
		<div class="flex border justify-between text-sm mt-2">
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
</a>
