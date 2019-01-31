import React from 'react';
import { Form, Button } from 'antd';
import { Field, InjectedFormProps } from 'redux-form';

import { required } from '../../helpers/validation-rules';
import { Input, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { AdFormSelectField, AdFormRadioField, currenciesPostfix } from './fields';
import { AdFormStateToProps, AdFormDispatchToProps } from '.';
import { options, formItemLayout, tailFormItemLayout, fields } from './form-settings';

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
					label={fields.carBrandLabel}
					name={fields.carBrand}
					options={brandOptions}
					loading={brandsLoading}
					disabled={brandsLoading}
					onChangeCallback={loadModels}
				/>
				<AdFormSelectField
					label={fields.modelLabel}
					name={fields.model}
					options={modelOptions}
					loading={modelsLoading}
					disabled={modelDisabled}
				/>
				<AdFormSelectField
					label={fields.yearOfIssueLabel}
					name={fields.yearOfIssue}
					options={options.year}
				/>
				<AdFormSelectField
					label={fields.bodyTypeLabel}
					name={fields.bodyType}
					options={options.body}
				/>
				<Field
					component={Input}
					label={fields.modificationLabel}
					name={fields.modification}
					placeholder={fields.modificationLabel}
					{...formItemLayout}
				/>
				<AdFormRadioField
					label={fields.conditionLabel}
					name={fields.condition}
					options={options.condition}
				/>
				<Field
					component={Input}
					label={fields.priceLabel}
					name={fields.price}
					validate={required}
					required={true}
					addonAfter={currenciesPostfix()}
					{...formItemLayout}
				/>
				<Field
					component={TextArea}
					label={fields.notesLabel}
					name={fields.notes}
					placeholder={fields.notesLabel}
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
