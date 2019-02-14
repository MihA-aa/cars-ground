import { fromJS } from 'immutable';

import { ListingState } from './interfaces';
import { ListingAction } from './actions/action-creators';
import { ListingActionTypes } from './actions/action-types';
import { defaultListing } from '../../fake-server/fake-data';
import { StrictImmutable } from '../../helpers/strict-immutable';

const initialState: ListingState = {
	items: fromJS(defaultListing),
	isLoaded: false,
	total: 1,
};

export const listingReducer = (
	state: StrictImmutable<ListingState> = fromJS(initialState),
	action: ListingAction,
): StrictImmutable<ListingState> => {
	switch (action.type) {
		case ListingActionTypes.ADS_FETCHED:
			return state.set('items', fromJS(action.payload.items)).set('isLoaded', true);

		case ListingActionTypes.RESET:
			return state.set('items', fromJS(defaultListing));

		case ListingActionTypes.SET_TOTAL:
			return state.set('total', action.payload.total);

		default:
			return state;
	}
};
