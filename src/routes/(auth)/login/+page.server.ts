import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';
import { AuthApiError } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession();
	// if the user is already logged in return him to the home page
	if (session) {
		throw redirect(303, '/');
	}

	return {
		form: superValidate(formSchema)
	};
};

export const actions: Actions = {
	login: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const email = form.data.email;
		const password = form.data.password;

		const { data, error: err } = await event.locals.supabase.auth.signInWithPassword({
			email: email,
			password: password
		});

		console.log('로그인 완료 : ', data);

		if (err) {
			if (err instanceof AuthApiError && err.status >= 400 && err.status < 500) {
				return fail(400, {
					error: 'invalidCredentials',
					email: email,
					invalid: true,
					message: err.message
				});
			}
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
