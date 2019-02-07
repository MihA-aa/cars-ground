import React from 'react';

import { Styled } from './styled';

interface IconTextProps {
	type: string;
	text: string;
}

export const IconText: React.FC<IconTextProps> = ({ type, text }) => (
	<span>
		<Styled.Icon type={type} />
		{text}
	</span>
);
