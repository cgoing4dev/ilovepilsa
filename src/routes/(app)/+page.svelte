<script lang="ts">
	import PostButton from '$lib/components/PostButton.svelte';
	import TweetCard from '$lib/components/TweetCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { CircleUserRound, Image, PenSquare, Smile } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let data;

	const googleLogin = async () => {
		await data.supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				// next는 추가로 정보를 물어볼 때 쓰는 것인듯!
				// redirectTo: `http://localhost:5173/auth/callback?next=test`
				redirectTo: `http://localhost:5173/auth/callback`
			}
		});
	};

	const kakaoLogin = async () => {
		await data.supabase.auth.signInWithOAuth({
			provider: 'kakao',
			options: {
				redirectTo: `http://localhost:5173/auth/callback`
			}
		});
	};
</script>

<button
	class="bg-white gap-2 w-full hover:ring-2 ring-violet-400 rounded-lg flex h-10 items-center px-4"
>
	<PenSquare class="w-5"></PenSquare>
	<p class="text-gray-400 text-sm">어떤 이야기를 나누고 싶나요?</p>
</button>

<div class="px-4 py-2 flex gap-4 items-center">
	{#if data.session == null}
		<!-- 로그인 세션이 없으면 -->
		<Smile class="w-8 h-8"></Smile>
		<!-- 글쓰기 버튼을 누를 때, 회원가입 폼이 뜬다. -->
		<Dialog.Root>
			<Dialog.Trigger>
				<PostButton></PostButton>
				<!-- 어떤 이야기를 나누고 싶나요? -->
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<div class="text-center space-y-4">
						<Dialog.Title>아이러브필사 멤버가 되어주세요.</Dialog.Title>
						<Dialog.Description>
							<p>멤버가 되면 모든 기능과 컨텐츠를 이용할 수 있어요.</p>
						</Dialog.Description>
					</div>
				</Dialog.Header>
				<div class="space-y-3 mx-auto">
					<button class="btn-google">
						<img src="ic_google_auth.svg" alt="authBtn" class="h-8 w-8" />
						<span class="text-sm">구글 계정으로 계속하기</span>
					</button>
					<button class="btn-kakao">
						<img src="ic_kakao_auth.svg" alt="authBtn" class="h-8 w-8" />
						<span class="text-sm">카카오 계정으로 계속하기</span>
					</button>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	{:else}
		<!-- 로그인 세션이 있으면 -->
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<!-- 글쓰기 버튼을 누를 때, 글쓰기 양식이 뜬다. -->
		<Dialog.Root>
			<Dialog.Trigger>
				<PostButton></PostButton>
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
				</Dialog.Header>

				<Dialog.Footer>
					<Button type="submit">Save changes</Button>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	{/if}

	<div></div>
</div>

<TweetCard></TweetCard>

<dialog open>
	<h1>로그인</h1>
	<div class="space-y-3 mx-auto">
		<button class="btn-google" on:click={googleLogin}>
			<img src="ic_google_auth.svg" alt="authBtn" class="h-8 w-8" />
			<span class="text-sm">구글 계정으로 계속하기</span>
		</button>
		<button class="btn-kakao" on:click={kakaoLogin}>
			<img src="ic_kakao_auth.svg" alt="authBtn" class="h-8 w-8" />
			<span class="text-sm">카카오 계정으로 계속하기</span>
		</button>
	</div>
</dialog>

<!-- <style lang="">
	:modal {
		border: 1px solid blue;
	}
</!--> -->

<!-- <style lang="postcss">
	.btn-google {
		@apply h-10 gap-2 p-2 flex items-center w-64 border rounded-sm hover:opacity-75;
	}

	.btn-kakao {
		@apply h-10 gap-2 p-2 flex items-center w-64 rounded-sm bg-yellow-300 text-black hover:opacity-75;
	}
</style> -->
