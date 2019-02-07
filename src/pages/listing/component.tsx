import React, { ReactNode } from 'react';
import { List } from 'antd';

import { Item } from './item';
import { ListingProps } from './interfaces';

export class Listing extends React.Component<ListingProps> {
	componentDidMount() {
		this.props.loadAds();
	}

	render = (): ReactNode => (
		<List
			itemLayout='vertical'
			size='large'
			pagination={{ pageSize: 3 }}
			dataSource={this.props.items}
			renderItem={Item}
		/>
	);
}
