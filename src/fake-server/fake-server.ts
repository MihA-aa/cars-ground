import { SelectOption } from './../data-interfaces/interfaces/select-option';
import { users, carToModel, cars } from './fake-data';
import { LoginResponse, ApiResponse } from './interfaces';
import { sleep, mapUserToLoginModel } from './helpers';
import { mapEnumToSelectOptions } from '../helpers/mappers';
import { CarBrand, CarModel } from '../data-interfaces/enums';
import { LoginFormValues } from '../pages/login';
import { Car } from '../data-interfaces/interfaces/car';
import data from './data.json';

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

export const getModels = async (brand: CarBrand): Promise<SelectOption[]> => {
	await sleep(1000);
	const models = carToModel.get(brand) || [];
	return models && models.map((m) => ({ name: CarModel[m], value: m }));
};

export const getCar = async (carId: number): Promise<Car | undefined> => {
	await sleep(1000);
	return cars.find((car) => car.carId === carId);
};

export const saveCar = async (car: Car): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	return {};
};
