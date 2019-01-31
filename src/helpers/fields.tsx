import React from 'react';
import {
	Radio,
	DatePicker,
	Input as AInput,
	Select as ASelect,
	Checkbox as ACheckbox,
	InputNumber as AInputNumber,
} from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';
import { SelectProps } from 'antd/lib/select';
import { CheckboxProps } from 'antd/lib/checkbox';
import { TextAreaProps } from 'antd/lib/input';
import { RangePickerProps } from 'antd/lib/date-picker/interface';
import { InputNumberProps } from 'antd/lib/input-number';

import { fieldRender } from './hocs/field-render';

const Input = fieldRender((props) => <AInput {...props} />);
const RadioGroup = fieldRender<RadioGroupProps>((props) => <Radio.Group {...props} />);
const Select = fieldRender<SelectProps>((props) => <ASelect {...props} />);
const Checkbox = fieldRender<CheckboxProps>((props) => <ACheckbox {...props} />);
const TextArea = fieldRender<TextAreaProps>((props) => <AInput.TextArea {...props} />);
const RangePicker = fieldRender<RangePickerProps>((props) => <DatePicker.RangePicker {...props} />);
const InputNumber = fieldRender<InputNumberProps>((props) => <AInputNumber {...props} />);

export { Input, RadioGroup, Select, Checkbox, TextArea, RangePicker, InputNumber };
