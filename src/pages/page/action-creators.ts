import { ActionCreator, Action } from 'redux';

import { PageActionTypes } from './action-types';

const pageLoading: ActionCreator<PageLoadingAction> = () => ({
	type: PageActionTypes.PAGE_LOADING,
});

const pageLoaded: ActionCreator<PageLoadedAction> = () => ({
	type: PageActionTypes.PAGE_LOADED,
});

const contentLoading: ActionCreator<ContentLoadingAction> = () => ({
	type: PageActionTypes.CONTENT_LOADING,
});

const contentLoaded: ActionCreator<ContentLoadedAction> = () => ({
	type: PageActionTypes.CONTENT_LOADED,
});

interface ContentLoadingAction extends Action<PageActionTypes.CONTENT_LOADING> {}

interface PageLoadingAction extends Action<PageActionTypes.PAGE_LOADING> {}

interface ContentLoadedAction extends Action<PageActionTypes.CONTENT_LOADED> {}

interface PageLoadedAction extends Action<PageActionTypes.PAGE_LOADED> {}

export type PageAction =
	| PageLoadingAction
	| ContentLoadingAction
	| ContentLoadedAction
	| PageLoadedAction;

export { pageLoading, pageLoaded, contentLoading, contentLoaded };
