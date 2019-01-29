import React from 'react';
import { Form, Select as ASelect, Button, Radio } from 'antd';
import { Field, InjectedFormProps } from 'redux-form';

import { requiredNamed, required } from '../../helpers/validation-rules';
import { Input, Select, RadioGroup, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { CarBrand, CarModel, BodyType, Condition } from '../../data-interfaces/enums';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';
import { AdFormStateToProps, AdFormDispatchToProps } from '.';

const { Option } = ASelect;
const labels = {
	modification: 'Modification',
	condition: 'Condition',
	price: 'Price',
	notes: 'Notes',
};

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

const fakeData = {
	brends: [CarBrand.BMW, CarBrand.Ford, CarBrand.Mercedes, CarBrand.Moskvitch],
	models: [CarModel.Focus, CarModel.Mustang, CarModel.Galaxy, CarModel.M5],
	years: [2000, 2001, 2002, 2003, 2004],
	bodyTypes: [BodyType.Convertible, BodyType.Crossover],
};

const selectOptions: SelectOption[] = [
	{ name: 'Sedan', value: BodyType.Sedan },
	{ name: 'Hatchback', value: BodyType.Hatchback },
	{ name: 'Crossover', value: BodyType.Crossover },
	{ name: 'Hatchback', value: BodyType.Hatchback },
	{ name: 'Hatchback', value: BodyType.Hatchback },
	{ name: 'Hatchback', value: BodyType.Hatchback },
];

interface AdFormCommonFieldProps {
	label: string;
	name: string;
	isLoading?: boolean;
	options: SelectOption[];
}

const AdFormSelectField: React.FC<AdFormCommonFieldProps> = ({
	label,
	name,
	options,
	isLoading,
}) => (
	<Field
		component={Select}
		label={label}
		validate={required}
		required={true}
		name={name}
		loading={isLoading}
		{...formItemLayout}
	>
		{options.map((option) => (
			<Option key={option.name} value={option.value}>
				{option.name}
			</Option>
		))}
	</Field>
);

export class AdForm extends React.Component<
	AdFormStateToProps &
		AdFormDispatchToProps &
		InjectedFormProps<{}, AdFormStateToProps & AdFormDispatchToProps>
> {
	componentDidMount() {
		this.props.loadBrands();
	}
	handleSubmit = () => {
		alert('sumbit');
	};
	cancel = () => {
		alert('cancel');
	};

	render() {
		const { handleSubmit, pristine, submitting, brandOptions, brandLoading } = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit(this.handleSubmit)}>
				<AdFormSelectField
					label='Car Brand'
					name='carBrand'
					options={brandOptions}
					isLoading={brandLoading}
				/>
				{/* <AdFormSelectField label='Model' name='model'>
					{fakeData.models.map((key) => (
						<Option key={CarModel[key]} value={key}>
							{CarModel[key]}
						</Option>
					))}
				</AdFormSelectField>
				<AdFormSelectField label='Year of issue' name='yearOfIssue'>
					{fakeData.years.map((year) => (
						<Option key={year.toString()} value={year}>
							{year}
						</Option>
					))}
				</AdFormSelectField> */}
				{/* <AdFormSelectField label='Body type' name='bodyType'>
					{fakeData.bodyTypes.map((key) => (
						<Option key={BodyType[key]} value={key}>
							{BodyType[key]}
						</Option>
					))}
				</AdFormSelectField> */}
				<Field
					component={Input}
					label={labels.modification}
					// USE NameOf
					name={'Modification'}
					palceholder={labels.modification}
					{...formItemLayout}
				/>
				<Field
					component={RadioGroup}
					label={labels.condition}
					name={'Condition'}
					validate={required}
					required={true}
					{...formItemLayout}
				>
					{Object.keys(Condition)
						.filter((x) => !isNaN(Number(x)))
						.map((key) => (
							<Radio key={key} value={key}>
								{Condition[Number(key)]}
							</Radio>
						))}
				</Field>
				<Field
					// ADD ONLY NUMBERS CHECK
					component={Input}
					label={labels.price}
					name={'Price'}
					validate={required}
					required={true}
					placeholder={labels.price}
					{...formItemLayout}
				/>
				<Field
					component={TextArea}
					label={labels.notes}
					name={'Notes'}
					placeholder={labels.notes}
					{...formItemLayout}
				/>
				<Form.Item {...tailFormItemLayout}>
					<Styled.SubmitButton disabled={pristine || submitting}>Sumbit</Styled.SubmitButton>
					<Button onClick={this.cancel}>Cancel</Button>
				</Form.Item>
			</Styled.Form>
		);
	}
}
