import { connect } from 'react-redux';

import { defaultAvatar } from '../../../fake-server/fake-data';
import { Comments as CommentsComponent } from '../../../components/comment/comments';
import { ImmutableStore } from '../../../store/root-reducer';
import { CommentsStateToProps, CommentsDispatchToProps } from './interfaces';
import { ViewDispatch } from '../interfaces';
import { commentOn } from '../actions/actions';
import { getComments } from '../selectors';

const mapStateToProps = (state: ImmutableStore): CommentsStateToProps => ({
	avatar: defaultAvatar,
	comments: getComments(state),
	submitting: state.getIn(['view', 'commenting']),
	isAuth: !!state.getIn(['userAuth', 'userId']),
});

const mapDispatchToProps = (dispatch: ViewDispatch): CommentsDispatchToProps => {
	return {
		submit: async (value) => dispatch(await commentOn(value)),
	};
};

export const Comments = connect<
	CommentsStateToProps,
	CommentsDispatchToProps,
	null,
	ImmutableStore
>(
	mapStateToProps,
	mapDispatchToProps,
)(CommentsComponent);
