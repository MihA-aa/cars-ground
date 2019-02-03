import React from 'react';

import { routePaths } from '../../../helpers/route-paths';
import { Styled as CommonStyled } from '../../../styles/styled';
import { Styled } from '../styled';
import { HeaderProps } from './interfaces';

export class Header extends React.Component<HeaderProps> {
	logout = () => this.props.logout(() => this.props.history.push(routePaths.login));

	render = () => {
		const { isAuthenticated, userName } = this.props;
		return (
			<Styled.Header>
				<h2>
					<CommonStyled.Link to={routePaths.home}>Cars Ground</CommonStyled.Link>
				</h2>
				<Styled.RightMenu>
					{isAuthenticated ? (
						<h3>
							<Styled.RightMenuLink to={routePaths.adCreate} style={{ marginRight: 30 }}>
								Post Ad
							</Styled.RightMenuLink>
							<Styled.RightMenuLink to={'#'}>{userName}</Styled.RightMenuLink>
							<Styled.RightMenuLink to={'#'} onClick={this.logout}>
								Logout
							</Styled.RightMenuLink>
						</h3>
					) : (
						<h3>
							<Styled.RightMenuLink to={routePaths.login}>Login</Styled.RightMenuLink>
						</h3>
					)}
				</Styled.RightMenu>
			</Styled.Header>
		);
	};
}
