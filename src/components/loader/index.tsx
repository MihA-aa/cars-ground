import React from 'react';
import { Spin } from 'antd';

export interface LoaderProps {
	isLoading: boolean;
}

export const WrapLoader: React.FC<LoaderProps> = ({ isLoading, children }) => (
	<Spin spinning={isLoading} tip='Loading...'>
		{children}
	</Spin>
);

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => (
	<Spin tip='Loading...' size='large' spinning={isLoading} style={{ flex: 1, margin: 'auto' }} />
);
