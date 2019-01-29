import { User } from '../data-interfaces/interfaces/user';
import { LoginResultModel } from './interfaces';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mapUserToLoginModel = (user: User): LoginResultModel => {
	const { password, nickname, ...loginInModelProps } = user;
	return loginInModelProps;
};
