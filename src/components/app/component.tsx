import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layout';
import { LoginPage } from '../../pages/login';
import { Listing } from '../../pages/listing';
import { AdEditPage } from '../../pages/ad-edit';
import { AdViewPage } from '../../pages/ad-view';
import { NotFound } from '../../pages/not-found';
import { withAuthorization } from '../../helpers/hocs/authorization';
import { routePaths } from '../../helpers/route-paths';
import { initData } from './actions';
import { AppProps } from './interfaces';
import { Loading } from '../../pages/loading';

export class App extends React.Component<AppProps> {
	componentDidMount() {
		initData();
		this.props.initAuth();
	}

	render = () =>
		!this.props.isLoaded ? (
			<Loading />
		) : (
			<Switch>
				<Route path={routePaths.login} component={LoginPage} />
				<Route path={routePaths.register} component={LoginPage} />
				<Layout>
					<Switch>
						<Route exact path={routePaths.home} component={Listing} />
						<Route path={routePaths.adCreate} component={withAuthorization(AdEditPage)} />
						<Route path={routePaths.adEdit()} component={withAuthorization(AdEditPage)} />
						<Route path={routePaths.adView()} component={AdViewPage} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Switch>
		);
}
