import React from 'react';
import { Select, Radio } from 'antd';
import { SelectOption } from '../data-interfaces/interfaces/select-option';

const { Option } = Select;

export const optionsFromSelectOptions = (selectOptions: SelectOption[]) =>
	selectOptions.map((option) => (
		<Option key={option.name} value={option.value}>
			{option.name}
		</Option>
	));

export const radiosFromSelectOptions = (selectOptions: SelectOption[]) =>
	selectOptions.map((option) => (
		<Radio key={option.name} value={option.value}>
			{option.name}
		</Radio>
	));
