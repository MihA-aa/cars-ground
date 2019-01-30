import { SelectOption } from './../../data-interfaces/interfaces/select-option';
import { AdAction } from './actions/action-creators';
import { AdActionTypes } from './actions/action-types';

export interface AdState {
	brandOptions: SelectOption[];
	modelOptions: SelectOption[];
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
}

const initialState: AdState = {
	brandOptions: [],
	modelOptions: [],
	brandsLoading: false,
	modelsLoading: false,
	modelDisabled: false,
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

		default:
			return state;
	}
};
