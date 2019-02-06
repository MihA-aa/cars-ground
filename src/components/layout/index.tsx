import React from 'react';

import { Header } from './header';
import { Styled } from './styled';

export class Layout extends React.Component {
	render = () => (
		<Styled.Layout>
			<Header />
			<Styled.Body>
				<Styled.PageHeader>Page Name</Styled.PageHeader>
				<Styled.Content>{this.props.children}</Styled.Content>
			</Styled.Body>
			<Styled.Footer>© 2019 Mihail Ermolaev</Styled.Footer>
		</Styled.Layout>
	);
}
