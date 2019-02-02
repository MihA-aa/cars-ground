import React from 'react';

import { Loader, SpinnerProps } from '../../components/loader';

export const withLoading = <P extends SpinnerProps>(
	Component: React.ComponentType<P>,
): React.FC<P> => ({ isLoading, ...props }: SpinnerProps) => (
	<Loader isLoading={isLoading}>
		<Component {...props as P} />
	</Loader>
);
