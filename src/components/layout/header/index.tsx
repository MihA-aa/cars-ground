import { connect } from 'react-redux';

import { Header as HeaderComponent } from './component';
import { StoreState } from '../../../store/root-reducer';
import { logout } from '../../../auth/actions';
import { withRouter, RouteComponentProps } from 'react-router';
import { HeaderStateProps, HeaderDispatchProps } from './interfaces';

const mapStateToProps = ({ userAuth }: StoreState): HeaderStateProps => ({
	isAuthenticated: !!userAuth.userId,
	userName: `${userAuth.firstName} ${userAuth.secondName}`,
});

export const ConnectedHeader = connect<
	HeaderStateProps,
	HeaderDispatchProps,
	RouteComponentProps,
	StoreState
>(
	mapStateToProps,
	{ logout },
)(HeaderComponent);

export const Header = withRouter(ConnectedHeader);
