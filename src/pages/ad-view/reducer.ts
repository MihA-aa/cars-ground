import { ViewState } from './interfaces';
import { ViewAction } from './actions/action-creators';
import { ViewActionTypes } from './actions/action-types';
import { emptyAd } from '../../fake-server/fake-data';

const initialState: ViewState = {
	data: emptyAd,
	isOwner: false,
	removing: false,
	commenting: false,
};

export const viewReducer = (state: ViewState = initialState, action: ViewAction): ViewState => {
	switch (action.type) {
		case ViewActionTypes.AD_FETCHED:
			return { ...state, data: action.payload.data };

		case ViewActionTypes.SET_IS_OWNER:
			return { ...state, isOwner: action.payload.isOwner };

		case ViewActionTypes.SET_REMOVING:
			return { ...state, removing: action.payload.removing };

		case ViewActionTypes.SET_COMMENTING:
			return { ...state, commenting: action.payload.commenting };

		case ViewActionTypes.PUSH_COMMENT:
			return {
				...state,
				data: {
					...state.data,
					meta: {
						...state.data.meta,
						comments: [...state.data.meta.comments, action.payload.comment],
					},
				},
			};

		default:
			return state;
	}
};
