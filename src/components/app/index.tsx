import { connect } from 'react-redux';

import { App as AppComponent } from './component';
import { AuthDispatch, initAuth } from '../../auth/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ImmutableStore } from '../../store/root-reducer';
import { AppStateProps, AppDispatchProps } from './interfaces';

const mapStateToProps = (store: ImmutableStore): AppStateProps => ({
	isLoading: store.getIn(['page', 'pageIsLoading'])!,
});

const mapDispatchToProps = (dispatch: AuthDispatch): AppDispatchProps => ({
	initAuth: async () => dispatch(await initAuth()),
});

const App = connect<AppStateProps, AppDispatchProps, RouteComponentProps, ImmutableStore>(
	mapStateToProps,
	mapDispatchToProps,
)(AppComponent);

export default withRouter(App);
