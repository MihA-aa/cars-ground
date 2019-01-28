import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layout';
import { LoginPage } from '../../pages/login';
import { Listing } from '../../pages/listing';
import { AdEditPage } from '../../pages/ad-edit';
import { AdView } from '../../pages/ad-view';
import { NotFound } from '../../pages/not-found';
import { withAthorization } from '../../helpers/hocs/authorization';
import { routePaths } from '../../helpers/route-paths';

export const App: React.FC = () => (
	<Switch>
		<Route path={routePaths.login} component={LoginPage} />
		<Route path={routePaths.register} component={LoginPage} />
		<Layout>
			<Switch>
				<Route exact path={routePaths.home} component={Listing} />
				<Route path={routePaths.adCreate} component={withAthorization(AdEditPage)} />
				<Route path={routePaths.adEdit} component={withAthorization(AdEditPage)} />
				<Route path={routePaths.adView} component={AdView} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</Switch>
);
