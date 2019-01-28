import { connect } from 'react-redux';

import { Header as HeaderComponent } from './component';
import { StoreState } from '../../../store/root-reducer';

interface HeaderStateProps {}

const mapStateToProps = ({ userAuth }: StoreState): HeaderStateProps => ({});

export const Header = connect(
	mapStateToProps,
	{},
)(HeaderComponent);
