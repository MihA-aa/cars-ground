import { Car } from './car';
import { MetaData } from './meta-data';

export interface Ad {
	user: UserData;
	adId: number;
	car: Car;
	meta: MetaData;
}

interface UserData {
	userId: number;
	avatar: string;
}
