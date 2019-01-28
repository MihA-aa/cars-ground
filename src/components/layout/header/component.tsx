import React from 'react';

import { routePaths } from '../../../helpers/route-paths';
import { Styled as CommonStyled } from '../../../styles/styled';
import { Styled } from '../styled';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => (
	<Styled.Header>
		<h2>
			<CommonStyled.Link to={routePaths.home}>Cars Ground</CommonStyled.Link>
		</h2>
		<h3>
			<Styled.LoginLink to={routePaths.login}>Login</Styled.LoginLink>
		</h3>
	</Styled.Header>
);
