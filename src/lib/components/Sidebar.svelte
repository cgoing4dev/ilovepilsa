<script>
	import { Home, Search, Bell, Mail, List, Bookmark, UserRound, LogOut, Pen } from 'lucide-svelte';
	import Button from './ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';

	const sidebarOptions = [
		{
			icon: Home,
			title: 'home',
			href: '/'
		},
		{
			icon: Search,
			title: 'explorer',
			href: '/'
		},
		{
			icon: Bell,
			title: 'notification',
			href: '/'
		},
		{
			icon: Mail,
			title: 'messages',
			href: '/'
		},
		{
			icon: List,
			title: 'lists',
			href: '/'
		},
		{
			icon: Bookmark,
			title: 'bookmark',
			href: '/'
		},
		{
			icon: UserRound,
			title: 'profile',
			href: '/'
		},
		{
			icon: LogOut,
			title: 'logout',
			href: '/logout'
		}
	];
</script>

<div
	class="px-3 md:flex-[0.2] h-screen md:px-2 border flex justify-between flex-col sticky z-10 top-0 left-0"
>
	<div class="mt-10">
		{#each sidebarOptions as { icon, title, href }}
			<a {href} class="flex gap-[22px] p-3 w-fit rounded-full hover:bg-white/10">
				<svelte:component this={icon} class="w-7 h-7" />
				<p class="text-lg capitalize hidden md:inline-block pr-5">{title}</p>
			</a>
		{/each}
	</div>

	<Button class="md:py-6 md:w-full">
		<Pen class="md:mr-2 h-4 w-4" />
		<span class="hidden md:inline"> Post </span>
	</Button>

	<div class="flex gap-2 items-center justify-center mt-4">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>

		<div class="hidden md:inline-block">
			<p class="font-medium capitalize">hyeonjun choi</p>
			<p class="text-gray-800">cgoing4dev@gmail.com</p>
		</div>
	</div>
</div>
