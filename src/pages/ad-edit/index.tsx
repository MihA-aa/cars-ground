import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { AdForm } from './component';
import { StoreState } from '../../store/root-reducer';
import { loadBrands, loadCar, changeBrand, submit } from './actions/actions';
import { AdFormStateToProps, AdFormValues, PropsFromConnect } from './interfaces';
import { withRouter } from 'react-router';
import { withLoading } from '../../helpers/hocs/with-loading';
import { formName } from './form-settings';
import { routePaths } from '../../helpers/route-paths';

const mapStateToProps = ({ ad }: StoreState): AdFormStateToProps => ({
	brandOptions: ad.brandOptions,
	modelOptions: ad.modelOptions,
	brandsLoading: ad.brandsLoading,
	modelsLoading: ad.modelsLoading,
	modelDisabled: ad.modelDisabled,
	initialValues: ad.initialValues!,
	isLoading: ad.isLoading,
});

const ReduxAdForm = reduxForm<AdFormValues, PropsFromConnect>({
	form: formName,
	onSubmit: async (values, dispatch, props) => {
		return dispatch(submit(values, () => props.history.push(routePaths.home)));
	},
})(withLoading(AdForm));

export const AdEditPage = connect<AdFormStateToProps, {}, {}, StoreState>(
	mapStateToProps,
	{ loadBrands, changeBrand, loadCar },
)(withRouter(ReduxAdForm));
