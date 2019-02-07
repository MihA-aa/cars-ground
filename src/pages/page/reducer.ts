import { PageAction } from './action-creators';
import { PageActionTypes } from './action-types';

export interface PageState {
	pageIsLoading: boolean;
	contentIsLoading: boolean;
}

const initialState: PageState = {
	pageIsLoading: true,
	contentIsLoading: false,
};

export const pageReducer = (state: PageState = initialState, action: PageAction): PageState => {
	switch (action.type) {
		case PageActionTypes.PAGE_LOADING:
			return { ...state, pageIsLoading: true };

		case PageActionTypes.PAGE_LOADED:
			return { ...state, pageIsLoading: false };

		case PageActionTypes.CONTENT_LOADING:
			return { ...state, contentIsLoading: true };

		case PageActionTypes.CONTENT_LOADED:
			return { ...state, contentIsLoading: false };

		default:
			return state;
	}
};
