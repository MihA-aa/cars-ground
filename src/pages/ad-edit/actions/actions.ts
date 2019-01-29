import { Dispatch } from 'redux';

import { getBrands } from '../../../fake-server/fake-server';
import { getBrandsRequest, brandsFetched } from './action-creators';

export const loadBrands = () => async (dispatch: Dispatch) => {
	dispatch(getBrandsRequest());
	const result = await getBrands();
	dispatch(brandsFetched(result));
};
