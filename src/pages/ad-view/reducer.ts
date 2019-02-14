import { fromJS } from 'immutable';

import { ViewState } from './interfaces';
import { ViewAction } from './actions/action-creators';
import { ViewActionTypes } from './actions/action-types';
import { emptyAd } from '../../fake-server/fake-data';
import { StrictImmutable } from '../../helpers/strict-immutable';

const initialState: ViewState = {
	data: fromJS(emptyAd),
	isOwner: false,
	removing: false,
	commenting: false,
};

export const viewReducer = (
	state: StrictImmutable<ViewState> = fromJS(initialState),
	action: ViewAction,
): StrictImmutable<ViewState> => {
	switch (action.type) {
		case ViewActionTypes.AD_FETCHED:
			return state.set('data', fromJS(action.payload.data));

		case ViewActionTypes.SET_IS_OWNER:
			return state.set('isOwner', action.payload.isOwner);

		case ViewActionTypes.SET_REMOVING:
			return state.set('removing', action.payload.removing);

		case ViewActionTypes.SET_COMMENTING:
			return state.set('commenting', action.payload.commenting);

		case ViewActionTypes.PUSH_COMMENT:
			const comments = state
				.getIn(['data', 'meta'])
				.get('comments')
				.push(fromJS(action.payload.comment));
			return state.setIn(['data', 'meta', 'comments'], comments);

		default:
			return state;
	}
};
