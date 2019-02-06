import { Dispatch } from 'redux';

export const loadCar = (carId: number, notFoundCallback: () => void) => async (
	dispatch: Dispatch,
) => {
	// dispatch(pageLoading());
	// const result = await getCar(carId);
	// if (result) {
	// 	dispatch(carLoaded(result));
	// 	await dispatch(loadBrands());
	// 	await dispatch(loadModels(result.carBrand));
	// } else {
	// 	notFoundCallback();
	// }
	// dispatch(pageLoaded());
};
