import { ListingState, ItemData } from './interfaces';
import { ListingAction } from './actions/action-creators';
import { ListingActionTypes } from './actions/action-types';

const listData: ItemData[] = [];
for (let i = 0; i < 3; i++) {
	listData.push({
		id: 0,
		title: `Loading`,
		avatar: 'Loading',
		description: 'Loading',
		content: 'Loading',
		starsCount: 0,
		viewsCount: 0,
		commentsCount: 0,
		photo: 'Loading',
	});
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
