import React from 'react';
import { Col } from 'antd';

import { icons } from '../../components/icons';
import { AdViewProps } from './interfaces';
import { CarModel, CarBrand, BodyType, Condition } from '../../data-interfaces/enums';

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

	render = () => {
		const {
			data: { car, meta },
		} = this.props;
		return (
			<div>
				<h1>
					{CarBrand[car.carBrand]} {CarModel[car.model]}, {car.yearOfIssue}
				</h1>
				<Styled.Item actions={icons(meta.stars, meta.views, meta.comments)} />
				<Styled.Row>
					<Col span={8}>
						<div style={{ margin: '10px', marginRight: '20px' }}>
							<h1 style={{ borderBottom: '1px solid #e8e8e8' }}>{car.price} $</h1>
							<div style={{ margin: '30px', fontSize: '15px' }}>
								<LabelInformation label={labels.yearOfIssue} value={car.yearOfIssue} />
								<LabelInformation label={labels.bodyType} value={BodyType[car.bodyType]} />
								<LabelInformation label={labels.condition} value={Condition[car.condition]} />
							</div>
						</div>
					</Col>
					<Col span={16}>
						<img width={600} alt='logo' src={car.photo} />
					</Col>
				</Styled.Row>
			</div>
		);
	};
}

interface LabelInformationProps {
	label: string;
	value: string | number;
}

const LabelInformation: React.FC<LabelInformationProps> = ({ label, value }) => (
	<div style={{ marginBottom: '10px' }}>
		{label}{' '}
		<span style={{ color: 'black', right: '50px', display: 'inline-block', position: 'absolute' }}>
			{value}
		</span>
	</div>
);
