import { connect } from 'react-redux';

import { defaultAvatar } from '../../../fake-server/fake-data';
import { Comments as CommentsComponent } from '../../../components/comment/comments';
import { StoreState } from '../../../store/root-reducer';
import { CommentsStateToProps, CommentsDispatchToProps } from './interfaces';
import { ViewDispatch } from '../interfaces';
import { commentOn } from '../actions/actions';
import { Comment } from '../../../data-interfaces/interfaces/comment';
import { CommentData } from '../../../components/comment/interfaces';

const mapCommentToCommentData = (comment: Comment): CommentData => {
	return {
		author: comment.author,
		avatar: comment.avatar,
		text: comment.text,
		datetime: comment.dateTime,
	};
};

const mapStateToProps = ({ view }: StoreState): CommentsStateToProps => ({
	avatar: defaultAvatar,
	comments: view.data.meta.comments.map((x) => mapCommentToCommentData(x)),
	submitting: view.commenting,
});

const mapDispatchToProps = (dispatch: ViewDispatch): CommentsDispatchToProps => {
	return {
		submit: async (value) => dispatch(await commentOn(value)),
	};
};

export const Comments = connect<CommentsStateToProps, CommentsDispatchToProps, null, StoreState>(
	mapStateToProps,
	mapDispatchToProps,
)(CommentsComponent);
