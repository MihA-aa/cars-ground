import React from 'react';

import { WrapLoader, LoaderProps } from '../../components/loader';

export const withLoading = <P extends LoaderProps>(
	Component: React.ComponentType<P>,
): React.FC<P> => ({ isLoading, ...props }: LoaderProps) => (
	<WrapLoader isLoading={isLoading}>
		<Component {...props as P} />
	</WrapLoader>
);
