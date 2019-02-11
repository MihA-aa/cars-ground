import React from 'react';
import { Comment, List } from 'antd';

import { CommentData } from './interfaces';
import { CommentProps } from 'antd/lib/comment';

interface CommentListProps {
	comments: CommentData[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
	<List
		dataSource={comments.map((c) => ({ ...c, content: <p>{c.text}</p> }))}
		header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
		itemLayout='horizontal'
		renderItem={Item}
	/>
);

const Item = (props: CommentProps) => <Comment {...props} />;
