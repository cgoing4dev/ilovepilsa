import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	handleSubmit: async ({ request }) => {
		console.log('여기로 왔니?');
		const data = await request.formData();
		const todo = data.get('todo');
		console.log(todo);
	}
};
