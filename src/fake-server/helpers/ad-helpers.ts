import { Ad } from '../../data-interfaces/interfaces/ad';
import { Car } from '../../data-interfaces/interfaces/car';
import { Comment } from '../../data-interfaces/interfaces/comment';
import { LocalStorageKeys, users } from '.';
import { CommentModel } from '../interfaces';
import { defaultAvatar } from '../fake-data';

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

export const viewAdId = (adId: number) => {
	const ads = getLocalAds();
	const newAds = ads.map((ad) =>
		ad.adId === adId ? { ...ad, meta: { ...ad.meta, views: ad.meta.views + 1 } } : ad,
	);
	insertAds(newAds);
};

export const pushComment = (comment: Comment): void => {
	const ads = getLocalAds();
	const newAds = ads.map((ad) =>
		ad.adId === comment.adId
			? { ...ad, meta: { ...ad.meta, comments: [...ad.meta.comments, comment] } }
			: ad,
	);
	insertAds(newAds);
};

export const mapCommentModelToComment = (commentModel: CommentModel): Comment => {
	const user = users.getUserById(commentModel.userId)!;
	return {
		adId: commentModel.adId,
		author: `${user.firstName} ${user.secondName}`,
		avatar: defaultAvatar,
		text: commentModel.text,
		dateTime: commentModel.dateTime,
	};
};
