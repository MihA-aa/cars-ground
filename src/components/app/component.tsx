import React, { ReactNode } from 'react';
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

	render = (): ReactNode =>
		this.props.isLoading ? (
			<Loading />
		) : (
			<Switch>
				<Route path={routePaths.login} component={LoginPage} />
				<Route path={routePaths.register} component={LoginPage} />
				<Layout>
					<Switch>
						<Route exact path={routePaths.home} component={Listing} />
						<Route path={routePaths.ad.create} component={withAuthorization(AdEditPage)} />
						<Route path={routePaths.ad.edit()} component={withAuthorization(AdEditPage)} />
						<Route path={routePaths.ad.view()} component={AdViewPage} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</Switch>
		);
}
