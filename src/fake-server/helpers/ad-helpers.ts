import { Ad } from '../../data-interfaces/interfaces/ad';
import { LocalStorageKeys } from '.';
import { Car } from '../../data-interfaces/interfaces/car';

export const getLocalAds = (): Ad[] => {
	const jsonAds = localStorage.getItem(LocalStorageKeys.ads);
	return jsonAds ? JSON.parse(jsonAds) : [];
};

export const insertAds = (ads: Ad[]) => {
	localStorage.setItem(LocalStorageKeys.ads, JSON.stringify(ads));
};

export const insertAd = (ad: Ad) => {
	const ads = getLocalAds();
	ads.push(ad);
	insertAds(ads);
};

export const updateAdCar = (car: Car) => {
	const ads = getLocalAds();
	const newAds = ads.map((ad) => (ad.car.carId === car.carId ? { ...ad, car } : ad));
	insertAds(newAds);
};

export const generateAdId = (): number => {
	const ads = getLocalAds();
	return Math.max.apply(Math, ads.map((c) => c.adId)) + 1;
};
