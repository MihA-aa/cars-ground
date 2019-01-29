import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { AdForm } from './component';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';
import { StoreState } from '../../store/root-reducer';
import { loadBrands } from './actions/actions';
import { AdDispatch } from './actions/action-creators';

export interface AdFormStateToProps {
	brandOptions: SelectOption[];
	brandLoading: boolean;
}

export interface AdFormDispatchToProps {
	loadBrands: () => (dispatch: AdDispatch) => void;
}

const mapStateToProps = ({ ad }: StoreState): AdFormStateToProps => ({
	brandOptions: ad.brandOptions,
	brandLoading: ad.brandLoading,
});

const ReduxAdForm = reduxForm<{}, AdFormStateToProps & AdFormDispatchToProps>({
	form: 'ad',
})(AdForm);

export const AdEditPage = connect<AdFormStateToProps, {}, {}, StoreState>(
	mapStateToProps,
	{ loadBrands },
)(ReduxAdForm);
