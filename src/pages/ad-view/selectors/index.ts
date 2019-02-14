import { ImmutableStore } from '../../../store/root-reducer';
import { CommentData } from '../../../components/comment/interfaces';
import { Comment } from '../../../data-interfaces/interfaces/comment';
import { Ad } from '../../../data-interfaces/interfaces/ad';
import { StrictImmutable, StrictImmutableList } from '../../../helpers/strict-immutable';

const mapCommentToCommentData = (comment: Comment): CommentData => {
	return {
		author: comment.author,
		avatar: comment.avatar,
		text: comment.text,
		datetime: comment.dateTime,
	};
};

export const getComments = (state: ImmutableStore): CommentData[] =>
	(((state.getIn(['view', 'data']) as unknown) as StrictImmutable<Ad>).getIn([
		'meta',
		'comments',
	]) as StrictImmutableList<Comment>)
		.toJS()
		.map((x: any) => mapCommentToCommentData(x));

export const getAd = (state: ImmutableStore): Ad =>
	((state.getIn(['view', 'data']) as unknown) as StrictImmutable<Ad>).toJS();
