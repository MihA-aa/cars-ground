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

const pageLoadedAction: ActionCreator<PageLoadedAction> = () => ({
	type: AuthActionTypes.PAGE_LOADED,
});

interface AuthenticationSuccessAction extends Action<AuthActionTypes.AUTHENTICATION_SUCCESS> {
	payload: UserData;
}

interface LogoutAction extends Action<AuthActionTypes.LOGOUT> {}

interface PageLoadedAction extends Action<AuthActionTypes.PAGE_LOADED> {}

export type AuthAction = AuthenticationSuccessAction | LogoutAction | PageLoadedAction;

export { authenticationSuccess, logoutAction, pageLoadedAction };
