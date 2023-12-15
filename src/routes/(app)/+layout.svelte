<script>
	import RightSide from '$lib/components/RightSide.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Search } from 'lucide-svelte';

	export let data;
</script>

<p>session 객체 : {data.session}</p>
<p>유저 : {data.session?.user.email}</p>
<p>만료 : {data.session?.expires_at}</p>

<nav class="flex justify-between p-2 max-w-6xl mx-auto items-center">
	<div class="flex items-center gap-6">
		<a href="/" class="text-xl bg-white p-1 rounded-xl">아이러브필사✍️</a>
		<form class="rounded-md flex items-center px-2 bg-gray-200 gap-2 hover:ring-2">
			<Search class="w-4 h-4" />
			<input
				type="text"
				placeholder="아이러브필사 검색하기"
				class="flex-1 h-8 bg-transparent outline-none text-sm w-44 focus:w-96 transition-width duration-300 ease-in-out"
			/>
		</form>
	</div>
	<div>
		<!-- 로그인 세션이 없으면 로그인/회원가입 버튼 -->
		{#if data.session == null}
			<Button href="/login" class="btn-login">로그인</Button>
			<Button href="/register" variant="destructive" class="btn-register">회원가입</Button>
		{:else}
			<p class="font-tourney">Welcome, {data.session.user.email}</p>
			<a href="/user_profile">User profile</a>
			<a href="/logout">Logout</a>
		{/if}
	</div>
</nav>

<div class="flex border mx-auto w-full max-w-6xl">
	<Sidebar />
	<main class="min-h-screen flex-1">
		<slot />
	</main>
	<RightSide />
</div>
