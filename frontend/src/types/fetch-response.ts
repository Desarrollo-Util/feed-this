import { FetchError } from './fetch-error.type';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
	? (Without<T, U> & U) | (Without<U, T> & T)
	: T | U;

export type FetchResponse<TData> = XOR<
	{
		data: TData;
	},
	{
		error: FetchError;
	}
>;
