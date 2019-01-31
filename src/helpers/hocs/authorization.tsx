import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { StoreState } from '../../store/root-reducer';

export interface AthorizationProps {
	isAuthorized: boolean;
}

export const withAthorization = <P extends object>(Component: React.ComponentType<P>) => {
	const authorize = (props: AthorizationProps) => {
		const { isAuthorized, ...componentProps } = props as AthorizationProps;
		return isAuthorized ? <Component {...componentProps as P} /> : <Redirect to='/login' />;
	};
	const mapStateToProps = ({ userAuth }: StoreState): AthorizationProps => ({
		isAuthorized: !!userAuth.userId,
	});
	return connect(mapStateToProps)(authorize);
};
