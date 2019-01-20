import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layout';
import { LoginPage } from '../../pages/login';
import { Listing } from '../../pages/listing';
import { AdForm } from '../../pages/ad-edit';
import { withAthorization } from '../../hocs/authorization';
import { NotFound } from '../../pages/not-found';

export const App: React.FC = () => (
	<Switch>
		<Route path='/login' component={LoginPage} />
		<Layout>
			<Switch>
				<Route exact path='/' component={Listing} />
				<Route path='/newAd' component={withAthorization(AdForm)} />
				<Route component={NotFound} />
				{/* <Route path='/watch/:id' component={WatchAd} />
						<Route path='/edit/:id' component={EditAd} /> */}
			</Switch>
		</Layout>
	</Switch>
);
