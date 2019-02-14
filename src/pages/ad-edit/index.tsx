import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';

import { AdForm as AdFormComponent } from './form';
import { ImmutableStore } from '../../store/root-reducer';
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
import { StrictImmutable } from '../../helpers/strict-immutable';

const mapStateToProps = (state: ImmutableStore): AdFormStateToProps => ({
	brandOptions: state.getIn(['ad', 'brandOptions']),
	modelOptions: state.getIn(['ad', 'modelOptions']),
	brandsLoading: state.getIn(['ad', 'brandsLoading']),
	modelsLoading: state.getIn(['ad', 'modelsLoading']),
	modelDisabled: state.getIn(['ad', 'modelDisabled']),
	initialValues: state.getIn(['ad', 'initialValues'])!,
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

const AdForm = reduxForm<StrictImmutable<AdFormValues>, PropsFromConnect>({
	form: formName,
	onSubmit: async (values, dispatch, props) => {
		return submit(values.toJS(), () => props.history.push(routePaths.home));
	},
})(AdFormComponent);

export const ReduxAdForm = connect<
	AdFormStateToProps,
	AdFormDispatchToProps,
	RouteProps,
	ImmutableStore
>(
	mapStateToProps,
	mapDispatchToProps,
)(AdForm);

export const AdEditPage = withRouter(ReduxAdForm);
