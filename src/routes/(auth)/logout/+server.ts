import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.supabase.auth.signOut();

	if (err) {
		console.log(err);
	}

	const nDate = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
	console.log('로그아웃 했음! : ', nDate);

	redirect(303, '/');
};
