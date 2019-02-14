import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import { FormStateMap } from 'redux-form';

import { ViewState } from './../pages/ad-view/interfaces';
import { UserAuthState, userAuthReducer } from '../auth/reducer';
import { adReducer } from '../pages/ad-edit/reducer';
import { AdState } from '../pages/ad-edit/interfaces';
import { listingReducer } from '../pages/listing/reducer';
import { ListingState } from '../pages/listing/interfaces';
import { viewReducer } from './../pages/ad-view/reducer';
import { PageState, pageReducer } from '../pages/page/reducer';
import { StrictImmutable } from '../helpers/strict-immutable';

export interface StoreState {
	form: FormStateMap;
	userAuth: StrictImmutable<UserAuthState>;
	ad: StrictImmutable<AdState>;
	listing: StrictImmutable<ListingState>;
	view: StrictImmutable<ViewState>;
	page: StrictImmutable<PageState>;
}

export type ImmutableStore = StrictImmutable<StoreState>;

const store = {
	userAuth: userAuthReducer,
	form: formReducer,
	ad: adReducer,
	listing: listingReducer,
	view: viewReducer,
	page: pageReducer,
};

export default combineReducers<StoreState>(store);
