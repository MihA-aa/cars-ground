import { ViewState } from './interfaces';

const initialState: ViewState = {};

export const viewReducer = (state: ViewState = initialState, action: any): ViewState => {
	switch (action.type) {
		default:
			return state;
	}
};
