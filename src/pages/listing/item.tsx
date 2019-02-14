import React from 'react';
import { List, Avatar, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import { item } from './settings';
import { routePaths } from '../../helpers/route-paths';
import { Ad } from '../../data-interfaces/interfaces/ad';
import { CarBrand, CarModel, Condition } from '../../data-interfaces/enums';
import { icons } from '../../components/icons';
import { StrictImmutable } from '../../helpers/strict-immutable';

export const Item: React.FC<StrictImmutable<Ad>> = (props) => {
	const { adId, meta, car } = props.toJS();
	const IsLoading = !adId;
	return (
		<List.Item
			key={adId}
			actions={IsLoading ? [] : icons(meta.stars, meta.views, meta.comments.length)}
			extra={!IsLoading && <img width={item.imageWidth} alt='logo' src={car.photo} />}
		>
			<Skeleton loading={IsLoading} active avatar paragraph={item.skeletonParagraph}>
				<List.Item.Meta
					avatar={<Avatar src={meta.avatar} />}
					title={
						<Link to={routePaths.ad.view(adId.toString())}>
							{CarBrand[car.carBrand]} {CarModel[car.model]}, {car.yearOfIssue}
						</Link>
					}
					description={car.notes}
				/>
				{car.price} {car.modification} {Condition[car.condition]}
			</Skeleton>
		</List.Item>
	);
};
