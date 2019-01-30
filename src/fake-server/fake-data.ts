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

export const years = [
	2019,
	2018,
	2017,
	2016,
	2015,
	2014,
	2013,
	2012,
	2011,
	2010,
	2009,
	2008,
	2007,
	2006,
	2005,
	2004,
	2003,
	2002,
	2001,
	2000,
	1999,
	1998,
	1997,
	1996,
	1995,
	1994,
	1993,
	1992,
	1991,
	1990,
];
