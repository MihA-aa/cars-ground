import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { Styled } from '../../../styles/styled';

import './styles.css';

export const Header: React.FC = () => (
	<AppBar position='static'>
		<Toolbar>
			<Typography variant='h6' color='inherit' className='label'>
				<Styled.Link to=''>Cars Ground</Styled.Link>
			</Typography>
			<Button color='inherit'>Login</Button>
		</Toolbar>
	</AppBar>
);
