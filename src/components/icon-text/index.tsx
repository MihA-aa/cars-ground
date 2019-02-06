import React from 'react';
import { Icon } from 'antd';

interface IconTextProps {
	type: string;
	text: string;
}

export const IconText: React.FC<IconTextProps> = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
);
