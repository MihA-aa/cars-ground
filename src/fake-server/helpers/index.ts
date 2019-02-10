import { getLocalAds, generateAdId, insertAds, insertAd, updateAdCar } from './ad-helpers';
import { getLocalCars, insertCars, insertCar, updateCar, generateCarId } from './car-helpers';
import { getUsers, mapUserToUserData, getUser, getUserId } from './user-helpers';

export enum LocalStorageKeys {
	ads = 'ads',
	cars = 'cars',
	users = 'users',
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const ads = {
	getLocalAds,
	insertAds,
	insertAd,
	updateAdCar,
	generateAdId,
};

export const cars = {
	getLocalCars,
	insertCars,
	insertCar,
	updateCar,
	generateCarId,
};

export const users = {
	mapUserToUserData,
	getUsers,
	getUser,
	getUserId,
};
