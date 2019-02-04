import { connect } from 'react-redux';

import { Listing as ListingComponent } from './component';
import { ListingStateToProps, ListingDispatch, ListingDispatchToProps } from './interfaces';
import { StoreState } from '../../store/root-reducer';
import { loadAds } from './actions/actions';

const mapStateToProps = ({ listing }: StoreState): ListingStateToProps => ({
	items: listing.items,
});

const mapDispatchToProps = (dispatch: ListingDispatch): ListingDispatchToProps => ({
	loadAds: async () => dispatch(await loadAds()),
});

export const Listing = connect<ListingStateToProps, ListingDispatchToProps, null, StoreState>(
	mapStateToProps,
	mapDispatchToProps,
)(ListingComponent);
