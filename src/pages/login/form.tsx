import React from 'react';
import { Form } from 'antd';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';

import { Input, Checkbox } from '../../helpers/fields';
import { routePaths } from '../../helpers/route-paths';
import { Styled } from './styled';
import { LoginFormProps } from '.';
import { icon, fields, userNameValidate, passwordValidate, checkboxStyles } from './form-settings';

export const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, submitting }) => (
	<Styled.Form onSubmit={handleSubmit}>
		<Field
			component={Input}
			prefix={icon('user')}
			name={fields.userName}
			placeholder={fields.userNameLabel}
			validate={userNameValidate}
		/>
		<Field
			component={Input}
			type='password'
			prefix={icon('lock')}
			name={fields.password}
			validate={passwordValidate}
			placeholder={fields.passwordLabel}
		/>
		<Field
			component={Checkbox}
			type='checkbox'
			name={fields.rememberMe}
			defaultChecked={true}
			styles={checkboxStyles}
		>
			{fields.rememberMeLabel}
		</Field>
		<Form.Item>
			<Styled.LoginFormButton loading={submitting}>Log in</Styled.LoginFormButton>
			Or <Link to={routePaths.register}>register now!</Link>
		</Form.Item>
	</Styled.Form>
);
