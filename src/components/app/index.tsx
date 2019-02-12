import { connect } from 'react-redux';

import { App as AppComponent } from './component';
import { AuthDispatch, initAuth } from '../../auth/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../store/root-reducer';
import { AppStateProps, AppDispatchProps } from './interfaces';

const mapStateToProps = ({ page }: StoreState): AppStateProps => ({
	isLoading: page.get('pageIsLoading')!,
});

const mapDispatchToProps = (dispatch: AuthDispatch): AppDispatchProps => ({
	initAuth: async () => dispatch(await initAuth()),
});

const App = connect<AppStateProps, AppDispatchProps, RouteComponentProps, StoreState>(
	mapStateToProps,
	mapDispatchToProps,
)(AppComponent);

export default withRouter(App);
