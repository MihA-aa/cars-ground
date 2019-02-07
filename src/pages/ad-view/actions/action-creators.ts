import { ActionCreator, Action } from 'redux';

import { ViewActionTypes } from './action-types';
import { Ad } from '../../../data-interfaces/interfaces/ad';

const adFetched: ActionCreator<AdFetchedAction> = (data: Ad) => ({
	type: ViewActionTypes.AD_FETCHED,
	payload: { data },
});

const setIsOwner: ActionCreator<SetIsOwnerAction> = (isOwner: boolean) => ({
	type: ViewActionTypes.SET_IS_OWNER,
	payload: { isOwner },
});

const setRemoving: ActionCreator<SetRemovingAction> = (removing: boolean) => ({
	type: ViewActionTypes.SET_REMOVING,
	payload: { removing },
});

interface AdFetchedAction extends Action<ViewActionTypes.AD_FETCHED> {
	payload: { data: Ad };
}

interface SetIsOwnerAction extends Action<ViewActionTypes.SET_IS_OWNER> {
	payload: { isOwner: boolean };
}

interface SetRemovingAction extends Action<ViewActionTypes.SET_REMOVING> {
	payload: { removing: boolean };
}

export type ViewAction = AdFetchedAction | SetIsOwnerAction | SetRemovingAction;

export { adFetched, setIsOwner, setRemoving };
