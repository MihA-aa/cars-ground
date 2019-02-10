import React from 'react';
import { Styled } from './styled';

interface LabelInformationProps {
	label: string;
	value: string | number;
}

export const LabelInformation: React.FC<LabelInformationProps> = ({ label, value }) => (
	<Styled.LabelInformation>
		{label} <Styled.Value>{value}</Styled.Value>
	</Styled.LabelInformation>
);
