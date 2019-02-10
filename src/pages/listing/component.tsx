import React, { ReactNode } from 'react';
import { List } from 'antd';

import { Item } from './item';
import { ListingProps } from './interfaces';
import { pageSize } from './settings';

export class Listing extends React.Component<ListingProps> {
	componentDidMount() {
		this.props.loadTotal();
		this.props.loadAds(1, pageSize);
	}

	componentWillUnmount() {
		this.props.reset();
	}

	render = (): ReactNode => {
		const { items, total, loadAds: onChange } = this.props;
		return (
			<List
				itemLayout='vertical'
				size='large'
				pagination={{ pageSize, total, onChange }}
				dataSource={items}
				renderItem={Item}
			/>
		);
	};
}
