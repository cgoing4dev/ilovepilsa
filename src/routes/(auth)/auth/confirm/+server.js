import { redirect } from '@sveltejs/kit';

export const GET = async (/** @type {{ url: any; locals: { supabase: any; }; }} */ event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const token_hash = url.searchParams.get('token_hash');
	const type = url.searchParams.get('type');
	const next = url.searchParams.get('next') ?? '/';

	console.log({
		token_hash,
		type,
		next
	});

	if (token_hash && type) {
		const { error } = await supabase.auth.verifyOtp({ token_hash, type });
		if (!error) {
			redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with some instructions
	redirect(303, '/auth/auth-code-error');
};

/* 
회원가입 버튼 누르면 register의 +page.server.ts에서 
const { data, error: err } = await locals.supabase.auth.signUp({
	email: email,
	password: password
}) <----- 이게 실행되어
supabase DB User에 저장되고
이메일 확인 전 상태로 됨.

에러가 없으면
throw redirect(303, "/check_email") 로 보냄

이건 아마도 "이메일을 확인하세요" 라는 페이지를 만들어서 알려주라는 느낌

실제 이메일을 confirm 하면 이 링크를 타고 들어오는 거임!!
*/
