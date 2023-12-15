<script lang="ts">
	export let data;
	const sb = data.supabase;

	const googleAuth = async () => {
		const { data, error } = await sb.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `http://localhost:5173/auth/callback`
			}
		});

		console.log(data);
	};

	const kakaoAuth = async () => {
		await data.supabase.auth.signInWithOAuth({
			provider: 'kakao',
			options: {
				redirectTo: `http://localhost:5173/auth/callback`
			}
		});
	};
</script>

<div class="grid place-items-center my-10">
	<div class="w-1/2 bg-white rounded-xl p-4">
		<header class="text-center">
			<a href="/" class="text-6xl">✍️</a>
			<h2 class="text-2xl font-bold my-4">아이러브필사 가입</h2>
			<p class="text-sm text-center mb-10">
				아이러브필사는 글쓰기에 진심인 사람들을 위한 공간이에요.
			</p>
		</header>

		<div class="grid place-items-center space-y-3">
			<button class="btn-google" on:click={googleAuth}>
				<img src="ic_google_auth.svg" alt="authBtn" class="h-8 w-8" />
				<span class="text-sm">구글 계정으로 가입</span>
			</button>
			<button class="btn-kakao" on:click={kakaoAuth}>
				<img src="ic_kakao_auth.svg" alt="authBtn" class="h-8 w-8" />
				<span class="text-sm">카카오 계정으로 가입</span>
			</button>
		</div>
	</div>
</div>
