import React from 'react';
import { Form } from 'antd';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { requiredNamed } from '../../helpers/validation-rules';
import { Input } from '../../helpers/fields';
import { Styled } from './styled';
import { asyncValidate } from './actions';

const labels = {
	userName: 'Username',
	password: 'Password',
};

const icon = (iconType: 'user' | 'lock') => <Styled.Icon type={iconType} />;

class LoginForm extends React.Component<InjectedFormProps> {
	handleSubmit = () => {
		alert('submit');
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit(this.handleSubmit)}>
				<Field
					component={Input}
					prefix={icon('user')}
					name={labels.userName}
					placeholder={labels.userName}
					validate={requiredNamed}
				/>
				<Field
					component={Input}
					type='password'
					prefix={icon('lock')}
					name={labels.password}
					placeholder={labels.password}
					validate={requiredNamed}
				/>
				<Form.Item>
					<Styled.LoginFormButton>Log in</Styled.LoginFormButton>
				</Form.Item>
			</Styled.Form>
		);
	}
}

const ReduxLoginForm = reduxForm({
	form: 'login',
})(LoginForm);

export const LoginPage = () => <ReduxLoginForm />;
