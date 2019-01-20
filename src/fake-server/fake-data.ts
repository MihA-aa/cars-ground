import { CarBrand, CarModel } from '../data-interfaces/enums';

export const carToModel = new Map([
	[CarBrand.BMW, [CarModel.M5, CarModel.M6, CarModel.X5, CarModel.X6]],
	[CarBrand.Ford, [CarModel.Focus, CarModel.Mustang, CarModel.Galaxy]],
]);
