import { ListingState, ItemData } from './interfaces';
import { ListingAction } from './actions/action-creators';
import { ListingActionTypes } from './actions/action-types';

const listData: ItemData[] = [];
for (let i = 0; i < 23; i++) {
	listData.push({
		href: 'http://ant.design',
		title: `ant design part ${i}`,
		avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		description:
			'Ant Design, a design language for background applications, is refined by Ant UED Team.',
		content:
			'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
		starsCount: 156,
		viewsCount: 1472,
		commentsCount: 4,
		photo: 'https://kor.ill.in.ua/m/610x385/2081558.jpg',
	});
}

const initialState: ListingState = {
	items: listData,
};

export const listingReducer = (
	state: ListingState = initialState,
	action: ListingAction,
): ListingState => {
	switch (action.type) {
		case ListingActionTypes.ADS_FETCHED:
			return { ...state, items: action.payload.items };

		default:
			return state;
	}
};
