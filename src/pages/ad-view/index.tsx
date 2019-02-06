import React from 'react';

import { AdView } from './component';
import { AdViewProps } from './interfaces';

const data = {
	id: 1,
	title: `ant design part 1`,
	avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
	description:
		'Ant Design, a design language for background applications, is refined by Ant UED Team.',
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
	starsCount: 156,
	viewsCount: 1472,
	commentsCount: 4,
	photo: 'https://kor.ill.in.ua/m/610x385/2081558.jpg',
};

export const AdViewPage = () => <AdView />;
