import React from 'react';
import { List, Avatar, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import { IconText } from '../../components/icon-text';
import { routePaths } from '../../helpers/route-paths';
import { ItemData } from './interfaces';

export const Item: React.FC<ItemData> = (props) => {
	const IsLoading = props.title === 'Loading';
	return (
		<List.Item
			key={props.title}
			actions={
				IsLoading
					? []
					: [
							<IconText type='star-o' text={props.starsCount.toString()} />,
							<IconText type='eye' text={props.viewsCount.toString()} />,
							<IconText type='message' text={props.commentsCount.toString()} />,
					  ]
			}
			extra={!IsLoading && <img width={272} alt='logo' src={props.photo} />}
		>
			<Skeleton loading={IsLoading} active avatar paragraph={{ rows: 3 }}>
				<List.Item.Meta
					avatar={<Avatar src={props.avatar} />}
					title={<Link to={routePaths.adView(props.id.toString())}>{props.title}</Link>}
					description={props.description}
				/>
				{props.content}
			</Skeleton>
		</List.Item>
	);
};
