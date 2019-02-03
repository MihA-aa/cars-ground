import { cars, users } from './../../fake-server/fake-data';
import { LocalStorageKeys } from '../../fake-server/helpers';

export const initData = () => {
	const carsFromStorage = localStorage.getItem(LocalStorageKeys.cars);
	const usersFromStorage = localStorage.getItem(LocalStorageKeys.users);
	if (!carsFromStorage) {
		localStorage.setItem(LocalStorageKeys.cars, JSON.stringify(cars));
	}
	if (!usersFromStorage) {
		localStorage.setItem(LocalStorageKeys.users, JSON.stringify(users));
	}
};
