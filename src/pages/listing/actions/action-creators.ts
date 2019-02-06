import { ActionCreator, Action } from 'redux';

import { ListingActionTypes } from './action-types';
import { ItemData } from '../interfaces';

const getAdsRequest: ActionCreator<GetAdsRequestAction> = () => ({
	type: ListingActionTypes.GET_ADS_REQUEST,
});

const adsFetched: ActionCreator<AdsFetchedAction> = (items: ItemData[]) => ({
	type: ListingActionTypes.ADS_FETCHED,
	payload: { items },
});

interface GetAdsRequestAction extends Action<ListingActionTypes.GET_ADS_REQUEST> {}

interface AdsFetchedAction extends Action<ListingActionTypes.ADS_FETCHED> {
	payload: { items: ItemData[] };
}

export type ListingAction = GetAdsRequestAction | AdsFetchedAction;

export { getAdsRequest, adsFetched };
