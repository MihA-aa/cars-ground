import { fromJS } from 'immutable';

import { AuthActionTypes } from './action-types';
import { AuthAction } from './action-creators';
import { StrictImmutable } from '../helpers/strict-immutable';

export interface UserAuthState {
	token: string;
	userId: number | null;
	firstName: string;
	secondName: string;
	isAdmin: boolean;
}

const initialState: UserAuthState = {
	token: '',
	userId: null,
	firstName: '',
	secondName: '',
	isAdmin: false,
};

export const userAuthReducer = (
	state: StrictImmutable<UserAuthState> = fromJS(initialState),
	action: AuthAction,
): StrictImmutable<UserAuthState> => {
	switch (action.type) {
		case AuthActionTypes.AUTHENTICATION_SUCCESS:
			return state
				.set('token', action.payload.token)
				.set('userId', action.payload.userId)
				.set('firstName', action.payload.firstName)
				.set('secondName', action.payload.secondName)
				.set('isAdmin', action.payload.isAdmin);

		default:
			return state;
	}
};
