import { SelectOption } from './../data-interfaces/interfaces/select-option';
import { carToModel, defaultPhoto, defaultMetadata } from './fake-data';
import { UserSessionResponse, ApiResponse, LoginValidateResponse } from './interfaces';
import {
	sleep,
	mapUserToUserData,
	getUsers,
	getLocalCars,
	updateCar,
	insertCar,
	getLocalAds,
	updateAdCar,
	generateCarId,
	generateAdId,
	insertAd,
	insertAds,
	insertCars,
} from './helpers';
import { mapEnumToSelectOptions } from '../helpers/mappers';
import { CarBrand, CarModel } from '../data-interfaces/enums';
import { LoginFormValues } from '../pages/login';
import { Car } from '../data-interfaces/interfaces/car';
import { Ad } from '../data-interfaces/interfaces/ad';

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
	await sleep(1);
	return getLocalCars().find((car) => car.carId === carId);
};

export const getCars = async (): Promise<Car[]> => {
	await sleep(1000);
	return getLocalCars();
};

export const saveCar = async (car: Car, userId: number): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	if (car.carId) {
		updateCar(car);
		updateAdCar(car);
	} else {
		car = { carId: generateCarId(), ...car, photo: defaultPhoto };
		const ad: Ad = { userId, adId: generateAdId(), car, meta: defaultMetadata };
		insertCar(car);
		insertAd(ad);
	}
	return {};
};

export const removeCar = async (carId: number): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	const newAds = getLocalAds().filter((ad) => ad.car.carId !== carId);
	const newCars = getLocalCars().filter((car) => car.carId !== carId);
	insertAds(newAds);
	insertCars(newCars);
	return {};
};

export const getAds = async (): Promise<Ad[]> => {
	await sleep(1000);
	return getLocalAds();
};

export const getAd = async (adId: number): Promise<Ad | undefined> => {
	await sleep(1000);
	return getLocalAds().find((ad) => ad.adId === adId);
};

export const isOwner = async (adId: number, userId: number): Promise<boolean> => {
	await sleep(10);
	return !!getLocalAds().find((ad) => ad.adId === adId && ad.userId === userId);
};
