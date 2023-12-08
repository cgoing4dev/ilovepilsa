import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	await locals.supabase.auth.signOut();

	const nDate = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
	console.log('로그아웃 했음! : ', nDate);

	throw redirect(303, '/');
};
