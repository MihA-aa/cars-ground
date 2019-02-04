import React from 'react';
import { List } from 'antd';

import { Item } from './item';
import { ListingProps } from './interfaces';

export class Listing extends React.Component<ListingProps> {
	componentDidMount() {
		this.props.loadAds();
	}

	render = () => (
		<List
			itemLayout='vertical'
			size='large'
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 3,
			}}
			dataSource={this.props.items}
			footer={
				<div>
					<b>ant design</b> footer part
				</div>
			}
			renderItem={Item}
		/>
	);
}
