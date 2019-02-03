import { CarBrand, CarModel, BodyType, Condition } from '../data-interfaces/enums';
import { User } from '../data-interfaces/interfaces/user';
import { Car } from '../data-interfaces/interfaces/car';

export const carToModel = new Map<CarBrand, CarModel[]>([
	[CarBrand.BMW, [CarModel.M5, CarModel.M6, CarModel.X5, CarModel.X6]],
	[CarBrand.Ford, [CarModel.Focus, CarModel.Mustang, CarModel.Galaxy]],
]);

export const cars: Car[] = [
	{
		carId: 1,
		userId: 1,
		carBrand: CarBrand.BMW,
		model: CarModel.X5,
		yearOfIssue: 2010,
		bodyType: BodyType.Crossover,
		modification: 'Modification XXX',
		condition: Condition.Used,
		price: 5000,
		notes: 'Notes',
	},
	{
		carId: 2,
		userId: 2,
		carBrand: CarBrand.BMW,
		model: CarModel.X6,
		yearOfIssue: 2015,
		bodyType: BodyType.Hatchback,
		modification: 'Modification XLR',
		condition: Condition.Used,
		price: 13000,
		notes: 'The best car',
	},
];

export const users: User[] = [
	{
		token: '5wx4ite30latcrahwfi2mi01',
		userId: 1,
		nickname: 'User',
		firstName: 'Ivan',
		secondName: 'Ivanov',
		password: 'Password',
		isAdmin: false,
	},
	{
		token: 'ahx4ite3iw5w0ltcrmi01f2a',
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
