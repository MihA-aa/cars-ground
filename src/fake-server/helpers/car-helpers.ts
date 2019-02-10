import { Car } from '../../data-interfaces/interfaces/car';
import { LocalStorageKeys } from '.';

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

export const generateCarId = (): number => {
	const cars = getLocalCars();
	return Math.max.apply(Math, cars.map((c) => c.carId)) + 1;
};
