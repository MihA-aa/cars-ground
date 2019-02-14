import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { routePaths } from '../../../helpers/route-paths';
import { ImmutableStore } from '../../../store/root-reducer';
import { ViewDispatch } from '../interfaces';
import { remove } from '../actions/actions';
import { Buttons as ButtonsComponent } from './component';
import { ButtonsStateToProps, ButtonsOwnProps, ButtonsDispatchToProps } from './interfaces';

const mapStateToProps = (state: ImmutableStore): ButtonsStateToProps => ({
	removing: state.getIn(['view', 'removing']),
});

const mapDispatchToProps = (
	dispatch: ViewDispatch,
	props: ButtonsOwnProps,
): ButtonsDispatchToProps => {
	const successRedirect = () => props.history.push(routePaths.home);
	return {
		edit: () => props.history.push(routePaths.adEdit(`${props.carId}`)),
		remove: async () => dispatch(await remove(props.carId, successRedirect)),
	};
};

const ConnectedButtons = connect<
	ButtonsStateToProps,
	ButtonsDispatchToProps,
	ButtonsOwnProps,
	ImmutableStore
>(
	mapStateToProps,
	mapDispatchToProps,
)(ButtonsComponent);

export const Buttons = withRouter(ConnectedButtons);
