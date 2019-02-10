import { ListingState } from './interfaces';
import { ListingAction } from './actions/action-creators';
import { ListingActionTypes } from './actions/action-types';
import { defaultListing } from '../../fake-server/fake-data';

const initialState: ListingState = {
	items: defaultListing,
	isLoaded: false,
	total: 1,
};

export const listingReducer = (
	state: ListingState = initialState,
	action: ListingAction,
): ListingState => {
	switch (action.type) {
		case ListingActionTypes.ADS_FETCHED:
			return { ...state, items: action.payload.items, isLoaded: true };

		case ListingActionTypes.RESET:
			return { ...state, items: defaultListing };

		case ListingActionTypes.SET_TOTAL:
			return { ...state, total: action.payload.total };

		default:
			return state;
	}
};
