import { SelectOption } from './../data-interfaces/interfaces/select-option';
import { users } from './fake-data';
import { LoginFormValues } from '../pages/login/actions/actions';
import { LoginResponse } from './interfaces';
import { sleep, mapUserToLoginModel } from './helpers';
import { mapEnumToSelectOptions } from '../helpers/mappers';
import { CarBrand, CarModel } from '../data-interfaces/enums';

export const loginValidate = async (values: LoginFormValues): Promise<LoginResponse> => {
	await sleep(1000);
	const user = users.find(
		(user_1) => user_1.nickname === values.userName && user_1.password === values.password,
	);
	const result = user
		? mapUserToLoginModel(user)
		: { errors: { error: 'Login failed; Invalid User name or Password' } };
	return result as LoginResponse;
};

export const getBrands = async (): Promise<SelectOption[]> => {
	await sleep(1000);
	return mapEnumToSelectOptions(CarBrand);
};

export const getModels = async (model: CarModel): Promise<SelectOption[]> => {
	await sleep(1000);
	return mapEnumToSelectOptions(CarModel);
};
