import { CommentData } from '../../../components/comment/interfaces';

export type CommentsProps = CommentsStateToProps & CommentsDispatchToProps;

export interface CommentsStateToProps {
	avatar: string;
	comments: CommentData[];
	submitting: boolean;
}

export interface CommentsDispatchToProps {
	submit: (value: string) => void;
}
