import React from 'react';
import { Comment, Avatar } from 'antd';

import { Editor } from './editor';
import { CommentList } from './comment-list';
import { CommentsProps } from './interfaces';

export class Comments extends React.Component<CommentsProps> {
	state = {
		value: '',
	};

	handleSubmit = () => {
		this.state.value && this.props.submit(this.state.value);
	};

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const { value } = this.state;
		const { comments, submitting, avatar } = this.props;

		return (
			<>
				{comments.length > 0 && <CommentList comments={comments} />}
				<Comment
					avatar={<Avatar src={avatar} />}
					content={
						<Editor
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
							submitting={submitting}
							value={value}
						/>
					}
				/>
			</>
		);
	}
}
