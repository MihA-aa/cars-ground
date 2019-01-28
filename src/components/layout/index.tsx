import React from 'react';
import { Layout as AntdLayout } from 'antd';

import { Header } from './header';
import { Styled } from './styled';

export class Layout extends React.Component {
	render = () => (
		<AntdLayout>
			<Header />
			<Styled.Body>
				<Styled.PageHeader>Page Name</Styled.PageHeader>
				<Styled.Content>{this.props.children}</Styled.Content>
			</Styled.Body>
			<Styled.Footer>© 2019 Mihail Ermolaev</Styled.Footer>
		</AntdLayout>
	);
}
