import React from 'react';

import { IconText } from './icon-text';

export const icons = (stars: number, views: number, comments: number): React.ReactNode[] => [
	<IconText type='star-o' text={stars.toString()} />,
	<IconText type='eye' text={views.toString()} />,
	<IconText type='message' text={comments.toString()} />,
];
