import { RouteComponentProps } from 'react-router-dom';

export interface HeaderStateProps {
	isAuthenticated: boolean;
	isAdmin: boolean;
	userName: string;
}

export interface HeaderDispatchProps {
	logout: () => void;
}

export type HeaderProps = HeaderStateProps & HeaderDispatchProps & RouteComponentProps;
