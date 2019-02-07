import { ActionCreator, Action } from 'redux';

import { ListingActionTypes } from './action-types';
import { Ad } from '../../../data-interfaces/interfaces/ad';

const adsFetched: ActionCreator<AdsFetchedAction> = (items: Ad[]) => ({
	type: ListingActionTypes.ADS_FETCHED,
	payload: { items },
});

interface AdsFetchedAction extends Action<ListingActionTypes.ADS_FETCHED> {
	payload: { items: Ad[] };
}

export type ListingAction = AdsFetchedAction;

export { adsFetched };
