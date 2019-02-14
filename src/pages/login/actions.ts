import { SubmissionError } from 'redux-form/immutable';
import { message } from 'antd';
import Cookies from 'js-cookie';

import { COOKIE_PATH, fetchUserData, AuthDispatch } from './../../auth/actions';
import { loginValidate } from '../../fake-server/fake-server';
import { LoginFormValues } from '.';

export const login = (props: LoginFormValues, successCallback: () => void) => async (
	dispatch: AuthDispatch,
) => {
	const result = await loginValidate(props);
	if (result.errors) {
		message.error(result.errors.error);
		throw new SubmissionError(result.errors);
	} else {
		Cookies.set(COOKIE_PATH, result.token);
		await dispatch(fetchUserData(result.token));
		successCallback();
	}
};
