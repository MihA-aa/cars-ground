import React from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form';

import { required } from '../../helpers/validation-rules';
import { Input, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { AdFormSelectField, AdFormRadioField, currenciesPostfix } from './fields';
import { AdFormProps } from './interfaces';
import { options, formItemLayout, tailFormItemLayout, fields } from './form-settings';
import { routePaths } from '../../helpers/route-paths';

export class AdForm extends React.Component<AdFormProps> {
	componentDidMount() {
		if (this.props.match.path === routePaths.adEdit) {
			const adId = Number(this.props.match.params.id);
			const notFoundRedirect = () => this.props.history.push(routePaths.notFound);
			isNaN(adId) ? notFoundRedirect() : this.props.loadCar(adId, notFoundRedirect);
		} else {
			this.props.loadBrands();
		}
	}
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
			changeBrand,
		} = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit}>
				<Field name='carId' component='input' type='hidden' />
				<Field name='userId' component='input' type='hidden' />
				<AdFormSelectField
					label={fields.carBrandLabel}
					name={fields.carBrand}
					options={brandOptions}
					loading={brandsLoading}
					disabled={brandsLoading}
					onChangeCallback={changeBrand}
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
