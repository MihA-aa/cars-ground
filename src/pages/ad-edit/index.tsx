import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { AdForm as AdFormComponent } from './form';
import { StoreState } from '../../store/root-reducer';
import { loadBrands, loadCar, changeBrand, submit } from './actions/actions';
import {
	AdFormStateToProps,
	AdFormValues,
	PropsFromConnect,
	AdDispatch,
	AdFormDispatchToProps,
	RouteProps,
} from './interfaces';
import { withRouter } from 'react-router';
import { formName } from './form-settings';
import { routePaths } from '../../helpers/route-paths';
import { resetInitialValues } from './actions/action-creators';

const mapStateToProps = ({ ad }: StoreState): AdFormStateToProps => ({
	brandOptions: ad.brandOptions,
	modelOptions: ad.modelOptions,
	brandsLoading: ad.brandsLoading,
	modelsLoading: ad.modelsLoading,
	modelDisabled: ad.modelDisabled,
	initialValues: ad.initialValues!,
});

const mapDispatchToProps = (dispatch: AdDispatch, props: RouteProps): AdFormDispatchToProps => {
	const adId = Number(props.match.params.id);
	const notFoundRedirect = () => props.history.push(routePaths.notFound);
	return {
		resetForm: () => dispatch(resetInitialValues()),
		loadBrands: async () => dispatch(await loadBrands()),
		changeBrand: async (brand) => dispatch(await changeBrand(brand)),
		loadCar: async () => dispatch(await loadCar(adId, notFoundRedirect)),
		cancel: () => props.history.push(routePaths.home),
	};
};

const AdForm = reduxForm<AdFormValues, PropsFromConnect>({
	form: formName,
	onSubmit: async (values, dispatch, props) => {
		return submit(values, () => props.history.push(routePaths.home));
	},
	enableReinitialize: false,
})(AdFormComponent);

export const ReduxAdForm = connect<
	AdFormStateToProps,
	AdFormDispatchToProps,
	RouteProps,
	StoreState
>(
	mapStateToProps,
	mapDispatchToProps,
)(AdForm);

export const AdEditPage = withRouter(ReduxAdForm);
