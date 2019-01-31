import React from 'react';
import { Select as ASelect } from 'antd';
import { Field } from 'redux-form';

import { Select, RadioGroup } from '../../helpers/fields';
import { required } from '../../helpers/validation-rules';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';
import { formItemLayout, options } from './form-settings';
import { optionsFromSelectOptions, radiosFromSelectOptions } from '../../helpers/form-helpers';

interface AdFormCommonFieldProps {
	label: string;
	name: string;
	loading?: boolean;
	disabled?: boolean;
	options: SelectOption[];
	onChangeCallback?: (event: any) => void;
}

export const currenciesPostfix = () => (
	<ASelect defaultValue={options.currencies[0].value} style={{ width: 80 }}>
		{optionsFromSelectOptions(options.currencies)}
	</ASelect>
);

export const AdFormSelectField: React.FC<AdFormCommonFieldProps> = (props) => (
	<Field
		component={Select}
		validate={required}
		onChangeCallback={props.onChangeCallback}
		{...props as AdFormCommonFieldProps}
		{...formItemLayout}
		required={true}
	>
		{optionsFromSelectOptions(props.options)}
	</Field>
);

export const AdFormRadioField: React.FC<AdFormCommonFieldProps> = (props) => {
	const { options, ...propsWithoutOptions } = props;
	return (
		<Field
			component={RadioGroup}
			validate={required}
			onChangeCallback={props.onChangeCallback}
			{...propsWithoutOptions as AdFormCommonFieldProps}
			{...formItemLayout}
			required={true}
		>
			{radiosFromSelectOptions(props.options)}
		</Field>
	);
};
