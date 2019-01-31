import { connect } from 'react-redux';

import { Header as HeaderComponent } from './component';
import { StoreState } from '../../../store/root-reducer';

export interface HeaderStateProps {
	isAuthenticated: boolean;
	userName: string;
}

const mapStateToProps = ({ userAuth }: StoreState): HeaderStateProps => ({
	isAuthenticated: !!userAuth.userId,
	userName: `${userAuth.firstName} ${userAuth.secondName}`,
});

export const Header = connect(
	mapStateToProps,
	{},
)(HeaderComponent);
