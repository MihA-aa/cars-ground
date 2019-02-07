import { Car } from './car';
import { MetaData } from './meta-data';

export interface Ad {
	userId: number;
	adId: number;
	car: Car;
	meta: MetaData;
}
