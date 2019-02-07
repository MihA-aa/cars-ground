import { ViewDispatch } from './../interfaces';
import { getAd } from '../../../fake-server/fake-server';
import { adFetched } from './action-creators';
import { contentLoading, contentLoaded } from '../../page/action-creators';

export const loadAd = (adId: number, notFoundCallback: () => void) => async (
	dispatch: ViewDispatch,
) => {
	isNaN(adId) && notFoundCallback();
	dispatch(contentLoading());
	const result = await getAd(adId);
	if (result) {
		dispatch(adFetched(result));
	} else {
		notFoundCallback();
	}
	dispatch(contentLoaded());
};
