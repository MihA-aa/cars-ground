import React from 'react';

import { routePaths } from '../../../helpers/route-paths';
import { Styled as CommonStyled } from '../../../styles/styled';
import { Styled } from '../styled';
import { HeaderProps } from './interfaces';

export const Header: React.FC<HeaderProps> = ({ isAuthenticated, userName, logout }) => (
	<Styled.Header>
		<h2>
			<CommonStyled.Link to={routePaths.home}>Cars Ground</CommonStyled.Link>
		</h2>
		<Styled.RightMenu>
			<h3>
				{isAuthenticated ? (
					<>
						<Styled.RightMenuLink to={routePaths.adCreate} style={{ marginRight: 30 }}>
							Post Ad
						</Styled.RightMenuLink>
						<Styled.RightMenuLink to={'#'}>{userName}</Styled.RightMenuLink>
						<Styled.RightMenuLink to={'#'} onClick={logout}>
							Logout
						</Styled.RightMenuLink>
					</>
				) : (
					<Styled.RightMenuLink to={routePaths.login}>Login</Styled.RightMenuLink>
				)}
			</h3>
		</Styled.RightMenu>
	</Styled.Header>
);
