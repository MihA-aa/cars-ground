import { WrappedFieldProps } from 'redux-form';
import React from 'react';
import { Form, Input } from 'antd';

import { LoginFormFieldProps } from './interfaces';

import { Styled } from './styled';

export class FieldRender<P = {}> extends React.Component<
	WrappedFieldProps & P & LoginFormFieldProps
> {
	render = () => {
		const {
			isRequired,
			iconType,
			input: { name, value, ...inputEvents },
			meta: { error },
		} = this.props;
		return (
			<Form.Item>
				{this.props.fieldDecorator(name, {
					rules: [{ required: isRequired, message: error }],
					initialValue: this.props.input.value,
				})(
					<Input
						{...inputEvents}
						prefix={<Styled.Icon type={iconType} />}
						name={name}
						type={name}
						placeholder={name}
					/>,
				)}
			</Form.Item>
		);
	};
}
