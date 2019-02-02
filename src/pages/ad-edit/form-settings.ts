import { Currency } from './../../data-interfaces/enums/currency';
import { years } from './../../fake-server/fake-data';
import { mapArrayToSelectOptions, mapEnumToSelectOptions } from './../../helpers/mappers';
import { Condition, BodyType } from '../../data-interfaces/enums';

export const formName = 'ad';

export const fields = {
	carBrand: 'carBrand',
	carBrandLabel: 'Car Brand',
	model: 'model',
	modelLabel: 'Model',
	yearOfIssue: 'yearOfIssue',
	yearOfIssueLabel: 'Year of issue',
	bodyType: 'bodyType',
	bodyTypeLabel: 'Body type',
	modification: 'modification',
	modificationLabel: 'Modification',
	condition: 'condition',
	conditionLabel: 'Condition',
	price: 'price',
	priceLabel: 'Price',
	notes: 'notes',
	notesLabel: 'Notes',
};

export const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 16 },
	},
};

export const tailFormItemLayout = {
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

export const options = {
	year: mapArrayToSelectOptions(years),
	body: mapEnumToSelectOptions(BodyType),
	condition: mapEnumToSelectOptions(Condition),
	currencies: mapEnumToSelectOptions(Currency),
};
