import React, { ReactNode } from 'react';
import { Col } from 'antd';

import { icons } from '../../components/icons';
import { AdViewProps } from './interfaces';
import { LabelInformation } from './label-infromation';
import { CarModel, CarBrand, BodyType, Condition } from '../../data-interfaces/enums';
import { Comments } from './comments';
import { Buttons } from './buttons';

import { Styled } from './styled';

const labels = {
	yearOfIssue: 'Year of issue',
	bodyType: 'Body type',
	condition: 'Condition',
};

export class AdView extends React.Component<AdViewProps> {
	componentDidMount() {
		this.props.loadAd();
	}

	render = (): ReactNode => {
		const {
			data: { car, meta },
			isOwner,
		} = this.props;
		return (
			<div>
				<h1>
					{CarBrand[car.carBrand]} {CarModel[car.model]}, {car.yearOfIssue}
					{isOwner && <Buttons carId={car.carId} />}
				</h1>
				<Styled.Item actions={icons(meta.stars, meta.views, meta.comments.length)} />
				<Styled.Row>
					<Col span={8}>
						<Styled.Information>
							<Styled.Price>{car.price} $</Styled.Price>
							<Styled.Labels>
								<LabelInformation label={labels.yearOfIssue} value={car.yearOfIssue} />
								<LabelInformation label={labels.bodyType} value={BodyType[car.bodyType]} />
								<LabelInformation label={labels.condition} value={Condition[car.condition]} />
							</Styled.Labels>
						</Styled.Information>
					</Col>
					<Col span={16}>
						<img width={600} alt='logo' src={car.photo} />
					</Col>
				</Styled.Row>
				<Comments />
			</div>
		);
	};
}
