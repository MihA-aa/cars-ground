import { ActionCreator, Action } from 'redux';

import { SelectOption } from './../../../data-interfaces/interfaces/select-option';
import { CarBrand } from './../../../data-interfaces/enums/car-brand';
import { AdActionTypes } from './action-types';
import { ThunkDispatch } from 'redux-thunk';
import { AdState } from '../reducer';

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

export type AdAction =
	| GetBrandsRequestAction
	| BrandsFetchedAction
	| GetModelsRequestAction
	| ModelsFetchedAction;

export type AdDispatch = ThunkDispatch<AdState, undefined, AdAction>;

export { getBrandsRequest, getModelsRequest, brandsFetched, modelsFetched };
