import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { reduxForm } from 'redux-form';

import './styles.css';

class LoginForm extends React.Component<any> {
	handleSubmit = (e: any) => {
		e.preventDefault();
		this.props.form.validateFields((err: any, values: any) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className='login-form-container'>
				<Form onSubmit={this.handleSubmit} className='login-form'>
					<Form.Item>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder='Username'
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
								type='password'
								placeholder='Password'
							/>,
						)}
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit' className='login-form-button'>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const AntdLoginForm = Form.create()(LoginForm);

const AntdLoginFormComponent = () => <AntdLoginForm />;

export const LoginPage = reduxForm({
	form: 'login',
})(AntdLoginFormComponent);
