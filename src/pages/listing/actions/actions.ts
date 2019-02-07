import { ListingDispatch } from '../interfaces';
import { adsFetched } from './action-creators';
import { getAds } from '../../../fake-server/fake-server';

export const loadAds = () => async (dispatch: ListingDispatch) => {
	const result = await getAds();
	dispatch(adsFetched(result));
};
