import React from 'react';
import { Typography } from '@material-ui/core';

import { Styled } from './styled';

export const Footer: React.FC = () => (
	<Styled.Footer>
		<Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
			© 2019 Mihail Ermolaev
		</Typography>
	</Styled.Footer>
);
