import { ActionCreator, Action } from 'redux';

import { ListingActionTypes } from './action-types';
import { Ad } from '../../../data-interfaces/interfaces/ad';

const adsFetched: ActionCreator<AdsFetchedAction> = (items: Ad[]) => ({
	type: ListingActionTypes.ADS_FETCHED,
	payload: { items },
});

const reset: ActionCreator<ResetAction> = () => ({
	type: ListingActionTypes.RESET,
});

const setTotal: ActionCreator<SetTotalAction> = (total: number) => ({
	type: ListingActionTypes.SET_TOTAL,
	payload: { total },
});

interface AdsFetchedAction extends Action<ListingActionTypes.ADS_FETCHED> {
	payload: { items: Ad[] };
}

interface ResetAction extends Action<ListingActionTypes.RESET> {}

interface SetTotalAction extends Action<ListingActionTypes.SET_TOTAL> {
	payload: { total: number };
}

export type ListingAction = AdsFetchedAction | ResetAction | SetTotalAction;

export { adsFetched, reset, setTotal };
