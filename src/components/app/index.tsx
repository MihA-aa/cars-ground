import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layout';
import { LoginPage } from '../../pages/login';
import { Listing } from '../../pages/listing';
import { AdEditPage } from '../../pages/ad-edit';
import { AdView } from '../../pages/ad-view';
import { NotFound } from '../../pages/not-found';
import { withAthorization } from '../../helpers/hocs/authorization';

export const App: React.FC = () => (
	<Switch>
		<Route path='/login' component={LoginPage} />
		<Layout>
			<Switch>
				<Route exact path='/' component={Listing} />
				<Route path='/Ad/Create' component={withAthorization(AdEditPage)} />
				<Route path='/Ad/Edit/:id' component={AdEditPage} />
				<Route path='/Ad/View/:id' component={AdView} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</Switch>
);
