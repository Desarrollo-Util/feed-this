import { FetchError } from '../../types/fetch-error.type';
import { FetchResponse } from '../../types/fetch-response';

export const loginRequest = async (
	email: string,
	password: string
): Promise<FetchResponse<string>> => {
	const loginResponse = await fetch('http://localhost:4000/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	const loginData = await loginResponse.json();

	if (!loginResponse.ok) return { error: loginData as FetchError };
	return { data: loginData.token as string };
};
