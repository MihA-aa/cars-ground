import React from 'react';
import { Field } from 'redux-form/immutable';

import { Select, RadioGroup } from '../../helpers/fields';
import { required } from '../../helpers/validation-rules';
import { AdFormCommonFieldProps } from './interfaces';
import { formItemLayout, options } from './form-settings';
import { optionsFromSelectOptions, radiosFromSelectOptions } from '../../helpers/form-helpers';
import { Styled } from './styled';

export const currenciesPostfix = () => (
	<Styled.CurrenciesPostfix defaultValue={options.currencies[0].value}>
		{optionsFromSelectOptions(options.currencies)}
	</Styled.CurrenciesPostfix>
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
