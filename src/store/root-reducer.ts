import { ViewState } from './../pages/ad-view/interfaces';

import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';

import { UserAuthState, userAuthReducer } from '../auth/reducer';
import { adReducer } from '../pages/ad-edit/reducer';
import { AdState } from '../pages/ad-edit/interfaces';
import { listingReducer } from '../pages/listing/reducer';
import { ListingState } from '../pages/listing/interfaces';
import { viewReducer } from './../pages/ad-view/reducer';
import { PageState, pageReducer } from '../pages/page/reducer';

export interface StoreState {
	form: FormStateMap;
	userAuth: UserAuthState;
	ad: AdState;
	listing: ListingState;
	view: ViewState;
	page: PageState;
}

const store = {
	userAuth: userAuthReducer,
	form: formReducer,
	ad: adReducer,
	listing: listingReducer,
	view: viewReducer,
	page: pageReducer,
};

export default combineReducers<StoreState>(store);
