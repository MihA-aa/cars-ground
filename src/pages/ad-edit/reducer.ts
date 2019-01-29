import { SelectOption } from './../../data-interfaces/interfaces/select-option';
import { AdAction } from './actions/action-creators';
import { AdActionTypes } from './actions/action-types';

export interface AdState {
	brandOptions: SelectOption[];
	brandLoading: boolean;
}

const initialState: AdState = {
	brandOptions: [],
	brandLoading: false,
};

export const adReducer = (state: AdState = initialState, action: AdAction) => {
	switch (action.type) {
		case AdActionTypes.GET_BRANDS_REQUEST:
			return { ...state, brandLoading: true };

		case AdActionTypes.BRANDS_FETCHED:
			return { ...state, brandLoading: false, brandOptions: action.payload.options };

		default:
			return state;
	}
};
