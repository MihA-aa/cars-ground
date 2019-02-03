import { User } from '../data-interfaces/interfaces/user';
import { Car } from '../data-interfaces/interfaces/car';
import { UserData } from './interfaces';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mapUserToUserData = (user: User): UserData => {
	const { password, nickname, ...loginInModelProps } = user;
	return loginInModelProps;
};

export enum LocalStorageKeys {
	cars = 'cars',
	users = 'users',
}

export const getCars = (): Car[] => {
	const jsonCars = localStorage.getItem(LocalStorageKeys.cars);
	return jsonCars ? JSON.parse(jsonCars) : [];
};

export const insertCars = (cars: Car[]) => {
	localStorage.setItem(LocalStorageKeys.cars, JSON.stringify(cars));
};

export const updateCar = (car: Car) => {
	const cars = getCars();
	const newCars = cars.map((c) => (c.carId === car.carId ? car : c));
	insertCars(newCars);
};

export const insertCar = (car: Car) => {
	const cars = getCars();
	const maxCarId = Math.max.apply(Math, cars.map((c) => c.carId));
	cars.push({ carId: maxCarId + 1, ...car });
	insertCars(cars);
};

export const getUsers = (): User[] => {
	const users = localStorage.getItem(LocalStorageKeys.users);
	return users ? JSON.parse(users) : [];
};
