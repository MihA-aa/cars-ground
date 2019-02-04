import React from 'react';
import { List, Avatar, Icon } from 'antd';

import { ItemData } from './interfaces';

export const Item: React.FC<ItemData> = (props) => (
	<List.Item
		key={props.title}
		actions={[
			<IconText type='star-o' text={props.starsCount.toString()} />,
			<IconText type='eye' text={props.viewsCount.toString()} />,
			<IconText type='message' text={props.commentsCount.toString()} />,
		]}
		extra={<img width={272} alt='logo' src={props.photo} />}
	>
		<List.Item.Meta
			avatar={<Avatar src={props.avatar} />}
			title={<a href={props.href}>{props.title}</a>}
			description={props.description}
		/>
		{props.content}
	</List.Item>
);

interface IconTextProps {
	type: string;
	text: string;
}

const IconText: React.FC<IconTextProps> = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);
