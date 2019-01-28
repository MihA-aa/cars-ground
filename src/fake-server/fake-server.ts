import { users } from './fake-data';
import { LoginFormValues } from '../pages/login/actions/actions';
import { LoginResponse } from './interfaces';
import { sleep, mapUserToLoginModel } from './helpers';

export const loginValidate: (values: LoginFormValues) => Promise<LoginResponse> = async (
	values: LoginFormValues,
) => {
	await sleep(1000);
	const user = users.find(
		(user_1) => user_1.nickname === values.userName && user_1.password === values.password,
	);
	const result = user
		? mapUserToLoginModel(user)
		: { errors: { error: 'Login failed; Invalid User name or Password' } };
	return result as LoginResponse;
};
