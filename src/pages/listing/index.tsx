import { connect } from 'react-redux';

import { Listing as ListingComponent } from './component';
import { ListingStateToProps, ListingDispatch, ListingDispatchToProps } from './interfaces';
import { StoreState } from '../../store/root-reducer';
import { loadAds, loadTotal } from './actions/actions';
import { reset } from './actions/action-creators';

const mapStateToProps = ({ listing }: StoreState): ListingStateToProps => ({
	items: listing.items,
	isLoaded: listing.isLoaded,
	total: listing.total,
});

const mapDispatchToProps = (dispatch: ListingDispatch): ListingDispatchToProps => ({
	loadAds: async (page, pageSize) => dispatch(await loadAds(page, pageSize)),
	reset: () => dispatch(reset()),
	loadTotal: () => dispatch(loadTotal()),
});

export const Listing = connect<ListingStateToProps, ListingDispatchToProps, null, StoreState>(
	mapStateToProps,
	mapDispatchToProps,
)(ListingComponent);
