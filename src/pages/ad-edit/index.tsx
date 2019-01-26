import React from 'react';
import { Form, Select as ASelect, Button, Radio } from 'antd';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { requiredNamed } from '../../helpers/validation-rules';
import { Input, Select, RadioGroup, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { CarBrand, CarModel, BodyType, Condition } from '../../data-interfaces/enums';

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

const AdFormCommonField = (props: any) => (
	<Field
		component={Select}
		label={props.label}
		validate={requiredNamed}
		required={true}
		name={props.name}
		{...formItemLayout}
		{...props}
	/>
);

class AdForm extends React.Component<InjectedFormProps> {
	handleSubmit = () => {
		alert('sumbit');
	};
	cancel = () => {
		alert('cancel');
	};

	render() {
		const { handleSubmit, pristine, submitting } = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit(this.handleSubmit)}>
				<AdFormCommonField label='Car Brand' name='carBrand'>
					{fakeData.brends.map((key) => (
						<Option key={CarBrand[key]} value={key}>
							{CarBrand[key]}
						</Option>
					))}
				</AdFormCommonField>
				<AdFormCommonField label='Model' name='model'>
					{fakeData.models.map((key) => (
						<Option key={CarModel[key]} value={key}>
							{CarModel[key]}
						</Option>
					))}
				</AdFormCommonField>
				<AdFormCommonField label='Year of issue' name='yearOfIssue'>
					{fakeData.years.map((year) => (
						<Option key={year.toString()} value={year}>
							{year}
						</Option>
					))}
				</AdFormCommonField>
				<AdFormCommonField label='Body type' name='bodyType'>
					{fakeData.bodyTypes.map((key) => (
						<Option key={BodyType[key]} value={key}>
							{BodyType[key]}
						</Option>
					))}
				</AdFormCommonField>
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
					validate={requiredNamed}
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
					validate={requiredNamed}
					required={true}
					palceholder={labels.price}
					{...formItemLayout}
				/>
				<Field
					component={TextArea}
					label={labels.notes}
					name={'Notes'}
					palceholder={labels.notes}
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

const ReduxAdForm = reduxForm({
	form: 'ad',
})(AdForm);

export const AdEditPage = () => <ReduxAdForm />;
