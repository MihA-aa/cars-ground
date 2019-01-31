import React from 'react';

import { routePaths } from '../../../helpers/route-paths';
import { Styled as CommonStyled } from '../../../styles/styled';
import { Styled } from '../styled';
import { HeaderStateProps } from '.';

export const Header: React.FC<HeaderStateProps> = ({ isAuthenticated, userName }) => (
	<Styled.Header>
		<h2>
			<CommonStyled.Link to={routePaths.home}>Cars Ground</CommonStyled.Link>
		</h2>
		<Styled.RightMenu>
			{isAuthenticated ? (
				<h3>
					<CommonStyled.Link to={routePaths.adCreate} style={{ marginRight: 30 }}>
						Post Ad
					</CommonStyled.Link>
					<CommonStyled.Link to={'#'}>{userName}</CommonStyled.Link>
				</h3>
			) : (
				<h3>
					<CommonStyled.Link to={routePaths.login}>Login</CommonStyled.Link>
				</h3>
			)}
		</Styled.RightMenu>
	</Styled.Header>
);
