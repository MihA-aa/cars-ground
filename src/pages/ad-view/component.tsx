import React from 'react';
import { List, Row, Col } from 'antd';

import { IconText } from '../../components/icon-text';
import { AdViewProps } from './interfaces';

export class AdView extends React.Component {
	render = () => (
		<div>
			<h1>Geely SC7 Prestige, 2016</h1>
			<div style={{ borderBottom: '1px solid #e8e8e8', marginBottom: '10px', marginTop: '-10px' }}>
				<List.Item
					actions={[
						<IconText type='star-o' text={'156'} />,
						<IconText type='eye' text={'1472'} />,
						<IconText type='message' text={'4'} />,
					]}
				/>
			</div>
			<Row
				style={{ borderBottom: '1px solid #e8e8e8', marginBottom: '15px', paddingBottom: '20px' }}
			>
				<Col span={8}>
					<div style={{ margin: '10px', marginRight: '20px' }}>
						<h1 style={{ borderBottom: '1px solid #e8e8e8' }}>20 000 $</h1>
						<div style={{ margin: '30px', fontSize: '15px' }}>
							<LabelInformation label='Year of issue' value='2016' />
							<LabelInformation label='Body type' value='Crossover' />
							<LabelInformation label='Condition' value='Used' />
						</div>
					</div>
				</Col>
				<Col span={16}>
					<img width={750} alt='logo' src={'https://kor.ill.in.ua/m/610x385/2081558.jpg'} />
				</Col>
			</Row>
		</div>
	);
}

interface LabelInformationProps {
	label: string;
	value: string;
}

const LabelInformation: React.FC<LabelInformationProps> = ({ label, value }) => (
	<div style={{ marginBottom: '10px' }}>
		{label}{' '}
		<span style={{ color: 'black', right: '150px', display: 'inline-block', position: 'absolute' }}>
			{value}
		</span>
	</div>
);
