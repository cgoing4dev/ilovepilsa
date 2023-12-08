import { z } from 'zod';
export const formSchema = z.object({
	email: z.string().email({ message: '@를 포함한 이메일 주소를 입력해주세요.' }),
	password: z
		.string()
		.min(8, {
			message: '8~16자리의 비밀번호를 입력해주세요.'
		})
		.max(16, {
			message: '8~16자리의 비밀번호를 입력해주세요.'
		})
});
export type FormSchema = typeof formSchema;
