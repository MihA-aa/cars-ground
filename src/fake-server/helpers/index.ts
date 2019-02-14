import {
	getLocalAds,
	generateAdId,
	insertAds,
	insertAd,
	updateAdCar,
	mapCommentModelToComment,
	pushComment,
	viewAdId,
} from './ad-helpers';
import { getLocalCars, insertCars, insertCar, updateCar, generateCarId } from './car-helpers';
import { getUsers, mapUserToUserData, getUser, getUserId, getUserById } from './user-helpers';

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
	pushComment,
	viewAdId,
	mapCommentModelToComment,
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
	getUserById,
};
