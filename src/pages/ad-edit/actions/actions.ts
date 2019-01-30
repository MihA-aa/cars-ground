import { CarModel } from './../../../data-interfaces/enums/car-model';
import { Dispatch } from 'redux';

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

export const loadModels = (model: CarModel) => async (dispatch: Dispatch) => {
	dispatch(getModelsRequest());
	const result = await getModels(model);
	dispatch(modelsFetched(result));
};
