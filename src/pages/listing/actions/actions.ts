import { ListingDispatch, ItemData } from '../interfaces';
import { adsFetched, getAdsRequest } from './action-creators';
import { getCars } from '../../../fake-server/fake-server';
import { Car } from '../../../data-interfaces/interfaces/car';
import { CarBrand, CarModel } from '../../../data-interfaces/enums';

export const loadAds = () => async (dispatch: ListingDispatch) => {
	dispatch(getAdsRequest());
	const result = await getCars();
	dispatch(adsFetched(mapCarsToItems(result)));
};

const mapCarsToItems = (cars: Car[]): ItemData[] => {
	return cars.map((car) => ({
		href: `http://localhost:3000/Ad/Edit/${car.carId}`,
		title: `${CarBrand[car.carBrand]} ${CarModel[car.model]}`,
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description: car.notes,
		content: `${car.price} ${car.yearOfIssue} ${car.modification} ${car.condition}`,
		starsCount: 156,
		viewsCount: 1472,
		commentsCount: 4,
		photo: 'https://kor.ill.in.ua/m/610x385/2081558.jpg',
	}));
};
