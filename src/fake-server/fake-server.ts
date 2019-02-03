import { SelectOption } from './../data-interfaces/interfaces/select-option';
import { carToModel } from './fake-data';
import { UserSessionResponse, ApiResponse, LoginValidateResponse } from './interfaces';
import { sleep, mapUserToUserData, getUsers, getCars, updateCar, insertCar } from './helpers';
import { mapEnumToSelectOptions } from '../helpers/mappers';
import { CarBrand, CarModel } from '../data-interfaces/enums';
import { LoginFormValues } from '../pages/login';
import { Car } from '../data-interfaces/interfaces/car';

export const loginValidate = async (values: LoginFormValues): Promise<LoginValidateResponse> => {
	await sleep(1000);
	const user = getUsers().find(
		(u) => u.nickname === values.userName && u.password === values.password,
	);
	const result = user
		? { token: user.token }
		: { errors: { error: 'Login failed; Invalid User name or Password' } };
	return result as LoginValidateResponse;
};

export const fetchUserSession = async (token: string): Promise<UserSessionResponse> => {
	await sleep(1000);
	const user = getUsers().find((u) => u.token === token);
	const result = user ? mapUserToUserData(user) : { errors: { error: 'Authorization Failed' } };
	return result as UserSessionResponse;
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
	return getCars().find((car) => car.carId === carId);
};

export const saveCar = async (car: Car): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	car.carId ? updateCar(car) : insertCar(car);
	return {};
};
