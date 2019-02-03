import { RouteComponentProps } from 'react-router-dom';

export interface HeaderStateProps {
	isAuthenticated: boolean;
	userName: string;
}

export interface HeaderDispatchProps {
	logout: (callback: () => void) => void;
}

export type HeaderProps = HeaderStateProps & HeaderDispatchProps & RouteComponentProps;
