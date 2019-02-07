import { cars, users, ads } from './../../fake-server/fake-data';
import { LocalStorageKeys } from '../../fake-server/helpers';

export const initData = () => {
	setDataToLocalStorage(LocalStorageKeys.cars, cars);
	setDataToLocalStorage(LocalStorageKeys.users, users);
	setDataToLocalStorage(LocalStorageKeys.ads, ads);
};

const setDataToLocalStorage = (key: LocalStorageKeys, data: any[]) => {
	const dataFromStorage = localStorage.getItem(key);
	if (!dataFromStorage) {
		localStorage.setItem(key, JSON.stringify(data));
	}
};
