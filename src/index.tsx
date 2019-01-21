import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import store from './store';
import { ErrorBoundary } from './components/error-boundary';
import { App } from './components/app';

import theme from './styles/material-ui';
import './styles/index.css';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<ErrorBoundary>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ErrorBoundary>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root'),
);
