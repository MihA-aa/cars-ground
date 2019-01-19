import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import { ErrorBoundary } from './components/error-boundary';
import App from './components/app';

import './styles.css';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root'),
);
