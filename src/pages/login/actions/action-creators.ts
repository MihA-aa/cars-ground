import { ActionCreator, Action } from 'redux';

import { LoginActionTypes } from './action-types';
import { LoginResultModel } from '../../../fake-server/interfaces';

const loginSuccess: ActionCreator<LoginRequestAction> = (loginInModel: LoginResultModel) => ({
	type: LoginActionTypes.LOGIN_SUCCESS,
	payload: loginInModel,
});

interface LoginRequestAction extends Action<LoginActionTypes.LOGIN_SUCCESS> {
	payload: LoginResultModel;
}

export type LoginAction = LoginRequestAction;

export { loginSuccess };
