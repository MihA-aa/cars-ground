import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ImmutableStore } from '../../store/root-reducer';

export interface AuthorizationProps {
	isAuthorized: boolean;
}

export const withAuthorization = <P extends {}>(Component: React.ComponentType<P>) => {
	const authorize = (props: AuthorizationProps) => {
		const { isAuthorized, ...componentProps } = props as AuthorizationProps;
		return isAuthorized ? <Component {...componentProps as P} /> : <Redirect to='/login' />;
	};
	const mapStateToProps = (store: ImmutableStore): AuthorizationProps => ({
		isAuthorized: !!store.getIn(['userAuth', 'userId']),
	});
	return connect(mapStateToProps)(authorize);
};
