import React from 'react';

import { ButtonsProps } from './interfaces';
import { Styled } from './styled';

export const Buttons: React.FC<ButtonsProps> = ({ edit, remove, removing }) => (
	<Styled.Buttons>
		<Styled.EditButton onClick={edit}>Edit</Styled.EditButton>
		<Styled.RemoveButton onClick={remove} loading={removing}>
			Remove
		</Styled.RemoveButton>
	</Styled.Buttons>
);
