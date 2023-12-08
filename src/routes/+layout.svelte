<script lang="ts">
	import '../app.css';
	import { buttonVariants } from '$lib/components/ui/button';
	export let data;
</script>

<p>session 객체 : {data.session}</p>
<p>유저 : {data.session?.user.email}</p>
<p>만료 : {data.session?.expires_at}</p>

<nav class="flex justify-between p-2 max-w-6xl mx-auto items-center">
	<a href="/" class="text-blue-600">Home</a>
	<div>
		{#if !data.session}
			<a href="/login" class={buttonVariants({ variant: 'secondary' })}>로그인</a>
			<a href="/register" class={buttonVariants({ variant: 'link' })}>회원가입</a>
		{:else}
			<p>Welcome, {data.session.user.email}</p>
			<a href="/user_profile">User profile</a>
			<a href="/logout">Logout</a>
			<!-- <form action="/logout" method="POST" use:enhance>
				<button type="submit">Logout</button>
			</form> -->
		{/if}
	</div>
</nav>
<slot />
