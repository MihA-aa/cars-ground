import { AuthActionTypes } from './action-types';
import { AuthAction } from './action-creators';

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

export const userAuthReducer = (state: UserAuthState = initialState, action: AuthAction) => {
	switch (action.type) {
		case AuthActionTypes.AUTHENTICATION_SUCCESS:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
