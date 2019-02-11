import { ActionCreator, Action } from 'redux';

import { ViewActionTypes } from './action-types';
import { Ad } from '../../../data-interfaces/interfaces/ad';
import { Comment } from '../../../data-interfaces/interfaces/comment';

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

const setCommenting: ActionCreator<SetCommentingAction> = (commenting: boolean) => ({
	type: ViewActionTypes.SET_COMMENTING,
	payload: { commenting },
});

const pushComment: ActionCreator<PushCommentAction> = (comment: Comment) => ({
	type: ViewActionTypes.PUSH_COMMENT,
	payload: { comment },
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

interface SetCommentingAction extends Action<ViewActionTypes.SET_COMMENTING> {
	payload: { commenting: boolean };
}

interface PushCommentAction extends Action<ViewActionTypes.PUSH_COMMENT> {
	payload: { comment: Comment };
}

export type ViewAction =
	| AdFetchedAction
	| SetIsOwnerAction
	| SetRemovingAction
	| SetCommentingAction
	| PushCommentAction;

export { adFetched, setIsOwner, setRemoving, setCommenting, pushComment };
