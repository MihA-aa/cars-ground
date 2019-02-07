import { User } from '../data-interfaces/interfaces/user';
import { Car } from '../data-interfaces/interfaces/car';
import { UserData } from './interfaces';
import { Ad } from '../data-interfaces/interfaces/ad';

export enum LocalStorageKeys {
	ads = 'ads',
	cars = 'cars',
	users = 'users',
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mapUserToUserData = (user: User): UserData => {
	const { password, nickname, ...loginInModelProps } = user;
	return loginInModelProps;
};

export const getLocalAds = (): Ad[] => {
	const jsonAds = localStorage.getItem(LocalStorageKeys.ads);
	return jsonAds ? JSON.parse(jsonAds) : [];
};

export const getLocalCars = (): Car[] => {
	const jsonCars = localStorage.getItem(LocalStorageKeys.cars);
	return jsonCars ? JSON.parse(jsonCars) : [];
};

export const insertCars = (cars: Car[]) => {
	localStorage.setItem(LocalStorageKeys.cars, JSON.stringify(cars));
};

export const updateCar = (car: Car) => {
	const cars = getLocalCars();
	const newCars = cars.map((c) => (c.carId === car.carId ? car : c));
	insertCars(newCars);
};

export const insertCar = (car: Car) => {
	const cars = getLocalCars();
	cars.push(car);
	insertCars(cars);
};

export const insertAds = (ads: Ad[]) => {
	localStorage.setItem(LocalStorageKeys.ads, JSON.stringify(ads));
};

export const insertAd = (ad: Ad) => {
	const ads = getLocalAds();
	ads.push(ad);
	insertAds(ads);
};

export const updateAdCar = (car: Car) => {
	const ads = getLocalAds();
	const newAds = ads.map((ad) => (ad.car.carId === car.carId ? { ...ad, car } : ad));
	insertAds(newAds);
};

export const getUsers = (): User[] => {
	const users = localStorage.getItem(LocalStorageKeys.users);
	return users ? JSON.parse(users) : [];
};

export const generateCarId = (): number => {
	const cars = getLocalCars();
	return Math.max.apply(Math, cars.map((c) => c.carId)) + 1;
};

export const generateAdId = (): number => {
	const ads = getLocalAds();
	return Math.max.apply(Math, ads.map((c) => c.adId)) + 1;
};
