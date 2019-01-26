import React from 'react';

import Loader from '../../components/loader';

export interface WithLoadingProps {
	isLoaded: boolean;
}

export const withLoading = <P extends WithLoadingProps>(
	Component: React.ComponentType<P>,
): React.FC<P> => ({ isLoaded, ...props }: WithLoadingProps) =>
	isLoaded ? <Component {...props as P} /> : <Loader />;
