import React from 'react';

import { Header } from './header';
import { Footer } from './footer';

export class Layout extends React.Component {
	render = () => (
		<div className='layout'>
			<Header />
			{this.props.children}
			<Footer />
		</div>
	);
}
