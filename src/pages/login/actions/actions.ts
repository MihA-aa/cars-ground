import { Dispatch } from 'redux';
import { SubmissionError } from 'redux-form';
import { message } from 'antd';

import { loginValidate } from '../../../fake-server/fake-server';
import { loginSuccess } from './action-creators';

export interface LoginFormValues {
	userName: string;
	password: string;
}

export const login = (props: LoginFormValues) => async (dispatch: Dispatch) => {
	const result = await loginValidate(props);
	if (result.errors) {
		message.error(result.errors.error);
		throw new SubmissionError(result.errors);
	} else {
		dispatch(loginSuccess(result));
	}
};
