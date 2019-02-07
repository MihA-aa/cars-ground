import { ListingState } from './interfaces';
import { ListingAction } from './actions/action-creators';
import { ListingActionTypes } from './actions/action-types';
import { Ad } from '../../data-interfaces/interfaces/ad';
import { emptyAd } from '../../fake-server/fake-data';

const listData: Ad[] = [];
for (let i = 0; i < 3; i++) {
	listData.push(emptyAd);
}

const initialState: ListingState = {
	items: listData,
	isLoaded: false,
};

export const listingReducer = (
	state: ListingState = initialState,
	action: ListingAction,
): ListingState => {
	switch (action.type) {
		case ListingActionTypes.ADS_FETCHED:
			return { ...state, items: action.payload.items, isLoaded: true };

		default:
			return state;
	}
};
