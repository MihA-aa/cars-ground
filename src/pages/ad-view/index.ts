import { connect } from 'react-redux';

import { AdView as AdViewComponent } from './component';
import { AdViewStateToProps, AdViewDispatchToProps, ViewDispatch, RootProps } from './interfaces';
import { StoreState } from '../../store/root-reducer';
import { loadAd } from './actions/actions';
import { withRouter } from 'react-router-dom';
import { routePaths } from '../../helpers/route-paths';

const mapStateToProps = ({ view }: StoreState): AdViewStateToProps => ({
	data: view.data,
	isOwner: view.isOwner,
});

const mapDispatchToProps = (dispatch: ViewDispatch, props: RootProps): AdViewDispatchToProps => {
	const adId = Number(props.match.params.id);
	const notFoundRedirect = () => props.history.push(routePaths.notFound);
	return {
		loadAd: async () => dispatch(await loadAd(adId, notFoundRedirect)),
	};
};

export const AdView = connect<AdViewStateToProps, AdViewDispatchToProps, RootProps, StoreState>(
	mapStateToProps,
	mapDispatchToProps,
)(AdViewComponent);

export const AdViewPage = withRouter(AdView);
