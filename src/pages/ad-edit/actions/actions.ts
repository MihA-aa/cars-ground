import { Dispatch } from 'redux';
import { CarBrand } from './../../../data-interfaces/enums/car-brand';
import { getBrands, getModels } from '../../../fake-server/fake-server';
import {
	getBrandsRequest,
	brandsFetched,
	getModelsRequest,
	modelsFetched,
} from './action-creators';

export const loadBrands = () => async (dispatch: Dispatch) => {
	dispatch(getBrandsRequest());
	const result = await getBrands();
	dispatch(brandsFetched(result));
};

export const loadModels = (brand: CarBrand) => async (dispatch: Dispatch) => {
	dispatch(getModelsRequest());
	const result = await getModels(brand);
	dispatch(modelsFetched(result));
};
