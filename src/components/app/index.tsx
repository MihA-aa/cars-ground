import React, { Component } from 'react';

import Header from '../header';

import { Styled } from './styled';

export default class App extends Component {
	render() {
		return <Styled.App>Cars Ground
			<Header></Header>
		</Styled.App>;
	}
}
