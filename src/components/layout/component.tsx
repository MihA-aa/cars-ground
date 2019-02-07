import React from 'react';

import { Header } from './header';
import { Styled } from './styled';
import { Loader } from '../loader';
import { HeaderProps } from '.';

export const Layout: React.FC<HeaderProps> = ({ isLoading, children }) => (
	<Styled.Layout>
		<Header />
		<Styled.Body>
			<Styled.PageHeader>Page Name</Styled.PageHeader>
			<Styled.ContentWrapper>
				<Loader isLoading={isLoading} />
				<Styled.Content isLoading={isLoading}>{children}</Styled.Content>
			</Styled.ContentWrapper>
		</Styled.Body>
		<Styled.Footer>© 2019 Mihail Ermolaev</Styled.Footer>
	</Styled.Layout>
);
