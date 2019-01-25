import React from 'react';
import { Form } from 'antd';
import { Field, reduxForm, SubmitHandler } from 'redux-form';
import { FormComponentProps } from 'antd/lib/form/Form';

import { FieldRender } from './field-render';
import { requiredNamed } from '../../helpers/validation-rules';

import { Styled } from './styled';

interface LoginFormReduxProps {
	handleSubmit: SubmitHandler<{}, {}, string>;
}

const labels = {
	userName: 'Username',
	password: 'Password',
};

class LoginForm extends React.Component<FormComponentProps & LoginFormReduxProps> {
	handleSubmit = () => {
		console.log('asds');
	};

	render() {
		const {
			handleSubmit,
			form: { getFieldDecorator: fieldDecorator },
		} = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit(this.handleSubmit)}>
				<Field
					iconType='user'
					isRequired={true}
					name={labels.userName}
					component={FieldRender}
					validate={requiredNamed}
					fieldDecorator={fieldDecorator}
				/>
				<Field
					iconType='lock'
					isRequired={true}
					name={labels.password}
					component={FieldRender}
					validate={requiredNamed}
					fieldDecorator={fieldDecorator}
				/>
				<Form.Item>
					<Styled.LoginFormButton>Log in</Styled.LoginFormButton>
				</Form.Item>
			</Styled.Form>
		);
	}
}

const LoginFormComponent = Form.create()(LoginForm);

export const LoginPage = reduxForm({
	form: 'login',
})((props) => <LoginFormComponent handleSubmit={props.handleSubmit} />);
