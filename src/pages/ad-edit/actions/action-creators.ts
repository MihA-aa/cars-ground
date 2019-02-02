import { AdFormValues } from './../interfaces';
import { ActionCreator, Action } from 'redux';

import { SelectOption } from './../../../data-interfaces/interfaces/select-option';
import { CarBrand } from './../../../data-interfaces/enums/car-brand';
import { AdActionTypes } from './action-types';

const getBrandsRequest: ActionCreator<GetBrandsRequestAction> = () => ({
	type: AdActionTypes.GET_BRANDS_REQUEST,
});

const brandsFetched: ActionCreator<BrandsFetchedAction> = (options: SelectOption[]) => ({
	type: AdActionTypes.BRANDS_FETCHED,
	payload: { options },
});

const getModelsRequest: ActionCreator<GetModelsRequestAction> = (brand: CarBrand) => ({
	type: AdActionTypes.GET_MODELS_REQUEST,
	payload: { brand },
});

const modelsFetched: ActionCreator<ModelsFetchedAction> = (options: SelectOption[]) => ({
	type: AdActionTypes.MODELS_FETCHED,
	payload: { options },
});

const pageLoading: ActionCreator<PageLoadingAction> = () => ({
	type: AdActionTypes.PAGE_LOADING,
});

const carLoaded: ActionCreator<CarLoadedAction> = (values: AdFormValues) => ({
	type: AdActionTypes.CAR_LOADED,
	payload: { values },
});

const pageLoaded: ActionCreator<PageLoadedAction> = () => ({
	type: AdActionTypes.PAGE_LOADED,
});

interface GetBrandsRequestAction extends Action<AdActionTypes.GET_BRANDS_REQUEST> {}

interface BrandsFetchedAction extends Action<AdActionTypes.BRANDS_FETCHED> {
	payload: { options: SelectOption[] };
}

interface GetModelsRequestAction extends Action<AdActionTypes.GET_MODELS_REQUEST> {
	payload: { brand: CarBrand };
}

interface ModelsFetchedAction extends Action<AdActionTypes.MODELS_FETCHED> {
	payload: { options: SelectOption[] };
}

interface CarLoadedAction extends Action<AdActionTypes.CAR_LOADED> {
	payload: { values: AdFormValues };
}

interface PageLoadingAction extends Action<AdActionTypes.PAGE_LOADING> {}

interface PageLoadedAction extends Action<AdActionTypes.PAGE_LOADED> {}

export type AdAction =
	| GetBrandsRequestAction
	| BrandsFetchedAction
	| GetModelsRequestAction
	| ModelsFetchedAction
	| PageLoadingAction
	| CarLoadedAction
	| PageLoadedAction;

export {
	getBrandsRequest,
	getModelsRequest,
	brandsFetched,
	modelsFetched,
	pageLoading,
	carLoaded,
	pageLoaded,
};
