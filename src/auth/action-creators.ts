import { ActionCreator, Action } from 'redux';

import { AuthActionTypes } from './action-types';
import { UserData } from '../fake-server/interfaces';

const authenticationSuccess: ActionCreator<AuthenticationSuccessAction> = (userData: UserData) => ({
	type: AuthActionTypes.AUTHENTICATION_SUCCESS,
	payload: userData,
});

const logoutAction: ActionCreator<LogoutAction> = () => ({
	type: AuthActionTypes.LOGOUT,
});

interface AuthenticationSuccessAction extends Action<AuthActionTypes.AUTHENTICATION_SUCCESS> {
	payload: UserData;
}

interface LogoutAction extends Action<AuthActionTypes.LOGOUT> {}

export type AuthAction = AuthenticationSuccessAction | LogoutAction;

export { authenticationSuccess, logoutAction };
