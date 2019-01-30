import React from 'react';
import { Form, Select as ASelect, Button, Radio } from 'antd';
import { Field, InjectedFormProps } from 'redux-form';

import { required } from '../../helpers/validation-rules';
import { Input, Select, RadioGroup, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { CarBrand, CarModel, BodyType, Condition } from '../../data-interfaces/enums';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';
import { AdFormStateToProps, AdFormDispatchToProps } from '.';
import { mapArrayToSelectOptions, mapEnumToSelectOptions } from '../../helpers/mappers';
import { years } from '../../fake-server/fake-data';

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

const yearOptions = mapArrayToSelectOptions(years);
const bodyTypeOptions = mapEnumToSelectOptions(BodyType);
const conditionOptions = mapEnumToSelectOptions(Condition);

interface AdFormCommonFieldProps {
	label: string;
	name: string;
	loading?: boolean;
	disabled?: boolean;
	isRadioGroup?: boolean;
	options: SelectOption[];
	onChangeCallback?: (event: any) => void;
}

const AdFormSelectField: React.FC<AdFormCommonFieldProps> = (props) => {
	const OptionComponent = props.isRadioGroup ? Radio : Option;
	return (
		<Field
			component={Select}
			validate={required}
			onChangeCallback={props.onChangeCallback}
			{...props as AdFormCommonFieldProps}
			{...formItemLayout}
			required={true}
		>
			{props.options.map((option) => (
				<OptionComponent key={option.name} value={option.value}>
					{option.name}
				</OptionComponent>
			))}
		</Field>
	);
};

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
		const {
			handleSubmit,
			pristine,
			submitting,
			brandOptions,
			brandsLoading,
			modelOptions,
			modelsLoading,
			modelDisabled,
			loadModels,
		} = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit(this.handleSubmit)}>
				<AdFormSelectField
					label='Car Brand'
					name='carBrand'
					options={brandOptions}
					loading={brandsLoading}
					disabled={brandsLoading}
					onChangeCallback={loadModels}
				/>
				<AdFormSelectField
					label='Model'
					name='model'
					options={modelOptions}
					loading={modelsLoading}
					disabled={modelDisabled}
				/>
				<AdFormSelectField label='Year of issue' name='yearOfIssue' options={yearOptions} />
				<AdFormSelectField label='Body type' name='bodyType' options={bodyTypeOptions} />
				<Field
					component={Input}
					label={labels.modification}
					name={'Modification'}
					placeholder={labels.modification}
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
