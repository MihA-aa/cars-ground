import { reduxForm, InjectedFormProps } from 'redux-form';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { LoginForm } from './component';
import { login } from './actions';
import { routePaths } from '../../helpers/route-paths';

export type LoginFormProps = RouteComponentProps &
	InjectedFormProps<LoginFormValues, RouteComponentProps>;

export interface LoginFormValues {
	userName: string;
	password: string;
}

const ReduxLoginForm = reduxForm<LoginFormValues, RouteComponentProps>({
	form: 'login',
	onSubmit: async (values, dispatch, props) =>
		dispatch(login(values, () => props.history.push(routePaths.home))),
})(LoginForm);

export const LoginPage = withRouter(ReduxLoginForm);
