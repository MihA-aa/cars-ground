import { LoginAction } from './actions/action-creators';
import { LoginActionTypes } from './actions/action-types';

export interface UserAuthState {
	userId: number | null;
	firstName: string;
	secondName: string;
	isAdmin: boolean;
}

const initialState: UserAuthState = {
	userId: null,
	firstName: '',
	secondName: '',
	isAdmin: false,
};

export const userAuthReducer = (state: UserAuthState = initialState, action: LoginAction) => {
	switch (action.type) {
		case LoginActionTypes.LOGIN_SUCCESS:
			return { ...action.payload };
		default:
			return state;
	}
};
