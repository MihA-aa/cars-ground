import { AdAction } from './actions/action-creators';
import { AdActionTypes } from './actions/action-types';
import { AdState } from './interfaces';

const initialState: AdState = {
	isLoading: false,
	brandOptions: [],
	modelOptions: [],
	brandsLoading: false,
	modelsLoading: false,
	modelDisabled: false,
	initialValues: null,
};

export const adReducer = (state: AdState = initialState, action: AdAction): AdState => {
	switch (action.type) {
		case AdActionTypes.GET_BRANDS_REQUEST:
			return { ...state, brandsLoading: true, modelDisabled: true };

		case AdActionTypes.BRANDS_FETCHED:
			return { ...state, brandsLoading: false, brandOptions: action.payload.options };

		case AdActionTypes.GET_MODELS_REQUEST:
			return { ...state, modelsLoading: true, modelDisabled: true };

		case AdActionTypes.MODELS_FETCHED:
			return {
				...state,
				modelsLoading: false,
				modelOptions: action.payload.options,
				modelDisabled: false,
			};

		case AdActionTypes.PAGE_LOADING:
			return { ...state, isLoading: true };

		case AdActionTypes.CAR_LOADED:
			return { ...state, initialValues: action.payload.values };

		case AdActionTypes.PAGE_LOADED:
			return { ...state, isLoading: false };

		default:
			return state;
	}
};
