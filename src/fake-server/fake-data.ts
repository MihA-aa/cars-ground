import { Ad } from './../data-interfaces/interfaces/ad';
import { CarBrand, CarModel, BodyType, Condition } from '../data-interfaces/enums';
import { User } from '../data-interfaces/interfaces/user';
import { Car } from '../data-interfaces/interfaces/car';
import { Comment } from '../data-interfaces/interfaces/comment';
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
	comments: [],
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
	{
		carId: 4,
		carBrand: CarBrand.Ford,
		model: CarModel.Galaxy,
		yearOfIssue: 2001,
		bodyType: BodyType.Sedan,
		modification: 'Modification TXLR',
		condition: Condition.ForParts,
		price: 4000,
		notes: 'Top',
		photo: defaultPhoto,
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
		avatar: defaultAvatar,
	},
	{
		token: 'ahx4ite3iw5w0ltcrmi01f2a',
		userId: 2,
		nickname: 'Mihail',
		firstName: 'Mihail',
		secondName: 'Ermolaev',
		password: 'Password',
		isAdmin: true,
		avatar: defaultAvatar,
	},
];

export const comments: Comment[] = [
	{
		dateTime: '11.02.2019, 12:08:19',
		adId: 1,
		author: `${users[1].firstName} ${users[1].secondName}`,
		text: 'What the beautiful car',
		avatar: defaultAvatar,
	},
	{
		dateTime: '11.05.2019, 16:28:53',
		adId: 1,
		author: `${users[0].firstName} ${users[0].secondName}`,
		text: 'Yes, this is my car',
		avatar: defaultAvatar,
	},
	{
		dateTime: '11.06.2019, 02:01:49',
		adId: 1,
		author: `${users[1].firstName} ${users[1].secondName}`,
		text: 'Shut up and take my money',
		avatar: defaultAvatar,
	},
];

export const metaData: MetaData[] = [
	{
		avatar: defaultAvatar,
		stars: 242,
		views: 1835,
		comments: comments,
	},
	{
		avatar: defaultAvatar,
		stars: 351,
		views: 5123,
		comments: [],
	},
	{
		avatar: defaultAvatar,
		stars: 32,
		views: 427,
		comments: [],
	},
	{
		avatar: defaultAvatar,
		stars: 83,
		views: 93,
		comments: [],
	},
];

export const ads: Ad[] = [
	{
		adId: 1,
		user: {
			userId: 1,
			avatar: defaultAvatar,
		},
		car: cars[0],
		meta: metaData[0],
	},
	{
		adId: 2,
		user: {
			userId: 2,
			avatar: defaultAvatar,
		},
		car: cars[1],
		meta: metaData[1],
	},
	{
		adId: 3,
		user: {
			userId: 2,
			avatar: defaultAvatar,
		},
		car: cars[2],
		meta: metaData[2],
	},
	{
		adId: 4,
		user: {
			userId: 2,
			avatar: defaultAvatar,
		},
		car: cars[3],
		meta: metaData[3],
	},
];

export const emptyCar: Car = {
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
};

export const testCar: Car = {
	carId: 1,
	carBrand: 2,
	model: 1,
	yearOfIssue: 1990,
	bodyType: 0,
	modification: '',
	condition: 0,
	price: 0,
	notes: '',
	photo: '',
};

export const emptyAd: Ad = {
	adId: 0,
	user: {
		userId: 0,
		avatar: defaultAvatar,
	},
	car: emptyCar,
	meta: {
		avatar: 'isLoading',
		stars: 0,
		views: 0,
		comments: [],
	},
};

export const defaultListing = [emptyAd, emptyAd, emptyAd];

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
