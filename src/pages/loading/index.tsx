import React from 'react';
import { Styled } from './styled';

export const Loading: React.FC = () => (
	<Styled.Layout>
		<Styled.Spin tip='Loading...' size='large' />
	</Styled.Layout>
);
