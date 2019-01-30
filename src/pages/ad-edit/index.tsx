import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { AdForm } from './component';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';
import { StoreState } from '../../store/root-reducer';
import { loadBrands, loadModels } from './actions/actions';
import { AdDispatch } from './actions/action-creators';
import { CarModel } from '../../data-interfaces/enums';

export interface AdFormStateToProps {
	brandOptions: SelectOption[];
	modelOptions: SelectOption[];
	brandsLoading: boolean;
	modelsLoading: boolean;
	modelDisabled: boolean;
}

export interface AdFormDispatchToProps {
	loadBrands: () => (dispatch: AdDispatch) => void;
	loadModels: (model: any) => (dispatch: AdDispatch) => void;
}

const mapStateToProps = ({ ad }: StoreState): AdFormStateToProps => ({
	brandOptions: ad.brandOptions,
	modelOptions: ad.modelOptions,
	brandsLoading: ad.brandsLoading,
	modelsLoading: ad.modelsLoading,
	modelDisabled: ad.modelDisabled,
});

const ReduxAdForm = reduxForm<{}, AdFormStateToProps & AdFormDispatchToProps>({
	form: 'ad',
})(AdForm);

export const AdEditPage = connect<AdFormStateToProps, {}, {}, StoreState>(
	mapStateToProps,
	{ loadBrands, loadModels },
)(ReduxAdForm);
