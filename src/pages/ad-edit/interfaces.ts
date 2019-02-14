import { StrictImmutableList, StrictImmutable } from './../../helpers/strict-immutable';
import { InjectedFormProps } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

import { SelectOption } from './../../data-interfaces/interfaces/select-option';
import { CarBrand, BodyType, CarModel, Condition } from './../../data-interfaces/enums';
import { AdAction } from './actions/action-creators';
import { BaseDispatch } from '../../helpers/base-dispatch';

export interface AdState {
	brandOptions: StrictImmutableList<SelectOption>;
	modelOptions: StrictImmutableList<SelectOption>;
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
	initialValues: StrictImmutable<AdFormValues>;
}

export interface AdFormValues {
	carId: number;
	carBrand: CarBrand;
	model: CarModel;
	yearOfIssue: number;
	bodyType: BodyType;
	modification?: string;
	condition: Condition;
	price: number;
	notes?: string;
	photo: string;
}

export type AdDispatch = BaseDispatch<AdAction>;

interface RouteParams {
	id: string;
}

export type RouteProps = RouteComponentProps<RouteParams>;

export type AdFormProps = PropsFromConnect &
	InjectedFormProps<StrictImmutable<AdFormValues>, PropsFromConnect>;

export interface AdFormStateToProps {
	brandOptions: StrictImmutableList<SelectOption>;
	modelOptions: StrictImmutableList<SelectOption>;
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
	initialValues: StrictImmutable<AdFormValues>;
}

export interface AdFormDispatchToProps {
	loadBrands: () => Promise<void>;
	changeBrand: (brand: CarBrand) => Promise<void>;
	loadCar: () => Promise<void>;
	resetForm: () => void;
	cancel: () => void;
}

export type PropsFromConnect = RouteProps & AdFormStateToProps & AdFormDispatchToProps;

export interface AdFormCommonFieldProps {
	label: string;
	name: string;
	loading?: boolean;
	disabled?: boolean;
	options: SelectOption[];
	onChangeCallback?: (event: any) => void;
}
