import React from 'react';

interface LabelInformationProps {
	label: string;
	value: string | number;
}

export const LabelInformation: React.FC<LabelInformationProps> = ({ label, value }) => (
	<div style={{ marginBottom: '10px' }}>
		{label}{' '}
		<span style={{ color: 'black', right: '50px', display: 'inline-block', position: 'absolute' }}>
			{value}
		</span>
	</div>
);
