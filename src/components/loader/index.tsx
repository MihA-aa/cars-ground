import React from 'react';
import { Spin } from 'antd';

import { Styled } from './styled';

export interface LoaderProps {
	isLoading: boolean;
}

export const WrapLoader: React.FC<LoaderProps> = ({ isLoading, children }) => (
	<Spin spinning={isLoading} tip='Loading...'>
		{children}
	</Spin>
);

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => (
	<Styled.Loader tip='Loading...' size='large' spinning={isLoading} />
);
