import { SelectOption } from './../data-interfaces/interfaces/select-option';
import { carToModel, defaultPhoto, defaultMetadata, defaultAvatar } from './fake-data';
import {
	UserSessionResponse,
	ApiResponse,
	LoginValidateResponse,
	CommentModel,
} from './interfaces';
import { sleep, cars, ads, users } from './helpers';
import { mapEnumToSelectOptions } from '../helpers/mappers';
import { CarBrand, CarModel } from '../data-interfaces/enums';
import { LoginFormValues } from '../pages/login';
import { Car } from '../data-interfaces/interfaces/car';
import { Ad } from '../data-interfaces/interfaces/ad';
import { Comment } from '../data-interfaces/interfaces/comment';

export const loginValidate = async (values: LoginFormValues): Promise<LoginValidateResponse> => {
	await sleep(1000);
	const user = users
		.getUsers()
		.find((u) => u.nickname === values.userName && u.password === values.password);
	const result = user
		? { token: user.token }
		: { errors: { error: 'Login failed; Invalid User name or Password' } };
	return result as LoginValidateResponse;
};

export const fetchUserSession = async (token: string): Promise<UserSessionResponse> => {
	await sleep(1000);
	const user = users.getUsers().find((u) => u.token === token);
	const result = user
		? users.mapUserToUserData(user)
		: { errors: { error: 'Authorization Failed' } };
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

export const getCar = async (carId: number): Promise<Car | false | undefined> => {
	await sleep(1);
	const ad = ads.getLocalAds().find((ad) => ad.car.carId === carId);
	const user = users.getUser();
	const userId = ad && user && (ad.user.userId === user.userId || user.isAdmin);
	return userId && cars.getLocalCars().find((car) => car.carId === carId);
};

export const getCars = async (): Promise<Car[]> => {
	await sleep(1000);
	return cars.getLocalCars();
};

export const saveCar = async (car: Car): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	if (car.carId) {
		cars.updateCar(car);
		ads.updateAdCar(car);
	} else {
		car = { carId: cars.generateCarId(), ...car, photo: defaultPhoto };
		const ad: Ad = {
			user: { userId: users.getUserId()!, avatar: defaultAvatar },
			adId: ads.generateAdId(),
			car,
			meta: defaultMetadata,
		};
		cars.insertCar(car);
		ads.insertAd(ad);
	}
	return {};
};

export const removeCar = async (carId: number): Promise<ApiResponse<{}>> => {
	await sleep(1000);
	const newAds = ads.getLocalAds().filter((ad) => ad.car.carId !== carId);
	const newCars = cars.getLocalCars().filter((car) => car.carId !== carId);
	ads.insertAds(newAds);
	cars.insertCars(newCars);
	return {};
};

export const getAds = async (page: number, pageSize: number | undefined): Promise<Ad[]> => {
	await sleep(1000);
	return pageSize ? ads.getLocalAds().splice((page - 1) * pageSize, page * pageSize) : [];
};

export const getAdsCount = async (): Promise<number> => {
	await sleep(10);
	return ads.getLocalAds().length;
};

export const getAd = async (adId: number): Promise<Ad | undefined> => {
	await sleep(1000);
	return ads.getLocalAds().find((ad) => ad.adId === adId);
};

export const isOwner = async (adId: number): Promise<boolean> => {
	await sleep(10);
	const user = users.getUser();
	return !!ads
		.getLocalAds()
		.find((ad) => ad.adId === adId && !!user && (user.isAdmin || ad.user.userId === user.userId));
};

export const commentOn = async (commentModel: CommentModel): Promise<ApiResponse<Comment>> => {
	await sleep(1000);
	const comment = ads.mapCommentModelToComment(commentModel);
	ads.pushComment(comment);
	return comment;
};

export const view = async (adId: number): Promise<void> => {
	await sleep(10);
	ads.viewAdId(adId);
};
