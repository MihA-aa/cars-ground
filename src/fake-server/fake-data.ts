import { Ad } from './../data-interfaces/interfaces/ad';
import { CarBrand, CarModel, BodyType, Condition } from '../data-interfaces/enums';
import { User } from '../data-interfaces/interfaces/user';
import { Car } from '../data-interfaces/interfaces/car';
import { MetaData } from '../data-interfaces/interfaces/meta-data';

export const carToModel = new Map<CarBrand, CarModel[]>([
	[CarBrand.BMW, [CarModel.M5, CarModel.M6, CarModel.X5, CarModel.X6]],
	[CarBrand.Ford, [CarModel.Focus, CarModel.Mustang, CarModel.Galaxy]],
]);

export const defaultPhoto = 'https://kor.ill.in.ua/m/610x385/2081558.jpg';
export const defaultAvatar = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';

export const defaultMetadata: MetaData = {
	avatar: defaultAvatar,
	stars: 0,
	views: 0,
	comments: 0,
};

export const cars: Car[] = [
	{
		carId: 1,
		carBrand: CarBrand.BMW,
		model: CarModel.X5,
		yearOfIssue: 2010,
		bodyType: BodyType.Crossover,
		modification: 'Modification XXX',
		condition: Condition.Used,
		price: 5000,
		notes: 'Just notes.',
		photo: defaultPhoto,
	},
	{
		carId: 2,
		carBrand: CarBrand.BMW,
		model: CarModel.X6,
		yearOfIssue: 2015,
		bodyType: BodyType.Hatchback,
		modification: 'Modification XLR',
		condition: Condition.Used,
		price: 13000,
		notes: 'The best car.',
		photo: defaultPhoto,
	},
	{
		carId: 3,
		carBrand: CarBrand.Ford,
		model: CarModel.Focus,
		yearOfIssue: 2005,
		bodyType: BodyType.Sedan,
		modification: 'Modification Turbo XLR',
		condition: Condition.Damaged,
		price: 7000,
		notes: 'Top car in your life.',
		photo: defaultPhoto,
	},
];

export const metaData: MetaData[] = [
	{
		avatar: defaultAvatar,
		stars: 242,
		views: 1835,
		comments: 5,
	},
	{
		avatar: defaultAvatar,
		stars: 351,
		views: 5123,
		comments: 14,
	},
	{
		avatar: defaultAvatar,
		stars: 32,
		views: 427,
		comments: 0,
	},
];

export const ads: Ad[] = [
	{
		adId: 1,
		userId: 1,
		car: cars[0],
		meta: metaData[0],
	},
	{
		adId: 2,
		userId: 2,
		car: cars[1],
		meta: metaData[1],
	},
	{
		adId: 3,
		userId: 2,
		car: cars[2],
		meta: metaData[2],
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

export const emptyAd: Ad = {
	adId: 0,
	userId: 0,
	car: {
		carId: 0,
		carBrand: 0,
		model: 0,
		yearOfIssue: 0,
		bodyType: 0,
		modification: '',
		condition: 0,
		price: 0,
		notes: '',
		photo: '',
	},
	meta: {
		avatar: 'isLoading',
		stars: 0,
		views: 0,
		comments: 0,
	},
};

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
