import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import type { Provider } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	// if the user is already logged in return him to the home page
	const session = await getSession();
	if (session) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	handleOAuthLogin: async (event) => {
		console.log('hit server login action');

		const { locals, url } = event;

		// 소셜로그인
		const provider = url.searchParams.get('provider') as Provider;

		console.log(provider);

		const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
			provider: provider
		});

		if (err) {
			console.log(err);
			return fail(400, {
				message: 'Something went wrong.'
			});
		}

		console.log(data);

		// data.url이 소셜로그인 Provider으로의 리다이렉션 url
		throw redirect(303, data.url);
	}
};
