import React from 'react';
import { Input as AInput, Radio, Select as ASelect, Checkbox as ACheckbox, DatePicker } from 'antd';
import { RadioGroupProps } from 'antd/lib/radio';
import { SelectProps } from 'antd/lib/select';
import { CheckboxProps } from 'antd/lib/checkbox';
import { TextAreaProps } from 'antd/lib/input';
import { RangePickerProps } from 'antd/lib/date-picker/interface';

import { fieldRender } from './hocs/field-render';

const Input = fieldRender((props) => <AInput {...props} />);
const RadioGroup = fieldRender<RadioGroupProps>((props) => <Radio.Group {...props} />);
const Select = fieldRender<SelectProps>((props) => <ASelect {...props} />);
const Checkbox = fieldRender<CheckboxProps>((props) => <ACheckbox {...props} />);
const TextArea = fieldRender<TextAreaProps>((props) => <AInput.TextArea {...props} />);
const RangePicker = fieldRender<RangePickerProps>((props) => <DatePicker.RangePicker {...props} />);

export { Input, RadioGroup, Select, Checkbox, TextArea, RangePicker };
