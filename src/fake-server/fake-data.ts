import { CarBrand, CarModel } from '../data-interfaces/enums';
import { User } from '../data-interfaces/interfaces/user';

export const carToModel = new Map([
	[CarBrand.BMW, [CarModel.M5, CarModel.M6, CarModel.X5, CarModel.X6]],
	[CarBrand.Ford, [CarModel.Focus, CarModel.Mustang, CarModel.Galaxy]],
]);

export const users: User[] = [
	{
		userId: 1,
		nickname: 'User',
		firstName: 'Ivan',
		secondName: 'Ivanov',
		password: 'Password',
		isAdmin: false,
	},
	{
		userId: 2,
		nickname: 'Mihail',
		firstName: 'Mihail',
		secondName: 'Ermolaev',
		password: 'Password',
		isAdmin: true,
	},
];
