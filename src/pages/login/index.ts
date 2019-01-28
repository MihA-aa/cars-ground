import { Dispatch } from 'redux';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { LoginForm } from './component';
import { login } from './actions/actions';

export interface LoginFormProps {
	login: (props: any) => (dispatch: Dispatch) => void;
}

const ReduxLoginForm = reduxForm<{}, LoginFormProps>({
	form: 'login',
})(LoginForm);

export const LoginPage = connect<{}>(
	null,
	{ login },
)(ReduxLoginForm);
