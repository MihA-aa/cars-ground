import React from 'react';
import { Loading } from '../../pages/loading';

export interface WithPageLoaderProps {
	isLoaded: boolean;
}

export const withPageLoader = <P extends WithPageLoaderProps>(
	Component: React.ComponentType<P>,
): React.FC<P> => ({ isLoaded, ...props }: WithPageLoaderProps) =>
	isLoaded ? <Component {...props as P} /> : <Loading />;
