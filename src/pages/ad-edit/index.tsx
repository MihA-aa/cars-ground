import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import { AdForm as AdFormComponent } from './component';
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
		resetForm: () => dispatch(reset(formName)),
		loadBrands: async () => dispatch(await loadBrands()),
		changeBrand: async (brand) => dispatch(await changeBrand(brand)),
		loadCar: async () => dispatch(await loadCar(adId, notFoundRedirect)),
	};
};

const AdForm = reduxForm<AdFormValues, PropsFromConnect>({
	form: formName,
	onSubmit: async (values, dispatch, props) => {
		return submit(values, () => props.history.push(routePaths.home));
	},
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
