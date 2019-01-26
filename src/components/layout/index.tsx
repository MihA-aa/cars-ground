import React from 'react';

import { Layout as AntdLayout, Breadcrumb } from 'antd';
import { Styled as CommonStyled } from '../../styles/styled';
import { Styled } from './styled';

export class Layout extends React.Component {
	render = () => (
		<AntdLayout>
			<Styled.Header>
				<h2>
					<CommonStyled.Link to=''>Cars Ground</CommonStyled.Link>
				</h2>
				<h3>
					<Styled.LoginLink to='/login'>Login</Styled.LoginLink>
				</h3>
			</Styled.Header>
			<Styled.Body>
				<Styled.PageHeader>Page Name</Styled.PageHeader>
				<Styled.Content>{this.props.children}</Styled.Content>
			</Styled.Body>
			<Styled.Footer>© 2019 Mihail Ermolaev</Styled.Footer>
		</AntdLayout>
	);
}
