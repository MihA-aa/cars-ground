import Cookies from 'js-cookie';
import { message } from 'antd';

import { fetchUserSession } from '../fake-server/fake-server';
import { AuthAction, authenticationSuccess, logoutAction } from './action-creators';
import { pageLoaded } from '../pages/page/action-creators';
import { BaseDispatch } from '../helpers/base-dispatch';

export const COOKIE_PATH = 'oauthToken';

export type AuthDispatch = BaseDispatch<AuthAction>;

export const initAuth = () => async (dispatch: AuthDispatch) => {
	const oauthToken = Cookies.get(COOKIE_PATH);
	if (oauthToken) {
		await dispatch(fetchUserData(oauthToken));
	} else {
		dispatch(pageLoaded());
	}
};

export const fetchUserData = (token: string) => async (dispatch: AuthDispatch) => {
	const result = await fetchUserSession(token);
	if (result.errors) {
		message.error(result.errors.error);
	} else {
		dispatch(authenticationSuccess(result));
	}
	dispatch(pageLoaded());
};

export const logout = (callback: () => void) => (dispatch: AuthDispatch) => {
	Cookies.remove(COOKIE_PATH);
	dispatch(logoutAction());
	callback();
};
