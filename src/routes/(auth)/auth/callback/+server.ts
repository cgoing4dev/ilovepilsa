import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	console.log('hit callback api');
	const {
		url,
		locals: { supabase }
	} = event;

	console.log(url);

	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '';

	// next는 내가 임의로 하는 부분인 듯? 추가 정보 받고 싶을 때?

	console.log('code : ', code);
	console.log('next : ', next);

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			if (next === '') {
				console.log('홈으로');
				throw redirect(303, '/');
			} else {
				console.log('next 페이지로');
				throw redirect(303, `/${next}`);
			}
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth/auth-code-error');
};
