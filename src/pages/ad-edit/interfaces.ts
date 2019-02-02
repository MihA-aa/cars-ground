import { InjectedFormProps } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

import { SelectOption } from './../../data-interfaces/interfaces/select-option';
import { CarBrand, BodyType, CarModel, Condition } from './../../data-interfaces/enums';
import { AdAction } from './actions/action-creators';
import { ThunkDispatch } from 'redux-thunk';

export interface AdState {
	brandOptions: SelectOption[];
	modelOptions: SelectOption[];
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
	isLoading: boolean;
	initialValues: AdFormValues | null;
}

export interface AdFormValues {
	carId: number;
	userId: number;
	carBrand: CarBrand;
	model: CarModel;
	yearOfIssue: number;
	bodyType: BodyType;
	modification?: string;
	condition: Condition;
	price: number;
	notes?: string;
}

export type AdDispatch = ThunkDispatch<AdState, undefined, AdAction>;

interface RouteParams {
	id: string;
}

export type AdFormProps = PropsFromConnect & InjectedFormProps<AdFormValues, PropsFromConnect>;

export interface AdFormStateToProps {
	brandOptions: SelectOption[];
	modelOptions: SelectOption[];
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
	isLoading: boolean;
	initialValues: AdFormValues;
}

export interface AdFormDispatchToProps {
	loadBrands: () => (dispatch: AdDispatch) => void;
	changeBrand: (brand: CarBrand) => (dispatch: AdDispatch) => void;
	loadCar: (carId: number, notFoundCallback: () => void) => (dispatch: AdDispatch) => Promise<void>;
}

export type PropsFromConnect = RouteComponentProps<RouteParams> &
	AdFormStateToProps &
	AdFormDispatchToProps;
