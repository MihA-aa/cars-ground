import { reduxForm } from 'redux-form/immutable';
import { InjectedFormProps } from 'redux-form';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { LoginForm } from './form';
import { login } from './actions';
import { routePaths } from '../../helpers/route-paths';
import { StrictImmutable } from '../../helpers/strict-immutable';

export type LoginFormProps = RouteComponentProps &
	InjectedFormProps<StrictImmutable<LoginFormValues>, RouteComponentProps>;

export interface LoginFormValues {
	userName: string;
	password: string;
}

const ReduxLoginForm = reduxForm<StrictImmutable<LoginFormValues>, RouteComponentProps>({
	form: 'login',
	onSubmit: async (values, dispatch, props) =>
		dispatch(login(values.toJS(), () => props.history.push(routePaths.home))),
})(LoginForm);

export const LoginPage = withRouter(ReduxLoginForm);
