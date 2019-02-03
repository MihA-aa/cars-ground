import { UserAuthState } from './reducer';
import Cookies from 'js-cookie';
import { message } from 'antd';
import { ThunkDispatch } from 'redux-thunk';

import { fetchUserSession } from '../fake-server/fake-server';
import {
	AuthAction,
	authenticationSuccess,
	logoutAction,
	pageLoadedAction,
} from './action-creators';

export const COOKIE_PATH = 'oauthToken';

export type AuthDispatch = ThunkDispatch<UserAuthState, undefined, AuthAction>;

export const initAuth = () => async (dispatch: AuthDispatch) => {
	const oauthToken = Cookies.get(COOKIE_PATH);
	if (oauthToken) {
		await dispatch(fetchUserData(oauthToken));
	} else {
		dispatch(pageLoadedAction());
	}
};

export const fetchUserData = (token: string) => async (dispatch: AuthDispatch) => {
	const result = await fetchUserSession(token);
	if (result.errors) {
		dispatch(pageLoadedAction());
		message.error(result.errors.error);
	} else {
		dispatch(authenticationSuccess(result));
	}
};

export const logout = (callback: () => void) => (dispatch: AuthDispatch) => {
	Cookies.remove(COOKIE_PATH);
	dispatch(logoutAction());
	callback();
};
