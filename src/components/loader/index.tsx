import React from 'react';
import { Spin } from 'antd';

export interface SpinnerProps {
	isLoading: boolean;
}

export const Loader: React.FC<SpinnerProps> = ({ isLoading, children }) => (
	<Spin spinning={isLoading} tip='Loading...'>
		{children}
	</Spin>
);
