import { RouteComponentProps } from 'react-router-dom';

export interface AppDispatchProps {
	initAuth: () => Promise<void>;
}

export interface AppStateProps {
	isLoaded: boolean;
}

export type AppProps = AppDispatchProps & RouteComponentProps & AppStateProps;
