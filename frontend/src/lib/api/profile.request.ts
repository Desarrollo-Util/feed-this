import { FetchError } from '../../types/fetch-error.type';
import { FetchResponse } from '../../types/fetch-response';
import { User } from '../../types/user.type';

export const profileRequest = async (
	token: string
): Promise<FetchResponse<User>> => {
	const profileResponse = await fetch('http://localhost:4000/profile', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const profileData = await profileResponse.json();

	if (!profileResponse.ok) return { error: profileData as FetchError };
	return { data: profileData as User };
};
