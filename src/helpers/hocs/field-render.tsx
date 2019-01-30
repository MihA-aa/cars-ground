import React from 'react';
import { Form } from 'antd';
import { WrappedFieldProps, EventOrValueHandler } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemProps } from 'antd/lib/form';

interface CustomInputRenderProps {
	onChangeCallback?: (event: any) => void;
}
type Props = InputProps & WrappedFieldProps & FormItemProps & CustomInputRenderProps;

const fieldRenderOnChange = (
	reduxOnChange: EventOrValueHandler<Event>,
	onChangeCallback?: (event: any) => void,
) => (event: any) => {
	reduxOnChange(event);
	onChangeCallback && onChangeCallback(event);
};

export const fieldRender = <P extends {}>(Component: React.ComponentType<Props & P>) => ({
	input,
	meta,
	children,
	hasFeedback,
	label,
	labelCol,
	wrapperCol,
	required,
	onChangeCallback,
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
			<Component
				{...input}
				{...rest as Props & P}
				onChange={fieldRenderOnChange(input.onChange, onChangeCallback)}
				children={children}
			/>
		</Form.Item>
	);
};
