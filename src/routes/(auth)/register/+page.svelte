<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from './schema';

	export let form: SuperValidated<FormSchema>;
</script>

<div class="w-2/3 mx-auto border">
	<h2 class="text-2xl text-center py-10">회원가입</h2>
	<Form.Root
		schema={formSchema}
		{form}
		let:config
		action="?/register"
		method="POST"
		class="w-2/3 space-y-6 mx-auto"
		debug={true}
	>
		<Form.Field {config} name="email">
			<Form.Item>
				<Form.Label class="capitalize text-xl">email</Form.Label>
				<Form.Input />
				<Form.Description>This is your email address.</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Field {config} name="password">
			<Form.Item>
				<Form.Label class="capitalize text-xl">password</Form.Label>
				<Form.Input />
				<Form.Description>This is your password.</Form.Description>
				<Form.Validation />
			</Form.Item>
		</Form.Field>
		<Form.Button>회원가입</Form.Button>
	</Form.Root>
</div>
