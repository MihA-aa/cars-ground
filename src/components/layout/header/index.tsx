import { connect } from 'react-redux';

import { Header as HeaderComponent } from './component';
import { StoreState } from '../../../store/root-reducer';
import { logout, AuthDispatch } from '../../../auth/actions';
import { withRouter, RouteComponentProps } from 'react-router';
import { HeaderStateProps, HeaderDispatchProps } from './interfaces';
import { routePaths } from '../../../helpers/route-paths';

const mapStateToProps = ({ userAuth }: StoreState): HeaderStateProps => ({
	isAuthenticated: !!userAuth.userId,
	isAdmin: userAuth.isAdmin,
	userName: `${userAuth.firstName} ${userAuth.secondName}`,
});

const mapDispatchToProps = (
	dispatch: AuthDispatch,
	props: RouteComponentProps,
): HeaderDispatchProps => {
	const logoutRedirect = () => props.history.push(routePaths.login);
	return {
		logout: () => dispatch(logout(logoutRedirect)),
	};
};

export const ConnectedHeader = connect<
	HeaderStateProps,
	HeaderDispatchProps,
	RouteComponentProps,
	StoreState
>(
	mapStateToProps,
	mapDispatchToProps,
)(HeaderComponent);

export const Header = withRouter(ConnectedHeader);
