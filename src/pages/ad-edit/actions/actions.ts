import { message } from 'antd';
import { change, SubmissionError } from 'redux-form';

import { AdFormValues } from './../interfaces';
import { fields, formName } from './../form-settings';
import { CarBrand } from './../../../data-interfaces/enums/car-brand';
import { getBrands, getModels, getCar, saveCar } from '../../../fake-server/fake-server';
import { AdDispatch } from '../interfaces';
import {
	getBrandsRequest,
	brandsFetched,
	getModelsRequest,
	modelsFetched,
	pageLoading,
	pageLoaded,
	carLoaded,
} from './action-creators';

export const loadBrands = () => async (dispatch: AdDispatch) => {
	dispatch(getBrandsRequest());
	const result = await getBrands();
	dispatch(brandsFetched(result));
};

export const changeBrand = (brand: CarBrand) => async (dispatch: AdDispatch) => {
	dispatch(change(formName, fields.model, null, false, false));
	dispatch(loadModels(brand));
};

export const loadModels = (brand: CarBrand) => async (dispatch: AdDispatch) => {
	dispatch(getModelsRequest());
	const result = await getModels(brand);
	dispatch(modelsFetched(result));
};

export const loadCar = (carId: number, notFoundCallback: () => void) => async (
	dispatch: AdDispatch,
) => {
	dispatch(pageLoading());
	const result = await getCar(carId);
	if (result) {
		dispatch(carLoaded(result));
		await dispatch(loadBrands());
		await dispatch(loadModels(result.carBrand));
	} else {
		notFoundCallback();
	}
	dispatch(pageLoaded());
};

export const submit = (values: AdFormValues, successCallback: () => void) => async (
	dispatch: AdDispatch,
) => {
	dispatch(pageLoading());
	const result = await saveCar(values);
	if (result.errors) {
		message.error(result.errors.error);
		throw new SubmissionError(result.errors);
	} else {
		message.success('Ad was successfully added');
		successCallback();
	}
	dispatch(pageLoaded());
};