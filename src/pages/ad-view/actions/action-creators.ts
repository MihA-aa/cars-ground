import { ActionCreator, Action } from 'redux';

import { ViewActionTypes } from './action-types';
import { Ad } from '../../../data-interfaces/interfaces/ad';

const adFetched: ActionCreator<AdFetchedAction> = (data: Ad) => ({
	type: ViewActionTypes.AD_FETCHED,
	payload: { data },
});

interface AdFetchedAction extends Action<ViewActionTypes.AD_FETCHED> {
	payload: { data: Ad };
}

export type ViewAction = AdFetchedAction;

export { adFetched };
