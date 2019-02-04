import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';

import { UserAuthState, userAuthReducer } from '../auth/reducer';
import { adReducer } from '../pages/ad-edit/reducer';
import { AdState } from '../pages/ad-edit/interfaces';
import { listingReducer } from '../pages/listing/reducer';
import { ListingState } from '../pages/listing/interfaces';

export interface StoreState {
	form: FormStateMap;
	userAuth: UserAuthState;
	ad: AdState;
	listing: ListingState;
}

const store = {
	userAuth: userAuthReducer,
	form: formReducer,
	ad: adReducer,
	listing: listingReducer,
};

export default combineReducers<StoreState>(store);
