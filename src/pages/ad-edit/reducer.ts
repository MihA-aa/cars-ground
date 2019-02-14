import { StrictImmutableList } from './../../helpers/strict-immutable';
import { fromJS, List } from 'immutable';
import { AdAction } from './actions/action-creators';
import { AdActionTypes } from './actions/action-types';
import { AdState } from './interfaces';
import { StrictImmutable } from '../../helpers/strict-immutable';
import { emptyCar } from '../../fake-server/fake-data';
import { SelectOption } from '../../data-interfaces/interfaces/select-option';

const initialState: AdState = {
	brandOptions: List<SelectOption>() as StrictImmutableList<SelectOption>,
	modelOptions: List<SelectOption>() as StrictImmutableList<SelectOption>,
	brandsLoading: false,
	modelsLoading: false,
	modelDisabled: false,
	initialValues: fromJS(emptyCar),
};

export const adReducer = (
	state: StrictImmutable<AdState> = fromJS(initialState),
	action: AdAction,
): StrictImmutable<AdState> => {
	switch (action.type) {
		case AdActionTypes.GET_BRANDS_REQUEST:
			return state.set('brandsLoading', true).set('modelDisabled', true);

		case AdActionTypes.BRANDS_FETCHED:
			return state.set('brandsLoading', false).set('brandOptions', fromJS(action.payload.options));

		case AdActionTypes.GET_MODELS_REQUEST:
			return state.set('modelsLoading', true).set('modelDisabled', true);

		case AdActionTypes.MODELS_FETCHED:
			return state
				.set('modelsLoading', false)
				.set('modelDisabled', false)
				.set('modelOptions', fromJS(action.payload.options));

		case AdActionTypes.CAR_LOADED:
			return state.set('initialValues', fromJS(action.payload.values));

		case AdActionTypes.RESET_INITIAL_VALUES:
			return state.set('initialValues', fromJS(emptyCar));

		default:
			return state;
	}
};
