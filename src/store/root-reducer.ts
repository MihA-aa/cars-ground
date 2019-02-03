import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';

import { UserAuthState, userAuthReducer } from '../auth/reducer';
import { adReducer } from '../pages/ad-edit/reducer';
import { AdState } from '../pages/ad-edit/interfaces';

export interface StoreState {
	form: FormStateMap;
	userAuth: UserAuthState;
	ad: AdState;
}

const store = {
	userAuth: userAuthReducer,
	form: formReducer,
	ad: adReducer,
};

export default combineReducers<StoreState>(store);
