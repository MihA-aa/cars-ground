import { ViewState } from './interfaces';
import { ViewAction } from './actions/action-creators';
import { ViewActionTypes } from './actions/action-types';
import { emptyAd } from '../../fake-server/fake-data';

const initialState: ViewState = {
	data: emptyAd,
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
	switch (action.type) {
		case ViewActionTypes.AD_FETCHED:
			return { ...state, data: action.payload.data };

		default:
			return state;
	}
};
