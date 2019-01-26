import React from 'react';
import { Form } from 'antd';
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemProps } from 'antd/lib/form';

type Props = InputProps & WrappedFieldProps & FormItemProps;

export const fieldRender = <P extends {}>(Component: React.ComponentType<Props & P>) => ({
	input,
	meta,
	children,
	hasFeedback,
	label,
	labelCol,
	wrapperCol,
	required,
	...rest
}: Props & P) => {
	const hasError = meta.touched && meta.invalid;
	return (
		<Form.Item
			label={label}
			labelCol={labelCol}
			wrapperCol={wrapperCol}
			validateStatus={hasError ? 'error' : 'success'}
			hasFeedback={hasFeedback && hasError}
			help={hasError && meta.error}
			required={required}
		>
			<Component {...input} {...rest as Props & P} children={children} />
		</Form.Item>
	);
};
