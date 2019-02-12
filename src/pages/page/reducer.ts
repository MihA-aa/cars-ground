import { Map } from 'immutable';

import { PageAction } from './action-creators';
import { PageActionTypes } from './action-types';

export interface PageState {
	pageIsLoading: boolean;
	contentIsLoading: boolean;
}

const initialState = {
	pageIsLoading: true,
	contentIsLoading: false,
};

export const pageReducer = (
	state = Map(initialState),
	action: PageAction,
): Map<string, boolean> => {
	switch (action.type) {
		case PageActionTypes.PAGE_LOADING:
			return state.set('pageIsLoading', true);

		case PageActionTypes.PAGE_LOADED:
			return state.set('pageIsLoading', false);

		case PageActionTypes.CONTENT_LOADING:
			return state.set('contentIsLoading', true);

		case PageActionTypes.CONTENT_LOADED:
			return state.set('contentIsLoading', false);

		default:
			return state;
	}
};
