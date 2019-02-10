import Cookies from 'js-cookie';
import { LocalStorageKeys } from '.';
import { User } from '../../data-interfaces/interfaces/user';
import { UserData } from '../interfaces';
import { COOKIE_PATH } from '../../auth/actions';

export const mapUserToUserData = (user: User): UserData => {
	const { password, nickname, ...loginInModelProps } = user;
	return loginInModelProps;
};

export const getUsers = (): User[] => {
	const users = localStorage.getItem(LocalStorageKeys.users);
	return users ? JSON.parse(users) : [];
};

export const getUser = (): User | undefined => {
	const token = Cookies.get(COOKIE_PATH);
	const users = localStorage.getItem(LocalStorageKeys.users);
	const parsedUsers: User[] = users && token ? JSON.parse(users) : [];
	return parsedUsers.find((user) => user.token === token);
};

export const getUserId = (): number | undefined => {
	const user = getUser();
	return user && user.userId;
};
