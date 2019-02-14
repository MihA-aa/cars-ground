import React from 'react';
import { Form, Button } from 'antd';
import { Field } from 'redux-form/immutable';

import { required, onlyNumber } from '../../helpers/validation-rules';
import { Input, TextArea } from '../../helpers/fields';
import { Styled } from './styled';
import { AdFormSelectField, AdFormRadioField, currenciesPostfix } from './fields';
import { AdFormProps } from './interfaces';
import { options, formItemLayout, tailFormItemLayout, fields } from './form-settings';
import { routePaths } from '../../helpers/route-paths';

export class AdForm extends React.Component<AdFormProps> {
	async componentDidMount() {
		if (this.props.match.path === routePaths.adEdit()) {
			this.props.loadCar();
		} else {
			this.props.loadBrands();
		}
	}

	componentWillUnmount() {
		this.props.resetForm();
	}

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
			cancel,
		} = this.props;
		return (
			<Styled.Form onSubmit={handleSubmit}>
				<Field name='carId' component='input' type='hidden' />
				<Field name='photo' component='input' type='hidden' />
				<AdFormSelectField
					label={fields.carBrandLabel}
					name={fields.carBrand}
					options={brandOptions.toJS()}
					loading={brandsLoading}
					disabled={brandsLoading}
					onChangeCallback={changeBrand}
				/>
				<AdFormSelectField
					label={fields.modelLabel}
					name={fields.model}
					options={modelOptions.toJS()}
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
					validate={[required, onlyNumber]}
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
					<Styled.SubmitButton loading={submitting} disabled={pristine || submitting}>
						Sumbit
					</Styled.SubmitButton>
					<Button onClick={cancel}>Cancel</Button>
				</Form.Item>
			</Styled.Form>
		);
	}
}
